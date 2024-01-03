import { ZoneProvider } from '.'
import { IconProvider } from './client'

const a = ZoneProvider.findZone(134)
const b = IconProvider.findIcon('SS')
if (a) {
  document.querySelector('#sample')?.append(a.name)
}
if (b) {
  document.querySelector('#sample')?.append(b)
}
