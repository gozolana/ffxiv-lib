import { FieldZoneData } from '../resources/zones.data'
import { IconId } from './icon'
import { Zone, ZoneImpl } from './zone'

interface EliteLocation {
  label: string
  x: number
  y: number
  z: number
  flag: number
}

interface SSLocation {
  label: string
  x: number
  y: number
  z: number
  icon: string
}

const TMapImage = {
  Default: 0,
  Outline: 1,
  Transparent: 2,
} as const
type TMapImage = (typeof TMapImage)[keyof typeof TMapImage]

const TImageSize = {
  Small: 512,
  Middle: 1024,
  Large: 2048,
} as const
type TImageSize = (typeof TImageSize)[keyof typeof TImageSize]

interface FieldZone extends Zone {
  getMapImageUrl(type: TMapImage, size: TImageSize): string
  getEliteLocationIndices(
    pos: { x: number; y: number },
    flag: number,
    threshold: number
  ): number[]
  getMobColors(mobId: number): [string, string]
  readonly filter?: boolean
  readonly elite: {
    readonly length: number
    readonly ids: number[]
    readonly sId: number
    readonly aIds: number[]
    readonly bIds: number[]
    readonly locations: EliteLocation[]
  }
  readonly ss?: {
    readonly ids: number[]
    readonly sId: number
    readonly bId: number
    readonly locations: SSLocation[]
  }
  readonly fate?: {
    readonly ids: number[]
  }
  readonly focusRect: {
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
  }
}

class FieldZoneImpl extends ZoneImpl implements FieldZone {
  readonly filter?: boolean
  readonly elite: {
    readonly length: number
    readonly ids: number[]
    readonly sId: number
    readonly aIds: number[]
    readonly bIds: number[]
    readonly locations: EliteLocation[]
  }
  readonly ss?: {
    readonly ids: number[]
    readonly sId: number
    readonly bId: number
    readonly locations: SSLocation[]
  }
  readonly fate?: {
    readonly ids: number[]
  }
  constructor(data: FieldZoneData) {
    super(data)
    this.filter = data.filter
    const eliteLength = data.elite.ids.length
    this.elite = {
      length: eliteLength,
      ids: data.elite.ids,
      locations: data.elite.locations.map(loc => {
        const flagString5Digits =
          eliteLength === 5
            ? loc.flag
            : `${loc.flag.slice(0, 2)}0${loc.flag.slice(2, 3)}0`
        return {
          label: loc.label,
          x: loc.x,
          y: loc.y,
          z: loc.z,
          flag: parseInt(flagString5Digits, 2),
        }
      }),
      sId: data.elite.ids[0],
      aIds:
        eliteLength === 5
          ? data.elite.ids.slice(1, 3)
          : data.elite.ids.slice(1, 2),
      bIds:
        eliteLength === 5
          ? data.elite.ids.slice(3, 5)
          : data.elite.ids.slice(2, 3),
    }

    this.ss = data.ss
      ? {
          ids: data.ss.ids,
          locations: data.ss.locations.map(loc => {
            return {
              label: loc.label,
              x: loc.x,
              y: loc.y,
              z: loc.z,
              icon: loc.flag === '10' ? IconId.SS : IconId.SB,
            }
          }),
          sId: data.ss.ids[0],
          bId: data.ss.ids[1],
        }
      : undefined

    this.fate = data.fate
  }

  getMapImageUrl(imageType: TMapImage, imageSize: TImageSize): string {
    const baseUrl = 'https://res.cloudinary.com/lanaklein14/image/upload'
    switch (imageType) {
      case TMapImage.Outline:
        return `${baseUrl}/c_scale,w_${imageSize}/maps2/${this.id}.png`
      case TMapImage.Transparent:
        return `${baseUrl}/e_grayscale/e_outline:outer:8/co_white,e_make_transparent:50/co_rgb:bbf2ef,e_colorize:100/c_scale,w_${imageSize}/maps2/${this.id}.png`
      default:
        return `${baseUrl}/c_scale,w_${imageSize}/maps/${this.id}.jpg`
    }
  }

  async loadMapImage(
    target: HTMLImageElement,
    imageType: TMapImage = TMapImage.Default,
    imageSize: TImageSize = TImageSize.Small
  ): Promise<void> {
    await new Promise((resolve, reject) => {
      target.onload = () => resolve(target)
      target.onerror = e => reject(e)
      target.src = this.getMapImageUrl(imageType, imageSize)
    })
  }

  // 範囲内のEliteIndexを近い順に返す
  getEliteLocationIndices(
    pos: { x: number; y: number },
    flag = 0x1f, // all
    threshold = 3.0
  ): number[] {
    interface IndexDistance {
      index: number
      distance: number
    }
    return this.elite.locations
      .reduce<IndexDistance[]>((acc, location, index) => {
        const [diffX, diffY] = [location.x - pos.x, location.y - pos.y]
        const distance = Math.sqrt(diffX * diffX + diffY * diffY)
        if (location.flag & flag && distance < threshold) {
          acc.push({
            index,
            distance,
          })
        }
        return acc
      }, [])
      .sort((a, b) => a.distance - b.distance)
      .map(item => item.index)
  }

  getMobColors(mobId: number): [string, string] {
    const index = this.elite.ids.indexOf(mobId)
    if (this.elite.ids.length === 5) {
      switch (index) {
        case 0:
          return ['#f44336', '#ca330f']
        case 1:
          return ['#ffeb3b', '#dfa824']
        case 2:
          return ['#8bc34a', '#3c933b']
        case 3:
          return ['#2196f3', '#3171ba']
        case 4:
          return ['#9c27b0', '#a54674']
      }
    } else {
      switch (index) {
        case 0:
          // S
          return ['#f44336', '#ca330f']
        case 1:
          return ['#ffeb3b', '#dfa824']
        case 2:
          return ['#2196f3', '#3171ba']
      }
    }
    if (this.ss?.ids.includes(mobId)) {
      return ['#000000', '#1f8cad']
    }
    return ['#444444', '#444444']
  }

  get focusRect() {
    if (this.elite.locations.length === 0) {
      return {
        x: this.scale.xMin,
        y: this.scale.yMin,
        width: this.scale.xRange,
        height: this.scale.yRange,
      }
    }
    const xarrays = this.elite.locations.map(loc => loc.x)
    const yarrays = this.elite.locations.map(loc => loc.y)
    const bounds = {
      xmin: xarrays.reduce((a, b) => (a < b ? a : b)),
      xmax: xarrays.reduce((a, b) => (a > b ? a : b)),
      ymin: yarrays.reduce((a, b) => (a < b ? a : b)),
      ymax: yarrays.reduce((a, b) => (a > b ? a : b)),
    }
    const p = 10.0
    const outer = {
      xmin: Math.max(
        this.scale.xMin,
        ((p + 1) * bounds.xmin - bounds.xmax) / p
      ),
      xmax: Math.min(
        this.scale.xMax,
        ((p + 1) * bounds.xmax - bounds.xmin) / p
      ),
      ymin: Math.max(
        this.scale.yMin,
        ((p + 1) * bounds.ymin - bounds.ymax) / p
      ),
      ymax: Math.min(
        this.scale.yMax,
        ((p + 1) * bounds.ymax - bounds.ymin) / p
      ),
    }
    return {
      x: outer.xmin,
      y: outer.ymin,
      width: outer.xmax - outer.xmin,
      height: outer.ymax - outer.ymin,
    }
  }
}

export { FieldZoneImpl, TImageSize, TMapImage, type FieldZone }
