Import-Module -Force .\SaintCoinach.psm1 -Function `
    Import-SaintCoinachCsv, `
    ConvertTo-DataJson, `
    ConvertTo-TypeObjectJson, `
    Set-ResourceData, `
    Get-JsonData

Enum TMobCategory {
    EliteMark = 1
    SpecialEliteMark = 2
    SpecialFATE = 3
    None = 999
}
    
Enum TMobRank {
    S = 1
    A = 2
    B = 3
    None = 999
}

# 変数
$mobMap = New-Object 'System.Collections.Generic.SortedDictionary[string, PSObject]'
$srankelites = New-Object System.Collections.Generic.SortedSet[int]
$arankelites = New-Object System.Collections.Generic.SortedSet[int]
$brankelites = New-Object System.Collections.Generic.SortedSet[int]
$specialelites = New-Object System.Collections.Generic.SortedSet[int]
$specialfates = New-Object System.Collections.Generic.SortedSet[int]

$respawnMinutes = Get-JsonData 'respawnMinutes'
foreach ($prop in $respawnMinutes.PSObject.Properties) {
    $prop.Value.psobject.Properties.Remove('_comment')
}

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
    if ($mobMap.ContainsKey([string]$Id)) {
        $mobData = $mobMap.$Id
        if (
            ($mobData.category -ne $Category) -or
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
            $mobHashtable.respawnMinutes = $respawnMinutes.$Id
        }
        [void]$mobMap.Add([string]$Id, [PSCustomObject]$mobHashtable)
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

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TMobCategory = {
  EliteMark: 1,
  SpecialEliteMark: 2,
  SpecialFATE: 3,
  None: 999,
} as const;
type TMobCategory = typeof TMobCategory[keyof typeof TMobCategory];

const TMobRank = {
  S: 1,
  A: 2,
  B: 3,
  None: 999,
} as const;
type TMobRank = typeof TMobRank[keyof typeof TMobRank];

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
  mobById: $(ConvertTo-DataJson $mobMap),
  sRanks: $(ConvertTo-Json $srankelites),
  aRanks: $(ConvertTo-Json $arankelites),
  bRanks: $(ConvertTo-Json $brankelites),
  specials: $(ConvertTo-Json $specialelites),
  fates: $(ConvertTo-Json $specialfates)
}

export { TMobCategory, TMobRank, mobData, type MobData };
"@ | Set-ResourceData -Name 'mobs'

$allMobIds = New-Object System.Collections.Generic.SortedSet[int]
[void]$allMobIds.UnionWith($srankelites)
[void]$allMobIds.UnionWith($arankelites)
[void]$allMobIds.UnionWith($brankelites)
[void]$allMobIds.UnionWith($specialelites)
[void]$allMobIds.UnionWith($specialfates)
$allMobIds
