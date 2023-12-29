// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const DataCenterRegionId = {
  JP: 1,
  NA: 2,
  EU: 3,
  OC: 4,
} as const;
type DataCenterRegionId =
  (typeof DataCenterRegionId)[keyof typeof DataCenterRegionId];

const DataCenterId = {
    Elemental: 1,
    Gaia: 2,
    Mana: 3,
    Aether: 4,
    Primal: 5,
    Chaos: 6,
    Light: 7,
    Crystal: 8,
    Materia: 9,
    Meteor: 10,
    Dynamis: 11
} as const;
type DataCenterId = (typeof DataCenterId)[keyof typeof DataCenterId];

const WorldId = {
    Ravana: 21,
    Bismarck: 22,
    Asura: 23,
    Belias: 24,
    Pandaemonium: 28,
    Shinryu: 29,
    Unicorn: 30,
    Yojimbo: 31,
    Zeromus: 32,
    Twintania: 33,
    Brynhildr: 34,
    Famfrit: 35,
    Lich: 36,
    Mateus: 37,
    Omega: 39,
    Jenova: 40,
    Zalera: 41,
    Zodiark: 42,
    Alexander: 43,
    Anima: 44,
    Carbuncle: 45,
    Fenrir: 46,
    Hades: 47,
    Ixion: 48,
    Kujata: 49,
    Typhon: 50,
    Ultima: 51,
    Valefor: 52,
    Exodus: 53,
    Faerie: 54,
    Lamia: 55,
    Phoenix: 56,
    Siren: 57,
    Garuda: 58,
    Ifrit: 59,
    Ramuh: 60,
    Titan: 61,
    Diabolos: 62,
    Gilgamesh: 63,
    Leviathan: 64,
    Midgardsormr: 65,
    Odin: 66,
    Shiva: 67,
    Atomos: 68,
    Bahamut: 69,
    Chocobo: 70,
    Moogle: 71,
    Tonberry: 72,
    Adamantoise: 73,
    Coeurl: 74,
    Malboro: 75,
    Tiamat: 76,
    Ultros: 77,
    Behemoth: 78,
    Cactuar: 79,
    Cerberus: 80,
    Goblin: 81,
    Mandragora: 82,
    Louisoix: 83,
    Spriggan: 85,
    Sephirot: 86,
    Sophia: 87,
    Zurvan: 88,
    Aegis: 90,
    Balmung: 91,
    Durandal: 92,
    Excalibur: 93,
    Gungnir: 94,
    Hyperion: 95,
    Masamune: 96,
    Ragnarok: 97,
    Ridill: 98,
    Sargatanas: 99,
    Sagittarius: 400,
    Phantom: 401,
    Alpha: 402,
    Raiden: 403,
    Marilith: 404,
    Seraph: 405,
    Halicarnassus: 406,
    Maduin: 407
} as const;
type WorldId = (typeof WorldId)[keyof typeof WorldId];

type DataCenterData = {
  readonly id: DataCenterId;
  readonly name: string;
  readonly color: string;
  readonly regionId: DataCenterRegionId;
};

type WorldData = {
  readonly id: WorldId;
  readonly name: string;
  readonly dataCenterId: DataCenterId;
};

const dataCenters: DataCenterData[] = [
    {
        id: 1,
        name: "Elemental",
        color: "green",
        regionId: 1
    },
    {
        id: 2,
        name: "Gaia",
        color: "orange",
        regionId: 1
    },
    {
        id: 3,
        name: "Mana",
        color: "blue",
        regionId: 1
    },
    {
        id: 4,
        name: "Aether",
        color: "",
        regionId: 2
    },
    {
        id: 5,
        name: "Primal",
        color: "",
        regionId: 2
    },
    {
        id: 6,
        name: "Chaos",
        color: "",
        regionId: 3
    },
    {
        id: 7,
        name: "Light",
        color: "",
        regionId: 3
    },
    {
        id: 8,
        name: "Crystal",
        color: "",
        regionId: 2
    },
    {
        id: 9,
        name: "Materia",
        color: "",
        regionId: 4
    },
    {
        id: 10,
        name: "Meteor",
        color: "red",
        regionId: 1
    },
    {
        id: 11,
        name: "Dynamis",
        color: "",
        regionId: 2
    }
];

