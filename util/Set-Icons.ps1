Import-Module -Force .\SaintCoinach.psm1 -Function `
    Get-JsonData, `
    Import-SaintCoinachCsv, `
    ConvertTo-UnionTypeDefinition, `
    ConvertTo-DataJson, `
    Set-ResourceData, `
    svgPIChart, `
    svgRhombus, `
    svgHexagon, `
    svgCheck, `
    Export-SVG, `
    Copy-Icon

$iconTypes = @(
    [PSCustomObject]@{ name = 'Aetheryte'; id = '060453' },
    [PSCustomObject]@{ name = 'Mob'; id = '060004' },
    [PSCustomObject]@{ name = 'PartyMember'; id = '060421' },
    [PSCustomObject]@{ name = 'Player'; id = '060443' },
    [PSCustomObject]@{ name = 'Mining'; id = '060437' },
    [PSCustomObject]@{ name = 'Quarrying'; id = '060438' },
    [PSCustomObject]@{ name = 'Logging'; id = '060432' },
    [PSCustomObject]@{ name = 'Harvesting'; id = '060433' },
    [PSCustomObject]@{ name = 'Fishing'; id = '060445' },
    [PSCustomObject]@{ name = 'Up'; id = '060954' },
    [PSCustomObject]@{ name = 'Down'; id = '060955' },
    [PSCustomObject]@{ name = 'Flag'; id = '060561' },
    [PSCustomObject]@{ name = 'CairnOfReturn'; id = '060905' },
    [PSCustomObject]@{ name = 'CairnOfReturnActive'; id = '060906' },
    [PSCustomObject]@{ name = 'CairnOfPassage'; id = '060907' },
    [PSCustomObject]@{ name = 'CairnOfPassageActive'; id = '060908' },
    [PSCustomObject]@{ name = 'GoldCoffer'; id = '060913' },
    [PSCustomObject]@{ name = 'SilverCoffer'; id = '060912' },
    [PSCustomObject]@{ name = 'BronzeCoffer'; id = '060911' },
    [PSCustomObject]@{ name = 'PlotGreen'; id = '060403' },
    [PSCustomObject]@{ name = 'PlotWhite'; id = '060444' },
    [PSCustomObject]@{ name = 'Pin'; id = '060442' },
    [PSCustomObject]@{ name = 'PlotYellow'; id = '060424' },
    [PSCustomObject]@{ name = 'PlotRed'; id = '060422' },
    [PSCustomObject]@{ name = 'TriangleGreen'; id = '060358' },
    [PSCustomObject]@{ name = 'TriangleBlue'; id = '060361' },
    [PSCustomObject]@{ name = 'TriangleYellow'; id = '060360' },
    [PSCustomObject]@{ name = 'TriangleRed'; id = '060359' },
    [PSCustomObject]@{ name = 'TrapYellow'; id = '060402' },
    [PSCustomObject]@{ name = 'TrapRed'; id = '060401' },
    [PSCustomObject]@{ name = 'Num1'; id = '060918' },
    [PSCustomObject]@{ name = 'Num2'; id = '060919' },
    [PSCustomObject]@{ name = 'Num3'; id = '060920' },
    [PSCustomObject]@{ name = 'Num4'; id = '060921' },
    [PSCustomObject]@{ name = 'Num5'; id = '060922' },
    [PSCustomObject]@{ name = 'Num6'; id = '060923' },
    [PSCustomObject]@{ name = 'Num7'; id = '060924' },
    [PSCustomObject]@{ name = 'Num8'; id = '060925' },
    [PSCustomObject]@{ name = 'SB'; id = 'SB' },
    [PSCustomObject]@{ name = 'SS'; id = 'SS' },
    [PSCustomObject]@{ name = 'CheckMine'; id = 'CheckMine' },
    [PSCustomObject]@{ name = 'CheckOthers'; id = 'CheckOthers' },
    [PSCustomObject]@{ name = 'CheckUnknown'; id = 'CheckUnknown' }
)
    
$elite = [ordered]@{}
1..31 | ForEach-Object {
    $name = [convert]::ToString($_, 2).PadLeft(5, '0')
    $colors = @()
    if (($_ -shr 4) -band 1) { $colors += '#f44336' }
    if (($_ -shr 3) -band 1) { $colors += '#ffeb3b' }
    if (($_ -shr 2) -band 1) { $colors += '#8bc34a' }
    if (($_ -shr 1) -band 1) { $colors += '#2196f3' }
    if ($_ -band 1) { $colors += '#9c27b0' }
    Export-SVG -Svg (svgPIChart -Colors $colors) -Name $name
    # 定義追加
    $elite.$_ = "../assets/icons/$name.svg";
}

Export-SVG -Svg (svgRhombus -Color '#607d8b') -Name sb
Export-SVG -Svg (svgHexagon -Color '#607d8b') -Name ss
Export-SVG -Svg (svgCheck -Color 'lime') -Name checkLime
Export-SVG -Svg (svgCheck -Color 'royalblue') -Name checkRoyalBlue
Export-SVG -Svg (svgCheck -Color 'grey') -Name checkGrey
$icon = [ordered]@{
    'SB'           = '../assets/icons/sb.svg';
    'SS'           = '../assets/icons/ss.svg';
    'CheckMine'    = '../assets/icons/checkLime.svg';
    'CheckOthers'  = '../assets/icons/checkRoyalBlue.svg';
    'CheckUnknown' = '../assets/icons/checkGrey.svg';
}

# Weatherのすべて＋Symbolのすべて＋上で定義したすべて(icontypesの下5つ以外)
$pngIconIds = Import-SaintCoinachCsv -Name Weather -Lang en |
    Where-Object { $_.Icon -Match '(\d{6}).tex' } |
    ForEach-Object { $Matches[1] }
$pngIconIds += Import-SaintCoinachCsv -Name MapSymbol |
    Where-Object { $_.Icon -Match '\d{5}' } |
    ForEach-Object { "0$($Matches[0])" }
$pngIconIds += $iconTypes | 
    Where-Object { $_.id -Match '\d{6}' } | 
    Select-Object -ExpandProperty id
$pngIconIds = $pngIconIds | Sort-Object | Get-Unique

foreach ($pngIconId in $pngIconIds) {
    # ファイルコピー
    Copy-Icon -Name $pngIconId
    # 定義追加
    $icon.$pngIconId = "../assets/icons/$pngIconId.png"
}

@"
// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

$(ConvertTo-UnionTypeDefinition -Items $iconTypes -Name IconId)

const elite: Record<number, string> = $(ConvertTo-DataJson $elite);

const icon: Record<string, string> = $(ConvertTo-Json $icon);

export {
  IconId,
  elite,
  icon
};
"@ | Set-ResourceData -Name 'icons'
