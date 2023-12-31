param(
    [Parameter(Mandatory = $false)]
    [System.Collections.Generic.SortedSet[int]]$UniquePlaceNameIds,
    [Parameter(Mandatory = $false)]
    [System.Collections.Generic.SortedDictionary[int, int]]$ZoneIdToPlaceNameId
)

Import-Module -Force .\SaintCoinach.psm1 -Function `
    Import-SaintCoinachCsv, `
    ConvertTo-DataJson, `
    ConvertTo-TypeObjectJson, `
    Set-ResourceData, `
    Get-JsonData

$regionsJson = Get-JsonData -Name 'regions'
$uniqueZoneIds = ($regionsJson.huntRegions.zoneIds + $regionsJson.weatherRegions.zoneIds) | Sort-Object | Get-Unique

$zoneIdToOffsetZ = [System.Collections.Generic.Dictionary[int, int]]::new()
Import-SaintCoinachCsv -Name 'TerritoryTypeTransient' |
    Where-Object { $uniqueZoneIds.Contains([int]$_.'#') } |
    ForEach-Object {
        $zoneIdToOffsetZ.Add([int]$_.'#', [int]$_.'Offset{Z}')
    }

$mapIdToMap = [System.Collections.Generic.Dictionary[int, PSObject]]::new()
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

$mapMarkerIds = $mapIdToMap.Values.mapMarkerId | Sort-Object | Get-Unique

$mapMarkers = Import-SaintCoinachCsv -Name 'MapMarker' | 
    Where-Object { 
        $markerIdString = $_.'#' -Split '\.' | Select-Object -First 1
        $mapMarkerIds.Contains([int]$markerIdString) -and (($_.Icon -ne '0') -or ($_.'PlaceName{SubText}' -ne '0'))
    } |
    ForEach-Object {
        $icon = ''
        if ($_.Icon -ne '0') {
            $icon = "0$($_.Icon)" 
        } 
        [PSCustomObject]@{
            markerId    = [int]$($_.'#' -Split '\.' | Select-Object -first 1);
            x           = [int]$_.X
            y           = [int]$_.y
            placeNameId = [int]$_.'PlaceName{SubText}'
            icon        = [string]$icon
        }
    }

$allZones = Import-SaintCoinachCsv -Name 'TerritoryType' | 
    Where-Object { $uniqueZoneIds.Contains([int]$_.'#') } |
    ForEach-Object {
        if ($ZoneIdToPlaceNameId) {
            $ZoneIdToPlaceNameId.Add([int]$_.'#', [int]$_.PlaceName)
        }
        $offsetZ = $zoneIdToOffsetZ[[int]$_.'#']
        $map = $mapIdToMap[[int]$_.Map]
        $markers = $mapMarkers | Where-Object markerId -eq $map.mapMarkerId 
        [ordered]@{
            id            = [int]$_.'#';
            placeNameId   = [int]$_.PlaceName;
            weatherRateId = [int]$_.WeatherRate;
            sizeFactor    = [int]$map.sizeFactor
            offsetX       = [int]$map.offsetX
            offsetY       = [int]$map.offsetY
            offsetZ       = [int]$offsetZ
            markers       = @($markers | Select-Object x, y, placeNameId, icon)
            exVersionId   = [int]$_.ExVersion
        }
    } 


$fieldZonesJson = Get-JsonData 'fieldZones'

$zones = $allZones | Where-Object {
    $zoneId = [int]$_.id;
    $fieldZonesJson.$zoneId -eq $null } 

$fieldZones = $allZones | Where-Object {
    $zoneId = [int]$_.id;
    $fieldZonesJson.$zoneId -ne $null } | 
    ForEach-Object { 
        $zoneId = [int]$_.id;
        if ($fieldZonesJson.$zoneId.filter -eq $true) {
            $_.filter = $True
        }
        if ($fieldZonesJson.$zoneId.elite) {
            $_.elite = ($fieldZonesJson.$zoneId.elite | Select-Object ids, locations)
        }
        if ($fieldZonesJson.$zoneId.ss) {
            $_.ss = ($fieldZonesJson.$zoneId.ss | Select-Object ids, locations)
        }
        if ($fieldZonesJson.$zoneId.fate) {
            $_.fate = ($fieldZonesJson.$zoneId.fate | Select-Object ids)
        }
        $_
    }

# 
# $maps | Format-Table
#const territoryTypeTransientRows =
#  await retrieveTerritoryTypeTransients(zoneIds);
#const mapMarkerRows = await retrieveMapMarkers();
#const exVersionRows = await retrieveExVersions();
# 
# 
$regionKeyToRegion = @{}
foreach ($region in $regionsJson.regions) {
    $key = $region.key
    $regionKeyToRegion.$key = $region
}
# 
$huntRegions = $regionsJson.huntRegions | ForEach-Object {
    $region = $regionKeyToRegion[$_.key]
    [PSCustomObject]@{
        key     = $_.key
        zoneIds = $_.zoneIds
        color   = $region.color
        bgColor = $region.'background-color'
    }
}
# 
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
  fieldZones: $(ConvertTo-DataJson $fieldZones),
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
"@ | Set-ResourceData -Name 'zones'

if ($PlaceNameIdToZoneId) {
    $allZones | ForEach-Object {
        $PlaceNameIdToZoneId.Add($_.placeName, $_.id)
    }
}
