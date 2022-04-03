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

  // Field Zone の zoneId を優先度順(新エリア→旧エリア)で並べて返す
  getFieldZoneIds(): number[] {
    return this.huntRegions.map((hr) => hr.zones.map((zone) => zone.id)).flat();
  }
}

const zoneProvider = new ZoneProvider();
export { zoneProvider as ZoneProvider };
