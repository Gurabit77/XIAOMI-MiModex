// @bun
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/utils/protectedNamespace.ts
var exports_protectedNamespace = {};
__export(exports_protectedNamespace, {
  checkProtectedNamespace: () => checkProtectedNamespace
});
var checkProtectedNamespace = () => false;
var init_protectedNamespace = () => {};

// src/utils/envUtils.ts
import { homedir } from "os";
import { join } from "path";
function getTeamsDir() {
  return join(getClaudeConfigHomeDir(), "teams");
}
function hasNodeOption(flag) {
  const nodeOptions = process.env.NODE_OPTIONS;
  if (!nodeOptions) {
    return false;
  }
  return nodeOptions.split(/\s+/).includes(flag);
}
function isEnvTruthy(envVar) {
  if (!envVar)
    return false;
  if (typeof envVar === "boolean")
    return envVar;
  const normalizedValue = envVar.toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(normalizedValue);
}
function isEnvDefinedFalsy(envVar) {
  if (envVar === undefined)
    return false;
  if (typeof envVar === "boolean")
    return !envVar;
  if (!envVar)
    return false;
  const normalizedValue = envVar.toLowerCase().trim();
  return ["0", "false", "no", "off"].includes(normalizedValue);
}
function isBareMode() {
  return isEnvTruthy(process.env.CLAUDE_CODE_SIMPLE) || process.argv.includes("--bare");
}
function parseEnvVars(rawEnvArgs) {
  const parsedEnv = {};
  if (rawEnvArgs) {
    for (const envStr of rawEnvArgs) {
      const [key, ...valueParts] = envStr.split("=");
      if (!key || valueParts.length === 0) {
        throw new Error(`Invalid environment variable format: ${envStr}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
      }
      parsedEnv[key] = valueParts.join("=");
    }
  }
  return parsedEnv;
}
function getAWSRegion() {
  return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1";
}
function getDefaultVertexRegion() {
  return process.env.CLOUD_ML_REGION || "us-east5";
}
function shouldMaintainProjectWorkingDir() {
  return isEnvTruthy(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function isRunningOnHomespace() {
  return process.env.USER_TYPE === "ant" && isEnvTruthy(process.env.COO_RUNNING_ON_HOMESPACE);
}
function isInProtectedNamespace() {
  if (process.env.USER_TYPE === "ant") {
    return (init_protectedNamespace(), __toCommonJS(exports_protectedNamespace)).checkProtectedNamespace();
  }
  return false;
}
function getVertexRegionForModel(model) {
  if (model) {
    const match = VERTEX_REGION_OVERRIDES.find(([prefix]) => model.startsWith(prefix));
    if (match) {
      return process.env[match[1]] || getDefaultVertexRegion();
    }
  }
  return getDefaultVertexRegion();
}
var getClaudeConfigHomeDir, VERTEX_REGION_OVERRIDES;
var init_envUtils = __esm(() => {
  init_memoize();
  getClaudeConfigHomeDir = memoize_default(() => {
    return (process.env.CLAUDE_CONFIG_DIR ?? join(homedir(), ".claude")).normalize("NFC");
  }, () => process.env.CLAUDE_CONFIG_DIR);
  VERTEX_REGION_OVERRIDES = [
    ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
    ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
    ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
    ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
    ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"],
    ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"],
    ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
    ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
    ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"]
  ];
});

export { getClaudeConfigHomeDir, getTeamsDir, hasNodeOption, isEnvTruthy, isEnvDefinedFalsy, isBareMode, parseEnvVars, getAWSRegion, getDefaultVertexRegion, shouldMaintainProjectWorkingDir, isRunningOnHomespace, isInProtectedNamespace, getVertexRegionForModel, init_envUtils };
