import { DataCenter, DataCenterImpl } from "../entities/dataCenter";
import { World, WorldImpl } from "../entities/world";
import { dataCenters, TDataCenter, TDataCenterRegion, TWorld, worlds } from "../resources/worlds.data";

class WorldProvider {
  constructor() {
    this.dataCenterById = new Map(
      dataCenters.map((dc) => [dc.id, new DataCenterImpl(dc)])
    );
    this.worldById = new Map(
      worlds.map((world) => [world.id, new WorldImpl(world)])
    );
  }
  private dataCenterById: Map<TDataCenter, DataCenter>;
  private worldById: Map<TWorld, World>;

  findDataCenter(id: TDataCenter): DataCenter | undefined {
    return this.dataCenterById.get(id);
  }

  findWorld(id: TWorld): World | undefined {
    return this.worldById.get(id);
  }

  getDataCentersOfRegion(regionId: TDataCenterRegion): DataCenter[] {
    return [...this.dataCenterById.values()]
      .filter((dc) => dc.regionId === regionId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfDataCenter(dataCenterId: TDataCenter): World[] {
    return [...this.worldById.values()]
      .filter((world) => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfRegion(regionId: TDataCenterRegion): World[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map((dc) => dc.id);
    return [...this.worldById.values()]
      .filter((world) => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b));
  }
}

const worldProvider = new WorldProvider();
export { worldProvider as WorldProvider };
