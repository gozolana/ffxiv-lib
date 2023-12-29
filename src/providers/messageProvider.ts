import { langs, TLang } from '../entities/lang'
import { TWorld } from '../entities/world'
import { Message, messages, tts } from '../resources/messages.data'
import { WorldProvider } from './worldProvider'

class MessageProvider {
  constructor() {
    this._messages = messages
    this._tts = tts
  }

  private _lang: TLang = 'ja'
  private _messages: Record<TLang, Message>
  private _tts: Record<TLang, Partial<Message>>

  get lang(): TLang {
    return this._lang
  }

  setLang(newLang: TLang): void {
    this._lang = newLang
  }

  getBNpcName(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this._tts[this._lang].BNpcName
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].BNpcName
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `BNpcName<${id}>`
  }

  getPlaceNames(id: number) {
    const results = langs.reduce<string[]>((acc, lang) => {
      const messageMap = this._messages[lang].PlaceName
      if (messageMap && messageMap[id]) {
        acc.push(messageMap[id])
      }
      return acc
    }, [])
    return results
  }

  getPlaceName(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this._tts[this._lang].PlaceName
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].PlaceName
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `PlaceName<${id}>`
  }

  getZoneNames(id: number) {
    const results = langs.reduce<string[]>((acc, lang) => {
      const messageMap = this._messages[lang].ZoneName
      if (messageMap && messageMap[id]) {
        acc.push(messageMap[id])
      }
      return acc
    }, [])
    return results
  }

  getZoneName(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this._tts[this._lang].ZoneName
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].ZoneName
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `ZoneName<${id}>`
  }

  getExVersion(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this._tts[this._lang].ExVersion
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].ExVersion
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `ExVersion<${id}>`
  }

  getWeather(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this._tts[this._lang].Weather
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].Weather
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `Weather<${id}>`
  }

  getRegion(key: string, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this._tts[this._lang].Region
      if (ttsMap && ttsMap[key]) {
        result = ttsMap[key]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].Region
      if (messageMap && messageMap[key]) {
        result = messageMap[key]
      }
    }
    return result ? result : `Region<${key}>`
  }

  getWorld(id: number) {
    const world = WorldProvider.findWorld(id as TWorld)
    return world ? world.name : `World<${id}>`
  }
}

const messageProvider = new MessageProvider()
export { messageProvider as MessageProvider }
