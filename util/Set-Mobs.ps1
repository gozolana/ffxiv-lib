param(
    [Parameter(Mandatory = $false)]
    [System.Collections.Generic.SortedSet[int]]$UniqueBNpcNameIds
)

Import-Module -Force .\SaintCoinach.psm1 -Function `
    Get-JsonData, `
    Import-SaintCoinachCsv, `
    ConvertTo-UnionTypeDefinition, `
    ConvertTo-DataJson, `
    Set-ResourceData

enum TMobCategory {
    EliteMark = 1
    SpecialEliteMark = 2
    SpecialFATE = 3
    None = 999
}

enum TMobRank {
    S = 1
    A = 2
    B = 3
    None = 999
}

# 変数
$mobCategories = [TMobCategory].GetEnumValues() | ForEach-Object {
    [PSCustomObject]@{ id = [int]$_; name = [string]$_ }
}

$mobRanks = [TMobRank].GetEnumValues() | ForEach-Object {
    [PSCustomObject]@{ id = [int]$_; name = [string]$_ }
}

$mobMap = New-Object 'System.Collections.Generic.SortedDictionary[int, PSObject]'
$srankelites = New-Object System.Collections.Generic.SortedSet[int]
$arankelites = New-Object System.Collections.Generic.SortedSet[int]
$brankelites = New-Object System.Collections.Generic.SortedSet[int]
$specialelites = New-Object System.Collections.Generic.SortedSet[int]
$specialfates = New-Object System.Collections.Generic.SortedSet[int]

$respawnMinutes = Get-JsonData 'respawnMinutes'
$fieldZones = Get-JsonData 'fieldZones'
$regions = Get-JsonData 'regions'

function Register-Mob {
    param(
        [Parameter(Mandatory = $true)]
        [int]$Id,
        [Parameter(Mandatory = $true)]
        [int]$ZoneId,
        [Parameter(Mandatory = $true)]
        [TMobCategory]$Category,
        [Parameter(Mandatory = $true)]
        [TMobRank]$Rank,
        [Parameter(Mandatory = $true)]
        [PSCustomObject]$TargetList
    )
    if ($mobMap.ContainsKey($Id)) {
        $mobData = $mobMap[$Id]
        if (($mobData.category -ne $Category) -or
        ($mobData.rank -ne $Rank)) {
            throw "Unmatch: $($mobData) vs $($Category)"
        }
        [void]$mobData.zoneIds.Add($ZoneId)
    } else {
        [void]$TargetList.Add($Id)
        $mobHashtable = [ordered]@{
            id       = $Id
            category = $Category
            rank     = $Rank
            zoneIds  = New-Object System.Collections.Generic.SortedSet[int]
        }
        [void]$mobHashtable.zoneIds.Add($ZoneId)
        if ($respawnMinutes.$Id) {
            $mobHashtable.respawnMinutes = ($respawnMinutes.$Id | Select-Object min, max)
        }
        [void]$mobMap.Add($Id, [PSCustomObject]$mobHashtable)
    }
}

foreach ($zoneId in $regions.huntRegions.zoneIds) {
    $zone = $fieldZones.$zoneId
    if ($zone.elite.ids.Length -eq 5) {
        Register-Mob $zone.elite.ids[0] $zoneId EliteMark S $srankelites
        Register-Mob $zone.elite.ids[1] $zoneId EliteMark A $arankelites
        Register-Mob $zone.elite.ids[2] $zoneId EliteMark A $arankelites
        Register-Mob $zone.elite.ids[3] $zoneId EliteMark B $brankelites
        Register-Mob $zone.elite.ids[4] $zoneId EliteMark B $brankelites
    } else {
        Register-Mob $zone.elite.ids[0] $zoneId EliteMark S $srankelites
        Register-Mob $zone.elite.ids[1] $zoneId EliteMark A $arankelites
        Register-Mob $zone.elite.ids[2] $zoneId EliteMark B $brankelites
    }
    if ($zone.ss) {
        foreach ($id in $zone.ss.ids) {
            Register-Mob $id $zoneId SpecialEliteMark None $specialelites
        }
    }
    if ($zone.fate) {
        foreach ($id in $zone.fate.ids) {
            Register-Mob $id $zoneId SpecialFate None $specialfates
        }
    }
}

# Json は int型のKeyを展開できないため、詰め直す
$mobById = [ordered]@{}
foreach ($entry in $mobMap.GetEnumerator()) {
    $mobById[[string]$entry.Key] = $entry.Value
}

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

$(ConvertTo-UnionTypeDefinition -Items $mobCategories -Name TMobCategory)

$(ConvertTo-UnionTypeDefinition -Items $mobRanks -Name TMobRank)

type MobData = {
  readonly id: number;
  readonly category: TMobCategory;
  readonly rank: TMobRank;
  readonly zoneIds: number[];
  readonly respawnMinutes?: {
    min: number;
    max: number;
  };
};

const mobData: {
  mobById: Record<number, MobData>;
  sRanks: number[];
  aRanks: number[];
  bRanks: number[];
  specials: number[];
  fates: number[];
} = {
  mobById: $(ConvertTo-DataJson $mobById),
  sRanks: $(ConvertTo-Json $srankelites),
  aRanks: $(ConvertTo-Json $arankelites),
  bRanks: $(ConvertTo-Json $brankelites),
  specials: $(ConvertTo-Json $specialelites),
  fates: $(ConvertTo-Json $specialfates)
}

export { TMobCategory, TMobRank, mobData, type MobData };
"@ | Set-ResourceData -Name 'mobs'

if ($UniqueBNpcNameIds) {
    [void]$UniqueBNpcNameIds.UnionWith($srankelites)
    [void]$UniqueBNpcNameIds.UnionWith($arankelites)
    [void]$UniqueBNpcNameIds.UnionWith($brankelites)
    [void]$UniqueBNpcNameIds.UnionWith($specialelites)
    [void]$UniqueBNpcNameIds.UnionWith($specialfates)
}
