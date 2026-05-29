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
  __commonJS,
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveHttpAuthSchemeConfig = exports.defaultCognitoIdentityHttpAuthSchemeProvider = exports.defaultCognitoIdentityHttpAuthSchemeParametersProvider = undefined;
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var util_middleware_1 = require_dist_cjs6();
  var defaultCognitoIdentityHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: (0, util_middleware_1.getSmithyContext)(context).operation,
      region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  exports.defaultCognitoIdentityHttpAuthSchemeParametersProvider = defaultCognitoIdentityHttpAuthSchemeParametersProvider;
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "cognito-identity",
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
  var defaultCognitoIdentityHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      case "GetCredentialsForIdentity": {
        options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
        break;
      }
      case "GetId": {
        options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
        break;
      }
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      }
    }
    return options;
  };
  exports.defaultCognitoIdentityHttpAuthSchemeProvider = defaultCognitoIdentityHttpAuthSchemeProvider;
  var resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4Config)(config);
    return Object.assign(config_0, {
      authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
    });
  };
  exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/endpoint/bdd.js
var require_bdd = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bdd = undefined;
  var util_endpoints_1 = require_dist_cjs14();
  var m = "ref";
  var a = -1;
  var b = true;
  var c = "isSet";
  var d = "PartitionResult";
  var e = "booleanEquals";
  var f = "getAttr";
  var g = "stringEquals";
  var h = { [m]: "Endpoint" };
  var i = { [m]: d };
  var j = { [m]: "Region" };
  var k = {};
  var l = [j];
  var _data = {
    conditions: [
      [c, [h]],
      [c, l],
      ["aws.partition", l, d],
      [e, [{ [m]: "UseFIPS" }, b]],
      [e, [{ fn: f, argv: [i, "supportsFIPS"] }, b]],
      [e, [{ [m]: "UseDualStack" }, b]],
      [e, [{ fn: f, argv: [i, "supportsDualStack"] }, b]],
      [g, [{ fn: f, argv: [i, "name"] }, "aws"]],
      [g, [j, "us-east-1"]],
      [g, [j, "us-east-2"]],
      [g, [j, "us-west-1"]],
      [g, [j, "us-west-2"]]
    ],
    results: [
      [a],
      [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [h, k],
      ["https://cognito-identity-fips.us-east-1.amazonaws.com", k],
      ["https://cognito-identity-fips.us-east-2.amazonaws.com", k],
      ["https://cognito-identity-fips.us-west-1.amazonaws.com", k],
      ["https://cognito-identity-fips.us-west-2.amazonaws.com", k],
      ["https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", k],
      [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", k],
      [a, "FIPS is enabled but this partition does not support FIPS"],
      ["https://cognito-identity.{Region}.amazonaws.com", k],
      ["https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", k],
      [a, "DualStack is enabled but this partition does not support DualStack"],
      ["https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", k],
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
    17,
    3,
    1,
    4,
    r + 16,
    2,
    5,
    r + 16,
    3,
    9,
    6,
    5,
    7,
    r + 15,
    6,
    8,
    r + 14,
    7,
    r + 12,
    r + 13,
    4,
    11,
    10,
    5,
    r + 9,
    r + 11,
    5,
    12,
    r + 10,
    6,
    13,
    r + 9,
    8,
    r + 4,
    14,
    9,
    r + 5,
    15,
    10,
    r + 6,
    16,
    11,
    r + 7,
    r + 8,
    3,
    r + 1,
    18,
    5,
    r + 2,
    r + 3
  ]);
  exports.bdd = util_endpoints_1.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/endpoint/endpointResolver.js
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

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/models/CognitoIdentityServiceException.js
var require_CognitoIdentityServiceException = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CognitoIdentityServiceException = exports.__ServiceException = undefined;
  var smithy_client_1 = require_dist_cjs9();
  Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
    return smithy_client_1.ServiceException;
  } });

  class CognitoIdentityServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, CognitoIdentityServiceException.prototype);
    }
  }
  exports.CognitoIdentityServiceException = CognitoIdentityServiceException;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/models/errors.js
