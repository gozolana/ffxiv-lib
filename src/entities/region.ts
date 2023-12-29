import { MessageProvider } from "../providers/messageProvider";
import { ZoneProvider } from "../providers/zoneProvider";
import { RegionData } from "../resources/zones.data";

interface Region {
  readonly key: string;
  readonly css: string;
  readonly zones: {
    readonly id: number;
    readonly name: string;
  }[];
  readonly name: string;
  readonly tts: string;
}

class RegionImpl implements Region {
  constructor(data: RegionData) {
    this.key = data.key;
    this.css = data.css;
    this.zones = data.zoneIds.map(zoneId => {
      const zone = ZoneProvider.findZone(zoneId);
      return {
        id: zoneId,
        name: zone ? zone.name : "",
      };
    });
  }

  readonly key: string;
  readonly css: string;
  readonly zones: { readonly id: number; readonly name: string }[];
  get name(): string {
    return MessageProvider.getRegion(this.key);
  }
  get tts(): string {
    return MessageProvider.getRegion(this.key, true);
  }
}

export { RegionImpl, type Region };
