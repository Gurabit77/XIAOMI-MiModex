// @bun
import {
  DEFAULT_MANIFEST_VERSION,
  EXCLUDE_PATTERNS,
  LATEST_MANIFEST_VERSION,
  MANIFEST_SCHEMAS,
  MANIFEST_SCHEMAS_LOOSE,
  McpbManifestSchema,
  McpbManifestSchema1 as McpbManifestSchema2,
  McpbManifestSchema2 as McpbManifestSchema3,
  McpbManifestSchema3 as McpbManifestSchema4,
  buildManifest,
  cleanMcpb,
  createMcpConfig,
  exports_0_1,
  exports_0_2,
  exports_0_3,
  exports_0_4,
  extractSignatureBlock,
  getAllFiles,
  getAllFilesWithCount,
  getDefaultAuthorEmail,
  getDefaultAuthorInfo,
  getDefaultAuthorName,
  getDefaultAuthorUrl,
  getDefaultBasicInfo,
  getDefaultEntryPoint,
  getDefaultOptionalFields,
  getDefaultRepositoryUrl,
  getDefaultServerConfig,
  initExtension,
  init_0_1,
  init_0_2,
  init_0_3,
  init_0_4,
  init_constants,
  init_files,
  init_init,
  init_pack,
  init_sign,
  init_unpack,
  init_validate,
  packExtension,
  printNextSteps,
  promptAuthorInfo,
  promptBasicInfo,
  promptCompatibility,
  promptLocalization,
  promptLongDescription,
  promptOptionalFields,
  promptPrompts,
  promptServerConfig,
  promptTools,
  promptUrls,
  promptUserConfig,
  promptVisualAssets,
  readMcpbIgnorePatterns,
  readPackageJson,
  shouldExclude,
  signMcpbFile,
  unpackExtension,
  unsignMcpbFile,
  validateManifest,
  verifyCertificateChain,
  verifyMcpbFile
} from "./chunk-pvhp9k3h.js";
import"./chunk-vyjeh50y.js";
import {
  exports_external,
  init_zod,
  unionType
} from "./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-7wm5s02e.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@anthropic-ai+mcpb@2.1.2+144f69348538ea2c/node_modules/@anthropic-ai/mcpb/dist/schemas/any.js
var exports_any = {};
__export(exports_any, {
  McpbManifestSchema: () => McpbManifestSchema5
});
var McpbManifestSchema5;
var init_any = __esm(() => {
  init_zod();
  init_0_1();
  init_0_2();
  init_0_3();
  init_0_4();
  McpbManifestSchema5 = unionType([
    McpbManifestSchema,
    McpbManifestSchema2,
    McpbManifestSchema3,
    McpbManifestSchema4
  ]);
});

// node_modules/.bun/@anthropic-ai+mcpb@2.1.2+144f69348538ea2c/node_modules/@anthropic-ai/mcpb/dist/schemas/index.js
var VERSIONED_MANIFEST_SCHEMAS;
var init_schemas = __esm(() => {
  init_0_1();
  init_0_2();
  init_0_3();
  init_0_4();
  init_0_1();
  init_0_2();
  init_0_3();
  init_0_4();
  init_any();
  VERSIONED_MANIFEST_SCHEMAS = {
    "0.1": McpbManifestSchema,
    "0.2": McpbManifestSchema2,
    "0.3": McpbManifestSchema3,
    "0.4": McpbManifestSchema4
  };
});

// node_modules/.bun/@anthropic-ai+mcpb@2.1.2+144f69348538ea2c/node_modules/@anthropic-ai/mcpb/dist/shared/common.js
var McpbUserConfigValuesSchema, McpbSignatureInfoSchema;
var init_common = __esm(() => {
  init_zod();
  McpbUserConfigValuesSchema = exports_external.record(exports_external.string(), exports_external.union([exports_external.string(), exports_external.number(), exports_external.boolean(), exports_external.array(exports_external.string())]));
  McpbSignatureInfoSchema = exports_external.strictObject({
    status: exports_external.enum(["signed", "unsigned", "self-signed"]),
    publisher: exports_external.string().optional(),
    issuer: exports_external.string().optional(),
    valid_from: exports_external.string().optional(),
    valid_to: exports_external.string().optional(),
    fingerprint: exports_external.string().optional()
  });
});