var require_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LimitExceededException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.ResourceConflictException = exports.NotAuthorizedException = exports.InvalidParameterException = exports.InvalidIdentityPoolConfigurationException = exports.InternalErrorException = exports.ExternalServiceException = undefined;
  var CognitoIdentityServiceException_1 = require_CognitoIdentityServiceException();

  class ExternalServiceException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "ExternalServiceException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ExternalServiceException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ExternalServiceException.prototype);
    }
  }
  exports.ExternalServiceException = ExternalServiceException;

  class InternalErrorException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "InternalErrorException";
    $fault = "server";
    constructor(opts) {
      super({
        name: "InternalErrorException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
  }
  exports.InternalErrorException = InternalErrorException;

  class InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "InvalidIdentityPoolConfigurationException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidIdentityPoolConfigurationException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
    }
  }
  exports.InvalidIdentityPoolConfigurationException = InvalidIdentityPoolConfigurationException;

  class InvalidParameterException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidParameterException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
  }
  exports.InvalidParameterException = InvalidParameterException;

  class NotAuthorizedException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "NotAuthorizedException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "NotAuthorizedException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }
  }
  exports.NotAuthorizedException = NotAuthorizedException;

  class ResourceConflictException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "ResourceConflictException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ResourceConflictException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ResourceConflictException.prototype);
    }
  }
  exports.ResourceConflictException = ResourceConflictException;

  class ResourceNotFoundException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
  }
  exports.ResourceNotFoundException = ResourceNotFoundException;

  class TooManyRequestsException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "TooManyRequestsException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
  }
  exports.TooManyRequestsException = TooManyRequestsException;

  class LimitExceededException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "LimitExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
  }
  exports.LimitExceededException = LimitExceededException;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/schemas/schemas_0.js
