import { messageProvider } from "../providers/messageProvider";
import { IZoneData, IMarkerData } from "../resources/zones.data";
import { IMarker, Marker } from "./marker";

interface IZone {
  readonly id: number;
  readonly name: string;
  readonly names: string[];
  toLocalPosXY(pos: { x: number; y: number }): [number, number];
  toLocalPosXYZ(pos: {
    x: number;
    y: number;
    z: number;
  }): [number, number, number];
  readonly scale: {
    xMin: number;
    xMax: number;
    xRange: number;
    yMin: number;
    yMax: number;
    yRange: number;
  }
}

class Zone implements IZone {
  constructor(data: IZoneData) {
    this.id = data.id;
    this.placeNameId = data.placeNameId;
    this.offsetX = data.offsetX;
    this.offsetY = data.offsetY;
    this.offsetZ = data.offsetZ;
    this.sizeFactor = data.sizeFactor;
    this.weatherRateId = data.weatherRateId;
    this.markers = data.markers.map((marker) => new Marker(marker, this));
  }

  readonly id: number;
  private placeNameId: number;
  private offsetX: number;
  private offsetY: number;
  private offsetZ: number;
  private sizeFactor: number;
  private weatherRateId: number;
  private markers: IMarker[];
  get name() {
    return messageProvider.getPlaceName(this.placeNameId);
  }
  get names() {
    return messageProvider.getPlaceNames(this.placeNameId);
  }
  get scale() {
    return {
      xMin: 1.0,
      xMax: 4096.0 / this.sizeFactor + 1.0,
      xRange: 4096.0 / this.sizeFactor,
      yMin: 1.0,
      yMax: 4096.0 / this.sizeFactor + 1.0,
      yRange: 4096.0 / this.sizeFactor
    }
  }

  toLocalPosXY(pos: { x: number; y: number }): [number, number] {
    // sizeFactor や offset を使ってローカル座標に変換
    return [
      (pos.x - this.offsetX) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
      (pos.y - this.offsetY) / 50.0 + 2048.0 / this.sizeFactor + 1.0
    ];
  }

  toLocalPosXYZ(pos: {
    x: number;
    y: number;
    z: number;
  }): [number, number, number] {
    // sizeFactor や offset を使ってローカル座標に変換
    return [
      (pos.x - this.offsetX) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
      (pos.y - this.offsetY) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
      (pos.z - this.offsetZ) / 100.0
    ];
  }
}

export { IZone, Zone };
