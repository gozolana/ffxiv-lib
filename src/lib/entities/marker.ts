import { MessageProvider } from '../providers/messageProvider'
import { MarkerData } from '../resources/zones.data'
import { Zone } from './zone'

interface Marker {
  readonly x: number
  readonly y: number
  readonly name: string
  readonly icon: string
}

class MarkerImpl implements Marker {
  constructor(data: MarkerData, zone: Zone) {
    this.placeNameId = data.placeNameId
    //[this.x, this.y] =
    zone.toLocalPosXY(data)
    //暫定：OffsetやSizeFactorは気にしなくてよい？
    this.x = data.x / 50 + 1.0
    this.y = data.y / 50 + 1.0
    this.icon = data.icon
  }

  private placeNameId: number
  readonly x: number
  readonly y: number
  get name() {
    return MessageProvider.getPlaceName(this.placeNameId)
  }
  readonly icon: string
}

export { MarkerImpl, type Marker }
