import { writeFileSync } from "fs";
import { retrieveWeatherRates, retrieveWeathers } from "./parseCsvs.ts";

const outputPath = "./src/lib/resources/weathers.data.ts";

async function generateWeathers(
  weatherRateIds: Set<number>
): Promise<Set<number>> {
  const wrRows = await retrieveWeatherRates(weatherRateIds);
  const weatherRates = wrRows.map(weatherRate => {
    return {
      id: parseInt(weatherRate.id),
      rates: [
        {
          weatherId: parseInt(weatherRate.weather0),
          chance: parseInt(weatherRate.rate0),
        },
        {
          weatherId: parseInt(weatherRate.weather1),
          chance: parseInt(weatherRate.rate1),
        },
        {
          weatherId: parseInt(weatherRate.weather2),
          chance: parseInt(weatherRate.rate2),
        },
        {
          weatherId: parseInt(weatherRate.weather3),
          chance: parseInt(weatherRate.rate3),
        },
        {
          weatherId: parseInt(weatherRate.weather4),
          chance: parseInt(weatherRate.rate4),
        },
        {
          weatherId: parseInt(weatherRate.weather5),
          chance: parseInt(weatherRate.rate5),
        },
        {
          weatherId: parseInt(weatherRate.weather6),
          chance: parseInt(weatherRate.rate6),
        },
        {
          weatherId: parseInt(weatherRate.weather7),
          chance: parseInt(weatherRate.rate7),
        },
      ].filter(rate => rate.chance > 0),
    };
  });

  const weatherIds: Set<number> = new Set<number>(
    weatherRates
      .map(weatherRate => weatherRate.rates.map(rate => rate.weatherId))
      .flat()
  );

  const weatherRows = await retrieveWeathers(weatherIds);

  const weatherType: Record<string, number> = Object.fromEntries(
    weatherRows.map(weather => [
      weather.name.replace(/ /g, ""),
      parseInt(weather.id),
    ])
  );

  const weathers = weatherRows.map(weather => {
    return {
      id: parseInt(weather.id),
      icon: weather.icon.replace("ui/icon/060000/", "").replace(".tex", ""),
    };
  });

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TWeather = ${JSON.stringify(weatherType, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )} as const;
type TWeather = typeof TWeather[keyof typeof TWeather];

interface WeatherData {
  readonly id: number;
  readonly icon: string;
}

interface WeatherRateData {
  readonly id: number;
  readonly rates: {
    readonly weatherId: number;
    readonly chance: number;
  }[];
}

const weathers: WeatherData[] = ${JSON.stringify(weathers, null, 2).replace(
    /\"([a-zA-Z][a-zA-Z0-9]*)\": /g,
    "$1: "
  )};

const weatherRates: WeatherRateData[] = ${JSON.stringify(
    weatherRates,
    null,
    2
  ).replace(/\"([a-zA-Z][a-zA-Z0-9]*)\": /g, "$1: ")};

export {
  TWeather,
  WeatherData,
  WeatherRateData,
  weathers,
  weatherRates,
};
`;

  writeFileSync(outputPath, output);
  return weatherIds;
}

export { generateWeathers };
