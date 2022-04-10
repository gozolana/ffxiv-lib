import { readCsv } from './parseCsvs';
import { writeFileSync } from 'fs';
import { generateWeathers } from './generateWeathers';
import {
  MessageIdSet,
} from './types';
import { expansionsJson, fieldZonesJson, regionsJson } from './parseJsons';
import { basePath } from './saintCoinachPath';

const outputPath = './src/lib/resources/zones.data.ts';


interface IRegionData {
  readonly key: string;
  readonly css: string;
  readonly zoneIds: number[];
}

const exVersionHeaders = ['id', 'name', undefined, undefined];

const territoryTypeHeaders = [
  'id',
  'name',
  undefined,
  undefined,
  'placeName_region',
  'placeName_zone',
  'placeName',
  'map',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  'weatherRate',
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
  'exVersion',
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

const offsetZHeaders = ['id', 'offsetZ'];

const mapHeaders = [
  'id',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  'mapMarkerId',
  'name',
  'sizeFactor',
  'offsetX',
  'offsetY',
  'placeName_region',
  'placeName',
  'placeName2',
  undefined,
  undefined,
  'territoryType',
  undefined,
  undefined,
  undefined,
];

const mapMarkerHeaders = [
  'key',
  'x',
  'y',
  'icon',
  'placeNameId',
  undefined,
  undefined,
  undefined,
  undefined,
  'placeName2Id',
  undefined,
  undefined,
];

async function generateZones(
  messageIdSet: MessageIdSet
): Promise<void> {
  const zoneIds: Set<number> = new Set<number>([
    ...regionsJson.huntRegions.map((r) => r.zoneIds).flat(),
    ...regionsJson.weatherRegions.map((r) => r.zoneIds).flat(),
  ]);
  const territoryTypes = (
    await readCsv('TerritoryType', territoryTypeHeaders)
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
    weatherRateIds
  );

  const offsetZs = (
    await readCsv('TerritoryTypeTransient', offsetZHeaders)
  ).filter((offsetZ) => zoneIds.has(parseInt(offsetZ.id)));
  const offsetZMap: Record<string, number> = {};
  offsetZs.forEach(
    (offsetZ) => (offsetZMap[offsetZ.id] = parseInt(offsetZ.offsetZ))
  );

  const mapMarkers = await readCsv('MapMarker', mapMarkerHeaders);

  const maps = (await readCsv('Map', mapHeaders)).filter((map) =>
    mapIds.has(parseInt(map.id))
  );
  const mapMap: Record<
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
  > = {};
  maps.forEach((map) => {
    const markers = mapMarkers.filter(
      (marker) =>
        marker.key.split('.')[0] === map.mapMarkerId && marker.icon != '0'
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
          icon: ('000000' + marker.icon).slice(-6),
        };
      }),
    };
  });

  const exVersions = await readCsv(
    'ExVersion',
    exVersionHeaders,
    'en'
  );
  let exVersionIdByType: any = {};
  exVersions.forEach((exVersion) => {
    exVersionIdByType[exVersion.name.replace(/ /g, '')] = parseInt(
      exVersion.id
    );
  });
  const cssByRegionKey: Record<string, string> = {};
  regionsJson.regions.forEach((region) => {
    cssByRegionKey[region.key] = region.css;
  });
  const regionData: {
    huntRegions: IRegionData[];
    weatherRegions: IRegionData[];
  } = {
    huntRegions: regionsJson.huntRegions.map((r) => {
      return {
        key: r.key,
        css: cssByRegionKey[r.key],
        zoneIds: r.zoneIds,
      };
    }),
    weatherRegions: regionsJson.weatherRegions.map((r) => {
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
      (zone) => !Object.keys(fieldZonesJson).map(Number).includes(zone.id)
    ),
    fieldZones: allZones
      .filter((zone) =>
        Object.keys(fieldZonesJson).map(Number).includes(zone.id)
      )
      .map((zone) => {
        return Object.assign(zone, fieldZonesJson[zone.id.toString()]);
      }),
  };

  const content = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TExVersion = ${JSON.stringify(exVersionIdByType, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    '$1: '
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
  ).replace(/\"([a-zA-Z]+)\": /g, '$1: ')};

const zoneData: {
  zones: ZoneData[];
  fieldZones: FieldZoneData[];
} = ${JSON.stringify(zoneData, null, 2).replace(/\"([a-zA-Z]+)\": /g, '$1: ')};

const regionData: {
  huntRegions: RegionData[];
  weatherRegions: RegionData[];
} = ${JSON.stringify(regionData, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    '$1: '
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
