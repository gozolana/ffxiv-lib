interface IExpansion {
  id: string;
  version: string;
  ccs: string;
}

interface IRespawnData {
  [id: string]: {
    min: number;
    max: number;
  };
}

interface ILocationWithFlag {
  label: string;
  x: number;
  y: number;
  z: number;
  flag: string;
}

interface IFieldZoneInfo {
  [id: string]: {
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
}

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
  BNpcName?: { [id: number]: string };
  PlaceName?: { [id: number]: string };
  Weather?: { [id: number]: string };
  Region?: { [key: string]: string };
}

interface ITextToSpeechJson {
  [lang: string]: ILangJson;
}

interface MessageIdSet {
  bNpcNameIdSet: Set<number>;
  placeNameIdSet: Set<number>;
  weatherIdSet: Set<number>;
}

export {
  MessageIdSet,
  IExpansion,
  IFieldZoneInfo,
  IRegionsJson,
  IRespawnData,
  ITextToSpeechJson,
};
