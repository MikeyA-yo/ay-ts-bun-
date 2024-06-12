const fs = require("node:fs");
export const AY = {
  isAy: true,
  type(b: any) {
    return typeof b;
  },
  os: process.platform,
  argv: Bun.argv.slice(1),
  print(...args: any[]) {
    let arg = "";
    args.forEach((ar) => {
      arg += ar;
      arg += " ";
    });
    console.log(arg);
  },
  read(out: string, mode: string) {
    return fs.readFileSync(out, mode);
  },
};
