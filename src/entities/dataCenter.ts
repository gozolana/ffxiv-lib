import {
  DataCenterData,
  DataCenterId,
  DataCenterRegionId,
} from '../resources/worlds.data'

interface DataCenter extends DataCenterData {
  compare(another: DataCenter): number
}

class DataCenterImpl implements DataCenter {
  readonly id: DataCenterId
  readonly name: string
  readonly color: string
  readonly regionId: DataCenterRegionId
  constructor(init: DataCenterData) {
    this.id = init.id
    this.name = init.name
    this.color = init.color
    this.regionId = init.regionId
  }
  compare = (another: DataCenter): number =>
    this.regionId - another.regionId || this.name.localeCompare(another.name)
}

export { DataCenterId, DataCenterImpl, DataCenterRegionId, type DataCenter }
