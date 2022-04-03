import { MessageProvider } from "../providers/messageProvider";
import { IExVersionData, TExVersion } from "../resources/zones.data";

interface IExVersion {
  readonly id: number;
  readonly version: number;
  readonly css: string;
  readonly name: string;
  readonly tts: string;
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
  get name(): string {
    return MessageProvider.getExVersion(this.id);
  }
  get tts(): string {
    return MessageProvider.getExVersion(this.id, true);
  }
}

export { TExVersion, IExVersion, ExVersion };
