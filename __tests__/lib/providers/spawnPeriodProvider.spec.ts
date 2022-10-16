import { MobProvider } from '../../../src/lib/providers/mobProvider';
import { SpawnPeriodProvider } from '../../../src/lib/providers/spawnPeriodProvider';
import dayjs from 'dayjs';

describe('SpawnInfo', () => {
  test('garlok', () => {
    /*2953: "レドロネット",
      2955: "マインドフレア",
      2957: "ゾーナ・シーカー",
      2963: "ケロゲロス",
      2964: "ガーロック",
      10617: "ブーフールー",
      5984: "オキナ",
      */
    const mob = MobProvider.findMob(5984)!;
    const period = SpawnPeriodProvider.getSpawnInfo(
      mob,
      //new Date('2022-10-12T14:16:00+09:00').getTime(),
      new Date('2022-10-14T04:12:00+09:00').getTime(),
      false
    );
    console.log(
      `${dayjs(period.start.epoch).format('MM/DDddd HH:mm')} - ${dayjs(
        period.end.epoch
      ).format('MM/DDddd HH:mm')}`
    );
    period.subPeriods.forEach((p) => {
      console.log(
        `${p.start.toDate()}(${p.start.toString()}) - ${p.end.toDate()}(${p.end.toString()})`
      );
    });
  });
});
