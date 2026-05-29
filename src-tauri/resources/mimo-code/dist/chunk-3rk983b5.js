// @bun
import {
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/context/modalContext.tsx
function useIsInsideModal() {
  return import_react.useContext(ModalContext) !== null;
}
function useModalOrTerminalSize(fallback) {
  const ctx = import_react.useContext(ModalContext);
  return ctx ? { rows: ctx.rows, columns: ctx.columns } : fallback;
}
var import_react, ModalContext;
var init_modalContext = __esm(() => {
  import_react = __toESM(require_react(), 1);
  ModalContext = import_react.createContext(null);
});

export { ModalContext, useIsInsideModal, useModalOrTerminalSize, init_modalContext };
