import { IMob, Mob } from "../entities/mob";
import {
  mobData,
} from "../resources/mobs.data";

class MobProvider {
  constructor() {
    this.srankelites = mobData.sRanks.map((id) => new Mob(mobData.mobById[id]));
    this.arankelites = mobData.aRanks.map((id) => new Mob(mobData.mobById[id]));
    this.brankelites = mobData.bRanks.map((id) => new Mob(mobData.mobById[id]));
    this.specialelites = mobData.specials.map((id) => new Mob(mobData.mobById[id]));
    this.specialfates = mobData.fates.map((id) => new Mob(mobData.mobById[id]));
    this.srankelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.arankelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.brankelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.specialelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.specialfates.forEach((mob) => (this.mobs[mob.id] = mob));
  }
  private mobs: { [id: number]: IMob } = {};
  private srankelites: IMob[];
  private arankelites: IMob[];
  private brankelites: IMob[];
  private specialelites: IMob[];
  private specialfates: IMob[];

  findMob(id: number): IMob | undefined {
    return this.mobs[id];
  }

  // Field Zone の zoneId を優先度順(新エリア→旧エリア)で並べて返す
  getSRankEliteMarks(): IMob[] {
    return this.srankelites;
  }
  getARankEliteMarks(): IMob[] {
    return this.arankelites;
  }
  getBRankEliteMarks(): IMob[] {
    return this.brankelites;
  }
  getSpecialEliteMarks(): IMob[] {
    return this.specialelites;
  }
  getSpecialFATEs(): IMob[] {
    return this.specialfates;
  }
}

const mobProvider = new MobProvider();
export { mobProvider as MobProvider };
