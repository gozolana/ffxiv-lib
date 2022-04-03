import { IExVersion, ExVersion } from "../entities/exVersion";
import { exVersions } from "../resources/zones.data";

class ExVersionProvider {
  constructor() {
    this.exVersionById = new Map(
      exVersions.map((vrs) => [vrs.id, new ExVersion(vrs)])
    );
  }
  private exVersionById: Map<number, IExVersion>;

  findExVersion(id: number): IExVersion | undefined {
    return this.exVersionById.get(id);
  }
}

const exVersionProvider = new ExVersionProvider();
export { exVersionProvider as ExVersionProvider };
