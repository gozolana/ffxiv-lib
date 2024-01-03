import { DataCenterId, WorldData, WorldId } from '../resources/worlds.data'

interface World {
  readonly id: WorldId
  readonly name: string
  readonly dataCenterId: DataCenterId
  readonly longName: string
  readonly dataCenterName: string
  compare(another: World): number
}

class WorldImpl implements World {
  constructor(info: WorldData) {
    this.id = info.id
    this.name = info.name
    this.dataCenterId = info.dataCenterId
  }
  readonly id: WorldId
  readonly name: string
  readonly dataCenterId: DataCenterId
  get longName(): string {
    return `${this.name}(${this.dataCenterName})`
  }
  get dataCenterName(): string {
    const entry = Object.entries(DataCenterId).find(
      entry => entry[1] === this.dataCenterId
    )
    return Array.isArray(entry) ? entry[0] : ''
  }
  compare = (another: World): number =>
    this.dataCenterName.localeCompare(another.dataCenterName) ||
    this.name.localeCompare(another.name)
}

export { WorldId, WorldImpl, type World }
