// @bun
import {
  getFeatureValue_CACHED_WITH_REFRESH,
  init_growthbook
} from "./chunk-1ghcng4e.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";

// src/bridge/pollConfig.ts
init_v4();
init_growthbook();
init_lazySchema();

// src/bridge/pollConfigDefaults.ts
var POLL_INTERVAL_MS_NOT_AT_CAPACITY = 2000;
var POLL_INTERVAL_MS_AT_CAPACITY = 600000;
var MULTISESSION_POLL_INTERVAL_MS_NOT_AT_CAPACITY = POLL_INTERVAL_MS_NOT_AT_CAPACITY;
var MULTISESSION_POLL_INTERVAL_MS_PARTIAL_CAPACITY = POLL_INTERVAL_MS_NOT_AT_CAPACITY;
var MULTISESSION_POLL_INTERVAL_MS_AT_CAPACITY = POLL_INTERVAL_MS_AT_CAPACITY;
var DEFAULT_POLL_CONFIG = {
  poll_interval_ms_not_at_capacity: POLL_INTERVAL_MS_NOT_AT_CAPACITY,
  poll_interval_ms_at_capacity: POLL_INTERVAL_MS_AT_CAPACITY,
  non_exclusive_heartbeat_interval_ms: 0,
  multisession_poll_interval_ms_not_at_capacity: MULTISESSION_POLL_INTERVAL_MS_NOT_AT_CAPACITY,
  multisession_poll_interval_ms_partial_capacity: MULTISESSION_POLL_INTERVAL_MS_PARTIAL_CAPACITY,
  multisession_poll_interval_ms_at_capacity: MULTISESSION_POLL_INTERVAL_MS_AT_CAPACITY,
  reclaim_older_than_ms: 5000,
  session_keepalive_interval_v2_ms: 120000
};

// src/bridge/pollConfig.ts
var zeroOrAtLeast100 = {
  message: "must be 0 (disabled) or \u2265100ms"
};
var pollIntervalConfigSchema = lazySchema(() => exports_external.object({
  poll_interval_ms_not_at_capacity: exports_external.number().int().min(100),
  poll_interval_ms_at_capacity: exports_external.number().int().refine((v) => v === 0 || v >= 100, zeroOrAtLeast100),
  non_exclusive_heartbeat_interval_ms: exports_external.number().int().min(0).default(0),
  multisession_poll_interval_ms_not_at_capacity: exports_external.number().int().min(100).default(DEFAULT_POLL_CONFIG.multisession_poll_interval_ms_not_at_capacity),
  multisession_poll_interval_ms_partial_capacity: exports_external.number().int().min(100).default(DEFAULT_POLL_CONFIG.multisession_poll_interval_ms_partial_capacity),
  multisession_poll_interval_ms_at_capacity: exports_external.number().int().refine((v) => v === 0 || v >= 100, zeroOrAtLeast100).default(DEFAULT_POLL_CONFIG.multisession_poll_interval_ms_at_capacity),
  reclaim_older_than_ms: exports_external.number().int().min(1).default(5000),
  session_keepalive_interval_v2_ms: exports_external.number().int().min(0).default(120000)
}).refine((cfg) => cfg.non_exclusive_heartbeat_interval_ms > 0 || cfg.poll_interval_ms_at_capacity > 0, {
  message: "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or poll_interval_ms_at_capacity > 0"
}).refine((cfg) => cfg.non_exclusive_heartbeat_interval_ms > 0 || cfg.multisession_poll_interval_ms_at_capacity > 0, {
  message: "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0"
}));
function getPollIntervalConfig() {
  const raw = getFeatureValue_CACHED_WITH_REFRESH("tengu_bridge_poll_interval_config", DEFAULT_POLL_CONFIG, 5 * 60 * 1000);
  const parsed = pollIntervalConfigSchema().safeParse(raw);
  return parsed.success ? parsed.data : DEFAULT_POLL_CONFIG;
}

export { DEFAULT_POLL_CONFIG, getPollIntervalConfig };
