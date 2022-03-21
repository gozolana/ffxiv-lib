import { IZone, Zone } from "../entities/zone";
import { IZoneData, zones } from "../resources/zones.data";

/*
const TRegion = {
  Town: 0,
  Mob: 1,
  Eureka: 50,
  DD1: 101,
  DD2: 102,
} as const;
type TRegion = typeof TRegion[keyof typeof TRegion];

const TZone = {
  Town: 0,
  Mob1: 1,
  Mob2: 2,
  Mob3: 3,
  Eureka: 50,
  DD1: 101,
  DD2: 102,
} as const;
type TZone = typeof TZone[keyof typeof TZone];
*/

class ZoneProvider {
  constructor(zones: IZoneData[]) {
    this.zoneMap = new Map(zones.map((zone) => [zone.id, new Zone(zone)]));
  }
  private zoneMap: Map<number, IZone>;
  findZone(id: number): IZone | undefined {
    return this.zoneMap.get(id);
  }
}
const zoneProvider = new ZoneProvider(zones);

export { zoneProvider };
