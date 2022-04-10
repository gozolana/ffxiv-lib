import { parse } from 'jsonc-parser';
import { readFileSync } from 'fs';

type ExpansionData = {
  id: number;
  version: number;
  locationClusteringThreshold: number;
  ccs: string;
};

type RespawnMinutesData = Record<
  string,
  {
    min: number;
    max: number;
  }
>;

type RegionsData = {
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
};

type Message = {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
};

type MessagesData = Record<string, Message>;

type LocationWithFlag = {
  label: string;
  x: number;
  y: number;
  z: number;
  flag: string;
};

type FieldZonesData = Record<
  string,
  {
    filter?: boolean;
    elite: {
      ids: number[];
      locations: LocationWithFlag[];
    };
    ss?: {
      ids: number[];
      locations: LocationWithFlag[];
    };
    fate?: {
      ids: number[];
    };
  }
>;

const expansionsJson: ExpansionData[] = parse(
  readFileSync('./data/expansions.jsonc').toString()
);

const respawnMinutesJson: RespawnMinutesData = parse(
  readFileSync('./data/respawnMinutes.jsonc').toString()
);

const regionsJson: RegionsData = parse(
  readFileSync('./data/regions.jsonc').toString()
);

const fieldZonesJson: FieldZonesData = parse(
  readFileSync('./data/fieldZones.jsonc').toString()
);

const ttsJson: MessagesData = parse(readFileSync('./data/tts.jsonc').toString());

export {
  expansionsJson,
  respawnMinutesJson,
  regionsJson,
  fieldZonesJson,
  ttsJson,
  RespawnMinutesData,
};
