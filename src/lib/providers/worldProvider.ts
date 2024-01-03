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
  private dataCenterById: Record<number, DataCenter> = {}
  private worldById: Record<number, World> = {}

  constructor() {
    dataCenters.forEach(
      dc => (this.dataCenterById[dc.id] = new DataCenterImpl(dc))
    )
    worlds.forEach(world => (this.worldById[world.id] = new WorldImpl(world)))
  }

  findDataCenter = (id: DataCenterId | number): DataCenter | undefined =>
    this.dataCenterById[id]

  findWorld = (id: WorldId | number): World | undefined => this.worldById[id]

  getDataCentersOfRegion = (
    regionId: DataCenterRegionId | number
  ): DataCenter[] =>
    Object.values(this.dataCenterById)
      .filter(dc => dc.regionId === regionId)
      .sort((a, b) => a.compare(b))

  getWorldsOfDataCenter = (dataCenterId: DataCenterId | number): World[] =>
    Object.values(this.worldById)
      .filter(world => world.dataCenterId === dataCenterId)
      .sort((a, b) => a.compare(b))

  getWorldsOfRegion(regionId: DataCenterRegionId): World[] {
    const dcIds = this.getDataCentersOfRegion(regionId).map(dc => dc.id)
    return Object.values(this.worldById)
      .filter(world => dcIds.includes(world.dataCenterId))
      .sort((a, b) => a.compare(b))
  }

  get DEFAULT_WORLD(): World {
    return this.getWorldsOfRegion(DataCenterRegionId.Japan)[0]
  }

  findWorldOrDefault = (id: WorldId | number): World =>
    this.worldById[id] || this.DEFAULT_WORLD

  get DEFAULT_DATACENTER(): DataCenter {
    return this.getDataCentersOfRegion(DataCenterRegionId.Japan)[0]
  }

  findDataCenterOrDefault = (id: DataCenterId | number): DataCenter =>
    this.dataCenterById[id] || this.DEFAULT_DATACENTER
}

const worldProvider = new WorldProvider()
export { worldProvider as WorldProvider }
