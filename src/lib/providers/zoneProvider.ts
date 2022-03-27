import { FieldZone, IFieldZone } from "../entities/fieldZone";
import { IRegion, Region } from "../entities/region";
import { IZone, Zone } from "../entities/zone";
import { IExVersion, ExVersion } from "../entities/exVersion";
import {
  exVersions,
  fieldZones,
  huntRegions,
  IExVersionData,
  IFieldZoneData,
  IRegionData,
  IZoneData,
  zones,
} from "../resources/zones.data";

class ZoneProvider {
  constructor(
    zones: IZoneData[],
    fieldZones: IFieldZoneData[],
    huntRegions: IRegionData[],
    exVersions: IExVersionData[]
  ) {
    this.huntRegions = huntRegions;
    this.exVersionMap = new Map(
      exVersions.map((vrs) => [vrs.id, new ExVersion(vrs)])
    );
    this.zoneMap = new Map(zones.map((zone) => [zone.id, new Zone(zone)]));
    this.fieldZoneMap = new Map(
      fieldZones.map((zone) => [zone.id, new FieldZone(zone)])
    );
  }
  private huntRegions: IRegionData[];
  private exVersionMap: Map<number, IExVersion>;
  private zoneMap: Map<number, IZone>;
  private fieldZoneMap: Map<number, IFieldZone>;
  findZone(id: number): IZone | undefined {
    return this.fieldZoneMap.get(id) && this.zoneMap.get(id);
  }
  findFieldZone(id: number): IFieldZone | undefined {
    return this.fieldZoneMap.get(id);
  }
  findExVesion(id: number): IExVersion | undefined {
    return this.exVersionMap.get(id);
  }
  getRegions(): IRegion[] {
    return this.huntRegions.map((hr) => new Region(hr));
  }

  // Field Zone の zoneId を優先度順(新エリア→旧エリア)で並べて返す
  getAllZoneIds(): number[] {
    return this.huntRegions.map((hr) => hr.zoneIds).flat();
  }
}
const zoneProvider = new ZoneProvider(
  zones,
  fieldZones,
  huntRegions,
  exVersions
);

export { zoneProvider };
