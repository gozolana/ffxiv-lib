import { ExVersion, ExVersionImpl } from '../entities/exVersion';
import { exVersions } from '../resources/zones.data';

class ExVersionProvider {
  constructor() {
    this.exVersionById = new Map(
      exVersions.map((vrs) => [vrs.id, new ExVersionImpl(vrs)])
    );
  }
  private exVersionById: Map<number, ExVersion>;

  findExVersion(id: number): ExVersion | undefined {
    return this.exVersionById.get(id);
  }
}

const exVersionProvider = new ExVersionProvider();
export { exVersionProvider as ExVersionProvider };
