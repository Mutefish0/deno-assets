import { AssetsModule } from "./mod.ts";

const assets = new AssetsModule("./test.dasset");

await assets.load();

const test = assets.require("/a.js");

if (test === "hello world :)") {
  console.log("ok: ", test);
  Deno.exit(0);
} else {
  console.log("fail: ", test);
  Deno.exit(1);
}
