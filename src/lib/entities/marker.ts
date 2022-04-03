import { MessageProvider } from "../providers/messageProvider";
import { IMarkerData } from "../resources/zones.data";
import { IZone } from "./zone";

interface IMarker {
  readonly x: number;
  readonly y: number;
  readonly name: string;
  readonly icon: string;
}

class Marker implements IMarker {
  constructor(data: IMarkerData, zone: IZone) {
    this.placeNameId = data.placeNameId;
    [this.x, this.y] = zone.toLocalPosXY(data);
    this.icon = data.icon;
  }

  private placeNameId: number;
  readonly x: number;
  readonly y: number;
  get name() {
    return MessageProvider.getPlaceName(this.placeNameId);
  }
  readonly icon: string;
}

export { IMarker, Marker };
