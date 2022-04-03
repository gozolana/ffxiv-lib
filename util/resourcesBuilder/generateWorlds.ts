import { readCsv } from "./csvReader";
import { writeFileSync } from "fs";

const outputPath = "./src/lib/resources/worlds.data.ts";

const worldHeaders = [
  "id",
  undefined,
  "name",
  undefined,
  undefined,
  "dataCenterId",
  "isPublic",
];

const dcHeaders = ["id", "name", "regionId"];

const regionIds: Set<string> = new Set(["1", "2", "3", "4"]);

async function generateWorlds(basePath: string) {
  const dcs = (await readCsv(basePath, "WorldDCGroupType", dcHeaders)).filter(
    (dc) => regionIds.has(dc.regionId)
  );
  let dataCenterIdByType: any = {};
  dcs.forEach((dc) => {
    dataCenterIdByType[dc.name] = parseInt(dc.id);
  });
  let dcsJson = JSON.stringify(
    dcs.map((dc) => {
      return {
        id: parseInt(dc.id),
        name: dc.name,
        regionId: parseInt(dc.regionId),
      };
    }),
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

  const dcIds: Set<string> = new Set(dcs.map((dc) => dc.id));

  let worlds = (await readCsv(basePath, "World", worldHeaders)).filter(
    (world) => {
      return world["isPublic"] === "True" && dcIds.has(world["dataCenterId"]);
    }
  );
  let worldIdByType: any = {};
  worlds.forEach((world) => {
    worldIdByType[world.name] = parseInt(world.id);
  });
  let worldsJson = JSON.stringify(
    worlds.map((world) => {
      return {
        id: parseInt(world.id),
        name: world.name,
        dataCenterId: parseInt(world.dataCenterId),
      };
    }),
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TDataCenterRegion = {
  JP: 1,
  NA: 2,
  EU: 3,
  OC: 4,
} as const;
type TDataCenterRegion =
  typeof TDataCenterRegion[keyof typeof TDataCenterRegion];

const TDataCenter = ${JSON.stringify(dataCenterIdByType, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  )} as const;
type TDataCenter = typeof TDataCenter[keyof typeof TDataCenter];

const TWorld = ${JSON.stringify(worldIdByType, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  )} as const;
type TWorld = typeof TWorld[keyof typeof TWorld];

interface IDataCenterData {
  readonly id: TDataCenter;
  readonly name: string;
  readonly regionId: TDataCenterRegion;
}

interface IWorldData {
  readonly id: TWorld;
  readonly name: string;
  readonly dataCenterId: TDataCenter;
}

const dataCenters: IDataCenterData[] = ${dcsJson};

const worlds: IWorldData[] = ${worldsJson};

export {
  TDataCenterRegion,
  TDataCenter,
  TWorld,
  IWorldData,
  IDataCenterData,
  dataCenters,
  worlds,
};
`;

  writeFileSync(outputPath, output);
}

export { generateWorlds };
