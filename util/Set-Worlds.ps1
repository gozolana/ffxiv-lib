Import-Module -Force .\SaintCoinach.psm1 -Function `
    Import-SaintCoinachCsv, `
    ConvertTo-DataJson, `
    ConvertTo-TypeObjectJson, `
    Set-ResourceData, `
    Get-JsonData

$dcColors = Get-JsonData -Name 'dataCenterColors'

$dcs = Import-SaintCoinachCsv -Name 'WorldDCGroupType' | ForEach-Object {
    [PSCustomObject]@{
        id       = [int]$_.'#';
        name     = [string]$_.Name;
        color    = [string]$dcColors."$($_.Name)".color;
        regionId = [int]$_.Region;
    }
} | Where-Object { @(1..4).Contains($_.regionId) }

$worlds = Import-SaintCoinachCsv -Name 'World' | Where-Object { $_.IsPublic -eq 'True' } | ForEach-Object {
    [PSCustomObject]@{
        id           = [int]$_.'#';
        name         = [string]$_.Name;
        dataCenterId = [int]$_.DataCenter;
    }
} | Where-Object { $dcs.Id.Contains($_.dataCenterId) }

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