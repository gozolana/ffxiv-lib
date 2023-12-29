import { WeatherProvider } from '../providers/weatherProvider';
import { EorzeaDate, TEorzeaDateCategory } from './eorzeaDate';
import { Weather } from './weather';

class EorzeaPeriod {
  start: EorzeaDate;
  end: EorzeaDate;

  constructor(startTimeStamp: number, endTimeStamp: number) {
    this.start = new EorzeaDate(startTimeStamp);
    this.end = new EorzeaDate(endTimeStamp);
  }

  toLengthString() {
    const diff = Math.abs(this.end.epoch - this.start.epoch);
    const totalMinutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours > 0 ? `${hours}時間${minutes}分` : `${minutes}分`;
  }

  chanceAt(eodate: EorzeaDate) {
    if (this.end.epoch - this.start.epoch > 0) {
      return Math.min(
        100,
        (100 * (eodate.epoch - this.start.epoch)) /
          (this.end.epoch - this.start.epoch)
      );
    } else {
      return eodate.epoch >= this.end.epoch ? 100 : 0;
    }
  }

  toJSON() {
    return {
      start: this.start.toJSON(),
      end: this.end.toJSON(),
    };
  }
}

class WeatherPeriod extends EorzeaPeriod {
  readonly weatherRateId: number;
  constructor(timeStamp: number, weatherRateId: number) {
    const start: EorzeaDate = Object.assign(new EorzeaDate(timeStamp), {
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    start.hour = start.hour >= 16 ? 16 : start.hour >= 8 ? 8 : 0;
    const end = start
      .clone()
      .add(8, TEorzeaDateCategory.HOURS)
      .subtract(1, TEorzeaDateCategory.MILLISECONDS);
    super(start.epoch, end.epoch);
    this.weatherRateId = weatherRateId;
  }
  get weather(): Weather {
    return WeatherProvider.getWeatherAt(this.start.epoch, this.weatherRateId);
  }
  get prev(): WeatherPeriod {
    const prev = this.start.clone().subtract(8, TEorzeaDateCategory.HOURS);
    return new WeatherPeriod(prev.epoch, this.weatherRateId);
  }
  get next(): WeatherPeriod {
    const next = this.start.clone().add(8, TEorzeaDateCategory.HOURS);
    return new WeatherPeriod(next.epoch, this.weatherRateId);
  }
}

export { EorzeaPeriod, WeatherPeriod };
