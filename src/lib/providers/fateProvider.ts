import { Fate, FateImpl } from '../entities/fate'
import { fateData } from '../resources/fates.data'
import { ZoneProvider } from './zoneProvider'

class FateProvider {
  private fateById: Record<number, Fate> = {}

  constructor() {
    fateData.forEach(fate => {
      const zone = ZoneProvider.findZone(fate.zoneId)
      if (zone) {
        this.fateById[fate.id] = new FateImpl(fate, zone)
      }
    })
  }

  findFate = (id: number): Fate | undefined => this.fateById[id]

  getFatesOfZone = (zoneId: number): Fate[] =>
    Object.values(this.fateById)
      .filter(f => f.zoneId === zoneId)
      .sort((a, b) => a.y - b.y)
}

const fateProvider = new FateProvider()
export { fateProvider as FateProvider }
