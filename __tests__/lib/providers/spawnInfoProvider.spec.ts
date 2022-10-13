import { MobProvider } from '../../../src/lib/providers/mobProvider';
import { SpawnInfoProvider } from '../../../src/lib/providers/spawnInfoProvider';
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
    const mob = MobProvider.findMob(2964)!;
    const si = SpawnInfoProvider.getSpawnInfo(
      mob,
      new Date('2022-10-12T10:21:00+09:00').getTime(),
      false
    );
    console.log(
      `${dayjs(si.period.start.epoch).format('MM/DDddd HH:mm')} - ${dayjs(
        si.period.end.epoch
      ).format('MM/DDddd HH:mm')}`
    );
    const details = si.getDetails(
      new Date('2022-10-14T11:22:00+09:00').getTime()
    );
    console.log('Fixed Spawn', details.fixedSpawn?.toDate());
    details.periods.forEach((fw) => {
      console.log(`${fw.isActive}: ${fw.formattedText}`);
    });
  });
});
