import { describe, expect, it } from 'vitest'
import { WorldProvider } from '../worldProvider'

describe('deposit()', () => {
  it('should return Elemental as default', () => {
    const defaultDataCenter = WorldProvider.DEFAULT_DATACENTER
    expect(defaultDataCenter.name).toBe('Elemental')
  })

  it('should return 4 Japanese DataCenters', () => {
    const defaultDataCenters = WorldProvider.getDataCentersOfRegion()
    expect(defaultDataCenters.length).toBe(4)
  })
})
