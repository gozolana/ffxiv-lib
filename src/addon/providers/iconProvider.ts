import { elite, icon, sb, ss, TIcon } from "../resources/icons.data"

class IconProvider {
  private _eliteMap: { [flag: number]: HTMLImageElement } = {};
  private _ss: HTMLImageElement = new Image();
  private _sb: HTMLImageElement = new Image();
  private _iconMap: { [icon: string]: HTMLImageElement } = {};
  constructor() {
    Object.keys(elite).map(Number).forEach(flag => {
        this._eliteMap[flag] = new Image();
        this._eliteMap[flag].src = elite[flag];
    })
    this._ss.src = ss;
    this._sb.src = sb;
    Object.keys(icon).forEach(key => {
        this._iconMap[key] = new Image();
        this._iconMap[key].src = icon[key];
    })
  }
  findElite(flag: number): HTMLImageElement | undefined {
    return this._eliteMap[flag];
  }
  get ss(): HTMLImageElement {
    return this._ss;
  }
  get sb(): HTMLImageElement {
    return this._sb;
  }
  findIcon(icon: string): HTMLImageElement | undefined {
    return this._iconMap[icon];
  }
}

const iconProvider = new IconProvider();

export { TIcon, iconProvider };
