// @bun
import {
  defaultProvider,
  init_dist_es
} from "./chunk-8b5a0z0t.js";
import"./chunk-fz59axqr.js";
import {
  require_dist_cjs as require_dist_cjs26
} from "./chunk-x6t2h5j0.js";
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
  require_dist_cjs2 as require_dist_cjs8
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/endpoint/bdd.js
var import_util_endpoints, q = "ref", a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "stringEquals", g = "getAttr", h = "us-east-1", i = "sigv4", j = "sts", k = "https://sts.{Region}.{PartitionResult#dnsSuffix}", l, m, n, o, p, _data, root = 2, r = 1e8, nodes, bdd;
var init_bdd = __esm(() => {
  import_util_endpoints = __toESM(require_dist_cjs14(), 1);
  l = { [q]: "Endpoint" };
  m = { [q]: "Region" };
  n = { [q]: d };
  o = {};
  p = [m];
  _data = {
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
  nodes = new Int32Array([
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
  bdd = import_util_endpoints.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js
var import_util_endpoints2, import_util_endpoints3, cache, defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () => import_util_endpoints3.decideEndpoint(bdd, {
    endpointParams,
    logger: context.logger
  }));
};
var init_endpointResolver = __esm(() => {
  init_bdd();
  import_util_endpoints2 = __toESM(require_dist_cjs15(), 1);
  import_util_endpoints3 = __toESM(require_dist_cjs14(), 1);
  cache = new import_util_endpoints3.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
  });
  import_util_endpoints3.customEndpointFunctions.aws = import_util_endpoints2.awsEndpointFunctions;
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthSchemeProvider.js
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
var import_httpAuthSchemes, import_signature_v4_multi_region, import_middleware_endpoint, import_util_middleware, createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
  if (!input) {
    throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
  }
  const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
  const instructionsFn = import_util_middleware.getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
  if (!instructionsFn) {
    throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
  }
  const endpointParameters = await import_middleware_endpoint.resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
  return Object.assign(defaultParameters, endpointParameters);
}, _defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: import_util_middleware.getSmithyContext(context).operation,
    region: await import_util_middleware.normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, defaultSTSHttpAuthSchemeParametersProvider, createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver2, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
  const endpointRuleSetHttpAuthSchemeProvider = (authParameters) => {
    const endpoint = defaultEndpointResolver2(authParameters);
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
        if (import_signature_v4_multi_region.SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
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
}, _defaultSTSHttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    case "AssumeRoleWithSAML": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
      break;
    }
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
}, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig = (input) => Object.assign(input, {
  stsClientCtor: STSClient
}), resolveHttpAuthSchemeConfig = (config) => {
  const config_0 = resolveStsAuthConfig(config);
  const config_1 = import_httpAuthSchemes.resolveAwsSdkSigV4Config(config_0);
  const config_2 = import_httpAuthSchemes.resolveAwsSdkSigV4AConfig(config_1);
  return Object.assign(config_2, {
    authSchemePreference: import_util_middleware.normalizeProvider(config.authSchemePreference ?? [])
  });
};
var init_httpAuthSchemeProvider = __esm(() => {
  init_endpointResolver();
  init_STSClient();
  import_httpAuthSchemes = __toESM(require_httpAuthSchemes(), 1);
  import_signature_v4_multi_region = __toESM(require_dist_cjs26(), 1);
  import_middleware_endpoint = __toESM(require_dist_cjs19(), 1);
  import_util_middleware = __toESM(require_dist_cjs6(), 1);
  defaultSTSHttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultSTSHttpAuthSchemeParametersProvider);
  defaultSTSHttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultSTSHttpAuthSchemeProvider, {
    "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
    "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption,
    "smithy.api#noAuth": createSmithyApiNoAuthHttpAuthOption
  });
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    defaultSigningName: "sts"
  });
}, commonParams;
var init_EndpointParameters = __esm(() => {
  commonParams = {
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/package.json
var package_default;
var init_package = __esm(() => {
  package_default = {
    name: "@aws-sdk/client-sts",
    description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
    version: "3.1037.0",
    scripts: {
      build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
      "build:cjs": "node ../../scripts/compilation/inline client-sts",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
      "build:types": "premove ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
      test: "yarn g:vitest run",
      "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development",
      "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
      "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs",
      "test:integration": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
      "test:integration:watch": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
      "test:watch": "yarn g:vitest watch"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "5.2.0",
      "@aws-crypto/sha256-js": "5.2.0",
      "@aws-sdk/core": "^3.974.5",
      "@aws-sdk/credential-provider-node": "^3.972.36",
      "@aws-sdk/middleware-host-header": "^3.972.10",
      "@aws-sdk/middleware-logger": "^3.972.10",
      "@aws-sdk/middleware-recursion-detection": "^3.972.11",
      "@aws-sdk/middleware-user-agent": "^3.972.35",
      "@aws-sdk/region-config-resolver": "^3.972.13",
      "@aws-sdk/signature-v4-multi-region": "^3.996.22",
      "@aws-sdk/types": "^3.973.8",
      "@aws-sdk/util-endpoints": "^3.996.8",
      "@aws-sdk/util-user-agent-browser": "^3.972.10",
      "@aws-sdk/util-user-agent-node": "^3.973.21",
      "@smithy/config-resolver": "^4.4.17",
      "@smithy/core": "^3.23.17",
      "@smithy/fetch-http-handler": "^5.3.17",
      "@smithy/hash-node": "^4.2.14",
      "@smithy/invalid-dependency": "^4.2.14",
      "@smithy/middleware-content-length": "^4.2.14",
      "@smithy/middleware-endpoint": "^4.4.32",
      "@smithy/middleware-retry": "^4.5.5",
      "@smithy/middleware-serde": "^4.2.20",
      "@smithy/middleware-stack": "^4.2.14",
      "@smithy/node-config-provider": "^4.3.14",
      "@smithy/node-http-handler": "^4.6.1",
      "@smithy/protocol-http": "^5.3.14",
      "@smithy/smithy-client": "^4.12.13",
      "@smithy/types": "^4.14.1",
      "@smithy/url-parser": "^4.2.14",
      "@smithy/util-base64": "^4.3.2",
      "@smithy/util-body-length-browser": "^4.2.2",
      "@smithy/util-body-length-node": "^4.2.3",
      "@smithy/util-defaults-mode-browser": "^4.3.49",
      "@smithy/util-defaults-mode-node": "^4.2.54",
      "@smithy/util-endpoints": "^3.4.2",
      "@smithy/util-middleware": "^4.2.14",
      "@smithy/util-retry": "^4.3.4",
      "@smithy/util-utf8": "^4.2.2",
      tslib: "^2.6.2"
    },
    devDependencies: {
      "@smithy/snapshot-testing": "^2.0.8",
      "@tsconfig/node20": "20.1.8",
      "@types/node": "^20.14.8",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      premove: "4.0.0",
      typescript: "~5.8.3",
      vitest: "^4.0.17"
    },
    engines: {
      node: ">=20.0.0"
    },
    typesVersions: {
      "<4.5": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-sts"
    }
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js
var import_smithy_client, STSServiceException;
var init_STSServiceException = __esm(() => {
  import_smithy_client = __toESM(require_dist_cjs9(), 1);
  STSServiceException = class STSServiceException extends import_smithy_client.ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, STSServiceException.prototype);
    }
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/models/errors.js
var ExpiredTokenException, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, IDPCommunicationErrorException, InvalidAuthorizationMessageException, ExpiredTradeInTokenException, JWTPayloadSizeExceededException, OutboundWebIdentityFederationDisabledException, SessionDurationEscalationException;
var init_errors = __esm(() => {
  init_STSServiceException();
  ExpiredTokenException = class ExpiredTokenException extends STSServiceException {
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
  };
  MalformedPolicyDocumentException = class MalformedPolicyDocumentException extends STSServiceException {
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
  };
  PackedPolicyTooLargeException = class PackedPolicyTooLargeException extends STSServiceException {
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
  };
  RegionDisabledException = class RegionDisabledException extends STSServiceException {
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
  };
  IDPRejectedClaimException = class IDPRejectedClaimException extends STSServiceException {
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
  };
  InvalidIdentityTokenException = class InvalidIdentityTokenException extends STSServiceException {
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
  };
  IDPCommunicationErrorException = class IDPCommunicationErrorException extends STSServiceException {
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
  };
  InvalidAuthorizationMessageException = class InvalidAuthorizationMessageException extends STSServiceException {
    name = "InvalidAuthorizationMessageException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "InvalidAuthorizationMessageException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
  };
  ExpiredTradeInTokenException = class ExpiredTradeInTokenException extends STSServiceException {
    name = "ExpiredTradeInTokenException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ExpiredTradeInTokenException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ExpiredTradeInTokenException.prototype);
    }
  };
  JWTPayloadSizeExceededException = class JWTPayloadSizeExceededException extends STSServiceException {
    name = "JWTPayloadSizeExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "JWTPayloadSizeExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, JWTPayloadSizeExceededException.prototype);
    }
  };
  OutboundWebIdentityFederationDisabledException = class OutboundWebIdentityFederationDisabledException extends STSServiceException {
    name = "OutboundWebIdentityFederationDisabledException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "OutboundWebIdentityFederationDisabledException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, OutboundWebIdentityFederationDisabledException.prototype);
    }
  };
  SessionDurationEscalationException = class SessionDurationEscalationException extends STSServiceException {
    name = "SessionDurationEscalationException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "SessionDurationEscalationException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, SessionDurationEscalationException.prototype);
    }
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/schemas/schemas_0.js
var import_schema, _A = "Arn", _AKI = "AccessKeyId", _AP = "AssumedPrincipal", _AR = "AssumeRole", _ARI = "AssumedRoleId", _ARR = "AssumeRoleRequest", _ARRs = "AssumeRoleResponse", _ARRss = "AssumeRootRequest", _ARRssu = "AssumeRootResponse", _ARU = "AssumedRoleUser", _ARWSAML = "AssumeRoleWithSAML", _ARWSAMLR = "AssumeRoleWithSAMLRequest", _ARWSAMLRs = "AssumeRoleWithSAMLResponse", _ARWWI = "AssumeRoleWithWebIdentity", _ARWWIR = "AssumeRoleWithWebIdentityRequest", _ARWWIRs = "AssumeRoleWithWebIdentityResponse", _ARs = "AssumeRoot", _Ac = "Account", _Au = "Audience", _C = "Credentials", _CA = "ContextAssertion", _DAM = "DecodeAuthorizationMessage", _DAMR = "DecodeAuthorizationMessageRequest", _DAMRe = "DecodeAuthorizationMessageResponse", _DM = "DecodedMessage", _DS = "DurationSeconds", _E = "Expiration", _EI = "ExternalId", _EM = "EncodedMessage", _ETE = "ExpiredTokenException", _ETITE = "ExpiredTradeInTokenException", _FU = "FederatedUser", _FUI = "FederatedUserId", _GAKI = "GetAccessKeyInfo", _GAKIR = "GetAccessKeyInfoRequest", _GAKIRe = "GetAccessKeyInfoResponse", _GCI = "GetCallerIdentity", _GCIR = "GetCallerIdentityRequest", _GCIRe = "GetCallerIdentityResponse", _GDAT = "GetDelegatedAccessToken", _GDATR = "GetDelegatedAccessTokenRequest", _GDATRe = "GetDelegatedAccessTokenResponse", _GFT = "GetFederationToken", _GFTR = "GetFederationTokenRequest", _GFTRe = "GetFederationTokenResponse", _GST = "GetSessionToken", _GSTR = "GetSessionTokenRequest", _GSTRe = "GetSessionTokenResponse", _GWIT = "GetWebIdentityToken", _GWITR = "GetWebIdentityTokenRequest", _GWITRe = "GetWebIdentityTokenResponse", _I = "Issuer", _IAME = "InvalidAuthorizationMessageException", _IDPCEE = "IDPCommunicationErrorException", _IDPRCE = "IDPRejectedClaimException", _IITE = "InvalidIdentityTokenException", _JWTPSEE = "JWTPayloadSizeExceededException", _K = "Key", _MPDE = "MalformedPolicyDocumentException", _N = "Name", _NQ = "NameQualifier", _OWIFDE = "OutboundWebIdentityFederationDisabledException", _P = "Policy", _PA = "PolicyArns", _PAr = "PrincipalArn", _PAro = "ProviderArn", _PC = "ProvidedContexts", _PCLT = "ProvidedContextsListType", _PCr = "ProvidedContext", _PDT = "PolicyDescriptorType", _PI = "ProviderId", _PPS = "PackedPolicySize", _PPTLE = "PackedPolicyTooLargeException", _Pr = "Provider", _RA = "RoleArn", _RDE = "RegionDisabledException", _RSN = "RoleSessionName", _S = "Subject", _SA = "SigningAlgorithm", _SAK = "SecretAccessKey", _SAMLA = "SAMLAssertion", _SAMLAT = "SAMLAssertionType", _SDEE = "SessionDurationEscalationException", _SFWIT = "SubjectFromWebIdentityToken", _SI = "SourceIdentity", _SN = "SerialNumber", _ST = "SubjectType", _STe = "SessionToken", _T = "Tags", _TC = "TokenCode", _TIT = "TradeInToken", _TP = "TargetPrincipal", _TPA = "TaskPolicyArn", _TTK = "TransitiveTagKeys", _Ta = "Tag", _UI = "UserId", _V = "Value", _WIT = "WebIdentityToken", _a = "arn", _aKST = "accessKeySecretType", _aQE = "awsQueryError", _c = "client", _cTT = "clientTokenType", _e = "error", _hE = "httpError", _m = "message", _pDLT = "policyDescriptorListType", _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts", _tITT = "tradeInTokenType", _tLT = "tagListType", _wITT = "webIdentityTokenType", n0 = "com.amazonaws.sts", _s_registry, STSServiceException$, n0_registry, ExpiredTokenException$, ExpiredTradeInTokenException$, IDPCommunicationErrorException$, IDPRejectedClaimException$, InvalidAuthorizationMessageException$, InvalidIdentityTokenException$, JWTPayloadSizeExceededException$, MalformedPolicyDocumentException$, OutboundWebIdentityFederationDisabledException$, PackedPolicyTooLargeException$, RegionDisabledException$, SessionDurationEscalationException$, errorTypeRegistries, accessKeySecretType, clientTokenType, SAMLAssertionType, tradeInTokenType, webIdentityTokenType, AssumedRoleUser$, AssumeRoleRequest$, AssumeRoleResponse$, AssumeRoleWithSAMLRequest$, AssumeRoleWithSAMLResponse$, AssumeRoleWithWebIdentityRequest$, AssumeRoleWithWebIdentityResponse$, AssumeRootRequest$, AssumeRootResponse$, Credentials$, DecodeAuthorizationMessageRequest$, DecodeAuthorizationMessageResponse$, FederatedUser$, GetAccessKeyInfoRequest$, GetAccessKeyInfoResponse$, GetCallerIdentityRequest$, GetCallerIdentityResponse$, GetDelegatedAccessTokenRequest$, GetDelegatedAccessTokenResponse$, GetFederationTokenRequest$, GetFederationTokenResponse$, GetSessionTokenRequest$, GetSessionTokenResponse$, GetWebIdentityTokenRequest$, GetWebIdentityTokenResponse$, PolicyDescriptorType$, ProvidedContext$, Tag$, policyDescriptorListType, ProvidedContextsListType, tagKeyListType, tagListType, webIdentityTokenAudienceListType, AssumeRole$, AssumeRoleWithSAML$, AssumeRoleWithWebIdentity$, AssumeRoot$, DecodeAuthorizationMessage$, GetAccessKeyInfo$, GetCallerIdentity$, GetDelegatedAccessToken$, GetFederationToken$, GetSessionToken$, GetWebIdentityToken$;
var init_schemas_0 = __esm(() => {
  init_errors();
  init_STSServiceException();
  import_schema = __toESM(require_schema(), 1);
  _s_registry = import_schema.TypeRegistry.for(_s);
  STSServiceException$ = [-3, _s, "STSServiceException", 0, [], []];
  _s_registry.registerError(STSServiceException$, STSServiceException);
  n0_registry = import_schema.TypeRegistry.for(n0);
  ExpiredTokenException$ = [
    -3,
    n0,
    _ETE,
    { [_aQE]: [`ExpiredTokenException`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ExpiredTokenException$, ExpiredTokenException);
  ExpiredTradeInTokenException$ = [
    -3,
    n0,
    _ETITE,
    { [_aQE]: [`ExpiredTradeInTokenException`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ExpiredTradeInTokenException$, ExpiredTradeInTokenException);
  IDPCommunicationErrorException$ = [
    -3,
    n0,
    _IDPCEE,
    { [_aQE]: [`IDPCommunicationError`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(IDPCommunicationErrorException$, IDPCommunicationErrorException);
  IDPRejectedClaimException$ = [
    -3,
    n0,
    _IDPRCE,
    { [_aQE]: [`IDPRejectedClaim`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(IDPRejectedClaimException$, IDPRejectedClaimException);
  InvalidAuthorizationMessageException$ = [
    -3,
    n0,
    _IAME,
    { [_aQE]: [`InvalidAuthorizationMessageException`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidAuthorizationMessageException$, InvalidAuthorizationMessageException);
  InvalidIdentityTokenException$ = [
    -3,
    n0,
    _IITE,
    { [_aQE]: [`InvalidIdentityToken`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InvalidIdentityTokenException$, InvalidIdentityTokenException);
  JWTPayloadSizeExceededException$ = [
    -3,
    n0,
    _JWTPSEE,
    { [_aQE]: [`JWTPayloadSizeExceededException`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(JWTPayloadSizeExceededException$, JWTPayloadSizeExceededException);
  MalformedPolicyDocumentException$ = [
    -3,
    n0,
    _MPDE,
    { [_aQE]: [`MalformedPolicyDocument`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(MalformedPolicyDocumentException$, MalformedPolicyDocumentException);
  OutboundWebIdentityFederationDisabledException$ = [
    -3,
    n0,
    _OWIFDE,
    { [_aQE]: [`OutboundWebIdentityFederationDisabledException`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(OutboundWebIdentityFederationDisabledException$, OutboundWebIdentityFederationDisabledException);
  PackedPolicyTooLargeException$ = [
    -3,
    n0,
    _PPTLE,
    { [_aQE]: [`PackedPolicyTooLarge`, 400], [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(PackedPolicyTooLargeException$, PackedPolicyTooLargeException);
  RegionDisabledException$ = [
    -3,
    n0,
    _RDE,
    { [_aQE]: [`RegionDisabledException`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(RegionDisabledException$, RegionDisabledException);
  SessionDurationEscalationException$ = [
    -3,
    n0,
    _SDEE,
    { [_aQE]: [`SessionDurationEscalationException`, 403], [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(SessionDurationEscalationException$, SessionDurationEscalationException);
  errorTypeRegistries = [
    _s_registry,
    n0_registry
  ];
  accessKeySecretType = [0, n0, _aKST, 8, 0];
  clientTokenType = [0, n0, _cTT, 8, 0];
  SAMLAssertionType = [0, n0, _SAMLAT, 8, 0];
  tradeInTokenType = [0, n0, _tITT, 8, 0];
  webIdentityTokenType = [0, n0, _wITT, 8, 0];
  AssumedRoleUser$ = [
    3,
    n0,
    _ARU,
    0,
    [_ARI, _A],
    [0, 0],
    2
  ];
  AssumeRoleRequest$ = [
    3,
    n0,
    _ARR,
    0,
    [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
    [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType],
    2
  ];
  AssumeRoleResponse$ = [
    3,
    n0,
    _ARRs,
    0,
    [_C, _ARU, _PPS, _SI],
    [[() => Credentials$, 0], () => AssumedRoleUser$, 1, 0]
  ];
  AssumeRoleWithSAMLRequest$ = [
    3,
    n0,
    _ARWSAMLR,
    0,
    [_RA, _PAr, _SAMLA, _PA, _P, _DS],
    [0, 0, [() => SAMLAssertionType, 0], () => policyDescriptorListType, 0, 1],
    3
  ];
  AssumeRoleWithSAMLResponse$ = [
    3,
    n0,
    _ARWSAMLRs,
    0,
    [_C, _ARU, _PPS, _S, _ST, _I, _Au, _NQ, _SI],
    [[() => Credentials$, 0], () => AssumedRoleUser$, 1, 0, 0, 0, 0, 0, 0]
  ];
  AssumeRoleWithWebIdentityRequest$ = [
    3,
    n0,
    _ARWWIR,
    0,
    [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
    [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1],
    3
  ];
  AssumeRoleWithWebIdentityResponse$ = [
    3,
    n0,
    _ARWWIRs,
    0,
    [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
    [[() => Credentials$, 0], 0, () => AssumedRoleUser$, 1, 0, 0, 0]
  ];
  AssumeRootRequest$ = [
    3,
    n0,
    _ARRss,
    0,
    [_TP, _TPA, _DS],
    [0, () => PolicyDescriptorType$, 1],
    2
  ];
  AssumeRootResponse$ = [
    3,
    n0,
    _ARRssu,
    0,
    [_C, _SI],
    [[() => Credentials$, 0], 0]
  ];
  Credentials$ = [
    3,
    n0,
    _C,
    0,
    [_AKI, _SAK, _STe, _E],
    [0, [() => accessKeySecretType, 0], 0, 4],
    4
  ];
  DecodeAuthorizationMessageRequest$ = [
    3,
    n0,
    _DAMR,
    0,
    [_EM],
    [0],
    1
  ];
  DecodeAuthorizationMessageResponse$ = [
    3,
    n0,
    _DAMRe,
    0,
    [_DM],
    [0]
  ];
  FederatedUser$ = [
    3,
    n0,
    _FU,
    0,
    [_FUI, _A],
    [0, 0],
    2
  ];
  GetAccessKeyInfoRequest$ = [
    3,
    n0,
    _GAKIR,
    0,
    [_AKI],
    [0],
    1
  ];
  GetAccessKeyInfoResponse$ = [
    3,
    n0,
    _GAKIRe,
    0,
    [_Ac],
    [0]
  ];
  GetCallerIdentityRequest$ = [
    3,
    n0,
    _GCIR,
    0,
    [],
    []
  ];
  GetCallerIdentityResponse$ = [
    3,
    n0,
    _GCIRe,
    0,
    [_UI, _Ac, _A],
    [0, 0, 0]
  ];
  GetDelegatedAccessTokenRequest$ = [
    3,
    n0,
    _GDATR,
    0,
    [_TIT],
    [[() => tradeInTokenType, 0]],
    1
  ];
  GetDelegatedAccessTokenResponse$ = [
    3,
    n0,
    _GDATRe,
    0,
    [_C, _PPS, _AP],
    [[() => Credentials$, 0], 1, 0]
  ];
  GetFederationTokenRequest$ = [
    3,
    n0,
    _GFTR,
    0,
    [_N, _P, _PA, _DS, _T],
    [0, 0, () => policyDescriptorListType, 1, () => tagListType],
    1
  ];
  GetFederationTokenResponse$ = [
    3,
    n0,
    _GFTRe,
    0,
    [_C, _FU, _PPS],
    [[() => Credentials$, 0], () => FederatedUser$, 1]
  ];
  GetSessionTokenRequest$ = [
    3,
    n0,
    _GSTR,
    0,
    [_DS, _SN, _TC],
    [1, 0, 0]
  ];
  GetSessionTokenResponse$ = [
    3,
    n0,
    _GSTRe,
    0,
    [_C],
    [[() => Credentials$, 0]]
  ];
  GetWebIdentityTokenRequest$ = [
    3,
    n0,
    _GWITR,
    0,
    [_Au, _SA, _DS, _T],
    [64 | 0, 0, 1, () => tagListType],
    2
  ];
  GetWebIdentityTokenResponse$ = [
    3,
    n0,
    _GWITRe,
    0,
    [_WIT, _E],
    [[() => webIdentityTokenType, 0], 4]
  ];
  PolicyDescriptorType$ = [
    3,
    n0,
    _PDT,
    0,
    [_a],
    [0]
  ];
  ProvidedContext$ = [
    3,
    n0,
    _PCr,
    0,
    [_PAro, _CA],
    [0, 0]
  ];
  Tag$ = [
    3,
    n0,
    _Ta,
    0,
    [_K, _V],
    [0, 0],
    2
  ];
  policyDescriptorListType = [
    1,
    n0,
    _pDLT,
    0,
    () => PolicyDescriptorType$
  ];
  ProvidedContextsListType = [
    1,
    n0,
    _PCLT,
    0,
    () => ProvidedContext$
  ];
  tagKeyListType = 64 | 0;
  tagListType = [
    1,
    n0,
    _tLT,
    0,
    () => Tag$
  ];
  webIdentityTokenAudienceListType = 64 | 0;
  AssumeRole$ = [
    9,
    n0,
    _AR,
    0,
    () => AssumeRoleRequest$,
    () => AssumeRoleResponse$
  ];
  AssumeRoleWithSAML$ = [
    9,
    n0,
    _ARWSAML,
    0,
    () => AssumeRoleWithSAMLRequest$,
    () => AssumeRoleWithSAMLResponse$
  ];
  AssumeRoleWithWebIdentity$ = [
    9,
    n0,
    _ARWWI,
    0,
    () => AssumeRoleWithWebIdentityRequest$,
    () => AssumeRoleWithWebIdentityResponse$
  ];
  AssumeRoot$ = [
    9,
    n0,
    _ARs,
    0,
    () => AssumeRootRequest$,
    () => AssumeRootResponse$
  ];
  DecodeAuthorizationMessage$ = [
    9,
    n0,
    _DAM,
    0,
    () => DecodeAuthorizationMessageRequest$,
    () => DecodeAuthorizationMessageResponse$
  ];
  GetAccessKeyInfo$ = [
    9,
    n0,
    _GAKI,
    0,
    () => GetAccessKeyInfoRequest$,
    () => GetAccessKeyInfoResponse$
  ];
  GetCallerIdentity$ = [
    9,
    n0,
    _GCI,
    0,
    () => GetCallerIdentityRequest$,
    () => GetCallerIdentityResponse$
  ];
  GetDelegatedAccessToken$ = [
    9,
    n0,
    _GDAT,
    0,
    () => GetDelegatedAccessTokenRequest$,
    () => GetDelegatedAccessTokenResponse$
  ];
  GetFederationToken$ = [
    9,
    n0,
    _GFT,
    0,
    () => GetFederationTokenRequest$,
    () => GetFederationTokenResponse$
  ];
  GetSessionToken$ = [
    9,
    n0,
    _GST,
    0,
    () => GetSessionTokenRequest$,
    () => GetSessionTokenResponse$
  ];
  GetWebIdentityToken$ = [
    9,
    n0,
    _GWIT,
    0,
    () => GetWebIdentityTokenRequest$,
    () => GetWebIdentityTokenResponse$
  ];
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js
var import_httpAuthSchemes2, import_protocols, import_signature_v4_multi_region2, import_core, import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig = (config) => {
  return {
    apiVersion: "2011-06-15",
    base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
    base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new import_httpAuthSchemes2.AwsSdkSigV4Signer
      },
      {
        schemeId: "aws.auth#sigv4a",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
        signer: new import_httpAuthSchemes2.AwsSdkSigV4ASigner
      },
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new import_core.NoAuthSigner
      }
    ],
    logger: config?.logger ?? new import_smithy_client2.NoOpLogger,
    protocol: config?.protocol ?? import_protocols.AwsQueryProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.sts",
      errorTypeRegistries,
      xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
      version: "2011-06-15",
      serviceTarget: "AWSSecurityTokenServiceV20110615"
    },
    serviceId: config?.serviceId ?? "STS",
    signerConstructor: config?.signerConstructor ?? import_signature_v4_multi_region2.SignatureV4MultiRegion,
    urlParser: config?.urlParser ?? import_url_parser.parseUrl,
    utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
  };
};
var init_runtimeConfig_shared = __esm(() => {
  init_httpAuthSchemeProvider();
  init_endpointResolver();
  init_schemas_0();
  import_httpAuthSchemes2 = __toESM(require_httpAuthSchemes(), 1);
  import_protocols = __toESM(require_protocols(), 1);
  import_signature_v4_multi_region2 = __toESM(require_dist_cjs26(), 1);
  import_core = __toESM(require_dist_cjs10(), 1);
  import_smithy_client2 = __toESM(require_dist_cjs9(), 1);
  import_url_parser = __toESM(require_dist_cjs4(), 1);
  import_util_base64 = __toESM(require_dist_cjs8(), 1);
  import_util_utf8 = __toESM(require_dist_cjs7(), 1);
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
var import_client, import_httpAuthSchemes3, import_util_user_agent_node, import_config_resolver, import_core2, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2 = (config) => {
  import_smithy_client3.emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = import_util_defaults_mode_node.resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(import_smithy_client3.loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  import_client.emitWarningIfUnsupportedVersion(process.version);
  const loaderConfig = {
    profile: config?.profile,
    logger: clientSharedValues.logger
  };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    authSchemePreference: config?.authSchemePreference ?? import_node_config_provider.loadConfig(import_httpAuthSchemes3.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
    bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node.calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? import_util_user_agent_node.createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await defaultProvider(idProps?.__config || {})()),
        signer: new import_httpAuthSchemes3.AwsSdkSigV4Signer
      },
      {
        schemeId: "aws.auth#sigv4a",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
        signer: new import_httpAuthSchemes3.AwsSdkSigV4ASigner
      },
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new import_core2.NoAuthSigner
      }
    ],
    maxAttempts: config?.maxAttempts ?? import_node_config_provider.loadConfig(import_middleware_retry.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    region: config?.region ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_REGION_CONFIG_OPTIONS, { ...import_config_resolver.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
    requestHandler: import_node_http_handler.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? import_node_config_provider.loadConfig({
      ...import_middleware_retry.NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || import_util_retry.DEFAULT_RETRY_MODE
    }, config),
    sha256: config?.sha256 ?? import_hash_node.Hash.bind(null, "sha256"),
    sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? import_node_config_provider.loadConfig(import_httpAuthSchemes3.NODE_SIGV4A_CONFIG_OPTIONS, loaderConfig),
    streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    useFipsEndpoint: config?.useFipsEndpoint ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    userAgentAppId: config?.userAgentAppId ?? import_node_config_provider.loadConfig(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
  };
};
var init_runtimeConfig = __esm(() => {
  init_package();
  init_dist_es();
  init_runtimeConfig_shared();
  import_client = __toESM(require_client(), 1);
  import_httpAuthSchemes3 = __toESM(require_httpAuthSchemes(), 1);
  import_util_user_agent_node = __toESM(require_dist_cjs21(), 1);
  import_config_resolver = __toESM(require_dist_cjs17(), 1);
  import_core2 = __toESM(require_dist_cjs10(), 1);
  import_hash_node = __toESM(require_dist_cjs22(), 1);
  import_middleware_retry = __toESM(require_dist_cjs20(), 1);
  import_node_config_provider = __toESM(require_dist_cjs3(), 1);
  import_node_http_handler = __toESM(require_dist_cjs5(), 1);
  import_smithy_client3 = __toESM(require_dist_cjs9(), 1);
  import_util_body_length_node = __toESM(require_dist_cjs23(), 1);
  import_util_defaults_mode_node = __toESM(require_dist_cjs24(), 1);
  import_util_retry = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthExtensionConfiguration.js
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
}, resolveHttpAuthRuntimeConfig = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
};
var init_httpAuthExtensionConfiguration = () => {};

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(import_region_config_resolver.getAwsRegionExtensionConfiguration(runtimeConfig), import_smithy_client4.getDefaultExtensionConfiguration(runtimeConfig), import_protocol_http.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, import_region_config_resolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), import_smithy_client4.resolveDefaultRuntimeConfig(extensionConfiguration), import_protocol_http.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};
var init_runtimeExtensions = __esm(() => {
  init_httpAuthExtensionConfiguration();
  import_region_config_resolver = __toESM(require_dist_cjs25(), 1);
  import_protocol_http = __toESM(require_dist_cjs(), 1);
  import_smithy_client4 = __toESM(require_dist_cjs9(), 1);
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/STSClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_core3, import_schema2, import_middleware_content_length, import_middleware_endpoint2, import_middleware_retry2, import_smithy_client5, STSClient;
var init_STSClient = __esm(() => {
  init_httpAuthSchemeProvider();
  init_EndpointParameters();
  init_runtimeConfig();
  init_runtimeExtensions();
  import_middleware_host_header = __toESM(require_dist_cjs11(), 1);
  import_middleware_logger = __toESM(require_dist_cjs12(), 1);
  import_middleware_recursion_detection = __toESM(require_dist_cjs13(), 1);
  import_middleware_user_agent = __toESM(require_dist_cjs16(), 1);
  import_config_resolver2 = __toESM(require_dist_cjs17(), 1);
  import_core3 = __toESM(require_dist_cjs10(), 1);
  import_schema2 = __toESM(require_schema(), 1);
  import_middleware_content_length = __toESM(require_dist_cjs18(), 1);
  import_middleware_endpoint2 = __toESM(require_dist_cjs19(), 1);
  import_middleware_retry2 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client5 = __toESM(require_dist_cjs9(), 1);
  STSClient = class STSClient extends import_smithy_client5.Client {
    config;
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig2(configuration || {});
      super(_config_0);
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters(_config_0);
      const _config_2 = import_middleware_user_agent.resolveUserAgentConfig(_config_1);
      const _config_3 = import_middleware_retry2.resolveRetryConfig(_config_2);
      const _config_4 = import_config_resolver2.resolveRegionConfig(_config_3);
      const _config_5 = import_middleware_host_header.resolveHostHeaderConfig(_config_4);
      const _config_6 = import_middleware_endpoint2.resolveEndpointConfig(_config_5);
      const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
      const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
      this.config = _config_8;
      this.middlewareStack.use(import_schema2.getSchemaSerdePlugin(this.config));
      this.middlewareStack.use(import_middleware_user_agent.getUserAgentPlugin(this.config));
      this.middlewareStack.use(import_middleware_retry2.getRetryPlugin(this.config));
      this.middlewareStack.use(import_middleware_content_length.getContentLengthPlugin(this.config));
      this.middlewareStack.use(import_middleware_host_header.getHostHeaderPlugin(this.config));
      this.middlewareStack.use(import_middleware_logger.getLoggerPlugin(this.config));
      this.middlewareStack.use(import_middleware_recursion_detection.getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(import_core3.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new import_core3.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials,
          "aws.auth#sigv4a": config.credentials
        })
      }));
      this.middlewareStack.use(import_core3.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js
var import_middleware_endpoint3, import_smithy_client6, AssumeRoleCommand;
var init_AssumeRoleCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint3 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client6 = __toESM(require_dist_cjs9(), 1);
  AssumeRoleCommand = class AssumeRoleCommand extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint3.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(AssumeRole$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithSAMLCommand.js
var import_middleware_endpoint4, import_smithy_client7, AssumeRoleWithSAMLCommand;
var init_AssumeRoleWithSAMLCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint4 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client7 = __toESM(require_dist_cjs9(), 1);
  AssumeRoleWithSAMLCommand = class AssumeRoleWithSAMLCommand extends import_smithy_client7.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint4.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").sc(AssumeRoleWithSAML$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js
var import_middleware_endpoint5, import_smithy_client8, AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint5 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client8 = __toESM(require_dist_cjs9(), 1);
  AssumeRoleWithWebIdentityCommand = class AssumeRoleWithWebIdentityCommand extends import_smithy_client8.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint5.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(AssumeRoleWithWebIdentity$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRootCommand.js
var import_middleware_endpoint6, import_smithy_client9, AssumeRootCommand;
var init_AssumeRootCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint6 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client9 = __toESM(require_dist_cjs9(), 1);
  AssumeRootCommand = class AssumeRootCommand extends import_smithy_client9.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint6.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {}).n("STSClient", "AssumeRootCommand").sc(AssumeRoot$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/DecodeAuthorizationMessageCommand.js
var import_middleware_endpoint7, import_smithy_client10, DecodeAuthorizationMessageCommand;
var init_DecodeAuthorizationMessageCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint7 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client10 = __toESM(require_dist_cjs9(), 1);
  DecodeAuthorizationMessageCommand = class DecodeAuthorizationMessageCommand extends import_smithy_client10.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint7.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").sc(DecodeAuthorizationMessage$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/GetAccessKeyInfoCommand.js
var import_middleware_endpoint8, import_smithy_client11, GetAccessKeyInfoCommand;
var init_GetAccessKeyInfoCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint8 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client11 = __toESM(require_dist_cjs9(), 1);
  GetAccessKeyInfoCommand = class GetAccessKeyInfoCommand extends import_smithy_client11.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint8.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").sc(GetAccessKeyInfo$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/GetCallerIdentityCommand.js
var import_middleware_endpoint9, import_smithy_client12, GetCallerIdentityCommand;
var init_GetCallerIdentityCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint9 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client12 = __toESM(require_dist_cjs9(), 1);
  GetCallerIdentityCommand = class GetCallerIdentityCommand extends import_smithy_client12.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint9.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").sc(GetCallerIdentity$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/GetDelegatedAccessTokenCommand.js
var import_middleware_endpoint10, import_smithy_client13, GetDelegatedAccessTokenCommand;
var init_GetDelegatedAccessTokenCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint10 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client13 = __toESM(require_dist_cjs9(), 1);
  GetDelegatedAccessTokenCommand = class GetDelegatedAccessTokenCommand extends import_smithy_client13.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint10.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetDelegatedAccessToken", {}).n("STSClient", "GetDelegatedAccessTokenCommand").sc(GetDelegatedAccessToken$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/GetFederationTokenCommand.js
var import_middleware_endpoint11, import_smithy_client14, GetFederationTokenCommand;
var init_GetFederationTokenCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint11 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client14 = __toESM(require_dist_cjs9(), 1);
  GetFederationTokenCommand = class GetFederationTokenCommand extends import_smithy_client14.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint11.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").sc(GetFederationToken$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/GetSessionTokenCommand.js
var import_middleware_endpoint12, import_smithy_client15, GetSessionTokenCommand;
var init_GetSessionTokenCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint12 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client15 = __toESM(require_dist_cjs9(), 1);
  GetSessionTokenCommand = class GetSessionTokenCommand extends import_smithy_client15.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint12.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").sc(GetSessionToken$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/GetWebIdentityTokenCommand.js
var import_middleware_endpoint13, import_smithy_client16, GetWebIdentityTokenCommand;
var init_GetWebIdentityTokenCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint13 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client16 = __toESM(require_dist_cjs9(), 1);
  GetWebIdentityTokenCommand = class GetWebIdentityTokenCommand extends import_smithy_client16.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
    return [import_middleware_endpoint13.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetWebIdentityToken", {}).n("STSClient", "GetWebIdentityTokenCommand").sc(GetWebIdentityToken$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/STS.js
var import_smithy_client17, commands, STS;
var init_STS = __esm(() => {
  init_AssumeRoleCommand();
  init_AssumeRoleWithSAMLCommand();
  init_AssumeRoleWithWebIdentityCommand();
  init_AssumeRootCommand();
  init_DecodeAuthorizationMessageCommand();
  init_GetAccessKeyInfoCommand();
  init_GetCallerIdentityCommand();
  init_GetDelegatedAccessTokenCommand();
  init_GetFederationTokenCommand();
  init_GetSessionTokenCommand();
  init_GetWebIdentityTokenCommand();
  init_STSClient();
  import_smithy_client17 = __toESM(require_dist_cjs9(), 1);
  commands = {
    AssumeRoleCommand,
    AssumeRoleWithSAMLCommand,
    AssumeRoleWithWebIdentityCommand,
    AssumeRootCommand,
    DecodeAuthorizationMessageCommand,
    GetAccessKeyInfoCommand,
    GetCallerIdentityCommand,
    GetDelegatedAccessTokenCommand,
    GetFederationTokenCommand,
    GetSessionTokenCommand,
    GetWebIdentityTokenCommand
  };
  STS = class STS extends STSClient {
  };
  import_smithy_client17.createAggregatedClient(commands, STS);
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/commands/index.js
var init_commands = __esm(() => {
  init_AssumeRoleCommand();
  init_AssumeRoleWithSAMLCommand();
  init_AssumeRoleWithWebIdentityCommand();
  init_AssumeRootCommand();
  init_DecodeAuthorizationMessageCommand();
  init_GetAccessKeyInfoCommand();
  init_GetCallerIdentityCommand();
  init_GetDelegatedAccessTokenCommand();
  init_GetFederationTokenCommand();
  init_GetSessionTokenCommand();
  init_GetWebIdentityTokenCommand();
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js
var init_models_0 = () => {};

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js
var import_client2, import_region_config_resolver2, getAccountIdFromAssumedRoleUser = (assumedRoleUser) => {
  if (typeof assumedRoleUser?.Arn === "string") {
    const arnComponents = assumedRoleUser.Arn.split(":");
    if (arnComponents.length > 4 && arnComponents[4] !== "") {
      return arnComponents[4];
    }
  }
  return;
}, resolveRegion = async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {}) => {
  const region = typeof _region === "function" ? await _region() : _region;
  const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
  let stsDefaultRegion = "";
  const resolvedRegion = region ?? parentRegion ?? (stsDefaultRegion = await import_region_config_resolver2.stsRegionDefaultResolver(loaderConfig)());
  credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
  return resolvedRegion;
}, getDefaultRoleAssumer = (stsOptions, STSClient2) => {
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
    import_client2.setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
    return credentials;
  };
}, getDefaultRoleAssumerWithWebIdentity = (stsOptions, STSClient2) => {
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
      import_client2.setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
    }
    import_client2.setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
    return credentials;
  };
}, isH2 = (requestHandler) => {
  return requestHandler?.metadata?.handlerProtocol === "h2";
};
var init_defaultStsRoleAssumers = __esm(() => {
  init_AssumeRoleCommand();
  init_AssumeRoleWithWebIdentityCommand();
  import_client2 = __toESM(require_client(), 1);
  import_region_config_resolver2 = __toESM(require_dist_cjs25(), 1);
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js
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
}, getDefaultRoleAssumer2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), getDefaultRoleAssumerWithWebIdentity2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), decorateDefaultCredentialProvider = (provider) => (input) => provider({
  roleAssumer: getDefaultRoleAssumer2(input),
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
  ...input
});
var init_defaultRoleAssumers = __esm(() => {
  init_defaultStsRoleAssumers();
  init_STSClient();
});

// node_modules/.bun/@aws-sdk+client-sts@3.1037.0/node_modules/@aws-sdk/client-sts/dist-es/index.js
var init_dist_es2 = __esm(() => {
  init_STSServiceException();
  init_STSClient();
  init_STS();
  init_commands();
  init_schemas_0();
  init_errors();
  init_models_0();
  init_defaultRoleAssumers();
});
init_dist_es2();
var export___Client = import_smithy_client5.Client;

export {
  getDefaultRoleAssumerWithWebIdentity2 as getDefaultRoleAssumerWithWebIdentity,
  getDefaultRoleAssumer2 as getDefaultRoleAssumer,
  errorTypeRegistries,
  decorateDefaultCredentialProvider,
  export___Client as __Client,
  Tag$,
  SessionDurationEscalationException$,
  SessionDurationEscalationException,
  STSServiceException$,
  STSServiceException,
  STSClient,
  STS,
  RegionDisabledException$,
  RegionDisabledException,
  ProvidedContext$,
  PolicyDescriptorType$,
  PackedPolicyTooLargeException$,
  PackedPolicyTooLargeException,
  OutboundWebIdentityFederationDisabledException$,
  OutboundWebIdentityFederationDisabledException,
  MalformedPolicyDocumentException$,
  MalformedPolicyDocumentException,
  JWTPayloadSizeExceededException$,
  JWTPayloadSizeExceededException,
  InvalidIdentityTokenException$,
  InvalidIdentityTokenException,
  InvalidAuthorizationMessageException$,
  InvalidAuthorizationMessageException,
  IDPRejectedClaimException$,
  IDPRejectedClaimException,
  IDPCommunicationErrorException$,
  IDPCommunicationErrorException,
  GetWebIdentityTokenResponse$,
  GetWebIdentityTokenRequest$,
  GetWebIdentityTokenCommand,
  GetWebIdentityToken$,
  GetSessionTokenResponse$,
  GetSessionTokenRequest$,
  GetSessionTokenCommand,
  GetSessionToken$,
  GetFederationTokenResponse$,
  GetFederationTokenRequest$,
  GetFederationTokenCommand,
  GetFederationToken$,
  GetDelegatedAccessTokenResponse$,
  GetDelegatedAccessTokenRequest$,
  GetDelegatedAccessTokenCommand,
  GetDelegatedAccessToken$,
  GetCallerIdentityResponse$,
  GetCallerIdentityRequest$,
  GetCallerIdentityCommand,
  GetCallerIdentity$,
  GetAccessKeyInfoResponse$,
  GetAccessKeyInfoRequest$,
  GetAccessKeyInfoCommand,
  GetAccessKeyInfo$,
  FederatedUser$,
  ExpiredTradeInTokenException$,
  ExpiredTradeInTokenException,
  ExpiredTokenException$,
  ExpiredTokenException,
  DecodeAuthorizationMessageResponse$,
  DecodeAuthorizationMessageRequest$,
  DecodeAuthorizationMessageCommand,
  DecodeAuthorizationMessage$,
  Credentials$,
  AssumedRoleUser$,
  AssumeRootResponse$,
  AssumeRootRequest$,
  AssumeRootCommand,
  AssumeRoot$,
  AssumeRoleWithWebIdentityResponse$,
  AssumeRoleWithWebIdentityRequest$,
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentity$,
  AssumeRoleWithSAMLResponse$,
  AssumeRoleWithSAMLRequest$,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithSAML$,
  AssumeRoleResponse$,
  AssumeRoleRequest$,
  AssumeRoleCommand,
  AssumeRole$
};
