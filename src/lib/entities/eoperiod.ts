import { EorzeaDate } from "./eodate";

class EorzeaPeriod {
  start: EorzeaDate;
  end: EorzeaDate;

  constructor(start: Date, end: Date) {
    this.start = new EorzeaDate(start);
    this.end = new EorzeaDate(end);
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

export { EorzeaPeriod };