const worlds: WorldData[] = [
    {
        id: 21,
        name: "Ravana",
        dataCenterId: 9
    },
    {
        id: 22,
        name: "Bismarck",
        dataCenterId: 9
    },
    {
        id: 23,
        name: "Asura",
        dataCenterId: 3
    },
    {
        id: 24,
        name: "Belias",
        dataCenterId: 10
    },
    {
        id: 28,
        name: "Pandaemonium",
        dataCenterId: 3
    },
    {
        id: 29,
        name: "Shinryu",
        dataCenterId: 10
    },
    {
        id: 30,
        name: "Unicorn",
        dataCenterId: 10
    },
    {
        id: 31,
        name: "Yojimbo",
        dataCenterId: 10
    },
    {
        id: 32,
        name: "Zeromus",
        dataCenterId: 10
    },
    {
        id: 33,
        name: "Twintania",
        dataCenterId: 7
    },
    {
        id: 34,
        name: "Brynhildr",
        dataCenterId: 8
    },
    {
        id: 35,
        name: "Famfrit",
        dataCenterId: 5
    },
    {
        id: 36,
        name: "Lich",
        dataCenterId: 7
    },
    {
        id: 37,
        name: "Mateus",
        dataCenterId: 8
    },
    {
        id: 39,
        name: "Omega",
        dataCenterId: 6
    },
    {
        id: 40,
        name: "Jenova",
        dataCenterId: 4
    },
    {
        id: 41,
        name: "Zalera",
        dataCenterId: 8
    },
    {
        id: 42,
        name: "Zodiark",
        dataCenterId: 7
    },
    {
        id: 43,
        name: "Alexander",
        dataCenterId: 2
    },
    {
        id: 44,
        name: "Anima",
        dataCenterId: 3
    },
    {
        id: 45,
        name: "Carbuncle",
        dataCenterId: 1
    },
    {
        id: 46,
        name: "Fenrir",
        dataCenterId: 2
    },
    {
        id: 47,
        name: "Hades",
        dataCenterId: 3
    },
    {
        id: 48,
        name: "Ixion",
        dataCenterId: 3
    },
    {
        id: 49,
        name: "Kujata",
        dataCenterId: 1
    },
    {
        id: 50,
        name: "Typhon",
        dataCenterId: 1
    },
    {
        id: 51,
        name: "Ultima",
        dataCenterId: 2
    },
    {
        id: 52,
        name: "Valefor",
        dataCenterId: 10
    },
    {
        id: 53,
        name: "Exodus",
        dataCenterId: 5
    },
    {
        id: 54,
        name: "Faerie",
        dataCenterId: 4
    },
    {
        id: 55,
        name: "Lamia",
        dataCenterId: 5
    },
    {
        id: 56,
        name: "Phoenix",
        dataCenterId: 7
    },
    {
        id: 57,
        name: "Siren",
        dataCenterId: 4
    },
    {
        id: 58,
        name: "Garuda",
        dataCenterId: 1
    },
    {
        id: 59,
        name: "Ifrit",
        dataCenterId: 2
    },
    {
        id: 60,
        name: "Ramuh",
        dataCenterId: 10
    },
    {
        id: 61,
        name: "Titan",
        dataCenterId: 3
    },
    {
        id: 62,
        name: "Diabolos",
        dataCenterId: 8
    },
    {
        id: 63,
        name: "Gilgamesh",
        dataCenterId: 4
    },
    {
        id: 64,
        name: "Leviathan",
        dataCenterId: 5
    },
    {
        id: 65,
        name: "Midgardsormr",
        dataCenterId: 4
    },
    {
        id: 66,
        name: "Odin",
        dataCenterId: 7
    },
    {
        id: 67,
        name: "Shiva",
        dataCenterId: 7
    },
    {
        id: 68,
        name: "Atomos",
        dataCenterId: 1
    },
    {
        id: 69,
        name: "Bahamut",
        dataCenterId: 2
    },
    {
        id: 70,
        name: "Chocobo",
        dataCenterId: 3
    },
    {
        id: 71,
        name: "Moogle",
        dataCenterId: 6
    },
    {
        id: 72,
        name: "Tonberry",
        dataCenterId: 1
    },
    {
        id: 73,
        name: "Adamantoise",
        dataCenterId: 4
    },
    {
        id: 74,
        name: "Coeurl",
        dataCenterId: 8
    },
    {
        id: 75,
        name: "Malboro",
        dataCenterId: 8
    },
    {
        id: 76,
        name: "Tiamat",
        dataCenterId: 2
    },
    {
        id: 77,
        name: "Ultros",
        dataCenterId: 5
    },
    {
        id: 78,
        name: "Behemoth",
        dataCenterId: 5
    },
    {
        id: 79,
        name: "Cactuar",
        dataCenterId: 4
    },
    {
        id: 80,
        name: "Cerberus",
        dataCenterId: 6
    },
    {
        id: 81,
        name: "Goblin",
        dataCenterId: 8
    },
    {
        id: 82,
        name: "Mandragora",
        dataCenterId: 10
    },
    {
        id: 83,
        name: "Louisoix",
        dataCenterId: 6
    },
    {
        id: 85,
        name: "Spriggan",
        dataCenterId: 6
    },
    {
        id: 86,
        name: "Sephirot",
        dataCenterId: 9
    },
    {
        id: 87,
        name: "Sophia",
        dataCenterId: 9
    },
    {
        id: 88,
        name: "Zurvan",
        dataCenterId: 9
    },
    {
        id: 90,
        name: "Aegis",
        dataCenterId: 1
    },
    {
        id: 91,
        name: "Balmung",
        dataCenterId: 8
    },
    {
        id: 92,
        name: "Durandal",
        dataCenterId: 2
    },
    {
        id: 93,
        name: "Excalibur",
        dataCenterId: 5
    },
    {
        id: 94,
        name: "Gungnir",
        dataCenterId: 1
    },
    {
        id: 95,
        name: "Hyperion",
        dataCenterId: 5
    },
    {
        id: 96,
        name: "Masamune",
        dataCenterId: 3
    },
    {
        id: 97,
        name: "Ragnarok",
        dataCenterId: 6
    },
    {
        id: 98,
        name: "Ridill",
        dataCenterId: 2
    },
    {
        id: 99,
        name: "Sargatanas",
        dataCenterId: 4
    },
    {
        id: 400,
        name: "Sagittarius",
        dataCenterId: 6
    },
    {
        id: 401,
        name: "Phantom",
        dataCenterId: 6
    },
    {
        id: 402,
        name: "Alpha",
        dataCenterId: 7
    },
    {
        id: 403,
        name: "Raiden",
        dataCenterId: 7
    },
    {
        id: 404,
        name: "Marilith",
        dataCenterId: 11
    },
    {
        id: 405,
        name: "Seraph",
        dataCenterId: 11
    },
    {
        id: 406,
        name: "Halicarnassus",
        dataCenterId: 11
    },
    {
        id: 407,
        name: "Maduin",
        dataCenterId: 11
    }
];

export {
  DataCenterId,
  DataCenterRegionId,
  WorldId,
  dataCenters,
  worlds,
  type DataCenterData,
  type WorldData,
};
