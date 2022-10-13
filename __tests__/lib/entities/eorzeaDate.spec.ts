import {
  TEorzeaDateCategory,
  EorzeaDate,
} from '../../../src/lib/entities/eorzeaDate';

function createEpoch(
  year = 0,
  month = 0,
  day = 0,
  hour = 0,
  minute = 0,
  second = 0
): number {
  const M = 12 * year + month;
  const D = 32 * M + day;
  const h = 24 * D + hour;
  const m = 60 * h + minute;
  const s = 60 * m + second;
  const ms = 1000 * s + 999;
  return (ms * 7) / 144;
}

describe('EorzeaDate', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('constructor', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(134399999));
    const date = new EorzeaDate();
    expect(date.epoch).toBe(134400000);
    expect(date.year).toBe(0);
    expect(date.month).toBe(0);
    expect(date.day).toBe(31);
    expect(date.hour).toBe(23);
    expect(date.minute).toBe(59);
    expect(date.second).toBe(59);
    expect(date.millisecond).toBe(979);
  });

  test.each`
    input         | epoch         | year | month | day   | hour  | minute | second | millisecond
    ${0}          | ${0}          | ${0} | ${0}  | ${0}  | ${0}  | ${0}   | ${0}   | ${0}
    ${10}         | ${0}          | ${0} | ${0}  | ${0}  | ${0}  | ${0}   | ${0}   | ${205}
    ${48}         | ${0}          | ${0} | ${0}  | ${0}  | ${0}  | ${0}   | ${0}   | ${987}
    ${49}         | ${0}          | ${0} | ${0}  | ${0}  | ${0}  | ${0}   | ${1}   | ${8}
    ${500}        | ${0}          | ${0} | ${0}  | ${0}  | ${0}  | ${0}   | ${10}  | ${285}
    ${501}        | ${1000}       | ${0} | ${0}  | ${0}  | ${0}  | ${0}   | ${10}  | ${306}
    ${2917}       | ${3000}       | ${0} | ${0}  | ${0}  | ${0}  | ${1}   | ${0}   | ${6}
    ${174999}     | ${175000}     | ${0} | ${0}  | ${0}  | ${0}  | ${59}  | ${59}  | ${979}
    ${175000}     | ${175000}     | ${0} | ${0}  | ${0}  | ${1}  | ${0}   | ${0}   | ${0}
    ${4199999}    | ${4200000}    | ${0} | ${0}  | ${0}  | ${23} | ${59}  | ${59}  | ${979}
    ${4200000}    | ${4200000}    | ${0} | ${0}  | ${1}  | ${0}  | ${0}   | ${0}   | ${0}
    ${134399999}  | ${134400000}  | ${0} | ${0}  | ${31} | ${23} | ${59}  | ${59}  | ${979}
    ${134400000}  | ${134400000}  | ${0} | ${1}  | ${0}  | ${0}  | ${0}   | ${0}   | ${0}
    ${1612799999} | ${1612800000} | ${0} | ${11} | ${31} | ${23} | ${59}  | ${59}  | ${979}
    ${1612800000} | ${1612800000} | ${1} | ${0}  | ${0}  | ${0}  | ${0}   | ${0}   | ${0}
  `(
    'constructor "$input" -> "$epoch"',
    ({ input, epoch, year, month, day, hour, minute, second, millisecond }) => {
      const date = new EorzeaDate(input);
      expect(date.epoch).toBe(epoch);
      expect(date.year).toBe(year);
      expect(date.month).toBe(month);
      expect(date.day).toBe(day);
      expect(date.hour).toBe(hour);
      expect(date.minute).toBe(minute);
      expect(date.second).toBe(second);
      expect(date.millisecond).toBe(millisecond);
      expect(date.toDate().getTime()).toBe(epoch);
      const date2 = date.clone();
      expect(date2).toEqual(date);
      expect(date2).not.toBe(date);
    }
  );

  test.each`
    year    | month | day   | hour  | minute | second | dateStr    | timeStr
    ${0}    | ${0}  | ${0}  | ${0}  | ${0}   | ${0}   | ${'01/01'} | ${'00:00'}
    ${1999} | ${11} | ${31} | ${23} | ${59}  | ${59}  | ${'12/32'} | ${'23:59'}
    ${500}  | ${6}  | ${4}  | ${12} | ${9}   | ${20}  | ${'07/05'} | ${'12:09'}
    ${1}    | ${1}  | ${1}  | ${5}  | ${31}  | ${0}   | ${'02/02'} | ${'05:31'}
  `(
    'string "$dateStr" "$timeStr"',
    ({ year, month, day, hour, minute, second, dateStr, timeStr }) => {
      const epoch = createEpoch(year, month, day, hour, minute, second);
      const date = new EorzeaDate(epoch);
      expect(date.year).toBe(year);
      expect(date.month).toBe(month);
      expect(date.day).toBe(day);
      expect(date.hour).toBe(hour);
      expect(date.minute).toBe(minute);
      expect(date.second).toBe(second);
      expect(date.toTimeString()).toBe(timeStr);
      expect(date.toDateString()).toBe(`${dateStr} ${timeStr}`);
      expect(date.toString()).toMatch(
        /^\d+\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}.\d{3}$/
      );
      // https://youtrack.jetbrains.com/issue/WEB-42350/matcher-for-jest-is-not-recognized-but-it-is-runable
      expect(date.toJSON()).toEqual({
        et: expect.anything(),
        lt: expect.anything(),
      });
      expect(date.toJSON().et).toMatch(
        /^\d+\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}.\d{3}$/
      );
    }
  );

  test.each`
    category                            | value   | year | month | day  | hour | minute | second | millisecond
    ${TEorzeaDateCategory.YEARS}        | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.YEARS}        | ${1}    | ${1} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MONTHS}       | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MONTHS}       | ${1}    | ${0} | ${1}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MONTHS}       | ${12}   | ${1} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.DAYS}         | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.DAYS}         | ${1}    | ${0} | ${0}  | ${1} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.DAYS}         | ${32}   | ${0} | ${1}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.HOURS}        | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.HOURS}        | ${1}    | ${0} | ${0}  | ${0} | ${1} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.HOURS}        | ${24}   | ${0} | ${0}  | ${1} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MINUTES}      | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MINUTES}      | ${1}    | ${0} | ${0}  | ${0} | ${0} | ${1}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MINUTES}      | ${60}   | ${0} | ${0}  | ${0} | ${1} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.SECONDS}      | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.SECONDS}      | ${1}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${1}   | ${0}
    ${TEorzeaDateCategory.SECONDS}      | ${60}   | ${0} | ${0}  | ${0} | ${0} | ${1}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MILLISECONDS} | ${0}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${0}
    ${TEorzeaDateCategory.MILLISECONDS} | ${1}    | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${0}   | ${1}
    ${TEorzeaDateCategory.MILLISECONDS} | ${1000} | ${0} | ${0}  | ${0} | ${0} | ${0}   | ${1}   | ${0}
  `(
    'add "$category" "$value"',
    ({
      category,
      value,
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond,
    }) => {
      const date = new EorzeaDate(0);
      date.add(value, category);
      expect(date.year).toBe(year);
      expect(date.month).toBe(month);
      expect(date.day).toBe(day);
      expect(date.hour).toBe(hour);
      expect(date.minute).toBe(minute);
      expect(date.second).toBe(second);
      expect(date.millisecond).toBe(millisecond);
    }
  );

  test.each`
    category                            | value
    ${TEorzeaDateCategory.YEARS}        | ${0}
    ${TEorzeaDateCategory.YEARS}        | ${1}
    ${TEorzeaDateCategory.MONTHS}       | ${0}
    ${TEorzeaDateCategory.MONTHS}       | ${1}
    ${TEorzeaDateCategory.MONTHS}       | ${12}
    ${TEorzeaDateCategory.DAYS}         | ${0}
    ${TEorzeaDateCategory.DAYS}         | ${1}
    ${TEorzeaDateCategory.DAYS}         | ${32}
    ${TEorzeaDateCategory.HOURS}        | ${0}
    ${TEorzeaDateCategory.HOURS}        | ${1}
    ${TEorzeaDateCategory.HOURS}        | ${24}
    ${TEorzeaDateCategory.MINUTES}      | ${0}
    ${TEorzeaDateCategory.MINUTES}      | ${1}
    ${TEorzeaDateCategory.MINUTES}      | ${60}
    ${TEorzeaDateCategory.SECONDS}      | ${0}
    ${TEorzeaDateCategory.SECONDS}      | ${1}
    ${TEorzeaDateCategory.SECONDS}      | ${60}
    ${TEorzeaDateCategory.MILLISECONDS} | ${0}
    ${TEorzeaDateCategory.MILLISECONDS} | ${1}
    ${TEorzeaDateCategory.MILLISECONDS} | ${1000}
  `('subtract "$category" "$value"', ({ category, value }) => {
    const date = new EorzeaDate(0);
    const addSpy = jest.spyOn(date, 'add');
    date.subtract(value, category);
    expect(addSpy).toHaveBeenCalledWith(-value, category);
  });
});
