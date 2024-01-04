Set-StrictMode -Version 3.0

function Import-SaintCoinachCsv {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name,
        [Parameter(Mandatory = $false)]
        [string]$Lang
    )
    $patchPath = Get-ChildItem -Path '..\SaintCoinach\[0-9]*' -Directory | Select-Object -Last 1
    if ($Lang) {
        $path = Join-Path -Path $patchPath -ChildPath 'exd-all' | Join-Path -ChildPath "$($Name).$($Lang).csv"
    } else {
        $path = Join-Path -Path $patchPath -ChildPath 'rawexd' | Join-Path -ChildPath "$($Name).csv"
    }
    $content = Get-Content $path -Encoding UTF8
    $header = $content[1] -Split ','
    for ($i = 0; $i -lt $header.Length; $i++) {
        if ($header[$i] -eq '') {
            $header[$i] = ('Column{0:000}' -f $i)
        }
    }
    # PlaceName.ja.csv で不正な改行が混入しているため ConvertFrom-CSV は使わない
    $content | Select-Object -Skip 3 | Out-File 'temp.csv'
    Import-Csv -Path 'temp.csv' -Header $header -Encoding UTF8
}

function ConvertTo-TypeObjectJson {
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [array]$Objects
    )
    $hash = [ordered]@{}
    foreach ($obj in $Objects) {
        $hash[$obj.name] = [int]$obj.id
    }
    ([PSCustomObject]$hash | ConvertTo-Json -Depth 10) -Replace `
        '\"([a-zA-Z][a-zA-Z0-9]*)\": +', '$1: '
}

function ConvertTo-DataJson {
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [array]$Objects
    )
    ($Objects | ConvertTo-Json -Depth 10) -Replace `
        '\"([a-zA-Z0-9]+)\": +', '$1: ' -Replace `
        '\\u0027', ''''
}

function Set-ResourceData {
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [string[]]$Content,
        [Parameter(Mandatory = $true)]
        [string]$Name,
        [switch]$Plugin
    )
    if ($Plugin) {
        $path = Join-Path '../src/plugin/resources' "$($Name).data.ts"
    } else {
        $path = Join-Path '../src/lib/resources' "$($Name).data.ts"
    }
    $Content | Set-Content -Path $path -Encoding UTF8
    Write-Host "updated $path"
}

function Get-JsonData {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name
    )
    $path = Join-Path '../data' "$($Name).json"
    Get-Content -Path $path -Encoding UTF8 | ConvertFrom-Json
}


function sanitize {
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [string]$Literal
    )
    (Get-Culture).TextInfo.ToTitleCase(
        ($Literal -Replace '[^a-zA-Z0-9_\s\-\.]', '')
    ) -Replace '[\s\-\.]', ''
}

function ConvertTo-UnionTypeDefinition {
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $true)]
        [PSObject]$Items,
        [Parameter(Mandatory = $true)]
        [string]$Name,
        [switch]$Sanitize
    ) 
    $hash = [ordered]@{}
    foreach ($item in $Items) {
        if ($Sanitize ) {
            $key = sanitize -Literal $item.name
        } else {
            $key = $item.name
        }
        $hash[$key] = $item.id
    }
    $data = ([PSCustomObject]$hash | ConvertTo-Json -Depth 10) -Replace `
        '\"([a-zA-Z][a-zA-Z0-9]*)\": +', '$1: '
    @"
const $Name = $data as const;
type $Name = (typeof $Name)[keyof typeof $Name];
"@
}

$ICON_SIZE = 32;
$ICON_RATIO = 15 / 16;
$ICON_CENTER = $ICON_SIZE / 2.0
$ICON_RADIUS = $ICON_CENTER * $ICON_RATIO

function path {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [float]$Angle1,
        [Parameter(Mandatory = $true)]
        [float]$Angle2
    )
    $x1 = $ICON_CENTER + $ICON_RADIUS * [math]::cos($Angle1 * [math]::pi / 180.0)
    $y1 = $ICON_CENTER + $ICON_RADIUS * [math]::sin($Angle1 * [math]::pi / 180.0)
    $x2 = $ICON_CENTER + $ICON_RADIUS * [math]::cos($Angle2 * [math]::pi / 180.0)
    $y2 = $ICON_CENTER + $ICON_RADIUS * [math]::sin($Angle2 * [math]::pi / 180.0)
    "M $ICON_CENTER,$ICON_CENTER L $([math]::round($x1, 2)),$([math]::round($y1, 2)) A $ICON_RADIUS,$ICON_RADIUS 0 0,1 $([math]::round($x2, 2)),$([math]::round($y2, 2)) Z"
}

