import { IDataCenter, DataCenter } from "../entities/dataCenter";
import { IWorld, World } from "../entities/world";
import {
  dataCenters,
  IDataCenterData,
  IWorldData,
  worlds,
} from "../resources/worlds.data";

class WorldProvider {
  constructor(dataCenters: IDataCenterData[], worlds: IWorldData[]) {
    this.dataCenterMap = new Map(
      dataCenters.map((dc) => [dc.id, new DataCenter(dc)])
    );
    this.worldMap = new Map(
      worlds.map((world) => [world.id, new World(world)])
    );
  }
  private dataCenterMap: Map<number, IDataCenter>;
  private worldMap: Map<number, IWorld>;
  findDataCenter(id: number): IDataCenter | undefined {
    return this.dataCenterMap.get(id);
  }
  findWorld(id: number): IWorld | undefined {
    return this.worldMap.get(id);
  }
  getDataCentersOfRegion(regionId: number): IDataCenter[] {
    return [...this.dataCenterMap.values()]
      .filter((dc) => dc.regionId === regionId)
      .sort((a, b) => a.compare(b));
  }
  getWorldsOfDataCenter(dataCenterId: number): IWorld[] {
    return [...this.worldMap.values()]
      .filter((world) => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b));
  }
  getWorldsOfRegion(regionId: number): IWorld[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map((dc) => dc.id);
    return [...this.worldMap.values()]
      .filter((world) => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b));
  }
}
const worldProvider = new WorldProvider(dataCenters, worlds);

export { worldProvider };
