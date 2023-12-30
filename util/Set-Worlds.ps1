Import-Module -Force .\SaintCoinach.psm1 -Function `
    Get-JsonData, `
    Import-SaintCoinachCsv, `
    ConvertTo-UnionTypeDefinition, `
    ConvertTo-DataJson, `
    Set-ResourceData

$dcColors = Get-JsonData -Name 'dataCenterColors'

$dcrs = @(
    [PSCustomObject]@{ id = 1; name = 'Japan' },
    [PSCustomObject]@{ id = 2; name = 'America' },
    [PSCustomObject]@{ id = 3; name = 'Europe' },
    [PSCustomObject]@{ id = 4; name = 'Oceania' }
)

$dcs = Import-SaintCoinachCsv -Name 'WorldDCGroupType' | 
    Where-Object { $dcrs.id.Contains([int]$_.Region) } |
    ForEach-Object {
        [PSCustomObject]@{
            id       = [int]$_.'#';
            name     = [string]$_.Name;
            color    = [string]$dcColors.$($_.Name).color;
            regionId = [int]$_.Region;
        }
    }

$worlds = Import-SaintCoinachCsv -Name 'World' | 
    Where-Object { 
        [System.Convert]::ToBoolean($_.IsPublic) -and ($dcs.id.Contains([int]$_.DataCenter))
    } | 
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

$(ConvertTo-UnionTypeDefinition -Items $dcrs -Name DataCenterRegionId);

$(ConvertTo-UnionTypeDefinition -Items $dcs -Name DataCenterId);

$(ConvertTo-UnionTypeDefinition -Items $worlds -Name WorldId);

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