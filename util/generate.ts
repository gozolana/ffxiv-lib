import { generateWorlds } from "./resourcesBuilder/generateWorlds";
import { generateZones } from "./resourcesBuilder/generateZones";
import { generateIcons } from "./resourcesBuilder/generateIcons";
import { MessageIdSet } from "./resourcesBuilder/types";
import { generateMessages } from "./resourcesBuilder/generateMessages";

const basePath = "./ThirdParty/SaintCoinach.Cmd/2022.03.01.0000.0000";

const messageIdSet: MessageIdSet = {
  bNpcNameIdSet: new Set<number>(),
  placeNameIdSet: new Set<number>(),
  weatherIdSet: new Set<number>(),
};

async function main() {
  await generateWorlds(basePath);
  await generateIcons(basePath);
  await generateZones(basePath, messageIdSet);
  await generateMessages(basePath, messageIdSet);
}
main();
