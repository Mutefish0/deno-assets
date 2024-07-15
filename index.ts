import { AssetsLoader } from "./zip.ts";
const al = new AssetsLoader("./test.dasset");

await al.load();

const x = al.require("./a.js");

console.log(x);

// const modXId = new URL("./test1/a.js", import.meta.url).pathname;
// const modx = new Module(modXId, mod);

// modx.filename = modXId;
// modx.exports = "hehe111111";
// modx.loaded = true;
// modx.paths = mod.paths;

// Module._cache[modXId] = modx;

// console.log("before======", Module._cache[modXId]);

// //console.log("before", Module._cache);

// const x = mod.require("./test1/a.js");

// console.log("after", Module._cache);

// console.log(x);

//const entities = AssetsLoader.load("./test.dasset");

//const root =

// const id = baseUrl + "/a.js";
// const m = new Module(id);
// // @ts-ignore
// m._compile("module.exports = { test: 1}", id);

// const x = require("./a.js");

// console.log(x);

//console.log("cache:", require.cache);

// function createModuleFromBuffer(id: string, buffer: Uint8Array) {
//   //
// }

//console.log(require.main);

// function requireFromString(src, filename) {
//   //var Module = module.constructor;
//   var m = new Module();
//   m._compile(src, filename);
//   return m.exports;
// }
// console.log(requireFromString("module.exports = { test: 1}", ""));

// .dasset
