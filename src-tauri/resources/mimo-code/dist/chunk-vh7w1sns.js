// @bun
import {
  require_dist_cjs as require_dist_cjs26
} from "./chunk-x6t2h5j0.js";
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
import {
  require_dist_cjs
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-87zgmycv.js";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-4ch5vxv6.js";
import {
  require_dist_cjs2 as require_dist_cjs7
} from "./chunk-2nayx6q1.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/endpoint/bdd.js
var require_bdd = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bdd = undefined;
  var util_endpoints_1 = require_dist_cjs14();
  var q = "ref";
  var a = -1;
  var b = true;
  var c = "isSet";
  var d = "PartitionResult";
  var e = "booleanEquals";
  var f = "stringEquals";
  var g = "getAttr";
  var h = "us-east-1";
  var i = "sigv4";
  var j = "sts";
  var k = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
  var l = { [q]: "Endpoint" };
  var m = { [q]: "Region" };
  var n = { [q]: d };
  var o = {};
  var p = [m];
  var _data = {
    conditions: [
      [c, [l]],
      [c, p],
      ["aws.partition", p, d],
      [e, [{ [q]: "UseFIPS" }, b]],
      [e, [{ [q]: "UseDualStack" }, b]],
      [f, [m, "aws-global"]],
      [e, [{ [q]: "UseGlobalEndpoint" }, b]],
      [f, [m, "eu-central-1"]],
      [e, [{ fn: g, argv: [n, "supportsDualStack"] }, b]],
      [e, [{ fn: g, argv: [n, "supportsFIPS"] }, b]],
      [f, [m, "ap-south-1"]],
      [f, [m, "eu-north-1"]],
      [f, [m, "eu-west-1"]],
      [f, [m, "eu-west-2"]],
      [f, [m, "eu-west-3"]],
      [f, [m, "sa-east-1"]],
      [f, [m, h]],
      [f, [m, "us-east-2"]],
      [f, [m, "us-west-2"]],
      [f, [m, "us-west-1"]],
      [f, [m, "ca-central-1"]],
      [f, [m, "ap-southeast-1"]],
      [f, [m, "ap-northeast-1"]],
      [f, [m, "ap-southeast-2"]],
      [f, [{ fn: g, argv: [n, "name"] }, "aws-us-gov"]]
    ],
    results: [
      [a],
      ["https://sts.amazonaws.com", { authSchemes: [{ name: i, signingName: j, signingRegion: h }] }],
      [k, { authSchemes: [{ name: i, signingName: j, signingRegion: "{Region}" }] }],
      [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [l, o],
      ["https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", o],
      [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://sts.{Region}.amazonaws.com", o],
      ["https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", o],
      [a, "FIPS is enabled but this partition does not support FIPS"],
      ["https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", o],
      [a, "DualStack is enabled but this partition does not support DualStack"],
      [k, o],
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
    30,
    3,
    1,
    4,
    r + 14,
    2,
    5,
    r + 14,
    3,
    25,
    6,
    4,
    24,
    7,
    5,
    r + 1,
    8,
    6,
    9,
    r + 13,
    7,
    r + 1,
    10,
    10,
    r + 1,
    11,
    11,
    r + 1,
    12,
    12,
    r + 1,
    13,
    13,
    r + 1,
    14,
    14,
    r + 1,
    15,
    15,
    r + 1,
    16,
    16,
    r + 1,
    17,
    17,
    r + 1,
    18,
    18,
    r + 1,
    19,
    19,
    r + 1,
    20,
    20,
    r + 1,
    21,
    21,
    r + 1,
    22,
    22,
    r + 1,
    23,
    23,
    r + 1,
    r + 2,
    8,
    r + 11,
    r + 12,
    4,
    28,
    26,
    9,
    27,
    r + 10,
    24,
    r + 8,
    r + 9,
    8,
    29,
    r + 7,
    9,
    r + 6,
    r + 7,
    3,
    r + 3,
    31,
    4,
    r + 4,
    r + 5
  ]);
  exports.bdd = util_endpoints_1.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defaultEndpointResolver = undefined;
  var util_endpoints_1 = require_dist_cjs15();
  var util_endpoints_2 = require_dist_cjs14();
  var bdd_1 = require_bdd();
  var cache = new util_endpoints_2.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
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

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveHttpAuthSchemeConfig = exports.resolveStsAuthConfig = exports.defaultSTSHttpAuthSchemeProvider = exports.defaultSTSHttpAuthSchemeParametersProvider = undefined;
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var signature_v4_multi_region_1 = require_dist_cjs26();
  var middleware_endpoint_1 = require_dist_cjs19();
  var util_middleware_1 = require_dist_cjs6();
  var endpointResolver_1 = require_endpointResolver();
  var STSClient_1 = require_STSClient();
  var createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
    if (!input) {
      throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
    }
    const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
    const instructionsFn = (0, util_middleware_1.getSmithyContext)(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
    if (!instructionsFn) {
      throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
    }
    const endpointParameters = await (0, middleware_endpoint_1.resolveParams)(input, { getEndpointParameterInstructions: instructionsFn }, config);
    return Object.assign(defaultParameters, endpointParameters);
  };
  var _defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
      operation: (0, util_middleware_1.getSmithyContext)(context).operation,
      region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    };
  };
  exports.defaultSTSHttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultSTSHttpAuthSchemeParametersProvider);
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sts",
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
  function createAwsAuthSigv4aHttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4a",
      signingProperties: {
        name: "sts",
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
  var createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
    const endpointRuleSetHttpAuthSchemeProvider = (authParameters) => {
      const endpoint = defaultEndpointResolver(authParameters);
      const authSchemes = endpoint.properties?.authSchemes;
      if (!authSchemes) {
        return defaultHttpAuthSchemeResolver(authParameters);
      }
      const options = [];
      for (const scheme of authSchemes) {
        const { name: resolvedName, properties = {}, ...rest } = scheme;
        const name = resolvedName.toLowerCase();
        if (resolvedName !== name) {
          console.warn(`HttpAuthScheme has been normalized with lowercasing: '${resolvedName}' to '${name}'`);
        }
        let schemeId;
        if (name === "sigv4a") {
          schemeId = "aws.auth#sigv4a";
          const sigv4Present = authSchemes.find((s) => {
            const name2 = s.name.toLowerCase();
            return name2 !== "sigv4a" && name2.startsWith("sigv4");
          });
          if (signature_v4_multi_region_1.SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
            continue;
          }
        } else if (name.startsWith("sigv4")) {
          schemeId = "aws.auth#sigv4";
        } else {
          throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${name}'`);
        }
        const createOption = createHttpAuthOptionFunctions[schemeId];
        if (!createOption) {
          throw new Error(`Could not find HttpAuthOption create function for '${schemeId}'`);
        }
        const option = createOption(authParameters);
        option.schemeId = schemeId;
        option.signingProperties = { ...option.signingProperties || {}, ...rest, ...properties };
        options.push(option);
      }
      return options;
    };
    return endpointRuleSetHttpAuthSchemeProvider;
  };
  var _defaultSTSHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
      case "AssumeRoleWithWebIdentity": {
        options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
        options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
        break;
      }
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
      }
    }
    return options;
  };
  exports.defaultSTSHttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(endpointResolver_1.defaultEndpointResolver, _defaultSTSHttpAuthSchemeProvider, {
    "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
    "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption,
    "smithy.api#noAuth": createSmithyApiNoAuthHttpAuthOption
  });
  var resolveStsAuthConfig = (input) => Object.assign(input, {
    stsClientCtor: STSClient_1.STSClient
  });
  exports.resolveStsAuthConfig = resolveStsAuthConfig;
  var resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, exports.resolveStsAuthConfig)(config);
    const config_1 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4Config)(config_0);
    const config_2 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4AConfig)(config_1);
    return Object.assign(config_2, {
      authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
    });
  };
  exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/endpoint/EndpointParameters.js
