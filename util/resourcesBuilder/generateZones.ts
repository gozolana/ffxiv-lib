import { readCsv } from "./csvReader";
import { parse } from "jsonc-parser";
import { readFileSync, writeFileSync } from "fs";
import { generateWeathers } from "./generateWeathers";
import {
  IExpansion,
  IFieldZoneInfo,
  IRegionsJson,
  IRespawnData,
  MessageIdSet,
} from "./types";

const outputPath = "./src/lib/resources/zones.data.ts";

const inputExpansions: IExpansion[] = parse(
  readFileSync("./data/expansions.jsonc").toString()
);
const inputRespawnMinutes: IRespawnData = parse(
  readFileSync("./data/respawnMinutes.jsonc").toString()
);
const inputFieldZones: IFieldZoneInfo = parse(
  readFileSync("./data/fieldZones.jsonc").toString()
);
const inputRegions: IRegionsJson = parse(
  readFileSync("./data/regions.jsonc").toString()
);

interface IRegionData {
  readonly key: string;
  readonly css: string;
  readonly zoneIds: number[];
}

const exVersionHeaders = ["id", "name", undefined, undefined];

const territoryTypeHeaders = [
  "id",
  "name",
  undefined,
  undefined,
  "placeName_region",
  "placeName_zone",
  "placeName",
  "map",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "weatherRate",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "exVersion",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

const offsetZHeaders = ["id", "offsetZ"];

const mapHeaders = [
  "id",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "mapMarkerId",
  "name",
  "sizeFactor",
  "offsetX",
  "offsetY",
  "placeName_region",
  "placeName",
  "placeName2",
  undefined,
  undefined,
  "territoryType",
  undefined,
  undefined,
  undefined,
];

const mapMarkerHeaders = [
  "key",
  "x",
  "y",
  "icon",
  "placeNameId",
  undefined,
  undefined,
  undefined,
  undefined,
  "placeName2Id",
  undefined,
  undefined,
];

const placeNameHeaders = [
  "id",
  "name",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

async function generateZones(
  basePath: string,
  messageIdSet: MessageIdSet
): Promise<void> {
  const zoneIds: Set<number> = new Set<number>([
    ...inputRegions.huntRegions.map((r) => r.zoneIds).flat(),
    ...inputRegions.weatherRegions.map((r) => r.zoneIds).flat(),
  ]);
  const territoryTypes = (
    await readCsv(basePath, "TerritoryType", territoryTypeHeaders)
  ).filter((tt) => zoneIds.has(parseInt(tt.id)));

  const weatherRateIds: Set<number> = new Set<number>(
    territoryTypes.map((tt) => parseInt(tt.weatherRate))
  );
  const placeNameIds: Set<number> = new Set<number>(
    territoryTypes.map((tt) => parseInt(tt.placeName))
  );
  const mapIds: Set<number> = new Set<number>(
    territoryTypes.map((tt) => parseInt(tt.map))
  );

  const weatherIds: Set<number> = await generateWeathers(
    basePath,
    weatherRateIds
  );

  const offsetZs = (
    await readCsv(basePath, "TerritoryTypeTransient", offsetZHeaders)
  ).filter((offsetZ) => zoneIds.has(parseInt(offsetZ.id)));
  const offsetZMap: {
    [zoneId: string]: number;
  } = {};
  offsetZs.forEach(
    (offsetZ) => (offsetZMap[offsetZ.id] = parseInt(offsetZ.offsetZ))
  );

  const mapMarkers = await readCsv(basePath, "MapMarker", mapMarkerHeaders);

  const maps = (await readCsv(basePath, "Map", mapHeaders)).filter((map) =>
    mapIds.has(parseInt(map.id))
  );
  const mapMap: {
    [map: string]: {
      offsetX: number;
      offsetY: number;
      sizeFactor: number;
      markers: {
        x: number;
        y: number;
        placeNameId: number;
        icon: string;
      }[];
    };
  } = {};
  maps.forEach((map) => {
    const markers = mapMarkers.filter(
      (marker) =>
        marker.key.split(".")[0] === map.mapMarkerId && marker.icon != "0"
    );
    mapMap[map.id] = {
      offsetX: parseInt(map.offsetX),
      offsetY: parseInt(map.offsetY),
      sizeFactor: parseInt(map.sizeFactor),
      markers: markers.map((marker) => {
        return {
          x: parseInt(marker.x),
          y: parseInt(marker.y),
          placeNameId: parseInt(marker.placeNameId),
          icon: ("000000" + marker.icon).slice(-6),
        };
      }),
    };
  });

  const exVersions = await readCsv(
    basePath,
    "ExVersion",
    exVersionHeaders,
    "en"
  );
  let exVersionIdByType: any = {};
  exVersions.forEach((exVersion) => {
    exVersionIdByType[exVersion.name.replace(/ /g, "")] = parseInt(
      exVersion.id
    );
  });
  const cssByRegionKey: { [key: string]: string } = {};
  inputRegions.regions.forEach((region) => {
    cssByRegionKey[region.key] = region.css;
  });
  const regionData: {
    huntRegions: IRegionData[];
    weatherRegions: IRegionData[];
  } = {
    huntRegions: inputRegions.huntRegions.map((r) => {
      return {
        key: r.key,
        css: cssByRegionKey[r.key],
        zoneIds: r.zoneIds,
      };
    }),
    weatherRegions: inputRegions.weatherRegions.map((r) => {
      return {
        key: r.key,
        css: cssByRegionKey[r.key],
        zoneIds: r.zoneIds,
      };
    }),
  };

  const allZones = territoryTypes.map((tt) => {
    return {
      id: parseInt(tt.id),
      placeNameId: parseInt(tt.placeName),
      weatherRateId: parseInt(tt.weatherRate),
      sizeFactor: mapMap[tt.map].sizeFactor,
      offsetX: mapMap[tt.map].offsetX,
      offsetY: mapMap[tt.map].offsetY,
      offsetZ: offsetZMap[tt.id],
      markers: mapMap[tt.map].markers,
      exVersionId: parseInt(tt.exVersion),
    };
  });

  const zoneData = {
    zones: allZones.filter(
      (zone) => !Object.keys(inputFieldZones).map(Number).includes(zone.id)
    ),
    fieldZones: allZones
      .filter((zone) =>
        Object.keys(inputFieldZones).map(Number).includes(zone.id)
      )
      .map((zone) => {
        return Object.assign(zone, inputFieldZones[zone.id.toString()]);
      }),
  };

  const content = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TExVersion = ${JSON.stringify(exVersionIdByType, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  )} as const;
type TExVersion = typeof TExVersion[keyof typeof TExVersion];

interface IExVersionData {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly css: string;
}

interface IMarkerData {
  readonly x: number;
  readonly y: number;
  readonly placeNameId: number;
  readonly icon: string;
}

interface IZoneData {
  readonly id: number;
  readonly placeNameId: number;
  readonly weatherRateId: number;
  readonly sizeFactor: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly offsetZ: number;
  readonly markers: IMarkerData[];
  readonly exVersionId: number;
}

interface ILocationWithFlag {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly flag: string;
}

interface IFieldZoneData extends IZoneData {
  readonly filter?: boolean;
  readonly elite: {
    readonly ids: number[];
    readonly locations: ILocationWithFlag[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly locations: ILocationWithFlag[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
}

interface IRegionData {
  readonly key: string;
  readonly css: string;
  readonly zoneIds: number[];
}

const exVersions: IExVersionData[] = ${JSON.stringify(
    inputExpansions,
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ")};

const zoneData: {
  zones: IZoneData[];
  fieldZones: IFieldZoneData[];
} = ${JSON.stringify(zoneData, null, 2).replace(/\"([a-zA-Z]+)\": /g, "$1: ")};

const regionData: {
  huntRegions: IRegionData[];
  weatherRegions: IRegionData[];
} = ${JSON.stringify(regionData, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  )};

export {
  TExVersion,
  IExVersionData,
  IMarkerData,
  IRegionData,
  IZoneData,
  IFieldZoneData,
  exVersions,
  regionData,
  zoneData
};
`;

  writeFileSync(outputPath, content);

  messageIdSet.placeNameIdSet = new Set([
    ...messageIdSet.placeNameIdSet,
    ...placeNameIds,
  ]);
  messageIdSet.weatherIdSet = new Set([
    ...messageIdSet.weatherIdSet,
    ...weatherIds,
  ]);
}

export { generateZones };
