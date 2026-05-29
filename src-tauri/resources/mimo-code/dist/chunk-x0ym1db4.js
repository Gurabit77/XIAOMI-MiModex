// @bun
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/context/fpsMetrics.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var FpsMetricsContext = import_react.createContext(undefined);
function FpsMetricsProvider({
  getFpsMetrics,
  children
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(FpsMetricsContext.Provider, {
    value: getFpsMetrics,
    children
  }, undefined, false, undefined, this);
}
function useFpsMetrics() {
  return import_react.useContext(FpsMetricsContext);
}

export { FpsMetricsProvider, useFpsMetrics };
