import { IDataCenter, DataCenter } from "../entities/dataCenter";
import { IWorld, World } from "../entities/world";
import { dataCenters, worlds } from "../resources/worlds.data";

class WorldProvider {
  constructor() {
    this.dataCenterById = new Map(
      dataCenters.map((dc) => [dc.id, new DataCenter(dc)])
    );
    this.worldById = new Map(
      worlds.map((world) => [world.id, new World(world)])
    );
  }
  private dataCenterById: Map<number, IDataCenter>;
  private worldById: Map<number, IWorld>;

  findDataCenter(id: number): IDataCenter | undefined {
    return this.dataCenterById.get(id);
  }

  findWorld(id: number): IWorld | undefined {
    return this.worldById.get(id);
  }

  getDataCentersOfRegion(regionId: number): IDataCenter[] {
    return [...this.dataCenterById.values()]
      .filter((dc) => dc.regionId === regionId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfDataCenter(dataCenterId: number): IWorld[] {
    return [...this.worldById.values()]
      .filter((world) => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfRegion(regionId: number): IWorld[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map((dc) => dc.id);
    return [...this.worldById.values()]
      .filter((world) => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b));
  }
}

const worldProvider = new WorldProvider();
export { worldProvider as WorldProvider };
