import { writeFileSync } from "fs";
import { generateWeathers } from "./generateWeathers.ts";
import { MessageIds } from "./messageIds.ts";
import {
  retrieveExVersions,
  retrieveMapMarkers,
  retrieveMaps,
  retrieveTerritoryTypes,
  retrieveTerritoryTypeTransients,
} from "./parseCsvs.ts";
import { expansionsJson, fieldZonesJson, regionsJson } from "./parseJsons.ts";

const outputPath = "./src/lib/resources/zones.data.ts";

async function generateZones(messageIds: MessageIds): Promise<void> {
  const zoneIds: Set<number> = new Set<number>([
    ...regionsJson.huntRegions.map(r => r.zoneIds).flat(),
    ...regionsJson.weatherRegions.map(r => r.zoneIds).flat(),
  ]);
  const territoryTypeRows = await retrieveTerritoryTypes(zoneIds);
  const territoryTypeTransientRows =
    await retrieveTerritoryTypeTransients(zoneIds);
  const mapMarkerRows = await retrieveMapMarkers();
  const exVersionRows = await retrieveExVersions();

  const weatherRateIds: Set<number> = new Set<number>(
    territoryTypeRows.map(tt => parseInt(tt.weatherRate))
  );
  const placeNameIds: Set<number> = new Set<number>(
    territoryTypeRows.map(tt => parseInt(tt.placeName))
  );
  const placeNameIdToZoneId: Map<number, number> = new Map<number, number>(
    territoryTypeRows.map(tt => [parseInt(tt.placeName), parseInt(tt.id)])
  );
  const mapIds: Set<number> = new Set<number>(
    territoryTypeRows.map(tt => parseInt(tt.map))
  );
  const mapRows = await retrieveMaps(mapIds);

  const weatherIds: Set<number> = await generateWeathers(weatherRateIds);

  const offsetZByZoneId: Record<string, number> = Object.fromEntries(
    territoryTypeTransientRows.map(offsetZRow => [
      offsetZRow.id,
      parseInt(offsetZRow.offsetZ),
    ])
  );

  const mapById: Record<
    string,
    {
      offsetX: number;
      offsetY: number;
      sizeFactor: number;
      markers: {
        x: number;
        y: number;
        placeNameId: number;
        icon: string;
      }[];
    }
  > = Object.fromEntries(
    mapRows.map(map => {
      const markers = mapMarkerRows.filter(
        marker =>
          marker.key.split(".")[0] === map.mapMarkerId && marker.icon != "0"
      );
      return [
        map.id,
        {
          offsetX: parseInt(map.offsetX),
          offsetY: parseInt(map.offsetY),
          sizeFactor: parseInt(map.sizeFactor),
          markers: markers.map(marker => {
            return {
              x: parseInt(marker.x),
              y: parseInt(marker.y),
              placeNameId: parseInt(marker.placeNameId),
              icon: ("000000" + marker.icon).slice(-6),
            };
          }),
        },
      ];
    })
  );

  const exVersionIdByType: Record<string, number> = Object.fromEntries(
    exVersionRows.map(row => [row.name.replace(/ /g, ""), parseInt(row.id)])
  );

  const cssByRegionKey: Record<string, string> = Object.fromEntries(
    regionsJson.regions.map(row => [row.key, row.css])
  );

  type RegionData = {
    key: string;
    css: string;
    zoneIds: number[];
  };
  const regionData: {
    huntRegions: RegionData[];
    weatherRegions: RegionData[];
  } = {
    huntRegions: regionsJson.huntRegions.map(r => {
      return {
        key: r.key,
        css: cssByRegionKey[r.key],
        zoneIds: r.zoneIds,
      };
    }),
    weatherRegions: regionsJson.weatherRegions.map(r => {
      return {
        key: r.key,
        css: cssByRegionKey[r.key],
        zoneIds: r.zoneIds,
      };
    }),
  };

  const allZones = territoryTypeRows.map(tt => {
    return {
      id: parseInt(tt.id),
      placeNameId: parseInt(tt.placeName),
      weatherRateId: parseInt(tt.weatherRate),
      sizeFactor: mapById[tt.map].sizeFactor,
      offsetX: mapById[tt.map].offsetX,
      offsetY: mapById[tt.map].offsetY,
      offsetZ: offsetZByZoneId[tt.id],
      markers: mapById[tt.map].markers,
      exVersionId: parseInt(tt.exVersion),
    };
  });

  const zoneData = {
    zones: allZones.filter(
      zone => !Object.keys(fieldZonesJson).map(Number).includes(zone.id)
    ),
    fieldZones: allZones
      .filter(zone => Object.keys(fieldZonesJson).map(Number).includes(zone.id))
      .map(zone => {
        return Object.assign(zone, fieldZonesJson[zone.id.toString()]);
      }),
  };

  const content = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TExVersion = ${JSON.stringify(exVersionIdByType, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )} as const;
type TExVersion = typeof TExVersion[keyof typeof TExVersion];

interface ExVersionData {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly css: string;
}

interface MarkerData {
  readonly x: number;
  readonly y: number;
  readonly placeNameId: number;
  readonly icon: string;
}

interface ZoneData {
  readonly id: number;
  readonly placeNameId: number;
  readonly weatherRateId: number;
  readonly sizeFactor: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly offsetZ: number;
  readonly markers: MarkerData[];
  readonly exVersionId: number;
}

interface LocationWithFlag {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly flag: string;
}

interface FieldZoneData extends ZoneData {
  readonly filter?: boolean;
  readonly elite: {
    readonly ids: number[];
    readonly locations: LocationWithFlag[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly locations: LocationWithFlag[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
}

interface RegionData {
  readonly key: string;
  readonly css: string;
  readonly zoneIds: number[];
}

const exVersions: ExVersionData[] = ${JSON.stringify(
    expansionsJson,
    null,
    2
  ).replace(/\"([a-zA-Z][a-zA-Z0-9]*)\": /g, "$1: ")};

const zoneData: {
  zones: ZoneData[];
  fieldZones: FieldZoneData[];
} = ${JSON.stringify(zoneData, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )};

const regionData: {
  huntRegions: RegionData[];
  weatherRegions: RegionData[];
} = ${JSON.stringify(regionData, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )};

export {
  TExVersion,
  ExVersionData,
  MarkerData,
  RegionData,
  ZoneData,
  FieldZoneData,
  exVersions,
  regionData,
  zoneData
};
`;

  writeFileSync(outputPath, content);

  messageIds.placeNameIdSet = new Set([
    ...messageIds.placeNameIdSet,
    ...placeNameIds,
  ]);
  messageIds.placeNameIdToZoneId = placeNameIdToZoneId;
  messageIds.weatherIdSet = new Set([
    ...messageIds.weatherIdSet,
    ...weatherIds,
  ]);
}

export { generateZones };
