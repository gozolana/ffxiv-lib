import { readFileSync } from "fs";
import { parse } from "@fast-csv/parse";

interface IDataRow {
  [header: string]: string;
}

async function readCsv(
  basePath: string,
  table: string,
  headers: (string | undefined)[],
  lang = ""
): Promise<IDataRow[]> {
  const filePath =
    lang === ""
      ? `${basePath}/rawexd/${table}.csv`
      : `${basePath}/exd-all/${table}.${lang}.csv`;

  return new Promise<IDataRow[]>((resolve, reject) => {
    const result: IDataRow[] = [];
    const stream = parse<IDataRow, IDataRow>({
      headers: headers,
      skipRows: 3,
    })
      .on("error", reject)
      .on("data", (row: IDataRow) => {
        result.push(row);
      })
      .on("end", () => resolve(result));
    const lines = readFileSync(filePath, "utf-8").split("\n");
    lines.forEach((line) => stream.write(line));
    stream.end();
  });
}

export { readCsv };
