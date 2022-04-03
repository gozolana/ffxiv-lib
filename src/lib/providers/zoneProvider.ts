import { IFieldZone, FieldZone } from "../entities/fieldZone";
import { IRegion, Region } from "../entities/region";
import { IZone, Zone } from "../entities/zone";
import { zoneData, regionData } from "../resources/zones.data";

class ZoneProvider {
  constructor() {
    this.huntRegions = regionData.huntRegions.map((hr) => new Region(hr));
    this.weatherRegions = regionData.weatherRegions.map((hr) => new Region(hr));
    this.zoneById = new Map(
      zoneData.zones.map((zone) => [zone.id, new Zone(zone)])
    );
    this.fieldZoneById = new Map(
      zoneData.fieldZones.map((zone) => [zone.id, new FieldZone(zone)])
    );
  }
  private zoneById: Map<number, IZone>;
  private fieldZoneById: Map<number, IFieldZone>;

  readonly huntRegions: IRegion[];
  readonly weatherRegions: IRegion[];

  findZone(id: number): IZone | undefined {
    return this.zoneById.get(id);
  }

  findFieldZone(id: number): IFieldZone | undefined {
    return this.fieldZoneById.get(id);
  }

  getFieldZones(): IFieldZone[] {
    return [...this.fieldZoneById.values()];
  }
}

const zoneProvider = new ZoneProvider();
export { zoneProvider as ZoneProvider };
