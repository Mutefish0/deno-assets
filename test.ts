import { AssetsModule } from "./mod.ts";

const assets1 = new AssetsModule();

await assets1.load("./test.dasset");

const test1 = assets1.require("/a.js");

const assets2 = new AssetsModule();

const buff = Deno.readFileSync("./test.dasset");

await assets2.load(buff);

const test2 = assets2.require("/a.js");

if (test1 === "hello world :)" && test2 === "hello world :)") {
  console.log("ok: ", test1, test2);
  Deno.exit(0);
} else {
  console.log("fail: ", test1, test2);
  Deno.exit(1);
}
