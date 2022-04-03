import { IRegion, Region } from "../entities/region";
import { regionData } from "../resources/zones.data";

class RegionProvider {
  constructor() {
    this.huntRegions = regionData.huntRegions.map((hr) => new Region(hr));
    this.weatherRegions = regionData.weatherRegions.map((hr) => new Region(hr));
  }

  readonly huntRegions: IRegion[];
  readonly weatherRegions: IRegion[];
}

const regionProvider = new RegionProvider();
export { regionProvider as RegionProvider };
