// @bun
import {
  require_extend,
  require_json_bigint
} from "./chunk-73rpbt04.js";
import {
  require_base64_js
} from "./chunk-760252na.js";
import {
  require_ecdsa_sig_formatter,
  require_jws
} from "./chunk-nq0fxyxh.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/package.json
var require_package = __commonJS((exports, module) => {
  module.exports = {
    name: "gaxios",
    version: "7.1.4",
    description: "A simple common HTTP client specifically for Google APIs and services.",
    main: "build/cjs/src/index.js",
    types: "build/cjs/src/index.d.ts",
    files: [
      "build/"
    ],
    exports: {
      ".": {
        import: {
          types: "./build/esm/src/index.d.ts",
          default: "./build/esm/src/index.js"
        },
        require: {
          types: "./build/cjs/src/index.d.ts",
          default: "./build/cjs/src/index.js"
        }
      }
    },
    scripts: {
      lint: "gts check --no-inline-config",
      test: "c8 mocha build/esm/test",
      "presystem-test": "npm run compile",
      "system-test": "mocha build/esm/system-test --timeout 80000",
      compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs",
      fix: "gts fix",
      prepare: "npm run compile",
      pretest: "npm run compile",
      webpack: "webpack",
      "prebrowser-test": "npm run compile",
      "browser-test": "node build/browser-test/browser-test-runner.js",
      docs: "jsdoc -c .jsdoc.js",
      "docs-test": "linkinator docs",
      "predocs-test": "npm run docs",
      "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
      prelint: "cd samples; npm link ../; npm install",
      clean: "gts clean"
    },
    repository: {
      type: "git",
      directory: "packages/gaxios",
      url: "https://github.com/googleapis/google-cloud-node-core.git"
    },
    keywords: [
      "google"
    ],
    engines: {
      node: ">=18"
    },
    author: "Google, LLC",
    license: "Apache-2.0",
    devDependencies: {
      "@babel/plugin-proposal-private-methods": "^7.18.6",
      "@types/cors": "^2.8.6",
      "@types/express": "^5.0.0",
      "@types/extend": "^3.0.1",
      "@types/mocha": "^10.0.10",
      "@types/multiparty": "4.2.1",
      "@types/mv": "^2.1.0",
      "@types/ncp": "^2.0.8",
      "@types/node": "^22.13.1",
      "@types/sinon": "^17.0.3",
      "@types/tmp": "^0.2.6",
      assert: "^2.0.0",
      browserify: "^17.0.0",
      c8: "^10.1.3",
      cors: "^2.8.5",
      express: "^5.0.0",
      gts: "^6.0.2",
      "is-docker": "^3.0.0",
      jsdoc: "^4.0.4",
      "jsdoc-fresh": "^5.0.0",
      "jsdoc-region-tag": "^4.0.0",
      karma: "^6.0.0",
      "karma-chrome-launcher": "^3.0.0",
      "karma-coverage": "^2.0.0",
      "karma-firefox-launcher": "^2.0.0",
      "karma-mocha": "^2.0.0",
      "karma-remap-coverage": "^0.1.5",
      "karma-sourcemap-loader": "^0.4.0",
      "karma-webpack": "^5.0.1",
      linkinator: "^6.1.2",
      mocha: "^11.1.0",
      multiparty: "^4.2.1",
      mv: "^2.1.1",
      ncp: "^2.0.0",
      nock: "^14.0.5",
      "null-loader": "^4.0.1",
      "pack-n-play": "^4.0.0",
      puppeteer: "^24.0.0",
      sinon: "^21.0.0",
      "stream-browserify": "^3.0.0",
      tmp: "0.2.5",
      "ts-loader": "^9.5.2",
      typescript: "5.8.3",
      webpack: "^5.97.1",
      "webpack-cli": "^6.0.1"
    },
    dependencies: {
      extend: "^3.0.2",
      "https-proxy-agent": "^7.0.1",
      "node-fetch": "^3.3.2"
    },
    homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios"
  };
});

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/util.cjs
var require_util = __commonJS((exports, module) => {
  var pkg = require_package();
  module.exports = { pkg };
});

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/common.js
var require_common = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GaxiosError = exports.GAXIOS_ERROR_SYMBOL = undefined;
  exports.defaultErrorRedactor = defaultErrorRedactor;
  var extend_1 = __importDefault(require_extend());
  var util_cjs_1 = __importDefault(require_util());
  var pkg = util_cjs_1.default.pkg;
  exports.GAXIOS_ERROR_SYMBOL = Symbol.for(`${pkg.name}-gaxios-error`);

  class GaxiosError extends Error {
    config;
    response;
    code;
    status;
    error;
    [exports.GAXIOS_ERROR_SYMBOL] = pkg.version;
    static [Symbol.hasInstance](instance) {
      if (instance && typeof instance === "object" && exports.GAXIOS_ERROR_SYMBOL in instance && instance[exports.GAXIOS_ERROR_SYMBOL] === pkg.version) {
        return true;
      }
      return Function.prototype[Symbol.hasInstance].call(GaxiosError, instance);
    }
    constructor(message, config, response, cause) {
      super(message, { cause });
      this.config = config;
      this.response = response;
      this.error = cause instanceof Error ? cause : undefined;
      this.config = (0, extend_1.default)(true, {}, config);
      if (this.response) {
        this.response.config = (0, extend_1.default)(true, {}, this.response.config);
      }
      if (this.response) {
        try {
          this.response.data = translateData(this.config.responseType, this.response?.bodyUsed ? this.response?.data : undefined);
        } catch {}
        this.status = this.response.status;
      }
      if (cause instanceof DOMException) {
        this.code = cause.name;
      } else if (cause && typeof cause === "object" && "code" in cause && (typeof cause.code === "string" || typeof cause.code === "number")) {
        this.code = cause.code;
      }
    }
    static extractAPIErrorFromResponse(res, defaultErrorMessage = "The request failed") {
      let message = defaultErrorMessage;
      if (typeof res.data === "string") {
        message = res.data;
      }
      if (res.data && typeof res.data === "object" && "error" in res.data && res.data.error && !res.ok) {
        if (typeof res.data.error === "string") {
          return {
            message: res.data.error,
            code: res.status,
            status: res.statusText
          };
        }
        if (typeof res.data.error === "object") {
          message = "message" in res.data.error && typeof res.data.error.message === "string" ? res.data.error.message : message;
          const status = "status" in res.data.error && typeof res.data.error.status === "string" ? res.data.error.status : res.statusText;
          const code = "code" in res.data.error && typeof res.data.error.code === "number" ? res.data.error.code : res.status;
          if ("errors" in res.data.error && Array.isArray(res.data.error.errors)) {
            const errorMessages = [];
            for (const e of res.data.error.errors) {
              if (typeof e === "object" && "message" in e && typeof e.message === "string") {
                errorMessages.push(e.message);
              }
            }
            return Object.assign({
              message: errorMessages.join(`
`) || message,
              code,
              status
            }, res.data.error);
          }
          return Object.assign({
            message,
            code,
            status
          }, res.data.error);
        }
      }
      return {
        message,
        code: res.status,
        status: res.statusText
      };
    }
  }
  exports.GaxiosError = GaxiosError;
  function translateData(responseType, data) {
    switch (responseType) {
      case "stream":
        return data;
      case "json":
        return JSON.parse(JSON.stringify(data));
      case "arraybuffer":
        return JSON.parse(Buffer.from(data).toString("utf8"));
      case "blob":
        return JSON.parse(data.text());
      default:
        return data;
    }
  }
  function defaultErrorRedactor(data) {
    const REDACT = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
    function redactHeaders(headers) {
      if (!headers)
        return;
      headers.forEach((_, key) => {
        if (/^authentication$/i.test(key) || /^authorization$/i.test(key) || /secret/i.test(key))
          headers.set(key, REDACT);
      });
    }
    function redactString(obj, key) {
      if (typeof obj === "object" && obj !== null && typeof obj[key] === "string") {
        const text = obj[key];
        if (/grant_type=/i.test(text) || /assertion=/i.test(text) || /secret/i.test(text)) {
          obj[key] = REDACT;
        }
      }
    }
    function redactObject(obj) {
      if (!obj || typeof obj !== "object") {
        return;
      } else if (obj instanceof FormData || obj instanceof URLSearchParams || "forEach" in obj && "set" in obj) {
        obj.forEach((_, key) => {
          if (["grant_type", "assertion"].includes(key) || /secret/.test(key)) {
            obj.set(key, REDACT);
          }
        });
      } else {
        if ("grant_type" in obj) {
          obj["grant_type"] = REDACT;
        }
        if ("assertion" in obj) {
          obj["assertion"] = REDACT;
        }
        if ("client_secret" in obj) {
          obj["client_secret"] = REDACT;
        }
      }
    }
    if (data.config) {
      redactHeaders(data.config.headers);
      redactString(data.config, "data");
      redactObject(data.config.data);
      redactString(data.config, "body");
      redactObject(data.config.body);
      if (data.config.url.searchParams.has("token")) {
        data.config.url.searchParams.set("token", REDACT);
      }
      if (data.config.url.searchParams.has("client_secret")) {
        data.config.url.searchParams.set("client_secret", REDACT);
      }
    }
    if (data.response) {
      defaultErrorRedactor({ config: data.response.config });
      redactHeaders(data.response.headers);
      if (data.response.bodyUsed) {
        redactString(data.response, "data");
        redactObject(data.response.data);
      }
    }
    return data;
  }
});

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/retry.js
var require_retry = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getRetryConfig = getRetryConfig;
  async function getRetryConfig(err) {
    let config = getConfig(err);
    if (!err || !err.config || !config && !err.config.retry) {
      return { shouldRetry: false };
    }
    config = config || {};
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    config.retry = config.retry === undefined || config.retry === null ? 3 : config.retry;
    config.httpMethodsToRetry = config.httpMethodsToRetry || [
      "GET",
      "HEAD",
      "PUT",
      "OPTIONS",
      "DELETE"
    ];
    config.noResponseRetries = config.noResponseRetries === undefined || config.noResponseRetries === null ? 2 : config.noResponseRetries;
    config.retryDelayMultiplier = config.retryDelayMultiplier ? config.retryDelayMultiplier : 2;
    config.timeOfFirstRequest = config.timeOfFirstRequest ? config.timeOfFirstRequest : Date.now();
    config.totalTimeout = config.totalTimeout ? config.totalTimeout : Number.MAX_SAFE_INTEGER;
    config.maxRetryDelay = config.maxRetryDelay ? config.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    const retryRanges = [
      [100, 199],
      [408, 408],
      [429, 429],
      [500, 599]
    ];
    config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
    err.config.retryConfig = config;
    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
    if (!await shouldRetryFn(err)) {
      return { shouldRetry: false, config: err.config };
    }
    const delay = getNextRetryDelay(config);
    err.config.retryConfig.currentRetryAttempt += 1;
    const backoff = config.retryBackoff ? config.retryBackoff(err, delay) : new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
    if (config.onRetryAttempt) {
      await config.onRetryAttempt(err);
    }
    await backoff;
    return { shouldRetry: true, config: err.config };
  }
  function shouldRetryRequest(err) {
    const config = getConfig(err);
    if (err.config.signal?.aborted && err.code !== "TimeoutError" || err.code === "AbortError") {
      return false;
    }
    if (!config || config.retry === 0) {
      return false;
    }
    if (!err.response && (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
      return false;
    }
    if (!config.httpMethodsToRetry || !config.httpMethodsToRetry.includes(err.config.method?.toUpperCase() || "GET")) {
      return false;
    }
    if (err.response && err.response.status) {
      let isInRange = false;
      for (const [min, max] of config.statusCodesToRetry) {
        const status = err.response.status;
        if (status >= min && status <= max) {
          isInRange = true;
          break;
        }
      }
      if (!isInRange) {
        return false;
      }
    }
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    if (config.currentRetryAttempt >= config.retry) {
      return false;
    }
    return true;
  }
  function getConfig(err) {
    if (err && err.config && err.config.retryConfig) {
      return err.config.retryConfig;
    }
    return;
  }
  function getNextRetryDelay(config) {
    const retryDelay = config.currentRetryAttempt ? 0 : config.retryDelay ?? 100;
    const calculatedDelay = retryDelay + (Math.pow(config.retryDelayMultiplier, config.currentRetryAttempt) - 1) / 2 * 1000;
    const maxAllowableDelay = config.totalTimeout - (Date.now() - config.timeOfFirstRequest);
    return Math.min(calculatedDelay, maxAllowableDelay, config.maxRetryDelay);
  }
});

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/interceptor.js
var require_interceptor = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GaxiosInterceptorManager = undefined;

  class GaxiosInterceptorManager extends Set {
  }
  exports.GaxiosInterceptorManager = GaxiosInterceptorManager;
});

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/gaxios.js
var require_gaxios = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  var _a;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Gaxios = undefined;
  var extend_1 = __importDefault(require_extend());
  var https_1 = __require("https");
  var common_js_1 = require_common();
  var retry_js_1 = require_retry();
  var stream_1 = __require("stream");
  var interceptor_js_1 = require_interceptor();
  var randomUUID = async () => globalThis.crypto?.randomUUID() || (await import("crypto")).randomUUID();
  var HTTP_STATUS_NO_CONTENT = 204;

  class Gaxios {
    agentCache = new Map;
    defaults;
    interceptors;
    constructor(defaults) {
      this.defaults = defaults || {};
      this.interceptors = {
        request: new interceptor_js_1.GaxiosInterceptorManager,
        response: new interceptor_js_1.GaxiosInterceptorManager
      };
    }
    fetch(...args) {
      const input = args[0];
      const init = args[1];
      let url = undefined;
      const headers = new Headers;
      if (typeof input === "string") {
        url = new URL(input);
      } else if (input instanceof URL) {
        url = input;
      } else if (input && input.url) {
        url = new URL(input.url);
      }
      if (input && typeof input === "object" && "headers" in input) {
        _a.mergeHeaders(headers, input.headers);
      }
      if (init) {
        _a.mergeHeaders(headers, new Headers(init.headers));
      }
      if (typeof input === "object" && !(input instanceof URL)) {
        return this.request({ ...init, ...input, headers, url });
      } else {
        return this.request({ ...init, headers, url });
      }
    }
    async request(opts = {}) {
      let prepared = await this.#prepareRequest(opts);
      prepared = await this.#applyRequestInterceptors(prepared);
      return this.#applyResponseInterceptors(this._request(prepared));
    }
    async _defaultAdapter(config) {
      const fetchImpl = config.fetchImplementation || this.defaults.fetchImplementation || await _a.#getFetch();
      const preparedOpts = { ...config };
      delete preparedOpts.data;
      const res = await fetchImpl(config.url, preparedOpts);
      const data = await this.getResponseData(config, res);
      if (!Object.getOwnPropertyDescriptor(res, "data")?.configurable) {
        Object.defineProperties(res, {
          data: {
            configurable: true,
            writable: true,
            enumerable: true,
            value: data
          }
        });
      }
      return Object.assign(res, { config, data });
    }
    async _request(opts) {
      try {
        let translatedResponse;
        if (opts.adapter) {
          translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
        } else {
          translatedResponse = await this._defaultAdapter(opts);
        }
        if (!opts.validateStatus(translatedResponse.status)) {
          if (opts.responseType === "stream") {
            const response = [];
            for await (const chunk of translatedResponse.data) {
              response.push(chunk);
            }
            translatedResponse.data = response.toString();
          }
          const errorInfo = common_js_1.GaxiosError.extractAPIErrorFromResponse(translatedResponse, `Request failed with status code ${translatedResponse.status}`);
          throw new common_js_1.GaxiosError(errorInfo?.message, opts, translatedResponse, errorInfo);
        }
        return translatedResponse;
      } catch (e) {
        let err;
        if (e instanceof common_js_1.GaxiosError) {
          err = e;
        } else if (e instanceof Error) {
          err = new common_js_1.GaxiosError(e.message, opts, undefined, e);
        } else {
          err = new common_js_1.GaxiosError("Unexpected Gaxios Error", opts, undefined, e);
        }
        const { shouldRetry, config } = await (0, retry_js_1.getRetryConfig)(err);
        if (shouldRetry && config) {
          err.config.retryConfig.currentRetryAttempt = config.retryConfig.currentRetryAttempt;
          opts.retryConfig = err.config?.retryConfig;
          this.#appendTimeoutToSignal(opts);
          return this._request(opts);
        }
        if (opts.errorRedactor) {
          opts.errorRedactor(err);
        }
        throw err;
      }
    }
    async getResponseData(opts, res) {
      if (res.status === HTTP_STATUS_NO_CONTENT) {
        return "";
      }
      if (opts.maxContentLength && res.headers.has("content-length") && opts.maxContentLength < Number.parseInt(res.headers?.get("content-length") || "")) {
        throw new common_js_1.GaxiosError("Response's `Content-Length` is over the limit.", opts, Object.assign(res, { config: opts }));
      }
      switch (opts.responseType) {
        case "stream":
          return res.body;
        case "json": {
          const data = await res.text();
          try {
            return JSON.parse(data);
          } catch {
            return data;
          }
        }
        case "arraybuffer":
          return res.arrayBuffer();
        case "blob":
          return res.blob();
        case "text":
          return res.text();
        default:
          return this.getResponseDataFromContentType(res);
      }
    }
    #urlMayUseProxy(url, noProxy = []) {
      const candidate = new URL(url);
      const noProxyList = [...noProxy];
      const noProxyEnvList = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(",") || [];
      for (const rule of noProxyEnvList) {
        noProxyList.push(rule.trim());
      }
      for (const rule of noProxyList) {
        if (rule instanceof RegExp) {
          if (rule.test(candidate.toString())) {
            return false;
          }
        } else if (rule instanceof URL) {
          if (rule.origin === candidate.origin) {
            return false;
          }
        } else if (rule.startsWith("*.") || rule.startsWith(".")) {
          const cleanedRule = rule.replace(/^\*\./, ".");
          if (candidate.hostname.endsWith(cleanedRule)) {
            return false;
          }
        } else if (rule === candidate.origin || rule === candidate.hostname || rule === candidate.href) {
          return false;
        }
      }
      return true;
    }
    async#applyRequestInterceptors(options) {
      let promiseChain = Promise.resolve(options);
      for (const interceptor of this.interceptors.request.values()) {
        if (interceptor) {
          promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
        }
      }
      return promiseChain;
    }
    async#applyResponseInterceptors(response) {
      let promiseChain = Promise.resolve(response);
      for (const interceptor of this.interceptors.response.values()) {
        if (interceptor) {
          promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
        }
      }
      return promiseChain;
    }
    async#prepareRequest(options) {
      const preparedHeaders = new Headers(this.defaults.headers);
      _a.mergeHeaders(preparedHeaders, options.headers);
      const opts = (0, extend_1.default)(true, {}, this.defaults, options);
      if (!opts.url) {
        throw new Error("URL is required.");
      }
      if (opts.baseURL) {
        opts.url = new URL(opts.url, opts.baseURL);
      }
      opts.url = new URL(opts.url);
      if (opts.params) {
        if (opts.paramsSerializer) {
          let additionalQueryParams = opts.paramsSerializer(opts.params);
          if (additionalQueryParams.startsWith("?")) {
            additionalQueryParams = additionalQueryParams.slice(1);
          }
          const prefix = opts.url.toString().includes("?") ? "&" : "?";
          opts.url = opts.url + prefix + additionalQueryParams;
        } else {
          const url = opts.url instanceof URL ? opts.url : new URL(opts.url);
          for (const [key, value] of new URLSearchParams(opts.params)) {
            url.searchParams.append(key, value);
          }
          opts.url = url;
        }
      }
      if (typeof options.maxContentLength === "number") {
        opts.size = options.maxContentLength;
      }
      if (typeof options.maxRedirects === "number") {
        opts.follow = options.maxRedirects;
      }
      const shouldDirectlyPassData = typeof opts.data === "string" || opts.data instanceof ArrayBuffer || opts.data instanceof Blob || globalThis.File && opts.data instanceof File || opts.data instanceof FormData || opts.data instanceof stream_1.Readable || opts.data instanceof ReadableStream || opts.data instanceof String || opts.data instanceof URLSearchParams || ArrayBuffer.isView(opts.data) || ["Blob", "File", "FormData"].includes(opts.data?.constructor?.name || "");
      if (opts.multipart?.length) {
        const boundary = await randomUUID();
        preparedHeaders.set("content-type", `multipart/related; boundary=${boundary}`);
        opts.body = stream_1.Readable.from(this.getMultipartRequest(opts.multipart, boundary));
      } else if (shouldDirectlyPassData) {
        opts.body = opts.data;
      } else if (typeof opts.data === "object") {
        if (preparedHeaders.get("Content-Type") === "application/x-www-form-urlencoded") {
          opts.body = opts.paramsSerializer ? opts.paramsSerializer(opts.data) : new URLSearchParams(opts.data);
        } else {
          if (!preparedHeaders.has("content-type")) {
            preparedHeaders.set("content-type", "application/json");
          }
          opts.body = JSON.stringify(opts.data);
        }
      } else if (opts.data) {
        opts.body = opts.data;
      }
      opts.validateStatus = opts.validateStatus || this.validateStatus;
      opts.responseType = opts.responseType || "unknown";
      if (!preparedHeaders.has("accept") && opts.responseType === "json") {
        preparedHeaders.set("accept", "application/json");
      }
      const proxy = opts.proxy || process?.env?.HTTPS_PROXY || process?.env?.https_proxy || process?.env?.HTTP_PROXY || process?.env?.http_proxy;
      if (opts.agent) {} else if (proxy && this.#urlMayUseProxy(opts.url, opts.noProxy)) {
        const HttpsProxyAgent = await _a.#getProxyAgent();
        if (this.agentCache.has(proxy)) {
          opts.agent = this.agentCache.get(proxy);
        } else {
          opts.agent = new HttpsProxyAgent(proxy, {
            cert: opts.cert,
            key: opts.key
          });
          this.agentCache.set(proxy, opts.agent);
        }
      } else if (opts.cert && opts.key) {
        if (this.agentCache.has(opts.key)) {
          opts.agent = this.agentCache.get(opts.key);
        } else {
          opts.agent = new https_1.Agent({
            cert: opts.cert,
            key: opts.key
          });
          this.agentCache.set(opts.key, opts.agent);
        }
      }
      if (typeof opts.errorRedactor !== "function" && opts.errorRedactor !== false) {
        opts.errorRedactor = common_js_1.defaultErrorRedactor;
      }
      if (opts.body && !("duplex" in opts)) {
        opts.duplex = "half";
      }
      this.#appendTimeoutToSignal(opts);
      return Object.assign(opts, {
        headers: preparedHeaders,
        url: opts.url instanceof URL ? opts.url : new URL(opts.url)
      });
    }
    #appendTimeoutToSignal(opts) {
      if (opts.timeout) {
        const timeoutSignal = AbortSignal.timeout(opts.timeout);
        if (opts.signal && !opts.signal.aborted) {
          opts.signal = AbortSignal.any([opts.signal, timeoutSignal]);
        } else {
          opts.signal = timeoutSignal;
        }
      }
    }
    validateStatus(status) {
      return status >= 200 && status < 300;
    }
    async getResponseDataFromContentType(response) {
      let contentType = response.headers.get("Content-Type");
      if (contentType === null) {
        return response.text();
      }
      contentType = contentType.toLowerCase();
      if (contentType.includes("application/json")) {
        let data = await response.text();
        try {
          data = JSON.parse(data);
        } catch {}
        return data;
      } else if (contentType.match(/^text\//)) {
        return response.text();
      } else {
        return response.blob();
      }
    }
    async* getMultipartRequest(multipartOptions, boundary) {
      const finale = `--${boundary}--`;
      for (const currentPart of multipartOptions) {
        const partContentType = currentPart.headers.get("Content-Type") || "application/octet-stream";
        const preamble = `--${boundary}\r
Content-Type: ${partContentType}\r
\r
`;
        yield preamble;
        if (typeof currentPart.content === "string") {
          yield currentPart.content;
        } else {
          yield* currentPart.content;
        }
        yield `\r
`;
      }
      yield finale;
    }
    static #proxyAgent;
    static #fetch;
    static async#getProxyAgent() {
      this.#proxyAgent ||= (await import("./chunk-0rpb2bdp.js").then((m)=>__toESM(m.default))).HttpsProxyAgent;
      return this.#proxyAgent;
    }
    static async#getFetch() {
      const hasWindow = typeof window !== "undefined" && !!window;
      this.#fetch ||= hasWindow ? window.fetch : (await import("node-fetch")).default;
      return this.#fetch;
    }
    static mergeHeaders(base, ...append) {
      base = base instanceof Headers ? base : new Headers(base);
      for (const headers of append) {
        const add = headers instanceof Headers ? headers : new Headers(headers);
        add.forEach((value, key) => {
          key === "set-cookie" ? base.append(key, value) : base.set(key, value);
        });
      }
      return base;
    }
  }
  exports.Gaxios = Gaxios;
  _a = Gaxios;
});

