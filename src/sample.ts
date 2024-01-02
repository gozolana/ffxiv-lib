import { ZoneProvider } from '.'

const a = ZoneProvider.findZone(134)

if (a) {
  document.querySelector('#sample')?.append(a.name)
}
