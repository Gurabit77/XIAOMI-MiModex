// @bun
import {
  init_AppState,
  init_permissionSetup,
  useAppState,
  useAppStateStore,
  useSetAppState,
  verifyAutoModeGateAccess
} from "./chunk-ktw919wt.js";
import {
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_errors,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  getIsRemoteMode,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/permissions/bypassPermissionsKillswitch.ts
async function checkAndDisableAutoModeIfNeeded(toolPermissionContext, setAppState, fastMode) {
  if (true) {
    if (autoModeCheckRan) {
      return;
    }
    autoModeCheckRan = true;
    const { updateContext, notification } = await verifyAutoModeGateAccess(toolPermissionContext, fastMode);
    setAppState((prev) => {
      const nextCtx = updateContext(prev.toolPermissionContext);
      const newState = nextCtx === prev.toolPermissionContext ? prev : { ...prev, toolPermissionContext: nextCtx };
      if (!notification)
        return newState;
      return {
        ...newState,
        notifications: {
          ...newState.notifications,
          queue: [
            ...newState.notifications.queue,
            {
              key: "auto-mode-gate-notification",
              text: notification,
              color: "warning",
              priority: "high"
            }
          ]
        }
      };
    });
  }
}
function resetAutoModeGateCheck() {
  autoModeCheckRan = false;
}
function useKickOffCheckAndDisableAutoModeIfNeeded() {
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const mainLoopModelForSession = useAppState((s) => s.mainLoopModelForSession);
  const fastMode = useAppState((s) => s.fastMode);
  const setAppState = useSetAppState();
  const store = useAppStateStore();
  const isFirstRunRef = import_react.useRef(true);
  import_react.useEffect(() => {
    if (getIsRemoteMode())
      return;
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
    } else {
      resetAutoModeGateCheck();
    }
    checkAndDisableAutoModeIfNeeded(store.getState().toolPermissionContext, setAppState, fastMode).catch((error) => {
      logError(new Error("Auto mode gate check failed", { cause: toError(error) }));
    });
  }, [mainLoopModel, mainLoopModelForSession, fastMode]);
}
var import_react, autoModeCheckRan = false;
var init_bypassPermissionsKillswitch = __esm(() => {
  init_errors();
  init_log();
  init_state();
  init_AppState();
  init_permissionSetup();
  import_react = __toESM(require_react(), 1);
});

export { checkAndDisableAutoModeIfNeeded, resetAutoModeGateCheck, useKickOffCheckAndDisableAutoModeIfNeeded, init_bypassPermissionsKillswitch };
