import { WorldProvider } from '../../../src/lib/providers/worldProvider';

describe('EorzeaDate', () => {
  test('constructor', () => {
    const dcs = WorldProvider.getDataCentersOfRegion(1);
    const worlds = WorldProvider.getWorldsOfDataCenter(dcs[2].id);
  });
});
