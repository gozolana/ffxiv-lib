import { writeFileSync } from "fs";
import { retrieveDataCenters, retrieveWorlds } from "./parseCsvs.ts";
import { dataCentersJson } from "./parseJsons.ts";

const outputPath = "./src/lib/resources/worlds.data.ts";

async function generateWorlds() {
  const dataCenterRows = await retrieveDataCenters();
  const dcIds: Set<string> = new Set(dataCenterRows.map(dc => dc.id));
  const worldRows = await retrieveWorlds(dcIds);

  const dataCenters = dataCenterRows.map(dc => {
    const entry = dataCentersJson.find(
      dataCenter => dataCenter.name == dc.name
    );
    const color = entry ? entry.color : "";
    return {
      id: parseInt(dc.id),
      name: dc.name,
      color,
      regionId: parseInt(dc.regionId),
    };
  });

  const worlds = worldRows.map(world => {
    return {
      id: parseInt(world.id),
      name: world.name,
      dataCenterId: parseInt(world.dataCenterId),
    };
  });

  const dataCenterIdByType: Record<string, number> = Object.fromEntries(
    dataCenters.map(dc => [dc.name, dc.id])
  );

  const worldIdByType: Record<string, number> = Object.fromEntries(
    worlds.map(world => [world.name, world.id])
  );

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
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )} as const;
type TDataCenter = typeof TDataCenter[keyof typeof TDataCenter];

const TWorld = ${JSON.stringify(worldIdByType, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )} as const;
type TWorld = typeof TWorld[keyof typeof TWorld];

type DataCenterData = {
  id: TDataCenter;
  name: string;
  color: string;
  regionId: TDataCenterRegion;
};

type WorldData = {
  id: TWorld;
  name: string;
  dataCenterId: TDataCenter;
};

const dataCenters: DataCenterData[] = ${JSON.stringify(
    dataCenters,
    null,
    2
  ).replace(/\"([a-zA-Z][a-zA-Z0-9]*)\": /g, "$1: ")};

const worlds: WorldData[] = ${JSON.stringify(worlds, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )};

export {
  TDataCenterRegion,
  TDataCenter,
  TWorld,
  WorldData,
  DataCenterData,
  dataCenters,
  worlds,
};
`;

  writeFileSync(outputPath, output);
}

export { generateWorlds };
