param(
    [Parameter(Mandatory = $true)]
    [int[]]$MobIds,
    [Parameter(Mandatory = $true)]
    [int[]]$PlaceNameIds,
    [Parameter(Mandatory = $true)]
    [System.Collections.Generic.SortedDictionary[int, int]]$PlaceNameIdToZoneId,
    [Parameter(Mandatory = $true)]
    [int[]]$WeatherIds
)

Import-Module -Force .\SaintCoinach.psm1 -Function `
    Import-SaintCoinachCsv, `
    ConvertTo-DataJson, `
    ConvertTo-TypeObjectJson, `
    Set-ResourceData, `
    Get-JsonData

$message = [ordered]@{
    ja = [ordered]@{
        BNpcName  = [ordered]@{}
        PlaceName = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
    en = [ordered]@{
        BNpcName  = [ordered]@{}
        PlaceName = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
    de = [ordered] @{
        BNpcName  = [ordered]@{}
        PlaceName = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
    fr = [ordered]@{
        BNpcName  = [ordered]@{}
        PlaceName = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
}

$regionJson = Get-JsonData 'regions'

foreach ($lang in $message.Keys) {
    Import-SaintCoinachCsv -Name 'BNpcName' -Lang $lang |
        Where-Object { $MobIds.Contains([int]$_.'#') } |
        ForEach-Object {
            $message[$lang].BNpcName[$_.'#'] = [string]$_.Singular
        }
    Import-SaintCoinachCsv -Name 'PlaceName' -Lang $lang |
        Where-Object { $PlaceNameIds.Contains([int]$_.'#') } |
        ForEach-Object {
            [PSCustomObject]@{
                Id   = [int]$_.'#'
                Name = $_.Name
            }
        } | Sort-Object Id | ForEach-Object {
            $message[$lang].PlaceName[[string]$_.Id] = [string]$_.Name
        }
    Import-SaintCoinachCsv -Name 'PlaceName' -Lang $lang |
        Where-Object { $PlaceNameIdToZoneId.Keys.Contains([int]$_.'#') } |
        ForEach-Object {
            $placeNameId = [int]$_.'#'
            [PSCustomObject]@{
                Id   = $PlaceNameIdToZoneId.$placeNameId
                Name = $_.Name
            }
        } | Sort-Object Id | ForEach-Object {
            $message[$lang].ZoneName[[string]$_.Id] = [string]$_.Name
        }
    Import-SaintCoinachCsv -Name 'Weather' -Lang $lang |
        Where-Object { $WeatherIds.Contains([int]$_.'#') } |
        ForEach-Object {
            $message[$lang].Weather[$_.'#'] = [string]$_.Name
        }
    foreach ($region in $regionJson.regions) {
        $message[$lang].Region[$region.key] = $region.name.$lang
    }
    Import-SaintCoinachCsv -Name 'ExVersion' -Lang $lang |
        ForEach-Object {
            $message[$lang].ExVersion[$_.'#'] = [string]$_.Name
        }

}

$ttsJson = Get-JsonData 'tts'

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TLang = ['ja', 'en', 'de', 'fr'] as const
type TLang = (typeof TLang)[number]

type TMessage = {
  readonly BNpcName: Record<number, string>
  readonly PlaceName: Record<number, string>
  readonly ZoneName: Record<number, string>
  readonly Weather: Record<number, string>
  readonly Region: Record<string, string>
  readonly ExVersion: Record<number, string>
}

const messages: Record<TLang, TMessage> = $(ConvertTo-DataJson $message)

const tts: Partial<Record<TLang, TMessage>> = $(ConvertTo-DataJson $ttsJson)

export { TLang, messages, tts, type TMessage }
"@ | Set-ResourceData -Name 'messages'
