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
    readonly ids: number[];
    readonly locations: IEliteLocation[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly locations: ISSLocation[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
}

class FieldZone extends Zone implements IFieldZone {
  elite: {
    ids: number[];
    locations: IEliteLocation[];
  };
  ss?: {
    ids: number[];
    locations: ISSLocation[];
  };
  fate?: {
    ids: number[];
  };
  constructor(data: IFieldZoneData) {
    super(data);
    this.elite = {
      ids: data.elite.ids,
      locations: data.elite.locations.map((loc) => {
        const flagString5Digits =
          loc.flag.length === 5
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
    };

    this.ss = data.ss ? {
      ids: data.ss.ids,
      locations: data.ss.locations.map((loc) => {
        return {
          label: loc.label,
          x: loc.x,
          y: loc.y,
          z: loc.z,
          icon: loc.flag === "10" ? "ss" : "sb",
        };
      })
    } : undefined;

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
