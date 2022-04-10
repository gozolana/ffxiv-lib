import { DataCenter, DataCenterImpl } from "../entities/dataCenter";
import { World, WorldImpl } from "../entities/world";
import { dataCenters, worlds } from "../resources/worlds.data";

class WorldProvider {
  constructor() {
    this.dataCenterById = new Map(
      dataCenters.map((dc) => [dc.id, new DataCenterImpl(dc)])
    );
    this.worldById = new Map(
      worlds.map((world) => [world.id, new WorldImpl(world)])
    );
  }
  private dataCenterById: Map<number, DataCenter>;
  private worldById: Map<number, World>;

  findDataCenter(id: number): DataCenter | undefined {
    return this.dataCenterById.get(id);
  }

  findWorld(id: number): World | undefined {
    return this.worldById.get(id);
  }

  getDataCentersOfRegion(regionId: number): DataCenter[] {
    return [...this.dataCenterById.values()]
      .filter((dc) => dc.regionId === regionId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfDataCenter(dataCenterId: number): World[] {
    return [...this.worldById.values()]
      .filter((world) => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfRegion(regionId: number): World[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map((dc) => dc.id);
    return [...this.worldById.values()]
      .filter((world) => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b));
  }
}

const worldProvider = new WorldProvider();
export { worldProvider as WorldProvider };
