.\Set-Worlds.ps1
$uniqueMobIds = .\Set-Mobs.ps1
$uniqueWeatherIds = .\Set-Weathers.ps1
$placeNameToZoneId = .\Set-Zones.ps1
.\Set-Messages.ps1 -MobIds $uniqueMobIds -PlaceNameIdToZoneId $placeNameToZoneId -WeatherIds $uniqueWeatherIds
