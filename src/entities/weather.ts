import { MessageProvider } from '../providers/messageProvider'
import { WeatherData, WeatherId } from '../resources/weathers.data'

interface Weather {
  readonly id: number
  readonly icon: string
  readonly name: string
  readonly tts: string
}

class WeatherImpl implements Weather {
  constructor(data: WeatherData) {
    this.id = data.id
    this.icon = data.icon
  }

  readonly id: number
  readonly icon: string

  get name(): string {
    return MessageProvider.getWeather(this.id)
  }
  get tts(): string {
    return MessageProvider.getWeather(this.id, true)
  }
}

export { WeatherId, WeatherImpl, type Weather }
