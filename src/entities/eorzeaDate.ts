const TEorzeaDateCategory = {
  YEARS: 1,
  MONTHS: 2,
  DAYS: 3,
  HOURS: 4,
  MINUTES: 5,
  SECONDS: 6,
  MILLISECONDS: 7,
} as const;
type TEorzeaDateCategory =
  typeof TEorzeaDateCategory[keyof typeof TEorzeaDateCategory];

class EorzeaDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;

  constructor(timeStamp = Date.now()) {
    const time = Math.floor((timeStamp * 144) / 7);
    this.millisecond = time % 1000;
    const s = Math.floor(time / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const D = Math.floor(h / 24);
    const M = Math.floor(D / 32);
    const Y = Math.floor(M / 12);
    this.second = s % 60;
    this.minute = m % 60;
    this.hour = h % 24;
    this.day = D % 32;
    this.month = M % 12;
    this.year = Y;
  }

  clone(): EorzeaDate {
    const date = new EorzeaDate();
    date.year = this.year;
    date.month = this.month;
    date.day = this.day;
    date.hour = this.hour;
    date.minute = this.minute;
    date.second = this.second;
    date.millisecond = this.millisecond;
    return date;
  }

  get epoch(): number {
    const M = 12 * this.year + this.month;
    const D = 32 * M + this.day;
    const h = 24 * D + this.hour;
    const m = 60 * h + this.minute;
    const s = 60 * m + this.second;
    const ms = 1000 * s + this.millisecond;
    return Math.round((ms * 70) / 1000 / 1440) * 1000;
  }

  toTimeString(): string {
    const hh = this.hour.toString().padStart(2, '0');
    const mm = this.minute.toString().padStart(2, '0');
    return `${hh}:${mm}`;
  }

  toDateString(): string {
    const MM = (this.month + 1).toString().padStart(2, '0');
    const DD = (this.day + 1).toString().padStart(2, '0');
    return `${MM}/${DD} ${this.toTimeString()}`;
  }

  toString(): string {
    const Y = this.year.toString();
    const ss = this.second.toString().padStart(2, '0');
    const ms = this.millisecond.toString().padStart(3, '0');
    return `${Y}/${this.toDateString()}:${ss}.${ms}`;
  }

  toJSON(): { et: string; lt: string } {
    return {
      et: this.toString(),
      lt: this.toDate().toISOString(),
    };
  }

  toDate(): Date {
    return new Date(this.epoch);
  }

  add(value: number, cat: TEorzeaDateCategory): EorzeaDate {
    let Y = this.year + (cat === TEorzeaDateCategory.YEARS ? value : 0);
    let M =
      12 * Y + this.month + (cat === TEorzeaDateCategory.MONTHS ? value : 0);
    let D = 32 * M + this.day + (cat === TEorzeaDateCategory.DAYS ? value : 0);
    let h =
      24 * D + this.hour + (cat === TEorzeaDateCategory.HOURS ? value : 0);
    let m =
      60 * h + this.minute + (cat === TEorzeaDateCategory.MINUTES ? value : 0);
    let s =
      60 * m + this.second + (cat === TEorzeaDateCategory.SECONDS ? value : 0);
    const ms =
      1000 * s +
      this.millisecond +
      (cat === TEorzeaDateCategory.MILLISECONDS ? value : 0);
    this.millisecond = ms % 1000;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    h = Math.floor(m / 60);
    D = Math.floor(h / 24);
    M = Math.floor(D / 32);
    Y = Math.floor(M / 12);
    this.second = s % 60;
    this.minute = m % 60;
    this.hour = h % 24;
    this.day = D % 32;
    this.month = M % 12;
    this.year = Y;
    return this;
  }

  subtract(value: number, cat: TEorzeaDateCategory): EorzeaDate {
    return this.add(-value, cat);
  }
}

export { TEorzeaDateCategory, EorzeaDate };
