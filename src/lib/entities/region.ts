import { messageProvider } from "../providers/messageProvider";
import { zoneProvider } from "../providers/zoneProvider";
import { IRegionData, regionCssMap } from "../resources/zones.data";

interface IRegion {
  readonly key: string;
  readonly name: string;
  readonly zones: {
    readonly id: number;
    readonly name: string;
  }[];
  readonly tts: string;
  readonly css: string;
}

class Region implements IRegion {
  readonly key: string;
  readonly css: string;
  readonly zones: { readonly id: number; readonly name: string }[];
  constructor(data: IRegionData) {
    this.key = data.key;
    this.css = regionCssMap[this.key];
    this.zones = data.zoneIds.map((zoneId) => {
      const zone = zoneProvider.findZone(zoneId);
      return {
        id: zoneId,
        name: zone ? zone.name : "",
      };
    });
  }
  get name(): string {
    return messageProvider.getRegion(this.key);
  }
  get tts(): string {
    return messageProvider.getRegion(this.key, true);
  }
}

export { IRegion, Region };
