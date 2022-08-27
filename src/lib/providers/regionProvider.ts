import { Region, RegionImpl } from "../entities/region";
import { regionData } from "../resources/zones.data";

class RegionProvider {
  constructor() {
    this.huntRegions = regionData.huntRegions.map((hr) => new RegionImpl(hr));
    this.weatherRegions = regionData.weatherRegions.map((hr) => new RegionImpl(hr));
  }

  readonly huntRegions: Region[];
  readonly weatherRegions: Region[];

  getHuntRegions(): Region[] {
    return this.huntRegions
  }

  getWeatherRegions(): Region[] {
    return this.weatherRegions
  }
}

const regionProvider = new RegionProvider();
export { regionProvider as RegionProvider };
