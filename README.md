# deno assets module

bundle assets(images/sounds/nodejs modules) into one zip file and read it as modules

# example

### create assets

- a.png
- b.wav
- c.js
  ```js
  // c.js
  const a = require("./d.js");
  module.exports = "hello " + a;
  ```
- d.js
  ```js
  // d.js
  module.exports = "world";
  ```

### compression assets

compress assets into `zip` format

- test.zip
  - a.png
  - b.wav
  - c.js
  - d.js

rename `test.zip` to `test.dasset`

### read bundle as modules

```typescript
import { AssetsModule } from "./mod.ts";
const mod = new AssetsModule("./test.dasset");
await mod.load();

console.log(mod.require("./a.png")); // Uint8Array
console.log(mod.require("./b.wav")); // Uint8Array
console.log(mod.require("./c.js")); // hello world
console.log(mod.require("./d.js")); // world
```
