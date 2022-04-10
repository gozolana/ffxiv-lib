import { Mob, MobImpl } from '../entities/mob';
import { mobData } from '../resources/mobs.data';

class MobProvider {
  constructor() {
    this.srankelites = mobData.sRanks.map(
      (id) => new MobImpl(mobData.mobById[id])
    );
    this.arankelites = mobData.aRanks.map(
      (id) => new MobImpl(mobData.mobById[id])
    );
    this.brankelites = mobData.bRanks.map(
      (id) => new MobImpl(mobData.mobById[id])
    );
    this.specialelites = mobData.specials.map(
      (id) => new MobImpl(mobData.mobById[id])
    );
    this.specialfates = mobData.fates.map(
      (id) => new MobImpl(mobData.mobById[id])
    );
    this.srankelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.arankelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.brankelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.specialelites.forEach((mob) => (this.mobs[mob.id] = mob));
    this.specialfates.forEach((mob) => (this.mobs[mob.id] = mob));
  }
  private mobs: Record<number, Mob> = {};
  private srankelites: Mob[];
  private arankelites: Mob[];
  private brankelites: Mob[];
  private specialelites: Mob[];
  private specialfates: Mob[];

  findMob(id: number): Mob | undefined {
    return this.mobs[id];
  }

  // Field Zone の zoneId を優先度順(新エリア→旧エリア)で並べて返す
  getSRankEliteMarks(): Mob[] {
    return this.srankelites;
  }
  getARankEliteMarks(): Mob[] {
    return this.arankelites;
  }
  getBRankEliteMarks(): Mob[] {
    return this.brankelites;
  }
  getSpecialEliteMarks(): Mob[] {
    return this.specialelites;
  }
  getSpecialFATEs(): Mob[] {
    return this.specialfates;
  }
}

const mobProvider = new MobProvider();
export { mobProvider as MobProvider };
