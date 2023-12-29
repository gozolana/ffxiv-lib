param(
    [Parameter(Mandatory = $true)]
    [int[]]$MobIds,
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
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
    en = [ordered]@{
        BNpcName  = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
    de = [ordered] @{
        BNpcName  = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
    fr = [ordered]@{
        BNpcName  = [ordered]@{}
        ZoneName  = [ordered]@{}
        Weather   = [ordered]@{}
        Region    = [ordered]@{}
        ExVersion = [ordered]@{}
    }
}

$uniquePlaceNameIds = $PlaceNameIdToZoneId.Keys

$regionJson = Get-JsonData 'regions'

foreach ($lang in $message.Keys) {
    Import-SaintCoinachCsv -Name 'BNpcName' -Lang $lang |
        Where-Object { $MobIds.Contains([int]$_.'#') } |
        ForEach-Object {
            $message[$lang].BNpcName[$_.'#'] = [string]$_.Singular
        }
    Import-SaintCoinachCsv -Name 'PlaceName' -Lang $lang |
        Where-Object { $uniquePlaceNameIds.Contains([int]$_.'#') } |
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

interface Message {
  BNpcName: Record<number, string>;
  ZoneName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

const messages: Record<string, Message> = $(ConvertTo-DataJson $message);

const tts: Record<string, Partial<Message>> = $(ConvertTo-DataJson $ttsJson);

export { messages, tts, type Message };
`;
"@ | Set-ResourceData -Name 'messages'
