import * as fs from "fs";

SupCore.system.registerPlugin("typescriptAPI", "CustomAPI", {
  code: fs.readFileSync(`${__dirname}/CustomAPI.ts.txt`, { encoding: "utf8" }),
  defs: fs.readFileSync(`${__dirname}/CustomAPI.d.ts.txt`, { encoding: "utf8" }),
});