// node_modules/.bun/gaxios@7.1.4/node_modules/gaxios/build/cjs/src/index.js
var require_src = __commonJS((exports) => {
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
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.instance = exports.Gaxios = exports.GaxiosError = undefined;
  exports.request = request;
  var gaxios_js_1 = require_gaxios();
  Object.defineProperty(exports, "Gaxios", { enumerable: true, get: function() {
    return gaxios_js_1.Gaxios;
  } });
  var common_js_1 = require_common();
  Object.defineProperty(exports, "GaxiosError", { enumerable: true, get: function() {
    return common_js_1.GaxiosError;
  } });
  __exportStar(require_interceptor(), exports);
  exports.instance = new gaxios_js_1.Gaxios;
  async function request(opts) {
    return exports.instance.request(opts);
  }
});

// node_modules/.bun/gcp-metadata@8.1.2/node_modules/gcp-metadata/build/src/gcp-residency.js
var require_gcp_residency = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GCE_LINUX_BIOS_PATHS = undefined;
  exports.isGoogleCloudServerless = isGoogleCloudServerless;
  exports.isGoogleComputeEngineLinux = isGoogleComputeEngineLinux;
  exports.isGoogleComputeEngineMACAddress = isGoogleComputeEngineMACAddress;
  exports.isGoogleComputeEngine = isGoogleComputeEngine;
  exports.detectGCPResidency = detectGCPResidency;
  var fs_1 = __require("fs");
  var os_1 = __require("os");
  exports.GCE_LINUX_BIOS_PATHS = {
    BIOS_DATE: "/sys/class/dmi/id/bios_date",
    BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
  };
  var GCE_MAC_ADDRESS_REGEX = /^42:01/;
  function isGoogleCloudServerless() {
    const isGFEnvironment = process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE;
    return !!isGFEnvironment;
  }
  function isGoogleComputeEngineLinux() {
    if ((0, os_1.platform)() !== "linux")
      return false;
    try {
      (0, fs_1.statSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
      const biosVendor = (0, fs_1.readFileSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
      return /Google/.test(biosVendor);
    } catch {
      return false;
    }
  }
  function isGoogleComputeEngineMACAddress() {
    const interfaces = (0, os_1.networkInterfaces)();
    for (const item of Object.values(interfaces)) {
      if (!item)
        continue;
      for (const { mac } of item) {
        if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
          return true;
        }
      }
    }
    return false;
  }
  function isGoogleComputeEngine() {
    return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
  }
  function detectGCPResidency() {
    return isGoogleCloudServerless() || isGoogleComputeEngine();
  }
});

// node_modules/.bun/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/colours.js
var require_colours = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Colours = undefined;

  class Colours {
    static isEnabled(stream) {
      return stream && stream.isTTY && (typeof stream.getColorDepth === "function" ? stream.getColorDepth() > 2 : true);
    }
    static refresh() {
      Colours.enabled = Colours.isEnabled(process === null || process === undefined ? undefined : process.stderr);
      if (!this.enabled) {
        Colours.reset = "";
        Colours.bright = "";
        Colours.dim = "";
        Colours.red = "";
        Colours.green = "";
        Colours.yellow = "";
        Colours.blue = "";
        Colours.magenta = "";
        Colours.cyan = "";
        Colours.white = "";
        Colours.grey = "";
      } else {
        Colours.reset = "\x1B[0m";
        Colours.bright = "\x1B[1m";
        Colours.dim = "\x1B[2m";
        Colours.red = "\x1B[31m";
        Colours.green = "\x1B[32m";
        Colours.yellow = "\x1B[33m";
        Colours.blue = "\x1B[34m";
        Colours.magenta = "\x1B[35m";
        Colours.cyan = "\x1B[36m";
        Colours.white = "\x1B[37m";
        Colours.grey = "\x1B[90m";
      }
    }
  }
  exports.Colours = Colours;
  Colours.enabled = false;
  Colours.reset = "";
  Colours.bright = "";
  Colours.dim = "";
  Colours.red = "";
  Colours.green = "";
  Colours.yellow = "";
  Colours.blue = "";
  Colours.magenta = "";
  Colours.cyan = "";
  Colours.white = "";
  Colours.grey = "";
  Colours.refresh();
});

// node_modules/.bun/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/logging-utils.js
var require_logging_utils = __commonJS((exports) => {
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
  var __importStar = exports && exports.__importStar || function() {
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    return function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.env = exports.DebugLogBackendBase = exports.placeholder = exports.AdhocDebugLogger = exports.LogSeverity = undefined;
  exports.getNodeBackend = getNodeBackend;
  exports.getDebugBackend = getDebugBackend;
  exports.getStructuredBackend = getStructuredBackend;
  exports.setBackend = setBackend;
  exports.log = log;
  var events_1 = __require("events");
  var process2 = __importStar(__require("process"));
  var util = __importStar(__require("util"));
  var colours_1 = require_colours();
  var LogSeverity;
  (function(LogSeverity2) {
    LogSeverity2["DEFAULT"] = "DEFAULT";
    LogSeverity2["DEBUG"] = "DEBUG";
    LogSeverity2["INFO"] = "INFO";
    LogSeverity2["WARNING"] = "WARNING";
    LogSeverity2["ERROR"] = "ERROR";
  })(LogSeverity || (exports.LogSeverity = LogSeverity = {}));

  class AdhocDebugLogger extends events_1.EventEmitter {
    constructor(namespace, upstream) {
      super();
      this.namespace = namespace;
      this.upstream = upstream;
      this.func = Object.assign(this.invoke.bind(this), {
        instance: this,
        on: (event, listener) => this.on(event, listener)
      });
      this.func.debug = (...args) => this.invokeSeverity(LogSeverity.DEBUG, ...args);
      this.func.info = (...args) => this.invokeSeverity(LogSeverity.INFO, ...args);
      this.func.warn = (...args) => this.invokeSeverity(LogSeverity.WARNING, ...args);
      this.func.error = (...args) => this.invokeSeverity(LogSeverity.ERROR, ...args);
      this.func.sublog = (namespace2) => log(namespace2, this.func);
    }
    invoke(fields, ...args) {
      if (this.upstream) {
        try {
          this.upstream(fields, ...args);
        } catch (e) {}
      }
      try {
        this.emit("log", fields, args);
      } catch (e) {}
    }
    invokeSeverity(severity, ...args) {
      this.invoke({ severity }, ...args);
    }
  }
  exports.AdhocDebugLogger = AdhocDebugLogger;
  exports.placeholder = new AdhocDebugLogger("", () => {}).func;

  class DebugLogBackendBase {
    constructor() {
      var _a;
      this.cached = new Map;
      this.filters = [];
      this.filtersSet = false;
      let nodeFlag = (_a = process2.env[exports.env.nodeEnables]) !== null && _a !== undefined ? _a : "*";
      if (nodeFlag === "all") {
        nodeFlag = "*";
      }
      this.filters = nodeFlag.split(",");
    }
    log(namespace, fields, ...args) {
      try {
        if (!this.filtersSet) {
          this.setFilters();
          this.filtersSet = true;
        }
        let logger = this.cached.get(namespace);
        if (!logger) {
          logger = this.makeLogger(namespace);
          this.cached.set(namespace, logger);
        }
        logger(fields, ...args);
      } catch (e) {
        console.error(e);
      }
    }
  }
  exports.DebugLogBackendBase = DebugLogBackendBase;

  class NodeBackend extends DebugLogBackendBase {
    constructor() {
      super(...arguments);
      this.enabledRegexp = /.*/g;
    }
    isEnabled(namespace) {
      return this.enabledRegexp.test(namespace);
    }
    makeLogger(namespace) {
      if (!this.enabledRegexp.test(namespace)) {
        return () => {};
      }
      return (fields, ...args) => {
        var _a;
        const nscolour = `${colours_1.Colours.green}${namespace}${colours_1.Colours.reset}`;
        const pid = `${colours_1.Colours.yellow}${process2.pid}${colours_1.Colours.reset}`;
        let level;
        switch (fields.severity) {
          case LogSeverity.ERROR:
            level = `${colours_1.Colours.red}${fields.severity}${colours_1.Colours.reset}`;
            break;
          case LogSeverity.INFO:
            level = `${colours_1.Colours.magenta}${fields.severity}${colours_1.Colours.reset}`;
            break;
          case LogSeverity.WARNING:
            level = `${colours_1.Colours.yellow}${fields.severity}${colours_1.Colours.reset}`;
            break;
          default:
            level = (_a = fields.severity) !== null && _a !== undefined ? _a : LogSeverity.DEFAULT;
            break;
        }
        const msg = util.formatWithOptions({ colors: colours_1.Colours.enabled }, ...args);
        const filteredFields = Object.assign({}, fields);
        delete filteredFields.severity;
        const fieldsJson = Object.getOwnPropertyNames(filteredFields).length ? JSON.stringify(filteredFields) : "";
        const fieldsColour = fieldsJson ? `${colours_1.Colours.grey}${fieldsJson}${colours_1.Colours.reset}` : "";
        console.error("%s [%s|%s] %s%s", pid, nscolour, level, msg, fieldsJson ? ` ${fieldsColour}` : "");
      };
    }
    setFilters() {
      const totalFilters = this.filters.join(",");
      const regexp = totalFilters.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
      this.enabledRegexp = new RegExp(`^${regexp}$`, "i");
    }
  }
  function getNodeBackend() {
    return new NodeBackend;
  }

  class DebugBackend extends DebugLogBackendBase {
    constructor(pkg) {
      super();
      this.debugPkg = pkg;
    }
    makeLogger(namespace) {
      const debugLogger = this.debugPkg(namespace);
      return (fields, ...args) => {
        debugLogger(args[0], ...args.slice(1));
      };
    }
    setFilters() {
      var _a;
      const existingFilters = (_a = process2.env["NODE_DEBUG"]) !== null && _a !== undefined ? _a : "";
      process2.env["NODE_DEBUG"] = `${existingFilters}${existingFilters ? "," : ""}${this.filters.join(",")}`;
    }
  }
  function getDebugBackend(debugPkg) {
    return new DebugBackend(debugPkg);
  }

  class StructuredBackend extends DebugLogBackendBase {
    constructor(upstream) {
      var _a;
      super();
      this.upstream = (_a = upstream) !== null && _a !== undefined ? _a : undefined;
    }
    makeLogger(namespace) {
      var _a;
      const debugLogger = (_a = this.upstream) === null || _a === undefined ? undefined : _a.makeLogger(namespace);
      return (fields, ...args) => {
        var _a2;
        const severity = (_a2 = fields.severity) !== null && _a2 !== undefined ? _a2 : LogSeverity.INFO;
        const json = Object.assign({
          severity,
          message: util.format(...args)
        }, fields);
        const jsonString = JSON.stringify(json);
        if (debugLogger) {
          debugLogger(fields, jsonString);
        } else {
          console.log("%s", jsonString);
        }
      };
    }
    setFilters() {
      var _a;
      (_a = this.upstream) === null || _a === undefined || _a.setFilters();
    }
  }
  function getStructuredBackend(upstream) {
    return new StructuredBackend(upstream);
  }
  exports.env = {
    nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
  };
  var loggerCache = new Map;
  var cachedBackend = undefined;
  function setBackend(backend) {
    cachedBackend = backend;
    loggerCache.clear();
  }
  function log(namespace, parent) {
    if (!cachedBackend) {
      const enablesFlag = process2.env[exports.env.nodeEnables];
      if (!enablesFlag) {
        return exports.placeholder;
      }
    }
    if (!namespace) {
      return exports.placeholder;
    }
    if (parent) {
      namespace = `${parent.instance.namespace}:${namespace}`;
    }
    const existing = loggerCache.get(namespace);
    if (existing) {
      return existing.func;
    }
    if (cachedBackend === null) {
      return exports.placeholder;
    } else if (cachedBackend === undefined) {
      cachedBackend = getNodeBackend();
    }
    const logger = (() => {
      let previousBackend = undefined;
      const newLogger = new AdhocDebugLogger(namespace, (fields, ...args) => {
        if (previousBackend !== cachedBackend) {
          if (cachedBackend === null) {
            return;
          } else if (cachedBackend === undefined) {
            cachedBackend = getNodeBackend();
          }
          previousBackend = cachedBackend;
        }
        cachedBackend === null || cachedBackend === undefined || cachedBackend.log(namespace, fields, ...args);
      });
      return newLogger;
    })();
    loggerCache.set(namespace, logger);
    return logger.func;
  }
});

// node_modules/.bun/google-logging-utils@1.1.3/node_modules/google-logging-utils/build/src/index.js
var require_src2 = __commonJS((exports) => {
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
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_logging_utils(), exports);
});

