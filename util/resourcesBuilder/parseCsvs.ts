import { parse, Row } from "@fast-csv/parse";
import { readFileSync } from "fs";
import { getPatchPath } from "./saintCoinach.ts";

async function parseCsv<T extends Row<any>>(
  table: string,
  headers: readonly (string | undefined)[],
  lang = ""
) {
  const filePath =
    lang === ""
      ? `${getPatchPath()}/rawexd/${table}.csv`
      : `${getPatchPath()}/exd-all/${table}.${lang}.csv`;

  return new Promise<T[]>((resolve, reject) => {
    const result: T[] = [];
    const stream = parse<T, T>({
      headers: [...headers],
      skipRows: 3,
    })
      .on("error", reject)
      .on("data", (row: T) => {
        result.push(row);
      })
      .on("end", () => resolve(result));
    const lines = readFileSync(filePath, "utf-8").split("\n");
    lines.forEach(line => stream.write(line));
    stream.end();
  });
}

async function retrieveTerritoryTypes(zoneIds: Set<number>) {
  const headers = [
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
  ] as const;
  type Row = Record<NonNullable<(typeof headers)[number]>, string>;
  return (await parseCsv<Row>("TerritoryType", headers)).filter(tt =>
    zoneIds.has(parseInt(tt.id))
  );
}

async function retrieveTerritoryTypeTransients(zoneIds: Set<number>) {
  const headers = ["id", "offsetZ"] as const;
  type Row = Record<NonNullable<(typeof headers)[number]>, string>;
  return (await parseCsv<Row>("TerritoryTypeTransient", headers)).filter(ttt =>
    zoneIds.has(parseInt(ttt.id))
  );
}

async function retrieveExVersions() {
  const headers = ["id", "name", undefined, undefined] as const;
  type Row = Record<NonNullable<(typeof headers)[number]>, string>;
  return await parseCsv<Row>("ExVersion", headers, "en");
}

async function retrieveMapMarkers() {
  const headers = [
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
  ] as const;
  type Row = Record<NonNullable<(typeof headers)[number]>, string>;
  return await parseCsv<Row>("MapMarker", headers);
}

async function retrieveMaps(mapIds: Set<number>) {
  const headers = [
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
    undefined,
  ] as const;
  type Row = Record<NonNullable<(typeof headers)[number]>, string>;
  return (await parseCsv<Row>("Map", headers)).filter(map =>
    mapIds.has(parseInt(map.id))
  );
}

async function retrieveDataCenters() {
  const regionIds: Set<string> = new Set(["1", "2", "3", "4"]);
  const headers = ["id", "name", "regionId"] as const;
  type Row = Record<NonNullable<(typeof headers)[number]>, string>;
  return (await parseCsv<Row>("WorldDCGroupType", headers)).filter(dc =>
    regionIds.has(dc.regionId)
  );
}

async function retrieveWorlds(dataCenterIds: Set<string>) {
  const worldHeaders = [
    "id",
    undefined,
    "name",
    undefined,
    undefined,
    "dataCenterId",
    "isPublic",
  ] as const;
  type WorldRow = Record<NonNullable<(typeof worldHeaders)[number]>, string>;
  return (await parseCsv<WorldRow>("World", worldHeaders)).filter(
    world =>
      world["isPublic"] === "True" && dataCenterIds.has(world.dataCenterId)
  );
}

async function retrieveIconStrings() {
  const weatherHeaders = [
    "id",
    "icon",
    "name",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as const;
  type WeatherRow = Record<
    NonNullable<(typeof weatherHeaders)[number]>,
    string
  >;
  const weathers = (await parseCsv<WeatherRow>("Weather", weatherHeaders, "en"))
    .filter(weather => weather.icon.match(/(\d{6}).tex/))
    .map(weather => weather.icon.match(/(\d{6}).tex/)![1]);
  type SymbolRow = Record<NonNullable<(typeof symbolHeaders)[number]>, string>;
  const symbolHeaders = ["id", "icon", "placeNameId", undefined] as const;
  const symbols = (await parseCsv<SymbolRow>("MapSymbol", symbolHeaders))
    .filter(symbol => symbol.icon.match(/\d{5}/))
    .map(symbol => `0${symbol.icon}`);
  return new Set([...weathers, ...symbols]);
}

async function retrieveWeatherRates(weatherRateIds: Set<number>) {
  const weatherRateHeaders = [
    "id",
    "weather0",
    "rate0",
    "weather1",
    "rate1",
    "weather2",
    "rate2",
    "weather3",
    "rate3",
    "weather4",
    "rate4",
    "weather5",
    "rate5",
    "weather6",
    "rate6",
    "weather7",
    "rate7",
  ] as const;
  type WeatherRateRow = Record<
    NonNullable<(typeof weatherRateHeaders)[number]>,
    string
  >;
  return (
    await parseCsv<WeatherRateRow>("WeatherRate", weatherRateHeaders)
  ).filter(weatherRate => weatherRateIds.has(parseInt(weatherRate.id)));
}

async function retrieveWeathers(weatherIds: Set<number>) {
  const weatherHeaders = [
    "id",
    "icon",
    "name",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as const;
  type WeatherRow = Record<
    NonNullable<(typeof weatherHeaders)[number]>,
    string
  >;
  return (await parseCsv<WeatherRow>("Weather", weatherHeaders, "en")).filter(
    weather => weatherIds.has(parseInt(weather.id))
  );
}

async function retrieveMessages(
  langs: string[],
  table: string,
  headers: readonly (string | undefined)[],
  filterIds: Set<number> | undefined = undefined
) {
  return await Promise.all(
    langs.map(async lang => {
      return {
        lang: lang,
        results: Object.fromEntries(
          (await parseCsv<Record<string, string>>(table, headers, lang))
            .filter(row => (filterIds ? filterIds.has(parseInt(row.id)) : true))
            .map(row => [row.id, row.name])
        ),
      };
    })
  );
}

async function retrieveExVersionMessages(langs: string[]) {
  const headers = ["id", "name", undefined, undefined] as const;
  return await retrieveMessages(langs, "ExVersion", headers);
}

async function retrieveBNpcNameMessages(
  langs: string[],
  filterIds: Set<number>
) {
  const headers = [
    "id",
    "name",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as const;
  return await retrieveMessages(langs, "BNpcName", headers, filterIds);
}

async function retrievePlaceNameMessages(
  langs: string[],
  filterIds: Set<number>
) {
  const headers = [
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
  ] as const;
  return await retrieveMessages(langs, "PlaceName", headers, filterIds);
}

async function retrieveWeatherMessages(
  langs: string[],
  filterIds: Set<number>
) {
  const headers = [
    "id",
    "icon",
    "name",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as const;
  return await retrieveMessages(langs, "Weather", headers, filterIds);
}

export {
  retrieveBNpcNameMessages,
  retrieveDataCenters,
  retrieveExVersionMessages,
  retrieveExVersions,
  retrieveIconStrings,
  retrieveMapMarkers,
  retrieveMaps,
  retrievePlaceNameMessages,
  retrieveTerritoryTypes,
  retrieveTerritoryTypeTransients,
  retrieveWeatherMessages,
  retrieveWeatherRates,
  retrieveWeathers,
  retrieveWorlds,
};
