// @bun
import {
  require_aspromise,
  require_base64,
  require_eventemitter,
  require_float,
  require_index_node_http,
  require_inquire,
  require_pool,
  require_src as require_src3,
  require_utf8
} from "./chunk-adnxyg7j.js";
import {
  require_src1 as require_src2
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/version.js
var require_version = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VERSION = undefined;
  exports.VERSION = "0.215.0";
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/constants.js
var require_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = exports.DEFAULT_MAX_SEND_MESSAGE_LENGTH = exports.Propagate = exports.LogVerbosity = exports.Status = undefined;
  var Status;
  (function(Status2) {
    Status2[Status2["OK"] = 0] = "OK";
    Status2[Status2["CANCELLED"] = 1] = "CANCELLED";
    Status2[Status2["UNKNOWN"] = 2] = "UNKNOWN";
    Status2[Status2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    Status2[Status2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    Status2[Status2["NOT_FOUND"] = 5] = "NOT_FOUND";
    Status2[Status2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    Status2[Status2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    Status2[Status2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    Status2[Status2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    Status2[Status2["ABORTED"] = 10] = "ABORTED";
    Status2[Status2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    Status2[Status2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    Status2[Status2["INTERNAL"] = 13] = "INTERNAL";
    Status2[Status2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    Status2[Status2["DATA_LOSS"] = 15] = "DATA_LOSS";
    Status2[Status2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
  })(Status || (exports.Status = Status = {}));
  var LogVerbosity;
  (function(LogVerbosity2) {
    LogVerbosity2[LogVerbosity2["DEBUG"] = 0] = "DEBUG";
    LogVerbosity2[LogVerbosity2["INFO"] = 1] = "INFO";
    LogVerbosity2[LogVerbosity2["ERROR"] = 2] = "ERROR";
    LogVerbosity2[LogVerbosity2["NONE"] = 3] = "NONE";
  })(LogVerbosity || (exports.LogVerbosity = LogVerbosity = {}));
  var Propagate;
  (function(Propagate2) {
    Propagate2[Propagate2["DEADLINE"] = 1] = "DEADLINE";
    Propagate2[Propagate2["CENSUS_STATS_CONTEXT"] = 2] = "CENSUS_STATS_CONTEXT";
    Propagate2[Propagate2["CENSUS_TRACING_CONTEXT"] = 4] = "CENSUS_TRACING_CONTEXT";
    Propagate2[Propagate2["CANCELLATION"] = 8] = "CANCELLATION";
    Propagate2[Propagate2["DEFAULTS"] = 65535] = "DEFAULTS";
  })(Propagate || (exports.Propagate = Propagate = {}));
  exports.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
  exports.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4 * 1024 * 1024;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/package.json
var require_package = __commonJS((exports, module) => {
  module.exports = {
    name: "@grpc/grpc-js",
    version: "1.14.3",
    description: "gRPC Library for Node - pure JS implementation",
    homepage: "https://grpc.io/",
    repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js",
    main: "build/src/index.js",
    engines: {
      node: ">=12.10.0"
    },
    keywords: [],
    author: {
      name: "Google Inc."
    },
    types: "build/src/index.d.ts",
    license: "Apache-2.0",
    devDependencies: {
      "@grpc/proto-loader": "file:../proto-loader",
      "@types/gulp": "^4.0.17",
      "@types/gulp-mocha": "0.0.37",
      "@types/lodash": "^4.14.202",
      "@types/mocha": "^10.0.6",
      "@types/ncp": "^2.0.8",
      "@types/node": ">=20.11.20",
      "@types/pify": "^5.0.4",
      "@types/semver": "^7.5.8",
      "@typescript-eslint/eslint-plugin": "^7.1.0",
      "@typescript-eslint/parser": "^7.1.0",
      "@typescript-eslint/typescript-estree": "^7.1.0",
      "clang-format": "^1.8.0",
      eslint: "^8.42.0",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-node": "^11.1.0",
      "eslint-plugin-prettier": "^4.2.1",
      execa: "^2.0.3",
      gulp: "^4.0.2",
      "gulp-mocha": "^6.0.0",
      lodash: "^4.17.21",
      madge: "^5.0.1",
      "mocha-jenkins-reporter": "^0.4.1",
      ncp: "^2.0.0",
      pify: "^4.0.1",
      prettier: "^2.8.8",
      rimraf: "^3.0.2",
      semver: "^7.6.0",
      "ts-node": "^10.9.2",
      typescript: "^5.3.3"
    },
    contributors: [
      {
        name: "Google Inc."
      }
    ],
    scripts: {
      build: "npm run compile",
      clean: "rimraf ./build",
      compile: "tsc -p .",
      format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
      lint: "eslint src/*.ts test/*.ts",
      prepare: "npm run copy-protos && npm run generate-types && npm run generate-test-types && npm run compile",
      test: "gulp test",
      check: "npm run lint",
      fix: "eslint --fix src/*.ts test/*.ts",
      pretest: "npm run generate-types && npm run generate-test-types && npm run compile",
      posttest: "npm run check && madge -c ./build/src",
      "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs proto/ proto/xds/ proto/protoc-gen-validate/ -O src/generated/ --grpcLib ../index channelz.proto xds/service/orca/v3/orca.proto",
      "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto echo_service.proto",
      "copy-protos": "node ./copy-protos"
    },
    dependencies: {
      "@grpc/proto-loader": "^0.8.0",
      "@js-sdsl/ordered-map": "^4.4.2"
    },
    files: [
      "src/**/*.ts",
      "build/src/**/*.{js,d.ts,js.map}",
      "proto/**/*.proto",
      "proto/**/LICENSE",
      "LICENSE",
      "deps/envoy-api/envoy/api/v2/**/*.proto",
      "deps/envoy-api/envoy/config/**/*.proto",
      "deps/envoy-api/envoy/service/**/*.proto",
      "deps/envoy-api/envoy/type/**/*.proto",
      "deps/udpa/udpa/**/*.proto",
      "deps/googleapis/google/api/*.proto",
      "deps/googleapis/google/rpc/*.proto",
      "deps/protoc-gen-validate/validate/**/*.proto"
    ]
  };
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/logging.js
var require_logging = __commonJS((exports) => {
  var _a;
  var _b;
  var _c;
  var _d;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.log = exports.setLoggerVerbosity = exports.setLogger = exports.getLogger = undefined;
  exports.trace = trace;
  exports.isTracerEnabled = isTracerEnabled;
  var constants_1 = require_constants();
  var process_1 = __require("process");
  var clientVersion = require_package().version;
  var DEFAULT_LOGGER = {
    error: (message, ...optionalParams) => {
      console.error("E " + message, ...optionalParams);
    },
    info: (message, ...optionalParams) => {
      console.error("I " + message, ...optionalParams);
    },
    debug: (message, ...optionalParams) => {
      console.error("D " + message, ...optionalParams);
    }
  };
  var _logger = DEFAULT_LOGGER;
  var _logVerbosity = constants_1.LogVerbosity.ERROR;
  var verbosityString = (_b = (_a = process.env.GRPC_NODE_VERBOSITY) !== null && _a !== undefined ? _a : process.env.GRPC_VERBOSITY) !== null && _b !== undefined ? _b : "";
  switch (verbosityString.toUpperCase()) {
    case "DEBUG":
      _logVerbosity = constants_1.LogVerbosity.DEBUG;
      break;
    case "INFO":
      _logVerbosity = constants_1.LogVerbosity.INFO;
      break;
    case "ERROR":
      _logVerbosity = constants_1.LogVerbosity.ERROR;
      break;
    case "NONE":
      _logVerbosity = constants_1.LogVerbosity.NONE;
      break;
    default:
  }
  var getLogger = () => {
    return _logger;
  };
  exports.getLogger = getLogger;
  var setLogger = (logger) => {
    _logger = logger;
  };
  exports.setLogger = setLogger;
  var setLoggerVerbosity = (verbosity) => {
    _logVerbosity = verbosity;
  };
  exports.setLoggerVerbosity = setLoggerVerbosity;
  var log = (severity, ...args) => {
    let logFunction;
    if (severity >= _logVerbosity) {
      switch (severity) {
        case constants_1.LogVerbosity.DEBUG:
          logFunction = _logger.debug;
          break;
        case constants_1.LogVerbosity.INFO:
          logFunction = _logger.info;
          break;
        case constants_1.LogVerbosity.ERROR:
          logFunction = _logger.error;
          break;
      }
      if (!logFunction) {
        logFunction = _logger.error;
      }
      if (logFunction) {
        logFunction.bind(_logger)(...args);
      }
    }
  };
  exports.log = log;
  var tracersString = (_d = (_c = process.env.GRPC_NODE_TRACE) !== null && _c !== undefined ? _c : process.env.GRPC_TRACE) !== null && _d !== undefined ? _d : "";
  var enabledTracers = new Set;
  var disabledTracers = new Set;
  for (const tracerName of tracersString.split(",")) {
    if (tracerName.startsWith("-")) {
      disabledTracers.add(tracerName.substring(1));
    } else {
      enabledTracers.add(tracerName);
    }
  }
  var allEnabled = enabledTracers.has("all");
  function trace(severity, tracer, text) {
    if (isTracerEnabled(tracer)) {
      (0, exports.log)(severity, new Date().toISOString() + " | v" + clientVersion + " " + process_1.pid + " | " + tracer + " | " + text);
    }
  }
  function isTracerEnabled(tracer) {
    return !disabledTracers.has(tracer) && (allEnabled || enabledTracers.has(tracer));
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/error.js
var require_error = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getErrorMessage = getErrorMessage;
  exports.getErrorCode = getErrorCode;
  function getErrorMessage(error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return String(error);
    }
  }
  function getErrorCode(error) {
    if (typeof error === "object" && error !== null && "code" in error && typeof error.code === "number") {
      return error.code;
    } else {
      return null;
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/metadata.js
var require_metadata = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Metadata = undefined;
  var logging_1 = require_logging();
  var constants_1 = require_constants();
  var error_1 = require_error();
  var LEGAL_KEY_REGEX = /^[:0-9a-z_.-]+$/;
  var LEGAL_NON_BINARY_VALUE_REGEX = /^[ -~]*$/;
  function isLegalKey(key) {
    return LEGAL_KEY_REGEX.test(key);
  }
  function isLegalNonBinaryValue(value) {
    return LEGAL_NON_BINARY_VALUE_REGEX.test(value);
  }
  function isBinaryKey(key) {
    return key.endsWith("-bin");
  }
  function isCustomMetadata(key) {
    return !key.startsWith("grpc-");
  }
  function normalizeKey(key) {
    return key.toLowerCase();
  }
  function validate(key, value) {
    if (!isLegalKey(key)) {
      throw new Error('Metadata key "' + key + '" contains illegal characters');
    }
    if (value !== null && value !== undefined) {
      if (isBinaryKey(key)) {
        if (!Buffer.isBuffer(value)) {
          throw new Error("keys that end with '-bin' must have Buffer values");
        }
      } else {
        if (Buffer.isBuffer(value)) {
          throw new Error("keys that don't end with '-bin' must have String values");
        }
        if (!isLegalNonBinaryValue(value)) {
          throw new Error('Metadata string value "' + value + '" contains illegal characters');
        }
      }
    }
  }

  class Metadata {
    constructor(options = {}) {
      this.internalRepr = new Map;
      this.opaqueData = new Map;
      this.options = options;
    }
    set(key, value) {
      key = normalizeKey(key);
      validate(key, value);
      this.internalRepr.set(key, [value]);
    }
    add(key, value) {
      key = normalizeKey(key);
      validate(key, value);
      const existingValue = this.internalRepr.get(key);
      if (existingValue === undefined) {
        this.internalRepr.set(key, [value]);
      } else {
        existingValue.push(value);
      }
    }
    remove(key) {
      key = normalizeKey(key);
      this.internalRepr.delete(key);
    }
    get(key) {
      key = normalizeKey(key);
      return this.internalRepr.get(key) || [];
    }
    getMap() {
      const result = {};
      for (const [key, values] of this.internalRepr) {
        if (values.length > 0) {
          const v = values[0];
          result[key] = Buffer.isBuffer(v) ? Buffer.from(v) : v;
        }
      }
      return result;
    }
    clone() {
      const newMetadata = new Metadata(this.options);
      const newInternalRepr = newMetadata.internalRepr;
      for (const [key, value] of this.internalRepr) {
        const clonedValue = value.map((v) => {
          if (Buffer.isBuffer(v)) {
            return Buffer.from(v);
          } else {
            return v;
          }
        });
        newInternalRepr.set(key, clonedValue);
      }
      return newMetadata;
    }
    merge(other) {
      for (const [key, values] of other.internalRepr) {
        const mergedValue = (this.internalRepr.get(key) || []).concat(values);
        this.internalRepr.set(key, mergedValue);
      }
    }
    setOptions(options) {
      this.options = options;
    }
    getOptions() {
      return this.options;
    }
    toHttp2Headers() {
      const result = {};
      for (const [key, values] of this.internalRepr) {
        if (key.startsWith(":")) {
          continue;
        }
        result[key] = values.map(bufToString);
      }
      return result;
    }
    toJSON() {
      const result = {};
      for (const [key, values] of this.internalRepr) {
        result[key] = values;
      }
      return result;
    }
    setOpaque(key, value) {
      this.opaqueData.set(key, value);
    }
    getOpaque(key) {
      return this.opaqueData.get(key);
    }
    static fromHttp2Headers(headers) {
      const result = new Metadata;
      for (const key of Object.keys(headers)) {
        if (key.charAt(0) === ":") {
          continue;
        }
        const values = headers[key];
        try {
          if (isBinaryKey(key)) {
            if (Array.isArray(values)) {
              values.forEach((value) => {
                result.add(key, Buffer.from(value, "base64"));
              });
            } else if (values !== undefined) {
              if (isCustomMetadata(key)) {
                values.split(",").forEach((v) => {
                  result.add(key, Buffer.from(v.trim(), "base64"));
                });
              } else {
                result.add(key, Buffer.from(values, "base64"));
              }
            }
          } else {
            if (Array.isArray(values)) {
              values.forEach((value) => {
                result.add(key, value);
              });
            } else if (values !== undefined) {
              result.add(key, values);
            }
          }
        } catch (error) {
          const message = `Failed to add metadata entry ${key}: ${values}. ${(0, error_1.getErrorMessage)(error)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
          (0, logging_1.log)(constants_1.LogVerbosity.ERROR, message);
        }
      }
      return result;
    }
  }
  exports.Metadata = Metadata;
  var bufToString = (val) => {
    return Buffer.isBuffer(val) ? val.toString("base64") : val;
  };
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/call-credentials.js
var require_call_credentials = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CallCredentials = undefined;
  var metadata_1 = require_metadata();
  function isCurrentOauth2Client(client) {
    return "getRequestHeaders" in client && typeof client.getRequestHeaders === "function";
  }

  class CallCredentials {
    static createFromMetadataGenerator(metadataGenerator) {
      return new SingleCallCredentials(metadataGenerator);
    }
    static createFromGoogleCredential(googleCredentials) {
      return CallCredentials.createFromMetadataGenerator((options, callback) => {
        let getHeaders;
        if (isCurrentOauth2Client(googleCredentials)) {
          getHeaders = googleCredentials.getRequestHeaders(options.service_url);
        } else {
          getHeaders = new Promise((resolve, reject) => {
            googleCredentials.getRequestMetadata(options.service_url, (err, headers) => {
              if (err) {
                reject(err);
                return;
              }
              if (!headers) {
                reject(new Error("Headers not set by metadata plugin"));
                return;
              }
              resolve(headers);
            });
          });
        }
        getHeaders.then((headers) => {
          const metadata = new metadata_1.Metadata;
          for (const key of Object.keys(headers)) {
            metadata.add(key, headers[key]);
          }
          callback(null, metadata);
        }, (err) => {
          callback(err);
        });
      });
    }
    static createEmpty() {
      return new EmptyCallCredentials;
    }
  }
  exports.CallCredentials = CallCredentials;

  class ComposedCallCredentials extends CallCredentials {
    constructor(creds) {
      super();
      this.creds = creds;
    }
    async generateMetadata(options) {
      const base = new metadata_1.Metadata;
      const generated = await Promise.all(this.creds.map((cred) => cred.generateMetadata(options)));
      for (const gen of generated) {
        base.merge(gen);
      }
      return base;
    }
    compose(other) {
      return new ComposedCallCredentials(this.creds.concat([other]));
    }
    _equals(other) {
      if (this === other) {
        return true;
      }
      if (other instanceof ComposedCallCredentials) {
        return this.creds.every((value, index) => value._equals(other.creds[index]));
      } else {
        return false;
      }
    }
  }

  class SingleCallCredentials extends CallCredentials {
    constructor(metadataGenerator) {
      super();
      this.metadataGenerator = metadataGenerator;
    }
    generateMetadata(options) {
      return new Promise((resolve, reject) => {
        this.metadataGenerator(options, (err, metadata) => {
          if (metadata !== undefined) {
            resolve(metadata);
          } else {
            reject(err);
          }
        });
      });
    }
    compose(other) {
      return new ComposedCallCredentials([this, other]);
    }
    _equals(other) {
      if (this === other) {
        return true;
      }
      if (other instanceof SingleCallCredentials) {
        return this.metadataGenerator === other.metadataGenerator;
      } else {
        return false;
      }
    }
  }

  class EmptyCallCredentials extends CallCredentials {
    generateMetadata(options) {
      return Promise.resolve(new metadata_1.Metadata);
    }
    compose(other) {
      return other;
    }
    _equals(other) {
      return other instanceof EmptyCallCredentials;
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/tls-helpers.js
var require_tls_helpers = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CIPHER_SUITES = undefined;
  exports.getDefaultRootsData = getDefaultRootsData;
  var fs = __require("fs");
  exports.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
  var DEFAULT_ROOTS_FILE_PATH = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH;
  var defaultRootsData = null;
  function getDefaultRootsData() {
    if (DEFAULT_ROOTS_FILE_PATH) {
      if (defaultRootsData === null) {
        defaultRootsData = fs.readFileSync(DEFAULT_ROOTS_FILE_PATH);
      }
      return defaultRootsData;
    }
    return null;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/uri-parser.js
var require_uri_parser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseUri = parseUri;
  exports.splitHostPort = splitHostPort;
  exports.combineHostPort = combineHostPort;
  exports.uriToString = uriToString;
  var URI_REGEX = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
  function parseUri(uriString) {
    const parsedUri = URI_REGEX.exec(uriString);
    if (parsedUri === null) {
      return null;
    }
    return {
      scheme: parsedUri[1],
      authority: parsedUri[2],
      path: parsedUri[3]
    };
  }
  var NUMBER_REGEX = /^\d+$/;
  function splitHostPort(path) {
    if (path.startsWith("[")) {
      const hostEnd = path.indexOf("]");
      if (hostEnd === -1) {
        return null;
      }
      const host = path.substring(1, hostEnd);
      if (host.indexOf(":") === -1) {
        return null;
      }
      if (path.length > hostEnd + 1) {
        if (path[hostEnd + 1] === ":") {
          const portString = path.substring(hostEnd + 2);
          if (NUMBER_REGEX.test(portString)) {
            return {
              host,
              port: +portString
            };
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return {
          host
        };
      }
    } else {
      const splitPath = path.split(":");
      if (splitPath.length === 2) {
        if (NUMBER_REGEX.test(splitPath[1])) {
          return {
            host: splitPath[0],
            port: +splitPath[1]
          };
        } else {
          return null;
        }
      } else {
        return {
          host: path
        };
      }
    }
  }
  function combineHostPort(hostPort) {
    if (hostPort.port === undefined) {
      return hostPort.host;
    } else {
      if (hostPort.host.includes(":")) {
        return `[${hostPort.host}]:${hostPort.port}`;
      } else {
        return `${hostPort.host}:${hostPort.port}`;
      }
    }
  }
  function uriToString(uri) {
    let result = "";
    if (uri.scheme !== undefined) {
      result += uri.scheme + ":";
    }
    if (uri.authority !== undefined) {
      result += "//" + uri.authority + "/";
    }
    result += uri.path;
    return result;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/resolver.js
var require_resolver = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = undefined;
  exports.registerResolver = registerResolver;
  exports.registerDefaultScheme = registerDefaultScheme;
  exports.createResolver = createResolver;
  exports.getDefaultAuthority = getDefaultAuthority;
  exports.mapUriDefaultScheme = mapUriDefaultScheme;
  var uri_parser_1 = require_uri_parser();
  exports.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
  var registeredResolvers = {};
  var defaultScheme = null;
  function registerResolver(scheme, resolverClass) {
    registeredResolvers[scheme] = resolverClass;
  }
  function registerDefaultScheme(scheme) {
    defaultScheme = scheme;
  }
  function createResolver(target, listener, options) {
    if (target.scheme !== undefined && target.scheme in registeredResolvers) {
      return new registeredResolvers[target.scheme](target, listener, options);
    } else {
      throw new Error(`No resolver could be created for target ${(0, uri_parser_1.uriToString)(target)}`);
    }
  }
  function getDefaultAuthority(target) {
    if (target.scheme !== undefined && target.scheme in registeredResolvers) {
      return registeredResolvers[target.scheme].getDefaultAuthority(target);
    } else {
      throw new Error(`Invalid target ${(0, uri_parser_1.uriToString)(target)}`);
    }
  }
  function mapUriDefaultScheme(target) {
    if (target.scheme === undefined || !(target.scheme in registeredResolvers)) {
      if (defaultScheme !== null) {
        return {
          scheme: defaultScheme,
          authority: undefined,
          path: (0, uri_parser_1.uriToString)(target)
        };
      } else {
        return null;
      }
    }
    return target;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/channel-credentials.js
var require_channel_credentials = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelCredentials = undefined;
  exports.createCertificateProviderChannelCredentials = createCertificateProviderChannelCredentials;
  var tls_1 = __require("tls");
  var call_credentials_1 = require_call_credentials();
  var tls_helpers_1 = require_tls_helpers();
  var uri_parser_1 = require_uri_parser();
  var resolver_1 = require_resolver();
  var logging_1 = require_logging();
  var constants_1 = require_constants();
  function verifyIsBufferOrNull(obj, friendlyName) {
    if (obj && !(obj instanceof Buffer)) {
      throw new TypeError(`${friendlyName}, if provided, must be a Buffer.`);
    }
  }

  class ChannelCredentials {
    compose(callCredentials) {
      return new ComposedChannelCredentialsImpl(this, callCredentials);
    }
    static createSsl(rootCerts, privateKey, certChain, verifyOptions) {
      var _a;
      verifyIsBufferOrNull(rootCerts, "Root certificate");
      verifyIsBufferOrNull(privateKey, "Private key");
      verifyIsBufferOrNull(certChain, "Certificate chain");
      if (privateKey && !certChain) {
        throw new Error("Private key must be given with accompanying certificate chain");
      }
      if (!privateKey && certChain) {
        throw new Error("Certificate chain must be given with accompanying private key");
      }
      const secureContext = (0, tls_1.createSecureContext)({
        ca: (_a = rootCerts !== null && rootCerts !== undefined ? rootCerts : (0, tls_helpers_1.getDefaultRootsData)()) !== null && _a !== undefined ? _a : undefined,
        key: privateKey !== null && privateKey !== undefined ? privateKey : undefined,
        cert: certChain !== null && certChain !== undefined ? certChain : undefined,
        ciphers: tls_helpers_1.CIPHER_SUITES
      });
      return new SecureChannelCredentialsImpl(secureContext, verifyOptions !== null && verifyOptions !== undefined ? verifyOptions : {});
    }
    static createFromSecureContext(secureContext, verifyOptions) {
      return new SecureChannelCredentialsImpl(secureContext, verifyOptions !== null && verifyOptions !== undefined ? verifyOptions : {});
    }
    static createInsecure() {
      return new InsecureChannelCredentialsImpl;
    }
  }
  exports.ChannelCredentials = ChannelCredentials;

  class InsecureChannelCredentialsImpl extends ChannelCredentials {
    constructor() {
      super();
    }
    compose(callCredentials) {
      throw new Error("Cannot compose insecure credentials");
    }
    _isSecure() {
      return false;
    }
    _equals(other) {
      return other instanceof InsecureChannelCredentialsImpl;
    }
    _createSecureConnector(channelTarget, options, callCredentials) {
      return {
        connect(socket) {
          return Promise.resolve({
            socket,
            secure: false
          });
        },
        waitForReady: () => {
          return Promise.resolve();
        },
        getCallCredentials: () => {
          return callCredentials !== null && callCredentials !== undefined ? callCredentials : call_credentials_1.CallCredentials.createEmpty();
        },
        destroy() {}
      };
    }
  }
  function getConnectionOptions(secureContext, verifyOptions, channelTarget, options) {
    var _a, _b;
    const connectionOptions = {
      secureContext
    };
    let realTarget = channelTarget;
    if ("grpc.http_connect_target" in options) {
      const parsedTarget = (0, uri_parser_1.parseUri)(options["grpc.http_connect_target"]);
      if (parsedTarget) {
        realTarget = parsedTarget;
      }
    }
    const targetPath = (0, resolver_1.getDefaultAuthority)(realTarget);
    const hostPort = (0, uri_parser_1.splitHostPort)(targetPath);
    const remoteHost = (_a = hostPort === null || hostPort === undefined ? undefined : hostPort.host) !== null && _a !== undefined ? _a : targetPath;
    connectionOptions.host = remoteHost;
    if (verifyOptions.checkServerIdentity) {
      connectionOptions.checkServerIdentity = verifyOptions.checkServerIdentity;
    }
    if (verifyOptions.rejectUnauthorized !== undefined) {
      connectionOptions.rejectUnauthorized = verifyOptions.rejectUnauthorized;
    }
    connectionOptions.ALPNProtocols = ["h2"];
    if (options["grpc.ssl_target_name_override"]) {
      const sslTargetNameOverride = options["grpc.ssl_target_name_override"];
      const originalCheckServerIdentity = (_b = connectionOptions.checkServerIdentity) !== null && _b !== undefined ? _b : tls_1.checkServerIdentity;
      connectionOptions.checkServerIdentity = (host, cert) => {
        return originalCheckServerIdentity(sslTargetNameOverride, cert);
      };
      connectionOptions.servername = sslTargetNameOverride;
    } else {
      connectionOptions.servername = remoteHost;
    }
    if (options["grpc-node.tls_enable_trace"]) {
      connectionOptions.enableTrace = true;
    }
    return connectionOptions;
  }

  class SecureConnectorImpl {
    constructor(connectionOptions, callCredentials) {
      this.connectionOptions = connectionOptions;
      this.callCredentials = callCredentials;
    }
    connect(socket) {
      const tlsConnectOptions = Object.assign({ socket }, this.connectionOptions);
      return new Promise((resolve, reject) => {
        const tlsSocket = (0, tls_1.connect)(tlsConnectOptions, () => {
          var _a;
          if (((_a = this.connectionOptions.rejectUnauthorized) !== null && _a !== undefined ? _a : true) && !tlsSocket.authorized) {
            reject(tlsSocket.authorizationError);
            return;
          }
          resolve({
            socket: tlsSocket,
            secure: true
          });
        });
        tlsSocket.on("error", (error) => {
          reject(error);
        });
      });
    }
    waitForReady() {
      return Promise.resolve();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {}
  }

  class SecureChannelCredentialsImpl extends ChannelCredentials {
    constructor(secureContext, verifyOptions) {
      super();
      this.secureContext = secureContext;
      this.verifyOptions = verifyOptions;
    }
    _isSecure() {
      return true;
    }
    _equals(other) {
      if (this === other) {
        return true;
      }
      if (other instanceof SecureChannelCredentialsImpl) {
        return this.secureContext === other.secureContext && this.verifyOptions.checkServerIdentity === other.verifyOptions.checkServerIdentity;
      } else {
        return false;
      }
    }
    _createSecureConnector(channelTarget, options, callCredentials) {
      const connectionOptions = getConnectionOptions(this.secureContext, this.verifyOptions, channelTarget, options);
      return new SecureConnectorImpl(connectionOptions, callCredentials !== null && callCredentials !== undefined ? callCredentials : call_credentials_1.CallCredentials.createEmpty());
    }
  }

  class CertificateProviderChannelCredentialsImpl extends ChannelCredentials {
    constructor(caCertificateProvider, identityCertificateProvider, verifyOptions) {
      super();
      this.caCertificateProvider = caCertificateProvider;
      this.identityCertificateProvider = identityCertificateProvider;
      this.verifyOptions = verifyOptions;
      this.refcount = 0;
      this.latestCaUpdate = undefined;
      this.latestIdentityUpdate = undefined;
      this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this);
      this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
      this.secureContextWatchers = [];
    }
    _isSecure() {
      return true;
    }
    _equals(other) {
      var _a, _b;
      if (this === other) {
        return true;
      }
      if (other instanceof CertificateProviderChannelCredentialsImpl) {
        return this.caCertificateProvider === other.caCertificateProvider && this.identityCertificateProvider === other.identityCertificateProvider && ((_a = this.verifyOptions) === null || _a === undefined ? undefined : _a.checkServerIdentity) === ((_b = other.verifyOptions) === null || _b === undefined ? undefined : _b.checkServerIdentity);
      } else {
        return false;
      }
    }
    ref() {
      var _a;
      if (this.refcount === 0) {
        this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener);
        (_a = this.identityCertificateProvider) === null || _a === undefined || _a.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      }
      this.refcount += 1;
    }
    unref() {
      var _a;
      this.refcount -= 1;
      if (this.refcount === 0) {
        this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener);
        (_a = this.identityCertificateProvider) === null || _a === undefined || _a.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
      }
    }
    _createSecureConnector(channelTarget, options, callCredentials) {
      this.ref();
      return new CertificateProviderChannelCredentialsImpl.SecureConnectorImpl(this, channelTarget, options, callCredentials !== null && callCredentials !== undefined ? callCredentials : call_credentials_1.CallCredentials.createEmpty());
    }
    maybeUpdateWatchers() {
      if (this.hasReceivedUpdates()) {
        for (const watcher of this.secureContextWatchers) {
          watcher(this.getLatestSecureContext());
        }
        this.secureContextWatchers = [];
      }
    }
    handleCaCertificateUpdate(update) {
      this.latestCaUpdate = update;
      this.maybeUpdateWatchers();
    }
    handleIdentityCertitificateUpdate(update) {
      this.latestIdentityUpdate = update;
      this.maybeUpdateWatchers();
    }
    hasReceivedUpdates() {
      if (this.latestCaUpdate === undefined) {
        return false;
      }
      if (this.identityCertificateProvider && this.latestIdentityUpdate === undefined) {
        return false;
      }
      return true;
    }
    getSecureContext() {
      if (this.hasReceivedUpdates()) {
        return Promise.resolve(this.getLatestSecureContext());
      } else {
        return new Promise((resolve) => {
          this.secureContextWatchers.push(resolve);
        });
      }
    }
    getLatestSecureContext() {
      var _a, _b;
      if (!this.latestCaUpdate) {
        return null;
      }
      if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) {
        return null;
      }
      try {
        return (0, tls_1.createSecureContext)({
          ca: this.latestCaUpdate.caCertificate,
          key: (_a = this.latestIdentityUpdate) === null || _a === undefined ? undefined : _a.privateKey,
          cert: (_b = this.latestIdentityUpdate) === null || _b === undefined ? undefined : _b.certificate,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
      } catch (e) {
        (0, logging_1.log)(constants_1.LogVerbosity.ERROR, "Failed to createSecureContext with error " + e.message);
        return null;
      }
    }
  }
  CertificateProviderChannelCredentialsImpl.SecureConnectorImpl = class {
    constructor(parent, channelTarget, options, callCredentials) {
      this.parent = parent;
      this.channelTarget = channelTarget;
      this.options = options;
      this.callCredentials = callCredentials;
    }
    connect(socket) {
      return new Promise((resolve, reject) => {
        const secureContext = this.parent.getLatestSecureContext();
        if (!secureContext) {
          reject(new Error("Failed to load credentials"));
          return;
        }
        if (socket.closed) {
          reject(new Error("Socket closed while loading credentials"));
        }
        const connnectionOptions = getConnectionOptions(secureContext, this.parent.verifyOptions, this.channelTarget, this.options);
        const tlsConnectOptions = Object.assign({ socket }, connnectionOptions);
        const closeCallback = () => {
          reject(new Error("Socket closed"));
        };
        const errorCallback = (error) => {
          reject(error);
        };
        const tlsSocket = (0, tls_1.connect)(tlsConnectOptions, () => {
          var _a;
          tlsSocket.removeListener("close", closeCallback);
          tlsSocket.removeListener("error", errorCallback);
          if (((_a = this.parent.verifyOptions.rejectUnauthorized) !== null && _a !== undefined ? _a : true) && !tlsSocket.authorized) {
            reject(tlsSocket.authorizationError);
            return;
          }
          resolve({
            socket: tlsSocket,
            secure: true
          });
        });
        tlsSocket.once("close", closeCallback);
        tlsSocket.once("error", errorCallback);
      });
    }
    async waitForReady() {
      await this.parent.getSecureContext();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {
      this.parent.unref();
    }
  };
  function createCertificateProviderChannelCredentials(caCertificateProvider, identityCertificateProvider, verifyOptions) {
    return new CertificateProviderChannelCredentialsImpl(caCertificateProvider, identityCertificateProvider, verifyOptions !== null && verifyOptions !== undefined ? verifyOptions : {});
  }

  class ComposedChannelCredentialsImpl extends ChannelCredentials {
    constructor(channelCredentials, callCredentials) {
      super();
      this.channelCredentials = channelCredentials;
      this.callCredentials = callCredentials;
      if (!channelCredentials._isSecure()) {
        throw new Error("Cannot compose insecure credentials");
      }
    }
    compose(callCredentials) {
      const combinedCallCredentials = this.callCredentials.compose(callCredentials);
      return new ComposedChannelCredentialsImpl(this.channelCredentials, combinedCallCredentials);
    }
    _isSecure() {
      return true;
    }
    _equals(other) {
      if (this === other) {
        return true;
      }
      if (other instanceof ComposedChannelCredentialsImpl) {
        return this.channelCredentials._equals(other.channelCredentials) && this.callCredentials._equals(other.callCredentials);
      } else {
        return false;
      }
    }
    _createSecureConnector(channelTarget, options, callCredentials) {
      const combinedCallCredentials = this.callCredentials.compose(callCredentials !== null && callCredentials !== undefined ? callCredentials : call_credentials_1.CallCredentials.createEmpty());
      return this.channelCredentials._createSecureConnector(channelTarget, options, combinedCallCredentials);
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancer.js
var require_load_balancer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createChildChannelControlHelper = createChildChannelControlHelper;
  exports.registerLoadBalancerType = registerLoadBalancerType;
  exports.registerDefaultLoadBalancerType = registerDefaultLoadBalancerType;
  exports.createLoadBalancer = createLoadBalancer;
  exports.isLoadBalancerNameRegistered = isLoadBalancerNameRegistered;
  exports.parseLoadBalancingConfig = parseLoadBalancingConfig;
  exports.getDefaultConfig = getDefaultConfig;
  exports.selectLbConfigFromList = selectLbConfigFromList;
  var logging_1 = require_logging();
  var constants_1 = require_constants();
  function createChildChannelControlHelper(parent, overrides) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
      createSubchannel: (_b = (_a = overrides.createSubchannel) === null || _a === undefined ? undefined : _a.bind(overrides)) !== null && _b !== undefined ? _b : parent.createSubchannel.bind(parent),
      updateState: (_d = (_c = overrides.updateState) === null || _c === undefined ? undefined : _c.bind(overrides)) !== null && _d !== undefined ? _d : parent.updateState.bind(parent),
      requestReresolution: (_f = (_e = overrides.requestReresolution) === null || _e === undefined ? undefined : _e.bind(overrides)) !== null && _f !== undefined ? _f : parent.requestReresolution.bind(parent),
      addChannelzChild: (_h = (_g = overrides.addChannelzChild) === null || _g === undefined ? undefined : _g.bind(overrides)) !== null && _h !== undefined ? _h : parent.addChannelzChild.bind(parent),
      removeChannelzChild: (_k = (_j = overrides.removeChannelzChild) === null || _j === undefined ? undefined : _j.bind(overrides)) !== null && _k !== undefined ? _k : parent.removeChannelzChild.bind(parent)
    };
  }
  var registeredLoadBalancerTypes = {};
  var defaultLoadBalancerType = null;
  function registerLoadBalancerType(typeName, loadBalancerType, loadBalancingConfigType) {
    registeredLoadBalancerTypes[typeName] = {
      LoadBalancer: loadBalancerType,
      LoadBalancingConfig: loadBalancingConfigType
    };
  }
  function registerDefaultLoadBalancerType(typeName) {
    defaultLoadBalancerType = typeName;
  }
  function createLoadBalancer(config, channelControlHelper) {
    const typeName = config.getLoadBalancerName();
    if (typeName in registeredLoadBalancerTypes) {
      return new registeredLoadBalancerTypes[typeName].LoadBalancer(channelControlHelper);
    } else {
      return null;
    }
  }
  function isLoadBalancerNameRegistered(typeName) {
    return typeName in registeredLoadBalancerTypes;
  }
  function parseLoadBalancingConfig(rawConfig) {
    const keys = Object.keys(rawConfig);
    if (keys.length !== 1) {
      throw new Error("Provided load balancing config has multiple conflicting entries");
    }
    const typeName = keys[0];
    if (typeName in registeredLoadBalancerTypes) {
      try {
        return registeredLoadBalancerTypes[typeName].LoadBalancingConfig.createFromJson(rawConfig[typeName]);
      } catch (e) {
        throw new Error(`${typeName}: ${e.message}`);
      }
    } else {
      throw new Error(`Unrecognized load balancing config name ${typeName}`);
    }
  }
  function getDefaultConfig() {
    if (!defaultLoadBalancerType) {
      throw new Error("No default load balancer type registered");
    }
    return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig;
  }
  function selectLbConfigFromList(configs, fallbackTodefault = false) {
    for (const config of configs) {
      try {
        return parseLoadBalancingConfig(config);
      } catch (e) {
        (0, logging_1.log)(constants_1.LogVerbosity.DEBUG, "Config parsing failed with error", e.message);
        continue;
      }
    }
    if (fallbackTodefault) {
      if (defaultLoadBalancerType) {
        return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/service-config.js
var require_service_config = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateRetryThrottling = validateRetryThrottling;
  exports.validateServiceConfig = validateServiceConfig;
  exports.extractAndSelectServiceConfig = extractAndSelectServiceConfig;
  var os = __require("os");
  var constants_1 = require_constants();
  var DURATION_REGEX = /^\d+(\.\d{1,9})?s$/;
  var CLIENT_LANGUAGE_STRING = "node";
  function validateName(obj) {
    if ("service" in obj && obj.service !== "") {
      if (typeof obj.service !== "string") {
        throw new Error(`Invalid method config name: invalid service: expected type string, got ${typeof obj.service}`);
      }
      if ("method" in obj && obj.method !== "") {
        if (typeof obj.method !== "string") {
          throw new Error(`Invalid method config name: invalid method: expected type string, got ${typeof obj.service}`);
        }
        return {
          service: obj.service,
          method: obj.method
        };
      } else {
        return {
          service: obj.service
        };
      }
    } else {
      if ("method" in obj && obj.method !== undefined) {
        throw new Error(`Invalid method config name: method set with empty or unset service`);
      }
      return {};
    }
  }
  function validateRetryPolicy(obj) {
    if (!("maxAttempts" in obj) || !Number.isInteger(obj.maxAttempts) || obj.maxAttempts < 2) {
      throw new Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
    }
    if (!("initialBackoff" in obj) || typeof obj.initialBackoff !== "string" || !DURATION_REGEX.test(obj.initialBackoff)) {
      throw new Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
    }
    if (!("maxBackoff" in obj) || typeof obj.maxBackoff !== "string" || !DURATION_REGEX.test(obj.maxBackoff)) {
      throw new Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
    }
    if (!("backoffMultiplier" in obj) || typeof obj.backoffMultiplier !== "number" || obj.backoffMultiplier <= 0) {
      throw new Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
    }
    if (!(("retryableStatusCodes" in obj) && Array.isArray(obj.retryableStatusCodes))) {
      throw new Error("Invalid method config retry policy: retryableStatusCodes is required");
    }
    if (obj.retryableStatusCodes.length === 0) {
      throw new Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
    }
    for (const value of obj.retryableStatusCodes) {
      if (typeof value === "number") {
        if (!Object.values(constants_1.Status).includes(value)) {
          throw new Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
        }
      } else if (typeof value === "string") {
        if (!Object.values(constants_1.Status).includes(value.toUpperCase())) {
          throw new Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
        }
      } else {
        throw new Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
      }
    }
    return {
      maxAttempts: obj.maxAttempts,
      initialBackoff: obj.initialBackoff,
      maxBackoff: obj.maxBackoff,
      backoffMultiplier: obj.backoffMultiplier,
      retryableStatusCodes: obj.retryableStatusCodes
    };
  }
  function validateHedgingPolicy(obj) {
    if (!("maxAttempts" in obj) || !Number.isInteger(obj.maxAttempts) || obj.maxAttempts < 2) {
      throw new Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
    }
    if ("hedgingDelay" in obj && (typeof obj.hedgingDelay !== "string" || !DURATION_REGEX.test(obj.hedgingDelay))) {
      throw new Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
    }
    if ("nonFatalStatusCodes" in obj && Array.isArray(obj.nonFatalStatusCodes)) {
      for (const value of obj.nonFatalStatusCodes) {
        if (typeof value === "number") {
          if (!Object.values(constants_1.Status).includes(value)) {
            throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
          }
        } else if (typeof value === "string") {
          if (!Object.values(constants_1.Status).includes(value.toUpperCase())) {
            throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
          }
        } else {
          throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
        }
      }
    }
    const result = {
      maxAttempts: obj.maxAttempts
    };
    if (obj.hedgingDelay) {
      result.hedgingDelay = obj.hedgingDelay;
    }
    if (obj.nonFatalStatusCodes) {
      result.nonFatalStatusCodes = obj.nonFatalStatusCodes;
    }
    return result;
  }
  function validateMethodConfig(obj) {
    var _a;
    const result = {
      name: []
    };
    if (!("name" in obj) || !Array.isArray(obj.name)) {
      throw new Error("Invalid method config: invalid name array");
    }
    for (const name of obj.name) {
      result.name.push(validateName(name));
    }
    if ("waitForReady" in obj) {
      if (typeof obj.waitForReady !== "boolean") {
        throw new Error("Invalid method config: invalid waitForReady");
      }
      result.waitForReady = obj.waitForReady;
    }
    if ("timeout" in obj) {
      if (typeof obj.timeout === "object") {
        if (!("seconds" in obj.timeout) || !(typeof obj.timeout.seconds === "number")) {
          throw new Error("Invalid method config: invalid timeout.seconds");
        }
        if (!("nanos" in obj.timeout) || !(typeof obj.timeout.nanos === "number")) {
          throw new Error("Invalid method config: invalid timeout.nanos");
        }
        result.timeout = obj.timeout;
      } else if (typeof obj.timeout === "string" && DURATION_REGEX.test(obj.timeout)) {
        const timeoutParts = obj.timeout.substring(0, obj.timeout.length - 1).split(".");
        result.timeout = {
          seconds: timeoutParts[0] | 0,
          nanos: ((_a = timeoutParts[1]) !== null && _a !== undefined ? _a : 0) | 0
        };
      } else {
        throw new Error("Invalid method config: invalid timeout");
      }
    }
    if ("maxRequestBytes" in obj) {
      if (typeof obj.maxRequestBytes !== "number") {
        throw new Error("Invalid method config: invalid maxRequestBytes");
      }
      result.maxRequestBytes = obj.maxRequestBytes;
    }
    if ("maxResponseBytes" in obj) {
      if (typeof obj.maxResponseBytes !== "number") {
        throw new Error("Invalid method config: invalid maxRequestBytes");
      }
      result.maxResponseBytes = obj.maxResponseBytes;
    }
    if ("retryPolicy" in obj) {
      if ("hedgingPolicy" in obj) {
        throw new Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
      } else {
        result.retryPolicy = validateRetryPolicy(obj.retryPolicy);
      }
    } else if ("hedgingPolicy" in obj) {
      result.hedgingPolicy = validateHedgingPolicy(obj.hedgingPolicy);
    }
    return result;
  }
  function validateRetryThrottling(obj) {
    if (!("maxTokens" in obj) || typeof obj.maxTokens !== "number" || obj.maxTokens <= 0 || obj.maxTokens > 1000) {
      throw new Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
    }
    if (!("tokenRatio" in obj) || typeof obj.tokenRatio !== "number" || obj.tokenRatio <= 0) {
      throw new Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
    }
    return {
      maxTokens: +obj.maxTokens.toFixed(3),
      tokenRatio: +obj.tokenRatio.toFixed(3)
    };
  }
  function validateLoadBalancingConfig(obj) {
    if (!(typeof obj === "object" && obj !== null)) {
      throw new Error(`Invalid loadBalancingConfig: unexpected type ${typeof obj}`);
    }
    const keys = Object.keys(obj);
    if (keys.length > 1) {
      throw new Error(`Invalid loadBalancingConfig: unexpected multiple keys ${keys}`);
    }
    if (keys.length === 0) {
      throw new Error("Invalid loadBalancingConfig: load balancing policy name required");
    }
    return {
      [keys[0]]: obj[keys[0]]
    };
  }
  function validateServiceConfig(obj) {
    const result = {
      loadBalancingConfig: [],
      methodConfig: []
    };
    if ("loadBalancingPolicy" in obj) {
      if (typeof obj.loadBalancingPolicy === "string") {
        result.loadBalancingPolicy = obj.loadBalancingPolicy;
      } else {
        throw new Error("Invalid service config: invalid loadBalancingPolicy");
      }
    }
    if ("loadBalancingConfig" in obj) {
      if (Array.isArray(obj.loadBalancingConfig)) {
        for (const config of obj.loadBalancingConfig) {
          result.loadBalancingConfig.push(validateLoadBalancingConfig(config));
        }
      } else {
        throw new Error("Invalid service config: invalid loadBalancingConfig");
      }
    }
    if ("methodConfig" in obj) {
      if (Array.isArray(obj.methodConfig)) {
        for (const methodConfig of obj.methodConfig) {
          result.methodConfig.push(validateMethodConfig(methodConfig));
        }
      }
    }
    if ("retryThrottling" in obj) {
      result.retryThrottling = validateRetryThrottling(obj.retryThrottling);
    }
    const seenMethodNames = [];
    for (const methodConfig of result.methodConfig) {
      for (const name of methodConfig.name) {
        for (const seenName of seenMethodNames) {
          if (name.service === seenName.service && name.method === seenName.method) {
            throw new Error(`Invalid service config: duplicate name ${name.service}/${name.method}`);
          }
        }
        seenMethodNames.push(name);
      }
    }
    return result;
  }
  function validateCanaryConfig(obj) {
    if (!("serviceConfig" in obj)) {
      throw new Error("Invalid service config choice: missing service config");
    }
    const result = {
      serviceConfig: validateServiceConfig(obj.serviceConfig)
    };
    if ("clientLanguage" in obj) {
      if (Array.isArray(obj.clientLanguage)) {
        result.clientLanguage = [];
        for (const lang of obj.clientLanguage) {
          if (typeof lang === "string") {
            result.clientLanguage.push(lang);
          } else {
            throw new Error("Invalid service config choice: invalid clientLanguage");
          }
        }
      } else {
        throw new Error("Invalid service config choice: invalid clientLanguage");
      }
    }
    if ("clientHostname" in obj) {
      if (Array.isArray(obj.clientHostname)) {
        result.clientHostname = [];
        for (const lang of obj.clientHostname) {
          if (typeof lang === "string") {
            result.clientHostname.push(lang);
          } else {
            throw new Error("Invalid service config choice: invalid clientHostname");
          }
        }
      } else {
        throw new Error("Invalid service config choice: invalid clientHostname");
      }
    }
    if ("percentage" in obj) {
      if (typeof obj.percentage === "number" && 0 <= obj.percentage && obj.percentage <= 100) {
        result.percentage = obj.percentage;
      } else {
        throw new Error("Invalid service config choice: invalid percentage");
      }
    }
    const allowedFields = [
      "clientLanguage",
      "percentage",
      "clientHostname",
      "serviceConfig"
    ];
    for (const field in obj) {
      if (!allowedFields.includes(field)) {
        throw new Error(`Invalid service config choice: unexpected field ${field}`);
      }
    }
    return result;
  }
  function validateAndSelectCanaryConfig(obj, percentage) {
    if (!Array.isArray(obj)) {
      throw new Error("Invalid service config list");
    }
    for (const config of obj) {
      const validatedConfig = validateCanaryConfig(config);
      if (typeof validatedConfig.percentage === "number" && percentage > validatedConfig.percentage) {
        continue;
      }
      if (Array.isArray(validatedConfig.clientHostname)) {
        let hostnameMatched = false;
        for (const hostname of validatedConfig.clientHostname) {
          if (hostname === os.hostname()) {
            hostnameMatched = true;
          }
        }
        if (!hostnameMatched) {
          continue;
        }
      }
      if (Array.isArray(validatedConfig.clientLanguage)) {
        let languageMatched = false;
        for (const language of validatedConfig.clientLanguage) {
          if (language === CLIENT_LANGUAGE_STRING) {
            languageMatched = true;
          }
        }
        if (!languageMatched) {
          continue;
        }
      }
      return validatedConfig.serviceConfig;
    }
    throw new Error("No matching service config found");
  }
  function extractAndSelectServiceConfig(txtRecord, percentage) {
    for (const record of txtRecord) {
      if (record.length > 0 && record[0].startsWith("grpc_config=")) {
        const recordString = record.join("").substring("grpc_config=".length);
        const recordJson = JSON.parse(recordString);
        return validateAndSelectCanaryConfig(recordJson, percentage);
      }
    }
    return null;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/connectivity-state.js
var require_connectivity_state = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ConnectivityState = undefined;
  var ConnectivityState;
  (function(ConnectivityState2) {
    ConnectivityState2[ConnectivityState2["IDLE"] = 0] = "IDLE";
    ConnectivityState2[ConnectivityState2["CONNECTING"] = 1] = "CONNECTING";
    ConnectivityState2[ConnectivityState2["READY"] = 2] = "READY";
    ConnectivityState2[ConnectivityState2["TRANSIENT_FAILURE"] = 3] = "TRANSIENT_FAILURE";
    ConnectivityState2[ConnectivityState2["SHUTDOWN"] = 4] = "SHUTDOWN";
  })(ConnectivityState || (exports.ConnectivityState = ConnectivityState = {}));
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/picker.js
var require_picker = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.QueuePicker = exports.UnavailablePicker = exports.PickResultType = undefined;
  var metadata_1 = require_metadata();
  var constants_1 = require_constants();
  var PickResultType;
  (function(PickResultType2) {
    PickResultType2[PickResultType2["COMPLETE"] = 0] = "COMPLETE";
    PickResultType2[PickResultType2["QUEUE"] = 1] = "QUEUE";
    PickResultType2[PickResultType2["TRANSIENT_FAILURE"] = 2] = "TRANSIENT_FAILURE";
    PickResultType2[PickResultType2["DROP"] = 3] = "DROP";
  })(PickResultType || (exports.PickResultType = PickResultType = {}));

  class UnavailablePicker {
    constructor(status) {
      this.status = Object.assign({ code: constants_1.Status.UNAVAILABLE, details: "No connection established", metadata: new metadata_1.Metadata }, status);
    }
    pick(pickArgs) {
      return {
        pickResultType: PickResultType.TRANSIENT_FAILURE,
        subchannel: null,
        status: this.status,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  exports.UnavailablePicker = UnavailablePicker;

  class QueuePicker {
    constructor(loadBalancer, childPicker) {
      this.loadBalancer = loadBalancer;
      this.childPicker = childPicker;
      this.calledExitIdle = false;
    }
    pick(pickArgs) {
      if (!this.calledExitIdle) {
        process.nextTick(() => {
          this.loadBalancer.exitIdle();
        });
        this.calledExitIdle = true;
      }
      if (this.childPicker) {
        return this.childPicker.pick(pickArgs);
      } else {
        return {
          pickResultType: PickResultType.QUEUE,
          subchannel: null,
          status: null,
          onCallStarted: null,
          onCallEnded: null
        };
      }
    }
  }
  exports.QueuePicker = QueuePicker;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/backoff-timeout.js
var require_backoff_timeout = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BackoffTimeout = undefined;
  var constants_1 = require_constants();
  var logging = require_logging();
  var TRACER_NAME = "backoff";
  var INITIAL_BACKOFF_MS = 1000;
  var BACKOFF_MULTIPLIER = 1.6;
  var MAX_BACKOFF_MS = 120000;
  var BACKOFF_JITTER = 0.2;
  function uniformRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  class BackoffTimeout {
    constructor(callback, options) {
      this.callback = callback;
      this.initialDelay = INITIAL_BACKOFF_MS;
      this.multiplier = BACKOFF_MULTIPLIER;
      this.maxDelay = MAX_BACKOFF_MS;
      this.jitter = BACKOFF_JITTER;
      this.running = false;
      this.hasRef = true;
      this.startTime = new Date;
      this.endTime = new Date;
      this.id = BackoffTimeout.getNextId();
      if (options) {
        if (options.initialDelay) {
          this.initialDelay = options.initialDelay;
        }
        if (options.multiplier) {
          this.multiplier = options.multiplier;
        }
        if (options.jitter) {
          this.jitter = options.jitter;
        }
        if (options.maxDelay) {
          this.maxDelay = options.maxDelay;
        }
      }
      this.trace("constructed initialDelay=" + this.initialDelay + " multiplier=" + this.multiplier + " jitter=" + this.jitter + " maxDelay=" + this.maxDelay);
      this.nextDelay = this.initialDelay;
      this.timerId = setTimeout(() => {}, 0);
      clearTimeout(this.timerId);
    }
    static getNextId() {
      return this.nextId++;
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "{" + this.id + "} " + text);
    }
    runTimer(delay) {
      var _a, _b;
      this.trace("runTimer(delay=" + delay + ")");
      this.endTime = this.startTime;
      this.endTime.setMilliseconds(this.endTime.getMilliseconds() + delay);
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.trace("timer fired");
        this.running = false;
        this.callback();
      }, delay);
      if (!this.hasRef) {
        (_b = (_a = this.timerId).unref) === null || _b === undefined || _b.call(_a);
      }
    }
    runOnce() {
      this.trace("runOnce()");
      this.running = true;
      this.startTime = new Date;
      this.runTimer(this.nextDelay);
      const nextBackoff = Math.min(this.nextDelay * this.multiplier, this.maxDelay);
      const jitterMagnitude = nextBackoff * this.jitter;
      this.nextDelay = nextBackoff + uniformRandom(-jitterMagnitude, jitterMagnitude);
    }
    stop() {
      this.trace("stop()");
      clearTimeout(this.timerId);
      this.running = false;
    }
    reset() {
      this.trace("reset() running=" + this.running);
      this.nextDelay = this.initialDelay;
      if (this.running) {
        const now = new Date;
        const newEndTime = this.startTime;
        newEndTime.setMilliseconds(newEndTime.getMilliseconds() + this.nextDelay);
        clearTimeout(this.timerId);
        if (now < newEndTime) {
          this.runTimer(newEndTime.getTime() - now.getTime());
        } else {
          this.running = false;
        }
      }
    }
    isRunning() {
      return this.running;
    }
    ref() {
      var _a, _b;
      this.hasRef = true;
      (_b = (_a = this.timerId).ref) === null || _b === undefined || _b.call(_a);
    }
    unref() {
      var _a, _b;
      this.hasRef = false;
      (_b = (_a = this.timerId).unref) === null || _b === undefined || _b.call(_a);
    }
    getEndTime() {
      return this.endTime;
    }
  }
  exports.BackoffTimeout = BackoffTimeout;
  BackoffTimeout.nextId = 0;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js
var require_load_balancer_child_handler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChildLoadBalancerHandler = undefined;
  var load_balancer_1 = require_load_balancer();
  var connectivity_state_1 = require_connectivity_state();
  var TYPE_NAME = "child_load_balancer_helper";

  class ChildLoadBalancerHandler {
    constructor(channelControlHelper) {
      this.channelControlHelper = channelControlHelper;
      this.currentChild = null;
      this.pendingChild = null;
      this.latestConfig = null;
      this.ChildPolicyHelper = class {
        constructor(parent) {
          this.parent = parent;
          this.child = null;
        }
        createSubchannel(subchannelAddress, subchannelArgs) {
          return this.parent.channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
        }
        updateState(connectivityState, picker, errorMessage) {
          var _a;
          if (this.calledByPendingChild()) {
            if (connectivityState === connectivity_state_1.ConnectivityState.CONNECTING) {
              return;
            }
            (_a = this.parent.currentChild) === null || _a === undefined || _a.destroy();
            this.parent.currentChild = this.parent.pendingChild;
            this.parent.pendingChild = null;
          } else if (!this.calledByCurrentChild()) {
            return;
          }
          this.parent.channelControlHelper.updateState(connectivityState, picker, errorMessage);
        }
        requestReresolution() {
          var _a;
          const latestChild = (_a = this.parent.pendingChild) !== null && _a !== undefined ? _a : this.parent.currentChild;
          if (this.child === latestChild) {
            this.parent.channelControlHelper.requestReresolution();
          }
        }
        setChild(newChild) {
          this.child = newChild;
        }
        addChannelzChild(child) {
          this.parent.channelControlHelper.addChannelzChild(child);
        }
        removeChannelzChild(child) {
          this.parent.channelControlHelper.removeChannelzChild(child);
        }
        calledByPendingChild() {
          return this.child === this.parent.pendingChild;
        }
        calledByCurrentChild() {
          return this.child === this.parent.currentChild;
        }
      };
    }
    configUpdateRequiresNewPolicyInstance(oldConfig, newConfig) {
      return oldConfig.getLoadBalancerName() !== newConfig.getLoadBalancerName();
    }
    updateAddressList(endpointList, lbConfig, options, resolutionNote) {
      let childToUpdate;
      if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, lbConfig)) {
        const newHelper = new this.ChildPolicyHelper(this);
        const newChild = (0, load_balancer_1.createLoadBalancer)(lbConfig, newHelper);
        newHelper.setChild(newChild);
        if (this.currentChild === null) {
          this.currentChild = newChild;
          childToUpdate = this.currentChild;
        } else {
          if (this.pendingChild) {
            this.pendingChild.destroy();
          }
          this.pendingChild = newChild;
          childToUpdate = this.pendingChild;
        }
      } else {
        if (this.pendingChild === null) {
          childToUpdate = this.currentChild;
        } else {
          childToUpdate = this.pendingChild;
        }
      }
      this.latestConfig = lbConfig;
      return childToUpdate.updateAddressList(endpointList, lbConfig, options, resolutionNote);
    }
    exitIdle() {
      if (this.currentChild) {
        this.currentChild.exitIdle();
        if (this.pendingChild) {
          this.pendingChild.exitIdle();
        }
      }
    }
    resetBackoff() {
      if (this.currentChild) {
        this.currentChild.resetBackoff();
        if (this.pendingChild) {
          this.pendingChild.resetBackoff();
        }
      }
    }
    destroy() {
      if (this.currentChild) {
        this.currentChild.destroy();
        this.currentChild = null;
      }
      if (this.pendingChild) {
        this.pendingChild.destroy();
        this.pendingChild = null;
      }
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  exports.ChildLoadBalancerHandler = ChildLoadBalancerHandler;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js
var require_resolving_load_balancer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ResolvingLoadBalancer = undefined;
  var load_balancer_1 = require_load_balancer();
  var service_config_1 = require_service_config();
  var connectivity_state_1 = require_connectivity_state();
  var resolver_1 = require_resolver();
  var picker_1 = require_picker();
  var backoff_timeout_1 = require_backoff_timeout();
  var constants_1 = require_constants();
  var metadata_1 = require_metadata();
  var logging = require_logging();
  var constants_2 = require_constants();
  var uri_parser_1 = require_uri_parser();
  var load_balancer_child_handler_1 = require_load_balancer_child_handler();
  var TRACER_NAME = "resolving_load_balancer";
  function trace(text) {
    logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var NAME_MATCH_LEVEL_ORDER = [
    "SERVICE_AND_METHOD",
    "SERVICE",
    "EMPTY"
  ];
  function hasMatchingName(service, method, methodConfig, matchLevel) {
    for (const name of methodConfig.name) {
      switch (matchLevel) {
        case "EMPTY":
          if (!name.service && !name.method) {
            return true;
          }
          break;
        case "SERVICE":
          if (name.service === service && !name.method) {
            return true;
          }
          break;
        case "SERVICE_AND_METHOD":
          if (name.service === service && name.method === method) {
            return true;
          }
      }
    }
    return false;
  }
  function findMatchingConfig(service, method, methodConfigs, matchLevel) {
    for (const config of methodConfigs) {
      if (hasMatchingName(service, method, config, matchLevel)) {
        return config;
      }
    }
    return null;
  }
  function getDefaultConfigSelector(serviceConfig) {
    return {
      invoke(methodName, metadata) {
        var _a, _b;
        const splitName = methodName.split("/").filter((x) => x.length > 0);
        const service = (_a = splitName[0]) !== null && _a !== undefined ? _a : "";
        const method = (_b = splitName[1]) !== null && _b !== undefined ? _b : "";
        if (serviceConfig && serviceConfig.methodConfig) {
          for (const matchLevel of NAME_MATCH_LEVEL_ORDER) {
            const matchingConfig = findMatchingConfig(service, method, serviceConfig.methodConfig, matchLevel);
            if (matchingConfig) {
              return {
                methodConfig: matchingConfig,
                pickInformation: {},
                status: constants_1.Status.OK,
                dynamicFilterFactories: []
              };
            }
          }
        }
        return {
          methodConfig: { name: [] },
          pickInformation: {},
          status: constants_1.Status.OK,
          dynamicFilterFactories: []
        };
      },
      unref() {}
    };
  }

  class ResolvingLoadBalancer {
    constructor(target, channelControlHelper, channelOptions, onSuccessfulResolution, onFailedResolution) {
      this.target = target;
      this.channelControlHelper = channelControlHelper;
      this.channelOptions = channelOptions;
      this.onSuccessfulResolution = onSuccessfulResolution;
      this.onFailedResolution = onFailedResolution;
      this.latestChildState = connectivity_state_1.ConnectivityState.IDLE;
      this.latestChildPicker = new picker_1.QueuePicker(this);
      this.latestChildErrorMessage = null;
      this.currentState = connectivity_state_1.ConnectivityState.IDLE;
      this.previousServiceConfig = null;
      this.continueResolving = false;
      if (channelOptions["grpc.service_config"]) {
        this.defaultServiceConfig = (0, service_config_1.validateServiceConfig)(JSON.parse(channelOptions["grpc.service_config"]));
      } else {
        this.defaultServiceConfig = {
          loadBalancingConfig: [],
          methodConfig: []
        };
      }
      this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this), null);
      this.childLoadBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
        createSubchannel: channelControlHelper.createSubchannel.bind(channelControlHelper),
        requestReresolution: () => {
          if (this.backoffTimeout.isRunning()) {
            trace("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString());
            this.continueResolving = true;
          } else {
            this.updateResolution();
          }
        },
        updateState: (newState, picker, errorMessage) => {
          this.latestChildState = newState;
          this.latestChildPicker = picker;
          this.latestChildErrorMessage = errorMessage;
          this.updateState(newState, picker, errorMessage);
        },
        addChannelzChild: channelControlHelper.addChannelzChild.bind(channelControlHelper),
        removeChannelzChild: channelControlHelper.removeChannelzChild.bind(channelControlHelper)
      });
      this.innerResolver = (0, resolver_1.createResolver)(target, this.handleResolverResult.bind(this), channelOptions);
      const backoffOptions = {
        initialDelay: channelOptions["grpc.initial_reconnect_backoff_ms"],
        maxDelay: channelOptions["grpc.max_reconnect_backoff_ms"]
      };
      this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
        if (this.continueResolving) {
          this.updateResolution();
          this.continueResolving = false;
        } else {
          this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage);
        }
      }, backoffOptions);
      this.backoffTimeout.unref();
    }
    handleResolverResult(endpointList, attributes, serviceConfig, resolutionNote) {
      var _a, _b;
      this.backoffTimeout.stop();
      this.backoffTimeout.reset();
      let resultAccepted = true;
      let workingServiceConfig = null;
      if (serviceConfig === null) {
        workingServiceConfig = this.defaultServiceConfig;
      } else if (serviceConfig.ok) {
        workingServiceConfig = serviceConfig.value;
      } else {
        if (this.previousServiceConfig !== null) {
          workingServiceConfig = this.previousServiceConfig;
        } else {
          resultAccepted = false;
          this.handleResolutionFailure(serviceConfig.error);
        }
      }
      if (workingServiceConfig !== null) {
        const workingConfigList = (_a = workingServiceConfig === null || workingServiceConfig === undefined ? undefined : workingServiceConfig.loadBalancingConfig) !== null && _a !== undefined ? _a : [];
        const loadBalancingConfig = (0, load_balancer_1.selectLbConfigFromList)(workingConfigList, true);
        if (loadBalancingConfig === null) {
          resultAccepted = false;
          this.handleResolutionFailure({
            code: constants_1.Status.UNAVAILABLE,
            details: "All load balancer options in service config are not compatible",
            metadata: new metadata_1.Metadata
          });
        } else {
          resultAccepted = this.childLoadBalancer.updateAddressList(endpointList, loadBalancingConfig, Object.assign(Object.assign({}, this.channelOptions), attributes), resolutionNote);
        }
      }
      if (resultAccepted) {
        this.onSuccessfulResolution(workingServiceConfig, (_b = attributes[resolver_1.CHANNEL_ARGS_CONFIG_SELECTOR_KEY]) !== null && _b !== undefined ? _b : getDefaultConfigSelector(workingServiceConfig));
      }
      return resultAccepted;
    }
    updateResolution() {
      this.innerResolver.updateResolution();
      if (this.currentState === connectivity_state_1.ConnectivityState.IDLE) {
        this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage);
      }
      this.backoffTimeout.runOnce();
    }
    updateState(connectivityState, picker, errorMessage) {
      trace((0, uri_parser_1.uriToString)(this.target) + " " + connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[connectivityState]);
      if (connectivityState === connectivity_state_1.ConnectivityState.IDLE) {
        picker = new picker_1.QueuePicker(this, picker);
      }
      this.currentState = connectivityState;
      this.channelControlHelper.updateState(connectivityState, picker, errorMessage);
    }
    handleResolutionFailure(error) {
      if (this.latestChildState === connectivity_state_1.ConnectivityState.IDLE) {
        this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(error), error.details);
        this.onFailedResolution(error);
      }
    }
    exitIdle() {
      if (this.currentState === connectivity_state_1.ConnectivityState.IDLE || this.currentState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
        if (this.backoffTimeout.isRunning()) {
          this.continueResolving = true;
        } else {
          this.updateResolution();
        }
      }
      this.childLoadBalancer.exitIdle();
    }
    updateAddressList(endpointList, lbConfig) {
      throw new Error("updateAddressList not supported on ResolvingLoadBalancer");
    }
    resetBackoff() {
      this.backoffTimeout.reset();
      this.childLoadBalancer.resetBackoff();
    }
    destroy() {
      this.childLoadBalancer.destroy();
      this.innerResolver.destroy();
      this.backoffTimeout.reset();
      this.backoffTimeout.stop();
      this.latestChildState = connectivity_state_1.ConnectivityState.IDLE;
      this.latestChildPicker = new picker_1.QueuePicker(this);
      this.currentState = connectivity_state_1.ConnectivityState.IDLE;
      this.previousServiceConfig = null;
      this.continueResolving = false;
    }
    getTypeName() {
      return "resolving_load_balancer";
    }
  }
  exports.ResolvingLoadBalancer = ResolvingLoadBalancer;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/channel-options.js
var require_channel_options = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.recognizedOptions = undefined;
  exports.channelOptionsEqual = channelOptionsEqual;
  exports.recognizedOptions = {
    "grpc.ssl_target_name_override": true,
    "grpc.primary_user_agent": true,
    "grpc.secondary_user_agent": true,
    "grpc.default_authority": true,
    "grpc.keepalive_time_ms": true,
    "grpc.keepalive_timeout_ms": true,
    "grpc.keepalive_permit_without_calls": true,
    "grpc.service_config": true,
    "grpc.max_concurrent_streams": true,
    "grpc.initial_reconnect_backoff_ms": true,
    "grpc.max_reconnect_backoff_ms": true,
    "grpc.use_local_subchannel_pool": true,
    "grpc.max_send_message_length": true,
    "grpc.max_receive_message_length": true,
    "grpc.enable_http_proxy": true,
    "grpc.enable_channelz": true,
    "grpc.dns_min_time_between_resolutions_ms": true,
    "grpc.enable_retries": true,
    "grpc.per_rpc_retry_buffer_size": true,
    "grpc.retry_buffer_size": true,
    "grpc.max_connection_age_ms": true,
    "grpc.max_connection_age_grace_ms": true,
    "grpc-node.max_session_memory": true,
    "grpc.service_config_disable_resolution": true,
    "grpc.client_idle_timeout_ms": true,
    "grpc-node.tls_enable_trace": true,
    "grpc.lb.ring_hash.ring_size_cap": true,
    "grpc-node.retry_max_attempts_limit": true,
    "grpc-node.flow_control_window": true,
    "grpc.server_call_metric_recording": true
  };
  function channelOptionsEqual(options1, options2) {
    const keys1 = Object.keys(options1).sort();
    const keys2 = Object.keys(options2).sort();
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0;i < keys1.length; i += 1) {
      if (keys1[i] !== keys2[i]) {
        return false;
      }
      if (options1[keys1[i]] !== options2[keys2[i]]) {
        return false;
      }
    }
    return true;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/subchannel-address.js
var require_subchannel_address = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EndpointMap = undefined;
  exports.isTcpSubchannelAddress = isTcpSubchannelAddress;
  exports.subchannelAddressEqual = subchannelAddressEqual;
  exports.subchannelAddressToString = subchannelAddressToString;
  exports.stringToSubchannelAddress = stringToSubchannelAddress;
  exports.endpointEqual = endpointEqual;
  exports.endpointToString = endpointToString;
  exports.endpointHasAddress = endpointHasAddress;
  var net_1 = __require("net");
  function isTcpSubchannelAddress(address) {
    return "port" in address;
  }
  function subchannelAddressEqual(address1, address2) {
    if (!address1 && !address2) {
      return true;
    }
    if (!address1 || !address2) {
      return false;
    }
    if (isTcpSubchannelAddress(address1)) {
      return isTcpSubchannelAddress(address2) && address1.host === address2.host && address1.port === address2.port;
    } else {
      return !isTcpSubchannelAddress(address2) && address1.path === address2.path;
    }
  }
  function subchannelAddressToString(address) {
    if (isTcpSubchannelAddress(address)) {
      if ((0, net_1.isIPv6)(address.host)) {
        return "[" + address.host + "]:" + address.port;
      } else {
        return address.host + ":" + address.port;
      }
    } else {
      return address.path;
    }
  }
  var DEFAULT_PORT = 443;
  function stringToSubchannelAddress(addressString, port) {
    if ((0, net_1.isIP)(addressString)) {
      return {
        host: addressString,
        port: port !== null && port !== undefined ? port : DEFAULT_PORT
      };
    } else {
      return {
        path: addressString
      };
    }
  }
  function endpointEqual(endpoint1, endpoint2) {
    if (endpoint1.addresses.length !== endpoint2.addresses.length) {
      return false;
    }
    for (let i = 0;i < endpoint1.addresses.length; i++) {
      if (!subchannelAddressEqual(endpoint1.addresses[i], endpoint2.addresses[i])) {
        return false;
      }
    }
    return true;
  }
  function endpointToString(endpoint) {
    return "[" + endpoint.addresses.map(subchannelAddressToString).join(", ") + "]";
  }
  function endpointHasAddress(endpoint, expectedAddress) {
    for (const address of endpoint.addresses) {
      if (subchannelAddressEqual(address, expectedAddress)) {
        return true;
      }
    }
    return false;
  }
  function endpointEqualUnordered(endpoint1, endpoint2) {
    if (endpoint1.addresses.length !== endpoint2.addresses.length) {
      return false;
    }
    for (const address1 of endpoint1.addresses) {
      let matchFound = false;
      for (const address2 of endpoint2.addresses) {
        if (subchannelAddressEqual(address1, address2)) {
          matchFound = true;
          break;
        }
      }
      if (!matchFound) {
        return false;
      }
    }
    return true;
  }

  class EndpointMap {
    constructor() {
      this.map = new Set;
    }
    get size() {
      return this.map.size;
    }
    getForSubchannelAddress(address) {
      for (const entry of this.map) {
        if (endpointHasAddress(entry.key, address)) {
          return entry.value;
        }
      }
      return;
    }
    deleteMissing(endpoints) {
      const removedValues = [];
      for (const entry of this.map) {
        let foundEntry = false;
        for (const endpoint of endpoints) {
          if (endpointEqualUnordered(endpoint, entry.key)) {
            foundEntry = true;
          }
        }
        if (!foundEntry) {
          removedValues.push(entry.value);
          this.map.delete(entry);
        }
      }
      return removedValues;
    }
    get(endpoint) {
      for (const entry of this.map) {
        if (endpointEqualUnordered(endpoint, entry.key)) {
          return entry.value;
        }
      }
      return;
    }
    set(endpoint, mapEntry) {
      for (const entry of this.map) {
        if (endpointEqualUnordered(endpoint, entry.key)) {
          entry.value = mapEntry;
          return;
        }
      }
      this.map.add({ key: endpoint, value: mapEntry });
    }
    delete(endpoint) {
      for (const entry of this.map) {
        if (endpointEqualUnordered(endpoint, entry.key)) {
          this.map.delete(entry);
          return;
        }
      }
    }
    has(endpoint) {
      for (const entry of this.map) {
        if (endpointEqualUnordered(endpoint, entry.key)) {
          return true;
        }
      }
      return false;
    }
    clear() {
      this.map.clear();
    }
    *keys() {
      for (const entry of this.map) {
        yield entry.key;
      }
    }
    *values() {
      for (const entry of this.map) {
        yield entry.value;
      }
    }
    *entries() {
      for (const entry of this.map) {
        yield [entry.key, entry.value];
      }
    }
  }
  exports.EndpointMap = EndpointMap;
});

// node_modules/.bun/@js-sdsl+ordered-map@4.4.2/node_modules/@js-sdsl/ordered-map/dist/cjs/index.js
var require_cjs = __commonJS((exports) => {
  Object.defineProperty(exports, "t", {
    value: true
  });

  class TreeNode {
    constructor(t, e, s = 1) {
      this.i = undefined;
      this.h = undefined;
      this.o = undefined;
      this.u = t;
      this.l = e;
      this.p = s;
    }
    I() {
      let t = this;
      const e = t.o.o === t;
      if (e && t.p === 1) {
        t = t.h;
      } else if (t.i) {
        t = t.i;
        while (t.h) {
          t = t.h;
        }
      } else {
        if (e) {
          return t.o;
        }
        let s = t.o;
        while (s.i === t) {
          t = s;
          s = t.o;
        }
        t = s;
      }
      return t;
    }
    B() {
      let t = this;
      if (t.h) {
        t = t.h;
        while (t.i) {
          t = t.i;
        }
        return t;
      } else {
        let e = t.o;
        while (e.h === t) {
          t = e;
          e = t.o;
        }
        if (t.h !== e) {
          return e;
        } else
          return t;
      }
    }
    _() {
      const t = this.o;
      const e = this.h;
      const s = e.i;
      if (t.o === this)
        t.o = e;
      else if (t.i === this)
        t.i = e;
      else
        t.h = e;
      e.o = t;
      e.i = this;
      this.o = e;
      this.h = s;
      if (s)
        s.o = this;
      return e;
    }
    g() {
      const t = this.o;
      const e = this.i;
      const s = e.h;
      if (t.o === this)
        t.o = e;
      else if (t.i === this)
        t.i = e;
      else
        t.h = e;
      e.o = t;
      e.h = this;
      this.o = e;
      this.i = s;
      if (s)
        s.o = this;
      return e;
    }
  }

  class TreeNodeEnableIndex extends TreeNode {
    constructor() {
      super(...arguments);
      this.M = 1;
    }
    _() {
      const t = super._();
      this.O();
      t.O();
      return t;
    }
    g() {
      const t = super.g();
      this.O();
      t.O();
      return t;
    }
    O() {
      this.M = 1;
      if (this.i) {
        this.M += this.i.M;
      }
      if (this.h) {
        this.M += this.h.M;
      }
    }
  }

  class ContainerIterator {
    constructor(t = 0) {
      this.iteratorType = t;
    }
    equals(t) {
      return this.T === t.T;
    }
  }

  class Base {
    constructor() {
      this.m = 0;
    }
    get length() {
      return this.m;
    }
    size() {
      return this.m;
    }
    empty() {
      return this.m === 0;
    }
  }

  class Container extends Base {
  }
  function throwIteratorAccessError() {
    throw new RangeError("Iterator access denied!");
  }

  class TreeContainer extends Container {
    constructor(t = function(t2, e2) {
      if (t2 < e2)
        return -1;
      if (t2 > e2)
        return 1;
      return 0;
    }, e = false) {
      super();
      this.v = undefined;
      this.A = t;
      this.enableIndex = e;
      this.N = e ? TreeNodeEnableIndex : TreeNode;
      this.C = new this.N;
    }
    R(t, e) {
      let s = this.C;
      while (t) {
        const i = this.A(t.u, e);
        if (i < 0) {
          t = t.h;
        } else if (i > 0) {
          s = t;
          t = t.i;
        } else
          return t;
      }
      return s;
    }
    K(t, e) {
      let s = this.C;
      while (t) {
        const i = this.A(t.u, e);
        if (i <= 0) {
          t = t.h;
        } else {
          s = t;
          t = t.i;
        }
      }
      return s;
    }
    L(t, e) {
      let s = this.C;
      while (t) {
        const i = this.A(t.u, e);
        if (i < 0) {
          s = t;
          t = t.h;
        } else if (i > 0) {
          t = t.i;
        } else
          return t;
      }
      return s;
    }
    k(t, e) {
      let s = this.C;
      while (t) {
        const i = this.A(t.u, e);
        if (i < 0) {
          s = t;
          t = t.h;
        } else {
          t = t.i;
        }
      }
      return s;
    }
    P(t) {
      while (true) {
        const e = t.o;
        if (e === this.C)
          return;
        if (t.p === 1) {
          t.p = 0;
          return;
        }
        if (t === e.i) {
          const s = e.h;
          if (s.p === 1) {
            s.p = 0;
            e.p = 1;
            if (e === this.v) {
              this.v = e._();
            } else
              e._();
          } else {
            if (s.h && s.h.p === 1) {
              s.p = e.p;
              e.p = 0;
              s.h.p = 0;
              if (e === this.v) {
                this.v = e._();
              } else
                e._();
              return;
            } else if (s.i && s.i.p === 1) {
              s.p = 1;
              s.i.p = 0;
              s.g();
            } else {
              s.p = 1;
              t = e;
            }
          }
        } else {
          const s = e.i;
          if (s.p === 1) {
            s.p = 0;
            e.p = 1;
            if (e === this.v) {
              this.v = e.g();
            } else
              e.g();
          } else {
            if (s.i && s.i.p === 1) {
              s.p = e.p;
              e.p = 0;
              s.i.p = 0;
              if (e === this.v) {
                this.v = e.g();
              } else
                e.g();
              return;
            } else if (s.h && s.h.p === 1) {
              s.p = 1;
              s.h.p = 0;
              s._();
            } else {
              s.p = 1;
              t = e;
            }
          }
        }
      }
    }
    S(t) {
      if (this.m === 1) {
        this.clear();
        return;
      }
      let e = t;
      while (e.i || e.h) {
        if (e.h) {
          e = e.h;
          while (e.i)
            e = e.i;
        } else {
          e = e.i;
        }
        const s2 = t.u;
        t.u = e.u;
        e.u = s2;
        const i = t.l;
        t.l = e.l;
        e.l = i;
        t = e;
      }
      if (this.C.i === e) {
        this.C.i = e.o;
      } else if (this.C.h === e) {
        this.C.h = e.o;
      }
      this.P(e);
      let s = e.o;
      if (e === s.i) {
        s.i = undefined;
      } else
        s.h = undefined;
      this.m -= 1;
      this.v.p = 0;
      if (this.enableIndex) {
        while (s !== this.C) {
          s.M -= 1;
          s = s.o;
        }
      }
    }
    U(t) {
      const e = typeof t === "number" ? t : undefined;
      const s = typeof t === "function" ? t : undefined;
      const i = typeof t === "undefined" ? [] : undefined;
      let r = 0;
      let n = this.v;
      const h = [];
      while (h.length || n) {
        if (n) {
          h.push(n);
          n = n.i;
        } else {
          n = h.pop();
          if (r === e)
            return n;
          i && i.push(n);
          s && s(n, r, this);
          r += 1;
          n = n.h;
        }
      }
      return i;
    }
    j(t) {
      while (true) {
        const e = t.o;
        if (e.p === 0)
          return;
        const s = e.o;
        if (e === s.i) {
          const i = s.h;
          if (i && i.p === 1) {
            i.p = e.p = 0;
            if (s === this.v)
              return;
            s.p = 1;
            t = s;
            continue;
          } else if (t === e.h) {
            t.p = 0;
            if (t.i) {
              t.i.o = e;
            }
            if (t.h) {
              t.h.o = s;
            }
            e.h = t.i;
            s.i = t.h;
            t.i = e;
            t.h = s;
            if (s === this.v) {
              this.v = t;
              this.C.o = t;
            } else {
              const e2 = s.o;
              if (e2.i === s) {
                e2.i = t;
              } else
                e2.h = t;
            }
            t.o = s.o;
            e.o = t;
            s.o = t;
            s.p = 1;
          } else {
            e.p = 0;
            if (s === this.v) {
              this.v = s.g();
            } else
              s.g();
            s.p = 1;
            return;
          }
        } else {
          const i = s.i;
          if (i && i.p === 1) {
            i.p = e.p = 0;
            if (s === this.v)
              return;
            s.p = 1;
            t = s;
            continue;
          } else if (t === e.i) {
            t.p = 0;
            if (t.i) {
              t.i.o = s;
            }
            if (t.h) {
              t.h.o = e;
            }
            s.h = t.i;
            e.i = t.h;
            t.i = s;
            t.h = e;
            if (s === this.v) {
              this.v = t;
              this.C.o = t;
            } else {
              const e2 = s.o;
              if (e2.i === s) {
                e2.i = t;
              } else
                e2.h = t;
            }
            t.o = s.o;
            e.o = t;
            s.o = t;
            s.p = 1;
          } else {
            e.p = 0;
            if (s === this.v) {
              this.v = s._();
            } else
              s._();
            s.p = 1;
            return;
          }
        }
        if (this.enableIndex) {
          e.O();
          s.O();
          t.O();
        }
        return;
      }
    }
    q(t, e, s) {
      if (this.v === undefined) {
        this.m += 1;
        this.v = new this.N(t, e, 0);
        this.v.o = this.C;
        this.C.o = this.C.i = this.C.h = this.v;
        return this.m;
      }
      let i;
      const r = this.C.i;
      const n = this.A(r.u, t);
      if (n === 0) {
        r.l = e;
        return this.m;
      } else if (n > 0) {
        r.i = new this.N(t, e);
        r.i.o = r;
        i = r.i;
        this.C.i = i;
      } else {
        const r2 = this.C.h;
        const n2 = this.A(r2.u, t);
        if (n2 === 0) {
          r2.l = e;
          return this.m;
        } else if (n2 < 0) {
          r2.h = new this.N(t, e);
          r2.h.o = r2;
          i = r2.h;
          this.C.h = i;
        } else {
          if (s !== undefined) {
            const r3 = s.T;
            if (r3 !== this.C) {
              const s2 = this.A(r3.u, t);
              if (s2 === 0) {
                r3.l = e;
                return this.m;
              } else if (s2 > 0) {
                const s3 = r3.I();
                const n3 = this.A(s3.u, t);
                if (n3 === 0) {
                  s3.l = e;
                  return this.m;
                } else if (n3 < 0) {
                  i = new this.N(t, e);
                  if (s3.h === undefined) {
                    s3.h = i;
                    i.o = s3;
                  } else {
                    r3.i = i;
                    i.o = r3;
                  }
                }
              }
            }
          }
          if (i === undefined) {
            i = this.v;
            while (true) {
              const s2 = this.A(i.u, t);
              if (s2 > 0) {
                if (i.i === undefined) {
                  i.i = new this.N(t, e);
                  i.i.o = i;
                  i = i.i;
                  break;
                }
                i = i.i;
              } else if (s2 < 0) {
                if (i.h === undefined) {
                  i.h = new this.N(t, e);
                  i.h.o = i;
                  i = i.h;
                  break;
                }
                i = i.h;
              } else {
                i.l = e;
                return this.m;
              }
            }
          }
        }
      }
      if (this.enableIndex) {
        let t2 = i.o;
        while (t2 !== this.C) {
          t2.M += 1;
          t2 = t2.o;
        }
      }
      this.j(i);
      this.m += 1;
      return this.m;
    }
    H(t, e) {
      while (t) {
        const s = this.A(t.u, e);
        if (s < 0) {
          t = t.h;
        } else if (s > 0) {
          t = t.i;
        } else
          return t;
      }
      return t || this.C;
    }
    clear() {
      this.m = 0;
      this.v = undefined;
      this.C.o = undefined;
      this.C.i = this.C.h = undefined;
    }
    updateKeyByIterator(t, e) {
      const s = t.T;
      if (s === this.C) {
        throwIteratorAccessError();
      }
      if (this.m === 1) {
        s.u = e;
        return true;
      }
      const i = s.B().u;
      if (s === this.C.i) {
        if (this.A(i, e) > 0) {
          s.u = e;
          return true;
        }
        return false;
      }
      const r = s.I().u;
      if (s === this.C.h) {
        if (this.A(r, e) < 0) {
          s.u = e;
          return true;
        }
        return false;
      }
      if (this.A(r, e) >= 0 || this.A(i, e) <= 0)
        return false;
      s.u = e;
      return true;
    }
    eraseElementByPos(t) {
      if (t < 0 || t > this.m - 1) {
        throw new RangeError;
      }
      const e = this.U(t);
      this.S(e);
      return this.m;
    }
    eraseElementByKey(t) {
      if (this.m === 0)
        return false;
      const e = this.H(this.v, t);
      if (e === this.C)
        return false;
      this.S(e);
      return true;
    }
    eraseElementByIterator(t) {
      const e = t.T;
      if (e === this.C) {
        throwIteratorAccessError();
      }
      const s = e.h === undefined;
      const i = t.iteratorType === 0;
      if (i) {
        if (s)
          t.next();
      } else {
        if (!s || e.i === undefined)
          t.next();
      }
      this.S(e);
      return t;
    }
    getHeight() {
      if (this.m === 0)
        return 0;
      function traversal(t) {
        if (!t)
          return 0;
        return Math.max(traversal(t.i), traversal(t.h)) + 1;
      }
      return traversal(this.v);
    }
  }

  class TreeIterator extends ContainerIterator {
    constructor(t, e, s) {
      super(s);
      this.T = t;
      this.C = e;
      if (this.iteratorType === 0) {
        this.pre = function() {
          if (this.T === this.C.i) {
            throwIteratorAccessError();
          }
          this.T = this.T.I();
          return this;
        };
        this.next = function() {
          if (this.T === this.C) {
            throwIteratorAccessError();
          }
          this.T = this.T.B();
          return this;
        };
      } else {
        this.pre = function() {
          if (this.T === this.C.h) {
            throwIteratorAccessError();
          }
          this.T = this.T.B();
          return this;
        };
        this.next = function() {
          if (this.T === this.C) {
            throwIteratorAccessError();
          }
          this.T = this.T.I();
          return this;
        };
      }
    }
    get index() {
      let t = this.T;
      const e = this.C.o;
      if (t === this.C) {
        if (e) {
          return e.M - 1;
        }
        return 0;
      }
      let s = 0;
      if (t.i) {
        s += t.i.M;
      }
      while (t !== e) {
        const e2 = t.o;
        if (t === e2.h) {
          s += 1;
          if (e2.i) {
            s += e2.i.M;
          }
        }
        t = e2;
      }
      return s;
    }
    isAccessible() {
      return this.T !== this.C;
    }
  }

  class OrderedMapIterator extends TreeIterator {
    constructor(t, e, s, i) {
      super(t, e, i);
      this.container = s;
    }
    get pointer() {
      if (this.T === this.C) {
        throwIteratorAccessError();
      }
      const t = this;
      return new Proxy([], {
        get(e, s) {
          if (s === "0")
            return t.T.u;
          else if (s === "1")
            return t.T.l;
          e[0] = t.T.u;
          e[1] = t.T.l;
          return e[s];
        },
        set(e, s, i) {
          if (s !== "1") {
            throw new TypeError("prop must be 1");
          }
          t.T.l = i;
          return true;
        }
      });
    }
    copy() {
      return new OrderedMapIterator(this.T, this.C, this.container, this.iteratorType);
    }
  }

  class OrderedMap extends TreeContainer {
    constructor(t = [], e, s) {
      super(e, s);
      const i = this;
      t.forEach(function(t2) {
        i.setElement(t2[0], t2[1]);
      });
    }
    begin() {
      return new OrderedMapIterator(this.C.i || this.C, this.C, this);
    }
    end() {
      return new OrderedMapIterator(this.C, this.C, this);
    }
    rBegin() {
      return new OrderedMapIterator(this.C.h || this.C, this.C, this, 1);
    }
    rEnd() {
      return new OrderedMapIterator(this.C, this.C, this, 1);
    }
    front() {
      if (this.m === 0)
        return;
      const t = this.C.i;
      return [t.u, t.l];
    }
    back() {
      if (this.m === 0)
        return;
      const t = this.C.h;
      return [t.u, t.l];
    }
    lowerBound(t) {
      const e = this.R(this.v, t);
      return new OrderedMapIterator(e, this.C, this);
    }
    upperBound(t) {
      const e = this.K(this.v, t);
      return new OrderedMapIterator(e, this.C, this);
    }
    reverseLowerBound(t) {
      const e = this.L(this.v, t);
      return new OrderedMapIterator(e, this.C, this);
    }
    reverseUpperBound(t) {
      const e = this.k(this.v, t);
      return new OrderedMapIterator(e, this.C, this);
    }
    forEach(t) {
      this.U(function(e, s, i) {
        t([e.u, e.l], s, i);
      });
    }
    setElement(t, e, s) {
      return this.q(t, e, s);
    }
    getElementByPos(t) {
      if (t < 0 || t > this.m - 1) {
        throw new RangeError;
      }
      const e = this.U(t);
      return [e.u, e.l];
    }
    find(t) {
      const e = this.H(this.v, t);
      return new OrderedMapIterator(e, this.C, this);
    }
    getElementByKey(t) {
      const e = this.H(this.v, t);
      return e.l;
    }
    union(t) {
      const e = this;
      t.forEach(function(t2) {
        e.setElement(t2[0], t2[1]);
      });
      return this.m;
    }
    *[Symbol.iterator]() {
      const t = this.m;
      const e = this.U();
      for (let s = 0;s < t; ++s) {
        const t2 = e[s];
        yield [t2.u, t2.l];
      }
    }
  }
  exports.OrderedMap = OrderedMap;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/admin.js
var require_admin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.registerAdminService = registerAdminService;
  exports.addAdminServicesToServer = addAdminServicesToServer;
  var registeredAdminServices = [];
  function registerAdminService(getServiceDefinition, getHandlers) {
    registeredAdminServices.push({ getServiceDefinition, getHandlers });
  }
  function addAdminServicesToServer(server) {
    for (const { getServiceDefinition, getHandlers } of registeredAdminServices) {
      server.addService(getServiceDefinition(), getHandlers());
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/call.js
var require_call = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ClientDuplexStreamImpl = exports.ClientWritableStreamImpl = exports.ClientReadableStreamImpl = exports.ClientUnaryCallImpl = undefined;
  exports.callErrorFromStatus = callErrorFromStatus;
  var events_1 = __require("events");
  var stream_1 = __require("stream");
  var constants_1 = require_constants();
  function callErrorFromStatus(status, callerStack) {
    const message = `${status.code} ${constants_1.Status[status.code]}: ${status.details}`;
    const error = new Error(message);
    const stack = `${error.stack}
for call at
${callerStack}`;
    return Object.assign(new Error(message), status, { stack });
  }

  class ClientUnaryCallImpl extends events_1.EventEmitter {
    constructor() {
      super();
    }
    cancel() {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : "unknown";
    }
    getAuthContext() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getAuthContext()) !== null && _b !== undefined ? _b : null;
    }
  }
  exports.ClientUnaryCallImpl = ClientUnaryCallImpl;

  class ClientReadableStreamImpl extends stream_1.Readable {
    constructor(deserialize) {
      super({ objectMode: true });
      this.deserialize = deserialize;
    }
    cancel() {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : "unknown";
    }
    getAuthContext() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getAuthContext()) !== null && _b !== undefined ? _b : null;
    }
    _read(_size) {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.startRead();
    }
  }
  exports.ClientReadableStreamImpl = ClientReadableStreamImpl;

  class ClientWritableStreamImpl extends stream_1.Writable {
    constructor(serialize) {
      super({ objectMode: true });
      this.serialize = serialize;
    }
    cancel() {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : "unknown";
    }
    getAuthContext() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getAuthContext()) !== null && _b !== undefined ? _b : null;
    }
    _write(chunk, encoding, cb) {
      var _a;
      const context = {
        callback: cb
      };
      const flags = Number(encoding);
      if (!Number.isNaN(flags)) {
        context.flags = flags;
      }
      (_a = this.call) === null || _a === undefined || _a.sendMessageWithContext(context, chunk);
    }
    _final(cb) {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.halfClose();
      cb();
    }
  }
  exports.ClientWritableStreamImpl = ClientWritableStreamImpl;

  class ClientDuplexStreamImpl extends stream_1.Duplex {
    constructor(serialize, deserialize) {
      super({ objectMode: true });
      this.serialize = serialize;
      this.deserialize = deserialize;
    }
    cancel() {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : "unknown";
    }
    getAuthContext() {
      var _a, _b;
      return (_b = (_a = this.call) === null || _a === undefined ? undefined : _a.getAuthContext()) !== null && _b !== undefined ? _b : null;
    }
    _read(_size) {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.startRead();
    }
    _write(chunk, encoding, cb) {
      var _a;
      const context = {
        callback: cb
      };
      const flags = Number(encoding);
      if (!Number.isNaN(flags)) {
        context.flags = flags;
      }
      (_a = this.call) === null || _a === undefined || _a.sendMessageWithContext(context, chunk);
    }
    _final(cb) {
      var _a;
      (_a = this.call) === null || _a === undefined || _a.halfClose();
      cb();
    }
  }
  exports.ClientDuplexStreamImpl = ClientDuplexStreamImpl;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/call-interface.js
var require_call_interface = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InterceptingListenerImpl = undefined;
  exports.statusOrFromValue = statusOrFromValue;
  exports.statusOrFromError = statusOrFromError;
  exports.isInterceptingListener = isInterceptingListener;
  var metadata_1 = require_metadata();
  function statusOrFromValue(value) {
    return {
      ok: true,
      value
    };
  }
  function statusOrFromError(error) {
    var _a;
    return {
      ok: false,
      error: Object.assign(Object.assign({}, error), { metadata: (_a = error.metadata) !== null && _a !== undefined ? _a : new metadata_1.Metadata })
    };
  }
  function isInterceptingListener(listener) {
    return listener.onReceiveMetadata !== undefined && listener.onReceiveMetadata.length === 1;
  }

  class InterceptingListenerImpl {
    constructor(listener, nextListener) {
      this.listener = listener;
      this.nextListener = nextListener;
      this.processingMetadata = false;
      this.hasPendingMessage = false;
      this.processingMessage = false;
      this.pendingStatus = null;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) {
        this.nextListener.onReceiveMessage(this.pendingMessage);
        this.pendingMessage = null;
        this.hasPendingMessage = false;
      }
    }
    processPendingStatus() {
      if (this.pendingStatus) {
        this.nextListener.onReceiveStatus(this.pendingStatus);
      }
    }
    onReceiveMetadata(metadata) {
      this.processingMetadata = true;
      this.listener.onReceiveMetadata(metadata, (metadata2) => {
        this.processingMetadata = false;
        this.nextListener.onReceiveMetadata(metadata2);
        this.processPendingMessage();
        this.processPendingStatus();
      });
    }
    onReceiveMessage(message) {
      this.processingMessage = true;
      this.listener.onReceiveMessage(message, (msg) => {
        this.processingMessage = false;
        if (this.processingMetadata) {
          this.pendingMessage = msg;
          this.hasPendingMessage = true;
        } else {
          this.nextListener.onReceiveMessage(msg);
          this.processPendingStatus();
        }
      });
    }
    onReceiveStatus(status) {
      this.listener.onReceiveStatus(status, (processedStatus) => {
        if (this.processingMetadata || this.processingMessage) {
          this.pendingStatus = processedStatus;
        } else {
          this.nextListener.onReceiveStatus(processedStatus);
        }
      });
    }
  }
  exports.InterceptingListenerImpl = InterceptingListenerImpl;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/client-interceptors.js
var require_client_interceptors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InterceptingCall = exports.RequesterBuilder = exports.ListenerBuilder = exports.InterceptorConfigurationError = undefined;
  exports.getInterceptingCall = getInterceptingCall;
  var metadata_1 = require_metadata();
  var call_interface_1 = require_call_interface();
  var constants_1 = require_constants();
  var error_1 = require_error();

  class InterceptorConfigurationError extends Error {
    constructor(message) {
      super(message);
      this.name = "InterceptorConfigurationError";
      Error.captureStackTrace(this, InterceptorConfigurationError);
    }
  }
  exports.InterceptorConfigurationError = InterceptorConfigurationError;

  class ListenerBuilder {
    constructor() {
      this.metadata = undefined;
      this.message = undefined;
      this.status = undefined;
    }
    withOnReceiveMetadata(onReceiveMetadata) {
      this.metadata = onReceiveMetadata;
      return this;
    }
    withOnReceiveMessage(onReceiveMessage) {
      this.message = onReceiveMessage;
      return this;
    }
    withOnReceiveStatus(onReceiveStatus) {
      this.status = onReceiveStatus;
      return this;
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveStatus: this.status
      };
    }
  }
  exports.ListenerBuilder = ListenerBuilder;

  class RequesterBuilder {
    constructor() {
      this.start = undefined;
      this.message = undefined;
      this.halfClose = undefined;
      this.cancel = undefined;
    }
    withStart(start) {
      this.start = start;
      return this;
    }
    withSendMessage(sendMessage) {
      this.message = sendMessage;
      return this;
    }
    withHalfClose(halfClose) {
      this.halfClose = halfClose;
      return this;
    }
    withCancel(cancel) {
      this.cancel = cancel;
      return this;
    }
    build() {
      return {
        start: this.start,
        sendMessage: this.message,
        halfClose: this.halfClose,
        cancel: this.cancel
      };
    }
  }
  exports.RequesterBuilder = RequesterBuilder;
  var defaultListener = {
    onReceiveMetadata: (metadata, next) => {
      next(metadata);
    },
    onReceiveMessage: (message, next) => {
      next(message);
    },
    onReceiveStatus: (status, next) => {
      next(status);
    }
  };
  var defaultRequester = {
    start: (metadata, listener, next) => {
      next(metadata, listener);
    },
    sendMessage: (message, next) => {
      next(message);
    },
    halfClose: (next) => {
      next();
    },
    cancel: (next) => {
      next();
    }
  };

  class InterceptingCall {
    constructor(nextCall, requester) {
      var _a, _b, _c, _d;
      this.nextCall = nextCall;
      this.processingMetadata = false;
      this.pendingMessageContext = null;
      this.processingMessage = false;
      this.pendingHalfClose = false;
      if (requester) {
        this.requester = {
          start: (_a = requester.start) !== null && _a !== undefined ? _a : defaultRequester.start,
          sendMessage: (_b = requester.sendMessage) !== null && _b !== undefined ? _b : defaultRequester.sendMessage,
          halfClose: (_c = requester.halfClose) !== null && _c !== undefined ? _c : defaultRequester.halfClose,
          cancel: (_d = requester.cancel) !== null && _d !== undefined ? _d : defaultRequester.cancel
        };
      } else {
        this.requester = defaultRequester;
      }
    }
    cancelWithStatus(status, details) {
      this.requester.cancel(() => {
        this.nextCall.cancelWithStatus(status, details);
      });
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    processPendingMessage() {
      if (this.pendingMessageContext) {
        this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage);
        this.pendingMessageContext = null;
        this.pendingMessage = null;
      }
    }
    processPendingHalfClose() {
      if (this.pendingHalfClose) {
        this.nextCall.halfClose();
      }
    }
    start(metadata, interceptingListener) {
      var _a, _b, _c, _d, _e, _f;
      const fullInterceptingListener = {
        onReceiveMetadata: (_b = (_a = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveMetadata) === null || _a === undefined ? undefined : _a.bind(interceptingListener)) !== null && _b !== undefined ? _b : (metadata2) => {},
        onReceiveMessage: (_d = (_c = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveMessage) === null || _c === undefined ? undefined : _c.bind(interceptingListener)) !== null && _d !== undefined ? _d : (message) => {},
        onReceiveStatus: (_f = (_e = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveStatus) === null || _e === undefined ? undefined : _e.bind(interceptingListener)) !== null && _f !== undefined ? _f : (status) => {}
      };
      this.processingMetadata = true;
      this.requester.start(metadata, fullInterceptingListener, (md, listener) => {
        var _a2, _b2, _c2;
        this.processingMetadata = false;
        let finalInterceptingListener;
        if ((0, call_interface_1.isInterceptingListener)(listener)) {
          finalInterceptingListener = listener;
        } else {
          const fullListener = {
            onReceiveMetadata: (_a2 = listener.onReceiveMetadata) !== null && _a2 !== undefined ? _a2 : defaultListener.onReceiveMetadata,
            onReceiveMessage: (_b2 = listener.onReceiveMessage) !== null && _b2 !== undefined ? _b2 : defaultListener.onReceiveMessage,
            onReceiveStatus: (_c2 = listener.onReceiveStatus) !== null && _c2 !== undefined ? _c2 : defaultListener.onReceiveStatus
          };
          finalInterceptingListener = new call_interface_1.InterceptingListenerImpl(fullListener, fullInterceptingListener);
        }
        this.nextCall.start(md, finalInterceptingListener);
        this.processPendingMessage();
        this.processPendingHalfClose();
      });
    }
    sendMessageWithContext(context, message) {
      this.processingMessage = true;
      this.requester.sendMessage(message, (finalMessage) => {
        this.processingMessage = false;
        if (this.processingMetadata) {
          this.pendingMessageContext = context;
          this.pendingMessage = message;
        } else {
          this.nextCall.sendMessageWithContext(context, finalMessage);
          this.processPendingHalfClose();
        }
      });
    }
    sendMessage(message) {
      this.sendMessageWithContext({}, message);
    }
    startRead() {
      this.nextCall.startRead();
    }
    halfClose() {
      this.requester.halfClose(() => {
        if (this.processingMetadata || this.processingMessage) {
          this.pendingHalfClose = true;
        } else {
          this.nextCall.halfClose();
        }
      });
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
  }
  exports.InterceptingCall = InterceptingCall;
  function getCall(channel, path, options) {
    var _a, _b;
    const deadline = (_a = options.deadline) !== null && _a !== undefined ? _a : Infinity;
    const host = options.host;
    const parent = (_b = options.parent) !== null && _b !== undefined ? _b : null;
    const propagateFlags = options.propagate_flags;
    const credentials = options.credentials;
    const call = channel.createCall(path, deadline, host, parent, propagateFlags);
    if (credentials) {
      call.setCredentials(credentials);
    }
    return call;
  }

  class BaseInterceptingCall {
    constructor(call, methodDefinition) {
      this.call = call;
      this.methodDefinition = methodDefinition;
    }
    cancelWithStatus(status, details) {
      this.call.cancelWithStatus(status, details);
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMessageWithContext(context, message) {
      let serialized;
      try {
        serialized = this.methodDefinition.requestSerialize(message);
      } catch (e) {
        this.call.cancelWithStatus(constants_1.Status.INTERNAL, `Request message serialization failure: ${(0, error_1.getErrorMessage)(e)}`);
        return;
      }
      this.call.sendMessageWithContext(context, serialized);
    }
    sendMessage(message) {
      this.sendMessageWithContext({}, message);
    }
    start(metadata, interceptingListener) {
      let readError = null;
      this.call.start(metadata, {
        onReceiveMetadata: (metadata2) => {
          var _a;
          (_a = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveMetadata) === null || _a === undefined || _a.call(interceptingListener, metadata2);
        },
        onReceiveMessage: (message) => {
          var _a;
          let deserialized;
          try {
            deserialized = this.methodDefinition.responseDeserialize(message);
          } catch (e) {
            readError = {
              code: constants_1.Status.INTERNAL,
              details: `Response message parsing error: ${(0, error_1.getErrorMessage)(e)}`,
              metadata: new metadata_1.Metadata
            };
            this.call.cancelWithStatus(readError.code, readError.details);
            return;
          }
          (_a = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveMessage) === null || _a === undefined || _a.call(interceptingListener, deserialized);
        },
        onReceiveStatus: (status) => {
          var _a, _b;
          if (readError) {
            (_a = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveStatus) === null || _a === undefined || _a.call(interceptingListener, readError);
          } else {
            (_b = interceptingListener === null || interceptingListener === undefined ? undefined : interceptingListener.onReceiveStatus) === null || _b === undefined || _b.call(interceptingListener, status);
          }
        }
      });
    }
    startRead() {
      this.call.startRead();
    }
    halfClose() {
      this.call.halfClose();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
  }

  class BaseUnaryInterceptingCall extends BaseInterceptingCall {
    constructor(call, methodDefinition) {
      super(call, methodDefinition);
    }
    start(metadata, listener) {
      var _a, _b;
      let receivedMessage = false;
      const wrapperListener = {
        onReceiveMetadata: (_b = (_a = listener === null || listener === undefined ? undefined : listener.onReceiveMetadata) === null || _a === undefined ? undefined : _a.bind(listener)) !== null && _b !== undefined ? _b : (metadata2) => {},
        onReceiveMessage: (message) => {
          var _a2;
          receivedMessage = true;
          (_a2 = listener === null || listener === undefined ? undefined : listener.onReceiveMessage) === null || _a2 === undefined || _a2.call(listener, message);
        },
        onReceiveStatus: (status) => {
          var _a2, _b2;
          if (!receivedMessage) {
            (_a2 = listener === null || listener === undefined ? undefined : listener.onReceiveMessage) === null || _a2 === undefined || _a2.call(listener, null);
          }
          (_b2 = listener === null || listener === undefined ? undefined : listener.onReceiveStatus) === null || _b2 === undefined || _b2.call(listener, status);
        }
      };
      super.start(metadata, wrapperListener);
      this.call.startRead();
    }
  }

  class BaseStreamingInterceptingCall extends BaseInterceptingCall {
  }
  function getBottomInterceptingCall(channel, options, methodDefinition) {
    const call = getCall(channel, methodDefinition.path, options);
    if (methodDefinition.responseStream) {
      return new BaseStreamingInterceptingCall(call, methodDefinition);
    } else {
      return new BaseUnaryInterceptingCall(call, methodDefinition);
    }
  }
  function getInterceptingCall(interceptorArgs, methodDefinition, options, channel) {
    if (interceptorArgs.clientInterceptors.length > 0 && interceptorArgs.clientInterceptorProviders.length > 0) {
      throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as options " + "to the client constructor. Only one of these is allowed.");
    }
    if (interceptorArgs.callInterceptors.length > 0 && interceptorArgs.callInterceptorProviders.length > 0) {
      throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as call " + "options. Only one of these is allowed.");
    }
    let interceptors = [];
    if (interceptorArgs.callInterceptors.length > 0 || interceptorArgs.callInterceptorProviders.length > 0) {
      interceptors = [].concat(interceptorArgs.callInterceptors, interceptorArgs.callInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
    } else {
      interceptors = [].concat(interceptorArgs.clientInterceptors, interceptorArgs.clientInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
    }
    const interceptorOptions = Object.assign({}, options, {
      method_definition: methodDefinition
    });
    const getCall2 = interceptors.reduceRight((nextCall, nextInterceptor) => {
      return (currentOptions) => nextInterceptor(currentOptions, nextCall);
    }, (finalOptions) => getBottomInterceptingCall(channel, finalOptions, methodDefinition));
    return getCall2(interceptorOptions);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/client.js
var require_client = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Client = undefined;
  var call_1 = require_call();
  var channel_1 = require_channel();
  var connectivity_state_1 = require_connectivity_state();
  var constants_1 = require_constants();
  var metadata_1 = require_metadata();
  var client_interceptors_1 = require_client_interceptors();
  var CHANNEL_SYMBOL = Symbol();
  var INTERCEPTOR_SYMBOL = Symbol();
  var INTERCEPTOR_PROVIDER_SYMBOL = Symbol();
  var CALL_INVOCATION_TRANSFORMER_SYMBOL = Symbol();
  function isFunction(arg) {
    return typeof arg === "function";
  }
  function getErrorStackString(error) {
    var _a;
    return ((_a = error.stack) === null || _a === undefined ? undefined : _a.split(`
`).slice(1).join(`
`)) || "no stack trace available";
  }

  class Client {
    constructor(address, credentials, options = {}) {
      var _a, _b;
      options = Object.assign({}, options);
      this[INTERCEPTOR_SYMBOL] = (_a = options.interceptors) !== null && _a !== undefined ? _a : [];
      delete options.interceptors;
      this[INTERCEPTOR_PROVIDER_SYMBOL] = (_b = options.interceptor_providers) !== null && _b !== undefined ? _b : [];
      delete options.interceptor_providers;
      if (this[INTERCEPTOR_SYMBOL].length > 0 && this[INTERCEPTOR_PROVIDER_SYMBOL].length > 0) {
        throw new Error("Both interceptors and interceptor_providers were passed as options " + "to the client constructor. Only one of these is allowed.");
      }
      this[CALL_INVOCATION_TRANSFORMER_SYMBOL] = options.callInvocationTransformer;
      delete options.callInvocationTransformer;
      if (options.channelOverride) {
        this[CHANNEL_SYMBOL] = options.channelOverride;
      } else if (options.channelFactoryOverride) {
        const channelFactoryOverride = options.channelFactoryOverride;
        delete options.channelFactoryOverride;
        this[CHANNEL_SYMBOL] = channelFactoryOverride(address, credentials, options);
      } else {
        this[CHANNEL_SYMBOL] = new channel_1.ChannelImplementation(address, credentials, options);
      }
    }
    close() {
      this[CHANNEL_SYMBOL].close();
    }
    getChannel() {
      return this[CHANNEL_SYMBOL];
    }
    waitForReady(deadline, callback) {
      const checkState = (err) => {
        if (err) {
          callback(new Error("Failed to connect before the deadline"));
          return;
        }
        let newState;
        try {
          newState = this[CHANNEL_SYMBOL].getConnectivityState(true);
        } catch (e) {
          callback(new Error("The channel has been closed"));
          return;
        }
        if (newState === connectivity_state_1.ConnectivityState.READY) {
          callback();
        } else {
          try {
            this[CHANNEL_SYMBOL].watchConnectivityState(newState, deadline, checkState);
          } catch (e) {
            callback(new Error("The channel has been closed"));
          }
        }
      };
      setImmediate(checkState);
    }
    checkOptionalUnaryResponseArguments(arg1, arg2, arg3) {
      if (isFunction(arg1)) {
        return { metadata: new metadata_1.Metadata, options: {}, callback: arg1 };
      } else if (isFunction(arg2)) {
        if (arg1 instanceof metadata_1.Metadata) {
          return { metadata: arg1, options: {}, callback: arg2 };
        } else {
          return { metadata: new metadata_1.Metadata, options: arg1, callback: arg2 };
        }
      } else {
        if (!(arg1 instanceof metadata_1.Metadata && arg2 instanceof Object && isFunction(arg3))) {
          throw new Error("Incorrect arguments passed");
        }
        return { metadata: arg1, options: arg2, callback: arg3 };
      }
    }
    makeUnaryRequest(method, serialize, deserialize, argument, metadata, options, callback) {
      var _a, _b;
      const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
      const methodDefinition = {
        path: method,
        requestStream: false,
        responseStream: false,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        argument,
        metadata: checkedArguments.metadata,
        call: new call_1.ClientUnaryCallImpl,
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options,
        callback: checkedArguments.callback
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const emitter = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== undefined ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== undefined ? _b : []
      };
      const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      emitter.call = call;
      let responseMessage = null;
      let receivedStatus = false;
      let callerStackError = new Error;
      call.start(callProperties.metadata, {
        onReceiveMetadata: (metadata2) => {
          emitter.emit("metadata", metadata2);
        },
        onReceiveMessage(message) {
          if (responseMessage !== null) {
            call.cancelWithStatus(constants_1.Status.UNIMPLEMENTED, "Too many responses received");
          }
          responseMessage = message;
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          if (status.code === constants_1.Status.OK) {
            if (responseMessage === null) {
              const callerStack = getErrorStackString(callerStackError);
              callProperties.callback((0, call_1.callErrorFromStatus)({
                code: constants_1.Status.UNIMPLEMENTED,
                details: "No message received",
                metadata: status.metadata
              }, callerStack));
            } else {
              callProperties.callback(null, responseMessage);
            }
          } else {
            const callerStack = getErrorStackString(callerStackError);
            callProperties.callback((0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          emitter.emit("status", status);
        }
      });
      call.sendMessage(argument);
      call.halfClose();
      return emitter;
    }
    makeClientStreamRequest(method, serialize, deserialize, metadata, options, callback) {
      var _a, _b;
      const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
      const methodDefinition = {
        path: method,
        requestStream: true,
        responseStream: false,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        metadata: checkedArguments.metadata,
        call: new call_1.ClientWritableStreamImpl(serialize),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options,
        callback: checkedArguments.callback
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const emitter = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== undefined ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== undefined ? _b : []
      };
      const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      emitter.call = call;
      let responseMessage = null;
      let receivedStatus = false;
      let callerStackError = new Error;
      call.start(callProperties.metadata, {
        onReceiveMetadata: (metadata2) => {
          emitter.emit("metadata", metadata2);
        },
        onReceiveMessage(message) {
          if (responseMessage !== null) {
            call.cancelWithStatus(constants_1.Status.UNIMPLEMENTED, "Too many responses received");
          }
          responseMessage = message;
          call.startRead();
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          if (status.code === constants_1.Status.OK) {
            if (responseMessage === null) {
              const callerStack = getErrorStackString(callerStackError);
              callProperties.callback((0, call_1.callErrorFromStatus)({
                code: constants_1.Status.UNIMPLEMENTED,
                details: "No message received",
                metadata: status.metadata
              }, callerStack));
            } else {
              callProperties.callback(null, responseMessage);
            }
          } else {
            const callerStack = getErrorStackString(callerStackError);
            callProperties.callback((0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          emitter.emit("status", status);
        }
      });
      return emitter;
    }
    checkMetadataAndOptions(arg1, arg2) {
      let metadata;
      let options;
      if (arg1 instanceof metadata_1.Metadata) {
        metadata = arg1;
        if (arg2) {
          options = arg2;
        } else {
          options = {};
        }
      } else {
        if (arg1) {
          options = arg1;
        } else {
          options = {};
        }
        metadata = new metadata_1.Metadata;
      }
      return { metadata, options };
    }
    makeServerStreamRequest(method, serialize, deserialize, argument, metadata, options) {
      var _a, _b;
      const checkedArguments = this.checkMetadataAndOptions(metadata, options);
      const methodDefinition = {
        path: method,
        requestStream: false,
        responseStream: true,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        argument,
        metadata: checkedArguments.metadata,
        call: new call_1.ClientReadableStreamImpl(deserialize),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const stream = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== undefined ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== undefined ? _b : []
      };
      const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      stream.call = call;
      let receivedStatus = false;
      let callerStackError = new Error;
      call.start(callProperties.metadata, {
        onReceiveMetadata(metadata2) {
          stream.emit("metadata", metadata2);
        },
        onReceiveMessage(message) {
          stream.push(message);
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          stream.push(null);
          if (status.code !== constants_1.Status.OK) {
            const callerStack = getErrorStackString(callerStackError);
            stream.emit("error", (0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          stream.emit("status", status);
        }
      });
      call.sendMessage(argument);
      call.halfClose();
      return stream;
    }
    makeBidiStreamRequest(method, serialize, deserialize, metadata, options) {
      var _a, _b;
      const checkedArguments = this.checkMetadataAndOptions(metadata, options);
      const methodDefinition = {
        path: method,
        requestStream: true,
        responseStream: true,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        metadata: checkedArguments.metadata,
        call: new call_1.ClientDuplexStreamImpl(serialize, deserialize),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const stream = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== undefined ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== undefined ? _b : []
      };
      const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      stream.call = call;
      let receivedStatus = false;
      let callerStackError = new Error;
      call.start(callProperties.metadata, {
        onReceiveMetadata(metadata2) {
          stream.emit("metadata", metadata2);
        },
        onReceiveMessage(message) {
          stream.push(message);
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          stream.push(null);
          if (status.code !== constants_1.Status.OK) {
            const callerStack = getErrorStackString(callerStackError);
            stream.emit("error", (0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          stream.emit("status", status);
        }
      });
      return stream;
    }
  }
  exports.Client = Client;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/make-client.js
var require_make_client = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.makeClientConstructor = makeClientConstructor;
  exports.loadPackageDefinition = loadPackageDefinition;
  var client_1 = require_client();
  var requesterFuncs = {
    unary: client_1.Client.prototype.makeUnaryRequest,
    server_stream: client_1.Client.prototype.makeServerStreamRequest,
    client_stream: client_1.Client.prototype.makeClientStreamRequest,
    bidi: client_1.Client.prototype.makeBidiStreamRequest
  };
  function isPrototypePolluted(key) {
    return ["__proto__", "prototype", "constructor"].includes(key);
  }
  function makeClientConstructor(methods, serviceName, classOptions) {
    if (!classOptions) {
      classOptions = {};
    }

    class ServiceClientImpl extends client_1.Client {
    }
    Object.keys(methods).forEach((name) => {
      if (isPrototypePolluted(name)) {
        return;
      }
      const attrs = methods[name];
      let methodType;
      if (typeof name === "string" && name.charAt(0) === "$") {
        throw new Error("Method names cannot start with $");
      }
      if (attrs.requestStream) {
        if (attrs.responseStream) {
          methodType = "bidi";
        } else {
          methodType = "client_stream";
        }
      } else {
        if (attrs.responseStream) {
          methodType = "server_stream";
        } else {
          methodType = "unary";
        }
      }
      const serialize = attrs.requestSerialize;
      const deserialize = attrs.responseDeserialize;
      const methodFunc = partial(requesterFuncs[methodType], attrs.path, serialize, deserialize);
      ServiceClientImpl.prototype[name] = methodFunc;
      Object.assign(ServiceClientImpl.prototype[name], attrs);
      if (attrs.originalName && !isPrototypePolluted(attrs.originalName)) {
        ServiceClientImpl.prototype[attrs.originalName] = ServiceClientImpl.prototype[name];
      }
    });
    ServiceClientImpl.service = methods;
    ServiceClientImpl.serviceName = serviceName;
    return ServiceClientImpl;
  }
  function partial(fn, path, serialize, deserialize) {
    return function(...args) {
      return fn.call(this, path, serialize, deserialize, ...args);
    };
  }
  function isProtobufTypeDefinition(obj) {
    return "format" in obj;
  }
  function loadPackageDefinition(packageDef) {
    const result = {};
    for (const serviceFqn in packageDef) {
      if (Object.prototype.hasOwnProperty.call(packageDef, serviceFqn)) {
        const service = packageDef[serviceFqn];
        const nameComponents = serviceFqn.split(".");
        if (nameComponents.some((comp) => isPrototypePolluted(comp))) {
          continue;
        }
        const serviceName = nameComponents[nameComponents.length - 1];
        let current = result;
        for (const packageName of nameComponents.slice(0, -1)) {
          if (!current[packageName]) {
            current[packageName] = {};
          }
          current = current[packageName];
        }
        if (isProtobufTypeDefinition(service)) {
          current[serviceName] = service;
        } else {
          current[serviceName] = makeClientConstructor(service, serviceName, {});
        }
      }
    }
    return result;
  }
});

// node_modules/.bun/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS((exports, module) => {
  var INFINITY = 1 / 0;
  var symbolTag = "[object Symbol]";
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsDingbatRange = "\\u2700-\\u27bf";
  var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
  var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
  var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
  var rsPunctuationRange = "\\u2000-\\u206f";
  var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
  var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  var rsApos = "['\u2019]";
  var rsAstral = "[" + rsAstralRange + "]";
  var rsBreak = "[" + rsBreakRange + "]";
  var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
  var rsDigits = "\\d+";
  var rsDingbat = "[" + rsDingbatRange + "]";
  var rsLower = "[" + rsLowerRange + "]";
  var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
  var rsNonAstral = "[^" + rsAstralRange + "]";
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsUpper = "[" + rsUpperRange + "]";
  var rsZWJ = "\\u200d";
  var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
  var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
  var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
  var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
  var reOptMod = rsModifier + "?";
  var rsOptVar = "[" + rsVarRange + "]?";
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
  var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
  var reApos = RegExp(rsApos, "g");
  var reComboMark = RegExp(rsCombo, "g");
  var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
  var reUnicodeWord = RegExp([
    rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
    rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
    rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
    rsUpper + "+" + rsOptUpperContr,
    rsDigits,
    rsEmoji
  ].join("|"), "g");
  var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  var deburredLetters = {
    "\xC0": "A",
    "\xC1": "A",
    "\xC2": "A",
    "\xC3": "A",
    "\xC4": "A",
    "\xC5": "A",
    "\xE0": "a",
    "\xE1": "a",
    "\xE2": "a",
    "\xE3": "a",
    "\xE4": "a",
    "\xE5": "a",
    "\xC7": "C",
    "\xE7": "c",
    "\xD0": "D",
    "\xF0": "d",
    "\xC8": "E",
    "\xC9": "E",
    "\xCA": "E",
    "\xCB": "E",
    "\xE8": "e",
    "\xE9": "e",
    "\xEA": "e",
    "\xEB": "e",
    "\xCC": "I",
    "\xCD": "I",
    "\xCE": "I",
    "\xCF": "I",
    "\xEC": "i",
    "\xED": "i",
    "\xEE": "i",
    "\xEF": "i",
    "\xD1": "N",
    "\xF1": "n",
    "\xD2": "O",
    "\xD3": "O",
    "\xD4": "O",
    "\xD5": "O",
    "\xD6": "O",
    "\xD8": "O",
    "\xF2": "o",
    "\xF3": "o",
    "\xF4": "o",
    "\xF5": "o",
    "\xF6": "o",
    "\xF8": "o",
    "\xD9": "U",
    "\xDA": "U",
    "\xDB": "U",
    "\xDC": "U",
    "\xF9": "u",
    "\xFA": "u",
    "\xFB": "u",
    "\xFC": "u",
    "\xDD": "Y",
    "\xFD": "y",
    "\xFF": "y",
    "\xC6": "Ae",
    "\xE6": "ae",
    "\xDE": "Th",
    "\xFE": "th",
    "\xDF": "ss",
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010A": "C",
    "\u010C": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010B": "c",
    "\u010D": "c",
    "\u010E": "D",
    "\u0110": "D",
    "\u010F": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011A": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011B": "e",
    "\u011C": "G",
    "\u011E": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011D": "g",
    "\u011F": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012A": "I",
    "\u012C": "I",
    "\u012E": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012B": "i",
    "\u012D": "i",
    "\u012F": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013B": "L",
    "\u013D": "L",
    "\u013F": "L",
    "\u0141": "L",
    "\u013A": "l",
    "\u013C": "l",
    "\u013E": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014A": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014B": "n",
    "\u014C": "O",
    "\u014E": "O",
    "\u0150": "O",
    "\u014D": "o",
    "\u014F": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015A": "S",
    "\u015C": "S",
    "\u015E": "S",
    "\u0160": "S",
    "\u015B": "s",
    "\u015D": "s",
    "\u015F": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016A": "U",
    "\u016C": "U",
    "\u016E": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016B": "u",
    "\u016D": "u",
    "\u016F": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017B": "Z",
    "\u017D": "Z",
    "\u017A": "z",
    "\u017C": "z",
    "\u017E": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017F": "ss"
  };
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function asciiToArray(string) {
    return string.split("");
  }
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }
  var deburrLetter = basePropertyOf(deburredLetters);
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol2 = root.Symbol;
  var symbolProto = Symbol2 ? Symbol2.prototype : undefined;
  var symbolToString = symbolProto ? symbolProto.toString : undefined;
  function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  function createCaseFirst(methodName) {
    return function(string) {
      string = toString(string);
      var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
    };
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize(word) : word);
  });
  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }
  function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
  }
  var upperFirst = createCaseFirst("toUpperCase");
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }
  module.exports = camelCase;
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS((exports, module) => {
  module.exports = LongBits;
  var util = require_minimal();
  function LongBits(lo, hi) {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  }
  var zero = LongBits.zero = new LongBits(0, 0);
  zero.toNumber = function() {
    return 0;
  };
  zero.zzEncode = zero.zzDecode = function() {
    return this;
  };
  zero.length = function() {
    return 1;
  };
  var zeroHash = LongBits.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
  LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
      return zero;
    var sign = value < 0;
    if (sign)
      value = -value;
    var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295)
          hi = 0;
      }
    }
    return new LongBits(lo, hi);
  };
  LongBits.from = function from(value) {
    if (typeof value === "number")
      return LongBits.fromNumber(value);
    if (util.isString(value)) {
      if (util.Long)
        value = util.Long.fromString(value);
      else
        return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
  };
  LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
      var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
      if (!lo)
        hi = hi + 1 >>> 0;
      return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
  };
  var charCodeAt = String.prototype.charCodeAt;
  LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
      return zero;
    return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
  };
  LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  LongBits.prototype.zzEncode = function zzEncode() {
    var mask = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo = (this.lo << 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi = (this.hi >>> 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.length = function length() {
    var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
    return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS((exports) => {
  var util = exports;
  util.asPromise = require_aspromise();
  util.base64 = require_base64();
  util.EventEmitter = require_eventemitter();
  util.float = require_float();
  util.inquire = require_inquire();
  util.utf8 = require_utf8();
  util.pool = require_pool();
  util.LongBits = require_longbits();
  util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
  util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports;
  util.emptyArray = Object.freeze ? Object.freeze([]) : [];
  util.emptyObject = Object.freeze ? Object.freeze({}) : {};
  util.isInteger = Number.isInteger || function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
  };
  util.isObject = function isObject(value) {
    return value && typeof value === "object";
  };
  util.isset = util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop))
      return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
  };
  util.Buffer = function() {
    try {
      var Buffer2 = util.inquire("buffer").Buffer;
      return Buffer2.prototype.utf8Write ? Buffer2 : null;
    } catch (e) {
      return null;
    }
  }();
  util._Buffer_from = null;
  util._Buffer_allocUnsafe = null;
  util.newBuffer = function newBuffer(sizeOrArray) {
    return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
  };
  util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  util.Long = util.global.dcodeIO && util.global.dcodeIO.Long || util.global.Long || util.inquire("long");
  util.key2Re = /^true|false|0|1$/;
  util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  util.longToHash = function longToHash(value) {
    return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
  };
  util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
      return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
  };
  function merge(dst, src, ifNotSet) {
    for (var keys = Object.keys(src), i = 0;i < keys.length; ++i)
      if (dst[keys[i]] === undefined || !ifNotSet)
        dst[keys[i]] = src[keys[i]];
    return dst;
  }
  util.merge = merge;
  util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
  };
  function newError(name) {
    function CustomError(message, properties) {
      if (!(this instanceof CustomError))
        return new CustomError(message, properties);
      Object.defineProperty(this, "message", { get: function() {
        return message;
      } });
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, CustomError);
      else
        Object.defineProperty(this, "stack", { value: new Error().stack || "" });
      if (properties)
        merge(this, properties);
    }
    CustomError.prototype = Object.create(Error.prototype, {
      constructor: {
        value: CustomError,
        writable: true,
        enumerable: false,
        configurable: true
      },
      name: {
        get: function get() {
          return name;
        },
        set: undefined,
        enumerable: false,
        configurable: true
      },
      toString: {
        value: function value() {
          return this.name + ": " + this.message;
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });
    return CustomError;
  }
  util.newError = newError;
  util.ProtocolError = newError("ProtocolError");
  util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0;i < fieldNames.length; ++i)
      fieldMap[fieldNames[i]] = 1;
    return function() {
      for (var keys = Object.keys(this), i2 = keys.length - 1;i2 > -1; --i2)
        if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== undefined && this[keys[i2]] !== null)
          return keys[i2];
    };
  };
  util.oneOfSetter = function setOneOf(fieldNames) {
    return function(name) {
      for (var i = 0;i < fieldNames.length; ++i)
        if (fieldNames[i] !== name)
          delete this[fieldNames[i]];
    };
  };
  util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
  };
  util._configure = function() {
    var Buffer2 = util.Buffer;
    if (!Buffer2) {
      util._Buffer_from = util._Buffer_allocUnsafe = null;
      return;
    }
    util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || function Buffer_from(value, encoding) {
      return new Buffer2(value, encoding);
    };
    util._Buffer_allocUnsafe = Buffer2.allocUnsafe || function Buffer_allocUnsafe(size) {
      return new Buffer2(size);
    };
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/writer.js
var require_writer = __commonJS((exports, module) => {
  module.exports = Writer;
  var util = require_minimal();
  var BufferWriter;
  var LongBits = util.LongBits;
  var base64 = util.base64;
  var utf8 = util.utf8;
  function Op(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.next = undefined;
    this.val = val;
  }
  function noop() {}
  function State(writer) {
    this.head = writer.head;
    this.tail = writer.tail;
    this.len = writer.len;
    this.next = writer.states;
  }
  function Writer() {
    this.len = 0;
    this.head = new Op(noop, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  var create = function create2() {
    return util.Buffer ? function create_buffer_setup() {
      return (Writer.create = function create_buffer() {
        return new BufferWriter;
      })();
    } : function create_array() {
      return new Writer;
    };
  };
  Writer.create = create();
  Writer.alloc = function alloc(size) {
    return new util.Array(size);
  };
  if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
  Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  };
  function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
  }
  function writeVarint32(val, buf, pos) {
    while (val > 127) {
      buf[pos++] = val & 127 | 128;
      val >>>= 7;
    }
    buf[pos] = val;
  }
  function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
  }
  VarintOp.prototype = Object.create(Op.prototype);
  VarintOp.prototype.fn = writeVarint32;
  Writer.prototype.uint32 = function write_uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
    return this;
  };
  Writer.prototype.int32 = function write_int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
  };
  Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
  };
  function writeVarint64(val, buf, pos) {
    while (val.hi) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
      val.hi >>>= 7;
    }
    while (val.lo > 127) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
  }
  Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.int64 = Writer.prototype.uint64;
  Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
  };
  function writeFixed32(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  }
  Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
  };
  Writer.prototype.sfixed32 = Writer.prototype.fixed32;
  Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
  };
  Writer.prototype.sfixed64 = Writer.prototype.fixed64;
  Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
  };
  Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
  };
  var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
    buf.set(val, pos);
  } : function writeBytes_for(val, buf, pos) {
    for (var i = 0;i < val.length; ++i)
      buf[pos + i] = val[i];
  };
  Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
      return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
      var buf = Writer.alloc(len = base64.length(value));
      base64.decode(value, buf, 0);
      value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
  };
  Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
  };
  Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
  };
  Writer.prototype.reset = function reset() {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
    }
    return this;
  };
  Writer.prototype.ldelim = function ldelim() {
    var head = this.head, tail = this.tail, len = this.len;
    this.reset().uint32(len);
    if (len) {
      this.tail.next = head.next;
      this.tail = tail;
      this.len += len;
    }
    return this;
  };
  Writer.prototype.finish = function finish() {
    var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
    while (head) {
      head.fn(head.val, buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  };
  Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS((exports, module) => {
  module.exports = BufferWriter;
  var Writer = require_writer();
  (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
  var util = require_minimal();
  function BufferWriter() {
    Writer.call(this);
  }
  BufferWriter._configure = function() {
    BufferWriter.alloc = util._Buffer_allocUnsafe;
    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytesBuffer_copy(val, buf, pos) {
      if (val.copy)
        val.copy(buf, pos, 0, val.length);
      else
        for (var i = 0;i < val.length; )
          buf[pos++] = val[i++];
    };
  };
  BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
      value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
      this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
  };
  function writeStringBuffer(val, buf, pos) {
    if (val.length < 40)
      util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
      buf.utf8Write(val, pos);
    else
      buf.write(val, pos);
  }
  BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
      this._push(writeStringBuffer, len, value);
    return this;
  };
  BufferWriter._configure();
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/reader.js
var require_reader = __commonJS((exports, module) => {
  module.exports = Reader;
  var util = require_minimal();
  var BufferReader;
  var LongBits = util.LongBits;
  var utf8 = util.utf8;
  function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
  }
  function Reader(buffer) {
    this.buf = buffer;
    this.pos = 0;
    this.len = buffer.length;
  }
  var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
    if (buffer instanceof Uint8Array || Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  } : function create_array2(buffer) {
    if (Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  };
  var create = function create2() {
    return util.Buffer ? function create_buffer_setup(buffer) {
      return (Reader.create = function create_buffer(buffer2) {
        return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
      })(buffer);
    } : create_array;
  };
  Reader.create = create();
  Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
  Reader.prototype.uint32 = function read_uint32_setup() {
    var value = 4294967295;
    return function read_uint32() {
      value = (this.buf[this.pos] & 127) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      if ((this.pos += 5) > this.len) {
        this.pos = this.len;
        throw indexOutOfRange(this, 10);
      }
      return value;
    };
  }();
  Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
  };
  Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
  };
  function readLongVarint() {
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) {
      for (;i < 4; ++i) {
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
      i = 0;
    } else {
      for (;i < 3; ++i) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
      return bits;
    }
    if (this.len - this.pos > 4) {
      for (;i < 5; ++i) {
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    } else {
      for (;i < 5; ++i) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    }
    throw Error("invalid varint encoding");
  }
  Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
  };
  function readFixed32_end(buf, end) {
    return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
  }
  Reader.prototype.fixed32 = function read_fixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4);
  };
  Reader.prototype.sfixed32 = function read_sfixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4) | 0;
  };
  function readFixed64() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 8);
    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  }
  Reader.prototype.float = function read_float() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
  };
  Reader.prototype.double = function read_double() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
  };
  Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(), start = this.pos, end = this.pos + length;
    if (end > this.len)
      throw indexOutOfRange(this, length);
    this.pos += length;
    if (Array.isArray(this.buf))
      return this.buf.slice(start, end);
    if (start === end) {
      var nativeBuffer = util.Buffer;
      return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, start, end);
  };
  Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
  };
  Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
      if (this.pos + length > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
    } else {
      do {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((wireType = this.uint32() & 7) !== 4) {
          this.skipType(wireType);
        }
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
  };
  Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();
    var fn = util.Long ? "toLong" : "toNumber";
    util.merge(Reader.prototype, {
      int64: function read_int64() {
        return readLongVarint.call(this)[fn](false);
      },
      uint64: function read_uint64() {
        return readLongVarint.call(this)[fn](true);
      },
      sint64: function read_sint64() {
        return readLongVarint.call(this).zzDecode()[fn](false);
      },
      fixed64: function read_fixed64() {
        return readFixed64.call(this)[fn](true);
      },
      sfixed64: function read_sfixed64() {
        return readFixed64.call(this)[fn](false);
      }
    });
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS((exports, module) => {
  module.exports = BufferReader;
  var Reader = require_reader();
  (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
  var util = require_minimal();
  function BufferReader(buffer) {
    Reader.call(this, buffer);
  }
  BufferReader._configure = function() {
    if (util.Buffer)
      BufferReader.prototype._slice = util.Buffer.prototype.slice;
  };
  BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
  };
  BufferReader._configure();
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS((exports, module) => {
  module.exports = Service;
  var util = require_minimal();
  (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
  function Service(rpcImpl, requestDelimited, responseDelimited) {
    if (typeof rpcImpl !== "function")
      throw TypeError("rpcImpl must be a function");
    util.EventEmitter.call(this);
    this.rpcImpl = rpcImpl;
    this.requestDelimited = Boolean(requestDelimited);
    this.responseDelimited = Boolean(responseDelimited);
  }
  Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
    if (!request)
      throw TypeError("request must be specified");
    var self2 = this;
    if (!callback)
      return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
    if (!self2.rpcImpl) {
      setTimeout(function() {
        callback(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return self2.rpcImpl(method, requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
        if (err) {
          self2.emit("error", err, method);
          return callback(err);
        }
        if (response === null) {
          self2.end(true);
          return;
        }
        if (!(response instanceof responseCtor)) {
          try {
            response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
          } catch (err2) {
            self2.emit("error", err2, method);
            return callback(err2);
          }
        }
        self2.emit("data", response, method);
        return callback(null, response);
      });
    } catch (err) {
      self2.emit("error", err, method);
      setTimeout(function() {
        callback(err);
      }, 0);
      return;
    }
  };
  Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
      if (!endedByRPC)
        this.rpcImpl(null, null, null);
      this.rpcImpl = null;
      this.emit("end").off();
    }
    return this;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS((exports) => {
  var rpc = exports;
  rpc.Service = require_service();
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/roots.js
var require_roots = __commonJS((exports, module) => {
  module.exports = {};
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS((exports) => {
  var protobuf = exports;
  protobuf.build = "minimal";
  protobuf.Writer = require_writer();
  protobuf.BufferWriter = require_writer_buffer();
  protobuf.Reader = require_reader();
  protobuf.BufferReader = require_reader_buffer();
  protobuf.util = require_minimal();
  protobuf.rpc = require_rpc();
  protobuf.roots = require_roots();
  protobuf.configure = configure;
  function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
  }
  configure();
});

// node_modules/.bun/@protobufjs+codegen@2.0.4/node_modules/@protobufjs/codegen/index.js
var require_codegen = __commonJS((exports, module) => {
  module.exports = codegen;
  function codegen(functionParams, functionName) {
    if (typeof functionParams === "string") {
      functionName = functionParams;
      functionParams = undefined;
    }
    var body = [];
    function Codegen(formatStringOrScope) {
      if (typeof formatStringOrScope !== "string") {
        var source = toString();
        if (codegen.verbose)
          console.log("codegen: " + source);
        source = "return " + source;
        if (formatStringOrScope) {
          var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
          while (scopeOffset < scopeKeys.length) {
            scopeParams[scopeOffset] = scopeKeys[scopeOffset];
            scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
          }
          scopeParams[scopeOffset] = source;
          return Function.apply(null, scopeParams).apply(null, scopeValues);
        }
        return Function(source)();
      }
      var formatParams = new Array(arguments.length - 1), formatOffset = 0;
      while (formatOffset < formatParams.length)
        formatParams[formatOffset] = arguments[++formatOffset];
      formatOffset = 0;
      formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
        var value = formatParams[formatOffset++];
        switch ($1) {
          case "d":
          case "f":
            return String(Number(value));
          case "i":
            return String(Math.floor(value));
          case "j":
            return JSON.stringify(value);
          case "s":
            return String(value);
        }
        return "%";
      });
      if (formatOffset !== formatParams.length)
        throw Error("parameter count mismatch");
      body.push(formatStringOrScope);
      return Codegen;
    }
    function toString(functionNameOverride) {
      return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + `){
  ` + body.join(`
  `) + `
}`;
    }
    Codegen.toString = toString;
    return Codegen;
  }
  codegen.verbose = false;
});

// node_modules/.bun/@protobufjs+fetch@1.1.0/node_modules/@protobufjs/fetch/index.js
var require_fetch = __commonJS((exports, module) => {
  module.exports = fetch;
  var asPromise = require_aspromise();
  var inquire = require_inquire();
  var fs = inquire("fs");
  function fetch(filename, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if (!options)
      options = {};
    if (!callback)
      return asPromise(fetch, this, filename, options);
    if (!options.xhr && fs && fs.readFile)
      return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
        return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
      });
    return fetch.xhr(filename, options, callback);
  }
  fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function fetchOnReadyStateChange() {
      if (xhr.readyState !== 4)
        return;
      if (xhr.status !== 0 && xhr.status !== 200)
        return callback(Error("status " + xhr.status));
      if (options.binary) {
        var buffer = xhr.response;
        if (!buffer) {
          buffer = [];
          for (var i = 0;i < xhr.responseText.length; ++i)
            buffer.push(xhr.responseText.charCodeAt(i) & 255);
        }
        return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
      }
      return callback(null, xhr.responseText);
    };
    if (options.binary) {
      if ("overrideMimeType" in xhr)
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
      xhr.responseType = "arraybuffer";
    }
    xhr.open("GET", filename);
    xhr.send();
  };
});

// node_modules/.bun/@protobufjs+path@1.1.2/node_modules/@protobufjs/path/index.js
var require_path = __commonJS((exports) => {
  var path = exports;
  var isAbsolute = path.isAbsolute = function isAbsolute2(path2) {
    return /^(?:\/|\w+:)/.test(path2);
  };
  var normalize = path.normalize = function normalize2(path2) {
    path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
    if (absolute)
      prefix = parts.shift() + "/";
    for (var i = 0;i < parts.length; ) {
      if (parts[i] === "..") {
        if (i > 0 && parts[i - 1] !== "..")
          parts.splice(--i, 2);
        else if (absolute)
          parts.splice(i, 1);
        else
          ++i;
      } else if (parts[i] === ".")
        parts.splice(i, 1);
      else
        ++i;
    }
    return prefix + parts.join("/");
  };
  path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized)
      includePath = normalize(includePath);
    if (isAbsolute(includePath))
      return includePath;
    if (!alreadyNormalized)
      originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/namespace.js
var require_namespace = __commonJS((exports, module) => {
  module.exports = Namespace;
  var ReflectionObject = require_object();
  ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
  var Field = require_field();
  var util = require_util();
  var OneOf = require_oneof();
  var Type;
  var Service;
  var Enum;
  Namespace.fromJSON = function fromJSON(name, json) {
    return new Namespace(name, json.options).addJSON(json.nested);
  };
  function arrayToJSON(array, toJSONOptions) {
    if (!(array && array.length))
      return;
    var obj = {};
    for (var i = 0;i < array.length; ++i)
      obj[array[i].name] = array[i].toJSON(toJSONOptions);
    return obj;
  }
  Namespace.arrayToJSON = arrayToJSON;
  Namespace.isReservedId = function isReservedId(reserved, id) {
    if (reserved) {
      for (var i = 0;i < reserved.length; ++i)
        if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
          return true;
    }
    return false;
  };
  Namespace.isReservedName = function isReservedName(reserved, name) {
    if (reserved) {
      for (var i = 0;i < reserved.length; ++i)
        if (reserved[i] === name)
          return true;
    }
    return false;
  };
  function Namespace(name, options) {
    ReflectionObject.call(this, name, options);
    this.nested = undefined;
    this._nestedArray = null;
    this._lookupCache = {};
    this._needsRecursiveFeatureResolution = true;
    this._needsRecursiveResolve = true;
  }
  function clearCache(namespace) {
    namespace._nestedArray = null;
    namespace._lookupCache = {};
    var parent = namespace;
    while (parent = parent.parent) {
      parent._lookupCache = {};
    }
    return namespace;
  }
  Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
      return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
    }
  });
  Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
    return util.toObject([
      "options",
      this.options,
      "nested",
      arrayToJSON(this.nestedArray, toJSONOptions)
    ]);
  };
  Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    if (nestedJson) {
      for (var names = Object.keys(nestedJson), i = 0, nested;i < names.length; ++i) {
        nested = nestedJson[names[i]];
        ns.add((nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
      }
    }
    return this;
  };
  Namespace.prototype.get = function get(name) {
    return this.nested && this.nested[name] || null;
  };
  Namespace.prototype.getEnum = function getEnum(name) {
    if (this.nested && this.nested[name] instanceof Enum)
      return this.nested[name].values;
    throw Error("no such enum: " + name);
  };
  Namespace.prototype.add = function add(object) {
    if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
      throw TypeError("object must be a valid nested object");
    if (!this.nested)
      this.nested = {};
    else {
      var prev = this.get(object.name);
      if (prev) {
        if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
          var nested = prev.nestedArray;
          for (var i = 0;i < nested.length; ++i)
            object.add(nested[i]);
          this.remove(prev);
          if (!this.nested)
            this.nested = {};
          object.setOptions(prev.options, true);
        } else
          throw Error("duplicate name '" + object.name + "' in " + this);
      }
    }
    this.nested[object.name] = object;
    if (!(this instanceof Type || this instanceof Service || this instanceof Enum || this instanceof Field)) {
      if (!object._edition) {
        object._edition = object._defaultEdition;
      }
    }
    this._needsRecursiveFeatureResolution = true;
    this._needsRecursiveResolve = true;
    var parent = this;
    while (parent = parent.parent) {
      parent._needsRecursiveFeatureResolution = true;
      parent._needsRecursiveResolve = true;
    }
    object.onAdd(this);
    return clearCache(this);
  };
  Namespace.prototype.remove = function remove(object) {
    if (!(object instanceof ReflectionObject))
      throw TypeError("object must be a ReflectionObject");
    if (object.parent !== this)
      throw Error(object + " is not a member of " + this);
    delete this.nested[object.name];
    if (!Object.keys(this.nested).length)
      this.nested = undefined;
    object.onRemove(this);
    return clearCache(this);
  };
  Namespace.prototype.define = function define2(path, json) {
    if (util.isString(path))
      path = path.split(".");
    else if (!Array.isArray(path))
      throw TypeError("illegal path");
    if (path && path.length && path[0] === "")
      throw Error("path must be relative");
    var ptr = this;
    while (path.length > 0) {
      var part = path.shift();
      if (ptr.nested && ptr.nested[part]) {
        ptr = ptr.nested[part];
        if (!(ptr instanceof Namespace))
          throw Error("path conflicts with non-namespace objects");
      } else
        ptr.add(ptr = new Namespace(part));
    }
    if (json)
      ptr.addJSON(json);
    return ptr;
  };
  Namespace.prototype.resolveAll = function resolveAll() {
    if (!this._needsRecursiveResolve)
      return this;
    this._resolveFeaturesRecursive(this._edition);
    var nested = this.nestedArray, i = 0;
    this.resolve();
    while (i < nested.length)
      if (nested[i] instanceof Namespace)
        nested[i++].resolveAll();
      else
        nested[i++].resolve();
    this._needsRecursiveResolve = false;
    return this;
  };
  Namespace.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
    if (!this._needsRecursiveFeatureResolution)
      return this;
    this._needsRecursiveFeatureResolution = false;
    edition = this._edition || edition;
    ReflectionObject.prototype._resolveFeaturesRecursive.call(this, edition);
    this.nestedArray.forEach((nested) => {
      nested._resolveFeaturesRecursive(edition);
    });
    return this;
  };
  Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
    if (typeof filterTypes === "boolean") {
      parentAlreadyChecked = filterTypes;
      filterTypes = undefined;
    } else if (filterTypes && !Array.isArray(filterTypes))
      filterTypes = [filterTypes];
    if (util.isString(path) && path.length) {
      if (path === ".")
        return this.root;
      path = path.split(".");
    } else if (!path.length)
      return this;
    var flatPath = path.join(".");
    if (path[0] === "")
      return this.root.lookup(path.slice(1), filterTypes);
    var found = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + flatPath];
    if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
      return found;
    }
    found = this._lookupImpl(path, flatPath);
    if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
      return found;
    }
    if (parentAlreadyChecked)
      return null;
    var current = this;
    while (current.parent) {
      found = current.parent._lookupImpl(path, flatPath);
      if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
        return found;
      }
      current = current.parent;
    }
    return null;
  };
  Namespace.prototype._lookupImpl = function lookup(path, flatPath) {
    if (Object.prototype.hasOwnProperty.call(this._lookupCache, flatPath)) {
      return this._lookupCache[flatPath];
    }
    var found = this.get(path[0]);
    var exact = null;
    if (found) {
      if (path.length === 1) {
        exact = found;
      } else if (found instanceof Namespace) {
        path = path.slice(1);
        exact = found._lookupImpl(path, path.join("."));
      }
    } else {
      for (var i = 0;i < this.nestedArray.length; ++i)
        if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i]._lookupImpl(path, flatPath)))
          exact = found;
    }
    this._lookupCache[flatPath] = exact;
    return exact;
  };
  Namespace.prototype.lookupType = function lookupType(path) {
    var found = this.lookup(path, [Type]);
    if (!found)
      throw Error("no such type: " + path);
    return found;
  };
  Namespace.prototype.lookupEnum = function lookupEnum(path) {
    var found = this.lookup(path, [Enum]);
    if (!found)
      throw Error("no such Enum '" + path + "' in " + this);
    return found;
  };
  Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
    var found = this.lookup(path, [Type, Enum]);
    if (!found)
      throw Error("no such Type or Enum '" + path + "' in " + this);
    return found;
  };
  Namespace.prototype.lookupService = function lookupService(path) {
    var found = this.lookup(path, [Service]);
    if (!found)
      throw Error("no such Service '" + path + "' in " + this);
    return found;
  };
  Namespace._configure = function(Type_, Service_, Enum_) {
    Type = Type_;
    Service = Service_;
    Enum = Enum_;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/mapfield.js
var require_mapfield = __commonJS((exports, module) => {
  module.exports = MapField;
  var Field = require_field();
  ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
  var types = require_types();
  var util = require_util();
  function MapField(name, id, keyType, type, options, comment) {
    Field.call(this, name, id, type, undefined, undefined, options, comment);
    if (!util.isString(keyType))
      throw TypeError("keyType must be a string");
    this.keyType = keyType;
    this.resolvedKeyType = null;
    this.map = true;
  }
  MapField.fromJSON = function fromJSON(name, json) {
    return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
  };
  MapField.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "keyType",
      this.keyType,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  MapField.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if (types.mapKey[this.keyType] === undefined)
      throw Error("invalid key type: " + this.keyType);
    return Field.prototype.resolve.call(this);
  };
  MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
    if (typeof fieldValueType === "function")
      fieldValueType = util.decorateType(fieldValueType).name;
    else if (fieldValueType && typeof fieldValueType === "object")
      fieldValueType = util.decorateEnum(fieldValueType).name;
    return function mapFieldDecorator(prototype, fieldName) {
      util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
    };
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/method.js
var require_method = __commonJS((exports, module) => {
  module.exports = Method;
  var ReflectionObject = require_object();
  ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
  var util = require_util();
  function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
    if (util.isObject(requestStream)) {
      options = requestStream;
      requestStream = responseStream = undefined;
    } else if (util.isObject(responseStream)) {
      options = responseStream;
      responseStream = undefined;
    }
    if (!(type === undefined || util.isString(type)))
      throw TypeError("type must be a string");
    if (!util.isString(requestType))
      throw TypeError("requestType must be a string");
    if (!util.isString(responseType))
      throw TypeError("responseType must be a string");
    ReflectionObject.call(this, name, options);
    this.type = type || "rpc";
    this.requestType = requestType;
    this.requestStream = requestStream ? true : undefined;
    this.responseType = responseType;
    this.responseStream = responseStream ? true : undefined;
    this.resolvedRequestType = null;
    this.resolvedResponseType = null;
    this.comment = comment;
    this.parsedOptions = parsedOptions;
  }
  Method.fromJSON = function fromJSON(name, json) {
    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
  };
  Method.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "type",
      this.type !== "rpc" && this.type || undefined,
      "requestType",
      this.requestType,
      "requestStream",
      this.requestStream,
      "responseType",
      this.responseType,
      "responseStream",
      this.responseStream,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : undefined,
      "parsedOptions",
      this.parsedOptions
    ]);
  };
  Method.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);
    return ReflectionObject.prototype.resolve.call(this);
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/service.js
var require_service2 = __commonJS((exports, module) => {
  module.exports = Service;
  var Namespace = require_namespace();
  ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
  var Method = require_method();
  var util = require_util();
  var rpc = require_rpc();
  function Service(name, options) {
    Namespace.call(this, name, options);
    this.methods = {};
    this._methodsArray = null;
  }
  Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    if (json.methods)
      for (var names = Object.keys(json.methods), i = 0;i < names.length; ++i)
        service.add(Method.fromJSON(names[i], json.methods[names[i]]));
    if (json.nested)
      service.addJSON(json.nested);
    if (json.edition)
      service._edition = json.edition;
    service.comment = json.comment;
    service._defaultEdition = "proto3";
    return service;
  };
  Service.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "edition",
      this._editionToJSON(),
      "options",
      inherited && inherited.options || undefined,
      "methods",
      Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || {},
      "nested",
      inherited && inherited.nested || undefined,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
      return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
  });
  function clearCache(service) {
    service._methodsArray = null;
    return service;
  }
  Service.prototype.get = function get(name) {
    return this.methods[name] || Namespace.prototype.get.call(this, name);
  };
  Service.prototype.resolveAll = function resolveAll() {
    if (!this._needsRecursiveResolve)
      return this;
    Namespace.prototype.resolve.call(this);
    var methods = this.methodsArray;
    for (var i = 0;i < methods.length; ++i)
      methods[i].resolve();
    return this;
  };
  Service.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
    if (!this._needsRecursiveFeatureResolution)
      return this;
    edition = this._edition || edition;
    Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
    this.methodsArray.forEach((method) => {
      method._resolveFeaturesRecursive(edition);
    });
    return this;
  };
  Service.prototype.add = function add(object) {
    if (this.get(object.name))
      throw Error("duplicate name '" + object.name + "' in " + this);
    if (object instanceof Method) {
      this.methods[object.name] = object;
      object.parent = this;
      return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
  };
  Service.prototype.remove = function remove(object) {
    if (object instanceof Method) {
      if (this.methods[object.name] !== object)
        throw Error(object + " is not a member of " + this);
      delete this.methods[object.name];
      object.parent = null;
      return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
  };
  Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i = 0, method;i < this.methodsArray.length; ++i) {
      var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
      rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
        m: method,
        q: method.resolvedRequestType.ctor,
        s: method.resolvedResponseType.ctor
      });
    }
    return rpcService;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/message.js
var require_message = __commonJS((exports, module) => {
  module.exports = Message;
  var util = require_minimal();
  function Message(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i) {
        var key = keys[i];
        if (key === "__proto__")
          continue;
        this[key] = properties[key];
      }
  }
  Message.create = function create(properties) {
    return this.$type.create(properties);
  };
  Message.encode = function encode(message, writer) {
    return this.$type.encode(message, writer);
  };
  Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.$type.encodeDelimited(message, writer);
  };
  Message.decode = function decode(reader) {
    return this.$type.decode(reader);
  };
  Message.decodeDelimited = function decodeDelimited(reader) {
    return this.$type.decodeDelimited(reader);
  };
  Message.verify = function verify(message) {
    return this.$type.verify(message);
  };
  Message.fromObject = function fromObject(object) {
    return this.$type.fromObject(object);
  };
  Message.toObject = function toObject(message, options) {
    return this.$type.toObject(message, options);
  };
  Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util.toJSONOptions);
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/decoder.js
var require_decoder = __commonJS((exports, module) => {
  module.exports = decoder;
  var Enum = require_enum();
  var types = require_types();
  var util = require_util();
  function missing(field) {
    return "missing required '" + field.name + "'";
  }
  function decoder(mtype) {
    var gen = util.codegen(["r", "l", "e"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
      return field2.map;
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){");
    var i = 0;
    for (;i < mtype.fieldsArray.length; ++i) {
      var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
      gen("case %i: {", field.id);
      if (field.map) {
        gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
        if (types.defaults[field.keyType] !== undefined)
          gen("k=%j", types.defaults[field.keyType]);
        else
          gen("k=null");
        if (types.defaults[type] !== undefined)
          gen("value=%j", types.defaults[type]);
        else
          gen("value=null");
        gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
        if (types.basic[type] === undefined)
          gen("value=types[%i].decode(r,r.uint32())", i);
        else
          gen("value=r.%s()", type);
        gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
        if (types.long[field.keyType] !== undefined)
          gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
        else
          gen("%s[k]=value", ref);
      } else if (field.repeated) {
        gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
        if (types.packed[type] !== undefined)
          gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
        if (types.basic[type] === undefined)
          gen(field.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4)))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
        else
          gen("%s.push(r.%s())", ref, type);
      } else if (types.basic[type] === undefined)
        gen(field.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4))" : "%s=types[%i].decode(r,r.uint32())", ref, i);
      else
        gen("%s=r.%s()", ref, type);
      gen("break")("}");
    }
    gen("default:")("r.skipType(t&7)")("break")("}")("}");
    for (i = 0;i < mtype._fieldsArray.length; ++i) {
      var rfield = mtype._fieldsArray[i];
      if (rfield.required)
        gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }
    return gen("return m");
  }
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/verifier.js
var require_verifier = __commonJS((exports, module) => {
  module.exports = verifier;
  var Enum = require_enum();
  var util = require_util();
  function invalid(field, expected) {
    return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
  }
  function genVerifyValue(gen, field, fieldIndex, ref) {
    if (field.resolvedType) {
      if (field.resolvedType instanceof Enum) {
        gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
        for (var keys = Object.keys(field.resolvedType.values), j = 0;j < keys.length; ++j)
          gen("case %i:", field.resolvedType.values[keys[j]]);
        gen("break")("}");
      } else {
        gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
      }
    } else {
      switch (field.type) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
          break;
        case "float":
        case "double":
          gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
          break;
        case "bool":
          gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
          break;
        case "string":
          gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
          break;
        case "bytes":
          gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
          break;
      }
    }
    return gen;
  }
  function genVerifyKey(gen, field, ref) {
    switch (field.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
        break;
      case "bool":
        gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
        break;
    }
    return gen;
  }
  function verifier(mtype) {
    var gen = util.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
    var oneofs = mtype.oneofsArray, seenFirstField = {};
    if (oneofs.length)
      gen("var p={}");
    for (var i = 0;i < mtype.fieldsArray.length; ++i) {
      var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
      if (field.optional)
        gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
      if (field.map) {
        gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
        genVerifyKey(gen, field, "k[i]");
        genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
      } else if (field.repeated) {
        gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
        genVerifyValue(gen, field, i, ref + "[i]")("}");
      } else {
        if (field.partOf) {
          var oneofProp = util.safeProp(field.partOf.name);
          if (seenFirstField[field.partOf.name] === 1)
            gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
          seenFirstField[field.partOf.name] = 1;
          gen("p%s=1", oneofProp);
        }
        genVerifyValue(gen, field, i, ref);
      }
      if (field.optional)
        gen("}");
    }
    return gen("return null");
  }
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/converter.js
var require_converter = __commonJS((exports) => {
  var converter = exports;
  var Enum = require_enum();
  var util = require_util();
  function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
    var defaultAlreadyEmitted = false;
    if (field.resolvedType) {
      if (field.resolvedType instanceof Enum) {
        gen("switch(d%s){", prop);
        for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0;i < keys.length; ++i) {
          if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
            gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
            if (!field.repeated)
              gen("break");
            defaultAlreadyEmitted = true;
          }
          gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
        }
        gen("}");
      } else
        gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
    } else {
      var isUnsigned = false;
      switch (field.type) {
        case "double":
        case "float":
          gen("m%s=Number(d%s)", prop, prop);
          break;
        case "uint32":
        case "fixed32":
          gen("m%s=d%s>>>0", prop, prop);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          gen("m%s=d%s|0", prop, prop);
          break;
        case "uint64":
          isUnsigned = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
          break;
        case "bytes":
          gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
          break;
        case "string":
          gen("m%s=String(d%s)", prop, prop);
          break;
        case "bool":
          gen("m%s=Boolean(d%s)", prop, prop);
          break;
      }
    }
    return gen;
  }
  converter.fromObject = function fromObject(mtype) {
    var fields = mtype.fieldsArray;
    var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
    if (!fields.length)
      return gen("return new this.ctor");
    gen("var m=new this.ctor");
    for (var i = 0;i < fields.length; ++i) {
      var field = fields[i].resolve(), prop = util.safeProp(field.name);
      if (field.map) {
        gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
        genValuePartial_fromObject(gen, field, i, prop + "[ks[i]]")("}")("}");
      } else if (field.repeated) {
        gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
        genValuePartial_fromObject(gen, field, i, prop + "[i]")("}")("}");
      } else {
        if (!(field.resolvedType instanceof Enum))
          gen("if(d%s!=null){", prop);
        genValuePartial_fromObject(gen, field, i, prop);
        if (!(field.resolvedType instanceof Enum))
          gen("}");
      }
    }
    return gen("return m");
  };
  function genValuePartial_toObject(gen, field, fieldIndex, prop) {
    if (field.resolvedType) {
      if (field.resolvedType instanceof Enum)
        gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
      else
        gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
    } else {
      var isUnsigned = false;
      switch (field.type) {
        case "double":
        case "float":
          gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
          break;
        case "uint64":
          isUnsigned = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
          break;
        case "bytes":
          gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
          break;
        default:
          gen("d%s=m%s", prop, prop);
          break;
      }
    }
    return gen;
  }
  converter.toObject = function toObject(mtype) {
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    if (!fields.length)
      return util.codegen()("return {}");
    var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
    var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
    for (;i < fields.length; ++i)
      if (!fields[i].partOf)
        (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
    if (repeatedFields.length) {
      gen("if(o.arrays||o.defaults){");
      for (i = 0;i < repeatedFields.length; ++i)
        gen("d%s=[]", util.safeProp(repeatedFields[i].name));
      gen("}");
    }
    if (mapFields.length) {
      gen("if(o.objects||o.defaults){");
      for (i = 0;i < mapFields.length; ++i)
        gen("d%s={}", util.safeProp(mapFields[i].name));
      gen("}");
    }
    if (normalFields.length) {
      gen("if(o.defaults){");
      for (i = 0;i < normalFields.length; ++i) {
        var field = normalFields[i], prop = util.safeProp(field.name);
        if (field.resolvedType instanceof Enum)
          gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
        else if (field.long)
          gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
        else if (field.bytes) {
          var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
          gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
        } else
          gen("d%s=%j", prop, field.typeDefault);
      }
      gen("}");
    }
    var hasKs2 = false;
    for (i = 0;i < fields.length; ++i) {
      var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
      if (field.map) {
        if (!hasKs2) {
          hasKs2 = true;
          gen("var ks2");
        }
        gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
        genValuePartial_toObject(gen, field, index, prop + "[ks2[j]]")("}");
      } else if (field.repeated) {
        gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
        genValuePartial_toObject(gen, field, index, prop + "[j]")("}");
      } else {
        gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
        genValuePartial_toObject(gen, field, index, prop);
        if (field.partOf)
          gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
      }
      gen("}");
    }
    return gen("return d");
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/wrappers.js
var require_wrappers = __commonJS((exports) => {
  var wrappers = exports;
  var Message = require_message();
  wrappers[".google.protobuf.Any"] = {
    fromObject: function(object) {
      if (object && object["@type"]) {
        var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
        var type = this.lookup(name);
        if (type) {
          var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
          if (type_url.indexOf("/") === -1) {
            type_url = "/" + type_url;
          }
          return this.create({
            type_url,
            value: type.encode(type.fromObject(object)).finish()
          });
        }
      }
      return this.fromObject(object);
    },
    toObject: function(message, options) {
      var googleApi = "type.googleapis.com/";
      var prefix = "";
      var name = "";
      if (options && options.json && message.type_url && message.value) {
        name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
        prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
        var type = this.lookup(name);
        if (type)
          message = type.decode(message.value);
      }
      if (!(message instanceof this.ctor) && message instanceof Message) {
        var object = message.$type.toObject(message, options);
        var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
        if (prefix === "") {
          prefix = googleApi;
        }
        name = prefix + messageName;
        object["@type"] = name;
        return object;
      }
      return this.toObject(message, options);
    }
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/type.js
var require_type = __commonJS((exports, module) => {
  module.exports = Type;
  var Namespace = require_namespace();
  ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
  var Enum = require_enum();
  var OneOf = require_oneof();
  var Field = require_field();
  var MapField = require_mapfield();
  var Service = require_service2();
  var Message = require_message();
  var Reader = require_reader();
  var Writer = require_writer();
  var util = require_util();
  var encoder = require_encoder();
  var decoder = require_decoder();
  var verifier = require_verifier();
  var converter = require_converter();
  var wrappers = require_wrappers();
  function Type(name, options) {
    name = name.replace(/\W/g, "");
    Namespace.call(this, name, options);
    this.fields = {};
    this.oneofs = undefined;
    this.extensions = undefined;
    this.reserved = undefined;
    this.group = undefined;
    this._fieldsById = null;
    this._fieldsArray = null;
    this._oneofsArray = null;
    this._ctor = null;
  }
  Object.defineProperties(Type.prototype, {
    fieldsById: {
      get: function() {
        if (this._fieldsById)
          return this._fieldsById;
        this._fieldsById = {};
        for (var names = Object.keys(this.fields), i = 0;i < names.length; ++i) {
          var field = this.fields[names[i]], id = field.id;
          if (this._fieldsById[id])
            throw Error("duplicate id " + id + " in " + this);
          this._fieldsById[id] = field;
        }
        return this._fieldsById;
      }
    },
    fieldsArray: {
      get: function() {
        return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
      }
    },
    oneofsArray: {
      get: function() {
        return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
      }
    },
    ctor: {
      get: function() {
        return this._ctor || (this.ctor = Type.generateConstructor(this)());
      },
      set: function(ctor) {
        var prototype = ctor.prototype;
        if (!(prototype instanceof Message)) {
          (ctor.prototype = new Message).constructor = ctor;
          util.merge(ctor.prototype, prototype);
        }
        ctor.$type = ctor.prototype.$type = this;
        util.merge(ctor, Message, true);
        this._ctor = ctor;
        var i = 0;
        for (;i < this.fieldsArray.length; ++i)
          this._fieldsArray[i].resolve();
        var ctorProperties = {};
        for (i = 0;i < this.oneofsArray.length; ++i)
          ctorProperties[this._oneofsArray[i].resolve().name] = {
            get: util.oneOfGetter(this._oneofsArray[i].oneof),
            set: util.oneOfSetter(this._oneofsArray[i].oneof)
          };
        if (i)
          Object.defineProperties(ctor.prototype, ctorProperties);
      }
    }
  });
  Type.generateConstructor = function generateConstructor(mtype) {
    var gen = util.codegen(["p"], mtype.name);
    for (var i = 0, field;i < mtype.fieldsArray.length; ++i)
      if ((field = mtype._fieldsArray[i]).map)
        gen("this%s={}", util.safeProp(field.name));
      else if (field.repeated)
        gen("this%s=[]", util.safeProp(field.name));
    return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  function clearCache(type) {
    type._fieldsById = type._fieldsArray = type._oneofsArray = null;
    delete type.encode;
    delete type.decode;
    delete type.verify;
    return type;
  }
  Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    var names = Object.keys(json.fields), i = 0;
    for (;i < names.length; ++i)
      type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
    if (json.oneofs)
      for (names = Object.keys(json.oneofs), i = 0;i < names.length; ++i)
        type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
    if (json.nested)
      for (names = Object.keys(json.nested), i = 0;i < names.length; ++i) {
        var nested = json.nested[names[i]];
        type.add((nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
      }
    if (json.extensions && json.extensions.length)
      type.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
      type.reserved = json.reserved;
    if (json.group)
      type.group = true;
    if (json.comment)
      type.comment = json.comment;
    if (json.edition)
      type._edition = json.edition;
    type._defaultEdition = "proto3";
    return type;
  };
  Type.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "edition",
      this._editionToJSON(),
      "options",
      inherited && inherited.options || undefined,
      "oneofs",
      Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
      "fields",
      Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
        return !obj.declaringField;
      }), toJSONOptions) || {},
      "extensions",
      this.extensions && this.extensions.length ? this.extensions : undefined,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : undefined,
      "group",
      this.group || undefined,
      "nested",
      inherited && inherited.nested || undefined,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  Type.prototype.resolveAll = function resolveAll() {
    if (!this._needsRecursiveResolve)
      return this;
    Namespace.prototype.resolveAll.call(this);
    var oneofs = this.oneofsArray;
    i = 0;
    while (i < oneofs.length)
      oneofs[i++].resolve();
    var fields = this.fieldsArray, i = 0;
    while (i < fields.length)
      fields[i++].resolve();
    return this;
  };
  Type.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
    if (!this._needsRecursiveFeatureResolution)
      return this;
    edition = this._edition || edition;
    Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
    this.oneofsArray.forEach((oneof) => {
      oneof._resolveFeatures(edition);
    });
    this.fieldsArray.forEach((field) => {
      field._resolveFeatures(edition);
    });
    return this;
  };
  Type.prototype.get = function get(name) {
    return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
  };
  Type.prototype.add = function add(object) {
    if (this.get(object.name))
      throw Error("duplicate name '" + object.name + "' in " + this);
    if (object instanceof Field && object.extend === undefined) {
      if (this._fieldsById ? this._fieldsById[object.id] : this.fieldsById[object.id])
        throw Error("duplicate id " + object.id + " in " + this);
      if (this.isReservedId(object.id))
        throw Error("id " + object.id + " is reserved in " + this);
      if (this.isReservedName(object.name))
        throw Error("name '" + object.name + "' is reserved in " + this);
      if (object.parent)
        object.parent.remove(object);
      this.fields[object.name] = object;
      object.message = this;
      object.onAdd(this);
      return clearCache(this);
    }
    if (object instanceof OneOf) {
      if (!this.oneofs)
        this.oneofs = {};
      this.oneofs[object.name] = object;
      object.onAdd(this);
      return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
  };
  Type.prototype.remove = function remove(object) {
    if (object instanceof Field && object.extend === undefined) {
      if (!this.fields || this.fields[object.name] !== object)
        throw Error(object + " is not a member of " + this);
      delete this.fields[object.name];
      object.parent = null;
      object.onRemove(this);
      return clearCache(this);
    }
    if (object instanceof OneOf) {
      if (!this.oneofs || this.oneofs[object.name] !== object)
        throw Error(object + " is not a member of " + this);
      delete this.oneofs[object.name];
      object.parent = null;
      object.onRemove(this);
      return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
  };
  Type.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
  };
  Type.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
  };
  Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
  };
  Type.prototype.setup = function setup() {
    var fullName = this.fullName, types = [];
    for (var i = 0;i < this.fieldsArray.length; ++i)
      types.push(this._fieldsArray[i].resolve().resolvedType);
    this.encode = encoder(this)({
      Writer,
      types,
      util
    });
    this.decode = decoder(this)({
      Reader,
      types,
      util
    });
    this.verify = verifier(this)({
      types,
      util
    });
    this.fromObject = converter.fromObject(this)({
      types,
      util
    });
    this.toObject = converter.toObject(this)({
      types,
      util
    });
    var wrapper = wrappers[fullName];
    if (wrapper) {
      var originalThis = Object.create(this);
      originalThis.fromObject = this.fromObject;
      this.fromObject = wrapper.fromObject.bind(originalThis);
      originalThis.toObject = this.toObject;
      this.toObject = wrapper.toObject.bind(originalThis);
    }
    return this;
  };
  Type.prototype.encode = function encode_setup(message, writer) {
    return this.setup().encode(message, writer);
  };
  Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
  };
  Type.prototype.decode = function decode_setup(reader, length) {
    return this.setup().decode(reader, length);
  };
  Type.prototype.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof Reader))
      reader = Reader.create(reader);
    return this.decode(reader, reader.uint32());
  };
  Type.prototype.verify = function verify_setup(message) {
    return this.setup().verify(message);
  };
  Type.prototype.fromObject = function fromObject(object) {
    return this.setup().fromObject(object);
  };
  Type.prototype.toObject = function toObject(message, options) {
    return this.setup().toObject(message, options);
  };
  Type.d = function decorateType(typeName) {
    return function typeDecorator(target) {
      util.decorateType(target, typeName);
    };
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/root.js
var require_root = __commonJS((exports, module) => {
  module.exports = Root;
  var Namespace = require_namespace();
  ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
  var Field = require_field();
  var Enum = require_enum();
  var OneOf = require_oneof();
  var util = require_util();
  var Type;
  var parse;
  var common;
  function Root(options) {
    Namespace.call(this, "", options);
    this.deferred = [];
    this.files = [];
    this._edition = "proto2";
    this._fullyQualifiedObjects = {};
  }
  Root.fromJSON = function fromJSON(json, root) {
    if (!root)
      root = new Root;
    if (json.options)
      root.setOptions(json.options);
    return root.addJSON(json.nested).resolveAll();
  };
  Root.prototype.resolvePath = util.path.resolve;
  Root.prototype.fetch = util.fetch;
  function SYNC() {}
  Root.prototype.load = function load(filename, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = undefined;
    }
    var self2 = this;
    if (!callback) {
      return util.asPromise(load, self2, filename, options);
    }
    var sync = callback === SYNC;
    function finish(err, root) {
      if (!callback) {
        return;
      }
      if (sync) {
        throw err;
      }
      if (root) {
        root.resolveAll();
      }
      var cb = callback;
      callback = null;
      cb(err, root);
    }
    function getBundledFileName(filename2) {
      var idx = filename2.lastIndexOf("google/protobuf/");
      if (idx > -1) {
        var altname = filename2.substring(idx);
        if (altname in common)
          return altname;
      }
      return null;
    }
    function process2(filename2, source) {
      try {
        if (util.isString(source) && source.charAt(0) === "{")
          source = JSON.parse(source);
        if (!util.isString(source))
          self2.setOptions(source.options).addJSON(source.nested);
        else {
          parse.filename = filename2;
          var parsed = parse(source, self2, options), resolved2, i2 = 0;
          if (parsed.imports) {
            for (;i2 < parsed.imports.length; ++i2)
              if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                fetch(resolved2);
          }
          if (parsed.weakImports) {
            for (i2 = 0;i2 < parsed.weakImports.length; ++i2)
              if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                fetch(resolved2, true);
          }
        }
      } catch (err) {
        finish(err);
      }
      if (!sync && !queued) {
        finish(null, self2);
      }
    }
    function fetch(filename2, weak) {
      filename2 = getBundledFileName(filename2) || filename2;
      if (self2.files.indexOf(filename2) > -1) {
        return;
      }
      self2.files.push(filename2);
      if (filename2 in common) {
        if (sync) {
          process2(filename2, common[filename2]);
        } else {
          ++queued;
          setTimeout(function() {
            --queued;
            process2(filename2, common[filename2]);
          });
        }
        return;
      }
      if (sync) {
        var source;
        try {
          source = util.fs.readFileSync(filename2).toString("utf8");
        } catch (err) {
          if (!weak)
            finish(err);
          return;
        }
        process2(filename2, source);
      } else {
        ++queued;
        self2.fetch(filename2, function(err, source2) {
          --queued;
          if (!callback) {
            return;
          }
          if (err) {
            if (!weak)
              finish(err);
            else if (!queued)
              finish(null, self2);
            return;
          }
          process2(filename2, source2);
        });
      }
    }
    var queued = 0;
    if (util.isString(filename)) {
      filename = [filename];
    }
    for (var i = 0, resolved;i < filename.length; ++i)
      if (resolved = self2.resolvePath("", filename[i]))
        fetch(resolved);
    if (sync) {
      self2.resolveAll();
      return self2;
    }
    if (!queued) {
      finish(null, self2);
    }
    return self2;
  };
  Root.prototype.loadSync = function loadSync(filename, options) {
    if (!util.isNode)
      throw Error("not supported");
    return this.load(filename, options, SYNC);
  };
  Root.prototype.resolveAll = function resolveAll() {
    if (!this._needsRecursiveResolve)
      return this;
    if (this.deferred.length)
      throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
        return "'extend " + field.extend + "' in " + field.parent.fullName;
      }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
  };
  var exposeRe = /^[A-Z]/;
  function tryHandleExtension(root, field) {
    var extendedType = field.parent.lookup(field.extend);
    if (extendedType) {
      var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
      if (extendedType.get(sisterField.name)) {
        return true;
      }
      sisterField.declaringField = field;
      field.extensionField = sisterField;
      extendedType.add(sisterField);
      return true;
    }
    return false;
  }
  Root.prototype._handleAdd = function _handleAdd(object) {
    if (object instanceof Field) {
      if (object.extend !== undefined && !object.extensionField) {
        if (!tryHandleExtension(this, object))
          this.deferred.push(object);
      }
    } else if (object instanceof Enum) {
      if (exposeRe.test(object.name))
        object.parent[object.name] = object.values;
    } else if (!(object instanceof OneOf)) {
      if (object instanceof Type)
        for (var i = 0;i < this.deferred.length; )
          if (tryHandleExtension(this, this.deferred[i]))
            this.deferred.splice(i, 1);
          else
            ++i;
      for (var j = 0;j < object.nestedArray.length; ++j)
        this._handleAdd(object._nestedArray[j]);
      if (exposeRe.test(object.name))
        object.parent[object.name] = object;
    }
    if (object instanceof Type || object instanceof Enum || object instanceof Field) {
      this._fullyQualifiedObjects[object.fullName] = object;
    }
  };
  Root.prototype._handleRemove = function _handleRemove(object) {
    if (object instanceof Field) {
      if (object.extend !== undefined) {
        if (object.extensionField) {
          object.extensionField.parent.remove(object.extensionField);
          object.extensionField = null;
        } else {
          var index = this.deferred.indexOf(object);
          if (index > -1)
            this.deferred.splice(index, 1);
        }
      }
    } else if (object instanceof Enum) {
      if (exposeRe.test(object.name))
        delete object.parent[object.name];
    } else if (object instanceof Namespace) {
      for (var i = 0;i < object.nestedArray.length; ++i)
        this._handleRemove(object._nestedArray[i]);
      if (exposeRe.test(object.name))
        delete object.parent[object.name];
    }
    delete this._fullyQualifiedObjects[object.fullName];
  };
  Root._configure = function(Type_, parse_, common_) {
    Type = Type_;
    parse = parse_;
    common = common_;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/util.js
var require_util = __commonJS((exports, module) => {
  var util = module.exports = require_minimal();
  var roots = require_roots();
  var Type;
  var Enum;
  util.codegen = require_codegen();
  util.fetch = require_fetch();
  util.path = require_path();
  util.fs = util.inquire("fs");
  util.toArray = function toArray(object) {
    if (object) {
      var keys = Object.keys(object), array = new Array(keys.length), index = 0;
      while (index < keys.length)
        array[index] = object[keys[index++]];
      return array;
    }
    return [];
  };
  util.toObject = function toObject(array) {
    var object = {}, index = 0;
    while (index < array.length) {
      var key = array[index++], val = array[index++];
      if (val !== undefined)
        object[key] = val;
    }
    return object;
  };
  var safePropBackslashRe = /\\/g;
  var safePropQuoteRe = /"/g;
  util.isReserved = function isReserved(name) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
  };
  util.safeProp = function safeProp(prop) {
    if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
      return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + '"]';
    return "." + prop;
  };
  util.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };
  var camelCaseRe = /_([a-z])/g;
  util.camelCase = function camelCase(str) {
    return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
      return $1.toUpperCase();
    });
  };
  util.compareFieldsById = function compareFieldsById(a, b) {
    return a.id - b.id;
  };
  util.decorateType = function decorateType(ctor, typeName) {
    if (ctor.$type) {
      if (typeName && ctor.$type.name !== typeName) {
        util.decorateRoot.remove(ctor.$type);
        ctor.$type.name = typeName;
        util.decorateRoot.add(ctor.$type);
      }
      return ctor.$type;
    }
    if (!Type)
      Type = require_type();
    var type = new Type(typeName || ctor.name);
    util.decorateRoot.add(type);
    type.ctor = ctor;
    Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
    Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
    return type;
  };
  var decorateEnumIndex = 0;
  util.decorateEnum = function decorateEnum(object) {
    if (object.$type)
      return object.$type;
    if (!Enum)
      Enum = require_enum();
    var enm = new Enum("Enum" + decorateEnumIndex++, object);
    util.decorateRoot.add(enm);
    Object.defineProperty(object, "$type", { value: enm, enumerable: false });
    return enm;
  };
  util.setProperty = function setProperty(dst, path, value, ifNotSet) {
    function setProp(dst2, path2, value2) {
      var part = path2.shift();
      if (part === "__proto__" || part === "prototype") {
        return dst2;
      }
      if (path2.length > 0) {
        dst2[part] = setProp(dst2[part] || {}, path2, value2);
      } else {
        var prevValue = dst2[part];
        if (prevValue && ifNotSet)
          return dst2;
        if (prevValue)
          value2 = [].concat(prevValue).concat(value2);
        dst2[part] = value2;
      }
      return dst2;
    }
    if (typeof dst !== "object")
      throw TypeError("dst must be an object");
    if (!path)
      throw TypeError("path must be specified");
    path = path.split(".");
    return setProp(dst, path, value);
  };
  Object.defineProperty(util, "decorateRoot", {
    get: function() {
      return roots["decorated"] || (roots["decorated"] = new (require_root()));
    }
  });
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/types.js
var require_types = __commonJS((exports) => {
  var types = exports;
  var util = require_util();
  var s = [
    "double",
    "float",
    "int32",
    "uint32",
    "sint32",
    "fixed32",
    "sfixed32",
    "int64",
    "uint64",
    "sint64",
    "fixed64",
    "sfixed64",
    "bool",
    "string",
    "bytes"
  ];
  function bake(values, offset) {
    var i = 0, o = {};
    offset |= 0;
    while (i < values.length)
      o[s[i + offset]] = values[i++];
    return o;
  }
  types.basic = bake([
    1,
    5,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    0,
    1,
    1,
    0,
    2,
    2
  ]);
  types.defaults = bake([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    false,
    "",
    util.emptyArray,
    null
  ]);
  types.long = bake([
    0,
    0,
    0,
    1,
    1
  ], 7);
  types.mapKey = bake([
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    0,
    1,
    1,
    0,
    2
  ], 2);
  types.packed = bake([
    1,
    5,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    0,
    1,
    1,
    0
  ]);
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/field.js
var require_field = __commonJS((exports, module) => {
  module.exports = Field;
  var ReflectionObject = require_object();
  ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
  var Enum = require_enum();
  var types = require_types();
  var util = require_util();
  var Type;
  var ruleRe = /^required|optional|repeated$/;
  Field.fromJSON = function fromJSON(name, json) {
    var field = new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
    if (json.edition)
      field._edition = json.edition;
    field._defaultEdition = "proto3";
    return field;
  };
  function Field(name, id, type, rule, extend, options, comment) {
    if (util.isObject(rule)) {
      comment = extend;
      options = rule;
      rule = extend = undefined;
    } else if (util.isObject(extend)) {
      comment = options;
      options = extend;
      extend = undefined;
    }
    ReflectionObject.call(this, name, options);
    if (!util.isInteger(id) || id < 0)
      throw TypeError("id must be a non-negative integer");
    if (!util.isString(type))
      throw TypeError("type must be a string");
    if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
      throw TypeError("rule must be a string rule");
    if (extend !== undefined && !util.isString(extend))
      throw TypeError("extend must be a string");
    if (rule === "proto3_optional") {
      rule = "optional";
    }
    this.rule = rule && rule !== "optional" ? rule : undefined;
    this.type = type;
    this.id = id;
    this.extend = extend || undefined;
    this.repeated = rule === "repeated";
    this.map = false;
    this.message = null;
    this.partOf = null;
    this.typeDefault = null;
    this.defaultValue = null;
    this.long = util.Long ? types.long[type] !== undefined : false;
    this.bytes = type === "bytes";
    this.resolvedType = null;
    this.extensionField = null;
    this.declaringField = null;
    this.comment = comment;
  }
  Object.defineProperty(Field.prototype, "required", {
    get: function() {
      return this._features.field_presence === "LEGACY_REQUIRED";
    }
  });
  Object.defineProperty(Field.prototype, "optional", {
    get: function() {
      return !this.required;
    }
  });
  Object.defineProperty(Field.prototype, "delimited", {
    get: function() {
      return this.resolvedType instanceof Type && this._features.message_encoding === "DELIMITED";
    }
  });
  Object.defineProperty(Field.prototype, "packed", {
    get: function() {
      return this._features.repeated_field_encoding === "PACKED";
    }
  });
  Object.defineProperty(Field.prototype, "hasPresence", {
    get: function() {
      if (this.repeated || this.map) {
        return false;
      }
      return this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT";
    }
  });
  Field.prototype.setOption = function setOption(name, value, ifNotSet) {
    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
  };
  Field.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "edition",
      this._editionToJSON(),
      "rule",
      this.rule !== "optional" && this.rule || undefined,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  Field.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if ((this.typeDefault = types.defaults[this.type]) === undefined) {
      this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
      if (this.resolvedType instanceof Type)
        this.typeDefault = null;
      else
        this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    } else if (this.options && this.options.proto3_optional) {
      this.typeDefault = null;
    }
    if (this.options && this.options["default"] != null) {
      this.typeDefault = this.options["default"];
      if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
        this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
    if (this.options) {
      if (this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
        delete this.options.packed;
      if (!Object.keys(this.options).length)
        this.options = undefined;
    }
    if (this.long) {
      this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
      if (Object.freeze)
        Object.freeze(this.typeDefault);
    } else if (this.bytes && typeof this.typeDefault === "string") {
      var buf;
      if (util.base64.test(this.typeDefault))
        util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
      else
        util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
      this.typeDefault = buf;
    }
    if (this.map)
      this.defaultValue = util.emptyObject;
    else if (this.repeated)
      this.defaultValue = util.emptyArray;
    else
      this.defaultValue = this.typeDefault;
    if (this.parent instanceof Type)
      this.parent.ctor.prototype[this.name] = this.defaultValue;
    return ReflectionObject.prototype.resolve.call(this);
  };
  Field.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures(edition) {
    if (edition !== "proto2" && edition !== "proto3") {
      return {};
    }
    var features = {};
    if (this.rule === "required") {
      features.field_presence = "LEGACY_REQUIRED";
    }
    if (this.parent && types.defaults[this.type] === undefined) {
      var type = this.parent.get(this.type.split(".").pop());
      if (type && type instanceof Type && type.group) {
        features.message_encoding = "DELIMITED";
      }
    }
    if (this.getOption("packed") === true) {
      features.repeated_field_encoding = "PACKED";
    } else if (this.getOption("packed") === false) {
      features.repeated_field_encoding = "EXPANDED";
    }
    return features;
  };
  Field.prototype._resolveFeatures = function _resolveFeatures(edition) {
    return ReflectionObject.prototype._resolveFeatures.call(this, this._edition || edition);
  };
  Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
    if (typeof fieldType === "function")
      fieldType = util.decorateType(fieldType).name;
    else if (fieldType && typeof fieldType === "object")
      fieldType = util.decorateEnum(fieldType).name;
    return function fieldDecorator(prototype, fieldName) {
      util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { default: defaultValue }));
    };
  };
  Field._configure = function configure(Type_) {
    Type = Type_;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/oneof.js
var require_oneof = __commonJS((exports, module) => {
  module.exports = OneOf;
  var ReflectionObject = require_object();
  ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
  var Field = require_field();
  var util = require_util();
  function OneOf(name, fieldNames, options, comment) {
    if (!Array.isArray(fieldNames)) {
      options = fieldNames;
      fieldNames = undefined;
    }
    ReflectionObject.call(this, name, options);
    if (!(fieldNames === undefined || Array.isArray(fieldNames)))
      throw TypeError("fieldNames must be an Array");
    this.oneof = fieldNames || [];
    this.fieldsArray = [];
    this.comment = comment;
  }
  OneOf.fromJSON = function fromJSON(name, json) {
    return new OneOf(name, json.oneof, json.options, json.comment);
  };
  OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "options",
      this.options,
      "oneof",
      this.oneof,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  function addFieldsToParent(oneof) {
    if (oneof.parent) {
      for (var i = 0;i < oneof.fieldsArray.length; ++i)
        if (!oneof.fieldsArray[i].parent)
          oneof.parent.add(oneof.fieldsArray[i]);
    }
  }
  OneOf.prototype.add = function add(field) {
    if (!(field instanceof Field))
      throw TypeError("field must be a Field");
    if (field.parent && field.parent !== this.parent)
      field.parent.remove(field);
    this.oneof.push(field.name);
    this.fieldsArray.push(field);
    field.partOf = this;
    addFieldsToParent(this);
    return this;
  };
  OneOf.prototype.remove = function remove(field) {
    if (!(field instanceof Field))
      throw TypeError("field must be a Field");
    var index = this.fieldsArray.indexOf(field);
    if (index < 0)
      throw Error(field + " is not a member of " + this);
    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field.name);
    if (index > -1)
      this.oneof.splice(index, 1);
    field.partOf = null;
    return this;
  };
  OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self2 = this;
    for (var i = 0;i < this.oneof.length; ++i) {
      var field = parent.get(this.oneof[i]);
      if (field && !field.partOf) {
        field.partOf = self2;
        self2.fieldsArray.push(field);
      }
    }
    addFieldsToParent(this);
  };
  OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i = 0, field;i < this.fieldsArray.length; ++i)
      if ((field = this.fieldsArray[i]).parent)
        field.parent.remove(field);
    ReflectionObject.prototype.onRemove.call(this, parent);
  };
  Object.defineProperty(OneOf.prototype, "isProto3Optional", {
    get: function() {
      if (this.fieldsArray == null || this.fieldsArray.length !== 1) {
        return false;
      }
      var field = this.fieldsArray[0];
      return field.options != null && field.options["proto3_optional"] === true;
    }
  });
  OneOf.d = function decorateOneOf() {
    var fieldNames = new Array(arguments.length), index = 0;
    while (index < arguments.length)
      fieldNames[index] = arguments[index++];
    return function oneOfDecorator(prototype, oneofName) {
      util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
      Object.defineProperty(prototype, oneofName, {
        get: util.oneOfGetter(fieldNames),
        set: util.oneOfSetter(fieldNames)
      });
    };
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/object.js
var require_object = __commonJS((exports, module) => {
  module.exports = ReflectionObject;
  ReflectionObject.className = "ReflectionObject";
  var OneOf = require_oneof();
  var util = require_util();
  var Root;
  var editions2023Defaults = { enum_type: "OPEN", field_presence: "EXPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
  var proto2Defaults = { enum_type: "CLOSED", field_presence: "EXPLICIT", json_format: "LEGACY_BEST_EFFORT", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "EXPANDED", utf8_validation: "NONE" };
  var proto3Defaults = { enum_type: "OPEN", field_presence: "IMPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
  function ReflectionObject(name, options) {
    if (!util.isString(name))
      throw TypeError("name must be a string");
    if (options && !util.isObject(options))
      throw TypeError("options must be an object");
    this.options = options;
    this.parsedOptions = null;
    this.name = name;
    this._edition = null;
    this._defaultEdition = "proto2";
    this._features = {};
    this._featuresResolved = false;
    this.parent = null;
    this.resolved = false;
    this.comment = null;
    this.filename = null;
  }
  Object.defineProperties(ReflectionObject.prototype, {
    root: {
      get: function() {
        var ptr = this;
        while (ptr.parent !== null)
          ptr = ptr.parent;
        return ptr;
      }
    },
    fullName: {
      get: function() {
        var path = [this.name], ptr = this.parent;
        while (ptr) {
          path.unshift(ptr.name);
          ptr = ptr.parent;
        }
        return path.join(".");
      }
    }
  });
  ReflectionObject.prototype.toJSON = function toJSON() {
    throw Error();
  };
  ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
      this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root = parent.root;
    if (root instanceof Root)
      root._handleAdd(this);
  };
  ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root = parent.root;
    if (root instanceof Root)
      root._handleRemove(this);
    this.parent = null;
    this.resolved = false;
  };
  ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if (this.root instanceof Root)
      this.resolved = true;
    return this;
  };
  ReflectionObject.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
    return this._resolveFeatures(this._edition || edition);
  };
  ReflectionObject.prototype._resolveFeatures = function _resolveFeatures(edition) {
    if (this._featuresResolved) {
      return;
    }
    var defaults = {};
    if (!edition) {
      throw new Error("Unknown edition for " + this.fullName);
    }
    var protoFeatures = Object.assign(this.options ? Object.assign({}, this.options.features) : {}, this._inferLegacyProtoFeatures(edition));
    if (this._edition) {
      if (edition === "proto2") {
        defaults = Object.assign({}, proto2Defaults);
      } else if (edition === "proto3") {
        defaults = Object.assign({}, proto3Defaults);
      } else if (edition === "2023") {
        defaults = Object.assign({}, editions2023Defaults);
      } else {
        throw new Error("Unknown edition: " + edition);
      }
      this._features = Object.assign(defaults, protoFeatures || {});
      this._featuresResolved = true;
      return;
    }
    if (this.partOf instanceof OneOf) {
      var lexicalParentFeaturesCopy = Object.assign({}, this.partOf._features);
      this._features = Object.assign(lexicalParentFeaturesCopy, protoFeatures || {});
    } else if (this.declaringField) {} else if (this.parent) {
      var parentFeaturesCopy = Object.assign({}, this.parent._features);
      this._features = Object.assign(parentFeaturesCopy, protoFeatures || {});
    } else {
      throw new Error("Unable to find a parent for " + this.fullName);
    }
    if (this.extensionField) {
      this.extensionField._features = this._features;
    }
    this._featuresResolved = true;
  };
  ReflectionObject.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures() {
    return {};
  };
  ReflectionObject.prototype.getOption = function getOption(name) {
    if (this.options)
      return this.options[name];
    return;
  };
  ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (!this.options)
      this.options = {};
    if (/^features\./.test(name)) {
      util.setProperty(this.options, name, value, ifNotSet);
    } else if (!ifNotSet || this.options[name] === undefined) {
      if (this.getOption(name) !== value)
        this.resolved = false;
      this.options[name] = value;
    }
    return this;
  };
  ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
    if (!this.parsedOptions) {
      this.parsedOptions = [];
    }
    var parsedOptions = this.parsedOptions;
    if (propName) {
      var opt = parsedOptions.find(function(opt2) {
        return Object.prototype.hasOwnProperty.call(opt2, name);
      });
      if (opt) {
        var newValue = opt[name];
        util.setProperty(newValue, propName, value);
      } else {
        opt = {};
        opt[name] = util.setProperty({}, propName, value);
        parsedOptions.push(opt);
      }
    } else {
      var newOpt = {};
      newOpt[name] = value;
      parsedOptions.push(newOpt);
    }
    return this;
  };
  ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
      for (var keys = Object.keys(options), i = 0;i < keys.length; ++i)
        this.setOption(keys[i], options[keys[i]], ifNotSet);
    return this;
  };
  ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className, fullName = this.fullName;
    if (fullName.length)
      return className + " " + fullName;
    return className;
  };
  ReflectionObject.prototype._editionToJSON = function _editionToJSON() {
    if (!this._edition || this._edition === "proto3") {
      return;
    }
    return this._edition;
  };
  ReflectionObject._configure = function(Root_) {
    Root = Root_;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/enum.js
var require_enum = __commonJS((exports, module) => {
  module.exports = Enum;
  var ReflectionObject = require_object();
  ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
  var Namespace = require_namespace();
  var util = require_util();
  function Enum(name, values, options, comment, comments, valuesOptions) {
    ReflectionObject.call(this, name, options);
    if (values && typeof values !== "object")
      throw TypeError("values must be an object");
    this.valuesById = {};
    this.values = Object.create(this.valuesById);
    this.comment = comment;
    this.comments = comments || {};
    this.valuesOptions = valuesOptions;
    this._valuesFeatures = {};
    this.reserved = undefined;
    if (values) {
      for (var keys = Object.keys(values), i = 0;i < keys.length; ++i)
        if (typeof values[keys[i]] === "number")
          this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
    }
  }
  Enum.prototype._resolveFeatures = function _resolveFeatures(edition) {
    edition = this._edition || edition;
    ReflectionObject.prototype._resolveFeatures.call(this, edition);
    Object.keys(this.values).forEach((key) => {
      var parentFeaturesCopy = Object.assign({}, this._features);
      this._valuesFeatures[key] = Object.assign(parentFeaturesCopy, this.valuesOptions && this.valuesOptions[key] && this.valuesOptions[key].features);
    });
    return this;
  };
  Enum.fromJSON = function fromJSON(name, json) {
    var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
    enm.reserved = json.reserved;
    if (json.edition)
      enm._edition = json.edition;
    enm._defaultEdition = "proto3";
    return enm;
  };
  Enum.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "edition",
      this._editionToJSON(),
      "options",
      this.options,
      "valuesOptions",
      this.valuesOptions,
      "values",
      this.values,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : undefined,
      "comment",
      keepComments ? this.comment : undefined,
      "comments",
      keepComments ? this.comments : undefined
    ]);
  };
  Enum.prototype.add = function add(name, id, comment, options) {
    if (!util.isString(name))
      throw TypeError("name must be a string");
    if (!util.isInteger(id))
      throw TypeError("id must be an integer");
    if (this.values[name] !== undefined)
      throw Error("duplicate name '" + name + "' in " + this);
    if (this.isReservedId(id))
      throw Error("id " + id + " is reserved in " + this);
    if (this.isReservedName(name))
      throw Error("name '" + name + "' is reserved in " + this);
    if (this.valuesById[id] !== undefined) {
      if (!(this.options && this.options.allow_alias))
        throw Error("duplicate id " + id + " in " + this);
      this.values[name] = id;
    } else
      this.valuesById[this.values[name] = id] = name;
    if (options) {
      if (this.valuesOptions === undefined)
        this.valuesOptions = {};
      this.valuesOptions[name] = options || null;
    }
    this.comments[name] = comment || null;
    return this;
  };
  Enum.prototype.remove = function remove(name) {
    if (!util.isString(name))
      throw TypeError("name must be a string");
    var val = this.values[name];
    if (val == null)
      throw Error("name '" + name + "' does not exist in " + this);
    delete this.valuesById[val];
    delete this.values[name];
    delete this.comments[name];
    if (this.valuesOptions)
      delete this.valuesOptions[name];
    return this;
  };
  Enum.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
  };
  Enum.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/encoder.js
var require_encoder = __commonJS((exports, module) => {
  module.exports = encoder;
  var Enum = require_enum();
  var types = require_types();
  var util = require_util();
  function genTypePartial(gen, field, fieldIndex, ref) {
    return field.delimited ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
  }
  function encoder(mtype) {
    var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
    var i, ref;
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    for (var i = 0;i < fields.length; ++i) {
      var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
      ref = "m" + util.safeProp(field.name);
      if (field.map) {
        gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
        if (wireType === undefined)
          gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
        else
          gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
        gen("}")("}");
      } else if (field.repeated) {
        gen("if(%s!=null&&%s.length){", ref, ref);
        if (field.packed && types.packed[type] !== undefined) {
          gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
        } else {
          gen("for(var i=0;i<%s.length;++i)", ref);
          if (wireType === undefined)
            genTypePartial(gen, field, index, ref + "[i]");
          else
            gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
        }
        gen("}");
      } else {
        if (field.optional)
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
        if (wireType === undefined)
          genTypePartial(gen, field, index, ref);
        else
          gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
      }
    }
    return gen("return w");
  }
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/index-light.js
var require_index_light = __commonJS((exports, module) => {
  var protobuf = module.exports = require_index_minimal();
  protobuf.build = "light";
  function load(filename, root, callback) {
    if (typeof root === "function") {
      callback = root;
      root = new protobuf.Root;
    } else if (!root)
      root = new protobuf.Root;
    return root.load(filename, callback);
  }
  protobuf.load = load;
  function loadSync(filename, root) {
    if (!root)
      root = new protobuf.Root;
    return root.loadSync(filename);
  }
  protobuf.loadSync = loadSync;
  protobuf.encoder = require_encoder();
  protobuf.decoder = require_decoder();
  protobuf.verifier = require_verifier();
  protobuf.converter = require_converter();
  protobuf.ReflectionObject = require_object();
  protobuf.Namespace = require_namespace();
  protobuf.Root = require_root();
  protobuf.Enum = require_enum();
  protobuf.Type = require_type();
  protobuf.Field = require_field();
  protobuf.OneOf = require_oneof();
  protobuf.MapField = require_mapfield();
  protobuf.Service = require_service2();
  protobuf.Method = require_method();
  protobuf.Message = require_message();
  protobuf.wrappers = require_wrappers();
  protobuf.types = require_types();
  protobuf.util = require_util();
  protobuf.ReflectionObject._configure(protobuf.Root);
  protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
  protobuf.Root._configure(protobuf.Type);
  protobuf.Field._configure(protobuf.Type);
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/tokenize.js
var require_tokenize = __commonJS((exports, module) => {
  module.exports = tokenize;
  var delimRe = /[\s{}=;:[\],'"()<>]/g;
  var stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
  var stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
  var setCommentRe = /^ *[*/]+ */;
  var setCommentAltRe = /^\s*\*?\/*/;
  var setCommentSplitRe = /\n/g;
  var whitespaceRe = /\s/;
  var unescapeRe = /\\(.?)/g;
  var unescapeMap = {
    "0": "\x00",
    r: "\r",
    n: `
`,
    t: "\t"
  };
  function unescape(str) {
    return str.replace(unescapeRe, function($0, $1) {
      switch ($1) {
        case "\\":
        case "":
          return $1;
        default:
          return unescapeMap[$1] || "";
      }
    });
  }
  tokenize.unescape = unescape;
  function tokenize(source, alternateCommentMode) {
    source = source.toString();
    var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
    var stack = [];
    var stringDelim = null;
    function illegal(subject) {
      return Error("illegal " + subject + " (line " + line + ")");
    }
    function readString() {
      var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
      re.lastIndex = offset - 1;
      var match = re.exec(source);
      if (!match)
        throw illegal("string");
      offset = re.lastIndex;
      push(stringDelim);
      stringDelim = null;
      return unescape(match[1]);
    }
    function charAt(pos) {
      return source.charAt(pos);
    }
    function setComment(start, end, isLeading) {
      var comment = {
        type: source.charAt(start++),
        lineEmpty: false,
        leading: isLeading
      };
      var lookback;
      if (alternateCommentMode) {
        lookback = 2;
      } else {
        lookback = 3;
      }
      var commentOffset = start - lookback, c;
      do {
        if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === `
`) {
          comment.lineEmpty = true;
          break;
        }
      } while (c === " " || c === "\t");
      var lines = source.substring(start, end).split(setCommentSplitRe);
      for (var i = 0;i < lines.length; ++i)
        lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
      comment.text = lines.join(`
`).trim();
      comments[line] = comment;
      lastCommentLine = line;
    }
    function isDoubleSlashCommentLine(startOffset) {
      var endOffset = findEndOfLine(startOffset);
      var lineText = source.substring(startOffset, endOffset);
      var isComment = /^\s*\/\//.test(lineText);
      return isComment;
    }
    function findEndOfLine(cursor) {
      var endOffset = cursor;
      while (endOffset < length && charAt(endOffset) !== `
`) {
        endOffset++;
      }
      return endOffset;
    }
    function next() {
      if (stack.length > 0)
        return stack.shift();
      if (stringDelim)
        return readString();
      var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
      do {
        if (offset === length)
          return null;
        repeat = false;
        while (whitespaceRe.test(curr = charAt(offset))) {
          if (curr === `
`) {
            isLeadingComment = true;
            ++line;
          }
          if (++offset === length)
            return null;
        }
        if (charAt(offset) === "/") {
          if (++offset === length) {
            throw illegal("comment");
          }
          if (charAt(offset) === "/") {
            if (!alternateCommentMode) {
              isDoc = charAt(start = offset + 1) === "/";
              while (charAt(++offset) !== `
`) {
                if (offset === length) {
                  return null;
                }
              }
              ++offset;
              if (isDoc) {
                setComment(start, offset - 1, isLeadingComment);
                isLeadingComment = true;
              }
              ++line;
              repeat = true;
            } else {
              start = offset;
              isDoc = false;
              if (isDoubleSlashCommentLine(offset - 1)) {
                isDoc = true;
                do {
                  offset = findEndOfLine(offset);
                  if (offset === length) {
                    break;
                  }
                  offset++;
                  if (!isLeadingComment) {
                    break;
                  }
                } while (isDoubleSlashCommentLine(offset));
              } else {
                offset = Math.min(length, findEndOfLine(offset) + 1);
              }
              if (isDoc) {
                setComment(start, offset, isLeadingComment);
                isLeadingComment = true;
              }
              line++;
              repeat = true;
            }
          } else if ((curr = charAt(offset)) === "*") {
            start = offset + 1;
            isDoc = alternateCommentMode || charAt(start) === "*";
            do {
              if (curr === `
`) {
                ++line;
              }
              if (++offset === length) {
                throw illegal("comment");
              }
              prev = curr;
              curr = charAt(offset);
            } while (prev !== "*" || curr !== "/");
            ++offset;
            if (isDoc) {
              setComment(start, offset - 2, isLeadingComment);
              isLeadingComment = true;
            }
            repeat = true;
          } else {
            return "/";
          }
        }
      } while (repeat);
      var end = offset;
      delimRe.lastIndex = 0;
      var delim = delimRe.test(charAt(end++));
      if (!delim)
        while (end < length && !delimRe.test(charAt(end)))
          ++end;
      var token = source.substring(offset, offset = end);
      if (token === '"' || token === "'")
        stringDelim = token;
      return token;
    }
    function push(token) {
      stack.push(token);
    }
    function peek() {
      if (!stack.length) {
        var token = next();
        if (token === null)
          return null;
        push(token);
      }
      return stack[0];
    }
    function skip(expected, optional) {
      var actual = peek(), equals = actual === expected;
      if (equals) {
        next();
        return true;
      }
      if (!optional)
        throw illegal("token '" + actual + "', '" + expected + "' expected");
      return false;
    }
    function cmnt(trailingLine) {
      var ret = null;
      var comment;
      if (trailingLine === undefined) {
        comment = comments[line - 1];
        delete comments[line - 1];
        if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
          ret = comment.leading ? comment.text : null;
        }
      } else {
        if (lastCommentLine < trailingLine) {
          peek();
        }
        comment = comments[trailingLine];
        delete comments[trailingLine];
        if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
          ret = comment.leading ? null : comment.text;
        }
      }
      return ret;
    }
    return Object.defineProperty({
      next,
      peek,
      push,
      skip,
      cmnt
    }, "line", {
      get: function() {
        return line;
      }
    });
  }
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/parse.js
var require_parse = __commonJS((exports, module) => {
  module.exports = parse;
  parse.filename = null;
  parse.defaults = { keepCase: false };
  var tokenize = require_tokenize();
  var Root = require_root();
  var Type = require_type();
  var Field = require_field();
  var MapField = require_mapfield();
  var OneOf = require_oneof();
  var Enum = require_enum();
  var Service = require_service2();
  var Method = require_method();
  var ReflectionObject = require_object();
  var types = require_types();
  var util = require_util();
  var base10Re = /^[1-9][0-9]*$/;
  var base10NegRe = /^-?[1-9][0-9]*$/;
  var base16Re = /^0[x][0-9a-fA-F]+$/;
  var base16NegRe = /^-?0[x][0-9a-fA-F]+$/;
  var base8Re = /^0[0-7]+$/;
  var base8NegRe = /^-?0[0-7]+$/;
  var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  var nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
  var typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  function parse(source, root, options) {
    if (!(root instanceof Root)) {
      options = root;
      root = new Root;
    }
    if (!options)
      options = parse.defaults;
    var preferTrailingComment = options.preferTrailingComment || false;
    var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
    var head = true, pkg, imports, weakImports, edition = "proto2";
    var ptr = root;
    var topLevelObjects = [];
    var topLevelOptions = {};
    var applyCase = options.keepCase ? function(name) {
      return name;
    } : util.camelCase;
    function resolveFileFeatures() {
      topLevelObjects.forEach((obj) => {
        obj._edition = edition;
        Object.keys(topLevelOptions).forEach((opt) => {
          if (obj.getOption(opt) !== undefined)
            return;
          obj.setOption(opt, topLevelOptions[opt], true);
        });
      });
    }
    function illegal(token2, name, insideTryCatch) {
      var filename = parse.filename;
      if (!insideTryCatch)
        parse.filename = null;
      return Error("illegal " + (name || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
    }
    function readString() {
      var values = [], token2;
      do {
        if ((token2 = next()) !== '"' && token2 !== "'")
          throw illegal(token2);
        values.push(next());
        skip(token2);
        token2 = peek();
      } while (token2 === '"' || token2 === "'");
      return values.join("");
    }
    function readValue(acceptTypeRef) {
      var token2 = next();
      switch (token2) {
        case "'":
        case '"':
          push(token2);
          return readString();
        case "true":
        case "TRUE":
          return true;
        case "false":
        case "FALSE":
          return false;
      }
      try {
        return parseNumber(token2, true);
      } catch (e) {
        if (acceptTypeRef && typeRefRe.test(token2))
          return token2;
        throw illegal(token2, "value");
      }
    }
    function readRanges(target, acceptStrings) {
      var token2, start;
      do {
        if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'")) {
          var str = readString();
          target.push(str);
          if (edition >= 2023) {
            throw illegal(str, "id");
          }
        } else {
          try {
            target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
          } catch (err) {
            if (acceptStrings && typeRefRe.test(token2) && edition >= 2023) {
              target.push(token2);
            } else {
              throw err;
            }
          }
        }
      } while (skip(",", true));
      var dummy = { options: undefined };
      dummy.setOption = function(name, value) {
        if (this.options === undefined)
          this.options = {};
        this.options[name] = value;
      };
      ifBlock(dummy, function parseRange_block(token3) {
        if (token3 === "option") {
          parseOption(dummy, token3);
          skip(";");
        } else
          throw illegal(token3);
      }, function parseRange_line() {
        parseInlineOptions(dummy);
      });
    }
    function parseNumber(token2, insideTryCatch) {
      var sign = 1;
      if (token2.charAt(0) === "-") {
        sign = -1;
        token2 = token2.substring(1);
      }
      switch (token2) {
        case "inf":
        case "INF":
        case "Inf":
          return sign * Infinity;
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (base10Re.test(token2))
        return sign * parseInt(token2, 10);
      if (base16Re.test(token2))
        return sign * parseInt(token2, 16);
      if (base8Re.test(token2))
        return sign * parseInt(token2, 8);
      if (numberRe.test(token2))
        return sign * parseFloat(token2);
      throw illegal(token2, "number", insideTryCatch);
    }
    function parseId(token2, acceptNegative) {
      switch (token2) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!acceptNegative && token2.charAt(0) === "-")
        throw illegal(token2, "id");
      if (base10NegRe.test(token2))
        return parseInt(token2, 10);
      if (base16NegRe.test(token2))
        return parseInt(token2, 16);
      if (base8NegRe.test(token2))
        return parseInt(token2, 8);
      throw illegal(token2, "id");
    }
    function parsePackage() {
      if (pkg !== undefined)
        throw illegal("package");
      pkg = next();
      if (!typeRefRe.test(pkg))
        throw illegal(pkg, "name");
      ptr = ptr.define(pkg);
      skip(";");
    }
    function parseImport() {
      var token2 = peek();
      var whichImports;
      switch (token2) {
        case "weak":
          whichImports = weakImports || (weakImports = []);
          next();
          break;
        case "public":
          next();
        default:
          whichImports = imports || (imports = []);
          break;
      }
      token2 = readString();
      skip(";");
      whichImports.push(token2);
    }
    function parseSyntax() {
      skip("=");
      edition = readString();
      if (edition < 2023)
        throw illegal(edition, "syntax");
      skip(";");
    }
    function parseEdition() {
      skip("=");
      edition = readString();
      const supportedEditions = ["2023"];
      if (!supportedEditions.includes(edition))
        throw illegal(edition, "edition");
      skip(";");
    }
    function parseCommon(parent, token2) {
      switch (token2) {
        case "option":
          parseOption(parent, token2);
          skip(";");
          return true;
        case "message":
          parseType(parent, token2);
          return true;
        case "enum":
          parseEnum(parent, token2);
          return true;
        case "service":
          parseService(parent, token2);
          return true;
        case "extend":
          parseExtension(parent, token2);
          return true;
      }
      return false;
    }
    function ifBlock(obj, fnIf, fnElse) {
      var trailingLine = tn.line;
      if (obj) {
        if (typeof obj.comment !== "string") {
          obj.comment = cmnt();
        }
        obj.filename = parse.filename;
      }
      if (skip("{", true)) {
        var token2;
        while ((token2 = next()) !== "}")
          fnIf(token2);
        skip(";", true);
      } else {
        if (fnElse)
          fnElse();
        skip(";");
        if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
          obj.comment = cmnt(trailingLine) || obj.comment;
      }
    }
    function parseType(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "type name");
      var type = new Type(token2);
      ifBlock(type, function parseType_block(token3) {
        if (parseCommon(type, token3))
          return;
        switch (token3) {
          case "map":
            parseMapField(type, token3);
            break;
          case "required":
            if (edition !== "proto2")
              throw illegal(token3);
          case "repeated":
            parseField(type, token3);
            break;
          case "optional":
            if (edition === "proto3") {
              parseField(type, "proto3_optional");
            } else if (edition !== "proto2") {
              throw illegal(token3);
            } else {
              parseField(type, "optional");
            }
            break;
          case "oneof":
            parseOneOf(type, token3);
            break;
          case "extensions":
            readRanges(type.extensions || (type.extensions = []));
            break;
          case "reserved":
            readRanges(type.reserved || (type.reserved = []), true);
            break;
          default:
            if (edition === "proto2" || !typeRefRe.test(token3)) {
              throw illegal(token3);
            }
            push(token3);
            parseField(type, "optional");
            break;
        }
      });
      parent.add(type);
      if (parent === ptr) {
        topLevelObjects.push(type);
      }
    }
    function parseField(parent, rule, extend) {
      var type = next();
      if (type === "group") {
        parseGroup(parent, rule);
        return;
      }
      while (type.endsWith(".") || peek().startsWith(".")) {
        type += next();
      }
      if (!typeRefRe.test(type))
        throw illegal(type, "type");
      var name = next();
      if (!nameRe.test(name))
        throw illegal(name, "name");
      name = applyCase(name);
      skip("=");
      var field = new Field(name, parseId(next()), type, rule, extend);
      ifBlock(field, function parseField_block(token2) {
        if (token2 === "option") {
          parseOption(field, token2);
          skip(";");
        } else
          throw illegal(token2);
      }, function parseField_line() {
        parseInlineOptions(field);
      });
      if (rule === "proto3_optional") {
        var oneof = new OneOf("_" + name);
        field.setOption("proto3_optional", true);
        oneof.add(field);
        parent.add(oneof);
      } else {
        parent.add(field);
      }
      if (parent === ptr) {
        topLevelObjects.push(field);
      }
    }
    function parseGroup(parent, rule) {
      if (edition >= 2023) {
        throw illegal("group");
      }
      var name = next();
      if (!nameRe.test(name))
        throw illegal(name, "name");
      var fieldName = util.lcFirst(name);
      if (name === fieldName)
        name = util.ucFirst(name);
      skip("=");
      var id = parseId(next());
      var type = new Type(name);
      type.group = true;
      var field = new Field(fieldName, id, name, rule);
      field.filename = parse.filename;
      ifBlock(type, function parseGroup_block(token2) {
        switch (token2) {
          case "option":
            parseOption(type, token2);
            skip(";");
            break;
          case "required":
          case "repeated":
            parseField(type, token2);
            break;
          case "optional":
            if (edition === "proto3") {
              parseField(type, "proto3_optional");
            } else {
              parseField(type, "optional");
            }
            break;
          case "message":
            parseType(type, token2);
            break;
          case "enum":
            parseEnum(type, token2);
            break;
          case "reserved":
            readRanges(type.reserved || (type.reserved = []), true);
            break;
          default:
            throw illegal(token2);
        }
      });
      parent.add(type).add(field);
    }
    function parseMapField(parent) {
      skip("<");
      var keyType = next();
      if (types.mapKey[keyType] === undefined)
        throw illegal(keyType, "type");
      skip(",");
      var valueType = next();
      if (!typeRefRe.test(valueType))
        throw illegal(valueType, "type");
      skip(">");
      var name = next();
      if (!nameRe.test(name))
        throw illegal(name, "name");
      skip("=");
      var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
      ifBlock(field, function parseMapField_block(token2) {
        if (token2 === "option") {
          parseOption(field, token2);
          skip(";");
        } else
          throw illegal(token2);
      }, function parseMapField_line() {
        parseInlineOptions(field);
      });
      parent.add(field);
    }
    function parseOneOf(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var oneof = new OneOf(applyCase(token2));
      ifBlock(oneof, function parseOneOf_block(token3) {
        if (token3 === "option") {
          parseOption(oneof, token3);
          skip(";");
        } else {
          push(token3);
          parseField(oneof, "optional");
        }
      });
      parent.add(oneof);
    }
    function parseEnum(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var enm = new Enum(token2);
      ifBlock(enm, function parseEnum_block(token3) {
        switch (token3) {
          case "option":
            parseOption(enm, token3);
            skip(";");
            break;
          case "reserved":
            readRanges(enm.reserved || (enm.reserved = []), true);
            if (enm.reserved === undefined)
              enm.reserved = [];
            break;
          default:
            parseEnumValue(enm, token3);
        }
      });
      parent.add(enm);
      if (parent === ptr) {
        topLevelObjects.push(enm);
      }
    }
    function parseEnumValue(parent, token2) {
      if (!nameRe.test(token2))
        throw illegal(token2, "name");
      skip("=");
      var value = parseId(next(), true), dummy = {
        options: undefined
      };
      dummy.getOption = function(name) {
        return this.options[name];
      };
      dummy.setOption = function(name, value2) {
        ReflectionObject.prototype.setOption.call(dummy, name, value2);
      };
      dummy.setParsedOption = function() {
        return;
      };
      ifBlock(dummy, function parseEnumValue_block(token3) {
        if (token3 === "option") {
          parseOption(dummy, token3);
          skip(";");
        } else
          throw illegal(token3);
      }, function parseEnumValue_line() {
        parseInlineOptions(dummy);
      });
      parent.add(token2, value, dummy.comment, dummy.parsedOptions || dummy.options);
    }
    function parseOption(parent, token2) {
      var option;
      var propName;
      var isOption = true;
      if (token2 === "option") {
        token2 = next();
      }
      while (token2 !== "=") {
        if (token2 === "(") {
          var parensValue = next();
          skip(")");
          token2 = "(" + parensValue + ")";
        }
        if (isOption) {
          isOption = false;
          if (token2.includes(".") && !token2.includes("(")) {
            var tokens = token2.split(".");
            option = tokens[0] + ".";
            token2 = tokens[1];
            continue;
          }
          option = token2;
        } else {
          propName = propName ? propName += token2 : token2;
        }
        token2 = next();
      }
      var name = propName ? option.concat(propName) : option;
      var optionValue = parseOptionValue(parent, name);
      propName = propName && propName[0] === "." ? propName.slice(1) : propName;
      option = option && option[option.length - 1] === "." ? option.slice(0, -1) : option;
      setParsedOption(parent, option, optionValue, propName);
    }
    function parseOptionValue(parent, name) {
      if (skip("{", true)) {
        var objectResult = {};
        while (!skip("}", true)) {
          if (!nameRe.test(token = next())) {
            throw illegal(token, "name");
          }
          if (token === null) {
            throw illegal(token, "end of input");
          }
          var value;
          var propName = token;
          skip(":", true);
          if (peek() === "{") {
            value = parseOptionValue(parent, name + "." + token);
          } else if (peek() === "[") {
            value = [];
            var lastValue;
            if (skip("[", true)) {
              do {
                lastValue = readValue(true);
                value.push(lastValue);
              } while (skip(",", true));
              skip("]");
              if (typeof lastValue !== "undefined") {
                setOption(parent, name + "." + token, lastValue);
              }
            }
          } else {
            value = readValue(true);
            setOption(parent, name + "." + token, value);
          }
          var prevValue = objectResult[propName];
          if (prevValue)
            value = [].concat(prevValue).concat(value);
          objectResult[propName] = value;
          skip(",", true);
          skip(";", true);
        }
        return objectResult;
      }
      var simpleValue = readValue(true);
      setOption(parent, name, simpleValue);
      return simpleValue;
    }
    function setOption(parent, name, value) {
      if (ptr === parent && /^features\./.test(name)) {
        topLevelOptions[name] = value;
        return;
      }
      if (parent.setOption)
        parent.setOption(name, value);
    }
    function setParsedOption(parent, name, value, propName) {
      if (parent.setParsedOption)
        parent.setParsedOption(name, value, propName);
    }
    function parseInlineOptions(parent) {
      if (skip("[", true)) {
        do {
          parseOption(parent, "option");
        } while (skip(",", true));
        skip("]");
      }
      return parent;
    }
    function parseService(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "service name");
      var service = new Service(token2);
      ifBlock(service, function parseService_block(token3) {
        if (parseCommon(service, token3)) {
          return;
        }
        if (token3 === "rpc")
          parseMethod(service, token3);
        else
          throw illegal(token3);
      });
      parent.add(service);
      if (parent === ptr) {
        topLevelObjects.push(service);
      }
    }
    function parseMethod(parent, token2) {
      var commentText = cmnt();
      var type = token2;
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var name = token2, requestType, requestStream, responseType, responseStream;
      skip("(");
      if (skip("stream", true))
        requestStream = true;
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2);
      requestType = token2;
      skip(")");
      skip("returns");
      skip("(");
      if (skip("stream", true))
        responseStream = true;
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2);
      responseType = token2;
      skip(")");
      var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
      method.comment = commentText;
      ifBlock(method, function parseMethod_block(token3) {
        if (token3 === "option") {
          parseOption(method, token3);
          skip(";");
        } else
          throw illegal(token3);
      });
      parent.add(method);
    }
    function parseExtension(parent, token2) {
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2, "reference");
      var reference = token2;
      ifBlock(null, function parseExtension_block(token3) {
        switch (token3) {
          case "required":
          case "repeated":
            parseField(parent, token3, reference);
            break;
          case "optional":
            if (edition === "proto3") {
              parseField(parent, "proto3_optional", reference);
            } else {
              parseField(parent, "optional", reference);
            }
            break;
          default:
            if (edition === "proto2" || !typeRefRe.test(token3))
              throw illegal(token3);
            push(token3);
            parseField(parent, "optional", reference);
            break;
        }
      });
    }
    var token;
    while ((token = next()) !== null) {
      switch (token) {
        case "package":
          if (!head)
            throw illegal(token);
          parsePackage();
          break;
        case "import":
          if (!head)
            throw illegal(token);
          parseImport();
          break;
        case "syntax":
          if (!head)
            throw illegal(token);
          parseSyntax();
          break;
        case "edition":
          if (!head)
            throw illegal(token);
          parseEdition();
          break;
        case "option":
          parseOption(ptr, token);
          skip(";", true);
          break;
        default:
          if (parseCommon(ptr, token)) {
            head = false;
            continue;
          }
          throw illegal(token);
      }
    }
    resolveFileFeatures();
    parse.filename = null;
    return {
      package: pkg,
      imports,
      weakImports,
      root
    };
  }
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/common.js
var require_common = __commonJS((exports, module) => {
  module.exports = common;
  var commonRe = /\/|\./;
  function common(name, json) {
    if (!commonRe.test(name)) {
      name = "google/protobuf/" + name + ".proto";
      json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
    }
    common[name] = json;
  }
  common("any", {
    Any: {
      fields: {
        type_url: {
          type: "string",
          id: 1
        },
        value: {
          type: "bytes",
          id: 2
        }
      }
    }
  });
  var timeType;
  common("duration", {
    Duration: timeType = {
      fields: {
        seconds: {
          type: "int64",
          id: 1
        },
        nanos: {
          type: "int32",
          id: 2
        }
      }
    }
  });
  common("timestamp", {
    Timestamp: timeType
  });
  common("empty", {
    Empty: {
      fields: {}
    }
  });
  common("struct", {
    Struct: {
      fields: {
        fields: {
          keyType: "string",
          type: "Value",
          id: 1
        }
      }
    },
    Value: {
      oneofs: {
        kind: {
          oneof: [
            "nullValue",
            "numberValue",
            "stringValue",
            "boolValue",
            "structValue",
            "listValue"
          ]
        }
      },
      fields: {
        nullValue: {
          type: "NullValue",
          id: 1
        },
        numberValue: {
          type: "double",
          id: 2
        },
        stringValue: {
          type: "string",
          id: 3
        },
        boolValue: {
          type: "bool",
          id: 4
        },
        structValue: {
          type: "Struct",
          id: 5
        },
        listValue: {
          type: "ListValue",
          id: 6
        }
      }
    },
    NullValue: {
      values: {
        NULL_VALUE: 0
      }
    },
    ListValue: {
      fields: {
        values: {
          rule: "repeated",
          type: "Value",
          id: 1
        }
      }
    }
  });
  common("wrappers", {
    DoubleValue: {
      fields: {
        value: {
          type: "double",
          id: 1
        }
      }
    },
    FloatValue: {
      fields: {
        value: {
          type: "float",
          id: 1
        }
      }
    },
    Int64Value: {
      fields: {
        value: {
          type: "int64",
          id: 1
        }
      }
    },
    UInt64Value: {
      fields: {
        value: {
          type: "uint64",
          id: 1
        }
      }
    },
    Int32Value: {
      fields: {
        value: {
          type: "int32",
          id: 1
        }
      }
    },
    UInt32Value: {
      fields: {
        value: {
          type: "uint32",
          id: 1
        }
      }
    },
    BoolValue: {
      fields: {
        value: {
          type: "bool",
          id: 1
        }
      }
    },
    StringValue: {
      fields: {
        value: {
          type: "string",
          id: 1
        }
      }
    },
    BytesValue: {
      fields: {
        value: {
          type: "bytes",
          id: 1
        }
      }
    }
  });
  common("field_mask", {
    FieldMask: {
      fields: {
        paths: {
          rule: "repeated",
          type: "string",
          id: 1
        }
      }
    }
  });
  common.get = function get(file) {
    return common[file] || null;
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/src/index.js
var require_src4 = __commonJS((exports, module) => {
  var protobuf = module.exports = require_index_light();
  protobuf.build = "full";
  protobuf.tokenize = require_tokenize();
  protobuf.parse = require_parse();
  protobuf.common = require_common();
  protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/google/protobuf/descriptor.json
var require_descriptor = __commonJS((exports, module) => {
  module.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            options: {
              go_package: "google.golang.org/protobuf/types/descriptorpb",
              java_package: "com.google.protobuf",
              java_outer_classname: "DescriptorProtos",
              csharp_namespace: "Google.Protobuf.Reflection",
              objc_class_prefix: "GPB",
              cc_enable_arenas: true,
              optimize_for: "SPEED"
            },
            nested: {
              FileDescriptorSet: {
                edition: "proto2",
                fields: {
                  file: {
                    rule: "repeated",
                    type: "FileDescriptorProto",
                    id: 1
                  }
                },
                extensions: [
                  [
                    536000000,
                    536000000
                  ]
                ]
              },
              Edition: {
                edition: "proto2",
                values: {
                  EDITION_UNKNOWN: 0,
                  EDITION_LEGACY: 900,
                  EDITION_PROTO2: 998,
                  EDITION_PROTO3: 999,
                  EDITION_2023: 1000,
                  EDITION_2024: 1001,
                  EDITION_1_TEST_ONLY: 1,
                  EDITION_2_TEST_ONLY: 2,
                  EDITION_99997_TEST_ONLY: 99997,
                  EDITION_99998_TEST_ONLY: 99998,
                  EDITION_99999_TEST_ONLY: 99999,
                  EDITION_MAX: 2147483647
                }
              },
              FileDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  package: {
                    type: "string",
                    id: 2
                  },
                  dependency: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  publicDependency: {
                    rule: "repeated",
                    type: "int32",
                    id: 10
                  },
                  weakDependency: {
                    rule: "repeated",
                    type: "int32",
                    id: 11
                  },
                  optionDependency: {
                    rule: "repeated",
                    type: "string",
                    id: 15
                  },
                  messageType: {
                    rule: "repeated",
                    type: "DescriptorProto",
                    id: 4
                  },
                  enumType: {
                    rule: "repeated",
                    type: "EnumDescriptorProto",
                    id: 5
                  },
                  service: {
                    rule: "repeated",
                    type: "ServiceDescriptorProto",
                    id: 6
                  },
                  extension: {
                    rule: "repeated",
                    type: "FieldDescriptorProto",
                    id: 7
                  },
                  options: {
                    type: "FileOptions",
                    id: 8
                  },
                  sourceCodeInfo: {
                    type: "SourceCodeInfo",
                    id: 9
                  },
                  syntax: {
                    type: "string",
                    id: 12
                  },
                  edition: {
                    type: "Edition",
                    id: 14
                  }
                }
              },
              DescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  field: {
                    rule: "repeated",
                    type: "FieldDescriptorProto",
                    id: 2
                  },
                  extension: {
                    rule: "repeated",
                    type: "FieldDescriptorProto",
                    id: 6
                  },
                  nestedType: {
                    rule: "repeated",
                    type: "DescriptorProto",
                    id: 3
                  },
                  enumType: {
                    rule: "repeated",
                    type: "EnumDescriptorProto",
                    id: 4
                  },
                  extensionRange: {
                    rule: "repeated",
                    type: "ExtensionRange",
                    id: 5
                  },
                  oneofDecl: {
                    rule: "repeated",
                    type: "OneofDescriptorProto",
                    id: 8
                  },
                  options: {
                    type: "MessageOptions",
                    id: 7
                  },
                  reservedRange: {
                    rule: "repeated",
                    type: "ReservedRange",
                    id: 9
                  },
                  reservedName: {
                    rule: "repeated",
                    type: "string",
                    id: 10
                  },
                  visibility: {
                    type: "SymbolVisibility",
                    id: 11
                  }
                },
                nested: {
                  ExtensionRange: {
                    fields: {
                      start: {
                        type: "int32",
                        id: 1
                      },
                      end: {
                        type: "int32",
                        id: 2
                      },
                      options: {
                        type: "ExtensionRangeOptions",
                        id: 3
                      }
                    }
                  },
                  ReservedRange: {
                    fields: {
                      start: {
                        type: "int32",
                        id: 1
                      },
                      end: {
                        type: "int32",
                        id: 2
                      }
                    }
                  }
                }
              },
              ExtensionRangeOptions: {
                edition: "proto2",
                fields: {
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  },
                  declaration: {
                    rule: "repeated",
                    type: "Declaration",
                    id: 2,
                    options: {
                      retention: "RETENTION_SOURCE"
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 50
                  },
                  verification: {
                    type: "VerificationState",
                    id: 3,
                    options: {
                      default: "UNVERIFIED",
                      retention: "RETENTION_SOURCE"
                    }
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ],
                nested: {
                  Declaration: {
                    fields: {
                      number: {
                        type: "int32",
                        id: 1
                      },
                      fullName: {
                        type: "string",
                        id: 2
                      },
                      type: {
                        type: "string",
                        id: 3
                      },
                      reserved: {
                        type: "bool",
                        id: 5
                      },
                      repeated: {
                        type: "bool",
                        id: 6
                      }
                    },
                    reserved: [
                      [
                        4,
                        4
                      ]
                    ]
                  },
                  VerificationState: {
                    values: {
                      DECLARATION: 0,
                      UNVERIFIED: 1
                    }
                  }
                }
              },
              FieldDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  number: {
                    type: "int32",
                    id: 3
                  },
                  label: {
                    type: "Label",
                    id: 4
                  },
                  type: {
                    type: "Type",
                    id: 5
                  },
                  typeName: {
                    type: "string",
                    id: 6
                  },
                  extendee: {
                    type: "string",
                    id: 2
                  },
                  defaultValue: {
                    type: "string",
                    id: 7
                  },
                  oneofIndex: {
                    type: "int32",
                    id: 9
                  },
                  jsonName: {
                    type: "string",
                    id: 10
                  },
                  options: {
                    type: "FieldOptions",
                    id: 8
                  },
                  proto3Optional: {
                    type: "bool",
                    id: 17
                  }
                },
                nested: {
                  Type: {
                    values: {
                      TYPE_DOUBLE: 1,
                      TYPE_FLOAT: 2,
                      TYPE_INT64: 3,
                      TYPE_UINT64: 4,
                      TYPE_INT32: 5,
                      TYPE_FIXED64: 6,
                      TYPE_FIXED32: 7,
                      TYPE_BOOL: 8,
                      TYPE_STRING: 9,
                      TYPE_GROUP: 10,
                      TYPE_MESSAGE: 11,
                      TYPE_BYTES: 12,
                      TYPE_UINT32: 13,
                      TYPE_ENUM: 14,
                      TYPE_SFIXED32: 15,
                      TYPE_SFIXED64: 16,
                      TYPE_SINT32: 17,
                      TYPE_SINT64: 18
                    }
                  },
                  Label: {
                    values: {
                      LABEL_OPTIONAL: 1,
                      LABEL_REPEATED: 3,
                      LABEL_REQUIRED: 2
                    }
                  }
                }
              },
              OneofDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  options: {
                    type: "OneofOptions",
                    id: 2
                  }
                }
              },
              EnumDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    rule: "repeated",
                    type: "EnumValueDescriptorProto",
                    id: 2
                  },
                  options: {
                    type: "EnumOptions",
                    id: 3
                  },
                  reservedRange: {
                    rule: "repeated",
                    type: "EnumReservedRange",
                    id: 4
                  },
                  reservedName: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                  },
                  visibility: {
                    type: "SymbolVisibility",
                    id: 6
                  }
                },
                nested: {
                  EnumReservedRange: {
                    fields: {
                      start: {
                        type: "int32",
                        id: 1
                      },
                      end: {
                        type: "int32",
                        id: 2
                      }
                    }
                  }
                }
              },
              EnumValueDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  number: {
                    type: "int32",
                    id: 2
                  },
                  options: {
                    type: "EnumValueOptions",
                    id: 3
                  }
                }
              },
              ServiceDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  method: {
                    rule: "repeated",
                    type: "MethodDescriptorProto",
                    id: 2
                  },
                  options: {
                    type: "ServiceOptions",
                    id: 3
                  }
                }
              },
              MethodDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  inputType: {
                    type: "string",
                    id: 2
                  },
                  outputType: {
                    type: "string",
                    id: 3
                  },
                  options: {
                    type: "MethodOptions",
                    id: 4
                  },
                  clientStreaming: {
                    type: "bool",
                    id: 5
                  },
                  serverStreaming: {
                    type: "bool",
                    id: 6
                  }
                }
              },
              FileOptions: {
                edition: "proto2",
                fields: {
                  javaPackage: {
                    type: "string",
                    id: 1
                  },
                  javaOuterClassname: {
                    type: "string",
                    id: 8
                  },
                  javaMultipleFiles: {
                    type: "bool",
                    id: 10
                  },
                  javaGenerateEqualsAndHash: {
                    type: "bool",
                    id: 20,
                    options: {
                      deprecated: true
                    }
                  },
                  javaStringCheckUtf8: {
                    type: "bool",
                    id: 27
                  },
                  optimizeFor: {
                    type: "OptimizeMode",
                    id: 9,
                    options: {
                      default: "SPEED"
                    }
                  },
                  goPackage: {
                    type: "string",
                    id: 11
                  },
                  ccGenericServices: {
                    type: "bool",
                    id: 16
                  },
                  javaGenericServices: {
                    type: "bool",
                    id: 17
                  },
                  pyGenericServices: {
                    type: "bool",
                    id: 18
                  },
                  deprecated: {
                    type: "bool",
                    id: 23
                  },
                  ccEnableArenas: {
                    type: "bool",
                    id: 31,
                    options: {
                      default: true
                    }
                  },
                  objcClassPrefix: {
                    type: "string",
                    id: 36
                  },
                  csharpNamespace: {
                    type: "string",
                    id: 37
                  },
                  swiftPrefix: {
                    type: "string",
                    id: 39
                  },
                  phpClassPrefix: {
                    type: "string",
                    id: 40
                  },
                  phpNamespace: {
                    type: "string",
                    id: 41
                  },
                  phpMetadataNamespace: {
                    type: "string",
                    id: 44
                  },
                  rubyPackage: {
                    type: "string",
                    id: 45
                  },
                  features: {
                    type: "FeatureSet",
                    id: 50
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ],
                reserved: [
                  [
                    42,
                    42
                  ],
                  [
                    38,
                    38
                  ],
                  "php_generic_services"
                ],
                nested: {
                  OptimizeMode: {
                    values: {
                      SPEED: 1,
                      CODE_SIZE: 2,
                      LITE_RUNTIME: 3
                    }
                  }
                }
              },
              MessageOptions: {
                edition: "proto2",
                fields: {
                  messageSetWireFormat: {
                    type: "bool",
                    id: 1
                  },
                  noStandardDescriptorAccessor: {
                    type: "bool",
                    id: 2
                  },
                  deprecated: {
                    type: "bool",
                    id: 3
                  },
                  mapEntry: {
                    type: "bool",
                    id: 7
                  },
                  deprecatedLegacyJsonFieldConflicts: {
                    type: "bool",
                    id: 11,
                    options: {
                      deprecated: true
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 12
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ],
                reserved: [
                  [
                    4,
                    4
                  ],
                  [
                    5,
                    5
                  ],
                  [
                    6,
                    6
                  ],
                  [
                    8,
                    8
                  ],
                  [
                    9,
                    9
                  ]
                ]
              },
              FieldOptions: {
                edition: "proto2",
                fields: {
                  ctype: {
                    type: "CType",
                    id: 1,
                    options: {
                      default: "STRING"
                    }
                  },
                  packed: {
                    type: "bool",
                    id: 2
                  },
                  jstype: {
                    type: "JSType",
                    id: 6,
                    options: {
                      default: "JS_NORMAL"
                    }
                  },
                  lazy: {
                    type: "bool",
                    id: 5
                  },
                  unverifiedLazy: {
                    type: "bool",
                    id: 15
                  },
                  deprecated: {
                    type: "bool",
                    id: 3
                  },
                  weak: {
                    type: "bool",
                    id: 10,
                    options: {
                      deprecated: true
                    }
                  },
                  debugRedact: {
                    type: "bool",
                    id: 16
                  },
                  retention: {
                    type: "OptionRetention",
                    id: 17
                  },
                  targets: {
                    rule: "repeated",
                    type: "OptionTargetType",
                    id: 19
                  },
                  editionDefaults: {
                    rule: "repeated",
                    type: "EditionDefault",
                    id: 20
                  },
                  features: {
                    type: "FeatureSet",
                    id: 21
                  },
                  featureSupport: {
                    type: "FeatureSupport",
                    id: 22
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ],
                reserved: [
                  [
                    4,
                    4
                  ],
                  [
                    18,
                    18
                  ]
                ],
                nested: {
                  CType: {
                    values: {
                      STRING: 0,
                      CORD: 1,
                      STRING_PIECE: 2
                    }
                  },
                  JSType: {
                    values: {
                      JS_NORMAL: 0,
                      JS_STRING: 1,
                      JS_NUMBER: 2
                    }
                  },
                  OptionRetention: {
                    values: {
                      RETENTION_UNKNOWN: 0,
                      RETENTION_RUNTIME: 1,
                      RETENTION_SOURCE: 2
                    }
                  },
                  OptionTargetType: {
                    values: {
                      TARGET_TYPE_UNKNOWN: 0,
                      TARGET_TYPE_FILE: 1,
                      TARGET_TYPE_EXTENSION_RANGE: 2,
                      TARGET_TYPE_MESSAGE: 3,
                      TARGET_TYPE_FIELD: 4,
                      TARGET_TYPE_ONEOF: 5,
                      TARGET_TYPE_ENUM: 6,
                      TARGET_TYPE_ENUM_ENTRY: 7,
                      TARGET_TYPE_SERVICE: 8,
                      TARGET_TYPE_METHOD: 9
                    }
                  },
                  EditionDefault: {
                    fields: {
                      edition: {
                        type: "Edition",
                        id: 3
                      },
                      value: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  FeatureSupport: {
                    fields: {
                      editionIntroduced: {
                        type: "Edition",
                        id: 1
                      },
                      editionDeprecated: {
                        type: "Edition",
                        id: 2
                      },
                      deprecationWarning: {
                        type: "string",
                        id: 3
                      },
                      editionRemoved: {
                        type: "Edition",
                        id: 4
                      }
                    }
                  }
                }
              },
              OneofOptions: {
                edition: "proto2",
                fields: {
                  features: {
                    type: "FeatureSet",
                    id: 1
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ]
              },
              EnumOptions: {
                edition: "proto2",
                fields: {
                  allowAlias: {
                    type: "bool",
                    id: 2
                  },
                  deprecated: {
                    type: "bool",
                    id: 3
                  },
                  deprecatedLegacyJsonFieldConflicts: {
                    type: "bool",
                    id: 6,
                    options: {
                      deprecated: true
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 7
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ],
                reserved: [
                  [
                    5,
                    5
                  ]
                ]
              },
              EnumValueOptions: {
                edition: "proto2",
                fields: {
                  deprecated: {
                    type: "bool",
                    id: 1
                  },
                  features: {
                    type: "FeatureSet",
                    id: 2
                  },
                  debugRedact: {
                    type: "bool",
                    id: 3
                  },
                  featureSupport: {
                    type: "FieldOptions.FeatureSupport",
                    id: 4
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ]
              },
              ServiceOptions: {
                edition: "proto2",
                fields: {
                  features: {
                    type: "FeatureSet",
                    id: 34
                  },
                  deprecated: {
                    type: "bool",
                    id: 33
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ]
              },
              MethodOptions: {
                edition: "proto2",
                fields: {
                  deprecated: {
                    type: "bool",
                    id: 33
                  },
                  idempotencyLevel: {
                    type: "IdempotencyLevel",
                    id: 34,
                    options: {
                      default: "IDEMPOTENCY_UNKNOWN"
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 35
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [
                  [
                    1000,
                    536870911
                  ]
                ],
                nested: {
                  IdempotencyLevel: {
                    values: {
                      IDEMPOTENCY_UNKNOWN: 0,
                      NO_SIDE_EFFECTS: 1,
                      IDEMPOTENT: 2
                    }
                  }
                }
              },
              UninterpretedOption: {
                edition: "proto2",
                fields: {
                  name: {
                    rule: "repeated",
                    type: "NamePart",
                    id: 2
                  },
                  identifierValue: {
                    type: "string",
                    id: 3
                  },
                  positiveIntValue: {
                    type: "uint64",
                    id: 4
                  },
                  negativeIntValue: {
                    type: "int64",
                    id: 5
                  },
                  doubleValue: {
                    type: "double",
                    id: 6
                  },
                  stringValue: {
                    type: "bytes",
                    id: 7
                  },
                  aggregateValue: {
                    type: "string",
                    id: 8
                  }
                },
                nested: {
                  NamePart: {
                    fields: {
                      namePart: {
                        rule: "required",
                        type: "string",
                        id: 1
                      },
                      isExtension: {
                        rule: "required",
                        type: "bool",
                        id: 2
                      }
                    }
                  }
                }
              },
              FeatureSet: {
                edition: "proto2",
                fields: {
                  fieldPresence: {
                    type: "FieldPresence",
                    id: 1,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_2023",
                      "edition_defaults.value": "EXPLICIT"
                    }
                  },
                  enumType: {
                    type: "EnumType",
                    id: 2,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "OPEN"
                    }
                  },
                  repeatedFieldEncoding: {
                    type: "RepeatedFieldEncoding",
                    id: 3,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "PACKED"
                    }
                  },
                  utf8Validation: {
                    type: "Utf8Validation",
                    id: 4,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "VERIFY"
                    }
                  },
                  messageEncoding: {
                    type: "MessageEncoding",
                    id: 5,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_LEGACY",
                      "edition_defaults.value": "LENGTH_PREFIXED"
                    }
                  },
                  jsonFormat: {
                    type: "JsonFormat",
                    id: 6,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "ALLOW"
                    }
                  },
                  enforceNamingStyle: {
                    type: "EnforceNamingStyle",
                    id: 7,
                    options: {
                      retention: "RETENTION_SOURCE",
                      targets: "TARGET_TYPE_METHOD",
                      "feature_support.edition_introduced": "EDITION_2024",
                      "edition_defaults.edition": "EDITION_2024",
                      "edition_defaults.value": "STYLE2024"
                    }
                  },
                  defaultSymbolVisibility: {
                    type: "VisibilityFeature.DefaultSymbolVisibility",
                    id: 8,
                    options: {
                      retention: "RETENTION_SOURCE",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2024",
                      "edition_defaults.edition": "EDITION_2024",
                      "edition_defaults.value": "EXPORT_TOP_LEVEL"
                    }
                  }
                },
                extensions: [
                  [
                    1000,
                    9994
                  ],
                  [
                    9995,
                    9999
                  ],
                  [
                    1e4,
                    1e4
                  ]
                ],
                reserved: [
                  [
                    999,
                    999
                  ]
                ],
                nested: {
                  FieldPresence: {
                    values: {
                      FIELD_PRESENCE_UNKNOWN: 0,
                      EXPLICIT: 1,
                      IMPLICIT: 2,
                      LEGACY_REQUIRED: 3
                    }
                  },
                  EnumType: {
                    values: {
                      ENUM_TYPE_UNKNOWN: 0,
                      OPEN: 1,
                      CLOSED: 2
                    }
                  },
                  RepeatedFieldEncoding: {
                    values: {
                      REPEATED_FIELD_ENCODING_UNKNOWN: 0,
                      PACKED: 1,
                      EXPANDED: 2
                    }
                  },
                  Utf8Validation: {
                    values: {
                      UTF8_VALIDATION_UNKNOWN: 0,
                      VERIFY: 2,
                      NONE: 3
                    }
                  },
                  MessageEncoding: {
                    values: {
                      MESSAGE_ENCODING_UNKNOWN: 0,
                      LENGTH_PREFIXED: 1,
                      DELIMITED: 2
                    }
                  },
                  JsonFormat: {
                    values: {
                      JSON_FORMAT_UNKNOWN: 0,
                      ALLOW: 1,
                      LEGACY_BEST_EFFORT: 2
                    }
                  },
                  EnforceNamingStyle: {
                    values: {
                      ENFORCE_NAMING_STYLE_UNKNOWN: 0,
                      STYLE2024: 1,
                      STYLE_LEGACY: 2
                    }
                  },
                  VisibilityFeature: {
                    fields: {},
                    reserved: [
                      [
                        1,
                        536870911
                      ]
                    ],
                    nested: {
                      DefaultSymbolVisibility: {
                        values: {
                          DEFAULT_SYMBOL_VISIBILITY_UNKNOWN: 0,
                          EXPORT_ALL: 1,
                          EXPORT_TOP_LEVEL: 2,
                          LOCAL_ALL: 3,
                          STRICT: 4
                        }
                      }
                    }
                  }
                }
              },
              FeatureSetDefaults: {
                edition: "proto2",
                fields: {
                  defaults: {
                    rule: "repeated",
                    type: "FeatureSetEditionDefault",
                    id: 1
                  },
                  minimumEdition: {
                    type: "Edition",
                    id: 4
                  },
                  maximumEdition: {
                    type: "Edition",
                    id: 5
                  }
                },
                nested: {
                  FeatureSetEditionDefault: {
                    fields: {
                      edition: {
                        type: "Edition",
                        id: 3
                      },
                      overridableFeatures: {
                        type: "FeatureSet",
                        id: 4
                      },
                      fixedFeatures: {
                        type: "FeatureSet",
                        id: 5
                      }
                    },
                    reserved: [
                      [
                        1,
                        1
                      ],
                      [
                        2,
                        2
                      ],
                      "features"
                    ]
                  }
                }
              },
              SourceCodeInfo: {
                edition: "proto2",
                fields: {
                  location: {
                    rule: "repeated",
                    type: "Location",
                    id: 1
                  }
                },
                extensions: [
                  [
                    536000000,
                    536000000
                  ]
                ],
                nested: {
                  Location: {
                    fields: {
                      path: {
                        rule: "repeated",
                        type: "int32",
                        id: 1,
                        options: {
                          packed: true
                        }
                      },
                      span: {
                        rule: "repeated",
                        type: "int32",
                        id: 2,
                        options: {
                          packed: true
                        }
                      },
                      leadingComments: {
                        type: "string",
                        id: 3
                      },
                      trailingComments: {
                        type: "string",
                        id: 4
                      },
                      leadingDetachedComments: {
                        rule: "repeated",
                        type: "string",
                        id: 6
                      }
                    }
                  }
                }
              },
              GeneratedCodeInfo: {
                edition: "proto2",
                fields: {
                  annotation: {
                    rule: "repeated",
                    type: "Annotation",
                    id: 1
                  }
                },
                nested: {
                  Annotation: {
                    fields: {
                      path: {
                        rule: "repeated",
                        type: "int32",
                        id: 1,
                        options: {
                          packed: true
                        }
                      },
                      sourceFile: {
                        type: "string",
                        id: 2
                      },
                      begin: {
                        type: "int32",
                        id: 3
                      },
                      end: {
                        type: "int32",
                        id: 4
                      },
                      semantic: {
                        type: "Semantic",
                        id: 5
                      }
                    },
                    nested: {
                      Semantic: {
                        values: {
                          NONE: 0,
                          SET: 1,
                          ALIAS: 2
                        }
                      }
                    }
                  }
                }
              },
              SymbolVisibility: {
                edition: "proto2",
                values: {
                  VISIBILITY_UNSET: 0,
                  VISIBILITY_LOCAL: 1,
                  VISIBILITY_EXPORT: 2
                }
              }
            }
          }
        }
      }
    }
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/ext/descriptor/index.js
var require_descriptor2 = __commonJS((exports, module) => {
  var $protobuf = require_src4();
  module.exports = exports = $protobuf.descriptor = $protobuf.Root.fromJSON(require_descriptor()).lookup(".google.protobuf");
  var Namespace = $protobuf.Namespace;
  var Root = $protobuf.Root;
  var Enum = $protobuf.Enum;
  var Type = $protobuf.Type;
  var Field = $protobuf.Field;
  var MapField = $protobuf.MapField;
  var OneOf = $protobuf.OneOf;
  var Service = $protobuf.Service;
  var Method = $protobuf.Method;
  Root.fromDescriptor = function fromDescriptor(descriptor) {
    if (typeof descriptor.length === "number")
      descriptor = exports.FileDescriptorSet.decode(descriptor);
    var root = new Root;
    if (descriptor.file) {
      var fileDescriptor, filePackage;
      for (var j = 0, i;j < descriptor.file.length; ++j) {
        filePackage = root;
        if ((fileDescriptor = descriptor.file[j])["package"] && fileDescriptor["package"].length)
          filePackage = root.define(fileDescriptor["package"]);
        var edition = editionFromDescriptor(fileDescriptor);
        if (fileDescriptor.name && fileDescriptor.name.length)
          root.files.push(filePackage.filename = fileDescriptor.name);
        if (fileDescriptor.messageType)
          for (i = 0;i < fileDescriptor.messageType.length; ++i)
            filePackage.add(Type.fromDescriptor(fileDescriptor.messageType[i], edition));
        if (fileDescriptor.enumType)
          for (i = 0;i < fileDescriptor.enumType.length; ++i)
            filePackage.add(Enum.fromDescriptor(fileDescriptor.enumType[i], edition));
        if (fileDescriptor.extension)
          for (i = 0;i < fileDescriptor.extension.length; ++i)
            filePackage.add(Field.fromDescriptor(fileDescriptor.extension[i], edition));
        if (fileDescriptor.service)
          for (i = 0;i < fileDescriptor.service.length; ++i)
            filePackage.add(Service.fromDescriptor(fileDescriptor.service[i], edition));
        var opts = fromDescriptorOptions(fileDescriptor.options, exports.FileOptions);
        if (opts) {
          var ks = Object.keys(opts);
          for (i = 0;i < ks.length; ++i)
            filePackage.setOption(ks[i], opts[ks[i]]);
        }
      }
    }
    return root.resolveAll();
  };
  Root.prototype.toDescriptor = function toDescriptor(edition) {
    var set = exports.FileDescriptorSet.create();
    Root_toDescriptorRecursive(this, set.file, edition);
    return set;
  };
  function Root_toDescriptorRecursive(ns, files, edition) {
    var file = exports.FileDescriptorProto.create({ name: ns.filename || (ns.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto" });
    editionToDescriptor(edition, file);
    if (!(ns instanceof Root))
      file["package"] = ns.fullName.substring(1);
    for (var i = 0, nested;i < ns.nestedArray.length; ++i)
      if ((nested = ns._nestedArray[i]) instanceof Type)
        file.messageType.push(nested.toDescriptor(edition));
      else if (nested instanceof Enum)
        file.enumType.push(nested.toDescriptor());
      else if (nested instanceof Field)
        file.extension.push(nested.toDescriptor(edition));
      else if (nested instanceof Service)
        file.service.push(nested.toDescriptor());
      else if (nested instanceof Namespace)
        Root_toDescriptorRecursive(nested, files, edition);
    file.options = toDescriptorOptions(ns.options, exports.FileOptions);
    if (file.messageType.length + file.enumType.length + file.extension.length + file.service.length)
      files.push(file);
  }
  var unnamedMessageIndex = 0;
  Type.fromDescriptor = function fromDescriptor(descriptor, edition, nested) {
    if (typeof descriptor.length === "number")
      descriptor = exports.DescriptorProto.decode(descriptor);
    var type = new Type(descriptor.name.length ? descriptor.name : "Type" + unnamedMessageIndex++, fromDescriptorOptions(descriptor.options, exports.MessageOptions)), i;
    if (!nested)
      type._edition = edition;
    if (descriptor.oneofDecl)
      for (i = 0;i < descriptor.oneofDecl.length; ++i)
        type.add(OneOf.fromDescriptor(descriptor.oneofDecl[i]));
    if (descriptor.field)
      for (i = 0;i < descriptor.field.length; ++i) {
        var field = Field.fromDescriptor(descriptor.field[i], edition, true);
        type.add(field);
        if (descriptor.field[i].hasOwnProperty("oneofIndex"))
          type.oneofsArray[descriptor.field[i].oneofIndex].add(field);
      }
    if (descriptor.extension)
      for (i = 0;i < descriptor.extension.length; ++i)
        type.add(Field.fromDescriptor(descriptor.extension[i], edition, true));
    if (descriptor.nestedType)
      for (i = 0;i < descriptor.nestedType.length; ++i) {
        type.add(Type.fromDescriptor(descriptor.nestedType[i], edition, true));
        if (descriptor.nestedType[i].options && descriptor.nestedType[i].options.mapEntry)
          type.setOption("map_entry", true);
      }
    if (descriptor.enumType)
      for (i = 0;i < descriptor.enumType.length; ++i)
        type.add(Enum.fromDescriptor(descriptor.enumType[i], edition, true));
    if (descriptor.extensionRange && descriptor.extensionRange.length) {
      type.extensions = [];
      for (i = 0;i < descriptor.extensionRange.length; ++i)
        type.extensions.push([descriptor.extensionRange[i].start, descriptor.extensionRange[i].end]);
    }
    if (descriptor.reservedRange && descriptor.reservedRange.length || descriptor.reservedName && descriptor.reservedName.length) {
      type.reserved = [];
      if (descriptor.reservedRange)
        for (i = 0;i < descriptor.reservedRange.length; ++i)
          type.reserved.push([descriptor.reservedRange[i].start, descriptor.reservedRange[i].end]);
      if (descriptor.reservedName)
        for (i = 0;i < descriptor.reservedName.length; ++i)
          type.reserved.push(descriptor.reservedName[i]);
    }
    return type;
  };
  Type.prototype.toDescriptor = function toDescriptor(edition) {
    var descriptor = exports.DescriptorProto.create({ name: this.name }), i;
    for (i = 0;i < this.fieldsArray.length; ++i) {
      var fieldDescriptor;
      descriptor.field.push(fieldDescriptor = this._fieldsArray[i].toDescriptor(edition));
      if (this._fieldsArray[i] instanceof MapField) {
        var keyType = toDescriptorType(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType, false), valueType = toDescriptorType(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType, false), valueTypeName = valueType === 11 || valueType === 14 ? this._fieldsArray[i].resolvedType && shortname(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : undefined;
        descriptor.nestedType.push(exports.DescriptorProto.create({
          name: fieldDescriptor.typeName,
          field: [
            exports.FieldDescriptorProto.create({ name: "key", number: 1, label: 1, type: keyType }),
            exports.FieldDescriptorProto.create({ name: "value", number: 2, label: 1, type: valueType, typeName: valueTypeName })
          ],
          options: exports.MessageOptions.create({ mapEntry: true })
        }));
      }
    }
    for (i = 0;i < this.oneofsArray.length; ++i)
      descriptor.oneofDecl.push(this._oneofsArray[i].toDescriptor());
    for (i = 0;i < this.nestedArray.length; ++i) {
      if (this._nestedArray[i] instanceof Field)
        descriptor.field.push(this._nestedArray[i].toDescriptor(edition));
      else if (this._nestedArray[i] instanceof Type)
        descriptor.nestedType.push(this._nestedArray[i].toDescriptor(edition));
      else if (this._nestedArray[i] instanceof Enum)
        descriptor.enumType.push(this._nestedArray[i].toDescriptor());
    }
    if (this.extensions)
      for (i = 0;i < this.extensions.length; ++i)
        descriptor.extensionRange.push(exports.DescriptorProto.ExtensionRange.create({ start: this.extensions[i][0], end: this.extensions[i][1] }));
    if (this.reserved)
      for (i = 0;i < this.reserved.length; ++i)
        if (typeof this.reserved[i] === "string")
          descriptor.reservedName.push(this.reserved[i]);
        else
          descriptor.reservedRange.push(exports.DescriptorProto.ReservedRange.create({ start: this.reserved[i][0], end: this.reserved[i][1] }));
    descriptor.options = toDescriptorOptions(this.options, exports.MessageOptions);
    return descriptor;
  };
  var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  Field.fromDescriptor = function fromDescriptor(descriptor, edition, nested) {
    if (typeof descriptor.length === "number")
      descriptor = exports.DescriptorProto.decode(descriptor);
    if (typeof descriptor.number !== "number")
      throw Error("missing field id");
    var fieldType;
    if (descriptor.typeName && descriptor.typeName.length)
      fieldType = descriptor.typeName;
    else
      fieldType = fromDescriptorType(descriptor.type);
    var fieldRule;
    switch (descriptor.label) {
      case 1:
        fieldRule = undefined;
        break;
      case 2:
        fieldRule = "required";
        break;
      case 3:
        fieldRule = "repeated";
        break;
      default:
        throw Error("illegal label: " + descriptor.label);
    }
    var extendee = descriptor.extendee;
    if (descriptor.extendee !== undefined) {
      extendee = extendee.length ? extendee : undefined;
    }
    var field = new Field(descriptor.name.length ? descriptor.name : "field" + descriptor.number, descriptor.number, fieldType, fieldRule, extendee);
    if (!nested)
      field._edition = edition;
    field.options = fromDescriptorOptions(descriptor.options, exports.FieldOptions);
    if (descriptor.proto3_optional)
      field.options.proto3_optional = true;
    if (descriptor.defaultValue && descriptor.defaultValue.length) {
      var defaultValue = descriptor.defaultValue;
      switch (defaultValue) {
        case "true":
        case "TRUE":
          defaultValue = true;
          break;
        case "false":
        case "FALSE":
          defaultValue = false;
          break;
        default:
          var match = numberRe.exec(defaultValue);
          if (match)
            defaultValue = parseInt(defaultValue);
          break;
      }
      field.setOption("default", defaultValue);
    }
    if (packableDescriptorType(descriptor.type)) {
      if (edition === "proto3") {
        if (descriptor.options && !descriptor.options.packed)
          field.setOption("packed", false);
      } else if ((!edition || edition === "proto2") && descriptor.options && descriptor.options.packed)
        field.setOption("packed", true);
    }
    return field;
  };
  Field.prototype.toDescriptor = function toDescriptor(edition) {
    var descriptor = exports.FieldDescriptorProto.create({ name: this.name, number: this.id });
    if (this.map) {
      descriptor.type = 11;
      descriptor.typeName = $protobuf.util.ucFirst(this.name);
      descriptor.label = 3;
    } else {
      switch (descriptor.type = toDescriptorType(this.type, this.resolve().resolvedType, this.delimited)) {
        case 10:
        case 11:
        case 14:
          descriptor.typeName = this.resolvedType ? shortname(this.parent, this.resolvedType) : this.type;
          break;
      }
      if (this.rule === "repeated") {
        descriptor.label = 3;
      } else if (this.required && edition === "proto2") {
        descriptor.label = 2;
      } else {
        descriptor.label = 1;
      }
    }
    descriptor.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend;
    if (this.partOf) {
      if ((descriptor.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0)
        throw Error("missing oneof");
    }
    if (this.options) {
      descriptor.options = toDescriptorOptions(this.options, exports.FieldOptions);
      if (this.options["default"] != null)
        descriptor.defaultValue = String(this.options["default"]);
      if (this.options.proto3_optional)
        descriptor.proto3_optional = true;
    }
    if (edition === "proto3") {
      if (!this.packed)
        (descriptor.options || (descriptor.options = exports.FieldOptions.create())).packed = false;
    } else if ((!edition || edition === "proto2") && this.packed)
      (descriptor.options || (descriptor.options = exports.FieldOptions.create())).packed = true;
    return descriptor;
  };
  var unnamedEnumIndex = 0;
  Enum.fromDescriptor = function fromDescriptor(descriptor, edition, nested) {
    if (typeof descriptor.length === "number")
      descriptor = exports.EnumDescriptorProto.decode(descriptor);
    var values = {};
    if (descriptor.value)
      for (var i = 0;i < descriptor.value.length; ++i) {
        var name = descriptor.value[i].name, value = descriptor.value[i].number || 0;
        values[name && name.length ? name : "NAME" + value] = value;
      }
    var enm = new Enum(descriptor.name && descriptor.name.length ? descriptor.name : "Enum" + unnamedEnumIndex++, values, fromDescriptorOptions(descriptor.options, exports.EnumOptions));
    if (!nested)
      enm._edition = edition;
    return enm;
  };
  Enum.prototype.toDescriptor = function toDescriptor() {
    var values = [];
    for (var i = 0, ks = Object.keys(this.values);i < ks.length; ++i)
      values.push(exports.EnumValueDescriptorProto.create({ name: ks[i], number: this.values[ks[i]] }));
    return exports.EnumDescriptorProto.create({
      name: this.name,
      value: values,
      options: toDescriptorOptions(this.options, exports.EnumOptions)
    });
  };
  var unnamedOneofIndex = 0;
  OneOf.fromDescriptor = function fromDescriptor(descriptor) {
    if (typeof descriptor.length === "number")
      descriptor = exports.OneofDescriptorProto.decode(descriptor);
    return new OneOf(descriptor.name && descriptor.name.length ? descriptor.name : "oneof" + unnamedOneofIndex++);
  };
  OneOf.prototype.toDescriptor = function toDescriptor() {
    return exports.OneofDescriptorProto.create({
      name: this.name
    });
  };
  var unnamedServiceIndex = 0;
  Service.fromDescriptor = function fromDescriptor(descriptor, edition, nested) {
    if (typeof descriptor.length === "number")
      descriptor = exports.ServiceDescriptorProto.decode(descriptor);
    var service = new Service(descriptor.name && descriptor.name.length ? descriptor.name : "Service" + unnamedServiceIndex++, fromDescriptorOptions(descriptor.options, exports.ServiceOptions));
    if (!nested)
      service._edition = edition;
    if (descriptor.method)
      for (var i = 0;i < descriptor.method.length; ++i)
        service.add(Method.fromDescriptor(descriptor.method[i]));
    return service;
  };
  Service.prototype.toDescriptor = function toDescriptor() {
    var methods = [];
    for (var i = 0;i < this.methodsArray.length; ++i)
      methods.push(this._methodsArray[i].toDescriptor());
    return exports.ServiceDescriptorProto.create({
      name: this.name,
      method: methods,
      options: toDescriptorOptions(this.options, exports.ServiceOptions)
    });
  };
  var unnamedMethodIndex = 0;
  Method.fromDescriptor = function fromDescriptor(descriptor) {
    if (typeof descriptor.length === "number")
      descriptor = exports.MethodDescriptorProto.decode(descriptor);
    return new Method(descriptor.name && descriptor.name.length ? descriptor.name : "Method" + unnamedMethodIndex++, "rpc", descriptor.inputType, descriptor.outputType, Boolean(descriptor.clientStreaming), Boolean(descriptor.serverStreaming), fromDescriptorOptions(descriptor.options, exports.MethodOptions));
  };
  Method.prototype.toDescriptor = function toDescriptor() {
    return exports.MethodDescriptorProto.create({
      name: this.name,
      inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
      outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
      clientStreaming: this.requestStream,
      serverStreaming: this.responseStream,
      options: toDescriptorOptions(this.options, exports.MethodOptions)
    });
  };
  function fromDescriptorType(type) {
    switch (type) {
      case 1:
        return "double";
      case 2:
        return "float";
      case 3:
        return "int64";
      case 4:
        return "uint64";
      case 5:
        return "int32";
      case 6:
        return "fixed64";
      case 7:
        return "fixed32";
      case 8:
        return "bool";
      case 9:
        return "string";
      case 12:
        return "bytes";
      case 13:
        return "uint32";
      case 15:
        return "sfixed32";
      case 16:
        return "sfixed64";
      case 17:
        return "sint32";
      case 18:
        return "sint64";
    }
    throw Error("illegal type: " + type);
  }
  function packableDescriptorType(type) {
    switch (type) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return true;
    }
    return false;
  }
  function toDescriptorType(type, resolvedType, delimited) {
    switch (type) {
      case "double":
        return 1;
      case "float":
        return 2;
      case "int64":
        return 3;
      case "uint64":
        return 4;
      case "int32":
        return 5;
      case "fixed64":
        return 6;
      case "fixed32":
        return 7;
      case "bool":
        return 8;
      case "string":
        return 9;
      case "bytes":
        return 12;
      case "uint32":
        return 13;
      case "sfixed32":
        return 15;
      case "sfixed64":
        return 16;
      case "sint32":
        return 17;
      case "sint64":
        return 18;
    }
    if (resolvedType instanceof Enum)
      return 14;
    if (resolvedType instanceof Type)
      return delimited ? 10 : 11;
    throw Error("illegal type: " + type);
  }
  function fromDescriptorOptionsRecursive(obj, type) {
    var val = {};
    for (var i = 0, field, key;i < type.fieldsArray.length; ++i) {
      if ((key = (field = type._fieldsArray[i]).name) === "uninterpretedOption")
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, key))
        continue;
      var newKey = underScore(key);
      if (field.resolvedType instanceof Type) {
        val[newKey] = fromDescriptorOptionsRecursive(obj[key], field.resolvedType);
      } else if (field.resolvedType instanceof Enum) {
        val[newKey] = field.resolvedType.valuesById[obj[key]];
      } else {
        val[newKey] = obj[key];
      }
    }
    return val;
  }
  function fromDescriptorOptions(options, type) {
    if (!options)
      return;
    return fromDescriptorOptionsRecursive(type.toObject(options), type);
  }
  function toDescriptorOptionsRecursive(obj, type) {
    var val = {};
    var keys = Object.keys(obj);
    for (var i = 0;i < keys.length; ++i) {
      var key = keys[i];
      var newKey = $protobuf.util.camelCase(key);
      if (!Object.prototype.hasOwnProperty.call(type.fields, newKey))
        continue;
      var field = type.fields[newKey];
      if (field.resolvedType instanceof Type) {
        val[newKey] = toDescriptorOptionsRecursive(obj[key], field.resolvedType);
      } else {
        val[newKey] = obj[key];
      }
      if (field.repeated && !Array.isArray(val[newKey])) {
        val[newKey] = [val[newKey]];
      }
    }
    return val;
  }
  function toDescriptorOptions(options, type) {
    if (!options)
      return;
    return type.fromObject(toDescriptorOptionsRecursive(options, type));
  }
  function shortname(from, to) {
    var fromPath = from.fullName.split("."), toPath = to.fullName.split("."), i = 0, j = 0, k = toPath.length - 1;
    if (!(from instanceof Root) && to instanceof Namespace)
      while (i < fromPath.length && j < k && fromPath[i] === toPath[j]) {
        var other = to.lookup(fromPath[i++], true);
        if (other !== null && other !== to)
          break;
        ++j;
      }
    else
      for (;i < fromPath.length && j < k && fromPath[i] === toPath[j]; ++i, ++j)
        ;
    return toPath.slice(j).join(".");
  }
  function underScore(str) {
    return str.substring(0, 1) + str.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function($0, $1) {
      return "_" + $1.toLowerCase();
    });
  }
  function editionFromDescriptor(fileDescriptor) {
    if (fileDescriptor.syntax === "editions") {
      switch (fileDescriptor.edition) {
        case exports.Edition.EDITION_2023:
          return "2023";
        default:
          throw new Error("Unsupported edition " + fileDescriptor.edition);
      }
    }
    if (fileDescriptor.syntax === "proto3") {
      return "proto3";
    }
    return "proto2";
  }
  function editionToDescriptor(edition, fileDescriptor) {
    if (!edition)
      return;
    if (edition === "proto2" || edition === "proto3") {
      fileDescriptor.syntax = edition;
    } else {
      fileDescriptor.syntax = "editions";
      switch (edition) {
        case "2023":
          fileDescriptor.edition = exports.Edition.EDITION_2023;
          break;
        default:
          throw new Error("Unsupported edition " + edition);
      }
    }
  }
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/google/protobuf/api.json
var require_api = __commonJS((exports, module) => {
  module.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              Api: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  methods: {
                    rule: "repeated",
                    type: "Method",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  },
                  version: {
                    type: "string",
                    id: 4
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 5
                  },
                  mixins: {
                    rule: "repeated",
                    type: "Mixin",
                    id: 6
                  },
                  syntax: {
                    type: "Syntax",
                    id: 7
                  }
                }
              },
              Method: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  requestTypeUrl: {
                    type: "string",
                    id: 2
                  },
                  requestStreaming: {
                    type: "bool",
                    id: 3
                  },
                  responseTypeUrl: {
                    type: "string",
                    id: 4
                  },
                  responseStreaming: {
                    type: "bool",
                    id: 5
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 6
                  },
                  syntax: {
                    type: "Syntax",
                    id: 7
                  }
                }
              },
              Mixin: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  root: {
                    type: "string",
                    id: 2
                  }
                }
              },
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Option: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "Any",
                    id: 2
                  }
                }
              },
              Syntax: {
                values: {
                  SYNTAX_PROTO2: 0,
                  SYNTAX_PROTO3: 1
                }
              }
            }
          }
        }
      }
    }
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/google/protobuf/source_context.json
var require_source_context = __commonJS((exports, module) => {
  module.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          }
        }
      }
    }
  };
});

// node_modules/.bun/protobufjs@7.5.5/node_modules/protobufjs/google/protobuf/type.json
var require_type2 = __commonJS((exports, module) => {
  module.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              Type: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  fields: {
                    rule: "repeated",
                    type: "Field",
                    id: 2
                  },
                  oneofs: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 4
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 5
                  },
                  syntax: {
                    type: "Syntax",
                    id: 6
                  }
                }
              },
              Field: {
                fields: {
                  kind: {
                    type: "Kind",
                    id: 1
                  },
                  cardinality: {
                    type: "Cardinality",
                    id: 2
                  },
                  number: {
                    type: "int32",
                    id: 3
                  },
                  name: {
                    type: "string",
                    id: 4
                  },
                  typeUrl: {
                    type: "string",
                    id: 6
                  },
                  oneofIndex: {
                    type: "int32",
                    id: 7
                  },
                  packed: {
                    type: "bool",
                    id: 8
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 9
                  },
                  jsonName: {
                    type: "string",
                    id: 10
                  },
                  defaultValue: {
                    type: "string",
                    id: 11
                  }
                },
                nested: {
                  Kind: {
                    values: {
                      TYPE_UNKNOWN: 0,
                      TYPE_DOUBLE: 1,
                      TYPE_FLOAT: 2,
                      TYPE_INT64: 3,
                      TYPE_UINT64: 4,
                      TYPE_INT32: 5,
                      TYPE_FIXED64: 6,
                      TYPE_FIXED32: 7,
                      TYPE_BOOL: 8,
                      TYPE_STRING: 9,
                      TYPE_GROUP: 10,
                      TYPE_MESSAGE: 11,
                      TYPE_BYTES: 12,
                      TYPE_UINT32: 13,
                      TYPE_ENUM: 14,
                      TYPE_SFIXED32: 15,
                      TYPE_SFIXED64: 16,
                      TYPE_SINT32: 17,
                      TYPE_SINT64: 18
                    }
                  },
                  Cardinality: {
                    values: {
                      CARDINALITY_UNKNOWN: 0,
                      CARDINALITY_OPTIONAL: 1,
                      CARDINALITY_REQUIRED: 2,
                      CARDINALITY_REPEATED: 3
                    }
                  }
                }
              },
              Enum: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  enumvalue: {
                    rule: "repeated",
                    type: "EnumValue",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 4
                  },
                  syntax: {
                    type: "Syntax",
                    id: 5
                  }
                }
              },
              EnumValue: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  number: {
                    type: "int32",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  }
                }
              },
              Option: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "Any",
                    id: 2
                  }
                }
              },
              Syntax: {
                values: {
                  SYNTAX_PROTO2: 0,
                  SYNTAX_PROTO3: 1
                }
              },
              Any: {
                fields: {
                  type_url: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          }
        }
      }
    }
  };
});

// node_modules/.bun/@grpc+proto-loader@0.8.0/node_modules/@grpc/proto-loader/build/src/util.js
var require_util2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.addCommonProtos = exports.loadProtosWithOptionsSync = exports.loadProtosWithOptions = undefined;
  var fs = __require("fs");
  var path = __require("path");
  var Protobuf = require_src4();
  function addIncludePathResolver(root, includePaths) {
    const originalResolvePath = root.resolvePath;
    root.resolvePath = (origin, target) => {
      if (path.isAbsolute(target)) {
        return target;
      }
      for (const directory of includePaths) {
        const fullPath = path.join(directory, target);
        try {
          fs.accessSync(fullPath, fs.constants.R_OK);
          return fullPath;
        } catch (err) {
          continue;
        }
      }
      process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);
      return originalResolvePath(origin, target);
    };
  }
  async function loadProtosWithOptions(filename, options) {
    const root = new Protobuf.Root;
    options = options || {};
    if (!!options.includeDirs) {
      if (!Array.isArray(options.includeDirs)) {
        return Promise.reject(new Error("The includeDirs option must be an array"));
      }
      addIncludePathResolver(root, options.includeDirs);
    }
    const loadedRoot = await root.load(filename, options);
    loadedRoot.resolveAll();
    return loadedRoot;
  }
  exports.loadProtosWithOptions = loadProtosWithOptions;
  function loadProtosWithOptionsSync(filename, options) {
    const root = new Protobuf.Root;
    options = options || {};
    if (!!options.includeDirs) {
      if (!Array.isArray(options.includeDirs)) {
        throw new Error("The includeDirs option must be an array");
      }
      addIncludePathResolver(root, options.includeDirs);
    }
    const loadedRoot = root.loadSync(filename, options);
    loadedRoot.resolveAll();
    return loadedRoot;
  }
  exports.loadProtosWithOptionsSync = loadProtosWithOptionsSync;
  function addCommonProtos() {
    const apiDescriptor = require_api();
    const descriptorDescriptor = require_descriptor();
    const sourceContextDescriptor = require_source_context();
    const typeDescriptor = require_type2();
    Protobuf.common("api", apiDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common("descriptor", descriptorDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common("source_context", sourceContextDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common("type", typeDescriptor.nested.google.nested.protobuf.nested);
  }
  exports.addCommonProtos = addCommonProtos;
});

// node_modules/.bun/long@5.3.2/node_modules/long/umd/index.js
var require_umd = __commonJS((exports, module) => {
  (function(global2, factory) {
    function preferDefault(exports2) {
      return exports2.default || exports2;
    }
    if (typeof define === "function" && define.amd) {
      define([], function() {
        var exports2 = {};
        factory(exports2);
        return preferDefault(exports2);
      });
    } else if (typeof exports === "object") {
      factory(exports);
      if (typeof module === "object")
        module.exports = preferDefault(exports);
    } else {
      (function() {
        var exports2 = {};
        factory(exports2);
        global2.Long = preferDefault(exports2);
      })();
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(_exports) {
    Object.defineProperty(_exports, "__esModule", {
      value: true
    });
    _exports.default = undefined;
    var wasm = null;
    try {
      wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        13,
        2,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        1,
        127,
        3,
        7,
        6,
        0,
        1,
        1,
        1,
        1,
        1,
        6,
        6,
        1,
        127,
        1,
        65,
        0,
        11,
        7,
        50,
        6,
        3,
        109,
        117,
        108,
        0,
        1,
        5,
        100,
        105,
        118,
        95,
        115,
        0,
        2,
        5,
        100,
        105,
        118,
        95,
        117,
        0,
        3,
        5,
        114,
        101,
        109,
        95,
        115,
        0,
        4,
        5,
        114,
        101,
        109,
        95,
        117,
        0,
        5,
        8,
        103,
        101,
        116,
        95,
        104,
        105,
        103,
        104,
        0,
        0,
        10,
        191,
        1,
        6,
        4,
        0,
        35,
        0,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        126,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        127,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        128,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        129,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        130,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11
      ])), {}).exports;
    } catch {}
    function Long(low, high, unsigned) {
      this.low = low | 0;
      this.high = high | 0;
      this.unsigned = !!unsigned;
    }
    Long.prototype.__isLong__;
    Object.defineProperty(Long.prototype, "__isLong__", {
      value: true
    });
    function isLong(obj) {
      return (obj && obj["__isLong__"]) === true;
    }
    function ctz32(value) {
      var c = Math.clz32(value & -value);
      return value ? 31 - c : c;
    }
    Long.isLong = isLong;
    var INT_CACHE = {};
    var UINT_CACHE = {};
    function fromInt(value, unsigned) {
      var obj, cachedObj, cache;
      if (unsigned) {
        value >>>= 0;
        if (cache = 0 <= value && value < 256) {
          cachedObj = UINT_CACHE[value];
          if (cachedObj)
            return cachedObj;
        }
        obj = fromBits(value, 0, true);
        if (cache)
          UINT_CACHE[value] = obj;
        return obj;
      } else {
        value |= 0;
        if (cache = -128 <= value && value < 128) {
          cachedObj = INT_CACHE[value];
          if (cachedObj)
            return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
          INT_CACHE[value] = obj;
        return obj;
      }
    }
    Long.fromInt = fromInt;
    function fromNumber(value, unsigned) {
      if (isNaN(value))
        return unsigned ? UZERO : ZERO;
      if (unsigned) {
        if (value < 0)
          return UZERO;
        if (value >= TWO_PWR_64_DBL)
          return MAX_UNSIGNED_VALUE;
      } else {
        if (value <= -TWO_PWR_63_DBL)
          return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
          return MAX_VALUE;
      }
      if (value < 0)
        return fromNumber(-value, unsigned).neg();
      return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
    }
    Long.fromNumber = fromNumber;
    function fromBits(lowBits, highBits, unsigned) {
      return new Long(lowBits, highBits, unsigned);
    }
    Long.fromBits = fromBits;
    var pow_dbl = Math.pow;
    function fromString(str, unsigned, radix) {
      if (str.length === 0)
        throw Error("empty string");
      if (typeof unsigned === "number") {
        radix = unsigned;
        unsigned = false;
      } else {
        unsigned = !!unsigned;
      }
      if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return unsigned ? UZERO : ZERO;
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
        throw RangeError("radix");
      var p;
      if ((p = str.indexOf("-")) > 0)
        throw Error("interior hyphen");
      else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
      }
      var radixToPower = fromNumber(pow_dbl(radix, 8));
      var result = ZERO;
      for (var i = 0;i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
          var power = fromNumber(pow_dbl(radix, size));
          result = result.mul(power).add(fromNumber(value));
        } else {
          result = result.mul(radixToPower);
          result = result.add(fromNumber(value));
        }
      }
      result.unsigned = unsigned;
      return result;
    }
    Long.fromString = fromString;
    function fromValue(val, unsigned) {
      if (typeof val === "number")
        return fromNumber(val, unsigned);
      if (typeof val === "string")
        return fromString(val, unsigned);
      return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
    }
    Long.fromValue = fromValue;
    var TWO_PWR_16_DBL = 1 << 16;
    var TWO_PWR_24_DBL = 1 << 24;
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    var ZERO = fromInt(0);
    Long.ZERO = ZERO;
    var UZERO = fromInt(0, true);
    Long.UZERO = UZERO;
    var ONE = fromInt(1);
    Long.ONE = ONE;
    var UONE = fromInt(1, true);
    Long.UONE = UONE;
    var NEG_ONE = fromInt(-1);
    Long.NEG_ONE = NEG_ONE;
    var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
    Long.MAX_VALUE = MAX_VALUE;
    var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
    Long.MIN_VALUE = MIN_VALUE;
    var LongPrototype = Long.prototype;
    LongPrototype.toInt = function toInt() {
      return this.unsigned ? this.low >>> 0 : this.low;
    };
    LongPrototype.toNumber = function toNumber() {
      if (this.unsigned)
        return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
      return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    LongPrototype.toString = function toString(radix) {
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
        throw RangeError("radix");
      if (this.isZero())
        return "0";
      if (this.isNegative()) {
        if (this.eq(MIN_VALUE)) {
          var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
          return div.toString(radix) + rem1.toInt().toString(radix);
        } else
          return "-" + this.neg().toString(radix);
      }
      var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
      var result = "";
      while (true) {
        var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
          return digits + result;
        else {
          while (digits.length < 6)
            digits = "0" + digits;
          result = "" + digits + result;
        }
      }
    };
    LongPrototype.getHighBits = function getHighBits() {
      return this.high;
    };
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
      return this.high >>> 0;
    };
    LongPrototype.getLowBits = function getLowBits() {
      return this.low;
    };
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
      return this.low >>> 0;
    };
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
      if (this.isNegative())
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
      var val = this.high != 0 ? this.high : this.low;
      for (var bit = 31;bit > 0; bit--)
        if ((val & 1 << bit) != 0)
          break;
      return this.high != 0 ? bit + 33 : bit + 1;
    };
    LongPrototype.isSafeInteger = function isSafeInteger() {
      var top11Bits = this.high >> 21;
      if (!top11Bits)
        return true;
      if (this.unsigned)
        return false;
      return top11Bits === -1 && !(this.low === 0 && this.high === -2097152);
    };
    LongPrototype.isZero = function isZero() {
      return this.high === 0 && this.low === 0;
    };
    LongPrototype.eqz = LongPrototype.isZero;
    LongPrototype.isNegative = function isNegative() {
      return !this.unsigned && this.high < 0;
    };
    LongPrototype.isPositive = function isPositive() {
      return this.unsigned || this.high >= 0;
    };
    LongPrototype.isOdd = function isOdd() {
      return (this.low & 1) === 1;
    };
    LongPrototype.isEven = function isEven() {
      return (this.low & 1) === 0;
    };
    LongPrototype.equals = function equals(other) {
      if (!isLong(other))
        other = fromValue(other);
      if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
        return false;
      return this.high === other.high && this.low === other.low;
    };
    LongPrototype.eq = LongPrototype.equals;
    LongPrototype.notEquals = function notEquals(other) {
      return !this.eq(other);
    };
    LongPrototype.neq = LongPrototype.notEquals;
    LongPrototype.ne = LongPrototype.notEquals;
    LongPrototype.lessThan = function lessThan(other) {
      return this.comp(other) < 0;
    };
    LongPrototype.lt = LongPrototype.lessThan;
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
      return this.comp(other) <= 0;
    };
    LongPrototype.lte = LongPrototype.lessThanOrEqual;
    LongPrototype.le = LongPrototype.lessThanOrEqual;
    LongPrototype.greaterThan = function greaterThan(other) {
      return this.comp(other) > 0;
    };
    LongPrototype.gt = LongPrototype.greaterThan;
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
      return this.comp(other) >= 0;
    };
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;
    LongPrototype.ge = LongPrototype.greaterThanOrEqual;
    LongPrototype.compare = function compare(other) {
      if (!isLong(other))
        other = fromValue(other);
      if (this.eq(other))
        return 0;
      var thisNeg = this.isNegative(), otherNeg = other.isNegative();
      if (thisNeg && !otherNeg)
        return -1;
      if (!thisNeg && otherNeg)
        return 1;
      if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
      return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    LongPrototype.comp = LongPrototype.compare;
    LongPrototype.negate = function negate() {
      if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
      return this.not().add(ONE);
    };
    LongPrototype.neg = LongPrototype.negate;
    LongPrototype.add = function add(addend) {
      if (!isLong(addend))
        addend = fromValue(addend);
      var a48 = this.high >>> 16;
      var a32 = this.high & 65535;
      var a16 = this.low >>> 16;
      var a00 = this.low & 65535;
      var b48 = addend.high >>> 16;
      var b32 = addend.high & 65535;
      var b16 = addend.low >>> 16;
      var b00 = addend.low & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 + b48;
      c48 &= 65535;
      return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    LongPrototype.subtract = function subtract(subtrahend) {
      if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
      return this.add(subtrahend.neg());
    };
    LongPrototype.sub = LongPrototype.subtract;
    LongPrototype.multiply = function multiply(multiplier) {
      if (this.isZero())
        return this;
      if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
      if (wasm) {
        var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm["get_high"](), this.unsigned);
      }
      if (multiplier.isZero())
        return this.unsigned ? UZERO : ZERO;
      if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
      if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;
      if (this.isNegative()) {
        if (multiplier.isNegative())
          return this.neg().mul(multiplier.neg());
        else
          return this.neg().mul(multiplier).neg();
      } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();
      if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
      var a48 = this.high >>> 16;
      var a32 = this.high & 65535;
      var a16 = this.low >>> 16;
      var a00 = this.low & 65535;
      var b48 = multiplier.high >>> 16;
      var b32 = multiplier.high & 65535;
      var b16 = multiplier.low >>> 16;
      var b00 = multiplier.low & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 65535;
      return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    LongPrototype.mul = LongPrototype.multiply;
    LongPrototype.divide = function divide(divisor) {
      if (!isLong(divisor))
        divisor = fromValue(divisor);
      if (divisor.isZero())
        throw Error("division by zero");
      if (wasm) {
        if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
          return this;
        }
        var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
        return fromBits(low, wasm["get_high"](), this.unsigned);
      }
      if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
      var approx, rem, res;
      if (!this.unsigned) {
        if (this.eq(MIN_VALUE)) {
          if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
            return MIN_VALUE;
          else if (divisor.eq(MIN_VALUE))
            return ONE;
          else {
            var halfThis = this.shr(1);
            approx = halfThis.div(divisor).shl(1);
            if (approx.eq(ZERO)) {
              return divisor.isNegative() ? ONE : NEG_ONE;
            } else {
              rem = this.sub(divisor.mul(approx));
              res = approx.add(rem.div(divisor));
              return res;
            }
          }
        } else if (divisor.eq(MIN_VALUE))
          return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
          if (divisor.isNegative())
            return this.neg().div(divisor.neg());
          return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
          return this.div(divisor.neg()).neg();
        res = ZERO;
      } else {
        if (!divisor.unsigned)
          divisor = divisor.toUnsigned();
        if (divisor.gt(this))
          return UZERO;
        if (divisor.gt(this.shru(1)))
          return UONE;
        res = UZERO;
      }
      rem = this;
      while (rem.gte(divisor)) {
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
          approx -= delta;
          approxRes = fromNumber(approx, this.unsigned);
          approxRem = approxRes.mul(divisor);
        }
        if (approxRes.isZero())
          approxRes = ONE;
        res = res.add(approxRes);
        rem = rem.sub(approxRem);
      }
      return res;
    };
    LongPrototype.div = LongPrototype.divide;
    LongPrototype.modulo = function modulo(divisor) {
      if (!isLong(divisor))
        divisor = fromValue(divisor);
      if (wasm) {
        var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
        return fromBits(low, wasm["get_high"](), this.unsigned);
      }
      return this.sub(this.div(divisor).mul(divisor));
    };
    LongPrototype.mod = LongPrototype.modulo;
    LongPrototype.rem = LongPrototype.modulo;
    LongPrototype.not = function not() {
      return fromBits(~this.low, ~this.high, this.unsigned);
    };
    LongPrototype.countLeadingZeros = function countLeadingZeros() {
      return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    };
    LongPrototype.clz = LongPrototype.countLeadingZeros;
    LongPrototype.countTrailingZeros = function countTrailingZeros() {
      return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
    };
    LongPrototype.ctz = LongPrototype.countTrailingZeros;
    LongPrototype.and = function and(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    LongPrototype.or = function or(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    LongPrototype.xor = function xor(other) {
      if (!isLong(other))
        other = fromValue(other);
      return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      else if (numBits < 32)
        return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
      else
        return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    LongPrototype.shl = LongPrototype.shiftLeft;
    LongPrototype.shiftRight = function shiftRight(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      else if (numBits < 32)
        return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
      else
        return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    LongPrototype.shr = LongPrototype.shiftRight;
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      if (numBits < 32)
        return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
      if (numBits === 32)
        return fromBits(this.high, 0, this.unsigned);
      return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
    };
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
    LongPrototype.rotateLeft = function rotateLeft(numBits) {
      var b;
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
      if (numBits < 32) {
        b = 32 - numBits;
        return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
      }
      numBits -= 32;
      b = 32 - numBits;
      return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
    };
    LongPrototype.rotl = LongPrototype.rotateLeft;
    LongPrototype.rotateRight = function rotateRight(numBits) {
      var b;
      if (isLong(numBits))
        numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
        return this;
      if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
      if (numBits < 32) {
        b = 32 - numBits;
        return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
      }
      numBits -= 32;
      b = 32 - numBits;
      return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
    };
    LongPrototype.rotr = LongPrototype.rotateRight;
    LongPrototype.toSigned = function toSigned() {
      if (!this.unsigned)
        return this;
      return fromBits(this.low, this.high, false);
    };
    LongPrototype.toUnsigned = function toUnsigned() {
      if (this.unsigned)
        return this;
      return fromBits(this.low, this.high, true);
    };
    LongPrototype.toBytes = function toBytes(le) {
      return le ? this.toBytesLE() : this.toBytesBE();
    };
    LongPrototype.toBytesLE = function toBytesLE() {
      var hi = this.high, lo = this.low;
      return [
        lo & 255,
        lo >>> 8 & 255,
        lo >>> 16 & 255,
        lo >>> 24,
        hi & 255,
        hi >>> 8 & 255,
        hi >>> 16 & 255,
        hi >>> 24
      ];
    };
    LongPrototype.toBytesBE = function toBytesBE() {
      var hi = this.high, lo = this.low;
      return [
        hi >>> 24,
        hi >>> 16 & 255,
        hi >>> 8 & 255,
        hi & 255,
        lo >>> 24,
        lo >>> 16 & 255,
        lo >>> 8 & 255,
        lo & 255
      ];
    };
    Long.fromBytes = function fromBytes(bytes, unsigned, le) {
      return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    };
    Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
      return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };
    Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };
    if (typeof BigInt === "function") {
      Long.fromBigInt = function fromBigInt(value, unsigned) {
        var lowBits = Number(BigInt.asIntN(32, value));
        var highBits = Number(BigInt.asIntN(32, value >> BigInt(32)));
        return fromBits(lowBits, highBits, unsigned);
      };
      Long.fromValue = function fromValueWithBigInt(value, unsigned) {
        if (typeof value === "bigint")
          return Long.fromBigInt(value, unsigned);
        return fromValue(value, unsigned);
      };
      LongPrototype.toBigInt = function toBigInt() {
        var lowBigInt = BigInt(this.low >>> 0);
        var highBigInt = BigInt(this.unsigned ? this.high >>> 0 : this.high);
        return highBigInt << BigInt(32) | lowBigInt;
      };
    }
    var _default = _exports.default = Long;
  });
});

// node_modules/.bun/@grpc+proto-loader@0.8.0/node_modules/@grpc/proto-loader/build/src/index.js
var require_src5 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.loadFileDescriptorSetFromObject = exports.loadFileDescriptorSetFromBuffer = exports.fromJSON = exports.loadSync = exports.load = exports.IdempotencyLevel = exports.isAnyExtension = exports.Long = undefined;
  var camelCase = require_lodash();
  var Protobuf = require_src4();
  var descriptor = require_descriptor2();
  var util_1 = require_util2();
  var Long = require_umd();
  exports.Long = Long;
  function isAnyExtension(obj) {
    return "@type" in obj && typeof obj["@type"] === "string";
  }
  exports.isAnyExtension = isAnyExtension;
  var IdempotencyLevel;
  (function(IdempotencyLevel2) {
    IdempotencyLevel2["IDEMPOTENCY_UNKNOWN"] = "IDEMPOTENCY_UNKNOWN";
    IdempotencyLevel2["NO_SIDE_EFFECTS"] = "NO_SIDE_EFFECTS";
    IdempotencyLevel2["IDEMPOTENT"] = "IDEMPOTENT";
  })(IdempotencyLevel = exports.IdempotencyLevel || (exports.IdempotencyLevel = {}));
  var descriptorOptions = {
    longs: String,
    enums: String,
    bytes: String,
    defaults: true,
    oneofs: true,
    json: true
  };
  function joinName(baseName, name) {
    if (baseName === "") {
      return name;
    } else {
      return baseName + "." + name;
    }
  }
  function isHandledReflectionObject(obj) {
    return obj instanceof Protobuf.Service || obj instanceof Protobuf.Type || obj instanceof Protobuf.Enum;
  }
  function isNamespaceBase(obj) {
    return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;
  }
  function getAllHandledReflectionObjects(obj, parentName) {
    const objName = joinName(parentName, obj.name);
    if (isHandledReflectionObject(obj)) {
      return [[objName, obj]];
    } else {
      if (isNamespaceBase(obj) && typeof obj.nested !== "undefined") {
        return Object.keys(obj.nested).map((name) => {
          return getAllHandledReflectionObjects(obj.nested[name], objName);
        }).reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
      }
    }
    return [];
  }
  function createDeserializer(cls, options) {
    return function deserialize(argBuf) {
      return cls.toObject(cls.decode(argBuf), options);
    };
  }
  function createSerializer(cls) {
    return function serialize(arg) {
      if (Array.isArray(arg)) {
        throw new Error(`Failed to serialize message: expected object with ${cls.name} structure, got array instead`);
      }
      const message = cls.fromObject(arg);
      return cls.encode(message).finish();
    };
  }
  function mapMethodOptions(options) {
    return (options || []).reduce((obj, item) => {
      for (const [key, value] of Object.entries(item)) {
        switch (key) {
          case "uninterpreted_option":
            obj.uninterpreted_option.push(item.uninterpreted_option);
            break;
          default:
            obj[key] = value;
        }
      }
      return obj;
    }, {
      deprecated: false,
      idempotency_level: IdempotencyLevel.IDEMPOTENCY_UNKNOWN,
      uninterpreted_option: []
    });
  }
  function createMethodDefinition(method, serviceName, options, fileDescriptors) {
    const requestType = method.resolvedRequestType;
    const responseType = method.resolvedResponseType;
    return {
      path: "/" + serviceName + "/" + method.name,
      requestStream: !!method.requestStream,
      responseStream: !!method.responseStream,
      requestSerialize: createSerializer(requestType),
      requestDeserialize: createDeserializer(requestType, options),
      responseSerialize: createSerializer(responseType),
      responseDeserialize: createDeserializer(responseType, options),
      originalName: camelCase(method.name),
      requestType: createMessageDefinition(requestType, options, fileDescriptors),
      responseType: createMessageDefinition(responseType, options, fileDescriptors),
      options: mapMethodOptions(method.parsedOptions)
    };
  }
  function createServiceDefinition(service, name, options, fileDescriptors) {
    const def = {};
    for (const method of service.methodsArray) {
      def[method.name] = createMethodDefinition(method, name, options, fileDescriptors);
    }
    return def;
  }
  function createMessageDefinition(message, options, fileDescriptors) {
    const messageDescriptor = message.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 DescriptorProto",
      type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),
      fileDescriptorProtos: fileDescriptors,
      serialize: createSerializer(message),
      deserialize: createDeserializer(message, options)
    };
  }
  function createEnumDefinition(enumType, fileDescriptors) {
    const enumDescriptor = enumType.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 EnumDescriptorProto",
      type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),
      fileDescriptorProtos: fileDescriptors
    };
  }
  function createDefinition(obj, name, options, fileDescriptors) {
    if (obj instanceof Protobuf.Service) {
      return createServiceDefinition(obj, name, options, fileDescriptors);
    } else if (obj instanceof Protobuf.Type) {
      return createMessageDefinition(obj, options, fileDescriptors);
    } else if (obj instanceof Protobuf.Enum) {
      return createEnumDefinition(obj, fileDescriptors);
    } else {
      throw new Error("Type mismatch in reflection object handling");
    }
  }
  function createPackageDefinition(root, options) {
    const def = {};
    root.resolveAll();
    const descriptorList = root.toDescriptor("proto3").file;
    const bufferList = descriptorList.map((value) => Buffer.from(descriptor.FileDescriptorProto.encode(value).finish()));
    for (const [name, obj] of getAllHandledReflectionObjects(root, "")) {
      def[name] = createDefinition(obj, name, options, bufferList);
    }
    return def;
  }
  function createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options) {
    options = options || {};
    const root = Protobuf.Root.fromDescriptor(decodedDescriptorSet);
    root.resolveAll();
    return createPackageDefinition(root, options);
  }
  function load(filename, options) {
    return (0, util_1.loadProtosWithOptions)(filename, options).then((loadedRoot) => {
      return createPackageDefinition(loadedRoot, options);
    });
  }
  exports.load = load;
  function loadSync(filename, options) {
    const loadedRoot = (0, util_1.loadProtosWithOptionsSync)(filename, options);
    return createPackageDefinition(loadedRoot, options);
  }
  exports.loadSync = loadSync;
  function fromJSON(json, options) {
    options = options || {};
    const loadedRoot = Protobuf.Root.fromJSON(json);
    loadedRoot.resolveAll();
    return createPackageDefinition(loadedRoot, options);
  }
  exports.fromJSON = fromJSON;
  function loadFileDescriptorSetFromBuffer(descriptorSet, options) {
    const decodedDescriptorSet = descriptor.FileDescriptorSet.decode(descriptorSet);
    return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
  }
  exports.loadFileDescriptorSetFromBuffer = loadFileDescriptorSetFromBuffer;
  function loadFileDescriptorSetFromObject(descriptorSet, options) {
    const decodedDescriptorSet = descriptor.FileDescriptorSet.fromObject(descriptorSet);
    return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
  }
  exports.loadFileDescriptorSetFromObject = loadFileDescriptorSetFromObject;
  (0, util_1.addCommonProtos)();
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/channelz.js
var require_channelz = __commonJS((exports) => {
  var __dirname = "/opt/mimo-code/node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.registerChannelzSocket = exports.registerChannelzServer = exports.registerChannelzSubchannel = exports.registerChannelzChannel = exports.ChannelzCallTrackerStub = exports.ChannelzCallTracker = exports.ChannelzChildrenTrackerStub = exports.ChannelzChildrenTracker = exports.ChannelzTrace = exports.ChannelzTraceStub = undefined;
  exports.unregisterChannelzRef = unregisterChannelzRef;
  exports.getChannelzHandlers = getChannelzHandlers;
  exports.getChannelzServiceDefinition = getChannelzServiceDefinition;
  exports.setup = setup;
  var net_1 = __require("net");
  var ordered_map_1 = require_cjs();
  var connectivity_state_1 = require_connectivity_state();
  var constants_1 = require_constants();
  var subchannel_address_1 = require_subchannel_address();
  var admin_1 = require_admin();
  var make_client_1 = require_make_client();
  function channelRefToMessage(ref) {
    return {
      channel_id: ref.id,
      name: ref.name
    };
  }
  function subchannelRefToMessage(ref) {
    return {
      subchannel_id: ref.id,
      name: ref.name
    };
  }
  function serverRefToMessage(ref) {
    return {
      server_id: ref.id
    };
  }
  function socketRefToMessage(ref) {
    return {
      socket_id: ref.id,
      name: ref.name
    };
  }
  var TARGET_RETAINED_TRACES = 32;
  var DEFAULT_MAX_RESULTS = 100;

  class ChannelzTraceStub {
    constructor() {
      this.events = [];
      this.creationTimestamp = new Date;
      this.eventsLogged = 0;
    }
    addTrace() {}
    getTraceMessage() {
      return {
        creation_timestamp: dateToProtoTimestamp(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: []
      };
    }
  }
  exports.ChannelzTraceStub = ChannelzTraceStub;

  class ChannelzTrace {
    constructor() {
      this.events = [];
      this.eventsLogged = 0;
      this.creationTimestamp = new Date;
    }
    addTrace(severity, description, child) {
      const timestamp = new Date;
      this.events.push({
        description,
        severity,
        timestamp,
        childChannel: (child === null || child === undefined ? undefined : child.kind) === "channel" ? child : undefined,
        childSubchannel: (child === null || child === undefined ? undefined : child.kind) === "subchannel" ? child : undefined
      });
      if (this.events.length >= TARGET_RETAINED_TRACES * 2) {
        this.events = this.events.slice(TARGET_RETAINED_TRACES);
      }
      this.eventsLogged += 1;
    }
    getTraceMessage() {
      return {
        creation_timestamp: dateToProtoTimestamp(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: this.events.map((event) => {
          return {
            description: event.description,
            severity: event.severity,
            timestamp: dateToProtoTimestamp(event.timestamp),
            channel_ref: event.childChannel ? channelRefToMessage(event.childChannel) : null,
            subchannel_ref: event.childSubchannel ? subchannelRefToMessage(event.childSubchannel) : null
          };
        })
      };
    }
  }
  exports.ChannelzTrace = ChannelzTrace;

  class ChannelzChildrenTracker {
    constructor() {
      this.channelChildren = new ordered_map_1.OrderedMap;
      this.subchannelChildren = new ordered_map_1.OrderedMap;
      this.socketChildren = new ordered_map_1.OrderedMap;
      this.trackerMap = {
        ["channel"]: this.channelChildren,
        ["subchannel"]: this.subchannelChildren,
        ["socket"]: this.socketChildren
      };
    }
    refChild(child) {
      const tracker = this.trackerMap[child.kind];
      const trackedChild = tracker.find(child.id);
      if (trackedChild.equals(tracker.end())) {
        tracker.setElement(child.id, {
          ref: child,
          count: 1
        }, trackedChild);
      } else {
        trackedChild.pointer[1].count += 1;
      }
    }
    unrefChild(child) {
      const tracker = this.trackerMap[child.kind];
      const trackedChild = tracker.getElementByKey(child.id);
      if (trackedChild !== undefined) {
        trackedChild.count -= 1;
        if (trackedChild.count === 0) {
          tracker.eraseElementByKey(child.id);
        }
      }
    }
    getChildLists() {
      return {
        channels: this.channelChildren,
        subchannels: this.subchannelChildren,
        sockets: this.socketChildren
      };
    }
  }
  exports.ChannelzChildrenTracker = ChannelzChildrenTracker;

  class ChannelzChildrenTrackerStub extends ChannelzChildrenTracker {
    refChild() {}
    unrefChild() {}
  }
  exports.ChannelzChildrenTrackerStub = ChannelzChildrenTrackerStub;

  class ChannelzCallTracker {
    constructor() {
      this.callsStarted = 0;
      this.callsSucceeded = 0;
      this.callsFailed = 0;
      this.lastCallStartedTimestamp = null;
    }
    addCallStarted() {
      this.callsStarted += 1;
      this.lastCallStartedTimestamp = new Date;
    }
    addCallSucceeded() {
      this.callsSucceeded += 1;
    }
    addCallFailed() {
      this.callsFailed += 1;
    }
  }
  exports.ChannelzCallTracker = ChannelzCallTracker;

  class ChannelzCallTrackerStub extends ChannelzCallTracker {
    addCallStarted() {}
    addCallSucceeded() {}
    addCallFailed() {}
  }
  exports.ChannelzCallTrackerStub = ChannelzCallTrackerStub;
  var entityMaps = {
    ["channel"]: new ordered_map_1.OrderedMap,
    ["subchannel"]: new ordered_map_1.OrderedMap,
    ["server"]: new ordered_map_1.OrderedMap,
    ["socket"]: new ordered_map_1.OrderedMap
  };
  var generateRegisterFn = (kind) => {
    let nextId = 1;
    function getNextId() {
      return nextId++;
    }
    const entityMap = entityMaps[kind];
    return (name, getInfo, channelzEnabled) => {
      const id = getNextId();
      const ref = { id, name, kind };
      if (channelzEnabled) {
        entityMap.setElement(id, { ref, getInfo });
      }
      return ref;
    };
  };
  exports.registerChannelzChannel = generateRegisterFn("channel");
  exports.registerChannelzSubchannel = generateRegisterFn("subchannel");
  exports.registerChannelzServer = generateRegisterFn("server");
  exports.registerChannelzSocket = generateRegisterFn("socket");
  function unregisterChannelzRef(ref) {
    entityMaps[ref.kind].eraseElementByKey(ref.id);
  }
  function parseIPv6Section(addressSection) {
    const numberValue = Number.parseInt(addressSection, 16);
    return [numberValue / 256 | 0, numberValue % 256];
  }
  function parseIPv6Chunk(addressChunk) {
    if (addressChunk === "") {
      return [];
    }
    const bytePairs = addressChunk.split(":").map((section) => parseIPv6Section(section));
    const result = [];
    return result.concat(...bytePairs);
  }
  function isIPv6MappedIPv4(ipAddress) {
    return (0, net_1.isIPv6)(ipAddress) && ipAddress.toLowerCase().startsWith("::ffff:") && (0, net_1.isIPv4)(ipAddress.substring(7));
  }
  function ipv4AddressStringToBuffer(ipAddress) {
    return Buffer.from(Uint8Array.from(ipAddress.split(".").map((segment) => Number.parseInt(segment))));
  }
  function ipAddressStringToBuffer(ipAddress) {
    if ((0, net_1.isIPv4)(ipAddress)) {
      return ipv4AddressStringToBuffer(ipAddress);
    } else if (isIPv6MappedIPv4(ipAddress)) {
      return ipv4AddressStringToBuffer(ipAddress.substring(7));
    } else if ((0, net_1.isIPv6)(ipAddress)) {
      let leftSection;
      let rightSection;
      const doubleColonIndex = ipAddress.indexOf("::");
      if (doubleColonIndex === -1) {
        leftSection = ipAddress;
        rightSection = "";
      } else {
        leftSection = ipAddress.substring(0, doubleColonIndex);
        rightSection = ipAddress.substring(doubleColonIndex + 2);
      }
      const leftBuffer = Buffer.from(parseIPv6Chunk(leftSection));
      const rightBuffer = Buffer.from(parseIPv6Chunk(rightSection));
      const middleBuffer = Buffer.alloc(16 - leftBuffer.length - rightBuffer.length, 0);
      return Buffer.concat([leftBuffer, middleBuffer, rightBuffer]);
    } else {
      return null;
    }
  }
  function connectivityStateToMessage(state) {
    switch (state) {
      case connectivity_state_1.ConnectivityState.CONNECTING:
        return {
          state: "CONNECTING"
        };
      case connectivity_state_1.ConnectivityState.IDLE:
        return {
          state: "IDLE"
        };
      case connectivity_state_1.ConnectivityState.READY:
        return {
          state: "READY"
        };
      case connectivity_state_1.ConnectivityState.SHUTDOWN:
        return {
          state: "SHUTDOWN"
        };
      case connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE:
        return {
          state: "TRANSIENT_FAILURE"
        };
      default:
        return {
          state: "UNKNOWN"
        };
    }
  }
  function dateToProtoTimestamp(date) {
    if (!date) {
      return null;
    }
    const millisSinceEpoch = date.getTime();
    return {
      seconds: millisSinceEpoch / 1000 | 0,
      nanos: millisSinceEpoch % 1000 * 1e6
    };
  }
  function getChannelMessage(channelEntry) {
    const resolvedInfo = channelEntry.getInfo();
    const channelRef = [];
    const subchannelRef = [];
    resolvedInfo.children.channels.forEach((el) => {
      channelRef.push(channelRefToMessage(el[1].ref));
    });
    resolvedInfo.children.subchannels.forEach((el) => {
      subchannelRef.push(subchannelRefToMessage(el[1].ref));
    });
    return {
      ref: channelRefToMessage(channelEntry.ref),
      data: {
        target: resolvedInfo.target,
        state: connectivityStateToMessage(resolvedInfo.state),
        calls_started: resolvedInfo.callTracker.callsStarted,
        calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
        calls_failed: resolvedInfo.callTracker.callsFailed,
        last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
        trace: resolvedInfo.trace.getTraceMessage()
      },
      channel_ref: channelRef,
      subchannel_ref: subchannelRef
    };
  }
  function GetChannel(call, callback) {
    const channelId = parseInt(call.request.channel_id, 10);
    const channelEntry = entityMaps["channel"].getElementByKey(channelId);
    if (channelEntry === undefined) {
      callback({
        code: constants_1.Status.NOT_FOUND,
        details: "No channel data found for id " + channelId
      });
      return;
    }
    callback(null, { channel: getChannelMessage(channelEntry) });
  }
  function GetTopChannels(call, callback) {
    const maxResults = parseInt(call.request.max_results, 10) || DEFAULT_MAX_RESULTS;
    const resultList = [];
    const startId = parseInt(call.request.start_channel_id, 10);
    const channelEntries = entityMaps["channel"];
    let i;
    for (i = channelEntries.lowerBound(startId);!i.equals(channelEntries.end()) && resultList.length < maxResults; i = i.next()) {
      resultList.push(getChannelMessage(i.pointer[1]));
    }
    callback(null, {
      channel: resultList,
      end: i.equals(channelEntries.end())
    });
  }
  function getServerMessage(serverEntry) {
    const resolvedInfo = serverEntry.getInfo();
    const listenSocket = [];
    resolvedInfo.listenerChildren.sockets.forEach((el) => {
      listenSocket.push(socketRefToMessage(el[1].ref));
    });
    return {
      ref: serverRefToMessage(serverEntry.ref),
      data: {
        calls_started: resolvedInfo.callTracker.callsStarted,
        calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
        calls_failed: resolvedInfo.callTracker.callsFailed,
        last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
        trace: resolvedInfo.trace.getTraceMessage()
      },
      listen_socket: listenSocket
    };
  }
  function GetServer(call, callback) {
    const serverId = parseInt(call.request.server_id, 10);
    const serverEntries = entityMaps["server"];
    const serverEntry = serverEntries.getElementByKey(serverId);
    if (serverEntry === undefined) {
      callback({
        code: constants_1.Status.NOT_FOUND,
        details: "No server data found for id " + serverId
      });
      return;
    }
    callback(null, { server: getServerMessage(serverEntry) });
  }
  function GetServers(call, callback) {
    const maxResults = parseInt(call.request.max_results, 10) || DEFAULT_MAX_RESULTS;
    const startId = parseInt(call.request.start_server_id, 10);
    const serverEntries = entityMaps["server"];
    const resultList = [];
    let i;
    for (i = serverEntries.lowerBound(startId);!i.equals(serverEntries.end()) && resultList.length < maxResults; i = i.next()) {
      resultList.push(getServerMessage(i.pointer[1]));
    }
    callback(null, {
      server: resultList,
      end: i.equals(serverEntries.end())
    });
  }
  function GetSubchannel(call, callback) {
    const subchannelId = parseInt(call.request.subchannel_id, 10);
    const subchannelEntry = entityMaps["subchannel"].getElementByKey(subchannelId);
    if (subchannelEntry === undefined) {
      callback({
        code: constants_1.Status.NOT_FOUND,
        details: "No subchannel data found for id " + subchannelId
      });
      return;
    }
    const resolvedInfo = subchannelEntry.getInfo();
    const listenSocket = [];
    resolvedInfo.children.sockets.forEach((el) => {
      listenSocket.push(socketRefToMessage(el[1].ref));
    });
    const subchannelMessage = {
      ref: subchannelRefToMessage(subchannelEntry.ref),
      data: {
        target: resolvedInfo.target,
        state: connectivityStateToMessage(resolvedInfo.state),
        calls_started: resolvedInfo.callTracker.callsStarted,
        calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
        calls_failed: resolvedInfo.callTracker.callsFailed,
        last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
        trace: resolvedInfo.trace.getTraceMessage()
      },
      socket_ref: listenSocket
    };
    callback(null, { subchannel: subchannelMessage });
  }
  function subchannelAddressToAddressMessage(subchannelAddress) {
    var _a;
    if ((0, subchannel_address_1.isTcpSubchannelAddress)(subchannelAddress)) {
      return {
        address: "tcpip_address",
        tcpip_address: {
          ip_address: (_a = ipAddressStringToBuffer(subchannelAddress.host)) !== null && _a !== undefined ? _a : undefined,
          port: subchannelAddress.port
        }
      };
    } else {
      return {
        address: "uds_address",
        uds_address: {
          filename: subchannelAddress.path
        }
      };
    }
  }
  function GetSocket(call, callback) {
    var _a, _b, _c, _d, _e;
    const socketId = parseInt(call.request.socket_id, 10);
    const socketEntry = entityMaps["socket"].getElementByKey(socketId);
    if (socketEntry === undefined) {
      callback({
        code: constants_1.Status.NOT_FOUND,
        details: "No socket data found for id " + socketId
      });
      return;
    }
    const resolvedInfo = socketEntry.getInfo();
    const securityMessage = resolvedInfo.security ? {
      model: "tls",
      tls: {
        cipher_suite: resolvedInfo.security.cipherSuiteStandardName ? "standard_name" : "other_name",
        standard_name: (_a = resolvedInfo.security.cipherSuiteStandardName) !== null && _a !== undefined ? _a : undefined,
        other_name: (_b = resolvedInfo.security.cipherSuiteOtherName) !== null && _b !== undefined ? _b : undefined,
        local_certificate: (_c = resolvedInfo.security.localCertificate) !== null && _c !== undefined ? _c : undefined,
        remote_certificate: (_d = resolvedInfo.security.remoteCertificate) !== null && _d !== undefined ? _d : undefined
      }
    } : null;
    const socketMessage = {
      ref: socketRefToMessage(socketEntry.ref),
      local: resolvedInfo.localAddress ? subchannelAddressToAddressMessage(resolvedInfo.localAddress) : null,
      remote: resolvedInfo.remoteAddress ? subchannelAddressToAddressMessage(resolvedInfo.remoteAddress) : null,
      remote_name: (_e = resolvedInfo.remoteName) !== null && _e !== undefined ? _e : undefined,
      security: securityMessage,
      data: {
        keep_alives_sent: resolvedInfo.keepAlivesSent,
        streams_started: resolvedInfo.streamsStarted,
        streams_succeeded: resolvedInfo.streamsSucceeded,
        streams_failed: resolvedInfo.streamsFailed,
        last_local_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastLocalStreamCreatedTimestamp),
        last_remote_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastRemoteStreamCreatedTimestamp),
        messages_received: resolvedInfo.messagesReceived,
        messages_sent: resolvedInfo.messagesSent,
        last_message_received_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageReceivedTimestamp),
        last_message_sent_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageSentTimestamp),
        local_flow_control_window: resolvedInfo.localFlowControlWindow ? { value: resolvedInfo.localFlowControlWindow } : null,
        remote_flow_control_window: resolvedInfo.remoteFlowControlWindow ? { value: resolvedInfo.remoteFlowControlWindow } : null
      }
    };
    callback(null, { socket: socketMessage });
  }
  function GetServerSockets(call, callback) {
    const serverId = parseInt(call.request.server_id, 10);
    const serverEntry = entityMaps["server"].getElementByKey(serverId);
    if (serverEntry === undefined) {
      callback({
        code: constants_1.Status.NOT_FOUND,
        details: "No server data found for id " + serverId
      });
      return;
    }
    const startId = parseInt(call.request.start_socket_id, 10);
    const maxResults = parseInt(call.request.max_results, 10) || DEFAULT_MAX_RESULTS;
    const resolvedInfo = serverEntry.getInfo();
    const allSockets = resolvedInfo.sessionChildren.sockets;
    const resultList = [];
    let i;
    for (i = allSockets.lowerBound(startId);!i.equals(allSockets.end()) && resultList.length < maxResults; i = i.next()) {
      resultList.push(socketRefToMessage(i.pointer[1].ref));
    }
    callback(null, {
      socket_ref: resultList,
      end: i.equals(allSockets.end())
    });
  }
  function getChannelzHandlers() {
    return {
      GetChannel,
      GetTopChannels,
      GetServer,
      GetServers,
      GetSubchannel,
      GetSocket,
      GetServerSockets
    };
  }
  var loadedChannelzDefinition = null;
  function getChannelzServiceDefinition() {
    if (loadedChannelzDefinition) {
      return loadedChannelzDefinition;
    }
    const loaderLoadSync = require_src5().loadSync;
    const loadedProto = loaderLoadSync("channelz.proto", {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [`${__dirname}/../../proto`]
    });
    const channelzGrpcObject = (0, make_client_1.loadPackageDefinition)(loadedProto);
    loadedChannelzDefinition = channelzGrpcObject.grpc.channelz.v1.Channelz.service;
    return loadedChannelzDefinition;
  }
  function setup() {
    (0, admin_1.registerAdminService)(getChannelzServiceDefinition, getChannelzHandlers);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/call-number.js
var require_call_number = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getNextCallNumber = getNextCallNumber;
  var nextCallNumber = 0;
  function getNextCallNumber() {
    return nextCallNumber++;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/compression-algorithms.js
var require_compression_algorithms = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CompressionAlgorithms = undefined;
  var CompressionAlgorithms;
  (function(CompressionAlgorithms2) {
    CompressionAlgorithms2[CompressionAlgorithms2["identity"] = 0] = "identity";
    CompressionAlgorithms2[CompressionAlgorithms2["deflate"] = 1] = "deflate";
    CompressionAlgorithms2[CompressionAlgorithms2["gzip"] = 2] = "gzip";
  })(CompressionAlgorithms || (exports.CompressionAlgorithms = CompressionAlgorithms = {}));
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/filter.js
var require_filter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseFilter = undefined;

  class BaseFilter {
    async sendMetadata(metadata) {
      return metadata;
    }
    receiveMetadata(metadata) {
      return metadata;
    }
    async sendMessage(message) {
      return message;
    }
    async receiveMessage(message) {
      return message;
    }
    receiveTrailers(status) {
      return status;
    }
  }
  exports.BaseFilter = BaseFilter;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/compression-filter.js
var require_compression_filter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CompressionFilterFactory = exports.CompressionFilter = undefined;
  var zlib = __require("zlib");
  var compression_algorithms_1 = require_compression_algorithms();
  var constants_1 = require_constants();
  var filter_1 = require_filter();
  var logging = require_logging();
  var isCompressionAlgorithmKey = (key) => {
    return typeof key === "number" && typeof compression_algorithms_1.CompressionAlgorithms[key] === "string";
  };

  class CompressionHandler {
    async writeMessage(message, compress) {
      let messageBuffer = message;
      if (compress) {
        messageBuffer = await this.compressMessage(messageBuffer);
      }
      const output = Buffer.allocUnsafe(messageBuffer.length + 5);
      output.writeUInt8(compress ? 1 : 0, 0);
      output.writeUInt32BE(messageBuffer.length, 1);
      messageBuffer.copy(output, 5);
      return output;
    }
    async readMessage(data) {
      const compressed = data.readUInt8(0) === 1;
      let messageBuffer = data.slice(5);
      if (compressed) {
        messageBuffer = await this.decompressMessage(messageBuffer);
      }
      return messageBuffer;
    }
  }

  class IdentityHandler extends CompressionHandler {
    async compressMessage(message) {
      return message;
    }
    async writeMessage(message, compress) {
      const output = Buffer.allocUnsafe(message.length + 5);
      output.writeUInt8(0, 0);
      output.writeUInt32BE(message.length, 1);
      message.copy(output, 5);
      return output;
    }
    decompressMessage(message) {
      return Promise.reject(new Error('Received compressed message but "grpc-encoding" header was identity'));
    }
  }

  class DeflateHandler extends CompressionHandler {
    constructor(maxRecvMessageLength) {
      super();
      this.maxRecvMessageLength = maxRecvMessageLength;
    }
    compressMessage(message) {
      return new Promise((resolve, reject) => {
        zlib.deflate(message, (err, output) => {
          if (err) {
            reject(err);
          } else {
            resolve(output);
          }
        });
      });
    }
    decompressMessage(message) {
      return new Promise((resolve, reject) => {
        let totalLength = 0;
        const messageParts = [];
        const decompresser = zlib.createInflate();
        decompresser.on("data", (chunk) => {
          messageParts.push(chunk);
          totalLength += chunk.byteLength;
          if (this.maxRecvMessageLength !== -1 && totalLength > this.maxRecvMessageLength) {
            decompresser.destroy();
            reject({
              code: constants_1.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
            });
          }
        });
        decompresser.on("end", () => {
          resolve(Buffer.concat(messageParts));
        });
        decompresser.write(message);
        decompresser.end();
      });
    }
  }

  class GzipHandler extends CompressionHandler {
    constructor(maxRecvMessageLength) {
      super();
      this.maxRecvMessageLength = maxRecvMessageLength;
    }
    compressMessage(message) {
      return new Promise((resolve, reject) => {
        zlib.gzip(message, (err, output) => {
          if (err) {
            reject(err);
          } else {
            resolve(output);
          }
        });
      });
    }
    decompressMessage(message) {
      return new Promise((resolve, reject) => {
        let totalLength = 0;
        const messageParts = [];
        const decompresser = zlib.createGunzip();
        decompresser.on("data", (chunk) => {
          messageParts.push(chunk);
          totalLength += chunk.byteLength;
          if (this.maxRecvMessageLength !== -1 && totalLength > this.maxRecvMessageLength) {
            decompresser.destroy();
            reject({
              code: constants_1.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
            });
          }
        });
        decompresser.on("end", () => {
          resolve(Buffer.concat(messageParts));
        });
        decompresser.write(message);
        decompresser.end();
      });
    }
  }

  class UnknownHandler extends CompressionHandler {
    constructor(compressionName) {
      super();
      this.compressionName = compressionName;
    }
    compressMessage(message) {
      return Promise.reject(new Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
    }
    decompressMessage(message) {
      return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
    }
  }
  function getCompressionHandler(compressionName, maxReceiveMessageSize) {
    switch (compressionName) {
      case "identity":
        return new IdentityHandler;
      case "deflate":
        return new DeflateHandler(maxReceiveMessageSize);
      case "gzip":
        return new GzipHandler(maxReceiveMessageSize);
      default:
        return new UnknownHandler(compressionName);
    }
  }

  class CompressionFilter extends filter_1.BaseFilter {
    constructor(channelOptions, sharedFilterConfig) {
      var _a, _b, _c;
      super();
      this.sharedFilterConfig = sharedFilterConfig;
      this.sendCompression = new IdentityHandler;
      this.receiveCompression = new IdentityHandler;
      this.currentCompressionAlgorithm = "identity";
      const compressionAlgorithmKey = channelOptions["grpc.default_compression_algorithm"];
      this.maxReceiveMessageLength = (_a = channelOptions["grpc.max_receive_message_length"]) !== null && _a !== undefined ? _a : constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      this.maxSendMessageLength = (_b = channelOptions["grpc.max_send_message_length"]) !== null && _b !== undefined ? _b : constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
      if (compressionAlgorithmKey !== undefined) {
        if (isCompressionAlgorithmKey(compressionAlgorithmKey)) {
          const clientSelectedEncoding = compression_algorithms_1.CompressionAlgorithms[compressionAlgorithmKey];
          const serverSupportedEncodings = (_c = sharedFilterConfig.serverSupportedEncodingHeader) === null || _c === undefined ? undefined : _c.split(",");
          if (!serverSupportedEncodings || serverSupportedEncodings.includes(clientSelectedEncoding)) {
            this.currentCompressionAlgorithm = clientSelectedEncoding;
            this.sendCompression = getCompressionHandler(this.currentCompressionAlgorithm, -1);
          }
        } else {
          logging.log(constants_1.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${compressionAlgorithmKey}`);
        }
      }
    }
    async sendMetadata(metadata) {
      const headers = await metadata;
      headers.set("grpc-accept-encoding", "identity,deflate,gzip");
      headers.set("accept-encoding", "identity");
      if (this.currentCompressionAlgorithm === "identity") {
        headers.remove("grpc-encoding");
      } else {
        headers.set("grpc-encoding", this.currentCompressionAlgorithm);
      }
      return headers;
    }
    receiveMetadata(metadata) {
      const receiveEncoding = metadata.get("grpc-encoding");
      if (receiveEncoding.length > 0) {
        const encoding = receiveEncoding[0];
        if (typeof encoding === "string") {
          this.receiveCompression = getCompressionHandler(encoding, this.maxReceiveMessageLength);
        }
      }
      metadata.remove("grpc-encoding");
      const serverSupportedEncodingsHeader = metadata.get("grpc-accept-encoding")[0];
      if (serverSupportedEncodingsHeader) {
        this.sharedFilterConfig.serverSupportedEncodingHeader = serverSupportedEncodingsHeader;
        const serverSupportedEncodings = serverSupportedEncodingsHeader.split(",");
        if (!serverSupportedEncodings.includes(this.currentCompressionAlgorithm)) {
          this.sendCompression = new IdentityHandler;
          this.currentCompressionAlgorithm = "identity";
        }
      }
      metadata.remove("grpc-accept-encoding");
      return metadata;
    }
    async sendMessage(message) {
      var _a;
      const resolvedMessage = await message;
      if (this.maxSendMessageLength !== -1 && resolvedMessage.message.length > this.maxSendMessageLength) {
        throw {
          code: constants_1.Status.RESOURCE_EXHAUSTED,
          details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`
        };
      }
      let compress;
      if (this.sendCompression instanceof IdentityHandler) {
        compress = false;
      } else {
        compress = (((_a = resolvedMessage.flags) !== null && _a !== undefined ? _a : 0) & 2) === 0;
      }
      return {
        message: await this.sendCompression.writeMessage(resolvedMessage.message, compress),
        flags: resolvedMessage.flags
      };
    }
    async receiveMessage(message) {
      return this.receiveCompression.readMessage(await message);
    }
  }
  exports.CompressionFilter = CompressionFilter;

  class CompressionFilterFactory {
    constructor(channel, options) {
      this.options = options;
      this.sharedFilterConfig = {};
    }
    createFilter() {
      return new CompressionFilter(this.options, this.sharedFilterConfig);
    }
  }
  exports.CompressionFilterFactory = CompressionFilterFactory;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/control-plane-status.js
var require_control_plane_status = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.restrictControlPlaneStatusCode = restrictControlPlaneStatusCode;
  var constants_1 = require_constants();
  var INAPPROPRIATE_CONTROL_PLANE_CODES = [
    constants_1.Status.OK,
    constants_1.Status.INVALID_ARGUMENT,
    constants_1.Status.NOT_FOUND,
    constants_1.Status.ALREADY_EXISTS,
    constants_1.Status.FAILED_PRECONDITION,
    constants_1.Status.ABORTED,
    constants_1.Status.OUT_OF_RANGE,
    constants_1.Status.DATA_LOSS
  ];
  function restrictControlPlaneStatusCode(code, details) {
    if (INAPPROPRIATE_CONTROL_PLANE_CODES.includes(code)) {
      return {
        code: constants_1.Status.INTERNAL,
        details: `Invalid status from control plane: ${code} ${constants_1.Status[code]} ${details}`
      };
    } else {
      return { code, details };
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/deadline.js
var require_deadline = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.minDeadline = minDeadline;
  exports.getDeadlineTimeoutString = getDeadlineTimeoutString;
  exports.getRelativeTimeout = getRelativeTimeout;
  exports.deadlineToString = deadlineToString;
  exports.formatDateDifference = formatDateDifference;
  function minDeadline(...deadlineList) {
    let minValue = Infinity;
    for (const deadline of deadlineList) {
      const deadlineMsecs = deadline instanceof Date ? deadline.getTime() : deadline;
      if (deadlineMsecs < minValue) {
        minValue = deadlineMsecs;
      }
    }
    return minValue;
  }
  var units = [
    ["m", 1],
    ["S", 1000],
    ["M", 60 * 1000],
    ["H", 60 * 60 * 1000]
  ];
  function getDeadlineTimeoutString(deadline) {
    const now = new Date().getTime();
    if (deadline instanceof Date) {
      deadline = deadline.getTime();
    }
    const timeoutMs = Math.max(deadline - now, 0);
    for (const [unit, factor] of units) {
      const amount = timeoutMs / factor;
      if (amount < 1e8) {
        return String(Math.ceil(amount)) + unit;
      }
    }
    throw new Error("Deadline is too far in the future");
  }
  var MAX_TIMEOUT_TIME = 2147483647;
  function getRelativeTimeout(deadline) {
    const deadlineMs = deadline instanceof Date ? deadline.getTime() : deadline;
    const now = new Date().getTime();
    const timeout = deadlineMs - now;
    if (timeout < 0) {
      return 0;
    } else if (timeout > MAX_TIMEOUT_TIME) {
      return Infinity;
    } else {
      return timeout;
    }
  }
  function deadlineToString(deadline) {
    if (deadline instanceof Date) {
      return deadline.toISOString();
    } else {
      const dateDeadline = new Date(deadline);
      if (Number.isNaN(dateDeadline.getTime())) {
        return "" + deadline;
      } else {
        return dateDeadline.toISOString();
      }
    }
  }
  function formatDateDifference(startDate, endDate) {
    return ((endDate.getTime() - startDate.getTime()) / 1000).toFixed(3) + "s";
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/filter-stack.js
var require_filter_stack = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FilterStackFactory = exports.FilterStack = undefined;

  class FilterStack {
    constructor(filters) {
      this.filters = filters;
    }
    sendMetadata(metadata) {
      let result = metadata;
      for (let i = 0;i < this.filters.length; i++) {
        result = this.filters[i].sendMetadata(result);
      }
      return result;
    }
    receiveMetadata(metadata) {
      let result = metadata;
      for (let i = this.filters.length - 1;i >= 0; i--) {
        result = this.filters[i].receiveMetadata(result);
      }
      return result;
    }
    sendMessage(message) {
      let result = message;
      for (let i = 0;i < this.filters.length; i++) {
        result = this.filters[i].sendMessage(result);
      }
      return result;
    }
    receiveMessage(message) {
      let result = message;
      for (let i = this.filters.length - 1;i >= 0; i--) {
        result = this.filters[i].receiveMessage(result);
      }
      return result;
    }
    receiveTrailers(status) {
      let result = status;
      for (let i = this.filters.length - 1;i >= 0; i--) {
        result = this.filters[i].receiveTrailers(result);
      }
      return result;
    }
    push(filters) {
      this.filters.unshift(...filters);
    }
    getFilters() {
      return this.filters;
    }
  }
  exports.FilterStack = FilterStack;

  class FilterStackFactory {
    constructor(factories) {
      this.factories = factories;
    }
    push(filterFactories) {
      this.factories.unshift(...filterFactories);
    }
    clone() {
      return new FilterStackFactory([...this.factories]);
    }
    createFilter() {
      return new FilterStack(this.factories.map((factory) => factory.createFilter()));
    }
  }
  exports.FilterStackFactory = FilterStackFactory;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/single-subchannel-channel.js
var require_single_subchannel_channel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SingleSubchannelChannel = undefined;
  var call_number_1 = require_call_number();
  var channelz_1 = require_channelz();
  var compression_filter_1 = require_compression_filter();
  var connectivity_state_1 = require_connectivity_state();
  var constants_1 = require_constants();
  var control_plane_status_1 = require_control_plane_status();
  var deadline_1 = require_deadline();
  var filter_stack_1 = require_filter_stack();
  var metadata_1 = require_metadata();
  var resolver_1 = require_resolver();
  var uri_parser_1 = require_uri_parser();

  class SubchannelCallWrapper {
    constructor(subchannel, method, filterStackFactory, options, callNumber) {
      var _a, _b;
      this.subchannel = subchannel;
      this.method = method;
      this.options = options;
      this.callNumber = callNumber;
      this.childCall = null;
      this.pendingMessage = null;
      this.readPending = false;
      this.halfClosePending = false;
      this.pendingStatus = null;
      this.readFilterPending = false;
      this.writeFilterPending = false;
      const splitPath = this.method.split("/");
      let serviceName = "";
      if (splitPath.length >= 2) {
        serviceName = splitPath[1];
      }
      const hostname = (_b = (_a = (0, uri_parser_1.splitHostPort)(this.options.host)) === null || _a === undefined ? undefined : _a.host) !== null && _b !== undefined ? _b : "localhost";
      this.serviceUrl = `https://${hostname}/${serviceName}`;
      const timeout = (0, deadline_1.getRelativeTimeout)(options.deadline);
      if (timeout !== Infinity) {
        if (timeout <= 0) {
          this.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
        } else {
          setTimeout(() => {
            this.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          }, timeout);
        }
      }
      this.filterStack = filterStackFactory.createFilter();
    }
    cancelWithStatus(status, details) {
      if (this.childCall) {
        this.childCall.cancelWithStatus(status, details);
      } else {
        this.pendingStatus = {
          code: status,
          details,
          metadata: new metadata_1.Metadata
        };
      }
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.childCall) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : this.subchannel.getAddress();
    }
    async start(metadata, listener) {
      if (this.pendingStatus) {
        listener.onReceiveStatus(this.pendingStatus);
        return;
      }
      if (this.subchannel.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
        listener.onReceiveStatus({
          code: constants_1.Status.UNAVAILABLE,
          details: "Subchannel not ready",
          metadata: new metadata_1.Metadata
        });
        return;
      }
      const filteredMetadata = await this.filterStack.sendMetadata(Promise.resolve(metadata));
      let credsMetadata;
      try {
        credsMetadata = await this.subchannel.getCallCredentials().generateMetadata({ method_name: this.method, service_url: this.serviceUrl });
      } catch (e) {
        const error = e;
        const { code, details } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(typeof error.code === "number" ? error.code : constants_1.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${error.message}`);
        listener.onReceiveStatus({
          code,
          details,
          metadata: new metadata_1.Metadata
        });
        return;
      }
      credsMetadata.merge(filteredMetadata);
      const childListener = {
        onReceiveMetadata: async (metadata2) => {
          listener.onReceiveMetadata(await this.filterStack.receiveMetadata(metadata2));
        },
        onReceiveMessage: async (message) => {
          this.readFilterPending = true;
          const filteredMessage = await this.filterStack.receiveMessage(message);
          this.readFilterPending = false;
          listener.onReceiveMessage(filteredMessage);
          if (this.pendingStatus) {
            listener.onReceiveStatus(this.pendingStatus);
          }
        },
        onReceiveStatus: async (status) => {
          const filteredStatus = await this.filterStack.receiveTrailers(status);
          if (this.readFilterPending) {
            this.pendingStatus = filteredStatus;
          } else {
            listener.onReceiveStatus(filteredStatus);
          }
        }
      };
      this.childCall = this.subchannel.createCall(credsMetadata, this.options.host, this.method, childListener);
      if (this.readPending) {
        this.childCall.startRead();
      }
      if (this.pendingMessage) {
        this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
      }
      if (this.halfClosePending && !this.writeFilterPending) {
        this.childCall.halfClose();
      }
    }
    async sendMessageWithContext(context, message) {
      this.writeFilterPending = true;
      const filteredMessage = await this.filterStack.sendMessage(Promise.resolve({ message, flags: context.flags }));
      this.writeFilterPending = false;
      if (this.childCall) {
        this.childCall.sendMessageWithContext(context, filteredMessage.message);
        if (this.halfClosePending) {
          this.childCall.halfClose();
        }
      } else {
        this.pendingMessage = { context, message: filteredMessage.message };
      }
    }
    startRead() {
      if (this.childCall) {
        this.childCall.startRead();
      } else {
        this.readPending = true;
      }
    }
    halfClose() {
      if (this.childCall && !this.writeFilterPending) {
        this.childCall.halfClose();
      } else {
        this.halfClosePending = true;
      }
    }
    getCallNumber() {
      return this.callNumber;
    }
    setCredentials(credentials) {
      throw new Error("Method not implemented.");
    }
    getAuthContext() {
      if (this.childCall) {
        return this.childCall.getAuthContext();
      } else {
        return null;
      }
    }
  }

  class SingleSubchannelChannel {
    constructor(subchannel, target, options) {
      this.subchannel = subchannel;
      this.target = target;
      this.channelzEnabled = false;
      this.channelzTrace = new channelz_1.ChannelzTrace;
      this.callTracker = new channelz_1.ChannelzCallTracker;
      this.childrenTracker = new channelz_1.ChannelzChildrenTracker;
      this.channelzEnabled = options["grpc.enable_channelz"] !== 0;
      this.channelzRef = (0, channelz_1.registerChannelzChannel)((0, uri_parser_1.uriToString)(target), () => ({
        target: `${(0, uri_parser_1.uriToString)(target)} (${subchannel.getAddress()})`,
        state: this.subchannel.getConnectivityState(),
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists()
      }), this.channelzEnabled);
      if (this.channelzEnabled) {
        this.childrenTracker.refChild(subchannel.getChannelzRef());
      }
      this.filterStackFactory = new filter_stack_1.FilterStackFactory([new compression_filter_1.CompressionFilterFactory(this, options)]);
    }
    close() {
      if (this.channelzEnabled) {
        this.childrenTracker.unrefChild(this.subchannel.getChannelzRef());
      }
      (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
    }
    getTarget() {
      return (0, uri_parser_1.uriToString)(this.target);
    }
    getConnectivityState(tryToConnect) {
      throw new Error("Method not implemented.");
    }
    watchConnectivityState(currentState, deadline, callback) {
      throw new Error("Method not implemented.");
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(method, deadline) {
      const callOptions = {
        deadline,
        host: (0, resolver_1.getDefaultAuthority)(this.target),
        flags: constants_1.Propagate.DEFAULTS,
        parentCall: null
      };
      return new SubchannelCallWrapper(this.subchannel, method, this.filterStackFactory, callOptions, (0, call_number_1.getNextCallNumber)());
    }
  }
  exports.SingleSubchannelChannel = SingleSubchannelChannel;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/subchannel.js
var require_subchannel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Subchannel = undefined;
  var connectivity_state_1 = require_connectivity_state();
  var backoff_timeout_1 = require_backoff_timeout();
  var logging = require_logging();
  var constants_1 = require_constants();
  var uri_parser_1 = require_uri_parser();
  var subchannel_address_1 = require_subchannel_address();
  var channelz_1 = require_channelz();
  var single_subchannel_channel_1 = require_single_subchannel_channel();
  var TRACER_NAME = "subchannel";
  var KEEPALIVE_MAX_TIME_MS = ~(1 << 31);

  class Subchannel {
    constructor(channelTarget, subchannelAddress, options, credentials, connector) {
      var _a;
      this.channelTarget = channelTarget;
      this.subchannelAddress = subchannelAddress;
      this.options = options;
      this.connector = connector;
      this.connectivityState = connectivity_state_1.ConnectivityState.IDLE;
      this.transport = null;
      this.continueConnecting = false;
      this.stateListeners = new Set;
      this.refcount = 0;
      this.channelzEnabled = true;
      this.dataProducers = new Map;
      this.subchannelChannel = null;
      const backoffOptions = {
        initialDelay: options["grpc.initial_reconnect_backoff_ms"],
        maxDelay: options["grpc.max_reconnect_backoff_ms"]
      };
      this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
        this.handleBackoffTimer();
      }, backoffOptions);
      this.backoffTimeout.unref();
      this.subchannelAddressString = (0, subchannel_address_1.subchannelAddressToString)(subchannelAddress);
      this.keepaliveTime = (_a = options["grpc.keepalive_time_ms"]) !== null && _a !== undefined ? _a : -1;
      if (options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
        this.channelzTrace = new channelz_1.ChannelzTraceStub;
        this.callTracker = new channelz_1.ChannelzCallTrackerStub;
        this.childrenTracker = new channelz_1.ChannelzChildrenTrackerStub;
        this.streamTracker = new channelz_1.ChannelzCallTrackerStub;
      } else {
        this.channelzTrace = new channelz_1.ChannelzTrace;
        this.callTracker = new channelz_1.ChannelzCallTracker;
        this.childrenTracker = new channelz_1.ChannelzChildrenTracker;
        this.streamTracker = new channelz_1.ChannelzCallTracker;
      }
      this.channelzRef = (0, channelz_1.registerChannelzSubchannel)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled);
      this.channelzTrace.addTrace("CT_INFO", "Subchannel created");
      this.trace("Subchannel constructed with options " + JSON.stringify(options, undefined, 2));
      this.secureConnector = credentials._createSecureConnector(channelTarget, options);
    }
    getChannelzInfo() {
      return {
        state: this.connectivityState,
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists(),
        target: this.subchannelAddressString
      };
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    refTrace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    handleBackoffTimer() {
      if (this.continueConnecting) {
        this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.CONNECTING);
      } else {
        this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.IDLE);
      }
    }
    startBackoff() {
      this.backoffTimeout.runOnce();
    }
    stopBackoff() {
      this.backoffTimeout.stop();
      this.backoffTimeout.reset();
    }
    startConnectingInternal() {
      let options = this.options;
      if (options["grpc.keepalive_time_ms"]) {
        const adjustedKeepaliveTime = Math.min(this.keepaliveTime, KEEPALIVE_MAX_TIME_MS);
        options = Object.assign(Object.assign({}, options), { "grpc.keepalive_time_ms": adjustedKeepaliveTime });
      }
      this.connector.connect(this.subchannelAddress, this.secureConnector, options).then((transport) => {
        if (this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.READY)) {
          this.transport = transport;
          if (this.channelzEnabled) {
            this.childrenTracker.refChild(transport.getChannelzRef());
          }
          transport.addDisconnectListener((tooManyPings) => {
            this.transitionToState([connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
            if (tooManyPings && this.keepaliveTime > 0) {
              this.keepaliveTime *= 2;
              logging.log(constants_1.LogVerbosity.ERROR, `Connection to ${(0, uri_parser_1.uriToString)(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
            }
          });
        } else {
          transport.shutdown();
        }
      }, (error) => {
        this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, `${error}`);
      });
    }
    transitionToState(oldStates, newState, errorMessage) {
      var _a, _b;
      if (oldStates.indexOf(this.connectivityState) === -1) {
        return false;
      }
      if (errorMessage) {
        this.trace(connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState] + ' with error "' + errorMessage + '"');
      } else {
        this.trace(connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
      }
      if (this.channelzEnabled) {
        this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + connectivity_state_1.ConnectivityState[newState]);
      }
      const previousState = this.connectivityState;
      this.connectivityState = newState;
      switch (newState) {
        case connectivity_state_1.ConnectivityState.READY:
          this.stopBackoff();
          break;
        case connectivity_state_1.ConnectivityState.CONNECTING:
          this.startBackoff();
          this.startConnectingInternal();
          this.continueConnecting = false;
          break;
        case connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE:
          if (this.channelzEnabled && this.transport) {
            this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          }
          (_a = this.transport) === null || _a === undefined || _a.shutdown();
          this.transport = null;
          if (!this.backoffTimeout.isRunning()) {
            process.nextTick(() => {
              this.handleBackoffTimer();
            });
          }
          break;
        case connectivity_state_1.ConnectivityState.IDLE:
          if (this.channelzEnabled && this.transport) {
            this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          }
          (_b = this.transport) === null || _b === undefined || _b.shutdown();
          this.transport = null;
          break;
        default:
          throw new Error(`Invalid state: unknown ConnectivityState ${newState}`);
      }
      for (const listener of this.stateListeners) {
        listener(this, previousState, newState, this.keepaliveTime, errorMessage);
      }
      return true;
    }
    ref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1));
      this.refcount += 1;
    }
    unref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1));
      this.refcount -= 1;
      if (this.refcount === 0) {
        this.channelzTrace.addTrace("CT_INFO", "Shutting down");
        (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
        this.secureConnector.destroy();
        process.nextTick(() => {
          this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING, connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
        });
      }
    }
    unrefIfOneRef() {
      if (this.refcount === 1) {
        this.unref();
        return true;
      }
      return false;
    }
    createCall(metadata, host, method, listener) {
      if (!this.transport) {
        throw new Error("Cannot create call, subchannel not READY");
      }
      let statsTracker;
      if (this.channelzEnabled) {
        this.callTracker.addCallStarted();
        this.streamTracker.addCallStarted();
        statsTracker = {
          onCallEnd: (status) => {
            if (status.code === constants_1.Status.OK) {
              this.callTracker.addCallSucceeded();
            } else {
              this.callTracker.addCallFailed();
            }
          }
        };
      } else {
        statsTracker = {};
      }
      return this.transport.createCall(metadata, host, method, listener, statsTracker);
    }
    startConnecting() {
      process.nextTick(() => {
        if (!this.transitionToState([connectivity_state_1.ConnectivityState.IDLE], connectivity_state_1.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
            this.continueConnecting = true;
          }
        }
      });
    }
    getConnectivityState() {
      return this.connectivityState;
    }
    addConnectivityStateListener(listener) {
      this.stateListeners.add(listener);
    }
    removeConnectivityStateListener(listener) {
      this.stateListeners.delete(listener);
    }
    resetBackoff() {
      process.nextTick(() => {
        this.backoffTimeout.reset();
        this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.CONNECTING);
      });
    }
    getAddress() {
      return this.subchannelAddressString;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    isHealthy() {
      return true;
    }
    addHealthStateWatcher(listener) {}
    removeHealthStateWatcher(listener) {}
    getRealSubchannel() {
      return this;
    }
    realSubchannelEquals(other) {
      return other.getRealSubchannel() === this;
    }
    throttleKeepalive(newKeepaliveTime) {
      if (newKeepaliveTime > this.keepaliveTime) {
        this.keepaliveTime = newKeepaliveTime;
      }
    }
    getCallCredentials() {
      return this.secureConnector.getCallCredentials();
    }
    getChannel() {
      if (!this.subchannelChannel) {
        this.subchannelChannel = new single_subchannel_channel_1.SingleSubchannelChannel(this, this.channelTarget, this.options);
      }
      return this.subchannelChannel;
    }
    addDataWatcher(dataWatcher) {
      throw new Error("Not implemented");
    }
    getOrCreateDataProducer(name, createDataProducer) {
      const existingProducer = this.dataProducers.get(name);
      if (existingProducer) {
        return existingProducer;
      }
      const newProducer = createDataProducer(this);
      this.dataProducers.set(name, newProducer);
      return newProducer;
    }
    removeDataProducer(name) {
      this.dataProducers.delete(name);
    }
  }
  exports.Subchannel = Subchannel;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/environment.js
var require_environment = __commonJS((exports) => {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = undefined;
  exports.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = ((_a = process.env.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) !== null && _a !== undefined ? _a : "false") === "true";
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/resolver-dns.js
var require_resolver_dns = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_PORT = undefined;
  exports.setup = setup;
  var resolver_1 = require_resolver();
  var dns_1 = __require("dns");
  var service_config_1 = require_service_config();
  var constants_1 = require_constants();
  var call_interface_1 = require_call_interface();
  var metadata_1 = require_metadata();
  var logging = require_logging();
  var constants_2 = require_constants();
  var uri_parser_1 = require_uri_parser();
  var net_1 = __require("net");
  var backoff_timeout_1 = require_backoff_timeout();
  var environment_1 = require_environment();
  var TRACER_NAME = "dns_resolver";
  function trace(text) {
    logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  exports.DEFAULT_PORT = 443;
  var DEFAULT_MIN_TIME_BETWEEN_RESOLUTIONS_MS = 30000;

  class DnsResolver {
    constructor(target, listener, channelOptions) {
      var _a, _b, _c;
      this.target = target;
      this.listener = listener;
      this.pendingLookupPromise = null;
      this.pendingTxtPromise = null;
      this.latestLookupResult = null;
      this.latestServiceConfigResult = null;
      this.continueResolving = false;
      this.isNextResolutionTimerRunning = false;
      this.isServiceConfigEnabled = true;
      this.returnedIpResult = false;
      this.alternativeResolver = new dns_1.promises.Resolver;
      trace("Resolver constructed for target " + (0, uri_parser_1.uriToString)(target));
      if (target.authority) {
        this.alternativeResolver.setServers([target.authority]);
      }
      const hostPort = (0, uri_parser_1.splitHostPort)(target.path);
      if (hostPort === null) {
        this.ipResult = null;
        this.dnsHostname = null;
        this.port = null;
      } else {
        if ((0, net_1.isIPv4)(hostPort.host) || (0, net_1.isIPv6)(hostPort.host)) {
          this.ipResult = [
            {
              addresses: [
                {
                  host: hostPort.host,
                  port: (_a = hostPort.port) !== null && _a !== undefined ? _a : exports.DEFAULT_PORT
                }
              ]
            }
          ];
          this.dnsHostname = null;
          this.port = null;
        } else {
          this.ipResult = null;
          this.dnsHostname = hostPort.host;
          this.port = (_b = hostPort.port) !== null && _b !== undefined ? _b : exports.DEFAULT_PORT;
        }
      }
      this.percentage = Math.random() * 100;
      if (channelOptions["grpc.service_config_disable_resolution"] === 1) {
        this.isServiceConfigEnabled = false;
      }
      this.defaultResolutionError = {
        code: constants_1.Status.UNAVAILABLE,
        details: `Name resolution failed for target ${(0, uri_parser_1.uriToString)(this.target)}`,
        metadata: new metadata_1.Metadata
      };
      const backoffOptions = {
        initialDelay: channelOptions["grpc.initial_reconnect_backoff_ms"],
        maxDelay: channelOptions["grpc.max_reconnect_backoff_ms"]
      };
      this.backoff = new backoff_timeout_1.BackoffTimeout(() => {
        if (this.continueResolving) {
          this.startResolutionWithBackoff();
        }
      }, backoffOptions);
      this.backoff.unref();
      this.minTimeBetweenResolutionsMs = (_c = channelOptions["grpc.dns_min_time_between_resolutions_ms"]) !== null && _c !== undefined ? _c : DEFAULT_MIN_TIME_BETWEEN_RESOLUTIONS_MS;
      this.nextResolutionTimer = setTimeout(() => {}, 0);
      clearTimeout(this.nextResolutionTimer);
    }
    startResolution() {
      if (this.ipResult !== null) {
        if (!this.returnedIpResult) {
          trace("Returning IP address for target " + (0, uri_parser_1.uriToString)(this.target));
          setImmediate(() => {
            this.listener((0, call_interface_1.statusOrFromValue)(this.ipResult), {}, null, "");
          });
          this.returnedIpResult = true;
        }
        this.backoff.stop();
        this.backoff.reset();
        this.stopNextResolutionTimer();
        return;
      }
      if (this.dnsHostname === null) {
        trace("Failed to parse DNS address " + (0, uri_parser_1.uriToString)(this.target));
        setImmediate(() => {
          this.listener((0, call_interface_1.statusOrFromError)({
            code: constants_1.Status.UNAVAILABLE,
            details: `Failed to parse DNS address ${(0, uri_parser_1.uriToString)(this.target)}`
          }), {}, null, "");
        });
        this.stopNextResolutionTimer();
      } else {
        if (this.pendingLookupPromise !== null) {
          return;
        }
        trace("Looking up DNS hostname " + this.dnsHostname);
        this.latestLookupResult = null;
        const hostname = this.dnsHostname;
        this.pendingLookupPromise = this.lookup(hostname);
        this.pendingLookupPromise.then((addressList) => {
          if (this.pendingLookupPromise === null) {
            return;
          }
          this.pendingLookupPromise = null;
          this.latestLookupResult = (0, call_interface_1.statusOrFromValue)(addressList.map((address) => ({
            addresses: [address]
          })));
          const allAddressesString = "[" + addressList.map((addr) => addr.host + ":" + addr.port).join(",") + "]";
          trace("Resolved addresses for target " + (0, uri_parser_1.uriToString)(this.target) + ": " + allAddressesString);
          const healthStatus = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
          this.handleHealthStatus(healthStatus);
        }, (err) => {
          if (this.pendingLookupPromise === null) {
            return;
          }
          trace("Resolution error for target " + (0, uri_parser_1.uriToString)(this.target) + ": " + err.message);
          this.pendingLookupPromise = null;
          this.stopNextResolutionTimer();
          this.listener((0, call_interface_1.statusOrFromError)(this.defaultResolutionError), {}, this.latestServiceConfigResult, "");
        });
        if (this.isServiceConfigEnabled && this.pendingTxtPromise === null) {
          this.pendingTxtPromise = this.resolveTxt(hostname);
          this.pendingTxtPromise.then((txtRecord) => {
            if (this.pendingTxtPromise === null) {
              return;
            }
            this.pendingTxtPromise = null;
            let serviceConfig;
            try {
              serviceConfig = (0, service_config_1.extractAndSelectServiceConfig)(txtRecord, this.percentage);
              if (serviceConfig) {
                this.latestServiceConfigResult = (0, call_interface_1.statusOrFromValue)(serviceConfig);
              } else {
                this.latestServiceConfigResult = null;
              }
            } catch (err) {
              this.latestServiceConfigResult = (0, call_interface_1.statusOrFromError)({
                code: constants_1.Status.UNAVAILABLE,
                details: `Parsing service config failed with error ${err.message}`
              });
            }
            if (this.latestLookupResult !== null) {
              this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
            }
          }, (err) => {});
        }
      }
    }
    handleHealthStatus(healthStatus) {
      if (healthStatus) {
        this.backoff.stop();
        this.backoff.reset();
      } else {
        this.continueResolving = true;
      }
    }
    async lookup(hostname) {
      if (environment_1.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
        trace("Using alternative DNS resolver.");
        const records = await Promise.allSettled([
          this.alternativeResolver.resolve4(hostname),
          this.alternativeResolver.resolve6(hostname)
        ]);
        if (records.every((result) => result.status === "rejected")) {
          throw new Error(records[0].reason);
        }
        return records.reduce((acc, result) => {
          return result.status === "fulfilled" ? [...acc, ...result.value] : acc;
        }, []).map((addr) => ({
          host: addr,
          port: +this.port
        }));
      }
      const addressList = await dns_1.promises.lookup(hostname, { all: true });
      return addressList.map((addr) => ({ host: addr.address, port: +this.port }));
    }
    async resolveTxt(hostname) {
      if (environment_1.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
        trace("Using alternative DNS resolver.");
        return this.alternativeResolver.resolveTxt(hostname);
      }
      return dns_1.promises.resolveTxt(hostname);
    }
    startNextResolutionTimer() {
      var _a, _b;
      clearTimeout(this.nextResolutionTimer);
      this.nextResolutionTimer = setTimeout(() => {
        this.stopNextResolutionTimer();
        if (this.continueResolving) {
          this.startResolutionWithBackoff();
        }
      }, this.minTimeBetweenResolutionsMs);
      (_b = (_a = this.nextResolutionTimer).unref) === null || _b === undefined || _b.call(_a);
      this.isNextResolutionTimerRunning = true;
    }
    stopNextResolutionTimer() {
      clearTimeout(this.nextResolutionTimer);
      this.isNextResolutionTimerRunning = false;
    }
    startResolutionWithBackoff() {
      if (this.pendingLookupPromise === null) {
        this.continueResolving = false;
        this.backoff.runOnce();
        this.startNextResolutionTimer();
        this.startResolution();
      }
    }
    updateResolution() {
      if (this.pendingLookupPromise === null) {
        if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
          if (this.isNextResolutionTimerRunning) {
            trace('resolution update delayed by "min time between resolutions" rate limit');
          } else {
            trace("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
          }
          this.continueResolving = true;
        } else {
          this.startResolutionWithBackoff();
        }
      }
    }
    destroy() {
      this.continueResolving = false;
      this.backoff.reset();
      this.backoff.stop();
      this.stopNextResolutionTimer();
      this.pendingLookupPromise = null;
      this.pendingTxtPromise = null;
      this.latestLookupResult = null;
      this.latestServiceConfigResult = null;
      this.returnedIpResult = false;
    }
    static getDefaultAuthority(target) {
      return target.path;
    }
  }
  function setup() {
    (0, resolver_1.registerResolver)("dns", DnsResolver);
    (0, resolver_1.registerDefaultScheme)("dns");
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/http_proxy.js
var require_http_proxy = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseCIDR = parseCIDR;
  exports.mapProxyName = mapProxyName;
  exports.getProxiedConnection = getProxiedConnection;
  var logging_1 = require_logging();
  var constants_1 = require_constants();
  var net_1 = __require("net");
  var http = __require("http");
  var logging = require_logging();
  var subchannel_address_1 = require_subchannel_address();
  var uri_parser_1 = require_uri_parser();
  var url_1 = __require("url");
  var resolver_dns_1 = require_resolver_dns();
  var TRACER_NAME = "proxy";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  function getProxyInfo() {
    let proxyEnv = "";
    let envVar = "";
    if (process.env.grpc_proxy) {
      envVar = "grpc_proxy";
      proxyEnv = process.env.grpc_proxy;
    } else if (process.env.https_proxy) {
      envVar = "https_proxy";
      proxyEnv = process.env.https_proxy;
    } else if (process.env.http_proxy) {
      envVar = "http_proxy";
      proxyEnv = process.env.http_proxy;
    } else {
      return {};
    }
    let proxyUrl;
    try {
      proxyUrl = new url_1.URL(proxyEnv);
    } catch (e) {
      (0, logging_1.log)(constants_1.LogVerbosity.ERROR, `cannot parse value of "${envVar}" env var`);
      return {};
    }
    if (proxyUrl.protocol !== "http:") {
      (0, logging_1.log)(constants_1.LogVerbosity.ERROR, `"${proxyUrl.protocol}" scheme not supported in proxy URI`);
      return {};
    }
    let userCred = null;
    if (proxyUrl.username) {
      if (proxyUrl.password) {
        (0, logging_1.log)(constants_1.LogVerbosity.INFO, "userinfo found in proxy URI");
        userCred = decodeURIComponent(`${proxyUrl.username}:${proxyUrl.password}`);
      } else {
        userCred = proxyUrl.username;
      }
    }
    const hostname = proxyUrl.hostname;
    let port = proxyUrl.port;
    if (port === "") {
      port = "80";
    }
    const result = {
      address: `${hostname}:${port}`
    };
    if (userCred) {
      result.creds = userCred;
    }
    trace("Proxy server " + result.address + " set by environment variable " + envVar);
    return result;
  }
  function getNoProxyHostList() {
    let noProxyStr = process.env.no_grpc_proxy;
    let envVar = "no_grpc_proxy";
    if (!noProxyStr) {
      noProxyStr = process.env.no_proxy;
      envVar = "no_proxy";
    }
    if (noProxyStr) {
      trace("No proxy server list set by environment variable " + envVar);
      return noProxyStr.split(",");
    } else {
      return [];
    }
  }
  function parseCIDR(cidrString) {
    const splitRange = cidrString.split("/");
    if (splitRange.length !== 2) {
      return null;
    }
    const prefixLength = parseInt(splitRange[1], 10);
    if (!(0, net_1.isIPv4)(splitRange[0]) || Number.isNaN(prefixLength) || prefixLength < 0 || prefixLength > 32) {
      return null;
    }
    return {
      ip: ipToInt(splitRange[0]),
      prefixLength
    };
  }
  function ipToInt(ip) {
    return ip.split(".").reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
  }
  function isIpInCIDR(cidr, serverHost) {
    const ip = cidr.ip;
    const mask = -1 << 32 - cidr.prefixLength;
    const hostIP = ipToInt(serverHost);
    return (hostIP & mask) === (ip & mask);
  }
  function hostMatchesNoProxyList(serverHost) {
    for (const host of getNoProxyHostList()) {
      const parsedCIDR = parseCIDR(host);
      if ((0, net_1.isIPv4)(serverHost) && parsedCIDR && isIpInCIDR(parsedCIDR, serverHost)) {
        return true;
      } else if (serverHost.endsWith(host)) {
        return true;
      }
    }
    return false;
  }
  function mapProxyName(target, options) {
    var _a;
    const noProxyResult = {
      target,
      extraOptions: {}
    };
    if (((_a = options["grpc.enable_http_proxy"]) !== null && _a !== undefined ? _a : 1) === 0) {
      return noProxyResult;
    }
    if (target.scheme === "unix") {
      return noProxyResult;
    }
    const proxyInfo = getProxyInfo();
    if (!proxyInfo.address) {
      return noProxyResult;
    }
    const hostPort = (0, uri_parser_1.splitHostPort)(target.path);
    if (!hostPort) {
      return noProxyResult;
    }
    const serverHost = hostPort.host;
    if (hostMatchesNoProxyList(serverHost)) {
      trace("Not using proxy for target in no_proxy list: " + (0, uri_parser_1.uriToString)(target));
      return noProxyResult;
    }
    const extraOptions = {
      "grpc.http_connect_target": (0, uri_parser_1.uriToString)(target)
    };
    if (proxyInfo.creds) {
      extraOptions["grpc.http_connect_creds"] = proxyInfo.creds;
    }
    return {
      target: {
        scheme: "dns",
        path: proxyInfo.address
      },
      extraOptions
    };
  }
  function getProxiedConnection(address, channelOptions) {
    var _a;
    if (!("grpc.http_connect_target" in channelOptions)) {
      return Promise.resolve(null);
    }
    const realTarget = channelOptions["grpc.http_connect_target"];
    const parsedTarget = (0, uri_parser_1.parseUri)(realTarget);
    if (parsedTarget === null) {
      return Promise.resolve(null);
    }
    const splitHostPost = (0, uri_parser_1.splitHostPort)(parsedTarget.path);
    if (splitHostPost === null) {
      return Promise.resolve(null);
    }
    const hostPort = `${splitHostPost.host}:${(_a = splitHostPost.port) !== null && _a !== undefined ? _a : resolver_dns_1.DEFAULT_PORT}`;
    const options = {
      method: "CONNECT",
      path: hostPort
    };
    const headers = {
      Host: hostPort
    };
    if ((0, subchannel_address_1.isTcpSubchannelAddress)(address)) {
      options.host = address.host;
      options.port = address.port;
    } else {
      options.socketPath = address.path;
    }
    if ("grpc.http_connect_creds" in channelOptions) {
      headers["Proxy-Authorization"] = "Basic " + Buffer.from(channelOptions["grpc.http_connect_creds"]).toString("base64");
    }
    options.headers = headers;
    const proxyAddressString = (0, subchannel_address_1.subchannelAddressToString)(address);
    trace("Using proxy " + proxyAddressString + " to connect to " + options.path);
    return new Promise((resolve, reject) => {
      const request = http.request(options);
      request.once("connect", (res, socket, head) => {
        request.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode === 200) {
          trace("Successfully connected to " + options.path + " through proxy " + proxyAddressString);
          if (head.length > 0) {
            socket.unshift(head);
          }
          trace("Successfully established a plaintext connection to " + options.path + " through proxy " + proxyAddressString);
          resolve(socket);
        } else {
          (0, logging_1.log)(constants_1.LogVerbosity.ERROR, "Failed to connect to " + options.path + " through proxy " + proxyAddressString + " with status " + res.statusCode);
          reject();
        }
      });
      request.once("error", (err) => {
        request.removeAllListeners();
        (0, logging_1.log)(constants_1.LogVerbosity.ERROR, "Failed to connect to proxy " + proxyAddressString + " with error " + err.message);
        reject();
      });
      request.end();
    });
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/stream-decoder.js
var require_stream_decoder = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StreamDecoder = undefined;
  var ReadState;
  (function(ReadState2) {
    ReadState2[ReadState2["NO_DATA"] = 0] = "NO_DATA";
    ReadState2[ReadState2["READING_SIZE"] = 1] = "READING_SIZE";
    ReadState2[ReadState2["READING_MESSAGE"] = 2] = "READING_MESSAGE";
  })(ReadState || (ReadState = {}));

  class StreamDecoder {
    constructor(maxReadMessageLength) {
      this.maxReadMessageLength = maxReadMessageLength;
      this.readState = ReadState.NO_DATA;
      this.readCompressFlag = Buffer.alloc(1);
      this.readPartialSize = Buffer.alloc(4);
      this.readSizeRemaining = 4;
      this.readMessageSize = 0;
      this.readPartialMessage = [];
      this.readMessageRemaining = 0;
    }
    write(data) {
      let readHead = 0;
      let toRead;
      const result = [];
      while (readHead < data.length) {
        switch (this.readState) {
          case ReadState.NO_DATA:
            this.readCompressFlag = data.slice(readHead, readHead + 1);
            readHead += 1;
            this.readState = ReadState.READING_SIZE;
            this.readPartialSize.fill(0);
            this.readSizeRemaining = 4;
            this.readMessageSize = 0;
            this.readMessageRemaining = 0;
            this.readPartialMessage = [];
            break;
          case ReadState.READING_SIZE:
            toRead = Math.min(data.length - readHead, this.readSizeRemaining);
            data.copy(this.readPartialSize, 4 - this.readSizeRemaining, readHead, readHead + toRead);
            this.readSizeRemaining -= toRead;
            readHead += toRead;
            if (this.readSizeRemaining === 0) {
              this.readMessageSize = this.readPartialSize.readUInt32BE(0);
              if (this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) {
                throw new Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
              }
              this.readMessageRemaining = this.readMessageSize;
              if (this.readMessageRemaining > 0) {
                this.readState = ReadState.READING_MESSAGE;
              } else {
                const message = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
                this.readState = ReadState.NO_DATA;
                result.push(message);
              }
            }
            break;
          case ReadState.READING_MESSAGE:
            toRead = Math.min(data.length - readHead, this.readMessageRemaining);
            this.readPartialMessage.push(data.slice(readHead, readHead + toRead));
            this.readMessageRemaining -= toRead;
            readHead += toRead;
            if (this.readMessageRemaining === 0) {
              const framedMessageBuffers = [
                this.readCompressFlag,
                this.readPartialSize
              ].concat(this.readPartialMessage);
              const framedMessage = Buffer.concat(framedMessageBuffers, this.readMessageSize + 5);
              this.readState = ReadState.NO_DATA;
              result.push(framedMessage);
            }
            break;
          default:
            throw new Error("Unexpected read state");
        }
      }
      return result;
    }
  }
  exports.StreamDecoder = StreamDecoder;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/subchannel-call.js
var require_subchannel_call = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Http2SubchannelCall = undefined;
  var http2 = __require("http2");
  var os = __require("os");
  var constants_1 = require_constants();
  var metadata_1 = require_metadata();
  var stream_decoder_1 = require_stream_decoder();
  var logging = require_logging();
  var constants_2 = require_constants();
  var TRACER_NAME = "subchannel_call";
  function getSystemErrorName(errno) {
    for (const [name, num] of Object.entries(os.constants.errno)) {
      if (num === errno) {
        return name;
      }
    }
    return "Unknown system error " + errno;
  }
  function mapHttpStatusCode(code) {
    const details = `Received HTTP status code ${code}`;
    let mappedStatusCode;
    switch (code) {
      case 400:
        mappedStatusCode = constants_1.Status.INTERNAL;
        break;
      case 401:
        mappedStatusCode = constants_1.Status.UNAUTHENTICATED;
        break;
      case 403:
        mappedStatusCode = constants_1.Status.PERMISSION_DENIED;
        break;
      case 404:
        mappedStatusCode = constants_1.Status.UNIMPLEMENTED;
        break;
      case 429:
      case 502:
      case 503:
      case 504:
        mappedStatusCode = constants_1.Status.UNAVAILABLE;
        break;
      default:
        mappedStatusCode = constants_1.Status.UNKNOWN;
    }
    return {
      code: mappedStatusCode,
      details,
      metadata: new metadata_1.Metadata
    };
  }

  class Http2SubchannelCall {
    constructor(http2Stream, callEventTracker, listener, transport, callId) {
      var _a;
      this.http2Stream = http2Stream;
      this.callEventTracker = callEventTracker;
      this.listener = listener;
      this.transport = transport;
      this.callId = callId;
      this.isReadFilterPending = false;
      this.isPushPending = false;
      this.canPush = false;
      this.readsClosed = false;
      this.statusOutput = false;
      this.unpushedReadMessages = [];
      this.finalStatus = null;
      this.internalError = null;
      this.serverEndedCall = false;
      this.connectionDropped = false;
      const maxReceiveMessageLength = (_a = transport.getOptions()["grpc.max_receive_message_length"]) !== null && _a !== undefined ? _a : constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      this.decoder = new stream_decoder_1.StreamDecoder(maxReceiveMessageLength);
      http2Stream.on("response", (headers, flags) => {
        let headersString = "";
        for (const header of Object.keys(headers)) {
          headersString += "\t\t" + header + ": " + headers[header] + `
`;
        }
        this.trace(`Received server headers:
` + headersString);
        this.httpStatusCode = headers[":status"];
        if (flags & http2.constants.NGHTTP2_FLAG_END_STREAM) {
          this.handleTrailers(headers);
        } else {
          let metadata;
          try {
            metadata = metadata_1.Metadata.fromHttp2Headers(headers);
          } catch (error) {
            this.endCall({
              code: constants_1.Status.UNKNOWN,
              details: error.message,
              metadata: new metadata_1.Metadata
            });
            return;
          }
          this.listener.onReceiveMetadata(metadata);
        }
      });
      http2Stream.on("trailers", (headers) => {
        this.handleTrailers(headers);
      });
      http2Stream.on("data", (data) => {
        if (this.statusOutput) {
          return;
        }
        this.trace("receive HTTP/2 data frame of length " + data.length);
        let messages;
        try {
          messages = this.decoder.write(data);
        } catch (e) {
          if (this.httpStatusCode !== undefined && this.httpStatusCode !== 200) {
            const mappedStatus = mapHttpStatusCode(this.httpStatusCode);
            this.cancelWithStatus(mappedStatus.code, mappedStatus.details);
          } else {
            this.cancelWithStatus(constants_1.Status.RESOURCE_EXHAUSTED, e.message);
          }
          return;
        }
        for (const message of messages) {
          this.trace("parsed message of length " + message.length);
          this.callEventTracker.addMessageReceived();
          this.tryPush(message);
        }
      });
      http2Stream.on("end", () => {
        this.readsClosed = true;
        this.maybeOutputStatus();
      });
      http2Stream.on("close", () => {
        this.serverEndedCall = true;
        process.nextTick(() => {
          var _a2;
          this.trace("HTTP/2 stream closed with code " + http2Stream.rstCode);
          if (((_a2 = this.finalStatus) === null || _a2 === undefined ? undefined : _a2.code) === constants_1.Status.OK) {
            return;
          }
          let code;
          let details = "";
          switch (http2Stream.rstCode) {
            case http2.constants.NGHTTP2_NO_ERROR:
              if (this.finalStatus !== null) {
                return;
              }
              if (this.httpStatusCode && this.httpStatusCode !== 200) {
                const mappedStatus = mapHttpStatusCode(this.httpStatusCode);
                code = mappedStatus.code;
                details = mappedStatus.details;
              } else {
                code = constants_1.Status.INTERNAL;
                details = `Received RST_STREAM with code ${http2Stream.rstCode} (Call ended without gRPC status)`;
              }
              break;
            case http2.constants.NGHTTP2_REFUSED_STREAM:
              code = constants_1.Status.UNAVAILABLE;
              details = "Stream refused by server";
              break;
            case http2.constants.NGHTTP2_CANCEL:
              if (this.connectionDropped) {
                code = constants_1.Status.UNAVAILABLE;
                details = "Connection dropped";
              } else {
                code = constants_1.Status.CANCELLED;
                details = "Call cancelled";
              }
              break;
            case http2.constants.NGHTTP2_ENHANCE_YOUR_CALM:
              code = constants_1.Status.RESOURCE_EXHAUSTED;
              details = "Bandwidth exhausted or memory limit exceeded";
              break;
            case http2.constants.NGHTTP2_INADEQUATE_SECURITY:
              code = constants_1.Status.PERMISSION_DENIED;
              details = "Protocol not secure enough";
              break;
            case http2.constants.NGHTTP2_INTERNAL_ERROR:
              code = constants_1.Status.INTERNAL;
              if (this.internalError === null) {
                details = `Received RST_STREAM with code ${http2Stream.rstCode} (Internal server error)`;
              } else {
                if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") {
                  code = constants_1.Status.UNAVAILABLE;
                  details = this.internalError.message;
                } else {
                  details = `Received RST_STREAM with code ${http2Stream.rstCode} triggered by internal client error: ${this.internalError.message}`;
                }
              }
              break;
            default:
              code = constants_1.Status.INTERNAL;
              details = `Received RST_STREAM with code ${http2Stream.rstCode}`;
          }
          this.endCall({
            code,
            details,
            metadata: new metadata_1.Metadata,
            rstCode: http2Stream.rstCode
          });
        });
      });
      http2Stream.on("error", (err) => {
        if (err.code !== "ERR_HTTP2_STREAM_ERROR") {
          this.trace("Node error event: message=" + err.message + " code=" + err.code + " errno=" + getSystemErrorName(err.errno) + " syscall=" + err.syscall);
          this.internalError = err;
        }
        this.callEventTracker.onStreamEnd(false);
      });
    }
    getDeadlineInfo() {
      return [`remote_addr=${this.getPeer()}`];
    }
    onDisconnect() {
      this.connectionDropped = true;
      setImmediate(() => {
        this.endCall({
          code: constants_1.Status.UNAVAILABLE,
          details: "Connection dropped",
          metadata: new metadata_1.Metadata
        });
      });
    }
    outputStatus() {
      if (!this.statusOutput) {
        this.statusOutput = true;
        this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"');
        this.callEventTracker.onCallEnd(this.finalStatus);
        process.nextTick(() => {
          this.listener.onReceiveStatus(this.finalStatus);
        });
        this.http2Stream.resume();
      }
    }
    trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callId + "] " + text);
    }
    endCall(status) {
      if (this.finalStatus === null || this.finalStatus.code === constants_1.Status.OK) {
        this.finalStatus = status;
        this.maybeOutputStatus();
      }
      this.destroyHttp2Stream();
    }
    maybeOutputStatus() {
      if (this.finalStatus !== null) {
        if (this.finalStatus.code !== constants_1.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) {
          this.outputStatus();
        }
      }
    }
    push(message) {
      this.trace("pushing to reader message of length " + (message instanceof Buffer ? message.length : null));
      this.canPush = false;
      this.isPushPending = true;
      process.nextTick(() => {
        this.isPushPending = false;
        if (this.statusOutput) {
          return;
        }
        this.listener.onReceiveMessage(message);
        this.maybeOutputStatus();
      });
    }
    tryPush(messageBytes) {
      if (this.canPush) {
        this.http2Stream.pause();
        this.push(messageBytes);
      } else {
        this.trace("unpushedReadMessages.push message of length " + messageBytes.length);
        this.unpushedReadMessages.push(messageBytes);
      }
    }
    handleTrailers(headers) {
      this.serverEndedCall = true;
      this.callEventTracker.onStreamEnd(true);
      let headersString = "";
      for (const header of Object.keys(headers)) {
        headersString += "\t\t" + header + ": " + headers[header] + `
`;
      }
      this.trace(`Received server trailers:
` + headersString);
      let metadata;
      try {
        metadata = metadata_1.Metadata.fromHttp2Headers(headers);
      } catch (e) {
        metadata = new metadata_1.Metadata;
      }
      const metadataMap = metadata.getMap();
      let status;
      if (typeof metadataMap["grpc-status"] === "string") {
        const receivedStatus = Number(metadataMap["grpc-status"]);
        this.trace("received status code " + receivedStatus + " from server");
        metadata.remove("grpc-status");
        let details = "";
        if (typeof metadataMap["grpc-message"] === "string") {
          try {
            details = decodeURI(metadataMap["grpc-message"]);
          } catch (e) {
            details = metadataMap["grpc-message"];
          }
          metadata.remove("grpc-message");
          this.trace('received status details string "' + details + '" from server');
        }
        status = {
          code: receivedStatus,
          details,
          metadata
        };
      } else if (this.httpStatusCode) {
        status = mapHttpStatusCode(this.httpStatusCode);
        status.metadata = metadata;
      } else {
        status = {
          code: constants_1.Status.UNKNOWN,
          details: "No status information received",
          metadata
        };
      }
      this.endCall(status);
    }
    destroyHttp2Stream() {
      var _a;
      if (this.http2Stream.destroyed) {
        return;
      }
      if (this.serverEndedCall) {
        this.http2Stream.end();
      } else {
        let code;
        if (((_a = this.finalStatus) === null || _a === undefined ? undefined : _a.code) === constants_1.Status.OK) {
          code = http2.constants.NGHTTP2_NO_ERROR;
        } else {
          code = http2.constants.NGHTTP2_CANCEL;
        }
        this.trace("close http2 stream with code " + code);
        this.http2Stream.close(code);
      }
    }
    cancelWithStatus(status, details) {
      this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
      this.endCall({ code: status, details, metadata: new metadata_1.Metadata });
    }
    getStatus() {
      return this.finalStatus;
    }
    getPeer() {
      return this.transport.getPeerName();
    }
    getCallNumber() {
      return this.callId;
    }
    getAuthContext() {
      return this.transport.getAuthContext();
    }
    startRead() {
      if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
        this.readsClosed = true;
        this.maybeOutputStatus();
        return;
      }
      this.canPush = true;
      if (this.unpushedReadMessages.length > 0) {
        const nextMessage = this.unpushedReadMessages.shift();
        this.push(nextMessage);
        return;
      }
      this.http2Stream.resume();
    }
    sendMessageWithContext(context, message) {
      this.trace("write() called with message of length " + message.length);
      const cb = (error) => {
        process.nextTick(() => {
          var _a;
          let code = constants_1.Status.UNAVAILABLE;
          if ((error === null || error === undefined ? undefined : error.code) === "ERR_STREAM_WRITE_AFTER_END") {
            code = constants_1.Status.INTERNAL;
          }
          if (error) {
            this.cancelWithStatus(code, `Write error: ${error.message}`);
          }
          (_a = context.callback) === null || _a === undefined || _a.call(context);
        });
      };
      this.trace("sending data chunk of length " + message.length);
      this.callEventTracker.addMessageSent();
      try {
        this.http2Stream.write(message, cb);
      } catch (error) {
        this.endCall({
          code: constants_1.Status.UNAVAILABLE,
          details: `Write failed with error ${error.message}`,
          metadata: new metadata_1.Metadata
        });
      }
    }
    halfClose() {
      this.trace("end() called");
      this.trace("calling end() on HTTP/2 stream");
      this.http2Stream.end();
    }
  }
  exports.Http2SubchannelCall = Http2SubchannelCall;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/transport.js
var require_transport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Http2SubchannelConnector = undefined;
  var http2 = __require("http2");
  var tls_1 = __require("tls");
  var channelz_1 = require_channelz();
  var constants_1 = require_constants();
  var http_proxy_1 = require_http_proxy();
  var logging = require_logging();
  var resolver_1 = require_resolver();
  var subchannel_address_1 = require_subchannel_address();
  var uri_parser_1 = require_uri_parser();
  var net = __require("net");
  var subchannel_call_1 = require_subchannel_call();
  var call_number_1 = require_call_number();
  var TRACER_NAME = "transport";
  var FLOW_CONTROL_TRACER_NAME = "transport_flowctrl";
  var clientVersion = require_package().version;
  var { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_TE, HTTP2_HEADER_USER_AGENT } = http2.constants;
  var KEEPALIVE_TIMEOUT_MS = 20000;
  var tooManyPingsData = Buffer.from("too_many_pings", "ascii");

  class Http2Transport {
    constructor(session, subchannelAddress, options, remoteName) {
      this.session = session;
      this.options = options;
      this.remoteName = remoteName;
      this.keepaliveTimer = null;
      this.pendingSendKeepalivePing = false;
      this.activeCalls = new Set;
      this.disconnectListeners = [];
      this.disconnectHandled = false;
      this.channelzEnabled = true;
      this.keepalivesSent = 0;
      this.messagesSent = 0;
      this.messagesReceived = 0;
      this.lastMessageSentTimestamp = null;
      this.lastMessageReceivedTimestamp = null;
      this.subchannelAddressString = (0, subchannel_address_1.subchannelAddressToString)(subchannelAddress);
      if (options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
        this.streamTracker = new channelz_1.ChannelzCallTrackerStub;
      } else {
        this.streamTracker = new channelz_1.ChannelzCallTracker;
      }
      this.channelzRef = (0, channelz_1.registerChannelzSocket)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled);
      this.userAgent = [
        options["grpc.primary_user_agent"],
        `grpc-node-js/${clientVersion}`,
        options["grpc.secondary_user_agent"]
      ].filter((e) => e).join(" ");
      if ("grpc.keepalive_time_ms" in options) {
        this.keepaliveTimeMs = options["grpc.keepalive_time_ms"];
      } else {
        this.keepaliveTimeMs = -1;
      }
      if ("grpc.keepalive_timeout_ms" in options) {
        this.keepaliveTimeoutMs = options["grpc.keepalive_timeout_ms"];
      } else {
        this.keepaliveTimeoutMs = KEEPALIVE_TIMEOUT_MS;
      }
      if ("grpc.keepalive_permit_without_calls" in options) {
        this.keepaliveWithoutCalls = options["grpc.keepalive_permit_without_calls"] === 1;
      } else {
        this.keepaliveWithoutCalls = false;
      }
      session.once("close", () => {
        this.trace("session closed");
        this.handleDisconnect();
      });
      session.once("goaway", (errorCode, lastStreamID, opaqueData) => {
        let tooManyPings = false;
        if (errorCode === http2.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData && opaqueData.equals(tooManyPingsData)) {
          tooManyPings = true;
        }
        this.trace("connection closed by GOAWAY with code " + errorCode + " and data " + (opaqueData === null || opaqueData === undefined ? undefined : opaqueData.toString()));
        this.reportDisconnectToOwner(tooManyPings);
      });
      session.once("error", (error) => {
        this.trace("connection closed with error " + error.message);
        this.handleDisconnect();
      });
      session.socket.once("close", (hadError) => {
        this.trace("connection closed. hadError=" + hadError);
        this.handleDisconnect();
      });
      if (logging.isTracerEnabled(TRACER_NAME)) {
        session.on("remoteSettings", (settings) => {
          this.trace("new settings received" + (this.session !== session ? " on the old connection" : "") + ": " + JSON.stringify(settings));
        });
        session.on("localSettings", (settings) => {
          this.trace("local settings acknowledged by remote" + (this.session !== session ? " on the old connection" : "") + ": " + JSON.stringify(settings));
        });
      }
      if (this.keepaliveWithoutCalls) {
        this.maybeStartKeepalivePingTimer();
      }
      if (session.socket instanceof tls_1.TLSSocket) {
        this.authContext = {
          transportSecurityType: "ssl",
          sslPeerCertificate: session.socket.getPeerCertificate()
        };
      } else {
        this.authContext = {};
      }
    }
    getChannelzInfo() {
      var _a, _b, _c;
      const sessionSocket = this.session.socket;
      const remoteAddress = sessionSocket.remoteAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
      const localAddress = sessionSocket.localAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.localAddress, sessionSocket.localPort) : null;
      let tlsInfo;
      if (this.session.encrypted) {
        const tlsSocket = sessionSocket;
        const cipherInfo = tlsSocket.getCipher();
        const certificate = tlsSocket.getCertificate();
        const peerCertificate = tlsSocket.getPeerCertificate();
        tlsInfo = {
          cipherSuiteStandardName: (_a = cipherInfo.standardName) !== null && _a !== undefined ? _a : null,
          cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
          localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
          remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
        };
      } else {
        tlsInfo = null;
      }
      const socketInfo = {
        remoteAddress,
        localAddress,
        security: tlsInfo,
        remoteName: this.remoteName,
        streamsStarted: this.streamTracker.callsStarted,
        streamsSucceeded: this.streamTracker.callsSucceeded,
        streamsFailed: this.streamTracker.callsFailed,
        messagesSent: this.messagesSent,
        messagesReceived: this.messagesReceived,
        keepAlivesSent: this.keepalivesSent,
        lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
        lastRemoteStreamCreatedTimestamp: null,
        lastMessageSentTimestamp: this.lastMessageSentTimestamp,
        lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
        localFlowControlWindow: (_b = this.session.state.localWindowSize) !== null && _b !== undefined ? _b : null,
        remoteFlowControlWindow: (_c = this.session.state.remoteWindowSize) !== null && _c !== undefined ? _c : null
      };
      return socketInfo;
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    keepaliveTrace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    flowControlTrace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, FLOW_CONTROL_TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    internalsTrace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    reportDisconnectToOwner(tooManyPings) {
      if (this.disconnectHandled) {
        return;
      }
      this.disconnectHandled = true;
      this.disconnectListeners.forEach((listener) => listener(tooManyPings));
    }
    handleDisconnect() {
      this.clearKeepaliveTimeout();
      this.reportDisconnectToOwner(false);
      for (const call of this.activeCalls) {
        call.onDisconnect();
      }
      setImmediate(() => {
        this.session.destroy();
      });
    }
    addDisconnectListener(listener) {
      this.disconnectListeners.push(listener);
    }
    canSendPing() {
      return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
    }
    maybeSendPing() {
      var _a, _b;
      if (!this.canSendPing()) {
        this.pendingSendKeepalivePing = true;
        return;
      }
      if (this.keepaliveTimer) {
        console.error("keepaliveTimeout is not null");
        return;
      }
      if (this.channelzEnabled) {
        this.keepalivesSent += 1;
      }
      this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
      this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null;
        this.keepaliveTrace("Ping timeout passed without response");
        this.handleDisconnect();
      }, this.keepaliveTimeoutMs);
      (_b = (_a = this.keepaliveTimer).unref) === null || _b === undefined || _b.call(_a);
      let pingSendError = "";
      try {
        const pingSentSuccessfully = this.session.ping((err, duration, payload) => {
          this.clearKeepaliveTimeout();
          if (err) {
            this.keepaliveTrace("Ping failed with error " + err.message);
            this.handleDisconnect();
          } else {
            this.keepaliveTrace("Received ping response");
            this.maybeStartKeepalivePingTimer();
          }
        });
        if (!pingSentSuccessfully) {
          pingSendError = "Ping returned false";
        }
      } catch (e) {
        pingSendError = (e instanceof Error ? e.message : "") || "Unknown error";
      }
      if (pingSendError) {
        this.keepaliveTrace("Ping send failed: " + pingSendError);
        this.handleDisconnect();
      }
    }
    maybeStartKeepalivePingTimer() {
      var _a, _b;
      if (!this.canSendPing()) {
        return;
      }
      if (this.pendingSendKeepalivePing) {
        this.pendingSendKeepalivePing = false;
        this.maybeSendPing();
      } else if (!this.keepaliveTimer) {
        this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
        this.keepaliveTimer = setTimeout(() => {
          this.keepaliveTimer = null;
          this.maybeSendPing();
        }, this.keepaliveTimeMs);
        (_b = (_a = this.keepaliveTimer).unref) === null || _b === undefined || _b.call(_a);
      }
    }
    clearKeepaliveTimeout() {
      if (this.keepaliveTimer) {
        clearTimeout(this.keepaliveTimer);
        this.keepaliveTimer = null;
      }
    }
    removeActiveCall(call) {
      this.activeCalls.delete(call);
      if (this.activeCalls.size === 0) {
        this.session.unref();
      }
    }
    addActiveCall(call) {
      this.activeCalls.add(call);
      if (this.activeCalls.size === 1) {
        this.session.ref();
        if (!this.keepaliveWithoutCalls) {
          this.maybeStartKeepalivePingTimer();
        }
      }
    }
    createCall(metadata, host, method, listener, subchannelCallStatsTracker) {
      const headers = metadata.toHttp2Headers();
      headers[HTTP2_HEADER_AUTHORITY] = host;
      headers[HTTP2_HEADER_USER_AGENT] = this.userAgent;
      headers[HTTP2_HEADER_CONTENT_TYPE] = "application/grpc";
      headers[HTTP2_HEADER_METHOD] = "POST";
      headers[HTTP2_HEADER_PATH] = method;
      headers[HTTP2_HEADER_TE] = "trailers";
      let http2Stream;
      try {
        http2Stream = this.session.request(headers);
      } catch (e) {
        this.handleDisconnect();
        throw e;
      }
      this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize);
      this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
      let eventTracker;
      let call;
      if (this.channelzEnabled) {
        this.streamTracker.addCallStarted();
        eventTracker = {
          addMessageSent: () => {
            var _a;
            this.messagesSent += 1;
            this.lastMessageSentTimestamp = new Date;
            (_a = subchannelCallStatsTracker.addMessageSent) === null || _a === undefined || _a.call(subchannelCallStatsTracker);
          },
          addMessageReceived: () => {
            var _a;
            this.messagesReceived += 1;
            this.lastMessageReceivedTimestamp = new Date;
            (_a = subchannelCallStatsTracker.addMessageReceived) === null || _a === undefined || _a.call(subchannelCallStatsTracker);
          },
          onCallEnd: (status) => {
            var _a;
            (_a = subchannelCallStatsTracker.onCallEnd) === null || _a === undefined || _a.call(subchannelCallStatsTracker, status);
            this.removeActiveCall(call);
          },
          onStreamEnd: (success) => {
            var _a;
            if (success) {
              this.streamTracker.addCallSucceeded();
            } else {
              this.streamTracker.addCallFailed();
            }
            (_a = subchannelCallStatsTracker.onStreamEnd) === null || _a === undefined || _a.call(subchannelCallStatsTracker, success);
          }
        };
      } else {
        eventTracker = {
          addMessageSent: () => {
            var _a;
            (_a = subchannelCallStatsTracker.addMessageSent) === null || _a === undefined || _a.call(subchannelCallStatsTracker);
          },
          addMessageReceived: () => {
            var _a;
            (_a = subchannelCallStatsTracker.addMessageReceived) === null || _a === undefined || _a.call(subchannelCallStatsTracker);
          },
          onCallEnd: (status) => {
            var _a;
            (_a = subchannelCallStatsTracker.onCallEnd) === null || _a === undefined || _a.call(subchannelCallStatsTracker, status);
            this.removeActiveCall(call);
          },
          onStreamEnd: (success) => {
            var _a;
            (_a = subchannelCallStatsTracker.onStreamEnd) === null || _a === undefined || _a.call(subchannelCallStatsTracker, success);
          }
        };
      }
      call = new subchannel_call_1.Http2SubchannelCall(http2Stream, eventTracker, listener, this, (0, call_number_1.getNextCallNumber)());
      this.addActiveCall(call);
      return call;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    getPeerName() {
      return this.subchannelAddressString;
    }
    getOptions() {
      return this.options;
    }
    getAuthContext() {
      return this.authContext;
    }
    shutdown() {
      this.session.close();
      (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
    }
  }

  class Http2SubchannelConnector {
    constructor(channelTarget) {
      this.channelTarget = channelTarget;
      this.session = null;
      this.isShutdown = false;
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, (0, uri_parser_1.uriToString)(this.channelTarget) + " " + text);
    }
    createSession(secureConnectResult, address, options) {
      if (this.isShutdown) {
        return Promise.reject();
      }
      if (secureConnectResult.socket.closed) {
        return Promise.reject("Connection closed before starting HTTP/2 handshake");
      }
      return new Promise((resolve, reject) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let remoteName = null;
        let realTarget = this.channelTarget;
        if ("grpc.http_connect_target" in options) {
          const parsedTarget = (0, uri_parser_1.parseUri)(options["grpc.http_connect_target"]);
          if (parsedTarget) {
            realTarget = parsedTarget;
            remoteName = (0, uri_parser_1.uriToString)(parsedTarget);
          }
        }
        const scheme = secureConnectResult.secure ? "https" : "http";
        const targetPath = (0, resolver_1.getDefaultAuthority)(realTarget);
        const closeHandler = () => {
          var _a2;
          (_a2 = this.session) === null || _a2 === undefined || _a2.destroy();
          this.session = null;
          setImmediate(() => {
            if (!reportedError) {
              reportedError = true;
              reject(`${errorMessage.trim()} (${new Date().toISOString()})`);
            }
          });
        };
        const errorHandler = (error) => {
          var _a2;
          (_a2 = this.session) === null || _a2 === undefined || _a2.destroy();
          errorMessage = error.message;
          this.trace("connection failed with error " + errorMessage);
          if (!reportedError) {
            reportedError = true;
            reject(`${errorMessage} (${new Date().toISOString()})`);
          }
        };
        const sessionOptions = {
          createConnection: (authority, option) => {
            return secureConnectResult.socket;
          },
          settings: {
            initialWindowSize: (_d = (_a = options["grpc-node.flow_control_window"]) !== null && _a !== undefined ? _a : (_c = (_b = http2.getDefaultSettings) === null || _b === undefined ? undefined : _b.call(http2)) === null || _c === undefined ? undefined : _c.initialWindowSize) !== null && _d !== undefined ? _d : 65535
          },
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER,
          maxSessionMemory: (_e = options["grpc-node.max_session_memory"]) !== null && _e !== undefined ? _e : Number.MAX_SAFE_INTEGER
        };
        const session = http2.connect(`${scheme}://${targetPath}`, sessionOptions);
        const defaultWin = (_h = (_g = (_f = http2.getDefaultSettings) === null || _f === undefined ? undefined : _f.call(http2)) === null || _g === undefined ? undefined : _g.initialWindowSize) !== null && _h !== undefined ? _h : 65535;
        const connWin = options["grpc-node.flow_control_window"];
        this.session = session;
        let errorMessage = "Failed to connect";
        let reportedError = false;
        session.unref();
        session.once("remoteSettings", () => {
          var _a2;
          if (connWin && connWin > defaultWin) {
            try {
              session.setLocalWindowSize(connWin);
            } catch (_b2) {
              const delta = connWin - ((_a2 = session.state.localWindowSize) !== null && _a2 !== undefined ? _a2 : defaultWin);
              if (delta > 0)
                session.incrementWindowSize(delta);
            }
          }
          session.removeAllListeners();
          secureConnectResult.socket.removeListener("close", closeHandler);
          secureConnectResult.socket.removeListener("error", errorHandler);
          resolve(new Http2Transport(session, address, options, remoteName));
          this.session = null;
        });
        session.once("close", closeHandler);
        session.once("error", errorHandler);
        secureConnectResult.socket.once("close", closeHandler);
        secureConnectResult.socket.once("error", errorHandler);
      });
    }
    tcpConnect(address, options) {
      return (0, http_proxy_1.getProxiedConnection)(address, options).then((proxiedSocket) => {
        if (proxiedSocket) {
          return proxiedSocket;
        } else {
          return new Promise((resolve, reject) => {
            const closeCallback = () => {
              reject(new Error("Socket closed"));
            };
            const errorCallback = (error) => {
              reject(error);
            };
            const socket = net.connect(address, () => {
              socket.removeListener("close", closeCallback);
              socket.removeListener("error", errorCallback);
              resolve(socket);
            });
            socket.once("close", closeCallback);
            socket.once("error", errorCallback);
          });
        }
      });
    }
    async connect(address, secureConnector, options) {
      if (this.isShutdown) {
        return Promise.reject();
      }
      let tcpConnection = null;
      let secureConnectResult = null;
      const addressString = (0, subchannel_address_1.subchannelAddressToString)(address);
      try {
        this.trace(addressString + " Waiting for secureConnector to be ready");
        await secureConnector.waitForReady();
        this.trace(addressString + " secureConnector is ready");
        tcpConnection = await this.tcpConnect(address, options);
        tcpConnection.setNoDelay();
        this.trace(addressString + " Established TCP connection");
        secureConnectResult = await secureConnector.connect(tcpConnection);
        this.trace(addressString + " Established secure connection");
        return this.createSession(secureConnectResult, address, options);
      } catch (e) {
        tcpConnection === null || tcpConnection === undefined || tcpConnection.destroy();
        secureConnectResult === null || secureConnectResult === undefined || secureConnectResult.socket.destroy();
        throw e;
      }
    }
    shutdown() {
      var _a;
      this.isShutdown = true;
      (_a = this.session) === null || _a === undefined || _a.close();
      this.session = null;
    }
  }
  exports.Http2SubchannelConnector = Http2SubchannelConnector;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/subchannel-pool.js
var require_subchannel_pool = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SubchannelPool = undefined;
  exports.getSubchannelPool = getSubchannelPool;
  var channel_options_1 = require_channel_options();
  var subchannel_1 = require_subchannel();
  var subchannel_address_1 = require_subchannel_address();
  var uri_parser_1 = require_uri_parser();
  var transport_1 = require_transport();
  var REF_CHECK_INTERVAL = 1e4;

  class SubchannelPool {
    constructor() {
      this.pool = Object.create(null);
      this.cleanupTimer = null;
    }
    unrefUnusedSubchannels() {
      let allSubchannelsUnrefed = true;
      for (const channelTarget in this.pool) {
        const subchannelObjArray = this.pool[channelTarget];
        const refedSubchannels = subchannelObjArray.filter((value) => !value.subchannel.unrefIfOneRef());
        if (refedSubchannels.length > 0) {
          allSubchannelsUnrefed = false;
        }
        this.pool[channelTarget] = refedSubchannels;
      }
      if (allSubchannelsUnrefed && this.cleanupTimer !== null) {
        clearInterval(this.cleanupTimer);
        this.cleanupTimer = null;
      }
    }
    ensureCleanupTask() {
      var _a, _b;
      if (this.cleanupTimer === null) {
        this.cleanupTimer = setInterval(() => {
          this.unrefUnusedSubchannels();
        }, REF_CHECK_INTERVAL);
        (_b = (_a = this.cleanupTimer).unref) === null || _b === undefined || _b.call(_a);
      }
    }
    getOrCreateSubchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials) {
      this.ensureCleanupTask();
      const channelTarget = (0, uri_parser_1.uriToString)(channelTargetUri);
      if (channelTarget in this.pool) {
        const subchannelObjArray = this.pool[channelTarget];
        for (const subchannelObj of subchannelObjArray) {
          if ((0, subchannel_address_1.subchannelAddressEqual)(subchannelTarget, subchannelObj.subchannelAddress) && (0, channel_options_1.channelOptionsEqual)(channelArguments, subchannelObj.channelArguments) && channelCredentials._equals(subchannelObj.channelCredentials)) {
            return subchannelObj.subchannel;
          }
        }
      }
      const subchannel = new subchannel_1.Subchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials, new transport_1.Http2SubchannelConnector(channelTargetUri));
      if (!(channelTarget in this.pool)) {
        this.pool[channelTarget] = [];
      }
      this.pool[channelTarget].push({
        subchannelAddress: subchannelTarget,
        channelArguments,
        channelCredentials,
        subchannel
      });
      subchannel.ref();
      return subchannel;
    }
  }
  exports.SubchannelPool = SubchannelPool;
  var globalSubchannelPool = new SubchannelPool;
  function getSubchannelPool(global2) {
    if (global2) {
      return globalSubchannelPool;
    } else {
      return new SubchannelPool;
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancing-call.js
var require_load_balancing_call = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LoadBalancingCall = undefined;
  var connectivity_state_1 = require_connectivity_state();
  var constants_1 = require_constants();
  var deadline_1 = require_deadline();
  var metadata_1 = require_metadata();
  var picker_1 = require_picker();
  var uri_parser_1 = require_uri_parser();
  var logging = require_logging();
  var control_plane_status_1 = require_control_plane_status();
  var http2 = __require("http2");
  var TRACER_NAME = "load_balancing_call";

  class LoadBalancingCall {
    constructor(channel, callConfig, methodName, host, credentials, deadline, callNumber) {
      var _a, _b;
      this.channel = channel;
      this.callConfig = callConfig;
      this.methodName = methodName;
      this.host = host;
      this.credentials = credentials;
      this.deadline = deadline;
      this.callNumber = callNumber;
      this.child = null;
      this.readPending = false;
      this.pendingMessage = null;
      this.pendingHalfClose = false;
      this.ended = false;
      this.metadata = null;
      this.listener = null;
      this.onCallEnded = null;
      this.childStartTime = null;
      const splitPath = this.methodName.split("/");
      let serviceName = "";
      if (splitPath.length >= 2) {
        serviceName = splitPath[1];
      }
      const hostname = (_b = (_a = (0, uri_parser_1.splitHostPort)(this.host)) === null || _a === undefined ? undefined : _a.host) !== null && _b !== undefined ? _b : "localhost";
      this.serviceUrl = `https://${hostname}/${serviceName}`;
      this.startTime = new Date;
    }
    getDeadlineInfo() {
      var _a, _b;
      const deadlineInfo = [];
      if (this.childStartTime) {
        if (this.childStartTime > this.startTime) {
          if ((_a = this.metadata) === null || _a === undefined ? undefined : _a.getOptions().waitForReady) {
            deadlineInfo.push("wait_for_ready");
          }
          deadlineInfo.push(`LB pick: ${(0, deadline_1.formatDateDifference)(this.startTime, this.childStartTime)}`);
        }
        deadlineInfo.push(...this.child.getDeadlineInfo());
        return deadlineInfo;
      } else {
        if ((_b = this.metadata) === null || _b === undefined ? undefined : _b.getOptions().waitForReady) {
          deadlineInfo.push("wait_for_ready");
        }
        deadlineInfo.push("Waiting for LB pick");
      }
      return deadlineInfo;
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
    }
    outputStatus(status, progress) {
      var _a, _b;
      if (!this.ended) {
        this.ended = true;
        this.trace("ended with status: code=" + status.code + ' details="' + status.details + '" start time=' + this.startTime.toISOString());
        const finalStatus = Object.assign(Object.assign({}, status), { progress });
        (_a = this.listener) === null || _a === undefined || _a.onReceiveStatus(finalStatus);
        (_b = this.onCallEnded) === null || _b === undefined || _b.call(this, finalStatus.code, finalStatus.details, finalStatus.metadata);
      }
    }
    doPick() {
      var _a, _b;
      if (this.ended) {
        return;
      }
      if (!this.metadata) {
        throw new Error("doPick called before start");
      }
      this.trace("Pick called");
      const finalMetadata = this.metadata.clone();
      const pickResult = this.channel.doPick(finalMetadata, this.callConfig.pickInformation);
      const subchannelString = pickResult.subchannel ? "(" + pickResult.subchannel.getChannelzRef().id + ") " + pickResult.subchannel.getAddress() : "" + pickResult.subchannel;
      this.trace("Pick result: " + picker_1.PickResultType[pickResult.pickResultType] + " subchannel: " + subchannelString + " status: " + ((_a = pickResult.status) === null || _a === undefined ? undefined : _a.code) + " " + ((_b = pickResult.status) === null || _b === undefined ? undefined : _b.details));
      switch (pickResult.pickResultType) {
        case picker_1.PickResultType.COMPLETE:
          const combinedCallCredentials = this.credentials.compose(pickResult.subchannel.getCallCredentials());
          combinedCallCredentials.generateMetadata({ method_name: this.methodName, service_url: this.serviceUrl }).then((credsMetadata) => {
            var _a2;
            if (this.ended) {
              this.trace("Credentials metadata generation finished after call ended");
              return;
            }
            finalMetadata.merge(credsMetadata);
            if (finalMetadata.get("authorization").length > 1) {
              this.outputStatus({
                code: constants_1.Status.INTERNAL,
                details: '"authorization" metadata cannot have multiple values',
                metadata: new metadata_1.Metadata
              }, "PROCESSED");
            }
            if (pickResult.subchannel.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
              this.trace("Picked subchannel " + subchannelString + " has state " + connectivity_state_1.ConnectivityState[pickResult.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick");
              this.doPick();
              return;
            }
            if (this.deadline !== Infinity) {
              finalMetadata.set("grpc-timeout", (0, deadline_1.getDeadlineTimeoutString)(this.deadline));
            }
            try {
              this.child = pickResult.subchannel.getRealSubchannel().createCall(finalMetadata, this.host, this.methodName, {
                onReceiveMetadata: (metadata) => {
                  this.trace("Received metadata");
                  this.listener.onReceiveMetadata(metadata);
                },
                onReceiveMessage: (message) => {
                  this.trace("Received message");
                  this.listener.onReceiveMessage(message);
                },
                onReceiveStatus: (status) => {
                  this.trace("Received status");
                  if (status.rstCode === http2.constants.NGHTTP2_REFUSED_STREAM) {
                    this.outputStatus(status, "REFUSED");
                  } else {
                    this.outputStatus(status, "PROCESSED");
                  }
                }
              });
              this.childStartTime = new Date;
            } catch (error) {
              this.trace("Failed to start call on picked subchannel " + subchannelString + " with error " + error.message);
              this.outputStatus({
                code: constants_1.Status.INTERNAL,
                details: "Failed to start HTTP/2 stream with error " + error.message,
                metadata: new metadata_1.Metadata
              }, "NOT_STARTED");
              return;
            }
            (_a2 = pickResult.onCallStarted) === null || _a2 === undefined || _a2.call(pickResult);
            this.onCallEnded = pickResult.onCallEnded;
            this.trace("Created child call [" + this.child.getCallNumber() + "]");
            if (this.readPending) {
              this.child.startRead();
            }
            if (this.pendingMessage) {
              this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
            }
            if (this.pendingHalfClose) {
              this.child.halfClose();
            }
          }, (error) => {
            const { code: code2, details: details2 } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(typeof error.code === "number" ? error.code : constants_1.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${error.message}`);
            this.outputStatus({
              code: code2,
              details: details2,
              metadata: new metadata_1.Metadata
            }, "PROCESSED");
          });
          break;
        case picker_1.PickResultType.DROP:
          const { code, details } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(pickResult.status.code, pickResult.status.details);
          setImmediate(() => {
            this.outputStatus({ code, details, metadata: pickResult.status.metadata }, "DROP");
          });
          break;
        case picker_1.PickResultType.TRANSIENT_FAILURE:
          if (this.metadata.getOptions().waitForReady) {
            this.channel.queueCallForPick(this);
          } else {
            const { code: code2, details: details2 } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(pickResult.status.code, pickResult.status.details);
            setImmediate(() => {
              this.outputStatus({ code: code2, details: details2, metadata: pickResult.status.metadata }, "PROCESSED");
            });
          }
          break;
        case picker_1.PickResultType.QUEUE:
          this.channel.queueCallForPick(this);
      }
    }
    cancelWithStatus(status, details) {
      var _a;
      this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
      (_a = this.child) === null || _a === undefined || _a.cancelWithStatus(status, details);
      this.outputStatus({ code: status, details, metadata: new metadata_1.Metadata }, "PROCESSED");
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.child) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : this.channel.getTarget();
    }
    start(metadata, listener) {
      this.trace("start called");
      this.listener = listener;
      this.metadata = metadata;
      this.doPick();
    }
    sendMessageWithContext(context, message) {
      this.trace("write() called with message of length " + message.length);
      if (this.child) {
        this.child.sendMessageWithContext(context, message);
      } else {
        this.pendingMessage = { context, message };
      }
    }
    startRead() {
      this.trace("startRead called");
      if (this.child) {
        this.child.startRead();
      } else {
        this.readPending = true;
      }
    }
    halfClose() {
      this.trace("halfClose called");
      if (this.child) {
        this.child.halfClose();
      } else {
        this.pendingHalfClose = true;
      }
    }
    setCredentials(credentials) {
      throw new Error("Method not implemented.");
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) {
        return this.child.getAuthContext();
      } else {
        return null;
      }
    }
  }
  exports.LoadBalancingCall = LoadBalancingCall;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/resolving-call.js
var require_resolving_call = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ResolvingCall = undefined;
  var call_credentials_1 = require_call_credentials();
  var constants_1 = require_constants();
  var deadline_1 = require_deadline();
  var metadata_1 = require_metadata();
  var logging = require_logging();
  var control_plane_status_1 = require_control_plane_status();
  var TRACER_NAME = "resolving_call";

  class ResolvingCall {
    constructor(channel, method, options, filterStackFactory, callNumber) {
      this.channel = channel;
      this.method = method;
      this.filterStackFactory = filterStackFactory;
      this.callNumber = callNumber;
      this.child = null;
      this.readPending = false;
      this.pendingMessage = null;
      this.pendingHalfClose = false;
      this.ended = false;
      this.readFilterPending = false;
      this.writeFilterPending = false;
      this.pendingChildStatus = null;
      this.metadata = null;
      this.listener = null;
      this.statusWatchers = [];
      this.deadlineTimer = setTimeout(() => {}, 0);
      this.filterStack = null;
      this.deadlineStartTime = null;
      this.configReceivedTime = null;
      this.childStartTime = null;
      this.credentials = call_credentials_1.CallCredentials.createEmpty();
      this.deadline = options.deadline;
      this.host = options.host;
      if (options.parentCall) {
        if (options.flags & constants_1.Propagate.CANCELLATION) {
          options.parentCall.on("cancelled", () => {
            this.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled by parent call");
          });
        }
        if (options.flags & constants_1.Propagate.DEADLINE) {
          this.trace("Propagating deadline from parent: " + options.parentCall.getDeadline());
          this.deadline = (0, deadline_1.minDeadline)(this.deadline, options.parentCall.getDeadline());
        }
      }
      this.trace("Created");
      this.runDeadlineTimer();
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
    }
    runDeadlineTimer() {
      clearTimeout(this.deadlineTimer);
      this.deadlineStartTime = new Date;
      this.trace("Deadline: " + (0, deadline_1.deadlineToString)(this.deadline));
      const timeout = (0, deadline_1.getRelativeTimeout)(this.deadline);
      if (timeout !== Infinity) {
        this.trace("Deadline will be reached in " + timeout + "ms");
        const handleDeadline = () => {
          if (!this.deadlineStartTime) {
            this.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
            return;
          }
          const deadlineInfo = [];
          const deadlineEndTime = new Date;
          deadlineInfo.push(`Deadline exceeded after ${(0, deadline_1.formatDateDifference)(this.deadlineStartTime, deadlineEndTime)}`);
          if (this.configReceivedTime) {
            if (this.configReceivedTime > this.deadlineStartTime) {
              deadlineInfo.push(`name resolution: ${(0, deadline_1.formatDateDifference)(this.deadlineStartTime, this.configReceivedTime)}`);
            }
            if (this.childStartTime) {
              if (this.childStartTime > this.configReceivedTime) {
                deadlineInfo.push(`metadata filters: ${(0, deadline_1.formatDateDifference)(this.configReceivedTime, this.childStartTime)}`);
              }
            } else {
              deadlineInfo.push("waiting for metadata filters");
            }
          } else {
            deadlineInfo.push("waiting for name resolution");
          }
          if (this.child) {
            deadlineInfo.push(...this.child.getDeadlineInfo());
          }
          this.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, deadlineInfo.join(","));
        };
        if (timeout <= 0) {
          process.nextTick(handleDeadline);
        } else {
          this.deadlineTimer = setTimeout(handleDeadline, timeout);
        }
      }
    }
    outputStatus(status) {
      if (!this.ended) {
        this.ended = true;
        if (!this.filterStack) {
          this.filterStack = this.filterStackFactory.createFilter();
        }
        clearTimeout(this.deadlineTimer);
        const filteredStatus = this.filterStack.receiveTrailers(status);
        this.trace("ended with status: code=" + filteredStatus.code + ' details="' + filteredStatus.details + '"');
        this.statusWatchers.forEach((watcher) => watcher(filteredStatus));
        process.nextTick(() => {
          var _a;
          (_a = this.listener) === null || _a === undefined || _a.onReceiveStatus(filteredStatus);
        });
      }
    }
    sendMessageOnChild(context, message) {
      if (!this.child) {
        throw new Error("sendMessageonChild called with child not populated");
      }
      const child = this.child;
      this.writeFilterPending = true;
      this.filterStack.sendMessage(Promise.resolve({ message, flags: context.flags })).then((filteredMessage) => {
        this.writeFilterPending = false;
        child.sendMessageWithContext(context, filteredMessage.message);
        if (this.pendingHalfClose) {
          child.halfClose();
        }
      }, (status) => {
        this.cancelWithStatus(status.code, status.details);
      });
    }
    getConfig() {
      if (this.ended) {
        return;
      }
      if (!this.metadata || !this.listener) {
        throw new Error("getConfig called before start");
      }
      const configResult = this.channel.getConfig(this.method, this.metadata);
      if (configResult.type === "NONE") {
        this.channel.queueCallForConfig(this);
        return;
      } else if (configResult.type === "ERROR") {
        if (this.metadata.getOptions().waitForReady) {
          this.channel.queueCallForConfig(this);
        } else {
          this.outputStatus(configResult.error);
        }
        return;
      }
      this.configReceivedTime = new Date;
      const config = configResult.config;
      if (config.status !== constants_1.Status.OK) {
        const { code, details } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(config.status, "Failed to route call to method " + this.method);
        this.outputStatus({
          code,
          details,
          metadata: new metadata_1.Metadata
        });
        return;
      }
      if (config.methodConfig.timeout) {
        const configDeadline = new Date;
        configDeadline.setSeconds(configDeadline.getSeconds() + config.methodConfig.timeout.seconds);
        configDeadline.setMilliseconds(configDeadline.getMilliseconds() + config.methodConfig.timeout.nanos / 1e6);
        this.deadline = (0, deadline_1.minDeadline)(this.deadline, configDeadline);
        this.runDeadlineTimer();
      }
      this.filterStackFactory.push(config.dynamicFilterFactories);
      this.filterStack = this.filterStackFactory.createFilter();
      this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then((filteredMetadata) => {
        this.child = this.channel.createRetryingCall(config, this.method, this.host, this.credentials, this.deadline);
        this.trace("Created child [" + this.child.getCallNumber() + "]");
        this.childStartTime = new Date;
        this.child.start(filteredMetadata, {
          onReceiveMetadata: (metadata) => {
            this.trace("Received metadata");
            this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(metadata));
          },
          onReceiveMessage: (message) => {
            this.trace("Received message");
            this.readFilterPending = true;
            this.filterStack.receiveMessage(message).then((filteredMesssage) => {
              this.trace("Finished filtering received message");
              this.readFilterPending = false;
              this.listener.onReceiveMessage(filteredMesssage);
              if (this.pendingChildStatus) {
                this.outputStatus(this.pendingChildStatus);
              }
            }, (status) => {
              this.cancelWithStatus(status.code, status.details);
            });
          },
          onReceiveStatus: (status) => {
            this.trace("Received status");
            if (this.readFilterPending) {
              this.pendingChildStatus = status;
            } else {
              this.outputStatus(status);
            }
          }
        });
        if (this.readPending) {
          this.child.startRead();
        }
        if (this.pendingMessage) {
          this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
        } else if (this.pendingHalfClose) {
          this.child.halfClose();
        }
      }, (status) => {
        this.outputStatus(status);
      });
    }
    reportResolverError(status) {
      var _a;
      if ((_a = this.metadata) === null || _a === undefined ? undefined : _a.getOptions().waitForReady) {
        this.channel.queueCallForConfig(this);
      } else {
        this.outputStatus(status);
      }
    }
    cancelWithStatus(status, details) {
      var _a;
      this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
      (_a = this.child) === null || _a === undefined || _a.cancelWithStatus(status, details);
      this.outputStatus({
        code: status,
        details,
        metadata: new metadata_1.Metadata
      });
    }
    getPeer() {
      var _a, _b;
      return (_b = (_a = this.child) === null || _a === undefined ? undefined : _a.getPeer()) !== null && _b !== undefined ? _b : this.channel.getTarget();
    }
    start(metadata, listener) {
      this.trace("start called");
      this.metadata = metadata.clone();
      this.listener = listener;
      this.getConfig();
    }
    sendMessageWithContext(context, message) {
      this.trace("write() called with message of length " + message.length);
      if (this.child) {
        this.sendMessageOnChild(context, message);
      } else {
        this.pendingMessage = { context, message };
      }
    }
    startRead() {
      this.trace("startRead called");
      if (this.child) {
        this.child.startRead();
      } else {
        this.readPending = true;
      }
    }
    halfClose() {
      this.trace("halfClose called");
      if (this.child && !this.writeFilterPending) {
        this.child.halfClose();
      } else {
        this.pendingHalfClose = true;
      }
    }
    setCredentials(credentials) {
      this.credentials = credentials;
    }
    addStatusWatcher(watcher) {
      this.statusWatchers.push(watcher);
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) {
        return this.child.getAuthContext();
      } else {
        return null;
      }
    }
  }
  exports.ResolvingCall = ResolvingCall;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/retrying-call.js
var require_retrying_call = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RetryingCall = exports.MessageBufferTracker = exports.RetryThrottler = undefined;
  var constants_1 = require_constants();
  var deadline_1 = require_deadline();
  var metadata_1 = require_metadata();
  var logging = require_logging();
  var TRACER_NAME = "retrying_call";

  class RetryThrottler {
    constructor(maxTokens, tokenRatio, previousRetryThrottler) {
      this.maxTokens = maxTokens;
      this.tokenRatio = tokenRatio;
      if (previousRetryThrottler) {
        this.tokens = previousRetryThrottler.tokens * (maxTokens / previousRetryThrottler.maxTokens);
      } else {
        this.tokens = maxTokens;
      }
    }
    addCallSucceeded() {
      this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens);
    }
    addCallFailed() {
      this.tokens = Math.max(this.tokens - 1, 0);
    }
    canRetryCall() {
      return this.tokens > this.maxTokens / 2;
    }
  }
  exports.RetryThrottler = RetryThrottler;

  class MessageBufferTracker {
    constructor(totalLimit, limitPerCall) {
      this.totalLimit = totalLimit;
      this.limitPerCall = limitPerCall;
      this.totalAllocated = 0;
      this.allocatedPerCall = new Map;
    }
    allocate(size, callId) {
      var _a;
      const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== undefined ? _a : 0;
      if (this.limitPerCall - currentPerCall < size || this.totalLimit - this.totalAllocated < size) {
        return false;
      }
      this.allocatedPerCall.set(callId, currentPerCall + size);
      this.totalAllocated += size;
      return true;
    }
    free(size, callId) {
      var _a;
      if (this.totalAllocated < size) {
        throw new Error(`Invalid buffer allocation state: call ${callId} freed ${size} > total allocated ${this.totalAllocated}`);
      }
      this.totalAllocated -= size;
      const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== undefined ? _a : 0;
      if (currentPerCall < size) {
        throw new Error(`Invalid buffer allocation state: call ${callId} freed ${size} > allocated for call ${currentPerCall}`);
      }
      this.allocatedPerCall.set(callId, currentPerCall - size);
    }
    freeAll(callId) {
      var _a;
      const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== undefined ? _a : 0;
      if (this.totalAllocated < currentPerCall) {
        throw new Error(`Invalid buffer allocation state: call ${callId} allocated ${currentPerCall} > total allocated ${this.totalAllocated}`);
      }
      this.totalAllocated -= currentPerCall;
      this.allocatedPerCall.delete(callId);
    }
  }
  exports.MessageBufferTracker = MessageBufferTracker;
  var PREVIONS_RPC_ATTEMPTS_METADATA_KEY = "grpc-previous-rpc-attempts";
  var DEFAULT_MAX_ATTEMPTS_LIMIT = 5;

  class RetryingCall {
    constructor(channel, callConfig, methodName, host, credentials, deadline, callNumber, bufferTracker, retryThrottler) {
      var _a;
      this.channel = channel;
      this.callConfig = callConfig;
      this.methodName = methodName;
      this.host = host;
      this.credentials = credentials;
      this.deadline = deadline;
      this.callNumber = callNumber;
      this.bufferTracker = bufferTracker;
      this.retryThrottler = retryThrottler;
      this.listener = null;
      this.initialMetadata = null;
      this.underlyingCalls = [];
      this.writeBuffer = [];
      this.writeBufferOffset = 0;
      this.readStarted = false;
      this.transparentRetryUsed = false;
      this.attempts = 0;
      this.hedgingTimer = null;
      this.committedCallIndex = null;
      this.initialRetryBackoffSec = 0;
      this.nextRetryBackoffSec = 0;
      const maxAttemptsLimit = (_a = channel.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && _a !== undefined ? _a : DEFAULT_MAX_ATTEMPTS_LIMIT;
      if (channel.getOptions()["grpc.enable_retries"] === 0) {
        this.state = "NO_RETRY";
        this.maxAttempts = 1;
      } else if (callConfig.methodConfig.retryPolicy) {
        this.state = "RETRY";
        const retryPolicy = callConfig.methodConfig.retryPolicy;
        this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(retryPolicy.initialBackoff.substring(0, retryPolicy.initialBackoff.length - 1));
        this.maxAttempts = Math.min(retryPolicy.maxAttempts, maxAttemptsLimit);
      } else if (callConfig.methodConfig.hedgingPolicy) {
        this.state = "HEDGING";
        this.maxAttempts = Math.min(callConfig.methodConfig.hedgingPolicy.maxAttempts, maxAttemptsLimit);
      } else {
        this.state = "TRANSPARENT_ONLY";
        this.maxAttempts = 1;
      }
      this.startTime = new Date;
    }
    getDeadlineInfo() {
      if (this.underlyingCalls.length === 0) {
        return [];
      }
      const deadlineInfo = [];
      const latestCall = this.underlyingCalls[this.underlyingCalls.length - 1];
      if (this.underlyingCalls.length > 1) {
        deadlineInfo.push(`previous attempts: ${this.underlyingCalls.length - 1}`);
      }
      if (latestCall.startTime > this.startTime) {
        deadlineInfo.push(`time to current attempt start: ${(0, deadline_1.formatDateDifference)(this.startTime, latestCall.startTime)}`);
      }
      deadlineInfo.push(...latestCall.call.getDeadlineInfo());
      return deadlineInfo;
    }
    getCallNumber() {
      return this.callNumber;
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
    }
    reportStatus(statusObject) {
      this.trace("ended with status: code=" + statusObject.code + ' details="' + statusObject.details + '" start time=' + this.startTime.toISOString());
      this.bufferTracker.freeAll(this.callNumber);
      this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length;
      this.writeBuffer = [];
      process.nextTick(() => {
        var _a;
        (_a = this.listener) === null || _a === undefined || _a.onReceiveStatus({
          code: statusObject.code,
          details: statusObject.details,
          metadata: statusObject.metadata
        });
      });
    }
    cancelWithStatus(status, details) {
      this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
      this.reportStatus({ code: status, details, metadata: new metadata_1.Metadata });
      for (const { call } of this.underlyingCalls) {
        call.cancelWithStatus(status, details);
      }
    }
    getPeer() {
      if (this.committedCallIndex !== null) {
        return this.underlyingCalls[this.committedCallIndex].call.getPeer();
      } else {
        return "unknown";
      }
    }
    getBufferEntry(messageIndex) {
      var _a;
      return (_a = this.writeBuffer[messageIndex - this.writeBufferOffset]) !== null && _a !== undefined ? _a : {
        entryType: "FREED",
        allocated: false
      };
    }
    getNextBufferIndex() {
      return this.writeBufferOffset + this.writeBuffer.length;
    }
    clearSentMessages() {
      if (this.state !== "COMMITTED") {
        return;
      }
      let earliestNeededMessageIndex;
      if (this.underlyingCalls[this.committedCallIndex].state === "COMPLETED") {
        earliestNeededMessageIndex = this.getNextBufferIndex();
      } else {
        earliestNeededMessageIndex = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
      }
      for (let messageIndex = this.writeBufferOffset;messageIndex < earliestNeededMessageIndex; messageIndex++) {
        const bufferEntry = this.getBufferEntry(messageIndex);
        if (bufferEntry.allocated) {
          this.bufferTracker.free(bufferEntry.message.message.length, this.callNumber);
        }
      }
      this.writeBuffer = this.writeBuffer.slice(earliestNeededMessageIndex - this.writeBufferOffset);
      this.writeBufferOffset = earliestNeededMessageIndex;
    }
    commitCall(index) {
      var _a, _b;
      if (this.state === "COMMITTED") {
        return;
      }
      this.trace("Committing call [" + this.underlyingCalls[index].call.getCallNumber() + "] at index " + index);
      this.state = "COMMITTED";
      (_b = (_a = this.callConfig).onCommitted) === null || _b === undefined || _b.call(_a);
      this.committedCallIndex = index;
      for (let i = 0;i < this.underlyingCalls.length; i++) {
        if (i === index) {
          continue;
        }
        if (this.underlyingCalls[i].state === "COMPLETED") {
          continue;
        }
        this.underlyingCalls[i].state = "COMPLETED";
        this.underlyingCalls[i].call.cancelWithStatus(constants_1.Status.CANCELLED, "Discarded in favor of other hedged attempt");
      }
      this.clearSentMessages();
    }
    commitCallWithMostMessages() {
      if (this.state === "COMMITTED") {
        return;
      }
      let mostMessages = -1;
      let callWithMostMessages = -1;
      for (const [index, childCall] of this.underlyingCalls.entries()) {
        if (childCall.state === "ACTIVE" && childCall.nextMessageToSend > mostMessages) {
          mostMessages = childCall.nextMessageToSend;
          callWithMostMessages = index;
        }
      }
      if (callWithMostMessages === -1) {
        this.state = "TRANSPARENT_ONLY";
      } else {
        this.commitCall(callWithMostMessages);
      }
    }
    isStatusCodeInList(list, code) {
      return list.some((value) => {
        var _a;
        return value === code || value.toString().toLowerCase() === ((_a = constants_1.Status[code]) === null || _a === undefined ? undefined : _a.toLowerCase());
      });
    }
    getNextRetryJitter() {
      return Math.random() * (1.2 - 0.8) + 0.8;
    }
    getNextRetryBackoffMs() {
      var _a;
      const retryPolicy = (_a = this.callConfig) === null || _a === undefined ? undefined : _a.methodConfig.retryPolicy;
      if (!retryPolicy) {
        return 0;
      }
      const jitter = this.getNextRetryJitter();
      const nextBackoffMs = jitter * this.nextRetryBackoffSec * 1000;
      const maxBackoffSec = Number(retryPolicy.maxBackoff.substring(0, retryPolicy.maxBackoff.length - 1));
      this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * retryPolicy.backoffMultiplier, maxBackoffSec);
      return nextBackoffMs;
    }
    maybeRetryCall(pushback, callback) {
      if (this.state !== "RETRY") {
        callback(false);
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        callback(false);
        return;
      }
      let retryDelayMs;
      if (pushback === null) {
        retryDelayMs = this.getNextRetryBackoffMs();
      } else if (pushback < 0) {
        this.state = "TRANSPARENT_ONLY";
        callback(false);
        return;
      } else {
        retryDelayMs = pushback;
        this.nextRetryBackoffSec = this.initialRetryBackoffSec;
      }
      setTimeout(() => {
        var _a, _b;
        if (this.state !== "RETRY") {
          callback(false);
          return;
        }
        if ((_b = (_a = this.retryThrottler) === null || _a === undefined ? undefined : _a.canRetryCall()) !== null && _b !== undefined ? _b : true) {
          callback(true);
          this.attempts += 1;
          this.startNewAttempt();
        } else {
          this.trace("Retry attempt denied by throttling policy");
          callback(false);
        }
      }, retryDelayMs);
    }
    countActiveCalls() {
      let count = 0;
      for (const call of this.underlyingCalls) {
        if ((call === null || call === undefined ? undefined : call.state) === "ACTIVE") {
          count += 1;
        }
      }
      return count;
    }
    handleProcessedStatus(status, callIndex, pushback) {
      var _a, _b, _c;
      switch (this.state) {
        case "COMMITTED":
        case "NO_RETRY":
        case "TRANSPARENT_ONLY":
          this.commitCall(callIndex);
          this.reportStatus(status);
          break;
        case "HEDGING":
          if (this.isStatusCodeInList((_a = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && _a !== undefined ? _a : [], status.code)) {
            (_b = this.retryThrottler) === null || _b === undefined || _b.addCallFailed();
            let delayMs;
            if (pushback === null) {
              delayMs = 0;
            } else if (pushback < 0) {
              this.state = "TRANSPARENT_ONLY";
              this.commitCall(callIndex);
              this.reportStatus(status);
              return;
            } else {
              delayMs = pushback;
            }
            setTimeout(() => {
              this.maybeStartHedgingAttempt();
              if (this.countActiveCalls() === 0) {
                this.commitCall(callIndex);
                this.reportStatus(status);
              }
            }, delayMs);
          } else {
            this.commitCall(callIndex);
            this.reportStatus(status);
          }
          break;
        case "RETRY":
          if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, status.code)) {
            (_c = this.retryThrottler) === null || _c === undefined || _c.addCallFailed();
            this.maybeRetryCall(pushback, (retried) => {
              if (!retried) {
                this.commitCall(callIndex);
                this.reportStatus(status);
              }
            });
          } else {
            this.commitCall(callIndex);
            this.reportStatus(status);
          }
          break;
      }
    }
    getPushback(metadata) {
      const mdValue = metadata.get("grpc-retry-pushback-ms");
      if (mdValue.length === 0) {
        return null;
      }
      try {
        return parseInt(mdValue[0]);
      } catch (e) {
        return -1;
      }
    }
    handleChildStatus(status, callIndex) {
      var _a;
      if (this.underlyingCalls[callIndex].state === "COMPLETED") {
        return;
      }
      this.trace("state=" + this.state + " handling status with progress " + status.progress + " from child [" + this.underlyingCalls[callIndex].call.getCallNumber() + "] in state " + this.underlyingCalls[callIndex].state);
      this.underlyingCalls[callIndex].state = "COMPLETED";
      if (status.code === constants_1.Status.OK) {
        (_a = this.retryThrottler) === null || _a === undefined || _a.addCallSucceeded();
        this.commitCall(callIndex);
        this.reportStatus(status);
        return;
      }
      if (this.state === "NO_RETRY") {
        this.commitCall(callIndex);
        this.reportStatus(status);
        return;
      }
      if (this.state === "COMMITTED") {
        this.reportStatus(status);
        return;
      }
      const pushback = this.getPushback(status.metadata);
      switch (status.progress) {
        case "NOT_STARTED":
          this.startNewAttempt();
          break;
        case "REFUSED":
          if (this.transparentRetryUsed) {
            this.handleProcessedStatus(status, callIndex, pushback);
          } else {
            this.transparentRetryUsed = true;
            this.startNewAttempt();
          }
          break;
        case "DROP":
          this.commitCall(callIndex);
          this.reportStatus(status);
          break;
        case "PROCESSED":
          this.handleProcessedStatus(status, callIndex, pushback);
          break;
      }
    }
    maybeStartHedgingAttempt() {
      if (this.state !== "HEDGING") {
        return;
      }
      if (!this.callConfig.methodConfig.hedgingPolicy) {
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        return;
      }
      this.attempts += 1;
      this.startNewAttempt();
      this.maybeStartHedgingTimer();
    }
    maybeStartHedgingTimer() {
      var _a, _b, _c;
      if (this.hedgingTimer) {
        clearTimeout(this.hedgingTimer);
      }
      if (this.state !== "HEDGING") {
        return;
      }
      if (!this.callConfig.methodConfig.hedgingPolicy) {
        return;
      }
      const hedgingPolicy = this.callConfig.methodConfig.hedgingPolicy;
      if (this.attempts >= this.maxAttempts) {
        return;
      }
      const hedgingDelayString = (_a = hedgingPolicy.hedgingDelay) !== null && _a !== undefined ? _a : "0s";
      const hedgingDelaySec = Number(hedgingDelayString.substring(0, hedgingDelayString.length - 1));
      this.hedgingTimer = setTimeout(() => {
        this.maybeStartHedgingAttempt();
      }, hedgingDelaySec * 1000);
      (_c = (_b = this.hedgingTimer).unref) === null || _c === undefined || _c.call(_b);
    }
    startNewAttempt() {
      const child = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
      this.trace("Created child call [" + child.getCallNumber() + "] for attempt " + this.attempts);
      const index = this.underlyingCalls.length;
      this.underlyingCalls.push({
        state: "ACTIVE",
        call: child,
        nextMessageToSend: 0,
        startTime: new Date
      });
      const previousAttempts = this.attempts - 1;
      const initialMetadata = this.initialMetadata.clone();
      if (previousAttempts > 0) {
        initialMetadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
      }
      let receivedMetadata = false;
      child.start(initialMetadata, {
        onReceiveMetadata: (metadata) => {
          this.trace("Received metadata from child [" + child.getCallNumber() + "]");
          this.commitCall(index);
          receivedMetadata = true;
          if (previousAttempts > 0) {
            metadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
          }
          if (this.underlyingCalls[index].state === "ACTIVE") {
            this.listener.onReceiveMetadata(metadata);
          }
        },
        onReceiveMessage: (message) => {
          this.trace("Received message from child [" + child.getCallNumber() + "]");
          this.commitCall(index);
          if (this.underlyingCalls[index].state === "ACTIVE") {
            this.listener.onReceiveMessage(message);
          }
        },
        onReceiveStatus: (status) => {
          this.trace("Received status from child [" + child.getCallNumber() + "]");
          if (!receivedMetadata && previousAttempts > 0) {
            status.metadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
          }
          this.handleChildStatus(status, index);
        }
      });
      this.sendNextChildMessage(index);
      if (this.readStarted) {
        child.startRead();
      }
    }
    start(metadata, listener) {
      this.trace("start called");
      this.listener = listener;
      this.initialMetadata = metadata;
      this.attempts += 1;
      this.startNewAttempt();
      this.maybeStartHedgingTimer();
    }
    handleChildWriteCompleted(childIndex, messageIndex) {
      var _a, _b;
      (_b = (_a = this.getBufferEntry(messageIndex)).callback) === null || _b === undefined || _b.call(_a);
      this.clearSentMessages();
      const childCall = this.underlyingCalls[childIndex];
      childCall.nextMessageToSend += 1;
      this.sendNextChildMessage(childIndex);
    }
    sendNextChildMessage(childIndex) {
      const childCall = this.underlyingCalls[childIndex];
      if (childCall.state === "COMPLETED") {
        return;
      }
      const messageIndex = childCall.nextMessageToSend;
      if (this.getBufferEntry(messageIndex)) {
        const bufferEntry = this.getBufferEntry(messageIndex);
        switch (bufferEntry.entryType) {
          case "MESSAGE":
            childCall.call.sendMessageWithContext({
              callback: (error) => {
                this.handleChildWriteCompleted(childIndex, messageIndex);
              }
            }, bufferEntry.message.message);
            const nextEntry = this.getBufferEntry(messageIndex + 1);
            if (nextEntry.entryType === "HALF_CLOSE") {
              this.trace("Sending halfClose immediately after message to child [" + childCall.call.getCallNumber() + "] - optimizing for unary/final message");
              childCall.nextMessageToSend += 1;
              childCall.call.halfClose();
            }
            break;
          case "HALF_CLOSE":
            childCall.nextMessageToSend += 1;
            childCall.call.halfClose();
            break;
          case "FREED":
            break;
        }
      }
    }
    sendMessageWithContext(context, message) {
      this.trace("write() called with message of length " + message.length);
      const writeObj = {
        message,
        flags: context.flags
      };
      const messageIndex = this.getNextBufferIndex();
      const bufferEntry = {
        entryType: "MESSAGE",
        message: writeObj,
        allocated: this.bufferTracker.allocate(message.length, this.callNumber)
      };
      this.writeBuffer.push(bufferEntry);
      if (bufferEntry.allocated) {
        process.nextTick(() => {
          var _a;
          (_a = context.callback) === null || _a === undefined || _a.call(context);
        });
        for (const [callIndex, call] of this.underlyingCalls.entries()) {
          if (call.state === "ACTIVE" && call.nextMessageToSend === messageIndex) {
            call.call.sendMessageWithContext({
              callback: (error) => {
                this.handleChildWriteCompleted(callIndex, messageIndex);
              }
            }, message);
          }
        }
      } else {
        this.commitCallWithMostMessages();
        if (this.committedCallIndex === null) {
          return;
        }
        const call = this.underlyingCalls[this.committedCallIndex];
        bufferEntry.callback = context.callback;
        if (call.state === "ACTIVE" && call.nextMessageToSend === messageIndex) {
          call.call.sendMessageWithContext({
            callback: (error) => {
              this.handleChildWriteCompleted(this.committedCallIndex, messageIndex);
            }
          }, message);
        }
      }
    }
    startRead() {
      this.trace("startRead called");
      this.readStarted = true;
      for (const underlyingCall of this.underlyingCalls) {
        if ((underlyingCall === null || underlyingCall === undefined ? undefined : underlyingCall.state) === "ACTIVE") {
          underlyingCall.call.startRead();
        }
      }
    }
    halfClose() {
      this.trace("halfClose called");
      const halfCloseIndex = this.getNextBufferIndex();
      this.writeBuffer.push({
        entryType: "HALF_CLOSE",
        allocated: false
      });
      for (const call of this.underlyingCalls) {
        if ((call === null || call === undefined ? undefined : call.state) === "ACTIVE") {
          if (call.nextMessageToSend === halfCloseIndex || call.nextMessageToSend === halfCloseIndex - 1) {
            this.trace("Sending halfClose immediately to child [" + call.call.getCallNumber() + "] - all messages already sent");
            call.nextMessageToSend += 1;
            call.call.halfClose();
          }
        }
      }
    }
    setCredentials(newCredentials) {
      throw new Error("Method not implemented.");
    }
    getMethod() {
      return this.methodName;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      if (this.committedCallIndex !== null) {
        return this.underlyingCalls[this.committedCallIndex].call.getAuthContext();
      } else {
        return null;
      }
    }
  }
  exports.RetryingCall = RetryingCall;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/subchannel-interface.js
var require_subchannel_interface = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseSubchannelWrapper = undefined;

  class BaseSubchannelWrapper {
    constructor(child) {
      this.child = child;
      this.healthy = true;
      this.healthListeners = new Set;
      this.refcount = 0;
      this.dataWatchers = new Set;
      child.addHealthStateWatcher((childHealthy) => {
        if (this.healthy) {
          this.updateHealthListeners();
        }
      });
    }
    updateHealthListeners() {
      for (const listener of this.healthListeners) {
        listener(this.isHealthy());
      }
    }
    getConnectivityState() {
      return this.child.getConnectivityState();
    }
    addConnectivityStateListener(listener) {
      this.child.addConnectivityStateListener(listener);
    }
    removeConnectivityStateListener(listener) {
      this.child.removeConnectivityStateListener(listener);
    }
    startConnecting() {
      this.child.startConnecting();
    }
    getAddress() {
      return this.child.getAddress();
    }
    throttleKeepalive(newKeepaliveTime) {
      this.child.throttleKeepalive(newKeepaliveTime);
    }
    ref() {
      this.child.ref();
      this.refcount += 1;
    }
    unref() {
      this.child.unref();
      this.refcount -= 1;
      if (this.refcount === 0) {
        this.destroy();
      }
    }
    destroy() {
      for (const watcher of this.dataWatchers) {
        watcher.destroy();
      }
    }
    getChannelzRef() {
      return this.child.getChannelzRef();
    }
    isHealthy() {
      return this.healthy && this.child.isHealthy();
    }
    addHealthStateWatcher(listener) {
      this.healthListeners.add(listener);
    }
    removeHealthStateWatcher(listener) {
      this.healthListeners.delete(listener);
    }
    addDataWatcher(dataWatcher) {
      dataWatcher.setSubchannel(this.getRealSubchannel());
      this.dataWatchers.add(dataWatcher);
    }
    setHealthy(healthy) {
      if (healthy !== this.healthy) {
        this.healthy = healthy;
        if (this.child.isHealthy()) {
          this.updateHealthListeners();
        }
      }
    }
    getRealSubchannel() {
      return this.child.getRealSubchannel();
    }
    realSubchannelEquals(other) {
      return this.getRealSubchannel() === other.getRealSubchannel();
    }
    getCallCredentials() {
      return this.child.getCallCredentials();
    }
    getChannel() {
      return this.child.getChannel();
    }
  }
  exports.BaseSubchannelWrapper = BaseSubchannelWrapper;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/internal-channel.js
var require_internal_channel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InternalChannel = exports.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = undefined;
  var channel_credentials_1 = require_channel_credentials();
  var resolving_load_balancer_1 = require_resolving_load_balancer();
  var subchannel_pool_1 = require_subchannel_pool();
  var picker_1 = require_picker();
  var metadata_1 = require_metadata();
  var constants_1 = require_constants();
  var filter_stack_1 = require_filter_stack();
  var compression_filter_1 = require_compression_filter();
  var resolver_1 = require_resolver();
  var logging_1 = require_logging();
  var http_proxy_1 = require_http_proxy();
  var uri_parser_1 = require_uri_parser();
  var connectivity_state_1 = require_connectivity_state();
  var channelz_1 = require_channelz();
  var load_balancing_call_1 = require_load_balancing_call();
  var deadline_1 = require_deadline();
  var resolving_call_1 = require_resolving_call();
  var call_number_1 = require_call_number();
  var control_plane_status_1 = require_control_plane_status();
  var retrying_call_1 = require_retrying_call();
  var subchannel_interface_1 = require_subchannel_interface();
  var MAX_TIMEOUT_TIME = 2147483647;
  var MIN_IDLE_TIMEOUT_MS = 1000;
  var DEFAULT_IDLE_TIMEOUT_MS = 30 * 60 * 1000;
  var RETRY_THROTTLER_MAP = new Map;
  var DEFAULT_RETRY_BUFFER_SIZE_BYTES = 1 << 24;
  var DEFAULT_PER_RPC_RETRY_BUFFER_SIZE_BYTES = 1 << 20;

  class ChannelSubchannelWrapper extends subchannel_interface_1.BaseSubchannelWrapper {
    constructor(childSubchannel, channel) {
      super(childSubchannel);
      this.channel = channel;
      this.refCount = 0;
      this.subchannelStateListener = (subchannel, previousState, newState, keepaliveTime) => {
        channel.throttleKeepalive(keepaliveTime);
      };
    }
    ref() {
      if (this.refCount === 0) {
        this.child.addConnectivityStateListener(this.subchannelStateListener);
        this.channel.addWrappedSubchannel(this);
      }
      this.child.ref();
      this.refCount += 1;
    }
    unref() {
      this.child.unref();
      this.refCount -= 1;
      if (this.refCount <= 0) {
        this.child.removeConnectivityStateListener(this.subchannelStateListener);
        this.channel.removeWrappedSubchannel(this);
      }
    }
  }

  class ShutdownPicker {
    pick(pickArgs) {
      return {
        pickResultType: picker_1.PickResultType.DROP,
        status: {
          code: constants_1.Status.UNAVAILABLE,
          details: "Channel closed before call started",
          metadata: new metadata_1.Metadata
        },
        subchannel: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  exports.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";

  class ChannelzInfoTracker {
    constructor(target) {
      this.target = target;
      this.trace = new channelz_1.ChannelzTrace;
      this.callTracker = new channelz_1.ChannelzCallTracker;
      this.childrenTracker = new channelz_1.ChannelzChildrenTracker;
      this.state = connectivity_state_1.ConnectivityState.IDLE;
    }
    getChannelzInfoCallback() {
      return () => {
        return {
          target: this.target,
          state: this.state,
          trace: this.trace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists()
        };
      };
    }
  }

  class InternalChannel {
    constructor(target, credentials, options) {
      var _a, _b, _c, _d, _e, _f;
      this.credentials = credentials;
      this.options = options;
      this.connectivityState = connectivity_state_1.ConnectivityState.IDLE;
      this.currentPicker = new picker_1.UnavailablePicker;
      this.configSelectionQueue = [];
      this.pickQueue = [];
      this.connectivityStateWatchers = [];
      this.callRefTimer = null;
      this.configSelector = null;
      this.currentResolutionError = null;
      this.wrappedSubchannels = new Set;
      this.callCount = 0;
      this.idleTimer = null;
      this.channelzEnabled = true;
      this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      if (typeof target !== "string") {
        throw new TypeError("Channel target must be a string");
      }
      if (!(credentials instanceof channel_credentials_1.ChannelCredentials)) {
        throw new TypeError("Channel credentials must be a ChannelCredentials object");
      }
      if (options) {
        if (typeof options !== "object") {
          throw new TypeError("Channel options must be an object");
        }
      }
      this.channelzInfoTracker = new ChannelzInfoTracker(target);
      const originalTargetUri = (0, uri_parser_1.parseUri)(target);
      if (originalTargetUri === null) {
        throw new Error(`Could not parse target name "${target}"`);
      }
      const defaultSchemeMapResult = (0, resolver_1.mapUriDefaultScheme)(originalTargetUri);
      if (defaultSchemeMapResult === null) {
        throw new Error(`Could not find a default scheme for target name "${target}"`);
      }
      if (this.options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
      }
      this.channelzRef = (0, channelz_1.registerChannelzChannel)(target, this.channelzInfoTracker.getChannelzInfoCallback(), this.channelzEnabled);
      if (this.channelzEnabled) {
        this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created");
      }
      if (this.options["grpc.default_authority"]) {
        this.defaultAuthority = this.options["grpc.default_authority"];
      } else {
        this.defaultAuthority = (0, resolver_1.getDefaultAuthority)(defaultSchemeMapResult);
      }
      const proxyMapResult = (0, http_proxy_1.mapProxyName)(defaultSchemeMapResult, options);
      this.target = proxyMapResult.target;
      this.options = Object.assign({}, this.options, proxyMapResult.extraOptions);
      this.subchannelPool = (0, subchannel_pool_1.getSubchannelPool)(((_a = this.options["grpc.use_local_subchannel_pool"]) !== null && _a !== undefined ? _a : 0) === 0);
      this.retryBufferTracker = new retrying_call_1.MessageBufferTracker((_b = this.options["grpc.retry_buffer_size"]) !== null && _b !== undefined ? _b : DEFAULT_RETRY_BUFFER_SIZE_BYTES, (_c = this.options["grpc.per_rpc_retry_buffer_size"]) !== null && _c !== undefined ? _c : DEFAULT_PER_RPC_RETRY_BUFFER_SIZE_BYTES);
      this.keepaliveTime = (_d = this.options["grpc.keepalive_time_ms"]) !== null && _d !== undefined ? _d : -1;
      this.idleTimeoutMs = Math.max((_e = this.options["grpc.client_idle_timeout_ms"]) !== null && _e !== undefined ? _e : DEFAULT_IDLE_TIMEOUT_MS, MIN_IDLE_TIMEOUT_MS);
      const channelControlHelper = {
        createSubchannel: (subchannelAddress, subchannelArgs) => {
          const finalSubchannelArgs = {};
          for (const [key, value] of Object.entries(subchannelArgs)) {
            if (!key.startsWith(exports.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) {
              finalSubchannelArgs[key] = value;
            }
          }
          const subchannel = this.subchannelPool.getOrCreateSubchannel(this.target, subchannelAddress, finalSubchannelArgs, this.credentials);
          subchannel.throttleKeepalive(this.keepaliveTime);
          if (this.channelzEnabled) {
            this.channelzInfoTracker.trace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", subchannel.getChannelzRef());
          }
          const wrappedSubchannel = new ChannelSubchannelWrapper(subchannel, this);
          return wrappedSubchannel;
        },
        updateState: (connectivityState, picker) => {
          this.currentPicker = picker;
          const queueCopy = this.pickQueue.slice();
          this.pickQueue = [];
          if (queueCopy.length > 0) {
            this.callRefTimerUnref();
          }
          for (const call of queueCopy) {
            call.doPick();
          }
          this.updateState(connectivityState);
        },
        requestReresolution: () => {
          throw new Error("Resolving load balancer should never call requestReresolution");
        },
        addChannelzChild: (child) => {
          if (this.channelzEnabled) {
            this.channelzInfoTracker.childrenTracker.refChild(child);
          }
        },
        removeChannelzChild: (child) => {
          if (this.channelzEnabled) {
            this.channelzInfoTracker.childrenTracker.unrefChild(child);
          }
        }
      };
      this.resolvingLoadBalancer = new resolving_load_balancer_1.ResolvingLoadBalancer(this.target, channelControlHelper, this.options, (serviceConfig, configSelector) => {
        var _a2;
        if (serviceConfig.retryThrottling) {
          RETRY_THROTTLER_MAP.set(this.getTarget(), new retrying_call_1.RetryThrottler(serviceConfig.retryThrottling.maxTokens, serviceConfig.retryThrottling.tokenRatio, RETRY_THROTTLER_MAP.get(this.getTarget())));
        } else {
          RETRY_THROTTLER_MAP.delete(this.getTarget());
        }
        if (this.channelzEnabled) {
          this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded");
        }
        (_a2 = this.configSelector) === null || _a2 === undefined || _a2.unref();
        this.configSelector = configSelector;
        this.currentResolutionError = null;
        process.nextTick(() => {
          const localQueue = this.configSelectionQueue;
          this.configSelectionQueue = [];
          if (localQueue.length > 0) {
            this.callRefTimerUnref();
          }
          for (const call of localQueue) {
            call.getConfig();
          }
        });
      }, (status) => {
        if (this.channelzEnabled) {
          this.channelzInfoTracker.trace.addTrace("CT_WARNING", "Address resolution failed with code " + status.code + ' and details "' + status.details + '"');
        }
        if (this.configSelectionQueue.length > 0) {
          this.trace("Name resolution failed with calls queued for config selection");
        }
        if (this.configSelector === null) {
          this.currentResolutionError = Object.assign(Object.assign({}, (0, control_plane_status_1.restrictControlPlaneStatusCode)(status.code, status.details)), { metadata: status.metadata });
        }
        const localQueue = this.configSelectionQueue;
        this.configSelectionQueue = [];
        if (localQueue.length > 0) {
          this.callRefTimerUnref();
        }
        for (const call of localQueue) {
          call.reportResolverError(status);
        }
      });
      this.filterStackFactory = new filter_stack_1.FilterStackFactory([
        new compression_filter_1.CompressionFilterFactory(this, this.options)
      ]);
      this.trace("Channel constructed with options " + JSON.stringify(options, undefined, 2));
      const error = new Error;
      if ((0, logging_1.isTracerEnabled)("channel_stacktrace")) {
        (0, logging_1.trace)(constants_1.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + ") " + `Channel constructed 
` + ((_f = error.stack) === null || _f === undefined ? undefined : _f.substring(error.stack.indexOf(`
`) + 1)));
      }
      this.lastActivityTimestamp = new Date;
    }
    trace(text, verbosityOverride) {
      (0, logging_1.trace)(verbosityOverride !== null && verbosityOverride !== undefined ? verbosityOverride : constants_1.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + (0, uri_parser_1.uriToString)(this.target) + " " + text);
    }
    callRefTimerRef() {
      var _a, _b, _c, _d;
      if (!this.callRefTimer) {
        this.callRefTimer = setInterval(() => {}, MAX_TIMEOUT_TIME);
      }
      if (!((_b = (_a = this.callRefTimer).hasRef) === null || _b === undefined ? undefined : _b.call(_a))) {
        this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
        (_d = (_c = this.callRefTimer).ref) === null || _d === undefined || _d.call(_c);
      }
    }
    callRefTimerUnref() {
      var _a, _b, _c;
      if (!((_a = this.callRefTimer) === null || _a === undefined ? undefined : _a.hasRef) || this.callRefTimer.hasRef()) {
        this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
        (_c = (_b = this.callRefTimer) === null || _b === undefined ? undefined : _b.unref) === null || _c === undefined || _c.call(_b);
      }
    }
    removeConnectivityStateWatcher(watcherObject) {
      const watcherIndex = this.connectivityStateWatchers.findIndex((value) => value === watcherObject);
      if (watcherIndex >= 0) {
        this.connectivityStateWatchers.splice(watcherIndex, 1);
      }
    }
    updateState(newState) {
      (0, logging_1.trace)(constants_1.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + (0, uri_parser_1.uriToString)(this.target) + " " + connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
      if (this.channelzEnabled) {
        this.channelzInfoTracker.trace.addTrace("CT_INFO", "Connectivity state change to " + connectivity_state_1.ConnectivityState[newState]);
      }
      this.connectivityState = newState;
      this.channelzInfoTracker.state = newState;
      const watchersCopy = this.connectivityStateWatchers.slice();
      for (const watcherObject of watchersCopy) {
        if (newState !== watcherObject.currentState) {
          if (watcherObject.timer) {
            clearTimeout(watcherObject.timer);
          }
          this.removeConnectivityStateWatcher(watcherObject);
          watcherObject.callback();
        }
      }
      if (newState !== connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
        this.currentResolutionError = null;
      }
    }
    throttleKeepalive(newKeepaliveTime) {
      if (newKeepaliveTime > this.keepaliveTime) {
        this.keepaliveTime = newKeepaliveTime;
        for (const wrappedSubchannel of this.wrappedSubchannels) {
          wrappedSubchannel.throttleKeepalive(newKeepaliveTime);
        }
      }
    }
    addWrappedSubchannel(wrappedSubchannel) {
      this.wrappedSubchannels.add(wrappedSubchannel);
    }
    removeWrappedSubchannel(wrappedSubchannel) {
      this.wrappedSubchannels.delete(wrappedSubchannel);
    }
    doPick(metadata, extraPickInfo) {
      return this.currentPicker.pick({
        metadata,
        extraPickInfo
      });
    }
    queueCallForPick(call) {
      this.pickQueue.push(call);
      this.callRefTimerRef();
    }
    getConfig(method, metadata) {
      if (this.connectivityState !== connectivity_state_1.ConnectivityState.SHUTDOWN) {
        this.resolvingLoadBalancer.exitIdle();
      }
      if (this.configSelector) {
        return {
          type: "SUCCESS",
          config: this.configSelector.invoke(method, metadata, this.randomChannelId)
        };
      } else {
        if (this.currentResolutionError) {
          return {
            type: "ERROR",
            error: this.currentResolutionError
          };
        } else {
          return {
            type: "NONE"
          };
        }
      }
    }
    queueCallForConfig(call) {
      this.configSelectionQueue.push(call);
      this.callRefTimerRef();
    }
    enterIdle() {
      this.resolvingLoadBalancer.destroy();
      this.updateState(connectivity_state_1.ConnectivityState.IDLE);
      this.currentPicker = new picker_1.QueuePicker(this.resolvingLoadBalancer);
      if (this.idleTimer) {
        clearTimeout(this.idleTimer);
        this.idleTimer = null;
      }
      if (this.callRefTimer) {
        clearInterval(this.callRefTimer);
        this.callRefTimer = null;
      }
    }
    startIdleTimeout(timeoutMs) {
      var _a, _b;
      this.idleTimer = setTimeout(() => {
        if (this.callCount > 0) {
          this.startIdleTimeout(this.idleTimeoutMs);
          return;
        }
        const now = new Date;
        const timeSinceLastActivity = now.valueOf() - this.lastActivityTimestamp.valueOf();
        if (timeSinceLastActivity >= this.idleTimeoutMs) {
          this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity");
          this.enterIdle();
        } else {
          this.startIdleTimeout(this.idleTimeoutMs - timeSinceLastActivity);
        }
      }, timeoutMs);
      (_b = (_a = this.idleTimer).unref) === null || _b === undefined || _b.call(_a);
    }
    maybeStartIdleTimer() {
      if (this.connectivityState !== connectivity_state_1.ConnectivityState.SHUTDOWN && !this.idleTimer) {
        this.startIdleTimeout(this.idleTimeoutMs);
      }
    }
    onCallStart() {
      if (this.channelzEnabled) {
        this.channelzInfoTracker.callTracker.addCallStarted();
      }
      this.callCount += 1;
    }
    onCallEnd(status) {
      if (this.channelzEnabled) {
        if (status.code === constants_1.Status.OK) {
          this.channelzInfoTracker.callTracker.addCallSucceeded();
        } else {
          this.channelzInfoTracker.callTracker.addCallFailed();
        }
      }
      this.callCount -= 1;
      this.lastActivityTimestamp = new Date;
      this.maybeStartIdleTimer();
    }
    createLoadBalancingCall(callConfig, method, host, credentials, deadline) {
      const callNumber = (0, call_number_1.getNextCallNumber)();
      this.trace("createLoadBalancingCall [" + callNumber + '] method="' + method + '"');
      return new load_balancing_call_1.LoadBalancingCall(this, callConfig, method, host, credentials, deadline, callNumber);
    }
    createRetryingCall(callConfig, method, host, credentials, deadline) {
      const callNumber = (0, call_number_1.getNextCallNumber)();
      this.trace("createRetryingCall [" + callNumber + '] method="' + method + '"');
      return new retrying_call_1.RetryingCall(this, callConfig, method, host, credentials, deadline, callNumber, this.retryBufferTracker, RETRY_THROTTLER_MAP.get(this.getTarget()));
    }
    createResolvingCall(method, deadline, host, parentCall, propagateFlags) {
      const callNumber = (0, call_number_1.getNextCallNumber)();
      this.trace("createResolvingCall [" + callNumber + '] method="' + method + '", deadline=' + (0, deadline_1.deadlineToString)(deadline));
      const finalOptions = {
        deadline,
        flags: propagateFlags !== null && propagateFlags !== undefined ? propagateFlags : constants_1.Propagate.DEFAULTS,
        host: host !== null && host !== undefined ? host : this.defaultAuthority,
        parentCall
      };
      const call = new resolving_call_1.ResolvingCall(this, method, finalOptions, this.filterStackFactory.clone(), callNumber);
      this.onCallStart();
      call.addStatusWatcher((status) => {
        this.onCallEnd(status);
      });
      return call;
    }
    close() {
      var _a;
      this.resolvingLoadBalancer.destroy();
      this.updateState(connectivity_state_1.ConnectivityState.SHUTDOWN);
      this.currentPicker = new ShutdownPicker;
      for (const call of this.configSelectionQueue) {
        call.cancelWithStatus(constants_1.Status.UNAVAILABLE, "Channel closed before call started");
      }
      this.configSelectionQueue = [];
      for (const call of this.pickQueue) {
        call.cancelWithStatus(constants_1.Status.UNAVAILABLE, "Channel closed before call started");
      }
      this.pickQueue = [];
      if (this.callRefTimer) {
        clearInterval(this.callRefTimer);
      }
      if (this.idleTimer) {
        clearTimeout(this.idleTimer);
      }
      if (this.channelzEnabled) {
        (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
      }
      this.subchannelPool.unrefUnusedSubchannels();
      (_a = this.configSelector) === null || _a === undefined || _a.unref();
      this.configSelector = null;
    }
    getTarget() {
      return (0, uri_parser_1.uriToString)(this.target);
    }
    getConnectivityState(tryToConnect) {
      const connectivityState = this.connectivityState;
      if (tryToConnect) {
        this.resolvingLoadBalancer.exitIdle();
        this.lastActivityTimestamp = new Date;
        this.maybeStartIdleTimer();
      }
      return connectivityState;
    }
    watchConnectivityState(currentState, deadline, callback) {
      if (this.connectivityState === connectivity_state_1.ConnectivityState.SHUTDOWN) {
        throw new Error("Channel has been shut down");
      }
      let timer = null;
      if (deadline !== Infinity) {
        const deadlineDate = deadline instanceof Date ? deadline : new Date(deadline);
        const now = new Date;
        if (deadline === -Infinity || deadlineDate <= now) {
          process.nextTick(callback, new Error("Deadline passed without connectivity state change"));
          return;
        }
        timer = setTimeout(() => {
          this.removeConnectivityStateWatcher(watcherObject);
          callback(new Error("Deadline passed without connectivity state change"));
        }, deadlineDate.getTime() - now.getTime());
      }
      const watcherObject = {
        currentState,
        callback,
        timer
      };
      this.connectivityStateWatchers.push(watcherObject);
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(method, deadline, host, parentCall, propagateFlags) {
      if (typeof method !== "string") {
        throw new TypeError("Channel#createCall: method must be a string");
      }
      if (!(typeof deadline === "number" || deadline instanceof Date)) {
        throw new TypeError("Channel#createCall: deadline must be a number or Date");
      }
      if (this.connectivityState === connectivity_state_1.ConnectivityState.SHUTDOWN) {
        throw new Error("Channel has been shut down");
      }
      return this.createResolvingCall(method, deadline, host, parentCall, propagateFlags);
    }
    getOptions() {
      return this.options;
    }
  }
  exports.InternalChannel = InternalChannel;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/channel.js
var require_channel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelImplementation = undefined;
  var channel_credentials_1 = require_channel_credentials();
  var internal_channel_1 = require_internal_channel();

  class ChannelImplementation {
    constructor(target, credentials, options) {
      if (typeof target !== "string") {
        throw new TypeError("Channel target must be a string");
      }
      if (!(credentials instanceof channel_credentials_1.ChannelCredentials)) {
        throw new TypeError("Channel credentials must be a ChannelCredentials object");
      }
      if (options) {
        if (typeof options !== "object") {
          throw new TypeError("Channel options must be an object");
        }
      }
      this.internalChannel = new internal_channel_1.InternalChannel(target, credentials, options);
    }
    close() {
      this.internalChannel.close();
    }
    getTarget() {
      return this.internalChannel.getTarget();
    }
    getConnectivityState(tryToConnect) {
      return this.internalChannel.getConnectivityState(tryToConnect);
    }
    watchConnectivityState(currentState, deadline, callback) {
      this.internalChannel.watchConnectivityState(currentState, deadline, callback);
    }
    getChannelzRef() {
      return this.internalChannel.getChannelzRef();
    }
    createCall(method, deadline, host, parentCall, propagateFlags) {
      if (typeof method !== "string") {
        throw new TypeError("Channel#createCall: method must be a string");
      }
      if (!(typeof deadline === "number" || deadline instanceof Date)) {
        throw new TypeError("Channel#createCall: deadline must be a number or Date");
      }
      return this.internalChannel.createCall(method, deadline, host, parentCall, propagateFlags);
    }
  }
  exports.ChannelImplementation = ChannelImplementation;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/server-call.js
var require_server_call = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ServerDuplexStreamImpl = exports.ServerWritableStreamImpl = exports.ServerReadableStreamImpl = exports.ServerUnaryCallImpl = undefined;
  exports.serverErrorToStatus = serverErrorToStatus;
  var events_1 = __require("events");
  var stream_1 = __require("stream");
  var constants_1 = require_constants();
  var metadata_1 = require_metadata();
  function serverErrorToStatus(error, overrideTrailers) {
    var _a;
    const status = {
      code: constants_1.Status.UNKNOWN,
      details: "message" in error ? error.message : "Unknown Error",
      metadata: (_a = overrideTrailers !== null && overrideTrailers !== undefined ? overrideTrailers : error.metadata) !== null && _a !== undefined ? _a : null
    };
    if ("code" in error && typeof error.code === "number" && Number.isInteger(error.code)) {
      status.code = error.code;
      if ("details" in error && typeof error.details === "string") {
        status.details = error.details;
      }
    }
    return status;
  }

  class ServerUnaryCallImpl extends events_1.EventEmitter {
    constructor(path, call, metadata, request) {
      super();
      this.path = path;
      this.call = call;
      this.metadata = metadata;
      this.request = request;
      this.cancelled = false;
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(responseMetadata) {
      this.call.sendMetadata(responseMetadata);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  exports.ServerUnaryCallImpl = ServerUnaryCallImpl;

  class ServerReadableStreamImpl extends stream_1.Readable {
    constructor(path, call, metadata) {
      super({ objectMode: true });
      this.path = path;
      this.call = call;
      this.metadata = metadata;
      this.cancelled = false;
    }
    _read(size) {
      this.call.startRead();
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(responseMetadata) {
      this.call.sendMetadata(responseMetadata);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  exports.ServerReadableStreamImpl = ServerReadableStreamImpl;

  class ServerWritableStreamImpl extends stream_1.Writable {
    constructor(path, call, metadata, request) {
      super({ objectMode: true });
      this.path = path;
      this.call = call;
      this.metadata = metadata;
      this.request = request;
      this.pendingStatus = {
        code: constants_1.Status.OK,
        details: "OK"
      };
      this.cancelled = false;
      this.trailingMetadata = new metadata_1.Metadata;
      this.on("error", (err) => {
        this.pendingStatus = serverErrorToStatus(err);
        this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(responseMetadata) {
      this.call.sendMetadata(responseMetadata);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _write(chunk, encoding, callback) {
      this.call.sendMessage(chunk, callback);
    }
    _final(callback) {
      var _a;
      callback(null);
      this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (_a = this.pendingStatus.metadata) !== null && _a !== undefined ? _a : this.trailingMetadata }));
    }
    end(metadata) {
      if (metadata) {
        this.trailingMetadata = metadata;
      }
      return super.end();
    }
  }
  exports.ServerWritableStreamImpl = ServerWritableStreamImpl;

  class ServerDuplexStreamImpl extends stream_1.Duplex {
    constructor(path, call, metadata) {
      super({ objectMode: true });
      this.path = path;
      this.call = call;
      this.metadata = metadata;
      this.pendingStatus = {
        code: constants_1.Status.OK,
        details: "OK"
      };
      this.cancelled = false;
      this.trailingMetadata = new metadata_1.Metadata;
      this.on("error", (err) => {
        this.pendingStatus = serverErrorToStatus(err);
        this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(responseMetadata) {
      this.call.sendMetadata(responseMetadata);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _read(size) {
      this.call.startRead();
    }
    _write(chunk, encoding, callback) {
      this.call.sendMessage(chunk, callback);
    }
    _final(callback) {
      var _a;
      callback(null);
      this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (_a = this.pendingStatus.metadata) !== null && _a !== undefined ? _a : this.trailingMetadata }));
    }
    end(metadata) {
      if (metadata) {
        this.trailingMetadata = metadata;
      }
      return super.end();
    }
  }
  exports.ServerDuplexStreamImpl = ServerDuplexStreamImpl;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/server-credentials.js
var require_server_credentials = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ServerCredentials = undefined;
  exports.createCertificateProviderServerCredentials = createCertificateProviderServerCredentials;
  exports.createServerCredentialsWithInterceptors = createServerCredentialsWithInterceptors;
  var tls_helpers_1 = require_tls_helpers();

  class ServerCredentials {
    constructor(serverConstructorOptions, contextOptions) {
      this.serverConstructorOptions = serverConstructorOptions;
      this.watchers = new Set;
      this.latestContextOptions = null;
      this.latestContextOptions = contextOptions !== null && contextOptions !== undefined ? contextOptions : null;
    }
    _addWatcher(watcher) {
      this.watchers.add(watcher);
    }
    _removeWatcher(watcher) {
      this.watchers.delete(watcher);
    }
    getWatcherCount() {
      return this.watchers.size;
    }
    updateSecureContextOptions(options) {
      this.latestContextOptions = options;
      for (const watcher of this.watchers) {
        watcher(this.latestContextOptions);
      }
    }
    _isSecure() {
      return this.serverConstructorOptions !== null;
    }
    _getSecureContextOptions() {
      return this.latestContextOptions;
    }
    _getConstructorOptions() {
      return this.serverConstructorOptions;
    }
    _getInterceptors() {
      return [];
    }
    static createInsecure() {
      return new InsecureServerCredentials;
    }
    static createSsl(rootCerts, keyCertPairs, checkClientCertificate = false) {
      var _a;
      if (rootCerts !== null && !Buffer.isBuffer(rootCerts)) {
        throw new TypeError("rootCerts must be null or a Buffer");
      }
      if (!Array.isArray(keyCertPairs)) {
        throw new TypeError("keyCertPairs must be an array");
      }
      if (typeof checkClientCertificate !== "boolean") {
        throw new TypeError("checkClientCertificate must be a boolean");
      }
      const cert = [];
      const key = [];
      for (let i = 0;i < keyCertPairs.length; i++) {
        const pair = keyCertPairs[i];
        if (pair === null || typeof pair !== "object") {
          throw new TypeError(`keyCertPair[${i}] must be an object`);
        }
        if (!Buffer.isBuffer(pair.private_key)) {
          throw new TypeError(`keyCertPair[${i}].private_key must be a Buffer`);
        }
        if (!Buffer.isBuffer(pair.cert_chain)) {
          throw new TypeError(`keyCertPair[${i}].cert_chain must be a Buffer`);
        }
        cert.push(pair.cert_chain);
        key.push(pair.private_key);
      }
      return new SecureServerCredentials({
        requestCert: checkClientCertificate,
        ciphers: tls_helpers_1.CIPHER_SUITES
      }, {
        ca: (_a = rootCerts !== null && rootCerts !== undefined ? rootCerts : (0, tls_helpers_1.getDefaultRootsData)()) !== null && _a !== undefined ? _a : undefined,
        cert,
        key
      });
    }
  }
  exports.ServerCredentials = ServerCredentials;

  class InsecureServerCredentials extends ServerCredentials {
    constructor() {
      super(null);
    }
    _getSettings() {
      return null;
    }
    _equals(other) {
      return other instanceof InsecureServerCredentials;
    }
  }

  class SecureServerCredentials extends ServerCredentials {
    constructor(constructorOptions, contextOptions) {
      super(constructorOptions, contextOptions);
      this.options = Object.assign(Object.assign({}, constructorOptions), contextOptions);
    }
    _equals(other) {
      if (this === other) {
        return true;
      }
      if (!(other instanceof SecureServerCredentials)) {
        return false;
      }
      if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(other.options.ca)) {
        if (!this.options.ca.equals(other.options.ca)) {
          return false;
        }
      } else {
        if (this.options.ca !== other.options.ca) {
          return false;
        }
      }
      if (Array.isArray(this.options.cert) && Array.isArray(other.options.cert)) {
        if (this.options.cert.length !== other.options.cert.length) {
          return false;
        }
        for (let i = 0;i < this.options.cert.length; i++) {
          const thisCert = this.options.cert[i];
          const otherCert = other.options.cert[i];
          if (Buffer.isBuffer(thisCert) && Buffer.isBuffer(otherCert)) {
            if (!thisCert.equals(otherCert)) {
              return false;
            }
          } else {
            if (thisCert !== otherCert) {
              return false;
            }
          }
        }
      } else {
        if (this.options.cert !== other.options.cert) {
          return false;
        }
      }
      if (Array.isArray(this.options.key) && Array.isArray(other.options.key)) {
        if (this.options.key.length !== other.options.key.length) {
          return false;
        }
        for (let i = 0;i < this.options.key.length; i++) {
          const thisKey = this.options.key[i];
          const otherKey = other.options.key[i];
          if (Buffer.isBuffer(thisKey) && Buffer.isBuffer(otherKey)) {
            if (!thisKey.equals(otherKey)) {
              return false;
            }
          } else {
            if (thisKey !== otherKey) {
              return false;
            }
          }
        }
      } else {
        if (this.options.key !== other.options.key) {
          return false;
        }
      }
      if (this.options.requestCert !== other.options.requestCert) {
        return false;
      }
      return true;
    }
  }

  class CertificateProviderServerCredentials extends ServerCredentials {
    constructor(identityCertificateProvider, caCertificateProvider, requireClientCertificate) {
      super({
        requestCert: caCertificateProvider !== null,
        rejectUnauthorized: requireClientCertificate,
        ciphers: tls_helpers_1.CIPHER_SUITES
      });
      this.identityCertificateProvider = identityCertificateProvider;
      this.caCertificateProvider = caCertificateProvider;
      this.requireClientCertificate = requireClientCertificate;
      this.latestCaUpdate = null;
      this.latestIdentityUpdate = null;
      this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this);
      this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
    }
    _addWatcher(watcher) {
      var _a;
      if (this.getWatcherCount() === 0) {
        (_a = this.caCertificateProvider) === null || _a === undefined || _a.addCaCertificateListener(this.caCertificateUpdateListener);
        this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      }
      super._addWatcher(watcher);
    }
    _removeWatcher(watcher) {
      var _a;
      super._removeWatcher(watcher);
      if (this.getWatcherCount() === 0) {
        (_a = this.caCertificateProvider) === null || _a === undefined || _a.removeCaCertificateListener(this.caCertificateUpdateListener);
        this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
      }
    }
    _equals(other) {
      if (this === other) {
        return true;
      }
      if (!(other instanceof CertificateProviderServerCredentials)) {
        return false;
      }
      return this.caCertificateProvider === other.caCertificateProvider && this.identityCertificateProvider === other.identityCertificateProvider && this.requireClientCertificate === other.requireClientCertificate;
    }
    calculateSecureContextOptions() {
      var _a;
      if (this.latestIdentityUpdate === null) {
        return null;
      }
      if (this.caCertificateProvider !== null && this.latestCaUpdate === null) {
        return null;
      }
      return {
        ca: (_a = this.latestCaUpdate) === null || _a === undefined ? undefined : _a.caCertificate,
        cert: [this.latestIdentityUpdate.certificate],
        key: [this.latestIdentityUpdate.privateKey]
      };
    }
    finalizeUpdate() {
      const secureContextOptions = this.calculateSecureContextOptions();
      this.updateSecureContextOptions(secureContextOptions);
    }
    handleCaCertificateUpdate(update) {
      this.latestCaUpdate = update;
      this.finalizeUpdate();
    }
    handleIdentityCertitificateUpdate(update) {
      this.latestIdentityUpdate = update;
      this.finalizeUpdate();
    }
  }
  function createCertificateProviderServerCredentials(caCertificateProvider, identityCertificateProvider, requireClientCertificate) {
    return new CertificateProviderServerCredentials(caCertificateProvider, identityCertificateProvider, requireClientCertificate);
  }

  class InterceptorServerCredentials extends ServerCredentials {
    constructor(childCredentials, interceptors) {
      super({});
      this.childCredentials = childCredentials;
      this.interceptors = interceptors;
    }
    _isSecure() {
      return this.childCredentials._isSecure();
    }
    _equals(other) {
      if (!(other instanceof InterceptorServerCredentials)) {
        return false;
      }
      if (!this.childCredentials._equals(other.childCredentials)) {
        return false;
      }
      if (this.interceptors.length !== other.interceptors.length) {
        return false;
      }
      for (let i = 0;i < this.interceptors.length; i++) {
        if (this.interceptors[i] !== other.interceptors[i]) {
          return false;
        }
      }
      return true;
    }
    _getInterceptors() {
      return this.interceptors;
    }
    _addWatcher(watcher) {
      this.childCredentials._addWatcher(watcher);
    }
    _removeWatcher(watcher) {
      this.childCredentials._removeWatcher(watcher);
    }
    _getConstructorOptions() {
      return this.childCredentials._getConstructorOptions();
    }
    _getSecureContextOptions() {
      return this.childCredentials._getSecureContextOptions();
    }
  }
  function createServerCredentialsWithInterceptors(credentials, interceptors) {
    return new InterceptorServerCredentials(credentials, interceptors);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/duration.js
var require_duration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.durationMessageToDuration = durationMessageToDuration;
  exports.msToDuration = msToDuration;
  exports.durationToMs = durationToMs;
  exports.isDuration = isDuration;
  exports.isDurationMessage = isDurationMessage;
  exports.parseDuration = parseDuration;
  exports.durationToString = durationToString;
  function durationMessageToDuration(message) {
    return {
      seconds: Number.parseInt(message.seconds),
      nanos: message.nanos
    };
  }
  function msToDuration(millis) {
    return {
      seconds: millis / 1000 | 0,
      nanos: millis % 1000 * 1e6 | 0
    };
  }
  function durationToMs(duration) {
    return duration.seconds * 1000 + duration.nanos / 1e6 | 0;
  }
  function isDuration(value) {
    return typeof value.seconds === "number" && typeof value.nanos === "number";
  }
  function isDurationMessage(value) {
    return typeof value.seconds === "string" && typeof value.nanos === "number";
  }
  var durationRegex = /^(\d+)(?:\.(\d+))?s$/;
  function parseDuration(value) {
    const match = value.match(durationRegex);
    if (!match) {
      return null;
    }
    return {
      seconds: Number.parseInt(match[1], 10),
      nanos: match[2] ? Number.parseInt(match[2].padEnd(9, "0"), 10) : 0
    };
  }
  function durationToString(duration) {
    if (duration.nanos === 0) {
      return `${duration.seconds}s`;
    }
    let scaleFactor;
    if (duration.nanos % 1e6 === 0) {
      scaleFactor = 1e6;
    } else if (duration.nanos % 1000 === 0) {
      scaleFactor = 1000;
    } else {
      scaleFactor = 1;
    }
    return `${duration.seconds}.${duration.nanos / scaleFactor}s`;
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/orca.js
var require_orca = __commonJS((exports) => {
  var __dirname = "/opt/mimo-code/node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OrcaOobMetricsSubchannelWrapper = exports.GRPC_METRICS_HEADER = exports.ServerMetricRecorder = exports.PerRequestMetricRecorder = undefined;
  exports.createOrcaClient = createOrcaClient;
  exports.createMetricsReader = createMetricsReader;
  var make_client_1 = require_make_client();
  var duration_1 = require_duration();
  var channel_credentials_1 = require_channel_credentials();
  var subchannel_interface_1 = require_subchannel_interface();
  var constants_1 = require_constants();
  var backoff_timeout_1 = require_backoff_timeout();
  var connectivity_state_1 = require_connectivity_state();
  var loadedOrcaProto = null;
  function loadOrcaProto() {
    if (loadedOrcaProto) {
      return loadedOrcaProto;
    }
    const loaderLoadSync = require_src5().loadSync;
    const loadedProto = loaderLoadSync("xds/service/orca/v3/orca.proto", {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [
        `${__dirname}/../../proto/xds`,
        `${__dirname}/../../proto/protoc-gen-validate`
      ]
    });
    return (0, make_client_1.loadPackageDefinition)(loadedProto);
  }

  class PerRequestMetricRecorder {
    constructor() {
      this.message = {};
    }
    recordRequestCostMetric(name, value) {
      if (!this.message.request_cost) {
        this.message.request_cost = {};
      }
      this.message.request_cost[name] = value;
    }
    recordUtilizationMetric(name, value) {
      if (!this.message.utilization) {
        this.message.utilization = {};
      }
      this.message.utilization[name] = value;
    }
    recordNamedMetric(name, value) {
      if (!this.message.named_metrics) {
        this.message.named_metrics = {};
      }
      this.message.named_metrics[name] = value;
    }
    recordCPUUtilizationMetric(value) {
      this.message.cpu_utilization = value;
    }
    recordMemoryUtilizationMetric(value) {
      this.message.mem_utilization = value;
    }
    recordApplicationUtilizationMetric(value) {
      this.message.application_utilization = value;
    }
    recordQpsMetric(value) {
      this.message.rps_fractional = value;
    }
    recordEpsMetric(value) {
      this.message.eps = value;
    }
    serialize() {
      const orcaProto = loadOrcaProto();
      return orcaProto.xds.data.orca.v3.OrcaLoadReport.serialize(this.message);
    }
  }
  exports.PerRequestMetricRecorder = PerRequestMetricRecorder;
  var DEFAULT_REPORT_INTERVAL_MS = 30000;

  class ServerMetricRecorder {
    constructor() {
      this.message = {};
      this.serviceImplementation = {
        StreamCoreMetrics: (call) => {
          const reportInterval = call.request.report_interval ? (0, duration_1.durationToMs)((0, duration_1.durationMessageToDuration)(call.request.report_interval)) : DEFAULT_REPORT_INTERVAL_MS;
          const reportTimer = setInterval(() => {
            call.write(this.message);
          }, reportInterval);
          call.on("cancelled", () => {
            clearInterval(reportTimer);
          });
        }
      };
    }
    putUtilizationMetric(name, value) {
      if (!this.message.utilization) {
        this.message.utilization = {};
      }
      this.message.utilization[name] = value;
    }
    setAllUtilizationMetrics(metrics) {
      this.message.utilization = Object.assign({}, metrics);
    }
    deleteUtilizationMetric(name) {
      var _a;
      (_a = this.message.utilization) === null || _a === undefined || delete _a[name];
    }
    setCpuUtilizationMetric(value) {
      this.message.cpu_utilization = value;
    }
    deleteCpuUtilizationMetric() {
      delete this.message.cpu_utilization;
    }
    setApplicationUtilizationMetric(value) {
      this.message.application_utilization = value;
    }
    deleteApplicationUtilizationMetric() {
      delete this.message.application_utilization;
    }
    setQpsMetric(value) {
      this.message.rps_fractional = value;
    }
    deleteQpsMetric() {
      delete this.message.rps_fractional;
    }
    setEpsMetric(value) {
      this.message.eps = value;
    }
    deleteEpsMetric() {
      delete this.message.eps;
    }
    addToServer(server) {
      const serviceDefinition = loadOrcaProto().xds.service.orca.v3.OpenRcaService.service;
      server.addService(serviceDefinition, this.serviceImplementation);
    }
  }
  exports.ServerMetricRecorder = ServerMetricRecorder;
  function createOrcaClient(channel) {
    const ClientClass = loadOrcaProto().xds.service.orca.v3.OpenRcaService;
    return new ClientClass("unused", channel_credentials_1.ChannelCredentials.createInsecure(), { channelOverride: channel });
  }
  exports.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
  var PARSED_LOAD_REPORT_KEY = "grpc_orca_load_report";
  function createMetricsReader(listener, previousOnCallEnded) {
    return (code, details, metadata) => {
      let parsedLoadReport = metadata.getOpaque(PARSED_LOAD_REPORT_KEY);
      if (parsedLoadReport) {
        listener(parsedLoadReport);
      } else {
        const serializedLoadReport = metadata.get(exports.GRPC_METRICS_HEADER);
        if (serializedLoadReport.length > 0) {
          const orcaProto = loadOrcaProto();
          parsedLoadReport = orcaProto.xds.data.orca.v3.OrcaLoadReport.deserialize(serializedLoadReport[0]);
          listener(parsedLoadReport);
          metadata.setOpaque(PARSED_LOAD_REPORT_KEY, parsedLoadReport);
        }
      }
      if (previousOnCallEnded) {
        previousOnCallEnded(code, details, metadata);
      }
    };
  }
  var DATA_PRODUCER_KEY = "orca_oob_metrics";

  class OobMetricsDataWatcher {
    constructor(metricsListener, intervalMs) {
      this.metricsListener = metricsListener;
      this.intervalMs = intervalMs;
      this.dataProducer = null;
    }
    setSubchannel(subchannel) {
      const producer = subchannel.getOrCreateDataProducer(DATA_PRODUCER_KEY, createOobMetricsDataProducer);
      this.dataProducer = producer;
      producer.addDataWatcher(this);
    }
    destroy() {
      var _a;
      (_a = this.dataProducer) === null || _a === undefined || _a.removeDataWatcher(this);
    }
    getInterval() {
      return this.intervalMs;
    }
    onMetricsUpdate(metrics) {
      this.metricsListener(metrics);
    }
  }

  class OobMetricsDataProducer {
    constructor(subchannel) {
      this.subchannel = subchannel;
      this.dataWatchers = new Set;
      this.orcaSupported = true;
      this.metricsCall = null;
      this.currentInterval = Infinity;
      this.backoffTimer = new backoff_timeout_1.BackoffTimeout(() => this.updateMetricsSubscription());
      this.subchannelStateListener = () => this.updateMetricsSubscription();
      const channel = subchannel.getChannel();
      this.client = createOrcaClient(channel);
      subchannel.addConnectivityStateListener(this.subchannelStateListener);
    }
    addDataWatcher(dataWatcher) {
      this.dataWatchers.add(dataWatcher);
      this.updateMetricsSubscription();
    }
    removeDataWatcher(dataWatcher) {
      var _a;
      this.dataWatchers.delete(dataWatcher);
      if (this.dataWatchers.size === 0) {
        this.subchannel.removeDataProducer(DATA_PRODUCER_KEY);
        (_a = this.metricsCall) === null || _a === undefined || _a.cancel();
        this.metricsCall = null;
        this.client.close();
        this.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
      } else {
        this.updateMetricsSubscription();
      }
    }
    updateMetricsSubscription() {
      var _a;
      if (this.dataWatchers.size === 0 || !this.orcaSupported || this.subchannel.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
        return;
      }
      const newInterval = Math.min(...Array.from(this.dataWatchers).map((watcher) => watcher.getInterval()));
      if (!this.metricsCall || newInterval !== this.currentInterval) {
        (_a = this.metricsCall) === null || _a === undefined || _a.cancel();
        this.currentInterval = newInterval;
        const metricsCall = this.client.streamCoreMetrics({ report_interval: (0, duration_1.msToDuration)(newInterval) });
        this.metricsCall = metricsCall;
        metricsCall.on("data", (report) => {
          this.dataWatchers.forEach((watcher) => {
            watcher.onMetricsUpdate(report);
          });
        });
        metricsCall.on("error", (error) => {
          this.metricsCall = null;
          if (error.code === constants_1.Status.UNIMPLEMENTED) {
            this.orcaSupported = false;
            return;
          }
          if (error.code === constants_1.Status.CANCELLED) {
            return;
          }
          this.backoffTimer.runOnce();
        });
      }
    }
  }

  class OrcaOobMetricsSubchannelWrapper extends subchannel_interface_1.BaseSubchannelWrapper {
    constructor(child, metricsListener, intervalMs) {
      super(child);
      this.addDataWatcher(new OobMetricsDataWatcher(metricsListener, intervalMs));
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  exports.OrcaOobMetricsSubchannelWrapper = OrcaOobMetricsSubchannelWrapper;
  function createOobMetricsDataProducer(subchannel) {
    return new OobMetricsDataProducer(subchannel);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/server-interceptors.js
var require_server_interceptors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseServerInterceptingCall = exports.ServerInterceptingCall = exports.ResponderBuilder = exports.ServerListenerBuilder = undefined;
  exports.isInterceptingServerListener = isInterceptingServerListener;
  exports.getServerInterceptingCall = getServerInterceptingCall;
  var metadata_1 = require_metadata();
  var constants_1 = require_constants();
  var http2 = __require("http2");
  var error_1 = require_error();
  var zlib = __require("zlib");
  var stream_decoder_1 = require_stream_decoder();
  var logging = require_logging();
  var tls_1 = __require("tls");
  var orca_1 = require_orca();
  var TRACER_NAME = "server_call";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }

  class ServerListenerBuilder {
    constructor() {
      this.metadata = undefined;
      this.message = undefined;
      this.halfClose = undefined;
      this.cancel = undefined;
    }
    withOnReceiveMetadata(onReceiveMetadata) {
      this.metadata = onReceiveMetadata;
      return this;
    }
    withOnReceiveMessage(onReceiveMessage) {
      this.message = onReceiveMessage;
      return this;
    }
    withOnReceiveHalfClose(onReceiveHalfClose) {
      this.halfClose = onReceiveHalfClose;
      return this;
    }
    withOnCancel(onCancel) {
      this.cancel = onCancel;
      return this;
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveHalfClose: this.halfClose,
        onCancel: this.cancel
      };
    }
  }
  exports.ServerListenerBuilder = ServerListenerBuilder;
  function isInterceptingServerListener(listener) {
    return listener.onReceiveMetadata !== undefined && listener.onReceiveMetadata.length === 1;
  }

  class InterceptingServerListenerImpl {
    constructor(listener, nextListener) {
      this.listener = listener;
      this.nextListener = nextListener;
      this.cancelled = false;
      this.processingMetadata = false;
      this.hasPendingMessage = false;
      this.pendingMessage = null;
      this.processingMessage = false;
      this.hasPendingHalfClose = false;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) {
        this.nextListener.onReceiveMessage(this.pendingMessage);
        this.pendingMessage = null;
        this.hasPendingMessage = false;
      }
    }
    processPendingHalfClose() {
      if (this.hasPendingHalfClose) {
        this.nextListener.onReceiveHalfClose();
        this.hasPendingHalfClose = false;
      }
    }
    onReceiveMetadata(metadata) {
      if (this.cancelled) {
        return;
      }
      this.processingMetadata = true;
      this.listener.onReceiveMetadata(metadata, (interceptedMetadata) => {
        this.processingMetadata = false;
        if (this.cancelled) {
          return;
        }
        this.nextListener.onReceiveMetadata(interceptedMetadata);
        this.processPendingMessage();
        this.processPendingHalfClose();
      });
    }
    onReceiveMessage(message) {
      if (this.cancelled) {
        return;
      }
      this.processingMessage = true;
      this.listener.onReceiveMessage(message, (msg) => {
        this.processingMessage = false;
        if (this.cancelled) {
          return;
        }
        if (this.processingMetadata) {
          this.pendingMessage = msg;
          this.hasPendingMessage = true;
        } else {
          this.nextListener.onReceiveMessage(msg);
          this.processPendingHalfClose();
        }
      });
    }
    onReceiveHalfClose() {
      if (this.cancelled) {
        return;
      }
      this.listener.onReceiveHalfClose(() => {
        if (this.cancelled) {
          return;
        }
        if (this.processingMetadata || this.processingMessage) {
          this.hasPendingHalfClose = true;
        } else {
          this.nextListener.onReceiveHalfClose();
        }
      });
    }
    onCancel() {
      this.cancelled = true;
      this.listener.onCancel();
      this.nextListener.onCancel();
    }
  }

  class ResponderBuilder {
    constructor() {
      this.start = undefined;
      this.metadata = undefined;
      this.message = undefined;
      this.status = undefined;
    }
    withStart(start) {
      this.start = start;
      return this;
    }
    withSendMetadata(sendMetadata) {
      this.metadata = sendMetadata;
      return this;
    }
    withSendMessage(sendMessage) {
      this.message = sendMessage;
      return this;
    }
    withSendStatus(sendStatus) {
      this.status = sendStatus;
      return this;
    }
    build() {
      return {
        start: this.start,
        sendMetadata: this.metadata,
        sendMessage: this.message,
        sendStatus: this.status
      };
    }
  }
  exports.ResponderBuilder = ResponderBuilder;
  var defaultServerListener = {
    onReceiveMetadata: (metadata, next) => {
      next(metadata);
    },
    onReceiveMessage: (message, next) => {
      next(message);
    },
    onReceiveHalfClose: (next) => {
      next();
    },
    onCancel: () => {}
  };
  var defaultResponder = {
    start: (next) => {
      next();
    },
    sendMetadata: (metadata, next) => {
      next(metadata);
    },
    sendMessage: (message, next) => {
      next(message);
    },
    sendStatus: (status, next) => {
      next(status);
    }
  };

  class ServerInterceptingCall {
    constructor(nextCall, responder) {
      var _a, _b, _c, _d;
      this.nextCall = nextCall;
      this.processingMetadata = false;
      this.sentMetadata = false;
      this.processingMessage = false;
      this.pendingMessage = null;
      this.pendingMessageCallback = null;
      this.pendingStatus = null;
      this.responder = {
        start: (_a = responder === null || responder === undefined ? undefined : responder.start) !== null && _a !== undefined ? _a : defaultResponder.start,
        sendMetadata: (_b = responder === null || responder === undefined ? undefined : responder.sendMetadata) !== null && _b !== undefined ? _b : defaultResponder.sendMetadata,
        sendMessage: (_c = responder === null || responder === undefined ? undefined : responder.sendMessage) !== null && _c !== undefined ? _c : defaultResponder.sendMessage,
        sendStatus: (_d = responder === null || responder === undefined ? undefined : responder.sendStatus) !== null && _d !== undefined ? _d : defaultResponder.sendStatus
      };
    }
    processPendingMessage() {
      if (this.pendingMessageCallback) {
        this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback);
        this.pendingMessage = null;
        this.pendingMessageCallback = null;
      }
    }
    processPendingStatus() {
      if (this.pendingStatus) {
        this.nextCall.sendStatus(this.pendingStatus);
        this.pendingStatus = null;
      }
    }
    start(listener) {
      this.responder.start((interceptedListener) => {
        var _a, _b, _c, _d;
        const fullInterceptedListener = {
          onReceiveMetadata: (_a = interceptedListener === null || interceptedListener === undefined ? undefined : interceptedListener.onReceiveMetadata) !== null && _a !== undefined ? _a : defaultServerListener.onReceiveMetadata,
          onReceiveMessage: (_b = interceptedListener === null || interceptedListener === undefined ? undefined : interceptedListener.onReceiveMessage) !== null && _b !== undefined ? _b : defaultServerListener.onReceiveMessage,
          onReceiveHalfClose: (_c = interceptedListener === null || interceptedListener === undefined ? undefined : interceptedListener.onReceiveHalfClose) !== null && _c !== undefined ? _c : defaultServerListener.onReceiveHalfClose,
          onCancel: (_d = interceptedListener === null || interceptedListener === undefined ? undefined : interceptedListener.onCancel) !== null && _d !== undefined ? _d : defaultServerListener.onCancel
        };
        const finalInterceptingListener = new InterceptingServerListenerImpl(fullInterceptedListener, listener);
        this.nextCall.start(finalInterceptingListener);
      });
    }
    sendMetadata(metadata) {
      this.processingMetadata = true;
      this.sentMetadata = true;
      this.responder.sendMetadata(metadata, (interceptedMetadata) => {
        this.processingMetadata = false;
        this.nextCall.sendMetadata(interceptedMetadata);
        this.processPendingMessage();
        this.processPendingStatus();
      });
    }
    sendMessage(message, callback) {
      this.processingMessage = true;
      if (!this.sentMetadata) {
        this.sendMetadata(new metadata_1.Metadata);
      }
      this.responder.sendMessage(message, (interceptedMessage) => {
        this.processingMessage = false;
        if (this.processingMetadata) {
          this.pendingMessage = interceptedMessage;
          this.pendingMessageCallback = callback;
        } else {
          this.nextCall.sendMessage(interceptedMessage, callback);
        }
      });
    }
    sendStatus(status) {
      this.responder.sendStatus(status, (interceptedStatus) => {
        if (this.processingMetadata || this.processingMessage) {
          this.pendingStatus = interceptedStatus;
        } else {
          this.nextCall.sendStatus(interceptedStatus);
        }
      });
    }
    startRead() {
      this.nextCall.startRead();
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    getDeadline() {
      return this.nextCall.getDeadline();
    }
    getHost() {
      return this.nextCall.getHost();
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
    getConnectionInfo() {
      return this.nextCall.getConnectionInfo();
    }
    getMetricsRecorder() {
      return this.nextCall.getMetricsRecorder();
    }
  }
  exports.ServerInterceptingCall = ServerInterceptingCall;
  var GRPC_ACCEPT_ENCODING_HEADER = "grpc-accept-encoding";
  var GRPC_ENCODING_HEADER = "grpc-encoding";
  var GRPC_MESSAGE_HEADER = "grpc-message";
  var GRPC_STATUS_HEADER = "grpc-status";
  var GRPC_TIMEOUT_HEADER = "grpc-timeout";
  var DEADLINE_REGEX = /(\d{1,8})\s*([HMSmun])/;
  var deadlineUnitsToMs = {
    H: 3600000,
    M: 60000,
    S: 1000,
    m: 1,
    u: 0.001,
    n: 0.000001
  };
  var defaultCompressionHeaders = {
    [GRPC_ACCEPT_ENCODING_HEADER]: "identity,deflate,gzip",
    [GRPC_ENCODING_HEADER]: "identity"
  };
  var defaultResponseHeaders = {
    [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK,
    [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
  };
  var defaultResponseOptions = {
    waitForTrailers: true
  };

  class BaseServerInterceptingCall {
    constructor(stream, headers, callEventTracker, handler, options) {
      var _a, _b;
      this.stream = stream;
      this.callEventTracker = callEventTracker;
      this.handler = handler;
      this.listener = null;
      this.deadlineTimer = null;
      this.deadline = Infinity;
      this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
      this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      this.cancelled = false;
      this.metadataSent = false;
      this.wantTrailers = false;
      this.cancelNotified = false;
      this.incomingEncoding = "identity";
      this.readQueue = [];
      this.isReadPending = false;
      this.receivedHalfClose = false;
      this.streamEnded = false;
      this.metricsRecorder = new orca_1.PerRequestMetricRecorder;
      this.stream.once("error", (err) => {});
      this.stream.once("close", () => {
        var _a2;
        trace("Request to method " + ((_a2 = this.handler) === null || _a2 === undefined ? undefined : _a2.path) + " stream closed with rstCode " + this.stream.rstCode);
        if (this.callEventTracker && !this.streamEnded) {
          this.streamEnded = true;
          this.callEventTracker.onStreamEnd(false);
          this.callEventTracker.onCallEnd({
            code: constants_1.Status.CANCELLED,
            details: "Stream closed before sending status",
            metadata: null
          });
        }
        this.notifyOnCancel();
      });
      this.stream.on("data", (data) => {
        this.handleDataFrame(data);
      });
      this.stream.pause();
      this.stream.on("end", () => {
        this.handleEndEvent();
      });
      if ("grpc.max_send_message_length" in options) {
        this.maxSendMessageSize = options["grpc.max_send_message_length"];
      }
      if ("grpc.max_receive_message_length" in options) {
        this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
      }
      this.host = (_a = headers[":authority"]) !== null && _a !== undefined ? _a : headers.host;
      this.decoder = new stream_decoder_1.StreamDecoder(this.maxReceiveMessageSize);
      const metadata = metadata_1.Metadata.fromHttp2Headers(headers);
      if (logging.isTracerEnabled(TRACER_NAME)) {
        trace("Request to " + this.handler.path + " received headers " + JSON.stringify(metadata.toJSON()));
      }
      const timeoutHeader = metadata.get(GRPC_TIMEOUT_HEADER);
      if (timeoutHeader.length > 0) {
        this.handleTimeoutHeader(timeoutHeader[0]);
      }
      const encodingHeader = metadata.get(GRPC_ENCODING_HEADER);
      if (encodingHeader.length > 0) {
        this.incomingEncoding = encodingHeader[0];
      }
      metadata.remove(GRPC_TIMEOUT_HEADER);
      metadata.remove(GRPC_ENCODING_HEADER);
      metadata.remove(GRPC_ACCEPT_ENCODING_HEADER);
      metadata.remove(http2.constants.HTTP2_HEADER_ACCEPT_ENCODING);
      metadata.remove(http2.constants.HTTP2_HEADER_TE);
      metadata.remove(http2.constants.HTTP2_HEADER_CONTENT_TYPE);
      this.metadata = metadata;
      const socket = (_b = stream.session) === null || _b === undefined ? undefined : _b.socket;
      this.connectionInfo = {
        localAddress: socket === null || socket === undefined ? undefined : socket.localAddress,
        localPort: socket === null || socket === undefined ? undefined : socket.localPort,
        remoteAddress: socket === null || socket === undefined ? undefined : socket.remoteAddress,
        remotePort: socket === null || socket === undefined ? undefined : socket.remotePort
      };
      this.shouldSendMetrics = !!options["grpc.server_call_metric_recording"];
    }
    handleTimeoutHeader(timeoutHeader) {
      const match = timeoutHeader.toString().match(DEADLINE_REGEX);
      if (match === null) {
        const status = {
          code: constants_1.Status.INTERNAL,
          details: `Invalid ${GRPC_TIMEOUT_HEADER} value "${timeoutHeader}"`,
          metadata: null
        };
        process.nextTick(() => {
          this.sendStatus(status);
        });
        return;
      }
      const timeout = +match[1] * deadlineUnitsToMs[match[2]] | 0;
      const now = new Date;
      this.deadline = now.setMilliseconds(now.getMilliseconds() + timeout);
      this.deadlineTimer = setTimeout(() => {
        const status = {
          code: constants_1.Status.DEADLINE_EXCEEDED,
          details: "Deadline exceeded",
          metadata: null
        };
        this.sendStatus(status);
      }, timeout);
    }
    checkCancelled() {
      if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) {
        this.notifyOnCancel();
        this.cancelled = true;
      }
      return this.cancelled;
    }
    notifyOnCancel() {
      if (this.cancelNotified) {
        return;
      }
      this.cancelNotified = true;
      this.cancelled = true;
      process.nextTick(() => {
        var _a;
        (_a = this.listener) === null || _a === undefined || _a.onCancel();
      });
      if (this.deadlineTimer) {
        clearTimeout(this.deadlineTimer);
      }
      this.stream.resume();
    }
    maybeSendMetadata() {
      if (!this.metadataSent) {
        this.sendMetadata(new metadata_1.Metadata);
      }
    }
    serializeMessage(value) {
      const messageBuffer = this.handler.serialize(value);
      const byteLength = messageBuffer.byteLength;
      const output = Buffer.allocUnsafe(byteLength + 5);
      output.writeUInt8(0, 0);
      output.writeUInt32BE(byteLength, 1);
      messageBuffer.copy(output, 5);
      return output;
    }
    decompressMessage(message, encoding) {
      const messageContents = message.subarray(5);
      if (encoding === "identity") {
        return messageContents;
      } else if (encoding === "deflate" || encoding === "gzip") {
        let decompresser;
        if (encoding === "deflate") {
          decompresser = zlib.createInflate();
        } else {
          decompresser = zlib.createGunzip();
        }
        return new Promise((resolve, reject) => {
          let totalLength = 0;
          const messageParts = [];
          decompresser.on("data", (chunk) => {
            messageParts.push(chunk);
            totalLength += chunk.byteLength;
            if (this.maxReceiveMessageSize !== -1 && totalLength > this.maxReceiveMessageSize) {
              decompresser.destroy();
              reject({
                code: constants_1.Status.RESOURCE_EXHAUSTED,
                details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`
              });
            }
          });
          decompresser.on("end", () => {
            resolve(Buffer.concat(messageParts));
          });
          decompresser.write(messageContents);
          decompresser.end();
        });
      } else {
        return Promise.reject({
          code: constants_1.Status.UNIMPLEMENTED,
          details: `Received message compressed with unsupported encoding "${encoding}"`
        });
      }
    }
    async decompressAndMaybePush(queueEntry) {
      if (queueEntry.type !== "COMPRESSED") {
        throw new Error(`Invalid queue entry type: ${queueEntry.type}`);
      }
      const compressed = queueEntry.compressedMessage.readUInt8(0) === 1;
      const compressedMessageEncoding = compressed ? this.incomingEncoding : "identity";
      let decompressedMessage;
      try {
        decompressedMessage = await this.decompressMessage(queueEntry.compressedMessage, compressedMessageEncoding);
      } catch (err) {
        this.sendStatus(err);
        return;
      }
      try {
        queueEntry.parsedMessage = this.handler.deserialize(decompressedMessage);
      } catch (err) {
        this.sendStatus({
          code: constants_1.Status.INTERNAL,
          details: `Error deserializing request: ${err.message}`
        });
        return;
      }
      queueEntry.type = "READABLE";
      this.maybePushNextMessage();
    }
    maybePushNextMessage() {
      if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
        this.isReadPending = false;
        const nextQueueEntry = this.readQueue.shift();
        if (nextQueueEntry.type === "READABLE") {
          this.listener.onReceiveMessage(nextQueueEntry.parsedMessage);
        } else {
          this.listener.onReceiveHalfClose();
        }
      }
    }
    handleDataFrame(data) {
      var _a;
      if (this.checkCancelled()) {
        return;
      }
      trace("Request to " + this.handler.path + " received data frame of size " + data.length);
      let rawMessages;
      try {
        rawMessages = this.decoder.write(data);
      } catch (e) {
        this.sendStatus({ code: constants_1.Status.RESOURCE_EXHAUSTED, details: e.message });
        return;
      }
      for (const messageBytes of rawMessages) {
        this.stream.pause();
        const queueEntry = {
          type: "COMPRESSED",
          compressedMessage: messageBytes,
          parsedMessage: null
        };
        this.readQueue.push(queueEntry);
        this.decompressAndMaybePush(queueEntry);
        (_a = this.callEventTracker) === null || _a === undefined || _a.addMessageReceived();
      }
    }
    handleEndEvent() {
      this.readQueue.push({
        type: "HALF_CLOSE",
        compressedMessage: null,
        parsedMessage: null
      });
      this.receivedHalfClose = true;
      this.maybePushNextMessage();
    }
    start(listener) {
      trace("Request to " + this.handler.path + " start called");
      if (this.checkCancelled()) {
        return;
      }
      this.listener = listener;
      listener.onReceiveMetadata(this.metadata);
    }
    sendMetadata(metadata) {
      if (this.checkCancelled()) {
        return;
      }
      if (this.metadataSent) {
        return;
      }
      this.metadataSent = true;
      const custom = metadata ? metadata.toHttp2Headers() : null;
      const headers = Object.assign(Object.assign(Object.assign({}, defaultResponseHeaders), defaultCompressionHeaders), custom);
      this.stream.respond(headers, defaultResponseOptions);
    }
    sendMessage(message, callback) {
      if (this.checkCancelled()) {
        return;
      }
      let response;
      try {
        response = this.serializeMessage(message);
      } catch (e) {
        this.sendStatus({
          code: constants_1.Status.INTERNAL,
          details: `Error serializing response: ${(0, error_1.getErrorMessage)(e)}`,
          metadata: null
        });
        return;
      }
      if (this.maxSendMessageSize !== -1 && response.length - 5 > this.maxSendMessageSize) {
        this.sendStatus({
          code: constants_1.Status.RESOURCE_EXHAUSTED,
          details: `Sent message larger than max (${response.length} vs. ${this.maxSendMessageSize})`,
          metadata: null
        });
        return;
      }
      this.maybeSendMetadata();
      trace("Request to " + this.handler.path + " sent data frame of size " + response.length);
      this.stream.write(response, (error) => {
        var _a;
        if (error) {
          this.sendStatus({
            code: constants_1.Status.INTERNAL,
            details: `Error writing message: ${(0, error_1.getErrorMessage)(error)}`,
            metadata: null
          });
          return;
        }
        (_a = this.callEventTracker) === null || _a === undefined || _a.addMessageSent();
        callback();
      });
    }
    sendStatus(status) {
      var _a, _b, _c;
      if (this.checkCancelled()) {
        return;
      }
      trace("Request to method " + ((_a = this.handler) === null || _a === undefined ? undefined : _a.path) + " ended with status code: " + constants_1.Status[status.code] + " details: " + status.details);
      const statusMetadata = (_c = (_b = status.metadata) === null || _b === undefined ? undefined : _b.clone()) !== null && _c !== undefined ? _c : new metadata_1.Metadata;
      if (this.shouldSendMetrics) {
        statusMetadata.set(orca_1.GRPC_METRICS_HEADER, this.metricsRecorder.serialize());
      }
      if (this.metadataSent) {
        if (!this.wantTrailers) {
          this.wantTrailers = true;
          this.stream.once("wantTrailers", () => {
            if (this.callEventTracker && !this.streamEnded) {
              this.streamEnded = true;
              this.callEventTracker.onStreamEnd(true);
              this.callEventTracker.onCallEnd(status);
            }
            const trailersToSend = Object.assign({ [GRPC_STATUS_HEADER]: status.code, [GRPC_MESSAGE_HEADER]: encodeURI(status.details) }, statusMetadata.toHttp2Headers());
            this.stream.sendTrailers(trailersToSend);
            this.notifyOnCancel();
          });
          this.stream.end();
        } else {
          this.notifyOnCancel();
        }
      } else {
        if (this.callEventTracker && !this.streamEnded) {
          this.streamEnded = true;
          this.callEventTracker.onStreamEnd(true);
          this.callEventTracker.onCallEnd(status);
        }
        const trailersToSend = Object.assign(Object.assign({ [GRPC_STATUS_HEADER]: status.code, [GRPC_MESSAGE_HEADER]: encodeURI(status.details) }, defaultResponseHeaders), statusMetadata.toHttp2Headers());
        this.stream.respond(trailersToSend, { endStream: true });
        this.notifyOnCancel();
      }
    }
    startRead() {
      trace("Request to " + this.handler.path + " startRead called");
      if (this.checkCancelled()) {
        return;
      }
      this.isReadPending = true;
      if (this.readQueue.length === 0) {
        if (!this.receivedHalfClose) {
          this.stream.resume();
        }
      } else {
        this.maybePushNextMessage();
      }
    }
    getPeer() {
      var _a;
      const socket = (_a = this.stream.session) === null || _a === undefined ? undefined : _a.socket;
      if (socket === null || socket === undefined ? undefined : socket.remoteAddress) {
        if (socket.remotePort) {
          return `${socket.remoteAddress}:${socket.remotePort}`;
        } else {
          return socket.remoteAddress;
        }
      } else {
        return "unknown";
      }
    }
    getDeadline() {
      return this.deadline;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      var _a;
      if (((_a = this.stream.session) === null || _a === undefined ? undefined : _a.socket) instanceof tls_1.TLSSocket) {
        const peerCertificate = this.stream.session.socket.getPeerCertificate();
        return {
          transportSecurityType: "ssl",
          sslPeerCertificate: peerCertificate.raw ? peerCertificate : undefined
        };
      } else {
        return {};
      }
    }
    getConnectionInfo() {
      return this.connectionInfo;
    }
    getMetricsRecorder() {
      return this.metricsRecorder;
    }
  }
  exports.BaseServerInterceptingCall = BaseServerInterceptingCall;
  function getServerInterceptingCall(interceptors, stream, headers, callEventTracker, handler, options) {
    const methodDefinition = {
      path: handler.path,
      requestStream: handler.type === "clientStream" || handler.type === "bidi",
      responseStream: handler.type === "serverStream" || handler.type === "bidi",
      requestDeserialize: handler.deserialize,
      responseSerialize: handler.serialize
    };
    const baseCall = new BaseServerInterceptingCall(stream, headers, callEventTracker, handler, options);
    return interceptors.reduce((call, interceptor) => {
      return interceptor(methodDefinition, call);
    }, baseCall);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/server.js
var require_server = __commonJS((exports) => {
  var __runInitializers = exports && exports.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0;i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : undefined;
  };
  var __esDecorate = exports && exports.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== undefined && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1;i >= 0; i--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === undefined)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Server = undefined;
  var http2 = __require("http2");
  var util = __require("util");
  var constants_1 = require_constants();
  var server_call_1 = require_server_call();
  var server_credentials_1 = require_server_credentials();
  var resolver_1 = require_resolver();
  var logging = require_logging();
  var subchannel_address_1 = require_subchannel_address();
  var uri_parser_1 = require_uri_parser();
  var channelz_1 = require_channelz();
  var server_interceptors_1 = require_server_interceptors();
  var UNLIMITED_CONNECTION_AGE_MS = ~(1 << 31);
  var KEEPALIVE_MAX_TIME_MS = ~(1 << 31);
  var KEEPALIVE_TIMEOUT_MS = 20000;
  var MAX_CONNECTION_IDLE_MS = ~(1 << 31);
  var { HTTP2_HEADER_PATH } = http2.constants;
  var TRACER_NAME = "server";
  var kMaxAge = Buffer.from("max_age");
  function serverCallTrace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, "server_call", text);
  }
  function noop() {}
  function deprecate(message) {
    return function(target, context) {
      return util.deprecate(target, message);
    };
  }
  function getUnimplementedStatusResponse(methodName) {
    return {
      code: constants_1.Status.UNIMPLEMENTED,
      details: `The server does not implement the method ${methodName}`
    };
  }
  function getDefaultHandler(handlerType, methodName) {
    const unimplementedStatusResponse = getUnimplementedStatusResponse(methodName);
    switch (handlerType) {
      case "unary":
        return (call, callback) => {
          callback(unimplementedStatusResponse, null);
        };
      case "clientStream":
        return (call, callback) => {
          callback(unimplementedStatusResponse, null);
        };
      case "serverStream":
        return (call) => {
          call.emit("error", unimplementedStatusResponse);
        };
      case "bidi":
        return (call) => {
          call.emit("error", unimplementedStatusResponse);
        };
      default:
        throw new Error(`Invalid handlerType ${handlerType}`);
    }
  }
  var Server = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _start_decorators;
    return _a = class Server2 {
      constructor(options) {
        var _b, _c, _d, _e, _f, _g;
        this.boundPorts = (__runInitializers(this, _instanceExtraInitializers), new Map);
        this.http2Servers = new Map;
        this.sessionIdleTimeouts = new Map;
        this.handlers = new Map;
        this.sessions = new Map;
        this.started = false;
        this.shutdown = false;
        this.serverAddressString = "null";
        this.channelzEnabled = true;
        this.options = options !== null && options !== undefined ? options : {};
        if (this.options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
          this.channelzTrace = new channelz_1.ChannelzTraceStub;
          this.callTracker = new channelz_1.ChannelzCallTrackerStub;
          this.listenerChildrenTracker = new channelz_1.ChannelzChildrenTrackerStub;
          this.sessionChildrenTracker = new channelz_1.ChannelzChildrenTrackerStub;
        } else {
          this.channelzTrace = new channelz_1.ChannelzTrace;
          this.callTracker = new channelz_1.ChannelzCallTracker;
          this.listenerChildrenTracker = new channelz_1.ChannelzChildrenTracker;
          this.sessionChildrenTracker = new channelz_1.ChannelzChildrenTracker;
        }
        this.channelzRef = (0, channelz_1.registerChannelzServer)("server", () => this.getChannelzInfo(), this.channelzEnabled);
        this.channelzTrace.addTrace("CT_INFO", "Server created");
        this.maxConnectionAgeMs = (_b = this.options["grpc.max_connection_age_ms"]) !== null && _b !== undefined ? _b : UNLIMITED_CONNECTION_AGE_MS;
        this.maxConnectionAgeGraceMs = (_c = this.options["grpc.max_connection_age_grace_ms"]) !== null && _c !== undefined ? _c : UNLIMITED_CONNECTION_AGE_MS;
        this.keepaliveTimeMs = (_d = this.options["grpc.keepalive_time_ms"]) !== null && _d !== undefined ? _d : KEEPALIVE_MAX_TIME_MS;
        this.keepaliveTimeoutMs = (_e = this.options["grpc.keepalive_timeout_ms"]) !== null && _e !== undefined ? _e : KEEPALIVE_TIMEOUT_MS;
        this.sessionIdleTimeout = (_f = this.options["grpc.max_connection_idle_ms"]) !== null && _f !== undefined ? _f : MAX_CONNECTION_IDLE_MS;
        this.commonServerOptions = {
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
        };
        if ("grpc-node.max_session_memory" in this.options) {
          this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
        } else {
          this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
        }
        if ("grpc.max_concurrent_streams" in this.options) {
          this.commonServerOptions.settings = {
            maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
          };
        }
        this.interceptors = (_g = this.options.interceptors) !== null && _g !== undefined ? _g : [];
        this.trace("Server constructed");
      }
      getChannelzInfo() {
        return {
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          listenerChildren: this.listenerChildrenTracker.getChildLists(),
          sessionChildren: this.sessionChildrenTracker.getChildLists()
        };
      }
      getChannelzSessionInfo(session) {
        var _b, _c, _d;
        const sessionInfo = this.sessions.get(session);
        const sessionSocket = session.socket;
        const remoteAddress = sessionSocket.remoteAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
        const localAddress = sessionSocket.localAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.localAddress, sessionSocket.localPort) : null;
        let tlsInfo;
        if (session.encrypted) {
          const tlsSocket = sessionSocket;
          const cipherInfo = tlsSocket.getCipher();
          const certificate = tlsSocket.getCertificate();
          const peerCertificate = tlsSocket.getPeerCertificate();
          tlsInfo = {
            cipherSuiteStandardName: (_b = cipherInfo.standardName) !== null && _b !== undefined ? _b : null,
            cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
            localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
            remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
          };
        } else {
          tlsInfo = null;
        }
        const socketInfo = {
          remoteAddress,
          localAddress,
          security: tlsInfo,
          remoteName: null,
          streamsStarted: sessionInfo.streamTracker.callsStarted,
          streamsSucceeded: sessionInfo.streamTracker.callsSucceeded,
          streamsFailed: sessionInfo.streamTracker.callsFailed,
          messagesSent: sessionInfo.messagesSent,
          messagesReceived: sessionInfo.messagesReceived,
          keepAlivesSent: sessionInfo.keepAlivesSent,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: sessionInfo.streamTracker.lastCallStartedTimestamp,
          lastMessageSentTimestamp: sessionInfo.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: sessionInfo.lastMessageReceivedTimestamp,
          localFlowControlWindow: (_c = session.state.localWindowSize) !== null && _c !== undefined ? _c : null,
          remoteFlowControlWindow: (_d = session.state.remoteWindowSize) !== null && _d !== undefined ? _d : null
        };
        return socketInfo;
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + text);
      }
      keepaliveTrace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + text);
      }
      addProtoService() {
        throw new Error("Not implemented. Use addService() instead");
      }
      addService(service, implementation) {
        if (service === null || typeof service !== "object" || implementation === null || typeof implementation !== "object") {
          throw new Error("addService() requires two objects as arguments");
        }
        const serviceKeys = Object.keys(service);
        if (serviceKeys.length === 0) {
          throw new Error("Cannot add an empty service to a server");
        }
        serviceKeys.forEach((name) => {
          const attrs = service[name];
          let methodType;
          if (attrs.requestStream) {
            if (attrs.responseStream) {
              methodType = "bidi";
            } else {
              methodType = "clientStream";
            }
          } else {
            if (attrs.responseStream) {
              methodType = "serverStream";
            } else {
              methodType = "unary";
            }
          }
          let implFn = implementation[name];
          let impl;
          if (implFn === undefined && typeof attrs.originalName === "string") {
            implFn = implementation[attrs.originalName];
          }
          if (implFn !== undefined) {
            impl = implFn.bind(implementation);
          } else {
            impl = getDefaultHandler(methodType, name);
          }
          const success = this.register(attrs.path, impl, attrs.responseSerialize, attrs.requestDeserialize, methodType);
          if (success === false) {
            throw new Error(`Method handler for ${attrs.path} already provided.`);
          }
        });
      }
      removeService(service) {
        if (service === null || typeof service !== "object") {
          throw new Error("removeService() requires object as argument");
        }
        const serviceKeys = Object.keys(service);
        serviceKeys.forEach((name) => {
          const attrs = service[name];
          this.unregister(attrs.path);
        });
      }
      bind(port, creds) {
        throw new Error("Not implemented. Use bindAsync() instead");
      }
      experimentalRegisterListenerToChannelz(boundAddress) {
        return (0, channelz_1.registerChannelzSocket)((0, subchannel_address_1.subchannelAddressToString)(boundAddress), () => {
          return {
            localAddress: boundAddress,
            remoteAddress: null,
            security: null,
            remoteName: null,
            streamsStarted: 0,
            streamsSucceeded: 0,
            streamsFailed: 0,
            messagesSent: 0,
            messagesReceived: 0,
            keepAlivesSent: 0,
            lastLocalStreamCreatedTimestamp: null,
            lastRemoteStreamCreatedTimestamp: null,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null,
            localFlowControlWindow: null,
            remoteFlowControlWindow: null
          };
        }, this.channelzEnabled);
      }
      experimentalUnregisterListenerFromChannelz(channelzRef) {
        (0, channelz_1.unregisterChannelzRef)(channelzRef);
      }
      createHttp2Server(credentials) {
        let http2Server;
        if (credentials._isSecure()) {
          const constructorOptions = credentials._getConstructorOptions();
          const contextOptions = credentials._getSecureContextOptions();
          const secureServerOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), constructorOptions), contextOptions), { enableTrace: this.options["grpc-node.tls_enable_trace"] === 1 });
          let areCredentialsValid = contextOptions !== null;
          this.trace("Initial credentials valid: " + areCredentialsValid);
          http2Server = http2.createSecureServer(secureServerOptions);
          http2Server.prependListener("connection", (socket) => {
            if (!areCredentialsValid) {
              this.trace("Dropped connection from " + JSON.stringify(socket.address()) + " due to unloaded credentials");
              socket.destroy();
            }
          });
          http2Server.on("secureConnection", (socket) => {
            socket.on("error", (e) => {
              this.trace("An incoming TLS connection closed with error: " + e.message);
            });
          });
          const credsWatcher = (options) => {
            if (options) {
              const secureServer = http2Server;
              try {
                secureServer.setSecureContext(options);
              } catch (e) {
                logging.log(constants_1.LogVerbosity.ERROR, "Failed to set secure context with error " + e.message);
                options = null;
              }
            }
            areCredentialsValid = options !== null;
            this.trace("Post-update credentials valid: " + areCredentialsValid);
          };
          credentials._addWatcher(credsWatcher);
          http2Server.on("close", () => {
            credentials._removeWatcher(credsWatcher);
          });
        } else {
          http2Server = http2.createServer(this.commonServerOptions);
        }
        http2Server.setTimeout(0, noop);
        this._setupHandlers(http2Server, credentials._getInterceptors());
        return http2Server;
      }
      bindOneAddress(address, boundPortObject) {
        this.trace("Attempting to bind " + (0, subchannel_address_1.subchannelAddressToString)(address));
        const http2Server = this.createHttp2Server(boundPortObject.credentials);
        return new Promise((resolve, reject) => {
          const onError = (err) => {
            this.trace("Failed to bind " + (0, subchannel_address_1.subchannelAddressToString)(address) + " with error " + err.message);
            resolve({
              port: "port" in address ? address.port : 1,
              error: err.message
            });
          };
          http2Server.once("error", onError);
          http2Server.listen(address, () => {
            const boundAddress = http2Server.address();
            let boundSubchannelAddress;
            if (typeof boundAddress === "string") {
              boundSubchannelAddress = {
                path: boundAddress
              };
            } else {
              boundSubchannelAddress = {
                host: boundAddress.address,
                port: boundAddress.port
              };
            }
            const channelzRef = this.experimentalRegisterListenerToChannelz(boundSubchannelAddress);
            this.listenerChildrenTracker.refChild(channelzRef);
            this.http2Servers.set(http2Server, {
              channelzRef,
              sessions: new Set,
              ownsChannelzRef: true
            });
            boundPortObject.listeningServers.add(http2Server);
            this.trace("Successfully bound " + (0, subchannel_address_1.subchannelAddressToString)(boundSubchannelAddress));
            resolve({
              port: "port" in boundSubchannelAddress ? boundSubchannelAddress.port : 1
            });
            http2Server.removeListener("error", onError);
          });
        });
      }
      async bindManyPorts(addressList, boundPortObject) {
        if (addressList.length === 0) {
          return {
            count: 0,
            port: 0,
            errors: []
          };
        }
        if ((0, subchannel_address_1.isTcpSubchannelAddress)(addressList[0]) && addressList[0].port === 0) {
          const firstAddressResult = await this.bindOneAddress(addressList[0], boundPortObject);
          if (firstAddressResult.error) {
            const restAddressResult = await this.bindManyPorts(addressList.slice(1), boundPortObject);
            return Object.assign(Object.assign({}, restAddressResult), { errors: [firstAddressResult.error, ...restAddressResult.errors] });
          } else {
            const restAddresses = addressList.slice(1).map((address) => (0, subchannel_address_1.isTcpSubchannelAddress)(address) ? { host: address.host, port: firstAddressResult.port } : address);
            const restAddressResult = await Promise.all(restAddresses.map((address) => this.bindOneAddress(address, boundPortObject)));
            const allResults = [firstAddressResult, ...restAddressResult];
            return {
              count: allResults.filter((result) => result.error === undefined).length,
              port: firstAddressResult.port,
              errors: allResults.filter((result) => result.error).map((result) => result.error)
            };
          }
        } else {
          const allResults = await Promise.all(addressList.map((address) => this.bindOneAddress(address, boundPortObject)));
          return {
            count: allResults.filter((result) => result.error === undefined).length,
            port: allResults[0].port,
            errors: allResults.filter((result) => result.error).map((result) => result.error)
          };
        }
      }
      async bindAddressList(addressList, boundPortObject) {
        const bindResult = await this.bindManyPorts(addressList, boundPortObject);
        if (bindResult.count > 0) {
          if (bindResult.count < addressList.length) {
            logging.log(constants_1.LogVerbosity.INFO, `WARNING Only ${bindResult.count} addresses added out of total ${addressList.length} resolved`);
          }
          return bindResult.port;
        } else {
          const errorString = `No address added out of total ${addressList.length} resolved`;
          logging.log(constants_1.LogVerbosity.ERROR, errorString);
          throw new Error(`${errorString} errors: [${bindResult.errors.join(",")}]`);
        }
      }
      resolvePort(port) {
        return new Promise((resolve, reject) => {
          let seenResolution = false;
          const resolverListener = (endpointList, attributes, serviceConfig, resolutionNote) => {
            if (seenResolution) {
              return true;
            }
            seenResolution = true;
            if (!endpointList.ok) {
              reject(new Error(endpointList.error.details));
              return true;
            }
            const addressList = [].concat(...endpointList.value.map((endpoint) => endpoint.addresses));
            if (addressList.length === 0) {
              reject(new Error(`No addresses resolved for port ${port}`));
              return true;
            }
            resolve(addressList);
            return true;
          };
          const resolver = (0, resolver_1.createResolver)(port, resolverListener, this.options);
          resolver.updateResolution();
        });
      }
      async bindPort(port, boundPortObject) {
        const addressList = await this.resolvePort(port);
        if (boundPortObject.cancelled) {
          this.completeUnbind(boundPortObject);
          throw new Error("bindAsync operation cancelled by unbind call");
        }
        const portNumber = await this.bindAddressList(addressList, boundPortObject);
        if (boundPortObject.cancelled) {
          this.completeUnbind(boundPortObject);
          throw new Error("bindAsync operation cancelled by unbind call");
        }
        return portNumber;
      }
      normalizePort(port) {
        const initialPortUri = (0, uri_parser_1.parseUri)(port);
        if (initialPortUri === null) {
          throw new Error(`Could not parse port "${port}"`);
        }
        const portUri = (0, resolver_1.mapUriDefaultScheme)(initialPortUri);
        if (portUri === null) {
          throw new Error(`Could not get a default scheme for port "${port}"`);
        }
        return portUri;
      }
      bindAsync(port, creds, callback) {
        if (this.shutdown) {
          throw new Error("bindAsync called after shutdown");
        }
        if (typeof port !== "string") {
          throw new TypeError("port must be a string");
        }
        if (creds === null || !(creds instanceof server_credentials_1.ServerCredentials)) {
          throw new TypeError("creds must be a ServerCredentials object");
        }
        if (typeof callback !== "function") {
          throw new TypeError("callback must be a function");
        }
        this.trace("bindAsync port=" + port);
        const portUri = this.normalizePort(port);
        const deferredCallback = (error, port2) => {
          process.nextTick(() => callback(error, port2));
        };
        let boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
        if (boundPortObject) {
          if (!creds._equals(boundPortObject.credentials)) {
            deferredCallback(new Error(`${port} already bound with incompatible credentials`), 0);
            return;
          }
          boundPortObject.cancelled = false;
          if (boundPortObject.completionPromise) {
            boundPortObject.completionPromise.then((portNum) => callback(null, portNum), (error) => callback(error, 0));
          } else {
            deferredCallback(null, boundPortObject.portNumber);
          }
          return;
        }
        boundPortObject = {
          mapKey: (0, uri_parser_1.uriToString)(portUri),
          originalUri: portUri,
          completionPromise: null,
          cancelled: false,
          portNumber: 0,
          credentials: creds,
          listeningServers: new Set
        };
        const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
        const completionPromise = this.bindPort(portUri, boundPortObject);
        boundPortObject.completionPromise = completionPromise;
        if ((splitPort === null || splitPort === undefined ? undefined : splitPort.port) === 0) {
          completionPromise.then((portNum) => {
            const finalUri = {
              scheme: portUri.scheme,
              authority: portUri.authority,
              path: (0, uri_parser_1.combineHostPort)({ host: splitPort.host, port: portNum })
            };
            boundPortObject.mapKey = (0, uri_parser_1.uriToString)(finalUri);
            boundPortObject.completionPromise = null;
            boundPortObject.portNumber = portNum;
            this.boundPorts.set(boundPortObject.mapKey, boundPortObject);
            callback(null, portNum);
          }, (error) => {
            callback(error, 0);
          });
        } else {
          this.boundPorts.set(boundPortObject.mapKey, boundPortObject);
          completionPromise.then((portNum) => {
            boundPortObject.completionPromise = null;
            boundPortObject.portNumber = portNum;
            callback(null, portNum);
          }, (error) => {
            callback(error, 0);
          });
        }
      }
      registerInjectorToChannelz() {
        return (0, channelz_1.registerChannelzSocket)("injector", () => {
          return {
            localAddress: null,
            remoteAddress: null,
            security: null,
            remoteName: null,
            streamsStarted: 0,
            streamsSucceeded: 0,
            streamsFailed: 0,
            messagesSent: 0,
            messagesReceived: 0,
            keepAlivesSent: 0,
            lastLocalStreamCreatedTimestamp: null,
            lastRemoteStreamCreatedTimestamp: null,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null,
            localFlowControlWindow: null,
            remoteFlowControlWindow: null
          };
        }, this.channelzEnabled);
      }
      experimentalCreateConnectionInjectorWithChannelzRef(credentials, channelzRef, ownsChannelzRef = false) {
        if (credentials === null || !(credentials instanceof server_credentials_1.ServerCredentials)) {
          throw new TypeError("creds must be a ServerCredentials object");
        }
        if (this.channelzEnabled) {
          this.listenerChildrenTracker.refChild(channelzRef);
        }
        const server = this.createHttp2Server(credentials);
        const sessionsSet = new Set;
        this.http2Servers.set(server, {
          channelzRef,
          sessions: sessionsSet,
          ownsChannelzRef
        });
        return {
          injectConnection: (connection) => {
            server.emit("connection", connection);
          },
          drain: (graceTimeMs) => {
            var _b, _c;
            for (const session of sessionsSet) {
              this.closeSession(session);
            }
            (_c = (_b = setTimeout(() => {
              for (const session of sessionsSet) {
                session.destroy(http2.constants.NGHTTP2_CANCEL);
              }
            }, graceTimeMs)).unref) === null || _c === undefined || _c.call(_b);
          },
          destroy: () => {
            this.closeServer(server);
            for (const session of sessionsSet) {
              this.closeSession(session);
            }
          }
        };
      }
      createConnectionInjector(credentials) {
        if (credentials === null || !(credentials instanceof server_credentials_1.ServerCredentials)) {
          throw new TypeError("creds must be a ServerCredentials object");
        }
        const channelzRef = this.registerInjectorToChannelz();
        return this.experimentalCreateConnectionInjectorWithChannelzRef(credentials, channelzRef, true);
      }
      closeServer(server, callback) {
        this.trace("Closing server with address " + JSON.stringify(server.address()));
        const serverInfo = this.http2Servers.get(server);
        server.close(() => {
          if (serverInfo && serverInfo.ownsChannelzRef) {
            this.listenerChildrenTracker.unrefChild(serverInfo.channelzRef);
            (0, channelz_1.unregisterChannelzRef)(serverInfo.channelzRef);
          }
          this.http2Servers.delete(server);
          callback === null || callback === undefined || callback();
        });
      }
      closeSession(session, callback) {
        var _b;
        this.trace("Closing session initiated by " + ((_b = session.socket) === null || _b === undefined ? undefined : _b.remoteAddress));
        const sessionInfo = this.sessions.get(session);
        const closeCallback = () => {
          if (sessionInfo) {
            this.sessionChildrenTracker.unrefChild(sessionInfo.ref);
            (0, channelz_1.unregisterChannelzRef)(sessionInfo.ref);
          }
          callback === null || callback === undefined || callback();
        };
        if (session.closed) {
          queueMicrotask(closeCallback);
        } else {
          session.close(closeCallback);
        }
      }
      completeUnbind(boundPortObject) {
        for (const server of boundPortObject.listeningServers) {
          const serverInfo = this.http2Servers.get(server);
          this.closeServer(server, () => {
            boundPortObject.listeningServers.delete(server);
          });
          if (serverInfo) {
            for (const session of serverInfo.sessions) {
              this.closeSession(session);
            }
          }
        }
        this.boundPorts.delete(boundPortObject.mapKey);
      }
      unbind(port) {
        this.trace("unbind port=" + port);
        const portUri = this.normalizePort(port);
        const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
        if ((splitPort === null || splitPort === undefined ? undefined : splitPort.port) === 0) {
          throw new Error("Cannot unbind port 0");
        }
        const boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
        if (boundPortObject) {
          this.trace("unbinding " + boundPortObject.mapKey + " originally bound as " + (0, uri_parser_1.uriToString)(boundPortObject.originalUri));
          if (boundPortObject.completionPromise) {
            boundPortObject.cancelled = true;
          } else {
            this.completeUnbind(boundPortObject);
          }
        }
      }
      drain(port, graceTimeMs) {
        var _b, _c;
        this.trace("drain port=" + port + " graceTimeMs=" + graceTimeMs);
        const portUri = this.normalizePort(port);
        const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
        if ((splitPort === null || splitPort === undefined ? undefined : splitPort.port) === 0) {
          throw new Error("Cannot drain port 0");
        }
        const boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
        if (!boundPortObject) {
          return;
        }
        const allSessions = new Set;
        for (const http2Server of boundPortObject.listeningServers) {
          const serverEntry = this.http2Servers.get(http2Server);
          if (serverEntry) {
            for (const session of serverEntry.sessions) {
              allSessions.add(session);
              this.closeSession(session, () => {
                allSessions.delete(session);
              });
            }
          }
        }
        (_c = (_b = setTimeout(() => {
          for (const session of allSessions) {
            session.destroy(http2.constants.NGHTTP2_CANCEL);
          }
        }, graceTimeMs)).unref) === null || _c === undefined || _c.call(_b);
      }
      forceShutdown() {
        for (const boundPortObject of this.boundPorts.values()) {
          boundPortObject.cancelled = true;
        }
        this.boundPorts.clear();
        for (const server of this.http2Servers.keys()) {
          this.closeServer(server);
        }
        this.sessions.forEach((channelzInfo, session) => {
          this.closeSession(session);
          session.destroy(http2.constants.NGHTTP2_CANCEL);
        });
        this.sessions.clear();
        (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
        this.shutdown = true;
      }
      register(name, handler, serialize, deserialize, type) {
        if (this.handlers.has(name)) {
          return false;
        }
        this.handlers.set(name, {
          func: handler,
          serialize,
          deserialize,
          type,
          path: name
        });
        return true;
      }
      unregister(name) {
        return this.handlers.delete(name);
      }
      start() {
        if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every((server) => !server.listening)) {
          throw new Error("server must be bound in order to start");
        }
        if (this.started === true) {
          throw new Error("server is already started");
        }
        this.started = true;
      }
      tryShutdown(callback) {
        var _b;
        const wrappedCallback = (error) => {
          (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
          callback(error);
        };
        let pendingChecks = 0;
        function maybeCallback() {
          pendingChecks--;
          if (pendingChecks === 0) {
            wrappedCallback();
          }
        }
        this.shutdown = true;
        for (const [serverKey, server] of this.http2Servers.entries()) {
          pendingChecks++;
          const serverString = server.channelzRef.name;
          this.trace("Waiting for server " + serverString + " to close");
          this.closeServer(serverKey, () => {
            this.trace("Server " + serverString + " finished closing");
            maybeCallback();
          });
          for (const session of server.sessions.keys()) {
            pendingChecks++;
            const sessionString = (_b = session.socket) === null || _b === undefined ? undefined : _b.remoteAddress;
            this.trace("Waiting for session " + sessionString + " to close");
            this.closeSession(session, () => {
              this.trace("Session " + sessionString + " finished closing");
              maybeCallback();
            });
          }
        }
        if (pendingChecks === 0) {
          wrappedCallback();
        }
      }
      addHttp2Port() {
        throw new Error("Not yet implemented");
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      _verifyContentType(stream, headers) {
        const contentType = headers[http2.constants.HTTP2_HEADER_CONTENT_TYPE];
        if (typeof contentType !== "string" || !contentType.startsWith("application/grpc")) {
          stream.respond({
            [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
          }, { endStream: true });
          return false;
        }
        return true;
      }
      _retrieveHandler(path) {
        serverCallTrace("Received call to method " + path + " at address " + this.serverAddressString);
        const handler = this.handlers.get(path);
        if (handler === undefined) {
          serverCallTrace("No handler registered for method " + path + ". Sending UNIMPLEMENTED status.");
          return null;
        }
        return handler;
      }
      _respondWithError(err, stream, channelzSessionInfo = null) {
        var _b, _c;
        const trailersToSend = Object.assign({ "grpc-status": (_b = err.code) !== null && _b !== undefined ? _b : constants_1.Status.INTERNAL, "grpc-message": err.details, [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK, [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto" }, (_c = err.metadata) === null || _c === undefined ? undefined : _c.toHttp2Headers());
        stream.respond(trailersToSend, { endStream: true });
        this.callTracker.addCallFailed();
        channelzSessionInfo === null || channelzSessionInfo === undefined || channelzSessionInfo.streamTracker.addCallFailed();
      }
      _channelzHandler(extraInterceptors, stream, headers) {
        this.onStreamOpened(stream);
        const channelzSessionInfo = this.sessions.get(stream.session);
        this.callTracker.addCallStarted();
        channelzSessionInfo === null || channelzSessionInfo === undefined || channelzSessionInfo.streamTracker.addCallStarted();
        if (!this._verifyContentType(stream, headers)) {
          this.callTracker.addCallFailed();
          channelzSessionInfo === null || channelzSessionInfo === undefined || channelzSessionInfo.streamTracker.addCallFailed();
          return;
        }
        const path = headers[HTTP2_HEADER_PATH];
        const handler = this._retrieveHandler(path);
        if (!handler) {
          this._respondWithError(getUnimplementedStatusResponse(path), stream, channelzSessionInfo);
          return;
        }
        const callEventTracker = {
          addMessageSent: () => {
            if (channelzSessionInfo) {
              channelzSessionInfo.messagesSent += 1;
              channelzSessionInfo.lastMessageSentTimestamp = new Date;
            }
          },
          addMessageReceived: () => {
            if (channelzSessionInfo) {
              channelzSessionInfo.messagesReceived += 1;
              channelzSessionInfo.lastMessageReceivedTimestamp = new Date;
            }
          },
          onCallEnd: (status) => {
            if (status.code === constants_1.Status.OK) {
              this.callTracker.addCallSucceeded();
            } else {
              this.callTracker.addCallFailed();
            }
          },
          onStreamEnd: (success) => {
            if (channelzSessionInfo) {
              if (success) {
                channelzSessionInfo.streamTracker.addCallSucceeded();
              } else {
                channelzSessionInfo.streamTracker.addCallFailed();
              }
            }
          }
        };
        const call = (0, server_interceptors_1.getServerInterceptingCall)([...extraInterceptors, ...this.interceptors], stream, headers, callEventTracker, handler, this.options);
        if (!this._runHandlerForCall(call, handler)) {
          this.callTracker.addCallFailed();
          channelzSessionInfo === null || channelzSessionInfo === undefined || channelzSessionInfo.streamTracker.addCallFailed();
          call.sendStatus({
            code: constants_1.Status.INTERNAL,
            details: `Unknown handler type: ${handler.type}`
          });
        }
      }
      _streamHandler(extraInterceptors, stream, headers) {
        this.onStreamOpened(stream);
        if (this._verifyContentType(stream, headers) !== true) {
          return;
        }
        const path = headers[HTTP2_HEADER_PATH];
        const handler = this._retrieveHandler(path);
        if (!handler) {
          this._respondWithError(getUnimplementedStatusResponse(path), stream, null);
          return;
        }
        const call = (0, server_interceptors_1.getServerInterceptingCall)([...extraInterceptors, ...this.interceptors], stream, headers, null, handler, this.options);
        if (!this._runHandlerForCall(call, handler)) {
          call.sendStatus({
            code: constants_1.Status.INTERNAL,
            details: `Unknown handler type: ${handler.type}`
          });
        }
      }
      _runHandlerForCall(call, handler) {
        const { type } = handler;
        if (type === "unary") {
          handleUnary(call, handler);
        } else if (type === "clientStream") {
          handleClientStreaming(call, handler);
        } else if (type === "serverStream") {
          handleServerStreaming(call, handler);
        } else if (type === "bidi") {
          handleBidiStreaming(call, handler);
        } else {
          return false;
        }
        return true;
      }
      _setupHandlers(http2Server, extraInterceptors) {
        if (http2Server === null) {
          return;
        }
        const serverAddress = http2Server.address();
        let serverAddressString = "null";
        if (serverAddress) {
          if (typeof serverAddress === "string") {
            serverAddressString = serverAddress;
          } else {
            serverAddressString = serverAddress.address + ":" + serverAddress.port;
          }
        }
        this.serverAddressString = serverAddressString;
        const handler = this.channelzEnabled ? this._channelzHandler : this._streamHandler;
        const sessionHandler = this.channelzEnabled ? this._channelzSessionHandler(http2Server) : this._sessionHandler(http2Server);
        http2Server.on("stream", handler.bind(this, extraInterceptors));
        http2Server.on("session", sessionHandler);
      }
      _sessionHandler(http2Server) {
        return (session) => {
          var _b, _c;
          (_b = this.http2Servers.get(http2Server)) === null || _b === undefined || _b.sessions.add(session);
          let connectionAgeTimer = null;
          let connectionAgeGraceTimer = null;
          let keepaliveTimer = null;
          let sessionClosedByServer = false;
          const idleTimeoutObj = this.enableIdleTimeout(session);
          if (this.maxConnectionAgeMs !== UNLIMITED_CONNECTION_AGE_MS) {
            const jitterMagnitude = this.maxConnectionAgeMs / 10;
            const jitter = Math.random() * jitterMagnitude * 2 - jitterMagnitude;
            connectionAgeTimer = setTimeout(() => {
              var _b2, _c2;
              sessionClosedByServer = true;
              this.trace("Connection dropped by max connection age: " + ((_b2 = session.socket) === null || _b2 === undefined ? undefined : _b2.remoteAddress));
              try {
                session.goaway(http2.constants.NGHTTP2_NO_ERROR, ~(1 << 31), kMaxAge);
              } catch (e) {
                session.destroy();
                return;
              }
              session.close();
              if (this.maxConnectionAgeGraceMs !== UNLIMITED_CONNECTION_AGE_MS) {
                connectionAgeGraceTimer = setTimeout(() => {
                  session.destroy();
                }, this.maxConnectionAgeGraceMs);
                (_c2 = connectionAgeGraceTimer.unref) === null || _c2 === undefined || _c2.call(connectionAgeGraceTimer);
              }
            }, this.maxConnectionAgeMs + jitter);
            (_c = connectionAgeTimer.unref) === null || _c === undefined || _c.call(connectionAgeTimer);
          }
          const clearKeepaliveTimeout = () => {
            if (keepaliveTimer) {
              clearTimeout(keepaliveTimer);
              keepaliveTimer = null;
            }
          };
          const canSendPing = () => {
            return !session.destroyed && this.keepaliveTimeMs < KEEPALIVE_MAX_TIME_MS && this.keepaliveTimeMs > 0;
          };
          let sendPing;
          const maybeStartKeepalivePingTimer = () => {
            var _b2;
            if (!canSendPing()) {
              return;
            }
            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
            keepaliveTimer = setTimeout(() => {
              clearKeepaliveTimeout();
              sendPing();
            }, this.keepaliveTimeMs);
            (_b2 = keepaliveTimer.unref) === null || _b2 === undefined || _b2.call(keepaliveTimer);
          };
          sendPing = () => {
            var _b2;
            if (!canSendPing()) {
              return;
            }
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let pingSendError = "";
            try {
              const pingSentSuccessfully = session.ping((err, duration, payload) => {
                clearKeepaliveTimeout();
                if (err) {
                  this.keepaliveTrace("Ping failed with error: " + err.message);
                  sessionClosedByServer = true;
                  session.destroy();
                } else {
                  this.keepaliveTrace("Received ping response");
                  maybeStartKeepalivePingTimer();
                }
              });
              if (!pingSentSuccessfully) {
                pingSendError = "Ping returned false";
              }
            } catch (e) {
              pingSendError = (e instanceof Error ? e.message : "") || "Unknown error";
            }
            if (pingSendError) {
              this.keepaliveTrace("Ping send failed: " + pingSendError);
              this.trace("Connection dropped due to ping send error: " + pingSendError);
              sessionClosedByServer = true;
              session.destroy();
              return;
            }
            keepaliveTimer = setTimeout(() => {
              clearKeepaliveTimeout();
              this.keepaliveTrace("Ping timeout passed without response");
              this.trace("Connection dropped by keepalive timeout");
              sessionClosedByServer = true;
              session.destroy();
            }, this.keepaliveTimeoutMs);
            (_b2 = keepaliveTimer.unref) === null || _b2 === undefined || _b2.call(keepaliveTimer);
          };
          maybeStartKeepalivePingTimer();
          session.on("close", () => {
            var _b2, _c2;
            if (!sessionClosedByServer) {
              this.trace(`Connection dropped by client ${(_b2 = session.socket) === null || _b2 === undefined ? undefined : _b2.remoteAddress}`);
            }
            if (connectionAgeTimer) {
              clearTimeout(connectionAgeTimer);
            }
            if (connectionAgeGraceTimer) {
              clearTimeout(connectionAgeGraceTimer);
            }
            clearKeepaliveTimeout();
            if (idleTimeoutObj !== null) {
              clearTimeout(idleTimeoutObj.timeout);
              this.sessionIdleTimeouts.delete(session);
            }
            (_c2 = this.http2Servers.get(http2Server)) === null || _c2 === undefined || _c2.sessions.delete(session);
          });
        };
      }
      _channelzSessionHandler(http2Server) {
        return (session) => {
          var _b, _c, _d, _e;
          const channelzRef = (0, channelz_1.registerChannelzSocket)((_c = (_b = session.socket) === null || _b === undefined ? undefined : _b.remoteAddress) !== null && _c !== undefined ? _c : "unknown", this.getChannelzSessionInfo.bind(this, session), this.channelzEnabled);
          const channelzSessionInfo = {
            ref: channelzRef,
            streamTracker: new channelz_1.ChannelzCallTracker,
            messagesSent: 0,
            messagesReceived: 0,
            keepAlivesSent: 0,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null
          };
          (_d = this.http2Servers.get(http2Server)) === null || _d === undefined || _d.sessions.add(session);
          this.sessions.set(session, channelzSessionInfo);
          const clientAddress = `${session.socket.remoteAddress}:${session.socket.remotePort}`;
          this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + clientAddress);
          this.trace("Connection established by client " + clientAddress);
          this.sessionChildrenTracker.refChild(channelzRef);
          let connectionAgeTimer = null;
          let connectionAgeGraceTimer = null;
          let keepaliveTimeout = null;
          let sessionClosedByServer = false;
          const idleTimeoutObj = this.enableIdleTimeout(session);
          if (this.maxConnectionAgeMs !== UNLIMITED_CONNECTION_AGE_MS) {
            const jitterMagnitude = this.maxConnectionAgeMs / 10;
            const jitter = Math.random() * jitterMagnitude * 2 - jitterMagnitude;
            connectionAgeTimer = setTimeout(() => {
              var _b2;
              sessionClosedByServer = true;
              this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + clientAddress);
              try {
                session.goaway(http2.constants.NGHTTP2_NO_ERROR, ~(1 << 31), kMaxAge);
              } catch (e) {
                session.destroy();
                return;
              }
              session.close();
              if (this.maxConnectionAgeGraceMs !== UNLIMITED_CONNECTION_AGE_MS) {
                connectionAgeGraceTimer = setTimeout(() => {
                  session.destroy();
                }, this.maxConnectionAgeGraceMs);
                (_b2 = connectionAgeGraceTimer.unref) === null || _b2 === undefined || _b2.call(connectionAgeGraceTimer);
              }
            }, this.maxConnectionAgeMs + jitter);
            (_e = connectionAgeTimer.unref) === null || _e === undefined || _e.call(connectionAgeTimer);
          }
          const clearKeepaliveTimeout = () => {
            if (keepaliveTimeout) {
              clearTimeout(keepaliveTimeout);
              keepaliveTimeout = null;
            }
          };
          const canSendPing = () => {
            return !session.destroyed && this.keepaliveTimeMs < KEEPALIVE_MAX_TIME_MS && this.keepaliveTimeMs > 0;
          };
          let sendPing;
          const maybeStartKeepalivePingTimer = () => {
            var _b2;
            if (!canSendPing()) {
              return;
            }
            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
            keepaliveTimeout = setTimeout(() => {
              clearKeepaliveTimeout();
              sendPing();
            }, this.keepaliveTimeMs);
            (_b2 = keepaliveTimeout.unref) === null || _b2 === undefined || _b2.call(keepaliveTimeout);
          };
          sendPing = () => {
            var _b2;
            if (!canSendPing()) {
              return;
            }
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let pingSendError = "";
            try {
              const pingSentSuccessfully = session.ping((err, duration, payload) => {
                clearKeepaliveTimeout();
                if (err) {
                  this.keepaliveTrace("Ping failed with error: " + err.message);
                  this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to error of a ping frame " + err.message + " return in " + duration);
                  sessionClosedByServer = true;
                  session.destroy();
                } else {
                  this.keepaliveTrace("Received ping response");
                  maybeStartKeepalivePingTimer();
                }
              });
              if (!pingSentSuccessfully) {
                pingSendError = "Ping returned false";
              }
            } catch (e) {
              pingSendError = (e instanceof Error ? e.message : "") || "Unknown error";
            }
            if (pingSendError) {
              this.keepaliveTrace("Ping send failed: " + pingSendError);
              this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + pingSendError);
              sessionClosedByServer = true;
              session.destroy();
              return;
            }
            channelzSessionInfo.keepAlivesSent += 1;
            keepaliveTimeout = setTimeout(() => {
              clearKeepaliveTimeout();
              this.keepaliveTrace("Ping timeout passed without response");
              this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + clientAddress);
              sessionClosedByServer = true;
              session.destroy();
            }, this.keepaliveTimeoutMs);
            (_b2 = keepaliveTimeout.unref) === null || _b2 === undefined || _b2.call(keepaliveTimeout);
          };
          maybeStartKeepalivePingTimer();
          session.on("close", () => {
            var _b2;
            if (!sessionClosedByServer) {
              this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + clientAddress);
            }
            this.sessionChildrenTracker.unrefChild(channelzRef);
            (0, channelz_1.unregisterChannelzRef)(channelzRef);
            if (connectionAgeTimer) {
              clearTimeout(connectionAgeTimer);
            }
            if (connectionAgeGraceTimer) {
              clearTimeout(connectionAgeGraceTimer);
            }
            clearKeepaliveTimeout();
            if (idleTimeoutObj !== null) {
              clearTimeout(idleTimeoutObj.timeout);
              this.sessionIdleTimeouts.delete(session);
            }
            (_b2 = this.http2Servers.get(http2Server)) === null || _b2 === undefined || _b2.sessions.delete(session);
            this.sessions.delete(session);
          });
        };
      }
      enableIdleTimeout(session) {
        var _b, _c;
        if (this.sessionIdleTimeout >= MAX_CONNECTION_IDLE_MS) {
          return null;
        }
        const idleTimeoutObj = {
          activeStreams: 0,
          lastIdle: Date.now(),
          onClose: this.onStreamClose.bind(this, session),
          timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, session)
        };
        (_c = (_b = idleTimeoutObj.timeout).unref) === null || _c === undefined || _c.call(_b);
        this.sessionIdleTimeouts.set(session, idleTimeoutObj);
        const { socket } = session;
        this.trace("Enable idle timeout for " + socket.remoteAddress + ":" + socket.remotePort);
        return idleTimeoutObj;
      }
      onIdleTimeout(ctx, session) {
        const { socket } = session;
        const sessionInfo = ctx.sessionIdleTimeouts.get(session);
        if (sessionInfo !== undefined && sessionInfo.activeStreams === 0) {
          if (Date.now() - sessionInfo.lastIdle >= ctx.sessionIdleTimeout) {
            ctx.trace("Session idle timeout triggered for " + (socket === null || socket === undefined ? undefined : socket.remoteAddress) + ":" + (socket === null || socket === undefined ? undefined : socket.remotePort) + " last idle at " + sessionInfo.lastIdle);
            ctx.closeSession(session);
          } else {
            sessionInfo.timeout.refresh();
          }
        }
      }
      onStreamOpened(stream) {
        const session = stream.session;
        const idleTimeoutObj = this.sessionIdleTimeouts.get(session);
        if (idleTimeoutObj) {
          idleTimeoutObj.activeStreams += 1;
          stream.once("close", idleTimeoutObj.onClose);
        }
      }
      onStreamClose(session) {
        var _b, _c;
        const idleTimeoutObj = this.sessionIdleTimeouts.get(session);
        if (idleTimeoutObj) {
          idleTimeoutObj.activeStreams -= 1;
          if (idleTimeoutObj.activeStreams === 0) {
            idleTimeoutObj.lastIdle = Date.now();
            idleTimeoutObj.timeout.refresh();
            this.trace("Session onStreamClose" + ((_b = session.socket) === null || _b === undefined ? undefined : _b.remoteAddress) + ":" + ((_c = session.socket) === null || _c === undefined ? undefined : _c.remotePort) + " at " + idleTimeoutObj.lastIdle);
          }
        }
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : undefined;
      _start_decorators = [deprecate("Calling start() is no longer necessary. It can be safely omitted.")];
      __esDecorate(_a, null, _start_decorators, { kind: "method", name: "start", static: false, private: false, access: { has: (obj) => ("start" in obj), get: (obj) => obj.start }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })(), _a;
  })();
  exports.Server = Server;
  async function handleUnary(call, handler) {
    let stream;
    function respond(err, value, trailer, flags) {
      if (err) {
        call.sendStatus((0, server_call_1.serverErrorToStatus)(err, trailer));
        return;
      }
      call.sendMessage(value, () => {
        call.sendStatus({
          code: constants_1.Status.OK,
          details: "OK",
          metadata: trailer !== null && trailer !== undefined ? trailer : null
        });
      });
    }
    let requestMetadata;
    let requestMessage = null;
    call.start({
      onReceiveMetadata(metadata) {
        requestMetadata = metadata;
        call.startRead();
      },
      onReceiveMessage(message) {
        if (requestMessage) {
          call.sendStatus({
            code: constants_1.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${handler.path}`,
            metadata: null
          });
          return;
        }
        requestMessage = message;
        call.startRead();
      },
      onReceiveHalfClose() {
        if (!requestMessage) {
          call.sendStatus({
            code: constants_1.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${handler.path}`,
            metadata: null
          });
          return;
        }
        stream = new server_call_1.ServerWritableStreamImpl(handler.path, call, requestMetadata, requestMessage);
        try {
          handler.func(stream, respond);
        } catch (err) {
          call.sendStatus({
            code: constants_1.Status.UNKNOWN,
            details: `Server method handler threw error ${err.message}`,
            metadata: null
          });
        }
      },
      onCancel() {
        if (stream) {
          stream.cancelled = true;
          stream.emit("cancelled", "cancelled");
        }
      }
    });
  }
  function handleClientStreaming(call, handler) {
    let stream;
    function respond(err, value, trailer, flags) {
      if (err) {
        call.sendStatus((0, server_call_1.serverErrorToStatus)(err, trailer));
        return;
      }
      call.sendMessage(value, () => {
        call.sendStatus({
          code: constants_1.Status.OK,
          details: "OK",
          metadata: trailer !== null && trailer !== undefined ? trailer : null
        });
      });
    }
    call.start({
      onReceiveMetadata(metadata) {
        stream = new server_call_1.ServerDuplexStreamImpl(handler.path, call, metadata);
        try {
          handler.func(stream, respond);
        } catch (err) {
          call.sendStatus({
            code: constants_1.Status.UNKNOWN,
            details: `Server method handler threw error ${err.message}`,
            metadata: null
          });
        }
      },
      onReceiveMessage(message) {
        stream.push(message);
      },
      onReceiveHalfClose() {
        stream.push(null);
      },
      onCancel() {
        if (stream) {
          stream.cancelled = true;
          stream.emit("cancelled", "cancelled");
          stream.destroy();
        }
      }
    });
  }
  function handleServerStreaming(call, handler) {
    let stream;
    let requestMetadata;
    let requestMessage = null;
    call.start({
      onReceiveMetadata(metadata) {
        requestMetadata = metadata;
        call.startRead();
      },
      onReceiveMessage(message) {
        if (requestMessage) {
          call.sendStatus({
            code: constants_1.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${handler.path}`,
            metadata: null
          });
          return;
        }
        requestMessage = message;
        call.startRead();
      },
      onReceiveHalfClose() {
        if (!requestMessage) {
          call.sendStatus({
            code: constants_1.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${handler.path}`,
            metadata: null
          });
          return;
        }
        stream = new server_call_1.ServerWritableStreamImpl(handler.path, call, requestMetadata, requestMessage);
        try {
          handler.func(stream);
        } catch (err) {
          call.sendStatus({
            code: constants_1.Status.UNKNOWN,
            details: `Server method handler threw error ${err.message}`,
            metadata: null
          });
        }
      },
      onCancel() {
        if (stream) {
          stream.cancelled = true;
          stream.emit("cancelled", "cancelled");
          stream.destroy();
        }
      }
    });
  }
  function handleBidiStreaming(call, handler) {
    let stream;
    call.start({
      onReceiveMetadata(metadata) {
        stream = new server_call_1.ServerDuplexStreamImpl(handler.path, call, metadata);
        try {
          handler.func(stream);
        } catch (err) {
          call.sendStatus({
            code: constants_1.Status.UNKNOWN,
            details: `Server method handler threw error ${err.message}`,
            metadata: null
          });
        }
      },
      onReceiveMessage(message) {
        stream.push(message);
      },
      onReceiveHalfClose() {
        stream.push(null);
      },
      onCancel() {
        if (stream) {
          stream.cancelled = true;
          stream.emit("cancelled", "cancelled");
          stream.destroy();
        }
      }
    });
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/status-builder.js
var require_status_builder = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StatusBuilder = undefined;

  class StatusBuilder {
    constructor() {
      this.code = null;
      this.details = null;
      this.metadata = null;
    }
    withCode(code) {
      this.code = code;
      return this;
    }
    withDetails(details) {
      this.details = details;
      return this;
    }
    withMetadata(metadata) {
      this.metadata = metadata;
      return this;
    }
    build() {
      const status = {};
      if (this.code !== null) {
        status.code = this.code;
      }
      if (this.details !== null) {
        status.details = this.details;
      }
      if (this.metadata !== null) {
        status.metadata = this.metadata;
      }
      return status;
    }
  }
  exports.StatusBuilder = StatusBuilder;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js
var require_load_balancer_pick_first = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LeafLoadBalancer = exports.PickFirstLoadBalancer = exports.PickFirstLoadBalancingConfig = undefined;
  exports.shuffled = shuffled;
  exports.setup = setup;
  var load_balancer_1 = require_load_balancer();
  var connectivity_state_1 = require_connectivity_state();
  var picker_1 = require_picker();
  var subchannel_address_1 = require_subchannel_address();
  var logging = require_logging();
  var constants_1 = require_constants();
  var subchannel_address_2 = require_subchannel_address();
  var net_1 = __require("net");
  var call_interface_1 = require_call_interface();
  var TRACER_NAME = "pick_first";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var TYPE_NAME = "pick_first";
  var CONNECTION_DELAY_INTERVAL_MS = 250;

  class PickFirstLoadBalancingConfig {
    constructor(shuffleAddressList) {
      this.shuffleAddressList = shuffleAddressList;
    }
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    toJsonObject() {
      return {
        [TYPE_NAME]: {
          shuffleAddressList: this.shuffleAddressList
        }
      };
    }
    getShuffleAddressList() {
      return this.shuffleAddressList;
    }
    static createFromJson(obj) {
      if ("shuffleAddressList" in obj && !(typeof obj.shuffleAddressList === "boolean")) {
        throw new Error("pick_first config field shuffleAddressList must be a boolean if provided");
      }
      return new PickFirstLoadBalancingConfig(obj.shuffleAddressList === true);
    }
  }
  exports.PickFirstLoadBalancingConfig = PickFirstLoadBalancingConfig;

  class PickFirstPicker {
    constructor(subchannel) {
      this.subchannel = subchannel;
    }
    pick(pickArgs) {
      return {
        pickResultType: picker_1.PickResultType.COMPLETE,
        subchannel: this.subchannel,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  function shuffled(list) {
    const result = list.slice();
    for (let i = result.length - 1;i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
  }
  function interleaveAddressFamilies(addressList) {
    if (addressList.length === 0) {
      return [];
    }
    const result = [];
    const ipv6Addresses = [];
    const ipv4Addresses = [];
    const ipv6First = (0, subchannel_address_2.isTcpSubchannelAddress)(addressList[0]) && (0, net_1.isIPv6)(addressList[0].host);
    for (const address of addressList) {
      if ((0, subchannel_address_2.isTcpSubchannelAddress)(address) && (0, net_1.isIPv6)(address.host)) {
        ipv6Addresses.push(address);
      } else {
        ipv4Addresses.push(address);
      }
    }
    const firstList = ipv6First ? ipv6Addresses : ipv4Addresses;
    const secondList = ipv6First ? ipv4Addresses : ipv6Addresses;
    for (let i = 0;i < Math.max(firstList.length, secondList.length); i++) {
      if (i < firstList.length) {
        result.push(firstList[i]);
      }
      if (i < secondList.length) {
        result.push(secondList[i]);
      }
    }
    return result;
  }
  var REPORT_HEALTH_STATUS_OPTION_NAME = "grpc-node.internal.pick-first.report_health_status";

  class PickFirstLoadBalancer {
    constructor(channelControlHelper) {
      this.channelControlHelper = channelControlHelper;
      this.children = [];
      this.currentState = connectivity_state_1.ConnectivityState.IDLE;
      this.currentSubchannelIndex = 0;
      this.currentPick = null;
      this.subchannelStateListener = (subchannel, previousState, newState, keepaliveTime, errorMessage) => {
        this.onSubchannelStateUpdate(subchannel, previousState, newState, errorMessage);
      };
      this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState();
      this.stickyTransientFailureMode = false;
      this.reportHealthStatus = false;
      this.lastError = null;
      this.latestAddressList = null;
      this.latestOptions = {};
      this.latestResolutionNote = "";
      this.connectionDelayTimeout = setTimeout(() => {}, 0);
      clearTimeout(this.connectionDelayTimeout);
    }
    allChildrenHaveReportedTF() {
      return this.children.every((child) => child.hasReportedTransientFailure);
    }
    resetChildrenReportedTF() {
      this.children.every((child) => child.hasReportedTransientFailure = false);
    }
    calculateAndReportNewState() {
      var _a;
      if (this.currentPick) {
        if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
          const errorMessage = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
            details: errorMessage
          }), errorMessage);
        } else {
          this.updateState(connectivity_state_1.ConnectivityState.READY, new PickFirstPicker(this.currentPick), null);
        }
      } else if (((_a = this.latestAddressList) === null || _a === undefined ? undefined : _a.length) === 0) {
        const errorMessage = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
          details: errorMessage
        }), errorMessage);
      } else if (this.children.length === 0) {
        this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this), null);
      } else {
        if (this.stickyTransientFailureMode) {
          const errorMessage = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
            details: errorMessage
          }), errorMessage);
        } else {
          this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this), null);
        }
      }
    }
    requestReresolution() {
      this.channelControlHelper.requestReresolution();
    }
    maybeEnterStickyTransientFailureMode() {
      if (!this.allChildrenHaveReportedTF()) {
        return;
      }
      this.requestReresolution();
      this.resetChildrenReportedTF();
      if (this.stickyTransientFailureMode) {
        this.calculateAndReportNewState();
        return;
      }
      this.stickyTransientFailureMode = true;
      for (const { subchannel } of this.children) {
        subchannel.startConnecting();
      }
      this.calculateAndReportNewState();
    }
    removeCurrentPick() {
      if (this.currentPick !== null) {
        this.currentPick.removeConnectivityStateListener(this.subchannelStateListener);
        this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef());
        this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener);
        this.currentPick.unref();
        this.currentPick = null;
      }
    }
    onSubchannelStateUpdate(subchannel, previousState, newState, errorMessage) {
      var _a;
      if ((_a = this.currentPick) === null || _a === undefined ? undefined : _a.realSubchannelEquals(subchannel)) {
        if (newState !== connectivity_state_1.ConnectivityState.READY) {
          this.removeCurrentPick();
          this.calculateAndReportNewState();
        }
        return;
      }
      for (const [index, child] of this.children.entries()) {
        if (subchannel.realSubchannelEquals(child.subchannel)) {
          if (newState === connectivity_state_1.ConnectivityState.READY) {
            this.pickSubchannel(child.subchannel);
          }
          if (newState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
            child.hasReportedTransientFailure = true;
            if (errorMessage) {
              this.lastError = errorMessage;
            }
            this.maybeEnterStickyTransientFailureMode();
            if (index === this.currentSubchannelIndex) {
              this.startNextSubchannelConnecting(index + 1);
            }
          }
          child.subchannel.startConnecting();
          return;
        }
      }
    }
    startNextSubchannelConnecting(startIndex) {
      clearTimeout(this.connectionDelayTimeout);
      for (const [index, child] of this.children.entries()) {
        if (index >= startIndex) {
          const subchannelState = child.subchannel.getConnectivityState();
          if (subchannelState === connectivity_state_1.ConnectivityState.IDLE || subchannelState === connectivity_state_1.ConnectivityState.CONNECTING) {
            this.startConnecting(index);
            return;
          }
        }
      }
      this.maybeEnterStickyTransientFailureMode();
    }
    startConnecting(subchannelIndex) {
      var _a, _b;
      clearTimeout(this.connectionDelayTimeout);
      this.currentSubchannelIndex = subchannelIndex;
      if (this.children[subchannelIndex].subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.IDLE) {
        trace("Start connecting to subchannel with address " + this.children[subchannelIndex].subchannel.getAddress());
        process.nextTick(() => {
          var _a2;
          (_a2 = this.children[subchannelIndex]) === null || _a2 === undefined || _a2.subchannel.startConnecting();
        });
      }
      this.connectionDelayTimeout = setTimeout(() => {
        this.startNextSubchannelConnecting(subchannelIndex + 1);
      }, CONNECTION_DELAY_INTERVAL_MS);
      (_b = (_a = this.connectionDelayTimeout).unref) === null || _b === undefined || _b.call(_a);
    }
    pickSubchannel(subchannel) {
      trace("Pick subchannel with address " + subchannel.getAddress());
      this.stickyTransientFailureMode = false;
      subchannel.ref();
      this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
      this.removeCurrentPick();
      this.resetSubchannelList();
      subchannel.addConnectivityStateListener(this.subchannelStateListener);
      subchannel.addHealthStateWatcher(this.pickedSubchannelHealthListener);
      this.currentPick = subchannel;
      clearTimeout(this.connectionDelayTimeout);
      this.calculateAndReportNewState();
    }
    updateState(newState, picker, errorMessage) {
      trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
      this.currentState = newState;
      this.channelControlHelper.updateState(newState, picker, errorMessage);
    }
    resetSubchannelList() {
      for (const child of this.children) {
        child.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
        child.subchannel.unref();
        this.channelControlHelper.removeChannelzChild(child.subchannel.getChannelzRef());
      }
      this.currentSubchannelIndex = 0;
      this.children = [];
    }
    connectToAddressList(addressList, options) {
      trace("connectToAddressList([" + addressList.map((address) => (0, subchannel_address_1.subchannelAddressToString)(address)) + "])");
      const newChildrenList = addressList.map((address) => ({
        subchannel: this.channelControlHelper.createSubchannel(address, options),
        hasReportedTransientFailure: false
      }));
      for (const { subchannel } of newChildrenList) {
        if (subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.READY) {
          this.pickSubchannel(subchannel);
          return;
        }
      }
      for (const { subchannel } of newChildrenList) {
        subchannel.ref();
        this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
      }
      this.resetSubchannelList();
      this.children = newChildrenList;
      for (const { subchannel } of this.children) {
        subchannel.addConnectivityStateListener(this.subchannelStateListener);
      }
      for (const child of this.children) {
        if (child.subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
          child.hasReportedTransientFailure = true;
        }
      }
      this.startNextSubchannelConnecting(0);
      this.calculateAndReportNewState();
    }
    updateAddressList(maybeEndpointList, lbConfig, options, resolutionNote) {
      if (!(lbConfig instanceof PickFirstLoadBalancingConfig)) {
        return false;
      }
      if (!maybeEndpointList.ok) {
        if (this.children.length === 0 && this.currentPick === null) {
          this.channelControlHelper.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(maybeEndpointList.error), maybeEndpointList.error.details);
        }
        return true;
      }
      let endpointList = maybeEndpointList.value;
      this.reportHealthStatus = options[REPORT_HEALTH_STATUS_OPTION_NAME];
      if (lbConfig.getShuffleAddressList()) {
        endpointList = shuffled(endpointList);
      }
      const rawAddressList = [].concat(...endpointList.map((endpoint) => endpoint.addresses));
      trace("updateAddressList([" + rawAddressList.map((address) => (0, subchannel_address_1.subchannelAddressToString)(address)) + "])");
      const addressList = interleaveAddressFamilies(rawAddressList);
      this.latestAddressList = addressList;
      this.latestOptions = options;
      this.connectToAddressList(addressList, options);
      this.latestResolutionNote = resolutionNote;
      if (rawAddressList.length > 0) {
        return true;
      } else {
        this.lastError = "No addresses resolved";
        return false;
      }
    }
    exitIdle() {
      if (this.currentState === connectivity_state_1.ConnectivityState.IDLE && this.latestAddressList) {
        this.connectToAddressList(this.latestAddressList, this.latestOptions);
      }
    }
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList();
      this.removeCurrentPick();
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  exports.PickFirstLoadBalancer = PickFirstLoadBalancer;
  var LEAF_CONFIG = new PickFirstLoadBalancingConfig(false);

  class LeafLoadBalancer {
    constructor(endpoint, channelControlHelper, options, resolutionNote) {
      this.endpoint = endpoint;
      this.options = options;
      this.resolutionNote = resolutionNote;
      this.latestState = connectivity_state_1.ConnectivityState.IDLE;
      const childChannelControlHelper = (0, load_balancer_1.createChildChannelControlHelper)(channelControlHelper, {
        updateState: (connectivityState, picker, errorMessage) => {
          this.latestState = connectivityState;
          this.latestPicker = picker;
          channelControlHelper.updateState(connectivityState, picker, errorMessage);
        }
      });
      this.pickFirstBalancer = new PickFirstLoadBalancer(childChannelControlHelper);
      this.latestPicker = new picker_1.QueuePicker(this.pickFirstBalancer);
    }
    startConnecting() {
      this.pickFirstBalancer.updateAddressList((0, call_interface_1.statusOrFromValue)([this.endpoint]), LEAF_CONFIG, Object.assign(Object.assign({}, this.options), { [REPORT_HEALTH_STATUS_OPTION_NAME]: true }), this.resolutionNote);
    }
    updateEndpoint(newEndpoint, newOptions) {
      this.options = newOptions;
      this.endpoint = newEndpoint;
      if (this.latestState !== connectivity_state_1.ConnectivityState.IDLE) {
        this.startConnecting();
      }
    }
    getConnectivityState() {
      return this.latestState;
    }
    getPicker() {
      return this.latestPicker;
    }
    getEndpoint() {
      return this.endpoint;
    }
    exitIdle() {
      this.pickFirstBalancer.exitIdle();
    }
    destroy() {
      this.pickFirstBalancer.destroy();
    }
  }
  exports.LeafLoadBalancer = LeafLoadBalancer;
  function setup() {
    (0, load_balancer_1.registerLoadBalancerType)(TYPE_NAME, PickFirstLoadBalancer, PickFirstLoadBalancingConfig);
    (0, load_balancer_1.registerDefaultLoadBalancerType)(TYPE_NAME);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/certificate-provider.js
var require_certificate_provider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FileWatcherCertificateProvider = undefined;
  var fs = __require("fs");
  var logging = require_logging();
  var constants_1 = require_constants();
  var util_1 = __require("util");
  var TRACER_NAME = "certificate_provider";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var readFilePromise = (0, util_1.promisify)(fs.readFile);

  class FileWatcherCertificateProvider {
    constructor(config) {
      this.config = config;
      this.refreshTimer = null;
      this.fileResultPromise = null;
      this.latestCaUpdate = undefined;
      this.caListeners = new Set;
      this.latestIdentityUpdate = undefined;
      this.identityListeners = new Set;
      this.lastUpdateTime = null;
      if (config.certificateFile === undefined !== (config.privateKeyFile === undefined)) {
        throw new Error("certificateFile and privateKeyFile must be set or unset together");
      }
      if (config.certificateFile === undefined && config.caCertificateFile === undefined) {
        throw new Error("At least one of certificateFile and caCertificateFile must be set");
      }
      trace("File watcher constructed with config " + JSON.stringify(config));
    }
    updateCertificates() {
      if (this.fileResultPromise) {
        return;
      }
      this.fileResultPromise = Promise.allSettled([
        this.config.certificateFile ? readFilePromise(this.config.certificateFile) : Promise.reject(),
        this.config.privateKeyFile ? readFilePromise(this.config.privateKeyFile) : Promise.reject(),
        this.config.caCertificateFile ? readFilePromise(this.config.caCertificateFile) : Promise.reject()
      ]);
      this.fileResultPromise.then(([certificateResult, privateKeyResult, caCertificateResult]) => {
        if (!this.refreshTimer) {
          return;
        }
        trace("File watcher read certificates certificate " + certificateResult.status + ", privateKey " + privateKeyResult.status + ", CA certificate " + caCertificateResult.status);
        this.lastUpdateTime = new Date;
        this.fileResultPromise = null;
        if (certificateResult.status === "fulfilled" && privateKeyResult.status === "fulfilled") {
          this.latestIdentityUpdate = {
            certificate: certificateResult.value,
            privateKey: privateKeyResult.value
          };
        } else {
          this.latestIdentityUpdate = null;
        }
        if (caCertificateResult.status === "fulfilled") {
          this.latestCaUpdate = {
            caCertificate: caCertificateResult.value
          };
        } else {
          this.latestCaUpdate = null;
        }
        for (const listener of this.identityListeners) {
          listener(this.latestIdentityUpdate);
        }
        for (const listener of this.caListeners) {
          listener(this.latestCaUpdate);
        }
      });
      trace("File watcher initiated certificate update");
    }
    maybeStartWatchingFiles() {
      if (!this.refreshTimer) {
        const timeSinceLastUpdate = this.lastUpdateTime ? new Date().getTime() - this.lastUpdateTime.getTime() : Infinity;
        if (timeSinceLastUpdate > this.config.refreshIntervalMs) {
          this.updateCertificates();
        }
        if (timeSinceLastUpdate > this.config.refreshIntervalMs * 2) {
          this.latestCaUpdate = undefined;
          this.latestIdentityUpdate = undefined;
        }
        this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs);
        trace("File watcher started watching");
      }
    }
    maybeStopWatchingFiles() {
      if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
        this.fileResultPromise = null;
        if (this.refreshTimer) {
          clearInterval(this.refreshTimer);
          this.refreshTimer = null;
        }
      }
    }
    addCaCertificateListener(listener) {
      this.caListeners.add(listener);
      this.maybeStartWatchingFiles();
      if (this.latestCaUpdate !== undefined) {
        process.nextTick(listener, this.latestCaUpdate);
      }
    }
    removeCaCertificateListener(listener) {
      this.caListeners.delete(listener);
      this.maybeStopWatchingFiles();
    }
    addIdentityCertificateListener(listener) {
      this.identityListeners.add(listener);
      this.maybeStartWatchingFiles();
      if (this.latestIdentityUpdate !== undefined) {
        process.nextTick(listener, this.latestIdentityUpdate);
      }
    }
    removeIdentityCertificateListener(listener) {
      this.identityListeners.delete(listener);
      this.maybeStopWatchingFiles();
    }
  }
  exports.FileWatcherCertificateProvider = FileWatcherCertificateProvider;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/experimental.js
var require_experimental = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = exports.createCertificateProviderChannelCredentials = exports.FileWatcherCertificateProvider = exports.createCertificateProviderServerCredentials = exports.createServerCredentialsWithInterceptors = exports.BaseSubchannelWrapper = exports.registerAdminService = exports.FilterStackFactory = exports.BaseFilter = exports.statusOrFromError = exports.statusOrFromValue = exports.PickResultType = exports.QueuePicker = exports.UnavailablePicker = exports.ChildLoadBalancerHandler = exports.EndpointMap = exports.endpointHasAddress = exports.endpointToString = exports.subchannelAddressToString = exports.LeafLoadBalancer = exports.isLoadBalancerNameRegistered = exports.parseLoadBalancingConfig = exports.selectLbConfigFromList = exports.registerLoadBalancerType = exports.createChildChannelControlHelper = exports.BackoffTimeout = exports.parseDuration = exports.durationToMs = exports.splitHostPort = exports.uriToString = exports.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = exports.createResolver = exports.registerResolver = exports.log = exports.trace = undefined;
  var logging_1 = require_logging();
  Object.defineProperty(exports, "trace", { enumerable: true, get: function() {
    return logging_1.trace;
  } });
  Object.defineProperty(exports, "log", { enumerable: true, get: function() {
    return logging_1.log;
  } });
  var resolver_1 = require_resolver();
  Object.defineProperty(exports, "registerResolver", { enumerable: true, get: function() {
    return resolver_1.registerResolver;
  } });
  Object.defineProperty(exports, "createResolver", { enumerable: true, get: function() {
    return resolver_1.createResolver;
  } });
  Object.defineProperty(exports, "CHANNEL_ARGS_CONFIG_SELECTOR_KEY", { enumerable: true, get: function() {
    return resolver_1.CHANNEL_ARGS_CONFIG_SELECTOR_KEY;
  } });
  var uri_parser_1 = require_uri_parser();
  Object.defineProperty(exports, "uriToString", { enumerable: true, get: function() {
    return uri_parser_1.uriToString;
  } });
  Object.defineProperty(exports, "splitHostPort", { enumerable: true, get: function() {
    return uri_parser_1.splitHostPort;
  } });
  var duration_1 = require_duration();
  Object.defineProperty(exports, "durationToMs", { enumerable: true, get: function() {
    return duration_1.durationToMs;
  } });
  Object.defineProperty(exports, "parseDuration", { enumerable: true, get: function() {
    return duration_1.parseDuration;
  } });
  var backoff_timeout_1 = require_backoff_timeout();
  Object.defineProperty(exports, "BackoffTimeout", { enumerable: true, get: function() {
    return backoff_timeout_1.BackoffTimeout;
  } });
  var load_balancer_1 = require_load_balancer();
  Object.defineProperty(exports, "createChildChannelControlHelper", { enumerable: true, get: function() {
    return load_balancer_1.createChildChannelControlHelper;
  } });
  Object.defineProperty(exports, "registerLoadBalancerType", { enumerable: true, get: function() {
    return load_balancer_1.registerLoadBalancerType;
  } });
  Object.defineProperty(exports, "selectLbConfigFromList", { enumerable: true, get: function() {
    return load_balancer_1.selectLbConfigFromList;
  } });
  Object.defineProperty(exports, "parseLoadBalancingConfig", { enumerable: true, get: function() {
    return load_balancer_1.parseLoadBalancingConfig;
  } });
  Object.defineProperty(exports, "isLoadBalancerNameRegistered", { enumerable: true, get: function() {
    return load_balancer_1.isLoadBalancerNameRegistered;
  } });
  var load_balancer_pick_first_1 = require_load_balancer_pick_first();
  Object.defineProperty(exports, "LeafLoadBalancer", { enumerable: true, get: function() {
    return load_balancer_pick_first_1.LeafLoadBalancer;
  } });
  var subchannel_address_1 = require_subchannel_address();
  Object.defineProperty(exports, "subchannelAddressToString", { enumerable: true, get: function() {
    return subchannel_address_1.subchannelAddressToString;
  } });
  Object.defineProperty(exports, "endpointToString", { enumerable: true, get: function() {
    return subchannel_address_1.endpointToString;
  } });
  Object.defineProperty(exports, "endpointHasAddress", { enumerable: true, get: function() {
    return subchannel_address_1.endpointHasAddress;
  } });
  Object.defineProperty(exports, "EndpointMap", { enumerable: true, get: function() {
    return subchannel_address_1.EndpointMap;
  } });
  var load_balancer_child_handler_1 = require_load_balancer_child_handler();
  Object.defineProperty(exports, "ChildLoadBalancerHandler", { enumerable: true, get: function() {
    return load_balancer_child_handler_1.ChildLoadBalancerHandler;
  } });
  var picker_1 = require_picker();
  Object.defineProperty(exports, "UnavailablePicker", { enumerable: true, get: function() {
    return picker_1.UnavailablePicker;
  } });
  Object.defineProperty(exports, "QueuePicker", { enumerable: true, get: function() {
    return picker_1.QueuePicker;
  } });
  Object.defineProperty(exports, "PickResultType", { enumerable: true, get: function() {
    return picker_1.PickResultType;
  } });
  var call_interface_1 = require_call_interface();
  Object.defineProperty(exports, "statusOrFromValue", { enumerable: true, get: function() {
    return call_interface_1.statusOrFromValue;
  } });
  Object.defineProperty(exports, "statusOrFromError", { enumerable: true, get: function() {
    return call_interface_1.statusOrFromError;
  } });
  var filter_1 = require_filter();
  Object.defineProperty(exports, "BaseFilter", { enumerable: true, get: function() {
    return filter_1.BaseFilter;
  } });
  var filter_stack_1 = require_filter_stack();
  Object.defineProperty(exports, "FilterStackFactory", { enumerable: true, get: function() {
    return filter_stack_1.FilterStackFactory;
  } });
  var admin_1 = require_admin();
  Object.defineProperty(exports, "registerAdminService", { enumerable: true, get: function() {
    return admin_1.registerAdminService;
  } });
  var subchannel_interface_1 = require_subchannel_interface();
  Object.defineProperty(exports, "BaseSubchannelWrapper", { enumerable: true, get: function() {
    return subchannel_interface_1.BaseSubchannelWrapper;
  } });
  var server_credentials_1 = require_server_credentials();
  Object.defineProperty(exports, "createServerCredentialsWithInterceptors", { enumerable: true, get: function() {
    return server_credentials_1.createServerCredentialsWithInterceptors;
  } });
  Object.defineProperty(exports, "createCertificateProviderServerCredentials", { enumerable: true, get: function() {
    return server_credentials_1.createCertificateProviderServerCredentials;
  } });
  var certificate_provider_1 = require_certificate_provider();
  Object.defineProperty(exports, "FileWatcherCertificateProvider", { enumerable: true, get: function() {
    return certificate_provider_1.FileWatcherCertificateProvider;
  } });
  var channel_credentials_1 = require_channel_credentials();
  Object.defineProperty(exports, "createCertificateProviderChannelCredentials", { enumerable: true, get: function() {
    return channel_credentials_1.createCertificateProviderChannelCredentials;
  } });
  var internal_channel_1 = require_internal_channel();
  Object.defineProperty(exports, "SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX", { enumerable: true, get: function() {
    return internal_channel_1.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX;
  } });
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/resolver-uds.js
var require_resolver_uds = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.setup = setup;
  var resolver_1 = require_resolver();
  var call_interface_1 = require_call_interface();

  class UdsResolver {
    constructor(target, listener, channelOptions) {
      this.listener = listener;
      this.hasReturnedResult = false;
      this.endpoints = [];
      let path;
      if (target.authority === "") {
        path = "/" + target.path;
      } else {
        path = target.path;
      }
      this.endpoints = [{ addresses: [{ path }] }];
    }
    updateResolution() {
      if (!this.hasReturnedResult) {
        this.hasReturnedResult = true;
        process.nextTick(this.listener, (0, call_interface_1.statusOrFromValue)(this.endpoints), {}, null, "");
      }
    }
    destroy() {
      this.hasReturnedResult = false;
    }
    static getDefaultAuthority(target) {
      return "localhost";
    }
  }
  function setup() {
    (0, resolver_1.registerResolver)("unix", UdsResolver);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/resolver-ip.js
var require_resolver_ip = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.setup = setup;
  var net_1 = __require("net");
  var call_interface_1 = require_call_interface();
  var constants_1 = require_constants();
  var metadata_1 = require_metadata();
  var resolver_1 = require_resolver();
  var subchannel_address_1 = require_subchannel_address();
  var uri_parser_1 = require_uri_parser();
  var logging = require_logging();
  var TRACER_NAME = "ip_resolver";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var IPV4_SCHEME = "ipv4";
  var IPV6_SCHEME = "ipv6";
  var DEFAULT_PORT = 443;

  class IpResolver {
    constructor(target, listener, channelOptions) {
      var _a;
      this.listener = listener;
      this.endpoints = [];
      this.error = null;
      this.hasReturnedResult = false;
      trace("Resolver constructed for target " + (0, uri_parser_1.uriToString)(target));
      const addresses = [];
      if (!(target.scheme === IPV4_SCHEME || target.scheme === IPV6_SCHEME)) {
        this.error = {
          code: constants_1.Status.UNAVAILABLE,
          details: `Unrecognized scheme ${target.scheme} in IP resolver`,
          metadata: new metadata_1.Metadata
        };
        return;
      }
      const pathList = target.path.split(",");
      for (const path of pathList) {
        const hostPort = (0, uri_parser_1.splitHostPort)(path);
        if (hostPort === null) {
          this.error = {
            code: constants_1.Status.UNAVAILABLE,
            details: `Failed to parse ${target.scheme} address ${path}`,
            metadata: new metadata_1.Metadata
          };
          return;
        }
        if (target.scheme === IPV4_SCHEME && !(0, net_1.isIPv4)(hostPort.host) || target.scheme === IPV6_SCHEME && !(0, net_1.isIPv6)(hostPort.host)) {
          this.error = {
            code: constants_1.Status.UNAVAILABLE,
            details: `Failed to parse ${target.scheme} address ${path}`,
            metadata: new metadata_1.Metadata
          };
          return;
        }
        addresses.push({
          host: hostPort.host,
          port: (_a = hostPort.port) !== null && _a !== undefined ? _a : DEFAULT_PORT
        });
      }
      this.endpoints = addresses.map((address) => ({ addresses: [address] }));
      trace("Parsed " + target.scheme + " address list " + addresses.map(subchannel_address_1.subchannelAddressToString));
    }
    updateResolution() {
      if (!this.hasReturnedResult) {
        this.hasReturnedResult = true;
        process.nextTick(() => {
          if (this.error) {
            this.listener((0, call_interface_1.statusOrFromError)(this.error), {}, null, "");
          } else {
            this.listener((0, call_interface_1.statusOrFromValue)(this.endpoints), {}, null, "");
          }
        });
      }
    }
    destroy() {
      this.hasReturnedResult = false;
    }
    static getDefaultAuthority(target) {
      return target.path.split(",")[0];
    }
  }
  function setup() {
    (0, resolver_1.registerResolver)(IPV4_SCHEME, IpResolver);
    (0, resolver_1.registerResolver)(IPV6_SCHEME, IpResolver);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js
var require_load_balancer_round_robin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RoundRobinLoadBalancer = undefined;
  exports.setup = setup;
  var load_balancer_1 = require_load_balancer();
  var connectivity_state_1 = require_connectivity_state();
  var picker_1 = require_picker();
  var logging = require_logging();
  var constants_1 = require_constants();
  var subchannel_address_1 = require_subchannel_address();
  var load_balancer_pick_first_1 = require_load_balancer_pick_first();
  var TRACER_NAME = "round_robin";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var TYPE_NAME = "round_robin";

  class RoundRobinLoadBalancingConfig {
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    constructor() {}
    toJsonObject() {
      return {
        [TYPE_NAME]: {}
      };
    }
    static createFromJson(obj) {
      return new RoundRobinLoadBalancingConfig;
    }
  }

  class RoundRobinPicker {
    constructor(children, nextIndex = 0) {
      this.children = children;
      this.nextIndex = nextIndex;
    }
    pick(pickArgs) {
      const childPicker = this.children[this.nextIndex].picker;
      this.nextIndex = (this.nextIndex + 1) % this.children.length;
      return childPicker.pick(pickArgs);
    }
    peekNextEndpoint() {
      return this.children[this.nextIndex].endpoint;
    }
  }
  function rotateArray(list, startIndex) {
    return [...list.slice(startIndex), ...list.slice(0, startIndex)];
  }

  class RoundRobinLoadBalancer {
    constructor(channelControlHelper) {
      this.channelControlHelper = channelControlHelper;
      this.children = [];
      this.currentState = connectivity_state_1.ConnectivityState.IDLE;
      this.currentReadyPicker = null;
      this.updatesPaused = false;
      this.lastError = null;
      this.childChannelControlHelper = (0, load_balancer_1.createChildChannelControlHelper)(channelControlHelper, {
        updateState: (connectivityState, picker, errorMessage) => {
          if (this.currentState === connectivity_state_1.ConnectivityState.READY && connectivityState !== connectivity_state_1.ConnectivityState.READY) {
            this.channelControlHelper.requestReresolution();
          }
          if (errorMessage) {
            this.lastError = errorMessage;
          }
          this.calculateAndUpdateState();
        }
      });
    }
    countChildrenWithState(state) {
      return this.children.filter((child) => child.getConnectivityState() === state).length;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused) {
        return;
      }
      if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.READY) > 0) {
        const readyChildren = this.children.filter((child) => child.getConnectivityState() === connectivity_state_1.ConnectivityState.READY);
        let index = 0;
        if (this.currentReadyPicker !== null) {
          const nextPickedEndpoint = this.currentReadyPicker.peekNextEndpoint();
          index = readyChildren.findIndex((child) => (0, subchannel_address_1.endpointEqual)(child.getEndpoint(), nextPickedEndpoint));
          if (index < 0) {
            index = 0;
          }
        }
        this.updateState(connectivity_state_1.ConnectivityState.READY, new RoundRobinPicker(readyChildren.map((child) => ({
          endpoint: child.getEndpoint(),
          picker: child.getPicker()
        })), index), null);
      } else if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.CONNECTING) > 0) {
        this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this), null);
      } else if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        const errorMessage = `round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
          details: errorMessage
        }), errorMessage);
      } else {
        this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this), null);
      }
      for (const child of this.children) {
        if (child.getConnectivityState() === connectivity_state_1.ConnectivityState.IDLE) {
          child.exitIdle();
        }
      }
    }
    updateState(newState, picker, errorMessage) {
      trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
      if (newState === connectivity_state_1.ConnectivityState.READY) {
        this.currentReadyPicker = picker;
      } else {
        this.currentReadyPicker = null;
      }
      this.currentState = newState;
      this.channelControlHelper.updateState(newState, picker, errorMessage);
    }
    resetSubchannelList() {
      for (const child of this.children) {
        child.destroy();
      }
      this.children = [];
    }
    updateAddressList(maybeEndpointList, lbConfig, options, resolutionNote) {
      if (!(lbConfig instanceof RoundRobinLoadBalancingConfig)) {
        return false;
      }
      if (!maybeEndpointList.ok) {
        if (this.children.length === 0) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(maybeEndpointList.error), maybeEndpointList.error.details);
        }
        return true;
      }
      const startIndex = Math.random() * maybeEndpointList.value.length | 0;
      const endpointList = rotateArray(maybeEndpointList.value, startIndex);
      this.resetSubchannelList();
      if (endpointList.length === 0) {
        const errorMessage = `No addresses resolved. Resolution note: ${resolutionNote}`;
        this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({ details: errorMessage }), errorMessage);
      }
      trace("Connect to endpoint list " + endpointList.map(subchannel_address_1.endpointToString));
      this.updatesPaused = true;
      this.children = endpointList.map((endpoint) => new load_balancer_pick_first_1.LeafLoadBalancer(endpoint, this.childChannelControlHelper, options, resolutionNote));
      for (const child of this.children) {
        child.startConnecting();
      }
      this.updatesPaused = false;
      this.calculateAndUpdateState();
      return true;
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList();
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  exports.RoundRobinLoadBalancer = RoundRobinLoadBalancer;
  function setup() {
    (0, load_balancer_1.registerLoadBalancerType)(TYPE_NAME, RoundRobinLoadBalancer, RoundRobinLoadBalancingConfig);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancer-outlier-detection.js
var require_load_balancer_outlier_detection = __commonJS((exports) => {
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OutlierDetectionLoadBalancer = exports.OutlierDetectionLoadBalancingConfig = undefined;
  exports.setup = setup;
  var connectivity_state_1 = require_connectivity_state();
  var constants_1 = require_constants();
  var duration_1 = require_duration();
  var experimental_1 = require_experimental();
  var load_balancer_1 = require_load_balancer();
  var load_balancer_child_handler_1 = require_load_balancer_child_handler();
  var picker_1 = require_picker();
  var subchannel_address_1 = require_subchannel_address();
  var subchannel_interface_1 = require_subchannel_interface();
  var logging = require_logging();
  var TRACER_NAME = "outlier_detection";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var TYPE_NAME = "outlier_detection";
  var OUTLIER_DETECTION_ENABLED = ((_a = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && _a !== undefined ? _a : "true") === "true";
  var defaultSuccessRateEjectionConfig = {
    stdev_factor: 1900,
    enforcement_percentage: 100,
    minimum_hosts: 5,
    request_volume: 100
  };
  var defaultFailurePercentageEjectionConfig = {
    threshold: 85,
    enforcement_percentage: 100,
    minimum_hosts: 5,
    request_volume: 50
  };
  function validateFieldType(obj, fieldName, expectedType, objectName) {
    if (fieldName in obj && obj[fieldName] !== undefined && typeof obj[fieldName] !== expectedType) {
      const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
      throw new Error(`outlier detection config ${fullFieldName} parse error: expected ${expectedType}, got ${typeof obj[fieldName]}`);
    }
  }
  function validatePositiveDuration(obj, fieldName, objectName) {
    const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
    if (fieldName in obj && obj[fieldName] !== undefined) {
      if (!(0, duration_1.isDuration)(obj[fieldName])) {
        throw new Error(`outlier detection config ${fullFieldName} parse error: expected Duration, got ${typeof obj[fieldName]}`);
      }
      if (!(obj[fieldName].seconds >= 0 && obj[fieldName].seconds <= 315576000000 && obj[fieldName].nanos >= 0 && obj[fieldName].nanos <= 999999999)) {
        throw new Error(`outlier detection config ${fullFieldName} parse error: values out of range for non-negative Duaration`);
      }
    }
  }
  function validatePercentage(obj, fieldName, objectName) {
    const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
    validateFieldType(obj, fieldName, "number", objectName);
    if (fieldName in obj && obj[fieldName] !== undefined && !(obj[fieldName] >= 0 && obj[fieldName] <= 100)) {
      throw new Error(`outlier detection config ${fullFieldName} parse error: value out of range for percentage (0-100)`);
    }
  }

  class OutlierDetectionLoadBalancingConfig {
    constructor(intervalMs, baseEjectionTimeMs, maxEjectionTimeMs, maxEjectionPercent, successRateEjection, failurePercentageEjection, childPolicy) {
      this.childPolicy = childPolicy;
      if (childPolicy.getLoadBalancerName() === "pick_first") {
        throw new Error("outlier_detection LB policy cannot have a pick_first child policy");
      }
      this.intervalMs = intervalMs !== null && intervalMs !== undefined ? intervalMs : 1e4;
      this.baseEjectionTimeMs = baseEjectionTimeMs !== null && baseEjectionTimeMs !== undefined ? baseEjectionTimeMs : 30000;
      this.maxEjectionTimeMs = maxEjectionTimeMs !== null && maxEjectionTimeMs !== undefined ? maxEjectionTimeMs : 300000;
      this.maxEjectionPercent = maxEjectionPercent !== null && maxEjectionPercent !== undefined ? maxEjectionPercent : 10;
      this.successRateEjection = successRateEjection ? Object.assign(Object.assign({}, defaultSuccessRateEjectionConfig), successRateEjection) : null;
      this.failurePercentageEjection = failurePercentageEjection ? Object.assign(Object.assign({}, defaultFailurePercentageEjectionConfig), failurePercentageEjection) : null;
    }
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    toJsonObject() {
      var _a2, _b;
      return {
        outlier_detection: {
          interval: (0, duration_1.msToDuration)(this.intervalMs),
          base_ejection_time: (0, duration_1.msToDuration)(this.baseEjectionTimeMs),
          max_ejection_time: (0, duration_1.msToDuration)(this.maxEjectionTimeMs),
          max_ejection_percent: this.maxEjectionPercent,
          success_rate_ejection: (_a2 = this.successRateEjection) !== null && _a2 !== undefined ? _a2 : undefined,
          failure_percentage_ejection: (_b = this.failurePercentageEjection) !== null && _b !== undefined ? _b : undefined,
          child_policy: [this.childPolicy.toJsonObject()]
        }
      };
    }
    getIntervalMs() {
      return this.intervalMs;
    }
    getBaseEjectionTimeMs() {
      return this.baseEjectionTimeMs;
    }
    getMaxEjectionTimeMs() {
      return this.maxEjectionTimeMs;
    }
    getMaxEjectionPercent() {
      return this.maxEjectionPercent;
    }
    getSuccessRateEjectionConfig() {
      return this.successRateEjection;
    }
    getFailurePercentageEjectionConfig() {
      return this.failurePercentageEjection;
    }
    getChildPolicy() {
      return this.childPolicy;
    }
    static createFromJson(obj) {
      var _a2;
      validatePositiveDuration(obj, "interval");
      validatePositiveDuration(obj, "base_ejection_time");
      validatePositiveDuration(obj, "max_ejection_time");
      validatePercentage(obj, "max_ejection_percent");
      if ("success_rate_ejection" in obj && obj.success_rate_ejection !== undefined) {
        if (typeof obj.success_rate_ejection !== "object") {
          throw new Error("outlier detection config success_rate_ejection must be an object");
        }
        validateFieldType(obj.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection");
        validatePercentage(obj.success_rate_ejection, "enforcement_percentage", "success_rate_ejection");
        validateFieldType(obj.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection");
        validateFieldType(obj.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
      }
      if ("failure_percentage_ejection" in obj && obj.failure_percentage_ejection !== undefined) {
        if (typeof obj.failure_percentage_ejection !== "object") {
          throw new Error("outlier detection config failure_percentage_ejection must be an object");
        }
        validatePercentage(obj.failure_percentage_ejection, "threshold", "failure_percentage_ejection");
        validatePercentage(obj.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection");
        validateFieldType(obj.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection");
        validateFieldType(obj.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
      }
      if (!("child_policy" in obj) || !Array.isArray(obj.child_policy)) {
        throw new Error("outlier detection config child_policy must be an array");
      }
      const childPolicy = (0, load_balancer_1.selectLbConfigFromList)(obj.child_policy);
      if (!childPolicy) {
        throw new Error("outlier detection config child_policy: no valid recognized policy found");
      }
      return new OutlierDetectionLoadBalancingConfig(obj.interval ? (0, duration_1.durationToMs)(obj.interval) : null, obj.base_ejection_time ? (0, duration_1.durationToMs)(obj.base_ejection_time) : null, obj.max_ejection_time ? (0, duration_1.durationToMs)(obj.max_ejection_time) : null, (_a2 = obj.max_ejection_percent) !== null && _a2 !== undefined ? _a2 : null, obj.success_rate_ejection, obj.failure_percentage_ejection, childPolicy);
    }
  }
  exports.OutlierDetectionLoadBalancingConfig = OutlierDetectionLoadBalancingConfig;

  class OutlierDetectionSubchannelWrapper extends subchannel_interface_1.BaseSubchannelWrapper {
    constructor(childSubchannel, mapEntry) {
      super(childSubchannel);
      this.mapEntry = mapEntry;
      this.refCount = 0;
    }
    ref() {
      this.child.ref();
      this.refCount += 1;
    }
    unref() {
      this.child.unref();
      this.refCount -= 1;
      if (this.refCount <= 0) {
        if (this.mapEntry) {
          const index = this.mapEntry.subchannelWrappers.indexOf(this);
          if (index >= 0) {
            this.mapEntry.subchannelWrappers.splice(index, 1);
          }
        }
      }
    }
    eject() {
      this.setHealthy(false);
    }
    uneject() {
      this.setHealthy(true);
    }
    getMapEntry() {
      return this.mapEntry;
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  function createEmptyBucket() {
    return {
      success: 0,
      failure: 0
    };
  }

  class CallCounter {
    constructor() {
      this.activeBucket = createEmptyBucket();
      this.inactiveBucket = createEmptyBucket();
    }
    addSuccess() {
      this.activeBucket.success += 1;
    }
    addFailure() {
      this.activeBucket.failure += 1;
    }
    switchBuckets() {
      this.inactiveBucket = this.activeBucket;
      this.activeBucket = createEmptyBucket();
    }
    getLastSuccesses() {
      return this.inactiveBucket.success;
    }
    getLastFailures() {
      return this.inactiveBucket.failure;
    }
  }

  class OutlierDetectionPicker {
    constructor(wrappedPicker, countCalls) {
      this.wrappedPicker = wrappedPicker;
      this.countCalls = countCalls;
    }
    pick(pickArgs) {
      const wrappedPick = this.wrappedPicker.pick(pickArgs);
      if (wrappedPick.pickResultType === picker_1.PickResultType.COMPLETE) {
        const subchannelWrapper = wrappedPick.subchannel;
        const mapEntry = subchannelWrapper.getMapEntry();
        if (mapEntry) {
          let onCallEnded = wrappedPick.onCallEnded;
          if (this.countCalls) {
            onCallEnded = (statusCode, details, metadata) => {
              var _a2;
              if (statusCode === constants_1.Status.OK) {
                mapEntry.counter.addSuccess();
              } else {
                mapEntry.counter.addFailure();
              }
              (_a2 = wrappedPick.onCallEnded) === null || _a2 === undefined || _a2.call(wrappedPick, statusCode, details, metadata);
            };
          }
          return Object.assign(Object.assign({}, wrappedPick), { subchannel: subchannelWrapper.getWrappedSubchannel(), onCallEnded });
        } else {
          return Object.assign(Object.assign({}, wrappedPick), { subchannel: subchannelWrapper.getWrappedSubchannel() });
        }
      } else {
        return wrappedPick;
      }
    }
  }

  class OutlierDetectionLoadBalancer {
    constructor(channelControlHelper) {
      this.entryMap = new subchannel_address_1.EndpointMap;
      this.latestConfig = null;
      this.timerStartTime = null;
      this.childBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler((0, experimental_1.createChildChannelControlHelper)(channelControlHelper, {
        createSubchannel: (subchannelAddress, subchannelArgs) => {
          const originalSubchannel = channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
          const mapEntry = this.entryMap.getForSubchannelAddress(subchannelAddress);
          const subchannelWrapper = new OutlierDetectionSubchannelWrapper(originalSubchannel, mapEntry);
          if ((mapEntry === null || mapEntry === undefined ? undefined : mapEntry.currentEjectionTimestamp) !== null) {
            subchannelWrapper.eject();
          }
          mapEntry === null || mapEntry === undefined || mapEntry.subchannelWrappers.push(subchannelWrapper);
          return subchannelWrapper;
        },
        updateState: (connectivityState, picker, errorMessage) => {
          if (connectivityState === connectivity_state_1.ConnectivityState.READY) {
            channelControlHelper.updateState(connectivityState, new OutlierDetectionPicker(picker, this.isCountingEnabled()), errorMessage);
          } else {
            channelControlHelper.updateState(connectivityState, picker, errorMessage);
          }
        }
      }));
      this.ejectionTimer = setInterval(() => {}, 0);
      clearInterval(this.ejectionTimer);
    }
    isCountingEnabled() {
      return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
    }
    getCurrentEjectionPercent() {
      let ejectionCount = 0;
      for (const mapEntry of this.entryMap.values()) {
        if (mapEntry.currentEjectionTimestamp !== null) {
          ejectionCount += 1;
        }
      }
      return ejectionCount * 100 / this.entryMap.size;
    }
    runSuccessRateCheck(ejectionTimestamp) {
      if (!this.latestConfig) {
        return;
      }
      const successRateConfig = this.latestConfig.getSuccessRateEjectionConfig();
      if (!successRateConfig) {
        return;
      }
      trace("Running success rate check");
      const targetRequestVolume = successRateConfig.request_volume;
      let addresesWithTargetVolume = 0;
      const successRates = [];
      for (const [endpoint, mapEntry] of this.entryMap.entries()) {
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        trace("Stats for " + (0, subchannel_address_1.endpointToString)(endpoint) + ": successes=" + successes + " failures=" + failures + " targetRequestVolume=" + targetRequestVolume);
        if (successes + failures >= targetRequestVolume) {
          addresesWithTargetVolume += 1;
          successRates.push(successes / (successes + failures));
        }
      }
      trace("Found " + addresesWithTargetVolume + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + successRates + "]");
      if (addresesWithTargetVolume < successRateConfig.minimum_hosts) {
        return;
      }
      const successRateMean = successRates.reduce((a, b) => a + b) / successRates.length;
      let successRateDeviationSum = 0;
      for (const rate of successRates) {
        const deviation = rate - successRateMean;
        successRateDeviationSum += deviation * deviation;
      }
      const successRateVariance = successRateDeviationSum / successRates.length;
      const successRateStdev = Math.sqrt(successRateVariance);
      const ejectionThreshold = successRateMean - successRateStdev * (successRateConfig.stdev_factor / 1000);
      trace("stdev=" + successRateStdev + " ejectionThreshold=" + ejectionThreshold);
      for (const [address, mapEntry] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
          break;
        }
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        if (successes + failures < targetRequestVolume) {
          continue;
        }
        const successRate = successes / (successes + failures);
        trace("Checking candidate " + address + " successRate=" + successRate);
        if (successRate < ejectionThreshold) {
          const randomNumber = Math.random() * 100;
          trace("Candidate " + address + " randomNumber=" + randomNumber + " enforcement_percentage=" + successRateConfig.enforcement_percentage);
          if (randomNumber < successRateConfig.enforcement_percentage) {
            trace("Ejecting candidate " + address);
            this.eject(mapEntry, ejectionTimestamp);
          }
        }
      }
    }
    runFailurePercentageCheck(ejectionTimestamp) {
      if (!this.latestConfig) {
        return;
      }
      const failurePercentageConfig = this.latestConfig.getFailurePercentageEjectionConfig();
      if (!failurePercentageConfig) {
        return;
      }
      trace("Running failure percentage check. threshold=" + failurePercentageConfig.threshold + " request volume threshold=" + failurePercentageConfig.request_volume);
      let addressesWithTargetVolume = 0;
      for (const mapEntry of this.entryMap.values()) {
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        if (successes + failures >= failurePercentageConfig.request_volume) {
          addressesWithTargetVolume += 1;
        }
      }
      if (addressesWithTargetVolume < failurePercentageConfig.minimum_hosts) {
        return;
      }
      for (const [address, mapEntry] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
          break;
        }
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        trace("Candidate successes=" + successes + " failures=" + failures);
        if (successes + failures < failurePercentageConfig.request_volume) {
          continue;
        }
        const failurePercentage = failures * 100 / (failures + successes);
        if (failurePercentage > failurePercentageConfig.threshold) {
          const randomNumber = Math.random() * 100;
          trace("Candidate " + address + " randomNumber=" + randomNumber + " enforcement_percentage=" + failurePercentageConfig.enforcement_percentage);
          if (randomNumber < failurePercentageConfig.enforcement_percentage) {
            trace("Ejecting candidate " + address);
            this.eject(mapEntry, ejectionTimestamp);
          }
        }
      }
    }
    eject(mapEntry, ejectionTimestamp) {
      mapEntry.currentEjectionTimestamp = new Date;
      mapEntry.ejectionTimeMultiplier += 1;
      for (const subchannelWrapper of mapEntry.subchannelWrappers) {
        subchannelWrapper.eject();
      }
    }
    uneject(mapEntry) {
      mapEntry.currentEjectionTimestamp = null;
      for (const subchannelWrapper of mapEntry.subchannelWrappers) {
        subchannelWrapper.uneject();
      }
    }
    switchAllBuckets() {
      for (const mapEntry of this.entryMap.values()) {
        mapEntry.counter.switchBuckets();
      }
    }
    startTimer(delayMs) {
      var _a2, _b;
      this.ejectionTimer = setTimeout(() => this.runChecks(), delayMs);
      (_b = (_a2 = this.ejectionTimer).unref) === null || _b === undefined || _b.call(_a2);
    }
    runChecks() {
      const ejectionTimestamp = new Date;
      trace("Ejection timer running");
      this.switchAllBuckets();
      if (!this.latestConfig) {
        return;
      }
      this.timerStartTime = ejectionTimestamp;
      this.startTimer(this.latestConfig.getIntervalMs());
      this.runSuccessRateCheck(ejectionTimestamp);
      this.runFailurePercentageCheck(ejectionTimestamp);
      for (const [address, mapEntry] of this.entryMap.entries()) {
        if (mapEntry.currentEjectionTimestamp === null) {
          if (mapEntry.ejectionTimeMultiplier > 0) {
            mapEntry.ejectionTimeMultiplier -= 1;
          }
        } else {
          const baseEjectionTimeMs = this.latestConfig.getBaseEjectionTimeMs();
          const maxEjectionTimeMs = this.latestConfig.getMaxEjectionTimeMs();
          const returnTime = new Date(mapEntry.currentEjectionTimestamp.getTime());
          returnTime.setMilliseconds(returnTime.getMilliseconds() + Math.min(baseEjectionTimeMs * mapEntry.ejectionTimeMultiplier, Math.max(baseEjectionTimeMs, maxEjectionTimeMs)));
          if (returnTime < new Date) {
            trace("Unejecting " + address);
            this.uneject(mapEntry);
          }
        }
      }
    }
    updateAddressList(endpointList, lbConfig, options, resolutionNote) {
      if (!(lbConfig instanceof OutlierDetectionLoadBalancingConfig)) {
        return false;
      }
      trace("Received update with config: " + JSON.stringify(lbConfig.toJsonObject(), undefined, 2));
      if (endpointList.ok) {
        for (const endpoint of endpointList.value) {
          if (!this.entryMap.has(endpoint)) {
            trace("Adding map entry for " + (0, subchannel_address_1.endpointToString)(endpoint));
            this.entryMap.set(endpoint, {
              counter: new CallCounter,
              currentEjectionTimestamp: null,
              ejectionTimeMultiplier: 0,
              subchannelWrappers: []
            });
          }
        }
        this.entryMap.deleteMissing(endpointList.value);
      }
      const childPolicy = lbConfig.getChildPolicy();
      this.childBalancer.updateAddressList(endpointList, childPolicy, options, resolutionNote);
      if (lbConfig.getSuccessRateEjectionConfig() || lbConfig.getFailurePercentageEjectionConfig()) {
        if (this.timerStartTime) {
          trace("Previous timer existed. Replacing timer");
          clearTimeout(this.ejectionTimer);
          const remainingDelay = lbConfig.getIntervalMs() - (new Date().getTime() - this.timerStartTime.getTime());
          this.startTimer(remainingDelay);
        } else {
          trace("Starting new timer");
          this.timerStartTime = new Date;
          this.startTimer(lbConfig.getIntervalMs());
          this.switchAllBuckets();
        }
      } else {
        trace("Counting disabled. Cancelling timer.");
        this.timerStartTime = null;
        clearTimeout(this.ejectionTimer);
        for (const mapEntry of this.entryMap.values()) {
          this.uneject(mapEntry);
          mapEntry.ejectionTimeMultiplier = 0;
        }
      }
      this.latestConfig = lbConfig;
      return true;
    }
    exitIdle() {
      this.childBalancer.exitIdle();
    }
    resetBackoff() {
      this.childBalancer.resetBackoff();
    }
    destroy() {
      clearTimeout(this.ejectionTimer);
      this.childBalancer.destroy();
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  exports.OutlierDetectionLoadBalancer = OutlierDetectionLoadBalancer;
  function setup() {
    if (OUTLIER_DETECTION_ENABLED) {
      (0, experimental_1.registerLoadBalancerType)(TYPE_NAME, OutlierDetectionLoadBalancer, OutlierDetectionLoadBalancingConfig);
    }
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/priority-queue.js
var require_priority_queue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PriorityQueue = undefined;
  var top = 0;
  var parent = (i) => Math.floor(i / 2);
  var left = (i) => i * 2 + 1;
  var right = (i) => i * 2 + 2;

  class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
      this.comparator = comparator;
      this.heap = [];
    }
    size() {
      return this.heap.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    peek() {
      return this.heap[top];
    }
    push(...values) {
      values.forEach((value) => {
        this.heap.push(value);
        this.siftUp();
      });
      return this.size();
    }
    pop() {
      const poppedValue = this.peek();
      const bottom = this.size() - 1;
      if (bottom > top) {
        this.swap(top, bottom);
      }
      this.heap.pop();
      this.siftDown();
      return poppedValue;
    }
    replace(value) {
      const replacedValue = this.peek();
      this.heap[top] = value;
      this.siftDown();
      return replacedValue;
    }
    greater(i, j) {
      return this.comparator(this.heap[i], this.heap[j]);
    }
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    siftUp() {
      let node = this.size() - 1;
      while (node > top && this.greater(node, parent(node))) {
        this.swap(node, parent(node));
        node = parent(node);
      }
    }
    siftDown() {
      let node = top;
      while (left(node) < this.size() && this.greater(left(node), node) || right(node) < this.size() && this.greater(right(node), node)) {
        let maxChild = right(node) < this.size() && this.greater(right(node), left(node)) ? right(node) : left(node);
        this.swap(node, maxChild);
        node = maxChild;
      }
    }
  }
  exports.PriorityQueue = PriorityQueue;
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/load-balancer-weighted-round-robin.js
var require_load_balancer_weighted_round_robin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.WeightedRoundRobinLoadBalancingConfig = undefined;
  exports.setup = setup;
  var connectivity_state_1 = require_connectivity_state();
  var constants_1 = require_constants();
  var duration_1 = require_duration();
  var load_balancer_1 = require_load_balancer();
  var load_balancer_pick_first_1 = require_load_balancer_pick_first();
  var logging = require_logging();
  var orca_1 = require_orca();
  var picker_1 = require_picker();
  var priority_queue_1 = require_priority_queue();
  var subchannel_address_1 = require_subchannel_address();
  var TRACER_NAME = "weighted_round_robin";
  function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
  }
  var TYPE_NAME = "weighted_round_robin";
  var DEFAULT_OOB_REPORTING_PERIOD_MS = 1e4;
  var DEFAULT_BLACKOUT_PERIOD_MS = 1e4;
  var DEFAULT_WEIGHT_EXPIRATION_PERIOD_MS = 3 * 60000;
  var DEFAULT_WEIGHT_UPDATE_PERIOD_MS = 1000;
  var DEFAULT_ERROR_UTILIZATION_PENALTY = 1;
  function validateFieldType(obj, fieldName, expectedType) {
    if (fieldName in obj && obj[fieldName] !== undefined && typeof obj[fieldName] !== expectedType) {
      throw new Error(`weighted round robin config ${fieldName} parse error: expected ${expectedType}, got ${typeof obj[fieldName]}`);
    }
  }
  function parseDurationField(obj, fieldName) {
    if (fieldName in obj && obj[fieldName] !== undefined && obj[fieldName] !== null) {
      let durationObject;
      if ((0, duration_1.isDuration)(obj[fieldName])) {
        durationObject = obj[fieldName];
      } else if ((0, duration_1.isDurationMessage)(obj[fieldName])) {
        durationObject = (0, duration_1.durationMessageToDuration)(obj[fieldName]);
      } else if (typeof obj[fieldName] === "string") {
        const parsedDuration = (0, duration_1.parseDuration)(obj[fieldName]);
        if (!parsedDuration) {
          throw new Error(`weighted round robin config ${fieldName}: failed to parse duration string ${obj[fieldName]}`);
        }
        durationObject = parsedDuration;
      } else {
        throw new Error(`weighted round robin config ${fieldName}: expected duration, got ${typeof obj[fieldName]}`);
      }
      return (0, duration_1.durationToMs)(durationObject);
    }
    return null;
  }

  class WeightedRoundRobinLoadBalancingConfig {
    constructor(enableOobLoadReport, oobLoadReportingPeriodMs, blackoutPeriodMs, weightExpirationPeriodMs, weightUpdatePeriodMs, errorUtilizationPenalty) {
      this.enableOobLoadReport = enableOobLoadReport !== null && enableOobLoadReport !== undefined ? enableOobLoadReport : false;
      this.oobLoadReportingPeriodMs = oobLoadReportingPeriodMs !== null && oobLoadReportingPeriodMs !== undefined ? oobLoadReportingPeriodMs : DEFAULT_OOB_REPORTING_PERIOD_MS;
      this.blackoutPeriodMs = blackoutPeriodMs !== null && blackoutPeriodMs !== undefined ? blackoutPeriodMs : DEFAULT_BLACKOUT_PERIOD_MS;
      this.weightExpirationPeriodMs = weightExpirationPeriodMs !== null && weightExpirationPeriodMs !== undefined ? weightExpirationPeriodMs : DEFAULT_WEIGHT_EXPIRATION_PERIOD_MS;
      this.weightUpdatePeriodMs = Math.max(weightUpdatePeriodMs !== null && weightUpdatePeriodMs !== undefined ? weightUpdatePeriodMs : DEFAULT_WEIGHT_UPDATE_PERIOD_MS, 100);
      this.errorUtilizationPenalty = errorUtilizationPenalty !== null && errorUtilizationPenalty !== undefined ? errorUtilizationPenalty : DEFAULT_ERROR_UTILIZATION_PENALTY;
    }
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    toJsonObject() {
      return {
        enable_oob_load_report: this.enableOobLoadReport,
        oob_load_reporting_period: (0, duration_1.durationToString)((0, duration_1.msToDuration)(this.oobLoadReportingPeriodMs)),
        blackout_period: (0, duration_1.durationToString)((0, duration_1.msToDuration)(this.blackoutPeriodMs)),
        weight_expiration_period: (0, duration_1.durationToString)((0, duration_1.msToDuration)(this.weightExpirationPeriodMs)),
        weight_update_period: (0, duration_1.durationToString)((0, duration_1.msToDuration)(this.weightUpdatePeriodMs)),
        error_utilization_penalty: this.errorUtilizationPenalty
      };
    }
    static createFromJson(obj) {
      validateFieldType(obj, "enable_oob_load_report", "boolean");
      validateFieldType(obj, "error_utilization_penalty", "number");
      if (obj.error_utilization_penalty < 0) {
        throw new Error("weighted round robin config error_utilization_penalty < 0");
      }
      return new WeightedRoundRobinLoadBalancingConfig(obj.enable_oob_load_report, parseDurationField(obj, "oob_load_reporting_period"), parseDurationField(obj, "blackout_period"), parseDurationField(obj, "weight_expiration_period"), parseDurationField(obj, "weight_update_period"), obj.error_utilization_penalty);
    }
    getEnableOobLoadReport() {
      return this.enableOobLoadReport;
    }
    getOobLoadReportingPeriodMs() {
      return this.oobLoadReportingPeriodMs;
    }
    getBlackoutPeriodMs() {
      return this.blackoutPeriodMs;
    }
    getWeightExpirationPeriodMs() {
      return this.weightExpirationPeriodMs;
    }
    getWeightUpdatePeriodMs() {
      return this.weightUpdatePeriodMs;
    }
    getErrorUtilizationPenalty() {
      return this.errorUtilizationPenalty;
    }
  }
  exports.WeightedRoundRobinLoadBalancingConfig = WeightedRoundRobinLoadBalancingConfig;

  class WeightedRoundRobinPicker {
    constructor(children, metricsHandler) {
      this.metricsHandler = metricsHandler;
      this.queue = new priority_queue_1.PriorityQueue((a, b) => a.deadline < b.deadline);
      const positiveWeight = children.filter((picker) => picker.weight > 0);
      let averageWeight;
      if (positiveWeight.length < 2) {
        averageWeight = 1;
      } else {
        let weightSum = 0;
        for (const { weight } of positiveWeight) {
          weightSum += weight;
        }
        averageWeight = weightSum / positiveWeight.length;
      }
      for (const child of children) {
        const period = child.weight > 0 ? 1 / child.weight : averageWeight;
        this.queue.push({
          endpointName: child.endpointName,
          picker: child.picker,
          period,
          deadline: Math.random() * period
        });
      }
    }
    pick(pickArgs) {
      const entry = this.queue.pop();
      this.queue.push(Object.assign(Object.assign({}, entry), { deadline: entry.deadline + entry.period }));
      const childPick = entry.picker.pick(pickArgs);
      if (childPick.pickResultType === picker_1.PickResultType.COMPLETE) {
        if (this.metricsHandler) {
          return Object.assign(Object.assign({}, childPick), { onCallEnded: (0, orca_1.createMetricsReader)((loadReport) => this.metricsHandler(loadReport, entry.endpointName), childPick.onCallEnded) });
        } else {
          const subchannelWrapper = childPick.subchannel;
          return Object.assign(Object.assign({}, childPick), { subchannel: subchannelWrapper.getWrappedSubchannel() });
        }
      } else {
        return childPick;
      }
    }
  }

  class WeightedRoundRobinLoadBalancer {
    constructor(channelControlHelper) {
      this.channelControlHelper = channelControlHelper;
      this.latestConfig = null;
      this.children = new Map;
      this.currentState = connectivity_state_1.ConnectivityState.IDLE;
      this.updatesPaused = false;
      this.lastError = null;
      this.weightUpdateTimer = null;
    }
    countChildrenWithState(state) {
      let count = 0;
      for (const entry of this.children.values()) {
        if (entry.child.getConnectivityState() === state) {
          count += 1;
        }
      }
      return count;
    }
    updateWeight(entry, loadReport) {
      var _a, _b;
      const qps = loadReport.rps_fractional;
      let utilization = loadReport.application_utilization;
      if (utilization > 0 && qps > 0) {
        utilization += loadReport.eps / qps * ((_b = (_a = this.latestConfig) === null || _a === undefined ? undefined : _a.getErrorUtilizationPenalty()) !== null && _b !== undefined ? _b : 0);
      }
      const newWeight = utilization === 0 ? 0 : qps / utilization;
      if (newWeight === 0) {
        return;
      }
      const now = new Date;
      if (entry.nonEmptySince === null) {
        entry.nonEmptySince = now;
      }
      entry.lastUpdated = now;
      entry.weight = newWeight;
    }
    getWeight(entry) {
      if (!this.latestConfig) {
        return 0;
      }
      const now = new Date().getTime();
      if (now - entry.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs()) {
        entry.nonEmptySince = null;
        return 0;
      }
      const blackoutPeriod = this.latestConfig.getBlackoutPeriodMs();
      if (blackoutPeriod > 0 && (entry.nonEmptySince === null || now - entry.nonEmptySince.getTime() < blackoutPeriod)) {
        return 0;
      }
      return entry.weight;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused || !this.latestConfig) {
        return;
      }
      if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.READY) > 0) {
        const weightedPickers = [];
        for (const [endpoint, entry] of this.children) {
          if (entry.child.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
            continue;
          }
          weightedPickers.push({
            endpointName: endpoint,
            picker: entry.child.getPicker(),
            weight: this.getWeight(entry)
          });
        }
        trace("Created picker with weights: " + weightedPickers.map((entry) => entry.endpointName + ":" + entry.weight).join(","));
        let metricsHandler;
        if (!this.latestConfig.getEnableOobLoadReport()) {
          metricsHandler = (loadReport, endpointName) => {
            const childEntry = this.children.get(endpointName);
            if (childEntry) {
              this.updateWeight(childEntry, loadReport);
            }
          };
        } else {
          metricsHandler = null;
        }
        this.updateState(connectivity_state_1.ConnectivityState.READY, new WeightedRoundRobinPicker(weightedPickers, metricsHandler), null);
      } else if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.CONNECTING) > 0) {
        this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this), null);
      } else if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        const errorMessage = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
          details: errorMessage
        }), errorMessage);
      } else {
        this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this), null);
      }
      for (const { child } of this.children.values()) {
        if (child.getConnectivityState() === connectivity_state_1.ConnectivityState.IDLE) {
          child.exitIdle();
        }
      }
    }
    updateState(newState, picker, errorMessage) {
      trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
      this.currentState = newState;
      this.channelControlHelper.updateState(newState, picker, errorMessage);
    }
    updateAddressList(maybeEndpointList, lbConfig, options, resolutionNote) {
      var _a, _b;
      if (!(lbConfig instanceof WeightedRoundRobinLoadBalancingConfig)) {
        return false;
      }
      if (!maybeEndpointList.ok) {
        if (this.children.size === 0) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(maybeEndpointList.error), maybeEndpointList.error.details);
        }
        return true;
      }
      if (maybeEndpointList.value.length === 0) {
        const errorMessage = `No addresses resolved. Resolution note: ${resolutionNote}`;
        this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({ details: errorMessage }), errorMessage);
        return false;
      }
      trace("Connect to endpoint list " + maybeEndpointList.value.map(subchannel_address_1.endpointToString));
      const now = new Date;
      const seenEndpointNames = new Set;
      this.updatesPaused = true;
      this.latestConfig = lbConfig;
      for (const endpoint of maybeEndpointList.value) {
        const name = (0, subchannel_address_1.endpointToString)(endpoint);
        seenEndpointNames.add(name);
        let entry = this.children.get(name);
        if (!entry) {
          entry = {
            child: new load_balancer_pick_first_1.LeafLoadBalancer(endpoint, (0, load_balancer_1.createChildChannelControlHelper)(this.channelControlHelper, {
              updateState: (connectivityState, picker, errorMessage) => {
                if (this.currentState === connectivity_state_1.ConnectivityState.READY && connectivityState !== connectivity_state_1.ConnectivityState.READY) {
                  this.channelControlHelper.requestReresolution();
                }
                if (connectivityState === connectivity_state_1.ConnectivityState.READY) {
                  entry.nonEmptySince = null;
                }
                if (errorMessage) {
                  this.lastError = errorMessage;
                }
                this.calculateAndUpdateState();
              },
              createSubchannel: (subchannelAddress, subchannelArgs) => {
                const subchannel = this.channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
                if (entry === null || entry === undefined ? undefined : entry.oobMetricsListener) {
                  return new orca_1.OrcaOobMetricsSubchannelWrapper(subchannel, entry.oobMetricsListener, this.latestConfig.getOobLoadReportingPeriodMs());
                } else {
                  return subchannel;
                }
              }
            }), options, resolutionNote),
            lastUpdated: now,
            nonEmptySince: null,
            weight: 0,
            oobMetricsListener: null
          };
          this.children.set(name, entry);
        }
        if (lbConfig.getEnableOobLoadReport()) {
          entry.oobMetricsListener = (loadReport) => {
            this.updateWeight(entry, loadReport);
          };
        } else {
          entry.oobMetricsListener = null;
        }
      }
      for (const [endpointName, entry] of this.children) {
        if (seenEndpointNames.has(endpointName)) {
          entry.child.startConnecting();
        } else {
          entry.child.destroy();
          this.children.delete(endpointName);
        }
      }
      this.updatesPaused = false;
      this.calculateAndUpdateState();
      if (this.weightUpdateTimer) {
        clearInterval(this.weightUpdateTimer);
      }
      this.weightUpdateTimer = (_b = (_a = setInterval(() => {
        if (this.currentState === connectivity_state_1.ConnectivityState.READY) {
          this.calculateAndUpdateState();
        }
      }, lbConfig.getWeightUpdatePeriodMs())).unref) === null || _b === undefined ? undefined : _b.call(_a);
      return true;
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      for (const entry of this.children.values()) {
        entry.child.destroy();
      }
      this.children.clear();
      if (this.weightUpdateTimer) {
        clearInterval(this.weightUpdateTimer);
      }
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  function setup() {
    (0, load_balancer_1.registerLoadBalancerType)(TYPE_NAME, WeightedRoundRobinLoadBalancer, WeightedRoundRobinLoadBalancingConfig);
  }
});

// node_modules/.bun/@grpc+grpc-js@1.14.3/node_modules/@grpc/grpc-js/build/src/index.js
var require_src6 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.experimental = exports.ServerMetricRecorder = exports.ServerInterceptingCall = exports.ResponderBuilder = exports.ServerListenerBuilder = exports.addAdminServicesToServer = exports.getChannelzHandlers = exports.getChannelzServiceDefinition = exports.InterceptorConfigurationError = exports.InterceptingCall = exports.RequesterBuilder = exports.ListenerBuilder = exports.StatusBuilder = exports.getClientChannel = exports.ServerCredentials = exports.Server = exports.setLogVerbosity = exports.setLogger = exports.load = exports.loadObject = exports.CallCredentials = exports.ChannelCredentials = exports.waitForClientReady = exports.closeClient = exports.Channel = exports.makeGenericClientConstructor = exports.makeClientConstructor = exports.loadPackageDefinition = exports.Client = exports.compressionAlgorithms = exports.propagate = exports.connectivityState = exports.status = exports.logVerbosity = exports.Metadata = exports.credentials = undefined;
  var call_credentials_1 = require_call_credentials();
  Object.defineProperty(exports, "CallCredentials", { enumerable: true, get: function() {
    return call_credentials_1.CallCredentials;
  } });
  var channel_1 = require_channel();
  Object.defineProperty(exports, "Channel", { enumerable: true, get: function() {
    return channel_1.ChannelImplementation;
  } });
  var compression_algorithms_1 = require_compression_algorithms();
  Object.defineProperty(exports, "compressionAlgorithms", { enumerable: true, get: function() {
    return compression_algorithms_1.CompressionAlgorithms;
  } });
  var connectivity_state_1 = require_connectivity_state();
  Object.defineProperty(exports, "connectivityState", { enumerable: true, get: function() {
    return connectivity_state_1.ConnectivityState;
  } });
  var channel_credentials_1 = require_channel_credentials();
  Object.defineProperty(exports, "ChannelCredentials", { enumerable: true, get: function() {
    return channel_credentials_1.ChannelCredentials;
  } });
  var client_1 = require_client();
  Object.defineProperty(exports, "Client", { enumerable: true, get: function() {
    return client_1.Client;
  } });
  var constants_1 = require_constants();
  Object.defineProperty(exports, "logVerbosity", { enumerable: true, get: function() {
    return constants_1.LogVerbosity;
  } });
  Object.defineProperty(exports, "status", { enumerable: true, get: function() {
    return constants_1.Status;
  } });
  Object.defineProperty(exports, "propagate", { enumerable: true, get: function() {
    return constants_1.Propagate;
  } });
  var logging = require_logging();
  var make_client_1 = require_make_client();
  Object.defineProperty(exports, "loadPackageDefinition", { enumerable: true, get: function() {
    return make_client_1.loadPackageDefinition;
  } });
  Object.defineProperty(exports, "makeClientConstructor", { enumerable: true, get: function() {
    return make_client_1.makeClientConstructor;
  } });
  Object.defineProperty(exports, "makeGenericClientConstructor", { enumerable: true, get: function() {
    return make_client_1.makeClientConstructor;
  } });
  var metadata_1 = require_metadata();
  Object.defineProperty(exports, "Metadata", { enumerable: true, get: function() {
    return metadata_1.Metadata;
  } });
  var server_1 = require_server();
  Object.defineProperty(exports, "Server", { enumerable: true, get: function() {
    return server_1.Server;
  } });
  var server_credentials_1 = require_server_credentials();
  Object.defineProperty(exports, "ServerCredentials", { enumerable: true, get: function() {
    return server_credentials_1.ServerCredentials;
  } });
  var status_builder_1 = require_status_builder();
  Object.defineProperty(exports, "StatusBuilder", { enumerable: true, get: function() {
    return status_builder_1.StatusBuilder;
  } });
  exports.credentials = {
    combineChannelCredentials: (channelCredentials, ...callCredentials) => {
      return callCredentials.reduce((acc, other) => acc.compose(other), channelCredentials);
    },
    combineCallCredentials: (first, ...additional) => {
      return additional.reduce((acc, other) => acc.compose(other), first);
    },
    createInsecure: channel_credentials_1.ChannelCredentials.createInsecure,
    createSsl: channel_credentials_1.ChannelCredentials.createSsl,
    createFromSecureContext: channel_credentials_1.ChannelCredentials.createFromSecureContext,
    createFromMetadataGenerator: call_credentials_1.CallCredentials.createFromMetadataGenerator,
    createFromGoogleCredential: call_credentials_1.CallCredentials.createFromGoogleCredential,
    createEmpty: call_credentials_1.CallCredentials.createEmpty
  };
  var closeClient = (client) => client.close();
  exports.closeClient = closeClient;
  var waitForClientReady = (client, deadline, callback) => client.waitForReady(deadline, callback);
  exports.waitForClientReady = waitForClientReady;
  var loadObject = (value, options) => {
    throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  exports.loadObject = loadObject;
  var load = (filename, format, options) => {
    throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  exports.load = load;
  var setLogger = (logger) => {
    logging.setLogger(logger);
  };
  exports.setLogger = setLogger;
  var setLogVerbosity = (verbosity) => {
    logging.setLoggerVerbosity(verbosity);
  };
  exports.setLogVerbosity = setLogVerbosity;
  var getClientChannel = (client) => {
    return client_1.Client.prototype.getChannel.call(client);
  };
  exports.getClientChannel = getClientChannel;
  var client_interceptors_1 = require_client_interceptors();
  Object.defineProperty(exports, "ListenerBuilder", { enumerable: true, get: function() {
    return client_interceptors_1.ListenerBuilder;
  } });
  Object.defineProperty(exports, "RequesterBuilder", { enumerable: true, get: function() {
    return client_interceptors_1.RequesterBuilder;
  } });
  Object.defineProperty(exports, "InterceptingCall", { enumerable: true, get: function() {
    return client_interceptors_1.InterceptingCall;
  } });
  Object.defineProperty(exports, "InterceptorConfigurationError", { enumerable: true, get: function() {
    return client_interceptors_1.InterceptorConfigurationError;
  } });
  var channelz_1 = require_channelz();
  Object.defineProperty(exports, "getChannelzServiceDefinition", { enumerable: true, get: function() {
    return channelz_1.getChannelzServiceDefinition;
  } });
  Object.defineProperty(exports, "getChannelzHandlers", { enumerable: true, get: function() {
    return channelz_1.getChannelzHandlers;
  } });
  var admin_1 = require_admin();
  Object.defineProperty(exports, "addAdminServicesToServer", { enumerable: true, get: function() {
    return admin_1.addAdminServicesToServer;
  } });
  var server_interceptors_1 = require_server_interceptors();
  Object.defineProperty(exports, "ServerListenerBuilder", { enumerable: true, get: function() {
    return server_interceptors_1.ServerListenerBuilder;
  } });
  Object.defineProperty(exports, "ResponderBuilder", { enumerable: true, get: function() {
    return server_interceptors_1.ResponderBuilder;
  } });
  Object.defineProperty(exports, "ServerInterceptingCall", { enumerable: true, get: function() {
    return server_interceptors_1.ServerInterceptingCall;
  } });
  var orca_1 = require_orca();
  Object.defineProperty(exports, "ServerMetricRecorder", { enumerable: true, get: function() {
    return orca_1.ServerMetricRecorder;
  } });
  var experimental = require_experimental();
  exports.experimental = experimental;
  var resolver_dns = require_resolver_dns();
  var resolver_uds = require_resolver_uds();
  var resolver_ip = require_resolver_ip();
  var load_balancer_pick_first = require_load_balancer_pick_first();
  var load_balancer_round_robin = require_load_balancer_round_robin();
  var load_balancer_outlier_detection = require_load_balancer_outlier_detection();
  var load_balancer_weighted_round_robin = require_load_balancer_weighted_round_robin();
  var channelz = require_channelz();
  (() => {
    resolver_dns.setup();
    resolver_uds.setup();
    resolver_ip.setup();
    load_balancer_pick_first.setup();
    load_balancer_round_robin.setup();
    load_balancer_outlier_detection.setup();
    load_balancer_weighted_round_robin.setup();
    channelz.setup();
  })();
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/create-service-client-constructor.js
var require_create_service_client_constructor = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createServiceClientConstructor = undefined;
  var grpc = require_src6();
  function createServiceClientConstructor(path, name) {
    const serviceDefinition = {
      export: {
        path,
        requestStream: false,
        responseStream: false,
        requestSerialize: (arg) => {
          return arg;
        },
        requestDeserialize: (arg) => {
          return arg;
        },
        responseSerialize: (arg) => {
          return arg;
        },
        responseDeserialize: (arg) => {
          return arg;
        }
      }
    };
    return grpc.makeGenericClientConstructor(serviceDefinition, name);
  }
  exports.createServiceClientConstructor = createServiceClientConstructor;
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/grpc-exporter-transport.js
var require_grpc_exporter_transport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpGrpcExporterTransport = exports.GrpcExporterTransport = exports.createEmptyMetadata = exports.createSslCredentials = exports.createInsecureCredentials = undefined;
  var version_1 = require_version();
  var DEFAULT_USER_AGENT = `OTel-OTLP-Exporter-JavaScript/${version_1.VERSION}`;
  function createUserAgent(userAgent) {
    if (userAgent) {
      return `${userAgent} ${DEFAULT_USER_AGENT}`;
    }
    return DEFAULT_USER_AGENT;
  }
  var GRPC_COMPRESSION_NONE = 0;
  var GRPC_COMPRESSION_GZIP = 2;
  function toGrpcCompression(compression) {
    return compression === "gzip" ? GRPC_COMPRESSION_GZIP : GRPC_COMPRESSION_NONE;
  }
  function createInsecureCredentials() {
    const {
      credentials
    } = require_src6();
    return credentials.createInsecure();
  }
  exports.createInsecureCredentials = createInsecureCredentials;
  function createSslCredentials(rootCert, privateKey, certChain) {
    const {
      credentials
    } = require_src6();
    return credentials.createSsl(rootCert, privateKey, certChain);
  }
  exports.createSslCredentials = createSslCredentials;
  function createEmptyMetadata() {
    const {
      Metadata
    } = require_src6();
    return new Metadata;
  }
  exports.createEmptyMetadata = createEmptyMetadata;

  class GrpcExporterTransport {
    _client;
    _metadata;
    _parameters;
    constructor(parameters) {
      this._parameters = parameters;
    }
    shutdown() {
      this._client?.close();
    }
    send(data, timeoutMillis) {
      const buffer = Buffer.from(data);
      if (this._client == null) {
        const {
          createServiceClientConstructor
        } = require_create_service_client_constructor();
        try {
          this._metadata = this._parameters.metadata();
        } catch (error) {
          return Promise.resolve({
            status: "failure",
            error
          });
        }
        const clientConstructor = createServiceClientConstructor(this._parameters.grpcPath, this._parameters.grpcName);
        try {
          this._client = new clientConstructor(this._parameters.address, this._parameters.credentials(), {
            "grpc.default_compression_algorithm": toGrpcCompression(this._parameters.compression),
            "grpc.primary_user_agent": createUserAgent(this._parameters.userAgent)
          });
        } catch (error) {
          return Promise.resolve({
            status: "failure",
            error
          });
        }
      }
      return new Promise((resolve) => {
        const deadline = Date.now() + timeoutMillis;
        if (this._metadata == null) {
          return resolve({
            error: new Error("metadata was null"),
            status: "failure"
          });
        }
        this._client.export(buffer, this._metadata, { deadline }, (err, response) => {
          if (err) {
            resolve({
              status: "failure",
              error: err
            });
          } else {
            resolve({
              data: response,
              status: "success"
            });
          }
        });
      });
    }
  }
  exports.GrpcExporterTransport = GrpcExporterTransport;
  function createOtlpGrpcExporterTransport(options) {
    return new GrpcExporterTransport(options);
  }
  exports.createOtlpGrpcExporterTransport = createOtlpGrpcExporterTransport;
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/configuration/otlp-grpc-configuration.js
var require_otlp_grpc_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getOtlpGrpcDefaultConfiguration = exports.mergeOtlpGrpcConfigurationWithDefaults = exports.validateAndNormalizeUrl = undefined;
  var otlp_exporter_base_1 = require_src3();
  var grpc_exporter_transport_1 = require_grpc_exporter_transport();
  var url_1 = __require("url");
  var api_1 = require_src();
  function validateAndNormalizeUrl(url) {
    url = url.trim();
    const hasProtocol = url.match(/^([\w]{1,8}):\/\//);
    if (!hasProtocol) {
      url = `https://${url}`;
    }
    const target = new url_1.URL(url);
    if (target.protocol === "unix:") {
      return url;
    }
    if (target.pathname && target.pathname !== "/") {
      api_1.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
    }
    if (target.protocol !== "" && !target.protocol?.match(/^(http)s?:$/)) {
      api_1.diag.warn("URL protocol should be http(s)://. Using http://.");
    }
    return target.host;
  }
  exports.validateAndNormalizeUrl = validateAndNormalizeUrl;
  function overrideMetadataEntriesIfNotPresent(metadata, additionalMetadata) {
    for (const [key, value] of Object.entries(additionalMetadata.getMap())) {
      if (metadata.get(key).length < 1) {
        metadata.set(key, value);
      }
    }
  }
  function mergeOtlpGrpcConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
    const rawUrl = userProvidedConfiguration.url ?? fallbackConfiguration.url ?? defaultConfiguration.url;
    return {
      ...(0, otlp_exporter_base_1.mergeOtlpSharedConfigurationWithDefaults)(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration),
      metadata: () => {
        const metadata = defaultConfiguration.metadata();
        overrideMetadataEntriesIfNotPresent(metadata, userProvidedConfiguration.metadata?.().clone() ?? (0, grpc_exporter_transport_1.createEmptyMetadata)());
        overrideMetadataEntriesIfNotPresent(metadata, fallbackConfiguration.metadata?.() ?? (0, grpc_exporter_transport_1.createEmptyMetadata)());
        return metadata;
      },
      url: validateAndNormalizeUrl(rawUrl),
      credentials: userProvidedConfiguration.credentials ?? fallbackConfiguration.credentials?.(rawUrl) ?? defaultConfiguration.credentials(rawUrl),
      userAgent: userProvidedConfiguration.userAgent
    };
  }
  exports.mergeOtlpGrpcConfigurationWithDefaults = mergeOtlpGrpcConfigurationWithDefaults;
  function getOtlpGrpcDefaultConfiguration() {
    return {
      ...(0, otlp_exporter_base_1.getSharedConfigurationDefaults)(),
      metadata: () => (0, grpc_exporter_transport_1.createEmptyMetadata)(),
      url: "http://localhost:4317",
      credentials: (url) => {
        if (url.startsWith("http://")) {
          return () => (0, grpc_exporter_transport_1.createInsecureCredentials)();
        } else {
          return () => (0, grpc_exporter_transport_1.createSslCredentials)();
        }
      }
    };
  }
  exports.getOtlpGrpcDefaultConfiguration = getOtlpGrpcDefaultConfiguration;
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/configuration/otlp-grpc-env-configuration.js
var require_otlp_grpc_env_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getOtlpGrpcConfigurationFromEnv = undefined;
  var core_1 = require_src2();
  var grpc_exporter_transport_1 = require_grpc_exporter_transport();
  var node_http_1 = require_index_node_http();
  var fs = __require("fs");
  var path = __require("path");
  var api_1 = require_src();
  function fallbackIfNullishOrBlank(signalSpecific, nonSignalSpecific) {
    if (signalSpecific != null && signalSpecific !== "") {
      return signalSpecific;
    }
    if (nonSignalSpecific != null && nonSignalSpecific !== "") {
      return nonSignalSpecific;
    }
    return;
  }
  function getMetadataFromEnv(signalIdentifier) {
    const signalSpecificRawHeaders = process.env[`OTEL_EXPORTER_OTLP_${signalIdentifier}_HEADERS`]?.trim();
    const nonSignalSpecificRawHeaders = process.env["OTEL_EXPORTER_OTLP_HEADERS"]?.trim();
    const signalSpecificHeaders = (0, core_1.parseKeyPairsIntoRecord)(signalSpecificRawHeaders);
    const nonSignalSpecificHeaders = (0, core_1.parseKeyPairsIntoRecord)(nonSignalSpecificRawHeaders);
    if (Object.keys(signalSpecificHeaders).length === 0 && Object.keys(nonSignalSpecificHeaders).length === 0) {
      return;
    }
    const mergeHeaders = Object.assign({}, nonSignalSpecificHeaders, signalSpecificHeaders);
    const metadata = (0, grpc_exporter_transport_1.createEmptyMetadata)();
    for (const [key, value] of Object.entries(mergeHeaders)) {
      metadata.set(key, value);
    }
    return metadata;
  }
  function getMetadataProviderFromEnv(signalIdentifier) {
    const metadata = getMetadataFromEnv(signalIdentifier);
    if (metadata == null) {
      return;
    }
    return () => metadata;
  }
  function getUrlFromEnv(signalIdentifier) {
    const specificEndpoint = process.env[`OTEL_EXPORTER_OTLP_${signalIdentifier}_ENDPOINT`]?.trim();
    const nonSpecificEndpoint = process.env[`OTEL_EXPORTER_OTLP_ENDPOINT`]?.trim();
    return fallbackIfNullishOrBlank(specificEndpoint, nonSpecificEndpoint);
  }
  function getInsecureSettingFromEnv(signalIdentifier) {
    const signalSpecificInsecureValue = process.env[`OTEL_EXPORTER_OTLP_${signalIdentifier}_INSECURE`]?.toLowerCase().trim();
    const nonSignalSpecificInsecureValue = process.env[`OTEL_EXPORTER_OTLP_INSECURE`]?.toLowerCase().trim();
    return fallbackIfNullishOrBlank(signalSpecificInsecureValue, nonSignalSpecificInsecureValue) === "true";
  }
  function readFileFromEnv(signalSpecificEnvVar, nonSignalSpecificEnvVar, warningMessage) {
    const signalSpecificPath = process.env[signalSpecificEnvVar]?.trim();
    const nonSignalSpecificPath = process.env[nonSignalSpecificEnvVar]?.trim();
    const filePath = fallbackIfNullishOrBlank(signalSpecificPath, nonSignalSpecificPath);
    if (filePath != null) {
      try {
        return fs.readFileSync(path.resolve(process.cwd(), filePath));
      } catch {
        api_1.diag.warn(warningMessage);
        return;
      }
    } else {
      return;
    }
  }
  function getClientCertificateFromEnv(signalIdentifier) {
    return readFileFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function getClientKeyFromEnv(signalIdentifier) {
    return readFileFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function getRootCertificateFromEnv(signalIdentifier) {
    return readFileFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function getCredentialsFromEnvIgnoreInsecure(signalIdentifier) {
    const clientKey = getClientKeyFromEnv(signalIdentifier);
    const clientCertificate = getClientCertificateFromEnv(signalIdentifier);
    const rootCertificate = getRootCertificateFromEnv(signalIdentifier);
    const clientChainIntact = clientKey != null && clientCertificate != null;
    if (rootCertificate != null && !clientChainIntact) {
      api_1.diag.warn("Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate");
      return (0, grpc_exporter_transport_1.createSslCredentials)(getRootCertificateFromEnv(signalIdentifier));
    }
    return (0, grpc_exporter_transport_1.createSslCredentials)(rootCertificate, clientKey, clientCertificate);
  }
  function getCredentialsFromEnv(signalIdentifier) {
    if (getInsecureSettingFromEnv(signalIdentifier)) {
      return (0, grpc_exporter_transport_1.createInsecureCredentials)();
    }
    return getCredentialsFromEnvIgnoreInsecure(signalIdentifier);
  }
  function getOtlpGrpcConfigurationFromEnv(signalIdentifier) {
    return {
      ...(0, node_http_1.getSharedConfigurationFromEnvironment)(signalIdentifier),
      metadata: getMetadataProviderFromEnv(signalIdentifier),
      url: getUrlFromEnv(signalIdentifier),
      credentials: (finalResolvedUrl) => {
        if (finalResolvedUrl.startsWith("http://")) {
          return () => {
            return (0, grpc_exporter_transport_1.createInsecureCredentials)();
          };
        } else if (finalResolvedUrl.startsWith("https://")) {
          return () => {
            return getCredentialsFromEnvIgnoreInsecure(signalIdentifier);
          };
        }
        return () => {
          return getCredentialsFromEnv(signalIdentifier);
        };
      }
    };
  }
  exports.getOtlpGrpcConfigurationFromEnv = getOtlpGrpcConfigurationFromEnv;
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/configuration/convert-legacy-otlp-grpc-options.js
var require_convert_legacy_otlp_grpc_options = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertLegacyOtlpGrpcOptions = undefined;
  var otlp_grpc_configuration_1 = require_otlp_grpc_configuration();
  var grpc_exporter_transport_1 = require_grpc_exporter_transport();
  var otlp_grpc_env_configuration_1 = require_otlp_grpc_env_configuration();
  function convertLegacyOtlpGrpcOptions(config, signalIdentifier) {
    const userProvidedCredentials = config.credentials;
    return (0, otlp_grpc_configuration_1.mergeOtlpGrpcConfigurationWithDefaults)({
      url: config.url,
      metadata: () => {
        return config.metadata ?? (0, grpc_exporter_transport_1.createEmptyMetadata)();
      },
      compression: config.compression,
      timeoutMillis: config.timeoutMillis,
      concurrencyLimit: config.concurrencyLimit,
      credentials: userProvidedCredentials != null ? () => userProvidedCredentials : undefined,
      userAgent: config.userAgent
    }, (0, otlp_grpc_env_configuration_1.getOtlpGrpcConfigurationFromEnv)(signalIdentifier), (0, otlp_grpc_configuration_1.getOtlpGrpcDefaultConfiguration)());
  }
  exports.convertLegacyOtlpGrpcOptions = convertLegacyOtlpGrpcOptions;
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/otlp-grpc-export-delegate.js
var require_otlp_grpc_export_delegate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpGrpcExportDelegate = undefined;
  var otlp_exporter_base_1 = require_src3();
  var grpc_exporter_transport_1 = require_grpc_exporter_transport();
  function createOtlpGrpcExportDelegate(options, serializer, grpcName, grpcPath) {
    return (0, otlp_exporter_base_1.createOtlpNetworkExportDelegate)(options, serializer, (0, grpc_exporter_transport_1.createOtlpGrpcExporterTransport)({
      address: options.url,
      compression: options.compression,
      credentials: options.credentials,
      metadata: options.metadata,
      userAgent: options.userAgent,
      grpcName,
      grpcPath
    }));
  }
  exports.createOtlpGrpcExportDelegate = createOtlpGrpcExportDelegate;
});

// node_modules/.bun/@opentelemetry+otlp-grpc-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-grpc-exporter-base/build/src/index.js
var require_src7 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpGrpcExportDelegate = exports.convertLegacyOtlpGrpcOptions = undefined;
  var convert_legacy_otlp_grpc_options_1 = require_convert_legacy_otlp_grpc_options();
  Object.defineProperty(exports, "convertLegacyOtlpGrpcOptions", { enumerable: true, get: function() {
    return convert_legacy_otlp_grpc_options_1.convertLegacyOtlpGrpcOptions;
  } });
  var otlp_grpc_export_delegate_1 = require_otlp_grpc_export_delegate();
  Object.defineProperty(exports, "createOtlpGrpcExportDelegate", { enumerable: true, get: function() {
    return otlp_grpc_export_delegate_1.createOtlpGrpcExportDelegate;
  } });
});

export { require_src7 as require_src };
