import { fieldZones, huntRegions, IFieldZoneData, IRegionData } from "../resources/zones.data";
import { IRegion, Region } from "../entities/region";

class HuntProvider {
  constructor(huntRegions: IRegionData[], fieldZones: IFieldZoneData[]) {
    this.huntRegions = huntRegions;
    this.fieldZoneMap = new Map(
      fieldZones.map((zone) => [zone.id, zone])
    );
  }
  private huntRegions: IRegionData[];
  private fieldZoneMap: Map<number, IFieldZoneData>;

  findHuntInfo(zoneId: number): IFieldZoneData | undefined {
    return this.fieldZoneMap.get(zoneId);
  }

  getRegions(): IRegion[] {
    return this.huntRegions.map((hr) => new Region(hr));
  }

  // Field Zone の zoneId を優先度順(新エリア→旧エリア)で並べて返す
  getAllZoneIds(): number[] {
    return this.huntRegions.map((hr) => hr.zoneIds).flat();
  }
}
const huntProvider = new HuntProvider(huntRegions, fieldZones);

export { huntProvider };
