$uniqueBNpcNameIds = [System.Collections.Generic.SortedSet[int]]::new()
$uniqueWeatherIds = [System.Collections.Generic.SortedSet[int]]::new()
$uniquePlaceNameIds = [System.Collections.Generic.SortedSet[int]]::new()
$placeNameIdToZoneId = [System.Collections.Generic.SortedDictionary[int, int]]::new()

.\Set-ExVersions.ps1
.\Set-Worlds.ps1
.\Set-Icons.ps1
.\Set-Mobs.ps1 -UniqueBNpcNameIds $uniqueBNpcNameIds
.\Set-Weathers.ps1 -UniqueWeatherIds $uniqueWeatherIds
.\Set-Zones.ps1 -UniquePlaceNameIds $uniquePlaceNameIds -PlaceNameIdToZoneId $placeNameIdToZoneId
.\Set-Messages.ps1 -MobIds $uniqueBNpcNameIds -PlaceNameIds $uniquePlaceNameIds -PlaceNameIdToZoneId $placeNameIdToZoneId -WeatherIds $uniqueWeatherIds
