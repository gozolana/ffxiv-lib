import { TWorld, TDataCenter, IWorldData } from "../resources/worlds.data";

interface IWorld {
  readonly id: TWorld;
  readonly name: string;
  readonly dataCenterId: TDataCenter;
  readonly longName: string;
  readonly dataCenterName: string;
  compare(another: IWorld): number;
}

class World implements IWorld {
  constructor(info: IWorldData) {
    this.id = info.id;
    this.name = info.name;
    this.dataCenterId = info.dataCenterId;
  }
  readonly id: TWorld;
  readonly name: string;
  readonly dataCenterId: TDataCenter;
  get longName(): string {
    return `${this.name}(${this.dataCenterName})`;
  }
  get dataCenterName(): string {
    const entry = Object.entries(TDataCenter).find(
      (entry) => entry[1] === this.dataCenterId
    );
    return Array.isArray(entry) ? entry[0] : "";
  }
  compare(another: IWorld): number {
    let result = this.dataCenterName.localeCompare(another.dataCenterName);
    if (result === 0) {
      result = this.name.localeCompare(another.name);
    }
    return result;
  }
}

export { TWorld, IWorld, World };
