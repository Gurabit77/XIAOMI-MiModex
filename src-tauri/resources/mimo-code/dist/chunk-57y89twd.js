// @bun
import {
  require_protocols
} from "./chunk-6qkspz0q.js";
import {
  require_dist_cjs as require_dist_cjs5,
  require_dist_cjs4 as require_dist_cjs8
} from "./chunk-7vfjvamn.js";
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-m53ks0yf.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-27an25fd.js";
import {
  require_dist_cjs
} from "./chunk-tp6bgx9r.js";
import {
  require_dist_cjs as require_dist_cjs6,
  require_dist_cjs2 as require_dist_cjs7
} from "./chunk-2nayx6q1.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+core@3.23.17/node_modules/@smithy/core/dist-cjs/index.js
var require_dist_cjs9 = __commonJS((exports) => {
  var types = require_dist_cjs();
  var protocolHttp = require_dist_cjs2();
  var utilMiddleware = require_dist_cjs5();
  var protocols = require_protocols();
  var getSmithyContext = (context) => context[types.SMITHY_CONTEXT_KEY] || (context[types.SMITHY_CONTEXT_KEY] = {});
  var resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
    if (!authSchemePreference || authSchemePreference.length === 0) {
      return candidateAuthOptions;
    }
    const preferredAuthOptions = [];
    for (const preferredSchemeName of authSchemePreference) {
      for (const candidateAuthOption of candidateAuthOptions) {
        const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
        if (candidateAuthSchemeName === preferredSchemeName) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
    }
    for (const candidateAuthOption of candidateAuthOptions) {
      if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
    return preferredAuthOptions;
  };
  function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map;
    for (const scheme of httpAuthSchemes) {
      map.set(scheme.schemeId, scheme);
    }
    return map;
  }
  var httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
    const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = utilMiddleware.getSmithyContext(context);
    const failureReasons = [];
    for (const option of resolvedOptions) {
      const scheme = authSchemes.get(option.schemeId);
      if (!scheme) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
        continue;
      }
      const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
      if (!identityProvider) {
        failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
        continue;
      }
      const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
      option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
      option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
      smithyContext.selectedHttpAuthScheme = {
        httpAuthOption: option,
        identity: await identityProvider(option.identityProperties),
        signer: scheme.signer
      };
      break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
      throw new Error(failureReasons.join(`
`));
    }
    return next(args);
  };
  var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };
  var getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    }
  });
  var httpAuthSchemeMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "serializerMiddleware"
  };
  var getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }), httpAuthSchemeMiddlewareOptions);
    }
  });
  var defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
  };
  var defaultSuccessHandler = (httpResponse, signingProperties) => {};
  var httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!protocolHttp.HttpRequest.isInstance(args.request)) {
      return next(args);
    }
    const smithyContext = utilMiddleware.getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
    const output = await next({
      ...args,
      request: await signer.sign(args.request, identity, signingProperties)
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
  };
  var httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware"
  };
  var getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(httpSigningMiddleware(), httpSigningMiddlewareOptions);
    }
  });
  var normalizeProvider = (input) => {
    if (typeof input === "function")
      return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
  };
  var makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
    let command = new CommandCtor(input);
    command = withCommand(command) ?? command;
    return await client.send(command, ...args);
  };
  function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
      const _input = input;
      let token = config.startingToken ?? _input[inputTokenName];
      let hasNext = true;
      let page;
      while (hasNext) {
        _input[inputTokenName] = token;
        if (pageSizeTokenName) {
          _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
        }
        if (config.client instanceof ClientCtor) {
          page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
        } else {
          throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
        }
        yield page;
        const prevToken = token;
        token = get(page, outputTokenName);
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
      }
      return;
    };
  }
  var get = (fromObject, path) => {
    let cursor = fromObject;
    const pathComponents = path.split(".");
    for (const step of pathComponents) {
      if (!cursor || typeof cursor !== "object") {
        return;
      }
      cursor = cursor[step];
    }
    return cursor;
  };
  function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
      context.__smithy_context = {
        features: {}
      };
    } else if (!context.__smithy_context.features) {
      context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
  }

  class DefaultIdentityProviderConfig {
    authSchemes = new Map;
    constructor(config) {
      for (const key in config) {
        const value = config[key];
        if (value !== undefined) {
          this.authSchemes.set(key, value);
        }
      }
    }
    getIdentityProvider(schemeId) {
      return this.authSchemes.get(schemeId);
    }
  }

  class HttpApiKeyAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
      if (!signingProperties) {
        throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
      }
      if (!signingProperties.name) {
        throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
      }
      if (!signingProperties.in) {
        throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
      }
      if (!identity.apiKey) {
        throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
      }
      const clonedRequest = protocolHttp.HttpRequest.clone(httpRequest);
      if (signingProperties.in === types.HttpApiKeyAuthLocation.QUERY) {
        clonedRequest.query[signingProperties.name] = identity.apiKey;
      } else if (signingProperties.in === types.HttpApiKeyAuthLocation.HEADER) {
        clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
      } else {
        throw new Error("request can only be signed with `apiKey` locations `query` or `header`, " + "but found: `" + signingProperties.in + "`");
      }
      return clonedRequest;
    }
  }

  class HttpBearerAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
      const clonedRequest = protocolHttp.HttpRequest.clone(httpRequest);
      if (!identity.token) {
        throw new Error("request could not be signed with `token` since the `token` is not defined");
      }
      clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
      return clonedRequest;
    }
  }

  class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
      return httpRequest;
    }
  }
  var createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
    return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
  };
  var EXPIRATION_MS = 300000;
  var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
  var doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
  var memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
      return;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
      if (!pending) {
        pending = normalizedProvider(options);
      }
      try {
        resolved = await pending;
        hasResult = true;
        isConstant = false;
      } finally {
        pending = undefined;
      }
      return resolved;
    };
    if (isExpired === undefined) {
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        return resolved;
      };
    }
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      if (isConstant) {
        return resolved;
      }
      if (!requiresRefresh(resolved)) {
        isConstant = true;
        return resolved;
      }
      if (isExpired(resolved)) {
        await coalesceProvider(options);
        return resolved;
      }
      return resolved;
    };
  };
  exports.requestBuilder = protocols.requestBuilder;
  exports.DefaultIdentityProviderConfig = DefaultIdentityProviderConfig;
  exports.EXPIRATION_MS = EXPIRATION_MS;
  exports.HttpApiKeyAuthSigner = HttpApiKeyAuthSigner;
  exports.HttpBearerAuthSigner = HttpBearerAuthSigner;
  exports.NoAuthSigner = NoAuthSigner;
  exports.createIsIdentityExpiredFunction = createIsIdentityExpiredFunction;
  exports.createPaginator = createPaginator;
  exports.doesIdentityRequireRefresh = doesIdentityRequireRefresh;
  exports.getHttpAuthSchemeEndpointRuleSetPlugin = getHttpAuthSchemeEndpointRuleSetPlugin;
  exports.getHttpAuthSchemePlugin = getHttpAuthSchemePlugin;
  exports.getHttpSigningPlugin = getHttpSigningPlugin;
  exports.getSmithyContext = getSmithyContext;
  exports.httpAuthSchemeEndpointRuleSetMiddlewareOptions = httpAuthSchemeEndpointRuleSetMiddlewareOptions;
  exports.httpAuthSchemeMiddleware = httpAuthSchemeMiddleware;
  exports.httpAuthSchemeMiddlewareOptions = httpAuthSchemeMiddlewareOptions;
  exports.httpSigningMiddleware = httpSigningMiddleware;
  exports.httpSigningMiddlewareOptions = httpSigningMiddlewareOptions;
  exports.isIdentityExpired = isIdentityExpired;
  exports.memoizeIdentityProvider = memoizeIdentityProvider;
  exports.normalizeProvider = normalizeProvider;
  exports.setFeature = setFeature;
});