// node_modules/.bun/gcp-metadata@8.1.2/node_modules/gcp-metadata/build/src/index.js
var require_src3 = __commonJS((exports) => {
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
  var __importStar = exports && exports.__importStar || function() {
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    return function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
  }();
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.gcpResidencyCache = exports.METADATA_SERVER_DETECTION = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = undefined;
  exports.instance = instance;
  exports.project = project;
  exports.universe = universe;
  exports.bulk = bulk;
  exports.isAvailable = isAvailable;
  exports.resetIsAvailableCache = resetIsAvailableCache;
  exports.getGCPResidency = getGCPResidency;
  exports.setGCPResidency = setGCPResidency;
  exports.requestTimeout = requestTimeout;
  var gaxios_1 = require_src();
  var jsonBigint = require_json_bigint();
  var gcp_residency_1 = require_gcp_residency();
  var logger = __importStar(require_src2());
  exports.BASE_PATH = "/computeMetadata/v1";
  exports.HOST_ADDRESS = "http://169.254.169.254";
  exports.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
  exports.HEADER_NAME = "Metadata-Flavor";
  exports.HEADER_VALUE = "Google";
  exports.HEADERS = Object.freeze({ [exports.HEADER_NAME]: exports.HEADER_VALUE });
  var log = logger.log("gcp-metadata");
  exports.METADATA_SERVER_DETECTION = Object.freeze({
    "assume-present": "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    "ping-only": "skip the BIOS probe, and go straight to pinging"
  });
  function getBaseUrl(baseUrl) {
    if (!baseUrl) {
      baseUrl = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || exports.HOST_ADDRESS;
    }
    if (!/^https?:\/\//.test(baseUrl)) {
      baseUrl = `http://${baseUrl}`;
    }
    return new URL(exports.BASE_PATH, baseUrl).href;
  }
  function validate(options) {
    Object.keys(options).forEach((key) => {
      switch (key) {
        case "params":
        case "property":
        case "headers":
          break;
        case "qs":
          throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
        default:
          throw new Error(`'${key}' is not a valid configuration option.`);
      }
    });
  }
  async function metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
    const headers = new Headers(exports.HEADERS);
    let metadataKey = "";
    let params = {};
    if (typeof type === "object") {
      const metadataAccessor2 = type;
      new Headers(metadataAccessor2.headers).forEach((value, key) => headers.set(key, value));
      metadataKey = metadataAccessor2.metadataKey;
      params = metadataAccessor2.params || params;
      noResponseRetries = metadataAccessor2.noResponseRetries || noResponseRetries;
      fastFail = metadataAccessor2.fastFail || fastFail;
    } else {
      metadataKey = type;
    }
    if (typeof options === "string") {
      metadataKey += `/${options}`;
    } else {
      validate(options);
      if (options.property) {
        metadataKey += `/${options.property}`;
      }
      new Headers(options.headers).forEach((value, key) => headers.set(key, value));
      params = options.params || params;
    }
    const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
    const req = {
      url: `${getBaseUrl()}/${metadataKey}`,
      headers,
      retryConfig: { noResponseRetries },
      params,
      responseType: "text",
      timeout: requestTimeout()
    };
    log.info("instance request %j", req);
    const res = await requestMethod(req);
    log.info("instance metadata is %s", res.data);
    const metadataFlavor = res.headers.get(exports.HEADER_NAME);
    if (metadataFlavor !== exports.HEADER_VALUE) {
      throw new RangeError(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header. Expected '${exports.HEADER_VALUE}', got ${metadataFlavor ? `'${metadataFlavor}'` : "no header"}`);
    }
    if (typeof res.data === "string") {
      try {
        return jsonBigint.parse(res.data);
      } catch {}
    }
    return res.data;
  }
  async function fastFailMetadataRequest(options) {
    const secondaryOptions = {
      ...options,
      url: options.url?.toString().replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS))
    };
    const r1 = (0, gaxios_1.request)(options);
    const r2 = (0, gaxios_1.request)(secondaryOptions);
    return Promise.any([r1, r2]);
  }
  function instance(options) {
    return metadataAccessor("instance", options);
  }
  function project(options) {
    return metadataAccessor("project", options);
  }
  function universe(options) {
    return metadataAccessor("universe", options);
  }
  async function bulk(properties) {
    const r = {};
    await Promise.all(properties.map((item) => {
      return (async () => {
        const res = await metadataAccessor(item);
        const key = item.metadataKey;
        r[key] = res;
      })();
    }));
    return r;
  }
  function detectGCPAvailableRetries() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
  }
  var cachedIsAvailableResponse;
  async function isAvailable() {
    if (process.env.METADATA_SERVER_DETECTION) {
      const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
      if (!(value in exports.METADATA_SERVER_DETECTION)) {
        throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(exports.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
      }
      switch (value) {
        case "assume-present":
          return true;
        case "none":
          return false;
        case "bios-only":
          return getGCPResidency();
        case "ping-only":
      }
    }
    try {
      if (cachedIsAvailableResponse === undefined) {
        cachedIsAvailableResponse = metadataAccessor("instance", undefined, detectGCPAvailableRetries(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
      }
      await cachedIsAvailableResponse;
      return true;
    } catch (e) {
      const err = e;
      if (process.env.DEBUG_AUTH) {
        console.info(err);
      }
      if (err.type === "request-timeout") {
        return false;
      }
      if (err.response && err.response.status === 404) {
        return false;
      } else {
        if (!(err.response && err.response.status === 404) && (!err.code || ![
          "EHOSTDOWN",
          "EHOSTUNREACH",
          "ENETUNREACH",
          "ENOENT",
          "ENOTFOUND",
          "ECONNREFUSED"
        ].includes(err.code.toString()))) {
          let code = "UNKNOWN";
          if (err.code)
            code = err.code.toString();
          process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, "MetadataLookupWarning");
        }
        return false;
      }
    }
  }
  function resetIsAvailableCache() {
    cachedIsAvailableResponse = undefined;
  }
  exports.gcpResidencyCache = null;
  function getGCPResidency() {
    if (exports.gcpResidencyCache === null) {
      setGCPResidency();
    }
    return exports.gcpResidencyCache;
  }
  function setGCPResidency(value = null) {
    exports.gcpResidencyCache = value !== null ? value : (0, gcp_residency_1.detectGCPResidency)();
  }
  function requestTimeout() {
    return getGCPResidency() ? 0 : 3000;
  }
  __exportStar(require_gcp_residency(), exports);
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/shared.js
var require_shared = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fromArrayBufferToHex = fromArrayBufferToHex;
  function fromArrayBufferToHex(arrayBuffer) {
    const byteArray = Array.from(new Uint8Array(arrayBuffer));
    return byteArray.map((byte) => {
      return byte.toString(16).padStart(2, "0");
    }).join("");
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/browser/crypto.js
var require_crypto = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BrowserCrypto = undefined;
  var base64js = require_base64_js();
  var shared_1 = require_shared();

  class BrowserCrypto {
    constructor() {
      if (typeof window === "undefined" || window.crypto === undefined || window.crypto.subtle === undefined) {
        throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
      }
    }
    async sha256DigestBase64(str) {
      const inputBuffer = new TextEncoder().encode(str);
      const outputBuffer = await window.crypto.subtle.digest("SHA-256", inputBuffer);
      return base64js.fromByteArray(new Uint8Array(outputBuffer));
    }
    randomBytesBase64(count) {
      const array = new Uint8Array(count);
      window.crypto.getRandomValues(array);
      return base64js.fromByteArray(array);
    }
    static padBase64(base64) {
      while (base64.length % 4 !== 0) {
        base64 += "=";
      }
      return base64;
    }
    async verify(pubkey, data, signature) {
      const algo = {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
      const dataArray = new TextEncoder().encode(data);
      const signatureArray = base64js.toByteArray(BrowserCrypto.padBase64(signature));
      const cryptoKey = await window.crypto.subtle.importKey("jwk", pubkey, algo, true, ["verify"]);
      const result = await window.crypto.subtle.verify(algo, cryptoKey, Buffer.from(signatureArray), dataArray);
      return result;
    }
    async sign(privateKey, data) {
      const algo = {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
      const dataArray = new TextEncoder().encode(data);
      const cryptoKey = await window.crypto.subtle.importKey("jwk", privateKey, algo, true, ["sign"]);
      const result = await window.crypto.subtle.sign(algo, cryptoKey, dataArray);
      return base64js.fromByteArray(new Uint8Array(result));
    }
    decodeBase64StringUtf8(base64) {
      const uint8array = base64js.toByteArray(BrowserCrypto.padBase64(base64));
      const result = new TextDecoder().decode(uint8array);
      return result;
    }
    encodeBase64StringUtf8(text) {
      const uint8array = new TextEncoder().encode(text);
      const result = base64js.fromByteArray(uint8array);
      return result;
    }
    async sha256DigestHex(str) {
      const inputBuffer = new TextEncoder().encode(str);
      const outputBuffer = await window.crypto.subtle.digest("SHA-256", inputBuffer);
      return (0, shared_1.fromArrayBufferToHex)(outputBuffer);
    }
    async signWithHmacSha256(key, msg) {
      const rawKey = typeof key === "string" ? key : String.fromCharCode(...new Uint16Array(key));
      const enc = new TextEncoder;
      const cryptoKey = await window.crypto.subtle.importKey("raw", enc.encode(rawKey), {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      }, false, ["sign"]);
      return window.crypto.subtle.sign("HMAC", cryptoKey, enc.encode(msg));
    }
  }
  exports.BrowserCrypto = BrowserCrypto;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/node/crypto.js
var require_crypto2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.NodeCrypto = undefined;
  var crypto = __require("crypto");

  class NodeCrypto {
    async sha256DigestBase64(str) {
      return crypto.createHash("sha256").update(str).digest("base64");
    }
    randomBytesBase64(count) {
      return crypto.randomBytes(count).toString("base64");
    }
    async verify(pubkey, data, signature) {
      const verifier = crypto.createVerify("RSA-SHA256");
      verifier.update(data);
      verifier.end();
      return verifier.verify(pubkey, signature, "base64");
    }
    async sign(privateKey, data) {
      const signer = crypto.createSign("RSA-SHA256");
      signer.update(data);
      signer.end();
      return signer.sign(privateKey, "base64");
    }
    decodeBase64StringUtf8(base64) {
      return Buffer.from(base64, "base64").toString("utf-8");
    }
    encodeBase64StringUtf8(text) {
      return Buffer.from(text, "utf-8").toString("base64");
    }
    async sha256DigestHex(str) {
      return crypto.createHash("sha256").update(str).digest("hex");
    }
    async signWithHmacSha256(key, msg) {
      const cryptoKey = typeof key === "string" ? key : toBuffer(key);
      return toArrayBuffer(crypto.createHmac("sha256", cryptoKey).update(msg).digest());
    }
  }
  exports.NodeCrypto = NodeCrypto;
  function toArrayBuffer(buffer) {
    const ab = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(ab);
    for (let i = 0;i < buffer.length; ++i) {
      view[i] = buffer[i];
    }
    return ab;
  }
  function toBuffer(arrayBuffer) {
    return Buffer.from(arrayBuffer);
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/crypto/crypto.js
var require_crypto3 = __commonJS((exports) => {
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
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createCrypto = createCrypto;
  exports.hasBrowserCrypto = hasBrowserCrypto;
  var crypto_1 = require_crypto();
  var crypto_2 = require_crypto2();
  __exportStar(require_shared(), exports);
  function createCrypto() {
    if (hasBrowserCrypto()) {
      return new crypto_1.BrowserCrypto;
    }
    return new crypto_2.NodeCrypto;
  }
  function hasBrowserCrypto() {
    return typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefined";
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/util.js
var require_util2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LRUCache = undefined;
  exports.snakeToCamel = snakeToCamel;
  exports.originalOrCamelOptions = originalOrCamelOptions;
  exports.removeUndefinedValuesInObject = removeUndefinedValuesInObject;
  exports.isValidFile = isValidFile;
  exports.getWellKnownCertificateConfigFileLocation = getWellKnownCertificateConfigFileLocation;
  var fs = __require("fs");
  var os = __require("os");
  var path = __require("path");
  var WELL_KNOWN_CERTIFICATE_CONFIG_FILE = "certificate_config.json";
  var CLOUDSDK_CONFIG_DIRECTORY = "gcloud";
  function snakeToCamel(str) {
    return str.replace(/([_][^_])/g, (match) => match.slice(1).toUpperCase());
  }
  function originalOrCamelOptions(obj) {
    function get(key) {
      const o = obj || {};
      return o[key] ?? o[snakeToCamel(key)];
    }
    return { get };
  }

  class LRUCache {
    capacity;
    #cache = new Map;
    maxAge;
    constructor(options) {
      this.capacity = options.capacity;
      this.maxAge = options.maxAge;
    }
    #moveToEnd(key, value) {
      this.#cache.delete(key);
      this.#cache.set(key, {
        value,
        lastAccessed: Date.now()
      });
    }
    set(key, value) {
      this.#moveToEnd(key, value);
      this.#evict();
    }
    get(key) {
      const item = this.#cache.get(key);
      if (!item)
        return;
      this.#moveToEnd(key, item.value);
      this.#evict();
      return item.value;
    }
    #evict() {
      const cutoffDate = this.maxAge ? Date.now() - this.maxAge : 0;
      let oldestItem = this.#cache.entries().next();
      while (!oldestItem.done && (this.#cache.size > this.capacity || oldestItem.value[1].lastAccessed < cutoffDate)) {
        this.#cache.delete(oldestItem.value[0]);
        oldestItem = this.#cache.entries().next();
      }
    }
  }
  exports.LRUCache = LRUCache;
  function removeUndefinedValuesInObject(object) {
    Object.entries(object).forEach(([key, value]) => {
      if (value === undefined || value === "undefined") {
        delete object[key];
      }
    });
    return object;
  }
  async function isValidFile(filePath) {
    try {
      const stats = await fs.promises.lstat(filePath);
      return stats.isFile();
    } catch (e) {
      return false;
    }
  }
  function getWellKnownCertificateConfigFileLocation() {
    const configDir = process.env.CLOUDSDK_CONFIG || (_isWindows() ? path.join(process.env.APPDATA || "", CLOUDSDK_CONFIG_DIRECTORY) : path.join(process.env.HOME || "", ".config", CLOUDSDK_CONFIG_DIRECTORY));
    return path.join(configDir, WELL_KNOWN_CERTIFICATE_CONFIG_FILE);
  }
  function _isWindows() {
    return os.platform().startsWith("win");
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/package.json
var require_package2 = __commonJS((exports, module) => {
  module.exports = {
    name: "google-auth-library",
    version: "10.6.2",
    author: "Google Inc.",
    description: "Google APIs Authentication Client Library for Node.js",
    engines: {
      node: ">=18"
    },
    main: "./build/src/index.js",
    types: "./build/src/index.d.ts",
    repository: {
      type: "git",
      directory: "packages/google-auth-library-nodejs",
      url: "https://github.com/googleapis/google-cloud-node-core.git"
    },
    keywords: [
      "google",
      "api",
      "google apis",
      "client",
      "client library"
    ],
    dependencies: {
      "base64-js": "^1.3.0",
      "ecdsa-sig-formatter": "^1.0.11",
      gaxios: "^7.1.4",
      "gcp-metadata": "8.1.2",
      "google-logging-utils": "1.1.3",
      jws: "^4.0.0"
    },
    devDependencies: {
      "@types/base64-js": "^1.2.5",
      "@types/jws": "^3.1.0",
      "@types/mocha": "^10.0.10",
      "@types/mv": "^2.1.0",
      "@types/ncp": "^2.0.8",
      "@types/node": "^24.0.0",
      "@types/sinon": "^21.0.0",
      "assert-rejects": "^1.0.0",
      c8: "^10.1.3",
      codecov: "^3.8.3",
      gts: "^6.0.2",
      "is-docker": "^3.0.0",
      jsdoc: "^4.0.4",
      "jsdoc-fresh": "^5.0.0",
      "jsdoc-region-tag": "^4.0.0",
      karma: "^6.0.0",
      "karma-chrome-launcher": "^3.0.0",
      "karma-coverage": "^2.0.0",
      "karma-firefox-launcher": "^2.0.0",
      "karma-mocha": "^2.0.0",
      "karma-sourcemap-loader": "^0.4.0",
      "karma-webpack": "^5.0.1",
      keypair: "^1.0.4",
      mocha: "^11.1.0",
      mv: "^2.1.1",
      ncp: "^2.0.0",
      nock: "^14.0.5",
      "null-loader": "^4.0.1",
      puppeteer: "^24.0.0",
      sinon: "^21.0.0",
      "ts-loader": "^9.5.2",
      typescript: "5.8.3",
      webpack: "^5.97.1",
      "webpack-cli": "^6.0.1"
    },
    files: [
      "build/src",
      "!build/src/**/*.map"
    ],
    scripts: {
      test: "c8 mocha build/test",
      clean: "gts clean",
      prepare: "npm run compile",
      lint: "gts check --no-inline-config",
      compile: "tsc -p .",
      fix: "gts fix",
      pretest: "npm run compile -- --sourceMap",
      docs: "jsdoc -c .jsdoc.js",
      "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
      "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
      "system-test": "mocha build/system-test --timeout 60000",
      "presystem-test": "npm run compile -- --sourceMap",
      webpack: "webpack",
      "browser-test": "karma start",
      "docs-test": "echo 'disabled until linkinator is fixed'",
      "predocs-test": "npm run docs",
      prelint: "cd samples; npm link ../; npm install"
    },
    license: "Apache-2.0",
    homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/google-auth-library-nodejs"
  };
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/shared.cjs
var require_shared2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.USER_AGENT = exports.PRODUCT_NAME = exports.pkg = undefined;
  var pkg = require_package2();
  exports.pkg = pkg;
  var PRODUCT_NAME = "google-api-nodejs-client";
  exports.PRODUCT_NAME = PRODUCT_NAME;
  var USER_AGENT = `${PRODUCT_NAME}/${pkg.version}`;
  exports.USER_AGENT = USER_AGENT;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/authclient.js
var require_authclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AuthClient = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = exports.DEFAULT_UNIVERSE = undefined;
  var events_1 = __require("events");
  var gaxios_1 = require_src();
  var util_1 = require_util2();
  var google_logging_utils_1 = require_src2();
  var shared_cjs_1 = require_shared2();
  exports.DEFAULT_UNIVERSE = "googleapis.com";
  exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 5 * 60 * 1000;

  class AuthClient extends events_1.EventEmitter {
    apiKey;
    projectId;
    quotaProjectId;
    transporter;
    credentials = {};
    eagerRefreshThresholdMillis = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
    forceRefreshOnFailure = false;
    universeDomain = exports.DEFAULT_UNIVERSE;
    static RequestMethodNameSymbol = Symbol("request method name");
    static RequestLogIdSymbol = Symbol("request log id");
    constructor(opts = {}) {
      super();
      const options = (0, util_1.originalOrCamelOptions)(opts);
      this.apiKey = opts.apiKey;
      this.projectId = options.get("project_id") ?? null;
      this.quotaProjectId = options.get("quota_project_id");
      this.credentials = options.get("credentials") ?? {};
      this.universeDomain = options.get("universe_domain") ?? exports.DEFAULT_UNIVERSE;
      this.transporter = opts.transporter ?? new gaxios_1.Gaxios(opts.transporterOptions);
      if (options.get("useAuthRequestParameters") !== false) {
        this.transporter.interceptors.request.add(AuthClient.DEFAULT_REQUEST_INTERCEPTOR);
        this.transporter.interceptors.response.add(AuthClient.DEFAULT_RESPONSE_INTERCEPTOR);
      }
      if (opts.eagerRefreshThresholdMillis) {
        this.eagerRefreshThresholdMillis = opts.eagerRefreshThresholdMillis;
      }
      this.forceRefreshOnFailure = opts.forceRefreshOnFailure ?? false;
    }
    fetch(...args) {
      const input = args[0];
      const init = args[1];
      let url = undefined;
      const headers = new Headers;
      if (typeof input === "string") {
        url = new URL(input);
      } else if (input instanceof URL) {
        url = input;
      } else if (input && input.url) {
        url = new URL(input.url);
      }
      if (input && typeof input === "object" && "headers" in input) {
        gaxios_1.Gaxios.mergeHeaders(headers, input.headers);
      }
      if (init) {
        gaxios_1.Gaxios.mergeHeaders(headers, new Headers(init.headers));
      }
      if (typeof input === "object" && !(input instanceof URL)) {
        return this.request({ ...init, ...input, headers, url });
      } else {
        return this.request({ ...init, headers, url });
      }
    }
    setCredentials(credentials) {
      this.credentials = credentials;
    }
    addSharedMetadataHeaders(headers) {
      if (!headers.has("x-goog-user-project") && this.quotaProjectId) {
        headers.set("x-goog-user-project", this.quotaProjectId);
      }
      return headers;
    }
    addUserProjectAndAuthHeaders(target, source) {
      const xGoogUserProject = source.get("x-goog-user-project");
      const authorizationHeader = source.get("authorization");
      if (xGoogUserProject) {
        target.set("x-goog-user-project", xGoogUserProject);
      }
      if (authorizationHeader) {
        target.set("authorization", authorizationHeader);
      }
      return target;
    }
    static log = (0, google_logging_utils_1.log)("auth");
    static DEFAULT_REQUEST_INTERCEPTOR = {
      resolved: async (config) => {
        if (!config.headers.has("x-goog-api-client")) {
          const nodeVersion = process.version.replace(/^v/, "");
          config.headers.set("x-goog-api-client", `gl-node/${nodeVersion}`);
        }
        const userAgent = config.headers.get("User-Agent");
        if (!userAgent) {
          config.headers.set("User-Agent", shared_cjs_1.USER_AGENT);
        } else if (!userAgent.includes(`${shared_cjs_1.PRODUCT_NAME}/`)) {
          config.headers.set("User-Agent", `${userAgent} ${shared_cjs_1.USER_AGENT}`);
        }
        try {
          const symbols = config;
          const methodName = symbols[AuthClient.RequestMethodNameSymbol];
          const logId = `${Math.floor(Math.random() * 1000)}`;
          symbols[AuthClient.RequestLogIdSymbol] = logId;
          const logObject = {
            url: config.url,
            headers: config.headers
          };
          if (methodName) {
            AuthClient.log.info("%s [%s] request %j", methodName, logId, logObject);
          } else {
            AuthClient.log.info("[%s] request %j", logId, logObject);
          }
        } catch (e) {}
        return config;
      }
    };
    static DEFAULT_RESPONSE_INTERCEPTOR = {
      resolved: async (response) => {
        try {
          const symbols = response.config;
          const methodName = symbols[AuthClient.RequestMethodNameSymbol];
          const logId = symbols[AuthClient.RequestLogIdSymbol];
          if (methodName) {
            AuthClient.log.info("%s [%s] response %j", methodName, logId, response.data);
          } else {
            AuthClient.log.info("[%s] response %j", logId, response.data);
          }
        } catch (e) {}
        return response;
      },
      rejected: async (error) => {
        try {
          const symbols = error.config;
          const methodName = symbols[AuthClient.RequestMethodNameSymbol];
          const logId = symbols[AuthClient.RequestLogIdSymbol];
          if (methodName) {
            AuthClient.log.info("%s [%s] error %j", methodName, logId, error.response?.data);
          } else {
            AuthClient.log.error("[%s] error %j", logId, error.response?.data);
          }
        } catch (e) {}
        throw error;
      }
    };
    static setMethodName(config, methodName) {
      try {
        const symbols = config;
        symbols[AuthClient.RequestMethodNameSymbol] = methodName;
      } catch (e) {}
    }
    static get RETRY_CONFIG() {
      return {
        retry: true,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      };
    }
  }
  exports.AuthClient = AuthClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/loginticket.js
var require_loginticket = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LoginTicket = undefined;

  class LoginTicket {
    envelope;
    payload;
    constructor(env, pay) {
      this.envelope = env;
      this.payload = pay;
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    getUserId() {
      const payload = this.getPayload();
      if (payload && payload.sub) {
        return payload.sub;
      }
      return null;
    }
    getAttributes() {
      return { envelope: this.getEnvelope(), payload: this.getPayload() };
    }
  }
  exports.LoginTicket = LoginTicket;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/oauth2client.js
var require_oauth2client = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OAuth2Client = exports.ClientAuthentication = exports.CertificateFormat = exports.CodeChallengeMethod = undefined;
  var gaxios_1 = require_src();
  var querystring = __require("querystring");
  var stream = __require("stream");
  var formatEcdsa = require_ecdsa_sig_formatter();
  var util_1 = require_util2();
  var crypto_1 = require_crypto3();
  var authclient_1 = require_authclient();
  var loginticket_1 = require_loginticket();
  var CodeChallengeMethod;
  (function(CodeChallengeMethod2) {
    CodeChallengeMethod2["Plain"] = "plain";
    CodeChallengeMethod2["S256"] = "S256";
  })(CodeChallengeMethod || (exports.CodeChallengeMethod = CodeChallengeMethod = {}));
  var CertificateFormat;
  (function(CertificateFormat2) {
    CertificateFormat2["PEM"] = "PEM";
    CertificateFormat2["JWK"] = "JWK";
  })(CertificateFormat || (exports.CertificateFormat = CertificateFormat = {}));
  var ClientAuthentication;
  (function(ClientAuthentication2) {
    ClientAuthentication2["ClientSecretPost"] = "ClientSecretPost";
    ClientAuthentication2["ClientSecretBasic"] = "ClientSecretBasic";
    ClientAuthentication2["None"] = "None";
  })(ClientAuthentication || (exports.ClientAuthentication = ClientAuthentication = {}));

  class OAuth2Client extends authclient_1.AuthClient {
    redirectUri;
    certificateCache = {};
    certificateExpiry = null;
    certificateCacheFormat = CertificateFormat.PEM;
    refreshTokenPromises = new Map;
    endpoints;
    issuers;
    clientAuthentication;
    _clientId;
    _clientSecret;
    refreshHandler;
    constructor(options = {}, clientSecret, redirectUri) {
      super(typeof options === "object" ? options : {});
      if (typeof options !== "object") {
        options = {
          clientId: options,
          clientSecret,
          redirectUri
        };
      }
      this._clientId = options.clientId || options.client_id;
      this._clientSecret = options.clientSecret || options.client_secret;
      this.redirectUri = options.redirectUri || options.redirect_uris?.[0];
      this.endpoints = {
        tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
        oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        oauth2TokenUrl: "https://oauth2.googleapis.com/token",
        oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
        oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
        oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
        oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
        ...options.endpoints
      };
      this.clientAuthentication = options.clientAuthentication || ClientAuthentication.ClientSecretPost;
      this.issuers = options.issuers || [
        "accounts.google.com",
        "https://accounts.google.com",
        this.universeDomain
      ];
    }
    static GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
    static CLOCK_SKEW_SECS_ = 300;
    static DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
    generateAuthUrl(opts = {}) {
      if (opts.code_challenge_method && !opts.code_challenge) {
        throw new Error("If a code_challenge_method is provided, code_challenge must be included.");
      }
      opts.response_type = opts.response_type || "code";
      opts.client_id = opts.client_id || this._clientId;
      opts.redirect_uri = opts.redirect_uri || this.redirectUri;
      if (Array.isArray(opts.scope)) {
        opts.scope = opts.scope.join(" ");
      }
      const rootUrl = this.endpoints.oauth2AuthBaseUrl.toString();
      return rootUrl + "?" + querystring.stringify(opts);
    }
    generateCodeVerifier() {
      throw new Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
    }
    async generateCodeVerifierAsync() {
      const crypto = (0, crypto_1.createCrypto)();
      const randomString = crypto.randomBytesBase64(96);
      const codeVerifier = randomString.replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-");
      const unencodedCodeChallenge = await crypto.sha256DigestBase64(codeVerifier);
      const codeChallenge = unencodedCodeChallenge.split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return { codeVerifier, codeChallenge };
    }
    getToken(codeOrOptions, callback) {
      const options = typeof codeOrOptions === "string" ? { code: codeOrOptions } : codeOrOptions;
      if (callback) {
        this.getTokenAsync(options).then((r) => callback(null, r.tokens, r.res), (e) => callback(e, null, e.response));
      } else {
        return this.getTokenAsync(options);
      }
    }
    async getTokenAsync(options) {
      const url = this.endpoints.oauth2TokenUrl.toString();
      const headers = new Headers;
      const values = {
        client_id: options.client_id || this._clientId,
        code_verifier: options.codeVerifier,
        code: options.code,
        grant_type: "authorization_code",
        redirect_uri: options.redirect_uri || this.redirectUri
      };
      if (this.clientAuthentication === ClientAuthentication.ClientSecretBasic) {
        const basic = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        headers.set("authorization", `Basic ${basic.toString("base64")}`);
      }
      if (this.clientAuthentication === ClientAuthentication.ClientSecretPost) {
        values.client_secret = this._clientSecret;
      }
      const opts = {
        ...OAuth2Client.RETRY_CONFIG,
        method: "POST",
        url,
        data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(values)),
        headers
      };
      authclient_1.AuthClient.setMethodName(opts, "getTokenAsync");
      const res = await this.transporter.request(opts);
      const tokens = res.data;
      if (res.data && res.data.expires_in) {
        tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
        delete tokens.expires_in;
      }
      this.emit("tokens", tokens);
      return { tokens, res };
    }
    async refreshToken(refreshToken) {
      if (!refreshToken) {
        return this.refreshTokenNoCache(refreshToken);
      }
      if (this.refreshTokenPromises.has(refreshToken)) {
        return this.refreshTokenPromises.get(refreshToken);
      }
      const p = this.refreshTokenNoCache(refreshToken).then((r) => {
        this.refreshTokenPromises.delete(refreshToken);
        return r;
      }, (e) => {
        this.refreshTokenPromises.delete(refreshToken);
        throw e;
      });
      this.refreshTokenPromises.set(refreshToken, p);
      return p;
    }
    async refreshTokenNoCache(refreshToken) {
      if (!refreshToken) {
        throw new Error("No refresh token is set.");
      }
      const url = this.endpoints.oauth2TokenUrl.toString();
      const data = {
        refresh_token: refreshToken,
        client_id: this._clientId,
        client_secret: this._clientSecret,
        grant_type: "refresh_token"
      };
      let res;
      try {
        const opts = {
          ...OAuth2Client.RETRY_CONFIG,
          method: "POST",
          url,
          data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(data))
        };
        authclient_1.AuthClient.setMethodName(opts, "refreshTokenNoCache");
        res = await this.transporter.request(opts);
      } catch (e) {
        if (e instanceof gaxios_1.GaxiosError && e.message === "invalid_grant" && e.response?.data && /ReAuth/i.test(e.response.data.error_description)) {
          e.message = JSON.stringify(e.response.data);
        }
        throw e;
      }
      const tokens = res.data;
      if (res.data && res.data.expires_in) {
        tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
        delete tokens.expires_in;
      }
      this.emit("tokens", tokens);
      return { tokens, res };
    }
    refreshAccessToken(callback) {
      if (callback) {
        this.refreshAccessTokenAsync().then((r) => callback(null, r.credentials, r.res), callback);
      } else {
        return this.refreshAccessTokenAsync();
      }
    }
    async refreshAccessTokenAsync() {
      const r = await this.refreshToken(this.credentials.refresh_token);
      const tokens = r.tokens;
      tokens.refresh_token = this.credentials.refresh_token;
      this.credentials = tokens;
      return { credentials: this.credentials, res: r.res };
    }
    getAccessToken(callback) {
      if (callback) {
        this.getAccessTokenAsync().then((r) => callback(null, r.token, r.res), callback);
      } else {
        return this.getAccessTokenAsync();
      }
    }
    async getAccessTokenAsync() {
      const shouldRefresh = !this.credentials.access_token || this.isTokenExpiring();
      if (shouldRefresh) {
        if (!this.credentials.refresh_token) {
          if (this.refreshHandler) {
            const refreshedAccessToken = await this.processAndValidateRefreshHandler();
            if (refreshedAccessToken?.access_token) {
              this.setCredentials(refreshedAccessToken);
              return { token: this.credentials.access_token };
            }
          } else {
            throw new Error("No refresh token or refresh handler callback is set.");
          }
        }
        const r = await this.refreshAccessTokenAsync();
        if (!r.credentials || r.credentials && !r.credentials.access_token) {
          throw new Error("Could not refresh access token.");
        }
        return { token: r.credentials.access_token, res: r.res };
      } else {
        return { token: this.credentials.access_token };
      }
    }
    async getRequestHeaders(url) {
      const headers = (await this.getRequestMetadataAsync(url)).headers;
      return headers;
    }
    async getRequestMetadataAsync(url) {
      const thisCreds = this.credentials;
      if (!thisCreds.access_token && !thisCreds.refresh_token && !this.apiKey && !this.refreshHandler) {
        throw new Error("No access, refresh token, API key or refresh handler callback is set.");
      }
      if (thisCreds.access_token && !this.isTokenExpiring()) {
        thisCreds.token_type = thisCreds.token_type || "Bearer";
        const headers2 = new Headers({
          authorization: thisCreds.token_type + " " + thisCreds.access_token
        });
        return { headers: this.addSharedMetadataHeaders(headers2) };
      }
      if (this.refreshHandler) {
        const refreshedAccessToken = await this.processAndValidateRefreshHandler();
        if (refreshedAccessToken?.access_token) {
          this.setCredentials(refreshedAccessToken);
          const headers2 = new Headers({
            authorization: "Bearer " + this.credentials.access_token
          });
          return { headers: this.addSharedMetadataHeaders(headers2) };
        }
      }
      if (this.apiKey) {
        return { headers: new Headers({ "X-Goog-Api-Key": this.apiKey }) };
      }
      let r = null;
      let tokens = null;
      try {
        r = await this.refreshToken(thisCreds.refresh_token);
        tokens = r.tokens;
      } catch (err) {
        const e = err;
        if (e.response && (e.response.status === 403 || e.response.status === 404)) {
          e.message = `Could not refresh access token: ${e.message}`;
        }
        throw e;
      }
      const credentials = this.credentials;
      credentials.token_type = credentials.token_type || "Bearer";
      tokens.refresh_token = credentials.refresh_token;
      this.credentials = tokens;
      const headers = new Headers({
        authorization: credentials.token_type + " " + tokens.access_token
      });
      return { headers: this.addSharedMetadataHeaders(headers), res: r.res };
    }
    static getRevokeTokenUrl(token) {
      return new OAuth2Client().getRevokeTokenURL(token).toString();
    }
    getRevokeTokenURL(token) {
      const url = new URL(this.endpoints.oauth2RevokeUrl);
      url.searchParams.append("token", token);
      return url;
    }
    revokeToken(token, callback) {
      const opts = {
        ...OAuth2Client.RETRY_CONFIG,
        url: this.getRevokeTokenURL(token).toString(),
        method: "POST"
      };
      authclient_1.AuthClient.setMethodName(opts, "revokeToken");
      if (callback) {
        this.transporter.request(opts).then((r) => callback(null, r), callback);
      } else {
        return this.transporter.request(opts);
      }
    }
    revokeCredentials(callback) {
      if (callback) {
        this.revokeCredentialsAsync().then((res) => callback(null, res), callback);
      } else {
        return this.revokeCredentialsAsync();
      }
    }
    async revokeCredentialsAsync() {
      const token = this.credentials.access_token;
      this.credentials = {};
      if (token) {
        return this.revokeToken(token);
      } else {
        throw new Error("No access token to revoke.");
      }
    }
    request(opts, callback) {
      if (callback) {
        this.requestAsync(opts).then((r) => callback(null, r), (e) => {
          return callback(e, e.response);
        });
      } else {
        return this.requestAsync(opts);
      }
    }
    async requestAsync(opts, reAuthRetried = false) {
      try {
        const r = await this.getRequestMetadataAsync();
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
        this.addUserProjectAndAuthHeaders(opts.headers, r.headers);
        if (this.apiKey) {
          opts.headers.set("X-Goog-Api-Key", this.apiKey);
        }
        return await this.transporter.request(opts);
      } catch (e) {
        const res = e.response;
        if (res) {
          const statusCode = res.status;
          const mayRequireRefresh = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure);
          const mayRequireRefreshWithNoRefreshToken = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler;
          const isReadableStream = res.config.data instanceof stream.Readable;
          const isAuthErr = statusCode === 401 || statusCode === 403;
          if (!reAuthRetried && isAuthErr && !isReadableStream && mayRequireRefresh) {
            await this.refreshAccessTokenAsync();
            return this.requestAsync(opts, true);
          } else if (!reAuthRetried && isAuthErr && !isReadableStream && mayRequireRefreshWithNoRefreshToken) {
            const refreshedAccessToken = await this.processAndValidateRefreshHandler();
            if (refreshedAccessToken?.access_token) {
              this.setCredentials(refreshedAccessToken);
            }
            return this.requestAsync(opts, true);
          }
        }
        throw e;
      }
    }
    verifyIdToken(options, callback) {
      if (callback && typeof callback !== "function") {
        throw new Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
      }
      if (callback) {
        this.verifyIdTokenAsync(options).then((r) => callback(null, r), callback);
      } else {
        return this.verifyIdTokenAsync(options);
      }
    }
    async verifyIdTokenAsync(options) {
      if (!options.idToken) {
        throw new Error("The verifyIdToken method requires an ID Token");
      }
      const response = await this.getFederatedSignonCertsAsync();
      const login = await this.verifySignedJwtWithCertsAsync(options.idToken, response.certs, options.audience, this.issuers, options.maxExpiry);
      return login;
    }
    async getTokenInfo(accessToken) {
      const { data } = await this.transporter.request({
        ...OAuth2Client.RETRY_CONFIG,
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${accessToken}`
        },
        url: this.endpoints.tokenInfoUrl.toString()
      });
      const info = Object.assign({
        expiry_date: new Date().getTime() + data.expires_in * 1000,
        scopes: data.scope.split(" ")
      }, data);
      delete info.expires_in;
      delete info.scope;
      return info;
    }
    getFederatedSignonCerts(callback) {
      if (callback) {
        this.getFederatedSignonCertsAsync().then((r) => callback(null, r.certs, r.res), callback);
      } else {
        return this.getFederatedSignonCertsAsync();
      }
    }
    async getFederatedSignonCertsAsync() {
      const nowTime = new Date().getTime();
      const format = (0, crypto_1.hasBrowserCrypto)() ? CertificateFormat.JWK : CertificateFormat.PEM;
      if (this.certificateExpiry && nowTime < this.certificateExpiry.getTime() && this.certificateCacheFormat === format) {
        return { certs: this.certificateCache, format };
      }
      let res;
      let url;
      switch (format) {
        case CertificateFormat.PEM:
          url = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
          break;
        case CertificateFormat.JWK:
          url = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
          break;
        default:
          throw new Error(`Unsupported certificate format ${format}`);
      }
      try {
        const opts = {
          ...OAuth2Client.RETRY_CONFIG,
          url
        };
        authclient_1.AuthClient.setMethodName(opts, "getFederatedSignonCertsAsync");
        res = await this.transporter.request(opts);
      } catch (e) {
        if (e instanceof Error) {
          e.message = `Failed to retrieve verification certificates: ${e.message}`;
        }
        throw e;
      }
      const cacheControl = res?.headers.get("cache-control");
      let cacheAge = -1;
      if (cacheControl) {
        const maxAge = /max-age=(?<maxAge>[0-9]+)/.exec(cacheControl)?.groups?.maxAge;
        if (maxAge) {
          cacheAge = Number(maxAge) * 1000;
        }
      }
      let certificates = {};
      switch (format) {
        case CertificateFormat.PEM:
          certificates = res.data;
          break;
        case CertificateFormat.JWK:
          for (const key of res.data.keys) {
            certificates[key.kid] = key;
          }
          break;
        default:
          throw new Error(`Unsupported certificate format ${format}`);
      }
      const now = new Date;
      this.certificateExpiry = cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
      this.certificateCache = certificates;
      this.certificateCacheFormat = format;
      return { certs: certificates, format, res };
    }
    getIapPublicKeys(callback) {
      if (callback) {
        this.getIapPublicKeysAsync().then((r) => callback(null, r.pubkeys, r.res), callback);
      } else {
        return this.getIapPublicKeysAsync();
      }
    }
    async getIapPublicKeysAsync() {
      let res;
      const url = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        const opts = {
          ...OAuth2Client.RETRY_CONFIG,
          url
        };
        authclient_1.AuthClient.setMethodName(opts, "getIapPublicKeysAsync");
        res = await this.transporter.request(opts);
      } catch (e) {
        if (e instanceof Error) {
          e.message = `Failed to retrieve verification certificates: ${e.message}`;
        }
        throw e;
      }
      return { pubkeys: res.data, res };
    }
    verifySignedJwtWithCerts() {
      throw new Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
    }
    async verifySignedJwtWithCertsAsync(jwt, certs, requiredAudience, issuers, maxExpiry) {
      const crypto = (0, crypto_1.createCrypto)();
      if (!maxExpiry) {
        maxExpiry = OAuth2Client.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
      }
      const segments = jwt.split(".");
      if (segments.length !== 3) {
        throw new Error("Wrong number of segments in token: " + jwt);
      }
      const signed = segments[0] + "." + segments[1];
      let signature = segments[2];
      let envelope;
      let payload;
      try {
        envelope = JSON.parse(crypto.decodeBase64StringUtf8(segments[0]));
      } catch (err) {
        if (err instanceof Error) {
          err.message = `Can't parse token envelope: ${segments[0]}': ${err.message}`;
        }
        throw err;
      }
      if (!envelope) {
        throw new Error("Can't parse token envelope: " + segments[0]);
      }
      try {
        payload = JSON.parse(crypto.decodeBase64StringUtf8(segments[1]));
      } catch (err) {
        if (err instanceof Error) {
          err.message = `Can't parse token payload '${segments[0]}`;
        }
        throw err;
      }
      if (!payload) {
        throw new Error("Can't parse token payload: " + segments[1]);
      }
      if (!Object.prototype.hasOwnProperty.call(certs, envelope.kid)) {
        throw new Error("No pem found for envelope: " + JSON.stringify(envelope));
      }
      const cert = certs[envelope.kid];
      if (envelope.alg === "ES256") {
        signature = formatEcdsa.joseToDer(signature, "ES256").toString("base64");
      }
      const verified = await crypto.verify(cert, signed, signature);
      if (!verified) {
        throw new Error("Invalid token signature: " + jwt);
      }
      if (!payload.iat) {
        throw new Error("No issue time in token: " + JSON.stringify(payload));
      }
      if (!payload.exp) {
        throw new Error("No expiration time in token: " + JSON.stringify(payload));
      }
      const iat = Number(payload.iat);
      if (isNaN(iat))
        throw new Error("iat field using invalid format");
      const exp = Number(payload.exp);
      if (isNaN(exp))
        throw new Error("exp field using invalid format");
      const now = new Date().getTime() / 1000;
      if (exp >= now + maxExpiry) {
        throw new Error("Expiration time too far in future: " + JSON.stringify(payload));
      }
      const earliest = iat - OAuth2Client.CLOCK_SKEW_SECS_;
      const latest = exp + OAuth2Client.CLOCK_SKEW_SECS_;
      if (now < earliest) {
        throw new Error("Token used too early, " + now + " < " + earliest + ": " + JSON.stringify(payload));
      }
      if (now > latest) {
        throw new Error("Token used too late, " + now + " > " + latest + ": " + JSON.stringify(payload));
      }
      if (issuers && issuers.indexOf(payload.iss) < 0) {
        throw new Error("Invalid issuer, expected one of [" + issuers + "], but got " + payload.iss);
      }
      if (typeof requiredAudience !== "undefined" && requiredAudience !== null) {
        const aud = payload.aud;
        let audVerified = false;
        if (requiredAudience.constructor === Array) {
          audVerified = requiredAudience.indexOf(aud) > -1;
        } else {
          audVerified = aud === requiredAudience;
        }
        if (!audVerified) {
          throw new Error("Wrong recipient, payload audience != requiredAudience");
        }
      }
      return new loginticket_1.LoginTicket(envelope, payload);
    }
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        const accessTokenResponse = await this.refreshHandler();
        if (!accessTokenResponse.access_token) {
          throw new Error("No access token is returned by the refreshHandler callback.");
        }
        return accessTokenResponse;
      }
      return;
    }
    isTokenExpiring() {
      const expiryDate = this.credentials.expiry_date;
      return expiryDate ? expiryDate <= new Date().getTime() + this.eagerRefreshThresholdMillis : false;
    }
  }
  exports.OAuth2Client = OAuth2Client;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/computeclient.js
