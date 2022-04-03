import { IFieldZone, FieldZone } from "../entities/fieldZone";
import { IZone, Zone } from "../entities/zone";
import { zoneData } from "../resources/zones.data";

class ZoneProvider {
  constructor() {
    this.zoneById = new Map(
      zoneData.zones.map((zone) => [zone.id, new Zone(zone)])
    );
    this.fieldZoneById = new Map(
      zoneData.fieldZones.map((zone) => [zone.id, new FieldZone(zone)])
    );
  }
  private zoneById: Map<number, IZone>;
  private fieldZoneById: Map<number, IFieldZone>;

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
