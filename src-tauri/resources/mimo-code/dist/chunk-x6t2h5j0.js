// @bun
import {
  require_protocols
} from "./chunk-86apn0aq.js";
import {
  require_dist_cjs1 as require_dist_cjs6
} from "./chunk-kggjyy2e.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-9r117f3a.js";
import {
  require_dist_cjs as require_dist_cjs4,
  require_dist_cjs1 as require_dist_cjs5
} from "./chunk-57y89twd.js";
import {
  require_schema
} from "./chunk-6qkspz0q.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-7vfjvamn.js";
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs
} from "./chunk-gd1ye7ef.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+middleware-sdk-s3@3.972.34/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/toStream.js
var require_toStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toStream = toStream;
  var node_stream_1 = __require("stream");
  function toStream(bytes) {
    return node_stream_1.Readable.from(Buffer.from(bytes));
  }
});

// node_modules/.bun/@aws-sdk+util-arn-parser@3.972.3/node_modules/@aws-sdk/util-arn-parser/dist-cjs/index.js
var require_dist_cjs7 = __commonJS((exports) => {
  var validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;
  var parse = (arn) => {
    const segments = arn.split(":");
    if (segments.length < 6 || segments[0] !== "arn")
      throw new Error("Malformed ARN");
    const [, partition, service, region, accountId, ...resource] = segments;
    return {
      partition,
      service,
      region,
      accountId,
      resource: resource.join(":")
    };
  };
  var build = (arnObject) => {
    const { partition = "aws", service, region, accountId, resource } = arnObject;
    if ([service, region, accountId, resource].some((segment) => typeof segment !== "string")) {
      throw new Error("Input ARN object is invalid");
    }
    return `arn:${partition}:${service}:${region}:${accountId}:${resource}`;
  };
  exports.build = build;
  exports.parse = parse;
  exports.validate = validate;
});

