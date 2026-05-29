// @bun
import {
  require_package
} from "./chunk-ezfdrg0q.js";
import {
  require_dist_cjs as require_dist_cjs11,
  require_dist_cjs1 as require_dist_cjs12,
  require_dist_cjs10 as require_dist_cjs23,
  require_dist_cjs11 as require_dist_cjs24,
  require_dist_cjs12 as require_dist_cjs25,
  require_dist_cjs2 as require_dist_cjs13,
  require_dist_cjs3 as require_dist_cjs15,
  require_dist_cjs4 as require_dist_cjs16,
  require_dist_cjs5 as require_dist_cjs18,
  require_dist_cjs6 as require_dist_cjs19,
  require_dist_cjs7 as require_dist_cjs20,
  require_dist_cjs8 as require_dist_cjs21,
  require_dist_cjs9 as require_dist_cjs22,
  require_protocols
} from "./chunk-86apn0aq.js";
import {
  require_dist_cjs as require_dist_cjs14,
  require_dist_cjs2 as require_dist_cjs17
} from "./chunk-kggjyy2e.js";
import {
  require_dist_cjs as require_dist_cjs9
} from "./chunk-9r117f3a.js";
import {
  require_dist_cjs as require_dist_cjs10,
  require_httpAuthSchemes
} from "./chunk-57y89twd.js";
import {
  require_dist_cjs as require_dist_cjs5,
  require_schema
} from "./chunk-6qkspz0q.js";
import {
  require_dist_cjs as require_dist_cjs6,
  require_dist_cjs2 as require_dist_cjs8,
  require_tslib
} from "./chunk-7vfjvamn.js";
import {
  require_client,
  require_dist_cjs1 as require_dist_cjs2
} from "./chunk-cahmkqhh.js";
import"./chunk-m53ks0yf.js";
import {
  require_dist_cjs
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-87zgmycv.js";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-4ch5vxv6.js";
import"./chunk-6vqkv5g7.js";
import"./chunk-27an25fd.js";
import"./chunk-tp6bgx9r.js";
import {
  require_dist_cjs2 as require_dist_cjs7
} from "./chunk-2nayx6q1.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveHttpAuthSchemeConfig = exports.defaultSSOOIDCHttpAuthSchemeProvider = exports.defaultSSOOIDCHttpAuthSchemeParametersProvider = undefined;
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var util_middleware_1 = require_dist_cjs6();
  var defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: (0, util_middleware_1.getSmithyContext)(context).operation,
      region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  exports.defaultSSOOIDCHttpAuthSchemeParametersProvider = defaultSSOOIDCHttpAuthSchemeParametersProvider;
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sso-oauth",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      case "CreateToken": {
        options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
        break;
      }
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      }
    }
    return options;
  };
  exports.defaultSSOOIDCHttpAuthSchemeProvider = defaultSSOOIDCHttpAuthSchemeProvider;
  var resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4Config)(config);
    return Object.assign(config_0, {
      authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
    });
  };
  exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/endpoint/bdd.js
var require_bdd = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bdd = undefined;
  var util_endpoints_1 = require_dist_cjs14();
  var k = "ref";
  var a = -1;
  var b = true;
  var c = "isSet";
  var d = "PartitionResult";
  var e = "booleanEquals";
  var f = "getAttr";
  var g = { [k]: "Endpoint" };
  var h = { [k]: d };
  var i = {};
  var j = [{ [k]: "Region" }];
  var _data = {
    conditions: [
      [c, [g]],
      [c, j],
      ["aws.partition", j, d],
      [e, [{ [k]: "UseFIPS" }, b]],
      [e, [{ [k]: "UseDualStack" }, b]],
      [e, [{ fn: f, argv: [h, "supportsDualStack"] }, b]],
      [e, [{ fn: f, argv: [h, "supportsFIPS"] }, b]],
      ["stringEquals", [{ fn: f, argv: [h, "name"] }, "aws-us-gov"]]
    ],
    results: [
      [a],
      [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [g, i],
      ["https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
      [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://oidc.{Region}.amazonaws.com", i],
      ["https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", i],
      [a, "FIPS is enabled but this partition does not support FIPS"],
      ["https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
      [a, "DualStack is enabled but this partition does not support DualStack"],
      ["https://oidc.{Region}.{PartitionResult#dnsSuffix}", i],
      [a, "Invalid Configuration: Missing Region"]
    ]
  };
  var root = 2;
  var r = 1e8;
  var nodes = new Int32Array([
    -1,
    1,
    -1,
    0,
    13,
    3,
    1,
    4,
    r + 12,
    2,
    5,
    r + 12,
    3,
    8,
    6,
    4,
    7,
    r + 11,
    5,
    r + 9,
    r + 10,
    4,
    11,
    9,
    6,
    10,
    r + 8,
    7,
    r + 6,
    r + 7,
    5,
    12,
    r + 5,
    6,
    r + 4,
    r + 5,
    3,
    r + 1,
    14,
    4,
    r + 2,
    r + 3
  ]);
  exports.bdd = util_endpoints_1.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defaultEndpointResolver = undefined;
  var util_endpoints_1 = require_dist_cjs15();
  var util_endpoints_2 = require_dist_cjs14();
  var bdd_1 = require_bdd();
  var cache = new util_endpoints_2.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  });
  var defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => (0, util_endpoints_2.decideEndpoint)(bdd_1.bdd, {
      endpointParams,
      logger: context.logger
    }));
  };
  exports.defaultEndpointResolver = defaultEndpointResolver;
  util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/models/SSOOIDCServiceException.js
