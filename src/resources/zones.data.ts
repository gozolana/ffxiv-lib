// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TExVersion = {
  ARealmReborn: 0,
  Heavensward: 1,
  Stormblood: 2,
  Shadowbringers: 3,
  Endwalker: 4
} as const;
type TExVersion = typeof TExVersion[keyof typeof TExVersion];

interface ExVersionData {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly css: string;
}

interface MarkerData {
  readonly x: number;
  readonly y: number;
  readonly placeNameId: number;
  readonly icon: string;
}

interface ZoneData {
  readonly id: number;
  readonly placeNameId: number;
  readonly weatherRateId: number;
  readonly sizeFactor: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly offsetZ: number;
  readonly markers: MarkerData[];
  readonly exVersionId: number;
}

interface LocationWithFlag {
  readonly label: string;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly flag: string;
}

interface FieldZoneData extends ZoneData {
  readonly filter?: boolean;
  readonly elite: {
    readonly ids: number[];
    readonly locations: LocationWithFlag[];
  };
  readonly ss?: {
    readonly ids: number[];
    readonly locations: LocationWithFlag[];
  };
  readonly fate?: {
    readonly ids: number[];
  };
}

interface RegionData {
  readonly key: string;
  readonly css: string;
  readonly zoneIds: number[];
}

const exVersions: ExVersionData[] = [
  {
    id: 0,
    version: 2,
    locationClusteringThreshold: 0.15,
    css: "lime lighten-4"
  },
  {
    id: 1,
    version: 3,
    locationClusteringThreshold: 0.9,
    css: "blue lighten-4"
  },
  {
    id: 2,
    version: 4,
    locationClusteringThreshold: 0.9,
    css: "red lighten-4"
  },
  {
    id: 3,
    version: 5,
    locationClusteringThreshold: 0.9,
    css: "blue-grey lighten-4"
  },
  {
    id: 4,
    version: 6,
    locationClusteringThreshold: 0.9,
    css: "amber lighten-3"
  }
];

