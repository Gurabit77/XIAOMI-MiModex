// @bun
import {
  init_dist_node,
  v4_default
} from "./chunk-4dh4bzhg.js";
import {
  require_dist,
  require_dist1 as require_dist2
} from "./chunk-k3s4yk22.js";
import {
  require_jws
} from "./chunk-nq0fxyxh.js";
import {
  require_semver
} from "./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import {
  require_ms,
  require_src
} from "./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/constants.js
var SDK_VERSION = `4.13.1`, DeveloperSignOnClientId = "04b07795-8ddb-461a-bbee-02f9e1bf7b46", DefaultTenantId = "common", AzureAuthorityHosts, DefaultAuthorityHost, DefaultAuthority = "login.microsoftonline.com", ALL_TENANTS, CACHE_CAE_SUFFIX = "cae", CACHE_NON_CAE_SUFFIX = "nocae", DEFAULT_TOKEN_CACHE_NAME = "msal.cache";
var init_constants = __esm(() => {
  (function(AzureAuthorityHosts2) {
    AzureAuthorityHosts2["AzureChina"] = "https://login.chinacloudapi.cn";
    AzureAuthorityHosts2["AzureGermany"] = "https://login.microsoftonline.de";
    AzureAuthorityHosts2["AzureGovernment"] = "https://login.microsoftonline.us";
    AzureAuthorityHosts2["AzurePublicCloud"] = "https://login.microsoftonline.com";
  })(AzureAuthorityHosts || (AzureAuthorityHosts = {}));
  DefaultAuthorityHost = AzureAuthorityHosts.AzurePublicCloud;
  ALL_TENANTS = ["*"];
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/msal/nodeFlows/msalPlugins.js
function hasVSCodePlugin() {
  return vsCodeAuthRecordPath !== undefined && vsCodeBrokerInfo !== undefined;
}
function generatePluginConfiguration(options) {
  const config = {
    cache: {},
    broker: {
      ...options.brokerOptions,
      isEnabled: options.brokerOptions?.enabled ?? false,
      enableMsaPassthrough: options.brokerOptions?.legacyEnableMsaPassthrough ?? false
    }
  };
  if (options.tokenCachePersistenceOptions?.enabled) {
    if (persistenceProvider === undefined) {
      throw new Error([
        "Persistent token caching was requested, but no persistence provider was configured.",
        "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)",
        "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling",
        "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`."
      ].join(" "));
    }
    const cacheBaseName = options.tokenCachePersistenceOptions.name || DEFAULT_TOKEN_CACHE_NAME;
    config.cache.cachePlugin = persistenceProvider({
      name: `${cacheBaseName}.${CACHE_NON_CAE_SUFFIX}`,
      ...options.tokenCachePersistenceOptions
    });
    config.cache.cachePluginCae = persistenceProvider({
      name: `${cacheBaseName}.${CACHE_CAE_SUFFIX}`,
      ...options.tokenCachePersistenceOptions
    });
  }
  if (options.brokerOptions?.enabled) {
    config.broker.nativeBrokerPlugin = getBrokerPlugin(options.isVSCodeCredential || false);
  }
  return config;
}
function getBrokerPlugin(isVSCodePlugin) {
  const { credentialName, packageName, pluginVar, brokerInfo } = brokerConfig[isVSCodePlugin ? "vsCode" : "native"];
  if (brokerInfo === undefined) {
    throw new Error(brokerErrorTemplates.missing(credentialName, packageName, pluginVar));
  }
  if (brokerInfo.broker.isBrokerAvailable === false) {
    throw new Error(brokerErrorTemplates.unavailable(credentialName, packageName));
  }
  return brokerInfo.broker;
}
var persistenceProvider = undefined, msalNodeFlowCacheControl, nativeBrokerInfo = undefined, vsCodeAuthRecordPath = undefined, vsCodeBrokerInfo = undefined, msalNodeFlowNativeBrokerControl, msalNodeFlowVSCodeCredentialControl, brokerErrorTemplates, brokerConfig, msalPlugins;
var init_msalPlugins = __esm(() => {
  init_constants();
  msalNodeFlowCacheControl = {
    setPersistence(pluginProvider) {
      persistenceProvider = pluginProvider;
    }
  };
  msalNodeFlowNativeBrokerControl = {
    setNativeBroker(broker) {
      nativeBrokerInfo = {
        broker
      };
    }
  };
  msalNodeFlowVSCodeCredentialControl = {
    setVSCodeAuthRecordPath(path) {
      vsCodeAuthRecordPath = path;
    },
    setVSCodeBroker(broker) {
      vsCodeBrokerInfo = {
        broker
      };
    }
  };
  brokerErrorTemplates = {
    missing: (credentialName, packageName, pluginVar) => [
      `${credentialName} was requested, but no plugin was configured or no authentication record was found.`,
      `You must install the ${packageName} plugin package (npm install --save ${packageName})`,
      "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling",
      `useIdentityPlugin(${pluginVar}) before using enableBroker.`
    ].join(" "),
    unavailable: (credentialName, packageName) => [
      `${credentialName} was requested, and the plugin is configured, but the broker is unavailable.`,
      `Ensure the ${credentialName} plugin is properly installed and configured.`,
      "Check for missing native dependencies and ensure the package is properly installed.",
      `See the README for prerequisites on installing and using ${packageName}.`
    ].join(" ")
  };
  brokerConfig = {
    vsCode: {
      credentialName: "Visual Studio Code Credential",
      packageName: "@azure/identity-vscode",
      pluginVar: "vsCodePlugin",
      get brokerInfo() {
        return vsCodeBrokerInfo;
      }
    },
    native: {
      credentialName: "Broker for WAM",
      packageName: "@azure/identity-broker",
      pluginVar: "nativeBrokerPlugin",
      get brokerInfo() {
        return nativeBrokerInfo;
      }
    }
  };
  msalPlugins = {
    generatePluginConfiguration
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/plugins/consumer.js
function useIdentityPlugin(plugin) {
  plugin(pluginContext);
}
var pluginContext;
var init_consumer = __esm(() => {
  init_msalPlugins();
  pluginContext = {
    cachePluginControl: msalNodeFlowCacheControl,
    nativeBrokerPluginControl: msalNodeFlowNativeBrokerControl,
    vsCodeCredentialControl: msalNodeFlowVSCodeCredentialControl
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/errors.js
function isErrorResponse(errorResponse) {
  return errorResponse && typeof errorResponse.error === "string" && typeof errorResponse.error_description === "string";
}
function convertOAuthErrorResponseToErrorResponse(errorBody) {
  return {
    error: errorBody.error,
    errorDescription: errorBody.error_description,
    correlationId: errorBody.correlation_id,
    errorCodes: errorBody.error_codes,
    timestamp: errorBody.timestamp,
    traceId: errorBody.trace_id
  };
}
var CredentialUnavailableErrorName = "CredentialUnavailableError", CredentialUnavailableError, AuthenticationErrorName = "AuthenticationError", AuthenticationError, AggregateAuthenticationErrorName = "AggregateAuthenticationError", AggregateAuthenticationError, AuthenticationRequiredError;
var init_errors = __esm(() => {
  CredentialUnavailableError = class CredentialUnavailableError extends Error {
    constructor(message, options) {
      super(message, options);
      this.name = CredentialUnavailableErrorName;
    }
  };
  AuthenticationError = class AuthenticationError extends Error {
    statusCode;
    errorResponse;
    constructor(statusCode, errorBody, options) {
      let errorResponse = {
        error: "unknown",
        errorDescription: "An unknown error occurred and no additional details are available."
      };
      if (isErrorResponse(errorBody)) {
        errorResponse = convertOAuthErrorResponseToErrorResponse(errorBody);
      } else if (typeof errorBody === "string") {
        try {
          const oauthErrorResponse = JSON.parse(errorBody);
          errorResponse = convertOAuthErrorResponseToErrorResponse(oauthErrorResponse);
        } catch (e) {
          if (statusCode === 400) {
            errorResponse = {
              error: "invalid_request",
              errorDescription: `The service indicated that the request was invalid.

${errorBody}`
            };
          } else {
            errorResponse = {
              error: "unknown_error",
              errorDescription: `An unknown error has occurred. Response body:

${errorBody}`
            };
          }
        }
      } else {
        errorResponse = {
          error: "unknown_error",
          errorDescription: "An unknown error occurred and no additional details are available."
        };
      }
      super(`${errorResponse.error} Status code: ${statusCode}
More details:
${errorResponse.errorDescription},`, options);
      this.statusCode = statusCode;
      this.errorResponse = errorResponse;
      this.name = AuthenticationErrorName;
    }
  };
  AggregateAuthenticationError = class AggregateAuthenticationError extends Error {
    errors;
    constructor(errors, errorMessage) {
      const errorDetail = errors.join(`
`);
      super(`${errorMessage}
${errorDetail}`);
      this.errors = errors;
      this.name = AggregateAuthenticationErrorName;
    }
  };
  AuthenticationRequiredError = class AuthenticationRequiredError extends Error {
    scopes;
    getTokenOptions;
    constructor(options) {
      super(options.message, options.cause ? { cause: options.cause } : undefined);
      this.scopes = options.scopes;
      this.getTokenOptions = options.getTokenOptions;
      this.name = "AuthenticationRequiredError";
    }
  };
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/logger/log.js
import { EOL } from "os";
import util from "util";
import process2 from "process";
function log(message, ...args) {
  process2.stderr.write(`${util.format(message, ...args)}${EOL}`);
}
var init_log = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/logger/debug.js
function enable(namespaces) {
  enabledString = namespaces;
  enabledNamespaces = [];
  skippedNamespaces = [];
  const namespaceList = namespaces.split(",").map((ns) => ns.trim());
  for (const ns of namespaceList) {
    if (ns.startsWith("-")) {
      skippedNamespaces.push(ns.substring(1));
    } else {
      enabledNamespaces.push(ns);
    }
  }
  for (const instance of debuggers) {
    instance.enabled = enabled(instance.namespace);
  }
}
function enabled(namespace) {
  if (namespace.endsWith("*")) {
    return true;
  }
  for (const skipped of skippedNamespaces) {
    if (namespaceMatches(namespace, skipped)) {
      return false;
    }
  }
  for (const enabledNamespace of enabledNamespaces) {
    if (namespaceMatches(namespace, enabledNamespace)) {
      return true;
    }
  }
  return false;
}
function namespaceMatches(namespace, patternToMatch) {
  if (patternToMatch.indexOf("*") === -1) {
    return namespace === patternToMatch;
  }
  let pattern = patternToMatch;
  if (patternToMatch.indexOf("**") !== -1) {
    const patternParts = [];
    let lastCharacter = "";
    for (const character of patternToMatch) {
      if (character === "*" && lastCharacter === "*") {
        continue;
      } else {
        lastCharacter = character;
        patternParts.push(character);
      }
    }
    pattern = patternParts.join("");
  }
  let namespaceIndex = 0;
  let patternIndex = 0;
  const patternLength = pattern.length;
  const namespaceLength = namespace.length;
  let lastWildcard = -1;
  let lastWildcardNamespace = -1;
  while (namespaceIndex < namespaceLength && patternIndex < patternLength) {
    if (pattern[patternIndex] === "*") {
      lastWildcard = patternIndex;
      patternIndex++;
      if (patternIndex === patternLength) {
        return true;
      }
      while (namespace[namespaceIndex] !== pattern[patternIndex]) {
        namespaceIndex++;
        if (namespaceIndex === namespaceLength) {
          return false;
        }
      }
      lastWildcardNamespace = namespaceIndex;
      namespaceIndex++;
      patternIndex++;
      continue;
    } else if (pattern[patternIndex] === namespace[namespaceIndex]) {
      patternIndex++;
      namespaceIndex++;
    } else if (lastWildcard >= 0) {
      patternIndex = lastWildcard + 1;
      namespaceIndex = lastWildcardNamespace + 1;
      if (namespaceIndex === namespaceLength) {
        return false;
      }
      while (namespace[namespaceIndex] !== pattern[patternIndex]) {
        namespaceIndex++;
        if (namespaceIndex === namespaceLength) {
          return false;
        }
      }
      lastWildcardNamespace = namespaceIndex;
      namespaceIndex++;
      patternIndex++;
      continue;
    } else {
      return false;
    }
  }
  const namespaceDone = namespaceIndex === namespace.length;
  const patternDone = patternIndex === pattern.length;
  const trailingWildCard = patternIndex === pattern.length - 1 && pattern[patternIndex] === "*";
  return namespaceDone && (patternDone || trailingWildCard);
}
function disable() {
  const result = enabledString || "";
  enable("");
  return result;
}
function createDebugger(namespace) {
  const newDebugger = Object.assign(debug, {
    enabled: enabled(namespace),
    destroy,
    log: debugObj.log,
    namespace,
    extend
  });
  function debug(...args) {
    if (!newDebugger.enabled) {
      return;
    }
    if (args.length > 0) {
      args[0] = `${namespace} ${args[0]}`;
    }
    newDebugger.log(...args);
  }
  debuggers.push(newDebugger);
  return newDebugger;
}
function destroy() {
  const index = debuggers.indexOf(this);
  if (index >= 0) {
    debuggers.splice(index, 1);
    return true;
  }
  return false;
}
function extend(namespace) {
  const newDebugger = createDebugger(`${this.namespace}:${namespace}`);
  newDebugger.log = this.log;
  return newDebugger;
}
var debugEnvVariable, enabledString, enabledNamespaces, skippedNamespaces, debuggers, debugObj, debug_default;
var init_debug = __esm(() => {
  init_log();
  debugEnvVariable = typeof process !== "undefined" && process.env && process.env.DEBUG || undefined;
  enabledNamespaces = [];
  skippedNamespaces = [];
  debuggers = [];
  if (debugEnvVariable) {
    enable(debugEnvVariable);
  }
  debugObj = Object.assign((namespace) => {
    return createDebugger(namespace);
  }, {
    enable,
    enabled,
    disable,
    log
  });
  debug_default = debugObj;
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/logger/logger.js
function patchLogMethod(parent, child) {
  child.log = (...args) => {
    parent.log(...args);
  };
}
function isTypeSpecRuntimeLogLevel(level) {
  return TYPESPEC_RUNTIME_LOG_LEVELS.includes(level);
}
function createLoggerContext(options) {
  const registeredLoggers = new Set;
  const logLevelFromEnv = typeof process !== "undefined" && process.env && process.env[options.logLevelEnvVarName] || undefined;
  let logLevel;
  const clientLogger = debug_default(options.namespace);
  clientLogger.log = (...args) => {
    debug_default.log(...args);
  };
  function contextSetLogLevel(level) {
    if (level && !isTypeSpecRuntimeLogLevel(level)) {
      throw new Error(`Unknown log level '${level}'. Acceptable values: ${TYPESPEC_RUNTIME_LOG_LEVELS.join(",")}`);
    }
    logLevel = level;
    const enabledNamespaces2 = [];
    for (const logger of registeredLoggers) {
      if (shouldEnable(logger)) {
        enabledNamespaces2.push(logger.namespace);
      }
    }
    debug_default.enable(enabledNamespaces2.join(","));
  }
  if (logLevelFromEnv) {
    if (isTypeSpecRuntimeLogLevel(logLevelFromEnv)) {
      contextSetLogLevel(logLevelFromEnv);
    } else {
      console.error(`${options.logLevelEnvVarName} set to unknown log level '${logLevelFromEnv}'; logging is not enabled. Acceptable values: ${TYPESPEC_RUNTIME_LOG_LEVELS.join(", ")}.`);
    }
  }
  function shouldEnable(logger) {
    return Boolean(logLevel && levelMap[logger.level] <= levelMap[logLevel]);
  }
  function createLogger(parent, level) {
    const logger = Object.assign(parent.extend(level), {
      level
    });
    patchLogMethod(parent, logger);
    if (shouldEnable(logger)) {
      const enabledNamespaces2 = debug_default.disable();
      debug_default.enable(enabledNamespaces2 + "," + logger.namespace);
    }
    registeredLoggers.add(logger);
    return logger;
  }
  function contextGetLogLevel() {
    return logLevel;
  }
  function contextCreateClientLogger(namespace) {
    const clientRootLogger = clientLogger.extend(namespace);
    patchLogMethod(clientLogger, clientRootLogger);
    return {
      error: createLogger(clientRootLogger, "error"),
      warning: createLogger(clientRootLogger, "warning"),
      info: createLogger(clientRootLogger, "info"),
      verbose: createLogger(clientRootLogger, "verbose")
    };
  }
  return {
    setLogLevel: contextSetLogLevel,
    getLogLevel: contextGetLogLevel,
    createClientLogger: contextCreateClientLogger,
    logger: clientLogger
  };
}
function createClientLogger(namespace) {
  return context.createClientLogger(namespace);
}
var TYPESPEC_RUNTIME_LOG_LEVELS, levelMap, context, TypeSpecRuntimeLogger;
var init_logger = __esm(() => {
  init_debug();
  TYPESPEC_RUNTIME_LOG_LEVELS = ["verbose", "info", "warning", "error"];
  levelMap = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
  };
  context = createLoggerContext({
    logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
    namespace: "typeSpecRuntime"
  });
  TypeSpecRuntimeLogger = context.logger;
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/logger/internal.js
var init_internal = __esm(() => {
  init_logger();
});

// node_modules/.bun/@azure+logger@1.3.0/node_modules/@azure/logger/dist/esm/index.js
function getLogLevel() {
  return context2.getLogLevel();
}
function createClientLogger2(namespace) {
  return context2.createClientLogger(namespace);
}
var context2, AzureLogger;
var init_esm = __esm(() => {
  init_internal();
  context2 = createLoggerContext({
    logLevelEnvVarName: "AZURE_LOG_LEVEL",
    namespace: "azure"
  });
  AzureLogger = context2.logger;
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/logging.js
function processEnvVars(supportedEnvVars) {
  return supportedEnvVars.reduce((acc, envVariable) => {
    if (process.env[envVariable]) {
      acc.assigned.push(envVariable);
    } else {
      acc.missing.push(envVariable);
    }
    return acc;
  }, { missing: [], assigned: [] });
}
function formatSuccess(scope) {
  return `SUCCESS. Scopes: ${Array.isArray(scope) ? scope.join(", ") : scope}.`;
}
function formatError(scope, error) {
  let message = "ERROR.";
  if (scope?.length) {
    message += ` Scopes: ${Array.isArray(scope) ? scope.join(", ") : scope}.`;
  }
  return `${message} Error message: ${typeof error === "string" ? error : error.message}.`;
}
function credentialLoggerInstance(title, parent, log2 = logger) {
  const fullTitle = parent ? `${parent.fullTitle} ${title}` : title;
  function info(message) {
    log2.info(`${fullTitle} =>`, message);
  }
  function warning(message) {
    log2.warning(`${fullTitle} =>`, message);
  }
  function verbose(message) {
    log2.verbose(`${fullTitle} =>`, message);
  }
  function error(message) {
    log2.error(`${fullTitle} =>`, message);
  }
  return {
    title,
    fullTitle,
    info,
    warning,
    verbose,
    error
  };
}
function credentialLogger(title, log2 = logger) {
  const credLogger = credentialLoggerInstance(title, undefined, log2);
  return {
    ...credLogger,
    parent: log2,
    getToken: credentialLoggerInstance("=> getToken()", credLogger, log2)
  };
}
var logger;
var init_logging = __esm(() => {
  init_esm();
  logger = createClientLogger2("identity");
});

// node_modules/.bun/@azure+core-tracing@1.3.1/node_modules/@azure/core-tracing/dist/esm/tracingContext.js
function createTracingContext(options = {}) {
  let context3 = new TracingContextImpl(options.parentContext);
  if (options.span) {
    context3 = context3.setValue(knownContextKeys.span, options.span);
  }
  if (options.namespace) {
    context3 = context3.setValue(knownContextKeys.namespace, options.namespace);
  }
  return context3;
}

class TracingContextImpl {
  _contextMap;
  constructor(initialContext) {
    this._contextMap = initialContext instanceof TracingContextImpl ? new Map(initialContext._contextMap) : new Map;
  }
  setValue(key, value) {
    const newContext = new TracingContextImpl(this);
    newContext._contextMap.set(key, value);
    return newContext;
  }
  getValue(key) {
    return this._contextMap.get(key);
  }
  deleteValue(key) {
    const newContext = new TracingContextImpl(this);
    newContext._contextMap.delete(key);
    return newContext;
  }
}
var knownContextKeys;
var init_tracingContext = __esm(() => {
  knownContextKeys = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace")
  };
});

// node_modules/.bun/@azure+core-tracing@1.3.1/node_modules/@azure/core-tracing/dist/commonjs/state.js
var require_state = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.state = undefined;
  exports.state = {
    instrumenterImplementation: undefined
  };
});

// node_modules/.bun/@azure+core-tracing@1.3.1/node_modules/@azure/core-tracing/dist/esm/state.js
var import_state, state;
var init_state = __esm(() => {
  import_state = __toESM(require_state(), 1);
  state = import_state.state;
});

// node_modules/.bun/@azure+core-tracing@1.3.1/node_modules/@azure/core-tracing/dist/esm/instrumenter.js
function createDefaultTracingSpan() {
  return {
    end: () => {},
    isRecording: () => false,
    recordException: () => {},
    setAttribute: () => {},
    setStatus: () => {},
    addEvent: () => {}
  };
}
function createDefaultInstrumenter() {
  return {
    createRequestHeaders: () => {
      return {};
    },
    parseTraceparentHeader: () => {
      return;
    },
    startSpan: (_name, spanOptions) => {
      return {
        span: createDefaultTracingSpan(),
        tracingContext: createTracingContext({ parentContext: spanOptions.tracingContext })
      };
    },
    withContext(_context, callback, ...callbackArgs) {
      return callback(...callbackArgs);
    }
  };
}
function getInstrumenter() {
  if (!state.instrumenterImplementation) {
    state.instrumenterImplementation = createDefaultInstrumenter();
  }
  return state.instrumenterImplementation;
}
var init_instrumenter = __esm(() => {
  init_tracingContext();
  init_state();
});

// node_modules/.bun/@azure+core-tracing@1.3.1/node_modules/@azure/core-tracing/dist/esm/tracingClient.js
function createTracingClient(options) {
  const { namespace, packageName, packageVersion } = options;
  function startSpan(name, operationOptions, spanOptions) {
    const startSpanResult = getInstrumenter().startSpan(name, {
      ...spanOptions,
      packageName,
      packageVersion,
      tracingContext: operationOptions?.tracingOptions?.tracingContext
    });
    let tracingContext = startSpanResult.tracingContext;
    const span = startSpanResult.span;
    if (!tracingContext.getValue(knownContextKeys.namespace)) {
      tracingContext = tracingContext.setValue(knownContextKeys.namespace, namespace);
    }
    span.setAttribute("az.namespace", tracingContext.getValue(knownContextKeys.namespace));
    const updatedOptions = Object.assign({}, operationOptions, {
      tracingOptions: { ...operationOptions?.tracingOptions, tracingContext }
    });
    return {
      span,
      updatedOptions
    };
  }
  async function withSpan(name, operationOptions, callback, spanOptions) {
    const { span, updatedOptions } = startSpan(name, operationOptions, spanOptions);
    try {
      const result = await withContext(updatedOptions.tracingOptions.tracingContext, () => Promise.resolve(callback(updatedOptions, span)));
      span.setStatus({ status: "success" });
      return result;
    } catch (err) {
      span.setStatus({ status: "error", error: err });
      throw err;
    } finally {
      span.end();
    }
  }
  function withContext(context3, callback, ...callbackArgs) {
    return getInstrumenter().withContext(context3, callback, ...callbackArgs);
  }
  function parseTraceparentHeader(traceparentHeader) {
    return getInstrumenter().parseTraceparentHeader(traceparentHeader);
  }
  function createRequestHeaders(tracingContext) {
    return getInstrumenter().createRequestHeaders(tracingContext);
  }
  return {
    startSpan,
    withSpan,
    withContext,
    parseTraceparentHeader,
    createRequestHeaders
  };
}
var init_tracingClient = __esm(() => {
  init_instrumenter();
  init_tracingContext();
});

// node_modules/.bun/@azure+core-tracing@1.3.1/node_modules/@azure/core-tracing/dist/esm/index.js
var init_esm2 = __esm(() => {
  init_tracingClient();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/tracing.js
var tracingClient;
var init_tracing = __esm(() => {
  init_constants();
  init_esm2();
  tracingClient = createTracingClient({
    namespace: "Microsoft.AAD",
    packageName: "@azure/identity",
    packageVersion: SDK_VERSION
  });
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/chainedTokenCredential.js
class ChainedTokenCredential {
  _sources = [];
  constructor(...sources) {
    this._sources = sources;
  }
  async getToken(scopes, options = {}) {
    const { token } = await this.getTokenInternal(scopes, options);
    return token;
  }
  async getTokenInternal(scopes, options = {}) {
    let token = null;
    let successfulCredential;
    const errors = [];
    return tracingClient.withSpan("ChainedTokenCredential.getToken", options, async (updatedOptions) => {
      for (let i = 0;i < this._sources.length && token === null; i++) {
        try {
          token = await this._sources[i].getToken(scopes, updatedOptions);
          successfulCredential = this._sources[i];
        } catch (err) {
          if (err.name === "CredentialUnavailableError" || err.name === "AuthenticationRequiredError") {
            errors.push(err);
          } else {
            logger2.getToken.info(formatError(scopes, err));
            throw err;
          }
        }
      }
      if (!token && errors.length > 0) {
        const err = new AggregateAuthenticationError(errors, "ChainedTokenCredential authentication failed.");
        logger2.getToken.info(formatError(scopes, err));
        throw err;
      }
      logger2.getToken.info(`Result for ${successfulCredential.constructor.name}: ${formatSuccess(scopes)}`);
      if (token === null) {
        throw new CredentialUnavailableError("Failed to retrieve a valid token");
      }
      return { token, successfulCredential };
    });
  }
}
var logger2;
var init_chainedTokenCredential = __esm(() => {
  init_errors();
  init_logging();
  init_tracing();
  logger2 = credentialLogger("ChainedTokenCredential");
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/cache/serializer/Serializer.mjs
class Serializer {
  static serializeJSONBlob(data) {
    return JSON.stringify(data);
  }
  static serializeAccounts(accCache) {
    const accounts = {};
    Object.keys(accCache).map(function(key) {
      const accountEntity = accCache[key];
      accounts[key] = {
        home_account_id: accountEntity.homeAccountId,
        environment: accountEntity.environment,
        realm: accountEntity.realm,
        local_account_id: accountEntity.localAccountId,
        username: accountEntity.username,
        authority_type: accountEntity.authorityType,
        name: accountEntity.name,
        client_info: accountEntity.clientInfo,
        last_modification_time: accountEntity.lastModificationTime,
        last_modification_app: accountEntity.lastModificationApp,
        tenantProfiles: accountEntity.tenantProfiles?.map((tenantProfile) => {
          return JSON.stringify(tenantProfile);
        })
      };
    });
    return accounts;
  }
  static serializeIdTokens(idTCache) {
    const idTokens = {};
    Object.keys(idTCache).map(function(key) {
      const idTEntity = idTCache[key];
      idTokens[key] = {
        home_account_id: idTEntity.homeAccountId,
        environment: idTEntity.environment,
        credential_type: idTEntity.credentialType,
        client_id: idTEntity.clientId,
        secret: idTEntity.secret,
        realm: idTEntity.realm
      };
    });
    return idTokens;
  }
  static serializeAccessTokens(atCache) {
    const accessTokens = {};
    Object.keys(atCache).map(function(key) {
      const atEntity = atCache[key];
      accessTokens[key] = {
        home_account_id: atEntity.homeAccountId,
        environment: atEntity.environment,
        credential_type: atEntity.credentialType,
        client_id: atEntity.clientId,
        secret: atEntity.secret,
        realm: atEntity.realm,
        target: atEntity.target,
        cached_at: atEntity.cachedAt,
        expires_on: atEntity.expiresOn,
        extended_expires_on: atEntity.extendedExpiresOn,
        refresh_on: atEntity.refreshOn,
        key_id: atEntity.keyId,
        token_type: atEntity.tokenType,
        userAssertionHash: atEntity.userAssertionHash,
        resource: atEntity.resource
      };
    });
    return accessTokens;
  }
  static serializeRefreshTokens(rtCache) {
    const refreshTokens = {};
    Object.keys(rtCache).map(function(key) {
      const rtEntity = rtCache[key];
      refreshTokens[key] = {
        home_account_id: rtEntity.homeAccountId,
        environment: rtEntity.environment,
        credential_type: rtEntity.credentialType,
        client_id: rtEntity.clientId,
        secret: rtEntity.secret,
        family_id: rtEntity.familyId,
        target: rtEntity.target,
        realm: rtEntity.realm
      };
    });
    return refreshTokens;
  }
  static serializeAppMetadata(amdtCache) {
    const appMetadata = {};
    Object.keys(amdtCache).map(function(key) {
      const amdtEntity = amdtCache[key];
      appMetadata[key] = {
        client_id: amdtEntity.clientId,
        environment: amdtEntity.environment,
        family_id: amdtEntity.familyId
      };
    });
    return appMetadata;
  }
  static serializeAllCache(inMemCache) {
    return {
      Account: this.serializeAccounts(inMemCache.accounts),
      IdToken: this.serializeIdTokens(inMemCache.idTokens),
      AccessToken: this.serializeAccessTokens(inMemCache.accessTokens),
      RefreshToken: this.serializeRefreshTokens(inMemCache.refreshTokens),
      AppMetadata: this.serializeAppMetadata(inMemCache.appMetadata)
    };
  }
}
var init_Serializer = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/Constants.mjs
var exports_Constants = {};
__export(exports_Constants, {
  X_MS_LIB_CAPABILITY_VALUE: () => X_MS_LIB_CAPABILITY_VALUE,
  URL_FORM_CONTENT_TYPE: () => URL_FORM_CONTENT_TYPE,
  THROTTLING_PREFIX: () => THROTTLING_PREFIX,
  THE_FAMILY_ID: () => THE_FAMILY_ID,
  SKU: () => SKU,
  SHR_NONCE_VALIDITY: () => SHR_NONCE_VALIDITY,
  SERVER_TELEM_VALUE_SEPARATOR: () => SERVER_TELEM_VALUE_SEPARATOR,
  SERVER_TELEM_UNKNOWN_ERROR: () => SERVER_TELEM_UNKNOWN_ERROR,
  SERVER_TELEM_SCHEMA_VERSION: () => SERVER_TELEM_SCHEMA_VERSION,
  SERVER_TELEM_OVERFLOW_TRUE: () => SERVER_TELEM_OVERFLOW_TRUE,
  SERVER_TELEM_OVERFLOW_FALSE: () => SERVER_TELEM_OVERFLOW_FALSE,
  SERVER_TELEM_MAX_LAST_HEADER_BYTES: () => SERVER_TELEM_MAX_LAST_HEADER_BYTES,
  SERVER_TELEM_MAX_CUR_HEADER_BYTES: () => SERVER_TELEM_MAX_CUR_HEADER_BYTES,
  SERVER_TELEM_MAX_CACHED_ERRORS: () => SERVER_TELEM_MAX_CACHED_ERRORS,
  SERVER_TELEM_CATEGORY_SEPARATOR: () => SERVER_TELEM_CATEGORY_SEPARATOR,
  SERVER_TELEM_CACHE_KEY: () => SERVER_TELEM_CACHE_KEY,
  S256_CODE_CHALLENGE_METHOD: () => S256_CODE_CHALLENGE_METHOD,
  ResponseMode: () => ResponseMode,
  RegionDiscoverySources: () => RegionDiscoverySources,
  RegionDiscoveryOutcomes: () => RegionDiscoveryOutcomes,
  RESOURCE_DELIM: () => RESOURCE_DELIM,
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: () => REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX,
  PromptValue: () => PromptValue,
  PersistentCacheKeys: () => PersistentCacheKeys,
  PasswordGrantConstants: () => PasswordGrantConstants,
  PROFILE_SCOPE: () => PROFILE_SCOPE,
  OPENID_SCOPE: () => OPENID_SCOPE,
  ONE_DAY_IN_MS: () => ONE_DAY_IN_MS,
  OIDC_SCOPES: () => OIDC_SCOPES,
  OIDC_DEFAULT_SCOPES: () => OIDC_DEFAULT_SCOPES,
  OFFLINE_ACCESS_SCOPE: () => OFFLINE_ACCESS_SCOPE,
  OAuthResponseType: () => OAuthResponseType,
  NOT_AVAILABLE: () => NOT_AVAILABLE,
  NOT_APPLICABLE: () => NOT_APPLICABLE,
  KNOWN_PUBLIC_CLOUDS: () => KNOWN_PUBLIC_CLOUDS,
  JsonWebTokenTypes: () => JsonWebTokenTypes,
  INVALID_INSTANCE: () => INVALID_INSTANCE,
  INVALID_GRANT_ERROR: () => INVALID_GRANT_ERROR,
  IMDS_VERSION: () => IMDS_VERSION,
  IMDS_TIMEOUT: () => IMDS_TIMEOUT,
  IMDS_ENDPOINT: () => IMDS_ENDPOINT,
  HttpMethod: () => HttpMethod,
  HeaderNames: () => HeaderNames,
  HTTP_UNAUTHORIZED: () => HTTP_UNAUTHORIZED,
  HTTP_TOO_MANY_REQUESTS: () => HTTP_TOO_MANY_REQUESTS,
  HTTP_SUCCESS_RANGE_START: () => HTTP_SUCCESS_RANGE_START,
  HTTP_SUCCESS_RANGE_END: () => HTTP_SUCCESS_RANGE_END,
  HTTP_SUCCESS: () => HTTP_SUCCESS,
  HTTP_SERVICE_UNAVAILABLE: () => HTTP_SERVICE_UNAVAILABLE,
  HTTP_SERVER_ERROR_RANGE_START: () => HTTP_SERVER_ERROR_RANGE_START,
  HTTP_SERVER_ERROR_RANGE_END: () => HTTP_SERVER_ERROR_RANGE_END,
  HTTP_SERVER_ERROR: () => HTTP_SERVER_ERROR,
  HTTP_REQUEST_TIMEOUT: () => HTTP_REQUEST_TIMEOUT,
  HTTP_REDIRECT: () => HTTP_REDIRECT,
  HTTP_NOT_FOUND: () => HTTP_NOT_FOUND,
  HTTP_MULTI_SIDED_ERROR: () => HTTP_MULTI_SIDED_ERROR,
  HTTP_GONE: () => HTTP_GONE,
  HTTP_GATEWAY_TIMEOUT: () => HTTP_GATEWAY_TIMEOUT,
  HTTP_CLIENT_ERROR_RANGE_START: () => HTTP_CLIENT_ERROR_RANGE_START,
  HTTP_CLIENT_ERROR_RANGE_END: () => HTTP_CLIENT_ERROR_RANGE_END,
  HTTP_CLIENT_ERROR: () => HTTP_CLIENT_ERROR,
  HTTP_BAD_REQUEST: () => HTTP_BAD_REQUEST,
  GrantType: () => GrantType,
  FORWARD_SLASH: () => FORWARD_SLASH,
  EncodingTypes: () => EncodingTypes,
  EMAIL_SCOPE: () => EMAIL_SCOPE,
  DSTS: () => DSTS,
  DEFAULT_TOKEN_RENEWAL_OFFSET_SEC: () => DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
  DEFAULT_THROTTLE_TIME_SECONDS: () => DEFAULT_THROTTLE_TIME_SECONDS,
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: () => DEFAULT_MAX_THROTTLE_TIME_SECONDS,
  DEFAULT_COMMON_TENANT: () => DEFAULT_COMMON_TENANT,
  DEFAULT_AUTHORITY_HOST: () => DEFAULT_AUTHORITY_HOST,
  DEFAULT_AUTHORITY: () => DEFAULT_AUTHORITY,
  CredentialType: () => CredentialType,
  CodeChallengeMethodValues: () => CodeChallengeMethodValues,
  ClaimsRequestKeys: () => ClaimsRequestKeys,
  CacheType: () => CacheType,
  CacheOutcome: () => CacheOutcome,
  CONSUMER_UTID: () => CONSUMER_UTID,
  CODE_GRANT_TYPE: () => CODE_GRANT_TYPE,
  CLIENT_MISMATCH_ERROR: () => CLIENT_MISMATCH_ERROR,
  CLIENT_INFO_SEPARATOR: () => CLIENT_INFO_SEPARATOR,
  CLIENT_INFO: () => CLIENT_INFO,
  CIAM_AUTH_URL: () => CIAM_AUTH_URL,
  CACHE_KEY_SEPARATOR: () => CACHE_KEY_SEPARATOR,
  CACHE_ACCOUNT_TYPE_MSSTS: () => CACHE_ACCOUNT_TYPE_MSSTS,
  CACHE_ACCOUNT_TYPE_MSAV1: () => CACHE_ACCOUNT_TYPE_MSAV1,
  CACHE_ACCOUNT_TYPE_GENERIC: () => CACHE_ACCOUNT_TYPE_GENERIC,
  CACHE_ACCOUNT_TYPE_ADFS: () => CACHE_ACCOUNT_TYPE_ADFS,
  AuthorityMetadataSource: () => AuthorityMetadataSource,
  AuthenticationScheme: () => AuthenticationScheme,
  AZURE_REGION_AUTO_DISCOVER_FLAG: () => AZURE_REGION_AUTO_DISCOVER_FLAG,
  AUTHORIZATION_PENDING: () => AUTHORIZATION_PENDING,
  AUTHORITY_METADATA_REFRESH_TIME_SECONDS: () => AUTHORITY_METADATA_REFRESH_TIME_SECONDS,
  AUTHORITY_METADATA_CACHE_KEY: () => AUTHORITY_METADATA_CACHE_KEY,
  APP_METADATA: () => APP_METADATA,
  ADFS: () => ADFS,
  AAD_TENANT_DOMAIN_SUFFIX: () => AAD_TENANT_DOMAIN_SUFFIX,
  AAD_INSTANCE_DISCOVERY_ENDPT: () => AAD_INSTANCE_DISCOVERY_ENDPT,
  AADAuthority: () => AADAuthority
});
var SKU = "msal.js.common", DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common/", DEFAULT_AUTHORITY_HOST = "login.microsoftonline.com", DEFAULT_COMMON_TENANT = "common", ADFS = "adfs", DSTS = "dstsv2", AAD_INSTANCE_DISCOVERY_ENDPT, CIAM_AUTH_URL = ".ciamlogin.com", AAD_TENANT_DOMAIN_SUFFIX = ".onmicrosoft.com", RESOURCE_DELIM = "|", CONSUMER_UTID = "9188040d-6c67-4c5b-b112-36a304b66dad", OPENID_SCOPE = "openid", PROFILE_SCOPE = "profile", OFFLINE_ACCESS_SCOPE = "offline_access", EMAIL_SCOPE = "email", CODE_GRANT_TYPE = "authorization_code", S256_CODE_CHALLENGE_METHOD = "S256", URL_FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8", AUTHORIZATION_PENDING = "authorization_pending", NOT_APPLICABLE = "N/A", NOT_AVAILABLE = "Not Available", FORWARD_SLASH = "/", IMDS_ENDPOINT = "http://169.254.169.254/metadata/instance/compute/location", IMDS_VERSION = "2020-06-01", IMDS_TIMEOUT = 2000, AZURE_REGION_AUTO_DISCOVER_FLAG = "TryAutoDetect", REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX = "login.microsoft.com", KNOWN_PUBLIC_CLOUDS, SHR_NONCE_VALIDITY = 240, INVALID_INSTANCE = "invalid_instance", HTTP_SUCCESS = 200, HTTP_SUCCESS_RANGE_START = 200, HTTP_SUCCESS_RANGE_END = 299, HTTP_REDIRECT = 302, HTTP_CLIENT_ERROR = 400, HTTP_CLIENT_ERROR_RANGE_START = 400, HTTP_BAD_REQUEST = 400, HTTP_UNAUTHORIZED = 401, HTTP_NOT_FOUND = 404, HTTP_REQUEST_TIMEOUT = 408, HTTP_GONE = 410, HTTP_TOO_MANY_REQUESTS = 429, HTTP_CLIENT_ERROR_RANGE_END = 499, HTTP_SERVER_ERROR = 500, HTTP_SERVER_ERROR_RANGE_START = 500, HTTP_SERVICE_UNAVAILABLE = 503, HTTP_GATEWAY_TIMEOUT = 504, HTTP_SERVER_ERROR_RANGE_END = 599, HTTP_MULTI_SIDED_ERROR = 600, HttpMethod, OIDC_DEFAULT_SCOPES, OIDC_SCOPES, HeaderNames, PersistentCacheKeys, AADAuthority, ClaimsRequestKeys, PromptValue, CodeChallengeMethodValues, OAuthResponseType, ResponseMode, GrantType, CACHE_ACCOUNT_TYPE_MSSTS = "MSSTS", CACHE_ACCOUNT_TYPE_ADFS = "ADFS", CACHE_ACCOUNT_TYPE_MSAV1 = "MSA", CACHE_ACCOUNT_TYPE_GENERIC = "Generic", CACHE_KEY_SEPARATOR = "-", CLIENT_INFO_SEPARATOR = ".", CredentialType, CacheType, APP_METADATA = "appmetadata", CLIENT_INFO = "client_info", THE_FAMILY_ID = "1", AUTHORITY_METADATA_CACHE_KEY = "authority-metadata", AUTHORITY_METADATA_REFRESH_TIME_SECONDS, AuthorityMetadataSource, SERVER_TELEM_SCHEMA_VERSION = 5, SERVER_TELEM_MAX_CUR_HEADER_BYTES = 80, SERVER_TELEM_MAX_LAST_HEADER_BYTES = 330, SERVER_TELEM_MAX_CACHED_ERRORS = 50, SERVER_TELEM_CACHE_KEY = "server-telemetry", SERVER_TELEM_CATEGORY_SEPARATOR = "|", SERVER_TELEM_VALUE_SEPARATOR = ",", SERVER_TELEM_OVERFLOW_TRUE = "1", SERVER_TELEM_OVERFLOW_FALSE = "0", SERVER_TELEM_UNKNOWN_ERROR = "unknown_error", AuthenticationScheme, DEFAULT_THROTTLE_TIME_SECONDS = 60, DEFAULT_MAX_THROTTLE_TIME_SECONDS = 3600, THROTTLING_PREFIX = "throttling", X_MS_LIB_CAPABILITY_VALUE = "retry-after, h429", INVALID_GRANT_ERROR = "invalid_grant", CLIENT_MISMATCH_ERROR = "client_mismatch", PasswordGrantConstants, RegionDiscoverySources, RegionDiscoveryOutcomes, CacheOutcome, JsonWebTokenTypes, ONE_DAY_IN_MS = 86400000, DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300, EncodingTypes;
var init_Constants = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  AAD_INSTANCE_DISCOVERY_ENDPT = `${DEFAULT_AUTHORITY}discovery/instance?api-version=1.1&authorization_endpoint=`;
  KNOWN_PUBLIC_CLOUDS = [
    "login.microsoftonline.com",
    "login.windows.net",
    "login.microsoft.com",
    "sts.windows.net"
  ];
  HttpMethod = {
    GET: "GET",
    POST: "POST"
  };
  OIDC_DEFAULT_SCOPES = [
    OPENID_SCOPE,
    PROFILE_SCOPE,
    OFFLINE_ACCESS_SCOPE
  ];
  OIDC_SCOPES = [...OIDC_DEFAULT_SCOPES, EMAIL_SCOPE];
  HeaderNames = {
    CONTENT_TYPE: "Content-Type",
    CONTENT_LENGTH: "Content-Length",
    RETRY_AFTER: "Retry-After",
    CCS_HEADER: "X-AnchorMailbox",
    WWWAuthenticate: "WWW-Authenticate",
    AuthenticationInfo: "Authentication-Info",
    X_MS_REQUEST_ID: "x-ms-request-id",
    X_MS_HTTP_VERSION: "x-ms-httpver"
  };
  PersistentCacheKeys = {
    ACTIVE_ACCOUNT_FILTERS: "active-account-filters"
  };
  AADAuthority = {
    COMMON: "common",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers"
  };
  ClaimsRequestKeys = {
    ACCESS_TOKEN: "access_token",
    XMS_CC: "xms_cc"
  };
  PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session"
  };
  CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
  };
  OAuthResponseType = {
    CODE: "code",
    IDTOKEN_TOKEN: "id_token token",
    IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
  };
  ResponseMode = {
    QUERY: "query",
    FRAGMENT: "fragment",
    FORM_POST: "form_post"
  };
  GrantType = {
    IMPLICIT_GRANT: "implicit",
    AUTHORIZATION_CODE_GRANT: "authorization_code",
    CLIENT_CREDENTIALS_GRANT: "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT: "password",
    REFRESH_TOKEN_GRANT: "refresh_token",
    DEVICE_CODE_GRANT: "device_code",
    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
  };
  CredentialType = {
    ID_TOKEN: "IdToken",
    ACCESS_TOKEN: "AccessToken",
    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
    REFRESH_TOKEN: "RefreshToken"
  };
  CacheType = {
    ADFS: 1001,
    MSA: 1002,
    MSSTS: 1003,
    GENERIC: 1004,
    ACCESS_TOKEN: 2001,
    REFRESH_TOKEN: 2002,
    ID_TOKEN: 2003,
    APP_METADATA: 3001,
    UNDEFINED: 9999
  };
  AUTHORITY_METADATA_REFRESH_TIME_SECONDS = 3600 * 24;
  AuthorityMetadataSource = {
    CONFIG: "config",
    CACHE: "cache",
    NETWORK: "network",
    HARDCODED_VALUES: "hardcoded_values"
  };
  AuthenticationScheme = {
    BEARER: "Bearer",
    POP: "pop",
    SSH: "ssh-cert"
  };
  PasswordGrantConstants = {
    username: "username",
    password: "password"
  };
  RegionDiscoverySources = {
    FAILED_AUTO_DETECTION: "1",
    INTERNAL_CACHE: "2",
    ENVIRONMENT_VARIABLE: "3",
    IMDS: "4"
  };
  RegionDiscoveryOutcomes = {
    CONFIGURED_MATCHES_DETECTED: "1",
    CONFIGURED_NO_AUTO_DETECTION: "2",
    CONFIGURED_NOT_DETECTED: "3",
    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
    AUTO_DETECTION_REQUESTED_FAILED: "5"
  };
  CacheOutcome = {
    NOT_APPLICABLE: "0",
    FORCE_REFRESH_OR_CLAIMS: "1",
    NO_CACHED_ACCESS_TOKEN: "2",
    CACHED_ACCESS_TOKEN_EXPIRED: "3",
    PROACTIVELY_REFRESHED: "4"
  };
  JsonWebTokenTypes = {
    Jwt: "JWT",
    Jwk: "JWK",
    Pop: "pop"
  };
  EncodingTypes = {
    BASE64: "base64",
    HEX: "hex",
    UTF8: "utf-8"
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs
var exports_AADServerParamKeys = {};
__export(exports_AADServerParamKeys, {
  X_MS_LIB_CAPABILITY: () => X_MS_LIB_CAPABILITY,
  X_CLIENT_VER: () => X_CLIENT_VER,
  X_CLIENT_SKU: () => X_CLIENT_SKU,
  X_CLIENT_OS: () => X_CLIENT_OS,
  X_CLIENT_LAST_TELEM: () => X_CLIENT_LAST_TELEM,
  X_CLIENT_EXTRA_SKU: () => X_CLIENT_EXTRA_SKU,
  X_CLIENT_CURR_TELEM: () => X_CLIENT_CURR_TELEM,
  X_CLIENT_CPU: () => X_CLIENT_CPU,
  X_APP_VER: () => X_APP_VER,
  X_APP_NAME: () => X_APP_NAME,
  TOKEN_TYPE: () => TOKEN_TYPE,
  STATE: () => STATE,
  SID: () => SID,
  SESSION_STATE: () => SESSION_STATE,
  SCOPE: () => SCOPE,
  RETURN_SPA_CODE: () => RETURN_SPA_CODE,
  RESPONSE_TYPE: () => RESPONSE_TYPE,
  RESPONSE_MODE: () => RESPONSE_MODE,
  RESOURCE: () => RESOURCE,
  REQ_CNF: () => REQ_CNF,
  REQUESTED_TOKEN_USE: () => REQUESTED_TOKEN_USE,
  REFRESH_TOKEN_EXPIRES_IN: () => REFRESH_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN: () => REFRESH_TOKEN,
  REDIRECT_URI: () => REDIRECT_URI,
  PROMPT: () => PROMPT,
  POST_LOGOUT_URI: () => POST_LOGOUT_URI,
  ON_BEHALF_OF: () => ON_BEHALF_OF,
  OBO_ASSERTION: () => OBO_ASSERTION,
  NONCE: () => NONCE,
  NATIVE_BROKER: () => NATIVE_BROKER,
  LOGOUT_HINT: () => LOGOUT_HINT,
  LOGIN_HINT: () => LOGIN_HINT,
  INSTANCE_AWARE: () => INSTANCE_AWARE,
  ID_TOKEN_HINT: () => ID_TOKEN_HINT,
  ID_TOKEN: () => ID_TOKEN,
  GRANT_TYPE: () => GRANT_TYPE,
  FOCI: () => FOCI,
  EXPIRES_IN: () => EXPIRES_IN,
  ERROR_DESCRIPTION: () => ERROR_DESCRIPTION,
  ERROR: () => ERROR,
  EAR_JWK: () => EAR_JWK,
  EAR_JWE_CRYPTO: () => EAR_JWE_CRYPTO,
  DOMAIN_HINT: () => DOMAIN_HINT,
  DEVICE_CODE: () => DEVICE_CODE,
  CODE_VERIFIER: () => CODE_VERIFIER,
  CODE_CHALLENGE_METHOD: () => CODE_CHALLENGE_METHOD,
  CODE_CHALLENGE: () => CODE_CHALLENGE,
  CODE: () => CODE,
  CLI_DATA: () => CLI_DATA,
  CLIENT_SECRET: () => CLIENT_SECRET,
  CLIENT_REQUEST_ID: () => CLIENT_REQUEST_ID,
  CLIENT_INFO: () => CLIENT_INFO2,
  CLIENT_ID: () => CLIENT_ID,
  CLIENT_ASSERTION_TYPE: () => CLIENT_ASSERTION_TYPE,
  CLIENT_ASSERTION: () => CLIENT_ASSERTION,
  CLAIMS: () => CLAIMS,
  CCS_HEADER: () => CCS_HEADER,
  BROKER_REDIRECT_URI: () => BROKER_REDIRECT_URI,
  BROKER_CLIENT_ID: () => BROKER_CLIENT_ID,
  ACCESS_TOKEN: () => ACCESS_TOKEN
});
var CLIENT_ID = "client_id", REDIRECT_URI = "redirect_uri", RESPONSE_TYPE = "response_type", RESPONSE_MODE = "response_mode", GRANT_TYPE = "grant_type", CLAIMS = "claims", SCOPE = "scope", ERROR = "error", ERROR_DESCRIPTION = "error_description", ACCESS_TOKEN = "access_token", ID_TOKEN = "id_token", REFRESH_TOKEN = "refresh_token", EXPIRES_IN = "expires_in", REFRESH_TOKEN_EXPIRES_IN = "refresh_token_expires_in", STATE = "state", NONCE = "nonce", PROMPT = "prompt", SESSION_STATE = "session_state", CLIENT_INFO2 = "client_info", CODE = "code", CODE_CHALLENGE = "code_challenge", CODE_CHALLENGE_METHOD = "code_challenge_method", CODE_VERIFIER = "code_verifier", CLIENT_REQUEST_ID = "client-request-id", X_CLIENT_SKU = "x-client-SKU", X_CLIENT_VER = "x-client-VER", X_CLIENT_OS = "x-client-OS", X_CLIENT_CPU = "x-client-CPU", X_CLIENT_CURR_TELEM = "x-client-current-telemetry", X_CLIENT_LAST_TELEM = "x-client-last-telemetry", X_MS_LIB_CAPABILITY = "x-ms-lib-capability", X_APP_NAME = "x-app-name", X_APP_VER = "x-app-ver", POST_LOGOUT_URI = "post_logout_redirect_uri", ID_TOKEN_HINT = "id_token_hint", DEVICE_CODE = "device_code", CLIENT_SECRET = "client_secret", CLIENT_ASSERTION = "client_assertion", CLIENT_ASSERTION_TYPE = "client_assertion_type", TOKEN_TYPE = "token_type", REQ_CNF = "req_cnf", OBO_ASSERTION = "assertion", REQUESTED_TOKEN_USE = "requested_token_use", ON_BEHALF_OF = "on_behalf_of", FOCI = "foci", CCS_HEADER = "X-AnchorMailbox", RETURN_SPA_CODE = "return_spa_code", NATIVE_BROKER = "nativebroker", LOGOUT_HINT = "logout_hint", SID = "sid", LOGIN_HINT = "login_hint", DOMAIN_HINT = "domain_hint", X_CLIENT_EXTRA_SKU = "x-client-xtra-sku", BROKER_CLIENT_ID = "brk_client_id", BROKER_REDIRECT_URI = "brk_redirect_uri", INSTANCE_AWARE = "instance_aware", EAR_JWK = "ear_jwk", EAR_JWE_CRYPTO = "ear_jwe_crypto", RESOURCE = "resource", CLI_DATA = "clidata";
var init_AADServerParamKeys = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/AuthError.mjs
function getDefaultErrorMessage(code) {
  return `See https://aka.ms/msal.js.errors#${code} for details`;
}
function createAuthError(code, additionalMessage) {
  return new AuthError(code, additionalMessage || getDefaultErrorMessage(code));
}
var AuthError;
var init_AuthError = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  AuthError = class AuthError extends Error {
    constructor(errorCode, errorMessage, suberror) {
      const message = errorMessage || (errorCode ? getDefaultErrorMessage(errorCode) : "");
      const errorString = message ? `${errorCode}: ${message}` : errorCode;
      super(errorString);
      Object.setPrototypeOf(this, AuthError.prototype);
      this.errorCode = errorCode || "";
      this.errorMessage = message || "";
      this.subError = suberror || "";
      this.name = "AuthError";
    }
    setCorrelationId(correlationId) {
      this.correlationId = correlationId;
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/ClientConfigurationError.mjs
function createClientConfigurationError(errorCode) {
  return new ClientConfigurationError(errorCode);
}
var ClientConfigurationError;
var init_ClientConfigurationError = __esm(() => {
  init_AuthError();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  ClientConfigurationError = class ClientConfigurationError extends AuthError {
    constructor(errorCode) {
      super(errorCode);
      this.name = "ClientConfigurationError";
      Object.setPrototypeOf(this, ClientConfigurationError.prototype);
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/StringUtils.mjs
class StringUtils {
  static isEmptyObj(strObj) {
    if (strObj) {
      try {
        const obj = JSON.parse(strObj);
        return Object.keys(obj).length === 0;
      } catch (e) {}
    }
    return true;
  }
  static startsWith(str, search) {
    return str.indexOf(search) === 0;
  }
  static endsWith(str, search) {
    return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
  }
  static queryStringToObject(query) {
    const obj = {};
    const params = query.split("&");
    const decode = (s) => decodeURIComponent(s.replace(/\+/g, " "));
    params.forEach((pair) => {
      if (pair.trim()) {
        const [key, value] = pair.split(/=(.+)/g, 2);
        if (key && value) {
          obj[decode(key)] = decode(value);
        }
      }
    });
    return obj;
  }
  static trimArrayEntries(arr) {
    return arr.map((entry) => entry.trim());
  }
  static removeEmptyStringsFromArray(arr) {
    return arr.filter((entry) => {
      return !!entry;
    });
  }
  static jsonParseHelper(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }
}
var init_StringUtils = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/ClientAuthError.mjs
function createClientAuthError(errorCode, additionalMessage) {
  return new ClientAuthError(errorCode, additionalMessage);
}
var ClientAuthError;
var init_ClientAuthError = __esm(() => {
  init_AuthError();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  ClientAuthError = class ClientAuthError extends AuthError {
    constructor(errorCode, additionalMessage) {
      super(errorCode, additionalMessage);
      this.name = "ClientAuthError";
      Object.setPrototypeOf(this, ClientAuthError.prototype);
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs
var exports_ClientConfigurationErrorCodes = {};
__export(exports_ClientConfigurationErrorCodes, {
  urlParseError: () => urlParseError,
  urlEmptyError: () => urlEmptyError,
  untrustedAuthority: () => untrustedAuthority,
  tokenRequestEmpty: () => tokenRequestEmpty,
  redirectUriEmpty: () => redirectUriEmpty,
  pkceParamsMissing: () => pkceParamsMissing,
  missingSshKid: () => missingSshKid,
  missingSshJwk: () => missingSshJwk,
  missingNonceAuthenticationHeader: () => missingNonceAuthenticationHeader,
  logoutRequestEmpty: () => logoutRequestEmpty,
  invalidRequestMethodForEAR: () => invalidRequestMethodForEAR,
  invalidCodeChallengeMethod: () => invalidCodeChallengeMethod,
  invalidCloudDiscoveryMetadata: () => invalidCloudDiscoveryMetadata,
  invalidClaims: () => invalidClaims,
  invalidAuthorityMetadata: () => invalidAuthorityMetadata,
  invalidAuthenticationHeader: () => invalidAuthenticationHeader,
  emptyInputScopesError: () => emptyInputScopesError,
  claimsRequestParsingError: () => claimsRequestParsingError,
  cannotSetOIDCOptions: () => cannotSetOIDCOptions,
  cannotAllowPlatformBroker: () => cannotAllowPlatformBroker,
  authorityUriInsecure: () => authorityUriInsecure,
  authorityMismatch: () => authorityMismatch
});
var redirectUriEmpty = "redirect_uri_empty", claimsRequestParsingError = "claims_request_parsing_error", authorityUriInsecure = "authority_uri_insecure", urlParseError = "url_parse_error", urlEmptyError = "empty_url_error", emptyInputScopesError = "empty_input_scopes_error", invalidClaims = "invalid_claims", tokenRequestEmpty = "token_request_empty", logoutRequestEmpty = "logout_request_empty", invalidCodeChallengeMethod = "invalid_code_challenge_method", pkceParamsMissing = "pkce_params_missing", invalidCloudDiscoveryMetadata = "invalid_cloud_discovery_metadata", invalidAuthorityMetadata = "invalid_authority_metadata", untrustedAuthority = "untrusted_authority", missingSshJwk = "missing_ssh_jwk", missingSshKid = "missing_ssh_kid", missingNonceAuthenticationHeader = "missing_nonce_authentication_header", invalidAuthenticationHeader = "invalid_authentication_header", cannotSetOIDCOptions = "cannot_set_OIDCOptions", cannotAllowPlatformBroker = "cannot_allow_platform_broker", authorityMismatch = "authority_mismatch", invalidRequestMethodForEAR = "invalid_request_method_for_EAR";
var init_ClientConfigurationErrorCodes = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs
var exports_ClientAuthErrorCodes = {};
__export(exports_ClientAuthErrorCodes, {
  userCanceled: () => userCanceled,
  unexpectedCredentialType: () => unexpectedCredentialType,
  tokenRefreshRequired: () => tokenRefreshRequired,
  tokenParsingError: () => tokenParsingError,
  tokenClaimsCnfRequiredForSignedJwt: () => tokenClaimsCnfRequiredForSignedJwt,
  stateNotFound: () => stateNotFound,
  stateMismatch: () => stateMismatch,
  resourceParameterRequired: () => resourceParameterRequired,
  requestCannotBeMade: () => requestCannotBeMade,
  platformBrokerError: () => platformBrokerError,
  openIdConfigError: () => openIdConfigError,
  nullOrEmptyToken: () => nullOrEmptyToken,
  nonceMismatch: () => nonceMismatch,
  noNetworkConnectivity: () => noNetworkConnectivity,
  noCryptoObject: () => noCryptoObject,
  noAccountInSilentRequest: () => noAccountInSilentRequest,
  noAccountFound: () => noAccountFound,
  networkError: () => networkError,
  nestedAppAuthBridgeDisabled: () => nestedAppAuthBridgeDisabled,
  multipleMatchingTokens: () => multipleMatchingTokens,
  multipleMatchingAppMetadata: () => multipleMatchingAppMetadata,
  misplacedResourceParam: () => misplacedResourceParam,
  methodNotImplemented: () => methodNotImplemented,
  maxAgeTranspired: () => maxAgeTranspired,
  keyIdMissing: () => keyIdMissing,
  invalidState: () => invalidState,
  invalidCacheRecord: () => invalidCacheRecord,
  invalidCacheEnvironment: () => invalidCacheEnvironment,
  hashNotDeserialized: () => hashNotDeserialized,
  endpointResolutionError: () => endpointResolutionError,
  endSessionEndpointNotSupported: () => endSessionEndpointNotSupported,
  emptyInputScopeSet: () => emptyInputScopeSet,
  clientInfoEmptyError: () => clientInfoEmptyError,
  clientInfoDecodingError: () => clientInfoDecodingError,
  cannotRemoveEmptyScope: () => cannotRemoveEmptyScope,
  cannotAppendScopeSet: () => cannotAppendScopeSet,
  bindingKeyNotRemoved: () => bindingKeyNotRemoved,
  authorizationCodeMissingFromServerResponse: () => authorizationCodeMissingFromServerResponse,
  authTimeNotFound: () => authTimeNotFound
});
var clientInfoDecodingError = "client_info_decoding_error", clientInfoEmptyError = "client_info_empty_error", tokenParsingError = "token_parsing_error", nullOrEmptyToken = "null_or_empty_token", endpointResolutionError = "endpoints_resolution_error", networkError = "network_error", openIdConfigError = "openid_config_error", hashNotDeserialized = "hash_not_deserialized", invalidState = "invalid_state", stateMismatch = "state_mismatch", stateNotFound = "state_not_found", nonceMismatch = "nonce_mismatch", authTimeNotFound = "auth_time_not_found", maxAgeTranspired = "max_age_transpired", multipleMatchingTokens = "multiple_matching_tokens", multipleMatchingAppMetadata = "multiple_matching_appMetadata", requestCannotBeMade = "request_cannot_be_made", cannotRemoveEmptyScope = "cannot_remove_empty_scope", cannotAppendScopeSet = "cannot_append_scopeset", emptyInputScopeSet = "empty_input_scopeset", noAccountInSilentRequest = "no_account_in_silent_request", invalidCacheRecord = "invalid_cache_record", invalidCacheEnvironment = "invalid_cache_environment", noAccountFound = "no_account_found", noCryptoObject = "no_crypto_object", unexpectedCredentialType = "unexpected_credential_type", tokenRefreshRequired = "token_refresh_required", tokenClaimsCnfRequiredForSignedJwt = "token_claims_cnf_required_for_signedjwt", authorizationCodeMissingFromServerResponse = "authorization_code_missing_from_server_response", bindingKeyNotRemoved = "binding_key_not_removed", endSessionEndpointNotSupported = "end_session_endpoint_not_supported", keyIdMissing = "key_id_missing", noNetworkConnectivity = "no_network_connectivity", userCanceled = "user_canceled", methodNotImplemented = "method_not_implemented", nestedAppAuthBridgeDisabled = "nested_app_auth_bridge_disabled", platformBrokerError = "platform_broker_error", resourceParameterRequired = "resource_parameter_required", misplacedResourceParam = "misplaced_resource_parameter";
var init_ClientAuthErrorCodes = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/request/ScopeSet.mjs
class ScopeSet {
  constructor(inputScopes) {
    const scopeArr = inputScopes ? StringUtils.trimArrayEntries([...inputScopes]) : [];
    const filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
    if (!filteredInput || !filteredInput.length) {
      throw createClientConfigurationError(emptyInputScopesError);
    }
    this.scopes = new Set;
    filteredInput.forEach((scope) => this.scopes.add(scope));
  }
  static fromString(inputScopeString) {
    const scopeString = inputScopeString || "";
    const inputScopes = scopeString.split(" ");
    return new ScopeSet(inputScopes);
  }
  static createSearchScopes(inputScopeString) {
    const scopesToUse = inputScopeString && inputScopeString.length > 0 ? inputScopeString : [...OIDC_DEFAULT_SCOPES];
    const scopeSet = new ScopeSet(scopesToUse);
    if (!scopeSet.containsOnlyOIDCScopes()) {
      scopeSet.removeOIDCScopes();
    } else {
      scopeSet.removeScope(OFFLINE_ACCESS_SCOPE);
    }
    return scopeSet;
  }
  containsScope(scope) {
    const lowerCaseScopes = this.printScopesLowerCase().split(" ");
    const lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
    return scope ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
  }
  containsScopeSet(scopeSet) {
    if (!scopeSet || scopeSet.scopes.size <= 0) {
      return false;
    }
    return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every((scope) => this.containsScope(scope));
  }
  containsOnlyOIDCScopes() {
    let defaultScopeCount = 0;
    OIDC_SCOPES.forEach((defaultScope) => {
      if (this.containsScope(defaultScope)) {
        defaultScopeCount += 1;
      }
    });
    return this.scopes.size === defaultScopeCount;
  }
  appendScope(newScope) {
    if (newScope) {
      this.scopes.add(newScope.trim());
    }
  }
  appendScopes(newScopes) {
    try {
      newScopes.forEach((newScope) => this.appendScope(newScope));
    } catch (e) {
      throw createClientAuthError(cannotAppendScopeSet);
    }
  }
  removeScope(scope) {
    if (!scope) {
      throw createClientAuthError(cannotRemoveEmptyScope);
    }
    this.scopes.delete(scope.trim());
  }
  removeOIDCScopes() {
    OIDC_SCOPES.forEach((defaultScope) => {
      this.scopes.delete(defaultScope);
    });
  }
  unionScopeSets(otherScopes) {
    if (!otherScopes) {
      throw createClientAuthError(emptyInputScopeSet);
    }
    const unionScopes = new Set;
    otherScopes.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
    this.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
    return unionScopes;
  }
  intersectingScopeSets(otherScopes) {
    if (!otherScopes) {
      throw createClientAuthError(emptyInputScopeSet);
    }
    if (!otherScopes.containsOnlyOIDCScopes()) {
      otherScopes.removeOIDCScopes();
    }
    const unionScopes = this.unionScopeSets(otherScopes);
    const sizeOtherScopes = otherScopes.getScopeCount();
    const sizeThisScopes = this.getScopeCount();
    const sizeUnionScopes = unionScopes.size;
    return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    const array = [];
    this.scopes.forEach((val) => array.push(val));
    return array;
  }
  printScopes() {
    if (this.scopes) {
      const scopeArr = this.asArray();
      return scopeArr.join(" ");
    }
    return "";
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
}
var init_ScopeSet = __esm(() => {
  init_ClientConfigurationError();
  init_StringUtils();
  init_ClientAuthError();
  init_Constants();
  init_ClientConfigurationErrorCodes();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/request/RequestParameterBuilder.mjs
var exports_RequestParameterBuilder = {};
__export(exports_RequestParameterBuilder, {
  instrumentBrokerParams: () => instrumentBrokerParams,
  addUsername: () => addUsername,
  addThrottling: () => addThrottling,
  addState: () => addState,
  addSshJwk: () => addSshJwk,
  addSid: () => addSid,
  addServerTelemetry: () => addServerTelemetry,
  addScopes: () => addScopes,
  addResponseType: () => addResponseType,
  addResponseMode: () => addResponseMode,
  addResource: () => addResource,
  addRequestTokenUse: () => addRequestTokenUse,
  addRefreshToken: () => addRefreshToken,
  addRedirectUri: () => addRedirectUri,
  addPrompt: () => addPrompt,
  addPostLogoutRedirectUri: () => addPostLogoutRedirectUri,
  addPopToken: () => addPopToken,
  addPassword: () => addPassword,
  addOboAssertion: () => addOboAssertion,
  addNonce: () => addNonce,
  addNativeBroker: () => addNativeBroker,
  addLogoutHint: () => addLogoutHint,
  addLoginHint: () => addLoginHint,
  addLibraryInfo: () => addLibraryInfo,
  addInstanceAware: () => addInstanceAware,
  addIdTokenHint: () => addIdTokenHint,
  addGrantType: () => addGrantType,
  addExtraParameters: () => addExtraParameters,
  addEARParameters: () => addEARParameters,
  addDomainHint: () => addDomainHint,
  addDeviceCode: () => addDeviceCode,
  addCorrelationId: () => addCorrelationId,
  addCodeVerifier: () => addCodeVerifier,
  addCodeChallengeParams: () => addCodeChallengeParams,
  addClientSecret: () => addClientSecret,
  addClientInfo: () => addClientInfo,
  addClientId: () => addClientId,
  addClientCapabilitiesToClaims: () => addClientCapabilitiesToClaims,
  addClientAssertionType: () => addClientAssertionType,
  addClientAssertion: () => addClientAssertion,
  addCliData: () => addCliData,
  addClaims: () => addClaims,
  addCcsUpn: () => addCcsUpn,
  addCcsOid: () => addCcsOid,
  addBrokerParameters: () => addBrokerParameters,
  addAuthorizationCode: () => addAuthorizationCode,
  addApplicationTelemetry: () => addApplicationTelemetry
});
function instrumentBrokerParams(parameters, correlationId, performanceClient) {
  if (!correlationId) {
    return;
  }
  const clientId = parameters.get(CLIENT_ID);
  if (clientId && parameters.has(BROKER_CLIENT_ID)) {
    performanceClient?.addFields({
      embeddedClientId: clientId,
      embeddedRedirectUri: parameters.get(REDIRECT_URI)
    }, correlationId);
  }
}
function addResponseType(parameters, responseType) {
  parameters.set(RESPONSE_TYPE, responseType);
}
function addResponseMode(parameters, responseMode) {
  parameters.set(RESPONSE_MODE, responseMode ? responseMode : ResponseMode.QUERY);
}
function addNativeBroker(parameters) {
  parameters.set(NATIVE_BROKER, "1");
}
function addScopes(parameters, scopes, addOidcScopes = true, defaultScopes = OIDC_DEFAULT_SCOPES) {
  if (addOidcScopes && !defaultScopes.includes("openid") && !scopes.includes("openid")) {
    defaultScopes.push("openid");
  }
  const requestScopes = addOidcScopes ? [...scopes || [], ...defaultScopes] : scopes || [];
  const scopeSet = new ScopeSet(requestScopes);
  parameters.set(SCOPE, scopeSet.printScopes());
}
function addClientId(parameters, clientId) {
  parameters.set(CLIENT_ID, clientId);
}
function addRedirectUri(parameters, redirectUri) {
  parameters.set(REDIRECT_URI, redirectUri);
}
function addPostLogoutRedirectUri(parameters, redirectUri) {
  parameters.set(POST_LOGOUT_URI, redirectUri);
}
function addIdTokenHint(parameters, idTokenHint) {
  parameters.set(ID_TOKEN_HINT, idTokenHint);
}
function addDomainHint(parameters, domainHint) {
  parameters.set(DOMAIN_HINT, domainHint);
}
function addLoginHint(parameters, loginHint) {
  parameters.set(LOGIN_HINT, loginHint);
}
function addCcsUpn(parameters, loginHint) {
  parameters.set(HeaderNames.CCS_HEADER, `UPN:${loginHint}`);
}
function addCcsOid(parameters, clientInfo) {
  parameters.set(HeaderNames.CCS_HEADER, `Oid:${clientInfo.uid}@${clientInfo.utid}`);
}
function addSid(parameters, sid) {
  parameters.set(SID, sid);
}
function addClaims(parameters, claims, clientCapabilities) {
  const mergedClaims = addClientCapabilitiesToClaims(claims, clientCapabilities);
  try {
    JSON.parse(mergedClaims);
  } catch (e) {
    throw createClientConfigurationError(invalidClaims);
  }
  parameters.set(CLAIMS, mergedClaims);
}
function addCorrelationId(parameters, correlationId) {
  parameters.set(CLIENT_REQUEST_ID, correlationId);
}
function addLibraryInfo(parameters, libraryInfo) {
  parameters.set(X_CLIENT_SKU, libraryInfo.sku);
  parameters.set(X_CLIENT_VER, libraryInfo.version);
  if (libraryInfo.os) {
    parameters.set(X_CLIENT_OS, libraryInfo.os);
  }
  if (libraryInfo.cpu) {
    parameters.set(X_CLIENT_CPU, libraryInfo.cpu);
  }
}
function addApplicationTelemetry(parameters, appTelemetry) {
  if (appTelemetry?.appName) {
    parameters.set(X_APP_NAME, appTelemetry.appName);
  }
  if (appTelemetry?.appVersion) {
    parameters.set(X_APP_VER, appTelemetry.appVersion);
  }
}
function addPrompt(parameters, prompt) {
  parameters.set(PROMPT, prompt);
}
function addState(parameters, state2) {
  if (state2) {
    parameters.set(STATE, state2);
  }
}
function addNonce(parameters, nonce) {
  parameters.set(NONCE, nonce);
}
function addCodeChallengeParams(parameters, codeChallenge, codeChallengeMethod) {
  if (codeChallenge && codeChallengeMethod) {
    parameters.set(CODE_CHALLENGE, codeChallenge);
    parameters.set(CODE_CHALLENGE_METHOD, codeChallengeMethod);
  } else {
    throw createClientConfigurationError(pkceParamsMissing);
  }
}
function addAuthorizationCode(parameters, code) {
  parameters.set(CODE, code);
}
function addDeviceCode(parameters, code) {
  parameters.set(DEVICE_CODE, code);
}
function addRefreshToken(parameters, refreshToken) {
  parameters.set(REFRESH_TOKEN, refreshToken);
}
function addCodeVerifier(parameters, codeVerifier) {
  parameters.set(CODE_VERIFIER, codeVerifier);
}
function addClientSecret(parameters, clientSecret) {
  parameters.set(CLIENT_SECRET, clientSecret);
}
function addClientAssertion(parameters, clientAssertion) {
  if (clientAssertion) {
    parameters.set(CLIENT_ASSERTION, clientAssertion);
  }
}
function addClientAssertionType(parameters, clientAssertionType) {
  if (clientAssertionType) {
    parameters.set(CLIENT_ASSERTION_TYPE, clientAssertionType);
  }
}
function addOboAssertion(parameters, oboAssertion) {
  parameters.set(OBO_ASSERTION, oboAssertion);
}
function addRequestTokenUse(parameters, tokenUse) {
  parameters.set(REQUESTED_TOKEN_USE, tokenUse);
}
function addGrantType(parameters, grantType) {
  parameters.set(GRANT_TYPE, grantType);
}
function addClientInfo(parameters) {
  parameters.set(CLIENT_INFO, "1");
}
function addCliData(parameters) {
  parameters.set(CLI_DATA, "1");
}
function addInstanceAware(parameters) {
  if (!parameters.has(INSTANCE_AWARE)) {
    parameters.set(INSTANCE_AWARE, "true");
  }
}
function addExtraParameters(parameters, extraParams) {
  Object.entries(extraParams).forEach(([key, value]) => {
    if (!parameters.has(key) && value) {
      parameters.set(key, value);
    }
  });
}
function addClientCapabilitiesToClaims(claims, clientCapabilities) {
  let mergedClaims;
  if (!claims) {
    mergedClaims = {};
  } else {
    try {
      mergedClaims = JSON.parse(claims);
    } catch (e) {
      throw createClientConfigurationError(invalidClaims);
    }
  }
  if (clientCapabilities && clientCapabilities.length > 0) {
    if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
      mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
    }
    mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
      values: clientCapabilities
    };
  }
  return JSON.stringify(mergedClaims);
}
function addUsername(parameters, username) {
  parameters.set(PasswordGrantConstants.username, username);
}
function addPassword(parameters, password) {
  parameters.set(PasswordGrantConstants.password, password);
}
function addPopToken(parameters, cnfString) {
  if (cnfString) {
    parameters.set(TOKEN_TYPE, AuthenticationScheme.POP);
    parameters.set(REQ_CNF, cnfString);
  }
}
function addSshJwk(parameters, sshJwkString) {
  if (sshJwkString) {
    parameters.set(TOKEN_TYPE, AuthenticationScheme.SSH);
    parameters.set(REQ_CNF, sshJwkString);
  }
}
function addServerTelemetry(parameters, serverTelemetryManager) {
  parameters.set(X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
  parameters.set(X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
}
function addThrottling(parameters) {
  parameters.set(X_MS_LIB_CAPABILITY, X_MS_LIB_CAPABILITY_VALUE);
}
function addLogoutHint(parameters, logoutHint) {
  parameters.set(LOGOUT_HINT, logoutHint);
}
function addBrokerParameters(parameters, brokerClientId, brokerRedirectUri) {
  if (!parameters.has(BROKER_CLIENT_ID)) {
    parameters.set(BROKER_CLIENT_ID, brokerClientId);
  }
  if (!parameters.has(BROKER_REDIRECT_URI)) {
    parameters.set(BROKER_REDIRECT_URI, brokerRedirectUri);
  }
}
function addEARParameters(parameters, jwk) {
  parameters.set(EAR_JWK, encodeURIComponent(jwk));
  const jweCryptoB64Encoded = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0";
  parameters.set(EAR_JWE_CRYPTO, jweCryptoB64Encoded);
}
function addResource(parameters, resource) {
  if (resource) {
    parameters.set(RESOURCE, resource);
  }
}
var init_RequestParameterBuilder = __esm(() => {
  init_Constants();
  init_AADServerParamKeys();
  init_ScopeSet();
  init_ClientConfigurationError();
  init_ClientConfigurationErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs
var exports_UrlUtils = {};
__export(exports_UrlUtils, {
  stripLeadingHashOrQuery: () => stripLeadingHashOrQuery,
  normalizeUrlForComparison: () => normalizeUrlForComparison,
  mapToQueryString: () => mapToQueryString,
  getDeserializedResponse: () => getDeserializedResponse
});
function canonicalizeUrl(url) {
  if (!url) {
    return url;
  }
  let lowerCaseUrl = url.toLowerCase();
  if (StringUtils.endsWith(lowerCaseUrl, "?")) {
    lowerCaseUrl = lowerCaseUrl.slice(0, -1);
  } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
    lowerCaseUrl = lowerCaseUrl.slice(0, -2);
  }
  if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
    lowerCaseUrl += "/";
  }
  return lowerCaseUrl;
}
function stripLeadingHashOrQuery(responseString) {
  if (responseString.startsWith("#/")) {
    return responseString.substring(2);
  } else if (responseString.startsWith("#") || responseString.startsWith("?")) {
    return responseString.substring(1);
  }
  return responseString;
}
function getDeserializedResponse(responseString) {
  if (!responseString || responseString.indexOf("=") < 0) {
    return null;
  }
  try {
    const normalizedResponse = stripLeadingHashOrQuery(responseString);
    const deserializedHash = Object.fromEntries(new URLSearchParams(normalizedResponse));
    if (deserializedHash.code || deserializedHash.ear_jwe || deserializedHash.error || deserializedHash.error_description || deserializedHash.state) {
      return deserializedHash;
    }
  } catch (e) {
    throw createClientAuthError(hashNotDeserialized);
  }
  return null;
}
function mapToQueryString(parameters) {
  const queryParameterArray = new Array;
  parameters.forEach((value, key) => {
    queryParameterArray.push(`${key}=${encodeURIComponent(value)}`);
  });
  return queryParameterArray.join("&");
}
function normalizeUrlForComparison(url) {
  if (!url) {
    return url;
  }
  const urlWithoutHash = url.split("#")[0];
  try {
    const urlObj = new URL(urlWithoutHash);
    const normalizedUrl = urlObj.origin + urlObj.pathname + urlObj.search;
    return canonicalizeUrl(normalizedUrl);
  } catch (e) {
    return canonicalizeUrl(urlWithoutHash);
  }
}
var init_UrlUtils = __esm(() => {
  init_ClientAuthError();
  init_StringUtils();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/crypto/ICrypto.mjs
var DEFAULT_CRYPTO_IMPLEMENTATION;
var init_ICrypto = __esm(() => {
  init_ClientAuthError();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    base64Decode: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    base64Encode: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    base64UrlEncode: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    encodeKid: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    async getPublicKeyThumbprint() {
      throw createClientAuthError(methodNotImplemented);
    },
    async removeTokenBindingKey() {
      throw createClientAuthError(methodNotImplemented);
    },
    async clearKeystore() {
      throw createClientAuthError(methodNotImplemented);
    },
    async signJwt() {
      throw createClientAuthError(methodNotImplemented);
    },
    async hashString() {
      throw createClientAuthError(methodNotImplemented);
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/logger/Logger.mjs
function markAsRecentlyUsed(correlationId, data) {
  correlationCache.delete(correlationId);
  correlationCache.set(correlationId, data);
}
function addLogToCache(correlationId, loggedMessage) {
  const currentTime = Date.now();
  let data = correlationCache.get(correlationId);
  if (data) {
    markAsRecentlyUsed(correlationId, data);
  } else {
    data = { logs: [], firstEventTime: currentTime };
    correlationCache.set(correlationId, data);
    if (correlationCache.size > CACHE_CAPACITY) {
      const firstKey = correlationCache.keys().next().value;
      if (firstKey) {
        correlationCache.delete(firstKey);
      }
    }
  }
  data.logs.push({
    ...loggedMessage,
    milliseconds: currentTime - data.firstEventTime
  });
  if (data.logs.length > MAX_LOGS_PER_CORRELATION) {
    data.logs.shift();
  }
}
function isHashedString(str) {
  if (str.length !== 6) {
    return false;
  }
  for (let i = 0;i < str.length; i++) {
    const char = str[i];
    const isAlphaNumeric = char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char >= "0" && char <= "9";
    if (!isAlphaNumeric) {
      return false;
    }
  }
  return true;
}

class Logger {
  constructor(loggerOptions, packageName, packageVersion) {
    this.level = LogLevel.Info;
    const defaultLoggerCallback = () => {
      return;
    };
    const setLoggerOptions = loggerOptions || Logger.createDefaultLoggerOptions();
    this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
    this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
    this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
    this.packageName = packageName || "";
    this.packageVersion = packageVersion || "";
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {},
      piiLoggingEnabled: false,
      logLevel: LogLevel.Info
    };
  }
  clone(packageName, packageVersion) {
    return new Logger({
      loggerCallback: this.localCallback,
      piiLoggingEnabled: this.piiLoggingEnabled,
      logLevel: this.level
    }, packageName, packageVersion);
  }
  logMessage(logMessage, options) {
    const correlationId = options.correlationId;
    const isHashedInput = isHashedString(logMessage);
    if (isHashedInput) {
      const loggedMessage = {
        hash: logMessage,
        level: options.logLevel,
        containsPii: options.containsPii || false,
        milliseconds: 0
      };
      addLogToCache(correlationId, loggedMessage);
    }
    if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) {
      return;
    }
    const timestamp = new Date().toUTCString();
    const logHeader = `[${timestamp}] : [${correlationId}]`;
    const log2 = `${logHeader} : ${this.packageName}@${this.packageVersion} : ${LogLevel[options.logLevel]} - ${logMessage}`;
    this.executeCallback(options.logLevel, log2, options.containsPii || false);
  }
  executeCallback(level, message, containsPii) {
    if (this.localCallback) {
      this.localCallback(level, message, containsPii);
    }
  }
  error(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: false,
      correlationId
    });
  }
  errorPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Error,
      containsPii: true,
      correlationId
    });
  }
  warning(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: false,
      correlationId
    });
  }
  warningPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Warning,
      containsPii: true,
      correlationId
    });
  }
  info(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: false,
      correlationId
    });
  }
  infoPii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Info,
      containsPii: true,
      correlationId
    });
  }
  verbose(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: false,
      correlationId
    });
  }
  verbosePii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Verbose,
      containsPii: true,
      correlationId
    });
  }
  trace(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: false,
      correlationId
    });
  }
  tracePii(message, correlationId) {
    this.logMessage(message, {
      logLevel: LogLevel.Trace,
      containsPii: true,
      correlationId
    });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || false;
  }
}
var LogLevel, CACHE_CAPACITY = 50, MAX_LOGS_PER_CORRELATION = 500, correlationCache;
var init_Logger = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  (function(LogLevel2) {
    LogLevel2[LogLevel2["Error"] = 0] = "Error";
    LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
    LogLevel2[LogLevel2["Info"] = 2] = "Info";
    LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
    LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
  })(LogLevel || (LogLevel = {}));
  correlationCache = new Map;
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/packageMetadata.mjs
var name = "@azure/msal-common", version = "16.4.1";
var init_packageMetadata = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/AuthorityOptions.mjs
var AzureCloudInstance;
var init_AuthorityOptions = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  AzureCloudInstance = {
    None: "none",
    AzurePublic: "https://login.microsoftonline.com",
    AzurePpe: "https://login.windows-ppe.net",
    AzureChina: "https://login.chinacloudapi.cn",
    AzureGermany: "https://login.microsoftonline.de",
    AzureUsGovernment: "https://login.microsoftonline.us"
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/account/AccountInfo.mjs
function tenantIdMatchesHomeTenant(tenantId, homeAccountId) {
  return !!tenantId && !!homeAccountId && tenantId === homeAccountId.split(".")[1];
}
function buildTenantProfile(homeAccountId, localAccountId, tenantId, idTokenClaims) {
  if (idTokenClaims) {
    const { oid, sub, tid, name: name2, tfp, acr, preferred_username, upn, login_hint } = idTokenClaims;
    const tenantId2 = tid || tfp || acr || "";
    return {
      tenantId: tenantId2,
      localAccountId: oid || sub || "",
      name: name2,
      username: preferred_username || upn || "",
      loginHint: login_hint,
      isHomeTenant: tenantIdMatchesHomeTenant(tenantId2, homeAccountId)
    };
  } else {
    return {
      tenantId,
      localAccountId,
      username: "",
      isHomeTenant: tenantIdMatchesHomeTenant(tenantId, homeAccountId)
    };
  }
}
function updateAccountTenantProfileData(baseAccountInfo, tenantProfile, idTokenClaims, idTokenSecret) {
  let updatedAccountInfo = baseAccountInfo;
  if (tenantProfile) {
    const { isHomeTenant, ...tenantProfileOverride } = tenantProfile;
    updatedAccountInfo = { ...baseAccountInfo, ...tenantProfileOverride };
  }
  if (idTokenClaims) {
    const { isHomeTenant, ...claimsSourcedTenantProfile } = buildTenantProfile(baseAccountInfo.homeAccountId, baseAccountInfo.localAccountId, baseAccountInfo.tenantId, idTokenClaims);
    updatedAccountInfo = {
      ...updatedAccountInfo,
      ...claimsSourcedTenantProfile,
      idTokenClaims,
      idToken: idTokenSecret
    };
    return updatedAccountInfo;
  }
  return updatedAccountInfo;
}
var init_AccountInfo = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/account/AuthToken.mjs
var exports_AuthToken = {};
__export(exports_AuthToken, {
  isKmsi: () => isKmsi,
  getJWSPayload: () => getJWSPayload,
  extractTokenClaims: () => extractTokenClaims,
  checkMaxAge: () => checkMaxAge
});
function extractTokenClaims(encodedToken, base64Decode) {
  const jswPayload = getJWSPayload(encodedToken);
  try {
    const base64Decoded = base64Decode(jswPayload);
    return JSON.parse(base64Decoded);
  } catch (err) {
    throw createClientAuthError(tokenParsingError);
  }
}
function isKmsi(idTokenClaims) {
  if (!idTokenClaims.signin_state) {
    return false;
  }
  const kmsiClaims = ["kmsi", "dvc_dmjd"];
  return idTokenClaims.signin_state.some((value) => kmsiClaims.includes(value.trim().toLowerCase()));
}
function getJWSPayload(authToken) {
  if (!authToken) {
    throw createClientAuthError(nullOrEmptyToken);
  }
  const tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
  const matches = tokenPartsRegex.exec(authToken);
  if (!matches || matches.length < 4) {
    throw createClientAuthError(tokenParsingError);
  }
  return matches[2];
}
function checkMaxAge(authTime, maxAge) {
  const fiveMinuteSkew = 300000;
  if (maxAge === 0 || Date.now() - fiveMinuteSkew > authTime + maxAge) {
    throw createClientAuthError(maxAgeTranspired);
  }
}
var init_AuthToken = __esm(() => {
  init_ClientAuthError();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/url/UrlString.mjs
class UrlString {
  get urlString() {
    return this._urlString;
  }
  constructor(url) {
    this._urlString = url;
    if (!this._urlString) {
      throw createClientConfigurationError(urlEmptyError);
    }
    if (!url.includes("#")) {
      this._urlString = UrlString.canonicalizeUri(url);
    }
  }
  static canonicalizeUri(url) {
    if (url) {
      let lowerCaseUrl = url.toLowerCase();
      if (StringUtils.endsWith(lowerCaseUrl, "?")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -1);
      } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
        lowerCaseUrl = lowerCaseUrl.slice(0, -2);
      }
      if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
        lowerCaseUrl += "/";
      }
      return lowerCaseUrl;
    }
    return url;
  }
  validateAsUri() {
    let components;
    try {
      components = this.getUrlComponents();
    } catch (e) {
      throw createClientConfigurationError(urlParseError);
    }
    if (!components.HostNameAndPort || !components.PathSegments) {
      throw createClientConfigurationError(urlParseError);
    }
    if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
      throw createClientConfigurationError(authorityUriInsecure);
    }
  }
  static appendQueryString(url, queryString) {
    if (!queryString) {
      return url;
    }
    return url.indexOf("?") < 0 ? `${url}?${queryString}` : `${url}&${queryString}`;
  }
  static removeHashFromUrl(url) {
    return UrlString.canonicalizeUri(url.split("#")[0]);
  }
  replaceTenantPath(tenantId) {
    const urlObject = this.getUrlComponents();
    const pathArray = urlObject.PathSegments;
    if (tenantId && pathArray.length !== 0 && (pathArray[0] === AADAuthority.COMMON || pathArray[0] === AADAuthority.ORGANIZATIONS)) {
      pathArray[0] = tenantId;
    }
    return UrlString.constructAuthorityUriFromObject(urlObject);
  }
  getUrlComponents() {
    const regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    const match = this.urlString.match(regEx);
    if (!match) {
      throw createClientConfigurationError(urlParseError);
    }
    const urlComponents = {
      Protocol: match[1],
      HostNameAndPort: match[4],
      AbsolutePath: match[5],
      QueryString: match[7]
    };
    let pathSegments = urlComponents.AbsolutePath.split("/");
    pathSegments = pathSegments.filter((val) => val && val.length > 0);
    urlComponents.PathSegments = pathSegments;
    if (urlComponents.QueryString && urlComponents.QueryString.endsWith("/")) {
      urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
    }
    return urlComponents;
  }
  static getDomainFromUrl(url) {
    const regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
    const match = url.match(regEx);
    if (!match) {
      throw createClientConfigurationError(urlParseError);
    }
    return match[2];
  }
  static getAbsoluteUrl(relativeUrl, baseUrl) {
    if (relativeUrl[0] === FORWARD_SLASH) {
      const url = new UrlString(baseUrl);
      const baseComponents = url.getUrlComponents();
      return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
    }
    return relativeUrl;
  }
  static constructAuthorityUriFromObject(urlObject) {
    return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
  }
}
var init_UrlString = __esm(() => {
  init_ClientConfigurationError();
  init_StringUtils();
  init_Constants();
  init_ClientConfigurationErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.mjs
function buildOpenIdConfig(host, issuerHost) {
  return {
    token_endpoint: `https://${host}/{tenantid}/oauth2/v2.0/token`,
    jwks_uri: `https://${host}/{tenantid}/discovery/v2.0/keys`,
    issuer: `https://${issuerHost}/{tenantid}/v2.0`,
    authorization_endpoint: `https://${host}/{tenantid}/oauth2/v2.0/authorize`,
    end_session_endpoint: `https://${host}/{tenantid}/oauth2/v2.0/logout`
  };
}
function getAliasesFromStaticSources(staticAuthorityOptions, logger3, correlationId) {
  let staticAliases;
  const canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
  if (canonicalAuthority) {
    const authorityHost = new UrlString(canonicalAuthority).getUrlComponents().HostNameAndPort;
    staticAliases = getAliasesFromMetadata(logger3, correlationId, authorityHost, staticAuthorityOptions.cloudDiscoveryMetadata?.metadata, AuthorityMetadataSource.CONFIG) || getAliasesFromMetadata(logger3, correlationId, authorityHost, InstanceDiscoveryMetadata.metadata, AuthorityMetadataSource.HARDCODED_VALUES) || staticAuthorityOptions.knownAuthorities;
  }
  return staticAliases || [];
}
function getAliasesFromMetadata(logger3, correlationId, authorityHost, cloudDiscoveryMetadata, source) {
  logger3.trace(`getAliasesFromMetadata called with source: '${source}'`, correlationId);
  if (authorityHost && cloudDiscoveryMetadata) {
    const metadata = getCloudDiscoveryMetadataFromNetworkResponse(cloudDiscoveryMetadata, authorityHost);
    if (metadata) {
      logger3.trace(`getAliasesFromMetadata: found cloud discovery metadata in '${source}', returning aliases`, correlationId);
      return metadata.aliases;
    } else {
      logger3.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in '${source}'`, correlationId);
    }
  }
  return null;
}
function getCloudDiscoveryMetadataFromHardcodedValues(authorityHost) {
  const metadata = getCloudDiscoveryMetadataFromNetworkResponse(InstanceDiscoveryMetadata.metadata, authorityHost);
  return metadata;
}
function getCloudDiscoveryMetadataFromNetworkResponse(response, authorityHost) {
  for (let i = 0;i < response.length; i++) {
    const metadata = response[i];
    if (metadata.aliases.includes(authorityHost)) {
      return metadata;
    }
  }
  return null;
}
var endpointHosts, dynamicEndpointMetadata, rawMetdataJSON, EndpointMetadata, InstanceDiscoveryMetadata, InstanceDiscoveryMetadataAliases;
var init_AuthorityMetadata = __esm(() => {
  init_UrlString();
  init_Constants();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  endpointHosts = [
    { host: "login.microsoftonline.com" },
    {
      host: "login.chinacloudapi.cn",
      issuerHost: "login.partner.microsoftonline.cn"
    },
    { host: "login.microsoftonline.us" },
    { host: "login.sovcloud-identity.fr" },
    { host: "login.sovcloud-identity.de" },
    { host: "login.sovcloud-identity.sg" }
  ];
  dynamicEndpointMetadata = endpointHosts.reduce((acc, { host, issuerHost }) => {
    acc[host] = buildOpenIdConfig(host, issuerHost || host);
    return acc;
  }, {});
  rawMetdataJSON = {
    endpointMetadata: dynamicEndpointMetadata,
    instanceDiscoveryMetadata: {
      metadata: [
        {
          preferred_network: "login.microsoftonline.com",
          preferred_cache: "login.windows.net",
          aliases: [
            "login.microsoftonline.com",
            "login.windows.net",
            "login.microsoft.com",
            "sts.windows.net"
          ]
        },
        {
          preferred_network: "login.partner.microsoftonline.cn",
          preferred_cache: "login.partner.microsoftonline.cn",
          aliases: [
            "login.partner.microsoftonline.cn",
            "login.chinacloudapi.cn"
          ]
        },
        {
          preferred_network: "login.microsoftonline.de",
          preferred_cache: "login.microsoftonline.de",
          aliases: ["login.microsoftonline.de"]
        },
        {
          preferred_network: "login.microsoftonline.us",
          preferred_cache: "login.microsoftonline.us",
          aliases: [
            "login.microsoftonline.us",
            "login.usgovcloudapi.net"
          ]
        },
        {
          preferred_network: "login-us.microsoftonline.com",
          preferred_cache: "login-us.microsoftonline.com",
          aliases: ["login-us.microsoftonline.com"]
        },
        {
          preferred_network: "login.sovcloud-identity.fr",
          preferred_cache: "login.sovcloud-identity.fr",
          aliases: ["login.sovcloud-identity.fr"]
        },
        {
          preferred_network: "login.sovcloud-identity.de",
          preferred_cache: "login.sovcloud-identity.de",
          aliases: ["login.sovcloud-identity.de"]
        },
        {
          preferred_network: "login.sovcloud-identity.sg",
          preferred_cache: "login.sovcloud-identity.sg",
          aliases: ["login.sovcloud-identity.sg"]
        }
      ]
    }
  };
  EndpointMetadata = rawMetdataJSON.endpointMetadata;
  InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;
  InstanceDiscoveryMetadataAliases = new Set;
  InstanceDiscoveryMetadata.metadata.forEach((metadataEntry) => {
    metadataEntry.aliases.forEach((alias) => {
      InstanceDiscoveryMetadataAliases.add(alias);
    });
  });
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/CacheErrorCodes.mjs
var cacheQuotaExceeded = "cache_quota_exceeded", cacheErrorUnknown = "cache_error_unknown";
var init_CacheErrorCodes = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/CacheError.mjs
function createCacheError(e) {
  if (!(e instanceof Error)) {
    return new CacheError(cacheErrorUnknown);
  }
  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) {
    return new CacheError(cacheQuotaExceeded);
  } else {
    return new CacheError(e.name, e.message);
  }
}
var CacheError;
var init_CacheError = __esm(() => {
  init_CacheErrorCodes();
  init_AuthError();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  CacheError = class CacheError extends Error {
    constructor(errorCode, errorMessage) {
      const message = errorMessage || getDefaultErrorMessage(errorCode);
      super(message);
      Object.setPrototypeOf(this, CacheError.prototype);
      this.name = "CacheError";
      this.errorCode = errorCode;
      this.errorMessage = message;
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/account/ClientInfo.mjs
function buildClientInfo(rawClientInfo, base64Decode) {
  if (!rawClientInfo) {
    throw createClientAuthError(clientInfoEmptyError);
  }
  try {
    const decodedClientInfo = base64Decode(rawClientInfo);
    return JSON.parse(decodedClientInfo);
  } catch (e) {
    throw createClientAuthError(clientInfoDecodingError);
  }
}
function buildClientInfoFromHomeAccountId(homeAccountId) {
  if (!homeAccountId) {
    throw createClientAuthError(clientInfoDecodingError);
  }
  const clientInfoParts = homeAccountId.split(CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: clientInfoParts[0],
    utid: clientInfoParts.length < 2 ? "" : clientInfoParts[1]
  };
}
var init_ClientInfo = __esm(() => {
  init_ClientAuthError();
  init_Constants();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/AuthorityType.mjs
var AuthorityType;
var init_AuthorityType = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  AuthorityType = {
    Default: 0,
    Adfs: 1,
    Dsts: 2,
    Ciam: 3
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/account/TokenClaims.mjs
function getTenantIdFromIdTokenClaims(idTokenClaims) {
  if (idTokenClaims) {
    const tenantId = idTokenClaims.tid || idTokenClaims.tfp || idTokenClaims.acr;
    return tenantId || null;
  }
  return null;
}
var init_TokenClaims = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/ProtocolMode.mjs
var ProtocolMode;
var init_ProtocolMode = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  ProtocolMode = {
    AAD: "AAD",
    OIDC: "OIDC",
    EAR: "EAR"
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/cache/utils/AccountEntityUtils.mjs
var exports_AccountEntityUtils = {};
__export(exports_AccountEntityUtils, {
  isSingleTenant: () => isSingleTenant,
  isAccountEntity: () => isAccountEntity,
  getAccountInfo: () => getAccountInfo,
  generateHomeAccountId: () => generateHomeAccountId,
  generateAccountId: () => generateAccountId,
  createAccountEntityFromAccountInfo: () => createAccountEntityFromAccountInfo,
  createAccountEntity: () => createAccountEntity
});
function generateAccountId(accountEntity) {
  const accountId = [
    accountEntity.homeAccountId,
    accountEntity.environment
  ];
  return accountId.join(CACHE_KEY_SEPARATOR).toLowerCase();
}
function getAccountInfo(accountEntity) {
  const tenantProfiles = accountEntity.tenantProfiles || [];
  if (tenantProfiles.length === 0 && accountEntity.realm && accountEntity.localAccountId) {
    tenantProfiles.push(buildTenantProfile(accountEntity.homeAccountId, accountEntity.localAccountId, accountEntity.realm));
  }
  return {
    homeAccountId: accountEntity.homeAccountId,
    environment: accountEntity.environment,
    tenantId: accountEntity.realm,
    username: accountEntity.username,
    localAccountId: accountEntity.localAccountId,
    loginHint: accountEntity.loginHint,
    name: accountEntity.name,
    nativeAccountId: accountEntity.nativeAccountId,
    authorityType: accountEntity.authorityType,
    tenantProfiles: new Map(tenantProfiles.map((tenantProfile) => {
      return [tenantProfile.tenantId, tenantProfile];
    })),
    dataBoundary: accountEntity.dataBoundary
  };
}
function isSingleTenant(accountEntity) {
  return !accountEntity.tenantProfiles;
}
function createAccountEntity(accountDetails, authority, base64Decode) {
  let authorityType;
  if (authority.authorityType === AuthorityType.Adfs) {
    authorityType = CACHE_ACCOUNT_TYPE_ADFS;
  } else if (authority.protocolMode === ProtocolMode.OIDC) {
    authorityType = CACHE_ACCOUNT_TYPE_GENERIC;
  } else {
    authorityType = CACHE_ACCOUNT_TYPE_MSSTS;
  }
  let clientInfo;
  let dataBoundary;
  if (accountDetails.clientInfo && base64Decode) {
    clientInfo = buildClientInfo(accountDetails.clientInfo, base64Decode);
    if (clientInfo.xms_tdbr) {
      dataBoundary = clientInfo.xms_tdbr === "EU" ? "EU" : "None";
    }
  }
  const env = accountDetails.environment || authority && authority.getPreferredCache();
  if (!env) {
    throw createClientAuthError(invalidCacheEnvironment);
  }
  const preferredUsername = accountDetails.idTokenClaims?.preferred_username || accountDetails.idTokenClaims?.upn;
  const email = accountDetails.idTokenClaims?.emails ? accountDetails.idTokenClaims.emails[0] : null;
  const username = preferredUsername || email || "";
  const loginHint = accountDetails.idTokenClaims?.login_hint;
  const realm = clientInfo?.utid || getTenantIdFromIdTokenClaims(accountDetails.idTokenClaims) || "";
  const localAccountId = clientInfo?.uid || accountDetails.idTokenClaims?.oid || accountDetails.idTokenClaims?.sub || "";
  let tenantProfiles;
  if (accountDetails.tenantProfiles) {
    tenantProfiles = accountDetails.tenantProfiles;
  } else {
    const tenantProfile = buildTenantProfile(accountDetails.homeAccountId, localAccountId, realm, accountDetails.idTokenClaims);
    tenantProfiles = [tenantProfile];
  }
  return {
    homeAccountId: accountDetails.homeAccountId,
    environment: env,
    realm,
    localAccountId,
    username,
    authorityType,
    loginHint,
    clientInfo: accountDetails.clientInfo,
    name: accountDetails.idTokenClaims?.name || "",
    lastModificationTime: undefined,
    lastModificationApp: undefined,
    cloudGraphHostName: accountDetails.cloudGraphHostName,
    msGraphHost: accountDetails.msGraphHost,
    nativeAccountId: accountDetails.nativeAccountId,
    tenantProfiles,
    dataBoundary
  };
}
function createAccountEntityFromAccountInfo(accountInfo, cloudGraphHostName, msGraphHost) {
  const tenantProfiles = Array.from(accountInfo.tenantProfiles?.values() || []);
  if (tenantProfiles.length === 0 && accountInfo.tenantId && accountInfo.localAccountId) {
    tenantProfiles.push(buildTenantProfile(accountInfo.homeAccountId, accountInfo.localAccountId, accountInfo.tenantId, accountInfo.idTokenClaims));
  }
  return {
    authorityType: accountInfo.authorityType || CACHE_ACCOUNT_TYPE_GENERIC,
    homeAccountId: accountInfo.homeAccountId,
    localAccountId: accountInfo.localAccountId,
    nativeAccountId: accountInfo.nativeAccountId,
    realm: accountInfo.tenantId,
    environment: accountInfo.environment,
    username: accountInfo.username,
    loginHint: accountInfo.loginHint,
    name: accountInfo.name,
    cloudGraphHostName,
    msGraphHost,
    tenantProfiles,
    dataBoundary: accountInfo.dataBoundary
  };
}
function generateHomeAccountId(serverClientInfo, authType, logger3, cryptoObj, correlationId, idTokenClaims) {
  if (!(authType === AuthorityType.Adfs || authType === AuthorityType.Dsts)) {
    if (serverClientInfo) {
      try {
        const clientInfo = buildClientInfo(serverClientInfo, cryptoObj.base64Decode);
        if (clientInfo.uid && clientInfo.utid) {
          return `${clientInfo.uid}.${clientInfo.utid}`;
        }
      } catch (e) {}
    }
    logger3.warning("No client info in response", correlationId);
  }
  return idTokenClaims?.sub || "";
}
function isAccountEntity(entity) {
  if (!entity) {
    return false;
  }
  return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
}
var init_AccountEntityUtils = __esm(() => {
  init_Constants();
  init_ClientInfo();
  init_AccountInfo();
  init_ClientAuthError();
  init_AuthorityType();
  init_TokenClaims();
  init_ProtocolMode();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/cache/CacheManager.mjs
class CacheManager {
  constructor(clientId, cryptoImpl, logger3, performanceClient, staticAuthorityOptions) {
    this.clientId = clientId;
    this.cryptoImpl = cryptoImpl;
    this.commonLogger = logger3.clone(name, version);
    this.staticAuthorityOptions = staticAuthorityOptions;
    this.performanceClient = performanceClient;
  }
  getAllAccounts(accountFilter = {}, correlationId) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(accountFilter, correlationId), correlationId, accountFilter);
  }
  getAccountInfoFilteredBy(accountFilter, correlationId) {
    if (Object.keys(accountFilter).length === 0 || Object.values(accountFilter).every((value) => value === null || value === undefined || value === "")) {
      this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null", correlationId);
      return null;
    }
    const allAccounts = this.getAllAccounts(accountFilter, correlationId);
    if (allAccounts.length > 1) {
      const sortedAccounts = allAccounts.sort((account) => {
        return account.idTokenClaims ? -1 : 1;
      });
      return sortedAccounts[0];
    } else if (allAccounts.length === 1) {
      return allAccounts[0];
    } else {
      return null;
    }
  }
  getBaseAccountInfo(accountFilter, correlationId) {
    const accountEntities = this.getAccountsFilteredBy(accountFilter, correlationId);
    if (accountEntities.length > 0) {
      return getAccountInfo(accountEntities[0]);
    } else {
      return null;
    }
  }
  buildTenantProfiles(cachedAccounts, correlationId, accountFilter) {
    return cachedAccounts.flatMap((accountEntity) => {
      return this.getTenantProfilesFromAccountEntity(accountEntity, correlationId, accountFilter?.tenantId, accountFilter);
    });
  }
  getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, correlationId, tenantProfileFilter) {
    let tenantedAccountInfo = null;
    let idTokenClaims;
    if (tenantProfileFilter) {
      if (!this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter)) {
        return null;
      }
    }
    const idToken = this.getIdToken(accountInfo, correlationId, tokenKeys, tenantProfile.tenantId);
    if (idToken) {
      idTokenClaims = extractTokenClaims(idToken.secret, this.cryptoImpl.base64Decode);
      if (!this.idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter)) {
        return null;
      }
    }
    tenantedAccountInfo = updateAccountTenantProfileData(accountInfo, tenantProfile, idTokenClaims, idToken?.secret);
    return tenantedAccountInfo;
  }
  getTenantProfilesFromAccountEntity(accountEntity, correlationId, targetTenantId, tenantProfileFilter) {
    const accountInfo = getAccountInfo(accountEntity);
    let searchTenantProfiles = accountInfo.tenantProfiles || new Map;
    const tokenKeys = this.getTokenKeys();
    if (targetTenantId) {
      const tenantProfile = searchTenantProfiles.get(targetTenantId);
      if (tenantProfile) {
        searchTenantProfiles = new Map([
          [targetTenantId, tenantProfile]
        ]);
      } else {
        return [];
      }
    }
    const matchingTenantProfiles = [];
    searchTenantProfiles.forEach((tenantProfile) => {
      const tenantedAccountInfo = this.getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, correlationId, tenantProfileFilter);
      if (tenantedAccountInfo) {
        matchingTenantProfiles.push(tenantedAccountInfo);
      }
    });
    return matchingTenantProfiles;
  }
  tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter) {
    if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTenantProfile(tenantProfile, tenantProfileFilter.localAccountId)) {
      return false;
    }
    if (!!tenantProfileFilter.name && !(tenantProfile.name === tenantProfileFilter.name)) {
      return false;
    }
    if (tenantProfileFilter.isHomeTenant !== undefined && !(tenantProfile.isHomeTenant === tenantProfileFilter.isHomeTenant)) {
      return false;
    }
    return true;
  }
  idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter) {
    if (tenantProfileFilter) {
      if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTokenClaims(idTokenClaims, tenantProfileFilter.localAccountId)) {
        return false;
      }
      if (!!tenantProfileFilter.loginHint && !this.matchLoginHintFromTokenClaims(idTokenClaims, tenantProfileFilter.loginHint)) {
        return false;
      }
      if (!!tenantProfileFilter.username && !this.matchUsername(idTokenClaims.preferred_username, tenantProfileFilter.username)) {
        return false;
      }
      if (!!tenantProfileFilter.name && !this.matchName(idTokenClaims, tenantProfileFilter.name)) {
        return false;
      }
      if (!!tenantProfileFilter.sid && !this.matchSid(idTokenClaims, tenantProfileFilter.sid)) {
        return false;
      }
    }
    return true;
  }
  async saveCacheRecord(cacheRecord, correlationId, kmsi, apiId, storeInCache) {
    if (!cacheRecord) {
      throw createClientAuthError(invalidCacheRecord);
    }
    try {
      if (!!cacheRecord.account) {
        await this.setAccount(cacheRecord.account, correlationId, kmsi, apiId);
      }
      if (!!cacheRecord.idToken && storeInCache?.idToken !== false) {
        await this.setIdTokenCredential(cacheRecord.idToken, correlationId, kmsi);
      }
      if (!!cacheRecord.accessToken && storeInCache?.accessToken !== false) {
        await this.saveAccessToken(cacheRecord.accessToken, correlationId, kmsi);
      }
      if (!!cacheRecord.refreshToken && storeInCache?.refreshToken !== false) {
        await this.setRefreshTokenCredential(cacheRecord.refreshToken, correlationId, kmsi);
      }
      if (!!cacheRecord.appMetadata) {
        this.setAppMetadata(cacheRecord.appMetadata, correlationId);
      }
    } catch (e) {
      this.commonLogger?.error(`CacheManager.saveCacheRecord: failed`, correlationId);
      if (e instanceof AuthError) {
        throw e;
      } else {
        throw createCacheError(e);
      }
    }
  }
  async saveAccessToken(credential, correlationId, kmsi) {
    const accessTokenFilter = {
      clientId: credential.clientId,
      credentialType: credential.credentialType,
      environment: credential.environment,
      homeAccountId: credential.homeAccountId,
      realm: credential.realm,
      tokenType: credential.tokenType
    };
    const tokenKeys = this.getTokenKeys();
    const currentScopes = ScopeSet.fromString(credential.target);
    tokenKeys.accessToken.forEach((key) => {
      if (!this.accessTokenKeyMatchesFilter(key, accessTokenFilter, false)) {
        return;
      }
      const tokenEntity = this.getAccessTokenCredential(key, correlationId);
      if (tokenEntity && this.credentialMatchesFilter(tokenEntity, accessTokenFilter, correlationId)) {
        const tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
        if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
          this.removeAccessToken(key, correlationId);
        }
      }
    });
    await this.setAccessTokenCredential(credential, correlationId, kmsi);
  }
  getAccountsFilteredBy(accountFilter, correlationId) {
    const allAccountKeys = this.getAccountKeys();
    const matchingAccounts = [];
    allAccountKeys.forEach((cacheKey) => {
      const entity = this.getAccount(cacheKey, correlationId);
      if (!entity) {
        return;
      }
      if (!!accountFilter.homeAccountId && !this.matchHomeAccountId(entity, accountFilter.homeAccountId)) {
        return;
      }
      if (!!accountFilter.username && !this.matchUsername(entity.username, accountFilter.username)) {
        return;
      }
      if (!!accountFilter.environment && !this.matchEnvironment(entity, accountFilter.environment, correlationId)) {
        return;
      }
      if (!!accountFilter.realm && !this.matchRealm(entity, accountFilter.realm)) {
        return;
      }
      if (!!accountFilter.nativeAccountId && !this.matchNativeAccountId(entity, accountFilter.nativeAccountId)) {
        return;
      }
      if (!!accountFilter.authorityType && !this.matchAuthorityType(entity, accountFilter.authorityType)) {
        return;
      }
      const tenantProfileFilter = {
        localAccountId: accountFilter?.localAccountId,
        name: accountFilter?.name
      };
      const matchingTenantProfiles = entity.tenantProfiles?.filter((tenantProfile) => {
        return this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter);
      });
      if (matchingTenantProfiles && matchingTenantProfiles.length === 0) {
        return;
      }
      matchingAccounts.push(entity);
    });
    return matchingAccounts;
  }
  credentialMatchesFilter(entity, filter, correlationId) {
    if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
      return false;
    }
    if (!!filter.userAssertionHash && !this.matchUserAssertionHash(entity, filter.userAssertionHash)) {
      return false;
    }
    if (typeof filter.homeAccountId === "string" && !this.matchHomeAccountId(entity, filter.homeAccountId)) {
      return false;
    }
    if (!!filter.environment && !this.matchEnvironment(entity, filter.environment, correlationId)) {
      return false;
    }
    if (!!filter.realm && !this.matchRealm(entity, filter.realm)) {
      return false;
    }
    if (!!filter.credentialType && !this.matchCredentialType(entity, filter.credentialType)) {
      return false;
    }
    if (!!filter.familyId && !this.matchFamilyId(entity, filter.familyId)) {
      return false;
    }
    if (!!filter.target && !this.matchTarget(entity, filter.target)) {
      return false;
    }
    if (entity.credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!!filter.tokenType && !this.matchTokenType(entity, filter.tokenType)) {
        return false;
      }
      if (filter.tokenType === AuthenticationScheme.SSH) {
        if (filter.keyId && !this.matchKeyId(entity, filter.keyId)) {
          return false;
        }
      }
    }
    return true;
  }
  getAppMetadataFilteredBy(filter, correlationId) {
    const allCacheKeys = this.getKeys();
    const matchingAppMetadata = {};
    allCacheKeys.forEach((cacheKey) => {
      if (!this.isAppMetadata(cacheKey)) {
        return;
      }
      const entity = this.getAppMetadata(cacheKey, correlationId);
      if (!entity) {
        return;
      }
      if (!!filter.environment && !this.matchEnvironment(entity, filter.environment, correlationId)) {
        return;
      }
      if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
        return;
      }
      matchingAppMetadata[cacheKey] = entity;
    });
    return matchingAppMetadata;
  }
  getAuthorityMetadataByAlias(host, correlationId) {
    const allCacheKeys = this.getAuthorityMetadataKeys();
    let matchedEntity = null;
    allCacheKeys.forEach((cacheKey) => {
      if (!this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(this.clientId) === -1) {
        return;
      }
      const entity = this.getAuthorityMetadata(cacheKey, correlationId);
      if (!entity) {
        return;
      }
      if (entity.aliases.indexOf(host) === -1) {
        return;
      }
      matchedEntity = entity;
    });
    return matchedEntity;
  }
  removeAllAccounts(correlationId) {
    const accounts = this.getAllAccounts({}, correlationId);
    accounts.forEach((account) => {
      this.removeAccount(account, correlationId);
    });
  }
  removeAccount(account, correlationId) {
    this.removeAccountContext(account, correlationId);
    const accountKeys = this.getAccountKeys();
    const keyFilter = (key) => {
      return key.includes(account.homeAccountId) && key.includes(account.environment);
    };
    accountKeys.filter(keyFilter).forEach((key) => {
      this.removeItem(key, correlationId);
      this.performanceClient.incrementFields({ accountsRemoved: 1 }, correlationId);
    });
  }
  removeAccountContext(account, correlationId) {
    const allTokenKeys = this.getTokenKeys();
    const keyFilter = (key) => {
      return key.includes(account.homeAccountId) && key.includes(account.environment);
    };
    allTokenKeys.idToken.filter(keyFilter).forEach((key) => {
      this.removeIdToken(key, correlationId);
    });
    allTokenKeys.accessToken.filter(keyFilter).forEach((key) => {
      this.removeAccessToken(key, correlationId);
    });
    allTokenKeys.refreshToken.filter(keyFilter).forEach((key) => {
      this.removeRefreshToken(key, correlationId);
    });
  }
  removeAccessToken(key, correlationId) {
    const credential = this.getAccessTokenCredential(key, correlationId);
    if (!credential) {
      return;
    }
    this.removeItem(key, correlationId);
    this.performanceClient.incrementFields({ accessTokensRemoved: 1 }, correlationId);
    if (credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) {
      if (credential.tokenType === AuthenticationScheme.POP) {
        const accessTokenWithAuthSchemeEntity = credential;
        const kid = accessTokenWithAuthSchemeEntity.keyId;
        if (kid) {
          this.cryptoImpl.removeTokenBindingKey(kid, correlationId).catch(() => {
            this.commonLogger.error(`Failed to remove token binding key '${kid}'`, correlationId);
            this.performanceClient?.incrementFields({ removeTokenBindingKeyFailure: 1 }, correlationId);
          });
        }
      }
    }
  }
  removeAppMetadata(correlationId) {
    const allCacheKeys = this.getKeys();
    allCacheKeys.forEach((cacheKey) => {
      if (this.isAppMetadata(cacheKey)) {
        this.removeItem(cacheKey, correlationId);
      }
    });
    return true;
  }
  getIdToken(account, correlationId, tokenKeys, targetRealm) {
    this.commonLogger.trace("CacheManager - getIdToken called", correlationId);
    const idTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.ID_TOKEN,
      clientId: this.clientId,
      realm: targetRealm
    };
    const idTokenMap = this.getIdTokensByFilter(idTokenFilter, correlationId, tokenKeys);
    const numIdTokens = idTokenMap.size;
    if (numIdTokens < 1) {
      this.commonLogger.info("CacheManager:getIdToken - No token found", correlationId);
      return null;
    } else if (numIdTokens > 1) {
      let tokensToBeRemoved = idTokenMap;
      if (!targetRealm) {
        const homeIdTokenMap = new Map;
        idTokenMap.forEach((idToken, key) => {
          if (idToken.realm === account.tenantId) {
            homeIdTokenMap.set(key, idToken);
          }
        });
        const numHomeIdTokens = homeIdTokenMap.size;
        if (numHomeIdTokens < 1) {
          this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result", correlationId);
          return idTokenMap.values().next().value;
        } else if (numHomeIdTokens === 1) {
          this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile", correlationId);
          return homeIdTokenMap.values().next().value;
        } else {
          tokensToBeRemoved = homeIdTokenMap;
        }
      }
      this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them", correlationId);
      tokensToBeRemoved.forEach((idToken, key) => {
        this.removeIdToken(key, correlationId);
      });
      this.performanceClient.addFields({ multiMatchedID: idTokenMap.size }, correlationId);
      return null;
    }
    this.commonLogger.info("CacheManager:getIdToken - Returning ID token", correlationId);
    return idTokenMap.values().next().value;
  }
  getIdTokensByFilter(filter, correlationId, tokenKeys) {
    const idTokenKeys = tokenKeys && tokenKeys.idToken || this.getTokenKeys().idToken;
    const idTokens = new Map;
    idTokenKeys.forEach((key) => {
      if (!this.idTokenKeyMatchesFilter(key, {
        clientId: this.clientId,
        ...filter
      })) {
        return;
      }
      const idToken = this.getIdTokenCredential(key, correlationId);
      if (idToken && this.credentialMatchesFilter(idToken, filter, correlationId)) {
        idTokens.set(key, idToken);
      }
    });
    return idTokens;
  }
  idTokenKeyMatchesFilter(inputKey, filter) {
    const key = inputKey.toLowerCase();
    if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  removeIdToken(key, correlationId) {
    this.removeItem(key, correlationId);
  }
  removeRefreshToken(key, correlationId) {
    this.removeItem(key, correlationId);
  }
  getAccessToken(account, request, tokenKeys, targetRealm) {
    const correlationId = request.correlationId;
    this.commonLogger.trace("CacheManager - getAccessToken called", correlationId);
    const scopes = ScopeSet.createSearchScopes(request.scopes);
    const authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
    const credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
    const accessTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType,
      clientId: this.clientId,
      realm: targetRealm || account.tenantId,
      target: scopes,
      tokenType: authScheme,
      keyId: request.sshKid
    };
    const accessTokenKeys = tokenKeys && tokenKeys.accessToken || this.getTokenKeys().accessToken;
    const accessTokens = [];
    accessTokenKeys.forEach((key) => {
      if (this.accessTokenKeyMatchesFilter(key, accessTokenFilter, true)) {
        const accessToken = this.getAccessTokenCredential(key, correlationId);
        if (accessToken && this.credentialMatchesFilter(accessToken, accessTokenFilter, correlationId)) {
          accessTokens.push(accessToken);
        }
      }
    });
    const numAccessTokens = accessTokens.length;
    if (numAccessTokens < 1) {
      this.commonLogger.info("CacheManager:getAccessToken - No token found", correlationId);
      return null;
    } else if (numAccessTokens > 1) {
      this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", correlationId);
      accessTokens.forEach((accessToken) => {
        this.removeAccessToken(this.generateCredentialKey(accessToken), correlationId);
      });
      this.performanceClient.addFields({ multiMatchedAT: accessTokens.length }, correlationId);
      return null;
    }
    this.commonLogger.info("CacheManager:getAccessToken - Returning access token", correlationId);
    return accessTokens[0];
  }
  accessTokenKeyMatchesFilter(inputKey, filter, keyMustContainAllScopes) {
    const key = inputKey.toLowerCase();
    if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.realm && key.indexOf(filter.realm.toLowerCase()) === -1) {
      return false;
    }
    if (filter.target) {
      const scopes = filter.target.asArray();
      for (let i = 0;i < scopes.length; i++) {
        if (keyMustContainAllScopes && !key.includes(scopes[i].toLowerCase())) {
          return false;
        } else if (!keyMustContainAllScopes && key.includes(scopes[i].toLowerCase())) {
          return true;
        }
      }
    }
    return true;
  }
  getAccessTokensByFilter(filter, correlationId) {
    const tokenKeys = this.getTokenKeys();
    const accessTokens = [];
    tokenKeys.accessToken.forEach((key) => {
      if (!this.accessTokenKeyMatchesFilter(key, filter, true)) {
        return;
      }
      const accessToken = this.getAccessTokenCredential(key, correlationId);
      if (accessToken && this.credentialMatchesFilter(accessToken, filter, correlationId)) {
        accessTokens.push(accessToken);
      }
    });
    return accessTokens;
  }
  getRefreshToken(account, familyRT, correlationId, tokenKeys) {
    this.commonLogger.trace("CacheManager - getRefreshToken called", correlationId);
    const id = familyRT ? THE_FAMILY_ID : undefined;
    const refreshTokenFilter = {
      homeAccountId: account.homeAccountId,
      environment: account.environment,
      credentialType: CredentialType.REFRESH_TOKEN,
      clientId: this.clientId,
      familyId: id
    };
    const refreshTokenKeys = tokenKeys && tokenKeys.refreshToken || this.getTokenKeys().refreshToken;
    const refreshTokens = [];
    refreshTokenKeys.forEach((key) => {
      if (this.refreshTokenKeyMatchesFilter(key, refreshTokenFilter)) {
        const refreshToken = this.getRefreshTokenCredential(key, correlationId);
        if (refreshToken && this.credentialMatchesFilter(refreshToken, refreshTokenFilter, correlationId)) {
          refreshTokens.push(refreshToken);
        }
      }
    });
    const numRefreshTokens = refreshTokens.length;
    if (numRefreshTokens < 1) {
      this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found.", correlationId);
      return null;
    }
    if (numRefreshTokens > 1) {
      this.performanceClient.addFields({ multiMatchedRT: numRefreshTokens }, correlationId);
    }
    this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token", correlationId);
    return refreshTokens[0];
  }
  refreshTokenKeyMatchesFilter(inputKey, filter) {
    const key = inputKey.toLowerCase();
    if (filter.familyId && key.indexOf(filter.familyId.toLowerCase()) === -1) {
      return false;
    }
    if (!filter.familyId && filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
      return false;
    }
    if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
  readAppMetadataFromCache(environment, correlationId) {
    const appMetadataFilter = {
      environment,
      clientId: this.clientId
    };
    const appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter, correlationId);
    const appMetadataEntries = Object.keys(appMetadata).map((key) => appMetadata[key]);
    const numAppMetadata = appMetadataEntries.length;
    if (numAppMetadata < 1) {
      return null;
    } else if (numAppMetadata > 1) {
      throw createClientAuthError(multipleMatchingAppMetadata);
    }
    return appMetadataEntries[0];
  }
  isAppMetadataFOCI(environment, correlationId) {
    const appMetadata = this.readAppMetadataFromCache(environment, correlationId);
    return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
  }
  matchHomeAccountId(entity, homeAccountId) {
    return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
  }
  matchLocalAccountIdFromTokenClaims(tokenClaims, localAccountId) {
    const idTokenLocalAccountId = tokenClaims.oid || tokenClaims.sub;
    return localAccountId === idTokenLocalAccountId;
  }
  matchLocalAccountIdFromTenantProfile(tenantProfile, localAccountId) {
    return tenantProfile.localAccountId === localAccountId;
  }
  matchName(claims, name2) {
    return !!(name2.toLowerCase() === claims.name?.toLowerCase());
  }
  matchUsername(cachedUsername, filterUsername) {
    return !!(cachedUsername && typeof cachedUsername === "string" && filterUsername?.toLowerCase() === cachedUsername.toLowerCase());
  }
  matchUserAssertionHash(entity, userAssertionHash) {
    return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
  }
  matchEnvironment(entity, environment, correlationId) {
    if (this.staticAuthorityOptions) {
      const staticAliases = getAliasesFromStaticSources(this.staticAuthorityOptions, this.commonLogger, correlationId);
      if (staticAliases.includes(environment) && staticAliases.includes(entity.environment)) {
        return true;
      }
    }
    const cloudMetadata = this.getAuthorityMetadataByAlias(environment, correlationId);
    if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
      return true;
    }
    return false;
  }
  matchCredentialType(entity, credentialType) {
    return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
  }
  matchClientId(entity, clientId) {
    return !!(entity.clientId && clientId === entity.clientId);
  }
  matchFamilyId(entity, familyId) {
    return !!(entity.familyId && familyId === entity.familyId);
  }
  matchRealm(entity, realm) {
    return !!(entity.realm?.toLowerCase() === realm.toLowerCase());
  }
  matchNativeAccountId(entity, nativeAccountId) {
    return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(tokenClaims, loginHint) {
    if (tokenClaims.login_hint === loginHint) {
      return true;
    }
    if (tokenClaims.preferred_username === loginHint) {
      return true;
    }
    if (tokenClaims.upn === loginHint) {
      return true;
    }
    return false;
  }
  matchSid(idTokenClaims, sid) {
    return idTokenClaims.sid === sid;
  }
  matchAuthorityType(entity, authorityType) {
    return !!(entity.authorityType && authorityType.toLowerCase() === entity.authorityType.toLowerCase());
  }
  matchTarget(entity, target) {
    const isNotAccessTokenCredential = entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    if (isNotAccessTokenCredential || !entity.target) {
      return false;
    }
    const entityScopeSet = ScopeSet.fromString(entity.target);
    return entityScopeSet.containsScopeSet(target);
  }
  matchTokenType(entity, tokenType) {
    return !!(entity.tokenType && entity.tokenType === tokenType);
  }
  matchKeyId(entity, keyId) {
    return !!(entity.keyId && entity.keyId === keyId);
  }
  isAppMetadata(key) {
    return key.indexOf(APP_METADATA) !== -1;
  }
  isAuthorityMetadata(key) {
    return key.indexOf(AUTHORITY_METADATA_CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(authority) {
    return `${AUTHORITY_METADATA_CACHE_KEY}-${this.clientId}-${authority}`;
  }
  static toObject(obj, json) {
    for (const propertyName in json) {
      obj[propertyName] = json[propertyName];
    }
    return obj;
  }
}
var DefaultStorageClass;
var init_CacheManager = __esm(() => {
  init_Constants();
  init_ScopeSet();
  init_ClientAuthError();
  init_AccountInfo();
  init_AuthToken();
  init_packageMetadata();
  init_AuthorityMetadata();
  init_CacheError();
  init_AccountEntityUtils();
  init_AuthError();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  DefaultStorageClass = class DefaultStorageClass extends CacheManager {
    async setAccount() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAccount() {
      throw createClientAuthError(methodNotImplemented);
    }
    async setIdTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    getIdTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    async setAccessTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAccessTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    async setRefreshTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    getRefreshTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    setAppMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAppMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    setServerTelemetry() {
      throw createClientAuthError(methodNotImplemented);
    }
    getServerTelemetry() {
      throw createClientAuthError(methodNotImplemented);
    }
    setAuthorityMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAuthorityMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAuthorityMetadataKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    setThrottlingCache() {
      throw createClientAuthError(methodNotImplemented);
    }
    getThrottlingCache() {
      throw createClientAuthError(methodNotImplemented);
    }
    removeItem() {
      throw createClientAuthError(methodNotImplemented);
    }
    getKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAccountKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    getTokenKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    generateCredentialKey() {
      throw createClientAuthError(methodNotImplemented);
    }
    generateAccountKey() {
      throw createClientAuthError(methodNotImplemented);
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceEvent.mjs
var PerformanceEventStatus, IntFields;
var init_PerformanceEvent = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  PerformanceEventStatus = {
    NotStarted: 0,
    InProgress: 1,
    Completed: 2
  };
  IntFields = new Set([
    "accessTokenSize",
    "durationMs",
    "idTokenSize",
    "matsSilentStatus",
    "matsHttpStatus",
    "refreshTokenSize",
    "startTimeMs",
    "status",
    "multiMatchedAT",
    "multiMatchedID",
    "multiMatchedRT",
    "unencryptedCacheCount",
    "encryptedCacheExpiredCount",
    "oldAccountCount",
    "oldAccessCount",
    "oldIdCount",
    "oldRefreshCount",
    "currAccountCount",
    "currAccessCount",
    "currIdCount",
    "currRefreshCount",
    "expiredCacheRemovedCount",
    "upgradedCacheCount",
    "cacheMatchedAccounts",
    "networkRtt",
    "redirectBridgeTimeoutMs",
    "redirectBridgeMessageVersion"
  ]);
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.mjs
class StubPerformanceClient {
  generateId() {
    return "callback-id";
  }
  startMeasurement(measureName, correlationId) {
    return {
      end: () => null,
      discard: () => {},
      add: () => {},
      increment: () => {},
      event: {
        eventId: this.generateId(),
        status: PerformanceEventStatus.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: measureName,
        startTimeMs: Date.now(),
        correlationId: correlationId || ""
      }
    };
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return true;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
}
var init_StubPerformanceClient = __esm(() => {
  init_PerformanceEvent();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/config/ClientConfiguration.mjs
function buildClientConfiguration({ authOptions: userAuthOptions, systemOptions: userSystemOptions, loggerOptions: userLoggerOption, storageInterface: storageImplementation, networkInterface: networkImplementation, cryptoInterface: cryptoImplementation, clientCredentials, libraryInfo, telemetry, serverTelemetryManager, persistencePlugin, serializableCache }) {
  const loggerOptions = {
    ...DEFAULT_LOGGER_IMPLEMENTATION,
    ...userLoggerOption
  };
  return {
    authOptions: buildAuthOptions(userAuthOptions),
    systemOptions: { ...DEFAULT_SYSTEM_OPTIONS, ...userSystemOptions },
    loggerOptions,
    storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION, new Logger(loggerOptions), new StubPerformanceClient),
    networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
    cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
    clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
    libraryInfo: { ...DEFAULT_LIBRARY_INFO, ...libraryInfo },
    telemetry: { ...DEFAULT_TELEMETRY_OPTIONS, ...telemetry },
    serverTelemetryManager: serverTelemetryManager || null,
    persistencePlugin: persistencePlugin || null,
    serializableCache: serializableCache || null
  };
}
function buildAuthOptions(authOptions) {
  return {
    clientCapabilities: [],
    azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS,
    instanceAware: false,
    isMcp: false,
    ...authOptions
  };
}
function isOidcProtocolMode(config) {
  return config.authOptions.authority.options.protocolMode === ProtocolMode.OIDC;
}
var DEFAULT_SYSTEM_OPTIONS, DEFAULT_LOGGER_IMPLEMENTATION, DEFAULT_NETWORK_IMPLEMENTATION, DEFAULT_LIBRARY_INFO, DEFAULT_CLIENT_CREDENTIALS, DEFAULT_AZURE_CLOUD_OPTIONS, DEFAULT_TELEMETRY_OPTIONS;
var init_ClientConfiguration = __esm(() => {
  init_ICrypto();
  init_Logger();
  init_Constants();
  init_packageMetadata();
  init_AuthorityOptions();
  init_CacheManager();
  init_ProtocolMode();
  init_ClientAuthError();
  init_StubPerformanceClient();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  DEFAULT_SYSTEM_OPTIONS = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
    preventCorsPreflight: false
  };
  DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: () => {},
    piiLoggingEnabled: false,
    logLevel: LogLevel.Info,
    correlationId: ""
  };
  DEFAULT_NETWORK_IMPLEMENTATION = {
    async sendGetRequestAsync() {
      throw createClientAuthError(methodNotImplemented);
    },
    async sendPostRequestAsync() {
      throw createClientAuthError(methodNotImplemented);
    }
  };
  DEFAULT_LIBRARY_INFO = {
    sku: SKU,
    version,
    cpu: "",
    os: ""
  };
  DEFAULT_CLIENT_CREDENTIALS = {
    clientSecret: "",
    clientAssertion: undefined
  };
  DEFAULT_AZURE_CLOUD_OPTIONS = {
    azureCloudInstance: AzureCloudInstance.None,
    tenant: `${DEFAULT_COMMON_TENANT}`
  };
  DEFAULT_TELEMETRY_OPTIONS = {
    application: {
      appName: "",
      appVersion: ""
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/cache/persistence/TokenCacheContext.mjs
class TokenCacheContext {
  constructor(tokenCache, hasChanged) {
    this.cache = tokenCache;
    this.hasChanged = hasChanged;
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
}
var init_TokenCacheContext = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/TimeUtils.mjs
var exports_TimeUtils = {};
__export(exports_TimeUtils, {
  wasClockTurnedBack: () => wasClockTurnedBack,
  toSecondsFromDate: () => toSecondsFromDate,
  toDateFromSeconds: () => toDateFromSeconds,
  nowSeconds: () => nowSeconds,
  isTokenExpired: () => isTokenExpired,
  isCacheExpired: () => isCacheExpired,
  delay: () => delay
});
function nowSeconds() {
  return Math.round(new Date().getTime() / 1000);
}
function toSecondsFromDate(date) {
  return date.getTime() / 1000;
}
function toDateFromSeconds(seconds) {
  if (seconds) {
    return new Date(Number(seconds) * 1000);
  }
  return new Date;
}
function isTokenExpired(expiresOn, offset) {
  const expirationSec = Number(expiresOn) || 0;
  const offsetCurrentTimeSec = nowSeconds() + offset;
  return offsetCurrentTimeSec > expirationSec;
}
function isCacheExpired(lastUpdatedAt, cacheRetentionDays) {
  const cacheExpirationTimestamp = Number(lastUpdatedAt) + cacheRetentionDays * 24 * 60 * 60 * 1000;
  return Date.now() > cacheExpirationTimestamp;
}
function wasClockTurnedBack(cachedAt) {
  const cachedAtSec = Number(cachedAt);
  return cachedAtSec > nowSeconds();
}
function delay(t, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), t));
}
var init_TimeUtils = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/cache/utils/CacheHelpers.mjs
var exports_CacheHelpers = {};
__export(exports_CacheHelpers, {
  updateCloudDiscoveryMetadata: () => updateCloudDiscoveryMetadata,
  updateAuthorityEndpointMetadata: () => updateAuthorityEndpointMetadata,
  isThrottlingEntity: () => isThrottlingEntity,
  isServerTelemetryEntity: () => isServerTelemetryEntity,
  isRefreshTokenEntity: () => isRefreshTokenEntity,
  isIdTokenEntity: () => isIdTokenEntity,
  isCredentialEntity: () => isCredentialEntity,
  isAuthorityMetadataExpired: () => isAuthorityMetadataExpired,
  isAuthorityMetadataEntity: () => isAuthorityMetadataEntity,
  isAppMetadataEntity: () => isAppMetadataEntity,
  isAccessTokenEntity: () => isAccessTokenEntity,
  generateAuthorityMetadataExpiresAt: () => generateAuthorityMetadataExpiresAt,
  generateAppMetadataKey: () => generateAppMetadataKey,
  createRefreshTokenEntity: () => createRefreshTokenEntity,
  createIdTokenEntity: () => createIdTokenEntity,
  createAccessTokenEntity: () => createAccessTokenEntity
});
function createIdTokenEntity(homeAccountId, environment, idToken, clientId, tenantId) {
  const idTokenEntity = {
    credentialType: CredentialType.ID_TOKEN,
    homeAccountId,
    environment,
    clientId,
    secret: idToken,
    realm: tenantId,
    lastUpdatedAt: Date.now().toString()
  };
  return idTokenEntity;
}
function createAccessTokenEntity(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, base64Decode, refreshOn, tokenType, userAssertionHash, keyId) {
  const atEntity = {
    homeAccountId,
    credentialType: CredentialType.ACCESS_TOKEN,
    secret: accessToken,
    cachedAt: nowSeconds().toString(),
    expiresOn: expiresOn.toString(),
    extendedExpiresOn: extExpiresOn.toString(),
    environment,
    clientId,
    realm: tenantId,
    target: scopes,
    tokenType: tokenType || AuthenticationScheme.BEARER,
    lastUpdatedAt: Date.now().toString()
  };
  if (userAssertionHash) {
    atEntity.userAssertionHash = userAssertionHash;
  }
  if (refreshOn) {
    atEntity.refreshOn = refreshOn.toString();
  }
  if (atEntity.tokenType?.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) {
    atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
    switch (atEntity.tokenType) {
      case AuthenticationScheme.POP:
        const tokenClaims = extractTokenClaims(accessToken, base64Decode);
        if (!tokenClaims?.cnf?.kid) {
          throw createClientAuthError(tokenClaimsCnfRequiredForSignedJwt);
        }
        atEntity.keyId = tokenClaims.cnf.kid;
        break;
      case AuthenticationScheme.SSH:
        atEntity.keyId = keyId;
    }
  }
  return atEntity;
}
function createRefreshTokenEntity(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash, expiresOn) {
  const rtEntity = {
    credentialType: CredentialType.REFRESH_TOKEN,
    homeAccountId,
    environment,
    clientId,
    secret: refreshToken,
    lastUpdatedAt: Date.now().toString()
  };
  if (userAssertionHash) {
    rtEntity.userAssertionHash = userAssertionHash;
  }
  if (familyId) {
    rtEntity.familyId = familyId;
  }
  if (expiresOn) {
    rtEntity.expiresOn = expiresOn.toString();
  }
  return rtEntity;
}
function isCredentialEntity(entity) {
  return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret");
}
function isAccessTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity.hasOwnProperty("target") && (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
function isIdTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity["credentialType"] === CredentialType.ID_TOKEN;
}
function isRefreshTokenEntity(entity) {
  if (!entity) {
    return false;
  }
  return isCredentialEntity(entity) && entity["credentialType"] === CredentialType.REFRESH_TOKEN;
}
function isServerTelemetryEntity(key, entity) {
  const validateKey = key.indexOf(SERVER_TELEM_CACHE_KEY) === 0;
  let validateEntity = true;
  if (entity) {
    validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
  }
  return validateKey && validateEntity;
}
function isThrottlingEntity(key, entity) {
  let validateKey = false;
  if (key) {
    validateKey = key.indexOf(THROTTLING_PREFIX) === 0;
  }
  let validateEntity = true;
  if (entity) {
    validateEntity = entity.hasOwnProperty("throttleTime");
  }
  return validateKey && validateEntity;
}
function generateAppMetadataKey({ environment, clientId }) {
  const appMetaDataKeyArray = [
    APP_METADATA,
    environment,
    clientId
  ];
  return appMetaDataKeyArray.join(CACHE_KEY_SEPARATOR).toLowerCase();
}
function isAppMetadataEntity(key, entity) {
  if (!entity) {
    return false;
  }
  return key.indexOf(APP_METADATA) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
}
function isAuthorityMetadataEntity(key, entity) {
  if (!entity) {
    return false;
  }
  return key.indexOf(AUTHORITY_METADATA_CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
}
function generateAuthorityMetadataExpiresAt() {
  return nowSeconds() + AUTHORITY_METADATA_REFRESH_TIME_SECONDS;
}
function updateAuthorityEndpointMetadata(authorityMetadata, updatedValues, fromNetwork) {
  authorityMetadata.authorization_endpoint = updatedValues.authorization_endpoint;
  authorityMetadata.token_endpoint = updatedValues.token_endpoint;
  authorityMetadata.end_session_endpoint = updatedValues.end_session_endpoint;
  authorityMetadata.issuer = updatedValues.issuer;
  authorityMetadata.endpointsFromNetwork = fromNetwork;
  authorityMetadata.jwks_uri = updatedValues.jwks_uri;
}
function updateCloudDiscoveryMetadata(authorityMetadata, updatedValues, fromNetwork) {
  authorityMetadata.aliases = updatedValues.aliases;
  authorityMetadata.preferred_cache = updatedValues.preferred_cache;
  authorityMetadata.preferred_network = updatedValues.preferred_network;
  authorityMetadata.aliasesFromNetwork = fromNetwork;
}
function isAuthorityMetadataExpired(metadata) {
  return metadata.expiresAt <= nowSeconds();
}
var init_CacheHelpers = __esm(() => {
  init_AuthToken();
  init_ClientAuthError();
  init_Constants();
  init_TimeUtils();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceEvents.mjs
var NetworkClientSendPostRequestAsync = "networkClientSendPostRequestAsync", RefreshTokenClientExecutePostToTokenEndpoint = "refreshTokenClientExecutePostToTokenEndpoint", AuthorizationCodeClientExecutePostToTokenEndpoint = "authorizationCodeClientExecutePostToTokenEndpoint", RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", SilentFlowClientGenerateResultFromCacheRecord = "silentFlowClientGenerateResultFromCacheRecord", AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", PopTokenGenerateCnf = "popTokenGenerateCnf", HandleServerTokenResponse = "handleServerTokenResponse", AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", CacheManagerGetRefreshToken = "cacheManagerGetRefreshToken";
var init_PerformanceEvents = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/FunctionWrappers.mjs
var invoke = (callback, eventName, logger3, telemetryClient, correlationId) => {
  return (...args) => {
    logger3.trace(`Executing function '${eventName}'`, correlationId);
    const inProgressEvent = telemetryClient.startMeasurement(eventName, correlationId);
    if (correlationId) {
      telemetryClient.incrementFields({ [`ext.${eventName}CallCount`]: 1 }, correlationId);
    }
    try {
      const result = callback(...args);
      inProgressEvent.end({
        success: true
      });
      logger3.trace(`Returning result from '${eventName}'`, correlationId);
      return result;
    } catch (e) {
      logger3.trace(`Error occurred in '${eventName}'`, correlationId);
      try {
        logger3.trace(JSON.stringify(e), correlationId);
      } catch (e2) {
        logger3.trace("Unable to print error message.", correlationId);
      }
      inProgressEvent.end({
        success: false
      }, e);
      throw e;
    }
  };
}, invokeAsync = (callback, eventName, logger3, telemetryClient, correlationId) => {
  return (...args) => {
    logger3.trace(`Executing function '${eventName}'`, correlationId);
    const inProgressEvent = telemetryClient.startMeasurement(eventName, correlationId);
    if (correlationId) {
      telemetryClient.incrementFields({ [`ext.${eventName}CallCount`]: 1 }, correlationId);
    }
    return callback(...args).then((response) => {
      logger3.trace(`Returning result from '${eventName}'`, correlationId);
      inProgressEvent.end({
        success: true
      });
      return response;
    }).catch((e) => {
      logger3.trace(`Error occurred in '${eventName}'`, correlationId);
      try {
        logger3.trace(JSON.stringify(e), correlationId);
      } catch (e2) {
        logger3.trace("Unable to print error message.", correlationId);
      }
      inProgressEvent.end({
        success: false
      }, e);
      throw e;
    });
  };
};
var init_FunctionWrappers = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/crypto/PopTokenGenerator.mjs
class PopTokenGenerator {
  constructor(cryptoUtils, performanceClient) {
    this.cryptoUtils = cryptoUtils;
    this.performanceClient = performanceClient;
  }
  async generateCnf(request, logger3) {
    const reqCnf = await invokeAsync(this.generateKid.bind(this), PopTokenGenerateCnf, logger3, this.performanceClient, request.correlationId)(request);
    const reqCnfString = this.cryptoUtils.base64UrlEncode(JSON.stringify(reqCnf));
    return {
      kid: reqCnf.kid,
      reqCnfString
    };
  }
  async generateKid(request) {
    const kidThumbprint = await this.cryptoUtils.getPublicKeyThumbprint(request);
    return {
      kid: kidThumbprint,
      xms_ksl: KeyLocation.SW
    };
  }
  async signPopToken(accessToken, keyId, request) {
    return this.signPayload(accessToken, keyId, request);
  }
  async signPayload(payload, keyId, request, claims) {
    const { resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, shrOptions } = request;
    const resourceUrlString = resourceRequestUri ? new UrlString(resourceRequestUri) : undefined;
    const resourceUrlComponents = resourceUrlString?.getUrlComponents();
    return this.cryptoUtils.signJwt({
      at: payload,
      ts: nowSeconds(),
      m: resourceRequestMethod?.toUpperCase(),
      u: resourceUrlComponents?.HostNameAndPort,
      nonce: shrNonce || this.cryptoUtils.createNewGuid(),
      p: resourceUrlComponents?.AbsolutePath,
      q: resourceUrlComponents?.QueryString ? [[], resourceUrlComponents.QueryString] : undefined,
      client_claims: shrClaims || undefined,
      ...claims
    }, keyId, shrOptions, request.correlationId);
  }
}
var KeyLocation;
var init_PopTokenGenerator = __esm(() => {
  init_TimeUtils();
  init_UrlString();
  init_PerformanceEvents();
  init_FunctionWrappers();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  KeyLocation = {
    SW: "sw"
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthErrorCodes.mjs
var exports_InteractionRequiredAuthErrorCodes = {};
__export(exports_InteractionRequiredAuthErrorCodes, {
  uxNotAllowed: () => uxNotAllowed,
  refreshTokenExpired: () => refreshTokenExpired,
  noTokensFound: () => noTokensFound,
  nativeAccountUnavailable: () => nativeAccountUnavailable,
  loginRequired: () => loginRequired,
  interruptedUser: () => interruptedUser,
  interactionRequired: () => interactionRequired,
  consentRequired: () => consentRequired,
  badToken: () => badToken
});
var noTokensFound = "no_tokens_found", nativeAccountUnavailable = "native_account_unavailable", refreshTokenExpired = "refresh_token_expired", uxNotAllowed = "ux_not_allowed", interactionRequired = "interaction_required", consentRequired = "consent_required", loginRequired = "login_required", badToken = "bad_token", interruptedUser = "interrupted_user";
var init_InteractionRequiredAuthErrorCodes = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthError.mjs
function isInteractionRequiredError(errorCode, errorString, subError) {
  const isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
  const isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
  const isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some((irErrorCode) => {
    return errorString.indexOf(irErrorCode) > -1;
  });
  return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
}
function createInteractionRequiredAuthError(errorCode, errorMessage) {
  return new InteractionRequiredAuthError(errorCode, errorMessage);
}
var InteractionRequiredServerErrorMessage, InteractionRequiredAuthSubErrorMessage, InteractionRequiredAuthError;
var init_InteractionRequiredAuthError = __esm(() => {
  init_AuthError();
  init_InteractionRequiredAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  InteractionRequiredServerErrorMessage = [
    interactionRequired,
    consentRequired,
    loginRequired,
    badToken,
    uxNotAllowed,
    interruptedUser
  ];
  InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required",
    "bad_token",
    "ux_not_allowed",
    "interrupted_user"
  ];
  InteractionRequiredAuthError = class InteractionRequiredAuthError extends AuthError {
    constructor(errorCode, errorMessage, subError, timestamp, traceId, correlationId, claims, errorNo) {
      super(errorCode, errorMessage, subError);
      Object.setPrototypeOf(this, InteractionRequiredAuthError.prototype);
      this.timestamp = timestamp || "";
      this.traceId = traceId || "";
      this.correlationId = correlationId || "";
      this.claims = claims || "";
      this.name = "InteractionRequiredAuthError";
      this.errorNo = errorNo;
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/ServerError.mjs
var ServerError;
var init_ServerError = __esm(() => {
  init_AuthError();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  ServerError = class ServerError extends AuthError {
    constructor(errorCode, errorMessage, subError, errorNo, status) {
      super(errorCode, errorMessage, subError);
      this.name = "ServerError";
      this.errorNo = errorNo;
      this.status = status;
      Object.setPrototypeOf(this, ServerError.prototype);
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/ProtocolUtils.mjs
function parseRequestState(base64Decode, state2) {
  if (!base64Decode) {
    throw createClientAuthError(noCryptoObject);
  }
  if (!state2) {
    throw createClientAuthError(invalidState);
  }
  try {
    const splitState = state2.split(RESOURCE_DELIM);
    const libraryState = splitState[0];
    const userState = splitState.length > 1 ? splitState.slice(1).join(RESOURCE_DELIM) : "";
    const libraryStateString = base64Decode(libraryState);
    const libraryStateObj = JSON.parse(libraryStateString);
    return {
      userRequestState: userState || "",
      libraryState: libraryStateObj
    };
  } catch (e) {
    throw createClientAuthError(invalidState);
  }
}
var init_ProtocolUtils = __esm(() => {
  init_Constants();
  init_ClientAuthError();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/response/ResponseHandler.mjs
class ResponseHandler {
  constructor(clientId, cacheStorage, cryptoObj, logger3, performanceClient, serializableCache, persistencePlugin) {
    this.clientId = clientId;
    this.cacheStorage = cacheStorage;
    this.cryptoObj = cryptoObj;
    this.logger = logger3;
    this.performanceClient = performanceClient;
    this.serializableCache = serializableCache;
    this.persistencePlugin = persistencePlugin;
  }
  validateTokenResponse(serverResponse, correlationId, refreshAccessToken) {
    if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
      const errString = `Error(s): ${serverResponse.error_codes || NOT_AVAILABLE} - Timestamp: ${serverResponse.timestamp || NOT_AVAILABLE} - Description: ${serverResponse.error_description || NOT_AVAILABLE} - Correlation ID: ${serverResponse.correlation_id || NOT_AVAILABLE} - Trace ID: ${serverResponse.trace_id || NOT_AVAILABLE}`;
      const serverErrorNo = serverResponse.error_codes?.length ? serverResponse.error_codes[0] : undefined;
      const serverError = new ServerError(serverResponse.error, errString, serverResponse.suberror, serverErrorNo, serverResponse.status);
      if (refreshAccessToken && serverResponse.status && serverResponse.status >= HTTP_SERVER_ERROR_RANGE_START && serverResponse.status <= HTTP_SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${serverError}`, correlationId);
        return;
      } else if (refreshAccessToken && serverResponse.status && serverResponse.status >= HTTP_CLIENT_ERROR_RANGE_START && serverResponse.status <= HTTP_CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${serverError}`, correlationId);
        return;
      }
      if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
        throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.correlation_id || "", serverResponse.claims || "", serverErrorNo);
      }
      throw serverError;
    }
  }
  async handleServerTokenResponse(serverTokenResponse, authority, reqTimestamp, request, apiId, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
    let idTokenClaims;
    if (serverTokenResponse.id_token) {
      idTokenClaims = extractTokenClaims(serverTokenResponse.id_token || "", this.cryptoObj.base64Decode);
      if (authCodePayload && authCodePayload.nonce) {
        if (idTokenClaims.nonce !== authCodePayload.nonce) {
          throw createClientAuthError(nonceMismatch);
        }
      }
      if (request.maxAge || request.maxAge === 0) {
        const authTime = idTokenClaims.auth_time;
        if (!authTime) {
          throw createClientAuthError(authTimeNotFound);
        }
        checkMaxAge(authTime, request.maxAge);
      }
    }
    this.homeAccountIdentifier = generateHomeAccountId(serverTokenResponse.client_info || "", authority.authorityType, this.logger, this.cryptoObj, request.correlationId, idTokenClaims);
    let requestStateObj;
    if (!!authCodePayload && !!authCodePayload.state) {
      requestStateObj = parseRequestState(this.cryptoObj.base64Decode, authCodePayload.state);
    }
    serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || undefined;
    const cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload);
    let cacheContext;
    try {
      if (this.persistencePlugin && this.serializableCache) {
        this.logger.verbose("Persistence enabled, calling beforeCacheAccess", request.correlationId);
        cacheContext = new TokenCacheContext(this.serializableCache, true);
        await this.persistencePlugin.beforeCacheAccess(cacheContext);
      }
      if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
        const cachedAccounts = this.cacheStorage.getAllAccounts({
          homeAccountId: cacheRecord.account.homeAccountId,
          environment: cacheRecord.account.environment
        }, request.correlationId);
        if (cachedAccounts.length < 1) {
          this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache", request.correlationId);
          this.performanceClient?.addFields({
            acntLoggedOut: true
          }, request.correlationId);
          return await ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, this.performanceClient, idTokenClaims, requestStateObj, undefined, serverRequestId);
        }
      }
      await this.cacheStorage.saveCacheRecord(cacheRecord, request.correlationId, isKmsi(idTokenClaims || {}), apiId, request.storeInCache);
    } finally {
      if (this.persistencePlugin && this.serializableCache && cacheContext) {
        this.logger.verbose("Persistence enabled, calling afterCacheAccess", request.correlationId);
        await this.persistencePlugin.afterCacheAccess(cacheContext);
      }
    }
    return ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, this.performanceClient, idTokenClaims, requestStateObj, serverTokenResponse, serverRequestId);
  }
  generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload) {
    const env = authority.getPreferredCache();
    if (!env) {
      throw createClientAuthError(invalidCacheEnvironment);
    }
    const claimsTenantId = getTenantIdFromIdTokenClaims(idTokenClaims);
    let cachedIdToken;
    let cachedAccount;
    if (serverTokenResponse.id_token && !!idTokenClaims) {
      cachedIdToken = createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, claimsTenantId || "");
      cachedAccount = buildAccountToCache(this.cacheStorage, authority, this.homeAccountIdentifier, this.cryptoObj.base64Decode, request.correlationId, idTokenClaims, serverTokenResponse.client_info, env, claimsTenantId, authCodePayload, undefined, this.logger, this.performanceClient);
    }
    let cachedAccessToken = null;
    if (serverTokenResponse.access_token) {
      const responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
      const expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
      const extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
      const refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || undefined;
      const tokenExpirationSeconds = reqTimestamp + expiresIn;
      const extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
      const refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : undefined;
      cachedAccessToken = createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, claimsTenantId || authority.tenant || "", responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj.base64Decode, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id);
      const resource = request.resource || null;
      if (resource) {
        cachedAccessToken.resource = resource;
      }
    }
    let cachedRefreshToken = null;
    if (serverTokenResponse.refresh_token) {
      let rtExpiresOn;
      if (serverTokenResponse.refresh_token_expires_in) {
        const rtExpiresIn = typeof serverTokenResponse.refresh_token_expires_in === "string" ? parseInt(serverTokenResponse.refresh_token_expires_in, 10) : serverTokenResponse.refresh_token_expires_in;
        rtExpiresOn = reqTimestamp + rtExpiresIn;
        this.performanceClient?.addFields({ ntwkRtExpiresOnSeconds: rtExpiresOn }, request.correlationId);
      }
      cachedRefreshToken = createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci, userAssertionHash, rtExpiresOn);
    }
    let cachedAppMetadata = null;
    if (serverTokenResponse.foci) {
      cachedAppMetadata = {
        clientId: this.clientId,
        environment: env,
        familyId: serverTokenResponse.foci
      };
    }
    return {
      account: cachedAccount,
      idToken: cachedIdToken,
      accessToken: cachedAccessToken,
      refreshToken: cachedRefreshToken,
      appMetadata: cachedAppMetadata
    };
  }
  static async generateAuthenticationResult(cryptoObj, authority, cacheRecord, fromTokenCache, request, performanceClient, idTokenClaims, requestState, serverTokenResponse, requestId) {
    let accessToken = "";
    let responseScopes = [];
    let expiresOn = null;
    let extExpiresOn;
    let refreshOn;
    let familyId = "";
    if (cacheRecord.accessToken) {
      if (cacheRecord.accessToken.tokenType === AuthenticationScheme.POP && !request.popKid) {
        const popTokenGenerator = new PopTokenGenerator(cryptoObj, performanceClient);
        const { secret, keyId } = cacheRecord.accessToken;
        if (!keyId) {
          throw createClientAuthError(keyIdMissing);
        }
        accessToken = await popTokenGenerator.signPopToken(secret, keyId, request);
      } else {
        accessToken = cacheRecord.accessToken.secret;
      }
      responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
      expiresOn = toDateFromSeconds(cacheRecord.accessToken.expiresOn);
      extExpiresOn = toDateFromSeconds(cacheRecord.accessToken.extendedExpiresOn);
      if (cacheRecord.accessToken.refreshOn) {
        refreshOn = toDateFromSeconds(cacheRecord.accessToken.refreshOn);
      }
    }
    if (cacheRecord.appMetadata) {
      familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : "";
    }
    const uid = idTokenClaims?.oid || idTokenClaims?.sub || "";
    const tid = idTokenClaims?.tid || "";
    if (serverTokenResponse?.spa_accountid && !!cacheRecord.account) {
      cacheRecord.account.nativeAccountId = serverTokenResponse?.spa_accountid;
    }
    const accountInfo = cacheRecord.account ? updateAccountTenantProfileData(getAccountInfo(cacheRecord.account), undefined, idTokenClaims, cacheRecord.idToken?.secret) : null;
    return {
      authority: authority.canonicalAuthority,
      uniqueId: uid,
      tenantId: tid,
      scopes: responseScopes,
      account: accountInfo,
      idToken: cacheRecord?.idToken?.secret || "",
      idTokenClaims: idTokenClaims || {},
      accessToken,
      fromCache: fromTokenCache,
      expiresOn,
      extExpiresOn,
      refreshOn,
      correlationId: request.correlationId,
      requestId: requestId || "",
      familyId,
      tokenType: cacheRecord.accessToken?.tokenType || "",
      state: requestState ? requestState.userRequestState : "",
      cloudGraphHostName: cacheRecord.account?.cloudGraphHostName || "",
      msGraphHost: cacheRecord.account?.msGraphHost || "",
      code: serverTokenResponse?.spa_code,
      fromPlatformBroker: false
    };
  }
}
function buildAccountToCache(cacheStorage, authority, homeAccountId, base64Decode, correlationId, idTokenClaims, clientInfo, environment, claimsTenantId, authCodePayload, nativeAccountId, logger3, performanceClient) {
  logger3?.verbose("setCachedAccount called", correlationId);
  const accountEnvironment = environment || authority.getPreferredCache();
  const matchedAccounts = cacheStorage.getAccountsFilteredBy({ homeAccountId, environment: accountEnvironment }, correlationId);
  performanceClient?.addFields({ cacheMatchedAccounts: matchedAccounts.length }, correlationId);
  if (matchedAccounts.length > 1) {
    logger3?.warning("Multiple base accounts matched homeAccountId. Ignoring cached account and creating a new base account.", correlationId);
  }
  const cachedAccount = matchedAccounts.length === 1 ? matchedAccounts[0] : null;
  const baseAccount = cachedAccount || createAccountEntity({
    homeAccountId,
    idTokenClaims,
    clientInfo,
    environment,
    cloudGraphHostName: authCodePayload?.cloud_graph_host_name,
    msGraphHost: authCodePayload?.msgraph_host,
    nativeAccountId
  }, authority, base64Decode);
  const tenantProfiles = baseAccount.tenantProfiles || [];
  const tenantId = claimsTenantId || baseAccount.realm;
  if (tenantId && !tenantProfiles.find((tenantProfile) => {
    return tenantProfile.tenantId === tenantId;
  })) {
    const newTenantProfile = buildTenantProfile(homeAccountId, baseAccount.localAccountId, tenantId, idTokenClaims);
    tenantProfiles.push(newTenantProfile);
  }
  baseAccount.tenantProfiles = tenantProfiles;
  return baseAccount;
}
var init_ResponseHandler = __esm(() => {
  init_AccountInfo();
  init_AuthToken();
  init_TokenClaims();
  init_TokenCacheContext();
  init_AccountEntityUtils();
  init_CacheHelpers();
  init_PopTokenGenerator();
  init_ClientAuthError();
  init_InteractionRequiredAuthError();
  init_ServerError();
  init_ScopeSet();
  init_Constants();
  init_ProtocolUtils();
  init_TimeUtils();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/account/CcsCredential.mjs
var CcsCredentialType;
var init_CcsCredential = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  CcsCredentialType = {
    HOME_ACCOUNT_ID: "home_account_id",
    UPN: "UPN"
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/utils/ClientAssertionUtils.mjs
async function getClientAssertion(clientAssertion, clientId, tokenEndpoint) {
  if (typeof clientAssertion === "string") {
    return clientAssertion;
  } else {
    const config = {
      clientId,
      tokenEndpoint
    };
    return clientAssertion(config);
  }
}
var init_ClientAssertionUtils = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/network/RequestThumbprint.mjs
function getRequestThumbprint(clientId, request, homeAccountId) {
  return {
    clientId,
    authority: request.authority,
    scopes: request.scopes,
    homeAccountIdentifier: homeAccountId,
    claims: request.claims,
    authenticationScheme: request.authenticationScheme,
    resourceRequestMethod: request.resourceRequestMethod,
    resourceRequestUri: request.resourceRequestUri,
    shrClaims: request.shrClaims,
    sshKid: request.sshKid,
    embeddedClientId: request.embeddedClientId || request.extraParameters?.clientId
  };
}
var init_RequestThumbprint = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/network/ThrottlingUtils.mjs
class ThrottlingUtils {
  static generateThrottlingStorageKey(thumbprint) {
    return `${THROTTLING_PREFIX}.${JSON.stringify(thumbprint)}`;
  }
  static preProcess(cacheManager, thumbprint, correlationId) {
    const key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
    const value = cacheManager.getThrottlingCache(key, correlationId);
    if (value) {
      if (value.throttleTime < Date.now()) {
        cacheManager.removeItem(key, correlationId);
        return;
      }
      throw new ServerError(value.errorCodes?.join(" ") || "", value.errorMessage, value.subError);
    }
  }
  static postProcess(cacheManager, thumbprint, response, correlationId) {
    if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
      const thumbprintValue = {
        throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
        error: response.body.error,
        errorCodes: response.body.error_codes,
        errorMessage: response.body.error_description,
        subError: response.body.suberror
      };
      cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue, correlationId);
    }
  }
  static checkResponseStatus(response) {
    return response.status === 429 || response.status >= 500 && response.status < 600;
  }
  static checkResponseForRetryAfter(response) {
    if (response.headers) {
      return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
    }
    return false;
  }
  static calculateThrottleTime(throttleTime) {
    const time = throttleTime <= 0 ? 0 : throttleTime;
    const currentSeconds = Date.now() / 1000;
    return Math.floor(Math.min(currentSeconds + (time || DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
  }
  static removeThrottle(cacheManager, clientId, request, homeAccountIdentifier) {
    const thumbprint = getRequestThumbprint(clientId, request, homeAccountIdentifier);
    const key = this.generateThrottlingStorageKey(thumbprint);
    cacheManager.removeItem(key, request.correlationId);
  }
}
var init_ThrottlingUtils = __esm(() => {
  init_Constants();
  init_ServerError();
  init_RequestThumbprint();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/NetworkError.mjs
function createNetworkError(error, httpStatus, responseHeaders, additionalError) {
  error.errorMessage = `${error.errorMessage}, additionalErrorInfo: error.name:${additionalError?.name}, error.message:${additionalError?.message}`;
  return new NetworkError(error, httpStatus, responseHeaders);
}
var NetworkError;
var init_NetworkError = __esm(() => {
  init_AuthError();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  NetworkError = class NetworkError extends AuthError {
    constructor(error, httpStatus, responseHeaders) {
      super(error.errorCode, error.errorMessage, error.subError);
      Object.setPrototypeOf(this, NetworkError.prototype);
      this.name = "NetworkError";
      this.error = error;
      this.httpStatus = httpStatus;
      this.responseHeaders = responseHeaders;
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/protocol/Token.mjs
var exports_Token = {};
__export(exports_Token, {
  sendPostRequest: () => sendPostRequest,
  executePostToTokenEndpoint: () => executePostToTokenEndpoint,
  createTokenRequestHeaders: () => createTokenRequestHeaders,
  createTokenQueryParameters: () => createTokenQueryParameters
});
function createTokenRequestHeaders(logger3, preventCorsPreflight, ccsCred) {
  const headers = {};
  headers[HeaderNames.CONTENT_TYPE] = URL_FORM_CONTENT_TYPE;
  if (!preventCorsPreflight && ccsCred) {
    switch (ccsCred.type) {
      case CcsCredentialType.HOME_ACCOUNT_ID:
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
          headers[HeaderNames.CCS_HEADER] = `Oid:${clientInfo.uid}@${clientInfo.utid}`;
        } catch (e) {
          logger3.verbose(`Could not parse home account ID for CCS Header: '${e}'`, "");
        }
        break;
      case CcsCredentialType.UPN:
        headers[HeaderNames.CCS_HEADER] = `UPN: ${ccsCred.credential}`;
        break;
    }
  }
  return headers;
}
function createTokenQueryParameters(request, clientId, redirectUri, performanceClient) {
  const parameters = new Map;
  if (request.embeddedClientId) {
    addBrokerParameters(parameters, clientId, redirectUri);
  }
  if (request.extraQueryParameters) {
    addExtraParameters(parameters, request.extraQueryParameters);
  }
  addCorrelationId(parameters, request.correlationId);
  instrumentBrokerParams(parameters, request.correlationId, performanceClient);
  return mapToQueryString(parameters);
}
async function executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId, cacheManager, networkClient, logger3, performanceClient, serverTelemetryManager) {
  const response = await sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers }, correlationId, cacheManager, networkClient, logger3, performanceClient);
  if (serverTelemetryManager && response.status < 500 && response.status !== 429) {
    serverTelemetryManager.clearTelemetryCache();
  }
  return response;
}
async function sendPostRequest(thumbprint, tokenEndpoint, options, correlationId, cacheManager, networkClient, logger3, performanceClient) {
  ThrottlingUtils.preProcess(cacheManager, thumbprint, correlationId);
  let response;
  try {
    response = await invokeAsync(networkClient.sendPostRequestAsync.bind(networkClient), NetworkClientSendPostRequestAsync, logger3, performanceClient, correlationId)(tokenEndpoint, options);
    const responseHeaders = response.headers || {};
    performanceClient?.addFields({
      refreshTokenSize: response.body.refresh_token?.length || 0,
      httpVerToken: responseHeaders[HeaderNames.X_MS_HTTP_VERSION] || "",
      requestId: responseHeaders[HeaderNames.X_MS_REQUEST_ID] || ""
    }, correlationId);
  } catch (e) {
    if (e instanceof NetworkError) {
      const responseHeaders = e.responseHeaders;
      if (responseHeaders) {
        performanceClient?.addFields({
          httpVerToken: responseHeaders[HeaderNames.X_MS_HTTP_VERSION] || "",
          requestId: responseHeaders[HeaderNames.X_MS_REQUEST_ID] || "",
          contentTypeHeader: responseHeaders[HeaderNames.CONTENT_TYPE] || undefined,
          contentLengthHeader: responseHeaders[HeaderNames.CONTENT_LENGTH] || undefined,
          httpStatus: e.httpStatus
        }, correlationId);
      }
      throw e.error;
    }
    if (e instanceof AuthError) {
      throw e;
    } else {
      throw createClientAuthError(networkError);
    }
  }
  ThrottlingUtils.postProcess(cacheManager, thumbprint, response, correlationId);
  return response;
}
var init_Token = __esm(() => {
  init_CcsCredential();
  init_ClientInfo();
  init_Constants();
  init_RequestParameterBuilder();
  init_UrlUtils();
  init_ThrottlingUtils();
  init_NetworkError();
  init_AuthError();
  init_ClientAuthError();
  init_FunctionWrappers();
  init_PerformanceEvents();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/OpenIdConfigResponse.mjs
function isOpenIdConfigResponse(response) {
  return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
}
var init_OpenIdConfigResponse = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.mjs
function isCloudInstanceDiscoveryResponse(response) {
  return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
}
var init_CloudInstanceDiscoveryResponse = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.mjs
function isCloudInstanceDiscoveryErrorResponse(response) {
  return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
}
var init_CloudInstanceDiscoveryErrorResponse = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/RegionDiscovery.mjs
class RegionDiscovery {
  constructor(networkInterface, logger3, performanceClient, correlationId) {
    this.networkInterface = networkInterface;
    this.logger = logger3;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
  }
  async detectRegion(environmentRegion, regionDiscoveryMetadata) {
    let autodetectedRegionName = environmentRegion;
    if (!autodetectedRegionName) {
      const options = RegionDiscovery.IMDS_OPTIONS;
      try {
        const localIMDSVersionResponse = await invokeAsync(this.getRegionFromIMDS.bind(this), RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(IMDS_VERSION, options);
        if (localIMDSVersionResponse.status === HTTP_SUCCESS) {
          autodetectedRegionName = localIMDSVersionResponse.body;
          regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
        }
        if (localIMDSVersionResponse.status === HTTP_BAD_REQUEST) {
          const currentIMDSVersion = await invokeAsync(this.getCurrentVersion.bind(this), RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(options);
          if (!currentIMDSVersion) {
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
            return null;
          }
          const currentIMDSVersionResponse = await invokeAsync(this.getRegionFromIMDS.bind(this), RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(currentIMDSVersion, options);
          if (currentIMDSVersionResponse.status === HTTP_SUCCESS) {
            autodetectedRegionName = currentIMDSVersionResponse.body;
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
          }
        }
      } catch (e) {
        regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
        return null;
      }
    } else {
      regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
    }
    if (!autodetectedRegionName) {
      regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
    }
    return autodetectedRegionName || null;
  }
  async getRegionFromIMDS(version2, options) {
    return this.networkInterface.sendGetRequestAsync(`${IMDS_ENDPOINT}?api-version=${version2}&format=text`, options, IMDS_TIMEOUT);
  }
  async getCurrentVersion(options) {
    try {
      const response = await this.networkInterface.sendGetRequestAsync(`${IMDS_ENDPOINT}?format=json`, options);
      if (response.status === HTTP_BAD_REQUEST && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
        return response.body["newest-versions"][0];
      }
      return null;
    } catch (e) {
      return null;
    }
  }
}
var init_RegionDiscovery = __esm(() => {
  init_Constants();
  init_PerformanceEvents();
  init_FunctionWrappers();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  RegionDiscovery.IMDS_OPTIONS = {
    headers: {
      Metadata: "true"
    }
  };
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/Authority.mjs
class Authority {
  constructor(authority, networkInterface, cacheManager, authorityOptions, logger3, correlationId, performanceClient, managedIdentity) {
    this.canonicalAuthority = authority;
    this._canonicalAuthority.validateAsUri();
    this.networkInterface = networkInterface;
    this.cacheManager = cacheManager;
    this.authorityOptions = authorityOptions;
    this.regionDiscoveryMetadata = {
      region_used: undefined,
      region_source: undefined,
      region_outcome: undefined
    };
    this.logger = logger3;
    this.performanceClient = performanceClient;
    this.correlationId = correlationId;
    this.managedIdentity = managedIdentity || false;
    this.regionDiscovery = new RegionDiscovery(networkInterface, this.logger, this.performanceClient, this.correlationId);
  }
  getAuthorityType(authorityUri) {
    if (authorityUri.HostNameAndPort.endsWith(CIAM_AUTH_URL)) {
      return AuthorityType.Ciam;
    }
    const pathSegments = authorityUri.PathSegments;
    if (pathSegments.length) {
      switch (pathSegments[0].toLowerCase()) {
        case ADFS:
          return AuthorityType.Adfs;
        case DSTS:
          return AuthorityType.Dsts;
      }
    }
    return AuthorityType.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(url) {
    this._canonicalAuthority = new UrlString(url);
    this._canonicalAuthority.validateAsUri();
    this._canonicalAuthorityUrlComponents = null;
  }
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) {
      this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    }
    return this._canonicalAuthorityUrlComponents;
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.authorization_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  get tokenEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.token_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) {
        throw createClientAuthError(endSessionEndpointNotSupported);
      }
      return this.replacePath(this.metadata.end_session_endpoint);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.issuer);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  get jwksUri() {
    if (this.discoveryComplete()) {
      return this.replacePath(this.metadata.jwks_uri);
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  canReplaceTenant(authorityUri) {
    return authorityUri.PathSegments.length === 1 && !Authority.reservedTenantDomains.has(authorityUri.PathSegments[0]) && this.getAuthorityType(authorityUri) === AuthorityType.Default && this.protocolMode !== ProtocolMode.OIDC;
  }
  replaceTenant(urlString) {
    return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(urlString) {
    let endpoint = urlString;
    const cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
    const cachedAuthorityUrlComponents = cachedAuthorityUrl.getUrlComponents();
    const cachedAuthorityParts = cachedAuthorityUrlComponents.PathSegments;
    const currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
    currentAuthorityParts.forEach((currentPart, index) => {
      let cachedPart = cachedAuthorityParts[index];
      if (index === 0 && this.canReplaceTenant(cachedAuthorityUrlComponents)) {
        const tenantId = new UrlString(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        if (cachedPart !== tenantId) {
          this.logger.verbose(`Replacing tenant domain name '${cachedPart}' with id '${tenantId}'`, this.correlationId);
          cachedPart = tenantId;
        }
      }
      if (currentPart !== cachedPart) {
        endpoint = endpoint.replace(`/${cachedPart}/`, `/${currentPart}/`);
      }
    });
    return this.replaceTenant(endpoint);
  }
  get defaultOpenIdConfigurationEndpoint() {
    const canonicalAuthorityHost = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === AuthorityType.Adfs || this.protocolMode === ProtocolMode.OIDC && !this.isAliasOfKnownMicrosoftAuthority(canonicalAuthorityHost)) {
      return `${this.canonicalAuthority}.well-known/openid-configuration`;
    }
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    const metadataEntity = this.getCurrentMetadataEntity();
    const cloudDiscoverySource = await invokeAsync(this.updateCloudDiscoveryMetadata.bind(this), AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
    const endpointSource = await invokeAsync(this.updateEndpointMetadata.bind(this), AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
    this.updateCachedMetadata(metadataEntity, cloudDiscoverySource, {
      source: endpointSource
    });
    this.performanceClient?.addFields({
      cloudDiscoverySource,
      authorityEndpointSource: endpointSource
    }, this.correlationId);
  }
  getCurrentMetadataEntity() {
    let metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort, this.correlationId);
    if (!metadataEntity) {
      metadataEntity = {
        aliases: [],
        preferred_cache: this.hostnameAndPort,
        preferred_network: this.hostnameAndPort,
        canonical_authority: this.canonicalAuthority,
        authorization_endpoint: "",
        token_endpoint: "",
        end_session_endpoint: "",
        issuer: "",
        aliasesFromNetwork: false,
        endpointsFromNetwork: false,
        expiresAt: generateAuthorityMetadataExpiresAt(),
        jwks_uri: ""
      };
    }
    return metadataEntity;
  }
  updateCachedMetadata(metadataEntity, cloudDiscoverySource, endpointMetadataResult) {
    if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointMetadataResult?.source !== AuthorityMetadataSource.CACHE) {
      metadataEntity.expiresAt = generateAuthorityMetadataExpiresAt();
      metadataEntity.canonical_authority = this.canonicalAuthority;
    }
    const cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache, this.correlationId);
    this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity, this.correlationId);
    this.metadata = metadataEntity;
  }
  async updateEndpointMetadata(metadataEntity) {
    const localMetadata = this.updateEndpointMetadataFromLocalSources(metadataEntity);
    if (localMetadata) {
      if (localMetadata.source === AuthorityMetadataSource.HARDCODED_VALUES) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          if (localMetadata.metadata) {
            const hardcodedMetadata = await invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(localMetadata.metadata);
            updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
            metadataEntity.canonical_authority = this.canonicalAuthority;
          }
        }
      }
      return localMetadata.source;
    }
    let metadata = await invokeAsync(this.getEndpointMetadataFromNetwork.bind(this), AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (metadata) {
      if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
        metadata = await invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(metadata);
      }
      updateAuthorityEndpointMetadata(metadataEntity, metadata, true);
      return AuthorityMetadataSource.NETWORK;
    } else {
      throw createClientAuthError(openIdConfigError, this.defaultOpenIdConfigurationEndpoint);
    }
  }
  updateEndpointMetadataFromLocalSources(metadataEntity) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration", this.correlationId);
    const configMetadata = this.getEndpointMetadataFromConfig();
    if (configMetadata) {
      this.logger.verbose("Found endpoint metadata in authority configuration", this.correlationId);
      updateAuthorityEndpointMetadata(metadataEntity, configMetadata, false);
      return {
        source: AuthorityMetadataSource.CONFIG
      };
    }
    this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values.", this.correlationId);
    const hardcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
    if (hardcodedMetadata) {
      updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
      return {
        source: AuthorityMetadataSource.HARDCODED_VALUES,
        metadata: hardcodedMetadata
      };
    } else {
      this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.", this.correlationId);
    }
    const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
    if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntityExpired) {
      this.logger.verbose("Found endpoint metadata in the cache.", "");
      return { source: AuthorityMetadataSource.CACHE };
    } else if (metadataEntityExpired) {
      this.logger.verbose("The metadata entity is expired.", "");
    }
    return null;
  }
  isAuthoritySameType(metadataEntity) {
    const cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
    const cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
    return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) {
      try {
        return JSON.parse(this.authorityOptions.authorityMetadata);
      } catch (e) {
        throw createClientConfigurationError(invalidAuthorityMetadata);
      }
    }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    const options = {};
    const openIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from '${openIdConfigurationEndpoint}'`, this.correlationId);
    try {
      const response = await this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint, options);
      const isValidResponse = isOpenIdConfigResponse(response.body);
      if (isValidResponse) {
        return response.body;
      } else {
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration`, this.correlationId);
        return null;
      }
    } catch (e) {
      this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: '${e}'`, this.correlationId);
      return null;
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in EndpointMetadata) {
      return EndpointMetadata[this.hostnameAndPort];
    }
    return null;
  }
  async updateMetadataWithRegionalInformation(metadata) {
    const userConfiguredAzureRegion = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (userConfiguredAzureRegion) {
      if (userConfiguredAzureRegion !== AZURE_REGION_AUTO_DISCOVER_FLAG) {
        this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
        this.regionDiscoveryMetadata.region_used = userConfiguredAzureRegion;
        return Authority.replaceWithRegionalInformation(metadata, userConfiguredAzureRegion);
      }
      const autodetectedRegionName = await invokeAsync(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (autodetectedRegionName) {
        this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL;
        this.regionDiscoveryMetadata.region_used = autodetectedRegionName;
        return Authority.replaceWithRegionalInformation(metadata, autodetectedRegionName);
      }
      this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return metadata;
  }
  async updateCloudDiscoveryMetadata(metadataEntity) {
    const localMetadataSource = this.updateCloudDiscoveryMetadataFromLocalSources(metadataEntity);
    if (localMetadataSource) {
      return localMetadataSource;
    }
    const metadata = await invokeAsync(this.getCloudDiscoveryMetadataFromNetwork.bind(this), AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (metadata) {
      updateCloudDiscoveryMetadata(metadataEntity, metadata, true);
      return AuthorityMetadataSource.NETWORK;
    }
    throw createClientConfigurationError(untrustedAuthority);
  }
  updateCloudDiscoveryMetadataFromLocalSources(metadataEntity) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration", this.correlationId);
    this.logger.verbosePii(`Known Authorities: '${this.authorityOptions.knownAuthorities || NOT_APPLICABLE}'`, this.correlationId);
    this.logger.verbosePii(`Authority Metadata: '${this.authorityOptions.authorityMetadata || NOT_APPLICABLE}'`, this.correlationId);
    this.logger.verbosePii(`Canonical Authority: '${metadataEntity.canonical_authority || NOT_APPLICABLE}'`, this.correlationId);
    const metadata = this.getCloudDiscoveryMetadataFromConfig();
    if (metadata) {
      this.logger.verbose("Found cloud discovery metadata in authority configuration", this.correlationId);
      updateCloudDiscoveryMetadata(metadataEntity, metadata, false);
      return AuthorityMetadataSource.CONFIG;
    }
    this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values.", this.correlationId);
    const hardcodedMetadata = getCloudDiscoveryMetadataFromHardcodedValues(this.hostnameAndPort);
    if (hardcodedMetadata) {
      this.logger.verbose("Found cloud discovery metadata from hardcoded values.", this.correlationId);
      updateCloudDiscoveryMetadata(metadataEntity, hardcodedMetadata, false);
      return AuthorityMetadataSource.HARDCODED_VALUES;
    }
    this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.", this.correlationId);
    const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
    if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
      this.logger.verbose("Found cloud discovery metadata in the cache.", "");
      return AuthorityMetadataSource.CACHE;
    } else if (metadataEntityExpired) {
      this.logger.verbose("The metadata entity is expired.", "");
    }
    return null;
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === AuthorityType.Ciam) {
      this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host.", this.correlationId);
      return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.", this.correlationId);
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.", this.correlationId);
        const parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
        const metadata = getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
        this.logger.verbose("Parsed the cloud discovery metadata.", "");
        if (metadata) {
          this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.", this.correlationId);
          return metadata;
        } else {
          this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.", this.correlationId);
        }
      } catch (e) {
        this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.", this.correlationId);
        throw createClientConfigurationError(invalidCloudDiscoveryMetadata);
      }
    }
    if (this.isInKnownAuthorities()) {
      this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.", this.correlationId);
      return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    return null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    const instanceDiscoveryEndpoint = `${AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`;
    const options = {};
    let match = null;
    try {
      const response = await this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options);
      let typedResponseBody;
      let metadata;
      if (isCloudInstanceDiscoveryResponse(response.body)) {
        typedResponseBody = response.body;
        metadata = typedResponseBody.metadata;
        this.logger.verbosePii(`tenant_discovery_endpoint is: '${typedResponseBody.tenant_discovery_endpoint}'`, this.correlationId);
      } else if (isCloudInstanceDiscoveryErrorResponse(response.body)) {
        this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: '${response.status}'`, this.correlationId);
        typedResponseBody = response.body;
        if (typedResponseBody.error === INVALID_INSTANCE) {
          this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.", this.correlationId);
          return null;
        }
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is '${typedResponseBody.error}'`, this.correlationId);
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is '${typedResponseBody.error_description}'`, this.correlationId);
        this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network, correlationId) to []", this.correlationId);
        metadata = [];
      } else {
        this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse", this.correlationId);
        return null;
      }
      this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.", this.correlationId);
      match = getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
    } catch (error) {
      if (error instanceof AuthError) {
        this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: '${error.errorCode}'
Error Description: '${error.errorMessage}'`, this.correlationId);
      } else {
        const typedError = error;
        this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: '${typedError.name}'
Error Description: '${typedError.message}'`, this.correlationId);
      }
      return null;
    }
    if (!match) {
      this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.", this.correlationId);
      this.logger.verbose("Creating custom Authority for custom domain scenario.", this.correlationId);
      match = Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    }
    return match;
  }
  isInKnownAuthorities() {
    const matches = this.authorityOptions.knownAuthorities.filter((authority) => {
      return authority && UrlString.getDomainFromUrl(authority).toLowerCase() === this.hostnameAndPort;
    });
    return matches.length > 0;
  }
  static generateAuthority(authorityString, azureCloudOptions) {
    let authorityAzureCloudInstance;
    if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
      const tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : DEFAULT_COMMON_TENANT;
      authorityAzureCloudInstance = `${azureCloudOptions.azureCloudInstance}/${tenant}/`;
    }
    return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
  }
  static createCloudDiscoveryMetadataFromHost(host) {
    return {
      preferred_network: host,
      preferred_cache: host,
      aliases: [host]
    };
  }
  getPreferredCache() {
    if (this.managedIdentity) {
      return DEFAULT_AUTHORITY_HOST;
    } else if (this.discoveryComplete()) {
      return this.metadata.preferred_cache;
    } else {
      throw createClientAuthError(endpointResolutionError);
    }
  }
  isAlias(host) {
    return this.metadata.aliases.indexOf(host) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(host) {
    return InstanceDiscoveryMetadataAliases.has(host);
  }
  static isPublicCloudAuthority(host) {
    return KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
  }
  static buildRegionalAuthorityString(host, region, queryString) {
    const authorityUrlInstance = new UrlString(host);
    authorityUrlInstance.validateAsUri();
    const authorityUrlParts = authorityUrlInstance.getUrlComponents();
    let hostNameAndPort = `${region}.${authorityUrlParts.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
      hostNameAndPort = `${region}.${REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    }
    const url = UrlString.constructAuthorityUriFromObject({
      ...authorityUrlInstance.getUrlComponents(),
      HostNameAndPort: hostNameAndPort
    }).urlString;
    if (queryString)
      return `${url}?${queryString}`;
    return url;
  }
  static replaceWithRegionalInformation(metadata, azureRegion) {
    const regionalMetadata = { ...metadata };
    regionalMetadata.authorization_endpoint = Authority.buildRegionalAuthorityString(regionalMetadata.authorization_endpoint, azureRegion);
    regionalMetadata.token_endpoint = Authority.buildRegionalAuthorityString(regionalMetadata.token_endpoint, azureRegion);
    if (regionalMetadata.end_session_endpoint) {
      regionalMetadata.end_session_endpoint = Authority.buildRegionalAuthorityString(regionalMetadata.end_session_endpoint, azureRegion);
    }
    return regionalMetadata;
  }
  static transformCIAMAuthority(authority) {
    let ciamAuthority = authority;
    const authorityUrl = new UrlString(authority);
    const authorityUrlComponents = authorityUrl.getUrlComponents();
    if (authorityUrlComponents.PathSegments.length === 0 && authorityUrlComponents.HostNameAndPort.endsWith(CIAM_AUTH_URL)) {
      const tenantIdOrDomain = authorityUrlComponents.HostNameAndPort.split(".")[0];
      ciamAuthority = `${ciamAuthority}${tenantIdOrDomain}${AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return ciamAuthority;
  }
}
function getTenantFromAuthorityString(authority) {
  const authorityUrl = new UrlString(authority);
  const authorityUrlComponents = authorityUrl.getUrlComponents();
  const tenantId = authorityUrlComponents.PathSegments.slice(-1)[0]?.toLowerCase();
  switch (tenantId) {
    case AADAuthority.COMMON:
    case AADAuthority.ORGANIZATIONS:
    case AADAuthority.CONSUMERS:
      return;
    default:
      return tenantId;
  }
}
function formatAuthorityUri(authorityUri) {
  return authorityUri.endsWith(FORWARD_SLASH) ? authorityUri : `${authorityUri}${FORWARD_SLASH}`;
}
function buildStaticAuthorityOptions(authOptions) {
  const rawCloudDiscoveryMetadata = authOptions.cloudDiscoveryMetadata;
  let cloudDiscoveryMetadata = undefined;
  if (rawCloudDiscoveryMetadata) {
    try {
      cloudDiscoveryMetadata = JSON.parse(rawCloudDiscoveryMetadata);
    } catch (e) {
      throw createClientConfigurationError(invalidCloudDiscoveryMetadata);
    }
  }
  return {
    canonicalAuthority: authOptions.authority ? formatAuthorityUri(authOptions.authority) : undefined,
    knownAuthorities: authOptions.knownAuthorities,
    cloudDiscoveryMetadata
  };
}
var init_Authority = __esm(() => {
  init_AuthorityType();
  init_OpenIdConfigResponse();
  init_UrlString();
  init_ClientAuthError();
  init_Constants();
  init_AuthorityMetadata();
  init_ClientConfigurationError();
  init_ProtocolMode();
  init_AuthorityOptions();
  init_CloudInstanceDiscoveryResponse();
  init_CloudInstanceDiscoveryErrorResponse();
  init_RegionDiscovery();
  init_AuthError();
  init_PerformanceEvents();
  init_FunctionWrappers();
  init_CacheHelpers();
  init_ClientAuthErrorCodes();
  init_ClientConfigurationErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
  Authority.reservedTenantDomains = new Set([
    "{tenant}",
    "{tenantid}",
    AADAuthority.COMMON,
    AADAuthority.CONSUMERS,
    AADAuthority.ORGANIZATIONS
  ]);
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/authority/AuthorityFactory.mjs
var exports_AuthorityFactory = {};
__export(exports_AuthorityFactory, {
  createDiscoveredInstance: () => createDiscoveredInstance
});
async function createDiscoveredInstance(authorityUri, networkClient, cacheManager, authorityOptions, logger3, correlationId, performanceClient) {
  const authorityUriFinal = Authority.transformCIAMAuthority(formatAuthorityUri(authorityUri));
  const acquireTokenAuthority = new Authority(authorityUriFinal, networkClient, cacheManager, authorityOptions, logger3, correlationId, performanceClient);
  try {
    await invokeAsync(acquireTokenAuthority.resolveEndpointsAsync.bind(acquireTokenAuthority), AuthorityResolveEndpointsAsync, logger3, performanceClient, correlationId)();
    return acquireTokenAuthority;
  } catch (e) {
    throw createClientAuthError(endpointResolutionError);
  }
}
var init_AuthorityFactory = __esm(() => {
  init_Authority();
  init_ClientAuthError();
  init_PerformanceEvents();
  init_FunctionWrappers();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.mjs
class AuthorizationCodeClient {
  constructor(configuration, performanceClient) {
    this.includeRedirectUri = true;
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
    this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  async acquireToken(request, apiId, authCodePayload) {
    if (!request.code) {
      throw createClientAuthError(requestCannotBeMade);
    }
    if (authCodePayload && authCodePayload.cloud_instance_host_name) {
      await invokeAsync(this.updateTokenEndpointAuthority.bind(this), UpdateTokenEndpointAuthority, this.logger, this.performanceClient, request.correlationId)(authCodePayload.cloud_instance_host_name, request.correlationId);
    }
    const reqTimestamp = nowSeconds();
    const response = await invokeAsync(this.executeTokenRequest.bind(this), AuthClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(this.authority, request, this.serverTelemetryManager);
    const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
    const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin);
    responseHandler.validateTokenResponse(response.body, request.correlationId);
    return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, apiId, authCodePayload, undefined, undefined, undefined, requestId);
  }
  getLogoutUri(logoutRequest) {
    if (!logoutRequest) {
      throw createClientConfigurationError(logoutRequestEmpty);
    }
    const queryString = this.createLogoutUrlQueryString(logoutRequest);
    return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
  }
  async executeTokenRequest(authority, request, serverTelemetryManager) {
    const queryParametersString = createTokenQueryParameters(request, this.config.authOptions.clientId, this.config.authOptions.redirectUri, this.performanceClient);
    const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
    const requestBody = await invokeAsync(this.createTokenRequestBody.bind(this), AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
    let ccsCredential = undefined;
    if (request.clientInfo) {
      try {
        const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
        ccsCredential = {
          credential: `${clientInfo.uid}${CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        };
      } catch (e) {
        this.logger.verbose(`Could not parse client info for CCS Header: '${e}'`, request.correlationId);
      }
    }
    const headers = createTokenRequestHeaders(this.logger, this.config.systemOptions.preventCorsPreflight, ccsCredential || request.ccsCredential);
    const thumbprint = getRequestThumbprint(this.config.authOptions.clientId, request);
    return invokeAsync(executePostToTokenEndpoint, AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, this.cacheManager, this.networkClient, this.logger, this.performanceClient, serverTelemetryManager);
  }
  async createTokenRequestBody(request) {
    const parameters = new Map;
    addClientId(parameters, request.embeddedClientId || request.extraParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
    if (!this.includeRedirectUri) {
      if (!request.redirectUri) {
        throw createClientConfigurationError(redirectUriEmpty);
      }
    } else {
      addRedirectUri(parameters, request.redirectUri);
    }
    addScopes(parameters, request.scopes, true, this.oidcDefaultScopes);
    addResource(parameters, request.resource);
    addAuthorizationCode(parameters, request.code);
    addLibraryInfo(parameters, this.config.libraryInfo);
    addApplicationTelemetry(parameters, this.config.telemetry.application);
    addThrottling(parameters);
    if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
      addServerTelemetry(parameters, this.serverTelemetryManager);
    }
    if (request.codeVerifier) {
      addCodeVerifier(parameters, request.codeVerifier);
    }
    if (this.config.clientCredentials.clientSecret) {
      addClientSecret(parameters, this.config.clientCredentials.clientSecret);
    }
    if (this.config.clientCredentials.clientAssertion) {
      const clientAssertion = this.config.clientCredentials.clientAssertion;
      addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
      addClientAssertionType(parameters, clientAssertion.assertionType);
    }
    addGrantType(parameters, GrantType.AUTHORIZATION_CODE_GRANT);
    addClientInfo(parameters);
    if (request.authenticationScheme === AuthenticationScheme.POP) {
      const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
      let reqCnfData;
      if (!request.popKid) {
        const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
        reqCnfData = generatedReqCnfData.reqCnfString;
      } else {
        reqCnfData = this.cryptoUtils.encodeKid(request.popKid);
      }
      addPopToken(parameters, reqCnfData);
    } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
      if (request.sshJwk) {
        addSshJwk(parameters, request.sshJwk);
      } else {
        throw createClientConfigurationError(missingSshJwk);
      }
    }
    if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
      addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
    }
    let ccsCred = undefined;
    if (request.clientInfo) {
      try {
        const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
        ccsCred = {
          credential: `${clientInfo.uid}${CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        };
      } catch (e) {
        this.logger.verbose(`Could not parse client info for CCS Header: '${e}'`, request.correlationId);
      }
    } else {
      ccsCred = request.ccsCredential;
    }
    if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
      switch (ccsCred.type) {
        case CcsCredentialType.HOME_ACCOUNT_ID:
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            this.logger.verbose(`Could not parse home account ID for CCS Header: '${e}'`, request.correlationId);
          }
          break;
        case CcsCredentialType.UPN:
          addCcsUpn(parameters, ccsCred.credential);
          break;
      }
    }
    if (request.embeddedClientId) {
      addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    }
    if (request.extraParameters) {
      addExtraParameters(parameters, request.extraParameters);
    }
    if (request.enableSpaAuthorizationCode && (!request.extraParameters || !request.extraParameters[RETURN_SPA_CODE])) {
      addExtraParameters(parameters, {
        [RETURN_SPA_CODE]: "1"
      });
    }
    instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
    return mapToQueryString(parameters);
  }
  createLogoutUrlQueryString(request) {
    const parameters = new Map;
    if (request.postLogoutRedirectUri) {
      addPostLogoutRedirectUri(parameters, request.postLogoutRedirectUri);
    }
    if (request.correlationId) {
      addCorrelationId(parameters, request.correlationId);
    }
    if (request.idTokenHint) {
      addIdTokenHint(parameters, request.idTokenHint);
    }
    if (request.state) {
      addState(parameters, request.state);
    }
    if (request.logoutHint) {
      addLogoutHint(parameters, request.logoutHint);
    }
    if (request.extraQueryParameters) {
      addExtraParameters(parameters, request.extraQueryParameters);
    }
    if (this.config.authOptions.instanceAware) {
      addInstanceAware(parameters);
    }
    return mapToQueryString(parameters);
  }
  async updateTokenEndpointAuthority(cloudInstanceHostName, correlationId) {
    const cloudInstanceAuthorityUri = `https://${cloudInstanceHostName}/${this.authority.tenant}/`;
    const cloudInstanceAuthority = await createDiscoveredInstance(cloudInstanceAuthorityUri, this.networkClient, this.cacheManager, this.authority.options, this.logger, correlationId, this.performanceClient);
    this.authority = cloudInstanceAuthority;
  }
}
var init_AuthorizationCodeClient = __esm(() => {
  init_RequestParameterBuilder();
  init_UrlUtils();
  init_Constants();
  init_AADServerParamKeys();
  init_ClientConfiguration();
  init_ResponseHandler();
  init_StringUtils();
  init_ClientAuthError();
  init_UrlString();
  init_PopTokenGenerator();
  init_TimeUtils();
  init_ClientInfo();
  init_CcsCredential();
  init_ClientConfigurationError();
  init_PerformanceEvents();
  init_FunctionWrappers();
  init_ClientAssertionUtils();
  init_RequestThumbprint();
  init_Token();
  init_AuthorityFactory();
  init_Logger();
  init_packageMetadata();
  init_ClientAuthErrorCodes();
  init_ClientConfigurationErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/client/RefreshTokenClient.mjs
class RefreshTokenClient {
  constructor(configuration, performanceClient) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
  }
  async acquireToken(request, apiId) {
    const reqTimestamp = nowSeconds();
    const response = await invokeAsync(this.executeTokenRequest.bind(this), RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(request, this.authority);
    const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
    const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin);
    responseHandler.validateTokenResponse(response.body, request.correlationId);
    return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, apiId, undefined, undefined, true, request.forceCache, requestId);
  }
  async acquireTokenByRefreshToken(request, apiId) {
    if (!request) {
      throw createClientConfigurationError(tokenRequestEmpty);
    }
    if (!request.account) {
      throw createClientAuthError(noAccountInSilentRequest);
    }
    const isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, request.correlationId);
    if (isFOCI) {
      try {
        return await invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, true, apiId);
      } catch (e) {
        const noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === noTokensFound;
        const clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === INVALID_GRANT_ERROR && e.subError === CLIENT_MISMATCH_ERROR;
        if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
          return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false, apiId);
        } else {
          throw e;
        }
      }
    }
    return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false, apiId);
  }
  async acquireTokenWithCachedRefreshToken(request, foci, apiId) {
    const refreshToken = invoke(this.cacheManager.getRefreshToken.bind(this.cacheManager), CacheManagerGetRefreshToken, this.logger, this.performanceClient, request.correlationId)(request.account, foci, request.correlationId, undefined);
    if (!refreshToken) {
      throw createInteractionRequiredAuthError(noTokensFound);
    }
    if (refreshToken.expiresOn) {
      const offset = request.refreshTokenExpirationOffsetSeconds || DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS;
      this.performanceClient?.addFields({
        cacheRtExpiresOnSeconds: Number(refreshToken.expiresOn),
        rtOffsetSeconds: offset
      }, request.correlationId);
      if (isTokenExpired(refreshToken.expiresOn, offset)) {
        throw createInteractionRequiredAuthError(refreshTokenExpired);
      }
    }
    const refreshTokenRequest = {
      ...request,
      refreshToken: refreshToken.secret,
      authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER,
      ccsCredential: {
        credential: request.account.homeAccountId,
        type: CcsCredentialType.HOME_ACCOUNT_ID
      }
    };
    try {
      return await invokeAsync(this.acquireToken.bind(this), RefreshTokenClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(refreshTokenRequest, apiId);
    } catch (e) {
      if (e instanceof InteractionRequiredAuthError) {
        if (e.subError === badToken) {
          this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache", request.correlationId);
          const badRefreshTokenKey = this.cacheManager.generateCredentialKey(refreshToken);
          this.cacheManager.removeRefreshToken(badRefreshTokenKey, request.correlationId);
        }
      }
      throw e;
    }
  }
  async executeTokenRequest(request, authority) {
    const queryParametersString = createTokenQueryParameters(request, this.config.authOptions.clientId, this.config.authOptions.redirectUri, this.performanceClient);
    const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
    const requestBody = await invokeAsync(this.createTokenRequestBody.bind(this), RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
    const headers = createTokenRequestHeaders(this.logger, this.config.systemOptions.preventCorsPreflight, request.ccsCredential);
    const thumbprint = getRequestThumbprint(this.config.authOptions.clientId, request);
    return invokeAsync(executePostToTokenEndpoint, RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, this.cacheManager, this.networkClient, this.logger, this.performanceClient, this.serverTelemetryManager);
  }
  async createTokenRequestBody(request) {
    const parameters = new Map;
    addClientId(parameters, request.embeddedClientId || request.extraParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
    if (request.redirectUri) {
      addRedirectUri(parameters, request.redirectUri);
    }
    addScopes(parameters, request.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes);
    addGrantType(parameters, GrantType.REFRESH_TOKEN_GRANT);
    addClientInfo(parameters);
    addLibraryInfo(parameters, this.config.libraryInfo);
    addApplicationTelemetry(parameters, this.config.telemetry.application);
    addThrottling(parameters);
    if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
      addServerTelemetry(parameters, this.serverTelemetryManager);
    }
    addRefreshToken(parameters, request.refreshToken);
    if (this.config.clientCredentials.clientSecret) {
      addClientSecret(parameters, this.config.clientCredentials.clientSecret);
    }
    if (this.config.clientCredentials.clientAssertion) {
      const clientAssertion = this.config.clientCredentials.clientAssertion;
      addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
      addClientAssertionType(parameters, clientAssertion.assertionType);
    }
    if (request.authenticationScheme === AuthenticationScheme.POP) {
      const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
      let reqCnfData;
      if (!request.popKid) {
        const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
        reqCnfData = generatedReqCnfData.reqCnfString;
      } else {
        reqCnfData = this.cryptoUtils.encodeKid(request.popKid);
      }
      addPopToken(parameters, reqCnfData);
    } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
      if (request.sshJwk) {
        addSshJwk(parameters, request.sshJwk);
      } else {
        throw createClientConfigurationError(missingSshJwk);
      }
    }
    if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
      addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
    }
    if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
      switch (request.ccsCredential.type) {
        case CcsCredentialType.HOME_ACCOUNT_ID:
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            this.logger.verbose(`Could not parse home account ID for CCS Header: '${e}'`, request.correlationId);
          }
          break;
        case CcsCredentialType.UPN:
          addCcsUpn(parameters, request.ccsCredential.credential);
          break;
      }
    }
    if (request.embeddedClientId) {
      addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    }
    if (request.extraParameters) {
      addExtraParameters(parameters, {
        ...request.extraParameters
      });
    }
    instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
    return mapToQueryString(parameters);
  }
}
var DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS = 300;
var init_RefreshTokenClient = __esm(() => {
  init_ClientConfiguration();
  init_RequestParameterBuilder();
  init_UrlUtils();
  init_Constants();
  init_AADServerParamKeys();
  init_ResponseHandler();
  init_PopTokenGenerator();
  init_StringUtils();
  init_ClientConfigurationError();
  init_ClientAuthError();
  init_ServerError();
  init_TimeUtils();
  init_UrlString();
  init_CcsCredential();
  init_ClientInfo();
  init_InteractionRequiredAuthError();
  init_PerformanceEvents();
  init_FunctionWrappers();
  init_ClientAssertionUtils();
  init_RequestThumbprint();
  init_Token();
  init_Logger();
  init_packageMetadata();
  init_InteractionRequiredAuthErrorCodes();
  init_ClientConfigurationErrorCodes();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/client/SilentFlowClient.mjs
class SilentFlowClient {
  constructor(configuration, performanceClient) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name, version);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = performanceClient;
  }
  async acquireCachedToken(request) {
    let lastCacheOutcome = CacheOutcome.NOT_APPLICABLE;
    if (request.forceRefresh || !StringUtils.isEmptyObj(request.claims)) {
      this.setCacheOutcome(CacheOutcome.FORCE_REFRESH_OR_CLAIMS, request.correlationId);
      throw createClientAuthError(tokenRefreshRequired);
    }
    if (!request.account) {
      throw createClientAuthError(noAccountInSilentRequest);
    }
    const requestTenantId = request.account.tenantId || getTenantFromAuthorityString(request.authority);
    const tokenKeys = this.cacheManager.getTokenKeys();
    const cachedAccessToken = this.cacheManager.getAccessToken(request.account, request, tokenKeys, requestTenantId);
    if (!cachedAccessToken) {
      this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
      throw createClientAuthError(tokenRefreshRequired);
    } else if (wasClockTurnedBack(cachedAccessToken.cachedAt) || isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
      this.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED, request.correlationId);
      throw createClientAuthError(tokenRefreshRequired);
    } else if (request.resource) {
      if (cachedAccessToken.resource !== request.resource) {
        this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      }
    } else if (cachedAccessToken.refreshOn && isTokenExpired(cachedAccessToken.refreshOn, 0)) {
      lastCacheOutcome = CacheOutcome.PROACTIVELY_REFRESHED;
    }
    const environment = request.authority || this.authority.getPreferredCache();
    const cacheRecord = {
      account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(request.account), request.correlationId),
      accessToken: cachedAccessToken,
      idToken: this.cacheManager.getIdToken(request.account, request.correlationId, tokenKeys, requestTenantId),
      refreshToken: null,
      appMetadata: this.cacheManager.readAppMetadataFromCache(environment, request.correlationId)
    };
    this.setCacheOutcome(lastCacheOutcome, request.correlationId);
    if (this.config.serverTelemetryManager) {
      this.config.serverTelemetryManager.incrementCacheHits();
    }
    return [
      await invokeAsync(this.generateResultFromCacheRecord.bind(this), SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, request.correlationId)(cacheRecord, request),
      lastCacheOutcome
    ];
  }
  setCacheOutcome(cacheOutcome, correlationId) {
    this.serverTelemetryManager?.setCacheOutcome(cacheOutcome);
    this.performanceClient?.addFields({
      cacheOutcome
    }, correlationId);
    if (cacheOutcome !== CacheOutcome.NOT_APPLICABLE) {
      this.logger.info(`Token refresh is required due to cache outcome: '${cacheOutcome}'`, correlationId);
    }
  }
  async generateResultFromCacheRecord(cacheRecord, request) {
    let idTokenClaims;
    if (cacheRecord.idToken) {
      idTokenClaims = extractTokenClaims(cacheRecord.idToken.secret, this.config.cryptoInterface.base64Decode);
    }
    if (request.maxAge || request.maxAge === 0) {
      const authTime = idTokenClaims?.auth_time;
      if (!authTime) {
        throw createClientAuthError(authTimeNotFound);
      }
      checkMaxAge(authTime, request.maxAge);
    }
    return ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, this.performanceClient, idTokenClaims);
  }
}
var init_SilentFlowClient = __esm(() => {
  init_ClientConfiguration();
  init_TimeUtils();
  init_ClientAuthError();
  init_ResponseHandler();
  init_Constants();
  init_StringUtils();
  init_AuthToken();
  init_PerformanceEvents();
  init_FunctionWrappers();
  init_Authority();
  init_Logger();
  init_packageMetadata();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/protocol/Authorize.mjs
var exports_Authorize = {};
__export(exports_Authorize, {
  validateAuthorizationResponse: () => validateAuthorizationResponse,
  getStandardAuthorizeRequestParameters: () => getStandardAuthorizeRequestParameters,
  getAuthorizeUrl: () => getAuthorizeUrl,
  getAuthorizationCodePayload: () => getAuthorizationCodePayload
});
function getStandardAuthorizeRequestParameters(authOptions, request, logger3, performanceClient) {
  const correlationId = request.correlationId;
  const parameters = new Map;
  addClientId(parameters, request.embeddedClientId || request.extraQueryParameters?.[CLIENT_ID] || authOptions.clientId);
  const requestScopes = [
    ...request.scopes || [],
    ...request.extraScopesToConsent || []
  ];
  addScopes(parameters, requestScopes, true, authOptions.authority.options.OIDCOptions?.defaultScopes);
  addResource(parameters, request.resource);
  addRedirectUri(parameters, request.redirectUri);
  addCorrelationId(parameters, correlationId);
  addResponseMode(parameters, request.responseMode);
  addClientInfo(parameters);
  addCliData(parameters);
  if (request.prompt) {
    addPrompt(parameters, request.prompt);
    performanceClient?.addFields({ prompt: request.prompt }, correlationId);
  }
  if (request.domainHint) {
    addDomainHint(parameters, request.domainHint);
    performanceClient?.addFields({ domainHintFromRequest: true }, correlationId);
  }
  if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
    if (request.sid && request.prompt === PromptValue.NONE) {
      logger3.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request", request.correlationId);
      addSid(parameters, request.sid);
      performanceClient?.addFields({ sidFromRequest: true }, correlationId);
    } else if (request.account) {
      const accountSid = extractAccountSid(request.account);
      let accountLoginHintClaim = extractLoginHint(request.account);
      if (accountLoginHintClaim && request.domainHint) {
        logger3.warning(`AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint`, request.correlationId);
        accountLoginHintClaim = null;
      }
      if (accountLoginHintClaim) {
        logger3.verbose("createAuthCodeUrlQueryString: login_hint claim present on account", request.correlationId);
        addLoginHint(parameters, accountLoginHintClaim);
        performanceClient?.addFields({ loginHintFromClaim: true }, correlationId);
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
          addCcsOid(parameters, clientInfo);
        } catch (e) {
          logger3.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header", request.correlationId);
        }
      } else if (accountSid && request.prompt === PromptValue.NONE) {
        logger3.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account", request.correlationId);
        addSid(parameters, accountSid);
        performanceClient?.addFields({ sidFromClaim: true }, correlationId);
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
          addCcsOid(parameters, clientInfo);
        } catch (e) {
          logger3.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header", request.correlationId);
        }
      } else if (request.loginHint) {
        logger3.verbose("createAuthCodeUrlQueryString: Adding login_hint from request", request.correlationId);
        addLoginHint(parameters, request.loginHint);
        addCcsUpn(parameters, request.loginHint);
        performanceClient?.addFields({ loginHintFromRequest: true }, correlationId);
      } else if (request.account.username) {
        logger3.verbose("createAuthCodeUrlQueryString: Adding login_hint from account", request.correlationId);
        addLoginHint(parameters, request.account.username);
        performanceClient?.addFields({ loginHintFromUpn: true }, correlationId);
        try {
          const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
          addCcsOid(parameters, clientInfo);
        } catch (e) {
          logger3.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header", request.correlationId);
        }
      }
    } else if (request.loginHint) {
      logger3.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request", request.correlationId);
      addLoginHint(parameters, request.loginHint);
      addCcsUpn(parameters, request.loginHint);
      performanceClient?.addFields({ loginHintFromRequest: true }, correlationId);
    }
  } else {
    logger3.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints", request.correlationId);
  }
  if (request.nonce) {
    addNonce(parameters, request.nonce);
  }
  if (request.state) {
    addState(parameters, request.state);
  }
  if (request.claims || authOptions.clientCapabilities && authOptions.clientCapabilities.length > 0) {
    addClaims(parameters, request.claims, authOptions.clientCapabilities);
  }
  if (request.embeddedClientId) {
    addBrokerParameters(parameters, authOptions.clientId, authOptions.redirectUri);
  }
  if (authOptions.instanceAware && (!request.extraQueryParameters || !Object.keys(request.extraQueryParameters).includes(INSTANCE_AWARE))) {
    addInstanceAware(parameters);
  }
  return parameters;
}
function getAuthorizeUrl(authority, requestParameters) {
  const queryString = mapToQueryString(requestParameters);
  return UrlString.appendQueryString(authority.authorizationEndpoint, queryString);
}
function getAuthorizationCodePayload(serverParams, cachedState) {
  validateAuthorizationResponse(serverParams, cachedState);
  if (!serverParams.code) {
    throw createClientAuthError(authorizationCodeMissingFromServerResponse);
  }
  return serverParams;
}
function validateAuthorizationResponse(serverResponse, requestState) {
  if (!serverResponse.state || !requestState) {
    throw serverResponse.state ? createClientAuthError(stateNotFound, "Cached State") : createClientAuthError(stateNotFound, "Server State");
  }
  let decodedServerResponseState;
  let decodedRequestState;
  try {
    decodedServerResponseState = decodeURIComponent(serverResponse.state);
  } catch (e) {
    throw createClientAuthError(invalidState, serverResponse.state);
  }
  try {
    decodedRequestState = decodeURIComponent(requestState);
  } catch (e) {
    throw createClientAuthError(invalidState, serverResponse.state);
  }
  if (decodedServerResponseState !== decodedRequestState) {
    throw createClientAuthError(stateMismatch);
  }
  if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
    const serverErrorNo = parseServerErrorNo(serverResponse);
    if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
      throw new InteractionRequiredAuthError(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.correlation_id || "", serverResponse.claims || "", serverErrorNo);
    }
    throw new ServerError(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverErrorNo);
  }
}
function parseServerErrorNo(serverResponse) {
  const errorCodePrefix = "code=";
  const errorCodePrefixIndex = serverResponse.error_uri?.lastIndexOf(errorCodePrefix);
  return errorCodePrefixIndex && errorCodePrefixIndex >= 0 ? serverResponse.error_uri?.substring(errorCodePrefixIndex + errorCodePrefix.length) : undefined;
}
function extractAccountSid(account) {
  return account.idTokenClaims?.sid || null;
}
function extractLoginHint(account) {
  return account.loginHint || account.idTokenClaims?.login_hint || null;
}
var init_Authorize = __esm(() => {
  init_RequestParameterBuilder();
  init_AADServerParamKeys();
  init_Constants();
  init_ClientInfo();
  init_UrlUtils();
  init_UrlString();
  init_ClientAuthError();
  init_InteractionRequiredAuthError();
  init_ServerError();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/request/BaseAuthRequest.mjs
function enforceResourceParameter(isMcp, request) {
  if (!isMcp) {
    return;
  }
  if (request.resource && (containsResourceParam(request.extraParameters) || containsResourceParam(request.extraQueryParameters))) {
    throw createClientAuthError(misplacedResourceParam);
  }
  if (!request.resource) {
    throw createClientAuthError(resourceParameterRequired);
  }
}
function containsResourceParam(params) {
  if (!params) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(params, "resource");
}
var init_BaseAuthRequest = __esm(() => {
  init_ClientAuthError();
  init_ClientAuthErrorCodes();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/error/AuthErrorCodes.mjs
var exports_AuthErrorCodes = {};
__export(exports_AuthErrorCodes, {
  unexpectedError: () => unexpectedError,
  postRequestFailed: () => postRequestFailed
});
var unexpectedError = "unexpected_error", postRequestFailed = "post_request_failed";
var init_AuthErrorCodes = __esm(() => {
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs
function makeExtraSkuString(params) {
  const { skus, libraryName, libraryVersion, extensionName, extensionVersion } = params;
  const skuMap = new Map([
    [0, [libraryName, libraryVersion]],
    [2, [extensionName, extensionVersion]]
  ]);
  let skuArr = [];
  if (skus?.length) {
    skuArr = skus.split(skuGroupSeparator);
    if (skuArr.length < 4) {
      return skus;
    }
  } else {
    skuArr = Array.from({ length: 4 }, () => skuValueSeparator);
  }
  skuMap.forEach((value, key) => {
    if (value.length === 2 && value[0]?.length && value[1]?.length) {
      setSku({
        skuArr,
        index: key,
        skuName: value[0],
        skuVersion: value[1]
      });
    }
  });
  return skuArr.join(skuGroupSeparator);
}
function setSku(params) {
  const { skuArr, index, skuName, skuVersion } = params;
  if (index >= skuArr.length) {
    return;
  }
  skuArr[index] = [skuName, skuVersion].join(skuValueSeparator);
}

class ServerTelemetryManager {
  constructor(telemetryRequest, cacheManager) {
    this.cacheOutcome = CacheOutcome.NOT_APPLICABLE;
    this.cacheManager = cacheManager;
    this.apiId = telemetryRequest.apiId;
    this.correlationId = telemetryRequest.correlationId;
    this.wrapperSKU = telemetryRequest.wrapperSKU || "";
    this.wrapperVer = telemetryRequest.wrapperVer || "";
    this.telemetryCacheKey = SERVER_TELEM_CACHE_KEY + CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
  }
  generateCurrentRequestHeaderValue() {
    const request = `${this.apiId}${SERVER_TELEM_VALUE_SEPARATOR}${this.cacheOutcome}`;
    const platformFieldsArr = [this.wrapperSKU, this.wrapperVer];
    const nativeBrokerErrorCode = this.getNativeBrokerErrorCode();
    if (nativeBrokerErrorCode?.length) {
      platformFieldsArr.push(`broker_error=${nativeBrokerErrorCode}`);
    }
    const platformFields = platformFieldsArr.join(SERVER_TELEM_VALUE_SEPARATOR);
    const regionDiscoveryFields = this.getRegionDiscoveryFields();
    const requestWithRegionDiscoveryFields = [
      request,
      regionDiscoveryFields
    ].join(SERVER_TELEM_VALUE_SEPARATOR);
    return [
      SERVER_TELEM_SCHEMA_VERSION,
      requestWithRegionDiscoveryFields,
      platformFields
    ].join(SERVER_TELEM_CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    const lastRequests = this.getLastRequests();
    const maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
    const failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_VALUE_SEPARATOR);
    const errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_VALUE_SEPARATOR);
    const errorCount = lastRequests.errors.length;
    const overflow = maxErrors < errorCount ? SERVER_TELEM_OVERFLOW_TRUE : SERVER_TELEM_OVERFLOW_FALSE;
    const platformFields = [errorCount, overflow].join(SERVER_TELEM_VALUE_SEPARATOR);
    return [
      SERVER_TELEM_SCHEMA_VERSION,
      lastRequests.cacheHits,
      failedRequests,
      errors,
      platformFields
    ].join(SERVER_TELEM_CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(error) {
    const lastRequests = this.getLastRequests();
    if (lastRequests.errors.length >= SERVER_TELEM_MAX_CACHED_ERRORS) {
      lastRequests.failedRequests.shift();
      lastRequests.failedRequests.shift();
      lastRequests.errors.shift();
    }
    lastRequests.failedRequests.push(this.apiId, this.correlationId);
    if (error instanceof Error && !!error && error.toString()) {
      if (error instanceof AuthError) {
        if (error.subError) {
          lastRequests.errors.push(error.subError);
        } else if (error.errorCode) {
          lastRequests.errors.push(error.errorCode);
        } else {
          lastRequests.errors.push(error.toString());
        }
      } else {
        lastRequests.errors.push(error.toString());
      }
    } else {
      lastRequests.errors.push(SERVER_TELEM_UNKNOWN_ERROR);
    }
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
    return;
  }
  incrementCacheHits() {
    const lastRequests = this.getLastRequests();
    lastRequests.cacheHits += 1;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
    return lastRequests.cacheHits;
  }
  getLastRequests() {
    const initialValue = {
      failedRequests: [],
      errors: [],
      cacheHits: 0
    };
    const lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey, this.correlationId);
    return lastRequests || initialValue;
  }
  clearTelemetryCache() {
    const lastRequests = this.getLastRequests();
    const numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
    const errorCount = lastRequests.errors.length;
    if (numErrorsFlushed === errorCount) {
      this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
    } else {
      const serverTelemEntity = {
        failedRequests: lastRequests.failedRequests.slice(numErrorsFlushed * 2),
        errors: lastRequests.errors.slice(numErrorsFlushed),
        cacheHits: 0
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity, this.correlationId);
    }
  }
  static maxErrorsToSend(serverTelemetryEntity) {
    let i;
    let maxErrors = 0;
    let dataSize = 0;
    const errorCount = serverTelemetryEntity.errors.length;
    for (i = 0;i < errorCount; i++) {
      const apiId = serverTelemetryEntity.failedRequests[2 * i] || "";
      const correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || "";
      const errorCode = serverTelemetryEntity.errors[i] || "";
      dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
      if (dataSize < SERVER_TELEM_MAX_LAST_HEADER_BYTES) {
        maxErrors += 1;
      } else {
        break;
      }
    }
    return maxErrors;
  }
  getRegionDiscoveryFields() {
    const regionDiscoveryFields = [];
    regionDiscoveryFields.push(this.regionUsed || "");
    regionDiscoveryFields.push(this.regionSource || "");
    regionDiscoveryFields.push(this.regionOutcome || "");
    return regionDiscoveryFields.join(",");
  }
  updateRegionDiscoveryMetadata(regionDiscoveryMetadata) {
    this.regionUsed = regionDiscoveryMetadata.region_used;
    this.regionSource = regionDiscoveryMetadata.region_source;
    this.regionOutcome = regionDiscoveryMetadata.region_outcome;
  }
  setCacheOutcome(cacheOutcome) {
    this.cacheOutcome = cacheOutcome;
  }
  setNativeBrokerErrorCode(errorCode) {
    const lastRequests = this.getLastRequests();
    lastRequests.nativeBrokerErrorCode = errorCode;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    const lastRequests = this.getLastRequests();
    delete lastRequests.nativeBrokerErrorCode;
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
  }
  static makeExtraSkuString(params) {
    return makeExtraSkuString(params);
  }
}
var skuGroupSeparator = ",", skuValueSeparator = "|";
var init_ServerTelemetryManager = __esm(() => {
  init_Constants();
  init_AuthError();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-common@16.4.1/node_modules/@azure/msal-common/dist/index-node.mjs
var init_index_node = __esm(() => {
  init_AuthorizationCodeClient();
  init_RefreshTokenClient();
  init_SilentFlowClient();
  init_ClientConfiguration();
  init_CcsCredential();
  init_Authority();
  init_AuthorityOptions();
  init_ProtocolMode();
  init_CacheManager();
  init_UrlString();
  init_ICrypto();
  init_Authorize();
  init_Token();
  init_BaseAuthRequest();
  init_RequestParameterBuilder();
  init_ResponseHandler();
  init_ScopeSet();
  init_Logger();
  init_InteractionRequiredAuthError();
  init_InteractionRequiredAuthErrorCodes();
  init_AuthError();
  init_AuthErrorCodes();
  init_ServerError();
  init_NetworkError();
  init_ClientAuthError();
  init_ClientAuthErrorCodes();
  init_ClientConfigurationError();
  init_ClientConfigurationErrorCodes();
  init_Constants();
  init_StringUtils();
  init_ServerTelemetryManager();
  init_AuthToken();
  init_AuthorityFactory();
  init_CacheHelpers();
  init_TimeUtils();
  init_UrlUtils();
  init_AADServerParamKeys();
  init_AccountEntityUtils();
  init_TokenCacheContext();
  init_ClientAssertionUtils();
  init_StubPerformanceClient();
  /*! @azure/msal-common v16.4.1 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/cache/serializer/Deserializer.mjs
class Deserializer {
  static deserializeJSONBlob(jsonFile) {
    const deserializedCache = !jsonFile ? {} : JSON.parse(jsonFile);
    return deserializedCache;
  }
  static deserializeAccounts(accounts) {
    const accountObjects = {};
    if (accounts) {
      Object.keys(accounts).map(function(key) {
        const serializedAcc = accounts[key];
        const mappedAcc = {
          homeAccountId: serializedAcc.home_account_id,
          environment: serializedAcc.environment,
          realm: serializedAcc.realm,
          localAccountId: serializedAcc.local_account_id,
          username: serializedAcc.username,
          authorityType: serializedAcc.authority_type,
          name: serializedAcc.name,
          clientInfo: serializedAcc.client_info,
          lastModificationTime: serializedAcc.last_modification_time,
          lastModificationApp: serializedAcc.last_modification_app,
          tenantProfiles: serializedAcc.tenantProfiles?.map((serializedTenantProfile) => {
            return JSON.parse(serializedTenantProfile);
          }),
          lastUpdatedAt: Date.now().toString()
        };
        const account = {};
        CacheManager.toObject(account, mappedAcc);
        accountObjects[key] = account;
      });
    }
    return accountObjects;
  }
  static deserializeIdTokens(idTokens) {
    const idObjects = {};
    if (idTokens) {
      Object.keys(idTokens).map(function(key) {
        const serializedIdT = idTokens[key];
        const idToken = {
          homeAccountId: serializedIdT.home_account_id,
          environment: serializedIdT.environment,
          credentialType: serializedIdT.credential_type,
          clientId: serializedIdT.client_id,
          secret: serializedIdT.secret,
          realm: serializedIdT.realm,
          lastUpdatedAt: Date.now().toString()
        };
        idObjects[key] = idToken;
      });
    }
    return idObjects;
  }
  static deserializeAccessTokens(accessTokens) {
    const atObjects = {};
    if (accessTokens) {
      Object.keys(accessTokens).map(function(key) {
        const serializedAT = accessTokens[key];
        const accessToken = {
          homeAccountId: serializedAT.home_account_id,
          environment: serializedAT.environment,
          credentialType: serializedAT.credential_type,
          clientId: serializedAT.client_id,
          secret: serializedAT.secret,
          realm: serializedAT.realm,
          target: serializedAT.target,
          cachedAt: serializedAT.cached_at,
          expiresOn: serializedAT.expires_on,
          extendedExpiresOn: serializedAT.extended_expires_on,
          refreshOn: serializedAT.refresh_on,
          keyId: serializedAT.key_id,
          tokenType: serializedAT.token_type,
          userAssertionHash: serializedAT.userAssertionHash,
          resource: serializedAT.resource,
          lastUpdatedAt: Date.now().toString()
        };
        atObjects[key] = accessToken;
      });
    }
    return atObjects;
  }
  static deserializeRefreshTokens(refreshTokens) {
    const rtObjects = {};
    if (refreshTokens) {
      Object.keys(refreshTokens).map(function(key) {
        const serializedRT = refreshTokens[key];
        const refreshToken = {
          homeAccountId: serializedRT.home_account_id,
          environment: serializedRT.environment,
          credentialType: serializedRT.credential_type,
          clientId: serializedRT.client_id,
          secret: serializedRT.secret,
          familyId: serializedRT.family_id,
          target: serializedRT.target,
          realm: serializedRT.realm,
          lastUpdatedAt: Date.now().toString()
        };
        rtObjects[key] = refreshToken;
      });
    }
    return rtObjects;
  }
  static deserializeAppMetadata(appMetadata) {
    const appMetadataObjects = {};
    if (appMetadata) {
      Object.keys(appMetadata).map(function(key) {
        const serializedAmdt = appMetadata[key];
        appMetadataObjects[key] = {
          clientId: serializedAmdt.client_id,
          environment: serializedAmdt.environment,
          familyId: serializedAmdt.family_id
        };
      });
    }
    return appMetadataObjects;
  }
  static deserializeAllCache(jsonCache) {
    return {
      accounts: jsonCache.Account ? this.deserializeAccounts(jsonCache.Account) : {},
      idTokens: jsonCache.IdToken ? this.deserializeIdTokens(jsonCache.IdToken) : {},
      accessTokens: jsonCache.AccessToken ? this.deserializeAccessTokens(jsonCache.AccessToken) : {},
      refreshTokens: jsonCache.RefreshToken ? this.deserializeRefreshTokens(jsonCache.RefreshToken) : {},
      appMetadata: jsonCache.AppMetadata ? this.deserializeAppMetadata(jsonCache.AppMetadata) : {}
    };
  }
}
var init_Deserializer = __esm(() => {
  init_index_node();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/internals.mjs
var exports_internals = {};
__export(exports_internals, {
  Serializer: () => Serializer,
  Deserializer: () => Deserializer
});
var init_internals = __esm(() => {
  init_Serializer();
  init_Deserializer();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/utils/Constants.mjs
var DEFAULT_MANAGED_IDENTITY_ID = "system_assigned_managed_identity", MANAGED_IDENTITY_DEFAULT_TENANT = "managed_identity", DEFAULT_AUTHORITY_FOR_MANAGED_IDENTITY, ManagedIdentityHeaders, ManagedIdentityQueryParameters, ManagedIdentityEnvironmentVariableNames, ManagedIdentitySourceNames, ManagedIdentityIdType, HttpMethod2, REGION_ENVIRONMENT_VARIABLE = "REGION_NAME", MSAL_FORCE_REGION = "MSAL_FORCE_REGION", RANDOM_OCTET_SIZE = 32, Hash, CharSet, CACHE, Constants, ApiId, JwtConstants, LOOPBACK_SERVER_CONSTANTS, AZURE_ARC_SECRET_FILE_MAX_SIZE_BYTES = 4096;
var init_Constants2 = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  DEFAULT_AUTHORITY_FOR_MANAGED_IDENTITY = `https://login.microsoftonline.com/${MANAGED_IDENTITY_DEFAULT_TENANT}/`;
  ManagedIdentityHeaders = {
    AUTHORIZATION_HEADER_NAME: "Authorization",
    METADATA_HEADER_NAME: "Metadata",
    APP_SERVICE_SECRET_HEADER_NAME: "X-IDENTITY-HEADER",
    ML_AND_SF_SECRET_HEADER_NAME: "secret"
  };
  ManagedIdentityQueryParameters = {
    API_VERSION: "api-version",
    RESOURCE: "resource",
    SHA256_TOKEN_TO_REFRESH: "token_sha256_to_refresh",
    XMS_CC: "xms_cc"
  };
  ManagedIdentityEnvironmentVariableNames = {
    AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST",
    DEFAULT_IDENTITY_CLIENT_ID: "DEFAULT_IDENTITY_CLIENT_ID",
    IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT",
    IDENTITY_HEADER: "IDENTITY_HEADER",
    IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT",
    IMDS_ENDPOINT: "IMDS_ENDPOINT",
    MSI_ENDPOINT: "MSI_ENDPOINT",
    MSI_SECRET: "MSI_SECRET"
  };
  ManagedIdentitySourceNames = {
    APP_SERVICE: "AppService",
    AZURE_ARC: "AzureArc",
    CLOUD_SHELL: "CloudShell",
    DEFAULT_TO_IMDS: "DefaultToImds",
    IMDS: "Imds",
    MACHINE_LEARNING: "MachineLearning",
    SERVICE_FABRIC: "ServiceFabric"
  };
  ManagedIdentityIdType = {
    SYSTEM_ASSIGNED: "system-assigned",
    USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id",
    USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id",
    USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id"
  };
  HttpMethod2 = {
    GET: "GET",
    POST: "POST"
  };
  Hash = {
    SHA256: "sha256"
  };
  CharSet = {
    CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
  };
  CACHE = {
    KEY_SEPARATOR: "-"
  };
  Constants = {
    MSAL_SKU: "msal.js.node",
    JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    HTTP_PROTOCOL: "http://",
    LOCALHOST: "localhost"
  };
  ApiId = {
    acquireTokenSilent: 62,
    acquireTokenByUsernamePassword: 371,
    acquireTokenByDeviceCode: 671,
    acquireTokenByClientCredential: 771,
    acquireTokenByOBO: 772,
    acquireTokenWithManagedIdentity: 773,
    acquireTokenByCode: 871,
    acquireTokenByRefreshToken: 872
  };
  JwtConstants = {
    RSA_256: "RS256",
    PSS_256: "PS256",
    X5T_256: "x5t#S256",
    X5T: "x5t",
    X5C: "x5c",
    AUDIENCE: "aud",
    EXPIRATION_TIME: "exp",
    ISSUER: "iss",
    SUBJECT: "sub",
    NOT_BEFORE: "nbf",
    JWT_ID: "jti"
  };
  LOOPBACK_SERVER_CONSTANTS = {
    INTERVAL_MS: 100,
    TIMEOUT_MS: 5000
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/network/HttpClient.mjs
class HttpClient {
  async sendGetRequestAsync(url, options, timeout) {
    return this.sendRequest(url, HttpMethod2.GET, options, timeout);
  }
  async sendPostRequestAsync(url, options) {
    return this.sendRequest(url, HttpMethod2.POST, options);
  }
  async sendRequest(url, method, options, timeout) {
    const controller = new AbortController;
    let timeoutId;
    if (timeout) {
      timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);
    }
    const fetchOptions = {
      method,
      headers: getFetchHeaders(options),
      signal: controller.signal
    };
    if (method === HttpMethod2.POST) {
      fetchOptions.body = options?.body || "";
    }
    let response;
    try {
      response = await fetch(url, fetchOptions);
    } catch (error) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (error instanceof Error && error.name === "AbortError") {
        throw createAuthError(exports_ClientAuthErrorCodes.networkError, "Request timeout");
      }
      const baseAuthError = createAuthError(exports_ClientAuthErrorCodes.networkError, `Network request failed: ${error instanceof Error ? error.message : "unknown"}`);
      throw createNetworkError(baseAuthError, undefined, undefined, error instanceof Error ? error : undefined);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    try {
      return {
        headers: getHeaderDict(response.headers),
        body: await response.json(),
        status: response.status
      };
    } catch (error) {
      throw createAuthError(exports_ClientAuthErrorCodes.tokenParsingError, `Failed to parse response: ${error instanceof Error ? error.message : "unknown"}`);
    }
  }
}
function getHeaderDict(headers) {
  const headerDict = {};
  headers.forEach((value, key) => {
    headerDict[key] = value;
  });
  return headerDict;
}
function getFetchHeaders(options) {
  const headers = new Headers;
  if (!(options && options.headers)) {
    return headers;
  }
  Object.entries(options.headers).forEach(([key, value]) => {
    headers.append(key, value);
  });
  return headers;
}
var init_HttpClient = __esm(() => {
  init_index_node();
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/error/ManagedIdentityErrorCodes.mjs
var invalidFileExtension = "invalid_file_extension", invalidFilePath = "invalid_file_path", invalidManagedIdentityIdType = "invalid_managed_identity_id_type", invalidSecret = "invalid_secret", missingId = "missing_client_id", networkUnavailable = "network_unavailable", platformNotSupported = "platform_not_supported", unableToCreateAzureArc = "unable_to_create_azure_arc", unableToCreateCloudShell = "unable_to_create_cloud_shell", unableToCreateSource = "unable_to_create_source", unableToReadSecretFile = "unable_to_read_secret_file", userAssignedNotAvailableAtRuntime = "user_assigned_not_available_at_runtime", wwwAuthenticateHeaderMissing = "www_authenticate_header_missing", wwwAuthenticateHeaderUnsupportedFormat = "www_authenticate_header_unsupported_format", MsiEnvironmentVariableUrlMalformedErrorCodes;
var init_ManagedIdentityErrorCodes = __esm(() => {
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  MsiEnvironmentVariableUrlMalformedErrorCodes = {
    [ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed",
    [ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed",
    [ManagedIdentityEnvironmentVariableNames.IMDS_ENDPOINT]: "imds_endpoint_url_malformed",
    [ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT]: "msi_endpoint_url_malformed"
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/error/ManagedIdentityError.mjs
function createManagedIdentityError(errorCode) {
  return new ManagedIdentityError(errorCode);
}
var ManagedIdentityErrorMessages, ManagedIdentityError;
var init_ManagedIdentityError = __esm(() => {
  init_index_node();
  init_ManagedIdentityErrorCodes();
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  ManagedIdentityErrorMessages = {
    [invalidFileExtension]: "The file path in the WWW-Authenticate header does not contain a .key file.",
    [invalidFilePath]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.",
    [invalidManagedIdentityIdType]: "More than one ManagedIdentityIdType was provided.",
    [invalidSecret]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.",
    [platformNotSupported]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.",
    [missingId]: "A ManagedIdentityId id was not provided.",
    [MsiEnvironmentVariableUrlMalformedErrorCodes.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`,
    [MsiEnvironmentVariableUrlMalformedErrorCodes.IDENTITY_ENDPOINT]: `The Managed Identity's '${ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT}' environment variable is malformed.`,
    [MsiEnvironmentVariableUrlMalformedErrorCodes.IMDS_ENDPOINT]: `The Managed Identity's '${ManagedIdentityEnvironmentVariableNames.IMDS_ENDPOINT}' environment variable is malformed.`,
    [MsiEnvironmentVariableUrlMalformedErrorCodes.MSI_ENDPOINT]: `The Managed Identity's '${ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT}' environment variable is malformed.`,
    [networkUnavailable]: "Authentication unavailable. The request to the managed identity endpoint timed out.",
    [unableToCreateAzureArc]: "Azure Arc Managed Identities can only be system assigned.",
    [unableToCreateCloudShell]: "Cloud Shell Managed Identities can only be system assigned.",
    [unableToCreateSource]: "Unable to create a Managed Identity source based on environment variables.",
    [unableToReadSecretFile]: "Unable to read the secret file.",
    [userAssignedNotAvailableAtRuntime]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.",
    [wwwAuthenticateHeaderMissing]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.",
    [wwwAuthenticateHeaderUnsupportedFormat]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format."
  };
  ManagedIdentityError = class ManagedIdentityError extends AuthError {
    constructor(errorCode) {
      super(errorCode, ManagedIdentityErrorMessages[errorCode]);
      this.name = "ManagedIdentityError";
      Object.setPrototypeOf(this, ManagedIdentityError.prototype);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/config/ManagedIdentityId.mjs
class ManagedIdentityId {
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get idType() {
    return this._idType;
  }
  set idType(value) {
    this._idType = value;
  }
  constructor(managedIdentityIdParams) {
    const userAssignedClientId = managedIdentityIdParams?.userAssignedClientId;
    const userAssignedResourceId = managedIdentityIdParams?.userAssignedResourceId;
    const userAssignedObjectId = managedIdentityIdParams?.userAssignedObjectId;
    if (userAssignedClientId) {
      if (userAssignedResourceId || userAssignedObjectId) {
        throw createManagedIdentityError(invalidManagedIdentityIdType);
      }
      this.id = userAssignedClientId;
      this.idType = ManagedIdentityIdType.USER_ASSIGNED_CLIENT_ID;
    } else if (userAssignedResourceId) {
      if (userAssignedClientId || userAssignedObjectId) {
        throw createManagedIdentityError(invalidManagedIdentityIdType);
      }
      this.id = userAssignedResourceId;
      this.idType = ManagedIdentityIdType.USER_ASSIGNED_RESOURCE_ID;
    } else if (userAssignedObjectId) {
      if (userAssignedClientId || userAssignedResourceId) {
        throw createManagedIdentityError(invalidManagedIdentityIdType);
      }
      this.id = userAssignedObjectId;
      this.idType = ManagedIdentityIdType.USER_ASSIGNED_OBJECT_ID;
    } else {
      this.id = DEFAULT_MANAGED_IDENTITY_ID;
      this.idType = ManagedIdentityIdType.SYSTEM_ASSIGNED;
    }
  }
}
var init_ManagedIdentityId = __esm(() => {
  init_ManagedIdentityError();
  init_Constants2();
  init_ManagedIdentityErrorCodes();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/error/NodeAuthError.mjs
var NodeAuthErrorMessage, NodeAuthError;
var init_NodeAuthError = __esm(() => {
  init_index_node();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  NodeAuthErrorMessage = {
    invalidLoopbackAddressType: {
      code: "invalid_loopback_server_address_type",
      desc: "Loopback server address is not type string. This is unexpected."
    },
    unableToLoadRedirectUri: {
      code: "unable_to_load_redirectUrl",
      desc: "Loopback server callback was invoked without a url. This is unexpected."
    },
    noAuthCodeInResponse: {
      code: "no_auth_code_in_response",
      desc: "No auth code found in the server response. Please check your network trace to determine what happened."
    },
    noLoopbackServerExists: {
      code: "no_loopback_server_exists",
      desc: "No loopback server exists yet."
    },
    loopbackServerAlreadyExists: {
      code: "loopback_server_already_exists",
      desc: "Loopback server already exists. Cannot create another."
    },
    loopbackServerTimeout: {
      code: "loopback_server_timeout",
      desc: "Timed out waiting for auth code listener to be registered."
    },
    stateNotFoundError: {
      code: "state_not_found",
      desc: "State not found. Please verify that the request originated from msal."
    },
    thumbprintMissing: {
      code: "thumbprint_missing_from_client_certificate",
      desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint."
    },
    redirectUriNotSupported: {
      code: "redirect_uri_not_supported",
      desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request."
    }
  };
  NodeAuthError = class NodeAuthError extends AuthError {
    constructor(errorCode, errorMessage) {
      super(errorCode, errorMessage);
      this.name = "NodeAuthError";
    }
    static createInvalidLoopbackAddressTypeError() {
      return new NodeAuthError(NodeAuthErrorMessage.invalidLoopbackAddressType.code, `${NodeAuthErrorMessage.invalidLoopbackAddressType.desc}`);
    }
    static createUnableToLoadRedirectUrlError() {
      return new NodeAuthError(NodeAuthErrorMessage.unableToLoadRedirectUri.code, `${NodeAuthErrorMessage.unableToLoadRedirectUri.desc}`);
    }
    static createNoAuthCodeInResponseError() {
      return new NodeAuthError(NodeAuthErrorMessage.noAuthCodeInResponse.code, `${NodeAuthErrorMessage.noAuthCodeInResponse.desc}`);
    }
    static createNoLoopbackServerExistsError() {
      return new NodeAuthError(NodeAuthErrorMessage.noLoopbackServerExists.code, `${NodeAuthErrorMessage.noLoopbackServerExists.desc}`);
    }
    static createLoopbackServerAlreadyExistsError() {
      return new NodeAuthError(NodeAuthErrorMessage.loopbackServerAlreadyExists.code, `${NodeAuthErrorMessage.loopbackServerAlreadyExists.desc}`);
    }
    static createLoopbackServerTimeoutError() {
      return new NodeAuthError(NodeAuthErrorMessage.loopbackServerTimeout.code, `${NodeAuthErrorMessage.loopbackServerTimeout.desc}`);
    }
    static createStateNotFoundError() {
      return new NodeAuthError(NodeAuthErrorMessage.stateNotFoundError.code, NodeAuthErrorMessage.stateNotFoundError.desc);
    }
    static createThumbprintMissingError() {
      return new NodeAuthError(NodeAuthErrorMessage.thumbprintMissing.code, NodeAuthErrorMessage.thumbprintMissing.desc);
    }
    static createRedirectUriNotSupportedError() {
      return new NodeAuthError(NodeAuthErrorMessage.redirectUriNotSupported.code, NodeAuthErrorMessage.redirectUriNotSupported.desc);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/config/Configuration.mjs
function buildAppConfiguration({ auth, broker, cache, system, telemetry }) {
  const systemOptions = {
    ...DEFAULT_SYSTEM_OPTIONS2,
    networkClient: new HttpClient,
    loggerOptions: system?.loggerOptions || DEFAULT_LOGGER_OPTIONS,
    disableInternalRetries: system?.disableInternalRetries || false
  };
  if (!!auth.clientCertificate && !!!auth.clientCertificate.thumbprint && !!!auth.clientCertificate.thumbprintSha256) {
    throw NodeAuthError.createStateNotFoundError();
  }
  return {
    auth: { ...DEFAULT_AUTH_OPTIONS, ...auth },
    broker: { ...broker },
    cache: { ...cache },
    system: { ...systemOptions, ...system },
    telemetry: { ...DEFAULT_TELEMETRY_OPTIONS2, ...telemetry }
  };
}
function buildManagedIdentityConfiguration({ clientCapabilities, managedIdentityIdParams, system }) {
  const managedIdentityId = new ManagedIdentityId(managedIdentityIdParams);
  const loggerOptions = system?.loggerOptions || DEFAULT_LOGGER_OPTIONS;
  let networkClient;
  if (system?.networkClient) {
    networkClient = system.networkClient;
  } else {
    networkClient = new HttpClient;
  }
  return {
    clientCapabilities: clientCapabilities || [],
    managedIdentityId,
    system: {
      loggerOptions,
      networkClient
    },
    disableInternalRetries: system?.disableInternalRetries || false
  };
}
var DEFAULT_AUTH_OPTIONS, DEFAULT_LOGGER_OPTIONS, DEFAULT_SYSTEM_OPTIONS2, DEFAULT_TELEMETRY_OPTIONS2;
var init_Configuration = __esm(() => {
  init_index_node();
  init_HttpClient();
  init_ManagedIdentityId();
  init_NodeAuthError();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: exports_Constants.DEFAULT_AUTHORITY,
    clientSecret: "",
    clientAssertion: "",
    clientCertificate: {
      thumbprint: "",
      thumbprintSha256: "",
      privateKey: "",
      x5c: ""
    },
    knownAuthorities: [],
    cloudDiscoveryMetadata: "",
    authorityMetadata: "",
    clientCapabilities: [],
    azureCloudOptions: {
      azureCloudInstance: AzureCloudInstance.None,
      tenant: ""
    },
    isMcp: false
  };
  DEFAULT_LOGGER_OPTIONS = {
    loggerCallback: () => {},
    piiLoggingEnabled: false,
    logLevel: LogLevel.Info
  };
  DEFAULT_SYSTEM_OPTIONS2 = {
    loggerOptions: DEFAULT_LOGGER_OPTIONS,
    networkClient: new HttpClient,
    disableInternalRetries: false,
    protocolMode: ProtocolMode.AAD
  };
  DEFAULT_TELEMETRY_OPTIONS2 = {
    application: {
      appName: "",
      appVersion: ""
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/crypto/GuidGenerator.mjs
class GuidGenerator {
  generateGuid() {
    return v4_default();
  }
  isGuid(guid) {
    const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regexGuid.test(guid);
  }
}
var init_GuidGenerator = __esm(() => {
  init_dist_node();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/utils/EncodingUtils.mjs
class EncodingUtils {
  static base64Encode(str, encoding) {
    return Buffer.from(str, encoding).toString(exports_Constants.EncodingTypes.BASE64);
  }
  static base64EncodeUrl(str, encoding) {
    return EncodingUtils.base64Encode(str, encoding).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(base64Str) {
    return Buffer.from(base64Str, exports_Constants.EncodingTypes.BASE64).toString("utf8");
  }
  static base64DecodeUrl(base64Str) {
    let str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) {
      str += "=";
    }
    return EncodingUtils.base64Decode(str);
  }
}
var init_EncodingUtils = __esm(() => {
  init_index_node();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/crypto/HashUtils.mjs
import crypto2 from "crypto";

class HashUtils {
  sha256(buffer) {
    return crypto2.createHash(Hash.SHA256).update(buffer).digest();
  }
}
var init_HashUtils = __esm(() => {
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/crypto/PkceGenerator.mjs
import crypto3 from "crypto";

class PkceGenerator {
  constructor() {
    this.hashUtils = new HashUtils;
  }
  async generatePkceCodes() {
    const verifier = this.generateCodeVerifier();
    const challenge = this.generateCodeChallengeFromVerifier(verifier);
    return { verifier, challenge };
  }
  generateCodeVerifier() {
    const charArr = [];
    const maxNumber = 256 - 256 % CharSet.CV_CHARSET.length;
    while (charArr.length <= RANDOM_OCTET_SIZE) {
      const byte = crypto3.randomBytes(1)[0];
      if (byte >= maxNumber) {
        continue;
      }
      const index = byte % CharSet.CV_CHARSET.length;
      charArr.push(CharSet.CV_CHARSET[index]);
    }
    const verifier = charArr.join("");
    return EncodingUtils.base64EncodeUrl(verifier);
  }
  generateCodeChallengeFromVerifier(codeVerifier) {
    return EncodingUtils.base64EncodeUrl(this.hashUtils.sha256(codeVerifier).toString(exports_Constants.EncodingTypes.BASE64), exports_Constants.EncodingTypes.BASE64);
  }
}
var init_PkceGenerator = __esm(() => {
  init_index_node();
  init_Constants2();
  init_EncodingUtils();
  init_HashUtils();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/crypto/CryptoProvider.mjs
class CryptoProvider {
  constructor() {
    this.pkceGenerator = new PkceGenerator;
    this.guidGenerator = new GuidGenerator;
    this.hashUtils = new HashUtils;
  }
  base64UrlEncode() {
    throw new Error("Method not implemented.");
  }
  encodeKid() {
    throw new Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(input) {
    return EncodingUtils.base64Encode(input);
  }
  base64Decode(input) {
    return EncodingUtils.base64Decode(input);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw new Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw new Error("Method not implemented.");
  }
  clearKeystore() {
    throw new Error("Method not implemented.");
  }
  signJwt() {
    throw new Error("Method not implemented.");
  }
  async hashString(plainText) {
    return EncodingUtils.base64EncodeUrl(this.hashUtils.sha256(plainText).toString(exports_Constants.EncodingTypes.BASE64), exports_Constants.EncodingTypes.BASE64);
  }
}
var init_CryptoProvider = __esm(() => {
  init_index_node();
  init_GuidGenerator();
  init_EncodingUtils();
  init_PkceGenerator();
  init_HashUtils();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/cache/CacheHelpers.mjs
function generateCredentialKey(credential) {
  const familyId = credential.credentialType === exports_Constants.CredentialType.REFRESH_TOKEN && credential.familyId || credential.clientId;
  const scheme = credential.tokenType && credential.tokenType.toLowerCase() !== exports_Constants.AuthenticationScheme.BEARER.toLowerCase() ? credential.tokenType.toLowerCase() : "";
  const credentialKey = [
    credential.homeAccountId,
    credential.environment,
    credential.credentialType,
    familyId,
    credential.realm || "",
    credential.target || "",
    scheme
  ];
  return credentialKey.join(CACHE.KEY_SEPARATOR).toLowerCase();
}
function generateAccountKey(account) {
  const homeTenantId = account.homeAccountId.split(".")[1];
  const accountKey = [
    account.homeAccountId,
    account.environment,
    homeTenantId || account.tenantId || ""
  ];
  return accountKey.join(CACHE.KEY_SEPARATOR).toLowerCase();
}
var init_CacheHelpers2 = __esm(() => {
  init_index_node();
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/cache/NodeStorage.mjs
var NodeStorage;
var init_NodeStorage = __esm(() => {
  init_index_node();
  init_Deserializer();
  init_Serializer();
  init_CacheHelpers2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  NodeStorage = class NodeStorage extends CacheManager {
    constructor(logger3, clientId, cryptoImpl, staticAuthorityOptions) {
      super(clientId, cryptoImpl, logger3, new StubPerformanceClient, staticAuthorityOptions);
      this.cache = {};
      this.changeEmitters = [];
      this.logger = logger3;
    }
    registerChangeEmitter(func) {
      this.changeEmitters.push(func);
    }
    emitChange() {
      this.changeEmitters.forEach((func) => func.call(null));
    }
    cacheToInMemoryCache(cache) {
      const inMemoryCache = {
        accounts: {},
        idTokens: {},
        accessTokens: {},
        refreshTokens: {},
        appMetadata: {}
      };
      for (const key in cache) {
        const value = cache[key];
        if (typeof value !== "object") {
          continue;
        }
        if (exports_AccountEntityUtils.isAccountEntity(value)) {
          inMemoryCache.accounts[key] = value;
        } else if (exports_CacheHelpers.isIdTokenEntity(value)) {
          inMemoryCache.idTokens[key] = value;
        } else if (exports_CacheHelpers.isAccessTokenEntity(value)) {
          inMemoryCache.accessTokens[key] = value;
        } else if (exports_CacheHelpers.isRefreshTokenEntity(value)) {
          inMemoryCache.refreshTokens[key] = value;
        } else if (exports_CacheHelpers.isAppMetadataEntity(key, value)) {
          inMemoryCache.appMetadata[key] = value;
        } else {
          continue;
        }
      }
      return inMemoryCache;
    }
    inMemoryCacheToCache(inMemoryCache) {
      let cache = this.getCache();
      cache = {
        ...cache,
        ...inMemoryCache.accounts,
        ...inMemoryCache.idTokens,
        ...inMemoryCache.accessTokens,
        ...inMemoryCache.refreshTokens,
        ...inMemoryCache.appMetadata
      };
      return cache;
    }
    getInMemoryCache() {
      this.logger.trace("Getting in-memory cache", "");
      const inMemoryCache = this.cacheToInMemoryCache(this.getCache());
      return inMemoryCache;
    }
    setInMemoryCache(inMemoryCache) {
      this.logger.trace("Setting in-memory cache", "");
      const cache = this.inMemoryCacheToCache(inMemoryCache);
      this.setCache(cache);
      this.emitChange();
    }
    getCache() {
      this.logger.trace("Getting cache key-value store", "");
      return this.cache;
    }
    setCache(cache) {
      this.logger.trace("Setting cache key value store", "");
      this.cache = cache;
      this.emitChange();
    }
    getItem(key) {
      this.logger.tracePii(`Item key: ${key}`, "");
      const cache = this.getCache();
      return cache[key];
    }
    setItem(key, value) {
      this.logger.tracePii(`Item key: ${key}`, "");
      const cache = this.getCache();
      cache[key] = value;
      this.setCache(cache);
    }
    generateCredentialKey(credential) {
      return generateCredentialKey(credential);
    }
    generateAccountKey(account) {
      return generateAccountKey(account);
    }
    getAccountKeys() {
      const inMemoryCache = this.getInMemoryCache();
      const accountKeys = Object.keys(inMemoryCache.accounts);
      return accountKeys;
    }
    getTokenKeys() {
      const inMemoryCache = this.getInMemoryCache();
      const tokenKeys = {
        idToken: Object.keys(inMemoryCache.idTokens),
        accessToken: Object.keys(inMemoryCache.accessTokens),
        refreshToken: Object.keys(inMemoryCache.refreshTokens)
      };
      return tokenKeys;
    }
    getAccount(accountKey) {
      const cachedAccount = this.getItem(accountKey);
      return cachedAccount && typeof cachedAccount === "object" ? { ...cachedAccount } : null;
    }
    async setAccount(account) {
      const accountKey = this.generateAccountKey(exports_AccountEntityUtils.getAccountInfo(account));
      this.setItem(accountKey, account);
    }
    getIdTokenCredential(idTokenKey) {
      const idToken = this.getItem(idTokenKey);
      if (exports_CacheHelpers.isIdTokenEntity(idToken)) {
        return idToken;
      }
      return null;
    }
    async setIdTokenCredential(idToken) {
      const idTokenKey = this.generateCredentialKey(idToken);
      this.setItem(idTokenKey, idToken);
    }
    getAccessTokenCredential(accessTokenKey) {
      const accessToken = this.getItem(accessTokenKey);
      if (exports_CacheHelpers.isAccessTokenEntity(accessToken)) {
        return accessToken;
      }
      return null;
    }
    async setAccessTokenCredential(accessToken) {
      const accessTokenKey = this.generateCredentialKey(accessToken);
      this.setItem(accessTokenKey, accessToken);
    }
    getRefreshTokenCredential(refreshTokenKey) {
      const refreshToken = this.getItem(refreshTokenKey);
      if (exports_CacheHelpers.isRefreshTokenEntity(refreshToken)) {
        return refreshToken;
      }
      return null;
    }
    async setRefreshTokenCredential(refreshToken) {
      const refreshTokenKey = this.generateCredentialKey(refreshToken);
      this.setItem(refreshTokenKey, refreshToken);
    }
    getAppMetadata(appMetadataKey) {
      const appMetadata = this.getItem(appMetadataKey);
      if (exports_CacheHelpers.isAppMetadataEntity(appMetadataKey, appMetadata)) {
        return appMetadata;
      }
      return null;
    }
    setAppMetadata(appMetadata) {
      const appMetadataKey = exports_CacheHelpers.generateAppMetadataKey(appMetadata);
      this.setItem(appMetadataKey, appMetadata);
    }
    getServerTelemetry(serverTelemetrykey) {
      const serverTelemetryEntity = this.getItem(serverTelemetrykey);
      if (serverTelemetryEntity && exports_CacheHelpers.isServerTelemetryEntity(serverTelemetrykey, serverTelemetryEntity)) {
        return serverTelemetryEntity;
      }
      return null;
    }
    setServerTelemetry(serverTelemetryKey, serverTelemetry) {
      this.setItem(serverTelemetryKey, serverTelemetry);
    }
    getAuthorityMetadata(key) {
      const authorityMetadataEntity = this.getItem(key);
      if (authorityMetadataEntity && exports_CacheHelpers.isAuthorityMetadataEntity(key, authorityMetadataEntity)) {
        return authorityMetadataEntity;
      }
      return null;
    }
    getAuthorityMetadataKeys() {
      return this.getKeys().filter((key) => {
        return this.isAuthorityMetadata(key);
      });
    }
    setAuthorityMetadata(key, metadata) {
      this.setItem(key, metadata);
    }
    getThrottlingCache(throttlingCacheKey) {
      const throttlingCache = this.getItem(throttlingCacheKey);
      if (throttlingCache && exports_CacheHelpers.isThrottlingEntity(throttlingCacheKey, throttlingCache)) {
        return throttlingCache;
      }
      return null;
    }
    setThrottlingCache(throttlingCacheKey, throttlingCache) {
      this.setItem(throttlingCacheKey, throttlingCache);
    }
    removeItem(key) {
      this.logger.tracePii(`Item key: ${key}`, "");
      let result = false;
      const cache = this.getCache();
      if (!!cache[key]) {
        delete cache[key];
        result = true;
      }
      if (result) {
        this.setCache(cache);
        this.emitChange();
      }
      return result;
    }
    removeOutdatedAccount(accountKey) {
      this.removeItem(accountKey);
    }
    containsKey(key) {
      return this.getKeys().includes(key);
    }
    getKeys() {
      this.logger.trace("Retrieving all cache keys", "");
      const cache = this.getCache();
      return [...Object.keys(cache)];
    }
    clear() {
      this.logger.trace("Clearing cache entries created by MSAL", "");
      const cacheKeys = this.getKeys();
      cacheKeys.forEach((key) => {
        this.removeItem(key);
      });
      this.emitChange();
    }
    static generateInMemoryCache(cache) {
      return Deserializer.deserializeAllCache(Deserializer.deserializeJSONBlob(cache));
    }
    static generateJsonCache(inMemoryCache) {
      return Serializer.serializeAllCache(inMemoryCache);
    }
    updateCredentialCacheKey(currentCacheKey, credential) {
      const updatedCacheKey = this.generateCredentialKey(credential);
      if (currentCacheKey !== updatedCacheKey) {
        const cacheItem = this.getItem(currentCacheKey);
        if (cacheItem) {
          this.removeItem(currentCacheKey);
          this.setItem(updatedCacheKey, cacheItem);
          this.logger.verbose(`Updated an outdated ${credential.credentialType} cache key`, "");
          return updatedCacheKey;
        } else {
          this.logger.error(`Attempted to update an outdated ${credential.credentialType} cache key but no item matching the outdated key was found in storage`, "");
        }
      }
      return currentCacheKey;
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/cache/TokenCache.mjs
class TokenCache {
  constructor(storage, logger3, cachePlugin) {
    this.cacheHasChanged = false;
    this.storage = storage;
    this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this));
    if (cachePlugin) {
      this.persistence = cachePlugin;
    }
    this.logger = logger3;
  }
  hasChanged() {
    return this.cacheHasChanged;
  }
  serialize() {
    this.logger.trace("Serializing in-memory cache", "");
    let finalState = Serializer.serializeAllCache(this.storage.getInMemoryCache());
    if (this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk", "");
      finalState = this.mergeState(JSON.parse(this.cacheSnapshot), finalState);
    } else {
      this.logger.trace("No cache snapshot to merge", "");
    }
    this.cacheHasChanged = false;
    return JSON.stringify(finalState);
  }
  deserialize(cache) {
    this.logger.trace("Deserializing JSON to in-memory cache", "");
    this.cacheSnapshot = cache;
    if (this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk", "");
      const deserializedCache = Deserializer.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(deserializedCache);
    } else {
      this.logger.trace("No cache snapshot to deserialize", "");
    }
  }
  getKVStore() {
    return this.storage.getCache();
  }
  getCacheSnapshot() {
    const deserializedPersistentStorage = NodeStorage.generateInMemoryCache(this.cacheSnapshot);
    return this.storage.inMemoryCacheToCache(deserializedPersistentStorage);
  }
  async getAllAccounts(correlationId = new CryptoProvider().createNewGuid()) {
    this.logger.trace("getAllAccounts called", correlationId);
    let cacheContext;
    try {
      if (this.persistence) {
        cacheContext = new TokenCacheContext(this, false);
        await this.persistence.beforeCacheAccess(cacheContext);
      }
      return this.storage.getAllAccounts({}, correlationId);
    } finally {
      if (this.persistence && cacheContext) {
        await this.persistence.afterCacheAccess(cacheContext);
      }
    }
  }
  async getAccountByHomeId(homeAccountId) {
    const allAccounts = await this.getAllAccounts();
    if (homeAccountId && allAccounts && allAccounts.length) {
      return allAccounts.filter((accountObj) => accountObj.homeAccountId === homeAccountId)[0] || null;
    } else {
      return null;
    }
  }
  async getAccountByLocalId(localAccountId) {
    const allAccounts = await this.getAllAccounts();
    if (localAccountId && allAccounts && allAccounts.length) {
      return allAccounts.filter((accountObj) => accountObj.localAccountId === localAccountId)[0] || null;
    } else {
      return null;
    }
  }
  async removeAccount(account, correlationId) {
    this.logger.trace("removeAccount called", correlationId || "");
    let cacheContext;
    try {
      if (this.persistence) {
        cacheContext = new TokenCacheContext(this, true);
        await this.persistence.beforeCacheAccess(cacheContext);
      }
      this.storage.removeAccount(account, correlationId || new GuidGenerator().generateGuid());
    } finally {
      if (this.persistence && cacheContext) {
        await this.persistence.afterCacheAccess(cacheContext);
      }
    }
  }
  async overwriteCache() {
    if (!this.persistence) {
      this.logger.info("No persistence layer specified, cache cannot be overwritten", "");
      return;
    }
    this.logger.info("Overwriting in-memory cache with persistent cache", "");
    this.storage.clear();
    const cacheContext = new TokenCacheContext(this, false);
    await this.persistence.beforeCacheAccess(cacheContext);
    const cacheSnapshot = this.getCacheSnapshot();
    this.storage.setCache(cacheSnapshot);
    await this.persistence.afterCacheAccess(cacheContext);
  }
  handleChangeEvent() {
    this.cacheHasChanged = true;
  }
  mergeState(oldState, currentState) {
    this.logger.trace("Merging in-memory cache with cache snapshot", "");
    const stateAfterRemoval = this.mergeRemovals(oldState, currentState);
    return this.mergeUpdates(stateAfterRemoval, currentState);
  }
  mergeUpdates(oldState, newState) {
    Object.keys(newState).forEach((newKey) => {
      const newValue = newState[newKey];
      if (!oldState.hasOwnProperty(newKey)) {
        if (newValue !== null) {
          oldState[newKey] = newValue;
        }
      } else {
        const newValueNotNull = newValue !== null;
        const newValueIsObject = typeof newValue === "object";
        const newValueIsNotArray = !Array.isArray(newValue);
        const oldStateNotUndefinedOrNull = typeof oldState[newKey] !== "undefined" && oldState[newKey] !== null;
        if (newValueNotNull && newValueIsObject && newValueIsNotArray && oldStateNotUndefinedOrNull) {
          this.mergeUpdates(oldState[newKey], newValue);
        } else {
          oldState[newKey] = newValue;
        }
      }
    });
    return oldState;
  }
  mergeRemovals(oldState, newState) {
    this.logger.trace("Remove updated entries in cache", "");
    const accounts = oldState.Account ? this.mergeRemovalsDict(oldState.Account, newState.Account) : oldState.Account;
    const accessTokens = oldState.AccessToken ? this.mergeRemovalsDict(oldState.AccessToken, newState.AccessToken) : oldState.AccessToken;
    const refreshTokens = oldState.RefreshToken ? this.mergeRemovalsDict(oldState.RefreshToken, newState.RefreshToken) : oldState.RefreshToken;
    const idTokens = oldState.IdToken ? this.mergeRemovalsDict(oldState.IdToken, newState.IdToken) : oldState.IdToken;
    const appMetadata = oldState.AppMetadata ? this.mergeRemovalsDict(oldState.AppMetadata, newState.AppMetadata) : oldState.AppMetadata;
    return {
      ...oldState,
      Account: accounts,
      AccessToken: accessTokens,
      RefreshToken: refreshTokens,
      IdToken: idTokens,
      AppMetadata: appMetadata
    };
  }
  mergeRemovalsDict(oldState, newState) {
    const finalState = { ...oldState };
    Object.keys(oldState).forEach((oldKey) => {
      if (!newState || !newState.hasOwnProperty(oldKey)) {
        delete finalState[oldKey];
      }
    });
    return finalState;
  }
  overlayDefaults(passedInCache) {
    this.logger.trace("Overlaying input cache with the default cache", "");
    return {
      Account: {
        ...defaultSerializedCache.Account,
        ...passedInCache.Account
      },
      IdToken: {
        ...defaultSerializedCache.IdToken,
        ...passedInCache.IdToken
      },
      AccessToken: {
        ...defaultSerializedCache.AccessToken,
        ...passedInCache.AccessToken
      },
      RefreshToken: {
        ...defaultSerializedCache.RefreshToken,
        ...passedInCache.RefreshToken
      },
      AppMetadata: {
        ...defaultSerializedCache.AppMetadata,
        ...passedInCache.AppMetadata
      }
    };
  }
}
var defaultSerializedCache;
var init_TokenCache = __esm(() => {
  init_NodeStorage();
  init_index_node();
  init_Deserializer();
  init_Serializer();
  init_GuidGenerator();
  init_CryptoProvider();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  defaultSerializedCache = {
    Account: {},
    IdToken: {},
    AccessToken: {},
    RefreshToken: {},
    AppMetadata: {}
  };
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS((exports, module) => {
  var jws = require_jws();
  module.exports = function(jwt, options) {
    options = options || {};
    var decoded = jws.decode(jwt, options);
    if (!decoded) {
      return null;
    }
    var payload = decoded.payload;
    if (typeof payload === "string") {
      try {
        var obj = JSON.parse(payload);
        if (obj !== null && typeof obj === "object") {
          payload = obj;
        }
      } catch (e) {}
    }
    if (options.complete === true) {
      return {
        header: decoded.header,
        payload,
        signature: decoded.signature
      };
    }
    return payload;
  };
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS((exports, module) => {
  var JsonWebTokenError = function(message, error) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "JsonWebTokenError";
    this.message = message;
    if (error)
      this.inner = error;
  };
  JsonWebTokenError.prototype = Object.create(Error.prototype);
  JsonWebTokenError.prototype.constructor = JsonWebTokenError;
  module.exports = JsonWebTokenError;
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS((exports, module) => {
  var JsonWebTokenError = require_JsonWebTokenError();
  var NotBeforeError = function(message, date) {
    JsonWebTokenError.call(this, message);
    this.name = "NotBeforeError";
    this.date = date;
  };
  NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
  NotBeforeError.prototype.constructor = NotBeforeError;
  module.exports = NotBeforeError;
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS((exports, module) => {
  var JsonWebTokenError = require_JsonWebTokenError();
  var TokenExpiredError = function(message, expiredAt) {
    JsonWebTokenError.call(this, message);
    this.name = "TokenExpiredError";
    this.expiredAt = expiredAt;
  };
  TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
  TokenExpiredError.prototype.constructor = TokenExpiredError;
  module.exports = TokenExpiredError;
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS((exports, module) => {
  var ms = require_ms();
  module.exports = function(time, iat) {
    var timestamp = iat || Math.floor(Date.now() / 1000);
    if (typeof time === "string") {
      var milliseconds = ms(time);
      if (typeof milliseconds === "undefined") {
        return;
      }
      return Math.floor(timestamp + milliseconds / 1000);
    } else if (typeof time === "number") {
      return timestamp + time;
    } else {
      return;
    }
  };
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
var require_asymmetricKeyDetailsSupported = __commonJS((exports, module) => {
  var semver = require_semver();
  module.exports = semver.satisfies(process.version, ">=15.7.0");
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
var require_rsaPssKeyDetailsSupported = __commonJS((exports, module) => {
  var semver = require_semver();
  module.exports = semver.satisfies(process.version, ">=16.9.0");
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
var require_validateAsymmetricKey = __commonJS((exports, module) => {
  var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
  var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
  var allowedAlgorithmsForKeys = {
    ec: ["ES256", "ES384", "ES512"],
    rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
    "rsa-pss": ["PS256", "PS384", "PS512"]
  };
  var allowedCurves = {
    ES256: "prime256v1",
    ES384: "secp384r1",
    ES512: "secp521r1"
  };
  module.exports = function(algorithm, key) {
    if (!algorithm || !key)
      return;
    const keyType = key.asymmetricKeyType;
    if (!keyType)
      return;
    const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
    if (!allowedAlgorithms) {
      throw new Error(`Unknown key type "${keyType}".`);
    }
    if (!allowedAlgorithms.includes(algorithm)) {
      throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
    }
    if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
      switch (keyType) {
        case "ec":
          const keyCurve = key.asymmetricKeyDetails.namedCurve;
          const allowedCurve = allowedCurves[algorithm];
          if (keyCurve !== allowedCurve) {
            throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
          }
          break;
        case "rsa-pss":
          if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
            const length = parseInt(algorithm.slice(-3), 10);
            const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
            if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
              throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
            }
            if (saltLength !== undefined && saltLength > length >> 3) {
              throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
            }
          }
          break;
      }
    }
  };
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS((exports, module) => {
  var semver = require_semver();
  module.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS((exports, module) => {
  var JsonWebTokenError = require_JsonWebTokenError();
  var NotBeforeError = require_NotBeforeError();
  var TokenExpiredError = require_TokenExpiredError();
  var decode = require_decode();
  var timespan = require_timespan();
  var validateAsymmetricKey = require_validateAsymmetricKey();
  var PS_SUPPORTED = require_psSupported();
  var jws = require_jws();
  var { KeyObject, createSecretKey, createPublicKey } = __require("crypto");
  var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
  var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
  var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
  var HS_ALGS = ["HS256", "HS384", "HS512"];
  if (PS_SUPPORTED) {
    PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
    RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
  }
  module.exports = function(jwtString, secretOrPublicKey, options, callback) {
    if (typeof options === "function" && !callback) {
      callback = options;
      options = {};
    }
    if (!options) {
      options = {};
    }
    options = Object.assign({}, options);
    let done;
    if (callback) {
      done = callback;
    } else {
      done = function(err, data) {
        if (err)
          throw err;
        return data;
      };
    }
    if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
      return done(new JsonWebTokenError("clockTimestamp must be a number"));
    }
    if (options.nonce !== undefined && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
      return done(new JsonWebTokenError("nonce must be a non-empty string"));
    }
    if (options.allowInvalidAsymmetricKeyTypes !== undefined && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
      return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
    }
    const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);
    if (!jwtString) {
      return done(new JsonWebTokenError("jwt must be provided"));
    }
    if (typeof jwtString !== "string") {
      return done(new JsonWebTokenError("jwt must be a string"));
    }
    const parts = jwtString.split(".");
    if (parts.length !== 3) {
      return done(new JsonWebTokenError("jwt malformed"));
    }
    let decodedToken;
    try {
      decodedToken = decode(jwtString, { complete: true });
    } catch (err) {
      return done(err);
    }
    if (!decodedToken) {
      return done(new JsonWebTokenError("invalid token"));
    }
    const header = decodedToken.header;
    let getSecret;
    if (typeof secretOrPublicKey === "function") {
      if (!callback) {
        return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
      }
      getSecret = secretOrPublicKey;
    } else {
      getSecret = function(header2, secretCallback) {
        return secretCallback(null, secretOrPublicKey);
      };
    }
    return getSecret(header, function(err, secretOrPublicKey2) {
      if (err) {
        return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
      }
      const hasSignature = parts[2].trim() !== "";
      if (!hasSignature && secretOrPublicKey2) {
        return done(new JsonWebTokenError("jwt signature is required"));
      }
      if (hasSignature && !secretOrPublicKey2) {
        return done(new JsonWebTokenError("secret or public key must be provided"));
      }
      if (!hasSignature && !options.algorithms) {
        return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
      }
      if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
        try {
          secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
        } catch (_) {
          try {
            secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
          } catch (_2) {
            return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
          }
        }
      }
      if (!options.algorithms) {
        if (secretOrPublicKey2.type === "secret") {
          options.algorithms = HS_ALGS;
        } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
          options.algorithms = RSA_KEY_ALGS;
        } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
          options.algorithms = EC_KEY_ALGS;
        } else {
          options.algorithms = PUB_KEY_ALGS;
        }
      }
      if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
        return done(new JsonWebTokenError("invalid algorithm"));
      }
      if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
        return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
      } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
        return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
      }
      if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
          validateAsymmetricKey(header.alg, secretOrPublicKey2);
        } catch (e) {
          return done(e);
        }
      }
      let valid;
      try {
        valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
      } catch (e) {
        return done(e);
      }
      if (!valid) {
        return done(new JsonWebTokenError("invalid signature"));
      }
      const payload = decodedToken.payload;
      if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
        if (typeof payload.nbf !== "number") {
          return done(new JsonWebTokenError("invalid nbf value"));
        }
        if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
          return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1000)));
        }
      }
      if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
        if (typeof payload.exp !== "number") {
          return done(new JsonWebTokenError("invalid exp value"));
        }
        if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
          return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1000)));
        }
      }
      if (options.audience) {
        const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
        const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
        const match = target.some(function(targetAudience) {
          return audiences.some(function(audience) {
            return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
          });
        });
        if (!match) {
          return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
        }
      }
      if (options.issuer) {
        const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
        if (invalid_issuer) {
          return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
        }
      }
      if (options.subject) {
        if (payload.sub !== options.subject) {
          return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
        }
      }
      if (options.jwtid) {
        if (payload.jti !== options.jwtid) {
          return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
        }
      }
      if (options.nonce) {
        if (payload.nonce !== options.nonce) {
          return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
        }
      }
      if (options.maxAge) {
        if (typeof payload.iat !== "number") {
          return done(new JsonWebTokenError("iat required when maxAge is specified"));
        }
        const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
        if (typeof maxAgeTimestamp === "undefined") {
          return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
        if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
          return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1000)));
        }
      }
      if (options.complete === true) {
        const signature = decodedToken.signature;
        return done(null, {
          header,
          payload,
          signature
        });
      }
      return done(null, payload);
    });
  };
});

// node_modules/.bun/lodash.includes@4.3.0/node_modules/lodash.includes/index.js
var require_lodash = __commonJS((exports, module) => {
  var INFINITY = 1 / 0;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var MAX_INTEGER = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  var NAN = 0 / 0;
  var argsTag = "[object Arguments]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var freeParseInt = parseInt;
  function arrayMap(array, iteratee) {
    var index = -1, length = array ? array.length : 0, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return baseFindIndex(array, baseIsNaN, fromIndex);
    }
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  function baseIsNaN(value) {
    return value !== value;
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeKeys = overArg(Object.keys, Object);
  var nativeMax = Math.max;
  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isString(value) {
    return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function values(object) {
    return object ? baseValues(object, keys(object)) : [];
  }
  module.exports = includes;
});

// node_modules/.bun/lodash.isboolean@3.0.3/node_modules/lodash.isboolean/index.js
var require_lodash2 = __commonJS((exports, module) => {
  var boolTag = "[object Boolean]";
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  module.exports = isBoolean;
});

// node_modules/.bun/lodash.isinteger@4.0.4/node_modules/lodash.isinteger/index.js
var require_lodash3 = __commonJS((exports, module) => {
  var INFINITY = 1 / 0;
  var MAX_INTEGER = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  var NAN = 0 / 0;
  var symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isInteger(value) {
    return typeof value == "number" && value == toInteger(value);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  module.exports = isInteger;
});

// node_modules/.bun/lodash.isnumber@3.0.3/node_modules/lodash.isnumber/index.js
var require_lodash4 = __commonJS((exports, module) => {
  var numberTag = "[object Number]";
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isNumber(value) {
    return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
  }
  module.exports = isNumber;
});

// node_modules/.bun/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js
var require_lodash5 = __commonJS((exports, module) => {
  var objectTag = "[object Object]";
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e) {}
    }
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  var objectToString = objectProto.toString;
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  module.exports = isPlainObject;
});

// node_modules/.bun/lodash.isstring@4.0.1/node_modules/lodash.isstring/index.js
var require_lodash6 = __commonJS((exports, module) => {
  var stringTag = "[object String]";
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var isArray = Array.isArray;
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isString(value) {
    return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
  }
  module.exports = isString;
});

// node_modules/.bun/lodash.once@4.1.1/node_modules/lodash.once/index.js
var require_lodash7 = __commonJS((exports, module) => {
  var FUNC_ERROR_TEXT = "Expected a function";
  var INFINITY = 1 / 0;
  var MAX_INTEGER = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  var NAN = 0 / 0;
  var symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function before(n, func) {
    var result;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
      if (--n > 0) {
        result = func.apply(this, arguments);
      }
      if (n <= 1) {
        func = undefined;
      }
      return result;
    };
  }
  function once(func) {
    return before(2, func);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  module.exports = once;
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS((exports, module) => {
  var timespan = require_timespan();
  var PS_SUPPORTED = require_psSupported();
  var validateAsymmetricKey = require_validateAsymmetricKey();
  var jws = require_jws();
  var includes = require_lodash();
  var isBoolean = require_lodash2();
  var isInteger = require_lodash3();
  var isNumber = require_lodash4();
  var isPlainObject = require_lodash5();
  var isString = require_lodash6();
  var once = require_lodash7();
  var { KeyObject, createSecretKey, createPrivateKey } = __require("crypto");
  var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  if (PS_SUPPORTED) {
    SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
  }
  var sign_options_schema = {
    expiresIn: { isValid: function(value) {
      return isInteger(value) || isString(value) && value;
    }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
    notBefore: { isValid: function(value) {
      return isInteger(value) || isString(value) && value;
    }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
    audience: { isValid: function(value) {
      return isString(value) || Array.isArray(value);
    }, message: '"audience" must be a string or array' },
    algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
    header: { isValid: isPlainObject, message: '"header" must be an object' },
    encoding: { isValid: isString, message: '"encoding" must be a string' },
    issuer: { isValid: isString, message: '"issuer" must be a string' },
    subject: { isValid: isString, message: '"subject" must be a string' },
    jwtid: { isValid: isString, message: '"jwtid" must be a string' },
    noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
    keyid: { isValid: isString, message: '"keyid" must be a string' },
    mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
    allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
    allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
  };
  var registered_claims_schema = {
    iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
    exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
    nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
  };
  function validate(schema, allowUnknown, object, parameterName) {
    if (!isPlainObject(object)) {
      throw new Error('Expected "' + parameterName + '" to be a plain object.');
    }
    Object.keys(object).forEach(function(key) {
      const validator = schema[key];
      if (!validator) {
        if (!allowUnknown) {
          throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
        }
        return;
      }
      if (!validator.isValid(object[key])) {
        throw new Error(validator.message);
      }
    });
  }
  function validateOptions(options) {
    return validate(sign_options_schema, false, options, "options");
  }
  function validatePayload(payload) {
    return validate(registered_claims_schema, true, payload, "payload");
  }
  var options_to_payload = {
    audience: "aud",
    issuer: "iss",
    subject: "sub",
    jwtid: "jti"
  };
  var options_for_objects = [
    "expiresIn",
    "notBefore",
    "noTimestamp",
    "audience",
    "issuer",
    "subject",
    "jwtid"
  ];
  module.exports = function(payload, secretOrPrivateKey, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else {
      options = options || {};
    }
    const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
    const header = Object.assign({
      alg: options.algorithm || "HS256",
      typ: isObjectPayload ? "JWT" : undefined,
      kid: options.keyid
    }, options.header);
    function failure(err) {
      if (callback) {
        return callback(err);
      }
      throw err;
    }
    if (!secretOrPrivateKey && options.algorithm !== "none") {
      return failure(new Error("secretOrPrivateKey must have a value"));
    }
    if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
      try {
        secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
      } catch (_) {
        try {
          secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
        } catch (_2) {
          return failure(new Error("secretOrPrivateKey is not valid key material"));
        }
      }
    }
    if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
      return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
    } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
      if (secretOrPrivateKey.type !== "private") {
        return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
      }
      if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== undefined && secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
        return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
      }
    }
    if (typeof payload === "undefined") {
      return failure(new Error("payload is required"));
    } else if (isObjectPayload) {
      try {
        validatePayload(payload);
      } catch (error) {
        return failure(error);
      }
      if (!options.mutatePayload) {
        payload = Object.assign({}, payload);
      }
    } else {
      const invalid_options = options_for_objects.filter(function(opt) {
        return typeof options[opt] !== "undefined";
      });
      if (invalid_options.length > 0) {
        return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
      }
    }
    if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
      return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    }
    if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
      return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    }
    try {
      validateOptions(options);
    } catch (error) {
      return failure(error);
    }
    if (!options.allowInvalidAsymmetricKeyTypes) {
      try {
        validateAsymmetricKey(header.alg, secretOrPrivateKey);
      } catch (error) {
        return failure(error);
      }
    }
    const timestamp = payload.iat || Math.floor(Date.now() / 1000);
    if (options.noTimestamp) {
      delete payload.iat;
    } else if (isObjectPayload) {
      payload.iat = timestamp;
    }
    if (typeof options.notBefore !== "undefined") {
      try {
        payload.nbf = timespan(options.notBefore, timestamp);
      } catch (err) {
        return failure(err);
      }
      if (typeof payload.nbf === "undefined") {
        return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
    }
    if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
      try {
        payload.exp = timespan(options.expiresIn, timestamp);
      } catch (err) {
        return failure(err);
      }
      if (typeof payload.exp === "undefined") {
        return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
    }
    Object.keys(options_to_payload).forEach(function(key) {
      const claim = options_to_payload[key];
      if (typeof options[key] !== "undefined") {
        if (typeof payload[claim] !== "undefined") {
          return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
        }
        payload[claim] = options[key];
      }
    });
    const encoding = options.encoding || "utf8";
    if (typeof callback === "function") {
      callback = callback && once(callback);
      jws.createSign({
        header,
        privateKey: secretOrPrivateKey,
        payload,
        encoding
      }).once("error", callback).once("done", function(signature) {
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
        callback(null, signature);
      });
    } else {
      let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
      if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
        throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
      }
      return signature;
    }
  };
});

// node_modules/.bun/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS((exports, module) => {
  module.exports = {
    decode: require_decode(),
    verify: require_verify(),
    sign: require_sign(),
    JsonWebTokenError: require_JsonWebTokenError(),
    NotBeforeError: require_NotBeforeError(),
    TokenExpiredError: require_TokenExpiredError()
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/error/ClientAuthErrorCodes.mjs
var missingTenantIdError = "missing_tenant_id_error", userTimeoutReached = "user_timeout_reached", invalidAssertion = "invalid_assertion", invalidClientCredential = "invalid_client_credential", deviceCodePollingCancelled = "device_code_polling_cancelled", deviceCodeExpired = "device_code_expired", deviceCodeUnknownError = "device_code_unknown_error";
var init_ClientAuthErrorCodes2 = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ClientAssertion.mjs
class ClientAssertion {
  static fromAssertion(assertion) {
    const clientAssertion = new ClientAssertion;
    clientAssertion.jwt = assertion;
    return clientAssertion;
  }
  static fromCertificate(thumbprint, privateKey, publicCertificate) {
    const clientAssertion = new ClientAssertion;
    clientAssertion.privateKey = privateKey;
    clientAssertion.thumbprint = thumbprint;
    clientAssertion.useSha256 = false;
    if (publicCertificate) {
      clientAssertion.publicCertificate = this.parseCertificate(publicCertificate);
    }
    return clientAssertion;
  }
  static fromCertificateWithSha256Thumbprint(thumbprint, privateKey, publicCertificate) {
    const clientAssertion = new ClientAssertion;
    clientAssertion.privateKey = privateKey;
    clientAssertion.thumbprint = thumbprint;
    clientAssertion.useSha256 = true;
    if (publicCertificate) {
      clientAssertion.publicCertificate = this.parseCertificate(publicCertificate);
    }
    return clientAssertion;
  }
  getJwt(cryptoProvider, issuer, jwtAudience) {
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && issuer === this.issuer && jwtAudience === this.jwtAudience) {
        return this.jwt;
      }
      return this.createJwt(cryptoProvider, issuer, jwtAudience);
    }
    if (this.jwt) {
      return this.jwt;
    }
    throw createClientAuthError(invalidAssertion);
  }
  createJwt(cryptoProvider, issuer, jwtAudience) {
    this.issuer = issuer;
    this.jwtAudience = jwtAudience;
    const issuedAt = exports_TimeUtils.nowSeconds();
    this.expirationTime = issuedAt + 600;
    const algorithm = this.useSha256 ? JwtConstants.PSS_256 : JwtConstants.RSA_256;
    const header = {
      alg: algorithm
    };
    const thumbprintHeader = this.useSha256 ? JwtConstants.X5T_256 : JwtConstants.X5T;
    Object.assign(header, {
      [thumbprintHeader]: EncodingUtils.base64EncodeUrl(this.thumbprint, exports_Constants.EncodingTypes.HEX)
    });
    if (this.publicCertificate) {
      Object.assign(header, {
        [JwtConstants.X5C]: this.publicCertificate
      });
    }
    const payload = {
      [JwtConstants.AUDIENCE]: this.jwtAudience,
      [JwtConstants.EXPIRATION_TIME]: this.expirationTime,
      [JwtConstants.ISSUER]: this.issuer,
      [JwtConstants.SUBJECT]: this.issuer,
      [JwtConstants.NOT_BEFORE]: issuedAt,
      [JwtConstants.JWT_ID]: cryptoProvider.createNewGuid()
    };
    this.jwt = import_jsonwebtoken.default.sign(payload, this.privateKey, { header });
    return this.jwt;
  }
  isExpired() {
    return this.expirationTime < exports_TimeUtils.nowSeconds();
  }
  static parseCertificate(publicCertificate) {
    const regexToFindCerts = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs;
    const certs = [];
    let matches;
    while ((matches = regexToFindCerts.exec(publicCertificate)) !== null) {
      certs.push(matches[1].replace(/\r*\n/g, ""));
    }
    return certs;
  }
}
var import_jsonwebtoken;
var init_ClientAssertion = __esm(() => {
  init_index_node();
  init_EncodingUtils();
  init_Constants2();
  init_ClientAuthErrorCodes2();
  import_jsonwebtoken = __toESM(require_jsonwebtoken(), 1);
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/packageMetadata.mjs
var name2 = "@azure/msal-node", version3 = "5.1.2";
var init_packageMetadata2 = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/BaseClient.mjs
class BaseClient {
  constructor(configuration) {
    this.config = buildClientConfiguration(configuration);
    this.logger = new Logger(this.config.loggerOptions, name2, version3);
    this.cryptoUtils = this.config.cryptoInterface;
    this.cacheManager = this.config.storageInterface;
    this.networkClient = this.config.networkInterface;
    this.serverTelemetryManager = this.config.serverTelemetryManager;
    this.authority = this.config.authOptions.authority;
    this.performanceClient = new StubPerformanceClient;
  }
  createTokenRequestHeaders(ccsCred) {
    return exports_Token.createTokenRequestHeaders(this.logger, false, ccsCred);
  }
  async executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId) {
    return exports_Token.executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId, this.cacheManager, this.networkClient, this.logger, this.performanceClient, this.serverTelemetryManager);
  }
  async sendPostRequest(thumbprint, tokenEndpoint, options, correlationId) {
    return exports_Token.sendPostRequest(thumbprint, tokenEndpoint, options, correlationId, this.cacheManager, this.networkClient, this.logger, this.performanceClient);
  }
  createTokenQueryParameters(request) {
    return exports_Token.createTokenQueryParameters(request, this.config.authOptions.clientId, this.config.authOptions.redirectUri, this.performanceClient);
  }
}
var init_BaseClient = __esm(() => {
  init_index_node();
  init_packageMetadata2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/UsernamePasswordClient.mjs
var UsernamePasswordClient;
var init_UsernamePasswordClient = __esm(() => {
  init_index_node();
  init_Constants2();
  init_BaseClient();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  UsernamePasswordClient = class UsernamePasswordClient extends BaseClient {
    constructor(configuration) {
      super(configuration);
    }
    async acquireToken(request) {
      this.logger.info("in acquireToken call in username-password client", request.correlationId);
      const reqTimestamp = exports_TimeUtils.nowSeconds();
      const response = await this.executeTokenRequest(this.authority, request);
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin);
      responseHandler.validateTokenResponse(response.body, request.correlationId);
      const tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, ApiId.acquireTokenByUsernamePassword);
      return tokenResponse;
    }
    async executeTokenRequest(authority, request) {
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
      const requestBody = await this.createTokenRequestBody(request);
      const headers = this.createTokenRequestHeaders({
        credential: request.username,
        type: CcsCredentialType.UPN
      });
      const thumbprint = {
        clientId: this.config.authOptions.clientId,
        authority: authority.canonicalAuthority,
        scopes: request.scopes,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid
      };
      return this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint, request.correlationId);
    }
    async createTokenRequestBody(request) {
      const parameters = new Map;
      exports_RequestParameterBuilder.addClientId(parameters, this.config.authOptions.clientId);
      exports_RequestParameterBuilder.addUsername(parameters, request.username);
      exports_RequestParameterBuilder.addPassword(parameters, request.password);
      exports_RequestParameterBuilder.addScopes(parameters, request.scopes);
      exports_RequestParameterBuilder.addResponseType(parameters, exports_Constants.OAuthResponseType.IDTOKEN_TOKEN);
      exports_RequestParameterBuilder.addGrantType(parameters, exports_Constants.GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
      exports_RequestParameterBuilder.addClientInfo(parameters);
      exports_RequestParameterBuilder.addLibraryInfo(parameters, this.config.libraryInfo);
      exports_RequestParameterBuilder.addApplicationTelemetry(parameters, this.config.telemetry.application);
      exports_RequestParameterBuilder.addThrottling(parameters);
      if (this.serverTelemetryManager) {
        exports_RequestParameterBuilder.addServerTelemetry(parameters, this.serverTelemetryManager);
      }
      const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      exports_RequestParameterBuilder.addCorrelationId(parameters, correlationId);
      if (this.config.clientCredentials.clientSecret) {
        exports_RequestParameterBuilder.addClientSecret(parameters, this.config.clientCredentials.clientSecret);
      }
      const clientAssertion = this.config.clientCredentials.clientAssertion;
      if (clientAssertion) {
        exports_RequestParameterBuilder.addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        exports_RequestParameterBuilder.addClientAssertionType(parameters, clientAssertion.assertionType);
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        exports_RequestParameterBuilder.addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      if (this.config.systemOptions.preventCorsPreflight && request.username) {
        exports_RequestParameterBuilder.addCcsUpn(parameters, request.username);
      }
      return exports_UrlUtils.mapToQueryString(parameters);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/protocol/Authorize.mjs
function getAuthCodeRequestUrl(config, authority, request, logger3) {
  const parameters = exports_Authorize.getStandardAuthorizeRequestParameters({
    ...config.auth,
    authority,
    redirectUri: request.redirectUri || ""
  }, request, logger3);
  exports_RequestParameterBuilder.addLibraryInfo(parameters, {
    sku: Constants.MSAL_SKU,
    version: version3,
    cpu: process.arch || "",
    os: process.platform || ""
  });
  if (config.system.protocolMode !== ProtocolMode.OIDC) {
    exports_RequestParameterBuilder.addApplicationTelemetry(parameters, config.telemetry.application);
  }
  exports_RequestParameterBuilder.addResponseType(parameters, exports_Constants.OAuthResponseType.CODE);
  if (request.codeChallenge && request.codeChallengeMethod) {
    exports_RequestParameterBuilder.addCodeChallengeParams(parameters, request.codeChallenge, request.codeChallengeMethod);
  }
  exports_RequestParameterBuilder.addExtraParameters(parameters, request.extraQueryParameters || {});
  return exports_Authorize.getAuthorizeUrl(authority, parameters);
}
var init_Authorize2 = __esm(() => {
  init_index_node();
  init_Constants2();
  init_packageMetadata2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ClientApplication.mjs
class ClientApplication {
  constructor(configuration) {
    this.config = buildAppConfiguration(configuration);
    this.cryptoProvider = new CryptoProvider;
    this.logger = new Logger(this.config.system.loggerOptions, name2, version3);
    this.storage = new NodeStorage(this.logger, this.config.auth.clientId, this.cryptoProvider, buildStaticAuthorityOptions(this.config.auth));
    this.tokenCache = new TokenCache(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  async getAuthCodeUrl(request) {
    this.logger.info("getAuthCodeUrl called", request.correlationId || "");
    const validRequest = {
      ...request,
      ...await this.initializeBaseRequest(request),
      responseMode: request.responseMode || exports_Constants.ResponseMode.QUERY,
      authenticationScheme: exports_Constants.AuthenticationScheme.BEARER,
      state: request.state || "",
      nonce: request.nonce || ""
    };
    const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
    return getAuthCodeRequestUrl(this.config, discoveredAuthority, validRequest, this.logger);
  }
  async acquireTokenByCode(request, authCodePayLoad) {
    this.logger.info("acquireTokenByCode called", request.correlationId || "");
    if (request.state && authCodePayLoad) {
      this.logger.info("acquireTokenByCode - validating state", request.correlationId || "");
      this.validateState(request.state, authCodePayLoad.state || "");
      authCodePayLoad = { ...authCodePayLoad, state: "" };
    }
    const validRequest = {
      ...request,
      ...await this.initializeBaseRequest(request),
      authenticationScheme: exports_Constants.AuthenticationScheme.BEARER
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByCode, validRequest.correlationId);
    try {
      const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
      const authClientConfig = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, validRequest.redirectUri, serverTelemetryManager);
      const authorizationCodeClient = new AuthorizationCodeClient(authClientConfig, new StubPerformanceClient);
      this.logger.verbose("Auth code client created", validRequest.correlationId);
      return await authorizationCodeClient.acquireToken(validRequest, ApiId.acquireTokenByCode, authCodePayLoad);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }
      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  async acquireTokenByRefreshToken(request) {
    this.logger.info("acquireTokenByRefreshToken called", request.correlationId || "");
    const validRequest = {
      ...request,
      ...await this.initializeBaseRequest(request),
      authenticationScheme: exports_Constants.AuthenticationScheme.BEARER
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByRefreshToken, validRequest.correlationId);
    try {
      const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
      const refreshTokenClientConfig = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, validRequest.redirectUri || "", serverTelemetryManager);
      const refreshTokenClient = new RefreshTokenClient(refreshTokenClientConfig, new StubPerformanceClient);
      this.logger.verbose("Refresh token client created", validRequest.correlationId);
      return await refreshTokenClient.acquireToken(validRequest, ApiId.acquireTokenByRefreshToken);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }
      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  async acquireTokenSilent(request) {
    const validRequest = {
      ...request,
      ...await this.initializeBaseRequest(request),
      forceRefresh: request.forceRefresh || false
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent, validRequest.correlationId, validRequest.forceRefresh);
    try {
      const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
      const clientConfiguration = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, validRequest.redirectUri || "", serverTelemetryManager);
      const silentFlowClient = new SilentFlowClient(clientConfiguration, new StubPerformanceClient);
      this.logger.verbose("Silent flow client created", validRequest.correlationId);
      try {
        await this.tokenCache.overwriteCache();
        return await this.acquireCachedTokenSilent(validRequest, silentFlowClient, clientConfiguration);
      } catch (error) {
        if (error instanceof ClientAuthError && error.errorCode === exports_ClientAuthErrorCodes.tokenRefreshRequired) {
          const refreshTokenClient = new RefreshTokenClient(clientConfiguration, new StubPerformanceClient);
          return refreshTokenClient.acquireTokenByRefreshToken(validRequest, ApiId.acquireTokenSilent);
        }
        throw error;
      }
    } catch (error) {
      if (error instanceof AuthError) {
        error.setCorrelationId(validRequest.correlationId);
      }
      serverTelemetryManager.cacheFailedRequest(error);
      throw error;
    }
  }
  async acquireCachedTokenSilent(validRequest, silentFlowClient, clientConfiguration) {
    const [authResponse, cacheOutcome] = await silentFlowClient.acquireCachedToken({
      ...validRequest,
      scopes: validRequest.scopes?.length ? validRequest.scopes : [...exports_Constants.OIDC_DEFAULT_SCOPES]
    });
    if (cacheOutcome === exports_Constants.CacheOutcome.PROACTIVELY_REFRESHED) {
      this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.", validRequest.correlationId);
      const refreshTokenClient = new RefreshTokenClient(clientConfiguration, new StubPerformanceClient);
      try {
        await refreshTokenClient.acquireTokenByRefreshToken(validRequest, ApiId.acquireTokenSilent);
      } catch {}
    }
    return authResponse;
  }
  async acquireTokenByUsernamePassword(request) {
    this.logger.info("acquireTokenByUsernamePassword called", request.correlationId || "");
    const validRequest = {
      ...request,
      ...await this.initializeBaseRequest(request)
    };
    const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByUsernamePassword, validRequest.correlationId);
    try {
      const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
      const usernamePasswordClientConfig = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, "", serverTelemetryManager);
      const usernamePasswordClient = new UsernamePasswordClient(usernamePasswordClientConfig);
      this.logger.verbose("Username password client created", validRequest.correlationId);
      return await usernamePasswordClient.acquireToken(validRequest);
    } catch (e) {
      if (e instanceof AuthError) {
        e.setCorrelationId(validRequest.correlationId);
      }
      serverTelemetryManager.cacheFailedRequest(e);
      throw e;
    }
  }
  getTokenCache() {
    this.logger.info("getTokenCache called", "");
    return this.tokenCache;
  }
  validateState(state2, cachedState) {
    if (!state2) {
      throw NodeAuthError.createStateNotFoundError();
    }
    if (state2 !== cachedState) {
      throw createClientAuthError(exports_ClientAuthErrorCodes.stateMismatch);
    }
  }
  getLogger() {
    return this.logger;
  }
  setLogger(logger3) {
    this.logger = logger3;
  }
  async buildOauthClientConfiguration(discoveredAuthority, requestCorrelationId, redirectUri, serverTelemetryManager) {
    this.logger.verbose("buildOauthClientConfiguration called", requestCorrelationId);
    this.logger.info(`Building oauth client configuration with the following authority: ${discoveredAuthority.tokenEndpoint}.`, requestCorrelationId);
    serverTelemetryManager?.updateRegionDiscoveryMetadata(discoveredAuthority.regionDiscoveryMetadata);
    const clientConfiguration = {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: discoveredAuthority,
        clientCapabilities: this.config.auth.clientCapabilities,
        redirectUri,
        isMcp: this.config.auth.isMcp
      },
      loggerOptions: {
        logLevel: this.config.system.loggerOptions.logLevel,
        loggerCallback: this.config.system.loggerOptions.loggerCallback,
        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
        correlationId: requestCorrelationId
      },
      cryptoInterface: this.cryptoProvider,
      networkInterface: this.config.system.networkClient,
      storageInterface: this.storage,
      serverTelemetryManager,
      clientCredentials: {
        clientSecret: this.clientSecret,
        clientAssertion: await this.getClientAssertion(discoveredAuthority)
      },
      libraryInfo: {
        sku: Constants.MSAL_SKU,
        version: version3,
        cpu: process.arch || "",
        os: process.platform || ""
      },
      telemetry: this.config.telemetry,
      persistencePlugin: this.config.cache.cachePlugin,
      serializableCache: this.tokenCache
    };
    return clientConfiguration;
  }
  async getClientAssertion(authority) {
    if (this.developerProvidedClientAssertion) {
      this.clientAssertion = ClientAssertion.fromAssertion(await getClientAssertion(this.developerProvidedClientAssertion, this.config.auth.clientId, authority.tokenEndpoint));
    }
    return this.clientAssertion && {
      assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, authority.tokenEndpoint),
      assertionType: Constants.JWT_BEARER_ASSERTION_TYPE
    };
  }
  async initializeBaseRequest(authRequest) {
    const correlationId = authRequest.correlationId || this.cryptoProvider.createNewGuid();
    this.logger.verbose("initializeRequestScopes called", correlationId);
    if (authRequest.authenticationScheme && authRequest.authenticationScheme === exports_Constants.AuthenticationScheme.POP) {
      this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", correlationId);
    }
    authRequest.authenticationScheme = exports_Constants.AuthenticationScheme.BEARER;
    return {
      ...authRequest,
      scopes: [
        ...authRequest && authRequest.scopes || [],
        ...exports_Constants.OIDC_DEFAULT_SCOPES
      ],
      correlationId,
      authority: authRequest.authority || this.config.auth.authority
    };
  }
  initializeServerTelemetryManager(apiId, correlationId, forceRefresh) {
    const telemetryPayload = {
      clientId: this.config.auth.clientId,
      correlationId,
      apiId,
      forceRefresh: forceRefresh || false
    };
    return new ServerTelemetryManager(telemetryPayload, this.storage);
  }
  async createAuthority(authorityString, requestCorrelationId, azureRegionConfiguration, azureCloudOptions) {
    this.logger.verbose("createAuthority called", requestCorrelationId);
    const authorityUrl = Authority.generateAuthority(authorityString, azureCloudOptions || this.config.auth.azureCloudOptions);
    const authorityOptions = {
      protocolMode: this.config.system.protocolMode,
      knownAuthorities: this.config.auth.knownAuthorities,
      cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
      authorityMetadata: this.config.auth.authorityMetadata,
      azureRegionConfiguration
    };
    return exports_AuthorityFactory.createDiscoveredInstance(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions, this.logger, requestCorrelationId, new StubPerformanceClient);
  }
  clearCache() {
    this.storage.clear();
  }
}
var init_ClientApplication = __esm(() => {
  init_index_node();
  init_Configuration();
  init_CryptoProvider();
  init_NodeStorage();
  init_Constants2();
  init_TokenCache();
  init_ClientAssertion();
  init_packageMetadata2();
  init_NodeAuthError();
  init_UsernamePasswordClient();
  init_Authorize2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/network/LoopbackClient.mjs
import http from "http";

class LoopbackClient {
  async listenForAuthCode(successTemplate, errorTemplate) {
    if (this.server) {
      throw NodeAuthError.createLoopbackServerAlreadyExistsError();
    }
    return new Promise((resolve, reject) => {
      this.server = http.createServer((req, res) => {
        const url = req.url;
        if (!url) {
          res.end(errorTemplate || "Error occurred loading redirectUrl");
          reject(NodeAuthError.createUnableToLoadRedirectUrlError());
          return;
        } else if (url === exports_Constants.FORWARD_SLASH) {
          res.end(successTemplate || "Auth code was successfully acquired. You can close this window now.");
          return;
        }
        const redirectUri = this.getRedirectUri();
        const parsedUrl = new URL(url, redirectUri);
        const authCodeResponse = exports_UrlUtils.getDeserializedResponse(parsedUrl.search) || {};
        if (authCodeResponse.code) {
          res.writeHead(exports_Constants.HTTP_REDIRECT, {
            location: redirectUri
          });
          res.end();
        }
        if (authCodeResponse.error) {
          res.end(errorTemplate || `Error occurred: ${authCodeResponse.error}`);
        }
        resolve(authCodeResponse);
      });
      this.server.listen(0, "127.0.0.1");
    });
  }
  getRedirectUri() {
    if (!this.server || !this.server.listening) {
      throw NodeAuthError.createNoLoopbackServerExistsError();
    }
    const address = this.server.address();
    if (!address || typeof address === "string" || !address.port) {
      this.closeServer();
      throw NodeAuthError.createInvalidLoopbackAddressTypeError();
    }
    const port = address && address.port;
    return `${Constants.HTTP_PROTOCOL}${Constants.LOCALHOST}:${port}`;
  }
  closeServer() {
    if (this.server) {
      this.server.close();
      if (typeof this.server.closeAllConnections === "function") {
        this.server.closeAllConnections();
      }
      this.server.unref();
      this.server = undefined;
    }
  }
}
var init_LoopbackClient = __esm(() => {
  init_index_node();
  init_NodeAuthError();
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/DeviceCodeClient.mjs
var DeviceCodeClient;
var init_DeviceCodeClient = __esm(() => {
  init_index_node();
  init_Constants2();
  init_ClientAuthErrorCodes2();
  init_BaseClient();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  DeviceCodeClient = class DeviceCodeClient extends BaseClient {
    constructor(configuration) {
      super(configuration);
    }
    async acquireToken(request) {
      const deviceCodeResponse = await this.getDeviceCode(request);
      request.deviceCodeCallback(deviceCodeResponse);
      const reqTimestamp = exports_TimeUtils.nowSeconds();
      const response = await this.acquireTokenWithDeviceCode(request, deviceCodeResponse);
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin);
      responseHandler.validateTokenResponse(response, request.correlationId);
      return responseHandler.handleServerTokenResponse(response, this.authority, reqTimestamp, request, ApiId.acquireTokenByDeviceCode);
    }
    async getDeviceCode(request) {
      const queryParametersString = this.createExtraQueryParameters(request);
      const endpoint = UrlString.appendQueryString(this.authority.deviceCodeEndpoint, queryParametersString);
      const queryString = this.createQueryString(request);
      const headers = this.createTokenRequestHeaders();
      const thumbprint = {
        clientId: this.config.authOptions.clientId,
        authority: request.authority,
        scopes: request.scopes,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid
      };
      return this.executePostRequestToDeviceCodeEndpoint(endpoint, queryString, headers, thumbprint, request.correlationId);
    }
    createExtraQueryParameters(request) {
      const parameters = new Map;
      if (request.extraQueryParameters) {
        exports_RequestParameterBuilder.addExtraParameters(parameters, request.extraQueryParameters);
      }
      return exports_UrlUtils.mapToQueryString(parameters);
    }
    async executePostRequestToDeviceCodeEndpoint(deviceCodeEndpoint, queryString, headers, thumbprint, correlationId) {
      const { body: { user_code: userCode, device_code: deviceCode, verification_uri: verificationUri, expires_in: expiresIn, interval, message } } = await this.sendPostRequest(thumbprint, deviceCodeEndpoint, {
        body: queryString,
        headers
      }, correlationId);
      return {
        userCode,
        deviceCode,
        verificationUri,
        expiresIn,
        interval,
        message
      };
    }
    createQueryString(request) {
      const parameters = new Map;
      exports_RequestParameterBuilder.addScopes(parameters, request.scopes);
      exports_RequestParameterBuilder.addClientId(parameters, this.config.authOptions.clientId);
      if (request.extraQueryParameters) {
        exports_RequestParameterBuilder.addExtraParameters(parameters, request.extraQueryParameters);
      }
      if (request.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        exports_RequestParameterBuilder.addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      return exports_UrlUtils.mapToQueryString(parameters);
    }
    continuePolling(deviceCodeExpirationTime, userSpecifiedTimeout, userSpecifiedCancelFlag) {
      if (userSpecifiedCancelFlag) {
        this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true", "");
        throw createClientAuthError(deviceCodePollingCancelled);
      } else if (userSpecifiedTimeout && userSpecifiedTimeout < deviceCodeExpirationTime && exports_TimeUtils.nowSeconds() > userSpecifiedTimeout) {
        this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${userSpecifiedTimeout}`, "");
        throw createClientAuthError(userTimeoutReached);
      } else if (exports_TimeUtils.nowSeconds() > deviceCodeExpirationTime) {
        if (userSpecifiedTimeout) {
          this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${userSpecifiedTimeout}`, "");
        }
        this.logger.error(`Device code expired. Expiration time of device code was ${deviceCodeExpirationTime}`, "");
        throw createClientAuthError(deviceCodeExpired);
      }
      return true;
    }
    async acquireTokenWithDeviceCode(request, deviceCodeResponse) {
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(this.authority.tokenEndpoint, queryParametersString);
      const requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
      const headers = this.createTokenRequestHeaders();
      const userSpecifiedTimeout = request.timeout ? exports_TimeUtils.nowSeconds() + request.timeout : undefined;
      const deviceCodeExpirationTime = exports_TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
      const pollingIntervalMilli = deviceCodeResponse.interval * 1000;
      while (this.continuePolling(deviceCodeExpirationTime, userSpecifiedTimeout, request.cancel)) {
        const thumbprint = {
          clientId: this.config.authOptions.clientId,
          authority: request.authority,
          scopes: request.scopes,
          claims: request.claims,
          authenticationScheme: request.authenticationScheme,
          resourceRequestMethod: request.resourceRequestMethod,
          resourceRequestUri: request.resourceRequestUri,
          shrClaims: request.shrClaims,
          sshKid: request.sshKid
        };
        const response = await this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint, request.correlationId);
        if (response.body && response.body.error) {
          if (response.body.error === exports_Constants.AUTHORIZATION_PENDING) {
            this.logger.info("Authorization pending. Continue polling.", request.correlationId);
            await exports_TimeUtils.delay(pollingIntervalMilli);
          } else {
            this.logger.info("Unexpected error in polling from the server", request.correlationId);
            throw createAuthError(exports_AuthErrorCodes.postRequestFailed, response.body.error);
          }
        } else {
          this.logger.verbose("Authorization completed successfully. Polling stopped.", request.correlationId);
          return response.body;
        }
      }
      this.logger.error("Polling stopped for unknown reasons.", request.correlationId);
      throw createClientAuthError(deviceCodeUnknownError);
    }
    createTokenRequestBody(request, deviceCodeResponse) {
      const parameters = new Map;
      exports_RequestParameterBuilder.addScopes(parameters, request.scopes);
      exports_RequestParameterBuilder.addClientId(parameters, this.config.authOptions.clientId);
      exports_RequestParameterBuilder.addGrantType(parameters, exports_Constants.GrantType.DEVICE_CODE_GRANT);
      exports_RequestParameterBuilder.addDeviceCode(parameters, deviceCodeResponse.deviceCode);
      const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      exports_RequestParameterBuilder.addCorrelationId(parameters, correlationId);
      exports_RequestParameterBuilder.addClientInfo(parameters);
      exports_RequestParameterBuilder.addLibraryInfo(parameters, this.config.libraryInfo);
      exports_RequestParameterBuilder.addApplicationTelemetry(parameters, this.config.telemetry.application);
      exports_RequestParameterBuilder.addThrottling(parameters);
      if (this.serverTelemetryManager) {
        exports_RequestParameterBuilder.addServerTelemetry(parameters, this.serverTelemetryManager);
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        exports_RequestParameterBuilder.addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      return exports_UrlUtils.mapToQueryString(parameters);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/PublicClientApplication.mjs
var PublicClientApplication;
var init_PublicClientApplication = __esm(() => {
  init_Constants2();
  init_index_node();
  init_ClientApplication();
  init_NodeAuthError();
  init_LoopbackClient();
  init_DeviceCodeClient();
  init_packageMetadata2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  PublicClientApplication = class PublicClientApplication extends ClientApplication {
    constructor(configuration) {
      super(configuration);
      if (this.config.broker.nativeBrokerPlugin) {
        if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) {
          this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin;
          this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions);
        } else {
          this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.", "");
        }
      }
      this.skus = ServerTelemetryManager.makeExtraSkuString({
        libraryName: Constants.MSAL_SKU,
        libraryVersion: version3
      });
    }
    async acquireTokenByDeviceCode(request) {
      this.logger.info("acquireTokenByDeviceCode called", request.correlationId || "");
      enforceResourceParameter(this.config.auth.isMcp, request);
      const validRequest = Object.assign(request, await this.initializeBaseRequest(request));
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByDeviceCode, validRequest.correlationId);
      try {
        const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
        const deviceCodeConfig = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, "", serverTelemetryManager);
        const deviceCodeClient = new DeviceCodeClient(deviceCodeConfig);
        this.logger.verbose("Device code client created", validRequest.correlationId);
        return await deviceCodeClient.acquireToken(validRequest);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(validRequest.correlationId);
        }
        serverTelemetryManager.cacheFailedRequest(e);
        throw e;
      }
    }
    async acquireTokenInteractive(request) {
      const correlationId = request.correlationId || this.cryptoProvider.createNewGuid();
      this.logger.trace("acquireTokenInteractive called", correlationId);
      enforceResourceParameter(this.config.auth.isMcp, request);
      const { openBrowser, successTemplate, errorTemplate, windowHandle, loopbackClient: customLoopbackClient, ...remainingProperties } = request;
      if (this.nativeBrokerPlugin) {
        const brokerRequest = {
          ...remainingProperties,
          clientId: this.config.auth.clientId,
          scopes: request.scopes || exports_Constants.OIDC_DEFAULT_SCOPES,
          redirectUri: request.redirectUri || "",
          authority: request.authority || this.config.auth.authority,
          correlationId,
          extraParameters: {
            ...remainingProperties.extraQueryParameters,
            ...remainingProperties.extraParameters,
            [exports_AADServerParamKeys.X_CLIENT_EXTRA_SKU]: this.skus
          },
          accountId: remainingProperties.account?.nativeAccountId
        };
        return this.nativeBrokerPlugin.acquireTokenInteractive(brokerRequest, windowHandle);
      }
      if (request.redirectUri) {
        if (!this.config.broker.nativeBrokerPlugin) {
          throw NodeAuthError.createRedirectUriNotSupportedError();
        }
        request.redirectUri = "";
      }
      const { verifier, challenge } = await this.cryptoProvider.generatePkceCodes();
      const loopbackClient = customLoopbackClient || new LoopbackClient;
      let authCodeResponse = {};
      let authCodeListenerError = null;
      try {
        const authCodeListener = loopbackClient.listenForAuthCode(successTemplate, errorTemplate).then((response) => {
          authCodeResponse = response;
        }).catch((e) => {
          authCodeListenerError = e;
        });
        const redirectUri = await this.waitForRedirectUri(loopbackClient);
        const validRequest = {
          ...remainingProperties,
          correlationId,
          scopes: request.scopes || exports_Constants.OIDC_DEFAULT_SCOPES,
          redirectUri,
          responseMode: exports_Constants.ResponseMode.QUERY,
          codeChallenge: challenge,
          codeChallengeMethod: exports_Constants.CodeChallengeMethodValues.S256
        };
        const authCodeUrl = await this.getAuthCodeUrl(validRequest);
        await openBrowser(authCodeUrl);
        await authCodeListener;
        if (authCodeListenerError) {
          throw authCodeListenerError;
        }
        if (authCodeResponse.error) {
          throw new ServerError(authCodeResponse.error, authCodeResponse.error_description, authCodeResponse.suberror);
        } else if (!authCodeResponse.code) {
          throw NodeAuthError.createNoAuthCodeInResponseError();
        }
        const clientInfo = authCodeResponse.client_info;
        const tokenRequest = {
          code: authCodeResponse.code,
          codeVerifier: verifier,
          clientInfo: clientInfo || "",
          ...validRequest
        };
        return await this.acquireTokenByCode(tokenRequest);
      } finally {
        loopbackClient.closeServer();
      }
    }
    async acquireTokenSilent(request) {
      const correlationId = request.correlationId || this.cryptoProvider.createNewGuid();
      this.logger.trace("acquireTokenSilent called", correlationId);
      enforceResourceParameter(this.config.auth.isMcp, request);
      if (this.nativeBrokerPlugin) {
        const brokerRequest = {
          ...request,
          clientId: this.config.auth.clientId,
          scopes: request.scopes || exports_Constants.OIDC_DEFAULT_SCOPES,
          redirectUri: request.redirectUri || "",
          authority: request.authority || this.config.auth.authority,
          correlationId,
          extraParameters: {
            ...request.extraQueryParameters,
            ...request.extraParameters,
            [exports_AADServerParamKeys.X_CLIENT_EXTRA_SKU]: this.skus
          },
          accountId: request.account.nativeAccountId,
          forceRefresh: request.forceRefresh || false
        };
        return this.nativeBrokerPlugin.acquireTokenSilent(brokerRequest);
      }
      if (request.redirectUri) {
        if (!this.config.broker.nativeBrokerPlugin) {
          throw NodeAuthError.createRedirectUriNotSupportedError();
        }
        request.redirectUri = "";
      }
      return super.acquireTokenSilent(request);
    }
    async acquireTokenByCode(request, authCodePayLoad) {
      enforceResourceParameter(this.config.auth.isMcp, request);
      return super.acquireTokenByCode(request, authCodePayLoad);
    }
    async acquireTokenByRefreshToken(request) {
      enforceResourceParameter(this.config.auth.isMcp, request);
      return super.acquireTokenByRefreshToken(request);
    }
    async signOut(request) {
      if (this.nativeBrokerPlugin && request.account.nativeAccountId) {
        const signoutRequest = {
          clientId: this.config.auth.clientId,
          accountId: request.account.nativeAccountId,
          correlationId: request.correlationId || this.cryptoProvider.createNewGuid()
        };
        await this.nativeBrokerPlugin.signOut(signoutRequest);
      }
      await this.getTokenCache().removeAccount(request.account, request.correlationId);
    }
    async getAllAccounts() {
      if (this.nativeBrokerPlugin) {
        const correlationId = this.cryptoProvider.createNewGuid();
        return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, correlationId);
      }
      return this.getTokenCache().getAllAccounts();
    }
    async waitForRedirectUri(loopbackClient) {
      return new Promise((resolve, reject) => {
        let ticks = 0;
        const id = setInterval(() => {
          if (LOOPBACK_SERVER_CONSTANTS.TIMEOUT_MS / LOOPBACK_SERVER_CONSTANTS.INTERVAL_MS < ticks) {
            clearInterval(id);
            reject(NodeAuthError.createLoopbackServerTimeoutError());
            return;
          }
          try {
            const r = loopbackClient.getRedirectUri();
            clearInterval(id);
            resolve(r);
            return;
          } catch (e) {
            if (e instanceof AuthError && e.errorCode === NodeAuthErrorMessage.noLoopbackServerExists.code) {
              ticks++;
              return;
            }
            clearInterval(id);
            reject(e);
            return;
          }
        }, LOOPBACK_SERVER_CONSTANTS.INTERVAL_MS);
      });
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ClientCredentialClient.mjs
var ClientCredentialClient;
var init_ClientCredentialClient = __esm(() => {
  init_index_node();
  init_Constants2();
  init_BaseClient();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  ClientCredentialClient = class ClientCredentialClient extends BaseClient {
    constructor(configuration, appTokenProvider) {
      super(configuration);
      this.appTokenProvider = appTokenProvider;
    }
    async acquireToken(request) {
      if (request.skipCache || request.claims) {
        return this.executeTokenRequest(request, this.authority);
      }
      const [cachedAuthenticationResult, lastCacheOutcome] = await this.getCachedAuthenticationResult(request, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
      if (cachedAuthenticationResult) {
        if (lastCacheOutcome === exports_Constants.CacheOutcome.PROACTIVELY_REFRESHED) {
          this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.", request.correlationId);
          const refreshAccessToken = true;
          await this.executeTokenRequest(request, this.authority, refreshAccessToken);
        }
        return cachedAuthenticationResult;
      } else {
        return this.executeTokenRequest(request, this.authority);
      }
    }
    async getCachedAuthenticationResult(request, config, cryptoUtils, authority, cacheManager, serverTelemetryManager) {
      const clientConfiguration = config;
      const managedIdentityConfiguration = config;
      let lastCacheOutcome = exports_Constants.CacheOutcome.NOT_APPLICABLE;
      let cacheContext;
      if (clientConfiguration.serializableCache && clientConfiguration.persistencePlugin) {
        cacheContext = new TokenCacheContext(clientConfiguration.serializableCache, false);
        await clientConfiguration.persistencePlugin.beforeCacheAccess(cacheContext);
      }
      const cachedAccessToken = this.readAccessTokenFromCache(authority, managedIdentityConfiguration.managedIdentityId?.id || clientConfiguration.authOptions.clientId, new ScopeSet(request.scopes || []), cacheManager, request.correlationId);
      if (clientConfiguration.serializableCache && clientConfiguration.persistencePlugin && cacheContext) {
        await clientConfiguration.persistencePlugin.afterCacheAccess(cacheContext);
      }
      if (!cachedAccessToken) {
        serverTelemetryManager?.setCacheOutcome(exports_Constants.CacheOutcome.NO_CACHED_ACCESS_TOKEN);
        return [null, exports_Constants.CacheOutcome.NO_CACHED_ACCESS_TOKEN];
      }
      if (exports_TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, clientConfiguration.systemOptions?.tokenRenewalOffsetSeconds || exports_Constants.DEFAULT_TOKEN_RENEWAL_OFFSET_SEC)) {
        serverTelemetryManager?.setCacheOutcome(exports_Constants.CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
        return [null, exports_Constants.CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED];
      }
      if (cachedAccessToken.refreshOn && exports_TimeUtils.isTokenExpired(cachedAccessToken.refreshOn.toString(), 0)) {
        lastCacheOutcome = exports_Constants.CacheOutcome.PROACTIVELY_REFRESHED;
        serverTelemetryManager?.setCacheOutcome(exports_Constants.CacheOutcome.PROACTIVELY_REFRESHED);
      }
      return [
        await ResponseHandler.generateAuthenticationResult(cryptoUtils, authority, {
          account: null,
          idToken: null,
          accessToken: cachedAccessToken,
          refreshToken: null,
          appMetadata: null
        }, true, request, this.performanceClient),
        lastCacheOutcome
      ];
    }
    readAccessTokenFromCache(authority, id, scopeSet, cacheManager, correlationId) {
      const accessTokenFilter = {
        homeAccountId: "",
        environment: authority.canonicalAuthorityUrlComponents.HostNameAndPort,
        credentialType: exports_Constants.CredentialType.ACCESS_TOKEN,
        clientId: id,
        realm: authority.tenant,
        target: ScopeSet.createSearchScopes(scopeSet.asArray())
      };
      const accessTokens = cacheManager.getAccessTokensByFilter(accessTokenFilter, correlationId);
      if (accessTokens.length < 1) {
        return null;
      } else if (accessTokens.length > 1) {
        throw createClientAuthError(exports_ClientAuthErrorCodes.multipleMatchingTokens);
      }
      return accessTokens[0];
    }
    async executeTokenRequest(request, authority, refreshAccessToken) {
      let serverTokenResponse;
      let reqTimestamp;
      if (this.appTokenProvider) {
        this.logger.info("Using appTokenProvider extensibility.", request.correlationId);
        const appTokenPropviderParameters = {
          correlationId: request.correlationId,
          tenantId: this.config.authOptions.authority.tenant,
          scopes: request.scopes,
          claims: request.claims
        };
        reqTimestamp = exports_TimeUtils.nowSeconds();
        const appTokenProviderResult = await this.appTokenProvider(appTokenPropviderParameters);
        serverTokenResponse = {
          access_token: appTokenProviderResult.accessToken,
          expires_in: appTokenProviderResult.expiresInSeconds,
          refresh_in: appTokenProviderResult.refreshInSeconds,
          token_type: exports_Constants.AuthenticationScheme.BEARER
        };
      } else {
        const queryParametersString = this.createTokenQueryParameters(request);
        const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
        const requestBody = await this.createTokenRequestBody(request);
        const headers = this.createTokenRequestHeaders();
        const thumbprint = {
          clientId: this.config.authOptions.clientId,
          authority: request.authority,
          scopes: request.scopes,
          claims: request.claims,
          authenticationScheme: request.authenticationScheme,
          resourceRequestMethod: request.resourceRequestMethod,
          resourceRequestUri: request.resourceRequestUri,
          shrClaims: request.shrClaims,
          sshKid: request.sshKid
        };
        this.logger.info("Sending token request to endpoint: " + authority.tokenEndpoint, request.correlationId);
        reqTimestamp = exports_TimeUtils.nowSeconds();
        const response = await this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint, request.correlationId);
        serverTokenResponse = response.body;
        serverTokenResponse.status = response.status;
      }
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin);
      responseHandler.validateTokenResponse(serverTokenResponse, request.correlationId, refreshAccessToken);
      const tokenResponse = await responseHandler.handleServerTokenResponse(serverTokenResponse, this.authority, reqTimestamp, request, ApiId.acquireTokenByClientCredential);
      return tokenResponse;
    }
    async createTokenRequestBody(request) {
      const parameters = new Map;
      exports_RequestParameterBuilder.addClientId(parameters, this.config.authOptions.clientId);
      exports_RequestParameterBuilder.addScopes(parameters, request.scopes, false);
      exports_RequestParameterBuilder.addGrantType(parameters, exports_Constants.GrantType.CLIENT_CREDENTIALS_GRANT);
      exports_RequestParameterBuilder.addLibraryInfo(parameters, this.config.libraryInfo);
      exports_RequestParameterBuilder.addApplicationTelemetry(parameters, this.config.telemetry.application);
      exports_RequestParameterBuilder.addThrottling(parameters);
      if (this.serverTelemetryManager) {
        exports_RequestParameterBuilder.addServerTelemetry(parameters, this.serverTelemetryManager);
      }
      const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      exports_RequestParameterBuilder.addCorrelationId(parameters, correlationId);
      if (this.config.clientCredentials.clientSecret) {
        exports_RequestParameterBuilder.addClientSecret(parameters, this.config.clientCredentials.clientSecret);
      }
      const clientAssertion = request.clientAssertion || this.config.clientCredentials.clientAssertion;
      if (clientAssertion) {
        exports_RequestParameterBuilder.addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        exports_RequestParameterBuilder.addClientAssertionType(parameters, clientAssertion.assertionType);
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        exports_RequestParameterBuilder.addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      return exports_UrlUtils.mapToQueryString(parameters);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/OnBehalfOfClient.mjs
var OnBehalfOfClient;
var init_OnBehalfOfClient = __esm(() => {
  init_index_node();
  init_Constants2();
  init_EncodingUtils();
  init_BaseClient();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  OnBehalfOfClient = class OnBehalfOfClient extends BaseClient {
    constructor(configuration) {
      super(configuration);
    }
    async acquireToken(request) {
      this.scopeSet = new ScopeSet(request.scopes || []);
      this.userAssertionHash = await this.cryptoUtils.hashString(request.oboAssertion);
      if (request.skipCache || request.claims) {
        return this.executeTokenRequest(request, this.authority, this.userAssertionHash);
      }
      try {
        return await this.getCachedAuthenticationResult(request);
      } catch (e) {
        return await this.executeTokenRequest(request, this.authority, this.userAssertionHash);
      }
    }
    async getCachedAuthenticationResult(request) {
      const cachedAccessToken = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, request);
      if (!cachedAccessToken) {
        this.serverTelemetryManager?.setCacheOutcome(exports_Constants.CacheOutcome.NO_CACHED_ACCESS_TOKEN);
        this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.", request.correlationId);
        throw createClientAuthError(exports_ClientAuthErrorCodes.tokenRefreshRequired);
      } else if (exports_TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
        this.serverTelemetryManager?.setCacheOutcome(exports_Constants.CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
        this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`, request.correlationId);
        throw createClientAuthError(exports_ClientAuthErrorCodes.tokenRefreshRequired);
      }
      const cachedIdToken = this.readIdTokenFromCacheForOBO(cachedAccessToken.homeAccountId, request.correlationId);
      let idTokenClaims;
      let cachedAccount = null;
      if (cachedIdToken) {
        idTokenClaims = exports_AuthToken.extractTokenClaims(cachedIdToken.secret, EncodingUtils.base64Decode);
        const localAccountId = idTokenClaims.oid || idTokenClaims.sub;
        const accountInfo = {
          homeAccountId: cachedIdToken.homeAccountId,
          environment: cachedIdToken.environment,
          tenantId: cachedIdToken.realm,
          username: "",
          localAccountId: localAccountId || ""
        };
        cachedAccount = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(accountInfo), request.correlationId);
      }
      if (this.config.serverTelemetryManager) {
        this.config.serverTelemetryManager.incrementCacheHits();
      }
      return ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
        account: cachedAccount,
        accessToken: cachedAccessToken,
        idToken: cachedIdToken,
        refreshToken: null,
        appMetadata: null
      }, true, request, this.performanceClient, idTokenClaims);
    }
    readIdTokenFromCacheForOBO(atHomeAccountId, correlationId) {
      const idTokenFilter = {
        homeAccountId: atHomeAccountId,
        environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
        credentialType: exports_Constants.CredentialType.ID_TOKEN,
        clientId: this.config.authOptions.clientId,
        realm: this.authority.tenant
      };
      const idTokenMap = this.cacheManager.getIdTokensByFilter(idTokenFilter, correlationId);
      if (Object.values(idTokenMap).length < 1) {
        return null;
      }
      return Object.values(idTokenMap)[0];
    }
    readAccessTokenFromCacheForOBO(clientId, request) {
      const authScheme = request.authenticationScheme || exports_Constants.AuthenticationScheme.BEARER;
      const credentialType = authScheme && authScheme.toLowerCase() !== exports_Constants.AuthenticationScheme.BEARER.toLowerCase() ? exports_Constants.CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : exports_Constants.CredentialType.ACCESS_TOKEN;
      const accessTokenFilter = {
        credentialType,
        clientId,
        target: ScopeSet.createSearchScopes(this.scopeSet.asArray()),
        tokenType: authScheme,
        keyId: request.sshKid,
        userAssertionHash: this.userAssertionHash
      };
      const accessTokens = this.cacheManager.getAccessTokensByFilter(accessTokenFilter, request.correlationId);
      const numAccessTokens = accessTokens.length;
      if (numAccessTokens < 1) {
        return null;
      } else if (numAccessTokens > 1) {
        throw createClientAuthError(exports_ClientAuthErrorCodes.multipleMatchingTokens);
      }
      return accessTokens[0];
    }
    async executeTokenRequest(request, authority, userAssertionHash) {
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
      const requestBody = await this.createTokenRequestBody(request);
      const headers = this.createTokenRequestHeaders();
      const thumbprint = {
        clientId: this.config.authOptions.clientId,
        authority: request.authority,
        scopes: request.scopes,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid
      };
      const reqTimestamp = exports_TimeUtils.nowSeconds();
      const response = await this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint, request.correlationId);
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.performanceClient, this.config.serializableCache, this.config.persistencePlugin);
      responseHandler.validateTokenResponse(response.body, request.correlationId);
      const tokenResponse = await responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, ApiId.acquireTokenByOBO, undefined, userAssertionHash);
      return tokenResponse;
    }
    async createTokenRequestBody(request) {
      const parameters = new Map;
      exports_RequestParameterBuilder.addClientId(parameters, this.config.authOptions.clientId);
      exports_RequestParameterBuilder.addScopes(parameters, request.scopes);
      exports_RequestParameterBuilder.addGrantType(parameters, exports_Constants.GrantType.JWT_BEARER);
      exports_RequestParameterBuilder.addClientInfo(parameters);
      exports_RequestParameterBuilder.addLibraryInfo(parameters, this.config.libraryInfo);
      exports_RequestParameterBuilder.addApplicationTelemetry(parameters, this.config.telemetry.application);
      exports_RequestParameterBuilder.addThrottling(parameters);
      if (this.serverTelemetryManager) {
        exports_RequestParameterBuilder.addServerTelemetry(parameters, this.serverTelemetryManager);
      }
      const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      exports_RequestParameterBuilder.addCorrelationId(parameters, correlationId);
      exports_RequestParameterBuilder.addRequestTokenUse(parameters, exports_AADServerParamKeys.ON_BEHALF_OF);
      exports_RequestParameterBuilder.addOboAssertion(parameters, request.oboAssertion);
      if (this.config.clientCredentials.clientSecret) {
        exports_RequestParameterBuilder.addClientSecret(parameters, this.config.clientCredentials.clientSecret);
      }
      const clientAssertion = this.config.clientCredentials.clientAssertion;
      if (clientAssertion) {
        exports_RequestParameterBuilder.addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        exports_RequestParameterBuilder.addClientAssertionType(parameters, clientAssertion.assertionType);
      }
      if (request.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        exports_RequestParameterBuilder.addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      return exports_UrlUtils.mapToQueryString(parameters);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ConfidentialClientApplication.mjs
var ConfidentialClientApplication;
var init_ConfidentialClientApplication = __esm(() => {
  init_ClientApplication();
  init_ClientAssertion();
  init_Constants2();
  init_index_node();
  init_ClientCredentialClient();
  init_OnBehalfOfClient();
  init_ClientAuthErrorCodes2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  ConfidentialClientApplication = class ConfidentialClientApplication extends ClientApplication {
    constructor(configuration) {
      super(configuration);
      const clientSecretNotEmpty = !!this.config.auth.clientSecret;
      const clientAssertionNotEmpty = !!this.config.auth.clientAssertion;
      const certificateNotEmpty = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
      if (this.appTokenProvider) {
        return;
      }
      if (clientSecretNotEmpty && clientAssertionNotEmpty || clientAssertionNotEmpty && certificateNotEmpty || clientSecretNotEmpty && certificateNotEmpty) {
        throw createClientAuthError(invalidClientCredential);
      }
      if (this.config.auth.clientSecret) {
        this.clientSecret = this.config.auth.clientSecret;
        return;
      }
      if (this.config.auth.clientAssertion) {
        this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
        return;
      }
      if (!certificateNotEmpty) {
        throw createClientAuthError(invalidClientCredential);
      } else {
        this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? ClientAssertion.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : ClientAssertion.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
      }
      this.appTokenProvider = undefined;
    }
    SetAppTokenProvider(provider) {
      this.appTokenProvider = provider;
    }
    async acquireTokenByClientCredential(request) {
      this.logger.info("acquireTokenByClientCredential called", request.correlationId || "");
      let clientAssertion;
      if (request.clientAssertion) {
        clientAssertion = {
          assertion: await getClientAssertion(request.clientAssertion, this.config.auth.clientId),
          assertionType: Constants.JWT_BEARER_ASSERTION_TYPE
        };
      }
      const baseRequest = await this.initializeBaseRequest(request);
      const validBaseRequest = {
        ...baseRequest,
        scopes: baseRequest.scopes.filter((scope) => !exports_Constants.OIDC_DEFAULT_SCOPES.includes(scope))
      };
      const validRequest = {
        ...request,
        ...validBaseRequest,
        clientAssertion
      };
      const authority = new UrlString(validRequest.authority);
      const tenantId = authority.getUrlComponents().PathSegments[0];
      if (Object.values(exports_Constants.AADAuthority).includes(tenantId)) {
        throw createClientAuthError(missingTenantIdError);
      }
      const ENV_MSAL_FORCE_REGION = process.env[MSAL_FORCE_REGION];
      let region;
      if (validRequest.azureRegion !== "DisableMsalForceRegion") {
        if (!validRequest.azureRegion && ENV_MSAL_FORCE_REGION) {
          region = ENV_MSAL_FORCE_REGION;
        } else {
          region = validRequest.azureRegion;
        }
      }
      const azureRegionConfiguration = {
        azureRegion: region,
        environmentRegion: process.env[REGION_ENVIRONMENT_VARIABLE]
      };
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenByClientCredential, validRequest.correlationId, validRequest.skipCache);
      try {
        const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, azureRegionConfiguration, request.azureCloudOptions);
        const clientCredentialConfig = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, "", serverTelemetryManager);
        const clientCredentialClient = new ClientCredentialClient(clientCredentialConfig, this.appTokenProvider);
        this.logger.verbose("Client credential client created", validRequest.correlationId);
        return await clientCredentialClient.acquireToken(validRequest);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(validRequest.correlationId);
        }
        serverTelemetryManager.cacheFailedRequest(e);
        throw e;
      }
    }
    async acquireTokenOnBehalfOf(request) {
      this.logger.info("acquireTokenOnBehalfOf called", request.correlationId || "");
      const validRequest = {
        ...request,
        ...await this.initializeBaseRequest(request)
      };
      try {
        const discoveredAuthority = await this.createAuthority(validRequest.authority, validRequest.correlationId, undefined, request.azureCloudOptions);
        const onBehalfOfConfig = await this.buildOauthClientConfiguration(discoveredAuthority, validRequest.correlationId, "", undefined);
        const oboClient = new OnBehalfOfClient(onBehalfOfConfig);
        this.logger.verbose("On behalf of client created", validRequest.correlationId);
        return await oboClient.acquireToken(validRequest);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(validRequest.correlationId);
        }
        throw e;
      }
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/utils/TimeUtils.mjs
function isIso8601(dateString) {
  if (typeof dateString !== "string") {
    return false;
  }
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.toISOString() === dateString;
}
var init_TimeUtils2 = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/network/HttpClientWithRetries.mjs
class HttpClientWithRetries {
  constructor(httpClientNoRetries, retryPolicy, logger3) {
    this.httpClientNoRetries = httpClientNoRetries;
    this.retryPolicy = retryPolicy;
    this.logger = logger3;
  }
  async sendNetworkRequestAsyncHelper(httpMethod, url, options) {
    if (httpMethod === HttpMethod2.GET) {
      return this.httpClientNoRetries.sendGetRequestAsync(url, options);
    } else {
      return this.httpClientNoRetries.sendPostRequestAsync(url, options);
    }
  }
  async sendNetworkRequestAsync(httpMethod, url, options) {
    let response = await this.sendNetworkRequestAsyncHelper(httpMethod, url, options);
    if ("isNewRequest" in this.retryPolicy) {
      this.retryPolicy.isNewRequest = true;
    }
    let currentRetry = 0;
    while (await this.retryPolicy.pauseForRetry(response.status, currentRetry, this.logger, response.headers[exports_Constants.HeaderNames.RETRY_AFTER])) {
      response = await this.sendNetworkRequestAsyncHelper(httpMethod, url, options);
      currentRetry++;
    }
    return response;
  }
  async sendGetRequestAsync(url, options) {
    return this.sendNetworkRequestAsync(HttpMethod2.GET, url, options);
  }
  async sendPostRequestAsync(url, options) {
    return this.sendNetworkRequestAsync(HttpMethod2.POST, url, options);
  }
}
var init_HttpClientWithRetries = __esm(() => {
  init_index_node();
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/BaseManagedIdentitySource.mjs
class BaseManagedIdentitySource {
  constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) {
    this.logger = logger3;
    this.nodeStorage = nodeStorage;
    this.networkClient = networkClient;
    this.cryptoProvider = cryptoProvider;
    this.disableInternalRetries = disableInternalRetries;
  }
  async getServerTokenResponseAsync(response, _networkClient, _networkRequest, _networkRequestOptions) {
    return this.getServerTokenResponse(response);
  }
  getServerTokenResponse(response) {
    let refreshIn, expiresIn;
    if (response.body.expires_on) {
      if (isIso8601(response.body.expires_on)) {
        response.body.expires_on = new Date(response.body.expires_on).getTime() / 1000;
      }
      expiresIn = response.body.expires_on - exports_TimeUtils.nowSeconds();
      if (expiresIn > 2 * 3600) {
        refreshIn = expiresIn / 2;
      }
    }
    const serverTokenResponse = {
      status: response.status,
      access_token: response.body.access_token,
      expires_in: expiresIn,
      scope: response.body.resource,
      token_type: response.body.token_type,
      refresh_in: refreshIn,
      correlation_id: response.body.correlation_id || response.body.correlationId,
      error: typeof response.body.error === "string" ? response.body.error : response.body.error?.code,
      error_description: response.body.message || (typeof response.body.error === "string" ? response.body.error_description : response.body.error?.message),
      error_codes: response.body.error_codes,
      timestamp: response.body.timestamp,
      trace_id: response.body.trace_id
    };
    return serverTokenResponse;
  }
  async acquireTokenWithManagedIdentity(managedIdentityRequest, managedIdentityId, fakeAuthority, refreshAccessToken) {
    const networkRequest = this.createRequest(managedIdentityRequest.resource, managedIdentityId);
    if (managedIdentityRequest.revokedTokenSha256Hash) {
      this.logger.info(`[Managed Identity] The following claims are present in the request: ${managedIdentityRequest.claims}`, "");
      networkRequest.queryParameters[ManagedIdentityQueryParameters.SHA256_TOKEN_TO_REFRESH] = managedIdentityRequest.revokedTokenSha256Hash;
    }
    if (managedIdentityRequest.clientCapabilities?.length) {
      const clientCapabilities = managedIdentityRequest.clientCapabilities.toString();
      this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${clientCapabilities}`, "");
      networkRequest.queryParameters[ManagedIdentityQueryParameters.XMS_CC] = clientCapabilities;
    }
    const headers = networkRequest.headers;
    headers[exports_Constants.HeaderNames.CONTENT_TYPE] = exports_Constants.URL_FORM_CONTENT_TYPE;
    const networkRequestOptions = { headers };
    if (Object.keys(networkRequest.bodyParameters).length) {
      networkRequestOptions.body = networkRequest.computeParametersBodyString();
    }
    const networkClientHelper = this.disableInternalRetries ? this.networkClient : new HttpClientWithRetries(this.networkClient, networkRequest.retryPolicy, this.logger);
    const reqTimestamp = exports_TimeUtils.nowSeconds();
    let response;
    try {
      if (networkRequest.httpMethod === HttpMethod2.POST) {
        response = await networkClientHelper.sendPostRequestAsync(networkRequest.computeUri(), networkRequestOptions);
      } else {
        response = await networkClientHelper.sendGetRequestAsync(networkRequest.computeUri(), networkRequestOptions);
      }
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      } else {
        throw createClientAuthError(exports_ClientAuthErrorCodes.networkError);
      }
    }
    const responseHandler = new ResponseHandler(managedIdentityId.id, this.nodeStorage, this.cryptoProvider, this.logger, new StubPerformanceClient, null, null);
    const serverTokenResponse = await this.getServerTokenResponseAsync(response, networkClientHelper, networkRequest, networkRequestOptions);
    responseHandler.validateTokenResponse(serverTokenResponse, serverTokenResponse.correlation_id || "", refreshAccessToken);
    return responseHandler.handleServerTokenResponse(serverTokenResponse, fakeAuthority, reqTimestamp, managedIdentityRequest, ApiId.acquireTokenWithManagedIdentity);
  }
  getManagedIdentityUserAssignedIdQueryParameterKey(managedIdentityIdType, isImds, usesApi2017) {
    switch (managedIdentityIdType) {
      case ManagedIdentityIdType.USER_ASSIGNED_CLIENT_ID:
        this.logger.info(`[Managed Identity] [API version ${usesApi2017 ? "2017+" : "2019+"}] Adding user assigned client id to the request.`, "");
        return usesApi2017 ? ManagedIdentityUserAssignedIdQueryParameterNames.MANAGED_IDENTITY_CLIENT_ID_2017 : ManagedIdentityUserAssignedIdQueryParameterNames.MANAGED_IDENTITY_CLIENT_ID;
      case ManagedIdentityIdType.USER_ASSIGNED_RESOURCE_ID:
        this.logger.info("[Managed Identity] Adding user assigned resource id to the request.", "");
        return isImds ? ManagedIdentityUserAssignedIdQueryParameterNames.MANAGED_IDENTITY_RESOURCE_ID_IMDS : ManagedIdentityUserAssignedIdQueryParameterNames.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;
      case ManagedIdentityIdType.USER_ASSIGNED_OBJECT_ID:
        this.logger.info("[Managed Identity] Adding user assigned object id to the request.", "");
        return ManagedIdentityUserAssignedIdQueryParameterNames.MANAGED_IDENTITY_OBJECT_ID;
      default:
        throw createManagedIdentityError(invalidManagedIdentityIdType);
    }
  }
}
var ManagedIdentityUserAssignedIdQueryParameterNames;
var init_BaseManagedIdentitySource = __esm(() => {
  init_index_node();
  init_Constants2();
  init_ManagedIdentityError();
  init_TimeUtils2();
  init_HttpClientWithRetries();
  init_ManagedIdentityErrorCodes();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  ManagedIdentityUserAssignedIdQueryParameterNames = {
    MANAGED_IDENTITY_CLIENT_ID_2017: "clientid",
    MANAGED_IDENTITY_CLIENT_ID: "client_id",
    MANAGED_IDENTITY_OBJECT_ID: "object_id",
    MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id",
    MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id"
  };
  BaseManagedIdentitySource.getValidatedEnvVariableUrlString = (envVariableStringName, envVariable, sourceName, logger3) => {
    try {
      return new UrlString(envVariable).urlString;
    } catch (error) {
      logger3.info(`[Managed Identity] ${sourceName} managed identity is unavailable because the '${envVariableStringName}' environment variable is malformed.`, "");
      throw createManagedIdentityError(MsiEnvironmentVariableUrlMalformedErrorCodes[envVariableStringName]);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/retry/LinearRetryStrategy.mjs
class LinearRetryStrategy {
  calculateDelay(retryHeader, minimumDelay) {
    if (!retryHeader) {
      return minimumDelay;
    }
    let millisToSleep = Math.round(parseFloat(retryHeader) * 1000);
    if (isNaN(millisToSleep)) {
      millisToSleep = new Date(retryHeader).valueOf() - new Date().valueOf();
    }
    return Math.max(minimumDelay, millisToSleep);
  }
}
var init_LinearRetryStrategy = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/retry/DefaultManagedIdentityRetryPolicy.mjs
class DefaultManagedIdentityRetryPolicy {
  constructor() {
    this.linearRetryStrategy = new LinearRetryStrategy;
  }
  static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
    return DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS;
  }
  async pauseForRetry(httpStatusCode, currentRetry, logger3, retryAfterHeader) {
    if (DEFAULT_MANAGED_IDENTITY_HTTP_STATUS_CODES_TO_RETRY_ON.includes(httpStatusCode) && currentRetry < DEFAULT_MANAGED_IDENTITY_MAX_RETRIES) {
      const retryAfterDelay = this.linearRetryStrategy.calculateDelay(retryAfterHeader, DefaultManagedIdentityRetryPolicy.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
      logger3.verbose(`Retrying request in ${retryAfterDelay}ms (retry attempt: ${currentRetry + 1})`, "");
      await new Promise((resolve) => {
        return setTimeout(resolve, retryAfterDelay);
      });
      return true;
    }
    return false;
  }
}
var DEFAULT_MANAGED_IDENTITY_MAX_RETRIES = 3, DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS = 1000, DEFAULT_MANAGED_IDENTITY_HTTP_STATUS_CODES_TO_RETRY_ON;
var init_DefaultManagedIdentityRetryPolicy = __esm(() => {
  init_index_node();
  init_LinearRetryStrategy();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  DEFAULT_MANAGED_IDENTITY_HTTP_STATUS_CODES_TO_RETRY_ON = [
    exports_Constants.HTTP_NOT_FOUND,
    exports_Constants.HTTP_REQUEST_TIMEOUT,
    exports_Constants.HTTP_TOO_MANY_REQUESTS,
    exports_Constants.HTTP_SERVER_ERROR,
    exports_Constants.HTTP_SERVICE_UNAVAILABLE,
    exports_Constants.HTTP_GATEWAY_TIMEOUT
  ];
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/config/ManagedIdentityRequestParameters.mjs
class ManagedIdentityRequestParameters {
  constructor(httpMethod, endpoint, retryPolicy) {
    this.httpMethod = httpMethod;
    this._baseEndpoint = endpoint;
    this.headers = {};
    this.bodyParameters = {};
    this.queryParameters = {};
    this.retryPolicy = retryPolicy || new DefaultManagedIdentityRetryPolicy;
  }
  computeUri() {
    const parameters = new Map;
    if (this.queryParameters) {
      exports_RequestParameterBuilder.addExtraParameters(parameters, this.queryParameters);
    }
    const queryParametersString = exports_UrlUtils.mapToQueryString(parameters);
    return UrlString.appendQueryString(this._baseEndpoint, queryParametersString);
  }
  computeParametersBodyString() {
    const parameters = new Map;
    if (this.bodyParameters) {
      exports_RequestParameterBuilder.addExtraParameters(parameters, this.bodyParameters);
    }
    return exports_UrlUtils.mapToQueryString(parameters);
  }
}
var init_ManagedIdentityRequestParameters = __esm(() => {
  init_index_node();
  init_DefaultManagedIdentityRetryPolicy();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/AppService.mjs
var APP_SERVICE_MSI_API_VERSION = "2019-08-01", AppService;
var init_AppService = __esm(() => {
  init_BaseManagedIdentitySource();
  init_Constants2();
  init_ManagedIdentityRequestParameters();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  AppService = class AppService extends BaseManagedIdentitySource {
    constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint, identityHeader) {
      super(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
      this.identityEndpoint = identityEndpoint;
      this.identityHeader = identityHeader;
    }
    static getEnvironmentVariables() {
      const identityEndpoint = process.env[ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT];
      const identityHeader = process.env[ManagedIdentityEnvironmentVariableNames.IDENTITY_HEADER];
      return [identityEndpoint, identityHeader];
    }
    static tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) {
      const [identityEndpoint, identityHeader] = AppService.getEnvironmentVariables();
      if (!identityEndpoint || !identityHeader) {
        logger3.info(`[Managed Identity] ${ManagedIdentitySourceNames.APP_SERVICE} managed identity is unavailable because one or both of the '${ManagedIdentityEnvironmentVariableNames.IDENTITY_HEADER}' and '${ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT}' environment variables are not defined.`, "");
        return null;
      }
      const validatedIdentityEndpoint = AppService.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT, identityEndpoint, ManagedIdentitySourceNames.APP_SERVICE, logger3);
      logger3.info(`[Managed Identity] Environment variables validation passed for ${ManagedIdentitySourceNames.APP_SERVICE} managed identity. Endpoint URI: ${validatedIdentityEndpoint}. Creating ${ManagedIdentitySourceNames.APP_SERVICE} managed identity.`, "");
      return new AppService(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint, identityHeader);
    }
    createRequest(resource, managedIdentityId) {
      const request = new ManagedIdentityRequestParameters(HttpMethod2.GET, this.identityEndpoint);
      request.headers[ManagedIdentityHeaders.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader;
      request.queryParameters[ManagedIdentityQueryParameters.API_VERSION] = APP_SERVICE_MSI_API_VERSION;
      request.queryParameters[ManagedIdentityQueryParameters.RESOURCE] = resource;
      if (managedIdentityId.idType !== ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        request.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(managedIdentityId.idType)] = managedIdentityId.id;
      }
      return request;
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/AzureArc.mjs
import { accessSync, constants, statSync, readFileSync } from "fs";
import path from "path";
var ARC_API_VERSION = "2019-11-01", DEFAULT_AZURE_ARC_IDENTITY_ENDPOINT = "http://127.0.0.1:40342/metadata/identity/oauth2/token", HIMDS_EXECUTABLE_HELPER_STRING = "N/A: himds executable exists", SUPPORTED_AZURE_ARC_PLATFORMS, AZURE_ARC_FILE_DETECTION, AzureArc;
var init_AzureArc = __esm(() => {
  init_index_node();
  init_ManagedIdentityRequestParameters();
  init_BaseManagedIdentitySource();
  init_ManagedIdentityError();
  init_Constants2();
  init_ManagedIdentityErrorCodes();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  SUPPORTED_AZURE_ARC_PLATFORMS = {
    win32: `${process.env["ProgramData"]}\\AzureConnectedMachineAgent\\Tokens\\`,
    linux: "/var/opt/azcmagent/tokens/"
  };
  AZURE_ARC_FILE_DETECTION = {
    win32: `${process.env["ProgramFiles"]}\\AzureConnectedMachineAgent\\himds.exe`,
    linux: "/opt/azcmagent/bin/himds"
  };
  AzureArc = class AzureArc extends BaseManagedIdentitySource {
    constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint) {
      super(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
      this.identityEndpoint = identityEndpoint;
    }
    static getEnvironmentVariables() {
      let identityEndpoint = process.env[ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT];
      let imdsEndpoint = process.env[ManagedIdentityEnvironmentVariableNames.IMDS_ENDPOINT];
      if (!identityEndpoint || !imdsEndpoint) {
        const fileDetectionPath = AZURE_ARC_FILE_DETECTION[process.platform];
        try {
          accessSync(fileDetectionPath, constants.F_OK | constants.R_OK);
          identityEndpoint = DEFAULT_AZURE_ARC_IDENTITY_ENDPOINT;
          imdsEndpoint = HIMDS_EXECUTABLE_HELPER_STRING;
        } catch (err) {}
      }
      return [identityEndpoint, imdsEndpoint];
    }
    static tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) {
      const [identityEndpoint, imdsEndpoint] = AzureArc.getEnvironmentVariables();
      if (!identityEndpoint || !imdsEndpoint) {
        logger3.info(`[Managed Identity] ${ManagedIdentitySourceNames.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT}' and '${ManagedIdentityEnvironmentVariableNames.IMDS_ENDPOINT}' are not defined. ${ManagedIdentitySourceNames.AZURE_ARC} managed identity is also unavailable through file detection.`, "");
        return null;
      }
      if (imdsEndpoint === HIMDS_EXECUTABLE_HELPER_STRING) {
        logger3.info(`[Managed Identity] ${ManagedIdentitySourceNames.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${ManagedIdentitySourceNames.AZURE_ARC} endpoint: ${DEFAULT_AZURE_ARC_IDENTITY_ENDPOINT}. Creating ${ManagedIdentitySourceNames.AZURE_ARC} managed identity.`, "");
      } else {
        const validatedIdentityEndpoint = AzureArc.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT, identityEndpoint, ManagedIdentitySourceNames.AZURE_ARC, logger3);
        validatedIdentityEndpoint.endsWith("/") && validatedIdentityEndpoint.slice(0, -1);
        AzureArc.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.IMDS_ENDPOINT, imdsEndpoint, ManagedIdentitySourceNames.AZURE_ARC, logger3);
        logger3.info(`[Managed Identity] Environment variables validation passed for ${ManagedIdentitySourceNames.AZURE_ARC} managed identity. Endpoint URI: ${validatedIdentityEndpoint}. Creating ${ManagedIdentitySourceNames.AZURE_ARC} managed identity.`, "");
      }
      if (managedIdentityId.idType !== ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        throw createManagedIdentityError(unableToCreateAzureArc);
      }
      return new AzureArc(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint);
    }
    createRequest(resource) {
      const request = new ManagedIdentityRequestParameters(HttpMethod2.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
      request.headers[ManagedIdentityHeaders.METADATA_HEADER_NAME] = "true";
      request.queryParameters[ManagedIdentityQueryParameters.API_VERSION] = ARC_API_VERSION;
      request.queryParameters[ManagedIdentityQueryParameters.RESOURCE] = resource;
      return request;
    }
    async getServerTokenResponseAsync(originalResponse, networkClient, networkRequest, networkRequestOptions) {
      let retryResponse;
      if (originalResponse.status === exports_Constants.HTTP_UNAUTHORIZED) {
        const wwwAuthHeader = originalResponse.headers["www-authenticate"];
        if (!wwwAuthHeader) {
          throw createManagedIdentityError(wwwAuthenticateHeaderMissing);
        }
        if (!wwwAuthHeader.includes("Basic realm=")) {
          throw createManagedIdentityError(wwwAuthenticateHeaderUnsupportedFormat);
        }
        const secretFilePath = wwwAuthHeader.split("Basic realm=")[1];
        if (!SUPPORTED_AZURE_ARC_PLATFORMS.hasOwnProperty(process.platform)) {
          throw createManagedIdentityError(platformNotSupported);
        }
        const expectedSecretFilePath = SUPPORTED_AZURE_ARC_PLATFORMS[process.platform];
        const fileName = path.basename(secretFilePath);
        if (!fileName.endsWith(".key")) {
          throw createManagedIdentityError(invalidFileExtension);
        }
        if (expectedSecretFilePath + fileName !== secretFilePath) {
          throw createManagedIdentityError(invalidFilePath);
        }
        let secretFileSize;
        try {
          secretFileSize = await statSync(secretFilePath).size;
        } catch (e) {
          throw createManagedIdentityError(unableToReadSecretFile);
        }
        if (secretFileSize > AZURE_ARC_SECRET_FILE_MAX_SIZE_BYTES) {
          throw createManagedIdentityError(invalidSecret);
        }
        let secret;
        try {
          secret = readFileSync(secretFilePath, exports_Constants.EncodingTypes.UTF8);
        } catch (e) {
          throw createManagedIdentityError(unableToReadSecretFile);
        }
        const authHeaderValue = `Basic ${secret}`;
        this.logger.info(`[Managed Identity] Adding authorization header to the request.`, "");
        networkRequest.headers[ManagedIdentityHeaders.AUTHORIZATION_HEADER_NAME] = authHeaderValue;
        try {
          retryResponse = await networkClient.sendGetRequestAsync(networkRequest.computeUri(), networkRequestOptions);
        } catch (error) {
          if (error instanceof AuthError) {
            throw error;
          } else {
            throw createClientAuthError(exports_ClientAuthErrorCodes.networkError);
          }
        }
      }
      return this.getServerTokenResponse(retryResponse || originalResponse);
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/CloudShell.mjs
var CloudShell;
var init_CloudShell = __esm(() => {
  init_ManagedIdentityRequestParameters();
  init_BaseManagedIdentitySource();
  init_Constants2();
  init_ManagedIdentityError();
  init_ManagedIdentityErrorCodes();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  CloudShell = class CloudShell extends BaseManagedIdentitySource {
    constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, msiEndpoint) {
      super(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
      this.msiEndpoint = msiEndpoint;
    }
    static getEnvironmentVariables() {
      const msiEndpoint = process.env[ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT];
      return [msiEndpoint];
    }
    static tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) {
      const [msiEndpoint] = CloudShell.getEnvironmentVariables();
      if (!msiEndpoint) {
        logger3.info(`[Managed Identity] ${ManagedIdentitySourceNames.CLOUD_SHELL} managed identity is unavailable because the '${ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT} environment variable is not defined.`, "");
        return null;
      }
      const validatedMsiEndpoint = CloudShell.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT, msiEndpoint, ManagedIdentitySourceNames.CLOUD_SHELL, logger3);
      logger3.info(`[Managed Identity] Environment variable validation passed for ${ManagedIdentitySourceNames.CLOUD_SHELL} managed identity. Endpoint URI: ${validatedMsiEndpoint}. Creating ${ManagedIdentitySourceNames.CLOUD_SHELL} managed identity.`, "");
      if (managedIdentityId.idType !== ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        throw createManagedIdentityError(unableToCreateCloudShell);
      }
      return new CloudShell(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, msiEndpoint);
    }
    createRequest(resource) {
      const request = new ManagedIdentityRequestParameters(HttpMethod2.POST, this.msiEndpoint);
      request.headers[ManagedIdentityHeaders.METADATA_HEADER_NAME] = "true";
      request.bodyParameters[ManagedIdentityQueryParameters.RESOURCE] = resource;
      return request;
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/retry/ExponentialRetryStrategy.mjs
class ExponentialRetryStrategy {
  constructor(minExponentialBackoff, maxExponentialBackoff, exponentialDeltaBackoff) {
    this.minExponentialBackoff = minExponentialBackoff;
    this.maxExponentialBackoff = maxExponentialBackoff;
    this.exponentialDeltaBackoff = exponentialDeltaBackoff;
  }
  calculateDelay(currentRetry) {
    if (currentRetry === 0) {
      return this.minExponentialBackoff;
    }
    const exponentialDelay = Math.min(Math.pow(2, currentRetry - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff);
    return exponentialDelay;
  }
}
var init_ExponentialRetryStrategy = __esm(() => {
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/retry/ImdsRetryPolicy.mjs
class ImdsRetryPolicy {
  constructor() {
    this.exponentialRetryStrategy = new ExponentialRetryStrategy(ImdsRetryPolicy.MIN_EXPONENTIAL_BACKOFF_MS, ImdsRetryPolicy.MAX_EXPONENTIAL_BACKOFF_MS, ImdsRetryPolicy.EXPONENTIAL_DELTA_BACKOFF_MS);
  }
  static get MIN_EXPONENTIAL_BACKOFF_MS() {
    return MIN_EXPONENTIAL_BACKOFF_MS;
  }
  static get MAX_EXPONENTIAL_BACKOFF_MS() {
    return MAX_EXPONENTIAL_BACKOFF_MS;
  }
  static get EXPONENTIAL_DELTA_BACKOFF_MS() {
    return EXPONENTIAL_DELTA_BACKOFF_MS;
  }
  static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
    return HTTP_STATUS_GONE_RETRY_AFTER_MS;
  }
  set isNewRequest(value) {
    this._isNewRequest = value;
  }
  async pauseForRetry(httpStatusCode, currentRetry, logger3) {
    if (this._isNewRequest) {
      this._isNewRequest = false;
      this.maxRetries = httpStatusCode === exports_Constants.HTTP_GONE ? LINEAR_STRATEGY_NUM_RETRIES : EXPONENTIAL_STRATEGY_NUM_RETRIES;
    }
    if ((HTTP_STATUS_400_CODES_FOR_EXPONENTIAL_STRATEGY.includes(httpStatusCode) || httpStatusCode >= exports_Constants.HTTP_SERVER_ERROR_RANGE_START && httpStatusCode <= exports_Constants.HTTP_SERVER_ERROR_RANGE_END && currentRetry < this.maxRetries) && currentRetry < this.maxRetries) {
      const retryAfterDelay = httpStatusCode === exports_Constants.HTTP_GONE ? ImdsRetryPolicy.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(currentRetry);
      logger3.verbose(`Retrying request in ${retryAfterDelay}ms (retry attempt: ${currentRetry + 1})`, "");
      await new Promise((resolve) => {
        return setTimeout(resolve, retryAfterDelay);
      });
      return true;
    }
    return false;
  }
}
var HTTP_STATUS_400_CODES_FOR_EXPONENTIAL_STRATEGY, EXPONENTIAL_STRATEGY_NUM_RETRIES = 3, LINEAR_STRATEGY_NUM_RETRIES = 7, MIN_EXPONENTIAL_BACKOFF_MS = 1000, MAX_EXPONENTIAL_BACKOFF_MS = 4000, EXPONENTIAL_DELTA_BACKOFF_MS = 2000, HTTP_STATUS_GONE_RETRY_AFTER_MS;
var init_ImdsRetryPolicy = __esm(() => {
  init_index_node();
  init_ExponentialRetryStrategy();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  HTTP_STATUS_400_CODES_FOR_EXPONENTIAL_STRATEGY = [
    exports_Constants.HTTP_NOT_FOUND,
    exports_Constants.HTTP_REQUEST_TIMEOUT,
    exports_Constants.HTTP_GONE,
    exports_Constants.HTTP_TOO_MANY_REQUESTS
  ];
  HTTP_STATUS_GONE_RETRY_AFTER_MS = 10 * 1000;
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/Imds.mjs
var IMDS_TOKEN_PATH = "/metadata/identity/oauth2/token", DEFAULT_IMDS_ENDPOINT, IMDS_API_VERSION = "2018-02-01", Imds;
var init_Imds = __esm(() => {
  init_ManagedIdentityRequestParameters();
  init_BaseManagedIdentitySource();
  init_Constants2();
  init_ImdsRetryPolicy();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  DEFAULT_IMDS_ENDPOINT = `http://169.254.169.254${IMDS_TOKEN_PATH}`;
  Imds = class Imds extends BaseManagedIdentitySource {
    constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint) {
      super(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
      this.identityEndpoint = identityEndpoint;
    }
    static tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) {
      let validatedIdentityEndpoint;
      if (process.env[ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST]) {
        logger3.info(`[Managed Identity] Environment variable ${ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${ManagedIdentitySourceNames.IMDS} returned endpoint: ${process.env[ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`, "");
        validatedIdentityEndpoint = Imds.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${IMDS_TOKEN_PATH}`, ManagedIdentitySourceNames.IMDS, logger3);
      } else {
        logger3.info(`[Managed Identity] Unable to find ${ManagedIdentityEnvironmentVariableNames.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${ManagedIdentitySourceNames.IMDS}, using the default endpoint.`, "");
        validatedIdentityEndpoint = DEFAULT_IMDS_ENDPOINT;
      }
      return new Imds(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, validatedIdentityEndpoint);
    }
    createRequest(resource, managedIdentityId) {
      const request = new ManagedIdentityRequestParameters(HttpMethod2.GET, this.identityEndpoint);
      request.headers[ManagedIdentityHeaders.METADATA_HEADER_NAME] = "true";
      request.queryParameters[ManagedIdentityQueryParameters.API_VERSION] = IMDS_API_VERSION;
      request.queryParameters[ManagedIdentityQueryParameters.RESOURCE] = resource;
      if (managedIdentityId.idType !== ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        request.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(managedIdentityId.idType, true)] = managedIdentityId.id;
      }
      request.retryPolicy = new ImdsRetryPolicy;
      return request;
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/ServiceFabric.mjs
var SERVICE_FABRIC_MSI_API_VERSION = "2019-07-01-preview", ServiceFabric;
var init_ServiceFabric = __esm(() => {
  init_ManagedIdentityRequestParameters();
  init_BaseManagedIdentitySource();
  init_Constants2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  ServiceFabric = class ServiceFabric extends BaseManagedIdentitySource {
    constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint, identityHeader) {
      super(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
      this.identityEndpoint = identityEndpoint;
      this.identityHeader = identityHeader;
    }
    static getEnvironmentVariables() {
      const identityEndpoint = process.env[ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT];
      const identityHeader = process.env[ManagedIdentityEnvironmentVariableNames.IDENTITY_HEADER];
      const identityServerThumbprint = process.env[ManagedIdentityEnvironmentVariableNames.IDENTITY_SERVER_THUMBPRINT];
      return [identityEndpoint, identityHeader, identityServerThumbprint];
    }
    static tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) {
      const [identityEndpoint, identityHeader, identityServerThumbprint] = ServiceFabric.getEnvironmentVariables();
      if (!identityEndpoint || !identityHeader || !identityServerThumbprint) {
        logger3.info(`[Managed Identity] ${ManagedIdentitySourceNames.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${ManagedIdentityEnvironmentVariableNames.IDENTITY_HEADER}', '${ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT}' or '${ManagedIdentityEnvironmentVariableNames.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`, "");
        return null;
      }
      const validatedIdentityEndpoint = ServiceFabric.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.IDENTITY_ENDPOINT, identityEndpoint, ManagedIdentitySourceNames.SERVICE_FABRIC, logger3);
      logger3.info(`[Managed Identity] Environment variables validation passed for ${ManagedIdentitySourceNames.SERVICE_FABRIC} managed identity. Endpoint URI: ${validatedIdentityEndpoint}. Creating ${ManagedIdentitySourceNames.SERVICE_FABRIC} managed identity.`, "");
      if (managedIdentityId.idType !== ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        logger3.warning(`[Managed Identity] ${ManagedIdentitySourceNames.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`, "");
      }
      return new ServiceFabric(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, identityEndpoint, identityHeader);
    }
    createRequest(resource, managedIdentityId) {
      const request = new ManagedIdentityRequestParameters(HttpMethod2.GET, this.identityEndpoint);
      request.headers[ManagedIdentityHeaders.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader;
      request.queryParameters[ManagedIdentityQueryParameters.API_VERSION] = SERVICE_FABRIC_MSI_API_VERSION;
      request.queryParameters[ManagedIdentityQueryParameters.RESOURCE] = resource;
      if (managedIdentityId.idType !== ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        request.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(managedIdentityId.idType)] = managedIdentityId.id;
      }
      return request;
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentitySources/MachineLearning.mjs
var MACHINE_LEARNING_MSI_API_VERSION = "2017-09-01", MANAGED_IDENTITY_MACHINE_LEARNING_UNSUPPORTED_ID_TYPE_ERROR, MachineLearning;
var init_MachineLearning = __esm(() => {
  init_BaseManagedIdentitySource();
  init_Constants2();
  init_ManagedIdentityRequestParameters();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  MANAGED_IDENTITY_MACHINE_LEARNING_UNSUPPORTED_ID_TYPE_ERROR = `Only client id is supported for user-assigned managed identity in ${ManagedIdentitySourceNames.MACHINE_LEARNING}.`;
  MachineLearning = class MachineLearning extends BaseManagedIdentitySource {
    constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, msiEndpoint, secret) {
      super(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
      this.msiEndpoint = msiEndpoint;
      this.secret = secret;
    }
    static getEnvironmentVariables() {
      const msiEndpoint = process.env[ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT];
      const secret = process.env[ManagedIdentityEnvironmentVariableNames.MSI_SECRET];
      return [msiEndpoint, secret];
    }
    static tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) {
      const [msiEndpoint, secret] = MachineLearning.getEnvironmentVariables();
      if (!msiEndpoint || !secret) {
        logger3.info(`[Managed Identity] ${ManagedIdentitySourceNames.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT}' and '${ManagedIdentityEnvironmentVariableNames.MSI_SECRET}' environment variables are not defined.`, "");
        return null;
      }
      const validatedMsiEndpoint = MachineLearning.getValidatedEnvVariableUrlString(ManagedIdentityEnvironmentVariableNames.MSI_ENDPOINT, msiEndpoint, ManagedIdentitySourceNames.MACHINE_LEARNING, logger3);
      logger3.info(`[Managed Identity] Environment variables validation passed for ${ManagedIdentitySourceNames.MACHINE_LEARNING} managed identity. Endpoint URI: ${validatedMsiEndpoint}. Creating ${ManagedIdentitySourceNames.MACHINE_LEARNING} managed identity.`, "");
      return new MachineLearning(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, msiEndpoint, secret);
    }
    createRequest(resource, managedIdentityId) {
      const request = new ManagedIdentityRequestParameters(HttpMethod2.GET, this.msiEndpoint);
      request.headers[ManagedIdentityHeaders.METADATA_HEADER_NAME] = "true";
      request.headers[ManagedIdentityHeaders.ML_AND_SF_SECRET_HEADER_NAME] = this.secret;
      request.queryParameters[ManagedIdentityQueryParameters.API_VERSION] = MACHINE_LEARNING_MSI_API_VERSION;
      request.queryParameters[ManagedIdentityQueryParameters.RESOURCE] = resource;
      if (managedIdentityId.idType === ManagedIdentityIdType.SYSTEM_ASSIGNED) {
        request.queryParameters[ManagedIdentityUserAssignedIdQueryParameterNames.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[ManagedIdentityEnvironmentVariableNames.DEFAULT_IDENTITY_CLIENT_ID];
      } else if (managedIdentityId.idType === ManagedIdentityIdType.USER_ASSIGNED_CLIENT_ID) {
        request.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(managedIdentityId.idType, false, true)] = managedIdentityId.id;
      } else {
        throw new Error(MANAGED_IDENTITY_MACHINE_LEARNING_UNSUPPORTED_ID_TYPE_ERROR);
      }
      return request;
    }
  };
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentityClient.mjs
class ManagedIdentityClient {
  constructor(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) {
    this.logger = logger3;
    this.nodeStorage = nodeStorage;
    this.networkClient = networkClient;
    this.cryptoProvider = cryptoProvider;
    this.disableInternalRetries = disableInternalRetries;
  }
  async sendManagedIdentityTokenRequest(managedIdentityRequest, managedIdentityId, fakeAuthority, refreshAccessToken) {
    if (!ManagedIdentityClient.identitySource) {
      ManagedIdentityClient.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, managedIdentityId);
    }
    return ManagedIdentityClient.identitySource.acquireTokenWithManagedIdentity(managedIdentityRequest, managedIdentityId, fakeAuthority, refreshAccessToken);
  }
  allEnvironmentVariablesAreDefined(environmentVariables) {
    return Object.values(environmentVariables).every((environmentVariable) => {
      return environmentVariable !== undefined;
    });
  }
  getManagedIdentitySource() {
    ManagedIdentityClient.sourceName = this.allEnvironmentVariablesAreDefined(ServiceFabric.getEnvironmentVariables()) ? ManagedIdentitySourceNames.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(AppService.getEnvironmentVariables()) ? ManagedIdentitySourceNames.APP_SERVICE : this.allEnvironmentVariablesAreDefined(MachineLearning.getEnvironmentVariables()) ? ManagedIdentitySourceNames.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(CloudShell.getEnvironmentVariables()) ? ManagedIdentitySourceNames.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(AzureArc.getEnvironmentVariables()) ? ManagedIdentitySourceNames.AZURE_ARC : ManagedIdentitySourceNames.DEFAULT_TO_IMDS;
    return ManagedIdentityClient.sourceName;
  }
  selectManagedIdentitySource(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) {
    const source = ServiceFabric.tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) || AppService.tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) || MachineLearning.tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries) || CloudShell.tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) || AzureArc.tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries, managedIdentityId) || Imds.tryCreate(logger3, nodeStorage, networkClient, cryptoProvider, disableInternalRetries);
    if (!source) {
      throw createManagedIdentityError(unableToCreateSource);
    }
    return source;
  }
}
var init_ManagedIdentityClient = __esm(() => {
  init_AppService();
  init_AzureArc();
  init_CloudShell();
  init_Imds();
  init_ServiceFabric();
  init_ManagedIdentityError();
  init_Constants2();
  init_MachineLearning();
  init_ManagedIdentityErrorCodes();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/client/ManagedIdentityApplication.mjs
class ManagedIdentityApplication {
  constructor(configuration) {
    this.config = buildManagedIdentityConfiguration(configuration || {});
    this.logger = new Logger(this.config.system.loggerOptions, name2, version3);
    const fakeStatusAuthorityOptions = {
      canonicalAuthority: exports_Constants.DEFAULT_AUTHORITY
    };
    if (!ManagedIdentityApplication.nodeStorage) {
      ManagedIdentityApplication.nodeStorage = new NodeStorage(this.logger, this.config.managedIdentityId.id, DEFAULT_CRYPTO_IMPLEMENTATION, fakeStatusAuthorityOptions);
    }
    this.networkClient = this.config.system.networkClient;
    this.cryptoProvider = new CryptoProvider;
    const fakeAuthorityOptions = {
      protocolMode: ProtocolMode.AAD,
      knownAuthorities: [DEFAULT_AUTHORITY_FOR_MANAGED_IDENTITY],
      cloudDiscoveryMetadata: "",
      authorityMetadata: ""
    };
    this.fakeAuthority = new Authority(DEFAULT_AUTHORITY_FOR_MANAGED_IDENTITY, this.networkClient, ManagedIdentityApplication.nodeStorage, fakeAuthorityOptions, this.logger, this.cryptoProvider.createNewGuid(), new StubPerformanceClient, true);
    this.fakeClientCredentialClient = new ClientCredentialClient({
      authOptions: {
        clientId: this.config.managedIdentityId.id,
        authority: this.fakeAuthority
      }
    });
    this.managedIdentityClient = new ManagedIdentityClient(this.logger, ManagedIdentityApplication.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries);
    this.hashUtils = new HashUtils;
  }
  async acquireToken(managedIdentityRequestParams) {
    if (!managedIdentityRequestParams.resource) {
      throw createClientConfigurationError(exports_ClientConfigurationErrorCodes.urlEmptyError);
    }
    const managedIdentityRequest = {
      forceRefresh: managedIdentityRequestParams.forceRefresh,
      resource: managedIdentityRequestParams.resource.replace("/.default", ""),
      scopes: [
        managedIdentityRequestParams.resource.replace("/.default", "")
      ],
      authority: this.fakeAuthority.canonicalAuthority,
      correlationId: this.cryptoProvider.createNewGuid(),
      claims: managedIdentityRequestParams.claims,
      clientCapabilities: this.config.clientCapabilities
    };
    if (managedIdentityRequest.forceRefresh) {
      return this.acquireTokenFromManagedIdentity(managedIdentityRequest, this.config.managedIdentityId, this.fakeAuthority);
    }
    const [cachedAuthenticationResult, lastCacheOutcome] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(managedIdentityRequest, this.config, this.cryptoProvider, this.fakeAuthority, ManagedIdentityApplication.nodeStorage);
    if (managedIdentityRequest.claims) {
      const sourceName = this.managedIdentityClient.getManagedIdentitySource();
      if (cachedAuthenticationResult && SOURCES_THAT_SUPPORT_TOKEN_REVOCATION.includes(sourceName)) {
        const revokedTokenSha256Hash = this.hashUtils.sha256(cachedAuthenticationResult.accessToken).toString(exports_Constants.EncodingTypes.HEX);
        managedIdentityRequest.revokedTokenSha256Hash = revokedTokenSha256Hash;
      }
      return this.acquireTokenFromManagedIdentity(managedIdentityRequest, this.config.managedIdentityId, this.fakeAuthority);
    }
    if (cachedAuthenticationResult) {
      if (lastCacheOutcome === exports_Constants.CacheOutcome.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.", managedIdentityRequest.correlationId);
        const refreshAccessToken = true;
        await this.acquireTokenFromManagedIdentity(managedIdentityRequest, this.config.managedIdentityId, this.fakeAuthority, refreshAccessToken);
      }
      return cachedAuthenticationResult;
    } else {
      return this.acquireTokenFromManagedIdentity(managedIdentityRequest, this.config.managedIdentityId, this.fakeAuthority);
    }
  }
  async acquireTokenFromManagedIdentity(managedIdentityRequest, managedIdentityId, fakeAuthority, refreshAccessToken) {
    return this.managedIdentityClient.sendManagedIdentityTokenRequest(managedIdentityRequest, managedIdentityId, fakeAuthority, refreshAccessToken);
  }
  getManagedIdentitySource() {
    return ManagedIdentityClient.sourceName || this.managedIdentityClient.getManagedIdentitySource();
  }
}
var SOURCES_THAT_SUPPORT_TOKEN_REVOCATION;
var init_ManagedIdentityApplication = __esm(() => {
  init_index_node();
  init_Configuration();
  init_packageMetadata2();
  init_CryptoProvider();
  init_ClientCredentialClient();
  init_ManagedIdentityClient();
  init_NodeStorage();
  init_Constants2();
  init_HashUtils();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  SOURCES_THAT_SUPPORT_TOKEN_REVOCATION = [ManagedIdentitySourceNames.SERVICE_FABRIC];
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/cache/distributed/DistributedCachePlugin.mjs
class DistributedCachePlugin {
  constructor(client, partitionManager) {
    this.client = client;
    this.partitionManager = partitionManager;
  }
  async beforeCacheAccess(cacheContext) {
    const partitionKey = await this.partitionManager.getKey();
    const cacheData = await this.client.get(partitionKey);
    cacheContext.tokenCache.deserialize(cacheData);
  }
  async afterCacheAccess(cacheContext) {
    if (cacheContext.cacheHasChanged) {
      const kvStore = cacheContext.tokenCache.getKVStore();
      const accountEntities = Object.values(kvStore).filter((value) => exports_AccountEntityUtils.isAccountEntity(value));
      let partitionKey;
      if (accountEntities.length > 0) {
        const accountEntity = accountEntities[0];
        partitionKey = await this.partitionManager.extractKey(accountEntity);
      } else {
        partitionKey = await this.partitionManager.getKey();
      }
      await this.client.set(partitionKey, cacheContext.tokenCache.serialize());
    }
  }
}
var init_DistributedCachePlugin = __esm(() => {
  init_index_node();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
});

// node_modules/.bun/@azure+msal-node@5.1.2/node_modules/@azure/msal-node/dist/index.mjs
var exports_dist = {};
__export(exports_dist, {
  version: () => version3,
  internals: () => exports_internals,
  TokenCacheContext: () => TokenCacheContext,
  TokenCache: () => TokenCache,
  ServerError: () => ServerError,
  ResponseMode: () => ResponseMode2,
  PublicClientApplication: () => PublicClientApplication,
  ProtocolMode: () => ProtocolMode,
  PromptValue: () => PromptValue2,
  ManagedIdentitySourceNames: () => ManagedIdentitySourceNames,
  ManagedIdentityApplication: () => ManagedIdentityApplication,
  Logger: () => Logger,
  LogLevel: () => LogLevel,
  InteractionRequiredAuthErrorCodes: () => exports_InteractionRequiredAuthErrorCodes,
  InteractionRequiredAuthError: () => InteractionRequiredAuthError,
  DistributedCachePlugin: () => DistributedCachePlugin,
  CryptoProvider: () => CryptoProvider,
  ConfidentialClientApplication: () => ConfidentialClientApplication,
  ClientConfigurationErrorCodes: () => exports_ClientConfigurationErrorCodes,
  ClientConfigurationError: () => ClientConfigurationError,
  ClientAuthErrorCodes: () => exports_ClientAuthErrorCodes,
  ClientAuthError: () => ClientAuthError,
  ClientAssertion: () => ClientAssertion,
  AzureCloudInstance: () => AzureCloudInstance,
  AuthErrorCodes: () => exports_AuthErrorCodes,
  AuthError: () => AuthError
});
var PromptValue2, ResponseMode2;
var init_dist = __esm(() => {
  init_internals();
  init_index_node();
  init_index_node();
  init_PublicClientApplication();
  init_ConfidentialClientApplication();
  init_ManagedIdentityApplication();
  init_ClientAssertion();
  init_TokenCache();
  init_DistributedCachePlugin();
  init_Constants2();
  init_CryptoProvider();
  init_packageMetadata2();
  /*! @azure/msal-node v5.1.2 2026-04-01 */
  PromptValue2 = exports_Constants.PromptValue;
  ResponseMode2 = exports_Constants.ResponseMode;
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/random.js
function getRandomIntegerInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const offset = Math.floor(Math.random() * (max - min + 1));
  return offset + min;
}
var init_random = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/delay.js
function calculateRetryDelay(retryAttempt, config) {
  const exponentialDelay = config.retryDelayInMs * Math.pow(2, retryAttempt);
  const clampedDelay = Math.min(config.maxRetryDelayInMs, exponentialDelay);
  const retryAfterInMs = clampedDelay / 2 + getRandomIntegerInclusive(0, clampedDelay / 2);
  return { retryAfterInMs };
}
var init_delay = __esm(() => {
  init_random();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/object.js
function isObject(input) {
  return typeof input === "object" && input !== null && !Array.isArray(input) && !(input instanceof RegExp) && !(input instanceof Date);
}
var init_object = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/error.js
function isError(e) {
  if (isObject(e)) {
    const hasName = typeof e.name === "string";
    const hasMessage = typeof e.message === "string";
    return hasName && hasMessage;
  }
  return false;
}
var init_error = __esm(() => {
  init_object();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/uuidUtils.js
function randomUUID() {
  return crypto.randomUUID();
}
var init_uuidUtils = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/checkEnvironment.js
var isBrowser, isWebWorker, isDeno, isBun, isNodeLike, isReactNative;
var init_checkEnvironment = __esm(() => {
  isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  isWebWorker = typeof self === "object" && typeof self?.importScripts === "function" && (self.constructor?.name === "DedicatedWorkerGlobalScope" || self.constructor?.name === "ServiceWorkerGlobalScope" || self.constructor?.name === "SharedWorkerGlobalScope");
  isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";
  isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";
  isNodeLike = typeof globalThis.process !== "undefined" && Boolean(globalThis.process.version) && Boolean(globalThis.process.versions?.node);
  isReactNative = typeof navigator !== "undefined" && navigator?.product === "ReactNative";
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/bytesEncoding.js
function stringToUint8Array(value, format) {
  return Buffer.from(value, format);
}
var init_bytesEncoding = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/sanitizer.js
class Sanitizer {
  allowedHeaderNames;
  allowedQueryParameters;
  constructor({ additionalAllowedHeaderNames: allowedHeaderNames = [], additionalAllowedQueryParameters: allowedQueryParameters = [] } = {}) {
    allowedHeaderNames = defaultAllowedHeaderNames.concat(allowedHeaderNames);
    allowedQueryParameters = defaultAllowedQueryParameters.concat(allowedQueryParameters);
    this.allowedHeaderNames = new Set(allowedHeaderNames.map((n) => n.toLowerCase()));
    this.allowedQueryParameters = new Set(allowedQueryParameters.map((p) => p.toLowerCase()));
  }
  sanitize(obj) {
    const seen = new Set;
    return JSON.stringify(obj, (key, value) => {
      if (value instanceof Error) {
        return {
          ...value,
          name: value.name,
          message: value.message
        };
      }
      if (key === "headers" && isObject(value)) {
        return this.sanitizeHeaders(value);
      } else if (key === "url" && typeof value === "string") {
        return this.sanitizeUrl(value);
      } else if (key === "query" && isObject(value)) {
        return this.sanitizeQuery(value);
      } else if (key === "body") {
        return;
      } else if (key === "response") {
        return;
      } else if (key === "operationSpec") {
        return;
      } else if (Array.isArray(value) || isObject(value)) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    }, 2);
  }
  sanitizeUrl(value) {
    if (typeof value !== "string" || value === null || value === "") {
      return value;
    }
    const url = new URL(value);
    if (!url.search) {
      return value;
    }
    for (const [key] of url.searchParams) {
      if (!this.allowedQueryParameters.has(key.toLowerCase())) {
        url.searchParams.set(key, RedactedString);
      }
    }
    return url.toString();
  }
  sanitizeHeaders(obj) {
    const sanitized = {};
    for (const key of Object.keys(obj)) {
      if (this.allowedHeaderNames.has(key.toLowerCase())) {
        sanitized[key] = obj[key];
      } else {
        sanitized[key] = RedactedString;
      }
    }
    return sanitized;
  }
  sanitizeQuery(value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    const sanitized = {};
    for (const k of Object.keys(value)) {
      if (this.allowedQueryParameters.has(k.toLowerCase())) {
        sanitized[k] = value[k];
      } else {
        sanitized[k] = RedactedString;
      }
    }
    return sanitized;
  }
}
var RedactedString = "REDACTED", defaultAllowedHeaderNames, defaultAllowedQueryParameters;
var init_sanitizer = __esm(() => {
  init_object();
  defaultAllowedHeaderNames = [
    "x-ms-client-request-id",
    "x-ms-return-client-request-id",
    "x-ms-useragent",
    "x-ms-correlation-request-id",
    "x-ms-request-id",
    "client-request-id",
    "ms-cv",
    "return-client-request-id",
    "traceparent",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Origin",
    "Accept",
    "Accept-Encoding",
    "Cache-Control",
    "Connection",
    "Content-Length",
    "Content-Type",
    "Date",
    "ETag",
    "Expires",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "Last-Modified",
    "Pragma",
    "Request-Id",
    "Retry-After",
    "Server",
    "Transfer-Encoding",
    "User-Agent",
    "WWW-Authenticate"
  ];
  defaultAllowedQueryParameters = ["api-version"];
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/internal.js
var init_internal2 = __esm(() => {
  init_delay();
  init_error();
  init_checkEnvironment();
  init_sanitizer();
});

// node_modules/.bun/@azure+abort-controller@2.1.2/node_modules/@azure/abort-controller/dist/esm/AbortError.js
var AbortError;
var init_AbortError = __esm(() => {
  AbortError = class AbortError extends Error {
    constructor(message) {
      super(message);
      this.name = "AbortError";
    }
  };
});

// node_modules/.bun/@azure+abort-controller@2.1.2/node_modules/@azure/abort-controller/dist/esm/index.js
var init_esm3 = __esm(() => {
  init_AbortError();
});

// node_modules/.bun/@azure+core-util@1.13.1/node_modules/@azure/core-util/dist/esm/createAbortablePromise.js
function createAbortablePromise(buildPromise, options) {
  const { cleanupBeforeAbort, abortSignal, abortErrorMsg } = options ?? {};
  return new Promise((resolve, reject) => {
    function rejectOnAbort() {
      reject(new AbortError(abortErrorMsg ?? "The operation was aborted."));
    }
    function removeListeners() {
      abortSignal?.removeEventListener("abort", onAbort);
    }
    function onAbort() {
      cleanupBeforeAbort?.();
      removeListeners();
      rejectOnAbort();
    }
    if (abortSignal?.aborted) {
      return rejectOnAbort();
    }
    try {
      buildPromise((x) => {
        removeListeners();
        resolve(x);
      }, (x) => {
        removeListeners();
        reject(x);
      });
    } catch (err) {
      reject(err);
    }
    abortSignal?.addEventListener("abort", onAbort);
  });
}
var init_createAbortablePromise = __esm(() => {
  init_esm3();
});

// node_modules/.bun/@azure+core-util@1.13.1/node_modules/@azure/core-util/dist/esm/delay.js
function delay2(timeInMs, options) {
  let token;
  const { abortSignal, abortErrorMsg } = options ?? {};
  return createAbortablePromise((resolve) => {
    token = setTimeout(resolve, timeInMs);
  }, {
    cleanupBeforeAbort: () => clearTimeout(token),
    abortSignal,
    abortErrorMsg: abortErrorMsg ?? StandardAbortMessage
  });
}
var StandardAbortMessage = "The delay was aborted.";
var init_delay2 = __esm(() => {
  init_createAbortablePromise();
});

// node_modules/.bun/@azure+core-util@1.13.1/node_modules/@azure/core-util/dist/esm/error.js
function getErrorMessage(e) {
  if (isError(e)) {
    return e.message;
  } else {
    let stringified;
    try {
      if (typeof e === "object" && e) {
        stringified = JSON.stringify(e);
      } else {
        stringified = String(e);
      }
    } catch (err) {
      stringified = "[unable to stringify input]";
    }
    return `Unknown error ${stringified}`;
  }
}
var init_error2 = __esm(() => {
  init_internal2();
});

// node_modules/.bun/@azure+core-util@1.13.1/node_modules/@azure/core-util/dist/esm/index.js
function calculateRetryDelay2(retryAttempt, config) {
  return calculateRetryDelay(retryAttempt, config);
}
function isError2(e) {
  return isError(e);
}
var isNode, isNodeLike2;
var init_esm4 = __esm(() => {
  init_internal2();
  init_delay2();
  init_error2();
  isNode = isNodeLike;
  isNodeLike2 = isNodeLike;
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/msal/msal.js
var init_msal = __esm(() => {
  init_dist();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/msal/utils.js
function ensureValidMsalToken(scopes, msalToken, getTokenOptions) {
  const error = (message) => {
    logger3.getToken.info(message);
    return new AuthenticationRequiredError({
      scopes: Array.isArray(scopes) ? scopes : [scopes],
      getTokenOptions,
      message
    });
  };
  if (!msalToken) {
    throw error("No response");
  }
  if (!msalToken.expiresOn) {
    throw error(`Response had no "expiresOn" property.`);
  }
  if (!msalToken.accessToken) {
    throw error(`Response had no "accessToken" property.`);
  }
}
function getAuthorityHost(options) {
  let authorityHost = options?.authorityHost;
  if (!authorityHost && isNodeLike2) {
    authorityHost = process.env.AZURE_AUTHORITY_HOST;
  }
  return authorityHost ?? DefaultAuthorityHost;
}
function getAuthority(tenantId, host) {
  if (!host) {
    host = DefaultAuthorityHost;
  }
  if (new RegExp(`${tenantId}/?$`).test(host)) {
    return host;
  }
  if (host.endsWith("/")) {
    return host + tenantId;
  } else {
    return `${host}/${tenantId}`;
  }
}
function getKnownAuthorities(tenantId, authorityHost, disableInstanceDiscovery) {
  if (tenantId === "adfs" && authorityHost || disableInstanceDiscovery) {
    return [authorityHost];
  }
  return [];
}
function getMSALLogLevel(logLevel) {
  switch (logLevel) {
    case "error":
      return exports_dist.LogLevel.Error;
    case "info":
      return exports_dist.LogLevel.Info;
    case "verbose":
      return exports_dist.LogLevel.Verbose;
    case "warning":
      return exports_dist.LogLevel.Warning;
    default:
      return exports_dist.LogLevel.Info;
  }
}
function handleMsalError(scopes, error, getTokenOptions) {
  if (error.name === "AuthError" || error.name === "ClientAuthError" || error.name === "BrowserAuthError") {
    const msalError = error;
    switch (msalError.errorCode) {
      case "endpoints_resolution_error":
        logger3.info(formatError(scopes, error.message));
        return new CredentialUnavailableError(error.message);
      case "device_code_polling_cancelled":
        return new AbortError("The authentication has been aborted by the caller.");
      case "consent_required":
      case "interaction_required":
      case "login_required":
        logger3.info(formatError(scopes, `Authentication returned errorCode ${msalError.errorCode}`));
        break;
      default:
        logger3.info(formatError(scopes, `Failed to acquire token: ${error.message}`));
        break;
    }
  }
  if (error.name === "ClientConfigurationError" || error.name === "BrowserConfigurationAuthError" || error.name === "AbortError" || error.name === "AuthenticationError") {
    return error;
  }
  if (error.name === "NativeAuthError") {
    logger3.info(formatError(scopes, `Error from the native broker: ${error.message} with status code: ${error.statusCode}`));
    return error;
  }
  return new AuthenticationRequiredError({ scopes, getTokenOptions, message: error.message });
}
function publicToMsal(account) {
  return {
    localAccountId: account.homeAccountId,
    environment: account.authority,
    username: account.username,
    homeAccountId: account.homeAccountId,
    tenantId: account.tenantId
  };
}
function msalToPublic(clientId, account) {
  const record = {
    authority: account.environment ?? DefaultAuthority,
    homeAccountId: account.homeAccountId,
    tenantId: account.tenantId || DefaultTenantId,
    username: account.username,
    clientId,
    version: LatestAuthenticationRecordVersion
  };
  return record;
}
function serializeAuthenticationRecord(record) {
  return JSON.stringify(record);
}
function deserializeAuthenticationRecord(serializedRecord) {
  const parsed = JSON.parse(serializedRecord);
  if (parsed.version && parsed.version !== LatestAuthenticationRecordVersion) {
    throw Error("Unsupported AuthenticationRecord version");
  }
  return parsed;
}
var logger3, LatestAuthenticationRecordVersion = "1.0", defaultLoggerCallback = (credLogger, platform = isNode ? "Node" : "Browser") => (level, message, containsPii) => {
  if (containsPii) {
    return;
  }
  switch (level) {
    case exports_dist.LogLevel.Error:
      credLogger.info(`MSAL ${platform} V2 error: ${message}`);
      return;
    case exports_dist.LogLevel.Info:
      credLogger.info(`MSAL ${platform} V2 info message: ${message}`);
      return;
    case exports_dist.LogLevel.Verbose:
      credLogger.info(`MSAL ${platform} V2 verbose message: ${message}`);
      return;
    case exports_dist.LogLevel.Warning:
      credLogger.info(`MSAL ${platform} V2 warning: ${message}`);
      return;
  }
};
var init_utils = __esm(() => {
  init_errors();
  init_logging();
  init_constants();
  init_esm4();
  init_esm3();
  init_msal();
  logger3 = credentialLogger("IdentityUtils");
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/httpHeaders.js
function normalizeName(name3) {
  return name3.toLowerCase();
}
function* headerIterator(map) {
  for (const entry of map.values()) {
    yield [entry.name, entry.value];
  }
}
function createHttpHeaders(rawHeaders) {
  return new HttpHeadersImpl(rawHeaders);
}
var HttpHeadersImpl;
var init_httpHeaders = __esm(() => {
  HttpHeadersImpl = class HttpHeadersImpl {
    _headersMap;
    constructor(rawHeaders) {
      this._headersMap = new Map;
      if (rawHeaders) {
        for (const headerName of Object.keys(rawHeaders)) {
          this.set(headerName, rawHeaders[headerName]);
        }
      }
    }
    set(name3, value) {
      this._headersMap.set(normalizeName(name3), { name: name3, value: String(value).trim() });
    }
    get(name3) {
      return this._headersMap.get(normalizeName(name3))?.value;
    }
    has(name3) {
      return this._headersMap.has(normalizeName(name3));
    }
    delete(name3) {
      this._headersMap.delete(normalizeName(name3));
    }
    toJSON(options = {}) {
      const result = {};
      if (options.preserveCase) {
        for (const entry of this._headersMap.values()) {
          result[entry.name] = entry.value;
        }
      } else {
        for (const [normalizedName, entry] of this._headersMap) {
          result[normalizedName] = entry.value;
        }
      }
      return result;
    }
    toString() {
      return JSON.stringify(this.toJSON({ preserveCase: true }));
    }
    [Symbol.iterator]() {
      return headerIterator(this._headersMap);
    }
  };
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/pipelineRequest.js
class PipelineRequestImpl {
  url;
  method;
  headers;
  timeout;
  withCredentials;
  body;
  multipartBody;
  formData;
  streamResponseStatusCodes;
  enableBrowserStreams;
  proxySettings;
  disableKeepAlive;
  abortSignal;
  requestId;
  allowInsecureConnection;
  onUploadProgress;
  onDownloadProgress;
  requestOverrides;
  authSchemes;
  constructor(options) {
    this.url = options.url;
    this.body = options.body;
    this.headers = options.headers ?? createHttpHeaders();
    this.method = options.method ?? "GET";
    this.timeout = options.timeout ?? 0;
    this.multipartBody = options.multipartBody;
    this.formData = options.formData;
    this.disableKeepAlive = options.disableKeepAlive ?? false;
    this.proxySettings = options.proxySettings;
    this.streamResponseStatusCodes = options.streamResponseStatusCodes;
    this.withCredentials = options.withCredentials ?? false;
    this.abortSignal = options.abortSignal;
    this.onUploadProgress = options.onUploadProgress;
    this.onDownloadProgress = options.onDownloadProgress;
    this.requestId = options.requestId || randomUUID();
    this.allowInsecureConnection = options.allowInsecureConnection ?? false;
    this.enableBrowserStreams = options.enableBrowserStreams ?? false;
    this.requestOverrides = options.requestOverrides;
    this.authSchemes = options.authSchemes;
  }
}
function createPipelineRequest(options) {
  return new PipelineRequestImpl(options);
}
var init_pipelineRequest = __esm(() => {
  init_httpHeaders();
  init_uuidUtils();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/pipeline.js
class HttpPipeline {
  _policies = [];
  _orderedPolicies;
  constructor(policies) {
    this._policies = policies?.slice(0) ?? [];
    this._orderedPolicies = undefined;
  }
  addPolicy(policy, options = {}) {
    if (options.phase && options.afterPhase) {
      throw new Error("Policies inside a phase cannot specify afterPhase.");
    }
    if (options.phase && !ValidPhaseNames.has(options.phase)) {
      throw new Error(`Invalid phase name: ${options.phase}`);
    }
    if (options.afterPhase && !ValidPhaseNames.has(options.afterPhase)) {
      throw new Error(`Invalid afterPhase name: ${options.afterPhase}`);
    }
    this._policies.push({
      policy,
      options
    });
    this._orderedPolicies = undefined;
  }
  removePolicy(options) {
    const removedPolicies = [];
    this._policies = this._policies.filter((policyDescriptor) => {
      if (options.name && policyDescriptor.policy.name === options.name || options.phase && policyDescriptor.options.phase === options.phase) {
        removedPolicies.push(policyDescriptor.policy);
        return false;
      } else {
        return true;
      }
    });
    this._orderedPolicies = undefined;
    return removedPolicies;
  }
  sendRequest(httpClient, request) {
    const policies = this.getOrderedPolicies();
    const pipeline = policies.reduceRight((next, policy) => {
      return (req) => {
        return policy.sendRequest(req, next);
      };
    }, (req) => httpClient.sendRequest(req));
    return pipeline(request);
  }
  getOrderedPolicies() {
    if (!this._orderedPolicies) {
      this._orderedPolicies = this.orderPolicies();
    }
    return this._orderedPolicies;
  }
  clone() {
    return new HttpPipeline(this._policies);
  }
  static create() {
    return new HttpPipeline;
  }
  orderPolicies() {
    const result = [];
    const policyMap = new Map;
    function createPhase(name3) {
      return {
        name: name3,
        policies: new Set,
        hasRun: false,
        hasAfterPolicies: false
      };
    }
    const serializePhase = createPhase("Serialize");
    const noPhase = createPhase("None");
    const deserializePhase = createPhase("Deserialize");
    const retryPhase = createPhase("Retry");
    const signPhase = createPhase("Sign");
    const orderedPhases = [serializePhase, noPhase, deserializePhase, retryPhase, signPhase];
    function getPhase(phase) {
      if (phase === "Retry") {
        return retryPhase;
      } else if (phase === "Serialize") {
        return serializePhase;
      } else if (phase === "Deserialize") {
        return deserializePhase;
      } else if (phase === "Sign") {
        return signPhase;
      } else {
        return noPhase;
      }
    }
    for (const descriptor of this._policies) {
      const policy = descriptor.policy;
      const options = descriptor.options;
      const policyName = policy.name;
      if (policyMap.has(policyName)) {
        throw new Error("Duplicate policy names not allowed in pipeline");
      }
      const node = {
        policy,
        dependsOn: new Set,
        dependants: new Set
      };
      if (options.afterPhase) {
        node.afterPhase = getPhase(options.afterPhase);
        node.afterPhase.hasAfterPolicies = true;
      }
      policyMap.set(policyName, node);
      const phase = getPhase(options.phase);
      phase.policies.add(node);
    }
    for (const descriptor of this._policies) {
      const { policy, options } = descriptor;
      const policyName = policy.name;
      const node = policyMap.get(policyName);
      if (!node) {
        throw new Error(`Missing node for policy ${policyName}`);
      }
      if (options.afterPolicies) {
        for (const afterPolicyName of options.afterPolicies) {
          const afterNode = policyMap.get(afterPolicyName);
          if (afterNode) {
            node.dependsOn.add(afterNode);
            afterNode.dependants.add(node);
          }
        }
      }
      if (options.beforePolicies) {
        for (const beforePolicyName of options.beforePolicies) {
          const beforeNode = policyMap.get(beforePolicyName);
          if (beforeNode) {
            beforeNode.dependsOn.add(node);
            node.dependants.add(beforeNode);
          }
        }
      }
    }
    function walkPhase(phase) {
      phase.hasRun = true;
      for (const node of phase.policies) {
        if (node.afterPhase && (!node.afterPhase.hasRun || node.afterPhase.policies.size)) {
          continue;
        }
        if (node.dependsOn.size === 0) {
          result.push(node.policy);
          for (const dependant of node.dependants) {
            dependant.dependsOn.delete(node);
          }
          policyMap.delete(node.policy.name);
          phase.policies.delete(node);
        }
      }
    }
    function walkPhases() {
      for (const phase of orderedPhases) {
        walkPhase(phase);
        if (phase.policies.size > 0 && phase !== noPhase) {
          if (!noPhase.hasRun) {
            walkPhase(noPhase);
          }
          return;
        }
        if (phase.hasAfterPolicies) {
          walkPhase(noPhase);
        }
      }
    }
    let iteration = 0;
    while (policyMap.size > 0) {
      iteration++;
      const initialResultLength = result.length;
      walkPhases();
      if (result.length <= initialResultLength && iteration > 1) {
        throw new Error("Cannot satisfy policy dependencies due to requirements cycle.");
      }
    }
    return result;
  }
}
function createEmptyPipeline() {
  return HttpPipeline.create();
}
var ValidPhaseNames;
var init_pipeline = __esm(() => {
  ValidPhaseNames = new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/inspect.js
import { inspect } from "util";
var custom;
var init_inspect = __esm(() => {
  custom = inspect.custom;
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/restError.js
function isRestError(e) {
  if (e instanceof RestError) {
    return true;
  }
  return isError(e) && e.name === "RestError";
}
var errorSanitizer, RestError;
var init_restError = __esm(() => {
  init_error();
  init_inspect();
  init_sanitizer();
  errorSanitizer = new Sanitizer;
  RestError = class RestError extends Error {
    static REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
    static PARSE_ERROR = "PARSE_ERROR";
    code;
    statusCode;
    request;
    response;
    details;
    constructor(message, options = {}) {
      super(message);
      this.name = "RestError";
      this.code = options.code;
      this.statusCode = options.statusCode;
      Object.defineProperty(this, "request", { value: options.request, enumerable: false });
      Object.defineProperty(this, "response", { value: options.response, enumerable: false });
      const agent = this.request?.agent ? {
        maxFreeSockets: this.request.agent.maxFreeSockets,
        maxSockets: this.request.agent.maxSockets
      } : undefined;
      Object.defineProperty(this, custom, {
        value: () => {
          return `RestError: ${this.message} 
 ${errorSanitizer.sanitize({
            ...this,
            request: { ...this.request, agent },
            response: this.response
          })}`;
        },
        enumerable: false
      });
      Object.setPrototypeOf(this, RestError.prototype);
    }
  };
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/abort-controller/AbortError.js
var AbortError2;
var init_AbortError2 = __esm(() => {
  AbortError2 = class AbortError2 extends Error {
    constructor(message) {
      super(message);
      this.name = "AbortError";
    }
  };
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/log.js
var logger4;
var init_log2 = __esm(() => {
  init_logger();
  logger4 = createClientLogger("ts-http-runtime");
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/nodeHttpClient.js
import http2 from "http";
import https from "https";
import zlib from "zlib";
import { Transform } from "stream";
function isReadableStream(body) {
  return body && typeof body.pipe === "function";
}
function isStreamComplete(stream) {
  if (stream.readable === false) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const handler = () => {
      resolve();
      stream.removeListener("close", handler);
      stream.removeListener("end", handler);
      stream.removeListener("error", handler);
    };
    stream.on("close", handler);
    stream.on("end", handler);
    stream.on("error", handler);
  });
}
function isArrayBuffer(body) {
  return body && typeof body.byteLength === "number";
}

class NodeHttpClient {
  cachedHttpAgent;
  cachedHttpsAgents = new WeakMap;
  async sendRequest(request) {
    const abortController = new AbortController;
    let abortListener;
    if (request.abortSignal) {
      if (request.abortSignal.aborted) {
        throw new AbortError2("The operation was aborted. Request has already been canceled.");
      }
      abortListener = (event) => {
        if (event.type === "abort") {
          abortController.abort();
        }
      };
      request.abortSignal.addEventListener("abort", abortListener);
    }
    let timeoutId;
    if (request.timeout > 0) {
      timeoutId = setTimeout(() => {
        const sanitizer = new Sanitizer;
        logger4.info(`request to '${sanitizer.sanitizeUrl(request.url)}' timed out. canceling...`);
        abortController.abort();
      }, request.timeout);
    }
    const acceptEncoding = request.headers.get("Accept-Encoding");
    const shouldDecompress = acceptEncoding?.includes("gzip") || acceptEncoding?.includes("deflate");
    let body = typeof request.body === "function" ? request.body() : request.body;
    if (body && !request.headers.has("Content-Length")) {
      const bodyLength = getBodyLength(body);
      if (bodyLength !== null) {
        request.headers.set("Content-Length", bodyLength);
      }
    }
    let responseStream;
    try {
      if (body && request.onUploadProgress) {
        const onUploadProgress = request.onUploadProgress;
        const uploadReportStream = new ReportTransform(onUploadProgress);
        uploadReportStream.on("error", (e) => {
          logger4.error("Error in upload progress", e);
        });
        if (isReadableStream(body)) {
          body.pipe(uploadReportStream);
        } else {
          uploadReportStream.end(body);
        }
        body = uploadReportStream;
      }
      const res = await this.makeRequest(request, abortController, body);
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      const headers = getResponseHeaders(res);
      const status = res.statusCode ?? 0;
      const response = {
        status,
        headers,
        request
      };
      if (request.method === "HEAD") {
        res.resume();
        return response;
      }
      responseStream = shouldDecompress ? getDecodedResponseStream(res, headers) : res;
      const onDownloadProgress = request.onDownloadProgress;
      if (onDownloadProgress) {
        const downloadReportStream = new ReportTransform(onDownloadProgress);
        downloadReportStream.on("error", (e) => {
          logger4.error("Error in download progress", e);
        });
        responseStream.pipe(downloadReportStream);
        responseStream = downloadReportStream;
      }
      if (request.streamResponseStatusCodes?.has(Number.POSITIVE_INFINITY) || request.streamResponseStatusCodes?.has(response.status)) {
        response.readableStreamBody = responseStream;
      } else {
        response.bodyAsText = await streamToText(responseStream);
      }
      return response;
    } finally {
      if (request.abortSignal && abortListener) {
        let uploadStreamDone = Promise.resolve();
        if (isReadableStream(body)) {
          uploadStreamDone = isStreamComplete(body);
        }
        let downloadStreamDone = Promise.resolve();
        if (isReadableStream(responseStream)) {
          downloadStreamDone = isStreamComplete(responseStream);
        }
        Promise.all([uploadStreamDone, downloadStreamDone]).then(() => {
          if (abortListener) {
            request.abortSignal?.removeEventListener("abort", abortListener);
          }
        }).catch((e) => {
          logger4.warning("Error when cleaning up abortListener on httpRequest", e);
        });
      }
    }
  }
  makeRequest(request, abortController, body) {
    const url = new URL(request.url);
    const isInsecure = url.protocol !== "https:";
    if (isInsecure && !request.allowInsecureConnection) {
      throw new Error(`Cannot connect to ${request.url} while allowInsecureConnection is false.`);
    }
    const agent = request.agent ?? this.getOrCreateAgent(request, isInsecure);
    const options = {
      agent,
      hostname: url.hostname,
      path: `${url.pathname}${url.search}`,
      port: url.port,
      method: request.method,
      headers: request.headers.toJSON({ preserveCase: true }),
      ...request.requestOverrides
    };
    return new Promise((resolve, reject) => {
      const req = isInsecure ? http2.request(options, resolve) : https.request(options, resolve);
      req.once("error", (err) => {
        reject(new RestError(err.message, { code: err.code ?? RestError.REQUEST_SEND_ERROR, request }));
      });
      abortController.signal.addEventListener("abort", () => {
        const abortError = new AbortError2("The operation was aborted. Rejecting from abort signal callback while making request.");
        req.destroy(abortError);
        reject(abortError);
      });
      if (body && isReadableStream(body)) {
        body.pipe(req);
      } else if (body) {
        if (typeof body === "string" || Buffer.isBuffer(body)) {
          req.end(body);
        } else if (isArrayBuffer(body)) {
          req.end(ArrayBuffer.isView(body) ? Buffer.from(body.buffer) : Buffer.from(body));
        } else {
          logger4.error("Unrecognized body type", body);
          reject(new RestError("Unrecognized body type"));
        }
      } else {
        req.end();
      }
    });
  }
  getOrCreateAgent(request, isInsecure) {
    const disableKeepAlive = request.disableKeepAlive;
    if (isInsecure) {
      if (disableKeepAlive) {
        return http2.globalAgent;
      }
      if (!this.cachedHttpAgent) {
        this.cachedHttpAgent = new http2.Agent({ keepAlive: true });
      }
      return this.cachedHttpAgent;
    } else {
      if (disableKeepAlive && !request.tlsSettings) {
        return https.globalAgent;
      }
      const tlsSettings = request.tlsSettings ?? DEFAULT_TLS_SETTINGS;
      let agent = this.cachedHttpsAgents.get(tlsSettings);
      if (agent && agent.options.keepAlive === !disableKeepAlive) {
        return agent;
      }
      logger4.info("No cached TLS Agent exist, creating a new Agent");
      agent = new https.Agent({
        keepAlive: !disableKeepAlive,
        ...tlsSettings
      });
      this.cachedHttpsAgents.set(tlsSettings, agent);
      return agent;
    }
  }
}
function getResponseHeaders(res) {
  const headers = createHttpHeaders();
  for (const header of Object.keys(res.headers)) {
    const value = res.headers[header];
    if (Array.isArray(value)) {
      if (value.length > 0) {
        headers.set(header, value[0]);
      }
    } else if (value) {
      headers.set(header, value);
    }
  }
  return headers;
}
function getDecodedResponseStream(stream, headers) {
  const contentEncoding = headers.get("Content-Encoding");
  if (contentEncoding === "gzip") {
    const unzip = zlib.createGunzip();
    stream.pipe(unzip);
    return unzip;
  } else if (contentEncoding === "deflate") {
    const inflate = zlib.createInflate();
    stream.pipe(inflate);
    return inflate;
  }
  return stream;
}
function streamToText(stream) {
  return new Promise((resolve, reject) => {
    const buffer = [];
    stream.on("data", (chunk) => {
      if (Buffer.isBuffer(chunk)) {
        buffer.push(chunk);
      } else {
        buffer.push(Buffer.from(chunk));
      }
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffer).toString("utf8"));
    });
    stream.on("error", (e) => {
      if (e && e?.name === "AbortError") {
        reject(e);
      } else {
        reject(new RestError(`Error reading response as text: ${e.message}`, {
          code: RestError.PARSE_ERROR
        }));
      }
    });
  });
}
function getBodyLength(body) {
  if (!body) {
    return 0;
  } else if (Buffer.isBuffer(body)) {
    return body.length;
  } else if (isReadableStream(body)) {
    return null;
  } else if (isArrayBuffer(body)) {
    return body.byteLength;
  } else if (typeof body === "string") {
    return Buffer.from(body).length;
  } else {
    return null;
  }
}
function createNodeHttpClient() {
  return new NodeHttpClient;
}
var DEFAULT_TLS_SETTINGS, ReportTransform;
var init_nodeHttpClient = __esm(() => {
  init_AbortError2();
  init_httpHeaders();
  init_restError();
  init_log2();
  init_sanitizer();
  DEFAULT_TLS_SETTINGS = {};
  ReportTransform = class ReportTransform extends Transform {
    loadedBytes = 0;
    progressCallback;
    _transform(chunk, _encoding, callback) {
      this.push(chunk);
      this.loadedBytes += chunk.length;
      try {
        this.progressCallback({ loadedBytes: this.loadedBytes });
        callback();
      } catch (e) {
        callback(e);
      }
    }
    constructor(progressCallback) {
      super();
      this.progressCallback = progressCallback;
    }
  };
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/defaultHttpClient.js
function createDefaultHttpClient() {
  return createNodeHttpClient();
}
var init_defaultHttpClient = __esm(() => {
  init_nodeHttpClient();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/index.js
var init_esm5 = __esm(() => {
  init_httpHeaders();
  init_pipelineRequest();
  init_pipeline();
  init_restError();
  init_defaultHttpClient();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/pipeline.js
function createEmptyPipeline2() {
  return createEmptyPipeline();
}
var init_pipeline2 = __esm(() => {
  init_esm5();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/log.js
var logger5;
var init_log3 = __esm(() => {
  init_esm();
  logger5 = createClientLogger2("core-rest-pipeline");
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/agentPolicy.js
function agentPolicy(agent) {
  return {
    name: agentPolicyName,
    sendRequest: async (req, next) => {
      if (!req.agent) {
        req.agent = agent;
      }
      return next(req);
    }
  };
}
var agentPolicyName = "agentPolicy";
var init_agentPolicy = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/decompressResponsePolicy.js
function decompressResponsePolicy() {
  return {
    name: decompressResponsePolicyName,
    async sendRequest(request, next) {
      if (request.method !== "HEAD") {
        request.headers.set("Accept-Encoding", "gzip,deflate");
      }
      return next(request);
    }
  };
}
var decompressResponsePolicyName = "decompressResponsePolicy";
var init_decompressResponsePolicy = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/helpers.js
function delay3(delayInMs, value, options) {
  return new Promise((resolve, reject) => {
    let timer = undefined;
    let onAborted = undefined;
    const rejectOnAbort = () => {
      return reject(new AbortError2(options?.abortErrorMsg ? options?.abortErrorMsg : StandardAbortMessage2));
    };
    const removeListeners = () => {
      if (options?.abortSignal && onAborted) {
        options.abortSignal.removeEventListener("abort", onAborted);
      }
    };
    onAborted = () => {
      if (timer) {
        clearTimeout(timer);
      }
      removeListeners();
      return rejectOnAbort();
    };
    if (options?.abortSignal && options.abortSignal.aborted) {
      return rejectOnAbort();
    }
    timer = setTimeout(() => {
      removeListeners();
      resolve(value);
    }, delayInMs);
    if (options?.abortSignal) {
      options.abortSignal.addEventListener("abort", onAborted);
    }
  });
}
function parseHeaderValueAsNumber(response, headerName) {
  const value = response.headers.get(headerName);
  if (!value)
    return;
  const valueAsNum = Number(value);
  if (Number.isNaN(valueAsNum))
    return;
  return valueAsNum;
}
var StandardAbortMessage2 = "The operation was aborted.";
var init_helpers = __esm(() => {
  init_AbortError2();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/retryStrategies/throttlingRetryStrategy.js
function getRetryAfterInMs(response) {
  if (!(response && [429, 503].includes(response.status)))
    return;
  try {
    for (const header of AllRetryAfterHeaders) {
      const retryAfterValue = parseHeaderValueAsNumber(response, header);
      if (retryAfterValue === 0 || retryAfterValue) {
        const multiplyingFactor = header === RetryAfterHeader ? 1000 : 1;
        return retryAfterValue * multiplyingFactor;
      }
    }
    const retryAfterHeader = response.headers.get(RetryAfterHeader);
    if (!retryAfterHeader)
      return;
    const date = Date.parse(retryAfterHeader);
    const diff = date - Date.now();
    return Number.isFinite(diff) ? Math.max(0, diff) : undefined;
  } catch {
    return;
  }
}
function isThrottlingRetryResponse(response) {
  return Number.isFinite(getRetryAfterInMs(response));
}
function throttlingRetryStrategy() {
  return {
    name: "throttlingRetryStrategy",
    retry({ response }) {
      const retryAfterInMs = getRetryAfterInMs(response);
      if (!Number.isFinite(retryAfterInMs)) {
        return { skipStrategy: true };
      }
      return {
        retryAfterInMs
      };
    }
  };
}
var RetryAfterHeader = "Retry-After", AllRetryAfterHeaders;
var init_throttlingRetryStrategy = __esm(() => {
  init_helpers();
  AllRetryAfterHeaders = ["retry-after-ms", "x-ms-retry-after-ms", RetryAfterHeader];
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/retryStrategies/exponentialRetryStrategy.js
function exponentialRetryStrategy(options = {}) {
  const retryInterval = options.retryDelayInMs ?? DEFAULT_CLIENT_RETRY_INTERVAL;
  const maxRetryInterval = options.maxRetryDelayInMs ?? DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
  return {
    name: "exponentialRetryStrategy",
    retry({ retryCount, response, responseError }) {
      const matchedSystemError = isSystemError(responseError);
      const ignoreSystemErrors = matchedSystemError && options.ignoreSystemErrors;
      const isExponential = isExponentialRetryResponse(response);
      const ignoreExponentialResponse = isExponential && options.ignoreHttpStatusCodes;
      const unknownResponse = response && (isThrottlingRetryResponse(response) || !isExponential);
      if (unknownResponse || ignoreExponentialResponse || ignoreSystemErrors) {
        return { skipStrategy: true };
      }
      if (responseError && !matchedSystemError && !isExponential) {
        return { errorToThrow: responseError };
      }
      return calculateRetryDelay(retryCount, {
        retryDelayInMs: retryInterval,
        maxRetryDelayInMs: maxRetryInterval
      });
    }
  };
}
function isExponentialRetryResponse(response) {
  return Boolean(response && response.status !== undefined && (response.status >= 500 || response.status === 408) && response.status !== 501 && response.status !== 505);
}
function isSystemError(err) {
  if (!err) {
    return false;
  }
  return err.code === "ETIMEDOUT" || err.code === "ESOCKETTIMEDOUT" || err.code === "ECONNREFUSED" || err.code === "ECONNRESET" || err.code === "ENOENT" || err.code === "ENOTFOUND";
}
var DEFAULT_CLIENT_RETRY_INTERVAL = 1000, DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
var init_exponentialRetryStrategy = __esm(() => {
  init_delay();
  init_throttlingRetryStrategy();
  DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 1000 * 64;
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/constants.js
var DEFAULT_RETRY_POLICY_COUNT = 3;
var init_constants2 = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/retryPolicy.js
function retryPolicy(strategies, options = { maxRetries: DEFAULT_RETRY_POLICY_COUNT }) {
  const logger6 = options.logger || retryPolicyLogger;
  return {
    name: retryPolicyName,
    async sendRequest(request, next) {
      let response;
      let responseError;
      let retryCount = -1;
      retryRequest:
        while (true) {
          retryCount += 1;
          response = undefined;
          responseError = undefined;
          try {
            logger6.info(`Retry ${retryCount}: Attempting to send request`, request.requestId);
            response = await next(request);
            logger6.info(`Retry ${retryCount}: Received a response from request`, request.requestId);
          } catch (e) {
            logger6.error(`Retry ${retryCount}: Received an error from request`, request.requestId);
            if (!isRestError(e)) {
              throw e;
            }
            responseError = e;
            response = e.response;
          }
          if (request.abortSignal?.aborted) {
            logger6.error(`Retry ${retryCount}: Request aborted.`);
            const abortError = new AbortError2;
            throw abortError;
          }
          if (retryCount >= (options.maxRetries ?? DEFAULT_RETRY_POLICY_COUNT)) {
            logger6.info(`Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`);
            if (responseError) {
              throw responseError;
            } else if (response) {
              return response;
            } else {
              throw new Error("Maximum retries reached with no response or error to throw");
            }
          }
          logger6.info(`Retry ${retryCount}: Processing ${strategies.length} retry strategies.`);
          strategiesLoop:
            for (const strategy of strategies) {
              const strategyLogger = strategy.logger || logger6;
              strategyLogger.info(`Retry ${retryCount}: Processing retry strategy ${strategy.name}.`);
              const modifiers = strategy.retry({
                retryCount,
                response,
                responseError
              });
              if (modifiers.skipStrategy) {
                strategyLogger.info(`Retry ${retryCount}: Skipped.`);
                continue strategiesLoop;
              }
              const { errorToThrow, retryAfterInMs, redirectTo } = modifiers;
              if (errorToThrow) {
                strategyLogger.error(`Retry ${retryCount}: Retry strategy ${strategy.name} throws error:`, errorToThrow);
                throw errorToThrow;
              }
              if (retryAfterInMs || retryAfterInMs === 0) {
                strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} retries after ${retryAfterInMs}`);
                await delay3(retryAfterInMs, undefined, { abortSignal: request.abortSignal });
                continue retryRequest;
              }
              if (redirectTo) {
                strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} redirects to ${redirectTo}`);
                request.url = redirectTo;
                continue retryRequest;
              }
            }
          if (responseError) {
            logger6.info(`None of the retry strategies could work with the received error. Throwing it.`);
            throw responseError;
          }
          if (response) {
            logger6.info(`None of the retry strategies could work with the received response. Returning it.`);
            return response;
          }
        }
    }
  };
}
var retryPolicyLogger, retryPolicyName = "retryPolicy";
var init_retryPolicy = __esm(() => {
  init_helpers();
  init_restError();
  init_AbortError2();
  init_logger();
  init_constants2();
  retryPolicyLogger = createClientLogger("ts-http-runtime retryPolicy");
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/defaultRetryPolicy.js
function defaultRetryPolicy(options = {}) {
  return {
    name: defaultRetryPolicyName,
    sendRequest: retryPolicy([throttlingRetryStrategy(), exponentialRetryStrategy(options)], {
      maxRetries: options.maxRetries ?? DEFAULT_RETRY_POLICY_COUNT
    }).sendRequest
  };
}
var defaultRetryPolicyName = "defaultRetryPolicy";
var init_defaultRetryPolicy = __esm(() => {
  init_exponentialRetryStrategy();
  init_throttlingRetryStrategy();
  init_retryPolicy();
  init_constants2();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/formDataPolicy.js
function formDataToFormDataMap(formData) {
  const formDataMap = {};
  for (const [key, value] of formData.entries()) {
    formDataMap[key] ??= [];
    formDataMap[key].push(value);
  }
  return formDataMap;
}
function formDataPolicy() {
  return {
    name: formDataPolicyName,
    async sendRequest(request, next) {
      if (isNodeLike && typeof FormData !== "undefined" && request.body instanceof FormData) {
        request.formData = formDataToFormDataMap(request.body);
        request.body = undefined;
      }
      if (request.formData) {
        const contentType = request.headers.get("Content-Type");
        if (contentType && contentType.indexOf("application/x-www-form-urlencoded") !== -1) {
          request.body = wwwFormUrlEncode(request.formData);
        } else {
          await prepareFormData(request.formData, request);
        }
        request.formData = undefined;
      }
      return next(request);
    }
  };
}
function wwwFormUrlEncode(formData) {
  const urlSearchParams = new URLSearchParams;
  for (const [key, value] of Object.entries(formData)) {
    if (Array.isArray(value)) {
      for (const subValue of value) {
        urlSearchParams.append(key, subValue.toString());
      }
    } else {
      urlSearchParams.append(key, value.toString());
    }
  }
  return urlSearchParams.toString();
}
async function prepareFormData(formData, request) {
  const contentType = request.headers.get("Content-Type");
  if (contentType && !contentType.startsWith("multipart/form-data")) {
    return;
  }
  request.headers.set("Content-Type", contentType ?? "multipart/form-data");
  const parts = [];
  for (const [fieldName, values] of Object.entries(formData)) {
    for (const value of Array.isArray(values) ? values : [values]) {
      if (typeof value === "string") {
        parts.push({
          headers: createHttpHeaders({
            "Content-Disposition": `form-data; name="${fieldName}"`
          }),
          body: stringToUint8Array(value, "utf-8")
        });
      } else if (value === undefined || value === null || typeof value !== "object") {
        throw new Error(`Unexpected value for key ${fieldName}: ${value}. Value should be serialized to string first.`);
      } else {
        const fileName = value.name || "blob";
        const headers = createHttpHeaders();
        headers.set("Content-Disposition", `form-data; name="${fieldName}"; filename="${fileName}"`);
        headers.set("Content-Type", value.type || "application/octet-stream");
        parts.push({
          headers,
          body: value
        });
      }
    }
  }
  request.multipartBody = { parts };
}
var formDataPolicyName = "formDataPolicy";
var init_formDataPolicy = __esm(() => {
  init_bytesEncoding();
  init_checkEnvironment();
  init_httpHeaders();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/logPolicy.js
function logPolicy(options = {}) {
  const logger6 = options.logger ?? logger4.info;
  const sanitizer = new Sanitizer({
    additionalAllowedHeaderNames: options.additionalAllowedHeaderNames,
    additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
  });
  return {
    name: logPolicyName,
    async sendRequest(request, next) {
      if (!logger6.enabled) {
        return next(request);
      }
      logger6(`Request: ${sanitizer.sanitize(request)}`);
      const response = await next(request);
      logger6(`Response status code: ${response.status}`);
      logger6(`Headers: ${sanitizer.sanitize(response.headers)}`);
      return response;
    }
  };
}
var logPolicyName = "logPolicy";
var init_logPolicy = __esm(() => {
  init_log2();
  init_sanitizer();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js
function isBlob(x) {
  return typeof Blob !== "undefined" && x instanceof Blob;
}
var init_typeGuards = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/util/concat.js
import { Readable } from "stream";
async function* streamAsyncIterator() {
  const reader = this.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
function makeAsyncIterable(webStream) {
  if (!webStream[Symbol.asyncIterator]) {
    webStream[Symbol.asyncIterator] = streamAsyncIterator.bind(webStream);
  }
  if (!webStream.values) {
    webStream.values = streamAsyncIterator.bind(webStream);
  }
}
function ensureNodeStream(stream) {
  if (stream instanceof ReadableStream) {
    makeAsyncIterable(stream);
    return Readable.fromWeb(stream);
  } else {
    return stream;
  }
}
function toStream(source) {
  if (source instanceof Uint8Array) {
    return Readable.from(Buffer.from(source));
  } else if (isBlob(source)) {
    return ensureNodeStream(source.stream());
  } else {
    return ensureNodeStream(source);
  }
}
async function concat(sources) {
  return function() {
    const streams = sources.map((x) => typeof x === "function" ? x() : x).map(toStream);
    return Readable.from(async function* () {
      for (const stream of streams) {
        for await (const chunk of stream) {
          yield chunk;
        }
      }
    }());
  };
}
var init_concat = __esm(() => {
  init_typeGuards();
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/multipartPolicy.js
function generateBoundary() {
  return `----AzSDKFormBoundary${randomUUID()}`;
}
function encodeHeaders(headers) {
  let result = "";
  for (const [key, value] of headers) {
    result += `${key}: ${value}\r
`;
  }
  return result;
}
function getLength(source) {
  if (source instanceof Uint8Array) {
    return source.byteLength;
  } else if (isBlob(source)) {
    return source.size === -1 ? undefined : source.size;
  } else {
    return;
  }
}
function getTotalLength(sources) {
  let total = 0;
  for (const source of sources) {
    const partLength = getLength(source);
    if (partLength === undefined) {
      return;
    } else {
      total += partLength;
    }
  }
  return total;
}
async function buildRequestBody(request, parts, boundary) {
  const sources = [
    stringToUint8Array(`--${boundary}`, "utf-8"),
    ...parts.flatMap((part) => [
      stringToUint8Array(`\r
`, "utf-8"),
      stringToUint8Array(encodeHeaders(part.headers), "utf-8"),
      stringToUint8Array(`\r
`, "utf-8"),
      part.body,
      stringToUint8Array(`\r
--${boundary}`, "utf-8")
    ]),
    stringToUint8Array(`--\r
\r
`, "utf-8")
  ];
  const contentLength = getTotalLength(sources);
  if (contentLength) {
    request.headers.set("Content-Length", contentLength);
  }
  request.body = await concat(sources);
}
function assertValidBoundary(boundary) {
  if (boundary.length > maxBoundaryLength) {
    throw new Error(`Multipart boundary "${boundary}" exceeds maximum length of 70 characters`);
  }
  if (Array.from(boundary).some((x) => !validBoundaryCharacters.has(x))) {
    throw new Error(`Multipart boundary "${boundary}" contains invalid characters`);
  }
}
function multipartPolicy() {
  return {
    name: multipartPolicyName,
    async sendRequest(request, next) {
      if (!request.multipartBody) {
        return next(request);
      }
      if (request.body) {
        throw new Error("multipartBody and regular body cannot be set at the same time");
      }
      let boundary = request.multipartBody.boundary;
      const contentTypeHeader = request.headers.get("Content-Type") ?? "multipart/mixed";
      const parsedHeader = contentTypeHeader.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
      if (!parsedHeader) {
        throw new Error(`Got multipart request body, but content-type header was not multipart: ${contentTypeHeader}`);
      }
      const [, contentType, parsedBoundary] = parsedHeader;
      if (parsedBoundary && boundary && parsedBoundary !== boundary) {
        throw new Error(`Multipart boundary was specified as ${parsedBoundary} in the header, but got ${boundary} in the request body`);
      }
      boundary ??= parsedBoundary;
      if (boundary) {
        assertValidBoundary(boundary);
      } else {
        boundary = generateBoundary();
      }
      request.headers.set("Content-Type", `${contentType}; boundary=${boundary}`);
      await buildRequestBody(request, request.multipartBody.parts, boundary);
      request.multipartBody = undefined;
      return next(request);
    }
  };
}
var multipartPolicyName = "multipartPolicy", maxBoundaryLength = 70, validBoundaryCharacters;
var init_multipartPolicy = __esm(() => {
  init_bytesEncoding();
  init_typeGuards();
  init_uuidUtils();
  init_concat();
  validBoundaryCharacters = new Set(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?`);
});

// node_modules/.bun/http-proxy-agent@7.0.2/node_modules/http-proxy-agent/dist/index.js
var require_dist3 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HttpProxyAgent = undefined;
  var net = __importStar(__require("net"));
  var tls = __importStar(__require("tls"));
  var debug_1 = __importDefault(require_src());
  var events_1 = __require("events");
  var agent_base_1 = require_dist();
  var url_1 = __require("url");
  var debug = (0, debug_1.default)("http-proxy-agent");

  class HttpProxyAgent extends agent_base_1.Agent {
    constructor(proxy, opts) {
      super(opts);
      this.proxy = typeof proxy === "string" ? new url_1.URL(proxy) : proxy;
      this.proxyHeaders = opts?.headers ?? {};
      debug("Creating new HttpProxyAgent instance: %o", this.proxy.href);
      const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
      const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ...opts ? omit(opts, "headers") : null,
        host,
        port
      };
    }
    addRequest(req, opts) {
      req._header = null;
      this.setRequestProps(req, opts);
      super.addRequest(req, opts);
    }
    setRequestProps(req, opts) {
      const { proxy } = this;
      const protocol = opts.secureEndpoint ? "https:" : "http:";
      const hostname = req.getHeader("host") || "localhost";
      const base = `${protocol}//${hostname}`;
      const url = new url_1.URL(req.path, base);
      if (opts.port !== 80) {
        url.port = String(opts.port);
      }
      req.path = String(url);
      const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
      if (proxy.username || proxy.password) {
        const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
        headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
      }
      if (!headers["Proxy-Connection"]) {
        headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      }
      for (const name3 of Object.keys(headers)) {
        const value = headers[name3];
        if (value) {
          req.setHeader(name3, value);
        }
      }
    }
    async connect(req, opts) {
      req._header = null;
      if (!req.path.includes("://")) {
        this.setRequestProps(req, opts);
      }
      let first;
      let endOfHeaders;
      debug("Regenerating stored HTTP header string for request");
      req._implicitHeader();
      if (req.outputData && req.outputData.length > 0) {
        debug("Patching connection write() output buffer with updated header");
        first = req.outputData[0].data;
        endOfHeaders = first.indexOf(`\r
\r
`) + 4;
        req.outputData[0].data = req._header + first.substring(endOfHeaders);
        debug("Output buffer: %o", req.outputData[0].data);
      }
      let socket;
      if (this.proxy.protocol === "https:") {
        debug("Creating `tls.Socket`: %o", this.connectOpts);
        socket = tls.connect(this.connectOpts);
      } else {
        debug("Creating `net.Socket`: %o", this.connectOpts);
        socket = net.connect(this.connectOpts);
      }
      await (0, events_1.once)(socket, "connect");
      return socket;
    }
  }
  HttpProxyAgent.protocols = ["http", "https"];
  exports.HttpProxyAgent = HttpProxyAgent;
  function omit(obj, ...keys) {
    const ret = {};
    let key;
    for (key in obj) {
      if (!keys.includes(key)) {
        ret[key] = obj[key];
      }
    }
    return ret;
  }
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/proxyPolicy.js
function getEnvironmentValue(name3) {
  if (process.env[name3]) {
    return process.env[name3];
  } else if (process.env[name3.toLowerCase()]) {
    return process.env[name3.toLowerCase()];
  }
  return;
}
function loadEnvironmentProxyValue() {
  if (!process) {
    return;
  }
  const httpsProxy = getEnvironmentValue(HTTPS_PROXY);
  const allProxy = getEnvironmentValue(ALL_PROXY);
  const httpProxy = getEnvironmentValue(HTTP_PROXY);
  return httpsProxy || allProxy || httpProxy;
}
function isBypassed(uri, noProxyList, bypassedMap) {
  if (noProxyList.length === 0) {
    return false;
  }
  const host = new URL(uri).hostname;
  if (bypassedMap?.has(host)) {
    return bypassedMap.get(host);
  }
  let isBypassedFlag = false;
  for (const pattern of noProxyList) {
    if (pattern[0] === ".") {
      if (host.endsWith(pattern)) {
        isBypassedFlag = true;
      } else {
        if (host.length === pattern.length - 1 && host === pattern.slice(1)) {
          isBypassedFlag = true;
        }
      }
    } else {
      if (host === pattern) {
        isBypassedFlag = true;
      }
    }
  }
  bypassedMap?.set(host, isBypassedFlag);
  return isBypassedFlag;
}
function loadNoProxy() {
  const noProxy = getEnvironmentValue(NO_PROXY);
  noProxyListLoaded = true;
  if (noProxy) {
    return noProxy.split(",").map((item) => item.trim()).filter((item) => item.length);
  }
  return [];
}
function getDefaultProxySettingsInternal() {
  const envProxy = loadEnvironmentProxyValue();
  return envProxy ? new URL(envProxy) : undefined;
}
function getUrlFromProxySettings(settings) {
  let parsedProxyUrl;
  try {
    parsedProxyUrl = new URL(settings.host);
  } catch {
    throw new Error(`Expecting a valid host string in proxy settings, but found "${settings.host}".`);
  }
  parsedProxyUrl.port = String(settings.port);
  if (settings.username) {
    parsedProxyUrl.username = settings.username;
  }
  if (settings.password) {
    parsedProxyUrl.password = settings.password;
  }
  return parsedProxyUrl;
}
function setProxyAgentOnRequest(request, cachedAgents, proxyUrl) {
  if (request.agent) {
    return;
  }
  const url = new URL(request.url);
  const isInsecure = url.protocol !== "https:";
  if (request.tlsSettings) {
    logger4.warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
  }
  if (isInsecure) {
    if (!cachedAgents.httpProxyAgent) {
      cachedAgents.httpProxyAgent = new import_http_proxy_agent.HttpProxyAgent(proxyUrl);
    }
    request.agent = cachedAgents.httpProxyAgent;
  } else {
    if (!cachedAgents.httpsProxyAgent) {
      cachedAgents.httpsProxyAgent = new import_https_proxy_agent.HttpsProxyAgent(proxyUrl);
    }
    request.agent = cachedAgents.httpsProxyAgent;
  }
}
function proxyPolicy(proxySettings, options) {
  if (!noProxyListLoaded) {
    globalNoProxyList.push(...loadNoProxy());
  }
  const defaultProxy = proxySettings ? getUrlFromProxySettings(proxySettings) : getDefaultProxySettingsInternal();
  const cachedAgents = {};
  return {
    name: proxyPolicyName,
    async sendRequest(request, next) {
      if (!request.proxySettings && defaultProxy && !isBypassed(request.url, options?.customNoProxyList ?? globalNoProxyList, options?.customNoProxyList ? undefined : globalBypassedMap)) {
        setProxyAgentOnRequest(request, cachedAgents, defaultProxy);
      } else if (request.proxySettings) {
        setProxyAgentOnRequest(request, cachedAgents, getUrlFromProxySettings(request.proxySettings));
      }
      return next(request);
    }
  };
}
var import_https_proxy_agent, import_http_proxy_agent, HTTPS_PROXY = "HTTPS_PROXY", HTTP_PROXY = "HTTP_PROXY", ALL_PROXY = "ALL_PROXY", NO_PROXY = "NO_PROXY", proxyPolicyName = "proxyPolicy", globalNoProxyList, noProxyListLoaded = false, globalBypassedMap;
var init_proxyPolicy = __esm(() => {
  init_log2();
  import_https_proxy_agent = __toESM(require_dist2(), 1);
  import_http_proxy_agent = __toESM(require_dist3(), 1);
  globalNoProxyList = [];
  globalBypassedMap = new Map;
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/redirectPolicy.js
function redirectPolicy(options = {}) {
  const { maxRetries = 20, allowCrossOriginRedirects = false } = options;
  return {
    name: redirectPolicyName,
    async sendRequest(request, next) {
      const response = await next(request);
      return handleRedirect(next, response, maxRetries, allowCrossOriginRedirects);
    }
  };
}
async function handleRedirect(next, response, maxRetries, allowCrossOriginRedirects, currentRetries = 0) {
  const { request, status, headers } = response;
  const locationHeader = headers.get("location");
  if (locationHeader && (status === 300 || status === 301 && allowedRedirect.includes(request.method) || status === 302 && allowedRedirect.includes(request.method) || status === 303 && request.method === "POST" || status === 307) && currentRetries < maxRetries) {
    const url = new URL(locationHeader, request.url);
    if (!allowCrossOriginRedirects) {
      const originalUrl = new URL(request.url);
      if (url.origin !== originalUrl.origin) {
        logger4.verbose(`Skipping cross-origin redirect from ${originalUrl.origin} to ${url.origin}.`);
        return response;
      }
    }
    request.url = url.toString();
    if (status === 303) {
      request.method = "GET";
      request.headers.delete("Content-Length");
      delete request.body;
    }
    request.headers.delete("Authorization");
    const res = await next(request);
    return handleRedirect(next, res, maxRetries, allowCrossOriginRedirects, currentRetries + 1);
  }
  return response;
}
var redirectPolicyName = "redirectPolicy", allowedRedirect;
var init_redirectPolicy = __esm(() => {
  init_log2();
  allowedRedirect = ["GET", "HEAD"];
});

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/tlsPolicy.js
function tlsPolicy(tlsSettings) {
  return {
    name: tlsPolicyName,
    sendRequest: async (req, next) => {
      if (!req.tlsSettings) {
        req.tlsSettings = tlsSettings;
      }
      return next(req);
    }
  };
}
var tlsPolicyName = "tlsPolicy";
var init_tlsPolicy = () => {};

// node_modules/.bun/@typespec+ts-http-runtime@0.3.5/node_modules/@typespec/ts-http-runtime/dist/esm/policies/internal.js
var init_internal3 = __esm(() => {
  init_agentPolicy();
  init_decompressResponsePolicy();
  init_defaultRetryPolicy();
  init_retryPolicy();
  init_formDataPolicy();
  init_logPolicy();
  init_multipartPolicy();
  init_proxyPolicy();
  init_redirectPolicy();
  init_tlsPolicy();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/logPolicy.js
function logPolicy2(options = {}) {
  return logPolicy({
    logger: logger5.info,
    ...options
  });
}
var init_logPolicy2 = __esm(() => {
  init_log3();
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/redirectPolicy.js
function redirectPolicy2(options = {}) {
  return redirectPolicy(options);
}
var init_redirectPolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgentPlatform.js
import os from "os";
import process3 from "process";
function getHeaderName() {
  return "User-Agent";
}
async function setPlatformSpecificData(map) {
  if (process3 && process3.versions) {
    const osInfo = `${os.type()} ${os.release()}; ${os.arch()}`;
    const versions = process3.versions;
    if (versions.bun) {
      map.set("Bun", `${versions.bun} (${osInfo})`);
    } else if (versions.deno) {
      map.set("Deno", `${versions.deno} (${osInfo})`);
    } else if (versions.node) {
      map.set("Node", `${versions.node} (${osInfo})`);
    }
  }
}
var init_userAgentPlatform = () => {};

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/constants.js
var SDK_VERSION2 = "1.22.3", DEFAULT_RETRY_POLICY_COUNT2 = 3;
var init_constants3 = () => {};

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/util/userAgent.js
function getUserAgentString(telemetryInfo) {
  const parts = [];
  for (const [key, value] of telemetryInfo) {
    const token = value ? `${key}/${value}` : key;
    parts.push(token);
  }
  return parts.join(" ");
}
function getUserAgentHeaderName() {
  return getHeaderName();
}
async function getUserAgentValue(prefix) {
  const runtimeInfo = new Map;
  runtimeInfo.set("core-rest-pipeline", SDK_VERSION2);
  await setPlatformSpecificData(runtimeInfo);
  const defaultAgent = getUserAgentString(runtimeInfo);
  const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
  return userAgentValue;
}
var init_userAgent = __esm(() => {
  init_userAgentPlatform();
  init_constants3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/userAgentPolicy.js
function userAgentPolicy2(options = {}) {
  const userAgentValue = getUserAgentValue(options.userAgentPrefix);
  return {
    name: userAgentPolicyName2,
    async sendRequest(request, next) {
      if (!request.headers.has(UserAgentHeaderName)) {
        request.headers.set(UserAgentHeaderName, await userAgentValue);
      }
      return next(request);
    }
  };
}
var UserAgentHeaderName, userAgentPolicyName2 = "userAgentPolicy";
var init_userAgentPolicy = __esm(() => {
  init_userAgent();
  UserAgentHeaderName = getUserAgentHeaderName();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/util/file.js
function hasRawContent(x) {
  return typeof x[rawContent] === "function";
}
function getRawContent(blob) {
  if (hasRawContent(blob)) {
    return blob[rawContent]();
  } else {
    return blob;
  }
}
var rawContent;
var init_file = __esm(() => {
  rawContent = Symbol("rawContent");
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/multipartPolicy.js
function multipartPolicy2() {
  const tspPolicy = multipartPolicy();
  return {
    name: multipartPolicyName2,
    sendRequest: async (request, next) => {
      if (request.multipartBody) {
        for (const part of request.multipartBody.parts) {
          if (hasRawContent(part.body)) {
            part.body = getRawContent(part.body);
          }
        }
      }
      return tspPolicy.sendRequest(request, next);
    }
  };
}
var multipartPolicyName2;
var init_multipartPolicy2 = __esm(() => {
  init_internal3();
  init_file();
  multipartPolicyName2 = multipartPolicyName;
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/decompressResponsePolicy.js
function decompressResponsePolicy2() {
  return decompressResponsePolicy();
}
var init_decompressResponsePolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/defaultRetryPolicy.js
function defaultRetryPolicy2(options = {}) {
  return defaultRetryPolicy(options);
}
var init_defaultRetryPolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/formDataPolicy.js
function formDataPolicy2() {
  return formDataPolicy();
}
var init_formDataPolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/proxyPolicy.js
function proxyPolicy2(proxySettings, options) {
  return proxyPolicy(proxySettings, options);
}
var init_proxyPolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/setClientRequestIdPolicy.js
function setClientRequestIdPolicy(requestIdHeaderName = "x-ms-client-request-id") {
  return {
    name: setClientRequestIdPolicyName,
    async sendRequest(request, next) {
      if (!request.headers.has(requestIdHeaderName)) {
        request.headers.set(requestIdHeaderName, request.requestId);
      }
      return next(request);
    }
  };
}
var setClientRequestIdPolicyName = "setClientRequestIdPolicy";
var init_setClientRequestIdPolicy = () => {};

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/agentPolicy.js
function agentPolicy2(agent) {
  return agentPolicy(agent);
}
var init_agentPolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tlsPolicy.js
function tlsPolicy2(tlsSettings) {
  return tlsPolicy(tlsSettings);
}
var init_tlsPolicy2 = __esm(() => {
  init_internal3();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/restError.js
function isRestError2(e) {
  return isRestError(e);
}
var RestError2;
var init_restError2 = __esm(() => {
  init_esm5();
  RestError2 = RestError;
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/tracingPolicy.js
function tracingPolicy(options = {}) {
  const userAgentPromise = getUserAgentValue(options.userAgentPrefix);
  const sanitizer = new Sanitizer({
    additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
  });
  const tracingClient2 = tryCreateTracingClient();
  return {
    name: tracingPolicyName,
    async sendRequest(request, next) {
      if (!tracingClient2) {
        return next(request);
      }
      const userAgent = await userAgentPromise;
      const spanAttributes = {
        "http.url": sanitizer.sanitizeUrl(request.url),
        "http.method": request.method,
        "http.user_agent": userAgent,
        requestId: request.requestId
      };
      if (userAgent) {
        spanAttributes["http.user_agent"] = userAgent;
      }
      const { span, tracingContext } = tryCreateSpan(tracingClient2, request, spanAttributes) ?? {};
      if (!span || !tracingContext) {
        return next(request);
      }
      try {
        const response = await tracingClient2.withContext(tracingContext, next, request);
        tryProcessResponse(span, response);
        return response;
      } catch (err) {
        tryProcessError(span, err);
        throw err;
      }
    }
  };
}
function tryCreateTracingClient() {
  try {
    return createTracingClient({
      namespace: "",
      packageName: "@azure/core-rest-pipeline",
      packageVersion: SDK_VERSION2
    });
  } catch (e) {
    logger5.warning(`Error when creating the TracingClient: ${getErrorMessage(e)}`);
    return;
  }
}
function tryCreateSpan(tracingClient2, request, spanAttributes) {
  try {
    const { span, updatedOptions } = tracingClient2.startSpan(`HTTP ${request.method}`, { tracingOptions: request.tracingOptions }, {
      spanKind: "client",
      spanAttributes
    });
    if (!span.isRecording()) {
      span.end();
      return;
    }
    const headers = tracingClient2.createRequestHeaders(updatedOptions.tracingOptions.tracingContext);
    for (const [key, value] of Object.entries(headers)) {
      request.headers.set(key, value);
    }
    return { span, tracingContext: updatedOptions.tracingOptions.tracingContext };
  } catch (e) {
    logger5.warning(`Skipping creating a tracing span due to an error: ${getErrorMessage(e)}`);
    return;
  }
}
function tryProcessError(span, error) {
  try {
    span.setStatus({
      status: "error",
      error: isError2(error) ? error : undefined
    });
    if (isRestError2(error) && error.statusCode) {
      span.setAttribute("http.status_code", error.statusCode);
    }
    span.end();
  } catch (e) {
    logger5.warning(`Skipping tracing span processing due to an error: ${getErrorMessage(e)}`);
  }
}
function tryProcessResponse(span, response) {
  try {
    span.setAttribute("http.status_code", response.status);
    const serviceRequestId = response.headers.get("x-ms-request-id");
    if (serviceRequestId) {
      span.setAttribute("serviceRequestId", serviceRequestId);
    }
    if (response.status >= 400) {
      span.setStatus({
        status: "error"
      });
    }
    span.end();
  } catch (e) {
    logger5.warning(`Skipping tracing span processing due to an error: ${getErrorMessage(e)}`);
  }
}
var tracingPolicyName = "tracingPolicy";
var init_tracingPolicy = __esm(() => {
  init_esm2();
  init_constants3();
  init_userAgent();
  init_log3();
  init_esm4();
  init_restError2();
  init_internal2();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/util/wrapAbortSignal.js
function wrapAbortSignalLike(abortSignalLike) {
  if (abortSignalLike instanceof AbortSignal) {
    return { abortSignal: abortSignalLike };
  }
  if (abortSignalLike.aborted) {
    return { abortSignal: AbortSignal.abort(abortSignalLike.reason) };
  }
  const controller = new AbortController;
  let needsCleanup = true;
  function cleanup() {
    if (needsCleanup) {
      abortSignalLike.removeEventListener("abort", listener);
      needsCleanup = false;
    }
  }
  function listener() {
    controller.abort(abortSignalLike.reason);
    cleanup();
  }
  abortSignalLike.addEventListener("abort", listener);
  return { abortSignal: controller.signal, cleanup };
}
var init_wrapAbortSignal = () => {};

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/wrapAbortSignalLikePolicy.js
function wrapAbortSignalLikePolicy() {
  return {
    name: wrapAbortSignalLikePolicyName,
    sendRequest: async (request, next) => {
      if (!request.abortSignal) {
        return next(request);
      }
      const { abortSignal, cleanup } = wrapAbortSignalLike(request.abortSignal);
      request.abortSignal = abortSignal;
      try {
        return await next(request);
      } finally {
        cleanup?.();
      }
    }
  };
}
var wrapAbortSignalLikePolicyName = "wrapAbortSignalLikePolicy";
var init_wrapAbortSignalLikePolicy = __esm(() => {
  init_wrapAbortSignal();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/createPipelineFromOptions.js
function createPipelineFromOptions(options) {
  const pipeline = createEmptyPipeline2();
  if (isNodeLike2) {
    if (options.agent) {
      pipeline.addPolicy(agentPolicy2(options.agent));
    }
    if (options.tlsOptions) {
      pipeline.addPolicy(tlsPolicy2(options.tlsOptions));
    }
    pipeline.addPolicy(proxyPolicy2(options.proxyOptions));
    pipeline.addPolicy(decompressResponsePolicy2());
  }
  pipeline.addPolicy(wrapAbortSignalLikePolicy());
  pipeline.addPolicy(formDataPolicy2(), { beforePolicies: [multipartPolicyName2] });
  pipeline.addPolicy(userAgentPolicy2(options.userAgentOptions));
  pipeline.addPolicy(setClientRequestIdPolicy(options.telemetryOptions?.clientRequestIdHeaderName));
  pipeline.addPolicy(multipartPolicy2(), { afterPhase: "Deserialize" });
  pipeline.addPolicy(defaultRetryPolicy2(options.retryOptions), { phase: "Retry" });
  pipeline.addPolicy(tracingPolicy({ ...options.userAgentOptions, ...options.loggingOptions }), {
    afterPhase: "Retry"
  });
  if (isNodeLike2) {
    pipeline.addPolicy(redirectPolicy2(options.redirectOptions), { afterPhase: "Retry" });
  }
  pipeline.addPolicy(logPolicy2(options.loggingOptions), { afterPhase: "Sign" });
  return pipeline;
}
var init_createPipelineFromOptions = __esm(() => {
  init_logPolicy2();
  init_pipeline2();
  init_redirectPolicy2();
  init_userAgentPolicy();
  init_multipartPolicy2();
  init_decompressResponsePolicy2();
  init_defaultRetryPolicy2();
  init_formDataPolicy2();
  init_esm4();
  init_proxyPolicy2();
  init_setClientRequestIdPolicy();
  init_agentPolicy2();
  init_tlsPolicy2();
  init_tracingPolicy();
  init_wrapAbortSignalLikePolicy();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/defaultHttpClient.js
function createDefaultHttpClient2() {
  const client = createDefaultHttpClient();
  return {
    async sendRequest(request) {
      const { abortSignal, cleanup } = request.abortSignal ? wrapAbortSignalLike(request.abortSignal) : {};
      try {
        request.abortSignal = abortSignal;
        return await client.sendRequest(request);
      } finally {
        cleanup?.();
      }
    }
  };
}
var init_defaultHttpClient2 = __esm(() => {
  init_esm5();
  init_wrapAbortSignal();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/httpHeaders.js
function createHttpHeaders2(rawHeaders) {
  return createHttpHeaders(rawHeaders);
}
var init_httpHeaders2 = __esm(() => {
  init_esm5();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/pipelineRequest.js
function createPipelineRequest2(options) {
  return createPipelineRequest(options);
}
var init_pipelineRequest2 = __esm(() => {
  init_esm5();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/retryPolicy.js
function retryPolicy2(strategies, options = { maxRetries: DEFAULT_RETRY_POLICY_COUNT2 }) {
  return retryPolicy(strategies, {
    logger: retryPolicyLogger2,
    ...options
  });
}
var retryPolicyLogger2;
var init_retryPolicy2 = __esm(() => {
  init_esm();
  init_constants3();
  init_internal3();
  retryPolicyLogger2 = createClientLogger2("core-rest-pipeline retryPolicy");
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/util/tokenCycler.js
async function beginRefresh(getAccessToken, retryIntervalInMs, refreshTimeout) {
  async function tryGetAccessToken() {
    if (Date.now() < refreshTimeout) {
      try {
        return await getAccessToken();
      } catch {
        return null;
      }
    } else {
      const finalToken = await getAccessToken();
      if (finalToken === null) {
        throw new Error("Failed to refresh access token.");
      }
      return finalToken;
    }
  }
  let token = await tryGetAccessToken();
  while (token === null) {
    await delay2(retryIntervalInMs);
    token = await tryGetAccessToken();
  }
  return token;
}
function createTokenCycler(credential, tokenCyclerOptions) {
  let refreshWorker = null;
  let token = null;
  let tenantId;
  const options = {
    ...DEFAULT_CYCLER_OPTIONS,
    ...tokenCyclerOptions
  };
  const cycler = {
    get isRefreshing() {
      return refreshWorker !== null;
    },
    get shouldRefresh() {
      if (cycler.isRefreshing) {
        return false;
      }
      if (token?.refreshAfterTimestamp && token.refreshAfterTimestamp < Date.now()) {
        return true;
      }
      return (token?.expiresOnTimestamp ?? 0) - options.refreshWindowInMs < Date.now();
    },
    get mustRefresh() {
      return token === null || token.expiresOnTimestamp - options.forcedRefreshWindowInMs < Date.now();
    }
  };
  function refresh(scopes, getTokenOptions) {
    if (!cycler.isRefreshing) {
      const tryGetAccessToken = () => credential.getToken(scopes, getTokenOptions);
      refreshWorker = beginRefresh(tryGetAccessToken, options.retryIntervalInMs, token?.expiresOnTimestamp ?? Date.now()).then((_token) => {
        refreshWorker = null;
        token = _token;
        tenantId = getTokenOptions.tenantId;
        return token;
      }).catch((reason) => {
        refreshWorker = null;
        token = null;
        tenantId = undefined;
        throw reason;
      });
    }
    return refreshWorker;
  }
  return async (scopes, tokenOptions) => {
    const hasClaimChallenge = Boolean(tokenOptions.claims);
    const tenantIdChanged = tenantId !== tokenOptions.tenantId;
    if (hasClaimChallenge) {
      token = null;
    }
    const mustRefresh = tenantIdChanged || hasClaimChallenge || cycler.mustRefresh;
    if (mustRefresh) {
      return refresh(scopes, tokenOptions);
    }
    if (cycler.shouldRefresh) {
      refresh(scopes, tokenOptions);
    }
    return token;
  };
}
var DEFAULT_CYCLER_OPTIONS;
var init_tokenCycler = __esm(() => {
  init_esm4();
  DEFAULT_CYCLER_OPTIONS = {
    forcedRefreshWindowInMs: 1000,
    retryIntervalInMs: 3000,
    refreshWindowInMs: 1000 * 60 * 2
  };
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/policies/bearerTokenAuthenticationPolicy.js
async function trySendRequest(request, next) {
  try {
    return [await next(request), undefined];
  } catch (e) {
    if (isRestError2(e) && e.response) {
      return [e.response, e];
    } else {
      throw e;
    }
  }
}
async function defaultAuthorizeRequest(options) {
  const { scopes, getAccessToken, request } = options;
  const getTokenOptions = {
    abortSignal: request.abortSignal,
    tracingOptions: request.tracingOptions,
    enableCae: true
  };
  const accessToken = await getAccessToken(scopes, getTokenOptions);
  if (accessToken) {
    options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
  }
}
function isChallengeResponse(response) {
  return response.status === 401 && response.headers.has("WWW-Authenticate");
}
async function authorizeRequestOnCaeChallenge(onChallengeOptions, caeClaims) {
  const { scopes } = onChallengeOptions;
  const accessToken = await onChallengeOptions.getAccessToken(scopes, {
    enableCae: true,
    claims: caeClaims
  });
  if (!accessToken) {
    return false;
  }
  onChallengeOptions.request.headers.set("Authorization", `${accessToken.tokenType ?? "Bearer"} ${accessToken.token}`);
  return true;
}
function bearerTokenAuthenticationPolicy(options) {
  const { credential, scopes, challengeCallbacks } = options;
  const logger6 = options.logger || logger5;
  const callbacks = {
    authorizeRequest: challengeCallbacks?.authorizeRequest?.bind(challengeCallbacks) ?? defaultAuthorizeRequest,
    authorizeRequestOnChallenge: challengeCallbacks?.authorizeRequestOnChallenge?.bind(challengeCallbacks)
  };
  const getAccessToken = credential ? createTokenCycler(credential) : () => Promise.resolve(null);
  return {
    name: bearerTokenAuthenticationPolicyName,
    async sendRequest(request, next) {
      if (!request.url.toLowerCase().startsWith("https://")) {
        throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
      }
      await callbacks.authorizeRequest({
        scopes: Array.isArray(scopes) ? scopes : [scopes],
        request,
        getAccessToken,
        logger: logger6
      });
      let response;
      let error;
      let shouldSendRequest;
      [response, error] = await trySendRequest(request, next);
      if (isChallengeResponse(response)) {
        let claims = getCaeChallengeClaims(response.headers.get("WWW-Authenticate"));
        if (claims) {
          let parsedClaim;
          try {
            parsedClaim = atob(claims);
          } catch (e) {
            logger6.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${claims}`);
            return response;
          }
          shouldSendRequest = await authorizeRequestOnCaeChallenge({
            scopes: Array.isArray(scopes) ? scopes : [scopes],
            response,
            request,
            getAccessToken,
            logger: logger6
          }, parsedClaim);
          if (shouldSendRequest) {
            [response, error] = await trySendRequest(request, next);
          }
        } else if (callbacks.authorizeRequestOnChallenge) {
          shouldSendRequest = await callbacks.authorizeRequestOnChallenge({
            scopes: Array.isArray(scopes) ? scopes : [scopes],
            request,
            response,
            getAccessToken,
            logger: logger6
          });
          if (shouldSendRequest) {
            [response, error] = await trySendRequest(request, next);
          }
          if (isChallengeResponse(response)) {
            claims = getCaeChallengeClaims(response.headers.get("WWW-Authenticate"));
            if (claims) {
              let parsedClaim;
              try {
                parsedClaim = atob(claims);
              } catch (e) {
                logger6.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${claims}`);
                return response;
              }
              shouldSendRequest = await authorizeRequestOnCaeChallenge({
                scopes: Array.isArray(scopes) ? scopes : [scopes],
                response,
                request,
                getAccessToken,
                logger: logger6
              }, parsedClaim);
              if (shouldSendRequest) {
                [response, error] = await trySendRequest(request, next);
              }
            }
          }
        }
      }
      if (error) {
        throw error;
      } else {
        return response;
      }
    }
  };
}
function parseChallenges(challenges) {
  const challengeRegex = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g;
  const paramRegex = /(\w+)="([^"]*)"/g;
  const parsedChallenges = [];
  let match;
  while ((match = challengeRegex.exec(challenges)) !== null) {
    const scheme = match[1];
    const paramsString = match[2];
    const params = {};
    let paramMatch;
    while ((paramMatch = paramRegex.exec(paramsString)) !== null) {
      params[paramMatch[1]] = paramMatch[2];
    }
    parsedChallenges.push({ scheme, params });
  }
  return parsedChallenges;
}
function getCaeChallengeClaims(challenges) {
  if (!challenges) {
    return;
  }
  const parsedChallenges = parseChallenges(challenges);
  return parsedChallenges.find((x) => x.scheme === "Bearer" && x.params.claims && x.params.error === "insufficient_claims")?.params.claims;
}
var bearerTokenAuthenticationPolicyName = "bearerTokenAuthenticationPolicy";
var init_bearerTokenAuthenticationPolicy = __esm(() => {
  init_tokenCycler();
  init_log3();
  init_restError2();
});

// node_modules/.bun/@azure+core-rest-pipeline@1.23.0/node_modules/@azure/core-rest-pipeline/dist/esm/index.js
var init_esm6 = __esm(() => {
  init_pipeline2();
  init_createPipelineFromOptions();
  init_defaultHttpClient2();
  init_httpHeaders2();
  init_pipelineRequest2();
  init_restError2();
  init_retryPolicy2();
  init_bearerTokenAuthenticationPolicy();
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/interfaces.js
var XML_ATTRKEY = "$", XML_CHARKEY = "_";
var init_interfaces = () => {};

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/utils.js
function isPrimitiveBody(value, mapperTypeName) {
  return mapperTypeName !== "Composite" && mapperTypeName !== "Dictionary" && (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || mapperTypeName?.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i) !== null || value === undefined || value === null);
}
function handleNullableResponseAndWrappableBody(responseObject) {
  const combinedHeadersAndBody = {
    ...responseObject.headers,
    ...responseObject.body
  };
  if (responseObject.hasNullableType && Object.getOwnPropertyNames(combinedHeadersAndBody).length === 0) {
    return responseObject.shouldWrapBody ? { body: null } : null;
  } else {
    return responseObject.shouldWrapBody ? {
      ...responseObject.headers,
      body: responseObject.body
    } : combinedHeadersAndBody;
  }
}
function flattenResponse(fullResponse, responseSpec) {
  const parsedHeaders = fullResponse.parsedHeaders;
  if (fullResponse.request.method === "HEAD") {
    return {
      ...parsedHeaders,
      body: fullResponse.parsedBody
    };
  }
  const bodyMapper = responseSpec && responseSpec.bodyMapper;
  const isNullable = Boolean(bodyMapper?.nullable);
  const expectedBodyTypeName = bodyMapper?.type.name;
  if (expectedBodyTypeName === "Stream") {
    return {
      ...parsedHeaders,
      blobBody: fullResponse.blobBody,
      readableStreamBody: fullResponse.readableStreamBody
    };
  }
  const modelProperties = expectedBodyTypeName === "Composite" && bodyMapper.type.modelProperties || {};
  const isPageableResponse = Object.keys(modelProperties).some((k) => modelProperties[k].serializedName === "");
  if (expectedBodyTypeName === "Sequence" || isPageableResponse) {
    const arrayResponse = fullResponse.parsedBody ?? [];
    for (const key of Object.keys(modelProperties)) {
      if (modelProperties[key].serializedName) {
        arrayResponse[key] = fullResponse.parsedBody?.[key];
      }
    }
    if (parsedHeaders) {
      for (const key of Object.keys(parsedHeaders)) {
        arrayResponse[key] = parsedHeaders[key];
      }
    }
    return isNullable && !fullResponse.parsedBody && !parsedHeaders && Object.getOwnPropertyNames(modelProperties).length === 0 ? null : arrayResponse;
  }
  return handleNullableResponseAndWrappableBody({
    body: fullResponse.parsedBody,
    headers: parsedHeaders,
    hasNullableType: isNullable,
    shouldWrapBody: isPrimitiveBody(fullResponse.parsedBody, expectedBodyTypeName)
  });
}
var init_utils2 = () => {};

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/serializer.js
var MapperTypeNames;
var init_serializer = __esm(() => {
  MapperTypeNames = {
    Base64Url: "Base64Url",
    Boolean: "Boolean",
    ByteArray: "ByteArray",
    Composite: "Composite",
    Date: "Date",
    DateTime: "DateTime",
    DateTimeRfc1123: "DateTimeRfc1123",
    Dictionary: "Dictionary",
    Enum: "Enum",
    Number: "Number",
    Object: "Object",
    Sequence: "Sequence",
    String: "String",
    Stream: "Stream",
    TimeSpan: "TimeSpan",
    UnixTime: "UnixTime"
  };
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/commonjs/state.js
var require_state2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.state = undefined;
  exports.state = {
    operationRequestMap: new WeakMap
  };
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/state.js
var import_state3, state2;
var init_state2 = __esm(() => {
  import_state3 = __toESM(require_state2(), 1);
  state2 = import_state3.state;
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/operationHelpers.js
function getOperationArgumentValueFromParameter(operationArguments, parameter, fallbackObject) {
  let parameterPath = parameter.parameterPath;
  const parameterMapper = parameter.mapper;
  let value;
  if (typeof parameterPath === "string") {
    parameterPath = [parameterPath];
  }
  if (Array.isArray(parameterPath)) {
    if (parameterPath.length > 0) {
      if (parameterMapper.isConstant) {
        value = parameterMapper.defaultValue;
      } else {
        let propertySearchResult = getPropertyFromParameterPath(operationArguments, parameterPath);
        if (!propertySearchResult.propertyFound && fallbackObject) {
          propertySearchResult = getPropertyFromParameterPath(fallbackObject, parameterPath);
        }
        let useDefaultValue = false;
        if (!propertySearchResult.propertyFound) {
          useDefaultValue = parameterMapper.required || parameterPath[0] === "options" && parameterPath.length === 2;
        }
        value = useDefaultValue ? parameterMapper.defaultValue : propertySearchResult.propertyValue;
      }
    }
  } else {
    if (parameterMapper.required) {
      value = {};
    }
    for (const propertyName in parameterPath) {
      const propertyMapper = parameterMapper.type.modelProperties[propertyName];
      const propertyPath = parameterPath[propertyName];
      const propertyValue = getOperationArgumentValueFromParameter(operationArguments, {
        parameterPath: propertyPath,
        mapper: propertyMapper
      }, fallbackObject);
      if (propertyValue !== undefined) {
        if (!value) {
          value = {};
        }
        value[propertyName] = propertyValue;
      }
    }
  }
  return value;
}
function getPropertyFromParameterPath(parent, parameterPath) {
  const result = { propertyFound: false };
  let i = 0;
  for (;i < parameterPath.length; ++i) {
    const parameterPathPart = parameterPath[i];
    if (parent && parameterPathPart in parent) {
      parent = parent[parameterPathPart];
    } else {
      break;
    }
  }
  if (i === parameterPath.length) {
    result.propertyValue = parent;
    result.propertyFound = true;
  }
  return result;
}
function hasOriginalRequest(request) {
  return originalRequestSymbol in request;
}
function getOperationRequestInfo(request) {
  if (hasOriginalRequest(request)) {
    return getOperationRequestInfo(request[originalRequestSymbol]);
  }
  let info = state2.operationRequestMap.get(request);
  if (!info) {
    info = {};
    state2.operationRequestMap.set(request, info);
  }
  return info;
}
var originalRequestSymbol;
var init_operationHelpers = __esm(() => {
  init_state2();
  originalRequestSymbol = Symbol.for("@azure/core-client original request");
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/deserializationPolicy.js
function deserializationPolicy(options = {}) {
  const jsonContentTypes = options.expectedContentTypes?.json ?? defaultJsonContentTypes;
  const xmlContentTypes = options.expectedContentTypes?.xml ?? defaultXmlContentTypes;
  const parseXML = options.parseXML;
  const serializerOptions = options.serializerOptions;
  const updatedOptions = {
    xml: {
      rootName: serializerOptions?.xml.rootName ?? "",
      includeRoot: serializerOptions?.xml.includeRoot ?? false,
      xmlCharKey: serializerOptions?.xml.xmlCharKey ?? XML_CHARKEY
    }
  };
  return {
    name: deserializationPolicyName,
    async sendRequest(request, next) {
      const response = await next(request);
      return deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, updatedOptions, parseXML);
    }
  };
}
function getOperationResponseMap(parsedResponse) {
  let result;
  const request = parsedResponse.request;
  const operationInfo = getOperationRequestInfo(request);
  const operationSpec = operationInfo?.operationSpec;
  if (operationSpec) {
    if (!operationInfo?.operationResponseGetter) {
      result = operationSpec.responses[parsedResponse.status];
    } else {
      result = operationInfo?.operationResponseGetter(operationSpec, parsedResponse);
    }
  }
  return result;
}
function shouldDeserializeResponse(parsedResponse) {
  const request = parsedResponse.request;
  const operationInfo = getOperationRequestInfo(request);
  const shouldDeserialize = operationInfo?.shouldDeserialize;
  let result;
  if (shouldDeserialize === undefined) {
    result = true;
  } else if (typeof shouldDeserialize === "boolean") {
    result = shouldDeserialize;
  } else {
    result = shouldDeserialize(parsedResponse);
  }
  return result;
}
async function deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, options, parseXML) {
  const parsedResponse = await parse(jsonContentTypes, xmlContentTypes, response, options, parseXML);
  if (!shouldDeserializeResponse(parsedResponse)) {
    return parsedResponse;
  }
  const operationInfo = getOperationRequestInfo(parsedResponse.request);
  const operationSpec = operationInfo?.operationSpec;
  if (!operationSpec || !operationSpec.responses) {
    return parsedResponse;
  }
  const responseSpec = getOperationResponseMap(parsedResponse);
  const { error, shouldReturnResponse } = handleErrorResponse(parsedResponse, operationSpec, responseSpec, options);
  if (error) {
    throw error;
  } else if (shouldReturnResponse) {
    return parsedResponse;
  }
  if (responseSpec) {
    if (responseSpec.bodyMapper) {
      let valueToDeserialize = parsedResponse.parsedBody;
      if (operationSpec.isXML && responseSpec.bodyMapper.type.name === MapperTypeNames.Sequence) {
        valueToDeserialize = typeof valueToDeserialize === "object" ? valueToDeserialize[responseSpec.bodyMapper.xmlElementName] : [];
      }
      try {
        parsedResponse.parsedBody = operationSpec.serializer.deserialize(responseSpec.bodyMapper, valueToDeserialize, "operationRes.parsedBody", options);
      } catch (deserializeError) {
        const restError = new RestError2(`Error ${deserializeError} occurred in deserializing the responseBody - ${parsedResponse.bodyAsText}`, {
          statusCode: parsedResponse.status,
          request: parsedResponse.request,
          response: parsedResponse
        });
        throw restError;
      }
    } else if (operationSpec.httpMethod === "HEAD") {
      parsedResponse.parsedBody = response.status >= 200 && response.status < 300;
    }
    if (responseSpec.headersMapper) {
      parsedResponse.parsedHeaders = operationSpec.serializer.deserialize(responseSpec.headersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders", { xml: {}, ignoreUnknownProperties: true });
    }
  }
  return parsedResponse;
}
function isOperationSpecEmpty(operationSpec) {
  const expectedStatusCodes = Object.keys(operationSpec.responses);
  return expectedStatusCodes.length === 0 || expectedStatusCodes.length === 1 && expectedStatusCodes[0] === "default";
}
function handleErrorResponse(parsedResponse, operationSpec, responseSpec, options) {
  const isSuccessByStatus = 200 <= parsedResponse.status && parsedResponse.status < 300;
  const isExpectedStatusCode = isOperationSpecEmpty(operationSpec) ? isSuccessByStatus : !!responseSpec;
  if (isExpectedStatusCode) {
    if (responseSpec) {
      if (!responseSpec.isError) {
        return { error: null, shouldReturnResponse: false };
      }
    } else {
      return { error: null, shouldReturnResponse: false };
    }
  }
  const errorResponseSpec = responseSpec ?? operationSpec.responses.default;
  const initialErrorMessage = parsedResponse.request.streamResponseStatusCodes?.has(parsedResponse.status) ? `Unexpected status code: ${parsedResponse.status}` : parsedResponse.bodyAsText;
  const error = new RestError2(initialErrorMessage, {
    statusCode: parsedResponse.status,
    request: parsedResponse.request,
    response: parsedResponse
  });
  if (!errorResponseSpec && !(parsedResponse.parsedBody?.error?.code && parsedResponse.parsedBody?.error?.message)) {
    throw error;
  }
  const defaultBodyMapper = errorResponseSpec?.bodyMapper;
  const defaultHeadersMapper = errorResponseSpec?.headersMapper;
  try {
    if (parsedResponse.parsedBody) {
      const parsedBody = parsedResponse.parsedBody;
      let deserializedError;
      if (defaultBodyMapper) {
        let valueToDeserialize = parsedBody;
        if (operationSpec.isXML && defaultBodyMapper.type.name === MapperTypeNames.Sequence) {
          valueToDeserialize = [];
          const elementName = defaultBodyMapper.xmlElementName;
          if (typeof parsedBody === "object" && elementName) {
            valueToDeserialize = parsedBody[elementName];
          }
        }
        deserializedError = operationSpec.serializer.deserialize(defaultBodyMapper, valueToDeserialize, "error.response.parsedBody", options);
      }
      const internalError = parsedBody.error || deserializedError || parsedBody;
      error.code = internalError.code;
      if (internalError.message) {
        error.message = internalError.message;
      }
      if (defaultBodyMapper) {
        error.response.parsedBody = deserializedError;
      }
    }
    if (parsedResponse.headers && defaultHeadersMapper) {
      error.response.parsedHeaders = operationSpec.serializer.deserialize(defaultHeadersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders");
    }
  } catch (defaultError) {
    error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody - "${parsedResponse.bodyAsText}" for the default response.`;
  }
  return { error, shouldReturnResponse: false };
}
async function parse(jsonContentTypes, xmlContentTypes, operationResponse, opts, parseXML) {
  if (!operationResponse.request.streamResponseStatusCodes?.has(operationResponse.status) && operationResponse.bodyAsText) {
    const text = operationResponse.bodyAsText;
    const contentType = operationResponse.headers.get("Content-Type") || "";
    const contentComponents = !contentType ? [] : contentType.split(";").map((component) => component.toLowerCase());
    try {
      if (contentComponents.length === 0 || contentComponents.some((component) => jsonContentTypes.indexOf(component) !== -1)) {
        operationResponse.parsedBody = JSON.parse(text);
        return operationResponse;
      } else if (contentComponents.some((component) => xmlContentTypes.indexOf(component) !== -1)) {
        if (!parseXML) {
          throw new Error("Parsing XML not supported.");
        }
        const body = await parseXML(text, opts.xml);
        operationResponse.parsedBody = body;
        return operationResponse;
      }
    } catch (err) {
      const msg = `Error "${err}" occurred while parsing the response body - ${operationResponse.bodyAsText}.`;
      const errCode = err.code || RestError2.PARSE_ERROR;
      const e = new RestError2(msg, {
        code: errCode,
        statusCode: operationResponse.status,
        request: operationResponse.request,
        response: operationResponse
      });
      throw e;
    }
  }
  return operationResponse;
}
var defaultJsonContentTypes, defaultXmlContentTypes, deserializationPolicyName = "deserializationPolicy";
var init_deserializationPolicy = __esm(() => {
  init_interfaces();
  init_esm6();
  init_serializer();
  init_operationHelpers();
  defaultJsonContentTypes = ["application/json", "text/json"];
  defaultXmlContentTypes = ["application/xml", "application/atom+xml"];
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/interfaceHelpers.js
function getStreamingResponseStatusCodes(operationSpec) {
  const result = new Set;
  for (const statusCode in operationSpec.responses) {
    const operationResponse = operationSpec.responses[statusCode];
    if (operationResponse.bodyMapper && operationResponse.bodyMapper.type.name === MapperTypeNames.Stream) {
      result.add(Number(statusCode));
    }
  }
  return result;
}
function getPathStringFromParameter(parameter) {
  const { parameterPath, mapper } = parameter;
  let result;
  if (typeof parameterPath === "string") {
    result = parameterPath;
  } else if (Array.isArray(parameterPath)) {
    result = parameterPath.join(".");
  } else {
    result = mapper.serializedName;
  }
  return result;
}
var init_interfaceHelpers = __esm(() => {
  init_serializer();
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/serializationPolicy.js
function serializationPolicy(options = {}) {
  const stringifyXML = options.stringifyXML;
  return {
    name: serializationPolicyName,
    async sendRequest(request, next) {
      const operationInfo = getOperationRequestInfo(request);
      const operationSpec = operationInfo?.operationSpec;
      const operationArguments = operationInfo?.operationArguments;
      if (operationSpec && operationArguments) {
        serializeHeaders(request, operationArguments, operationSpec);
        serializeRequestBody(request, operationArguments, operationSpec, stringifyXML);
      }
      return next(request);
    }
  };
}
function serializeHeaders(request, operationArguments, operationSpec) {
  if (operationSpec.headerParameters) {
    for (const headerParameter of operationSpec.headerParameters) {
      let headerValue = getOperationArgumentValueFromParameter(operationArguments, headerParameter);
      if (headerValue !== null && headerValue !== undefined || headerParameter.mapper.required) {
        headerValue = operationSpec.serializer.serialize(headerParameter.mapper, headerValue, getPathStringFromParameter(headerParameter));
        const headerCollectionPrefix = headerParameter.mapper.headerCollectionPrefix;
        if (headerCollectionPrefix) {
          for (const key of Object.keys(headerValue)) {
            request.headers.set(headerCollectionPrefix + key, headerValue[key]);
          }
        } else {
          request.headers.set(headerParameter.mapper.serializedName || getPathStringFromParameter(headerParameter), headerValue);
        }
      }
    }
  }
  const customHeaders = operationArguments.options?.requestOptions?.customHeaders;
  if (customHeaders) {
    for (const customHeaderName of Object.keys(customHeaders)) {
      request.headers.set(customHeaderName, customHeaders[customHeaderName]);
    }
  }
}
function serializeRequestBody(request, operationArguments, operationSpec, stringifyXML = function() {
  throw new Error("XML serialization unsupported!");
}) {
  const serializerOptions = operationArguments.options?.serializerOptions;
  const updatedOptions = {
    xml: {
      rootName: serializerOptions?.xml.rootName ?? "",
      includeRoot: serializerOptions?.xml.includeRoot ?? false,
      xmlCharKey: serializerOptions?.xml.xmlCharKey ?? XML_CHARKEY
    }
  };
  const xmlCharKey = updatedOptions.xml.xmlCharKey;
  if (operationSpec.requestBody && operationSpec.requestBody.mapper) {
    request.body = getOperationArgumentValueFromParameter(operationArguments, operationSpec.requestBody);
    const bodyMapper = operationSpec.requestBody.mapper;
    const { required, serializedName, xmlName, xmlElementName, xmlNamespace, xmlNamespacePrefix, nullable } = bodyMapper;
    const typeName = bodyMapper.type.name;
    try {
      if (request.body !== undefined && request.body !== null || nullable && request.body === null || required) {
        const requestBodyParameterPathString = getPathStringFromParameter(operationSpec.requestBody);
        request.body = operationSpec.serializer.serialize(bodyMapper, request.body, requestBodyParameterPathString, updatedOptions);
        const isStream = typeName === MapperTypeNames.Stream;
        if (operationSpec.isXML) {
          const xmlnsKey = xmlNamespacePrefix ? `xmlns:${xmlNamespacePrefix}` : "xmlns";
          const value = getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, request.body, updatedOptions);
          if (typeName === MapperTypeNames.Sequence) {
            request.body = stringifyXML(prepareXMLRootList(value, xmlElementName || xmlName || serializedName, xmlnsKey, xmlNamespace), { rootName: xmlName || serializedName, xmlCharKey });
          } else if (!isStream) {
            request.body = stringifyXML(value, {
              rootName: xmlName || serializedName,
              xmlCharKey
            });
          }
        } else if (typeName === MapperTypeNames.String && (operationSpec.contentType?.match("text/plain") || operationSpec.mediaType === "text")) {
          return;
        } else if (!isStream) {
          request.body = JSON.stringify(request.body);
        }
      }
    } catch (error) {
      throw new Error(`Error "${error.message}" occurred in serializing the payload - ${JSON.stringify(serializedName, undefined, "  ")}.`);
    }
  } else if (operationSpec.formDataParameters && operationSpec.formDataParameters.length > 0) {
    request.formData = {};
    for (const formDataParameter of operationSpec.formDataParameters) {
      const formDataParameterValue = getOperationArgumentValueFromParameter(operationArguments, formDataParameter);
      if (formDataParameterValue !== undefined && formDataParameterValue !== null) {
        const formDataParameterPropertyName = formDataParameter.mapper.serializedName || getPathStringFromParameter(formDataParameter);
        request.formData[formDataParameterPropertyName] = operationSpec.serializer.serialize(formDataParameter.mapper, formDataParameterValue, getPathStringFromParameter(formDataParameter), updatedOptions);
      }
    }
  }
}
function getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, serializedValue, options) {
  if (xmlNamespace && !["Composite", "Sequence", "Dictionary"].includes(typeName)) {
    const result = {};
    result[options.xml.xmlCharKey] = serializedValue;
    result[XML_ATTRKEY] = { [xmlnsKey]: xmlNamespace };
    return result;
  }
  return serializedValue;
}
function prepareXMLRootList(obj, elementName, xmlNamespaceKey, xmlNamespace) {
  if (!Array.isArray(obj)) {
    obj = [obj];
  }
  if (!xmlNamespaceKey || !xmlNamespace) {
    return { [elementName]: obj };
  }
  const result = { [elementName]: obj };
  result[XML_ATTRKEY] = { [xmlNamespaceKey]: xmlNamespace };
  return result;
}
var serializationPolicyName = "serializationPolicy";
var init_serializationPolicy = __esm(() => {
  init_interfaces();
  init_operationHelpers();
  init_serializer();
  init_interfaceHelpers();
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/pipeline.js
function createClientPipeline(options = {}) {
  const pipeline = createPipelineFromOptions(options ?? {});
  if (options.credentialOptions) {
    pipeline.addPolicy(bearerTokenAuthenticationPolicy({
      credential: options.credentialOptions.credential,
      scopes: options.credentialOptions.credentialScopes
    }));
  }
  pipeline.addPolicy(serializationPolicy(options.serializationOptions), { phase: "Serialize" });
  pipeline.addPolicy(deserializationPolicy(options.deserializationOptions), {
    phase: "Deserialize"
  });
  return pipeline;
}
var init_pipeline3 = __esm(() => {
  init_deserializationPolicy();
  init_esm6();
  init_serializationPolicy();
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/httpClientCache.js
function getCachedDefaultHttpClient() {
  if (!cachedHttpClient) {
    cachedHttpClient = createDefaultHttpClient2();
  }
  return cachedHttpClient;
}
var cachedHttpClient;
var init_httpClientCache = __esm(() => {
  init_esm6();
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/urlHelpers.js
function getRequestUrl(baseUri, operationSpec, operationArguments, fallbackObject) {
  const urlReplacements = calculateUrlReplacements(operationSpec, operationArguments, fallbackObject);
  let isAbsolutePath = false;
  let requestUrl = replaceAll(baseUri, urlReplacements);
  if (operationSpec.path) {
    let path2 = replaceAll(operationSpec.path, urlReplacements);
    if (operationSpec.path === "/{nextLink}" && path2.startsWith("/")) {
      path2 = path2.substring(1);
    }
    if (isAbsoluteUrl(path2)) {
      requestUrl = path2;
      isAbsolutePath = true;
    } else {
      requestUrl = appendPath(requestUrl, path2);
    }
  }
  const { queryParams, sequenceParams } = calculateQueryParameters(operationSpec, operationArguments, fallbackObject);
  requestUrl = appendQueryParams(requestUrl, queryParams, sequenceParams, isAbsolutePath);
  return requestUrl;
}
function replaceAll(input, replacements) {
  let result = input;
  for (const [searchValue, replaceValue] of replacements) {
    result = result.split(searchValue).join(replaceValue);
  }
  return result;
}
function calculateUrlReplacements(operationSpec, operationArguments, fallbackObject) {
  const result = new Map;
  if (operationSpec.urlParameters?.length) {
    for (const urlParameter of operationSpec.urlParameters) {
      let urlParameterValue = getOperationArgumentValueFromParameter(operationArguments, urlParameter, fallbackObject);
      const parameterPathString = getPathStringFromParameter(urlParameter);
      urlParameterValue = operationSpec.serializer.serialize(urlParameter.mapper, urlParameterValue, parameterPathString);
      if (!urlParameter.skipEncoding) {
        urlParameterValue = encodeURIComponent(urlParameterValue);
      }
      result.set(`{${urlParameter.mapper.serializedName || parameterPathString}}`, urlParameterValue);
    }
  }
  return result;
}
function isAbsoluteUrl(url) {
  return url.includes("://");
}
function appendPath(url, pathToAppend) {
  if (!pathToAppend) {
    return url;
  }
  const parsedUrl = new URL(url);
  let newPath = parsedUrl.pathname;
  if (!newPath.endsWith("/")) {
    newPath = `${newPath}/`;
  }
  if (pathToAppend.startsWith("/")) {
    pathToAppend = pathToAppend.substring(1);
  }
  const searchStart = pathToAppend.indexOf("?");
  if (searchStart !== -1) {
    const path2 = pathToAppend.substring(0, searchStart);
    const search = pathToAppend.substring(searchStart + 1);
    newPath = newPath + path2;
    if (search) {
      parsedUrl.search = parsedUrl.search ? `${parsedUrl.search}&${search}` : search;
    }
  } else {
    newPath = newPath + pathToAppend;
  }
  parsedUrl.pathname = newPath;
  return parsedUrl.toString();
}
function calculateQueryParameters(operationSpec, operationArguments, fallbackObject) {
  const result = new Map;
  const sequenceParams = new Set;
  if (operationSpec.queryParameters?.length) {
    for (const queryParameter of operationSpec.queryParameters) {
      if (queryParameter.mapper.type.name === "Sequence" && queryParameter.mapper.serializedName) {
        sequenceParams.add(queryParameter.mapper.serializedName);
      }
      let queryParameterValue = getOperationArgumentValueFromParameter(operationArguments, queryParameter, fallbackObject);
      if (queryParameterValue !== undefined && queryParameterValue !== null || queryParameter.mapper.required) {
        queryParameterValue = operationSpec.serializer.serialize(queryParameter.mapper, queryParameterValue, getPathStringFromParameter(queryParameter));
        const delimiter = queryParameter.collectionFormat ? CollectionFormatToDelimiterMap[queryParameter.collectionFormat] : "";
        if (Array.isArray(queryParameterValue)) {
          queryParameterValue = queryParameterValue.map((item) => {
            if (item === null || item === undefined) {
              return "";
            }
            return item;
          });
        }
        if (queryParameter.collectionFormat === "Multi" && queryParameterValue.length === 0) {
          continue;
        } else if (Array.isArray(queryParameterValue) && (queryParameter.collectionFormat === "SSV" || queryParameter.collectionFormat === "TSV")) {
          queryParameterValue = queryParameterValue.join(delimiter);
        }
        if (!queryParameter.skipEncoding) {
          if (Array.isArray(queryParameterValue)) {
            queryParameterValue = queryParameterValue.map((item) => {
              return encodeURIComponent(item);
            });
          } else {
            queryParameterValue = encodeURIComponent(queryParameterValue);
          }
        }
        if (Array.isArray(queryParameterValue) && (queryParameter.collectionFormat === "CSV" || queryParameter.collectionFormat === "Pipes")) {
          queryParameterValue = queryParameterValue.join(delimiter);
        }
        result.set(queryParameter.mapper.serializedName || getPathStringFromParameter(queryParameter), queryParameterValue);
      }
    }
  }
  return {
    queryParams: result,
    sequenceParams
  };
}
function simpleParseQueryParams(queryString) {
  const result = new Map;
  if (!queryString || queryString[0] !== "?") {
    return result;
  }
  queryString = queryString.slice(1);
  const pairs = queryString.split("&");
  for (const pair of pairs) {
    const [name3, value] = pair.split("=", 2);
    const existingValue = result.get(name3);
    if (existingValue) {
      if (Array.isArray(existingValue)) {
        existingValue.push(value);
      } else {
        result.set(name3, [existingValue, value]);
      }
    } else {
      result.set(name3, value);
    }
  }
  return result;
}
function appendQueryParams(url, queryParams, sequenceParams, noOverwrite = false) {
  if (queryParams.size === 0) {
    return url;
  }
  const parsedUrl = new URL(url);
  const combinedParams = simpleParseQueryParams(parsedUrl.search);
  for (const [name3, value] of queryParams) {
    const existingValue = combinedParams.get(name3);
    if (Array.isArray(existingValue)) {
      if (Array.isArray(value)) {
        existingValue.push(...value);
        const valueSet = new Set(existingValue);
        combinedParams.set(name3, Array.from(valueSet));
      } else {
        existingValue.push(value);
      }
    } else if (existingValue) {
      if (Array.isArray(value)) {
        value.unshift(existingValue);
      } else if (sequenceParams.has(name3)) {
        combinedParams.set(name3, [existingValue, value]);
      }
      if (!noOverwrite) {
        combinedParams.set(name3, value);
      }
    } else {
      combinedParams.set(name3, value);
    }
  }
  const searchPieces = [];
  for (const [name3, value] of combinedParams) {
    if (typeof value === "string") {
      searchPieces.push(`${name3}=${value}`);
    } else if (Array.isArray(value)) {
      for (const subValue of value) {
        searchPieces.push(`${name3}=${subValue}`);
      }
    } else {
      searchPieces.push(`${name3}=${value}`);
    }
  }
  parsedUrl.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
  return parsedUrl.toString();
}
var CollectionFormatToDelimiterMap;
var init_urlHelpers = __esm(() => {
  init_operationHelpers();
  init_interfaceHelpers();
  CollectionFormatToDelimiterMap = {
    CSV: ",",
    SSV: " ",
    Multi: "Multi",
    TSV: "\t",
    Pipes: "|"
  };
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/log.js
var logger6;
var init_log4 = __esm(() => {
  init_esm();
  logger6 = createClientLogger2("core-client");
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/serviceClient.js
class ServiceClient {
  _endpoint;
  _requestContentType;
  _allowInsecureConnection;
  _httpClient;
  pipeline;
  constructor(options = {}) {
    this._requestContentType = options.requestContentType;
    this._endpoint = options.endpoint ?? options.baseUri;
    if (options.baseUri) {
      logger6.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
    }
    this._allowInsecureConnection = options.allowInsecureConnection;
    this._httpClient = options.httpClient || getCachedDefaultHttpClient();
    this.pipeline = options.pipeline || createDefaultPipeline(options);
    if (options.additionalPolicies?.length) {
      for (const { policy, position } of options.additionalPolicies) {
        const afterPhase = position === "perRetry" ? "Sign" : undefined;
        this.pipeline.addPolicy(policy, {
          afterPhase
        });
      }
    }
  }
  async sendRequest(request) {
    return this.pipeline.sendRequest(this._httpClient, request);
  }
  async sendOperationRequest(operationArguments, operationSpec) {
    const endpoint = operationSpec.baseUrl || this._endpoint;
    if (!endpoint) {
      throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
    }
    const url = getRequestUrl(endpoint, operationSpec, operationArguments, this);
    const request = createPipelineRequest2({
      url
    });
    request.method = operationSpec.httpMethod;
    const operationInfo = getOperationRequestInfo(request);
    operationInfo.operationSpec = operationSpec;
    operationInfo.operationArguments = operationArguments;
    const contentType = operationSpec.contentType || this._requestContentType;
    if (contentType && operationSpec.requestBody) {
      request.headers.set("Content-Type", contentType);
    }
    const options = operationArguments.options;
    if (options) {
      const requestOptions = options.requestOptions;
      if (requestOptions) {
        if (requestOptions.timeout) {
          request.timeout = requestOptions.timeout;
        }
        if (requestOptions.onUploadProgress) {
          request.onUploadProgress = requestOptions.onUploadProgress;
        }
        if (requestOptions.onDownloadProgress) {
          request.onDownloadProgress = requestOptions.onDownloadProgress;
        }
        if (requestOptions.shouldDeserialize !== undefined) {
          operationInfo.shouldDeserialize = requestOptions.shouldDeserialize;
        }
        if (requestOptions.allowInsecureConnection) {
          request.allowInsecureConnection = true;
        }
      }
      if (options.abortSignal) {
        request.abortSignal = options.abortSignal;
      }
      if (options.tracingOptions) {
        request.tracingOptions = options.tracingOptions;
      }
    }
    if (this._allowInsecureConnection) {
      request.allowInsecureConnection = true;
    }
    if (request.streamResponseStatusCodes === undefined) {
      request.streamResponseStatusCodes = getStreamingResponseStatusCodes(operationSpec);
    }
    try {
      const rawResponse = await this.sendRequest(request);
      const flatResponse = flattenResponse(rawResponse, operationSpec.responses[rawResponse.status]);
      if (options?.onResponse) {
        options.onResponse(rawResponse, flatResponse);
      }
      return flatResponse;
    } catch (error) {
      if (typeof error === "object" && error?.response) {
        const rawResponse = error.response;
        const flatResponse = flattenResponse(rawResponse, operationSpec.responses[error.statusCode] || operationSpec.responses["default"]);
        error.details = flatResponse;
        if (options?.onResponse) {
          options.onResponse(rawResponse, flatResponse, error);
        }
      }
      throw error;
    }
  }
}
function createDefaultPipeline(options) {
  const credentialScopes = getCredentialScopes(options);
  const credentialOptions = options.credential && credentialScopes ? { credentialScopes, credential: options.credential } : undefined;
  return createClientPipeline({
    ...options,
    credentialOptions
  });
}
function getCredentialScopes(options) {
  if (options.credentialScopes) {
    return options.credentialScopes;
  }
  if (options.endpoint) {
    return `${options.endpoint}/.default`;
  }
  if (options.baseUri) {
    return `${options.baseUri}/.default`;
  }
  if (options.credential && !options.credentialScopes) {
    throw new Error(`When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy`);
  }
  return;
}
var init_serviceClient = __esm(() => {
  init_esm6();
  init_pipeline3();
  init_utils2();
  init_httpClientCache();
  init_operationHelpers();
  init_urlHelpers();
  init_interfaceHelpers();
  init_log4();
});

// node_modules/.bun/@azure+core-client@1.10.1/node_modules/@azure/core-client/dist/esm/index.js
var init_esm7 = __esm(() => {
  init_serviceClient();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/identityTokenEndpoint.js
function getIdentityTokenEndpointSuffix(tenantId) {
  if (tenantId === "adfs") {
    return "oauth2/token";
  } else {
    return "oauth2/v2.0/token";
  }
}
var init_identityTokenEndpoint = () => {};

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/utils.js
function mapScopesToResource(scopes) {
  let scope = "";
  if (Array.isArray(scopes)) {
    if (scopes.length !== 1) {
      return;
    }
    scope = scopes[0];
  } else if (typeof scopes === "string") {
    scope = scopes;
  }
  if (!scope.endsWith(DefaultScopeSuffix)) {
    return scope;
  }
  return scope.substr(0, scope.lastIndexOf(DefaultScopeSuffix));
}
function parseExpirationTimestamp(body) {
  if (typeof body.expires_on === "number") {
    return body.expires_on * 1000;
  }
  if (typeof body.expires_on === "string") {
    const asNumber = +body.expires_on;
    if (!isNaN(asNumber)) {
      return asNumber * 1000;
    }
    const asDate = Date.parse(body.expires_on);
    if (!isNaN(asDate)) {
      return asDate;
    }
  }
  if (typeof body.expires_in === "number") {
    return Date.now() + body.expires_in * 1000;
  }
  throw new Error(`Failed to parse token expiration from body. expires_in="${body.expires_in}", expires_on="${body.expires_on}"`);
}
function parseRefreshTimestamp(body) {
  if (body.refresh_on) {
    if (typeof body.refresh_on === "number") {
      return body.refresh_on * 1000;
    }
    if (typeof body.refresh_on === "string") {
      const asNumber = +body.refresh_on;
      if (!isNaN(asNumber)) {
        return asNumber * 1000;
      }
      const asDate = Date.parse(body.refresh_on);
      if (!isNaN(asDate)) {
        return asDate;
      }
    }
    throw new Error(`Failed to parse refresh_on from body. refresh_on="${body.refresh_on}"`);
  } else {
    return;
  }
}
var DefaultScopeSuffix = "/.default", serviceFabricErrorMessage = "Specifying a `clientId` or `resourceId` is not supported by the Service Fabric managed identity environment. The managed identity configuration is determined by the Service Fabric cluster resource configuration. See https://aka.ms/servicefabricmi for more information";
var init_utils3 = () => {};

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/client/identityClient.js
function getIdentityClientAuthorityHost(options) {
  let authorityHost = options?.authorityHost;
  if (isNode) {
    authorityHost = authorityHost ?? process.env.AZURE_AUTHORITY_HOST;
  }
  return authorityHost ?? DefaultAuthorityHost;
}
var noCorrelationId = "noCorrelationId", IdentityClient;
var init_identityClient = __esm(() => {
  init_esm7();
  init_esm4();
  init_esm6();
  init_errors();
  init_identityTokenEndpoint();
  init_constants();
  init_tracing();
  init_logging();
  init_utils3();
  IdentityClient = class IdentityClient extends ServiceClient {
    authorityHost;
    allowLoggingAccountIdentifiers;
    abortControllers;
    allowInsecureConnection = false;
    tokenCredentialOptions;
    constructor(options) {
      const packageDetails = `azsdk-js-identity/${SDK_VERSION}`;
      const userAgentPrefix = options?.userAgentOptions?.userAgentPrefix ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}` : `${packageDetails}`;
      const baseUri = getIdentityClientAuthorityHost(options);
      if (!baseUri.startsWith("https:")) {
        throw new Error("The authorityHost address must use the 'https' protocol.");
      }
      super({
        requestContentType: "application/json; charset=utf-8",
        retryOptions: {
          maxRetries: 3
        },
        ...options,
        userAgentOptions: {
          userAgentPrefix
        },
        baseUri
      });
      this.authorityHost = baseUri;
      this.abortControllers = new Map;
      this.allowLoggingAccountIdentifiers = options?.loggingOptions?.allowLoggingAccountIdentifiers;
      this.tokenCredentialOptions = { ...options };
      if (options?.allowInsecureConnection) {
        this.allowInsecureConnection = options.allowInsecureConnection;
      }
    }
    async sendTokenRequest(request) {
      logger.info(`IdentityClient: sending token request to [${request.url}]`);
      const response = await this.sendRequest(request);
      if (response.bodyAsText && (response.status === 200 || response.status === 201)) {
        const parsedBody = JSON.parse(response.bodyAsText);
        if (!parsedBody.access_token) {
          return null;
        }
        this.logIdentifiers(response);
        const token = {
          accessToken: {
            token: parsedBody.access_token,
            expiresOnTimestamp: parseExpirationTimestamp(parsedBody),
            refreshAfterTimestamp: parseRefreshTimestamp(parsedBody),
            tokenType: "Bearer"
          },
          refreshToken: parsedBody.refresh_token
        };
        logger.info(`IdentityClient: [${request.url}] token acquired, expires on ${token.accessToken.expiresOnTimestamp}`);
        return token;
      } else {
        const error = new AuthenticationError(response.status, response.bodyAsText);
        logger.warning(`IdentityClient: authentication error. HTTP status: ${response.status}, ${error.errorResponse.errorDescription}`);
        throw error;
      }
    }
    async refreshAccessToken(tenantId, clientId, scopes, refreshToken, clientSecret, options = {}) {
      if (refreshToken === undefined) {
        return null;
      }
      logger.info(`IdentityClient: refreshing access token with client ID: ${clientId}, scopes: ${scopes} started`);
      const refreshParams = {
        grant_type: "refresh_token",
        client_id: clientId,
        refresh_token: refreshToken,
        scope: scopes
      };
      if (clientSecret !== undefined) {
        refreshParams.client_secret = clientSecret;
      }
      const query = new URLSearchParams(refreshParams);
      return tracingClient.withSpan("IdentityClient.refreshAccessToken", options, async (updatedOptions) => {
        try {
          const urlSuffix = getIdentityTokenEndpointSuffix(tenantId);
          const request = createPipelineRequest2({
            url: `${this.authorityHost}/${tenantId}/${urlSuffix}`,
            method: "POST",
            body: query.toString(),
            abortSignal: options.abortSignal,
            headers: createHttpHeaders2({
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            }),
            tracingOptions: updatedOptions.tracingOptions
          });
          const response = await this.sendTokenRequest(request);
          logger.info(`IdentityClient: refreshed token for client ID: ${clientId}`);
          return response;
        } catch (err) {
          if (err.name === AuthenticationErrorName && err.errorResponse.error === "interaction_required") {
            logger.info(`IdentityClient: interaction required for client ID: ${clientId}`);
            return null;
          } else {
            logger.warning(`IdentityClient: failed refreshing token for client ID: ${clientId}: ${err}`);
            throw err;
          }
        }
      });
    }
    generateAbortSignal(correlationId) {
      const controller = new AbortController;
      const controllers = this.abortControllers.get(correlationId) || [];
      controllers.push(controller);
      this.abortControllers.set(correlationId, controllers);
      const existingOnAbort = controller.signal.onabort;
      controller.signal.onabort = (...params) => {
        this.abortControllers.set(correlationId, undefined);
        if (existingOnAbort) {
          existingOnAbort.apply(controller.signal, params);
        }
      };
      return controller.signal;
    }
    abortRequests(correlationId) {
      const key = correlationId || noCorrelationId;
      const controllers = [
        ...this.abortControllers.get(key) || [],
        ...this.abortControllers.get(noCorrelationId) || []
      ];
      if (!controllers.length) {
        return;
      }
      for (const controller of controllers) {
        controller.abort();
      }
      this.abortControllers.set(key, undefined);
    }
    getCorrelationId(options) {
      const parameter = options?.body?.split("&").map((part) => part.split("=")).find(([key]) => key === "client-request-id");
      return parameter && parameter.length ? parameter[1] || noCorrelationId : noCorrelationId;
    }
    async sendGetRequestAsync(url, options) {
      const request = createPipelineRequest2({
        url,
        method: "GET",
        body: options?.body,
        allowInsecureConnection: this.allowInsecureConnection,
        headers: createHttpHeaders2(options?.headers),
        abortSignal: this.generateAbortSignal(noCorrelationId)
      });
      const response = await this.sendRequest(request);
      this.logIdentifiers(response);
      return {
        body: response.bodyAsText ? JSON.parse(response.bodyAsText) : undefined,
        headers: response.headers.toJSON(),
        status: response.status
      };
    }
    async sendPostRequestAsync(url, options) {
      const request = createPipelineRequest2({
        url,
        method: "POST",
        body: options?.body,
        headers: createHttpHeaders2(options?.headers),
        allowInsecureConnection: this.allowInsecureConnection,
        abortSignal: this.generateAbortSignal(this.getCorrelationId(options))
      });
      const response = await this.sendRequest(request);
      this.logIdentifiers(response);
      return {
        body: response.bodyAsText ? JSON.parse(response.bodyAsText) : undefined,
        headers: response.headers.toJSON(),
        status: response.status
      };
    }
    getTokenCredentialOptions() {
      return this.tokenCredentialOptions;
    }
    logIdentifiers(response) {
      if (!this.allowLoggingAccountIdentifiers || !response.bodyAsText) {
        return;
      }
      const unavailableUpn = "No User Principal Name available";
      try {
        const parsed = response.parsedBody || JSON.parse(response.bodyAsText);
        const accessToken = parsed.access_token;
        if (!accessToken) {
          return;
        }
        const base64Metadata = accessToken.split(".")[1];
        const { appid, upn, tid, oid } = JSON.parse(Buffer.from(base64Metadata, "base64").toString("utf8"));
        logger.info(`[Authenticated account] Client ID: ${appid}. Tenant ID: ${tid}. User Principal Name: ${upn || unavailableUpn}. Object ID (user): ${oid}`);
      } catch (e) {
        logger.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", e.message);
      }
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/regionalAuthority.js
function calculateRegionalAuthority(regionalAuthority) {
  let azureRegion = regionalAuthority;
  if (azureRegion === undefined && globalThis.process?.env?.AZURE_REGIONAL_AUTHORITY_NAME !== undefined) {
    azureRegion = process.env.AZURE_REGIONAL_AUTHORITY_NAME;
  }
  if (azureRegion === RegionalAuthority.AutoDiscoverRegion) {
    return "AUTO_DISCOVER";
  }
  return azureRegion;
}
var RegionalAuthority;
var init_regionalAuthority = __esm(() => {
  (function(RegionalAuthority2) {
    RegionalAuthority2["AutoDiscoverRegion"] = "AutoDiscoverRegion";
    RegionalAuthority2["USWest"] = "westus";
    RegionalAuthority2["USWest2"] = "westus2";
    RegionalAuthority2["USCentral"] = "centralus";
    RegionalAuthority2["USEast"] = "eastus";
    RegionalAuthority2["USEast2"] = "eastus2";
    RegionalAuthority2["USNorthCentral"] = "northcentralus";
    RegionalAuthority2["USSouthCentral"] = "southcentralus";
    RegionalAuthority2["USWestCentral"] = "westcentralus";
    RegionalAuthority2["CanadaCentral"] = "canadacentral";
    RegionalAuthority2["CanadaEast"] = "canadaeast";
    RegionalAuthority2["BrazilSouth"] = "brazilsouth";
    RegionalAuthority2["EuropeNorth"] = "northeurope";
    RegionalAuthority2["EuropeWest"] = "westeurope";
    RegionalAuthority2["UKSouth"] = "uksouth";
    RegionalAuthority2["UKWest"] = "ukwest";
    RegionalAuthority2["FranceCentral"] = "francecentral";
    RegionalAuthority2["FranceSouth"] = "francesouth";
    RegionalAuthority2["SwitzerlandNorth"] = "switzerlandnorth";
    RegionalAuthority2["SwitzerlandWest"] = "switzerlandwest";
    RegionalAuthority2["GermanyNorth"] = "germanynorth";
    RegionalAuthority2["GermanyWestCentral"] = "germanywestcentral";
    RegionalAuthority2["NorwayWest"] = "norwaywest";
    RegionalAuthority2["NorwayEast"] = "norwayeast";
    RegionalAuthority2["AsiaEast"] = "eastasia";
    RegionalAuthority2["AsiaSouthEast"] = "southeastasia";
    RegionalAuthority2["JapanEast"] = "japaneast";
    RegionalAuthority2["JapanWest"] = "japanwest";
    RegionalAuthority2["AustraliaEast"] = "australiaeast";
    RegionalAuthority2["AustraliaSouthEast"] = "australiasoutheast";
    RegionalAuthority2["AustraliaCentral"] = "australiacentral";
    RegionalAuthority2["AustraliaCentral2"] = "australiacentral2";
    RegionalAuthority2["IndiaCentral"] = "centralindia";
    RegionalAuthority2["IndiaSouth"] = "southindia";
    RegionalAuthority2["IndiaWest"] = "westindia";
    RegionalAuthority2["KoreaSouth"] = "koreasouth";
    RegionalAuthority2["KoreaCentral"] = "koreacentral";
    RegionalAuthority2["UAECentral"] = "uaecentral";
    RegionalAuthority2["UAENorth"] = "uaenorth";
    RegionalAuthority2["SouthAfricaNorth"] = "southafricanorth";
    RegionalAuthority2["SouthAfricaWest"] = "southafricawest";
    RegionalAuthority2["ChinaNorth"] = "chinanorth";
    RegionalAuthority2["ChinaEast"] = "chinaeast";
    RegionalAuthority2["ChinaNorth2"] = "chinanorth2";
    RegionalAuthority2["ChinaEast2"] = "chinaeast2";
    RegionalAuthority2["GermanyCentral"] = "germanycentral";
    RegionalAuthority2["GermanyNorthEast"] = "germanynortheast";
    RegionalAuthority2["GovernmentUSVirginia"] = "usgovvirginia";
    RegionalAuthority2["GovernmentUSIowa"] = "usgoviowa";
    RegionalAuthority2["GovernmentUSArizona"] = "usgovarizona";
    RegionalAuthority2["GovernmentUSTexas"] = "usgovtexas";
    RegionalAuthority2["GovernmentUSDodEast"] = "usdodeast";
    RegionalAuthority2["GovernmentUSDodCentral"] = "usdodcentral";
  })(RegionalAuthority || (RegionalAuthority = {}));
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/processMultiTenantRequest.js
function createConfigurationErrorMessage(tenantId) {
  return `The current credential is not configured to acquire tokens for tenant ${tenantId}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`;
}
function processMultiTenantRequest(tenantId, getTokenOptions, additionallyAllowedTenantIds = [], logger7) {
  let resolvedTenantId;
  if (process.env.AZURE_IDENTITY_DISABLE_MULTITENANTAUTH) {
    resolvedTenantId = tenantId;
  } else if (tenantId === "adfs") {
    resolvedTenantId = tenantId;
  } else {
    resolvedTenantId = getTokenOptions?.tenantId ?? tenantId;
  }
  if (tenantId && resolvedTenantId !== tenantId && !additionallyAllowedTenantIds.includes("*") && !additionallyAllowedTenantIds.some((t) => t.localeCompare(resolvedTenantId) === 0)) {
    const message = createConfigurationErrorMessage(resolvedTenantId);
    logger7?.info(message);
    throw new CredentialUnavailableError(message);
  }
  return resolvedTenantId;
}
var init_processMultiTenantRequest = __esm(() => {
  init_errors();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/tenantIdUtils.js
function checkTenantId(logger7, tenantId) {
  if (!tenantId.match(/^[0-9a-zA-Z-.]+$/)) {
    const error = new Error("Invalid tenant id provided. You can locate your tenant id by following the instructions listed here: https://learn.microsoft.com/partner-center/find-ids-and-domain-names.");
    logger7.info(formatError("", error));
    throw error;
  }
}
function resolveTenantId(logger7, tenantId, clientId) {
  if (tenantId) {
    checkTenantId(logger7, tenantId);
    return tenantId;
  }
  if (!clientId) {
    clientId = DeveloperSignOnClientId;
  }
  if (clientId !== DeveloperSignOnClientId) {
    return "common";
  }
  return "organizations";
}
function resolveAdditionallyAllowedTenantIds(additionallyAllowedTenants) {
  if (!additionallyAllowedTenants || additionallyAllowedTenants.length === 0) {
    return [];
  }
  if (additionallyAllowedTenants.includes("*")) {
    return ALL_TENANTS;
  }
  return additionallyAllowedTenants;
}
var init_tenantIdUtils = __esm(() => {
  init_constants();
  init_logging();
  init_processMultiTenantRequest();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/msal/nodeFlows/msalClient.js
function generateMsalConfiguration(clientId, tenantId, msalClientOptions = {}) {
  const resolvedTenant = resolveTenantId(msalClientOptions.logger ?? msalLogger, tenantId, clientId);
  const authority = getAuthority(resolvedTenant, getAuthorityHost(msalClientOptions));
  const httpClient = new IdentityClient({
    ...msalClientOptions.tokenCredentialOptions,
    authorityHost: authority,
    loggingOptions: msalClientOptions.loggingOptions
  });
  const msalConfig = {
    auth: {
      clientId,
      authority,
      knownAuthorities: getKnownAuthorities(resolvedTenant, authority, msalClientOptions.disableInstanceDiscovery)
    },
    system: {
      networkClient: httpClient,
      loggerOptions: {
        loggerCallback: defaultLoggerCallback(msalClientOptions.logger ?? msalLogger),
        logLevel: getMSALLogLevel(getLogLevel()),
        piiLoggingEnabled: msalClientOptions.loggingOptions?.enableUnsafeSupportLogging
      }
    }
  };
  return msalConfig;
}
function createMsalClient(clientId, tenantId, createMsalClientOptions = {}) {
  const state3 = {
    msalConfig: generateMsalConfiguration(clientId, tenantId, createMsalClientOptions),
    cachedAccount: createMsalClientOptions.authenticationRecord ? publicToMsal(createMsalClientOptions.authenticationRecord) : null,
    pluginConfiguration: msalPlugins.generatePluginConfiguration(createMsalClientOptions),
    logger: createMsalClientOptions.logger ?? msalLogger
  };
  const publicApps = new Map;
  async function getPublicApp(options = {}) {
    const appKey = options.enableCae ? "CAE" : "default";
    let publicClientApp = publicApps.get(appKey);
    if (publicClientApp) {
      state3.logger.getToken.info("Existing PublicClientApplication found in cache, returning it.");
      return publicClientApp;
    }
    state3.logger.getToken.info(`Creating new PublicClientApplication with CAE ${options.enableCae ? "enabled" : "disabled"}.`);
    const cachePlugin = options.enableCae ? state3.pluginConfiguration.cache.cachePluginCae : state3.pluginConfiguration.cache.cachePlugin;
    state3.msalConfig.auth.clientCapabilities = options.enableCae ? ["cp1"] : undefined;
    publicClientApp = new PublicClientApplication({
      ...state3.msalConfig,
      broker: { nativeBrokerPlugin: state3.pluginConfiguration.broker.nativeBrokerPlugin },
      cache: { cachePlugin: await cachePlugin }
    });
    publicApps.set(appKey, publicClientApp);
    return publicClientApp;
  }
  const confidentialApps = new Map;
  async function getConfidentialApp(options = {}) {
    const appKey = options.enableCae ? "CAE" : "default";
    let confidentialClientApp = confidentialApps.get(appKey);
    if (confidentialClientApp) {
      state3.logger.getToken.info("Existing ConfidentialClientApplication found in cache, returning it.");
      return confidentialClientApp;
    }
    state3.logger.getToken.info(`Creating new ConfidentialClientApplication with CAE ${options.enableCae ? "enabled" : "disabled"}.`);
    const cachePlugin = options.enableCae ? state3.pluginConfiguration.cache.cachePluginCae : state3.pluginConfiguration.cache.cachePlugin;
    state3.msalConfig.auth.clientCapabilities = options.enableCae ? ["cp1"] : undefined;
    confidentialClientApp = new ConfidentialClientApplication({
      ...state3.msalConfig,
      broker: { nativeBrokerPlugin: state3.pluginConfiguration.broker.nativeBrokerPlugin },
      cache: { cachePlugin: await cachePlugin }
    });
    confidentialApps.set(appKey, confidentialClientApp);
    return confidentialClientApp;
  }
  async function getTokenSilent(app, scopes, options = {}) {
    if (state3.cachedAccount === null) {
      state3.logger.getToken.info("No cached account found in local state.");
      throw new AuthenticationRequiredError({ scopes });
    }
    if (options.claims) {
      state3.cachedClaims = options.claims;
    }
    const silentRequest = {
      account: state3.cachedAccount,
      scopes,
      claims: state3.cachedClaims
    };
    if (state3.pluginConfiguration.broker.isEnabled) {
      silentRequest.extraQueryParameters ||= {};
      if (state3.pluginConfiguration.broker.enableMsaPassthrough) {
        silentRequest.extraQueryParameters["msal_request_type"] = "consumer_passthrough";
      }
    }
    if (options.proofOfPossessionOptions) {
      silentRequest.shrNonce = options.proofOfPossessionOptions.nonce;
      silentRequest.authenticationScheme = "pop";
      silentRequest.resourceRequestMethod = options.proofOfPossessionOptions.resourceRequestMethod;
      silentRequest.resourceRequestUri = options.proofOfPossessionOptions.resourceRequestUrl;
    }
    state3.logger.getToken.info("Attempting to acquire token silently");
    try {
      return await app.acquireTokenSilent(silentRequest);
    } catch (err) {
      throw handleMsalError(scopes, err, options);
    }
  }
  function calculateRequestAuthority(options) {
    if (options?.tenantId) {
      return getAuthority(options.tenantId, getAuthorityHost(createMsalClientOptions));
    }
    return state3.msalConfig.auth.authority;
  }
  async function withSilentAuthentication(msalApp, scopes, options, onAuthenticationRequired) {
    let response = null;
    try {
      response = await getTokenSilent(msalApp, scopes, options);
    } catch (e) {
      if (e.name !== "AuthenticationRequiredError") {
        throw e;
      }
      if (options.disableAutomaticAuthentication) {
        throw new AuthenticationRequiredError({
          scopes,
          getTokenOptions: options,
          message: "Automatic authentication has been disabled. You may call the authentication() method."
        });
      }
    }
    if (response === null) {
      try {
        response = await onAuthenticationRequired();
      } catch (err) {
        throw handleMsalError(scopes, err, options);
      }
    }
    ensureValidMsalToken(scopes, response, options);
    state3.cachedAccount = response?.account ?? null;
    state3.logger.getToken.info(formatSuccess(scopes));
    return {
      token: response.accessToken,
      expiresOnTimestamp: response.expiresOn.getTime(),
      refreshAfterTimestamp: response.refreshOn?.getTime(),
      tokenType: response.tokenType
    };
  }
  async function getTokenByClientSecret(scopes, clientSecret, options = {}) {
    state3.logger.getToken.info(`Attempting to acquire token using client secret`);
    state3.msalConfig.auth.clientSecret = clientSecret;
    const msalApp = await getConfidentialApp(options);
    try {
      const response = await msalApp.acquireTokenByClientCredential({
        scopes,
        authority: calculateRequestAuthority(options),
        azureRegion: calculateRegionalAuthority(),
        claims: options?.claims
      });
      ensureValidMsalToken(scopes, response, options);
      state3.logger.getToken.info(formatSuccess(scopes));
      return {
        token: response.accessToken,
        expiresOnTimestamp: response.expiresOn.getTime(),
        refreshAfterTimestamp: response.refreshOn?.getTime(),
        tokenType: response.tokenType
      };
    } catch (err) {
      throw handleMsalError(scopes, err, options);
    }
  }
  async function getTokenByClientAssertion(scopes, clientAssertion, options = {}) {
    state3.logger.getToken.info(`Attempting to acquire token using client assertion`);
    state3.msalConfig.auth.clientAssertion = clientAssertion;
    const msalApp = await getConfidentialApp(options);
    try {
      const response = await msalApp.acquireTokenByClientCredential({
        scopes,
        authority: calculateRequestAuthority(options),
        azureRegion: calculateRegionalAuthority(),
        claims: options?.claims,
        clientAssertion
      });
      ensureValidMsalToken(scopes, response, options);
      state3.logger.getToken.info(formatSuccess(scopes));
      return {
        token: response.accessToken,
        expiresOnTimestamp: response.expiresOn.getTime(),
        refreshAfterTimestamp: response.refreshOn?.getTime(),
        tokenType: response.tokenType
      };
    } catch (err) {
      throw handleMsalError(scopes, err, options);
    }
  }
  async function getTokenByClientCertificate(scopes, certificate, options = {}) {
    state3.logger.getToken.info(`Attempting to acquire token using client certificate`);
    state3.msalConfig.auth.clientCertificate = certificate;
    const msalApp = await getConfidentialApp(options);
    try {
      const response = await msalApp.acquireTokenByClientCredential({
        scopes,
        authority: calculateRequestAuthority(options),
        azureRegion: calculateRegionalAuthority(),
        claims: options?.claims
      });
      ensureValidMsalToken(scopes, response, options);
      state3.logger.getToken.info(formatSuccess(scopes));
      return {
        token: response.accessToken,
        expiresOnTimestamp: response.expiresOn.getTime(),
        refreshAfterTimestamp: response.refreshOn?.getTime(),
        tokenType: response.tokenType
      };
    } catch (err) {
      throw handleMsalError(scopes, err, options);
    }
  }
  async function getTokenByDeviceCode(scopes, deviceCodeCallback, options = {}) {
    state3.logger.getToken.info(`Attempting to acquire token using device code`);
    const msalApp = await getPublicApp(options);
    return withSilentAuthentication(msalApp, scopes, options, () => {
      const requestOptions = {
        scopes,
        cancel: options?.abortSignal?.aborted ?? false,
        deviceCodeCallback,
        authority: calculateRequestAuthority(options),
        claims: options?.claims
      };
      const deviceCodeRequest = msalApp.acquireTokenByDeviceCode(requestOptions);
      if (options.abortSignal) {
        options.abortSignal.addEventListener("abort", () => {
          requestOptions.cancel = true;
        });
      }
      return deviceCodeRequest;
    });
  }
  async function getTokenByUsernamePassword(scopes, username, password, options = {}) {
    state3.logger.getToken.info(`Attempting to acquire token using username and password`);
    const msalApp = await getPublicApp(options);
    return withSilentAuthentication(msalApp, scopes, options, () => {
      const requestOptions = {
        scopes,
        username,
        password,
        authority: calculateRequestAuthority(options),
        claims: options?.claims
      };
      return msalApp.acquireTokenByUsernamePassword(requestOptions);
    });
  }
  function getActiveAccount() {
    if (!state3.cachedAccount) {
      return;
    }
    return msalToPublic(clientId, state3.cachedAccount);
  }
  async function getTokenByAuthorizationCode(scopes, redirectUri, authorizationCode, clientSecret, options = {}) {
    state3.logger.getToken.info(`Attempting to acquire token using authorization code`);
    let msalApp;
    if (clientSecret) {
      state3.msalConfig.auth.clientSecret = clientSecret;
      msalApp = await getConfidentialApp(options);
    } else {
      msalApp = await getPublicApp(options);
    }
    return withSilentAuthentication(msalApp, scopes, options, () => {
      return msalApp.acquireTokenByCode({
        scopes,
        redirectUri,
        code: authorizationCode,
        authority: calculateRequestAuthority(options),
        claims: options?.claims
      });
    });
  }
  async function getTokenOnBehalfOf(scopes, userAssertionToken, clientCredentials, options = {}) {
    msalLogger.getToken.info(`Attempting to acquire token on behalf of another user`);
    if (typeof clientCredentials === "string") {
      msalLogger.getToken.info(`Using client secret for on behalf of flow`);
      state3.msalConfig.auth.clientSecret = clientCredentials;
    } else if (typeof clientCredentials === "function") {
      msalLogger.getToken.info(`Using client assertion callback for on behalf of flow`);
      state3.msalConfig.auth.clientAssertion = clientCredentials;
    } else {
      msalLogger.getToken.info(`Using client certificate for on behalf of flow`);
      state3.msalConfig.auth.clientCertificate = clientCredentials;
    }
    const msalApp = await getConfidentialApp(options);
    try {
      const response = await msalApp.acquireTokenOnBehalfOf({
        scopes,
        authority: calculateRequestAuthority(options),
        claims: options.claims,
        oboAssertion: userAssertionToken
      });
      ensureValidMsalToken(scopes, response, options);
      msalLogger.getToken.info(formatSuccess(scopes));
      return {
        token: response.accessToken,
        expiresOnTimestamp: response.expiresOn.getTime(),
        refreshAfterTimestamp: response.refreshOn?.getTime(),
        tokenType: response.tokenType
      };
    } catch (err) {
      throw handleMsalError(scopes, err, options);
    }
  }
  function createBaseInteractiveRequest(scopes, options) {
    return {
      openBrowser: async (url) => {
        const open = await import("./chunk-hzhe8ygc.js");
        await open.default(url, { newInstance: true });
      },
      scopes,
      authority: calculateRequestAuthority(options),
      claims: options?.claims,
      loginHint: options?.loginHint,
      errorTemplate: options?.browserCustomizationOptions?.errorMessage,
      successTemplate: options?.browserCustomizationOptions?.successMessage,
      prompt: options?.loginHint ? "login" : "select_account"
    };
  }
  async function getBrokeredTokenInternal(scopes, useDefaultBrokerAccount, options = {}) {
    msalLogger.verbose("Authentication will resume through the broker");
    const app = await getPublicApp(options);
    const interactiveRequest = createBaseInteractiveRequest(scopes, options);
    if (state3.pluginConfiguration.broker.parentWindowHandle) {
      interactiveRequest.windowHandle = Buffer.from(state3.pluginConfiguration.broker.parentWindowHandle);
    } else {
      msalLogger.warning("Parent window handle is not specified for the broker. This may cause unexpected behavior. Please provide the parentWindowHandle.");
    }
    if (state3.pluginConfiguration.broker.enableMsaPassthrough) {
      (interactiveRequest.extraQueryParameters ??= {})["msal_request_type"] = "consumer_passthrough";
    }
    if (useDefaultBrokerAccount) {
      interactiveRequest.prompt = "none";
      msalLogger.verbose("Attempting broker authentication using the default broker account");
    } else {
      msalLogger.verbose("Attempting broker authentication without the default broker account");
    }
    if (options.proofOfPossessionOptions) {
      interactiveRequest.shrNonce = options.proofOfPossessionOptions.nonce;
      interactiveRequest.authenticationScheme = "pop";
      interactiveRequest.resourceRequestMethod = options.proofOfPossessionOptions.resourceRequestMethod;
      interactiveRequest.resourceRequestUri = options.proofOfPossessionOptions.resourceRequestUrl;
    }
    try {
      return await app.acquireTokenInteractive(interactiveRequest);
    } catch (e) {
      msalLogger.verbose(`Failed to authenticate through the broker: ${e.message}`);
      if (options.disableAutomaticAuthentication) {
        throw new AuthenticationRequiredError({
          scopes,
          getTokenOptions: options,
          message: "Cannot silently authenticate with default broker account."
        });
      }
      if (useDefaultBrokerAccount) {
        return getBrokeredTokenInternal(scopes, false, options);
      } else {
        throw e;
      }
    }
  }
  async function getBrokeredToken(scopes, useDefaultBrokerAccount, options = {}) {
    msalLogger.getToken.info(`Attempting to acquire token using brokered authentication with useDefaultBrokerAccount: ${useDefaultBrokerAccount}`);
    const response = await getBrokeredTokenInternal(scopes, useDefaultBrokerAccount, options);
    ensureValidMsalToken(scopes, response, options);
    state3.cachedAccount = response?.account ?? null;
    state3.logger.getToken.info(formatSuccess(scopes));
    return {
      token: response.accessToken,
      expiresOnTimestamp: response.expiresOn.getTime(),
      refreshAfterTimestamp: response.refreshOn?.getTime(),
      tokenType: response.tokenType
    };
  }
  async function getTokenByInteractiveRequest(scopes, options = {}) {
    msalLogger.getToken.info(`Attempting to acquire token interactively`);
    const app = await getPublicApp(options);
    return withSilentAuthentication(app, scopes, options, async () => {
      const interactiveRequest = createBaseInteractiveRequest(scopes, options);
      if (state3.pluginConfiguration.broker.isEnabled) {
        return getBrokeredTokenInternal(scopes, state3.pluginConfiguration.broker.useDefaultBrokerAccount ?? false, options);
      }
      if (options.proofOfPossessionOptions) {
        interactiveRequest.shrNonce = options.proofOfPossessionOptions.nonce;
        interactiveRequest.authenticationScheme = "pop";
        interactiveRequest.resourceRequestMethod = options.proofOfPossessionOptions.resourceRequestMethod;
        interactiveRequest.resourceRequestUri = options.proofOfPossessionOptions.resourceRequestUrl;
      }
      return app.acquireTokenInteractive(interactiveRequest);
    });
  }
  return {
    getActiveAccount,
    getBrokeredToken,
    getTokenByClientSecret,
    getTokenByClientAssertion,
    getTokenByClientCertificate,
    getTokenByDeviceCode,
    getTokenByUsernamePassword,
    getTokenByAuthorizationCode,
    getTokenOnBehalfOf,
    getTokenByInteractiveRequest
  };
}
var msalLogger;
var init_msalClient = __esm(() => {
  init_dist();
  init_logging();
  init_msalPlugins();
  init_utils();
  init_errors();
  init_identityClient();
  init_regionalAuthority();
  init_esm();
  init_tenantIdUtils();
  msalLogger = credentialLogger("MsalClient");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/clientCertificateCredential.js
import { createHash, createPrivateKey } from "crypto";
import { readFile } from "fs/promises";

class ClientCertificateCredential {
  tenantId;
  additionallyAllowedTenantIds;
  certificateConfiguration;
  sendCertificateChain;
  msalClient;
  constructor(tenantId, clientId, certificatePathOrConfiguration, options = {}) {
    if (!tenantId || !clientId) {
      throw new Error(`${credentialName}: tenantId and clientId are required parameters.`);
    }
    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.sendCertificateChain = options.sendCertificateChain;
    this.certificateConfiguration = {
      ...typeof certificatePathOrConfiguration === "string" ? {
        certificatePath: certificatePathOrConfiguration
      } : certificatePathOrConfiguration
    };
    const certificate = this.certificateConfiguration.certificate;
    const certificatePath = this.certificateConfiguration.certificatePath;
    if (!this.certificateConfiguration || !(certificate || certificatePath)) {
      throw new Error(`${credentialName}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    }
    if (certificate && certificatePath) {
      throw new Error(`${credentialName}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    }
    this.msalClient = createMsalClient(clientId, tenantId, {
      ...options,
      logger: logger7,
      tokenCredentialOptions: options
    });
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${credentialName}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger7);
      const arrayScopes = Array.isArray(scopes) ? scopes : [scopes];
      const certificate = await this.buildClientCertificate();
      return this.msalClient.getTokenByClientCertificate(arrayScopes, certificate, newOptions);
    });
  }
  async buildClientCertificate() {
    const parts = await parseCertificate(this.certificateConfiguration, this.sendCertificateChain ?? false);
    let privateKey;
    if (this.certificateConfiguration.certificatePassword !== undefined) {
      privateKey = createPrivateKey({
        key: parts.certificateContents,
        passphrase: this.certificateConfiguration.certificatePassword,
        format: "pem"
      }).export({
        format: "pem",
        type: "pkcs8"
      }).toString();
    } else {
      privateKey = parts.certificateContents;
    }
    return {
      thumbprint: parts.thumbprint,
      thumbprintSha256: parts.thumbprintSha256,
      privateKey,
      x5c: parts.x5c
    };
  }
}
async function parseCertificate(certificateConfiguration, sendCertificateChain) {
  const certificate = certificateConfiguration.certificate;
  const certificatePath = certificateConfiguration.certificatePath;
  const certificateContents = certificate || await readFile(certificatePath, "utf8");
  const x5c = sendCertificateChain ? certificateContents : undefined;
  const certificatePattern = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g;
  const publicKeys = [];
  let match;
  do {
    match = certificatePattern.exec(certificateContents);
    if (match) {
      publicKeys.push(match[3]);
    }
  } while (match);
  if (publicKeys.length === 0) {
    throw new Error("The file at the specified path does not contain a PEM-encoded certificate.");
  }
  const thumbprint = createHash("sha1").update(Buffer.from(publicKeys[0], "base64")).digest("hex").toUpperCase();
  const thumbprintSha256 = createHash("sha256").update(Buffer.from(publicKeys[0], "base64")).digest("hex").toUpperCase();
  return {
    certificateContents,
    thumbprintSha256,
    thumbprint,
    x5c
  };
}
var credentialName = "ClientCertificateCredential", logger7;
var init_clientCertificateCredential = __esm(() => {
  init_msalClient();
  init_tenantIdUtils();
  init_logging();
  init_tracing();
  logger7 = credentialLogger(credentialName);
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/scopeUtils.js
function ensureScopes(scopes) {
  return Array.isArray(scopes) ? scopes : [scopes];
}
function ensureValidScopeForDevTimeCreds(scope, logger8) {
  if (!scope.match(/^[0-9a-zA-Z-_.:/]+$/)) {
    const error = new Error("Invalid scope was specified by the user or calling client");
    logger8.getToken.info(formatError(scope, error));
    throw error;
  }
}
function getScopeResource(scope) {
  return scope.replace(/\/.default$/, "");
}
var init_scopeUtils = __esm(() => {
  init_logging();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/clientSecretCredential.js
class ClientSecretCredential {
  tenantId;
  additionallyAllowedTenantIds;
  msalClient;
  clientSecret;
  constructor(tenantId, clientId, clientSecret, options = {}) {
    if (!tenantId) {
      throw new CredentialUnavailableError("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    }
    if (!clientId) {
      throw new CredentialUnavailableError("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    }
    if (!clientSecret) {
      throw new CredentialUnavailableError("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    }
    this.clientSecret = clientSecret;
    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.msalClient = createMsalClient(clientId, tenantId, {
      ...options,
      logger: logger8,
      tokenCredentialOptions: options
    });
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger8);
      const arrayScopes = ensureScopes(scopes);
      return this.msalClient.getTokenByClientSecret(arrayScopes, this.clientSecret, newOptions);
    });
  }
}
var logger8;
var init_clientSecretCredential = __esm(() => {
  init_msalClient();
  init_tenantIdUtils();
  init_errors();
  init_logging();
  init_scopeUtils();
  init_tracing();
  logger8 = credentialLogger("ClientSecretCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/usernamePasswordCredential.js
class UsernamePasswordCredential {
  tenantId;
  additionallyAllowedTenantIds;
  msalClient;
  username;
  password;
  constructor(tenantId, clientId, username, password, options = {}) {
    if (!tenantId) {
      throw new CredentialUnavailableError("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    }
    if (!clientId) {
      throw new CredentialUnavailableError("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    }
    if (!username) {
      throw new CredentialUnavailableError("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    }
    if (!password) {
      throw new CredentialUnavailableError("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    }
    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.username = username;
    this.password = password;
    this.msalClient = createMsalClient(clientId, this.tenantId, {
      ...options,
      tokenCredentialOptions: options ?? {}
    });
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger9);
      const arrayScopes = ensureScopes(scopes);
      return this.msalClient.getTokenByUsernamePassword(arrayScopes, this.username, this.password, newOptions);
    });
  }
}
var logger9;
var init_usernamePasswordCredential = __esm(() => {
  init_msalClient();
  init_tenantIdUtils();
  init_errors();
  init_logging();
  init_scopeUtils();
  init_tracing();
  logger9 = credentialLogger("UsernamePasswordCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/environmentCredential.js
function getAdditionallyAllowedTenants() {
  const additionallyAllowedValues = process.env.AZURE_ADDITIONALLY_ALLOWED_TENANTS ?? "";
  return additionallyAllowedValues.split(";");
}
function getSendCertificateChain() {
  const sendCertificateChain = (process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN ?? "").toLowerCase();
  const result = sendCertificateChain === "true" || sendCertificateChain === "1";
  logger10.verbose(`AZURE_CLIENT_SEND_CERTIFICATE_CHAIN: ${process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN}; sendCertificateChain: ${result}`);
  return result;
}

class EnvironmentCredential {
  _credential = undefined;
  constructor(options) {
    const assigned = processEnvVars(AllSupportedEnvironmentVariables).assigned.join(", ");
    logger10.info(`Found the following environment variables: ${assigned}`);
    const tenantId = process.env.AZURE_TENANT_ID, clientId = process.env.AZURE_CLIENT_ID, clientSecret = process.env.AZURE_CLIENT_SECRET;
    const additionallyAllowedTenantIds = getAdditionallyAllowedTenants();
    const sendCertificateChain = getSendCertificateChain();
    const newOptions = { ...options, additionallyAllowedTenantIds, sendCertificateChain };
    if (tenantId) {
      checkTenantId(logger10, tenantId);
    }
    if (tenantId && clientId && clientSecret) {
      logger10.info(`Invoking ClientSecretCredential with tenant ID: ${tenantId}, clientId: ${clientId} and clientSecret: [REDACTED]`);
      this._credential = new ClientSecretCredential(tenantId, clientId, clientSecret, newOptions);
      return;
    }
    const certificatePath = process.env.AZURE_CLIENT_CERTIFICATE_PATH;
    const certificatePassword = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
    if (tenantId && clientId && certificatePath) {
      logger10.info(`Invoking ClientCertificateCredential with tenant ID: ${tenantId}, clientId: ${clientId} and certificatePath: ${certificatePath}`);
      this._credential = new ClientCertificateCredential(tenantId, clientId, { certificatePath, certificatePassword }, newOptions);
      return;
    }
    const username = process.env.AZURE_USERNAME;
    const password = process.env.AZURE_PASSWORD;
    if (tenantId && clientId && username && password) {
      logger10.info(`Invoking UsernamePasswordCredential with tenant ID: ${tenantId}, clientId: ${clientId} and username: ${username}`);
      logger10.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa.");
      this._credential = new UsernamePasswordCredential(tenantId, clientId, username, password, newOptions);
    }
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${credentialName2}.getToken`, options, async (newOptions) => {
      if (this._credential) {
        try {
          const result = await this._credential.getToken(scopes, newOptions);
          logger10.getToken.info(formatSuccess(scopes));
          return result;
        } catch (err) {
          const authenticationError = new AuthenticationError(400, {
            error: `${credentialName2} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`,
            error_description: err.message.toString().split("More details:").join("")
          });
          logger10.getToken.info(formatError(scopes, authenticationError));
          throw authenticationError;
        }
      }
      throw new CredentialUnavailableError(`${credentialName2} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`);
    });
  }
}
var AllSupportedEnvironmentVariables, credentialName2 = "EnvironmentCredential", logger10;
var init_environmentCredential = __esm(() => {
  init_errors();
  init_logging();
  init_clientCertificateCredential();
  init_clientSecretCredential();
  init_usernamePasswordCredential();
  init_tenantIdUtils();
  init_tracing();
  AllSupportedEnvironmentVariables = [
    "AZURE_TENANT_ID",
    "AZURE_CLIENT_ID",
    "AZURE_CLIENT_SECRET",
    "AZURE_CLIENT_CERTIFICATE_PATH",
    "AZURE_CLIENT_CERTIFICATE_PASSWORD",
    "AZURE_USERNAME",
    "AZURE_PASSWORD",
    "AZURE_ADDITIONALLY_ALLOWED_TENANTS",
    "AZURE_CLIENT_SEND_CERTIFICATE_CHAIN"
  ];
  logger10 = credentialLogger(credentialName2);
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/imdsRetryPolicy.js
function imdsRetryPolicy(msiRetryConfig) {
  return retryPolicy2([
    {
      name: "imdsRetryPolicy",
      retry: ({ retryCount, response }) => {
        if (response?.status !== 404 && response?.status !== 410) {
          return { skipStrategy: true };
        }
        const initialDelayMs = response?.status === 410 ? Math.max(MIN_DELAY_FOR_410_MS, msiRetryConfig.startDelayInMs) : msiRetryConfig.startDelayInMs;
        return calculateRetryDelay2(retryCount, {
          retryDelayInMs: initialDelayMs,
          maxRetryDelayInMs: DEFAULT_CLIENT_MAX_RETRY_INTERVAL2
        });
      }
    }
  ], {
    maxRetries: msiRetryConfig.maxRetries
  });
}
var DEFAULT_CLIENT_MAX_RETRY_INTERVAL2, MIN_DELAY_FOR_410_MS = 3000;
var init_imdsRetryPolicy = __esm(() => {
  init_esm6();
  init_esm4();
  DEFAULT_CLIENT_MAX_RETRY_INTERVAL2 = 1000 * 64;
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/imdsMsi.js
function prepareInvalidRequestOptions(scopes) {
  const resource = mapScopesToResource(scopes);
  if (!resource) {
    throw new Error(`${msiName}: Multiple scopes are not supported.`);
  }
  const url = new URL(imdsEndpointPath, process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST ?? imdsHost);
  const rawHeaders = {
    Accept: "application/json"
  };
  return {
    url: `${url}`,
    method: "GET",
    headers: createHttpHeaders2(rawHeaders)
  };
}
var msiName = "ManagedIdentityCredential - IMDS", logger11, imdsHost = "http://169.254.169.254", imdsEndpointPath = "/metadata/identity/oauth2/token", imdsMsi;
var init_imdsMsi = __esm(() => {
  init_esm6();
  init_esm4();
  init_logging();
  init_utils3();
  init_tracing();
  logger11 = credentialLogger(msiName);
  imdsMsi = {
    name: "imdsMsi",
    async isAvailable(options) {
      const { scopes, identityClient, getTokenOptions } = options;
      const resource = mapScopesToResource(scopes);
      if (!resource) {
        logger11.info(`${msiName}: Unavailable. Multiple scopes are not supported.`);
        return false;
      }
      if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) {
        return true;
      }
      if (!identityClient) {
        throw new Error("Missing IdentityClient");
      }
      const requestOptions = prepareInvalidRequestOptions(resource);
      return tracingClient.withSpan("ManagedIdentityCredential-pingImdsEndpoint", getTokenOptions ?? {}, async (updatedOptions) => {
        requestOptions.tracingOptions = updatedOptions.tracingOptions;
        const request = createPipelineRequest2(requestOptions);
        request.timeout = updatedOptions.requestOptions?.timeout || 1000;
        request.allowInsecureConnection = true;
        let response;
        try {
          logger11.info(`${msiName}: Pinging the Azure IMDS endpoint`);
          response = await identityClient.sendRequest(request);
        } catch (err) {
          if (isError2(err)) {
            logger11.verbose(`${msiName}: Caught error ${err.name}: ${err.message}`);
          }
          logger11.info(`${msiName}: The Azure IMDS endpoint is unavailable`);
          return false;
        }
        if (response.status === 403) {
          if (response.bodyAsText?.includes("unreachable")) {
            logger11.info(`${msiName}: The Azure IMDS endpoint is unavailable`);
            logger11.info(`${msiName}: ${response.bodyAsText}`);
            return false;
          }
        }
        logger11.info(`${msiName}: The Azure IMDS endpoint is available`);
        return true;
      });
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/clientAssertionCredential.js
class ClientAssertionCredential {
  msalClient;
  tenantId;
  additionallyAllowedTenantIds;
  getAssertion;
  options;
  constructor(tenantId, clientId, getAssertion, options = {}) {
    if (!tenantId) {
      throw new CredentialUnavailableError("ClientAssertionCredential: tenantId is a required parameter.");
    }
    if (!clientId) {
      throw new CredentialUnavailableError("ClientAssertionCredential: clientId is a required parameter.");
    }
    if (!getAssertion) {
      throw new CredentialUnavailableError("ClientAssertionCredential: clientAssertion is a required parameter.");
    }
    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.options = options;
    this.getAssertion = getAssertion;
    this.msalClient = createMsalClient(clientId, tenantId, {
      ...options,
      logger: logger12,
      tokenCredentialOptions: this.options
    });
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger12);
      const arrayScopes = Array.isArray(scopes) ? scopes : [scopes];
      return this.msalClient.getTokenByClientAssertion(arrayScopes, this.getAssertion, newOptions);
    });
  }
}
var logger12;
var init_clientAssertionCredential = __esm(() => {
  init_msalClient();
  init_tenantIdUtils();
  init_errors();
  init_logging();
  init_tracing();
  logger12 = credentialLogger("ClientAssertionCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/workloadIdentityCredential.js
import { readFile as readFile2 } from "fs/promises";

class WorkloadIdentityCredential {
  client;
  azureFederatedTokenFileContent = undefined;
  cacheDate = undefined;
  federatedTokenFilePath;
  constructor(options) {
    const assignedEnv = processEnvVars(SupportedWorkloadEnvironmentVariables).assigned.join(", ");
    logger13.info(`Found the following environment variables: ${assignedEnv}`);
    const workloadIdentityCredentialOptions = options ?? {};
    const tenantId = workloadIdentityCredentialOptions.tenantId || process.env.AZURE_TENANT_ID;
    const clientId = workloadIdentityCredentialOptions.clientId || process.env.AZURE_CLIENT_ID;
    this.federatedTokenFilePath = workloadIdentityCredentialOptions.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE;
    if (tenantId) {
      checkTenantId(logger13, tenantId);
    }
    if (!clientId) {
      throw new CredentialUnavailableError(`${credentialName3}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    }
    if (!tenantId) {
      throw new CredentialUnavailableError(`${credentialName3}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    }
    if (!this.federatedTokenFilePath) {
      throw new CredentialUnavailableError(`${credentialName3}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    }
    logger13.info(`Invoking ClientAssertionCredential with tenant ID: ${tenantId}, clientId: ${workloadIdentityCredentialOptions.clientId} and federated token path: [REDACTED]`);
    this.client = new ClientAssertionCredential(tenantId, clientId, this.readFileContents.bind(this), options);
  }
  async getToken(scopes, options) {
    if (!this.client) {
      const errorMessage = `${credentialName3}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. 
      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - 
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
      logger13.info(errorMessage);
      throw new CredentialUnavailableError(errorMessage);
    }
    logger13.info("Invoking getToken() of Client Assertion Credential");
    return this.client.getToken(scopes, options);
  }
  async readFileContents() {
    if (this.cacheDate !== undefined && Date.now() - this.cacheDate >= 1000 * 60 * 5) {
      this.azureFederatedTokenFileContent = undefined;
    }
    if (!this.federatedTokenFilePath) {
      throw new CredentialUnavailableError(`${credentialName3}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
    }
    if (!this.azureFederatedTokenFileContent) {
      const file = await readFile2(this.federatedTokenFilePath, "utf8");
      const value = file.trim();
      if (!value) {
        throw new CredentialUnavailableError(`${credentialName3}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`);
      } else {
        this.azureFederatedTokenFileContent = value;
        this.cacheDate = Date.now();
      }
    }
    return this.azureFederatedTokenFileContent;
  }
}
var credentialName3 = "WorkloadIdentityCredential", SupportedWorkloadEnvironmentVariables, logger13;
var init_workloadIdentityCredential = __esm(() => {
  init_logging();
  init_clientAssertionCredential();
  init_errors();
  init_tenantIdUtils();
  SupportedWorkloadEnvironmentVariables = [
    "AZURE_TENANT_ID",
    "AZURE_CLIENT_ID",
    "AZURE_FEDERATED_TOKEN_FILE"
  ];
  logger13 = credentialLogger(credentialName3);
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/tokenExchangeMsi.js
var msiName2 = "ManagedIdentityCredential - Token Exchange", logger14, tokenExchangeMsi;
var init_tokenExchangeMsi = __esm(() => {
  init_workloadIdentityCredential();
  init_logging();
  logger14 = credentialLogger(msiName2);
  tokenExchangeMsi = {
    name: "tokenExchangeMsi",
    async isAvailable(clientId) {
      const env = process.env;
      const result = Boolean((clientId || env.AZURE_CLIENT_ID) && env.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
      if (!result) {
        logger14.info(`${msiName2}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
      }
      return result;
    },
    async getToken(configuration, getTokenOptions = {}) {
      const { scopes, clientId } = configuration;
      const identityClientTokenCredentialOptions = {};
      const workloadIdentityCredential = new WorkloadIdentityCredential({
        clientId,
        tenantId: process.env.AZURE_TENANT_ID,
        tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE,
        ...identityClientTokenCredentialOptions,
        disableInstanceDiscovery: true
      });
      return workloadIdentityCredential.getToken(scopes, getTokenOptions);
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/managedIdentityCredential/index.js
class ManagedIdentityCredential {
  managedIdentityApp;
  identityClient;
  clientId;
  resourceId;
  objectId;
  msiRetryConfig = {
    maxRetries: 5,
    startDelayInMs: 800,
    intervalIncrement: 2
  };
  isAvailableIdentityClient;
  sendProbeRequest;
  constructor(clientIdOrOptions, options) {
    let _options;
    if (typeof clientIdOrOptions === "string") {
      this.clientId = clientIdOrOptions;
      _options = options ?? {};
    } else {
      this.clientId = clientIdOrOptions?.clientId;
      _options = clientIdOrOptions ?? {};
    }
    this.resourceId = _options?.resourceId;
    this.objectId = _options?.objectId;
    this.sendProbeRequest = _options?.sendProbeRequest ?? false;
    const providedIds = [
      { key: "clientId", value: this.clientId },
      { key: "resourceId", value: this.resourceId },
      { key: "objectId", value: this.objectId }
    ].filter((id) => id.value);
    if (providedIds.length > 1) {
      throw new Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({ clientId: this.clientId, resourceId: this.resourceId, objectId: this.objectId })}`);
    }
    _options.allowInsecureConnection = true;
    if (_options.retryOptions?.maxRetries !== undefined) {
      this.msiRetryConfig.maxRetries = _options.retryOptions.maxRetries;
    }
    this.identityClient = new IdentityClient({
      ..._options,
      additionalPolicies: [{ policy: imdsRetryPolicy(this.msiRetryConfig), position: "perCall" }]
    });
    this.managedIdentityApp = new ManagedIdentityApplication({
      managedIdentityIdParams: {
        userAssignedClientId: this.clientId,
        userAssignedResourceId: this.resourceId,
        userAssignedObjectId: this.objectId
      },
      system: {
        disableInternalRetries: true,
        networkClient: this.identityClient,
        loggerOptions: {
          logLevel: getMSALLogLevel(getLogLevel()),
          piiLoggingEnabled: _options.loggingOptions?.enableUnsafeSupportLogging,
          loggerCallback: defaultLoggerCallback(logger15)
        }
      }
    });
    this.isAvailableIdentityClient = new IdentityClient({
      ..._options,
      retryOptions: {
        maxRetries: 0
      }
    });
    const managedIdentitySource = this.managedIdentityApp.getManagedIdentitySource();
    if (managedIdentitySource === "CloudShell") {
      if (this.clientId || this.resourceId || this.objectId) {
        logger15.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
          clientId: this.clientId,
          resourceId: this.resourceId,
          objectId: this.objectId
        })}.`);
        throw new CredentialUnavailableError("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.");
      }
    }
    if (managedIdentitySource === "ServiceFabric") {
      if (this.clientId || this.resourceId || this.objectId) {
        logger15.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
          clientId: this.clientId,
          resourceId: this.resourceId,
          objectId: this.objectId
        })}.`);
        throw new CredentialUnavailableError(`ManagedIdentityCredential: ${serviceFabricErrorMessage}`);
      }
    }
    logger15.info(`Using ${managedIdentitySource} managed identity.`);
    if (providedIds.length === 1) {
      const { key, value } = providedIds[0];
      logger15.info(`${managedIdentitySource} with ${key}: ${value}`);
    }
  }
  async getToken(scopes, options = {}) {
    logger15.getToken.info("Using the MSAL provider for Managed Identity.");
    const resource = mapScopesToResource(scopes);
    if (!resource) {
      throw new CredentialUnavailableError(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(scopes)}`);
    }
    return tracingClient.withSpan("ManagedIdentityCredential.getToken", options, async () => {
      try {
        const isTokenExchangeMsi = await tokenExchangeMsi.isAvailable(this.clientId);
        const identitySource = this.managedIdentityApp.getManagedIdentitySource();
        const isImdsMsi = identitySource === "DefaultToImds" || identitySource === "Imds";
        logger15.getToken.info(`MSAL Identity source: ${identitySource}`);
        if (isTokenExchangeMsi) {
          logger15.getToken.info("Using the token exchange managed identity.");
          const result = await tokenExchangeMsi.getToken({
            scopes,
            clientId: this.clientId,
            identityClient: this.identityClient,
            retryConfig: this.msiRetryConfig,
            resourceId: this.resourceId
          });
          if (result === null) {
            throw new CredentialUnavailableError("Attempted to use the token exchange managed identity, but received a null response.");
          }
          return result;
        } else if (isImdsMsi && this.sendProbeRequest) {
          logger15.getToken.info("Using the IMDS endpoint to probe for availability.");
          const isAvailable = await imdsMsi.isAvailable({
            scopes,
            clientId: this.clientId,
            getTokenOptions: options,
            identityClient: this.isAvailableIdentityClient,
            resourceId: this.resourceId
          });
          if (!isAvailable) {
            throw new CredentialUnavailableError(`Attempted to use the IMDS endpoint, but it is not available.`);
          }
        }
        logger15.getToken.info("Calling into MSAL for managed identity token.");
        const token = await this.managedIdentityApp.acquireToken({
          resource
        });
        this.ensureValidMsalToken(scopes, token, options);
        logger15.getToken.info(formatSuccess(scopes));
        return {
          expiresOnTimestamp: token.expiresOn.getTime(),
          token: token.accessToken,
          refreshAfterTimestamp: token.refreshOn?.getTime(),
          tokenType: "Bearer"
        };
      } catch (err) {
        logger15.getToken.error(formatError(scopes, err));
        if (err.name === "AuthenticationRequiredError") {
          throw err;
        }
        if (isNetworkError(err)) {
          throw new CredentialUnavailableError(`ManagedIdentityCredential: Network unreachable. Message: ${err.message}`, { cause: err });
        }
        throw new CredentialUnavailableError(`ManagedIdentityCredential: Authentication failed. Message ${err.message}`, { cause: err });
      }
    });
  }
  ensureValidMsalToken(scopes, msalToken, getTokenOptions) {
    const createError = (message) => {
      logger15.getToken.info(message);
      return new AuthenticationRequiredError({
        scopes: Array.isArray(scopes) ? scopes : [scopes],
        getTokenOptions,
        message
      });
    };
    if (!msalToken) {
      throw createError("No response.");
    }
    if (!msalToken.expiresOn) {
      throw createError(`Response had no "expiresOn" property.`);
    }
    if (!msalToken.accessToken) {
      throw createError(`Response had no "accessToken" property.`);
    }
  }
}
function isNetworkError(err) {
  if (err.errorCode === "network_error") {
    return true;
  }
  if (err.code === "ENETUNREACH" || err.code === "EHOSTUNREACH") {
    return true;
  }
  if (err.statusCode === 403 || err.code === 403) {
    if (err.message.includes("unreachable")) {
      return true;
    }
  }
  return false;
}
var logger15;
var init_managedIdentityCredential = __esm(() => {
  init_esm();
  init_dist();
  init_identityClient();
  init_errors();
  init_utils();
  init_imdsRetryPolicy();
  init_logging();
  init_tracing();
  init_imdsMsi();
  init_tokenExchangeMsi();
  init_utils3();
  logger15 = credentialLogger("ManagedIdentityCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/azureDeveloperCliCredential.js
import child_process from "child_process";

class AzureDeveloperCliCredential {
  tenantId;
  additionallyAllowedTenantIds;
  timeout;
  constructor(options) {
    if (options?.tenantId) {
      checkTenantId(logger16, options?.tenantId);
      this.tenantId = options?.tenantId;
    }
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.timeout = options?.processTimeoutInMs;
  }
  async getToken(scopes, options = {}) {
    const tenantId = processMultiTenantRequest(this.tenantId, options, this.additionallyAllowedTenantIds);
    if (tenantId) {
      checkTenantId(logger16, tenantId);
    }
    let scopeList;
    if (typeof scopes === "string") {
      scopeList = [scopes];
    } else {
      scopeList = scopes;
    }
    logger16.getToken.info(`Using the scopes ${scopes}`);
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async () => {
      try {
        scopeList.forEach((scope) => {
          ensureValidScopeForDevTimeCreds(scope, logger16);
        });
        const obj = await developerCliCredentialInternals.getAzdAccessToken(scopeList, tenantId, this.timeout, options.claims);
        const isMFARequiredError = obj.stderr?.match("must use multi-factor authentication") || obj.stderr?.match("reauthentication required");
        const isNotLoggedInError = obj.stderr?.match("not logged in, run `azd login` to login") || obj.stderr?.match("not logged in, run `azd auth login` to login");
        const isNotInstallError = obj.stderr?.match("azd:(.*)not found") || obj.stderr?.startsWith("'azd' is not recognized");
        if (isNotInstallError || obj.error && obj.error.code === "ENOENT") {
          const error = new CredentialUnavailableError(azureDeveloperCliPublicErrorMessages.notInstalled);
          logger16.getToken.info(formatError(scopes, error));
          throw error;
        }
        if (isNotLoggedInError) {
          const error = new CredentialUnavailableError(azureDeveloperCliPublicErrorMessages.login);
          logger16.getToken.info(formatError(scopes, error));
          throw error;
        }
        if (isMFARequiredError) {
          const scope = scopeList.reduce((previous, current) => previous.concat("--scope", current), []).join(" ");
          const loginCmd = `azd auth login ${scope}`;
          const error = new CredentialUnavailableError(`${azureDeveloperCliPublicErrorMessages.claim} ${loginCmd}`);
          logger16.getToken.info(formatError(scopes, error));
          throw error;
        }
        try {
          const resp = JSON.parse(obj.stdout);
          logger16.getToken.info(formatSuccess(scopes));
          return {
            token: resp.token,
            expiresOnTimestamp: new Date(resp.expiresOn).getTime(),
            tokenType: "Bearer"
          };
        } catch (e) {
          if (obj.stderr) {
            throw new CredentialUnavailableError(obj.stderr);
          }
          throw e;
        }
      } catch (err) {
        const error = err.name === "CredentialUnavailableError" ? err : new CredentialUnavailableError(err.message || azureDeveloperCliPublicErrorMessages.unknown);
        logger16.getToken.info(formatError(scopes, error));
        throw error;
      }
    });
  }
}
var logger16, azureDeveloperCliPublicErrorMessages, developerCliCredentialInternals;
var init_azureDeveloperCliCredential = __esm(() => {
  init_logging();
  init_errors();
  init_tenantIdUtils();
  init_tracing();
  init_scopeUtils();
  logger16 = credentialLogger("AzureDeveloperCliCredential");
  azureDeveloperCliPublicErrorMessages = {
    notInstalled: "Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.",
    login: "Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.",
    unknown: "Unknown error while trying to retrieve the access token",
    claim: "This credential doesn't support claims challenges. To authenticate with the required claims, please run the following command:"
  };
  developerCliCredentialInternals = {
    getSafeWorkingDir() {
      if (process.platform === "win32") {
        let systemRoot = process.env.SystemRoot || process.env["SYSTEMROOT"];
        if (!systemRoot) {
          logger16.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure Developer CLI credential.");
          systemRoot = "C:\\Windows";
        }
        return systemRoot;
      } else {
        return "/bin";
      }
    },
    async getAzdAccessToken(scopes, tenantId, timeout, claims) {
      let tenantSection = [];
      if (tenantId) {
        tenantSection = ["--tenant-id", tenantId];
      }
      let claimsSections = [];
      if (claims) {
        const encodedClaims = btoa(claims);
        claimsSections = ["--claims", encodedClaims];
      }
      return new Promise((resolve, reject) => {
        try {
          const args = [
            "auth",
            "token",
            "--output",
            "json",
            "--no-prompt",
            ...scopes.reduce((previous, current) => previous.concat("--scope", current), []),
            ...tenantSection,
            ...claimsSections
          ];
          const command = ["azd", ...args].join(" ");
          child_process.exec(command, {
            cwd: developerCliCredentialInternals.getSafeWorkingDir(),
            timeout
          }, (error, stdout, stderr) => {
            resolve({ stdout, stderr, error });
          });
        } catch (err) {
          reject(err);
        }
      });
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/subscriptionUtils.js
function checkSubscription(logger17, subscription) {
  if (!subscription.match(/^[0-9a-zA-Z-._ ]+$/)) {
    const error = new Error(`Subscription '${subscription}' contains invalid characters. If this is the name of a subscription, use ` + `its ID instead. You can locate your subscription by following the instructions listed here: ` + `https://learn.microsoft.com/azure/azure-portal/get-subscription-tenant-id`);
    logger17.info(formatError("", error));
    throw error;
  }
}
var init_subscriptionUtils = __esm(() => {
  init_logging();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/azureCliCredential.js
import child_process2 from "child_process";

class AzureCliCredential {
  tenantId;
  additionallyAllowedTenantIds;
  timeout;
  subscription;
  constructor(options) {
    if (options?.tenantId) {
      checkTenantId(logger17, options?.tenantId);
      this.tenantId = options?.tenantId;
    }
    if (options?.subscription) {
      checkSubscription(logger17, options?.subscription);
      this.subscription = options?.subscription;
    }
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.timeout = options?.processTimeoutInMs;
  }
  async getToken(scopes, options = {}) {
    const scope = typeof scopes === "string" ? scopes : scopes[0];
    const claimsValue = options.claims;
    if (claimsValue && claimsValue.trim()) {
      const encodedClaims = btoa(claimsValue);
      let loginCmd = `az login --claims-challenge ${encodedClaims} --scope ${scope}`;
      const tenantIdFromOptions = options.tenantId;
      if (tenantIdFromOptions) {
        loginCmd += ` --tenant ${tenantIdFromOptions}`;
      }
      const error = new CredentialUnavailableError(`${azureCliPublicErrorMessages.claim} ${loginCmd}`);
      logger17.getToken.info(formatError(scope, error));
      throw error;
    }
    const tenantId = processMultiTenantRequest(this.tenantId, options, this.additionallyAllowedTenantIds);
    if (tenantId) {
      checkTenantId(logger17, tenantId);
    }
    if (this.subscription) {
      checkSubscription(logger17, this.subscription);
    }
    logger17.getToken.info(`Using the scope ${scope}`);
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async () => {
      try {
        ensureValidScopeForDevTimeCreds(scope, logger17);
        const resource = getScopeResource(scope);
        const obj = await cliCredentialInternals.getAzureCliAccessToken(resource, tenantId, this.subscription, this.timeout);
        const specificScope = obj.stderr?.match("(.*)az login --scope(.*)");
        const isLoginError = obj.stderr?.match("(.*)az login(.*)") && !specificScope;
        const isNotInstallError = obj.stderr?.match("az:(.*)not found") || obj.stderr?.startsWith("'az' is not recognized");
        if (isNotInstallError) {
          const error = new CredentialUnavailableError(azureCliPublicErrorMessages.notInstalled);
          logger17.getToken.info(formatError(scopes, error));
          throw error;
        }
        if (isLoginError) {
          const error = new CredentialUnavailableError(azureCliPublicErrorMessages.login);
          logger17.getToken.info(formatError(scopes, error));
          throw error;
        }
        try {
          const responseData = obj.stdout;
          const response = this.parseRawResponse(responseData);
          logger17.getToken.info(formatSuccess(scopes));
          return response;
        } catch (e) {
          if (obj.stderr) {
            throw new CredentialUnavailableError(obj.stderr);
          }
          throw e;
        }
      } catch (err) {
        const error = err.name === "CredentialUnavailableError" ? err : new CredentialUnavailableError(err.message || azureCliPublicErrorMessages.unknown);
        logger17.getToken.info(formatError(scopes, error));
        throw error;
      }
    });
  }
  parseRawResponse(rawResponse) {
    const response = JSON.parse(rawResponse);
    const token = response.accessToken;
    let expiresOnTimestamp = Number.parseInt(response.expires_on, 10) * 1000;
    if (!isNaN(expiresOnTimestamp)) {
      logger17.getToken.info("expires_on is available and is valid, using it");
      return {
        token,
        expiresOnTimestamp,
        tokenType: "Bearer"
      };
    }
    expiresOnTimestamp = new Date(response.expiresOn).getTime();
    if (isNaN(expiresOnTimestamp)) {
      throw new CredentialUnavailableError(`${azureCliPublicErrorMessages.unexpectedResponse} "${response.expiresOn}"`);
    }
    return {
      token,
      expiresOnTimestamp,
      tokenType: "Bearer"
    };
  }
}
var logger17, azureCliPublicErrorMessages, cliCredentialInternals;
var init_azureCliCredential = __esm(() => {
  init_tenantIdUtils();
  init_logging();
  init_scopeUtils();
  init_errors();
  init_tracing();
  init_subscriptionUtils();
  logger17 = credentialLogger("AzureCliCredential");
  azureCliPublicErrorMessages = {
    claim: "This credential doesn't support claims challenges. To authenticate with the required claims, please run the following command:",
    notInstalled: "Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.",
    login: "Please run 'az login' from a command prompt to authenticate before using this credential.",
    unknown: "Unknown error while trying to retrieve the access token",
    unexpectedResponse: 'Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got:'
  };
  cliCredentialInternals = {
    getSafeWorkingDir() {
      if (process.platform === "win32") {
        let systemRoot = process.env.SystemRoot || process.env["SYSTEMROOT"];
        if (!systemRoot) {
          logger17.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure CLI credential.");
          systemRoot = "C:\\Windows";
        }
        return systemRoot;
      } else {
        return "/bin";
      }
    },
    async getAzureCliAccessToken(resource, tenantId, subscription, timeout) {
      let tenantSection = [];
      let subscriptionSection = [];
      if (tenantId) {
        tenantSection = ["--tenant", tenantId];
      }
      if (subscription) {
        subscriptionSection = ["--subscription", `"${subscription}"`];
      }
      return new Promise((resolve, reject) => {
        try {
          const args = [
            "account",
            "get-access-token",
            "--output",
            "json",
            "--resource",
            resource,
            ...tenantSection,
            ...subscriptionSection
          ];
          const command = ["az", ...args].join(" ");
          child_process2.exec(command, { cwd: cliCredentialInternals.getSafeWorkingDir(), timeout }, (error, stdout, stderr) => {
            resolve({ stdout, stderr, error });
          });
        } catch (err) {
          reject(err);
        }
      });
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/util/processUtils.js
import childProcess from "child_process";
var processUtils;
var init_processUtils = __esm(() => {
  processUtils = {
    execFile(file, params, options) {
      return new Promise((resolve, reject) => {
        childProcess.execFile(file, params, options, (error, stdout, stderr) => {
          if (Buffer.isBuffer(stdout)) {
            stdout = stdout.toString("utf8");
          }
          if (Buffer.isBuffer(stderr)) {
            stderr = stderr.toString("utf8");
          }
          if (stderr || error) {
            reject(stderr ? new Error(stderr) : error);
          } else {
            resolve(stdout);
          }
        });
      });
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/azurePowerShellCredential.js
function formatCommand(commandName) {
  if (isWindows) {
    return `${commandName}.exe`;
  } else {
    return commandName;
  }
}
async function runCommands(commands, timeout) {
  const results = [];
  for (const command of commands) {
    const [file, ...parameters] = command;
    const result = await processUtils.execFile(file, parameters, {
      encoding: "utf8",
      timeout
    });
    results.push(result);
  }
  return results;
}

class AzurePowerShellCredential {
  tenantId;
  additionallyAllowedTenantIds;
  timeout;
  constructor(options) {
    if (options?.tenantId) {
      checkTenantId(logger18, options?.tenantId);
      this.tenantId = options?.tenantId;
    }
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.timeout = options?.processTimeoutInMs;
  }
  async getAzurePowerShellAccessToken(resource, tenantId, timeout) {
    for (const powerShellCommand of [...commandStack]) {
      try {
        await runCommands([[powerShellCommand, "/?"]], timeout);
      } catch (e) {
        commandStack.shift();
        continue;
      }
      const results = await runCommands([
        [
          powerShellCommand,
          "-NoProfile",
          "-NonInteractive",
          "-Command",
          `
          $tenantId = "${tenantId ?? ""}"
          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru
          $useSecureString = $m.Version -ge [version]'2.17.0' -and $m.Version -lt [version]'5.0.0'

          $params = @{
            ResourceUrl = "${resource}"
          }

          if ($tenantId.Length -gt 0) {
            $params["TenantId"] = $tenantId
          }

          if ($useSecureString) {
            $params["AsSecureString"] = $true
          }

          $token = Get-AzAccessToken @params

          $result = New-Object -TypeName PSObject
          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn

          if ($token.Token -is [System.Security.SecureString]) {
            if ($PSVersionTable.PSVersion.Major -lt 7) {
              $ssPtr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($token.Token)
              try {
                $result | Add-Member -MemberType NoteProperty -Name Token -Value ([System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($ssPtr))
              }
              finally {
                [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ssPtr)
              }
            }
            else {
              $result | Add-Member -MemberType NoteProperty -Name Token -Value ($token.Token | ConvertFrom-SecureString -AsPlainText)
            }
          }
          else {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token
          }

          Write-Output (ConvertTo-Json $result)
          `
        ]
      ]);
      const result = results[0];
      return parseJsonToken(result);
    }
    throw new Error(`Unable to execute PowerShell. Ensure that it is installed in your system`);
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async () => {
      const scope = typeof scopes === "string" ? scopes : scopes[0];
      const claimsValue = options.claims;
      if (claimsValue && claimsValue.trim()) {
        const encodedClaims = btoa(claimsValue);
        let loginCmd = `Connect-AzAccount -ClaimsChallenge ${encodedClaims}`;
        const tenantIdFromOptions = options.tenantId;
        if (tenantIdFromOptions) {
          loginCmd += ` -Tenant ${tenantIdFromOptions}`;
        }
        const error = new CredentialUnavailableError(`${powerShellPublicErrorMessages.claim} ${loginCmd}`);
        logger18.getToken.info(formatError(scope, error));
        throw error;
      }
      const tenantId = processMultiTenantRequest(this.tenantId, options, this.additionallyAllowedTenantIds);
      if (tenantId) {
        checkTenantId(logger18, tenantId);
      }
      try {
        ensureValidScopeForDevTimeCreds(scope, logger18);
        logger18.getToken.info(`Using the scope ${scope}`);
        const resource = getScopeResource(scope);
        const response = await this.getAzurePowerShellAccessToken(resource, tenantId, this.timeout);
        logger18.getToken.info(formatSuccess(scopes));
        return {
          token: response.Token,
          expiresOnTimestamp: new Date(response.ExpiresOn).getTime(),
          tokenType: "Bearer"
        };
      } catch (err) {
        if (isNotInstalledError(err)) {
          const error2 = new CredentialUnavailableError(powerShellPublicErrorMessages.installed);
          logger18.getToken.info(formatError(scope, error2));
          throw error2;
        } else if (isLoginError(err)) {
          const error2 = new CredentialUnavailableError(powerShellPublicErrorMessages.login);
          logger18.getToken.info(formatError(scope, error2));
          throw error2;
        }
        const error = new CredentialUnavailableError(`${err}. ${powerShellPublicErrorMessages.troubleshoot}`);
        logger18.getToken.info(formatError(scope, error));
        throw error;
      }
    });
  }
}
async function parseJsonToken(result) {
  const jsonRegex = /{[^{}]*}/g;
  const matches = result.match(jsonRegex);
  let resultWithoutToken = result;
  if (matches) {
    try {
      for (const item of matches) {
        try {
          const jsonContent = JSON.parse(item);
          if (jsonContent?.Token) {
            resultWithoutToken = resultWithoutToken.replace(item, "");
            if (resultWithoutToken) {
              logger18.getToken.warning(resultWithoutToken);
            }
            return jsonContent;
          }
        } catch (e) {
          continue;
        }
      }
    } catch (e) {
      throw new Error(`Unable to parse the output of PowerShell. Received output: ${result}`);
    }
  }
  throw new Error(`No access token found in the output. Received output: ${result}`);
}
var logger18, isWindows, powerShellErrors, powerShellPublicErrorMessages, isLoginError = (err) => err.message.match(`(.*)${powerShellErrors.login}(.*)`), isNotInstalledError = (err) => err.message.match(powerShellErrors.installed), commandStack;
var init_azurePowerShellCredential = __esm(() => {
  init_tenantIdUtils();
  init_logging();
  init_scopeUtils();
  init_errors();
  init_processUtils();
  init_tracing();
  logger18 = credentialLogger("AzurePowerShellCredential");
  isWindows = process.platform === "win32";
  powerShellErrors = {
    login: "Run Connect-AzAccount to login",
    installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
  };
  powerShellPublicErrorMessages = {
    login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
    installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
    claim: "This credential doesn't support claims challenges. To authenticate with the required claims, please run the following command:",
    troubleshoot: `To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot.`
  };
  commandStack = [formatCommand("pwsh")];
  if (isWindows) {
    commandStack.push(formatCommand("powershell"));
  }
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/visualStudioCodeCredential.js
import { readFile as readFile3 } from "fs/promises";
function checkUnsupportedTenant(tenantId) {
  const unsupportedTenantError = unsupportedTenantIds[tenantId];
  if (unsupportedTenantError) {
    throw new CredentialUnavailableError(unsupportedTenantError);
  }
}

class VisualStudioCodeCredential {
  tenantId;
  additionallyAllowedTenantIds;
  msalClient;
  options;
  constructor(options) {
    this.options = options || {};
    if (options && options.tenantId) {
      checkTenantId(logger19, options.tenantId);
      this.tenantId = options.tenantId;
    } else {
      this.tenantId = CommonTenantId;
    }
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    checkUnsupportedTenant(this.tenantId);
  }
  async prepare(scopes) {
    const tenantId = processMultiTenantRequest(this.tenantId, this.options, this.additionallyAllowedTenantIds, logger19) || this.tenantId;
    if (!hasVSCodePlugin() || !vsCodeAuthRecordPath) {
      throw new CredentialUnavailableError("Visual Studio Code Authentication is not available." + " Ensure you have have Azure Resources Extension installed in VS Code," + " signed into Azure via VS Code, installed the @azure/identity-vscode package," + " and properly configured the extension.");
    }
    const authenticationRecord = await this.loadAuthRecord(vsCodeAuthRecordPath, scopes);
    this.msalClient = createMsalClient(VSCodeClientId, tenantId, {
      ...this.options,
      isVSCodeCredential: true,
      brokerOptions: {
        enabled: true,
        parentWindowHandle: new Uint8Array(0),
        useDefaultBrokerAccount: true
      },
      authenticationRecord
    });
  }
  preparePromise;
  prepareOnce(scopes) {
    if (!this.preparePromise) {
      this.preparePromise = this.prepare(scopes);
    }
    return this.preparePromise;
  }
  async getToken(scopes, options) {
    const scopeArray = ensureScopes(scopes);
    await this.prepareOnce(scopeArray);
    if (!this.msalClient) {
      throw new CredentialUnavailableError("Visual Studio Code Authentication failed to initialize." + " Ensure you have have Azure Resources Extension installed in VS Code," + " signed into Azure via VS Code, installed the @azure/identity-vscode package," + " and properly configured the extension.");
    }
    return this.msalClient.getTokenByInteractiveRequest(scopeArray, {
      ...options,
      disableAutomaticAuthentication: true
    });
  }
  async loadAuthRecord(authRecordPath, scopes) {
    try {
      const authRecordContent = await readFile3(authRecordPath, { encoding: "utf8" });
      return deserializeAuthenticationRecord(authRecordContent);
    } catch (error) {
      logger19.getToken.info(formatError(scopes, error));
      throw new CredentialUnavailableError("Cannot load authentication record in Visual Studio Code." + " Ensure you have have Azure Resources Extension installed in VS Code," + " signed into Azure via VS Code, installed the @azure/identity-vscode package," + " and properly configured the extension.");
    }
  }
}
var CommonTenantId = "common", VSCodeClientId = "aebc6443-996d-45c2-90f0-388ff96faa56", logger19, unsupportedTenantIds;
var init_visualStudioCodeCredential = __esm(() => {
  init_logging();
  init_tenantIdUtils();
  init_errors();
  init_tenantIdUtils();
  init_msalClient();
  init_scopeUtils();
  init_msalPlugins();
  init_utils();
  logger19 = credentialLogger("VisualStudioCodeCredential");
  unsupportedTenantIds = {
    adfs: "The VisualStudioCodeCredential does not support authentication with ADFS tenants."
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/brokerCredential.js
class BrokerCredential {
  brokerMsalClient;
  brokerTenantId;
  brokerAdditionallyAllowedTenantIds;
  constructor(options) {
    this.brokerTenantId = resolveTenantId(logger20, options.tenantId);
    this.brokerAdditionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    const msalClientOptions = {
      ...options,
      tokenCredentialOptions: options,
      logger: logger20,
      brokerOptions: {
        enabled: true,
        parentWindowHandle: new Uint8Array(0),
        useDefaultBrokerAccount: true
      }
    };
    this.brokerMsalClient = createMsalClient(DeveloperSignOnClientId, this.brokerTenantId, msalClientOptions);
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.brokerTenantId, newOptions, this.brokerAdditionallyAllowedTenantIds, logger20);
      const arrayScopes = ensureScopes(scopes);
      try {
        return this.brokerMsalClient.getBrokeredToken(arrayScopes, true, {
          ...newOptions,
          disableAutomaticAuthentication: true
        });
      } catch (e) {
        logger20.getToken.info(formatError(arrayScopes, e));
        throw new CredentialUnavailableError("Failed to acquire token using broker authentication", { cause: e });
      }
    });
  }
}
var logger20;
var init_brokerCredential = __esm(() => {
  init_tenantIdUtils();
  init_logging();
  init_scopeUtils();
  init_tracing();
  init_msalClient();
  init_constants();
  init_errors();
  logger20 = credentialLogger("BrokerCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/defaultAzureCredentialFunctions.js
function createDefaultBrokerCredential(options = {}) {
  return new BrokerCredential(options);
}
function createDefaultVisualStudioCodeCredential(options = {}) {
  return new VisualStudioCodeCredential(options);
}
function createDefaultManagedIdentityCredential(options = {}) {
  options.retryOptions ??= {
    maxRetries: 5,
    retryDelayInMs: 800
  };
  options.sendProbeRequest ??= true;
  const managedIdentityClientId = options?.managedIdentityClientId ?? process.env.AZURE_CLIENT_ID;
  const workloadIdentityClientId = options?.workloadIdentityClientId ?? managedIdentityClientId;
  const managedResourceId = options?.managedIdentityResourceId;
  const workloadFile = process.env.AZURE_FEDERATED_TOKEN_FILE;
  const tenantId = options?.tenantId ?? process.env.AZURE_TENANT_ID;
  if (managedResourceId) {
    const managedIdentityResourceIdOptions = {
      ...options,
      resourceId: managedResourceId
    };
    return new ManagedIdentityCredential(managedIdentityResourceIdOptions);
  }
  if (workloadFile && workloadIdentityClientId) {
    const workloadIdentityCredentialOptions = {
      ...options,
      tenantId
    };
    return new ManagedIdentityCredential(workloadIdentityClientId, workloadIdentityCredentialOptions);
  }
  if (managedIdentityClientId) {
    const managedIdentityClientOptions = {
      ...options,
      clientId: managedIdentityClientId
    };
    return new ManagedIdentityCredential(managedIdentityClientOptions);
  }
  return new ManagedIdentityCredential(options);
}
function createDefaultWorkloadIdentityCredential(options) {
  const managedIdentityClientId = options?.managedIdentityClientId ?? process.env.AZURE_CLIENT_ID;
  const workloadIdentityClientId = options?.workloadIdentityClientId ?? managedIdentityClientId;
  const workloadFile = process.env.AZURE_FEDERATED_TOKEN_FILE;
  const tenantId = options?.tenantId ?? process.env.AZURE_TENANT_ID;
  if (workloadFile && workloadIdentityClientId) {
    const workloadIdentityCredentialOptions = {
      ...options,
      tenantId,
      clientId: workloadIdentityClientId,
      tokenFilePath: workloadFile
    };
    return new WorkloadIdentityCredential(workloadIdentityCredentialOptions);
  }
  if (tenantId) {
    const workloadIdentityClientTenantOptions = {
      ...options,
      tenantId
    };
    return new WorkloadIdentityCredential(workloadIdentityClientTenantOptions);
  }
  return new WorkloadIdentityCredential(options);
}
function createDefaultAzureDeveloperCliCredential(options = {}) {
  return new AzureDeveloperCliCredential(options);
}
function createDefaultAzureCliCredential(options = {}) {
  return new AzureCliCredential(options);
}
function createDefaultAzurePowershellCredential(options = {}) {
  return new AzurePowerShellCredential(options);
}
function createDefaultEnvironmentCredential(options = {}) {
  return new EnvironmentCredential(options);
}
var init_defaultAzureCredentialFunctions = __esm(() => {
  init_environmentCredential();
  init_managedIdentityCredential();
  init_workloadIdentityCredential();
  init_azureDeveloperCliCredential();
  init_azureCliCredential();
  init_azurePowerShellCredential();
  init_visualStudioCodeCredential();
  init_brokerCredential();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/defaultAzureCredential.js
class UnavailableDefaultCredential {
  credentialUnavailableErrorMessage;
  credentialName;
  constructor(credentialName4, message) {
    this.credentialName = credentialName4;
    this.credentialUnavailableErrorMessage = message;
  }
  getToken() {
    logger21.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`);
    return Promise.resolve(null);
  }
}
function validateRequiredEnvVars(options) {
  if (options?.requiredEnvVars) {
    const requiredVars = Array.isArray(options.requiredEnvVars) ? options.requiredEnvVars : [options.requiredEnvVars];
    const missing = requiredVars.filter((envVar) => !process.env[envVar]);
    if (missing.length > 0) {
      const errorMessage = `Required environment ${missing.length === 1 ? "variable" : "variables"} '${missing.join(", ")}' for DefaultAzureCredential ${missing.length === 1 ? "is" : "are"} not set or empty.`;
      logger21.warning(errorMessage);
      throw new Error(errorMessage);
    }
  }
}
var logger21, DefaultAzureCredential;
var init_defaultAzureCredential = __esm(() => {
  init_chainedTokenCredential();
  init_logging();
  init_defaultAzureCredentialFunctions();
  logger21 = credentialLogger("DefaultAzureCredential");
  DefaultAzureCredential = class DefaultAzureCredential extends ChainedTokenCredential {
    constructor(options) {
      validateRequiredEnvVars(options);
      const azureTokenCredentials = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : undefined;
      const devCredentialFunctions = [
        createDefaultVisualStudioCodeCredential,
        createDefaultAzureCliCredential,
        createDefaultAzurePowershellCredential,
        createDefaultAzureDeveloperCliCredential,
        createDefaultBrokerCredential
      ];
      const prodCredentialFunctions = [
        createDefaultEnvironmentCredential,
        createDefaultWorkloadIdentityCredential,
        createDefaultManagedIdentityCredential
      ];
      let credentialFunctions = [];
      const validCredentialNames = "EnvironmentCredential, WorkloadIdentityCredential, ManagedIdentityCredential, VisualStudioCodeCredential, AzureCliCredential, AzurePowerShellCredential, AzureDeveloperCliCredential";
      if (azureTokenCredentials) {
        switch (azureTokenCredentials) {
          case "dev":
            credentialFunctions = devCredentialFunctions;
            break;
          case "prod":
            credentialFunctions = prodCredentialFunctions;
            break;
          case "environmentcredential":
            credentialFunctions = [createDefaultEnvironmentCredential];
            break;
          case "workloadidentitycredential":
            credentialFunctions = [createDefaultWorkloadIdentityCredential];
            break;
          case "managedidentitycredential":
            credentialFunctions = [
              () => createDefaultManagedIdentityCredential({ sendProbeRequest: false })
            ];
            break;
          case "visualstudiocodecredential":
            credentialFunctions = [createDefaultVisualStudioCodeCredential];
            break;
          case "azureclicredential":
            credentialFunctions = [createDefaultAzureCliCredential];
            break;
          case "azurepowershellcredential":
            credentialFunctions = [createDefaultAzurePowershellCredential];
            break;
          case "azuredeveloperclicredential":
            credentialFunctions = [createDefaultAzureDeveloperCliCredential];
            break;
          default: {
            const errorMessage = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev' or any of these credentials - ${validCredentialNames}.`;
            logger21.warning(errorMessage);
            throw new Error(errorMessage);
          }
        }
      } else {
        credentialFunctions = [...prodCredentialFunctions, ...devCredentialFunctions];
      }
      const credentials = credentialFunctions.map((createCredentialFn) => {
        try {
          return createCredentialFn(options ?? {});
        } catch (err) {
          logger21.warning(`Skipped ${createCredentialFn.name} because of an error creating the credential: ${err}`);
          return new UnavailableDefaultCredential(createCredentialFn.name, err.message);
        }
      });
      super(...credentials);
    }
  };
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/interactiveBrowserCredential.js
class InteractiveBrowserCredential {
  tenantId;
  additionallyAllowedTenantIds;
  msalClient;
  disableAutomaticAuthentication;
  browserCustomizationOptions;
  loginHint;
  constructor(options) {
    this.tenantId = resolveTenantId(logger22, options.tenantId, options.clientId);
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    const msalClientOptions = {
      ...options,
      tokenCredentialOptions: options,
      logger: logger22
    };
    const ibcNodeOptions = options;
    this.browserCustomizationOptions = ibcNodeOptions.browserCustomizationOptions;
    this.loginHint = ibcNodeOptions.loginHint;
    if (ibcNodeOptions?.brokerOptions?.enabled) {
      if (!ibcNodeOptions?.brokerOptions?.parentWindowHandle) {
        throw new Error("In order to do WAM authentication, `parentWindowHandle` under `brokerOptions` is a required parameter");
      } else {
        msalClientOptions.brokerOptions = {
          enabled: true,
          parentWindowHandle: ibcNodeOptions.brokerOptions.parentWindowHandle,
          legacyEnableMsaPassthrough: ibcNodeOptions.brokerOptions?.legacyEnableMsaPassthrough,
          useDefaultBrokerAccount: ibcNodeOptions.brokerOptions?.useDefaultBrokerAccount
        };
      }
    }
    this.msalClient = createMsalClient(options.clientId ?? DeveloperSignOnClientId, this.tenantId, msalClientOptions);
    this.disableAutomaticAuthentication = options?.disableAutomaticAuthentication;
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger22);
      const arrayScopes = ensureScopes(scopes);
      return this.msalClient.getTokenByInteractiveRequest(arrayScopes, {
        ...newOptions,
        disableAutomaticAuthentication: this.disableAutomaticAuthentication,
        browserCustomizationOptions: this.browserCustomizationOptions,
        loginHint: this.loginHint
      });
    });
  }
  async authenticate(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.authenticate`, options, async (newOptions) => {
      const arrayScopes = ensureScopes(scopes);
      await this.msalClient.getTokenByInteractiveRequest(arrayScopes, {
        ...newOptions,
        disableAutomaticAuthentication: false,
        browserCustomizationOptions: this.browserCustomizationOptions,
        loginHint: this.loginHint
      });
      return this.msalClient.getActiveAccount();
    });
  }
}
var logger22;
var init_interactiveBrowserCredential = __esm(() => {
  init_tenantIdUtils();
  init_logging();
  init_scopeUtils();
  init_tracing();
  init_msalClient();
  init_constants();
  logger22 = credentialLogger("InteractiveBrowserCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/deviceCodeCredential.js
function defaultDeviceCodePromptCallback(deviceCodeInfo) {
  console.log(deviceCodeInfo.message);
}

class DeviceCodeCredential {
  tenantId;
  additionallyAllowedTenantIds;
  disableAutomaticAuthentication;
  msalClient;
  userPromptCallback;
  constructor(options) {
    this.tenantId = options?.tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    const clientId = options?.clientId ?? DeveloperSignOnClientId;
    const tenantId = resolveTenantId(logger23, options?.tenantId, clientId);
    this.userPromptCallback = options?.userPromptCallback ?? defaultDeviceCodePromptCallback;
    this.msalClient = createMsalClient(clientId, tenantId, {
      ...options,
      logger: logger23,
      tokenCredentialOptions: options || {}
    });
    this.disableAutomaticAuthentication = options?.disableAutomaticAuthentication;
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger23);
      const arrayScopes = ensureScopes(scopes);
      return this.msalClient.getTokenByDeviceCode(arrayScopes, this.userPromptCallback, {
        ...newOptions,
        disableAutomaticAuthentication: this.disableAutomaticAuthentication
      });
    });
  }
  async authenticate(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.authenticate`, options, async (newOptions) => {
      const arrayScopes = Array.isArray(scopes) ? scopes : [scopes];
      await this.msalClient.getTokenByDeviceCode(arrayScopes, this.userPromptCallback, {
        ...newOptions,
        disableAutomaticAuthentication: false
      });
      return this.msalClient.getActiveAccount();
    });
  }
}
var logger23;
var init_deviceCodeCredential = __esm(() => {
  init_tenantIdUtils();
  init_logging();
  init_scopeUtils();
  init_tracing();
  init_msalClient();
  init_constants();
  logger23 = credentialLogger("DeviceCodeCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/azurePipelinesCredential.js
class AzurePipelinesCredential {
  clientAssertionCredential;
  identityClient;
  constructor(tenantId, clientId, serviceConnectionId, systemAccessToken, options = {}) {
    if (!clientId) {
      throw new CredentialUnavailableError(`${credentialName4}: is unavailable. clientId is a required parameter.`);
    }
    if (!tenantId) {
      throw new CredentialUnavailableError(`${credentialName4}: is unavailable. tenantId is a required parameter.`);
    }
    if (!serviceConnectionId) {
      throw new CredentialUnavailableError(`${credentialName4}: is unavailable. serviceConnectionId is a required parameter.`);
    }
    if (!systemAccessToken) {
      throw new CredentialUnavailableError(`${credentialName4}: is unavailable. systemAccessToken is a required parameter.`);
    }
    options.loggingOptions = {
      ...options?.loggingOptions,
      additionalAllowedHeaderNames: [
        ...options.loggingOptions?.additionalAllowedHeaderNames ?? [],
        "x-vss-e2eid",
        "x-msedge-ref"
      ]
    };
    this.identityClient = new IdentityClient(options);
    checkTenantId(logger24, tenantId);
    logger24.info(`Invoking AzurePipelinesCredential with tenant ID: ${tenantId}, client ID: ${clientId}, and service connection ID: ${serviceConnectionId}`);
    if (!process.env.SYSTEM_OIDCREQUESTURI) {
      throw new CredentialUnavailableError(`${credentialName4}: is unavailable. Ensure that you're running this task in an Azure Pipeline, so that following missing system variable(s) can be defined- "SYSTEM_OIDCREQUESTURI"`);
    }
    const oidcRequestUrl = `${process.env.SYSTEM_OIDCREQUESTURI}?api-version=${OIDC_API_VERSION}&serviceConnectionId=${serviceConnectionId}`;
    logger24.info(`Invoking ClientAssertionCredential with tenant ID: ${tenantId}, client ID: ${clientId} and service connection ID: ${serviceConnectionId}`);
    this.clientAssertionCredential = new ClientAssertionCredential(tenantId, clientId, this.requestOidcToken.bind(this, oidcRequestUrl, systemAccessToken), options);
  }
  async getToken(scopes, options) {
    if (!this.clientAssertionCredential) {
      const errorMessage = `${credentialName4}: is unavailable. To use Federation Identity in Azure Pipelines, the following parameters are required - 
      tenantId,
      clientId,
      serviceConnectionId,
      systemAccessToken,
      "SYSTEM_OIDCREQUESTURI".      
      See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/azurepipelinescredential/troubleshoot`;
      logger24.error(errorMessage);
      throw new CredentialUnavailableError(errorMessage);
    }
    logger24.info("Invoking getToken() of Client Assertion Credential");
    return this.clientAssertionCredential.getToken(scopes, options);
  }
  async requestOidcToken(oidcRequestUrl, systemAccessToken) {
    logger24.info("Requesting OIDC token from Azure Pipelines...");
    logger24.info(oidcRequestUrl);
    const request = createPipelineRequest2({
      url: oidcRequestUrl,
      method: "POST",
      headers: createHttpHeaders2({
        "Content-Type": "application/json",
        Authorization: `Bearer ${systemAccessToken}`,
        "X-TFS-FedAuthRedirect": "Suppress"
      })
    });
    const response = await this.identityClient.sendRequest(request);
    return handleOidcResponse(response);
  }
}
function handleOidcResponse(response) {
  const text = response.bodyAsText;
  if (!text) {
    logger24.error(`${credentialName4}: Authentication Failed. Received null token from OIDC request. Response status- ${response.status}. Complete response - ${JSON.stringify(response)}`);
    throw new AuthenticationError(response.status, {
      error: `${credentialName4}: Authentication Failed. Received null token from OIDC request.`,
      error_description: `${JSON.stringify(response)}. See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/azurepipelinescredential/troubleshoot`
    });
  }
  try {
    const result = JSON.parse(text);
    if (result?.oidcToken) {
      return result.oidcToken;
    } else {
      const errorMessage = `${credentialName4}: Authentication Failed. oidcToken field not detected in the response.`;
      let errorDescription = ``;
      if (response.status !== 200) {
        errorDescription = `Response body = ${text}. Response Headers ["x-vss-e2eid"] = ${response.headers.get("x-vss-e2eid")} and ["x-msedge-ref"] = ${response.headers.get("x-msedge-ref")}. See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/azurepipelinescredential/troubleshoot`;
      }
      logger24.error(errorMessage);
      logger24.error(errorDescription);
      throw new AuthenticationError(response.status, {
        error: errorMessage,
        error_description: errorDescription
      });
    }
  } catch (e) {
    const errorDetails = `${credentialName4}: Authentication Failed. oidcToken field not detected in the response.`;
    logger24.error(`Response from service = ${text}, Response Headers ["x-vss-e2eid"] = ${response.headers.get("x-vss-e2eid")} 
      and ["x-msedge-ref"] = ${response.headers.get("x-msedge-ref")}, error message = ${e.message}`);
    logger24.error(errorDetails);
    throw new AuthenticationError(response.status, {
      error: errorDetails,
      error_description: `Response = ${text}. Response headers ["x-vss-e2eid"] = ${response.headers.get("x-vss-e2eid")} and ["x-msedge-ref"] =  ${response.headers.get("x-msedge-ref")}. See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/azurepipelinescredential/troubleshoot`
    });
  }
}
var credentialName4 = "AzurePipelinesCredential", logger24, OIDC_API_VERSION = "7.1";
var init_azurePipelinesCredential = __esm(() => {
  init_errors();
  init_esm6();
  init_clientAssertionCredential();
  init_identityClient();
  init_tenantIdUtils();
  init_logging();
  logger24 = credentialLogger(credentialName4);
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/authorizationCodeCredential.js
class AuthorizationCodeCredential {
  msalClient;
  disableAutomaticAuthentication;
  authorizationCode;
  redirectUri;
  tenantId;
  additionallyAllowedTenantIds;
  clientSecret;
  constructor(tenantId, clientId, clientSecretOrAuthorizationCode, authorizationCodeOrRedirectUri, redirectUriOrOptions, options) {
    checkTenantId(logger25, tenantId);
    this.clientSecret = clientSecretOrAuthorizationCode;
    if (typeof redirectUriOrOptions === "string") {
      this.authorizationCode = authorizationCodeOrRedirectUri;
      this.redirectUri = redirectUriOrOptions;
    } else {
      this.authorizationCode = clientSecretOrAuthorizationCode;
      this.redirectUri = authorizationCodeOrRedirectUri;
      this.clientSecret = undefined;
      options = redirectUriOrOptions;
    }
    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(options?.additionallyAllowedTenants);
    this.msalClient = createMsalClient(clientId, tenantId, {
      ...options,
      logger: logger25,
      tokenCredentialOptions: options ?? {}
    });
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${this.constructor.name}.getToken`, options, async (newOptions) => {
      const tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds);
      newOptions.tenantId = tenantId;
      const arrayScopes = ensureScopes(scopes);
      return this.msalClient.getTokenByAuthorizationCode(arrayScopes, this.redirectUri, this.authorizationCode, this.clientSecret, {
        ...newOptions,
        disableAutomaticAuthentication: this.disableAutomaticAuthentication
      });
    });
  }
}
var logger25;
var init_authorizationCodeCredential = __esm(() => {
  init_tenantIdUtils();
  init_tenantIdUtils();
  init_logging();
  init_scopeUtils();
  init_tracing();
  init_msalClient();
  logger25 = credentialLogger("AuthorizationCodeCredential");
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/credentials/onBehalfOfCredential.js
import { createHash as createHash2 } from "crypto";
import { readFile as readFile4 } from "fs/promises";

class OnBehalfOfCredential {
  tenantId;
  additionallyAllowedTenantIds;
  msalClient;
  sendCertificateChain;
  certificatePath;
  clientSecret;
  userAssertionToken;
  clientAssertion;
  constructor(options) {
    const { clientSecret } = options;
    const { certificatePath, sendCertificateChain } = options;
    const { getAssertion } = options;
    const { tenantId, clientId, userAssertionToken, additionallyAllowedTenants: additionallyAllowedTenantIds } = options;
    if (!tenantId) {
      throw new CredentialUnavailableError(`${credentialName5}: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    }
    if (!clientId) {
      throw new CredentialUnavailableError(`${credentialName5}: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    }
    if (!clientSecret && !certificatePath && !getAssertion) {
      throw new CredentialUnavailableError(`${credentialName5}: You must provide one of clientSecret, certificatePath, or a getAssertion callback but none were provided. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    }
    if (!userAssertionToken) {
      throw new CredentialUnavailableError(`${credentialName5}: userAssertionToken is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    }
    this.certificatePath = certificatePath;
    this.clientSecret = clientSecret;
    this.userAssertionToken = userAssertionToken;
    this.sendCertificateChain = sendCertificateChain;
    this.clientAssertion = getAssertion;
    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(additionallyAllowedTenantIds);
    this.msalClient = createMsalClient(clientId, this.tenantId, {
      ...options,
      logger: logger26,
      tokenCredentialOptions: options
    });
  }
  async getToken(scopes, options = {}) {
    return tracingClient.withSpan(`${credentialName5}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(this.tenantId, newOptions, this.additionallyAllowedTenantIds, logger26);
      const arrayScopes = ensureScopes(scopes);
      if (this.certificatePath) {
        const clientCertificate = await this.buildClientCertificate(this.certificatePath);
        return this.msalClient.getTokenOnBehalfOf(arrayScopes, this.userAssertionToken, clientCertificate, newOptions);
      } else if (this.clientSecret) {
        return this.msalClient.getTokenOnBehalfOf(arrayScopes, this.userAssertionToken, this.clientSecret, options);
      } else if (this.clientAssertion) {
        return this.msalClient.getTokenOnBehalfOf(arrayScopes, this.userAssertionToken, this.clientAssertion, options);
      } else {
        throw new Error("Expected either clientSecret or certificatePath or clientAssertion to be defined.");
      }
    });
  }
  async buildClientCertificate(certificatePath) {
    try {
      const parts = await this.parseCertificate({ certificatePath }, this.sendCertificateChain);
      return {
        thumbprint: parts.thumbprint,
        thumbprintSha256: parts.thumbprintSha256,
        privateKey: parts.certificateContents,
        x5c: parts.x5c
      };
    } catch (error) {
      logger26.info(formatError("", error));
      throw error;
    }
  }
  async parseCertificate(configuration, sendCertificateChain) {
    const certificatePath = configuration.certificatePath;
    const certificateContents = await readFile4(certificatePath, "utf8");
    const x5c = sendCertificateChain ? certificateContents : undefined;
    const certificatePattern = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g;
    const publicKeys = [];
    let match;
    do {
      match = certificatePattern.exec(certificateContents);
      if (match) {
        publicKeys.push(match[3]);
      }
    } while (match);
    if (publicKeys.length === 0) {
      throw new Error("The file at the specified path does not contain a PEM-encoded certificate.");
    }
    const thumbprint = createHash2("sha1").update(Buffer.from(publicKeys[0], "base64")).digest("hex").toUpperCase();
    const thumbprintSha256 = createHash2("sha256").update(Buffer.from(publicKeys[0], "base64")).digest("hex").toUpperCase();
    return {
      certificateContents,
      thumbprintSha256,
      thumbprint,
      x5c
    };
  }
}
var credentialName5 = "OnBehalfOfCredential", logger26;
var init_onBehalfOfCredential = __esm(() => {
  init_msalClient();
  init_logging();
  init_tenantIdUtils();
  init_errors();
  init_scopeUtils();
  init_tracing();
  logger26 = credentialLogger(credentialName5);
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/tokenProvider.js
function getBearerTokenProvider(credential, scopes, options) {
  const { abortSignal, tracingOptions } = options || {};
  const pipeline = createEmptyPipeline2();
  pipeline.addPolicy(bearerTokenAuthenticationPolicy({ credential, scopes }));
  async function getRefreshedToken() {
    const res = await pipeline.sendRequest({
      sendRequest: (request) => Promise.resolve({
        request,
        status: 200,
        headers: request.headers
      })
    }, createPipelineRequest2({
      url: "https://example.com",
      abortSignal,
      tracingOptions
    }));
    const accessToken = res.headers.get("authorization")?.split(" ")[1];
    if (!accessToken) {
      throw new Error("Failed to get access token");
    }
    return accessToken;
  }
  return getRefreshedToken;
}
var init_tokenProvider = __esm(() => {
  init_esm6();
});

// node_modules/.bun/@azure+identity@4.13.1/node_modules/@azure/identity/dist/esm/index.js
function getDefaultAzureCredential() {
  return new DefaultAzureCredential;
}
var init_esm8 = __esm(() => {
  init_defaultAzureCredential();
  init_errors();
  init_utils();
  init_chainedTokenCredential();
  init_clientSecretCredential();
  init_defaultAzureCredential();
  init_environmentCredential();
  init_clientCertificateCredential();
  init_clientAssertionCredential();
  init_azureCliCredential();
  init_azureDeveloperCliCredential();
  init_interactiveBrowserCredential();
  init_managedIdentityCredential();
  init_deviceCodeCredential();
  init_azurePipelinesCredential();
  init_authorizationCodeCredential();
  init_azurePowerShellCredential();
  init_usernamePasswordCredential();
  init_visualStudioCodeCredential();
  init_onBehalfOfCredential();
  init_workloadIdentityCredential();
  init_logging();
  init_constants();
  init_tokenProvider();
  init_consumer();
});
init_esm8();

export {
  useIdentityPlugin,
  serializeAuthenticationRecord,
  logger,
  getDefaultAzureCredential,
  getBearerTokenProvider,
  deserializeAuthenticationRecord,
  WorkloadIdentityCredential,
  VisualStudioCodeCredential,
  UsernamePasswordCredential,
  OnBehalfOfCredential,
  ManagedIdentityCredential,
  InteractiveBrowserCredential,
  EnvironmentCredential,
  DeviceCodeCredential,
  DefaultAzureCredential,
  CredentialUnavailableErrorName,
  CredentialUnavailableError,
  ClientSecretCredential,
  ClientCertificateCredential,
  ClientAssertionCredential,
  ChainedTokenCredential,
  AzurePowerShellCredential,
  AzurePipelinesCredential,
  AzureDeveloperCliCredential,
  AzureCliCredential,
  AzureAuthorityHosts,
  AuthorizationCodeCredential,
  AuthenticationRequiredError,
  AuthenticationErrorName,
  AuthenticationError,
  AggregateAuthenticationErrorName,
  AggregateAuthenticationError
};
