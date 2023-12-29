import { elite, icon } from "../resources/icons.data";

class IconProvider {
  private _eliteMap: Record<number, HTMLImageElement> = {};
  private _iconMap: Record<string, HTMLImageElement> = {};
  constructor() {
    Object.keys(elite)
      .map(Number)
      .forEach((flag) => {
        this._eliteMap[flag] = new Image();
        this._eliteMap[flag].src = elite[flag];
      });
    Object.keys(icon).forEach((key) => {
      this._iconMap[key] = new Image();
      this._iconMap[key].src = icon[key];
    });
  }
  findElite(flag: number): HTMLImageElement | undefined {
    return this._eliteMap[flag];
  }
  findIcon(icon: string): HTMLImageElement | undefined {
    return this._iconMap[icon];
  }
}

const iconProvider = new IconProvider();
export { iconProvider as IconProvider };
