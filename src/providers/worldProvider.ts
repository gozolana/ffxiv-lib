import { DataCenter, DataCenterImpl } from '../entities/dataCenter'
import { World, WorldImpl } from '../entities/world'
import {
  DataCenterId,
  DataCenterRegionId,
  WorldId,
  dataCenters,
  worlds,
} from '../resources/worlds.data'

class WorldProvider {
  private dataCenterById: Map<number, DataCenter> = new Map(
    dataCenters.map(dc => [dc.id, new DataCenterImpl(dc)])
  )
  private worldById: Map<number, World> = new Map(
    worlds.map(world => [world.id, new WorldImpl(world)])
  )

  findDataCenter(id: DataCenterId | number): DataCenter | undefined {
    return this.dataCenterById.get(id)
  }

  findWorld(id: WorldId | number): World | undefined {
    return this.worldById.get(id)
  }

  getDataCentersOfRegion(regionId: DataCenterRegionId | number): DataCenter[] {
    return [...this.dataCenterById.values()]
      .filter(dc => dc.regionId === regionId)
      .sort((a, b) => a.compare(b))
  }

  getWorldsOfDataCenter(dataCenterId: DataCenterId | number): World[] {
    return [...this.worldById.values()]
      .filter(world => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b))
  }

  getWorldsOfRegion(regionId: DataCenterRegionId): World[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map(dc => dc.id)
    return [...this.worldById.values()]
      .filter(world => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b))
  }
}

const worldProvider = new WorldProvider()
export { worldProvider as WorldProvider }
