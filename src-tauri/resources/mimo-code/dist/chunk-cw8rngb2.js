// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/tslib.mjs
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var init_tslib = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/uuid.mjs
var uuid4 = function() {
  const { crypto } = globalThis;
  if (crypto?.randomUUID) {
    uuid4 = crypto.randomUUID.bind(crypto);
    return crypto.randomUUID();
  }
  const u8 = new Uint8Array(1);
  const randomByte = crypto ? () => crypto.getRandomValues(u8)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => (+c ^ randomByte() & 15 >> +c / 4).toString(16));
};
var init_uuid = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/errors.mjs
function isAbortError(err) {
  return typeof err === "object" && err !== null && (("name" in err) && err.name === "AbortError" || ("message" in err) && String(err.message).includes("FetchRequestCanceledException"));
}
var castToError = (err) => {
  if (err instanceof Error)
    return err;
  if (typeof err === "object" && err !== null) {
    try {
      if (Object.prototype.toString.call(err) === "[object Error]") {
        const error = new Error(err.message, err.cause ? { cause: err.cause } : {});
        if (err.stack)
          error.stack = err.stack;
        if (err.cause && !error.cause)
          error.cause = err.cause;
        if (err.name)
          error.name = err.name;
        return error;
      }
    } catch {}
    try {
      return new Error(JSON.stringify(err));
    } catch {}
  }
  return new Error(err);
};
var init_errors = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/core/error.mjs
var AnthropicError, APIError, APIUserAbortError, APIConnectionError, APIConnectionTimeoutError, BadRequestError, AuthenticationError, PermissionDeniedError, NotFoundError, ConflictError, UnprocessableEntityError, RateLimitError, InternalServerError;
var init_error = __esm(() => {
  init_errors();
  AnthropicError = class AnthropicError extends Error {
  };
  APIError = class APIError extends AnthropicError {
    constructor(status, error, message, headers, type) {
      super(`${APIError.makeMessage(status, error, message)}`);
      this.status = status;
      this.headers = headers;
      this.requestID = headers?.get("request-id");
      this.error = error;
      this.type = type ?? null;
    }
    static makeMessage(status, error, message) {
      const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
      if (status && msg) {
        return `${status} ${msg}`;
      }
      if (status) {
        return `${status} status code (no body)`;
      }
      if (msg) {
        return msg;
      }
      return "(no status code or body)";
    }
    static generate(status, errorResponse, message, headers) {
      if (!status || !headers) {
        return new APIConnectionError({ message, cause: castToError(errorResponse) });
      }
      const error = errorResponse;
      const type = error?.["error"]?.["type"];
      if (status === 400) {
        return new BadRequestError(status, error, message, headers, type);
      }
      if (status === 401) {
        return new AuthenticationError(status, error, message, headers, type);
      }
      if (status === 403) {
        return new PermissionDeniedError(status, error, message, headers, type);
      }
      if (status === 404) {
        return new NotFoundError(status, error, message, headers, type);
      }
      if (status === 409) {
        return new ConflictError(status, error, message, headers, type);
      }
      if (status === 422) {
        return new UnprocessableEntityError(status, error, message, headers, type);
      }
      if (status === 429) {
        return new RateLimitError(status, error, message, headers, type);
      }
      if (status >= 500) {
        return new InternalServerError(status, error, message, headers, type);
      }
      return new APIError(status, error, message, headers, type);
    }
  };
  APIUserAbortError = class APIUserAbortError extends APIError {
    constructor({ message } = {}) {
      super(undefined, undefined, message || "Request was aborted.", undefined);
    }
  };
  APIConnectionError = class APIConnectionError extends APIError {
    constructor({ message, cause }) {
      super(undefined, undefined, message || "Connection error.", undefined);
      if (cause)
        this.cause = cause;
    }
  };
  APIConnectionTimeoutError = class APIConnectionTimeoutError extends APIConnectionError {
    constructor({ message } = {}) {
      super({ message: message ?? "Request timed out." });
    }
  };
  BadRequestError = class BadRequestError extends APIError {
  };
  AuthenticationError = class AuthenticationError extends APIError {
  };
  PermissionDeniedError = class PermissionDeniedError extends APIError {
  };
  NotFoundError = class NotFoundError extends APIError {
  };
  ConflictError = class ConflictError extends APIError {
  };
  UnprocessableEntityError = class UnprocessableEntityError extends APIError {
  };
  RateLimitError = class RateLimitError extends APIError {
  };
  InternalServerError = class InternalServerError extends APIError {
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/values.mjs
function maybeObj(x) {
  if (typeof x !== "object") {
    return {};
  }
  return x ?? {};
}
function isEmptyObj(obj) {
  if (!obj)
    return true;
  for (const _k in obj)
    return false;
  return true;
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var startsWithSchemeRegexp, isAbsoluteURL = (url) => {
  return startsWithSchemeRegexp.test(url);
}, isArray = (val) => (isArray = Array.isArray, isArray(val)), isReadonlyArray, validatePositiveInteger = (name, n) => {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new AnthropicError(`${name} must be an integer`);
  }
  if (n < 0) {
    throw new AnthropicError(`${name} must be a positive integer`);
  }
  return n;
}, safeJSON = (text) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return;
  }
};
var init_values = __esm(() => {
  init_error();
  startsWithSchemeRegexp = /^[a-z][a-z0-9+.-]*:/i;
  isReadonlyArray = isArray;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/sleep.mjs
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var init_sleep = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/version.mjs
var VERSION = "0.81.0";
var init_version = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs
function getDetectedPlatform() {
  if (typeof Deno !== "undefined" && Deno.build != null) {
    return "deno";
  }
  if (typeof EdgeRuntime !== "undefined") {
    return "edge";
  }
  if (Object.prototype.toString.call(typeof globalThis.process !== "undefined" ? globalThis.process : 0) === "[object process]") {
    return "node";
  }
  return "unknown";
}
function getBrowserInfo() {
  if (typeof navigator === "undefined" || !navigator) {
    return null;
  }
  const browserPatterns = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }
  ];
  for (const { key, pattern } of browserPatterns) {
    const match = pattern.exec(navigator.userAgent);
    if (match) {
      const major = match[1] || 0;
      const minor = match[2] || 0;
      const patch = match[3] || 0;
      return { browser: key, version: `${major}.${minor}.${patch}` };
    }
  }
  return null;
}
var isRunningInBrowser = () => {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof navigator !== "undefined";
}, getPlatformProperties = () => {
  const detectedPlatform = getDetectedPlatform();
  if (detectedPlatform === "deno") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(Deno.build.os),
      "X-Stainless-Arch": normalizeArch(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
    };
  }
  if (typeof EdgeRuntime !== "undefined") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": globalThis.process.version
    };
  }
  if (detectedPlatform === "node") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(globalThis.process.platform ?? "unknown"),
      "X-Stainless-Arch": normalizeArch(globalThis.process.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
    };
  }
  const browserInfo = getBrowserInfo();
  if (browserInfo) {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${browserInfo.browser}`,
      "X-Stainless-Runtime-Version": browserInfo.version
    };
  }
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": VERSION,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
}, normalizeArch = (arch) => {
  if (arch === "x32")
    return "x32";
  if (arch === "x86_64" || arch === "x64")
    return "x64";
  if (arch === "arm")
    return "arm";
  if (arch === "aarch64" || arch === "arm64")
    return "arm64";
  if (arch)
    return `other:${arch}`;
  return "unknown";
}, normalizePlatform = (platform) => {
  platform = platform.toLowerCase();
  if (platform.includes("ios"))
    return "iOS";
  if (platform === "android")
    return "Android";
  if (platform === "darwin")
    return "MacOS";
  if (platform === "win32")
    return "Windows";
  if (platform === "freebsd")
    return "FreeBSD";
  if (platform === "openbsd")
    return "OpenBSD";
  if (platform === "linux")
    return "Linux";
  if (platform)
    return `Other:${platform}`;
  return "Unknown";
}, _platformHeaders, getPlatformHeaders = () => {
  return _platformHeaders ?? (_platformHeaders = getPlatformProperties());
};
var init_detect_platform = __esm(() => {
  init_version();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/shims.mjs
function getDefaultFetch() {
  if (typeof fetch !== "undefined") {
    return fetch;
  }
  throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function makeReadableStream(...args) {
  const ReadableStream = globalThis.ReadableStream;
  if (typeof ReadableStream === "undefined") {
    throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  }
  return new ReadableStream(...args);
}
function ReadableStreamFrom(iterable) {
  let iter = Symbol.asyncIterator in iterable ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();
  return makeReadableStream({
    start() {},
    async pull(controller) {
      const { done, value } = await iter.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
    async cancel() {
      await iter.return?.();
    }
  });
}
function ReadableStreamToAsyncIterable(stream) {
  if (stream[Symbol.asyncIterator])
    return stream;
  const reader = stream.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done)
          reader.releaseLock();
        return result;
      } catch (e) {
        reader.releaseLock();
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: undefined };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
async function CancelReadableStream(stream) {
  if (stream === null || typeof stream !== "object")
    return;
  if (stream[Symbol.asyncIterator]) {
    await stream[Symbol.asyncIterator]().return?.();
    return;
  }
  const reader = stream.getReader();
  const cancelPromise = reader.cancel();
  reader.releaseLock();
  await cancelPromise;
}
var init_shims = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/request-options.mjs
var FallbackEncoder = ({ headers, body }) => {
  return {
    bodyHeaders: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  };
};
var init_request_options = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/query.mjs
function stringifyQuery(query) {
  return Object.entries(query).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
    if (value === null) {
      return `${encodeURIComponent(key)}=`;
    }
    throw new AnthropicError(`Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
  }).join("&");
}
var init_query = __esm(() => {
  init_error();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/bytes.mjs
function concatBytes(buffers) {
  let length = 0;
  for (const buffer of buffers) {
    length += buffer.length;
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const buffer of buffers) {
    output.set(buffer, index);
    index += buffer.length;
  }
  return output;
}
function encodeUTF8(str) {
  let encoder;
  return (encodeUTF8_ ?? (encoder = new globalThis.TextEncoder, encodeUTF8_ = encoder.encode.bind(encoder)))(str);
}
function decodeUTF8(bytes) {
  let decoder;
  return (decodeUTF8_ ?? (decoder = new globalThis.TextDecoder, decodeUTF8_ = decoder.decode.bind(decoder)))(bytes);
}
var encodeUTF8_, decodeUTF8_;
var init_bytes = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/decoders/line.mjs
class LineDecoder {
  constructor() {
    _LineDecoder_buffer.set(this, undefined);
    _LineDecoder_carriageReturnIndex.set(this, undefined);
    __classPrivateFieldSet(this, _LineDecoder_buffer, new Uint8Array, "f");
    __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
  }
  decode(chunk) {
    if (chunk == null) {
      return [];
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? encodeUTF8(chunk) : chunk;
    __classPrivateFieldSet(this, _LineDecoder_buffer, concatBytes([__classPrivateFieldGet(this, _LineDecoder_buffer, "f"), binaryChunk]), "f");
    const lines = [];
    let patternIndex;
    while ((patternIndex = findNewlineIndex(__classPrivateFieldGet(this, _LineDecoder_buffer, "f"), __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f"))) != null) {
      if (patternIndex.carriage && __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") == null) {
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, patternIndex.index, "f");
        continue;
      }
      if (__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") != null && (patternIndex.index !== __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") + 1 || patternIndex.carriage)) {
        lines.push(decodeUTF8(__classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(0, __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") - 1)));
        __classPrivateFieldSet(this, _LineDecoder_buffer, __classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f")), "f");
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
        continue;
      }
      const endIndex = __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") !== null ? patternIndex.preceding - 1 : patternIndex.preceding;
      const line = decodeUTF8(__classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(0, endIndex));
      lines.push(line);
      __classPrivateFieldSet(this, _LineDecoder_buffer, __classPrivateFieldGet(this, _LineDecoder_buffer, "f").subarray(patternIndex.index), "f");
      __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
    }
    return lines;
  }
  flush() {
    if (!__classPrivateFieldGet(this, _LineDecoder_buffer, "f").length) {
      return [];
    }
    return this.decode(`
`);
  }
}
function findNewlineIndex(buffer, startIndex) {
  const newline = 10;
  const carriage = 13;
  for (let i = startIndex ?? 0;i < buffer.length; i++) {
    if (buffer[i] === newline) {
      return { preceding: i, index: i + 1, carriage: false };
    }
    if (buffer[i] === carriage) {
      return { preceding: i, index: i + 1, carriage: true };
    }
  }
  return null;
}
function findDoubleNewlineIndex(buffer) {
  const newline = 10;
  const carriage = 13;
  for (let i = 0;i < buffer.length - 1; i++) {
    if (buffer[i] === newline && buffer[i + 1] === newline) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === carriage) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === newline && i + 3 < buffer.length && buffer[i + 2] === carriage && buffer[i + 3] === newline) {
      return i + 4;
    }
  }
  return -1;
}
var _LineDecoder_buffer, _LineDecoder_carriageReturnIndex;
var init_line = __esm(() => {
  init_tslib();
  init_bytes();
  _LineDecoder_buffer = new WeakMap, _LineDecoder_carriageReturnIndex = new WeakMap;
  LineDecoder.NEWLINE_CHARS = new Set([`
`, "\r"]);
  LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/log.mjs
function noop() {}
function makeLogFn(fnLevel, logger, logLevel) {
  if (!logger || levelNumbers[fnLevel] > levelNumbers[logLevel]) {
    return noop;
  } else {
    return logger[fnLevel].bind(logger);
  }
}
function loggerFor(client) {
  const logger = client.logger;
  const logLevel = client.logLevel ?? "off";
  if (!logger) {
    return noopLogger;
  }
  const cachedLogger = cachedLoggers.get(logger);
  if (cachedLogger && cachedLogger[0] === logLevel) {
    return cachedLogger[1];
  }
  const levelLogger = {
    error: makeLogFn("error", logger, logLevel),
    warn: makeLogFn("warn", logger, logLevel),
    info: makeLogFn("info", logger, logLevel),
    debug: makeLogFn("debug", logger, logLevel)
  };
  cachedLoggers.set(logger, [logLevel, levelLogger]);
  return levelLogger;
}
var levelNumbers, parseLogLevel = (maybeLevel, sourceName, client) => {
  if (!maybeLevel) {
    return;
  }
  if (hasOwn(levelNumbers, maybeLevel)) {
    return maybeLevel;
  }
  loggerFor(client).warn(`${sourceName} was set to ${JSON.stringify(maybeLevel)}, expected one of ${JSON.stringify(Object.keys(levelNumbers))}`);
  return;
}, noopLogger, cachedLoggers, formatRequestDetails = (details) => {
  if (details.options) {
    details.options = { ...details.options };
    delete details.options["headers"];
  }
  if (details.headers) {
    details.headers = Object.fromEntries((details.headers instanceof Headers ? [...details.headers] : Object.entries(details.headers)).map(([name, value]) => [
      name,
      name.toLowerCase() === "x-api-key" || name.toLowerCase() === "authorization" || name.toLowerCase() === "cookie" || name.toLowerCase() === "set-cookie" ? "***" : value
    ]));
  }
  if ("retryOfRequestLogID" in details) {
    if (details.retryOfRequestLogID) {
      details.retryOf = details.retryOfRequestLogID;
    }
    delete details.retryOfRequestLogID;
  }
  return details;
};
var init_log = __esm(() => {
  init_values();
  levelNumbers = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
  };
  noopLogger = {
    error: noop,
    warn: noop,
    info: noop,
    debug: noop
  };
  cachedLoggers = /* @__PURE__ */ new WeakMap;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/core/streaming.mjs
async function* _iterSSEMessages(response, controller) {
  if (!response.body) {
    controller.abort();
    if (typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative") {
      throw new AnthropicError(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`);
    }
    throw new AnthropicError(`Attempted to iterate over a response with no body`);
  }
  const sseDecoder = new SSEDecoder;
  const lineDecoder = new LineDecoder;
  const iter = ReadableStreamToAsyncIterable(response.body);
  for await (const sseChunk of iterSSEChunks(iter)) {
    for (const line of lineDecoder.decode(sseChunk)) {
      const sse = sseDecoder.decode(line);
      if (sse)
        yield sse;
    }
  }
  for (const line of lineDecoder.flush()) {
    const sse = sseDecoder.decode(line);
    if (sse)
      yield sse;
  }
}
async function* iterSSEChunks(iterator) {
  let data = new Uint8Array;
  for await (const chunk of iterator) {
    if (chunk == null) {
      continue;
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? encodeUTF8(chunk) : chunk;
    let newData = new Uint8Array(data.length + binaryChunk.length);
    newData.set(data);
    newData.set(binaryChunk, data.length);
    data = newData;
    let patternIndex;
    while ((patternIndex = findDoubleNewlineIndex(data)) !== -1) {
      yield data.slice(0, patternIndex);
      data = data.slice(patternIndex);
    }
  }
  if (data.length > 0) {
    yield data;
  }
}

class SSEDecoder {
  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }
  decode(line) {
    if (line.endsWith("\r")) {
      line = line.substring(0, line.length - 1);
    }
    if (!line) {
      if (!this.event && !this.data.length)
        return null;
      const sse = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks
      };
      this.event = null;
      this.data = [];
      this.chunks = [];
      return sse;
    }
    this.chunks.push(line);
    if (line.startsWith(":")) {
      return null;
    }
    let [fieldname, _, value] = partition(line, ":");
    if (value.startsWith(" ")) {
      value = value.substring(1);
    }
    if (fieldname === "event") {
      this.event = value;
    } else if (fieldname === "data") {
      this.data.push(value);
    }
    return null;
  }
}
function partition(str, delimiter) {
  const index = str.indexOf(delimiter);
  if (index !== -1) {
    return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
  }
  return [str, "", ""];
}
var _Stream_client, Stream;
var init_streaming = __esm(() => {
  init_tslib();
  init_error();
  init_shims();
  init_line();
  init_shims();
  init_errors();
  init_values();
  init_bytes();
  init_log();
  init_error();
  Stream = class Stream {
    constructor(iterator, controller, client) {
      this.iterator = iterator;
      _Stream_client.set(this, undefined);
      this.controller = controller;
      __classPrivateFieldSet(this, _Stream_client, client, "f");
    }
    static fromSSEResponse(response, controller, client) {
      let consumed = false;
      const logger = client ? loggerFor(client) : console;
      async function* iterator() {
        if (consumed) {
          throw new AnthropicError("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        }
        consumed = true;
        let done = false;
        try {
          for await (const sse of _iterSSEMessages(response, controller)) {
            if (sse.event === "completion") {
              try {
                yield JSON.parse(sse.data);
              } catch (e) {
                logger.error(`Could not parse message into JSON:`, sse.data);
                logger.error(`From chunk:`, sse.raw);
                throw e;
              }
            }
            if (sse.event === "message_start" || sse.event === "message_delta" || sse.event === "message_stop" || sse.event === "content_block_start" || sse.event === "content_block_delta" || sse.event === "content_block_stop") {
              try {
                yield JSON.parse(sse.data);
              } catch (e) {
                logger.error(`Could not parse message into JSON:`, sse.data);
                logger.error(`From chunk:`, sse.raw);
                throw e;
              }
            }
            if (sse.event === "ping") {
              continue;
            }
            if (sse.event === "error") {
              const body = safeJSON(sse.data) ?? sse.data;
              const type = body?.error?.type;
              throw new APIError(undefined, body, undefined, response.headers, type);
            }
          }
          done = true;
        } catch (e) {
          if (isAbortError(e))
            return;
          throw e;
        } finally {
          if (!done)
            controller.abort();
        }
      }
      return new Stream(iterator, controller, client);
    }
    static fromReadableStream(readableStream, controller, client) {
      let consumed = false;
      async function* iterLines() {
        const lineDecoder = new LineDecoder;
        const iter = ReadableStreamToAsyncIterable(readableStream);
        for await (const chunk of iter) {
          for (const line of lineDecoder.decode(chunk)) {
            yield line;
          }
        }
        for (const line of lineDecoder.flush()) {
          yield line;
        }
      }
      async function* iterator() {
        if (consumed) {
          throw new AnthropicError("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        }
        consumed = true;
        let done = false;
        try {
          for await (const line of iterLines()) {
            if (done)
              continue;
            if (line)
              yield JSON.parse(line);
          }
          done = true;
        } catch (e) {
          if (isAbortError(e))
            return;
          throw e;
        } finally {
          if (!done)
            controller.abort();
        }
      }
      return new Stream(iterator, controller, client);
    }
    [(_Stream_client = new WeakMap, Symbol.asyncIterator)]() {
      return this.iterator();
    }
    tee() {
      const left = [];
      const right = [];
      const iterator = this.iterator();
      const teeIterator = (queue) => {
        return {
          next: () => {
            if (queue.length === 0) {
              const result = iterator.next();
              left.push(result);
              right.push(result);
            }
            return queue.shift();
          }
        };
      };
      return [
        new Stream(() => teeIterator(left), this.controller, __classPrivateFieldGet(this, _Stream_client, "f")),
        new Stream(() => teeIterator(right), this.controller, __classPrivateFieldGet(this, _Stream_client, "f"))
      ];
    }
    toReadableStream() {
      const self = this;
      let iter;
      return makeReadableStream({
        async start() {
          iter = self[Symbol.asyncIterator]();
        },
        async pull(ctrl) {
          try {
            const { value, done } = await iter.next();
            if (done)
              return ctrl.close();
            const bytes = encodeUTF8(JSON.stringify(value) + `
`);
            ctrl.enqueue(bytes);
          } catch (err) {
            ctrl.error(err);
          }
        },
        async cancel() {
          await iter.return?.();
        }
      });
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/parse.mjs
async function defaultParseResponse(client, props) {
  const { response, requestLogID, retryOfRequestLogID, startTime } = props;
  const body = await (async () => {
    if (props.options.stream) {
      loggerFor(client).debug("response", response.status, response.url, response.headers, response.body);
      if (props.options.__streamClass) {
        return props.options.__streamClass.fromSSEResponse(response, props.controller);
      }
      return Stream.fromSSEResponse(response, props.controller);
    }
    if (response.status === 204) {
      return null;
    }
    if (props.options.__binaryResponse) {
      return response;
    }
    const contentType = response.headers.get("content-type");
    const mediaType = contentType?.split(";")[0]?.trim();
    const isJSON = mediaType?.includes("application/json") || mediaType?.endsWith("+json");
    if (isJSON) {
      const contentLength = response.headers.get("content-length");
      if (contentLength === "0") {
        return;
      }
      const json = await response.json();
      return addRequestID(json, response);
    }
    const text = await response.text();
    return text;
  })();
  loggerFor(client).debug(`[${requestLogID}] response parsed`, formatRequestDetails({
    retryOfRequestLogID,
    url: response.url,
    status: response.status,
    body,
    durationMs: Date.now() - startTime
  }));
  return body;
}
function addRequestID(value, response) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  return Object.defineProperty(value, "_request_id", {
    value: response.headers.get("request-id"),
    enumerable: false
  });
}
var init_parse = __esm(() => {
  init_streaming();
  init_log();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/core/api-promise.mjs
var _APIPromise_client, APIPromise;
var init_api_promise = __esm(() => {
  init_tslib();
  init_parse();
  APIPromise = class APIPromise extends Promise {
    constructor(client, responsePromise, parseResponse = defaultParseResponse) {
      super((resolve) => {
        resolve(null);
      });
      this.responsePromise = responsePromise;
      this.parseResponse = parseResponse;
      _APIPromise_client.set(this, undefined);
      __classPrivateFieldSet(this, _APIPromise_client, client, "f");
    }
    _thenUnwrap(transform) {
      return new APIPromise(__classPrivateFieldGet(this, _APIPromise_client, "f"), this.responsePromise, async (client, props) => addRequestID(transform(await this.parseResponse(client, props), props), props.response));
    }
    asResponse() {
      return this.responsePromise.then((p) => p.response);
    }
    async withResponse() {
      const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
      return { data, response, request_id: response.headers.get("request-id") };
    }
    parse() {
      if (!this.parsedPromise) {
        this.parsedPromise = this.responsePromise.then((data) => this.parseResponse(__classPrivateFieldGet(this, _APIPromise_client, "f"), data));
      }
      return this.parsedPromise;
    }
    then(onfulfilled, onrejected) {
      return this.parse().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return this.parse().catch(onrejected);
    }
    finally(onfinally) {
      return this.parse().finally(onfinally);
    }
  };
  _APIPromise_client = new WeakMap;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/core/pagination.mjs
var _AbstractPage_client, AbstractPage, PagePromise, Page, PageCursor;
var init_pagination = __esm(() => {
  init_tslib();
  init_error();
  init_parse();
  init_api_promise();
  init_values();
  AbstractPage = class AbstractPage {
    constructor(client, response, body, options) {
      _AbstractPage_client.set(this, undefined);
      __classPrivateFieldSet(this, _AbstractPage_client, client, "f");
      this.options = options;
      this.response = response;
      this.body = body;
    }
    hasNextPage() {
      const items = this.getPaginatedItems();
      if (!items.length)
        return false;
      return this.nextPageRequestOptions() != null;
    }
    async getNextPage() {
      const nextOptions = this.nextPageRequestOptions();
      if (!nextOptions) {
        throw new AnthropicError("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
      }
      return await __classPrivateFieldGet(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
    }
    async* iterPages() {
      let page = this;
      yield page;
      while (page.hasNextPage()) {
        page = await page.getNextPage();
        yield page;
      }
    }
    async* [(_AbstractPage_client = new WeakMap, Symbol.asyncIterator)]() {
      for await (const page of this.iterPages()) {
        for (const item of page.getPaginatedItems()) {
          yield item;
        }
      }
    }
  };
  PagePromise = class PagePromise extends APIPromise {
    constructor(client, request, Page) {
      super(client, request, async (client2, props) => new Page(client2, props.response, await defaultParseResponse(client2, props), props.options));
    }
    async* [Symbol.asyncIterator]() {
      const page = await this;
      for await (const item of page) {
        yield item;
      }
    }
  };
  Page = class Page extends AbstractPage {
    constructor(client, response, body, options) {
      super(client, response, body, options);
      this.data = body.data || [];
      this.has_more = body.has_more || false;
      this.first_id = body.first_id || null;
      this.last_id = body.last_id || null;
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    hasNextPage() {
      if (this.has_more === false) {
        return false;
      }
      return super.hasNextPage();
    }
    nextPageRequestOptions() {
      if (this.options.query?.["before_id"]) {
        const first_id = this.first_id;
        if (!first_id) {
          return null;
        }
        return {
          ...this.options,
          query: {
            ...maybeObj(this.options.query),
            before_id: first_id
          }
        };
      }
      const cursor = this.last_id;
      if (!cursor) {
        return null;
      }
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          after_id: cursor
        }
      };
    }
  };
  PageCursor = class PageCursor extends AbstractPage {
    constructor(client, response, body, options) {
      super(client, response, body, options);
      this.data = body.data || [];
      this.has_more = body.has_more || false;
      this.next_page = body.next_page || null;
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    hasNextPage() {
      if (this.has_more === false) {
        return false;
      }
      return super.hasNextPage();
    }
    nextPageRequestOptions() {
      const cursor = this.next_page;
      if (!cursor) {
        return null;
      }
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          page: cursor
        }
      };
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/uploads.mjs
function makeFile(fileBits, fileName, options) {
  checkFileSupport();
  return new File(fileBits, fileName ?? "unknown_file", options);
}
function getName(value, stripPath) {
  const val = typeof value === "object" && value !== null && (("name" in value) && value.name && String(value.name) || ("url" in value) && value.url && String(value.url) || ("filename" in value) && value.filename && String(value.filename) || ("path" in value) && value.path && String(value.path)) || "";
  return stripPath ? val.split(/[\\/]/).pop() || undefined : val;
}
function supportsFormData(fetchObject) {
  const fetch2 = typeof fetchObject === "function" ? fetchObject : fetchObject.fetch;
  const cached = supportsFormDataMap.get(fetch2);
  if (cached)
    return cached;
  const promise = (async () => {
    try {
      const FetchResponse = "Response" in fetch2 ? fetch2.Response : (await fetch2("data:,")).constructor;
      const data = new FormData;
      if (data.toString() === await new FetchResponse(data).text()) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  })();
  supportsFormDataMap.set(fetch2, promise);
  return promise;
}
var checkFileSupport = () => {
  if (typeof File === "undefined") {
    const { process } = globalThis;
    const isOldNode = typeof process?.versions?.node === "string" && parseInt(process.versions.node.split(".")) < 20;
    throw new Error("`File` is not defined as a global, which is required for file uploads." + (isOldNode ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
}, isAsyncIterable = (value) => value != null && typeof value === "object" && typeof value[Symbol.asyncIterator] === "function", multipartFormRequestOptions = async (opts, fetch2, stripFilenames = true) => {
  return { ...opts, body: await createForm(opts.body, fetch2, stripFilenames) };
}, supportsFormDataMap, createForm = async (body, fetch2, stripFilenames = true) => {
  if (!await supportsFormData(fetch2)) {
    throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
  }
  const form = new FormData;
  await Promise.all(Object.entries(body || {}).map(([key, value]) => addFormValue(form, key, value, stripFilenames)));
  return form;
}, isNamedBlob = (value) => value instanceof Blob && ("name" in value), addFormValue = async (form, key, value, stripFilenames) => {
  if (value === undefined)
    return;
  if (value == null) {
    throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    form.append(key, String(value));
  } else if (value instanceof Response) {
    let options = {};
    const contentType = value.headers.get("Content-Type");
    if (contentType) {
      options = { type: contentType };
    }
    form.append(key, makeFile([await value.blob()], getName(value, stripFilenames), options));
  } else if (isAsyncIterable(value)) {
    form.append(key, makeFile([await new Response(ReadableStreamFrom(value)).blob()], getName(value, stripFilenames)));
  } else if (isNamedBlob(value)) {
    form.append(key, makeFile([value], getName(value, stripFilenames), { type: value.type }));
  } else if (Array.isArray(value)) {
    await Promise.all(value.map((entry) => addFormValue(form, key + "[]", entry, stripFilenames)));
  } else if (typeof value === "object") {
    await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, `${key}[${name}]`, prop, stripFilenames)));
  } else {
    throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
  }
};
var init_uploads = __esm(() => {
  init_shims();
  supportsFormDataMap = /* @__PURE__ */ new WeakMap;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/to-file.mjs
async function toFile(value, name, options) {
  checkFileSupport();
  value = await value;
  name || (name = getName(value, true));
  if (isFileLike(value)) {
    if (value instanceof File && name == null && options == null) {
      return value;
    }
    return makeFile([await value.arrayBuffer()], name ?? value.name, {
      type: value.type,
      lastModified: value.lastModified,
      ...options
    });
  }
  if (isResponseLike(value)) {
    const blob = await value.blob();
    name || (name = new URL(value.url).pathname.split(/[\\/]/).pop());
    return makeFile(await getBytes(blob), name, options);
  }
  const parts = await getBytes(value);
  if (!options?.type) {
    const type = parts.find((part) => typeof part === "object" && ("type" in part) && part.type);
    if (typeof type === "string") {
      options = { ...options, type };
    }
  }
  return makeFile(parts, name, options);
}
async function getBytes(value) {
  let parts = [];
  if (typeof value === "string" || ArrayBuffer.isView(value) || value instanceof ArrayBuffer) {
    parts.push(value);
  } else if (isBlobLike(value)) {
    parts.push(value instanceof Blob ? value : await value.arrayBuffer());
  } else if (isAsyncIterable(value)) {
    for await (const chunk of value) {
      parts.push(...await getBytes(chunk));
    }
  } else {
    const constructor = value?.constructor?.name;
    throw new Error(`Unexpected data type: ${typeof value}${constructor ? `; constructor: ${constructor}` : ""}${propsForError(value)}`);
  }
  return parts;
}
function propsForError(value) {
  if (typeof value !== "object" || value === null)
    return "";
  const props = Object.getOwnPropertyNames(value);
  return `; props: [${props.map((p) => `"${p}"`).join(", ")}]`;
}
var isBlobLike = (value) => value != null && typeof value === "object" && typeof value.size === "number" && typeof value.type === "string" && typeof value.text === "function" && typeof value.slice === "function" && typeof value.arrayBuffer === "function", isFileLike = (value) => value != null && typeof value === "object" && typeof value.name === "string" && typeof value.lastModified === "number" && isBlobLike(value), isResponseLike = (value) => value != null && typeof value === "object" && typeof value.url === "string" && typeof value.blob === "function";
var init_to_file = __esm(() => {
  init_uploads();
  init_uploads();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/core/uploads.mjs
var init_uploads2 = __esm(() => {
  init_to_file();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/shared.mjs
var init_shared = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/core/resource.mjs
class APIResource {
  constructor(client) {
    this._client = client;
  }
}
var init_resource = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/headers.mjs
function* iterateHeaders(headers) {
  if (!headers)
    return;
  if (brand_privateNullableHeaders in headers) {
    const { values, nulls } = headers;
    yield* values.entries();
    for (const name of nulls) {
      yield [name, null];
    }
    return;
  }
  let shouldClear = false;
  let iter;
  if (headers instanceof Headers) {
    iter = headers.entries();
  } else if (isReadonlyArray(headers)) {
    iter = headers;
  } else {
    shouldClear = true;
    iter = Object.entries(headers ?? {});
  }
  for (let row of iter) {
    const name = row[0];
    if (typeof name !== "string")
      throw new TypeError("expected header name to be a string");
    const values = isReadonlyArray(row[1]) ? row[1] : [row[1]];
    let didClear = false;
    for (const value of values) {
      if (value === undefined)
        continue;
      if (shouldClear && !didClear) {
        didClear = true;
        yield [name, null];
      }
      yield [name, value];
    }
  }
}
var brand_privateNullableHeaders, buildHeaders = (newHeaders) => {
  const targetHeaders = new Headers;
  const nullHeaders = new Set;
  for (const headers of newHeaders) {
    const seenHeaders = new Set;
    for (const [name, value] of iterateHeaders(headers)) {
      const lowerName = name.toLowerCase();
      if (!seenHeaders.has(lowerName)) {
        targetHeaders.delete(name);
        seenHeaders.add(lowerName);
      }
      if (value === null) {
        targetHeaders.delete(name);
        nullHeaders.add(lowerName);
      } else {
        targetHeaders.append(name, value);
        nullHeaders.delete(lowerName);
      }
    }
  }
  return { [brand_privateNullableHeaders]: true, values: targetHeaders, nulls: nullHeaders };
};
var init_headers = __esm(() => {
  init_values();
  brand_privateNullableHeaders = Symbol.for("brand.privateNullableHeaders");
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/stainless-helper-header.mjs
function wasCreatedByStainlessHelper(value) {
  return typeof value === "object" && value !== null && SDK_HELPER_SYMBOL in value;
}
function collectStainlessHelpers(tools, messages) {
  const helpers = new Set;
  if (tools) {
    for (const tool of tools) {
      if (wasCreatedByStainlessHelper(tool)) {
        helpers.add(tool[SDK_HELPER_SYMBOL]);
      }
    }
  }
  if (messages) {
    for (const message of messages) {
      if (wasCreatedByStainlessHelper(message)) {
        helpers.add(message[SDK_HELPER_SYMBOL]);
      }
      if (Array.isArray(message.content)) {
        for (const block of message.content) {
          if (wasCreatedByStainlessHelper(block)) {
            helpers.add(block[SDK_HELPER_SYMBOL]);
          }
        }
      }
    }
  }
  return Array.from(helpers);
}
function stainlessHelperHeader(tools, messages) {
  const helpers = collectStainlessHelpers(tools, messages);
  if (helpers.length === 0)
    return {};
  return { "x-stainless-helper": helpers.join(", ") };
}
function stainlessHelperHeaderFromFile(file) {
  if (wasCreatedByStainlessHelper(file)) {
    return { "x-stainless-helper": file[SDK_HELPER_SYMBOL] };
  }
  return {};
}
var SDK_HELPER_SYMBOL;
var init_stainless_helper_header = __esm(() => {
  SDK_HELPER_SYMBOL = Symbol("anthropic.sdk.stainlessHelper");
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/path.mjs
function encodeURIPath(str) {
  return str.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var EMPTY, createPathTagFunction = (pathEncoder = encodeURIPath) => function path(statics, ...params) {
  if (statics.length === 1)
    return statics[0];
  let postPath = false;
  const invalidSegments = [];
  const path2 = statics.reduce((previousValue, currentValue, index) => {
    if (/[?#]/.test(currentValue)) {
      postPath = true;
    }
    const value = params[index];
    let encoded = (postPath ? encodeURIComponent : pathEncoder)("" + value);
    if (index !== params.length && (value == null || typeof value === "object" && value.toString === Object.getPrototypeOf(Object.getPrototypeOf(value.hasOwnProperty ?? EMPTY) ?? EMPTY)?.toString)) {
      encoded = value + "";
      invalidSegments.push({
        start: previousValue.length + currentValue.length,
        length: encoded.length,
        error: `Value of type ${Object.prototype.toString.call(value).slice(8, -1)} is not a valid path parameter`
      });
    }
    return previousValue + currentValue + (index === params.length ? "" : encoded);
  }, "");
  const pathOnly = path2.split(/[?#]/, 1)[0];
  const invalidSegmentPattern = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
  let match;
  while ((match = invalidSegmentPattern.exec(pathOnly)) !== null) {
    invalidSegments.push({
      start: match.index,
      length: match[0].length,
      error: `Value "${match[0]}" can't be safely passed as a path parameter`
    });
  }
  invalidSegments.sort((a, b) => a.start - b.start);
  if (invalidSegments.length > 0) {
    let lastEnd = 0;
    const underline = invalidSegments.reduce((acc, segment) => {
      const spaces = " ".repeat(segment.start - lastEnd);
      const arrows = "^".repeat(segment.length);
      lastEnd = segment.start + segment.length;
      return acc + spaces + arrows;
    }, "");
    throw new AnthropicError(`Path parameters result in path with invalid segments:
${invalidSegments.map((e) => e.error).join(`
`)}
${path2}
${underline}`);
  }
  return path2;
}, path;
var init_path = __esm(() => {
  init_error();
  EMPTY = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.create(null));
  path = /* @__PURE__ */ createPathTagFunction(encodeURIPath);
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/files.mjs
var Files;
var init_files = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_stainless_helper_header();
  init_uploads();
  init_path();
  Files = class Files extends APIResource {
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/files", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      });
    }
    delete(fileID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.delete(path`/v1/files/${fileID}`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      });
    }
    download(fileID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/files/${fileID}/content`, {
        ...options,
        headers: buildHeaders([
          {
            "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString(),
            Accept: "application/binary"
          },
          options?.headers
        ]),
        __binaryResponse: true
      });
    }
    retrieveMetadata(fileID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/files/${fileID}`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          options?.headers
        ])
      });
    }
    upload(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/files", multipartFormRequestOptions({
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "files-api-2025-04-14"].toString() },
          stainlessHelperHeaderFromFile(body.file),
          options?.headers
        ])
      }, this._client));
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/models.mjs
var Models;
var init_models = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_path();
  Models = class Models extends APIResource {
    retrieve(modelID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/models/${modelID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/models?beta=true", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/error.mjs
var init_error2 = __esm(() => {
  init_error();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/constants.mjs
var MODEL_NONSTREAMING_TOKENS;
var init_constants = __esm(() => {
  MODEL_NONSTREAMING_TOKENS = {
    "claude-opus-4-20250514": 8192,
    "claude-opus-4-0": 8192,
    "claude-4-opus-20250514": 8192,
    "anthropic.claude-opus-4-20250514-v1:0": 8192,
    "claude-opus-4@20250514": 8192,
    "claude-opus-4-1-20250805": 8192,
    "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
    "claude-opus-4-1@20250805": 8192
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/beta-parser.mjs
function getOutputFormat(params) {
  return params?.output_format ?? params?.output_config?.format;
}
function maybeParseBetaMessage(message, params, opts) {
  const outputFormat = getOutputFormat(params);
  if (!params || !("parse" in (outputFormat ?? {}))) {
    return {
      ...message,
      content: message.content.map((block) => {
        if (block.type === "text") {
          const parsedBlock = Object.defineProperty({ ...block }, "parsed_output", {
            value: null,
            enumerable: false
          });
          return Object.defineProperty(parsedBlock, "parsed", {
            get() {
              opts.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead.");
              return null;
            },
            enumerable: false
          });
        }
        return block;
      }),
      parsed_output: null
    };
  }
  return parseBetaMessage(message, params, opts);
}
function parseBetaMessage(message, params, opts) {
  let firstParsedOutput = null;
  const content = message.content.map((block) => {
    if (block.type === "text") {
      const parsedOutput = parseBetaOutputFormat(params, block.text);
      if (firstParsedOutput === null) {
        firstParsedOutput = parsedOutput;
      }
      const parsedBlock = Object.defineProperty({ ...block }, "parsed_output", {
        value: parsedOutput,
        enumerable: false
      });
      return Object.defineProperty(parsedBlock, "parsed", {
        get() {
          opts.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead.");
          return parsedOutput;
        },
        enumerable: false
      });
    }
    return block;
  });
  return {
    ...message,
    content,
    parsed_output: firstParsedOutput
  };
}
function parseBetaOutputFormat(params, content) {
  const outputFormat = getOutputFormat(params);
  if (outputFormat?.type !== "json_schema") {
    return null;
  }
  try {
    if ("parse" in outputFormat) {
      return outputFormat.parse(content);
    }
    return JSON.parse(content);
  } catch (error2) {
    throw new AnthropicError(`Failed to parse structured output: ${error2}`);
  }
}
var init_beta_parser = __esm(() => {
  init_error();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/_vendor/partial-json-parser/parser.mjs
var tokenize = (input) => {
  let current = 0;
  let tokens = [];
  while (current < input.length) {
    let char = input[current];
    if (char === "\\") {
      current++;
      continue;
    }
    if (char === "{") {
      tokens.push({
        type: "brace",
        value: "{"
      });
      current++;
      continue;
    }
    if (char === "}") {
      tokens.push({
        type: "brace",
        value: "}"
      });
      current++;
      continue;
    }
    if (char === "[") {
      tokens.push({
        type: "paren",
        value: "["
      });
      current++;
      continue;
    }
    if (char === "]") {
      tokens.push({
        type: "paren",
        value: "]"
      });
      current++;
      continue;
    }
    if (char === ":") {
      tokens.push({
        type: "separator",
        value: ":"
      });
      current++;
      continue;
    }
    if (char === ",") {
      tokens.push({
        type: "delimiter",
        value: ","
      });
      current++;
      continue;
    }
    if (char === '"') {
      let value = "";
      let danglingQuote = false;
      char = input[++current];
      while (char !== '"') {
        if (current === input.length) {
          danglingQuote = true;
          break;
        }
        if (char === "\\") {
          current++;
          if (current === input.length) {
            danglingQuote = true;
            break;
          }
          value += char + input[current];
          char = input[++current];
        } else {
          value += char;
          char = input[++current];
        }
      }
      char = input[++current];
      if (!danglingQuote) {
        tokens.push({
          type: "string",
          value
        });
      }
      continue;
    }
    let WHITESPACE = /\s/;
    if (char && WHITESPACE.test(char)) {
      current++;
      continue;
    }
    let NUMBERS = /[0-9]/;
    if (char && NUMBERS.test(char) || char === "-" || char === ".") {
      let value = "";
      if (char === "-") {
        value += char;
        char = input[++current];
      }
      while (char && NUMBERS.test(char) || char === ".") {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "number",
        value
      });
      continue;
    }
    let LETTERS = /[a-z]/i;
    if (char && LETTERS.test(char)) {
      let value = "";
      while (char && LETTERS.test(char)) {
        if (current === input.length) {
          break;
        }
        value += char;
        char = input[++current];
      }
      if (value == "true" || value == "false" || value === "null") {
        tokens.push({
          type: "name",
          value
        });
      } else {
        current++;
        continue;
      }
      continue;
    }
    current++;
  }
  return tokens;
}, strip = (tokens) => {
  if (tokens.length === 0) {
    return tokens;
  }
  let lastToken = tokens[tokens.length - 1];
  switch (lastToken.type) {
    case "separator":
      tokens = tokens.slice(0, tokens.length - 1);
      return strip(tokens);
      break;
    case "number":
      let lastCharacterOfLastToken = lastToken.value[lastToken.value.length - 1];
      if (lastCharacterOfLastToken === "." || lastCharacterOfLastToken === "-") {
        tokens = tokens.slice(0, tokens.length - 1);
        return strip(tokens);
      }
    case "string":
      let tokenBeforeTheLastToken = tokens[tokens.length - 2];
      if (tokenBeforeTheLastToken?.type === "delimiter") {
        tokens = tokens.slice(0, tokens.length - 1);
        return strip(tokens);
      } else if (tokenBeforeTheLastToken?.type === "brace" && tokenBeforeTheLastToken.value === "{") {
        tokens = tokens.slice(0, tokens.length - 1);
        return strip(tokens);
      }
      break;
    case "delimiter":
      tokens = tokens.slice(0, tokens.length - 1);
      return strip(tokens);
      break;
  }
  return tokens;
}, unstrip = (tokens) => {
  let tail = [];
  tokens.map((token) => {
    if (token.type === "brace") {
      if (token.value === "{") {
        tail.push("}");
      } else {
        tail.splice(tail.lastIndexOf("}"), 1);
      }
    }
    if (token.type === "paren") {
      if (token.value === "[") {
        tail.push("]");
      } else {
        tail.splice(tail.lastIndexOf("]"), 1);
      }
    }
  });
  if (tail.length > 0) {
    tail.reverse().map((item) => {
      if (item === "}") {
        tokens.push({
          type: "brace",
          value: "}"
        });
      } else if (item === "]") {
        tokens.push({
          type: "paren",
          value: "]"
        });
      }
    });
  }
  return tokens;
}, generate = (tokens) => {
  let output = "";
  tokens.map((token) => {
    switch (token.type) {
      case "string":
        output += '"' + token.value + '"';
        break;
      default:
        output += token.value;
        break;
    }
  });
  return output;
}, partialParse = (input) => JSON.parse(generate(unstrip(strip(tokenize(input)))));
var init_parser = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/streaming.mjs
var init_streaming2 = __esm(() => {
  init_streaming();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/BetaMessageStream.mjs
function tracksToolInput(content) {
  return content.type === "tool_use" || content.type === "server_tool_use" || content.type === "mcp_tool_use";
}
function checkNever(x) {}
var _BetaMessageStream_instances, _BetaMessageStream_currentMessageSnapshot, _BetaMessageStream_params, _BetaMessageStream_connectedPromise, _BetaMessageStream_resolveConnectedPromise, _BetaMessageStream_rejectConnectedPromise, _BetaMessageStream_endPromise, _BetaMessageStream_resolveEndPromise, _BetaMessageStream_rejectEndPromise, _BetaMessageStream_listeners, _BetaMessageStream_ended, _BetaMessageStream_errored, _BetaMessageStream_aborted, _BetaMessageStream_catchingPromiseCreated, _BetaMessageStream_response, _BetaMessageStream_request_id, _BetaMessageStream_logger, _BetaMessageStream_getFinalMessage, _BetaMessageStream_getFinalText, _BetaMessageStream_handleError, _BetaMessageStream_beginRequest, _BetaMessageStream_addStreamEvent, _BetaMessageStream_endRequest, _BetaMessageStream_accumulateMessage, JSON_BUF_PROPERTY = "__json_buf", BetaMessageStream;
var init_BetaMessageStream = __esm(() => {
  init_tslib();
  init_parser();
  init_error2();
  init_errors();
  init_streaming2();
  init_beta_parser();
  BetaMessageStream = class BetaMessageStream {
    constructor(params, opts) {
      _BetaMessageStream_instances.add(this);
      this.messages = [];
      this.receivedMessages = [];
      _BetaMessageStream_currentMessageSnapshot.set(this, undefined);
      _BetaMessageStream_params.set(this, null);
      this.controller = new AbortController;
      _BetaMessageStream_connectedPromise.set(this, undefined);
      _BetaMessageStream_resolveConnectedPromise.set(this, () => {});
      _BetaMessageStream_rejectConnectedPromise.set(this, () => {});
      _BetaMessageStream_endPromise.set(this, undefined);
      _BetaMessageStream_resolveEndPromise.set(this, () => {});
      _BetaMessageStream_rejectEndPromise.set(this, () => {});
      _BetaMessageStream_listeners.set(this, {});
      _BetaMessageStream_ended.set(this, false);
      _BetaMessageStream_errored.set(this, false);
      _BetaMessageStream_aborted.set(this, false);
      _BetaMessageStream_catchingPromiseCreated.set(this, false);
      _BetaMessageStream_response.set(this, undefined);
      _BetaMessageStream_request_id.set(this, undefined);
      _BetaMessageStream_logger.set(this, undefined);
      _BetaMessageStream_handleError.set(this, (error2) => {
        __classPrivateFieldSet(this, _BetaMessageStream_errored, true, "f");
        if (isAbortError(error2)) {
          error2 = new APIUserAbortError;
        }
        if (error2 instanceof APIUserAbortError) {
          __classPrivateFieldSet(this, _BetaMessageStream_aborted, true, "f");
          return this._emit("abort", error2);
        }
        if (error2 instanceof AnthropicError) {
          return this._emit("error", error2);
        }
        if (error2 instanceof Error) {
          const anthropicError = new AnthropicError(error2.message);
          anthropicError.cause = error2;
          return this._emit("error", anthropicError);
        }
        return this._emit("error", new AnthropicError(String(error2)));
      });
      __classPrivateFieldSet(this, _BetaMessageStream_connectedPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _BetaMessageStream_resolveConnectedPromise, resolve, "f");
        __classPrivateFieldSet(this, _BetaMessageStream_rejectConnectedPromise, reject, "f");
      }), "f");
      __classPrivateFieldSet(this, _BetaMessageStream_endPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _BetaMessageStream_resolveEndPromise, resolve, "f");
        __classPrivateFieldSet(this, _BetaMessageStream_rejectEndPromise, reject, "f");
      }), "f");
      __classPrivateFieldGet(this, _BetaMessageStream_connectedPromise, "f").catch(() => {});
      __classPrivateFieldGet(this, _BetaMessageStream_endPromise, "f").catch(() => {});
      __classPrivateFieldSet(this, _BetaMessageStream_params, params, "f");
      __classPrivateFieldSet(this, _BetaMessageStream_logger, opts?.logger ?? console, "f");
    }
    get response() {
      return __classPrivateFieldGet(this, _BetaMessageStream_response, "f");
    }
    get request_id() {
      return __classPrivateFieldGet(this, _BetaMessageStream_request_id, "f");
    }
    async withResponse() {
      __classPrivateFieldSet(this, _BetaMessageStream_catchingPromiseCreated, true, "f");
      const response = await __classPrivateFieldGet(this, _BetaMessageStream_connectedPromise, "f");
      if (!response) {
        throw new Error("Could not resolve a `Response` object");
      }
      return {
        data: this,
        response,
        request_id: response.headers.get("request-id")
      };
    }
    static fromReadableStream(stream) {
      const runner = new BetaMessageStream(null);
      runner._run(() => runner._fromReadableStream(stream));
      return runner;
    }
    static createMessage(messages, params, options, { logger } = {}) {
      const runner = new BetaMessageStream(params, { logger });
      for (const message of params.messages) {
        runner._addMessageParam(message);
      }
      __classPrivateFieldSet(runner, _BetaMessageStream_params, { ...params, stream: true }, "f");
      runner._run(() => runner._createMessage(messages, { ...params, stream: true }, { ...options, headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" } }));
      return runner;
    }
    _run(executor) {
      executor().then(() => {
        this._emitFinal();
        this._emit("end");
      }, __classPrivateFieldGet(this, _BetaMessageStream_handleError, "f"));
    }
    _addMessageParam(message) {
      this.messages.push(message);
    }
    _addMessage(message, emit = true) {
      this.receivedMessages.push(message);
      if (emit) {
        this._emit("message", message);
      }
    }
    async _createMessage(messages, params, options) {
      const signal = options?.signal;
      let abortHandler;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        abortHandler = this.controller.abort.bind(this.controller);
        signal.addEventListener("abort", abortHandler);
      }
      try {
        __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_beginRequest).call(this);
        const { response, data: stream } = await messages.create({ ...params, stream: true }, { ...options, signal: this.controller.signal }).withResponse();
        this._connected(response);
        for await (const event of stream) {
          __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_addStreamEvent).call(this, event);
        }
        if (stream.controller.signal?.aborted) {
          throw new APIUserAbortError;
        }
        __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_endRequest).call(this);
      } finally {
        if (signal && abortHandler) {
          signal.removeEventListener("abort", abortHandler);
        }
      }
    }
    _connected(response) {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _BetaMessageStream_response, response, "f");
      __classPrivateFieldSet(this, _BetaMessageStream_request_id, response?.headers.get("request-id"), "f");
      __classPrivateFieldGet(this, _BetaMessageStream_resolveConnectedPromise, "f").call(this, response);
      this._emit("connect");
    }
    get ended() {
      return __classPrivateFieldGet(this, _BetaMessageStream_ended, "f");
    }
    get errored() {
      return __classPrivateFieldGet(this, _BetaMessageStream_errored, "f");
    }
    get aborted() {
      return __classPrivateFieldGet(this, _BetaMessageStream_aborted, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(event, listener) {
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] = []);
      listeners.push({ listener });
      return this;
    }
    off(event, listener) {
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event];
      if (!listeners)
        return this;
      const index = listeners.findIndex((l) => l.listener === listener);
      if (index >= 0)
        listeners.splice(index, 1);
      return this;
    }
    once(event, listener) {
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] = []);
      listeners.push({ listener, once: true });
      return this;
    }
    emitted(event) {
      return new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _BetaMessageStream_catchingPromiseCreated, true, "f");
        if (event !== "error")
          this.once("error", reject);
        this.once(event, resolve);
      });
    }
    async done() {
      __classPrivateFieldSet(this, _BetaMessageStream_catchingPromiseCreated, true, "f");
      await __classPrivateFieldGet(this, _BetaMessageStream_endPromise, "f");
    }
    get currentMessage() {
      return __classPrivateFieldGet(this, _BetaMessageStream_currentMessageSnapshot, "f");
    }
    async finalMessage() {
      await this.done();
      return __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_getFinalMessage).call(this);
    }
    async finalText() {
      await this.done();
      return __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_getFinalText).call(this);
    }
    _emit(event, ...args) {
      if (__classPrivateFieldGet(this, _BetaMessageStream_ended, "f"))
        return;
      if (event === "end") {
        __classPrivateFieldSet(this, _BetaMessageStream_ended, true, "f");
        __classPrivateFieldGet(this, _BetaMessageStream_resolveEndPromise, "f").call(this);
      }
      const listeners = __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event];
      if (listeners) {
        __classPrivateFieldGet(this, _BetaMessageStream_listeners, "f")[event] = listeners.filter((l) => !l.once);
        listeners.forEach(({ listener }) => listener(...args));
      }
      if (event === "abort") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _BetaMessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _BetaMessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _BetaMessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
        return;
      }
      if (event === "error") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _BetaMessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _BetaMessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _BetaMessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
      }
    }
    _emitFinal() {
      const finalMessage = this.receivedMessages.at(-1);
      if (finalMessage) {
        this._emit("finalMessage", __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_getFinalMessage).call(this));
      }
    }
    async _fromReadableStream(readableStream, options) {
      const signal = options?.signal;
      let abortHandler;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        abortHandler = this.controller.abort.bind(this.controller);
        signal.addEventListener("abort", abortHandler);
      }
      try {
        __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_beginRequest).call(this);
        this._connected(null);
        const stream = Stream.fromReadableStream(readableStream, this.controller);
        for await (const event of stream) {
          __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_addStreamEvent).call(this, event);
        }
        if (stream.controller.signal?.aborted) {
          throw new APIUserAbortError;
        }
        __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_endRequest).call(this);
      } finally {
        if (signal && abortHandler) {
          signal.removeEventListener("abort", abortHandler);
        }
      }
    }
    [(_BetaMessageStream_currentMessageSnapshot = new WeakMap, _BetaMessageStream_params = new WeakMap, _BetaMessageStream_connectedPromise = new WeakMap, _BetaMessageStream_resolveConnectedPromise = new WeakMap, _BetaMessageStream_rejectConnectedPromise = new WeakMap, _BetaMessageStream_endPromise = new WeakMap, _BetaMessageStream_resolveEndPromise = new WeakMap, _BetaMessageStream_rejectEndPromise = new WeakMap, _BetaMessageStream_listeners = new WeakMap, _BetaMessageStream_ended = new WeakMap, _BetaMessageStream_errored = new WeakMap, _BetaMessageStream_aborted = new WeakMap, _BetaMessageStream_catchingPromiseCreated = new WeakMap, _BetaMessageStream_response = new WeakMap, _BetaMessageStream_request_id = new WeakMap, _BetaMessageStream_logger = new WeakMap, _BetaMessageStream_handleError = new WeakMap, _BetaMessageStream_instances = new WeakSet, _BetaMessageStream_getFinalMessage = function _BetaMessageStream_getFinalMessage2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      return this.receivedMessages.at(-1);
    }, _BetaMessageStream_getFinalText = function _BetaMessageStream_getFinalText2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      const textBlocks = this.receivedMessages.at(-1).content.filter((block) => block.type === "text").map((block) => block.text);
      if (textBlocks.length === 0) {
        throw new AnthropicError("stream ended without producing a content block with type=text");
      }
      return textBlocks.join(" ");
    }, _BetaMessageStream_beginRequest = function _BetaMessageStream_beginRequest2() {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _BetaMessageStream_currentMessageSnapshot, undefined, "f");
    }, _BetaMessageStream_addStreamEvent = function _BetaMessageStream_addStreamEvent2(event) {
      if (this.ended)
        return;
      const messageSnapshot = __classPrivateFieldGet(this, _BetaMessageStream_instances, "m", _BetaMessageStream_accumulateMessage).call(this, event);
      this._emit("streamEvent", event, messageSnapshot);
      switch (event.type) {
        case "content_block_delta": {
          const content = messageSnapshot.content.at(-1);
          switch (event.delta.type) {
            case "text_delta": {
              if (content.type === "text") {
                this._emit("text", event.delta.text, content.text || "");
              }
              break;
            }
            case "citations_delta": {
              if (content.type === "text") {
                this._emit("citation", event.delta.citation, content.citations ?? []);
              }
              break;
            }
            case "input_json_delta": {
              if (tracksToolInput(content) && content.input) {
                this._emit("inputJson", event.delta.partial_json, content.input);
              }
              break;
            }
            case "thinking_delta": {
              if (content.type === "thinking") {
                this._emit("thinking", event.delta.thinking, content.thinking);
              }
              break;
            }
            case "signature_delta": {
              if (content.type === "thinking") {
                this._emit("signature", content.signature);
              }
              break;
            }
            case "compaction_delta": {
              if (content.type === "compaction" && content.content) {
                this._emit("compaction", content.content);
              }
              break;
            }
            default:
              checkNever(event.delta);
          }
          break;
        }
        case "message_stop": {
          this._addMessageParam(messageSnapshot);
          this._addMessage(maybeParseBetaMessage(messageSnapshot, __classPrivateFieldGet(this, _BetaMessageStream_params, "f"), { logger: __classPrivateFieldGet(this, _BetaMessageStream_logger, "f") }), true);
          break;
        }
        case "content_block_stop": {
          this._emit("contentBlock", messageSnapshot.content.at(-1));
          break;
        }
        case "message_start": {
          __classPrivateFieldSet(this, _BetaMessageStream_currentMessageSnapshot, messageSnapshot, "f");
          break;
        }
        case "content_block_start":
        case "message_delta":
          break;
      }
    }, _BetaMessageStream_endRequest = function _BetaMessageStream_endRequest2() {
      if (this.ended) {
        throw new AnthropicError(`stream has ended, this shouldn't happen`);
      }
      const snapshot = __classPrivateFieldGet(this, _BetaMessageStream_currentMessageSnapshot, "f");
      if (!snapshot) {
        throw new AnthropicError(`request ended without sending any chunks`);
      }
      __classPrivateFieldSet(this, _BetaMessageStream_currentMessageSnapshot, undefined, "f");
      return maybeParseBetaMessage(snapshot, __classPrivateFieldGet(this, _BetaMessageStream_params, "f"), { logger: __classPrivateFieldGet(this, _BetaMessageStream_logger, "f") });
    }, _BetaMessageStream_accumulateMessage = function _BetaMessageStream_accumulateMessage2(event) {
      let snapshot = __classPrivateFieldGet(this, _BetaMessageStream_currentMessageSnapshot, "f");
      if (event.type === "message_start") {
        if (snapshot) {
          throw new AnthropicError(`Unexpected event order, got ${event.type} before receiving "message_stop"`);
        }
        return event.message;
      }
      if (!snapshot) {
        throw new AnthropicError(`Unexpected event order, got ${event.type} before "message_start"`);
      }
      switch (event.type) {
        case "message_stop":
          return snapshot;
        case "message_delta":
          snapshot.container = event.delta.container;
          snapshot.stop_reason = event.delta.stop_reason;
          snapshot.stop_sequence = event.delta.stop_sequence;
          snapshot.usage.output_tokens = event.usage.output_tokens;
          snapshot.context_management = event.context_management;
          if (event.usage.input_tokens != null) {
            snapshot.usage.input_tokens = event.usage.input_tokens;
          }
          if (event.usage.cache_creation_input_tokens != null) {
            snapshot.usage.cache_creation_input_tokens = event.usage.cache_creation_input_tokens;
          }
          if (event.usage.cache_read_input_tokens != null) {
            snapshot.usage.cache_read_input_tokens = event.usage.cache_read_input_tokens;
          }
          if (event.usage.server_tool_use != null) {
            snapshot.usage.server_tool_use = event.usage.server_tool_use;
          }
          if (event.usage.iterations != null) {
            snapshot.usage.iterations = event.usage.iterations;
          }
          return snapshot;
        case "content_block_start":
          snapshot.content.push(event.content_block);
          return snapshot;
        case "content_block_delta": {
          const snapshotContent = snapshot.content.at(event.index);
          switch (event.delta.type) {
            case "text_delta": {
              if (snapshotContent?.type === "text") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  text: (snapshotContent.text || "") + event.delta.text
                };
              }
              break;
            }
            case "citations_delta": {
              if (snapshotContent?.type === "text") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  citations: [...snapshotContent.citations ?? [], event.delta.citation]
                };
              }
              break;
            }
            case "input_json_delta": {
              if (snapshotContent && tracksToolInput(snapshotContent)) {
                let jsonBuf = snapshotContent[JSON_BUF_PROPERTY] || "";
                jsonBuf += event.delta.partial_json;
                const newContent = { ...snapshotContent };
                Object.defineProperty(newContent, JSON_BUF_PROPERTY, {
                  value: jsonBuf,
                  enumerable: false,
                  writable: true
                });
                if (jsonBuf) {
                  try {
                    newContent.input = partialParse(jsonBuf);
                  } catch (err) {
                    const error2 = new AnthropicError(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${err}. JSON: ${jsonBuf}`);
                    __classPrivateFieldGet(this, _BetaMessageStream_handleError, "f").call(this, error2);
                  }
                }
                snapshot.content[event.index] = newContent;
              }
              break;
            }
            case "thinking_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  thinking: snapshotContent.thinking + event.delta.thinking
                };
              }
              break;
            }
            case "signature_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  signature: event.delta.signature
                };
              }
              break;
            }
            case "compaction_delta": {
              if (snapshotContent?.type === "compaction") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  content: (snapshotContent.content || "") + event.delta.content
                };
              }
              break;
            }
            default:
              checkNever(event.delta);
          }
          return snapshot;
        }
        case "content_block_stop":
          return snapshot;
      }
    }, Symbol.asyncIterator)]() {
      const pushQueue = [];
      const readQueue = [];
      let done = false;
      this.on("streamEvent", (event) => {
        const reader = readQueue.shift();
        if (reader) {
          reader.resolve(event);
        } else {
          pushQueue.push(event);
        }
      });
      this.on("end", () => {
        done = true;
        for (const reader of readQueue) {
          reader.resolve(undefined);
        }
        readQueue.length = 0;
      });
      this.on("abort", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      this.on("error", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      return {
        next: async () => {
          if (!pushQueue.length) {
            if (done) {
              return { value: undefined, done: true };
            }
            return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: undefined, done: true });
          }
          const chunk = pushQueue.shift();
          return { value: chunk, done: false };
        },
        return: async () => {
          this.abort();
          return { value: undefined, done: true };
        }
      };
    }
    toReadableStream() {
      const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
      return stream.toReadableStream();
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/tools/ToolError.mjs
var ToolError;
var init_ToolError = __esm(() => {
  ToolError = class ToolError extends Error {
    constructor(content) {
      const message = typeof content === "string" ? content : content.map((block) => {
        if (block.type === "text")
          return block.text;
        return `[${block.type}]`;
      }).join(" ");
      super(message);
      this.name = "ToolError";
      this.content = content;
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/tools/CompactionControl.mjs
var DEFAULT_TOKEN_THRESHOLD = 1e5, DEFAULT_SUMMARY_PROMPT = `You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete\u2014err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`;
var init_CompactionControl = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/tools/BetaToolRunner.mjs
function promiseWithResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
async function generateToolResponse(params, lastMessage = params.messages.at(-1)) {
  if (!lastMessage || lastMessage.role !== "assistant" || !lastMessage.content || typeof lastMessage.content === "string") {
    return null;
  }
  const toolUseBlocks = lastMessage.content.filter((content) => content.type === "tool_use");
  if (toolUseBlocks.length === 0) {
    return null;
  }
  const toolResults = await Promise.all(toolUseBlocks.map(async (toolUse) => {
    const tool = params.tools.find((t) => ("name" in t ? t.name : t.mcp_server_name) === toolUse.name);
    if (!tool || !("run" in tool)) {
      return {
        type: "tool_result",
        tool_use_id: toolUse.id,
        content: `Error: Tool '${toolUse.name}' not found`,
        is_error: true
      };
    }
    try {
      let input = toolUse.input;
      if ("parse" in tool && tool.parse) {
        input = tool.parse(input);
      }
      const result = await tool.run(input);
      return {
        type: "tool_result",
        tool_use_id: toolUse.id,
        content: result
      };
    } catch (error2) {
      return {
        type: "tool_result",
        tool_use_id: toolUse.id,
        content: error2 instanceof ToolError ? error2.content : `Error: ${error2 instanceof Error ? error2.message : String(error2)}`,
        is_error: true
      };
    }
  }));
  return {
    role: "user",
    content: toolResults
  };
}
var _BetaToolRunner_instances, _BetaToolRunner_consumed, _BetaToolRunner_mutated, _BetaToolRunner_state, _BetaToolRunner_options, _BetaToolRunner_message, _BetaToolRunner_toolResponse, _BetaToolRunner_completion, _BetaToolRunner_iterationCount, _BetaToolRunner_checkAndCompact, _BetaToolRunner_generateToolResponse, BetaToolRunner;
var init_BetaToolRunner = __esm(() => {
  init_tslib();
  init_ToolError();
  init_error();
  init_headers();
  init_CompactionControl();
  init_stainless_helper_header();
  BetaToolRunner = class BetaToolRunner {
    constructor(client, params, options) {
      _BetaToolRunner_instances.add(this);
      this.client = client;
      _BetaToolRunner_consumed.set(this, false);
      _BetaToolRunner_mutated.set(this, false);
      _BetaToolRunner_state.set(this, undefined);
      _BetaToolRunner_options.set(this, undefined);
      _BetaToolRunner_message.set(this, undefined);
      _BetaToolRunner_toolResponse.set(this, undefined);
      _BetaToolRunner_completion.set(this, undefined);
      _BetaToolRunner_iterationCount.set(this, 0);
      __classPrivateFieldSet(this, _BetaToolRunner_state, {
        params: {
          ...params,
          messages: structuredClone(params.messages)
        }
      }, "f");
      const helpers = collectStainlessHelpers(params.tools, params.messages);
      const helperValue = ["BetaToolRunner", ...helpers].join(", ");
      __classPrivateFieldSet(this, _BetaToolRunner_options, {
        ...options,
        headers: buildHeaders([{ "x-stainless-helper": helperValue }, options?.headers])
      }, "f");
      __classPrivateFieldSet(this, _BetaToolRunner_completion, promiseWithResolvers(), "f");
    }
    async* [(_BetaToolRunner_consumed = new WeakMap, _BetaToolRunner_mutated = new WeakMap, _BetaToolRunner_state = new WeakMap, _BetaToolRunner_options = new WeakMap, _BetaToolRunner_message = new WeakMap, _BetaToolRunner_toolResponse = new WeakMap, _BetaToolRunner_completion = new WeakMap, _BetaToolRunner_iterationCount = new WeakMap, _BetaToolRunner_instances = new WeakSet, _BetaToolRunner_checkAndCompact = async function _BetaToolRunner_checkAndCompact2() {
      const compactionControl = __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.compactionControl;
      if (!compactionControl || !compactionControl.enabled) {
        return false;
      }
      let tokensUsed = 0;
      if (__classPrivateFieldGet(this, _BetaToolRunner_message, "f") !== undefined) {
        try {
          const message = await __classPrivateFieldGet(this, _BetaToolRunner_message, "f");
          const totalInputTokens = message.usage.input_tokens + (message.usage.cache_creation_input_tokens ?? 0) + (message.usage.cache_read_input_tokens ?? 0);
          tokensUsed = totalInputTokens + message.usage.output_tokens;
        } catch {
          return false;
        }
      }
      const threshold = compactionControl.contextTokenThreshold ?? DEFAULT_TOKEN_THRESHOLD;
      if (tokensUsed < threshold) {
        return false;
      }
      const model = compactionControl.model ?? __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.model;
      const summaryPrompt = compactionControl.summaryPrompt ?? DEFAULT_SUMMARY_PROMPT;
      const messages = __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.messages;
      if (messages[messages.length - 1].role === "assistant") {
        const lastMessage = messages[messages.length - 1];
        if (Array.isArray(lastMessage.content)) {
          const nonToolBlocks = lastMessage.content.filter((block) => block.type !== "tool_use");
          if (nonToolBlocks.length === 0) {
            messages.pop();
          } else {
            lastMessage.content = nonToolBlocks;
          }
        }
      }
      const response = await this.client.beta.messages.create({
        model,
        messages: [
          ...messages,
          {
            role: "user",
            content: [
              {
                type: "text",
                text: summaryPrompt
              }
            ]
          }
        ],
        max_tokens: __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.max_tokens
      }, {
        headers: { "x-stainless-helper": "compaction" }
      });
      if (response.content[0]?.type !== "text") {
        throw new AnthropicError("Expected text response for compaction");
      }
      __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.messages = [
        {
          role: "user",
          content: response.content
        }
      ];
      return true;
    }, Symbol.asyncIterator)]() {
      var _a;
      if (__classPrivateFieldGet(this, _BetaToolRunner_consumed, "f")) {
        throw new AnthropicError("Cannot iterate over a consumed stream");
      }
      __classPrivateFieldSet(this, _BetaToolRunner_consumed, true, "f");
      __classPrivateFieldSet(this, _BetaToolRunner_mutated, true, "f");
      __classPrivateFieldSet(this, _BetaToolRunner_toolResponse, undefined, "f");
      try {
        while (true) {
          let stream;
          try {
            if (__classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.max_iterations && __classPrivateFieldGet(this, _BetaToolRunner_iterationCount, "f") >= __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.max_iterations) {
              break;
            }
            __classPrivateFieldSet(this, _BetaToolRunner_mutated, false, "f");
            __classPrivateFieldSet(this, _BetaToolRunner_toolResponse, undefined, "f");
            __classPrivateFieldSet(this, _BetaToolRunner_iterationCount, (_a = __classPrivateFieldGet(this, _BetaToolRunner_iterationCount, "f"), _a++, _a), "f");
            __classPrivateFieldSet(this, _BetaToolRunner_message, undefined, "f");
            const { max_iterations, compactionControl, ...params } = __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params;
            if (params.stream) {
              stream = this.client.beta.messages.stream({ ...params }, __classPrivateFieldGet(this, _BetaToolRunner_options, "f"));
              __classPrivateFieldSet(this, _BetaToolRunner_message, stream.finalMessage(), "f");
              __classPrivateFieldGet(this, _BetaToolRunner_message, "f").catch(() => {});
              yield stream;
            } else {
              __classPrivateFieldSet(this, _BetaToolRunner_message, this.client.beta.messages.create({ ...params, stream: false }, __classPrivateFieldGet(this, _BetaToolRunner_options, "f")), "f");
              yield __classPrivateFieldGet(this, _BetaToolRunner_message, "f");
            }
            const isCompacted = await __classPrivateFieldGet(this, _BetaToolRunner_instances, "m", _BetaToolRunner_checkAndCompact).call(this);
            if (!isCompacted) {
              if (!__classPrivateFieldGet(this, _BetaToolRunner_mutated, "f")) {
                const { role, content } = await __classPrivateFieldGet(this, _BetaToolRunner_message, "f");
                __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.messages.push({ role, content });
              }
              const toolMessage = await __classPrivateFieldGet(this, _BetaToolRunner_instances, "m", _BetaToolRunner_generateToolResponse).call(this, __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.messages.at(-1));
              if (toolMessage) {
                __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params.messages.push(toolMessage);
              } else if (!__classPrivateFieldGet(this, _BetaToolRunner_mutated, "f")) {
                break;
              }
            }
          } finally {
            if (stream) {
              stream.abort();
            }
          }
        }
        if (!__classPrivateFieldGet(this, _BetaToolRunner_message, "f")) {
          throw new AnthropicError("ToolRunner concluded without a message from the server");
        }
        __classPrivateFieldGet(this, _BetaToolRunner_completion, "f").resolve(await __classPrivateFieldGet(this, _BetaToolRunner_message, "f"));
      } catch (error2) {
        __classPrivateFieldSet(this, _BetaToolRunner_consumed, false, "f");
        __classPrivateFieldGet(this, _BetaToolRunner_completion, "f").promise.catch(() => {});
        __classPrivateFieldGet(this, _BetaToolRunner_completion, "f").reject(error2);
        __classPrivateFieldSet(this, _BetaToolRunner_completion, promiseWithResolvers(), "f");
        throw error2;
      }
    }
    setMessagesParams(paramsOrMutator) {
      if (typeof paramsOrMutator === "function") {
        __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params = paramsOrMutator(__classPrivateFieldGet(this, _BetaToolRunner_state, "f").params);
      } else {
        __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params = paramsOrMutator;
      }
      __classPrivateFieldSet(this, _BetaToolRunner_mutated, true, "f");
      __classPrivateFieldSet(this, _BetaToolRunner_toolResponse, undefined, "f");
    }
    async generateToolResponse() {
      const message = await __classPrivateFieldGet(this, _BetaToolRunner_message, "f") ?? this.params.messages.at(-1);
      if (!message) {
        return null;
      }
      return __classPrivateFieldGet(this, _BetaToolRunner_instances, "m", _BetaToolRunner_generateToolResponse).call(this, message);
    }
    done() {
      return __classPrivateFieldGet(this, _BetaToolRunner_completion, "f").promise;
    }
    async runUntilDone() {
      if (!__classPrivateFieldGet(this, _BetaToolRunner_consumed, "f")) {
        for await (const _ of this) {}
      }
      return this.done();
    }
    get params() {
      return __classPrivateFieldGet(this, _BetaToolRunner_state, "f").params;
    }
    pushMessages(...messages) {
      this.setMessagesParams((params) => ({
        ...params,
        messages: [...params.messages, ...messages]
      }));
    }
    then(onfulfilled, onrejected) {
      return this.runUntilDone().then(onfulfilled, onrejected);
    }
  };
  _BetaToolRunner_generateToolResponse = async function _BetaToolRunner_generateToolResponse2(lastMessage) {
    if (__classPrivateFieldGet(this, _BetaToolRunner_toolResponse, "f") !== undefined) {
      return __classPrivateFieldGet(this, _BetaToolRunner_toolResponse, "f");
    }
    __classPrivateFieldSet(this, _BetaToolRunner_toolResponse, generateToolResponse(__classPrivateFieldGet(this, _BetaToolRunner_state, "f").params, lastMessage), "f");
    return __classPrivateFieldGet(this, _BetaToolRunner_toolResponse, "f");
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/decoders/jsonl.mjs
var JSONLDecoder;
var init_jsonl = __esm(() => {
  init_error();
  init_shims();
  init_line();
  JSONLDecoder = class JSONLDecoder {
    constructor(iterator, controller) {
      this.iterator = iterator;
      this.controller = controller;
    }
    async* decoder() {
      const lineDecoder = new LineDecoder;
      for await (const chunk of this.iterator) {
        for (const line of lineDecoder.decode(chunk)) {
          yield JSON.parse(line);
        }
      }
      for (const line of lineDecoder.flush()) {
        yield JSON.parse(line);
      }
    }
    [Symbol.asyncIterator]() {
      return this.decoder();
    }
    static fromResponse(response, controller) {
      if (!response.body) {
        controller.abort();
        if (typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative") {
          throw new AnthropicError(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`);
        }
        throw new AnthropicError(`Attempted to iterate over a response with no body`);
      }
      return new JSONLDecoder(ReadableStreamToAsyncIterable(response.body), controller);
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/messages/batches.mjs
var Batches;
var init_batches = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_jsonl();
  init_error2();
  init_path();
  Batches = class Batches extends APIResource {
    create(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/messages/batches?beta=true", {
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    retrieve(messageBatchID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/messages/batches/${messageBatchID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/messages/batches?beta=true", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    delete(messageBatchID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.delete(path`/v1/messages/batches/${messageBatchID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    cancel(messageBatchID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.post(path`/v1/messages/batches/${messageBatchID}/cancel?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString() },
          options?.headers
        ])
      });
    }
    async results(messageBatchID, params = {}, options) {
      const batch = await this.retrieve(messageBatchID);
      if (!batch.results_url) {
        throw new AnthropicError(`No batch \`results_url\`; Has it finished processing? ${batch.processing_status} - ${batch.id}`);
      }
      const { betas } = params ?? {};
      return this._client.get(batch.results_url, {
        ...options,
        headers: buildHeaders([
          {
            "anthropic-beta": [...betas ?? [], "message-batches-2024-09-24"].toString(),
            Accept: "application/binary"
          },
          options?.headers
        ]),
        stream: true,
        __binaryResponse: true
      })._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller));
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/messages/messages.mjs
function transformOutputFormat(params) {
  if (!params.output_format) {
    return params;
  }
  if (params.output_config?.format) {
    throw new AnthropicError("Both output_format and output_config.format were provided. " + "Please use only output_config.format (output_format is deprecated).");
  }
  const { output_format, ...rest } = params;
  return {
    ...rest,
    output_config: {
      ...params.output_config,
      format: output_format
    }
  };
}
var DEPRECATED_MODELS, MODELS_TO_WARN_WITH_THINKING_ENABLED, Messages;
var init_messages = __esm(() => {
  init_error2();
  init_resource();
  init_constants();
  init_headers();
  init_stainless_helper_header();
  init_beta_parser();
  init_BetaMessageStream();
  init_BetaToolRunner();
  init_ToolError();
  init_batches();
  init_batches();
  init_BetaToolRunner();
  init_ToolError();
  DEPRECATED_MODELS = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026"
  };
  MODELS_TO_WARN_WITH_THINKING_ENABLED = ["claude-opus-4-6"];
  Messages = class Messages extends APIResource {
    constructor() {
      super(...arguments);
      this.batches = new Batches(this._client);
    }
    create(params, options) {
      const modifiedParams = transformOutputFormat(params);
      const { betas, ...body } = modifiedParams;
      if (body.model in DEPRECATED_MODELS) {
        console.warn(`The model '${body.model}' is deprecated and will reach end-of-life on ${DEPRECATED_MODELS[body.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
      }
      if (body.model in MODELS_TO_WARN_WITH_THINKING_ENABLED && body.thinking && body.thinking.type === "enabled") {
        console.warn(`Using Claude with ${body.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);
      }
      let timeout = this._client._options.timeout;
      if (!body.stream && timeout == null) {
        const maxNonstreamingTokens = MODEL_NONSTREAMING_TOKENS[body.model] ?? undefined;
        timeout = this._client.calculateNonstreamingTimeout(body.max_tokens, maxNonstreamingTokens);
      }
      const helperHeader = stainlessHelperHeader(body.tools, body.messages);
      return this._client.post("/v1/messages?beta=true", {
        body,
        timeout: timeout ?? 600000,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          helperHeader,
          options?.headers
        ]),
        stream: modifiedParams.stream ?? false
      });
    }
    parse(params, options) {
      options = {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...params.betas ?? [], "structured-outputs-2025-12-15"].toString() },
          options?.headers
        ])
      };
      return this.create(params, options).then((message) => parseBetaMessage(message, params, { logger: this._client.logger ?? console }));
    }
    stream(body, options) {
      return BetaMessageStream.createMessage(this, body, options);
    }
    countTokens(params, options) {
      const modifiedParams = transformOutputFormat(params);
      const { betas, ...body } = modifiedParams;
      return this._client.post("/v1/messages/count_tokens?beta=true", {
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "token-counting-2024-11-01"].toString() },
          options?.headers
        ])
      });
    }
    toolRunner(body, options) {
      return new BetaToolRunner(this._client, body, options);
    }
  };
  Messages.Batches = Batches;
  Messages.BetaToolRunner = BetaToolRunner;
  Messages.ToolError = ToolError;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs
