import { MessageProvider } from "../providers/messageProvider";
import { TWeather, IWeatherData } from "../resources/weathers.data";

interface IWeather {
  readonly id: number;
  readonly icon: string;
  readonly name: string;
  readonly tts: string;
}

class Weather implements IWeather {
  constructor(data: IWeatherData) {
    this.id = data.id;
    this.icon = data.icon;
  }

  readonly id: number;
  readonly icon: string;

  get name(): string {
    return MessageProvider.getWeather(this.id);
  }
  get tts(): string {
    return MessageProvider.getWeather(this.id, true);
  }
}

export { TWeather, IWeather, Weather };
