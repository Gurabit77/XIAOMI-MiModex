// @bun
import {
  exports_external,
  init_external
} from "./chunk-d7886r6a.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/zod@4.3.6/node_modules/zod/v4/classic/index.js
var classic_default;
var init_classic = __esm(() => {
  init_external();
  init_external();
  classic_default = exports_external;
});

// node_modules/.bun/zod@4.3.6/node_modules/zod/v4/index.js
var v4_default;
var init_v4 = __esm(() => {
  init_classic();
  init_classic();
  v4_default = classic_default;
});

export { v4_default, init_v4 };
