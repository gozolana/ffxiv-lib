import { DataCenter, DataCenterImpl } from "../entities/dataCenter";
import { World, WorldImpl } from "../entities/world";
import {
  TDataCenter,
  TDataCenterRegion,
  TWorld,
  dataCenters,
  worlds,
} from "../resources/worlds.data";

class WorldProvider {
  private dataCenterById: Map<number, DataCenter> = new Map(
    dataCenters.map(dc => [dc.id, new DataCenterImpl(dc)])
  );
  private worldById: Map<number, World> = new Map(
    worlds.map(world => [world.id, new WorldImpl(world)])
  );

  findDataCenter(id: TDataCenter | number): DataCenter | undefined {
    return this.dataCenterById.get(id);
  }

  findWorld(id: TWorld | number): World | undefined {
    return this.worldById.get(id);
  }

  getDataCentersOfRegion(regionId: TDataCenterRegion | number): DataCenter[] {
    return [...this.dataCenterById.values()]
      .filter(dc => dc.regionId === regionId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfDataCenter(dataCenterId: TDataCenter | number): World[] {
    return [...this.worldById.values()]
      .filter(world => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b));
  }

  getWorldsOfRegion(regionId: TDataCenterRegion): World[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map(dc => dc.id);
    return [...this.worldById.values()]
      .filter(world => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b));
  }
}

const worldProvider = new WorldProvider();
export { worldProvider as WorldProvider };
