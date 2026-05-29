// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/rewind/rewind.ts
async function call(_args, context) {
  if (context.openMessageSelector) {
    context.openMessageSelector();
  }
  return { type: "skip" };
}
var init_rewind = () => {};
init_rewind();

export {
  call
};
