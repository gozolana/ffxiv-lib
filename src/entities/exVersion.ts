import { MessageProvider } from "../providers/messageProvider";
import { ExVersionData, TExVersion } from "../resources/zones.data";

interface ExVersion {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly css: string;
  readonly name: string;
  readonly tts: string;
}

class ExVersionImpl implements ExVersion {
  constructor(data: ExVersionData) {
    this.id = data.id;
    this.version = data.version;
    this.locationClusteringThreshold = data.locationClusteringThreshold;
    this.css = data.css;
  }

  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly css: string;
  get name(): string {
    return MessageProvider.getExVersion(this.id);
  }
  get tts(): string {
    return MessageProvider.getExVersion(this.id, true);
  }
}

export { ExVersionImpl, type ExVersion, type TExVersion };
