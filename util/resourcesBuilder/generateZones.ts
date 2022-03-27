import { readCsv } from "./csvReader";
import { parse } from "jsonc-parser";
import { readFileSync, writeFileSync } from "fs";
import { generateWeathers } from "./generateWeathers";
import {
  IExpansion,
  IFieldZoneInfo,
  IRegionsJson,
  MessageIdSet,
} from "./types";

const outputPath = "./src/lib/resources/zones.data.ts";

const inputExpansions: IExpansion[] = parse(
  readFileSync("./data/expansions.jsonc").toString()
);
const inputFieldZones: IFieldZoneInfo = parse(
  readFileSync("./data/fieldZones.jsonc").toString()
);
const inputRegions: IRegionsJson = parse(
  readFileSync("./data/regions.jsonc").toString()
);

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
          icon: marker.icon,
        };
      }),
    };
  });

  const placeNames = (
    await readCsv(basePath, "PlaceName", placeNameHeaders, "ja")
  ).filter((placeName) => placeNameIds.has(parseInt(placeName.id)));
  const placeNameMap: {
    [placeNameId: string]: string;
  } = {};
  placeNames.forEach((placeName) => {
    placeNameMap[placeName.id] = placeName.name;
  });

  const regionCssMap: { [key: string]: string } = {};
  inputRegions.regions.forEach((region) => {
    regionCssMap[region.key] = region.css;
  });
  const regionCssMapJson = JSON.stringify(regionCssMap, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  );

  const exVersionsJson = JSON.stringify(inputExpansions, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  );

  const huntRegionsJson = JSON.stringify(
    inputRegions.huntRegions,
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

  const weatherRegionsJson = JSON.stringify(
    inputRegions.weatherRegions,
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

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
    };
  });

  const zonesJson = JSON.stringify(
    allZones.filter(
      (zone) => !Object.keys(inputFieldZones).map(Number).includes(zone.id)
    ),
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

  const fieldZonesJson = JSON.stringify(
    allZones
      .filter((zone) =>
        Object.keys(inputFieldZones).map(Number).includes(zone.id)
      )
      .map((zone) => {
        return Object.assign(zone, inputFieldZones[zone.id.toString()]);
      }),
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

  const bNpcNameIds = new Set<number>(
    Object.values(inputFieldZones)
      .map((zone) => {
        const mobIds: number[] = [];
        const elite = zone.elite;
        if (elite) {
          mobIds.push(elite.S.id);
          mobIds.push(elite.A.id);
          mobIds.push(elite.B);
        }
        if (elite.A2) {
          mobIds.push(elite.A2.id);
        }
        if (elite.B2) {
          mobIds.push(elite.B2);
        }
        if (zone.ss) {
          mobIds.push(zone.ss.S);
          mobIds.push(zone.ss.B);
        }
        if (zone.fate) {
          mobIds.push(zone.fate.F);
        }
        return mobIds;
      })
      .flat()
  );

  const content = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

interface IExVersionData {
  readonly id: number;
  readonly version: number;
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
}

interface IIdentifierWithRespawn {
  id: number;
  respawnMinutes: {
    min: number;
    max: number;
  };
}

interface ILocationWithFlag {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly flag: string;
}

interface IFieldZoneData extends IZoneData {
  readonly id: number;
  readonly filter?: boolean;
  readonly elite: {
    readonly S: IIdentifierWithRespawn;
    readonly A: IIdentifierWithRespawn;
    readonly A2?: IIdentifierWithRespawn;
    readonly B: number;
    readonly B2?: number;
    readonly locations: ILocationWithFlag[];
  };
  readonly ss?: {
    readonly S: number;
    readonly B: number;
    readonly locations: ILocationWithFlag[];
  };
  readonly fate?: {
    readonly F: number;
  };
}

interface IRegionData {
  readonly key: string;
  readonly zoneIds: number[];
}

const regionCssMap: { [key: string]: string } = ${regionCssMapJson};

const exVersions: IExVersionData[] = ${exVersionsJson};

const huntRegions: IRegionData[] = ${huntRegionsJson};

const weatherRegions: IRegionData[] = ${weatherRegionsJson};

const zones: IZoneData[] = ${zonesJson};

const fieldZones: IFieldZoneData[] = ${fieldZonesJson};

export {
  IExVersionData,
  IRegionData,
  IMarkerData,
  IZoneData,
  IFieldZoneData,
  exVersions,
  regionCssMap,
  huntRegions,
  weatherRegions,
  zones,
  fieldZones,
};
`;

  writeFileSync(outputPath, content);

  messageIdSet.placeNameIdSet = new Set([
    ...messageIdSet.placeNameIdSet,
    ...placeNameIds,
  ]);
  messageIdSet.bNpcNameIdSet = new Set([
    ...messageIdSet.bNpcNameIdSet,
    ...bNpcNameIds,
  ]);
  messageIdSet.weatherIdSet = new Set([
    ...messageIdSet.weatherIdSet,
    ...weatherIds,
  ]);
}

export { generateZones };
