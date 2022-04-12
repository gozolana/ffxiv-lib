import { generateWorlds } from "./resourcesBuilder/generateWorlds";
import { generateZones } from "./resourcesBuilder/generateZones";
import { generateIcons } from "./resourcesBuilder/generateIcons";
import { MessageIds } from "./resourcesBuilder/messageIds";
import { generateMessages } from "./resourcesBuilder/generateMessages";
import { generateMobs } from "./resourcesBuilder/generateMobs";

const messageIds: MessageIds = {
  bNpcNameIdSet: new Set<number>(),
  placeNameIdSet: new Set<number>(),
  weatherIdSet: new Set<number>(),
};

async function main() {
  await generateWorlds();
  await generateIcons();
  await generateMobs(messageIds);
  await generateZones(messageIds);
  await generateMessages(messageIds);
}
main();
