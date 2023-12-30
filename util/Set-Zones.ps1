Import-Module -Force .\SaintCoinach.psm1 -Function `
  Import-SaintCoinachCsv, `
  ConvertTo-DataJson, `
  ConvertTo-TypeObjectJson, `
  Set-ResourceData, `
  Get-JsonData

$regionsJson = Get-JsonData -Name 'regions'
$uniqueZoneIds = ($regionsJson.huntRegions.zoneIds + $regionsJson.weatherRegions.zoneIds) | Sort-Object | Get-Unique

$zoneIdToOffsetZ = New-Object 'System.Collections.Generic.Dictionary[int, int]'
Import-SaintCoinachCsv -Name 'TerritoryTypeTransient' |
  Where-Object { $uniqueZoneIds.Contains([int]$_.'#') } |
  ForEach-Object {
    $zoneIdToOffsetZ.Add([int]$_.'#', [int]$_.'Offset{Z}')
  }

$mapIdToMap = New-Object 'System.Collections.Generic.Dictionary[int, PSObject]'
Import-SaintCoinachCsv -Name 'Map' | 
  Where-Object { $uniqueZoneIds.Contains([int]$_.TerritoryType) } |
  ForEach-Object {
    $mapIdToMap.Add([int]$_.'#', [PSCustomObject]@{
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
      })
  }

$allZones = Import-SaintCoinachCsv -Name 'TerritoryType' | 
  Where-Object { $uniqueZoneIds.Contains([int]$_.'#') } |
  ForEach-Object {
    $offsetZ = $zoneIdToOffsetZ[[int]$_.'#']
    $map = $mapIdToMap[[int]$_.Map]
    [ordered]@{
      id            = [int]$_.'#';
      placeName     = [int]$_.PlaceName;
      weatherRateId = [int]$_.WeatherRate;
      sizeFactor    = [int]$map.sizeFactor
      offsetX       = [int]$map.offsetX
      offsetY       = [int]$map.offsetY
      offsetZ       = [int]$offsetZ
      markers       = @()
      exVersionId   = [int]$_.ExVersion
    }
  } 

$uniquePlaceNameIds = $allZones.placeName | Sort-Object | Get-Unique
$mapIdToMarkers = Import-SaintCoinachCsv -Name 'MapMarker' |
  Where-Object { $uniquePlaceNameIds.Contains([int]$_.'PlaceName{Subtext}') } |
  ForEach-Object {
    [PSCustomObject]@{
      x         = [int]$_.X
      y         = [int]$_.Y
      icon      = [string]$_.Icon
      placeName = [int]$_.'PlaceName{Subtext}'
    }
  }



$fieldZonesJson = Get-JsonData 'fieldZones'

$zones = $allZones | Where-Object {
  $zoneId = [int]$_.id;
  $fieldZonesJson.$zoneId -eq $null } 

# $maps | Format-Table
#const territoryTypeTransientRows =
#  await retrieveTerritoryTypeTransients(zoneIds);
#const mapMarkerRows = await retrieveMapMarkers();
#const exVersionRows = await retrieveExVersions();


$regionKeyToRegion = @{}
foreach ($region in $regionsJson.regions) {
  $key = $region.key
  $regionKeyToRegion.$key = $region
}

$huntRegions = $regionsJson.huntRegions | ForEach-Object {
  $region = $regionKeyToRegion[$_.key]
  [PSCustomObject]@{
    key     = $_.key
    zoneIds = $_.zoneIds
    color   = $region.color
    bgColor = $region.'background-color'
  }
}

$weatherRegions = $regionsJson.weatherRegions | ForEach-Object {
  $region = $regionKeyToRegion[$_.key]
  [PSCustomObject]@{
    key     = $_.key
    zoneIds = $_.zoneIds
    color   = $region.color
    bgColor = $region.'background-color'
  }
}

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

type MarkerData = {
  readonly x: number;
  readonly y: number;
  readonly placeNameId: number;
  readonly icon: string;
};

type ZoneData = {
  readonly id: number;
  readonly weatherRateId: number;
  readonly sizeFactor: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly offsetZ: number;
  readonly markers: MarkerData[];
  readonly exVersionId: number;
};

type LocationWithFlag = {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly flag: string;
};

type FieldZoneData = ZoneData & {
  readonly filter?: boolean;
  readonly elite: {
    readonly ids: number[];
    readonly locations: LocationWithFlag[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly locations: LocationWithFlag[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
};

type RegionData = {
  readonly key: string;
  readonly zoneIds: number[];
  readonly color: string;
  readonly bgColor: string;
};

const zoneData: {
  zones: ZoneData[];
  fieldZones: FieldZoneData[];
} = {
  zones: $(ConvertTo-DataJson $zones),
  fieldZones: $(ConvertTo-Json @()),
}

const regionData: {
  huntRegions: RegionData[];
  weatherRegions: RegionData[];
} = {
  huntRegions: $(ConvertTo-DataJson $huntRegions),
  weatherRegions: $(ConvertTo-DataJson $weatherRegions),
}

export {
  regionData,
  zoneData,
  type MarkerData,
  type RegionData,
  type ZoneData,
  type FieldZoneData,
};
"@ | Set-ResourceData -Name 'zones2'

$placeNameToZoneIdmobMap = New-Object 'System.Collections.Generic.SortedDictionary[int, int]'
$allZones | ForEach-Object {
  $placeNameToZoneIdmobMap.Add($_.placeName, $_.id)
}
$placeNameToZoneIdmobMap
