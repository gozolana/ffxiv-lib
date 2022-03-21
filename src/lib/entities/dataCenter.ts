import {
  TDataCenter,
  TDataCenterRegion,
  IDataCenterData,
} from "../resources/worlds.data";

interface IDataCenter {
  readonly id: TDataCenter;
  readonly name: string;
  readonly regionId: TDataCenterRegion;
  compare(another: IDataCenter): number;
}

class DataCenter implements IDataCenter {
  constructor(info: IDataCenterData) {
    this.id = info.id;
    this.name = info.name;
    this.regionId = info.regionId;
  }
  readonly id: TDataCenter;
  readonly name: string;
  readonly regionId: TDataCenterRegion;
  compare(another: IDataCenter): number {
    let result = this.regionId - another.regionId;
    if (result === 0) {
      result = this.name.localeCompare(another.name);
    }
    return result;
  }
}

export { TDataCenter, IDataCenter, DataCenter };
