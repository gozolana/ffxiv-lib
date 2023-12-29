import { copyFileSync, mkdirSync, readdirSync, writeFileSync } from "fs";
import { extname, resolve } from "path";
import { retrieveIconStrings } from "./parseCsvs.ts";
import { getPatchPath } from "./saintCoinach.ts";

const outputPath = "./src/addon/resources/icons.data.ts";
const outputPath2 = "./src/lib/resources/icons.data.ts";
const outputPath3 = "./src/assets/icons/preview.htm";

const outPath = resolve(`./src/assets/icons`);
mkdirSync(outPath, { recursive: true });

const myIcons = new Map<string, string>([
  ["Aetheryte", "060453"],
  ["Mob", "060004"],
  ["PartyMember", "060421"],
  ["Player", "060443"],
  ["Mining", "060437"],
  ["Quarrying", "060438"],
  ["Logging", "060432"],
  ["Harvesting", "060433"],
  ["Fishing", "060445"],
  ["Up", "060954"],
  ["Down", "060955"],
  ["Flag", "060561"],
  ["CairnOfReturn", "060905"],
  ["CairnOfReturnActive", "060906"],
  ["CairnOfPassage", "060907"],
  ["CairnOfPassageActive", "060908"],
  ["GoldCoffer", "060913"],
  ["SilverCoffer", "060912"],
  ["BronzeCoffer", "060911"],
  ["PlotGreen", "060403"],
  ["PlotWhite", "060444"],
  ["Pin", "060442"],
  ["PlotYellow", "060424"],
  ["PlotRed", "060422"],
  ["TriangleGreen", "060358"],
  ["TriangleBlue", "060361"],
  ["TriangleYellow", "060360"],
  ["TriangleRed", "060359"],
  ["TrapYellow", "060402"],
  ["TrapRed", "060401"],
  ["Num1", "060918"],
  ["Num2", "060919"],
  ["Num3", "060920"],
  ["Num4", "060921"],
  ["Num5", "060922"],
  ["Num6", "060923"],
  ["Num7", "060924"],
  ["Num8", "060925"],
]);

const myIcons2 = new Map<string, string>([
  ["SS", "SS"],
  ["SB", "SB"],
  ["CheckMine", "CheckMine"],
  ["CheckOthers", "CheckOthers"],
  ["CheckUnknown", "CheckUnknown"],
]);

const SIZE = 32;
const RATIO = 15 / 16;

function path(angle1: number, angle2: number): string {
  const center = SIZE / 2.0;
  const radius = center * RATIO;
  const x1 = center + radius * Math.cos((angle1 * Math.PI) / 180.0);
  const y1 = center + radius * Math.sin((angle1 * Math.PI) / 180.0);
  const x2 = center + radius * Math.cos((angle2 * Math.PI) / 180.0);
  const y2 = center + radius * Math.sin((angle2 * Math.PI) / 180.0);
  return `M ${center},${center} L ${x1.toFixed(2)},${y1.toFixed(
    2
  )} A ${radius},${radius} 0 0,1 ${x2.toFixed(2)},${y2.toFixed(2)} Z`;
}

function circle(color: string): string {
  const center = SIZE / 2.0;
  const radius = center * RATIO;
  return `<circle cx="${center}" cy="${center}" r="${radius}" fill="${color}" stroke="black" />`;
}

function rhombus(color: string): string {
  const center = SIZE / 2.0;
  const radius = center * RATIO;
  const points: string[] = [
    `${center - radius}, ${center}`,
    `${center}, ${center - radius}`,
    `${center + radius}, ${center}`,
    `${center}, ${center + radius}`,
  ];
  return `<polygon points="${points.join(
    " "
  )}" fill="${color}" stroke="black" />`;
}

