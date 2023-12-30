// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const ExVersionId = {
  ARealmReborn: 0,
  Heavensward: 1,
  Stormblood: 2,
  Shadowbringers: 3,
  Endwalker: 4,
} as const;
type ExVersionId = (typeof ExVersionId)[keyof typeof ExVersionId];

type ExVersionData = {
  readonly id: number;
  readonly version: number;
  readonly locationClusteringThreshold: number;
  readonly color: string;
};

const exVersions: ExVersionData[] = [
  {
    id: 0,
    version: 2,
    locationClusteringThreshold: 0.15,
    color: "#f0f4c3",
  },
  {
    id: 1,
    version: 3,
    locationClusteringThreshold: 0.9,
    color: "#bbdefb",
  },
  {
    id: 2,
    version: 4,
    locationClusteringThreshold: 0.9,
    color: "#ffcdd2",
  },
  {
    id: 3,
    version: 5,
    locationClusteringThreshold: 0.9,
    color: "#cfd8dc",
  },
  {
    id: 4,
    version: 6,
    locationClusteringThreshold: 0.9,
    color: "#ffe082",
  },
];

export { ExVersionId, exVersions, type ExVersionData };
