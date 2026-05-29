// @bun
import {
  cacheKeys,
  init_fileStateCache
} from "./chunk-7fht54sw.js";
import"./chunk-jdq8jgyg.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/files/files.ts
import { relative } from "path";
async function call(_args, context) {
  const files = context.readFileState ? cacheKeys(context.readFileState) : [];
  if (files.length === 0) {
    return { type: "text", value: "No files in context" };
  }
  const fileList = files.map((file) => relative(getCwd(), file)).join(`
`);
  return { type: "text", value: `Files in context:
${fileList}` };
}
var init_files = __esm(() => {
  init_cwd();
  init_fileStateCache();
});
init_files();

export {
  call
};