// node_modules/.bun/@aws-sdk+middleware-sdk-s3@3.972.34/node_modules/@aws-sdk/middleware-sdk-s3/dist-cjs/index.js
var require_dist_cjs8 = __commonJS((exports) => {
  var protocolHttp = require_dist_cjs();
  var smithyClient = require_dist_cjs3();
  var toStream = require_toStream();
  var utilArnParser = require_dist_cjs7();
  var protocols = require_protocols();
  var schema = require_schema();
  var signatureV4 = require_dist_cjs5();
  var utilConfigProvider = require_dist_cjs6();
  var client = require_client();
  var core = require_dist_cjs4();
  var utilMiddleware = require_dist_cjs2();
  var CONTENT_LENGTH_HEADER = "content-length";
  var DECODED_CONTENT_LENGTH_HEADER = "x-amz-decoded-content-length";
  function checkContentLengthHeader() {
    return (next, context) => async (args) => {
      const { request } = args;
      if (protocolHttp.HttpRequest.isInstance(request)) {
        if (!(CONTENT_LENGTH_HEADER in request.headers) && !(DECODED_CONTENT_LENGTH_HEADER in request.headers)) {
          const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
          if (typeof context?.logger?.warn === "function" && !(context.logger instanceof smithyClient.NoOpLogger)) {
            context.logger.warn(message);
          } else {
            console.warn(message);
          }
        }
      }
      return next({ ...args });
    };
  }
  var checkContentLengthHeaderMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["CHECK_CONTENT_LENGTH_HEADER"],
    name: "getCheckContentLengthHeaderPlugin",
    override: true
  };
  var getCheckContentLengthHeaderPlugin = (unused) => ({
    applyToStack: (clientStack) => {
      clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
    }
  });
  var regionRedirectEndpointMiddleware = (config) => {
    return (next, context) => async (args) => {
      const originalRegion = await config.region();
      const regionProviderRef = config.region;
      let unlock = () => {};
      if (context.__s3RegionRedirect) {
        Object.defineProperty(config, "region", {
          writable: false,
          value: async () => {
            return context.__s3RegionRedirect;
          }
        });
        unlock = () => Object.defineProperty(config, "region", {
          writable: true,
          value: regionProviderRef
        });
      }
      try {
        const result = await next(args);
        if (context.__s3RegionRedirect) {
          unlock();
          const region = await config.region();
          if (originalRegion !== region) {
            throw new Error("Region was not restored following S3 region redirect.");
          }
        }
        return result;
      } catch (e) {
        unlock();
        throw e;
      }
    };
  };
  var regionRedirectEndpointMiddlewareOptions = {
    tags: ["REGION_REDIRECT", "S3"],
    name: "regionRedirectEndpointMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };
  function regionRedirectMiddleware(clientConfig) {
    return (next, context) => async (args) => {
      try {
        return await next(args);
      } catch (err) {
        if (clientConfig.followRegionRedirects) {
          const statusCode = err?.$metadata?.httpStatusCode;
          const isHeadBucket = context.commandName === "HeadBucketCommand";
          const bucketRegionHeader = err?.$response?.headers?.["x-amz-bucket-region"];
          if (bucketRegionHeader) {
            if (statusCode === 301 || statusCode === 400 && (err?.name === "IllegalLocationConstraintException" || isHeadBucket)) {
              try {
                const actualRegion = bucketRegionHeader;
                context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
                context.__s3RegionRedirect = actualRegion;
              } catch (e) {
                throw new Error("Region redirect failed: " + e);
              }
              return next(args);
            }
          }
        }
        throw err;
      }
    };
  }
  var regionRedirectMiddlewareOptions = {
    step: "initialize",
    tags: ["REGION_REDIRECT", "S3"],
    name: "regionRedirectMiddleware",
    override: true
  };
  var getRegionRedirectMiddlewarePlugin = (clientConfig) => ({
    applyToStack: (clientStack) => {
      clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
      clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
    }
  });
  var s3ExpiresMiddleware = (config) => {
    return (next, context) => async (args) => {
      const result = await next(args);
      const { response } = result;
      if (protocolHttp.HttpResponse.isInstance(response)) {
        if (response.headers.expires) {
          response.headers.expiresstring = response.headers.expires;
          try {
            smithyClient.parseRfc7231DateTime(response.headers.expires);
          } catch (e) {
            context.logger?.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e}`);
            delete response.headers.expires;
          }
        }
      }
      return result;
    };
  };
  var s3ExpiresMiddlewareOptions = {
    tags: ["S3"],
    name: "s3ExpiresMiddleware",
    override: true,
    relation: "after",
    toMiddleware: "deserializerMiddleware"
  };
  var getS3ExpiresMiddlewarePlugin = (clientConfig) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(s3ExpiresMiddleware(), s3ExpiresMiddlewareOptions);
    }
  });

  class S3ExpressIdentityCache {
    data;
    lastPurgeTime = Date.now();
    static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 30000;
    constructor(data = {}) {
      this.data = data;
    }
    get(key) {
      const entry = this.data[key];
      if (!entry) {
        return;
      }
      return entry;
    }
    set(key, entry) {
      this.data[key] = entry;
      return entry;
    }
    delete(key) {
      delete this.data[key];
    }
    async purgeExpired() {
      const now = Date.now();
      if (this.lastPurgeTime + S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
        return;
      }
      for (const key in this.data) {
        const entry = this.data[key];
        if (!entry.isRefreshing) {
          const credential = await entry.identity;
          if (credential.expiration) {
            if (credential.expiration.getTime() < now) {
              delete this.data[key];
            }
          }
        }
      }
    }
  }

  class S3ExpressIdentityCacheEntry {
    _identity;
    isRefreshing;
    accessed;
    constructor(_identity, isRefreshing = false, accessed = Date.now()) {
      this._identity = _identity;
      this.isRefreshing = isRefreshing;
      this.accessed = accessed;
    }
    get identity() {
      this.accessed = Date.now();
      return this._identity;
    }
  }

  class S3ExpressIdentityProviderImpl {
    createSessionFn;
    cache;
    static REFRESH_WINDOW_MS = 60000;
    constructor(createSessionFn, cache = new S3ExpressIdentityCache) {
      this.createSessionFn = createSessionFn;
      this.cache = cache;
    }
    async getS3ExpressIdentity(awsIdentity, identityProperties) {
      const key = identityProperties.Bucket;
      const { cache } = this;
      const entry = cache.get(key);
      if (entry) {
        return entry.identity.then((identity) => {
          const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
          if (isExpired) {
            return cache.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
          }
          const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
          if (isExpiringSoon && !entry.isRefreshing) {
            entry.isRefreshing = true;
            this.getIdentity(key).then((id) => {
              cache.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
            });
          }
          return identity;
        });
      }
      return cache.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
    }
    async getIdentity(key) {
      await this.cache.purgeExpired().catch((error) => {
        console.warn(`Error while clearing expired entries in S3ExpressIdentityCache: 
` + error);
      });
      const session = await this.createSessionFn(key);
      if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
        throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
      }
      const identity = {
        accessKeyId: session.Credentials.AccessKeyId,
        secretAccessKey: session.Credentials.SecretAccessKey,
        sessionToken: session.Credentials.SessionToken,
        expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : undefined
      };
      return identity;
    }
  }
  var S3_EXPRESS_BUCKET_TYPE = "Directory";
  var S3_EXPRESS_BACKEND = "S3Express";
  var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
  var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
  var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
  var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";
  var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";
  var NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, utilConfigProvider.SelectorType.CONFIG),
    default: false
  };

  class SignatureV4S3Express extends signatureV4.SignatureV4 {
    async signWithCredentials(requestToSign, credentials, options) {
      const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
      requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
      const privateAccess = this;
      setSingleOverride(privateAccess, credentialsWithoutSessionToken);
      return privateAccess.signRequest(requestToSign, options ?? {});
    }
    async presignWithCredentials(requestToSign, credentials, options) {
      const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
      delete requestToSign.headers[SESSION_TOKEN_HEADER];
      requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
      requestToSign.query = requestToSign.query ?? {};
      requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
      const privateAccess = this;
      setSingleOverride(privateAccess, credentialsWithoutSessionToken);
      return this.presign(requestToSign, options);
    }
  }
  function getCredentialsWithoutSessionToken(credentials) {
    const credentialsWithoutSessionToken = {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      expiration: credentials.expiration
    };
    return credentialsWithoutSessionToken;
  }
  function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
    const id = setTimeout(() => {
      throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10);
    const currentCredentialProvider = privateAccess.credentialProvider;
    const overrideCredentialsProviderOnce = () => {
      clearTimeout(id);
      privateAccess.credentialProvider = currentCredentialProvider;
      return Promise.resolve(credentialsWithoutSessionToken);
    };
    privateAccess.credentialProvider = overrideCredentialsProviderOnce;
  }
  var s3ExpressMiddleware = (options) => {
    return (next, context) => async (args) => {
      if (context.endpointV2) {
        const endpoint = context.endpointV2;
        const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
        const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
        if (isS3ExpressBucket) {
          client.setFeature(context, "S3_EXPRESS_BUCKET", "J");
          context.isS3ExpressBucket = true;
        }
        if (isS3ExpressAuth) {
          const requestBucket = args.input.Bucket;
          if (requestBucket) {
            const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
              Bucket: requestBucket
            });
            context.s3ExpressIdentity = s3ExpressIdentity;
            if (protocolHttp.HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
              args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
            }
          }
        }
      }
      return next(args);
    };
  };
  var s3ExpressMiddlewareOptions = {
    name: "s3ExpressMiddleware",
    step: "build",
    tags: ["S3", "S3_EXPRESS"],
    override: true
  };
  var getS3ExpressPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
    }
  });
  var signS3Express = async (s3ExpressIdentity, signingOptions, request, sigV4MultiRegionSigner) => {
    const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});
    if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
      throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
    }
    return signedRequest;
  };
  var defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
  };
  var defaultSuccessHandler = (httpResponse, signingProperties) => {};
  var s3ExpressHttpSigningMiddlewareOptions = core.httpSigningMiddlewareOptions;
  var s3ExpressHttpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!protocolHttp.HttpRequest.isInstance(args.request)) {
      return next(args);
    }
    const smithyContext = utilMiddleware.getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
    let request;
    if (context.s3ExpressIdentity) {
      request = await signS3Express(context.s3ExpressIdentity, signingProperties, args.request, await config.signer());
    } else {
      request = await signer.sign(args.request, identity, signingProperties);
    }
    const output = await next({
      ...args,
      request
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
  };
  var getS3ExpressHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(s3ExpressHttpSigningMiddleware(config), core.httpSigningMiddlewareOptions);
    }
  });
  var resolveS3Config = (input, { session }) => {
    const [s3ClientProvider, CreateSessionCommandCtor] = session;
    const { forcePathStyle, useAccelerateEndpoint, disableMultiregionAccessPoints, followRegionRedirects, s3ExpressIdentityProvider, bucketEndpoint, expectContinueHeader } = input;
    return Object.assign(input, {
      forcePathStyle: forcePathStyle ?? false,
      useAccelerateEndpoint: useAccelerateEndpoint ?? false,
      disableMultiregionAccessPoints: disableMultiregionAccessPoints ?? false,
      followRegionRedirects: followRegionRedirects ?? false,
      s3ExpressIdentityProvider: s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
        Bucket: key
      }))),
      bucketEndpoint: bucketEndpoint ?? false,
      expectContinueHeader: expectContinueHeader ?? 2097152
    });
  };
  var THROW_IF_EMPTY_BODY = {
    CopyObjectCommand: true,
    UploadPartCopyCommand: true,
    CompleteMultipartUploadCommand: true
  };
  var throw200ExceptionsMiddleware = (config) => (next, context) => async (args) => {
    const result = await next(args);
    const { response } = result;
    if (!protocolHttp.HttpResponse.isInstance(response)) {
      return result;
    }
    const { statusCode, body } = response;
    if (statusCode < 200 || statusCode >= 300) {
      return result;
    }
    const bodyBytes = await collectBody(body, config);
    response.body = toStream.toStream(bodyBytes);
    if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
      const err = new Error("S3 aborted request");
      err.$metadata = {
        httpStatusCode: 503
      };
      err.name = "InternalError";
      throw err;
    }
    const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
    if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
      response.statusCode = 503;
    }
    return result;
  };
  var collectBody = (streamBody = new Uint8Array, context) => {
    if (streamBody instanceof Uint8Array) {
      return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array);
  };
  var throw200ExceptionsMiddlewareOptions = {
    relation: "after",
    toMiddleware: "deserializerMiddleware",
    tags: ["THROW_200_EXCEPTIONS", "S3"],
    name: "throw200ExceptionsMiddleware",
    override: true
  };
  var getThrow200ExceptionsPlugin = (config) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
    }
  });
  function bucketEndpointMiddleware(options) {
    return (next, context) => async (args) => {
      if (options.bucketEndpoint) {
        const endpoint = context.endpointV2;
        if (endpoint) {
          const bucket = args.input.Bucket;
          if (typeof bucket === "string") {
            try {
              const bucketEndpointUrl = new URL(bucket);
              context.endpointV2 = {
                ...endpoint,
                url: bucketEndpointUrl
              };
            } catch (e) {
              const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
              if (context.logger?.constructor?.name === "NoOpLogger") {
                console.warn(warning);
              } else {
                context.logger?.warn?.(warning);
              }
              throw e;
            }
          }
        }
      }
      return next(args);
    };
  }
  var bucketEndpointMiddlewareOptions = {
    name: "bucketEndpointMiddleware",
    override: true,
    relation: "after",
    toMiddleware: "endpointV2Middleware"
  };
  function validateBucketNameMiddleware({ bucketEndpoint }) {
    return (next) => async (args) => {
      const { input: { Bucket } } = args;
      if (!bucketEndpoint && typeof Bucket === "string" && !utilArnParser.validate(Bucket) && Bucket.indexOf("/") >= 0) {
        const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
        err.name = "InvalidBucketName";
        throw err;
      }
      return next({ ...args });
    };
  }
  var validateBucketNameMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BUCKET_NAME"],
    name: "validateBucketNameMiddleware",
    override: true
  };
  var getValidateBucketNamePlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
      clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
    }
  });

  class S3RestXmlProtocol extends protocols.AwsRestXmlProtocol {
    async serializeRequest(operationSchema, input, context) {
      const request = await super.serializeRequest(operationSchema, input, context);
      const ns = schema.NormalizedSchema.of(operationSchema.input);
      const staticStructureSchema = ns.getSchema();
      let bucketMemberIndex = 0;
      const requiredMemberCount = staticStructureSchema[6] ?? 0;
      if (input && typeof input === "object") {
        for (const [memberName, memberNs] of ns.structIterator()) {
          if (++bucketMemberIndex > requiredMemberCount) {
            break;
          }
          if (memberName === "Bucket") {
            if (!input.Bucket && memberNs.getMergedTraits().httpLabel) {
              throw new Error(`No value provided for input HTTP label: Bucket.`);
            }
            break;
          }
        }
      }
      return request;
    }
  }
  exports.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS;
  exports.S3ExpressIdentityCache = S3ExpressIdentityCache;
  exports.S3ExpressIdentityCacheEntry = S3ExpressIdentityCacheEntry;
  exports.S3ExpressIdentityProviderImpl = S3ExpressIdentityProviderImpl;
  exports.S3RestXmlProtocol = S3RestXmlProtocol;
  exports.SignatureV4S3Express = SignatureV4S3Express;
  exports.checkContentLengthHeader = checkContentLengthHeader;
  exports.checkContentLengthHeaderMiddlewareOptions = checkContentLengthHeaderMiddlewareOptions;
  exports.getCheckContentLengthHeaderPlugin = getCheckContentLengthHeaderPlugin;
  exports.getRegionRedirectMiddlewarePlugin = getRegionRedirectMiddlewarePlugin;
  exports.getS3ExpiresMiddlewarePlugin = getS3ExpiresMiddlewarePlugin;
  exports.getS3ExpressHttpSigningPlugin = getS3ExpressHttpSigningPlugin;
  exports.getS3ExpressPlugin = getS3ExpressPlugin;
  exports.getThrow200ExceptionsPlugin = getThrow200ExceptionsPlugin;
  exports.getValidateBucketNamePlugin = getValidateBucketNamePlugin;
  exports.regionRedirectEndpointMiddleware = regionRedirectEndpointMiddleware;
  exports.regionRedirectEndpointMiddlewareOptions = regionRedirectEndpointMiddlewareOptions;
  exports.regionRedirectMiddleware = regionRedirectMiddleware;
  exports.regionRedirectMiddlewareOptions = regionRedirectMiddlewareOptions;
  exports.resolveS3Config = resolveS3Config;
  exports.s3ExpiresMiddleware = s3ExpiresMiddleware;
  exports.s3ExpiresMiddlewareOptions = s3ExpiresMiddlewareOptions;
  exports.s3ExpressHttpSigningMiddleware = s3ExpressHttpSigningMiddleware;
  exports.s3ExpressHttpSigningMiddlewareOptions = s3ExpressHttpSigningMiddlewareOptions;
  exports.s3ExpressMiddleware = s3ExpressMiddleware;
  exports.s3ExpressMiddlewareOptions = s3ExpressMiddlewareOptions;
  exports.throw200ExceptionsMiddleware = throw200ExceptionsMiddleware;
  exports.throw200ExceptionsMiddlewareOptions = throw200ExceptionsMiddlewareOptions;
  exports.validateBucketNameMiddleware = validateBucketNameMiddleware;
  exports.validateBucketNameMiddlewareOptions = validateBucketNameMiddlewareOptions;
});

// node_modules/.bun/@aws-sdk+signature-v4-multi-region@3.996.22/node_modules/@aws-sdk/signature-v4-multi-region/dist-cjs/index.js
var require_dist_cjs9 = __commonJS((exports) => {
  var middlewareSdkS3 = require_dist_cjs8();
  var signatureV4 = require_dist_cjs5();
  var signatureV4CrtContainer = {
    CrtSignerV4: null
  };

  class SignatureV4MultiRegion {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() {
      if (typeof signatureV4CrtContainer.CrtSignerV4 === "function") {
        return "crt";
      } else if (typeof signatureV4.signatureV4aContainer.SignatureV4a === "function") {
        return "js";
      }
      return "none";
    }
    constructor(options) {
      this.sigv4Signer = new middlewareSdkS3.SignatureV4S3Express(options);
      this.signerOptions = options;
    }
    async sign(requestToSign, options = {}) {
      if (options.signingRegion === "*") {
        return this.getSigv4aSigner().sign(requestToSign, options);
      }
      return this.sigv4Signer.sign(requestToSign, options);
    }
    async signWithCredentials(requestToSign, credentials, options = {}) {
      if (options.signingRegion === "*") {
        const signer = this.getSigv4aSigner();
        const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        if (CrtSignerV4 && signer instanceof CrtSignerV4) {
          return signer.signWithCredentials(requestToSign, credentials, options);
        } else {
          throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
        }
      }
      return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
    }
    async presign(originalRequest, options = {}) {
      if (options.signingRegion === "*") {
        const signer = this.getSigv4aSigner();
        const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        if (CrtSignerV4 && signer instanceof CrtSignerV4) {
          return signer.presign(originalRequest, options);
        } else {
          throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
        }
      }
      return this.sigv4Signer.presign(originalRequest, options);
    }
    async presignWithCredentials(originalRequest, credentials, options = {}) {
      if (options.signingRegion === "*") {
        throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
      }
      return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
    }
    getSigv4aSigner() {
      if (!this.sigv4aSigner) {
        const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        const JsSigV4aSigner = signatureV4.signatureV4aContainer.SignatureV4a;
        if (this.signerOptions.runtime === "node") {
          if (!CrtSignerV4 && !JsSigV4aSigner) {
            throw new Error("Neither CRT nor JS SigV4a implementation is available. " + "Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. " + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
          }
          if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
            this.sigv4aSigner = new CrtSignerV4({
              ...this.signerOptions,
              signingAlgorithm: 1
            });
          } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
            this.sigv4aSigner = new JsSigV4aSigner({
              ...this.signerOptions
            });
          } else {
            throw new Error("Available SigV4a implementation is not a valid constructor. " + "Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a." + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
          }
        } else {
          if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
            throw new Error("JS SigV4a implementation is not available or not a valid constructor. " + "Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. " + "You must also register the package by calling [require('@aws-sdk/signature-v4a');] " + "or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. " + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
          }
          this.sigv4aSigner = new JsSigV4aSigner({
            ...this.signerOptions
          });
        }
      }
      return this.sigv4aSigner;
    }
  }
  exports.SignatureV4MultiRegion = SignatureV4MultiRegion;
  exports.signatureV4CrtContainer = signatureV4CrtContainer;
});

export { require_dist_cjs9 as require_dist_cjs };
