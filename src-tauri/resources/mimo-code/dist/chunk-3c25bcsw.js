// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/mcp/normalization.ts
function normalizeNameForMCP(name) {
  let normalized = name.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (name.startsWith(CLAUDEAI_SERVER_PREFIX)) {
    normalized = normalized.replace(/_+/g, "_").replace(/^_|_$/g, "");
  }
  return normalized;
}
var CLAUDEAI_SERVER_PREFIX = "claude.ai ";
var init_normalization = () => {};

export { normalizeNameForMCP, init_normalization };