const zoneData: {
  zones: ZoneData[];
  fieldZones: FieldZoneData[];
} = {
  zones: [
    {
      id: 732,
      placeNameId: 2414,
      weatherRateId: 91,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -10000,
      markers: [
        {
          x: 1334,
          y: 1234,
          placeNameId: 2425,
          icon: "060442"
        },
        {
          x: 841,
          y: 967,
          placeNameId: 2426,
          icon: "060442"
        },
        {
          x: 657,
          y: 1271,
          placeNameId: 2427,
          icon: "060442"
        },
        {
          x: 618,
          y: 965,
          placeNameId: 2428,
          icon: "060442"
        },
        {
          x: 635,
          y: 561,
          placeNameId: 2429,
          icon: "060442"
        },
        {
          x: 1229,
          y: 755,
          placeNameId: 2431,
          icon: "060442"
        },
        {
          x: 884,
          y: 1567,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 651,
          y: 565,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 1478,
          y: 988,
          placeNameId: 2436,
          icon: "060442"
        },
        {
          x: 1459,
          y: 975,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 884,
          y: 1577,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 897,
          y: 1567,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 899,
          y: 1535,
          placeNameId: 0,
          icon: "060968"
        },
        {
          x: 901,
          y: 1520,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 898,
          y: 1607,
          placeNameId: 0,
          icon: "060971"
        }
      ],
      exVersionId: 2
    },
    {
      id: 763,
      placeNameId: 2462,
      weatherRateId: 94,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -10000,
      markers: [
        {
          x: 255,
          y: 1025,
          placeNameId: 2471,
          icon: "060442"
        },
        {
          x: 305,
          y: 716,
          placeNameId: 2472,
          icon: "060442"
        },
        {
          x: 1385,
          y: 715,
          placeNameId: 2473,
          icon: "060442"
        },
        {
          x: 1129,
          y: 1327,
          placeNameId: 2474,
          icon: "060442"
        },
        {
          x: 475,
          y: 1025,
          placeNameId: 2475,
          icon: "060442"
        },
        {
          x: 640,
          y: 890,
          placeNameId: 2476,
          icon: "060442"
        },
        {
          x: 995,
          y: 1135,
          placeNameId: 2477,
          icon: "060442"
        },
        {
          x: 1250,
          y: 975,
          placeNameId: 2478,
          icon: "060442"
        },
        {
          x: 1500,
          y: 970,
          placeNameId: 2479,
          icon: "060442"
        },
        {
          x: 1770,
          y: 780,
          placeNameId: 2480,
          icon: "060442"
        },
        {
          x: 1045,
          y: 550,
          placeNameId: 2481,
          icon: "060442"
        },
        {
          x: 1063,
          y: 665,
          placeNameId: 2482,
          icon: "060442"
        },
        {
          x: 320,
          y: 700,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 1370,
          y: 730,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 1117,
          y: 1325,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 155,
          y: 1165,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 128,
          y: 1206,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 122,
          y: 1164,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 116,
          y: 1202,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 148,
          y: 1160,
          placeNameId: 0,
          icon: "060968"
        },
        {
          x: 131,
          y: 1182,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 107,
          y: 1168,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 101,
          y: 1177,
          placeNameId: 0,
          icon: "060971"
        },
        {
          x: 178,
          y: 1170,
          placeNameId: 0,
          icon: "060935"
        }
      ],
      exVersionId: 2
    },
    {
      id: 795,
      placeNameId: 2530,
      weatherRateId: 96,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -10000,
      markers: [
        {
          x: 637,
          y: 997,
          placeNameId: 2539,
          icon: "060442"
        },
        {
          x: 1144,
          y: 1839,
          placeNameId: 2540,
          icon: "060442"
        },
        {
          x: 1146,
          y: 823,
          placeNameId: 2541,
          icon: "060442"
        },
        {
          x: 576,
          y: 392,
          placeNameId: 2542,
          icon: "060442"
        },
        {
          x: 891,
          y: 1491,
          placeNameId: 2543,
          icon: "060442"
        },
        {
          x: 1153,
          y: 1461,
          placeNameId: 2544,
          icon: "060442"
        },
        {
          x: 733,
          y: 1192,
          placeNameId: 0,
          icon: "060971"
        },
        {
          x: 1063,
          y: 255,
          placeNameId: 2546,
          icon: "060442"
        },
        {
          x: 1742,
          y: 247,
          placeNameId: 2547,
          icon: "060442"
        },
        {
          x: 770,
          y: 1171,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 1149,
          y: 1819,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 1151,
          y: 827,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 580,
          y: 401,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 785,
          y: 1142,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 779,
          y: 1138,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 755,
          y: 1140,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 715,
          y: 1183,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 800,
          y: 1159,
          placeNameId: 0,
          icon: "060968"
        },
        {
          x: 831,
          y: 1219,
          placeNameId: 0,
          icon: "060935"
        }
      ],
      exVersionId: 2
    },
    {
      id: 827,
      placeNameId: 2545,
      weatherRateId: 100,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 475,
      offsetZ: -10000,
      markers: [
        {
          x: 944,
          y: 649,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 952,
          y: 651,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 936,
          y: 631,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 928,
          y: 659,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 938,
          y: 641,
          placeNameId: 0,
          icon: "060968"
        },
        {
          x: 1511,
          y: 1317,
          placeNameId: 2888,
          icon: "060442"
        },
        {
          x: 969,
          y: 1196,
          placeNameId: 2887,
          icon: "060442"
        },
        {
          x: 488,
          y: 1436,
          placeNameId: 2886,
          icon: "060442"
        },
        {
          x: 1150,
          y: 1501,
          placeNameId: 2889,
          icon: "060442"
        },
        {
          x: 1589,
          y: 933,
          placeNameId: 2890,
          icon: "060442"
        },
        {
          x: 423,
          y: 1356,
          placeNameId: 2891,
          icon: "060442"
        },
        {
          x: 1817,
          y: 1080,
          placeNameId: 2892,
          icon: "060442"
        },
        {
          x: 958,
          y: 594,
          placeNameId: 0,
          icon: "060971"
        },
        {
          x: 437,
          y: 1351,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 1805,
          y: 1082,
          placeNameId: 0,
          icon: "060959"
        },
        {
          x: 962,
          y: 623,
          placeNameId: 0,
          icon: "060959"
        }
      ],
      exVersionId: 2
    },
    {
      id: 1055,
      placeNameId: 4043,
      weatherRateId: 148,
      sizeFactor: 100,
      offsetX: -175,
      offsetY: 138,
      offsetZ: -1,
      markers: [
        {
          x: 700,
          y: 560,
          placeNameId: 4238,
          icon: "060442"
        },
        {
          x: 1370,
          y: 420,
          placeNameId: 4239,
          icon: "060442"
        },
        {
          x: 690,
          y: 840,
          placeNameId: 4240,
          icon: "060442"
        },
        {
          x: 1045,
          y: 773,
          placeNameId: 4241,
          icon: "060442"
        },
        {
          x: 1199,
          y: 759,
          placeNameId: 4242,
          icon: "060442"
        },
        {
          x: 1283,
          y: 915,
          placeNameId: 4243,
          icon: "060442"
        },
        {
          x: 1450,
          y: 1150,
          placeNameId: 4244,
          icon: "060442"
        },
        {
          x: 870,
          y: 1175,
          placeNameId: 4245,
          icon: "060442"
        },
        {
          x: 1461,
          y: 1385,
          placeNameId: 4246,
          icon: "060442"
        },
        {
          x: 409,
          y: 1366,
          placeNameId: 0,
          icon: "060467"
        }
      ],
      exVersionId: 0
    }
  ],
  fieldZones: [
    {
      id: 134,
      placeNameId: 30,
      weatherRateId: 16,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -1,
      markers: [
        {
          x: 980,
          y: 1166,
          placeNameId: 179,
          icon: "060442"
        },
        {
          x: 1214,
          y: 1296,
          placeNameId: 183,
          icon: "060442"
        },
        {
          x: 1207,
          y: 788,
          placeNameId: 184,
          icon: "060448"
        },
        {
          x: 966,
          y: 942,
          placeNameId: 185,
          icon: "060442"
        },
        {
          x: 882,
          y: 810,
          placeNameId: 187,
          icon: "060442"
        },
        {
          x: 1036,
          y: 714,
          placeNameId: 188,
          icon: "060442"
        },
        {
          x: 724,
          y: 836,
          placeNameId: 190,
          icon: "060442"
        },
        {
          x: 832,
          y: 378,
          placeNameId: 191,
          icon: "060442"
        },
        {
          x: 1012,
          y: 568,
          placeNameId: 192,
          icon: "060442"
        },
        {
          x: 532,
          y: 710,
          placeNameId: 194,
          icon: "060442"
        },
        {
          x: 980,
          y: 1186,
          placeNameId: 29,
          icon: "060441"
        },
        {
          x: 1232,
          y: 1312,
          placeNameId: 31,
          icon: "060441"
        },
        {
          x: 859,
          y: 290,
          placeNameId: 32,
          icon: "060441"
        },
        {
          x: 650,
          y: 422,
          placeNameId: 33,
          icon: "060441"
        },
        {
          x: 1215,
          y: 828,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1220,
          y: 815,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1255,
          y: 767,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1228,
          y: 816,
          placeNameId: 0,
          icon: "060434"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2962,
          2945,
          2928
        ],
        locations: [
          {
            label: "",
            x: 16.55,
            y: 7.8500000000000005,
            z: 0.35348251350000004,
            flag: "111"
          },
          {
            label: "",
            x: 18.650000000000002,
            y: 9.5,
            z: 0.350645,
            flag: "111"
          },
          {
            label: "",
            x: 15.950000000000001,
            y: 10.850000000000001,
            z: 0.252528238,
            flag: "111"
          },
          {
            label: "",
            x: 17.150000000000002,
            y: 11.450000000000001,
            z: 0.34153943649999996,
            flag: "111"
          },
          {
            label: "",
            x: 13.950000000000001,
            y: 11.65,
            z: 0.358959433,
            flag: "111"
          },
          {
            label: "",
            x: 18.349999999999998,
            y: 13.3,
            z: 0.1734425355,
            flag: "111"
          },
          {
            label: "",
            x: 13.850000000000001,
            y: 13.600000000000001,
            z: 0.277701168,
            flag: "111"
          },
          {
            label: "",
            x: 20.349999999999998,
            y: 13.7,
            z: 0.45614397900000003,
            flag: "111"
          },
          {
            label: "",
            x: 16.349999999999998,
            y: 14.05,
            z: 0.17856255850000002,
            flag: "111"
          },
          {
            label: "",
            x: 15.100000000000001,
            y: 15.350000000000001,
            z: 0.14707283,
            flag: "111"
          },
          {
            label: "",
            x: 20.750000000000004,
            y: 15.55,
            z: 0.4990211485,
            flag: "111"
          },
          {
            label: "",
            x: 18.750000000000004,
            y: 16.349999999999998,
            z: 0.435728862,
            flag: "111"
          },
          {
            label: "",
            x: 23.250000000000004,
            y: 16.95,
            z: 0.7122232715,
            flag: "111"
          },
          {
            label: "",
            x: 17.150000000000002,
            y: 17.150000000000002,
            z: 0.3895763585,
            flag: "111"
          },
          {
            label: "",
            x: 18.45,
            y: 18.2,
            z: 0.4719838905,
            flag: "111"
          },
          {
            label: "",
            x: 21.05,
            y: 18.250000000000004,
            z: 0.5537964,
            flag: "111"
          },
          {
            label: "",
            x: 23.849999999999998,
            y: 19.750000000000004,
            z: 0.6480625,
            flag: "111"
          },
          {
            label: "",
            x: 19.250000000000004,
            y: 20.349999999999998,
            z: 0.4642851305,
            flag: "111"
          },
          {
            label: "",
            x: 24.45,
            y: 20.95,
            z: 0.5999427035,
            flag: "111"
          },
          {
            label: "",
            x: 20.250000000000004,
            y: 21.3,
            z: 0.456604557,
            flag: "111"
          },
          {
            label: "",
            x: 19.849999999999998,
            y: 22.45,
            z: 0.4249203495,
            flag: "111"
          },
          {
            label: "",
            x: 22.95,
            y: 22.55,
            z: 0.489301674,
            flag: "111"
          },
          {
            label: "",
            x: 25.150000000000002,
            y: 23.45,
            z: 0.4901537705,
            flag: "111"
          },
          {
            label: "",
            x: 23.250000000000004,
            y: 24.150000000000002,
            z: 0.47395235,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 135,
      placeNameId: 31,
      weatherRateId: 17,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -1,
      markers: [
        {
          x: 1239,
          y: 1125,
          placeNameId: 195,
          icon: "060442"
        },
        {
          x: 1307,
          y: 1052,
          placeNameId: 196,
          icon: "060442"
        },
        {
          x: 985,
          y: 1143,
          placeNameId: 198,
          icon: "060442"
        },
        {
          x: 1112,
          y: 1371,
          placeNameId: 199,
          icon: "060442"
        },
        {
          x: 1555,
          y: 956,
          placeNameId: 200,
          icon: "060448"
        },
        {
          x: 1695,
          y: 815,
          placeNameId: 201,
          icon: "060442"
        },
        {
          x: 1349,
          y: 707,
          placeNameId: 202,
          icon: "060442"
        },
        {
          x: 1545,
          y: 590,
          placeNameId: 204,
          icon: "060442"
        },
        {
          x: 1175,
          y: 1631,
          placeNameId: 337,
          icon: "060448"
        },
        {
          x: 890,
          y: 1716,
          placeNameId: 338,
          icon: "060442"
        },
        {
          x: 1010,
          y: 1870,
          placeNameId: 339,
          icon: "060442"
        },
        {
          x: 1041,
          y: 1697,
          placeNameId: 340,
          icon: "060442"
        },
        {
          x: 1130,
          y: 1959,
          placeNameId: 341,
          icon: "060442"
        },
        {
          x: 973,
          y: 1140,
          placeNameId: 28,
          icon: "060441"
        },
        {
          x: 1250,
          y: 678,
          placeNameId: 30,
          icon: "060441"
        },
        {
          x: 1594,
          y: 497,
          placeNameId: 32,
          icon: "060441"
        },
        {
          x: 1719,
          y: 634,
          placeNameId: 32,
          icon: "060441"
        },
        {
          x: 1526,
          y: 945,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1583,
          y: 974,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1180,
          y: 1697,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1070,
          y: 1628,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1224,
          y: 1699,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1019,
          y: 1887,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 979,
          y: 1871,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 1514,
          y: 945,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1210,
          y: 1680,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1622,
          y: 916,
          placeNameId: 425,
          icon: "060441"
        },
        {
          x: 1292,
          y: 1738,
          placeNameId: 460,
          icon: "060456"
        },
        {
          x: 1302,
          y: 1758,
          placeNameId: 1377,
          icon: "060414"
        },
        {
          x: 1198,
          y: 1692,
          placeNameId: 0,
          icon: "063970"
        }
      ],
      exVersionId: 0,
      filter: true,
      elite: {
        ids: [
          2963,
          2946,
          2929
        ],
        locations: [
          {
            label: "4",
            x: 30.150000000000002,
            y: 14.350000000000001,
            z: 0.8193056999999999,
            flag: "111"
          },
          {
            label: "2",
            x: 32.949999999999996,
            y: 15.950000000000001,
            z: 0.74787665,
            flag: "111"
          },
          {
            label: "3",
            x: 31.5,
            y: 16.45,
            z: 0.7212437,
            flag: "111"
          },
          {
            label: "5",
            x: 29,
            y: 16.95,
            z: 0.7562977719999999,
            flag: "111"
          },
          {
            label: "1",
            x: 33.449999999999996,
            y: 17.500000000000004,
            z: 0.6697264,
            flag: "111"
          },
          {
            label: "6",
            x: 28.55,
            y: 18.2,
            z: 0.710331347,
            flag: "111"
          },
          {
            label: "7",
            x: 28.650000000000002,
            y: 20.45,
            z: 0.57958455,
            flag: "111"
          },
          {
            label: "8",
            x: 25.150000000000002,
            y: 22.45,
            z: 0.4328820795,
            flag: "111"
          },
          {
            label: "9",
            x: 25.900000000000002,
            y: 24.849999999999998,
            z: 0.324538822,
            flag: "111"
          },
          {
            label: "10",
            x: 26.45,
            y: 26.349999999999998,
            z: 0.4058501,
            flag: "111"
          },
          {
            label: "11",
            x: 24.2,
            y: 26.55,
            z: 0.6295389855,
            flag: "111"
          },
          {
            label: "12",
            x: 20.250000000000004,
            y: 32.05,
            z: 0.5321032875,
            flag: "111"
          },
          {
            label: "17",
            x: 19.95,
            y: 34.349999999999994,
            z: 0.2928758885,
            flag: "111"
          },
          {
            label: "13",
            x: 22.650000000000002,
            y: 34.55,
            z: 0.406657889,
            flag: "111"
          },
          {
            label: "19",
            x: 16.849999999999998,
            y: 35.25,
            z: 0.0072261705,
            flag: "111"
          },
          {
            label: "18",
            x: 19.250000000000004,
            y: 35.449999999999996,
            z: 0.05485074605,
            flag: "111"
          },
          {
            label: "16",
            x: 20.650000000000002,
            y: 35.55,
            z: 0.404682515,
            flag: "111"
          },
          {
            label: "14",
            x: 23.150000000000002,
            y: 35.949999999999996,
            z: 0.576305027,
            flag: "111"
          },
          {
            label: "20",
            x: 20.05,
            y: 37.5,
            z: 0.04418635,
            flag: "111"
          },
          {
            label: "15",
            x: 22.95,
            y: 38.25,
            z: 0.3226702,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 137,
      placeNameId: 32,
      weatherRateId: 18,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 7,
      markers: [
        {
          x: 1403,
          y: 1667,
          placeNameId: 205,
          icon: "060442"
        },
        {
          x: 1564,
          y: 1444,
          placeNameId: 206,
          icon: "060448"
        },
        {
          x: 1631,
          y: 1412,
          placeNameId: 208,
          icon: "060456"
        },
        {
          x: 1247,
          y: 1457,
          placeNameId: 209,
          icon: "060442"
        },
        {
          x: 1369,
          y: 1115,
          placeNameId: 210,
          icon: "060456"
        },
        {
          x: 1521,
          y: 1104,
          placeNameId: 211,
          icon: "060442"
        },
        {
          x: 685,
          y: 1180,
          placeNameId: 212,
          icon: "060414"
        },
        {
          x: 650,
          y: 1461,
          placeNameId: 213,
          icon: "060442"
        },
        {
          x: 683,
          y: 1329,
          placeNameId: 214,
          icon: "060442"
        },
        {
          x: 1046,
          y: 1246,
          placeNameId: 215,
          icon: "060456"
        },
        {
          x: 963,
          y: 1022,
          placeNameId: 216,
          icon: "060448"
        },
        {
          x: 1287,
          y: 1022,
          placeNameId: 217,
          icon: "060442"
        },
        {
          x: 911,
          y: 1071,
          placeNameId: 30,
          icon: "060441"
        },
        {
          x: 892,
          y: 1764,
          placeNameId: 31,
          icon: "060441"
        },
        {
          x: 1271,
          y: 1868,
          placeNameId: 31,
          icon: "060441"
        },
        {
          x: 1103,
          y: 909,
          placeNameId: 34,
          icon: "060441"
        },
        {
          x: 1514,
          y: 1491,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1447,
          y: 1471,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1490,
          y: 1512,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1005,
          y: 1027,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1039,
          y: 1047,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 988,
          y: 987,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1550,
          y: 1497,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 971,
          y: 999,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1010,
          y: 1281,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1782,
          y: 1506,
          placeNameId: 229,
          icon: "060442"
        }
      ],
      exVersionId: 0,
      filter: true,
      elite: {
        ids: [
          2964,
          2947,
          2930
        ],
        locations: [
          {
            label: "B4",
            x: 28.95,
            y: 19.3,
            z: 0.69067185,
            flag: "010"
          },
          {
            label: "B5",
            x: 30.45,
            y: 19.250000000000004,
            z: 0.6917844695,
            flag: "010"
          },
          {
            label: "B6",
            x: 31.05,
            y: 19.95,
            z: 0.6936290195000001,
            flag: "010"
          },
          {
            label: "B2",
            x: 25.55,
            y: 20.45,
            z: 0.72749135,
            flag: "010"
          },
          {
            label: "B3",
            x: 28.650000000000002,
            y: 20.650000000000002,
            z: 0.6921292205,
            flag: "010"
          },
          {
            label: "B7",
            x: 29.7,
            y: 21.4,
            z: 0,
            flag: "010"
          },
          {
            label: "B1",
            x: 25.349999999999998,
            y: 21.849999999999998,
            z: 0.71782815,
            flag: "010"
          },
          {
            label: "18",
            x: 27.599999999999998,
            y: 25.05,
            z: 0.36099942000000007,
            flag: "101"
          },
          {
            label: "17",
            x: 30.150000000000002,
            y: 25.05,
            z: 0.284748192,
            flag: "101"
          },
          {
            label: "2",
            x: 20.3,
            y: 25.150000000000002,
            z: 0.369723339,
            flag: "111"
          },
          {
            label: "1",
            x: 22.250000000000004,
            y: 25.2,
            z: 0.3854617775,
            flag: "111"
          },
          {
            label: "3",
            x: 18.250000000000004,
            y: 26.250000000000004,
            z: 0.2780194755,
            flag: "111"
          },
          {
            label: "19",
            x: 28.150000000000002,
            y: 26.55,
            z: 0.30533184050000006,
            flag: "101"
          },
          {
            label: "16",
            x: 30.650000000000002,
            y: 26.7,
            z: 0.080354805,
            flag: "101"
          },
          {
            label: "15",
            x: 32.05,
            y: 27.250000000000004,
            z: 0.017359695,
            flag: "101"
          },
          {
            label: "4",
            x: 17.849999999999998,
            y: 27.55,
            z: 0.313408222,
            flag: "111"
          },
          {
            label: "20",
            x: 28.400000000000002,
            y: 27.95,
            z: 0.29677696200000003,
            flag: "101"
          },
          {
            label: "14",
            x: 21.500000000000004,
            y: 28.349999999999998,
            z: 0.3365437825,
            flag: "111"
          },
          {
            label: "6",
            x: 14.75,
            y: 28.849999999999998,
            z: 0.37567649849999996,
            flag: "111"
          },
          {
            label: "13",
            x: 21.3,
            y: 29.55,
            z: 0.33015843899999997,
            flag: "111"
          },
          {
            label: "5",
            x: 17.45,
            y: 29.95,
            z: 0.36871867700000005,
            flag: "111"
          },
          {
            label: "7",
            x: 14.950000000000001,
            y: 30.650000000000002,
            z: 0.38734300600000005,
            flag: "111"
          },
          {
            label: "21",
            x: 26.650000000000002,
            y: 30.849999999999998,
            z: 0.3213969,
            flag: "101"
          },
          {
            label: "12",
            x: 21.250000000000004,
            y: 31.05,
            z: 0.40008265,
            flag: "111"
          },
          {
            label: "11",
            x: 19.55,
            y: 31.349999999999998,
            z: 0.3289323045,
            flag: "111"
          },
          {
            label: "8",
            x: 16.500000000000004,
            y: 32.75,
            z: 0.40851656999999997,
            flag: "111"
          },
          {
            label: "10",
            x: 20.45,
            y: 33.25,
            z: 0.4577005005,
            flag: "111"
          },
          {
            label: "22",
            x: 26.650000000000002,
            y: 33.15,
            z: 0.42153134999999997,
            flag: "101"
          },
          {
            label: "23",
            x: 25.95,
            y: 33.849999999999994,
            z: 0.50609226,
            flag: "101"
          },
          {
            label: "9",
            x: 16.95,
            y: 33.949999999999996,
            z: 0.515787511,
            flag: "111"
          },
          {
            label: "24",
            x: 28.95,
            y: 35.65,
            z: 0.18382466199999997,
            flag: "101"
          },
          {
            label: "25",
            x: 31.750000000000004,
            y: 36.25,
            z: 0.016355019999999998,
            flag: "101"
          }
        ]
      }
    },
    {
      id: 138,
      placeNameId: 33,
      weatherRateId: 19,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -44,
      markers: [
        {
          x: 1688,
          y: 1553,
          placeNameId: 218,
          icon: "060448"
        },
        {
          x: 1595,
          y: 1355,
          placeNameId: 219,
          icon: "060442"
        },
        {
          x: 1458,
          y: 1487,
          placeNameId: 220,
          icon: "060442"
        },
        {
          x: 1362,
          y: 1023,
          placeNameId: 222,
          icon: "060414"
        },
        {
          x: 1285,
          y: 1276,
          placeNameId: 223,
          icon: "060448"
        },
        {
          x: 1086,
          y: 1083,
          placeNameId: 224,
          icon: "060442"
        },
        {
          x: 1112,
          y: 956,
          placeNameId: 225,
          icon: "060442"
        },
        {
          x: 1041,
          y: 944,
          placeNameId: 226,
          icon: "060442"
        },
        {
          x: 928,
          y: 1080,
          placeNameId: 227,
          icon: "060442"
        },
        {
          x: 670,
          y: 605,
          placeNameId: 365,
          icon: "060442"
        },
        {
          x: 969,
          y: 943,
          placeNameId: 364,
          icon: "060442"
        },
        {
          x: 881,
          y: 1012,
          placeNameId: 364,
          icon: "060442"
        },
        {
          x: 1338,
          y: 1373,
          placeNameId: 368,
          icon: "060456"
        },
        {
          x: 601,
          y: 788,
          placeNameId: 362,
          icon: "060442"
        },
        {
          x: 1836,
          y: 1414,
          placeNameId: 30,
          icon: "060441"
        },
        {
          x: 1435,
          y: 1012,
          placeNameId: 34,
          icon: "060441"
        },
        {
          x: 1676,
          y: 1537,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1694,
          y: 1512,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1690,
          y: 1520,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1284,
          y: 1242,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1323,
          y: 1256,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1265,
          y: 1255,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1250,
          y: 1255,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1079,
          y: 1085,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1302,
          y: 1253,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1044,
          y: 962,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 932,
          y: 1108,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 733,
          y: 1430,
          placeNameId: 461,
          icon: "060456"
        },
        {
          x: 802,
          y: 816,
          placeNameId: 363,
          icon: "060554"
        },
        {
          x: 721,
          y: 1740,
          placeNameId: 228,
          icon: "060442"
        },
        {
          x: 751,
          y: 1491,
          placeNameId: 230,
          icon: "060414"
        },
        {
          x: 800,
          y: 1032,
          placeNameId: 945,
          icon: "060442"
        },
        {
          x: 800,
          y: 1070,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 804,
          y: 1051,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 864,
          y: 726,
          placeNameId: 949,
          icon: "060442"
        },
        {
          x: 236,
          y: 1702,
          placeNameId: 946,
          icon: "060442"
        },
        {
          x: 1366,
          y: 1170,
          placeNameId: 147,
          icon: "060442"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2965,
          2948,
          2931
        ],
        locations: [
          {
            label: "",
            x: 14.55,
            y: 14.25,
            z: 0.04561600000000002,
            flag: "011"
          },
          {
            label: "",
            x: 16.05,
            y: 14.55,
            z: 0.023163036499999984,
            flag: "011"
          },
          {
            label: "",
            x: 12.850000000000001,
            y: 14.55,
            z: 0.10611545550000002,
            flag: "011"
          },
          {
            label: "",
            x: 14.25,
            y: 15.8,
            z: 0.06762373500000002,
            flag: "011"
          },
          {
            label: "",
            x: 14.350000000000001,
            y: 17.05,
            z: 0.047522011,
            flag: "011"
          },
          {
            label: "",
            x: 20.250000000000004,
            y: 18.349999999999998,
            z: 0.16407260899999998,
            flag: "011"
          },
          {
            label: "",
            x: 17.099999999999998,
            y: 19.349999999999998,
            z: 0.041578149999999994,
            flag: "011"
          },
          {
            label: "",
            x: 19.55,
            y: 19.55,
            z: 0.134427455,
            flag: "011"
          },
          {
            label: "",
            x: 23.150000000000002,
            y: 21.750000000000004,
            z: 0.32361456850000003,
            flag: "111"
          },
          {
            label: "",
            x: 19.849999999999998,
            y: 21.95,
            z: 0.19115714099999997,
            flag: "011"
          },
          {
            label: "",
            x: 24.650000000000002,
            y: 22.7,
            z: 0.281386504,
            flag: "111"
          },
          {
            label: "",
            x: 26.05,
            y: 23.55,
            z: 0.30354180799999997,
            flag: "111"
          },
          {
            label: "",
            x: 27.650000000000002,
            y: 24.05,
            z: 0.334250346,
            flag: "111"
          },
          {
            label: "",
            x: 23.3,
            y: 24.599999999999998,
            z: 0.26853234049999997,
            flag: "111"
          },
          {
            label: "",
            x: 28.95,
            y: 25.2,
            z: 0.297528634,
            flag: "111"
          },
          {
            label: "",
            x: 31.250000000000004,
            y: 27.349999999999998,
            z: 0.5681440019999999,
            flag: "111"
          },
          {
            label: "",
            x: 34.05,
            y: 28.05,
            z: 0.845215244,
            flag: "111"
          },
          {
            label: "",
            x: 31.750000000000004,
            y: 28.750000000000004,
            z: 0.597988076,
            flag: "111"
          },
          {
            label: "",
            x: 30.849999999999998,
            y: 28.849999999999998,
            z: 0.5554517409999999,
            flag: "111"
          },
          {
            label: "",
            x: 32.949999999999996,
            y: 29.8,
            z: 0.5104933972000001,
            flag: "111"
          },
          {
            label: "",
            x: 16.150000000000002,
            y: 34.4,
            z: 0.052948245999999984,
            flag: "111"
          },
          {
            label: "",
            x: 13.9,
            y: 35.15,
            z: 0.03149017950000001,
            flag: "111"
          },
          {
            label: "",
            x: 16.900000000000002,
            y: 36.05,
            z: 0.031455555,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 139,
      placeNameId: 34,
      weatherRateId: 20,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -15,
      markers: [
        {
          x: 1448,
          y: 1085,
          placeNameId: 239,
          icon: "060448"
        },
        {
          x: 697,
          y: 1142,
          placeNameId: 231,
          icon: "060442"
        },
        {
          x: 502,
          y: 1128,
          placeNameId: 232,
          icon: "060442"
        },
        {
          x: 602,
          y: 1085,
          placeNameId: 233,
          icon: "060442"
        },
        {
          x: 413,
          y: 977,
          placeNameId: 234,
          icon: "060442"
        },
        {
          x: 1233,
          y: 1102,
          placeNameId: 240,
          icon: "060414"
        },
        {
          x: 1260,
          y: 1285,
          placeNameId: 241,
          icon: "060442"
        },
        {
          x: 1748,
          y: 1236,
          placeNameId: 32,
          icon: "060441"
        },
        {
          x: 1309,
          y: 821,
          placeNameId: 350,
          icon: "060441"
        },
        {
          x: 680,
          y: 1006,
          placeNameId: 350,
          icon: "060441"
        },
        {
          x: 546,
          y: 1311,
          placeNameId: 33,
          icon: "060441"
        },
        {
          x: 1462,
          y: 1118,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1438,
          y: 1114,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1480,
          y: 1113,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1452,
          y: 1138,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1260,
          y: 1269,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1242,
          y: 1281,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 693,
          y: 1159,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 682,
          y: 1137,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 1462,
          y: 1073,
          placeNameId: 0,
          icon: "060551"
        }
      ],
      exVersionId: 0,
      filter: true,
      elite: {
        ids: [
          2966,
          2949,
          2932
        ],
        locations: [
          {
            label: "7",
            x: 27.750000000000004,
            y: 19.849999999999998,
            z: 0.32145546049999996,
            flag: "111"
          },
          {
            label: "8",
            x: 28.95,
            y: 21.2,
            z: 0.16344271165,
            flag: "111"
          },
          {
            label: "9",
            x: 28.150000000000002,
            y: 21.400000000000002,
            z: 0.16469841549999997,
            flag: "111"
          },
          {
            label: "1",
            x: 10.600000000000001,
            y: 21.45,
            z: 0.12371848105000001,
            flag: "111"
          },
          {
            label: "2",
            x: 12.15,
            y: 21.750000000000004,
            z: 0.09304736735,
            flag: "111"
          },
          {
            label: "10",
            x: 28.750000000000004,
            y: 22.250000000000004,
            z: 0.1160000007,
            flag: "111"
          },
          {
            label: "3",
            x: 11.55,
            y: 22.7,
            z: 0.22105021165,
            flag: "111"
          },
          {
            label: "4",
            x: 12.65,
            y: 23.55,
            z: 0.13009069899999998,
            flag: "111"
          },
          {
            label: "17",
            x: 35.199999999999996,
            y: 23.650000000000002,
            z: 0.14561024050000002,
            flag: "111"
          },
          {
            label: "11",
            x: 27.349999999999998,
            y: 23.7,
            z: 0.09879275,
            flag: "111"
          },
          {
            label: "13",
            x: 29.45,
            y: 23.95,
            z: 0.1160000007,
            flag: "111"
          },
          {
            label: "16",
            x: 33.449999999999996,
            y: 24.05,
            z: 0.09493828,
            flag: "111"
          },
          {
            label: "14",
            x: 30.45,
            y: 25.3,
            z: 0.0910000007,
            flag: "111"
          },
          {
            label: "12",
            x: 28.05,
            y: 25.599999999999998,
            z: 0.1096307756,
            flag: "111"
          },
          {
            label: "5",
            x: 12.65,
            y: 25.599999999999998,
            z: 0.024818444499999995,
            flag: "111"
          },
          {
            label: "15",
            x: 33.25,
            y: 25.750000000000004,
            z: 0.10361376345,
            flag: "111"
          },
          {
            label: "6",
            x: 13.850000000000001,
            y: 25.849999999999998,
            z: 0.134917933235,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 140,
      placeNameId: 42,
      weatherRateId: 9,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 12,
      markers: [
        {
          x: 848,
          y: 1342,
          placeNameId: 262,
          icon: "060442"
        },
        {
          x: 1253,
          y: 1162,
          placeNameId: 263,
          icon: "060448"
        },
        {
          x: 1079,
          y: 1319,
          placeNameId: 265,
          icon: "060442"
        },
        {
          x: 982,
          y: 1341,
          placeNameId: 375,
          icon: "060442"
        },
        {
          x: 948,
          y: 1285,
          placeNameId: 376,
          icon: "060442"
        },
        {
          x: 754,
          y: 1446,
          placeNameId: 266,
          icon: "060448"
        },
        {
          x: 1351,
          y: 790,
          placeNameId: 267,
          icon: "060414"
        },
        {
          x: 1122,
          y: 838,
          placeNameId: 268,
          icon: "060442"
        },
        {
          x: 1046,
          y: 769,
          placeNameId: 269,
          icon: "060442"
        },
        {
          x: 1115,
          y: 804,
          placeNameId: 271,
          icon: "060448"
        },
        {
          x: 729,
          y: 850,
          placeNameId: 272,
          icon: "060448"
        },
        {
          x: 846,
          y: 738,
          placeNameId: 273,
          icon: "060442"
        },
        {
          x: 583,
          y: 660,
          placeNameId: 274,
          icon: "060448"
        },
        {
          x: 837,
          y: 290,
          placeNameId: 275,
          icon: "060442"
        },
        {
          x: 703,
          y: 286,
          placeNameId: 276,
          icon: "060442"
        },
        {
          x: 594,
          y: 311,
          placeNameId: 277,
          icon: "060442"
        },
        {
          x: 218,
          y: 160,
          placeNameId: 349,
          icon: "060442"
        },
        {
          x: 1505,
          y: 1187,
          placeNameId: 40,
          icon: "060441"
        },
        {
          x: 1289,
          y: 1008,
          placeNameId: 43,
          icon: "060441"
        },
        {
          x: 697,
          y: 930,
          placeNameId: 370,
          icon: "060456"
        },
        {
          x: 722,
          y: 1328,
          placeNameId: 371,
          icon: "060456"
        },
        {
          x: 522,
          y: 695,
          placeNameId: 728,
          icon: "060339"
        },
        {
          x: 778,
          y: 1398,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 733,
          y: 1427,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 712,
          y: 1415,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1235,
          y: 1158,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1235,
          y: 1187,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1092,
          y: 795,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1088,
          y: 835,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1072,
          y: 787,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1068,
          y: 760,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 717,
          y: 876,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 611,
          y: 697,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 557,
          y: 644,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 567,
          y: 680,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 553,
          y: 683,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1059,
          y: 758,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1489,
          y: 1183,
          placeNameId: 626,
          icon: "060442"
        },
        {
          x: 543,
          y: 638,
          placeNameId: 472,
          icon: "060442"
        },
        {
          x: 1340,
          y: 1260,
          placeNameId: 427,
          icon: "060441"
        },
        {
          x: 560,
          y: 703,
          placeNameId: 0,
          icon: "060935"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2957,
          2940,
          2923
        ],
        locations: [
          {
            label: "",
            x: 10.4,
            y: 5.249999999999999,
            z: 0.44657391150000003,
            flag: "011"
          },
          {
            label: "",
            x: 8.5,
            y: 5.55,
            z: 0.49360655,
            flag: "011"
          },
          {
            label: "",
            x: 12.15,
            y: 5.95,
            z: 0.39039878299999997,
            flag: "011"
          },
          {
            label: "",
            x: 14.950000000000001,
            y: 5.999999999999999,
            z: 0.028802576000000003,
            flag: "011"
          },
          {
            label: "",
            x: 10.15,
            y: 6.3500000000000005,
            z: 0.412908554,
            flag: "011"
          },
          {
            label: "",
            x: 11.950000000000001,
            y: 7.55,
            z: 0.3874337765,
            flag: "011"
          },
          {
            label: "",
            x: 14.05,
            y: 7.8500000000000005,
            z: 0.029391327000000002,
            flag: "011"
          },
          {
            label: "",
            x: 18.349999999999998,
            y: 15.05,
            z: 0.027414460499999994,
            flag: "111"
          },
          {
            label: "",
            x: 16.95,
            y: 16.55,
            z: 0.025137877,
            flag: "111"
          },
          {
            label: "",
            x: 26.849999999999998,
            y: 17.000000000000004,
            z: 0.5207904219999999,
            flag: "111"
          },
          {
            label: "",
            x: 18.250000000000004,
            y: 17.349999999999998,
            z: 0.025138444499999996,
            flag: "111"
          },
          {
            label: "",
            x: 26.250000000000004,
            y: 19.150000000000002,
            z: 0.51635376,
            flag: "111"
          },
          {
            label: "",
            x: 22.849999999999998,
            y: 20.099999999999998,
            z: 0.46318560000000003,
            flag: "111"
          },
          {
            label: "",
            x: 21.900000000000002,
            y: 22.05,
            z: 0.480747416,
            flag: "111"
          },
          {
            label: "",
            x: 21.250000000000004,
            y: 24.05,
            z: 0.05077010150000001,
            flag: "111"
          },
          {
            label: "",
            x: 22.250000000000004,
            y: 23.95,
            z: 0.0530226805,
            flag: "111"
          },
          {
            label: "",
            x: 22.8,
            y: 24.750000000000004,
            z: 0.337361712,
            flag: "111"
          },
          {
            label: "",
            x: 20.650000000000002,
            y: 25.599999999999998,
            z: 0.351327839,
            flag: "111"
          },
          {
            label: "",
            x: 26.150000000000002,
            y: 26.349999999999998,
            z: 0.4497789385,
            flag: "111"
          },
          {
            label: "",
            x: 21.349999999999998,
            y: 27.750000000000004,
            z: 0.43713874799999997,
            flag: "111"
          },
          {
            label: "",
            x: 18.95,
            y: 29.349999999999998,
            z: 0.35592820000000003,
            flag: "111"
          },
          {
            label: "",
            x: 20.250000000000004,
            y: 29.349999999999998,
            z: 0.5310241790000001,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 141,
      placeNameId: 43,
      weatherRateId: 10,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -32,
      markers: [
        {
          x: 866,
          y: 1242,
          placeNameId: 278,
          icon: "060442"
        },
        {
          x: 1008,
          y: 1208,
          placeNameId: 279,
          icon: "060442"
        },
        {
          x: 1084,
          y: 1270,
          placeNameId: 282,
          icon: "060442"
        },
        {
          x: 1088,
          y: 1374,
          placeNameId: 283,
          icon: "060442"
        },
        {
          x: 1032,
          y: 1154,
          placeNameId: 285,
          icon: "060442"
        },
        {
          x: 1260,
          y: 1550,
          placeNameId: 286,
          icon: "060442"
        },
        {
          x: 1250,
          y: 1680,
          placeNameId: 287,
          icon: "060442"
        },
        {
          x: 942,
          y: 972,
          placeNameId: 289,
          icon: "060442"
        },
        {
          x: 983,
          y: 860,
          placeNameId: 290,
          icon: "060448"
        },
        {
          x: 792,
          y: 1148,
          placeNameId: 291,
          icon: "060442"
        },
        {
          x: 768,
          y: 916,
          placeNameId: 292,
          icon: "060442"
        },
        {
          x: 1118,
          y: 752,
          placeNameId: 294,
          icon: "060442"
        },
        {
          x: 1138,
          y: 646,
          placeNameId: 295,
          icon: "060442"
        },
        {
          x: 1008,
          y: 594,
          placeNameId: 296,
          icon: "060442"
        },
        {
          x: 1344,
          y: 910,
          placeNameId: 297,
          icon: "060442"
        },
        {
          x: 1160,
          y: 1002,
          placeNameId: 298,
          icon: "060442"
        },
        {
          x: 996,
          y: 520,
          placeNameId: 46,
          icon: "060441"
        },
        {
          x: 1479,
          y: 835,
          placeNameId: 44,
          icon: "060441"
        },
        {
          x: 610,
          y: 1124,
          placeNameId: 42,
          icon: "060441"
        },
        {
          x: 1254,
          y: 1688,
          placeNameId: 45,
          icon: "060441"
        },
        {
          x: 906,
          y: 1368,
          placeNameId: 40,
          icon: "060441"
        },
        {
          x: 1024,
          y: 1584,
          placeNameId: 41,
          icon: "060441"
        },
        {
          x: 1025,
          y: 868,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1036,
          y: 853,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1012,
          y: 873,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1012,
          y: 878,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1004,
          y: 857,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 926,
          y: 984,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 748,
          y: 650,
          placeNameId: 377,
          icon: "060414"
        },
        {
          x: 909,
          y: 1358,
          placeNameId: 613,
          icon: "060442"
        },
        {
          x: 1042,
          y: 1590,
          placeNameId: 645,
          icon: "060442"
        },
        {
          x: 1139,
          y: 632,
          placeNameId: 0,
          icon: "060910"
        },
        {
          x: 793,
          y: 1134,
          placeNameId: 0,
          icon: "063973"
        }
      ],
      exVersionId: 0,
      filter: true,
      elite: {
        ids: [
          2958,
          2941,
          2924
        ],
        locations: [
          {
            label: "15",
            x: 16.3,
            y: 12.4,
            z: 0,
            flag: "111"
          },
          {
            label: "16",
            x: 18,
            y: 13.5,
            z: 0,
            flag: "111"
          },
          {
            label: "17",
            x: 21.75,
            y: 13.65,
            z: 0,
            flag: "111"
          },
          {
            label: "18",
            x: 21.9,
            y: 15.55,
            z: 0,
            flag: "111"
          },
          {
            label: "14",
            x: 16.6,
            y: 16.4,
            z: 0,
            flag: "111"
          },
          {
            label: "19",
            x: 20.8,
            y: 16.4,
            z: 0,
            flag: "111"
          },
          {
            label: "13",
            x: 18.1,
            y: 17.5,
            z: 0,
            flag: "111"
          },
          {
            label: "20",
            x: 25.4,
            y: 17.95,
            z: 0,
            flag: "111"
          },
          {
            label: "21",
            x: 27.75,
            y: 18,
            z: 0,
            flag: "111"
          },
          {
            label: "12",
            x: 17.9,
            y: 18.9,
            z: 0,
            flag: "111"
          },
          {
            label: "11",
            x: 16.3,
            y: 19.55,
            z: 0,
            flag: "111"
          },
          {
            label: "22",
            x: 29.5,
            y: 20.9,
            z: 0,
            flag: "111"
          },
          {
            label: "10",
            x: 21.6,
            y: 21.1,
            z: 0,
            flag: "111"
          },
          {
            label: "23",
            x: 27.2,
            y: 21.5,
            z: 0,
            flag: "111"
          },
          {
            label: "8",
            x: 19.2,
            y: 21.7,
            z: 0,
            flag: "111"
          },
          {
            label: "9",
            x: 16.95,
            y: 23.3,
            z: 0,
            flag: "111"
          },
          {
            label: "7",
            x: 19.45,
            y: 23.7,
            z: 0,
            flag: "111"
          },
          {
            label: "6",
            x: 18.7,
            y: 25.25,
            z: 0,
            flag: "111"
          },
          {
            label: "5",
            x: 20.45,
            y: 26.1,
            z: 0,
            flag: "111"
          },
          {
            label: "4",
            x: 25.8,
            y: 29.85,
            z: 0,
            flag: "111"
          },
          {
            label: "2",
            x: 22.4,
            y: 31.4,
            z: 0,
            flag: "111"
          },
          {
            label: "3",
            x: 23.9,
            y: 31.9,
            z: 0,
            flag: "111"
          },
          {
            label: "1",
            x: 23.7,
            y: 35,
            z: 0,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 145,
      placeNameId: 44,
      weatherRateId: 11,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -66,
      markers: [
        {
          x: 629,
          y: 1141,
          placeNameId: 300,
          icon: "060448"
        },
        {
          x: 690,
          y: 784,
          placeNameId: 301,
          icon: "060442"
        },
        {
          x: 515,
          y: 1024,
          placeNameId: 302,
          icon: "060442"
        },
        {
          x: 477,
          y: 769,
          placeNameId: 304,
          icon: "060448"
        },
        {
          x: 685,
          y: 1453,
          placeNameId: 305,
          icon: "060414"
        },
        {
          x: 947,
          y: 1302,
          placeNameId: 306,
          icon: "060442"
        },
        {
          x: 1043,
          y: 1004,
          placeNameId: 307,
          icon: "060448"
        },
        {
          x: 1209,
          y: 689,
          placeNameId: 309,
          icon: "060442"
        },
        {
          x: 1343,
          y: 1039,
          placeNameId: 310,
          icon: "060442"
        },
        {
          x: 1171,
          y: 1432,
          placeNameId: 311,
          icon: "060442"
        },
        {
          x: 1394,
          y: 728,
          placeNameId: 56,
          icon: "060441"
        },
        {
          x: 460,
          y: 1366,
          placeNameId: 43,
          icon: "060441"
        },
        {
          x: 846,
          y: 1515,
          placeNameId: 45,
          icon: "060441"
        },
        {
          x: 637,
          y: 1166,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 600,
          y: 1130,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 653,
          y: 1122,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 642,
          y: 1115,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 617,
          y: 1120,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 641,
          y: 1194,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 495,
          y: 824,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 488,
          y: 785,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1068,
          y: 1016,
          placeNameId: 0,
          icon: "060412"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2959,
          2942,
          2925
        ],
        locations: [
          {
            label: "",
            x: 12.8,
            y: 15.85,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 14.5,
            y: 16.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 29.6,
            y: 17.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.8,
            y: 17.65,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 27.35,
            y: 17.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 14.65,
            y: 18.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 12.7,
            y: 18.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.3,
            y: 18.95,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 10.4,
            y: 19.1,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 26.7,
            y: 19.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 22.8,
            y: 19.65,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.4,
            y: 20,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 15.65,
            y: 20.15,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23.95,
            y: 21.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 28.1,
            y: 21.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.5,
            y: 21.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 18.95,
            y: 22.5,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23.45,
            y: 22.85,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25,
            y: 23.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.85,
            y: 24.35,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.4,
            y: 24.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 26.7,
            y: 25.05,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.85,
            y: 25.5,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.4,
            y: 25.55,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 27.9,
            y: 25.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 16.6,
            y: 25.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 14.55,
            y: 26.15,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23.4,
            y: 26.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 29.3,
            y: 26.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 15.4,
            y: 26.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.45,
            y: 28,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.55,
            y: 28.45,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 20.35,
            y: 28.55,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 12.9,
            y: 29,
            z: 0,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 146,
      placeNameId: 45,
      weatherRateId: 12,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -23,
      markers: [
        {
          x: 1213,
          y: 573,
          placeNameId: 312,
          icon: "060414"
        },
        {
          x: 890,
          y: 607,
          placeNameId: 313,
          icon: "060448"
        },
        {
          x: 1119,
          y: 481,
          placeNameId: 315,
          icon: "060442"
        },
        {
          x: 1061,
          y: 881,
          placeNameId: 316,
          icon: "060442"
        },
        {
          x: 844,
          y: 1186,
          placeNameId: 318,
          icon: "060442"
        },
        {
          x: 1194,
          y: 1260,
          placeNameId: 319,
          icon: "060442"
        },
        {
          x: 1486,
          y: 926,
          placeNameId: 320,
          icon: "060449"
        },
        {
          x: 558,
          y: 1088,
          placeNameId: 321,
          icon: "060442"
        },
        {
          x: 689,
          y: 1285,
          placeNameId: 322,
          icon: "060442"
        },
        {
          x: 725,
          y: 1416,
          placeNameId: 323,
          icon: "060448"
        },
        {
          x: 922,
          y: 1750,
          placeNameId: 324,
          icon: "060442"
        },
        {
          x: 593,
          y: 594,
          placeNameId: 43,
          icon: "060441"
        },
        {
          x: 995,
          y: 258,
          placeNameId: 44,
          icon: "060441"
        },
        {
          x: 865,
          y: 607,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 844,
          y: 614,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 839,
          y: 597,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 868,
          y: 587,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 697,
          y: 1430,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 716,
          y: 1444,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 711,
          y: 1452,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 748,
          y: 1453,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 749,
          y: 1402,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 671,
          y: 1282,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 554,
          y: 1115,
          placeNameId: 470,
          icon: "060442"
        },
        {
          x: 700,
          y: 1262,
          placeNameId: 471,
          icon: "060442"
        },
        {
          x: 1118,
          y: 647,
          placeNameId: 482,
          icon: "060442"
        },
        {
          x: 1112,
          y: 655,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1121,
          y: 640,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 554,
          y: 1110,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 740,
          y: 1262,
          placeNameId: 0,
          icon: "060467"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2960,
          2943,
          2926
        ],
        locations: [
          {
            label: "",
            x: 23.2,
            y: 7.95,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 24.65,
            y: 9.35,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 18,
            y: 10.2,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 21.25,
            y: 10.85,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 18.25,
            y: 11.2,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 24.65,
            y: 11.45,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 17.2,
            y: 11.7,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 23.8,
            y: 12.45,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 17.2,
            y: 16.95,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 19.55,
            y: 17.2,
            z: 0,
            flag: "011"
          },
          {
            label: "",
            x: 31,
            y: 18.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.7,
            y: 19.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 32.9,
            y: 19.85,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 15.95,
            y: 20.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.4,
            y: 20.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 28.5,
            y: 20.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 18.35,
            y: 21.2,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.15,
            y: 21.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 18.45,
            y: 22.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.05,
            y: 22.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 16.65,
            y: 23.15,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 16,
            y: 24.45,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.8,
            y: 24.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.4,
            y: 24.85,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.05,
            y: 25.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.15,
            y: 26.35,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 20.25,
            y: 28.5,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.6,
            y: 29.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23.85,
            y: 30.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 18.85,
            y: 30.55,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.2,
            y: 32.15,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 16.85,
            y: 33.05,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23.45,
            y: 33.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.8,
            y: 34.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 28.5,
            y: 34.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 13.8,
            y: 34.85,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 16.1,
            y: 36.8,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.45,
            y: 36.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.1,
            y: 38.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 22.5,
            y: 38.65,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 14.75,
            y: 38.85,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.1,
            y: 40.85,
            z: 0,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 147,
      placeNameId: 46,
      weatherRateId: 13,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -39,
      markers: [
        {
          x: 1043,
          y: 1440,
          placeNameId: 325,
          icon: "060448"
        },
        {
          x: 1071,
          y: 1241,
          placeNameId: 326,
          icon: "060442"
        },
        {
          x: 932,
          y: 1264,
          placeNameId: 327,
          icon: "060442"
        },
        {
          x: 1269,
          y: 1086,
          placeNameId: 328,
          icon: "060442"
        },
        {
          x: 1215,
          y: 968,
          placeNameId: 329,
          icon: "060442"
        },
        {
          x: 1157,
          y: 1036,
          placeNameId: 329,
          icon: "060442"
        },
        {
          x: 967,
          y: 824,
          placeNameId: 329,
          icon: "060442"
        },
        {
          x: 972,
          y: 1042,
          placeNameId: 331,
          icon: "060448"
        },
        {
          x: 723,
          y: 666,
          placeNameId: 332,
          icon: "060442"
        },
        {
          x: 728,
          y: 798,
          placeNameId: 333,
          icon: "060414"
        },
        {
          x: 1058,
          y: 1541,
          placeNameId: 43,
          icon: "060441"
        },
        {
          x: 1045,
          y: 1478,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1080,
          y: 1470,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 997,
          y: 993,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 984,
          y: 966,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 994,
          y: 1499,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1021,
          y: 1057,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 930,
          y: 616,
          placeNameId: 67,
          icon: "060441"
        },
        {
          x: 1084,
          y: 1458,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 975,
          y: 980,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 911,
          y: 1054,
          placeNameId: 430,
          icon: "060414"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2961,
          2944,
          2927
        ],
        locations: [
          {
            label: "",
            x: 16.05,
            y: 14.65,
            z: 1.23177425,
            flag: "111"
          },
          {
            label: "",
            x: 17.250000000000004,
            y: 15.65,
            z: 1.2279446,
            flag: "111"
          },
          {
            label: "",
            x: 16.05,
            y: 15.9,
            z: 1.2359528705,
            flag: "111"
          },
          {
            label: "",
            x: 19.05,
            y: 16.750000000000004,
            z: 1.13261215,
            flag: "111"
          },
          {
            label: "",
            x: 16.95,
            y: 16.95,
            z: 1.19120855,
            flag: "111"
          },
          {
            label: "",
            x: 18.250000000000004,
            y: 17.500000000000004,
            z: 1.14778075,
            flag: "111"
          },
          {
            label: "",
            x: 18.750000000000004,
            y: 18.000000000000004,
            z: 1.09155005,
            flag: "111"
          },
          {
            label: "",
            x: 15.5,
            y: 18.55,
            z: 1.1785938,
            flag: "111"
          },
          {
            label: "",
            x: 16.349999999999998,
            y: 19.349999999999998,
            z: 1.0949097500000002,
            flag: "111"
          },
          {
            label: "",
            x: 23.95,
            y: 22.8,
            z: 0.6673190025,
            flag: "111"
          },
          {
            label: "",
            x: 24.3,
            y: 23.150000000000002,
            z: 0.6278721810000001,
            flag: "111"
          },
          {
            label: "",
            x: 23.650000000000002,
            y: 24.150000000000002,
            z: 0.6027493855,
            flag: "111"
          },
          {
            label: "",
            x: 21.05,
            y: 25.05,
            z: 0.62564579,
            flag: "111"
          },
          {
            label: "",
            x: 23.6,
            y: 25.250000000000004,
            z: 0.6111016499999999,
            flag: "111"
          },
          {
            label: "",
            x: 23.45,
            y: 26.349999999999998,
            z: 0.554047604,
            flag: "111"
          },
          {
            label: "",
            x: 22.2,
            y: 27.05,
            z: 0.5161609415,
            flag: "111"
          },
          {
            label: "",
            x: 20.650000000000002,
            y: 27.849999999999998,
            z: 0.43945881965,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 148,
      placeNameId: 54,
      weatherRateId: 3,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -40,
      markers: [
        {
          x: 1151,
          y: 725,
          placeNameId: 52,
          icon: "060441"
        },
        {
          x: 1440,
          y: 791,
          placeNameId: 55,
          icon: "060441"
        },
        {
          x: 1185,
          y: 1575,
          placeNameId: 56,
          icon: "060441"
        },
        {
          x: 521,
          y: 661,
          placeNameId: 57,
          icon: "060441"
        },
        {
          x: 1151,
          y: 745,
          placeNameId: 87,
          icon: "060442"
        },
        {
          x: 721,
          y: 752,
          placeNameId: 88,
          icon: "060442"
        },
        {
          x: 1244,
          y: 926,
          placeNameId: 89,
          icon: "060442"
        },
        {
          x: 1107,
          y: 921,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1112,
          y: 941,
          placeNameId: 90,
          icon: "060448"
        },
        {
          x: 1305,
          y: 991,
          placeNameId: 91,
          icon: "060442"
        },
        {
          x: 1481,
          y: 961,
          placeNameId: 92,
          icon: "060442"
        },
        {
          x: 1340,
          y: 1160,
          placeNameId: 93,
          icon: "060442"
        },
        {
          x: 1037,
          y: 1059,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1062,
          y: 1248,
          placeNameId: 95,
          icon: "060442"
        },
        {
          x: 860,
          y: 949,
          placeNameId: 96,
          icon: "060442"
        },
        {
          x: 904,
          y: 1372,
          placeNameId: 97,
          icon: "060414"
        },
        {
          x: 1207,
          y: 1350,
          placeNameId: 98,
          icon: "060442"
        },
        {
          x: 1392,
          y: 1455,
          placeNameId: 99,
          icon: "060442"
        },
        {
          x: 959,
          y: 1494,
          placeNameId: 100,
          icon: "060442"
        },
        {
          x: 701,
          y: 1212,
          placeNameId: 419,
          icon: "060442"
        },
        {
          x: 432,
          y: 1092,
          placeNameId: 102,
          icon: "060414"
        },
        {
          x: 805,
          y: 1059,
          placeNameId: 103,
          icon: "060442"
        },
        {
          x: 623,
          y: 1036,
          placeNameId: 104,
          icon: "060442"
        },
        {
          x: 511,
          y: 958,
          placeNameId: 105,
          icon: "060442"
        },
        {
          x: 469,
          y: 815,
          placeNameId: 106,
          icon: "060442"
        },
        {
          x: 1007,
          y: 1049,
          placeNameId: 94,
          icon: "060448"
        },
        {
          x: 1040,
          y: 1006,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1020,
          y: 1075,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1200,
          y: 1340,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1045,
          y: 1107,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1346,
          y: 717,
          placeNameId: 348,
          icon: "060442"
        },
        {
          x: 800,
          y: 904,
          placeNameId: 439,
          icon: "060442"
        },
        {
          x: 725,
          y: 738,
          placeNameId: 473,
          icon: "060442"
        },
        {
          x: 1242,
          y: 1349,
          placeNameId: 475,
          icon: "060456"
        },
        {
          x: 971,
          y: 1090,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 713,
          y: 740,
          placeNameId: 0,
          icon: "060467"
        }
      ],
      exVersionId: 0,
      filter: true,
      elite: {
        ids: [
          2953,
          2936,
          2919
        ],
        locations: [
          {
            label: "14",
            x: 28.750000000000004,
            y: 14.450000000000001,
            z: 0.4006735055,
            flag: "111"
          },
          {
            label: "13",
            x: 21.750000000000004,
            y: 16.349999999999998,
            z: 0.45337184664999997,
            flag: "111"
          },
          {
            label: "2",
            x: 9.55,
            y: 16.95,
            z: 0.6068784334999999,
            flag: "111"
          },
          {
            label: "5",
            x: 16.650000000000002,
            y: 17.849999999999998,
            z: 1.0779131999999998,
            flag: "111"
          },
          {
            label: "12",
            x: 19.099999999999998,
            y: 18.349999999999998,
            z: 0.5004822525,
            flag: "111"
          },
          {
            label: "17",
            x: 31.150000000000002,
            y: 18.650000000000002,
            z: 0.6437055,
            flag: "111"
          },
          {
            label: "1",
            x: 10.05,
            y: 18.900000000000002,
            z: 0.509031849,
            flag: "111"
          },
          {
            label: "3",
            x: 12.100000000000001,
            y: 19.3,
            z: 1.02975367,
            flag: "111"
          },
          {
            label: "16",
            x: 29.099999999999998,
            y: 19.45,
            z: 0.43700870325,
            flag: "111"
          },
          {
            label: "4",
            x: 14.25,
            y: 19.45,
            z: 1.0038424639999999,
            flag: "111"
          },
          {
            label: "6",
            x: 15.850000000000001,
            y: 19.650000000000002,
            z: 1.0138009105,
            flag: "111"
          },
          {
            label: "15",
            x: 26.750000000000004,
            y: 20.55,
            z: 0.2982447415,
            flag: "111"
          },
          {
            label: "8",
            x: 12.75,
            y: 20.849999999999998,
            z: 0.9973825075,
            flag: "111"
          },
          {
            label: "7",
            x: 16.05,
            y: 21.05,
            z: 1.028820286,
            flag: "111"
          },
          {
            label: "9",
            x: 10.450000000000001,
            y: 21.750000000000004,
            z: 1.0107266194999998,
            flag: "111"
          },
          {
            label: "19",
            x: 28.250000000000004,
            y: 22.000000000000004,
            z: 0.39274866452,
            flag: "111"
          },
          {
            label: "20",
            x: 27.05,
            y: 22.650000000000002,
            z: 0.36470630409999993,
            flag: "111"
          },
          {
            label: "18",
            x: 29.650000000000002,
            y: 23.349999999999998,
            z: 0.6230420685,
            flag: "111"
          },
          {
            label: "10",
            x: 11.55,
            y: 23.55,
            z: 1.05354395,
            flag: "111"
          },
          {
            label: "11",
            x: 15.850000000000001,
            y: 24.000000000000004,
            z: 0.599482832,
            flag: "111"
          },
          {
            label: "21",
            x: 22.05,
            y: 24.45,
            z: 0.32151738145,
            flag: "111"
          },
          {
            label: "22",
            x: 23.45,
            y: 27.55,
            z: 0.18336894050000002,
            flag: "111"
          },
          {
            label: "23",
            x: 21.650000000000002,
            y: 30.05,
            z: 0.0680305675,
            flag: "111"
          }
        ]
      },
      fate: {
        ids: [
          887
        ]
      }
    },
    {
      id: 152,
      placeNameId: 55,
      weatherRateId: 4,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -36,
      markers: [
        {
          x: 511,
          y: 1314,
          placeNameId: 54,
          icon: "060441"
        },
        {
          x: 862,
          y: 1474,
          placeNameId: 56,
          icon: "060441"
        },
        {
          x: 446,
          y: 1094,
          placeNameId: 155,
          icon: "060456"
        },
        {
          x: 812,
          y: 1267,
          placeNameId: 158,
          icon: "060442"
        },
        {
          x: 778,
          y: 1330,
          placeNameId: 107,
          icon: "060448"
        },
        {
          x: 745,
          y: 1392,
          placeNameId: 108,
          icon: "060442"
        },
        {
          x: 1049,
          y: 1418,
          placeNameId: 110,
          icon: "060442"
        },
        {
          x: 1053,
          y: 1251,
          placeNameId: 113,
          icon: "060442"
        },
        {
          x: 1076,
          y: 1545,
          placeNameId: 111,
          icon: "060442"
        },
        {
          x: 830,
          y: 791,
          placeNameId: 112,
          icon: "060442"
        },
        {
          x: 1247,
          y: 934,
          placeNameId: 77,
          icon: "060555"
        },
        {
          x: 1409,
          y: 575,
          placeNameId: 114,
          icon: "060442"
        },
        {
          x: 991,
          y: 481,
          placeNameId: 115,
          icon: "060442"
        },
        {
          x: 1562,
          y: 688,
          placeNameId: 116,
          icon: "060442"
        },
        {
          x: 1187,
          y: 467,
          placeNameId: 117,
          icon: "060442"
        },
        {
          x: 802,
          y: 1323,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 808,
          y: 1326,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1040,
          y: 1248,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 535,
          y: 1200,
          placeNameId: 159,
          icon: "060442"
        },
        {
          x: 838,
          y: 1322,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 448,
          y: 1125,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 827,
          y: 1301,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 545,
          y: 1226,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1069,
          y: 1268,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1070,
          y: 1516,
          placeNameId: 1857,
          icon: "060414"
        },
        {
          x: 1051,
          y: 1425,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1057,
          y: 1425,
          placeNameId: 2406,
          icon: "060441"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2954,
          2937,
          2920
        ],
        locations: [
          {
            label: "",
            x: 25.05,
            y: 9.8,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 26.5,
            y: 11.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 29.5,
            y: 11.45,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.45,
            y: 11.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 28.1,
            y: 12.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.9,
            y: 13.1,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 29.9,
            y: 13.3,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.3,
            y: 15.2,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 31.9,
            y: 15.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 26.7,
            y: 16.05,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24,
            y: 16.5,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 24.8,
            y: 17.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 30.3,
            y: 17.45,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 27,
            y: 17.95,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 27.8,
            y: 18.7,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.7,
            y: 20.35,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 29,
            y: 20.5,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 31.7,
            y: 21.5,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 16.85,
            y: 21.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23,
            y: 21.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 21.25,
            y: 21.8,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 27.6,
            y: 22.6,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 17.4,
            y: 22.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 13.6,
            y: 23.25,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.3,
            y: 23.65,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 15.6,
            y: 23.9,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 27.7,
            y: 24.6,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 25.8,
            y: 25.2,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 14.35,
            y: 25.35,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.05,
            y: 25.4,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 14.5,
            y: 27.65,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 22,
            y: 28.1,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 19.95,
            y: 28.75,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 22.1,
            y: 29.6,
            z: 0,
            flag: "111"
          },
          {
            label: "",
            x: 23.8,
            y: 30.85,
            z: 0,
            flag: "111"
          }
        ]
      },
      fate: {
        ids: [
          887
        ]
      }
    },
    {
      id: 153,
      placeNameId: 56,
      weatherRateId: 5,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -4,
      markers: [
        {
          x: 656,
          y: 780,
          placeNameId: 54,
          icon: "060441"
        },
        {
          x: 1300,
          y: 764,
          placeNameId: 55,
          icon: "060441"
        },
        {
          x: 732,
          y: 826,
          placeNameId: 118,
          icon: "060442"
        },
        {
          x: 842,
          y: 975,
          placeNameId: 119,
          icon: "060448"
        },
        {
          x: 932,
          y: 854,
          placeNameId: 120,
          icon: "060414"
        },
        {
          x: 796,
          y: 1056,
          placeNameId: 121,
          icon: "060442"
        },
        {
          x: 718,
          y: 1110,
          placeNameId: 122,
          icon: "060442"
        },
        {
          x: 793,
          y: 1380,
          placeNameId: 123,
          icon: "060453"
        },
        {
          x: 660,
          y: 1480,
          placeNameId: 125,
          icon: "060414"
        },
        {
          x: 688,
          y: 1642,
          placeNameId: 127,
          icon: "060442"
        },
        {
          x: 1204,
          y: 1192,
          placeNameId: 128,
          icon: "060414"
        },
        {
          x: 1203,
          y: 953,
          placeNameId: 129,
          icon: "060453"
        },
        {
          x: 1082,
          y: 826,
          placeNameId: 130,
          icon: "060442"
        },
        {
          x: 1345,
          y: 1000,
          placeNameId: 131,
          icon: "060442"
        },
        {
          x: 1462,
          y: 964,
          placeNameId: 132,
          icon: "060442"
        },
        {
          x: 1644,
          y: 1102,
          placeNameId: 133,
          icon: "060442"
        },
        {
          x: 860,
          y: 944,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 849,
          y: 940,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1290,
          y: 815,
          placeNameId: 589,
          icon: "060442"
        },
        {
          x: 1218,
          y: 971,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 824,
          y: 1398,
          placeNameId: 0,
          icon: "060448"
        },
        {
          x: 1232,
          y: 988,
          placeNameId: 0,
          icon: "060448"
        },
        {
          x: 1186,
          y: 964,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 820,
          y: 965,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1195,
          y: 977,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 818,
          y: 1365,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1233,
          y: 955,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1225,
          y: 960,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 810,
          y: 1395,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 803,
          y: 1391,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 757,
          y: 1703,
          placeNameId: 44,
          icon: "060441"
        },
        {
          x: 1203,
          y: 985,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1202,
          y: 980,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1212,
          y: 988,
          placeNameId: 0,
          icon: "063971"
        }
      ],
      exVersionId: 0,
      filter: true,
      elite: {
        ids: [
          2955,
          2938,
          2921
        ],
        locations: [
          {
            label: "18",
            x: 27.750000000000004,
            y: 17.650000000000002,
            z: 0.156128495,
            flag: "111"
          },
          {
            label: "19",
            x: 24.349999999999998,
            y: 18.2,
            z: 0.246730385,
            flag: "111"
          },
          {
            label: "24",
            x: 16.900000000000002,
            y: 18.45,
            z: 0.1472292825,
            flag: "111"
          },
          {
            label: "23",
            x: 18.750000000000004,
            y: 18.45,
            z: 0.15402187350000002,
            flag: "111"
          },
          {
            label: "20",
            x: 22.150000000000002,
            y: 19.250000000000004,
            z: 0.11641407735,
            flag: "111"
          },
          {
            label: "25",
            x: 15.850000000000001,
            y: 19.650000000000002,
            z: 0.185854912,
            flag: "111"
          },
          {
            label: "17",
            x: 26.95,
            y: 19.900000000000002,
            z: 0.1752980615,
            flag: "111"
          },
          {
            label: "26",
            x: 17,
            y: 21.45,
            z: 0.131607105,
            flag: "111"
          },
          {
            label: "22",
            x: 21.349999999999998,
            y: 21.55,
            z: 0.11616614375,
            flag: "111"
          },
          {
            label: "27",
            x: 18.55,
            y: 22.05,
            z: 0.10799321240000001,
            flag: "111"
          },
          {
            label: "21",
            x: 22.650000000000002,
            y: 22.6,
            z: 0.09078908629999999,
            flag: "111"
          },
          {
            label: "16",
            x: 27.05,
            y: 22.750000000000004,
            z: 0.1112907617,
            flag: "111"
          },
          {
            label: "28",
            x: 16.849999999999998,
            y: 23.599999999999998,
            z: 0.1876170255,
            flag: "111"
          },
          {
            label: "13",
            x: 31.750000000000004,
            y: 23.750000000000004,
            z: 0.19263164,
            flag: "111"
          },
          {
            label: "12",
            x: 32.699999999999996,
            y: 23.95,
            z: 0.25955105,
            flag: "111"
          },
          {
            label: "11",
            x: 22.95,
            y: 24.150000000000002,
            z: 0.28469255849999997,
            flag: "111"
          },
          {
            label: "15",
            x: 28.8,
            y: 24.650000000000002,
            z: 0.06346037040000001,
            flag: "111"
          },
          {
            label: "14",
            x: 30.55,
            y: 25.650000000000002,
            z: 0.08471941259999999,
            flag: "111"
          },
          {
            label: "10",
            x: 22.650000000000002,
            y: 25.650000000000002,
            z: 0.2480567555,
            flag: "111"
          },
          {
            label: "8",
            x: 19.349999999999998,
            y: 27.349999999999998,
            z: 0.06063158640000001,
            flag: "111"
          },
          {
            label: "6",
            x: 16.2,
            y: 27.55,
            z: 0.040054715729999996,
            flag: "111"
          },
          {
            label: "9",
            x: 21.400000000000002,
            y: 27.650000000000002,
            z: 0.04463811679,
            flag: "111"
          },
          {
            label: "5",
            x: 15.75,
            y: 28.55,
            z: 0.0535643863,
            flag: "111"
          },
          {
            label: "7",
            x: 18.95,
            y: 28.7,
            z: 0.0357448934,
            flag: "111"
          },
          {
            label: "4",
            x: 17.2,
            y: 30.55,
            z: 0.041716407324999996,
            flag: "111"
          },
          {
            label: "3",
            x: 18.250000000000004,
            y: 30.95,
            z: 0.03619957149,
            flag: "111"
          },
          {
            label: "1",
            x: 16.349999999999998,
            y: 32.05,
            z: 0.0910588914,
            flag: "111"
          },
          {
            label: "2",
            x: 17.150000000000002,
            y: 32.449999999999996,
            z: 0.0824937868,
            flag: "111"
          }
        ]
      },
      fate: {
        ids: [
          887
        ]
      }
    },
    {
      id: 154,
      placeNameId: 57,
      weatherRateId: 6,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -82,
      markers: [
        {
          x: 1472,
          y: 1226,
          placeNameId: 135,
          icon: "060442"
        },
        {
          x: 1340,
          y: 1388,
          placeNameId: 136,
          icon: "060448"
        },
        {
          x: 1376,
          y: 1241,
          placeNameId: 137,
          icon: "060442"
        },
        {
          x: 1424,
          y: 1103,
          placeNameId: 138,
          icon: "060442"
        },
        {
          x: 1376,
          y: 934,
          placeNameId: 139,
          icon: "060448"
        },
        {
          x: 980,
          y: 1252,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1000,
          y: 1202,
          placeNameId: 141,
          icon: "060442"
        },
        {
          x: 716,
          y: 1217,
          placeNameId: 142,
          icon: "060442"
        },
        {
          x: 771,
          y: 1411,
          placeNameId: 143,
          icon: "060442"
        },
        {
          x: 1123,
          y: 1189,
          placeNameId: 144,
          icon: "060442"
        },
        {
          x: 991,
          y: 970,
          placeNameId: 145,
          icon: "060442"
        },
        {
          x: 1087,
          y: 1156,
          placeNameId: 146,
          icon: "060442"
        },
        {
          x: 1031,
          y: 1543,
          placeNameId: 54,
          icon: "060441"
        },
        {
          x: 1480,
          y: 1220,
          placeNameId: 53,
          icon: "060441"
        },
        {
          x: 1385,
          y: 957,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1446,
          y: 907,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1447,
          y: 903,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1443,
          y: 899,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1240,
          y: 1360,
          placeNameId: 160,
          icon: "060442"
        },
        {
          x: 1000,
          y: 1292,
          placeNameId: 140,
          icon: "060448"
        },
        {
          x: 1356,
          y: 1358,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1344,
          y: 950,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1024,
          y: 1262,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1033,
          y: 1243,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1035,
          y: 1248,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 986,
          y: 1269,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 628,
          y: 1182,
          placeNameId: 63,
          icon: "060441"
        },
        {
          x: 1469,
          y: 957,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1196,
          y: 1085,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1198,
          y: 1089,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1184,
          y: 1104,
          placeNameId: 1385,
          icon: "060442"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2956,
          2939,
          2922
        ],
        locations: [
          {
            label: "",
            x: 23.45,
            y: 19.95,
            z: 0.9056365700000001,
            flag: "111"
          },
          {
            label: "",
            x: 24.45,
            y: 20.250000000000004,
            z: 0.88953813185,
            flag: "111"
          },
          {
            label: "",
            x: 18.650000000000002,
            y: 20.349999999999998,
            z: 0.727775855,
            flag: "111"
          },
          {
            label: "",
            x: 22.650000000000002,
            y: 20.7,
            z: 0.8880658025999999,
            flag: "111"
          },
          {
            label: "",
            x: 28.650000000000002,
            y: 21.650000000000002,
            z: 0.78732711555,
            flag: "111"
          },
          {
            label: "",
            x: 27.599999999999998,
            y: 22.250000000000004,
            z: 0.7208986310000001,
            flag: "111"
          },
          {
            label: "",
            x: 25.95,
            y: 22.750000000000004,
            z: 0.709326086,
            flag: "111"
          },
          {
            label: "",
            x: 22.150000000000002,
            y: 23.750000000000004,
            z: 0.721594435,
            flag: "111"
          },
          {
            label: "",
            x: 27.95,
            y: 24.250000000000004,
            z: 0.7345954576,
            flag: "111"
          },
          {
            label: "",
            x: 16.650000000000002,
            y: 25.45,
            z: 0.5551664255,
            flag: "111"
          },
          {
            label: "",
            x: 24.750000000000004,
            y: 25.750000000000004,
            z: 0.5500955965000001,
            flag: "111"
          },
          {
            label: "",
            x: 25.849999999999998,
            y: 26.000000000000004,
            z: 0.554363146,
            flag: "111"
          },
          {
            label: "",
            x: 18.2,
            y: 27.05,
            z: 0.3135759,
            flag: "111"
          },
          {
            label: "",
            x: 27.05,
            y: 27.250000000000004,
            z: 0.6655628015,
            flag: "111"
          },
          {
            label: "",
            x: 22.45,
            y: 28.099999999999998,
            z: 0.4173974105,
            flag: "111"
          },
          {
            label: "",
            x: 15.850000000000001,
            y: 28.250000000000004,
            z: 0.31514315000000004,
            flag: "111"
          },
          {
            label: "",
            x: 24.55,
            y: 28.250000000000004,
            z: 0.4245279625,
            flag: "111"
          },
          {
            label: "",
            x: 19.45,
            y: 28.55,
            z: 0.2944315345,
            flag: "111"
          },
          {
            label: "",
            x: 18.150000000000002,
            y: 28.95,
            z: 0.20133679999999998,
            flag: "111"
          },
          {
            label: "",
            x: 21.599999999999998,
            y: 30.05,
            z: 0.3502360535,
            flag: "111"
          }
        ]
      },
      fate: {
        ids: [
          887
        ]
      }
    },
    {
      id: 155,
      placeNameId: 63,
      weatherRateId: 21,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 133,
      markers: [
        {
          x: 1237,
          y: 1383,
          placeNameId: 385,
          icon: "060448"
        },
        {
          x: 1499,
          y: 1505,
          placeNameId: 386,
          icon: "060442"
        },
        {
          x: 1259,
          y: 1144,
          placeNameId: 387,
          icon: "060442"
        },
        {
          x: 1255,
          y: 825,
          placeNameId: 388,
          icon: "060448"
        },
        {
          x: 1319,
          y: 685,
          placeNameId: 389,
          icon: "060442"
        },
        {
          x: 1294,
          y: 451,
          placeNameId: 390,
          icon: "060442"
        },
        {
          x: 1570,
          y: 579,
          placeNameId: 391,
          icon: "060442"
        },
        {
          x: 1533,
          y: 323,
          placeNameId: 392,
          icon: "060442"
        },
        {
          x: 1682,
          y: 997,
          placeNameId: 393,
          icon: "060450"
        },
        {
          x: 685,
          y: 1703,
          placeNameId: 394,
          icon: "060414"
        },
        {
          x: 791,
          y: 1718,
          placeNameId: 395,
          icon: "060442"
        },
        {
          x: 332,
          y: 1394,
          placeNameId: 396,
          icon: "060442"
        },
        {
          x: 323,
          y: 1531,
          placeNameId: 397,
          icon: "060442"
        },
        {
          x: 615,
          y: 1105,
          placeNameId: 398,
          icon: "060442"
        },
        {
          x: 963,
          y: 1372,
          placeNameId: 399,
          icon: "060414"
        },
        {
          x: 927,
          y: 766,
          placeNameId: 400,
          icon: "060442"
        },
        {
          x: 342,
          y: 507,
          placeNameId: 401,
          icon: "060414"
        },
        {
          x: 587,
          y: 773,
          placeNameId: 402,
          icon: "060448"
        },
        {
          x: 170,
          y: 721,
          placeNameId: 403,
          icon: "060442"
        },
        {
          x: 104,
          y: 1012,
          placeNameId: 404,
          icon: "060414"
        },
        {
          x: 1247,
          y: 789,
          placeNameId: 0,
          icon: "060453"
        },
        {
          x: 1034,
          y: 1606,
          placeNameId: 57,
          icon: "060441"
        },
        {
          x: 800,
          y: 1732,
          placeNameId: 67,
          icon: "060441"
        },
        {
          x: 1267,
          y: 770,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1260,
          y: 1345,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 612,
          y: 749,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1273,
          y: 760,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1238,
          y: 1360,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 599,
          y: 754,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1222,
          y: 855,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1255,
          y: 1339,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 550,
          y: 803,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1275,
          y: 795,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 858,
          y: 697,
          placeNameId: 2300,
          icon: "060441"
        },
        {
          x: 862,
          y: 689,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1289,
          y: 800,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1289,
          y: 790,
          placeNameId: 1429,
          icon: "060442"
        },
        {
          x: 1630,
          y: 721,
          placeNameId: 1792,
          icon: "060414"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2968,
          2951,
          2934
        ],
        locations: [
          {
            label: "52",
            x: 32,
            y: 7.05,
            z: 2.15856709,
            flag: "111"
          },
          {
            label: "51",
            x: 28.900000000000002,
            y: 7.8,
            z: 2.1610934449999997,
            flag: "111"
          },
          {
            label: "49",
            x: 22.95,
            y: 8.05,
            z: 2.411958105,
            flag: "111"
          },
          {
            label: "48",
            x: 24.7,
            y: 9.15,
            z: 2.2914759799999995,
            flag: "111"
          },
          {
            label: "53",
            x: 30.2,
            y: 10.65,
            z: 2.3362872599999998,
            flag: "111"
          },
          {
            label: "47",
            x: 25.349999999999998,
            y: 11.25,
            z: 2.166326295,
            flag: "111"
          },
          {
            label: "50",
            x: 28.099999999999998,
            y: 11.450000000000001,
            z: 2.069175725,
            flag: "111"
          },
          {
            label: "36",
            x: 8.950000000000001,
            y: 11.850000000000001,
            z: 0.65689205,
            flag: "111"
          },
          {
            label: "54",
            x: 30.2,
            y: 12.55,
            z: 2.1196773899999997,
            flag: "111"
          },
          {
            label: "33",
            x: 10.850000000000001,
            y: 12.850000000000001,
            z: 0.5859024049999999,
            flag: "111"
          },
          {
            label: "45",
            x: 27.05,
            y: 13.450000000000001,
            z: 1.7306341749999998,
            flag: "111"
          },
          {
            label: "35",
            x: 8.850000000000001,
            y: 13.55,
            z: 0.77656383,
            flag: "111"
          },
          {
            label: "46",
            x: 24.750000000000004,
            y: 13.55,
            z: 2.090789795,
            flag: "111"
          },
          {
            label: "32",
            x: 11.75,
            y: 14.3,
            z: 0.732487415,
            flag: "111"
          },
          {
            label: "56",
            x: 31.500000000000004,
            y: 14.3,
            z: 1.7622145100000002,
            flag: "111"
          },
          {
            label: "34",
            x: 8.75,
            y: 14.850000000000001,
            z: 0.88411682,
            flag: "111"
          },
          {
            label: "44",
            x: 28.400000000000002,
            y: 14.850000000000001,
            z: 1.7018496349999999,
            flag: "111"
          },
          {
            label: "55",
            x: 34.949999999999996,
            y: 15.350000000000001,
            z: 1.62453766,
            flag: "111"
          },
          {
            label: "30",
            x: 5.3,
            y: 15.950000000000001,
            z: 1.18994232,
            flag: "111"
          },
          {
            label: "42",
            x: 20.55,
            y: 16.2,
            z: 1.7294883749999999,
            flag: "111"
          },
          {
            label: "29",
            x: 4.1499999999999995,
            y: 16.650000000000002,
            z: 1.06057434,
            flag: "111"
          },
          {
            label: "57",
            x: 31.95,
            y: 16.95,
            z: 1.703287285,
            flag: "111"
          },
          {
            label: "28",
            x: 5.55,
            y: 18.05,
            z: 1.126683655,
            flag: "111"
          },
          {
            label: "37",
            x: 14.400000000000002,
            y: 18.05,
            z: 0.99889473,
            flag: "111"
          },
          {
            label: "31",
            x: 10.55,
            y: 18.250000000000004,
            z: 0.8554917899999999,
            flag: "111"
          },
          {
            label: "38",
            x: 15.450000000000001,
            y: 18.55,
            z: 1.257571365,
            flag: "111"
          },
          {
            label: "41",
            x: 19.55,
            y: 18.650000000000002,
            z: 1.68955948,
            flag: "111"
          },
          {
            label: "43",
            x: 21.650000000000002,
            y: 18.849999999999998,
            z: 1.745047,
            flag: "111"
          },
          {
            label: "40",
            x: 17.55,
            y: 18.8,
            z: 1.5394354249999997,
            flag: "111"
          },
          {
            label: "25",
            x: 11.55,
            y: 19.650000000000002,
            z: 1.0704624150000002,
            flag: "111"
          },
          {
            label: "24",
            x: 14.350000000000001,
            y: 19.750000000000004,
            z: 1.23054081,
            flag: "111"
          },
          {
            label: "27",
            x: 6.45,
            y: 19.750000000000004,
            z: 0.931578215,
            flag: "111"
          },
          {
            label: "7",
            x: 24.650000000000002,
            y: 19.95,
            z: 1.49960264,
            flag: "111"
          },
          {
            label: "39",
            x: 16.849999999999998,
            y: 20.45,
            z: 1.3698234999999999,
            flag: "111"
          },
          {
            label: "6",
            x: 27.150000000000002,
            y: 20.599999999999998,
            z: 1.572549285,
            flag: "111"
          },
          {
            label: "26",
            x: 8.4,
            y: 21.05,
            z: 0.92321449,
            flag: "111"
          },
          {
            label: "8",
            x: 24.150000000000002,
            y: 21.750000000000004,
            z: 1.4787379999999999,
            flag: "111"
          },
          {
            label: "5",
            x: 27.45,
            y: 22.150000000000002,
            z: 1.3882572949999998,
            flag: "111"
          },
          {
            label: "58",
            x: 34.75,
            y: 22.750000000000004,
            z: 1.539427205,
            flag: "111"
          },
          {
            label: "60",
            x: 35.849999999999994,
            y: 23.05,
            z: 1.5179648849999998,
            flag: "111"
          },
          {
            label: "59",
            x: 32.849999999999994,
            y: 23.650000000000002,
            z: 1.55506535,
            flag: "111"
          },
          {
            label: "9",
            x: 24.55,
            y: 23.750000000000004,
            z: 1.3795037849999998,
            flag: "111"
          },
          {
            label: "18",
            x: 13.450000000000001,
            y: 25.250000000000004,
            z: 1.6856672649999997,
            flag: "111"
          },
          {
            label: "17",
            x: 14.850000000000001,
            y: 25.55,
            z: 1.33261383,
            flag: "111"
          },
          {
            label: "4",
            x: 28.05,
            y: 25.650000000000002,
            z: 1.1330896,
            flag: "111"
          },
          {
            label: "10",
            x: 25.650000000000002,
            y: 25.650000000000002,
            z: 1.1028798,
            flag: "111"
          },
          {
            label: "11",
            x: 23.45,
            y: 26.849999999999998,
            z: 1.1966908200000002,
            flag: "111"
          },
          {
            label: "22",
            x: 8.950000000000001,
            y: 27.250000000000004,
            z: 1.1417520149999998,
            flag: "111"
          },
          {
            label: "21",
            x: 11,
            y: 27.250000000000004,
            z: 1.1146623450000002,
            flag: "111"
          },
          {
            label: "16",
            x: 15.75,
            y: 27.45,
            z: 1.44589722,
            flag: "111"
          },
          {
            label: "3",
            x: 29.250000000000004,
            y: 27.650000000000002,
            z: 0.94850212,
            flag: "111"
          },
          {
            label: "19",
            x: 12.65,
            y: 28.05,
            z: 1.102594595,
            flag: "111"
          },
          {
            label: "12",
            x: 21.45,
            y: 28.2,
            z: 0.97086812,
            flag: "111"
          },
          {
            label: "23",
            x: 6.6499999999999995,
            y: 28.650000000000002,
            z: 1.07601219,
            flag: "111"
          },
          {
            label: "15",
            x: 15.55,
            y: 28.750000000000004,
            z: 1.12655029,
            flag: "111"
          },
          {
            label: "20",
            x: 11.05,
            y: 28.95,
            z: 1.045871135,
            flag: "111"
          },
          {
            label: "13",
            x: 19.750000000000004,
            y: 29.150000000000002,
            z: 0.89212929,
            flag: "111"
          },
          {
            label: "14",
            x: 17.7,
            y: 29.3,
            z: 0.9544952899999999,
            flag: "111"
          },
          {
            label: "2",
            x: 30.3,
            y: 29.849999999999998,
            z: 0.8690180200000001,
            flag: "111"
          },
          {
            label: "1",
            x: 30.750000000000004,
            y: 31.05,
            z: 0.75055992,
            flag: "111"
          }
        ]
      },
      fate: {
        ids: [
          655
        ]
      }
    },
    {
      id: 156,
      placeNameId: 67,
      weatherRateId: 22,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -30,
      markers: [
        {
          x: 1064,
          y: 356,
          placeNameId: 411,
          icon: "060453"
        },
        {
          x: 866,
          y: 386,
          placeNameId: 412,
          icon: "060442"
        },
        {
          x: 639,
          y: 601,
          placeNameId: 413,
          icon: "060442"
        },
        {
          x: 871,
          y: 831,
          placeNameId: 414,
          icon: "060442"
        },
        {
          x: 516,
          y: 601,
          placeNameId: 415,
          icon: "060442"
        },
        {
          x: 1457,
          y: 590,
          placeNameId: 416,
          icon: "060448"
        },
        {
          x: 1364,
          y: 655,
          placeNameId: 418,
          icon: "060414"
        },
        {
          x: 1143,
          y: 264,
          placeNameId: 63,
          icon: "060441"
        },
        {
          x: 611,
          y: 924,
          placeNameId: 46,
          icon: "060441"
        },
        {
          x: 1454,
          y: 570,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1041,
          y: 296,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1074,
          y: 376,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1084,
          y: 365,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1453,
          y: 561,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1087,
          y: 284,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1091,
          y: 284,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1048,
          y: 384,
          placeNameId: 943,
          icon: "060442"
        },
        {
          x: 1597,
          y: 765,
          placeNameId: 941,
          icon: "060442"
        },
        {
          x: 1042,
          y: 296,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1752,
          y: 966,
          placeNameId: 420,
          icon: "060428"
        },
        {
          x: 1036,
          y: 289,
          placeNameId: 0,
          icon: "060425"
        },
        {
          x: 1059,
          y: 262,
          placeNameId: 0,
          icon: "060425"
        },
        {
          x: 1061,
          y: 289,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1050,
          y: 296,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1065,
          y: 227,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1052,
          y: 248,
          placeNameId: 1392,
          icon: "060442"
        },
        {
          x: 1063,
          y: 229,
          placeNameId: 1393,
          icon: "060442"
        },
        {
          x: 1042,
          y: 369,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 1056,
          y: 194,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1071,
          y: 287,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1075,
          y: 287,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1045,
          y: 393,
          placeNameId: 481,
          icon: "060442"
        },
        {
          x: 1082,
          y: 244,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1019,
          y: 225,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1375,
          y: 653,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1083,
          y: 284,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1066,
          y: 286,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1060,
          y: 194,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1178,
          y: 586,
          placeNameId: 4031,
          icon: "060441"
        },
        {
          x: 1700,
          y: 906,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1699,
          y: 899,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1694,
          y: 914,
          placeNameId: 0,
          icon: "063971"
        },
        {
          x: 1042,
          y: 357,
          placeNameId: 0,
          icon: "060467"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2969,
          2952,
          2935
        ],
        locations: [
          {
            label: "",
            x: 30.55,
            y: 6.3500000000000005,
            z: 0.25075227,
            flag: "011"
          },
          {
            label: "",
            x: 29.05,
            y: 6.55,
            z: 0.5213065530000001,
            flag: "011"
          },
          {
            label: "",
            x: 32.25,
            y: 6.8500000000000005,
            z: 0.20392071,
            flag: "011"
          },
          {
            label: "",
            x: 29.150000000000002,
            y: 7.7,
            z: 0.26047238380000004,
            flag: "011"
          },
          {
            label: "",
            x: 19.150000000000002,
            y: 8.05,
            z: 0.347062148,
            flag: "111"
          },
          {
            label: "",
            x: 26.8,
            y: 8.55,
            z: 0.621099844,
            flag: "011"
          },
          {
            label: "",
            x: 32.449999999999996,
            y: 8.65,
            z: 0.247268155,
            flag: "011"
          },
          {
            label: "",
            x: 27.150000000000002,
            y: 8.850000000000001,
            z: 0.40188483249999996,
            flag: "011"
          },
          {
            label: "",
            x: 32.349999999999994,
            y: 10.25,
            z: 0.5180088615,
            flag: "011"
          },
          {
            label: "",
            x: 16.05,
            y: 10.450000000000001,
            z: 0.2562139141,
            flag: "111"
          },
          {
            label: "",
            x: 13.950000000000001,
            y: 10.5,
            z: 0.25578434465,
            flag: "111"
          },
          {
            label: "",
            x: 27.45,
            y: 10.55,
            z: 0.26941188715,
            flag: "011"
          },
          {
            label: "",
            x: 24.95,
            y: 10.65,
            z: 0.24137185095000002,
            flag: "011"
          },
          {
            label: "",
            x: 23.150000000000002,
            y: 10.65,
            z: 0.268722893,
            flag: "011"
          },
          {
            label: "",
            x: 31.45,
            y: 11.350000000000001,
            z: 0.31835201602099994,
            flag: "011"
          },
          {
            label: "",
            x: 11.850000000000001,
            y: 11.850000000000001,
            z: 0.26326868000000003,
            flag: "111"
          },
          {
            label: "",
            x: 15.75,
            y: 11.8,
            z: 0.143571153,
            flag: "111"
          },
          {
            label: "",
            x: 33.55,
            y: 12.05,
            z: 0.3927566105,
            flag: "011"
          },
          {
            label: "",
            x: 13.65,
            y: 12.200000000000001,
            z: 0.1308498285,
            flag: "111"
          },
          {
            label: "",
            x: 23.45,
            y: 12.200000000000001,
            z: 0.22509713335,
            flag: "011"
          },
          {
            label: "",
            x: 25.150000000000002,
            y: 12.75,
            z: 0.030801509500000004,
            flag: "011"
          },
          {
            label: "",
            x: 26.750000000000004,
            y: 12.65,
            z: 0.06569885250000002,
            flag: "011"
          },
          {
            label: "",
            x: 28.250000000000004,
            y: 13.55,
            z: 0.122189064,
            flag: "011"
          },
          {
            label: "",
            x: 12.7,
            y: 13.75,
            z: 0.1395735025,
            flag: "111"
          },
          {
            label: "",
            x: 14.15,
            y: 13.9,
            z: 0.128515834,
            flag: "111"
          },
          {
            label: "",
            x: 9.850000000000001,
            y: 13.950000000000001,
            z: 0.26507620575,
            flag: "100"
          },
          {
            label: "",
            x: 32.449999999999996,
            y: 14.350000000000001,
            z: 0.2623859544,
            flag: "011"
          },
          {
            label: "",
            x: 28.95,
            y: 14.75,
            z: 0.1259895885,
            flag: "011"
          },
          {
            label: "",
            x: 30.150000000000002,
            y: 15.05,
            z: 0.10000764849999999,
            flag: "011"
          },
          {
            label: "",
            x: 10.65,
            y: 15.2,
            z: 0.2804061794,
            flag: "100"
          },
          {
            label: "",
            x: 16.45,
            y: 15.55,
            z: 0.301195528505,
            flag: "111"
          },
          {
            label: "",
            x: 12.65,
            y: 16.05,
            z: 0.26232063,
            flag: "100"
          },
          {
            label: "",
            x: 12.25,
            y: 16.85,
            z: 0,
            flag: "100"
          },
          {
            label: "",
            x: 16.849999999999998,
            y: 17.45,
            z: 0.5288686945,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 180,
      placeNameId: 350,
      weatherRateId: 24,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -10,
      markers: [
        {
          x: 727,
          y: 445,
          placeNameId: 235,
          icon: "060442"
        },
        {
          x: 710,
          y: 761,
          placeNameId: 236,
          icon: "060442"
        },
        {
          x: 907,
          y: 811,
          placeNameId: 237,
          icon: "060453"
        },
        {
          x: 1097,
          y: 481,
          placeNameId: 238,
          icon: "060451"
        },
        {
          x: 1220,
          y: 778,
          placeNameId: 242,
          icon: "060442"
        },
        {
          x: 698,
          y: 940,
          placeNameId: 34,
          icon: "060441"
        },
        {
          x: 1277,
          y: 775,
          placeNameId: 34,
          icon: "060441"
        },
        {
          x: 887,
          y: 811,
          placeNameId: 0,
          icon: "060448"
        },
        {
          x: 923,
          y: 822,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 917,
          y: 833,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1034,
          y: 854,
          placeNameId: 944,
          icon: "060442"
        },
        {
          x: 1032,
          y: 842,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1043,
          y: 834,
          placeNameId: 0,
          icon: "060434"
        }
      ],
      exVersionId: 0,
      elite: {
        ids: [
          2967,
          2950,
          2933
        ],
        locations: [
          {
            label: "",
            x: 26.95,
            y: 5.249999999999999,
            z: 0.315384016,
            flag: "111"
          },
          {
            label: "",
            x: 21.5,
            y: 6.8500000000000005,
            z: 0.34434565799999994,
            flag: "111"
          },
          {
            label: "",
            x: 22.45,
            y: 6.8500000000000005,
            z: 0.34415976949999993,
            flag: "111"
          },
          {
            label: "",
            x: 27.349999999999998,
            y: 7.2,
            z: 0.31516753200000003,
            flag: "111"
          },
          {
            label: "",
            x: 24.55,
            y: 7.3500000000000005,
            z: 0.3177748585,
            flag: "111"
          },
          {
            label: "",
            x: 21.750000000000004,
            y: 8.350000000000001,
            z: 0.327814932,
            flag: "111"
          },
          {
            label: "",
            x: 23.650000000000002,
            y: 9.3,
            z: 0.34429344,
            flag: "111"
          },
          {
            label: "",
            x: 21.8,
            y: 9.450000000000001,
            z: 0.34552547599999994,
            flag: "111"
          },
          {
            label: "",
            x: 21.95,
            y: 10.3,
            z: 0.35338589649999996,
            flag: "111"
          },
          {
            label: "",
            x: 15.600000000000001,
            y: 10.3,
            z: 0.16224678659999997,
            flag: "111"
          },
          {
            label: "",
            x: 15.350000000000001,
            y: 12.65,
            z: 0.426764202,
            flag: "111"
          },
          {
            label: "",
            x: 22.95,
            y: 13.25,
            z: 0.5849674604999999,
            flag: "111"
          },
          {
            label: "",
            x: 14.05,
            y: 14.05,
            z: 0.697206631,
            flag: "111"
          },
          {
            label: "",
            x: 21.400000000000002,
            y: 14.55,
            z: 0.59491585,
            flag: "111"
          },
          {
            label: "",
            x: 15.25,
            y: 14.850000000000001,
            z: 0.74591289,
            flag: "111"
          },
          {
            label: "",
            x: 18.95,
            y: 15.15,
            z: 0.90158465,
            flag: "111"
          },
          {
            label: "",
            x: 22.95,
            y: 15.15,
            z: 0.6794228364999999,
            flag: "111"
          },
          {
            label: "",
            x: 24.650000000000002,
            y: 16.150000000000002,
            z: 0.7758845000000001,
            flag: "111"
          },
          {
            label: "",
            x: 13.55,
            y: 16.250000000000004,
            z: 0.576279812,
            flag: "111"
          },
          {
            label: "",
            x: 23.000000000000004,
            y: 16.250000000000004,
            z: 0.7671140775,
            flag: "111"
          },
          {
            label: "",
            x: 14.75,
            y: 16.849999999999998,
            z: 0.666275489,
            flag: "111"
          },
          {
            label: "",
            x: 16.45,
            y: 17.750000000000004,
            z: 0.7353118905,
            flag: "111"
          },
          {
            label: "",
            x: 15.15,
            y: 17.95,
            z: 0.7340762999999999,
            flag: "111"
          }
        ]
      }
    },
    {
      id: 397,
      placeNameId: 2200,
      weatherRateId: 49,
      sizeFactor: 95,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 54,
      markers: [
        {
          x: 1483,
          y: 1738,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1503,
          y: 1707,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1504,
          y: 1704,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1464,
          y: 1728,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 771,
          y: 1039,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 741,
          y: 1026,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 222,
          y: 404,
          placeNameId: 2000,
          icon: "060441"
        },
        {
          x: 874,
          y: 1716,
          placeNameId: 2001,
          icon: "060441"
        },
        {
          x: 1466,
          y: 1874,
          placeNameId: 2300,
          icon: "060441"
        },
        {
          x: 1458,
          y: 158,
          placeNameId: 2100,
          icon: "060441"
        },
        {
          x: 1450,
          y: 302,
          placeNameId: 2224,
          icon: "060442"
        },
        {
          x: 1690,
          y: 418,
          placeNameId: 2225,
          icon: "060442"
        },
        {
          x: 1450,
          y: 494,
          placeNameId: 2207,
          icon: "060442"
        },
        {
          x: 1682,
          y: 812,
          placeNameId: 2208,
          icon: "060442"
        },
        {
          x: 1370,
          y: 1054,
          placeNameId: 2221,
          icon: "060442"
        },
        {
          x: 1754,
          y: 1256,
          placeNameId: 2222,
          icon: "060442"
        },
        {
          x: 1598,
          y: 1202,
          placeNameId: 2218,
          icon: "060442"
        },
        {
          x: 1618,
          y: 1234,
          placeNameId: 2217,
          icon: "060442"
        },
        {
          x: 1510,
          y: 1296,
          placeNameId: 2215,
          icon: "060442"
        },
        {
          x: 1212,
          y: 1294,
          placeNameId: 2216,
          icon: "060442"
        },
        {
          x: 1474,
          y: 1697,
          placeNameId: 2204,
          icon: "060453"
        },
        {
          x: 1130,
          y: 1124,
          placeNameId: 2209,
          icon: "060442"
        },
        {
          x: 926,
          y: 1074,
          placeNameId: 2228,
          icon: "060442"
        },
        {
          x: 918,
          y: 1494,
          placeNameId: 2213,
          icon: "060442"
        },
        {
          x: 766,
          y: 1012,
          placeNameId: 2220,
          icon: "060448"
        },
        {
          x: 456,
          y: 816,
          placeNameId: 2212,
          icon: "060442"
        },
        {
          x: 372,
          y: 424,
          placeNameId: 2227,
          icon: "060442"
        },
        {
          x: 534,
          y: 260,
          placeNameId: 2219,
          icon: "060442"
        },
        {
          x: 940,
          y: 266,
          placeNameId: 2214,
          icon: "060414"
        },
        {
          x: 1458,
          y: 188,
          placeNameId: 2237,
          icon: "060442"
        }
      ],
      exVersionId: 1,
      filter: true,
      elite: {
        ids: [
          4374,
          4362,
          4363,
          4350,
          4351
        ],
        locations: [
          {
            label: "14",
            x: 27.95,
            y: 7.8999999999999995,
            z: 0.768793415,
            flag: "11101"
          },
          {
            label: "15",
            x: 35.64999999999999,
            y: 9.600000000000001,
            z: 0.744143995,
            flag: "11101"
          },
          {
            label: "18",
            x: 26.25,
            y: 11.5,
            z: 0.83724251,
            flag: "11101"
          },
          {
            label: "12",
            x: 15.3,
            y: 12.150000000000002,
            z: 0.37305718649999997,
            flag: "11110"
          },
          {
            label: "11",
            x: 6.8,
            y: 12.350000000000001,
            z: 0.507485198,
            flag: "11110"
          },
          {
            label: "16",
            x: 36.199999999999996,
            y: 12.55,
            z: 1.285847785,
            flag: "11101"
          },
          {
            label: "17",
            x: 29.25,
            y: 12.95,
            z: 1.0855271800000001,
            flag: "11101"
          },
          {
            label: "13",
            x: 18.099999999999998,
            y: 13.3,
            z: 0.35005898049999995,
            flag: "11110"
          },
          {
            label: "10",
            x: 10,
            y: 13.25,
            z: 0.42811022350000005,
            flag: "11110"
          },
          {
            label: "19",
            x: 27.400000000000002,
            y: 15.850000000000001,
            z: 0.7542320900000001,
            flag: "11101"
          },
          {
            label: "9",
            x: 11.650000000000002,
            y: 17.25,
            z: 0.62446998,
            flag: "11110"
          },
          {
            label: "20",
            x: 32.5,
            y: 17.599999999999998,
            z: 1.060556255,
            flag: "11101"
          },
          {
            label: "7",
            x: 21.85,
            y: 17.5,
            z: 0.46764892450000006,
            flag: "11110"
          },
          {
            label: "8",
            x: 18.150000000000002,
            y: 19.05,
            z: 0.56662809,
            flag: "11110"
          },
          {
            label: "6",
            x: 22.1,
            y: 20.85,
            z: 0.4408845095,
            flag: "11110"
          },
          {
            label: "21",
            x: 34,
            y: 20.75,
            z: 1.5444731100000002,
            flag: "11101"
          },
          {
            label: "23",
            x: 27.849999999999998,
            y: 21.400000000000002,
            z: 1.2496968849999999,
            flag: "01101"
          },
          {
            label: "22",
            x: 33.9,
            y: 22.35,
            z: 1.0853476899999999,
            flag: "01101"
          },
          {
            label: "5",
            x: 17.35,
            y: 25.7,
            z: 1.63416781,
            flag: "11110"
          },
          {
            label: "24",
            x: 30.000000000000004,
            y: 26.95,
            z: 1.12185875,
            flag: "01101"
          },
          {
            label: "2",
            x: 23.500000000000004,
            y: 28.3,
            z: 1.584537445,
            flag: "01110"
          },
          {
            label: "4",
            x: 16.55,
            y: 29.650000000000002,
            z: 1.6296145,
            flag: "11110"
          },
          {
            label: "3",
            x: 18.8,
            y: 31.500000000000004,
            z: 0.574720065,
            flag: "01110"
          },
          {
            label: "1",
            x: 25.000000000000004,
            y: 32.349999999999994,
            z: 1.6773758,
            flag: "01101"
          }
        ]
      }
    },
    {
      id: 398,
      placeNameId: 2000,
      weatherRateId: 50,
      sizeFactor: 95,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -157,
      markers: [
        {
          x: 1546,
          y: 1090,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1476,
          y: 1068,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1479,
          y: 1047,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1514,
          y: 1076,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1499,
          y: 1062,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 1105,
          y: 876,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1087,
          y: 873,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 825,
          y: 1179,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 1856,
          y: 1356,
          placeNameId: 2200,
          icon: "060441"
        },
        {
          x: 254,
          y: 1574,
          placeNameId: 2001,
          icon: "060441"
        },
        {
          x: 366,
          y: 226,
          placeNameId: 2002,
          icon: "060441"
        },
        {
          x: 1276,
          y: 1770,
          placeNameId: 2005,
          icon: "060601"
        },
        {
          x: 1450,
          y: 222,
          placeNameId: 2029,
          icon: "060442"
        },
        {
          x: 1530,
          y: 1052,
          placeNameId: 2018,
          icon: "060453"
        },
        {
          x: 1188,
          y: 1008,
          placeNameId: 2022,
          icon: "060442"
        },
        {
          x: 1476,
          y: 1826,
          placeNameId: 2023,
          icon: "060442"
        },
        {
          x: 1274,
          y: 1896,
          placeNameId: 2024,
          icon: "060442"
        },
        {
          x: 1088,
          y: 880,
          placeNameId: 2021,
          icon: "060442"
        },
        {
          x: 1046,
          y: 748,
          placeNameId: 2055,
          icon: "060442"
        },
        {
          x: 898,
          y: 438,
          placeNameId: 2064,
          icon: "060442"
        },
        {
          x: 824,
          y: 518,
          placeNameId: 2028,
          icon: "060442"
        },
        {
          x: 350,
          y: 224,
          placeNameId: 2030,
          icon: "060442"
        },
        {
          x: 364,
          y: 260,
          placeNameId: 2007,
          icon: "060414"
        },
        {
          x: 734,
          y: 1056,
          placeNameId: 2025,
          icon: "060453"
        },
        {
          x: 522,
          y: 1804,
          placeNameId: 2061,
          icon: "060442"
        },
        {
          x: 365,
          y: 222,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1072,
          y: 862,
          placeNameId: 0,
          icon: "060935"
        }
      ],
      exVersionId: 1,
      elite: {
        ids: [
          4375,
          4364,
          4365,
          4352,
          4353
        ],
        locations: [
          {
            label: "6",
            x: 26.6,
            y: 7.6499999999999995,
            z: 2.0922999229999997,
            flag: "11101"
          },
          {
            label: "5",
            x: 33.949999999999996,
            y: 8.450000000000001,
            z: 2.092333238,
            flag: "11101"
          },
          {
            label: "20",
            x: 16.95,
            y: 10.650000000000002,
            z: 1.4389305925,
            flag: "11100"
          },
          {
            label: "4",
            x: 34.699999999999996,
            y: 13.350000000000001,
            z: 1.3207266775,
            flag: "10001"
          },
          {
            label: "19",
            x: 13.65,
            y: 14.850000000000001,
            z: 1.483997525,
            flag: "11100"
          },
          {
            label: "3",
            x: 32.55,
            y: 18.150000000000002,
            z: 1.153231232,
            flag: "10001"
          },
          {
            label: "18",
            x: 21.250000000000004,
            y: 19.95,
            z: 1.228587055,
            flag: "11101"
          },
          {
            label: "7",
            x: 29.05,
            y: 22.05,
            z: 0.973065624,
            flag: "11101"
          },
          {
            label: "8",
            x: 25.750000000000004,
            y: 24.95,
            z: 0.7495441435,
            flag: "11101"
          },
          {
            label: "2",
            x: 38.449999999999996,
            y: 25.849999999999998,
            z: 1.181100502,
            flag: "10001"
          },
          {
            label: "17",
            x: 12.45,
            y: 27.45,
            z: 1.2046798895,
            flag: "11110"
          },
          {
            label: "1",
            x: 34.599999999999994,
            y: 28.8,
            z: 1.20320776,
            flag: "10001"
          },
          {
            label: "11",
            x: 20.05,
            y: 30.250000000000004,
            z: 0.8590102749999999,
            flag: "11110"
          },
          {
            label: "9",
            x: 27.85,
            y: 31,
            z: 0.4492667,
            flag: "11110"
          },
          {
            label: "16",
            x: 14.350000000000001,
            y: 31.400000000000002,
            z: 0.7578635250000001,
            flag: "11110"
          },
          {
            label: "10",
            x: 25.1,
            y: 32.55,
            z: 0.33737366,
            flag: "11110"
          },
          {
            label: "12",
            x: 21.1,
            y: 33.8,
            z: 0.34508979500000003,
            flag: "11110"
          },
          {
            label: "15",
            x: 10.100000000000001,
            y: 35,
            z: 0.6087068,
            flag: "11110"
          },
          {
            label: "B1",
            x: 27.55,
            y: 37.25,
            z: 0.334206275,
            flag: "00010"
          },
          {
            label: "13",
            x: 18.05,
            y: 38.65,
            z: 0.76402245,
            flag: "11110"
          }
        ]
      },
      fate: {
        ids: [
          3789
        ]
      }
    },
    {
      id: 399,
      placeNameId: 2001,
      weatherRateId: 51,
      sizeFactor: 95,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 38,
      markers: [
        {
          x: 976,
          y: 831,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 979,
          y: 839,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 508,
          y: 528,
          placeNameId: 2082,
          icon: "060441"
        },
        {
          x: 804,
          y: 418,
          placeNameId: 2082,
          icon: "060441"
        },
        {
          x: 1888,
          y: 1206,
          placeNameId: 2000,
          icon: "060441"
        },
        {
          x: 1754,
          y: 1512,
          placeNameId: 2200,
          icon: "060441"
        },
        {
          x: 1462,
          y: 1030,
          placeNameId: 2032,
          icon: "060442"
        },
        {
          x: 1412,
          y: 1358,
          placeNameId: 2065,
          icon: "060442"
        },
        {
          x: 1410,
          y: 1760,
          placeNameId: 2038,
          icon: "060414"
        },
        {
          x: 988,
          y: 836,
          placeNameId: 2067,
          icon: "060448"
        },
        {
          x: 1056,
          y: 1752,
          placeNameId: 2037,
          icon: "060442"
        },
        {
          x: 433,
          y: 1079,
          placeNameId: 2034,
          icon: "060414"
        },
        {
          x: 278,
          y: 1550,
          placeNameId: 2070,
          icon: "060442"
        },
        {
          x: 558,
          y: 1726,
          placeNameId: 2036,
          icon: "060442"
        },
        {
          x: 1658,
          y: 696,
          placeNameId: 2089,
          icon: "060442"
        },
        {
          x: 1389,
          y: 816,
          placeNameId: 3590,
          icon: "060414"
        }
      ],
      exVersionId: 1,
      elite: {
        ids: [
          4376,
          4366,
          4367,
          4354,
          4355
        ],
        locations: [
          {
            label: "22",
            x: 13.45,
            y: 16.400000000000002,
            z: 1.0677063,
            flag: "11010"
          },
          {
            label: "6",
            x: 26.750000000000004,
            y: 16.349999999999998,
            z: 0.240125938,
            flag: "11001"
          },
          {
            label: "7",
            x: 26.75,
            y: 20.05,
            z: 0.38920130000000003,
            flag: "11101"
          },
          {
            label: "5",
            x: 31.7,
            y: 20.150000000000002,
            z: 0.42317852600000005,
            flag: "11101"
          },
          {
            label: "20",
            x: 9.350000000000001,
            y: 21.45,
            z: 1.1524280900000001,
            flag: "11010"
          },
          {
            label: "19",
            x: 15.100000000000001,
            y: 21.45,
            z: 1.099600985,
            flag: "11010"
          },
          {
            label: "4",
            x: 36.099999999999994,
            y: 22,
            z: 0.63783798,
            flag: "11101"
          },
          {
            label: "21",
            x: 5.45,
            y: 22.150000000000002,
            z: 1.2631367500000001,
            flag: "11010"
          },
          {
            label: "8",
            x: 24.250000000000004,
            y: 23.650000000000002,
            z: 0.32618945,
            flag: "11101"
          },
          {
            label: "3",
            x: 34.3,
            y: 24.099999999999998,
            z: 0.46259855000000005,
            flag: "11101"
          },
          {
            label: "18",
            x: 15.05,
            y: 25.400000000000002,
            z: 1.151074575,
            flag: "11110"
          },
          {
            label: "9",
            x: 27.000000000000004,
            y: 25.250000000000004,
            z: 0.344052027,
            flag: "11101"
          },
          {
            label: "2",
            x: 34.199999999999996,
            y: 26.85,
            z: 0.5599369000000001,
            flag: "11101"
          },
          {
            label: "15",
            x: 8.25,
            y: 28.150000000000002,
            z: 1.3485704049999998,
            flag: "10110"
          },
          {
            label: "1",
            x: 37.949999999999996,
            y: 28.55,
            z: 1.22480096,
            flag: "11101"
          },
          {
            label: "16",
            x: 12.350000000000001,
            y: 29.3,
            z: 1.1501893600000002,
            flag: "10110"
          },
          {
            label: "10",
            x: 26.849999999999998,
            y: 29.5,
            z: 0.9595019499999999,
            flag: "11101"
          },
          {
            label: "17",
            x: 15.5,
            y: 31.8,
            z: 0.993322145,
            flag: "10110"
          },
          {
            label: "14",
            x: 8.65,
            y: 34.05,
            z: 0.9882970600000001,
            flag: "10110"
          },
          {
            label: "13",
            x: 14.55,
            y: 35.55,
            z: 1.599259905,
            flag: "10110"
          },
          {
            label: "11",
            x: 26.3,
            y: 37,
            z: 1.822935945,
            flag: "11101"
          },
          {
            label: "12",
            x: 16.150000000000002,
            y: 37.75,
            z: 1.620362165,
            flag: "10110"
          }
        ]
      }
    },
    {
      id: 400,
      placeNameId: 2002,
      weatherRateId: 52,
      sizeFactor: 95,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -81,
      markers: [
        {
          x: 1276,
          y: 1561,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 1302,
          y: 1577,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1302,
          y: 1571,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 976,
          y: 1163,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 933,
          y: 1204,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 529,
          y: 1368,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 1212,
          y: 1692,
          placeNameId: 2000,
          icon: "060441"
        },
        {
          x: 711,
          y: 1307,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 272,
          y: 372,
          placeNameId: 2079,
          icon: "060442"
        },
        {
          x: 814,
          y: 386,
          placeNameId: 2048,
          icon: "060442"
        },
        {
          x: 1308,
          y: 442,
          placeNameId: 2049,
          icon: "060442"
        },
        {
          x: 312,
          y: 858,
          placeNameId: 2078,
          icon: "060442"
        },
        {
          x: 922,
          y: 772,
          placeNameId: 2047,
          icon: "060442"
        },
        {
          x: 1554,
          y: 682,
          placeNameId: 2044,
          icon: "060442"
        },
        {
          x: 1586,
          y: 988,
          placeNameId: 2043,
          icon: "060442"
        },
        {
          x: 466,
          y: 1322,
          placeNameId: 2046,
          icon: "060453"
        },
        {
          x: 946,
          y: 1218,
          placeNameId: 2045,
          icon: "060448"
        },
        {
          x: 326,
          y: 1696,
          placeNameId: 2051,
          icon: "060442"
        },
        {
          x: 762,
          y: 1744,
          placeNameId: 2080,
          icon: "060442"
        },
        {
          x: 1278,
          y: 1580,
          placeNameId: 2042,
          icon: "060453"
        },
        {
          x: 323,
          y: 1273,
          placeNameId: 2090,
          icon: "060414"
        },
        {
          x: 653,
          y: 1297,
          placeNameId: 2095,
          icon: "060442"
        },
        {
          x: 706,
          y: 1306,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1194,
          y: 1696,
          placeNameId: 1888,
          icon: "060414"
        }
      ],
      exVersionId: 1,
      elite: {
        ids: [
          4377,
          4368,
          4369,
          4356,
          4357
        ],
        locations: [
          {
            label: "7",
            x: 25.750000000000004,
            y: 7.8999999999999995,
            z: 2.933095395,
            flag: "10110"
          },
          {
            label: "17",
            x: 9.450000000000001,
            y: 8.3,
            z: 3.30228264,
            flag: "10101"
          },
          {
            label: "6",
            x: 28.25,
            y: 10.75,
            z: 3.1615281699999995,
            flag: "10110"
          },
          {
            label: "18",
            x: 7.3,
            y: 11.3,
            z: 1.71747155,
            flag: "11101"
          },
          {
            label: "16",
            x: 15.25,
            y: 14.600000000000001,
            z: 2.05852928,
            flag: "11001"
          },
          {
            label: "19",
            x: 7.6499999999999995,
            y: 15.850000000000001,
            z: 1.71458355,
            flag: "11101"
          },
          {
            label: "20",
            x: 6.8500000000000005,
            y: 20.250000000000004,
            z: 3.46395023,
            flag: "10101"
          },
          {
            label: "15",
            x: 11.8,
            y: 20.1,
            z: 1.89272133,
            flag: "11001"
          },
          {
            label: "5",
            x: 28.650000000000002,
            y: 20.3,
            z: 0.4584710665,
            flag: "10110"
          },
          {
            label: "8",
            x: 24.8,
            y: 20.25,
            z: 0.5856020545,
            flag: "11010"
          },
          {
            label: "4",
            x: 33.64999999999999,
            y: 20.85,
            z: 0.7393100100000001,
            flag: "10110"
          },
          {
            label: "14",
            x: 14,
            y: 23.45,
            z: 1.222225665,
            flag: "11001"
          },
          {
            label: "13",
            x: 17.8,
            y: 24.55,
            z: 1.25115473,
            flag: "11001"
          },
          {
            label: "3",
            x: 36.949999999999996,
            y: 26.1,
            z: 1.148603802,
            flag: "11110"
          },
          {
            label: "9",
            x: 26.3,
            y: 27.650000000000002,
            z: 1.0885517999999998,
            flag: "11010"
          },
          {
            label: "12",
            x: 16.8,
            y: 27.8,
            z: 1.2145691105,
            flag: "11001"
          },
          {
            label: "2",
            x: 35.95,
            y: 29.1,
            z: 0.484168196,
            flag: "11110"
          },
          {
            label: "11",
            x: 15.75,
            y: 30.45,
            z: 1.1553180895000001,
            flag: "11101"
          },
          {
            label: "10",
            x: 22.650000000000002,
            y: 30.75,
            z: 0.6007526395,
            flag: "11110"
          },
          {
            label: "1",
            x: 32.05,
            y: 32.55,
            z: 1.08465925,
            flag: "11110"
          },
          {
            label: "21",
            x: 6.3,
            y: 35.599999999999994,
            z: 2.542329865,
            flag: "10101"
          },
          {
            label: "22",
            x: 10.200000000000001,
            y: 38.55,
            z: 2.481225815,
            flag: "10101"
          }
        ]
      }
    },
    {
      id: 401,
      placeNameId: 2100,
      weatherRateId: 53,
      sizeFactor: 95,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -241,
      markers: [
        {
          x: 425,
          y: 1484,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 406,
          y: 1520,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 406,
          y: 1526,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 450,
          y: 1529,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 422,
          y: 1522,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 434,
          y: 721,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 491,
          y: 609,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 491,
          y: 629,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 287,
          y: 630,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 180,
          y: 178,
          placeNameId: 2200,
          icon: "060441"
        },
        {
          x: 126,
          y: 746,
          placeNameId: 2301,
          icon: "060441"
        },
        {
          x: 255,
          y: 1180,
          placeNameId: 2301,
          icon: "060441"
        },
        {
          x: 325,
          y: 1462,
          placeNameId: 2301,
          icon: "060441"
        },
        {
          x: 420,
          y: 1840,
          placeNameId: 2301,
          icon: "060441"
        },
        {
          x: 1858,
          y: 324,
          placeNameId: 2130,
          icon: "060414"
        },
        {
          x: 810,
          y: 1050,
          placeNameId: 2108,
          icon: "060600"
        },
        {
          x: 1286,
          y: 892,
          placeNameId: 2107,
          icon: "060600"
        },
        {
          x: 1750,
          y: 1100,
          placeNameId: 2104,
          icon: "060600"
        },
        {
          x: 314,
          y: 344,
          placeNameId: 2128,
          icon: "060442"
        },
        {
          x: 694,
          y: 308,
          placeNameId: 2129,
          icon: "060442"
        },
        {
          x: 1360,
          y: 288,
          placeNameId: 2159,
          icon: "060442"
        },
        {
          x: 494,
          y: 428,
          placeNameId: 2156,
          icon: "060442"
        },
        {
          x: 450,
          y: 626,
          placeNameId: 2123,
          icon: "060453"
        },
        {
          x: 798,
          y: 786,
          placeNameId: 2126,
          icon: "060442"
        },
        {
          x: 1722,
          y: 644,
          placeNameId: 2127,
          icon: "060442"
        },
        {
          x: 1660,
          y: 888,
          placeNameId: 2121,
          icon: "060442"
        },
        {
          x: 456,
          y: 1174,
          placeNameId: 2160,
          icon: "060442"
        },
        {
          x: 880,
          y: 1148,
          placeNameId: 2125,
          icon: "060442"
        },
        {
          x: 1366,
          y: 1268,
          placeNameId: 2122,
          icon: "060442"
        },
        {
          x: 314,
          y: 1502,
          placeNameId: 2115,
          icon: "060442"
        },
        {
          x: 442,
          y: 1548,
          placeNameId: 2116,
          icon: "060453"
        },
        {
          x: 732,
          y: 1726,
          placeNameId: 2117,
          icon: "060442"
        },
        {
          x: 1136,
          y: 1494,
          placeNameId: 2118,
          icon: "060442"
        },
        {
          x: 1296,
          y: 1726,
          placeNameId: 2154,
          icon: "060442"
        },
        {
          x: 1454,
          y: 1834,
          placeNameId: 2120,
          icon: "060442"
        },
        {
          x: 1692,
          y: 1768,
          placeNameId: 2119,
          icon: "060442"
        },
        {
          x: 268,
          y: 636,
          placeNameId: 2240,
          icon: "060442"
        },
        {
          x: 1166,
          y: 200,
          placeNameId: 2181,
          icon: "060428"
        },
        {
          x: 249,
          y: 231,
          placeNameId: 1803,
          icon: "060442"
        }
      ],
      exVersionId: 1,
      elite: {
        ids: [
          4378,
          4370,
          4371,
          4358,
          4359
        ],
        locations: [
          {
            label: "24",
            x: 29.000000000000004,
            y: 6.45,
            z: 1.9927591704999998,
            flag: "10101"
          },
          {
            label: "22",
            x: 15.5,
            y: 7.55,
            z: 2.5665730325,
            flag: "10101"
          },
          {
            label: "23",
            x: 21.8,
            y: 7.749999999999999,
            z: 2.497045335,
            flag: "10101"
          },
          {
            label: "21",
            x: 7.25,
            y: 8.55,
            z: 1.5281164215,
            flag: "10101"
          },
          {
            label: "25",
            x: 36.8,
            y: 8.650000000000002,
            z: 1.4239339759999998,
            flag: "10101"
          },
          {
            label: "20",
            x: 19.2,
            y: 9.4,
            z: 2.2734633255,
            flag: "11101"
          },
          {
            label: "19",
            x: 23.349999999999998,
            y: 10.3,
            z: 2.537279086,
            flag: "11101"
          },
          {
            label: "18",
            x: 25.05,
            y: 12.95,
            z: 2.529059434,
            flag: "11101"
          },
          {
            label: "16",
            x: 15.55,
            y: 14.75,
            z: 3.061834265,
            flag: "11101"
          },
          {
            label: "26",
            x: 37.64999999999999,
            y: 14.75,
            z: 2.2960315605000003,
            flag: "10101"
          },
          {
            label: "17",
            x: 21.45,
            y: 15.75,
            z: 3.7016234199999998,
            flag: "11101"
          },
          {
            label: "15",
            x: 9.05,
            y: 16.900000000000002,
            z: 1.8248608020000001,
            flag: "11101"
          },
          {
            label: "10",
            x: 31.650000000000002,
            y: 19.05,
            z: 3.517961765,
            flag: "11110"
          },
          {
            label: "14",
            x: 6.3500000000000005,
            y: 19.5,
            z: 2.2712256095,
            flag: "11101"
          },
          {
            label: "9",
            x: 36.55,
            y: 21.3,
            z: 2.60956805,
            flag: "11110"
          },
          {
            label: "12",
            x: 20.650000000000002,
            y: 21.6,
            z: 4.541836265000001,
            flag: "11110"
          },
          {
            label: "13",
            x: 14.650000000000002,
            y: 23.45,
            z: 4.397557265,
            flag: "11110"
          },
          {
            label: "11",
            x: 24.750000000000004,
            y: 24.95,
            z: 4.835487844999999,
            flag: "11110"
          },
          {
            label: "4",
            x: 26.150000000000002,
            y: 29.099999999999998,
            z: 1.5888875290000002,
            flag: "11010"
          },
          {
            label: "1",
            x: 14.200000000000001,
            y: 29.150000000000002,
            z: 0.876570055,
            flag: "11010"
          },
          {
            label: "2",
            x: 18.000000000000004,
            y: 30.2,
            z: 1.12179622,
            flag: "11010"
          },
          {
            label: "8",
            x: 34.5,
            y: 31.25,
            z: 1.4334949115,
            flag: "11110"
          },
          {
            label: "3",
            x: 18.25,
            y: 31.75,
            z: 0.5441186299999999,
            flag: "11010"
          },
          {
            label: "5",
            x: 26.900000000000002,
            y: 33.65,
            z: 0.931622695,
            flag: "11010"
          },
          {
            label: "6",
            x: 31.45,
            y: 36.349999999999994,
            z: 1.049078065,
            flag: "11010"
          },
          {
            label: "7",
            x: 36.3,
            y: 38.5,
            z: 0.802981266,
            flag: "10110"
          }
        ]
      }
    },
    {
      id: 402,
      placeNameId: 2101,
      weatherRateId: 54,
      sizeFactor: 95,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -601,
      markers: [
        {
          x: 425,
          y: 502,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 418,
          y: 498,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 193,
          y: 390,
          placeNameId: 2301,
          icon: "060441"
        },
        {
          x: 338,
          y: 454,
          placeNameId: 2131,
          icon: "060453"
        },
        {
          x: 818,
          y: 466,
          placeNameId: 2162,
          icon: "060442"
        },
        {
          x: 886,
          y: 548,
          placeNameId: 2134,
          icon: "060442"
        },
        {
          x: 454,
          y: 656,
          placeNameId: 2161,
          icon: "060442"
        },
        {
          x: 688,
          y: 696,
          placeNameId: 2132,
          icon: "060442"
        },
        {
          x: 878,
          y: 726,
          placeNameId: 2133,
          icon: "060442"
        },
        {
          x: 264,
          y: 738,
          placeNameId: 2177,
          icon: "060442"
        },
        {
          x: 402,
          y: 974,
          placeNameId: 2175,
          icon: "060442"
        },
        {
          x: 988,
          y: 1022,
          placeNameId: 2147,
          icon: "060414"
        },
        {
          x: 1028,
          y: 1018,
          placeNameId: 2174,
          icon: "060442"
        },
        {
          x: 390,
          y: 1410,
          placeNameId: 2145,
          icon: "060442"
        },
        {
          x: 292,
          y: 1626,
          placeNameId: 2173,
          icon: "060442"
        },
        {
          x: 512,
          y: 1706,
          placeNameId: 2172,
          icon: "060442"
        },
        {
          x: 734,
          y: 1652,
          placeNameId: 2146,
          icon: "060442"
        },
        {
          x: 858,
          y: 1470,
          placeNameId: 2144,
          icon: "060442"
        },
        {
          x: 968,
          y: 1376,
          placeNameId: 2176,
          icon: "060442"
        },
        {
          x: 1024,
          y: 1816,
          placeNameId: 2148,
          icon: "060414"
        },
        {
          x: 1138,
          y: 1316,
          placeNameId: 2170,
          icon: "060442"
        },
        {
          x: 1222,
          y: 1550,
          placeNameId: 2143,
          icon: "060442"
        },
        {
          x: 1554,
          y: 1754,
          placeNameId: 2142,
          icon: "060442"
        },
        {
          x: 1830,
          y: 1832,
          placeNameId: 2180,
          icon: "060442"
        },
        {
          x: 1884,
          y: 1140,
          placeNameId: 2140,
          icon: "060442"
        },
        {
          x: 1784,
          y: 1130,
          placeNameId: 2141,
          icon: "060442"
        },
        {
          x: 1592,
          y: 1096,
          placeNameId: 2139,
          icon: "060442"
        },
        {
          x: 1798,
          y: 824,
          placeNameId: 2113,
          icon: "060442"
        },
        {
          x: 1648,
          y: 686,
          placeNameId: 2166,
          icon: "060442"
        },
        {
          x: 1762,
          y: 560,
          placeNameId: 2138,
          icon: "060442"
        },
        {
          x: 1814,
          y: 334,
          placeNameId: 2136,
          icon: "060442"
        },
        {
          x: 1784,
          y: 212,
          placeNameId: 2136,
          icon: "060442"
        },
        {
          x: 1382,
          y: 394,
          placeNameId: 2137,
          icon: "060442"
        },
        {
          x: 1230,
          y: 438,
          placeNameId: 2135,
          icon: "060442"
        },
        {
          x: 1310,
          y: 614,
          placeNameId: 2164,
          icon: "060442"
        },
        {
          x: 292,
          y: 487,
          placeNameId: 0,
          icon: "060412"
        }
      ],
      exVersionId: 1,
      elite: {
        ids: [
          4380,
          4372,
          4373,
          4360,
          4361
        ],
        locations: [
          {
            label: "6",
            x: 32.849999999999994,
            y: 5.75,
            z: 5.648401489499999,
            flag: "11101"
          },
          {
            label: "7",
            x: 37.699999999999996,
            y: 7.05,
            z: 5.769583464,
            flag: "11101"
          },
          {
            label: "3",
            x: 17.05,
            y: 8.5,
            z: 4.368485185,
            flag: "11110"
          },
          {
            label: "5",
            x: 27.45,
            y: 11.25,
            z: 5.29976335,
            flag: "11101"
          },
          {
            label: "8",
            x: 34.25,
            y: 13.100000000000001,
            z: 5.7913698195,
            flag: "11101"
          },
          {
            label: "2",
            x: 18.6,
            y: 13.2,
            z: 4.39295021,
            flag: "11110"
          },
          {
            label: "4",
            x: 27.599999999999998,
            y: 16.2,
            z: 6.5986587525000004,
            flag: "11101"
          },
          {
            label: "1",
            x: 13.850000000000001,
            y: 16.900000000000002,
            z: 4.354972455,
            flag: "11110"
          },
          {
            label: "20",
            x: 9.650000000000002,
            y: 26.5,
            z: 5.1149103,
            flag: "11101"
          },
          {
            label: "10",
            x: 34.15,
            y: 26.750000000000004,
            z: 6.50094575,
            flag: "11110"
          },
          {
            label: "9",
            x: 38.699999999999996,
            y: 27.7,
            z: 6.0351957309,
            flag: "11110"
          },
          {
            label: "11",
            x: 30.250000000000004,
            y: 28.750000000000004,
            z: 6.2671513905000005,
            flag: "11110"
          },
          {
            label: "19",
            x: 16.1,
            y: 29.55,
            z: 5.1047152,
            flag: "11101"
          },
          {
            label: "18",
            x: 11.25,
            y: 30.45,
            z: 5.329468950000001,
            flag: "11101"
          },
          {
            label: "12",
            x: 35.849999999999994,
            y: 31.1,
            z: 6.133114861999999,
            flag: "11110"
          },
          {
            label: "17",
            x: 8.4,
            y: 34.05,
            z: 5.5315122,
            flag: "11101"
          },
          {
            label: "13",
            x: 35.89999999999999,
            y: 34.599999999999994,
            z: 6.106581199500001,
            flag: "11110"
          },
          {
            label: "15",
            x: 29.8,
            y: 35.05,
            z: 6.2638565065,
            flag: "11110"
          },
          {
            label: "14",
            x: 36.7,
            y: 37.099999999999994,
            z: 5.871314705,
            flag: "11110"
          },
          {
            label: "16",
            x: 12.700000000000001,
            y: 38.05,
            z: 5.1105027,
            flag: "11101"
          }
        ]
      },
      fate: {
        ids: [
          3783
        ]
      }
    },
    {
      id: 612,
      placeNameId: 2406,
      weatherRateId: 79,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 12,
      markers: [
        {
          x: 421,
          y: 553,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 390,
          y: 498,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 360,
          y: 491,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 933,
          y: 1235,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 954,
          y: 1234,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1486,
          y: 1254,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1481,
          y: 1246,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1434,
          y: 1246,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1304,
          y: 944,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1313,
          y: 988,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 387,
          y: 533,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 430,
          y: 550,
          placeNameId: 2614,
          icon: "060442"
        },
        {
          x: 620,
          y: 960,
          placeNameId: 2615,
          icon: "060442"
        },
        {
          x: 290,
          y: 842,
          placeNameId: 2618,
          icon: "060442"
        },
        {
          x: 360,
          y: 1260,
          placeNameId: 2620,
          icon: "060442"
        },
        {
          x: 358,
          y: 1398,
          placeNameId: 2622,
          icon: "060442"
        },
        {
          x: 835,
          y: 890,
          placeNameId: 2623,
          icon: "060448"
        },
        {
          x: 630,
          y: 1515,
          placeNameId: 2624,
          icon: "060442"
        },
        {
          x: 922,
          y: 777,
          placeNameId: 2625,
          icon: "060442"
        },
        {
          x: 1110,
          y: 335,
          placeNameId: 2627,
          icon: "060442"
        },
        {
          x: 1029,
          y: 303,
          placeNameId: 2628,
          icon: "060442"
        },
        {
          x: 1197,
          y: 747,
          placeNameId: 2631,
          icon: "060442"
        },
        {
          x: 1027,
          y: 1277,
          placeNameId: 2632,
          icon: "060442"
        },
        {
          x: 1440,
          y: 1270,
          placeNameId: 2634,
          icon: "060453"
        },
        {
          x: 1342,
          y: 955,
          placeNameId: 2635,
          icon: "060442"
        },
        {
          x: 1711,
          y: 1185,
          placeNameId: 2636,
          icon: "060442"
        },
        {
          x: 1467,
          y: 1670,
          placeNameId: 2640,
          icon: "060442"
        },
        {
          x: 1716,
          y: 810,
          placeNameId: 2637,
          icon: "060603"
        },
        {
          x: 355,
          y: 495,
          placeNameId: 55,
          icon: "060441"
        },
        {
          x: 1507,
          y: 473,
          placeNameId: 2403,
          icon: "060441"
        },
        {
          x: 1875,
          y: 1385,
          placeNameId: 2407,
          icon: "060441"
        },
        {
          x: 395,
          y: 515,
          placeNameId: 2613,
          icon: "060453"
        },
        {
          x: 1001,
          y: 1261,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1029,
          y: 1292,
          placeNameId: 0,
          icon: "060434"
        }
      ],
      exVersionId: 2,
      elite: {
        ids: [
          5987,
          5990,
          5991,
          6008,
          6009
        ],
        locations: [
          {
            label: "1",
            x: 18.35,
            y: 8.3,
            z: 0.46728014000000007,
            flag: "10101"
          },
          {
            label: "B1",
            x: 21.25,
            y: 10.45,
            z: 0.4726420775,
            flag: "00001"
          },
          {
            label: "8",
            x: 25.45,
            y: 11.75,
            z: 0.4208730235,
            flag: "10001"
          },
          {
            label: "A1",
            x: 14.15,
            y: 12.25,
            z: 0.8886395599999999,
            flag: "00101"
          },
          {
            label: "2",
            x: 18.05,
            y: 12.9,
            z: 0.4534356785,
            flag: "10101"
          },
          {
            label: "A2",
            x: 10.4,
            y: 14.5,
            z: 0.958885915,
            flag: "00101"
          },
          {
            label: "A7",
            x: 34.75,
            y: 17.45,
            z: 1.4123471,
            flag: "01010"
          },
          {
            label: "A3",
            x: 12.350000000000001,
            y: 18,
            z: 0.6983605500000001,
            flag: "00101"
          },
          {
            label: "B2",
            x: 24.25,
            y: 18.150000000000002,
            z: 0.345248909,
            flag: "00001"
          },
          {
            label: "B3",
            x: 34,
            y: 21.1,
            z: 1.089078865,
            flag: "00010"
          },
          {
            label: "A6",
            x: 17.55,
            y: 21.650000000000002,
            z: 0.292497559,
            flag: "01001"
          },
          {
            label: "7",
            x: 28.150000000000002,
            y: 23.7,
            z: 0.61539645,
            flag: "11010"
          },
          {
            label: "3",
            x: 16.75,
            y: 24.1,
            z: 0.28318611149999995,
            flag: "11001"
          },
          {
            label: "A4",
            x: 8.8,
            y: 25.000000000000004,
            z: 0.6279691765000001,
            flag: "00101"
          },
          {
            label: "A5",
            x: 15.4,
            y: 26.1,
            z: 0.33823230000000004,
            flag: "01001"
          },
          {
            label: "5",
            x: 25.2,
            y: 28.250000000000004,
            z: 0.2728380765,
            flag: "11010"
          },
          {
            label: "4",
            x: 8.45,
            y: 30.25,
            z: 0.23561223999999997,
            flag: "10101"
          },
          {
            label: "6",
            x: 29.000000000000004,
            y: 30.55,
            z: 0.49999790199999994,
            flag: "10010"
          },
          {
            label: "A8",
            x: 25.650000000000002,
            y: 32,
            z: 0.362322962,
            flag: "01010"
          },
          {
            label: "A9",
            x: 33.39999999999999,
            y: 33.3,
            z: 0.7043242000000001,
            flag: "01010"
          }
        ]
      }
    },
    {
      id: 613,
      placeNameId: 2409,
      weatherRateId: 83,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -2,
      markers: [
        {
          x: 1890,
          y: 1838,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1523,
          y: 1780,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 248,
          y: 522,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1068,
          y: 461,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1117,
          y: 412,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1132,
          y: 406,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1149,
          y: 428,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 1342,
          y: 816,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1348,
          y: 801,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1347,
          y: 795,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1001,
          y: 970,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 989,
          y: 952,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1142,
          y: 392,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1874,
          y: 1876,
          placeNameId: 2760,
          icon: "060442"
        },
        {
          x: 1778,
          y: 1520,
          placeNameId: 2761,
          icon: "060442"
        },
        {
          x: 1134,
          y: 1764,
          placeNameId: 2762,
          icon: "060442"
        },
        {
          x: 1502,
          y: 1796,
          placeNameId: 2766,
          icon: "060442"
        },
        {
          x: 1678,
          y: 902,
          placeNameId: 2767,
          icon: "060442"
        },
        {
          x: 1384,
          y: 762,
          placeNameId: 2769,
          icon: "060453"
        },
        {
          x: 1534,
          y: 212,
          placeNameId: 2770,
          icon: "060442"
        },
        {
          x: 1582,
          y: 396,
          placeNameId: 2771,
          icon: "060442"
        },
        {
          x: 982,
          y: 908,
          placeNameId: 2772,
          icon: "060448"
        },
        {
          x: 1084,
          y: 230,
          placeNameId: 2773,
          icon: "060442"
        },
        {
          x: 1112,
          y: 440,
          placeNameId: 2774,
          icon: "060453"
        },
        {
          x: 1062,
          y: 350,
          placeNameId: 2775,
          icon: "060442"
        },
        {
          x: 812,
          y: 170,
          placeNameId: 2776,
          icon: "060442"
        },
        {
          x: 1150,
          y: 172,
          placeNameId: 2777,
          icon: "060442"
        },
        {
          x: 65,
          y: 1785,
          placeNameId: 2779,
          icon: "060414"
        },
        {
          x: 785,
          y: 1228,
          placeNameId: 2780,
          icon: "060442"
        },
        {
          x: 1896,
          y: 265,
          placeNameId: 2781,
          icon: "060442"
        },
        {
          x: 743,
          y: 737,
          placeNameId: 2782,
          icon: "060442"
        },
        {
          x: 1238,
          y: 1151,
          placeNameId: 2783,
          icon: "060442"
        },
        {
          x: 950,
          y: 1187,
          placeNameId: 2784,
          icon: "060442"
        },
        {
          x: 287,
          y: 577,
          placeNameId: 2785,
          icon: "060448"
        },
        {
          x: 296,
          y: 1178,
          placeNameId: 2786,
          icon: "060604"
        },
        {
          x: 365,
          y: 1283,
          placeNameId: 2787,
          icon: "060442"
        },
        {
          x: 200,
          y: 1100,
          placeNameId: 2788,
          icon: "060442"
        },
        {
          x: 294,
          y: 166,
          placeNameId: 2411,
          icon: "060441"
        },
        {
          x: 166,
          y: 774,
          placeNameId: 2410,
          icon: "060441"
        },
        {
          x: 1918,
          y: 1920,
          placeNameId: 2404,
          icon: "060441"
        },
        {
          x: 1411,
          y: 794,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1124,
          y: 471,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 1569,
          y: 1857,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 1309,
          y: 1873,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1298,
          y: 1868,
          placeNameId: 2762,
          icon: "060414"
        },
        {
          x: 1366,
          y: 718,
          placeNameId: 0,
          icon: "060927"
        },
        {
          x: 1014,
          y: 412,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1012,
          y: 419,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1372,
          y: 718,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1024,
          y: 412,
          placeNameId: 0,
          icon: "063971"
        }
      ],
      exVersionId: 2,
      filter: true,
      elite: {
        ids: [
          5984,
          5996,
          5997,
          6002,
          6003
        ],
        locations: [
          {
            label: "B1",
            x: 7.3999999999999995,
            y: 5.85,
            z: 0.20628280650000003,
            flag: "00001"
          },
          {
            label: "2",
            x: 25.85,
            y: 7.2,
            z: 0.021663719,
            flag: "11101"
          },
          {
            label: "1",
            x: 18.900000000000002,
            y: 8.5,
            z: 0.033601580416000004,
            flag: "11101"
          },
          {
            label: "B2",
            x: 16.599999999999998,
            y: 10.600000000000001,
            z: 0.034079042085,
            flag: "00001"
          },
          {
            label: "A1",
            x: 14.600000000000001,
            y: 13.65,
            z: -1.671760155,
            flag: "01110"
          },
          {
            label: "B3",
            x: 36.64999999999999,
            y: 17.85,
            z: 0.656618538,
            flag: "00001"
          },
          {
            label: "3",
            x: 35.099999999999994,
            y: 21.05,
            z: 0.036786876315,
            flag: "10001"
          },
          {
            label: "A3",
            x: 4.8999999999999995,
            y: 22.900000000000002,
            z: 0.5341094015,
            flag: "01110"
          },
          {
            label: "4",
            x: 32.4,
            y: 24.400000000000002,
            z: 0.020632221105,
            flag: "11101"
          },
          {
            label: "B4",
            x: 24.95,
            y: 26.150000000000002,
            z: -1.7000001550000001,
            flag: "00010"
          },
          {
            label: "7",
            x: 6.6499999999999995,
            y: 29.75,
            z: 0.193938794,
            flag: "11110"
          },
          {
            label: "5",
            x: 27.400000000000002,
            y: 31.650000000000002,
            z: 0.03313366965,
            flag: "11110"
          },
          {
            label: "6",
            x: 24.2,
            y: 33.05,
            z: 0.051447179950000005,
            flag: "11110"
          },
          {
            label: "A2",
            x: 31.250000000000004,
            y: 38.75,
            z: 0.039638161075000004,
            flag: "01110"
          }
        ]
      }
    },
    {
      id: 614,
      placeNameId: 2410,
      weatherRateId: 84,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -2,
      markers: [
        {
          x: 1493,
          y: 947,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1497,
          y: 922,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1463,
          y: 856,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1300,
          y: 647,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1295,
          y: 643,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 740,
          y: 1514,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 530,
          y: 1567,
          placeNameId: 2843,
          icon: "060456"
        },
        {
          x: 1300,
          y: 620,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1239,
          y: 631,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1194,
          y: 602,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1437,
          y: 947,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1785,
          y: 805,
          placeNameId: 2789,
          icon: "060442"
        },
        {
          x: 1857,
          y: 947,
          placeNameId: 2790,
          icon: "060442"
        },
        {
          x: 1733,
          y: 692,
          placeNameId: 2791,
          icon: "060442"
        },
        {
          x: 1457,
          y: 933,
          placeNameId: 2793,
          icon: "060453"
        },
        {
          x: 991,
          y: 1575,
          placeNameId: 2796,
          icon: "060442"
        },
        {
          x: 1376,
          y: 1401,
          placeNameId: 2797,
          icon: "060442"
        },
        {
          x: 1352,
          y: 1240,
          placeNameId: 2798,
          icon: "060442"
        },
        {
          x: 1470,
          y: 1713,
          placeNameId: 2799,
          icon: "060442"
        },
        {
          x: 733,
          y: 1547,
          placeNameId: 2800,
          icon: "060442"
        },
        {
          x: 553,
          y: 1323,
          placeNameId: 2801,
          icon: "060442"
        },
        {
          x: 829,
          y: 971,
          placeNameId: 2802,
          icon: "060442"
        },
        {
          x: 1696,
          y: 1887,
          placeNameId: 2804,
          icon: "060442"
        },
        {
          x: 1269,
          y: 620,
          placeNameId: 2805,
          icon: "060453"
        },
        {
          x: 1539,
          y: 320,
          placeNameId: 2806,
          icon: "060442"
        },
        {
          x: 1358,
          y: 259,
          placeNameId: 2807,
          icon: "060442"
        },
        {
          x: 794,
          y: 481,
          placeNameId: 2808,
          icon: "060442"
        },
        {
          x: 695,
          y: 672,
          placeNameId: 2809,
          icon: "060442"
        },
        {
          x: 656,
          y: 662,
          placeNameId: 2810,
          icon: "060414"
        },
        {
          x: 745,
          y: 309,
          placeNameId: 2811,
          icon: "060442"
        },
        {
          x: 621,
          y: 385,
          placeNameId: 2812,
          icon: "060442"
        },
        {
          x: 1538,
          y: 154,
          placeNameId: 2411,
          icon: "060441"
        },
        {
          x: 1862,
          y: 595,
          placeNameId: 2409,
          icon: "060441"
        },
        {
          x: 539,
          y: 1295,
          placeNameId: 2801,
          icon: "060414"
        },
        {
          x: 1360,
          y: 489,
          placeNameId: 2851,
          icon: "060414"
        }
      ],
      exVersionId: 2,
      filter: true,
      elite: {
        ids: [
          5985,
          5998,
          5999,
          6004,
          6005
        ],
        locations: [
          {
            label: "4",
            x: 21.8,
            y: 9.3,
            z: 0.5784510789999999,
            flag: "11101"
          },
          {
            label: "2",
            x: 27.05,
            y: 10.3,
            z: 0.30024206249999996,
            flag: "11101"
          },
          {
            label: "B1",
            x: 18.45,
            y: 10.600000000000001,
            z: 0.52710817,
            flag: "00001"
          },
          {
            label: "1",
            x: 28.75,
            y: 11.45,
            z: 0.5823034,
            flag: "11101"
          },
          {
            label: "3",
            x: 23.7,
            y: 11.5,
            z: 0.44872213950000006,
            flag: "11101"
          },
          {
            label: "5",
            x: 17.150000000000002,
            y: 13.900000000000002,
            z: 0.57360495,
            flag: "11101"
          },
          {
            label: "A1",
            x: 18.45,
            y: 16.35,
            z: 0.669303175,
            flag: "01101"
          },
          {
            label: "B6",
            x: 32.5,
            y: 18.45,
            z: 0.4497444345,
            flag: "00010"
          },
          {
            label: "B4",
            x: 24.55,
            y: 21.650000000000002,
            z: 0.46227881400000004,
            flag: "00010"
          },
          {
            label: "B5",
            x: 34.14999999999999,
            y: 26.85,
            z: 0.60407415,
            flag: "00010"
          },
          {
            label: "B3",
            x: 23.650000000000002,
            y: 27.2,
            z: 0.0613009535,
            flag: "00010"
          },
          {
            label: "6",
            x: 12.350000000000001,
            y: 30.55,
            z: 0.37843395,
            flag: "11110"
          },
          {
            label: "7",
            x: 17.55,
            y: 34.5,
            z: 0.10142455595,
            flag: "11110"
          },
          {
            label: "B2",
            x: 29.85,
            y: 35.25,
            z: 0.1629211425,
            flag: "00010"
          }
        ]
      },
      fate: {
        ids: [
          6290
        ]
      }
    },
    {
      id: 620,
      placeNameId: 2407,
      weatherRateId: 80,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 46,
      markers: [
        {
          x: 1073,
          y: 295,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1180,
          y: 236,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1174,
          y: 232,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1127,
          y: 242,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 934,
          y: 501,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 765,
          y: 1745,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 777,
          y: 1775,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 770,
          y: 1782,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 894,
          y: 1214,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 898,
          y: 1209,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1337,
          y: 1403,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1303,
          y: 1788,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1097,
          y: 258,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1135,
          y: 275,
          placeNameId: 2646,
          icon: "060453"
        },
        {
          x: 753,
          y: 1770,
          placeNameId: 2660,
          icon: "060453"
        },
        {
          x: 400,
          y: 313,
          placeNameId: 2641,
          icon: "060442"
        },
        {
          x: 950,
          y: 500,
          placeNameId: 2643,
          icon: "060442"
        },
        {
          x: 740,
          y: 755,
          placeNameId: 2644,
          icon: "060442"
        },
        {
          x: 765,
          y: 900,
          placeNameId: 2645,
          icon: "060442"
        },
        {
          x: 1385,
          y: 340,
          placeNameId: 2648,
          icon: "060442"
        },
        {
          x: 1600,
          y: 240,
          placeNameId: 2649,
          icon: "060442"
        },
        {
          x: 1590,
          y: 290,
          placeNameId: 2651,
          icon: "060442"
        },
        {
          x: 1770,
          y: 600,
          placeNameId: 2652,
          icon: "060442"
        },
        {
          x: 1555,
          y: 800,
          placeNameId: 2653,
          icon: "060442"
        },
        {
          x: 1070,
          y: 930,
          placeNameId: 2654,
          icon: "060442"
        },
        {
          x: 1325,
          y: 995,
          placeNameId: 2656,
          icon: "060442"
        },
        {
          x: 710,
          y: 1530,
          placeNameId: 2657,
          icon: "060442"
        },
        {
          x: 160,
          y: 1760,
          placeNameId: 2659,
          icon: "060442"
        },
        {
          x: 1010,
          y: 1785,
          placeNameId: 2661,
          icon: "060442"
        },
        {
          x: 1015,
          y: 1155,
          placeNameId: 2662,
          icon: "060442"
        },
        {
          x: 425,
          y: 1825,
          placeNameId: 2663,
          icon: "060442"
        },
        {
          x: 1040,
          y: 1610,
          placeNameId: 2664,
          icon: "060442"
        },
        {
          x: 1457,
          y: 1523,
          placeNameId: 2665,
          icon: "060414"
        },
        {
          x: 1365,
          y: 1385,
          placeNameId: 2666,
          icon: "060442"
        },
        {
          x: 1330,
          y: 1775,
          placeNameId: 2669,
          icon: "060442"
        },
        {
          x: 340,
          y: 230,
          placeNameId: 2403,
          icon: "060441"
        },
        {
          x: 185,
          y: 1265,
          placeNameId: 2406,
          icon: "060441"
        },
        {
          x: 1615,
          y: 1450,
          placeNameId: 2408,
          icon: "060441"
        }
      ],
      exVersionId: 2,
      elite: {
        ids: [
          5988,
          5992,
          5993,
          6010,
          6011
        ],
        locations: [
          {
            label: "A1",
            x: 27.250000000000004,
            y: 7.6499999999999995,
            z: 0.686809235,
            flag: "01001"
          },
          {
            label: "1",
            x: 11.3,
            y: 8.200000000000001,
            z: 0.016955260999999985,
            flag: "11101"
          },
          {
            label: "5",
            x: 31.750000000000004,
            y: 7.949999999999999,
            z: 1.754511415,
            flag: "11001"
          },
          {
            label: "A2",
            x: 26.400000000000002,
            y: 12.05,
            z: 0.71356255,
            flag: "01001"
          },
          {
            label: "2",
            x: 9.100000000000001,
            y: 12.05,
            z: 0.12931055049999998,
            flag: "11101"
          },
          {
            label: "6",
            x: 36.75,
            y: 12.400000000000002,
            z: 2.109425815,
            flag: "11101"
          },
          {
            label: "3",
            x: 5.6499999999999995,
            y: 14.65,
            z: 0.33622477549999996,
            flag: "11001"
          },
          {
            label: "4",
            x: 23.500000000000004,
            y: 15.05,
            z: 0.746288645,
            flag: "11101"
          },
          {
            label: "A3",
            x: 25.2,
            y: 20.400000000000002,
            z: 1.437503815,
            flag: "01101"
          },
          {
            label: "A4",
            x: 16.900000000000002,
            y: 23.3,
            z: 2.5971885649999997,
            flag: "01110"
          },
          {
            label: "7",
            x: 23.650000000000002,
            y: 24.2,
            z: 2.59608856,
            flag: "11110"
          },
          {
            label: "A5",
            x: 7.45,
            y: 25.650000000000002,
            z: 2.65050888,
            flag: "01110"
          },
          {
            label: "8",
            x: 18.05,
            y: 26.7,
            z: 2.53422736,
            flag: "11110"
          },
          {
            label: "9",
            x: 12.55,
            y: 28.3,
            z: 2.4102143700000003,
            flag: "11110"
          },
          {
            label: "B1",
            x: 26.95,
            y: 29.75,
            z: 2.69651891,
            flag: "00010"
          },
          {
            label: "10",
            x: 12,
            y: 32.8,
            z: 2.17257385,
            flag: "11110"
          },
          {
            label: "A6",
            x: 5.8999999999999995,
            y: 34.849999999999994,
            z: 2.267052005,
            flag: "01110"
          },
          {
            label: "11",
            x: 23.650000000000002,
            y: 36.3,
            z: 2.5707281450000004,
            flag: "11110"
          }
        ]
      }
    },
    {
      id: 621,
      placeNameId: 2408,
      weatherRateId: 81,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -2,
      markers: [
        {
          x: 514,
          y: 1045,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 479,
          y: 1015,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 478,
          y: 1023,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1660,
          y: 1693,
          placeNameId: 593,
          icon: "060311"
        },
        {
          x: 1657,
          y: 1666,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1652,
          y: 1659,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1702,
          y: 1485,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1704,
          y: 1535,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1492,
          y: 1608,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1522,
          y: 1608,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 381,
          y: 986,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 373,
          y: 1005,
          placeNameId: 2670,
          icon: "060453"
        },
        {
          x: 1640,
          y: 1675,
          placeNameId: 2693,
          icon: "060453"
        },
        {
          x: 420,
          y: 1280,
          placeNameId: 2671,
          icon: "060442"
        },
        {
          x: 330,
          y: 1465,
          placeNameId: 2673,
          icon: "060442"
        },
        {
          x: 645,
          y: 1745,
          placeNameId: 2674,
          icon: "060442"
        },
        {
          x: 1095,
          y: 1775,
          placeNameId: 2675,
          icon: "060442"
        },
        {
          x: 980,
          y: 1700,
          placeNameId: 2676,
          icon: "060442"
        },
        {
          x: 765,
          y: 1750,
          placeNameId: 2677,
          icon: "060442"
        },
        {
          x: 915,
          y: 1650,
          placeNameId: 2679,
          icon: "060442"
        },
        {
          x: 180,
          y: 1300,
          placeNameId: 2681,
          icon: "060442"
        },
        {
          x: 155,
          y: 1785,
          placeNameId: 2682,
          icon: "060442"
        },
        {
          x: 840,
          y: 1475,
          placeNameId: 2686,
          icon: "060442"
        },
        {
          x: 1020,
          y: 860,
          placeNameId: 2687,
          icon: "060442"
        },
        {
          x: 740,
          y: 1190,
          placeNameId: 2685,
          icon: "060442"
        },
        {
          x: 980,
          y: 760,
          placeNameId: 2688,
          icon: "060442"
        },
        {
          x: 1060,
          y: 1285,
          placeNameId: 2689,
          icon: "060442"
        },
        {
          x: 1070,
          y: 1090,
          placeNameId: 2690,
          icon: "060442"
        },
        {
          x: 1610,
          y: 1094,
          placeNameId: 2691,
          icon: "060414"
        },
        {
          x: 1520,
          y: 1620,
          placeNameId: 2694,
          icon: "060442"
        },
        {
          x: 1532,
          y: 1800,
          placeNameId: 2695,
          icon: "060442"
        },
        {
          x: 1675,
          y: 360,
          placeNameId: 2696,
          icon: "060442"
        },
        {
          x: 1635,
          y: 425,
          placeNameId: 2697,
          icon: "060442"
        },
        {
          x: 1333,
          y: 478,
          placeNameId: 2698,
          icon: "060442"
        },
        {
          x: 1123,
          y: 395,
          placeNameId: 2699,
          icon: "060442"
        },
        {
          x: 1075,
          y: 213,
          placeNameId: 2700,
          icon: "060442"
        },
        {
          x: 750,
          y: 342,
          placeNameId: 2702,
          icon: "060442"
        },
        {
          x: 646,
          y: 382,
          placeNameId: 2703,
          icon: "060442"
        },
        {
          x: 270,
          y: 365,
          placeNameId: 2704,
          icon: "060442"
        },
        {
          x: 245,
          y: 1005,
          placeNameId: 2407,
          icon: "060441"
        },
        {
          x: 1279,
          y: 1012,
          placeNameId: 2367,
          icon: "060414"
        },
        {
          x: 1772,
          y: 1555,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 490,
          y: 977,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1769,
          y: 1567,
          placeNameId: 3710,
          icon: "060441"
        },
        {
          x: 1761,
          y: 1563,
          placeNameId: 0,
          icon: "060352"
        }
      ],
      exVersionId: 2,
      elite: {
        ids: [
          5989,
          5994,
          5995,
          6012,
          6013
        ],
        locations: [
          {
            label: "B5",
            x: 18.349999999999998,
            y: 7.3,
            z: 0.451829834,
            flag: "00010"
          },
          {
            label: "9",
            x: 28.900000000000002,
            y: 8.15,
            z: 0.26929577849999997,
            flag: "11100"
          },
          {
            label: "8",
            x: 6.45,
            y: 8.350000000000001,
            z: 0.7964101,
            flag: "11010"
          },
          {
            label: "B4",
            x: 22.150000000000002,
            y: 10.15,
            z: 0.11999999,
            flag: "00010"
          },
          {
            label: "A4",
            x: 35.25,
            y: 11.05,
            z: 0.1746317675,
            flag: "00110"
          },
          {
            label: "A5",
            x: 7.6000000000000005,
            y: 13.950000000000001,
            z: 0.936794,
            flag: "01110"
          },
          {
            label: "B3",
            x: 25.05,
            y: 16.55,
            z: 0.02077547997,
            flag: "00001"
          },
          {
            label: "7",
            x: 14.05,
            y: 20.6,
            z: 0.1111161638,
            flag: "11101"
          },
          {
            label: "6",
            x: 19.000000000000004,
            y: 25.45,
            z: 0.020712524205,
            flag: "11101"
          },
          {
            label: "B2",
            x: 23.349999999999998,
            y: 25.85,
            z: 0.030826469350000003,
            flag: "00001"
          },
          {
            label: "5",
            x: 7.75,
            y: 26.55,
            z: 0.513652024,
            flag: "11100"
          },
          {
            label: "A3",
            x: 4.6000000000000005,
            y: 29.3,
            z: 0.97362605,
            flag: "00110"
          },
          {
            label: "A2",
            x: 6.95,
            y: 31.05,
            z: 0.9900485000000001,
            flag: "01010"
          },
          {
            label: "A1",
            x: 19.099999999999998,
            y: 31.950000000000003,
            z: 0.083547345,
            flag: "00101"
          },
          {
            label: "2",
            x: 24.8,
            y: 32.949999999999996,
            z: 0.154361849,
            flag: "11101"
          },
          {
            label: "3",
            x: 10.45,
            y: 33.64999999999999,
            z: 0.9510911725,
            flag: "10010"
          },
          {
            label: "B1",
            x: 26.500000000000004,
            y: 34.65,
            z: 0.2557311565,
            flag: "11010"
          },
          {
            label: "4",
            x: 3.05,
            y: 34.95,
            z: 0.8299999499999999,
            flag: "10100"
          },
          {
            label: "1",
            x: 30.35,
            y: 36.199999999999996,
            z: 0.272641134,
            flag: "11000"
          }
        ]
      },
      fate: {
        ids: [
          6392
        ]
      }
    },
    {
      id: 622,
      placeNameId: 2411,
      weatherRateId: 85,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 1,
      markers: [
        {
          x: 1593,
          y: 1294,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1587,
          y: 1402,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1566,
          y: 1342,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1567,
          y: 1406,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1598,
          y: 1402,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1596,
          y: 1345,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1596,
          y: 1327,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1577,
          y: 1399,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1579,
          y: 1333,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1525,
          y: 560,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1512,
          y: 519,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1110,
          y: 987,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1122,
          y: 1048,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1115,
          y: 1048,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1086,
          y: 1065,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1090,
          y: 1016,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 542,
          y: 1626,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1609,
          y: 1394,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1580,
          y: 1363,
          placeNameId: 2814,
          icon: "060453"
        },
        {
          x: 1609,
          y: 1200,
          placeNameId: 2815,
          icon: "060442"
        },
        {
          x: 1762,
          y: 830,
          placeNameId: 2816,
          icon: "060442"
        },
        {
          x: 1316,
          y: 1304,
          placeNameId: 2820,
          icon: "060442"
        },
        {
          x: 1533,
          y: 526,
          placeNameId: 2821,
          icon: "060442"
        },
        {
          x: 1102,
          y: 1057,
          placeNameId: 2822,
          icon: "060453"
        },
        {
          x: 1191,
          y: 1045,
          placeNameId: 2824,
          icon: "060442"
        },
        {
          x: 1353,
          y: 344,
          placeNameId: 2827,
          icon: "060442"
        },
        {
          x: 1268,
          y: 468,
          placeNameId: 2829,
          icon: "060442"
        },
        {
          x: 959,
          y: 571,
          placeNameId: 2832,
          icon: "060442"
        },
        {
          x: 515,
          y: 505,
          placeNameId: 2833,
          icon: "060414"
        },
        {
          x: 642,
          y: 590,
          placeNameId: 2834,
          icon: "060442"
        },
        {
          x: 573,
          y: 944,
          placeNameId: 2835,
          icon: "060442"
        },
        {
          x: 357,
          y: 1434,
          placeNameId: 2836,
          icon: "060442"
        },
        {
          x: 696,
          y: 1275,
          placeNameId: 2837,
          icon: "060442"
        },
        {
          x: 927,
          y: 1621,
          placeNameId: 2838,
          icon: "060442"
        },
        {
          x: 571,
          y: 1621,
          placeNameId: 2842,
          icon: "060442"
        },
        {
          x: 866,
          y: 1892,
          placeNameId: 2410,
          icon: "060441"
        },
        {
          x: 1568,
          y: 1724,
          placeNameId: 2409,
          icon: "060441"
        },
        {
          x: 240,
          y: 1127,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 269,
          y: 1141,
          placeNameId: 2850,
          icon: "060453"
        },
        {
          x: 255,
          y: 1162,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 322,
          y: 1136,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 396,
          y: 1124,
          placeNameId: 0,
          icon: "060446"
        }
      ],
      exVersionId: 2,
      filter: true,
      elite: {
        ids: [
          5986,
          6000,
          6001,
          6006,
          6007
        ],
        locations: [
          {
            label: "8",
            x: 27.25,
            y: 8.850000000000001,
            z: 1.176844365,
            flag: "11101"
          },
          {
            label: "11",
            x: 19.400000000000002,
            y: 10.100000000000001,
            z: 0.799055026,
            flag: "11101"
          },
          {
            label: "12",
            x: 13.45,
            y: 10.5,
            z: 0.74160062,
            flag: "11101"
          },
          {
            label: "7",
            x: 34.7,
            y: 15.2,
            z: 0.137082591,
            flag: "11101"
          },
          {
            label: "9",
            x: 22.250000000000004,
            y: 16.250000000000004,
            z: 0.3083395415,
            flag: "11101"
          },
          {
            label: "13",
            x: 12.9,
            y: 17.25,
            z: 0.5201031395,
            flag: "11101"
          },
          {
            label: "6",
            x: 27.849999999999998,
            y: 18.8,
            z: 0.1083973065,
            flag: "11101"
          },
          {
            label: "10",
            x: 17.3,
            y: 18.650000000000002,
            z: 0.321004788,
            flag: "11101"
          },
          {
            label: "14",
            x: 9.600000000000001,
            y: 22.35,
            z: 0.418326112,
            flag: "11110"
          },
          {
            label: "17",
            x: 15.05,
            y: 25.8,
            z: 0.212381916,
            flag: "11110"
          },
          {
            label: "5",
            x: 27.85,
            y: 25.55,
            z: -0.017754757999999995,
            flag: "11101"
          },
          {
            label: "15",
            x: 9.8,
            y: 25.8,
            z: 0.682249923,
            flag: "11110"
          },
          {
            label: "16",
            x: 11.4,
            y: 28.35,
            z: 0.1495985225,
            flag: "11110"
          },
          {
            label: "18",
            x: 15.700000000000001,
            y: 30.2,
            z: 0.05702773635,
            flag: "11110"
          },
          {
            label: "4",
            x: 24.3,
            y: 30.2,
            z: -0.1683655745,
            flag: "11110"
          },
          {
            label: "2",
            x: 21.8,
            y: 34.3,
            z: 0.36694712250000006,
            flag: "11110"
          },
          {
            label: "3",
            x: 26.7,
            y: 34.3,
            z: -0.33437597249999995,
            flag: "11110"
          },
          {
            label: "1",
            x: 17.849999999999998,
            y: 34.5,
            z: 0.0417855191,
            flag: "11110"
          }
        ]
      }
    },
    {
      id: 813,
      placeNameId: 2953,
      weatherRateId: 106,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -2,
      markers: [
        {
          x: 1200,
          y: 1075,
          placeNameId: 3040,
          icon: "060442"
        },
        {
          x: 1570,
          y: 1355,
          placeNameId: 3041,
          icon: "060442"
        },
        {
          x: 1778,
          y: 995,
          placeNameId: 3044,
          icon: "060453"
        },
        {
          x: 1770,
          y: 900,
          placeNameId: 3045,
          icon: "060442"
        },
        {
          x: 1580,
          y: 1665,
          placeNameId: 3046,
          icon: "060442"
        },
        {
          x: 872,
          y: 900,
          placeNameId: 3047,
          icon: "060442"
        },
        {
          x: 825,
          y: 580,
          placeNameId: 3048,
          icon: "060442"
        },
        {
          x: 1650,
          y: 400,
          placeNameId: 3049,
          icon: "060442"
        },
        {
          x: 1719,
          y: 300,
          placeNameId: 3050,
          icon: "060414"
        },
        {
          x: 650,
          y: 350,
          placeNameId: 3051,
          icon: "060442"
        },
        {
          x: 1321,
          y: 459,
          placeNameId: 3052,
          icon: "060442"
        },
        {
          x: 1260,
          y: 790,
          placeNameId: 3054,
          icon: "060442"
        },
        {
          x: 1060,
          y: 700,
          placeNameId: 3055,
          icon: "060442"
        },
        {
          x: 370,
          y: 425,
          placeNameId: 3056,
          icon: "060442"
        },
        {
          x: 290,
          y: 795,
          placeNameId: 3057,
          icon: "060453"
        },
        {
          x: 650,
          y: 765,
          placeNameId: 3058,
          icon: "060442"
        },
        {
          x: 1120,
          y: 1685,
          placeNameId: 3060,
          icon: "060442"
        },
        {
          x: 1000,
          y: 1720,
          placeNameId: 3061,
          icon: "060442"
        },
        {
          x: 905,
          y: 1760,
          placeNameId: 3062,
          icon: "060442"
        },
        {
          x: 800,
          y: 1780,
          placeNameId: 3063,
          icon: "060442"
        },
        {
          x: 400,
          y: 1260,
          placeNameId: 3064,
          icon: "060442"
        },
        {
          x: 290,
          y: 1115,
          placeNameId: 3065,
          icon: "060442"
        },
        {
          x: 500,
          y: 1020,
          placeNameId: 3066,
          icon: "060442"
        },
        {
          x: 400,
          y: 1835,
          placeNameId: 3068,
          icon: "060442"
        },
        {
          x: 690,
          y: 145,
          placeNameId: 2956,
          icon: "060441"
        },
        {
          x: 1555,
          y: 1890,
          placeNameId: 2955,
          icon: "060441"
        },
        {
          x: 1905,
          y: 735,
          placeNameId: 2957,
          icon: "060441"
        },
        {
          x: 1855,
          y: 1430,
          placeNameId: 2951,
          icon: "060441"
        },
        {
          x: 1738,
          y: 977,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1748,
          y: 1002,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1687,
          y: 963,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 883,
          y: 895,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 238,
          y: 804,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 238,
          y: 795,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 334,
          y: 758,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 434,
          y: 850,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 895,
          y: 1732,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 900,
          y: 1672,
          placeNameId: 3385,
          icon: "060414"
        },
        {
          x: 424,
          y: 606,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 401,
          y: 621,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 421,
          y: 594,
          placeNameId: 3574,
          icon: "060442"
        }
      ],
      exVersionId: 3,
      elite: {
        ids: [
          8905,
          8906,
          8907,
          8908,
          8909
        ],
        locations: [
          {
            label: "7",
            x: 19.650000000000002,
            y: 9.65,
            z: 0.9581954500000001,
            flag: "10110"
          },
          {
            label: "1",
            x: 36.699999999999996,
            y: 12.350000000000001,
            z: 0.8311077499999999,
            flag: "10101"
          },
          {
            label: "6",
            x: 23.25,
            y: 12.3,
            z: 1.11267163,
            flag: "10110"
          },
          {
            label: "8",
            x: 11.700000000000001,
            y: 12.5,
            z: 0.7287085765000001,
            flag: "10110"
          },
          {
            label: "5",
            x: 27.45,
            y: 15.700000000000001,
            z: 1.16553585,
            flag: "10110"
          },
          {
            label: "2",
            x: 35.5,
            y: 16,
            z: 0.2835165215,
            flag: "10101"
          },
          {
            label: "9",
            x: 11.75,
            y: 17.3,
            z: 0.13859513750000002,
            flag: "10110"
          },
          {
            label: "4",
            x: 29.75,
            y: 19.05,
            z: 1.150239865,
            flag: "10110"
          },
          {
            label: "3",
            x: 30.95,
            y: 22.35,
            z: 0.05959848845,
            flag: "10101"
          },
          {
            label: "10",
            x: 8.05,
            y: 22.900000000000002,
            z: 0.708412972,
            flag: "00110"
          },
          {
            label: "12",
            x: 18.45,
            y: 23.150000000000002,
            z: 0.013428324145,
            flag: "11110"
          },
          {
            label: "13",
            x: 25.45,
            y: 23.849999999999998,
            z: 0.12488297005,
            flag: "11101"
          },
          {
            label: "11",
            x: 14.05,
            y: 24.7,
            z: 0.005051797,
            flag: "11110"
          },
          {
            label: "18",
            x: 35.75,
            y: 26.85,
            z: 0.1321203515,
            flag: "00101"
          },
          {
            label: "14",
            x: 23.05,
            y: 29.8,
            z: 0.0027417791,
            flag: "11101"
          },
          {
            label: "15",
            x: 27.900000000000002,
            y: 30.650000000000002,
            z: 0.09232735865,
            flag: "11101"
          },
          {
            label: "17",
            x: 35.25,
            y: 32.199999999999996,
            z: 0.051965067399999995,
            flag: "00101"
          },
          {
            label: "16",
            x: 27.000000000000004,
            y: 37.349999999999994,
            z: 0.175210419,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          8915,
          8916
        ],
        locations: [
          {
            label: "FR",
            x: 23.4,
            y: 22.1,
            z: 0,
            flag: "10"
          },
          {
            label: "F2",
            x: 12.68,
            y: 10.6,
            z: 0,
            flag: "01"
          },
          {
            label: "F1",
            x: 33.48,
            y: 12.24,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 10.85,
            y: 25.13,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 30.11,
            y: 36.35,
            z: 0,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 814,
      placeNameId: 2954,
      weatherRateId: 107,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      markers: [
        {
          x: 1650,
          y: 1575,
          placeNameId: 3074,
          icon: "060442"
        },
        {
          x: 1692,
          y: 1313,
          placeNameId: 3075,
          icon: "060453"
        },
        {
          x: 1710,
          y: 1305,
          placeNameId: 3076,
          icon: "060442"
        },
        {
          x: 1700,
          y: 1060,
          placeNameId: 3077,
          icon: "060442"
        },
        {
          x: 1410,
          y: 985,
          placeNameId: 3078,
          icon: "060442"
        },
        {
          x: 1515,
          y: 1065,
          placeNameId: 3079,
          icon: "060442"
        },
        {
          x: 1475,
          y: 1315,
          placeNameId: 3081,
          icon: "060442"
        },
        {
          x: 1425,
          y: 1085,
          placeNameId: 3082,
          icon: "060442"
        },
        {
          x: 1186,
          y: 1239,
          placeNameId: 3084,
          icon: "060442"
        },
        {
          x: 1190,
          y: 1760,
          placeNameId: 3085,
          icon: "060442"
        },
        {
          x: 1195,
          y: 1900,
          placeNameId: 3086,
          icon: "060442"
        },
        {
          x: 1320,
          y: 1370,
          placeNameId: 3088,
          icon: "060442"
        },
        {
          x: 995,
          y: 1725,
          placeNameId: 3089,
          icon: "060442"
        },
        {
          x: 825,
          y: 1800,
          placeNameId: 3090,
          icon: "060442"
        },
        {
          x: 730,
          y: 1210,
          placeNameId: 3091,
          icon: "060442"
        },
        {
          x: 555,
          y: 1555,
          placeNameId: 3092,
          icon: "060442"
        },
        {
          x: 485,
          y: 1665,
          placeNameId: 3093,
          icon: "060442"
        },
        {
          x: 780,
          y: 1410,
          placeNameId: 3094,
          icon: "060453"
        },
        {
          x: 230,
          y: 1460,
          placeNameId: 3095,
          icon: "060442"
        },
        {
          x: 310,
          y: 1655,
          placeNameId: 3096,
          icon: "060442"
        },
        {
          x: 555,
          y: 1125,
          placeNameId: 3097,
          icon: "060442"
        },
        {
          x: 555,
          y: 1040,
          placeNameId: 3098,
          icon: "060442"
        },
        {
          x: 295,
          y: 1715,
          placeNameId: 3099,
          icon: "060442"
        },
        {
          x: 265,
          y: 1900,
          placeNameId: 3101,
          icon: "060442"
        },
        {
          x: 555,
          y: 955,
          placeNameId: 3102,
          icon: "060442"
        },
        {
          x: 895,
          y: 825,
          placeNameId: 3103,
          icon: "060448"
        },
        {
          x: 965,
          y: 585,
          placeNameId: 3104,
          icon: "060442"
        },
        {
          x: 598,
          y: 400,
          placeNameId: 3105,
          icon: "060453"
        },
        {
          x: 854,
          y: 214,
          placeNameId: 2997,
          icon: "060414"
        },
        {
          x: 1395,
          y: 870,
          placeNameId: 3109,
          icon: "060442"
        },
        {
          x: 1270,
          y: 635,
          placeNameId: 3110,
          icon: "060442"
        },
        {
          x: 1650,
          y: 850,
          placeNameId: 3111,
          icon: "060442"
        },
        {
          x: 1695,
          y: 460,
          placeNameId: 3112,
          icon: "060442"
        },
        {
          x: 1545,
          y: 640,
          placeNameId: 3113,
          icon: "060442"
        },
        {
          x: 1830,
          y: 1300,
          placeNameId: 2951,
          icon: "060441"
        },
        {
          x: 1200,
          y: 1925,
          placeNameId: 2952,
          icon: "060441"
        },
        {
          x: 765,
          y: 1375,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 1708,
          y: 1316,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1675,
          y: 1323,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1717,
          y: 1332,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 800,
          y: 1396,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 714,
          y: 1390,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 569,
          y: 1082,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 569,
          y: 1007,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 528,
          y: 1610,
          placeNameId: 2958,
          icon: "060441"
        },
        {
          x: 611,
          y: 424,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 549,
          y: 383,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 545,
          y: 393,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 592,
          y: 386,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1716,
          y: 1322,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 787,
          y: 1370,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 568,
          y: 402,
          placeNameId: 3354,
          icon: "060442"
        },
        {
          x: 1665,
          y: 830,
          placeNameId: 3355,
          icon: "060442"
        },
        {
          x: 523,
          y: 1604,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 1825,
          y: 1295,
          placeNameId: 0,
          icon: "060352"
        },
        {
          x: 1762,
          y: 941,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 485,
          y: 1763,
          placeNameId: 3467,
          icon: "060414"
        },
        {
          x: 529,
          y: 1629,
          placeNameId: 0,
          icon: "060456"
        },
        {
          x: 1716,
          y: 858,
          placeNameId: 3492,
          icon: "060428"
        },
        {
          x: 1730,
          y: 867,
          placeNameId: 0,
          icon: "060467"
        }
      ],
      exVersionId: 3,
      elite: {
        ids: [
          8910,
          8911,
          8912,
          8913,
          8914
        ],
        locations: [
          {
            label: "10",
            x: 16.900000000000002,
            y: 7.1499999999999995,
            z: 4.619719999999999,
            flag: "11110"
          },
          {
            label: "11",
            x: 19.650000000000002,
            y: 10.650000000000002,
            z: 4.074042175,
            flag: "11110"
          },
          {
            label: "12",
            x: 25.000000000000004,
            y: 11.55,
            z: 3.283686525,
            flag: "11110"
          },
          {
            label: "13",
            x: 22.150000000000002,
            y: 14.150000000000002,
            z: 3.49851654,
            flag: "11110"
          },
          {
            label: "9",
            x: 14.900000000000002,
            y: 15.75,
            z: 3.640454665,
            flag: "11110"
          },
          {
            label: "14",
            x: 22.900000000000002,
            y: 17.400000000000002,
            z: 3.3947385,
            flag: "11110"
          },
          {
            label: "8",
            x: 11.3,
            y: 18.500000000000004,
            z: 3.4249279799999996,
            flag: "11110"
          },
          {
            label: "16",
            x: 26.750000000000004,
            y: 19.25,
            z: 3.033244335,
            flag: "11110"
          },
          {
            label: "17",
            x: 31.5,
            y: 19.8,
            z: 2.869724885,
            flag: "11110"
          },
          {
            label: "15",
            x: 21.3,
            y: 22.7,
            z: 3.1969656349999998,
            flag: "11110"
          },
          {
            label: "6",
            x: 15,
            y: 24.45,
            z: 0.514459384,
            flag: "11001"
          },
          {
            label: "3",
            x: 26.45,
            y: 24.25,
            z: 0.3559984015,
            flag: "11001"
          },
          {
            label: "1",
            x: 34.5,
            y: 24.45,
            z: 0.4040239525,
            flag: "11001"
          },
          {
            label: "7",
            x: 9.55,
            y: 25.45,
            z: 0.5348201875,
            flag: "11001"
          },
          {
            label: "2",
            x: 29.900000000000002,
            y: 30.150000000000002,
            z: 0.12484899999999999,
            flag: "11001"
          },
          {
            label: "4",
            x: 24.6,
            y: 30.05,
            z: 0.2073262285,
            flag: "11001"
          },
          {
            label: "5",
            x: 20.900000000000002,
            y: 31.349999999999998,
            z: 0.1655163195,
            flag: "11001"
          }
        ]
      },
      ss: {
        ids: [
          8915,
          8916
        ],
        locations: [
          {
            label: "FR",
            x: 34.63,
            y: 10.51,
            z: 0,
            flag: "10"
          },
          {
            label: "F3",
            x: 12.31,
            y: 14.97,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 23.94,
            y: 15.29,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 8.71,
            y: 28.8,
            z: 0,
            flag: "01"
          },
          {
            label: "F1",
            x: 33.54,
            y: 33.02,
            z: 0,
            flag: "01"
          }
        ]
      },
      fate: {
        ids: [
          8822
        ]
      }
    },
    {
      id: 815,
      placeNameId: 2955,
      weatherRateId: 108,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -117,
      markers: [
        {
          x: 1695,
          y: 370,
          placeNameId: 3119,
          icon: "060448"
        },
        {
          x: 1490,
          y: 700,
          placeNameId: 3121,
          icon: "060442"
        },
        {
          x: 1270,
          y: 800,
          placeNameId: 3122,
          icon: "060453"
        },
        {
          x: 1210,
          y: 800,
          placeNameId: 3123,
          icon: "060442"
        },
        {
          x: 1155,
          y: 670,
          placeNameId: 3124,
          icon: "060442"
        },
        {
          x: 1175,
          y: 930,
          placeNameId: 3125,
          icon: "060442"
        },
        {
          x: 1660,
          y: 675,
          placeNameId: 3126,
          icon: "060442"
        },
        {
          x: 1545,
          y: 810,
          placeNameId: 3127,
          icon: "060442"
        },
        {
          x: 1505,
          y: 960,
          placeNameId: 3128,
          icon: "060442"
        },
        {
          x: 1423,
          y: 1332,
          placeNameId: 3129,
          icon: "060453"
        },
        {
          x: 1380,
          y: 1545,
          placeNameId: 3130,
          icon: "060442"
        },
        {
          x: 1005,
          y: 445,
          placeNameId: 3132,
          icon: "060442"
        },
        {
          x: 605,
          y: 450,
          placeNameId: 3133,
          icon: "060448"
        },
        {
          x: 1005,
          y: 845,
          placeNameId: 3134,
          icon: "060442"
        },
        {
          x: 513,
          y: 811,
          placeNameId: 3135,
          icon: "060453"
        },
        {
          x: 1000,
          y: 1010,
          placeNameId: 3136,
          icon: "060442"
        },
        {
          x: 985,
          y: 1270,
          placeNameId: 3137,
          icon: "060442"
        },
        {
          x: 455,
          y: 1085,
          placeNameId: 3138,
          icon: "060442"
        },
        {
          x: 516,
          y: 1514,
          placeNameId: 3139,
          icon: "060414"
        },
        {
          x: 705,
          y: 1445,
          placeNameId: 3140,
          icon: "060442"
        },
        {
          x: 1115,
          y: 1400,
          placeNameId: 3141,
          icon: "060442"
        },
        {
          x: 1180,
          y: 1725,
          placeNameId: 3142,
          icon: "060442"
        },
        {
          x: 1715,
          y: 365,
          placeNameId: 2951,
          icon: "060441"
        },
        {
          x: 370,
          y: 340,
          placeNameId: 2953,
          icon: "060441"
        },
        {
          x: 1339,
          y: 833,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1342,
          y: 807,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1323,
          y: 787,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1305,
          y: 739,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1306,
          y: 785,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 1312,
          y: 838,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1305,
          y: 759,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 589,
          y: 443,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 492,
          y: 788,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 531,
          y: 739,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 1410,
          y: 1299,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 1409,
          y: 1535,
          placeNameId: 3143,
          icon: "060441"
        },
        {
          x: 1404,
          y: 1530,
          placeNameId: 0,
          icon: "060352"
        },
        {
          x: 549,
          y: 786,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 849,
          y: 1241,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1710,
          y: 360,
          placeNameId: 0,
          icon: "060352"
        },
        {
          x: 1284,
          y: 770,
          placeNameId: 0,
          icon: "060935"
        }
      ],
      exVersionId: 3,
      filter: true,
      elite: {
        ids: [
          8900,
          8901,
          8902,
          8903,
          8904
        ],
        locations: [
          {
            label: "B1",
            x: 22.55,
            y: 10.4,
            z: 1.6267427065,
            flag: "00010"
          },
          {
            label: "14",
            x: 16.6,
            y: 10.4,
            z: 1.5203372865,
            flag: "10110"
          },
          {
            label: "15",
            x: 10.4,
            y: 12,
            z: 1.16600244045,
            flag: "10110"
          },
          {
            label: "1",
            x: 28.7,
            y: 12.200000000000001,
            z: 0.8334813515,
            flag: "11101"
          },
          {
            label: "2",
            x: 30.849999999999998,
            y: 13.8,
            z: 0.7817599675,
            flag: "11101"
          },
          {
            label: "13",
            x: 19.250000000000004,
            y: 16.3,
            z: 1.497331295,
            flag: "10110"
          },
          {
            label: "12",
            x: 11.75,
            y: 19.45,
            z: 1.4193070985,
            flag: "10110"
          },
          {
            label: "3",
            x: 28.7,
            y: 20.150000000000002,
            z: 0.9823037,
            flag: "11101"
          },
          {
            label: "4",
            x: 33.599999999999994,
            y: 21.650000000000002,
            z: 0.8587113945,
            flag: "11101"
          },
          {
            label: "11",
            x: 16.400000000000002,
            y: 24.150000000000002,
            z: 1.2336489582,
            flag: "10110"
          },
          {
            label: "10",
            x: 19,
            y: 25,
            z: 0.857779922,
            flag: "10110"
          },
          {
            label: "5",
            x: 28.45,
            y: 26.150000000000002,
            z: 0.7885486785,
            flag: "11101"
          },
          {
            label: "A2",
            x: 19.8,
            y: 28.900000000000002,
            z: 0.5601976715,
            flag: "00110"
          },
          {
            label: "A1",
            x: 23.2,
            y: 29.750000000000004,
            z: 0.06874336,
            flag: "01101"
          },
          {
            label: "9",
            x: 17.2,
            y: 31.7,
            z: 0.5407488250000001,
            flag: "10110"
          },
          {
            label: "6",
            x: 32.8,
            y: 33.9,
            z: 0.12549428,
            flag: "11101"
          },
          {
            label: "7",
            x: 30.500000000000004,
            y: 35.15,
            z: 0.27180408300000003,
            flag: "11101"
          },
          {
            label: "8",
            x: 19.95,
            y: 36.55,
            z: 0.6210369,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          8915,
          8916
        ],
        locations: [
          {
            label: "FR",
            x: 27.4,
            y: 35.73,
            z: 0,
            flag: "10"
          },
          {
            label: "F1",
            x: 30.43,
            y: 10.47,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 13.6,
            y: 12.1,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 30.3,
            y: 24.7,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 14.2,
            y: 32.5,
            z: 0,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 816,
      placeNameId: 2956,
      weatherRateId: 109,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      markers: [
        {
          x: 680,
          y: 1535,
          placeNameId: 3147,
          icon: "060453"
        },
        {
          x: 990,
          y: 1795,
          placeNameId: 3148,
          icon: "060442"
        },
        {
          x: 1160,
          y: 1480,
          placeNameId: 3149,
          icon: "060414"
        },
        {
          x: 430,
          y: 800,
          placeNameId: 3150,
          icon: "060442"
        },
        {
          x: 60,
          y: 1010,
          placeNameId: 3151,
          icon: "060442"
        },
        {
          x: 1456,
          y: 1348,
          placeNameId: 3152,
          icon: "060442"
        },
        {
          x: 672,
          y: 727,
          placeNameId: 3153,
          icon: "060442"
        },
        {
          x: 910,
          y: 1039,
          placeNameId: 3154,
          icon: "060442"
        },
        {
          x: 952,
          y: 167,
          placeNameId: 3156,
          icon: "060453"
        },
        {
          x: 1405,
          y: 337,
          placeNameId: 3157,
          icon: "060453"
        },
        {
          x: 1145,
          y: 565,
          placeNameId: 3158,
          icon: "060442"
        },
        {
          x: 1660,
          y: 200,
          placeNameId: 3159,
          icon: "060442"
        },
        {
          x: 1530,
          y: 885,
          placeNameId: 3160,
          icon: "060442"
        },
        {
          x: 1635,
          y: 1225,
          placeNameId: 3161,
          icon: "060442"
        },
        {
          x: 1695,
          y: 1365,
          placeNameId: 3162,
          icon: "060442"
        },
        {
          x: 1095,
          y: 921,
          placeNameId: 3163,
          icon: "060442"
        },
        {
          x: 865,
          y: 715,
          placeNameId: 3164,
          icon: "060442"
        },
        {
          x: 328,
          y: 1863,
          placeNameId: 2953,
          icon: "060441"
        },
        {
          x: 704,
          y: 1554,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 694,
          y: 1562,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 591,
          y: 1573,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 979,
          y: 167,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 938,
          y: 161,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1074,
          y: 173,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 1375,
          y: 376,
          placeNameId: 2238,
          icon: "060311"
        },
        {
          x: 1156,
          y: 790,
          placeNameId: 3360,
          icon: "060442"
        },
        {
          x: 980,
          y: 1764,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 755,
          y: 1470,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 562,
          y: 1610,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 576,
          y: 1593,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 775,
          y: 1637,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 775,
          y: 1648,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 785,
          y: 1645,
          placeNameId: 0,
          icon: "060927"
        }
      ],
      exVersionId: 3,
      filter: true,
      elite: {
        ids: [
          8653,
          8654,
          8655,
          8656,
          8657
        ],
        locations: [
          {
            label: "14",
            x: 29.400000000000002,
            y: 5.45,
            z: 0.8902953255,
            flag: "11101"
          },
          {
            label: "13",
            x: 25.5,
            y: 6.999999999999999,
            z: 0.7611486255,
            flag: "11101"
          },
          {
            label: "15",
            x: 33.89999999999999,
            y: 7.1499999999999995,
            z: 1.07500347,
            flag: "11101"
          },
          {
            label: "12",
            x: 19.95,
            y: 8.75,
            z: 0.525060022,
            flag: "11101"
          },
          {
            label: "16",
            x: 31.349999999999998,
            y: 13.700000000000001,
            z: 0.9165882280000001,
            flag: "11101"
          },
          {
            label: "11",
            x: 11.100000000000001,
            y: 15.8,
            z: 0.371742592,
            flag: "11110"
          },
          {
            label: "17",
            x: 27.1,
            y: 19,
            z: 0.3973796655,
            flag: "11101"
          },
          {
            label: "10",
            x: 10.5,
            y: 20.2,
            z: 0.113086692,
            flag: "11110"
          },
          {
            label: "9",
            x: 7.5,
            y: 22.8,
            z: 0.354952032,
            flag: "11110"
          },
          {
            label: "8",
            x: 8.05,
            y: 27.000000000000004,
            z: 0.4051834485,
            flag: "11110"
          },
          {
            label: "6",
            x: 19.150000000000002,
            y: 27.25,
            z: 0.03964030605,
            flag: "11110"
          },
          {
            label: "5",
            x: 23,
            y: 28.500000000000004,
            z: 0.006891975315,
            flag: "11110"
          },
          {
            label: "7",
            x: 9.850000000000001,
            y: 30.55,
            z: 0.64731295,
            flag: "11110"
          },
          {
            label: "4",
            x: 24.55,
            y: 32.849999999999994,
            z: 0.015391356294999999,
            flag: "11110"
          },
          {
            label: "1",
            x: 13.700000000000001,
            y: 34.099999999999994,
            z: 0.70765535,
            flag: "11110"
          },
          {
            label: "2",
            x: 19.650000000000002,
            y: 34.849999999999994,
            z: 0.310323744,
            flag: "11110"
          },
          {
            label: "3",
            x: 24.750000000000004,
            y: 37.15,
            z: 0.008956104909999998,
            flag: "11110"
          }
        ]
      },
      ss: {
        ids: [
          8915,
          8916
        ],
        locations: [
          {
            label: "FR",
            x: 13.6,
            y: 23.13,
            z: 0,
            flag: "10"
          },
          {
            label: "F3",
            x: 32.51,
            y: 11.32,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 24.96,
            y: 22.14,
            z: 0,
            flag: "01"
          },
          {
            label: "F1",
            x: 5.9,
            y: 29.74,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 23.51,
            y: 35.78,
            z: 0,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 817,
      placeNameId: 2957,
      weatherRateId: 110,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      markers: [
        {
          x: 620,
          y: 1580,
          placeNameId: 3169,
          icon: "060442"
        },
        {
          x: 921,
          y: 1321,
          placeNameId: 3170,
          icon: "060453"
        },
        {
          x: 950,
          y: 1450,
          placeNameId: 3171,
          icon: "060442"
        },
        {
          x: 795,
          y: 965,
          placeNameId: 3172,
          icon: "060442"
        },
        {
          x: 715,
          y: 830,
          placeNameId: 3173,
          icon: "060442"
        },
        {
          x: 368,
          y: 916,
          placeNameId: 3174,
          icon: "060442"
        },
        {
          x: 264,
          y: 684,
          placeNameId: 3175,
          icon: "060442"
        },
        {
          x: 330,
          y: 1235,
          placeNameId: 3176,
          icon: "060442"
        },
        {
          x: 360,
          y: 1510,
          placeNameId: 3177,
          icon: "060442"
        },
        {
          x: 240,
          y: 1280,
          placeNameId: 3178,
          icon: "060442"
        },
        {
          x: 1405,
          y: 830,
          placeNameId: 3179,
          icon: "060453"
        },
        {
          x: 1475,
          y: 825,
          placeNameId: 3180,
          icon: "060442"
        },
        {
          x: 1195,
          y: 1365,
          placeNameId: 3181,
          icon: "060442"
        },
        {
          x: 1588,
          y: 1172,
          placeNameId: 3182,
          icon: "060442"
        },
        {
          x: 1172,
          y: 1675,
          placeNameId: 3183,
          icon: "060442"
        },
        {
          x: 1195,
          y: 550,
          placeNameId: 3185,
          icon: "060442"
        },
        {
          x: 1140,
          y: 515,
          placeNameId: 3186,
          icon: "060442"
        },
        {
          x: 1145,
          y: 595,
          placeNameId: 3187,
          icon: "060442"
        },
        {
          x: 1250,
          y: 510,
          placeNameId: 3188,
          icon: "060442"
        },
        {
          x: 1250,
          y: 600,
          placeNameId: 3189,
          icon: "060442"
        },
        {
          x: 1195,
          y: 380,
          placeNameId: 3190,
          icon: "060442"
        },
        {
          x: 1145,
          y: 150,
          placeNameId: 3191,
          icon: "060442"
        },
        {
          x: 205,
          y: 1775,
          placeNameId: 2953,
          icon: "060441"
        },
        {
          x: 1879,
          y: 635,
          placeNameId: 3018,
          icon: "060414"
        },
        {
          x: 918,
          y: 1293,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 938,
          y: 1305,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1360,
          y: 875,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1338,
          y: 851,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1333,
          y: 856,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1530,
          y: 756,
          placeNameId: 3374,
          icon: "060311"
        },
        {
          x: 789,
          y: 1690,
          placeNameId: 3361,
          icon: "060442"
        },
        {
          x: 560,
          y: 1220,
          placeNameId: 3363,
          icon: "060442"
        },
        {
          x: 434,
          y: 996,
          placeNameId: 3365,
          icon: "060442"
        },
        {
          x: 1136,
          y: 864,
          placeNameId: 3366,
          icon: "060442"
        },
        {
          x: 1266,
          y: 898,
          placeNameId: 3367,
          icon: "060442"
        },
        {
          x: 1610,
          y: 640,
          placeNameId: 3368,
          icon: "060442"
        },
        {
          x: 448,
          y: 1332,
          placeNameId: 3178,
          icon: "060442"
        },
        {
          x: 446,
          y: 1454,
          placeNameId: 3178,
          icon: "060442"
        },
        {
          x: 900,
          y: 1295,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1816,
          y: 806,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1807,
          y: 837,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1816,
          y: 826,
          placeNameId: 3472,
          icon: "060442"
        }
      ],
      exVersionId: 3,
      elite: {
        ids: [
          8890,
          8891,
          8892,
          8893,
          8894
        ],
        locations: [
          {
            label: "15",
            x: 22.6,
            y: 10.850000000000001,
            z: -0.201913862,
            flag: "11001"
          },
          {
            label: "14",
            x: 21.85,
            y: 13.4,
            z: -0.0556064844,
            flag: "11001"
          },
          {
            label: "13",
            x: 26.3,
            y: 15.100000000000001,
            z: 0.0455772366,
            flag: "11001"
          },
          {
            label: "6",
            x: 9.45,
            y: 18.75,
            z: 0.17175669649999997,
            flag: "11110"
          },
          {
            label: "7",
            x: 14.55,
            y: 22.25,
            z: 0.0718848,
            flag: "11110"
          },
          {
            label: "12",
            x: 33.5,
            y: 22.750000000000004,
            z: 0.2340571595,
            flag: "11101"
          },
          {
            label: "10",
            x: 26.150000000000002,
            y: 24.2,
            z: 0.16692747600000002,
            flag: "11101"
          },
          {
            label: "5",
            x: 9.95,
            y: 24.1,
            z: 0.0343249116,
            flag: "11110"
          },
          {
            label: "8",
            x: 16.900000000000002,
            y: 24.3,
            z: 0.12076076000000001,
            flag: "11110"
          },
          {
            label: "11",
            x: 29.45,
            y: 25.900000000000002,
            z: 0.31455009450000004,
            flag: "11101"
          },
          {
            label: "4",
            x: 15.05,
            y: 30.3,
            z: 0.16071354399999999,
            flag: "11110"
          },
          {
            label: "9",
            x: 25.25,
            y: 30.35,
            z: -0.1374231815,
            flag: "11101"
          },
          {
            label: "1",
            x: 8.5,
            y: 34.8,
            z: 0.0519298134,
            flag: "11110"
          },
          {
            label: "3",
            x: 17.75,
            y: 35.2,
            z: 0.100455985,
            flag: "11110"
          },
          {
            label: "2",
            x: 12.200000000000001,
            y: 36,
            z: -0.00300000021,
            flag: "11110"
          }
        ]
      },
      ss: {
        ids: [
          8915,
          8916
        ],
        locations: [
          {
            label: "FR",
            x: 24.4,
            y: 37.33,
            z: 0,
            flag: "10"
          },
          {
            label: "F4",
            x: 29.9,
            y: 13.06,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 7.42,
            y: 21.46,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 18.9,
            y: 22.53,
            z: 0,
            flag: "01"
          },
          {
            label: "F1",
            x: 14.63,
            y: 36.69,
            z: 0,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 818,
      placeNameId: 2958,
      weatherRateId: 111,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 548,
      markers: [
        {
          x: 1585,
          y: 825,
          placeNameId: 3195,
          icon: "060453"
        },
        {
          x: 505,
          y: 225,
          placeNameId: 3196,
          icon: "060442"
        },
        {
          x: 1675,
          y: 1215,
          placeNameId: 3197,
          icon: "060442"
        },
        {
          x: 1920,
          y: 855,
          placeNameId: 3198,
          icon: "060442"
        },
        {
          x: 1830,
          y: 286,
          placeNameId: 3199,
          icon: "060442"
        },
        {
          x: 1080,
          y: 590,
          placeNameId: 3200,
          icon: "060442"
        },
        {
          x: 1635,
          y: 1480,
          placeNameId: 3201,
          icon: "060442"
        },
        {
          x: 340,
          y: 702,
          placeNameId: 3202,
          icon: "060442"
        },
        {
          x: 405,
          y: 1075,
          placeNameId: 3203,
          icon: "060442"
        },
        {
          x: 466,
          y: 1424,
          placeNameId: 3204,
          icon: "060442"
        },
        {
          x: 882,
          y: 1242,
          placeNameId: 3205,
          icon: "060453"
        },
        {
          x: 285,
          y: 1530,
          placeNameId: 3206,
          icon: "060442"
        },
        {
          x: 640,
          y: 1300,
          placeNameId: 3207,
          icon: "060442"
        },
        {
          x: 1020,
          y: 1285,
          placeNameId: 3208,
          icon: "060442"
        },
        {
          x: 1340,
          y: 1685,
          placeNameId: 3209,
          icon: "060442"
        },
        {
          x: 662,
          y: 1740,
          placeNameId: 3210,
          icon: "060442"
        },
        {
          x: 1288,
          y: 141,
          placeNameId: 2954,
          icon: "060441"
        },
        {
          x: 597,
          y: 1882,
          placeNameId: 3194,
          icon: "060414"
        },
        {
          x: 953,
          y: 1609,
          placeNameId: 3007,
          icon: "060414"
        },
        {
          x: 1548,
          y: 817,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1017,
          y: 1320,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1039,
          y: 1270,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1150,
          y: 886,
          placeNameId: 3369,
          icon: "060442"
        },
        {
          x: 1302,
          y: 1274,
          placeNameId: 3370,
          icon: "060442"
        },
        {
          x: 413,
          y: 1118,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 420,
          y: 1136,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1662,
          y: 1236,
          placeNameId: 0,
          icon: "060935"
        }
      ],
      exVersionId: 3,
      elite: {
        ids: [
          8895,
          8896,
          8897,
          8898,
          8899
        ],
        locations: [
          {
            label: "8",
            x: 31.05,
            y: 4.1000000000000005,
            z: -1.101603365,
            flag: "11101"
          },
          {
            label: "A1",
            x: 11.150000000000002,
            y: 5.05,
            z: -1.553644855,
            flag: "01110"
          },
          {
            label: "10",
            x: 21.150000000000002,
            y: 7.3999999999999995,
            z: -1.1962074249999999,
            flag: "11110"
          },
          {
            label: "A2",
            x: 8.850000000000001,
            y: 8.75,
            z: -1.47925354,
            flag: "01110"
          },
          {
            label: "7",
            x: 28.75,
            y: 8.200000000000001,
            z: -1.672450105,
            flag: "11101"
          },
          {
            label: "12",
            x: 15.55,
            y: 10.700000000000001,
            z: -1.7013529950000001,
            flag: "11110"
          },
          {
            label: "6",
            x: 30.75,
            y: 10.8,
            z: -1.675423585,
            flag: "11101"
          },
          {
            label: "5",
            x: 36.39999999999999,
            y: 11.600000000000001,
            z: -1.383523255,
            flag: "11101"
          },
          {
            label: "9",
            x: 25.2,
            y: 12.45,
            z: -1.892453615,
            flag: "11110"
          },
          {
            label: "11",
            x: 18.349999999999998,
            y: 13.4,
            z: -1.89709549,
            flag: "11110"
          },
          {
            label: "4",
            x: 37.349999999999994,
            y: 16.3,
            z: -1.4993985,
            flag: "11101"
          },
          {
            label: "13",
            x: 13.650000000000002,
            y: 17.150000000000002,
            z: -4.233985710000001,
            flag: "11110"
          },
          {
            label: "3",
            x: 35.95,
            y: 19.55,
            z: -1.4616824300000002,
            flag: "11101"
          },
          {
            label: "14",
            x: 15.5,
            y: 20.05,
            z: -2.70623871,
            flag: "11110"
          },
          {
            label: "2",
            x: 33.65,
            y: 21.900000000000002,
            z: -1.65682367,
            flag: "11101"
          },
          {
            label: "1",
            x: 29.099999999999998,
            y: 22.8,
            z: -2.0454405199999997,
            flag: "11101"
          },
          {
            label: "15",
            x: 24.6,
            y: 25,
            z: -2.7066062850000003,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          8915,
          8916
        ],
        locations: [
          {
            label: "FR",
            x: 13,
            y: 22.14,
            z: 0,
            flag: "10"
          },
          {
            label: "F3",
            x: 8.37,
            y: 7,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 25.68,
            y: 9.57,
            z: 0,
            flag: "01"
          },
          {
            label: "F1",
            x: 38.08,
            y: 14.06,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 33.78,
            y: 30.2,
            z: 0,
            flag: "01"
          }
        ]
      },
      fate: {
        ids: [
          8234
        ]
      }
    },
    {
      id: 956,
      placeNameId: 3708,
      weatherRateId: 131,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -225,
      markers: [
        {
          x: 794,
          y: 1368,
          placeNameId: 4028,
          icon: "060414"
        },
        {
          x: 1005,
          y: 160,
          placeNameId: 3830,
          icon: "060442"
        },
        {
          x: 985,
          y: 260,
          placeNameId: 3831,
          icon: "060442"
        },
        {
          x: 838,
          y: 205,
          placeNameId: 3832,
          icon: "060442"
        },
        {
          x: 1467,
          y: 545,
          placeNameId: 3833,
          icon: "060453"
        },
        {
          x: 1550,
          y: 476,
          placeNameId: 3834,
          icon: "060442"
        },
        {
          x: 1700,
          y: 481,
          placeNameId: 3835,
          icon: "060442"
        },
        {
          x: 1555,
          y: 390,
          placeNameId: 3836,
          icon: "060442"
        },
        {
          x: 1820,
          y: 620,
          placeNameId: 3837,
          icon: "060442"
        },
        {
          x: 1800,
          y: 1040,
          placeNameId: 3838,
          icon: "060442"
        },
        {
          x: 1401,
          y: 287,
          placeNameId: 3840,
          icon: "060442"
        },
        {
          x: 1475,
          y: 923,
          placeNameId: 3842,
          icon: "060442"
        },
        {
          x: 1350,
          y: 1020,
          placeNameId: 3843,
          icon: "060442"
        },
        {
          x: 1290,
          y: 875,
          placeNameId: 3844,
          icon: "060442"
        },
        {
          x: 1057,
          y: 715,
          placeNameId: 3845,
          icon: "060442"
        },
        {
          x: 968,
          y: 355,
          placeNameId: 3846,
          icon: "060442"
        },
        {
          x: 750,
          y: 605,
          placeNameId: 3847,
          icon: "060442"
        },
        {
          x: 1170,
          y: 1325,
          placeNameId: 3849,
          icon: "060442"
        },
        {
          x: 1032,
          y: 975,
          placeNameId: 3850,
          icon: "060453"
        },
        {
          x: 660,
          y: 875,
          placeNameId: 3851,
          icon: "060442"
        },
        {
          x: 294,
          y: 1326,
          placeNameId: 3852,
          icon: "060453"
        },
        {
          x: 660,
          y: 1750,
          placeNameId: 3853,
          icon: "060442"
        },
        {
          x: 1010,
          y: 1640,
          placeNameId: 3854,
          icon: "060442"
        },
        {
          x: 750,
          y: 1325,
          placeNameId: 3855,
          icon: "060442"
        },
        {
          x: 368,
          y: 1332,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 994,
          y: 197,
          placeNameId: 3706,
          icon: "060467"
        },
        {
          x: 996,
          y: 294,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1002,
          y: 292,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1418,
          y: 524,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1447,
          y: 521,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 1448,
          y: 597,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1442,
          y: 592,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1385,
          y: 629,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 1377,
          y: 632,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 1386,
          y: 1326,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 1253,
          y: 1322,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 400,
          y: 1326,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 411,
          y: 1329,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 327,
          y: 1296,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 260,
          y: 1317,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 260,
          y: 1323,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 997,
          y: 1632,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1012,
          y: 1017,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 994,
          y: 1041,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1057,
          y: 953,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1051,
          y: 947,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 689,
          y: 1336,
          placeNameId: 3712,
          icon: "060467"
        }
      ],
      exVersionId: 4,
      filter: true,
      elite: {
        ids: [
          10617,
          10623,
          10624,
          10635,
          10636
        ],
        locations: [
          {
            label: "1",
            x: 29.95,
            y: 8.350000000000001,
            z: 1.7416257450000001,
            flag: "11110"
          },
          {
            label: "2",
            x: 17.05,
            y: 9.600000000000001,
            z: 0.9024687795000002,
            flag: "11110"
          },
          {
            label: "3",
            x: 34.15,
            y: 13.65,
            z: 1.75153618,
            flag: "11110"
          },
          {
            label: "4",
            x: 16.5,
            y: 16.7,
            z: -0.16473803050000002,
            flag: "11101"
          },
          {
            label: "5",
            x: 10.3,
            y: 19.35,
            z: -0.172087914,
            flag: "11101"
          },
          {
            label: "6",
            x: 25.400000000000002,
            y: 25.150000000000002,
            z: -0.22265660299999998,
            flag: "11101"
          },
          {
            label: "7",
            x: 32.199999999999996,
            y: 25.95,
            z: 0.8179296695,
            flag: "11110"
          },
          {
            label: "8",
            x: 5.95,
            y: 33.599999999999994,
            z: -0.1418514395,
            flag: "11101"
          },
          {
            label: "9",
            x: 12.200000000000001,
            y: 35.449999999999996,
            z: -0.26454417249999995,
            flag: "11101"
          },
          {
            label: "10",
            x: 19.650000000000002,
            y: 38.5,
            z: -0.15677850249999997,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          10615,
          10616
        ],
        locations: [
          {
            label: "FR",
            x: 25.06,
            y: 16,
            z: 0.8688643,
            flag: "10"
          },
          {
            label: "F1",
            x: 25,
            y: 8.6,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 34.7,
            y: 17.9,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 9.3,
            y: 22,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 26.2,
            y: 33.1,
            z: 0,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 957,
      placeNameId: 3709,
      weatherRateId: 132,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -1,
      markers: [
        {
          x: 387,
          y: 360,
          placeNameId: 3736,
          icon: "060414"
        },
        {
          x: 1221,
          y: 1788,
          placeNameId: 4015,
          icon: "060414"
        },
        {
          x: 1220,
          y: 1652,
          placeNameId: 3880,
          icon: "060453"
        },
        {
          x: 1364,
          y: 1821,
          placeNameId: 3881,
          icon: "060442"
        },
        {
          x: 965,
          y: 1865,
          placeNameId: 3882,
          icon: "060442"
        },
        {
          x: 775,
          y: 1550,
          placeNameId: 3884,
          icon: "060442"
        },
        {
          x: 498,
          y: 1060,
          placeNameId: 3886,
          icon: "060453"
        },
        {
          x: 1065,
          y: 900,
          placeNameId: 3887,
          icon: "060442"
        },
        {
          x: 640,
          y: 500,
          placeNameId: 3888,
          icon: "060442"
        },
        {
          x: 950,
          y: 325,
          placeNameId: 3889,
          icon: "060442"
        },
        {
          x: 1570,
          y: 375,
          placeNameId: 3893,
          icon: "060442"
        },
        {
          x: 1428,
          y: 777,
          placeNameId: 3894,
          icon: "060453"
        },
        {
          x: 1140,
          y: 675,
          placeNameId: 3895,
          icon: "060442"
        },
        {
          x: 1013,
          y: 702,
          placeNameId: 3896,
          icon: "060442"
        },
        {
          x: 1170,
          y: 1180,
          placeNameId: 3898,
          icon: "060442"
        },
        {
          x: 1630,
          y: 1280,
          placeNameId: 3899,
          icon: "060442"
        },
        {
          x: 1775,
          y: 780,
          placeNameId: 3900,
          icon: "060442"
        },
        {
          x: 1190,
          y: 1659,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1189,
          y: 1648,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1200,
          y: 1707,
          placeNameId: 0,
          icon: "060581"
        },
        {
          x: 1156,
          y: 1629,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 554,
          y: 1056,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 463,
          y: 1113,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 515,
          y: 1109,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1456,
          y: 814,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1420,
          y: 809,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1456,
          y: 786,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1598,
          y: 344,
          placeNameId: 3707,
          icon: "060441"
        },
        {
          x: 1249,
          y: 1656,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 420,
          y: 1830,
          placeNameId: 4027,
          icon: "060442"
        },
        {
          x: 754,
          y: 1634,
          placeNameId: 4154,
          icon: "060414"
        },
        {
          x: 973,
          y: 1373,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 938,
          y: 1324,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 944,
          y: 1358,
          placeNameId: 4030,
          icon: "060442"
        }
      ],
      exVersionId: 4,
      elite: {
        ids: [
          10618,
          10625,
          10626,
          10637,
          10638
        ],
        locations: [
          {
            label: "1",
            x: 18.45,
            y: 11.850000000000001,
            z: 0.8277153740000001,
            flag: "11110"
          },
          {
            label: "2",
            x: 14.450000000000001,
            y: 12.25,
            z: 0.7193923,
            flag: "11110"
          },
          {
            label: "3",
            x: 29.500000000000004,
            y: 13.8,
            z: 0.09349566549999999,
            flag: "11110"
          },
          {
            label: "4",
            x: 17.900000000000002,
            y: 16.650000000000002,
            z: 0.8318989999999999,
            flag: "11110"
          },
          {
            label: "5",
            x: 32.65,
            y: 20.1,
            z: 0.167950201,
            flag: "11101"
          },
          {
            label: "6",
            x: 26.55,
            y: 20.8,
            z: 0.2106620785,
            flag: "11101"
          },
          {
            label: "7",
            x: 18.35,
            y: 23.55,
            z: 0.38057090000000005,
            flag: "11101"
          },
          {
            label: "8",
            x: 27.55,
            y: 25.5,
            z: 0.06774956500000001,
            flag: "11101"
          },
          {
            label: "9",
            x: 20.250000000000004,
            y: 31.25,
            z: 0.19290466350000002,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          10615,
          10616
        ],
        locations: [
          {
            label: "FR",
            x: 23.8,
            y: 17.6,
            z: 0.8688643,
            flag: "10"
          },
          {
            label: "F1",
            x: 22.2,
            y: 10.1,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 12.3,
            y: 15.7,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 32.7,
            y: 25.5,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 16.6,
            y: 28.9,
            z: 0,
            flag: "01"
          }
        ]
      },
      fate: {
        ids: [
          10269
        ]
      }
    },
    {
      id: 958,
      placeNameId: 3710,
      weatherRateId: 133,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -20,
      markers: [
        {
          x: 498,
          y: 344,
          placeNameId: 4118,
          icon: "060414"
        },
        {
          x: 540,
          y: 351,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 536,
          y: 342,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 536,
          y: 332,
          placeNameId: 4024,
          icon: "060441"
        },
        {
          x: 616,
          y: 1504,
          placeNameId: 3903,
          icon: "060453"
        },
        {
          x: 770,
          y: 1225,
          placeNameId: 3904,
          icon: "060442"
        },
        {
          x: 1100,
          y: 1425,
          placeNameId: 3905,
          icon: "060442"
        },
        {
          x: 1610,
          y: 1200,
          placeNameId: 3906,
          icon: "060442"
        },
        {
          x: 1160,
          y: 1670,
          placeNameId: 3908,
          icon: "060442"
        },
        {
          x: 1437,
          y: 1600,
          placeNameId: 3909,
          icon: "060442"
        },
        {
          x: 500,
          y: 375,
          placeNameId: 3911,
          icon: "060442"
        },
        {
          x: 570,
          y: 680,
          placeNameId: 3912,
          icon: "060442"
        },
        {
          x: 1105,
          y: 1140,
          placeNameId: 3913,
          icon: "060442"
        },
        {
          x: 1350,
          y: 1100,
          placeNameId: 3914,
          icon: "060442"
        },
        {
          x: 1542,
          y: 845,
          placeNameId: 3915,
          icon: "060453"
        },
        {
          x: 800,
          y: 380,
          placeNameId: 3918,
          icon: "060442"
        },
        {
          x: 1110,
          y: 580,
          placeNameId: 3919,
          icon: "060442"
        },
        {
          x: 1433,
          y: 450,
          placeNameId: 3920,
          icon: "060442"
        },
        {
          x: 525,
          y: 1661,
          placeNameId: 2408,
          icon: "060441"
        },
        {
          x: 598,
          y: 1481,
          placeNameId: 0,
          icon: "060551"
        },
        {
          x: 594,
          y: 1475,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 594,
          y: 1470,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 690,
          y: 1498,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1533,
          y: 610,
          placeNameId: 0,
          icon: "060311"
        },
        {
          x: 1516,
          y: 822,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1516,
          y: 831,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 529,
          y: 1654,
          placeNameId: 0,
          icon: "060352"
        },
        {
          x: 1490,
          y: 1743,
          placeNameId: 4270,
          icon: "060414"
        },
        {
          x: 655,
          y: 400,
          placeNameId: 4381,
          icon: "060467"
        }
      ],
      exVersionId: 4,
      filter: true,
      elite: {
        ids: [
          10619,
          10627,
          10628,
          10639,
          10640
        ],
        locations: [
          {
            label: "1",
            x: 9.8,
            y: 11.55,
            z: 0.2124376735,
            flag: "11110"
          },
          {
            label: "2",
            x: 12.05,
            y: 12.8,
            z: 0.163432057,
            flag: "11110"
          },
          {
            label: "3",
            x: 11.700000000000001,
            y: 17.150000000000002,
            z: 0.25163375,
            flag: "11110"
          },
          {
            label: "4",
            x: 15.75,
            y: 19.6,
            z: 0.177080364,
            flag: "11110"
          },
          {
            label: "5",
            x: 28.95,
            y: 20.900000000000002,
            z: 0.1358947135,
            flag: "11101"
          },
          {
            label: "6",
            x: 33,
            y: 21.849999999999998,
            z: 0.1135561625,
            flag: "11101"
          },
          {
            label: "7",
            x: 23.45,
            y: 25.75,
            z: -0.0606220341,
            flag: "11101"
          },
          {
            label: "8",
            x: 32.5,
            y: 32.599999999999994,
            z: -0.20349802050000002,
            flag: "11101"
          },
          {
            label: "9",
            x: 27.55,
            y: 33.949999999999996,
            z: -0.179502907,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          10615,
          10616
        ],
        locations: [
          {
            label: "FR",
            x: 20.250000000000004,
            y: 23.750000000000004,
            z: 0.01904070975,
            flag: "10"
          },
          {
            label: "F1",
            x: 33.15,
            y: 9.25,
            z: 0.13091724400000002,
            flag: "01"
          },
          {
            label: "F2",
            x: 17.85,
            y: 9.850000000000001,
            z: 0.107999992,
            flag: "01"
          },
          {
            label: "F3",
            x: 32.6,
            y: 29,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 21.2,
            y: 32.5,
            z: 0,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 959,
      placeNameId: 3711,
      weatherRateId: 135,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      markers: [
        {
          x: 360,
          y: 1752,
          placeNameId: 4024,
          icon: "060441"
        },
        {
          x: 1227,
          y: 1431,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1019,
          y: 810,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 457,
          y: 1674,
          placeNameId: 3949,
          icon: "060453"
        },
        {
          x: 600,
          y: 1600,
          placeNameId: 3950,
          icon: "060442"
        },
        {
          x: 835,
          y: 1420,
          placeNameId: 3952,
          icon: "060442"
        },
        {
          x: 1055,
          y: 1534,
          placeNameId: 3953,
          icon: "060442"
        },
        {
          x: 1208,
          y: 1440,
          placeNameId: 3954,
          icon: "060442"
        },
        {
          x: 1500,
          y: 1550,
          placeNameId: 3955,
          icon: "060442"
        },
        {
          x: 1025,
          y: 1325,
          placeNameId: 3956,
          icon: "060442"
        },
        {
          x: 1025,
          y: 1440,
          placeNameId: 3957,
          icon: "060442"
        },
        {
          x: 840,
          y: 1205,
          placeNameId: 3959,
          icon: "060442"
        },
        {
          x: 1085,
          y: 1119,
          placeNameId: 3960,
          icon: "060442"
        },
        {
          x: 1230,
          y: 1255,
          placeNameId: 3961,
          icon: "060442"
        },
        {
          x: 520,
          y: 1050,
          placeNameId: 3962,
          icon: "060442"
        },
        {
          x: 1250,
          y: 960,
          placeNameId: 3963,
          icon: "060442"
        },
        {
          x: 1650,
          y: 1200,
          placeNameId: 3965,
          icon: "060442"
        },
        {
          x: 1023,
          y: 511,
          placeNameId: 3966,
          icon: "060453"
        },
        {
          x: 538,
          y: 1090,
          placeNameId: 3770,
          icon: "060414"
        },
        {
          x: 997,
          y: 443,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 1023,
          y: 340,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 597,
          y: 1585,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1004,
          y: 561,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1004,
          y: 568,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 820,
          y: 739,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 845,
          y: 716,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 853,
          y: 724,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 997,
          y: 581,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 838,
          y: 757,
          placeNameId: 4290,
          icon: "060442"
        }
      ],
      exVersionId: 4,
      elite: {
        ids: [
          10620,
          10629,
          10630,
          10641,
          10642
        ],
        locations: [
          {
            label: "1",
            x: 18.400000000000002,
            y: 21.7,
            z: 0.7780554715,
            flag: "11110"
          },
          {
            label: "2",
            x: 24.45,
            y: 23.55,
            z: 0.6183057134999999,
            flag: "11110"
          },
          {
            label: "3",
            x: 10.150000000000002,
            y: 23.95,
            z: 1.459232635,
            flag: "11110"
          },
          {
            label: "4",
            x: 17.2,
            y: 24.8,
            z: 0.71282685,
            flag: "11110"
          },
          {
            label: "5",
            x: 28.25,
            y: 26.650000000000002,
            z: 0.6893835125000001,
            flag: "11110"
          },
          {
            label: "6",
            x: 36.449999999999996,
            y: 27.2,
            z: 1.472805025,
            flag: "11101"
          },
          {
            label: "7",
            x: 16.6,
            y: 28.85,
            z: 0.60886615,
            flag: "11101"
          },
          {
            label: "8",
            x: 29.95,
            y: 29.95,
            z: 1.110237195,
            flag: "11101"
          },
          {
            label: "9",
            x: 24.3,
            y: 33.5,
            z: 0.7774578475,
            flag: "11101"
          },
          {
            label: "10",
            x: 20.85,
            y: 34.55,
            z: 0.8171469735,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          10615,
          10616
        ],
        locations: [
          {
            label: "F1",
            x: 11.950000000000001,
            y: 20.55,
            z: 1.40503372,
            flag: "01"
          },
          {
            label: "F2",
            x: 33.599999999999994,
            y: 22.85,
            z: 1.404953045,
            flag: "01"
          },
          {
            label: "FR",
            x: 19.1,
            y: 30.6,
            z: 0.5608216365,
            flag: "10"
          },
          {
            label: "F3",
            x: 29.05,
            y: 35.449999999999996,
            z: 1.32075882,
            flag: "01"
          },
          {
            label: "F4",
            x: 11.950000000000001,
            y: 36.05,
            z: 1.31525452,
            flag: "01"
          }
        ]
      }
    },
    {
      id: 960,
      placeNameId: 3712,
      weatherRateId: 136,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 44,
      markers: [
        {
          x: 700,
          y: 1650,
          placeNameId: 3971,
          icon: "060442"
        },
        {
          x: 1025,
          y: 1550,
          placeNameId: 3972,
          icon: "060442"
        },
        {
          x: 480,
          y: 1290,
          placeNameId: 3973,
          icon: "060453"
        },
        {
          x: 550,
          y: 1000,
          placeNameId: 3974,
          icon: "060442"
        },
        {
          x: 675,
          y: 510,
          placeNameId: 3976,
          icon: "060442"
        },
        {
          x: 790,
          y: 725,
          placeNameId: 3977,
          icon: "060442"
        },
        {
          x: 1085,
          y: 365,
          placeNameId: 3978,
          icon: "060453"
        },
        {
          x: 1225,
          y: 365,
          placeNameId: 3979,
          icon: "060442"
        },
        {
          x: 1462,
          y: 706,
          placeNameId: 3980,
          icon: "060442"
        },
        {
          x: 1536,
          y: 1165,
          placeNameId: 3982,
          icon: "060442"
        },
        {
          x: 1659,
          y: 1270,
          placeNameId: 3984,
          icon: "060442"
        },
        {
          x: 1830,
          y: 1220,
          placeNameId: 3985,
          icon: "060442"
        },
        {
          x: 1625,
          y: 1480,
          placeNameId: 3986,
          icon: "060442"
        },
        {
          x: 1713,
          y: 1250,
          placeNameId: 3987,
          icon: "060442"
        },
        {
          x: 1150,
          y: 1300,
          placeNameId: 3989,
          icon: "060442"
        },
        {
          x: 1025,
          y: 1025,
          placeNameId: 3990,
          icon: "060442"
        },
        {
          x: 1693,
          y: 1396,
          placeNameId: 3783,
          icon: "060414"
        },
        {
          x: 1675,
          y: 1025,
          placeNameId: 4026,
          icon: "060442"
        },
        {
          x: 659,
          y: 1641,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 649,
          y: 1639,
          placeNameId: 3708,
          icon: "060467"
        },
        {
          x: 1491,
          y: 1351,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 1489,
          y: 1429,
          placeNameId: 4029,
          icon: "060442"
        },
        {
          x: 1020,
          y: 1012,
          placeNameId: 4100,
          icon: "060414"
        },
        {
          x: 414,
          y: 816,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 554,
          y: 762,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1471,
          y: 706,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1545,
          y: 1165,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1668,
          y: 1270,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1722,
          y: 1250,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1516,
          y: 1389,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1498,
          y: 1429,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1515,
          y: 1355,
          placeNameId: 3983,
          icon: "060453"
        },
        {
          x: 1221,
          y: 1262,
          placeNameId: 4048,
          icon: "060442"
        },
        {
          x: 1341,
          y: 1173,
          placeNameId: 4041,
          icon: "060442"
        },
        {
          x: 1325,
          y: 1189,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1268,
          y: 1285,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1359,
          y: 1181,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1483,
          y: 1333,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1328,
          y: 1168,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 1336,
          y: 1187,
          placeNameId: 0,
          icon: "060935"
        },
        {
          x: 1350,
          y: 1171,
          placeNameId: 0,
          icon: "060434"
        }
      ],
      exVersionId: 4,
      filter: true,
      elite: {
        ids: [
          10622,
          10633,
          10634,
          10645,
          10646
        ],
        locations: [
          {
            label: "1",
            x: 19.25,
            y: 9.850000000000001,
            z: 2.854358215,
            flag: "11110"
          },
          {
            label: "2",
            x: 13.450000000000001,
            y: 10.4,
            z: 2.653892885,
            flag: "11110"
          },
          {
            label: "3",
            x: 27.95,
            y: 12.450000000000001,
            z: 2.9343415850000003,
            flag: "11110"
          },
          {
            label: "4",
            x: 8.15,
            y: 20.3,
            z: 0.7484922225,
            flag: "11110"
          },
          {
            label: "5",
            x: 11.900000000000002,
            y: 22.25,
            z: 0.700633471,
            flag: "11110"
          },
          {
            label: "6",
            x: 16.25,
            y: 26.05,
            z: 0.7923389730000001,
            flag: "11101"
          },
          {
            label: "7",
            x: 17.5,
            y: 30.2,
            z: 0.688894889,
            flag: "11101"
          },
          {
            label: "8",
            x: 21.1,
            y: 34.15,
            z: 0.643318678,
            flag: "11101"
          },
          {
            label: "9",
            x: 14.55,
            y: 36.05,
            z: 0.7915071499999999,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          10615,
          10616
        ],
        locations: [
          {
            label: "FR",
            x: 14.55,
            y: 29.250000000000004,
            z: 0.8688643,
            flag: "10"
          },
          {
            label: "F1",
            x: 32.2,
            y: 10,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 16.1,
            y: 16.8,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 9.8,
            y: 32.2,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 22.7,
            y: 34.6,
            z: 0,
            flag: "01"
          }
        ]
      },
      fate: {
        ids: [
          10400
        ]
      }
    },
    {
      id: 961,
      placeNameId: 3713,
      weatherRateId: 134,
      sizeFactor: 100,
      offsetX: 0,
      offsetY: 0,
      offsetZ: -161,
      markers: [
        {
          x: 1300,
          y: 1840,
          placeNameId: 3926,
          icon: "060442"
        },
        {
          x: 1240,
          y: 1649,
          placeNameId: 3927,
          icon: "060442"
        },
        {
          x: 1182,
          y: 1150,
          placeNameId: 3928,
          icon: "060453"
        },
        {
          x: 390,
          y: 1566,
          placeNameId: 3929,
          icon: "060453"
        },
        {
          x: 783,
          y: 1730,
          placeNameId: 3930,
          icon: "060442"
        },
        {
          x: 1630,
          y: 1070,
          placeNameId: 3931,
          icon: "060442"
        },
        {
          x: 1650,
          y: 1400,
          placeNameId: 3932,
          icon: "060442"
        },
        {
          x: 828,
          y: 1010,
          placeNameId: 3933,
          icon: "060442"
        },
        {
          x: 682,
          y: 1055,
          placeNameId: 3935,
          icon: "060442"
        },
        {
          x: 350,
          y: 660,
          placeNameId: 3936,
          icon: "060442"
        },
        {
          x: 166,
          y: 895,
          placeNameId: 3937,
          icon: "060442"
        },
        {
          x: 493,
          y: 802,
          placeNameId: 3938,
          icon: "060453"
        },
        {
          x: 541,
          y: 657,
          placeNameId: 3939,
          icon: "060442"
        },
        {
          x: 677,
          y: 477,
          placeNameId: 3942,
          icon: "060442"
        },
        {
          x: 600,
          y: 240,
          placeNameId: 3943,
          icon: "060442"
        },
        {
          x: 813,
          y: 370,
          placeNameId: 3944,
          icon: "060442"
        },
        {
          x: 1200,
          y: 450,
          placeNameId: 3946,
          icon: "060442"
        },
        {
          x: 1625,
          y: 700,
          placeNameId: 3947,
          icon: "060442"
        },
        {
          x: 953,
          y: 399,
          placeNameId: 3948,
          icon: "060442"
        },
        {
          x: 1833,
          y: 780,
          placeNameId: 3769,
          icon: "060467"
        },
        {
          x: 1164,
          y: 1188,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 1170,
          y: 1188,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 429,
          y: 1567,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 428,
          y: 1573,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 453,
          y: 789,
          placeNameId: 0,
          icon: "060412"
        },
        {
          x: 459,
          y: 789,
          placeNameId: 0,
          icon: "060434"
        },
        {
          x: 186,
          y: 962,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 169,
          y: 950,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 176,
          y: 846,
          placeNameId: 0,
          icon: "060446"
        },
        {
          x: 186,
          y: 818,
          placeNameId: 0,
          icon: "060447"
        },
        {
          x: 1305,
          y: 1857,
          placeNameId: 3223,
          icon: "060441"
        },
        {
          x: 837,
          y: 1010,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 691,
          y: 1055,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 550,
          y: 657,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 686,
          y: 477,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 822,
          y: 370,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 962,
          y: 399,
          placeNameId: 0,
          icon: "060467"
        },
        {
          x: 612,
          y: 259,
          placeNameId: 3759,
          icon: "060414"
        }
      ],
      exVersionId: 4,
      elite: {
        ids: [
          10621,
          10631,
          10632,
          10643,
          10644
        ],
        locations: [
          {
            label: "1",
            x: 21.599999999999998,
            y: 6.05,
            z: 1.381397785,
            flag: "11110"
          },
          {
            label: "2",
            x: 12.65,
            y: 10.05,
            z: 3.01013489,
            flag: "11110"
          },
          {
            label: "3",
            x: 33.949999999999996,
            y: 10.850000000000001,
            z: 1.77455322,
            flag: "11110"
          },
          {
            label: "4",
            x: 21.3,
            y: 13.4,
            z: 1.3625270550000002,
            flag: "11110"
          },
          {
            label: "5",
            x: 34.3,
            y: 14.3,
            z: 1.4558305349999998,
            flag: "11110"
          },
          {
            label: "6",
            x: 32.599999999999994,
            y: 18.599999999999998,
            z: 1.3865995,
            flag: "11110"
          },
          {
            label: "7",
            x: 18.8,
            y: 24.6,
            z: -0.11865742189999999,
            flag: "11101"
          },
          {
            label: "8",
            x: 29.650000000000002,
            y: 27.5,
            z: -0.0885059977,
            flag: "11101"
          },
          {
            label: "9",
            x: 6.95,
            y: 29.05,
            z: -0.414528073,
            flag: "11101"
          },
          {
            label: "10",
            x: 17.85,
            y: 30.25,
            z: -0.42834101950000003,
            flag: "11101"
          },
          {
            label: "11",
            x: 12.900000000000002,
            y: 32.05,
            z: -0.40628560999999996,
            flag: "11101"
          }
        ]
      },
      ss: {
        ids: [
          10615,
          10616
        ],
        locations: [
          {
            label: "FR",
            x: 22.55,
            y: 19.55,
            z: -0.1003966885,
            flag: "10"
          },
          {
            label: "F1",
            x: 29.1,
            y: 7.2,
            z: 0,
            flag: "01"
          },
          {
            label: "F2",
            x: 17,
            y: 7.3,
            z: 0,
            flag: "01"
          },
          {
            label: "F3",
            x: 37.1,
            y: 13.2,
            z: 0,
            flag: "01"
          },
          {
            label: "F4",
            x: 7.2,
            y: 34.9,
            z: 0,
            flag: "01"
          }
        ]
      }
    }
  ]
};

const regionData: {
  huntRegions: RegionData[];
  weatherRegions: RegionData[];
} = {
  huntRegions: [
    {
      key: "EW",
      css: "bg-amber-lighten-3 text-black",
      zoneIds: [
        956,
        957,
        958,
        959,
        960,
        961
      ]
    },
    {
      key: "ShB",
      css: "bg-grey-darken-2 text-white",
      zoneIds: [
        813,
        814,
        815,
        816,
        817,
        818
      ]
    },
    {
      key: "SB",
      css: "bg-red-darken-2 text-white",
      zoneIds: [
        612,
        620,
        621,
        613,
        614,
        622
      ]
    },
    {
      key: "HW",
      css: "bg-indigo-darken-2 text-white",
      zoneIds: [
        397,
        401,
        402,
        398,
        399,
        400
      ]
    },
    {
      key: "LaNoscea",
      css: "bg-red-lighten-2 text-black",
      zoneIds: [
        134,
        135,
        137,
        138,
        139,
        180
      ]
    },
    {
      key: "Gridania",
      css: "bg-yellow-lighten-2 text-black",
      zoneIds: [
        148,
        152,
        153,
        154
      ]
    },
    {
      key: "Thanalan",
      css: "bg-brown-lighten-2 text-black",
      zoneIds: [
        140,
        141,
        145,
        146,
        147
      ]
    },
    {
      key: "Frontier",
      css: "bg-brown-lighten-4 text-black",
      zoneIds: [
        155,
        156
      ]
    }
  ],
  weatherRegions: [
    {
      key: "EW",
      css: "bg-amber-lighten-3 text-black",
      zoneIds: [
        956,
        957,
        958,
        959,
        960,
        961
      ]
    },
    {
      key: "ShB",
      css: "bg-grey-darken-2 text-white",
      zoneIds: [
        813,
        814,
        815,
        816,
        817,
        818
      ]
    },
    {
      key: "SB",
      css: "bg-red-darken-2 text-white",
      zoneIds: [
        612,
        620,
        621,
        613,
        614,
        622
      ]
    },
    {
      key: "HW",
      css: "bg-indigo-darken-2 text-white",
      zoneIds: [
        397,
        401,
        402,
        398,
        399,
        400
      ]
    },
    {
      key: "LaNoscea",
      css: "bg-red-lighten-2 text-black",
      zoneIds: [
        134,
        135,
        137,
        138,
        139,
        180
      ]
    },
    {
      key: "Gridania",
      css: "bg-yellow-lighten-2 text-black",
      zoneIds: [
        148,
        152,
        153,
        154
      ]
    },
    {
      key: "Thanalan",
      css: "bg-brown-lighten-2 text-black",
      zoneIds: [
        140,
        141,
        145,
        146,
        147
      ]
    },
    {
      key: "Frontier",
      css: "bg-brown-lighten-4 text-black",
      zoneIds: [
        155,
        156
      ]
    },
    {
      key: "Others",
      css: "bg-lime-lighten-2 text-black",
      zoneIds: [
        732,
        763,
        795,
        827,
        1055
      ]
    }
  ]
};

export {
  TExVersion,
  type ExVersionData,
  type MarkerData,
  type RegionData,
  type ZoneData,
  type FieldZoneData,
  exVersions,
  regionData,
  zoneData
};
