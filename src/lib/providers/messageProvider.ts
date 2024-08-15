import { WorldId } from '../entities/world'
import { TLang, messages, tts, type TMessage } from '../resources/messages.data'
import { WorldProvider } from './worldProvider'

class MessageProvider {
  private _lang: TLang = 'ja'
  private _messages: Record<TLang, TMessage>
  private _tts: Partial<Record<TLang, TMessage>>

  constructor() {
    this._messages = messages
    this._tts = tts
  }

  get lang(): TLang {
    return this._lang
  }

  get tts(): TMessage | undefined {
    return this._tts[this.lang]
  }

  get messages(): TMessage | undefined {
    return this._messages[this.lang]
  }

  setLang(lang: TLang): void {
    this._lang = lang
  }

  getBNpcName(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this.tts?.BNpcName
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
    const results = TLang.reduce<string[]>((acc, lang) => {
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
      const ttsMap = this.tts?.PlaceName
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this.messages?.PlaceName
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `PlaceName<${id}>`
  }

  getZoneNames(id: number) {
    const results = TLang.reduce<string[]>((acc, lang) => {
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
      const ttsMap = this.tts?.ZoneName
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this.messages?.ZoneName
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `ZoneName<${id}>`
  }

  getExVersion(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this.tts?.ExVersion
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this.messages?.ExVersion
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `ExVersion<${id}>`
  }

  getWeather(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this.tts?.Weather
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this.messages?.Weather
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `Weather<${id}>`
  }

  getFate(id: number, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this.tts?.Fate
      if (ttsMap && ttsMap[id]) {
        result = ttsMap[id]
      }
    }
    if (!result) {
      const messageMap = this._messages[this._lang].Fate
      if (messageMap && messageMap[id]) {
        result = messageMap[id]
      }
    }
    return result ? result : `Fate<${id}>`
  }

  getRegion(key: string, tts = false) {
    let result: string | undefined
    if (tts) {
      const ttsMap = this.tts?.Region
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

  getWorld(id: WorldId | number) {
    const world = WorldProvider.findWorld(id as WorldId)
    return world ? world.name : `World<${id}>`
  }
}

const messageProvider = new MessageProvider()
export { messageProvider as MessageProvider }
