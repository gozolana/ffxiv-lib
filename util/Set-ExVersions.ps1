Import-Module -Force .\SaintCoinach.psm1 -Function `
  Import-SaintCoinachCsv, `
  ConvertTo-DataJson, `
  ConvertTo-TypeObjectJson, `
  Set-ResourceData, `
  Get-JsonData

$exVersionsJson = Get-JsonData -Name 'exVersions'

$exVersions = Import-SaintCoinachCsv -Name 'ExVersion' -Lang 'en' |
  ForEach-Object {
    $exVersionName = $_.Name
    $exVersionJson = $exVersionsJson.$exVersionName
    [PSCustomObject]@{
      id                          = [int]$_.'#';
      name                        = [string]$_.Name -Split '\s' -Join '';
      version                     = $exVersionJson.version;
      locationClusteringThreshold = $exVersionJson.locationClusteringThreshold;
      color                       = $exVersionJson.color;
    }
  } 

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TExVersion = $(ConvertTo-TypeObjectJson $exVersions) as const;
type TExVersion = typeof TExVersion[keyof typeof TExVersion];

type ExVersionData = {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly color: string;
};

const exVersions: ExVersionData[] = $(ConvertTo-DataJson ($exVersions | 
  Select-Object id, version, locationClusteringThreshold, color));

export {
  TExVersion,
  exVersions,
  type ExVersionData,
};
"@ | Set-ResourceData -Name 'exVersion'
