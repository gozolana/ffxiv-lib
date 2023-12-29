
if (Test-Path ..\SaintCoinach -PathType Container) {
    Remove-Item ..\SaintCoinach -Recurse
}
New-Item ..\SaintCoinach -ItemType Directory | Out-Null

if ($false) {
    $latestBody = Invoke-RestMethod https://api.github.com/repos/xivapi/SaintCoinach/releases/latest
    $downloadUrl = ($latestBody.assets | Where-Object { $_.name -eq 'SaintCoinach.Cmd.zip' }).browser_download_url
    $tmpfilename = [System.IO.Path]::GetTempFileName()
    $zipfilename = [System.IO.Path]::ChangeExtension($tmpfilename, '.zip')
    Move-Item $tmpfilename $zipfilename
    Invoke-RestMethod -Uri $downloadUrl -OutFile $zipfilename
    Expand-Archive -Path $zipfilename -DestinationPath ..\SaintCoinach
    Remove-Item $zipfilename
} else {
    $source = 'D:\GitHub\SaintCoinach\SaintCoinach.Cmd\bin\Release\net7.0\*'
    $dest = '..\SaintCoinach'
    Copy-Item -Path $source -Destination $dest -Recurse -Force
}
Push-Location ..\SaintCoinach
.\SaintCoinach.Cmd.exe `
    'C:/Program Files (x86)/SquareEnix/FINAL FANTASY XIV - A Realm Reborn' `
    'allexd BNpcName PlaceName Weather ExVersion' `
    'rawexd Aetheryte Map MapMarker MapSymbol TerritoryType TerritoryTypeTransient WeatherRate World WorldDCGroupType' `
    #'uihd 060000 064000' `
    'ui 060000 064000'
Pop-Location
