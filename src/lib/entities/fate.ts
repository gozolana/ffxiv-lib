import { MessageProvider } from '../providers/messageProvider'
import { FateData } from '../resources/fates.data'
import { Zone } from './zone'

interface Fate {
  readonly id: number
  readonly name: string
  readonly icon: string
  readonly eureka: number
  readonly rule: number
  readonly specialFate: boolean
  readonly x: number
  readonly y: number
  readonly z: number
  readonly zoneId: number
}

class FateImpl implements Fate {
  constructor(data: FateData, zone: Zone) {
    this.id = data.id
    this.icon = data.icon
    this.eureka = data.eureka
    this.rule = data.rule
    this.specialFate = data.specialFate
    const [x, y, z] = zone.toLocalPosXYZ(data)
    this.x = x
    this.y = y
    this.z = z
    this.zoneId = data.zoneId
  }
  id: number
  icon: string
  eureka: number
  rule: number
  specialFate: boolean
  x: number
  y: number
  z: number
  zoneId: number
  get name(): string {
    return MessageProvider.getFate(this.id)
  }
  get tts(): string {
    return MessageProvider.getFate(this.id, true)
  }
}

export { FateImpl, type Fate }
