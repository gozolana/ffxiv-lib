import { writeFileSync } from "fs";
import { MessageIds } from "./messageIds.ts";
import {
  retrieveBNpcNameMessages,
  retrieveExVersionMessages,
  retrievePlaceNameMessages,
  retrieveWeatherMessages,
} from "./parseCsvs.ts";
import { regionsJson, ttsJson } from "./parseJsons.ts";

const outputPath = "./src/resources/messages.data.ts";

interface Message {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  ZoneName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

async function generateMessages(messageIds: MessageIds): Promise<void> {
  const message: Record<string, Message> = {
    ja: {
      BNpcName: {},
      PlaceName: {},
      ZoneName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
    en: {
      BNpcName: {},
      PlaceName: {},
      ZoneName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
    de: {
      BNpcName: {},
      PlaceName: {},
      ZoneName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
    fr: {
      BNpcName: {},
      PlaceName: {},
      ZoneName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
  };

  const exVersions = await retrieveExVersionMessages(Object.keys(message));
  exVersions.forEach(obj => {
    message[obj.lang].ExVersion = obj.results;
  });

  const bnpcnames = await retrieveBNpcNameMessages(
    Object.keys(message),
    messageIds.bNpcNameIdSet
  );
  bnpcnames.forEach(obj => {
    message[obj.lang].BNpcName = obj.results;
  });

  const placenames = await retrievePlaceNameMessages(
    Object.keys(message),
    messageIds.placeNameIdSet
  );
  placenames.forEach(obj => {
    message[obj.lang].PlaceName = obj.results;
    const results2: { [zoneId: string]: string } = {};
    Object.entries(obj.results).forEach(entry => {
      const zoneId = messageIds.placeNameIdToZoneId.get(Number(entry[0]));
      if (zoneId) {
        results2[String(zoneId)] = entry[1];
      }
    });
    message[obj.lang].ZoneName = results2;
  });

  const weathers = await retrieveWeatherMessages(
    Object.keys(message),
    messageIds.weatherIdSet
  );
  weathers.forEach(obj => {
    message[obj.lang].Weather = obj.results;
  });

  regionsJson.regions.forEach(region => {
    message.ja.Region[region.key] = region.name.ja;
    message.en.Region[region.key] = region.name.en;
    message.de.Region[region.key] = region.name.de;
    message.fr.Region[region.key] = region.name.fr;
  });

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

interface Message {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  ZoneName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

const messages: Record<string, Message> = ${JSON.stringify(
    message,
    null,
    2
  ).replace(/\"([0-9a-zA-Z]+)\": /g, "$1: ")};

const tts: Record<string, Partial<Message>> = ${JSON.stringify(
    ttsJson,
    null,
    2
  ).replace(/\"([0-9a-zA-Z]+)\": /g, "$1: ")};

export { Message, messages, tts };
`;

  writeFileSync(outputPath, output);
}

export { generateMessages };
