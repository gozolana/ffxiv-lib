import { existsSync, readdirSync, rmSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";
// import { createHash } from 'crypto';
import { spawn } from "child_process";
import extract from "extract-zip";

const rootPath = `${process.cwd()}/ThirdParty/SaintCoinach.Cmd`;
const zipPath = `${rootPath}.zip`;
const homeUrl = "https://github.com/xivapi/SaintCoinach/releases/latest";
const fileName = "SaintCoinach.Cmd.zip";

const getPatchPath = () => {
  const folderName = readdirSync(rootPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.match(/^[\d\.]+$/))
    .map(dirent => dirent.name)
    .sort((a, b) => a.localeCompare(b)) // latest?
    .pop();
  return `${rootPath}/${folderName}`;
};

export const getLatestZipUrl = async (
  homeUrl: string,
  fileName: string
): Promise<string> => {
  const url = new URL(homeUrl);
  const response = await fetch(homeUrl);
  const dom = new JSDOM(await response.text());
  const incFlag = dom.window.document.querySelector<HTMLElement>(
    `include-fragment[loading="lazy"]`
  );
  if (incFlag) {
    const incUrl = incFlag.getAttribute("src") ?? "";
    const response2 = await fetch(incUrl);
    const dom = new JSDOM(await response2.text());
    const ancher = dom.window.document.querySelector<HTMLAnchorElement>(
      `a[href*="${fileName}"]`
    );
    if (ancher) {
      const zipUrl = new URL(ancher.href, url);
      return zipUrl.toString();
    } else {
      throw `Link to ${fileName} was not found in ${incUrl}.`;
    }
  } else {
    throw `Link to include-fragment was not found in ${homeUrl}.`;
  }
};

export const downloadZip = async (url: string, path: string): Promise<void> => {
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  writeFileSync(path, Buffer.from(arrayBuffer));
};

const cleanUp = () => {
  if (existsSync(rootPath)) {
    rmSync(rootPath, { recursive: true, force: true });
  }
};

const install = async () => {
  const zipUrl = await getLatestZipUrl(homeUrl, fileName);
  console.log(zipUrl);
  await downloadZip(zipUrl, zipPath);
  await extract(zipPath, { dir: rootPath });
  rmSync(zipPath);
};

const update = async () => {
  const args = [
    "C:/Program Files (x86)/SquareEnix/FINAL FANTASY XIV - A Realm Reborn",
    "allexd BNpcName PlaceName Weather ExVersion",
    "rawexd Aetheryte Map MapMarker MapSymbol TerritoryType TerritoryTypeTransient WeatherRate World WorldDCGroupType",
    "uihd 060000 064000",
    "ui 060000 064000",
  ];
  return new Promise(resolve => {
    const proc = spawn("SaintCoinach.Cmd.exe", args, {
      cwd: rootPath,
    });
    proc.stdout.on("data", data => console.log(data.toString()));
    proc.on("exit", code => {
      console.log(`child process exited with code ${code}`);
      resolve(code);
    });
  });
};

export { cleanUp, getPatchPath, install, rootPath, update };
