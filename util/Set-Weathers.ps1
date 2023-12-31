param(
    [Parameter(Mandatory = $false)]
    [System.Collections.Generic.SortedSet[int]]$UniqueWeatherIds
)

Import-Module -Force .\SaintCoinach.psm1 -Function `
    Get-JsonData, `
    Import-SaintCoinachCsv, `
    ConvertTo-UnionTypeDefinition, `
    ConvertTo-DataJson, `
    Set-ResourceData

$regionsJson = Get-JsonData 'regions'
$uniqueZoneIds = ($regionsJson.huntRegions.zoneIds + $regionsJson.weatherRegions.zoneIds) | Sort-Object | Get-Unique

$uniqueWeatherRateIds = Import-SaintCoinachCsv -Name 'TerritoryType' | 
    Where-Object { $uniqueZoneIds.Contains([int]$_.'#') } |
    ForEach-Object { [int]$_.WeatherRate } |
    Sort-Object | Get-Unique

$weatherRates = Import-SaintCoinachCsv -Name 'WeatherRate' | 
    Where-Object { $uniqueWeatherRateIds.Contains([int]$_.'#') } |
    ForEach-Object {
        [PSCustomObject]@{
            id    = [int]$_.'#'
            rates = [PSCustomObject]@(
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[0]'; chance = [int]$_.'Rate[0]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[1]'; chance = [int]$_.'Rate[1]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[2]'; chance = [int]$_.'Rate[2]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[3]'; chance = [int]$_.'Rate[3]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[4]'; chance = [int]$_.'Rate[4]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[5]'; chance = [int]$_.'Rate[5]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[6]'; chance = [int]$_.'Rate[6]' },
                [PSCustomObject]@{ weatherId = [int]$_.'Weather[7]'; chance = [int]$_.'Rate[7]' }
            ) | Where-Object chance -gt 0
        }
    }

$uniqWeatherIds = $weatherRates.rates.weatherId | Sort-Object | Get-Unique
$weathers = Import-SaintCoinachCsv -Name 'Weather' -Lang 'en' | 
    Where-Object { $uniqWeatherIds.Contains([int]$_.'#') } |
    ForEach-Object {
        [PSCustomObject]@{
            id   = [int]$_.'#'
            name = [string]$_.Name
            icon = [string]$_.Icon -Replace 'ui/icon/060000/', '' -Replace '.tex', ''
        }
    }

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

$(ConvertTo-UnionTypeDefinition -Items $weathers -Name WeatherId -Sanitize)

type WeatherData = {
  readonly id: WeatherId;
  readonly icon: string;
};

type WeatherRateData = {
  readonly id: number;
  readonly rates: {
    readonly weatherId: WeatherId;
    readonly chance: number;
  }[];
};

const weathers: WeatherData[] = $(ConvertTo-DataJson ($weathers | Select-Object id, icon));

const weatherRates: WeatherRateData[] = $(ConvertTo-DataJson $weatherRates);

export {
  WeatherId,
  weatherRates,
  weathers,
  type WeatherData,
  type WeatherRateData,
};
"@ | Set-ResourceData -Name 'weathers'

if ($UniqueWeatherIds) {
    foreach ($id in $uniqWeatherIds) {
        [void]$UniqueWeatherIds.Add($id)
    }
}
