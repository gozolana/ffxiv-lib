import { EorzeaDate, TEorzeaDateCategory } from "../entities/eorzeaDate";
import { EorzeaPeriod, WeatherPeriod } from "../entities/eorzeaPeriod";
import { Mob } from "../entities/mob";
import { SpawnPeriod } from "../entities/spawnPeriod";
import { WeatherProvider } from "./weatherProvider";

const TWeatherRate = {
  SouthShroud: 3,
  WesternThanalan: 9,
  EasternLaNoscea: 18,
  Labyrinthos: 131,
} as const;
type TWeatherRate = (typeof TWeatherRate)[keyof typeof TWeatherRate];
/*
class ZonaSeekerPeriod extends EorzeaPeriod {
  constructor(timeStamp: number) {
    let periodNext = new WeatherPeriod(timeStamp, TWeatherRate.WesternThanalan);
    //晴れ→晴れ以外の変曲点を算出
    while (!WeatherProvider.isSunny(periodNext.weather.id)) {
      periodNext = periodNext.next;
    }
    //晴れ以外→晴れの変曲点を算出
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
      periodPrevious.next.start.epoch,
      periodNext.start.subtract(1, TEorzeaDateCategory.MILLISECONDS).epoch
    );
  }
  get nextZonaSeekerPeriod(): ZonaSeekerPeriod {
    const next = this.end.clone().add(1, TEorzeaDateCategory.MILLISECONDS);
    return new ZonaSeekerPeriod(next.epoch);
  }
}
*/
// timeStampを含む or timeStampの次に来るケロゲロス期間(x月16日17:00～x月20日04:59.999)を返す。
const getCroakadilePeriod = (timeStamp: number): EorzeaPeriod => {
  const baseEODate: EorzeaDate = Object.assign(new EorzeaDate(timeStamp), {
    minute: 0,
    second: 0,
    millisecond: 0,
  });
  if (baseEODate.day >= 20 || (baseEODate.day == 19 && baseEODate.hour >= 5)) {
    baseEODate.add(1, TEorzeaDateCategory.MONTHS);
  }
  return new EorzeaPeriod(
    Object.assign(baseEODate.clone(), { day: 15, hour: 17 }).epoch,
    Object.assign(baseEODate.clone(), { day: 19, hour: 5 }).subtract(
      1,
      TEorzeaDateCategory.MILLISECONDS
    ).epoch
  );
};

// timeStampを含む or timeStampの次に来るマインドフレア期間(x月01日00:00～x月04日04:59.999)を返す。
const getMindflayerPeriod = (timeStamp: number): EorzeaPeriod => {
  const baseEODate: EorzeaDate = Object.assign(new EorzeaDate(timeStamp), {
    minute: 0,
    second: 0,
    millisecond: 0,
  });
  if (baseEODate.day >= 4 || (baseEODate.day == 3 && baseEODate.hour >= 5)) {
    baseEODate.add(1, TEorzeaDateCategory.MONTHS);
  }
  return new EorzeaPeriod(
    Object.assign(baseEODate.clone(), { day: 0, hour: 0 }).epoch,
    Object.assign(baseEODate.clone(), { day: 3, hour: 5 }).subtract(
      1,
      TEorzeaDateCategory.MILLISECONDS
    ).epoch
  );
};

const getBurfurlurPeriods = (spawnPeriod: EorzeaPeriod): EorzeaPeriod[] => {
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
    let wp = new WeatherPeriod(base.epoch, TWeatherRate.Labyrinthos);
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
    const end = wp.end.clone();
    if (wp.start.hour === 16) {
      end.subtract(7, TEorzeaDateCategory.HOURS); // 23:59 - 7 hours = 16:59
    } else if (
      wp.start.hour === 8 &&
      WeatherProvider.isSunny(wp.next.weather.id)
    ) {
      end.add(1, TEorzeaDateCategory.HOURS); // 15:59 + 1 hours = 16:59
    }
    const period = new EorzeaPeriod(
      Math.max(start.epoch, spawnPeriod.start.epoch),
      Math.min(end.epoch, Math.max(start.epoch, spawnPeriod.end.epoch))
    );
    periods.push(period);
    baseDate = end.clone();
    baseDate.add(1, TEorzeaDateCategory.MILLISECONDS);
  } while (baseDate.epoch < spawnPeriod.end.epoch);
  return periods;
};

// spawnDateを含む or spawnDateの次に来るオキナ期間(x月16日12:00～x月20日11:59.999)を返す。
const getOkinaPeriods = (spawnPeriod: EorzeaPeriod): EorzeaPeriod[] => {
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

    const period = new EorzeaPeriod(
      Math.max(start.epoch, spawnPeriod.start.epoch),
      Math.min(end.epoch, Math.max(start.epoch, spawnPeriod.end.epoch))
    );
    if (period.start.epoch <= period.end.epoch) {
      periods.push(period);
    }
    /*
    periods.push(
      new EorzeaPeriod(
        Math.max(start.epoch, spawnPeriod.start.epoch),
        Math.min(end.epoch, Math.max(start.epoch, spawnPeriod.end.epoch))
      )
    );
    */
    baseDate = end.clone();
    baseDate.add(1, TEorzeaDateCategory.MILLISECONDS);
  } while (baseDate.epoch < spawnPeriod.end.epoch);
  return periods;
};