// node_modules/.bun/@smithy+signature-v4@5.3.14/node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs10 = __commonJS((exports) => {
  var utilHexEncoding = require_dist_cjs8();
  var utilUtf8 = require_dist_cjs7();
  var isArrayBuffer = require_dist_cjs6();
  var protocolHttp = require_dist_cjs2();
  var utilMiddleware = require_dist_cjs5();
  var utilUriEscape = require_dist_cjs3();
  var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  var REGION_SET_PARAM = "X-Amz-Region-Set";
  var AUTH_HEADER = "authorization";
  var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
  var DATE_HEADER = "date";
  var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
  var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
  var SHA256_HEADER = "x-amz-content-sha256";
  var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
  var HOST_HEADER = "host";
  var ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
  };
  var PROXY_HEADER_PATTERN = /^proxy-/;
  var SEC_HEADER_PATTERN = /^sec-/;
  var UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
  var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  var ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
  var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  var MAX_CACHE_SIZE = 50;
  var KEY_TYPE_IDENTIFIER = "aws4_request";
  var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  var signingKeyCache = {};
  var cacheQueue = [];
  var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
  var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${utilHexEncoding.toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
      return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
      delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
      key = await hmac(sha256Constructor, key, signable);
    }
    return signingKeyCache[cacheKey] = key;
  };
  var clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
      delete signingKeyCache[cacheKey];
    });
  };
  var hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(utilUtf8.toUint8Array(data));
    return hash.digest();
  };
  var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
      if (headers[headerName] == undefined) {
        continue;
      }
      const canonicalHeaderName = headerName.toLowerCase();
      if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
        if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
          continue;
        }
      }
      canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
  };
  var getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
      if (headerName.toLowerCase() === SHA256_HEADER) {
        return headers[headerName];
      }
    }
    if (body == undefined) {
      return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer.isArrayBuffer(body)) {
      const hashCtor = new hashConstructor;
      hashCtor.update(utilUtf8.toUint8Array(body));
      return utilHexEncoding.toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
  };

  class HeaderFormatter {
    format(headers) {
      const chunks = [];
      for (const headerName of Object.keys(headers)) {
        const bytes = utilUtf8.fromUtf8(headerName);
        chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
      }
      const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
      let position = 0;
      for (const chunk of chunks) {
        out.set(chunk, position);
        position += chunk.byteLength;
      }
      return out;
    }
    formatHeaderValue(header) {
      switch (header.type) {
        case "boolean":
          return Uint8Array.from([header.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, header.value]);
        case "short":
          const shortView = new DataView(new ArrayBuffer(3));
          shortView.setUint8(0, 3);
          shortView.setInt16(1, header.value, false);
          return new Uint8Array(shortView.buffer);
        case "integer":
          const intView = new DataView(new ArrayBuffer(5));
          intView.setUint8(0, 4);
          intView.setInt32(1, header.value, false);
          return new Uint8Array(intView.buffer);
        case "long":
          const longBytes = new Uint8Array(9);
          longBytes[0] = 5;
          longBytes.set(header.value.bytes, 1);
          return longBytes;
        case "binary":
          const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
          binView.setUint8(0, 6);
          binView.setUint16(1, header.value.byteLength, false);
          const binBytes = new Uint8Array(binView.buffer);
          binBytes.set(header.value, 3);
          return binBytes;
        case "string":
          const utf8Bytes = utilUtf8.fromUtf8(header.value);
          const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
          strView.setUint8(0, 7);
          strView.setUint16(1, utf8Bytes.byteLength, false);
          const strBytes = new Uint8Array(strView.buffer);
          strBytes.set(utf8Bytes, 3);
          return strBytes;
        case "timestamp":
          const tsBytes = new Uint8Array(9);
          tsBytes[0] = 8;
          tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
          return tsBytes;
        case "uuid":
          if (!UUID_PATTERN.test(header.value)) {
            throw new Error(`Invalid UUID received: ${header.value}`);
          }
          const uuidBytes = new Uint8Array(17);
          uuidBytes[0] = 9;
          uuidBytes.set(utilHexEncoding.fromHex(header.value.replace(/\-/g, "")), 1);
          return uuidBytes;
      }
    }
  }
  var HEADER_VALUE_TYPE;
  (function(HEADER_VALUE_TYPE2) {
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
  var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

  class Int64 {
    bytes;
    constructor(bytes) {
      this.bytes = bytes;
      if (bytes.byteLength !== 8) {
        throw new Error("Int64 buffers must be exactly 8 bytes");
      }
    }
    static fromNumber(number) {
      if (number > 9223372036854776000 || number < -9223372036854776000) {
        throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
      }
      const bytes = new Uint8Array(8);
      for (let i = 7, remaining = Math.abs(Math.round(number));i > -1 && remaining > 0; i--, remaining /= 256) {
        bytes[i] = remaining;
      }
      if (number < 0) {
        negate(bytes);
      }
      return new Int64(bytes);
    }
    valueOf() {
      const bytes = this.bytes.slice(0);
      const negative = bytes[0] & 128;
      if (negative) {
        negate(bytes);
      }
      return parseInt(utilHexEncoding.toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  }
  function negate(bytes) {
    for (let i = 0;i < 8; i++) {
      bytes[i] ^= 255;
    }
    for (let i = 7;i > -1; i--) {
      bytes[i]++;
      if (bytes[i] !== 0)
        break;
    }
  }
  var hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
      if (soughtHeader === headerName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };
  var moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = protocolHttp.HttpRequest.clone(request);
    for (const name of Object.keys(headers)) {
      const lname = name.toLowerCase();
      if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
        query[name] = headers[name];
        delete headers[name];
      }
    }
    return {
      ...request,
      headers,
      query
    };
  };
  var prepareRequest = (request) => {
    request = protocolHttp.HttpRequest.clone(request);
    for (const headerName of Object.keys(request.headers)) {
      if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
        delete request.headers[headerName];
      }
    }
    return request;
  };
  var getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query)) {
      if (key.toLowerCase() === SIGNATURE_HEADER) {
        continue;
      }
      const encodedKey = utilUriEscape.escapeUri(key);
      keys.push(encodedKey);
      const value = query[key];
      if (typeof value === "string") {
        serialized[encodedKey] = `${encodedKey}=${utilUriEscape.escapeUri(value)}`;
      } else if (Array.isArray(value)) {
        serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${utilUriEscape.escapeUri(value2)}`]), []).sort().join("&");
      }
    }
    return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
  };
  var iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
  var toDate = (time) => {
    if (typeof time === "number") {
      return new Date(time * 1000);
    }
    if (typeof time === "string") {
      if (Number(time)) {
        return new Date(Number(time) * 1000);
      }
      return new Date(time);
    }
    return time;
  };

  class SignatureV4Base {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      this.service = service;
      this.sha256 = sha256;
      this.uriEscapePath = uriEscapePath;
      this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
      this.regionProvider = utilMiddleware.normalizeProvider(region);
      this.credentialProvider = utilMiddleware.normalizeProvider(credentials);
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
      const sortedHeaders = Object.keys(canonicalHeaders).sort();
      return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join(`
`)}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
      const hash = new this.sha256;
      hash.update(utilUtf8.toUint8Array(canonicalRequest));
      const hashedRequest = await hash.digest();
      return `${algorithmIdentifier}
${longDate}
${credentialScope}
${utilHexEncoding.toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
      if (this.uriEscapePath) {
        const normalizedPathSegments = [];
        for (const pathSegment of path.split("/")) {
          if (pathSegment?.length === 0)
            continue;
          if (pathSegment === ".")
            continue;
          if (pathSegment === "..") {
            normalizedPathSegments.pop();
          } else {
            normalizedPathSegments.push(pathSegment);
          }
        }
        const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
        const doubleEncoded = utilUriEscape.escapeUri(normalizedPath);
        return doubleEncoded.replace(/%2F/g, "/");
      }
      return path;
    }
    validateResolvedCredentials(credentials) {
      if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
        throw new Error("Resolved credential object is not valid");
      }
    }
    formatDate(now) {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }
    getCanonicalHeaderList(headers) {
      return Object.keys(headers).sort().join(";");
    }
  }

  class SignatureV4 extends SignatureV4Base {
    headerFormatter = new HeaderFormatter;
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
      super({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath
      });
    }
    async presign(originalRequest, options = {}) {
      const { signingDate = new Date, expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const { longDate, shortDate } = this.formatDate(signingDate);
      if (expiresIn > MAX_PRESIGNED_TTL) {
        return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
      }
      const scope = createScope(shortDate, region, signingService ?? this.service);
      const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
      if (credentials.sessionToken) {
        request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
      }
      request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
      request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
      request.query[AMZ_DATE_QUERY_PARAM] = longDate;
      request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
      const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
      request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
      return request;
    }
    async sign(toSign, options) {
      if (typeof toSign === "string") {
        return this.signString(toSign, options);
      } else if (toSign.headers && toSign.payload) {
        return this.signEvent(toSign, options);
      } else if (toSign.message) {
        return this.signMessage(toSign, options);
      } else {
        return this.signRequest(toSign, options);
      }
    }
    async signEvent({ headers, payload }, { signingDate = new Date, priorSignature, signingRegion, signingService, eventStreamCredentials }) {
      const region = signingRegion ?? await this.regionProvider();
      const { shortDate, longDate } = this.formatDate(signingDate);
      const scope = createScope(shortDate, region, signingService ?? this.service);
      const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
      const hash = new this.sha256;
      hash.update(headers);
      const hashedHeaders = utilHexEncoding.toHex(await hash.digest());
      const stringToSign = [
        EVENT_ALGORITHM_IDENTIFIER,
        longDate,
        scope,
        priorSignature,
        hashedHeaders,
        hashedPayload
      ].join(`
`);
      return this.signString(stringToSign, {
        signingDate,
        signingRegion: region,
        signingService,
        eventStreamCredentials
      });
    }
    async signMessage(signableMessage, { signingDate = new Date, signingRegion, signingService, eventStreamCredentials }) {
      const promise = this.signEvent({
        headers: this.headerFormatter.format(signableMessage.message.headers),
        payload: signableMessage.message.body
      }, {
        signingDate,
        signingRegion,
        signingService,
        priorSignature: signableMessage.priorSignature,
        eventStreamCredentials
      });
      return promise.then((signature) => {
        return { message: signableMessage.message, signature };
      });
    }
    async signString(stringToSign, { signingDate = new Date, signingRegion, signingService, eventStreamCredentials } = {}) {
      const credentials = eventStreamCredentials ?? await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const { shortDate } = this.formatDate(signingDate);
      const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
      hash.update(utilUtf8.toUint8Array(stringToSign));
      return utilHexEncoding.toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date, signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
      const credentials = await this.credentialProvider();
      this.validateResolvedCredentials(credentials);
      const region = signingRegion ?? await this.regionProvider();
      const request = prepareRequest(requestToSign);
      const { longDate, shortDate } = this.formatDate(signingDate);
      const scope = createScope(shortDate, region, signingService ?? this.service);
      request.headers[AMZ_DATE_HEADER] = longDate;
      if (credentials.sessionToken) {
        request.headers[TOKEN_HEADER] = credentials.sessionToken;
      }
      const payloadHash = await getPayloadHash(request, this.sha256);
      if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
        request.headers[SHA256_HEADER] = payloadHash;
      }
      const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
      const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
      request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature}`;
      return request;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
      const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
      const hash = new this.sha256(await keyPromise);
      hash.update(utilUtf8.toUint8Array(stringToSign));
      return utilHexEncoding.toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
      return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
  }
  var signatureV4aContainer = {
    SignatureV4a: null
  };
  exports.ALGORITHM_IDENTIFIER = ALGORITHM_IDENTIFIER;
  exports.ALGORITHM_IDENTIFIER_V4A = ALGORITHM_IDENTIFIER_V4A;
  exports.ALGORITHM_QUERY_PARAM = ALGORITHM_QUERY_PARAM;
  exports.ALWAYS_UNSIGNABLE_HEADERS = ALWAYS_UNSIGNABLE_HEADERS;
  exports.AMZ_DATE_HEADER = AMZ_DATE_HEADER;
  exports.AMZ_DATE_QUERY_PARAM = AMZ_DATE_QUERY_PARAM;
  exports.AUTH_HEADER = AUTH_HEADER;
  exports.CREDENTIAL_QUERY_PARAM = CREDENTIAL_QUERY_PARAM;
  exports.DATE_HEADER = DATE_HEADER;
  exports.EVENT_ALGORITHM_IDENTIFIER = EVENT_ALGORITHM_IDENTIFIER;
  exports.EXPIRES_QUERY_PARAM = EXPIRES_QUERY_PARAM;
  exports.GENERATED_HEADERS = GENERATED_HEADERS;
  exports.HOST_HEADER = HOST_HEADER;
  exports.KEY_TYPE_IDENTIFIER = KEY_TYPE_IDENTIFIER;
  exports.MAX_CACHE_SIZE = MAX_CACHE_SIZE;
  exports.MAX_PRESIGNED_TTL = MAX_PRESIGNED_TTL;
  exports.PROXY_HEADER_PATTERN = PROXY_HEADER_PATTERN;
  exports.REGION_SET_PARAM = REGION_SET_PARAM;
  exports.SEC_HEADER_PATTERN = SEC_HEADER_PATTERN;
  exports.SHA256_HEADER = SHA256_HEADER;
  exports.SIGNATURE_HEADER = SIGNATURE_HEADER;
  exports.SIGNATURE_QUERY_PARAM = SIGNATURE_QUERY_PARAM;
  exports.SIGNED_HEADERS_QUERY_PARAM = SIGNED_HEADERS_QUERY_PARAM;
  exports.SignatureV4 = SignatureV4;
  exports.SignatureV4Base = SignatureV4Base;
  exports.TOKEN_HEADER = TOKEN_HEADER;
  exports.TOKEN_QUERY_PARAM = TOKEN_QUERY_PARAM;
  exports.UNSIGNABLE_PATTERNS = UNSIGNABLE_PATTERNS;
  exports.UNSIGNED_PAYLOAD = UNSIGNED_PAYLOAD;
  exports.clearCredentialCache = clearCredentialCache;
  exports.createScope = createScope;
  exports.getCanonicalHeaders = getCanonicalHeaders;
  exports.getCanonicalQuery = getCanonicalQuery;
  exports.getPayloadHash = getPayloadHash;
  exports.getSigningKey = getSigningKey;
  exports.hasHeader = hasHeader;
  exports.moveHeadersToQuery = moveHeadersToQuery;
  exports.prepareRequest = prepareRequest;
  exports.signatureV4aContainer = signatureV4aContainer;
});

// node_modules/.bun/@aws-sdk+core@3.974.5/node_modules/@aws-sdk/core/dist-cjs/submodules/httpAuthSchemes/index.js
var require_httpAuthSchemes = __commonJS((exports) => {
  var protocolHttp = require_dist_cjs2();
  var core = require_dist_cjs9();
  var propertyProvider = require_dist_cjs4();
  var client = require_client();
  var signatureV4 = require_dist_cjs10();
  var getDateHeader = (response) => protocolHttp.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
  var getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  var isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;
  var getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
      return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
  };
  var throwSigningPropertyError = (name, property) => {
    if (!property) {
      throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
  };
  var validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingRegionSet = signingProperties?.signingRegionSet;
    const signingName = signingProperties?.signingName;
    return {
      config,
      signer,
      signingRegion,
      signingRegionSet,
      signingName
    };
  };

  class AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
      if (!protocolHttp.HttpRequest.isInstance(httpRequest)) {
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
      }
      const validatedProps = await validateSigningProperties(signingProperties);
      const { config, signer } = validatedProps;
      let { signingRegion, signingName } = validatedProps;
      const handlerExecutionContext = signingProperties.context;
      if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
        const [first, second] = handlerExecutionContext.authSchemes;
        if (first?.name === "sigv4a" && second?.name === "sigv4") {
          signingRegion = second?.signingRegion ?? signingRegion;
          signingName = second?.signingName ?? signingName;
        }
      }
      const signedRequest = await signer.sign(httpRequest, {
        signingDate: getSkewCorrectedDate(config.systemClockOffset),
        signingRegion,
        signingService: signingName
      });
      return signedRequest;
    }
    errorHandler(signingProperties) {
      return (error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          const initialSystemClockOffset = config.systemClockOffset;
          config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
          const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
          if (clockSkewCorrected && error.$metadata) {
            error.$metadata.clockSkewCorrected = true;
          }
        }
        throw error;
      };
    }
    successHandler(httpResponse, signingProperties) {
      const dateHeader = getDateHeader(httpResponse);
      if (dateHeader) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
      }
    }
  }
  var AWSSDKSigV4Signer = AwsSdkSigV4Signer;

  class AwsSdkSigV4ASigner extends AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
      if (!protocolHttp.HttpRequest.isInstance(httpRequest)) {
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
      }
      const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
      const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
      const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
      const signedRequest = await signer.sign(httpRequest, {
        signingDate: getSkewCorrectedDate(config.systemClockOffset),
        signingRegion: multiRegionOverride,
        signingService: signingName
      });
      return signedRequest;
    }
  }
  var getArrayForCommaSeparatedString = (str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];
  var getBearerTokenEnvKey = (signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;
  var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
  var NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
  var NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
    environmentVariableSelector: (env, options) => {
      if (options?.signingName) {
        const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
        if (bearerTokenKey in env)
          return ["httpBearerAuth"];
      }
      if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env))
        return;
      return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
    },
    configFileSelector: (profile) => {
      if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
        return;
      return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
    },
    default: []
  };
  var resolveAwsSdkSigV4AConfig = (config) => {
    config.sigv4aSigningRegionSet = core.normalizeProvider(config.sigv4aSigningRegionSet);
    return config;
  };
  var NODE_SIGV4A_CONFIG_OPTIONS = {
    environmentVariableSelector(env) {
      if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
        return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
      }
      throw new propertyProvider.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
        tryNextLink: true
      });
    },
    configFileSelector(profile) {
      if (profile.sigv4a_signing_region_set) {
        return (profile.sigv4a_signing_region_set ?? "").split(",").map((_) => _.trim());
      }
      throw new propertyProvider.ProviderError("sigv4a_signing_region_set not set in profile.", {
        tryNextLink: true
      });
    },
    default: undefined
  };
  var resolveAwsSdkSigV4Config = (config) => {
    let inputCredentials = config.credentials;
    let isUserSupplied = !!config.credentials;
    let resolvedCredentials = undefined;
    Object.defineProperty(config, "credentials", {
      set(credentials) {
        if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
          isUserSupplied = true;
        }
        inputCredentials = credentials;
        const memoizedProvider = normalizeCredentialProvider(config, {
          credentials: inputCredentials,
          credentialDefaultProvider: config.credentialDefaultProvider
        });
        const boundProvider = bindCallerConfig(config, memoizedProvider);
        if (isUserSupplied && !boundProvider.attributed) {
          const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
          resolvedCredentials = async (options) => {
            const creds = await boundProvider(options);
            const attributedCreds = creds;
            if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
              return client.setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
            }
            return attributedCreds;
          };
          resolvedCredentials.memoized = boundProvider.memoized;
          resolvedCredentials.configBound = boundProvider.configBound;
          resolvedCredentials.attributed = true;
        } else {
          resolvedCredentials = boundProvider;
        }
      },
      get() {
        return resolvedCredentials;
      },
      enumerable: true,
      configurable: true
    });
    config.credentials = inputCredentials;
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
    let signer;
    if (config.signer) {
      signer = core.normalizeProvider(config.signer);
    } else if (config.regionInfoProvider) {
      signer = () => core.normalizeProvider(config.region)().then(async (region) => [
        await config.regionInfoProvider(region, {
          useFipsEndpoint: await config.useFipsEndpoint(),
          useDualstackEndpoint: await config.useDualstackEndpoint()
        }) || {},
        region
      ]).then(([regionInfo, region]) => {
        const { signingRegion, signingService } = regionInfo;
        config.signingRegion = config.signingRegion || signingRegion || region;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = {
          ...config,
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        };
        const SignerCtor = config.signerConstructor || signatureV4.SignatureV4;
        return new SignerCtor(params);
      });
    } else {
      signer = async (authScheme) => {
        authScheme = Object.assign({}, {
          name: "sigv4",
          signingName: config.signingName || config.defaultSigningName,
          signingRegion: await core.normalizeProvider(config.region)(),
          properties: {}
        }, authScheme);
        const signingRegion = authScheme.signingRegion;
        const signingService = authScheme.signingName;
        config.signingRegion = config.signingRegion || signingRegion;
        config.signingName = config.signingName || signingService || config.serviceId;
        const params = {
          ...config,
          credentials: config.credentials,
          region: config.signingRegion,
          service: config.signingName,
          sha256,
          uriEscapePath: signingEscapePath
        };
        const SignerCtor = config.signerConstructor || signatureV4.SignatureV4;
        return new SignerCtor(params);
      };
    }
    const resolvedConfig = Object.assign(config, {
      systemClockOffset,
      signingEscapePath,
      signer
    });
    return resolvedConfig;
  };
  var resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
  function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
    let credentialsProvider;
    if (credentials) {
      if (!credentials?.memoized) {
        credentialsProvider = core.memoizeIdentityProvider(credentials, core.isIdentityExpired, core.doesIdentityRequireRefresh);
      } else {
        credentialsProvider = credentials;
      }
    } else {
      if (credentialDefaultProvider) {
        credentialsProvider = core.normalizeProvider(credentialDefaultProvider(Object.assign({}, config, {
          parentClientConfig: config
        })));
      } else {
        credentialsProvider = async () => {
          throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
        };
      }
    }
    credentialsProvider.memoized = true;
    return credentialsProvider;
  }
  function bindCallerConfig(config, credentialsProvider) {
    if (credentialsProvider.configBound) {
      return credentialsProvider;
    }
    const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
    fn.memoized = credentialsProvider.memoized;
    fn.configBound = true;
    return fn;
  }
  exports.AWSSDKSigV4Signer = AWSSDKSigV4Signer;
  exports.AwsSdkSigV4ASigner = AwsSdkSigV4ASigner;
  exports.AwsSdkSigV4Signer = AwsSdkSigV4Signer;
  exports.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
  exports.NODE_SIGV4A_CONFIG_OPTIONS = NODE_SIGV4A_CONFIG_OPTIONS;
  exports.getBearerTokenEnvKey = getBearerTokenEnvKey;
  exports.resolveAWSSDKSigV4Config = resolveAWSSDKSigV4Config;
  exports.resolveAwsSdkSigV4AConfig = resolveAwsSdkSigV4AConfig;
  exports.resolveAwsSdkSigV4Config = resolveAwsSdkSigV4Config;
  exports.validateSigningProperties = validateSigningProperties;
});

export { require_dist_cjs9 as require_dist_cjs, require_dist_cjs10 as require_dist_cjs1, require_httpAuthSchemes };
