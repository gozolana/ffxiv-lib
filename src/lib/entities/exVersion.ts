import { MessageProvider } from '../providers/messageProvider'
import { ExVersionData, ExVersionId } from '../resources/exVersions.data'

interface ExVersion {
  readonly id: ExVersionId
  readonly version: number
  readonly locationClusteringThreshold: number
  readonly color: string
  readonly name: string
  readonly tts: string
}

class ExVersionImpl implements ExVersion {
  constructor(data: ExVersionData) {
    this.id = data.id
    this.version = data.version
    this.locationClusteringThreshold = data.locationClusteringThreshold

    this.color = data.color
  }
  readonly id: ExVersionId
  readonly version: number
  readonly locationClusteringThreshold: number
  readonly color: string
  get name(): string {
    return MessageProvider.getExVersion(this.id)
  }
  get tts(): string {
    return MessageProvider.getExVersion(this.id, true)
  }
}

export { ExVersionId, ExVersionImpl, type ExVersion }
