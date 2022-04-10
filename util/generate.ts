import { generateWorlds } from "./resourcesBuilder/generateWorlds";
import { generateZones } from "./resourcesBuilder/generateZones";
import { generateIcons } from "./resourcesBuilder/generateIcons";
import { MessageIdSet } from "./resourcesBuilder/types";
import { generateMessages } from "./resourcesBuilder/generateMessages";
import { generateMobs } from "./resourcesBuilder/generateMobs";

const messageIdSet: MessageIdSet = {
  bNpcNameIdSet: new Set<number>(),
  placeNameIdSet: new Set<number>(),
  weatherIdSet: new Set<number>(),
};

async function main() {
  await generateWorlds();
  await generateIcons();
  await generateMobs(messageIdSet);
  await generateZones(messageIdSet);
  await generateMessages(messageIdSet);
}
main();
