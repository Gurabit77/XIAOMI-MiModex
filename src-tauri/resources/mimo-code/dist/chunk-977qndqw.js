// @bun
import {
  Login,
  init_login
} from "./chunk-tymxn0z2.js";
import {
  init_extra_usage_core,
  runExtraUsage
} from "./chunk-f8g6t6n2.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/extra-usage/extra-usage.tsx
async function call(onDone, context) {
  const result = await runExtraUsage();
  if (result.type === "message") {
    onDone(result.value);
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Login, {
    startingMessage: "Starting new login following /extra-usage. Exit with Ctrl-C to use existing account.",
    onDone: (success) => {
      context.onChangeAPIKey();
      onDone(success ? "Login successful" : "Login interrupted");
    }
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime;
var init_extra_usage = __esm(() => {
  init_login();
  init_extra_usage_core();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { call, init_extra_usage };
