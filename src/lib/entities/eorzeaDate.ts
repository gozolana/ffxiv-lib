import dayjs from "dayjs";

const TEorzeaDateCategory = {
  YEARS: 1,
  MONTHS: 2,
  DAYS: 3,
  HOURS: 4,
  MINUTES: 5,
  SECONDS: 6,
  MILLISECONDS: 7,
} as const;
type TEorzeaDateCategory = typeof TEorzeaDateCategory[keyof typeof TEorzeaDateCategory];

class EorzeaDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;

  constructor(date = new Date()) {
    const time = date ? Math.floor((date.getTime() * 144) / 7) : 0;
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
    return new EorzeaDate(this.toDate());
  }

  get epoch(): number {
    const M = this.month + this.year * 12;
    const D = this.day + M * 32;
    const h = this.hour + D * 24;
    const m = this.minute + h * 60;
    const s = this.second + m * 60;
    const ms = this.millisecond + s * 1000;
    return Math.round((ms * 70) / 1000 / 1440) * 1000;
  }

  toString(): string {
    const Y = String(this.year);
    const M = ("00" + (this.month + 1)).slice(-2);
    const D = ("00" + (this.day + 1)).slice(-2);
    const h = ("00" + this.hour).slice(-2);
    const m = ("00" + this.minute).slice(-2);
    const s = ("00" + this.second).slice(-2);
    const ms = ("000" + this.millisecond).slice(-3);
    return `${Y}/${M}/${D} ${h}:${m}:${s}.${ms}`;
  }

  toJSON(): { et: string; lt: string } {
    return {
      et: this.toString(),
      lt: dayjs(this.epoch).format("YYYY/MM/DD HH:mm:ss"),
    };
  }

  toDateString(): string {
    const M = ("00" + (this.month + 1)).slice(-2);
    const D = ("00" + (this.day + 1)).slice(-2);
    const h = ("00" + this.hour).slice(-2);
    const m = ("00" + this.minute).slice(-2);
    return `${M}/${D} ${h}:${m}`;
  }

  toTimeString(): string {
    const h = ("00" + this.hour).slice(-2);
    const m = ("00" + this.minute).slice(-2);
    return `${h}:${m}`;
  }

  toDate(): Date {
    return new Date(this.epoch);
  }

  add(value: number, cat: TEorzeaDateCategory): EorzeaDate {
    let Y = this.year + (cat === TEorzeaDateCategory.YEARS ? value : 0);
    let M = this.month + Y * 12 + (cat === TEorzeaDateCategory.MONTHS ? value : 0);
    let D = this.day + M * 32 + (cat === TEorzeaDateCategory.DAYS ? value : 0);
    let h = this.hour + D * 24 + (cat === TEorzeaDateCategory.HOURS ? value : 0);
    let m = this.minute + h * 60 + (cat === TEorzeaDateCategory.MINUTES ? value : 0);
    let s = this.second + m * 60 + (cat === TEorzeaDateCategory.SECONDS ? value : 0);
    const time =
      this.millisecond +
      s * 1000 +
      (cat === TEorzeaDateCategory.MILLISECONDS ? value : 0);
    this.millisecond = time % 1000;
    s = Math.floor(time / 1000);
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