// node_modules/.bun/@anthropic-ai+mcpb@2.1.2+144f69348538ea2c/node_modules/@anthropic-ai/mcpb/dist/shared/config.js
function replaceVariables(value, variables) {
  if (typeof value === "string") {
    let result = value;
    for (const [key, replacement] of Object.entries(variables)) {
      const pattern = new RegExp(`\\$\\{${key}\\}`, "g");
      if (result.match(pattern)) {
        if (Array.isArray(replacement)) {
          console.warn(`Cannot replace ${key} with array value in string context: "${value}"`, { key, replacement });
        } else {
          result = result.replace(pattern, replacement);
        }
      }
    }
    return result;
  } else if (Array.isArray(value)) {
    const result = [];
    for (const item of value) {
      if (typeof item === "string" && item.match(/^\$\{user_config\.[^}]+\}$/)) {
        const varName = item.match(/^\$\{([^}]+)\}$/)?.[1];
        if (varName && variables[varName]) {
          const replacement = variables[varName];
          if (Array.isArray(replacement)) {
            result.push(...replacement);
          } else {
            result.push(replacement);
          }
        } else {
          result.push(item);
        }
      } else {
        result.push(replaceVariables(item, variables));
      }
    }
    return result;
  } else if (value && typeof value === "object") {
    const result = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = replaceVariables(val, variables);
    }
    return result;
  }
  return value;
}
async function getMcpConfigForManifest(options) {
  const { manifest, extensionPath, systemDirs, userConfig, pathSeparator, logger } = options;
  const baseConfig = manifest.server?.mcp_config;
  if (!baseConfig) {
    return;
  }
  let result = {
    ...baseConfig
  };
  if (baseConfig.platform_overrides) {
    if (process.platform in baseConfig.platform_overrides) {
      const platformConfig = baseConfig.platform_overrides[process.platform];
      result.command = platformConfig.command || result.command;
      result.args = platformConfig.args || result.args;
      result.env = platformConfig.env || result.env;
    }
  }
  if (hasRequiredConfigMissing({ manifest, userConfig })) {
    logger?.warn(`Extension ${manifest.name} has missing required configuration, skipping MCP config`);
    return;
  }
  const variables = {
    __dirname: extensionPath,
    pathSeparator,
    "/": pathSeparator,
    ...systemDirs
  };
  const mergedConfig = {};
  if (manifest.user_config) {
    for (const [key, configOption] of Object.entries(manifest.user_config)) {
      if (configOption.default !== undefined) {
        mergedConfig[key] = configOption.default;
      }
    }
  }
  if (userConfig) {
    Object.assign(mergedConfig, userConfig);
  }
  for (const [key, value] of Object.entries(mergedConfig)) {
    const userConfigKey = `user_config.${key}`;
    if (Array.isArray(value)) {
      variables[userConfigKey] = value.map(String);
    } else if (typeof value === "boolean") {
      variables[userConfigKey] = value ? "true" : "false";
    } else {
      variables[userConfigKey] = String(value);
    }
  }
  result = replaceVariables(result, variables);
  return result;
}
function isInvalidSingleValue(value) {
  return value === undefined || value === null || value === "";
}
function hasRequiredConfigMissing({ manifest, userConfig }) {
  if (!manifest.user_config) {
    return false;
  }
  const config = userConfig || {};
  for (const [key, configOption] of Object.entries(manifest.user_config)) {
    if (configOption.required) {
      const value = config[key];
      if (isInvalidSingleValue(value) || Array.isArray(value) && (value.length === 0 || value.some(isInvalidSingleValue))) {
        return true;
      }
    }
  }
  return false;
}
var init_config = () => {};

// node_modules/.bun/@anthropic-ai+mcpb@2.1.2+144f69348538ea2c/node_modules/@anthropic-ai/mcpb/dist/types.js
var init_types = () => {};

// node_modules/.bun/@anthropic-ai+mcpb@2.1.2+144f69348538ea2c/node_modules/@anthropic-ai/mcpb/dist/index.js
var init_dist = __esm(() => {
  init_init();
  init_pack();
  init_unpack();
  init_files();
  init_sign();
  init_validate();
  init_schemas();
  init_common();
  init_config();
  init_constants();
  init_types();
});
init_dist();

export {
  verifyMcpbFile,
  verifyCertificateChain,
  validateManifest,
  exports_any as vAny,
  exports_0_4 as v0_4,
  exports_0_3 as v0_3,
  exports_0_2 as v0_2,
  exports_0_1 as v0_1,
  unsignMcpbFile,
  unpackExtension,
  signMcpbFile,
  shouldExclude,
  replaceVariables,
  readPackageJson,
  readMcpbIgnorePatterns,
  promptVisualAssets,
  promptUserConfig,
  promptUrls,
  promptTools,
  promptServerConfig,
  promptPrompts,
  promptOptionalFields,
  promptLongDescription,
  promptLocalization,
  promptCompatibility,
  promptBasicInfo,
  promptAuthorInfo,
  printNextSteps,
  packExtension,
  initExtension,
  hasRequiredConfigMissing,
  getMcpConfigForManifest,
  getDefaultServerConfig,
  getDefaultRepositoryUrl,
  getDefaultOptionalFields,
  getDefaultEntryPoint,
  getDefaultBasicInfo,
  getDefaultAuthorUrl,
  getDefaultAuthorName,
  getDefaultAuthorInfo,
  getDefaultAuthorEmail,
  getAllFilesWithCount,
  getAllFiles,
  extractSignatureBlock,
  createMcpConfig,
  cleanMcpb,
  buildManifest,
  VERSIONED_MANIFEST_SCHEMAS,
  McpbUserConfigValuesSchema,
  McpbSignatureInfoSchema,
  MANIFEST_SCHEMAS_LOOSE,
  MANIFEST_SCHEMAS,
  LATEST_MANIFEST_VERSION,
  EXCLUDE_PATTERNS,
  DEFAULT_MANIFEST_VERSION
};