function hexagon(color: string): string {
  const center = SIZE / 2.0;
  const outer = center * RATIO;
  const inner = Math.sqrt((outer * outer) / 3.0);
  const radiuses: number[] = [];
  for (let i = 0; i < 6; i++) {
    radiuses.push(inner);
    radiuses.push(outer);
  }
  const points: string[] = radiuses.map((radius, index) => {
    const angle = index * 30;
    const x = center + radius * Math.cos((angle * Math.PI) / 180.0);
    const y = center + radius * Math.sin((angle * Math.PI) / 180.0);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  return `<polygon points="${points.join(
    " "
  )}" fill="${color}" stroke="black" />`;
}

function check(color: string): string {
  return `<path d="M 7,11 L 13,17 L 24,6 L 29,11 L 13,27 L 2,16 Z" fill="${color}" stroke="black" />`;
}

function generateSvgIcons(outPath: string): string {
  const items: {
    filename: string;
    content: string;
  }[] = [];
  const imports: string[] = [];
  for (let flag = 1; flag < 32; flag++) {
    const filename = `${flag.toString(2).padStart(5, "0")}.svg`;
    const colors: string[] = [];
    if ((flag >> 4) & 1) colors.push("#f44336");
    if ((flag >> 3) & 1) colors.push("#ffeb3b");
    if ((flag >> 2) & 1) colors.push("#8bc34a");
    if ((flag >> 1) & 1) colors.push("#2196f3");
    if (flag & 1) colors.push("#9c27b0");
    let svg: string = "";
    switch (colors.length) {
      case 5:
        svg = `<g stroke="black">
    <path d="${path(234, 306)}" fill="${colors[0]}" />
    <path d="${path(162, 243)}" fill="${colors[1]}" />
    <path d="${path(306, 18)}" fill="${colors[2]}" />
    <path d="${path(90, 162)}" fill="${colors[3]}" />
    <path d="${path(18, 90)}" fill="${colors[4]}" />
  </g>`;
        break;
      case 4:
        svg = `<g stroke="black">
    <path d="${path(225, 315)}" fill="${colors[0]}" />
    <path d="${path(135, 225)}" fill="${colors[1]}" />
    <path d="${path(315, 45)}" fill="${colors[2]}" />
    <path d="${path(45, 135)}" fill="${colors[3]}" />
  </g>`;
        break;
      case 3:
        svg = `<g stroke="black">
    <path d="${path(210, 330)}" fill="${colors[0]}" />
    <path d="${path(90, 210)}" fill="${colors[1]}" />
    <path d="${path(330, 90)}" fill="${colors[2]}" />
  </g>`;
        break;
      case 2:
        svg = `<g stroke="black">
    <path d="${path(180, 0)}" fill="${colors[0]}" />
    <path d="${path(0, 180)}" fill="${colors[1]}" />
  </g>`;
        break;
      case 1:
        svg = circle(colors[0]);
        break;
    }
    items.push({
      filename: filename,
      content: svg,
    });
    imports.push(
      `elite[${flag}] = new URL('../../assets/icons/${filename}', import.meta.url).href;`
    );
  }
  items.push({
    filename: `sb.svg`,
    content: rhombus("#607d8b"),
  });
  imports.push(
    `icon["SS"] = new URL('../../assets/icons/ss.svg', import.meta.url).href;`
  );
  items.push({
    filename: `ss.svg`,
    content: hexagon("#607d8b"),
  });
  imports.push(
    `icon["SB"] = new URL('../../assets/icons/sb.svg', import.meta.url).href;`
  );
  items.push({
    filename: `checkLime.svg`,
    content: check("lime"),
  });
  imports.push(
    `icon["CheckMine"] = new URL('../../assets/icons/checkLime.svg', import.meta.url).href;`
  );
  items.push({
    filename: `checkRoyalBlue.svg`,
    content: check("royalblue"),
  });
  imports.push(
    `icon["CheckOthers"] = new URL('../../assets/icons/checkRoyalBlue.svg', import.meta.url).href;`
  );
  items.push({
    filename: `checkGrey.svg`,
    content: check("grey"),
  });
  imports.push(
    `icon["CheckUnknown"] = new URL('../../assets/icons/checkGrey.svg', import.meta.url).href;`
  );
  items.forEach(item => {
    const outString = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
  <filter id="h" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="2" />
  </filter>
  ${item.content}
  <circle cx="7" cy="7" r="4" fill="white" filter="url(#h)" />
</svg>`;
    writeFileSync(`${outPath}/${item.filename}`, outString);
  });
  return imports.join("\n");
}

function generatePngIcons(outPath: string, iconSet: Set<string>): string {
  const imports: string[] = [];
  for (const icon of iconSet) {
    const filename = `${icon}.png`;
    const folder = icon.substring(0, 3) + "000";
    const source = `${getPatchPath()}/ui/icon/${folder}/${filename}`;
    const dest = `${outPath}/${filename}`;
    // copy file
    copyFileSync(source, dest);
    imports.push(
      `icon["${icon}"] = new URL('../../assets/icons/${filename}', import.meta.url).href;`
    );
  }
  return imports.join("\n");
}

function writeIconsJson(includeSvg: string, includePng: string) {
  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const elite: Record<number, string> = {};
const icon: Record<string, string> = {};
${includeSvg}
${includePng}

export { elite, icon };
`;

  writeFileSync(outputPath, output);
}

function writeIconsJson2(types: Map<string, string>) {
  let iconType: any = {};
  types.forEach((key, value) => {
    iconType[value] = key;
  });
  iconType = JSON.stringify(iconType, null, 2).replace(
    /\"([0-9a-zA-Z]+)\": /g,
    "$1: "
  );

  const output = `// THIS CODE IS AUTO GENERATED.
// DO NOT EDIT.

const TIcon = ${iconType} as const;
type TIcon = typeof TIcon[keyof typeof TIcon];

export { TIcon };
`;

  writeFileSync(outputPath2, output);
}

function writePreview() {
  const imagefiles = readdirSync(outPath, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);

  const svgRows = imagefiles
    .filter(filename => extname(filename).toLowerCase() === ".svg")
    .map(
      filename =>
        `      <li><img class="middle" src="./${filename}" />${filename}</li>`
    );

  const pngRows = imagefiles
    .filter(filename => extname(filename).toLowerCase() === ".png")
    .map(
      filename =>
        `      <li><img class="middle" src="./${filename}" />${filename}</li>`
    );

  const rows = [...svgRows, ...pngRows].join("\n");

  const output = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style rel="stylesheet" type="text/css">
      img.middle {
        vertical-align: middle;
      }
    </style>
    <title>Icons Preview</title>
  </head>
  <body>
    <ul>
${rows}
    </ul>
  </body>
</html>
`;

  writeFileSync(outputPath3, output);
}

async function generateIcons() {
  const importDefs = generateSvgIcons(outPath);
  const iconSet = await retrieveIconStrings();
  myIcons.forEach(value => iconSet.add(value));
  const importDefs2 = generatePngIcons(outPath, iconSet);
  writeIconsJson(importDefs, importDefs2);
  writeIconsJson2(new Map([...myIcons, ...myIcons2]));
  writePreview();
}

export { generateIcons };
