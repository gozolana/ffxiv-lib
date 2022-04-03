import { parse } from "jsonc-parser";
import { readFileSync, writeFileSync } from "fs";
import {
  IFieldZoneInfo,
  IRegionsJson,
  IRespawnData,
  MessageIdSet,
} from "./types";

const outputPath = "./src/lib/resources/mobs.data.ts";

const inputRespawnMinutes: IRespawnData = parse(
  readFileSync("./data/respawnMinutes.jsonc").toString()
);
const inputFieldZones: IFieldZoneInfo = parse(
  readFileSync("./data/fieldZones.jsonc").toString()
);
const inputRegions: IRegionsJson = parse(
  readFileSync("./data/regions.jsonc").toString()
);

async function generateMobs(
  messageIdSet: MessageIdSet
): Promise<void> {

  const TMobCategory = {
    EliteMark: 1,
    SpecialEliteMark: 2,
    SpecialFATE: 3,
    None: 999,
  } as const;
  type TMobCategory = typeof TMobCategory[keyof typeof TMobCategory];

  const TMobRank = {
    S: 1,
    A: 2,
    B: 3,
    None: 999,
  } as const;
  type TMobRank = typeof TMobRank[keyof typeof TMobRank];

  interface IMobData {
    id: number;
    category: TMobCategory;
    rank: TMobRank;
    zoneIds: number[];
    respawnMinutes?: {
      min: number;
      max: number;
    }
  }

  class MobMerge {
    respawnMinutes: IRespawnData = {};
    srankelites: number[] = [];
    arankelites: number[] = [];
    brankelites: number[] = [];
    specialelites: number[] = [];
    specialfates: number[] = [];
    mobMap: { [id: number]: IMobData } = {};
    constructor(  inputRespawnMinutes: IRespawnData      ) {
      this.respawnMinutes = inputRespawnMinutes;
    }
    addSRankElite(id: number, zoneId: number) {
      const mobData = this.mobMap[id];
      if (mobData) {
        if (
          mobData.category !== TMobCategory.EliteMark ||
          mobData.rank !== TMobRank.S
        ) {
          throw "Unmatch";
        }
        mobData.zoneIds.push(zoneId);
      } else {
        this.srankelites.push(id);
        this.mobMap[id] = {
          id: id,
          category: TMobCategory.EliteMark,
          rank: TMobRank.S,
          zoneIds: [zoneId],
          respawnMinutes: this.respawnMinutes[id.toString()]
        };
      }
    }
    addARankElite(id: number, zoneId: number) {
      const mobData = this.mobMap[id];
      if (mobData) {
        if (
          mobData.category !== TMobCategory.EliteMark ||
          mobData.rank !== TMobRank.A
        ) {
          throw "Unmatch";
        }
        mobData.zoneIds.push(zoneId);
      } else {
        this.arankelites.push(id);
        this.mobMap[id] = {
          id: id,
          category: TMobCategory.EliteMark,
          rank: TMobRank.A,
          zoneIds: [zoneId],
          respawnMinutes: this.respawnMinutes[id.toString()]
        };
      }
    }
    addBRankElite(id: number, zoneId: number) {
      const mobData = this.mobMap[id];
      if (mobData) {
        if (
          mobData.category !== TMobCategory.EliteMark ||
          mobData.rank !== TMobRank.B
        ) {
          throw "Unmatch";
        }
        mobData.zoneIds.push(zoneId);
      } else {
        this.brankelites.push(id);
        this.mobMap[id] = {
          id: id,
          category: TMobCategory.EliteMark,
          rank: TMobRank.B,
          zoneIds: [zoneId],
          respawnMinutes: this.respawnMinutes[id.toString()]
        };
      }
    }
    addSpecialElite(id: number, zoneId: number) {
      const mobData = this.mobMap[id];
      if (mobData) {
        if (
          mobData.category !== TMobCategory.SpecialEliteMark ||
          mobData.rank !== TMobRank.None
        ) {
          throw "Unmatch";
        }
        mobData.zoneIds.push(zoneId);
      } else {
        this.specialelites.push(id);
        this.mobMap[id] = {
          id: id,
          category: TMobCategory.SpecialEliteMark,
          rank: TMobRank.None,
          zoneIds: [zoneId],
          respawnMinutes: this.respawnMinutes[id.toString()]
        };
      }
    }
    addSpecialFATE(id: number, zoneId: number) {
      const mobData = this.mobMap[id];
      if (mobData) {
        if (
          mobData.category !== TMobCategory.SpecialFATE ||
          mobData.rank !== TMobRank.None
        ) {
          throw "Unmatch";
        }
        mobData.zoneIds.push(zoneId);
      } else {
        this.specialfates.push(id);
        this.mobMap[id] = {
          id: id,
          category: TMobCategory.SpecialFATE,
          rank: TMobRank.None,
          zoneIds: [zoneId],
          respawnMinutes: this.respawnMinutes[id.toString()]
        };
      }
    }
  }

  const mobMerge = new MobMerge(inputRespawnMinutes);

  inputRegions.huntRegions
    .map((r) => r.zoneIds)
    .flat()
    .forEach((zoneId) => {
      const zone = inputFieldZones[zoneId.toString()];
      if (zone.elite.ids.length === 5) {
        mobMerge.addSRankElite(zone.elite.ids[0], zoneId);
        mobMerge.addARankElite(zone.elite.ids[1], zoneId);
        mobMerge.addARankElite(zone.elite.ids[2], zoneId);
        mobMerge.addBRankElite(zone.elite.ids[3], zoneId);
        mobMerge.addBRankElite(zone.elite.ids[4], zoneId);
      } else {
        mobMerge.addSRankElite(zone.elite.ids[0], zoneId);
        mobMerge.addARankElite(zone.elite.ids[1], zoneId);
        mobMerge.addBRankElite(zone.elite.ids[2], zoneId);
      }
      if (zone.ss) {
        zone.ss.ids.forEach((id) => mobMerge.addSpecialElite(id, zoneId));
      }
      if (zone.fate) {
        zone.fate.ids.forEach((id) => mobMerge.addSpecialFATE(id, zoneId));
      }
    });

  const bNpcNameIds = new Set<number>([
    ...mobMerge.srankelites,
    ...mobMerge.arankelites,
    ...mobMerge.brankelites,
    ...mobMerge.specialelites,
    ...mobMerge.specialfates,
  ]);

  const content = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TMobCategory = {
  EliteMark: 1,
  SpecialEliteMark: 2,
  SpecialFATE: 3,
  None: 999,
} as const;
type TMobCategory = typeof TMobCategory[keyof typeof TMobCategory];

const TMobRank = {
  S: 1,
  A: 2,
  B: 3,
  None: 999,
} as const;
type TMobRank = typeof TMobRank[keyof typeof TMobRank];

interface IMobData {
  id: number;
  category: TMobCategory;
  rank: TMobRank;
  zoneIds: number[];
  respawnMinutes?: {
    min: number;
    max: number;
  }
}

const mobData: {
  mobById: { [id: number]: IMobData };
  sRanks: number[];
  aRanks: number[];
  bRanks: number[];
  specials: number[];
  fates: number[];
} = {
  mobById: ${JSON.stringify(mobMerge.mobMap, null, 2).replace(/\"([0-9a-zA-Z]+)\": /g, "$1: ")},
  sRanks: ${JSON.stringify(mobMerge.srankelites)},
  aRanks: ${JSON.stringify(mobMerge.arankelites)},
  bRanks: ${JSON.stringify(mobMerge.brankelites)},
  specials: ${JSON.stringify(mobMerge.specialelites)},
  fates: ${JSON.stringify(mobMerge.specialfates)}
}

export {
  TMobRank,
  TMobCategory,
  IMobData,
  mobData
};
`;

  writeFileSync(outputPath, content);

  messageIdSet.bNpcNameIdSet = new Set([
    ...messageIdSet.bNpcNameIdSet,
    ...bNpcNameIds,
  ]);
}

export { generateMobs };
