// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TMobCategory = {
  EliteMark: 1,
  SpecialEliteMark: 2,
  SpecialFATE: 3,
  None: 999,
} as const;
type TMobCategory = (typeof TMobCategory)[keyof typeof TMobCategory];

const TMobRank = {
  S: 1,
  A: 2,
  B: 3,
  None: 999,
} as const;
type TMobRank = (typeof TMobRank)[keyof typeof TMobRank];

type MobData = {
  readonly id: number;
  readonly category: TMobCategory;
  readonly rank: TMobRank;
  readonly zoneIds: number[];
  readonly respawnMinutes?: {
    min: number;
    max: number;
  };
};

const mobData: {
  mobById: Record<number, MobData>;
  sRanks: number[];
  aRanks: number[];
  bRanks: number[];
  specials: number[];
  fates: number[];
} = {
  mobById: {
    655: {
      id: 655,
      category: 3,
      rank: 999,
      zoneIds: [155],
    },
    887: {
      id: 887,
      category: 3,
      rank: 999,
      zoneIds: [148, 152, 153, 154],
    },
    2919: {
      id: 2919,
      category: 1,
      rank: 3,
      zoneIds: [148],
    },
    2920: {
      id: 2920,
      category: 1,
      rank: 3,
      zoneIds: [152],
    },
    2921: {
      id: 2921,
      category: 1,
      rank: 3,
      zoneIds: [153],
    },
    2922: {
      id: 2922,
      category: 1,
      rank: 3,
      zoneIds: [154],
    },
    2923: {
      id: 2923,
      category: 1,
      rank: 3,
      zoneIds: [140],
    },
    2924: {
      id: 2924,
      category: 1,
      rank: 3,
      zoneIds: [141],
    },
    2925: {
      id: 2925,
      category: 1,
      rank: 3,
      zoneIds: [145],
    },
    2926: {
      id: 2926,
      category: 1,
      rank: 3,
      zoneIds: [146],
    },
    2927: {
      id: 2927,
      category: 1,
      rank: 3,
      zoneIds: [147],
    },
    2928: {
      id: 2928,
      category: 1,
      rank: 3,
      zoneIds: [134],
    },
    2929: {
      id: 2929,
      category: 1,
      rank: 3,
      zoneIds: [135],
    },
    2930: {
      id: 2930,
      category: 1,
      rank: 3,
      zoneIds: [137],
    },
    2931: {
      id: 2931,
      category: 1,
      rank: 3,
      zoneIds: [138],
    },
    2932: {
      id: 2932,
      category: 1,
      rank: 3,
      zoneIds: [139],
    },
    2933: {
      id: 2933,
      category: 1,
      rank: 3,
      zoneIds: [180],
    },
    2934: {
      id: 2934,
      category: 1,
      rank: 3,
      zoneIds: [155],
    },
    2935: {
      id: 2935,
      category: 1,
      rank: 3,
      zoneIds: [156],
    },
    2936: {
      id: 2936,
      category: 1,
      rank: 2,
      zoneIds: [148],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2937: {
      id: 2937,
      category: 1,
      rank: 2,
      zoneIds: [152],
      respawnMinutes: {
        min: 180,
        max: 300,
      },
    },
    2938: {
      id: 2938,
      category: 1,
      rank: 2,
      zoneIds: [153],
      respawnMinutes: {
        min: 225,
        max: 345,
      },
    },
    2939: {
      id: 2939,
      category: 1,
      rank: 2,
      zoneIds: [154],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    2940: {
      id: 2940,
      category: 1,
      rank: 2,
      zoneIds: [140],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2941: {
      id: 2941,
      category: 1,
      rank: 2,
      zoneIds: [141],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    2942: {
      id: 2942,
      category: 1,
      rank: 2,
      zoneIds: [145],
      respawnMinutes: {
        min: 180,
        max: 300,
      },
    },
    2943: {
      id: 2943,
      category: 1,
      rank: 2,
      zoneIds: [146],
      respawnMinutes: {
        min: 225,
        max: 345,
      },
    },
    2944: {
      id: 2944,
      category: 1,
      rank: 2,
      zoneIds: [147],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    2945: {
      id: 2945,
      category: 1,
      rank: 2,
      zoneIds: [134],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2946: {
      id: 2946,
      category: 1,
      rank: 2,
      zoneIds: [135],
      respawnMinutes: {
        min: 225,
        max: 345,
      },
    },
    2947: {
      id: 2947,
      category: 1,
      rank: 2,
      zoneIds: [137],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2948: {
      id: 2948,
      category: 1,
      rank: 2,
      zoneIds: [138],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2949: {
      id: 2949,
      category: 1,
      rank: 2,
      zoneIds: [139],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    2950: {
      id: 2950,
      category: 1,
      rank: 2,
      zoneIds: [180],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2951: {
      id: 2951,
      category: 1,
      rank: 2,
      zoneIds: [155],
      respawnMinutes: {
        min: 180,
        max: 300,
      },
    },
    2952: {
      id: 2952,
      category: 1,
      rank: 2,
      zoneIds: [156],
      respawnMinutes: {
        min: 210,
        max: 330,
      },
    },
    2953: {
      id: 2953,
      category: 1,
      rank: 1,
      zoneIds: [148],
      respawnMinutes: {
        min: 2520,
        max: 2880,
      },
    },
    2954: {
      id: 2954,
      category: 1,
      rank: 1,
      zoneIds: [152],
      respawnMinutes: {
        min: 4020,
        max: 4680,
      },
    },
    2955: {
      id: 2955,
      category: 1,
      rank: 1,
      zoneIds: [153],
      respawnMinutes: {
        min: 3000,
        max: 3000,
      },
    },
    2956: {
      id: 2956,
      category: 1,
      rank: 1,
      zoneIds: [154],
      respawnMinutes: {
        min: 3420,
        max: 3900,
      },
    },
    2957: {
      id: 2957,
      category: 1,
      rank: 1,
      zoneIds: [140],
      respawnMinutes: {
        min: 3420,
        max: 3900,
      },
    },
    2958: {
      id: 2958,
      category: 1,
      rank: 1,
      zoneIds: [141],
      respawnMinutes: {
        min: 4020,
        max: 4620,
      },
    },
    2959: {
      id: 2959,
      category: 1,
      rank: 1,
      zoneIds: [145],
      respawnMinutes: {
        min: 4020,
        max: 4680,
      },
    },
    2960: {
      id: 2960,
      category: 1,
      rank: 1,
      zoneIds: [146],
      respawnMinutes: {
        min: 2640,
        max: 3240,
      },
    },
    2961: {
      id: 2961,
      category: 1,
      rank: 1,
      zoneIds: [147],
      respawnMinutes: {
        min: 3420,
        max: 3780,
      },
    },
    2962: {
      id: 2962,
      category: 1,
      rank: 1,
      zoneIds: [134],
      respawnMinutes: {
        min: 3900,
        max: 4500,
      },
    },
    2963: {
      id: 2963,
      category: 1,
      rank: 1,
      zoneIds: [135],
      respawnMinutes: {
        min: 3000,
        max: 3000,
      },
    },
    2964: {
      id: 2964,
      category: 1,
      rank: 1,
      zoneIds: [137],
      respawnMinutes: {
        min: 2520,
        max: 2880,
      },
    },
    2965: {
      id: 2965,
      category: 1,
      rank: 1,
      zoneIds: [138],
      respawnMinutes: {
        min: 3900,
        max: 4500,
      },
    },
    2966: {
      id: 2966,
      category: 1,
      rank: 1,
      zoneIds: [139],
      respawnMinutes: {
        min: 2820,
        max: 3180,
      },
    },
    2967: {
      id: 2967,
      category: 1,
      rank: 1,
      zoneIds: [180],
      respawnMinutes: {
        min: 3900,
        max: 4260,
      },
    },
    2968: {
      id: 2968,
      category: 1,
      rank: 1,
      zoneIds: [155],
      respawnMinutes: {
        min: 3600,
        max: 5040,
      },
    },
    2969: {
      id: 2969,
      category: 1,
      rank: 1,
      zoneIds: [156],
      respawnMinutes: {
        min: 3600,
        max: 5040,
      },
    },
    3783: {
      id: 3783,
      category: 3,
      rank: 999,
      zoneIds: [402],
    },
    3789: {
      id: 3789,
      category: 3,
      rank: 999,
      zoneIds: [398],
    },
    4350: {
      id: 4350,
      category: 1,
      rank: 3,
      zoneIds: [397],
    },
    4351: {
      id: 4351,
      category: 1,
      rank: 3,
      zoneIds: [397],
    },
    4352: {
      id: 4352,
      category: 1,
      rank: 3,
      zoneIds: [398],
    },
    4353: {
      id: 4353,
      category: 1,
      rank: 3,
      zoneIds: [398],
    },
    4354: {
      id: 4354,
      category: 1,
      rank: 3,
      zoneIds: [399],
    },
    4355: {
      id: 4355,
      category: 1,
      rank: 3,
      zoneIds: [399],
    },
    4356: {
      id: 4356,
      category: 1,
      rank: 3,
      zoneIds: [400],
    },
    4357: {
      id: 4357,
      category: 1,
      rank: 3,
      zoneIds: [400],
    },
    4358: {
      id: 4358,
      category: 1,
      rank: 3,
      zoneIds: [401],
    },
    4359: {
      id: 4359,
      category: 1,
      rank: 3,
      zoneIds: [401],
    },
    4360: {
      id: 4360,
      category: 1,
      rank: 3,
      zoneIds: [402],
    },
    4361: {
      id: 4361,
      category: 1,
      rank: 3,
      zoneIds: [402],
    },
    4362: {
      id: 4362,
      category: 1,
      rank: 2,
      zoneIds: [397],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4363: {
      id: 4363,
      category: 1,
      rank: 2,
      zoneIds: [397],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4364: {
      id: 4364,
      category: 1,
      rank: 2,
      zoneIds: [398],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4365: {
      id: 4365,
      category: 1,
      rank: 2,
      zoneIds: [398],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4366: {
      id: 4366,
      category: 1,
      rank: 2,
      zoneIds: [399],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4367: {
      id: 4367,
      category: 1,
      rank: 2,
      zoneIds: [399],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4368: {
      id: 4368,
      category: 1,
      rank: 2,
      zoneIds: [400],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4369: {
      id: 4369,
      category: 1,
      rank: 2,
      zoneIds: [400],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4370: {
      id: 4370,
      category: 1,
      rank: 2,
      zoneIds: [401],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4371: {
      id: 4371,
      category: 1,
      rank: 2,
      zoneIds: [401],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4372: {
      id: 4372,
      category: 1,
      rank: 2,
      zoneIds: [402],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4373: {
      id: 4373,
      category: 1,
      rank: 2,
      zoneIds: [402],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    4374: {
      id: 4374,
      category: 1,
      rank: 1,
      zoneIds: [397],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    4375: {
      id: 4375,
      category: 1,
      rank: 1,
      zoneIds: [398],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    4376: {
      id: 4376,
      category: 1,
      rank: 1,
      zoneIds: [399],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    4377: {
      id: 4377,
      category: 1,
      rank: 1,
      zoneIds: [400],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    4378: {
      id: 4378,
      category: 1,
      rank: 1,
      zoneIds: [401],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    4380: {
      id: 4380,
      category: 1,
      rank: 1,
      zoneIds: [402],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5984: {
      id: 5984,
      category: 1,
      rank: 1,
      zoneIds: [613],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5985: {
      id: 5985,
      category: 1,
      rank: 1,
      zoneIds: [614],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5986: {
      id: 5986,
      category: 1,
      rank: 1,
      zoneIds: [622],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5987: {
      id: 5987,
      category: 1,
      rank: 1,
      zoneIds: [612],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5988: {
      id: 5988,
      category: 1,
      rank: 1,
      zoneIds: [620],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5989: {
      id: 5989,
      category: 1,
      rank: 1,
      zoneIds: [621],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    5990: {
      id: 5990,
      category: 1,
      rank: 2,
      zoneIds: [612],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5991: {
      id: 5991,
      category: 1,
      rank: 2,
      zoneIds: [612],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5992: {
      id: 5992,
      category: 1,
      rank: 2,
      zoneIds: [620],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5993: {
      id: 5993,
      category: 1,
      rank: 2,
      zoneIds: [620],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5994: {
      id: 5994,
      category: 1,
      rank: 2,
      zoneIds: [621],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5995: {
      id: 5995,
      category: 1,
      rank: 2,
      zoneIds: [621],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5996: {
      id: 5996,
      category: 1,
      rank: 2,
      zoneIds: [613],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5997: {
      id: 5997,
      category: 1,
      rank: 2,
      zoneIds: [613],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5998: {
      id: 5998,
      category: 1,
      rank: 2,
      zoneIds: [614],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    5999: {
      id: 5999,
      category: 1,
      rank: 2,
      zoneIds: [614],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    6000: {
      id: 6000,
      category: 1,
      rank: 2,
      zoneIds: [622],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    6001: {
      id: 6001,
      category: 1,
      rank: 2,
      zoneIds: [622],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    6002: {
      id: 6002,
      category: 1,
      rank: 3,
      zoneIds: [613],
    },
    6003: {
      id: 6003,
      category: 1,
      rank: 3,
      zoneIds: [613],
    },
    6004: {
      id: 6004,
      category: 1,
      rank: 3,
      zoneIds: [614],
    },
    6005: {
      id: 6005,
      category: 1,
      rank: 3,
      zoneIds: [614],
    },
    6006: {
      id: 6006,
      category: 1,
      rank: 3,
      zoneIds: [622],
    },
    6007: {
      id: 6007,
      category: 1,
      rank: 3,
      zoneIds: [622],
    },
    6008: {
      id: 6008,
      category: 1,
      rank: 3,
      zoneIds: [612],
    },
    6009: {
      id: 6009,
      category: 1,
      rank: 3,
      zoneIds: [612],
    },
    6010: {
      id: 6010,
      category: 1,
      rank: 3,
      zoneIds: [620],
    },
    6011: {
      id: 6011,
      category: 1,
      rank: 3,
      zoneIds: [620],
    },
    6012: {
      id: 6012,
      category: 1,
      rank: 3,
      zoneIds: [621],
    },
    6013: {
      id: 6013,
      category: 1,
      rank: 3,
      zoneIds: [621],
    },
    6290: {
      id: 6290,
      category: 3,
      rank: 999,
      zoneIds: [614],
    },
    6392: {
      id: 6392,
      category: 3,
      rank: 999,
      zoneIds: [621],
    },
    8234: {
      id: 8234,
      category: 3,
      rank: 999,
      zoneIds: [818],
    },
    8653: {
      id: 8653,
      category: 1,
      rank: 1,
      zoneIds: [816],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    8654: {
      id: 8654,
      category: 1,
      rank: 2,
      zoneIds: [816],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8655: {
      id: 8655,
      category: 1,
      rank: 2,
      zoneIds: [816],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8656: {
      id: 8656,
      category: 1,
      rank: 3,
      zoneIds: [816],
    },
    8657: {
      id: 8657,
      category: 1,
      rank: 3,
      zoneIds: [816],
    },
    8822: {
      id: 8822,
      category: 3,
      rank: 999,
      zoneIds: [814],
    },
    8890: {
      id: 8890,
      category: 1,
      rank: 1,
      zoneIds: [817],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    8891: {
      id: 8891,
      category: 1,
      rank: 2,
      zoneIds: [817],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8892: {
      id: 8892,
      category: 1,
      rank: 2,
      zoneIds: [817],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8893: {
      id: 8893,
      category: 1,
      rank: 3,
      zoneIds: [817],
    },
    8894: {
      id: 8894,
      category: 1,
      rank: 3,
      zoneIds: [817],
    },
    8895: {
      id: 8895,
      category: 1,
      rank: 1,
      zoneIds: [818],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    8896: {
      id: 8896,
      category: 1,
      rank: 2,
      zoneIds: [818],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8897: {
      id: 8897,
      category: 1,
      rank: 2,
      zoneIds: [818],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8898: {
      id: 8898,
      category: 1,
      rank: 3,
      zoneIds: [818],
    },
    8899: {
      id: 8899,
      category: 1,
      rank: 3,
      zoneIds: [818],
    },
    8900: {
      id: 8900,
      category: 1,
      rank: 1,
      zoneIds: [815],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    8901: {
      id: 8901,
      category: 1,
      rank: 2,
      zoneIds: [815],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8902: {
      id: 8902,
      category: 1,
      rank: 2,
      zoneIds: [815],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8903: {
      id: 8903,
      category: 1,
      rank: 3,
      zoneIds: [815],
    },
    8904: {
      id: 8904,
      category: 1,
      rank: 3,
      zoneIds: [815],
    },
    8905: {
      id: 8905,
      category: 1,
      rank: 1,
      zoneIds: [813],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    8906: {
      id: 8906,
      category: 1,
      rank: 2,
      zoneIds: [813],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8907: {
      id: 8907,
      category: 1,
      rank: 2,
      zoneIds: [813],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8908: {
      id: 8908,
      category: 1,
      rank: 3,
      zoneIds: [813],
    },
    8909: {
      id: 8909,
      category: 1,
      rank: 3,
      zoneIds: [813],
    },
    8910: {
      id: 8910,
      category: 1,
      rank: 1,
      zoneIds: [814],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    8911: {
      id: 8911,
      category: 1,
      rank: 2,
      zoneIds: [814],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8912: {
      id: 8912,
      category: 1,
      rank: 2,
      zoneIds: [814],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    8913: {
      id: 8913,
      category: 1,
      rank: 3,
      zoneIds: [814],
    },
    8914: {
      id: 8914,
      category: 1,
      rank: 3,
      zoneIds: [814],
    },
    8915: {
      id: 8915,
      category: 2,
      rank: 999,
      zoneIds: [813, 814, 815, 816, 817, 818],
    },
    8916: {
      id: 8916,
      category: 2,
      rank: 999,
      zoneIds: [813, 814, 815, 816, 817, 818],
    },
    10269: {
      id: 10269,
      category: 3,
      rank: 999,
      zoneIds: [957],
    },
    10400: {
      id: 10400,
      category: 3,
      rank: 999,
      zoneIds: [960],
    },
    10615: {
      id: 10615,
      category: 2,
      rank: 999,
      zoneIds: [956, 957, 958, 959, 960, 961],
    },
    10616: {
      id: 10616,
      category: 2,
      rank: 999,
      zoneIds: [956, 957, 958, 959, 960, 961],
    },
    10617: {
      id: 10617,
      category: 1,
      rank: 1,
      zoneIds: [956],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    10618: {
      id: 10618,
      category: 1,
      rank: 1,
      zoneIds: [957],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    10619: {
      id: 10619,
      category: 1,
      rank: 1,
      zoneIds: [958],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    10620: {
      id: 10620,
      category: 1,
      rank: 1,
      zoneIds: [959],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    10621: {
      id: 10621,
      category: 1,
      rank: 1,
      zoneIds: [961],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    10622: {
      id: 10622,
      category: 1,
      rank: 1,
      zoneIds: [960],
      respawnMinutes: {
        min: 5040,
        max: 7920,
      },
    },
    10623: {
      id: 10623,
      category: 1,
      rank: 2,
      zoneIds: [956],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10624: {
      id: 10624,
      category: 1,
      rank: 2,
      zoneIds: [956],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10625: {
      id: 10625,
      category: 1,
      rank: 2,
      zoneIds: [957],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10626: {
      id: 10626,
      category: 1,
      rank: 2,
      zoneIds: [957],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10627: {
      id: 10627,
      category: 1,
      rank: 2,
      zoneIds: [958],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10628: {
      id: 10628,
      category: 1,
      rank: 2,
      zoneIds: [958],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10629: {
      id: 10629,
      category: 1,
      rank: 2,
      zoneIds: [959],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10630: {
      id: 10630,
      category: 1,
      rank: 2,
      zoneIds: [959],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10631: {
      id: 10631,
      category: 1,
      rank: 2,
      zoneIds: [961],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10632: {
      id: 10632,
      category: 1,
      rank: 2,
      zoneIds: [961],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10633: {
      id: 10633,
      category: 1,
      rank: 2,
      zoneIds: [960],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10634: {
      id: 10634,
      category: 1,
      rank: 2,
      zoneIds: [960],
      respawnMinutes: {
        min: 240,
        max: 360,
      },
    },
    10635: {
      id: 10635,
      category: 1,
      rank: 3,
      zoneIds: [956],
    },
    10636: {
      id: 10636,
      category: 1,
      rank: 3,
      zoneIds: [956],
    },
    10637: {
      id: 10637,
      category: 1,
      rank: 3,
      zoneIds: [957],
    },
    10638: {
      id: 10638,
      category: 1,
      rank: 3,
      zoneIds: [957],
    },
    10639: {
      id: 10639,
      category: 1,
      rank: 3,
      zoneIds: [958],
    },
    10640: {
      id: 10640,
      category: 1,
      rank: 3,
      zoneIds: [958],
    },
    10641: {
      id: 10641,
      category: 1,
      rank: 3,
      zoneIds: [959],
    },
    10642: {
      id: 10642,
      category: 1,
      rank: 3,
      zoneIds: [959],
    },
    10643: {
      id: 10643,
      category: 1,
      rank: 3,
      zoneIds: [961],
    },
    10644: {
      id: 10644,
      category: 1,
      rank: 3,
      zoneIds: [961],
    },
    10645: {
      id: 10645,
      category: 1,
      rank: 3,
      zoneIds: [960],
    },
    10646: {
      id: 10646,
      category: 1,
      rank: 3,
      zoneIds: [960],
    },
  },
  sRanks: [
    2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964,
    2965, 2966, 2967, 2968, 2969, 4374, 4375, 4376, 4377, 4378, 4380, 5984,
    5985, 5986, 5987, 5988, 5989, 8653, 8890, 8895, 8900, 8905, 8910, 10617,
    10618, 10619, 10620, 10621, 10622,
  ],
  aRanks: [
    2936, 2937, 2938, 2939, 2940, 2941, 2942, 2943, 2944, 2945, 2946, 2947,
    2948, 2949, 2950, 2951, 2952, 4362, 4363, 4364, 4365, 4366, 4367, 4368,
    4369, 4370, 4371, 4372, 4373, 5990, 5991, 5992, 5993, 5994, 5995, 5996,
    5997, 5998, 5999, 6000, 6001, 8654, 8655, 8891, 8892, 8896, 8897, 8901,
    8902, 8906, 8907, 8911, 8912, 10623, 10624, 10625, 10626, 10627, 10628,
    10629, 10630, 10631, 10632, 10633, 10634,
  ],
  bRanks: [
    2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928, 2929, 2930,
    2931, 2932, 2933, 2934, 2935, 4350, 4351, 4352, 4353, 4354, 4355, 4356,
    4357, 4358, 4359, 4360, 4361, 6002, 6003, 6004, 6005, 6006, 6007, 6008,
    6009, 6010, 6011, 6012, 6013, 8656, 8657, 8893, 8894, 8898, 8899, 8903,
    8904, 8908, 8909, 8913, 8914, 10635, 10636, 10637, 10638, 10639, 10640,
    10641, 10642, 10643, 10644, 10645, 10646,
  ],
  specials: [8915, 8916, 10615, 10616],
  fates: [655, 887, 3783, 3789, 6290, 6392, 8234, 8822, 10269, 10400],
};

export { TMobCategory, TMobRank, mobData, type MobData };
