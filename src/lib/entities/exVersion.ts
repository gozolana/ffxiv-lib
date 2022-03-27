import { IExVersionData } from "../resources/zones.data";

interface IExVersion {
  readonly id: number;
  readonly version: number;
  readonly css: string;
}

class ExVersion implements IExVersion {
  constructor(data: IExVersionData) {
    this.id = data.id;
    this.version = data.version;
    this.css = data.css;
  }

  readonly id: number;
  readonly version: number;
  readonly css: string;
}

export { IExVersion, ExVersion };
