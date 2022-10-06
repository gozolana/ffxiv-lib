import { EorzeaDate, TEorzeaDateCategory } from '../entities/eorzeaDate';
import { EorzeaPeriod, WeatherPeriod } from '../entities/eorzeaPeriod';
import { WeatherProvider } from './weatherProvider';

const TWeatherRate = {
  SouthShroud: 3,
  WesternThanalan: 9,
  EasternLaNoscea: 18,
  Labyrinthos: 131,
} as const;
type TWeatherRate = typeof TWeatherRate[keyof typeof TWeatherRate];

class ZonaSeekerPeriod extends EorzeaPeriod {
  constructor(date: Date) {
    let periodNext = new WeatherPeriod(date, TWeatherRate.WesternThanalan);
    //晴れ→雨の変曲点を算出
    while (!WeatherProvider.isSunny(periodNext.weather.id)) {
      periodNext = periodNext.next;
    }
    while (WeatherProvider.isSunny(periodNext.weather.id)) {
      periodNext = periodNext.next;
    }
    let periodPrevious = periodNext.prev.prev;
    //let count = 1;
    while (WeatherProvider.isSunny(periodPrevious.weather.id)) {
      //count += 1;
      periodPrevious = periodPrevious.prev;
    }
    super(
      periodPrevious.next.start.toDate(),
      periodNext.start.subtract(1, TEorzeaDateCategory.MILLISECONDS).toDate()
    );
  }
  get nextZonaSeekerPeriod(): ZonaSeekerPeriod {
    const next = this.end.clone().add(1, TEorzeaDateCategory.MILLISECONDS);
    return new ZonaSeekerPeriod(next.toDate());
  }
}

