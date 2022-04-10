import { readFileSync } from 'fs';
import { parse } from '@fast-csv/parse';
import { basePath } from './saintCoinachPath';

type IDataRow = Record<string, string>;

async function readCsv(
  table: string,
  headers: readonly (string | undefined)[],
  lang = ''
): Promise<IDataRow[]> {
  return await parseCsv<IDataRow>(table, headers, lang);
}

async function parseCsv<T>(
  table: string,
  headers: readonly (string | undefined)[],
  lang = ''
) {
  const filePath =
    lang === ''
      ? `${basePath}/rawexd/${table}.csv`
      : `${basePath}/exd-all/${table}.${lang}.csv`;

  return new Promise<T[]>((resolve, reject) => {
    const result: T[] = [];
    const stream = parse<T, T>({
      headers: [...headers],
      skipRows: 3,
    })
      .on('error', reject)
      .on('data', (row: T) => {
        result.push(row);
      })
      .on('end', () => resolve(result));
    const lines = readFileSync(filePath, 'utf-8').split('\n');
    lines.forEach((line) => stream.write(line));
    stream.end();
  });
}

async function retrieveDataCenters() {
  const regionIds: Set<string> = new Set(['1', '2', '3', '4']);
  const dcHeaders = ['id', 'name', 'regionId'] as const;
  type DataCenterRow = Record<NonNullable<typeof dcHeaders[number]>, string>;
  return (await parseCsv<DataCenterRow>('WorldDCGroupType', dcHeaders)).filter(
    (dc) => regionIds.has(dc.regionId)
  );
}

async function retrieveWorlds(dataCenterIds: Set<string>) {
  const worldHeaders = [
    'id',
    undefined,
    'name',
    undefined,
    undefined,
    'dataCenterId',
    'isPublic',
  ] as const;
  type WorldRow = Record<NonNullable<typeof worldHeaders[number]>, string>;
  return (await parseCsv<WorldRow>('World', worldHeaders)).filter(
    (world) =>
      world['isPublic'] === 'True' && dataCenterIds.has(world.dataCenterId)
  );
}

async function retrieveIconStrings() {
  const weatherHeaders = [
    'id',
    'icon',
    'name',
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as const;
  type WeatherRow = Record<NonNullable<typeof weatherHeaders[number]>, string>;
  const weathers = (await parseCsv<WeatherRow>('Weather', weatherHeaders, 'en'))
    .filter((weather) => weather.icon.match(/(\d{6}).tex/))
    .map((weather) => weather.icon.match(/(\d{6}).tex/)![1]);
  type SymbolRow = Record<NonNullable<typeof symbolHeaders[number]>, string>;
  const symbolHeaders = ['id', 'icon', 'placeNameId', undefined] as const;
  const symbols = (await parseCsv<SymbolRow>('MapSymbol', symbolHeaders))
    .filter((symbol) => symbol.icon.match(/\d{5}/))
    .map((symbol) => `0${symbol.icon}`);
  return new Set([...weathers, ...symbols]);
}

async function retrieveWeatherRates(weatherRateIds: Set<number>) {
  const weatherRateHeaders = [
    'id',
    'weather0',
    'rate0',
    'weather1',
    'rate1',
    'weather2',
    'rate2',
    'weather3',
    'rate3',
    'weather4',
    'rate4',
    'weather5',
    'rate5',
    'weather6',
    'rate6',
    'weather7',
    'rate7',
  ] as const;
  type WeatherRateRow = Record<
    NonNullable<typeof weatherRateHeaders[number]>,
    string
  >;
  return (
    await parseCsv<WeatherRateRow>('WeatherRate', weatherRateHeaders)
  ).filter((weatherRate) => weatherRateIds.has(parseInt(weatherRate.id)));
}

async function retrieveWeathers(weatherIds: Set<number>) {
  const weatherHeaders = [
    'id',
    'icon',
    'name',
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as const;
  type WeatherRow = Record<NonNullable<typeof weatherHeaders[number]>, string>;
  return (await parseCsv<WeatherRow>('Weather', weatherHeaders, 'en')).filter(
    (weather) => weatherIds.has(parseInt(weather.id))
  );
}

export { readCsv, retrieveIconStrings, retrieveWeathers, retrieveWeatherRates, retrieveWorlds, retrieveDataCenters };
