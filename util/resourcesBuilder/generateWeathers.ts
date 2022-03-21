import { readCsv } from "./csvReader";
import { writeFileSync } from "fs";

const outputPath = "./src/lib/resources/weathers.data.ts";

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
];

const headerWeathers = [
  "id",
  "icon",
  "name",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

async function generateWeathers(
  basePath: string,
  wrIds: Set<number>
): Promise<Set<number>> {
  const weatherRates = (
    await readCsv(basePath, "WeatherRate", weatherRateHeaders)
  ).filter((wr) => wrIds.has(parseInt(wr.id)));

  const wrs = weatherRates.map((wr) => {
    return {
      id: parseInt(wr.id),
      rates: [
        {
          weatherId: parseInt(wr.weather0),
          chance: parseInt(wr.rate0),
        },
        {
          weatherId: parseInt(wr.weather1),
          chance: parseInt(wr.rate1),
        },
        {
          weatherId: parseInt(wr.weather2),
          chance: parseInt(wr.rate2),
        },
        {
          weatherId: parseInt(wr.weather3),
          chance: parseInt(wr.rate3),
        },
        {
          weatherId: parseInt(wr.weather4),
          chance: parseInt(wr.rate4),
        },
        {
          weatherId: parseInt(wr.weather5),
          chance: parseInt(wr.rate5),
        },
        {
          weatherId: parseInt(wr.weather6),
          chance: parseInt(wr.rate6),
        },
        {
          weatherId: parseInt(wr.weather7),
          chance: parseInt(wr.rate7),
        },
      ].filter((rate) => rate.chance > 0),
    };
  });

  const wrJson = JSON.stringify(wrs, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  );

  const weatherIds: Set<number> = new Set<number>(
    wrs.map((wr) => wr.rates.map((rate) => rate.weatherId)).flat()
  );

  const weathers = (
    await readCsv(basePath, "Weather", headerWeathers, "en")
  ).filter((weather) => weatherIds.has(parseInt(weather.id)));

  let weatherType: any = {};
  weathers.forEach((weather) => {
    weatherType[weather.name.replace(/ /g, '')] = parseInt(weather.id);
  });
  weatherType = JSON.stringify(weatherType, null, 2).replace(
    /\"([a-zA-Z]+)\": /g,
    "$1: "
  );

  const weatherJson = JSON.stringify(
    weathers.map((weather) => {
      return {
        id: parseInt(weather.id),
        icon: weather.icon.replace("ui/icon/060000/", "").replace(".tex", ""),
      };
    }),
    null,
    2
  ).replace(/\"([a-zA-Z]+)\": /g, "$1: ");

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TWeather = ${weatherType} as const;
type TWeather = typeof TWeather[keyof typeof TWeather];

interface IWeatherData {
  readonly id: number;
  readonly icon: string;
}

interface IWeatherRateData {
  readonly id: number;
  readonly rates: {
    readonly weatherId: number;
    readonly chance: number;
  }[];
}

const weathers: IWeatherData[] = ${weatherJson};

const weatherRates: IWeatherRateData[] = ${wrJson};

export {
  TWeather,
  IWeatherData,
  IWeatherRateData,
  weathers,
  weatherRates,
};
`;

  writeFileSync(outputPath, output);
  return weatherIds;
}

export { generateWeathers };
