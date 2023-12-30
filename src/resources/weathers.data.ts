// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const WeatherId = {
  ClearSkies: 1,
  FairSkies: 2,
  Clouds: 3,
  Fog: 4,
  Wind: 5,
  Gales: 6,
  Rain: 7,
  Showers: 8,
  Thunder: 9,
  Thunderstorms: 10,
  DustStorms: 11,
  HeatWaves: 14,
  Snow: 15,
  Blizzards: 16,
  Gloom: 17,
  UmbralWind: 49,
  UmbralStatic: 50,
  MoonDust: 148,
  AstromagneticStorm: 149,
} as const;
type WeatherId = (typeof WeatherId)[keyof typeof WeatherId];

type WeatherData = {
  readonly id: WeatherId;
  readonly icon: string;
};

type WeatherRateData = {
  readonly id: number;
  readonly rates: {
    readonly weatherId: WeatherId;
    readonly chance: number;
  }[];
};

const weathers: WeatherData[] = [
  {
    id: 1,
    icon: "060201",
  },
  {
    id: 2,
    icon: "060202",
  },
  {
    id: 3,
    icon: "060203",
  },
  {
    id: 4,
    icon: "060204",
  },
  {
    id: 5,
    icon: "060205",
  },
  {
    id: 6,
    icon: "060206",
  },
  {
    id: 7,
    icon: "060207",
  },
  {
    id: 8,
    icon: "060208",
  },
  {
    id: 9,
    icon: "060209",
  },
  {
    id: 10,
    icon: "060210",
  },
  {
    id: 11,
    icon: "060211",
  },
  {
    id: 14,
    icon: "060214",
  },
  {
    id: 15,
    icon: "060215",
  },
  {
    id: 16,
    icon: "060216",
  },
  {
    id: 17,
    icon: "060218",
  },
  {
    id: 49,
    icon: "060219",
  },
  {
    id: 50,
    icon: "060220",
  },
  {
    id: 148,
    icon: "060222",
  },
  {
    id: 149,
    icon: "060223",
  },
];

