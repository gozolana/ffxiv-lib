Import-Module -Force .\SaintCoinach.psm1 -Function `
    ConvertTo-UnionTypeDefinition, `
    ConvertTo-DataJson, `
    Get-JsonData, `
    Import-SaintCoinachCsv, `
    Set-ResourceData

$exVersionsJson = Get-JsonData -Name exVersions

$exVersions = Import-SaintCoinachCsv -Name ExVersion -Lang en |
    ForEach-Object {
        $exVersionJson = $exVersionsJson.$($_.Name)
        [PSCustomObject]@{
            id                          = [int]$_.'#';
            name                        = [string]$_.Name;
            version                     = [int]$exVersionJson.version;
            locationClusteringThreshold = [float]$exVersionJson.locationClusteringThreshold;
            color                       = [string]$exVersionJson.color;
        }
    } 

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

$(ConvertTo-UnionTypeDefinition -Items $exVersions -Name ExVersionId -Sanitize)

type ExVersionData = {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly color: string;
};

const exVersions: ExVersionData[] = $(ConvertTo-DataJson ($exVersions |
    Select-Object -Property id, version, locationClusteringThreshold, color));

export {
  ExVersionId,
  exVersions,
  type ExVersionData,
};
"@ | Set-ResourceData -Name exVersions
