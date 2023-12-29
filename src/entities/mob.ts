import { MessageProvider } from "../providers/messageProvider";
import { MobData, TMobCategory, TMobRank } from "../resources/mobs.data";

interface Mob {
  readonly id: number;
  readonly name: string;
  readonly tts: string;
  readonly rank: TMobRank;
  readonly category: TMobCategory;
  readonly zoneIds: number[];
  readonly respawnMinutes: {
    min: number;
    max: number;
  };
}

class MobImpl implements Mob {
  constructor(data: MobData) {
    this.id = data.id;
    this.rank = data.rank;
    this.category = data.category;
    this.zoneIds = data.zoneIds;
    this.respawnMinutes = data.respawnMinutes
      ? data.respawnMinutes
      : { min: 0, max: 0 };
  }
  id: number;
  rank: TMobRank;
  category: TMobCategory;
  zoneIds: number[];
  get name(): string {
    return MessageProvider.getBNpcName(this.id);
  }
  get tts(): string {
    return MessageProvider.getBNpcName(this.id, true);
  }
  respawnMinutes: {
    min: number;
    max: number;
  };
}

export { MobImpl, TMobCategory, TMobRank, type Mob };
