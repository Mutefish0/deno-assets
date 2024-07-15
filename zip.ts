import { ZipReader, Entry } from "https://deno.land/x/zipjs/index.js";
import Module from "node:module";
import __path from "node:path";

// nodejs - exports
// image - binary
// sounds - binary
// wasm - binary
export class AssetsLoader {
  private url: string;
  private mod: Module;
  private rootEntry!: Entry;
  private entires: Entry[] = [];

  constructor(url: string) {
    if (!url.endsWith(".dasset")) {
      throw new Error("Invalid file type");
    }
    this.mod = new Module(url);
    this.url = url;
  }

  async load() {
    const z = await Deno.open(this.url);
    const zr = new ZipReader(z.readable);
    const en = await zr.getEntries();
    this.rootEntry = en.shift()!;
    this.entires = en;
  }

  private findEntry(path: string) {
    const base = this.rootEntry.filename;

    const id = __path.join(base, path);

    console.log("id:", id);

    const entry = this.entires.find((e) => e.filename === id);
    console.log("find entry", entry);
  }

  require(path: string) {
    const oRequire = Module.prototype.require;
    // @ts-ignore
    Module.prototype.require = (_path) => {
      const isRelative = path.startsWith("./");
      if (isRelative) {
        //console.log("==== all-entry", this.entires);

        this.findEntry(path);
        return "hello";
      } else {
        return oRequire.call(this, path);
      }
    };
    const result = this.mod.require(path);
    Module.prototype.require = oRequire;
    return result;
  }
}
