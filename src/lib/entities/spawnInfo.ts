import dayjs from 'dayjs';
import { EorzeaDate } from './eorzeaDate';
import { EorzeaPeriod } from './eorzeaPeriod';

export interface SpawnInfoDetails {
  fixedSpawn: EorzeaDate | undefined;
  periods: {
    isActive: boolean;
    formattedText: string;
  }[];
}

export class SpawnInfo {
  readonly period: EorzeaPeriod;
  readonly spawnWindows: EorzeaPeriod[];

  constructor(
    startTimeStamp: number,
    endTimeStamp: number,
    spawnWindows: EorzeaPeriod[]
  ) {
    this.period = new EorzeaPeriod(startTimeStamp, endTimeStamp);
    this.spawnWindows = spawnWindows;
  }

  getDetails(currentTimeStamp = Date.now()): SpawnInfoDetails {
    const periods = this.spawnWindows
      .filter(
        (w) => w.start.epoch == w.end.epoch || currentTimeStamp < w.end.epoch
      )
      .map((w) => {
        const isLast = w.start.epoch == w.end.epoch;
        const isActive = isLast
          ? w.end.epoch < currentTimeStamp
          : w.start.epoch < currentTimeStamp && currentTimeStamp < w.end.epoch;
        const startChance = this.period.chanceAt(w.start).toFixed(1);
        const endChance = this.period.chanceAt(w.end).toFixed(1);
        const formattedText = isLast
          ? `${dayjs(w.end.epoch).format('MM/DD(ddd) HH:mm')}(${startChance}%)`
          : `${dayjs(w.start.epoch).format(
              'MM/DD(ddd) HH:mm'
            )}(${startChance}%) - ${dayjs(w.end.epoch).format(
              'HH:mm'
            )}(${endChance}%)`;
        return {
          isActive,
          formattedText,
        };
      });
    const zeroRangePeriods = this.spawnWindows.filter(
      (w) => w.start.epoch == w.end.epoch
    );
    const fixedSpawn =
      zeroRangePeriods.length == 1 ? zeroRangePeriods[0].end : undefined;
    return {
      fixedSpawn,
      periods,
    };
  }
}
