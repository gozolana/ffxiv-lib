import { FieldZone, FieldZoneImpl } from '../entities/fieldZone'
import { Zone, ZoneImpl } from '../entities/zone'
import { zoneData } from '../resources/zones.data'

class ZoneProvider {
  private zoneById: Record<number, Zone> = {}
  private fieldZoneById: Record<number, FieldZone> = {}

  constructor() {
    zoneData.zones.forEach(
      zone => (this.zoneById[zone.id] = new ZoneImpl(zone))
    )
    zoneData.fieldZones.forEach(
      zone => (this.fieldZoneById[zone.id] = new FieldZoneImpl(zone))
    )
  }

  findZone = (id: number): Zone | undefined =>
    this.fieldZoneById[id] ?? this.zoneById[id]

  findFieldZone = (id: number): FieldZone | undefined => this.fieldZoneById[id]

  getFieldZones = (): FieldZone[] => Object.values(this.fieldZoneById)
}

const zoneProvider = new ZoneProvider()
export { zoneProvider as ZoneProvider }
