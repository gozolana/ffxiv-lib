import { ExVersionProvider } from '../providers/exVersionProvider';
import { MessageProvider } from '../providers/messageProvider';
import { WeatherProvider } from '../providers/weatherProvider';
import { ZoneData } from '../resources/zones.data';
import { WeatherPeriod } from './eorzeaPeriod';
import { ExVersion } from './exVersion';
import { Marker, MarkerImpl } from './marker';
import { WeatherImpl } from './weather';

interface Zone {
  readonly id: number;
  readonly name: string;
  readonly names: string[];
  readonly exVersion: ExVersion;
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
  };
  getWeatherAt(timestamp: number): WeatherImpl;
  getWeatherPeriodAt(timestamp: number): WeatherPeriod;
  readonly markers: Marker[];
}

class ZoneImpl implements Zone {
  constructor(data: ZoneData) {
    this.id = data.id;
    this.placeNameId = data.placeNameId;
    this.offsetX = data.offsetX;
    this.offsetY = data.offsetY;
    this.offsetZ = data.offsetZ;
    this.sizeFactor = data.sizeFactor;
    this.exVersionId = data.exVersionId;
    this.weatherRateId = data.weatherRateId;
    this.markers = data.markers.map((marker) => new MarkerImpl(marker, this));
  }

  readonly id: number;
  private placeNameId: number;
  private offsetX: number;
  private offsetY: number;
  private offsetZ: number;
  private sizeFactor: number;
  private exVersionId: number;
  private weatherRateId: number;
  readonly markers: Marker[];
  get name() {
    return MessageProvider.getPlaceName(this.placeNameId);
  }
  get names() {
    return MessageProvider.getPlaceNames(this.placeNameId);
  }
  get scale() {
    return {
      xMin: 1.0,
      xMax: 4096.0 / this.sizeFactor + 1.0,
      xRange: 4096.0 / this.sizeFactor,
      yMin: 1.0,
      yMax: 4096.0 / this.sizeFactor + 1.0,
      yRange: 4096.0 / this.sizeFactor,
    };
  }
  get exVersion(): ExVersion {
    return ExVersionProvider.findExVersion(this.exVersionId)!;
  }

  toLocalPosXY(pos: { x: number; y: number }): [number, number] {
    // sizeFactor ??? offset ???????????????????????????????????????
    return [
      (pos.x - this.offsetX) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
      (pos.y - this.offsetY) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
    ];
  }

  toLocalPosXYZ(pos: {
    x: number;
    y: number;
    z: number;
  }): [number, number, number] {
    // sizeFactor ??? offset ???????????????????????????????????????
    return [
      (pos.x - this.offsetX) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
      (pos.y - this.offsetY) / 50.0 + 2048.0 / this.sizeFactor + 1.0,
      (pos.z - this.offsetZ) / 100.0,
    ];
  }

  getWeatherAt(timestamp: number): WeatherImpl {
    return WeatherProvider.getWeatherAt(timestamp, this.weatherRateId);
  }

  getWeatherPeriodAt(timestamp: number): WeatherPeriod {
    return new WeatherPeriod(timestamp, this.weatherRateId);
  }
}

export { Zone, ZoneImpl };
