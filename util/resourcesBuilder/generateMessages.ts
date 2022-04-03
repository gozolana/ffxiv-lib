import { readCsv } from "./csvReader";
import { readFileSync, writeFileSync } from "fs";
import { IExpansion, IRegionsJson, ITextToSpeechJson, MessageIdSet } from "./types";
import { parse } from "jsonc-parser";

const outputPath = "./src/lib/resources/messages.data.ts";

const inputRegions: IRegionsJson = parse(
  readFileSync("./data/regions.jsonc").toString()
);
const inputTTS: ITextToSpeechJson = parse(
  readFileSync("./data/tts.jsonc").toString()
);

const exVersionHeaders = [
  "id",
  "name",
  undefined,
  undefined,
];

const placeNameHeaders = [
  "id",
  "name",
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
  "id",
  "name",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

const weatherHeaders = [
  "id",
  "icon",
  "name",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

interface ILang {
  BNpcName: { [key: string]: string };
  PlaceName: { [key: string]: string };
  Weather: { [key: string]: string };
  Region: { [key: string]: string };
  ExVersion: {[ key: string]: string };
}

interface IMessage {
  [lang: string]: ILang;
}

async function generateMessages(
  basePath: string,
  messageIdSet: MessageIdSet
): Promise<void> {
  const message: IMessage = {
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
      const results: { [key: string]: string } = {};
      (await readCsv(basePath, "ExVersion", exVersionHeaders, lang))
        .forEach((exVersion) => {
          results[exVersion.id] = exVersion.name;
        });
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
      const results: { [key: string]: string } = {};
      (await readCsv(basePath, "BNpcName", bNpcNameHeaders, lang))
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
      const results: { [key: string]: string } = {};
      (await readCsv(basePath, "PlaceName", placeNameHeaders, lang))
        .filter((placeName) =>
          messageIdSet.placeNameIdSet.has(parseInt(placeName["id"]))
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
      const results: { [key: string]: string } = {};
      (await readCsv(basePath, "Weather", weatherHeaders, lang))
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

  inputRegions.regions.forEach((region)=>{
    message.ja.Region[region.key] = region.name.ja;
    message.en.Region[region.key] = region.name.en;
    message.de.Region[region.key] = region.name.de;
    message.fr.Region[region.key] = region.name.fr;
  });

  const messageJson = JSON.stringify(message, null, 2).replace(
    /\"([0-9a-zA-Z]+)\": /g,
    "$1: "
  );

  const ttsJson = JSON.stringify(inputTTS, null, 2).replace(
    /\"([0-9a-zA-Z]+)\": /g,
    "$1: "
  );

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

interface IMessage {
  [lang: string]: {
    BNpcName?: { [id: number]: string };
    PlaceName?: { [id: number]: string };
    Weather?: { [id: number]: string };
    Region?: { [key: string]: string };
    ExVersion?: { [id: number]: string };
  };
};

const messages: IMessage = ${messageJson};

const tts: IMessage = ${ttsJson};

export { IMessage, messages, tts };
`;

  writeFileSync(outputPath, output);
}

export { generateMessages };
