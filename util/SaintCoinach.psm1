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
        [string]$Name
    )
    $path = Join-Path '../src/resources' "$($Name).data.ts"
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

Export-ModuleMember -Function `
    Import-SaintCoinachCsv, `
    ConvertTo-TypeObjectJson, `
    ConvertTo-DataJson, `
    Set-ResourceData, `
    Get-JsonData
