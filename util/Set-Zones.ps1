Import-Module -Force .\SaintCoinach.psm1 -Function `
  Import-SaintCoinachCsv, `
  ConvertTo-DataJson, `
  ConvertTo-TypeObjectJson, `
  Set-ResourceData, `
  Get-JsonData

$regionsJson = Get-JsonData -Name 'regions'
$uniqueZoneIds = ($regionsJson.huntRegions.zoneIds + $regionsJson.weatherRegions.zoneIds) | Sort-Object | Get-Unique

$territoryTypes = Import-SaintCoinachCsv -Name 'TerritoryType' | ForEach-Object {
  [PSCustomObject]@{
    id               = [int]$_.'#';
    name             = [string]$_.Name;
    placeName_region = [int]$_.'PlaceName{Region}';
    placeName_zone   = [int]$_.'PlaceName{Zone}';
    placeName        = [int]$_.PlaceName;
    mapId            = [string]$_.Map;
    weatherRate      = [int]$_.WeatherRate;
    exVersion        = [int]$_.ExVersion;
  }
} | Where-Object { $uniqueZoneIds.Contains($_.id) }

$transients = Import-SaintCoinachCsv -Name 'TerritoryTypeTransient' | ForEach-Object {
  [PSCustomObject]@{
    id      = [int]$_.'#';
    offsetZ = [int]$_.'Offset{Z}';
  }
} | Where-Object { $uniqueZoneIds.Contains($_.id) }

$zoneIdToOffsetZ = New-Object 'System.Collections.Generic.Dictionary[int, int]'
foreach ($transient in $transients) {
  $zoneIdToOffsetZ[$transient.id] = $transient.offsetZ
}

$uniqueMapIds = $territoryTypes.mapId | Sort-Object | Get-Unique
$maps = Import-SaintCoinachCsv -Name 'Map' | ForEach-Object {
  [PSCustomObject]@{
    id               = [int]$_.'#';
    mapMarkerId      = [int]$_.MapMarkerRange;
    name             = [string]$_.Id;
    sizeFactor       = [int]$_.SizeFactor;
    offsetX          = [int]$_.'Offset{X}';
    offsetY          = [int]$_.'Offset{Y}';
    placeName_region = [int]$_.'PlaceName{Region}';
    placeName        = [int]$_.PlaceName;
    placeName2       = [int]$_.'PlaceName{Sub}';
    territoryType    = [int]$_.TerritoryType;
  }
} | Where-Object { $uniqueMapIds.Contains($_.id) }



# $maps | Format-Table
#const territoryTypeTransientRows =
#  await retrieveTerritoryTypeTransients(zoneIds);
#const mapMarkerRows = await retrieveMapMarkers();
#const exVersionRows = await retrieveExVersions();

$placeNameToZoneIdmobMap = New-Object 'System.Collections.Generic.SortedDictionary[int, int]'
foreach ($map in $maps) {
  $placeNameToZoneIdmobMap.Add($map.placeName, $map.territoryType)
}
$placeNameToZoneIdmobMap