var require_EndpointParameters = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.commonParams = exports.resolveClientEndpointParameters = undefined;
  var resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
      useDualstackEndpoint: options.useDualstackEndpoint ?? false,
      useFipsEndpoint: options.useFipsEndpoint ?? false,
      useGlobalEndpoint: options.useGlobalEndpoint ?? false,
      defaultSigningName: "sts"
    });
  };
  exports.resolveClientEndpointParameters = resolveClientEndpointParameters;
  exports.commonParams = {
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/models/STSServiceException.js
var require_STSServiceException = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.STSServiceException = exports.__ServiceException = undefined;
  var smithy_client_1 = require_dist_cjs9();
  Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function() {
    return smithy_client_1.ServiceException;
  } });

  class STSServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, STSServiceException.prototype);
    }
  }
  exports.STSServiceException = STSServiceException;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/models/errors.js
var require_errors = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.IDPCommunicationErrorException = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = undefined;
  var STSServiceException_1 = require_STSServiceException();

  class ExpiredTokenException extends STSServiceException_1.STSServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
  }
  exports.ExpiredTokenException = ExpiredTokenException;

  class MalformedPolicyDocumentException extends STSServiceException_1.STSServiceException {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
  }
  exports.MalformedPolicyDocumentException = MalformedPolicyDocumentException;

  class PackedPolicyTooLargeException extends STSServiceException_1.STSServiceException {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "PackedPolicyTooLargeException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
  }
  exports.PackedPolicyTooLargeException = PackedPolicyTooLargeException;

  class RegionDisabledException extends STSServiceException_1.STSServiceException {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "RegionDisabledException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
  }
  exports.RegionDisabledException = RegionDisabledException;

  class IDPRejectedClaimException extends STSServiceException_1.STSServiceException {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "IDPRejectedClaimException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
  }
  exports.IDPRejectedClaimException = IDPRejectedClaimException;

  class InvalidIdentityTokenException extends STSServiceException_1.STSServiceException {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidIdentityTokenException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
  }
  exports.InvalidIdentityTokenException = InvalidIdentityTokenException;

  class IDPCommunicationErrorException extends STSServiceException_1.STSServiceException {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    $retryable = {};
    constructor(opts) {
      super({
        name: "IDPCommunicationErrorException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
  }
  exports.IDPCommunicationErrorException = IDPCommunicationErrorException;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/schemas/schemas_0.js
var require_schemas_0 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AssumeRoleWithWebIdentity$ = exports.AssumeRole$ = exports.Tag$ = exports.ProvidedContext$ = exports.PolicyDescriptorType$ = exports.Credentials$ = exports.AssumeRoleWithWebIdentityResponse$ = exports.AssumeRoleWithWebIdentityRequest$ = exports.AssumeRoleResponse$ = exports.AssumeRoleRequest$ = exports.AssumedRoleUser$ = exports.errorTypeRegistries = exports.RegionDisabledException$ = exports.PackedPolicyTooLargeException$ = exports.MalformedPolicyDocumentException$ = exports.InvalidIdentityTokenException$ = exports.IDPRejectedClaimException$ = exports.IDPCommunicationErrorException$ = exports.ExpiredTokenException$ = exports.STSServiceException$ = undefined;
  var _A = "Arn";
  var _AKI = "AccessKeyId";
  var _AR = "AssumeRole";
  var _ARI = "AssumedRoleId";
  var _ARR = "AssumeRoleRequest";
  var _ARRs = "AssumeRoleResponse";
  var _ARU = "AssumedRoleUser";
  var _ARWWI = "AssumeRoleWithWebIdentity";
  var _ARWWIR = "AssumeRoleWithWebIdentityRequest";
  var _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
  var _Au = "Audience";
  var _C = "Credentials";
  var _CA = "ContextAssertion";
  var _DS = "DurationSeconds";
  var _E = "Expiration";
  var _EI = "ExternalId";
  var _ETE = "ExpiredTokenException";
  var _IDPCEE = "IDPCommunicationErrorException";
  var _IDPRCE = "IDPRejectedClaimException";
  var _IITE = "InvalidIdentityTokenException";
  var _K = "Key";
  var _MPDE = "MalformedPolicyDocumentException";
  var _P = "Policy";
  var _PA = "PolicyArns";
  var _PAr = "ProviderArn";
  var _PC = "ProvidedContexts";
  var _PCLT = "ProvidedContextsListType";
  var _PCr = "ProvidedContext";
  var _PDT = "PolicyDescriptorType";
  var _PI = "ProviderId";
  var _PPS = "PackedPolicySize";
  var _PPTLE = "PackedPolicyTooLargeException";
  var _Pr = "Provider";
  var _RA = "RoleArn";
  var _RDE = "RegionDisabledException";
  var _RSN = "RoleSessionName";
  var _SAK = "SecretAccessKey";
  var _SFWIT = "SubjectFromWebIdentityToken";
  var _SI = "SourceIdentity";
  var _SN = "SerialNumber";
  var _ST = "SessionToken";
  var _T = "Tags";
  var _TC = "TokenCode";
  var _TTK = "TransitiveTagKeys";
  var _Ta = "Tag";
  var _V = "Value";
  var _WIT = "WebIdentityToken";
  var _a = "arn";
  var _aKST = "accessKeySecretType";
  var _aQE = "awsQueryError";
  var _c = "client";
  var _cTT = "clientTokenType";
  var _e = "error";
  var _hE = "httpError";
  var _m = "message";
  var _pDLT = "policyDescriptorListType";
  var _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
  var _tLT = "tagListType";
  var n0 = "com.amazonaws.sts";
  var schema_1 = require_schema();
  var errors_1 = require_errors();
  var STSServiceException_1 = require_STSServiceException();
  var _s_registry = schema_1.TypeRegistry.for(_s);
  exports.STSServiceException$ = [-3, _s, "STSServiceException", 0, [], []];
  _s_registry.registerError(exports.STSServiceException$, STSServiceException_1.STSServiceException);
  var n0_registry = schema_1.TypeRegistry.for(n0);
  exports.ExpiredTokenException$ = [
    -3,
    n0,
    _ETE,
    { [_aQE]: [`ExpiredTokenException`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.ExpiredTokenException$, errors_1.ExpiredTokenException);
  exports.IDPCommunicationErrorException$ = [
    -3,
    n0,
    _IDPCEE,
    { [_aQE]: [`IDPCommunicationError`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.IDPCommunicationErrorException$, errors_1.IDPCommunicationErrorException);
  exports.IDPRejectedClaimException$ = [
    -3,
    n0,
    _IDPRCE,
    { [_aQE]: [`IDPRejectedClaim`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.IDPRejectedClaimException$, errors_1.IDPRejectedClaimException);
  exports.InvalidIdentityTokenException$ = [
    -3,
    n0,
    _IITE,
    { [_aQE]: [`InvalidIdentityToken`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.InvalidIdentityTokenException$, errors_1.InvalidIdentityTokenException);
  exports.MalformedPolicyDocumentException$ = [
    -3,
    n0,
    _MPDE,
    { [_aQE]: [`MalformedPolicyDocument`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.MalformedPolicyDocumentException$, errors_1.MalformedPolicyDocumentException);
  exports.PackedPolicyTooLargeException$ = [
    -3,
    n0,
    _PPTLE,
    { [_aQE]: [`PackedPolicyTooLarge`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.PackedPolicyTooLargeException$, errors_1.PackedPolicyTooLargeException);
  exports.RegionDisabledException$ = [
    -3,
    n0,
    _RDE,
    { [_aQE]: [`RegionDisabledException`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(exports.RegionDisabledException$, errors_1.RegionDisabledException);
  exports.errorTypeRegistries = [_s_registry, n0_registry];
  var accessKeySecretType = [0, n0, _aKST, 8, 0];
  var clientTokenType = [0, n0, _cTT, 8, 0];
  exports.AssumedRoleUser$ = [3, n0, _ARU, 0, [_ARI, _A], [0, 0], 2];
  exports.AssumeRoleRequest$ = [
    3,
    n0,
    _ARR,
    0,
    [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
    [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType],
    2
  ];
  exports.AssumeRoleResponse$ = [
    3,
    n0,
    _ARRs,
    0,
    [_C, _ARU, _PPS, _SI],
    [[() => exports.Credentials$, 0], () => exports.AssumedRoleUser$, 1, 0]
  ];
  exports.AssumeRoleWithWebIdentityRequest$ = [
    3,
    n0,
    _ARWWIR,
    0,
    [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
    [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1],
    3
  ];
  exports.AssumeRoleWithWebIdentityResponse$ = [
    3,
    n0,
    _ARWWIRs,
    0,
    [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
    [[() => exports.Credentials$, 0], 0, () => exports.AssumedRoleUser$, 1, 0, 0, 0]
  ];
  exports.Credentials$ = [
    3,
    n0,
    _C,
    0,
    [_AKI, _SAK, _ST, _E],
    [0, [() => accessKeySecretType, 0], 0, 4],
    4
  ];
  exports.PolicyDescriptorType$ = [3, n0, _PDT, 0, [_a], [0]];
  exports.ProvidedContext$ = [3, n0, _PCr, 0, [_PAr, _CA], [0, 0]];
  exports.Tag$ = [3, n0, _Ta, 0, [_K, _V], [0, 0], 2];
  var policyDescriptorListType = [1, n0, _pDLT, 0, () => exports.PolicyDescriptorType$];
  var ProvidedContextsListType = [1, n0, _PCLT, 0, () => exports.ProvidedContext$];
  var tagKeyListType = 64 | 0;
  var tagListType = [1, n0, _tLT, 0, () => exports.Tag$];
  exports.AssumeRole$ = [9, n0, _AR, 0, () => exports.AssumeRoleRequest$, () => exports.AssumeRoleResponse$];
  exports.AssumeRoleWithWebIdentity$ = [
    9,
    n0,
    _ARWWI,
    0,
    () => exports.AssumeRoleWithWebIdentityRequest$,
    () => exports.AssumeRoleWithWebIdentityResponse$
  ];
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getRuntimeConfig = undefined;
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var protocols_1 = require_protocols();
  var signature_v4_multi_region_1 = require_dist_cjs26();
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
      apiVersion: "2011-06-15",
      base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
      base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
      disableHostPrefix: config?.disableHostPrefix ?? false,
      endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
      extensions: config?.extensions ?? [],
      httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeProvider,
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
          signer: new httpAuthSchemes_1.AwsSdkSigV4Signer
        },
        {
          schemeId: "aws.auth#sigv4a",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
          signer: new httpAuthSchemes_1.AwsSdkSigV4ASigner
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new core_1.NoAuthSigner
        }
      ],
      logger: config?.logger ?? new smithy_client_1.NoOpLogger,
      protocol: config?.protocol ?? protocols_1.AwsQueryProtocol,
      protocolSettings: config?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.sts",
        errorTypeRegistries: schemas_0_1.errorTypeRegistries,
        xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
        version: "2011-06-15",
        serviceTarget: "AWSSecurityTokenServiceV20110615"
      },
      serviceId: config?.serviceId ?? "STS",
      signerConstructor: config?.signerConstructor ?? signature_v4_multi_region_1.SignatureV4MultiRegion,
      urlParser: config?.urlParser ?? url_parser_1.parseUrl,
      utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
      utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
    };
  };
  exports.getRuntimeConfig = getRuntimeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.js
var require_runtimeConfig = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getRuntimeConfig = undefined;
  var tslib_1 = require_tslib();
  var package_json_1 = tslib_1.__importDefault(require_package());
  var client_1 = require_client();
  var httpAuthSchemes_1 = require_httpAuthSchemes();
  var util_user_agent_node_1 = require_dist_cjs21();
  var config_resolver_1 = require_dist_cjs17();
  var core_1 = require_dist_cjs10();
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
      httpAuthSchemes: config?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await config.credentialDefaultProvider(idProps?.__config || {})()),
          signer: new httpAuthSchemes_1.AwsSdkSigV4Signer
        },
        {
          schemeId: "aws.auth#sigv4a",
          identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
          signer: new httpAuthSchemes_1.AwsSdkSigV4ASigner
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new core_1.NoAuthSigner
        }
      ],
      maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
      region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
      requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
      retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
        ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
      }, config),
      sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
      sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? (0, node_config_provider_1.loadConfig)(httpAuthSchemes_1.NODE_SIGV4A_CONFIG_OPTIONS, loaderConfig),
      streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
      useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
      useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
      userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
    };
  };
  exports.getRuntimeConfig = getRuntimeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/auth/httpAuthExtensionConfiguration.js
var require_httpAuthExtensionConfiguration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveHttpAuthRuntimeConfig = exports.getHttpAuthExtensionConfiguration = undefined;
  var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
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
      setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
        _httpAuthSchemeProvider = httpAuthSchemeProvider;
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
  exports.getHttpAuthExtensionConfiguration = getHttpAuthExtensionConfiguration;
  var resolveHttpAuthRuntimeConfig = (config) => {
    return {
      httpAuthSchemes: config.httpAuthSchemes(),
      httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
      credentials: config.credentials()
    };
  };
  exports.resolveHttpAuthRuntimeConfig = resolveHttpAuthRuntimeConfig;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeExtensions.js
var require_runtimeExtensions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.resolveRuntimeExtensions = undefined;
  var region_config_resolver_1 = require_dist_cjs25();
  var protocol_http_1 = require_dist_cjs();
  var smithy_client_1 = require_dist_cjs9();
  var httpAuthExtensionConfiguration_1 = require_httpAuthExtensionConfiguration();
  var resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig), (0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig), (0, httpAuthExtensionConfiguration_1.getHttpAuthExtensionConfiguration)(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, (0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), (0, httpAuthExtensionConfiguration_1.resolveHttpAuthRuntimeConfig)(extensionConfiguration));
  };
  exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/STSClient.js
var require_STSClient = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.STSClient = exports.__Client = undefined;
  var middleware_host_header_1 = require_dist_cjs11();
  var middleware_logger_1 = require_dist_cjs12();
  var middleware_recursion_detection_1 = require_dist_cjs13();
  var middleware_user_agent_1 = require_dist_cjs16();
  var config_resolver_1 = require_dist_cjs17();
  var core_1 = require_dist_cjs10();
  var schema_1 = require_schema();
  var middleware_content_length_1 = require_dist_cjs18();
  var middleware_endpoint_1 = require_dist_cjs19();
  var middleware_retry_1 = require_dist_cjs20();
  var smithy_client_1 = require_dist_cjs9();
  Object.defineProperty(exports, "__Client", { enumerable: true, get: function() {
    return smithy_client_1.Client;
  } });
  var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
  var EndpointParameters_1 = require_EndpointParameters();
  var runtimeConfig_1 = require_runtimeConfig();
  var runtimeExtensions_1 = require_runtimeExtensions();

  class STSClient extends smithy_client_1.Client {
    config;
    constructor(...[configuration]) {
      const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
      super(_config_0);
      this.initConfig = _config_0;
      const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
      const _config_2 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_1);
      const _config_3 = (0, middleware_retry_1.resolveRetryConfig)(_config_2);
      const _config_4 = (0, config_resolver_1.resolveRegionConfig)(_config_3);
      const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
      const _config_6 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_5);
      const _config_7 = (0, httpAuthSchemeProvider_1.resolveHttpAuthSchemeConfig)(_config_6);
      const _config_8 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
      this.config = _config_8;
      this.middlewareStack.use((0, schema_1.getSchemaSerdePlugin)(this.config));
      this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
      this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
      this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
      this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
      this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
      this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
      this.middlewareStack.use((0, core_1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new core_1.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials,
          "aws.auth#sigv4a": config.credentials
        })
      }));
      this.middlewareStack.use((0, core_1.getHttpSigningPlugin)(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  exports.STSClient = STSClient;
});

// node_modules/.bun/@aws-sdk+nested-clients@3.997.3/node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/index.js
var require_sts = __commonJS((exports) => {
  var STSClient = require_STSClient();
  var smithyClient = require_dist_cjs9();
  var middlewareEndpoint = require_dist_cjs19();
  var EndpointParameters = require_EndpointParameters();
  var schemas_0 = require_schemas_0();
  var errors = require_errors();
  var client = require_client();
  var regionConfigResolver = require_dist_cjs25();
  var STSServiceException = require_STSServiceException();

  class AssumeRoleCommand extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(schemas_0.AssumeRole$).build() {
  }

  class AssumeRoleWithWebIdentityCommand extends smithyClient.Command.classBuilder().ep(EndpointParameters.commonParams).m(function(Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(schemas_0.AssumeRoleWithWebIdentity$).build() {
  }
  var commands = {
    AssumeRoleCommand,
    AssumeRoleWithWebIdentityCommand
  };

  class STS extends STSClient.STSClient {
  }
  smithyClient.createAggregatedClient(commands, STS);
  var getAccountIdFromAssumedRoleUser = (assumedRoleUser) => {
    if (typeof assumedRoleUser?.Arn === "string") {
      const arnComponents = assumedRoleUser.Arn.split(":");
      if (arnComponents.length > 4 && arnComponents[4] !== "") {
        return arnComponents[4];
      }
    }
    return;
  };
  var resolveRegion = async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {}) => {
    const region = typeof _region === "function" ? await _region() : _region;
    const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
    let stsDefaultRegion = "";
    const resolvedRegion = region ?? parentRegion ?? (stsDefaultRegion = await regionConfigResolver.stsRegionDefaultResolver(loaderConfig)());
    credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
    return resolvedRegion;
  };
  var getDefaultRoleAssumer$1 = (stsOptions, STSClient2) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
      closureSourceCreds = sourceCreds;
      if (!stsClient) {
        const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
        const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
          logger,
          profile
        });
        const isCompatibleRequestHandler = !isH2(requestHandler);
        stsClient = new STSClient2({
          ...stsOptions,
          userAgentAppId,
          profile,
          credentialDefaultProvider: () => async () => closureSourceCreds,
          region: resolvedRegion,
          requestHandler: isCompatibleRequestHandler ? requestHandler : undefined,
          logger
        });
      }
      const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
      if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
        throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
      }
      const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
      const credentials = {
        accessKeyId: Credentials.AccessKeyId,
        secretAccessKey: Credentials.SecretAccessKey,
        sessionToken: Credentials.SessionToken,
        expiration: Credentials.Expiration,
        ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
        ...accountId && { accountId }
      };
      client.setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
      return credentials;
    };
  };
  var getDefaultRoleAssumerWithWebIdentity$1 = (stsOptions, STSClient2) => {
    let stsClient;
    return async (params) => {
      if (!stsClient) {
        const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
        const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
          logger,
          profile
        });
        const isCompatibleRequestHandler = !isH2(requestHandler);
        stsClient = new STSClient2({
          ...stsOptions,
          userAgentAppId,
          profile,
          region: resolvedRegion,
          requestHandler: isCompatibleRequestHandler ? requestHandler : undefined,
          logger
        });
      }
      const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
      if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
        throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
      }
      const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
      const credentials = {
        accessKeyId: Credentials.AccessKeyId,
        secretAccessKey: Credentials.SecretAccessKey,
        sessionToken: Credentials.SessionToken,
        expiration: Credentials.Expiration,
        ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
        ...accountId && { accountId }
      };
      if (accountId) {
        client.setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
      }
      client.setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
      return credentials;
    };
  };
  var isH2 = (requestHandler) => {
    return requestHandler?.metadata?.handlerProtocol === "h2";
  };
  var getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
      return baseCtor;
    else
      return class CustomizableSTSClient extends baseCtor {
        constructor(config) {
          super(config);
          for (const customization of customizations) {
            this.middlewareStack.use(customization);
          }
        }
      };
  };
  var getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer$1(stsOptions, getCustomizableStsClientCtor(STSClient.STSClient, stsPlugins));
  var getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity$1(stsOptions, getCustomizableStsClientCtor(STSClient.STSClient, stsPlugins));
  var decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
    ...input
  });
  exports.$Command = smithyClient.Command;
  exports.STSServiceException = STSServiceException.STSServiceException;
  exports.AssumeRoleCommand = AssumeRoleCommand;
  exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;
  exports.STS = STS;
  exports.decorateDefaultCredentialProvider = decorateDefaultCredentialProvider;
  exports.getDefaultRoleAssumer = getDefaultRoleAssumer;
  exports.getDefaultRoleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity;
  Object.prototype.hasOwnProperty.call(STSClient, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: STSClient["__proto__"]
  });
  Object.keys(STSClient).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = STSClient[k];
  });
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

export { require_sts };
