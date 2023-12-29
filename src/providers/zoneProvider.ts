import { FieldZone, FieldZoneImpl } from '../entities/fieldZone';
import { Zone, ZoneImpl } from '../entities/zone';
import { zoneData } from '../resources/zones.data';

class ZoneProvider {
  constructor() {
    this.zoneById = new Map(
      zoneData.zones.map((zone) => [zone.id, new ZoneImpl(zone)])
    );
    this.fieldZoneById = new Map(
      zoneData.fieldZones.map((zone) => [zone.id, new FieldZoneImpl(zone)])
    );
  }
  private zoneById: Map<number, Zone>;
  private fieldZoneById: Map<number, FieldZone>;

  findZone(id: number): Zone | undefined {
    return this.fieldZoneById.get(id) ?? this.zoneById.get(id);
  }

  findFieldZone(id: number): FieldZone | undefined {
    return this.fieldZoneById.get(id);
  }

  getFieldZones(): FieldZone[] {
    return [...this.fieldZoneById.values()];
  }
}

const zoneProvider = new ZoneProvider();
export { zoneProvider as ZoneProvider };
