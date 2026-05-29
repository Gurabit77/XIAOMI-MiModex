// @bun
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/types/LogRecord.js
var require_LogRecord = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SeverityNumber = undefined;
  var SeverityNumber;
  (function(SeverityNumber2) {
    SeverityNumber2[SeverityNumber2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SeverityNumber2[SeverityNumber2["TRACE"] = 1] = "TRACE";
    SeverityNumber2[SeverityNumber2["TRACE2"] = 2] = "TRACE2";
    SeverityNumber2[SeverityNumber2["TRACE3"] = 3] = "TRACE3";
    SeverityNumber2[SeverityNumber2["TRACE4"] = 4] = "TRACE4";
    SeverityNumber2[SeverityNumber2["DEBUG"] = 5] = "DEBUG";
    SeverityNumber2[SeverityNumber2["DEBUG2"] = 6] = "DEBUG2";
    SeverityNumber2[SeverityNumber2["DEBUG3"] = 7] = "DEBUG3";
    SeverityNumber2[SeverityNumber2["DEBUG4"] = 8] = "DEBUG4";
    SeverityNumber2[SeverityNumber2["INFO"] = 9] = "INFO";
    SeverityNumber2[SeverityNumber2["INFO2"] = 10] = "INFO2";
    SeverityNumber2[SeverityNumber2["INFO3"] = 11] = "INFO3";
    SeverityNumber2[SeverityNumber2["INFO4"] = 12] = "INFO4";
    SeverityNumber2[SeverityNumber2["WARN"] = 13] = "WARN";
    SeverityNumber2[SeverityNumber2["WARN2"] = 14] = "WARN2";
    SeverityNumber2[SeverityNumber2["WARN3"] = 15] = "WARN3";
    SeverityNumber2[SeverityNumber2["WARN4"] = 16] = "WARN4";
    SeverityNumber2[SeverityNumber2["ERROR"] = 17] = "ERROR";
    SeverityNumber2[SeverityNumber2["ERROR2"] = 18] = "ERROR2";
    SeverityNumber2[SeverityNumber2["ERROR3"] = 19] = "ERROR3";
    SeverityNumber2[SeverityNumber2["ERROR4"] = 20] = "ERROR4";
    SeverityNumber2[SeverityNumber2["FATAL"] = 21] = "FATAL";
    SeverityNumber2[SeverityNumber2["FATAL2"] = 22] = "FATAL2";
    SeverityNumber2[SeverityNumber2["FATAL3"] = 23] = "FATAL3";
    SeverityNumber2[SeverityNumber2["FATAL4"] = 24] = "FATAL4";
  })(SeverityNumber = exports.SeverityNumber || (exports.SeverityNumber = {}));
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/NoopLogger.js
var require_NoopLogger = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NOOP_LOGGER = exports.NoopLogger = undefined;

  class NoopLogger {
    emit(_logRecord) {}
    enabled() {
      return false;
    }
  }
  exports.NoopLogger = NoopLogger;
  exports.NOOP_LOGGER = new NoopLogger;
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/internal/global-utils.js
var require_global_utils = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.API_BACKWARDS_COMPATIBILITY_VERSION = exports.makeGetter = exports._global = exports.GLOBAL_LOGS_API_KEY = undefined;
  exports.GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
  exports._global = globalThis;
  function makeGetter(requiredVersion, instance, fallback) {
    return (version) => version === requiredVersion ? instance : fallback;
  }
  exports.makeGetter = makeGetter;
  exports.API_BACKWARDS_COMPATIBILITY_VERSION = 1;
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/NoopLoggerProvider.js
var require_NoopLoggerProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NOOP_LOGGER_PROVIDER = exports.NoopLoggerProvider = undefined;
  var NoopLogger_1 = require_NoopLogger();

  class NoopLoggerProvider {
    getLogger(_name, _version, _options) {
      return new NoopLogger_1.NoopLogger;
    }
  }
  exports.NoopLoggerProvider = NoopLoggerProvider;
  exports.NOOP_LOGGER_PROVIDER = new NoopLoggerProvider;
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/ProxyLogger.js
var require_ProxyLogger = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProxyLogger = undefined;
  var NoopLogger_1 = require_NoopLogger();

  class ProxyLogger {
    constructor(provider, name, version, options) {
      this._provider = provider;
      this.name = name;
      this.version = version;
      this.options = options;
    }
    emit(logRecord) {
      this._getLogger().emit(logRecord);
    }
    enabled(options) {
      return this._getLogger().enabled(options);
    }
    _getLogger() {
      if (this._delegate) {
        return this._delegate;
      }
      const logger = this._provider._getDelegateLogger(this.name, this.version, this.options);
      if (!logger) {
        return NoopLogger_1.NOOP_LOGGER;
      }
      this._delegate = logger;
      return this._delegate;
    }
  }
  exports.ProxyLogger = ProxyLogger;
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/ProxyLoggerProvider.js
var require_ProxyLoggerProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProxyLoggerProvider = undefined;
  var NoopLoggerProvider_1 = require_NoopLoggerProvider();
  var ProxyLogger_1 = require_ProxyLogger();

  class ProxyLoggerProvider {
    getLogger(name, version, options) {
      var _a;
      return (_a = this._getDelegateLogger(name, version, options)) !== null && _a !== undefined ? _a : new ProxyLogger_1.ProxyLogger(this, name, version, options);
    }
    _getDelegate() {
      var _a;
      return (_a = this._delegate) !== null && _a !== undefined ? _a : NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER;
    }
    _setDelegate(delegate) {
      this._delegate = delegate;
    }
    _getDelegateLogger(name, version, options) {
      var _a;
      return (_a = this._delegate) === null || _a === undefined ? undefined : _a.getLogger(name, version, options);
    }
  }
  exports.ProxyLoggerProvider = ProxyLoggerProvider;
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/api/logs.js
var require_logs = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LogsAPI = undefined;
  var global_utils_1 = require_global_utils();
  var NoopLoggerProvider_1 = require_NoopLoggerProvider();
  var ProxyLoggerProvider_1 = require_ProxyLoggerProvider();

  class LogsAPI {
    constructor() {
      this._proxyLoggerProvider = new ProxyLoggerProvider_1.ProxyLoggerProvider;
    }
    static getInstance() {
      if (!this._instance) {
        this._instance = new LogsAPI;
      }
      return this._instance;
    }
    setGlobalLoggerProvider(provider) {
      if (global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY]) {
        return this.getLoggerProvider();
      }
      global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY] = (0, global_utils_1.makeGetter)(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, provider, NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER);
      this._proxyLoggerProvider._setDelegate(provider);
      return provider;
    }
    getLoggerProvider() {
      var _a, _b;
      return (_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY]) === null || _a === undefined ? undefined : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== undefined ? _b : this._proxyLoggerProvider;
    }
    getLogger(name, version, options) {
      return this.getLoggerProvider().getLogger(name, version, options);
    }
    disable() {
      delete global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY];
      this._proxyLoggerProvider = new ProxyLoggerProvider_1.ProxyLoggerProvider;
    }
  }
  exports.LogsAPI = LogsAPI;
});

// node_modules/.bun/@opentelemetry+api-logs@0.215.0/node_modules/@opentelemetry/api-logs/build/src/index.js
var require_src = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.logs = exports.NoopLogger = exports.NOOP_LOGGER = exports.SeverityNumber = undefined;
  var LogRecord_1 = require_LogRecord();
  Object.defineProperty(exports, "SeverityNumber", { enumerable: true, get: function() {
    return LogRecord_1.SeverityNumber;
  } });
  var NoopLogger_1 = require_NoopLogger();
  Object.defineProperty(exports, "NOOP_LOGGER", { enumerable: true, get: function() {
    return NoopLogger_1.NOOP_LOGGER;
  } });
  Object.defineProperty(exports, "NoopLogger", { enumerable: true, get: function() {
    return NoopLogger_1.NoopLogger;
  } });
  var logs_1 = require_logs();
  exports.logs = logs_1.LogsAPI.getInstance();
});

export { require_src };
