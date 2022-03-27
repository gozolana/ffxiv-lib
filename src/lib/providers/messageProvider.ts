import { langs, TLang } from "../entities/lang";
import { IMessage, messages, tts } from "../resources/messages.data";

class MessageProvider {
  constructor(messages: IMessage, tts: IMessage) {
    this._messages = messages;
    this._tts = tts;
  }

  private _lang: TLang = "ja";
  private _messages: IMessage;
  private _tts: IMessage;

  get lang(): TLang {
    return this._lang;
  }

  setLang(newLang: TLang): void {
    this._lang = newLang;
  }

  getBNpcName(id: number, tts = false) {
    let result: string | undefined;
    if (tts) {
      const ttsMap = this._tts[this._lang]?.BNpcName;
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id];
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang]?.BNpcName;
      if (messageMap && messageMap[id]) {
        result = messageMap[id];
      }
    }
    return result ?? `BNpcName<${id}>`;
  }

  getPlaceNames(id: number) {
    const results = langs.reduce<string[]>((acc, lang) => {
      const messageMap = this._messages[lang]?.PlaceName;
      if (messageMap && messageMap[id]) {
        acc.push(messageMap[id]);
      }
      return acc;
    }, []);
    return results;
  }

  getPlaceName(id: number, tts = false) {
    let result: string | undefined;
    if (tts) {
      const ttsMap = this._tts[this._lang]?.PlaceName;
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id];
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang]?.PlaceName;
      if (messageMap && messageMap[id]) {
        result = messageMap[id];
      }
    }
    return result ?? `PlaceName<${id}>`;
  }

  getExVersion(id: number, tts = false) {
    let result: string | undefined;
    if (tts) {
      const ttsMap = this._tts[this._lang]?.ExVersion;
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id];
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang]?.ExVersion;
      if (messageMap && messageMap[id]) {
        result = messageMap[id];
      }
    }
    return result ?? `ExVersion<${id}>`;
  }

  getWeather(id: number, tts = false) {
    let result: string | undefined;
    if (tts) {
      const ttsMap = this._tts[this._lang]?.Weather;
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id];
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang]?.Weather;
      if (messageMap && messageMap[id]) {
        result = messageMap[id];
      }
    }
    return result ?? `Weather<${id}>`;
  }

  getRegion(key: string, tts = false) {
    let result: string | undefined;
    if (tts) {
      const ttsMap = this._tts[this._lang]?.Region;
      if (ttsMap && ttsMap[key]) {
        result = ttsMap[key];
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang]?.Region;
      if (messageMap && messageMap[key]) {
        result = messageMap[key];
      }
    }
    return result ?? `Region<${key}>`;
  }
}
const messageProvider = new MessageProvider(messages, tts);

export { messageProvider };
