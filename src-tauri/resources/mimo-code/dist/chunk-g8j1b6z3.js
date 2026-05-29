// @bun
import {
  init_bridgeEnabled,
  isEnvLessBridgeEnabled
} from "./chunk-ybaawhyf.js";
import {
  init_semver,
  lt
} from "./chunk-ps49ymvj.js";
import {
  getFeatureValue_DEPRECATED,
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
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/bridge/envLessBridgeConfig.ts
async function getEnvLessBridgeConfig() {
  const raw = await getFeatureValue_DEPRECATED("tengu_bridge_repl_v2_config", DEFAULT_ENV_LESS_BRIDGE_CONFIG);
  const parsed = envLessBridgeConfigSchema().safeParse(raw);
  return parsed.success ? parsed.data : DEFAULT_ENV_LESS_BRIDGE_CONFIG;
}
async function checkEnvLessBridgeMinVersion() {
  const cfg = await getEnvLessBridgeConfig();
  if (cfg.min_version && lt("1.0.0", cfg.min_version)) {
    return `Your version of MiMo Code (${"1.0.0"}) is too old for Remote Control.
Version ${cfg.min_version} or higher is required. Run \`claude update\` to update.`;
  }
  return null;
}
async function shouldShowAppUpgradeMessage() {
  if (!isEnvLessBridgeEnabled())
    return false;
  const cfg = await getEnvLessBridgeConfig();
  return cfg.should_show_app_upgrade_message;
}
var DEFAULT_ENV_LESS_BRIDGE_CONFIG, envLessBridgeConfigSchema;
var init_envLessBridgeConfig = __esm(() => {
  init_v4();
  init_growthbook();
  init_lazySchema();
  init_semver();
  init_bridgeEnabled();
  DEFAULT_ENV_LESS_BRIDGE_CONFIG = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    min_version: "0.0.0",
    should_show_app_upgrade_message: false
  };
  envLessBridgeConfigSchema = lazySchema(() => exports_external.object({
    init_retry_max_attempts: exports_external.number().int().min(1).max(10).default(3),
    init_retry_base_delay_ms: exports_external.number().int().min(100).default(500),
    init_retry_jitter_fraction: exports_external.number().min(0).max(1).default(0.25),
    init_retry_max_delay_ms: exports_external.number().int().min(500).default(4000),
    http_timeout_ms: exports_external.number().int().min(2000).default(1e4),
    uuid_dedup_buffer_size: exports_external.number().int().min(100).max(50000).default(2000),
    heartbeat_interval_ms: exports_external.number().int().min(5000).max(30000).default(20000),
    heartbeat_jitter_fraction: exports_external.number().min(0).max(0.5).default(0.1),
    token_refresh_buffer_ms: exports_external.number().int().min(30000).max(1800000).default(300000),
    teardown_archive_timeout_ms: exports_external.number().int().min(500).max(2000).default(1500),
    connect_timeout_ms: exports_external.number().int().min(5000).max(60000).default(15000),
    min_version: exports_external.string().refine((v) => {
      try {
        lt(v, "0.0.0");
        return true;
      } catch {
        return false;
      }
    }).default("0.0.0"),
    should_show_app_upgrade_message: exports_external.boolean().default(false)
  }));
});

export { DEFAULT_ENV_LESS_BRIDGE_CONFIG, getEnvLessBridgeConfig, checkEnvLessBridgeMinVersion, shouldShowAppUpgradeMessage, init_envLessBridgeConfig };
