// @bun
import {
  McpServerConfigSchema,
  init_json,
  init_jsonRead,
  init_types,
  readJSONLFile,
  safeParseJSON,
  stripBOM
} from "./chunk-pz9t24tq.js";
import {
  expandPath,
  init_path,
  normalizePathForConfigKey
} from "./chunk-4efha55s.js";
import {
  getAWSClientProxyConfig,
  getProxyFetchOptions,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import {
  count,
  getAgentId,
  getParentSessionId as getParentSessionId2,
  getTeamName,
  init_array,
  init_lockfile,
  init_teammate,
  isTeammate,
  lock,
  lockSync,
  uniq
} from "./chunk-zwarn9h7.js";
import {
  sanitizePath
} from "./chunk-et54q618.js";
import {
  EXTERNAL_PERMISSION_MODES,
  PERMISSION_MODES,
  init_permissions
} from "./chunk-pe9b769s.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import {
  detectVcs,
  getLinuxDistroInfo,
  getPlatform,
  getWslVersion,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  getAncestorCommandsAsync,
  init_genericProcessUtils
} from "./chunk-gnw2dwca.js";
import {
  exports_common,
  init_common
} from "./chunk-wbmn1xar.js";
import {
  init_normalization,
  normalizeNameForMCP
} from "./chunk-3c25bcsw.js";
import {
  JETBRAINS_IDES,
  env,
  getGlobalClaudeFile,
  getHostPlatformForAnalytics,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-xhesahm0.js";
import {
  ALL_OAUTH_SCOPES,
  CLAUDE_AI_INFERENCE_SCOPE,
  CLAUDE_AI_OAUTH_SCOPES,
  CLAUDE_AI_PROFILE_SCOPE,
  OAUTH_BETA_HEADER,
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_v4,
  v4_default
} from "./chunk-8g747a8x.js";
import {
  exports_external,
  toJSONSchema
} from "./chunk-d7886r6a.js";
import {
  require_src as require_src5
} from "./chunk-djs11qd6.js";
import {
  require_src as require_src2,
  require_src1 as require_src3,
  require_src2 as require_src4
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  init_startupProfiler,
  profileCheckpoint
} from "./chunk-x5hyyhqf.js";
import {
  init_source,
  source_default
} from "./chunk-er1s76c9.js";
import {
  init_analytics,
  logEvent,
  stripProtoFields
} from "./chunk-f2mhrmww.js";
import {
  dirIsInGitRepo,
  findCanonicalGitRoot,
  getRepoRemoteHash,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import {
  init_memoize as init_memoize2,
  memoizeWithTTLAsync
} from "./chunk-95xve7f8.js";
import {
  execFileNoThrow,
  execFileNoThrowWithCwd,
  execSyncWithDefaults_DEPRECATED,
  init_execFileNoThrow,
  init_execFileNoThrowPortable
} from "./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  getEssentialTrafficOnlyReason,
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  isTelemetryDisabled,
  logError
} from "./chunk-w5ahy59y.js";
import {
  execa,
  execaSync,
  init_execa
} from "./chunk-5z28bqne.js";
import {
  ConfigParseError,
  _assignValue_default,
  _baseAssignValue_default,
  _cloneBuffer_default,
  _cloneTypedArray_default,
  _copyArray_default,
  _copyObject_default,
  _defineProperty_default,
  _getAllKeysIn_default,
  _getPrototype_default,
  _initCloneObject_default,
  clone,
  errorMessage,
  getErrnoCode,
  getFsImplementation,
  init__assignValue,
  init__baseAssignValue,
  init__cloneBuffer,
  init__cloneTypedArray,
  init__copyArray,
  init__copyObject,
  init__defineProperty,
  init__getAllKeysIn,
  init__getPrototype,
  init__initCloneObject,
  init_cleanupRegistry,
  init_cloneDeep,
  init_debug,
  init_errors,
  init_fsOperations,
  init_keysIn,
  init_slowOperations,
  isDebugToStdErr,
  isENOENT,
  isFsInaccessible,
  jsonParse,
  jsonStringify,
  keysIn_default,
  logAntError,
  logForDebugging,
  registerCleanup,
  safeResolvePath,
  toError,
  writeFileSync_DEPRECATED
} from "./chunk-rpbc3b7k.js";
import {
  _Stack_default,
  _arrayMap_default,
  _baseGet_default,
  _baseIsEqual_default,
  _baseIteratee_default,
  _castPath_default,
  _isIndex_default,
  _toKey_default,
  createSignal,
  getAllowedSettingSources,
  getApiKeyFromFd,
  getCachedParsedFile,
  getCachedSettingsForSource,
  getClientType,
  getFlagSettingsInline,
  getFlagSettingsPath,
  getIsInteractive,
  getIsNonInteractiveSession,
  getKairosActive,
  getMainLoopModelOverride,
  getModelStrings,
  getOauthTokenFromFd,
  getOriginalCwd,
  getParentSessionId,
  getPluginSettingsBase,
  getProjectRoot,
  getSdkBetas,
  getSessionId,
  getSessionSettingsCache,
  getSessionTrustAccepted,
  getUseCoworkPlugins,
  identity_default,
  init__Stack,
  init__arrayMap,
  init__baseGet,
  init__baseIsEqual,
  init__baseIteratee,
  init__castPath,
  init__isIndex,
  init__toKey,
  init_identity,
  init_isArguments,
  init_isArray,
  init_isArrayLike,
  init_isBuffer,
  init_isTypedArray,
  init_settingsCache,
  init_signal,
  init_state,
  isArguments_default,
  isArrayLike_default,
  isArray_default,
  isBuffer_default,
  isTypedArray_default,
  preferThirdPartyAuthentication,
  resetSettingsCache,
  setApiKeyFromFd,
  setCachedParsedFile,
  setCachedSettingsForSource,
  setHasUnknownModelCost,
  setModelStrings,
  setOauthTokenFromFd,
  setSessionSettingsCache
} from "./chunk-j5xzpm59.js";
import {
  init_isObjectLike,
  isObjectLike_default
} from "./chunk-50dgek10.js";
import {
  init_sdk
} from "./chunk-d3bk85eq.js";
import {
  Anthropic
} from "./chunk-cw8rngb2.js";
import {
  getAWSRegion,
  getClaudeConfigHomeDir,
  getVertexRegionForModel,
  init_envUtils,
  isBareMode,
  isEnvDefinedFalsy,
  isEnvTruthy,
  isRunningOnHomespace
} from "./chunk-hxhwzgnn.js";
import {
  eq_default,
  init_eq,
  init_isFunction,
  init_memoize,
  isFunction_default,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  _baseGetTag_default,
  init__baseGetTag,
  init_isObject,
  isObject_default
} from "./chunk-cgm6758j.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/sequential.ts
function sequential(fn) {
  const queue = [];
  let processing = false;
  async function processQueue() {
    if (processing)
      return;
    if (queue.length === 0)
      return;
    processing = true;
    while (queue.length > 0) {
      const { args, resolve, reject, context } = queue.shift();
      try {
        const result = await fn.apply(context, args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    processing = false;
    if (queue.length > 0) {
      processQueue();
    }
  }
  return function(...args) {
    return new Promise((resolve, reject) => {
      queue.push({ args, resolve, reject, context: this });
      processQueue();
    });
  };
}
var init_sequential = () => {};

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq_default(object[key], value) || value === undefined && !(key in object)) {
    _baseAssignValue_default(object, key, value);
  }
}
var _assignMergeValue_default;
var init__assignMergeValue = __esm(() => {
  init__baseAssignValue();
  init_eq();
  _assignMergeValue_default = assignMergeValue;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor_default;
var init__createBaseFor = __esm(() => {
  _createBaseFor_default = createBaseFor;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseFor.js
var baseFor, _baseFor_default;
var init__baseFor = __esm(() => {
  init__createBaseFor();
  baseFor = _createBaseFor_default();
  _baseFor_default = baseFor;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default;
var init_isArrayLikeObject = __esm(() => {
  init_isArrayLike();
  init_isObjectLike();
  isArrayLikeObject_default = isArrayLikeObject;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/isPlainObject.js
function isPlainObject(value) {
  if (!isObjectLike_default(value) || _baseGetTag_default(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var objectTag = "[object Object]", funcProto, objectProto, funcToString, hasOwnProperty, objectCtorString, isPlainObject_default;
var init_isPlainObject = __esm(() => {
  init__baseGetTag();
  init__getPrototype();
  init_isObjectLike();
  funcProto = Function.prototype;
  objectProto = Object.prototype;
  funcToString = funcProto.toString;
  hasOwnProperty = objectProto.hasOwnProperty;
  objectCtorString = funcToString.call(Object);
  isPlainObject_default = isPlainObject;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet_default;
var init__safeGet = __esm(() => {
  _safeGet_default = safeGet;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return _copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default;
var init_toPlainObject = __esm(() => {
  init__copyObject();
  init_keysIn();
  toPlainObject_default = toPlainObject;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet_default(object, key), srcValue = _safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    _assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = _copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = _initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  _assignMergeValue_default(object, key, newValue);
}
var _baseMergeDeep_default;
var init__baseMergeDeep = __esm(() => {
  init__assignMergeValue();
  init__cloneBuffer();
  init__cloneTypedArray();
  init__copyArray();
  init__initCloneObject();
  init_isArguments();
  init_isArray();
  init_isArrayLikeObject();
  init_isBuffer();
  init_isFunction();
  init_isObject();
  init_isPlainObject();
  init_isTypedArray();
  init__safeGet();
  init_toPlainObject();
  _baseMergeDeep_default = baseMergeDeep;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor_default(source, function(srcValue, key) {
    stack || (stack = new _Stack_default);
    if (isObject_default(srcValue)) {
      _baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(_safeGet_default(object, key), srcValue, key + "", object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var _baseMerge_default;
var init__baseMerge = __esm(() => {
  init__Stack();
  init__assignMergeValue();
  init__baseFor();
  init__baseMergeDeep();
  init_isObject();
  init_keysIn();
  init__safeGet();
  _baseMerge_default = baseMerge;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply_default;
var init__apply = __esm(() => {
  _apply_default = apply;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply_default(func, this, otherArgs);
  };
}
var nativeMax, _overRest_default;
var init__overRest = __esm(() => {
  init__apply();
  nativeMax = Math.max;
  _overRest_default = overRest;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default;
var init_constant = __esm(() => {
  constant_default = constant;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseSetToString.js
var baseSetToString, _baseSetToString_default;
var init__baseSetToString = __esm(() => {
  init_constant();
  init__defineProperty();
  init_identity();
  baseSetToString = !_defineProperty_default ? identity_default : function(func, string) {
    return _defineProperty_default(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant_default(string),
      writable: true
    });
  };
  _baseSetToString_default = baseSetToString;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
function shortOut(func) {
  var count2 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count2 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count2 = 0;
    }
    return func.apply(undefined, arguments);
  };
}
var HOT_COUNT = 800, HOT_SPAN = 16, nativeNow, _shortOut_default;
var init__shortOut = __esm(() => {
  nativeNow = Date.now;
  _shortOut_default = shortOut;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_setToString.js
var setToString, _setToString_default;
var init__setToString = __esm(() => {
  init__baseSetToString();
  init__shortOut();
  setToString = _shortOut_default(_baseSetToString_default);
  _setToString_default = setToString;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return _setToString_default(_overRest_default(func, start, identity_default), func + "");
}
var _baseRest_default;
var init__baseRest = __esm(() => {
  init_identity();
  init__overRest();
  init__setToString();
  _baseRest_default = baseRest;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && _isIndex_default(index, object.length) : type == "string" && (index in object)) {
    return eq_default(object[index], value);
  }
  return false;
}
var _isIterateeCall_default;
var init__isIterateeCall = __esm(() => {
  init_eq();
  init_isArrayLike();
  init__isIndex();
  init_isObject();
  _isIterateeCall_default = isIterateeCall;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return _baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
    if (guard && _isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner_default;
var init__createAssigner = __esm(() => {
  init__baseRest();
  init__isIterateeCall();
  _createAssigner_default = createAssigner;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/mergeWith.js
var mergeWith, mergeWith_default;
var init_mergeWith = __esm(() => {
  init__baseMerge();
  init__createAssigner();
  mergeWith = _createAssigner_default(function(object, source, srcIndex, customizer) {
    _baseMerge_default(object, source, srcIndex, customizer);
  });
  mergeWith_default = mergeWith;
});

// src/utils/fileRead.ts
function detectEncodingForResolvedPath(resolvedPath) {
  const { buffer, bytesRead } = getFsImplementation().readSync(resolvedPath, {
    length: 4096
  });
  if (bytesRead === 0) {
    return "utf8";
  }
  if (bytesRead >= 2) {
    if (buffer[0] === 255 && buffer[1] === 254)
      return "utf16le";
  }
  if (bytesRead >= 3 && buffer[0] === 239 && buffer[1] === 187 && buffer[2] === 191) {
    return "utf8";
  }
  return "utf8";
}
function detectLineEndingsForString(content) {
  let crlfCount = 0;
  let lfCount = 0;
  for (let i = 0;i < content.length; i++) {
    if (content[i] === `
`) {
      if (i > 0 && content[i - 1] === "\r") {
        crlfCount++;
      } else {
        lfCount++;
      }
    }
  }
  return crlfCount > lfCount ? "CRLF" : "LF";
}
function readFileSyncWithMetadata(filePath) {
  const fs = getFsImplementation();
  const { resolvedPath, isSymlink } = safeResolvePath(fs, filePath);
  if (isSymlink) {
    logForDebugging(`Reading through symlink: ${filePath} -> ${resolvedPath}`);
  }
  const encoding = detectEncodingForResolvedPath(resolvedPath);
  const raw = fs.readFileSync(resolvedPath, { encoding });
  const lineEndings = detectLineEndingsForString(raw.slice(0, 4096));
  return {
    content: raw.replaceAll(`\r
`, `
`),
    encoding,
    lineEndings
  };
}
function readFileSync(filePath) {
  return readFileSyncWithMetadata(filePath).content;
}
var init_fileRead = __esm(() => {
  init_debug();
  init_fsOperations();
});

// src/services/remoteManagedSettings/syncCacheState.ts
import { join } from "path";
function setSessionCache(value) {
  sessionCache = value;
}
function resetSyncCache() {
  sessionCache = null;
  eligible = undefined;
}
function setEligibility(v) {
  eligible = v;
  return v;
}
function getSettingsPath() {
  return join(getClaudeConfigHomeDir(), SETTINGS_FILENAME);
}
function loadSettings() {
  try {
    const content = readFileSync(getSettingsPath());
    const data = jsonParse(stripBOM(content));
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}
function getRemoteManagedSettingsSyncFromCache() {
  if (eligible !== true)
    return null;
  if (sessionCache)
    return sessionCache;
  const cachedSettings = loadSettings();
  if (cachedSettings) {
    sessionCache = cachedSettings;
    resetSettingsCache();
    return cachedSettings;
  }
  return null;
}
var SETTINGS_FILENAME = "remote-settings.json", sessionCache = null, eligible;
var init_syncCacheState = __esm(() => {
  init_envUtils();
  init_fileRead();
  init_jsonRead();
  init_settingsCache();
  init_slowOperations();
});

// node_modules/.bun/dom-mutator@0.6.0/node_modules/dom-mutator/dist/dom-mutator.esm.js
function getObserverInit(attr) {
  return attr === "html" ? {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  } : {
    childList: false,
    subtree: false,
    attributes: true,
    attributeFilter: [attr]
  };
}
function getElementRecord(element) {
  var record = elements.get(element);
  if (!record) {
    record = {
      element,
      attributes: {}
    };
    elements.set(element, record);
  }
  return record;
}
function createElementPropertyRecord(el, attr, getCurrentValue, setValue, mutationRunner) {
  var currentValue = getCurrentValue(el);
  var record = {
    isDirty: false,
    originalValue: currentValue,
    virtualValue: currentValue,
    mutations: [],
    el,
    _positionTimeout: null,
    observer: new MutationObserver(function() {
      if (attr === "position" && record._positionTimeout)
        return;
      else if (attr === "position")
        record._positionTimeout = setTimeout(function() {
          record._positionTimeout = null;
        }, 1000);
      var currentValue2 = getCurrentValue(el);
      if (attr === "position" && currentValue2.parentNode === record.virtualValue.parentNode && currentValue2.insertBeforeNode === record.virtualValue.insertBeforeNode)
        return;
      if (currentValue2 === record.virtualValue)
        return;
      record.originalValue = currentValue2;
      mutationRunner(record);
    }),
    mutationRunner,
    setValue,
    getCurrentValue
  };
  if (attr === "position" && el.parentNode) {
    record.observer.observe(el.parentNode, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  } else {
    record.observer.observe(el, getObserverInit(attr));
  }
  return record;
}
function queueIfNeeded(val, record) {
  var currentVal = record.getCurrentValue(record.el);
  record.virtualValue = val;
  if (val && typeof val !== "string") {
    if (!currentVal || val.parentNode !== currentVal.parentNode || val.insertBeforeNode !== currentVal.insertBeforeNode) {
      record.isDirty = true;
      runDOMUpdates();
    }
  } else if (val !== currentVal) {
    record.isDirty = true;
    runDOMUpdates();
  }
}
function htmlMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function(m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(getTransformedHTML(val), record);
}
function classMutationRunner(record) {
  var val = new Set(record.originalValue.split(/\s+/).filter(Boolean));
  record.mutations.forEach(function(m) {
    return m.mutate(val);
  });
  queueIfNeeded(Array.from(val).filter(Boolean).join(" "), record);
}
function attrMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function(m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(val, record);
}
function _loadDOMNodes(_ref) {
  var { parentSelector, insertBeforeSelector } = _ref;
  var parentNode = document.querySelector(parentSelector);
  if (!parentNode)
    return null;
  var insertBeforeNode = insertBeforeSelector ? document.querySelector(insertBeforeSelector) : null;
  if (insertBeforeSelector && !insertBeforeNode)
    return null;
  return {
    parentNode,
    insertBeforeNode
  };
}
function positionMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function(m) {
    var selectors = m.mutate();
    var newNodes = _loadDOMNodes(selectors);
    val = newNodes || val;
  });
  queueIfNeeded(val, record);
}
function getElementHTMLRecord(element) {
  var elementRecord = getElementRecord(element);
  if (!elementRecord.html) {
    elementRecord.html = createElementPropertyRecord(element, "html", getHTMLValue, setHTMLValue, htmlMutationRunner);
  }
  return elementRecord.html;
}
function getElementPositionRecord(element) {
  var elementRecord = getElementRecord(element);
  if (!elementRecord.position) {
    elementRecord.position = createElementPropertyRecord(element, "position", getElementPosition, setElementPosition, positionMutationRunner);
  }
  return elementRecord.position;
}
function getElementClassRecord(el) {
  var elementRecord = getElementRecord(el);
  if (!elementRecord.classes) {
    elementRecord.classes = createElementPropertyRecord(el, "class", getClassValue, setClassValue, classMutationRunner);
  }
  return elementRecord.classes;
}
function getElementAttributeRecord(el, attr) {
  var elementRecord = getElementRecord(el);
  if (!elementRecord.attributes[attr]) {
    elementRecord.attributes[attr] = createElementPropertyRecord(el, attr, getAttrValue(attr), setAttrValue(attr), attrMutationRunner);
  }
  return elementRecord.attributes[attr];
}
function deleteElementPropertyRecord(el, attr) {
  var element = elements.get(el);
  if (!element)
    return;
  if (attr === "html") {
    var _element$html, _element$html$observe;
    (_element$html = element.html) == null || (_element$html$observe = _element$html.observer) == null || _element$html$observe.disconnect();
    delete element.html;
  } else if (attr === "class") {
    var _element$classes, _element$classes$obse;
    (_element$classes = element.classes) == null || (_element$classes$obse = _element$classes.observer) == null || _element$classes$obse.disconnect();
    delete element.classes;
  } else if (attr === "position") {
    var _element$position, _element$position$obs;
    (_element$position = element.position) == null || (_element$position$obs = _element$position.observer) == null || _element$position$obs.disconnect();
    delete element.position;
  } else {
    var _element$attributes, _element$attributes$a, _element$attributes$a2;
    (_element$attributes = element.attributes) == null || (_element$attributes$a = _element$attributes[attr]) == null || (_element$attributes$a2 = _element$attributes$a.observer) == null || _element$attributes$a2.disconnect();
    delete element.attributes[attr];
  }
}
function getTransformedHTML(html) {
  if (!transformContainer) {
    transformContainer = document.createElement("div");
  }
  transformContainer.innerHTML = html;
  return transformContainer.innerHTML;
}
function setPropertyValue(el, attr, m) {
  if (!m.isDirty)
    return;
  m.isDirty = false;
  var val = m.virtualValue;
  if (!m.mutations.length) {
    deleteElementPropertyRecord(el, attr);
  }
  m.setValue(el, val);
}
function setValue(m, el) {
  m.html && setPropertyValue(el, "html", m.html);
  m.classes && setPropertyValue(el, "class", m.classes);
  m.position && setPropertyValue(el, "position", m.position);
  Object.keys(m.attributes).forEach(function(attr) {
    setPropertyValue(el, attr, m.attributes[attr]);
  });
}
function runDOMUpdates() {
  elements.forEach(setValue);
}
function startMutating(mutation, element) {
  var record = null;
  if (mutation.kind === "html") {
    record = getElementHTMLRecord(element);
  } else if (mutation.kind === "class") {
    record = getElementClassRecord(element);
  } else if (mutation.kind === "attribute") {
    record = getElementAttributeRecord(element, mutation.attribute);
  } else if (mutation.kind === "position") {
    record = getElementPositionRecord(element);
  }
  if (!record)
    return;
  record.mutations.push(mutation);
  record.mutationRunner(record);
}
function stopMutating(mutation, el) {
  var record = null;
  if (mutation.kind === "html") {
    record = getElementHTMLRecord(el);
  } else if (mutation.kind === "class") {
    record = getElementClassRecord(el);
  } else if (mutation.kind === "attribute") {
    record = getElementAttributeRecord(el, mutation.attribute);
  } else if (mutation.kind === "position") {
    record = getElementPositionRecord(el);
  }
  if (!record)
    return;
  var index = record.mutations.indexOf(mutation);
  if (index !== -1)
    record.mutations.splice(index, 1);
  record.mutationRunner(record);
}
function refreshElementsSet(mutation) {
  if (mutation.kind === "position" && mutation.elements.size === 1)
    return;
  var existingElements = new Set(mutation.elements);
  var matchingElements = document.querySelectorAll(mutation.selector);
  matchingElements.forEach(function(el) {
    if (!existingElements.has(el)) {
      mutation.elements.add(el);
      startMutating(mutation, el);
    }
  });
}
function revertMutation(mutation) {
  mutation.elements.forEach(function(el) {
    return stopMutating(mutation, el);
  });
  mutation.elements.clear();
  mutations["delete"](mutation);
}
function refreshAllElementSets() {
  mutations.forEach(refreshElementsSet);
}
function connectGlobalObserver() {
  if (typeof document === "undefined")
    return;
  if (!observer) {
    observer = new MutationObserver(function() {
      refreshAllElementSets();
    });
  }
  refreshAllElementSets();
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
}
function newMutation(m) {
  if (typeof document === "undefined")
    return nullController;
  mutations.add(m);
  refreshElementsSet(m);
  return {
    revert: function revert2() {
      revertMutation(m);
    }
  };
}
function html(selector, mutate) {
  return newMutation({
    kind: "html",
    elements: new Set,
    mutate,
    selector
  });
}
function position(selector, mutate) {
  return newMutation({
    kind: "position",
    elements: new Set,
    mutate,
    selector
  });
}
function classes(selector, mutate) {
  return newMutation({
    kind: "class",
    elements: new Set,
    mutate,
    selector
  });
}
function attribute(selector, attribute2, mutate) {
  if (!validAttributeName.test(attribute2))
    return nullController;
  if (attribute2 === "class" || attribute2 === "className") {
    return classes(selector, function(classnames) {
      var mutatedClassnames = mutate(Array.from(classnames).join(" "));
      classnames.clear();
      if (!mutatedClassnames)
        return;
      mutatedClassnames.split(/\s+/g).filter(Boolean).forEach(function(c) {
        return classnames.add(c);
      });
    });
  }
  return newMutation({
    kind: "attribute",
    attribute: attribute2,
    elements: new Set,
    mutate,
    selector
  });
}
function declarative(_ref2) {
  var { selector, action, value, attribute: attr, parentSelector, insertBeforeSelector } = _ref2;
  if (attr === "html") {
    if (action === "append") {
      return html(selector, function(val) {
        return val + (value != null ? value : "");
      });
    } else if (action === "set") {
      return html(selector, function() {
        return value != null ? value : "";
      });
    }
  } else if (attr === "class") {
    if (action === "append") {
      return classes(selector, function(val) {
        if (value)
          val.add(value);
      });
    } else if (action === "remove") {
      return classes(selector, function(val) {
        if (value)
          val["delete"](value);
      });
    } else if (action === "set") {
      return classes(selector, function(val) {
        val.clear();
        if (value)
          val.add(value);
      });
    }
  } else if (attr === "position") {
    if (action === "set" && parentSelector) {
      return position(selector, function() {
        return {
          insertBeforeSelector,
          parentSelector
        };
      });
    }
  } else {
    if (action === "append") {
      return attribute(selector, attr, function(val) {
        return val !== null ? val + (value != null ? value : "") : value != null ? value : "";
      });
    } else if (action === "set") {
      return attribute(selector, attr, function() {
        return value != null ? value : "";
      });
    } else if (action === "remove") {
      return attribute(selector, attr, function() {
        return null;
      });
    }
  }
  return nullController;
}
var validAttributeName, nullController, elements, mutations, getHTMLValue = function getHTMLValue2(el) {
  return el.innerHTML;
}, setHTMLValue = function setHTMLValue2(el, value) {
  return el.innerHTML = value;
}, getElementPosition = function getElementPosition2(el) {
  return {
    parentNode: el.parentElement,
    insertBeforeNode: el.nextElementSibling
  };
}, setElementPosition = function setElementPosition2(el, value) {
  if (value.insertBeforeNode && !value.parentNode.contains(value.insertBeforeNode)) {
    return;
  }
  value.parentNode.insertBefore(el, value.insertBeforeNode);
}, setClassValue = function setClassValue2(el, val) {
  return val ? el.className = val : el.removeAttribute("class");
}, getClassValue = function getClassValue2(el) {
  return el.className;
}, getAttrValue = function getAttrValue2(attrName) {
  return function(el) {
    var _el$getAttribute;
    return (_el$getAttribute = el.getAttribute(attrName)) != null ? _el$getAttribute : null;
  };
}, setAttrValue = function setAttrValue2(attrName) {
  return function(el, val) {
    return val !== null ? el.setAttribute(attrName, val) : el.removeAttribute(attrName);
  };
}, transformContainer, observer, index, dom_mutator_esm_default;
var init_dom_mutator_esm = __esm(() => {
  validAttributeName = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/;
  nullController = {
    revert: function revert() {}
  };
  elements = /* @__PURE__ */ new Map;
  mutations = /* @__PURE__ */ new Set;
  connectGlobalObserver();
  index = {
    html,
    classes,
    attribute,
    position,
    declarative
  };
  dom_mutator_esm_default = index;
});

// node_modules/.bun/@growthbook+growthbook@1.6.5/node_modules/@growthbook/growthbook/dist/esm/util.mjs
function getPolyfills() {
  return polyfills;
}
function hashFnv32a(str) {
  let hval = 2166136261;
  const l = str.length;
  for (let i = 0;i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}
function hash(seed, value, version) {
  if (version === 2) {
    return hashFnv32a(hashFnv32a(seed + value) + "") % 1e4 / 1e4;
  }
  if (version === 1) {
    return hashFnv32a(value + seed) % 1000 / 1000;
  }
  return null;
}
function getEqualWeights(n) {
  if (n <= 0)
    return [];
  return new Array(n).fill(1 / n);
}
function inRange(n, range) {
  return n >= range[0] && n < range[1];
}
function inNamespace(hashValue, namespace) {
  const n = hash("__" + namespace[0], hashValue, 1);
  if (n === null)
    return false;
  return n >= namespace[1] && n < namespace[2];
}
function chooseVariation(n, ranges) {
  for (let i = 0;i < ranges.length; i++) {
    if (inRange(n, ranges[i])) {
      return i;
    }
  }
  return -1;
}
function getUrlRegExp(regexString) {
  try {
    const escaped = regexString.replace(/([^\\])\//g, "$1\\/");
    return new RegExp(escaped);
  } catch (e) {
    console.error(e);
    return;
  }
}
function isURLTargeted(url, targets) {
  if (!targets.length)
    return false;
  let hasIncludeRules = false;
  let isIncluded = false;
  for (let i = 0;i < targets.length; i++) {
    const match = _evalURLTarget(url, targets[i].type, targets[i].pattern);
    if (targets[i].include === false) {
      if (match)
        return false;
    } else {
      hasIncludeRules = true;
      if (match)
        isIncluded = true;
    }
  }
  return isIncluded || !hasIncludeRules;
}
function _evalSimpleUrlPart(actual, pattern, isPath) {
  try {
    let escaped = pattern.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
    if (isPath) {
      escaped = "\\/?" + escaped.replace(/(^\/|\/$)/g, "") + "\\/?";
    }
    const regex = new RegExp("^" + escaped + "$", "i");
    return regex.test(actual);
  } catch (e) {
    return false;
  }
}
function _evalSimpleUrlTarget(actual, pattern) {
  try {
    const expected = new URL(pattern.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____");
    const comps = [[actual.host, expected.host, false], [actual.pathname, expected.pathname, true]];
    if (expected.hash) {
      comps.push([actual.hash, expected.hash, false]);
    }
    expected.searchParams.forEach((v, k) => {
      comps.push([actual.searchParams.get(k) || "", v, false]);
    });
    return !comps.some((data) => !_evalSimpleUrlPart(data[0], data[1], data[2]));
  } catch (e) {
    return false;
  }
}
function _evalURLTarget(url, type, pattern) {
  try {
    const parsed = new URL(url, "https://_");
    if (type === "regex") {
      const regex = getUrlRegExp(pattern);
      if (!regex)
        return false;
      return regex.test(parsed.href) || regex.test(parsed.href.substring(parsed.origin.length));
    } else if (type === "simple") {
      return _evalSimpleUrlTarget(parsed, pattern);
    }
    return false;
  } catch (e) {
    return false;
  }
}
function getBucketRanges(numVariations, coverage, weights) {
  coverage = coverage === undefined ? 1 : coverage;
  if (coverage < 0) {
    if (true) {
      console.error("Experiment.coverage must be greater than or equal to 0");
    }
    coverage = 0;
  } else if (coverage > 1) {
    if (true) {
      console.error("Experiment.coverage must be less than or equal to 1");
    }
    coverage = 1;
  }
  const equal = getEqualWeights(numVariations);
  weights = weights || equal;
  if (weights.length !== numVariations) {
    if (true) {
      console.error("Experiment.weights array must be the same length as Experiment.variations");
    }
    weights = equal;
  }
  const totalWeight = weights.reduce((w, sum) => sum + w, 0);
  if (totalWeight < 0.99 || totalWeight > 1.01) {
    if (true) {
      console.error("Experiment.weights must add up to 1");
    }
    weights = equal;
  }
  let cumulative = 0;
  return weights.map((w) => {
    const start = cumulative;
    cumulative += w;
    return [start, start + coverage * w];
  });
}
function getQueryStringOverride(id, url, numVariations) {
  if (!url) {
    return null;
  }
  const search = url.split("?")[1];
  if (!search) {
    return null;
  }
  const match = search.replace(/#.*/, "").split("&").map((kv) => kv.split("=", 2)).filter(([k]) => k === id).map(([, v]) => parseInt(v));
  if (match.length > 0 && match[0] >= 0 && match[0] < numVariations)
    return match[0];
  return null;
}
function isIncluded(include) {
  try {
    return include();
  } catch (e) {
    console.error(e);
    return false;
  }
}
async function decrypt(encryptedString, decryptionKey, subtle) {
  decryptionKey = decryptionKey || "";
  subtle = subtle || globalThis.crypto && globalThis.crypto.subtle || polyfills.SubtleCrypto;
  if (!subtle) {
    throw new Error("No SubtleCrypto implementation found");
  }
  try {
    const key = await subtle.importKey("raw", base64ToBuf(decryptionKey), {
      name: "AES-CBC",
      length: 128
    }, true, ["encrypt", "decrypt"]);
    const [iv, cipherText] = encryptedString.split(".");
    const plainTextBuffer = await subtle.decrypt({
      name: "AES-CBC",
      iv: base64ToBuf(iv)
    }, key, base64ToBuf(cipherText));
    return new TextDecoder().decode(plainTextBuffer);
  } catch (e) {
    throw new Error("Failed to decrypt");
  }
}
function toString(input) {
  if (typeof input === "string")
    return input;
  return JSON.stringify(input);
}
function paddedVersionString(input) {
  if (typeof input === "number") {
    input = input + "";
  }
  if (!input || typeof input !== "string") {
    input = "0";
  }
  const parts = input.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
  if (parts.length === 3) {
    parts.push("~");
  }
  return parts.map((v) => v.match(/^[0-9]+$/) ? v.padStart(5, " ") : v).join("-");
}
function loadSDKVersion() {
  let version;
  try {
    version = "1.6.5";
  } catch (e) {
    version = "";
  }
  return version;
}
function mergeQueryStrings(oldUrl, newUrl) {
  let currUrl;
  let redirectUrl;
  try {
    currUrl = new URL(oldUrl);
    redirectUrl = new URL(newUrl);
  } catch (e) {
    console.error(`Unable to merge query strings: ${e}`);
    return newUrl;
  }
  currUrl.searchParams.forEach((value, key) => {
    if (redirectUrl.searchParams.has(key)) {
      return;
    }
    redirectUrl.searchParams.set(key, value);
  });
  return redirectUrl.toString();
}
function isObj(x) {
  return typeof x === "object" && x !== null;
}
function getAutoExperimentChangeType(exp) {
  if (exp.urlPatterns && exp.variations.some((variation) => isObj(variation) && ("urlRedirect" in variation))) {
    return "redirect";
  } else if (exp.variations.some((variation) => isObj(variation) && (variation.domMutations || ("js" in variation) || ("css" in variation)))) {
    return "visual";
  }
  return "unknown";
}
async function promiseTimeout(promise, timeout) {
  return new Promise((resolve) => {
    let resolved = false;
    let timer;
    const finish = (data) => {
      if (resolved)
        return;
      resolved = true;
      timer && clearTimeout(timer);
      resolve(data || null);
    };
    if (timeout) {
      timer = setTimeout(() => finish(), timeout);
    }
    promise.then((data) => finish(data)).catch(() => finish());
  });
}
var polyfills, base64ToBuf = (b) => Uint8Array.from(atob(b), (c) => c.charCodeAt(0));
var init_util = __esm(() => {
  polyfills = {
    fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : undefined,
    SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : undefined,
    EventSource: globalThis.EventSource
  };
});

// node_modules/.bun/@growthbook+growthbook@1.6.5/node_modules/@growthbook/growthbook/dist/esm/feature-repository.mjs
function configureCache(overrides) {
  Object.assign(cacheSettings, overrides);
  if (!cacheSettings.backgroundSync) {
    clearAutoRefresh();
  }
}
async function refreshFeatures({
  instance,
  timeout,
  skipCache,
  allowStale,
  backgroundSync
}) {
  if (!backgroundSync) {
    cacheSettings.backgroundSync = false;
  }
  return fetchFeaturesWithCache({
    instance,
    allowStale,
    timeout,
    skipCache
  });
}
function subscribe(instance) {
  const key = getKey(instance);
  const subs = subscribedInstances.get(key) || new Set;
  subs.add(instance);
  subscribedInstances.set(key, subs);
}
function unsubscribe(instance) {
  subscribedInstances.forEach((s) => s.delete(instance));
}
function onHidden() {
  streams.forEach((channel) => {
    if (!channel)
      return;
    channel.state = "idle";
    disableChannel(channel);
  });
}
function onVisible() {
  streams.forEach((channel) => {
    if (!channel)
      return;
    if (channel.state !== "idle")
      return;
    enableChannel(channel);
  });
}
async function updatePersistentCache() {
  try {
    if (!polyfills2.localStorage)
      return;
    await polyfills2.localStorage.setItem(cacheSettings.cacheKey, JSON.stringify(Array.from(cache.entries())));
  } catch (e) {}
}
async function fetchFeaturesWithCache({
  instance,
  allowStale,
  timeout,
  skipCache
}) {
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  const now = new Date;
  const minStaleAt = new Date(now.getTime() - cacheSettings.maxAge + cacheSettings.staleTTL);
  await initializeCache();
  const existing = !cacheSettings.disableCache && !skipCache ? cache.get(cacheKey) : undefined;
  if (existing && (allowStale || existing.staleAt > now) && existing.staleAt > minStaleAt) {
    if (existing.sse)
      supportsSSE.add(key);
    if (existing.staleAt < now) {
      fetchFeatures(instance);
    } else {
      startAutoRefresh(instance);
    }
    return {
      data: existing.data,
      success: true,
      source: "cache"
    };
  } else {
    const res = await promiseTimeout(fetchFeatures(instance), timeout);
    return res || {
      data: null,
      success: false,
      source: "timeout",
      error: new Error("Timeout")
    };
  }
}
function getKey(instance) {
  const [apiHost, clientKey] = instance.getApiInfo();
  return `${apiHost}||${clientKey}`;
}
function getCacheKey(instance) {
  const baseKey = getKey(instance);
  if (!("isRemoteEval" in instance) || !instance.isRemoteEval())
    return baseKey;
  const attributes = instance.getAttributes();
  const cacheKeyAttributes = instance.getCacheKeyAttributes() || Object.keys(instance.getAttributes());
  const ca = {};
  cacheKeyAttributes.forEach((key) => {
    ca[key] = attributes[key];
  });
  const fv = instance.getForcedVariations();
  const url = instance.getUrl();
  return `${baseKey}||${JSON.stringify({
    ca,
    fv,
    url
  })}`;
}
async function initializeCache() {
  if (cacheInitialized)
    return;
  cacheInitialized = true;
  try {
    if (polyfills2.localStorage) {
      const value = await polyfills2.localStorage.getItem(cacheSettings.cacheKey);
      if (!cacheSettings.disableCache && value) {
        const parsed = JSON.parse(value);
        if (parsed && Array.isArray(parsed)) {
          parsed.forEach(([key, data]) => {
            cache.set(key, {
              ...data,
              staleAt: new Date(data.staleAt)
            });
          });
        }
        cleanupCache();
      }
    }
  } catch (e) {}
  if (!cacheSettings.disableIdleStreams) {
    const cleanupFn = helpers.startIdleListener();
    if (cleanupFn) {
      helpers.stopIdleListener = cleanupFn;
    }
  }
}
function cleanupCache() {
  const entriesWithTimestamps = Array.from(cache.entries()).map(([key, value]) => ({
    key,
    staleAt: value.staleAt.getTime()
  })).sort((a, b) => a.staleAt - b.staleAt);
  const entriesToRemoveCount = Math.min(Math.max(0, cache.size - cacheSettings.maxEntries), cache.size);
  for (let i = 0;i < entriesToRemoveCount; i++) {
    cache.delete(entriesWithTimestamps[i].key);
  }
}
function onNewFeatureData(key, cacheKey, data) {
  const version = data.dateUpdated || "";
  const staleAt = new Date(Date.now() + cacheSettings.staleTTL);
  const existing = !cacheSettings.disableCache ? cache.get(cacheKey) : undefined;
  if (existing && version && existing.version === version) {
    existing.staleAt = staleAt;
    updatePersistentCache();
    return;
  }
  if (!cacheSettings.disableCache) {
    cache.set(cacheKey, {
      data,
      version,
      staleAt,
      sse: supportsSSE.has(key)
    });
    cleanupCache();
  }
  updatePersistentCache();
  const instances = subscribedInstances.get(key);
  instances && instances.forEach((instance) => refreshInstance(instance, data));
}
async function refreshInstance(instance, data) {
  await instance.setPayload(data || instance.getPayload());
}
async function fetchFeatures(instance) {
  const {
    apiHost,
    apiRequestHeaders
  } = instance.getApiHosts();
  const clientKey = instance.getClientKey();
  const remoteEval = "isRemoteEval" in instance && instance.isRemoteEval();
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  let promise = activeFetches.get(cacheKey);
  if (!promise) {
    const fetcher = remoteEval ? helpers.fetchRemoteEvalCall({
      host: apiHost,
      clientKey,
      payload: {
        attributes: instance.getAttributes(),
        forcedVariations: instance.getForcedVariations(),
        forcedFeatures: Array.from(instance.getForcedFeatures().entries()),
        url: instance.getUrl()
      },
      headers: apiRequestHeaders
    }) : helpers.fetchFeaturesCall({
      host: apiHost,
      clientKey,
      headers: apiRequestHeaders
    });
    promise = fetcher.then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      if (res.headers.get("x-sse-support") === "enabled") {
        supportsSSE.add(key);
      }
      return res.json();
    }).then((data) => {
      onNewFeatureData(key, cacheKey, data);
      startAutoRefresh(instance);
      activeFetches.delete(cacheKey);
      return {
        data,
        success: true,
        source: "network"
      };
    }).catch((e) => {
      instance.log("Error fetching features", {
        apiHost,
        clientKey,
        error: e ? e.message : null
      });
      activeFetches.delete(cacheKey);
      return {
        data: null,
        source: "error",
        success: false,
        error: e
      };
    });
    activeFetches.set(cacheKey, promise);
  }
  return promise;
}
function startAutoRefresh(instance, forceSSE = false) {
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  const {
    streamingHost,
    streamingHostRequestHeaders
  } = instance.getApiHosts();
  const clientKey = instance.getClientKey();
  if (forceSSE) {
    supportsSSE.add(key);
  }
  if (cacheSettings.backgroundSync && supportsSSE.has(key) && polyfills2.EventSource) {
    if (streams.has(key))
      return;
    const channel = {
      src: null,
      host: streamingHost,
      clientKey,
      headers: streamingHostRequestHeaders,
      cb: (event) => {
        try {
          if (event.type === "features-updated") {
            const instances = subscribedInstances.get(key);
            instances && instances.forEach((instance2) => {
              fetchFeatures(instance2);
            });
          } else if (event.type === "features") {
            const json = JSON.parse(event.data);
            onNewFeatureData(key, cacheKey, json);
          }
          channel.errors = 0;
        } catch (e) {
          instance.log("SSE Error", {
            streamingHost,
            clientKey,
            error: e ? e.message : null
          });
          onSSEError(channel);
        }
      },
      errors: 0,
      state: "active"
    };
    streams.set(key, channel);
    enableChannel(channel);
  }
}
function onSSEError(channel) {
  if (channel.state === "idle")
    return;
  channel.errors++;
  if (channel.errors > 3 || channel.src && channel.src.readyState === 2) {
    const delay = Math.pow(3, channel.errors - 3) * (1000 + Math.random() * 1000);
    disableChannel(channel);
    setTimeout(() => {
      if (["idle", "active"].includes(channel.state))
        return;
      enableChannel(channel);
    }, Math.min(delay, 300000));
  }
}
function disableChannel(channel) {
  if (!channel.src)
    return;
  channel.src.onopen = null;
  channel.src.onerror = null;
  channel.src.close();
  channel.src = null;
  if (channel.state === "active") {
    channel.state = "disabled";
  }
}
function enableChannel(channel) {
  channel.src = helpers.eventSourceCall({
    host: channel.host,
    clientKey: channel.clientKey,
    headers: channel.headers
  });
  channel.state = "active";
  channel.src.addEventListener("features", channel.cb);
  channel.src.addEventListener("features-updated", channel.cb);
  channel.src.onerror = () => onSSEError(channel);
  channel.src.onopen = () => {
    channel.errors = 0;
  };
}
function destroyChannel(channel, key) {
  disableChannel(channel);
  streams.delete(key);
}
function clearAutoRefresh() {
  supportsSSE.clear();
  streams.forEach(destroyChannel);
  subscribedInstances.clear();
  helpers.stopIdleListener();
}
function startStreaming(instance, options) {
  if (options.streaming) {
    if (!instance.getClientKey()) {
      throw new Error("Must specify clientKey to enable streaming");
    }
    if (options.payload) {
      startAutoRefresh(instance, true);
    }
    subscribe(instance);
  }
}
var cacheSettings, polyfills2, helpers, subscribedInstances, cacheInitialized = false, cache, activeFetches, streams, supportsSSE;
var init_feature_repository = __esm(() => {
  init_util();
  cacheSettings = {
    staleTTL: 1000 * 60,
    maxAge: 1000 * 60 * 60 * 4,
    cacheKey: "gbFeaturesCache",
    backgroundSync: true,
    maxEntries: 10,
    disableIdleStreams: false,
    idleStreamInterval: 20000,
    disableCache: false
  };
  polyfills2 = getPolyfills();
  helpers = {
    fetchFeaturesCall: ({
      host,
      clientKey,
      headers
    }) => {
      return polyfills2.fetch(`${host}/api/features/${clientKey}`, {
        headers
      });
    },
    fetchRemoteEvalCall: ({
      host,
      clientKey,
      payload,
      headers
    }) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        body: JSON.stringify(payload)
      };
      return polyfills2.fetch(`${host}/api/eval/${clientKey}`, options);
    },
    eventSourceCall: ({
      host,
      clientKey,
      headers
    }) => {
      if (headers) {
        return new polyfills2.EventSource(`${host}/sub/${clientKey}`, {
          headers
        });
      }
      return new polyfills2.EventSource(`${host}/sub/${clientKey}`);
    },
    startIdleListener: () => {
      let idleTimeout;
      const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      if (!isBrowser)
        return;
      const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          window.clearTimeout(idleTimeout);
          onVisible();
        } else if (document.visibilityState === "hidden") {
          idleTimeout = window.setTimeout(onHidden, cacheSettings.idleStreamInterval);
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    },
    stopIdleListener: () => {}
  };
  try {
    if (globalThis.localStorage) {
      polyfills2.localStorage = globalThis.localStorage;
    }
  } catch (e) {}
  subscribedInstances = new Map;
  cache = new Map;
  activeFetches = new Map;
  streams = new Map;
  supportsSSE = new Set;
});

// node_modules/.bun/@growthbook+growthbook@1.6.5/node_modules/@growthbook/growthbook/dist/esm/mongrule.mjs
function evalCondition(obj, condition, savedGroups) {
  savedGroups = savedGroups || {};
  for (const [k, v] of Object.entries(condition)) {
    switch (k) {
      case "$or":
        if (!evalOr(obj, v, savedGroups))
          return false;
        break;
      case "$nor":
        if (evalOr(obj, v, savedGroups))
          return false;
        break;
      case "$and":
        if (!evalAnd(obj, v, savedGroups))
          return false;
        break;
      case "$not":
        if (evalCondition(obj, v, savedGroups))
          return false;
        break;
      default:
        if (!evalConditionValue(v, getPath(obj, k), savedGroups))
          return false;
    }
  }
  return true;
}
function getPath(obj, path) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0;i < parts.length; i++) {
    if (current && typeof current === "object" && parts[i] in current) {
      current = current[parts[i]];
    } else {
      return null;
    }
  }
  return current;
}
function getRegex(regex, insensitive = false) {
  const cacheKey = `${regex}${insensitive ? "/i" : ""}`;
  if (!_regexCache[cacheKey]) {
    _regexCache[cacheKey] = new RegExp(regex.replace(/([^\\])\//g, "$1\\/"), insensitive ? "i" : undefined);
  }
  return _regexCache[cacheKey];
}
function evalConditionValue(condition, value, savedGroups, insensitive = false) {
  if (typeof condition === "string") {
    if (insensitive) {
      return String(value).toLowerCase() === condition.toLowerCase();
    }
    return value + "" === condition;
  }
  if (typeof condition === "number") {
    return value * 1 === condition;
  }
  if (typeof condition === "boolean") {
    return value !== null && !!value === condition;
  }
  if (condition === null) {
    return value === null;
  }
  if (Array.isArray(condition) || !isOperatorObject(condition)) {
    return JSON.stringify(value) === JSON.stringify(condition);
  }
  for (const op in condition) {
    if (!evalOperatorCondition(op, value, condition[op], savedGroups)) {
      return false;
    }
  }
  return true;
}
function isOperatorObject(obj) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.filter((k) => k[0] === "$").length === keys.length;
}
function getType(v) {
  if (v === null)
    return "null";
  if (Array.isArray(v))
    return "array";
  const t = typeof v;
  if (["string", "number", "boolean", "object", "undefined"].includes(t)) {
    return t;
  }
  return "unknown";
}
function elemMatch(actual, expected, savedGroups) {
  if (!Array.isArray(actual))
    return false;
  const check = isOperatorObject(expected) ? (v) => evalConditionValue(expected, v, savedGroups) : (v) => evalCondition(v, expected, savedGroups);
  for (let i = 0;i < actual.length; i++) {
    if (actual[i] && check(actual[i])) {
      return true;
    }
  }
  return false;
}
function isIn(actual, expected, insensitive = false) {
  if (insensitive) {
    const caseFold = (val) => typeof val === "string" ? val.toLowerCase() : val;
    if (Array.isArray(actual)) {
      return actual.some((el) => expected.some((exp) => caseFold(el) === caseFold(exp)));
    }
    return expected.some((exp) => caseFold(actual) === caseFold(exp));
  }
  if (Array.isArray(actual)) {
    return actual.some((el) => expected.includes(el));
  }
  return expected.includes(actual);
}
function isInAll(actual, expected, savedGroups, insensitive = false) {
  if (!Array.isArray(actual))
    return false;
  for (let i = 0;i < expected.length; i++) {
    let passed = false;
    for (let j = 0;j < actual.length; j++) {
      if (evalConditionValue(expected[i], actual[j], savedGroups, insensitive)) {
        passed = true;
        break;
      }
    }
    if (!passed)
      return false;
  }
  return true;
}
function evalOperatorCondition(operator, actual, expected, savedGroups) {
  switch (operator) {
    case "$veq":
      return paddedVersionString(actual) === paddedVersionString(expected);
    case "$vne":
      return paddedVersionString(actual) !== paddedVersionString(expected);
    case "$vgt":
      return paddedVersionString(actual) > paddedVersionString(expected);
    case "$vgte":
      return paddedVersionString(actual) >= paddedVersionString(expected);
    case "$vlt":
      return paddedVersionString(actual) < paddedVersionString(expected);
    case "$vlte":
      return paddedVersionString(actual) <= paddedVersionString(expected);
    case "$eq":
      return actual === expected;
    case "$ne":
      return actual !== expected;
    case "$lt":
      return actual < expected;
    case "$lte":
      return actual <= expected;
    case "$gt":
      return actual > expected;
    case "$gte":
      return actual >= expected;
    case "$exists":
      return expected ? actual != null : actual == null;
    case "$in":
      if (!Array.isArray(expected))
        return false;
      return isIn(actual, expected);
    case "$ini":
      if (!Array.isArray(expected))
        return false;
      return isIn(actual, expected, true);
    case "$inGroup":
      return isIn(actual, savedGroups[expected] || []);
    case "$notInGroup":
      return !isIn(actual, savedGroups[expected] || []);
    case "$nin":
      if (!Array.isArray(expected))
        return false;
      return !isIn(actual, expected);
    case "$nini":
      if (!Array.isArray(expected))
        return false;
      return !isIn(actual, expected, true);
    case "$not":
      return !evalConditionValue(expected, actual, savedGroups);
    case "$size":
      if (!Array.isArray(actual))
        return false;
      return evalConditionValue(expected, actual.length, savedGroups);
    case "$elemMatch":
      return elemMatch(actual, expected, savedGroups);
    case "$all":
      if (!Array.isArray(expected))
        return false;
      return isInAll(actual, expected, savedGroups);
    case "$alli":
      if (!Array.isArray(expected))
        return false;
      return isInAll(actual, expected, savedGroups, true);
    case "$regex":
      try {
        return getRegex(expected).test(actual);
      } catch (e) {
        return false;
      }
    case "$regexi":
      try {
        return getRegex(expected, true).test(actual);
      } catch (e) {
        return false;
      }
    case "$type":
      return getType(actual) === expected;
    default:
      console.error("Unknown operator: " + operator);
      return false;
  }
}
function evalOr(obj, conditions, savedGroups) {
  if (!conditions.length)
    return true;
  for (let i = 0;i < conditions.length; i++) {
    if (evalCondition(obj, conditions[i], savedGroups)) {
      return true;
    }
  }
  return false;
}
function evalAnd(obj, conditions, savedGroups) {
  for (let i = 0;i < conditions.length; i++) {
    if (!evalCondition(obj, conditions[i], savedGroups)) {
      return false;
    }
  }
  return true;
}
var _regexCache;
var init_mongrule = __esm(() => {
  init_util();
  _regexCache = {};
});

// node_modules/.bun/@growthbook+growthbook@1.6.5/node_modules/@growthbook/growthbook/dist/esm/core.mjs
function getForcedFeatureValues(ctx) {
  const ret = new Map;
  if (ctx.global.forcedFeatureValues) {
    ctx.global.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  if (ctx.user.forcedFeatureValues) {
    ctx.user.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  return ret;
}
function getForcedVariations(ctx) {
  if (ctx.global.forcedVariations && ctx.user.forcedVariations) {
    return {
      ...ctx.global.forcedVariations,
      ...ctx.user.forcedVariations
    };
  } else if (ctx.global.forcedVariations) {
    return ctx.global.forcedVariations;
  } else if (ctx.user.forcedVariations) {
    return ctx.user.forcedVariations;
  } else {
    return {};
  }
}
async function safeCall(fn) {
  try {
    await fn();
  } catch (e) {}
}
function onExperimentViewed(ctx, experiment, result) {
  if (ctx.user.trackedExperiments) {
    const k = getExperimentDedupeKey(experiment, result);
    if (ctx.user.trackedExperiments.has(k)) {
      return [];
    }
    ctx.user.trackedExperiments.add(k);
  }
  if (ctx.user.enableDevMode && ctx.user.devLogs) {
    ctx.user.devLogs.push({
      experiment,
      result,
      timestamp: Date.now().toString(),
      logType: "experiment"
    });
  }
  const calls = [];
  if (ctx.global.trackingCallback) {
    const cb = ctx.global.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result, ctx.user)));
  }
  if (ctx.user.trackingCallback) {
    const cb = ctx.user.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result)));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    calls.push(safeCall(() => cb(EVENT_EXPERIMENT_VIEWED, {
      experimentId: experiment.key,
      variationId: result.key,
      hashAttribute: result.hashAttribute,
      hashValue: result.hashValue
    }, ctx.user)));
  }
  return calls;
}
function onFeatureUsage(ctx, key, ret) {
  if (ctx.user.trackedFeatureUsage) {
    const stringifiedValue = JSON.stringify(ret.value);
    if (ctx.user.trackedFeatureUsage[key] === stringifiedValue)
      return;
    ctx.user.trackedFeatureUsage[key] = stringifiedValue;
    if (ctx.user.enableDevMode && ctx.user.devLogs) {
      ctx.user.devLogs.push({
        featureKey: key,
        result: ret,
        timestamp: Date.now().toString(),
        logType: "feature"
      });
    }
  }
  if (ctx.global.onFeatureUsage) {
    const cb = ctx.global.onFeatureUsage;
    safeCall(() => cb(key, ret, ctx.user));
  }
  if (ctx.user.onFeatureUsage) {
    const cb = ctx.user.onFeatureUsage;
    safeCall(() => cb(key, ret));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    safeCall(() => cb(EVENT_FEATURE_EVALUATED, {
      feature: key,
      source: ret.source,
      value: ret.value,
      ruleId: ret.source === "defaultValue" ? "$default" : ret.ruleId || "",
      variationId: ret.experimentResult ? ret.experimentResult.key : ""
    }, ctx.user));
  }
}
function evalFeature(id, ctx) {
  if (ctx.stack.evaluatedFeatures.has(id)) {
    ctx.global.log(`evalFeature: circular dependency detected: ${ctx.stack.id} -> ${id}`, {
      from: ctx.stack.id,
      to: id
    });
    return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
  }
  ctx.stack.evaluatedFeatures.add(id);
  ctx.stack.id = id;
  const forcedValues = getForcedFeatureValues(ctx);
  if (forcedValues.has(id)) {
    ctx.global.log("Global override", {
      id,
      value: forcedValues.get(id)
    });
    return getFeatureResult(ctx, id, forcedValues.get(id), "override");
  }
  if (!ctx.global.features || !ctx.global.features[id]) {
    ctx.global.log("Unknown feature", {
      id
    });
    return getFeatureResult(ctx, id, null, "unknownFeature");
  }
  const feature = ctx.global.features[id];
  if (feature.rules) {
    const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
    rules:
      for (const rule of feature.rules) {
        if (rule.parentConditions) {
          for (const parentCondition of rule.parentConditions) {
            ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
            const parentResult = evalFeature(parentCondition.id, ctx);
            if (parentResult.source === "cyclicPrerequisite") {
              return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
            }
            const evalObj = {
              value: parentResult.value
            };
            const evaled = evalCondition(evalObj, parentCondition.condition || {});
            if (!evaled) {
              if (parentCondition.gate) {
                ctx.global.log("Feature blocked by prerequisite", {
                  id,
                  rule
                });
                return getFeatureResult(ctx, id, null, "prerequisite");
              }
              ctx.global.log("Skip rule because prerequisite evaluation fails", {
                id,
                rule
              });
              continue rules;
            }
          }
        }
        if (rule.filters && isFilteredOut(rule.filters, ctx)) {
          ctx.global.log("Skip rule because of filters", {
            id,
            rule
          });
          continue;
        }
        if ("force" in rule) {
          if (rule.condition && !conditionPasses(rule.condition, ctx)) {
            ctx.global.log("Skip rule because of condition ff", {
              id,
              rule
            });
            continue;
          }
          if (!isIncludedInRollout(ctx, rule.seed || id, rule.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !rule.disableStickyBucketing ? rule.fallbackAttribute : undefined, rule.range, rule.coverage, rule.hashVersion)) {
            ctx.global.log("Skip rule because user not included in rollout", {
              id,
              rule
            });
            continue;
          }
          ctx.global.log("Force value from rule", {
            id,
            rule
          });
          if (rule.tracks) {
            rule.tracks.forEach((t) => {
              const calls = onExperimentViewed(ctx, t.experiment, t.result);
              if (!calls.length && ctx.global.saveDeferredTrack) {
                ctx.global.saveDeferredTrack({
                  experiment: t.experiment,
                  result: t.result
                });
              }
            });
          }
          return getFeatureResult(ctx, id, rule.force, "force", rule.id);
        }
        if (!rule.variations) {
          ctx.global.log("Skip invalid rule", {
            id,
            rule
          });
          continue;
        }
        const exp = {
          variations: rule.variations,
          key: rule.key || id
        };
        if ("coverage" in rule)
          exp.coverage = rule.coverage;
        if (rule.weights)
          exp.weights = rule.weights;
        if (rule.hashAttribute)
          exp.hashAttribute = rule.hashAttribute;
        if (rule.fallbackAttribute)
          exp.fallbackAttribute = rule.fallbackAttribute;
        if (rule.disableStickyBucketing)
          exp.disableStickyBucketing = rule.disableStickyBucketing;
        if (rule.bucketVersion !== undefined)
          exp.bucketVersion = rule.bucketVersion;
        if (rule.minBucketVersion !== undefined)
          exp.minBucketVersion = rule.minBucketVersion;
        if (rule.namespace)
          exp.namespace = rule.namespace;
        if (rule.meta)
          exp.meta = rule.meta;
        if (rule.ranges)
          exp.ranges = rule.ranges;
        if (rule.name)
          exp.name = rule.name;
        if (rule.phase)
          exp.phase = rule.phase;
        if (rule.seed)
          exp.seed = rule.seed;
        if (rule.hashVersion)
          exp.hashVersion = rule.hashVersion;
        if (rule.filters)
          exp.filters = rule.filters;
        if (rule.condition)
          exp.condition = rule.condition;
        const {
          result
        } = runExperiment(exp, id, ctx);
        ctx.global.onExperimentEval && ctx.global.onExperimentEval(exp, result);
        if (result.inExperiment && !result.passthrough) {
          return getFeatureResult(ctx, id, result.value, "experiment", rule.id, exp, result);
        }
      }
  }
  ctx.global.log("Use default value", {
    id,
    value: feature.defaultValue
  });
  return getFeatureResult(ctx, id, feature.defaultValue === undefined ? null : feature.defaultValue, "defaultValue");
}
function runExperiment(experiment, featureId, ctx) {
  const key = experiment.key;
  const numVariations = experiment.variations.length;
  if (numVariations < 2) {
    ctx.global.log("Invalid experiment", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (ctx.global.enabled === false || ctx.user.enabled === false) {
    ctx.global.log("Context disabled", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  experiment = mergeOverrides(experiment, ctx);
  if (experiment.urlPatterns && !isURLTargeted(ctx.user.url || "", experiment.urlPatterns)) {
    ctx.global.log("Skip because of url targeting", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const qsOverride = getQueryStringOverride(key, ctx.user.url || "", numVariations);
  if (qsOverride !== null) {
    ctx.global.log("Force via querystring", {
      id: key,
      variation: qsOverride
    });
    return {
      result: getExperimentResult(ctx, experiment, qsOverride, false, featureId)
    };
  }
  const forcedVariations = getForcedVariations(ctx);
  if (key in forcedVariations) {
    const variation = forcedVariations[key];
    ctx.global.log("Force via dev tools", {
      id: key,
      variation
    });
    return {
      result: getExperimentResult(ctx, experiment, variation, false, featureId)
    };
  }
  if (experiment.status === "draft" || experiment.active === false) {
    ctx.global.log("Skip because inactive", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, experiment.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing ? experiment.fallbackAttribute : undefined);
  if (!hashValue) {
    ctx.global.log("Skip because missing hashAttribute", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  let assigned = -1;
  let foundStickyBucket = false;
  let stickyBucketVersionIsBlocked = false;
  if (ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing) {
    const {
      variation,
      versionIsBlocked
    } = getStickyBucketVariation({
      ctx,
      expKey: experiment.key,
      expBucketVersion: experiment.bucketVersion,
      expHashAttribute: experiment.hashAttribute,
      expFallbackAttribute: experiment.fallbackAttribute,
      expMinBucketVersion: experiment.minBucketVersion,
      expMeta: experiment.meta
    });
    foundStickyBucket = variation >= 0;
    assigned = variation;
    stickyBucketVersionIsBlocked = !!versionIsBlocked;
  }
  if (!foundStickyBucket) {
    if (experiment.filters) {
      if (isFilteredOut(experiment.filters, ctx)) {
        ctx.global.log("Skip because of filters", {
          id: key
        });
        return {
          result: getExperimentResult(ctx, experiment, -1, false, featureId)
        };
      }
    } else if (experiment.namespace && !inNamespace(hashValue, experiment.namespace)) {
      ctx.global.log("Skip because of namespace", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
    if (experiment.include && !isIncluded(experiment.include)) {
      ctx.global.log("Skip because of include function", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
    if (experiment.condition && !conditionPasses(experiment.condition, ctx)) {
      ctx.global.log("Skip because of condition exp", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
    if (experiment.parentConditions) {
      const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
      for (const parentCondition of experiment.parentConditions) {
        ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
        const parentResult = evalFeature(parentCondition.id, ctx);
        if (parentResult.source === "cyclicPrerequisite") {
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId)
          };
        }
        const evalObj = {
          value: parentResult.value
        };
        if (!evalCondition(evalObj, parentCondition.condition || {})) {
          ctx.global.log("Skip because prerequisite evaluation fails", {
            id: key
          });
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId)
          };
        }
      }
    }
    if (experiment.groups && !hasGroupOverlap(experiment.groups, ctx)) {
      ctx.global.log("Skip because of groups", {
        id: key
      });
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
  }
  if (experiment.url && !urlIsValid(experiment.url, ctx)) {
    ctx.global.log("Skip because of url", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const n = hash(experiment.seed || key, hashValue, experiment.hashVersion || 1);
  if (n === null) {
    ctx.global.log("Skip because of invalid hash version", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (!foundStickyBucket) {
    const ranges = experiment.ranges || getBucketRanges(numVariations, experiment.coverage === undefined ? 1 : experiment.coverage, experiment.weights);
    assigned = chooseVariation(n, ranges);
  }
  if (stickyBucketVersionIsBlocked) {
    ctx.global.log("Skip because sticky bucket version is blocked", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId, undefined, true)
    };
  }
  if (assigned < 0) {
    ctx.global.log("Skip because of coverage", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if ("force" in experiment) {
    ctx.global.log("Force variation", {
      id: key,
      variation: experiment.force
    });
    return {
      result: getExperimentResult(ctx, experiment, experiment.force === undefined ? -1 : experiment.force, false, featureId)
    };
  }
  if (ctx.global.qaMode || ctx.user.qaMode) {
    ctx.global.log("Skip because QA mode", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (experiment.status === "stopped") {
    ctx.global.log("Skip because stopped", {
      id: key
    });
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  const result = getExperimentResult(ctx, experiment, assigned, true, featureId, n, foundStickyBucket);
  if (ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing) {
    const {
      changed,
      key: attrKey,
      doc
    } = generateStickyBucketAssignmentDoc(ctx, hashAttribute, toString(hashValue), {
      [getStickyBucketExperimentKey(experiment.key, experiment.bucketVersion)]: result.key
    });
    if (changed) {
      ctx.user.stickyBucketAssignmentDocs = ctx.user.stickyBucketAssignmentDocs || {};
      ctx.user.stickyBucketAssignmentDocs[attrKey] = doc;
      ctx.user.saveStickyBucketAssignmentDoc(doc);
    }
  }
  const trackingCalls = onExperimentViewed(ctx, experiment, result);
  if (trackingCalls.length === 0 && ctx.global.saveDeferredTrack) {
    ctx.global.saveDeferredTrack({
      experiment,
      result
    });
  }
  const trackingCall = !trackingCalls.length ? undefined : trackingCalls.length === 1 ? trackingCalls[0] : Promise.all(trackingCalls).then(() => {});
  "changeId" in experiment && experiment.changeId && ctx.global.recordChangeId && ctx.global.recordChangeId(experiment.changeId);
  ctx.global.log("In experiment", {
    id: key,
    variation: result.variationId
  });
  return {
    result,
    trackingCall
  };
}
function getFeatureResult(ctx, key, value, source, ruleId, experiment, result) {
  const ret = {
    value,
    on: !!value,
    off: !value,
    source,
    ruleId: ruleId || ""
  };
  if (experiment)
    ret.experiment = experiment;
  if (result)
    ret.experimentResult = result;
  if (source !== "override") {
    onFeatureUsage(ctx, key, ret);
  }
  return ret;
}
function getAttributes(ctx) {
  return {
    ...ctx.user.attributes,
    ...ctx.user.attributeOverrides
  };
}
function conditionPasses(condition, ctx) {
  return evalCondition(getAttributes(ctx), condition, ctx.global.savedGroups || {});
}
function isFilteredOut(filters, ctx) {
  return filters.some((filter) => {
    const {
      hashValue
    } = getHashAttribute(ctx, filter.attribute);
    if (!hashValue)
      return true;
    const n = hash(filter.seed, hashValue, filter.hashVersion || 2);
    if (n === null)
      return true;
    return !filter.ranges.some((r) => inRange(n, r));
  });
}
function isIncludedInRollout(ctx, seed, hashAttribute, fallbackAttribute, range, coverage, hashVersion) {
  if (!range && coverage === undefined)
    return true;
  if (!range && coverage === 0)
    return false;
  const {
    hashValue
  } = getHashAttribute(ctx, hashAttribute, fallbackAttribute);
  if (!hashValue) {
    return false;
  }
  const n = hash(seed, hashValue, hashVersion || 1);
  if (n === null)
    return false;
  return range ? inRange(n, range) : coverage !== undefined ? n <= coverage : true;
}
function getExperimentResult(ctx, experiment, variationIndex, hashUsed, featureId, bucket, stickyBucketUsed) {
  let inExperiment = true;
  if (variationIndex < 0 || variationIndex >= experiment.variations.length) {
    variationIndex = 0;
    inExperiment = false;
  }
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, experiment.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing ? experiment.fallbackAttribute : undefined);
  const meta = experiment.meta ? experiment.meta[variationIndex] : {};
  const res = {
    key: meta.key || "" + variationIndex,
    featureId,
    inExperiment,
    hashUsed,
    variationId: variationIndex,
    value: experiment.variations[variationIndex],
    hashAttribute,
    hashValue,
    stickyBucketUsed: !!stickyBucketUsed
  };
  if (meta.name)
    res.name = meta.name;
  if (bucket !== undefined)
    res.bucket = bucket;
  if (meta.passthrough)
    res.passthrough = meta.passthrough;
  return res;
}
function mergeOverrides(experiment, ctx) {
  const key = experiment.key;
  const o = ctx.global.overrides;
  if (o && o[key]) {
    experiment = Object.assign({}, experiment, o[key]);
    if (typeof experiment.url === "string") {
      experiment.url = getUrlRegExp(experiment.url);
    }
  }
  return experiment;
}
function getHashAttribute(ctx, attr, fallback) {
  let hashAttribute = attr || "id";
  let hashValue = "";
  const attributes = getAttributes(ctx);
  if (attributes[hashAttribute]) {
    hashValue = attributes[hashAttribute];
  }
  if (!hashValue && fallback) {
    if (attributes[fallback]) {
      hashValue = attributes[fallback];
    }
    if (hashValue) {
      hashAttribute = fallback;
    }
  }
  return {
    hashAttribute,
    hashValue
  };
}
function urlIsValid(urlRegex, ctx) {
  const url = ctx.user.url;
  if (!url)
    return false;
  const pathOnly = url.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
  if (urlRegex.test(url))
    return true;
  if (urlRegex.test(pathOnly))
    return true;
  return false;
}
function hasGroupOverlap(expGroups, ctx) {
  const groups = ctx.global.groups || {};
  for (let i = 0;i < expGroups.length; i++) {
    if (groups[expGroups[i]])
      return true;
  }
  return false;
}
function getStickyBucketVariation({
  ctx,
  expKey,
  expBucketVersion,
  expHashAttribute,
  expFallbackAttribute,
  expMinBucketVersion,
  expMeta
}) {
  expBucketVersion = expBucketVersion || 0;
  expMinBucketVersion = expMinBucketVersion || 0;
  expHashAttribute = expHashAttribute || "id";
  expMeta = expMeta || [];
  const id = getStickyBucketExperimentKey(expKey, expBucketVersion);
  const assignments = getStickyBucketAssignments(ctx, expHashAttribute, expFallbackAttribute);
  if (expMinBucketVersion > 0) {
    for (let i = 0;i < expMinBucketVersion; i++) {
      const blockedKey = getStickyBucketExperimentKey(expKey, i);
      if (assignments[blockedKey] !== undefined) {
        return {
          variation: -1,
          versionIsBlocked: true
        };
      }
    }
  }
  const variationKey = assignments[id];
  if (variationKey === undefined)
    return {
      variation: -1
    };
  const variation = expMeta.findIndex((m) => m.key === variationKey);
  if (variation < 0)
    return {
      variation: -1
    };
  return {
    variation
  };
}
function getStickyBucketExperimentKey(experimentKey, experimentBucketVersion) {
  experimentBucketVersion = experimentBucketVersion || 0;
  return `${experimentKey}__${experimentBucketVersion}`;
}
function getStickyBucketAttributeKey(attributeName, attributeValue) {
  return `${attributeName}||${attributeValue}`;
}
function getStickyBucketAssignments(ctx, expHashAttribute, expFallbackAttribute) {
  if (!ctx.user.stickyBucketAssignmentDocs)
    return {};
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, expHashAttribute);
  const hashKey = getStickyBucketAttributeKey(hashAttribute, toString(hashValue));
  const {
    hashAttribute: fallbackAttribute,
    hashValue: fallbackValue
  } = getHashAttribute(ctx, expFallbackAttribute);
  const fallbackKey = fallbackValue ? getStickyBucketAttributeKey(fallbackAttribute, toString(fallbackValue)) : null;
  const assignments = {};
  if (fallbackKey && ctx.user.stickyBucketAssignmentDocs[fallbackKey]) {
    Object.assign(assignments, ctx.user.stickyBucketAssignmentDocs[fallbackKey].assignments || {});
  }
  if (ctx.user.stickyBucketAssignmentDocs[hashKey]) {
    Object.assign(assignments, ctx.user.stickyBucketAssignmentDocs[hashKey].assignments || {});
  }
  return assignments;
}
function generateStickyBucketAssignmentDoc(ctx, attributeName, attributeValue, assignments) {
  const key = getStickyBucketAttributeKey(attributeName, attributeValue);
  const existingAssignments = ctx.user.stickyBucketAssignmentDocs && ctx.user.stickyBucketAssignmentDocs[key] ? ctx.user.stickyBucketAssignmentDocs[key].assignments || {} : {};
  const newAssignments = {
    ...existingAssignments,
    ...assignments
  };
  const changed = JSON.stringify(existingAssignments) !== JSON.stringify(newAssignments);
  return {
    key,
    doc: {
      attributeName,
      attributeValue,
      assignments: newAssignments
    },
    changed
  };
}
function deriveStickyBucketIdentifierAttributes(ctx, data) {
  const attributes = new Set;
  const features = data && data.features ? data.features : ctx.global.features || {};
  const experiments = data && data.experiments ? data.experiments : ctx.global.experiments || [];
  Object.keys(features).forEach((id) => {
    const feature = features[id];
    if (feature.rules) {
      for (const rule of feature.rules) {
        if (rule.variations) {
          attributes.add(rule.hashAttribute || "id");
          if (rule.fallbackAttribute) {
            attributes.add(rule.fallbackAttribute);
          }
        }
      }
    }
  });
  experiments.map((experiment) => {
    attributes.add(experiment.hashAttribute || "id");
    if (experiment.fallbackAttribute) {
      attributes.add(experiment.fallbackAttribute);
    }
  });
  return Array.from(attributes);
}
async function getAllStickyBucketAssignmentDocs(ctx, stickyBucketService, data) {
  const attributes = getStickyBucketAttributes(ctx, data);
  return stickyBucketService.getAllAssignments(attributes);
}
function getStickyBucketAttributes(ctx, data) {
  const attributes = {};
  const stickyBucketIdentifierAttributes = deriveStickyBucketIdentifierAttributes(ctx, data);
  stickyBucketIdentifierAttributes.forEach((attr) => {
    const {
      hashValue
    } = getHashAttribute(ctx, attr);
    attributes[attr] = toString(hashValue);
  });
  return attributes;
}
async function decryptPayload(data, decryptionKey, subtle) {
  data = {
    ...data
  };
  if (data.encryptedFeatures) {
    try {
      data.features = JSON.parse(await decrypt(data.encryptedFeatures, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedFeatures;
  }
  if (data.encryptedExperiments) {
    try {
      data.experiments = JSON.parse(await decrypt(data.encryptedExperiments, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedExperiments;
  }
  if (data.encryptedSavedGroups) {
    try {
      data.savedGroups = JSON.parse(await decrypt(data.encryptedSavedGroups, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedSavedGroups;
  }
  return data;
}
function getApiHosts(options) {
  const defaultHost = options.apiHost || "https://cdn.growthbook.io";
  return {
    apiHost: defaultHost.replace(/\/*$/, ""),
    streamingHost: (options.streamingHost || defaultHost).replace(/\/*$/, ""),
    apiRequestHeaders: options.apiHostRequestHeaders,
    streamingHostRequestHeaders: options.streamingHostRequestHeaders
  };
}
function getExperimentDedupeKey(experiment, result) {
  return result.hashAttribute + result.hashValue + experiment.key + result.variationId;
}
var EVENT_FEATURE_EVALUATED = "Feature Evaluated", EVENT_EXPERIMENT_VIEWED = "Experiment Viewed";
var init_core = __esm(() => {
  init_mongrule();
  init_util();
});

// node_modules/.bun/@growthbook+growthbook@1.6.5/node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs
class GrowthBook {
  constructor(options) {
    options = options || {};
    this.version = SDK_VERSION;
    this._options = this.context = options;
    this._renderer = options.renderer || null;
    this._trackedExperiments = new Set;
    this._completedChangeIds = new Set;
    this._trackedFeatures = {};
    this.debug = !!options.debug;
    this._subscriptions = new Set;
    this.ready = false;
    this._assigned = new Map;
    this._activeAutoExperiments = new Map;
    this._triggeredExpKeys = new Set;
    this._initialized = false;
    this._redirectedUrl = "";
    this._deferredTrackingCalls = new Map;
    this._autoExperimentsAllowed = !options.disableExperimentsOnLoad;
    this._destroyCallbacks = [];
    this.logs = [];
    this.log = this.log.bind(this);
    this._saveDeferredTrack = this._saveDeferredTrack.bind(this);
    this._onExperimentEval = this._onExperimentEval.bind(this);
    this._fireSubscriptions = this._fireSubscriptions.bind(this);
    this._recordChangedId = this._recordChangedId.bind(this);
    if (options.remoteEval) {
      if (options.decryptionKey) {
        throw new Error("Encryption is not available for remoteEval");
      }
      if (!options.clientKey) {
        throw new Error("Missing clientKey");
      }
      let isGbHost = false;
      try {
        isGbHost = !!new URL(options.apiHost || "").hostname.match(/growthbook\.io$/i);
      } catch (e) {}
      if (isGbHost) {
        throw new Error("Cannot use remoteEval on GrowthBook Cloud");
      }
    } else {
      if (options.cacheKeyAttributes) {
        throw new Error("cacheKeyAttributes are only used for remoteEval");
      }
    }
    if (options.stickyBucketService) {
      const s = options.stickyBucketService;
      this._saveStickyBucketAssignmentDoc = (doc) => {
        return s.saveAssignments(doc);
      };
    }
    if (options.plugins) {
      for (const plugin of options.plugins) {
        plugin(this);
      }
    }
    if (options.features) {
      this.ready = true;
    }
    if (isBrowser && options.enableDevMode) {
      window._growthbook = this;
      document.dispatchEvent(new Event("gbloaded"));
    }
    if (options.experiments) {
      this.ready = true;
      this._updateAllAutoExperiments();
    }
    if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs) {
      for (const key in this._options.stickyBucketAssignmentDocs) {
        const doc = this._options.stickyBucketAssignmentDocs[key];
        if (doc) {
          this._options.stickyBucketService.saveAssignments(doc).catch(() => {});
        }
      }
    }
    if (this.ready) {
      this.refreshStickyBuckets(this.getPayload());
    }
  }
  async setPayload(payload) {
    this._payload = payload;
    const data = await decryptPayload(payload, this._options.decryptionKey);
    this._decryptedPayload = data;
    await this.refreshStickyBuckets(data);
    if (data.features) {
      this._options.features = data.features;
    }
    if (data.savedGroups) {
      this._options.savedGroups = data.savedGroups;
    }
    if (data.experiments) {
      this._options.experiments = data.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    this._render();
  }
  initSync(options) {
    this._initialized = true;
    const payload = options.payload;
    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }
    if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs) {
      this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(this._options.stickyBucketService, payload);
    }
    this._payload = payload;
    this._decryptedPayload = payload;
    if (payload.features) {
      this._options.features = payload.features;
    }
    if (payload.experiments) {
      this._options.experiments = payload.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    startStreaming(this, options);
    return this;
  }
  async init(options) {
    this._initialized = true;
    options = options || {};
    if (options.cacheSettings) {
      configureCache(options.cacheSettings);
    }
    if (options.payload) {
      await this.setPayload(options.payload);
      startStreaming(this, options);
      return {
        success: true,
        source: "init"
      };
    } else {
      const {
        data,
        ...res
      } = await this._refresh({
        ...options,
        allowStale: true
      });
      startStreaming(this, options);
      await this.setPayload(data || {});
      return res;
    }
  }
  async loadFeatures(options) {
    options = options || {};
    await this.init({
      skipCache: options.skipCache,
      timeout: options.timeout,
      streaming: (this._options.backgroundSync ?? true) && (options.autoRefresh || this._options.subscribeToChanges)
    });
  }
  async refreshFeatures(options) {
    const res = await this._refresh({
      ...options || {},
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return getApiHosts(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this.getExperiments()
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  isRemoteEval() {
    return this._options.remoteEval || false;
  }
  getCacheKeyAttributes() {
    return this._options.cacheKeyAttributes;
  }
  async _refresh({
    timeout,
    skipCache,
    allowStale,
    streaming
  }) {
    if (!this._options.clientKey) {
      throw new Error("Missing clientKey");
    }
    return refreshFeatures({
      instance: this,
      timeout,
      skipCache: skipCache || this._options.disableCache,
      allowStale,
      backgroundSync: streaming ?? this._options.backgroundSync ?? true
    });
  }
  _render() {
    if (this._renderer) {
      try {
        this._renderer();
      } catch (e) {
        console.error("Failed to render", e);
      }
    }
  }
  setFeatures(features) {
    this._options.features = features;
    this.ready = true;
    this._render();
  }
  async setEncryptedFeatures(encryptedString, decryptionKey, subtle) {
    const featuresJSON = await decrypt(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setFeatures(JSON.parse(featuresJSON));
  }
  setExperiments(experiments) {
    this._options.experiments = experiments;
    this.ready = true;
    this._updateAllAutoExperiments();
  }
  async setEncryptedExperiments(encryptedString, decryptionKey, subtle) {
    const experimentsJSON = await decrypt(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setExperiments(JSON.parse(experimentsJSON));
  }
  async setAttributes(attributes) {
    this._options.attributes = attributes;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async updateAttributes(attributes) {
    return this.setAttributes({
      ...this._options.attributes,
      ...attributes
    });
  }
  async setAttributeOverrides(overrides) {
    this._options.attributeOverrides = overrides;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async setForcedVariations(vars) {
    this._options.forcedVariations = vars || {};
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  setForcedFeatures(map) {
    this._options.forcedFeatureValues = map;
    this._render();
  }
  async setURL(url) {
    if (url === this._options.url)
      return;
    this._options.url = url;
    this._redirectedUrl = "";
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      this._updateAllAutoExperiments(true);
      return;
    }
    this._updateAllAutoExperiments(true);
  }
  getAttributes() {
    return {
      ...this._options.attributes,
      ...this._options.attributeOverrides
    };
  }
  getForcedVariations() {
    return this._options.forcedVariations || {};
  }
  getForcedFeatures() {
    return this._options.forcedFeatureValues || new Map;
  }
  getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }
  getUrl() {
    return this._options.url || "";
  }
  getFeatures() {
    return this._options.features || {};
  }
  getExperiments() {
    return this._options.experiments || [];
  }
  getCompletedChangeIds() {
    return Array.from(this._completedChangeIds);
  }
  subscribe(cb) {
    this._subscriptions.add(cb);
    return () => {
      this._subscriptions.delete(cb);
    };
  }
  async _refreshForRemoteEval() {
    if (!this._options.remoteEval)
      return;
    if (!this._initialized)
      return;
    const res = await this._refresh({
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getAllResults() {
    return new Map(this._assigned);
  }
  onDestroy(cb) {
    this._destroyCallbacks.push(cb);
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  destroy(options) {
    options = options || {};
    this._destroyed = true;
    this._destroyCallbacks.forEach((cb) => {
      try {
        cb();
      } catch (e) {
        console.error(e);
      }
    });
    this._subscriptions.clear();
    this._assigned.clear();
    this._trackedExperiments.clear();
    this._completedChangeIds.clear();
    this._deferredTrackingCalls.clear();
    this._trackedFeatures = {};
    this._destroyCallbacks = [];
    this._payload = undefined;
    this._saveStickyBucketAssignmentDoc = undefined;
    unsubscribe(this);
    if (options.destroyAllStreams) {
      clearAutoRefresh();
    }
    this.logs = [];
    if (isBrowser && window._growthbook === this) {
      delete window._growthbook;
    }
    this._activeAutoExperiments.forEach((exp) => {
      exp.undo();
    });
    this._activeAutoExperiments.clear();
    this._triggeredExpKeys.clear();
  }
  setRenderer(renderer) {
    this._renderer = renderer;
  }
  forceVariation(key, variation) {
    this._options.forcedVariations = this._options.forcedVariations || {};
    this._options.forcedVariations[key] = variation;
    if (this._options.remoteEval) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments();
    this._render();
  }
  run(experiment) {
    const {
      result
    } = runExperiment(experiment, null, this._getEvalContext());
    this._onExperimentEval(experiment, result);
    return result;
  }
  triggerExperiment(key) {
    this._triggeredExpKeys.add(key);
    if (!this._options.experiments)
      return null;
    const experiments = this._options.experiments.filter((exp) => exp.key === key);
    return experiments.map((exp) => {
      return this._runAutoExperiment(exp);
    }).filter((res) => res !== null);
  }
  triggerAutoExperiments() {
    this._autoExperimentsAllowed = true;
    this._updateAllAutoExperiments(true);
  }
  _getEvalContext() {
    return {
      user: this._getUserContext(),
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set
      }
    };
  }
  _getUserContext() {
    return {
      attributes: this._options.user ? {
        ...this._options.user,
        ...this._options.attributes
      } : this._options.attributes,
      enableDevMode: this._options.enableDevMode,
      blockedChangeIds: this._options.blockedChangeIds,
      stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
      url: this._getContextUrl(),
      forcedVariations: this._options.forcedVariations,
      forcedFeatureValues: this._options.forcedFeatureValues,
      attributeOverrides: this._options.attributeOverrides,
      saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage,
      devLogs: this.logs,
      trackedExperiments: this._trackedExperiments,
      trackedFeatureUsage: this._trackedFeatures
    };
  }
  _getGlobalContext() {
    return {
      features: this._options.features,
      experiments: this._options.experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      groups: this._options.groups,
      overrides: this._options.overrides,
      onExperimentEval: this._onExperimentEval,
      recordChangeId: this._recordChangedId,
      saveDeferredTrack: this._saveDeferredTrack,
      eventLogger: this._options.eventLogger
    };
  }
  _runAutoExperiment(experiment, forceRerun) {
    const existing = this._activeAutoExperiments.get(experiment);
    if (experiment.manual && !this._triggeredExpKeys.has(experiment.key) && !existing)
      return null;
    const isBlocked = this._isAutoExperimentBlockedByContext(experiment);
    if (isBlocked) {
      this.log("Auto experiment blocked", {
        id: experiment.key
      });
    }
    let result;
    let trackingCall;
    if (isBlocked) {
      result = getExperimentResult(this._getEvalContext(), experiment, -1, false, "");
    } else {
      ({
        result,
        trackingCall
      } = runExperiment(experiment, null, this._getEvalContext()));
      this._onExperimentEval(experiment, result);
    }
    const valueHash = JSON.stringify(result.value);
    if (!forceRerun && result.inExperiment && existing && existing.valueHash === valueHash) {
      return result;
    }
    if (existing)
      this._undoActiveAutoExperiment(experiment);
    if (result.inExperiment) {
      const changeType = getAutoExperimentChangeType(experiment);
      if (changeType === "redirect" && result.value.urlRedirect && experiment.urlPatterns) {
        const url = experiment.persistQueryString ? mergeQueryStrings(this._getContextUrl(), result.value.urlRedirect) : result.value.urlRedirect;
        if (isURLTargeted(url, experiment.urlPatterns)) {
          this.log("Skipping redirect because original URL matches redirect URL", {
            id: experiment.key
          });
          return result;
        }
        this._redirectedUrl = url;
        const {
          navigate,
          delay
        } = this._getNavigateFunction();
        if (navigate) {
          if (isBrowser) {
            Promise.all([...trackingCall ? [promiseTimeout(trackingCall, this._options.maxNavigateDelay ?? 1000)] : [], new Promise((resolve) => window.setTimeout(resolve, this._options.navigateDelay ?? delay))]).then(() => {
              try {
                navigate(url);
              } catch (e) {
                console.error(e);
              }
            });
          } else {
            try {
              navigate(url);
            } catch (e) {
              console.error(e);
            }
          }
        }
      } else if (changeType === "visual") {
        const undo = this._options.applyDomChangesCallback ? this._options.applyDomChangesCallback(result.value) : this._applyDOMChanges(result.value);
        if (undo) {
          this._activeAutoExperiments.set(experiment, {
            undo,
            valueHash
          });
        }
      }
    }
    return result;
  }
  _undoActiveAutoExperiment(exp) {
    const data = this._activeAutoExperiments.get(exp);
    if (data) {
      data.undo();
      this._activeAutoExperiments.delete(exp);
    }
  }
  _updateAllAutoExperiments(forceRerun) {
    if (!this._autoExperimentsAllowed)
      return;
    const experiments = this._options.experiments || [];
    const keys = new Set(experiments);
    this._activeAutoExperiments.forEach((v, k) => {
      if (!keys.has(k)) {
        v.undo();
        this._activeAutoExperiments.delete(k);
      }
    });
    for (const exp of experiments) {
      const result = this._runAutoExperiment(exp, forceRerun);
      if (result && result.inExperiment && getAutoExperimentChangeType(exp) === "redirect") {
        break;
      }
    }
  }
  _onExperimentEval(experiment, result) {
    const prev = this._assigned.get(experiment.key);
    this._assigned.set(experiment.key, {
      experiment,
      result
    });
    if (this._subscriptions.size > 0) {
      this._fireSubscriptions(experiment, result, prev);
    }
  }
  _fireSubscriptions(experiment, result, prev) {
    if (!prev || prev.result.inExperiment !== result.inExperiment || prev.result.variationId !== result.variationId) {
      this._subscriptions.forEach((cb) => {
        try {
          cb(experiment, result);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }
  _recordChangedId(id) {
    this._completedChangeIds.add(id);
  }
  isOn(key) {
    return this.evalFeature(key).on;
  }
  isOff(key) {
    return this.evalFeature(key).off;
  }
  getFeatureValue(key, defaultValue) {
    const value = this.evalFeature(key).value;
    return value === null ? defaultValue : value;
  }
  feature(id) {
    return this.evalFeature(id);
  }
  evalFeature(id) {
    return evalFeature(id, this._getEvalContext());
  }
  log(msg, ctx) {
    if (!this.debug)
      return;
    if (this._options.log)
      this._options.log(msg, ctx);
    else
      console.log(msg, ctx);
  }
  getDeferredTrackingCalls() {
    return Array.from(this._deferredTrackingCalls.values());
  }
  setDeferredTrackingCalls(calls) {
    this._deferredTrackingCalls = new Map(calls.filter((c) => c && c.experiment && c.result).map((c) => {
      return [getExperimentDedupeKey(c.experiment, c.result), c];
    }));
  }
  async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback)
      return;
    const promises = [];
    this._deferredTrackingCalls.forEach((call) => {
      if (!call || !call.experiment || !call.result) {
        console.error("Invalid deferred tracking call", {
          call
        });
      } else {
        promises.push(this._options.trackingCallback(call.experiment, call.result));
      }
    });
    this._deferredTrackingCalls.clear();
    await Promise.all(promises);
  }
  setTrackingCallback(callback) {
    this._options.trackingCallback = callback;
    this.fireDeferredTrackingCalls();
  }
  setFeatureUsageCallback(callback) {
    this._options.onFeatureUsage = callback;
  }
  setEventLogger(logger) {
    this._options.eventLogger = logger;
  }
  async logEvent(eventName, properties) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event"
      });
    }
    if (this._options.eventLogger) {
      try {
        await this._options.eventLogger(eventName, properties || {}, this._getUserContext());
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("No event logger configured");
    }
  }
  _saveDeferredTrack(data) {
    this._deferredTrackingCalls.set(getExperimentDedupeKey(data.experiment, data.result), data);
  }
  _getContextUrl() {
    return this._options.url || (isBrowser ? window.location.href : "");
  }
  _isAutoExperimentBlockedByContext(experiment) {
    const changeType = getAutoExperimentChangeType(experiment);
    if (changeType === "visual") {
      if (this._options.disableVisualExperiments)
        return true;
      if (this._options.disableJsInjection) {
        if (experiment.variations.some((v) => v.js)) {
          return true;
        }
      }
    } else if (changeType === "redirect") {
      if (this._options.disableUrlRedirectExperiments)
        return true;
      try {
        const current = new URL(this._getContextUrl());
        for (const v of experiment.variations) {
          if (!v || !v.urlRedirect)
            continue;
          const url = new URL(v.urlRedirect);
          if (this._options.disableCrossOriginUrlRedirectExperiments) {
            if (url.protocol !== current.protocol)
              return true;
            if (url.host !== current.host)
              return true;
          }
        }
      } catch (e) {
        this.log("Error parsing current or redirect URL", {
          id: experiment.key,
          error: e
        });
        return true;
      }
    } else {
      return true;
    }
    if (experiment.changeId && (this._options.blockedChangeIds || []).includes(experiment.changeId)) {
      return true;
    }
    return false;
  }
  getRedirectUrl() {
    return this._redirectedUrl;
  }
  _getNavigateFunction() {
    if (this._options.navigate) {
      return {
        navigate: this._options.navigate,
        delay: 0
      };
    } else if (isBrowser) {
      return {
        navigate: (url) => {
          window.location.replace(url);
        },
        delay: 100
      };
    }
    return {
      navigate: null,
      delay: 0
    };
  }
  _applyDOMChanges(changes) {
    if (!isBrowser)
      return;
    const undo = [];
    if (changes.css) {
      const s = document.createElement("style");
      s.innerHTML = changes.css;
      document.head.appendChild(s);
      undo.push(() => s.remove());
    }
    if (changes.js) {
      const script = document.createElement("script");
      script.innerHTML = changes.js;
      if (this._options.jsInjectionNonce) {
        script.nonce = this._options.jsInjectionNonce;
      }
      document.head.appendChild(script);
      undo.push(() => script.remove());
    }
    if (changes.domMutations) {
      changes.domMutations.forEach((mutation) => {
        undo.push(dom_mutator_esm_default.declarative(mutation).revert);
      });
    }
    return () => {
      undo.forEach((fn) => fn());
    };
  }
  async refreshStickyBuckets(data) {
    if (this._options.stickyBucketService) {
      const ctx = this._getEvalContext();
      const docs = await getAllStickyBucketAssignmentDocs(ctx, this._options.stickyBucketService, data);
      this._options.stickyBucketAssignmentDocs = docs;
    }
  }
  generateStickyBucketAssignmentDocsSync(stickyBucketService, payload) {
    if (!("getAllAssignmentsSync" in stickyBucketService)) {
      console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
      return;
    }
    const ctx = this._getEvalContext();
    const attributes = getStickyBucketAttributes(ctx, payload);
    return stickyBucketService.getAllAssignmentsSync(attributes);
  }
  inDevMode() {
    return !!this._options.enableDevMode;
  }
}
var isBrowser, SDK_VERSION;
var init_GrowthBook = __esm(() => {
  init_dom_mutator_esm();
  init_util();
  init_feature_repository();
  init_core();
  isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  SDK_VERSION = loadSDKVersion();
});

// node_modules/.bun/@growthbook+growthbook@1.6.5/node_modules/@growthbook/growthbook/dist/esm/index.mjs
var init_esm = __esm(() => {
  init_GrowthBook();
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return _baseIsEqual_default(value, other);
}
var isEqual_default;
var init_isEqual = __esm(() => {
  init__baseIsEqual();
  isEqual_default = isEqual;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/lodash.js
var init_lodash = __esm(() => {
  init_cloneDeep();
  init_isEqual();
  init_memoize();
});

// src/constants/keys.ts
function getGrowthBookClientKey() {
  const adapterKey = process.env.CLAUDE_GB_ADAPTER_KEY;
  if (adapterKey)
    return adapterKey;
  return process.env.USER_TYPE === "ant" ? isEnvTruthy(process.env.ENABLE_GROWTHBOOK_DEV) ? "sdk-yZQvlplybuXjYh6L" : "sdk-xRVcrliHIlrg4og4" : "sdk-zAZezfDKGoZuXXKe";
}
var init_keys = __esm(() => {
  init_envUtils();
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = _castPath_default(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = _toKey_default(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_default(objValue) ? objValue : _isIndex_default(path[index2 + 1]) ? [] : {};
      }
    }
    _assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet_default;
var init__baseSet = __esm(() => {
  init__assignValue();
  init__castPath();
  init__isIndex();
  init_isObject();
  init__toKey();
  _baseSet_default = baseSet;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = _baseGet_default(object, path);
    if (predicate(value, path)) {
      _baseSet_default(result, _castPath_default(path, object), value);
    }
  }
  return result;
}
var _basePickBy_default;
var init__basePickBy = __esm(() => {
  init__baseGet();
  init__baseSet();
  init__castPath();
  _basePickBy_default = basePickBy;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/pickBy.js
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap_default(_getAllKeysIn_default(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee_default(predicate);
  return _basePickBy_default(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_default;
var init_pickBy = __esm(() => {
  init__arrayMap();
  init__baseIteratee();
  init__basePickBy();
  init__getAllKeysIn();
  pickBy_default = pickBy;
});

// src/memdir/paths.ts
import { homedir } from "os";
import { isAbsolute, join as join2, normalize, sep } from "path";
function isAutoMemoryEnabled() {
  const envVal = process.env.CLAUDE_CODE_DISABLE_AUTO_MEMORY;
  if (isEnvTruthy(envVal)) {
    return false;
  }
  if (isEnvDefinedFalsy(envVal)) {
    return true;
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_SIMPLE)) {
    return false;
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) && !process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR) {
    return false;
  }
  const settings = getInitialSettings();
  if (settings.autoMemoryEnabled !== undefined) {
    return settings.autoMemoryEnabled;
  }
  return true;
}
function isExtractModeActive() {
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_passport_quail", false)) {
    return false;
  }
  return !getIsNonInteractiveSession() || getFeatureValue_CACHED_MAY_BE_STALE("tengu_slate_thimble", false);
}
function getMemoryBaseDir() {
  if (process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR) {
    return process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  }
  return getClaudeConfigHomeDir();
}
function validateMemoryPath(raw, expandTilde) {
  if (!raw) {
    return;
  }
  let candidate = raw;
  if (expandTilde && (candidate.startsWith("~/") || candidate.startsWith("~\\"))) {
    const rest = candidate.slice(2);
    const restNorm = normalize(rest || ".");
    if (restNorm === "." || restNorm === "..") {
      return;
    }
    candidate = join2(homedir(), rest);
  }
  const normalized = normalize(candidate).replace(/[/\\]+$/, "");
  if (!isAbsolute(normalized) || normalized.length < 3 || /^[A-Za-z]:$/.test(normalized) || normalized.startsWith("\\\\") || normalized.startsWith("//") || normalized.includes("\x00")) {
    return;
  }
  return (normalized + sep).normalize("NFC");
}
function getAutoMemPathOverride() {
  return validateMemoryPath(process.env.CLAUDE_COWORK_MEMORY_PATH_OVERRIDE, false);
}
function getAutoMemPathSetting() {
  const dir = getSettingsForSource("policySettings")?.autoMemoryDirectory ?? getSettingsForSource("flagSettings")?.autoMemoryDirectory ?? getSettingsForSource("localSettings")?.autoMemoryDirectory ?? getSettingsForSource("userSettings")?.autoMemoryDirectory;
  return validateMemoryPath(dir, true);
}
function hasAutoMemPathOverride() {
  return getAutoMemPathOverride() !== undefined;
}
function getAutoMemBase() {
  return findCanonicalGitRoot(getProjectRoot()) ?? getProjectRoot();
}
function getAutoMemEntrypoint() {
  return join2(getAutoMemPath(), AUTO_MEM_ENTRYPOINT_NAME);
}
function isAutoMemPath(absolutePath) {
  const normalizedPath = normalize(absolutePath);
  return normalizedPath.startsWith(getAutoMemPath());
}
var AUTO_MEM_DIRNAME = "memory", AUTO_MEM_ENTRYPOINT_NAME = "MEMORY.md", getAutoMemPath;
var init_paths = __esm(() => {
  init_memoize();
  init_state();
  init_growthbook();
  init_envUtils();
  init_git();
  init_path();
  init_settings2();
  getAutoMemPath = memoize_default(() => {
    const override = getAutoMemPathOverride() ?? getAutoMemPathSetting();
    if (override) {
      return override;
    }
    const projectsDir = join2(getMemoryBaseDir(), "projects");
    return (join2(projectsDir, sanitizePath(getAutoMemBase()), AUTO_MEM_DIRNAME) + sep).normalize("NFC");
  }, () => getProjectRoot());
});

// src/utils/settings/managedPath.ts
import { join as join3 } from "path";
var getManagedFilePath, getManagedSettingsDropInDir;
var init_managedPath = __esm(() => {
  init_memoize();
  init_platform();
  getManagedFilePath = memoize_default(function() {
    if (process.env.USER_TYPE === "ant" && process.env.CLAUDE_CODE_MANAGED_SETTINGS_PATH) {
      return process.env.CLAUDE_CODE_MANAGED_SETTINGS_PATH;
    }
    switch (getPlatform()) {
      case "macos":
        return "/Library/Application Support/ClaudeCode";
      case "windows":
        return "C:\\Program Files\\ClaudeCode";
      default:
        return "/etc/claude-code";
    }
  });
  getManagedSettingsDropInDir = memoize_default(function() {
    return join3(getManagedFilePath(), "managed-settings.d");
  });
});

// src/utils/configConstants.ts
var NOTIFICATION_CHANNELS, EDITOR_MODES, TEAMMATE_MODES;
var init_configConstants = __esm(() => {
  NOTIFICATION_CHANNELS = [
    "auto",
    "iterm2",
    "iterm2_with_bell",
    "terminal_bell",
    "kitty",
    "ghostty",
    "notifications_disabled"
  ];
  EDITOR_MODES = ["normal", "vim"];
  TEAMMATE_MODES = ["auto", "tmux", "in-process"];
});

// src/utils/config.ts
import { randomBytes } from "crypto";
import { unwatchFile, watchFile } from "fs";
import { basename, dirname, join as join4, resolve } from "path";
function createDefaultGlobalConfig() {
  return {
    numStartups: 0,
    installMethod: undefined,
    autoUpdates: undefined,
    theme: "dark",
    preferredNotifChannel: "auto",
    verbose: false,
    editorMode: "normal",
    autoCompactEnabled: true,
    showTurnDuration: true,
    hasSeenTasksHint: false,
    hasUsedStash: false,
    hasUsedBackgroundTask: false,
    queuedCommandUpHintCount: 0,
    diffTool: "auto",
    customApiKeyResponses: {
      approved: [],
      rejected: []
    },
    env: {},
    tipsHistory: {},
    memoryUsageCount: 0,
    promptQueueUseCount: 0,
    btwUseCount: 0,
    todoFeatureEnabled: true,
    showExpandedTodos: false,
    messageIdleNotifThresholdMs: 60000,
    autoConnectIde: false,
    autoInstallIdeExtension: true,
    fileCheckpointingEnabled: true,
    terminalProgressBarEnabled: true,
    cachedStatsigGates: {},
    cachedDynamicConfigs: {},
    cachedGrowthBookFeatures: {},
    respectGitignore: true,
    copyFullResponse: false
  };
}
function isGlobalConfigKey(key) {
  return GLOBAL_CONFIG_KEYS.includes(key);
}
function resetTrustDialogAcceptedCacheForTesting() {
  _trustAccepted = false;
}
function checkHasTrustDialogAccepted() {
  return _trustAccepted ||= computeTrustDialogAccepted();
}
function computeTrustDialogAccepted() {
  if (getSessionTrustAccepted()) {
    return true;
  }
  const config = getGlobalConfig();
  const projectPath = getProjectPathForConfig();
  const projectConfig = config.projects?.[projectPath];
  if (projectConfig?.hasTrustDialogAccepted) {
    return true;
  }
  let currentPath = normalizePathForConfigKey(getCwd());
  while (true) {
    const pathConfig = config.projects?.[currentPath];
    if (pathConfig?.hasTrustDialogAccepted) {
      return true;
    }
    const parentPath = normalizePathForConfigKey(resolve(currentPath, ".."));
    if (parentPath === currentPath) {
      break;
    }
    currentPath = parentPath;
  }
  return false;
}
function isPathTrusted(dir) {
  const config = getGlobalConfig();
  let currentPath = normalizePathForConfigKey(resolve(dir));
  while (true) {
    if (config.projects?.[currentPath]?.hasTrustDialogAccepted)
      return true;
    const parentPath = normalizePathForConfigKey(resolve(currentPath, ".."));
    if (parentPath === currentPath)
      return false;
    currentPath = parentPath;
  }
}
function isProjectConfigKey(key) {
  return PROJECT_CONFIG_KEYS.includes(key);
}
function wouldLoseAuthState(fresh) {
  const cached = globalConfigCache.config;
  if (!cached)
    return false;
  const lostOauth = cached.oauthAccount !== undefined && fresh.oauthAccount === undefined;
  const lostOnboarding = cached.hasCompletedOnboarding === true && fresh.hasCompletedOnboarding !== true;
  return lostOauth || lostOnboarding;
}
function saveGlobalConfig(updater) {
  if (false) {}
  let written = null;
  try {
    const didWrite = saveConfigWithLock(getGlobalClaudeFile(), createDefaultGlobalConfig, (current) => {
      const config = updater(current);
      if (config === current) {
        return current;
      }
      written = {
        ...config,
        projects: removeProjectHistory(current.projects)
      };
      return written;
    });
    if (didWrite && written) {
      writeThroughGlobalConfigCache(written);
    }
  } catch (error) {
    logForDebugging(`Failed to save config with lock: ${error}`, {
      level: "error"
    });
    const currentConfig = getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig);
    if (wouldLoseAuthState(currentConfig)) {
      logForDebugging("saveGlobalConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.", { level: "error" });
      logEvent("tengu_config_auth_loss_prevented", {});
      return;
    }
    const config = updater(currentConfig);
    if (config === currentConfig) {
      return;
    }
    written = {
      ...config,
      projects: removeProjectHistory(currentConfig.projects)
    };
    saveConfig(getGlobalClaudeFile(), written, DEFAULT_GLOBAL_CONFIG);
    writeThroughGlobalConfigCache(written);
  }
}
function getGlobalConfigWriteCount() {
  return globalConfigWriteCount;
}
function reportConfigCacheStats() {
  const total = configCacheHits + configCacheMisses;
  if (total > 0) {
    logEvent("tengu_config_cache_stats", {
      cache_hits: configCacheHits,
      cache_misses: configCacheMisses,
      hit_rate: configCacheHits / total
    });
  }
  configCacheHits = 0;
  configCacheMisses = 0;
}
function migrateConfigFields(config) {
  if (config.installMethod !== undefined) {
    return config;
  }
  const legacy = config;
  let installMethod = "unknown";
  let autoUpdates = config.autoUpdates ?? true;
  switch (legacy.autoUpdaterStatus) {
    case "migrated":
      installMethod = "local";
      break;
    case "installed":
      installMethod = "native";
      break;
    case "disabled":
      autoUpdates = false;
      break;
    case "enabled":
    case "no_permissions":
    case "not_configured":
      installMethod = "global";
      break;
    case undefined:
      break;
  }
  return {
    ...config,
    installMethod,
    autoUpdates
  };
}
function removeProjectHistory(projects) {
  if (!projects) {
    return projects;
  }
  const cleanedProjects = {};
  let needsCleaning = false;
  for (const [path, projectConfig] of Object.entries(projects)) {
    const legacy = projectConfig;
    if (legacy.history !== undefined) {
      needsCleaning = true;
      const { history, ...cleanedConfig } = legacy;
      cleanedProjects[path] = cleanedConfig;
    } else {
      cleanedProjects[path] = projectConfig;
    }
  }
  return needsCleaning ? cleanedProjects : projects;
}
function startGlobalConfigFreshnessWatcher() {
  if (freshnessWatcherStarted || false)
    return;
  freshnessWatcherStarted = true;
  const file = getGlobalClaudeFile();
  watchFile(file, { interval: CONFIG_FRESHNESS_POLL_MS, persistent: false }, (curr) => {
    if (curr.mtimeMs <= globalConfigCache.mtime)
      return;
    getFsImplementation().readFile(file, { encoding: "utf-8" }).then((content) => {
      if (curr.mtimeMs <= globalConfigCache.mtime)
        return;
      const parsed = safeParseJSON(stripBOM(content));
      if (parsed === null || typeof parsed !== "object")
        return;
      globalConfigCache = {
        config: migrateConfigFields({
          ...createDefaultGlobalConfig(),
          ...parsed
        }),
        mtime: curr.mtimeMs
      };
      lastReadFileStats = { mtime: curr.mtimeMs, size: curr.size };
    }).catch(() => {});
  });
  registerCleanup(async () => {
    unwatchFile(file);
    freshnessWatcherStarted = false;
  });
}
function writeThroughGlobalConfigCache(config) {
  globalConfigCache = { config, mtime: Date.now() };
  lastReadFileStats = null;
}
function getGlobalConfig() {
  if (false) {}
  if (globalConfigCache.config) {
    configCacheHits++;
    return globalConfigCache.config;
  }
  configCacheMisses++;
  try {
    let stats = null;
    try {
      stats = getFsImplementation().statSync(getGlobalClaudeFile());
    } catch {}
    const config = migrateConfigFields(getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig));
    globalConfigCache = {
      config,
      mtime: stats?.mtimeMs ?? Date.now()
    };
    lastReadFileStats = stats ? { mtime: stats.mtimeMs, size: stats.size } : null;
    startGlobalConfigFreshnessWatcher();
    return config;
  } catch {
    return migrateConfigFields(getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig));
  }
}
function getRemoteControlAtStartup() {
  const explicit = getGlobalConfig().remoteControlAtStartup;
  if (explicit !== undefined)
    return explicit;
  if (false) {}
  return false;
}
function getCustomApiKeyStatus(truncatedApiKey) {
  const config = getGlobalConfig();
  if (config.customApiKeyResponses?.approved?.includes(truncatedApiKey)) {
    return "approved";
  }
  if (config.customApiKeyResponses?.rejected?.includes(truncatedApiKey)) {
    return "rejected";
  }
  return "new";
}
function saveConfig(file, config, defaultConfig) {
  const dir = dirname(file);
  const fs = getFsImplementation();
  fs.mkdirSync(dir);
  const filteredConfig = pickBy_default(config, (value, key) => jsonStringify(value) !== jsonStringify(defaultConfig[key]));
  writeFileSyncAndFlush_DEPRECATED(file, jsonStringify(filteredConfig, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
  if (file === getGlobalClaudeFile()) {
    globalConfigWriteCount++;
  }
}
function saveConfigWithLock(file, createDefault, mergeFn) {
  const defaultConfig = createDefault();
  const dir = dirname(file);
  const fs = getFsImplementation();
  fs.mkdirSync(dir);
  let release;
  try {
    const lockFilePath = `${file}.lock`;
    const startTime = Date.now();
    release = lockSync(file, {
      lockfilePath: lockFilePath,
      onCompromised: (err) => {
        logForDebugging(`Config lock compromised: ${err}`, { level: "error" });
      }
    });
    const lockTime = Date.now() - startTime;
    if (lockTime > 100) {
      logForDebugging("Lock acquisition took longer than expected - another MiMo instance may be running");
      logEvent("tengu_config_lock_contention", {
        lock_time_ms: lockTime
      });
    }
    if (lastReadFileStats && file === getGlobalClaudeFile()) {
      try {
        const currentStats = fs.statSync(file);
        if (currentStats.mtimeMs !== lastReadFileStats.mtime || currentStats.size !== lastReadFileStats.size) {
          logEvent("tengu_config_stale_write", {
            read_mtime: lastReadFileStats.mtime,
            write_mtime: currentStats.mtimeMs,
            read_size: lastReadFileStats.size,
            write_size: currentStats.size
          });
        }
      } catch (e) {
        const code = getErrnoCode(e);
        if (code !== "ENOENT") {
          throw e;
        }
      }
    }
    const currentConfig = getConfig(file, createDefault);
    if (file === getGlobalClaudeFile() && wouldLoseAuthState(currentConfig)) {
      logForDebugging("saveConfigWithLock: re-read config is missing auth that cache has; refusing to write to avoid wiping ~/.claude.json. See GH #3117.", { level: "error" });
      logEvent("tengu_config_auth_loss_prevented", {});
      return false;
    }
    const mergedConfig = mergeFn(currentConfig);
    if (mergedConfig === currentConfig) {
      return false;
    }
    const filteredConfig = pickBy_default(mergedConfig, (value, key) => jsonStringify(value) !== jsonStringify(defaultConfig[key]));
    try {
      const fileBase = basename(file);
      const backupDir = getConfigBackupDir();
      try {
        fs.mkdirSync(backupDir);
      } catch (mkdirErr) {
        const mkdirCode = getErrnoCode(mkdirErr);
        if (mkdirCode !== "EEXIST") {
          throw mkdirErr;
        }
      }
      const MIN_BACKUP_INTERVAL_MS = 60000;
      const existingBackups = fs.readdirStringSync(backupDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort().reverse();
      const mostRecentBackup = existingBackups[0];
      const mostRecentTimestamp = mostRecentBackup ? Number(mostRecentBackup.split(".backup.").pop()) : 0;
      const shouldCreateBackup = Number.isNaN(mostRecentTimestamp) || Date.now() - mostRecentTimestamp >= MIN_BACKUP_INTERVAL_MS;
      if (shouldCreateBackup) {
        const backupPath = join4(backupDir, `${fileBase}.backup.${Date.now()}`);
        fs.copyFileSync(file, backupPath);
      }
      const MAX_BACKUPS = 5;
      const backupsForCleanup = shouldCreateBackup ? fs.readdirStringSync(backupDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort().reverse() : existingBackups;
      for (const oldBackup of backupsForCleanup.slice(MAX_BACKUPS)) {
        try {
          fs.unlinkSync(join4(backupDir, oldBackup));
        } catch {}
      }
    } catch (e) {
      const code = getErrnoCode(e);
      if (code !== "ENOENT") {
        logForDebugging(`Failed to backup config: ${e}`, {
          level: "error"
        });
      }
    }
    writeFileSyncAndFlush_DEPRECATED(file, jsonStringify(filteredConfig, null, 2), {
      encoding: "utf-8",
      mode: 384
    });
    if (file === getGlobalClaudeFile()) {
      globalConfigWriteCount++;
    }
    return true;
  } finally {
    if (release) {
      release();
    }
  }
}
function enableConfigs() {
  if (configReadingAllowed) {
    return;
  }
  const startTime = Date.now();
  logForDiagnosticsNoPII("info", "enable_configs_started");
  configReadingAllowed = true;
  getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig, true);
  logForDiagnosticsNoPII("info", "enable_configs_completed", {
    duration_ms: Date.now() - startTime
  });
}
function getConfigBackupDir() {
  return join4(getClaudeConfigHomeDir(), "backups");
}
function findMostRecentBackup(file) {
  const fs = getFsImplementation();
  const fileBase = basename(file);
  const backupDir = getConfigBackupDir();
  try {
    const backups = fs.readdirStringSync(backupDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort();
    const mostRecent = backups.at(-1);
    if (mostRecent) {
      return join4(backupDir, mostRecent);
    }
  } catch {}
  const fileDir = dirname(file);
  try {
    const backups = fs.readdirStringSync(fileDir).filter((f) => f.startsWith(`${fileBase}.backup.`)).sort();
    const mostRecent = backups.at(-1);
    if (mostRecent) {
      return join4(fileDir, mostRecent);
    }
    const legacyBackup = `${file}.backup`;
    try {
      fs.statSync(legacyBackup);
      return legacyBackup;
    } catch {}
  } catch {}
  return null;
}
function getConfig(file, createDefault, throwOnInvalid) {
  if (!configReadingAllowed && true) {
    throw new Error("Config accessed before allowed.");
  }
  const fs = getFsImplementation();
  try {
    const fileContent = fs.readFileSync(file, {
      encoding: "utf-8"
    });
    try {
      const parsedConfig = jsonParse(stripBOM(fileContent));
      return {
        ...createDefault(),
        ...parsedConfig
      };
    } catch (error) {
      const errorMessage2 = error instanceof Error ? error.message : String(error);
      throw new ConfigParseError(errorMessage2, file, createDefault());
    }
  } catch (error) {
    const errCode = getErrnoCode(error);
    if (errCode === "ENOENT") {
      const backupPath = findMostRecentBackup(file);
      if (backupPath) {
        process.stderr.write(`
Claude configuration file not found at: ${file}
` + `A backup file exists at: ${backupPath}
` + `You can manually restore it by running: cp "${backupPath}" "${file}"

`);
      }
      return createDefault();
    }
    if (error instanceof ConfigParseError && throwOnInvalid) {
      throw error;
    }
    if (error instanceof ConfigParseError) {
      logForDebugging(`Config file corrupted, resetting to defaults: ${error.message}`, { level: "error" });
      if (!insideGetConfig) {
        insideGetConfig = true;
        try {
          logError(error);
          let hasBackup = false;
          try {
            fs.statSync(`${file}.backup`);
            hasBackup = true;
          } catch {}
          logEvent("tengu_config_parse_error", {
            has_backup: hasBackup
          });
        } finally {
          insideGetConfig = false;
        }
      }
      process.stderr.write(`
Claude configuration file at ${file} is corrupted: ${error.message}
`);
      const fileBase = basename(file);
      const corruptedBackupDir = getConfigBackupDir();
      try {
        fs.mkdirSync(corruptedBackupDir);
      } catch (mkdirErr) {
        const mkdirCode = getErrnoCode(mkdirErr);
        if (mkdirCode !== "EEXIST") {
          throw mkdirErr;
        }
      }
      const existingCorruptedBackups = fs.readdirStringSync(corruptedBackupDir).filter((f) => f.startsWith(`${fileBase}.corrupted.`));
      let corruptedBackupPath;
      let alreadyBackedUp = false;
      const currentContent = fs.readFileSync(file, { encoding: "utf-8" });
      for (const backup of existingCorruptedBackups) {
        try {
          const backupContent = fs.readFileSync(join4(corruptedBackupDir, backup), { encoding: "utf-8" });
          if (currentContent === backupContent) {
            alreadyBackedUp = true;
            break;
          }
        } catch {}
      }
      if (!alreadyBackedUp) {
        corruptedBackupPath = join4(corruptedBackupDir, `${fileBase}.corrupted.${Date.now()}`);
        try {
          fs.copyFileSync(file, corruptedBackupPath);
          logForDebugging(`Corrupted config backed up to: ${corruptedBackupPath}`, {
            level: "error"
          });
        } catch {}
      }
      const backupPath = findMostRecentBackup(file);
      if (corruptedBackupPath) {
        process.stderr.write(`The corrupted file has been backed up to: ${corruptedBackupPath}
`);
      } else if (alreadyBackedUp) {
        process.stderr.write(`The corrupted file has already been backed up.
`);
      }
      if (backupPath) {
        process.stderr.write(`A backup file exists at: ${backupPath}
` + `You can manually restore it by running: cp "${backupPath}" "${file}"

`);
      } else {
        process.stderr.write(`
`);
      }
    }
    return createDefault();
  }
}
function getCurrentProjectConfig() {
  if (false) {}
  const absolutePath = getProjectPathForConfig();
  const config = getGlobalConfig();
  if (!config.projects) {
    return DEFAULT_PROJECT_CONFIG;
  }
  const projectConfig = config.projects[absolutePath] ?? DEFAULT_PROJECT_CONFIG;
  if (typeof projectConfig.allowedTools === "string") {
    projectConfig.allowedTools = safeParseJSON(projectConfig.allowedTools) ?? [];
  }
  return projectConfig;
}
function saveCurrentProjectConfig(updater) {
  if (false) {}
  const absolutePath = getProjectPathForConfig();
  let written = null;
  try {
    const didWrite = saveConfigWithLock(getGlobalClaudeFile(), createDefaultGlobalConfig, (current) => {
      const currentProjectConfig = current.projects?.[absolutePath] ?? DEFAULT_PROJECT_CONFIG;
      const newProjectConfig = updater(currentProjectConfig);
      if (newProjectConfig === currentProjectConfig) {
        return current;
      }
      written = {
        ...current,
        projects: {
          ...current.projects,
          [absolutePath]: newProjectConfig
        }
      };
      return written;
    });
    if (didWrite && written) {
      writeThroughGlobalConfigCache(written);
    }
  } catch (error) {
    logForDebugging(`Failed to save config with lock: ${error}`, {
      level: "error"
    });
    const config = getConfig(getGlobalClaudeFile(), createDefaultGlobalConfig);
    if (wouldLoseAuthState(config)) {
      logForDebugging("saveCurrentProjectConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.", { level: "error" });
      logEvent("tengu_config_auth_loss_prevented", {});
      return;
    }
    const currentProjectConfig = config.projects?.[absolutePath] ?? DEFAULT_PROJECT_CONFIG;
    const newProjectConfig = updater(currentProjectConfig);
    if (newProjectConfig === currentProjectConfig) {
      return;
    }
    written = {
      ...config,
      projects: {
        ...config.projects,
        [absolutePath]: newProjectConfig
      }
    };
    saveConfig(getGlobalClaudeFile(), written, DEFAULT_GLOBAL_CONFIG);
    writeThroughGlobalConfigCache(written);
  }
}
function isAutoUpdaterDisabled() {
  return getAutoUpdaterDisabledReason() !== null;
}
function shouldSkipPluginAutoupdate() {
  return isAutoUpdaterDisabled() && !isEnvTruthy(process.env.FORCE_AUTOUPDATE_PLUGINS);
}
function formatAutoUpdaterDisabledReason(reason) {
  switch (reason.type) {
    case "development":
      return "development build";
    case "env":
      return `${reason.envVar} set`;
    case "config":
      return "config";
  }
}
function getAutoUpdaterDisabledReason() {
  if (true) {
    return { type: "development" };
  }
  if (!isEnvTruthy(process.env.ENABLE_AUTOUPDATER)) {
    return { type: "config" };
  }
  if (isEnvTruthy(process.env.DISABLE_AUTOUPDATER)) {
    return { type: "env", envVar: "DISABLE_AUTOUPDATER" };
  }
  const essentialTrafficEnvVar = getEssentialTrafficOnlyReason();
  if (essentialTrafficEnvVar) {
    return { type: "env", envVar: essentialTrafficEnvVar };
  }
  const config = getGlobalConfig();
  if (config.autoUpdates === false && (config.installMethod !== "native" || config.autoUpdatesProtectedForNative !== true)) {
    return { type: "config" };
  }
  return null;
}
function getOrCreateUserID() {
  const config = getGlobalConfig();
  if (config.userID) {
    return config.userID;
  }
  const userID = randomBytes(32).toString("hex");
  saveGlobalConfig((current) => ({ ...current, userID }));
  return userID;
}
function recordFirstStartTime() {
  const config = getGlobalConfig();
  if (!config.firstStartTime) {
    const firstStartTime = new Date().toISOString();
    saveGlobalConfig((current) => ({
      ...current,
      firstStartTime: current.firstStartTime ?? firstStartTime
    }));
  }
}
function getMemoryPath(memoryType) {
  const cwd = getOriginalCwd();
  switch (memoryType) {
    case "User":
      return join4(getClaudeConfigHomeDir(), "CLAUDE.md");
    case "Local":
      return join4(cwd, "CLAUDE.local.md");
    case "Project":
      return join4(cwd, "CLAUDE.md");
    case "Managed":
      return join4(getManagedFilePath(), "CLAUDE.md");
    case "AutoMem":
      return getAutoMemEntrypoint();
  }
  if (false) {}
  return "";
}
function getManagedClaudeRulesDir() {
  return join4(getManagedFilePath(), ".claude", "rules");
}
function getUserClaudeRulesDir() {
  return join4(getClaudeConfigHomeDir(), "rules");
}
function _setGlobalConfigCacheForTesting(config) {
  globalConfigCache.config = config;
  globalConfigCache.mtime = config ? Date.now() : 0;
}
var insideGetConfig = false, DEFAULT_PROJECT_CONFIG, DEFAULT_GLOBAL_CONFIG, GLOBAL_CONFIG_KEYS, PROJECT_CONFIG_KEYS, _trustAccepted = false, TEST_GLOBAL_CONFIG_FOR_TESTING, TEST_PROJECT_CONFIG_FOR_TESTING, globalConfigCache, lastReadFileStats = null, configCacheHits = 0, configCacheMisses = 0, globalConfigWriteCount = 0, CONFIG_WRITE_DISPLAY_THRESHOLD = 20, CONFIG_FRESHNESS_POLL_MS = 1000, freshnessWatcherStarted = false, configReadingAllowed = false, getProjectPathForConfig, _getConfigForTesting, _wouldLoseAuthStateForTesting;
var init_config = __esm(() => {
  init_memoize();
  init_pickBy();
  init_state();
  init_paths();
  init_analytics();
  init_cwd();
  init_cleanupRegistry();
  init_debug();
  init_diagLogs();
  init_env();
  init_envUtils();
  init_errors();
  init_file();
  init_fsOperations();
  init_git();
  init_json();
  init_jsonRead();
  init_lockfile();
  init_log();
  init_path();
  init_privacyLevel();
  init_managedPath();
  init_slowOperations();
  init_configConstants();
  DEFAULT_PROJECT_CONFIG = {
    allowedTools: [],
    mcpContextUris: [],
    mcpServers: {},
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    hasTrustDialogAccepted: false,
    projectOnboardingSeenCount: 0,
    hasClaudeMdExternalIncludesApproved: false,
    hasClaudeMdExternalIncludesWarningShown: false
  };
  DEFAULT_GLOBAL_CONFIG = createDefaultGlobalConfig();
  GLOBAL_CONFIG_KEYS = [
    "apiKeyHelper",
    "installMethod",
    "autoUpdates",
    "autoUpdatesProtectedForNative",
    "theme",
    "verbose",
    "preferredNotifChannel",
    "shiftEnterKeyBindingInstalled",
    "editorMode",
    "hasUsedBackslashReturn",
    "autoCompactEnabled",
    "showTurnDuration",
    "diffTool",
    "env",
    "tipsHistory",
    "todoFeatureEnabled",
    "showExpandedTodos",
    "messageIdleNotifThresholdMs",
    "autoConnectIde",
    "autoInstallIdeExtension",
    "fileCheckpointingEnabled",
    "terminalProgressBarEnabled",
    "showStatusInTerminalTab",
    "taskCompleteNotifEnabled",
    "inputNeededNotifEnabled",
    "agentPushNotifEnabled",
    "respectGitignore",
    "claudeInChromeDefaultEnabled",
    "hasCompletedClaudeInChromeOnboarding",
    "lspRecommendationDisabled",
    "lspRecommendationNeverPlugins",
    "lspRecommendationIgnoredCount",
    "copyFullResponse",
    "copyOnSelect",
    "permissionExplainerEnabled",
    "prStatusFooterEnabled",
    "remoteControlAtStartup",
    "remoteDialogSeen"
  ];
  PROJECT_CONFIG_KEYS = [
    "allowedTools",
    "hasTrustDialogAccepted",
    "hasCompletedProjectOnboarding"
  ];
  TEST_GLOBAL_CONFIG_FOR_TESTING = {
    ...DEFAULT_GLOBAL_CONFIG,
    autoUpdates: false
  };
  TEST_PROJECT_CONFIG_FOR_TESTING = {
    ...DEFAULT_PROJECT_CONFIG
  };
  globalConfigCache = {
    config: null,
    mtime: 0
  };
  registerCleanup(async () => {
    reportConfigCacheStats();
  });
  getProjectPathForConfig = memoize_default(() => {
    const originalCwd = getOriginalCwd();
    const gitRoot = findCanonicalGitRoot(originalCwd);
    if (gitRoot) {
      return normalizePathForConfigKey(gitRoot);
    }
    return normalizePathForConfigKey(resolve(originalCwd));
  });
  _getConfigForTesting = getConfig;
  _wouldLoseAuthStateForTesting = wouldLoseAuthState;
});

// src/utils/mimoRuntimeConfig.ts
import { existsSync, readFileSync as readFileSync2 } from "fs";
import { dirname as dirname2, join as join5, resolve as resolve2 } from "path";
import { fileURLToPath } from "url";
function isMiMoRuntime() {
  return process.env.MIMO_CODE_RUNTIME === "1" || process.env.CLAUDE_CONFIG_DIR?.endsWith(".mimo") === true;
}
function nonEmpty(value) {
  if (typeof value !== "string")
    return;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}
function expandHome(path) {
  if (path === "~")
    return process.env.HOME || path;
  if (path.startsWith("~/")) {
    return join5(process.env.HOME || "", path.slice(2));
  }
  return path;
}
function readJsonConfig(path) {
  try {
    return JSON.parse(readFileSync2(path, "utf8"));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to read MiMo config at ${path}: ${message}`);
  }
}
function findPackageRoot(start) {
  let current = resolve2(start);
  for (;; ) {
    const packageJsonPath = join5(current, "package.json");
    if (existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(readFileSync2(packageJsonPath, "utf8"));
        if (packageJson.name === "mimo-code")
          return current;
      } catch {}
    }
    const parent = dirname2(current);
    if (parent === current)
      return;
    current = parent;
  }
}
function findConfigFile() {
  const explicitPath = nonEmpty(process.env.MIMO_CONFIG_FILE);
  if (explicitPath)
    return resolve2(expandHome(explicitPath));
  const configDir = getMiMoConfigDir();
  const roots = [
    configDir,
    findPackageRoot(dirname2(fileURLToPath(import.meta.url)))
  ].filter((root) => Boolean(root));
  for (const root of [...new Set(roots)]) {
    for (const filename of CONFIG_FILENAMES) {
      const path = join5(root, filename);
      if (existsSync(path))
        return path;
    }
  }
  return;
}
function loadMiMoConfig() {
  const path = findConfigFile();
  return path ? readJsonConfig(path) : {};
}
function getMiMoConfigDir(config) {
  const configuredDir = nonEmpty(process.env.MIMO_CONFIG_DIR) || nonEmpty(config?.configDir);
  if (configuredDir)
    return resolve2(expandHome(configuredDir));
  if (!process.env.HOME)
    return;
  return join5(process.env.HOME, ".mimo");
}
function getConfiguredMiMoApiKey(config = loadMiMoConfig()) {
  return nonEmpty(process.env.MIMO_API_KEY) || nonEmpty(config.apiKey);
}
function getConfiguredMiMoBaseUrl(config = loadMiMoConfig()) {
  return nonEmpty(process.env.MIMO_BASE_URL) || nonEmpty(config.baseUrl) || DEFAULT_BASE_URL;
}
function getMiMoMissingApiKeyMessage() {
  return [
    "MiMo API key is required.",
    "Set MIMO_API_KEY, or create a MiMo config file at ~/.mimo/mimo.config.json.",
    "You can also point MIMO_CONFIG_FILE at an explicit config file."
  ].join(" ");
}
function applyMiMoRuntimeConfig() {
  const config = loadMiMoConfig();
  const models = config.models || {};
  const configDir = getMiMoConfigDir(config);
  process.env.MIMO_CODE_RUNTIME = "1";
  process.env.CLAUDE_CONFIG_DIR = nonEmpty(process.env.CLAUDE_CONFIG_DIR) || configDir || join5(process.cwd(), ".mimo");
  process.env.ANTHROPIC_BASE_URL = getConfiguredMiMoBaseUrl(config);
  const apiKey = getConfiguredMiMoApiKey(config) || "";
  process.env.MIMO_API_KEY = apiKey || process.env.MIMO_API_KEY || "";
  process.env.ANTHROPIC_AUTH_TOKEN = process.env.MIMO_API_KEY;
  delete process.env.ANTHROPIC_CUSTOM_HEADERS;
  delete process.env.ANTHROPIC_API_KEY;
  delete process.env.ANTHROPIC_MODEL;
  process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = nonEmpty(process.env.MIMO_HAIKU_MODEL) || nonEmpty(models.haiku) || "mimo-v2.5";
  process.env.ANTHROPIC_DEFAULT_SONNET_MODEL = nonEmpty(process.env.MIMO_SONNET_MODEL) || nonEmpty(models.sonnet) || "mimo-v2.5";
  process.env.ANTHROPIC_DEFAULT_OPUS_MODEL = nonEmpty(process.env.MIMO_OPUS_MODEL) || nonEmpty(models.opus) || "mimo-v2.5-pro";
  process.env.ANTHROPIC_SMALL_FAST_MODEL = nonEmpty(process.env.MIMO_SMALL_FAST_MODEL) || nonEmpty(models.smallFast) || "mimo-v2.5";
}
var DEFAULT_BASE_URL = "https://token-plan-sgp.xiaomimimo.com/anthropic", CONFIG_FILENAMES;
var init_mimoRuntimeConfig = __esm(() => {
  CONFIG_FILENAMES = ["mimo.config.local.json", "mimo.config.json"];
});

// src/utils/userAgent.ts
function getClaudeCodeUserAgent() {
  const product = process.env.MIMO_CODE_RUNTIME === "1" ? "mimo-code" : "claude-code";
  return `${product}/${"1.0.0"}`;
}
var init_userAgent = () => {};

// src/utils/workloadContext.ts
import { AsyncLocalStorage } from "async_hooks";
function getWorkload() {
  return workloadStorage.getStore()?.workload;
}
function runWithWorkload(workload, fn) {
  return workloadStorage.run({ workload }, fn);
}
var WORKLOAD_CRON = "cron", workloadStorage;
var init_workloadContext = __esm(() => {
  workloadStorage = new AsyncLocalStorage;
});

// src/utils/http.ts
function getUserAgent() {
  const product = isMiMoRuntime() ? "mimo-code" : "claude-cli";
  const agentSdkVersion = process.env.CLAUDE_AGENT_SDK_VERSION ? `, agent-sdk/${process.env.CLAUDE_AGENT_SDK_VERSION}` : "";
  const clientApp = process.env.CLAUDE_AGENT_SDK_CLIENT_APP ? `, client-app/${process.env.CLAUDE_AGENT_SDK_CLIENT_APP}` : "";
  const workload = getWorkload();
  const workloadSuffix = workload ? `, workload/${workload}` : "";
  return `${product}/${"1.0.0"} (${process.env.USER_TYPE}, ${process.env.CLAUDE_CODE_ENTRYPOINT ?? "cli"}${agentSdkVersion}${clientApp}${workloadSuffix})`;
}
function getMCPUserAgent() {
  const parts = [];
  if (process.env.CLAUDE_CODE_ENTRYPOINT) {
    parts.push(process.env.CLAUDE_CODE_ENTRYPOINT);
  }
  if (process.env.CLAUDE_AGENT_SDK_VERSION) {
    parts.push(`agent-sdk/${process.env.CLAUDE_AGENT_SDK_VERSION}`);
  }
  if (process.env.CLAUDE_AGENT_SDK_CLIENT_APP) {
    parts.push(`client-app/${process.env.CLAUDE_AGENT_SDK_CLIENT_APP}`);
  }
  const suffix = parts.length > 0 ? ` (${parts.join(", ")})` : "";
  const product = isMiMoRuntime() ? "mimo-code" : "claude-code";
  return `${product}/${"1.0.0"}${suffix}`;
}
function getWebFetchUserAgent() {
  if (isMiMoRuntime()) {
    return `MiMo-Code (${getClaudeCodeUserAgent()})`;
  }
  return `Claude-User (${getClaudeCodeUserAgent()}; +https://support.anthropic.com/)`;
}
function getAuthHeaders() {
  if (isClaudeAISubscriber()) {
    const oauthTokens = getClaudeAIOAuthTokens();
    if (!oauthTokens?.accessToken) {
      return {
        headers: {},
        error: "No OAuth token available"
      };
    }
    return {
      headers: {
        Authorization: `Bearer ${oauthTokens.accessToken}`,
        "anthropic-beta": OAUTH_BETA_HEADER
      }
    };
  }
  const apiKey = getAnthropicApiKey();
  if (!apiKey) {
    return {
      headers: {},
      error: "No API key available"
    };
  }
  return {
    headers: {
      "x-api-key": apiKey
    }
  };
}
async function withOAuth401Retry(request, opts) {
  try {
    return await request();
  } catch (err) {
    if (!axios_default.isAxiosError(err))
      throw err;
    const status = err.response?.status;
    const isAuthError = status === 401 || opts?.also403Revoked && status === 403 && typeof err.response?.data === "string" && err.response.data.includes("OAuth token has been revoked");
    if (!isAuthError)
      throw err;
    const failedAccessToken = getClaudeAIOAuthTokens()?.accessToken;
    if (!failedAccessToken)
      throw err;
    await handleOAuth401Error(failedAccessToken);
    return await request();
  }
}
var init_http = __esm(() => {
  init_axios();
  init_oauth();
  init_auth2();
  init_mimoRuntimeConfig();
  init_userAgent();
  init_workloadContext();
});

// src/utils/user.ts
async function initUser() {
  if (cachedEmail === null && !emailFetchPromise) {
    emailFetchPromise = getEmailAsync();
    cachedEmail = await emailFetchPromise;
    emailFetchPromise = null;
    getCoreUserData.cache.clear?.();
  }
}
function resetUserCache() {
  cachedEmail = null;
  emailFetchPromise = null;
  getCoreUserData.cache.clear?.();
  getGitEmail.cache.clear?.();
}
function getUserForGrowthBook() {
  return getCoreUserData(true);
}
function getEmail() {
  if (cachedEmail !== null) {
    return cachedEmail;
  }
  const oauthAccount = getOauthAccountInfo();
  if (oauthAccount?.emailAddress) {
    return oauthAccount.emailAddress;
  }
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  if (process.env.COO_CREATOR) {
    return `${process.env.COO_CREATOR}@anthropic.com`;
  }
  return;
}
async function getEmailAsync() {
  const oauthAccount = getOauthAccountInfo();
  if (oauthAccount?.emailAddress) {
    return oauthAccount.emailAddress;
  }
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  if (process.env.COO_CREATOR) {
    return `${process.env.COO_CREATOR}@anthropic.com`;
  }
  return getGitEmail();
}
var cachedEmail = null, emailFetchPromise = null, getCoreUserData, getGitEmail;
var init_user = __esm(() => {
  init_execa();
  init_memoize();
  init_state();
  init_auth2();
  init_config();
  init_cwd();
  init_env();
  init_envUtils();
  getCoreUserData = memoize_default((includeAnalyticsMetadata) => {
    const deviceId = getOrCreateUserID();
    const config = getGlobalConfig();
    let subscriptionType;
    let rateLimitTier;
    let firstTokenTime;
    if (includeAnalyticsMetadata) {
      subscriptionType = getSubscriptionType() ?? undefined;
      rateLimitTier = getRateLimitTier() ?? undefined;
      if (subscriptionType && config.claudeCodeFirstTokenDate) {
        const configFirstTokenTime = new Date(config.claudeCodeFirstTokenDate).getTime();
        if (!isNaN(configFirstTokenTime)) {
          firstTokenTime = configFirstTokenTime;
        }
      }
    }
    const oauthAccount = getOauthAccountInfo();
    const organizationUuid = oauthAccount?.organizationUuid;
    const accountUuid = oauthAccount?.accountUuid;
    return {
      deviceId,
      sessionId: getSessionId(),
      email: getEmail(),
      appVersion: "1.0.0",
      platform: getHostPlatformForAnalytics(),
      organizationUuid,
      accountUuid,
      userType: process.env.USER_TYPE,
      subscriptionType,
      rateLimitTier,
      firstTokenTime,
      ...isEnvTruthy(process.env.GITHUB_ACTIONS) && {
        githubActionsMetadata: {
          actor: process.env.GITHUB_ACTOR,
          actorId: process.env.GITHUB_ACTOR_ID,
          repository: process.env.GITHUB_REPOSITORY,
          repositoryId: process.env.GITHUB_REPOSITORY_ID,
          repositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
          repositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID
        }
      }
    };
  });
  getGitEmail = memoize_default(async () => {
    const result = await execa("git config --get user.email", {
      shell: true,
      reject: false,
      cwd: getCwd()
    });
    return result.exitCode === 0 && result.stdout ? result.stdout.trim() : undefined;
  });
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/utils/validation.js
function isLogAttributeValue(val) {
  return isLogAttributeValueInternal(val, new WeakSet);
}
function isLogAttributeValueInternal(val, visited) {
  if (val == null) {
    return true;
  }
  if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
    return true;
  }
  if (val instanceof Uint8Array) {
    return true;
  }
  if (typeof val === "object") {
    if (visited.has(val)) {
      return false;
    }
    visited.add(val);
    if (Array.isArray(val)) {
      return val.every((item) => isLogAttributeValueInternal(item, visited));
    }
    const obj = val;
    if (obj.constructor !== Object && obj.constructor !== undefined) {
      return false;
    }
    return Object.values(obj).every((item) => isLogAttributeValueInternal(item, visited));
  }
  return false;
}
var init_validation = () => {};

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/LogRecordImpl.js
class LogRecordImpl {
  hrTime;
  hrTimeObserved;
  spanContext;
  resource;
  instrumentationScope;
  attributes = {};
  _severityText;
  _severityNumber;
  _body;
  _eventName;
  _attributesCount = 0;
  _droppedAttributesCount = 0;
  _isReadonly = false;
  _logRecordLimits;
  set severityText(severityText) {
    if (this._isLogRecordReadonly()) {
      return;
    }
    this._severityText = severityText;
  }
  get severityText() {
    return this._severityText;
  }
  set severityNumber(severityNumber) {
    if (this._isLogRecordReadonly()) {
      return;
    }
    this._severityNumber = severityNumber;
  }
  get severityNumber() {
    return this._severityNumber;
  }
  set body(body) {
    if (this._isLogRecordReadonly()) {
      return;
    }
    this._body = body;
  }
  get body() {
    return this._body;
  }
  get eventName() {
    return this._eventName;
  }
  set eventName(eventName) {
    if (this._isLogRecordReadonly()) {
      return;
    }
    this._eventName = eventName;
  }
  get droppedAttributesCount() {
    return this._droppedAttributesCount;
  }
  constructor(_sharedState, instrumentationScope, logRecord) {
    const { timestamp, observedTimestamp, eventName, severityNumber, severityText, body, attributes = {}, exception, context } = logRecord;
    const now = Date.now();
    this.hrTime = import_core3.timeInputToHrTime(timestamp ?? now);
    this.hrTimeObserved = import_core3.timeInputToHrTime(observedTimestamp ?? now);
    if (context) {
      const spanContext = api.trace.getSpanContext(context);
      if (spanContext && api.isSpanContextValid(spanContext)) {
        this.spanContext = spanContext;
      }
    }
    this.severityNumber = severityNumber;
    this.severityText = severityText;
    this.body = body;
    this.resource = _sharedState.resource;
    this.instrumentationScope = instrumentationScope;
    this._logRecordLimits = _sharedState.logRecordLimits;
    this._eventName = eventName;
    this.setAttributes(attributes);
    if (exception != null) {
      this._setException(exception);
    }
  }
  setAttribute(key, value) {
    if (this._isLogRecordReadonly()) {
      return this;
    }
    if (key.length === 0) {
      api.diag.warn(`Invalid attribute key: ${key}`);
      return this;
    }
    if (!isLogAttributeValue(value)) {
      api.diag.warn(`Invalid attribute value set for key: ${key}`);
      return this;
    }
    const isNewKey = !Object.prototype.hasOwnProperty.call(this.attributes, key);
    if (isNewKey && this._attributesCount >= this._logRecordLimits.attributeCountLimit) {
      this._droppedAttributesCount++;
      if (this._droppedAttributesCount === 1) {
        api.diag.warn("Dropping extra attributes.");
      }
      return this;
    }
    this.attributes[key] = this._truncateToSize(value);
    if (isNewKey) {
      this._attributesCount++;
    }
    return this;
  }
  setAttributes(attributes) {
    for (const [k, v] of Object.entries(attributes)) {
      this.setAttribute(k, v);
    }
    return this;
  }
  setBody(body) {
    this.body = body;
    return this;
  }
  setEventName(eventName) {
    this.eventName = eventName;
    return this;
  }
  setSeverityNumber(severityNumber) {
    this.severityNumber = severityNumber;
    return this;
  }
  setSeverityText(severityText) {
    this.severityText = severityText;
    return this;
  }
  _makeReadonly() {
    this._isReadonly = true;
  }
  _truncateToSize(value) {
    const limit = this._logRecordLimits.attributeValueLengthLimit;
    if (limit <= 0) {
      api.diag.warn(`Attribute value limit must be positive, got ${limit}`);
      return value;
    }
    if (value == null) {
      return value;
    }
    if (typeof value === "string") {
      return this._truncateToLimitUtil(value, limit);
    }
    if (value instanceof Uint8Array) {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((val) => this._truncateToSize(val));
    }
    if (typeof value === "object") {
      const truncatedObj = {};
      for (const [k, v] of Object.entries(value)) {
        truncatedObj[k] = this._truncateToSize(v);
      }
      return truncatedObj;
    }
    return value;
  }
  _setException(exception) {
    let hasMinimumAttributes = false;
    if (typeof exception === "string" || typeof exception === "number") {
      if (!Object.hasOwn(this.attributes, import_semantic_conventions.ATTR_EXCEPTION_MESSAGE)) {
        this.setAttribute(import_semantic_conventions.ATTR_EXCEPTION_MESSAGE, String(exception));
      }
      hasMinimumAttributes = true;
    } else if (exception && typeof exception === "object") {
      const exceptionObj = exception;
      if (exceptionObj.code) {
        if (!Object.hasOwn(this.attributes, import_semantic_conventions.ATTR_EXCEPTION_TYPE)) {
          this.setAttribute(import_semantic_conventions.ATTR_EXCEPTION_TYPE, exceptionObj.code.toString());
        }
        hasMinimumAttributes = true;
      } else if (exceptionObj.name) {
        if (!Object.hasOwn(this.attributes, import_semantic_conventions.ATTR_EXCEPTION_TYPE)) {
          this.setAttribute(import_semantic_conventions.ATTR_EXCEPTION_TYPE, exceptionObj.name);
        }
        hasMinimumAttributes = true;
      }
      if (exceptionObj.message) {
        if (!Object.hasOwn(this.attributes, import_semantic_conventions.ATTR_EXCEPTION_MESSAGE)) {
          this.setAttribute(import_semantic_conventions.ATTR_EXCEPTION_MESSAGE, exceptionObj.message);
        }
        hasMinimumAttributes = true;
      }
      if (exceptionObj.stack) {
        if (!Object.hasOwn(this.attributes, import_semantic_conventions.ATTR_EXCEPTION_STACKTRACE)) {
          this.setAttribute(import_semantic_conventions.ATTR_EXCEPTION_STACKTRACE, exceptionObj.stack);
        }
        hasMinimumAttributes = true;
      }
    }
    if (!hasMinimumAttributes) {
      api.diag.warn(`Failed to record an exception ${exception}`);
    }
  }
  _truncateToLimitUtil(value, limit) {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit);
  }
  _isLogRecordReadonly() {
    if (this._isReadonly) {
      api.diag.warn("Can not execute the operation on emitted log record");
    }
    return this._isReadonly;
  }
}
var api, import_core3, import_semantic_conventions;
var init_LogRecordImpl = __esm(() => {
  init_validation();
  api = __toESM(require_src(), 1);
  import_core3 = __toESM(require_src3(), 1);
  import_semantic_conventions = __toESM(require_src2(), 1);
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/Logger.js
class Logger {
  instrumentationScope;
  _sharedState;
  _loggerConfig;
  constructor(instrumentationScope, sharedState) {
    this.instrumentationScope = instrumentationScope;
    this._sharedState = sharedState;
    this._loggerConfig = this._sharedState.getLoggerConfig(this.instrumentationScope);
  }
  emit(logRecord) {
    const loggerConfig = this._loggerConfig;
    const currentContext = logRecord.context || import_api.context.active();
    const recordSeverity = logRecord.severityNumber ?? import_api_logs.SeverityNumber.UNSPECIFIED;
    if (recordSeverity !== import_api_logs.SeverityNumber.UNSPECIFIED && recordSeverity < loggerConfig.minimumSeverity) {
      return;
    }
    if (loggerConfig.traceBased) {
      const spanContext = import_api.trace.getSpanContext(currentContext);
      if (spanContext && import_api.isSpanContextValid(spanContext)) {
        const isSampled = (spanContext.traceFlags & import_api.TraceFlags.SAMPLED) === import_api.TraceFlags.SAMPLED;
        if (!isSampled) {
          return;
        }
      }
    }
    const logRecordInstance = new LogRecordImpl(this._sharedState, this.instrumentationScope, {
      context: currentContext,
      ...logRecord
    });
    this._sharedState.loggerMetrics.emitLog();
    this._sharedState.activeProcessor.onEmit(logRecordInstance, currentContext);
    logRecordInstance._makeReadonly();
  }
  enabled(options) {
    const loggerConfig = this._loggerConfig;
    if (loggerConfig.disabled) {
      return false;
    }
    const severityNumber = options?.severityNumber;
    if (typeof severityNumber === "number" && severityNumber !== import_api_logs.SeverityNumber.UNSPECIFIED && severityNumber < loggerConfig.minimumSeverity) {
      return false;
    }
    const currentContext = options?.context || import_api.context.active();
    if (loggerConfig.traceBased) {
      const spanContext = import_api.trace.getSpanContext(currentContext);
      if (spanContext && import_api.isSpanContextValid(spanContext)) {
        const isSampled = (spanContext.traceFlags & import_api.TraceFlags.SAMPLED) === import_api.TraceFlags.SAMPLED;
        if (!isSampled) {
          return false;
        }
      }
    }
    const enabledOpts = {
      context: currentContext,
      instrumentationScope: this.instrumentationScope,
      severityNumber: options?.severityNumber,
      eventName: options?.eventName
    };
    for (const processor of this._sharedState.processors) {
      if (!processor.enabled || processor.enabled(enabledOpts)) {
        return true;
      }
    }
    return false;
  }
}
var import_api_logs, import_api;
var init_Logger = __esm(() => {
  init_LogRecordImpl();
  import_api_logs = __toESM(require_src5(), 1);
  import_api = __toESM(require_src(), 1);
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/export/NoopLogRecordProcessor.js
class NoopLogRecordProcessor {
  forceFlush() {
    return Promise.resolve();
  }
  onEmit(_logRecord, _context) {}
  shutdown() {
    return Promise.resolve();
  }
  enabled(_options) {
    return false;
  }
}
var init_NoopLogRecordProcessor = () => {};

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/MultiLogRecordProcessor.js
class MultiLogRecordProcessor {
  processors;
  forceFlushTimeoutMillis;
  constructor(processors, forceFlushTimeoutMillis) {
    this.processors = processors;
    this.forceFlushTimeoutMillis = forceFlushTimeoutMillis;
  }
  async forceFlush() {
    const timeout = this.forceFlushTimeoutMillis;
    await Promise.all(this.processors.map((processor) => import_core4.callWithTimeout(processor.forceFlush(), timeout)));
  }
  onEmit(logRecord, context2) {
    this.processors.forEach((processors) => processors.onEmit(logRecord, context2));
  }
  async shutdown() {
    await Promise.all(this.processors.map((processor) => processor.shutdown()));
  }
  enabled(options) {
    for (const processor of this.processors) {
      if (!processor.enabled || processor.enabled(options)) {
        return true;
      }
    }
    return false;
  }
}
var import_core4;
var init_MultiLogRecordProcessor = __esm(() => {
  import_core4 = __toESM(require_src3(), 1);
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/internal/utils.js
function getInstrumentationScopeKey(scope) {
  return `${scope.name}@${scope.version || ""}:${scope.schemaUrl || ""}`;
}
var init_utils = () => {};

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/semconv.js
var METRIC_OTEL_SDK_LOG_CREATED = "otel.sdk.log.created";
var init_semconv = () => {};

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/LoggerMetrics.js
class LoggerMetrics {
  createdLogs;
  constructor(meter) {
    this.createdLogs = meter.createCounter(METRIC_OTEL_SDK_LOG_CREATED, {
      unit: "{log_record}",
      description: "The number of logs submitted to enabled SDK Loggers."
    });
  }
  emitLog() {
    this.createdLogs.add(1);
  }
}
var init_LoggerMetrics = __esm(() => {
  init_semconv();
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/version.js
var VERSION = "0.215.0";
var init_version = () => {};

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/internal/LoggerProviderSharedState.js
class LoggerProviderSharedState {
  loggers = new Map;
  activeProcessor;
  registeredLogRecordProcessors = [];
  resource;
  forceFlushTimeoutMillis;
  logRecordLimits;
  processors;
  loggerMetrics;
  _loggerConfigurator;
  _loggerConfigs = new Map;
  constructor(resource, forceFlushTimeoutMillis, logRecordLimits, processors, loggerConfigurator, meterProvider) {
    this.resource = resource;
    this.forceFlushTimeoutMillis = forceFlushTimeoutMillis;
    this.logRecordLimits = logRecordLimits;
    this.processors = processors;
    if (processors.length > 0) {
      this.registeredLogRecordProcessors = processors;
      this.activeProcessor = new MultiLogRecordProcessor(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis);
    } else {
      this.activeProcessor = new NoopLogRecordProcessor;
    }
    this._loggerConfigurator = loggerConfigurator ?? DEFAULT_LOGGER_CONFIGURATOR;
    const meter = meterProvider ? meterProvider.getMeter("@opentelemetry/sdk-logs", VERSION) : import_api2.createNoopMeter();
    this.loggerMetrics = new LoggerMetrics(meter);
  }
  getLoggerConfig(instrumentationScope) {
    const key = getInstrumentationScopeKey(instrumentationScope);
    let config = this._loggerConfigs.get(key);
    if (config) {
      return config;
    }
    config = this._loggerConfigurator(instrumentationScope);
    this._loggerConfigs.set(key, config);
    return config;
  }
}
var import_api2, import_api_logs2, DEFAULT_LOGGER_CONFIG, DEFAULT_LOGGER_CONFIGURATOR = () => ({
  ...DEFAULT_LOGGER_CONFIG
});
var init_LoggerProviderSharedState = __esm(() => {
  init_NoopLogRecordProcessor();
  init_MultiLogRecordProcessor();
  init_utils();
  init_LoggerMetrics();
  init_version();
  import_api2 = __toESM(require_src(), 1);
  import_api_logs2 = __toESM(require_src5(), 1);
  DEFAULT_LOGGER_CONFIG = {
    disabled: false,
    minimumSeverity: import_api_logs2.SeverityNumber.UNSPECIFIED,
    traceBased: false
  };
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/LoggerProvider.js
class LoggerProvider {
  _shutdownOnce;
  _sharedState;
  constructor(config = {}) {
    const mergedConfig = {
      resource: config.resource ?? import_resources.defaultResource(),
      forceFlushTimeoutMillis: config.forceFlushTimeoutMillis ?? 30000,
      logRecordLimits: {
        attributeCountLimit: config.logRecordLimits?.attributeCountLimit ?? 128,
        attributeValueLengthLimit: config.logRecordLimits?.attributeValueLengthLimit ?? Infinity
      },
      loggerConfigurator: config.loggerConfigurator ?? DEFAULT_LOGGER_CONFIGURATOR,
      processors: config.processors ?? [],
      meterProvider: config.meterProvider
    };
    this._sharedState = new LoggerProviderSharedState(mergedConfig.resource, mergedConfig.forceFlushTimeoutMillis, mergedConfig.logRecordLimits, mergedConfig.processors, mergedConfig.loggerConfigurator, mergedConfig.meterProvider);
    this._shutdownOnce = new import_core5.BindOnceFuture(this._shutdown, this);
  }
  getLogger(name, version, options) {
    if (this._shutdownOnce.isCalled) {
      import_api3.diag.warn("A shutdown LoggerProvider cannot provide a Logger");
      return import_api_logs3.NOOP_LOGGER;
    }
    if (!name) {
      import_api3.diag.warn("Logger requested without instrumentation scope name.");
    }
    const loggerName = name || DEFAULT_LOGGER_NAME;
    const key = `${loggerName}@${version || ""}:${options?.schemaUrl || ""}`;
    if (!this._sharedState.loggers.has(key)) {
      this._sharedState.loggers.set(key, new Logger({ name: loggerName, version, schemaUrl: options?.schemaUrl }, this._sharedState));
    }
    return this._sharedState.loggers.get(key);
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) {
      import_api3.diag.warn("invalid attempt to force flush after LoggerProvider shutdown");
      return this._shutdownOnce.promise;
    }
    return this._sharedState.activeProcessor.forceFlush();
  }
  shutdown() {
    if (this._shutdownOnce.isCalled) {
      import_api3.diag.warn("shutdown may only be called once per LoggerProvider");
      return this._shutdownOnce.promise;
    }
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return this._sharedState.activeProcessor.shutdown();
  }
}
var import_api3, import_api_logs3, import_resources, import_core5, DEFAULT_LOGGER_NAME = "unknown";
var init_LoggerProvider = __esm(() => {
  init_Logger();
  init_LoggerProviderSharedState();
  import_api3 = __toESM(require_src(), 1);
  import_api_logs3 = __toESM(require_src5(), 1);
  import_resources = __toESM(require_src4(), 1);
  import_core5 = __toESM(require_src3(), 1);
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/export/ConsoleLogRecordExporter.js
class ConsoleLogRecordExporter {
  export(logs, resultCallback) {
    this._sendLogRecords(logs, resultCallback);
  }
  async forceFlush() {}
  async shutdown() {}
  _exportInfo(logRecord) {
    return {
      resource: {
        attributes: logRecord.resource.attributes
      },
      instrumentationScope: logRecord.instrumentationScope,
      timestamp: import_core6.hrTimeToMicroseconds(logRecord.hrTime),
      traceId: logRecord.spanContext?.traceId,
      spanId: logRecord.spanContext?.spanId,
      traceFlags: logRecord.spanContext?.traceFlags,
      severityText: logRecord.severityText,
      severityNumber: logRecord.severityNumber,
      eventName: logRecord.eventName,
      body: logRecord.body,
      attributes: logRecord.attributes
    };
  }
  _sendLogRecords(logRecords, done) {
    for (const logRecord of logRecords) {
      console.dir(this._exportInfo(logRecord), { depth: 3 });
    }
    done?.({ code: import_core6.ExportResultCode.SUCCESS });
  }
}
var import_core6;
var init_ConsoleLogRecordExporter = __esm(() => {
  import_core6 = __toESM(require_src3(), 1);
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/export/BatchLogRecordProcessorBase.js
async function waitForResources(logRecords) {
  const pendingResources = [];
  for (let i = 0, len = logRecords.length;i < len; i++) {
    const logRecord = logRecords[i];
    if (logRecord.resource.asyncAttributesPending && logRecord.resource.waitForAsyncAttributes) {
      pendingResources.push(logRecord.resource.waitForAsyncAttributes());
    }
  }
  if (pendingResources != null && pendingResources.length > 0) {
    await Promise.all(pendingResources);
  }
}

class ExportOperation {
  _exportCompleted;
  _exportScheduledPromise;
  _exportScheduledResolve;
  constructor(exporter, logRecords, exportTimeoutMillis) {
    this._exportScheduledPromise = new Promise((resolve3) => {
      this._exportScheduledResolve = resolve3;
    });
    this._exportCompleted = this._executeExport(exporter, logRecords, exportTimeoutMillis);
  }
  get exportCompleted() {
    return this._exportCompleted;
  }
  get exportScheduled() {
    return this._exportScheduledPromise;
  }
  async _executeExport(exporter, logRecords, exportTimeoutMillis) {
    try {
      await waitForResources(logRecords);
      await import_api4.context.with(import_core7.suppressTracing(import_api4.context.active()), async () => {
        return this._exportWithTimeout(exporter, logRecords, exportTimeoutMillis);
      });
    } catch (e) {
      import_core7.globalErrorHandler(e);
      this._exportScheduledResolve();
    }
  }
  async _exportWithTimeout(exporter, logRecords, exportTimeoutMillis) {
    return new Promise((resolve3, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("Timeout"));
      }, exportTimeoutMillis);
      exporter.export(logRecords, (result) => {
        clearTimeout(timer);
        if (result.code === import_core7.ExportResultCode.SUCCESS) {
          resolve3();
        } else {
          reject(result.error ?? new Error("BatchLogRecordProcessor: log record export failed"));
        }
      });
      this._exportScheduledResolve();
    });
  }
}

class BatchLogRecordProcessorBase {
  _maxExportBatchSize;
  _maxQueueSize;
  _scheduledDelayMillis;
  _exportTimeoutMillis;
  _exporter;
  _currentExport = null;
  _finishedLogRecords = [];
  _timer;
  _shutdownOnce;
  _flushing = false;
  constructor(exporter, config) {
    this._exporter = exporter;
    this._maxExportBatchSize = config?.maxExportBatchSize ?? 512;
    this._maxQueueSize = config?.maxQueueSize ?? 2048;
    this._scheduledDelayMillis = config?.scheduledDelayMillis ?? 5000;
    this._exportTimeoutMillis = config?.exportTimeoutMillis ?? 30000;
    this._shutdownOnce = new import_core7.BindOnceFuture(this._shutdown, this);
    if (this._maxExportBatchSize > this._maxQueueSize) {
      import_api4.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
      this._maxExportBatchSize = this._maxQueueSize;
    }
  }
  onEmit(logRecord) {
    if (this._shutdownOnce.isCalled) {
      return;
    }
    this._addToBuffer(logRecord);
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) {
      return this._shutdownOnce.promise;
    }
    return this._flushAll();
  }
  _addToBuffer(logRecord) {
    if (this._finishedLogRecords.length >= this._maxQueueSize) {
      return;
    }
    this._finishedLogRecords.push(logRecord);
    this._maybeStartTimer();
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  async _shutdown() {
    this.onShutdown();
    await this._flushAll();
    await this._exporter.shutdown();
  }
  async _flushAll() {
    if (this._flushing) {
      return;
    }
    this._flushing = true;
    let toFlush = this._finishedLogRecords;
    this._finishedLogRecords = [];
    this._clearTimer();
    if (this._currentExport !== null) {
      await this._exporter.forceFlush();
      await this._currentExport.exportCompleted;
      this._currentExport = null;
    }
    while (toFlush.length > 0) {
      let batch;
      if (toFlush.length <= this._maxExportBatchSize) {
        batch = toFlush;
        toFlush = [];
      } else {
        batch = toFlush.splice(0, this._maxExportBatchSize);
      }
      const exportOp = new ExportOperation(this._exporter, batch, this._exportTimeoutMillis);
      this._currentExport = exportOp;
      try {
        await exportOp.exportScheduled;
        await this._exporter.forceFlush();
        await exportOp.exportCompleted;
      } catch (e) {
        import_core7.globalErrorHandler(e);
      } finally {
        this._currentExport = null;
      }
    }
    this._flushing = false;
    this._maybeStartTimer();
  }
  _extractBatch() {
    if (this._finishedLogRecords.length === 0) {
      return null;
    }
    if (this._finishedLogRecords.length <= this._maxExportBatchSize) {
      const batch = this._finishedLogRecords;
      this._finishedLogRecords = [];
      return batch;
    } else {
      return this._finishedLogRecords.splice(0, this._maxExportBatchSize);
    }
  }
  _exportOneBatch() {
    this._clearTimer();
    const logRecords = this._extractBatch();
    if (logRecords === null) {
      return;
    }
    const exportOp = new ExportOperation(this._exporter, logRecords, this._exportTimeoutMillis);
    this._currentExport = exportOp;
    exportOp.exportCompleted.then(() => {
      this._currentExport = null;
      this._maybeStartTimer();
    }).catch((error) => {
      this._currentExport = null;
      import_core7.globalErrorHandler(error);
      this._maybeStartTimer();
    });
  }
  _maybeStartTimer() {
    if (this._shutdownOnce.isCalled) {
      return;
    }
    if (this._flushing) {
      return;
    }
    if (this._finishedLogRecords.length === 0) {
      return;
    }
    if (this._currentExport !== null) {
      return;
    }
    if (this._finishedLogRecords.length >= this._maxExportBatchSize) {
      this._exportOneBatch();
      return;
    }
    if (this._timer !== undefined) {
      return;
    }
    this._timer = setTimeout(() => {
      this._timer = undefined;
      this._exportOneBatch();
    }, this._scheduledDelayMillis);
    if (typeof this._timer !== "number") {
      this._timer.unref();
    }
  }
  _clearTimer() {
    if (this._timer !== undefined) {
      clearTimeout(this._timer);
      this._timer = undefined;
    }
  }
}
var import_api4, import_core7;
var init_BatchLogRecordProcessorBase = __esm(() => {
  import_api4 = __toESM(require_src(), 1);
  import_core7 = __toESM(require_src3(), 1);
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/platform/node/export/BatchLogRecordProcessor.js
var BatchLogRecordProcessor;
var init_BatchLogRecordProcessor = __esm(() => {
  init_BatchLogRecordProcessorBase();
  BatchLogRecordProcessor = class BatchLogRecordProcessor extends BatchLogRecordProcessorBase {
    onShutdown() {}
  };
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/platform/node/index.js
var init_node = __esm(() => {
  init_BatchLogRecordProcessor();
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/platform/index.js
var init_platform2 = __esm(() => {
  init_node();
});

// node_modules/.bun/@opentelemetry+sdk-logs@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-logs/build/esm/index.js
var init_esm2 = __esm(() => {
  init_LoggerProvider();
  init_ConsoleLogRecordExporter();
  init_platform2();
});

// src/services/analytics/config.ts
function isAnalyticsDisabled() {
  return isMiMoRuntime() || false || isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY) || isTelemetryDisabled();
}
function isFeedbackSurveyDisabled() {
  return isMiMoRuntime() || false || isTelemetryDisabled();
}
var init_config2 = __esm(() => {
  init_envUtils();
  init_mimoRuntimeConfig();
  init_privacyLevel();
});

// src/types/generated/google/protobuf/timestamp.ts
function createBaseTimestamp() {
  return { seconds: 0, nanos: 0 };
}
function isSet(value) {
  return value !== null && value !== undefined;
}
var Timestamp;
var init_timestamp = __esm(() => {
  Timestamp = {
    fromJSON(object) {
      return {
        seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
        nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.seconds !== undefined) {
        obj.seconds = Math.round(message.seconds);
      }
      if (message.nanos !== undefined) {
        obj.nanos = Math.round(message.nanos);
      }
      return obj;
    },
    create(base) {
      return Timestamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseTimestamp();
      message.seconds = object.seconds ?? 0;
      message.nanos = object.nanos ?? 0;
      return message;
    }
  };
});

// src/types/generated/events_mono/common/v1/auth.ts
function createBasePublicApiAuth() {
  return { account_id: 0, organization_uuid: "", account_uuid: "" };
}
function isSet2(value) {
  return value !== null && value !== undefined;
}
var PublicApiAuth;
var init_auth = __esm(() => {
  PublicApiAuth = {
    fromJSON(object) {
      return {
        account_id: isSet2(object.account_id) ? globalThis.Number(object.account_id) : 0,
        organization_uuid: isSet2(object.organization_uuid) ? globalThis.String(object.organization_uuid) : "",
        account_uuid: isSet2(object.account_uuid) ? globalThis.String(object.account_uuid) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.account_id !== undefined) {
        obj.account_id = Math.round(message.account_id);
      }
      if (message.organization_uuid !== undefined) {
        obj.organization_uuid = message.organization_uuid;
      }
      if (message.account_uuid !== undefined) {
        obj.account_uuid = message.account_uuid;
      }
      return obj;
    },
    create(base) {
      return PublicApiAuth.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBasePublicApiAuth();
      message.account_id = object.account_id ?? 0;
      message.organization_uuid = object.organization_uuid ?? "";
      message.account_uuid = object.account_uuid ?? "";
      return message;
    }
  };
});

// src/types/generated/events_mono/claude_code/v1/claude_code_internal_event.ts
function createBaseGitHubActionsMetadata() {
  return { actor_id: "", repository_id: "", repository_owner_id: "" };
}
function createBaseEnvironmentMetadata() {
  return {
    platform: "",
    node_version: "",
    terminal: "",
    package_managers: "",
    runtimes: "",
    is_running_with_bun: false,
    is_ci: false,
    is_claubbit: false,
    is_github_action: false,
    is_claude_code_action: false,
    is_claude_ai_auth: false,
    version: "",
    github_event_name: "",
    github_actions_runner_environment: "",
    github_actions_runner_os: "",
    github_action_ref: "",
    wsl_version: "",
    github_actions_metadata: undefined,
    arch: "",
    is_claude_code_remote: false,
    remote_environment_type: "",
    claude_code_container_id: "",
    claude_code_remote_session_id: "",
    tags: [],
    deployment_environment: "",
    is_conductor: false,
    version_base: "",
    coworker_type: "",
    build_time: "",
    is_local_agent_mode: false,
    linux_distro_id: "",
    linux_distro_version: "",
    linux_kernel: "",
    vcs: "",
    platform_raw: ""
  };
}
function createBaseSlackContext() {
  return {
    slack_team_id: "",
    is_enterprise_install: false,
    trigger: "",
    creation_method: ""
  };
}
function createBaseClaudeCodeInternalEvent() {
  return {
    event_name: "",
    client_timestamp: undefined,
    model: "",
    session_id: "",
    user_type: "",
    betas: "",
    env: undefined,
    entrypoint: "",
    agent_sdk_version: "",
    is_interactive: false,
    client_type: "",
    process: "",
    additional_metadata: "",
    auth: undefined,
    server_timestamp: undefined,
    event_id: "",
    device_id: "",
    swe_bench_run_id: "",
    swe_bench_instance_id: "",
    swe_bench_task_id: "",
    email: "",
    agent_id: "",
    parent_session_id: "",
    agent_type: "",
    slack: undefined,
    team_name: "",
    skill_name: "",
    plugin_name: "",
    marketplace_name: ""
  };
}
function fromTimestamp(t) {
  let millis = (t.seconds || 0) * 1000;
  millis += (t.nanos || 0) / 1e6;
  return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
function isSet3(value) {
  return value !== null && value !== undefined;
}
var GitHubActionsMetadata, EnvironmentMetadata, SlackContext, ClaudeCodeInternalEvent;
var init_claude_code_internal_event = __esm(() => {
  init_timestamp();
  init_auth();
  GitHubActionsMetadata = {
    fromJSON(object) {
      return {
        actor_id: isSet3(object.actor_id) ? globalThis.String(object.actor_id) : "",
        repository_id: isSet3(object.repository_id) ? globalThis.String(object.repository_id) : "",
        repository_owner_id: isSet3(object.repository_owner_id) ? globalThis.String(object.repository_owner_id) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.actor_id !== undefined) {
        obj.actor_id = message.actor_id;
      }
      if (message.repository_id !== undefined) {
        obj.repository_id = message.repository_id;
      }
      if (message.repository_owner_id !== undefined) {
        obj.repository_owner_id = message.repository_owner_id;
      }
      return obj;
    },
    create(base) {
      return GitHubActionsMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseGitHubActionsMetadata();
      message.actor_id = object.actor_id ?? "";
      message.repository_id = object.repository_id ?? "";
      message.repository_owner_id = object.repository_owner_id ?? "";
      return message;
    }
  };
  EnvironmentMetadata = {
    fromJSON(object) {
      return {
        platform: isSet3(object.platform) ? globalThis.String(object.platform) : "",
        node_version: isSet3(object.node_version) ? globalThis.String(object.node_version) : "",
        terminal: isSet3(object.terminal) ? globalThis.String(object.terminal) : "",
        package_managers: isSet3(object.package_managers) ? globalThis.String(object.package_managers) : "",
        runtimes: isSet3(object.runtimes) ? globalThis.String(object.runtimes) : "",
        is_running_with_bun: isSet3(object.is_running_with_bun) ? globalThis.Boolean(object.is_running_with_bun) : false,
        is_ci: isSet3(object.is_ci) ? globalThis.Boolean(object.is_ci) : false,
        is_claubbit: isSet3(object.is_claubbit) ? globalThis.Boolean(object.is_claubbit) : false,
        is_github_action: isSet3(object.is_github_action) ? globalThis.Boolean(object.is_github_action) : false,
        is_claude_code_action: isSet3(object.is_claude_code_action) ? globalThis.Boolean(object.is_claude_code_action) : false,
        is_claude_ai_auth: isSet3(object.is_claude_ai_auth) ? globalThis.Boolean(object.is_claude_ai_auth) : false,
        version: isSet3(object.version) ? globalThis.String(object.version) : "",
        github_event_name: isSet3(object.github_event_name) ? globalThis.String(object.github_event_name) : "",
        github_actions_runner_environment: isSet3(object.github_actions_runner_environment) ? globalThis.String(object.github_actions_runner_environment) : "",
        github_actions_runner_os: isSet3(object.github_actions_runner_os) ? globalThis.String(object.github_actions_runner_os) : "",
        github_action_ref: isSet3(object.github_action_ref) ? globalThis.String(object.github_action_ref) : "",
        wsl_version: isSet3(object.wsl_version) ? globalThis.String(object.wsl_version) : "",
        github_actions_metadata: isSet3(object.github_actions_metadata) ? GitHubActionsMetadata.fromJSON(object.github_actions_metadata) : undefined,
        arch: isSet3(object.arch) ? globalThis.String(object.arch) : "",
        is_claude_code_remote: isSet3(object.is_claude_code_remote) ? globalThis.Boolean(object.is_claude_code_remote) : false,
        remote_environment_type: isSet3(object.remote_environment_type) ? globalThis.String(object.remote_environment_type) : "",
        claude_code_container_id: isSet3(object.claude_code_container_id) ? globalThis.String(object.claude_code_container_id) : "",
        claude_code_remote_session_id: isSet3(object.claude_code_remote_session_id) ? globalThis.String(object.claude_code_remote_session_id) : "",
        tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e) => globalThis.String(e)) : [],
        deployment_environment: isSet3(object.deployment_environment) ? globalThis.String(object.deployment_environment) : "",
        is_conductor: isSet3(object.is_conductor) ? globalThis.Boolean(object.is_conductor) : false,
        version_base: isSet3(object.version_base) ? globalThis.String(object.version_base) : "",
        coworker_type: isSet3(object.coworker_type) ? globalThis.String(object.coworker_type) : "",
        build_time: isSet3(object.build_time) ? globalThis.String(object.build_time) : "",
        is_local_agent_mode: isSet3(object.is_local_agent_mode) ? globalThis.Boolean(object.is_local_agent_mode) : false,
        linux_distro_id: isSet3(object.linux_distro_id) ? globalThis.String(object.linux_distro_id) : "",
        linux_distro_version: isSet3(object.linux_distro_version) ? globalThis.String(object.linux_distro_version) : "",
        linux_kernel: isSet3(object.linux_kernel) ? globalThis.String(object.linux_kernel) : "",
        vcs: isSet3(object.vcs) ? globalThis.String(object.vcs) : "",
        platform_raw: isSet3(object.platform_raw) ? globalThis.String(object.platform_raw) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.platform !== undefined) {
        obj.platform = message.platform;
      }
      if (message.node_version !== undefined) {
        obj.node_version = message.node_version;
      }
      if (message.terminal !== undefined) {
        obj.terminal = message.terminal;
      }
      if (message.package_managers !== undefined) {
        obj.package_managers = message.package_managers;
      }
      if (message.runtimes !== undefined) {
        obj.runtimes = message.runtimes;
      }
      if (message.is_running_with_bun !== undefined) {
        obj.is_running_with_bun = message.is_running_with_bun;
      }
      if (message.is_ci !== undefined) {
        obj.is_ci = message.is_ci;
      }
      if (message.is_claubbit !== undefined) {
        obj.is_claubbit = message.is_claubbit;
      }
      if (message.is_github_action !== undefined) {
        obj.is_github_action = message.is_github_action;
      }
      if (message.is_claude_code_action !== undefined) {
        obj.is_claude_code_action = message.is_claude_code_action;
      }
      if (message.is_claude_ai_auth !== undefined) {
        obj.is_claude_ai_auth = message.is_claude_ai_auth;
      }
      if (message.version !== undefined) {
        obj.version = message.version;
      }
      if (message.github_event_name !== undefined) {
        obj.github_event_name = message.github_event_name;
      }
      if (message.github_actions_runner_environment !== undefined) {
        obj.github_actions_runner_environment = message.github_actions_runner_environment;
      }
      if (message.github_actions_runner_os !== undefined) {
        obj.github_actions_runner_os = message.github_actions_runner_os;
      }
      if (message.github_action_ref !== undefined) {
        obj.github_action_ref = message.github_action_ref;
      }
      if (message.wsl_version !== undefined) {
        obj.wsl_version = message.wsl_version;
      }
      if (message.github_actions_metadata !== undefined) {
        obj.github_actions_metadata = GitHubActionsMetadata.toJSON(message.github_actions_metadata);
      }
      if (message.arch !== undefined) {
        obj.arch = message.arch;
      }
      if (message.is_claude_code_remote !== undefined) {
        obj.is_claude_code_remote = message.is_claude_code_remote;
      }
      if (message.remote_environment_type !== undefined) {
        obj.remote_environment_type = message.remote_environment_type;
      }
      if (message.claude_code_container_id !== undefined) {
        obj.claude_code_container_id = message.claude_code_container_id;
      }
      if (message.claude_code_remote_session_id !== undefined) {
        obj.claude_code_remote_session_id = message.claude_code_remote_session_id;
      }
      if (message.tags?.length) {
        obj.tags = message.tags;
      }
      if (message.deployment_environment !== undefined) {
        obj.deployment_environment = message.deployment_environment;
      }
      if (message.is_conductor !== undefined) {
        obj.is_conductor = message.is_conductor;
      }
      if (message.version_base !== undefined) {
        obj.version_base = message.version_base;
      }
      if (message.coworker_type !== undefined) {
        obj.coworker_type = message.coworker_type;
      }
      if (message.build_time !== undefined) {
        obj.build_time = message.build_time;
      }
      if (message.is_local_agent_mode !== undefined) {
        obj.is_local_agent_mode = message.is_local_agent_mode;
      }
      if (message.linux_distro_id !== undefined) {
        obj.linux_distro_id = message.linux_distro_id;
      }
      if (message.linux_distro_version !== undefined) {
        obj.linux_distro_version = message.linux_distro_version;
      }
      if (message.linux_kernel !== undefined) {
        obj.linux_kernel = message.linux_kernel;
      }
      if (message.vcs !== undefined) {
        obj.vcs = message.vcs;
      }
      if (message.platform_raw !== undefined) {
        obj.platform_raw = message.platform_raw;
      }
      return obj;
    },
    create(base) {
      return EnvironmentMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseEnvironmentMetadata();
      message.platform = object.platform ?? "";
      message.node_version = object.node_version ?? "";
      message.terminal = object.terminal ?? "";
      message.package_managers = object.package_managers ?? "";
      message.runtimes = object.runtimes ?? "";
      message.is_running_with_bun = object.is_running_with_bun ?? false;
      message.is_ci = object.is_ci ?? false;
      message.is_claubbit = object.is_claubbit ?? false;
      message.is_github_action = object.is_github_action ?? false;
      message.is_claude_code_action = object.is_claude_code_action ?? false;
      message.is_claude_ai_auth = object.is_claude_ai_auth ?? false;
      message.version = object.version ?? "";
      message.github_event_name = object.github_event_name ?? "";
      message.github_actions_runner_environment = object.github_actions_runner_environment ?? "";
      message.github_actions_runner_os = object.github_actions_runner_os ?? "";
      message.github_action_ref = object.github_action_ref ?? "";
      message.wsl_version = object.wsl_version ?? "";
      message.github_actions_metadata = object.github_actions_metadata !== undefined && object.github_actions_metadata !== null ? GitHubActionsMetadata.fromPartial(object.github_actions_metadata) : undefined;
      message.arch = object.arch ?? "";
      message.is_claude_code_remote = object.is_claude_code_remote ?? false;
      message.remote_environment_type = object.remote_environment_type ?? "";
      message.claude_code_container_id = object.claude_code_container_id ?? "";
      message.claude_code_remote_session_id = object.claude_code_remote_session_id ?? "";
      message.tags = object.tags?.map((e) => e) || [];
      message.deployment_environment = object.deployment_environment ?? "";
      message.is_conductor = object.is_conductor ?? false;
      message.version_base = object.version_base ?? "";
      message.coworker_type = object.coworker_type ?? "";
      message.build_time = object.build_time ?? "";
      message.is_local_agent_mode = object.is_local_agent_mode ?? false;
      message.linux_distro_id = object.linux_distro_id ?? "";
      message.linux_distro_version = object.linux_distro_version ?? "";
      message.linux_kernel = object.linux_kernel ?? "";
      message.vcs = object.vcs ?? "";
      message.platform_raw = object.platform_raw ?? "";
      return message;
    }
  };
  SlackContext = {
    fromJSON(object) {
      return {
        slack_team_id: isSet3(object.slack_team_id) ? globalThis.String(object.slack_team_id) : "",
        is_enterprise_install: isSet3(object.is_enterprise_install) ? globalThis.Boolean(object.is_enterprise_install) : false,
        trigger: isSet3(object.trigger) ? globalThis.String(object.trigger) : "",
        creation_method: isSet3(object.creation_method) ? globalThis.String(object.creation_method) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.slack_team_id !== undefined) {
        obj.slack_team_id = message.slack_team_id;
      }
      if (message.is_enterprise_install !== undefined) {
        obj.is_enterprise_install = message.is_enterprise_install;
      }
      if (message.trigger !== undefined) {
        obj.trigger = message.trigger;
      }
      if (message.creation_method !== undefined) {
        obj.creation_method = message.creation_method;
      }
      return obj;
    },
    create(base) {
      return SlackContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseSlackContext();
      message.slack_team_id = object.slack_team_id ?? "";
      message.is_enterprise_install = object.is_enterprise_install ?? false;
      message.trigger = object.trigger ?? "";
      message.creation_method = object.creation_method ?? "";
      return message;
    }
  };
  ClaudeCodeInternalEvent = {
    fromJSON(object) {
      return {
        event_name: isSet3(object.event_name) ? globalThis.String(object.event_name) : "",
        client_timestamp: isSet3(object.client_timestamp) ? fromJsonTimestamp(object.client_timestamp) : undefined,
        model: isSet3(object.model) ? globalThis.String(object.model) : "",
        session_id: isSet3(object.session_id) ? globalThis.String(object.session_id) : "",
        user_type: isSet3(object.user_type) ? globalThis.String(object.user_type) : "",
        betas: isSet3(object.betas) ? globalThis.String(object.betas) : "",
        env: isSet3(object.env) ? EnvironmentMetadata.fromJSON(object.env) : undefined,
        entrypoint: isSet3(object.entrypoint) ? globalThis.String(object.entrypoint) : "",
        agent_sdk_version: isSet3(object.agent_sdk_version) ? globalThis.String(object.agent_sdk_version) : "",
        is_interactive: isSet3(object.is_interactive) ? globalThis.Boolean(object.is_interactive) : false,
        client_type: isSet3(object.client_type) ? globalThis.String(object.client_type) : "",
        process: isSet3(object.process) ? globalThis.String(object.process) : "",
        additional_metadata: isSet3(object.additional_metadata) ? globalThis.String(object.additional_metadata) : "",
        auth: isSet3(object.auth) ? PublicApiAuth.fromJSON(object.auth) : undefined,
        server_timestamp: isSet3(object.server_timestamp) ? fromJsonTimestamp(object.server_timestamp) : undefined,
        event_id: isSet3(object.event_id) ? globalThis.String(object.event_id) : "",
        device_id: isSet3(object.device_id) ? globalThis.String(object.device_id) : "",
        swe_bench_run_id: isSet3(object.swe_bench_run_id) ? globalThis.String(object.swe_bench_run_id) : "",
        swe_bench_instance_id: isSet3(object.swe_bench_instance_id) ? globalThis.String(object.swe_bench_instance_id) : "",
        swe_bench_task_id: isSet3(object.swe_bench_task_id) ? globalThis.String(object.swe_bench_task_id) : "",
        email: isSet3(object.email) ? globalThis.String(object.email) : "",
        agent_id: isSet3(object.agent_id) ? globalThis.String(object.agent_id) : "",
        parent_session_id: isSet3(object.parent_session_id) ? globalThis.String(object.parent_session_id) : "",
        agent_type: isSet3(object.agent_type) ? globalThis.String(object.agent_type) : "",
        slack: isSet3(object.slack) ? SlackContext.fromJSON(object.slack) : undefined,
        team_name: isSet3(object.team_name) ? globalThis.String(object.team_name) : "",
        skill_name: isSet3(object.skill_name) ? globalThis.String(object.skill_name) : "",
        plugin_name: isSet3(object.plugin_name) ? globalThis.String(object.plugin_name) : "",
        marketplace_name: isSet3(object.marketplace_name) ? globalThis.String(object.marketplace_name) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.event_name !== undefined) {
        obj.event_name = message.event_name;
      }
      if (message.client_timestamp !== undefined) {
        obj.client_timestamp = message.client_timestamp.toISOString();
      }
      if (message.model !== undefined) {
        obj.model = message.model;
      }
      if (message.session_id !== undefined) {
        obj.session_id = message.session_id;
      }
      if (message.user_type !== undefined) {
        obj.user_type = message.user_type;
      }
      if (message.betas !== undefined) {
        obj.betas = message.betas;
      }
      if (message.env !== undefined) {
        obj.env = EnvironmentMetadata.toJSON(message.env);
      }
      if (message.entrypoint !== undefined) {
        obj.entrypoint = message.entrypoint;
      }
      if (message.agent_sdk_version !== undefined) {
        obj.agent_sdk_version = message.agent_sdk_version;
      }
      if (message.is_interactive !== undefined) {
        obj.is_interactive = message.is_interactive;
      }
      if (message.client_type !== undefined) {
        obj.client_type = message.client_type;
      }
      if (message.process !== undefined) {
        obj.process = message.process;
      }
      if (message.additional_metadata !== undefined) {
        obj.additional_metadata = message.additional_metadata;
      }
      if (message.auth !== undefined) {
        obj.auth = PublicApiAuth.toJSON(message.auth);
      }
      if (message.server_timestamp !== undefined) {
        obj.server_timestamp = message.server_timestamp.toISOString();
      }
      if (message.event_id !== undefined) {
        obj.event_id = message.event_id;
      }
      if (message.device_id !== undefined) {
        obj.device_id = message.device_id;
      }
      if (message.swe_bench_run_id !== undefined) {
        obj.swe_bench_run_id = message.swe_bench_run_id;
      }
      if (message.swe_bench_instance_id !== undefined) {
        obj.swe_bench_instance_id = message.swe_bench_instance_id;
      }
      if (message.swe_bench_task_id !== undefined) {
        obj.swe_bench_task_id = message.swe_bench_task_id;
      }
      if (message.email !== undefined) {
        obj.email = message.email;
      }
      if (message.agent_id !== undefined) {
        obj.agent_id = message.agent_id;
      }
      if (message.parent_session_id !== undefined) {
        obj.parent_session_id = message.parent_session_id;
      }
      if (message.agent_type !== undefined) {
        obj.agent_type = message.agent_type;
      }
      if (message.slack !== undefined) {
        obj.slack = SlackContext.toJSON(message.slack);
      }
      if (message.team_name !== undefined) {
        obj.team_name = message.team_name;
      }
      if (message.skill_name !== undefined) {
        obj.skill_name = message.skill_name;
      }
      if (message.plugin_name !== undefined) {
        obj.plugin_name = message.plugin_name;
      }
      if (message.marketplace_name !== undefined) {
        obj.marketplace_name = message.marketplace_name;
      }
      return obj;
    },
    create(base) {
      return ClaudeCodeInternalEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseClaudeCodeInternalEvent();
      message.event_name = object.event_name ?? "";
      message.client_timestamp = object.client_timestamp ?? undefined;
      message.model = object.model ?? "";
      message.session_id = object.session_id ?? "";
      message.user_type = object.user_type ?? "";
      message.betas = object.betas ?? "";
      message.env = object.env !== undefined && object.env !== null ? EnvironmentMetadata.fromPartial(object.env) : undefined;
      message.entrypoint = object.entrypoint ?? "";
      message.agent_sdk_version = object.agent_sdk_version ?? "";
      message.is_interactive = object.is_interactive ?? false;
      message.client_type = object.client_type ?? "";
      message.process = object.process ?? "";
      message.additional_metadata = object.additional_metadata ?? "";
      message.auth = object.auth !== undefined && object.auth !== null ? PublicApiAuth.fromPartial(object.auth) : undefined;
      message.server_timestamp = object.server_timestamp ?? undefined;
      message.event_id = object.event_id ?? "";
      message.device_id = object.device_id ?? "";
      message.swe_bench_run_id = object.swe_bench_run_id ?? "";
      message.swe_bench_instance_id = object.swe_bench_instance_id ?? "";
      message.swe_bench_task_id = object.swe_bench_task_id ?? "";
      message.email = object.email ?? "";
      message.agent_id = object.agent_id ?? "";
      message.parent_session_id = object.parent_session_id ?? "";
      message.agent_type = object.agent_type ?? "";
      message.slack = object.slack !== undefined && object.slack !== null ? SlackContext.fromPartial(object.slack) : undefined;
      message.team_name = object.team_name ?? "";
      message.skill_name = object.skill_name ?? "";
      message.plugin_name = object.plugin_name ?? "";
      message.marketplace_name = object.marketplace_name ?? "";
      return message;
    }
  };
});

// src/types/generated/events_mono/growthbook/v1/growthbook_experiment_event.ts
function createBaseGrowthbookExperimentEvent() {
  return {
    event_id: "",
    timestamp: undefined,
    experiment_id: "",
    variation_id: 0,
    environment: "",
    user_attributes: "",
    experiment_metadata: "",
    device_id: "",
    auth: undefined,
    session_id: "",
    anonymous_id: "",
    event_metadata_vars: ""
  };
}
function fromTimestamp2(t) {
  let millis = (t.seconds || 0) * 1000;
  millis += (t.nanos || 0) / 1e6;
  return new globalThis.Date(millis);
}
function fromJsonTimestamp2(o) {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp2(Timestamp.fromJSON(o));
  }
}
function isSet4(value) {
  return value !== null && value !== undefined;
}
var GrowthbookExperimentEvent;
var init_growthbook_experiment_event = __esm(() => {
  init_timestamp();
  init_auth();
  GrowthbookExperimentEvent = {
    fromJSON(object) {
      return {
        event_id: isSet4(object.event_id) ? globalThis.String(object.event_id) : "",
        timestamp: isSet4(object.timestamp) ? fromJsonTimestamp2(object.timestamp) : undefined,
        experiment_id: isSet4(object.experiment_id) ? globalThis.String(object.experiment_id) : "",
        variation_id: isSet4(object.variation_id) ? globalThis.Number(object.variation_id) : 0,
        environment: isSet4(object.environment) ? globalThis.String(object.environment) : "",
        user_attributes: isSet4(object.user_attributes) ? globalThis.String(object.user_attributes) : "",
        experiment_metadata: isSet4(object.experiment_metadata) ? globalThis.String(object.experiment_metadata) : "",
        device_id: isSet4(object.device_id) ? globalThis.String(object.device_id) : "",
        auth: isSet4(object.auth) ? PublicApiAuth.fromJSON(object.auth) : undefined,
        session_id: isSet4(object.session_id) ? globalThis.String(object.session_id) : "",
        anonymous_id: isSet4(object.anonymous_id) ? globalThis.String(object.anonymous_id) : "",
        event_metadata_vars: isSet4(object.event_metadata_vars) ? globalThis.String(object.event_metadata_vars) : ""
      };
    },
    toJSON(message) {
      const obj = {};
      if (message.event_id !== undefined) {
        obj.event_id = message.event_id;
      }
      if (message.timestamp !== undefined) {
        obj.timestamp = message.timestamp.toISOString();
      }
      if (message.experiment_id !== undefined) {
        obj.experiment_id = message.experiment_id;
      }
      if (message.variation_id !== undefined) {
        obj.variation_id = Math.round(message.variation_id);
      }
      if (message.environment !== undefined) {
        obj.environment = message.environment;
      }
      if (message.user_attributes !== undefined) {
        obj.user_attributes = message.user_attributes;
      }
      if (message.experiment_metadata !== undefined) {
        obj.experiment_metadata = message.experiment_metadata;
      }
      if (message.device_id !== undefined) {
        obj.device_id = message.device_id;
      }
      if (message.auth !== undefined) {
        obj.auth = PublicApiAuth.toJSON(message.auth);
      }
      if (message.session_id !== undefined) {
        obj.session_id = message.session_id;
      }
      if (message.anonymous_id !== undefined) {
        obj.anonymous_id = message.anonymous_id;
      }
      if (message.event_metadata_vars !== undefined) {
        obj.event_metadata_vars = message.event_metadata_vars;
      }
      return obj;
    },
    create(base) {
      return GrowthbookExperimentEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
      const message = createBaseGrowthbookExperimentEvent();
      message.event_id = object.event_id ?? "";
      message.timestamp = object.timestamp ?? undefined;
      message.experiment_id = object.experiment_id ?? "";
      message.variation_id = object.variation_id ?? 0;
      message.environment = object.environment ?? "";
      message.user_attributes = object.user_attributes ?? "";
      message.experiment_metadata = object.experiment_metadata ?? "";
      message.device_id = object.device_id ?? "";
      message.auth = object.auth !== undefined && object.auth !== null ? PublicApiAuth.fromPartial(object.auth) : undefined;
      message.session_id = object.session_id ?? "";
      message.anonymous_id = object.anonymous_id ?? "";
      message.event_metadata_vars = object.event_metadata_vars ?? "";
      return message;
    }
  };
});

// src/utils/envDynamic.ts
import { stat } from "fs/promises";
function getIsBubblewrapSandbox() {
  return process.platform === "linux" && isEnvTruthy(process.env.CLAUDE_CODE_BUBBLEWRAP);
}
function isMuslEnvironment() {
  if (false)
    ;
  if (false)
    ;
  if (process.platform !== "linux")
    return false;
  return muslRuntimeCache ?? false;
}
async function detectJetBrainsIDEFromParentProcessAsync() {
  if (jetBrainsIDECache !== undefined) {
    return jetBrainsIDECache;
  }
  if (process.platform === "darwin") {
    jetBrainsIDECache = null;
    return null;
  }
  try {
    const commands = await getAncestorCommandsAsync(process.pid, 10);
    for (const command of commands) {
      const lowerCommand = command.toLowerCase();
      for (const ide of JETBRAINS_IDES) {
        if (lowerCommand.includes(ide)) {
          jetBrainsIDECache = ide;
          return ide;
        }
      }
    }
  } catch {}
  jetBrainsIDECache = null;
  return null;
}
async function getTerminalWithJetBrainsDetectionAsync() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (env.platform !== "darwin") {
      const specificIDE = await detectJetBrainsIDEFromParentProcessAsync();
      return specificIDE || "pycharm";
    }
  }
  return env.terminal;
}
function getTerminalWithJetBrainsDetection() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (env.platform !== "darwin") {
      if (jetBrainsIDECache !== undefined) {
        return jetBrainsIDECache || "pycharm";
      }
      return "pycharm";
    }
  }
  return env.terminal;
}
async function initJetBrainsDetection() {
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    await detectJetBrainsIDEFromParentProcessAsync();
  }
}
var getIsDocker, muslRuntimeCache = null, jetBrainsIDECache, envDynamic;
var init_envDynamic = __esm(() => {
  init_memoize();
  init_env();
  init_envUtils();
  init_execFileNoThrow();
  init_genericProcessUtils();
  getIsDocker = memoize_default(async () => {
    if (process.platform !== "linux")
      return false;
    const { code } = await execFileNoThrow("test", ["-f", "/.dockerenv"]);
    return code === 0;
  });
  if (process.platform === "linux") {
    const muslArch = process.arch === "x64" ? "x86_64" : "aarch64";
    stat(`/lib/libc.musl-${muslArch}.so.1`).then(() => {
      muslRuntimeCache = true;
    }, () => {
      muslRuntimeCache = false;
    });
  }
  envDynamic = {
    ...env,
    terminal: getTerminalWithJetBrainsDetection(),
    getIsDocker,
    getIsBubblewrapSandbox,
    isMuslEnvironment,
    getTerminalWithJetBrainsDetectionAsync,
    initJetBrainsDetection
  };
});

// src/constants/betas.ts
var CLAUDE_CODE_20250219_BETA_HEADER = "claude-code-20250219", INTERLEAVED_THINKING_BETA_HEADER = "interleaved-thinking-2025-05-14", CONTEXT_1M_BETA_HEADER = "context-1m-2025-08-07", CONTEXT_MANAGEMENT_BETA_HEADER = "context-management-2025-06-27", STRUCTURED_OUTPUTS_BETA_HEADER = "structured-outputs-2025-12-15", WEB_SEARCH_BETA_HEADER = "web-search-2025-03-05", TOOL_SEARCH_BETA_HEADER_1P = "advanced-tool-use-2025-11-20", TOOL_SEARCH_BETA_HEADER_3P = "tool-search-tool-2025-10-19", EFFORT_BETA_HEADER = "effort-2025-11-24", TASK_BUDGETS_BETA_HEADER = "task-budgets-2026-03-13", PROMPT_CACHING_SCOPE_BETA_HEADER = "prompt-caching-scope-2026-01-05", FAST_MODE_BETA_HEADER = "fast-mode-2026-02-01", REDACT_THINKING_BETA_HEADER = "redact-thinking-2026-02-12", TOKEN_EFFICIENT_TOOLS_BETA_HEADER = "token-efficient-tools-2026-03-28", AFK_MODE_BETA_HEADER = "afk-mode-2026-01-31", CLI_INTERNAL_BETA_HEADER, ADVISOR_BETA_HEADER = "advisor-tool-2026-03-01", BEDROCK_EXTRA_PARAMS_HEADERS, VERTEX_COUNT_TOKENS_ALLOWED_BETAS;
var init_betas = __esm(() => {
  CLI_INTERNAL_BETA_HEADER = process.env.USER_TYPE === "ant" ? "cli-internal-2026-02-09" : "";
  BEDROCK_EXTRA_PARAMS_HEADERS = new Set([
    INTERLEAVED_THINKING_BETA_HEADER,
    CONTEXT_1M_BETA_HEADER,
    TOOL_SEARCH_BETA_HEADER_3P
  ]);
  VERTEX_COUNT_TOKENS_ALLOWED_BETAS = new Set([
    CLAUDE_CODE_20250219_BETA_HEADER,
    INTERLEAVED_THINKING_BETA_HEADER,
    CONTEXT_MANAGEMENT_BETA_HEADER
  ]);
});

// src/utils/model/antModels.ts
function getAntModelOverrideConfig() {
  if (process.env.USER_TYPE !== "ant") {
    return null;
  }
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_ant_model_override", null);
}
function getAntModels() {
  if (process.env.USER_TYPE !== "ant") {
    return [];
  }
  return getAntModelOverrideConfig()?.antModels ?? [];
}
function resolveAntModel(model) {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  if (model === undefined) {
    return;
  }
  const lower = model.toLowerCase();
  return getAntModels().find((m) => m.alias === model || lower.includes(m.model.toLowerCase()));
}
var init_antModels = __esm(() => {
  init_growthbook();
});

// src/utils/model/providers.ts
function getAPIProvider() {
  if (isMiMoRuntime())
    return "mimo";
  const modelType = getInitialSettings().modelType;
  if (modelType === "openai")
    return "openai";
  if (modelType === "gemini")
    return "gemini";
  if (modelType === "grok")
    return "grok";
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK))
    return "bedrock";
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX))
    return "vertex";
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY))
    return "foundry";
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_OPENAI))
    return "openai";
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_GEMINI))
    return "gemini";
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_GROK))
    return "grok";
  return "firstParty";
}
function getAPIProviderForStatsig() {
  return getAPIProvider();
}
function isFirstPartyAnthropicBaseUrl() {
  if (isMiMoRuntime())
    return false;
  const baseUrl = process.env.ANTHROPIC_BASE_URL;
  if (!baseUrl) {
    return true;
  }
  try {
    const host = new URL(baseUrl).host;
    const allowedHosts = ["api.anthropic.com"];
    if (process.env.USER_TYPE === "ant") {
      allowedHosts.push("api-staging.anthropic.com");
    }
    return allowedHosts.includes(host);
  } catch {
    return false;
  }
}
var init_providers = __esm(() => {
  init_settings2();
  init_envUtils();
  init_mimoRuntimeConfig();
});

// src/utils/fastMode.ts
function isFastModeEnabled() {
  return !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_FAST_MODE);
}
function isFastModeAvailable() {
  if (!isFastModeEnabled()) {
    return false;
  }
  return getFastModeUnavailableReason() === null;
}
function getDisabledReasonMessage(disabledReason, authType) {
  switch (disabledReason) {
    case "free":
      return authType === "oauth" ? "Fast mode requires a paid subscription" : "Fast mode unavailable during evaluation. Please purchase credits.";
    case "preference":
      return "Fast mode has been disabled by your organization";
    case "extra_usage_disabled":
      return "Fast mode requires extra usage billing \xB7 /extra-usage to enable";
    case "network_error":
      return "Fast mode unavailable due to network connectivity issues";
    case "unknown":
      return "Fast mode is currently unavailable";
  }
}
function getFastModeUnavailableReason() {
  if (!isFastModeEnabled()) {
    return "Fast mode is not available";
  }
  const statigReason = getFeatureValue_CACHED_MAY_BE_STALE("tengu_penguins_off", null);
  if (statigReason !== null) {
    logForDebugging(`Fast mode unavailable: ${statigReason}`);
    return statigReason;
  }
  if (!isInBundledMode() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_marble_sandcastle", false)) {
    return "Fast mode requires the native binary \xB7 Install from: https://claude.com/product/claude-code";
  }
  if (getIsNonInteractiveSession() && preferThirdPartyAuthentication() && !getKairosActive()) {
    const flagFastMode = getSettingsForSource("flagSettings")?.fastMode;
    if (!flagFastMode) {
      const reason = "Fast mode is not available in the Agent SDK";
      logForDebugging(`Fast mode unavailable: ${reason}`);
      return reason;
    }
  }
  if (getAPIProvider() !== "firstParty") {
    const reason = "Fast mode is not available on Bedrock, Vertex, or Foundry";
    logForDebugging(`Fast mode unavailable: ${reason}`);
    return reason;
  }
  if (orgStatus.status === "disabled") {
    if (orgStatus.reason === "network_error" || orgStatus.reason === "unknown") {
      if (isEnvTruthy(process.env.CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS)) {
        return null;
      }
    }
    const authType = getClaudeAIOAuthTokens() !== null ? "oauth" : "api-key";
    const reason = getDisabledReasonMessage(orgStatus.reason, authType);
    logForDebugging(`Fast mode unavailable: ${reason}`);
    return reason;
  }
  return null;
}
function getFastModeModel() {
  return "opus" + (isOpus1mMergeEnabled() ? "[1m]" : "");
}
function getInitialFastModeSetting(model) {
  if (!isFastModeEnabled()) {
    return false;
  }
  if (!isFastModeAvailable()) {
    return false;
  }
  if (!isFastModeSupportedByModel(model)) {
    return false;
  }
  const settings = getInitialSettings();
  if (settings.fastModePerSessionOptIn) {
    return false;
  }
  return settings.fastMode === true;
}
function isFastModeSupportedByModel(modelSetting) {
  if (!isFastModeEnabled()) {
    return false;
  }
  const model = modelSetting ?? getDefaultMainLoopModelSetting();
  const parsedModel = parseUserSpecifiedModel(model);
  return parsedModel.toLowerCase().includes("opus-4-7") || parsedModel.toLowerCase().includes("opus-4-6");
}
function getFastModeRuntimeState() {
  if (runtimeState.status === "cooldown" && Date.now() >= runtimeState.resetAt) {
    if (isFastModeEnabled() && !hasLoggedCooldownExpiry) {
      logForDebugging("Fast mode cooldown expired, re-enabling fast mode");
      hasLoggedCooldownExpiry = true;
      cooldownExpired.emit();
    }
    runtimeState = { status: "active" };
  }
  return runtimeState;
}
function triggerFastModeCooldown(resetTimestamp, reason) {
  if (!isFastModeEnabled()) {
    return;
  }
  runtimeState = { status: "cooldown", resetAt: resetTimestamp, reason };
  hasLoggedCooldownExpiry = false;
  const cooldownDurationMs = resetTimestamp - Date.now();
  logForDebugging(`Fast mode cooldown triggered (${reason}), duration ${Math.round(cooldownDurationMs / 1000)}s`);
  logEvent("tengu_fast_mode_fallback_triggered", {
    cooldown_duration_ms: cooldownDurationMs,
    cooldown_reason: reason
  });
  cooldownTriggered.emit(resetTimestamp, reason);
}
function clearFastModeCooldown() {
  runtimeState = { status: "active" };
}
function handleFastModeRejectedByAPI() {
  if (orgStatus.status === "disabled") {
    return;
  }
  orgStatus = { status: "disabled", reason: "preference" };
  updateSettingsForSource("userSettings", { fastMode: undefined });
  saveGlobalConfig((current) => ({
    ...current,
    penguinModeOrgEnabled: false
  }));
  orgFastModeChange.emit(false);
}
function getOverageDisabledMessage(reason) {
  switch (reason) {
    case "out_of_credits":
      return "Fast mode disabled \xB7 extra usage credits exhausted";
    case "org_level_disabled":
    case "org_service_level_disabled":
      return "Fast mode disabled \xB7 extra usage disabled by your organization";
    case "org_level_disabled_until":
      return "Fast mode disabled \xB7 extra usage spending cap reached";
    case "member_level_disabled":
      return "Fast mode disabled \xB7 extra usage disabled for your account";
    case "seat_tier_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "member_zero_credit_limit":
      return "Fast mode disabled \xB7 extra usage not available for your plan";
    case "overage_not_provisioned":
    case "no_limits_configured":
      return "Fast mode requires extra usage billing \xB7 /extra-usage to enable";
    default:
      return "Fast mode disabled \xB7 extra usage not available";
  }
}
function isOutOfCreditsReason(reason) {
  return reason === "org_level_disabled_until" || reason === "out_of_credits";
}
function handleFastModeOverageRejection(reason) {
  const message = getOverageDisabledMessage(reason);
  logForDebugging(`Fast mode overage rejection: ${reason ?? "unknown"} \u2014 ${message}`);
  logEvent("tengu_fast_mode_overage_rejected", {
    overage_disabled_reason: reason ?? "unknown"
  });
  if (!isOutOfCreditsReason(reason)) {
    updateSettingsForSource("userSettings", { fastMode: undefined });
    saveGlobalConfig((current) => ({
      ...current,
      penguinModeOrgEnabled: false
    }));
  }
  overageRejection.emit(message);
}
function isFastModeCooldown() {
  return getFastModeRuntimeState().status === "cooldown";
}
function getFastModeState(model, fastModeUserEnabled) {
  const enabled = isFastModeEnabled() && isFastModeAvailable() && !!fastModeUserEnabled && isFastModeSupportedByModel(model);
  if (enabled && isFastModeCooldown()) {
    return "cooldown";
  }
  if (enabled) {
    return "on";
  }
  return "off";
}
async function fetchFastModeStatus(auth) {
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/claude_code_penguin_mode`;
  const headers = "accessToken" in auth ? {
    Authorization: `Bearer ${auth.accessToken}`,
    "anthropic-beta": OAUTH_BETA_HEADER
  } : { "x-api-key": auth.apiKey };
  const response = await axios_default.get(endpoint, { headers });
  return response.data;
}
function resolveFastModeStatusFromCache() {
  if (!isFastModeEnabled()) {
    return;
  }
  if (orgStatus.status !== "pending") {
    return;
  }
  const isAnt = process.env.USER_TYPE === "ant";
  const cachedEnabled = getGlobalConfig().penguinModeOrgEnabled === true;
  orgStatus = isAnt || cachedEnabled ? { status: "enabled" } : { status: "disabled", reason: "unknown" };
}
async function prefetchFastModeStatus() {
  if (isEssentialTrafficOnly()) {
    return;
  }
  if (!isFastModeEnabled()) {
    return;
  }
  if (inflightPrefetch) {
    logForDebugging("Fast mode prefetch in progress, returning in-flight promise");
    return inflightPrefetch;
  }
  const apiKey = getAnthropicApiKey();
  const hasUsableOAuth = getClaudeAIOAuthTokens()?.accessToken && hasProfileScope();
  if (!hasUsableOAuth && !apiKey) {
    const isAnt = process.env.USER_TYPE === "ant";
    const cachedEnabled = getGlobalConfig().penguinModeOrgEnabled === true;
    orgStatus = isAnt || cachedEnabled ? { status: "enabled" } : { status: "disabled", reason: "preference" };
    return;
  }
  const now = Date.now();
  if (now - lastPrefetchAt < PREFETCH_MIN_INTERVAL_MS) {
    logForDebugging("Skipping fast mode prefetch, fetched recently");
    return;
  }
  lastPrefetchAt = now;
  const fetchWithCurrentAuth = async () => {
    const currentTokens = getClaudeAIOAuthTokens();
    const auth = currentTokens?.accessToken && hasProfileScope() ? { accessToken: currentTokens.accessToken } : apiKey ? { apiKey } : null;
    if (!auth) {
      throw new Error("No auth available");
    }
    return fetchFastModeStatus(auth);
  };
  async function doFetch() {
    try {
      let status;
      try {
        status = await fetchWithCurrentAuth();
      } catch (err) {
        const isAuthError = axios_default.isAxiosError(err) && (err.response?.status === 401 || err.response?.status === 403 && typeof err.response?.data === "string" && err.response.data.includes("OAuth token has been revoked"));
        if (isAuthError) {
          const failedAccessToken = getClaudeAIOAuthTokens()?.accessToken;
          if (failedAccessToken) {
            await handleOAuth401Error(failedAccessToken);
            status = await fetchWithCurrentAuth();
          } else {
            throw err;
          }
        } else {
          throw err;
        }
      }
      const previousEnabled = orgStatus.status !== "pending" ? orgStatus.status === "enabled" : getGlobalConfig().penguinModeOrgEnabled;
      orgStatus = status.enabled ? { status: "enabled" } : {
        status: "disabled",
        reason: status.disabled_reason ?? "preference"
      };
      if (previousEnabled !== status.enabled) {
        if (!status.enabled) {
          updateSettingsForSource("userSettings", { fastMode: undefined });
        }
        saveGlobalConfig((current) => ({
          ...current,
          penguinModeOrgEnabled: status.enabled
        }));
        orgFastModeChange.emit(status.enabled);
      }
      logForDebugging(`Org fast mode: ${status.enabled ? "enabled" : `disabled (${status.disabled_reason ?? "preference"})`}`);
    } catch (err) {
      const isAnt = process.env.USER_TYPE === "ant";
      const cachedEnabled = getGlobalConfig().penguinModeOrgEnabled === true;
      orgStatus = isAnt || cachedEnabled ? { status: "enabled" } : { status: "disabled", reason: "network_error" };
      logForDebugging(`Failed to fetch org fast mode status, defaulting to ${orgStatus.status === "enabled" ? "enabled (cached)" : "disabled (network_error)"}: ${err}`, { level: "error" });
      logEvent("tengu_org_penguin_mode_fetch_failed", {});
    } finally {
      inflightPrefetch = null;
    }
  }
  inflightPrefetch = doFetch();
  return inflightPrefetch;
}
var FAST_MODE_MODEL_DISPLAY = "Opus 4.7", runtimeState, hasLoggedCooldownExpiry = false, cooldownTriggered, cooldownExpired, onCooldownTriggered, onCooldownExpired, overageRejection, onFastModeOverageRejection, orgStatus, orgFastModeChange, onOrgFastModeChanged, PREFETCH_MIN_INTERVAL_MS = 30000, lastPrefetchAt = 0, inflightPrefetch = null;
var init_fastMode = __esm(() => {
  init_axios();
  init_oauth();
  init_growthbook();
  init_state();
  init_analytics();
  init_auth2();
  init_bundledMode();
  init_config();
  init_debug();
  init_envUtils();
  init_model();
  init_providers();
  init_privacyLevel();
  init_settings2();
  init_signal();
  runtimeState = { status: "active" };
  cooldownTriggered = createSignal();
  cooldownExpired = createSignal();
  onCooldownTriggered = cooldownTriggered.subscribe;
  onCooldownExpired = cooldownExpired.subscribe;
  overageRejection = createSignal();
  onFastModeOverageRejection = overageRejection.subscribe;
  orgStatus = { status: "pending" };
  orgFastModeChange = createSignal();
  onOrgFastModeChanged = orgFastModeChange.subscribe;
});

// src/utils/model/configs.ts
var CLAUDE_3_7_SONNET_CONFIG, CLAUDE_3_5_V2_SONNET_CONFIG, CLAUDE_3_5_HAIKU_CONFIG, CLAUDE_HAIKU_4_5_CONFIG, CLAUDE_SONNET_4_CONFIG, CLAUDE_SONNET_4_5_CONFIG, CLAUDE_OPUS_4_CONFIG, CLAUDE_OPUS_4_1_CONFIG, CLAUDE_OPUS_4_5_CONFIG, CLAUDE_OPUS_4_6_CONFIG, CLAUDE_OPUS_4_7_CONFIG, CLAUDE_SONNET_4_6_CONFIG, ALL_MODEL_CONFIGS, CANONICAL_MODEL_IDS, CANONICAL_ID_TO_KEY;
var init_configs = __esm(() => {
  CLAUDE_3_7_SONNET_CONFIG = {
    firstParty: "claude-3-7-sonnet-20250219",
    bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
    vertex: "claude-3-7-sonnet@20250219",
    foundry: "claude-3-7-sonnet",
    openai: "claude-3-7-sonnet-20250219",
    gemini: "claude-3-7-sonnet-20250219",
    grok: "claude-3-7-sonnet-20250219"
  };
  CLAUDE_3_5_V2_SONNET_CONFIG = {
    firstParty: "claude-3-5-sonnet-20241022",
    bedrock: "anthropic.claude-3-5-sonnet-20241022-v2:0",
    vertex: "claude-3-5-sonnet-v2@20241022",
    foundry: "claude-3-5-sonnet",
    openai: "claude-3-5-sonnet-20241022",
    gemini: "claude-3-5-sonnet-20241022",
    grok: "claude-3-5-sonnet-20241022"
  };
  CLAUDE_3_5_HAIKU_CONFIG = {
    firstParty: "claude-3-5-haiku-20241022",
    bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
    vertex: "claude-3-5-haiku@20241022",
    foundry: "claude-3-5-haiku",
    openai: "claude-3-5-haiku-20241022",
    gemini: "claude-3-5-haiku-20241022",
    grok: "claude-3-5-haiku-20241022"
  };
  CLAUDE_HAIKU_4_5_CONFIG = {
    firstParty: "claude-haiku-4-5-20251001",
    bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
    vertex: "claude-haiku-4-5@20251001",
    foundry: "claude-haiku-4-5",
    openai: "claude-haiku-4-5-20251001",
    gemini: "claude-haiku-4-5-20251001",
    grok: "claude-haiku-4-5-20251001"
  };
  CLAUDE_SONNET_4_CONFIG = {
    firstParty: "claude-sonnet-4-20250514",
    bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
    vertex: "claude-sonnet-4@20250514",
    foundry: "claude-sonnet-4",
    openai: "claude-sonnet-4-20250514",
    gemini: "claude-sonnet-4-20250514",
    grok: "claude-sonnet-4-20250514"
  };
  CLAUDE_SONNET_4_5_CONFIG = {
    firstParty: "claude-sonnet-4-5-20250929",
    bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
    vertex: "claude-sonnet-4-5@20250929",
    foundry: "claude-sonnet-4-5",
    openai: "claude-sonnet-4-5-20250929",
    gemini: "claude-sonnet-4-5-20250929",
    grok: "claude-sonnet-4-5-20250929"
  };
  CLAUDE_OPUS_4_CONFIG = {
    firstParty: "claude-opus-4-20250514",
    bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
    vertex: "claude-opus-4@20250514",
    foundry: "claude-opus-4",
    openai: "claude-opus-4-20250514",
    gemini: "claude-opus-4-20250514",
    grok: "claude-opus-4-20250514"
  };
  CLAUDE_OPUS_4_1_CONFIG = {
    firstParty: "claude-opus-4-1-20250805",
    bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
    vertex: "claude-opus-4-1@20250805",
    foundry: "claude-opus-4-1",
    openai: "claude-opus-4-1-20250805",
    gemini: "claude-opus-4-1-20250805",
    grok: "claude-opus-4-1-20250805"
  };
  CLAUDE_OPUS_4_5_CONFIG = {
    firstParty: "claude-opus-4-5-20251101",
    bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
    vertex: "claude-opus-4-5@20251101",
    foundry: "claude-opus-4-5",
    openai: "claude-opus-4-5-20251101",
    gemini: "claude-opus-4-5-20251101",
    grok: "claude-opus-4-5-20251101"
  };
  CLAUDE_OPUS_4_6_CONFIG = {
    firstParty: "claude-opus-4-6",
    bedrock: "us.anthropic.claude-opus-4-6-v1",
    vertex: "claude-opus-4-6",
    foundry: "claude-opus-4-6",
    openai: "claude-opus-4-6",
    gemini: "claude-opus-4-6",
    grok: "claude-opus-4-6"
  };
  CLAUDE_OPUS_4_7_CONFIG = {
    firstParty: "claude-opus-4-7",
    bedrock: "us.anthropic.claude-opus-4-7-v1",
    vertex: "claude-opus-4-7",
    foundry: "claude-opus-4-7",
    openai: "claude-opus-4-7",
    gemini: "claude-opus-4-7",
    grok: "claude-opus-4-7"
  };
  CLAUDE_SONNET_4_6_CONFIG = {
    firstParty: "claude-sonnet-4-6",
    bedrock: "us.anthropic.claude-sonnet-4-6",
    vertex: "claude-sonnet-4-6",
    foundry: "claude-sonnet-4-6",
    openai: "claude-sonnet-4-6",
    gemini: "claude-sonnet-4-6",
    grok: "claude-sonnet-4-6"
  };
  ALL_MODEL_CONFIGS = {
    haiku35: CLAUDE_3_5_HAIKU_CONFIG,
    haiku45: CLAUDE_HAIKU_4_5_CONFIG,
    sonnet35: CLAUDE_3_5_V2_SONNET_CONFIG,
    sonnet37: CLAUDE_3_7_SONNET_CONFIG,
    sonnet40: CLAUDE_SONNET_4_CONFIG,
    sonnet45: CLAUDE_SONNET_4_5_CONFIG,
    sonnet46: CLAUDE_SONNET_4_6_CONFIG,
    opus40: CLAUDE_OPUS_4_CONFIG,
    opus41: CLAUDE_OPUS_4_1_CONFIG,
    opus45: CLAUDE_OPUS_4_5_CONFIG,
    opus46: CLAUDE_OPUS_4_6_CONFIG,
    opus47: CLAUDE_OPUS_4_7_CONFIG
  };
  CANONICAL_MODEL_IDS = Object.values(ALL_MODEL_CONFIGS).map((c) => c.firstParty);
  CANONICAL_ID_TO_KEY = Object.fromEntries(Object.entries(ALL_MODEL_CONFIGS).map(([key, cfg]) => [cfg.firstParty, key]));
});

// src/utils/modelCost.ts
function getOpus46CostTier(fastMode) {
  if (isFastModeEnabled() && fastMode) {
    return COST_TIER_30_150;
  }
  return COST_TIER_5_25;
}
function tokensToUSDCost(modelCosts, usage) {
  return usage.input_tokens / 1e6 * modelCosts.inputTokens + usage.output_tokens / 1e6 * modelCosts.outputTokens + (usage.cache_read_input_tokens ?? 0) / 1e6 * modelCosts.promptCacheReadTokens + (usage.cache_creation_input_tokens ?? 0) / 1e6 * modelCosts.promptCacheWriteTokens + (usage.server_tool_use?.web_search_requests ?? 0) * modelCosts.webSearchRequests;
}
function getModelCosts(model, usage) {
  const shortName = getCanonicalName(model);
  if (isMiMoRuntime()) {
    trackUnknownModelCost(model, shortName);
    return COST_UNKNOWN_MIMO;
  }
  if (shortName === firstPartyNameToCanonical(CLAUDE_OPUS_4_6_CONFIG.firstParty)) {
    const isFastMode = usage.speed === "fast";
    return getOpus46CostTier(isFastMode);
  }
  const costs = MODEL_COSTS[shortName];
  if (!costs) {
    trackUnknownModelCost(model, shortName);
    return MODEL_COSTS[getCanonicalName(getDefaultMainLoopModelSetting())] ?? DEFAULT_UNKNOWN_MODEL_COST;
  }
  return costs;
}
function trackUnknownModelCost(model, shortName) {
  logEvent("tengu_unknown_model_cost", {
    model,
    shortName
  });
  setHasUnknownModelCost();
}
function calculateUSDCost(resolvedModel, usage) {
  const modelCosts = getModelCosts(resolvedModel, usage);
  return tokensToUSDCost(modelCosts, usage);
}
function calculateCostFromTokens(model, tokens) {
  const usage = {
    input_tokens: tokens.inputTokens,
    output_tokens: tokens.outputTokens,
    cache_read_input_tokens: tokens.cacheReadInputTokens,
    cache_creation_input_tokens: tokens.cacheCreationInputTokens
  };
  return calculateUSDCost(model, usage);
}
function formatPrice(price) {
  if (Number.isInteger(price)) {
    return `$${price}`;
  }
  return `$${price.toFixed(2)}`;
}
function formatModelPricing(costs) {
  return `${formatPrice(costs.inputTokens)}/${formatPrice(costs.outputTokens)} per Mtok`;
}
var COST_TIER_3_15, COST_TIER_15_75, COST_TIER_5_25, COST_TIER_30_150, COST_HAIKU_35, COST_HAIKU_45, DEFAULT_UNKNOWN_MODEL_COST, COST_UNKNOWN_MIMO, MODEL_COSTS;
var init_modelCost = __esm(() => {
  init_analytics();
  init_state();
  init_fastMode();
  init_configs();
  init_model();
  init_mimoRuntimeConfig();
  COST_TIER_3_15 = {
    inputTokens: 3,
    outputTokens: 15,
    promptCacheWriteTokens: 3.75,
    promptCacheReadTokens: 0.3,
    webSearchRequests: 0.01
  };
  COST_TIER_15_75 = {
    inputTokens: 15,
    outputTokens: 75,
    promptCacheWriteTokens: 18.75,
    promptCacheReadTokens: 1.5,
    webSearchRequests: 0.01
  };
  COST_TIER_5_25 = {
    inputTokens: 5,
    outputTokens: 25,
    promptCacheWriteTokens: 6.25,
    promptCacheReadTokens: 0.5,
    webSearchRequests: 0.01
  };
  COST_TIER_30_150 = {
    inputTokens: 30,
    outputTokens: 150,
    promptCacheWriteTokens: 37.5,
    promptCacheReadTokens: 3,
    webSearchRequests: 0.01
  };
  COST_HAIKU_35 = {
    inputTokens: 0.8,
    outputTokens: 4,
    promptCacheWriteTokens: 1,
    promptCacheReadTokens: 0.08,
    webSearchRequests: 0.01
  };
  COST_HAIKU_45 = {
    inputTokens: 1,
    outputTokens: 5,
    promptCacheWriteTokens: 1.25,
    promptCacheReadTokens: 0.1,
    webSearchRequests: 0.01
  };
  DEFAULT_UNKNOWN_MODEL_COST = COST_TIER_5_25;
  COST_UNKNOWN_MIMO = {
    inputTokens: 0,
    outputTokens: 0,
    promptCacheWriteTokens: 0,
    promptCacheReadTokens: 0,
    webSearchRequests: 0
  };
  MODEL_COSTS = {
    [firstPartyNameToCanonical(CLAUDE_3_5_HAIKU_CONFIG.firstParty)]: COST_HAIKU_35,
    [firstPartyNameToCanonical(CLAUDE_HAIKU_4_5_CONFIG.firstParty)]: COST_HAIKU_45,
    [firstPartyNameToCanonical(CLAUDE_3_5_V2_SONNET_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_3_7_SONNET_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_SONNET_4_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_SONNET_4_5_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_SONNET_4_6_CONFIG.firstParty)]: COST_TIER_3_15,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_CONFIG.firstParty)]: COST_TIER_15_75,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_1_CONFIG.firstParty)]: COST_TIER_15_75,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_5_CONFIG.firstParty)]: COST_TIER_5_25,
    [firstPartyNameToCanonical(CLAUDE_OPUS_4_6_CONFIG.firstParty)]: COST_TIER_5_25
  };
});

// src/constants/figures.ts
var BLACK_CIRCLE, BULLET_OPERATOR = "\u2219", TEARDROP_ASTERISK = "\u273B", UP_ARROW = "\u2191", DOWN_ARROW = "\u2193", LIGHTNING_BOLT = "\u21AF", EFFORT_LOW = "\u25CB", EFFORT_MEDIUM = "\u25D0", EFFORT_HIGH = "\u25CF", EFFORT_XHIGH = "\u29BF", EFFORT_MAX = "\u25C9", PLAY_ICON = "\u25B6", PAUSE_ICON = "\u23F8", REFRESH_ARROW = "\u21BB", CHANNEL_ARROW = "\u2190", DIAMOND_OPEN = "\u25C7", DIAMOND_FILLED = "\u25C6", REFERENCE_MARK = "\u203B", FLAG_ICON = "\u2691", BLOCKQUOTE_BAR = "\u258E", BRIDGE_SPINNER_FRAMES, BRIDGE_READY_INDICATOR = "\xB7\u2714\uFE0E\xB7", BRIDGE_FAILED_INDICATOR = "\xD7";
var init_figures = __esm(() => {
  init_env();
  BLACK_CIRCLE = env.platform === "darwin" ? "\u23FA" : "\u25CF";
  BRIDGE_SPINNER_FRAMES = [
    "\xB7|\xB7",
    "\xB7/\xB7",
    "\xB7\u2014\xB7",
    "\xB7\\\xB7"
  ];
});

// src/utils/model/aliases.ts
function isModelAlias(modelInput) {
  return MODEL_ALIASES.includes(modelInput);
}
function isModelFamilyAlias(model) {
  return MODEL_FAMILY_ALIASES.includes(model);
}
var MODEL_ALIASES, MODEL_FAMILY_ALIASES;
var init_aliases = __esm(() => {
  MODEL_ALIASES = [
    "sonnet",
    "opus",
    "haiku",
    "best",
    "sonnet[1m]",
    "opus[1m]",
    "opusplan"
  ];
  MODEL_FAMILY_ALIASES = ["sonnet", "opus", "haiku"];
});

// src/utils/model/modelAllowlist.ts
function modelBelongsToFamily(model, family) {
  if (model.includes(family)) {
    return true;
  }
  if (isModelAlias(model)) {
    const resolved = parseUserSpecifiedModel(model).toLowerCase();
    return resolved.includes(family);
  }
  return false;
}
function prefixMatchesModel(modelName, prefix) {
  if (!modelName.startsWith(prefix)) {
    return false;
  }
  return modelName.length === prefix.length || modelName[prefix.length] === "-";
}
function modelMatchesVersionPrefix(model, entry) {
  const resolvedModel = isModelAlias(model) ? parseUserSpecifiedModel(model).toLowerCase() : model;
  if (prefixMatchesModel(resolvedModel, entry)) {
    return true;
  }
  if (!entry.startsWith("claude-") && prefixMatchesModel(resolvedModel, `claude-${entry}`)) {
    return true;
  }
  return false;
}
function familyHasSpecificEntries(family, allowlist) {
  for (const entry of allowlist) {
    if (isModelFamilyAlias(entry)) {
      continue;
    }
    const idx = entry.indexOf(family);
    if (idx === -1) {
      continue;
    }
    const afterFamily = idx + family.length;
    if (afterFamily === entry.length || entry[afterFamily] === "-") {
      return true;
    }
  }
  return false;
}
function isModelAllowed(model) {
  const settings = getSettings_DEPRECATED() || {};
  const { availableModels } = settings;
  if (!availableModels) {
    return true;
  }
  if (availableModels.length === 0) {
    return false;
  }
  const resolvedModel = resolveOverriddenModel(model);
  const normalizedModel = resolvedModel.trim().toLowerCase();
  const normalizedAllowlist = availableModels.map((m) => m.trim().toLowerCase());
  if (normalizedAllowlist.includes(normalizedModel)) {
    if (!isModelFamilyAlias(normalizedModel) || !familyHasSpecificEntries(normalizedModel, normalizedAllowlist)) {
      return true;
    }
  }
  for (const entry of normalizedAllowlist) {
    if (isModelFamilyAlias(entry) && !familyHasSpecificEntries(entry, normalizedAllowlist) && modelBelongsToFamily(normalizedModel, entry)) {
      return true;
    }
  }
  if (isModelAlias(normalizedModel)) {
    const resolved = parseUserSpecifiedModel(normalizedModel).toLowerCase();
    if (normalizedAllowlist.includes(resolved)) {
      return true;
    }
  }
  for (const entry of normalizedAllowlist) {
    if (!isModelFamilyAlias(entry) && isModelAlias(entry)) {
      const resolved = parseUserSpecifiedModel(entry).toLowerCase();
      if (resolved === normalizedModel) {
        return true;
      }
    }
  }
  for (const entry of normalizedAllowlist) {
    if (!isModelFamilyAlias(entry) && !isModelAlias(entry)) {
      if (modelMatchesVersionPrefix(normalizedModel, entry)) {
        return true;
      }
    }
  }
  return false;
}
var init_modelAllowlist = __esm(() => {
  init_settings2();
  init_aliases();
  init_model();
  init_modelStrings();
});

// src/utils/stringUtils.ts
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function plural(n, word, pluralWord = word + "s") {
  return n === 1 ? word : pluralWord;
}
function firstLineOf(s) {
  const nl = s.indexOf(`
`);
  return nl === -1 ? s : s.slice(0, nl);
}
function countCharInString(str, char, start = 0) {
  let count2 = 0;
  let i = str.indexOf(char, start);
  while (i !== -1) {
    count2++;
    i = str.indexOf(char, i + 1);
  }
  return count2;
}
function normalizeFullWidthDigits(input) {
  return input.replace(/[\uFF10-\uFF19]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 65248));
}
function normalizeFullWidthSpace(input) {
  return input.replace(/\u3000/g, " ");
}
function safeJoinLines(lines, delimiter = ",", maxSize = MAX_STRING_LENGTH) {
  const truncationMarker = "...[truncated]";
  let result = "";
  for (const line of lines) {
    const delimiterToAdd = result ? delimiter : "";
    const fullAddition = delimiterToAdd + line;
    if (result.length + fullAddition.length <= maxSize) {
      result += fullAddition;
    } else {
      const remainingSpace = maxSize - result.length - delimiterToAdd.length - truncationMarker.length;
      if (remainingSpace > 0) {
        result += delimiterToAdd + line.slice(0, remainingSpace) + truncationMarker;
      } else {
        result += truncationMarker;
      }
      return result;
    }
  }
  return result;
}

class EndTruncatingAccumulator {
  maxSize;
  content = "";
  isTruncated = false;
  totalBytesReceived = 0;
  constructor(maxSize = MAX_STRING_LENGTH) {
    this.maxSize = maxSize;
  }
  append(data) {
    const str = typeof data === "string" ? data : data.toString();
    this.totalBytesReceived += str.length;
    if (this.isTruncated && this.content.length >= this.maxSize) {
      return;
    }
    if (this.content.length + str.length > this.maxSize) {
      const remainingSpace = this.maxSize - this.content.length;
      if (remainingSpace > 0) {
        this.content += str.slice(0, remainingSpace);
      }
      this.isTruncated = true;
    } else {
      this.content += str;
    }
  }
  toString() {
    if (!this.isTruncated) {
      return this.content;
    }
    const truncatedBytes = this.totalBytesReceived - this.maxSize;
    const truncatedKB = Math.round(truncatedBytes / 1024);
    return this.content + `
... [output truncated - ${truncatedKB}KB removed]`;
  }
  clear() {
    this.content = "";
    this.isTruncated = false;
    this.totalBytesReceived = 0;
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
function truncateToLines(text, maxLines) {
  const lines = text.split(`
`);
  if (lines.length <= maxLines) {
    return text;
  }
  return lines.slice(0, maxLines).join(`
`) + "\u2026";
}
var MAX_STRING_LENGTH;
var init_stringUtils = __esm(() => {
  MAX_STRING_LENGTH = 2 ** 25;
});

// src/utils/model/model.ts
function getSmallFastModel() {
  const provider = getAPIProvider();
  if (provider === "openai" && process.env.OPENAI_SMALL_FAST_MODEL) {
    return process.env.OPENAI_SMALL_FAST_MODEL;
  }
  if (provider === "gemini" && process.env.GEMINI_SMALL_FAST_MODEL) {
    return process.env.GEMINI_SMALL_FAST_MODEL;
  }
  return process.env.ANTHROPIC_SMALL_FAST_MODEL || getDefaultHaikuModel();
}
function isNonCustomOpusModel(model) {
  return model === getModelStrings2().opus40 || model === getModelStrings2().opus41 || model === getModelStrings2().opus45 || model === getModelStrings2().opus46 || model === getModelStrings2().opus47;
}
function getUserSpecifiedModelSetting() {
  let specifiedModel;
  const modelOverride = getMainLoopModelOverride();
  if (modelOverride !== undefined) {
    specifiedModel = modelOverride;
  } else {
    const settings = getSettings_DEPRECATED() || {};
    const envModel = isMiMoRuntime() ? undefined : process.env.ANTHROPIC_MODEL;
    specifiedModel = envModel || settings.model || undefined;
  }
  if (isMiMoRuntime() && specifiedModel && !specifiedModel.startsWith("mimo")) {
    return;
  }
  if (specifiedModel && !isModelAllowed(specifiedModel)) {
    return;
  }
  return specifiedModel;
}
function getMainLoopModel() {
  const model = getUserSpecifiedModelSetting();
  if (model !== undefined && model !== null) {
    return parseUserSpecifiedModel(model);
  }
  return getDefaultMainLoopModel();
}
function getBestModel() {
  return getDefaultOpusModel();
}
function getDefaultOpusModel() {
  const provider = getAPIProvider();
  if (provider === "openai" && process.env.OPENAI_DEFAULT_OPUS_MODEL) {
    return process.env.OPENAI_DEFAULT_OPUS_MODEL;
  }
  if (provider === "gemini" && process.env.GEMINI_DEFAULT_OPUS_MODEL) {
    return process.env.GEMINI_DEFAULT_OPUS_MODEL;
  }
  if (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL) {
    return process.env.ANTHROPIC_DEFAULT_OPUS_MODEL;
  }
  if (provider !== "firstParty") {
    return getModelStrings2().opus47;
  }
  return getModelStrings2().opus47;
}
function getDefaultSonnetModel() {
  const provider = getAPIProvider();
  if (provider === "openai" && process.env.OPENAI_DEFAULT_SONNET_MODEL) {
    return process.env.OPENAI_DEFAULT_SONNET_MODEL;
  }
  if (provider === "gemini" && process.env.GEMINI_DEFAULT_SONNET_MODEL) {
    return process.env.GEMINI_DEFAULT_SONNET_MODEL;
  }
  if (process.env.ANTHROPIC_DEFAULT_SONNET_MODEL) {
    return process.env.ANTHROPIC_DEFAULT_SONNET_MODEL;
  }
  if (provider !== "firstParty") {
    return getModelStrings2().sonnet45;
  }
  return getModelStrings2().sonnet46;
}
function getDefaultHaikuModel() {
  const provider = getAPIProvider();
  if (provider === "openai" && process.env.OPENAI_DEFAULT_HAIKU_MODEL) {
    return process.env.OPENAI_DEFAULT_HAIKU_MODEL;
  }
  if (provider === "gemini" && process.env.GEMINI_DEFAULT_HAIKU_MODEL) {
    return process.env.GEMINI_DEFAULT_HAIKU_MODEL;
  }
  if (process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL) {
    return process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL;
  }
  return getModelStrings2().haiku45;
}
function getRuntimeMainLoopModel(params) {
  const { permissionMode, mainLoopModel, exceeds200kTokens = false } = params;
  if (getUserSpecifiedModelSetting() === "opusplan" && permissionMode === "plan" && !exceeds200kTokens) {
    return getDefaultOpusModel();
  }
  if (getUserSpecifiedModelSetting() === "haiku" && permissionMode === "plan") {
    return getDefaultSonnetModel();
  }
  return mainLoopModel;
}
function getDefaultMainLoopModelSetting() {
  if (isMiMoRuntime()) {
    return process.env.ANTHROPIC_DEFAULT_SONNET_MODEL || "mimo-v2.5-pro";
  }
  if (process.env.USER_TYPE === "ant") {
    return getAntModelOverrideConfig()?.defaultModel ?? getDefaultOpusModel() + "[1m]";
  }
  if (isMaxSubscriber()) {
    return getDefaultOpusModel() + (isOpus1mMergeEnabled() ? "[1m]" : "");
  }
  if (isTeamPremiumSubscriber()) {
    return getDefaultOpusModel() + (isOpus1mMergeEnabled() ? "[1m]" : "");
  }
  return getDefaultSonnetModel();
}
function getDefaultMainLoopModel() {
  return parseUserSpecifiedModel(getDefaultMainLoopModelSetting());
}
function firstPartyNameToCanonical(name) {
  name = name.toLowerCase();
  if (name.includes("claude-opus-4-7")) {
    return "claude-opus-4-7";
  }
  if (name.includes("claude-opus-4-6")) {
    return "claude-opus-4-6";
  }
  if (name.includes("claude-opus-4-5")) {
    return "claude-opus-4-5";
  }
  if (name.includes("claude-opus-4-1")) {
    return "claude-opus-4-1";
  }
  if (name.includes("claude-opus-4")) {
    return "claude-opus-4";
  }
  if (name.includes("claude-sonnet-4-6")) {
    return "claude-sonnet-4-6";
  }
  if (name.includes("claude-sonnet-4-5")) {
    return "claude-sonnet-4-5";
  }
  if (name.includes("claude-sonnet-4")) {
    return "claude-sonnet-4";
  }
  if (name.includes("claude-haiku-4-5")) {
    return "claude-haiku-4-5";
  }
  if (name.includes("claude-3-7-sonnet")) {
    return "claude-3-7-sonnet";
  }
  if (name.includes("claude-3-5-sonnet")) {
    return "claude-3-5-sonnet";
  }
  if (name.includes("claude-3-5-haiku")) {
    return "claude-3-5-haiku";
  }
  if (name.includes("claude-3-opus")) {
    return "claude-3-opus";
  }
  if (name.includes("claude-3-sonnet")) {
    return "claude-3-sonnet";
  }
  if (name.includes("claude-3-haiku")) {
    return "claude-3-haiku";
  }
  const match = name.match(/(claude-(\d+-\d+-)?\w+)/);
  if (match && match[1]) {
    return match[1];
  }
  return name;
}
function getCanonicalName(fullModelName) {
  return firstPartyNameToCanonical(resolveOverriddenModel(fullModelName));
}
function getClaudeAiUserDefaultModelDescription(fastMode = false) {
  if (isMaxSubscriber() || isTeamPremiumSubscriber()) {
    if (isOpus1mMergeEnabled()) {
      return `Opus 4.7 with 1M context \xB7 Most capable for complex work${fastMode ? getOpusPricingSuffix(true) : ""}`;
    }
    return `Opus 4.7 \xB7 Most capable for complex work${fastMode ? getOpusPricingSuffix(true) : ""}`;
  }
  return "Sonnet 4.6 \xB7 Best for everyday tasks";
}
function renderDefaultModelSetting(setting) {
  if (setting === "opusplan") {
    return "Opus 4.7 in plan mode, else Sonnet 4.6";
  }
  return renderModelName(parseUserSpecifiedModel(setting));
}
function getOpusPricingSuffix(fastMode) {
  if (getAPIProvider() !== "firstParty")
    return "";
  const pricing = formatModelPricing(getOpus46CostTier(fastMode));
  const fastModeIndicator = fastMode ? ` (${LIGHTNING_BOLT})` : "";
  return ` \xB7${fastModeIndicator} ${pricing}`;
}
function isOpus1mMergeEnabled() {
  if (is1mContextDisabled() || isProSubscriber() || getAPIProvider() !== "firstParty") {
    return false;
  }
  if (isClaudeAISubscriber() && getSubscriptionType() === null) {
    return false;
  }
  return true;
}
function renderModelSetting(setting) {
  if (setting === "opusplan") {
    return "Opus Plan";
  }
  if (isModelAlias(setting)) {
    return capitalize(setting);
  }
  return renderModelName(setting);
}
function getPublicModelDisplayName(model) {
  switch (model) {
    case getModelStrings2().opus47:
      return "Opus 4.7";
    case getModelStrings2().opus47 + "[1m]":
      return "Opus 4.7 (1M context)";
    case getModelStrings2().opus46:
      return "Opus 4.6";
    case getModelStrings2().opus46 + "[1m]":
      return "Opus 4.6 (1M context)";
    case getModelStrings2().opus45:
      return "Opus 4.5";
    case getModelStrings2().opus41:
      return "Opus 4.1";
    case getModelStrings2().opus40:
      return "Opus 4";
    case getModelStrings2().sonnet46 + "[1m]":
      return "Sonnet 4.6 (1M context)";
    case getModelStrings2().sonnet46:
      return "Sonnet 4.6";
    case getModelStrings2().sonnet45 + "[1m]":
      return "Sonnet 4.5 (1M context)";
    case getModelStrings2().sonnet45:
      return "Sonnet 4.5";
    case getModelStrings2().sonnet40:
      return "Sonnet 4";
    case getModelStrings2().sonnet40 + "[1m]":
      return "Sonnet 4 (1M context)";
    case getModelStrings2().sonnet37:
      return "Sonnet 3.7";
    case getModelStrings2().sonnet35:
      return "Sonnet 3.5";
    case getModelStrings2().haiku45:
      return "Haiku 4.5";
    case getModelStrings2().haiku35:
      return "Haiku 3.5";
    default:
      if (model === "mimo-v2.5")
        return "MiMo V2.5";
      if (model === "mimo-v2.5-pro")
        return "MiMo V2.5 Pro";
      if (model === "mimo-v2-pro")
        return "MiMo V2 Pro";
      if (model === "mimo-v2-omni")
        return "MiMo V2 Omni";
      if (model.startsWith("mimo-"))
        return model;
      return null;
  }
}
function maskModelCodename(baseName) {
  const [codename = "", ...rest] = baseName.split("-");
  const masked = codename.slice(0, 3) + "*".repeat(Math.max(0, codename.length - 3));
  return [masked, ...rest].join("-");
}
function renderModelName(model) {
  const publicName = getPublicModelDisplayName(model);
  if (publicName) {
    return publicName;
  }
  if (process.env.USER_TYPE === "ant") {
    const resolved = parseUserSpecifiedModel(model);
    const antModel = resolveAntModel(model);
    if (antModel) {
      const baseName = antModel.model.replace(/\[1m\]$/i, "");
      const masked = maskModelCodename(baseName);
      const suffix = has1mContext(resolved) ? "[1m]" : "";
      return masked + suffix;
    }
    if (resolved !== model) {
      return `${model} (${resolved})`;
    }
    return resolved;
  }
  return model;
}
function getPublicModelName(model) {
  const publicName = getPublicModelDisplayName(model);
  if (publicName) {
    return `Claude ${publicName}`;
  }
  return `Claude (${model})`;
}
function parseUserSpecifiedModel(modelInput) {
  const modelInputTrimmed = modelInput.trim();
  const normalizedModel = modelInputTrimmed.toLowerCase();
  const has1mTag = has1mContext(normalizedModel);
  const modelString = has1mTag ? normalizedModel.replace(/\[1m]$/i, "").trim() : normalizedModel;
  if (isModelAlias(modelString)) {
    switch (modelString) {
      case "opusplan":
        return getDefaultSonnetModel() + (has1mTag ? "[1m]" : "");
      case "sonnet":
        return getDefaultSonnetModel() + (has1mTag ? "[1m]" : "");
      case "haiku":
        return getDefaultHaikuModel() + (has1mTag ? "[1m]" : "");
      case "opus":
        return getDefaultOpusModel() + (has1mTag ? "[1m]" : "");
      case "best":
        return getBestModel();
      default:
    }
  }
  if (getAPIProvider() === "firstParty" && isLegacyOpusFirstParty(modelString) && isLegacyModelRemapEnabled()) {
    return getDefaultOpusModel() + (has1mTag ? "[1m]" : "");
  }
  if (process.env.USER_TYPE === "ant") {
    const has1mAntTag = has1mContext(normalizedModel);
    const baseAntModel = normalizedModel.replace(/\[1m]$/i, "").trim();
    const antModel = resolveAntModel(baseAntModel);
    if (antModel) {
      const suffix = has1mAntTag ? "[1m]" : "";
      return antModel.model + suffix;
    }
  }
  if (has1mTag) {
    return modelInputTrimmed.replace(/\[1m\]$/i, "").trim() + "[1m]";
  }
  return modelInputTrimmed;
}
function resolveSkillModelOverride(skillModel, currentModel) {
  if (has1mContext(skillModel) || !has1mContext(currentModel)) {
    return skillModel;
  }
  if (modelSupports1M(parseUserSpecifiedModel(skillModel))) {
    return skillModel + "[1m]";
  }
  return skillModel;
}
function isLegacyOpusFirstParty(model) {
  return LEGACY_OPUS_FIRSTPARTY.includes(model);
}
function isLegacyModelRemapEnabled() {
  return !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP);
}
function modelDisplayString(model) {
  if (model === null) {
    if (process.env.USER_TYPE === "ant") {
      return `Default for Ants (${renderDefaultModelSetting(getDefaultMainLoopModelSetting())})`;
    } else if (isClaudeAISubscriber()) {
      return `Default (${getClaudeAiUserDefaultModelDescription()})`;
    }
    return `Default (${getDefaultMainLoopModel()})`;
  }
  const resolvedModel = parseUserSpecifiedModel(model);
  return model === resolvedModel ? resolvedModel : `${model} (${resolvedModel})`;
}
function getMarketingNameForModel(modelId) {
  if (getAPIProvider() === "foundry") {
    return;
  }
  const has1m = modelId.toLowerCase().includes("[1m]");
  const canonical = getCanonicalName(modelId);
  if (canonical.includes("claude-opus-4-7")) {
    return has1m ? "Opus 4.7 (with 1M context)" : "Opus 4.7";
  }
  if (canonical.includes("claude-opus-4-6")) {
    return has1m ? "Opus 4.6 (with 1M context)" : "Opus 4.6";
  }
  if (canonical.includes("claude-opus-4-5")) {
    return "Opus 4.5";
  }
  if (canonical.includes("claude-opus-4-1")) {
    return "Opus 4.1";
  }
  if (canonical.includes("claude-opus-4")) {
    return "Opus 4";
  }
  if (canonical.includes("claude-sonnet-4-6")) {
    return has1m ? "Sonnet 4.6 (with 1M context)" : "Sonnet 4.6";
  }
  if (canonical.includes("claude-sonnet-4-5")) {
    return has1m ? "Sonnet 4.5 (with 1M context)" : "Sonnet 4.5";
  }
  if (canonical.includes("claude-sonnet-4")) {
    return has1m ? "Sonnet 4 (with 1M context)" : "Sonnet 4";
  }
  if (canonical.includes("claude-3-7-sonnet")) {
    return "Claude 3.7 Sonnet";
  }
  if (canonical.includes("claude-3-5-sonnet")) {
    return "Claude 3.5 Sonnet";
  }
  if (canonical.includes("claude-haiku-4-5")) {
    return "Haiku 4.5";
  }
  if (canonical.includes("claude-3-5-haiku")) {
    return "Claude 3.5 Haiku";
  }
  return;
}
function normalizeModelStringForAPI(model) {
  return model.replace(/\[(1|2)m\]/gi, "");
}
var LEGACY_OPUS_FIRSTPARTY;
var init_model = __esm(() => {
  init_state();
  init_antModels();
  init_auth2();
  init_context();
  init_envUtils();
  init_modelStrings();
  init_modelCost();
  init_settings2();
  init_providers();
  init_figures();
  init_modelAllowlist();
  init_aliases();
  init_mimoRuntimeConfig();
  init_stringUtils();
  LEGACY_OPUS_FIRSTPARTY = [
    "claude-opus-4-20250514",
    "claude-opus-4-1-20250805",
    "claude-opus-4-0",
    "claude-opus-4-1"
  ];
});

// src/services/api/client.ts
import { randomUUID } from "crypto";
function createStderrLogger() {
  return {
    error: (msg, ...args) => console.error("[Anthropic SDK ERROR]", msg, ...args),
    warn: (msg, ...args) => console.error("[Anthropic SDK WARN]", msg, ...args),
    info: (msg, ...args) => console.error("[Anthropic SDK INFO]", msg, ...args),
    debug: (msg, ...args) => console.error("[Anthropic SDK DEBUG]", msg, ...args)
  };
}
async function getAnthropicClient({
  apiKey,
  maxRetries,
  model,
  fetchOverride,
  source
}) {
  const containerId = process.env.CLAUDE_CODE_CONTAINER_ID;
  const remoteSessionId = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  const clientApp = process.env.CLAUDE_AGENT_SDK_CLIENT_APP;
  const customHeaders = getCustomHeaders();
  const mimoRuntime = isMiMoRuntime();
  const defaultHeaders = {
    "x-app": "cli",
    "User-Agent": getUserAgent(),
    "X-Claude-Code-Session-Id": getSessionId(),
    ...customHeaders,
    ...containerId ? { "x-claude-remote-container-id": containerId } : {},
    ...remoteSessionId ? { "x-claude-remote-session-id": remoteSessionId } : {},
    ...clientApp ? { "x-client-app": clientApp } : {},
    ...process.env.ANTHROPIC_AUTH_NONCE ? { "x-auth-nonce": process.env.ANTHROPIC_AUTH_NONCE } : {}
  };
  if (mimoRuntime) {
    const mimoApiKey = getConfiguredMiMoApiKey();
    if (!mimoApiKey) {
      throw new Error(getMiMoMissingApiKeyMessage());
    }
    defaultHeaders["x-api-key"] = mimoApiKey;
    defaultHeaders["Authorization"] = null;
  }
  logForDebugging(`[API:request] Creating client, ANTHROPIC_CUSTOM_HEADERS present: ${!!process.env.ANTHROPIC_CUSTOM_HEADERS}, has Authorization header: ${!!customHeaders["Authorization"]}`);
  const additionalProtectionEnabled = isEnvTruthy(process.env.CLAUDE_CODE_ADDITIONAL_PROTECTION);
  if (additionalProtectionEnabled) {
    defaultHeaders["x-anthropic-additional-protection"] = "true";
  }
  if (!mimoRuntime) {
    logForDebugging("[API:auth] OAuth token check starting");
    await checkAndRefreshOAuthTokenIfNeeded();
    logForDebugging("[API:auth] OAuth token check complete");
    if (!isClaudeAISubscriber()) {
      await configureApiKeyHeaders(defaultHeaders, getIsNonInteractiveSession());
    }
  }
  const resolvedFetch = buildFetch(fetchOverride, source);
  const ARGS = {
    defaultHeaders,
    maxRetries,
    timeout: parseInt(process.env.API_TIMEOUT_MS || String(600 * 1000), 10),
    dangerouslyAllowBrowser: true,
    fetchOptions: getProxyFetchOptions({
      forAnthropicAPI: true
    }),
    ...resolvedFetch && {
      fetch: resolvedFetch
    }
  };
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK)) {
    const { BedrockClient } = await import("./chunk-cpe2jags.js");
    const awsRegion = model === getSmallFastModel() && process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION ? process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION : getAWSRegion();
    const bedrockArgs = {
      ...ARGS,
      awsRegion,
      ...isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH) && {
        skipAuth: true
      },
      ...isDebugToStdErr() && { logger: createStderrLogger() }
    };
    if (process.env.AWS_BEARER_TOKEN_BEDROCK) {
      bedrockArgs.skipAuth = true;
      bedrockArgs.defaultHeaders = {
        ...bedrockArgs.defaultHeaders,
        Authorization: `Bearer ${process.env.AWS_BEARER_TOKEN_BEDROCK}`
      };
    } else if (!isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) {
      const cachedCredentials = await refreshAndGetAwsCredentials();
      if (cachedCredentials) {
        bedrockArgs.awsAccessKey = cachedCredentials.accessKeyId;
        bedrockArgs.awsSecretKey = cachedCredentials.secretAccessKey;
        bedrockArgs.awsSessionToken = cachedCredentials.sessionToken;
      }
    }
    return new BedrockClient(bedrockArgs);
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY)) {
    const { AnthropicFoundry } = await import("./chunk-jajjer7b.js");
    let azureADTokenProvider;
    if (!process.env.ANTHROPIC_FOUNDRY_API_KEY) {
      if (isEnvTruthy(process.env.CLAUDE_CODE_SKIP_FOUNDRY_AUTH)) {
        azureADTokenProvider = () => Promise.resolve("");
      } else {
        const {
          DefaultAzureCredential: AzureCredential,
          getBearerTokenProvider
        } = await import("./chunk-s6ee17a1.js");
        azureADTokenProvider = getBearerTokenProvider(new AzureCredential, "https://cognitiveservices.azure.com/.default");
      }
    }
    const foundryArgs = {
      ...ARGS,
      ...azureADTokenProvider && { azureADTokenProvider },
      ...isDebugToStdErr() && { logger: createStderrLogger() }
    };
    return new AnthropicFoundry(foundryArgs);
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX)) {
    if (!isEnvTruthy(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) {
      await refreshGcpCredentialsIfNeeded();
    }
    const [{ AnthropicVertex }, { GoogleAuth }] = await Promise.all([
      import("./chunk-z2mtrn4c.js"),
      import("./chunk-tezak8rx.js").then((m)=>__toESM(m.default,1))
    ]);
    const hasProjectEnvVar = process.env["GCLOUD_PROJECT"] || process.env["GOOGLE_CLOUD_PROJECT"] || process.env["gcloud_project"] || process.env["google_cloud_project"];
    const hasKeyFile = process.env["GOOGLE_APPLICATION_CREDENTIALS"] || process.env["google_application_credentials"];
    const googleAuth = isEnvTruthy(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH) ? {
      getClient: () => ({
        getRequestHeaders: () => ({})
      })
    } : new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      ...hasProjectEnvVar || hasKeyFile ? {} : {
        projectId: process.env.ANTHROPIC_VERTEX_PROJECT_ID
      }
    });
    const vertexArgs = {
      ...ARGS,
      region: getVertexRegionForModel(model),
      googleAuth,
      ...isDebugToStdErr() && { logger: createStderrLogger() }
    };
    return new AnthropicVertex(vertexArgs);
  }
  const clientConfig = {
    apiKey: mimoRuntime ? null : isClaudeAISubscriber() ? null : apiKey || getAnthropicApiKey(),
    authToken: !mimoRuntime && isClaudeAISubscriber() ? getClaudeAIOAuthTokens()?.accessToken : undefined,
    ...process.env.USER_TYPE === "ant" && isEnvTruthy(process.env.USE_STAGING_OAUTH) ? { baseURL: getOauthConfig().BASE_API_URL } : {},
    ...ARGS,
    ...isDebugToStdErr() && { logger: createStderrLogger() }
  };
  return new Anthropic(clientConfig);
}
async function configureApiKeyHeaders(headers, isNonInteractiveSession) {
  const token = process.env.ANTHROPIC_AUTH_TOKEN || await getApiKeyFromApiKeyHelper(isNonInteractiveSession);
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
}
function getCustomHeaders() {
  const customHeaders = {};
  const customHeadersEnv = process.env.ANTHROPIC_CUSTOM_HEADERS;
  if (!customHeadersEnv)
    return customHeaders;
  const headerStrings = customHeadersEnv.split(/\n|\r\n/);
  for (const headerString of headerStrings) {
    if (!headerString.trim())
      continue;
    const colonIdx = headerString.indexOf(":");
    if (colonIdx === -1)
      continue;
    const name = headerString.slice(0, colonIdx).trim();
    const value = headerString.slice(colonIdx + 1).trim();
    if (name) {
      customHeaders[name] = value;
    }
  }
  return customHeaders;
}
function buildFetch(fetchOverride, source) {
  const inner = fetchOverride ?? globalThis.fetch;
  const injectClientRequestId = getAPIProvider() === "firstParty" && isFirstPartyAnthropicBaseUrl();
  return (input, init) => {
    const headers = new Headers(init?.headers);
    if (injectClientRequestId && !headers.has(CLIENT_REQUEST_ID_HEADER)) {
      headers.set(CLIENT_REQUEST_ID_HEADER, randomUUID());
    }
    try {
      const url = input instanceof Request ? input.url : String(input);
      const id = headers.get(CLIENT_REQUEST_ID_HEADER);
      logForDebugging(`[API REQUEST] ${new URL(url).pathname}${id ? ` ${CLIENT_REQUEST_ID_HEADER}=${id}` : ""} source=${source ?? "unknown"}`);
    } catch {}
    return inner(input, { ...init, headers });
  };
}
var CLIENT_REQUEST_ID_HEADER = "x-client-request-id";
var init_client = __esm(() => {
  init_sdk();
  init_auth2();
  init_http();
  init_mimoRuntimeConfig();
  init_model();
  init_providers();
  init_proxy();
  init_state();
  init_oauth();
  init_debug();
  init_envUtils();
});

// src/utils/model/modelCapabilities.ts
import { readFileSync as readFileSync3 } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { join as join6 } from "path";
function getCacheDir() {
  return join6(getClaudeConfigHomeDir(), "cache");
}
function getCachePath() {
  return join6(getCacheDir(), "model-capabilities.json");
}
function isModelCapabilitiesEligible() {
  if (getAPIProvider() !== "firstParty")
    return false;
  if (!isFirstPartyAnthropicBaseUrl())
    return false;
  return true;
}
function sortForMatching(models) {
  return [...models].sort((a, b) => b.id.length - a.id.length || a.id.localeCompare(b.id));
}
function getModelCapability(model) {
  if (!isModelCapabilitiesEligible())
    return;
  const cached = loadCache(getCachePath());
  if (!cached || cached.length === 0)
    return;
  const m = model.toLowerCase();
  const exact = cached.find((c) => c.id.toLowerCase() === m);
  if (exact)
    return exact;
  return cached.find((c) => m.includes(c.id.toLowerCase()));
}
async function refreshModelCapabilities() {
  if (!isModelCapabilitiesEligible())
    return;
  if (isEssentialTrafficOnly())
    return;
  try {
    const anthropic = await getAnthropicClient({ maxRetries: 1 });
    const betas = isClaudeAISubscriber() ? [OAUTH_BETA_HEADER] : undefined;
    const parsed = [];
    for await (const entry of anthropic.models.list({ betas })) {
      const result = ModelCapabilitySchema().safeParse(entry);
      if (result.success)
        parsed.push(result.data);
    }
    if (parsed.length === 0)
      return;
    const path = getCachePath();
    const models = sortForMatching(parsed);
    if (isEqual_default(loadCache(path), models)) {
      logForDebugging("[modelCapabilities] cache unchanged, skipping write");
      return;
    }
    await mkdir(getCacheDir(), { recursive: true });
    await writeFile(path, jsonStringify({ models, timestamp: Date.now() }), {
      encoding: "utf-8",
      mode: 384
    });
    loadCache.cache.delete(path);
    logForDebugging(`[modelCapabilities] cached ${models.length} models`);
  } catch (error) {
    logForDebugging(`[modelCapabilities] fetch failed: ${error instanceof Error ? error.message : "unknown"}`);
  }
}
var ModelCapabilitySchema, CacheFileSchema, loadCache;
var init_modelCapabilities = __esm(() => {
  init_isEqual();
  init_memoize();
  init_v4();
  init_oauth();
  init_client();
  init_auth2();
  init_debug();
  init_envUtils();
  init_json();
  init_lazySchema();
  init_privacyLevel();
  init_slowOperations();
  init_providers();
  ModelCapabilitySchema = lazySchema(() => exports_external.object({
    id: exports_external.string(),
    max_input_tokens: exports_external.number().optional(),
    max_tokens: exports_external.number().optional()
  }).strip());
  CacheFileSchema = lazySchema(() => exports_external.object({
    models: exports_external.array(ModelCapabilitySchema()),
    timestamp: exports_external.number()
  }));
  loadCache = memoize_default((path) => {
    try {
      const raw = readFileSync3(path, "utf-8");
      const parsed = CacheFileSchema().safeParse(safeParseJSON(raw, false));
      return parsed.success ? parsed.data.models : null;
    } catch {
      return null;
    }
  }, (path) => path);
});

// src/utils/context.ts
function is1mContextDisabled() {
  return isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_1M_CONTEXT);
}
function has1mContext(model) {
  if (is1mContextDisabled()) {
    return false;
  }
  return /\[1m\]/i.test(model);
}
function modelSupports1M(model) {
  if (is1mContextDisabled()) {
    return false;
  }
  const canonical = getCanonicalName(model);
  return canonical.includes("claude-sonnet-4") || canonical.includes("opus-4-6") || canonical.includes("opus-4-7");
}
function getContextWindowForModel(model, betas) {
  if (process.env.USER_TYPE === "ant" && process.env.CLAUDE_CODE_MAX_CONTEXT_TOKENS) {
    const override = parseInt(process.env.CLAUDE_CODE_MAX_CONTEXT_TOKENS, 10);
    if (!isNaN(override) && override > 0) {
      return override;
    }
  }
  if (has1mContext(model)) {
    return 1e6;
  }
  const cap = getModelCapability(model);
  if (cap?.max_input_tokens && cap.max_input_tokens >= 1e5) {
    if (cap.max_input_tokens > MODEL_CONTEXT_WINDOW_DEFAULT && is1mContextDisabled()) {
      return MODEL_CONTEXT_WINDOW_DEFAULT;
    }
    return cap.max_input_tokens;
  }
  if (betas?.includes(CONTEXT_1M_BETA_HEADER) && modelSupports1M(model)) {
    return 1e6;
  }
  if (getSonnet1mExpTreatmentEnabled(model)) {
    return 1e6;
  }
  if (process.env.USER_TYPE === "ant") {
    const antModel = resolveAntModel(model);
    if (antModel?.contextWindow) {
      return antModel.contextWindow;
    }
  }
  return MODEL_CONTEXT_WINDOW_DEFAULT;
}
function getSonnet1mExpTreatmentEnabled(model) {
  if (is1mContextDisabled()) {
    return false;
  }
  if (has1mContext(model)) {
    return false;
  }
  if (!getCanonicalName(model).includes("sonnet-4-6")) {
    return false;
  }
  return getGlobalConfig().clientDataCache?.["coral_reef_sonnet"] === "true";
}
function calculateContextPercentages(currentUsage, contextWindowSize) {
  if (!currentUsage) {
    return { used: null, remaining: null };
  }
  const totalInputTokens = currentUsage.input_tokens + currentUsage.cache_creation_input_tokens + currentUsage.cache_read_input_tokens;
  if (totalInputTokens === 0) {
    return { used: null, remaining: null };
  }
  const usedPercentage = Math.round(totalInputTokens / contextWindowSize * 100);
  const clampedUsed = Math.min(100, Math.max(0, usedPercentage));
  return {
    used: clampedUsed,
    remaining: 100 - clampedUsed
  };
}
function getModelMaxOutputTokens(model) {
  let defaultTokens;
  let upperLimit;
  if (process.env.USER_TYPE === "ant") {
    const antModel = resolveAntModel(model.toLowerCase());
    if (antModel) {
      defaultTokens = antModel.defaultMaxTokens ?? MAX_OUTPUT_TOKENS_DEFAULT;
      upperLimit = antModel.upperMaxTokensLimit ?? MAX_OUTPUT_TOKENS_UPPER_LIMIT;
      return { default: defaultTokens, upperLimit };
    }
  }
  const m = getCanonicalName(model);
  if (m.includes("opus-4-7")) {
    defaultTokens = 64000;
    upperLimit = 128000;
  } else if (m.includes("opus-4-6")) {
    defaultTokens = 64000;
    upperLimit = 128000;
  } else if (m.includes("sonnet-4-6")) {
    defaultTokens = 32000;
    upperLimit = 128000;
  } else if (m.includes("opus-4-5") || m.includes("sonnet-4") || m.includes("haiku-4")) {
    defaultTokens = 32000;
    upperLimit = 64000;
  } else if (m.includes("opus-4-1") || m.includes("opus-4")) {
    defaultTokens = 32000;
    upperLimit = 32000;
  } else if (m.includes("claude-3-opus")) {
    defaultTokens = 4096;
    upperLimit = 4096;
  } else if (m.includes("claude-3-sonnet")) {
    defaultTokens = 8192;
    upperLimit = 8192;
  } else if (m.includes("claude-3-haiku")) {
    defaultTokens = 4096;
    upperLimit = 4096;
  } else if (m.includes("3-5-sonnet") || m.includes("3-5-haiku")) {
    defaultTokens = 8192;
    upperLimit = 8192;
  } else if (m.includes("3-7-sonnet")) {
    defaultTokens = 32000;
    upperLimit = 64000;
  } else {
    defaultTokens = MAX_OUTPUT_TOKENS_DEFAULT;
    upperLimit = MAX_OUTPUT_TOKENS_UPPER_LIMIT;
  }
  const cap = getModelCapability(model);
  if (cap?.max_tokens && cap.max_tokens >= 4096) {
    upperLimit = cap.max_tokens;
    defaultTokens = Math.min(defaultTokens, upperLimit);
  }
  return { default: defaultTokens, upperLimit };
}
function getMaxThinkingTokensForModel(model) {
  return getModelMaxOutputTokens(model).upperLimit - 1;
}
var MODEL_CONTEXT_WINDOW_DEFAULT = 200000, COMPACT_MAX_OUTPUT_TOKENS = 20000, MAX_OUTPUT_TOKENS_DEFAULT = 32000, MAX_OUTPUT_TOKENS_UPPER_LIMIT = 64000, CAPPED_DEFAULT_MAX_TOKENS = 8000, ESCALATED_MAX_TOKENS = 64000;
var init_context = __esm(() => {
  init_betas();
  init_config();
  init_envUtils();
  init_model();
  init_antModels();
  init_modelCapabilities();
});

// src/utils/model/modelSupportOverrides.ts
var ANTHROPIC_TIERS, OPENAI_TIERS, get3PModelCapabilityOverride;
var init_modelSupportOverrides = __esm(() => {
  init_memoize();
  init_providers();
  ANTHROPIC_TIERS = [
    {
      modelEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
      capabilitiesEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES"
    },
    {
      modelEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL",
      capabilitiesEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES"
    },
    {
      modelEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
      capabilitiesEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES"
    }
  ];
  OPENAI_TIERS = [
    {
      modelEnvVar: "OPENAI_DEFAULT_OPUS_MODEL",
      capabilitiesEnvVar: "OPENAI_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES"
    },
    {
      modelEnvVar: "OPENAI_DEFAULT_SONNET_MODEL",
      capabilitiesEnvVar: "OPENAI_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES"
    },
    {
      modelEnvVar: "OPENAI_DEFAULT_HAIKU_MODEL",
      capabilitiesEnvVar: "OPENAI_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES"
    }
  ];
  get3PModelCapabilityOverride = memoize_default((model, capability) => {
    const provider = getAPIProvider();
    if (provider === "firstParty") {
      return;
    }
    if (provider === "mimo") {
      return false;
    }
    const m = model.toLowerCase();
    const tiers = provider === "openai" ? OPENAI_TIERS : ANTHROPIC_TIERS;
    for (const tier of tiers) {
      const pinned = process.env[tier.modelEnvVar];
      const capabilities = process.env[tier.capabilitiesEnvVar];
      if (!pinned || capabilities === undefined)
        continue;
      if (m !== pinned.toLowerCase())
        continue;
      return capabilities.toLowerCase().split(",").map((s) => s.trim()).includes(capability);
    }
    return;
  }, (model, capability) => {
    const provider = getAPIProvider();
    const tiers = provider === "openai" ? OPENAI_TIERS : ANTHROPIC_TIERS;
    return [
      provider,
      model.toLowerCase(),
      capability,
      ...tiers.flatMap((tier) => [
        process.env[tier.modelEnvVar] ?? "",
        process.env[tier.capabilitiesEnvVar] ?? ""
      ])
    ].join(":");
  });
});

// src/utils/betas.ts
function partitionBetasByAllowlist(betas) {
  const allowed = [];
  const disallowed = [];
  for (const beta of betas) {
    if (ALLOWED_SDK_BETAS.includes(beta)) {
      allowed.push(beta);
    } else {
      disallowed.push(beta);
    }
  }
  return { allowed, disallowed };
}
function filterAllowedSdkBetas(sdkBetas) {
  if (!sdkBetas || sdkBetas.length === 0) {
    return;
  }
  if (isClaudeAISubscriber()) {
    console.warn("Warning: Custom betas are only available for API key users. Ignoring provided betas.");
    return;
  }
  const { allowed, disallowed } = partitionBetasByAllowlist(sdkBetas);
  for (const beta of disallowed) {
    console.warn(`Warning: Beta header '${beta}' is not allowed. Only the following betas are supported: ${ALLOWED_SDK_BETAS.join(", ")}`);
  }
  return allowed.length > 0 ? allowed : undefined;
}
function modelSupportsISP(model) {
  const supported3P = get3PModelCapabilityOverride(model, "interleaved_thinking");
  if (supported3P !== undefined) {
    return supported3P;
  }
  const canonical = getCanonicalName(model);
  const provider = getAPIProvider();
  if (provider === "foundry") {
    return true;
  }
  if (provider === "firstParty") {
    return !canonical.includes("claude-3-");
  }
  return canonical.includes("claude-opus-4") || canonical.includes("claude-sonnet-4");
}
function vertexModelSupportsWebSearch(model) {
  const canonical = getCanonicalName(model);
  return canonical.includes("claude-opus-4") || canonical.includes("claude-sonnet-4") || canonical.includes("claude-haiku-4");
}
function modelSupportsContextManagement(model) {
  const canonical = getCanonicalName(model);
  const provider = getAPIProvider();
  if (provider === "foundry") {
    return true;
  }
  if (provider === "firstParty") {
    return !canonical.includes("claude-3-");
  }
  return canonical.includes("claude-opus-4") || canonical.includes("claude-sonnet-4") || canonical.includes("claude-haiku-4");
}
function modelSupportsStructuredOutputs(model) {
  const canonical = getCanonicalName(model);
  const provider = getAPIProvider();
  if (provider !== "firstParty" && provider !== "foundry") {
    return false;
  }
  return canonical.includes("claude-sonnet-4-6") || canonical.includes("claude-sonnet-4-5") || canonical.includes("claude-opus-4-1") || canonical.includes("claude-opus-4-5") || canonical.includes("claude-opus-4-6") || canonical.includes("claude-opus-4-7") || canonical.includes("claude-haiku-4-5");
}
function modelSupportsAutoMode(model) {
  if (true) {
    const m = getCanonicalName(model);
    if (process.env.USER_TYPE !== "ant" && getAPIProvider() !== "firstParty") {
      return false;
    }
    const config = getFeatureValue_CACHED_MAY_BE_STALE("tengu_auto_mode_config", {});
    const rawLower = model.toLowerCase();
    if (config?.allowModels?.some((am) => am.toLowerCase() === rawLower || am.toLowerCase() === m)) {
      return true;
    }
    if (process.env.USER_TYPE === "ant") {
      if (m.includes("claude-3-"))
        return false;
      if (/claude-(opus|sonnet|haiku)-4(?!-[6-9])/.test(m))
        return false;
      return true;
    }
    return /^claude-(opus|sonnet)-4-[67]/.test(m);
  }
  return false;
}
function getToolSearchBetaHeader() {
  const provider = getAPIProvider();
  if (provider === "vertex" || provider === "bedrock") {
    return TOOL_SEARCH_BETA_HEADER_3P;
  }
  return TOOL_SEARCH_BETA_HEADER_1P;
}
function shouldIncludeFirstPartyOnlyBetas() {
  return (getAPIProvider() === "firstParty" || getAPIProvider() === "foundry") && !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS);
}
function shouldUseGlobalCacheScope() {
  return getAPIProvider() === "firstParty" && !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS);
}
function getMergedBetas(model, options) {
  if (getAPIProvider() === "mimo") {
    return [];
  }
  const baseBetas = [...getModelBetas(model)];
  if (options?.isAgenticQuery) {
    if (!baseBetas.includes(CLAUDE_CODE_20250219_BETA_HEADER)) {
      baseBetas.push(CLAUDE_CODE_20250219_BETA_HEADER);
    }
    if (process.env.USER_TYPE === "ant" && process.env.CLAUDE_CODE_ENTRYPOINT === "cli" && CLI_INTERNAL_BETA_HEADER && !baseBetas.includes(CLI_INTERNAL_BETA_HEADER)) {
      baseBetas.push(CLI_INTERNAL_BETA_HEADER);
    }
  }
  const sdkBetas = getSdkBetas();
  if (!sdkBetas || sdkBetas.length === 0) {
    return baseBetas;
  }
  return [...baseBetas, ...sdkBetas.filter((b) => !baseBetas.includes(b))];
}
function clearBetasCaches() {
  getAllModelBetas.cache?.clear?.();
  getModelBetas.cache?.clear?.();
  getBedrockExtraBodyParamsBetas.cache?.clear?.();
}
var ALLOWED_SDK_BETAS, getAllModelBetas, getModelBetas, getBedrockExtraBodyParamsBetas;
var init_betas2 = __esm(() => {
  init_memoize();
  init_growthbook();
  init_state();
  init_betas();
  init_oauth();
  init_auth2();
  init_context();
  init_envUtils();
  init_model();
  init_modelSupportOverrides();
  init_providers();
  init_settings2();
  ALLOWED_SDK_BETAS = [CONTEXT_1M_BETA_HEADER];
  getAllModelBetas = memoize_default((model) => {
    const betaHeaders = [];
    const isHaiku = getCanonicalName(model).includes("haiku");
    const provider = getAPIProvider();
    if (provider === "mimo") {
      return [];
    }
    const includeFirstPartyOnlyBetas = shouldIncludeFirstPartyOnlyBetas();
    if (!isHaiku) {
      betaHeaders.push(CLAUDE_CODE_20250219_BETA_HEADER);
      if (process.env.USER_TYPE === "ant" && process.env.CLAUDE_CODE_ENTRYPOINT === "cli") {
        if (CLI_INTERNAL_BETA_HEADER) {
          betaHeaders.push(CLI_INTERNAL_BETA_HEADER);
        }
      }
    }
    if (isClaudeAISubscriber()) {
      betaHeaders.push(OAUTH_BETA_HEADER);
    }
    if (has1mContext(model)) {
      betaHeaders.push(CONTEXT_1M_BETA_HEADER);
    }
    if (!isEnvTruthy(process.env.DISABLE_INTERLEAVED_THINKING) && modelSupportsISP(model)) {
      betaHeaders.push(INTERLEAVED_THINKING_BETA_HEADER);
    }
    if (includeFirstPartyOnlyBetas && modelSupportsISP(model) && !getIsNonInteractiveSession() && getInitialSettings().showThinkingSummaries !== true) {
      betaHeaders.push(REDACT_THINKING_BETA_HEADER);
    }
    const toolClearingOptIn = isEnvTruthy(process.env.USE_API_CONTEXT_MANAGEMENT) || modelSupportsContextManagement(model);
    const thinkingPreservationEnabled = modelSupportsContextManagement(model);
    if (shouldIncludeFirstPartyOnlyBetas() && (toolClearingOptIn || thinkingPreservationEnabled)) {
      betaHeaders.push(CONTEXT_MANAGEMENT_BETA_HEADER);
    }
    const strictToolsEnabled = checkStatsigFeatureGate_CACHED_MAY_BE_STALE("tengu_tool_pear");
    const tokenEfficientToolsEnabled = !strictToolsEnabled && getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_json_tools", false);
    if (includeFirstPartyOnlyBetas && modelSupportsStructuredOutputs(model) && strictToolsEnabled) {
      betaHeaders.push(STRUCTURED_OUTPUTS_BETA_HEADER);
    }
    if (process.env.USER_TYPE === "ant" && includeFirstPartyOnlyBetas && tokenEfficientToolsEnabled) {
      betaHeaders.push(TOKEN_EFFICIENT_TOOLS_BETA_HEADER);
    }
    if (provider === "vertex" && vertexModelSupportsWebSearch(model)) {
      betaHeaders.push(WEB_SEARCH_BETA_HEADER);
    }
    if (provider === "foundry") {
      betaHeaders.push(WEB_SEARCH_BETA_HEADER);
    }
    if (includeFirstPartyOnlyBetas) {
      betaHeaders.push(PROMPT_CACHING_SCOPE_BETA_HEADER);
    }
    if (process.env.ANTHROPIC_BETAS) {
      betaHeaders.push(...process.env.ANTHROPIC_BETAS.split(",").map((_) => _.trim()).filter(Boolean));
    }
    return betaHeaders;
  });
  getModelBetas = memoize_default((model) => {
    const modelBetas = getAllModelBetas(model);
    if (getAPIProvider() === "bedrock") {
      return modelBetas.filter((b) => !BEDROCK_EXTRA_PARAMS_HEADERS.has(b));
    }
    return modelBetas;
  });
  getBedrockExtraBodyParamsBetas = memoize_default((model) => {
    const modelBetas = getAllModelBetas(model);
    return modelBetas.filter((b) => BEDROCK_EXTRA_PARAMS_HEADERS.has(b));
  });
});

// src/services/mcp/officialRegistry.ts
function isOfficialMcpUrl(normalizedUrl) {
  return officialUrls?.has(normalizedUrl) ?? false;
}
var officialUrls;
var init_officialRegistry = __esm(() => {
  init_debug();
  init_errors();
});

// src/utils/agentSwarmsEnabled.ts
function isAgentSwarmsEnabled() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS_DISABLED)) {
    return false;
  }
  return true;
}
var init_agentSwarmsEnabled = __esm(() => {
  init_envUtils();
});

// src/utils/agentContext.ts
import { AsyncLocalStorage as AsyncLocalStorage2 } from "async_hooks";
function getAgentContext() {
  return agentContextStorage.getStore();
}
function runWithAgentContext(context3, fn) {
  return agentContextStorage.run(context3, fn);
}
function isSubagentContext(context3) {
  return context3?.agentType === "subagent";
}
function getSubagentLogName() {
  const context3 = getAgentContext();
  if (!isSubagentContext(context3) || !context3.subagentName) {
    return;
  }
  return context3.isBuiltIn ? context3.subagentName : "user-defined";
}
function consumeInvokingRequestId() {
  const context3 = getAgentContext();
  if (!context3?.invokingRequestId || context3.invocationEmitted) {
    return;
  }
  context3.invocationEmitted = true;
  return {
    invokingRequestId: context3.invokingRequestId,
    invocationKind: context3.invocationKind
  };
}
var agentContextStorage;
var init_agentContext = __esm(() => {
  init_agentSwarmsEnabled();
  agentContextStorage = new AsyncLocalStorage2;
});

// src/services/analytics/metadata.ts
import { extname } from "path";
function sanitizeToolNameForAnalytics(toolName) {
  if (toolName.startsWith("mcp__")) {
    return "mcp_tool";
  }
  return toolName;
}
function isToolDetailsLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_TOOL_DETAILS);
}
function isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent") {
    return true;
  }
  if (mcpServerType === "claudeai-proxy") {
    return true;
  }
  if (mcpServerBaseUrl && isOfficialMcpUrl(mcpServerBaseUrl)) {
    return true;
  }
  return false;
}
function mcpToolDetailsForAnalytics(toolName, mcpServerType, mcpServerBaseUrl) {
  const details = extractMcpToolDetails(toolName);
  if (!details) {
    return {};
  }
  if (!BUILTIN_MCP_SERVER_NAMES.has(details.serverName) && !isAnalyticsToolDetailsLoggingEnabled(mcpServerType, mcpServerBaseUrl)) {
    return {};
  }
  return {
    mcpServerName: details.serverName,
    mcpToolName: details.mcpToolName
  };
}
function extractMcpToolDetails(toolName) {
  if (!toolName.startsWith("mcp__")) {
    return;
  }
  const parts = toolName.split("__");
  if (parts.length < 3) {
    return;
  }
  const serverName = parts[1];
  const mcpToolName = parts.slice(2).join("__");
  if (!serverName || !mcpToolName) {
    return;
  }
  return {
    serverName,
    mcpToolName
  };
}
function extractSkillName(toolName, input) {
  if (toolName !== "Skill") {
    return;
  }
  if (typeof input === "object" && input !== null && "skill" in input && typeof input.skill === "string") {
    return input.skill;
  }
  return;
}
function truncateToolInputValue(value, depth = 0) {
  if (typeof value === "string") {
    if (value.length > TOOL_INPUT_STRING_TRUNCATE_AT) {
      return `${value.slice(0, TOOL_INPUT_STRING_TRUNCATE_TO)}\u2026[${value.length} chars]`;
    }
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean" || value === null || value === undefined) {
    return value;
  }
  if (depth >= TOOL_INPUT_MAX_DEPTH) {
    return "<nested>";
  }
  if (Array.isArray(value)) {
    const mapped = value.slice(0, TOOL_INPUT_MAX_COLLECTION_ITEMS).map((v) => truncateToolInputValue(v, depth + 1));
    if (value.length > TOOL_INPUT_MAX_COLLECTION_ITEMS) {
      mapped.push(`\u2026[${value.length} items]`);
    }
    return mapped;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value).filter(([k]) => !k.startsWith("_"));
    const mapped = entries.slice(0, TOOL_INPUT_MAX_COLLECTION_ITEMS).map(([k, v]) => [k, truncateToolInputValue(v, depth + 1)]);
    if (entries.length > TOOL_INPUT_MAX_COLLECTION_ITEMS) {
      mapped.push(["\u2026", `${entries.length} keys`]);
    }
    return Object.fromEntries(mapped);
  }
  return String(value);
}
function extractToolInputForTelemetry(input) {
  if (!isToolDetailsLoggingEnabled()) {
    return;
  }
  const truncated = truncateToolInputValue(input);
  let json = jsonStringify(truncated);
  if (json.length > TOOL_INPUT_MAX_JSON_CHARS) {
    json = json.slice(0, TOOL_INPUT_MAX_JSON_CHARS) + "\u2026[truncated]";
  }
  return json;
}
function getFileExtensionForAnalytics(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!ext || ext === ".") {
    return;
  }
  const extension = ext.slice(1);
  if (extension.length > MAX_FILE_EXTENSION_LENGTH) {
    return "other";
  }
  return extension;
}
function getFileExtensionsFromBashCommand(command, simulatedSedEditFilePath) {
  if (!command.includes(".") && !simulatedSedEditFilePath)
    return;
  let result;
  const seen = new Set;
  if (simulatedSedEditFilePath) {
    const ext = getFileExtensionForAnalytics(simulatedSedEditFilePath);
    if (ext) {
      seen.add(ext);
      result = ext;
    }
  }
  for (const subcmd of command.split(COMPOUND_OPERATOR_REGEX)) {
    if (!subcmd)
      continue;
    const tokens = subcmd.split(WHITESPACE_REGEX);
    if (tokens.length < 2)
      continue;
    const firstToken = tokens[0];
    const slashIdx = firstToken.lastIndexOf("/");
    const baseCmd = slashIdx >= 0 ? firstToken.slice(slashIdx + 1) : firstToken;
    if (!FILE_COMMANDS.has(baseCmd))
      continue;
    for (let i = 1;i < tokens.length; i++) {
      const arg = tokens[i];
      if (arg.charCodeAt(0) === 45)
        continue;
      const ext = getFileExtensionForAnalytics(arg);
      if (ext && !seen.has(ext)) {
        seen.add(ext);
        result = result ? result + "," + ext : ext;
      }
    }
  }
  if (!result)
    return;
  return result;
}
function getAgentIdentification() {
  const agentContext = getAgentContext();
  if (agentContext) {
    const result = {
      agentId: agentContext.agentId,
      parentSessionId: agentContext.parentSessionId,
      agentType: agentContext.agentType
    };
    if (agentContext.agentType === "teammate") {
      result.teamName = agentContext.teamName;
    }
    return result;
  }
  const agentId = getAgentId();
  const parentSessionId = getParentSessionId2();
  const teamName = getTeamName();
  const isSwarmAgent = isTeammate();
  const agentType = isSwarmAgent ? "teammate" : agentId ? "standalone" : undefined;
  if (agentId || agentType || parentSessionId || teamName) {
    return {
      ...agentId ? { agentId } : {},
      ...agentType ? { agentType } : {},
      ...parentSessionId ? { parentSessionId } : {},
      ...teamName ? { teamName } : {}
    };
  }
  const stateParentSessionId = getParentSessionId();
  if (stateParentSessionId) {
    return { parentSessionId: stateParentSessionId };
  }
  return {};
}
function buildProcessMetrics() {
  try {
    const mem = process.memoryUsage();
    const cpu = process.cpuUsage();
    const now = Date.now();
    let cpuPercent;
    if (prevCpuUsage && prevWallTimeMs) {
      const wallDeltaMs = now - prevWallTimeMs;
      if (wallDeltaMs > 0) {
        const userDeltaUs = cpu.user - prevCpuUsage.user;
        const systemDeltaUs = cpu.system - prevCpuUsage.system;
        cpuPercent = (userDeltaUs + systemDeltaUs) / (wallDeltaMs * 1000) * 100;
      }
    }
    prevCpuUsage = cpu;
    prevWallTimeMs = now;
    return {
      uptime: process.uptime(),
      rss: mem.rss,
      heapTotal: mem.heapTotal,
      heapUsed: mem.heapUsed,
      external: mem.external,
      arrayBuffers: mem.arrayBuffers,
      constrainedMemory: process.constrainedMemory(),
      cpuUsage: cpu,
      cpuPercent
    };
  } catch {
    return;
  }
}
async function getEventMetadata(options = {}) {
  const model = options.model ? String(options.model) : getMainLoopModel();
  const betas = typeof options.betas === "string" ? options.betas : getModelBetas(model).join(",");
  const [envContext, repoRemoteHash] = await Promise.all([
    buildEnvContext(),
    getRepoRemoteHash()
  ]);
  const processMetrics = buildProcessMetrics();
  const metadata = {
    model,
    sessionId: getSessionId(),
    userType: process.env.USER_TYPE || "",
    ...betas.length > 0 ? { betas } : {},
    envContext,
    ...process.env.CLAUDE_CODE_ENTRYPOINT && {
      entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT
    },
    ...process.env.CLAUDE_AGENT_SDK_VERSION && {
      agentSdkVersion: process.env.CLAUDE_AGENT_SDK_VERSION
    },
    isInteractive: String(getIsInteractive()),
    clientType: getClientType(),
    ...processMetrics && { processMetrics },
    sweBenchRunId: process.env.SWE_BENCH_RUN_ID || "",
    sweBenchInstanceId: process.env.SWE_BENCH_INSTANCE_ID || "",
    sweBenchTaskId: process.env.SWE_BENCH_TASK_ID || "",
    ...getAgentIdentification(),
    ...getSubscriptionType() && {
      subscriptionType: getSubscriptionType()
    },
    ...getKairosActive() ? { kairosActive: true } : {},
    ...repoRemoteHash && { rh: repoRemoteHash }
  };
  return metadata;
}
function to1PEventFormat(metadata, userMetadata, additionalMetadata = {}) {
  const {
    envContext,
    processMetrics,
    rh,
    kairosActive,
    skillMode,
    observerMode,
    ...coreFields
  } = metadata;
  const env2 = {
    platform: envContext.platform,
    platform_raw: envContext.platformRaw,
    arch: envContext.arch,
    node_version: envContext.nodeVersion,
    terminal: envContext.terminal || "unknown",
    package_managers: envContext.packageManagers,
    runtimes: envContext.runtimes,
    is_running_with_bun: envContext.isRunningWithBun,
    is_ci: envContext.isCi,
    is_claubbit: envContext.isClaubbit,
    is_claude_code_remote: envContext.isClaudeCodeRemote,
    is_local_agent_mode: envContext.isLocalAgentMode,
    is_conductor: envContext.isConductor,
    is_github_action: envContext.isGithubAction,
    is_claude_code_action: envContext.isClaudeCodeAction,
    is_claude_ai_auth: envContext.isClaudeAiAuth,
    version: envContext.version,
    build_time: envContext.buildTime,
    deployment_environment: envContext.deploymentEnvironment
  };
  if (envContext.remoteEnvironmentType) {
    env2.remote_environment_type = envContext.remoteEnvironmentType;
  }
  if (false) {}
  if (envContext.claudeCodeContainerId) {
    env2.claude_code_container_id = envContext.claudeCodeContainerId;
  }
  if (envContext.claudeCodeRemoteSessionId) {
    env2.claude_code_remote_session_id = envContext.claudeCodeRemoteSessionId;
  }
  if (envContext.tags) {
    env2.tags = envContext.tags.split(",").map((t) => t.trim()).filter(Boolean);
  }
  if (envContext.githubEventName) {
    env2.github_event_name = envContext.githubEventName;
  }
  if (envContext.githubActionsRunnerEnvironment) {
    env2.github_actions_runner_environment = envContext.githubActionsRunnerEnvironment;
  }
  if (envContext.githubActionsRunnerOs) {
    env2.github_actions_runner_os = envContext.githubActionsRunnerOs;
  }
  if (envContext.githubActionRef) {
    env2.github_action_ref = envContext.githubActionRef;
  }
  if (envContext.wslVersion) {
    env2.wsl_version = envContext.wslVersion;
  }
  if (envContext.linuxDistroId) {
    env2.linux_distro_id = envContext.linuxDistroId;
  }
  if (envContext.linuxDistroVersion) {
    env2.linux_distro_version = envContext.linuxDistroVersion;
  }
  if (envContext.linuxKernel) {
    env2.linux_kernel = envContext.linuxKernel;
  }
  if (envContext.vcs) {
    env2.vcs = envContext.vcs;
  }
  if (envContext.versionBase) {
    env2.version_base = envContext.versionBase;
  }
  const core = {
    session_id: coreFields.sessionId,
    model: coreFields.model,
    user_type: coreFields.userType,
    is_interactive: coreFields.isInteractive === "true",
    client_type: coreFields.clientType
  };
  if (coreFields.betas) {
    core.betas = coreFields.betas;
  }
  if (coreFields.entrypoint) {
    core.entrypoint = coreFields.entrypoint;
  }
  if (coreFields.agentSdkVersion) {
    core.agent_sdk_version = coreFields.agentSdkVersion;
  }
  if (coreFields.sweBenchRunId) {
    core.swe_bench_run_id = coreFields.sweBenchRunId;
  }
  if (coreFields.sweBenchInstanceId) {
    core.swe_bench_instance_id = coreFields.sweBenchInstanceId;
  }
  if (coreFields.sweBenchTaskId) {
    core.swe_bench_task_id = coreFields.sweBenchTaskId;
  }
  if (coreFields.agentId) {
    core.agent_id = coreFields.agentId;
  }
  if (coreFields.parentSessionId) {
    core.parent_session_id = coreFields.parentSessionId;
  }
  if (coreFields.agentType) {
    core.agent_type = coreFields.agentType;
  }
  if (coreFields.teamName) {
    core.team_name = coreFields.teamName;
  }
  if (userMetadata.githubActionsMetadata) {
    const ghMeta = userMetadata.githubActionsMetadata;
    env2.github_actions_metadata = {
      actor_id: ghMeta.actorId,
      repository_id: ghMeta.repositoryId,
      repository_owner_id: ghMeta.repositoryOwnerId
    };
  }
  let auth;
  if (userMetadata.accountUuid || userMetadata.organizationUuid) {
    auth = {
      account_uuid: userMetadata.accountUuid,
      organization_uuid: userMetadata.organizationUuid
    };
  }
  return {
    env: env2,
    ...processMetrics && {
      process: Buffer.from(jsonStringify(processMetrics)).toString("base64")
    },
    ...auth && { auth },
    core,
    additional: {
      ...rh && { rh },
      ...kairosActive && { is_assistant_mode: true },
      ...skillMode && { skill_mode: skillMode },
      ...observerMode && { observer_mode: observerMode },
      ...additionalMetadata
    }
  };
}
var BUILTIN_MCP_SERVER_NAMES, TOOL_INPUT_STRING_TRUNCATE_AT = 512, TOOL_INPUT_STRING_TRUNCATE_TO = 128, TOOL_INPUT_MAX_JSON_CHARS, TOOL_INPUT_MAX_COLLECTION_ITEMS = 20, TOOL_INPUT_MAX_DEPTH = 2, MAX_FILE_EXTENSION_LENGTH = 10, FILE_COMMANDS, COMPOUND_OPERATOR_REGEX, WHITESPACE_REGEX, getVersionBase, buildEnvContext, prevCpuUsage = null, prevWallTimeMs = null;
var init_metadata = __esm(() => {
  init_memoize();
  init_env();
  init_envDynamic();
  init_betas2();
  init_model();
  init_state();
  init_envUtils();
  init_officialRegistry();
  init_auth2();
  init_git();
  init_platform();
  init_agentContext();
  init_slowOperations();
  init_teammate();
  BUILTIN_MCP_SERVER_NAMES = new Set([
    (init_common(), __toCommonJS(exports_common)).COMPUTER_USE_MCP_SERVER_NAME
  ]);
  TOOL_INPUT_MAX_JSON_CHARS = 4 * 1024;
  FILE_COMMANDS = new Set([
    "rm",
    "mv",
    "cp",
    "touch",
    "mkdir",
    "chmod",
    "chown",
    "cat",
    "head",
    "tail",
    "sort",
    "stat",
    "diff",
    "wc",
    "grep",
    "rg",
    "sed"
  ]);
  COMPOUND_OPERATOR_REGEX = /\s*(?:&&|\|\||[;|])\s*/;
  WHITESPACE_REGEX = /\s+/;
  getVersionBase = memoize_default(() => {
    const match = "1.0.0".match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
    return match ? match[0] : undefined;
  });
  buildEnvContext = memoize_default(async () => {
    const [packageManagers, runtimes, linuxDistroInfo, vcs] = await Promise.all([
      env.getPackageManagers(),
      env.getRuntimes(),
      getLinuxDistroInfo(),
      detectVcs()
    ]);
    return {
      platform: getHostPlatformForAnalytics(),
      platformRaw: process.env.CLAUDE_CODE_HOST_PLATFORM || process.platform,
      arch: env.arch,
      nodeVersion: env.nodeVersion,
      terminal: envDynamic.terminal,
      packageManagers: packageManagers.join(","),
      runtimes: runtimes.join(","),
      isRunningWithBun: env.isRunningWithBun(),
      isCi: isEnvTruthy(process.env.CI),
      isClaubbit: isEnvTruthy(process.env.CLAUBBIT),
      isClaudeCodeRemote: isEnvTruthy(process.env.CLAUDE_CODE_REMOTE),
      isLocalAgentMode: process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent",
      isConductor: env.isConductor(),
      ...process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
        remoteEnvironmentType: process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
      },
      ...{},
      ...process.env.CLAUDE_CODE_CONTAINER_ID && {
        claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID
      },
      ...process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
        claudeCodeRemoteSessionId: process.env.CLAUDE_CODE_REMOTE_SESSION_ID
      },
      ...process.env.CLAUDE_CODE_TAGS && {
        tags: process.env.CLAUDE_CODE_TAGS
      },
      isGithubAction: isEnvTruthy(process.env.GITHUB_ACTIONS),
      isClaudeCodeAction: isEnvTruthy(process.env.CLAUDE_CODE_ACTION),
      isClaudeAiAuth: isClaudeAISubscriber(),
      version: "1.0.0",
      versionBase: getVersionBase(),
      buildTime: "2026-05-14T02:27:57.911Z",
      deploymentEnvironment: env.detectDeploymentEnvironment(),
      ...isEnvTruthy(process.env.GITHUB_ACTIONS) && {
        githubEventName: process.env.GITHUB_EVENT_NAME,
        githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
        githubActionsRunnerOs: process.env.RUNNER_OS,
        githubActionRef: process.env.GITHUB_ACTION_PATH?.includes("claude-code-action/") ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1] : undefined
      },
      ...getWslVersion() && { wslVersion: getWslVersion() },
      ...linuxDistroInfo ?? {},
      ...vcs.length > 0 ? { vcs: vcs.join(",") } : {}
    };
  });
});

// src/services/analytics/firstPartyEventLoggingExporter.ts
import { randomUUID as randomUUID2 } from "crypto";
import { appendFile, mkdir as mkdir2, readdir, unlink, writeFile as writeFile2 } from "fs/promises";
import * as path from "path";
function getStorageDir() {
  return path.join(getClaudeConfigHomeDir(), "telemetry");
}

class FirstPartyEventLoggingExporter {
  endpoint;
  timeout;
  maxBatchSize;
  skipAuth;
  batchDelayMs;
  baseBackoffDelayMs;
  maxBackoffDelayMs;
  maxAttempts;
  isKilled;
  pendingExports = [];
  isShutdown = false;
  schedule;
  cancelBackoff = null;
  attempts = 0;
  isRetrying = false;
  lastExportErrorContext;
  constructor(options = {}) {
    const baseUrl = options.baseUrl || (process.env.ANTHROPIC_BASE_URL === "https://api-staging.anthropic.com" ? "https://api-staging.anthropic.com" : "https://api.anthropic.com");
    this.endpoint = `${baseUrl}${options.path || "/api/event_logging/batch"}`;
    this.timeout = options.timeout || 1e4;
    this.maxBatchSize = options.maxBatchSize || 200;
    this.skipAuth = options.skipAuth ?? false;
    this.batchDelayMs = options.batchDelayMs || 100;
    this.baseBackoffDelayMs = options.baseBackoffDelayMs || 500;
    this.maxBackoffDelayMs = options.maxBackoffDelayMs || 30000;
    this.maxAttempts = options.maxAttempts ?? 8;
    this.isKilled = options.isKilled ?? (() => false);
    this.schedule = options.schedule ?? ((fn, ms) => {
      const t = setTimeout(fn, ms);
      return () => clearTimeout(t);
    });
    this.retryPreviousBatches();
  }
  async getQueuedEventCount() {
    return (await this.loadEventsFromCurrentBatch()).length;
  }
  getCurrentBatchFilePath() {
    return path.join(getStorageDir(), `${FILE_PREFIX}${getSessionId()}.${BATCH_UUID}.json`);
  }
  async loadEventsFromFile(filePath) {
    try {
      return await readJSONLFile(filePath);
    } catch {
      return [];
    }
  }
  async loadEventsFromCurrentBatch() {
    return this.loadEventsFromFile(this.getCurrentBatchFilePath());
  }
  async saveEventsToFile(filePath, events) {
    try {
      if (events.length === 0) {
        try {
          await unlink(filePath);
        } catch {}
      } else {
        await mkdir2(getStorageDir(), { recursive: true });
        const content = events.map((e) => jsonStringify(e)).join(`
`) + `
`;
        await writeFile2(filePath, content, "utf8");
      }
    } catch (error) {
      logError(error);
    }
  }
  async appendEventsToFile(filePath, events) {
    if (events.length === 0)
      return;
    try {
      await mkdir2(getStorageDir(), { recursive: true });
      const content = events.map((e) => jsonStringify(e)).join(`
`) + `
`;
      await appendFile(filePath, content, "utf8");
    } catch (error) {
      logError(error);
    }
  }
  async deleteFile(filePath) {
    try {
      await unlink(filePath);
    } catch {}
  }
  async retryPreviousBatches() {
    try {
      const prefix = `${FILE_PREFIX}${getSessionId()}.`;
      let files;
      try {
        files = (await readdir(getStorageDir())).filter((f) => f.startsWith(prefix) && f.endsWith(".json")).filter((f) => !f.includes(BATCH_UUID));
      } catch (e) {
        if (isFsInaccessible(e))
          return;
        throw e;
      }
      for (const file of files) {
        const filePath = path.join(getStorageDir(), file);
        this.retryFileInBackground(filePath);
      }
    } catch (error) {
      logError(error);
    }
  }
  async retryFileInBackground(filePath) {
    if (this.attempts >= this.maxAttempts) {
      await this.deleteFile(filePath);
      return;
    }
    const events = await this.loadEventsFromFile(filePath);
    if (events.length === 0) {
      await this.deleteFile(filePath);
      return;
    }
    if (process.env.USER_TYPE === "ant") {
      logForDebugging(`1P event logging: retrying ${events.length} events from previous batch`);
    }
    const failedEvents = await this.sendEventsInBatches(events);
    if (failedEvents.length === 0) {
      await this.deleteFile(filePath);
      if (process.env.USER_TYPE === "ant") {
        logForDebugging("1P event logging: previous batch retry succeeded");
      }
    } else {
      await this.saveEventsToFile(filePath, failedEvents);
      if (process.env.USER_TYPE === "ant") {
        logForDebugging(`1P event logging: previous batch retry failed, ${failedEvents.length} events remain`);
      }
    }
  }
  async export(logs, resultCallback) {
    if (this.isShutdown) {
      if (process.env.USER_TYPE === "ant") {
        logForDebugging("1P event logging export failed: Exporter has been shutdown");
      }
      resultCallback({
        code: import_core8.ExportResultCode.FAILED,
        error: new Error("Exporter has been shutdown")
      });
      return;
    }
    const exportPromise = this.doExport(logs, resultCallback);
    this.pendingExports.push(exportPromise);
    exportPromise.finally(() => {
      const index2 = this.pendingExports.indexOf(exportPromise);
      if (index2 > -1) {
        this.pendingExports.splice(index2, 1);
      }
    });
  }
  async doExport(logs, resultCallback) {
    try {
      const eventLogs = logs.filter((log) => log.instrumentationScope?.name === "com.anthropic.claude_code.events");
      if (eventLogs.length === 0) {
        resultCallback({ code: import_core8.ExportResultCode.SUCCESS });
        return;
      }
      const events = this.transformLogsToEvents(eventLogs).events;
      if (events.length === 0) {
        resultCallback({ code: import_core8.ExportResultCode.SUCCESS });
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        resultCallback({
          code: import_core8.ExportResultCode.FAILED,
          error: new Error(`Dropped ${events.length} events: max attempts (${this.maxAttempts}) reached`)
        });
        return;
      }
      const failedEvents = await this.sendEventsInBatches(events);
      this.attempts++;
      if (failedEvents.length > 0) {
        await this.queueFailedEvents(failedEvents);
        this.scheduleBackoffRetry();
        const context3 = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
        resultCallback({
          code: import_core8.ExportResultCode.FAILED,
          error: new Error(`Failed to export ${failedEvents.length} events${context3}`)
        });
        return;
      }
      this.resetBackoff();
      if (await this.getQueuedEventCount() > 0 && !this.isRetrying) {
        this.retryFailedEvents();
      }
      resultCallback({ code: import_core8.ExportResultCode.SUCCESS });
    } catch (error) {
      if (process.env.USER_TYPE === "ant") {
        logForDebugging(`1P event logging export failed: ${errorMessage(error)}`);
      }
      logError(error);
      resultCallback({
        code: import_core8.ExportResultCode.FAILED,
        error: toError(error)
      });
    }
  }
  async sendEventsInBatches(events) {
    const batches = [];
    for (let i = 0;i < events.length; i += this.maxBatchSize) {
      batches.push(events.slice(i, i + this.maxBatchSize));
    }
    if (process.env.USER_TYPE === "ant") {
      logForDebugging(`1P event logging: exporting ${events.length} events in ${batches.length} batch(es)`);
    }
    const failedBatchEvents = [];
    let lastErrorContext;
    for (let i = 0;i < batches.length; i++) {
      const batch = batches[i];
      try {
        await this.sendBatchWithRetry({ events: batch });
      } catch (error) {
        lastErrorContext = getAxiosErrorContext(error);
        for (let j = i;j < batches.length; j++) {
          failedBatchEvents.push(...batches[j]);
        }
        if (process.env.USER_TYPE === "ant") {
          const skipped = batches.length - 1 - i;
          logForDebugging(`1P event logging: batch ${i + 1}/${batches.length} failed (${lastErrorContext}); short-circuiting ${skipped} remaining batch(es)`);
        }
        break;
      }
      if (i < batches.length - 1 && this.batchDelayMs > 0) {
        await sleep(this.batchDelayMs);
      }
    }
    if (failedBatchEvents.length > 0 && lastErrorContext) {
      this.lastExportErrorContext = lastErrorContext;
    }
    return failedBatchEvents;
  }
  async queueFailedEvents(events) {
    const filePath = this.getCurrentBatchFilePath();
    await this.appendEventsToFile(filePath, events);
    const context3 = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
    const message = `1P event logging: ${events.length} events failed to export${context3}`;
    logError(new Error(message));
  }
  scheduleBackoffRetry() {
    if (this.cancelBackoff || this.isRetrying || this.isShutdown) {
      return;
    }
    const delay = Math.min(this.baseBackoffDelayMs * this.attempts * this.attempts, this.maxBackoffDelayMs);
    if (process.env.USER_TYPE === "ant") {
      logForDebugging(`1P event logging: scheduling backoff retry in ${delay}ms (attempt ${this.attempts})`);
    }
    this.cancelBackoff = this.schedule(async () => {
      this.cancelBackoff = null;
      await this.retryFailedEvents();
    }, delay);
  }
  async retryFailedEvents() {
    const filePath = this.getCurrentBatchFilePath();
    while (!this.isShutdown) {
      const events = await this.loadEventsFromFile(filePath);
      if (events.length === 0)
        break;
      if (this.attempts >= this.maxAttempts) {
        if (process.env.USER_TYPE === "ant") {
          logForDebugging(`1P event logging: max attempts (${this.maxAttempts}) reached, dropping ${events.length} events`);
        }
        await this.deleteFile(filePath);
        this.resetBackoff();
        return;
      }
      this.isRetrying = true;
      await this.deleteFile(filePath);
      if (process.env.USER_TYPE === "ant") {
        logForDebugging(`1P event logging: retrying ${events.length} failed events (attempt ${this.attempts + 1})`);
      }
      const failedEvents = await this.sendEventsInBatches(events);
      this.attempts++;
      this.isRetrying = false;
      if (failedEvents.length > 0) {
        await this.saveEventsToFile(filePath, failedEvents);
        this.scheduleBackoffRetry();
        return;
      }
      this.resetBackoff();
      if (process.env.USER_TYPE === "ant") {
        logForDebugging("1P event logging: backoff retry succeeded");
      }
    }
  }
  resetBackoff() {
    this.attempts = 0;
    if (this.cancelBackoff) {
      this.cancelBackoff();
      this.cancelBackoff = null;
    }
  }
  async sendBatchWithRetry(payload) {
    if (this.isKilled()) {
      throw new Error("firstParty sink killswitch active");
    }
    const baseHeaders = {
      "Content-Type": "application/json",
      "User-Agent": getClaudeCodeUserAgent(),
      "x-service-name": "claude-code"
    };
    const hasTrust = checkHasTrustDialogAccepted() || getIsNonInteractiveSession();
    if (process.env.USER_TYPE === "ant" && !hasTrust) {
      logForDebugging("1P event logging: Trust not accepted");
    }
    let shouldSkipAuth = this.skipAuth || !hasTrust;
    if (!shouldSkipAuth && isClaudeAISubscriber()) {
      const tokens = getClaudeAIOAuthTokens();
      if (!hasProfileScope()) {
        shouldSkipAuth = true;
      } else if (tokens && isOAuthTokenExpired(tokens.expiresAt)) {
        shouldSkipAuth = true;
        if (process.env.USER_TYPE === "ant") {
          logForDebugging("1P event logging: OAuth token expired, skipping auth to avoid 401");
        }
      }
    }
    const authResult = shouldSkipAuth ? { headers: {}, error: "trust not established or Oauth token expired" } : getAuthHeaders();
    const useAuth = !authResult.error;
    if (!useAuth && process.env.USER_TYPE === "ant") {
      logForDebugging(`1P event logging: auth not available, sending without auth`);
    }
    const headers = useAuth ? { ...baseHeaders, ...authResult.headers } : baseHeaders;
    try {
      const response = await axios_default.post(this.endpoint, payload, {
        timeout: this.timeout,
        headers
      });
      this.logSuccess(payload.events.length, useAuth, response.data);
      return;
    } catch (error) {
      if (useAuth && axios_default.isAxiosError(error) && error.response?.status === 401) {
        if (process.env.USER_TYPE === "ant") {
          logForDebugging("1P event logging: 401 auth error, retrying without auth");
        }
        const response = await axios_default.post(this.endpoint, payload, {
          timeout: this.timeout,
          headers: baseHeaders
        });
        this.logSuccess(payload.events.length, false, response.data);
        return;
      }
      throw error;
    }
  }
  logSuccess(eventCount, withAuth, responseData) {
    if (process.env.USER_TYPE === "ant") {
      logForDebugging(`1P event logging: ${eventCount} events exported successfully${withAuth ? " (with auth)" : " (without auth)"}`);
      logForDebugging(`API Response: ${jsonStringify(responseData, null, 2)}`);
    }
  }
  hrTimeToDate(hrTime) {
    const [seconds, nanoseconds] = hrTime;
    return new Date(seconds * 1000 + nanoseconds / 1e6);
  }
  transformLogsToEvents(logs) {
    const events = [];
    for (const log of logs) {
      const attributes = log.attributes || {};
      if (attributes.event_type === "GrowthbookExperimentEvent") {
        const timestamp = this.hrTimeToDate(log.hrTime);
        const account_uuid = attributes.account_uuid;
        const organization_uuid = attributes.organization_uuid;
        events.push({
          event_type: "GrowthbookExperimentEvent",
          event_data: GrowthbookExperimentEvent.toJSON({
            event_id: attributes.event_id,
            timestamp,
            experiment_id: attributes.experiment_id,
            variation_id: attributes.variation_id,
            environment: attributes.environment,
            user_attributes: attributes.user_attributes,
            experiment_metadata: attributes.experiment_metadata,
            device_id: attributes.device_id,
            session_id: attributes.session_id,
            auth: account_uuid || organization_uuid ? { account_uuid, organization_uuid } : undefined
          })
        });
        continue;
      }
      const eventName = attributes.event_name || log.body || "unknown";
      const coreMetadata = attributes.core_metadata;
      const userMetadata = attributes.user_metadata;
      const eventMetadata = attributes.event_metadata || {};
      if (!coreMetadata) {
        if (process.env.USER_TYPE === "ant") {
          logForDebugging(`1P event logging: core_metadata missing for event ${eventName}`);
        }
        events.push({
          event_type: "ClaudeCodeInternalEvent",
          event_data: ClaudeCodeInternalEvent.toJSON({
            event_id: attributes.event_id,
            event_name: eventName,
            client_timestamp: this.hrTimeToDate(log.hrTime),
            session_id: getSessionId(),
            additional_metadata: Buffer.from(jsonStringify({
              transform_error: "core_metadata attribute is missing"
            })).toString("base64")
          })
        });
        continue;
      }
      const formatted = to1PEventFormat(coreMetadata, userMetadata, eventMetadata);
      const {
        _PROTO_skill_name,
        _PROTO_plugin_name,
        _PROTO_marketplace_name,
        ...rest
      } = formatted.additional;
      const additionalMetadata = stripProtoFields(rest);
      events.push({
        event_type: "ClaudeCodeInternalEvent",
        event_data: ClaudeCodeInternalEvent.toJSON({
          event_id: attributes.event_id,
          event_name: eventName,
          client_timestamp: this.hrTimeToDate(log.hrTime),
          device_id: attributes.user_id,
          email: userMetadata?.email,
          auth: formatted.auth,
          ...formatted.core,
          env: formatted.env,
          process: formatted.process,
          skill_name: typeof _PROTO_skill_name === "string" ? _PROTO_skill_name : undefined,
          plugin_name: typeof _PROTO_plugin_name === "string" ? _PROTO_plugin_name : undefined,
          marketplace_name: typeof _PROTO_marketplace_name === "string" ? _PROTO_marketplace_name : undefined,
          additional_metadata: Object.keys(additionalMetadata).length > 0 ? Buffer.from(jsonStringify(additionalMetadata)).toString("base64") : undefined
        })
      });
    }
    return { events };
  }
  async shutdown() {
    this.isShutdown = true;
    this.resetBackoff();
    await this.forceFlush();
    if (process.env.USER_TYPE === "ant") {
      logForDebugging("1P event logging exporter shutdown complete");
    }
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
    if (process.env.USER_TYPE === "ant") {
      logForDebugging("1P event logging exporter flush complete");
    }
  }
}
function getAxiosErrorContext(error) {
  if (!axios_default.isAxiosError(error)) {
    return errorMessage(error);
  }
  const parts = [];
  const requestId = error.response?.headers?.["request-id"];
  if (requestId) {
    parts.push(`request-id=${requestId}`);
  }
  if (error.response?.status) {
    parts.push(`status=${error.response.status}`);
  }
  if (error.code) {
    parts.push(`code=${error.code}`);
  }
  if (error.message) {
    parts.push(error.message);
  }
  return parts.join(", ");
}
var import_core8, BATCH_UUID, FILE_PREFIX = "1p_failed_events.";
var init_firstPartyEventLoggingExporter = __esm(() => {
  init_axios();
  init_state();
  init_claude_code_internal_event();
  init_growthbook_experiment_event();
  init_auth2();
  init_config();
  init_debug();
  init_envUtils();
  init_errors();
  init_http();
  init_json();
  init_log();
  init_sleep();
  init_slowOperations();
  init_userAgent();
  init_client2();
  init_analytics();
  init_metadata();
  import_core8 = __toESM(require_src3(), 1);
  BATCH_UUID = randomUUID2();
});

// src/services/analytics/sinkKillswitch.ts
function isSinkKilled(sink) {
  const config = getDynamicConfig_CACHED_MAY_BE_STALE(SINK_KILLSWITCH_CONFIG_NAME, {});
  return config?.[sink] === true;
}
var SINK_KILLSWITCH_CONFIG_NAME = "tengu_frond_boric";
var init_sinkKillswitch = __esm(() => {
  init_growthbook();
});

// src/services/analytics/firstPartyEventLogger.ts
import { randomUUID as randomUUID3 } from "crypto";
function getEventSamplingConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(EVENT_SAMPLING_CONFIG_NAME, {});
}
function shouldSampleEvent(eventName) {
  const config = getEventSamplingConfig();
  const eventConfig = config[eventName];
  if (!eventConfig) {
    return null;
  }
  const sampleRate = eventConfig.sample_rate;
  if (typeof sampleRate !== "number" || sampleRate < 0 || sampleRate > 1) {
    return null;
  }
  if (sampleRate >= 1) {
    return null;
  }
  if (sampleRate <= 0) {
    return 0;
  }
  return Math.random() < sampleRate ? sampleRate : 0;
}
function getBatchConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(BATCH_CONFIG_NAME, {});
}
async function shutdown1PEventLogging() {
  if (!firstPartyEventLoggerProvider) {
    return;
  }
  try {
    await firstPartyEventLoggerProvider.shutdown();
    if (process.env.USER_TYPE === "ant") {
      logForDebugging("1P event logging: final shutdown complete");
    }
  } catch {}
}
function is1PEventLoggingEnabled() {
  return !isAnalyticsDisabled();
}
async function logEventTo1PAsync(firstPartyEventLogger2, eventName, metadata = {}) {
  try {
    const coreMetadata = await getEventMetadata({
      model: metadata.model,
      betas: metadata.betas
    });
    const attributes = {
      event_name: eventName,
      event_id: randomUUID3(),
      core_metadata: coreMetadata,
      user_metadata: getCoreUserData(true),
      event_metadata: metadata
    };
    const userId = getOrCreateUserID();
    if (userId) {
      attributes.user_id = userId;
    }
    if (process.env.USER_TYPE === "ant") {
      logForDebugging(`[ANT-ONLY] 1P event: ${eventName} ${jsonStringify(metadata, null, 0)}`);
    }
    firstPartyEventLogger2.emit({
      body: eventName,
      attributes
    });
  } catch (e) {
    if (true) {
      throw e;
    }
    if (process.env.USER_TYPE === "ant") {
      logError(e);
    }
  }
}
function logEventTo1P(eventName, metadata = {}) {
  if (!is1PEventLoggingEnabled()) {
    return;
  }
  if (!firstPartyEventLogger || isSinkKilled("firstParty")) {
    return;
  }
  logEventTo1PAsync(firstPartyEventLogger, eventName, metadata);
}
function getEnvironmentForGrowthBook() {
  return "production";
}
function logGrowthBookExperimentTo1P(data) {
  if (!is1PEventLoggingEnabled()) {
    return;
  }
  if (!firstPartyEventLogger || isSinkKilled("firstParty")) {
    return;
  }
  const userId = getOrCreateUserID();
  const { accountUuid, organizationUuid } = getCoreUserData(true);
  const attributes = {
    event_type: "GrowthbookExperimentEvent",
    event_id: randomUUID3(),
    experiment_id: data.experimentId,
    variation_id: data.variationId,
    ...userId && { device_id: userId },
    ...accountUuid && { account_uuid: accountUuid },
    ...organizationUuid && { organization_uuid: organizationUuid },
    ...data.userAttributes && {
      session_id: data.userAttributes.sessionId,
      user_attributes: jsonStringify(data.userAttributes)
    },
    ...data.experimentMetadata && {
      experiment_metadata: jsonStringify(data.experimentMetadata)
    },
    environment: getEnvironmentForGrowthBook()
  };
  if (process.env.USER_TYPE === "ant") {
    logForDebugging(`[ANT-ONLY] 1P GrowthBook experiment: ${data.experimentId} variation=${data.variationId}`);
  }
  firstPartyEventLogger.emit({
    body: "growthbook_experiment",
    attributes
  });
}
function initialize1PEventLogging() {
  profileCheckpoint("1p_event_logging_start");
  const enabled = is1PEventLoggingEnabled();
  if (!enabled) {
    if (process.env.USER_TYPE === "ant") {
      logForDebugging("1P event logging not enabled");
    }
    return;
  }
  const batchConfig = getBatchConfig();
  lastBatchConfig = batchConfig;
  profileCheckpoint("1p_event_after_growthbook_config");
  const scheduledDelayMillis = batchConfig.scheduledDelayMillis || parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || DEFAULT_LOGS_EXPORT_INTERVAL_MS.toString(), 10);
  const maxExportBatchSize = batchConfig.maxExportBatchSize || DEFAULT_MAX_EXPORT_BATCH_SIZE;
  const maxQueueSize = batchConfig.maxQueueSize || DEFAULT_MAX_QUEUE_SIZE;
  const platform = getPlatform();
  const attributes = {
    [import_semantic_conventions2.ATTR_SERVICE_NAME]: "claude-code",
    [import_semantic_conventions2.ATTR_SERVICE_VERSION]: "1.0.0"
  };
  if (platform === "wsl") {
    const wslVersion = getWslVersion();
    if (wslVersion) {
      attributes["wsl.version"] = wslVersion;
    }
  }
  const resource = import_resources2.resourceFromAttributes(attributes);
  const eventLoggingExporter = new FirstPartyEventLoggingExporter({
    maxBatchSize: maxExportBatchSize,
    skipAuth: batchConfig.skipAuth,
    maxAttempts: batchConfig.maxAttempts,
    path: batchConfig.path,
    baseUrl: batchConfig.baseUrl,
    isKilled: () => isSinkKilled("firstParty")
  });
  firstPartyEventLoggerProvider = new LoggerProvider({
    resource,
    processors: [
      new BatchLogRecordProcessor(eventLoggingExporter, {
        scheduledDelayMillis,
        maxExportBatchSize,
        maxQueueSize
      })
    ]
  });
  firstPartyEventLogger = firstPartyEventLoggerProvider.getLogger("com.anthropic.claude_code.events", "1.0.0");
}
async function reinitialize1PEventLoggingIfConfigChanged() {
  if (!is1PEventLoggingEnabled() || !firstPartyEventLoggerProvider) {
    return;
  }
  const newConfig = getBatchConfig();
  if (isEqual_default(newConfig, lastBatchConfig)) {
    return;
  }
  if (process.env.USER_TYPE === "ant") {
    logForDebugging(`1P event logging: ${BATCH_CONFIG_NAME} changed, reinitializing`);
  }
  const oldProvider = firstPartyEventLoggerProvider;
  const oldLogger = firstPartyEventLogger;
  firstPartyEventLogger = null;
  try {
    await oldProvider.forceFlush();
  } catch {}
  firstPartyEventLoggerProvider = null;
  try {
    initialize1PEventLogging();
  } catch (e) {
    firstPartyEventLoggerProvider = oldProvider;
    firstPartyEventLogger = oldLogger;
    logError(e);
    return;
  }
  oldProvider.shutdown().catch(() => {});
}
var import_resources2, import_semantic_conventions2, EVENT_SAMPLING_CONFIG_NAME = "tengu_event_sampling_config", BATCH_CONFIG_NAME = "tengu_1p_event_batch_config", firstPartyEventLogger = null, firstPartyEventLoggerProvider = null, lastBatchConfig = null, DEFAULT_LOGS_EXPORT_INTERVAL_MS = 1e4, DEFAULT_MAX_EXPORT_BATCH_SIZE = 200, DEFAULT_MAX_QUEUE_SIZE = 8192;
var init_firstPartyEventLogger = __esm(() => {
  init_esm2();
  init_lodash();
  init_config();
  init_debug();
  init_log();
  init_platform();
  init_slowOperations();
  init_startupProfiler();
  init_user();
  init_config2();
  init_firstPartyEventLoggingExporter();
  init_growthbook();
  init_metadata();
  init_sinkKillswitch();
  import_resources2 = __toESM(require_src4(), 1);
  import_semantic_conventions2 = __toESM(require_src2(), 1);
});

// src/services/analytics/growthbook.ts
function callSafe(listener) {
  try {
    Promise.resolve(listener()).catch((e) => {
      logError(e);
    });
  } catch (e) {
    logError(e);
  }
}
function onGrowthBookRefresh(listener) {
  let subscribed = true;
  const unsubscribe2 = refreshed.subscribe(() => callSafe(listener));
  if (remoteEvalFeatureValues.size > 0) {
    queueMicrotask(() => {
      if (subscribed && remoteEvalFeatureValues.size > 0) {
        callSafe(listener);
      }
    });
  }
  return () => {
    subscribed = false;
    unsubscribe2();
  };
}
function getEnvOverrides() {
  if (!envOverridesParsed) {
    envOverridesParsed = true;
    if (process.env.USER_TYPE === "ant") {
      const raw = process.env.CLAUDE_INTERNAL_FC_OVERRIDES;
      if (raw) {
        try {
          envOverrides = JSON.parse(raw);
          logForDebugging(`GrowthBook: Using env var overrides for ${Object.keys(envOverrides).length} features: ${Object.keys(envOverrides).join(", ")}`);
        } catch {
          logError(new Error(`GrowthBook: Failed to parse CLAUDE_INTERNAL_FC_OVERRIDES: ${raw}`));
        }
      }
    }
  }
  return envOverrides;
}
function hasGrowthBookEnvOverride(feature) {
  const overrides = getEnvOverrides();
  return overrides !== null && feature in overrides;
}
function getConfigOverrides() {
  if (process.env.USER_TYPE !== "ant")
    return;
  try {
    return getGlobalConfig().growthBookOverrides;
  } catch {
    return;
  }
}
function getAllGrowthBookFeatures() {
  if (remoteEvalFeatureValues.size > 0) {
    return Object.fromEntries(remoteEvalFeatureValues);
  }
  return getGlobalConfig().cachedGrowthBookFeatures ?? {};
}
function getGrowthBookConfigOverrides() {
  return getConfigOverrides() ?? {};
}
function setGrowthBookConfigOverride(feature, value) {
  if (process.env.USER_TYPE !== "ant")
    return;
  try {
    saveGlobalConfig((c) => {
      const current = c.growthBookOverrides ?? {};
      if (value === undefined) {
        if (!(feature in current))
          return c;
        const { [feature]: _, ...rest } = current;
        if (Object.keys(rest).length === 0) {
          const { growthBookOverrides: __, ...configWithout } = c;
          return configWithout;
        }
        return { ...c, growthBookOverrides: rest };
      }
      if (isEqual_default(current[feature], value))
        return c;
      return { ...c, growthBookOverrides: { ...current, [feature]: value } };
    });
    refreshed.emit();
  } catch (e) {
    logError(e);
  }
}
function clearGrowthBookConfigOverrides() {
  if (process.env.USER_TYPE !== "ant")
    return;
  try {
    saveGlobalConfig((c) => {
      if (!c.growthBookOverrides || Object.keys(c.growthBookOverrides).length === 0) {
        return c;
      }
      const { growthBookOverrides: _, ...rest } = c;
      return rest;
    });
    refreshed.emit();
  } catch (e) {
    logError(e);
  }
}
function logExposureForFeature(feature) {
  if (loggedExposures.has(feature)) {
    return;
  }
  const expData = experimentDataByFeature.get(feature);
  if (expData) {
    loggedExposures.add(feature);
    logGrowthBookExperimentTo1P({
      experimentId: expData.experimentId,
      variationId: expData.variationId,
      userAttributes: getUserAttributes(),
      experimentMetadata: {
        feature_id: feature
      }
    });
  }
}
async function processRemoteEvalPayload(gbClient) {
  const payload = gbClient.getPayload();
  if (!payload?.features || Object.keys(payload.features).length === 0) {
    return false;
  }
  experimentDataByFeature.clear();
  const transformedFeatures = {};
  for (const [key, feature] of Object.entries(payload.features)) {
    const f = feature;
    if ("value" in f && !("defaultValue" in f)) {
      transformedFeatures[key] = {
        ...f,
        defaultValue: f.value
      };
    } else {
      transformedFeatures[key] = f;
    }
    if (f.source === "experiment" && f.experimentResult) {
      const expResult = f.experimentResult;
      const exp = f.experiment;
      if (exp?.key && expResult.variationId !== undefined) {
        experimentDataByFeature.set(key, {
          experimentId: exp.key,
          variationId: expResult.variationId
        });
      }
    }
  }
  await gbClient.setPayload({
    ...payload,
    features: transformedFeatures
  });
  remoteEvalFeatureValues.clear();
  for (const [key, feature] of Object.entries(transformedFeatures)) {
    const v = "value" in feature ? feature.value : feature.defaultValue;
    if (v !== undefined) {
      remoteEvalFeatureValues.set(key, v);
    }
  }
  return true;
}
function syncRemoteEvalToDisk() {
  const fresh = Object.fromEntries(remoteEvalFeatureValues);
  const config = getGlobalConfig();
  if (isEqual_default(config.cachedGrowthBookFeatures, fresh)) {
    return;
  }
  saveGlobalConfig((current) => ({
    ...current,
    cachedGrowthBookFeatures: fresh
  }));
}
function getLocalGateDefault(feature) {
  if (process.env.CLAUDE_CODE_DISABLE_LOCAL_GATES) {
    return;
  }
  return LOCAL_GATE_DEFAULTS[feature];
}
function isGrowthBookEnabled() {
  if (process.env.CLAUDE_GB_ADAPTER_URL && process.env.CLAUDE_GB_ADAPTER_KEY) {
    return true;
  }
  return is1PEventLoggingEnabled();
}
function getApiBaseUrlHost() {
  const baseUrl = process.env.ANTHROPIC_BASE_URL;
  if (!baseUrl)
    return;
  try {
    const host = new URL(baseUrl).host;
    if (host === "api.anthropic.com")
      return;
    return host;
  } catch {
    return;
  }
}
function getUserAttributes() {
  const user = getUserForGrowthBook();
  let email = user.email;
  if (!email && process.env.USER_TYPE === "ant") {
    email = getGlobalConfig().oauthAccount?.emailAddress;
  }
  const apiBaseUrlHost = getApiBaseUrlHost();
  const attributes = {
    id: user.deviceId,
    sessionId: user.sessionId,
    deviceID: user.deviceId,
    platform: user.platform,
    ...apiBaseUrlHost && { apiBaseUrlHost },
    ...user.organizationUuid && { organizationUUID: user.organizationUuid },
    ...user.accountUuid && { accountUUID: user.accountUuid },
    ...user.userType && { userType: user.userType },
    ...user.subscriptionType && { subscriptionType: user.subscriptionType },
    ...user.rateLimitTier && { rateLimitTier: user.rateLimitTier },
    ...user.firstTokenTime && { firstTokenTime: user.firstTokenTime },
    ...email && { email },
    ...user.appVersion && { appVersion: user.appVersion },
    ...user.githubActionsMetadata && {
      githubActionsMetadata: user.githubActionsMetadata
    }
  };
  return attributes;
}
async function getFeatureValueInternal(feature, defaultValue, logExposure) {
  const overrides = getEnvOverrides();
  if (overrides && feature in overrides) {
    return overrides[feature];
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && feature in configOverrides) {
    return configOverrides[feature];
  }
  if (!isGrowthBookEnabled()) {
    const localDefault = getLocalGateDefault(feature);
    return localDefault !== undefined ? localDefault : defaultValue;
  }
  const growthBookClient = await initializeGrowthBook();
  if (!growthBookClient) {
    const localDefault = getLocalGateDefault(feature);
    return localDefault !== undefined ? localDefault : defaultValue;
  }
  let result;
  if (remoteEvalFeatureValues.has(feature)) {
    result = remoteEvalFeatureValues.get(feature);
  } else {
    result = growthBookClient.getFeatureValue(feature, defaultValue);
  }
  if (logExposure) {
    logExposureForFeature(feature);
  }
  if (process.env.USER_TYPE === "ant") {
    logForDebugging(`GrowthBook: getFeatureValue("${feature}") = ${jsonStringify(result)}`);
  }
  return result;
}
async function getFeatureValue_DEPRECATED(feature, defaultValue) {
  return getFeatureValueInternal(feature, defaultValue, true);
}
function getFeatureValue_CACHED_MAY_BE_STALE(feature, defaultValue) {
  const overrides = getEnvOverrides();
  if (overrides && feature in overrides) {
    return overrides[feature];
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && feature in configOverrides) {
    return configOverrides[feature];
  }
  if (!isGrowthBookEnabled()) {
    const localDefault2 = getLocalGateDefault(feature);
    return localDefault2 !== undefined ? localDefault2 : defaultValue;
  }
  const localDefault = getLocalGateDefault(feature);
  if (localDefault !== undefined) {
    return localDefault;
  }
  if (experimentDataByFeature.has(feature)) {
    logExposureForFeature(feature);
  } else {
    pendingExposures.add(feature);
  }
  if (remoteEvalFeatureValues.has(feature)) {
    return remoteEvalFeatureValues.get(feature);
  }
  try {
    const cached = getGlobalConfig().cachedGrowthBookFeatures?.[feature];
    if (cached !== undefined) {
      return cached;
    }
  } catch {}
  return defaultValue;
}
function getFeatureValue_CACHED_WITH_REFRESH(feature, defaultValue, _refreshIntervalMs) {
  return getFeatureValue_CACHED_MAY_BE_STALE(feature, defaultValue);
}
function checkStatsigFeatureGate_CACHED_MAY_BE_STALE(gate) {
  const overrides = getEnvOverrides();
  if (overrides && gate in overrides) {
    return Boolean(overrides[gate]);
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && gate in configOverrides) {
    return Boolean(configOverrides[gate]);
  }
  if (!isGrowthBookEnabled()) {
    const localDefault2 = getLocalGateDefault(gate);
    return localDefault2 !== undefined ? Boolean(localDefault2) : false;
  }
  if (experimentDataByFeature.has(gate)) {
    logExposureForFeature(gate);
  } else {
    pendingExposures.add(gate);
  }
  try {
    const config = getGlobalConfig();
    const gbCached = config.cachedGrowthBookFeatures?.[gate];
    if (gbCached !== undefined) {
      return Boolean(gbCached);
    }
    const statsigCached = config.cachedStatsigGates?.[gate];
    if (statsigCached !== undefined) {
      return statsigCached;
    }
  } catch {}
  const localDefault = getLocalGateDefault(gate);
  return localDefault !== undefined ? Boolean(localDefault) : false;
}
async function checkSecurityRestrictionGate(gate) {
  const overrides = getEnvOverrides();
  if (overrides && gate in overrides) {
    return Boolean(overrides[gate]);
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && gate in configOverrides) {
    return Boolean(configOverrides[gate]);
  }
  if (!isGrowthBookEnabled()) {
    return false;
  }
  if (reinitializingPromise) {
    await reinitializingPromise;
  }
  const config = getGlobalConfig();
  const statsigCached = config.cachedStatsigGates?.[gate];
  if (statsigCached !== undefined) {
    return Boolean(statsigCached);
  }
  const gbCached = config.cachedGrowthBookFeatures?.[gate];
  if (gbCached !== undefined) {
    return Boolean(gbCached);
  }
  return false;
}
async function checkGate_CACHED_OR_BLOCKING(gate) {
  const overrides = getEnvOverrides();
  if (overrides && gate in overrides) {
    return Boolean(overrides[gate]);
  }
  const configOverrides = getConfigOverrides();
  if (configOverrides && gate in configOverrides) {
    return Boolean(configOverrides[gate]);
  }
  if (!isGrowthBookEnabled()) {
    const localDefault = getLocalGateDefault(gate);
    return localDefault !== undefined ? Boolean(localDefault) : false;
  }
  const cached = getGlobalConfig().cachedGrowthBookFeatures?.[gate];
  if (cached === true) {
    if (experimentDataByFeature.has(gate)) {
      logExposureForFeature(gate);
    } else {
      pendingExposures.add(gate);
    }
    return true;
  }
  return getFeatureValueInternal(gate, false, true);
}
function refreshGrowthBookAfterAuthChange() {
  if (!isGrowthBookEnabled()) {
    return;
  }
  try {
    resetGrowthBook();
    refreshed.emit();
    reinitializingPromise = initializeGrowthBook().catch((error) => {
      logError(toError(error));
      return null;
    }).finally(() => {
      reinitializingPromise = null;
    });
  } catch (error) {
    if (true) {
      throw error;
    }
    logError(toError(error));
  }
}
function resetGrowthBook() {
  stopPeriodicGrowthBookRefresh();
  if (currentBeforeExitHandler) {
    process.off("beforeExit", currentBeforeExitHandler);
    currentBeforeExitHandler = null;
  }
  if (currentExitHandler) {
    process.off("exit", currentExitHandler);
    currentExitHandler = null;
  }
  client?.destroy();
  client = null;
  clientCreatedWithAuth = false;
  reinitializingPromise = null;
  experimentDataByFeature.clear();
  pendingExposures.clear();
  loggedExposures.clear();
  remoteEvalFeatureValues.clear();
  getGrowthBookClient.cache?.clear?.();
  initializeGrowthBook.cache?.clear?.();
  envOverrides = null;
  envOverridesParsed = false;
}
async function refreshGrowthBookFeatures() {
  if (!isGrowthBookEnabled()) {
    return;
  }
  try {
    const growthBookClient = await initializeGrowthBook();
    if (!growthBookClient) {
      return;
    }
    await growthBookClient.refreshFeatures();
    if (growthBookClient !== client) {
      if (process.env.USER_TYPE === "ant") {
        logForDebugging("GrowthBook: Skipping refresh processing for replaced client");
      }
      return;
    }
    const hadFeatures = await processRemoteEvalPayload(growthBookClient);
    if (growthBookClient !== client)
      return;
    if (process.env.USER_TYPE === "ant") {
      logForDebugging("GrowthBook: Light refresh completed");
    }
    if (hadFeatures) {
      syncRemoteEvalToDisk();
      refreshed.emit();
    }
  } catch (error) {
    if (true) {
      throw error;
    }
    logError(toError(error));
  }
}
function setupPeriodicGrowthBookRefresh() {
  if (!isGrowthBookEnabled()) {
    return;
  }
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }
  refreshInterval = setInterval(() => {
    refreshGrowthBookFeatures();
  }, GROWTHBOOK_REFRESH_INTERVAL_MS);
  refreshInterval.unref?.();
  if (!beforeExitListener) {
    beforeExitListener = () => {
      stopPeriodicGrowthBookRefresh();
    };
    process.once("beforeExit", beforeExitListener);
  }
}
function stopPeriodicGrowthBookRefresh() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
  if (beforeExitListener) {
    process.removeListener("beforeExit", beforeExitListener);
    beforeExitListener = null;
  }
}
async function getDynamicConfig_BLOCKS_ON_INIT(configName, defaultValue) {
  return getFeatureValue_DEPRECATED(configName, defaultValue);
}
function getDynamicConfig_CACHED_MAY_BE_STALE(configName, defaultValue) {
  return getFeatureValue_CACHED_MAY_BE_STALE(configName, defaultValue);
}
var client = null, currentBeforeExitHandler = null, currentExitHandler = null, clientCreatedWithAuth = false, experimentDataByFeature, remoteEvalFeatureValues, pendingExposures, loggedExposures, reinitializingPromise = null, refreshed, envOverrides = null, envOverridesParsed = false, LOCAL_GATE_DEFAULTS, getGrowthBookClient, initializeGrowthBook, GROWTHBOOK_REFRESH_INTERVAL_MS, refreshInterval = null, beforeExitListener = null;
var init_growthbook = __esm(() => {
  init_esm();
  init_lodash();
  init_state();
  init_keys();
  init_config();
  init_debug();
  init_errors();
  init_http();
  init_log();
  init_signal();
  init_slowOperations();
  init_user();
  init_firstPartyEventLogger();
  experimentDataByFeature = new Map;
  remoteEvalFeatureValues = new Map;
  pendingExposures = new Set;
  loggedExposures = new Set;
  refreshed = createSignal();
  LOCAL_GATE_DEFAULTS = {
    tengu_keybinding_customization_release: true,
    tengu_streaming_tool_execution2: true,
    tengu_kairos_cron: true,
    tengu_amber_json_tools: true,
    tengu_immediate_model_command: true,
    tengu_basalt_3kr: true,
    tengu_pebble_leaf_prune: true,
    tengu_chair_sermon: true,
    tengu_lodestone_enabled: true,
    tengu_auto_background_agents: true,
    tengu_fgts: true,
    tengu_session_memory: true,
    tengu_passport_quail: true,
    tengu_moth_copse: true,
    tengu_coral_fern: true,
    tengu_chomp_inflection: true,
    tengu_hive_evidence: true,
    tengu_kairos_brief: true,
    tengu_kairos_brief_config: { enable_slash_command: true },
    tengu_sedge_lantern: true,
    tengu_onyx_plover: { enabled: true },
    tengu_willow_mode: "dialog",
    tengu_turtle_carbon: true,
    tengu_amber_stoat: true,
    tengu_amber_flint: true,
    tengu_slim_subagent_claudemd: true,
    tengu_birch_trellis: true,
    tengu_collage_kaleidoscope: true,
    tengu_compact_cache_prefix: true,
    tengu_kairos_assistant: true,
    tengu_kairos_cron_durable: true,
    tengu_attribution_header: true,
    tengu_slate_prism: true,
    tengu_review_bughunter_config: { enabled: true },
    tengu_ccr_bundle_seed_enabled: true
  };
  getGrowthBookClient = memoize_default(() => {
    if (!isGrowthBookEnabled()) {
      return null;
    }
    const attributes = getUserAttributes();
    const clientKey = getGrowthBookClientKey();
    const baseUrl = process.env.CLAUDE_GB_ADAPTER_URL || (process.env.USER_TYPE === "ant" ? process.env.CLAUDE_CODE_GB_BASE_URL || "https://api.anthropic.com/" : "https://api.anthropic.com/");
    const isAdapterMode = !!(process.env.CLAUDE_GB_ADAPTER_URL && process.env.CLAUDE_GB_ADAPTER_KEY);
    if (process.env.USER_TYPE === "ant") {
      logForDebugging(`GrowthBook: Creating client with clientKey=${clientKey}, attributes: ${jsonStringify(attributes)}`);
    }
    const hasTrust = checkHasTrustDialogAccepted() || getSessionTrustAccepted() || getIsNonInteractiveSession();
    const authHeaders = hasTrust ? getAuthHeaders() : { headers: {}, error: "trust not established" };
    const hasAuth = isAdapterMode || !authHeaders.error;
    clientCreatedWithAuth = hasAuth;
    const thisClient = new GrowthBook({
      apiHost: baseUrl,
      clientKey,
      attributes,
      remoteEval: !isAdapterMode,
      ...!isAdapterMode ? { cacheKeyAttributes: ["id", "organizationUUID"] } : {},
      ...authHeaders.error ? {} : { apiHostRequestHeaders: authHeaders.headers },
      ...process.env.USER_TYPE === "ant" ? {
        log: (msg, ctx) => {
          logForDebugging(`GrowthBook: ${msg} ${jsonStringify(ctx)}`);
        }
      } : {}
    });
    client = thisClient;
    if (!hasAuth) {
      return { client: thisClient, initialized: Promise.resolve() };
    }
    const initialized = thisClient.init({ timeout: 5000 }).then(async (result) => {
      if (client !== thisClient) {
        if (process.env.USER_TYPE === "ant") {
          logForDebugging("GrowthBook: Skipping init callback for replaced client");
        }
        return;
      }
      if (process.env.USER_TYPE === "ant") {
        logForDebugging(`GrowthBook initialized, source: ${result.source}, success: ${result.success}`);
      }
      const hadFeatures = await processRemoteEvalPayload(thisClient);
      if (client !== thisClient)
        return;
      if (hadFeatures) {
        for (const feature of pendingExposures) {
          logExposureForFeature(feature);
        }
        pendingExposures.clear();
        syncRemoteEvalToDisk();
        refreshed.emit();
      }
      if (process.env.USER_TYPE === "ant") {
        const features = thisClient.getFeatures();
        if (features) {
          const featureKeys = Object.keys(features);
          logForDebugging(`GrowthBook loaded ${featureKeys.length} features: ${featureKeys.slice(0, 10).join(", ")}${featureKeys.length > 10 ? "..." : ""}`);
        }
      }
    }).catch((error) => {
      if (process.env.USER_TYPE === "ant") {
        logError(toError(error));
      }
    });
    currentBeforeExitHandler = () => client?.destroy();
    currentExitHandler = () => client?.destroy();
    process.on("beforeExit", currentBeforeExitHandler);
    process.on("exit", currentExitHandler);
    return { client: thisClient, initialized };
  });
  initializeGrowthBook = memoize_default(async () => {
    let clientWrapper = getGrowthBookClient();
    if (!clientWrapper) {
      return null;
    }
    if (!clientCreatedWithAuth) {
      const hasTrust = checkHasTrustDialogAccepted() || getSessionTrustAccepted() || getIsNonInteractiveSession();
      if (hasTrust) {
        const currentAuth = getAuthHeaders();
        if (!currentAuth.error) {
          if (process.env.USER_TYPE === "ant") {
            logForDebugging("GrowthBook: Auth became available after client creation, reinitializing");
          }
          resetGrowthBook();
          clientWrapper = getGrowthBookClient();
          if (!clientWrapper) {
            return null;
          }
        }
      }
    }
    await clientWrapper.initialized;
    setupPeriodicGrowthBookRefresh();
    return clientWrapper.client;
  });
  GROWTHBOOK_REFRESH_INTERVAL_MS = process.env.USER_TYPE !== "ant" ? 6 * 60 * 60 * 1000 : 20 * 60 * 1000;
});

// src/utils/fileReadCache.ts
class FileReadCache {
  cache = new Map;
  maxCacheSize = 1000;
  readFile(filePath) {
    const fs = getFsImplementation();
    let stats;
    try {
      stats = fs.statSync(filePath);
    } catch (error) {
      this.cache.delete(filePath);
      throw error;
    }
    const cacheKey = filePath;
    const cachedData = this.cache.get(cacheKey);
    if (cachedData && cachedData.mtime === stats.mtimeMs) {
      return {
        content: cachedData.content,
        encoding: cachedData.encoding
      };
    }
    const encoding = detectFileEncoding(filePath);
    const content = fs.readFileSync(filePath, { encoding }).replaceAll(`\r
`, `
`);
    this.cache.set(cacheKey, {
      content,
      encoding,
      mtime: stats.mtimeMs
    });
    if (this.cache.size > this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    return { content, encoding };
  }
  clear() {
    this.cache.clear();
  }
  invalidate(filePath) {
    this.cache.delete(filePath);
  }
  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}
var fileReadCache;
var init_fileReadCache = __esm(() => {
  init_file();
  init_fsOperations();
  fileReadCache = new FileReadCache;
});

// src/utils/file.ts
import { chmodSync, writeFileSync as fsWriteFileSync } from "fs";
import { realpath, stat as stat2 } from "fs/promises";
import { homedir as homedir2 } from "os";
import {
  basename as basename2,
  dirname as dirname3,
  extname as extname2,
  isAbsolute as isAbsolute2,
  join as join8,
  normalize as normalize2,
  relative,
  resolve as resolve3,
  sep as sep2
} from "path";
async function pathExists(path2) {
  try {
    await stat2(path2);
    return true;
  } catch {
    return false;
  }
}
function readFileSafe(filepath) {
  try {
    const fs = getFsImplementation();
    return fs.readFileSync(filepath, { encoding: "utf8" });
  } catch (error) {
    logError(error);
    return null;
  }
}
function getFileModificationTime(filePath) {
  const fs = getFsImplementation();
  return Math.floor(fs.statSync(filePath).mtimeMs);
}
async function getFileModificationTimeAsync(filePath) {
  const s = await getFsImplementation().stat(filePath);
  return Math.floor(s.mtimeMs);
}
function writeTextContent(filePath, content, encoding, endings) {
  let toWrite = content;
  if (endings === "CRLF") {
    toWrite = content.replaceAll(`\r
`, `
`).split(`
`).join(`\r
`);
  }
  writeFileSyncAndFlush_DEPRECATED(filePath, toWrite, { encoding });
}
function detectFileEncoding(filePath) {
  try {
    const fs = getFsImplementation();
    const { resolvedPath } = safeResolvePath(fs, filePath);
    return detectEncodingForResolvedPath(resolvedPath);
  } catch (error) {
    if (isFsInaccessible(error)) {
      logForDebugging(`detectFileEncoding failed for expected reason: ${error.code}`, {
        level: "debug"
      });
    } else {
      logError(error);
    }
    return "utf8";
  }
}
function detectLineEndings(filePath, encoding = "utf8") {
  try {
    const fs = getFsImplementation();
    const { resolvedPath } = safeResolvePath(fs, filePath);
    const { buffer, bytesRead } = fs.readSync(resolvedPath, { length: 4096 });
    const content = buffer.toString(encoding, 0, bytesRead);
    return detectLineEndingsForString(content);
  } catch (error) {
    logError(error);
    return "LF";
  }
}
function convertLeadingTabsToSpaces(content) {
  if (!content.includes("\t"))
    return content;
  return content.replace(/^\t+/gm, (_) => "  ".repeat(_.length));
}
function getAbsoluteAndRelativePaths(path2) {
  const absolutePath = path2 ? expandPath(path2) : undefined;
  const relativePath = absolutePath ? relative(getCwd(), absolutePath) : undefined;
  return { absolutePath, relativePath };
}
function getDisplayPath(filePath) {
  const { relativePath } = getAbsoluteAndRelativePaths(filePath);
  if (relativePath && !relativePath.startsWith("..")) {
    return relativePath;
  }
  const homeDir = homedir2();
  if (filePath.startsWith(homeDir + sep2)) {
    return "~" + filePath.slice(homeDir.length);
  }
  return filePath;
}
function findSimilarFile(filePath) {
  const fs = getFsImplementation();
  try {
    const dir = dirname3(filePath);
    const fileBaseName = basename2(filePath, extname2(filePath));
    const files = fs.readdirSync(dir);
    const similarFiles = files.filter((file) => basename2(file.name, extname2(file.name)) === fileBaseName && join8(dir, file.name) !== filePath);
    const firstMatch = similarFiles[0];
    if (firstMatch) {
      return firstMatch.name;
    }
    return;
  } catch (error) {
    if (!isENOENT(error)) {
      logError(error);
    }
    return;
  }
}
async function suggestPathUnderCwd(requestedPath) {
  const cwd = getCwd();
  const cwdParent = dirname3(cwd);
  let resolvedPath = requestedPath;
  try {
    const resolvedDir = await realpath(dirname3(requestedPath));
    resolvedPath = join8(resolvedDir, basename2(requestedPath));
  } catch {}
  const cwdParentPrefix = cwdParent === sep2 ? sep2 : cwdParent + sep2;
  if (!resolvedPath.startsWith(cwdParentPrefix) || resolvedPath.startsWith(cwd + sep2) || resolvedPath === cwd) {
    return;
  }
  const relFromParent = relative(cwdParent, resolvedPath);
  const correctedPath = join8(cwd, relFromParent);
  try {
    await stat2(correctedPath);
    return correctedPath;
  } catch {
    return;
  }
}
function isCompactLinePrefixEnabled() {
  return !getFeatureValue_CACHED_MAY_BE_STALE("tengu_compact_line_prefix_killswitch", false);
}
function addLineNumbers({
  content,
  startLine
}) {
  if (!content) {
    return "";
  }
  const lines = content.split(/\r?\n/);
  if (isCompactLinePrefixEnabled()) {
    return lines.map((line, index2) => `${index2 + startLine}	${line}`).join(`
`);
  }
  return lines.map((line, index2) => {
    const numStr = String(index2 + startLine);
    if (numStr.length >= 6) {
      return `${numStr}\u2192${line}`;
    }
    return `${numStr.padStart(6, " ")}\u2192${line}`;
  }).join(`
`);
}
function stripLineNumberPrefix(line) {
  const match = line.match(/^\s*\d+[\u2192\t](.*)$/);
  return match?.[1] ?? line;
}
function isDirEmpty(dirPath) {
  try {
    return getFsImplementation().isDirEmptySync(dirPath);
  } catch (e) {
    return isENOENT(e);
  }
}
function readFileSyncCached(filePath) {
  const { content } = fileReadCache.readFile(filePath);
  return content;
}
function writeFileSyncAndFlush_DEPRECATED(filePath, content, options = { encoding: "utf-8" }) {
  const fs = getFsImplementation();
  let targetPath = filePath;
  try {
    const linkTarget = fs.readlinkSync(filePath);
    targetPath = isAbsolute2(linkTarget) ? linkTarget : resolve3(dirname3(filePath), linkTarget);
    logForDebugging(`Writing through symlink: ${filePath} -> ${targetPath}`);
  } catch {}
  const tempPath = `${targetPath}.tmp.${process.pid}.${Date.now()}`;
  let targetMode;
  let targetExists = false;
  try {
    targetMode = fs.statSync(targetPath).mode;
    targetExists = true;
    logForDebugging(`Preserving file permissions: ${targetMode.toString(8)}`);
  } catch (e) {
    if (!isENOENT(e))
      throw e;
    if (options.mode !== undefined) {
      targetMode = options.mode;
      logForDebugging(`Setting permissions for new file: ${targetMode.toString(8)}`);
    }
  }
  try {
    logForDebugging(`Writing to temp file: ${tempPath}`);
    const writeOptions = {
      encoding: options.encoding,
      flush: true
    };
    if (!targetExists && options.mode !== undefined) {
      writeOptions.mode = options.mode;
    }
    fsWriteFileSync(tempPath, content, writeOptions);
    logForDebugging(`Temp file written successfully, size: ${content.length} bytes`);
    if (targetExists && targetMode !== undefined) {
      chmodSync(tempPath, targetMode);
      logForDebugging(`Applied original permissions to temp file`);
    }
    logForDebugging(`Renaming ${tempPath} to ${targetPath}`);
    fs.renameSync(tempPath, targetPath);
    logForDebugging(`File ${targetPath} written atomically`);
  } catch (atomicError) {
    logForDebugging(`Failed to write file atomically: ${atomicError}`, {
      level: "error"
    });
    logEvent("tengu_atomic_write_error", {});
    try {
      logForDebugging(`Cleaning up temp file: ${tempPath}`);
      fs.unlinkSync(tempPath);
    } catch (cleanupError) {
      logForDebugging(`Failed to clean up temp file: ${cleanupError}`);
    }
    logForDebugging(`Falling back to non-atomic write for ${targetPath}`);
    try {
      const fallbackOptions = {
        encoding: options.encoding,
        flush: true
      };
      if (!targetExists && options.mode !== undefined) {
        fallbackOptions.mode = options.mode;
      }
      fsWriteFileSync(targetPath, content, fallbackOptions);
      logForDebugging(`File ${targetPath} written successfully with non-atomic fallback`);
    } catch (fallbackError) {
      logForDebugging(`Non-atomic write also failed: ${fallbackError}`);
      throw fallbackError;
    }
  }
}
function getDesktopPath() {
  const platform = getPlatform();
  const homeDir = homedir2();
  if (platform === "macos") {
    return join8(homeDir, "Desktop");
  }
  if (platform === "windows") {
    const windowsHome = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;
    if (windowsHome) {
      const wslPath = windowsHome.replace(/^[A-Z]:/, "");
      const desktopPath2 = `/mnt/c${wslPath}/Desktop`;
      if (getFsImplementation().existsSync(desktopPath2)) {
        return desktopPath2;
      }
    }
    try {
      const usersDir = "/mnt/c/Users";
      const userDirs = getFsImplementation().readdirSync(usersDir);
      for (const user of userDirs) {
        if (user.name === "Public" || user.name === "Default" || user.name === "Default User" || user.name === "All Users") {
          continue;
        }
        const potentialDesktopPath = join8(usersDir, user.name, "Desktop");
        if (getFsImplementation().existsSync(potentialDesktopPath)) {
          return potentialDesktopPath;
        }
      }
    } catch (error) {
      logError(error);
    }
  }
  const desktopPath = join8(homeDir, "Desktop");
  if (getFsImplementation().existsSync(desktopPath)) {
    return desktopPath;
  }
  return homeDir;
}
function isFileWithinReadSizeLimit(filePath, maxSizeBytes = MAX_OUTPUT_SIZE) {
  try {
    const stats = getFsImplementation().statSync(filePath);
    return stats.size <= maxSizeBytes;
  } catch {
    return false;
  }
}
function normalizePathForComparison(filePath) {
  let normalized = normalize2(filePath);
  normalized = normalized.replace(/\\/g, "/");
  if (getPlatform() === "windows") {
    normalized = normalized.toLowerCase();
  }
  return normalized;
}
function pathsEqual(path1, path2) {
  return normalizePathForComparison(path1) === normalizePathForComparison(path2);
}
var MAX_OUTPUT_SIZE, FILE_NOT_FOUND_CWD_NOTE = "Note: your current working directory is";
var init_file = __esm(() => {
  init_analytics();
  init_growthbook();
  init_cwd();
  init_debug();
  init_errors();
  init_fileRead();
  init_fileReadCache();
  init_fsOperations();
  init_log();
  init_path();
  init_platform();
  MAX_OUTPUT_SIZE = 0.25 * 1024 * 1024;
});

// src/utils/git/gitignore.ts
import { appendFile as appendFile2, mkdir as mkdir3, readFile, writeFile as writeFile3 } from "fs/promises";
import { homedir as homedir3 } from "os";
import { dirname as dirname4, join as join9 } from "path";
async function isPathGitignored(filePath, cwd) {
  const { code } = await execFileNoThrowWithCwd("git", ["check-ignore", filePath], {
    preserveOutputOnError: false,
    cwd
  });
  return code === 0;
}
function getGlobalGitignorePath() {
  return join9(homedir3(), ".config", "git", "ignore");
}
async function addFileGlobRuleToGitignore(filename, cwd = getCwd()) {
  try {
    if (!await dirIsInGitRepo(cwd)) {
      return;
    }
    const gitignoreEntry = `**/${filename}`;
    const testPath = filename.endsWith("/") ? `${filename}sample-file.txt` : filename;
    if (await isPathGitignored(testPath, cwd)) {
      return;
    }
    const globalGitignorePath = getGlobalGitignorePath();
    const configGitDir = dirname4(globalGitignorePath);
    await mkdir3(configGitDir, { recursive: true });
    try {
      const content = await readFile(globalGitignorePath, { encoding: "utf-8" });
      if (content.includes(gitignoreEntry)) {
        return;
      }
      await appendFile2(globalGitignorePath, `
${gitignoreEntry}
`);
    } catch (e) {
      const code = getErrnoCode(e);
      if (code === "ENOENT") {
        await writeFile3(globalGitignorePath, `${gitignoreEntry}
`, "utf-8");
      } else {
        throw e;
      }
    }
  } catch (error) {
    logError(error);
  }
}
var init_gitignore = __esm(() => {
  init_cwd();
  init_errors();
  init_execFileNoThrow();
  init_git();
  init_log();
});

// src/utils/settings/constants.ts
function getSettingSourceName(source) {
  switch (source) {
    case "userSettings":
      return "user";
    case "projectSettings":
      return "project";
    case "localSettings":
      return "project, gitignored";
    case "flagSettings":
      return "cli flag";
    case "policySettings":
      return "managed";
  }
}
function getSourceDisplayName(source) {
  switch (source) {
    case "userSettings":
      return "User";
    case "projectSettings":
      return "Project";
    case "localSettings":
      return "Local";
    case "flagSettings":
      return "Flag";
    case "policySettings":
      return "Managed";
    case "plugin":
      return "Plugin";
    case "built-in":
      return "Built-in";
  }
}
function getSettingSourceDisplayNameLowercase(source) {
  switch (source) {
    case "userSettings":
      return "user settings";
    case "projectSettings":
      return "shared project settings";
    case "localSettings":
      return "project local settings";
    case "flagSettings":
      return "command line arguments";
    case "policySettings":
      return "enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
  }
}
function getSettingSourceDisplayNameCapitalized(source) {
  switch (source) {
    case "userSettings":
      return "User settings";
    case "projectSettings":
      return "Shared project settings";
    case "localSettings":
      return "Project local settings";
    case "flagSettings":
      return "Command line arguments";
    case "policySettings":
      return "Enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "Command configuration";
    case "session":
      return "Current session";
  }
}
function parseSettingSourcesFlag(flag) {
  if (flag === "")
    return [];
  const names = flag.split(",").map((s) => s.trim());
  const result = [];
  for (const name of names) {
    switch (name) {
      case "user":
        result.push("userSettings");
        break;
      case "project":
        result.push("projectSettings");
        break;
      case "local":
        result.push("localSettings");
        break;
      default:
        throw new Error(`Invalid setting source: ${name}. Valid options are: user, project, local`);
    }
  }
  return result;
}
function getEnabledSettingSources() {
  const allowed = getAllowedSettingSources();
  const result = new Set(allowed);
  result.add("policySettings");
  result.add("flagSettings");
  return Array.from(result);
}
function isSettingSourceEnabled(source) {
  const enabled = getEnabledSettingSources();
  return enabled.includes(source);
}
var SETTING_SOURCES, SOURCES, CLAUDE_CODE_SETTINGS_SCHEMA_URL = "https://json.schemastore.org/claude-code-settings.json";
var init_constants = __esm(() => {
  init_state();
  SETTING_SOURCES = [
    "userSettings",
    "projectSettings",
    "localSettings",
    "flagSettings",
    "policySettings"
  ];
  SOURCES = [
    "localSettings",
    "projectSettings",
    "userSettings"
  ];
});

// src/utils/settings/internalWrites.ts
function markInternalWrite(path2) {
  timestamps.set(path2, Date.now());
}
function consumeInternalWrite(path2, windowMs) {
  const ts = timestamps.get(path2);
  if (ts !== undefined && Date.now() - ts < windowMs) {
    timestamps.delete(path2);
    return true;
  }
  return false;
}
function clearInternalWrites() {
  timestamps.clear();
}
var timestamps;
var init_internalWrites = __esm(() => {
  timestamps = new Map;
});

// src/entrypoints/sandboxTypes.ts
var SandboxNetworkConfigSchema, SandboxFilesystemConfigSchema, SandboxSettingsSchema;
var init_sandboxTypes = __esm(() => {
  init_v4();
  init_lazySchema();
  SandboxNetworkConfigSchema = lazySchema(() => exports_external.object({
    allowedDomains: exports_external.array(exports_external.string()).optional(),
    allowManagedDomainsOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. " + "User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources."),
    allowUnixSockets: exports_external.array(exports_external.string()).optional().describe("macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path)."),
    allowAllUnixSockets: exports_external.boolean().optional().describe("If true, allow all Unix sockets (disables blocking on both platforms)."),
    allowLocalBinding: exports_external.boolean().optional(),
    httpProxyPort: exports_external.number().optional(),
    socksProxyPort: exports_external.number().optional()
  }).optional());
  SandboxFilesystemConfigSchema = lazySchema(() => exports_external.object({
    allowWrite: exports_external.array(exports_external.string()).optional().describe("Additional paths to allow writing within the sandbox. " + "Merged with paths from Edit(...) allow permission rules."),
    denyWrite: exports_external.array(exports_external.string()).optional().describe("Additional paths to deny writing within the sandbox. " + "Merged with paths from Edit(...) deny permission rules."),
    denyRead: exports_external.array(exports_external.string()).optional().describe("Additional paths to deny reading within the sandbox. " + "Merged with paths from Read(...) deny permission rules."),
    allowRead: exports_external.array(exports_external.string()).optional().describe("Paths to re-allow reading within denyRead regions. " + "Takes precedence over denyRead for matching paths."),
    allowManagedReadPathsOnly: exports_external.boolean().optional().describe("When true (set in managed settings), only allowRead paths from policySettings are used.")
  }).optional());
  SandboxSettingsSchema = lazySchema(() => exports_external.object({
    enabled: exports_external.boolean().optional(),
    failIfUnavailable: exports_external.boolean().optional().describe("Exit with an error at startup if sandbox.enabled is true but the sandbox cannot start " + "(missing dependencies, unsupported platform, or platform not in enabledPlatforms). " + "When false (default), a warning is shown and commands run unsandboxed. " + "Intended for managed-settings deployments that require sandboxing as a hard gate."),
    autoAllowBashIfSandboxed: exports_external.boolean().optional(),
    allowUnsandboxedCommands: exports_external.boolean().optional().describe("Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. " + "When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. " + "Default: true."),
    network: SandboxNetworkConfigSchema(),
    filesystem: SandboxFilesystemConfigSchema(),
    ignoreViolations: exports_external.record(exports_external.string(), exports_external.array(exports_external.string())).optional(),
    enableWeakerNestedSandbox: exports_external.boolean().optional(),
    enableWeakerNetworkIsolation: exports_external.boolean().optional().describe("macOS only: Allow access to com.apple.trustd.agent in the sandbox. " + "Needed for Go-based CLI tools (gh, gcloud, terraform, etc.) to verify TLS certificates " + "when using httpProxyPort with a MITM proxy and custom CA. " + "**Reduces security** \u2014 opens a potential data exfiltration vector through the trustd service. Default: false"),
    excludedCommands: exports_external.array(exports_external.string()).optional(),
    ripgrep: exports_external.object({
      command: exports_external.string(),
      args: exports_external.array(exports_external.string()).optional()
    }).optional().describe("Custom ripgrep configuration for bundled ripgrep support")
  }).passthrough());
});

// src/utils/permissions/PermissionMode.ts
function isExternalPermissionMode(mode) {
  if (process.env.USER_TYPE !== "ant") {
    return true;
  }
  return mode !== "auto" && mode !== "bubble";
}
function getModeConfig(mode) {
  return PERMISSION_MODE_CONFIG[mode] ?? PERMISSION_MODE_CONFIG.default;
}
function toExternalPermissionMode(mode) {
  return getModeConfig(mode).external;
}
function permissionModeFromString(str) {
  return PERMISSION_MODES.includes(str) ? str : "default";
}
function permissionModeTitle(mode) {
  return getModeConfig(mode).title;
}
function isDefaultMode(mode) {
  return mode === "default" || mode === undefined;
}
function permissionModeShortTitle(mode) {
  return getModeConfig(mode).shortTitle;
}
function permissionModeSymbol(mode) {
  return getModeConfig(mode).symbol;
}
function getModeColor(mode) {
  return getModeConfig(mode).color;
}
var permissionModeSchema, externalPermissionModeSchema, PERMISSION_MODE_CONFIG;
var init_PermissionMode = __esm(() => {
  init_v4();
  init_figures();
  init_permissions();
  init_lazySchema();
  permissionModeSchema = lazySchema(() => v4_default.enum(PERMISSION_MODES));
  externalPermissionModeSchema = lazySchema(() => v4_default.enum(EXTERNAL_PERMISSION_MODES));
  PERMISSION_MODE_CONFIG = {
    default: {
      title: "Default",
      shortTitle: "Default",
      symbol: "",
      color: "text",
      external: "default"
    },
    plan: {
      title: "Plan Mode",
      shortTitle: "Plan",
      symbol: PAUSE_ICON,
      color: "planMode",
      external: "plan"
    },
    acceptEdits: {
      title: "Accept edits",
      shortTitle: "Accept",
      symbol: "\u23F5\u23F5",
      color: "autoAccept",
      external: "acceptEdits"
    },
    bypassPermissions: {
      title: "Bypass",
      shortTitle: "Bypass",
      symbol: "\u23F5\u23F5",
      color: "error",
      external: "bypassPermissions"
    },
    dontAsk: {
      title: "Don't Ask",
      shortTitle: "DontAsk",
      symbol: "\u23F5\u23F5",
      color: "error",
      external: "dontAsk"
    },
    auto: {
      title: "Auto",
      shortTitle: "Auto",
      symbol: "\u23F5\u23F5",
      color: "warning",
      external: "default"
    }
  };
});

// src/entrypoints/agentSdkTypes.js
var HOOK_EVENTS;
var init_agentSdkTypes = __esm(() => {
  HOOK_EVENTS = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "Notification",
    "UserPromptSubmit",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged"
  ];
});

// src/utils/shell/shellProvider.ts
var SHELL_TYPES, DEFAULT_HOOK_SHELL = "bash";
var init_shellProvider = __esm(() => {
  SHELL_TYPES = ["bash", "powershell"];
});

// src/schemas/hooks.ts
function buildHookSchemas() {
  const BashCommandHookSchema = exports_external.object({
    type: exports_external.literal("command").describe("Shell command hook type"),
    command: exports_external.string().describe("Shell command to execute"),
    if: IfConditionSchema(),
    shell: exports_external.enum(SHELL_TYPES).optional().describe("Shell interpreter. 'bash' uses your $SHELL (bash/zsh/sh); 'powershell' uses pwsh. Defaults to bash."),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for this specific command"),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution"),
    async: exports_external.boolean().optional().describe("If true, hook runs in background without blocking"),
    asyncRewake: exports_external.boolean().optional().describe("If true, hook runs in background and wakes the model on exit code 2 (blocking error). Implies async.")
  });
  const PromptHookSchema = exports_external.object({
    type: exports_external.literal("prompt").describe("LLM prompt hook type"),
    prompt: exports_external.string().describe("Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON."),
    if: IfConditionSchema(),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for this specific prompt evaluation"),
    model: exports_external.string().optional().describe('Model to use for this prompt hook (e.g., "claude-sonnet-4-6"). If not specified, uses the default small fast model.'),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution")
  });
  const HttpHookSchema = exports_external.object({
    type: exports_external.literal("http").describe("HTTP hook type"),
    url: exports_external.string().url().describe("URL to POST the hook input JSON to"),
    if: IfConditionSchema(),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for this specific request"),
    headers: exports_external.record(exports_external.string(), exports_external.string()).optional().describe('Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.'),
    allowedEnvVars: exports_external.array(exports_external.string()).optional().describe("Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work."),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution")
  });
  const AgentHookSchema = exports_external.object({
    type: exports_external.literal("agent").describe("Agentic verifier hook type"),
    prompt: exports_external.string().describe('Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.'),
    if: IfConditionSchema(),
    timeout: exports_external.number().positive().optional().describe("Timeout in seconds for agent execution (default 60)"),
    model: exports_external.string().optional().describe('Model to use for this agent hook (e.g., "claude-sonnet-4-6"). If not specified, uses Haiku.'),
    statusMessage: exports_external.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: exports_external.boolean().optional().describe("If true, hook runs once and is removed after execution")
  });
  return {
    BashCommandHookSchema,
    PromptHookSchema,
    HttpHookSchema,
    AgentHookSchema
  };
}
var IfConditionSchema, HookCommandSchema, HookMatcherSchema, HooksSchema;
var init_hooks = __esm(() => {
  init_agentSdkTypes();
  init_v4();
  init_lazySchema();
  init_shellProvider();
  IfConditionSchema = lazySchema(() => exports_external.string().optional().describe('Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). ' + "Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands."));
  HookCommandSchema = lazySchema(() => {
    const {
      BashCommandHookSchema,
      PromptHookSchema,
      AgentHookSchema,
      HttpHookSchema
    } = buildHookSchemas();
    return exports_external.discriminatedUnion("type", [
      BashCommandHookSchema,
      PromptHookSchema,
      AgentHookSchema,
      HttpHookSchema
    ]);
  });
  HookMatcherSchema = lazySchema(() => exports_external.object({
    matcher: exports_external.string().optional().describe('String pattern to match (e.g. tool names like "Write")'),
    hooks: exports_external.array(HookCommandSchema()).describe("List of hooks to execute when the matcher matches")
  }));
  HooksSchema = lazySchema(() => exports_external.partialRecord(exports_external.enum(HOOK_EVENTS), exports_external.array(HookMatcherSchema())));
});

// src/utils/plugins/schemas.ts
function isMarketplaceAutoUpdate(marketplaceName, entry) {
  const normalizedName = marketplaceName.toLowerCase();
  return entry.autoUpdate ?? (ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(normalizedName) && !NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES.has(normalizedName));
}
function isBlockedOfficialName(name) {
  if (ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(name.toLowerCase())) {
    return false;
  }
  if (NON_ASCII_PATTERN.test(name)) {
    return true;
  }
  return BLOCKED_OFFICIAL_NAME_PATTERN.test(name);
}
function validateOfficialNameSource(name, source) {
  const normalizedName = name.toLowerCase();
  if (!ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(normalizedName)) {
    return null;
  }
  if (source.source === "github") {
    const repo = source.repo || "";
    if (!repo.toLowerCase().startsWith(`${OFFICIAL_GITHUB_ORG}/`)) {
      return `The name '${name}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${OFFICIAL_GITHUB_ORG}/' can use this name.`;
    }
    return null;
  }
  if (source.source === "git" && source.url) {
    const url = source.url.toLowerCase();
    const isHttpsAnthropics = url.includes("github.com/anthropics/");
    const isSshAnthropics = url.includes("git@github.com:anthropics/");
    if (isHttpsAnthropics || isSshAnthropics) {
      return null;
    }
    return `The name '${name}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${OFFICIAL_GITHUB_ORG}/' can use this name.`;
  }
  return `The name '${name}' is reserved for official Anthropic marketplaces and can only be used with GitHub sources from the '${OFFICIAL_GITHUB_ORG}' organization.`;
}
function isLocalPluginSource(source) {
  return typeof source === "string" && source.startsWith("./");
}
function isLocalMarketplaceSource(source) {
  return source.source === "file" || source.source === "directory";
}
var ALLOWED_OFFICIAL_MARKETPLACE_NAMES, NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES, BLOCKED_OFFICIAL_NAME_PATTERN, NON_ASCII_PATTERN, OFFICIAL_GITHUB_ORG = "anthropics", RelativePath, RelativeJSONPath, McpbPath, RelativeMarkdownPath, RelativeCommandPath, MarketplaceNameSchema, PluginAuthorSchema, PluginManifestMetadataSchema, PluginHooksSchema, PluginManifestHooksSchema, CommandMetadataSchema, PluginManifestCommandsSchema, PluginManifestAgentsSchema, PluginManifestSkillsSchema, PluginManifestOutputStylesSchema, nonEmptyString, fileExtension, PluginManifestMcpServerSchema, PluginUserConfigOptionSchema, PluginManifestUserConfigSchema, PluginManifestChannelsSchema, LspServerConfigSchema, PluginManifestLspServerSchema, NpmPackageNameSchema, PluginManifestSettingsSchema, PluginManifestSchema, MarketplaceSourceSchema, gitSha, PluginSourceSchema, SettingsMarketplacePluginSchema, PluginMarketplaceEntrySchema, PluginMarketplaceSchema, PluginIdSchema, DEP_REF_REGEX, DependencyRefSchema, SettingsPluginEntrySchema, InstalledPluginSchema, InstalledPluginsFileSchemaV1, PluginScopeSchema, PluginInstallationEntrySchema, InstalledPluginsFileSchemaV2, InstalledPluginsFileSchema, KnownMarketplaceSchema, KnownMarketplacesFileSchema;
var init_schemas = __esm(() => {
  init_v4();
  init_hooks();
  init_types();
  init_lazySchema();
  ALLOWED_OFFICIAL_MARKETPLACE_NAMES = new Set([
    "claude-code-marketplace",
    "claude-code-plugins",
    "claude-plugins-official",
    "anthropic-marketplace",
    "anthropic-plugins",
    "agent-skills",
    "life-sciences",
    "knowledge-work-plugins"
  ]);
  NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES = new Set(["knowledge-work-plugins"]);
  BLOCKED_OFFICIAL_NAME_PATTERN = /(?:official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official|^(?:anthropic|claude)[^a-z0-9]*(marketplace|plugins|official))/i;
  NON_ASCII_PATTERN = /[^\u0020-\u007E]/;
  RelativePath = lazySchema(() => exports_external.string().startsWith("./"));
  RelativeJSONPath = lazySchema(() => RelativePath().endsWith(".json"));
  McpbPath = lazySchema(() => exports_external.union([
    RelativePath().refine((path2) => path2.endsWith(".mcpb") || path2.endsWith(".dxt"), {
      message: "MCPB file path must end with .mcpb or .dxt"
    }).describe("Path to MCPB file relative to plugin root"),
    exports_external.string().url().refine((url) => url.endsWith(".mcpb") || url.endsWith(".dxt"), {
      message: "MCPB URL must end with .mcpb or .dxt"
    }).describe("URL to MCPB file")
  ]));
  RelativeMarkdownPath = lazySchema(() => RelativePath().endsWith(".md"));
  RelativeCommandPath = lazySchema(() => exports_external.union([
    RelativeMarkdownPath(),
    RelativePath()
  ]));
  MarketplaceNameSchema = lazySchema(() => exports_external.string().min(1, "Marketplace must have a name").refine((name) => !name.includes(" "), {
    message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")'
  }).refine((name) => !name.includes("/") && !name.includes("\\") && !name.includes("..") && name !== ".", {
    message: 'Marketplace name cannot contain path separators (/ or \\), ".." sequences, or be "."'
  }).refine((name) => !isBlockedOfficialName(name), {
    message: "Marketplace name impersonates an official Anthropic/MiMo marketplace"
  }).refine((name) => name.toLowerCase() !== "inline", {
    message: 'Marketplace name "inline" is reserved for --plugin-dir session plugins'
  }).refine((name) => name.toLowerCase() !== "builtin", {
    message: 'Marketplace name "builtin" is reserved for built-in plugins'
  }));
  PluginAuthorSchema = lazySchema(() => exports_external.object({
    name: exports_external.string().min(1, "Author name cannot be empty").describe("Display name of the plugin author or organization"),
    email: exports_external.string().optional().describe("Contact email for support or feedback"),
    url: exports_external.string().optional().describe("Website, GitHub profile, or organization URL")
  }));
  PluginManifestMetadataSchema = lazySchema(() => exports_external.object({
    name: exports_external.string().min(1, "Plugin name cannot be empty").refine((name) => !name.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Unique identifier for the plugin, used for namespacing (prefer kebab-case)"),
    version: exports_external.string().optional().describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
    description: exports_external.string().optional().describe("Brief, user-facing explanation of what the plugin provides"),
    author: PluginAuthorSchema().optional().describe("Information about the plugin creator or maintainer"),
    homepage: exports_external.string().url().optional().describe("Plugin homepage or documentation URL"),
    repository: exports_external.string().optional().describe("Source code repository URL"),
    license: exports_external.string().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
    keywords: exports_external.array(exports_external.string()).optional().describe("Tags for plugin discovery and categorization"),
    dependencies: exports_external.array(DependencyRefSchema()).optional().describe(`Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.`)
  }));
  PluginHooksSchema = lazySchema(() => exports_external.object({
    description: exports_external.string().optional().describe("Brief, user-facing explanation of what these hooks provide"),
    hooks: exports_external.lazy(() => HooksSchema()).describe("The hooks provided by the plugin, in the same format as the one used for settings")
  }));
  PluginManifestHooksSchema = lazySchema(() => exports_external.object({
    hooks: exports_external.union([
      RelativeJSONPath().describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"),
      exports_external.lazy(() => HooksSchema()).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)"),
      exports_external.array(exports_external.union([
        RelativeJSONPath().describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"),
        exports_external.lazy(() => HooksSchema()).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)")
      ]))
    ])
  }));
  CommandMetadataSchema = lazySchema(() => exports_external.object({
    source: RelativeCommandPath().optional().describe("Path to command markdown file, relative to plugin root"),
    content: exports_external.string().optional().describe("Inline markdown content for the command"),
    description: exports_external.string().optional().describe("Command description override"),
    argumentHint: exports_external.string().optional().describe('Hint for command arguments (e.g., "[file]")'),
    model: exports_external.string().optional().describe("Default model for this command"),
    allowedTools: exports_external.array(exports_external.string()).optional().describe("Tools allowed when command runs")
  }).refine((data) => data.source && !data.content || !data.source && data.content, {
    message: 'Command must have either "source" (file path) or "content" (inline markdown), but not both'
  }));
  PluginManifestCommandsSchema = lazySchema(() => exports_external.object({
    commands: exports_external.union([
      RelativeCommandPath().describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativeCommandPath().describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional command files or skill directories"),
      exports_external.record(exports_external.string(), CommandMetadataSchema()).describe('Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" \u2192 "/plugin:about")')
    ])
  }));
  PluginManifestAgentsSchema = lazySchema(() => exports_external.object({
    agents: exports_external.union([
      RelativeMarkdownPath().describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativeMarkdownPath().describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional agent files")
    ])
  }));
  PluginManifestSkillsSchema = lazySchema(() => exports_external.object({
    skills: exports_external.union([
      RelativePath().describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativePath().describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional skill directories")
    ])
  }));
  PluginManifestOutputStylesSchema = lazySchema(() => exports_external.object({
    outputStyles: exports_external.union([
      RelativePath().describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root"),
      exports_external.array(RelativePath().describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional output styles directories or files")
    ])
  }));
  nonEmptyString = lazySchema(() => exports_external.string().min(1));
  fileExtension = lazySchema(() => exports_external.string().min(2).refine((ext) => ext.startsWith("."), {
    message: 'File extensions must start with dot (e.g., ".ts", not "ts")'
  }));
  PluginManifestMcpServerSchema = lazySchema(() => exports_external.object({
    mcpServers: exports_external.union([
      RelativeJSONPath().describe("MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)"),
      McpbPath().describe("Path or URL to MCPB file containing MCP server configuration"),
      exports_external.record(exports_external.string(), McpServerConfigSchema()).describe("MCP server configurations keyed by server name"),
      exports_external.array(exports_external.union([
        RelativeJSONPath().describe("Path to MCP servers configuration file"),
        McpbPath().describe("Path or URL to MCPB file"),
        exports_external.record(exports_external.string(), McpServerConfigSchema()).describe("Inline MCP server configurations")
      ])).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)")
    ])
  }));
  PluginUserConfigOptionSchema = lazySchema(() => exports_external.object({
    type: exports_external.enum(["string", "number", "boolean", "directory", "file"]).describe("Type of the configuration value"),
    title: exports_external.string().describe("Human-readable label shown in the config dialog"),
    description: exports_external.string().describe("Help text shown beneath the field in the config dialog"),
    required: exports_external.boolean().optional().describe("If true, validation fails when this field is empty"),
    default: exports_external.union([exports_external.string(), exports_external.number(), exports_external.boolean(), exports_external.array(exports_external.string())]).optional().describe("Default value used when the user provides nothing"),
    multiple: exports_external.boolean().optional().describe("For string type: allow an array of strings"),
    sensitive: exports_external.boolean().optional().describe("If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json"),
    min: exports_external.number().optional().describe("Minimum value (number type only)"),
    max: exports_external.number().optional().describe("Maximum value (number type only)")
  }).strict());
  PluginManifestUserConfigSchema = lazySchema(() => exports_external.object({
    userConfig: exports_external.record(exports_external.string().regex(/^[A-Za-z_]\w*$/, "Option keys must be valid identifiers (letters, digits, underscore; no leading digit) \u2014 they become CLAUDE_PLUGIN_OPTION_<KEY> env vars in hooks"), PluginUserConfigOptionSchema()).optional().describe("User-configurable values this plugin needs. Prompted at enable time. " + "Non-sensitive values saved to settings.json; sensitive values to secure storage " + "(macOS keychain or .credentials.json). Available as ${user_config.KEY} in " + "MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. " + "Note: sensitive values share a single keychain entry with OAuth tokens \u2014 keep " + "secret counts small to stay under the ~2KB stdin-safe limit (see INC-3028).")
  }));
  PluginManifestChannelsSchema = lazySchema(() => exports_external.object({
    channels: exports_external.array(exports_external.object({
      server: exports_external.string().min(1).describe("Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers."),
      displayName: exports_external.string().optional().describe('Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.'),
      userConfig: exports_external.record(exports_external.string(), PluginUserConfigOptionSchema()).optional().describe("Fields to prompt the user for when enabling this plugin in assistant mode. " + "Saved values are substituted into ${user_config.KEY} references in the mcpServers env.")
    }).strict()).describe("Channels this plugin provides. Each entry declares an MCP server as a message channel " + "and optionally specifies user configuration to prompt for at enable time.")
  }));
  LspServerConfigSchema = lazySchema(() => exports_external.strictObject({
    command: exports_external.string().min(1).refine((cmd) => {
      if (cmd.includes(" ") && !cmd.startsWith("/")) {
        return false;
      }
      return true;
    }, {
      message: "Command should not contain spaces. Use args array for arguments."
    }).describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
    args: exports_external.array(nonEmptyString()).optional().describe("Command-line arguments to pass to the server"),
    extensionToLanguage: exports_external.record(fileExtension(), nonEmptyString()).refine((record) => Object.keys(record).length > 0, {
      message: "extensionToLanguage must have at least one mapping"
    }).describe("Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping."),
    transport: exports_external.enum(["stdio", "socket"]).default("stdio").describe("Communication transport mechanism"),
    env: exports_external.record(exports_external.string(), exports_external.string()).optional().describe("Environment variables to set when starting the server"),
    initializationOptions: exports_external.unknown().optional().describe("Initialization options passed to the server during initialization"),
    settings: exports_external.unknown().optional().describe("Settings passed to the server via workspace/didChangeConfiguration"),
    workspaceFolder: exports_external.string().optional().describe("Workspace folder path to use for the server"),
    startupTimeout: exports_external.number().int().positive().optional().describe("Maximum time to wait for server startup (milliseconds)"),
    shutdownTimeout: exports_external.number().int().positive().optional().describe("Maximum time to wait for graceful shutdown (milliseconds)"),
    restartOnCrash: exports_external.boolean().optional().describe("Whether to restart the server if it crashes"),
    maxRestarts: exports_external.number().int().nonnegative().optional().describe("Maximum number of restart attempts before giving up")
  }));
  PluginManifestLspServerSchema = lazySchema(() => exports_external.object({
    lspServers: exports_external.union([
      RelativeJSONPath().describe("Path to .lsp.json configuration file relative to plugin root"),
      exports_external.record(exports_external.string(), LspServerConfigSchema()).describe("LSP server configurations keyed by server name"),
      exports_external.array(exports_external.union([
        RelativeJSONPath().describe("Path to LSP configuration file"),
        exports_external.record(exports_external.string(), LspServerConfigSchema()).describe("Inline LSP server configurations")
      ])).describe("Array of LSP server configurations (paths or inline definitions)")
    ])
  }));
  NpmPackageNameSchema = lazySchema(() => exports_external.string().refine((name) => !name.includes("..") && !name.includes("//"), "Package name cannot contain path traversal patterns").refine((name) => {
    const scopedPackageRegex = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/;
    const regularPackageRegex = /^[a-z0-9][a-z0-9-._]*$/;
    return scopedPackageRegex.test(name) || regularPackageRegex.test(name);
  }, "Invalid npm package name format"));
  PluginManifestSettingsSchema = lazySchema(() => exports_external.object({
    settings: exports_external.record(exports_external.string(), exports_external.unknown()).optional().describe("Settings to merge when plugin is enabled. " + "Only allowlisted keys are kept (currently: agent)")
  }));
  PluginManifestSchema = lazySchema(() => exports_external.object({
    ...PluginManifestMetadataSchema().shape,
    ...PluginManifestHooksSchema().partial().shape,
    ...PluginManifestCommandsSchema().partial().shape,
    ...PluginManifestAgentsSchema().partial().shape,
    ...PluginManifestSkillsSchema().partial().shape,
    ...PluginManifestOutputStylesSchema().partial().shape,
    ...PluginManifestChannelsSchema().partial().shape,
    ...PluginManifestMcpServerSchema().partial().shape,
    ...PluginManifestLspServerSchema().partial().shape,
    ...PluginManifestSettingsSchema().partial().shape,
    ...PluginManifestUserConfigSchema().partial().shape
  }));
  MarketplaceSourceSchema = lazySchema(() => exports_external.discriminatedUnion("source", [
    exports_external.object({
      source: exports_external.literal("url"),
      url: exports_external.string().url().describe("Direct URL to marketplace.json file"),
      headers: exports_external.record(exports_external.string(), exports_external.string()).optional().describe("Custom HTTP headers (e.g., for authentication)")
    }),
    exports_external.object({
      source: exports_external.literal("github"),
      repo: exports_external.string().describe("GitHub repository in owner/repo format"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      path: exports_external.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"),
      sparsePaths: exports_external.array(exports_external.string()).optional().describe("Directories to include via git sparse-checkout (cone mode). " + "Use for monorepos where the marketplace lives in a subdirectory. " + 'Example: [".claude-plugin", "plugins"]. ' + "If omitted, the full repository is cloned.")
    }),
    exports_external.object({
      source: exports_external.literal("git"),
      url: exports_external.string().describe("Full git repository URL"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      path: exports_external.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"),
      sparsePaths: exports_external.array(exports_external.string()).optional().describe("Directories to include via git sparse-checkout (cone mode). " + "Use for monorepos where the marketplace lives in a subdirectory. " + 'Example: [".claude-plugin", "plugins"]. ' + "If omitted, the full repository is cloned.")
    }),
    exports_external.object({
      source: exports_external.literal("npm"),
      package: NpmPackageNameSchema().describe("NPM package containing marketplace.json")
    }),
    exports_external.object({
      source: exports_external.literal("file"),
      path: exports_external.string().describe("Local file path to marketplace.json")
    }),
    exports_external.object({
      source: exports_external.literal("directory"),
      path: exports_external.string().describe("Local directory containing .claude-plugin/marketplace.json")
    }),
    exports_external.object({
      source: exports_external.literal("hostPattern"),
      hostPattern: exports_external.string().describe("Regex pattern to match the host/domain extracted from any marketplace source type. " + 'For github sources, matches against "github.com". For git sources (SSH or HTTPS), ' + "extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all " + 'marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").')
    }),
    exports_external.object({
      source: exports_external.literal("pathPattern"),
      pathPattern: exports_external.string().describe("Regex pattern matched against the .path field of file and directory sources. " + "Use in strictKnownMarketplaces to allow filesystem-based marketplaces alongside " + 'hostPattern restrictions for network sources. Use ".*" to allow all filesystem ' + 'paths, or a narrower pattern (e.g., "^/opt/approved/") to restrict to specific ' + "directories.")
    }),
    exports_external.object({
      source: exports_external.literal("settings"),
      name: MarketplaceNameSchema().refine((name) => !ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(name.toLowerCase()), {
        message: "Reserved official marketplace names cannot be used with settings sources. " + "validateOfficialNameSource only accepts github/git sources from anthropics/* " + "for these names; a settings source would be rejected after " + "loadAndCacheMarketplace has already written to disk with cleanupNeeded=false."
      }).describe("Marketplace name. Must match the extraKnownMarketplaces key (enforced); " + "the synthetic manifest is written under this name. Same validation " + "as PluginMarketplaceSchema plus reserved-name rejection \u2014 " + "validateOfficialNameSource runs after the disk write, too late to clean up."),
      plugins: exports_external.array(SettingsMarketplacePluginSchema()).describe("Plugin entries declared inline in settings.json"),
      owner: PluginAuthorSchema().optional()
    }).describe("Inline marketplace manifest defined directly in settings.json. " + "The reconciler writes a synthetic marketplace.json to the cache; " + "diffMarketplaces detects edits via isEqual on the stored source " + "(the plugins array is inside this object, so edits surface as sourceChanged).")
  ]));
  gitSha = lazySchema(() => exports_external.string().length(40).regex(/^[a-f0-9]{40}$/, "Must be a full 40-character lowercase git commit SHA"));
  PluginSourceSchema = lazySchema(() => exports_external.union([
    RelativePath().describe("Path to the plugin root, relative to the marketplace root (the directory containing .claude-plugin/, not .claude-plugin/ itself)"),
    exports_external.object({
      source: exports_external.literal("npm"),
      package: NpmPackageNameSchema().or(exports_external.string()).describe("Package name (or url, or local path, or anything else that can be passed to `npm` as a package)"),
      version: exports_external.string().optional().describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
      registry: exports_external.string().url().optional().describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)")
    }).describe("NPM package as plugin source"),
    exports_external.object({
      source: exports_external.literal("pip"),
      package: exports_external.string().describe("Python package name as it appears on PyPI"),
      version: exports_external.string().optional().describe("Version specifier (e.g., ==1.0.0, >=2.0.0, <3.0.0)"),
      registry: exports_external.string().url().optional().describe("Custom PyPI registry URL (defaults to using system default, likely pypi.org)")
    }).describe("Python package as plugin source"),
    exports_external.object({
      source: exports_external.literal("url"),
      url: exports_external.string().describe("Full git repository URL (https:// or git@)"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      sha: gitSha().optional().describe("Specific commit SHA to use")
    }),
    exports_external.object({
      source: exports_external.literal("github"),
      repo: exports_external.string().describe("GitHub repository in owner/repo format"),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      sha: gitSha().optional().describe("Specific commit SHA to use")
    }),
    exports_external.object({
      source: exports_external.literal("git-subdir"),
      url: exports_external.string().describe("Git repository: GitHub owner/repo shorthand, https://, or git@ URL"),
      path: exports_external.string().min(1).describe('Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). ' + "Cloned sparsely using partial clone (--filter=tree:0) to minimize bandwidth for monorepos."),
      ref: exports_external.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
      sha: gitSha().optional().describe("Specific commit SHA to use")
    }).describe("Plugin located in a subdirectory of a larger repository (monorepo). " + "Only the specified subdirectory is materialized; the rest of the repo is not downloaded.")
  ]));
  SettingsMarketplacePluginSchema = lazySchema(() => exports_external.object({
    name: exports_external.string().min(1, "Plugin name cannot be empty").refine((name) => !name.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Plugin name as it appears in the target repository"),
    source: PluginSourceSchema().describe("Where to fetch the plugin from. Must be a remote source \u2014 relative " + "paths have no marketplace repository to resolve against."),
    description: exports_external.string().optional(),
    version: exports_external.string().optional(),
    strict: exports_external.boolean().optional()
  }).refine((p) => typeof p.source !== "string", {
    message: "Plugins in a settings-sourced marketplace must use remote sources " + '(github, git-subdir, npm, url, pip). Relative-path sources like "./foo" ' + "have no marketplace repository to resolve against."
  }));
  PluginMarketplaceEntrySchema = lazySchema(() => PluginManifestSchema().partial().extend({
    name: exports_external.string().min(1, "Plugin name cannot be empty").refine((name) => !name.includes(" "), {
      message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
    }).describe("Unique identifier matching the plugin name"),
    source: PluginSourceSchema().describe("Where to fetch the plugin from"),
    category: exports_external.string().optional().describe('Category for organizing plugins (e.g., "productivity", "development")'),
    tags: exports_external.array(exports_external.string()).optional().describe("Tags for searchability and discovery"),
    strict: exports_external.boolean().optional().default(true).describe("Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.")
  }));
  PluginMarketplaceSchema = lazySchema(() => exports_external.object({
    name: MarketplaceNameSchema(),
    owner: PluginAuthorSchema().describe("Marketplace maintainer or curator information"),
    plugins: exports_external.array(PluginMarketplaceEntrySchema()).describe("Collection of available plugins in this marketplace"),
    forceRemoveDeletedPlugins: exports_external.boolean().optional().describe("When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users"),
    metadata: exports_external.object({
      pluginRoot: exports_external.string().optional().describe("Base path for relative plugin sources"),
      version: exports_external.string().optional().describe("Marketplace version"),
      description: exports_external.string().optional().describe("Marketplace description")
    }).optional().describe("Optional marketplace metadata"),
    allowCrossMarketplaceDependenciesOn: exports_external.array(exports_external.string()).optional().describe("Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies \u2014 no transitive trust.")
  }));
  PluginIdSchema = lazySchema(() => exports_external.string().regex(/^[a-z0-9][-a-z0-9._]*@[a-z0-9][-a-z0-9._]*$/i, "Plugin ID must be in format: plugin@marketplace"));
  DEP_REF_REGEX = /^[a-z0-9][-a-z0-9._]*(@[a-z0-9][-a-z0-9._]*)?(@\^[^@]*)?$/i;
  DependencyRefSchema = lazySchema(() => exports_external.union([
    exports_external.string().regex(DEP_REF_REGEX, "Dependency must be a plugin name, optionally qualified with @marketplace").transform((s) => s.replace(/@\^[^@]*$/, "")),
    exports_external.object({
      name: exports_external.string().min(1).regex(/^[a-z0-9][-a-z0-9._]*$/i),
      marketplace: exports_external.string().min(1).regex(/^[a-z0-9][-a-z0-9._]*$/i).optional()
    }).loose().transform((o) => o.marketplace ? `${o.name}@${o.marketplace}` : o.name)
  ]));
  SettingsPluginEntrySchema = lazySchema(() => exports_external.union([
    PluginIdSchema(),
    exports_external.object({
      id: PluginIdSchema().describe('Plugin identifier (e.g., "formatter@tools")'),
      version: exports_external.string().optional().describe('Version constraint (e.g., "^2.0.0")'),
      required: exports_external.boolean().optional().describe("If true, cannot be disabled"),
      config: exports_external.record(exports_external.string(), exports_external.unknown()).optional().describe("Plugin-specific configuration")
    })
  ]));
  InstalledPluginSchema = lazySchema(() => exports_external.object({
    version: exports_external.string().describe("Currently installed version"),
    installedAt: exports_external.string().describe("ISO 8601 timestamp of installation"),
    lastUpdated: exports_external.string().optional().describe("ISO 8601 timestamp of last update"),
    installPath: exports_external.string().describe("Absolute path to the installed plugin directory"),
    gitCommitSha: exports_external.string().optional().describe("Git commit SHA for git-based plugins (for version tracking)")
  }));
  InstalledPluginsFileSchemaV1 = lazySchema(() => exports_external.object({
    version: exports_external.literal(1).describe("Schema version 1"),
    plugins: exports_external.record(PluginIdSchema(), InstalledPluginSchema()).describe("Map of plugin IDs to their installation metadata")
  }));
  PluginScopeSchema = lazySchema(() => exports_external.enum(["managed", "user", "project", "local"]));
  PluginInstallationEntrySchema = lazySchema(() => exports_external.object({
    scope: PluginScopeSchema().describe("Installation scope"),
    projectPath: exports_external.string().optional().describe("Project path (required for project/local scopes)"),
    installPath: exports_external.string().describe("Absolute path to the versioned plugin directory"),
    version: exports_external.string().optional().describe("Currently installed version"),
    installedAt: exports_external.string().optional().describe("ISO 8601 timestamp of installation"),
    lastUpdated: exports_external.string().optional().describe("ISO 8601 timestamp of last update"),
    gitCommitSha: exports_external.string().optional().describe("Git commit SHA for git-based plugins")
  }));
  InstalledPluginsFileSchemaV2 = lazySchema(() => exports_external.object({
    version: exports_external.literal(2).describe("Schema version 2"),
    plugins: exports_external.record(PluginIdSchema(), exports_external.array(PluginInstallationEntrySchema())).describe("Map of plugin IDs to arrays of installation entries")
  }));
  InstalledPluginsFileSchema = lazySchema(() => exports_external.union([InstalledPluginsFileSchemaV1(), InstalledPluginsFileSchemaV2()]));
  KnownMarketplaceSchema = lazySchema(() => exports_external.object({
    source: MarketplaceSourceSchema().describe("Where to fetch the marketplace from"),
    installLocation: exports_external.string().describe("Local cache path where marketplace manifest is stored"),
    lastUpdated: exports_external.string().describe("ISO 8601 timestamp of last marketplace refresh"),
    autoUpdate: exports_external.boolean().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
  }));
  KnownMarketplacesFileSchema = lazySchema(() => exports_external.record(exports_external.string(), KnownMarketplaceSchema()));
});

// src/services/mcp/mcpStringUtils.ts
function mcpInfoFromString(toolString) {
  const parts = toolString.split("__");
  const [mcpPart, serverName, ...toolNameParts] = parts;
  if (mcpPart !== "mcp" || !serverName) {
    return null;
  }
  const toolName = toolNameParts.length > 0 ? toolNameParts.join("__") : undefined;
  return { serverName, toolName };
}
function getMcpPrefix(serverName) {
  return `mcp__${normalizeNameForMCP(serverName)}__`;
}
function buildMcpToolName(serverName, toolName) {
  return `${getMcpPrefix(serverName)}${normalizeNameForMCP(toolName)}`;
}
function getToolNameForPermissionCheck(tool) {
  return tool.mcpInfo ? buildMcpToolName(tool.mcpInfo.serverName, tool.mcpInfo.toolName) : tool.name;
}
function getMcpDisplayName(fullName, serverName) {
  const prefix = `mcp__${normalizeNameForMCP(serverName)}__`;
  return fullName.replace(prefix, "");
}
function extractMcpToolDisplayName(userFacingName) {
  let withoutSuffix = userFacingName.replace(/\s*\(MCP\)\s*$/, "");
  withoutSuffix = withoutSuffix.trim();
  const dashIndex = withoutSuffix.indexOf(" - ");
  if (dashIndex !== -1) {
    const displayName = withoutSuffix.substring(dashIndex + 3).trim();
    return displayName;
  }
  return withoutSuffix;
}
var init_mcpStringUtils = __esm(() => {
  init_normalization();
});

// packages/builtin-tools/src/tools/AgentTool/constants.ts
var AGENT_TOOL_NAME = "Agent", LEGACY_AGENT_TOOL_NAME = "Task", VERIFICATION_AGENT_TYPE = "verification", ONE_SHOT_BUILTIN_AGENT_TYPES;
var init_constants2 = __esm(() => {
  ONE_SHOT_BUILTIN_AGENT_TYPES = new Set([
    "Explore",
    "Plan"
  ]);
});

// packages/builtin-tools/src/tools/TaskOutputTool/constants.ts
var TASK_OUTPUT_TOOL_NAME = "TaskOutput";
var init_constants3 = () => {};

// packages/builtin-tools/src/tools/TaskStopTool/prompt.ts
var TASK_STOP_TOOL_NAME = "TaskStop", DESCRIPTION = `
- Stops a running background task by its ID
- Takes a task_id parameter identifying the task to stop
- Returns a success or failure status
- Use this tool when you need to terminate a long-running task
`;
var init_prompt = () => {};

// packages/builtin-tools/src/tools/BriefTool/prompt.ts
var exports_prompt = {};
__export(exports_prompt, {
  LEGACY_BRIEF_TOOL_NAME: () => LEGACY_BRIEF_TOOL_NAME,
  DESCRIPTION: () => DESCRIPTION2,
  BRIEF_TOOL_PROMPT: () => BRIEF_TOOL_PROMPT,
  BRIEF_TOOL_NAME: () => BRIEF_TOOL_NAME,
  BRIEF_PROACTIVE_SECTION: () => BRIEF_PROACTIVE_SECTION
});
var BRIEF_TOOL_NAME = "SendUserMessage", LEGACY_BRIEF_TOOL_NAME = "Brief", DESCRIPTION2 = "Send a message to the user", BRIEF_TOOL_PROMPT = `Send a message the user will read. Text outside this tool is visible in the detail view, but most won't open it \u2014 the answer lives here.

\`message\` supports markdown. \`attachments\` takes file paths (absolute or cwd-relative) for images, diffs, logs.

\`status\` labels intent: 'normal' when replying to what they just asked; 'proactive' when you're initiating \u2014 a scheduled task finished, a blocker surfaced during background work, you need input on something they haven't asked about. Set it honestly; downstream routing uses it.`, BRIEF_PROACTIVE_SECTION;
var init_prompt2 = __esm(() => {
  BRIEF_PROACTIVE_SECTION = `## Talking to the user

${BRIEF_TOOL_NAME} is where your replies go. Text outside it is visible if the user expands the detail view, but most won't \u2014 assume unread. Anything you want them to actually see goes through ${BRIEF_TOOL_NAME}. The failure mode: the real answer lives in plain text while ${BRIEF_TOOL_NAME} just says "done!" \u2014 they see "done!" and miss everything.

So: every time the user says something, the reply they actually read comes through ${BRIEF_TOOL_NAME}. Even for "hi". Even for "thanks".

If you can answer right away, send the answer. If you need to go look \u2014 run a command, read files, check something \u2014 ack first in one line ("On it \u2014 checking the test output"), then work, then send the result. Without the ack they're staring at a spinner.

For longer work: ack \u2192 work \u2192 result. Between those, send a checkpoint when something useful happened \u2014 a decision you made, a surprise you hit, a phase boundary. Skip the filler ("running tests...") \u2014 a checkpoint earns its place by carrying information.

Keep messages tight \u2014 the decision, the file:line, the PR number. Second person always ("your config"), never third.`;
});

// src/utils/permissions/permissionRuleParser.ts
function normalizeLegacyToolName(name) {
  return LEGACY_TOOL_NAME_ALIASES[name] ?? name;
}
function getLegacyToolNames(canonicalName) {
  const result = [];
  for (const [legacy, canonical] of Object.entries(LEGACY_TOOL_NAME_ALIASES)) {
    if (canonical === canonicalName)
      result.push(legacy);
  }
  return result;
}
function escapeRuleContent(content) {
  return content.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
function unescapeRuleContent(content) {
  return content.replace(/\\\(/g, "(").replace(/\\\)/g, ")").replace(/\\\\/g, "\\");
}
function permissionRuleValueFromString(ruleString) {
  const openParenIndex = findFirstUnescapedChar(ruleString, "(");
  if (openParenIndex === -1) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  const closeParenIndex = findLastUnescapedChar(ruleString, ")");
  if (closeParenIndex === -1 || closeParenIndex <= openParenIndex) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  if (closeParenIndex !== ruleString.length - 1) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  const toolName = ruleString.substring(0, openParenIndex);
  const rawContent = ruleString.substring(openParenIndex + 1, closeParenIndex);
  if (!toolName) {
    return { toolName: normalizeLegacyToolName(ruleString) };
  }
  if (rawContent === "" || rawContent === "*") {
    return { toolName: normalizeLegacyToolName(toolName) };
  }
  const ruleContent = unescapeRuleContent(rawContent);
  return { toolName: normalizeLegacyToolName(toolName), ruleContent };
}
function permissionRuleValueToString(ruleValue) {
  if (!ruleValue.ruleContent) {
    return ruleValue.toolName;
  }
  const escapedContent = escapeRuleContent(ruleValue.ruleContent);
  return `${ruleValue.toolName}(${escapedContent})`;
}
function findFirstUnescapedChar(str, char) {
  for (let i = 0;i < str.length; i++) {
    if (str[i] === char) {
      let backslashCount = 0;
      let j = i - 1;
      while (j >= 0 && str[j] === "\\") {
        backslashCount++;
        j--;
      }
      if (backslashCount % 2 === 0) {
        return i;
      }
    }
  }
  return -1;
}
function findLastUnescapedChar(str, char) {
  for (let i = str.length - 1;i >= 0; i--) {
    if (str[i] === char) {
      let backslashCount = 0;
      let j = i - 1;
      while (j >= 0 && str[j] === "\\") {
        backslashCount++;
        j--;
      }
      if (backslashCount % 2 === 0) {
        return i;
      }
    }
  }
  return -1;
}
var BRIEF_TOOL_NAME2, LEGACY_TOOL_NAME_ALIASES;
var init_permissionRuleParser = __esm(() => {
  init_constants2();
  init_constants3();
  init_prompt();
  BRIEF_TOOL_NAME2 = (init_prompt2(), __toCommonJS(exports_prompt)).BRIEF_TOOL_NAME;
  LEGACY_TOOL_NAME_ALIASES = {
    Task: AGENT_TOOL_NAME,
    KillShell: TASK_STOP_TOOL_NAME,
    AgentOutputTool: TASK_OUTPUT_TOOL_NAME,
    BashOutputTool: TASK_OUTPUT_TOOL_NAME,
    ...BRIEF_TOOL_NAME2 ? { Brief: BRIEF_TOOL_NAME2 } : {}
  };
});

// src/utils/settings/toolValidationConfig.ts
function isFilePatternTool(toolName) {
  return TOOL_VALIDATION_CONFIG.filePatternTools.includes(toolName);
}
function isBashPrefixTool(toolName) {
  return TOOL_VALIDATION_CONFIG.bashPrefixTools.includes(toolName);
}
function getCustomValidation(toolName) {
  return TOOL_VALIDATION_CONFIG.customValidation[toolName];
}
var TOOL_VALIDATION_CONFIG;
var init_toolValidationConfig = __esm(() => {
  TOOL_VALIDATION_CONFIG = {
    filePatternTools: [
      "Read",
      "Write",
      "Edit",
      "Glob",
      "NotebookRead",
      "NotebookEdit"
    ],
    bashPrefixTools: ["Bash"],
    customValidation: {
      WebSearch: (content) => {
        if (content.includes("*") || content.includes("?")) {
          return {
            valid: false,
            error: "WebSearch does not support wildcards",
            suggestion: "Use exact search terms without * or ?",
            examples: ["WebSearch(claude ai)", "WebSearch(typescript tutorial)"]
          };
        }
        return { valid: true };
      },
      WebFetch: (content) => {
        if (content.includes("://") || content.startsWith("http")) {
          return {
            valid: false,
            error: "WebFetch permissions use domain format, not URLs",
            suggestion: 'Use "domain:hostname" format',
            examples: [
              "WebFetch(domain:example.com)",
              "WebFetch(domain:github.com)"
            ]
          };
        }
        if (!content.startsWith("domain:")) {
          return {
            valid: false,
            error: 'WebFetch permissions must use "domain:" prefix',
            suggestion: 'Use "domain:hostname" format',
            examples: [
              "WebFetch(domain:example.com)",
              "WebFetch(domain:*.google.com)"
            ]
          };
        }
        return { valid: true };
      }
    }
  };
});

// src/utils/settings/permissionValidation.ts
function isEscaped(str, index2) {
  let backslashCount = 0;
  let j = index2 - 1;
  while (j >= 0 && str[j] === "\\") {
    backslashCount++;
    j--;
  }
  return backslashCount % 2 !== 0;
}
function countUnescapedChar(str, char) {
  let count2 = 0;
  for (let i = 0;i < str.length; i++) {
    if (str[i] === char && !isEscaped(str, i)) {
      count2++;
    }
  }
  return count2;
}
function hasUnescapedEmptyParens(str) {
  for (let i = 0;i < str.length - 1; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      if (!isEscaped(str, i)) {
        return true;
      }
    }
  }
  return false;
}
function validatePermissionRule(rule) {
  if (!rule || rule.trim() === "") {
    return { valid: false, error: "Permission rule cannot be empty" };
  }
  const openCount = countUnescapedChar(rule, "(");
  const closeCount = countUnescapedChar(rule, ")");
  if (openCount !== closeCount) {
    return {
      valid: false,
      error: "Mismatched parentheses",
      suggestion: "Ensure all opening parentheses have matching closing parentheses"
    };
  }
  if (hasUnescapedEmptyParens(rule)) {
    const toolName = rule.substring(0, rule.indexOf("("));
    if (!toolName) {
      return {
        valid: false,
        error: "Empty parentheses with no tool name",
        suggestion: "Specify a tool name before the parentheses"
      };
    }
    return {
      valid: false,
      error: "Empty parentheses",
      suggestion: `Either specify a pattern or use just "${toolName}" without parentheses`,
      examples: [`${toolName}`, `${toolName}(some-pattern)`]
    };
  }
  const parsed = permissionRuleValueFromString(rule);
  const mcpInfo = mcpInfoFromString(parsed.toolName);
  if (mcpInfo) {
    if (parsed.ruleContent !== undefined || countUnescapedChar(rule, "(") > 0) {
      return {
        valid: false,
        error: "MCP rules do not support patterns in parentheses",
        suggestion: `Use "${parsed.toolName}" without parentheses, or use "mcp__${mcpInfo.serverName}__*" for all tools`,
        examples: [
          `mcp__${mcpInfo.serverName}`,
          `mcp__${mcpInfo.serverName}__*`,
          mcpInfo.toolName && mcpInfo.toolName !== "*" ? `mcp__${mcpInfo.serverName}__${mcpInfo.toolName}` : undefined
        ].filter(Boolean)
      };
    }
    return { valid: true };
  }
  if (!parsed.toolName || parsed.toolName.length === 0) {
    return { valid: false, error: "Tool name cannot be empty" };
  }
  if (parsed.toolName[0] !== parsed.toolName[0]?.toUpperCase()) {
    return {
      valid: false,
      error: "Tool names must start with uppercase",
      suggestion: `Use "${capitalize(String(parsed.toolName))}"`
    };
  }
  const customValidation = getCustomValidation(parsed.toolName);
  if (customValidation && parsed.ruleContent !== undefined) {
    const customResult = customValidation(parsed.ruleContent);
    if (!customResult.valid) {
      return customResult;
    }
  }
  if (isBashPrefixTool(parsed.toolName) && parsed.ruleContent !== undefined) {
    const content = parsed.ruleContent;
    if (content.includes(":*") && !content.endsWith(":*")) {
      return {
        valid: false,
        error: "The :* pattern must be at the end",
        suggestion: "Move :* to the end for prefix matching, or use * for wildcard matching",
        examples: [
          "Bash(npm run:*) - prefix matching (legacy)",
          "Bash(npm run *) - wildcard matching"
        ]
      };
    }
    if (content === ":*") {
      return {
        valid: false,
        error: "Prefix cannot be empty before :*",
        suggestion: "Specify a command prefix before :*",
        examples: ["Bash(npm:*)", "Bash(git:*)"]
      };
    }
  }
  if (isFilePatternTool(parsed.toolName) && parsed.ruleContent !== undefined) {
    const content = parsed.ruleContent;
    if (content.includes(":*")) {
      return {
        valid: false,
        error: 'The ":*" syntax is only for Bash prefix rules',
        suggestion: 'Use glob patterns like "*" or "**" for file matching',
        examples: [
          `${parsed.toolName}(*.ts) - matches .ts files`,
          `${parsed.toolName}(src/**) - matches all files in src`,
          `${parsed.toolName}(**/*.test.ts) - matches test files`
        ]
      };
    }
    if (content.includes("*") && !content.match(/^\*|\*$|\*\*|\/\*|\*\.|\*\)/) && !content.includes("**")) {
      return {
        valid: false,
        error: "Wildcard placement might be incorrect",
        suggestion: "Wildcards are typically used at path boundaries",
        examples: [
          `${parsed.toolName}(*.js) - all .js files`,
          `${parsed.toolName}(src/*) - all files directly in src`,
          `${parsed.toolName}(src/**) - all files recursively in src`
        ]
      };
    }
  }
  return { valid: true };
}
var PermissionRuleSchema;
var init_permissionValidation = __esm(() => {
  init_v4();
  init_mcpStringUtils();
  init_lazySchema();
  init_permissionRuleParser();
  init_stringUtils();
  init_toolValidationConfig();
  PermissionRuleSchema = lazySchema(() => exports_external.string().superRefine((val, ctx) => {
    const result = validatePermissionRule(val);
    if (!result.valid) {
      let message = result.error;
      if (result.suggestion) {
        message += `. ${result.suggestion}`;
      }
      if (result.examples && result.examples.length > 0) {
        message += `. Examples: ${result.examples.join(", ")}`;
      }
      ctx.addIssue({
        code: exports_external.ZodIssueCode.custom,
        message,
        params: { received: val }
      });
    }
  }));
});

// src/utils/settings/types.ts
function isMcpServerNameEntry(entry) {
  return "serverName" in entry && entry.serverName !== undefined;
}
function isMcpServerCommandEntry(entry) {
  return "serverCommand" in entry && entry.serverCommand !== undefined;
}
function isMcpServerUrlEntry(entry) {
  return "serverUrl" in entry && entry.serverUrl !== undefined;
}
var EnvironmentVariablesSchema, PermissionsSchema, ExtraKnownMarketplaceSchema, AllowedMcpServerEntrySchema, DeniedMcpServerEntrySchema, CUSTOMIZATION_SURFACES, SettingsSchema;
var init_types2 = __esm(() => {
  init_v4();
  init_sandboxTypes();
  init_envUtils();
  init_lazySchema();
  init_PermissionMode();
  init_schemas();
  init_constants();
  init_permissionValidation();
  init_hooks();
  init_hooks();
  init_array();
  EnvironmentVariablesSchema = lazySchema(() => exports_external.record(exports_external.string(), exports_external.coerce.string()));
  PermissionsSchema = lazySchema(() => exports_external.object({
    allow: exports_external.array(PermissionRuleSchema()).optional().describe("List of permission rules for allowed operations"),
    deny: exports_external.array(PermissionRuleSchema()).optional().describe("List of permission rules for denied operations"),
    ask: exports_external.array(PermissionRuleSchema()).optional().describe("List of permission rules that should always prompt for confirmation"),
    defaultMode: exports_external.enum(PERMISSION_MODES).optional().describe("Default permission mode when MiMo Code needs access"),
    disableBypassPermissionsMode: exports_external.enum(["disable"]).optional().describe("Disable the ability to bypass permission prompts"),
    ...{
      disableAutoMode: exports_external.enum(["disable"]).optional().describe("Disable auto mode")
    },
    additionalDirectories: exports_external.array(exports_external.string()).optional().describe("Additional directories to include in the permission scope")
  }).passthrough());
  ExtraKnownMarketplaceSchema = lazySchema(() => exports_external.object({
    source: MarketplaceSourceSchema().describe("Where to fetch the marketplace from"),
    installLocation: exports_external.string().optional().describe("Local cache path where marketplace manifest is stored (auto-generated if not provided)"),
    autoUpdate: exports_external.boolean().optional().describe("Whether to automatically update this marketplace and its installed plugins on startup")
  }));
  AllowedMcpServerEntrySchema = lazySchema(() => exports_external.object({
    serverName: exports_external.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that users are allowed to configure"),
    serverCommand: exports_external.array(exports_external.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for allowed stdio servers"),
    serverUrl: exports_external.string().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers')
  }).refine((data) => {
    const defined = count([
      data.serverName !== undefined,
      data.serverCommand !== undefined,
      data.serverUrl !== undefined
    ], Boolean);
    return defined === 1;
  }, {
    message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
  }));
  DeniedMcpServerEntrySchema = lazySchema(() => exports_external.object({
    serverName: exports_external.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that is explicitly blocked"),
    serverCommand: exports_external.array(exports_external.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for blocked stdio servers"),
    serverUrl: exports_external.string().optional().describe('URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers')
  }).refine((data) => {
    const defined = count([
      data.serverName !== undefined,
      data.serverCommand !== undefined,
      data.serverUrl !== undefined
    ], Boolean);
    return defined === 1;
  }, {
    message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"'
  }));
  CUSTOMIZATION_SURFACES = [
    "skills",
    "agents",
    "hooks",
    "mcp"
  ];
  SettingsSchema = lazySchema(() => exports_external.object({
    $schema: exports_external.literal(CLAUDE_CODE_SETTINGS_SCHEMA_URL).optional().describe("JSON Schema reference for MiMo Code settings"),
    apiKeyHelper: exports_external.string().optional().describe("Path to a script that outputs authentication values"),
    awsCredentialExport: exports_external.string().optional().describe("Path to a script that exports AWS credentials"),
    awsAuthRefresh: exports_external.string().optional().describe("Path to a script that refreshes AWS authentication"),
    gcpAuthRefresh: exports_external.string().optional().describe("Command to refresh GCP authentication (e.g., gcloud auth application-default login)"),
    ...isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_XAA) ? {
      xaaIdp: exports_external.object({
        issuer: exports_external.string().url().describe("IdP issuer URL for OIDC discovery"),
        clientId: exports_external.string().describe("MiMo Code's client_id registered at the IdP"),
        callbackPort: exports_external.number().int().positive().optional().describe("Fixed loopback callback port for the IdP OIDC login. " + "Only needed if the IdP does not honor RFC 8252 port-any matching.")
      }).optional().describe("XAA (SEP-990) IdP connection. Configure once; all XAA-enabled MCP servers reuse this.")
    } : {},
    fileSuggestion: exports_external.object({
      type: exports_external.literal("command"),
      command: exports_external.string()
    }).optional().describe("Custom file suggestion configuration for @ mentions"),
    respectGitignore: exports_external.boolean().optional().describe("Whether file picker should respect .gitignore files (default: true). " + "Note: .ignore files are always respected."),
    cleanupPeriodDays: exports_external.number().nonnegative().int().optional().describe("Number of days to retain chat transcripts (default: 30). Setting to 0 disables session persistence entirely: no transcripts are written and existing transcripts are deleted at startup."),
    env: EnvironmentVariablesSchema().optional().describe("Environment variables to set for MiMo Code sessions"),
    attribution: exports_external.object({
      commit: exports_external.string().optional().describe("Attribution text for git commits, including any trailers. " + "Empty string hides attribution."),
      pr: exports_external.string().optional().describe("Attribution text for pull request descriptions. " + "Empty string hides attribution.")
    }).optional().describe("Customize attribution text for commits and PRs. " + "Each field defaults to the standard MiMo Code attribution if not set."),
    includeCoAuthoredBy: exports_external.boolean().optional().describe("Deprecated: Use attribution instead. " + "Whether to include MiMo's co-authored by attribution in commits and PRs (defaults to true)"),
    includeGitInstructions: exports_external.boolean().optional().describe("Include built-in commit and PR workflow instructions in MiMo's system prompt (default: true)"),
    permissions: PermissionsSchema().optional().describe("Tool usage permissions configuration"),
    modelType: exports_external.enum(["anthropic", "openai", "gemini", "grok"]).optional().describe('API provider type. "anthropic" uses the Anthropic API (default), "openai" uses the OpenAI Chat Completions API, "gemini" uses the Gemini API, and "grok" uses the xAI Grok API (OpenAI-compatible). ' + 'When set to "openai", configure OPENAI_API_KEY, OPENAI_BASE_URL, and OPENAI_MODEL. When set to "gemini", configure GEMINI_API_KEY and optional GEMINI_BASE_URL. When set to "grok", configure GROK_API_KEY (or XAI_API_KEY), optional GROK_BASE_URL, GROK_MODEL, and GROK_MODEL_MAP.'),
    model: exports_external.string().optional().describe("Override the default model used by MiMo Code"),
    availableModels: exports_external.array(exports_external.string()).optional().describe("Allowlist of models that users can select. " + 'Accepts family aliases ("opus" allows any opus version), ' + 'version prefixes ("opus-4-5" allows only that version), ' + "and full model IDs. " + "If undefined, all models are available. If empty array, only the default model is available. " + "Typically set in managed settings by enterprise administrators."),
    modelOverrides: exports_external.record(exports_external.string(), exports_external.string()).optional().describe('Override mapping from Anthropic model ID (e.g. "claude-opus-4-6") to provider-specific ' + "model ID (e.g. a Bedrock inference profile ARN). Typically set in managed settings by " + "enterprise administrators."),
    enableAllProjectMcpServers: exports_external.boolean().optional().describe("Whether to automatically approve all MCP servers in the project"),
    enabledMcpjsonServers: exports_external.array(exports_external.string()).optional().describe("List of approved MCP servers from .mcp.json"),
    disabledMcpjsonServers: exports_external.array(exports_external.string()).optional().describe("List of rejected MCP servers from .mcp.json"),
    allowedMcpServers: exports_external.array(AllowedMcpServerEntrySchema()).optional().describe("Enterprise allowlist of MCP servers that can be used. " + "Applies to all scopes including enterprise servers from managed-mcp.json. " + "If undefined, all servers are allowed. If empty array, no servers are allowed. " + "Denylist takes precedence - if a server is on both lists, it is denied."),
    deniedMcpServers: exports_external.array(DeniedMcpServerEntrySchema()).optional().describe("Enterprise denylist of MCP servers that are explicitly blocked. " + "If a server is on the denylist, it will be blocked across all scopes including enterprise. " + "Denylist takes precedence over allowlist - if a server is on both lists, it is denied."),
    hooks: HooksSchema().optional().describe("Custom commands to run before/after tool executions"),
    worktree: exports_external.object({
      symlinkDirectories: exports_external.array(exports_external.string()).optional().describe("Directories to symlink from main repository to worktrees to avoid disk bloat. " + "Must be explicitly configured - no directories are symlinked by default. " + 'Common examples: "node_modules", ".cache", ".bin"'),
      sparsePaths: exports_external.array(exports_external.string()).optional().describe("Directories to include when creating worktrees, via git sparse-checkout (cone mode). " + "Dramatically faster in large monorepos \u2014 only the listed paths are written to disk.")
    }).optional().describe("Git worktree configuration for --worktree flag."),
    disableAllHooks: exports_external.boolean().optional().describe("Disable all hooks and statusLine execution"),
    defaultShell: exports_external.enum(["bash", "powershell"]).optional().describe("Default shell for input-box ! commands. " + "Defaults to 'bash' on all platforms (no Windows auto-flip)."),
    allowManagedHooksOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), only hooks from managed settings run. " + "User, project, and local hooks are ignored."),
    allowedHttpHookUrls: exports_external.array(exports_external.string()).optional().describe("Allowlist of URL patterns that HTTP hooks may target. " + 'Supports * as a wildcard (e.g. "https://hooks.example.com/*"). ' + "When set, HTTP hooks with non-matching URLs are blocked. " + "If undefined, all URLs are allowed. If empty array, no HTTP hooks are allowed. " + "Arrays merge across settings sources (same semantics as allowedMcpServers)."),
    httpHookAllowedEnvVars: exports_external.array(exports_external.string()).optional().describe("Allowlist of environment variable names HTTP hooks may interpolate into headers. " + "When set, each hook's effective allowedEnvVars is the intersection with this list. " + "If undefined, no restriction is applied. " + "Arrays merge across settings sources (same semantics as allowedMcpServers)."),
    allowManagedPermissionRulesOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), only permission rules (allow/deny/ask) from managed settings are respected. " + "User, project, local, and CLI argument permission rules are ignored."),
    allowManagedMcpServersOnly: exports_external.boolean().optional().describe("When true (and set in managed settings), allowedMcpServers is only read from managed settings. " + "deniedMcpServers still merges from all sources, so users can deny servers for themselves. " + "Users can still add their own MCP servers, but only the admin-defined allowlist applies."),
    strictPluginOnlyCustomization: exports_external.preprocess((v) => Array.isArray(v) ? v.filter((x) => CUSTOMIZATION_SURFACES.includes(x)) : v, exports_external.union([exports_external.boolean(), exports_external.array(exports_external.enum(CUSTOMIZATION_SURFACES))])).optional().catch(undefined).describe("When set in managed settings, blocks non-plugin customization sources for the listed surfaces. " + 'Array form locks specific surfaces (e.g. ["skills", "hooks"]); `true` locks all four; `false` is an explicit no-op. ' + "Blocked: ~/.claude/{surface}/, .claude/{surface}/ (project), settings.json hooks, .mcp.json. " + "NOT blocked: managed (policySettings) sources, plugin-provided customizations. " + "Composes with strictKnownMarketplaces for end-to-end admin control \u2014 plugins gated by " + "marketplace allowlist, everything else blocked here."),
    statusLine: exports_external.object({
      type: exports_external.literal("command"),
      command: exports_external.string(),
      padding: exports_external.number().optional()
    }).optional().describe("Custom status line display configuration"),
    enabledPlugins: exports_external.record(exports_external.string(), exports_external.union([exports_external.array(exports_external.string()), exports_external.boolean(), exports_external.undefined()])).optional().describe('Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints.'),
    extraKnownMarketplaces: exports_external.record(exports_external.string(), ExtraKnownMarketplaceSchema()).check((ctx) => {
      for (const [key, entry] of Object.entries(ctx.value)) {
        if (entry.source.source === "settings" && entry.source.name !== key) {
          ctx.issues.push({
            code: "custom",
            input: entry.source.name,
            path: [key, "source", "name"],
            message: `Settings-sourced marketplace name must match its extraKnownMarketplaces key ` + `(got key "${key}" but source.name "${entry.source.name}")`
          });
        }
      }
    }).optional().describe("Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources."),
    strictKnownMarketplaces: exports_external.array(MarketplaceSourceSchema()).optional().describe("Enterprise strict list of allowed marketplace sources. When set in managed settings, " + "ONLY these exact sources can be added as marketplaces. The check happens BEFORE " + "downloading, so blocked sources never touch the filesystem. " + "Note: this is a policy gate only \u2014 it does NOT register marketplaces. " + "To pre-register allowed marketplaces for users, also set extraKnownMarketplaces."),
    blockedMarketplaces: exports_external.array(MarketplaceSourceSchema()).optional().describe("Enterprise blocklist of marketplace sources. When set in managed settings, " + "these exact sources are blocked from being added as marketplaces. The check happens BEFORE " + "downloading, so blocked sources never touch the filesystem."),
    forceLoginMethod: exports_external.enum(["claudeai", "console"]).optional().describe('Force a specific login method: "claudeai" for MiMo Token Plan, "console" for Console billing'),
    forceLoginOrgUUID: exports_external.string().optional().describe("Organization UUID to use for OAuth login"),
    otelHeadersHelper: exports_external.string().optional().describe("Path to a script that outputs OpenTelemetry headers"),
    outputStyle: exports_external.string().optional().describe("Controls the output style for assistant responses"),
    language: exports_external.string().optional().describe('Preferred language for MiMo responses and voice dictation (e.g., "japanese", "spanish")'),
    skipWebFetchPreflight: exports_external.boolean().optional().describe("Skip the WebFetch blocklist check for enterprise environments with restrictive security policies"),
    sandbox: SandboxSettingsSchema().optional(),
    feedbackSurveyRate: exports_external.number().min(0).max(1).optional().describe("Probability (0\u20131) that the session quality survey appears when eligible. 0.05 is a reasonable starting point."),
    spinnerTipsEnabled: exports_external.boolean().optional().describe("Whether to show tips in the spinner"),
    spinnerVerbs: exports_external.object({
      mode: exports_external.enum(["append", "replace"]),
      verbs: exports_external.array(exports_external.string())
    }).optional().describe('Customize spinner verbs. mode: "append" adds verbs to defaults, "replace" uses only your verbs.'),
    spinnerTipsOverride: exports_external.object({
      excludeDefault: exports_external.boolean().optional(),
      tips: exports_external.array(exports_external.string())
    }).optional().describe("Override spinner tips. tips: array of tip strings. excludeDefault: if true, only show custom tips (default: false)."),
    syntaxHighlightingDisabled: exports_external.boolean().optional().describe("Whether to disable syntax highlighting in diffs"),
    terminalTitleFromRename: exports_external.boolean().optional().describe("Whether /rename updates the terminal tab title (defaults to true). Set to false to keep auto-generated topic titles."),
    alwaysThinkingEnabled: exports_external.boolean().optional().describe("When false, thinking is disabled. When absent or true, thinking is " + "enabled automatically for supported models."),
    effortLevel: exports_external.enum(process.env.USER_TYPE === "ant" ? ["low", "medium", "high", "xhigh", "max"] : ["low", "medium", "high", "xhigh"]).optional().catch(undefined).describe("Persisted effort level for supported models."),
    advisorModel: exports_external.string().optional().describe("Advisor model for the server-side advisor tool."),
    fastMode: exports_external.boolean().optional().describe("When true, fast mode is enabled. When absent or false, fast mode is off."),
    fastModePerSessionOptIn: exports_external.boolean().optional().describe("When true, fast mode does not persist across sessions. Each session starts with fast mode off."),
    promptSuggestionEnabled: exports_external.boolean().optional().describe("When false, prompt suggestions are disabled. When absent or true, " + "prompt suggestions are enabled."),
    poorMode: exports_external.boolean().optional().describe("When true, poor mode is active \u2014 extract_memories and prompt_suggestion are disabled to save tokens."),
    showClearContextOnPlanAccept: exports_external.boolean().optional().describe('When true, the plan-approval dialog offers a "clear context" option. Defaults to false.'),
    agent: exports_external.string().optional().describe("Name of an agent (built-in or custom) to use for the main thread. " + "Applies the agent's system prompt, tool restrictions, and model."),
    companyAnnouncements: exports_external.array(exports_external.string()).optional().describe("Company announcements to display at startup (one will be randomly selected if multiple are provided)"),
    pluginConfigs: exports_external.record(exports_external.string(), exports_external.object({
      mcpServers: exports_external.record(exports_external.string(), exports_external.record(exports_external.string(), exports_external.union([
        exports_external.string(),
        exports_external.number(),
        exports_external.boolean(),
        exports_external.array(exports_external.string())
      ]))).optional().describe("User configuration values for MCP servers keyed by server name"),
      options: exports_external.record(exports_external.string(), exports_external.union([
        exports_external.string(),
        exports_external.number(),
        exports_external.boolean(),
        exports_external.array(exports_external.string())
      ])).optional().describe("Non-sensitive option values from plugin manifest userConfig, keyed by option name. Sensitive values go to secure storage instead.")
    })).optional().describe("Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)"),
    remote: exports_external.object({
      defaultEnvironmentId: exports_external.string().optional().describe("Default environment ID to use for remote sessions")
    }).optional().describe("Remote session configuration"),
    autoUpdatesChannel: exports_external.enum(["latest", "stable"]).optional().describe("Release channel for auto-updates (latest or stable)"),
    ...{
      disableDeepLinkRegistration: exports_external.enum(["disable"]).optional().describe("Prevent claude-cli:// protocol handler registration with the OS")
    },
    minimumVersion: exports_external.string().optional().describe("Minimum version to stay on - prevents downgrades when switching to stable channel"),
    plansDirectory: exports_external.string().optional().describe("Custom directory for plan files, relative to project root. " + "If not set, defaults to ~/.claude/plans/"),
    ...process.env.USER_TYPE === "ant" ? {
      classifierPermissionsEnabled: exports_external.boolean().optional().describe("Enable AI-based classification for Bash(prompt:...) permission rules")
    } : {},
    ...{
      minSleepDurationMs: exports_external.number().nonnegative().int().optional().describe("Minimum duration in milliseconds that the Sleep tool must sleep for. " + "Useful for throttling proactive tick frequency."),
      maxSleepDurationMs: exports_external.number().int().min(-1).optional().describe("Maximum duration in milliseconds that the Sleep tool can sleep for. " + "Set to -1 for indefinite sleep (waits for user input). " + "Useful for limiting idle time in remote/managed environments.")
    },
    ...{
      voiceEnabled: exports_external.boolean().optional().describe("Enable voice mode (hold-to-talk dictation)"),
      voiceProvider: exports_external.enum(["anthropic", "doubao"]).optional().describe('Voice STT backend: "anthropic" (default) or "doubao" (Doubao ASR)')
    },
    ...{
      assistant: exports_external.boolean().optional().describe("Start MiMo in assistant mode (custom system prompt, brief view, scheduled check-in skills)"),
      assistantName: exports_external.string().optional().describe("Display name for the assistant, shown in the claude.ai session list")
    },
    channelsEnabled: exports_external.boolean().optional().describe("Teams/Enterprise opt-in for channel notifications (MCP servers with the " + "claude/channel capability pushing inbound messages). Default off. " + "Set true to allow; users then select servers via --channels."),
    allowedChannelPlugins: exports_external.array(exports_external.object({
      marketplace: exports_external.string(),
      plugin: exports_external.string()
    })).optional().describe("Teams/Enterprise allowlist of channel plugins. When set, " + "replaces the default Anthropic allowlist \u2014 admins decide which " + "plugins may push inbound messages. Undefined falls back to the default. " + "Requires channelsEnabled: true."),
    ...{
      defaultView: exports_external.enum(["chat", "transcript"]).optional().describe("Default transcript view: chat (SendUserMessage checkpoints only) or transcript (full)")
    },
    prefersReducedMotion: exports_external.boolean().optional().describe("Reduce or disable animations for accessibility (spinner shimmer, flash effects, etc.)"),
    autoMemoryEnabled: exports_external.boolean().optional().describe("Enable auto-memory for this project. When false, MiMo will not read from or write to the auto-memory directory."),
    autoMemoryDirectory: exports_external.string().optional().describe("Custom directory path for auto-memory storage. Supports ~/ prefix for home directory expansion. Ignored if set in projectSettings (checked-in .claude/settings.json) for security. When unset, defaults to ~/.claude/projects/<sanitized-cwd>/memory/."),
    autoDreamEnabled: exports_external.boolean().optional().describe("Enable background memory consolidation (auto-dream). When set, overrides the server-side default."),
    showThinkingSummaries: exports_external.boolean().optional().describe("Show thinking summaries in the transcript view (ctrl+o). Default: false."),
    skipDangerousModePermissionPrompt: exports_external.boolean().optional().describe("Whether the user has accepted the bypass permissions mode dialog"),
    ...{
      skipAutoPermissionPrompt: exports_external.boolean().optional().describe("Whether the user has accepted the auto mode opt-in dialog"),
      useAutoModeDuringPlan: exports_external.boolean().optional().describe("Whether plan mode uses auto mode semantics when auto mode is available (default: true)"),
      autoMode: exports_external.object({
        allow: exports_external.array(exports_external.string()).optional().describe("Rules for the auto mode classifier allow section"),
        soft_deny: exports_external.array(exports_external.string()).optional().describe("Rules for the auto mode classifier deny section"),
        ...process.env.USER_TYPE === "ant" ? {
          deny: exports_external.array(exports_external.string()).optional()
        } : {},
        environment: exports_external.array(exports_external.string()).optional().describe("Entries for the auto mode classifier environment section")
      }).optional().describe("Auto mode classifier prompt customization")
    },
    disableAutoMode: exports_external.enum(["disable"]).optional().describe("Disable auto mode"),
    sshConfigs: exports_external.array(exports_external.object({
      id: exports_external.string().describe("Unique identifier for this SSH config. Used to match configs across settings sources."),
      name: exports_external.string().describe("Display name for the SSH connection"),
      sshHost: exports_external.string().describe('SSH host in format "user@hostname" or "hostname", or a host alias from ~/.ssh/config'),
      sshPort: exports_external.number().int().optional().describe("SSH port (default: 22)"),
      sshIdentityFile: exports_external.string().optional().describe("Path to SSH identity file (private key)"),
      startDirectory: exports_external.string().optional().describe("Default working directory on the remote host. " + "Supports tilde expansion (e.g. ~/projects). " + "If not specified, defaults to the remote user home directory. " + "Can be overridden by the [dir] positional argument in `claude ssh <config> [dir]`.")
    })).optional().describe("SSH connection configurations for remote environments. " + "Typically set in managed settings by enterprise administrators " + "to pre-configure SSH connections for team members."),
    claudeMdExcludes: exports_external.array(exports_external.string()).optional().describe("Glob patterns or absolute paths of CLAUDE.md files to exclude from loading. " + "Patterns are matched against absolute file paths using picomatch. " + "Only applies to User, Project, and Local memory types (Managed/policy files cannot be excluded). " + 'Examples: "/home/user/monorepo/CLAUDE.md", "**/code/CLAUDE.md", "**/some-dir/.claude/rules/**"'),
    pluginTrustMessage: exports_external.string().optional().describe("Custom message to append to the plugin trust warning shown before installation. " + "Only read from policy settings (managed-settings.json / MDM). " + "Useful for enterprise administrators to add organization-specific context " + '(e.g., "All plugins from our internal marketplace are vetted and approved.").')
  }).passthrough());
});

// src/utils/settings/schemaOutput.ts
function generateSettingsJSONSchema() {
  const jsonSchema = toJSONSchema(SettingsSchema(), { unrepresentable: "any" });
  return jsonStringify(jsonSchema, null, 2);
}
var init_schemaOutput = __esm(() => {
  init_v4();
  init_slowOperations();
  init_types2();
});

// src/utils/settings/validationTips.ts
function getValidationTip(context3) {
  const matcher = TIP_MATCHERS.find((m) => m.matches(context3));
  if (!matcher)
    return null;
  const tip = { ...matcher.tip };
  if (context3.code === "invalid_value" && context3.enumValues && !tip.suggestion) {
    tip.suggestion = `Valid values: ${context3.enumValues.map((v) => `"${v}"`).join(", ")}`;
  }
  if (!tip.docLink && context3.path) {
    const pathPrefix = context3.path.split(".")[0];
    if (pathPrefix) {
      tip.docLink = PATH_DOC_LINKS[pathPrefix];
    }
  }
  return tip;
}
var DOCUMENTATION_BASE = "https://code.claude.com/docs/en", TIP_MATCHERS, PATH_DOC_LINKS;
var init_validationTips = __esm(() => {
  TIP_MATCHERS = [
    {
      matches: (ctx) => ctx.path === "permissions.defaultMode" && ctx.code === "invalid_value",
      tip: {
        suggestion: 'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
        docLink: `${DOCUMENTATION_BASE}/iam#permission-modes`
      }
    },
    {
      matches: (ctx) => ctx.path === "apiKeyHelper" && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"'
      }
    },
    {
      matches: (ctx) => ctx.path === "cleanupPeriodDays" && ctx.code === "too_small" && ctx.expected === "0",
      tip: {
        suggestion: "Must be 0 or greater. Set a positive number for days to retain transcripts (default is 30). Setting 0 disables session persistence entirely: no transcripts are written and existing transcripts are deleted at startup."
      }
    },
    {
      matches: (ctx) => ctx.path.startsWith("env.") && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
        docLink: `${DOCUMENTATION_BASE}/settings#environment-variables`
      }
    },
    {
      matches: (ctx) => (ctx.path === "permissions.allow" || ctx.path === "permissions.deny") && ctx.code === "invalid_type" && ctx.expected === "array",
      tip: {
        suggestion: 'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.'
      }
    },
    {
      matches: (ctx) => ctx.path.includes("hooks") && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Hooks use a matcher + hooks array. The matcher is a string: a tool name ("Bash"), pipe-separated list ("Edit|Write"), or empty to match all. Example: {"PostToolUse": [{"matcher": "Edit|Write", "hooks": [{"type": "command", "command": "echo Done"}]}]}'
      }
    },
    {
      matches: (ctx) => ctx.code === "invalid_type" && ctx.expected === "boolean",
      tip: {
        suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true'
      }
    },
    {
      matches: (ctx) => ctx.code === "unrecognized_keys",
      tip: {
        suggestion: "Check for typos or refer to the documentation for valid fields",
        docLink: `${DOCUMENTATION_BASE}/settings`
      }
    },
    {
      matches: (ctx) => ctx.code === "invalid_value" && ctx.enumValues !== undefined,
      tip: {
        suggestion: undefined
      }
    },
    {
      matches: (ctx) => ctx.code === "invalid_type" && ctx.expected === "object" && ctx.received === null && ctx.path === "",
      tip: {
        suggestion: "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error."
      }
    },
    {
      matches: (ctx) => ctx.path === "permissions.additionalDirectories" && ctx.code === "invalid_type",
      tip: {
        suggestion: 'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
        docLink: `${DOCUMENTATION_BASE}/iam#working-directories`
      }
    }
  ];
  PATH_DOC_LINKS = {
    permissions: `${DOCUMENTATION_BASE}/iam#configuring-permissions`,
    env: `${DOCUMENTATION_BASE}/settings#environment-variables`,
    hooks: `${DOCUMENTATION_BASE}/hooks`
  };
});

// src/utils/settings/validation.ts
function isInvalidTypeIssue(issue) {
  return issue.code === "invalid_type";
}
function isInvalidValueIssue(issue) {
  return issue.code === "invalid_value";
}
function isUnrecognizedKeysIssue(issue) {
  return issue.code === "unrecognized_keys";
}
function isTooSmallIssue(issue) {
  return issue.code === "too_small";
}
function getReceivedType(value) {
  if (value === null)
    return "null";
  if (value === undefined)
    return "undefined";
  if (Array.isArray(value))
    return "array";
  return typeof value;
}
function extractReceivedFromMessage(msg) {
  const match = msg.match(/received (\w+)/);
  return match ? match[1] : undefined;
}
function formatZodError(error, filePath) {
  return error.issues.map((issue) => {
    const path2 = issue.path.map(String).join(".");
    let message = issue.message;
    let expected;
    let enumValues;
    let expectedValue;
    let receivedValue;
    let invalidValue;
    if (isInvalidValueIssue(issue)) {
      enumValues = issue.values.map((v) => String(v));
      expectedValue = enumValues.join(" | ");
      receivedValue = undefined;
      invalidValue = undefined;
    } else if (isInvalidTypeIssue(issue)) {
      expectedValue = issue.expected;
      const receivedType = extractReceivedFromMessage(issue.message);
      receivedValue = receivedType ?? getReceivedType(issue.input);
      invalidValue = receivedType ?? getReceivedType(issue.input);
    } else if (isTooSmallIssue(issue)) {
      expectedValue = String(issue.minimum);
    } else if (issue.code === "custom" && "params" in issue) {
      const params = issue.params;
      receivedValue = params.received;
      invalidValue = receivedValue;
    }
    const tip = getValidationTip({
      path: path2,
      code: issue.code,
      expected: expectedValue,
      received: receivedValue,
      enumValues,
      message: issue.message,
      value: receivedValue
    });
    if (isInvalidValueIssue(issue)) {
      expected = enumValues?.map((v) => `"${v}"`).join(", ");
      message = `Invalid value. Expected one of: ${expected}`;
    } else if (isInvalidTypeIssue(issue)) {
      const receivedType = extractReceivedFromMessage(issue.message) ?? getReceivedType(issue.input);
      if (issue.expected === "object" && receivedType === "null" && path2 === "") {
        message = "Invalid or malformed JSON";
      } else {
        message = `Expected ${issue.expected}, but received ${receivedType}`;
      }
    } else if (isUnrecognizedKeysIssue(issue)) {
      const keys = issue.keys.join(", ");
      message = `Unrecognized ${plural(issue.keys.length, "field")}: ${keys}`;
    } else if (isTooSmallIssue(issue)) {
      message = `Number must be greater than or equal to ${issue.minimum}`;
      expected = String(issue.minimum);
    }
    return {
      file: filePath,
      path: path2,
      message,
      expected,
      invalidValue,
      suggestion: tip?.suggestion,
      docLink: tip?.docLink
    };
  });
}
function validateSettingsFileContent(content) {
  try {
    const jsonData = jsonParse(content);
    const result = SettingsSchema().strict().safeParse(jsonData);
    if (result.success) {
      return { isValid: true };
    }
    const errors = formatZodError(result.error, "settings");
    const errorMessage2 = `Settings validation failed:
` + errors.map((err) => `- ${err.path}: ${err.message}`).join(`
`);
    return {
      isValid: false,
      error: errorMessage2,
      fullSchema: generateSettingsJSONSchema()
    };
  } catch (parseError) {
    return {
      isValid: false,
      error: `Invalid JSON: ${parseError instanceof Error ? parseError.message : "Unknown parsing error"}`,
      fullSchema: generateSettingsJSONSchema()
    };
  }
}
function filterInvalidPermissionRules(data, filePath) {
  if (!data || typeof data !== "object")
    return [];
  const obj = data;
  if (!obj.permissions || typeof obj.permissions !== "object")
    return [];
  const perms = obj.permissions;
  const warnings = [];
  for (const key of ["allow", "deny", "ask"]) {
    const rules = perms[key];
    if (!Array.isArray(rules))
      continue;
    perms[key] = rules.filter((rule) => {
      if (typeof rule !== "string") {
        warnings.push({
          file: filePath,
          path: `permissions.${key}`,
          message: `Non-string value in ${key} array was removed`,
          invalidValue: rule
        });
        return false;
      }
      const result = validatePermissionRule(rule);
      if (!result.valid) {
        let message = `Invalid permission rule "${rule}" was skipped`;
        if (result.error)
          message += `: ${result.error}`;
        if (result.suggestion)
          message += `. ${result.suggestion}`;
        warnings.push({
          file: filePath,
          path: `permissions.${key}`,
          message,
          invalidValue: rule
        });
        return false;
      }
      return true;
    });
  }
  return warnings;
}
var init_validation2 = __esm(() => {
  init_slowOperations();
  init_stringUtils();
  init_permissionValidation();
  init_schemaOutput();
  init_types2();
  init_validationTips();
});

// src/utils/settings/mdm/constants.ts
import { homedir as homedir4, userInfo } from "os";
import { join as join10 } from "path";
function getMacOSPlistPaths() {
  let username = "";
  try {
    username = userInfo().username;
  } catch {}
  const paths = [];
  if (username) {
    paths.push({
      path: `/Library/Managed Preferences/${username}/${MACOS_PREFERENCE_DOMAIN}.plist`,
      label: "per-user managed preferences"
    });
  }
  paths.push({
    path: `/Library/Managed Preferences/${MACOS_PREFERENCE_DOMAIN}.plist`,
    label: "device-level managed preferences"
  });
  if (process.env.USER_TYPE === "ant") {
    paths.push({
      path: join10(homedir4(), "Library", "Preferences", `${MACOS_PREFERENCE_DOMAIN}.plist`),
      label: "user preferences (ant-only)"
    });
  }
  return paths;
}
var MACOS_PREFERENCE_DOMAIN = "com.anthropic.claudecode", WINDOWS_REGISTRY_KEY_PATH_HKLM = "HKLM\\SOFTWARE\\Policies\\ClaudeCode", WINDOWS_REGISTRY_KEY_PATH_HKCU = "HKCU\\SOFTWARE\\Policies\\ClaudeCode", WINDOWS_REGISTRY_VALUE_NAME = "Settings", PLUTIL_PATH = "/usr/bin/plutil", PLUTIL_ARGS_PREFIX, MDM_SUBPROCESS_TIMEOUT_MS = 5000;
var init_constants4 = __esm(() => {
  PLUTIL_ARGS_PREFIX = ["-convert", "json", "-o", "-", "--"];
});

// src/utils/settings/mdm/rawRead.ts
import { execFile } from "child_process";
import { existsSync as existsSync2 } from "fs";
function execFilePromise(cmd, args) {
  return new Promise((resolve4) => {
    execFile(cmd, args, { encoding: "utf-8", timeout: MDM_SUBPROCESS_TIMEOUT_MS }, (err, stdout) => {
      resolve4({ stdout: stdout ?? "", code: err ? 1 : 0 });
    });
  });
}
function fireRawRead() {
  return (async () => {
    if (process.platform === "darwin") {
      const plistPaths = getMacOSPlistPaths();
      const allResults = await Promise.all(plistPaths.map(async ({ path: path2, label }) => {
        if (!existsSync2(path2)) {
          return { stdout: "", label, ok: false };
        }
        const { stdout, code } = await execFilePromise(PLUTIL_PATH, [
          ...PLUTIL_ARGS_PREFIX,
          path2
        ]);
        return { stdout, label, ok: code === 0 && !!stdout };
      }));
      const winner = allResults.find((r) => r.ok);
      return {
        plistStdouts: winner ? [{ stdout: winner.stdout, label: winner.label }] : [],
        hklmStdout: null,
        hkcuStdout: null
      };
    }
    if (process.platform === "win32") {
      const [hklm, hkcu] = await Promise.all([
        execFilePromise("reg", [
          "query",
          WINDOWS_REGISTRY_KEY_PATH_HKLM,
          "/v",
          WINDOWS_REGISTRY_VALUE_NAME
        ]),
        execFilePromise("reg", [
          "query",
          WINDOWS_REGISTRY_KEY_PATH_HKCU,
          "/v",
          WINDOWS_REGISTRY_VALUE_NAME
        ])
      ]);
      return {
        plistStdouts: null,
        hklmStdout: hklm.code === 0 ? hklm.stdout : null,
        hkcuStdout: hkcu.code === 0 ? hkcu.stdout : null
      };
    }
    return { plistStdouts: null, hklmStdout: null, hkcuStdout: null };
  })();
}
function startMdmRawRead() {
  if (rawReadPromise)
    return;
  rawReadPromise = fireRawRead();
}
function getMdmRawReadPromise() {
  return rawReadPromise;
}
var rawReadPromise = null;
var init_rawRead = __esm(() => {
  init_constants4();
});

// src/utils/settings/mdm/settings.ts
import { join as join11 } from "path";
function startMdmSettingsLoad() {
  if (mdmLoadPromise)
    return;
  mdmLoadPromise = (async () => {
    profileCheckpoint("mdm_load_start");
    const startTime = Date.now();
    const rawPromise = getMdmRawReadPromise() ?? fireRawRead();
    const { mdm, hkcu } = consumeRawReadResult(await rawPromise);
    mdmCache = mdm;
    hkcuCache = hkcu;
    profileCheckpoint("mdm_load_end");
    const duration = Date.now() - startTime;
    logForDebugging(`MDM settings load completed in ${duration}ms`);
    if (Object.keys(mdm.settings).length > 0) {
      logForDebugging(`MDM settings found: ${Object.keys(mdm.settings).join(", ")}`);
      try {
        logForDiagnosticsNoPII("info", "mdm_settings_loaded", {
          duration_ms: duration,
          key_count: Object.keys(mdm.settings).length,
          error_count: mdm.errors.length
        });
      } catch {}
    }
  })();
}
async function ensureMdmSettingsLoaded() {
  if (!mdmLoadPromise) {
    startMdmSettingsLoad();
  }
  await mdmLoadPromise;
}
function getMdmSettings() {
  return mdmCache ?? EMPTY_RESULT;
}
function getHkcuSettings() {
  return hkcuCache ?? EMPTY_RESULT;
}
function setMdmSettingsCache(mdm, hkcu) {
  mdmCache = mdm;
  hkcuCache = hkcu;
}
async function refreshMdmSettings() {
  const raw = await fireRawRead();
  return consumeRawReadResult(raw);
}
function parseCommandOutputAsSettings(stdout, sourcePath) {
  const data = safeParseJSON(stdout, false);
  if (!data || typeof data !== "object") {
    return { settings: {}, errors: [] };
  }
  const ruleWarnings = filterInvalidPermissionRules(data, sourcePath);
  const parseResult = SettingsSchema().safeParse(data);
  if (!parseResult.success) {
    const errors = formatZodError(parseResult.error, sourcePath);
    return { settings: {}, errors: [...ruleWarnings, ...errors] };
  }
  return { settings: parseResult.data, errors: ruleWarnings };
}
function parseRegQueryStdout(stdout, valueName = "Settings") {
  const lines = stdout.split(/\r?\n/);
  const escaped = valueName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^\\s+${escaped}\\s+REG_(?:EXPAND_)?SZ\\s+(.*)$`, "i");
  for (const line of lines) {
    const match = line.match(re);
    if (match && match[1]) {
      return match[1].trimEnd();
    }
  }
  return null;
}
function consumeRawReadResult(raw) {
  if (raw.plistStdouts && raw.plistStdouts.length > 0) {
    const { stdout, label } = raw.plistStdouts[0];
    const result = parseCommandOutputAsSettings(stdout, label);
    if (Object.keys(result.settings).length > 0) {
      return { mdm: result, hkcu: EMPTY_RESULT };
    }
  }
  if (raw.hklmStdout) {
    const jsonString = parseRegQueryStdout(raw.hklmStdout);
    if (jsonString) {
      const result = parseCommandOutputAsSettings(jsonString, `Registry: ${WINDOWS_REGISTRY_KEY_PATH_HKLM}\\${WINDOWS_REGISTRY_VALUE_NAME}`);
      if (Object.keys(result.settings).length > 0) {
        return { mdm: result, hkcu: EMPTY_RESULT };
      }
    }
  }
  if (hasManagedSettingsFile()) {
    return { mdm: EMPTY_RESULT, hkcu: EMPTY_RESULT };
  }
  if (raw.hkcuStdout) {
    const jsonString = parseRegQueryStdout(raw.hkcuStdout);
    if (jsonString) {
      const result = parseCommandOutputAsSettings(jsonString, `Registry: ${WINDOWS_REGISTRY_KEY_PATH_HKCU}\\${WINDOWS_REGISTRY_VALUE_NAME}`);
      return { mdm: EMPTY_RESULT, hkcu: result };
    }
  }
  return { mdm: EMPTY_RESULT, hkcu: EMPTY_RESULT };
}
function hasManagedSettingsFile() {
  try {
    const filePath = join11(getManagedFilePath(), "managed-settings.json");
    const content = readFileSync(filePath);
    const data = safeParseJSON(content, false);
    if (data && typeof data === "object" && Object.keys(data).length > 0) {
      return true;
    }
  } catch {}
  try {
    const dropInDir = getManagedSettingsDropInDir();
    const entries = getFsImplementation().readdirSync(dropInDir);
    for (const d of entries) {
      if (!(d.isFile() || d.isSymbolicLink()) || !d.name.endsWith(".json") || d.name.startsWith(".")) {
        continue;
      }
      try {
        const content = readFileSync(join11(dropInDir, d.name));
        const data = safeParseJSON(content, false);
        if (data && typeof data === "object" && Object.keys(data).length > 0) {
          return true;
        }
      } catch {}
    }
  } catch {}
  return false;
}
var EMPTY_RESULT, mdmCache = null, hkcuCache = null, mdmLoadPromise = null;
var init_settings = __esm(() => {
  init_debug();
  init_diagLogs();
  init_fileRead();
  init_fsOperations();
  init_json();
  init_startupProfiler();
  init_managedPath();
  init_types2();
  init_validation2();
  init_constants4();
  init_rawRead();
  EMPTY_RESULT = Object.freeze({ settings: {}, errors: [] });
});

// src/utils/settings/settings.ts
import { dirname as dirname5, join as join12, resolve as resolve4 } from "path";
function getManagedSettingsFilePath() {
  return join12(getManagedFilePath(), "managed-settings.json");
}
function loadManagedFileSettings() {
  const errors = [];
  let merged = {};
  let found = false;
  const { settings, errors: baseErrors } = parseSettingsFile(getManagedSettingsFilePath());
  errors.push(...baseErrors);
  if (settings && Object.keys(settings).length > 0) {
    merged = mergeWith_default(merged, settings, settingsMergeCustomizer);
    found = true;
  }
  const dropInDir = getManagedSettingsDropInDir();
  try {
    const entries = getFsImplementation().readdirSync(dropInDir).filter((d) => (d.isFile() || d.isSymbolicLink()) && d.name.endsWith(".json") && !d.name.startsWith(".")).map((d) => d.name).sort();
    for (const name of entries) {
      const { settings: settings2, errors: fileErrors } = parseSettingsFile(join12(dropInDir, name));
      errors.push(...fileErrors);
      if (settings2 && Object.keys(settings2).length > 0) {
        merged = mergeWith_default(merged, settings2, settingsMergeCustomizer);
        found = true;
      }
    }
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "ENOENT" && code !== "ENOTDIR") {
      logError(e);
    }
  }
  return { settings: found ? merged : null, errors };
}
function getManagedFileSettingsPresence() {
  const { settings: base } = parseSettingsFile(getManagedSettingsFilePath());
  const hasBase = !!base && Object.keys(base).length > 0;
  let hasDropIns = false;
  const dropInDir = getManagedSettingsDropInDir();
  try {
    hasDropIns = getFsImplementation().readdirSync(dropInDir).some((d) => (d.isFile() || d.isSymbolicLink()) && d.name.endsWith(".json") && !d.name.startsWith("."));
  } catch {}
  return { hasBase, hasDropIns };
}
function handleFileSystemError(error, path2) {
  if (typeof error === "object" && error && "code" in error && error.code === "ENOENT") {
    logForDebugging(`Broken symlink or missing file encountered for settings.json at path: ${path2}`);
  } else {
    logError(error);
  }
}
function parseSettingsFile(path2) {
  const cached = getCachedParsedFile(path2);
  if (cached) {
    return {
      settings: cached.settings ? clone(cached.settings) : null,
      errors: cached.errors
    };
  }
  const result = parseSettingsFileUncached(path2);
  setCachedParsedFile(path2, result);
  return {
    settings: result.settings ? clone(result.settings) : null,
    errors: result.errors
  };
}
function parseSettingsFileUncached(path2) {
  try {
    const { resolvedPath } = safeResolvePath(getFsImplementation(), path2);
    const content = readFileSync(resolvedPath);
    if (content.trim() === "") {
      return { settings: {}, errors: [] };
    }
    const data = safeParseJSON(content, false);
    const ruleWarnings = filterInvalidPermissionRules(data, path2);
    const result = SettingsSchema().safeParse(data);
    if (!result.success) {
      const errors = formatZodError(result.error, path2);
      return { settings: null, errors: [...ruleWarnings, ...errors] };
    }
    return { settings: result.data, errors: ruleWarnings };
  } catch (error) {
    handleFileSystemError(error, path2);
    return { settings: null, errors: [] };
  }
}
function getSettingsRootPathForSource(source) {
  switch (source) {
    case "userSettings":
      return resolve4(getClaudeConfigHomeDir());
    case "policySettings":
    case "projectSettings":
    case "localSettings": {
      return resolve4(getOriginalCwd());
    }
    case "flagSettings": {
      const path2 = getFlagSettingsPath();
      return path2 ? dirname5(resolve4(path2)) : resolve4(getOriginalCwd());
    }
  }
}
function getUserSettingsFilePath() {
  if (getUseCoworkPlugins() || isEnvTruthy(process.env.CLAUDE_CODE_USE_COWORK_PLUGINS)) {
    return "cowork_settings.json";
  }
  return "settings.json";
}
function getSettingsFilePathForSource(source) {
  switch (source) {
    case "userSettings":
      return join12(getSettingsRootPathForSource(source), getUserSettingsFilePath());
    case "projectSettings":
    case "localSettings": {
      return join12(getSettingsRootPathForSource(source), getRelativeSettingsFilePathForSource(source));
    }
    case "policySettings":
      return getManagedSettingsFilePath();
    case "flagSettings": {
      return getFlagSettingsPath();
    }
  }
}
function getRelativeSettingsFilePathForSource(source) {
  switch (source) {
    case "projectSettings":
      return join12(".claude", "settings.json");
    case "localSettings":
      return join12(".claude", "settings.local.json");
  }
}
function getSettingsForSource(source) {
  const cached = getCachedSettingsForSource(source);
  if (cached !== undefined)
    return cached;
  const result = getSettingsForSourceUncached(source);
  setCachedSettingsForSource(source, result);
  return result;
}
function getSettingsForSourceUncached(source) {
  if (source === "policySettings") {
    const remoteSettings = getRemoteManagedSettingsSyncFromCache();
    if (remoteSettings && Object.keys(remoteSettings).length > 0) {
      return remoteSettings;
    }
    const mdmResult = getMdmSettings();
    if (Object.keys(mdmResult.settings).length > 0) {
      return mdmResult.settings;
    }
    const { settings: fileSettings2 } = loadManagedFileSettings();
    if (fileSettings2) {
      return fileSettings2;
    }
    const hkcu = getHkcuSettings();
    if (Object.keys(hkcu.settings).length > 0) {
      return hkcu.settings;
    }
    return null;
  }
  const settingsFilePath = getSettingsFilePathForSource(source);
  const { settings: fileSettings } = settingsFilePath ? parseSettingsFile(settingsFilePath) : { settings: null };
  if (source === "flagSettings") {
    const inlineSettings = getFlagSettingsInline();
    if (inlineSettings) {
      const parsed = SettingsSchema().safeParse(inlineSettings);
      if (parsed.success) {
        return mergeWith_default(fileSettings || {}, parsed.data, settingsMergeCustomizer);
      }
    }
  }
  return fileSettings;
}
function getPolicySettingsOrigin() {
  const remoteSettings = getRemoteManagedSettingsSyncFromCache();
  if (remoteSettings && Object.keys(remoteSettings).length > 0) {
    return "remote";
  }
  const mdmResult = getMdmSettings();
  if (Object.keys(mdmResult.settings).length > 0) {
    return getPlatform() === "macos" ? "plist" : "hklm";
  }
  const { settings: fileSettings } = loadManagedFileSettings();
  if (fileSettings) {
    return "file";
  }
  const hkcu = getHkcuSettings();
  if (Object.keys(hkcu.settings).length > 0) {
    return "hkcu";
  }
  return null;
}
function updateSettingsForSource(source, settings) {
  if (source === "policySettings" || source === "flagSettings") {
    return { error: null };
  }
  const filePath = getSettingsFilePathForSource(source);
  if (!filePath) {
    return { error: null };
  }
  try {
    getFsImplementation().mkdirSync(dirname5(filePath));
    let existingSettings = getSettingsForSourceUncached(source);
    if (!existingSettings) {
      let content = null;
      try {
        content = readFileSync(filePath);
      } catch (e) {
        if (!isENOENT(e)) {
          throw e;
        }
      }
      if (content !== null) {
        const rawData = safeParseJSON(content);
        if (rawData === null) {
          return {
            error: new Error(`Invalid JSON syntax in settings file at ${filePath}`)
          };
        }
        if (rawData && typeof rawData === "object") {
          existingSettings = rawData;
          logForDebugging(`Using raw settings from ${filePath} due to validation failure`);
        }
      }
    }
    const updatedSettings = mergeWith_default(existingSettings || {}, settings, (_objValue, srcValue, key, object) => {
      if (srcValue === undefined && object && typeof key === "string") {
        delete object[key];
        return;
      }
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return;
    });
    markInternalWrite(filePath);
    writeFileSyncAndFlush_DEPRECATED(filePath, jsonStringify(updatedSettings, null, 2) + `
`);
    resetSettingsCache();
    if (source === "localSettings") {
      addFileGlobRuleToGitignore(getRelativeSettingsFilePathForSource("localSettings"), getOriginalCwd());
    }
  } catch (e) {
    const error = new Error(`Failed to read raw settings from ${filePath}: ${e}`);
    logError(error);
    return { error };
  }
  return { error: null };
}
function mergeArrays(targetArray, sourceArray) {
  return uniq([...targetArray, ...sourceArray]);
}
function settingsMergeCustomizer(objValue, srcValue) {
  if (Array.isArray(objValue) && Array.isArray(srcValue)) {
    return mergeArrays(objValue, srcValue);
  }
  return;
}
function getManagedSettingsKeysForLogging(settings) {
  const validSettings = SettingsSchema().strip().parse(settings);
  const keysToExpand = ["permissions", "sandbox", "hooks"];
  const allKeys = [];
  const validNestedKeys = {
    permissions: new Set([
      "allow",
      "deny",
      "ask",
      "defaultMode",
      "disableBypassPermissionsMode",
      ...["disableAutoMode"],
      "additionalDirectories"
    ]),
    sandbox: new Set([
      "enabled",
      "failIfUnavailable",
      "allowUnsandboxedCommands",
      "network",
      "filesystem",
      "ignoreViolations",
      "excludedCommands",
      "autoAllowBashIfSandboxed",
      "enableWeakerNestedSandbox",
      "enableWeakerNetworkIsolation",
      "ripgrep"
    ]),
    hooks: new Set([
      "PreToolUse",
      "PostToolUse",
      "Notification",
      "UserPromptSubmit",
      "SessionStart",
      "SessionEnd",
      "Stop",
      "SubagentStop",
      "PreCompact",
      "PostCompact",
      "TeammateIdle",
      "TaskCreated",
      "TaskCompleted"
    ])
  };
  for (const key of Object.keys(validSettings)) {
    if (keysToExpand.includes(key) && validSettings[key] && typeof validSettings[key] === "object") {
      const nestedObj = validSettings[key];
      const validKeys = validNestedKeys[key];
      if (validKeys) {
        for (const nestedKey of Object.keys(nestedObj)) {
          if (validKeys.has(nestedKey)) {
            allKeys.push(`${key}.${nestedKey}`);
          }
        }
      }
    } else {
      allKeys.push(key);
    }
  }
  return allKeys.sort();
}
function loadSettingsFromDisk() {
  if (isLoadingSettings) {
    return { settings: {}, errors: [] };
  }
  const startTime = Date.now();
  profileCheckpoint("loadSettingsFromDisk_start");
  logForDiagnosticsNoPII("info", "settings_load_started");
  isLoadingSettings = true;
  try {
    const pluginSettings = getPluginSettingsBase();
    let mergedSettings = {};
    if (pluginSettings) {
      mergedSettings = mergeWith_default(mergedSettings, pluginSettings, settingsMergeCustomizer);
    }
    const allErrors = [];
    const seenErrors = new Set;
    const seenFiles = new Set;
    for (const source of getEnabledSettingSources()) {
      if (source === "policySettings") {
        let policySettings = null;
        const policyErrors = [];
        const remoteSettings = getRemoteManagedSettingsSyncFromCache();
        if (remoteSettings && Object.keys(remoteSettings).length > 0) {
          const result = SettingsSchema().safeParse(remoteSettings);
          if (result.success) {
            policySettings = result.data;
          } else {
            policyErrors.push(...formatZodError(result.error, "remote managed settings"));
          }
        }
        if (!policySettings) {
          const mdmResult = getMdmSettings();
          if (Object.keys(mdmResult.settings).length > 0) {
            policySettings = mdmResult.settings;
          }
          policyErrors.push(...mdmResult.errors);
        }
        if (!policySettings) {
          const { settings, errors } = loadManagedFileSettings();
          if (settings) {
            policySettings = settings;
          }
          policyErrors.push(...errors);
        }
        if (!policySettings) {
          const hkcu = getHkcuSettings();
          if (Object.keys(hkcu.settings).length > 0) {
            policySettings = hkcu.settings;
          }
          policyErrors.push(...hkcu.errors);
        }
        if (policySettings) {
          mergedSettings = mergeWith_default(mergedSettings, policySettings, settingsMergeCustomizer);
        }
        for (const error of policyErrors) {
          const errorKey = `${error.file}:${error.path}:${error.message}`;
          if (!seenErrors.has(errorKey)) {
            seenErrors.add(errorKey);
            allErrors.push(error);
          }
        }
        continue;
      }
      const filePath = getSettingsFilePathForSource(source);
      if (filePath) {
        const resolvedPath = resolve4(filePath);
        if (!seenFiles.has(resolvedPath)) {
          seenFiles.add(resolvedPath);
          const { settings, errors } = parseSettingsFile(filePath);
          for (const error of errors) {
            const errorKey = `${error.file}:${error.path}:${error.message}`;
            if (!seenErrors.has(errorKey)) {
              seenErrors.add(errorKey);
              allErrors.push(error);
            }
          }
          if (settings) {
            mergedSettings = mergeWith_default(mergedSettings, settings, settingsMergeCustomizer);
          }
        }
      }
      if (source === "flagSettings") {
        const inlineSettings = getFlagSettingsInline();
        if (inlineSettings) {
          const parsed = SettingsSchema().safeParse(inlineSettings);
          if (parsed.success) {
            mergedSettings = mergeWith_default(mergedSettings, parsed.data, settingsMergeCustomizer);
          }
        }
      }
    }
    logForDiagnosticsNoPII("info", "settings_load_completed", {
      duration_ms: Date.now() - startTime,
      source_count: seenFiles.size,
      error_count: allErrors.length
    });
    return { settings: mergedSettings, errors: allErrors };
  } finally {
    isLoadingSettings = false;
  }
}
function getInitialSettings() {
  const { settings } = getSettingsWithErrors();
  return settings || {};
}
function getSettingsWithSources() {
  resetSettingsCache();
  const sources = [];
  for (const source of getEnabledSettingSources()) {
    const settings = getSettingsForSource(source);
    if (settings && Object.keys(settings).length > 0) {
      sources.push({ source, settings });
    }
  }
  return { effective: getInitialSettings(), sources };
}
function getSettingsWithErrors() {
  const cached = getSessionSettingsCache();
  if (cached !== null) {
    return cached;
  }
  const result = loadSettingsFromDisk();
  profileCheckpoint("loadSettingsFromDisk_end");
  setSessionSettingsCache(result);
  return result;
}
function hasSkipDangerousModePermissionPrompt() {
  return !!(getSettingsForSource("userSettings")?.skipDangerousModePermissionPrompt || getSettingsForSource("localSettings")?.skipDangerousModePermissionPrompt || getSettingsForSource("flagSettings")?.skipDangerousModePermissionPrompt || getSettingsForSource("policySettings")?.skipDangerousModePermissionPrompt);
}
function hasAutoModeOptIn() {
  return true;
}
function getUseAutoModeDuringPlan() {
  if (true) {
    return getSettingsForSource("policySettings")?.useAutoModeDuringPlan !== false && getSettingsForSource("flagSettings")?.useAutoModeDuringPlan !== false && getSettingsForSource("userSettings")?.useAutoModeDuringPlan !== false && getSettingsForSource("localSettings")?.useAutoModeDuringPlan !== false;
  }
  return true;
}
function getAutoModeConfig() {
  if (true) {
    const schema = exports_external.object({
      allow: exports_external.array(exports_external.string()).optional(),
      soft_deny: exports_external.array(exports_external.string()).optional(),
      deny: exports_external.array(exports_external.string()).optional(),
      environment: exports_external.array(exports_external.string()).optional()
    });
    const allow = [];
    const soft_deny = [];
    const environment = [];
    for (const source of [
      "userSettings",
      "localSettings",
      "flagSettings",
      "policySettings"
    ]) {
      const settings = getSettingsForSource(source);
      if (!settings)
        continue;
      const result = schema.safeParse(settings.autoMode);
      if (result.success) {
        if (result.data.allow)
          allow.push(...result.data.allow);
        if (result.data.soft_deny)
          soft_deny.push(...result.data.soft_deny);
        if (process.env.USER_TYPE === "ant") {
          if (result.data.deny)
            soft_deny.push(...result.data.deny);
        }
        if (result.data.environment)
          environment.push(...result.data.environment);
      }
    }
    if (allow.length > 0 || soft_deny.length > 0 || environment.length > 0) {
      return {
        ...allow.length > 0 && { allow },
        ...soft_deny.length > 0 && { soft_deny },
        ...environment.length > 0 && { environment }
      };
    }
  }
  return;
}
function rawSettingsContainsKey(key) {
  for (const source of getEnabledSettingSources()) {
    if (source === "policySettings") {
      continue;
    }
    const filePath = getSettingsFilePathForSource(source);
    if (!filePath) {
      continue;
    }
    try {
      const { resolvedPath } = safeResolvePath(getFsImplementation(), filePath);
      const content = readFileSync(resolvedPath);
      if (!content.trim()) {
        continue;
      }
      const rawData = safeParseJSON(content, false);
      if (rawData && typeof rawData === "object" && key in rawData) {
        return true;
      }
    } catch (error) {
      handleFileSystemError(error, filePath);
    }
  }
  return false;
}
var isLoadingSettings = false, getSettings_DEPRECATED;
var init_settings2 = __esm(() => {
  init_mergeWith();
  init_v4();
  init_state();
  init_syncCacheState();
  init_array();
  init_debug();
  init_diagLogs();
  init_envUtils();
  init_errors();
  init_file();
  init_fileRead();
  init_fsOperations();
  init_gitignore();
  init_json();
  init_log();
  init_platform();
  init_slowOperations();
  init_startupProfiler();
  init_constants();
  init_internalWrites();
  init_managedPath();
  init_settings();
  init_settingsCache();
  init_types2();
  init_validation2();
  getSettings_DEPRECATED = getInitialSettings;
});

// src/utils/model/bedrock.ts
function findFirstMatch(profiles, substring) {
  return profiles.find((p) => p.includes(substring)) ?? null;
}
async function createBedrockClient() {
  const { BedrockClient } = await import("./chunk-pcy6f3ee.js");
  const region = getAWSRegion();
  const skipAuth = isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH);
  const clientConfig = {
    region,
    ...process.env.ANTHROPIC_BEDROCK_BASE_URL && {
      endpoint: process.env.ANTHROPIC_BEDROCK_BASE_URL
    },
    ...await getAWSClientProxyConfig(),
    ...skipAuth && {
      requestHandler: new (await import("./chunk-b5wjzfmm.js")).NodeHttpHandler,
      httpAuthSchemes: [
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: () => async () => ({}),
          signer: new (await import("./chunk-a594hx3b.js")).NoAuthSigner
        }
      ],
      httpAuthSchemeProvider: () => [{ schemeId: "smithy.api#noAuth" }]
    }
  };
  if (!skipAuth && !process.env.AWS_BEARER_TOKEN_BEDROCK) {
    const cachedCredentials = await refreshAndGetAwsCredentials();
    if (cachedCredentials) {
      clientConfig.credentials = {
        accessKeyId: cachedCredentials.accessKeyId,
        secretAccessKey: cachedCredentials.secretAccessKey,
        sessionToken: cachedCredentials.sessionToken
      };
    }
  }
  return new BedrockClient(clientConfig);
}
async function createBedrockRuntimeClient() {
  const { BedrockRuntimeClient } = await import("./chunk-zmh2wtbv.js");
  const region = getAWSRegion();
  const skipAuth = isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH);
  const clientConfig = {
    region,
    ...process.env.ANTHROPIC_BEDROCK_BASE_URL && {
      endpoint: process.env.ANTHROPIC_BEDROCK_BASE_URL
    },
    ...await getAWSClientProxyConfig(),
    ...skipAuth && {
      requestHandler: new (await import("./chunk-b5wjzfmm.js")).NodeHttpHandler,
      httpAuthSchemes: [
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: () => async () => ({}),
          signer: new (await import("./chunk-a594hx3b.js")).NoAuthSigner
        }
      ],
      httpAuthSchemeProvider: () => [{ schemeId: "smithy.api#noAuth" }]
    }
  };
  if (!skipAuth && !process.env.AWS_BEARER_TOKEN_BEDROCK) {
    const cachedCredentials = await refreshAndGetAwsCredentials();
    if (cachedCredentials) {
      clientConfig.credentials = {
        accessKeyId: cachedCredentials.accessKeyId,
        secretAccessKey: cachedCredentials.secretAccessKey,
        sessionToken: cachedCredentials.sessionToken
      };
    }
  }
  return new BedrockRuntimeClient(clientConfig);
}
function isFoundationModel(modelId) {
  return modelId.startsWith("anthropic.");
}
function extractModelIdFromArn(modelId) {
  if (!modelId.startsWith("arn:")) {
    return modelId;
  }
  const lastSlashIndex = modelId.lastIndexOf("/");
  if (lastSlashIndex === -1) {
    return modelId;
  }
  return modelId.substring(lastSlashIndex + 1);
}
function getBedrockRegionPrefix(modelId) {
  const effectiveModelId = extractModelIdFromArn(modelId);
  for (const prefix of BEDROCK_REGION_PREFIXES) {
    if (effectiveModelId.startsWith(`${prefix}.anthropic.`)) {
      return prefix;
    }
  }
  return;
}
function applyBedrockRegionPrefix(modelId, prefix) {
  const existingPrefix = getBedrockRegionPrefix(modelId);
  if (existingPrefix) {
    return modelId.replace(`${existingPrefix}.`, `${prefix}.`);
  }
  if (isFoundationModel(modelId)) {
    return `${prefix}.${modelId}`;
  }
  return modelId;
}
var getBedrockInferenceProfiles, getInferenceProfileBackingModel, BEDROCK_REGION_PREFIXES;
var init_bedrock = __esm(() => {
  init_memoize();
  init_auth2();
  init_envUtils();
  init_log();
  init_proxy();
  getBedrockInferenceProfiles = memoize_default(async function() {
    const [client2, { ListInferenceProfilesCommand }] = await Promise.all([
      createBedrockClient(),
      import("./chunk-pcy6f3ee.js")
    ]);
    const allProfiles = [];
    let nextToken;
    try {
      do {
        const command = new ListInferenceProfilesCommand({
          ...nextToken && { nextToken },
          typeEquals: "SYSTEM_DEFINED"
        });
        const response = await client2.send(command);
        if (response.inferenceProfileSummaries) {
          allProfiles.push(...response.inferenceProfileSummaries);
        }
        nextToken = response.nextToken;
      } while (nextToken);
      return allProfiles.filter((profile) => profile.inferenceProfileId?.includes("anthropic")).map((profile) => profile.inferenceProfileId).filter(Boolean);
    } catch (error) {
      logError(error);
      throw error;
    }
  });
  getInferenceProfileBackingModel = memoize_default(async function(profileId) {
    try {
      const [client2, { GetInferenceProfileCommand }] = await Promise.all([
        createBedrockClient(),
        import("./chunk-pcy6f3ee.js")
      ]);
      const command = new GetInferenceProfileCommand({
        inferenceProfileIdentifier: profileId
      });
      const response = await client2.send(command);
      if (!response.models || response.models.length === 0) {
        return null;
      }
      const primaryModel = response.models[0];
      if (!primaryModel?.modelArn) {
        return null;
      }
      const lastSlashIndex = primaryModel.modelArn.lastIndexOf("/");
      return lastSlashIndex >= 0 ? primaryModel.modelArn.substring(lastSlashIndex + 1) : primaryModel.modelArn;
    } catch (error) {
      logError(error);
      return null;
    }
  });
  BEDROCK_REGION_PREFIXES = ["us", "eu", "apac", "global"];
});

// src/utils/model/modelStrings.ts
function getBuiltinModelStrings(provider) {
  if (provider === "mimo") {
    return {
      haiku35: "mimo-v2.5",
      haiku45: "mimo-v2.5",
      sonnet35: "mimo-v2.5",
      sonnet37: "mimo-v2.5",
      sonnet40: "mimo-v2.5",
      sonnet45: "mimo-v2.5",
      sonnet46: "mimo-v2.5",
      opus40: "mimo-v2.5-pro",
      opus41: "mimo-v2.5-pro",
      opus45: "mimo-v2.5-pro",
      opus46: "mimo-v2.5-pro",
      opus47: "mimo-v2.5-pro"
    };
  }
  const out = {};
  for (const key of MODEL_KEYS) {
    out[key] = ALL_MODEL_CONFIGS[key][provider];
  }
  return out;
}
async function getBedrockModelStrings() {
  const fallback = getBuiltinModelStrings("bedrock");
  let profiles;
  try {
    profiles = await getBedrockInferenceProfiles();
  } catch (error) {
    logError(error);
    return fallback;
  }
  if (!profiles?.length) {
    return fallback;
  }
  const out = {};
  for (const key of MODEL_KEYS) {
    const needle = ALL_MODEL_CONFIGS[key].firstParty;
    out[key] = findFirstMatch(profiles, needle) || fallback[key];
  }
  return out;
}
function applyModelOverrides(ms) {
  const overrides = getInitialSettings().modelOverrides;
  if (!overrides) {
    return ms;
  }
  const out = { ...ms };
  for (const [canonicalId, override] of Object.entries(overrides)) {
    const key = CANONICAL_ID_TO_KEY[canonicalId];
    if (key && override) {
      out[key] = override;
    }
  }
  return out;
}
function resolveOverriddenModel(modelId) {
  let overrides;
  try {
    overrides = getInitialSettings().modelOverrides;
  } catch {
    return modelId;
  }
  if (!overrides) {
    return modelId;
  }
  for (const [canonicalId, override] of Object.entries(overrides)) {
    if (override === modelId) {
      return canonicalId;
    }
  }
  return modelId;
}
function initModelStrings() {
  const ms = getModelStrings();
  if (ms !== null) {
    return;
  }
  if (getAPIProvider() !== "bedrock") {
    setModelStrings(getBuiltinModelStrings(getAPIProvider()));
    return;
  }
  updateBedrockModelStrings();
}
function getModelStrings2() {
  const ms = getModelStrings();
  if (ms === null) {
    initModelStrings();
    return applyModelOverrides(getBuiltinModelStrings(getAPIProvider()));
  }
  return applyModelOverrides(ms);
}
async function ensureModelStringsInitialized() {
  const ms = getModelStrings();
  if (ms !== null) {
    return;
  }
  if (getAPIProvider() !== "bedrock") {
    setModelStrings(getBuiltinModelStrings(getAPIProvider()));
    return;
  }
  await updateBedrockModelStrings();
}
var MODEL_KEYS, updateBedrockModelStrings;
var init_modelStrings = __esm(() => {
  init_state();
  init_log();
  init_sequential();
  init_settings2();
  init_bedrock();
  init_configs();
  init_providers();
  MODEL_KEYS = Object.keys(ALL_MODEL_CONFIGS);
  updateBedrockModelStrings = sequential(async () => {
    if (getModelStrings() !== null) {
      return;
    }
    try {
      const ms = await getBedrockModelStrings();
      setModelStrings(ms);
    } catch (error) {
      logError(error);
    }
  });
});

// src/utils/billing.ts
function hasConsoleBillingAccess() {
  if (isEnvTruthy(process.env.DISABLE_COST_WARNINGS)) {
    return false;
  }
  const isSubscriber = isClaudeAISubscriber();
  if (isSubscriber)
    return false;
  const authSource = getAuthTokenSource();
  const hasApiKey = getAnthropicApiKey() !== null;
  if (!authSource.hasToken && !hasApiKey) {
    return false;
  }
  const config = getGlobalConfig();
  const orgRole = config.oauthAccount?.organizationRole;
  const workspaceRole = config.oauthAccount?.workspaceRole;
  if (!orgRole || !workspaceRole) {
    return false;
  }
  return ["admin", "billing"].includes(orgRole) || ["workspace_admin", "workspace_billing"].includes(workspaceRole);
}
function setMockBillingAccessOverride(value) {
  mockBillingAccessOverride = value;
}
function hasClaudeAiBillingAccess() {
  if (mockBillingAccessOverride !== null) {
    return mockBillingAccessOverride;
  }
  if (!isClaudeAISubscriber()) {
    return false;
  }
  const subscriptionType = getSubscriptionType();
  if (subscriptionType === "max" || subscriptionType === "pro") {
    return true;
  }
  const config = getGlobalConfig();
  const orgRole = config.oauthAccount?.organizationRole;
  return !!orgRole && ["admin", "billing", "owner", "primary_owner"].includes(orgRole);
}
var mockBillingAccessOverride = null;
var init_billing = __esm(() => {
  init_auth2();
  init_config();
  init_envUtils();
});

// src/services/mockRateLimits.ts
function getMockHeaderless429Message() {
  if (process.env.USER_TYPE !== "ant") {
    return null;
  }
  if (process.env.CLAUDE_MOCK_HEADERLESS_429) {
    return process.env.CLAUDE_MOCK_HEADERLESS_429;
  }
  if (!mockEnabled) {
    return null;
  }
  return mockHeaderless429Message;
}
function getMockHeaders() {
  if (!mockEnabled || process.env.USER_TYPE !== "ant" || Object.keys(mockHeaders).length === 0) {
    return null;
  }
  return mockHeaders;
}
function clearMockHeaders() {
  mockHeaders = {};
  exceededLimits = [];
  mockSubscriptionType = null;
  mockFastModeRateLimitDurationMs = null;
  mockFastModeRateLimitExpiresAt = null;
  mockHeaderless429Message = null;
  setMockBillingAccessOverride(null);
  mockEnabled = false;
}
function applyMockHeaders(headers) {
  const mock = getMockHeaders();
  if (!mock) {
    return headers;
  }
  const newHeaders = new globalThis.Headers(headers);
  Object.entries(mock).forEach(([key, value]) => {
    if (value !== undefined) {
      newHeaders.set(key, value);
    }
  });
  return newHeaders;
}
function shouldProcessMockLimits() {
  if (process.env.USER_TYPE !== "ant") {
    return false;
  }
  return mockEnabled || Boolean(process.env.CLAUDE_MOCK_HEADERLESS_429);
}
function getMockSubscriptionType() {
  if (!mockEnabled || process.env.USER_TYPE !== "ant") {
    return null;
  }
  return mockSubscriptionType || DEFAULT_MOCK_SUBSCRIPTION;
}
function shouldUseMockSubscription() {
  return mockEnabled && mockSubscriptionType !== null && process.env.USER_TYPE === "ant";
}
function isMockFastModeRateLimitScenario() {
  return mockFastModeRateLimitDurationMs !== null;
}
function checkMockFastModeRateLimit(isFastModeActive) {
  if (mockFastModeRateLimitDurationMs === null) {
    return null;
  }
  if (!isFastModeActive) {
    return null;
  }
  if (mockFastModeRateLimitExpiresAt !== null && Date.now() >= mockFastModeRateLimitExpiresAt) {
    clearMockHeaders();
    return null;
  }
  if (mockFastModeRateLimitExpiresAt === null) {
    mockFastModeRateLimitExpiresAt = Date.now() + mockFastModeRateLimitDurationMs;
  }
  const remainingMs = mockFastModeRateLimitExpiresAt - Date.now();
  const headersToSend = { ...mockHeaders };
  headersToSend["retry-after"] = String(Math.max(1, Math.ceil(remainingMs / 1000)));
  return headersToSend;
}
var mockHeaders, mockEnabled = false, mockHeaderless429Message = null, mockSubscriptionType = null, mockFastModeRateLimitDurationMs = null, mockFastModeRateLimitExpiresAt = null, DEFAULT_MOCK_SUBSCRIPTION = "max", exceededLimits;
var init_mockRateLimits = __esm(() => {
  init_billing();
  mockHeaders = {};
  exceededLimits = [];
});

// src/services/oauth/getOauthProfile.ts
async function getOauthProfileFromApiKey() {
  const config = getGlobalConfig();
  const accountUuid = config.oauthAccount?.accountUuid;
  const apiKey = getAnthropicApiKey();
  if (!accountUuid || !apiKey) {
    return;
  }
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/claude_cli_profile`;
  try {
    const response = await axios_default.get(endpoint, {
      headers: {
        "x-api-key": apiKey,
        "anthropic-beta": OAUTH_BETA_HEADER
      },
      params: {
        account_uuid: accountUuid
      },
      timeout: 1e4
    });
    return response.data;
  } catch (error) {
    logError(error);
  }
}
async function getOauthProfileFromOauthToken(accessToken) {
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/oauth/profile`;
  try {
    const response = await axios_default.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      timeout: 1e4
    });
    return response.data;
  } catch (error) {
    logError(error);
  }
}
var init_getOauthProfile = __esm(() => {
  init_axios();
  init_oauth();
  init_auth2();
  init_config();
  init_log();
});

// src/utils/authFileDescriptor.ts
import { mkdirSync, writeFileSync } from "fs";
function maybePersistTokenForSubprocesses(path2, token, tokenName) {
  if (!isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
    return;
  }
  try {
    mkdirSync(CCR_TOKEN_DIR, { recursive: true, mode: 448 });
    writeFileSync(path2, token, { encoding: "utf8", mode: 384 });
    logForDebugging(`Persisted ${tokenName} to ${path2} for subprocess access`);
  } catch (error) {
    logForDebugging(`Failed to persist ${tokenName} to disk (non-fatal): ${errorMessage(error)}`, { level: "error" });
  }
}
function readTokenFromWellKnownFile(path2, tokenName) {
  try {
    const fsOps = getFsImplementation();
    const token = fsOps.readFileSync(path2, { encoding: "utf8" }).trim();
    if (!token) {
      return null;
    }
    logForDebugging(`Read ${tokenName} from well-known file ${path2}`);
    return token;
  } catch (error) {
    if (!isENOENT(error)) {
      logForDebugging(`Failed to read ${tokenName} from ${path2}: ${errorMessage(error)}`, { level: "debug" });
    }
    return null;
  }
}
function getCredentialFromFd({
  envVar,
  wellKnownPath,
  label,
  getCached,
  setCached
}) {
  const cached = getCached();
  if (cached !== undefined) {
    return cached;
  }
  const fdEnv = process.env[envVar];
  if (!fdEnv) {
    const fromFile = readTokenFromWellKnownFile(wellKnownPath, label);
    setCached(fromFile);
    return fromFile;
  }
  const fd = parseInt(fdEnv, 10);
  if (Number.isNaN(fd)) {
    logForDebugging(`${envVar} must be a valid file descriptor number, got: ${fdEnv}`, { level: "error" });
    setCached(null);
    return null;
  }
  try {
    const fsOps = getFsImplementation();
    const fdPath = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${fd}` : `/proc/self/fd/${fd}`;
    const token = fsOps.readFileSync(fdPath, { encoding: "utf8" }).trim();
    if (!token) {
      logForDebugging(`File descriptor contained empty ${label}`, {
        level: "error"
      });
      setCached(null);
      return null;
    }
    logForDebugging(`Successfully read ${label} from file descriptor ${fd}`);
    setCached(token);
    maybePersistTokenForSubprocesses(wellKnownPath, token, label);
    return token;
  } catch (error) {
    logForDebugging(`Failed to read ${label} from file descriptor ${fd}: ${errorMessage(error)}`, { level: "error" });
    const fromFile = readTokenFromWellKnownFile(wellKnownPath, label);
    setCached(fromFile);
    return fromFile;
  }
}
function getOAuthTokenFromFileDescriptor() {
  return getCredentialFromFd({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: CCR_OAUTH_TOKEN_PATH,
    label: "OAuth token",
    getCached: getOauthTokenFromFd,
    setCached: setOauthTokenFromFd
  });
}
function getApiKeyFromFileDescriptor() {
  return getCredentialFromFd({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: CCR_API_KEY_PATH,
    label: "API key",
    getCached: getApiKeyFromFd,
    setCached: setApiKeyFromFd
  });
}
var CCR_TOKEN_DIR = "/home/claude/.claude/remote", CCR_OAUTH_TOKEN_PATH, CCR_API_KEY_PATH, CCR_SESSION_INGRESS_TOKEN_PATH;
var init_authFileDescriptor = __esm(() => {
  init_state();
  init_debug();
  init_envUtils();
  init_errors();
  init_fsOperations();
  CCR_OAUTH_TOKEN_PATH = `${CCR_TOKEN_DIR}/.oauth_token`;
  CCR_API_KEY_PATH = `${CCR_TOKEN_DIR}/.api_key`;
  CCR_SESSION_INGRESS_TOKEN_PATH = `${CCR_TOKEN_DIR}/.session_ingress_token`;
});

// src/utils/secureStorage/macOsKeychainHelpers.ts
import { createHash } from "crypto";
import { userInfo as userInfo2 } from "os";
function getMacOsKeychainStorageServiceName(serviceSuffix = "") {
  const configDir = getClaudeConfigHomeDir();
  const isDefaultDir = !process.env.CLAUDE_CONFIG_DIR;
  const dirHash = isDefaultDir ? "" : `-${createHash("sha256").update(configDir).digest("hex").substring(0, 8)}`;
  return `MiMo Code${getOauthConfig().OAUTH_FILE_SUFFIX}${serviceSuffix}${dirHash}`;
}
function getUsername() {
  try {
    return process.env.USER || userInfo2().username;
  } catch {
    return "mimo-code-user";
  }
}
function clearKeychainCache() {
  keychainCacheState.cache = { data: null, cachedAt: 0 };
  keychainCacheState.generation++;
  keychainCacheState.readInFlight = null;
}
function primeKeychainCacheFromPrefetch(stdout) {
  if (keychainCacheState.cache.cachedAt !== 0)
    return;
  let data = null;
  if (stdout) {
    try {
      data = JSON.parse(stdout);
    } catch {
      return;
    }
  }
  keychainCacheState.cache = { data, cachedAt: Date.now() };
}
var CREDENTIALS_SERVICE_SUFFIX = "-credentials", KEYCHAIN_CACHE_TTL_MS = 30000, keychainCacheState;
var init_macOsKeychainHelpers = __esm(() => {
  init_oauth();
  init_envUtils();
  keychainCacheState = {
    cache: { data: null, cachedAt: 0 },
    generation: 0,
    readInFlight: null
  };
});

// src/utils/authPortable.ts
async function maybeRemoveApiKeyFromMacOSKeychainThrows() {
  if (process.platform === "darwin") {
    const storageServiceName = getMacOsKeychainStorageServiceName();
    const result = await execa(`security delete-generic-password -a $USER -s "${storageServiceName}"`, { shell: true, reject: false });
    if (result.exitCode !== 0) {
      throw new Error("Failed to delete keychain entry");
    }
  }
}
function normalizeApiKeyForConfig(apiKey) {
  return apiKey.slice(-20);
}
var init_authPortable = __esm(() => {
  init_execa();
  init_macOsKeychainHelpers();
});

// src/utils/aws.ts
function isAwsCredentialsProviderError(err) {
  return err?.name === "CredentialsProviderError";
}
function isValidAwsStsOutput(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  const output = obj;
  if (!output.Credentials || typeof output.Credentials !== "object") {
    return false;
  }
  const credentials = output.Credentials;
  return typeof credentials.AccessKeyId === "string" && typeof credentials.SecretAccessKey === "string" && typeof credentials.SessionToken === "string" && credentials.AccessKeyId.length > 0 && credentials.SecretAccessKey.length > 0 && credentials.SessionToken.length > 0;
}
async function checkStsCallerIdentity() {
  const { STSClient, GetCallerIdentityCommand } = await import("./chunk-4hccpst9.js");
  await new STSClient().send(new GetCallerIdentityCommand({}));
}
async function clearAwsIniCache() {
  try {
    logForDebugging("Clearing AWS credential provider cache");
    const { fromIni } = await import("./chunk-570prgds.js");
    const iniProvider = fromIni({ ignoreCache: true });
    await iniProvider();
    logForDebugging("AWS credential provider cache refreshed");
  } catch (_error) {
    logForDebugging("Failed to clear AWS credential cache (this is expected if no credentials are configured)");
  }
}
var init_aws = __esm(() => {
  init_debug();
});

// src/utils/awsAuthStatusManager.ts
class AwsAuthStatusManager {
  static instance = null;
  status = {
    isAuthenticating: false,
    output: []
  };
  changed = createSignal();
  static getInstance() {
    if (!AwsAuthStatusManager.instance) {
      AwsAuthStatusManager.instance = new AwsAuthStatusManager;
    }
    return AwsAuthStatusManager.instance;
  }
  getStatus() {
    return {
      ...this.status,
      output: [...this.status.output]
    };
  }
  startAuthentication() {
    this.status = {
      isAuthenticating: true,
      output: []
    };
    this.changed.emit(this.getStatus());
  }
  addOutput(line) {
    this.status.output.push(line);
    this.changed.emit(this.getStatus());
  }
  setError(error) {
    this.status.error = error;
    this.changed.emit(this.getStatus());
  }
  endAuthentication(success) {
    if (success) {
      this.status = {
        isAuthenticating: false,
        output: []
      };
    } else {
      this.status.isAuthenticating = false;
    }
    this.changed.emit(this.getStatus());
  }
  subscribe = this.changed.subscribe;
  static reset() {
    if (AwsAuthStatusManager.instance) {
      AwsAuthStatusManager.instance.changed.clear();
      AwsAuthStatusManager.instance = null;
    }
  }
}
var init_awsAuthStatusManager = __esm(() => {
  init_signal();
});

// src/utils/secureStorage/fallbackStorage.ts
function createFallbackStorage(primary, secondary) {
  return {
    name: `${primary.name}-with-${secondary.name}-fallback`,
    read() {
      const result = primary.read();
      if (result !== null && result !== undefined) {
        return result;
      }
      return secondary.read() || {};
    },
    async readAsync() {
      const result = await primary.readAsync();
      if (result !== null && result !== undefined) {
        return result;
      }
      return await secondary.readAsync() || {};
    },
    update(data) {
      const primaryDataBefore = primary.read();
      const result = primary.update(data);
      if (result.success) {
        if (primaryDataBefore === null) {
          secondary.delete();
        }
        return result;
      }
      const fallbackResult = secondary.update(data);
      if (fallbackResult.success) {
        if (primaryDataBefore !== null) {
          primary.delete();
        }
        return {
          success: true,
          warning: fallbackResult.warning
        };
      }
      return { success: false };
    },
    delete() {
      const primarySuccess = primary.delete();
      const secondarySuccess = secondary.delete();
      return primarySuccess || secondarySuccess;
    }
  };
}
var init_fallbackStorage = () => {};

// src/utils/secureStorage/macOsKeychainStorage.ts
async function doReadAsync() {
  try {
    const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
    const username = getUsername();
    const { stdout, code } = await execFileNoThrow("security", ["find-generic-password", "-a", username, "-w", "-s", storageServiceName], { useCwd: false, preserveOutputOnError: false });
    if (code === 0 && stdout) {
      return jsonParse(stdout.trim());
    }
  } catch (_e) {}
  return null;
}
function isMacOsKeychainLocked() {
  if (keychainLockedCache !== undefined)
    return keychainLockedCache;
  if (process.platform !== "darwin") {
    keychainLockedCache = false;
    return false;
  }
  try {
    const result = execaSync("security", ["show-keychain-info"], {
      reject: false,
      stdio: ["ignore", "pipe", "pipe"]
    });
    keychainLockedCache = result.exitCode === 36;
  } catch {
    keychainLockedCache = false;
  }
  return keychainLockedCache;
}
var SECURITY_STDIN_LINE_LIMIT, macOsKeychainStorage, keychainLockedCache;
var init_macOsKeychainStorage = __esm(() => {
  init_execa();
  init_debug();
  init_execFileNoThrow();
  init_execFileNoThrowPortable();
  init_slowOperations();
  init_macOsKeychainHelpers();
  SECURITY_STDIN_LINE_LIMIT = 4096 - 64;
  macOsKeychainStorage = {
    name: "keychain",
    read() {
      const prev = keychainCacheState.cache;
      if (Date.now() - prev.cachedAt < KEYCHAIN_CACHE_TTL_MS) {
        return prev.data;
      }
      try {
        const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
        const username = getUsername();
        const result = execSyncWithDefaults_DEPRECATED(`security find-generic-password -a "${username}" -w -s "${storageServiceName}"`);
        if (result) {
          const data = jsonParse(result);
          keychainCacheState.cache = { data, cachedAt: Date.now() };
          return data;
        }
      } catch (_e) {}
      if (prev.data !== null) {
        logForDebugging("[keychain] read failed; serving stale cache", {
          level: "warn"
        });
        keychainCacheState.cache = { data: prev.data, cachedAt: Date.now() };
        return prev.data;
      }
      keychainCacheState.cache = { data: null, cachedAt: Date.now() };
      return null;
    },
    async readAsync() {
      const prev = keychainCacheState.cache;
      if (Date.now() - prev.cachedAt < KEYCHAIN_CACHE_TTL_MS) {
        return prev.data;
      }
      if (keychainCacheState.readInFlight) {
        return keychainCacheState.readInFlight;
      }
      const gen = keychainCacheState.generation;
      const promise = doReadAsync().then((data) => {
        if (gen === keychainCacheState.generation) {
          if (data === null && prev.data !== null) {
            logForDebugging("[keychain] readAsync failed; serving stale cache", {
              level: "warn"
            });
          }
          const next = data ?? prev.data;
          keychainCacheState.cache = { data: next, cachedAt: Date.now() };
          keychainCacheState.readInFlight = null;
          return next;
        }
        return data;
      });
      keychainCacheState.readInFlight = promise;
      return promise;
    },
    update(data) {
      clearKeychainCache();
      try {
        const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
        const username = getUsername();
        const jsonString = jsonStringify(data);
        const hexValue = Buffer.from(jsonString, "utf-8").toString("hex");
        const command = `add-generic-password -U -a "${username}" -s "${storageServiceName}" -X "${hexValue}"
`;
        let result;
        if (command.length <= SECURITY_STDIN_LINE_LIMIT) {
          result = execaSync("security", ["-i"], {
            input: command,
            stdio: ["pipe", "pipe", "pipe"],
            reject: false
          });
        } else {
          logForDebugging(`Keychain payload (${jsonString.length}B JSON) exceeds security -i stdin limit; using argv`, { level: "warn" });
          result = execaSync("security", [
            "add-generic-password",
            "-U",
            "-a",
            username,
            "-s",
            storageServiceName,
            "-X",
            hexValue
          ], { stdio: ["ignore", "pipe", "pipe"], reject: false });
        }
        if (result.exitCode !== 0) {
          return { success: false };
        }
        keychainCacheState.cache = { data, cachedAt: Date.now() };
        return { success: true };
      } catch (_e) {
        return { success: false };
      }
    },
    delete() {
      clearKeychainCache();
      try {
        const storageServiceName = getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX);
        const username = getUsername();
        execSyncWithDefaults_DEPRECATED(`security delete-generic-password -a "${username}" -s "${storageServiceName}"`);
        return true;
      } catch (_e) {
        return false;
      }
    }
  };
});

// src/utils/secureStorage/plainTextStorage.ts
import { chmodSync as chmodSync2 } from "fs";
import { join as join13 } from "path";
function getStoragePath() {
  const storageDir = getClaudeConfigHomeDir();
  const storageFileName = ".credentials.json";
  return { storageDir, storagePath: join13(storageDir, storageFileName) };
}
var plainTextStorage;
var init_plainTextStorage = __esm(() => {
  init_envUtils();
  init_errors();
  init_fsOperations();
  init_slowOperations();
  plainTextStorage = {
    name: "plaintext",
    read() {
      const { storagePath } = getStoragePath();
      try {
        const data = getFsImplementation().readFileSync(storagePath, {
          encoding: "utf8"
        });
        return jsonParse(data);
      } catch {
        return null;
      }
    },
    async readAsync() {
      const { storagePath } = getStoragePath();
      try {
        const data = await getFsImplementation().readFile(storagePath, {
          encoding: "utf8"
        });
        return jsonParse(data);
      } catch {
        return null;
      }
    },
    update(data) {
      try {
        const { storageDir, storagePath } = getStoragePath();
        try {
          getFsImplementation().mkdirSync(storageDir);
        } catch (e) {
          const code = getErrnoCode(e);
          if (code !== "EEXIST") {
            throw e;
          }
        }
        writeFileSync_DEPRECATED(storagePath, jsonStringify(data), {
          encoding: "utf8",
          flush: false
        });
        chmodSync2(storagePath, 384);
        return {
          success: true,
          warning: "Warning: Storing credentials in plaintext."
        };
      } catch {
        return { success: false };
      }
    },
    delete() {
      const { storagePath } = getStoragePath();
      try {
        getFsImplementation().unlinkSync(storagePath);
        return true;
      } catch (e) {
        const code = getErrnoCode(e);
        if (code === "ENOENT") {
          return true;
        }
        return false;
      }
    }
  };
});

// src/utils/secureStorage/index.ts
function getSecureStorage() {
  if (process.platform === "darwin") {
    return createFallbackStorage(macOsKeychainStorage, plainTextStorage);
  }
  return plainTextStorage;
}
var init_secureStorage = __esm(() => {
  init_fallbackStorage();
  init_macOsKeychainStorage();
  init_plainTextStorage();
});

// src/utils/secureStorage/keychainPrefetch.ts
import { execFile as execFile2 } from "child_process";
function spawnSecurity(serviceName) {
  return new Promise((resolve5) => {
    execFile2("security", ["find-generic-password", "-a", getUsername(), "-w", "-s", serviceName], { encoding: "utf-8", timeout: KEYCHAIN_PREFETCH_TIMEOUT_MS }, (err, stdout) => {
      resolve5({
        stdout: err ? null : stdout?.trim() || null,
        timedOut: Boolean(err && "killed" in err && err.killed)
      });
    });
  });
}
function startKeychainPrefetch() {
  if (process.platform !== "darwin" || prefetchPromise || isBareMode())
    return;
  const oauthSpawn = spawnSecurity(getMacOsKeychainStorageServiceName(CREDENTIALS_SERVICE_SUFFIX));
  const legacySpawn = spawnSecurity(getMacOsKeychainStorageServiceName());
  prefetchPromise = Promise.all([oauthSpawn, legacySpawn]).then(([oauth, legacy]) => {
    if (!oauth.timedOut)
      primeKeychainCacheFromPrefetch(oauth.stdout);
    if (!legacy.timedOut)
      legacyApiKeyPrefetch = { stdout: legacy.stdout };
  });
}
async function ensureKeychainPrefetchCompleted() {
  if (prefetchPromise)
    await prefetchPromise;
}
function getLegacyApiKeyPrefetchResult() {
  return legacyApiKeyPrefetch;
}
function clearLegacyApiKeyPrefetch() {
  legacyApiKeyPrefetch = null;
}
var KEYCHAIN_PREFETCH_TIMEOUT_MS = 1e4, legacyApiKeyPrefetch = null, prefetchPromise = null;
var init_keychainPrefetch = __esm(() => {
  init_envUtils();
  init_macOsKeychainHelpers();
});

// src/utils/toolSchemaCache.ts
function getToolSchemaCache() {
  return TOOL_SCHEMA_CACHE;
}
function clearToolSchemaCache() {
  TOOL_SCHEMA_CACHE.clear();
}
var TOOL_SCHEMA_CACHE;
var init_toolSchemaCache = __esm(() => {
  TOOL_SCHEMA_CACHE = new Map;
});

// src/utils/auth.ts
var exports_auth = {};
__export(exports_auth, {
  validateForceLoginOrg: () => validateForceLoginOrg,
  saveOAuthTokensIfNeeded: () => saveOAuthTokensIfNeeded,
  saveApiKey: () => saveApiKey,
  removeApiKey: () => removeApiKey,
  refreshGcpCredentialsIfNeeded: () => refreshGcpCredentialsIfNeeded,
  refreshGcpAuth: () => refreshGcpAuth,
  refreshAwsAuth: () => refreshAwsAuth,
  refreshAndGetAwsCredentials: () => refreshAndGetAwsCredentials,
  prefetchGcpCredentialsIfSafe: () => prefetchGcpCredentialsIfSafe,
  prefetchAwsCredentialsAndBedRockInfoIfSafe: () => prefetchAwsCredentialsAndBedRockInfoIfSafe,
  prefetchApiKeyFromApiKeyHelperIfSafe: () => prefetchApiKeyFromApiKeyHelperIfSafe,
  isUsing3PServices: () => isUsing3PServices,
  isTeamSubscriber: () => isTeamSubscriber,
  isTeamPremiumSubscriber: () => isTeamPremiumSubscriber,
  isProSubscriber: () => isProSubscriber,
  isOverageProvisioningAllowed: () => isOverageProvisioningAllowed,
  isOtelHeadersHelperFromProjectOrLocalSettings: () => isOtelHeadersHelperFromProjectOrLocalSettings,
  isMaxSubscriber: () => isMaxSubscriber,
  isGcpAuthRefreshFromProjectSettings: () => isGcpAuthRefreshFromProjectSettings,
  isEnterpriseSubscriber: () => isEnterpriseSubscriber,
  isCustomApiKeyApproved: () => isCustomApiKeyApproved,
  isConsumerSubscriber: () => isConsumerSubscriber,
  isClaudeAISubscriber: () => isClaudeAISubscriber,
  isAwsCredentialExportFromProjectSettings: () => isAwsCredentialExportFromProjectSettings,
  isAwsAuthRefreshFromProjectSettings: () => isAwsAuthRefreshFromProjectSettings,
  isAnthropicAuthEnabled: () => isAnthropicAuthEnabled,
  is1PApiCustomer: () => is1PApiCustomer,
  hasProfileScope: () => hasProfileScope,
  hasOpusAccess: () => hasOpusAccess,
  hasAnthropicApiKeyAuth: () => hasAnthropicApiKeyAuth,
  handleOAuth401Error: () => handleOAuth401Error,
  getSubscriptionType: () => getSubscriptionType,
  getSubscriptionName: () => getSubscriptionName,
  getRateLimitTier: () => getRateLimitTier,
  getOtelHeadersFromHelper: () => getOtelHeadersFromHelper,
  getOauthAccountInfo: () => getOauthAccountInfo,
  getConfiguredApiKeyHelper: () => getConfiguredApiKeyHelper,
  getClaudeAIOAuthTokensAsync: () => getClaudeAIOAuthTokensAsync,
  getClaudeAIOAuthTokens: () => getClaudeAIOAuthTokens,
  getAuthTokenSource: () => getAuthTokenSource,
  getApiKeyHelperElapsedMs: () => getApiKeyHelperElapsedMs,
  getApiKeyFromConfigOrMacOSKeychain: () => getApiKeyFromConfigOrMacOSKeychain,
  getApiKeyFromApiKeyHelperCached: () => getApiKeyFromApiKeyHelperCached,
  getApiKeyFromApiKeyHelper: () => getApiKeyFromApiKeyHelper,
  getAnthropicApiKeyWithSource: () => getAnthropicApiKeyWithSource,
  getAnthropicApiKey: () => getAnthropicApiKey,
  getAccountInformation: () => getAccountInformation,
  clearOAuthTokenCache: () => clearOAuthTokenCache,
  clearGcpCredentialsCache: () => clearGcpCredentialsCache,
  clearAwsCredentialsCache: () => clearAwsCredentialsCache,
  clearApiKeyHelperCache: () => clearApiKeyHelperCache,
  checkGcpCredentialsValid: () => checkGcpCredentialsValid,
  checkAndRefreshOAuthTokenIfNeeded: () => checkAndRefreshOAuthTokenIfNeeded,
  calculateApiKeyHelperTTL: () => calculateApiKeyHelperTTL
});
import { exec } from "child_process";
import { mkdir as mkdir4, stat as stat3 } from "fs/promises";
import { join as join14 } from "path";
function isManagedOAuthContext() {
  return isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) || process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop";
}
function isAnthropicAuthEnabled() {
  if (isBareMode())
    return false;
  if (process.env.ANTHROPIC_UNIX_SOCKET) {
    return !!process.env.CLAUDE_CODE_OAUTH_TOKEN;
  }
  const settings = getSettings_DEPRECATED() || {};
  const is3P = isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY) || settings.modelType === "openai" || settings.modelType === "gemini" || !!process.env.OPENAI_BASE_URL || !!process.env.GEMINI_BASE_URL;
  const apiKeyHelper = settings.apiKeyHelper;
  const hasExternalAuthToken = process.env.ANTHROPIC_AUTH_TOKEN || apiKeyHelper || process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR;
  const { source: apiKeySource } = getAnthropicApiKeyWithSource({
    skipRetrievingKeyFromApiKeyHelper: true
  });
  const hasExternalApiKey = apiKeySource === "ANTHROPIC_API_KEY" || apiKeySource === "apiKeyHelper";
  const shouldDisableAuth = is3P || hasExternalAuthToken && !isManagedOAuthContext() || hasExternalApiKey && !isManagedOAuthContext();
  return !shouldDisableAuth;
}
function getAuthTokenSource() {
  if (isBareMode()) {
    if (getConfiguredApiKeyHelper()) {
      return { source: "apiKeyHelper", hasToken: true };
    }
    return { source: "none", hasToken: false };
  }
  if (process.env.ANTHROPIC_AUTH_TOKEN && !isManagedOAuthContext()) {
    return { source: "ANTHROPIC_AUTH_TOKEN", hasToken: true };
  }
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN) {
    return { source: "CLAUDE_CODE_OAUTH_TOKEN", hasToken: true };
  }
  const oauthTokenFromFd = getOAuthTokenFromFileDescriptor();
  if (oauthTokenFromFd) {
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR) {
      return {
        source: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        hasToken: true
      };
    }
    return {
      source: "CCR_OAUTH_TOKEN_FILE",
      hasToken: true
    };
  }
  const apiKeyHelper = getConfiguredApiKeyHelper();
  if (apiKeyHelper && !isManagedOAuthContext()) {
    return { source: "apiKeyHelper", hasToken: true };
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (shouldUseClaudeAIAuth(oauthTokens?.scopes) && oauthTokens?.accessToken) {
    return { source: "claude.ai", hasToken: true };
  }
  return { source: "none", hasToken: false };
}
function getAnthropicApiKey() {
  const { key } = getAnthropicApiKeyWithSource();
  return key;
}
function hasAnthropicApiKeyAuth() {
  const { key, source } = getAnthropicApiKeyWithSource({
    skipRetrievingKeyFromApiKeyHelper: true
  });
  return key !== null && source !== "none";
}
function getAnthropicApiKeyWithSource(opts = {}) {
  if (isBareMode()) {
    if (process.env.ANTHROPIC_API_KEY) {
      return { key: process.env.ANTHROPIC_API_KEY, source: "ANTHROPIC_API_KEY" };
    }
    if (getConfiguredApiKeyHelper()) {
      return {
        key: opts.skipRetrievingKeyFromApiKeyHelper ? null : getApiKeyFromApiKeyHelperCached(),
        source: "apiKeyHelper"
      };
    }
    return { key: null, source: "none" };
  }
  const apiKeyEnv = isRunningOnHomespace() ? undefined : process.env.ANTHROPIC_API_KEY;
  if (preferThirdPartyAuthentication() && apiKeyEnv) {
    return {
      key: apiKeyEnv,
      source: "ANTHROPIC_API_KEY"
    };
  }
  if (isEnvTruthy(process.env.CI) || false) {
    const apiKeyFromFd2 = getApiKeyFromFileDescriptor();
    if (apiKeyFromFd2) {
      return {
        key: apiKeyFromFd2,
        source: "ANTHROPIC_API_KEY"
      };
    }
    if (!apiKeyEnv && !process.env.CLAUDE_CODE_OAUTH_TOKEN && !process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR) {
      throw new Error("ANTHROPIC_API_KEY or CLAUDE_CODE_OAUTH_TOKEN env var is required");
    }
    if (apiKeyEnv) {
      return {
        key: apiKeyEnv,
        source: "ANTHROPIC_API_KEY"
      };
    }
    return {
      key: null,
      source: "none"
    };
  }
  if (apiKeyEnv && getGlobalConfig().customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(apiKeyEnv))) {
    return {
      key: apiKeyEnv,
      source: "ANTHROPIC_API_KEY"
    };
  }
  const apiKeyFromFd = getApiKeyFromFileDescriptor();
  if (apiKeyFromFd) {
    return {
      key: apiKeyFromFd,
      source: "ANTHROPIC_API_KEY"
    };
  }
  const apiKeyHelperCommand = getConfiguredApiKeyHelper();
  if (apiKeyHelperCommand) {
    if (opts.skipRetrievingKeyFromApiKeyHelper) {
      return {
        key: null,
        source: "apiKeyHelper"
      };
    }
    return {
      key: getApiKeyFromApiKeyHelperCached(),
      source: "apiKeyHelper"
    };
  }
  const apiKeyFromConfigOrMacOSKeychain = getApiKeyFromConfigOrMacOSKeychain();
  if (apiKeyFromConfigOrMacOSKeychain) {
    return apiKeyFromConfigOrMacOSKeychain;
  }
  return {
    key: null,
    source: "none"
  };
}
function getConfiguredApiKeyHelper() {
  if (isBareMode()) {
    return getSettingsForSource("flagSettings")?.apiKeyHelper;
  }
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.apiKeyHelper;
}
function isApiKeyHelperFromProjectOrLocalSettings() {
  const apiKeyHelper = getConfiguredApiKeyHelper();
  if (!apiKeyHelper) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.apiKeyHelper === apiKeyHelper || localSettings?.apiKeyHelper === apiKeyHelper;
}
function getConfiguredAwsAuthRefresh() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.awsAuthRefresh;
}
function isAwsAuthRefreshFromProjectSettings() {
  const awsAuthRefresh = getConfiguredAwsAuthRefresh();
  if (!awsAuthRefresh) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.awsAuthRefresh === awsAuthRefresh || localSettings?.awsAuthRefresh === awsAuthRefresh;
}
function getConfiguredAwsCredentialExport() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.awsCredentialExport;
}
function isAwsCredentialExportFromProjectSettings() {
  const awsCredentialExport = getConfiguredAwsCredentialExport();
  if (!awsCredentialExport) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.awsCredentialExport === awsCredentialExport || localSettings?.awsCredentialExport === awsCredentialExport;
}
function calculateApiKeyHelperTTL() {
  const envTtl = process.env.CLAUDE_CODE_API_KEY_HELPER_TTL_MS;
  if (envTtl) {
    const parsed = parseInt(envTtl, 10);
    if (!Number.isNaN(parsed) && parsed >= 0) {
      return parsed;
    }
    logForDebugging(`Found CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var, but it was not a valid number. Got ${envTtl}`, { level: "error" });
  }
  return DEFAULT_API_KEY_HELPER_TTL;
}
function getApiKeyHelperElapsedMs() {
  const startedAt = _apiKeyHelperInflight?.startedAt;
  return startedAt ? Date.now() - startedAt : 0;
}
async function getApiKeyFromApiKeyHelper(isNonInteractiveSession) {
  if (!getConfiguredApiKeyHelper())
    return null;
  const ttl = calculateApiKeyHelperTTL();
  if (_apiKeyHelperCache) {
    if (Date.now() - _apiKeyHelperCache.timestamp < ttl) {
      return _apiKeyHelperCache.value;
    }
    if (!_apiKeyHelperInflight) {
      _apiKeyHelperInflight = {
        promise: _runAndCache(isNonInteractiveSession, false, _apiKeyHelperEpoch),
        startedAt: null
      };
    }
    return _apiKeyHelperCache.value;
  }
  if (_apiKeyHelperInflight)
    return _apiKeyHelperInflight.promise;
  _apiKeyHelperInflight = {
    promise: _runAndCache(isNonInteractiveSession, true, _apiKeyHelperEpoch),
    startedAt: Date.now()
  };
  return _apiKeyHelperInflight.promise;
}
async function _runAndCache(isNonInteractiveSession, isCold, epoch) {
  try {
    const value = await _executeApiKeyHelper(isNonInteractiveSession);
    if (epoch !== _apiKeyHelperEpoch)
      return value;
    if (value !== null) {
      _apiKeyHelperCache = { value, timestamp: Date.now() };
    }
    return value;
  } catch (e) {
    if (epoch !== _apiKeyHelperEpoch)
      return " ";
    const detail = e instanceof Error ? e.message : String(e);
    console.error(source_default.red(`apiKeyHelper failed: ${detail}`));
    logForDebugging(`Error getting API key from apiKeyHelper: ${detail}`, {
      level: "error"
    });
    if (!isCold && _apiKeyHelperCache && _apiKeyHelperCache.value !== " ") {
      _apiKeyHelperCache = { ..._apiKeyHelperCache, timestamp: Date.now() };
      return _apiKeyHelperCache.value;
    }
    _apiKeyHelperCache = { value: " ", timestamp: Date.now() };
    return " ";
  } finally {
    if (epoch === _apiKeyHelperEpoch) {
      _apiKeyHelperInflight = null;
    }
  }
}
async function _executeApiKeyHelper(isNonInteractiveSession) {
  const apiKeyHelper = getConfiguredApiKeyHelper();
  if (!apiKeyHelper) {
    return null;
  }
  if (isApiKeyHelperFromProjectOrLocalSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !isNonInteractiveSession) {
      const error = new Error(`Security: apiKeyHelper executed before workspace trust is confirmed. If you see this message, post in ${""}.`);
      logAntError("apiKeyHelper invoked before trust check", error);
      logEvent("tengu_apiKeyHelper_missing_trust11", {});
      return null;
    }
  }
  const result = await execa(apiKeyHelper, {
    shell: true,
    timeout: 10 * 60 * 1000,
    reject: false
  });
  if (result.failed) {
    const why = result.timedOut ? "timed out" : `exited ${result.exitCode}`;
    const stderr = result.stderr?.trim();
    throw new Error(stderr ? `${why}: ${stderr}` : why);
  }
  const stdout = result.stdout?.trim();
  if (!stdout) {
    throw new Error("did not return a value");
  }
  return stdout;
}
function getApiKeyFromApiKeyHelperCached() {
  return _apiKeyHelperCache?.value ?? null;
}
function clearApiKeyHelperCache() {
  _apiKeyHelperEpoch++;
  _apiKeyHelperCache = null;
  _apiKeyHelperInflight = null;
}
function prefetchApiKeyFromApiKeyHelperIfSafe(isNonInteractiveSession) {
  if (isApiKeyHelperFromProjectOrLocalSettings() && !checkHasTrustDialogAccepted()) {
    return;
  }
  getApiKeyFromApiKeyHelper(isNonInteractiveSession);
}
async function runAwsAuthRefresh() {
  const awsAuthRefresh = getConfiguredAwsAuthRefresh();
  if (!awsAuthRefresh) {
    return false;
  }
  if (isAwsAuthRefreshFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      const error = new Error(`Security: awsAuthRefresh executed before workspace trust is confirmed. If you see this message, post in ${""}.`);
      logAntError("awsAuthRefresh invoked before trust check", error);
      logEvent("tengu_awsAuthRefresh_missing_trust", {});
      return false;
    }
  }
  try {
    logForDebugging("Fetching AWS caller identity for AWS auth refresh command");
    await checkStsCallerIdentity();
    logForDebugging("Fetched AWS caller identity, skipping AWS auth refresh command");
    return false;
  } catch {
    return refreshAwsAuth(awsAuthRefresh);
  }
}
function refreshAwsAuth(awsAuthRefresh) {
  logForDebugging("Running AWS auth refresh command");
  const authStatusManager = AwsAuthStatusManager.getInstance();
  authStatusManager.startAuthentication();
  return new Promise((resolve5) => {
    const refreshProc = exec(awsAuthRefresh, {
      timeout: AWS_AUTH_REFRESH_TIMEOUT_MS
    });
    refreshProc.stdout.on("data", (data) => {
      const output = data.toString().trim();
      if (output) {
        authStatusManager.addOutput(output);
        logForDebugging(output, { level: "debug" });
      }
    });
    refreshProc.stderr.on("data", (data) => {
      const error = data.toString().trim();
      if (error) {
        authStatusManager.setError(error);
        logForDebugging(error, { level: "error" });
      }
    });
    refreshProc.on("close", (code, signal) => {
      if (code === 0) {
        logForDebugging("AWS auth refresh completed successfully");
        authStatusManager.endAuthentication(true);
        resolve5(true);
      } else {
        const timedOut = signal === "SIGTERM";
        const message = timedOut ? source_default.red("AWS auth refresh timed out after 3 minutes. Run your auth command manually in a separate terminal.") : source_default.red("Error running awsAuthRefresh (in settings or ~/.claude.json):");
        console.error(message);
        authStatusManager.endAuthentication(false);
        resolve5(false);
      }
    });
  });
}
async function getAwsCredsFromCredentialExport() {
  const awsCredentialExport = getConfiguredAwsCredentialExport();
  if (!awsCredentialExport) {
    return null;
  }
  if (isAwsCredentialExportFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      const error = new Error(`Security: awsCredentialExport executed before workspace trust is confirmed. If you see this message, post in ${""}.`);
      logAntError("awsCredentialExport invoked before trust check", error);
      logEvent("tengu_awsCredentialExport_missing_trust", {});
      return null;
    }
  }
  try {
    logForDebugging("Fetching AWS caller identity for credential export command");
    await checkStsCallerIdentity();
    logForDebugging("Fetched AWS caller identity, skipping AWS credential export command");
    return null;
  } catch {
    try {
      logForDebugging("Running AWS credential export command");
      const result = await execa(awsCredentialExport, {
        shell: true,
        reject: false
      });
      if (result.exitCode !== 0 || !result.stdout) {
        throw new Error("awsCredentialExport did not return a valid value");
      }
      const awsOutput = jsonParse(result.stdout.trim());
      if (!isValidAwsStsOutput(awsOutput)) {
        throw new Error("awsCredentialExport did not return valid AWS STS output structure");
      }
      logForDebugging("AWS credentials retrieved from awsCredentialExport");
      return {
        accessKeyId: awsOutput.Credentials.AccessKeyId,
        secretAccessKey: awsOutput.Credentials.SecretAccessKey,
        sessionToken: awsOutput.Credentials.SessionToken
      };
    } catch (e) {
      const message = source_default.red("Error getting AWS credentials from awsCredentialExport (in settings or ~/.claude.json):");
      if (e instanceof Error) {
        console.error(message, e.message);
      } else {
        console.error(message, e);
      }
      return null;
    }
  }
}
function clearAwsCredentialsCache() {
  refreshAndGetAwsCredentials.cache.clear();
}
function getConfiguredGcpAuthRefresh() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.gcpAuthRefresh;
}
function isGcpAuthRefreshFromProjectSettings() {
  const gcpAuthRefresh = getConfiguredGcpAuthRefresh();
  if (!gcpAuthRefresh) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.gcpAuthRefresh === gcpAuthRefresh || localSettings?.gcpAuthRefresh === gcpAuthRefresh;
}
async function checkGcpCredentialsValid() {
  try {
    const { GoogleAuth } = await import("./chunk-tezak8rx.js").then((m)=>__toESM(m.default,1));
    const auth = new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"]
    });
    const probe = (async () => {
      const client2 = await auth.getClient();
      await client2.getAccessToken();
    })();
    const timeout = sleep(GCP_CREDENTIALS_CHECK_TIMEOUT_MS).then(() => {
      throw new GcpCredentialsTimeoutError("GCP credentials check timed out");
    });
    await Promise.race([probe, timeout]);
    return true;
  } catch {
    return false;
  }
}
async function runGcpAuthRefresh() {
  const gcpAuthRefresh = getConfiguredGcpAuthRefresh();
  if (!gcpAuthRefresh) {
    return false;
  }
  if (isGcpAuthRefreshFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      const error = new Error("Security: gcpAuthRefresh executed before workspace trust is confirmed. If you see this message, post in .");
      logAntError("gcpAuthRefresh invoked before trust check", error);
      logEvent("tengu_gcpAuthRefresh_missing_trust", {});
      return false;
    }
  }
  try {
    logForDebugging("Checking GCP credentials validity for auth refresh");
    const isValid = await checkGcpCredentialsValid();
    if (isValid) {
      logForDebugging("GCP credentials are valid, skipping auth refresh command");
      return false;
    }
  } catch {}
  return refreshGcpAuth(gcpAuthRefresh);
}
function refreshGcpAuth(gcpAuthRefresh) {
  logForDebugging("Running GCP auth refresh command");
  const authStatusManager = AwsAuthStatusManager.getInstance();
  authStatusManager.startAuthentication();
  return new Promise((resolve5) => {
    const refreshProc = exec(gcpAuthRefresh, {
      timeout: GCP_AUTH_REFRESH_TIMEOUT_MS
    });
    refreshProc.stdout.on("data", (data) => {
      const output = data.toString().trim();
      if (output) {
        authStatusManager.addOutput(output);
        logForDebugging(output, { level: "debug" });
      }
    });
    refreshProc.stderr.on("data", (data) => {
      const error = data.toString().trim();
      if (error) {
        authStatusManager.setError(error);
        logForDebugging(error, { level: "error" });
      }
    });
    refreshProc.on("close", (code, signal) => {
      if (code === 0) {
        logForDebugging("GCP auth refresh completed successfully");
        authStatusManager.endAuthentication(true);
        resolve5(true);
      } else {
        const timedOut = signal === "SIGTERM";
        const message = timedOut ? source_default.red("GCP auth refresh timed out after 3 minutes. Run your auth command manually in a separate terminal.") : source_default.red("Error running gcpAuthRefresh (in settings or ~/.claude.json):");
        console.error(message);
        authStatusManager.endAuthentication(false);
        resolve5(false);
      }
    });
  });
}
function clearGcpCredentialsCache() {
  refreshGcpCredentialsIfNeeded.cache.clear();
}
function prefetchGcpCredentialsIfSafe() {
  const gcpAuthRefresh = getConfiguredGcpAuthRefresh();
  if (!gcpAuthRefresh) {
    return;
  }
  if (isGcpAuthRefreshFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      return;
    }
  }
  refreshGcpCredentialsIfNeeded();
}
function prefetchAwsCredentialsAndBedRockInfoIfSafe() {
  const awsAuthRefresh = getConfiguredAwsAuthRefresh();
  const awsCredentialExport = getConfiguredAwsCredentialExport();
  if (!awsAuthRefresh && !awsCredentialExport) {
    return;
  }
  if (isAwsAuthRefreshFromProjectSettings() || isAwsCredentialExportFromProjectSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust && !getIsNonInteractiveSession()) {
      return;
    }
  }
  refreshAndGetAwsCredentials();
  getModelStrings2();
}
function isValidApiKey(apiKey) {
  return /^[a-zA-Z0-9-_]+$/.test(apiKey);
}
async function saveApiKey(apiKey) {
  if (!isValidApiKey(apiKey)) {
    throw new Error("Invalid API key format. API key must contain only alphanumeric characters, dashes, and underscores.");
  }
  await maybeRemoveApiKeyFromMacOSKeychain();
  let savedToKeychain = false;
  if (process.platform === "darwin") {
    try {
      const storageServiceName = getMacOsKeychainStorageServiceName();
      const username = getUsername();
      const hexValue = Buffer.from(apiKey, "utf-8").toString("hex");
      const command = `add-generic-password -U -a "${username}" -s "${storageServiceName}" -X "${hexValue}"
`;
      await execa("security", ["-i"], {
        input: command,
        reject: false
      });
      logEvent("tengu_api_key_saved_to_keychain", {});
      savedToKeychain = true;
    } catch (e) {
      logError(e);
      logEvent("tengu_api_key_keychain_error", {
        error: errorMessage(e)
      });
      logEvent("tengu_api_key_saved_to_config", {});
    }
  } else {
    logEvent("tengu_api_key_saved_to_config", {});
  }
  const normalizedKey = normalizeApiKeyForConfig(apiKey);
  saveGlobalConfig((current) => {
    const approved = current.customApiKeyResponses?.approved ?? [];
    return {
      ...current,
      primaryApiKey: savedToKeychain ? current.primaryApiKey : apiKey,
      customApiKeyResponses: {
        ...current.customApiKeyResponses,
        approved: approved.includes(normalizedKey) ? approved : [...approved, normalizedKey],
        rejected: current.customApiKeyResponses?.rejected ?? []
      }
    };
  });
  getApiKeyFromConfigOrMacOSKeychain.cache.clear?.();
  clearLegacyApiKeyPrefetch();
}
function isCustomApiKeyApproved(apiKey) {
  const config = getGlobalConfig();
  const normalizedKey = normalizeApiKeyForConfig(apiKey);
  return config.customApiKeyResponses?.approved?.includes(normalizedKey) ?? false;
}
async function removeApiKey() {
  await maybeRemoveApiKeyFromMacOSKeychain();
  saveGlobalConfig((current) => ({
    ...current,
    primaryApiKey: undefined
  }));
  getApiKeyFromConfigOrMacOSKeychain.cache.clear?.();
  clearLegacyApiKeyPrefetch();
}
async function maybeRemoveApiKeyFromMacOSKeychain() {
  try {
    await maybeRemoveApiKeyFromMacOSKeychainThrows();
  } catch (e) {
    logError(e);
  }
}
function saveOAuthTokensIfNeeded(tokens) {
  if (!shouldUseClaudeAIAuth(tokens.scopes)) {
    logEvent("tengu_oauth_tokens_not_claude_ai", {});
    return { success: true };
  }
  if (!tokens.refreshToken || !tokens.expiresAt) {
    logEvent("tengu_oauth_tokens_inference_only", {});
    return { success: true };
  }
  const secureStorage = getSecureStorage();
  const storageBackend = secureStorage.name;
  try {
    const storageData = secureStorage.read() || {};
    const existingOauth = storageData.claudeAiOauth;
    storageData.claudeAiOauth = {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresAt: tokens.expiresAt,
      scopes: tokens.scopes,
      subscriptionType: tokens.subscriptionType ?? existingOauth?.subscriptionType ?? null,
      rateLimitTier: tokens.rateLimitTier ?? existingOauth?.rateLimitTier ?? null
    };
    const updateStatus = secureStorage.update(storageData);
    if (updateStatus.success) {
      logEvent("tengu_oauth_tokens_saved", { storageBackend });
    } else {
      logEvent("tengu_oauth_tokens_save_failed", { storageBackend });
    }
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearBetasCaches();
    clearToolSchemaCache();
    return updateStatus;
  } catch (error) {
    logError(error);
    logEvent("tengu_oauth_tokens_save_exception", {
      storageBackend,
      error: errorMessage(error)
    });
    return { success: false, warning: "Failed to save OAuth tokens" };
  }
}
function clearOAuthTokenCache() {
  getClaudeAIOAuthTokens.cache?.clear?.();
  clearKeychainCache();
}
async function invalidateOAuthCacheIfDiskChanged() {
  try {
    const { mtimeMs } = await stat3(join14(getClaudeConfigHomeDir(), ".credentials.json"));
    if (mtimeMs !== lastCredentialsMtimeMs) {
      lastCredentialsMtimeMs = mtimeMs;
      clearOAuthTokenCache();
    }
  } catch {
    getClaudeAIOAuthTokens.cache?.clear?.();
  }
}
function handleOAuth401Error(failedAccessToken) {
  const pending = pending401Handlers.get(failedAccessToken);
  if (pending)
    return pending;
  const promise = handleOAuth401ErrorImpl(failedAccessToken).finally(() => {
    pending401Handlers.delete(failedAccessToken);
  });
  pending401Handlers.set(failedAccessToken, promise);
  return promise;
}
async function handleOAuth401ErrorImpl(failedAccessToken) {
  clearOAuthTokenCache();
  const currentTokens = await getClaudeAIOAuthTokensAsync();
  if (!currentTokens?.refreshToken) {
    return false;
  }
  if (currentTokens.accessToken !== failedAccessToken) {
    logEvent("tengu_oauth_401_recovered_from_keychain", {});
    return true;
  }
  return checkAndRefreshOAuthTokenIfNeeded(0, true);
}
async function getClaudeAIOAuthTokensAsync() {
  if (isBareMode())
    return null;
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN || getOAuthTokenFromFileDescriptor()) {
    return getClaudeAIOAuthTokens();
  }
  try {
    const secureStorage = getSecureStorage();
    const storageData = await secureStorage.readAsync();
    const oauthData = storageData?.claudeAiOauth;
    if (!oauthData?.accessToken) {
      return null;
    }
    return oauthData;
  } catch (error) {
    logError(error);
    return null;
  }
}
function checkAndRefreshOAuthTokenIfNeeded(retryCount = 0, force = false) {
  if (retryCount === 0 && !force) {
    if (pendingRefreshCheck) {
      return pendingRefreshCheck;
    }
    const promise = checkAndRefreshOAuthTokenIfNeededImpl(retryCount, force);
    pendingRefreshCheck = promise.finally(() => {
      pendingRefreshCheck = null;
    });
    return pendingRefreshCheck;
  }
  return checkAndRefreshOAuthTokenIfNeededImpl(retryCount, force);
}
async function checkAndRefreshOAuthTokenIfNeededImpl(retryCount, force) {
  const MAX_RETRIES = 5;
  await invalidateOAuthCacheIfDiskChanged();
  const tokens = getClaudeAIOAuthTokens();
  if (!force) {
    if (!tokens?.refreshToken || !isOAuthTokenExpired(tokens.expiresAt)) {
      return false;
    }
  }
  if (!tokens?.refreshToken) {
    return false;
  }
  if (!shouldUseClaudeAIAuth(tokens.scopes)) {
    return false;
  }
  getClaudeAIOAuthTokens.cache?.clear?.();
  clearKeychainCache();
  const freshTokens = await getClaudeAIOAuthTokensAsync();
  if (!freshTokens?.refreshToken || !isOAuthTokenExpired(freshTokens.expiresAt)) {
    return false;
  }
  const claudeDir = getClaudeConfigHomeDir();
  await mkdir4(claudeDir, { recursive: true });
  let release;
  try {
    logEvent("tengu_oauth_token_refresh_lock_acquiring", {});
    release = await lock(claudeDir);
    logEvent("tengu_oauth_token_refresh_lock_acquired", {});
  } catch (err) {
    if (err.code === "ELOCKED") {
      if (retryCount < MAX_RETRIES) {
        logEvent("tengu_oauth_token_refresh_lock_retry", {
          retryCount: retryCount + 1
        });
        await sleep(1000 + Math.random() * 1000);
        return checkAndRefreshOAuthTokenIfNeededImpl(retryCount + 1, force);
      }
      logEvent("tengu_oauth_token_refresh_lock_retry_limit_reached", {
        maxRetries: MAX_RETRIES
      });
      return false;
    }
    logError(err);
    logEvent("tengu_oauth_token_refresh_lock_error", {
      error: errorMessage(err)
    });
    return false;
  }
  try {
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearKeychainCache();
    const lockedTokens = await getClaudeAIOAuthTokensAsync();
    if (!lockedTokens?.refreshToken || !isOAuthTokenExpired(lockedTokens.expiresAt)) {
      logEvent("tengu_oauth_token_refresh_race_resolved", {});
      return false;
    }
    logEvent("tengu_oauth_token_refresh_starting", {});
    const refreshedTokens = await refreshOAuthToken(lockedTokens.refreshToken, {
      scopes: shouldUseClaudeAIAuth(lockedTokens.scopes) ? undefined : lockedTokens.scopes
    });
    saveOAuthTokensIfNeeded(refreshedTokens);
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearKeychainCache();
    return true;
  } catch (error) {
    logError(error);
    getClaudeAIOAuthTokens.cache?.clear?.();
    clearKeychainCache();
    const currentTokens = await getClaudeAIOAuthTokensAsync();
    if (currentTokens && !isOAuthTokenExpired(currentTokens.expiresAt)) {
      logEvent("tengu_oauth_token_refresh_race_recovered", {});
      return true;
    }
    return false;
  } finally {
    logEvent("tengu_oauth_token_refresh_lock_releasing", {});
    await release();
    logEvent("tengu_oauth_token_refresh_lock_released", {});
  }
}
function isClaudeAISubscriber() {
  if (!isAnthropicAuthEnabled()) {
    return false;
  }
  return shouldUseClaudeAIAuth(getClaudeAIOAuthTokens()?.scopes);
}
function hasProfileScope() {
  return getClaudeAIOAuthTokens()?.scopes?.includes(CLAUDE_AI_PROFILE_SCOPE) ?? false;
}
function is1PApiCustomer() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY)) {
    return false;
  }
  if (isClaudeAISubscriber()) {
    return false;
  }
  return true;
}
function getOauthAccountInfo() {
  return isAnthropicAuthEnabled() ? getGlobalConfig().oauthAccount : undefined;
}
function isOverageProvisioningAllowed() {
  const accountInfo = getOauthAccountInfo();
  const billingType = accountInfo?.billingType;
  if (!isClaudeAISubscriber() || !billingType) {
    return false;
  }
  if (billingType !== "stripe_subscription" && billingType !== "stripe_subscription_contracted" && billingType !== "apple_subscription" && billingType !== "google_play_subscription") {
    return false;
  }
  return true;
}
function hasOpusAccess() {
  const subscriptionType = getSubscriptionType();
  return subscriptionType === "max" || subscriptionType === "enterprise" || subscriptionType === "team" || subscriptionType === "pro" || subscriptionType === null;
}
function getSubscriptionType() {
  if (shouldUseMockSubscription()) {
    return getMockSubscriptionType();
  }
  if (!isAnthropicAuthEnabled()) {
    return null;
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (!oauthTokens) {
    return null;
  }
  return oauthTokens.subscriptionType ?? null;
}
function isMaxSubscriber() {
  return getSubscriptionType() === "max";
}
function isTeamSubscriber() {
  return getSubscriptionType() === "team";
}
function isTeamPremiumSubscriber() {
  return getSubscriptionType() === "team" && getRateLimitTier() === "default_claude_max_5x";
}
function isEnterpriseSubscriber() {
  return getSubscriptionType() === "enterprise";
}
function isProSubscriber() {
  return getSubscriptionType() === "pro";
}
function getRateLimitTier() {
  if (!isAnthropicAuthEnabled()) {
    return null;
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (!oauthTokens) {
    return null;
  }
  return oauthTokens.rateLimitTier ?? null;
}
function getSubscriptionName() {
  const subscriptionType = getSubscriptionType();
  switch (subscriptionType) {
    case "enterprise":
      return "MiMo Enterprise";
    case "team":
      return "MiMo Team";
    case "max":
      return "MiMo Max";
    case "pro":
      return "MiMo Pro";
    default:
      return "MiMo API";
  }
}
function isUsing3PServices() {
  return !!(isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY));
}
function getConfiguredOtelHeadersHelper() {
  const mergedSettings = getSettings_DEPRECATED() || {};
  return mergedSettings.otelHeadersHelper;
}
function isOtelHeadersHelperFromProjectOrLocalSettings() {
  const otelHeadersHelper = getConfiguredOtelHeadersHelper();
  if (!otelHeadersHelper) {
    return false;
  }
  const projectSettings = getSettingsForSource("projectSettings");
  const localSettings = getSettingsForSource("localSettings");
  return projectSettings?.otelHeadersHelper === otelHeadersHelper || localSettings?.otelHeadersHelper === otelHeadersHelper;
}
function getOtelHeadersFromHelper() {
  const otelHeadersHelper = getConfiguredOtelHeadersHelper();
  if (!otelHeadersHelper) {
    return {};
  }
  const debounceMs = parseInt(process.env.CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS || DEFAULT_OTEL_HEADERS_DEBOUNCE_MS.toString(), 10);
  if (cachedOtelHeaders && Date.now() - cachedOtelHeadersTimestamp < debounceMs) {
    return cachedOtelHeaders;
  }
  if (isOtelHeadersHelperFromProjectOrLocalSettings()) {
    const hasTrust = checkHasTrustDialogAccepted();
    if (!hasTrust) {
      return {};
    }
  }
  try {
    const result = execSyncWithDefaults_DEPRECATED(otelHeadersHelper, {
      timeout: 30000
    })?.toString().trim();
    if (!result) {
      throw new Error("otelHeadersHelper did not return a valid value");
    }
    const headers = jsonParse(result);
    if (typeof headers !== "object" || headers === null || Array.isArray(headers)) {
      throw new Error("otelHeadersHelper must return a JSON object with string key-value pairs");
    }
    for (const [key, value] of Object.entries(headers)) {
      if (typeof value !== "string") {
        throw new Error(`otelHeadersHelper returned non-string value for key "${key}": ${typeof value}`);
      }
    }
    cachedOtelHeaders = headers;
    cachedOtelHeadersTimestamp = Date.now();
    return cachedOtelHeaders;
  } catch (error) {
    logError(new Error(`Error getting OpenTelemetry headers from otelHeadersHelper (in settings): ${errorMessage(error)}`));
    throw error;
  }
}
function isConsumerPlan(plan) {
  return plan === "max" || plan === "pro";
}
function isConsumerSubscriber() {
  const subscriptionType = getSubscriptionType();
  return isClaudeAISubscriber() && subscriptionType !== null && isConsumerPlan(subscriptionType);
}
function getAccountInformation() {
  const apiProvider = getAPIProvider();
  if (apiProvider !== "firstParty") {
    return;
  }
  const { source: authTokenSource } = getAuthTokenSource();
  const accountInfo = {};
  if (authTokenSource === "CLAUDE_CODE_OAUTH_TOKEN" || authTokenSource === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR") {
    accountInfo.tokenSource = authTokenSource;
  } else if (isClaudeAISubscriber()) {
    accountInfo.subscription = getSubscriptionName();
  } else {
    accountInfo.tokenSource = authTokenSource;
  }
  const { key: apiKey, source: apiKeySource } = getAnthropicApiKeyWithSource();
  if (apiKey) {
    accountInfo.apiKeySource = apiKeySource;
  }
  if (authTokenSource === "claude.ai" || apiKeySource === "/login managed key") {
    const orgName = getOauthAccountInfo()?.organizationName;
    if (orgName) {
      accountInfo.organization = orgName;
    }
  }
  const email = getOauthAccountInfo()?.emailAddress;
  if ((authTokenSource === "claude.ai" || apiKeySource === "/login managed key") && email) {
    accountInfo.email = email;
  }
  return accountInfo;
}
async function validateForceLoginOrg() {
  if (process.env.ANTHROPIC_UNIX_SOCKET) {
    return { valid: true };
  }
  if (!isAnthropicAuthEnabled()) {
    return { valid: true };
  }
  const requiredOrgUuid = getSettingsForSource("policySettings")?.forceLoginOrgUUID;
  if (!requiredOrgUuid) {
    return { valid: true };
  }
  await checkAndRefreshOAuthTokenIfNeeded();
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens) {
    return { valid: true };
  }
  const { source } = getAuthTokenSource();
  const isEnvVarToken = source === "CLAUDE_CODE_OAUTH_TOKEN" || source === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
  const profile = await getOauthProfileFromOauthToken(tokens.accessToken);
  if (!profile) {
    return {
      valid: false,
      message: `Unable to verify organization for the current authentication token.
This machine requires organization ${requiredOrgUuid} but the profile could not be fetched.
This may be a network error, or the token may lack the user:profile scope required for
verification (tokens from 'claude setup-token' do not include this scope).
Try again, or obtain a full-scope token via 'mimo auth login'.`
    };
  }
  const tokenOrgUuid = profile.organization.uuid;
  if (tokenOrgUuid === requiredOrgUuid) {
    return { valid: true };
  }
  if (isEnvVarToken) {
    const envVarName = source === "CLAUDE_CODE_OAUTH_TOKEN" ? "CLAUDE_CODE_OAUTH_TOKEN" : "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
    return {
      valid: false,
      message: `The ${envVarName} environment variable provides a token for a
different organization than required by this machine's managed settings.

Required organization: ${requiredOrgUuid}
Token organization:   ${tokenOrgUuid}

Remove the environment variable or obtain a token for the correct organization.`
    };
  }
  return {
    valid: false,
    message: `Your authentication token belongs to organization ${tokenOrgUuid},
but this machine requires organization ${requiredOrgUuid}.

Please log in with the correct organization: claude auth login`
  };
}
var DEFAULT_API_KEY_HELPER_TTL, _apiKeyHelperCache = null, _apiKeyHelperInflight = null, _apiKeyHelperEpoch = 0, DEFAULT_AWS_STS_TTL, AWS_AUTH_REFRESH_TIMEOUT_MS, refreshAndGetAwsCredentials, GCP_CREDENTIALS_CHECK_TIMEOUT_MS = 5000, DEFAULT_GCP_CREDENTIAL_TTL = 3600000, GCP_AUTH_REFRESH_TIMEOUT_MS = 180000, refreshGcpCredentialsIfNeeded, getApiKeyFromConfigOrMacOSKeychain, getClaudeAIOAuthTokens, lastCredentialsMtimeMs = 0, pending401Handlers, pendingRefreshCheck = null, cachedOtelHeaders = null, cachedOtelHeadersTimestamp = 0, DEFAULT_OTEL_HEADERS_DEBOUNCE_MS = 1740000, GcpCredentialsTimeoutError;
var init_auth2 = __esm(() => {
  init_source();
  init_execa();
  init_memoize();
  init_oauth();
  init_analytics();
  init_modelStrings();
  init_providers();
  init_state();
  init_mockRateLimits();
  init_client2();
  init_getOauthProfile();
  init_authFileDescriptor();
  init_authPortable();
  init_aws();
  init_awsAuthStatusManager();
  init_betas2();
  init_config();
  init_debug();
  init_envUtils();
  init_errors();
  init_execFileNoThrow();
  init_lockfile();
  init_log();
  init_memoize2();
  init_secureStorage();
  init_keychainPrefetch();
  init_macOsKeychainHelpers();
  init_settings2();
  init_sleep();
  init_slowOperations();
  init_toolSchemaCache();
  DEFAULT_API_KEY_HELPER_TTL = 5 * 60 * 1000;
  DEFAULT_AWS_STS_TTL = 60 * 60 * 1000;
  AWS_AUTH_REFRESH_TIMEOUT_MS = 3 * 60 * 1000;
  refreshAndGetAwsCredentials = memoizeWithTTLAsync(async () => {
    const refreshed2 = await runAwsAuthRefresh();
    const credentials = await getAwsCredsFromCredentialExport();
    if (refreshed2 || credentials) {
      await clearAwsIniCache();
    }
    return credentials;
  }, DEFAULT_AWS_STS_TTL);
  refreshGcpCredentialsIfNeeded = memoizeWithTTLAsync(async () => {
    const refreshed2 = await runGcpAuthRefresh();
    return refreshed2;
  }, DEFAULT_GCP_CREDENTIAL_TTL);
  getApiKeyFromConfigOrMacOSKeychain = memoize_default(() => {
    if (isBareMode())
      return null;
    if (process.platform === "darwin") {
      const prefetch = getLegacyApiKeyPrefetchResult();
      if (prefetch) {
        if (prefetch.stdout) {
          return { key: prefetch.stdout, source: "/login managed key" };
        }
      } else {
        const storageServiceName = getMacOsKeychainStorageServiceName();
        try {
          const result = execSyncWithDefaults_DEPRECATED(`security find-generic-password -a $USER -w -s "${storageServiceName}"`);
          if (result) {
            return { key: result, source: "/login managed key" };
          }
        } catch (e) {
          logError(e);
        }
      }
    }
    const config = getGlobalConfig();
    if (!config.primaryApiKey) {
      return null;
    }
    return { key: config.primaryApiKey, source: "/login managed key" };
  });
  getClaudeAIOAuthTokens = memoize_default(() => {
    if (isBareMode())
      return null;
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN) {
      return {
        accessToken: process.env.CLAUDE_CODE_OAUTH_TOKEN,
        refreshToken: null,
        expiresAt: null,
        scopes: ["user:inference"],
        subscriptionType: null,
        rateLimitTier: null
      };
    }
    const oauthTokenFromFd = getOAuthTokenFromFileDescriptor();
    if (oauthTokenFromFd) {
      return {
        accessToken: oauthTokenFromFd,
        refreshToken: null,
        expiresAt: null,
        scopes: ["user:inference"],
        subscriptionType: null,
        rateLimitTier: null
      };
    }
    try {
      const secureStorage = getSecureStorage();
      const storageData = secureStorage.read();
      const oauthData = storageData?.claudeAiOauth;
      if (!oauthData?.accessToken) {
        return null;
      }
      return oauthData;
    } catch (error) {
      logError(error);
      return null;
    }
  });
  pending401Handlers = new Map;
  GcpCredentialsTimeoutError = class GcpCredentialsTimeoutError extends Error {
  };
});

// src/services/oauth/client.ts
function shouldUseClaudeAIAuth(scopes) {
  return Boolean(scopes?.includes(CLAUDE_AI_INFERENCE_SCOPE));
}
function parseScopes(scopeString) {
  return scopeString?.split(" ").filter(Boolean) ?? [];
}
function buildAuthUrl({
  codeChallenge,
  state,
  port,
  isManual,
  loginWithClaudeAi,
  inferenceOnly,
  orgUUID,
  loginHint,
  loginMethod
}) {
  const authUrlBase = loginWithClaudeAi ? getOauthConfig().CLAUDE_AI_AUTHORIZE_URL : getOauthConfig().CONSOLE_AUTHORIZE_URL;
  const authUrl = new URL(authUrlBase);
  authUrl.searchParams.append("code", "true");
  authUrl.searchParams.append("client_id", getOauthConfig().CLIENT_ID);
  authUrl.searchParams.append("response_type", "code");
  authUrl.searchParams.append("redirect_uri", isManual ? getOauthConfig().MANUAL_REDIRECT_URL : `http://localhost:${port}/callback`);
  const scopesToUse = inferenceOnly ? [CLAUDE_AI_INFERENCE_SCOPE] : ALL_OAUTH_SCOPES;
  authUrl.searchParams.append("scope", scopesToUse.join(" "));
  authUrl.searchParams.append("code_challenge", codeChallenge);
  authUrl.searchParams.append("code_challenge_method", "S256");
  authUrl.searchParams.append("state", state);
  if (orgUUID) {
    authUrl.searchParams.append("orgUUID", orgUUID);
  }
  if (loginHint) {
    authUrl.searchParams.append("login_hint", loginHint);
  }
  if (loginMethod) {
    authUrl.searchParams.append("login_method", loginMethod);
  }
  return authUrl.toString();
}
async function exchangeCodeForTokens(authorizationCode, state, codeVerifier, port, useManualRedirect = false, expiresIn) {
  const requestBody = {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: useManualRedirect ? getOauthConfig().MANUAL_REDIRECT_URL : `http://localhost:${port}/callback`,
    client_id: getOauthConfig().CLIENT_ID,
    code_verifier: codeVerifier,
    state
  };
  if (expiresIn !== undefined) {
    requestBody.expires_in = expiresIn;
  }
  const response = await axios_default.post(getOauthConfig().TOKEN_URL, requestBody, {
    headers: { "Content-Type": "application/json" },
    timeout: 15000
  });
  if (response.status !== 200) {
    throw new Error(response.status === 401 ? "Authentication failed: Invalid authorization code" : `Token exchange failed (${response.status}): ${response.statusText}`);
  }
  logEvent("tengu_oauth_token_exchange_success", {});
  return response.data;
}
async function refreshOAuthToken(refreshToken, { scopes: requestedScopes } = {}) {
  const requestBody = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: getOauthConfig().CLIENT_ID,
    scope: ((requestedScopes?.length) ? requestedScopes : CLAUDE_AI_OAUTH_SCOPES).join(" ")
  };
  try {
    const response = await axios_default.post(getOauthConfig().TOKEN_URL, requestBody, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000
    });
    if (response.status !== 200) {
      throw new Error(`Token refresh failed: ${response.statusText}`);
    }
    const data = response.data;
    const {
      access_token: accessToken,
      refresh_token: newRefreshToken = refreshToken,
      expires_in: expiresIn
    } = data;
    const expiresAt = Date.now() + expiresIn * 1000;
    const scopes = parseScopes(data.scope);
    logEvent("tengu_oauth_token_refresh_success", {});
    const config = getGlobalConfig();
    const existing = getClaudeAIOAuthTokens();
    const haveProfileAlready = config.oauthAccount?.billingType !== undefined && config.oauthAccount?.accountCreatedAt !== undefined && config.oauthAccount?.subscriptionCreatedAt !== undefined && existing?.subscriptionType != null && existing?.rateLimitTier != null;
    const profileInfo = haveProfileAlready ? null : await fetchProfileInfo(accessToken);
    if (profileInfo && config.oauthAccount) {
      const updates = {};
      if (profileInfo.displayName !== undefined) {
        updates.displayName = profileInfo.displayName;
      }
      if (typeof profileInfo.hasExtraUsageEnabled === "boolean") {
        updates.hasExtraUsageEnabled = profileInfo.hasExtraUsageEnabled;
      }
      if (profileInfo.billingType !== null) {
        updates.billingType = profileInfo.billingType;
      }
      if (profileInfo.accountCreatedAt !== undefined) {
        updates.accountCreatedAt = profileInfo.accountCreatedAt;
      }
      if (profileInfo.subscriptionCreatedAt !== undefined) {
        updates.subscriptionCreatedAt = profileInfo.subscriptionCreatedAt;
      }
      if (Object.keys(updates).length > 0) {
        saveGlobalConfig((current) => ({
          ...current,
          oauthAccount: current.oauthAccount ? { ...current.oauthAccount, ...updates } : current.oauthAccount
        }));
      }
    }
    return {
      accessToken,
      refreshToken: newRefreshToken,
      expiresAt,
      scopes,
      subscriptionType: profileInfo?.subscriptionType ?? existing?.subscriptionType ?? null,
      rateLimitTier: profileInfo?.rateLimitTier ?? existing?.rateLimitTier ?? null,
      profile: profileInfo?.rawProfile,
      tokenAccount: data.account ? {
        uuid: data.account.uuid,
        emailAddress: data.account.email_address,
        organizationUuid: data.organization?.uuid
      } : undefined
    };
  } catch (error) {
    const responseBody = axios_default.isAxiosError(error) && error.response?.data ? JSON.stringify(error.response.data) : undefined;
    logEvent("tengu_oauth_token_refresh_failure", {
      error: error.message,
      ...responseBody && {
        responseBody
      }
    });
    throw error;
  }
}
async function fetchAndStoreUserRoles(accessToken) {
  const response = await axios_default.get(getOauthConfig().ROLES_URL, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (response.status !== 200) {
    throw new Error(`Failed to fetch user roles: ${response.statusText}`);
  }
  const data = response.data;
  const config = getGlobalConfig();
  if (!config.oauthAccount) {
    throw new Error("OAuth account information not found in config");
  }
  saveGlobalConfig((current) => ({
    ...current,
    oauthAccount: current.oauthAccount ? {
      ...current.oauthAccount,
      organizationRole: data.organization_role,
      workspaceRole: data.workspace_role,
      organizationName: data.organization_name
    } : current.oauthAccount
  }));
  logEvent("tengu_oauth_roles_stored", {
    org_role: data.organization_role
  });
}
async function createAndStoreApiKey(accessToken) {
  try {
    const response = await axios_default.post(getOauthConfig().API_KEY_URL, null, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const apiKey = response.data?.raw_key;
    if (apiKey) {
      await saveApiKey(apiKey);
      logEvent("tengu_oauth_api_key", {
        status: "success",
        statusCode: response.status
      });
      return apiKey;
    }
    return null;
  } catch (error) {
    logEvent("tengu_oauth_api_key", {
      status: "failure",
      error: error instanceof Error ? error.message : String(error)
    });
    throw error;
  }
}
function isOAuthTokenExpired(expiresAt) {
  if (expiresAt === null) {
    return false;
  }
  const bufferTime = 5 * 60 * 1000;
  const now = Date.now();
  const expiresWithBuffer = now + bufferTime;
  return expiresWithBuffer >= expiresAt;
}
async function fetchProfileInfo(accessToken) {
  const profile = await getOauthProfileFromOauthToken(accessToken);
  const orgType = profile?.organization?.organization_type;
  let subscriptionType = null;
  switch (orgType) {
    case "claude_max":
      subscriptionType = "max";
      break;
    case "claude_pro":
      subscriptionType = "pro";
      break;
    case "claude_enterprise":
      subscriptionType = "enterprise";
      break;
    case "claude_team":
      subscriptionType = "team";
      break;
    default:
      subscriptionType = null;
      break;
  }
  const result = {
    subscriptionType,
    rateLimitTier: profile?.organization?.rate_limit_tier ?? null,
    hasExtraUsageEnabled: profile?.organization?.has_extra_usage_enabled ?? null,
    billingType: profile?.organization?.billing_type ?? null
  };
  if (profile?.account?.display_name) {
    result.displayName = profile.account.display_name;
  }
  if (profile?.account?.created_at) {
    result.accountCreatedAt = profile.account.created_at;
  }
  if (profile?.organization?.subscription_created_at) {
    result.subscriptionCreatedAt = profile.organization.subscription_created_at;
  }
  logEvent("tengu_oauth_profile_fetch_success", {});
  return { ...result, rawProfile: profile };
}
async function getOrganizationUUID() {
  const globalConfig = getGlobalConfig();
  const orgUUID = globalConfig.oauthAccount?.organizationUuid;
  if (orgUUID) {
    return orgUUID;
  }
  const accessToken = getClaudeAIOAuthTokens()?.accessToken;
  if (accessToken === undefined || !hasProfileScope()) {
    return null;
  }
  const profile = await getOauthProfileFromOauthToken(accessToken);
  const profileOrgUUID = profile?.organization?.uuid;
  if (!profileOrgUUID) {
    return null;
  }
  return profileOrgUUID;
}
async function populateOAuthAccountInfoIfNeeded() {
  const envAccountUuid = process.env.CLAUDE_CODE_ACCOUNT_UUID;
  const envUserEmail = process.env.CLAUDE_CODE_USER_EMAIL;
  const envOrganizationUuid = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
  const hasEnvVars = Boolean(envAccountUuid && envUserEmail && envOrganizationUuid);
  if (envAccountUuid && envUserEmail && envOrganizationUuid) {
    if (!getGlobalConfig().oauthAccount) {
      storeOAuthAccountInfo({
        accountUuid: envAccountUuid,
        emailAddress: envUserEmail,
        organizationUuid: envOrganizationUuid
      });
    }
  }
  await checkAndRefreshOAuthTokenIfNeeded();
  const config = getGlobalConfig();
  if (config.oauthAccount && config.oauthAccount.billingType !== undefined && config.oauthAccount.accountCreatedAt !== undefined && config.oauthAccount.subscriptionCreatedAt !== undefined || !isClaudeAISubscriber() || !hasProfileScope()) {
    return false;
  }
  const tokens = getClaudeAIOAuthTokens();
  if (tokens?.accessToken) {
    const profile = await getOauthProfileFromOauthToken(tokens.accessToken);
    if (profile) {
      if (hasEnvVars) {
        logForDebugging("OAuth profile fetch succeeded, overriding env var account info", { level: "info" });
      }
      storeOAuthAccountInfo({
        accountUuid: profile.account.uuid,
        emailAddress: profile.account.email,
        organizationUuid: profile.organization.uuid,
        displayName: profile.account.display_name || undefined,
        hasExtraUsageEnabled: profile.organization.has_extra_usage_enabled ?? false,
        billingType: profile.organization.billing_type ?? undefined,
        accountCreatedAt: profile.account.created_at,
        subscriptionCreatedAt: profile.organization.subscription_created_at ?? undefined
      });
      return true;
    }
  }
  return false;
}
function storeOAuthAccountInfo({
  accountUuid,
  emailAddress,
  organizationUuid,
  displayName,
  hasExtraUsageEnabled,
  billingType,
  accountCreatedAt,
  subscriptionCreatedAt
}) {
  const accountInfo = {
    accountUuid,
    emailAddress,
    organizationUuid,
    hasExtraUsageEnabled,
    billingType,
    accountCreatedAt,
    subscriptionCreatedAt
  };
  if (displayName) {
    accountInfo.displayName = displayName;
  }
  saveGlobalConfig((current) => {
    if (current.oauthAccount?.accountUuid === accountInfo.accountUuid && current.oauthAccount?.emailAddress === accountInfo.emailAddress && current.oauthAccount?.organizationUuid === accountInfo.organizationUuid && current.oauthAccount?.displayName === accountInfo.displayName && current.oauthAccount?.hasExtraUsageEnabled === accountInfo.hasExtraUsageEnabled && current.oauthAccount?.billingType === accountInfo.billingType && current.oauthAccount?.accountCreatedAt === accountInfo.accountCreatedAt && current.oauthAccount?.subscriptionCreatedAt === accountInfo.subscriptionCreatedAt) {
      return current;
    }
    return { ...current, oauthAccount: accountInfo };
  });
}
var init_client2 = __esm(() => {
  init_axios();
  init_analytics();
  init_oauth();
  init_auth2();
  init_config();
  init_debug();
  init_getOauthProfile();
});

export { _baseSet_default, init__baseSet, pickBy_default, init_pickBy, isEqual_default, init_isEqual, init_lodash, sequential, init_sequential, _baseFor_default, init__baseFor, isPlainObject_default, init_isPlainObject, _overRest_default, init__overRest, _setToString_default, init__setToString, detectEncodingForResolvedPath, readFileSyncWithMetadata, readFileSync, init_fileRead, setSessionCache, resetSyncCache, setEligibility, getSettingsPath, getRemoteManagedSettingsSyncFromCache, init_syncCacheState, pathExists, MAX_OUTPUT_SIZE, readFileSafe, getFileModificationTime, getFileModificationTimeAsync, writeTextContent, detectFileEncoding, detectLineEndings, convertLeadingTabsToSpaces, getDisplayPath, findSimilarFile, FILE_NOT_FOUND_CWD_NOTE, suggestPathUnderCwd, isCompactLinePrefixEnabled, addLineNumbers, stripLineNumberPrefix, isDirEmpty, readFileSyncCached, getDesktopPath, isFileWithinReadSizeLimit, normalizePathForComparison, pathsEqual, init_file, isPathGitignored, init_gitignore, SETTING_SOURCES, getSettingSourceName, getSourceDisplayName, getSettingSourceDisplayNameLowercase, getSettingSourceDisplayNameCapitalized, parseSettingSourcesFlag, getEnabledSettingSources, isSettingSourceEnabled, SOURCES, init_constants, consumeInternalWrite, clearInternalWrites, init_internalWrites, getManagedFilePath, getManagedSettingsDropInDir, init_managedPath, BLACK_CIRCLE, BULLET_OPERATOR, TEARDROP_ASTERISK, UP_ARROW, DOWN_ARROW, LIGHTNING_BOLT, EFFORT_LOW, EFFORT_MEDIUM, EFFORT_HIGH, EFFORT_XHIGH, EFFORT_MAX, PLAY_ICON, PAUSE_ICON, REFRESH_ARROW, CHANNEL_ARROW, DIAMOND_OPEN, DIAMOND_FILLED, REFERENCE_MARK, FLAG_ICON, BLOCKQUOTE_BAR, BRIDGE_SPINNER_FRAMES, BRIDGE_READY_INDICATOR, BRIDGE_FAILED_INDICATOR, init_figures, permissionModeSchema, externalPermissionModeSchema, isExternalPermissionMode, toExternalPermissionMode, permissionModeFromString, permissionModeTitle, isDefaultMode, permissionModeShortTitle, permissionModeSymbol, getModeColor, init_PermissionMode, HOOK_EVENTS, init_agentSdkTypes, DEFAULT_HOOK_SHELL, init_shellProvider, HooksSchema, ALLOWED_OFFICIAL_MARKETPLACE_NAMES, isMarketplaceAutoUpdate, validateOfficialNameSource, PluginHooksSchema, LspServerConfigSchema, PluginManifestSchema, isLocalPluginSource, isLocalMarketplaceSource, PluginMarketplaceEntrySchema, PluginMarketplaceSchema, PluginIdSchema, InstalledPluginsFileSchemaV1, InstalledPluginsFileSchemaV2, KnownMarketplacesFileSchema, init_schemas, mcpInfoFromString, getMcpPrefix, buildMcpToolName, getToolNameForPermissionCheck, getMcpDisplayName, extractMcpToolDisplayName, init_mcpStringUtils, AGENT_TOOL_NAME, LEGACY_AGENT_TOOL_NAME, VERIFICATION_AGENT_TYPE, ONE_SHOT_BUILTIN_AGENT_TYPES, init_constants2 as init_constants1, TASK_OUTPUT_TOOL_NAME, init_constants3 as init_constants2, TASK_STOP_TOOL_NAME, DESCRIPTION, init_prompt, BRIEF_TOOL_NAME, LEGACY_BRIEF_TOOL_NAME, DESCRIPTION2 as DESCRIPTION1, BRIEF_TOOL_PROMPT, exports_prompt, init_prompt2 as init_prompt1, normalizeLegacyToolName, getLegacyToolNames, permissionRuleValueFromString, permissionRuleValueToString, init_permissionRuleParser, escapeRegExp, capitalize, plural, firstLineOf, countCharInString, normalizeFullWidthDigits, normalizeFullWidthSpace, safeJoinLines, EndTruncatingAccumulator, truncateToLines, init_stringUtils, CUSTOMIZATION_SURFACES, SettingsSchema, isMcpServerNameEntry, isMcpServerCommandEntry, isMcpServerUrlEntry, init_types2 as init_types, validateSettingsFileContent, init_validation2 as init_validation, startMdmRawRead, init_rawRead, ensureMdmSettingsLoaded, getMdmSettings, getHkcuSettings, setMdmSettingsCache, refreshMdmSettings, init_settings, getManagedFileSettingsPresence, parseSettingsFile, getSettingsRootPathForSource, getSettingsFilePathForSource, getRelativeSettingsFilePathForSource, getSettingsForSource, getPolicySettingsOrigin, updateSettingsForSource, getManagedSettingsKeysForLogging, getInitialSettings, getSettings_DEPRECATED, getSettingsWithSources, getSettingsWithErrors, hasSkipDangerousModePermissionPrompt, hasAutoModeOptIn, getUseAutoModeDuringPlan, getAutoModeConfig, rawSettingsContainsKey, init_settings2 as init_settings1, createBedrockRuntimeClient, getInferenceProfileBackingModel, isFoundationModel, getBedrockRegionPrefix, applyBedrockRegionPrefix, init_bedrock, CLAUDE_OPUS_4_6_CONFIG, init_configs, isMiMoRuntime, applyMiMoRuntimeConfig, init_mimoRuntimeConfig, getAPIProvider, getAPIProviderForStatsig, isFirstPartyAnthropicBaseUrl, init_providers, getModelStrings2 as getModelStrings, ensureModelStringsInitialized, init_modelStrings, hasConsoleBillingAccess, hasClaudeAiBillingAccess, init_billing, getMockHeaderless429Message, getMockHeaders, applyMockHeaders, shouldProcessMockLimits, isMockFastModeRateLimitScenario, checkMockFastModeRateLimit, init_mockRateLimits, getOauthProfileFromApiKey, getOauthProfileFromOauthToken, init_getOauthProfile, shouldUseClaudeAIAuth, parseScopes, buildAuthUrl, exchangeCodeForTokens, refreshOAuthToken, fetchAndStoreUserRoles, createAndStoreApiKey, isOAuthTokenExpired, fetchProfileInfo, getOrganizationUUID, populateOAuthAccountInfoIfNeeded, storeOAuthAccountInfo, init_client2 as init_client, CCR_SESSION_INGRESS_TOKEN_PATH, maybePersistTokenForSubprocesses, readTokenFromWellKnownFile, init_authFileDescriptor, clearKeychainCache, init_macOsKeychainHelpers, normalizeApiKeyForConfig, init_authPortable, isAwsCredentialsProviderError, init_aws, AwsAuthStatusManager, init_awsAuthStatusManager, CONTEXT_1M_BETA_HEADER, CONTEXT_MANAGEMENT_BETA_HEADER, STRUCTURED_OUTPUTS_BETA_HEADER, EFFORT_BETA_HEADER, TASK_BUDGETS_BETA_HEADER, PROMPT_CACHING_SCOPE_BETA_HEADER, FAST_MODE_BETA_HEADER, REDACT_THINKING_BETA_HEADER, AFK_MODE_BETA_HEADER, ADVISOR_BETA_HEADER, VERTEX_COUNT_TOKENS_ALLOWED_BETAS, init_betas, getAntModelOverrideConfig, getAntModels, resolveAntModel, init_antModels, isFastModeEnabled, isFastModeAvailable, getFastModeUnavailableReason, FAST_MODE_MODEL_DISPLAY, getFastModeModel, getInitialFastModeSetting, isFastModeSupportedByModel, onCooldownTriggered, onCooldownExpired, getFastModeRuntimeState, triggerFastModeCooldown, clearFastModeCooldown, handleFastModeRejectedByAPI, onFastModeOverageRejection, handleFastModeOverageRejection, isFastModeCooldown, getFastModeState, onOrgFastModeChanged, resolveFastModeStatusFromCache, prefetchFastModeStatus, init_fastMode, COST_TIER_3_15, COST_HAIKU_35, COST_HAIKU_45, getOpus46CostTier, MODEL_COSTS, calculateUSDCost, calculateCostFromTokens, formatModelPricing, init_modelCost, MODEL_ALIASES, init_aliases, isModelAllowed, init_modelAllowlist, getSmallFastModel, isNonCustomOpusModel, getUserSpecifiedModelSetting, getMainLoopModel, getBestModel, getDefaultOpusModel, getDefaultSonnetModel, getDefaultHaikuModel, getRuntimeMainLoopModel, getDefaultMainLoopModelSetting, getDefaultMainLoopModel, firstPartyNameToCanonical, getCanonicalName, getClaudeAiUserDefaultModelDescription, renderDefaultModelSetting, getOpusPricingSuffix, isOpus1mMergeEnabled, renderModelSetting, getPublicModelDisplayName, renderModelName, getPublicModelName, parseUserSpecifiedModel, resolveSkillModelOverride, isLegacyModelRemapEnabled, modelDisplayString, getMarketingNameForModel, normalizeModelStringForAPI, init_model, getAnthropicClient, CLIENT_REQUEST_ID_HEADER, init_client as init_client1, refreshModelCapabilities, init_modelCapabilities, COMPACT_MAX_OUTPUT_TOKENS, CAPPED_DEFAULT_MAX_TOKENS, ESCALATED_MAX_TOKENS, is1mContextDisabled, has1mContext, getContextWindowForModel, getSonnet1mExpTreatmentEnabled, calculateContextPercentages, getModelMaxOutputTokens, getMaxThinkingTokensForModel, init_context, get3PModelCapabilityOverride, init_modelSupportOverrides, filterAllowedSdkBetas, modelSupportsStructuredOutputs, modelSupportsAutoMode, getToolSearchBetaHeader, shouldIncludeFirstPartyOnlyBetas, shouldUseGlobalCacheScope, getModelBetas, getBedrockExtraBodyParamsBetas, getMergedBetas, clearBetasCaches, init_betas2 as init_betas1, isMacOsKeychainLocked, init_macOsKeychainStorage, getSecureStorage, init_secureStorage, startKeychainPrefetch, ensureKeychainPrefetchCompleted, init_keychainPrefetch, getToolSchemaCache, clearToolSchemaCache, init_toolSchemaCache, isAnthropicAuthEnabled, getAuthTokenSource, getAnthropicApiKey, hasAnthropicApiKeyAuth, getAnthropicApiKeyWithSource, getConfiguredApiKeyHelper, isAwsAuthRefreshFromProjectSettings, isAwsCredentialExportFromProjectSettings, calculateApiKeyHelperTTL, getApiKeyHelperElapsedMs, getApiKeyFromApiKeyHelper, getApiKeyFromApiKeyHelperCached, clearApiKeyHelperCache, prefetchApiKeyFromApiKeyHelperIfSafe, refreshAwsAuth, refreshAndGetAwsCredentials, clearAwsCredentialsCache, isGcpAuthRefreshFromProjectSettings, checkGcpCredentialsValid, refreshGcpAuth, refreshGcpCredentialsIfNeeded, clearGcpCredentialsCache, prefetchGcpCredentialsIfSafe, prefetchAwsCredentialsAndBedRockInfoIfSafe, getApiKeyFromConfigOrMacOSKeychain, saveApiKey, isCustomApiKeyApproved, removeApiKey, saveOAuthTokensIfNeeded, getClaudeAIOAuthTokens, clearOAuthTokenCache, handleOAuth401Error, getClaudeAIOAuthTokensAsync, checkAndRefreshOAuthTokenIfNeeded, isClaudeAISubscriber, hasProfileScope, is1PApiCustomer, getOauthAccountInfo, isOverageProvisioningAllowed, hasOpusAccess, getSubscriptionType, isMaxSubscriber, isTeamSubscriber, isTeamPremiumSubscriber, isEnterpriseSubscriber, isProSubscriber, getRateLimitTier, getSubscriptionName, isUsing3PServices, isOtelHeadersHelperFromProjectOrLocalSettings, getOtelHeadersFromHelper, isConsumerSubscriber, getAccountInformation, validateForceLoginOrg, exports_auth, init_auth2 as init_auth, getClaudeCodeUserAgent, init_userAgent, WORKLOAD_CRON, getWorkload, runWithWorkload, init_workloadContext, getUserAgent, getMCPUserAgent, getWebFetchUserAgent, getAuthHeaders, withOAuth401Retry, init_http, initUser, resetUserCache, getCoreUserData, getGitEmail, init_user, LoggerProvider, ConsoleLogRecordExporter, BatchLogRecordProcessor, init_esm2 as init_esm, isAnalyticsDisabled, isFeedbackSurveyDisabled, init_config2 as init_config, initJetBrainsDetection, envDynamic, init_envDynamic, isAgentSwarmsEnabled, init_agentSwarmsEnabled, getAgentContext, runWithAgentContext, getSubagentLogName, consumeInvokingRequestId, init_agentContext, sanitizeToolNameForAnalytics, isToolDetailsLoggingEnabled, mcpToolDetailsForAnalytics, extractMcpToolDetails, extractSkillName, extractToolInputForTelemetry, getFileExtensionForAnalytics, getFileExtensionsFromBashCommand, getEventMetadata, init_metadata, isSinkKilled, init_sinkKillswitch, getEventSamplingConfig, shouldSampleEvent, shutdown1PEventLogging, is1PEventLoggingEnabled, logEventTo1P, logGrowthBookExperimentTo1P, initialize1PEventLogging, reinitialize1PEventLoggingIfConfigChanged, init_firstPartyEventLogger, onGrowthBookRefresh, hasGrowthBookEnvOverride, getAllGrowthBookFeatures, getGrowthBookConfigOverrides, setGrowthBookConfigOverride, clearGrowthBookConfigOverrides, getApiBaseUrlHost, initializeGrowthBook, getFeatureValue_DEPRECATED, getFeatureValue_CACHED_MAY_BE_STALE, getFeatureValue_CACHED_WITH_REFRESH, checkStatsigFeatureGate_CACHED_MAY_BE_STALE, checkSecurityRestrictionGate, checkGate_CACHED_OR_BLOCKING, refreshGrowthBookAfterAuthChange, resetGrowthBook, refreshGrowthBookFeatures, setupPeriodicGrowthBookRefresh, stopPeriodicGrowthBookRefresh, getDynamicConfig_BLOCKS_ON_INIT, getDynamicConfig_CACHED_MAY_BE_STALE, init_growthbook, isAutoMemoryEnabled, isExtractModeActive, getMemoryBaseDir, hasAutoMemPathOverride, getAutoMemPath, getAutoMemEntrypoint, isAutoMemPath, init_paths, NOTIFICATION_CHANNELS, EDITOR_MODES, TEAMMATE_MODES, init_configConstants, DEFAULT_GLOBAL_CONFIG, GLOBAL_CONFIG_KEYS, isGlobalConfigKey, PROJECT_CONFIG_KEYS, resetTrustDialogAcceptedCacheForTesting, checkHasTrustDialogAccepted, isPathTrusted, isProjectConfigKey, saveGlobalConfig, getGlobalConfigWriteCount, CONFIG_WRITE_DISPLAY_THRESHOLD, getGlobalConfig, getRemoteControlAtStartup, getCustomApiKeyStatus, enableConfigs, getProjectPathForConfig, getCurrentProjectConfig, saveCurrentProjectConfig, isAutoUpdaterDisabled, shouldSkipPluginAutoupdate, formatAutoUpdaterDisabledReason, getAutoUpdaterDisabledReason, getOrCreateUserID, recordFirstStartTime, getMemoryPath, getManagedClaudeRulesDir, getUserClaudeRulesDir, _getConfigForTesting, _wouldLoseAuthStateForTesting, _setGlobalConfigCacheForTesting, init_config as init_config1 };
