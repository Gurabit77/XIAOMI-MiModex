// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/lazySchema.ts
function lazySchema(factory) {
  let cached;
  return () => cached ??= factory();
}
var init_lazySchema = () => {};

export { lazySchema, init_lazySchema };
