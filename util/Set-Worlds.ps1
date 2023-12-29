Import-Module -Force .\SaintCoinach.psm1 -Function `
  Import-SaintCoinachCsv, `
  ConvertTo-DataJson, `
  ConvertTo-TypeObjectJson, `
  Set-ResourceData, `
  Get-JsonData

$dcColors = Get-JsonData -Name 'dataCenterColors'

enum TDCRegion {
  Japan = 1
  America = 2
  Europe = 3
  Oceania = 4
}
$regionIds = [TDCRegion].GetEnumValues() | ForEach-Object { [int]$_ }

$dcs = Import-SaintCoinachCsv -Name 'WorldDCGroupType' | 
  Where-Object { $regionIds.Contains([int]$_.Region) } |
  ForEach-Object {
    [PSCustomObject]@{
      id       = [int]$_.'#';
      name     = [string]$_.Name;
      color    = [string]$dcColors."$($_.Name)".color;
      regionId = [int]$_.Region;
    }
  }

$worlds = Import-SaintCoinachCsv -Name 'World' | 
  Where-Object { 
    [System.Convert]::ToBoolean($_.IsPublic) -and
     ($dcs.id.Contains([int]$_.DataCenter)) } | 
  ForEach-Object {
    [PSCustomObject]@{
      id           = [int]$_.'#';
      name         = [string]$_.Name;
      dataCenterId = [int]$_.DataCenter;
    }
  }

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const DataCenterRegionId = {
  JP: 1,
  NA: 2,
  EU: 3,
  OC: 4,
} as const;
type DataCenterRegionId =
  (typeof DataCenterRegionId)[keyof typeof DataCenterRegionId];

const DataCenterId = $(ConvertTo-TypeObjectJson $dcs) as const;
type DataCenterId = (typeof DataCenterId)[keyof typeof DataCenterId];

const WorldId = $(ConvertTo-TypeObjectJson $worlds) as const;
type WorldId = (typeof WorldId)[keyof typeof WorldId];

type DataCenterData = {
  readonly id: DataCenterId;
  readonly name: string;
  readonly color: string;
  readonly regionId: DataCenterRegionId;
};

type WorldData = {
  readonly id: WorldId;
  readonly name: string;
  readonly dataCenterId: DataCenterId;
};

const dataCenters: DataCenterData[] = $(ConvertTo-DataJson $dcs);

const worlds: WorldData[] = $(ConvertTo-DataJson $worlds);

export {
  DataCenterId,
  DataCenterRegionId,
  WorldId,
  dataCenters,
  worlds,
  type DataCenterData,
  type WorldData,
};
"@ | Set-ResourceData -Name 'worlds'