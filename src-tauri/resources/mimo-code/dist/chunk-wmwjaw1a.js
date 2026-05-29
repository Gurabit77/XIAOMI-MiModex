// @bun
import {
  init_AppState,
  useAppState
} from "./chunk-ktw919wt.js";
import {
  getDefaultMainLoopModelSetting,
  init_growthbook,
  init_model,
  onGrowthBookRefresh,
  parseUserSpecifiedModel
} from "./chunk-1ghcng4e.js";
import {
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/hooks/useMainLoopModel.ts
function useMainLoopModel() {
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const mainLoopModelForSession = useAppState((s) => s.mainLoopModelForSession);
  const [, forceRerender] = import_react.useReducer((x) => x + 1, 0);
  import_react.useEffect(() => onGrowthBookRefresh(forceRerender), []);
  const model = parseUserSpecifiedModel(mainLoopModelForSession ?? mainLoopModel ?? getDefaultMainLoopModelSetting());
  return model;
}
var import_react;
var init_useMainLoopModel = __esm(() => {
  init_growthbook();
  init_AppState();
  init_model();
  import_react = __toESM(require_react(), 1);
});

export { useMainLoopModel, init_useMainLoopModel };
