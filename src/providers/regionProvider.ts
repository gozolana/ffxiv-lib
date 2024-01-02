import { Region, RegionImpl } from '../entities/region'
import { regionData } from '../resources/zones.data'

class RegionProvider {
  readonly huntRegions: Region[]
  readonly weatherRegions: Region[]

  constructor() {
    this.huntRegions = regionData.huntRegions.map(hr => new RegionImpl(hr))
    this.weatherRegions = regionData.weatherRegions.map(
      hr => new RegionImpl(hr)
    )
  }

  findRegionOfZone = (zoneId: number): Region | undefined =>
    this.weatherRegions.find(r => r.zones.map(zone => zone.id).includes(zoneId))

  getHuntRegions = (): Region[] => this.huntRegions

  getWeatherRegions = (): Region[] => this.weatherRegions

  get DEAULT_HUNT_REGION() {
    return this.huntRegions[0]
  }

  get DEAULT_WEATHER_REGION() {
    return this.weatherRegions[0]
  }

  get DEFAULT_HUNT_ZONE_ID() {
    return this.DEAULT_HUNT_REGION.zones[0].id
  }

  get DEFAULT_WEATHER_ZONE_ID() {
    return this.DEAULT_WEATHER_REGION.zones[0].id
  }
}

const regionProvider = new RegionProvider()
export { regionProvider as RegionProvider }
