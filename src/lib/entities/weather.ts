import { messageProvider } from "../providers/messageProvider";
import { TWeather, IWeatherData } from "../resources/weathers.data";

interface IWeather {
  readonly id: number;
  readonly name: string;
  readonly tts: string;
  readonly icon: string;
}

class Weather implements IWeather {
  constructor(data: IWeatherData) {
    this.id = data.id;
    this.icon = data.icon;
  }
  readonly id: number;
  get name(): string {
    return messageProvider.getWeather(this.id);
  }
  get tts(): string {
    return messageProvider.getWeather(this.id, true);
  }
  readonly icon: string;
}

export { TWeather, IWeather, Weather };