var require_schemas_0 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.GetId$ = exports.GetCredentialsForIdentity$ = exports.GetIdResponse$ = exports.GetIdInput$ = exports.GetCredentialsForIdentityResponse$ = exports.GetCredentialsForIdentityInput$ = exports.Credentials$ = exports.errorTypeRegistries = exports.TooManyRequestsException$ = exports.ResourceNotFoundException$ = exports.ResourceConflictException$ = exports.NotAuthorizedException$ = exports.LimitExceededException$ = exports.InvalidParameterException$ = exports.InvalidIdentityPoolConfigurationException$ = exports.InternalErrorException$ = exports.ExternalServiceException$ = exports.CognitoIdentityServiceException$ = undefined;
  var _AI = "AccountId";
  var _AKI = "AccessKeyId";
  var _C = "Credentials";
  var _CRA = "CustomRoleArn";
  var _E = "Expiration";
  var _ESE = "ExternalServiceException";
  var _GCFI = "GetCredentialsForIdentity";
  var _GCFII = "GetCredentialsForIdentityInput";
  var _GCFIR = "GetCredentialsForIdentityResponse";
  var _GI = "GetId";
  var _GII = "GetIdInput";
  var _GIR = "GetIdResponse";
  var _IEE = "InternalErrorException";
  var _II = "IdentityId";
  var _IIPCE = "InvalidIdentityPoolConfigurationException";
  var _IPE = "InvalidParameterException";
  var _IPI = "IdentityPoolId";
  var _IPT = "IdentityProviderToken";
  var _L = "Logins";
  var _LEE = "LimitExceededException";
  var _LM = "LoginsMap";
  var _NAE = "NotAuthorizedException";
  var _RCE = "ResourceConflictException";
  var _RNFE = "ResourceNotFoundException";
  var _SK = "SecretKey";
  var _SKS = "SecretKeyString";
  var _ST = "SessionToken";
  var _TMRE = "TooManyRequestsException";
  var _c = "client";
  var _e = "error";
  var _hE = "httpError";
  var _m = "message";
  var _s = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity";
  var _se = "server";
  var n0 = "com.amazonaws.cognitoidentity";
  var schema_1 = require_schema();
  var CognitoIdentityServiceException_1 = require_CognitoIdentityServiceException();
  var errors_1 = require_errors();
  var _s_registry = schema_1.TypeRegistry.for(_s);
  exports.CognitoIdentityServiceException$ = [-3, _s, "CognitoIdentityServiceException", 0, [], []];
  _s_registry.registerError(exports.CognitoIdentityServiceException$, CognitoIdentityServiceException_1.CognitoIdentityServiceException);
  var n0_registry = schema_1.TypeRegistry.for(n0);
  exports.ExternalServiceException$ = [-3, n0, _ESE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
  n0_registry.registerError(exports.ExternalServiceException$, errors_1.ExternalServiceException);
  exports.InternalErrorException$ = [-3, n0, _IEE, { [_e]: _se }, [_m], [0]];
  n0_registry.registerError(exports.InternalErrorException$, errors_1.InternalErrorException);
  exports.InvalidIdentityPoolConfigurationException$ = [
    -3,
    n0,
    _IIPCE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.InvalidIdentityPoolConfigurationException$, errors_1.InvalidIdentityPoolConfigurationException);
  exports.InvalidParameterException$ = [-3, n0, _IPE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
  n0_registry.registerError(exports.InvalidParameterException$, errors_1.InvalidParameterException);
  exports.LimitExceededException$ = [-3, n0, _LEE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
  n0_registry.registerError(exports.LimitExceededException$, errors_1.LimitExceededException);
  exports.NotAuthorizedException$ = [-3, n0, _NAE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
  n0_registry.registerError(exports.NotAuthorizedException$, errors_1.NotAuthorizedException);
  exports.ResourceConflictException$ = [-3, n0, _RCE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
  n0_registry.registerError(exports.ResourceConflictException$, errors_1.ResourceConflictException);
  exports.ResourceNotFoundException$ = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
  n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
  exports.TooManyRequestsException$ = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
  n0_registry.registerError(exports.TooManyRequestsException$, errors_1.TooManyRequestsException);
  exports.errorTypeRegistries = [_s_registry, n0_registry];
  var IdentityProviderToken = [0, n0, _IPT, 8, 0];
  var SecretKeyString = [0, n0, _SKS, 8, 0];
  exports.Credentials$ = [
    3,
    n0,
    _C,
    0,
    [_AKI, _SK, _ST, _E],
    [0, [() => SecretKeyString, 0], 0, 4]
  ];
  exports.GetCredentialsForIdentityInput$ = [
    3,
    n0,
    _GCFII,
    0,
    [_II, _L, _CRA],
    [0, [() => LoginsMap, 0], 0],
    1
  ];
  exports.GetCredentialsForIdentityResponse$ = [
    3,
    n0,
    _GCFIR,
    0,
    [_II, _C],
    [0, [() => exports.Credentials$, 0]]
  ];
  exports.GetIdInput$ = [3, n0, _GII, 0, [_IPI, _AI, _L], [0, 0, [() => LoginsMap, 0]], 1];
  exports.GetIdResponse$ = [3, n0, _GIR, 0, [_II], [0]];
  var LoginsMap = [2, n0, _LM, 0, [0, 0], [() => IdentityProviderToken, 0]];
  exports.GetCredentialsForIdentity$ = [
    9,
    n0,
    _GCFI,
    0,
    () => exports.GetCredentialsForIdentityInput$,
    () => exports.GetCredentialsForIdentityResponse$
  ];
  exports.GetId$ = [9, n0, _GI, 0, () => exports.GetIdInput$, () => exports.GetIdResponse$];
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/runtimeConfig.shared.js
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
      apiVersion: "2014-06-30",
      base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
      base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultCognitoIdentityHttpAuthSchemeProvider,
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
      protocol: config?.protocol ?? protocols_1.AwsJson1_1Protocol,
      protocolSettings: config?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.cognitoidentity",
        errorTypeRegistries: schemas_0_1.errorTypeRegistries,
        xmlNamespace: "http://cognito-identity.amazonaws.com/doc/2014-06-30/",
        version: "2014-06-30",
        serviceTarget: "AWSCognitoIdentityService"
      },
      serviceId: config?.serviceId ?? "Cognito Identity",
      urlParser: config?.urlParser ?? url_parser_1.parseUrl,
      utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
    };
  };
  exports.getRuntimeConfig = getRuntimeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/runtimeConfig.js
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

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/cognito-identity/index.js
var require_cognito_identity = __commonJS((exports) => {
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
  var CognitoIdentityServiceException = require_CognitoIdentityServiceException();
  var resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      defaultSigningName: "cognito-identity"
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

  class CognitoIdentityClient extends smithyClient.Client {
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
        httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultCognitoIdentityHttpAuthSchemeParametersProvider,
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

  class GetCredentialsForIdentityCommand extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(schemas_0.GetCredentialsForIdentity$).build() {
  }

  class GetIdCommand extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(schemas_0.GetId$).build() {
  }
  var commands = {
    GetCredentialsForIdentityCommand,
    GetIdCommand
  };

  class CognitoIdentity extends CognitoIdentityClient {
  }
  smithyClient.createAggregatedClient(commands, CognitoIdentity);
  exports.$Command = smithyClient.Command;
  exports.__Client = smithyClient.Client;
  exports.CognitoIdentityServiceException = CognitoIdentityServiceException.CognitoIdentityServiceException;
  exports.CognitoIdentity = CognitoIdentity;
  exports.CognitoIdentityClient = CognitoIdentityClient;
  exports.GetCredentialsForIdentityCommand = GetCredentialsForIdentityCommand;
  exports.GetIdCommand = GetIdCommand;
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

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/loadCognitoIdentity.js
var import_cognito_identity;
var init_loadCognitoIdentity = __esm(() => {
  import_cognito_identity = __toESM(require_cognito_identity(), 1);
});
init_loadCognitoIdentity();
var export_GetIdCommand = import_cognito_identity.GetIdCommand;
var export_GetCredentialsForIdentityCommand = import_cognito_identity.GetCredentialsForIdentityCommand;
var export_CognitoIdentityClient = import_cognito_identity.CognitoIdentityClient;

export {
  export_GetIdCommand as GetIdCommand,
  export_GetCredentialsForIdentityCommand as GetCredentialsForIdentityCommand,
  export_CognitoIdentityClient as CognitoIdentityClient
};