const getGarlokPeriods = (spawnPeriod: EorzeaPeriod): EorzeaPeriod[] => {
  class GarlokPeriod extends EorzeaPeriod {
    constructor(timeStamp: number) {
      let periodNext = new WeatherPeriod(
        timeStamp,
        TWeatherRate.EasternLaNoscea
      );
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
          periodPrevious.next.start.epoch + 200 * 60 * 1000,
          periodNext.start.subtract(1, TEorzeaDateCategory.MILLISECONDS).epoch
        );
      } else {
        const anotherPeriod = new GarlokPeriod(periodNext.start.epoch);
        super(anotherPeriod.start.epoch, anotherPeriod.end.epoch);
      }
    }
    get nextGarlokPeriod(): GarlokPeriod {
      const next = this.end.clone().add(1, TEorzeaDateCategory.MILLISECONDS);
      return new GarlokPeriod(next.epoch);
    }
  }

  let basePeriod = new GarlokPeriod(spawnPeriod.start.epoch);
  const periods: EorzeaPeriod[] = [];
  let tmp: EorzeaDate;
  do {
    periods.push(
      new EorzeaPeriod(
        Math.max(basePeriod.start.epoch, spawnPeriod.start.epoch),
        Math.min(
          basePeriod.end.epoch,
          Math.max(basePeriod.start.epoch, spawnPeriod.end.epoch)
        )
      )
    );
    tmp = basePeriod.end.clone();
    basePeriod = basePeriod.nextGarlokPeriod;
  } while (tmp.epoch < spawnPeriod.end.epoch);
  return periods;
};

const getLaideronnettePeriods = (spawnPeriod: EorzeaPeriod): EorzeaPeriod[] => {
  class LaideronnettePeriod extends EorzeaPeriod {
    constructor(timeStamp: number) {
      let periodNext = new WeatherPeriod(timeStamp, TWeatherRate.SouthShroud);
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
        // Add 30 minutes
        super(
          periodPrevious.next.start.epoch + 30 * 60 * 1000,
          periodNext.start.subtract(1, TEorzeaDateCategory.MILLISECONDS).epoch
        );
      } else {
        const anotherPeriod = new LaideronnettePeriod(periodNext.start.epoch);
        super(anotherPeriod.start.epoch, anotherPeriod.end.epoch);
      }
    }
    get nextLaideronnettePeriod(): LaideronnettePeriod {
      const next = this.end.clone().add(1, TEorzeaDateCategory.MILLISECONDS);
      return new LaideronnettePeriod(next.epoch);
    }
  }

  let basePeriod = new LaideronnettePeriod(spawnPeriod.start.epoch);
  const periods: EorzeaPeriod[] = [];
  let tmp: EorzeaDate;
  do {
    periods.push(
      new EorzeaPeriod(
        Math.max(basePeriod.start.epoch, spawnPeriod.start.epoch),
        Math.min(
          basePeriod.end.epoch,
          Math.max(basePeriod.start.epoch, spawnPeriod.end.epoch)
        )
      )
    );
    tmp = basePeriod.end.clone();
    basePeriod = basePeriod.nextLaideronnettePeriod;
  } while (tmp.epoch < spawnPeriod.end.epoch);
  return periods;
};

class SpawnPeriodProvider {
  getSpawnInfo(
    mob: Mob,
    baseTimeStamp: number,
    isServerReset: boolean
  ): SpawnPeriod {
    const offsetStartMinutes = mob.respawnMinutes?.min
      ? mob.respawnMinutes.min
      : 0;
    const offsetEndMinutes = mob.respawnMinutes?.max
      ? mob.respawnMinutes.max
      : 0;
    const startTimeStamp =
      baseTimeStamp +
      offsetStartMinutes * 60 * 1000 * (isServerReset ? 0.6 : 1);
    const endTimeStamp =
      baseTimeStamp + offsetEndMinutes * 60 * 1000 * (isServerReset ? 0.6 : 1);
    let spawnWindows: EorzeaPeriod[] = [];

    if ([2963, 2955].includes(mob.id)) {
      // Croakadile, Mindflayer
      const period =
        mob.id == 2963
          ? getCroakadilePeriod(startTimeStamp)
          : getMindflayerPeriod(startTimeStamp);
      spawnWindows.push(
        new EorzeaPeriod(
          period.start.epoch,
          Math.max(period.start.epoch, startTimeStamp)
        )
      );
    } else if ([10617, 5984, 2964, 2953].includes(mob.id)) {
      // Burfurlur, Okina, Garlok, Laidoronnette
      const spawnPeriod = new EorzeaPeriod(startTimeStamp, endTimeStamp);
      spawnWindows =
        mob.id == 10617
          ? getBurfurlurPeriods(spawnPeriod)
          : mob.id == 5984
            ? getOkinaPeriods(spawnPeriod)
            : mob.id == 2964
              ? getGarlokPeriods(spawnPeriod)
              : getLaideronnettePeriods(spawnPeriod);
      /*      if (
        periods.length == 1 ||
        periods[periods.length - 2].end.toDate() < now
      ) {
        const lastRange = periods[periods.length - 1];
        if (this.respawnEnd <= lastRange.start.toDate()) {
          // Fixed spawn
          this.respawnStart = lastRange.start.toDate();
          this.respawnEnd = lastRange.start.toDate();
        } else if (this.respawnEnd <= now) {
          // Fixed spawn
          this.respawnStart = this.respawnEnd;
          //this.respawnEnd = this.respawnEnd;
        }
      }*/
    }
    return new SpawnPeriod(startTimeStamp, endTimeStamp, spawnWindows);
  }
}

const spawnPeriodProvider = new SpawnPeriodProvider();
export { spawnPeriodProvider as SpawnPeriodProvider };
