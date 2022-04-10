import {
  TDataCenter,
  TDataCenterRegion,
  DataCenterData,
} from '../resources/worlds.data';

interface DataCenter {
  readonly id: TDataCenter;
  readonly name: string;
  readonly regionId: TDataCenterRegion;
  compare(another: DataCenter): number;
}

class DataCenterImpl implements DataCenter {
  constructor(info: DataCenterData) {
    this.id = info.id;
    this.name = info.name;
    this.regionId = info.regionId;
  }
  readonly id: TDataCenter;
  readonly name: string;
  readonly regionId: TDataCenterRegion;
  compare(another: DataCenter): number {
    let result = this.regionId - another.regionId;
    if (result === 0) {
      result = this.name.localeCompare(another.name);
    }
    return result;
  }
}

export { TDataCenter, TDataCenterRegion, DataCenter, DataCenterImpl };