var require_computeclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Compute = undefined;
  var gaxios_1 = require_src();
  var gcpMetadata = require_src3();
  var oauth2client_1 = require_oauth2client();

  class Compute extends oauth2client_1.OAuth2Client {
    serviceAccountEmail;
    scopes;
    constructor(options = {}) {
      super(options);
      this.credentials = { expiry_date: 1, refresh_token: "compute-placeholder" };
      this.serviceAccountEmail = options.serviceAccountEmail || "default";
      this.scopes = Array.isArray(options.scopes) ? options.scopes : options.scopes ? [options.scopes] : [];
    }
    async refreshTokenNoCache() {
      const tokenPath = `service-accounts/${this.serviceAccountEmail}/token`;
      let data;
      try {
        const instanceOptions = {
          property: tokenPath
        };
        if (this.scopes.length > 0) {
          instanceOptions.params = {
            scopes: this.scopes.join(",")
          };
        }
        data = await gcpMetadata.instance(instanceOptions);
      } catch (e) {
        if (e instanceof gaxios_1.GaxiosError) {
          e.message = `Could not refresh access token: ${e.message}`;
          this.wrapError(e);
        }
        throw e;
      }
      const tokens = data;
      if (data && data.expires_in) {
        tokens.expiry_date = new Date().getTime() + data.expires_in * 1000;
        delete tokens.expires_in;
      }
      this.emit("tokens", tokens);
      return { tokens, res: null };
    }
    async fetchIdToken(targetAudience) {
      const idTokenPath = `service-accounts/${this.serviceAccountEmail}/identity` + `?format=full&audience=${targetAudience}`;
      let idToken;
      try {
        const instanceOptions = {
          property: idTokenPath
        };
        idToken = await gcpMetadata.instance(instanceOptions);
      } catch (e) {
        if (e instanceof Error) {
          e.message = `Could not fetch ID token: ${e.message}`;
        }
        throw e;
      }
      return idToken;
    }
    wrapError(e) {
      const res = e.response;
      if (res && res.status) {
        e.status = res.status;
        if (res.status === 403) {
          e.message = "A Forbidden error was returned while attempting to retrieve an access " + "token for the Compute Engine built-in service account. This may be because the Compute " + "Engine instance does not have the correct permission scopes specified: " + e.message;
        } else if (res.status === 404) {
          e.message = "A Not Found error was returned while attempting to retrieve an access" + "token for the Compute Engine built-in service account. This may be because the Compute " + "Engine instance does not have any permission scopes specified: " + e.message;
        }
      }
    }
  }
  exports.Compute = Compute;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/idtokenclient.js
var require_idtokenclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.IdTokenClient = undefined;
  var oauth2client_1 = require_oauth2client();

  class IdTokenClient extends oauth2client_1.OAuth2Client {
    targetAudience;
    idTokenProvider;
    constructor(options) {
      super(options);
      this.targetAudience = options.targetAudience;
      this.idTokenProvider = options.idTokenProvider;
    }
    async getRequestMetadataAsync() {
      if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
        const idToken = await this.idTokenProvider.fetchIdToken(this.targetAudience);
        this.credentials = {
          id_token: idToken,
          expiry_date: this.getIdTokenExpiryDate(idToken)
        };
      }
      const headers = new Headers({
        authorization: "Bearer " + this.credentials.id_token
      });
      return { headers };
    }
    getIdTokenExpiryDate(idToken) {
      const payloadB64 = idToken.split(".")[1];
      if (payloadB64) {
        const payload = JSON.parse(Buffer.from(payloadB64, "base64").toString("ascii"));
        return payload.exp * 1000;
      }
    }
  }
  exports.IdTokenClient = IdTokenClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/envDetect.js
