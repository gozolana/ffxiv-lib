Import-Module -Force .\SaintCoinach.psm1 -Function `
  Import-SaintCoinachCsv, `
  ConvertTo-DataJson, `
  ConvertTo-TypeObjectJson, `
  Set-ResourceData, `
  Get-JsonData

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
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[0]'; chance = [int]$_.'Rate[0]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[1]'; chance = [int]$_.'Rate[1]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[2]'; chance = [int]$_.'Rate[2]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[3]'; chance = [int]$_.'Rate[3]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[4]'; chance = [int]$_.'Rate[4]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[5]'; chance = [int]$_.'Rate[5]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[6]'; chance = [int]$_.'Rate[6]' },
        [PSCustomObject][ordered]@{ weatherId = [int]$_.'Weather[7]'; chance = [int]$_.'Rate[7]' }
      ) | Where-Object { $_.chance -gt 0 }
    }
  }

$uniqueWeatherIds = $weatherRates.rates.weatherId | Sort-Object | Get-Unique

$weathers = Import-SaintCoinachCsv -Name 'Weather' -Lang 'en' | 
  Where-Object { $uniqueWeatherIds.Contains([int]$_.'#') } |
  ForEach-Object {
    [PSCustomObject]@{
      id   = [int]$_.'#'
      name = [string]$_.Name -Split '\s' -Join ''
      icon = [string]$_.Icon -Replace 'ui/icon/060000/', '' -Replace '.tex', ''
    }
  }

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TWeather = $(ConvertTo-TypeObjectJson $weathers) as const;
type TWeather = typeof TWeather[keyof typeof TWeather];

type WeatherData = {
  readonly id: number;
  readonly icon: string;
};

type WeatherRateData = {
  readonly id: number;
  readonly rates: {
    readonly weatherId: number;
    readonly chance: number;
  }[];
};

const weathers: WeatherData[] = $(ConvertTo-DataJson ($weathers | Select-Object id, icon));

const weatherRates: WeatherRateData[] = $(ConvertTo-DataJson $weatherRates);

export {
  TWeather,
  weathers,
  weatherRates,
  type WeatherData,
  type WeatherRateData,
};
"@ | Set-ResourceData -Name 'weathers'

$uniqueWeatherIds
