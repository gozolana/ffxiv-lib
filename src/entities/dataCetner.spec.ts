import { expect, test } from "vitest";
import { WorldProvider } from "../providers/worldProvider";
import { DataCenterData } from "../resources/worlds.data";
import { DataCenterId, DataCenterImpl, DataCenterRegionId } from "./dataCenter";

test("constructor set properties", () => {
  const input: DataCenterData = {
    id: DataCenterId.Elemental,
    name: "Elemental",
    color: "#10000",
    regionId: DataCenterRegionId.JP,
  };
  const dc = new DataCenterImpl(input);
  expect(dc.id).toBe(DataCenterId.Elemental);
  expect(dc.name).toBe("Elemental");
  expect(dc.color).toBe("#10000");
  expect(dc.regionId).toBe(DataCenterRegionId.JP);
});

test.each([
  ["Elemental = Elemental", DataCenterId.Elemental, DataCenterId.Elemental, 0],
  ["Elemental < Gaia", DataCenterId.Elemental, DataCenterId.Gaia, -1],
  ["Gaia      < Mana", DataCenterId.Gaia, DataCenterId.Mana, -1],
  ["Mana      < Meteor", DataCenterId.Mana, DataCenterId.Meteor, -1],
  ["Mana(JP)  < Aether(EN)", DataCenterId.Mana, DataCenterId.Aether, -1],
])(`compare order should be correct. (%s)`, async (_label, d1, d2, result) => {
  const dc1 = WorldProvider.findDataCenter(d1);
  const dc2 = WorldProvider.findDataCenter(d2);
  expect(dc1!.compare(dc2!)).toBe(result);
});