var require_envDetect = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GCPEnv = undefined;
  exports.clear = clear;
  exports.getEnv = getEnv;
  var gcpMetadata = require_src3();
  var GCPEnv;
  (function(GCPEnv2) {
    GCPEnv2["APP_ENGINE"] = "APP_ENGINE";
    GCPEnv2["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
    GCPEnv2["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
    GCPEnv2["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
    GCPEnv2["CLOUD_RUN"] = "CLOUD_RUN";
    GCPEnv2["CLOUD_RUN_JOBS"] = "CLOUD_RUN_JOBS";
    GCPEnv2["NONE"] = "NONE";
  })(GCPEnv || (exports.GCPEnv = GCPEnv = {}));
  var envPromise;
  function clear() {
    envPromise = undefined;
  }
  async function getEnv() {
    if (envPromise) {
      return envPromise;
    }
    envPromise = getEnvMemoized();
    return envPromise;
  }
  async function getEnvMemoized() {
    let env = GCPEnv.NONE;
    if (isAppEngine()) {
      env = GCPEnv.APP_ENGINE;
    } else if (isCloudFunction()) {
      env = GCPEnv.CLOUD_FUNCTIONS;
    } else if (await isComputeEngine()) {
      if (await isKubernetesEngine()) {
        env = GCPEnv.KUBERNETES_ENGINE;
      } else if (isCloudRun()) {
        env = GCPEnv.CLOUD_RUN;
      } else if (isCloudRunJob()) {
        env = GCPEnv.CLOUD_RUN_JOBS;
      } else {
        env = GCPEnv.COMPUTE_ENGINE;
      }
    } else {
      env = GCPEnv.NONE;
    }
    return env;
  }
  function isAppEngine() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
  }
  function isCloudFunction() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
  }
  function isCloudRun() {
    return !!process.env.K_CONFIGURATION;
  }
  function isCloudRunJob() {
    return !!process.env.CLOUD_RUN_JOB;
  }
  async function isKubernetesEngine() {
    try {
      await gcpMetadata.instance("attributes/cluster-name");
      return true;
    } catch (e) {
      return false;
    }
  }
  async function isComputeEngine() {
    return gcpMetadata.isAvailable();
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/jwsSign.js
var require_jwsSign = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.buildPayloadForJwsSign = buildPayloadForJwsSign;
  exports.getJwsSign = getJwsSign;
  var jws_1 = require_jws();
  var ALG_RS256 = "RS256";
  var GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
  function buildPayloadForJwsSign(tokenOptions) {
    const iat = Math.floor(new Date().getTime() / 1000);
    const payload = {
      iss: tokenOptions.iss,
      scope: tokenOptions.scope,
      aud: GOOGLE_TOKEN_URL,
      exp: iat + 3600,
      iat,
      sub: tokenOptions.sub,
      ...tokenOptions.additionalClaims
    };
    return payload;
  }
  function getJwsSign(tokenOptions) {
    const payload = buildPayloadForJwsSign(tokenOptions);
    return (0, jws_1.sign)({
      header: { alg: ALG_RS256 },
      payload,
      secret: tokenOptions.key
    });
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/getToken.js
var require_getToken = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getToken = getToken;
  var jwsSign_1 = require_jwsSign();
  var GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
  var GOOGLE_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:jwt-bearer";
  var generateRequestOptions = (tokenOptions) => {
    return {
      method: "POST",
      url: GOOGLE_TOKEN_URL,
      data: new URLSearchParams({
        grant_type: GOOGLE_GRANT_TYPE,
        assertion: (0, jwsSign_1.getJwsSign)(tokenOptions)
      }),
      responseType: "json",
      retryConfig: {
        httpMethodsToRetry: ["POST"]
      }
    };
  };
  async function getToken(tokenOptions) {
    if (!tokenOptions.transporter) {
      throw new Error("No transporter set.");
    }
    try {
      const gaxiosOptions = generateRequestOptions(tokenOptions);
      const response = await tokenOptions.transporter.request(gaxiosOptions);
      return response.data;
    } catch (e) {
      const err = e;
      const errorData = err.response?.data;
      if (errorData?.error) {
        err.message = `${errorData.error}: ${errorData.error_description}`;
      }
      throw err;
    }
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/errorWithCode.js
var require_errorWithCode = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ErrorWithCode = undefined;

  class ErrorWithCode extends Error {
    code;
    constructor(message, code) {
      super(message);
      this.code = code;
    }
  }
  exports.ErrorWithCode = ErrorWithCode;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/getCredentials.js
var require_getCredentials = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getCredentials = getCredentials;
  var path = __require("path");
  var fs = __require("fs");
  var util_1 = __require("util");
  var errorWithCode_1 = require_errorWithCode();
  var readFile = fs.readFile ? (0, util_1.promisify)(fs.readFile) : async () => {
    throw new errorWithCode_1.ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
  };
  var ExtensionFiles;
  (function(ExtensionFiles2) {
    ExtensionFiles2["JSON"] = ".json";
    ExtensionFiles2["DER"] = ".der";
    ExtensionFiles2["CRT"] = ".crt";
    ExtensionFiles2["PEM"] = ".pem";
    ExtensionFiles2["P12"] = ".p12";
    ExtensionFiles2["PFX"] = ".pfx";
  })(ExtensionFiles || (ExtensionFiles = {}));

  class JsonCredentialsProvider {
    keyFilePath;
    constructor(keyFilePath) {
      this.keyFilePath = keyFilePath;
    }
    async getCredentials() {
      const key = await readFile(this.keyFilePath, "utf8");
      let body;
      try {
        body = JSON.parse(key);
      } catch (error) {
        const err = error;
        throw new Error(`Invalid JSON key file: ${err.message}`);
      }
      const privateKey = body.private_key;
      const clientEmail = body.client_email;
      if (!privateKey || !clientEmail) {
        throw new errorWithCode_1.ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
      }
      return { privateKey, clientEmail };
    }
  }

  class PemCredentialsProvider {
    keyFilePath;
    constructor(keyFilePath) {
      this.keyFilePath = keyFilePath;
    }
    async getCredentials() {
      const privateKey = await readFile(this.keyFilePath, "utf8");
      return { privateKey };
    }
  }

  class P12CredentialsProvider {
    async getCredentials() {
      throw new errorWithCode_1.ErrorWithCode("*.p12 certificates are not supported after v6.1.2. " + "Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
    }
  }

  class CredentialsProviderFactory {
    static create(keyFilePath) {
      const keyFileExtension = path.extname(keyFilePath);
      switch (keyFileExtension) {
        case ExtensionFiles.JSON:
          return new JsonCredentialsProvider(keyFilePath);
        case ExtensionFiles.DER:
        case ExtensionFiles.CRT:
        case ExtensionFiles.PEM:
          return new PemCredentialsProvider(keyFilePath);
        case ExtensionFiles.P12:
        case ExtensionFiles.PFX:
          return new P12CredentialsProvider;
        default:
          throw new errorWithCode_1.ErrorWithCode("Unknown certificate type. Type is determined based on file extension. " + "Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
      }
    }
  }
  async function getCredentials(keyFilePath) {
    const provider = CredentialsProviderFactory.create(keyFilePath);
    return provider.getCredentials();
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/tokenHandler.js
var require_tokenHandler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TokenHandler = undefined;
  var getToken_1 = require_getToken();
  var getCredentials_1 = require_getCredentials();

  class TokenHandler {
    token;
    tokenExpiresAt;
    inFlightRequest;
    tokenOptions;
    constructor(tokenOptions) {
      this.tokenOptions = tokenOptions;
    }
    async processCredentials() {
      if (!this.tokenOptions.key && !this.tokenOptions.keyFile) {
        throw new Error("No key or keyFile set.");
      }
      if (!this.tokenOptions.key && this.tokenOptions.keyFile) {
        const credentials = await (0, getCredentials_1.getCredentials)(this.tokenOptions.keyFile);
        this.tokenOptions.key = credentials.privateKey;
        this.tokenOptions.email = credentials.clientEmail;
      }
    }
    isTokenExpiring() {
      if (!this.token || !this.tokenExpiresAt) {
        return true;
      }
      const now = new Date().getTime();
      const eagerRefreshThresholdMillis = this.tokenOptions.eagerRefreshThresholdMillis ?? 0;
      return this.tokenExpiresAt <= now + eagerRefreshThresholdMillis;
    }
    hasExpired() {
      const now = new Date().getTime();
      if (this.token && this.tokenExpiresAt) {
        const now2 = new Date().getTime();
        return now2 >= this.tokenExpiresAt;
      }
      return true;
    }
    async getToken(forceRefresh) {
      await this.processCredentials();
      if (this.inFlightRequest && !forceRefresh) {
        return this.inFlightRequest;
      }
      if (this.token && !this.isTokenExpiring() && !forceRefresh) {
        return this.token;
      }
      try {
        this.inFlightRequest = (0, getToken_1.getToken)(this.tokenOptions);
        const token = await this.inFlightRequest;
        this.token = token;
        this.tokenExpiresAt = new Date().getTime() + (token.expires_in ?? 0) * 1000;
        return token;
      } finally {
        this.inFlightRequest = undefined;
      }
    }
  }
  exports.TokenHandler = TokenHandler;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/revokeToken.js
var require_revokeToken = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.revokeToken = revokeToken;
  var GOOGLE_REVOKE_TOKEN_URL = "https://oauth2.googleapis.com/revoke?token=";
  var DEFAULT_RETRY_VALUE = true;
  async function revokeToken(accessToken, transporter) {
    const url = GOOGLE_REVOKE_TOKEN_URL + accessToken;
    return await transporter.request({
      url,
      retry: DEFAULT_RETRY_VALUE
    });
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/gtoken/googleToken.js
var require_googleToken = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GoogleToken = undefined;
  var gaxios_1 = require_src();
  var tokenHandler_1 = require_tokenHandler();
  var revokeToken_1 = require_revokeToken();

  class GoogleToken {
    tokenOptions;
    tokenHandler;
    constructor(options) {
      this.tokenOptions = options || {};
      this.tokenOptions.transporter = this.tokenOptions.transporter || {
        request: (opts) => (0, gaxios_1.request)(opts)
      };
      if (!this.tokenOptions.iss) {
        this.tokenOptions.iss = this.tokenOptions.email;
      }
      if (typeof this.tokenOptions.scope === "object") {
        this.tokenOptions.scope = this.tokenOptions.scope.join(" ");
      }
      this.tokenHandler = new tokenHandler_1.TokenHandler(this.tokenOptions);
    }
    get expiresAt() {
      return this.tokenHandler.tokenExpiresAt;
    }
    get accessToken() {
      return this.tokenHandler.token?.access_token;
    }
    get idToken() {
      return this.tokenHandler.token?.id_token;
    }
    get tokenType() {
      return this.tokenHandler.token?.token_type;
    }
    get refreshToken() {
      return this.tokenHandler.token?.refresh_token;
    }
    hasExpired() {
      return this.tokenHandler.hasExpired();
    }
    isTokenExpiring() {
      return this.tokenHandler.isTokenExpiring();
    }
    getToken(callbackOrOptions, opts = { forceRefresh: false }) {
      let callback;
      if (typeof callbackOrOptions === "function") {
        callback = callbackOrOptions;
      } else if (typeof callbackOrOptions === "object") {
        opts = callbackOrOptions;
      }
      const promise = this.tokenHandler.getToken(opts.forceRefresh ?? false);
      if (callback) {
        promise.then((token) => callback(null, token), callback);
      }
      return promise;
    }
    revokeToken(callback) {
      if (!this.accessToken) {
        return Promise.reject(new Error("No token to revoke."));
      }
      const promise = (0, revokeToken_1.revokeToken)(this.accessToken, this.tokenOptions.transporter);
      if (callback) {
        promise.then(() => callback(), callback);
      }
      this.tokenHandler = new tokenHandler_1.TokenHandler(this.tokenOptions);
    }
    get googleTokenOptions() {
      return this.tokenOptions;
    }
  }
  exports.GoogleToken = GoogleToken;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/jwtaccess.js
var require_jwtaccess = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JWTAccess = undefined;
  var jws = require_jws();
  var util_1 = require_util2();
  var DEFAULT_HEADER = {
    alg: "RS256",
    typ: "JWT"
  };

  class JWTAccess {
    email;
    key;
    keyId;
    projectId;
    eagerRefreshThresholdMillis;
    cache = new util_1.LRUCache({
      capacity: 500,
      maxAge: 60 * 60 * 1000
    });
    constructor(email, key, keyId, eagerRefreshThresholdMillis) {
      this.email = email;
      this.key = key;
      this.keyId = keyId;
      this.eagerRefreshThresholdMillis = eagerRefreshThresholdMillis ?? 5 * 60 * 1000;
    }
    getCachedKey(url, scopes) {
      let cacheKey = url;
      if (scopes && Array.isArray(scopes) && scopes.length) {
        cacheKey = url ? `${url}_${scopes.join("_")}` : `${scopes.join("_")}`;
      } else if (typeof scopes === "string") {
        cacheKey = url ? `${url}_${scopes}` : scopes;
      }
      if (!cacheKey) {
        throw Error("Scopes or url must be provided");
      }
      return cacheKey;
    }
    getRequestHeaders(url, additionalClaims, scopes) {
      const key = this.getCachedKey(url, scopes);
      const cachedToken = this.cache.get(key);
      const now = Date.now();
      if (cachedToken && cachedToken.expiration - now > this.eagerRefreshThresholdMillis) {
        return new Headers(cachedToken.headers);
      }
      const iat = Math.floor(Date.now() / 1000);
      const exp = JWTAccess.getExpirationTime(iat);
      let defaultClaims;
      if (Array.isArray(scopes)) {
        scopes = scopes.join(" ");
      }
      if (scopes) {
        defaultClaims = {
          iss: this.email,
          sub: this.email,
          scope: scopes,
          exp,
          iat
        };
      } else {
        defaultClaims = {
          iss: this.email,
          sub: this.email,
          aud: url,
          exp,
          iat
        };
      }
      if (additionalClaims) {
        for (const claim in defaultClaims) {
          if (additionalClaims[claim]) {
            throw new Error(`The '${claim}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
          }
        }
      }
      const header = this.keyId ? { ...DEFAULT_HEADER, kid: this.keyId } : DEFAULT_HEADER;
      const payload = Object.assign(defaultClaims, additionalClaims);
      const signedJWT = jws.sign({ header, payload, secret: this.key });
      const headers = new Headers({ authorization: `Bearer ${signedJWT}` });
      this.cache.set(key, {
        expiration: exp * 1000,
        headers
      });
      return headers;
    }
    static getExpirationTime(iat) {
      const exp = iat + 3600;
      return exp;
    }
    fromJSON(json) {
      if (!json) {
        throw new Error("Must pass in a JSON object containing the service account auth settings.");
      }
      if (!json.client_email) {
        throw new Error("The incoming JSON object does not contain a client_email field");
      }
      if (!json.private_key) {
        throw new Error("The incoming JSON object does not contain a private_key field");
      }
      this.email = json.client_email;
      this.key = json.private_key;
      this.keyId = json.private_key_id;
      this.projectId = json.project_id;
    }
    fromStream(inputStream, callback) {
      if (callback) {
        this.fromStreamAsync(inputStream).then(() => callback(), callback);
      } else {
        return this.fromStreamAsync(inputStream);
      }
    }
    fromStreamAsync(inputStream) {
      return new Promise((resolve, reject) => {
        if (!inputStream) {
          reject(new Error("Must pass in a stream containing the service account auth settings."));
        }
        let s = "";
        inputStream.setEncoding("utf8").on("data", (chunk) => s += chunk).on("error", reject).on("end", () => {
          try {
            const data = JSON.parse(s);
            this.fromJSON(data);
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      });
    }
  }
  exports.JWTAccess = JWTAccess;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/jwtclient.js
var require_jwtclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JWT = undefined;
  var googleToken_1 = require_googleToken();
  var getCredentials_1 = require_getCredentials();
  var jwtaccess_1 = require_jwtaccess();
  var oauth2client_1 = require_oauth2client();
  var authclient_1 = require_authclient();

  class JWT extends oauth2client_1.OAuth2Client {
    email;
    keyFile;
    key;
    keyId;
    defaultScopes;
    scopes;
    scope;
    subject;
    gtoken;
    additionalClaims;
    useJWTAccessWithScope;
    defaultServicePath;
    access;
    constructor(options = {}) {
      super(options);
      this.email = options.email;
      this.keyFile = options.keyFile;
      this.key = options.key;
      this.keyId = options.keyId;
      this.scopes = options.scopes;
      this.subject = options.subject;
      this.additionalClaims = options.additionalClaims;
      this.credentials = { refresh_token: "jwt-placeholder", expiry_date: 1 };
    }
    createScoped(scopes) {
      const jwt = new JWT(this);
      jwt.scopes = scopes;
      return jwt;
    }
    async getRequestMetadataAsync(url) {
      url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
      const useSelfSignedJWT = !this.hasUserScopes() && url || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
      if (this.subject && this.universeDomain !== authclient_1.DEFAULT_UNIVERSE) {
        throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${authclient_1.DEFAULT_UNIVERSE}`);
      }
      if (!this.apiKey && useSelfSignedJWT) {
        if (this.additionalClaims && this.additionalClaims.target_audience) {
          const { tokens } = await this.refreshToken();
          return {
            headers: this.addSharedMetadataHeaders(new Headers({
              authorization: `Bearer ${tokens.id_token}`
            }))
          };
        } else {
          if (!this.access) {
            this.access = new jwtaccess_1.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
          }
          let scopes;
          if (this.hasUserScopes()) {
            scopes = this.scopes;
          } else if (!url) {
            scopes = this.defaultScopes;
          }
          const useScopes = this.useJWTAccessWithScope || this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
          const headers = await this.access.getRequestHeaders(url ?? undefined, this.additionalClaims, useScopes ? scopes : undefined);
          return { headers: this.addSharedMetadataHeaders(headers) };
        }
      } else if (this.hasAnyScopes() || this.apiKey) {
        return super.getRequestMetadataAsync(url);
      } else {
        return { headers: new Headers };
      }
    }
    async fetchIdToken(targetAudience) {
      const gtoken = new googleToken_1.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: { target_audience: targetAudience },
        transporter: this.transporter
      });
      await gtoken.getToken({
        forceRefresh: true
      });
      if (!gtoken.idToken) {
        throw new Error("Unknown error: Failed to fetch ID token");
      }
      return gtoken.idToken;
    }
    hasUserScopes() {
      if (!this.scopes) {
        return false;
      }
      return this.scopes.length > 0;
    }
    hasAnyScopes() {
      if (this.scopes && this.scopes.length > 0)
        return true;
      if (this.defaultScopes && this.defaultScopes.length > 0)
        return true;
      return false;
    }
    authorize(callback) {
      if (callback) {
        this.authorizeAsync().then((r) => callback(null, r), callback);
      } else {
        return this.authorizeAsync();
      }
    }
    async authorizeAsync() {
      const result = await this.refreshToken();
      if (!result) {
        throw new Error("No result returned");
      }
      this.credentials = result.tokens;
      this.credentials.refresh_token = "jwt-placeholder";
      this.key = this.gtoken.googleTokenOptions?.key;
      this.email = this.gtoken.googleTokenOptions?.iss;
      return result.tokens;
    }
    async refreshTokenNoCache() {
      const gtoken = this.createGToken();
      const token = await gtoken.getToken({
        forceRefresh: this.isTokenExpiring()
      });
      const tokens = {
        access_token: token.access_token,
        token_type: "Bearer",
        expiry_date: gtoken.expiresAt,
        id_token: gtoken.idToken
      };
      this.emit("tokens", tokens);
      return { res: null, tokens };
    }
    createGToken() {
      if (!this.gtoken) {
        this.gtoken = new googleToken_1.GoogleToken({
          iss: this.email,
          sub: this.subject,
          scope: this.scopes || this.defaultScopes,
          keyFile: this.keyFile,
          key: this.key,
          additionalClaims: this.additionalClaims,
          transporter: this.transporter
        });
      }
      return this.gtoken;
    }
    fromJSON(json) {
      if (!json) {
        throw new Error("Must pass in a JSON object containing the service account auth settings.");
      }
      if (!json.client_email) {
        throw new Error("The incoming JSON object does not contain a client_email field");
      }
      if (!json.private_key) {
        throw new Error("The incoming JSON object does not contain a private_key field");
      }
      this.email = json.client_email;
      this.key = json.private_key;
      this.keyId = json.private_key_id;
      this.projectId = json.project_id;
      this.quotaProjectId = json.quota_project_id;
      this.universeDomain = json.universe_domain || this.universeDomain;
    }
    fromStream(inputStream, callback) {
      if (callback) {
        this.fromStreamAsync(inputStream).then(() => callback(), callback);
      } else {
        return this.fromStreamAsync(inputStream);
      }
    }
    fromStreamAsync(inputStream) {
      return new Promise((resolve, reject) => {
        if (!inputStream) {
          throw new Error("Must pass in a stream containing the service account auth settings.");
        }
        let s = "";
        inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
          try {
            const data = JSON.parse(s);
            this.fromJSON(data);
            resolve();
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    fromAPIKey(apiKey) {
      if (typeof apiKey !== "string") {
        throw new Error("Must provide an API Key string.");
      }
      this.apiKey = apiKey;
    }
    async getCredentials() {
      if (this.key) {
        return { private_key: this.key, client_email: this.email };
      } else if (this.keyFile) {
        const gtoken = this.createGToken();
        const creds = await (0, getCredentials_1.getCredentials)(this.keyFile);
        return { private_key: creds.privateKey, client_email: creds.clientEmail };
      }
      throw new Error("A key or a keyFile must be provided to getCredentials.");
    }
  }
  exports.JWT = JWT;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/refreshclient.js
var require_refreshclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UserRefreshClient = exports.USER_REFRESH_ACCOUNT_TYPE = undefined;
  var oauth2client_1 = require_oauth2client();
  var authclient_1 = require_authclient();
  exports.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";

  class UserRefreshClient extends oauth2client_1.OAuth2Client {
    _refreshToken;
    constructor(optionsOrClientId, clientSecret, refreshToken, eagerRefreshThresholdMillis, forceRefreshOnFailure) {
      const opts = optionsOrClientId && typeof optionsOrClientId === "object" ? optionsOrClientId : {
        clientId: optionsOrClientId,
        clientSecret,
        refreshToken,
        eagerRefreshThresholdMillis,
        forceRefreshOnFailure
      };
      super(opts);
      this._refreshToken = opts.refreshToken;
      this.credentials.refresh_token = opts.refreshToken;
    }
    async refreshTokenNoCache() {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(targetAudience) {
      const opts = {
        ...UserRefreshClient.RETRY_CONFIG,
        url: this.endpoints.oauth2TokenUrl,
        method: "POST",
        data: new URLSearchParams({
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token",
          refresh_token: this._refreshToken,
          target_audience: targetAudience
        }),
        responseType: "json"
      };
      authclient_1.AuthClient.setMethodName(opts, "fetchIdToken");
      const res = await this.transporter.request(opts);
      return res.data.id_token;
    }
    fromJSON(json) {
      if (!json) {
        throw new Error("Must pass in a JSON object containing the user refresh token");
      }
      if (json.type !== "authorized_user") {
        throw new Error('The incoming JSON object does not have the "authorized_user" type');
      }
      if (!json.client_id) {
        throw new Error("The incoming JSON object does not contain a client_id field");
      }
      if (!json.client_secret) {
        throw new Error("The incoming JSON object does not contain a client_secret field");
      }
      if (!json.refresh_token) {
        throw new Error("The incoming JSON object does not contain a refresh_token field");
      }
      this._clientId = json.client_id;
      this._clientSecret = json.client_secret;
      this._refreshToken = json.refresh_token;
      this.credentials.refresh_token = json.refresh_token;
      this.quotaProjectId = json.quota_project_id;
      this.universeDomain = json.universe_domain || this.universeDomain;
    }
    fromStream(inputStream, callback) {
      if (callback) {
        this.fromStreamAsync(inputStream).then(() => callback(), callback);
      } else {
        return this.fromStreamAsync(inputStream);
      }
    }
    async fromStreamAsync(inputStream) {
      return new Promise((resolve, reject) => {
        if (!inputStream) {
          return reject(new Error("Must pass in a stream containing the user refresh token."));
        }
        let s = "";
        inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => s += chunk).on("end", () => {
          try {
            const data = JSON.parse(s);
            this.fromJSON(data);
            return resolve();
          } catch (err) {
            return reject(err);
          }
        });
      });
    }
    static fromJSON(json) {
      const client = new UserRefreshClient;
      client.fromJSON(json);
      return client;
    }
  }
  exports.UserRefreshClient = UserRefreshClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/impersonated.js
var require_impersonated = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Impersonated = exports.IMPERSONATED_ACCOUNT_TYPE = undefined;
  var oauth2client_1 = require_oauth2client();
  var gaxios_1 = require_src();
  var util_1 = require_util2();
  exports.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";

  class Impersonated extends oauth2client_1.OAuth2Client {
    sourceClient;
    targetPrincipal;
    targetScopes;
    delegates;
    lifetime;
    endpoint;
    constructor(options = {}) {
      super(options);
      this.credentials = {
        expiry_date: 1,
        refresh_token: "impersonated-placeholder"
      };
      this.sourceClient = options.sourceClient ?? new oauth2client_1.OAuth2Client;
      this.targetPrincipal = options.targetPrincipal ?? "";
      this.delegates = options.delegates ?? [];
      this.targetScopes = options.targetScopes ?? [];
      this.lifetime = options.lifetime ?? 3600;
      const usingExplicitUniverseDomain = !!(0, util_1.originalOrCamelOptions)(options).get("universe_domain");
      if (!usingExplicitUniverseDomain) {
        this.universeDomain = this.sourceClient.universeDomain;
      } else if (this.sourceClient.universeDomain !== this.universeDomain) {
        throw new RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
      }
      this.endpoint = options.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
    }
    async sign(blobToSign) {
      await this.sourceClient.getAccessToken();
      const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
      const u = `${this.endpoint}/v1/${name}:signBlob`;
      const body = {
        delegates: this.delegates,
        payload: Buffer.from(blobToSign).toString("base64")
      };
      const res = await this.sourceClient.request({
        ...Impersonated.RETRY_CONFIG,
        url: u,
        data: body,
        method: "POST"
      });
      return res.data;
    }
    getTargetPrincipal() {
      return this.targetPrincipal;
    }
    async refreshToken() {
      try {
        await this.sourceClient.getAccessToken();
        const name = "projects/-/serviceAccounts/" + this.targetPrincipal;
        const u = `${this.endpoint}/v1/${name}:generateAccessToken`;
        const body = {
          delegates: this.delegates,
          scope: this.targetScopes,
          lifetime: this.lifetime + "s"
        };
        const res = await this.sourceClient.request({
          ...Impersonated.RETRY_CONFIG,
          url: u,
          data: body,
          method: "POST"
        });
        const tokenResponse = res.data;
        this.credentials.access_token = tokenResponse.accessToken;
        this.credentials.expiry_date = Date.parse(tokenResponse.expireTime);
        return {
          tokens: this.credentials,
          res
        };
      } catch (error) {
        if (!(error instanceof Error))
          throw error;
        let status = 0;
        let message = "";
        if (error instanceof gaxios_1.GaxiosError) {
          status = error?.response?.data?.error?.status;
          message = error?.response?.data?.error?.message;
        }
        if (status && message) {
          error.message = `${status}: unable to impersonate: ${message}`;
          throw error;
        } else {
          error.message = `unable to impersonate: ${error}`;
          throw error;
        }
      }
    }
    async fetchIdToken(targetAudience, options) {
      await this.sourceClient.getAccessToken();
      const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
      const u = `${this.endpoint}/v1/${name}:generateIdToken`;
      const body = {
        delegates: this.delegates,
        audience: targetAudience,
        includeEmail: options?.includeEmail ?? true,
        useEmailAzp: options?.includeEmail ?? true
      };
      const res = await this.sourceClient.request({
        ...Impersonated.RETRY_CONFIG,
        url: u,
        data: body,
        method: "POST"
      });
      return res.data.token;
    }
  }
  exports.Impersonated = Impersonated;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/oauth2common.js
var require_oauth2common = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OAuthClientAuthHandler = undefined;
  exports.getErrorFromOAuthErrorResponse = getErrorFromOAuthErrorResponse;
  var gaxios_1 = require_src();
  var crypto_1 = require_crypto3();
  var METHODS_SUPPORTING_REQUEST_BODY = ["PUT", "POST", "PATCH"];

  class OAuthClientAuthHandler {
    #crypto = (0, crypto_1.createCrypto)();
    #clientAuthentication;
    transporter;
    constructor(options) {
      if (options && "clientId" in options) {
        this.#clientAuthentication = options;
        this.transporter = new gaxios_1.Gaxios;
      } else {
        this.#clientAuthentication = options?.clientAuthentication;
        this.transporter = options?.transporter || new gaxios_1.Gaxios;
      }
    }
    applyClientAuthenticationOptions(opts, bearerToken) {
      opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
      this.injectAuthenticatedHeaders(opts, bearerToken);
      if (!bearerToken) {
        this.injectAuthenticatedRequestBody(opts);
      }
    }
    injectAuthenticatedHeaders(opts, bearerToken) {
      if (bearerToken) {
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers, {
          authorization: `Bearer ${bearerToken}`
        });
      } else if (this.#clientAuthentication?.confidentialClientType === "basic") {
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
        const clientId = this.#clientAuthentication.clientId;
        const clientSecret = this.#clientAuthentication.clientSecret || "";
        const base64EncodedCreds = this.#crypto.encodeBase64StringUtf8(`${clientId}:${clientSecret}`);
        gaxios_1.Gaxios.mergeHeaders(opts.headers, {
          authorization: `Basic ${base64EncodedCreds}`
        });
      }
    }
    injectAuthenticatedRequestBody(opts) {
      if (this.#clientAuthentication?.confidentialClientType === "request-body") {
        const method = (opts.method || "GET").toUpperCase();
        if (!METHODS_SUPPORTING_REQUEST_BODY.includes(method)) {
          throw new Error(`${method} HTTP method does not support ` + `${this.#clientAuthentication.confidentialClientType} ` + "client authentication");
        }
        const headers = new Headers(opts.headers);
        const contentType = headers.get("content-type");
        if (contentType?.startsWith("application/x-www-form-urlencoded") || opts.data instanceof URLSearchParams) {
          const data = new URLSearchParams(opts.data ?? "");
          data.append("client_id", this.#clientAuthentication.clientId);
          data.append("client_secret", this.#clientAuthentication.clientSecret || "");
          opts.data = data;
        } else if (contentType?.startsWith("application/json")) {
          opts.data = opts.data || {};
          Object.assign(opts.data, {
            client_id: this.#clientAuthentication.clientId,
            client_secret: this.#clientAuthentication.clientSecret || ""
          });
        } else {
          throw new Error(`${contentType} content-types are not supported with ` + `${this.#clientAuthentication.confidentialClientType} ` + "client authentication");
        }
      }
    }
    static get RETRY_CONFIG() {
      return {
        retry: true,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      };
    }
  }
  exports.OAuthClientAuthHandler = OAuthClientAuthHandler;
  function getErrorFromOAuthErrorResponse(resp, err) {
    const errorCode = resp.error;
    const errorDescription = resp.error_description;
    const errorUri = resp.error_uri;
    let message = `Error code ${errorCode}`;
    if (typeof errorDescription !== "undefined") {
      message += `: ${errorDescription}`;
    }
    if (typeof errorUri !== "undefined") {
      message += ` - ${errorUri}`;
    }
    const newError = new Error(message);
    if (err) {
      const keys = Object.keys(err);
      if (err.stack) {
        keys.push("stack");
      }
      keys.forEach((key) => {
        if (key !== "message") {
          Object.defineProperty(newError, key, {
            value: err[key],
            writable: false,
            enumerable: true
          });
        }
      });
    }
    return newError;
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/stscredentials.js
var require_stscredentials = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StsCredentials = undefined;
  var gaxios_1 = require_src();
  var authclient_1 = require_authclient();
  var oauth2common_1 = require_oauth2common();
  var util_1 = require_util2();

  class StsCredentials extends oauth2common_1.OAuthClientAuthHandler {
    #tokenExchangeEndpoint;
    constructor(options = {
      tokenExchangeEndpoint: ""
    }, clientAuthentication) {
      if (typeof options !== "object" || options instanceof URL) {
        options = {
          tokenExchangeEndpoint: options,
          clientAuthentication
        };
      }
      super(options);
      this.#tokenExchangeEndpoint = options.tokenExchangeEndpoint;
    }
    async exchangeToken(stsCredentialsOptions, headers, options) {
      const values = {
        grant_type: stsCredentialsOptions.grantType,
        resource: stsCredentialsOptions.resource,
        audience: stsCredentialsOptions.audience,
        scope: stsCredentialsOptions.scope?.join(" "),
        requested_token_type: stsCredentialsOptions.requestedTokenType,
        subject_token: stsCredentialsOptions.subjectToken,
        subject_token_type: stsCredentialsOptions.subjectTokenType,
        actor_token: stsCredentialsOptions.actingParty?.actorToken,
        actor_token_type: stsCredentialsOptions.actingParty?.actorTokenType,
        options: options && JSON.stringify(options)
      };
      const opts = {
        ...StsCredentials.RETRY_CONFIG,
        url: this.#tokenExchangeEndpoint.toString(),
        method: "POST",
        headers,
        data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(values)),
        responseType: "json"
      };
      authclient_1.AuthClient.setMethodName(opts, "exchangeToken");
      this.applyClientAuthenticationOptions(opts);
      try {
        const response = await this.transporter.request(opts);
        const stsSuccessfulResponse = response.data;
        stsSuccessfulResponse.res = response;
        return stsSuccessfulResponse;
      } catch (error) {
        if (error instanceof gaxios_1.GaxiosError && error.response) {
          throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(error.response.data, error);
        }
        throw error;
      }
    }
  }
  exports.StsCredentials = StsCredentials;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/baseexternalclient.js
var require_baseexternalclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseExternalAccountClient = exports.CLOUD_RESOURCE_MANAGER = exports.EXTERNAL_ACCOUNT_TYPE = exports.EXPIRATION_TIME_OFFSET = undefined;
  var gaxios_1 = require_src();
  var stream = __require("stream");
  var authclient_1 = require_authclient();
  var sts = require_stscredentials();
  var util_1 = require_util2();
  var shared_cjs_1 = require_shared2();
  var STS_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
  var STS_REQUEST_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
  var DEFAULT_OAUTH_SCOPE = "https://www.googleapis.com/auth/cloud-platform";
  var DEFAULT_TOKEN_LIFESPAN = 3600;
  exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;
  exports.EXTERNAL_ACCOUNT_TYPE = "external_account";
  exports.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
  var WORKFORCE_AUDIENCE_PATTERN = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+";
  var DEFAULT_TOKEN_URL = "https://sts.{universeDomain}/v1/token";

  class BaseExternalAccountClient extends authclient_1.AuthClient {
    scopes;
    projectNumber;
    audience;
    subjectTokenType;
    stsCredential;
    clientAuth;
    credentialSourceType;
    cachedAccessToken;
    serviceAccountImpersonationUrl;
    serviceAccountImpersonationLifetime;
    workforcePoolUserProject;
    configLifetimeRequested;
    tokenUrl;
    cloudResourceManagerURL;
    supplierContext;
    #pendingAccessToken = null;
    constructor(options) {
      super(options);
      const opts = (0, util_1.originalOrCamelOptions)(options);
      const type = opts.get("type");
      if (type && type !== exports.EXTERNAL_ACCOUNT_TYPE) {
        throw new Error(`Expected "${exports.EXTERNAL_ACCOUNT_TYPE}" type but ` + `received "${options.type}"`);
      }
      const clientId = opts.get("client_id");
      const clientSecret = opts.get("client_secret");
      this.tokenUrl = opts.get("token_url") ?? DEFAULT_TOKEN_URL.replace("{universeDomain}", this.universeDomain);
      const subjectTokenType = opts.get("subject_token_type");
      const workforcePoolUserProject = opts.get("workforce_pool_user_project");
      const serviceAccountImpersonationUrl = opts.get("service_account_impersonation_url");
      const serviceAccountImpersonation = opts.get("service_account_impersonation");
      const serviceAccountImpersonationLifetime = (0, util_1.originalOrCamelOptions)(serviceAccountImpersonation).get("token_lifetime_seconds");
      this.cloudResourceManagerURL = new URL(opts.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`);
      if (clientId) {
        this.clientAuth = {
          confidentialClientType: "basic",
          clientId,
          clientSecret
        };
      }
      this.stsCredential = new sts.StsCredentials({
        tokenExchangeEndpoint: this.tokenUrl,
        clientAuthentication: this.clientAuth
      });
      this.scopes = opts.get("scopes") || [DEFAULT_OAUTH_SCOPE];
      this.cachedAccessToken = null;
      this.audience = opts.get("audience");
      this.subjectTokenType = subjectTokenType;
      this.workforcePoolUserProject = workforcePoolUserProject;
      const workforceAudiencePattern = new RegExp(WORKFORCE_AUDIENCE_PATTERN);
      if (this.workforcePoolUserProject && !this.audience.match(workforceAudiencePattern)) {
        throw new Error("workforcePoolUserProject should not be set for non-workforce pool " + "credentials.");
      }
      this.serviceAccountImpersonationUrl = serviceAccountImpersonationUrl;
      this.serviceAccountImpersonationLifetime = serviceAccountImpersonationLifetime;
      if (this.serviceAccountImpersonationLifetime) {
        this.configLifetimeRequested = true;
      } else {
        this.configLifetimeRequested = false;
        this.serviceAccountImpersonationLifetime = DEFAULT_TOKEN_LIFESPAN;
      }
      this.projectNumber = this.getProjectNumber(this.audience);
      this.supplierContext = {
        audience: this.audience,
        subjectTokenType: this.subjectTokenType,
        transporter: this.transporter
      };
    }
    getServiceAccountEmail() {
      if (this.serviceAccountImpersonationUrl) {
        if (this.serviceAccountImpersonationUrl.length > 256) {
          throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
        }
        const re = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/;
        const result = re.exec(this.serviceAccountImpersonationUrl);
        return result?.groups?.email || null;
      }
      return null;
    }
    setCredentials(credentials) {
      super.setCredentials(credentials);
      this.cachedAccessToken = credentials;
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
        await this.refreshAccessTokenAsync();
      }
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      };
    }
    async getRequestHeaders() {
      const accessTokenResponse = await this.getAccessToken();
      const headers = new Headers({
        authorization: `Bearer ${accessTokenResponse.token}`
      });
      return this.addSharedMetadataHeaders(headers);
    }
    request(opts, callback) {
      if (callback) {
        this.requestAsync(opts).then((r) => callback(null, r), (e) => {
          return callback(e, e.response);
        });
      } else {
        return this.requestAsync(opts);
      }
    }
    async getProjectId() {
      const projectNumber = this.projectNumber || this.workforcePoolUserProject;
      if (this.projectId) {
        return this.projectId;
      } else if (projectNumber) {
        const headers = await this.getRequestHeaders();
        const opts = {
          ...BaseExternalAccountClient.RETRY_CONFIG,
          headers,
          url: `${this.cloudResourceManagerURL.toString()}${projectNumber}`,
          responseType: "json"
        };
        authclient_1.AuthClient.setMethodName(opts, "getProjectId");
        const response = await this.transporter.request(opts);
        this.projectId = response.data.projectId;
        return this.projectId;
      }
      return null;
    }
    async requestAsync(opts, reAuthRetried = false) {
      let response;
      try {
        const requestHeaders = await this.getRequestHeaders();
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
        this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
        response = await this.transporter.request(opts);
      } catch (e) {
        const res = e.response;
        if (res) {
          const statusCode = res.status;
          const isReadableStream = res.config.data instanceof stream.Readable;
          const isAuthErr = statusCode === 401 || statusCode === 403;
          if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
            await this.refreshAccessTokenAsync();
            return await this.requestAsync(opts, true);
          }
        }
        throw e;
      }
      return response;
    }
    async refreshAccessTokenAsync() {
      this.#pendingAccessToken = this.#pendingAccessToken || this.#internalRefreshAccessTokenAsync();
      try {
        return await this.#pendingAccessToken;
      } finally {
        this.#pendingAccessToken = null;
      }
    }
    async#internalRefreshAccessTokenAsync() {
      const subjectToken = await this.retrieveSubjectToken();
      const stsCredentialsOptions = {
        grantType: STS_GRANT_TYPE,
        audience: this.audience,
        requestedTokenType: STS_REQUEST_TOKEN_TYPE,
        subjectToken,
        subjectTokenType: this.subjectTokenType,
        scope: this.serviceAccountImpersonationUrl ? [DEFAULT_OAUTH_SCOPE] : this.getScopesArray()
      };
      const additionalOptions = !this.clientAuth && this.workforcePoolUserProject ? { userProject: this.workforcePoolUserProject } : undefined;
      const additionalHeaders = new Headers({
        "x-goog-api-client": this.getMetricsHeaderValue()
      });
      const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, additionalHeaders, additionalOptions);
      if (this.serviceAccountImpersonationUrl) {
        this.cachedAccessToken = await this.getImpersonatedAccessToken(stsResponse.access_token);
      } else if (stsResponse.expires_in) {
        this.cachedAccessToken = {
          access_token: stsResponse.access_token,
          expiry_date: new Date().getTime() + stsResponse.expires_in * 1000,
          res: stsResponse.res
        };
      } else {
        this.cachedAccessToken = {
          access_token: stsResponse.access_token,
          res: stsResponse.res
        };
      }
      this.credentials = {};
      Object.assign(this.credentials, this.cachedAccessToken);
      delete this.credentials.res;
      this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedAccessToken.expiry_date,
        access_token: this.cachedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      });
      return this.cachedAccessToken;
    }
    getProjectNumber(audience) {
      const match = audience.match(/\/projects\/([^/]+)/);
      if (!match) {
        return null;
      }
      return match[1];
    }
    async getImpersonatedAccessToken(token) {
      const opts = {
        ...BaseExternalAccountClient.RETRY_CONFIG,
        url: this.serviceAccountImpersonationUrl,
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`
        },
        data: {
          scope: this.getScopesArray(),
          lifetime: this.serviceAccountImpersonationLifetime + "s"
        },
        responseType: "json"
      };
      authclient_1.AuthClient.setMethodName(opts, "getImpersonatedAccessToken");
      const response = await this.transporter.request(opts);
      const successResponse = response.data;
      return {
        access_token: successResponse.accessToken,
        expiry_date: new Date(successResponse.expireTime).getTime(),
        res: response
      };
    }
    isExpired(accessToken) {
      const now = new Date().getTime();
      return accessToken.expiry_date ? now >= accessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
    getScopesArray() {
      if (typeof this.scopes === "string") {
        return [this.scopes];
      }
      return this.scopes || [DEFAULT_OAUTH_SCOPE];
    }
    getMetricsHeaderValue() {
      const nodeVersion = process.version.replace(/^v/, "");
      const saImpersonation = this.serviceAccountImpersonationUrl !== undefined;
      const credentialSourceType = this.credentialSourceType ? this.credentialSourceType : "unknown";
      return `gl-node/${nodeVersion} auth/${shared_cjs_1.pkg.version} google-byoid-sdk source/${credentialSourceType} sa-impersonation/${saImpersonation} config-lifetime/${this.configLifetimeRequested}`;
    }
    getTokenUrl() {
      return this.tokenUrl;
    }
  }
  exports.BaseExternalAccountClient = BaseExternalAccountClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/filesubjecttokensupplier.js
var require_filesubjecttokensupplier = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.FileSubjectTokenSupplier = undefined;
  var util_1 = __require("util");
  var fs = __require("fs");
  var readFile = (0, util_1.promisify)(fs.readFile ?? (() => {}));
  var realpath = (0, util_1.promisify)(fs.realpath ?? (() => {}));
  var lstat = (0, util_1.promisify)(fs.lstat ?? (() => {}));

  class FileSubjectTokenSupplier {
    filePath;
    formatType;
    subjectTokenFieldName;
    constructor(opts) {
      this.filePath = opts.filePath;
      this.formatType = opts.formatType;
      this.subjectTokenFieldName = opts.subjectTokenFieldName;
    }
    async getSubjectToken() {
      let parsedFilePath = this.filePath;
      try {
        parsedFilePath = await realpath(parsedFilePath);
        if (!(await lstat(parsedFilePath)).isFile()) {
          throw new Error;
        }
      } catch (err) {
        if (err instanceof Error) {
          err.message = `The file at ${parsedFilePath} does not exist, or it is not a file. ${err.message}`;
        }
        throw err;
      }
      let subjectToken;
      const rawText = await readFile(parsedFilePath, { encoding: "utf8" });
      if (this.formatType === "text") {
        subjectToken = rawText;
      } else if (this.formatType === "json" && this.subjectTokenFieldName) {
        const json = JSON.parse(rawText);
        subjectToken = json[this.subjectTokenFieldName];
      }
      if (!subjectToken) {
        throw new Error("Unable to parse the subject_token from the credential_source file");
      }
      return subjectToken;
    }
  }
  exports.FileSubjectTokenSupplier = FileSubjectTokenSupplier;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/urlsubjecttokensupplier.js
var require_urlsubjecttokensupplier = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UrlSubjectTokenSupplier = undefined;
  var authclient_1 = require_authclient();

  class UrlSubjectTokenSupplier {
    url;
    headers;
    formatType;
    subjectTokenFieldName;
    additionalGaxiosOptions;
    constructor(opts) {
      this.url = opts.url;
      this.formatType = opts.formatType;
      this.subjectTokenFieldName = opts.subjectTokenFieldName;
      this.headers = opts.headers;
      this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
    }
    async getSubjectToken(context) {
      const opts = {
        ...this.additionalGaxiosOptions,
        url: this.url,
        method: "GET",
        headers: this.headers,
        responseType: this.formatType
      };
      authclient_1.AuthClient.setMethodName(opts, "getSubjectToken");
      let subjectToken;
      if (this.formatType === "text") {
        const response = await context.transporter.request(opts);
        subjectToken = response.data;
      } else if (this.formatType === "json" && this.subjectTokenFieldName) {
        const response = await context.transporter.request(opts);
        subjectToken = response.data[this.subjectTokenFieldName];
      }
      if (!subjectToken) {
        throw new Error("Unable to parse the subject_token from the credential_source URL");
      }
      return subjectToken;
    }
  }
  exports.UrlSubjectTokenSupplier = UrlSubjectTokenSupplier;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/certificatesubjecttokensupplier.js
var require_certificatesubjecttokensupplier = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CertificateSubjectTokenSupplier = exports.InvalidConfigurationError = exports.CertificateSourceUnavailableError = exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = undefined;
  var util_1 = require_util2();
  var fs = __require("fs");
  var crypto_1 = __require("crypto");
  var https = __require("https");
  exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";

  class CertificateSourceUnavailableError extends Error {
    constructor(message) {
      super(message);
      this.name = "CertificateSourceUnavailableError";
    }
  }
  exports.CertificateSourceUnavailableError = CertificateSourceUnavailableError;

  class InvalidConfigurationError extends Error {
    constructor(message) {
      super(message);
      this.name = "InvalidConfigurationError";
    }
  }
  exports.InvalidConfigurationError = InvalidConfigurationError;

  class CertificateSubjectTokenSupplier {
    certificateConfigPath;
    trustChainPath;
    cert;
    key;
    constructor(opts) {
      if (!opts.useDefaultCertificateConfig && !opts.certificateConfigLocation) {
        throw new InvalidConfigurationError("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
      }
      if (opts.useDefaultCertificateConfig && opts.certificateConfigLocation) {
        throw new InvalidConfigurationError("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
      }
      this.trustChainPath = opts.trustChainPath;
      this.certificateConfigPath = opts.certificateConfigLocation ?? "";
    }
    async createMtlsHttpsAgent() {
      if (!this.key || !this.cert) {
        throw new InvalidConfigurationError("Cannot create mTLS Agent with missing certificate or key");
      }
      return new https.Agent({ key: this.key, cert: this.cert });
    }
    async getSubjectToken() {
      this.certificateConfigPath = await this.#resolveCertificateConfigFilePath();
      const { certPath, keyPath } = await this.#getCertAndKeyPaths();
      ({ cert: this.cert, key: this.key } = await this.#getKeyAndCert(certPath, keyPath));
      return await this.#processChainFromPaths(this.cert);
    }
    async#resolveCertificateConfigFilePath() {
      const overridePath = this.certificateConfigPath;
      if (overridePath) {
        if (await (0, util_1.isValidFile)(overridePath)) {
          return overridePath;
        }
        throw new CertificateSourceUnavailableError(`Provided certificate config path is invalid: ${overridePath}`);
      }
      const envPath = process.env[exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
      if (envPath) {
        if (await (0, util_1.isValidFile)(envPath)) {
          return envPath;
        }
        throw new CertificateSourceUnavailableError(`Path from environment variable "${exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${envPath}`);
      }
      const wellKnownPath = (0, util_1.getWellKnownCertificateConfigFileLocation)();
      if (await (0, util_1.isValidFile)(wellKnownPath)) {
        return wellKnownPath;
      }
      throw new CertificateSourceUnavailableError("Could not find certificate configuration file. Searched override path, " + `the "${exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${wellKnownPath}).`);
    }
    async#getCertAndKeyPaths() {
      const configPath = this.certificateConfigPath;
      let fileContents;
      try {
        fileContents = await fs.promises.readFile(configPath, "utf8");
      } catch (err) {
        throw new CertificateSourceUnavailableError(`Failed to read certificate config file at: ${configPath}`);
      }
      try {
        const config = JSON.parse(fileContents);
        const certPath = config?.cert_configs?.workload?.cert_path;
        const keyPath = config?.cert_configs?.workload?.key_path;
        if (!certPath || !keyPath) {
          throw new InvalidConfigurationError(`Certificate config file (${configPath}) is missing required "cert_path" or "key_path" in the workload config.`);
        }
        return { certPath, keyPath };
      } catch (e) {
        if (e instanceof InvalidConfigurationError)
          throw e;
        throw new InvalidConfigurationError(`Failed to parse certificate config from ${configPath}: ${e.message}`);
      }
    }
    async#getKeyAndCert(certPath, keyPath) {
      let cert, key;
      try {
        cert = await fs.promises.readFile(certPath);
        new crypto_1.X509Certificate(cert);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        throw new CertificateSourceUnavailableError(`Failed to read certificate file at ${certPath}: ${message}`);
      }
      try {
        key = await fs.promises.readFile(keyPath);
        (0, crypto_1.createPrivateKey)(key);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        throw new CertificateSourceUnavailableError(`Failed to read private key file at ${keyPath}: ${message}`);
      }
      return { cert, key };
    }
    async#processChainFromPaths(leafCertBuffer) {
      const leafCert = new crypto_1.X509Certificate(leafCertBuffer);
      if (!this.trustChainPath) {
        return JSON.stringify([leafCert.raw.toString("base64")]);
      }
      try {
        const chainPems = await fs.promises.readFile(this.trustChainPath, "utf8");
        const pemBlocks = chainPems.match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? [];
        const chainCerts = pemBlocks.map((pem, index) => {
          try {
            return new crypto_1.X509Certificate(pem);
          } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            throw new InvalidConfigurationError(`Failed to parse certificate at index ${index} in trust chain file ${this.trustChainPath}: ${message}`);
          }
        });
        const leafIndex = chainCerts.findIndex((chainCert) => leafCert.raw.equals(chainCert.raw));
        let finalChain;
        if (leafIndex === -1) {
          finalChain = [leafCert, ...chainCerts];
        } else if (leafIndex === 0) {
          finalChain = chainCerts;
        } else {
          throw new InvalidConfigurationError(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${leafIndex}).`);
        }
        return JSON.stringify(finalChain.map((cert) => cert.raw.toString("base64")));
      } catch (err) {
        if (err instanceof InvalidConfigurationError)
          throw err;
        const message = err instanceof Error ? err.message : String(err);
        throw new CertificateSourceUnavailableError(`Failed to process certificate chain from ${this.trustChainPath}: ${message}`);
      }
    }
  }
  exports.CertificateSubjectTokenSupplier = CertificateSubjectTokenSupplier;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/identitypoolclient.js
var require_identitypoolclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.IdentityPoolClient = undefined;
  var baseexternalclient_1 = require_baseexternalclient();
  var util_1 = require_util2();
  var filesubjecttokensupplier_1 = require_filesubjecttokensupplier();
  var urlsubjecttokensupplier_1 = require_urlsubjecttokensupplier();
  var certificatesubjecttokensupplier_1 = require_certificatesubjecttokensupplier();
  var stscredentials_1 = require_stscredentials();
  var gaxios_1 = require_src();

  class IdentityPoolClient extends baseexternalclient_1.BaseExternalAccountClient {
    subjectTokenSupplier;
    constructor(options) {
      super(options);
      const opts = (0, util_1.originalOrCamelOptions)(options);
      const credentialSource = opts.get("credential_source");
      const subjectTokenSupplier = opts.get("subject_token_supplier");
      if (!credentialSource && !subjectTokenSupplier) {
        throw new Error("A credential source or subject token supplier must be specified.");
      }
      if (credentialSource && subjectTokenSupplier) {
        throw new Error("Only one of credential source or subject token supplier can be specified.");
      }
      if (subjectTokenSupplier) {
        this.subjectTokenSupplier = subjectTokenSupplier;
        this.credentialSourceType = "programmatic";
      } else {
        const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
        const formatOpts = (0, util_1.originalOrCamelOptions)(credentialSourceOpts.get("format"));
        const formatType = formatOpts.get("type") || "text";
        const formatSubjectTokenFieldName = formatOpts.get("subject_token_field_name");
        if (formatType !== "json" && formatType !== "text") {
          throw new Error(`Invalid credential_source format "${formatType}"`);
        }
        if (formatType === "json" && !formatSubjectTokenFieldName) {
          throw new Error("Missing subject_token_field_name for JSON credential_source format");
        }
        const file = credentialSourceOpts.get("file");
        const url = credentialSourceOpts.get("url");
        const certificate = credentialSourceOpts.get("certificate");
        const headers = credentialSourceOpts.get("headers");
        if (file && url || url && certificate || file && certificate) {
          throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
        } else if (file) {
          this.credentialSourceType = "file";
          this.subjectTokenSupplier = new filesubjecttokensupplier_1.FileSubjectTokenSupplier({
            filePath: file,
            formatType,
            subjectTokenFieldName: formatSubjectTokenFieldName
          });
        } else if (url) {
          this.credentialSourceType = "url";
          this.subjectTokenSupplier = new urlsubjecttokensupplier_1.UrlSubjectTokenSupplier({
            url,
            formatType,
            subjectTokenFieldName: formatSubjectTokenFieldName,
            headers,
            additionalGaxiosOptions: IdentityPoolClient.RETRY_CONFIG
          });
        } else if (certificate) {
          this.credentialSourceType = "certificate";
          const certificateSubjecttokensupplier = new certificatesubjecttokensupplier_1.CertificateSubjectTokenSupplier({
            useDefaultCertificateConfig: certificate.use_default_certificate_config,
            certificateConfigLocation: certificate.certificate_config_location,
            trustChainPath: certificate.trust_chain_path
          });
          this.subjectTokenSupplier = certificateSubjecttokensupplier;
        } else {
          throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
        }
      }
    }
    async retrieveSubjectToken() {
      const subjectToken = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
      if (this.subjectTokenSupplier instanceof certificatesubjecttokensupplier_1.CertificateSubjectTokenSupplier) {
        const mtlsAgent = await this.subjectTokenSupplier.createMtlsHttpsAgent();
        this.stsCredential = new stscredentials_1.StsCredentials({
          tokenExchangeEndpoint: this.getTokenUrl(),
          clientAuthentication: this.clientAuth,
          transporter: new gaxios_1.Gaxios({ agent: mtlsAgent })
        });
        this.transporter = new gaxios_1.Gaxios({
          ...this.transporter.defaults || {},
          agent: mtlsAgent
        });
      }
      return subjectToken;
    }
  }
  exports.IdentityPoolClient = IdentityPoolClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/awsrequestsigner.js
var require_awsrequestsigner = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AwsRequestSigner = undefined;
  var gaxios_1 = require_src();
  var crypto_1 = require_crypto3();
  var AWS_ALGORITHM = "AWS4-HMAC-SHA256";
  var AWS_REQUEST_TYPE = "aws4_request";

  class AwsRequestSigner {
    getCredentials;
    region;
    crypto;
    constructor(getCredentials, region) {
      this.getCredentials = getCredentials;
      this.region = region;
      this.crypto = (0, crypto_1.createCrypto)();
    }
    async getRequestOptions(amzOptions) {
      if (!amzOptions.url) {
        throw new RangeError('"url" is required in "amzOptions"');
      }
      const requestPayloadData = typeof amzOptions.data === "object" ? JSON.stringify(amzOptions.data) : amzOptions.data;
      const url = amzOptions.url;
      const method = amzOptions.method || "GET";
      const requestPayload = amzOptions.body || requestPayloadData;
      const additionalAmzHeaders = amzOptions.headers;
      const awsSecurityCredentials = await this.getCredentials();
      const uri = new URL(url);
      if (typeof requestPayload !== "string" && requestPayload !== undefined) {
        throw new TypeError(`'requestPayload' is expected to be a string if provided. Got: ${requestPayload}`);
      }
      const headerMap = await generateAuthenticationHeaderMap({
        crypto: this.crypto,
        host: uri.host,
        canonicalUri: uri.pathname,
        canonicalQuerystring: uri.search.slice(1),
        method,
        region: this.region,
        securityCredentials: awsSecurityCredentials,
        requestPayload,
        additionalAmzHeaders
      });
      const headers = gaxios_1.Gaxios.mergeHeaders(headerMap.amzDate ? { "x-amz-date": headerMap.amzDate } : {}, {
        authorization: headerMap.authorizationHeader,
        host: uri.host
      }, additionalAmzHeaders || {});
      if (awsSecurityCredentials.token) {
        gaxios_1.Gaxios.mergeHeaders(headers, {
          "x-amz-security-token": awsSecurityCredentials.token
        });
      }
      const awsSignedReq = {
        url,
        method,
        headers
      };
      if (requestPayload !== undefined) {
        awsSignedReq.body = requestPayload;
      }
      return awsSignedReq;
    }
  }
  exports.AwsRequestSigner = AwsRequestSigner;
  async function sign(crypto, key, msg) {
    return await crypto.signWithHmacSha256(key, msg);
  }
  async function getSigningKey(crypto, key, dateStamp, region, serviceName) {
    const kDate = await sign(crypto, `AWS4${key}`, dateStamp);
    const kRegion = await sign(crypto, kDate, region);
    const kService = await sign(crypto, kRegion, serviceName);
    const kSigning = await sign(crypto, kService, "aws4_request");
    return kSigning;
  }
  async function generateAuthenticationHeaderMap(options) {
    const additionalAmzHeaders = gaxios_1.Gaxios.mergeHeaders(options.additionalAmzHeaders);
    const requestPayload = options.requestPayload || "";
    const serviceName = options.host.split(".")[0];
    const now = new Date;
    const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, "");
    const dateStamp = now.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
    if (options.securityCredentials.token) {
      additionalAmzHeaders.set("x-amz-security-token", options.securityCredentials.token);
    }
    const amzHeaders = gaxios_1.Gaxios.mergeHeaders({
      host: options.host
    }, additionalAmzHeaders.has("date") ? {} : { "x-amz-date": amzDate }, additionalAmzHeaders);
    let canonicalHeaders = "";
    const signedHeadersList = [
      ...amzHeaders.keys()
    ].sort();
    signedHeadersList.forEach((key) => {
      canonicalHeaders += `${key}:${amzHeaders.get(key)}
`;
    });
    const signedHeaders = signedHeadersList.join(";");
    const payloadHash = await options.crypto.sha256DigestHex(requestPayload);
    const canonicalRequest = `${options.method.toUpperCase()}
` + `${options.canonicalUri}
` + `${options.canonicalQuerystring}
` + `${canonicalHeaders}
` + `${signedHeaders}
` + `${payloadHash}`;
    const credentialScope = `${dateStamp}/${options.region}/${serviceName}/${AWS_REQUEST_TYPE}`;
    const stringToSign = `${AWS_ALGORITHM}
` + `${amzDate}
` + `${credentialScope}
` + await options.crypto.sha256DigestHex(canonicalRequest);
    const signingKey = await getSigningKey(options.crypto, options.securityCredentials.secretAccessKey, dateStamp, options.region, serviceName);
    const signature = await sign(options.crypto, signingKey, stringToSign);
    const authorizationHeader = `${AWS_ALGORITHM} Credential=${options.securityCredentials.accessKeyId}/` + `${credentialScope}, SignedHeaders=${signedHeaders}, ` + `Signature=${(0, crypto_1.fromArrayBufferToHex)(signature)}`;
    return {
      amzDate: additionalAmzHeaders.has("date") ? undefined : amzDate,
      authorizationHeader,
      canonicalQuerystring: options.canonicalQuerystring
    };
  }
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/defaultawssecuritycredentialssupplier.js
var require_defaultawssecuritycredentialssupplier = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DefaultAwsSecurityCredentialsSupplier = undefined;
  var authclient_1 = require_authclient();

  class DefaultAwsSecurityCredentialsSupplier {
    regionUrl;
    securityCredentialsUrl;
    imdsV2SessionTokenUrl;
    additionalGaxiosOptions;
    constructor(opts) {
      this.regionUrl = opts.regionUrl;
      this.securityCredentialsUrl = opts.securityCredentialsUrl;
      this.imdsV2SessionTokenUrl = opts.imdsV2SessionTokenUrl;
      this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
    }
    async getAwsRegion(context) {
      if (this.#regionFromEnv) {
        return this.#regionFromEnv;
      }
      const metadataHeaders = new Headers;
      if (!this.#regionFromEnv && this.imdsV2SessionTokenUrl) {
        metadataHeaders.set("x-aws-ec2-metadata-token", await this.#getImdsV2SessionToken(context.transporter));
      }
      if (!this.regionUrl) {
        throw new RangeError("Unable to determine AWS region due to missing " + '"options.credential_source.region_url"');
      }
      const opts = {
        ...this.additionalGaxiosOptions,
        url: this.regionUrl,
        method: "GET",
        responseType: "text",
        headers: metadataHeaders
      };
      authclient_1.AuthClient.setMethodName(opts, "getAwsRegion");
      const response = await context.transporter.request(opts);
      return response.data.substr(0, response.data.length - 1);
    }
    async getAwsSecurityCredentials(context) {
      if (this.#securityCredentialsFromEnv) {
        return this.#securityCredentialsFromEnv;
      }
      const metadataHeaders = new Headers;
      if (this.imdsV2SessionTokenUrl) {
        metadataHeaders.set("x-aws-ec2-metadata-token", await this.#getImdsV2SessionToken(context.transporter));
      }
      const roleName = await this.#getAwsRoleName(metadataHeaders, context.transporter);
      const awsCreds = await this.#retrieveAwsSecurityCredentials(roleName, metadataHeaders, context.transporter);
      return {
        accessKeyId: awsCreds.AccessKeyId,
        secretAccessKey: awsCreds.SecretAccessKey,
        token: awsCreds.Token
      };
    }
    async#getImdsV2SessionToken(transporter) {
      const opts = {
        ...this.additionalGaxiosOptions,
        url: this.imdsV2SessionTokenUrl,
        method: "PUT",
        responseType: "text",
        headers: { "x-aws-ec2-metadata-token-ttl-seconds": "300" }
      };
      authclient_1.AuthClient.setMethodName(opts, "#getImdsV2SessionToken");
      const response = await transporter.request(opts);
      return response.data;
    }
    async#getAwsRoleName(headers, transporter) {
      if (!this.securityCredentialsUrl) {
        throw new Error("Unable to determine AWS role name due to missing " + '"options.credential_source.url"');
      }
      const opts = {
        ...this.additionalGaxiosOptions,
        url: this.securityCredentialsUrl,
        method: "GET",
        responseType: "text",
        headers
      };
      authclient_1.AuthClient.setMethodName(opts, "#getAwsRoleName");
      const response = await transporter.request(opts);
      return response.data;
    }
    async#retrieveAwsSecurityCredentials(roleName, headers, transporter) {
      const opts = {
        ...this.additionalGaxiosOptions,
        url: `${this.securityCredentialsUrl}/${roleName}`,
        headers,
        responseType: "json"
      };
      authclient_1.AuthClient.setMethodName(opts, "#retrieveAwsSecurityCredentials");
      const response = await transporter.request(opts);
      return response.data;
    }
    get #regionFromEnv() {
      return process.env["AWS_REGION"] || process.env["AWS_DEFAULT_REGION"] || null;
    }
    get #securityCredentialsFromEnv() {
      if (process.env["AWS_ACCESS_KEY_ID"] && process.env["AWS_SECRET_ACCESS_KEY"]) {
        return {
          accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
          secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
          token: process.env["AWS_SESSION_TOKEN"]
        };
      }
      return null;
    }
  }
  exports.DefaultAwsSecurityCredentialsSupplier = DefaultAwsSecurityCredentialsSupplier;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/awsclient.js
var require_awsclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AwsClient = undefined;
  var awsrequestsigner_1 = require_awsrequestsigner();
  var baseexternalclient_1 = require_baseexternalclient();
  var defaultawssecuritycredentialssupplier_1 = require_defaultawssecuritycredentialssupplier();
  var util_1 = require_util2();
  var gaxios_1 = require_src();

  class AwsClient extends baseexternalclient_1.BaseExternalAccountClient {
    environmentId;
    awsSecurityCredentialsSupplier;
    regionalCredVerificationUrl;
    awsRequestSigner;
    region;
    static #DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL = "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15";
    static AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
    static AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
    constructor(options) {
      super(options);
      const opts = (0, util_1.originalOrCamelOptions)(options);
      const credentialSource = opts.get("credential_source");
      const awsSecurityCredentialsSupplier = opts.get("aws_security_credentials_supplier");
      if (!credentialSource && !awsSecurityCredentialsSupplier) {
        throw new Error("A credential source or AWS security credentials supplier must be specified.");
      }
      if (credentialSource && awsSecurityCredentialsSupplier) {
        throw new Error("Only one of credential source or AWS security credentials supplier can be specified.");
      }
      if (awsSecurityCredentialsSupplier) {
        this.awsSecurityCredentialsSupplier = awsSecurityCredentialsSupplier;
        this.regionalCredVerificationUrl = AwsClient.#DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL;
        this.credentialSourceType = "programmatic";
      } else {
        const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
        this.environmentId = credentialSourceOpts.get("environment_id");
        const regionUrl = credentialSourceOpts.get("region_url");
        const securityCredentialsUrl = credentialSourceOpts.get("url");
        const imdsV2SessionTokenUrl = credentialSourceOpts.get("imdsv2_session_token_url");
        this.awsSecurityCredentialsSupplier = new defaultawssecuritycredentialssupplier_1.DefaultAwsSecurityCredentialsSupplier({
          regionUrl,
          securityCredentialsUrl,
          imdsV2SessionTokenUrl
        });
        this.regionalCredVerificationUrl = credentialSourceOpts.get("regional_cred_verification_url");
        this.credentialSourceType = "aws";
        this.validateEnvironmentId();
      }
      this.awsRequestSigner = null;
      this.region = "";
    }
    validateEnvironmentId() {
      const match = this.environmentId?.match(/^(aws)(\d+)$/);
      if (!match || !this.regionalCredVerificationUrl) {
        throw new Error('No valid AWS "credential_source" provided');
      } else if (parseInt(match[2], 10) !== 1) {
        throw new Error(`aws version "${match[2]}" is not supported in the current build.`);
      }
    }
    async retrieveSubjectToken() {
      if (!this.awsRequestSigner) {
        this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext);
        this.awsRequestSigner = new awsrequestsigner_1.AwsRequestSigner(async () => {
          return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext);
        }, this.region);
      }
      const options = await this.awsRequestSigner.getRequestOptions({
        ...AwsClient.RETRY_CONFIG,
        url: this.regionalCredVerificationUrl.replace("{region}", this.region),
        method: "POST"
      });
      const reformattedHeader = [];
      const extendedHeaders = gaxios_1.Gaxios.mergeHeaders({
        "x-goog-cloud-target-resource": this.audience
      }, options.headers);
      extendedHeaders.forEach((value, key) => reformattedHeader.push({ key, value }));
      return encodeURIComponent(JSON.stringify({
        url: options.url,
        method: options.method,
        headers: reformattedHeader
      }));
    }
  }
  exports.AwsClient = AwsClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/executable-response.js
var require_executable_response = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InvalidSubjectTokenError = exports.InvalidMessageFieldError = exports.InvalidCodeFieldError = exports.InvalidTokenTypeFieldError = exports.InvalidExpirationTimeFieldError = exports.InvalidSuccessFieldError = exports.InvalidVersionFieldError = exports.ExecutableResponseError = exports.ExecutableResponse = undefined;
  var SAML_SUBJECT_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:saml2";
  var OIDC_SUBJECT_TOKEN_TYPE1 = "urn:ietf:params:oauth:token-type:id_token";
  var OIDC_SUBJECT_TOKEN_TYPE2 = "urn:ietf:params:oauth:token-type:jwt";

  class ExecutableResponse {
    version;
    success;
    expirationTime;
    tokenType;
    errorCode;
    errorMessage;
    subjectToken;
    constructor(responseJson) {
      if (!responseJson.version) {
        throw new InvalidVersionFieldError("Executable response must contain a 'version' field.");
      }
      if (responseJson.success === undefined) {
        throw new InvalidSuccessFieldError("Executable response must contain a 'success' field.");
      }
      this.version = responseJson.version;
      this.success = responseJson.success;
      if (this.success) {
        this.expirationTime = responseJson.expiration_time;
        this.tokenType = responseJson.token_type;
        if (this.tokenType !== SAML_SUBJECT_TOKEN_TYPE && this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE1 && this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE2) {
          throw new InvalidTokenTypeFieldError("Executable response must contain a 'token_type' field when successful " + `and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`);
        }
        if (this.tokenType === SAML_SUBJECT_TOKEN_TYPE) {
          if (!responseJson.saml_response) {
            throw new InvalidSubjectTokenError(`Executable response must contain a 'saml_response' field when token_type=${SAML_SUBJECT_TOKEN_TYPE}.`);
          }
          this.subjectToken = responseJson.saml_response;
        } else {
          if (!responseJson.id_token) {
            throw new InvalidSubjectTokenError("Executable response must contain a 'id_token' field when " + `token_type=${OIDC_SUBJECT_TOKEN_TYPE1} or ${OIDC_SUBJECT_TOKEN_TYPE2}.`);
          }
          this.subjectToken = responseJson.id_token;
        }
      } else {
        if (!responseJson.code) {
          throw new InvalidCodeFieldError("Executable response must contain a 'code' field when unsuccessful.");
        }
        if (!responseJson.message) {
          throw new InvalidMessageFieldError("Executable response must contain a 'message' field when unsuccessful.");
        }
        this.errorCode = responseJson.code;
        this.errorMessage = responseJson.message;
      }
    }
    isValid() {
      return !this.isExpired() && this.success;
    }
    isExpired() {
      return this.expirationTime !== undefined && this.expirationTime < Math.round(Date.now() / 1000);
    }
  }
  exports.ExecutableResponse = ExecutableResponse;

  class ExecutableResponseError extends Error {
    constructor(message) {
      super(message);
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  exports.ExecutableResponseError = ExecutableResponseError;

  class InvalidVersionFieldError extends ExecutableResponseError {
  }
  exports.InvalidVersionFieldError = InvalidVersionFieldError;

  class InvalidSuccessFieldError extends ExecutableResponseError {
  }
  exports.InvalidSuccessFieldError = InvalidSuccessFieldError;

  class InvalidExpirationTimeFieldError extends ExecutableResponseError {
  }
  exports.InvalidExpirationTimeFieldError = InvalidExpirationTimeFieldError;

  class InvalidTokenTypeFieldError extends ExecutableResponseError {
  }
  exports.InvalidTokenTypeFieldError = InvalidTokenTypeFieldError;

  class InvalidCodeFieldError extends ExecutableResponseError {
  }
  exports.InvalidCodeFieldError = InvalidCodeFieldError;

  class InvalidMessageFieldError extends ExecutableResponseError {
  }
  exports.InvalidMessageFieldError = InvalidMessageFieldError;

  class InvalidSubjectTokenError extends ExecutableResponseError {
  }
  exports.InvalidSubjectTokenError = InvalidSubjectTokenError;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/pluggable-auth-handler.js
var require_pluggable_auth_handler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PluggableAuthHandler = exports.ExecutableError = undefined;
  var executable_response_1 = require_executable_response();
  var childProcess = __require("child_process");
  var fs = __require("fs");

  class ExecutableError extends Error {
    code;
    constructor(message, code) {
      super(`The executable failed with exit code: ${code} and error message: ${message}.`);
      this.code = code;
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  exports.ExecutableError = ExecutableError;

  class PluggableAuthHandler {
    commandComponents;
    timeoutMillis;
    outputFile;
    constructor(options) {
      if (!options.command) {
        throw new Error("No command provided.");
      }
      this.commandComponents = PluggableAuthHandler.parseCommand(options.command);
      this.timeoutMillis = options.timeoutMillis;
      if (!this.timeoutMillis) {
        throw new Error("No timeoutMillis provided.");
      }
      this.outputFile = options.outputFile;
    }
    retrieveResponseFromExecutable(envMap) {
      return new Promise((resolve, reject) => {
        const child = childProcess.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
          env: { ...process.env, ...Object.fromEntries(envMap) }
        });
        let output = "";
        child.stdout.on("data", (data) => {
          output += data;
        });
        child.stderr.on("data", (err) => {
          output += err;
        });
        const timeout = setTimeout(() => {
          child.removeAllListeners();
          child.kill();
          return reject(new Error("The executable failed to finish within the timeout specified."));
        }, this.timeoutMillis);
        child.on("close", (code) => {
          clearTimeout(timeout);
          if (code === 0) {
            try {
              const responseJson = JSON.parse(output);
              const response = new executable_response_1.ExecutableResponse(responseJson);
              return resolve(response);
            } catch (error) {
              if (error instanceof executable_response_1.ExecutableResponseError) {
                return reject(error);
              }
              return reject(new executable_response_1.ExecutableResponseError(`The executable returned an invalid response: ${output}`));
            }
          } else {
            return reject(new ExecutableError(output, code.toString()));
          }
        });
      });
    }
    async retrieveCachedResponse() {
      if (!this.outputFile || this.outputFile.length === 0) {
        return;
      }
      let filePath;
      try {
        filePath = await fs.promises.realpath(this.outputFile);
      } catch {
        return;
      }
      if (!(await fs.promises.lstat(filePath)).isFile()) {
        return;
      }
      const responseString = await fs.promises.readFile(filePath, {
        encoding: "utf8"
      });
      if (responseString === "") {
        return;
      }
      try {
        const responseJson = JSON.parse(responseString);
        const response = new executable_response_1.ExecutableResponse(responseJson);
        if (response.isValid()) {
          return new executable_response_1.ExecutableResponse(responseJson);
        }
        return;
      } catch (error) {
        if (error instanceof executable_response_1.ExecutableResponseError) {
          throw error;
        }
        throw new executable_response_1.ExecutableResponseError(`The output file contained an invalid response: ${responseString}`);
      }
    }
    static parseCommand(command) {
      const components = command.match(/(?:[^\s"]+|"[^"]*")+/g);
      if (!components) {
        throw new Error(`Provided command: "${command}" could not be parsed.`);
      }
      for (let i = 0;i < components.length; i++) {
        if (components[i][0] === '"' && components[i].slice(-1) === '"') {
          components[i] = components[i].slice(1, -1);
        }
      }
      return components;
    }
  }
  exports.PluggableAuthHandler = PluggableAuthHandler;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/pluggable-auth-client.js
var require_pluggable_auth_client = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PluggableAuthClient = exports.ExecutableError = undefined;
  var baseexternalclient_1 = require_baseexternalclient();
  var executable_response_1 = require_executable_response();
  var pluggable_auth_handler_1 = require_pluggable_auth_handler();
  var pluggable_auth_handler_2 = require_pluggable_auth_handler();
  Object.defineProperty(exports, "ExecutableError", { enumerable: true, get: function() {
    return pluggable_auth_handler_2.ExecutableError;
  } });
  var DEFAULT_EXECUTABLE_TIMEOUT_MILLIS = 30 * 1000;
  var MINIMUM_EXECUTABLE_TIMEOUT_MILLIS = 5 * 1000;
  var MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS = 120 * 1000;
  var GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES";
  var MAXIMUM_EXECUTABLE_VERSION = 1;

  class PluggableAuthClient extends baseexternalclient_1.BaseExternalAccountClient {
    command;
    timeoutMillis;
    outputFile;
    handler;
    constructor(options) {
      super(options);
      if (!options.credential_source.executable) {
        throw new Error('No valid Pluggable Auth "credential_source" provided.');
      }
      this.command = options.credential_source.executable.command;
      if (!this.command) {
        throw new Error('No valid Pluggable Auth "credential_source" provided.');
      }
      if (options.credential_source.executable.timeout_millis === undefined) {
        this.timeoutMillis = DEFAULT_EXECUTABLE_TIMEOUT_MILLIS;
      } else {
        this.timeoutMillis = options.credential_source.executable.timeout_millis;
        if (this.timeoutMillis < MINIMUM_EXECUTABLE_TIMEOUT_MILLIS || this.timeoutMillis > MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS) {
          throw new Error(`Timeout must be between ${MINIMUM_EXECUTABLE_TIMEOUT_MILLIS} and ` + `${MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS} milliseconds.`);
        }
      }
      this.outputFile = options.credential_source.executable.output_file;
      this.handler = new pluggable_auth_handler_1.PluggableAuthHandler({
        command: this.command,
        timeoutMillis: this.timeoutMillis,
        outputFile: this.outputFile
      });
      this.credentialSourceType = "executable";
    }
    async retrieveSubjectToken() {
      if (process.env[GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES] !== "1") {
        throw new Error("Pluggable Auth executables need to be explicitly allowed to run by " + "setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment " + "Variable to 1.");
      }
      let executableResponse = undefined;
      if (this.outputFile) {
        executableResponse = await this.handler.retrieveCachedResponse();
      }
      if (!executableResponse) {
        const envMap = new Map;
        envMap.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience);
        envMap.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType);
        envMap.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0");
        if (this.outputFile) {
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
        }
        const serviceAccountEmail = this.getServiceAccountEmail();
        if (serviceAccountEmail) {
          envMap.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", serviceAccountEmail);
        }
        executableResponse = await this.handler.retrieveResponseFromExecutable(envMap);
      }
      if (executableResponse.version > MAXIMUM_EXECUTABLE_VERSION) {
        throw new Error(`Version of executable is not currently supported, maximum supported version is ${MAXIMUM_EXECUTABLE_VERSION}.`);
      }
      if (!executableResponse.success) {
        throw new pluggable_auth_handler_1.ExecutableError(executableResponse.errorMessage, executableResponse.errorCode);
      }
      if (this.outputFile) {
        if (!executableResponse.expirationTime) {
          throw new executable_response_1.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
        }
      }
      if (executableResponse.isExpired()) {
        throw new Error("Executable response is expired.");
      }
      return executableResponse.subjectToken;
    }
  }
  exports.PluggableAuthClient = PluggableAuthClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/externalclient.js
var require_externalclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ExternalAccountClient = undefined;
  var baseexternalclient_1 = require_baseexternalclient();
  var identitypoolclient_1 = require_identitypoolclient();
  var awsclient_1 = require_awsclient();
  var pluggable_auth_client_1 = require_pluggable_auth_client();

  class ExternalAccountClient {
    constructor() {
      throw new Error("ExternalAccountClients should be initialized via: " + "ExternalAccountClient.fromJSON(), " + "directly via explicit constructors, eg. " + "new AwsClient(options), new IdentityPoolClient(options), new" + "PluggableAuthClientOptions, or via " + "new GoogleAuth(options).getClient()");
    }
    static fromJSON(options) {
      if (options && options.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
        if (options.credential_source?.environment_id) {
          return new awsclient_1.AwsClient(options);
        } else if (options.credential_source?.executable) {
          return new pluggable_auth_client_1.PluggableAuthClient(options);
        } else {
          return new identitypoolclient_1.IdentityPoolClient(options);
        }
      } else {
        return null;
      }
    }
  }
  exports.ExternalAccountClient = ExternalAccountClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/externalAccountAuthorizedUserClient.js
var require_externalAccountAuthorizedUserClient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ExternalAccountAuthorizedUserClient = exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = undefined;
  var authclient_1 = require_authclient();
  var oauth2common_1 = require_oauth2common();
  var gaxios_1 = require_src();
  var stream = __require("stream");
  var baseexternalclient_1 = require_baseexternalclient();
  exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  var DEFAULT_TOKEN_URL = "https://sts.{universeDomain}/v1/oauthtoken";

  class ExternalAccountAuthorizedUserHandler extends oauth2common_1.OAuthClientAuthHandler {
    #tokenRefreshEndpoint;
    constructor(options) {
      super(options);
      this.#tokenRefreshEndpoint = options.tokenRefreshEndpoint;
    }
    async refreshToken(refreshToken, headers) {
      const opts = {
        ...ExternalAccountAuthorizedUserHandler.RETRY_CONFIG,
        url: this.#tokenRefreshEndpoint,
        method: "POST",
        headers,
        data: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken
        }),
        responseType: "json"
      };
      authclient_1.AuthClient.setMethodName(opts, "refreshToken");
      this.applyClientAuthenticationOptions(opts);
      try {
        const response = await this.transporter.request(opts);
        const tokenRefreshResponse = response.data;
        tokenRefreshResponse.res = response;
        return tokenRefreshResponse;
      } catch (error) {
        if (error instanceof gaxios_1.GaxiosError && error.response) {
          throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(error.response.data, error);
        }
        throw error;
      }
    }
  }

  class ExternalAccountAuthorizedUserClient extends authclient_1.AuthClient {
    cachedAccessToken;
    externalAccountAuthorizedUserHandler;
    refreshToken;
    constructor(options) {
      super(options);
      if (options.universe_domain) {
        this.universeDomain = options.universe_domain;
      }
      this.refreshToken = options.refresh_token;
      const clientAuthentication = {
        confidentialClientType: "basic",
        clientId: options.client_id,
        clientSecret: options.client_secret
      };
      this.externalAccountAuthorizedUserHandler = new ExternalAccountAuthorizedUserHandler({
        tokenRefreshEndpoint: options.token_url ?? DEFAULT_TOKEN_URL.replace("{universeDomain}", this.universeDomain),
        transporter: this.transporter,
        clientAuthentication
      });
      this.cachedAccessToken = null;
      this.quotaProjectId = options.quota_project_id;
      if (typeof options?.eagerRefreshThresholdMillis !== "number") {
        this.eagerRefreshThresholdMillis = baseexternalclient_1.EXPIRATION_TIME_OFFSET;
      } else {
        this.eagerRefreshThresholdMillis = options.eagerRefreshThresholdMillis;
      }
      this.forceRefreshOnFailure = !!options?.forceRefreshOnFailure;
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
        await this.refreshAccessTokenAsync();
      }
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      };
    }
    async getRequestHeaders() {
      const accessTokenResponse = await this.getAccessToken();
      const headers = new Headers({
        authorization: `Bearer ${accessTokenResponse.token}`
      });
      return this.addSharedMetadataHeaders(headers);
    }
    request(opts, callback) {
      if (callback) {
        this.requestAsync(opts).then((r) => callback(null, r), (e) => {
          return callback(e, e.response);
        });
      } else {
        return this.requestAsync(opts);
      }
    }
    async requestAsync(opts, reAuthRetried = false) {
      let response;
      try {
        const requestHeaders = await this.getRequestHeaders();
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
        this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
        response = await this.transporter.request(opts);
      } catch (e) {
        const res = e.response;
        if (res) {
          const statusCode = res.status;
          const isReadableStream = res.config.data instanceof stream.Readable;
          const isAuthErr = statusCode === 401 || statusCode === 403;
          if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
            await this.refreshAccessTokenAsync();
            return await this.requestAsync(opts, true);
          }
        }
        throw e;
      }
      return response;
    }
    async refreshAccessTokenAsync() {
      const refreshResponse = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
      this.cachedAccessToken = {
        access_token: refreshResponse.access_token,
        expiry_date: new Date().getTime() + refreshResponse.expires_in * 1000,
        res: refreshResponse.res
      };
      if (refreshResponse.refresh_token !== undefined) {
        this.refreshToken = refreshResponse.refresh_token;
      }
      return this.cachedAccessToken;
    }
    isExpired(credentials) {
      const now = new Date().getTime();
      return credentials.expiry_date ? now >= credentials.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
  }
  exports.ExternalAccountAuthorizedUserClient = ExternalAccountAuthorizedUserClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/googleauth.js
var require_googleauth = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GoogleAuth = exports.GoogleAuthExceptionMessages = undefined;
  var child_process_1 = __require("child_process");
  var fs = __require("fs");
  var gaxios_1 = require_src();
  var gcpMetadata = require_src3();
  var os = __require("os");
  var path = __require("path");
  var crypto_1 = require_crypto3();
  var computeclient_1 = require_computeclient();
  var idtokenclient_1 = require_idtokenclient();
  var envDetect_1 = require_envDetect();
  var jwtclient_1 = require_jwtclient();
  var refreshclient_1 = require_refreshclient();
  var impersonated_1 = require_impersonated();
  var externalclient_1 = require_externalclient();
  var baseexternalclient_1 = require_baseexternalclient();
  var authclient_1 = require_authclient();
  var externalAccountAuthorizedUserClient_1 = require_externalAccountAuthorizedUserClient();
  var util_1 = require_util2();
  exports.GoogleAuthExceptionMessages = {
    API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
    NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
` + `To learn more about authentication and Google APIs, visit: 
` + "https://cloud.google.com/docs/authentication/getting-started",
    NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
` + `To learn more about authentication and Google APIs, visit: 
` + "https://cloud.google.com/docs/authentication/getting-started",
    NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
    NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
` + `To learn more about Universe Domain retrieval, visit: 
` + "https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys"
  };

  class GoogleAuth {
    checkIsGCE = undefined;
    useJWTAccessWithScope;
    defaultServicePath;
    get isGCE() {
      return this.checkIsGCE;
    }
    _findProjectIdPromise;
    _cachedProjectId;
    jsonContent = null;
    apiKey;
    cachedCredential = null;
    #pendingAuthClient = null;
    defaultScopes;
    keyFilename;
    scopes;
    clientOptions = {};
    constructor(opts = {}) {
      this._cachedProjectId = opts.projectId || null;
      this.cachedCredential = opts.authClient || null;
      this.keyFilename = opts.keyFilename || opts.keyFile;
      this.scopes = opts.scopes;
      this.clientOptions = opts.clientOptions || {};
      this.jsonContent = opts.credentials || null;
      this.apiKey = opts.apiKey || this.clientOptions.apiKey || null;
      if (this.apiKey && (this.jsonContent || this.clientOptions.credentials)) {
        throw new RangeError(exports.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
      }
      if (opts.universeDomain) {
        this.clientOptions.universeDomain = opts.universeDomain;
      }
    }
    setGapicJWTValues(client) {
      client.defaultServicePath = this.defaultServicePath;
      client.useJWTAccessWithScope = this.useJWTAccessWithScope;
      client.defaultScopes = this.defaultScopes;
    }
    getProjectId(callback) {
      if (callback) {
        this.getProjectIdAsync().then((r) => callback(null, r), callback);
      } else {
        return this.getProjectIdAsync();
      }
    }
    async getProjectIdOptional() {
      try {
        return await this.getProjectId();
      } catch (e) {
        if (e instanceof Error && e.message === exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) {
          return null;
        } else {
          throw e;
        }
      }
    }
    async findAndCacheProjectId() {
      let projectId = null;
      projectId ||= await this.getProductionProjectId();
      projectId ||= await this.getFileProjectId();
      projectId ||= await this.getDefaultServiceProjectId();
      projectId ||= await this.getGCEProjectId();
      projectId ||= await this.getExternalAccountClientProjectId();
      if (projectId) {
        this._cachedProjectId = projectId;
        return projectId;
      } else {
        throw new Error(exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
      }
    }
    async getProjectIdAsync() {
      if (this._cachedProjectId) {
        return this._cachedProjectId;
      }
      if (!this._findProjectIdPromise) {
        this._findProjectIdPromise = this.findAndCacheProjectId();
      }
      return this._findProjectIdPromise;
    }
    async getUniverseDomainFromMetadataServer() {
      let universeDomain;
      try {
        universeDomain = await gcpMetadata.universe("universe-domain");
        universeDomain ||= authclient_1.DEFAULT_UNIVERSE;
      } catch (e) {
        if (e && e?.response?.status === 404) {
          universeDomain = authclient_1.DEFAULT_UNIVERSE;
        } else {
          throw e;
        }
      }
      return universeDomain;
    }
    async getUniverseDomain() {
      let universeDomain = (0, util_1.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
      try {
        universeDomain ??= (await this.getClient()).universeDomain;
      } catch {
        universeDomain ??= authclient_1.DEFAULT_UNIVERSE;
      }
      return universeDomain;
    }
    getAnyScopes() {
      return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(optionsOrCallback = {}, callback) {
      let options;
      if (typeof optionsOrCallback === "function") {
        callback = optionsOrCallback;
      } else {
        options = optionsOrCallback;
      }
      if (callback) {
        this.getApplicationDefaultAsync(options).then((r) => callback(null, r.credential, r.projectId), callback);
      } else {
        return this.getApplicationDefaultAsync(options);
      }
    }
    async getApplicationDefaultAsync(options = {}) {
      if (this.cachedCredential) {
        return await this.#prepareAndCacheClient(this.cachedCredential, null);
      }
      let credential;
      credential = await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
      if (credential) {
        if (credential instanceof jwtclient_1.JWT) {
          credential.scopes = this.scopes;
        } else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
          credential.scopes = this.getAnyScopes();
        }
        return await this.#prepareAndCacheClient(credential);
      }
      credential = await this._tryGetApplicationCredentialsFromWellKnownFile(options);
      if (credential) {
        if (credential instanceof jwtclient_1.JWT) {
          credential.scopes = this.scopes;
        } else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
          credential.scopes = this.getAnyScopes();
        }
        return await this.#prepareAndCacheClient(credential);
      }
      if (await this._checkIsGCE()) {
        options.scopes = this.getAnyScopes();
        return await this.#prepareAndCacheClient(new computeclient_1.Compute(options));
      }
      throw new Error(exports.GoogleAuthExceptionMessages.NO_ADC_FOUND);
    }
    async#prepareAndCacheClient(credential, quotaProjectIdOverride = process.env["GOOGLE_CLOUD_QUOTA_PROJECT"] || null) {
      const projectId = await this.getProjectIdOptional();
      if (quotaProjectIdOverride) {
        credential.quotaProjectId = quotaProjectIdOverride;
      }
      this.cachedCredential = credential;
      return { credential, projectId };
    }
    async _checkIsGCE() {
      if (this.checkIsGCE === undefined) {
        this.checkIsGCE = gcpMetadata.getGCPResidency() || await gcpMetadata.isAvailable();
      }
      return this.checkIsGCE;
    }
    async _tryGetApplicationCredentialsFromEnvironmentVariable(options) {
      const credentialsPath = process.env["GOOGLE_APPLICATION_CREDENTIALS"] || process.env["google_application_credentials"];
      if (!credentialsPath || credentialsPath.length === 0) {
        return null;
      }
      try {
        return this._getApplicationCredentialsFromFilePath(credentialsPath, options);
      } catch (e) {
        if (e instanceof Error) {
          e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
        }
        throw e;
      }
    }
    async _tryGetApplicationCredentialsFromWellKnownFile(options) {
      let location = null;
      if (this._isWindows()) {
        location = process.env["APPDATA"];
      } else {
        const home = process.env["HOME"];
        if (home) {
          location = path.join(home, ".config");
        }
      }
      if (location) {
        location = path.join(location, "gcloud", "application_default_credentials.json");
        if (!fs.existsSync(location)) {
          location = null;
        }
      }
      if (!location) {
        return null;
      }
      const client = await this._getApplicationCredentialsFromFilePath(location, options);
      return client;
    }
    async _getApplicationCredentialsFromFilePath(filePath, options = {}) {
      if (!filePath || filePath.length === 0) {
        throw new Error("The file path is invalid.");
      }
      try {
        filePath = fs.realpathSync(filePath);
        if (!fs.lstatSync(filePath).isFile()) {
          throw new Error;
        }
      } catch (err) {
        if (err instanceof Error) {
          err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
        }
        throw err;
      }
      const readStream = fs.createReadStream(filePath);
      return this.fromStream(readStream, options);
    }
    fromImpersonatedJSON(json) {
      if (!json) {
        throw new Error("Must pass in a JSON object containing an  impersonated refresh token");
      }
      if (json.type !== impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
        throw new Error(`The incoming JSON object does not have the "${impersonated_1.IMPERSONATED_ACCOUNT_TYPE}" type`);
      }
      if (!json.source_credentials) {
        throw new Error("The incoming JSON object does not contain a source_credentials field");
      }
      if (!json.service_account_impersonation_url) {
        throw new Error("The incoming JSON object does not contain a service_account_impersonation_url field");
      }
      const sourceClient = this.fromJSON(json.source_credentials);
      if (json.service_account_impersonation_url?.length > 256) {
        throw new RangeError(`Target principal is too long: ${json.service_account_impersonation_url}`);
      }
      const targetPrincipal = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(json.service_account_impersonation_url)?.groups?.target;
      if (!targetPrincipal) {
        throw new RangeError(`Cannot extract target principal from ${json.service_account_impersonation_url}`);
      }
      const targetScopes = (this.scopes || json.scopes || this.defaultScopes) ?? [];
      return new impersonated_1.Impersonated({
        ...json,
        sourceClient,
        targetPrincipal,
        targetScopes: Array.isArray(targetScopes) ? targetScopes : [targetScopes]
      });
    }
    fromJSON(json, options = {}) {
      let client;
      const preferredUniverseDomain = (0, util_1.originalOrCamelOptions)(options).get("universe_domain");
      if (json.type === refreshclient_1.USER_REFRESH_ACCOUNT_TYPE) {
        client = new refreshclient_1.UserRefreshClient(options);
        client.fromJSON(json);
      } else if (json.type === impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
        client = this.fromImpersonatedJSON(json);
      } else if (json.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
        client = externalclient_1.ExternalAccountClient.fromJSON({
          ...json,
          ...options
        });
        client.scopes = this.getAnyScopes();
      } else if (json.type === externalAccountAuthorizedUserClient_1.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) {
        client = new externalAccountAuthorizedUserClient_1.ExternalAccountAuthorizedUserClient({
          ...json,
          ...options
        });
      } else {
        options.scopes = this.scopes;
        client = new jwtclient_1.JWT(options);
        this.setGapicJWTValues(client);
        client.fromJSON(json);
      }
      if (preferredUniverseDomain) {
        client.universeDomain = preferredUniverseDomain;
      }
      return client;
    }
    _cacheClientFromJSON(json, options) {
      const client = this.fromJSON(json, options);
      this.jsonContent = json;
      this.cachedCredential = client;
      return client;
    }
    fromStream(inputStream, optionsOrCallback = {}, callback) {
      let options = {};
      if (typeof optionsOrCallback === "function") {
        callback = optionsOrCallback;
      } else {
        options = optionsOrCallback;
      }
      if (callback) {
        this.fromStreamAsync(inputStream, options).then((r) => callback(null, r), callback);
      } else {
        return this.fromStreamAsync(inputStream, options);
      }
    }
    fromStreamAsync(inputStream, options) {
      return new Promise((resolve, reject) => {
        if (!inputStream) {
          throw new Error("Must pass in a stream containing the Google auth settings.");
        }
        const chunks = [];
        inputStream.setEncoding("utf8").on("error", reject).on("data", (chunk) => chunks.push(chunk)).on("end", () => {
          try {
            try {
              const data = JSON.parse(chunks.join(""));
              const r = this._cacheClientFromJSON(data, options);
              return resolve(r);
            } catch (err) {
              if (!this.keyFilename)
                throw err;
              const client = new jwtclient_1.JWT({
                ...this.clientOptions,
                keyFile: this.keyFilename
              });
              this.cachedCredential = client;
              this.setGapicJWTValues(client);
              return resolve(client);
            }
          } catch (err) {
            return reject(err);
          }
        });
      });
    }
    fromAPIKey(apiKey, options = {}) {
      return new jwtclient_1.JWT({ ...options, apiKey });
    }
    _isWindows() {
      const sys = os.platform();
      if (sys && sys.length >= 3) {
        if (sys.substring(0, 3).toLowerCase() === "win") {
          return true;
        }
      }
      return false;
    }
    async getDefaultServiceProjectId() {
      return new Promise((resolve) => {
        (0, child_process_1.exec)("gcloud config config-helper --format json", (err, stdout) => {
          if (!err && stdout) {
            try {
              const projectId = JSON.parse(stdout).configuration.properties.core.project;
              resolve(projectId);
              return;
            } catch (e) {}
          }
          resolve(null);
        });
      });
    }
    getProductionProjectId() {
      return process.env["GCLOUD_PROJECT"] || process.env["GOOGLE_CLOUD_PROJECT"] || process.env["gcloud_project"] || process.env["google_cloud_project"];
    }
    async getFileProjectId() {
      if (this.cachedCredential) {
        return this.cachedCredential.projectId;
      }
      if (this.keyFilename) {
        const creds = await this.getClient();
        if (creds && creds.projectId) {
          return creds.projectId;
        }
      }
      const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
      if (r) {
        return r.projectId;
      } else {
        return null;
      }
    }
    async getExternalAccountClientProjectId() {
      if (!this.jsonContent || this.jsonContent.type !== baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
        return null;
      }
      const creds = await this.getClient();
      return await creds.getProjectId();
    }
    async getGCEProjectId() {
      try {
        const r = await gcpMetadata.project("project-id");
        return r;
      } catch (e) {
        return null;
      }
    }
    getCredentials(callback) {
      if (callback) {
        this.getCredentialsAsync().then((r) => callback(null, r), callback);
      } else {
        return this.getCredentialsAsync();
      }
    }
    async getCredentialsAsync() {
      const client = await this.getClient();
      if (client instanceof impersonated_1.Impersonated) {
        return { client_email: client.getTargetPrincipal() };
      }
      if (client instanceof baseexternalclient_1.BaseExternalAccountClient) {
        const serviceAccountEmail = client.getServiceAccountEmail();
        if (serviceAccountEmail) {
          return {
            client_email: serviceAccountEmail,
            universe_domain: client.universeDomain
          };
        }
      }
      if (this.jsonContent) {
        return {
          client_email: this.jsonContent.client_email,
          private_key: this.jsonContent.private_key,
          universe_domain: this.jsonContent.universe_domain
        };
      }
      if (await this._checkIsGCE()) {
        const [client_email, universe_domain] = await Promise.all([
          gcpMetadata.instance("service-accounts/default/email"),
          this.getUniverseDomain()
        ]);
        return { client_email, universe_domain };
      }
      throw new Error(exports.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
    }
    async getClient() {
      if (this.cachedCredential) {
        return this.cachedCredential;
      }
      this.#pendingAuthClient = this.#pendingAuthClient || this.#determineClient();
      try {
        return await this.#pendingAuthClient;
      } finally {
        this.#pendingAuthClient = null;
      }
    }
    async#determineClient() {
      if (this.jsonContent) {
        return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
      } else if (this.keyFilename) {
        const filePath = path.resolve(this.keyFilename);
        const stream = fs.createReadStream(filePath);
        return await this.fromStreamAsync(stream, this.clientOptions);
      } else if (this.apiKey) {
        const client = await this.fromAPIKey(this.apiKey, this.clientOptions);
        client.scopes = this.scopes;
        const { credential } = await this.#prepareAndCacheClient(client);
        return credential;
      } else {
        const { credential } = await this.getApplicationDefaultAsync(this.clientOptions);
        return credential;
      }
    }
    async getIdTokenClient(targetAudience) {
      const client = await this.getClient();
      if (!("fetchIdToken" in client)) {
        throw new Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
      }
      return new idtokenclient_1.IdTokenClient({ targetAudience, idTokenProvider: client });
    }
    async getAccessToken() {
      const client = await this.getClient();
      return (await client.getAccessToken()).token;
    }
    async getRequestHeaders(url) {
      const client = await this.getClient();
      return client.getRequestHeaders(url);
    }
    async authorizeRequest(opts = {}) {
      const url = opts.url;
      const client = await this.getClient();
      const headers = await client.getRequestHeaders(url);
      opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers, headers);
      return opts;
    }
    async fetch(...args) {
      const client = await this.getClient();
      return client.fetch(...args);
    }
    async request(opts) {
      const client = await this.getClient();
      return client.request(opts);
    }
    getEnv() {
      return (0, envDetect_1.getEnv)();
    }
    async sign(data, endpoint) {
      const client = await this.getClient();
      const universe = await this.getUniverseDomain();
      endpoint = endpoint || `https://iamcredentials.${universe}/v1/projects/-/serviceAccounts/`;
      if (client instanceof impersonated_1.Impersonated) {
        const signed = await client.sign(data);
        return signed.signedBlob;
      }
      const crypto = (0, crypto_1.createCrypto)();
      if (client instanceof jwtclient_1.JWT && client.key) {
        const sign = await crypto.sign(client.key, data);
        return sign;
      }
      const creds = await this.getCredentials();
      if (!creds.client_email) {
        throw new Error("Cannot sign data without `client_email`.");
      }
      return this.signBlob(crypto, creds.client_email, data, endpoint);
    }
    async signBlob(crypto, emailOrUniqueId, data, endpoint) {
      const url = new URL(endpoint + `${emailOrUniqueId}:signBlob`);
      const res = await this.request({
        method: "POST",
        url: url.href,
        data: {
          payload: crypto.encodeBase64StringUtf8(data)
        },
        retry: true,
        retryConfig: {
          httpMethodsToRetry: ["POST"]
        }
      });
      return res.data.signedBlob;
    }
  }
  exports.GoogleAuth = GoogleAuth;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/iam.js
var require_iam = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.IAMAuth = undefined;

  class IAMAuth {
    selector;
    token;
    constructor(selector, token) {
      this.selector = selector;
      this.token = token;
      this.selector = selector;
      this.token = token;
    }
    getRequestHeaders() {
      return {
        "x-goog-iam-authority-selector": this.selector,
        "x-goog-iam-authorization-token": this.token
      };
    }
  }
  exports.IAMAuth = IAMAuth;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/downscopedclient.js
var require_downscopedclient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DownscopedClient = exports.EXPIRATION_TIME_OFFSET = exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = undefined;
  var gaxios_1 = require_src();
  var stream = __require("stream");
  var authclient_1 = require_authclient();
  var sts = require_stscredentials();
  var STS_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
  var STS_REQUEST_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
  var STS_SUBJECT_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:access_token";
  exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
  exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;

  class DownscopedClient extends authclient_1.AuthClient {
    authClient;
    credentialAccessBoundary;
    cachedDownscopedAccessToken;
    stsCredential;
    constructor(options, credentialAccessBoundary = {
      accessBoundary: {
        accessBoundaryRules: []
      }
    }) {
      super(options instanceof authclient_1.AuthClient ? {} : options);
      if (options instanceof authclient_1.AuthClient) {
        this.authClient = options;
        this.credentialAccessBoundary = credentialAccessBoundary;
      } else {
        this.authClient = options.authClient;
        this.credentialAccessBoundary = options.credentialAccessBoundary;
      }
      if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) {
        throw new Error("At least one access boundary rule needs to be defined.");
      } else if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > exports.MAX_ACCESS_BOUNDARY_RULES_COUNT) {
        throw new Error("The provided access boundary has more than " + `${exports.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
      }
      for (const rule of this.credentialAccessBoundary.accessBoundary.accessBoundaryRules) {
        if (rule.availablePermissions.length === 0) {
          throw new Error("At least one permission should be defined in access boundary rules.");
        }
      }
      this.stsCredential = new sts.StsCredentials({
        tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token`
      });
      this.cachedDownscopedAccessToken = null;
    }
    setCredentials(credentials) {
      if (!credentials.expiry_date) {
        throw new Error("The access token expiry_date field is missing in the provided " + "credentials.");
      }
      super.setCredentials(credentials);
      this.cachedDownscopedAccessToken = credentials;
    }
    async getAccessToken() {
      if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) {
        await this.refreshAccessTokenAsync();
      }
      return {
        token: this.cachedDownscopedAccessToken.access_token,
        expirationTime: this.cachedDownscopedAccessToken.expiry_date,
        res: this.cachedDownscopedAccessToken.res
      };
    }
    async getRequestHeaders() {
      const accessTokenResponse = await this.getAccessToken();
      const headers = new Headers({
        authorization: `Bearer ${accessTokenResponse.token}`
      });
      return this.addSharedMetadataHeaders(headers);
    }
    request(opts, callback) {
      if (callback) {
        this.requestAsync(opts).then((r) => callback(null, r), (e) => {
          return callback(e, e.response);
        });
      } else {
        return this.requestAsync(opts);
      }
    }
    async requestAsync(opts, reAuthRetried = false) {
      let response;
      try {
        const requestHeaders = await this.getRequestHeaders();
        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
        this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
        response = await this.transporter.request(opts);
      } catch (e) {
        const res = e.response;
        if (res) {
          const statusCode = res.status;
          const isReadableStream = res.config.data instanceof stream.Readable;
          const isAuthErr = statusCode === 401 || statusCode === 403;
          if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
            await this.refreshAccessTokenAsync();
            return await this.requestAsync(opts, true);
          }
        }
        throw e;
      }
      return response;
    }
    async refreshAccessTokenAsync() {
      const subjectToken = (await this.authClient.getAccessToken()).token;
      const stsCredentialsOptions = {
        grantType: STS_GRANT_TYPE,
        requestedTokenType: STS_REQUEST_TOKEN_TYPE,
        subjectToken,
        subjectTokenType: STS_SUBJECT_TOKEN_TYPE
      };
      const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, undefined, this.credentialAccessBoundary);
      const sourceCredExpireDate = this.authClient.credentials?.expiry_date || null;
      const expiryDate = stsResponse.expires_in ? new Date().getTime() + stsResponse.expires_in * 1000 : sourceCredExpireDate;
      this.cachedDownscopedAccessToken = {
        access_token: stsResponse.access_token,
        expiry_date: expiryDate,
        res: stsResponse.res
      };
      this.credentials = {};
      Object.assign(this.credentials, this.cachedDownscopedAccessToken);
      delete this.credentials.res;
      this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedDownscopedAccessToken.expiry_date,
        access_token: this.cachedDownscopedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      });
      return this.cachedDownscopedAccessToken;
    }
    isExpired(downscopedAccessToken) {
      const now = new Date().getTime();
      return downscopedAccessToken.expiry_date ? now >= downscopedAccessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
  }
  exports.DownscopedClient = DownscopedClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/auth/passthrough.js
var require_passthrough = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PassThroughClient = undefined;
  var authclient_1 = require_authclient();

  class PassThroughClient extends authclient_1.AuthClient {
    async request(opts) {
      return this.transporter.request(opts);
    }
    async getAccessToken() {
      return {};
    }
    async getRequestHeaders() {
      return new Headers;
    }
  }
  exports.PassThroughClient = PassThroughClient;
});

// node_modules/.bun/google-auth-library@10.6.2/node_modules/google-auth-library/build/src/index.js
var require_src4 = __commonJS((exports) => {
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
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GoogleAuth = exports.auth = exports.PassThroughClient = exports.ExternalAccountAuthorizedUserClient = exports.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = exports.ExecutableError = exports.PluggableAuthClient = exports.DownscopedClient = exports.BaseExternalAccountClient = exports.ExternalAccountClient = exports.IdentityPoolClient = exports.AwsRequestSigner = exports.AwsClient = exports.UserRefreshClient = exports.LoginTicket = exports.ClientAuthentication = exports.OAuth2Client = exports.CodeChallengeMethod = exports.Impersonated = exports.JWT = exports.JWTAccess = exports.IdTokenClient = exports.IAMAuth = exports.GCPEnv = exports.Compute = exports.DEFAULT_UNIVERSE = exports.AuthClient = exports.gaxios = exports.gcpMetadata = undefined;
  var googleauth_1 = require_googleauth();
  Object.defineProperty(exports, "GoogleAuth", { enumerable: true, get: function() {
    return googleauth_1.GoogleAuth;
  } });
  exports.gcpMetadata = require_src3();
  exports.gaxios = require_src();
  var authclient_1 = require_authclient();
  Object.defineProperty(exports, "AuthClient", { enumerable: true, get: function() {
    return authclient_1.AuthClient;
  } });
  Object.defineProperty(exports, "DEFAULT_UNIVERSE", { enumerable: true, get: function() {
    return authclient_1.DEFAULT_UNIVERSE;
  } });
  var computeclient_1 = require_computeclient();
  Object.defineProperty(exports, "Compute", { enumerable: true, get: function() {
    return computeclient_1.Compute;
  } });
  var envDetect_1 = require_envDetect();
  Object.defineProperty(exports, "GCPEnv", { enumerable: true, get: function() {
    return envDetect_1.GCPEnv;
  } });
  var iam_1 = require_iam();
  Object.defineProperty(exports, "IAMAuth", { enumerable: true, get: function() {
    return iam_1.IAMAuth;
  } });
  var idtokenclient_1 = require_idtokenclient();
  Object.defineProperty(exports, "IdTokenClient", { enumerable: true, get: function() {
    return idtokenclient_1.IdTokenClient;
  } });
  var jwtaccess_1 = require_jwtaccess();
  Object.defineProperty(exports, "JWTAccess", { enumerable: true, get: function() {
    return jwtaccess_1.JWTAccess;
  } });
  var jwtclient_1 = require_jwtclient();
  Object.defineProperty(exports, "JWT", { enumerable: true, get: function() {
    return jwtclient_1.JWT;
  } });
  var impersonated_1 = require_impersonated();
  Object.defineProperty(exports, "Impersonated", { enumerable: true, get: function() {
    return impersonated_1.Impersonated;
  } });
  var oauth2client_1 = require_oauth2client();
  Object.defineProperty(exports, "CodeChallengeMethod", { enumerable: true, get: function() {
    return oauth2client_1.CodeChallengeMethod;
  } });
  Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function() {
    return oauth2client_1.OAuth2Client;
  } });
  Object.defineProperty(exports, "ClientAuthentication", { enumerable: true, get: function() {
    return oauth2client_1.ClientAuthentication;
  } });
  var loginticket_1 = require_loginticket();
  Object.defineProperty(exports, "LoginTicket", { enumerable: true, get: function() {
    return loginticket_1.LoginTicket;
  } });
  var refreshclient_1 = require_refreshclient();
  Object.defineProperty(exports, "UserRefreshClient", { enumerable: true, get: function() {
    return refreshclient_1.UserRefreshClient;
  } });
  var awsclient_1 = require_awsclient();
  Object.defineProperty(exports, "AwsClient", { enumerable: true, get: function() {
    return awsclient_1.AwsClient;
  } });
  var awsrequestsigner_1 = require_awsrequestsigner();
  Object.defineProperty(exports, "AwsRequestSigner", { enumerable: true, get: function() {
    return awsrequestsigner_1.AwsRequestSigner;
  } });
  var identitypoolclient_1 = require_identitypoolclient();
  Object.defineProperty(exports, "IdentityPoolClient", { enumerable: true, get: function() {
    return identitypoolclient_1.IdentityPoolClient;
  } });
  var externalclient_1 = require_externalclient();
  Object.defineProperty(exports, "ExternalAccountClient", { enumerable: true, get: function() {
    return externalclient_1.ExternalAccountClient;
  } });
  var baseexternalclient_1 = require_baseexternalclient();
  Object.defineProperty(exports, "BaseExternalAccountClient", { enumerable: true, get: function() {
    return baseexternalclient_1.BaseExternalAccountClient;
  } });
  var downscopedclient_1 = require_downscopedclient();
  Object.defineProperty(exports, "DownscopedClient", { enumerable: true, get: function() {
    return downscopedclient_1.DownscopedClient;
  } });
  var pluggable_auth_client_1 = require_pluggable_auth_client();
  Object.defineProperty(exports, "PluggableAuthClient", { enumerable: true, get: function() {
    return pluggable_auth_client_1.PluggableAuthClient;
  } });
  Object.defineProperty(exports, "ExecutableError", { enumerable: true, get: function() {
    return pluggable_auth_client_1.ExecutableError;
  } });
  var externalAccountAuthorizedUserClient_1 = require_externalAccountAuthorizedUserClient();
  Object.defineProperty(exports, "EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE", { enumerable: true, get: function() {
    return externalAccountAuthorizedUserClient_1.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE;
  } });
  Object.defineProperty(exports, "ExternalAccountAuthorizedUserClient", { enumerable: true, get: function() {
    return externalAccountAuthorizedUserClient_1.ExternalAccountAuthorizedUserClient;
  } });
  var passthrough_1 = require_passthrough();
  Object.defineProperty(exports, "PassThroughClient", { enumerable: true, get: function() {
    return passthrough_1.PassThroughClient;
  } });
  __exportStar(require_googleToken(), exports);
  var auth = new googleauth_1.GoogleAuth;
  exports.auth = auth;
});
export default require_src4();
