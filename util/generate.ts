import { generateWorlds } from './resourcesBuilder/generateWorlds';
import { generateZones } from './resourcesBuilder/generateZones';
import { generateIcons } from './resourcesBuilder/generateIcons';
import { MessageIds } from './resourcesBuilder/messageIds';
import { generateMessages } from './resourcesBuilder/generateMessages';
import { generateMobs } from './resourcesBuilder/generateMobs';
import * as SaintCoinach from './resourcesBuilder/saintCoinach';

const messageIds: MessageIds = {
  bNpcNameIdSet: new Set<number>(),
  placeNameIdSet: new Set<number>(),
  placeNameIdToZoneId: new Map<number, number>(),
  weatherIdSet: new Set<number>(),
};

async function main() {
  console.log('cleanUp SaintCoinach');
  SaintCoinach.cleanUp();
  console.log('install SaintCoinach');
  await SaintCoinach.install();
  console.log('get latest data from Game');
  await SaintCoinach.update();
  console.log('update Worlds data');
  await generateWorlds();
  console.log('update Icons data');
  await generateIcons();
  console.log('update Mobs data');
  await generateMobs(messageIds);
  console.log('update Zones data');
  await generateZones(messageIds);
  console.log('update Messages data');
  await generateMessages(messageIds);
  console.log('done.');
}
main();