const weatherRates: WeatherRateData[] = [
  {
    id: 3,
    rates: [
      {
        weatherId: 9,
        chance: 5,
      },
      {
        weatherId: 7,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 2,
        chance: 15,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 15,
      },
    ],
  },
  {
    id: 4,
    rates: [
      {
        weatherId: 9,
        chance: 5,
      },
      {
        weatherId: 7,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 2,
        chance: 15,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 15,
      },
    ],
  },
  {
    id: 5,
    rates: [
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 10,
        chance: 5,
      },
      {
        weatherId: 9,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 2,
        chance: 30,
      },
      {
        weatherId: 1,
        chance: 30,
      },
    ],
  },
  {
    id: 6,
    rates: [
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 8,
        chance: 5,
      },
      {
        weatherId: 7,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 2,
        chance: 30,
      },
      {
        weatherId: 1,
        chance: 30,
      },
    ],
  },
  {
    id: 9,
    rates: [
      {
        weatherId: 1,
        chance: 40,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 25,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 5,
      },
    ],
  },
  {
    id: 10,
    rates: [
      {
        weatherId: 11,
        chance: 15,
      },
      {
        weatherId: 1,
        chance: 40,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 5,
      },
    ],
  },
  {
    id: 11,
    rates: [
      {
        weatherId: 1,
        chance: 40,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 5,
      },
      {
        weatherId: 8,
        chance: 15,
      },
    ],
  },
  {
    id: 12,
    rates: [
      {
        weatherId: 14,
        chance: 20,
      },
      {
        weatherId: 1,
        chance: 40,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
    ],
  },
  {
    id: 13,
    rates: [
      {
        weatherId: 1,
        chance: 5,
      },
      {
        weatherId: 2,
        chance: 15,
      },
      {
        weatherId: 3,
        chance: 30,
      },
      {
        weatherId: 4,
        chance: 50,
      },
    ],
  },
  {
    id: 16,
    rates: [
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 5,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
    ],
  },
  {
    id: 17,
    rates: [
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 5,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
    ],
  },
  {
    id: 18,
    rates: [
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 1,
        chance: 45,
      },
      {
        weatherId: 2,
        chance: 30,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 5,
      },
      {
        weatherId: 8,
        chance: 5,
      },
    ],
  },
  {
    id: 19,
    rates: [
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 5,
        chance: 10,
      },
      {
        weatherId: 6,
        chance: 10,
      },
    ],
  },
  {
    id: 20,
    rates: [
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 9,
        chance: 10,
      },
      {
        weatherId: 10,
        chance: 10,
      },
    ],
  },
  {
    id: 21,
    rates: [
      {
        weatherId: 16,
        chance: 20,
      },
      {
        weatherId: 15,
        chance: 40,
      },
      {
        weatherId: 2,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 5,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 10,
      },
    ],
  },
  {
    id: 22,
    rates: [
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 15,
      },
      {
        weatherId: 17,
        chance: 30,
      },
      {
        weatherId: 1,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 25,
      },
    ],
  },
  {
    id: 24,
    rates: [
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 20,
      },
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 4,
        chance: 15,
      },
      {
        weatherId: 7,
        chance: 15,
      },
    ],
  },
  {
    id: 49,
    rates: [
      {
        weatherId: 16,
        chance: 20,
      },
      {
        weatherId: 15,
        chance: 40,
      },
      {
        weatherId: 2,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 5,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 10,
      },
    ],
  },
  {
    id: 50,
    rates: [
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 9,
        chance: 10,
      },
      {
        weatherId: 11,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 30,
      },
    ],
  },
  {
    id: 51,
    rates: [
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 8,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 30,
      },
    ],
  },
  {
    id: 52,
    rates: [
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 6,
        chance: 10,
      },
      {
        weatherId: 50,
        chance: 20,
      },
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 30,
      },
    ],
  },
  {
    id: 53,
    rates: [
      {
        weatherId: 1,
        chance: 30,
      },
      {
        weatherId: 2,
        chance: 30,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 5,
        chance: 10,
      },
      {
        weatherId: 49,
        chance: 10,
      },
    ],
  },
  {
    id: 54,
    rates: [
      {
        weatherId: 2,
        chance: 35,
      },
      {
        weatherId: 3,
        chance: 35,
      },
      {
        weatherId: 9,
        chance: 30,
      },
    ],
  },
  {
    id: 79,
    rates: [
      {
        weatherId: 1,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 45,
      },
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 9,
        chance: 10,
      },
    ],
  },
  {
    id: 80,
    rates: [
      {
        weatherId: 1,
        chance: 10,
      },
      {
        weatherId: 2,
        chance: 50,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 5,
        chance: 10,
      },
      {
        weatherId: 11,
        chance: 5,
      },
    ],
  },
  {
    id: 81,
    rates: [
      {
        weatherId: 1,
        chance: 20,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 10,
        chance: 10,
      },
    ],
  },
  {
    id: 83,
    rates: [
      {
        weatherId: 9,
        chance: 10,
      },
      {
        weatherId: 5,
        chance: 10,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 1,
        chance: 25,
      },
    ],
  },
  {
    id: 84,
    rates: [
      {
        weatherId: 8,
        chance: 5,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 1,
        chance: 20,
      },
    ],
  },
  {
    id: 85,
    rates: [
      {
        weatherId: 6,
        chance: 5,
      },
      {
        weatherId: 5,
        chance: 5,
      },
      {
        weatherId: 7,
        chance: 7,
      },
      {
        weatherId: 4,
        chance: 8,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 1,
        chance: 25,
      },
    ],
  },
  {
    id: 91,
    rates: [
      {
        weatherId: 2,
        chance: 30,
      },
      {
        weatherId: 6,
        chance: 30,
      },
      {
        weatherId: 8,
        chance: 30,
      },
      {
        weatherId: 15,
        chance: 10,
      },
    ],
  },
  {
    id: 94,
    rates: [
      {
        weatherId: 2,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 18,
      },
      {
        weatherId: 14,
        chance: 18,
      },
      {
        weatherId: 15,
        chance: 18,
      },
      {
        weatherId: 9,
        chance: 18,
      },
      {
        weatherId: 16,
        chance: 18,
      },
    ],
  },
  {
    id: 96,
    rates: [
      {
        weatherId: 2,
        chance: 10,
      },
      {
        weatherId: 14,
        chance: 18,
      },
      {
        weatherId: 9,
        chance: 18,
      },
      {
        weatherId: 16,
        chance: 18,
      },
      {
        weatherId: 49,
        chance: 18,
      },
      {
        weatherId: 15,
        chance: 18,
      },
    ],
  },
  {
    id: 100,
    rates: [
      {
        weatherId: 2,
        chance: 12,
      },
      {
        weatherId: 8,
        chance: 22,
      },
      {
        weatherId: 17,
        chance: 22,
      },
      {
        weatherId: 10,
        chance: 22,
      },
      {
        weatherId: 15,
        chance: 22,
      },
    ],
  },
  {
    id: 106,
    rates: [
      {
        weatherId: 1,
        chance: 20,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 10,
        chance: 5,
      },
    ],
  },
  {
    id: 107,
    rates: [
      {
        weatherId: 6,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 1,
        chance: 15,
      },
    ],
  },
  {
    id: 108,
    rates: [
      {
        weatherId: 2,
        chance: 45,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 11,
        chance: 10,
      },
      {
        weatherId: 14,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 20,
      },
    ],
  },
  {
    id: 109,
    rates: [
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 3,
        chance: 15,
      },
      {
        weatherId: 10,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 40,
      },
    ],
  },
  {
    id: 110,
    rates: [
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 49,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 3,
        chance: 15,
      },
    ],
  },
  {
    id: 111,
    rates: [
      {
        weatherId: 3,
        chance: 20,
      },
      {
        weatherId: 2,
        chance: 60,
      },
      {
        weatherId: 1,
        chance: 20,
      },
    ],
  },
  {
    id: 131,
    rates: [
      {
        weatherId: 1,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 45,
      },
      {
        weatherId: 3,
        chance: 25,
      },
      {
        weatherId: 7,
        chance: 15,
      },
    ],
  },
  {
    id: 132,
    rates: [
      {
        weatherId: 4,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 8,
        chance: 5,
      },
      {
        weatherId: 1,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 40,
      },
      {
        weatherId: 3,
        chance: 20,
      },
    ],
  },
  {
    id: 133,
    rates: [
      {
        weatherId: 15,
        chance: 45,
      },
      {
        weatherId: 9,
        chance: 5,
      },
      {
        weatherId: 7,
        chance: 5,
      },
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 3,
        chance: 25,
      },
      {
        weatherId: 2,
        chance: 10,
      },
      {
        weatherId: 1,
        chance: 5,
      },
    ],
  },
  {
    id: 134,
    rates: [
      {
        weatherId: 3,
        chance: 25,
      },
      {
        weatherId: 49,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 45,
      },
      {
        weatherId: 1,
        chance: 15,
      },
    ],
  },
  {
    id: 135,
    rates: [
      {
        weatherId: 49,
        chance: 15,
      },
      {
        weatherId: 148,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 70,
      },
    ],
  },
  {
    id: 136,
    rates: [
      {
        weatherId: 149,
        chance: 15,
      },
      {
        weatherId: 2,
        chance: 70,
      },
      {
        weatherId: 49,
        chance: 15,
      },
    ],
  },
  {
    id: 148,
    rates: [
      {
        weatherId: 1,
        chance: 25,
      },
      {
        weatherId: 2,
        chance: 45,
      },
      {
        weatherId: 3,
        chance: 10,
      },
      {
        weatherId: 7,
        chance: 10,
      },
      {
        weatherId: 4,
        chance: 5,
      },
      {
        weatherId: 8,
        chance: 5,
      },
    ],
  },
];

export {
  WeatherId,
  weatherRates,
  weathers,
  type WeatherData,
  type WeatherRateData,
};
