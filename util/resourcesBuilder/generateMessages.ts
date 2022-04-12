import { retrieveBNpcNameMessages, retrieveExVersionMessages, retrievePlaceNameMessages, retrieveWeatherMessages } from './parseCsvs';
import { writeFileSync } from 'fs';
import { MessageIds } from './messageIds';
import { regionsJson, ttsJson } from './parseJsons';

const outputPath = './src/lib/resources/messages.data.ts';

interface Message {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

async function generateMessages(messageIds: MessageIds): Promise<void> {
  const message: Record<string, Message> = {
    ja: {
      BNpcName: {},
      PlaceName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
    en: {
      BNpcName: {},
      PlaceName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
    de: {
      BNpcName: {},
      PlaceName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
    fr: {
      BNpcName: {},
      PlaceName: {},
      Weather: {},
      Region: {},
      ExVersion: {},
    },
  };

  const exVersions = await retrieveExVersionMessages(Object.keys(message));
  exVersions.forEach((obj) => {
    message[obj.lang].ExVersion = obj.results;
  });

  const bnpcnames = await retrieveBNpcNameMessages(
    Object.keys(message),
    messageIds.bNpcNameIdSet
  );
  bnpcnames.forEach((obj) => {
    message[obj.lang].BNpcName = obj.results;
  });

  const placenames = await retrievePlaceNameMessages(
    Object.keys(message),
    messageIds.placeNameIdSet
  );
  placenames.forEach((obj) => {
    message[obj.lang].PlaceName = obj.results;
  });

  const weathers = await retrieveWeatherMessages(
    Object.keys(message),
    messageIds.weatherIdSet
  );
  weathers.forEach((obj) => {
    message[obj.lang].Weather = obj.results;
  });

  regionsJson.regions.forEach((region) => {
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
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

const messages: Record<string, Message> = ${JSON.stringify(
    message,
    null,
    2
  ).replace(/\"([0-9a-zA-Z]+)\": /g, '$1: ')};

const tts: Record<string, Partial<Message>> = ${JSON.stringify(
    ttsJson,
    null,
    2
  ).replace(/\"([0-9a-zA-Z]+)\": /g, '$1: ')};

export { Message, messages, tts };
`;

  writeFileSync(outputPath, output);
}

export { generateMessages };
