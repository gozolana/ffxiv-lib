import { IconId, ZoneProvider } from './lib'
import { IconProvider } from './plugin'

const a = ZoneProvider.findZone(134)
const b = IconProvider.findIcon(IconId.BronzeCoffer)
if (a) {
  document.querySelector('#sample')?.append(a.name)
}
if (b) {
  document.querySelector('#sample')?.append(b)
}