function svgPIChart {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string[]]$Colors
    )
    switch ($Colors.Length) {
        5 {
            @"
<g stroke="black">
    <path fill="$($Colors[0])" d="$(path 234 306)" />
    <path fill="$($Colors[1])" d="$(path 162 243)" />
    <path fill="$($Colors[2])" d="$(path 306 18)" />
    <path fill="$($Colors[3])" d="$(path 90 162)" />
    <path fill="$($Colors[4])" d="$(path 18 90)" />
</g>
"@ 
        }
        4 {
            @"
<g stroke="black">
    <path fill="$($Colors[0])" d="$(path 225 315)" />
    <path fill="$($Colors[1])" d="$(path 135 225)" />
    <path fill="$($Colors[2])" d="$(path 315 45)" />
    <path fill="$($Colors[3])" d="$(path 45 135)" />
</g>
"@ 
        }
        3 {
            @"
<g stroke="black">
    <path fill="$($Colors[0])" d="$(path 210 330)" />
    <path fill="$($Colors[1])" d="$(path 90 210)" />
    <path fill="$($Colors[2])" d="$(path 330 90)" />
</g>
"@ 
        }
        2 {
            @"
<g stroke="black">
    <path fill="$($Colors[0])" d="$(path 180 0)" />
    <path fill="$($Colors[1])" d="$(path 0 180)" />
</g>
"@ 
        }
        1 {
            @"
<circle stroke="black" fill="$($Colors[0])" cx="$ICON_CENTER" cy="$ICON_CENTER" r="$ICON_RADIUS" />
"@ 
        }
    }
}

function svgRhombus {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Color
    )
    $points = @(
        "$($ICON_CENTER - $ICON_RADIUS), $ICON_CENTER",
        "$ICON_CENTER, $($ICON_CENTER - $ICON_RADIUS)",
        "$($ICON_CENTER + $ICON_RADIUS), $ICON_CENTER",
        "$ICON_CENTER, $($ICON_CENTER + $ICON_RADIUS)"
    )
    @"
<polygon stroke="black" fill="$Color" points="$($points -Join ' ')" />
"@
}

function svgHexagon {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Color
    )
    $outer = $ICON_CENTER * $ICON_RATIO
    $points = 0..11 | ForEach-Object {
        if ($_ % 2 -eq 0) {
            $radius = [math]::Sqrt(($outer * $outer) / 3.0)
        } else {
            $radius = $outer
        }
        $angle = $_ * 30
        $x = $ICON_CENTER + $radius * [math]::cos($angle * [math]::pi / 180.0)
        $y = $ICON_CENTER + $radius * [math]::sin($angle * [math]::pi / 180.0)
        "$([math]::round($x, 2)),$([math]::round($y, 2))"
    }
    @"
<polygon stroke="black" fill="$Color" points="$($points -Join ' ')" />
"@
}

function svgCheck {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Color
    )
    @"
<path stroke="black" fill="$Color" d="M 7,11 L 13,17 L 24,6 L 29,11 L 13,27 L 2,16 Z"/>
"@
}

function Export-SVG {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Svg,
        [Parameter(Mandatory = $true)]
        [string]$Name
    )
    $content = @"
<svg xmlns="http://www.w3.org/2000/svg" width="$ICON_SIZE" height="$ICON_SIZE">
  <filter id="highlight" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="2" />
  </filter>
  $Svg
  <circle cx="7" cy="7" r="4" fill="white" filter="url(#highlight)" />
</svg>
"@
    $path = Join-Path '../public/assets/icons' "$($Name).svg"
    $content | Set-Content -Path $path -Encoding UTF8
}

function Copy-Icon {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name
    )
    $patchPath = Get-ChildItem -Path '..\SaintCoinach\[0-9]*' -Directory | Select-Object -Last 1
    $source = Join-Path -Path $patchPath -ChildPath "ui/icon/$($Name.Substring(0, 3))000/$Name.png"
    $dest = '../public/assets/icons'
    Copy-Item $source -Destination $dest
}

function Export-IconPreview {
    $folder = '../public/assets/icons'
    $path = Join-Path $folder preview.htm
    $lis = (Get-ChildItem $folder -Recurse -Include *.svg).Name |
        ForEach-Object {
            "<li><img class=`"middle`" src=`"./$_`" />$_</li>"
        }
    $lis += (Get-ChildItem $folder -Recurse -Include *.png).Name |
        ForEach-Object {
            "<li><img class=`"middle`" src=`"./$_`" />$_</li>"
        }
    @"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style rel="stylesheet" type="text/css">
      img.middle {
        vertical-align: middle;
      }
    </style>
    <title>Icons Preview</title>
  </head>
  <body>
    <ul>
      $($lis -Join "`r`n")
    </ul>
  </body>
</html>
"@ | Set-Content -Path $path -Encoding UTF8
}



Export-ModuleMember -Function `
    Import-SaintCoinachCsv, `
    ConvertTo-TypeObjectJson, `
    ConvertTo-DataJson, `
    Set-ResourceData, `
    Get-JsonData, `
    sanitize, `
    ConvertTo-UnionTypeDefinition, `
    path, `
    svgPIChart, `
    svgRhombus, `
    svgHexagon, `
    svgCheck, `
    Export-SVG, `
    Copy-Icon, `
    Export-IconPreview
