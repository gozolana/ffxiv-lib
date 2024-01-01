import { Weather, WeatherId, WeatherImpl } from '../entities/weather'
import {
  WeatherRateData,
  weatherRates,
  weathers,
} from '../resources/weathers.data'

class WeatherProvider {
  constructor() {
    this.weatherById = new Map(
      weathers.map(weather => [weather.id, new WeatherImpl(weather)])
    )
    this.weatherRateById = new Map(
      weatherRates.map(weatherRate => [weatherRate.id, weatherRate])
    )
  }
  private weatherById: Map<number, Weather>
  private weatherRateById: Map<number, WeatherRateData>

  isSunny(weatherId: number): boolean {
    return [
      WeatherId.ClearSkies as number,
      WeatherId.FairSkies as number,
    ].includes(weatherId)
  }

  isRainy(weatherId: number): boolean {
    return [WeatherId.Rain as number, WeatherId.Showers as number].includes(
      weatherId
    )
  }

  findWeather(weatherId: number): Weather | undefined {
    return this.weatherById.get(weatherId)
  }

  getWeatherAt(timestamp: number, weatherRateId: number): Weather {
    function calculateChance(timestamp: number): number {
      const unixSeconds = timestamp / 1000
      const bell = unixSeconds / 175
      const increment = (bell + 8 - (bell % 8)) % 24
      let totalDays = unixSeconds / 4200
      totalDays = (totalDays << 32) >>> 0 // Convert to uint
      const calcBase = totalDays * 100 + increment
      const step1 = ((calcBase << 11) ^ calcBase) >>> 0
      const step2 = ((step1 >>> 8) ^ step1) >>> 0
      return step2 % 100
    }
    const weatherRate = this.weatherRateById.get(weatherRateId)
    if (!weatherRate) {
      throw `invalid weatherRateId ${weatherRateId}`
    }

    let chance = calculateChance(timestamp)
    let weatherId = weatherRate.rates[weatherRate.rates.length - 1].weatherId
    for (const rate of weatherRate.rates) {
      if ((chance -= rate.chance) < 0) {
        weatherId = rate.weatherId
        break
      }
    }
    const weather = this.findWeather(weatherId)
    if (!weather) {
      throw `invalid weatherId ${weatherId}`
    }
    return weather
  }

  geWeatherIds(): Weather[] {
    return [...this.weatherById.values()]
  }
}

const weatherProvider = new WeatherProvider()
export { weatherProvider as WeatherProvider }
