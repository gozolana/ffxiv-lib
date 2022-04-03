import { IFieldZoneData } from "../resources/zones.data";
import { IZone, Zone } from "./zone";

interface IEliteLocation {
  label: string;
  x: number;
  y: number;
  z: number;
  flag: number;
}

interface ISSLocation {
  label: string;
  x: number;
  y: number;
  z: number;
  icon: string;
}
/*
enum TMapImage {
  Default,
  Outline,
  Transparent,
}
*/
const TMapImage = {
  Default: 0,
  Outline: 1,
  Transparent: 2,
} as const;
type TMapImage = typeof TMapImage[keyof typeof TMapImage];

const TImageSize = {
  Small: 512,
  Middle: 1024,
  Large: 2048,
} as const;
type TImageSize = typeof TImageSize[keyof typeof TImageSize];

interface IFieldZone extends IZone {
  getMapImageUrl(type: TMapImage, size: TImageSize): string;
  readonly filter?: boolean;
  readonly elite: {
    readonly length: number;
    readonly ids: number[];
    readonly sId: number;
    readonly aIds: number[];
    readonly bIds: number[];
    readonly locations: IEliteLocation[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly sId: number;
    readonly bId: number;
    readonly locations: ISSLocation[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
}

class FieldZone extends Zone implements IFieldZone {
  readonly filter?: boolean;
  readonly elite: {
    readonly length: number;
    readonly ids: number[];
    readonly sId: number;
    readonly aIds: number[];
    readonly bIds: number[];
    readonly locations: IEliteLocation[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly sId: number;
    readonly bId: number;
    readonly locations: ISSLocation[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
  constructor(data: IFieldZoneData) {
    super(data);
    this.filter = data.filter;
    const eliteLength = data.elite.ids.length;
    this.elite = {
      length: eliteLength,
      ids: data.elite.ids,
      locations: data.elite.locations.map((loc) => {
        const flagString5Digits =
          eliteLength === 5
            ? loc.flag
            : `${loc.flag.slice(0, 2)}0${loc.flag.slice(2, 1)}0`;
        return {
          label: loc.label,
          x: loc.x,
          y: loc.y,
          z: loc.z,
          flag: parseInt(flagString5Digits, 2),
        };
      }),
      sId: data.elite.ids[0],
      aIds:
        eliteLength === 5
          ? data.elite.ids.slice(1, 1)
          : data.elite.ids.slice(1, 0),
      bIds:
        eliteLength === 5
          ? data.elite.ids.slice(3, 1)
          : data.elite.ids.slice(2, 0),
    };

    this.ss = data.ss
      ? {
          ids: data.ss.ids,
          locations: data.ss.locations.map((loc) => {
            return {
              label: loc.label,
              x: loc.x,
              y: loc.y,
              z: loc.z,
              icon: loc.flag === "10" ? "ss" : "sb",
            };
          }),
          sId: data.ss.ids[0],
          bId: data.ss.ids[1],
        }
      : undefined;

    this.fate = data.fate;
  }

  getMapImageUrl(imageType: TMapImage, imageSize: TImageSize): string {
    const baseUrl = "https://res.cloudinary.com/lanaklein14/image/upload";
    switch (imageType) {
      case TMapImage.Outline:
        return `${baseUrl}/c_scale,w_${imageSize}/maps2/${this.id}.png`;
      case TMapImage.Transparent:
        return `${baseUrl}/e_grayscale/e_outline:outer:8/co_white,e_make_transparent:50/co_rgb:bbf2ef,e_colorize:100/c_scale,w_${imageSize}/maps2/${this.id}.png`;
      default:
        return `${baseUrl}/c_scale,w_${imageSize}/maps/${this.id}.jpg`;
    }
  }
}

export { TMapImage, TImageSize, IFieldZone, FieldZone };
