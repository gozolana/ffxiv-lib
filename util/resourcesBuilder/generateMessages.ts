import { readCsv } from './parseCsvs';
import { writeFileSync } from 'fs';
import { MessageIdSet } from './types';
import { regionsJson, ttsJson } from './parseJsons';

const outputPath = './src/lib/resources/messages.data.ts';

const exVersionHeaders = ['id', 'name', undefined, undefined];

const placeNameHeaders = [
  'id',
  'name',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

const bNpcNameHeaders = [
  'id',
  'name',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

const weatherHeaders = [
  'id',
  'icon',
  'name',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

interface Message {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

async function generateMessages(
  messageIdSet: MessageIdSet
): Promise<void> {
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

  const exVersions = await Promise.all(
    Object.keys(message).map(async (lang) => {
      const results: Record<string, string> = {};
      (await readCsv('ExVersion', exVersionHeaders, lang)).forEach(
        (exVersion) => {
          results[exVersion.id] = exVersion.name;
        }
      );
      return {
        lang: lang,
        results: results,
      };
    })
  );

  exVersions.forEach((obj) => {
    message[obj.lang].ExVersion = obj.results;
  });

  const bnpcnames = await Promise.all(
    Object.keys(message).map(async (lang) => {
      const results: Record<string, string> = {};
      (await readCsv('BNpcName', bNpcNameHeaders, lang))
        .filter((bNpcName) =>
          messageIdSet.bNpcNameIdSet.has(parseInt(bNpcName.id))
        )
        .forEach((bNpcName) => {
          results[bNpcName.id] = bNpcName.name;
        });
      return {
        lang: lang,
        results: results,
      };
    })
  );

  bnpcnames.forEach((obj) => {
    message[obj.lang].BNpcName = obj.results;
  });

  const placenames = await Promise.all(
    Object.keys(message).map(async (lang) => {
      const results: Record<string, string> = {};
      (await readCsv('PlaceName', placeNameHeaders, lang))
        .filter((placeName) =>
          messageIdSet.placeNameIdSet.has(parseInt(placeName['id']))
        )
        .forEach((placeName) => {
          results[placeName.id] = placeName.name;
        });
      return {
        lang: lang,
        results: results,
      };
    })
  );

  placenames.forEach((obj) => {
    message[obj.lang].PlaceName = obj.results;
  });

  const weathers = await Promise.all(
    Object.keys(message).map(async (lang) => {
      const results: Record<string, string> = {};
      (await readCsv('Weather', weatherHeaders, lang))
        .filter((weather) =>
          messageIdSet.weatherIdSet.has(parseInt(weather.id))
        )
        .forEach((weather) => {
          results[weather.id] = weather.name;
        });
      return {
        lang: lang,
        results: results,
      };
    })
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

  const messageJson = JSON.stringify(message, null, 2).replace(
    /\"([0-9a-zA-Z]+)\": /g,
    '$1: '
  );

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

interface Message {
  BNpcName: Record<number, string>;
  PlaceName: Record<number, string>;
  Weather: Record<number, string>;
  Region: Record<string, string>;
  ExVersion: Record<number, string>;
}

const messages: Record<string, Message> = ${messageJson};

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