var Versions;
var init_versions = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_uploads();
  init_path();
  Versions = class Versions extends APIResource {
    create(skillID, params = {}, options) {
      const { betas, ...body } = params ?? {};
      return this._client.post(path`/v1/skills/${skillID}/versions?beta=true`, multipartFormRequestOptions({
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      }, this._client));
    }
    retrieve(version, params, options) {
      const { skill_id, betas } = params;
      return this._client.get(path`/v1/skills/${skill_id}/versions/${version}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      });
    }
    list(skillID, params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList(path`/v1/skills/${skillID}/versions?beta=true`, PageCursor, {
        query,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      });
    }
    delete(version, params, options) {
      const { skill_id, betas } = params;
      return this._client.delete(path`/v1/skills/${skill_id}/versions/${version}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      });
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/skills/skills.mjs
var Skills;
var init_skills = __esm(() => {
  init_resource();
  init_versions();
  init_versions();
  init_pagination();
  init_headers();
  init_uploads();
  init_path();
  Skills = class Skills extends APIResource {
    constructor() {
      super(...arguments);
      this.versions = new Versions(this._client);
    }
    create(params = {}, options) {
      const { betas, ...body } = params ?? {};
      return this._client.post("/v1/skills?beta=true", multipartFormRequestOptions({
        body,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      }, this._client, false));
    }
    retrieve(skillID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/skills/${skillID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/skills?beta=true", PageCursor, {
        query,
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      });
    }
    delete(skillID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.delete(path`/v1/skills/${skillID}?beta=true`, {
        ...options,
        headers: buildHeaders([
          { "anthropic-beta": [...betas ?? [], "skills-2025-10-02"].toString() },
          options?.headers
        ])
      });
    }
  };
  Skills.Versions = Versions;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/beta/beta.mjs
var Beta;
var init_beta = __esm(() => {
  init_resource();
  init_files();
  init_files();
  init_models();
  init_models();
  init_messages();
  init_messages();
  init_skills();
  init_skills();
  Beta = class Beta extends APIResource {
    constructor() {
      super(...arguments);
      this.models = new Models(this._client);
      this.messages = new Messages(this._client);
      this.files = new Files(this._client);
      this.skills = new Skills(this._client);
    }
  };
  Beta.Models = Models;
  Beta.Messages = Messages;
  Beta.Files = Files;
  Beta.Skills = Skills;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/completions.mjs
var Completions;
var init_completions = __esm(() => {
  init_resource();
  init_headers();
  Completions = class Completions extends APIResource {
    create(params, options) {
      const { betas, ...body } = params;
      return this._client.post("/v1/complete", {
        body,
        timeout: this._client._options.timeout ?? 600000,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ]),
        stream: params.stream ?? false
      });
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/parser.mjs
function getOutputFormat2(params) {
  return params?.output_config?.format;
}
function maybeParseMessage(message, params, opts) {
  const outputFormat = getOutputFormat2(params);
  if (!params || !("parse" in (outputFormat ?? {}))) {
    return {
      ...message,
      content: message.content.map((block) => {
        if (block.type === "text") {
          const parsedBlock = Object.defineProperty({ ...block }, "parsed_output", {
            value: null,
            enumerable: false
          });
          return parsedBlock;
        }
        return block;
      }),
      parsed_output: null
    };
  }
  return parseMessage(message, params, opts);
}
function parseMessage(message, params, opts) {
  let firstParsedOutput = null;
  const content = message.content.map((block) => {
    if (block.type === "text") {
      const parsedOutput = parseOutputFormat(params, block.text);
      if (firstParsedOutput === null) {
        firstParsedOutput = parsedOutput;
      }
      const parsedBlock = Object.defineProperty({ ...block }, "parsed_output", {
        value: parsedOutput,
        enumerable: false
      });
      return parsedBlock;
    }
    return block;
  });
  return {
    ...message,
    content,
    parsed_output: firstParsedOutput
  };
}
function parseOutputFormat(params, content) {
  const outputFormat = getOutputFormat2(params);
  if (outputFormat?.type !== "json_schema") {
    return null;
  }
  try {
    if ("parse" in outputFormat) {
      return outputFormat.parse(content);
    }
    return JSON.parse(content);
  } catch (error2) {
    throw new AnthropicError(`Failed to parse structured output: ${error2}`);
  }
}
var init_parser2 = __esm(() => {
  init_error();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/lib/MessageStream.mjs
function tracksToolInput2(content) {
  return content.type === "tool_use" || content.type === "server_tool_use";
}
function checkNever2(x) {}
var _MessageStream_instances, _MessageStream_currentMessageSnapshot, _MessageStream_params, _MessageStream_connectedPromise, _MessageStream_resolveConnectedPromise, _MessageStream_rejectConnectedPromise, _MessageStream_endPromise, _MessageStream_resolveEndPromise, _MessageStream_rejectEndPromise, _MessageStream_listeners, _MessageStream_ended, _MessageStream_errored, _MessageStream_aborted, _MessageStream_catchingPromiseCreated, _MessageStream_response, _MessageStream_request_id, _MessageStream_logger, _MessageStream_getFinalMessage, _MessageStream_getFinalText, _MessageStream_handleError, _MessageStream_beginRequest, _MessageStream_addStreamEvent, _MessageStream_endRequest, _MessageStream_accumulateMessage, JSON_BUF_PROPERTY2 = "__json_buf", MessageStream;
var init_MessageStream = __esm(() => {
  init_tslib();
  init_errors();
  init_error2();
  init_streaming2();
  init_parser();
  init_parser2();
  MessageStream = class MessageStream {
    constructor(params, opts) {
      _MessageStream_instances.add(this);
      this.messages = [];
      this.receivedMessages = [];
      _MessageStream_currentMessageSnapshot.set(this, undefined);
      _MessageStream_params.set(this, null);
      this.controller = new AbortController;
      _MessageStream_connectedPromise.set(this, undefined);
      _MessageStream_resolveConnectedPromise.set(this, () => {});
      _MessageStream_rejectConnectedPromise.set(this, () => {});
      _MessageStream_endPromise.set(this, undefined);
      _MessageStream_resolveEndPromise.set(this, () => {});
      _MessageStream_rejectEndPromise.set(this, () => {});
      _MessageStream_listeners.set(this, {});
      _MessageStream_ended.set(this, false);
      _MessageStream_errored.set(this, false);
      _MessageStream_aborted.set(this, false);
      _MessageStream_catchingPromiseCreated.set(this, false);
      _MessageStream_response.set(this, undefined);
      _MessageStream_request_id.set(this, undefined);
      _MessageStream_logger.set(this, undefined);
      _MessageStream_handleError.set(this, (error2) => {
        __classPrivateFieldSet(this, _MessageStream_errored, true, "f");
        if (isAbortError(error2)) {
          error2 = new APIUserAbortError;
        }
        if (error2 instanceof APIUserAbortError) {
          __classPrivateFieldSet(this, _MessageStream_aborted, true, "f");
          return this._emit("abort", error2);
        }
        if (error2 instanceof AnthropicError) {
          return this._emit("error", error2);
        }
        if (error2 instanceof Error) {
          const anthropicError = new AnthropicError(error2.message);
          anthropicError.cause = error2;
          return this._emit("error", anthropicError);
        }
        return this._emit("error", new AnthropicError(String(error2)));
      });
      __classPrivateFieldSet(this, _MessageStream_connectedPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _MessageStream_resolveConnectedPromise, resolve, "f");
        __classPrivateFieldSet(this, _MessageStream_rejectConnectedPromise, reject, "f");
      }), "f");
      __classPrivateFieldSet(this, _MessageStream_endPromise, new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _MessageStream_resolveEndPromise, resolve, "f");
        __classPrivateFieldSet(this, _MessageStream_rejectEndPromise, reject, "f");
      }), "f");
      __classPrivateFieldGet(this, _MessageStream_connectedPromise, "f").catch(() => {});
      __classPrivateFieldGet(this, _MessageStream_endPromise, "f").catch(() => {});
      __classPrivateFieldSet(this, _MessageStream_params, params, "f");
      __classPrivateFieldSet(this, _MessageStream_logger, opts?.logger ?? console, "f");
    }
    get response() {
      return __classPrivateFieldGet(this, _MessageStream_response, "f");
    }
    get request_id() {
      return __classPrivateFieldGet(this, _MessageStream_request_id, "f");
    }
    async withResponse() {
      __classPrivateFieldSet(this, _MessageStream_catchingPromiseCreated, true, "f");
      const response = await __classPrivateFieldGet(this, _MessageStream_connectedPromise, "f");
      if (!response) {
        throw new Error("Could not resolve a `Response` object");
      }
      return {
        data: this,
        response,
        request_id: response.headers.get("request-id")
      };
    }
    static fromReadableStream(stream) {
      const runner = new MessageStream(null);
      runner._run(() => runner._fromReadableStream(stream));
      return runner;
    }
    static createMessage(messages, params, options, { logger } = {}) {
      const runner = new MessageStream(params, { logger });
      for (const message of params.messages) {
        runner._addMessageParam(message);
      }
      __classPrivateFieldSet(runner, _MessageStream_params, { ...params, stream: true }, "f");
      runner._run(() => runner._createMessage(messages, { ...params, stream: true }, { ...options, headers: { ...options?.headers, "X-Stainless-Helper-Method": "stream" } }));
      return runner;
    }
    _run(executor) {
      executor().then(() => {
        this._emitFinal();
        this._emit("end");
      }, __classPrivateFieldGet(this, _MessageStream_handleError, "f"));
    }
    _addMessageParam(message) {
      this.messages.push(message);
    }
    _addMessage(message, emit = true) {
      this.receivedMessages.push(message);
      if (emit) {
        this._emit("message", message);
      }
    }
    async _createMessage(messages, params, options) {
      const signal = options?.signal;
      let abortHandler;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        abortHandler = this.controller.abort.bind(this.controller);
        signal.addEventListener("abort", abortHandler);
      }
      try {
        __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_beginRequest).call(this);
        const { response, data: stream } = await messages.create({ ...params, stream: true }, { ...options, signal: this.controller.signal }).withResponse();
        this._connected(response);
        for await (const event of stream) {
          __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_addStreamEvent).call(this, event);
        }
        if (stream.controller.signal?.aborted) {
          throw new APIUserAbortError;
        }
        __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_endRequest).call(this);
      } finally {
        if (signal && abortHandler) {
          signal.removeEventListener("abort", abortHandler);
        }
      }
    }
    _connected(response) {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _MessageStream_response, response, "f");
      __classPrivateFieldSet(this, _MessageStream_request_id, response?.headers.get("request-id"), "f");
      __classPrivateFieldGet(this, _MessageStream_resolveConnectedPromise, "f").call(this, response);
      this._emit("connect");
    }
    get ended() {
      return __classPrivateFieldGet(this, _MessageStream_ended, "f");
    }
    get errored() {
      return __classPrivateFieldGet(this, _MessageStream_errored, "f");
    }
    get aborted() {
      return __classPrivateFieldGet(this, _MessageStream_aborted, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(event, listener) {
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] = []);
      listeners.push({ listener });
      return this;
    }
    off(event, listener) {
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event];
      if (!listeners)
        return this;
      const index = listeners.findIndex((l) => l.listener === listener);
      if (index >= 0)
        listeners.splice(index, 1);
      return this;
    }
    once(event, listener) {
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] || (__classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] = []);
      listeners.push({ listener, once: true });
      return this;
    }
    emitted(event) {
      return new Promise((resolve, reject) => {
        __classPrivateFieldSet(this, _MessageStream_catchingPromiseCreated, true, "f");
        if (event !== "error")
          this.once("error", reject);
        this.once(event, resolve);
      });
    }
    async done() {
      __classPrivateFieldSet(this, _MessageStream_catchingPromiseCreated, true, "f");
      await __classPrivateFieldGet(this, _MessageStream_endPromise, "f");
    }
    get currentMessage() {
      return __classPrivateFieldGet(this, _MessageStream_currentMessageSnapshot, "f");
    }
    async finalMessage() {
      await this.done();
      return __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_getFinalMessage).call(this);
    }
    async finalText() {
      await this.done();
      return __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_getFinalText).call(this);
    }
    _emit(event, ...args) {
      if (__classPrivateFieldGet(this, _MessageStream_ended, "f"))
        return;
      if (event === "end") {
        __classPrivateFieldSet(this, _MessageStream_ended, true, "f");
        __classPrivateFieldGet(this, _MessageStream_resolveEndPromise, "f").call(this);
      }
      const listeners = __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event];
      if (listeners) {
        __classPrivateFieldGet(this, _MessageStream_listeners, "f")[event] = listeners.filter((l) => !l.once);
        listeners.forEach(({ listener }) => listener(...args));
      }
      if (event === "abort") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _MessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _MessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _MessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
        return;
      }
      if (event === "error") {
        const error2 = args[0];
        if (!__classPrivateFieldGet(this, _MessageStream_catchingPromiseCreated, "f") && !listeners?.length) {
          Promise.reject(error2);
        }
        __classPrivateFieldGet(this, _MessageStream_rejectConnectedPromise, "f").call(this, error2);
        __classPrivateFieldGet(this, _MessageStream_rejectEndPromise, "f").call(this, error2);
        this._emit("end");
      }
    }
    _emitFinal() {
      const finalMessage = this.receivedMessages.at(-1);
      if (finalMessage) {
        this._emit("finalMessage", __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_getFinalMessage).call(this));
      }
    }
    async _fromReadableStream(readableStream, options) {
      const signal = options?.signal;
      let abortHandler;
      if (signal) {
        if (signal.aborted)
          this.controller.abort();
        abortHandler = this.controller.abort.bind(this.controller);
        signal.addEventListener("abort", abortHandler);
      }
      try {
        __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_beginRequest).call(this);
        this._connected(null);
        const stream = Stream.fromReadableStream(readableStream, this.controller);
        for await (const event of stream) {
          __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_addStreamEvent).call(this, event);
        }
        if (stream.controller.signal?.aborted) {
          throw new APIUserAbortError;
        }
        __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_endRequest).call(this);
      } finally {
        if (signal && abortHandler) {
          signal.removeEventListener("abort", abortHandler);
        }
      }
    }
    [(_MessageStream_currentMessageSnapshot = new WeakMap, _MessageStream_params = new WeakMap, _MessageStream_connectedPromise = new WeakMap, _MessageStream_resolveConnectedPromise = new WeakMap, _MessageStream_rejectConnectedPromise = new WeakMap, _MessageStream_endPromise = new WeakMap, _MessageStream_resolveEndPromise = new WeakMap, _MessageStream_rejectEndPromise = new WeakMap, _MessageStream_listeners = new WeakMap, _MessageStream_ended = new WeakMap, _MessageStream_errored = new WeakMap, _MessageStream_aborted = new WeakMap, _MessageStream_catchingPromiseCreated = new WeakMap, _MessageStream_response = new WeakMap, _MessageStream_request_id = new WeakMap, _MessageStream_logger = new WeakMap, _MessageStream_handleError = new WeakMap, _MessageStream_instances = new WeakSet, _MessageStream_getFinalMessage = function _MessageStream_getFinalMessage2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      return this.receivedMessages.at(-1);
    }, _MessageStream_getFinalText = function _MessageStream_getFinalText2() {
      if (this.receivedMessages.length === 0) {
        throw new AnthropicError("stream ended without producing a Message with role=assistant");
      }
      const textBlocks = this.receivedMessages.at(-1).content.filter((block) => block.type === "text").map((block) => block.text);
      if (textBlocks.length === 0) {
        throw new AnthropicError("stream ended without producing a content block with type=text");
      }
      return textBlocks.join(" ");
    }, _MessageStream_beginRequest = function _MessageStream_beginRequest2() {
      if (this.ended)
        return;
      __classPrivateFieldSet(this, _MessageStream_currentMessageSnapshot, undefined, "f");
    }, _MessageStream_addStreamEvent = function _MessageStream_addStreamEvent2(event) {
      if (this.ended)
        return;
      const messageSnapshot = __classPrivateFieldGet(this, _MessageStream_instances, "m", _MessageStream_accumulateMessage).call(this, event);
      this._emit("streamEvent", event, messageSnapshot);
      switch (event.type) {
        case "content_block_delta": {
          const content = messageSnapshot.content.at(-1);
          switch (event.delta.type) {
            case "text_delta": {
              if (content.type === "text") {
                this._emit("text", event.delta.text, content.text || "");
              }
              break;
            }
            case "citations_delta": {
              if (content.type === "text") {
                this._emit("citation", event.delta.citation, content.citations ?? []);
              }
              break;
            }
            case "input_json_delta": {
              if (tracksToolInput2(content) && content.input) {
                this._emit("inputJson", event.delta.partial_json, content.input);
              }
              break;
            }
            case "thinking_delta": {
              if (content.type === "thinking") {
                this._emit("thinking", event.delta.thinking, content.thinking);
              }
              break;
            }
            case "signature_delta": {
              if (content.type === "thinking") {
                this._emit("signature", content.signature);
              }
              break;
            }
            default:
              checkNever2(event.delta);
          }
          break;
        }
        case "message_stop": {
          this._addMessageParam(messageSnapshot);
          this._addMessage(maybeParseMessage(messageSnapshot, __classPrivateFieldGet(this, _MessageStream_params, "f"), { logger: __classPrivateFieldGet(this, _MessageStream_logger, "f") }), true);
          break;
        }
        case "content_block_stop": {
          this._emit("contentBlock", messageSnapshot.content.at(-1));
          break;
        }
        case "message_start": {
          __classPrivateFieldSet(this, _MessageStream_currentMessageSnapshot, messageSnapshot, "f");
          break;
        }
        case "content_block_start":
        case "message_delta":
          break;
      }
    }, _MessageStream_endRequest = function _MessageStream_endRequest2() {
      if (this.ended) {
        throw new AnthropicError(`stream has ended, this shouldn't happen`);
      }
      const snapshot = __classPrivateFieldGet(this, _MessageStream_currentMessageSnapshot, "f");
      if (!snapshot) {
        throw new AnthropicError(`request ended without sending any chunks`);
      }
      __classPrivateFieldSet(this, _MessageStream_currentMessageSnapshot, undefined, "f");
      return maybeParseMessage(snapshot, __classPrivateFieldGet(this, _MessageStream_params, "f"), { logger: __classPrivateFieldGet(this, _MessageStream_logger, "f") });
    }, _MessageStream_accumulateMessage = function _MessageStream_accumulateMessage2(event) {
      let snapshot = __classPrivateFieldGet(this, _MessageStream_currentMessageSnapshot, "f");
      if (event.type === "message_start") {
        if (snapshot) {
          throw new AnthropicError(`Unexpected event order, got ${event.type} before receiving "message_stop"`);
        }
        return event.message;
      }
      if (!snapshot) {
        throw new AnthropicError(`Unexpected event order, got ${event.type} before "message_start"`);
      }
      switch (event.type) {
        case "message_stop":
          return snapshot;
        case "message_delta":
          snapshot.stop_reason = event.delta.stop_reason;
          snapshot.stop_sequence = event.delta.stop_sequence;
          snapshot.usage.output_tokens = event.usage.output_tokens;
          if (event.usage.input_tokens != null) {
            snapshot.usage.input_tokens = event.usage.input_tokens;
          }
          if (event.usage.cache_creation_input_tokens != null) {
            snapshot.usage.cache_creation_input_tokens = event.usage.cache_creation_input_tokens;
          }
          if (event.usage.cache_read_input_tokens != null) {
            snapshot.usage.cache_read_input_tokens = event.usage.cache_read_input_tokens;
          }
          if (event.usage.server_tool_use != null) {
            snapshot.usage.server_tool_use = event.usage.server_tool_use;
          }
          return snapshot;
        case "content_block_start":
          snapshot.content.push({ ...event.content_block });
          return snapshot;
        case "content_block_delta": {
          const snapshotContent = snapshot.content.at(event.index);
          switch (event.delta.type) {
            case "text_delta": {
              if (snapshotContent?.type === "text") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  text: (snapshotContent.text || "") + event.delta.text
                };
              }
              break;
            }
            case "citations_delta": {
              if (snapshotContent?.type === "text") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  citations: [...snapshotContent.citations ?? [], event.delta.citation]
                };
              }
              break;
            }
            case "input_json_delta": {
              if (snapshotContent && tracksToolInput2(snapshotContent)) {
                let jsonBuf = snapshotContent[JSON_BUF_PROPERTY2] || "";
                jsonBuf += event.delta.partial_json;
                const newContent = { ...snapshotContent };
                Object.defineProperty(newContent, JSON_BUF_PROPERTY2, {
                  value: jsonBuf,
                  enumerable: false,
                  writable: true
                });
                if (jsonBuf) {
                  newContent.input = partialParse(jsonBuf);
                }
                snapshot.content[event.index] = newContent;
              }
              break;
            }
            case "thinking_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  thinking: snapshotContent.thinking + event.delta.thinking
                };
              }
              break;
            }
            case "signature_delta": {
              if (snapshotContent?.type === "thinking") {
                snapshot.content[event.index] = {
                  ...snapshotContent,
                  signature: event.delta.signature
                };
              }
              break;
            }
            default:
              checkNever2(event.delta);
          }
          return snapshot;
        }
        case "content_block_stop":
          return snapshot;
      }
    }, Symbol.asyncIterator)]() {
      const pushQueue = [];
      const readQueue = [];
      let done = false;
      this.on("streamEvent", (event) => {
        const reader = readQueue.shift();
        if (reader) {
          reader.resolve(event);
        } else {
          pushQueue.push(event);
        }
      });
      this.on("end", () => {
        done = true;
        for (const reader of readQueue) {
          reader.resolve(undefined);
        }
        readQueue.length = 0;
      });
      this.on("abort", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      this.on("error", (err) => {
        done = true;
        for (const reader of readQueue) {
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      return {
        next: async () => {
          if (!pushQueue.length) {
            if (done) {
              return { value: undefined, done: true };
            }
            return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk2) => chunk2 ? { value: chunk2, done: false } : { value: undefined, done: true });
          }
          const chunk = pushQueue.shift();
          return { value: chunk, done: false };
        },
        return: async () => {
          this.abort();
          return { value: undefined, done: true };
        }
      };
    }
    toReadableStream() {
      const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
      return stream.toReadableStream();
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/messages/batches.mjs
var Batches2;
var init_batches2 = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_jsonl();
  init_error2();
  init_path();
  Batches2 = class Batches2 extends APIResource {
    create(body, options) {
      return this._client.post("/v1/messages/batches", { body, ...options });
    }
    retrieve(messageBatchID, options) {
      return this._client.get(path`/v1/messages/batches/${messageBatchID}`, options);
    }
    list(query = {}, options) {
      return this._client.getAPIList("/v1/messages/batches", Page, { query, ...options });
    }
    delete(messageBatchID, options) {
      return this._client.delete(path`/v1/messages/batches/${messageBatchID}`, options);
    }
    cancel(messageBatchID, options) {
      return this._client.post(path`/v1/messages/batches/${messageBatchID}/cancel`, options);
    }
    async results(messageBatchID, options) {
      const batch = await this.retrieve(messageBatchID);
      if (!batch.results_url) {
        throw new AnthropicError(`No batch \`results_url\`; Has it finished processing? ${batch.processing_status} - ${batch.id}`);
      }
      return this._client.get(batch.results_url, {
        ...options,
        headers: buildHeaders([{ Accept: "application/binary" }, options?.headers]),
        stream: true,
        __binaryResponse: true
      })._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller));
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/messages/messages.mjs
var Messages2, DEPRECATED_MODELS2, MODELS_TO_WARN_WITH_THINKING_ENABLED2;
var init_messages2 = __esm(() => {
  init_resource();
  init_headers();
  init_stainless_helper_header();
  init_MessageStream();
  init_parser2();
  init_batches2();
  init_batches2();
  init_constants();
  Messages2 = class Messages2 extends APIResource {
    constructor() {
      super(...arguments);
      this.batches = new Batches2(this._client);
    }
    create(body, options) {
      if (body.model in DEPRECATED_MODELS2) {
        console.warn(`The model '${body.model}' is deprecated and will reach end-of-life on ${DEPRECATED_MODELS2[body.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
      }
      if (body.model in MODELS_TO_WARN_WITH_THINKING_ENABLED2 && body.thinking && body.thinking.type === "enabled") {
        console.warn(`Using Claude with ${body.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);
      }
      let timeout = this._client._options.timeout;
      if (!body.stream && timeout == null) {
        const maxNonstreamingTokens = MODEL_NONSTREAMING_TOKENS[body.model] ?? undefined;
        timeout = this._client.calculateNonstreamingTimeout(body.max_tokens, maxNonstreamingTokens);
      }
      const helperHeader = stainlessHelperHeader(body.tools, body.messages);
      return this._client.post("/v1/messages", {
        body,
        timeout: timeout ?? 600000,
        ...options,
        headers: buildHeaders([helperHeader, options?.headers]),
        stream: body.stream ?? false
      });
    }
    parse(params, options) {
      return this.create(params, options).then((message) => parseMessage(message, params, { logger: this._client.logger ?? console }));
    }
    stream(body, options) {
      return MessageStream.createMessage(this, body, options, { logger: this._client.logger ?? console });
    }
    countTokens(body, options) {
      return this._client.post("/v1/messages/count_tokens", { body, ...options });
    }
  };
  DEPRECATED_MODELS2 = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026",
    "claude-3-5-haiku-latest": "February 19th, 2026",
    "claude-3-5-haiku-20241022": "February 19th, 2026"
  };
  MODELS_TO_WARN_WITH_THINKING_ENABLED2 = ["claude-opus-4-6"];
  Messages2.Batches = Batches2;
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/models.mjs
var Models2;
var init_models2 = __esm(() => {
  init_resource();
  init_pagination();
  init_headers();
  init_path();
  Models2 = class Models2 extends APIResource {
    retrieve(modelID, params = {}, options) {
      const { betas } = params ?? {};
      return this._client.get(path`/v1/models/${modelID}`, {
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
    list(params = {}, options) {
      const { betas, ...query } = params ?? {};
      return this._client.getAPIList("/v1/models", Page, {
        query,
        ...options,
        headers: buildHeaders([
          { ...betas?.toString() != null ? { "anthropic-beta": betas?.toString() } : undefined },
          options?.headers
        ])
      });
    }
  };
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/resources/index.mjs
var init_resources = __esm(() => {
  init_beta();
  init_completions();
  init_messages2();
  init_models2();
  init_shared();
});

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/internal/utils/env.mjs
var readEnv = (env) => {
  if (typeof globalThis.process !== "undefined") {
    return globalThis.process.env?.[env]?.trim() ?? undefined;
  }
  if (typeof globalThis.Deno !== "undefined") {
    return globalThis.Deno.env?.get?.(env)?.trim();
  }
  return;
};
var init_env = () => {};

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/client.mjs
class BaseAnthropic {
  constructor({ baseURL = readEnv("ANTHROPIC_BASE_URL"), apiKey = readEnv("ANTHROPIC_API_KEY") ?? null, authToken = readEnv("ANTHROPIC_AUTH_TOKEN") ?? null, ...opts } = {}) {
    _BaseAnthropic_instances.add(this);
    _BaseAnthropic_encoder.set(this, undefined);
    const options = {
      apiKey,
      authToken,
      ...opts,
      baseURL: baseURL || `https://api.anthropic.com`
    };
    if (!options.dangerouslyAllowBrowser && isRunningInBrowser()) {
      throw new AnthropicError(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    }
    this.baseURL = options.baseURL;
    this.timeout = options.timeout ?? _a.DEFAULT_TIMEOUT;
    this.logger = options.logger ?? console;
    const defaultLogLevel = "warn";
    this.logLevel = defaultLogLevel;
    this.logLevel = parseLogLevel(options.logLevel, "ClientOptions.logLevel", this) ?? parseLogLevel(readEnv("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ?? defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? getDefaultFetch();
    __classPrivateFieldSet(this, _BaseAnthropic_encoder, FallbackEncoder, "f");
    this._options = options;
    this.apiKey = typeof apiKey === "string" ? apiKey : null;
    this.authToken = authToken;
  }
  withOptions(options) {
    const client = new this.constructor({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      authToken: this.authToken,
      ...options
    });
    return client;
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values, nulls }) {
    if (values.get("x-api-key") || values.get("authorization")) {
      return;
    }
    if (this.apiKey && values.get("x-api-key")) {
      return;
    }
    if (nulls.has("x-api-key")) {
      return;
    }
    if (this.authToken && values.get("authorization")) {
      return;
    }
    if (nulls.has("authorization")) {
      return;
    }
    throw new Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted');
  }
  async authHeaders(opts) {
    return buildHeaders([await this.apiKeyAuth(opts), await this.bearerAuth(opts)]);
  }
  async apiKeyAuth(opts) {
    if (this.apiKey == null) {
      return;
    }
    return buildHeaders([{ "X-Api-Key": this.apiKey }]);
  }
  async bearerAuth(opts) {
    if (this.authToken == null) {
      return;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.authToken}` }]);
  }
  stringifyQuery(query) {
    return stringifyQuery(query);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${VERSION}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${uuid4()}`;
  }
  makeStatusError(status, error2, message, headers) {
    return APIError.generate(status, error2, message, headers);
  }
  buildURL(path2, query, defaultBaseURL) {
    const baseURL = !__classPrivateFieldGet(this, _BaseAnthropic_instances, "m", _BaseAnthropic_baseURLOverridden).call(this) && defaultBaseURL || this.baseURL;
    const url = isAbsoluteURL(path2) ? new URL(path2) : new URL(baseURL + (baseURL.endsWith("/") && path2.startsWith("/") ? path2.slice(1) : path2));
    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }
    if (typeof query === "object" && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }
    return url.toString();
  }
  _calculateNonstreamingTimeout(maxTokens) {
    const defaultTimeout = 10 * 60;
    const expectedTimeout = 60 * 60 * maxTokens / 128000;
    if (expectedTimeout > defaultTimeout) {
      throw new AnthropicError("Streaming is required for operations that may take longer than 10 minutes. " + "See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");
    }
    return defaultTimeout * 1000;
  }
  async prepareOptions(options) {}
  async prepareRequest(request, { url, options }) {}
  get(path2, opts) {
    return this.methodRequest("get", path2, opts);
  }
  post(path2, opts) {
    return this.methodRequest("post", path2, opts);
  }
  patch(path2, opts) {
    return this.methodRequest("patch", path2, opts);
  }
  put(path2, opts) {
    return this.methodRequest("put", path2, opts);
  }
  delete(path2, opts) {
    return this.methodRequest("delete", path2, opts);
  }
  methodRequest(method, path2, opts) {
    return this.request(Promise.resolve(opts).then((opts2) => {
      return { method, path: path2, ...opts2 };
    }));
  }
  request(options, remainingRetries = null) {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }
  async makeRequest(optionsInput, retriesRemaining, retryOfRequestLogID) {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }
    await this.prepareOptions(options);
    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining
    });
    await this.prepareRequest(req, { url, options });
    const requestLogID = "log_" + (Math.random() * (1 << 24) | 0).toString(16).padStart(6, "0");
    const retryLogStr = retryOfRequestLogID === undefined ? "" : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();
    loggerFor(this).debug(`[${requestLogID}] sending request`, formatRequestDetails({
      retryOfRequestLogID,
      method: options.method,
      url,
      options,
      headers: req.headers
    }));
    if (options.signal?.aborted) {
      throw new APIUserAbortError;
    }
    const controller = new AbortController;
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();
    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new APIUserAbortError;
      }
      const isTimeout = isAbortError(response) || /timed? ?out/i.test(String(response) + ("cause" in response ? String(response.cause) : ""));
      if (retriesRemaining) {
        loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} - ${retryMessage}`);
        loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} (${retryMessage})`, formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message
        }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} - error; no more retries left`);
      loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? "timed out" : "failed"} (error; no more retries left)`, formatRequestDetails({
        retryOfRequestLogID,
        url,
        durationMs: headersTime - startTime,
        message: response.message
      }));
      if (isTimeout) {
        throw new APIConnectionTimeoutError;
      }
      throw new APIConnectionError({ cause: response });
    }
    const specialHeaders = [...response.headers.entries()].filter(([name]) => name === "request-id").map(([name, value]) => ", " + name + ": " + JSON.stringify(value)).join("");
    const responseInfo = `[${requestLogID}${retryLogStr}${specialHeaders}] ${req.method} ${url} ${response.ok ? "succeeded" : "failed"} with status ${response.status} in ${headersTime - startTime}ms`;
    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage2 = `retrying, ${retriesRemaining} attempts remaining`;
        await CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage2}`);
        loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage2})`, formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          durationMs: headersTime - startTime
        }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID, response.headers);
      }
      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;
      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
      const errText = await response.text().catch((err2) => castToError(err2).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;
      loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage})`, formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        message: errMessage,
        durationMs: Date.now() - startTime
      }));
      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }
    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(`[${requestLogID}] response start`, formatRequestDetails({
      retryOfRequestLogID,
      url: response.url,
      status: response.status,
      headers: response.headers,
      durationMs: headersTime - startTime
    }));
    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }
  getAPIList(path2, Page2, opts) {
    return this.requestAPIList(Page2, opts && "then" in opts ? opts.then((opts2) => ({ method: "get", path: path2, ...opts2 })) : { method: "get", path: path2, ...opts });
  }
  requestAPIList(Page2, options) {
    const request = this.makeRequest(options, null, undefined);
    return new PagePromise(this, request, Page2);
  }
  async fetchWithTimeout(url, init, ms, controller) {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal)
      signal.addEventListener("abort", abort, { once: true });
    const timeout = setTimeout(abort, ms);
    const isReadableBody = globalThis.ReadableStream && options.body instanceof globalThis.ReadableStream || typeof options.body === "object" && options.body !== null && Symbol.asyncIterator in options.body;
    const fetchOptions = {
      signal: controller.signal,
      ...isReadableBody ? { duplex: "half" } : {},
      method: "GET",
      ...options
    };
    if (method) {
      fetchOptions.method = method.toUpperCase();
    }
    try {
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }
  async shouldRetry(response) {
    const shouldRetryHeader = response.headers.get("x-should-retry");
    if (shouldRetryHeader === "true")
      return true;
    if (shouldRetryHeader === "false")
      return false;
    if (response.status === 408)
      return true;
    if (response.status === 409)
      return true;
    if (response.status === 429)
      return true;
    if (response.status >= 500)
      return true;
    return false;
  }
  async retryRequest(options, retriesRemaining, requestLogID, responseHeaders) {
    let timeoutMillis;
    const retryAfterMillisHeader = responseHeaders?.get("retry-after-ms");
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }
    const retryAfterHeader = responseHeaders?.get("retry-after");
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }
    if (timeoutMillis === undefined) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);
    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }
  calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8;
    const numRetries = maxRetries - retriesRemaining;
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
    const jitter = 1 - Math.random() * 0.25;
    return sleepSeconds * jitter * 1000;
  }
  calculateNonstreamingTimeout(maxTokens, maxNonstreamingTokens) {
    const maxTime = 60 * 60 * 1000;
    const defaultTime = 60 * 10 * 1000;
    const expectedTime = maxTime * maxTokens / 128000;
    if (expectedTime > defaultTime || maxNonstreamingTokens != null && maxTokens > maxNonstreamingTokens) {
      throw new AnthropicError("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");
    }
    return defaultTime;
  }
  async buildRequest(inputOptions, { retryCount = 0 } = {}) {
    const options = { ...inputOptions };
    const { method, path: path2, query, defaultBaseURL } = options;
    const url = this.buildURL(path2, query, defaultBaseURL);
    if ("timeout" in options)
      validatePositiveInteger("timeout", options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });
    const req = {
      method,
      headers: reqHeaders,
      ...options.signal && { signal: options.signal },
      ...globalThis.ReadableStream && body instanceof globalThis.ReadableStream && { duplex: "half" },
      ...body && { body },
      ...this.fetchOptions ?? {},
      ...options.fetchOptions ?? {}
    };
    return { req, url, timeout: options.timeout };
  }
  async buildHeaders({ options, method, bodyHeaders, retryCount }) {
    let idempotencyHeaders = {};
    if (this.idempotencyHeader && method !== "get") {
      if (!options.idempotencyKey)
        options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }
    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: "application/json",
        "User-Agent": this.getUserAgent(),
        "X-Stainless-Retry-Count": String(retryCount),
        ...options.timeout ? { "X-Stainless-Timeout": String(Math.trunc(options.timeout / 1000)) } : {},
        ...getPlatformHeaders(),
        ...this._options.dangerouslyAllowBrowser ? { "anthropic-dangerous-direct-browser-access": "true" } : undefined,
        "anthropic-version": "2023-06-01"
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers
    ]);
    this.validateHeaders(headers);
    return headers.values;
  }
  _makeAbort(controller) {
    return () => controller.abort();
  }
  buildBody({ options: { body, headers: rawHeaders } }) {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (ArrayBuffer.isView(body) || body instanceof ArrayBuffer || body instanceof DataView || typeof body === "string" && headers.values.has("content-type") || globalThis.Blob && body instanceof globalThis.Blob || body instanceof FormData || body instanceof URLSearchParams || globalThis.ReadableStream && body instanceof globalThis.ReadableStream) {
      return { bodyHeaders: undefined, body };
    } else if (typeof body === "object" && ((Symbol.asyncIterator in body) || (Symbol.iterator in body) && ("next" in body) && typeof body.next === "function")) {
      return { bodyHeaders: undefined, body: ReadableStreamFrom(body) };
    } else if (typeof body === "object" && headers.values.get("content-type") === "application/x-www-form-urlencoded") {
      return {
        bodyHeaders: { "content-type": "application/x-www-form-urlencoded" },
        body: this.stringifyQuery(body)
      };
    } else {
      return __classPrivateFieldGet(this, _BaseAnthropic_encoder, "f").call(this, { body, headers });
    }
  }
}
var _BaseAnthropic_instances, _a, _BaseAnthropic_encoder, _BaseAnthropic_baseURLOverridden, HUMAN_PROMPT = "\\n\\nHuman:", AI_PROMPT = "\\n\\nAssistant:", Anthropic;
var init_client = __esm(() => {
  init_tslib();
  init_uuid();
  init_values();
  init_sleep();
  init_errors();
  init_detect_platform();
  init_shims();
  init_request_options();
  init_query();
  init_version();
  init_error();
  init_pagination();
  init_uploads2();
  init_resources();
  init_api_promise();
  init_completions();
  init_models2();
  init_beta();
  init_messages2();
  init_detect_platform();
  init_headers();
  init_env();
  init_log();
  init_values();
  _a = BaseAnthropic, _BaseAnthropic_encoder = new WeakMap, _BaseAnthropic_instances = new WeakSet, _BaseAnthropic_baseURLOverridden = function _BaseAnthropic_baseURLOverridden2() {
    return this.baseURL !== "https://api.anthropic.com";
  };
  BaseAnthropic.Anthropic = _a;
  BaseAnthropic.HUMAN_PROMPT = HUMAN_PROMPT;
  BaseAnthropic.AI_PROMPT = AI_PROMPT;
  BaseAnthropic.DEFAULT_TIMEOUT = 600000;
  BaseAnthropic.AnthropicError = AnthropicError;
  BaseAnthropic.APIError = APIError;
  BaseAnthropic.APIConnectionError = APIConnectionError;
  BaseAnthropic.APIConnectionTimeoutError = APIConnectionTimeoutError;
  BaseAnthropic.APIUserAbortError = APIUserAbortError;
  BaseAnthropic.NotFoundError = NotFoundError;
  BaseAnthropic.ConflictError = ConflictError;
  BaseAnthropic.RateLimitError = RateLimitError;
  BaseAnthropic.BadRequestError = BadRequestError;
  BaseAnthropic.AuthenticationError = AuthenticationError;
  BaseAnthropic.InternalServerError = InternalServerError;
  BaseAnthropic.PermissionDeniedError = PermissionDeniedError;
  BaseAnthropic.UnprocessableEntityError = UnprocessableEntityError;
  BaseAnthropic.toFile = toFile;
  Anthropic = class Anthropic extends BaseAnthropic {
    constructor() {
      super(...arguments);
      this.completions = new Completions(this);
      this.messages = new Messages2(this);
      this.models = new Models2(this);
      this.beta = new Beta(this);
    }
  };
  Anthropic.Completions = Completions;
  Anthropic.Messages = Messages2;
  Anthropic.Models = Models2;
  Anthropic.Beta = Beta;
});

export { AnthropicError, APIError, APIUserAbortError, APIConnectionError, APIConnectionTimeoutError, AuthenticationError, NotFoundError, init_error, Stream, init_api_promise, init_pagination, init_uploads2 as init_uploads, init_error2 as init_error1, init_streaming2 as init_streaming, Beta, Completions, Messages2 as Messages, init_resources, BaseAnthropic, Anthropic, init_client };
