interface IExpansion {
  id: string;
  version: string;
  ccs: string;
}

interface IIdentifierWithRespawn {
  id: number;
  respawnMinutes: {
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
  id: number;
  filter?: boolean;
  elite: {
    S: IIdentifierWithRespawn;
    A: IIdentifierWithRespawn;
    A2?: IIdentifierWithRespawn;
    B: number;
    B2?: number;
    locations: ILocationWithFlag[];
  };
  ss?: {
    S: number;
    B: number;
    locations: ILocationWithFlag[];
  };
  fate?: {
    F: number;
  };
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
  ITextToSpeechJson,
};