var require_SSOOIDCServiceException = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SSOOIDCServiceException = exports.__ServiceException = undefined;
  var smithy_client_1 = require_dist_cjs9();
  Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
    return smithy_client_1.ServiceException;
  } });

  class SSOOIDCServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
  }
  exports.SSOOIDCServiceException = SSOOIDCServiceException;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/models/errors.js
var require_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.UnsupportedGrantTypeException = exports.UnauthorizedClientException = exports.SlowDownException = exports.InvalidScopeException = exports.InvalidRequestException = exports.InvalidGrantException = exports.InvalidClientException = exports.InternalServerException = exports.ExpiredTokenException = exports.AuthorizationPendingException = exports.AccessDeniedException = undefined;
  var SSOOIDCServiceException_1 = require_SSOOIDCServiceException();

  class AccessDeniedException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(opts) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, AccessDeniedException.prototype);
      this.error = opts.error;
      this.reason = opts.reason;
      this.error_description = opts.error_description;
    }
  }
  exports.AccessDeniedException = AccessDeniedException;

  class AuthorizationPendingException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "AuthorizationPendingException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "AuthorizationPendingException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.AuthorizationPendingException = AuthorizationPendingException;

  class ExpiredTokenException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ExpiredTokenException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.ExpiredTokenException = ExpiredTokenException;

  class InternalServerException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, InternalServerException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.InternalServerException = InternalServerException;

  class InvalidClientException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "InvalidClientException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "InvalidClientException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidClientException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.InvalidClientException = InvalidClientException;

  class InvalidGrantException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "InvalidGrantException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "InvalidGrantException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidGrantException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.InvalidGrantException = InvalidGrantException;

  class InvalidRequestException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(opts) {
      super({
        name: "InvalidRequestException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidRequestException.prototype);
      this.error = opts.error;
      this.reason = opts.reason;
      this.error_description = opts.error_description;
    }
  }
  exports.InvalidRequestException = InvalidRequestException;

  class InvalidScopeException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "InvalidScopeException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "InvalidScopeException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidScopeException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.InvalidScopeException = InvalidScopeException;

  class SlowDownException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "SlowDownException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "SlowDownException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, SlowDownException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.SlowDownException = SlowDownException;

  class UnauthorizedClientException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "UnauthorizedClientException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "UnauthorizedClientException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.UnauthorizedClientException = UnauthorizedClientException;

  class UnsupportedGrantTypeException extends SSOOIDCServiceException_1.SSOOIDCServiceException {
    name = "UnsupportedGrantTypeException";
    $fault = "client";
    error;
    error_description;
    constructor(opts) {
      super({
        name: "UnsupportedGrantTypeException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
      this.error = opts.error;
      this.error_description = opts.error_description;
    }
  }
  exports.UnsupportedGrantTypeException = UnsupportedGrantTypeException;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/schemas/schemas_0.js
var require_schemas_0 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CreateToken$ = exports.CreateTokenResponse$ = exports.CreateTokenRequest$ = exports.errorTypeRegistries = exports.UnsupportedGrantTypeException$ = exports.UnauthorizedClientException$ = exports.SlowDownException$ = exports.InvalidScopeException$ = exports.InvalidRequestException$ = exports.InvalidGrantException$ = exports.InvalidClientException$ = exports.InternalServerException$ = exports.ExpiredTokenException$ = exports.AuthorizationPendingException$ = exports.AccessDeniedException$ = exports.SSOOIDCServiceException$ = undefined;
  var _ADE = "AccessDeniedException";
  var _APE = "AuthorizationPendingException";
  var _AT = "AccessToken";
  var _CS = "ClientSecret";
  var _CT = "CreateToken";
  var _CTR = "CreateTokenRequest";
  var _CTRr = "CreateTokenResponse";
  var _CV = "CodeVerifier";
  var _ETE = "ExpiredTokenException";
  var _ICE = "InvalidClientException";
  var _IGE = "InvalidGrantException";
  var _IRE = "InvalidRequestException";
  var _ISE = "InternalServerException";
  var _ISEn = "InvalidScopeException";
  var _IT = "IdToken";
  var _RT = "RefreshToken";
  var _SDE = "SlowDownException";
  var _UCE = "UnauthorizedClientException";
  var _UGTE = "UnsupportedGrantTypeException";
  var _aT = "accessToken";
  var _c = "client";
  var _cI = "clientId";
  var _cS = "clientSecret";
  var _cV = "codeVerifier";
  var _co = "code";
  var _dC = "deviceCode";
  var _e = "error";
  var _eI = "expiresIn";
  var _ed = "error_description";
  var _gT = "grantType";
  var _h = "http";
  var _hE = "httpError";
  var _iT = "idToken";
  var _r = "reason";
  var _rT = "refreshToken";
  var _rU = "redirectUri";
  var _s = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc";
  var _sc = "scope";
  var _se = "server";
  var _tT = "tokenType";
  var n0 = "com.amazonaws.ssooidc";
  var schema_1 = require_schema();
  var errors_1 = require_errors();
  var SSOOIDCServiceException_1 = require_SSOOIDCServiceException();
  var _s_registry = schema_1.TypeRegistry.for(_s);
  exports.SSOOIDCServiceException$ = [-3, _s, "SSOOIDCServiceException", 0, [], []];
  _s_registry.registerError(exports.SSOOIDCServiceException$, SSOOIDCServiceException_1.SSOOIDCServiceException);
  var n0_registry = schema_1.TypeRegistry.for(n0);
  exports.AccessDeniedException$ = [
    -3,
    n0,
    _ADE,
    { [_e]: _c, [_hE]: 400 },
    [_e, _r, _ed],
    [0, 0, 0]
  ];
  n0_registry.registerError(exports.AccessDeniedException$, errors_1.AccessDeniedException);
  exports.AuthorizationPendingException$ = [
    -3,
    n0,
    _APE,
    { [_e]: _c, [_hE]: 400 },
    [_e, _ed],
    [0, 0]
  ];
  n0_registry.registerError(exports.AuthorizationPendingException$, errors_1.AuthorizationPendingException);
  exports.ExpiredTokenException$ = [-3, n0, _ETE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
  n0_registry.registerError(exports.ExpiredTokenException$, errors_1.ExpiredTokenException);
  exports.InternalServerException$ = [-3, n0, _ISE, { [_e]: _se, [_hE]: 500 }, [_e, _ed], [0, 0]];
  n0_registry.registerError(exports.InternalServerException$, errors_1.InternalServerException);
  exports.InvalidClientException$ = [-3, n0, _ICE, { [_e]: _c, [_hE]: 401 }, [_e, _ed], [0, 0]];
  n0_registry.registerError(exports.InvalidClientException$, errors_1.InvalidClientException);
  exports.InvalidGrantException$ = [-3, n0, _IGE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
  n0_registry.registerError(exports.InvalidGrantException$, errors_1.InvalidGrantException);
  exports.InvalidRequestException$ = [
    -3,
    n0,
    _IRE,
    { [_e]: _c, [_hE]: 400 },
    [_e, _r, _ed],
    [0, 0, 0]
  ];
  n0_registry.registerError(exports.InvalidRequestException$, errors_1.InvalidRequestException);
  exports.InvalidScopeException$ = [-3, n0, _ISEn, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
  n0_registry.registerError(exports.InvalidScopeException$, errors_1.InvalidScopeException);
  exports.SlowDownException$ = [-3, n0, _SDE, { [_e]: _c, [_hE]: 400 }, [_e, _ed], [0, 0]];
  n0_registry.registerError(exports.SlowDownException$, errors_1.SlowDownException);
  exports.UnauthorizedClientException$ = [
    -3,
    n0,
    _UCE,
    { [_e]: _c, [_hE]: 400 },
    [_e, _ed],
    [0, 0]
  ];
  n0_registry.registerError(exports.UnauthorizedClientException$, errors_1.UnauthorizedClientException);
  exports.UnsupportedGrantTypeException$ = [
    -3,
    n0,
    _UGTE,
    { [_e]: _c, [_hE]: 400 },
    [_e, _ed],
    [0, 0]
  ];
  n0_registry.registerError(exports.UnsupportedGrantTypeException$, errors_1.UnsupportedGrantTypeException);
  exports.errorTypeRegistries = [_s_registry, n0_registry];
  var AccessToken = [0, n0, _AT, 8, 0];
  var ClientSecret = [0, n0, _CS, 8, 0];
  var CodeVerifier = [0, n0, _CV, 8, 0];
  var IdToken = [0, n0, _IT, 8, 0];
  var RefreshToken = [0, n0, _RT, 8, 0];
  exports.CreateTokenRequest$ = [
    3,
    n0,
    _CTR,
    0,
    [_cI, _cS, _gT, _dC, _co, _rT, _sc, _rU, _cV],
    [0, [() => ClientSecret, 0], 0, 0, 0, [() => RefreshToken, 0], 64 | 0, 0, [() => CodeVerifier, 0]],
    3
  ];
  exports.CreateTokenResponse$ = [
    3,
    n0,
    _CTRr,
    0,
    [_aT, _tT, _eI, _rT, _iT],
    [[() => AccessToken, 0], 0, 1, [() => RefreshToken, 0], [() => IdToken, 0]]
  ];
  var Scopes = 64 | 0;
  exports.CreateToken$ = [
    9,
    n0,
    _CT,
    { [_h]: ["POST", "/token", 200] },
    () => exports.CreateTokenRequest$,
    () => exports.CreateTokenResponse$
  ];
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getRuntimeConfig = undefined;
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var protocols_1 = require_protocols();
  var core_1 = require_dist_cjs10();
  var smithy_client_1 = require_dist_cjs9();
  var url_parser_1 = require_dist_cjs4();
  var util_base64_1 = require_dist_cjs8();
  var util_utf8_1 = require_dist_cjs7();
  var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
  var endpointResolver_1 = require_endpointResolver();
  var schemas_0_1 = require_schemas_0();
  var getRuntimeConfig = (config) => {
    return {
      apiVersion: "2019-06-10",
      base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
      base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSSOOIDCHttpAuthSchemeProvider,
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new httpAuthSchemes_1.AwsSdkSigV4Signer
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new core_1.NoAuthSigner
        }
      ],
      logger: config?.logger ?? new smithy_client_1.NoOpLogger,
      protocol: config?.protocol ?? protocols_1.AwsRestJsonProtocol,
      protocolSettings: config?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.ssooidc",
        errorTypeRegistries: schemas_0_1.errorTypeRegistries,
        version: "2019-06-10",
        serviceTarget: "AWSSSOOIDCService"
      },
      serviceId: config?.serviceId ?? "SSO OIDC",
      urlParser: config?.urlParser ?? url_parser_1.parseUrl,
      utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
    };
  };
  exports.getRuntimeConfig = getRuntimeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/runtimeConfig.js
var require_runtimeConfig = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getRuntimeConfig = undefined;
  var tslib_1 = require_tslib();
  var package_json_1 = tslib_1.__importDefault(require_package());
  var client_1 = require_client();
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var util_user_agent_node_1 = require_dist_cjs21();
  var config_resolver_1 = require_dist_cjs17();
  var hash_node_1 = require_dist_cjs22();
  var middleware_retry_1 = require_dist_cjs20();
  var node_config_provider_1 = require_dist_cjs3();
  var node_http_handler_1 = require_dist_cjs5();
  var smithy_client_1 = require_dist_cjs9();
  var util_body_length_node_1 = require_dist_cjs23();
  var util_defaults_mode_node_1 = require_dist_cjs24();
  var util_retry_1 = require_dist_cjs2();
  var runtimeConfig_shared_1 = require_runtimeConfig_shared();
  var getRuntimeConfig = (config) => {
    (0, smithy_client_1.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    (0, client_1.emitWarningIfUnsupportedVersion)(process.version);
    const loaderConfig = {
      profile: config?.profile,
      logger: clientSharedValues.logger
    };
    return {
      ...clientSharedValues,
      ...config,
      runtime: "node",
      defaultsMode,
      authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(httpAuthSchemes_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
      bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
      defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
      maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
      region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
      requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
      retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
        ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
      }, config),
      sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
      streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
      useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
      useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
      userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
    };
  };
  exports.getRuntimeConfig = getRuntimeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sso-oidc/index.js
var require_sso_oidc = __commonJS((exports) => {
  var middlewareHostHeader = require_dist_cjs11();
  var middlewareLogger = require_dist_cjs12();
  var middlewareRecursionDetection = require_dist_cjs13();
  var middlewareUserAgent = require_dist_cjs16();
  var configResolver = require_dist_cjs17();
  var core = require_dist_cjs10();
  var schema = require_schema();
  var middlewareContentLength = require_dist_cjs18();
  var middlewareEndpoint = require_dist_cjs19();
  var middlewareRetry = require_dist_cjs20();
  var smithyClient = require_dist_cjs9();
  var httpAuthSchemeProvider = require_httpAuthSchemeProvider();
  var runtimeConfig = require_runtimeConfig();
  var regionConfigResolver = require_dist_cjs25();
  var protocolHttp = require_dist_cjs();
  var schemas_0 = require_schemas_0();
  var errors = require_errors();
  var SSOOIDCServiceException = require_SSOOIDCServiceException();
  var resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      defaultSigningName: "sso-oauth"
    });
  };
  var commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };
  var getHttpAuthExtensionConfiguration = (runtimeConfig2) => {
    const _httpAuthSchemes = runtimeConfig2.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig2.httpAuthSchemeProvider;
    let _credentials = runtimeConfig2.credentials;
    return {
      setHttpAuthScheme(httpAuthScheme) {
        const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
        if (index === -1) {
          _httpAuthSchemes.push(httpAuthScheme);
        } else {
          _httpAuthSchemes.splice(index, 1, httpAuthScheme);
        }
      },
      httpAuthSchemes() {
        return _httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(httpAuthSchemeProvider2) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider2;
      },
      httpAuthSchemeProvider() {
        return _httpAuthSchemeProvider;
      },
      setCredentials(credentials) {
        _credentials = credentials;
      },
      credentials() {
        return _credentials;
      }
    };
  };
  var resolveHttpAuthRuntimeConfig = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };
  var resolveRuntimeExtensions = (runtimeConfig2, extensions) => {
    const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig2), smithyClient.getDefaultExtensionConfiguration(runtimeConfig2), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig2), getHttpAuthExtensionConfiguration(runtimeConfig2));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig2, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
  };

  class SSOOIDCClient extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
      const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
      super(_config_0);
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters(_config_0);
      const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
      const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
      const _config_4 = configResolver.resolveRegionConfig(_config_3);
      const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
      const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
      const _config_7 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_6);
      const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
      this.config = _config_8;
      this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
      this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
      this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
      this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
      this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
      this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
      this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultSSOOIDCHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        })
      }));
      this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }

  class CreateTokenCommand extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(schemas_0.CreateToken$).build() {
  }
  var commands = {
    CreateTokenCommand
  };

  class SSOOIDC extends SSOOIDCClient {
  }
  smithyClient.createAggregatedClient(commands, SSOOIDC);
  var AccessDeniedExceptionReason = {
    KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
  };
  var InvalidRequestExceptionReason = {
    KMS_DISABLED_KEY: "KMS_DisabledException",
    KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
    KMS_INVALID_STATE: "KMS_InvalidStateException",
    KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
  };
  exports.$Command = smithyClient.Command;
  exports.__Client = smithyClient.Client;
  exports.SSOOIDCServiceException = SSOOIDCServiceException.SSOOIDCServiceException;
  exports.AccessDeniedExceptionReason = AccessDeniedExceptionReason;
  exports.CreateTokenCommand = CreateTokenCommand;
  exports.InvalidRequestExceptionReason = InvalidRequestExceptionReason;
  exports.SSOOIDC = SSOOIDC;
  exports.SSOOIDCClient = SSOOIDCClient;
  Object.prototype.hasOwnProperty.call(schemas_0, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: schemas_0["__proto__"]
  });
  Object.keys(schemas_0).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = schemas_0[k];
  });
  Object.prototype.hasOwnProperty.call(errors, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: errors["__proto__"]
  });
  Object.keys(errors).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = errors[k];
  });
});
export default require_sso_oidc();