class EorzeaDateProvider {
  // spawnDateを含む or spawnDateの次に来るケロゲロス期間(x月16日17:00～x月20日04:59.999)を返す。
  getCroakadilePeriod(spawnDate = new Date()): EorzeaPeriod {
    const baseEODate: EorzeaDate = Object.assign(new EorzeaDate(spawnDate), {
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    if (
      baseEODate.day >= 20 ||
      (baseEODate.day == 19 && baseEODate.hour >= 5)
    ) {
      baseEODate.add(1, TEorzeaDateCategory.MONTHS);
    }
    return new EorzeaPeriod(
      Object.assign(baseEODate.clone(), { day: 15, hour: 17 }).toDate(),
      Object.assign(baseEODate.clone(), { day: 19, hour: 5 })
        .subtract(1, TEorzeaDateCategory.MILLISECONDS)
        .toDate()
    );
  }

  // spawnDateを含む or spawnDateの次に来るマインドフレア期間(x月01日00:00～x月04日04:59.999)を返す。
  getMindflayerPeriod(spawnDate = new Date()): EorzeaPeriod {
    const baseEODate: EorzeaDate = Object.assign(new EorzeaDate(spawnDate), {
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    if (baseEODate.day >= 4 || (baseEODate.day == 3 && baseEODate.hour >= 5)) {
      baseEODate.add(1, TEorzeaDateCategory.MONTHS);
    }
    return new EorzeaPeriod(
      Object.assign(baseEODate.clone(), { day: 0, hour: 0 }).toDate(),
      Object.assign(baseEODate.clone(), { day: 3, hour: 5 })
        .subtract(1, TEorzeaDateCategory.MILLISECONDS)
        .toDate()
    );
  }

  // spawnDateを含む or spawnDateの次に来るオキナ期間(x月16日12:00～x月20日11:59.999)を返す。
  getOkinaPeriods(spawnPeriod: EorzeaPeriod): EorzeaPeriod[] {
    let baseDate = spawnPeriod.start;
    const periods: EorzeaPeriod[] = [];
    do {
      const base: EorzeaDate = Object.assign(baseDate.clone(), {
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      if (base.day >= 19 && base.hour >= 12) {
        base.add(1, TEorzeaDateCategory.MONTHS);
      }
      const start: EorzeaDate = Object.assign(base.clone(), {
        day: 15,
        hour: 12,
      });
      const end: EorzeaDate = Object.assign(base.clone(), {
        day: 19,
        hour: 12,
      }).subtract(1, TEorzeaDateCategory.MILLISECONDS);
      periods.push(
        new EorzeaPeriod(
          start < spawnPeriod.start
            ? spawnPeriod.start.toDate()
            : start.toDate(),
          end < spawnPeriod.end
            ? end.toDate()
            : start > spawnPeriod.end
            ? start.toDate()
            : spawnPeriod.end.toDate()
        )
      );
      baseDate = end.clone();
      baseDate.add(1, TEorzeaDateCategory.MILLISECONDS);
    } while (baseDate < spawnPeriod.end);
    return periods;
  }

  getGarlokPeriods(spawnPeriod: EorzeaPeriod): EorzeaPeriod[] {
    class GarlokPeriod extends EorzeaPeriod {
      constructor(date: Date) {
        let periodNext = new WeatherPeriod(date, TWeatherRate.EasternLaNoscea);
        //晴れ→雨の変曲点を算出
        while (WeatherProvider.isRainy(periodNext.weather.id)) {
          periodNext = periodNext.next;
        }
        while (!WeatherProvider.isRainy(periodNext.weather.id)) {
          periodNext = periodNext.next;
        }
        let periodPrevious = periodNext.prev.prev;
        let count = 1;
        while (!WeatherProvider.isRainy(periodPrevious.weather.id)) {
          count += 1;
          periodPrevious = periodPrevious.prev;
        }
        if (count >= 9) {
          const start = periodPrevious.next.start.toDate();
          // Add 200 minutes
          start.setTime(start.getTime() + 200 * 60 * 1000);
          super(
            start,
            periodNext.start
              .subtract(1, TEorzeaDateCategory.MILLISECONDS)
              .toDate()
          );
        } else {
          const anotherPeriod = new GarlokPeriod(periodNext.start.toDate());
          super(anotherPeriod.start.toDate(), anotherPeriod.end.toDate());
        }
      }
      get nextGarlokPeriod(): GarlokPeriod {
        const next = this.end.clone().add(1, TEorzeaDateCategory.MILLISECONDS);
        return new GarlokPeriod(next.toDate());
      }
    }

    let basePeriod = new GarlokPeriod(spawnPeriod.start.toDate());
    const periods: EorzeaPeriod[] = [];
    let tmp: EorzeaDate;
    do {
      periods.push(
        new EorzeaPeriod(
          basePeriod.start < spawnPeriod.start
            ? spawnPeriod.start.toDate()
            : basePeriod.start.toDate(),
          basePeriod.end < spawnPeriod.end
            ? basePeriod.end.toDate()
            : basePeriod.start > spawnPeriod.end
            ? basePeriod.start.toDate()
            : spawnPeriod.end.toDate()
        )
      );
      tmp = basePeriod.end.clone();
      basePeriod = basePeriod.nextGarlokPeriod;
    } while (tmp.epoch < spawnPeriod.end.epoch);
    return periods;
  }

  getLaideronnettePeriods(spawnPeriod: EorzeaPeriod): EorzeaPeriod[] {
    class LaideronnettePeriod extends EorzeaPeriod {
      constructor(date: Date) {
        let periodNext = new WeatherPeriod(date, TWeatherRate.SouthShroud);
        while (!WeatherProvider.isRainy(periodNext.weather.id)) {
          periodNext = periodNext.next;
        }
        while (WeatherProvider.isRainy(periodNext.weather.id)) {
          periodNext = periodNext.next;
        }
        let periodPrevious = periodNext.prev.prev;
        let count = 1;
        while (WeatherProvider.isRainy(periodPrevious.weather.id)) {
          count += 1;
          periodPrevious = periodPrevious.prev;
        }
        if (count >= 2) {
          const start = periodPrevious.next.start.toDate();
          // Add 30 minutes
          start.setTime(start.getTime() + 30 * 60 * 1000);
          super(
            start,
            periodNext.start
              .subtract(1, TEorzeaDateCategory.MILLISECONDS)
              .toDate()
          );
        } else {
          const anotherPeriod = new LaideronnettePeriod(
            periodNext.start.toDate()
          );
          super(anotherPeriod.start.toDate(), anotherPeriod.end.toDate());
        }
      }
      get nextLaideronnettePeriod(): LaideronnettePeriod {
        const next = this.end.clone().add(1, TEorzeaDateCategory.MILLISECONDS);
        return new LaideronnettePeriod(next.toDate());
      }
    }

    let basePeriod = new LaideronnettePeriod(spawnPeriod.start.toDate());
    const periods: EorzeaPeriod[] = [];
    let tmp: EorzeaDate;
    do {
      periods.push(
        new EorzeaPeriod(
          basePeriod.start < spawnPeriod.start
            ? spawnPeriod.start.toDate()
            : basePeriod.start.toDate(),
          basePeriod.end < spawnPeriod.end
            ? basePeriod.end.toDate()
            : basePeriod.start > spawnPeriod.end
            ? basePeriod.start.toDate()
            : spawnPeriod.end.toDate()
        )
      );
      tmp = basePeriod.end.clone();
      basePeriod = basePeriod.nextLaideronnettePeriod;
    } while (tmp.epoch < spawnPeriod.end.epoch);
    return periods;
  }

  getBurfurlurPeriods(spawnPeriod: EorzeaPeriod): EorzeaPeriod[] {
    let baseDate = spawnPeriod.start;
    const periods: EorzeaPeriod[] = [];
    do {
      const base: EorzeaDate = Object.assign(baseDate.clone(), {
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      if (base.hour < 9) {
        base.hour = 9;
      } else if (17 <= base.hour) {
        base.add(1, TEorzeaDateCategory.DAYS);
        base.hour = 9;
      }
      let wp = new WeatherPeriod(base.toDate(), TWeatherRate.Labyrinthos);
      let start = base.clone();
      while (!WeatherProvider.isSunny(wp.weather.id)) {
        if (wp.start.hour === 16) {
          wp = wp.next.next; // 翌日のET0800
          start = Object.assign(wp.start.clone(), { hour: 9 });
        } else {
          // wp.start.hour === 8
          wp = wp.next; // 同日のET1600
          start = wp.start.clone();
        }
      }

      // この時点でwpとstartが確定している
      // 次にendを計算する。endは必ず同日のET15:59 or ET16:59になる
      let end = wp.end.clone();
      if (wp.start.hour === 16) {
        end.subtract(7, TEorzeaDateCategory.HOURS); // 23:59 - 7 hours = 16:59
      } else if (
        wp.start.hour === 8 &&
        WeatherProvider.isSunny(wp.next.weather.id)
      ) {
        end.add(1, TEorzeaDateCategory.HOURS); // 15:59 + 1 hours = 16:59
      }
      const period = new EorzeaPeriod(
        start < spawnPeriod.start ? spawnPeriod.start.toDate() : start.toDate(),
        end < spawnPeriod.end
          ? end.toDate()
          : start > spawnPeriod.end
          ? start.toDate()
          : spawnPeriod.end.toDate()
      );
      periods.push(period);
      baseDate = end.clone();
      baseDate.add(1, TEorzeaDateCategory.MILLISECONDS);
    } while (baseDate < spawnPeriod.end);
    return periods;
  }
}

const eorzeaDateProvider = new EorzeaDateProvider();
export { eorzeaDateProvider as EorzeaDateProvider };
