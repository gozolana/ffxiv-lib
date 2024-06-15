import { EorzeaPeriod } from './eorzeaPeriod'

export class SpawnPeriod extends EorzeaPeriod {
  readonly subPeriods: EorzeaPeriod[]

  constructor(
    startTimeStamp: number,
    endTimeStamp: number,
    subPeriods: EorzeaPeriod[]
  ) {
    super(startTimeStamp, endTimeStamp)
    this.subPeriods = subPeriods
  }
}
