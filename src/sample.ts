import { IconId, IconProvider } from './'

const icon: HTMLImageElement | undefined = IconProvider.findIcon(
  IconId.CairnOfReturn
)
const svg: HTMLImageElement | undefined = IconProvider.findElite(2)

document.querySelector('#sample')?.append(icon!)
document.querySelector('#sample')?.append(svg!)
