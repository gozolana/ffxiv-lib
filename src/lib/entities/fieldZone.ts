import { IFieldZoneData } from "../resources/zones.data";
import { IZone, Zone } from "./zone";

const TMobRank = {
  S: 1,
  A: 2,
  B: 3,
  SS: 4,
  SB: 5,
  F: 6,
  None: 999,
} as const;
type TMobRank = typeof TMobRank[keyof typeof TMobRank];

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
  flag: string;
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

/*
enum TImageSize {
  Small = 512,
  Middle = 1024,
  Large = 2048,
}
*/

interface IFieldZone extends IZone {
  getMobRank(mobId: number): TMobRank;
  getEliteLocations(filterFlag: number): IEliteLocation[];
  getSSLocations(filterFlag: number): ISSLocation[];
  getMapImageUrl(type: TMapImage, size: TImageSize): string;
}

class FieldZone extends Zone implements IFieldZone {
  eliteLocations: IEliteLocation[];
  ssLocations: ISSLocation[];
  mobRankMap: Map<number, TMobRank>;
  constructor(data: IFieldZoneData) {
    super(data);
    this.mobRankMap = new Map();
    this.mobRankMap.set(data.elite.S.id, TMobRank.S);
    this.mobRankMap.set(data.elite.A.id, TMobRank.A);
    this.mobRankMap.set(data.elite.B, TMobRank.B);
    if (data.elite.A2 && data.elite.B2) {
      this.mobRankMap.set(data.elite.A2.id, TMobRank.A);
      this.mobRankMap.set(data.elite.B2, TMobRank.B);
    }
    if (data.ss && data.ss.S && data.ss.B) {
      this.mobRankMap.set(data.ss.S, TMobRank.SS);
      this.mobRankMap.set(data.ss.B, TMobRank.SB);
    }
    if (data.fate) {
      this.mobRankMap.set(data.fate.F, TMobRank.F);
    }
    this.eliteLocations = data.elite.locations.map((loc) => {
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
    });
    this.ssLocations =
      data.ss?.locations.map((loc) => {
        return {
          label: loc.label,
          x: loc.x,
          y: loc.y,
          z: loc.z,
          flag: loc.flag === "10" ? "ss" : "sb",
        };
      }) ?? [];
  }

  getMobRank(mobId: number): TMobRank {
    return this.mobRankMap.get(mobId) ?? TMobRank.None;
  }

  getEliteLocations(filterFlag: number): IEliteLocation[] {
    return this.eliteLocations.map((loc) => {
      return {
        label: loc.label,
        x: loc.x,
        y: loc.y,
        z: loc.z,
        flag: loc.flag & filterFlag,
      };
    });
  }

  getSSLocations(filterFlag: number): ISSLocation[] {
    return this.ssLocations.map((loc) => {
      return {
        label: loc.label,
        x: loc.x,
        y: loc.y,
        z: loc.z,
        flag: loc.flag,
      };
    });
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

export { TMobRank, TMapImage, TImageSize, IFieldZone, FieldZone };
