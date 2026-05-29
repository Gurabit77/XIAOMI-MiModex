// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/types/permissions.ts
var EXTERNAL_PERMISSION_MODES, INTERNAL_PERMISSION_MODES, PERMISSION_MODES;
var init_permissions = __esm(() => {
  EXTERNAL_PERMISSION_MODES = [
    "acceptEdits",
    "bypassPermissions",
    "default",
    "dontAsk",
    "plan"
  ];
  INTERNAL_PERMISSION_MODES = [
    ...EXTERNAL_PERMISSION_MODES,
    "auto"
  ];
  PERMISSION_MODES = INTERNAL_PERMISSION_MODES;
});

export { EXTERNAL_PERMISSION_MODES, INTERNAL_PERMISSION_MODES, PERMISSION_MODES, init_permissions };
