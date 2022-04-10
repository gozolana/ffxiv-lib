import { readdirSync } from 'fs';

const rootPath = './ThirdParty/SaintCoinach.Cmd';

const latestPatchFolder = readdirSync(rootPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && dirent.name.match(/^[\d\.]+$/))
  .map((dirent) => dirent.name)
  .sort((a, b) => a.localeCompare(b)) // latest?
  .pop();

const basePath = `${rootPath}/${latestPatchFolder}`;

export { basePath };
