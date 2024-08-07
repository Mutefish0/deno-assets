import {
  ZipReader,
  Uint8ArrayWriter,
  Uint8ArrayReader,
} from "jsr:@zip-js/zip-js@2.7.48/data-uri";
import type { Entry } from "jsr:@zip-js/zip-js@2.7.48/";
import Module from "node:module";
import __path from "node:path";

interface AEntry extends Entry {
  buffer: Uint8Array;
}

type Source = string | Uint8Array;

export class AssetsModule {
  private rootEntry!: AEntry;
  private entires: AEntry[] = [];
  private jsModules: Record<string, any> = {};
  private oRequire = Module.prototype.require;
  private requireStatck: string[] = [];

  constructor() {}

  async load(src: Source) {
    let zr: ZipReader;
    if (typeof src === "string") {
      const url = src.replace("file://", "");
      const z = await Deno.open(url);
      zr = new ZipReader(z.readable);
    } else if (src instanceof Uint8Array) {
      const u = new Uint8ArrayReader(src);
      zr = new ZipReader(u);
    } else {
      throw new Error("Ivalic source");
    }

    const en = await zr.getEntries();
    this.rootEntry = en.shift()! as AEntry;
    this.entires = en as AEntry[];

    await Promise.all<void>(
      this.entires.map(async (entry) => {
        if (!entry.directory) {
          const w = new Uint8ArrayWriter();
          // @ts-ignore
          await entry.getData?.(w);
          const buffer = await w.getData();
          entry.buffer = buffer;
        }
      })
    );
  }

  private findEntry(path: string): AEntry {
    const id = this.resolve(path);
    const entry = this.entires.find((e) => e.filename === id);
    if (!entry) {
      throw new Error(`Entry not found: ${id}`);
    }
    return entry;
  }

  private resolve(path: string) {
    const base =
      this.requireStatck[this.requireStatck.length - 1] ||
      this.rootEntry.filename;
    const ext = __path.extname(path);
    const id = __path.join(base, path + (ext.length > 0 ? "" : ".js"));
    return id;
  }

  private processRequireStack(path: string, func: () => void) {
    const top = this.requireStatck[this.requireStatck.length - 1];
    const dir = __path.dirname(path);
    const changeDir = dir !== top;
    if (changeDir) {
      this.requireStatck.push(dir);
    }
    func();
    if (changeDir) {
      this.requireStatck.pop();
    }
  }

  hookRequire = (_path: string): any => {
    if (_path.startsWith("/")) {
      _path = "." + _path;
    }
    const isRelative = _path.startsWith("./");
    if (isRelative) {
      const entry = this.findEntry(_path);
      if (entry.directory) {
        throw new Error("Directory require not supported");
      } else if (entry.filename.endsWith(".js")) {
        if (!this.jsModules[entry.filename]) {
          const decoder = new TextDecoder();
          const src = decoder.decode(entry.buffer!);
          const mod = new Module(entry.filename);
          this.processRequireStack(entry.filename, () => {
            // @ts-ignore
            mod._compile(src, entry.filename);
            this.jsModules[entry.filename] = mod.exports;
          });
        }
        return this.jsModules[entry.filename];
      } else if (entry.filename.endsWith(".node")) {
        const tempFilePath = Deno.makeTempFileSync({
          suffix: ".node",
        });
        Deno.writeFileSync(tempFilePath, entry.buffer!);

        try {
          const mod = this.oRequire(tempFilePath);
          Deno.removeSync(tempFilePath);
          return mod;
        } catch (e) {
          Deno.removeSync(tempFilePath);
          throw e;
        }
      } else {
        return entry.buffer;
      }
    } else {
      return this.oRequire(_path);
    }
  };

  require(path: string): any {
    // @ts-ignore
    Module.prototype.require = this.hookRequire;
    try {
      const result = this.hookRequire(path);
      this.requireStatck = [];
      Module.prototype.require = this.oRequire;
      return result;
    } catch (e) {
      this.requireStatck = [];
      Module.prototype.require = this.oRequire;
      throw e;
    }
  }
}
