import {
  weathers,
  weatherRates,
  IWeatherRateData,
} from "../resources/weathers.data";
import { TWeather, IWeather, Weather } from "../entities/weather";

class WeatherProvider {
  constructor() {
    this.weatherById = new Map(
      weathers.map((weather) => [weather.id, new Weather(weather)])
    );
    this.weatherRateById = new Map(
      weatherRates.map((weatherRate) => [weatherRate.id, weatherRate])
    );
  }
  private weatherById: Map<number, IWeather>;
  private weatherRateById: Map<number, IWeatherRateData>;

  isSunny(weatherId: number): boolean {
    return [
      TWeather.ClearSkies as number,
      TWeather.FairSkies as number,
    ].includes(weatherId);
  }

  isRainy(weatherId: number): boolean {
    return [TWeather.Rain as number, TWeather.Showers as number].includes(
      weatherId
    );
  }

  findWeather(weatherId: number): IWeather | undefined {
    return this.weatherById.get(weatherId);
  }

  getWeatherAt(timestamp: number, weatherRateId: number): IWeather {
    function calculateChance(timestamp: number): number {
      var unixSeconds = timestamp / 1000;
      var bell = unixSeconds / 175;
      var increment = (bell + 8 - (bell % 8)) % 24;
      var totalDays = unixSeconds / 4200;
      totalDays = (totalDays << 32) >>> 0; // Convert to uint
      var calcBase = totalDays * 100 + increment;
      var step1 = ((calcBase << 11) ^ calcBase) >>> 0;
      var step2 = ((step1 >>> 8) ^ step1) >>> 0;
      return step2 % 100;
    }
    const weatherRate = this.weatherRateById.get(weatherRateId);
    if (!weatherRate) {
      throw `invalid weatherRateId ${weatherRateId}`;
    }

    let chance = calculateChance(timestamp);
    let weatherId = weatherRate.rates[weatherRate.rates.length - 1].weatherId;
    for (const rate of weatherRate.rates) {
      if ((chance -= rate.chance) < 0) {
        weatherId = rate.weatherId;
        break;
      }
    }
    const weather = this.findWeather(weatherId);
    if (!weather) {
      throw `invalid weatherId ${weatherId}`;
    }
    return weather;
  }

  getWeathers(): IWeather[] {
    return [...this.weatherById.values()];
  }
}

const weatherProvider = new WeatherProvider();
export { weatherProvider as WeatherProvider };
