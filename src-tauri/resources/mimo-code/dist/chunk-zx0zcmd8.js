// @bun
import {
  init_src,
  init_strip_ansi,
  root_default,
  stripAnsi,
  use_app_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/staticRender.tsx
import { PassThrough } from "stream";
function RenderOnceAndExit({
  children
}) {
  const { exit } = use_app_default();
  import_react.useLayoutEffect(() => {
    const timer = setTimeout(exit, 0);
    return () => clearTimeout(timer);
  }, [exit]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children
  }, undefined, false, undefined, this);
}
function extractFirstFrame(output) {
  const startIndex = output.indexOf(SYNC_START);
  if (startIndex === -1)
    return output;
  const contentStart = startIndex + SYNC_START.length;
  const endIndex = output.indexOf(SYNC_END, contentStart);
  if (endIndex === -1)
    return output;
  return output.slice(contentStart, endIndex);
}
async function renderToAnsiString(node, columns) {
  let output = "";
  const stream = new PassThrough;
  if (columns !== undefined) {
    stream.columns = columns;
  }
  stream.on("data", (chunk) => {
    output += chunk.toString();
  });
  const instance = await root_default(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(RenderOnceAndExit, {
    children: node
  }, undefined, false, undefined, this), {
    stdout: stream,
    patchConsole: false
  });
  await instance.waitUntilExit();
  return extractFirstFrame(output);
}
async function renderToString(node, columns) {
  const output = await renderToAnsiString(node, columns);
  return stripAnsi(output);
}
var import_react, jsx_dev_runtime, SYNC_START = "\x1B[?2026h", SYNC_END = "\x1B[?2026l";
var init_staticRender = __esm(() => {
  init_strip_ansi();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { renderToAnsiString, renderToString, init_staticRender };
