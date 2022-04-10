interface ILocationWithFlag {
  label: string;
  x: number;
  y: number;
  z: number;
  flag: string;
}

type IFieldZoneInfo = Record<
  string,
  {
    filter?: boolean;
    elite: {
      ids: number[];
      locations: ILocationWithFlag[];
    };
    ss?: {
      ids: number[];
      locations: ILocationWithFlag[];
    };
    fate?: {
      ids: number[];
    };
  }
>;

interface IRegionsJson {
  regions: {
    key: string;
    name: {
      ja: string;
      en: string;
      de: string;
      fr: string;
    };
    css: string;
  }[];
  huntRegions: {
    key: string;
    zoneIds: number[];
  }[];
  weatherRegions: {
    key: string;
    zoneIds: number[];
  }[];
}

interface ILangJson {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

interface MessageIdSet {
  bNpcNameIdSet: Set<number>;
  placeNameIdSet: Set<number>;
  weatherIdSet: Set<number>;
}

export { MessageIdSet };
