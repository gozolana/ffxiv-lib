class IconUtil
{
    public static readonly int ICON_SIZE = 32;
    public static readonly double ICON_RATIO = 15.0 / 16.0;
    public static readonly double ICON_CENTER = ICON_SIZE / 2.0;
    public static readonly double ICON_RADIUS = ICON_CENTER * ICON_RATIO;

    public static string BuildPath(double angle1, double angle2)
    {
        double x1 = ICON_CENTER + ICON_RADIUS * Math.Cos(angle1 * Math.PI / 180.0);
        double y1 = ICON_CENTER + ICON_RADIUS * Math.Sin(angle1 * Math.PI / 180.0);
        double x2 = ICON_CENTER + ICON_RADIUS * Math.Cos(angle2 * Math.PI / 180.0);
        double y2 = ICON_CENTER + ICON_RADIUS * Math.Sin(angle2 * Math.PI / 180.0);
        return $"M {ICON_CENTER},{ICON_CENTER} L {x1:0.##},{y1:0.##} A {ICON_RADIUS},{ICON_RADIUS} 0 0,1 {x2:0.##},{y2:0.##} Z";
    }

    public static string BuildPiChart(List<string> colors)
    {
        return colors.Count switch
        {
            5 => $$"""
                    <g stroke="black">
                        <path fill="{{colors[0]}}" d="{{BuildPath(234, 306)}}" />
                        <path fill="{{colors[1]}}" d="{{BuildPath(162, 243)}}" />
                        <path fill="{{colors[2]}}" d="{{BuildPath(306, 18)}}" />
                        <path fill="{{colors[3]}}" d="{{BuildPath(90, 162)}}" />
                        <path fill="{{colors[4]}}" d="{{BuildPath(18, 90)}}" />
                    </g>
                    """,
            4 => $$"""
                    <g stroke="black">
                        <path fill="{{colors[0]}}" d="{{BuildPath(225, 315)}}" />
                        <path fill="{{colors[1]}}" d="{{BuildPath(135, 225)}}" />
                        <path fill="{{colors[2]}}" d="{{BuildPath(315, 45)}}" />
                        <path fill="{{colors[3]}}" d="{{BuildPath(45, 135)}}" />
                    </g>
                    """,
            3 => $$"""
                    <g stroke="black">
                        <path fill="{{colors[0]}}" d="{{BuildPath(210, 330)}}" />
                        <path fill="{{colors[1]}}" d="{{BuildPath(90, 210)}}" />
                        <path fill="{{colors[2]}}" d="{{BuildPath(330, 90)}}" />
                    </g>
                    """,
            2 => $$"""
                    <g stroke="black">
                        <path fill="{{colors[0]}}" d="{{BuildPath(180, 0)}}" />
                        <path fill="{{colors[1]}}" d="{{BuildPath(0, 180)}}" />
                    </g>
                    """,
            1 => $$"""
                    <circle stroke="black" fill="{{colors[0]}}" cx="{{ICON_CENTER}}" cy="{{ICON_CENTER}}" r="{{ICON_RADIUS}}" />
                    """,
            _ => throw new ArgumentException("colors length must be 1 to 5"),
        };
    }

    public static string BuildRhombus(string color)
    {
        string[] points = [
            $"{ICON_CENTER - ICON_RADIUS}, {ICON_CENTER}",
            $"{ICON_CENTER}, {ICON_CENTER - ICON_RADIUS}",
            $"{ICON_CENTER + ICON_RADIUS}, {ICON_CENTER}",
            $"{ICON_CENTER}, {ICON_CENTER + ICON_RADIUS}"
        ];
        return $$"""
            <polygon stroke="black" fill="{{color}}" points="{{string.Join(" ", points)}}" />"
            """;
    }

    public static string BuildHexagon(string color)
    {
        double outer = ICON_CENTER * ICON_RATIO;
        var points = (new int[12]).Select((_, index) =>
        {
            double radius = (index % 2 == 0) ? Math.Sqrt(outer * outer / 3.0) : outer;
            double angle = index * 30.0;
            double x = ICON_CENTER + radius * Math.Cos(angle * Math.PI / 180.0);
            double y = ICON_CENTER + radius * Math.Sin(angle * Math.PI / 180.0);
            return $"{x:0.##},{y:0.##}";
        });
        return $$"""
            <polygon stroke="black" fill="{{color}}" points="{{string.Join(" ", points)}}" />"
            """;
    }

    public static string BuildCheck(string color)
    {
        return $$"""
            <path stroke="black" fill="{{color}}" d="M 7,11 L 13,17 L 24,6 L 29,11 L 13,27 L 2,16 Z"/>
            """;
    }

    public static string BuildSvg(string body)
    {
        return $$"""
            <svg xmlns="http://www.w3.org/2000/svg" width="{{ICON_SIZE}}" height="{{ICON_SIZE}}">
            <filter id="highlight" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" />
            </filter>
            {{body}}
            <circle cx="7" cy="7" r="4" fill="white" filter="url(#highlight)" />
            </svg>
            """;
    }

    public static string BuildSvgDataUri(string svgString)
    {
        return "data:image/svg+xml;charset=UTF-8," + Uri.EscapeDataString(svgString);
    }

    public static string BuildPngDataUri(string pngFilePath)
    {
        return "data:image/png;base64," + Convert.ToBase64String(File.ReadAllBytes(pngFilePath));
    }
}

/*

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

function Get-SvgDataUri {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Name
    )
    $path = Join-Path '../public/assets/icons' "$($Name).svg"
    $svg = Get-Content -Path $path -Encoding UTF8 -Raw
    return 'data:image/svg+xml;charset=UTF-8,' + [uri]::EscapeDataString($svg)
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

function Get-PngDataUri {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Name
    )
    $path = Join-Path '../public/assets/icons' "$($Name).png"
    return 'data:image/png;base64,' + [Convert]::ToBase64String([IO.File]::ReadAllBytes($path))
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
*/