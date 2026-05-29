// @bun
import {
  fromEnvSigningName,
  init_dist_es as init_dist_es2,
  nodeProvider
} from "./chunk-4jecp5fr.js";
import {
  defaultProvider,
  init_dist_es
} from "./chunk-8b5a0z0t.js";
import"./chunk-fz59axqr.js";
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

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "bedrock",
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
function createSmithyApiHttpBearerAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: ({ profile, filepath, configFilepath, ignoreCache }, context) => ({
      identityProperties: {
        profile,
        filepath,
        configFilepath,
        ignoreCache
      }
    })
  };
}
var import_httpAuthSchemes, import_core, import_util_middleware, defaultBedrockHttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: import_util_middleware.getSmithyContext(context).operation,
    region: await import_util_middleware.normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, defaultBedrockHttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
    }
  }
  return options;
}, resolveHttpAuthSchemeConfig = (config) => {
  const token = import_core.memoizeIdentityProvider(config.token, import_core.isIdentityExpired, import_core.doesIdentityRequireRefresh);
  const config_0 = import_httpAuthSchemes.resolveAwsSdkSigV4Config(config);
  return Object.assign(config_0, {
    authSchemePreference: import_util_middleware.normalizeProvider(config.authSchemePreference ?? []),
    token
  });
};
var init_httpAuthSchemeProvider = __esm(() => {
  import_httpAuthSchemes = __toESM(require_httpAuthSchemes(), 1);
  import_core = __toESM(require_dist_cjs10(), 1);
  import_util_middleware = __toESM(require_dist_cjs6(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "bedrock"
  });
}, commonParams;
var init_EndpointParameters = __esm(() => {
  commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/package.json
var package_default;
var init_package = __esm(() => {
  package_default = {
    name: "@aws-sdk/client-bedrock",
    description: "AWS SDK for JavaScript Bedrock Client for Node.js, Browser and React Native",
    version: "3.1037.0",
    scripts: {
      build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
      "build:cjs": "node ../../scripts/compilation/inline client-bedrock",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock",
      "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"
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
      "@aws-sdk/token-providers": "3.1037.0",
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
      "@tsconfig/node20": "20.1.8",
      "@types/node": "^20.14.8",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      premove: "4.0.0",
      typescript: "~5.8.3"
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
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-bedrock"
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/endpoint/bdd.js
var import_util_endpoints, k = "ref", a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "getAttr", g, h, i, j, _data, root = 2, r = 1e8, nodes, bdd;
var init_bdd = __esm(() => {
  import_util_endpoints = __toESM(require_dist_cjs14(), 1);
  g = { [k]: "Endpoint" };
  h = { [k]: d };
  i = {};
  j = [{ [k]: "Region" }];
  _data = {
    conditions: [
      [c, [g]],
      [c, j],
      ["aws.partition", j, d],
      [e, [{ [k]: "UseFIPS" }, b]],
      [e, [{ [k]: "UseDualStack" }, b]],
      [e, [{ fn: f, argv: [h, "supportsDualStack"] }, b]],
      [e, [{ fn: f, argv: [h, "supportsFIPS"] }, b]]
    ],
    results: [
      [a],
      [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [g, i],
      ["https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
      [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}", i],
      [a, "FIPS is enabled but this partition does not support FIPS"],
      ["https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
      [a, "DualStack is enabled but this partition does not support DualStack"],
      ["https://bedrock.{Region}.{PartitionResult#dnsSuffix}", i],
      [a, "Invalid Configuration: Missing Region"]
    ]
  };
  nodes = new Int32Array([
    -1,
    1,
    -1,
    0,
    12,
    3,
    1,
    4,
    r + 11,
    2,
    5,
    r + 11,
    3,
    8,
    6,
    4,
    7,
    r + 10,
    5,
    r + 8,
    r + 9,
    4,
    10,
    9,
    6,
    r + 6,
    r + 7,
    5,
    11,
    r + 5,
    6,
    r + 4,
    r + 5,
    3,
    r + 1,
    13,
    4,
    r + 2,
    r + 3
  ]);
  bdd = import_util_endpoints.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/endpoint/endpointResolver.js
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
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  });
  import_util_endpoints3.customEndpointFunctions.aws = import_util_endpoints2.awsEndpointFunctions;
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/models/BedrockServiceException.js
var import_smithy_client, BedrockServiceException;
var init_BedrockServiceException = __esm(() => {
  import_smithy_client = __toESM(require_dist_cjs9(), 1);
  BedrockServiceException = class BedrockServiceException extends import_smithy_client.ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, BedrockServiceException.prototype);
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/models/errors.js
var AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException, ConflictException, ServiceQuotaExceededException, TooManyTagsException, ResourceInUseException, ServiceUnavailableException;
var init_errors = __esm(() => {
  init_BedrockServiceException();
  AccessDeniedException = class AccessDeniedException extends BedrockServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
  };
  InternalServerException = class InternalServerException extends BedrockServiceException {
    name = "InternalServerException";
    $fault = "server";
    constructor(opts) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, InternalServerException.prototype);
    }
  };
  ResourceNotFoundException = class ResourceNotFoundException extends BedrockServiceException {
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
  };
  ThrottlingException = class ThrottlingException extends BedrockServiceException {
    name = "ThrottlingException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ThrottlingException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ThrottlingException.prototype);
    }
  };
  ValidationException = class ValidationException extends BedrockServiceException {
    name = "ValidationException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ValidationException.prototype);
    }
  };
  ConflictException = class ConflictException extends BedrockServiceException {
    name = "ConflictException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ConflictException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ConflictException.prototype);
    }
  };
  ServiceQuotaExceededException = class ServiceQuotaExceededException extends BedrockServiceException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ServiceQuotaExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    }
  };
  TooManyTagsException = class TooManyTagsException extends BedrockServiceException {
    name = "TooManyTagsException";
    $fault = "client";
    resourceName;
    constructor(opts) {
      super({
        name: "TooManyTagsException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, TooManyTagsException.prototype);
      this.resourceName = opts.resourceName;
    }
  };
  ResourceInUseException = class ResourceInUseException extends BedrockServiceException {
    name = "ResourceInUseException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ResourceInUseException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
  };
  ServiceUnavailableException = class ServiceUnavailableException extends BedrockServiceException {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(opts) {
      super({
        name: "ServiceUnavailableException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/schemas/schemas_0.js
var import_schema, _AA = "AgreementAvailability", _ADE = "AccessDeniedException", _AEC = "AutomatedEvaluationConfig", _AECM = "AutomatedEvaluationCustomMetrics", _AECMC = "AutomatedEvaluationCustomMetricConfig", _AECMS = "AutomatedEvaluationCustomMetricSource", _AEGIIC = "AccountEnforcedGuardrailInferenceInputConfiguration", _AEGOC = "AccountEnforcedGuardrailOutputConfiguration", _AEGOCc = "AccountEnforcedGuardrailsOutputConfiguration", _ARCDSL = "AutomatedReasoningCheckDifferenceScenarioList", _ARCF = "AutomatedReasoningCheckFinding", _ARCFL = "AutomatedReasoningCheckFindingList", _ARCIF = "AutomatedReasoningCheckImpossibleFinding", _ARCIFu = "AutomatedReasoningCheckInvalidFinding", _ARCITR = "AutomatedReasoningCheckInputTextReference", _ARCITRL = "AutomatedReasoningCheckInputTextReferenceList", _ARCLW = "AutomatedReasoningCheckLogicWarning", _ARCNTF = "AutomatedReasoningCheckNoTranslationsFinding", _ARCR = "AutomatedReasoningCheckRule", _ARCRL = "AutomatedReasoningCheckRuleList", _ARCS = "AutomatedReasoningCheckScenario", _ARCSF = "AutomatedReasoningCheckSatisfiableFinding", _ARCT = "AutomatedReasoningCheckTranslation", _ARCTAF = "AutomatedReasoningCheckTranslationAmbiguousFinding", _ARCTCF = "AutomatedReasoningCheckTooComplexFinding", _ARCTL = "AutomatedReasoningCheckTranslationList", _ARCTO = "AutomatedReasoningCheckTranslationOption", _ARCTOL = "AutomatedReasoningCheckTranslationOptionList", _ARCVF = "AutomatedReasoningCheckValidFinding", _ARLS = "AutomatedReasoningLogicStatement", _ARLSC = "AutomatedReasoningLogicStatementContent", _ARLSL = "AutomatedReasoningLogicStatementList", _ARNLSC = "AutomatedReasoningNaturalLanguageStatementContent", _ARPA = "AutomatedReasoningPolicyAnnotation", _ARPAC = "AutomatedReasoningPolicyAnnotatedChunk", _ARPACL = "AutomatedReasoningPolicyAnnotatedChunkList", _ARPACLu = "AutomatedReasoningPolicyAnnotatedContentList", _ARPACu = "AutomatedReasoningPolicyAnnotatedContent", _ARPAFNL = "AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage", _ARPAIC = "AutomatedReasoningPolicyAnnotationIngestContent", _ARPAL = "AutomatedReasoningPolicyAnnotatedLine", _ARPALu = "AutomatedReasoningPolicyAnnotationList", _ARPARA = "AutomatedReasoningPolicyAddRuleAnnotation", _ARPARFNLA = "AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation", _ARPARM = "AutomatedReasoningPolicyAddRuleMutation", _ARPARNL = "AutomatedReasoningPolicyAnnotationRuleNaturalLanguage", _ARPAS = "AutomatedReasoningPolicyAtomicStatement", _ARPASL = "AutomatedReasoningPolicyAtomicStatementList", _ARPATA = "AutomatedReasoningPolicyAddTypeAnnotation", _ARPATM = "AutomatedReasoningPolicyAddTypeMutation", _ARPATV = "AutomatedReasoningPolicyAddTypeValue", _ARPAVA = "AutomatedReasoningPolicyAddVariableAnnotation", _ARPAVM = "AutomatedReasoningPolicyAddVariableMutation", _ARPBDB = "AutomatedReasoningPolicyBuildDocumentBlob", _ARPBDD = "AutomatedReasoningPolicyBuildDocumentDescription", _ARPBDN = "AutomatedReasoningPolicyBuildDocumentName", _ARPBL = "AutomatedReasoningPolicyBuildLog", _ARPBLE = "AutomatedReasoningPolicyBuildLogEntry", _ARPBLEL = "AutomatedReasoningPolicyBuildLogEntryList", _ARPBRA = "AutomatedReasoningPolicyBuildResultAssets", _ARPBRAM = "AutomatedReasoningPolicyBuildResultAssetManifest", _ARPBRAME = "AutomatedReasoningPolicyBuildResultAssetManifestEntry", _ARPBRAML = "AutomatedReasoningPolicyBuildResultAssetManifestList", _ARPBRAN = "AutomatedReasoningPolicyBuildResultAssetName", _ARPBS = "AutomatedReasoningPolicyBuildStep", _ARPBSC = "AutomatedReasoningPolicyBuildStepContext", _ARPBSL = "AutomatedReasoningPolicyBuildStepList", _ARPBSM = "AutomatedReasoningPolicyBuildStepMessage", _ARPBSML = "AutomatedReasoningPolicyBuildStepMessageList", _ARPBWD = "AutomatedReasoningPolicyBuildWorkflowDocument", _ARPBWDL = "AutomatedReasoningPolicyBuildWorkflowDocumentList", _ARPBWRC = "AutomatedReasoningPolicyBuildWorkflowRepairContent", _ARPBWS = "AutomatedReasoningPolicyBuildWorkflowSource", _ARPBWSu = "AutomatedReasoningPolicyBuildWorkflowSummary", _ARPBWSut = "AutomatedReasoningPolicyBuildWorkflowSummaries", _ARPD = "AutomatedReasoningPolicyDescription", _ARPDE = "AutomatedReasoningPolicyDefinitionElement", _ARPDQR = "AutomatedReasoningPolicyDefinitionQualityReport", _ARPDR = "AutomatedReasoningPolicyDefinitionRule", _ARPDRA = "AutomatedReasoningPolicyDeleteRuleAnnotation", _ARPDRAE = "AutomatedReasoningPolicyDefinitionRuleAlternateExpression", _ARPDRE = "AutomatedReasoningPolicyDefinitionRuleExpression", _ARPDRL = "AutomatedReasoningPolicyDefinitionRuleList", _ARPDRM = "AutomatedReasoningPolicyDeleteRuleMutation", _ARPDRS = "AutomatedReasoningPolicyDisjointRuleSet", _ARPDRSL = "AutomatedReasoningPolicyDisjointRuleSetList", _ARPDT = "AutomatedReasoningPolicyDefinitionType", _ARPDTA = "AutomatedReasoningPolicyDeleteTypeAnnotation", _ARPDTD = "AutomatedReasoningPolicyDefinitionTypeDescription", _ARPDTL = "AutomatedReasoningPolicyDefinitionTypeList", _ARPDTM = "AutomatedReasoningPolicyDeleteTypeMutation", _ARPDTN = "AutomatedReasoningPolicyDefinitionTypeName", _ARPDTNL = "AutomatedReasoningPolicyDefinitionTypeNameList", _ARPDTV = "AutomatedReasoningPolicyDefinitionTypeValue", _ARPDTVD = "AutomatedReasoningPolicyDefinitionTypeValueDescription", _ARPDTVL = "AutomatedReasoningPolicyDefinitionTypeValueList", _ARPDTVP = "AutomatedReasoningPolicyDefinitionTypeValuePair", _ARPDTVPL = "AutomatedReasoningPolicyDefinitionTypeValuePairList", _ARPDTVu = "AutomatedReasoningPolicyDeleteTypeValue", _ARPDV = "AutomatedReasoningPolicyDefinitionVariable", _ARPDVA = "AutomatedReasoningPolicyDeleteVariableAnnotation", _ARPDVD = "AutomatedReasoningPolicyDefinitionVariableDescription", _ARPDVL = "AutomatedReasoningPolicyDefinitionVariableList", _ARPDVM = "AutomatedReasoningPolicyDeleteVariableMutation", _ARPDVN = "AutomatedReasoningPolicyDefinitionVariableName", _ARPDVNL = "AutomatedReasoningPolicyDefinitionVariableNameList", _ARPDu = "AutomatedReasoningPolicyDefinition", _ARPFR = "AutomatedReasoningPolicyFidelityReport", _ARPGFRC = "AutomatedReasoningPolicyGenerateFidelityReportContent", _ARPGFRDL = "AutomatedReasoningPolicyGenerateFidelityReportDocumentList", _ARPGTC = "AutomatedReasoningPolicyGeneratedTestCase", _ARPGTCL = "AutomatedReasoningPolicyGeneratedTestCaseList", _ARPGTCu = "AutomatedReasoningPolicyGeneratedTestCases", _ARPICA = "AutomatedReasoningPolicyIngestContentAnnotation", _ARPJL = "AutomatedReasoningPolicyJustificationList", _ARPJT = "AutomatedReasoningPolicyJustificationText", _ARPLT = "AutomatedReasoningPolicyLineText", _ARPM = "AutomatedReasoningPolicyMutation", _ARPN = "AutomatedReasoningPolicyName", _ARPP = "AutomatedReasoningPolicyPlanning", _ARPRR = "AutomatedReasoningPolicyRuleReport", _ARPRRM = "AutomatedReasoningPolicyRuleReportMap", _ARPRSD = "AutomatedReasoningPolicyReportSourceDocument", _ARPRSDL = "AutomatedReasoningPolicyReportSourceDocumentList", _ARPS = "AutomatedReasoningPolicyScenario", _ARPSAE = "AutomatedReasoningPolicyScenarioAlternateExpression", _ARPSD = "AutomatedReasoningPolicySourceDocument", _ARPSE = "AutomatedReasoningPolicyScenarioExpression", _ARPSL = "AutomatedReasoningPolicyStatementLocation", _ARPSLu = "AutomatedReasoningPolicyScenarioList", _ARPSR = "AutomatedReasoningPolicyStatementReference", _ARPSRL = "AutomatedReasoningPolicyStatementReferenceList", _ARPST = "AutomatedReasoningPolicyStatementText", _ARPSu = "AutomatedReasoningPolicyScenarios", _ARPSut = "AutomatedReasoningPolicySummary", _ARPSuto = "AutomatedReasoningPolicySummaries", _ARPTC = "AutomatedReasoningPolicyTestCase", _ARPTCL = "AutomatedReasoningPolicyTestCaseList", _ARPTGC = "AutomatedReasoningPolicyTestGuardContent", _ARPTL = "AutomatedReasoningPolicyTestList", _ARPTQC = "AutomatedReasoningPolicyTestQueryContent", _ARPTR = "AutomatedReasoningPolicyTestResult", _ARPTVA = "AutomatedReasoningPolicyTypeValueAnnotation", _ARPTVAL = "AutomatedReasoningPolicyTypeValueAnnotationList", _ARPUFRFA = "AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation", _ARPUFSFA = "AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation", _ARPURA = "AutomatedReasoningPolicyUpdateRuleAnnotation", _ARPURM = "AutomatedReasoningPolicyUpdateRuleMutation", _ARPUTA = "AutomatedReasoningPolicyUpdateTypeAnnotation", _ARPUTM = "AutomatedReasoningPolicyUpdateTypeMutation", _ARPUTV = "AutomatedReasoningPolicyUpdateTypeValue", _ARPUVA = "AutomatedReasoningPolicyUpdateVariableAnnotation", _ARPUVM = "AutomatedReasoningPolicyUpdateVariableMutation", _ARPVR = "AutomatedReasoningPolicyVariableReport", _ARPVRM = "AutomatedReasoningPolicyVariableReportMap", _ARPWTC = "AutomatedReasoningPolicyWorkflowTypeContent", _BCB = "ByteContentBlob", _BCD = "ByteContentDoc", _BDEJ = "BatchDeleteEvaluationJob", _BDEJE = "BatchDeleteEvaluationJobError", _BDEJEa = "BatchDeleteEvaluationJobErrors", _BDEJI = "BatchDeleteEvaluationJobItem", _BDEJIa = "BatchDeleteEvaluationJobItems", _BDEJR = "BatchDeleteEvaluationJobRequest", _BDEJRa = "BatchDeleteEvaluationJobResponse", _BEM = "BedrockEvaluatorModel", _BEMe = "BedrockEvaluatorModels", _CARP = "CreateAutomatedReasoningPolicy", _CARPBW = "CancelAutomatedReasoningPolicyBuildWorkflow", _CARPBWR = "CancelAutomatedReasoningPolicyBuildWorkflowRequest", _CARPBWRa = "CancelAutomatedReasoningPolicyBuildWorkflowResponse", _CARPR = "CreateAutomatedReasoningPolicyRequest", _CARPRr = "CreateAutomatedReasoningPolicyResponse", _CARPTC = "CreateAutomatedReasoningPolicyTestCase", _CARPTCR = "CreateAutomatedReasoningPolicyTestCaseRequest", _CARPTCRr = "CreateAutomatedReasoningPolicyTestCaseResponse", _CARPV = "CreateAutomatedReasoningPolicyVersion", _CARPVR = "CreateAutomatedReasoningPolicyVersionRequest", _CARPVRr = "CreateAutomatedReasoningPolicyVersionResponse", _CC = "CustomizationConfig", _CCM = "CreateCustomModel", _CCMD = "CreateCustomModelDeployment", _CCMDR = "CreateCustomModelDeploymentRequest", _CCMDRr = "CreateCustomModelDeploymentResponse", _CCMR = "CreateCustomModelRequest", _CCMRr = "CreateCustomModelResponse", _CE = "ConflictException", _CEJ = "CreateEvaluationJob", _CEJR = "CreateEvaluationJobRequest", _CEJRr = "CreateEvaluationJobResponse", _CFMA = "CreateFoundationModelAgreement", _CFMAR = "CreateFoundationModelAgreementRequest", _CFMARr = "CreateFoundationModelAgreementResponse", _CG = "CreateGuardrail", _CGR = "CreateGuardrailRequest", _CGRr = "CreateGuardrailResponse", _CGV = "CreateGuardrailVersion", _CGVR = "CreateGuardrailVersionRequest", _CGVRr = "CreateGuardrailVersionResponse", _CIP = "CreateInferenceProfile", _CIPR = "CreateInferenceProfileRequest", _CIPRr = "CreateInferenceProfileResponse", _CMBEM = "CustomMetricBedrockEvaluatorModel", _CMBEMu = "CustomMetricBedrockEvaluatorModels", _CMCJ = "CreateModelCopyJob", _CMCJR = "CreateModelCopyJobRequest", _CMCJRr = "CreateModelCopyJobResponse", _CMCJRre = "CreateModelCustomizationJobRequest", _CMCJRrea = "CreateModelCustomizationJobResponse", _CMCJr = "CreateModelCustomizationJob", _CMD = "CustomMetricDefinition", _CMDS = "CustomModelDeploymentSummary", _CMDSL = "CustomModelDeploymentSummaryList", _CMDUD = "CustomModelDeploymentUpdateDetails", _CMEMC = "CustomMetricEvaluatorModelConfig", _CMIJ = "CreateModelImportJob", _CMIJR = "CreateModelImportJobRequest", _CMIJRr = "CreateModelImportJobResponse", _CMIJRre = "CreateModelInvocationJobRequest", _CMIJRrea = "CreateModelInvocationJobResponse", _CMIJr = "CreateModelInvocationJob", _CMME = "CreateMarketplaceModelEndpoint", _CMMER = "CreateMarketplaceModelEndpointRequest", _CMMERr = "CreateMarketplaceModelEndpointResponse", _CMS = "CustomModelSummary", _CMSL = "CustomModelSummaryList", _CMU = "CustomModelUnits", _CPMT = "CreateProvisionedModelThroughput", _CPMTR = "CreateProvisionedModelThroughputRequest", _CPMTRr = "CreateProvisionedModelThroughputResponse", _CPR = "CreatePromptRouter", _CPRR = "CreatePromptRouterRequest", _CPRRr = "CreatePromptRouterResponse", _CWC = "CloudWatchConfig", _DARP = "DeleteAutomatedReasoningPolicy", _DARPBW = "DeleteAutomatedReasoningPolicyBuildWorkflow", _DARPBWR = "DeleteAutomatedReasoningPolicyBuildWorkflowRequest", _DARPBWRe = "DeleteAutomatedReasoningPolicyBuildWorkflowResponse", _DARPR = "DeleteAutomatedReasoningPolicyRequest", _DARPRe = "DeleteAutomatedReasoningPolicyResponse", _DARPTC = "DeleteAutomatedReasoningPolicyTestCase", _DARPTCR = "DeleteAutomatedReasoningPolicyTestCaseRequest", _DARPTCRe = "DeleteAutomatedReasoningPolicyTestCaseResponse", _DC = "DistillationConfig", _DCM = "DeleteCustomModel", _DCMD = "DeleteCustomModelDeployment", _DCMDR = "DeleteCustomModelDeploymentRequest", _DCMDRe = "DeleteCustomModelDeploymentResponse", _DCMR = "DeleteCustomModelRequest", _DCMRe = "DeleteCustomModelResponse", _DEGC = "DeleteEnforcedGuardrailConfiguration", _DEGCR = "DeleteEnforcedGuardrailConfigurationRequest", _DEGCRe = "DeleteEnforcedGuardrailConfigurationResponse", _DFMA = "DeleteFoundationModelAgreement", _DFMAR = "DeleteFoundationModelAgreementRequest", _DFMARe = "DeleteFoundationModelAgreementResponse", _DG = "DeleteGuardrail", _DGR = "DeleteGuardrailRequest", _DGRe = "DeleteGuardrailResponse", _DIM = "DeleteImportedModel", _DIMR = "DeleteImportedModelRequest", _DIMRe = "DeleteImportedModelResponse", _DIP = "DeleteInferenceProfile", _DIPR = "DeleteInferenceProfileRequest", _DIPRe = "DeleteInferenceProfileResponse", _DMILC = "DeleteModelInvocationLoggingConfiguration", _DMILCR = "DeleteModelInvocationLoggingConfigurationRequest", _DMILCRe = "DeleteModelInvocationLoggingConfigurationResponse", _DMME = "DeleteMarketplaceModelEndpoint", _DMMER = "DeleteMarketplaceModelEndpointRequest", _DMMERe = "DeleteMarketplaceModelEndpointResponse", _DMMERer = "DeregisterMarketplaceModelEndpointRequest", _DMMERere = "DeregisterMarketplaceModelEndpointResponse", _DMMEe = "DeregisterMarketplaceModelEndpoint", _DPD = "DataProcessingDetails", _DPMT = "DeleteProvisionedModelThroughput", _DPMTR = "DeleteProvisionedModelThroughputRequest", _DPMTRe = "DeleteProvisionedModelThroughputResponse", _DPR = "DimensionalPriceRate", _DPRR = "DeletePromptRouterRequest", _DPRRe = "DeletePromptRouterResponse", _DPRe = "DeletePromptRouter", _DRP = "DeleteResourcePolicy", _DRPR = "DeleteResourcePolicyRequest", _DRPRe = "DeleteResourcePolicyResponse", _EARPV = "ExportAutomatedReasoningPolicyVersion", _EARPVR = "ExportAutomatedReasoningPolicyVersionRequest", _EARPVRx = "ExportAutomatedReasoningPolicyVersionResponse", _EBM = "EvaluationBedrockModel", _EC = "EndpointConfig", _ECv = "EvaluationConfig", _ED = "EvaluationDataset", _EDL = "EvaluationDatasetLocation", _EDMC = "EvaluationDatasetMetricConfig", _EDMCv = "EvaluationDatasetMetricConfigs", _EDN = "EvaluationDatasetName", _EIC = "EvaluationInferenceConfig", _EICS = "EvaluationInferenceConfigSummary", _EJD = "EvaluationJobDescription", _EJI = "EvaluationJobIdentifier", _EJIv = "EvaluationJobIdentifiers", _EMC = "EvaluationModelConfigs", _EMCS = "EvaluationModelConfigSummary", _EMCv = "EvaluationModelConfig", _EMCva = "EvaluatorModelConfig", _EMD = "EvaluationMetricDescription", _EMIP = "EvaluationModelInferenceParams", _EMN = "EvaluationMetricName", _EMNv = "EvaluationMetricNames", _EODC = "EvaluationOutputDataConfig", _EPIS = "EvaluationPrecomputedInferenceSource", _EPRAGSC = "EvaluationPrecomputedRetrieveAndGenerateSourceConfig", _EPRSC = "EvaluationPrecomputedRetrieveSourceConfig", _EPRSCv = "EvaluationPrecomputedRagSourceConfig", _ERCS = "EvaluationRagConfigSummary", _ES = "EvaluationSummary", _ESGC = "ExternalSourcesGenerationConfiguration", _ESRAGC = "ExternalSourcesRetrieveAndGenerateConfiguration", _ESv = "EvaluationSummaries", _ESx = "ExternalSource", _ESxt = "ExternalSources", _FA = "FilterAttribute", _FFR = "FieldForReranking", _FFRi = "FieldsForReranking", _FMD = "FoundationModelDetails", _FML = "FoundationModelLifecycle", _FMS = "FoundationModelSummary", _FMSL = "FoundationModelSummaryList", _GARP = "GuardrailAutomatedReasoningPolicy", _GARPA = "GetAutomatedReasoningPolicyAnnotations", _GARPAR = "GetAutomatedReasoningPolicyAnnotationsRequest", _GARPARe = "GetAutomatedReasoningPolicyAnnotationsResponse", _GARPBW = "GetAutomatedReasoningPolicyBuildWorkflow", _GARPBWR = "GetAutomatedReasoningPolicyBuildWorkflowRequest", _GARPBWRA = "GetAutomatedReasoningPolicyBuildWorkflowResultAssets", _GARPBWRAR = "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest", _GARPBWRARe = "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse", _GARPBWRe = "GetAutomatedReasoningPolicyBuildWorkflowResponse", _GARPC = "GuardrailAutomatedReasoningPolicyConfig", _GARPNS = "GetAutomatedReasoningPolicyNextScenario", _GARPNSR = "GetAutomatedReasoningPolicyNextScenarioRequest", _GARPNSRe = "GetAutomatedReasoningPolicyNextScenarioResponse", _GARPR = "GetAutomatedReasoningPolicyRequest", _GARPRe = "GetAutomatedReasoningPolicyResponse", _GARPTC = "GetAutomatedReasoningPolicyTestCase", _GARPTCR = "GetAutomatedReasoningPolicyTestCaseRequest", _GARPTCRe = "GetAutomatedReasoningPolicyTestCaseResponse", _GARPTR = "GetAutomatedReasoningPolicyTestResult", _GARPTRR = "GetAutomatedReasoningPolicyTestResultRequest", _GARPTRRe = "GetAutomatedReasoningPolicyTestResultResponse", _GARPe = "GetAutomatedReasoningPolicy", _GBM = "GuardrailBlockedMessaging", _GC = "GenerationConfiguration", _GCF = "GuardrailContentFilter", _GCFA = "GuardrailContentFilterAction", _GCFC = "GuardrailContentFilterConfig", _GCFCu = "GuardrailContentFiltersConfig", _GCFT = "GuardrailContentFiltersTier", _GCFTC = "GuardrailContentFiltersTierConfig", _GCFTN = "GuardrailContentFiltersTierName", _GCFu = "GuardrailContentFilters", _GCGA = "GuardrailContextualGroundingAction", _GCGF = "GuardrailContextualGroundingFilter", _GCGFC = "GuardrailContextualGroundingFilterConfig", _GCGFCu = "GuardrailContextualGroundingFiltersConfig", _GCGFu = "GuardrailContextualGroundingFilters", _GCGP = "GuardrailContextualGroundingPolicy", _GCGPC = "GuardrailContextualGroundingPolicyConfig", _GCM = "GetCustomModel", _GCMD = "GetCustomModelDeployment", _GCMDR = "GetCustomModelDeploymentRequest", _GCMDRe = "GetCustomModelDeploymentResponse", _GCMR = "GetCustomModelRequest", _GCMRe = "GetCustomModelResponse", _GCP = "GuardrailContentPolicy", _GCPC = "GuardrailContentPolicyConfig", _GCRC = "GuardrailCrossRegionConfig", _GCRD = "GuardrailCrossRegionDetails", _GCr = "GraderConfig", _GCu = "GuardrailConfiguration", _GD = "GuardrailDescription", _GEJ = "GetEvaluationJob", _GEJR = "GetEvaluationJobRequest", _GEJRe = "GetEvaluationJobResponse", _GFM = "GetFoundationModel", _GFMA = "GetFoundationModelAvailability", _GFMAR = "GetFoundationModelAvailabilityRequest", _GFMARe = "GetFoundationModelAvailabilityResponse", _GFMR = "GetFoundationModelRequest", _GFMRe = "GetFoundationModelResponse", _GFR = "GuardrailFailureRecommendation", _GFRu = "GuardrailFailureRecommendations", _GG = "GetGuardrail", _GGR = "GetGuardrailRequest", _GGRe = "GetGuardrailResponse", _GIM = "GetImportedModel", _GIMR = "GetImportedModelRequest", _GIMRe = "GetImportedModelResponse", _GIP = "GetInferenceProfile", _GIPR = "GetInferenceProfileRequest", _GIPRe = "GetInferenceProfileResponse", _GM = "GuardrailModality", _GMCJ = "GetModelCopyJob", _GMCJR = "GetModelCopyJobRequest", _GMCJRe = "GetModelCopyJobResponse", _GMCJRet = "GetModelCustomizationJobRequest", _GMCJReto = "GetModelCustomizationJobResponse", _GMCJe = "GetModelCustomizationJob", _GMIJ = "GetModelImportJob", _GMIJR = "GetModelImportJobRequest", _GMIJRe = "GetModelImportJobResponse", _GMIJRet = "GetModelInvocationJobRequest", _GMIJReto = "GetModelInvocationJobResponse", _GMIJe = "GetModelInvocationJob", _GMILC = "GetModelInvocationLoggingConfiguration", _GMILCR = "GetModelInvocationLoggingConfigurationRequest", _GMILCRe = "GetModelInvocationLoggingConfigurationResponse", _GMME = "GetMarketplaceModelEndpoint", _GMMER = "GetMarketplaceModelEndpointRequest", _GMMERe = "GetMarketplaceModelEndpointResponse", _GMW = "GuardrailManagedWords", _GMWC = "GuardrailManagedWordsConfig", _GMWL = "GuardrailManagedWordLists", _GMWLC = "GuardrailManagedWordListsConfig", _GMu = "GuardrailModalities", _GN = "GuardrailName", _GPE = "GuardrailPiiEntity", _GPEC = "GuardrailPiiEntityConfig", _GPECu = "GuardrailPiiEntitiesConfig", _GPEu = "GuardrailPiiEntities", _GPMT = "GetProvisionedModelThroughput", _GPMTR = "GetProvisionedModelThroughputRequest", _GPMTRe = "GetProvisionedModelThroughputResponse", _GPR = "GetPromptRouter", _GPRR = "GetPromptRouterRequest", _GPRRe = "GetPromptRouterResponse", _GR = "GuardrailRegex", _GRC = "GuardrailRegexConfig", _GRCu = "GuardrailRegexesConfig", _GRP = "GetResourcePolicy", _GRPR = "GetResourcePolicyRequest", _GRPRe = "GetResourcePolicyResponse", _GRu = "GuardrailRegexes", _GS = "GuardrailSummary", _GSIP = "GuardrailSensitiveInformationPolicy", _GSIPC = "GuardrailSensitiveInformationPolicyConfig", _GSR = "GuardrailStatusReason", _GSRu = "GuardrailStatusReasons", _GSu = "GuardrailSummaries", _GT = "GuardrailTopic", _GTA = "GuardrailTopicAction", _GTC = "GuardrailTopicConfig", _GTCu = "GuardrailTopicsConfig", _GTD = "GuardrailTopicDefinition", _GTE = "GuardrailTopicExample", _GTEu = "GuardrailTopicExamples", _GTN = "GuardrailTopicName", _GTP = "GuardrailTopicPolicy", _GTPC = "GuardrailTopicPolicyConfig", _GTT = "GuardrailTopicsTier", _GTTC = "GuardrailTopicsTierConfig", _GTTN = "GuardrailTopicsTierName", _GTu = "GuardrailTopics", _GUCFMA = "GetUseCaseForModelAccess", _GUCFMAR = "GetUseCaseForModelAccessRequest", _GUCFMARe = "GetUseCaseForModelAccessResponse", _GW = "GuardrailWord", _GWA = "GuardrailWordAction", _GWC = "GuardrailWordConfig", _GWCu = "GuardrailWordsConfig", _GWP = "GuardrailWordPolicy", _GWPC = "GuardrailWordPolicyConfig", _GWu = "GuardrailWords", _HEC = "HumanEvaluationConfig", _HECM = "HumanEvaluationCustomMetric", _HECMu = "HumanEvaluationCustomMetrics", _HTI = "HumanTaskInstructions", _HWC = "HumanWorkflowConfig", _I = "Identifier", _IFC = "ImplicitFilterConfiguration", _ILC = "InvocationLogsConfig", _ILS = "InvocationLogSource", _IMS = "ImportedModelSummary", _IMSL = "ImportedModelSummaryList", _IPD = "InferenceProfileDescription", _IPM = "InferenceProfileModel", _IPMS = "InferenceProfileModelSource", _IPMn = "InferenceProfileModels", _IPS = "InferenceProfileSummary", _IPSn = "InferenceProfileSummaries", _ISE = "InternalServerException", _KBC = "KnowledgeBaseConfig", _KBRAGC = "KnowledgeBaseRetrieveAndGenerateConfiguration", _KBRC = "KnowledgeBaseRetrievalConfiguration", _KBVSC = "KnowledgeBaseVectorSearchConfiguration", _KIC = "KbInferenceConfig", _LARP = "ListAutomatedReasoningPolicies", _LARPBW = "ListAutomatedReasoningPolicyBuildWorkflows", _LARPBWR = "ListAutomatedReasoningPolicyBuildWorkflowsRequest", _LARPBWRi = "ListAutomatedReasoningPolicyBuildWorkflowsResponse", _LARPR = "ListAutomatedReasoningPoliciesRequest", _LARPRi = "ListAutomatedReasoningPoliciesResponse", _LARPTC = "ListAutomatedReasoningPolicyTestCases", _LARPTCR = "ListAutomatedReasoningPolicyTestCasesRequest", _LARPTCRi = "ListAutomatedReasoningPolicyTestCasesResponse", _LARPTR = "ListAutomatedReasoningPolicyTestResults", _LARPTRR = "ListAutomatedReasoningPolicyTestResultsRequest", _LARPTRRi = "ListAutomatedReasoningPolicyTestResultsResponse", _LC = "LoggingConfig", _LCM = "ListCustomModels", _LCMD = "ListCustomModelDeployments", _LCMDR = "ListCustomModelDeploymentsRequest", _LCMDRi = "ListCustomModelDeploymentsResponse", _LCMR = "ListCustomModelsRequest", _LCMRi = "ListCustomModelsResponse", _LEGC = "ListEnforcedGuardrailsConfiguration", _LEGCR = "ListEnforcedGuardrailsConfigurationRequest", _LEGCRi = "ListEnforcedGuardrailsConfigurationResponse", _LEJ = "ListEvaluationJobs", _LEJR = "ListEvaluationJobsRequest", _LEJRi = "ListEvaluationJobsResponse", _LFM = "ListFoundationModels", _LFMAO = "ListFoundationModelAgreementOffers", _LFMAOR = "ListFoundationModelAgreementOffersRequest", _LFMAORi = "ListFoundationModelAgreementOffersResponse", _LFMR = "ListFoundationModelsRequest", _LFMRi = "ListFoundationModelsResponse", _LG = "ListGuardrails", _LGC = "LambdaGraderConfig", _LGR = "ListGuardrailsRequest", _LGRi = "ListGuardrailsResponse", _LIM = "ListImportedModels", _LIMR = "ListImportedModelsRequest", _LIMRi = "ListImportedModelsResponse", _LIP = "ListInferenceProfiles", _LIPR = "ListInferenceProfilesRequest", _LIPRi = "ListInferenceProfilesResponse", _LMCJ = "ListModelCopyJobs", _LMCJR = "ListModelCopyJobsRequest", _LMCJRi = "ListModelCopyJobsResponse", _LMCJRis = "ListModelCustomizationJobsRequest", _LMCJRist = "ListModelCustomizationJobsResponse", _LMCJi = "ListModelCustomizationJobs", _LMIJ = "ListModelImportJobs", _LMIJR = "ListModelImportJobsRequest", _LMIJRi = "ListModelImportJobsResponse", _LMIJRis = "ListModelInvocationJobsRequest", _LMIJRist = "ListModelInvocationJobsResponse", _LMIJi = "ListModelInvocationJobs", _LMME = "ListMarketplaceModelEndpoints", _LMMER = "ListMarketplaceModelEndpointsRequest", _LMMERi = "ListMarketplaceModelEndpointsResponse", _LPMT = "ListProvisionedModelThroughputs", _LPMTR = "ListProvisionedModelThroughputsRequest", _LPMTRi = "ListProvisionedModelThroughputsResponse", _LPR = "ListPromptRouters", _LPRR = "ListPromptRoutersRequest", _LPRRi = "ListPromptRoutersResponse", _LT = "LegalTerm", _LTFR = "ListTagsForResource", _LTFRR = "ListTagsForResourceRequest", _LTFRRi = "ListTagsForResourceResponse", _M = "Message", _MAS = "MetadataAttributeSchema", _MASL = "MetadataAttributeSchemaList", _MCFR = "MetadataConfigurationForReranking", _MCJS = "ModelCopyJobSummary", _MCJSo = "ModelCustomizationJobSummary", _MCJSod = "ModelCopyJobSummaries", _MCJSode = "ModelCustomizationJobSummaries", _MDS = "ModelDataSource", _ME = "ModelEnforcement", _MIJIDC = "ModelInvocationJobInputDataConfig", _MIJODC = "ModelInvocationJobOutputDataConfig", _MIJS = "ModelImportJobSummary", _MIJSIDC = "ModelInvocationJobS3InputDataConfig", _MIJSODC = "ModelInvocationJobS3OutputDataConfig", _MIJSo = "ModelInvocationJobSummary", _MIJSod = "ModelImportJobSummaries", _MIJSode = "ModelInvocationJobSummaries", _MME = "MarketplaceModelEndpoint", _MMES = "MarketplaceModelEndpointSummary", _MMESa = "MarketplaceModelEndpointSummaries", _MN = "MetricName", _O = "Offer", _OC = "OrchestrationConfiguration", _ODC = "OutputDataConfig", _Of = "Offers", _PC = "PerformanceConfiguration", _PEGC = "PutEnforcedGuardrailConfiguration", _PEGCR = "PutEnforcedGuardrailConfigurationRequest", _PEGCRu = "PutEnforcedGuardrailConfigurationResponse", _PMILC = "PutModelInvocationLoggingConfiguration", _PMILCR = "PutModelInvocationLoggingConfigurationRequest", _PMILCRu = "PutModelInvocationLoggingConfigurationResponse", _PMS = "ProvisionedModelSummary", _PMSr = "ProvisionedModelSummaries", _PRD = "PromptRouterDescription", _PRP = "PutResourcePolicy", _PRPR = "PutResourcePolicyRequest", _PRPRu = "PutResourcePolicyResponse", _PRS = "PromptRouterSummary", _PRSr = "PromptRouterSummaries", _PRTM = "PromptRouterTargetModel", _PRTMr = "PromptRouterTargetModels", _PT = "PricingTerm", _PTr = "PromptTemplate", _PUCFMA = "PutUseCaseForModelAccess", _PUCFMAR = "PutUseCaseForModelAccessRequest", _PUCFMARu = "PutUseCaseForModelAccessResponse", _QTC = "QueryTransformationConfiguration", _RAGC = "RetrieveAndGenerateConfiguration", _RAGCo = "RAGConfig", _RC = "RetrieveConfig", _RCa = "RagConfigs", _RCat = "RateCard", _RCo = "RoutingCriteria", _RF = "RetrievalFilter", _RFL = "RetrievalFilterList", _RFTC = "RFTConfig", _RFTHP = "RFTHyperParameters", _RIUE = "ResourceInUseException", _RMBF = "RequestMetadataBaseFilters", _RMF = "RequestMetadataFilters", _RMFL = "RequestMetadataFiltersList", _RMM = "RequestMetadataMap", _RMME = "RegisterMarketplaceModelEndpoint", _RMMER = "RegisterMarketplaceModelEndpointRequest", _RMMERe = "RegisterMarketplaceModelEndpointResponse", _RMSMC = "RerankingMetadataSelectiveModeConfiguration", _RNFE = "ResourceNotFoundException", _RS = "RatingScale", _RSI = "RatingScaleItem", _RSIV = "RatingScaleItemValue", _SARPBW = "StartAutomatedReasoningPolicyBuildWorkflow", _SARPBWR = "StartAutomatedReasoningPolicyBuildWorkflowRequest", _SARPBWRt = "StartAutomatedReasoningPolicyBuildWorkflowResponse", _SARPTW = "StartAutomatedReasoningPolicyTestWorkflow", _SARPTWR = "StartAutomatedReasoningPolicyTestWorkflowRequest", _SARPTWRt = "StartAutomatedReasoningPolicyTestWorkflowResponse", _SC = "S3Config", _SCG = "SelectiveContentGuarding", _SD = "StatusDetails", _SDS = "S3DataSource", _SEJ = "StopEvaluationJob", _SEJR = "StopEvaluationJobRequest", _SEJRt = "StopEvaluationJobResponse", _SMCJ = "StopModelCustomizationJob", _SMCJR = "StopModelCustomizationJobRequest", _SMCJRt = "StopModelCustomizationJobResponse", _SME = "SageMakerEndpoint", _SMIJ = "StopModelInvocationJob", _SMIJR = "StopModelInvocationJobRequest", _SMIJRt = "StopModelInvocationJobResponse", _SOD = "S3ObjectDoc", _SQEE = "ServiceQuotaExceededException", _ST = "SupportTerm", _SUE = "ServiceUnavailableException", _T = "Tag", _TD = "TermDetails", _TDC = "TrainingDataConfig", _TDr = "TrainingDetails", _TE = "ThrottlingException", _TIC = "TextInferenceConfig", _TL = "TagList", _TM = "TrainingMetrics", _TMC = "TeacherModelConfig", _TMTE = "TooManyTagsException", _TPT = "TextPromptTemplate", _TR = "TagResource", _TRR = "TagResourceRequest", _TRRa = "TagResourceResponse", _UARP = "UpdateAutomatedReasoningPolicy", _UARPA = "UpdateAutomatedReasoningPolicyAnnotations", _UARPAR = "UpdateAutomatedReasoningPolicyAnnotationsRequest", _UARPARp = "UpdateAutomatedReasoningPolicyAnnotationsResponse", _UARPR = "UpdateAutomatedReasoningPolicyRequest", _UARPRp = "UpdateAutomatedReasoningPolicyResponse", _UARPTC = "UpdateAutomatedReasoningPolicyTestCase", _UARPTCR = "UpdateAutomatedReasoningPolicyTestCaseRequest", _UARPTCRp = "UpdateAutomatedReasoningPolicyTestCaseResponse", _UCMD = "UpdateCustomModelDeployment", _UCMDR = "UpdateCustomModelDeploymentRequest", _UCMDRp = "UpdateCustomModelDeploymentResponse", _UG = "UpdateGuardrail", _UGR = "UpdateGuardrailRequest", _UGRp = "UpdateGuardrailResponse", _UMME = "UpdateMarketplaceModelEndpoint", _UMMER = "UpdateMarketplaceModelEndpointRequest", _UMMERp = "UpdateMarketplaceModelEndpointResponse", _UPMT = "UpdateProvisionedModelThroughput", _UPMTR = "UpdateProvisionedModelThroughputRequest", _UPMTRp = "UpdateProvisionedModelThroughputResponse", _UR = "UntagResource", _URR = "UntagResourceRequest", _URRn = "UntagResourceResponse", _V = "Validator", _VC = "VpcConfig", _VD = "ValidationDetails", _VDC = "ValidationDataConfig", _VE = "ValidationException", _VM = "ValidatorMetric", _VMa = "ValidationMetrics", _VSBRC = "VectorSearchBedrockRerankingConfiguration", _VSBRMC = "VectorSearchBedrockRerankingModelConfiguration", _VSRC = "VectorSearchRerankingConfiguration", _VT = "ValidityTerm", _Va = "Validators", _a = "annotation", _aA = "agreementAvailability", _aAn = "andAll", _aD = "agreementDuration", _aDDE = "audioDataDeliveryEnabled", _aE = "alternateExpression", _aEc = "acceptEula", _aI = "assetId", _aJ = "accuracyJustification", _aM = "assetManifest", _aMRF = "additionalModelRequestFields", _aN = "assetName", _aR = "addRule", _aRFNL = "addRuleFromNaturalLanguage", _aRP = "automatedReasoningPolicy", _aRPBWS = "automatedReasoningPolicyBuildWorkflowSummaries", _aRPC = "automatedReasoningPolicyConfig", _aRPS = "automatedReasoningPolicySummaries", _aS = "accuracyScore", _aSH = "annotationSetHash", _aSt = "atomicStatements", _aSu = "authorizationStatus", _aT = "assetType", _aTE = "applicationTypeEquals", _aTFR = "aggregatedTestFindingsResult", _aTV = "addTypeValue", _aTd = "addType", _aTp = "applicationType", _aV = "addVariable", _ac = "action", _an = "annotations", _ar = "arn", _au = "automated", _bC = "byteContent", _bCT = "byCustomizationType", _bEM = "bedrockEvaluatorModels", _bIM = "blockedInputMessaging", _bIT = "byInferenceType", _bKBI = "bedrockKnowledgeBaseIdentifiers", _bL = "buildLog", _bM = "bedrockModel", _bMA = "baseModelArn", _bMAE = "baseModelArnEquals", _bMI = "baseModelIdentifier", _bMIe = "bedrockModelIdentifiers", _bMN = "baseModelName", _bN = "bucketName", _bOM = "blockedOutputsMessaging", _bOMy = "byOutputModality", _bP = "byProvider", _bRC = "bedrockRerankingConfiguration", _bS = "buildSteps", _bSa = "batchSize", _bWA = "buildWorkflowAssets", _bWI = "buildWorkflowId", _bWT = "buildWorkflowType", _c = "client", _cA = "createdAt", _cAr = "createdAfter", _cB = "createdBy", _cBr = "createdBefore", _cC = "customizationConfig", _cD = "commitmentDuration", _cEKI = "customerEncryptionKeyId", _cET = "commitmentExpirationTime", _cF = "copyFrom", _cFS = "claimsFalseScenario", _cGP = "contextualGroundingPolicy", _cGPC = "contextualGroundingPolicyConfig", _cI = "configId", _cM = "customMetrics", _cMA = "customModelArn", _cMC = "customMetricConfig", _cMD = "customMetricDefinition", _cMDA = "customModelDeploymentArn", _cMDI = "customModelDeploymentIdentifier", _cMDN = "customModelDeploymentName", _cMEMI = "customMetricsEvaluatorModelIdentifiers", _cMKKI = "customModelKmsKeyId", _cMN = "customModelName", _cMT = "customModelTags", _cMU = "customModelUnits", _cMUPMC = "customModelUnitsPerModelCopy", _cMUV = "customModelUnitsVersion", _cP = "contentPolicy", _cPC = "contentPolicyConfig", _cR = "contradictingRules", _cRC = "crossRegionConfig", _cRD = "crossRegionDetails", _cRT = "clientRequestToken", _cRo = "conflictingRules", _cS = "coverageScore", _cSu = "customizationsSupported", _cT = "confidenceThreshold", _cTA = "creationTimeAfter", _cTB = "creationTimeBefore", _cTS = "claimsTrueScenario", _cTo = "contentType", _cTr = "creationTime", _cTu = "customizationType", _cWC = "cloudWatchConfig", _cl = "claims", _co = "confidence", _cod = "code", _con = "content", _cont = "context", _d = "description", _dC = "documentContent", _dCT = "documentContentType", _dCi = "distillationConfig", _dD = "documentDescription", _dH = "documentHash", _dHe = "definitionHash", _dI = "documentId", _dL = "datasetLocation", _dMA = "desiredModelArn", _dMC = "datasetMetricConfigs", _dMI = "desiredModelId", _dMU = "desiredModelUnits", _dN = "documentName", _dPD = "dataProcessingDetails", _dPMN = "desiredProvisionedModelName", _dR = "deleteRule", _dRS = "disjointRuleSets", _dS = "differenceScenarios", _dSo = "documentSources", _dT = "deleteType", _dTV = "deleteTypeValue", _dV = "deleteVariable", _da = "data", _dat = "dataset", _de = "definition", _di = "dimension", _do = "document", _doc = "documents", _e = "error", _eA = "endpointArn", _eAFR = "expectedAggregatedFindingsResult", _eAn = "entitlementAvailability", _eC = "evaluationConfig", _eCn = "endpointConfig", _eCp = "epochCount", _eDDE = "embeddingDataDeliveryEnabled", _eI = "endpointIdentifier", _eIv = "evalInterval", _eJ = "evaluationJobs", _eM = "errorMessage", _eMC = "evaluatorModelConfig", _eMI = "evaluatorModelIdentifiers", _eMx = "excludedModels", _eN = "endpointName", _eOLT = "endOfLifeTime", _eR = "expectedResult", _eRC = "errorRecordCount", _eRx = "executionRole", _eS = "endpointStatus", _eSC = "externalSourcesConfiguration", _eSM = "endpointStatusMessage", _eT = "endTime", _eTT = "evaluationTaskTypes", _en = "entries", _ena = "enabled", _eq = "equals", _er = "errors", _ex = "expression", _exa = "examples", _f = "feedback", _fC = "filtersConfig", _fD = "formData", _fDA = "flowDefinitionArn", _fM = "fallbackModel", _fMA = "foundationModelArn", _fMAE = "foundationModelArnEquals", _fMa = "failureMessage", _fMai = "failureMessages", _fN = "fieldName", _fR = "failureRecommendations", _fRi = "fidelityReport", _fTE = "fieldsToExclude", _fTI = "fieldsToInclude", _fV = "floatValue", _fi = "filters", _fil = "filter", _fo = "force", _g = "guardrails", _gA = "guardrailArn", _gC = "guardContent", _gCe = "generationConfiguration", _gCr = "graderConfig", _gCu = "guardrailConfiguration", _gCua = "guardrailsConfig", _gFRC = "generateFidelityReportContent", _gI = "guardrailIdentifier", _gIC = "guardrailInferenceConfig", _gIu = "guardrailId", _gJ = "groundingJustifications", _gPA = "guardrailProfileArn", _gPI = "guardrailProfileIdentifier", _gPIu = "guardrailProfileId", _gS = "groundingStatements", _gT = "greaterThan", _gTC = "generatedTestCases", _gTOE = "greaterThanOrEquals", _gV = "guardrailVersion", _h = "human", _hE = "httpError", _hH = "httpHeader", _hP = "hyperParameters", _hQ = "httpQuery", _hWC = "humanWorkflowConfig", _ht = "http", _i = "id", _iA = "inputAction", _iC = "inferenceConfig", _iCS = "inferenceConfigSummary", _iCn = "ingestContent", _iDC = "inputDataConfig", _iDDE = "imageDataDeliveryEnabled", _iE = "inputEnabled", _iFC = "implicitFilterConfiguration", _iIC = "initialInstanceCount", _iJS = "invocationJobSummaries", _iLC = "invocationLogsConfig", _iLS = "invocationLogSource", _iM = "inputModalities", _iMA = "importedModelArn", _iMKKA = "importedModelKmsKeyArn", _iMKKI = "importedModelKmsKeyId", _iMN = "importedModelName", _iMT = "importedModelTags", _iMTn = "inferenceMaxTokens", _iMn = "includedModels", _iO = "isOwned", _iP = "inferenceParams", _iPA = "inferenceProfileArn", _iPI = "inferenceProfileIdentifier", _iPIn = "inferenceProfileId", _iPN = "inferenceProfileName", _iPS = "inferenceProfileSummaries", _iS = "instructSupported", _iSI = "inferenceSourceIdentifier", _iSn = "inputStrength", _iT = "inputTags", _iTS = "inferenceTypesSupported", _iTd = "idempotencyToken", _iTn = "instanceType", _id = "identifier", _im = "impossible", _in = "instructions", _in_ = "in", _inv = "invalid", _jA = "jobArn", _jD = "jobDescription", _jET = "jobExpirationTime", _jI = "jobIdentifier", _jIo = "jobIdentifiers", _jN = "jobName", _jS = "jobStatus", _jSo = "jobSummaries", _jT = "jobTags", _jTo = "jobType", _k = "key", _kBC = "knowledgeBaseConfiguration", _kBCn = "knowledgeBaseConfig", _kBI = "knowledgeBaseId", _kBRC = "knowledgeBaseRetrievalConfiguration", _kEK = "kmsEncryptionKey", _kIC = "kbInferenceConfig", _kKA = "kmsKeyArn", _kKI = "kmsKeyId", _kP = "keyPrefix", _l = "logic", _lA = "lambdaArn", _lC = "loggingConfig", _lCi = "listContains", _lDDSC = "largeDataDeliveryS3Config", _lG = "lambdaGrader", _lGN = "logGroupName", _lMT = "lastModifiedTime", _lN = "lineNumber", _lR = "learningRate", _lT = "lineText", _lTOE = "lessThanOrEquals", _lTe = "legacyTime", _lTeg = "legalTerm", _lTes = "lessThan", _lUA = "lastUpdatedAt", _lUASH = "lastUpdatedAnnotationSetHash", _lUDH = "lastUpdatedDefinitionHash", _lW = "logicWarning", _la = "latency", _li = "lines", _lin = "line", _lo = "location", _m = "message", _mA = "modelArn", _mAE = "modelArnEquals", _mAe = "metadataAttributes", _mAo = "modelArchitecture", _mC = "modelConfiguration", _mCJS = "modelCopyJobSummaries", _mCJSo = "modelCustomizationJobSummaries", _mCS = "modelConfigSummary", _mCe = "metadataConfiguration", _mD = "modelDetails", _mDN = "modelDeploymentName", _mDS = "modelDataSource", _mDSo = "modelDeploymentSummaries", _mE = "modelEnforcement", _mI = "modelIdentifier", _mIJS = "modelImportJobSummaries", _mIT = "modelInvocationType", _mIo = "modelId", _mIod = "modelIdentifiers", _mKKA = "modelKmsKeyArn", _mKKI = "modelKmsKeyId", _mL = "modelLifecycle", _mME = "marketplaceModelEndpoint", _mMEa = "marketplaceModelEndpoints", _mN = "modelName", _mNe = "metricNames", _mPL = "maxPromptLength", _mR = "maxResults", _mRLFI = "maxResponseLengthForInference", _mS = "modelSource", _mSC = "modelSourceConfig", _mSE = "modelSourceEquals", _mSI = "modelSourceIdentifier", _mSo = "modelStatus", _mSod = "modelSummaries", _mT = "messageType", _mTa = "maxTokens", _mTo = "modelTags", _mU = "modelUnits", _mWL = "managedWordLists", _mWLC = "managedWordListsConfig", _me = "messages", _mo = "models", _mu = "mutation", _n = "name", _nC = "nameContains", _nE = "notEquals", _nI = "notIn", _nL = "naturalLanguage", _nN = "newName", _nOR = "numberOfResults", _nORR = "numberOfRerankedResults", _nT = "nextToken", _nTo = "noTranslations", _nV = "newValue", _o = "owner", _oA = "outputAction", _oAI = "ownerAccountId", _oAr = "orAll", _oC = "orchestrationConfiguration", _oDC = "outputDataConfig", _oE = "outputEnabled", _oI = "offerId", _oM = "outputModalities", _oMA = "outputModelArn", _oMKKA = "outputModelKmsKeyArn", _oMN = "outputModelName", _oMNC = "outputModelNameContains", _oS = "outputStrength", _oST = "overrideSearchType", _oT = "offerToken", _oTf = "offerType", _of = "offers", _op = "options", _p = "premises", _pA = "policyArn", _pC = "performanceConfig", _pD = "policyDefinition", _pDR = "policyDefinitionRule", _pDT = "policyDefinitionType", _pDV = "policyDefinitionVariable", _pE = "priorElement", _pEAT = "publicExtendedAccessTime", _pEC = "piiEntitiesConfig", _pEi = "piiEntities", _pI = "policyId", _pIS = "precomputedInferenceSource", _pISI = "precomputedInferenceSourceIdentifiers", _pMA = "provisionedModelArn", _pMI = "provisionedModelId", _pMN = "provisionedModelName", _pMS = "provisionedModelSummaries", _pN = "pageNumber", _pNr = "providerName", _pRA = "promptRouterArn", _pRAo = "policyRepairAssets", _pRC = "processedRecordCount", _pRN = "promptRouterName", _pRS = "promptRouterSummaries", _pRSC = "precomputedRagSourceConfig", _pRSI = "precomputedRagSourceIdentifiers", _pS = "policyScenarios", _pT = "promptTemplate", _pV = "policyVariable", _pVA = "policyVersionArn", _pa = "pattern", _pl = "planning", _po = "policies", _pr = "price", _qC = "queryContent", _qR = "qualityReport", _qTC = "queryTransformationConfiguration", _r = "rule", _rA = "roleArn", _rAGC = "retrieveAndGenerateConfig", _rAGSC = "retrieveAndGenerateSourceConfig", _rARN = "resourceARN", _rAe = "resourceArn", _rAeg = "regionAvailability", _rC = "ruleCount", _rCS = "ragConfigSummary", _rCa = "rateCard", _rCag = "ragConfigs", _rCe = "regexesConfig", _rCer = "rerankingConfiguration", _rCet = "retrievalConfiguration", _rCetr = "retrieveConfig", _rCf = "rftConfig", _rCo = "routingCriteria", _rE = "reasoningEffort", _rI = "ruleId", _rIa = "ragIdentifiers", _rIu = "ruleIds", _rM = "ratingMethod", _rMF = "requestMetadataFilters", _rN = "resourceName", _rP = "resourcePolicy", _rPD = "refundPolicyDescription", _rQD = "responseQualityDifference", _rR = "ruleReports", _rS = "ratingScale", _rSC = "retrieveSourceConfig", _rSI = "ragSourceIdentifier", _rSS = "responseStreamingSupported", _re = "regexes", _ru = "rules", _s = "smithy.ts.sdk.synthetic.com.amazonaws.bedrock", _sAE = "sourceAccountEquals", _sAI = "sourceAccountId", _sB = "sortBy", _sBO = "s3BucketOwner", _sC = "s3Config", _sCG = "selectiveContentGuarding", _sCo = "sourceContent", _sCt = "stringContains", _sD = "statusDetails", _sDS = "s3DataSource", _sE = "scenarioExpression", _sEKI = "s3EncryptionKeyId", _sEt = "statusEquals", _sGI = "securityGroupIds", _sI = "statementId", _sIDC = "s3InputDataConfig", _sIF = "s3InputFormat", _sIP = "sensitiveInformationPolicy", _sIPC = "sensitiveInformationPolicyConfig", _sIu = "subnetIds", _sL = "s3Location", _sM = "statusMessage", _sMA = "sourceModelArn", _sMAE = "sourceModelArnEquals", _sMC = "selectiveModeConfiguration", _sMN = "sourceModelName", _sMa = "sageMaker", _sMe = "selectionMode", _sO = "sortOrder", _sODC = "s3OutputDataConfig", _sOLT = "startOfLifeTime", _sR = "supportingRules", _sRC = "successRecordCount", _sRt = "statusReasons", _sS = "stopSequences", _sT = "sourceType", _sTA = "submitTimeAfter", _sTB = "submitTimeBefore", _sTu = "submitTime", _sTup = "supportTerm", _sU = "s3Uri", _sV = "stringValue", _sW = "startsWith", _sa = "satisfiable", _sc = "scenario", _se = "server", _so = "sources", _st = "status", _sta = "statements", _sy = "system", _t = "translation", _tA = "translationAmbiguous", _tC = "typeCount", _tCI = "testCaseId", _tCIe = "testCaseIds", _tCe = "testCase", _tCes = "testCases", _tCi = "tierConfig", _tCo = "topicsConfig", _tCoo = "tooComplex", _tD = "termDetails", _tDC = "trainingDataConfig", _tDDE = "textDataDeliveryEnabled", _tDIH = "timeoutDurationInHours", _tDr = "trainingDetails", _tE = "typeEquals", _tF = "testFindings", _tIC = "textInferenceConfig", _tK = "tagKeys", _tL = "trainingLoss", _tM = "trainingMetrics", _tMA = "targetModelArn", _tMC = "teacherModelConfig", _tMI = "teacherModelIdentifier", _tMKKA = "targetModelKmsKeyArn", _tMN = "targetModelName", _tMNC = "targetModelNameContains", _tMT = "targetModelTags", _tN = "typeName", _tNi = "tierName", _tP = "topicPolicy", _tPC = "topicPolicyConfig", _tPT = "textPromptTemplate", _tPo = "topP", _tR = "testResult", _tRC = "totalRecordCount", _tRR = "testRunResult", _tRS = "testRunStatus", _tRe = "testResults", _tSPP = "trainingSamplePerPrompt", _tT = "taskType", _ta = "tags", _te = "text", _tem = "temperature", _th = "threshold", _ti = "tier", _to = "topics", _tr = "translations", _ty = "type", _typ = "types", _u = "unit", _uA = "updatedAt", _uB = "updatedBy", _uBPT = "usageBasedPricingTerm", _uC = "untranslatedClaims", _uD = "updateDetails", _uFRF = "updateFromRulesFeedback", _uFSF = "updateFromScenarioFeedback", _uP = "untranslatedPremises", _uPR = "usePromptResponse", _uR = "updateRule", _uS = "updateStatus", _uT = "unusedTypes", _uTV = "unusedTypeValues", _uTVp = "updateTypeValue", _uTp = "updateType", _uV = "unusedVariables", _uVp = "updateVariable", _ur = "url", _uri = "uri", _v = "values", _vC = "variableCount", _vCp = "vpcConfig", _vD = "validationDetails", _vDC = "validationDataConfig", _vDDE = "videoDataDeliveryEnabled", _vL = "validationLoss", _vM = "validationMetrics", _vN = "valueName", _vR = "variableReports", _vSC = "vectorSearchConfiguration", _vT = "validityTerm", _va = "value", _val = "validators", _vali = "valid", _var = "variable", _vari = "variables", _ve = "version", _vp = "vpc", _w = "words", _wC = "workflowContent", _wCo = "wordsConfig", _wP = "wordPolicy", _wPC = "wordPolicyConfig", _xact = "x-amz-client-token", n0 = "com.amazonaws.bedrock", _s_registry, BedrockServiceException$, n0_registry, AccessDeniedException$, ConflictException$, InternalServerException$, ResourceInUseException$, ResourceNotFoundException$, ServiceQuotaExceededException$, ServiceUnavailableException$, ThrottlingException$, TooManyTagsException$, ValidationException$, errorTypeRegistries, AutomatedReasoningLogicStatementContent, AutomatedReasoningNaturalLanguageStatementContent, AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage, AutomatedReasoningPolicyAnnotationIngestContent, AutomatedReasoningPolicyAnnotationRuleNaturalLanguage, AutomatedReasoningPolicyBuildDocumentBlob, AutomatedReasoningPolicyBuildDocumentDescription, AutomatedReasoningPolicyBuildDocumentName, AutomatedReasoningPolicyBuildResultAssetName, AutomatedReasoningPolicyDefinitionRuleAlternateExpression, AutomatedReasoningPolicyDefinitionRuleExpression, AutomatedReasoningPolicyDefinitionTypeDescription, AutomatedReasoningPolicyDefinitionTypeName, AutomatedReasoningPolicyDefinitionTypeValueDescription, AutomatedReasoningPolicyDefinitionVariableDescription, AutomatedReasoningPolicyDefinitionVariableName, AutomatedReasoningPolicyDescription, AutomatedReasoningPolicyJustificationText, AutomatedReasoningPolicyLineText, AutomatedReasoningPolicyName, AutomatedReasoningPolicyScenarioAlternateExpression, AutomatedReasoningPolicyScenarioExpression, AutomatedReasoningPolicyStatementText, AutomatedReasoningPolicyTestGuardContent, AutomatedReasoningPolicyTestQueryContent, ByteContentBlob, EvaluationDatasetName, EvaluationJobDescription, EvaluationJobIdentifier, EvaluationMetricDescription, EvaluationMetricName, EvaluationModelInferenceParams, GuardrailBlockedMessaging, GuardrailContentFilterAction, GuardrailContentFiltersTierName, GuardrailContextualGroundingAction, GuardrailDescription, GuardrailFailureRecommendation, GuardrailModality, GuardrailName, GuardrailStatusReason, GuardrailTopicAction, GuardrailTopicDefinition, GuardrailTopicExample, GuardrailTopicName, GuardrailTopicsTierName, GuardrailWordAction, HumanTaskInstructions, Identifier, InferenceProfileDescription, Message, MetricName, PromptRouterDescription, TextPromptTemplate, AccountEnforcedGuardrailInferenceInputConfiguration$, AccountEnforcedGuardrailOutputConfiguration$, AgreementAvailability$, AutomatedEvaluationConfig$, AutomatedEvaluationCustomMetricConfig$, AutomatedReasoningCheckImpossibleFinding$, AutomatedReasoningCheckInputTextReference$, AutomatedReasoningCheckInvalidFinding$, AutomatedReasoningCheckLogicWarning$, AutomatedReasoningCheckNoTranslationsFinding$, AutomatedReasoningCheckRule$, AutomatedReasoningCheckSatisfiableFinding$, AutomatedReasoningCheckScenario$, AutomatedReasoningCheckTooComplexFinding$, AutomatedReasoningCheckTranslation$, AutomatedReasoningCheckTranslationAmbiguousFinding$, AutomatedReasoningCheckTranslationOption$, AutomatedReasoningCheckValidFinding$, AutomatedReasoningLogicStatement$, AutomatedReasoningPolicyAddRuleAnnotation$, AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation$, AutomatedReasoningPolicyAddRuleMutation$, AutomatedReasoningPolicyAddTypeAnnotation$, AutomatedReasoningPolicyAddTypeMutation$, AutomatedReasoningPolicyAddTypeValue$, AutomatedReasoningPolicyAddVariableAnnotation$, AutomatedReasoningPolicyAddVariableMutation$, AutomatedReasoningPolicyAnnotatedChunk$, AutomatedReasoningPolicyAnnotatedLine$, AutomatedReasoningPolicyAtomicStatement$, AutomatedReasoningPolicyBuildLog$, AutomatedReasoningPolicyBuildLogEntry$, AutomatedReasoningPolicyBuildResultAssetManifest$, AutomatedReasoningPolicyBuildResultAssetManifestEntry$, AutomatedReasoningPolicyBuildStep$, AutomatedReasoningPolicyBuildStepMessage$, AutomatedReasoningPolicyBuildWorkflowDocument$, AutomatedReasoningPolicyBuildWorkflowRepairContent$, AutomatedReasoningPolicyBuildWorkflowSource$, AutomatedReasoningPolicyBuildWorkflowSummary$, AutomatedReasoningPolicyDefinition$, AutomatedReasoningPolicyDefinitionQualityReport$, AutomatedReasoningPolicyDefinitionRule$, AutomatedReasoningPolicyDefinitionType$, AutomatedReasoningPolicyDefinitionTypeValue$, AutomatedReasoningPolicyDefinitionTypeValuePair$, AutomatedReasoningPolicyDefinitionVariable$, AutomatedReasoningPolicyDeleteRuleAnnotation$, AutomatedReasoningPolicyDeleteRuleMutation$, AutomatedReasoningPolicyDeleteTypeAnnotation$, AutomatedReasoningPolicyDeleteTypeMutation$, AutomatedReasoningPolicyDeleteTypeValue$, AutomatedReasoningPolicyDeleteVariableAnnotation$, AutomatedReasoningPolicyDeleteVariableMutation$, AutomatedReasoningPolicyDisjointRuleSet$, AutomatedReasoningPolicyFidelityReport$, AutomatedReasoningPolicyGeneratedTestCase$, AutomatedReasoningPolicyGeneratedTestCases$, AutomatedReasoningPolicyIngestContentAnnotation$, AutomatedReasoningPolicyPlanning$, AutomatedReasoningPolicyReportSourceDocument$, AutomatedReasoningPolicyRuleReport$, AutomatedReasoningPolicyScenario$, AutomatedReasoningPolicyScenarios$, AutomatedReasoningPolicySourceDocument$, AutomatedReasoningPolicyStatementLocation$, AutomatedReasoningPolicyStatementReference$, AutomatedReasoningPolicySummary$, AutomatedReasoningPolicyTestCase$, AutomatedReasoningPolicyTestResult$, AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation$, AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation$, AutomatedReasoningPolicyUpdateRuleAnnotation$, AutomatedReasoningPolicyUpdateRuleMutation$, AutomatedReasoningPolicyUpdateTypeAnnotation$, AutomatedReasoningPolicyUpdateTypeMutation$, AutomatedReasoningPolicyUpdateTypeValue$, AutomatedReasoningPolicyUpdateVariableAnnotation$, AutomatedReasoningPolicyUpdateVariableMutation$, AutomatedReasoningPolicyVariableReport$, BatchDeleteEvaluationJobError$, BatchDeleteEvaluationJobItem$, BatchDeleteEvaluationJobRequest$, BatchDeleteEvaluationJobResponse$, BedrockEvaluatorModel$, ByteContentDoc$, CancelAutomatedReasoningPolicyBuildWorkflowRequest$, CancelAutomatedReasoningPolicyBuildWorkflowResponse$, CloudWatchConfig$, CreateAutomatedReasoningPolicyRequest$, CreateAutomatedReasoningPolicyResponse$, CreateAutomatedReasoningPolicyTestCaseRequest$, CreateAutomatedReasoningPolicyTestCaseResponse$, CreateAutomatedReasoningPolicyVersionRequest$, CreateAutomatedReasoningPolicyVersionResponse$, CreateCustomModelDeploymentRequest$, CreateCustomModelDeploymentResponse$, CreateCustomModelRequest$, CreateCustomModelResponse$, CreateEvaluationJobRequest$, CreateEvaluationJobResponse$, CreateFoundationModelAgreementRequest$, CreateFoundationModelAgreementResponse$, CreateGuardrailRequest$, CreateGuardrailResponse$, CreateGuardrailVersionRequest$, CreateGuardrailVersionResponse$, CreateInferenceProfileRequest$, CreateInferenceProfileResponse$, CreateMarketplaceModelEndpointRequest$, CreateMarketplaceModelEndpointResponse$, CreateModelCopyJobRequest$, CreateModelCopyJobResponse$, CreateModelCustomizationJobRequest$, CreateModelCustomizationJobResponse$, CreateModelImportJobRequest$, CreateModelImportJobResponse$, CreateModelInvocationJobRequest$, CreateModelInvocationJobResponse$, CreatePromptRouterRequest$, CreatePromptRouterResponse$, CreateProvisionedModelThroughputRequest$, CreateProvisionedModelThroughputResponse$, CustomMetricBedrockEvaluatorModel$, CustomMetricDefinition$, CustomMetricEvaluatorModelConfig$, CustomModelDeploymentSummary$, CustomModelDeploymentUpdateDetails$, CustomModelSummary$, CustomModelUnits$, DataProcessingDetails$, DeleteAutomatedReasoningPolicyBuildWorkflowRequest$, DeleteAutomatedReasoningPolicyBuildWorkflowResponse$, DeleteAutomatedReasoningPolicyRequest$, DeleteAutomatedReasoningPolicyResponse$, DeleteAutomatedReasoningPolicyTestCaseRequest$, DeleteAutomatedReasoningPolicyTestCaseResponse$, DeleteCustomModelDeploymentRequest$, DeleteCustomModelDeploymentResponse$, DeleteCustomModelRequest$, DeleteCustomModelResponse$, DeleteEnforcedGuardrailConfigurationRequest$, DeleteEnforcedGuardrailConfigurationResponse$, DeleteFoundationModelAgreementRequest$, DeleteFoundationModelAgreementResponse$, DeleteGuardrailRequest$, DeleteGuardrailResponse$, DeleteImportedModelRequest$, DeleteImportedModelResponse$, DeleteInferenceProfileRequest$, DeleteInferenceProfileResponse$, DeleteMarketplaceModelEndpointRequest$, DeleteMarketplaceModelEndpointResponse$, DeleteModelInvocationLoggingConfigurationRequest$, DeleteModelInvocationLoggingConfigurationResponse$, DeletePromptRouterRequest$, DeletePromptRouterResponse$, DeleteProvisionedModelThroughputRequest$, DeleteProvisionedModelThroughputResponse$, DeleteResourcePolicyRequest$, DeleteResourcePolicyResponse$, DeregisterMarketplaceModelEndpointRequest$, DeregisterMarketplaceModelEndpointResponse$, DimensionalPriceRate$, DistillationConfig$, EvaluationBedrockModel$, EvaluationDataset$, EvaluationDatasetMetricConfig$, EvaluationInferenceConfigSummary$, EvaluationModelConfigSummary$, EvaluationOutputDataConfig$, EvaluationPrecomputedInferenceSource$, EvaluationPrecomputedRetrieveAndGenerateSourceConfig$, EvaluationPrecomputedRetrieveSourceConfig$, EvaluationRagConfigSummary$, EvaluationSummary$, ExportAutomatedReasoningPolicyVersionRequest$, ExportAutomatedReasoningPolicyVersionResponse$, ExternalSource$, ExternalSourcesGenerationConfiguration$, ExternalSourcesRetrieveAndGenerateConfiguration$, FieldForReranking$, FilterAttribute$, FoundationModelDetails$, FoundationModelLifecycle$, FoundationModelSummary$, GenerationConfiguration$, GetAutomatedReasoningPolicyAnnotationsRequest$, GetAutomatedReasoningPolicyAnnotationsResponse$, GetAutomatedReasoningPolicyBuildWorkflowRequest$, GetAutomatedReasoningPolicyBuildWorkflowResponse$, GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest$, GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse$, GetAutomatedReasoningPolicyNextScenarioRequest$, GetAutomatedReasoningPolicyNextScenarioResponse$, GetAutomatedReasoningPolicyRequest$, GetAutomatedReasoningPolicyResponse$, GetAutomatedReasoningPolicyTestCaseRequest$, GetAutomatedReasoningPolicyTestCaseResponse$, GetAutomatedReasoningPolicyTestResultRequest$, GetAutomatedReasoningPolicyTestResultResponse$, GetCustomModelDeploymentRequest$, GetCustomModelDeploymentResponse$, GetCustomModelRequest$, GetCustomModelResponse$, GetEvaluationJobRequest$, GetEvaluationJobResponse$, GetFoundationModelAvailabilityRequest$, GetFoundationModelAvailabilityResponse$, GetFoundationModelRequest$, GetFoundationModelResponse$, GetGuardrailRequest$, GetGuardrailResponse$, GetImportedModelRequest$, GetImportedModelResponse$, GetInferenceProfileRequest$, GetInferenceProfileResponse$, GetMarketplaceModelEndpointRequest$, GetMarketplaceModelEndpointResponse$, GetModelCopyJobRequest$, GetModelCopyJobResponse$, GetModelCustomizationJobRequest$, GetModelCustomizationJobResponse$, GetModelImportJobRequest$, GetModelImportJobResponse$, GetModelInvocationJobRequest$, GetModelInvocationJobResponse$, GetModelInvocationLoggingConfigurationRequest$, GetModelInvocationLoggingConfigurationResponse$, GetPromptRouterRequest$, GetPromptRouterResponse$, GetProvisionedModelThroughputRequest$, GetProvisionedModelThroughputResponse$, GetResourcePolicyRequest$, GetResourcePolicyResponse$, GetUseCaseForModelAccessRequest$, GetUseCaseForModelAccessResponse$, GuardrailAutomatedReasoningPolicy$, GuardrailAutomatedReasoningPolicyConfig$, GuardrailConfiguration$, GuardrailContentFilter$, GuardrailContentFilterConfig$, GuardrailContentFiltersTier$, GuardrailContentFiltersTierConfig$, GuardrailContentPolicy$, GuardrailContentPolicyConfig$, GuardrailContextualGroundingFilter$, GuardrailContextualGroundingFilterConfig$, GuardrailContextualGroundingPolicy$, GuardrailContextualGroundingPolicyConfig$, GuardrailCrossRegionConfig$, GuardrailCrossRegionDetails$, GuardrailManagedWords$, GuardrailManagedWordsConfig$, GuardrailPiiEntity$, GuardrailPiiEntityConfig$, GuardrailRegex$, GuardrailRegexConfig$, GuardrailSensitiveInformationPolicy$, GuardrailSensitiveInformationPolicyConfig$, GuardrailSummary$, GuardrailTopic$, GuardrailTopicConfig$, GuardrailTopicPolicy$, GuardrailTopicPolicyConfig$, GuardrailTopicsTier$, GuardrailTopicsTierConfig$, GuardrailWord$, GuardrailWordConfig$, GuardrailWordPolicy$, GuardrailWordPolicyConfig$, HumanEvaluationConfig$, HumanEvaluationCustomMetric$, HumanWorkflowConfig$, ImplicitFilterConfiguration$, ImportedModelSummary$, InferenceProfileModel$, InferenceProfileSummary$, InvocationLogsConfig$, KbInferenceConfig$, KnowledgeBaseRetrievalConfiguration$, KnowledgeBaseRetrieveAndGenerateConfiguration$, KnowledgeBaseVectorSearchConfiguration$, LambdaGraderConfig$, LegalTerm$, ListAutomatedReasoningPoliciesRequest$, ListAutomatedReasoningPoliciesResponse$, ListAutomatedReasoningPolicyBuildWorkflowsRequest$, ListAutomatedReasoningPolicyBuildWorkflowsResponse$, ListAutomatedReasoningPolicyTestCasesRequest$, ListAutomatedReasoningPolicyTestCasesResponse$, ListAutomatedReasoningPolicyTestResultsRequest$, ListAutomatedReasoningPolicyTestResultsResponse$, ListCustomModelDeploymentsRequest$, ListCustomModelDeploymentsResponse$, ListCustomModelsRequest$, ListCustomModelsResponse$, ListEnforcedGuardrailsConfigurationRequest$, ListEnforcedGuardrailsConfigurationResponse$, ListEvaluationJobsRequest$, ListEvaluationJobsResponse$, ListFoundationModelAgreementOffersRequest$, ListFoundationModelAgreementOffersResponse$, ListFoundationModelsRequest$, ListFoundationModelsResponse$, ListGuardrailsRequest$, ListGuardrailsResponse$, ListImportedModelsRequest$, ListImportedModelsResponse$, ListInferenceProfilesRequest$, ListInferenceProfilesResponse$, ListMarketplaceModelEndpointsRequest$, ListMarketplaceModelEndpointsResponse$, ListModelCopyJobsRequest$, ListModelCopyJobsResponse$, ListModelCustomizationJobsRequest$, ListModelCustomizationJobsResponse$, ListModelImportJobsRequest$, ListModelImportJobsResponse$, ListModelInvocationJobsRequest$, ListModelInvocationJobsResponse$, ListPromptRoutersRequest$, ListPromptRoutersResponse$, ListProvisionedModelThroughputsRequest$, ListProvisionedModelThroughputsResponse$, ListTagsForResourceRequest$, ListTagsForResourceResponse$, LoggingConfig$, MarketplaceModelEndpoint$, MarketplaceModelEndpointSummary$, MetadataAttributeSchema$, MetadataConfigurationForReranking$, ModelCopyJobSummary$, ModelCustomizationJobSummary$, ModelEnforcement$, ModelImportJobSummary$, ModelInvocationJobS3InputDataConfig$, ModelInvocationJobS3OutputDataConfig$, ModelInvocationJobSummary$, Offer$, OrchestrationConfiguration$, OutputDataConfig$, PerformanceConfiguration$, PricingTerm$, PromptRouterSummary$, PromptRouterTargetModel$, PromptTemplate$, ProvisionedModelSummary$, PutEnforcedGuardrailConfigurationRequest$, PutEnforcedGuardrailConfigurationResponse$, PutModelInvocationLoggingConfigurationRequest$, PutModelInvocationLoggingConfigurationResponse$, PutResourcePolicyRequest$, PutResourcePolicyResponse$, PutUseCaseForModelAccessRequest$, PutUseCaseForModelAccessResponse$, QueryTransformationConfiguration$, RatingScaleItem$, RegisterMarketplaceModelEndpointRequest$, RegisterMarketplaceModelEndpointResponse$, RequestMetadataBaseFilters$, RetrieveAndGenerateConfiguration$, RetrieveConfig$, RFTConfig$, RFTHyperParameters$, RoutingCriteria$, S3Config$, S3DataSource$, S3ObjectDoc$, SageMakerEndpoint$, SelectiveContentGuarding$, StartAutomatedReasoningPolicyBuildWorkflowRequest$, StartAutomatedReasoningPolicyBuildWorkflowResponse$, StartAutomatedReasoningPolicyTestWorkflowRequest$, StartAutomatedReasoningPolicyTestWorkflowResponse$, StatusDetails$, StopEvaluationJobRequest$, StopEvaluationJobResponse$, StopModelCustomizationJobRequest$, StopModelCustomizationJobResponse$, StopModelInvocationJobRequest$, StopModelInvocationJobResponse$, SupportTerm$, Tag$, TagResourceRequest$, TagResourceResponse$, TeacherModelConfig$, TermDetails$, TextInferenceConfig$, TrainingDataConfig$, TrainingDetails$, TrainingMetrics$, UntagResourceRequest$, UntagResourceResponse$, UpdateAutomatedReasoningPolicyAnnotationsRequest$, UpdateAutomatedReasoningPolicyAnnotationsResponse$, UpdateAutomatedReasoningPolicyRequest$, UpdateAutomatedReasoningPolicyResponse$, UpdateAutomatedReasoningPolicyTestCaseRequest$, UpdateAutomatedReasoningPolicyTestCaseResponse$, UpdateCustomModelDeploymentRequest$, UpdateCustomModelDeploymentResponse$, UpdateGuardrailRequest$, UpdateGuardrailResponse$, UpdateMarketplaceModelEndpointRequest$, UpdateMarketplaceModelEndpointResponse$, UpdateProvisionedModelThroughputRequest$, UpdateProvisionedModelThroughputResponse$, ValidationDataConfig$, ValidationDetails$, Validator$, ValidatorMetric$, ValidityTerm$, VectorSearchBedrockRerankingConfiguration$, VectorSearchBedrockRerankingModelConfiguration$, VectorSearchRerankingConfiguration$, VpcConfig$, AccountEnforcedGuardrailsOutputConfiguration, AutomatedEvaluationCustomMetrics, AutomatedReasoningCheckDifferenceScenarioList, AutomatedReasoningCheckFindingList, AutomatedReasoningCheckInputTextReferenceList, AutomatedReasoningCheckRuleList, AutomatedReasoningCheckTranslationList, AutomatedReasoningCheckTranslationOptionList, AutomatedReasoningLogicStatementList, AutomatedReasoningPolicyAnnotatedChunkList, AutomatedReasoningPolicyAnnotatedContentList, AutomatedReasoningPolicyAnnotationList, AutomatedReasoningPolicyArnList, AutomatedReasoningPolicyAtomicStatementList, AutomatedReasoningPolicyBuildLogEntryList, AutomatedReasoningPolicyBuildResultAssetManifestList, AutomatedReasoningPolicyBuildStepList, AutomatedReasoningPolicyBuildStepMessageList, AutomatedReasoningPolicyBuildWorkflowDocumentList, AutomatedReasoningPolicyBuildWorkflowSummaries, AutomatedReasoningPolicyConflictedRuleIdList, AutomatedReasoningPolicyDefinitionRuleIdList, AutomatedReasoningPolicyDefinitionRuleList, AutomatedReasoningPolicyDefinitionTypeList, AutomatedReasoningPolicyDefinitionTypeNameList, AutomatedReasoningPolicyDefinitionTypeValueList, AutomatedReasoningPolicyDefinitionTypeValuePairList, AutomatedReasoningPolicyDefinitionVariableList, AutomatedReasoningPolicyDefinitionVariableNameList, AutomatedReasoningPolicyDisjointedRuleIdList, AutomatedReasoningPolicyDisjointRuleSetList, AutomatedReasoningPolicyGeneratedTestCaseList, AutomatedReasoningPolicyGenerateFidelityReportDocumentList, AutomatedReasoningPolicyJustificationList, AutomatedReasoningPolicyLineNumberList, AutomatedReasoningPolicyReportSourceDocumentList, AutomatedReasoningPolicyScenarioList, AutomatedReasoningPolicyStatementReferenceList, AutomatedReasoningPolicySummaries, AutomatedReasoningPolicyTestCaseIdList, AutomatedReasoningPolicyTestCaseList, AutomatedReasoningPolicyTestList, AutomatedReasoningPolicyTypeValueAnnotationList, BatchDeleteEvaluationJobErrors, BatchDeleteEvaluationJobItems, BedrockEvaluatorModels, CustomMetricBedrockEvaluatorModels, CustomModelDeploymentSummaryList, CustomModelSummaryList, ErrorMessages, EvaluationBedrockKnowledgeBaseIdentifiers, EvaluationBedrockModelIdentifiers, EvaluationDatasetMetricConfigs, EvaluationJobIdentifiers, EvaluationMetricNames, EvaluationModelConfigs, EvaluationPrecomputedInferenceSourceIdentifiers, EvaluationPrecomputedRagSourceIdentifiers, EvaluationSummaries, EvaluationTaskTypes, EvaluatorModelIdentifiers, ExcludedModelsList, ExternalSources, FieldsForReranking, FoundationModelSummaryList, GuardrailContentFilters, GuardrailContentFiltersConfig, GuardrailContextualGroundingFilters, GuardrailContextualGroundingFiltersConfig, GuardrailFailureRecommendations, GuardrailManagedWordLists, GuardrailManagedWordListsConfig, GuardrailModalities, GuardrailPiiEntities, GuardrailPiiEntitiesConfig, GuardrailRegexes, GuardrailRegexesConfig, GuardrailStatusReasons, GuardrailSummaries, GuardrailTopicExamples, GuardrailTopics, GuardrailTopicsConfig, GuardrailWords, GuardrailWordsConfig, HumanEvaluationCustomMetrics, ImportedModelSummaryList, IncludedModelsList, InferenceProfileModels, InferenceProfileSummaries, InferenceTypeList, MarketplaceModelEndpointSummaries, MetadataAttributeSchemaList, ModelCopyJobSummaries, ModelCustomizationJobSummaries, ModelCustomizationList, ModelImportJobSummaries, ModelInvocationJobSummaries, ModelModalityList, Offers, PromptRouterSummaries, PromptRouterTargetModels, ProvisionedModelSummaries, RagConfigs, RAGStopSequences, RateCard, RatingScale, RequestMetadataFiltersList, RetrievalFilterList, SecurityGroupIds, SubnetIds, TagKeyList, TagList, ValidationMetrics, Validators, AdditionalModelRequestFields, AutomatedReasoningPolicyRuleReportMap, AutomatedReasoningPolicyVariableReportMap, ModelCustomizationHyperParameters, RequestMetadataMap, AutomatedEvaluationCustomMetricSource$, AutomatedReasoningCheckFinding$, AutomatedReasoningPolicyAnnotatedContent$, AutomatedReasoningPolicyAnnotation$, AutomatedReasoningPolicyBuildResultAssets$, AutomatedReasoningPolicyBuildStepContext$, AutomatedReasoningPolicyDefinitionElement$, AutomatedReasoningPolicyGenerateFidelityReportContent$, AutomatedReasoningPolicyMutation$, AutomatedReasoningPolicyTypeValueAnnotation$, AutomatedReasoningPolicyWorkflowTypeContent$, CustomizationConfig$, EndpointConfig$, EvaluationConfig$, EvaluationDatasetLocation$, EvaluationInferenceConfig$, EvaluationModelConfig$, EvaluationPrecomputedRagSourceConfig$, EvaluatorModelConfig$, GraderConfig$, InferenceProfileModelSource$, InvocationLogSource$, KnowledgeBaseConfig$, ModelDataSource$, ModelInvocationJobInputDataConfig$, ModelInvocationJobOutputDataConfig$, RAGConfig$, RatingScaleItemValue$, RequestMetadataFilters$, RerankingMetadataSelectiveModeConfiguration$, RetrievalFilter$, BatchDeleteEvaluationJob$, CancelAutomatedReasoningPolicyBuildWorkflow$, CreateAutomatedReasoningPolicy$, CreateAutomatedReasoningPolicyTestCase$, CreateAutomatedReasoningPolicyVersion$, CreateCustomModel$, CreateCustomModelDeployment$, CreateEvaluationJob$, CreateFoundationModelAgreement$, CreateGuardrail$, CreateGuardrailVersion$, CreateInferenceProfile$, CreateMarketplaceModelEndpoint$, CreateModelCopyJob$, CreateModelCustomizationJob$, CreateModelImportJob$, CreateModelInvocationJob$, CreatePromptRouter$, CreateProvisionedModelThroughput$, DeleteAutomatedReasoningPolicy$, DeleteAutomatedReasoningPolicyBuildWorkflow$, DeleteAutomatedReasoningPolicyTestCase$, DeleteCustomModel$, DeleteCustomModelDeployment$, DeleteEnforcedGuardrailConfiguration$, DeleteFoundationModelAgreement$, DeleteGuardrail$, DeleteImportedModel$, DeleteInferenceProfile$, DeleteMarketplaceModelEndpoint$, DeleteModelInvocationLoggingConfiguration$, DeletePromptRouter$, DeleteProvisionedModelThroughput$, DeleteResourcePolicy$, DeregisterMarketplaceModelEndpoint$, ExportAutomatedReasoningPolicyVersion$, GetAutomatedReasoningPolicy$, GetAutomatedReasoningPolicyAnnotations$, GetAutomatedReasoningPolicyBuildWorkflow$, GetAutomatedReasoningPolicyBuildWorkflowResultAssets$, GetAutomatedReasoningPolicyNextScenario$, GetAutomatedReasoningPolicyTestCase$, GetAutomatedReasoningPolicyTestResult$, GetCustomModel$, GetCustomModelDeployment$, GetEvaluationJob$, GetFoundationModel$, GetFoundationModelAvailability$, GetGuardrail$, GetImportedModel$, GetInferenceProfile$, GetMarketplaceModelEndpoint$, GetModelCopyJob$, GetModelCustomizationJob$, GetModelImportJob$, GetModelInvocationJob$, GetModelInvocationLoggingConfiguration$, GetPromptRouter$, GetProvisionedModelThroughput$, GetResourcePolicy$, GetUseCaseForModelAccess$, ListAutomatedReasoningPolicies$, ListAutomatedReasoningPolicyBuildWorkflows$, ListAutomatedReasoningPolicyTestCases$, ListAutomatedReasoningPolicyTestResults$, ListCustomModelDeployments$, ListCustomModels$, ListEnforcedGuardrailsConfiguration$, ListEvaluationJobs$, ListFoundationModelAgreementOffers$, ListFoundationModels$, ListGuardrails$, ListImportedModels$, ListInferenceProfiles$, ListMarketplaceModelEndpoints$, ListModelCopyJobs$, ListModelCustomizationJobs$, ListModelImportJobs$, ListModelInvocationJobs$, ListPromptRouters$, ListProvisionedModelThroughputs$, ListTagsForResource$, PutEnforcedGuardrailConfiguration$, PutModelInvocationLoggingConfiguration$, PutResourcePolicy$, PutUseCaseForModelAccess$, RegisterMarketplaceModelEndpoint$, StartAutomatedReasoningPolicyBuildWorkflow$, StartAutomatedReasoningPolicyTestWorkflow$, StopEvaluationJob$, StopModelCustomizationJob$, StopModelInvocationJob$, TagResource$, UntagResource$, UpdateAutomatedReasoningPolicy$, UpdateAutomatedReasoningPolicyAnnotations$, UpdateAutomatedReasoningPolicyTestCase$, UpdateCustomModelDeployment$, UpdateGuardrail$, UpdateMarketplaceModelEndpoint$, UpdateProvisionedModelThroughput$;
var init_schemas_0 = __esm(() => {
  init_BedrockServiceException();
  init_errors();
  import_schema = __toESM(require_schema(), 1);
  _s_registry = import_schema.TypeRegistry.for(_s);
  BedrockServiceException$ = [-3, _s, "BedrockServiceException", 0, [], []];
  _s_registry.registerError(BedrockServiceException$, BedrockServiceException);
  n0_registry = import_schema.TypeRegistry.for(n0);
  AccessDeniedException$ = [
    -3,
    n0,
    _ADE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
  ConflictException$ = [
    -3,
    n0,
    _CE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ConflictException$, ConflictException);
  InternalServerException$ = [
    -3,
    n0,
    _ISE,
    { [_e]: _se, [_hE]: 500 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InternalServerException$, InternalServerException);
  ResourceInUseException$ = [
    -3,
    n0,
    _RIUE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ResourceInUseException$, ResourceInUseException);
  ResourceNotFoundException$ = [
    -3,
    n0,
    _RNFE,
    { [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
  ServiceQuotaExceededException$ = [
    -3,
    n0,
    _SQEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
  ServiceUnavailableException$ = [
    -3,
    n0,
    _SUE,
    { [_e]: _se, [_hE]: 503 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ServiceUnavailableException$, ServiceUnavailableException);
  ThrottlingException$ = [
    -3,
    n0,
    _TE,
    { [_e]: _c, [_hE]: 429 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ThrottlingException$, ThrottlingException);
  TooManyTagsException$ = [
    -3,
    n0,
    _TMTE,
    { [_e]: _c, [_hE]: 400 },
    [_m, _rN],
    [0, 0]
  ];
  n0_registry.registerError(TooManyTagsException$, TooManyTagsException);
  ValidationException$ = [
    -3,
    n0,
    _VE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ValidationException$, ValidationException);
  errorTypeRegistries = [
    _s_registry,
    n0_registry
  ];
  AutomatedReasoningLogicStatementContent = [0, n0, _ARLSC, 8, 0];
  AutomatedReasoningNaturalLanguageStatementContent = [0, n0, _ARNLSC, 8, 0];
  AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage = [0, n0, _ARPAFNL, 8, 0];
  AutomatedReasoningPolicyAnnotationIngestContent = [0, n0, _ARPAIC, 8, 0];
  AutomatedReasoningPolicyAnnotationRuleNaturalLanguage = [0, n0, _ARPARNL, 8, 0];
  AutomatedReasoningPolicyBuildDocumentBlob = [0, n0, _ARPBDB, 8, 21];
  AutomatedReasoningPolicyBuildDocumentDescription = [0, n0, _ARPBDD, 8, 0];
  AutomatedReasoningPolicyBuildDocumentName = [0, n0, _ARPBDN, 8, 0];
  AutomatedReasoningPolicyBuildResultAssetName = [0, n0, _ARPBRAN, 8, 0];
  AutomatedReasoningPolicyDefinitionRuleAlternateExpression = [0, n0, _ARPDRAE, 8, 0];
  AutomatedReasoningPolicyDefinitionRuleExpression = [0, n0, _ARPDRE, 8, 0];
  AutomatedReasoningPolicyDefinitionTypeDescription = [0, n0, _ARPDTD, 8, 0];
  AutomatedReasoningPolicyDefinitionTypeName = [0, n0, _ARPDTN, 8, 0];
  AutomatedReasoningPolicyDefinitionTypeValueDescription = [0, n0, _ARPDTVD, 8, 0];
  AutomatedReasoningPolicyDefinitionVariableDescription = [0, n0, _ARPDVD, 8, 0];
  AutomatedReasoningPolicyDefinitionVariableName = [0, n0, _ARPDVN, 8, 0];
  AutomatedReasoningPolicyDescription = [0, n0, _ARPD, 8, 0];
  AutomatedReasoningPolicyJustificationText = [0, n0, _ARPJT, 8, 0];
  AutomatedReasoningPolicyLineText = [0, n0, _ARPLT, 8, 0];
  AutomatedReasoningPolicyName = [0, n0, _ARPN, 8, 0];
  AutomatedReasoningPolicyScenarioAlternateExpression = [0, n0, _ARPSAE, 8, 0];
  AutomatedReasoningPolicyScenarioExpression = [0, n0, _ARPSE, 8, 0];
  AutomatedReasoningPolicyStatementText = [0, n0, _ARPST, 8, 0];
  AutomatedReasoningPolicyTestGuardContent = [0, n0, _ARPTGC, 8, 0];
  AutomatedReasoningPolicyTestQueryContent = [0, n0, _ARPTQC, 8, 0];
  ByteContentBlob = [0, n0, _BCB, 8, 21];
  EvaluationDatasetName = [0, n0, _EDN, 8, 0];
  EvaluationJobDescription = [0, n0, _EJD, 8, 0];
  EvaluationJobIdentifier = [0, n0, _EJI, 8, 0];
  EvaluationMetricDescription = [0, n0, _EMD, 8, 0];
  EvaluationMetricName = [0, n0, _EMN, 8, 0];
  EvaluationModelInferenceParams = [0, n0, _EMIP, 8, 0];
  GuardrailBlockedMessaging = [0, n0, _GBM, 8, 0];
  GuardrailContentFilterAction = [0, n0, _GCFA, 8, 0];
  GuardrailContentFiltersTierName = [0, n0, _GCFTN, 8, 0];
  GuardrailContextualGroundingAction = [0, n0, _GCGA, 8, 0];
  GuardrailDescription = [0, n0, _GD, 8, 0];
  GuardrailFailureRecommendation = [0, n0, _GFR, 8, 0];
  GuardrailModality = [0, n0, _GM, 8, 0];
  GuardrailName = [0, n0, _GN, 8, 0];
  GuardrailStatusReason = [0, n0, _GSR, 8, 0];
  GuardrailTopicAction = [0, n0, _GTA, 8, 0];
  GuardrailTopicDefinition = [0, n0, _GTD, 8, 0];
  GuardrailTopicExample = [0, n0, _GTE, 8, 0];
  GuardrailTopicName = [0, n0, _GTN, 8, 0];
  GuardrailTopicsTierName = [0, n0, _GTTN, 8, 0];
  GuardrailWordAction = [0, n0, _GWA, 8, 0];
  HumanTaskInstructions = [0, n0, _HTI, 8, 0];
  Identifier = [0, n0, _I, 8, 0];
  InferenceProfileDescription = [0, n0, _IPD, 8, 0];
  Message = [0, n0, _M, 8, 0];
  MetricName = [0, n0, _MN, 8, 0];
  PromptRouterDescription = [0, n0, _PRD, 8, 0];
  TextPromptTemplate = [0, n0, _TPT, 8, 0];
  AccountEnforcedGuardrailInferenceInputConfiguration$ = [
    3,
    n0,
    _AEGIIC,
    0,
    [_gI, _gV, _sCG, _mE],
    [0, 0, () => SelectiveContentGuarding$, () => ModelEnforcement$],
    2
  ];
  AccountEnforcedGuardrailOutputConfiguration$ = [
    3,
    n0,
    _AEGOC,
    0,
    [_cI, _gA, _gIu, _iT, _sCG, _gV, _cA, _cB, _uA, _uB, _o, _mE],
    [0, 0, 0, 0, () => SelectiveContentGuarding$, 0, 5, 0, 5, 0, 0, () => ModelEnforcement$]
  ];
  AgreementAvailability$ = [
    3,
    n0,
    _AA,
    0,
    [_st, _eM],
    [0, 0],
    1
  ];
  AutomatedEvaluationConfig$ = [
    3,
    n0,
    _AEC,
    0,
    [_dMC, _eMC, _cMC],
    [[() => EvaluationDatasetMetricConfigs, 0], () => EvaluatorModelConfig$, [() => AutomatedEvaluationCustomMetricConfig$, 0]],
    1
  ];
  AutomatedEvaluationCustomMetricConfig$ = [
    3,
    n0,
    _AECMC,
    0,
    [_cM, _eMC],
    [[() => AutomatedEvaluationCustomMetrics, 0], () => CustomMetricEvaluatorModelConfig$],
    2
  ];
  AutomatedReasoningCheckImpossibleFinding$ = [
    3,
    n0,
    _ARCIF,
    0,
    [_t, _cR, _lW],
    [[() => AutomatedReasoningCheckTranslation$, 0], () => AutomatedReasoningCheckRuleList, [() => AutomatedReasoningCheckLogicWarning$, 0]]
  ];
  AutomatedReasoningCheckInputTextReference$ = [
    3,
    n0,
    _ARCITR,
    0,
    [_te],
    [[() => AutomatedReasoningNaturalLanguageStatementContent, 0]]
  ];
  AutomatedReasoningCheckInvalidFinding$ = [
    3,
    n0,
    _ARCIFu,
    0,
    [_t, _cR, _lW],
    [[() => AutomatedReasoningCheckTranslation$, 0], () => AutomatedReasoningCheckRuleList, [() => AutomatedReasoningCheckLogicWarning$, 0]]
  ];
  AutomatedReasoningCheckLogicWarning$ = [
    3,
    n0,
    _ARCLW,
    0,
    [_ty, _p, _cl],
    [0, [() => AutomatedReasoningLogicStatementList, 0], [() => AutomatedReasoningLogicStatementList, 0]]
  ];
  AutomatedReasoningCheckNoTranslationsFinding$ = [
    3,
    n0,
    _ARCNTF,
    0,
    [],
    []
  ];
  AutomatedReasoningCheckRule$ = [
    3,
    n0,
    _ARCR,
    0,
    [_i, _pVA],
    [0, 0]
  ];
  AutomatedReasoningCheckSatisfiableFinding$ = [
    3,
    n0,
    _ARCSF,
    0,
    [_t, _cTS, _cFS, _lW],
    [[() => AutomatedReasoningCheckTranslation$, 0], [() => AutomatedReasoningCheckScenario$, 0], [() => AutomatedReasoningCheckScenario$, 0], [() => AutomatedReasoningCheckLogicWarning$, 0]]
  ];
  AutomatedReasoningCheckScenario$ = [
    3,
    n0,
    _ARCS,
    0,
    [_sta],
    [[() => AutomatedReasoningLogicStatementList, 0]]
  ];
  AutomatedReasoningCheckTooComplexFinding$ = [
    3,
    n0,
    _ARCTCF,
    0,
    [],
    []
  ];
  AutomatedReasoningCheckTranslation$ = [
    3,
    n0,
    _ARCT,
    0,
    [_cl, _co, _p, _uP, _uC],
    [[() => AutomatedReasoningLogicStatementList, 0], 1, [() => AutomatedReasoningLogicStatementList, 0], [() => AutomatedReasoningCheckInputTextReferenceList, 0], [() => AutomatedReasoningCheckInputTextReferenceList, 0]],
    2
  ];
  AutomatedReasoningCheckTranslationAmbiguousFinding$ = [
    3,
    n0,
    _ARCTAF,
    0,
    [_op, _dS],
    [[() => AutomatedReasoningCheckTranslationOptionList, 0], [() => AutomatedReasoningCheckDifferenceScenarioList, 0]]
  ];
  AutomatedReasoningCheckTranslationOption$ = [
    3,
    n0,
    _ARCTO,
    0,
    [_tr],
    [[() => AutomatedReasoningCheckTranslationList, 0]]
  ];
  AutomatedReasoningCheckValidFinding$ = [
    3,
    n0,
    _ARCVF,
    0,
    [_t, _cTS, _sR, _lW],
    [[() => AutomatedReasoningCheckTranslation$, 0], [() => AutomatedReasoningCheckScenario$, 0], () => AutomatedReasoningCheckRuleList, [() => AutomatedReasoningCheckLogicWarning$, 0]]
  ];
  AutomatedReasoningLogicStatement$ = [
    3,
    n0,
    _ARLS,
    0,
    [_l, _nL],
    [[() => AutomatedReasoningLogicStatementContent, 0], [() => AutomatedReasoningNaturalLanguageStatementContent, 0]],
    1
  ];
  AutomatedReasoningPolicyAddRuleAnnotation$ = [
    3,
    n0,
    _ARPARA,
    0,
    [_ex],
    [[() => AutomatedReasoningPolicyDefinitionRuleExpression, 0]],
    1
  ];
  AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation$ = [
    3,
    n0,
    _ARPARFNLA,
    0,
    [_nL],
    [[() => AutomatedReasoningPolicyAnnotationRuleNaturalLanguage, 0]],
    1
  ];
  AutomatedReasoningPolicyAddRuleMutation$ = [
    3,
    n0,
    _ARPARM,
    0,
    [_r],
    [[() => AutomatedReasoningPolicyDefinitionRule$, 0]],
    1
  ];
  AutomatedReasoningPolicyAddTypeAnnotation$ = [
    3,
    n0,
    _ARPATA,
    0,
    [_n, _d, _v],
    [[() => AutomatedReasoningPolicyDefinitionTypeName, 0], [() => AutomatedReasoningPolicyDefinitionTypeDescription, 0], [() => AutomatedReasoningPolicyDefinitionTypeValueList, 0]],
    3
  ];
  AutomatedReasoningPolicyAddTypeMutation$ = [
    3,
    n0,
    _ARPATM,
    0,
    [_ty],
    [[() => AutomatedReasoningPolicyDefinitionType$, 0]],
    1
  ];
  AutomatedReasoningPolicyAddTypeValue$ = [
    3,
    n0,
    _ARPATV,
    0,
    [_va, _d],
    [0, [() => AutomatedReasoningPolicyDefinitionTypeValueDescription, 0]],
    1
  ];
  AutomatedReasoningPolicyAddVariableAnnotation$ = [
    3,
    n0,
    _ARPAVA,
    0,
    [_n, _ty, _d],
    [[() => AutomatedReasoningPolicyDefinitionVariableName, 0], [() => AutomatedReasoningPolicyDefinitionTypeName, 0], [() => AutomatedReasoningPolicyDefinitionVariableDescription, 0]],
    3
  ];
  AutomatedReasoningPolicyAddVariableMutation$ = [
    3,
    n0,
    _ARPAVM,
    0,
    [_var],
    [[() => AutomatedReasoningPolicyDefinitionVariable$, 0]],
    1
  ];
  AutomatedReasoningPolicyAnnotatedChunk$ = [
    3,
    n0,
    _ARPAC,
    0,
    [_con, _pN],
    [[() => AutomatedReasoningPolicyAnnotatedContentList, 0], 1],
    1
  ];
  AutomatedReasoningPolicyAnnotatedLine$ = [
    3,
    n0,
    _ARPAL,
    0,
    [_lN, _lT],
    [1, [() => AutomatedReasoningPolicyLineText, 0]]
  ];
  AutomatedReasoningPolicyAtomicStatement$ = [
    3,
    n0,
    _ARPAS,
    0,
    [_i, _te, _lo],
    [0, [() => AutomatedReasoningPolicyStatementText, 0], () => AutomatedReasoningPolicyStatementLocation$],
    3
  ];
  AutomatedReasoningPolicyBuildLog$ = [
    3,
    n0,
    _ARPBL,
    0,
    [_en],
    [[() => AutomatedReasoningPolicyBuildLogEntryList, 0]],
    1
  ];
  AutomatedReasoningPolicyBuildLogEntry$ = [
    3,
    n0,
    _ARPBLE,
    0,
    [_a, _st, _bS],
    [[() => AutomatedReasoningPolicyAnnotation$, 0], 0, [() => AutomatedReasoningPolicyBuildStepList, 0]],
    3
  ];
  AutomatedReasoningPolicyBuildResultAssetManifest$ = [
    3,
    n0,
    _ARPBRAM,
    0,
    [_en],
    [[() => AutomatedReasoningPolicyBuildResultAssetManifestList, 0]],
    1
  ];
  AutomatedReasoningPolicyBuildResultAssetManifestEntry$ = [
    3,
    n0,
    _ARPBRAME,
    0,
    [_aT, _aN, _aI],
    [0, [() => AutomatedReasoningPolicyBuildResultAssetName, 0], 0],
    1
  ];
  AutomatedReasoningPolicyBuildStep$ = [
    3,
    n0,
    _ARPBS,
    0,
    [_cont, _me, _pE],
    [[() => AutomatedReasoningPolicyBuildStepContext$, 0], () => AutomatedReasoningPolicyBuildStepMessageList, [() => AutomatedReasoningPolicyDefinitionElement$, 0]],
    2
  ];
  AutomatedReasoningPolicyBuildStepMessage$ = [
    3,
    n0,
    _ARPBSM,
    0,
    [_m, _mT],
    [0, 0],
    2
  ];
  AutomatedReasoningPolicyBuildWorkflowDocument$ = [
    3,
    n0,
    _ARPBWD,
    0,
    [_do, _dCT, _dN, _dD],
    [[() => AutomatedReasoningPolicyBuildDocumentBlob, 0], 0, [() => AutomatedReasoningPolicyBuildDocumentName, 0], [() => AutomatedReasoningPolicyBuildDocumentDescription, 0]],
    3
  ];
  AutomatedReasoningPolicyBuildWorkflowRepairContent$ = [
    3,
    n0,
    _ARPBWRC,
    0,
    [_an],
    [[() => AutomatedReasoningPolicyAnnotationList, 0]],
    1
  ];
  AutomatedReasoningPolicyBuildWorkflowSource$ = [
    3,
    n0,
    _ARPBWS,
    0,
    [_pD, _wC],
    [[() => AutomatedReasoningPolicyDefinition$, 0], [() => AutomatedReasoningPolicyWorkflowTypeContent$, 0]]
  ];
  AutomatedReasoningPolicyBuildWorkflowSummary$ = [
    3,
    n0,
    _ARPBWSu,
    0,
    [_pA, _bWI, _st, _bWT, _cA, _uA],
    [0, 0, 0, 0, 5, 5],
    6
  ];
  AutomatedReasoningPolicyDefinition$ = [
    3,
    n0,
    _ARPDu,
    0,
    [_ve, _typ, _ru, _vari],
    [0, [() => AutomatedReasoningPolicyDefinitionTypeList, 0], [() => AutomatedReasoningPolicyDefinitionRuleList, 0], [() => AutomatedReasoningPolicyDefinitionVariableList, 0]]
  ];
  AutomatedReasoningPolicyDefinitionQualityReport$ = [
    3,
    n0,
    _ARPDQR,
    0,
    [_tC, _vC, _rC, _uT, _uTV, _uV, _cRo, _dRS],
    [1, 1, 1, [() => AutomatedReasoningPolicyDefinitionTypeNameList, 0], [() => AutomatedReasoningPolicyDefinitionTypeValuePairList, 0], [() => AutomatedReasoningPolicyDefinitionVariableNameList, 0], 64 | 0, [() => AutomatedReasoningPolicyDisjointRuleSetList, 0]],
    8
  ];
  AutomatedReasoningPolicyDefinitionRule$ = [
    3,
    n0,
    _ARPDR,
    0,
    [_i, _ex, _aE],
    [0, [() => AutomatedReasoningPolicyDefinitionRuleExpression, 0], [() => AutomatedReasoningPolicyDefinitionRuleAlternateExpression, 0]],
    2
  ];
  AutomatedReasoningPolicyDefinitionType$ = [
    3,
    n0,
    _ARPDT,
    0,
    [_n, _v, _d],
    [[() => AutomatedReasoningPolicyDefinitionTypeName, 0], [() => AutomatedReasoningPolicyDefinitionTypeValueList, 0], [() => AutomatedReasoningPolicyDefinitionTypeDescription, 0]],
    2
  ];
  AutomatedReasoningPolicyDefinitionTypeValue$ = [
    3,
    n0,
    _ARPDTV,
    0,
    [_va, _d],
    [0, [() => AutomatedReasoningPolicyDefinitionTypeValueDescription, 0]],
    1
  ];
  AutomatedReasoningPolicyDefinitionTypeValuePair$ = [
    3,
    n0,
    _ARPDTVP,
    0,
    [_tN, _vN],
    [[() => AutomatedReasoningPolicyDefinitionTypeName, 0], 0],
    2
  ];
  AutomatedReasoningPolicyDefinitionVariable$ = [
    3,
    n0,
    _ARPDV,
    0,
    [_n, _ty, _d],
    [[() => AutomatedReasoningPolicyDefinitionVariableName, 0], [() => AutomatedReasoningPolicyDefinitionTypeName, 0], [() => AutomatedReasoningPolicyDefinitionVariableDescription, 0]],
    3
  ];
  AutomatedReasoningPolicyDeleteRuleAnnotation$ = [
    3,
    n0,
    _ARPDRA,
    0,
    [_rI],
    [0],
    1
  ];
  AutomatedReasoningPolicyDeleteRuleMutation$ = [
    3,
    n0,
    _ARPDRM,
    0,
    [_i],
    [0],
    1
  ];
  AutomatedReasoningPolicyDeleteTypeAnnotation$ = [
    3,
    n0,
    _ARPDTA,
    0,
    [_n],
    [[() => AutomatedReasoningPolicyDefinitionTypeName, 0]],
    1
  ];
  AutomatedReasoningPolicyDeleteTypeMutation$ = [
    3,
    n0,
    _ARPDTM,
    0,
    [_n],
    [[() => AutomatedReasoningPolicyDefinitionTypeName, 0]],
    1
  ];
  AutomatedReasoningPolicyDeleteTypeValue$ = [
    3,
    n0,
    _ARPDTVu,
    0,
    [_va],
    [0],
    1
  ];
  AutomatedReasoningPolicyDeleteVariableAnnotation$ = [
    3,
    n0,
    _ARPDVA,
    0,
    [_n],
    [[() => AutomatedReasoningPolicyDefinitionVariableName, 0]],
    1
  ];
  AutomatedReasoningPolicyDeleteVariableMutation$ = [
    3,
    n0,
    _ARPDVM,
    0,
    [_n],
    [[() => AutomatedReasoningPolicyDefinitionVariableName, 0]],
    1
  ];
  AutomatedReasoningPolicyDisjointRuleSet$ = [
    3,
    n0,
    _ARPDRS,
    0,
    [_vari, _ru],
    [[() => AutomatedReasoningPolicyDefinitionVariableNameList, 0], 64 | 0],
    2
  ];
  AutomatedReasoningPolicyFidelityReport$ = [
    3,
    n0,
    _ARPFR,
    0,
    [_cS, _aS, _rR, _vR, _dSo],
    [1, 1, [() => AutomatedReasoningPolicyRuleReportMap, 0], [() => AutomatedReasoningPolicyVariableReportMap, 0], [() => AutomatedReasoningPolicyReportSourceDocumentList, 0]],
    5
  ];
  AutomatedReasoningPolicyGeneratedTestCase$ = [
    3,
    n0,
    _ARPGTC,
    0,
    [_qC, _gC, _eAFR],
    [[() => AutomatedReasoningPolicyTestQueryContent, 0], [() => AutomatedReasoningPolicyTestGuardContent, 0], 0],
    3
  ];
  AutomatedReasoningPolicyGeneratedTestCases$ = [
    3,
    n0,
    _ARPGTCu,
    0,
    [_gTC],
    [[() => AutomatedReasoningPolicyGeneratedTestCaseList, 0]],
    1
  ];
  AutomatedReasoningPolicyIngestContentAnnotation$ = [
    3,
    n0,
    _ARPICA,
    0,
    [_con],
    [[() => AutomatedReasoningPolicyAnnotationIngestContent, 0]],
    1
  ];
  AutomatedReasoningPolicyPlanning$ = [
    3,
    n0,
    _ARPP,
    0,
    [],
    []
  ];
  AutomatedReasoningPolicyReportSourceDocument$ = [
    3,
    n0,
    _ARPRSD,
    0,
    [_dN, _dH, _dI, _aSt, _dC],
    [[() => AutomatedReasoningPolicyBuildDocumentName, 0], 0, 0, [() => AutomatedReasoningPolicyAtomicStatementList, 0], [() => AutomatedReasoningPolicyAnnotatedChunkList, 0]],
    5
  ];
  AutomatedReasoningPolicyRuleReport$ = [
    3,
    n0,
    _ARPRR,
    0,
    [_r, _gS, _gJ, _aS, _aJ],
    [0, () => AutomatedReasoningPolicyStatementReferenceList, [() => AutomatedReasoningPolicyJustificationList, 0], 1, [() => AutomatedReasoningPolicyJustificationText, 0]],
    1
  ];
  AutomatedReasoningPolicyScenario$ = [
    3,
    n0,
    _ARPS,
    0,
    [_ex, _aE, _eR, _rIu],
    [[() => AutomatedReasoningPolicyScenarioExpression, 0], [() => AutomatedReasoningPolicyScenarioAlternateExpression, 0], 0, 64 | 0],
    4
  ];
  AutomatedReasoningPolicyScenarios$ = [
    3,
    n0,
    _ARPSu,
    0,
    [_pS],
    [[() => AutomatedReasoningPolicyScenarioList, 0]],
    1
  ];
  AutomatedReasoningPolicySourceDocument$ = [
    3,
    n0,
    _ARPSD,
    0,
    [_do, _dCT, _dN, _dH, _dD],
    [[() => AutomatedReasoningPolicyBuildDocumentBlob, 0], 0, [() => AutomatedReasoningPolicyBuildDocumentName, 0], 0, [() => AutomatedReasoningPolicyBuildDocumentDescription, 0]],
    4
  ];
  AutomatedReasoningPolicyStatementLocation$ = [
    3,
    n0,
    _ARPSL,
    0,
    [_li],
    [64 | 1],
    1
  ];
  AutomatedReasoningPolicyStatementReference$ = [
    3,
    n0,
    _ARPSR,
    0,
    [_dI, _sI],
    [0, 0],
    2
  ];
  AutomatedReasoningPolicySummary$ = [
    3,
    n0,
    _ARPSut,
    0,
    [_pA, _n, _ve, _pI, _cA, _uA, _d],
    [0, [() => AutomatedReasoningPolicyName, 0], 0, 0, 5, 5, [() => AutomatedReasoningPolicyDescription, 0]],
    6
  ];
  AutomatedReasoningPolicyTestCase$ = [
    3,
    n0,
    _ARPTC,
    0,
    [_tCI, _gC, _cA, _uA, _qC, _eAFR, _cT],
    [0, [() => AutomatedReasoningPolicyTestGuardContent, 0], 5, 5, [() => AutomatedReasoningPolicyTestQueryContent, 0], 0, 1],
    4
  ];
  AutomatedReasoningPolicyTestResult$ = [
    3,
    n0,
    _ARPTR,
    0,
    [_tCe, _pA, _tRS, _uA, _tF, _tRR, _aTFR],
    [[() => AutomatedReasoningPolicyTestCase$, 0], 0, 0, 5, [() => AutomatedReasoningCheckFindingList, 0], 0, 0],
    4
  ];
  AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation$ = [
    3,
    n0,
    _ARPUFRFA,
    0,
    [_f, _rIu],
    [[() => AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage, 0], 64 | 0],
    1
  ];
  AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation$ = [
    3,
    n0,
    _ARPUFSFA,
    0,
    [_sE, _rIu, _f],
    [[() => AutomatedReasoningPolicyScenarioExpression, 0], 64 | 0, [() => AutomatedReasoningPolicyAnnotationFeedbackNaturalLanguage, 0]],
    1
  ];
  AutomatedReasoningPolicyUpdateRuleAnnotation$ = [
    3,
    n0,
    _ARPURA,
    0,
    [_rI, _ex],
    [0, [() => AutomatedReasoningPolicyDefinitionRuleExpression, 0]],
    2
  ];
  AutomatedReasoningPolicyUpdateRuleMutation$ = [
    3,
    n0,
    _ARPURM,
    0,
    [_r],
    [[() => AutomatedReasoningPolicyDefinitionRule$, 0]],
    1
  ];
  AutomatedReasoningPolicyUpdateTypeAnnotation$ = [
    3,
    n0,
    _ARPUTA,
    0,
    [_n, _v, _nN, _d],
    [[() => AutomatedReasoningPolicyDefinitionTypeName, 0], [() => AutomatedReasoningPolicyTypeValueAnnotationList, 0], [() => AutomatedReasoningPolicyDefinitionTypeName, 0], [() => AutomatedReasoningPolicyDefinitionTypeDescription, 0]],
    2
  ];
  AutomatedReasoningPolicyUpdateTypeMutation$ = [
    3,
    n0,
    _ARPUTM,
    0,
    [_ty],
    [[() => AutomatedReasoningPolicyDefinitionType$, 0]],
    1
  ];
  AutomatedReasoningPolicyUpdateTypeValue$ = [
    3,
    n0,
    _ARPUTV,
    0,
    [_va, _nV, _d],
    [0, 0, [() => AutomatedReasoningPolicyDefinitionTypeValueDescription, 0]],
    1
  ];
  AutomatedReasoningPolicyUpdateVariableAnnotation$ = [
    3,
    n0,
    _ARPUVA,
    0,
    [_n, _nN, _d],
    [[() => AutomatedReasoningPolicyDefinitionVariableName, 0], [() => AutomatedReasoningPolicyDefinitionVariableName, 0], [() => AutomatedReasoningPolicyDefinitionVariableDescription, 0]],
    1
  ];
  AutomatedReasoningPolicyUpdateVariableMutation$ = [
    3,
    n0,
    _ARPUVM,
    0,
    [_var],
    [[() => AutomatedReasoningPolicyDefinitionVariable$, 0]],
    1
  ];
  AutomatedReasoningPolicyVariableReport$ = [
    3,
    n0,
    _ARPVR,
    0,
    [_pV, _gS, _gJ, _aS, _aJ],
    [[() => AutomatedReasoningPolicyDefinitionVariableName, 0], () => AutomatedReasoningPolicyStatementReferenceList, [() => AutomatedReasoningPolicyJustificationList, 0], 1, [() => AutomatedReasoningPolicyJustificationText, 0]],
    1
  ];
  BatchDeleteEvaluationJobError$ = [
    3,
    n0,
    _BDEJE,
    0,
    [_jI, _cod, _m],
    [[() => EvaluationJobIdentifier, 0], 0, 0],
    2
  ];
  BatchDeleteEvaluationJobItem$ = [
    3,
    n0,
    _BDEJI,
    0,
    [_jI, _jS],
    [[() => EvaluationJobIdentifier, 0], 0],
    2
  ];
  BatchDeleteEvaluationJobRequest$ = [
    3,
    n0,
    _BDEJR,
    0,
    [_jIo],
    [[() => EvaluationJobIdentifiers, 0]],
    1
  ];
  BatchDeleteEvaluationJobResponse$ = [
    3,
    n0,
    _BDEJRa,
    0,
    [_er, _eJ],
    [[() => BatchDeleteEvaluationJobErrors, 0], [() => BatchDeleteEvaluationJobItems, 0]],
    2
  ];
  BedrockEvaluatorModel$ = [
    3,
    n0,
    _BEM,
    0,
    [_mI],
    [0],
    1
  ];
  ByteContentDoc$ = [
    3,
    n0,
    _BCD,
    0,
    [_id, _cTo, _da],
    [[() => Identifier, 0], 0, [() => ByteContentBlob, 0]],
    3
  ];
  CancelAutomatedReasoningPolicyBuildWorkflowRequest$ = [
    3,
    n0,
    _CARPBWR,
    0,
    [_pA, _bWI],
    [[0, 1], [0, 1]],
    2
  ];
  CancelAutomatedReasoningPolicyBuildWorkflowResponse$ = [
    3,
    n0,
    _CARPBWRa,
    0,
    [],
    []
  ];
  CloudWatchConfig$ = [
    3,
    n0,
    _CWC,
    0,
    [_lGN, _rA, _lDDSC],
    [0, 0, () => S3Config$],
    2
  ];
  CreateAutomatedReasoningPolicyRequest$ = [
    3,
    n0,
    _CARPR,
    0,
    [_n, _d, _cRT, _pD, _kKI, _ta],
    [[() => AutomatedReasoningPolicyName, 0], [() => AutomatedReasoningPolicyDescription, 0], [0, 4], [() => AutomatedReasoningPolicyDefinition$, 0], 0, () => TagList],
    1
  ];
  CreateAutomatedReasoningPolicyResponse$ = [
    3,
    n0,
    _CARPRr,
    0,
    [_pA, _ve, _n, _cA, _uA, _d, _dHe],
    [0, 0, [() => AutomatedReasoningPolicyName, 0], 5, 5, [() => AutomatedReasoningPolicyDescription, 0], 0],
    5
  ];
  CreateAutomatedReasoningPolicyTestCaseRequest$ = [
    3,
    n0,
    _CARPTCR,
    0,
    [_pA, _gC, _eAFR, _qC, _cRT, _cT],
    [[0, 1], [() => AutomatedReasoningPolicyTestGuardContent, 0], 0, [() => AutomatedReasoningPolicyTestQueryContent, 0], [0, 4], 1],
    3
  ];
  CreateAutomatedReasoningPolicyTestCaseResponse$ = [
    3,
    n0,
    _CARPTCRr,
    0,
    [_pA, _tCI],
    [0, 0],
    2
  ];
  CreateAutomatedReasoningPolicyVersionRequest$ = [
    3,
    n0,
    _CARPVR,
    0,
    [_pA, _lUDH, _cRT, _ta],
    [[0, 1], 0, [0, 4], () => TagList],
    2
  ];
  CreateAutomatedReasoningPolicyVersionResponse$ = [
    3,
    n0,
    _CARPVRr,
    0,
    [_pA, _ve, _n, _dHe, _cA, _d],
    [0, 0, [() => AutomatedReasoningPolicyName, 0], 0, 5, [() => AutomatedReasoningPolicyDescription, 0]],
    5
  ];
  CreateCustomModelDeploymentRequest$ = [
    3,
    n0,
    _CCMDR,
    0,
    [_mDN, _mA, _d, _ta, _cRT],
    [0, 0, 0, () => TagList, [0, 4]],
    2
  ];
  CreateCustomModelDeploymentResponse$ = [
    3,
    n0,
    _CCMDRr,
    0,
    [_cMDA],
    [0],
    1
  ];
  CreateCustomModelRequest$ = [
    3,
    n0,
    _CCMR,
    0,
    [_mN, _mSC, _mKKA, _rA, _mTo, _cRT],
    [0, () => ModelDataSource$, 0, 0, () => TagList, [0, 4]],
    2
  ];
  CreateCustomModelResponse$ = [
    3,
    n0,
    _CCMRr,
    0,
    [_mA],
    [0],
    1
  ];
  CreateEvaluationJobRequest$ = [
    3,
    n0,
    _CEJR,
    0,
    [_jN, _rA, _eC, _iC, _oDC, _jD, _cRT, _cEKI, _jT, _aTp],
    [0, 0, [() => EvaluationConfig$, 0], [() => EvaluationInferenceConfig$, 0], () => EvaluationOutputDataConfig$, [() => EvaluationJobDescription, 0], [0, 4], 0, () => TagList, 0],
    5
  ];
  CreateEvaluationJobResponse$ = [
    3,
    n0,
    _CEJRr,
    0,
    [_jA],
    [0],
    1
  ];
  CreateFoundationModelAgreementRequest$ = [
    3,
    n0,
    _CFMAR,
    0,
    [_oT, _mIo],
    [0, 0],
    2
  ];
  CreateFoundationModelAgreementResponse$ = [
    3,
    n0,
    _CFMARr,
    0,
    [_mIo],
    [0],
    1
  ];
  CreateGuardrailRequest$ = [
    3,
    n0,
    _CGR,
    0,
    [_n, _bIM, _bOM, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC, _aRPC, _cRC, _kKI, _ta, _cRT],
    [[() => GuardrailName, 0], [() => GuardrailBlockedMessaging, 0], [() => GuardrailBlockedMessaging, 0], [() => GuardrailDescription, 0], [() => GuardrailTopicPolicyConfig$, 0], [() => GuardrailContentPolicyConfig$, 0], [() => GuardrailWordPolicyConfig$, 0], () => GuardrailSensitiveInformationPolicyConfig$, [() => GuardrailContextualGroundingPolicyConfig$, 0], () => GuardrailAutomatedReasoningPolicyConfig$, () => GuardrailCrossRegionConfig$, 0, () => TagList, [0, 4]],
    3
  ];
  CreateGuardrailResponse$ = [
    3,
    n0,
    _CGRr,
    0,
    [_gIu, _gA, _ve, _cA],
    [0, 0, 0, 5],
    4
  ];
  CreateGuardrailVersionRequest$ = [
    3,
    n0,
    _CGVR,
    0,
    [_gI, _d, _cRT],
    [[0, 1], [() => GuardrailDescription, 0], [0, 4]],
    1
  ];
  CreateGuardrailVersionResponse$ = [
    3,
    n0,
    _CGVRr,
    0,
    [_gIu, _ve],
    [0, 0],
    2
  ];
  CreateInferenceProfileRequest$ = [
    3,
    n0,
    _CIPR,
    0,
    [_iPN, _mS, _d, _cRT, _ta],
    [0, () => InferenceProfileModelSource$, [() => InferenceProfileDescription, 0], [0, 4], () => TagList],
    2
  ];
  CreateInferenceProfileResponse$ = [
    3,
    n0,
    _CIPRr,
    0,
    [_iPA, _st],
    [0, 0],
    1
  ];
  CreateMarketplaceModelEndpointRequest$ = [
    3,
    n0,
    _CMMER,
    0,
    [_mSI, _eCn, _eN, _aEc, _cRT, _ta],
    [0, () => EndpointConfig$, 0, 2, [0, 4], () => TagList],
    3
  ];
  CreateMarketplaceModelEndpointResponse$ = [
    3,
    n0,
    _CMMERr,
    0,
    [_mME],
    [() => MarketplaceModelEndpoint$],
    1
  ];
  CreateModelCopyJobRequest$ = [
    3,
    n0,
    _CMCJR,
    0,
    [_sMA, _tMN, _mKKI, _tMT, _cRT],
    [0, 0, 0, () => TagList, [0, 4]],
    2
  ];
  CreateModelCopyJobResponse$ = [
    3,
    n0,
    _CMCJRr,
    0,
    [_jA],
    [0],
    1
  ];
  CreateModelCustomizationJobRequest$ = [
    3,
    n0,
    _CMCJRre,
    0,
    [_jN, _cMN, _rA, _bMI, _tDC, _oDC, _cRT, _cTu, _cMKKI, _jT, _cMT, _vDC, _hP, _vCp, _cC],
    [0, 0, 0, 0, [() => TrainingDataConfig$, 0], () => OutputDataConfig$, [0, 4], 0, 0, () => TagList, () => TagList, () => ValidationDataConfig$, 128 | 0, () => VpcConfig$, () => CustomizationConfig$],
    6
  ];
  CreateModelCustomizationJobResponse$ = [
    3,
    n0,
    _CMCJRrea,
    0,
    [_jA],
    [0],
    1
  ];
  CreateModelImportJobRequest$ = [
    3,
    n0,
    _CMIJR,
    0,
    [_jN, _iMN, _rA, _mDS, _jT, _iMT, _cRT, _vCp, _iMKKI],
    [0, 0, 0, () => ModelDataSource$, () => TagList, () => TagList, 0, () => VpcConfig$, 0],
    4
  ];
  CreateModelImportJobResponse$ = [
    3,
    n0,
    _CMIJRr,
    0,
    [_jA],
    [0],
    1
  ];
  CreateModelInvocationJobRequest$ = [
    3,
    n0,
    _CMIJRre,
    0,
    [_jN, _rA, _mIo, _iDC, _oDC, _cRT, _vCp, _tDIH, _ta, _mIT],
    [0, 0, 0, () => ModelInvocationJobInputDataConfig$, () => ModelInvocationJobOutputDataConfig$, [0, 4], () => VpcConfig$, 1, () => TagList, 0],
    5
  ];
  CreateModelInvocationJobResponse$ = [
    3,
    n0,
    _CMIJRrea,
    0,
    [_jA],
    [0],
    1
  ];
  CreatePromptRouterRequest$ = [
    3,
    n0,
    _CPRR,
    0,
    [_pRN, _mo, _rCo, _fM, _cRT, _d, _ta],
    [0, () => PromptRouterTargetModels, () => RoutingCriteria$, () => PromptRouterTargetModel$, [0, 4], [() => PromptRouterDescription, 0], () => TagList],
    4
  ];
  CreatePromptRouterResponse$ = [
    3,
    n0,
    _CPRRr,
    0,
    [_pRA],
    [0]
  ];
  CreateProvisionedModelThroughputRequest$ = [
    3,
    n0,
    _CPMTR,
    0,
    [_mU, _pMN, _mIo, _cRT, _cD, _ta],
    [1, 0, 0, [0, 4], 0, () => TagList],
    3
  ];
  CreateProvisionedModelThroughputResponse$ = [
    3,
    n0,
    _CPMTRr,
    0,
    [_pMA],
    [0],
    1
  ];
  CustomMetricBedrockEvaluatorModel$ = [
    3,
    n0,
    _CMBEM,
    0,
    [_mI],
    [0],
    1
  ];
  CustomMetricDefinition$ = [
    3,
    n0,
    _CMD,
    8,
    [_n, _in, _rS],
    [[() => MetricName, 0], 0, () => RatingScale],
    2
  ];
  CustomMetricEvaluatorModelConfig$ = [
    3,
    n0,
    _CMEMC,
    0,
    [_bEM],
    [() => CustomMetricBedrockEvaluatorModels],
    1
  ];
  CustomModelDeploymentSummary$ = [
    3,
    n0,
    _CMDS,
    0,
    [_cMDA, _cMDN, _mA, _cA, _st, _lUA, _fMa],
    [0, 0, 0, 5, 0, 5, 0],
    5
  ];
  CustomModelDeploymentUpdateDetails$ = [
    3,
    n0,
    _CMDUD,
    0,
    [_mA, _uS],
    [0, 0],
    2
  ];
  CustomModelSummary$ = [
    3,
    n0,
    _CMS,
    0,
    [_mA, _mN, _cTr, _bMA, _bMN, _cTu, _oAI, _mSo],
    [0, 0, 5, 0, 0, 0, 0, 0],
    5
  ];
  CustomModelUnits$ = [
    3,
    n0,
    _CMU,
    0,
    [_cMUPMC, _cMUV],
    [1, 0]
  ];
  DataProcessingDetails$ = [
    3,
    n0,
    _DPD,
    0,
    [_st, _cTr, _lMT],
    [0, 5, 5]
  ];
  DeleteAutomatedReasoningPolicyBuildWorkflowRequest$ = [
    3,
    n0,
    _DARPBWR,
    0,
    [_pA, _bWI, _lUA],
    [[0, 1], [0, 1], [5, { [_hQ]: _uA }]],
    3
  ];
  DeleteAutomatedReasoningPolicyBuildWorkflowResponse$ = [
    3,
    n0,
    _DARPBWRe,
    0,
    [],
    []
  ];
  DeleteAutomatedReasoningPolicyRequest$ = [
    3,
    n0,
    _DARPR,
    0,
    [_pA, _fo],
    [[0, 1], [2, { [_hQ]: _fo }]],
    1
  ];
  DeleteAutomatedReasoningPolicyResponse$ = [
    3,
    n0,
    _DARPRe,
    0,
    [],
    []
  ];
  DeleteAutomatedReasoningPolicyTestCaseRequest$ = [
    3,
    n0,
    _DARPTCR,
    0,
    [_pA, _tCI, _lUA],
    [[0, 1], [0, 1], [5, { [_hQ]: _uA }]],
    3
  ];
  DeleteAutomatedReasoningPolicyTestCaseResponse$ = [
    3,
    n0,
    _DARPTCRe,
    0,
    [],
    []
  ];
  DeleteCustomModelDeploymentRequest$ = [
    3,
    n0,
    _DCMDR,
    0,
    [_cMDI],
    [[0, 1]],
    1
  ];
  DeleteCustomModelDeploymentResponse$ = [
    3,
    n0,
    _DCMDRe,
    0,
    [],
    []
  ];
  DeleteCustomModelRequest$ = [
    3,
    n0,
    _DCMR,
    0,
    [_mI],
    [[0, 1]],
    1
  ];
  DeleteCustomModelResponse$ = [
    3,
    n0,
    _DCMRe,
    0,
    [],
    []
  ];
  DeleteEnforcedGuardrailConfigurationRequest$ = [
    3,
    n0,
    _DEGCR,
    0,
    [_cI],
    [[0, 1]],
    1
  ];
  DeleteEnforcedGuardrailConfigurationResponse$ = [
    3,
    n0,
    _DEGCRe,
    0,
    [],
    []
  ];
  DeleteFoundationModelAgreementRequest$ = [
    3,
    n0,
    _DFMAR,
    0,
    [_mIo],
    [0],
    1
  ];
  DeleteFoundationModelAgreementResponse$ = [
    3,
    n0,
    _DFMARe,
    0,
    [],
    []
  ];
  DeleteGuardrailRequest$ = [
    3,
    n0,
    _DGR,
    0,
    [_gI, _gV],
    [[0, 1], [0, { [_hQ]: _gV }]],
    1
  ];
  DeleteGuardrailResponse$ = [
    3,
    n0,
    _DGRe,
    0,
    [],
    []
  ];
  DeleteImportedModelRequest$ = [
    3,
    n0,
    _DIMR,
    0,
    [_mI],
    [[0, 1]],
    1
  ];
  DeleteImportedModelResponse$ = [
    3,
    n0,
    _DIMRe,
    0,
    [],
    []
  ];
  DeleteInferenceProfileRequest$ = [
    3,
    n0,
    _DIPR,
    0,
    [_iPI],
    [[0, 1]],
    1
  ];
  DeleteInferenceProfileResponse$ = [
    3,
    n0,
    _DIPRe,
    0,
    [],
    []
  ];
  DeleteMarketplaceModelEndpointRequest$ = [
    3,
    n0,
    _DMMER,
    0,
    [_eA],
    [[0, 1]],
    1
  ];
  DeleteMarketplaceModelEndpointResponse$ = [
    3,
    n0,
    _DMMERe,
    0,
    [],
    []
  ];
  DeleteModelInvocationLoggingConfigurationRequest$ = [
    3,
    n0,
    _DMILCR,
    0,
    [],
    []
  ];
  DeleteModelInvocationLoggingConfigurationResponse$ = [
    3,
    n0,
    _DMILCRe,
    0,
    [],
    []
  ];
  DeletePromptRouterRequest$ = [
    3,
    n0,
    _DPRR,
    0,
    [_pRA],
    [[0, 1]],
    1
  ];
  DeletePromptRouterResponse$ = [
    3,
    n0,
    _DPRRe,
    0,
    [],
    []
  ];
  DeleteProvisionedModelThroughputRequest$ = [
    3,
    n0,
    _DPMTR,
    0,
    [_pMI],
    [[0, 1]],
    1
  ];
  DeleteProvisionedModelThroughputResponse$ = [
    3,
    n0,
    _DPMTRe,
    0,
    [],
    []
  ];
  DeleteResourcePolicyRequest$ = [
    3,
    n0,
    _DRPR,
    0,
    [_rAe],
    [[0, 1]],
    1
  ];
  DeleteResourcePolicyResponse$ = [
    3,
    n0,
    _DRPRe,
    0,
    [],
    []
  ];
  DeregisterMarketplaceModelEndpointRequest$ = [
    3,
    n0,
    _DMMERer,
    0,
    [_eA],
    [[0, 1]],
    1
  ];
  DeregisterMarketplaceModelEndpointResponse$ = [
    3,
    n0,
    _DMMERere,
    0,
    [],
    []
  ];
  DimensionalPriceRate$ = [
    3,
    n0,
    _DPR,
    0,
    [_di, _pr, _d, _u],
    [0, 0, 0, 0]
  ];
  DistillationConfig$ = [
    3,
    n0,
    _DC,
    0,
    [_tMC],
    [() => TeacherModelConfig$],
    1
  ];
  EvaluationBedrockModel$ = [
    3,
    n0,
    _EBM,
    0,
    [_mI, _iP, _pC],
    [0, [() => EvaluationModelInferenceParams, 0], () => PerformanceConfiguration$],
    1
  ];
  EvaluationDataset$ = [
    3,
    n0,
    _ED,
    0,
    [_n, _dL],
    [[() => EvaluationDatasetName, 0], () => EvaluationDatasetLocation$],
    1
  ];
  EvaluationDatasetMetricConfig$ = [
    3,
    n0,
    _EDMC,
    0,
    [_tT, _dat, _mNe],
    [0, [() => EvaluationDataset$, 0], [() => EvaluationMetricNames, 0]],
    3
  ];
  EvaluationInferenceConfigSummary$ = [
    3,
    n0,
    _EICS,
    0,
    [_mCS, _rCS],
    [() => EvaluationModelConfigSummary$, () => EvaluationRagConfigSummary$]
  ];
  EvaluationModelConfigSummary$ = [
    3,
    n0,
    _EMCS,
    0,
    [_bMIe, _pISI],
    [64 | 0, 64 | 0]
  ];
  EvaluationOutputDataConfig$ = [
    3,
    n0,
    _EODC,
    0,
    [_sU],
    [0],
    1
  ];
  EvaluationPrecomputedInferenceSource$ = [
    3,
    n0,
    _EPIS,
    0,
    [_iSI],
    [0],
    1
  ];
  EvaluationPrecomputedRetrieveAndGenerateSourceConfig$ = [
    3,
    n0,
    _EPRAGSC,
    0,
    [_rSI],
    [0],
    1
  ];
  EvaluationPrecomputedRetrieveSourceConfig$ = [
    3,
    n0,
    _EPRSC,
    0,
    [_rSI],
    [0],
    1
  ];
  EvaluationRagConfigSummary$ = [
    3,
    n0,
    _ERCS,
    0,
    [_bKBI, _pRSI],
    [64 | 0, 64 | 0]
  ];
  EvaluationSummary$ = [
    3,
    n0,
    _ES,
    0,
    [_jA, _jN, _st, _cTr, _jTo, _eTT, _mIod, _rIa, _eMI, _cMEMI, _iCS, _aTp],
    [0, 0, 0, 5, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, () => EvaluationInferenceConfigSummary$, 0],
    6
  ];
  ExportAutomatedReasoningPolicyVersionRequest$ = [
    3,
    n0,
    _EARPVR,
    0,
    [_pA],
    [[0, 1]],
    1
  ];
  ExportAutomatedReasoningPolicyVersionResponse$ = [
    3,
    n0,
    _EARPVRx,
    0,
    [_pD],
    [[() => AutomatedReasoningPolicyDefinition$, 16]],
    1
  ];
  ExternalSource$ = [
    3,
    n0,
    _ESx,
    0,
    [_sT, _sL, _bC],
    [0, () => S3ObjectDoc$, [() => ByteContentDoc$, 0]],
    1
  ];
  ExternalSourcesGenerationConfiguration$ = [
    3,
    n0,
    _ESGC,
    0,
    [_pT, _gCu, _kIC, _aMRF],
    [[() => PromptTemplate$, 0], () => GuardrailConfiguration$, () => KbInferenceConfig$, 128 | 15]
  ];
  ExternalSourcesRetrieveAndGenerateConfiguration$ = [
    3,
    n0,
    _ESRAGC,
    0,
    [_mA, _so, _gCe],
    [0, [() => ExternalSources, 0], [() => ExternalSourcesGenerationConfiguration$, 0]],
    2
  ];
  FieldForReranking$ = [
    3,
    n0,
    _FFR,
    0,
    [_fN],
    [0],
    1
  ];
  FilterAttribute$ = [
    3,
    n0,
    _FA,
    0,
    [_k, _va],
    [0, 15],
    2
  ];
  FoundationModelDetails$ = [
    3,
    n0,
    _FMD,
    0,
    [_mA, _mIo, _mN, _pNr, _iM, _oM, _rSS, _cSu, _iTS, _mL],
    [0, 0, 0, 0, 64 | 0, 64 | 0, 2, 64 | 0, 64 | 0, () => FoundationModelLifecycle$],
    2
  ];
  FoundationModelLifecycle$ = [
    3,
    n0,
    _FML,
    0,
    [_st, _sOLT, _eOLT, _lTe, _pEAT],
    [0, 5, 5, 5, 5],
    1
  ];
  FoundationModelSummary$ = [
    3,
    n0,
    _FMS,
    0,
    [_mA, _mIo, _mN, _pNr, _iM, _oM, _rSS, _cSu, _iTS, _mL],
    [0, 0, 0, 0, 64 | 0, 64 | 0, 2, 64 | 0, 64 | 0, () => FoundationModelLifecycle$],
    2
  ];
  GenerationConfiguration$ = [
    3,
    n0,
    _GC,
    0,
    [_pT, _gCu, _kIC, _aMRF],
    [[() => PromptTemplate$, 0], () => GuardrailConfiguration$, () => KbInferenceConfig$, 128 | 15]
  ];
  GetAutomatedReasoningPolicyAnnotationsRequest$ = [
    3,
    n0,
    _GARPAR,
    0,
    [_pA, _bWI],
    [[0, 1], [0, 1]],
    2
  ];
  GetAutomatedReasoningPolicyAnnotationsResponse$ = [
    3,
    n0,
    _GARPARe,
    0,
    [_pA, _n, _bWI, _an, _aSH, _uA],
    [0, [() => AutomatedReasoningPolicyName, 0], 0, [() => AutomatedReasoningPolicyAnnotationList, 0], 0, 5],
    6
  ];
  GetAutomatedReasoningPolicyBuildWorkflowRequest$ = [
    3,
    n0,
    _GARPBWR,
    0,
    [_pA, _bWI],
    [[0, 1], [0, 1]],
    2
  ];
  GetAutomatedReasoningPolicyBuildWorkflowResponse$ = [
    3,
    n0,
    _GARPBWRe,
    0,
    [_pA, _bWI, _st, _bWT, _cA, _uA, _dN, _dCT, _dD],
    [0, 0, 0, 0, 5, 5, [() => AutomatedReasoningPolicyBuildDocumentName, 0], 0, [() => AutomatedReasoningPolicyBuildDocumentDescription, 0]],
    6
  ];
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest$ = [
    3,
    n0,
    _GARPBWRAR,
    0,
    [_pA, _bWI, _aT, _aI],
    [[0, 1], [0, 1], [0, { [_hQ]: _aT }], [0, { [_hQ]: _aI }]],
    3
  ];
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse$ = [
    3,
    n0,
    _GARPBWRARe,
    0,
    [_pA, _bWI, _bWA],
    [0, 0, [() => AutomatedReasoningPolicyBuildResultAssets$, 0]],
    2
  ];
  GetAutomatedReasoningPolicyNextScenarioRequest$ = [
    3,
    n0,
    _GARPNSR,
    0,
    [_pA, _bWI],
    [[0, 1], [0, 1]],
    2
  ];
  GetAutomatedReasoningPolicyNextScenarioResponse$ = [
    3,
    n0,
    _GARPNSRe,
    0,
    [_pA, _sc],
    [0, [() => AutomatedReasoningPolicyScenario$, 0]],
    1
  ];
  GetAutomatedReasoningPolicyRequest$ = [
    3,
    n0,
    _GARPR,
    0,
    [_pA],
    [[0, 1]],
    1
  ];
  GetAutomatedReasoningPolicyResponse$ = [
    3,
    n0,
    _GARPRe,
    0,
    [_pA, _n, _ve, _pI, _dHe, _uA, _d, _kKA, _cA],
    [0, [() => AutomatedReasoningPolicyName, 0], 0, 0, 0, 5, [() => AutomatedReasoningPolicyDescription, 0], 0, 5],
    6
  ];
  GetAutomatedReasoningPolicyTestCaseRequest$ = [
    3,
    n0,
    _GARPTCR,
    0,
    [_pA, _tCI],
    [[0, 1], [0, 1]],
    2
  ];
  GetAutomatedReasoningPolicyTestCaseResponse$ = [
    3,
    n0,
    _GARPTCRe,
    0,
    [_pA, _tCe],
    [0, [() => AutomatedReasoningPolicyTestCase$, 0]],
    2
  ];
  GetAutomatedReasoningPolicyTestResultRequest$ = [
    3,
    n0,
    _GARPTRR,
    0,
    [_pA, _bWI, _tCI],
    [[0, 1], [0, 1], [0, 1]],
    3
  ];
  GetAutomatedReasoningPolicyTestResultResponse$ = [
    3,
    n0,
    _GARPTRRe,
    0,
    [_tR],
    [[() => AutomatedReasoningPolicyTestResult$, 0]],
    1
  ];
  GetCustomModelDeploymentRequest$ = [
    3,
    n0,
    _GCMDR,
    0,
    [_cMDI],
    [[0, 1]],
    1
  ];
  GetCustomModelDeploymentResponse$ = [
    3,
    n0,
    _GCMDRe,
    0,
    [_cMDA, _mDN, _mA, _cA, _st, _d, _uD, _fMa, _lUA],
    [0, 0, 0, 5, 0, 0, () => CustomModelDeploymentUpdateDetails$, 0, 5],
    5
  ];
  GetCustomModelRequest$ = [
    3,
    n0,
    _GCMR,
    0,
    [_mI],
    [[0, 1]],
    1
  ];
  GetCustomModelResponse$ = [
    3,
    n0,
    _GCMRe,
    0,
    [_mA, _mN, _cTr, _jN, _jA, _bMA, _cTu, _mKKA, _hP, _tDC, _vDC, _oDC, _tM, _vM, _cC, _mSo, _fMa],
    [0, 0, 5, 0, 0, 0, 0, 0, 128 | 0, [() => TrainingDataConfig$, 0], () => ValidationDataConfig$, () => OutputDataConfig$, () => TrainingMetrics$, () => ValidationMetrics, () => CustomizationConfig$, 0, 0],
    3
  ];
  GetEvaluationJobRequest$ = [
    3,
    n0,
    _GEJR,
    0,
    [_jI],
    [[() => EvaluationJobIdentifier, 1]],
    1
  ];
  GetEvaluationJobResponse$ = [
    3,
    n0,
    _GEJRe,
    0,
    [_jN, _st, _jA, _rA, _jTo, _eC, _iC, _oDC, _cTr, _jD, _cEKI, _aTp, _lMT, _fMai],
    [0, 0, 0, 0, 0, [() => EvaluationConfig$, 0], [() => EvaluationInferenceConfig$, 0], () => EvaluationOutputDataConfig$, 5, [() => EvaluationJobDescription, 0], 0, 0, 5, 64 | 0],
    9
  ];
  GetFoundationModelAvailabilityRequest$ = [
    3,
    n0,
    _GFMAR,
    0,
    [_mIo],
    [[0, 1]],
    1
  ];
  GetFoundationModelAvailabilityResponse$ = [
    3,
    n0,
    _GFMARe,
    0,
    [_mIo, _aA, _aSu, _eAn, _rAeg],
    [0, () => AgreementAvailability$, 0, 0, 0],
    5
  ];
  GetFoundationModelRequest$ = [
    3,
    n0,
    _GFMR,
    0,
    [_mI],
    [[0, 1]],
    1
  ];
  GetFoundationModelResponse$ = [
    3,
    n0,
    _GFMRe,
    0,
    [_mD],
    [() => FoundationModelDetails$]
  ];
  GetGuardrailRequest$ = [
    3,
    n0,
    _GGR,
    0,
    [_gI, _gV],
    [[0, 1], [0, { [_hQ]: _gV }]],
    1
  ];
  GetGuardrailResponse$ = [
    3,
    n0,
    _GGRe,
    0,
    [_n, _gIu, _gA, _ve, _st, _cA, _uA, _bIM, _bOM, _d, _tP, _cP, _wP, _sIP, _cGP, _aRP, _cRD, _sRt, _fR, _kKA],
    [[() => GuardrailName, 0], 0, 0, 0, 0, 5, 5, [() => GuardrailBlockedMessaging, 0], [() => GuardrailBlockedMessaging, 0], [() => GuardrailDescription, 0], [() => GuardrailTopicPolicy$, 0], [() => GuardrailContentPolicy$, 0], [() => GuardrailWordPolicy$, 0], () => GuardrailSensitiveInformationPolicy$, [() => GuardrailContextualGroundingPolicy$, 0], () => GuardrailAutomatedReasoningPolicy$, () => GuardrailCrossRegionDetails$, [() => GuardrailStatusReasons, 0], [() => GuardrailFailureRecommendations, 0], 0],
    9
  ];
  GetImportedModelRequest$ = [
    3,
    n0,
    _GIMR,
    0,
    [_mI],
    [[0, 1]],
    1
  ];
  GetImportedModelResponse$ = [
    3,
    n0,
    _GIMRe,
    0,
    [_mA, _mN, _jN, _jA, _mDS, _cTr, _mAo, _mKKA, _iS, _cMU],
    [0, 0, 0, 0, () => ModelDataSource$, 5, 0, 0, 2, () => CustomModelUnits$]
  ];
  GetInferenceProfileRequest$ = [
    3,
    n0,
    _GIPR,
    0,
    [_iPI],
    [[0, 1]],
    1
  ];
  GetInferenceProfileResponse$ = [
    3,
    n0,
    _GIPRe,
    0,
    [_iPN, _iPA, _mo, _iPIn, _st, _ty, _d, _cA, _uA],
    [0, 0, () => InferenceProfileModels, 0, 0, 0, [() => InferenceProfileDescription, 0], 5, 5],
    6
  ];
  GetMarketplaceModelEndpointRequest$ = [
    3,
    n0,
    _GMMER,
    0,
    [_eA],
    [[0, 1]],
    1
  ];
  GetMarketplaceModelEndpointResponse$ = [
    3,
    n0,
    _GMMERe,
    0,
    [_mME],
    [() => MarketplaceModelEndpoint$]
  ];
  GetModelCopyJobRequest$ = [
    3,
    n0,
    _GMCJR,
    0,
    [_jA],
    [[0, 1]],
    1
  ];
  GetModelCopyJobResponse$ = [
    3,
    n0,
    _GMCJRe,
    0,
    [_jA, _st, _cTr, _tMA, _sAI, _sMA, _tMN, _tMKKA, _tMT, _fMa, _sMN],
    [0, 0, 5, 0, 0, 0, 0, 0, () => TagList, 0, 0],
    6
  ];
  GetModelCustomizationJobRequest$ = [
    3,
    n0,
    _GMCJRet,
    0,
    [_jI],
    [[0, 1]],
    1
  ];
  GetModelCustomizationJobResponse$ = [
    3,
    n0,
    _GMCJReto,
    0,
    [_jA, _jN, _oMN, _rA, _cTr, _bMA, _tDC, _vDC, _oDC, _oMA, _cRT, _st, _sD, _fMa, _lMT, _eT, _hP, _cTu, _oMKKA, _tM, _vM, _vCp, _cC],
    [0, 0, 0, 0, 5, 0, [() => TrainingDataConfig$, 0], () => ValidationDataConfig$, () => OutputDataConfig$, 0, 0, 0, () => StatusDetails$, 0, 5, 5, 128 | 0, 0, 0, () => TrainingMetrics$, () => ValidationMetrics, () => VpcConfig$, () => CustomizationConfig$],
    9
  ];
  GetModelImportJobRequest$ = [
    3,
    n0,
    _GMIJR,
    0,
    [_jI],
    [[0, 1]],
    1
  ];
  GetModelImportJobResponse$ = [
    3,
    n0,
    _GMIJRe,
    0,
    [_jA, _jN, _iMN, _iMA, _rA, _mDS, _st, _fMa, _cTr, _lMT, _eT, _vCp, _iMKKA],
    [0, 0, 0, 0, 0, () => ModelDataSource$, 0, 0, 5, 5, 5, () => VpcConfig$, 0]
  ];
  GetModelInvocationJobRequest$ = [
    3,
    n0,
    _GMIJRet,
    0,
    [_jI],
    [[0, 1]],
    1
  ];
  GetModelInvocationJobResponse$ = [
    3,
    n0,
    _GMIJReto,
    0,
    [_jA, _mIo, _rA, _sTu, _iDC, _oDC, _jN, _cRT, _st, _m, _lMT, _eT, _vCp, _tDIH, _jET, _mIT, _tRC, _pRC, _sRC, _eRC],
    [0, 0, 0, 5, () => ModelInvocationJobInputDataConfig$, () => ModelInvocationJobOutputDataConfig$, 0, 0, 0, [() => Message, 0], 5, 5, () => VpcConfig$, 1, 5, 0, 1, 1, 1, 1],
    6
  ];
  GetModelInvocationLoggingConfigurationRequest$ = [
    3,
    n0,
    _GMILCR,
    0,
    [],
    []
  ];
  GetModelInvocationLoggingConfigurationResponse$ = [
    3,
    n0,
    _GMILCRe,
    0,
    [_lC],
    [() => LoggingConfig$]
  ];
  GetPromptRouterRequest$ = [
    3,
    n0,
    _GPRR,
    0,
    [_pRA],
    [[0, 1]],
    1
  ];
  GetPromptRouterResponse$ = [
    3,
    n0,
    _GPRRe,
    0,
    [_pRN, _rCo, _pRA, _mo, _fM, _st, _ty, _d, _cA, _uA],
    [0, () => RoutingCriteria$, 0, () => PromptRouterTargetModels, () => PromptRouterTargetModel$, 0, 0, [() => PromptRouterDescription, 0], 5, 5],
    7
  ];
  GetProvisionedModelThroughputRequest$ = [
    3,
    n0,
    _GPMTR,
    0,
    [_pMI],
    [[0, 1]],
    1
  ];
  GetProvisionedModelThroughputResponse$ = [
    3,
    n0,
    _GPMTRe,
    0,
    [_mU, _dMU, _pMN, _pMA, _mA, _dMA, _fMA, _st, _cTr, _lMT, _fMa, _cD, _cET],
    [1, 1, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5],
    10
  ];
  GetResourcePolicyRequest$ = [
    3,
    n0,
    _GRPR,
    0,
    [_rAe],
    [[0, 1]],
    1
  ];
  GetResourcePolicyResponse$ = [
    3,
    n0,
    _GRPRe,
    0,
    [_rP],
    [0]
  ];
  GetUseCaseForModelAccessRequest$ = [
    3,
    n0,
    _GUCFMAR,
    0,
    [],
    []
  ];
  GetUseCaseForModelAccessResponse$ = [
    3,
    n0,
    _GUCFMARe,
    0,
    [_fD],
    [21],
    1
  ];
  GuardrailAutomatedReasoningPolicy$ = [
    3,
    n0,
    _GARP,
    0,
    [_po, _cT],
    [64 | 0, 1],
    1
  ];
  GuardrailAutomatedReasoningPolicyConfig$ = [
    3,
    n0,
    _GARPC,
    0,
    [_po, _cT],
    [64 | 0, 1],
    1
  ];
  GuardrailConfiguration$ = [
    3,
    n0,
    _GCu,
    0,
    [_gIu, _gV],
    [0, 0],
    2
  ];
  GuardrailContentFilter$ = [
    3,
    n0,
    _GCF,
    0,
    [_ty, _iSn, _oS, _iM, _oM, _iA, _oA, _iE, _oE],
    [0, 0, 0, [() => GuardrailModalities, 0], [() => GuardrailModalities, 0], [() => GuardrailContentFilterAction, 0], [() => GuardrailContentFilterAction, 0], 2, 2],
    3
  ];
  GuardrailContentFilterConfig$ = [
    3,
    n0,
    _GCFC,
    0,
    [_ty, _iSn, _oS, _iM, _oM, _iA, _oA, _iE, _oE],
    [0, 0, 0, [() => GuardrailModalities, 0], [() => GuardrailModalities, 0], [() => GuardrailContentFilterAction, 0], [() => GuardrailContentFilterAction, 0], 2, 2],
    3
  ];
  GuardrailContentFiltersTier$ = [
    3,
    n0,
    _GCFT,
    0,
    [_tNi],
    [[() => GuardrailContentFiltersTierName, 0]],
    1
  ];
  GuardrailContentFiltersTierConfig$ = [
    3,
    n0,
    _GCFTC,
    0,
    [_tNi],
    [[() => GuardrailContentFiltersTierName, 0]],
    1
  ];
  GuardrailContentPolicy$ = [
    3,
    n0,
    _GCP,
    0,
    [_fi, _ti],
    [[() => GuardrailContentFilters, 0], [() => GuardrailContentFiltersTier$, 0]]
  ];
  GuardrailContentPolicyConfig$ = [
    3,
    n0,
    _GCPC,
    0,
    [_fC, _tCi],
    [[() => GuardrailContentFiltersConfig, 0], [() => GuardrailContentFiltersTierConfig$, 0]],
    1
  ];
  GuardrailContextualGroundingFilter$ = [
    3,
    n0,
    _GCGF,
    0,
    [_ty, _th, _ac, _ena],
    [0, 1, [() => GuardrailContextualGroundingAction, 0], 2],
    2
  ];
  GuardrailContextualGroundingFilterConfig$ = [
    3,
    n0,
    _GCGFC,
    0,
    [_ty, _th, _ac, _ena],
    [0, 1, [() => GuardrailContextualGroundingAction, 0], 2],
    2
  ];
  GuardrailContextualGroundingPolicy$ = [
    3,
    n0,
    _GCGP,
    0,
    [_fi],
    [[() => GuardrailContextualGroundingFilters, 0]],
    1
  ];
  GuardrailContextualGroundingPolicyConfig$ = [
    3,
    n0,
    _GCGPC,
    0,
    [_fC],
    [[() => GuardrailContextualGroundingFiltersConfig, 0]],
    1
  ];
  GuardrailCrossRegionConfig$ = [
    3,
    n0,
    _GCRC,
    0,
    [_gPI],
    [0],
    1
  ];
  GuardrailCrossRegionDetails$ = [
    3,
    n0,
    _GCRD,
    0,
    [_gPIu, _gPA],
    [0, 0]
  ];
  GuardrailManagedWords$ = [
    3,
    n0,
    _GMW,
    0,
    [_ty, _iA, _oA, _iE, _oE],
    [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2],
    1
  ];
  GuardrailManagedWordsConfig$ = [
    3,
    n0,
    _GMWC,
    0,
    [_ty, _iA, _oA, _iE, _oE],
    [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2],
    1
  ];
  GuardrailPiiEntity$ = [
    3,
    n0,
    _GPE,
    0,
    [_ty, _ac, _iA, _oA, _iE, _oE],
    [0, 0, 0, 0, 2, 2],
    2
  ];
  GuardrailPiiEntityConfig$ = [
    3,
    n0,
    _GPEC,
    0,
    [_ty, _ac, _iA, _oA, _iE, _oE],
    [0, 0, 0, 0, 2, 2],
    2
  ];
  GuardrailRegex$ = [
    3,
    n0,
    _GR,
    0,
    [_n, _pa, _ac, _d, _iA, _oA, _iE, _oE],
    [0, 0, 0, 0, 0, 0, 2, 2],
    3
  ];
  GuardrailRegexConfig$ = [
    3,
    n0,
    _GRC,
    0,
    [_n, _pa, _ac, _d, _iA, _oA, _iE, _oE],
    [0, 0, 0, 0, 0, 0, 2, 2],
    3
  ];
  GuardrailSensitiveInformationPolicy$ = [
    3,
    n0,
    _GSIP,
    0,
    [_pEi, _re],
    [() => GuardrailPiiEntities, () => GuardrailRegexes]
  ];
  GuardrailSensitiveInformationPolicyConfig$ = [
    3,
    n0,
    _GSIPC,
    0,
    [_pEC, _rCe],
    [() => GuardrailPiiEntitiesConfig, () => GuardrailRegexesConfig]
  ];
  GuardrailSummary$ = [
    3,
    n0,
    _GS,
    0,
    [_i, _ar, _st, _n, _ve, _cA, _uA, _d, _cRD],
    [0, 0, 0, [() => GuardrailName, 0], 0, 5, 5, [() => GuardrailDescription, 0], () => GuardrailCrossRegionDetails$],
    7
  ];
  GuardrailTopic$ = [
    3,
    n0,
    _GT,
    0,
    [_n, _de, _exa, _ty, _iA, _oA, _iE, _oE],
    [[() => GuardrailTopicName, 0], [() => GuardrailTopicDefinition, 0], [() => GuardrailTopicExamples, 0], 0, [() => GuardrailTopicAction, 0], [() => GuardrailTopicAction, 0], 2, 2],
    2
  ];
  GuardrailTopicConfig$ = [
    3,
    n0,
    _GTC,
    0,
    [_n, _de, _ty, _exa, _iA, _oA, _iE, _oE],
    [[() => GuardrailTopicName, 0], [() => GuardrailTopicDefinition, 0], 0, [() => GuardrailTopicExamples, 0], [() => GuardrailTopicAction, 0], [() => GuardrailTopicAction, 0], 2, 2],
    3
  ];
  GuardrailTopicPolicy$ = [
    3,
    n0,
    _GTP,
    0,
    [_to, _ti],
    [[() => GuardrailTopics, 0], [() => GuardrailTopicsTier$, 0]],
    1
  ];
  GuardrailTopicPolicyConfig$ = [
    3,
    n0,
    _GTPC,
    0,
    [_tCo, _tCi],
    [[() => GuardrailTopicsConfig, 0], [() => GuardrailTopicsTierConfig$, 0]],
    1
  ];
  GuardrailTopicsTier$ = [
    3,
    n0,
    _GTT,
    0,
    [_tNi],
    [[() => GuardrailTopicsTierName, 0]],
    1
  ];
  GuardrailTopicsTierConfig$ = [
    3,
    n0,
    _GTTC,
    0,
    [_tNi],
    [[() => GuardrailTopicsTierName, 0]],
    1
  ];
  GuardrailWord$ = [
    3,
    n0,
    _GW,
    0,
    [_te, _iA, _oA, _iE, _oE],
    [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2],
    1
  ];
  GuardrailWordConfig$ = [
    3,
    n0,
    _GWC,
    0,
    [_te, _iA, _oA, _iE, _oE],
    [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2],
    1
  ];
  GuardrailWordPolicy$ = [
    3,
    n0,
    _GWP,
    0,
    [_w, _mWL],
    [[() => GuardrailWords, 0], [() => GuardrailManagedWordLists, 0]]
  ];
  GuardrailWordPolicyConfig$ = [
    3,
    n0,
    _GWPC,
    0,
    [_wCo, _mWLC],
    [[() => GuardrailWordsConfig, 0], [() => GuardrailManagedWordListsConfig, 0]]
  ];
  HumanEvaluationConfig$ = [
    3,
    n0,
    _HEC,
    0,
    [_dMC, _hWC, _cM],
    [[() => EvaluationDatasetMetricConfigs, 0], [() => HumanWorkflowConfig$, 0], [() => HumanEvaluationCustomMetrics, 0]],
    1
  ];
  HumanEvaluationCustomMetric$ = [
    3,
    n0,
    _HECM,
    0,
    [_n, _rM, _d],
    [[() => EvaluationMetricName, 0], 0, [() => EvaluationMetricDescription, 0]],
    2
  ];
  HumanWorkflowConfig$ = [
    3,
    n0,
    _HWC,
    0,
    [_fDA, _in],
    [0, [() => HumanTaskInstructions, 0]],
    1
  ];
  ImplicitFilterConfiguration$ = [
    3,
    n0,
    _IFC,
    0,
    [_mAe, _mA],
    [[() => MetadataAttributeSchemaList, 0], 0],
    2
  ];
  ImportedModelSummary$ = [
    3,
    n0,
    _IMS,
    0,
    [_mA, _mN, _cTr, _iS, _mAo],
    [0, 0, 5, 2, 0],
    3
  ];
  InferenceProfileModel$ = [
    3,
    n0,
    _IPM,
    0,
    [_mA],
    [0]
  ];
  InferenceProfileSummary$ = [
    3,
    n0,
    _IPS,
    0,
    [_iPN, _iPA, _mo, _iPIn, _st, _ty, _d, _cA, _uA],
    [0, 0, () => InferenceProfileModels, 0, 0, 0, [() => InferenceProfileDescription, 0], 5, 5],
    6
  ];
  InvocationLogsConfig$ = [
    3,
    n0,
    _ILC,
    0,
    [_iLS, _uPR, _rMF],
    [() => InvocationLogSource$, 2, [() => RequestMetadataFilters$, 0]],
    1
  ];
  KbInferenceConfig$ = [
    3,
    n0,
    _KIC,
    0,
    [_tIC],
    [() => TextInferenceConfig$]
  ];
  KnowledgeBaseRetrievalConfiguration$ = [
    3,
    n0,
    _KBRC,
    0,
    [_vSC],
    [[() => KnowledgeBaseVectorSearchConfiguration$, 0]],
    1
  ];
  KnowledgeBaseRetrieveAndGenerateConfiguration$ = [
    3,
    n0,
    _KBRAGC,
    0,
    [_kBI, _mA, _rCet, _gCe, _oC],
    [0, 0, [() => KnowledgeBaseRetrievalConfiguration$, 0], [() => GenerationConfiguration$, 0], () => OrchestrationConfiguration$],
    2
  ];
  KnowledgeBaseVectorSearchConfiguration$ = [
    3,
    n0,
    _KBVSC,
    0,
    [_nOR, _oST, _fil, _iFC, _rCer],
    [1, 0, [() => RetrievalFilter$, 0], [() => ImplicitFilterConfiguration$, 0], [() => VectorSearchRerankingConfiguration$, 0]]
  ];
  LambdaGraderConfig$ = [
    3,
    n0,
    _LGC,
    0,
    [_lA],
    [0],
    1
  ];
  LegalTerm$ = [
    3,
    n0,
    _LT,
    0,
    [_ur],
    [0]
  ];
  ListAutomatedReasoningPoliciesRequest$ = [
    3,
    n0,
    _LARPR,
    0,
    [_pA, _nT, _mR],
    [[0, { [_hQ]: _pA }], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]]
  ];
  ListAutomatedReasoningPoliciesResponse$ = [
    3,
    n0,
    _LARPRi,
    0,
    [_aRPS, _nT],
    [[() => AutomatedReasoningPolicySummaries, 0], 0],
    1
  ];
  ListAutomatedReasoningPolicyBuildWorkflowsRequest$ = [
    3,
    n0,
    _LARPBWR,
    0,
    [_pA, _nT, _mR],
    [[0, 1], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]],
    1
  ];
  ListAutomatedReasoningPolicyBuildWorkflowsResponse$ = [
    3,
    n0,
    _LARPBWRi,
    0,
    [_aRPBWS, _nT],
    [() => AutomatedReasoningPolicyBuildWorkflowSummaries, 0],
    1
  ];
  ListAutomatedReasoningPolicyTestCasesRequest$ = [
    3,
    n0,
    _LARPTCR,
    0,
    [_pA, _nT, _mR],
    [[0, 1], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]],
    1
  ];
  ListAutomatedReasoningPolicyTestCasesResponse$ = [
    3,
    n0,
    _LARPTCRi,
    0,
    [_tCes, _nT],
    [[() => AutomatedReasoningPolicyTestCaseList, 0], 0],
    1
  ];
  ListAutomatedReasoningPolicyTestResultsRequest$ = [
    3,
    n0,
    _LARPTRR,
    0,
    [_pA, _bWI, _nT, _mR],
    [[0, 1], [0, 1], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]],
    2
  ];
  ListAutomatedReasoningPolicyTestResultsResponse$ = [
    3,
    n0,
    _LARPTRRi,
    0,
    [_tRe, _nT],
    [[() => AutomatedReasoningPolicyTestList, 0], 0],
    1
  ];
  ListCustomModelDeploymentsRequest$ = [
    3,
    n0,
    _LCMDR,
    0,
    [_cBr, _cAr, _nC, _mR, _nT, _sB, _sO, _sEt, _mAE],
    [[5, { [_hQ]: _cBr }], [5, { [_hQ]: _cAr }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _mAE }]]
  ];
  ListCustomModelDeploymentsResponse$ = [
    3,
    n0,
    _LCMDRi,
    0,
    [_nT, _mDSo],
    [0, () => CustomModelDeploymentSummaryList]
  ];
  ListCustomModelsRequest$ = [
    3,
    n0,
    _LCMR,
    0,
    [_cTB, _cTA, _nC, _bMAE, _fMAE, _mR, _nT, _sB, _sO, _iO, _mSo],
    [[5, { [_hQ]: _cTB }], [5, { [_hQ]: _cTA }], [0, { [_hQ]: _nC }], [0, { [_hQ]: _bMAE }], [0, { [_hQ]: _fMAE }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }], [2, { [_hQ]: _iO }], [0, { [_hQ]: _mSo }]]
  ];
  ListCustomModelsResponse$ = [
    3,
    n0,
    _LCMRi,
    0,
    [_nT, _mSod],
    [0, () => CustomModelSummaryList]
  ];
  ListEnforcedGuardrailsConfigurationRequest$ = [
    3,
    n0,
    _LEGCR,
    0,
    [_nT],
    [[0, { [_hQ]: _nT }]]
  ];
  ListEnforcedGuardrailsConfigurationResponse$ = [
    3,
    n0,
    _LEGCRi,
    0,
    [_gCua, _nT],
    [() => AccountEnforcedGuardrailsOutputConfiguration, 0],
    1
  ];
  ListEvaluationJobsRequest$ = [
    3,
    n0,
    _LEJR,
    0,
    [_cTA, _cTB, _sEt, _aTE, _nC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _cTA }], [5, { [_hQ]: _cTB }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _aTE }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListEvaluationJobsResponse$ = [
    3,
    n0,
    _LEJRi,
    0,
    [_nT, _jSo],
    [0, () => EvaluationSummaries]
  ];
  ListFoundationModelAgreementOffersRequest$ = [
    3,
    n0,
    _LFMAOR,
    0,
    [_mIo, _oTf],
    [[0, 1], [0, { [_hQ]: _oTf }]],
    1
  ];
  ListFoundationModelAgreementOffersResponse$ = [
    3,
    n0,
    _LFMAORi,
    0,
    [_mIo, _of],
    [0, () => Offers],
    2
  ];
  ListFoundationModelsRequest$ = [
    3,
    n0,
    _LFMR,
    0,
    [_bP, _bCT, _bOMy, _bIT],
    [[0, { [_hQ]: _bP }], [0, { [_hQ]: _bCT }], [0, { [_hQ]: _bOMy }], [0, { [_hQ]: _bIT }]]
  ];
  ListFoundationModelsResponse$ = [
    3,
    n0,
    _LFMRi,
    0,
    [_mSod],
    [() => FoundationModelSummaryList]
  ];
  ListGuardrailsRequest$ = [
    3,
    n0,
    _LGR,
    0,
    [_gI, _mR, _nT],
    [[0, { [_hQ]: _gI }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
  ];
  ListGuardrailsResponse$ = [
    3,
    n0,
    _LGRi,
    0,
    [_g, _nT],
    [[() => GuardrailSummaries, 0], 0],
    1
  ];
  ListImportedModelsRequest$ = [
    3,
    n0,
    _LIMR,
    0,
    [_cTB, _cTA, _nC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _cTB }], [5, { [_hQ]: _cTA }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListImportedModelsResponse$ = [
    3,
    n0,
    _LIMRi,
    0,
    [_nT, _mSod],
    [0, () => ImportedModelSummaryList]
  ];
  ListInferenceProfilesRequest$ = [
    3,
    n0,
    _LIPR,
    0,
    [_mR, _nT, _tE],
    [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _ty }]]
  ];
  ListInferenceProfilesResponse$ = [
    3,
    n0,
    _LIPRi,
    0,
    [_iPS, _nT],
    [[() => InferenceProfileSummaries, 0], 0]
  ];
  ListMarketplaceModelEndpointsRequest$ = [
    3,
    n0,
    _LMMER,
    0,
    [_mR, _nT, _mSE],
    [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _mSI }]]
  ];
  ListMarketplaceModelEndpointsResponse$ = [
    3,
    n0,
    _LMMERi,
    0,
    [_mMEa, _nT],
    [() => MarketplaceModelEndpointSummaries, 0]
  ];
  ListModelCopyJobsRequest$ = [
    3,
    n0,
    _LMCJR,
    0,
    [_cTA, _cTB, _sEt, _sAE, _sMAE, _tMNC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _cTA }], [5, { [_hQ]: _cTB }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _sAE }], [0, { [_hQ]: _sMAE }], [0, { [_hQ]: _oMNC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListModelCopyJobsResponse$ = [
    3,
    n0,
    _LMCJRi,
    0,
    [_nT, _mCJS],
    [0, () => ModelCopyJobSummaries]
  ];
  ListModelCustomizationJobsRequest$ = [
    3,
    n0,
    _LMCJRis,
    0,
    [_cTA, _cTB, _sEt, _nC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _cTA }], [5, { [_hQ]: _cTB }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListModelCustomizationJobsResponse$ = [
    3,
    n0,
    _LMCJRist,
    0,
    [_nT, _mCJSo],
    [0, () => ModelCustomizationJobSummaries]
  ];
  ListModelImportJobsRequest$ = [
    3,
    n0,
    _LMIJR,
    0,
    [_cTA, _cTB, _sEt, _nC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _cTA }], [5, { [_hQ]: _cTB }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListModelImportJobsResponse$ = [
    3,
    n0,
    _LMIJRi,
    0,
    [_nT, _mIJS],
    [0, () => ModelImportJobSummaries]
  ];
  ListModelInvocationJobsRequest$ = [
    3,
    n0,
    _LMIJRis,
    0,
    [_sTA, _sTB, _sEt, _nC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _sTA }], [5, { [_hQ]: _sTB }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListModelInvocationJobsResponse$ = [
    3,
    n0,
    _LMIJRist,
    0,
    [_nT, _iJS],
    [0, [() => ModelInvocationJobSummaries, 0]]
  ];
  ListPromptRoutersRequest$ = [
    3,
    n0,
    _LPRR,
    0,
    [_mR, _nT, _ty],
    [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _ty }]]
  ];
  ListPromptRoutersResponse$ = [
    3,
    n0,
    _LPRRi,
    0,
    [_pRS, _nT],
    [[() => PromptRouterSummaries, 0], 0]
  ];
  ListProvisionedModelThroughputsRequest$ = [
    3,
    n0,
    _LPMTR,
    0,
    [_cTA, _cTB, _sEt, _mAE, _nC, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _cTA }], [5, { [_hQ]: _cTB }], [0, { [_hQ]: _sEt }], [0, { [_hQ]: _mAE }], [0, { [_hQ]: _nC }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListProvisionedModelThroughputsResponse$ = [
    3,
    n0,
    _LPMTRi,
    0,
    [_nT, _pMS],
    [0, () => ProvisionedModelSummaries]
  ];
  ListTagsForResourceRequest$ = [
    3,
    n0,
    _LTFRR,
    0,
    [_rARN],
    [0],
    1
  ];
  ListTagsForResourceResponse$ = [
    3,
    n0,
    _LTFRRi,
    0,
    [_ta],
    [() => TagList]
  ];
  LoggingConfig$ = [
    3,
    n0,
    _LC,
    0,
    [_cWC, _sC, _tDDE, _iDDE, _eDDE, _vDDE, _aDDE],
    [() => CloudWatchConfig$, () => S3Config$, 2, 2, 2, 2, 2]
  ];
  MarketplaceModelEndpoint$ = [
    3,
    n0,
    _MME,
    0,
    [_eA, _mSI, _cA, _uA, _eCn, _eS, _st, _sM, _eSM],
    [0, 0, 5, 5, () => EndpointConfig$, 0, 0, 0, 0],
    6
  ];
  MarketplaceModelEndpointSummary$ = [
    3,
    n0,
    _MMES,
    0,
    [_eA, _mSI, _cA, _uA, _st, _sM],
    [0, 0, 5, 5, 0, 0],
    4
  ];
  MetadataAttributeSchema$ = [
    3,
    n0,
    _MAS,
    8,
    [_k, _ty, _d],
    [0, 0, 0],
    3
  ];
  MetadataConfigurationForReranking$ = [
    3,
    n0,
    _MCFR,
    0,
    [_sMe, _sMC],
    [0, [() => RerankingMetadataSelectiveModeConfiguration$, 0]],
    1
  ];
  ModelCopyJobSummary$ = [
    3,
    n0,
    _MCJS,
    0,
    [_jA, _st, _cTr, _tMA, _sAI, _sMA, _tMN, _tMKKA, _tMT, _fMa, _sMN],
    [0, 0, 5, 0, 0, 0, 0, 0, () => TagList, 0, 0],
    6
  ];
  ModelCustomizationJobSummary$ = [
    3,
    n0,
    _MCJSo,
    0,
    [_jA, _bMA, _jN, _st, _cTr, _sD, _lMT, _eT, _cMA, _cMN, _cTu],
    [0, 0, 0, 0, 5, () => StatusDetails$, 5, 5, 0, 0, 0],
    5
  ];
  ModelEnforcement$ = [
    3,
    n0,
    _ME,
    0,
    [_iMn, _eMx],
    [64 | 0, 64 | 0],
    2
  ];
  ModelImportJobSummary$ = [
    3,
    n0,
    _MIJS,
    0,
    [_jA, _jN, _st, _cTr, _lMT, _eT, _iMA, _iMN],
    [0, 0, 0, 5, 5, 5, 0, 0],
    4
  ];
  ModelInvocationJobS3InputDataConfig$ = [
    3,
    n0,
    _MIJSIDC,
    0,
    [_sU, _sIF, _sBO],
    [0, 0, 0],
    1
  ];
  ModelInvocationJobS3OutputDataConfig$ = [
    3,
    n0,
    _MIJSODC,
    0,
    [_sU, _sEKI, _sBO],
    [0, 0, 0],
    1
  ];
  ModelInvocationJobSummary$ = [
    3,
    n0,
    _MIJSo,
    0,
    [_jA, _jN, _mIo, _rA, _sTu, _iDC, _oDC, _cRT, _st, _m, _lMT, _eT, _vCp, _tDIH, _jET, _mIT, _tRC, _pRC, _sRC, _eRC],
    [0, 0, 0, 0, 5, () => ModelInvocationJobInputDataConfig$, () => ModelInvocationJobOutputDataConfig$, 0, 0, [() => Message, 0], 5, 5, () => VpcConfig$, 1, 5, 0, 1, 1, 1, 1],
    7
  ];
  Offer$ = [
    3,
    n0,
    _O,
    0,
    [_oT, _tD, _oI],
    [0, () => TermDetails$, 0],
    2
  ];
  OrchestrationConfiguration$ = [
    3,
    n0,
    _OC,
    0,
    [_qTC],
    [() => QueryTransformationConfiguration$],
    1
  ];
  OutputDataConfig$ = [
    3,
    n0,
    _ODC,
    0,
    [_sU],
    [0],
    1
  ];
  PerformanceConfiguration$ = [
    3,
    n0,
    _PC,
    0,
    [_la],
    [0]
  ];
  PricingTerm$ = [
    3,
    n0,
    _PT,
    0,
    [_rCa],
    [() => RateCard],
    1
  ];
  PromptRouterSummary$ = [
    3,
    n0,
    _PRS,
    0,
    [_pRN, _rCo, _pRA, _mo, _fM, _st, _ty, _d, _cA, _uA],
    [0, () => RoutingCriteria$, 0, () => PromptRouterTargetModels, () => PromptRouterTargetModel$, 0, 0, [() => PromptRouterDescription, 0], 5, 5],
    7
  ];
  PromptRouterTargetModel$ = [
    3,
    n0,
    _PRTM,
    0,
    [_mA],
    [0],
    1
  ];
  PromptTemplate$ = [
    3,
    n0,
    _PTr,
    0,
    [_tPT],
    [[() => TextPromptTemplate, 0]]
  ];
  ProvisionedModelSummary$ = [
    3,
    n0,
    _PMS,
    0,
    [_pMN, _pMA, _mA, _dMA, _fMA, _mU, _dMU, _st, _cTr, _lMT, _cD, _cET],
    [0, 0, 0, 0, 0, 1, 1, 0, 5, 5, 0, 5],
    10
  ];
  PutEnforcedGuardrailConfigurationRequest$ = [
    3,
    n0,
    _PEGCR,
    0,
    [_gIC, _cI],
    [() => AccountEnforcedGuardrailInferenceInputConfiguration$, 0],
    1
  ];
  PutEnforcedGuardrailConfigurationResponse$ = [
    3,
    n0,
    _PEGCRu,
    0,
    [_cI, _uA, _uB],
    [0, 5, 0]
  ];
  PutModelInvocationLoggingConfigurationRequest$ = [
    3,
    n0,
    _PMILCR,
    0,
    [_lC],
    [() => LoggingConfig$],
    1
  ];
  PutModelInvocationLoggingConfigurationResponse$ = [
    3,
    n0,
    _PMILCRu,
    0,
    [],
    []
  ];
  PutResourcePolicyRequest$ = [
    3,
    n0,
    _PRPR,
    0,
    [_rAe, _rP],
    [0, 0],
    2
  ];
  PutResourcePolicyResponse$ = [
    3,
    n0,
    _PRPRu,
    0,
    [_rAe],
    [0]
  ];
  PutUseCaseForModelAccessRequest$ = [
    3,
    n0,
    _PUCFMAR,
    0,
    [_fD],
    [21],
    1
  ];
  PutUseCaseForModelAccessResponse$ = [
    3,
    n0,
    _PUCFMARu,
    0,
    [],
    []
  ];
  QueryTransformationConfiguration$ = [
    3,
    n0,
    _QTC,
    0,
    [_ty],
    [0],
    1
  ];
  RatingScaleItem$ = [
    3,
    n0,
    _RSI,
    0,
    [_de, _va],
    [0, () => RatingScaleItemValue$],
    2
  ];
  RegisterMarketplaceModelEndpointRequest$ = [
    3,
    n0,
    _RMMER,
    0,
    [_eI, _mSI],
    [[0, 1], 0],
    2
  ];
  RegisterMarketplaceModelEndpointResponse$ = [
    3,
    n0,
    _RMMERe,
    0,
    [_mME],
    [() => MarketplaceModelEndpoint$],
    1
  ];
  RequestMetadataBaseFilters$ = [
    3,
    n0,
    _RMBF,
    0,
    [_eq, _nE],
    [[() => RequestMetadataMap, 0], [() => RequestMetadataMap, 0]]
  ];
  RetrieveAndGenerateConfiguration$ = [
    3,
    n0,
    _RAGC,
    0,
    [_ty, _kBC, _eSC],
    [0, [() => KnowledgeBaseRetrieveAndGenerateConfiguration$, 0], [() => ExternalSourcesRetrieveAndGenerateConfiguration$, 0]],
    1
  ];
  RetrieveConfig$ = [
    3,
    n0,
    _RC,
    0,
    [_kBI, _kBRC],
    [0, [() => KnowledgeBaseRetrievalConfiguration$, 0]],
    2
  ];
  RFTConfig$ = [
    3,
    n0,
    _RFTC,
    0,
    [_gCr, _hP],
    [() => GraderConfig$, () => RFTHyperParameters$]
  ];
  RFTHyperParameters$ = [
    3,
    n0,
    _RFTHP,
    0,
    [_eCp, _bSa, _lR, _mPL, _tSPP, _iMTn, _rE, _eIv],
    [1, 1, 1, 1, 1, 1, 0, 1]
  ];
  RoutingCriteria$ = [
    3,
    n0,
    _RCo,
    0,
    [_rQD],
    [1],
    1
  ];
  S3Config$ = [
    3,
    n0,
    _SC,
    0,
    [_bN, _kP],
    [0, 0],
    1
  ];
  S3DataSource$ = [
    3,
    n0,
    _SDS,
    0,
    [_sU],
    [0],
    1
  ];
  S3ObjectDoc$ = [
    3,
    n0,
    _SOD,
    0,
    [_uri],
    [0],
    1
  ];
  SageMakerEndpoint$ = [
    3,
    n0,
    _SME,
    0,
    [_iIC, _iTn, _eRx, _kEK, _vp],
    [1, 0, 0, 0, () => VpcConfig$],
    3
  ];
  SelectiveContentGuarding$ = [
    3,
    n0,
    _SCG,
    0,
    [_sy, _me],
    [0, 0]
  ];
  StartAutomatedReasoningPolicyBuildWorkflowRequest$ = [
    3,
    n0,
    _SARPBWR,
    0,
    [_pA, _bWT, _sCo, _cRT],
    [[0, 1], [0, 1], [() => AutomatedReasoningPolicyBuildWorkflowSource$, 16], [0, { [_hH]: _xact, [_iTd]: 1 }]],
    3
  ];
  StartAutomatedReasoningPolicyBuildWorkflowResponse$ = [
    3,
    n0,
    _SARPBWRt,
    0,
    [_pA, _bWI],
    [0, 0],
    2
  ];
  StartAutomatedReasoningPolicyTestWorkflowRequest$ = [
    3,
    n0,
    _SARPTWR,
    0,
    [_pA, _bWI, _tCIe, _cRT],
    [[0, 1], [0, 1], 64 | 0, [0, 4]],
    2
  ];
  StartAutomatedReasoningPolicyTestWorkflowResponse$ = [
    3,
    n0,
    _SARPTWRt,
    0,
    [_pA],
    [0],
    1
  ];
  StatusDetails$ = [
    3,
    n0,
    _SD,
    0,
    [_vD, _dPD, _tDr],
    [() => ValidationDetails$, () => DataProcessingDetails$, () => TrainingDetails$]
  ];
  StopEvaluationJobRequest$ = [
    3,
    n0,
    _SEJR,
    0,
    [_jI],
    [[() => EvaluationJobIdentifier, 1]],
    1
  ];
  StopEvaluationJobResponse$ = [
    3,
    n0,
    _SEJRt,
    0,
    [],
    []
  ];
  StopModelCustomizationJobRequest$ = [
    3,
    n0,
    _SMCJR,
    0,
    [_jI],
    [[0, 1]],
    1
  ];
  StopModelCustomizationJobResponse$ = [
    3,
    n0,
    _SMCJRt,
    0,
    [],
    []
  ];
  StopModelInvocationJobRequest$ = [
    3,
    n0,
    _SMIJR,
    0,
    [_jI],
    [[0, 1]],
    1
  ];
  StopModelInvocationJobResponse$ = [
    3,
    n0,
    _SMIJRt,
    0,
    [],
    []
  ];
  SupportTerm$ = [
    3,
    n0,
    _ST,
    0,
    [_rPD],
    [0]
  ];
  Tag$ = [
    3,
    n0,
    _T,
    0,
    [_k, _va],
    [0, 0],
    2
  ];
  TagResourceRequest$ = [
    3,
    n0,
    _TRR,
    0,
    [_rARN, _ta],
    [0, () => TagList],
    2
  ];
  TagResourceResponse$ = [
    3,
    n0,
    _TRRa,
    0,
    [],
    []
  ];
  TeacherModelConfig$ = [
    3,
    n0,
    _TMC,
    0,
    [_tMI, _mRLFI],
    [0, 1],
    1
  ];
  TermDetails$ = [
    3,
    n0,
    _TD,
    0,
    [_uBPT, _lTeg, _sTup, _vT],
    [() => PricingTerm$, () => LegalTerm$, () => SupportTerm$, () => ValidityTerm$],
    3
  ];
  TextInferenceConfig$ = [
    3,
    n0,
    _TIC,
    0,
    [_tem, _tPo, _mTa, _sS],
    [1, 1, 1, 64 | 0]
  ];
  TrainingDataConfig$ = [
    3,
    n0,
    _TDC,
    0,
    [_sU, _iLC],
    [0, [() => InvocationLogsConfig$, 0]]
  ];
  TrainingDetails$ = [
    3,
    n0,
    _TDr,
    0,
    [_st, _cTr, _lMT],
    [0, 5, 5]
  ];
  TrainingMetrics$ = [
    3,
    n0,
    _TM,
    0,
    [_tL],
    [1]
  ];
  UntagResourceRequest$ = [
    3,
    n0,
    _URR,
    0,
    [_rARN, _tK],
    [0, 64 | 0],
    2
  ];
  UntagResourceResponse$ = [
    3,
    n0,
    _URRn,
    0,
    [],
    []
  ];
  UpdateAutomatedReasoningPolicyAnnotationsRequest$ = [
    3,
    n0,
    _UARPAR,
    0,
    [_pA, _bWI, _an, _lUASH],
    [[0, 1], [0, 1], [() => AutomatedReasoningPolicyAnnotationList, 0], 0],
    4
  ];
  UpdateAutomatedReasoningPolicyAnnotationsResponse$ = [
    3,
    n0,
    _UARPARp,
    0,
    [_pA, _bWI, _aSH, _uA],
    [0, 0, 0, 5],
    4
  ];
  UpdateAutomatedReasoningPolicyRequest$ = [
    3,
    n0,
    _UARPR,
    0,
    [_pA, _pD, _n, _d],
    [[0, 1], [() => AutomatedReasoningPolicyDefinition$, 0], [() => AutomatedReasoningPolicyName, 0], [() => AutomatedReasoningPolicyDescription, 0]],
    2
  ];
  UpdateAutomatedReasoningPolicyResponse$ = [
    3,
    n0,
    _UARPRp,
    0,
    [_pA, _n, _dHe, _uA],
    [0, [() => AutomatedReasoningPolicyName, 0], 0, 5],
    4
  ];
  UpdateAutomatedReasoningPolicyTestCaseRequest$ = [
    3,
    n0,
    _UARPTCR,
    0,
    [_pA, _tCI, _gC, _lUA, _eAFR, _qC, _cT, _cRT],
    [[0, 1], [0, 1], [() => AutomatedReasoningPolicyTestGuardContent, 0], 5, 0, [() => AutomatedReasoningPolicyTestQueryContent, 0], 1, [0, 4]],
    5
  ];
  UpdateAutomatedReasoningPolicyTestCaseResponse$ = [
    3,
    n0,
    _UARPTCRp,
    0,
    [_pA, _tCI],
    [0, 0],
    2
  ];
  UpdateCustomModelDeploymentRequest$ = [
    3,
    n0,
    _UCMDR,
    0,
    [_mA, _cMDI],
    [0, [0, 1]],
    2
  ];
  UpdateCustomModelDeploymentResponse$ = [
    3,
    n0,
    _UCMDRp,
    0,
    [_cMDA],
    [0],
    1
  ];
  UpdateGuardrailRequest$ = [
    3,
    n0,
    _UGR,
    0,
    [_gI, _n, _bIM, _bOM, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC, _aRPC, _cRC, _kKI],
    [[0, 1], [() => GuardrailName, 0], [() => GuardrailBlockedMessaging, 0], [() => GuardrailBlockedMessaging, 0], [() => GuardrailDescription, 0], [() => GuardrailTopicPolicyConfig$, 0], [() => GuardrailContentPolicyConfig$, 0], [() => GuardrailWordPolicyConfig$, 0], () => GuardrailSensitiveInformationPolicyConfig$, [() => GuardrailContextualGroundingPolicyConfig$, 0], () => GuardrailAutomatedReasoningPolicyConfig$, () => GuardrailCrossRegionConfig$, 0],
    4
  ];
  UpdateGuardrailResponse$ = [
    3,
    n0,
    _UGRp,
    0,
    [_gIu, _gA, _ve, _uA],
    [0, 0, 0, 5],
    4
  ];
  UpdateMarketplaceModelEndpointRequest$ = [
    3,
    n0,
    _UMMER,
    0,
    [_eA, _eCn, _cRT],
    [[0, 1], () => EndpointConfig$, [0, 4]],
    2
  ];
  UpdateMarketplaceModelEndpointResponse$ = [
    3,
    n0,
    _UMMERp,
    0,
    [_mME],
    [() => MarketplaceModelEndpoint$],
    1
  ];
  UpdateProvisionedModelThroughputRequest$ = [
    3,
    n0,
    _UPMTR,
    0,
    [_pMI, _dPMN, _dMI],
    [[0, 1], 0, 0],
    1
  ];
  UpdateProvisionedModelThroughputResponse$ = [
    3,
    n0,
    _UPMTRp,
    0,
    [],
    []
  ];
  ValidationDataConfig$ = [
    3,
    n0,
    _VDC,
    0,
    [_val],
    [() => Validators],
    1
  ];
  ValidationDetails$ = [
    3,
    n0,
    _VD,
    0,
    [_st, _cTr, _lMT],
    [0, 5, 5]
  ];
  Validator$ = [
    3,
    n0,
    _V,
    0,
    [_sU],
    [0],
    1
  ];
  ValidatorMetric$ = [
    3,
    n0,
    _VM,
    0,
    [_vL],
    [1]
  ];
  ValidityTerm$ = [
    3,
    n0,
    _VT,
    0,
    [_aD],
    [0]
  ];
  VectorSearchBedrockRerankingConfiguration$ = [
    3,
    n0,
    _VSBRC,
    0,
    [_mC, _nORR, _mCe],
    [() => VectorSearchBedrockRerankingModelConfiguration$, 1, [() => MetadataConfigurationForReranking$, 0]],
    1
  ];
  VectorSearchBedrockRerankingModelConfiguration$ = [
    3,
    n0,
    _VSBRMC,
    0,
    [_mA, _aMRF],
    [0, 128 | 15],
    1
  ];
  VectorSearchRerankingConfiguration$ = [
    3,
    n0,
    _VSRC,
    0,
    [_ty, _bRC],
    [0, [() => VectorSearchBedrockRerankingConfiguration$, 0]],
    1
  ];
  VpcConfig$ = [
    3,
    n0,
    _VC,
    0,
    [_sIu, _sGI],
    [64 | 0, 64 | 0],
    2
  ];
  AccountEnforcedGuardrailsOutputConfiguration = [
    1,
    n0,
    _AEGOCc,
    0,
    () => AccountEnforcedGuardrailOutputConfiguration$
  ];
  AutomatedEvaluationCustomMetrics = [
    1,
    n0,
    _AECM,
    0,
    [
      () => AutomatedEvaluationCustomMetricSource$,
      0
    ]
  ];
  AutomatedReasoningCheckDifferenceScenarioList = [
    1,
    n0,
    _ARCDSL,
    0,
    [
      () => AutomatedReasoningCheckScenario$,
      0
    ]
  ];
  AutomatedReasoningCheckFindingList = [
    1,
    n0,
    _ARCFL,
    0,
    [
      () => AutomatedReasoningCheckFinding$,
      0
    ]
  ];
  AutomatedReasoningCheckInputTextReferenceList = [
    1,
    n0,
    _ARCITRL,
    0,
    [
      () => AutomatedReasoningCheckInputTextReference$,
      0
    ]
  ];
  AutomatedReasoningCheckRuleList = [
    1,
    n0,
    _ARCRL,
    0,
    () => AutomatedReasoningCheckRule$
  ];
  AutomatedReasoningCheckTranslationList = [
    1,
    n0,
    _ARCTL,
    0,
    [
      () => AutomatedReasoningCheckTranslation$,
      0
    ]
  ];
  AutomatedReasoningCheckTranslationOptionList = [
    1,
    n0,
    _ARCTOL,
    0,
    [
      () => AutomatedReasoningCheckTranslationOption$,
      0
    ]
  ];
  AutomatedReasoningLogicStatementList = [
    1,
    n0,
    _ARLSL,
    0,
    [
      () => AutomatedReasoningLogicStatement$,
      0
    ]
  ];
  AutomatedReasoningPolicyAnnotatedChunkList = [
    1,
    n0,
    _ARPACL,
    0,
    [
      () => AutomatedReasoningPolicyAnnotatedChunk$,
      0
    ]
  ];
  AutomatedReasoningPolicyAnnotatedContentList = [
    1,
    n0,
    _ARPACLu,
    0,
    [
      () => AutomatedReasoningPolicyAnnotatedContent$,
      0
    ]
  ];
  AutomatedReasoningPolicyAnnotationList = [
    1,
    n0,
    _ARPALu,
    0,
    [
      () => AutomatedReasoningPolicyAnnotation$,
      0
    ]
  ];
  AutomatedReasoningPolicyArnList = 64 | 0;
  AutomatedReasoningPolicyAtomicStatementList = [
    1,
    n0,
    _ARPASL,
    0,
    [
      () => AutomatedReasoningPolicyAtomicStatement$,
      0
    ]
  ];
  AutomatedReasoningPolicyBuildLogEntryList = [
    1,
    n0,
    _ARPBLEL,
    0,
    [
      () => AutomatedReasoningPolicyBuildLogEntry$,
      0
    ]
  ];
  AutomatedReasoningPolicyBuildResultAssetManifestList = [
    1,
    n0,
    _ARPBRAML,
    0,
    [
      () => AutomatedReasoningPolicyBuildResultAssetManifestEntry$,
      0
    ]
  ];
  AutomatedReasoningPolicyBuildStepList = [
    1,
    n0,
    _ARPBSL,
    0,
    [
      () => AutomatedReasoningPolicyBuildStep$,
      0
    ]
  ];
  AutomatedReasoningPolicyBuildStepMessageList = [
    1,
    n0,
    _ARPBSML,
    0,
    () => AutomatedReasoningPolicyBuildStepMessage$
  ];
  AutomatedReasoningPolicyBuildWorkflowDocumentList = [
    1,
    n0,
    _ARPBWDL,
    0,
    [
      () => AutomatedReasoningPolicyBuildWorkflowDocument$,
      0
    ]
  ];
  AutomatedReasoningPolicyBuildWorkflowSummaries = [
    1,
    n0,
    _ARPBWSut,
    0,
    () => AutomatedReasoningPolicyBuildWorkflowSummary$
  ];
  AutomatedReasoningPolicyConflictedRuleIdList = 64 | 0;
  AutomatedReasoningPolicyDefinitionRuleIdList = 64 | 0;
  AutomatedReasoningPolicyDefinitionRuleList = [
    1,
    n0,
    _ARPDRL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionRule$,
      0
    ]
  ];
  AutomatedReasoningPolicyDefinitionTypeList = [
    1,
    n0,
    _ARPDTL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionType$,
      0
    ]
  ];
  AutomatedReasoningPolicyDefinitionTypeNameList = [
    1,
    n0,
    _ARPDTNL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionTypeName,
      0
    ]
  ];
  AutomatedReasoningPolicyDefinitionTypeValueList = [
    1,
    n0,
    _ARPDTVL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionTypeValue$,
      0
    ]
  ];
  AutomatedReasoningPolicyDefinitionTypeValuePairList = [
    1,
    n0,
    _ARPDTVPL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionTypeValuePair$,
      0
    ]
  ];
  AutomatedReasoningPolicyDefinitionVariableList = [
    1,
    n0,
    _ARPDVL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionVariable$,
      0
    ]
  ];
  AutomatedReasoningPolicyDefinitionVariableNameList = [
    1,
    n0,
    _ARPDVNL,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionVariableName,
      0
    ]
  ];
  AutomatedReasoningPolicyDisjointedRuleIdList = 64 | 0;
  AutomatedReasoningPolicyDisjointRuleSetList = [
    1,
    n0,
    _ARPDRSL,
    0,
    [
      () => AutomatedReasoningPolicyDisjointRuleSet$,
      0
    ]
  ];
  AutomatedReasoningPolicyGeneratedTestCaseList = [
    1,
    n0,
    _ARPGTCL,
    0,
    [
      () => AutomatedReasoningPolicyGeneratedTestCase$,
      0
    ]
  ];
  AutomatedReasoningPolicyGenerateFidelityReportDocumentList = [
    1,
    n0,
    _ARPGFRDL,
    0,
    [
      () => AutomatedReasoningPolicyBuildWorkflowDocument$,
      0
    ]
  ];
  AutomatedReasoningPolicyJustificationList = [
    1,
    n0,
    _ARPJL,
    0,
    [
      () => AutomatedReasoningPolicyJustificationText,
      0
    ]
  ];
  AutomatedReasoningPolicyLineNumberList = 64 | 1;
  AutomatedReasoningPolicyReportSourceDocumentList = [
    1,
    n0,
    _ARPRSDL,
    0,
    [
      () => AutomatedReasoningPolicyReportSourceDocument$,
      0
    ]
  ];
  AutomatedReasoningPolicyScenarioList = [
    1,
    n0,
    _ARPSLu,
    0,
    [
      () => AutomatedReasoningPolicyScenario$,
      0
    ]
  ];
  AutomatedReasoningPolicyStatementReferenceList = [
    1,
    n0,
    _ARPSRL,
    0,
    () => AutomatedReasoningPolicyStatementReference$
  ];
  AutomatedReasoningPolicySummaries = [
    1,
    n0,
    _ARPSuto,
    0,
    [
      () => AutomatedReasoningPolicySummary$,
      0
    ]
  ];
  AutomatedReasoningPolicyTestCaseIdList = 64 | 0;
  AutomatedReasoningPolicyTestCaseList = [
    1,
    n0,
    _ARPTCL,
    0,
    [
      () => AutomatedReasoningPolicyTestCase$,
      0
    ]
  ];
  AutomatedReasoningPolicyTestList = [
    1,
    n0,
    _ARPTL,
    0,
    [
      () => AutomatedReasoningPolicyTestResult$,
      0
    ]
  ];
  AutomatedReasoningPolicyTypeValueAnnotationList = [
    1,
    n0,
    _ARPTVAL,
    0,
    [
      () => AutomatedReasoningPolicyTypeValueAnnotation$,
      0
    ]
  ];
  BatchDeleteEvaluationJobErrors = [
    1,
    n0,
    _BDEJEa,
    0,
    [
      () => BatchDeleteEvaluationJobError$,
      0
    ]
  ];
  BatchDeleteEvaluationJobItems = [
    1,
    n0,
    _BDEJIa,
    0,
    [
      () => BatchDeleteEvaluationJobItem$,
      0
    ]
  ];
  BedrockEvaluatorModels = [
    1,
    n0,
    _BEMe,
    0,
    () => BedrockEvaluatorModel$
  ];
  CustomMetricBedrockEvaluatorModels = [
    1,
    n0,
    _CMBEMu,
    0,
    () => CustomMetricBedrockEvaluatorModel$
  ];
  CustomModelDeploymentSummaryList = [
    1,
    n0,
    _CMDSL,
    0,
    () => CustomModelDeploymentSummary$
  ];
  CustomModelSummaryList = [
    1,
    n0,
    _CMSL,
    0,
    () => CustomModelSummary$
  ];
  ErrorMessages = 64 | 0;
  EvaluationBedrockKnowledgeBaseIdentifiers = 64 | 0;
  EvaluationBedrockModelIdentifiers = 64 | 0;
  EvaluationDatasetMetricConfigs = [
    1,
    n0,
    _EDMCv,
    0,
    [
      () => EvaluationDatasetMetricConfig$,
      0
    ]
  ];
  EvaluationJobIdentifiers = [
    1,
    n0,
    _EJIv,
    0,
    [
      () => EvaluationJobIdentifier,
      0
    ]
  ];
  EvaluationMetricNames = [
    1,
    n0,
    _EMNv,
    0,
    [
      () => EvaluationMetricName,
      0
    ]
  ];
  EvaluationModelConfigs = [
    1,
    n0,
    _EMC,
    0,
    [
      () => EvaluationModelConfig$,
      0
    ]
  ];
  EvaluationPrecomputedInferenceSourceIdentifiers = 64 | 0;
  EvaluationPrecomputedRagSourceIdentifiers = 64 | 0;
  EvaluationSummaries = [
    1,
    n0,
    _ESv,
    0,
    () => EvaluationSummary$
  ];
  EvaluationTaskTypes = 64 | 0;
  EvaluatorModelIdentifiers = 64 | 0;
  ExcludedModelsList = 64 | 0;
  ExternalSources = [
    1,
    n0,
    _ESxt,
    0,
    [
      () => ExternalSource$,
      0
    ]
  ];
  FieldsForReranking = [
    1,
    n0,
    _FFRi,
    8,
    () => FieldForReranking$
  ];
  FoundationModelSummaryList = [
    1,
    n0,
    _FMSL,
    0,
    () => FoundationModelSummary$
  ];
  GuardrailContentFilters = [
    1,
    n0,
    _GCFu,
    0,
    [
      () => GuardrailContentFilter$,
      0
    ]
  ];
  GuardrailContentFiltersConfig = [
    1,
    n0,
    _GCFCu,
    0,
    [
      () => GuardrailContentFilterConfig$,
      0
    ]
  ];
  GuardrailContextualGroundingFilters = [
    1,
    n0,
    _GCGFu,
    0,
    [
      () => GuardrailContextualGroundingFilter$,
      0
    ]
  ];
  GuardrailContextualGroundingFiltersConfig = [
    1,
    n0,
    _GCGFCu,
    0,
    [
      () => GuardrailContextualGroundingFilterConfig$,
      0
    ]
  ];
  GuardrailFailureRecommendations = [
    1,
    n0,
    _GFRu,
    0,
    [
      () => GuardrailFailureRecommendation,
      0
    ]
  ];
  GuardrailManagedWordLists = [
    1,
    n0,
    _GMWL,
    0,
    [
      () => GuardrailManagedWords$,
      0
    ]
  ];
  GuardrailManagedWordListsConfig = [
    1,
    n0,
    _GMWLC,
    0,
    [
      () => GuardrailManagedWordsConfig$,
      0
    ]
  ];
  GuardrailModalities = [
    1,
    n0,
    _GMu,
    0,
    [
      () => GuardrailModality,
      0
    ]
  ];
  GuardrailPiiEntities = [
    1,
    n0,
    _GPEu,
    0,
    () => GuardrailPiiEntity$
  ];
  GuardrailPiiEntitiesConfig = [
    1,
    n0,
    _GPECu,
    0,
    () => GuardrailPiiEntityConfig$
  ];
  GuardrailRegexes = [
    1,
    n0,
    _GRu,
    0,
    () => GuardrailRegex$
  ];
  GuardrailRegexesConfig = [
    1,
    n0,
    _GRCu,
    0,
    () => GuardrailRegexConfig$
  ];
  GuardrailStatusReasons = [
    1,
    n0,
    _GSRu,
    0,
    [
      () => GuardrailStatusReason,
      0
    ]
  ];
  GuardrailSummaries = [
    1,
    n0,
    _GSu,
    0,
    [
      () => GuardrailSummary$,
      0
    ]
  ];
  GuardrailTopicExamples = [
    1,
    n0,
    _GTEu,
    0,
    [
      () => GuardrailTopicExample,
      0
    ]
  ];
  GuardrailTopics = [
    1,
    n0,
    _GTu,
    0,
    [
      () => GuardrailTopic$,
      0
    ]
  ];
  GuardrailTopicsConfig = [
    1,
    n0,
    _GTCu,
    0,
    [
      () => GuardrailTopicConfig$,
      0
    ]
  ];
  GuardrailWords = [
    1,
    n0,
    _GWu,
    0,
    [
      () => GuardrailWord$,
      0
    ]
  ];
  GuardrailWordsConfig = [
    1,
    n0,
    _GWCu,
    0,
    [
      () => GuardrailWordConfig$,
      0
    ]
  ];
  HumanEvaluationCustomMetrics = [
    1,
    n0,
    _HECMu,
    0,
    [
      () => HumanEvaluationCustomMetric$,
      0
    ]
  ];
  ImportedModelSummaryList = [
    1,
    n0,
    _IMSL,
    0,
    () => ImportedModelSummary$
  ];
  IncludedModelsList = 64 | 0;
  InferenceProfileModels = [
    1,
    n0,
    _IPMn,
    0,
    () => InferenceProfileModel$
  ];
  InferenceProfileSummaries = [
    1,
    n0,
    _IPSn,
    0,
    [
      () => InferenceProfileSummary$,
      0
    ]
  ];
  InferenceTypeList = 64 | 0;
  MarketplaceModelEndpointSummaries = [
    1,
    n0,
    _MMESa,
    0,
    () => MarketplaceModelEndpointSummary$
  ];
  MetadataAttributeSchemaList = [
    1,
    n0,
    _MASL,
    0,
    [
      () => MetadataAttributeSchema$,
      0
    ]
  ];
  ModelCopyJobSummaries = [
    1,
    n0,
    _MCJSod,
    0,
    () => ModelCopyJobSummary$
  ];
  ModelCustomizationJobSummaries = [
    1,
    n0,
    _MCJSode,
    0,
    () => ModelCustomizationJobSummary$
  ];
  ModelCustomizationList = 64 | 0;
  ModelImportJobSummaries = [
    1,
    n0,
    _MIJSod,
    0,
    () => ModelImportJobSummary$
  ];
  ModelInvocationJobSummaries = [
    1,
    n0,
    _MIJSode,
    0,
    [
      () => ModelInvocationJobSummary$,
      0
    ]
  ];
  ModelModalityList = 64 | 0;
  Offers = [
    1,
    n0,
    _Of,
    0,
    () => Offer$
  ];
  PromptRouterSummaries = [
    1,
    n0,
    _PRSr,
    0,
    [
      () => PromptRouterSummary$,
      0
    ]
  ];
  PromptRouterTargetModels = [
    1,
    n0,
    _PRTMr,
    0,
    () => PromptRouterTargetModel$
  ];
  ProvisionedModelSummaries = [
    1,
    n0,
    _PMSr,
    0,
    () => ProvisionedModelSummary$
  ];
  RagConfigs = [
    1,
    n0,
    _RCa,
    0,
    [
      () => RAGConfig$,
      0
    ]
  ];
  RAGStopSequences = 64 | 0;
  RateCard = [
    1,
    n0,
    _RCat,
    0,
    () => DimensionalPriceRate$
  ];
  RatingScale = [
    1,
    n0,
    _RS,
    0,
    () => RatingScaleItem$
  ];
  RequestMetadataFiltersList = [
    1,
    n0,
    _RMFL,
    0,
    [
      () => RequestMetadataBaseFilters$,
      0
    ]
  ];
  RetrievalFilterList = [
    1,
    n0,
    _RFL,
    0,
    [
      () => RetrievalFilter$,
      0
    ]
  ];
  SecurityGroupIds = 64 | 0;
  SubnetIds = 64 | 0;
  TagKeyList = 64 | 0;
  TagList = [
    1,
    n0,
    _TL,
    0,
    () => Tag$
  ];
  ValidationMetrics = [
    1,
    n0,
    _VMa,
    0,
    () => ValidatorMetric$
  ];
  Validators = [
    1,
    n0,
    _Va,
    0,
    () => Validator$
  ];
  AdditionalModelRequestFields = 128 | 15;
  AutomatedReasoningPolicyRuleReportMap = [
    2,
    n0,
    _ARPRRM,
    0,
    [
      0,
      0
    ],
    [
      () => AutomatedReasoningPolicyRuleReport$,
      0
    ]
  ];
  AutomatedReasoningPolicyVariableReportMap = [
    2,
    n0,
    _ARPVRM,
    0,
    [
      () => AutomatedReasoningPolicyDefinitionVariableName,
      0
    ],
    [
      () => AutomatedReasoningPolicyVariableReport$,
      0
    ]
  ];
  ModelCustomizationHyperParameters = 128 | 0;
  RequestMetadataMap = [
    2,
    n0,
    _RMM,
    8,
    0,
    0
  ];
  AutomatedEvaluationCustomMetricSource$ = [
    4,
    n0,
    _AECMS,
    0,
    [_cMD],
    [[() => CustomMetricDefinition$, 0]]
  ];
  AutomatedReasoningCheckFinding$ = [
    4,
    n0,
    _ARCF,
    0,
    [_vali, _inv, _sa, _im, _tA, _tCoo, _nTo],
    [[() => AutomatedReasoningCheckValidFinding$, 0], [() => AutomatedReasoningCheckInvalidFinding$, 0], [() => AutomatedReasoningCheckSatisfiableFinding$, 0], [() => AutomatedReasoningCheckImpossibleFinding$, 0], [() => AutomatedReasoningCheckTranslationAmbiguousFinding$, 0], () => AutomatedReasoningCheckTooComplexFinding$, () => AutomatedReasoningCheckNoTranslationsFinding$]
  ];
  AutomatedReasoningPolicyAnnotatedContent$ = [
    4,
    n0,
    _ARPACu,
    0,
    [_lin],
    [[() => AutomatedReasoningPolicyAnnotatedLine$, 0]]
  ];
  AutomatedReasoningPolicyAnnotation$ = [
    4,
    n0,
    _ARPA,
    0,
    [_aTd, _uTp, _dT, _aV, _uVp, _dV, _aR, _uR, _dR, _aRFNL, _uFRF, _uFSF, _iCn],
    [[() => AutomatedReasoningPolicyAddTypeAnnotation$, 0], [() => AutomatedReasoningPolicyUpdateTypeAnnotation$, 0], [() => AutomatedReasoningPolicyDeleteTypeAnnotation$, 0], [() => AutomatedReasoningPolicyAddVariableAnnotation$, 0], [() => AutomatedReasoningPolicyUpdateVariableAnnotation$, 0], [() => AutomatedReasoningPolicyDeleteVariableAnnotation$, 0], [() => AutomatedReasoningPolicyAddRuleAnnotation$, 0], [() => AutomatedReasoningPolicyUpdateRuleAnnotation$, 0], () => AutomatedReasoningPolicyDeleteRuleAnnotation$, [() => AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation$, 0], [() => AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation$, 0], [() => AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation$, 0], [() => AutomatedReasoningPolicyIngestContentAnnotation$, 0]]
  ];
  AutomatedReasoningPolicyBuildResultAssets$ = [
    4,
    n0,
    _ARPBRA,
    0,
    [_pD, _qR, _bL, _gTC, _pS, _aM, _do, _fRi],
    [[() => AutomatedReasoningPolicyDefinition$, 0], [() => AutomatedReasoningPolicyDefinitionQualityReport$, 0], [() => AutomatedReasoningPolicyBuildLog$, 0], [() => AutomatedReasoningPolicyGeneratedTestCases$, 0], [() => AutomatedReasoningPolicyScenarios$, 0], [() => AutomatedReasoningPolicyBuildResultAssetManifest$, 0], [() => AutomatedReasoningPolicySourceDocument$, 0], [() => AutomatedReasoningPolicyFidelityReport$, 0]]
  ];
  AutomatedReasoningPolicyBuildStepContext$ = [
    4,
    n0,
    _ARPBSC,
    0,
    [_pl, _mu],
    [() => AutomatedReasoningPolicyPlanning$, [() => AutomatedReasoningPolicyMutation$, 0]]
  ];
  AutomatedReasoningPolicyDefinitionElement$ = [
    4,
    n0,
    _ARPDE,
    0,
    [_pDV, _pDT, _pDR],
    [[() => AutomatedReasoningPolicyDefinitionVariable$, 0], [() => AutomatedReasoningPolicyDefinitionType$, 0], [() => AutomatedReasoningPolicyDefinitionRule$, 0]]
  ];
  AutomatedReasoningPolicyGenerateFidelityReportContent$ = [
    4,
    n0,
    _ARPGFRC,
    0,
    [_doc],
    [[() => AutomatedReasoningPolicyGenerateFidelityReportDocumentList, 0]]
  ];
  AutomatedReasoningPolicyMutation$ = [
    4,
    n0,
    _ARPM,
    0,
    [_aTd, _uTp, _dT, _aV, _uVp, _dV, _aR, _uR, _dR],
    [[() => AutomatedReasoningPolicyAddTypeMutation$, 0], [() => AutomatedReasoningPolicyUpdateTypeMutation$, 0], [() => AutomatedReasoningPolicyDeleteTypeMutation$, 0], [() => AutomatedReasoningPolicyAddVariableMutation$, 0], [() => AutomatedReasoningPolicyUpdateVariableMutation$, 0], [() => AutomatedReasoningPolicyDeleteVariableMutation$, 0], [() => AutomatedReasoningPolicyAddRuleMutation$, 0], [() => AutomatedReasoningPolicyUpdateRuleMutation$, 0], () => AutomatedReasoningPolicyDeleteRuleMutation$]
  ];
  AutomatedReasoningPolicyTypeValueAnnotation$ = [
    4,
    n0,
    _ARPTVA,
    0,
    [_aTV, _uTVp, _dTV],
    [[() => AutomatedReasoningPolicyAddTypeValue$, 0], [() => AutomatedReasoningPolicyUpdateTypeValue$, 0], () => AutomatedReasoningPolicyDeleteTypeValue$]
  ];
  AutomatedReasoningPolicyWorkflowTypeContent$ = [
    4,
    n0,
    _ARPWTC,
    0,
    [_doc, _pRAo, _gFRC],
    [[() => AutomatedReasoningPolicyBuildWorkflowDocumentList, 0], [() => AutomatedReasoningPolicyBuildWorkflowRepairContent$, 0], [() => AutomatedReasoningPolicyGenerateFidelityReportContent$, 0]]
  ];
  CustomizationConfig$ = [
    4,
    n0,
    _CC,
    0,
    [_dCi, _rCf],
    [() => DistillationConfig$, () => RFTConfig$]
  ];
  EndpointConfig$ = [
    4,
    n0,
    _EC,
    0,
    [_sMa],
    [() => SageMakerEndpoint$]
  ];
  EvaluationConfig$ = [
    4,
    n0,
    _ECv,
    0,
    [_au, _h],
    [[() => AutomatedEvaluationConfig$, 0], [() => HumanEvaluationConfig$, 0]]
  ];
  EvaluationDatasetLocation$ = [
    4,
    n0,
    _EDL,
    0,
    [_sU],
    [0]
  ];
  EvaluationInferenceConfig$ = [
    4,
    n0,
    _EIC,
    0,
    [_mo, _rCag],
    [[() => EvaluationModelConfigs, 0], [() => RagConfigs, 0]]
  ];
  EvaluationModelConfig$ = [
    4,
    n0,
    _EMCv,
    0,
    [_bM, _pIS],
    [[() => EvaluationBedrockModel$, 0], () => EvaluationPrecomputedInferenceSource$]
  ];
  EvaluationPrecomputedRagSourceConfig$ = [
    4,
    n0,
    _EPRSCv,
    0,
    [_rSC, _rAGSC],
    [() => EvaluationPrecomputedRetrieveSourceConfig$, () => EvaluationPrecomputedRetrieveAndGenerateSourceConfig$]
  ];
  EvaluatorModelConfig$ = [
    4,
    n0,
    _EMCva,
    0,
    [_bEM],
    [() => BedrockEvaluatorModels]
  ];
  GraderConfig$ = [
    4,
    n0,
    _GCr,
    0,
    [_lG],
    [() => LambdaGraderConfig$]
  ];
  InferenceProfileModelSource$ = [
    4,
    n0,
    _IPMS,
    0,
    [_cF],
    [0]
  ];
  InvocationLogSource$ = [
    4,
    n0,
    _ILS,
    0,
    [_sU],
    [0]
  ];
  KnowledgeBaseConfig$ = [
    4,
    n0,
    _KBC,
    0,
    [_rCetr, _rAGC],
    [[() => RetrieveConfig$, 0], [() => RetrieveAndGenerateConfiguration$, 0]]
  ];
  ModelDataSource$ = [
    4,
    n0,
    _MDS,
    0,
    [_sDS],
    [() => S3DataSource$]
  ];
  ModelInvocationJobInputDataConfig$ = [
    4,
    n0,
    _MIJIDC,
    0,
    [_sIDC],
    [() => ModelInvocationJobS3InputDataConfig$]
  ];
  ModelInvocationJobOutputDataConfig$ = [
    4,
    n0,
    _MIJODC,
    0,
    [_sODC],
    [() => ModelInvocationJobS3OutputDataConfig$]
  ];
  RAGConfig$ = [
    4,
    n0,
    _RAGCo,
    0,
    [_kBCn, _pRSC],
    [[() => KnowledgeBaseConfig$, 0], () => EvaluationPrecomputedRagSourceConfig$]
  ];
  RatingScaleItemValue$ = [
    4,
    n0,
    _RSIV,
    0,
    [_sV, _fV],
    [0, 1]
  ];
  RequestMetadataFilters$ = [
    4,
    n0,
    _RMF,
    0,
    [_eq, _nE, _aAn, _oAr],
    [[() => RequestMetadataMap, 0], [() => RequestMetadataMap, 0], [() => RequestMetadataFiltersList, 0], [() => RequestMetadataFiltersList, 0]]
  ];
  RerankingMetadataSelectiveModeConfiguration$ = [
    4,
    n0,
    _RMSMC,
    0,
    [_fTI, _fTE],
    [[() => FieldsForReranking, 0], [() => FieldsForReranking, 0]]
  ];
  RetrievalFilter$ = [
    4,
    n0,
    _RF,
    8,
    [_eq, _nE, _gT, _gTOE, _lTes, _lTOE, _in_, _nI, _sW, _lCi, _sCt, _aAn, _oAr],
    [() => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, () => FilterAttribute$, [() => RetrievalFilterList, 0], [() => RetrievalFilterList, 0]]
  ];
  BatchDeleteEvaluationJob$ = [
    9,
    n0,
    _BDEJ,
    { [_ht]: ["POST", "/evaluation-jobs/batch-delete", 202] },
    () => BatchDeleteEvaluationJobRequest$,
    () => BatchDeleteEvaluationJobResponse$
  ];
  CancelAutomatedReasoningPolicyBuildWorkflow$ = [
    9,
    n0,
    _CARPBW,
    { [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/cancel", 202] },
    () => CancelAutomatedReasoningPolicyBuildWorkflowRequest$,
    () => CancelAutomatedReasoningPolicyBuildWorkflowResponse$
  ];
  CreateAutomatedReasoningPolicy$ = [
    9,
    n0,
    _CARP,
    { [_ht]: ["POST", "/automated-reasoning-policies", 200] },
    () => CreateAutomatedReasoningPolicyRequest$,
    () => CreateAutomatedReasoningPolicyResponse$
  ];
  CreateAutomatedReasoningPolicyTestCase$ = [
    9,
    n0,
    _CARPTC,
    { [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/test-cases", 200] },
    () => CreateAutomatedReasoningPolicyTestCaseRequest$,
    () => CreateAutomatedReasoningPolicyTestCaseResponse$
  ];
  CreateAutomatedReasoningPolicyVersion$ = [
    9,
    n0,
    _CARPV,
    { [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/versions", 200] },
    () => CreateAutomatedReasoningPolicyVersionRequest$,
    () => CreateAutomatedReasoningPolicyVersionResponse$
  ];
  CreateCustomModel$ = [
    9,
    n0,
    _CCM,
    { [_ht]: ["POST", "/custom-models/create-custom-model", 202] },
    () => CreateCustomModelRequest$,
    () => CreateCustomModelResponse$
  ];
  CreateCustomModelDeployment$ = [
    9,
    n0,
    _CCMD,
    { [_ht]: ["POST", "/model-customization/custom-model-deployments", 202] },
    () => CreateCustomModelDeploymentRequest$,
    () => CreateCustomModelDeploymentResponse$
  ];
  CreateEvaluationJob$ = [
    9,
    n0,
    _CEJ,
    { [_ht]: ["POST", "/evaluation-jobs", 202] },
    () => CreateEvaluationJobRequest$,
    () => CreateEvaluationJobResponse$
  ];
  CreateFoundationModelAgreement$ = [
    9,
    n0,
    _CFMA,
    { [_ht]: ["POST", "/create-foundation-model-agreement", 202] },
    () => CreateFoundationModelAgreementRequest$,
    () => CreateFoundationModelAgreementResponse$
  ];
  CreateGuardrail$ = [
    9,
    n0,
    _CG,
    { [_ht]: ["POST", "/guardrails", 202] },
    () => CreateGuardrailRequest$,
    () => CreateGuardrailResponse$
  ];
  CreateGuardrailVersion$ = [
    9,
    n0,
    _CGV,
    { [_ht]: ["POST", "/guardrails/{guardrailIdentifier}", 202] },
    () => CreateGuardrailVersionRequest$,
    () => CreateGuardrailVersionResponse$
  ];
  CreateInferenceProfile$ = [
    9,
    n0,
    _CIP,
    { [_ht]: ["POST", "/inference-profiles", 201] },
    () => CreateInferenceProfileRequest$,
    () => CreateInferenceProfileResponse$
  ];
  CreateMarketplaceModelEndpoint$ = [
    9,
    n0,
    _CMME,
    { [_ht]: ["POST", "/marketplace-model/endpoints", 200] },
    () => CreateMarketplaceModelEndpointRequest$,
    () => CreateMarketplaceModelEndpointResponse$
  ];
  CreateModelCopyJob$ = [
    9,
    n0,
    _CMCJ,
    { [_ht]: ["POST", "/model-copy-jobs", 201] },
    () => CreateModelCopyJobRequest$,
    () => CreateModelCopyJobResponse$
  ];
  CreateModelCustomizationJob$ = [
    9,
    n0,
    _CMCJr,
    { [_ht]: ["POST", "/model-customization-jobs", 201] },
    () => CreateModelCustomizationJobRequest$,
    () => CreateModelCustomizationJobResponse$
  ];
  CreateModelImportJob$ = [
    9,
    n0,
    _CMIJ,
    { [_ht]: ["POST", "/model-import-jobs", 201] },
    () => CreateModelImportJobRequest$,
    () => CreateModelImportJobResponse$
  ];
  CreateModelInvocationJob$ = [
    9,
    n0,
    _CMIJr,
    { [_ht]: ["POST", "/model-invocation-job", 200] },
    () => CreateModelInvocationJobRequest$,
    () => CreateModelInvocationJobResponse$
  ];
  CreatePromptRouter$ = [
    9,
    n0,
    _CPR,
    { [_ht]: ["POST", "/prompt-routers", 200] },
    () => CreatePromptRouterRequest$,
    () => CreatePromptRouterResponse$
  ];
  CreateProvisionedModelThroughput$ = [
    9,
    n0,
    _CPMT,
    { [_ht]: ["POST", "/provisioned-model-throughput", 201] },
    () => CreateProvisionedModelThroughputRequest$,
    () => CreateProvisionedModelThroughputResponse$
  ];
  DeleteAutomatedReasoningPolicy$ = [
    9,
    n0,
    _DARP,
    { [_ht]: ["DELETE", "/automated-reasoning-policies/{policyArn}", 202] },
    () => DeleteAutomatedReasoningPolicyRequest$,
    () => DeleteAutomatedReasoningPolicyResponse$
  ];
  DeleteAutomatedReasoningPolicyBuildWorkflow$ = [
    9,
    n0,
    _DARPBW,
    { [_ht]: ["DELETE", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}", 202] },
    () => DeleteAutomatedReasoningPolicyBuildWorkflowRequest$,
    () => DeleteAutomatedReasoningPolicyBuildWorkflowResponse$
  ];
  DeleteAutomatedReasoningPolicyTestCase$ = [
    9,
    n0,
    _DARPTC,
    { [_ht]: ["DELETE", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 202] },
    () => DeleteAutomatedReasoningPolicyTestCaseRequest$,
    () => DeleteAutomatedReasoningPolicyTestCaseResponse$
  ];
  DeleteCustomModel$ = [
    9,
    n0,
    _DCM,
    { [_ht]: ["DELETE", "/custom-models/{modelIdentifier}", 200] },
    () => DeleteCustomModelRequest$,
    () => DeleteCustomModelResponse$
  ];
  DeleteCustomModelDeployment$ = [
    9,
    n0,
    _DCMD,
    { [_ht]: ["DELETE", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 200] },
    () => DeleteCustomModelDeploymentRequest$,
    () => DeleteCustomModelDeploymentResponse$
  ];
  DeleteEnforcedGuardrailConfiguration$ = [
    9,
    n0,
    _DEGC,
    { [_ht]: ["DELETE", "/enforcedGuardrailsConfiguration/{configId}", 200] },
    () => DeleteEnforcedGuardrailConfigurationRequest$,
    () => DeleteEnforcedGuardrailConfigurationResponse$
  ];
  DeleteFoundationModelAgreement$ = [
    9,
    n0,
    _DFMA,
    { [_ht]: ["POST", "/delete-foundation-model-agreement", 202] },
    () => DeleteFoundationModelAgreementRequest$,
    () => DeleteFoundationModelAgreementResponse$
  ];
  DeleteGuardrail$ = [
    9,
    n0,
    _DG,
    { [_ht]: ["DELETE", "/guardrails/{guardrailIdentifier}", 202] },
    () => DeleteGuardrailRequest$,
    () => DeleteGuardrailResponse$
  ];
  DeleteImportedModel$ = [
    9,
    n0,
    _DIM,
    { [_ht]: ["DELETE", "/imported-models/{modelIdentifier}", 200] },
    () => DeleteImportedModelRequest$,
    () => DeleteImportedModelResponse$
  ];
  DeleteInferenceProfile$ = [
    9,
    n0,
    _DIP,
    { [_ht]: ["DELETE", "/inference-profiles/{inferenceProfileIdentifier}", 200] },
    () => DeleteInferenceProfileRequest$,
    () => DeleteInferenceProfileResponse$
  ];
  DeleteMarketplaceModelEndpoint$ = [
    9,
    n0,
    _DMME,
    { [_ht]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}", 200] },
    () => DeleteMarketplaceModelEndpointRequest$,
    () => DeleteMarketplaceModelEndpointResponse$
  ];
  DeleteModelInvocationLoggingConfiguration$ = [
    9,
    n0,
    _DMILC,
    { [_ht]: ["DELETE", "/logging/modelinvocations", 200] },
    () => DeleteModelInvocationLoggingConfigurationRequest$,
    () => DeleteModelInvocationLoggingConfigurationResponse$
  ];
  DeletePromptRouter$ = [
    9,
    n0,
    _DPRe,
    { [_ht]: ["DELETE", "/prompt-routers/{promptRouterArn}", 200] },
    () => DeletePromptRouterRequest$,
    () => DeletePromptRouterResponse$
  ];
  DeleteProvisionedModelThroughput$ = [
    9,
    n0,
    _DPMT,
    { [_ht]: ["DELETE", "/provisioned-model-throughput/{provisionedModelId}", 200] },
    () => DeleteProvisionedModelThroughputRequest$,
    () => DeleteProvisionedModelThroughputResponse$
  ];
  DeleteResourcePolicy$ = [
    9,
    n0,
    _DRP,
    { [_ht]: ["DELETE", "/resource-policy/{resourceArn}", 200] },
    () => DeleteResourcePolicyRequest$,
    () => DeleteResourcePolicyResponse$
  ];
  DeregisterMarketplaceModelEndpoint$ = [
    9,
    n0,
    _DMMEe,
    { [_ht]: ["DELETE", "/marketplace-model/endpoints/{endpointArn}/registration", 200] },
    () => DeregisterMarketplaceModelEndpointRequest$,
    () => DeregisterMarketplaceModelEndpointResponse$
  ];
  ExportAutomatedReasoningPolicyVersion$ = [
    9,
    n0,
    _EARPV,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/export", 200] },
    () => ExportAutomatedReasoningPolicyVersionRequest$,
    () => ExportAutomatedReasoningPolicyVersionResponse$
  ];
  GetAutomatedReasoningPolicy$ = [
    9,
    n0,
    _GARPe,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}", 200] },
    () => GetAutomatedReasoningPolicyRequest$,
    () => GetAutomatedReasoningPolicyResponse$
  ];
  GetAutomatedReasoningPolicyAnnotations$ = [
    9,
    n0,
    _GARPA,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations", 200] },
    () => GetAutomatedReasoningPolicyAnnotationsRequest$,
    () => GetAutomatedReasoningPolicyAnnotationsResponse$
  ];
  GetAutomatedReasoningPolicyBuildWorkflow$ = [
    9,
    n0,
    _GARPBW,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}", 200] },
    () => GetAutomatedReasoningPolicyBuildWorkflowRequest$,
    () => GetAutomatedReasoningPolicyBuildWorkflowResponse$
  ];
  GetAutomatedReasoningPolicyBuildWorkflowResultAssets$ = [
    9,
    n0,
    _GARPBWRA,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/result-assets", 200] },
    () => GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest$,
    () => GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse$
  ];
  GetAutomatedReasoningPolicyNextScenario$ = [
    9,
    n0,
    _GARPNS,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/scenarios", 200] },
    () => GetAutomatedReasoningPolicyNextScenarioRequest$,
    () => GetAutomatedReasoningPolicyNextScenarioResponse$
  ];
  GetAutomatedReasoningPolicyTestCase$ = [
    9,
    n0,
    _GARPTC,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 200] },
    () => GetAutomatedReasoningPolicyTestCaseRequest$,
    () => GetAutomatedReasoningPolicyTestCaseResponse$
  ];
  GetAutomatedReasoningPolicyTestResult$ = [
    9,
    n0,
    _GARPTR,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-cases/{testCaseId}/test-results", 200] },
    () => GetAutomatedReasoningPolicyTestResultRequest$,
    () => GetAutomatedReasoningPolicyTestResultResponse$
  ];
  GetCustomModel$ = [
    9,
    n0,
    _GCM,
    { [_ht]: ["GET", "/custom-models/{modelIdentifier}", 200] },
    () => GetCustomModelRequest$,
    () => GetCustomModelResponse$
  ];
  GetCustomModelDeployment$ = [
    9,
    n0,
    _GCMD,
    { [_ht]: ["GET", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 200] },
    () => GetCustomModelDeploymentRequest$,
    () => GetCustomModelDeploymentResponse$
  ];
  GetEvaluationJob$ = [
    9,
    n0,
    _GEJ,
    { [_ht]: ["GET", "/evaluation-jobs/{jobIdentifier}", 200] },
    () => GetEvaluationJobRequest$,
    () => GetEvaluationJobResponse$
  ];
  GetFoundationModel$ = [
    9,
    n0,
    _GFM,
    { [_ht]: ["GET", "/foundation-models/{modelIdentifier}", 200] },
    () => GetFoundationModelRequest$,
    () => GetFoundationModelResponse$
  ];
  GetFoundationModelAvailability$ = [
    9,
    n0,
    _GFMA,
    { [_ht]: ["GET", "/foundation-model-availability/{modelId}", 200] },
    () => GetFoundationModelAvailabilityRequest$,
    () => GetFoundationModelAvailabilityResponse$
  ];
  GetGuardrail$ = [
    9,
    n0,
    _GG,
    { [_ht]: ["GET", "/guardrails/{guardrailIdentifier}", 200] },
    () => GetGuardrailRequest$,
    () => GetGuardrailResponse$
  ];
  GetImportedModel$ = [
    9,
    n0,
    _GIM,
    { [_ht]: ["GET", "/imported-models/{modelIdentifier}", 200] },
    () => GetImportedModelRequest$,
    () => GetImportedModelResponse$
  ];
  GetInferenceProfile$ = [
    9,
    n0,
    _GIP,
    { [_ht]: ["GET", "/inference-profiles/{inferenceProfileIdentifier}", 200] },
    () => GetInferenceProfileRequest$,
    () => GetInferenceProfileResponse$
  ];
  GetMarketplaceModelEndpoint$ = [
    9,
    n0,
    _GMME,
    { [_ht]: ["GET", "/marketplace-model/endpoints/{endpointArn}", 200] },
    () => GetMarketplaceModelEndpointRequest$,
    () => GetMarketplaceModelEndpointResponse$
  ];
  GetModelCopyJob$ = [
    9,
    n0,
    _GMCJ,
    { [_ht]: ["GET", "/model-copy-jobs/{jobArn}", 200] },
    () => GetModelCopyJobRequest$,
    () => GetModelCopyJobResponse$
  ];
  GetModelCustomizationJob$ = [
    9,
    n0,
    _GMCJe,
    { [_ht]: ["GET", "/model-customization-jobs/{jobIdentifier}", 200] },
    () => GetModelCustomizationJobRequest$,
    () => GetModelCustomizationJobResponse$
  ];
  GetModelImportJob$ = [
    9,
    n0,
    _GMIJ,
    { [_ht]: ["GET", "/model-import-jobs/{jobIdentifier}", 200] },
    () => GetModelImportJobRequest$,
    () => GetModelImportJobResponse$
  ];
  GetModelInvocationJob$ = [
    9,
    n0,
    _GMIJe,
    { [_ht]: ["GET", "/model-invocation-job/{jobIdentifier}", 200] },
    () => GetModelInvocationJobRequest$,
    () => GetModelInvocationJobResponse$
  ];
  GetModelInvocationLoggingConfiguration$ = [
    9,
    n0,
    _GMILC,
    { [_ht]: ["GET", "/logging/modelinvocations", 200] },
    () => GetModelInvocationLoggingConfigurationRequest$,
    () => GetModelInvocationLoggingConfigurationResponse$
  ];
  GetPromptRouter$ = [
    9,
    n0,
    _GPR,
    { [_ht]: ["GET", "/prompt-routers/{promptRouterArn}", 200] },
    () => GetPromptRouterRequest$,
    () => GetPromptRouterResponse$
  ];
  GetProvisionedModelThroughput$ = [
    9,
    n0,
    _GPMT,
    { [_ht]: ["GET", "/provisioned-model-throughput/{provisionedModelId}", 200] },
    () => GetProvisionedModelThroughputRequest$,
    () => GetProvisionedModelThroughputResponse$
  ];
  GetResourcePolicy$ = [
    9,
    n0,
    _GRP,
    { [_ht]: ["GET", "/resource-policy/{resourceArn}", 200] },
    () => GetResourcePolicyRequest$,
    () => GetResourcePolicyResponse$
  ];
  GetUseCaseForModelAccess$ = [
    9,
    n0,
    _GUCFMA,
    { [_ht]: ["GET", "/use-case-for-model-access", 200] },
    () => GetUseCaseForModelAccessRequest$,
    () => GetUseCaseForModelAccessResponse$
  ];
  ListAutomatedReasoningPolicies$ = [
    9,
    n0,
    _LARP,
    { [_ht]: ["GET", "/automated-reasoning-policies", 200] },
    () => ListAutomatedReasoningPoliciesRequest$,
    () => ListAutomatedReasoningPoliciesResponse$
  ];
  ListAutomatedReasoningPolicyBuildWorkflows$ = [
    9,
    n0,
    _LARPBW,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows", 200] },
    () => ListAutomatedReasoningPolicyBuildWorkflowsRequest$,
    () => ListAutomatedReasoningPolicyBuildWorkflowsResponse$
  ];
  ListAutomatedReasoningPolicyTestCases$ = [
    9,
    n0,
    _LARPTC,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/test-cases", 200] },
    () => ListAutomatedReasoningPolicyTestCasesRequest$,
    () => ListAutomatedReasoningPolicyTestCasesResponse$
  ];
  ListAutomatedReasoningPolicyTestResults$ = [
    9,
    n0,
    _LARPTR,
    { [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-results", 200] },
    () => ListAutomatedReasoningPolicyTestResultsRequest$,
    () => ListAutomatedReasoningPolicyTestResultsResponse$
  ];
  ListCustomModelDeployments$ = [
    9,
    n0,
    _LCMD,
    { [_ht]: ["GET", "/model-customization/custom-model-deployments", 200] },
    () => ListCustomModelDeploymentsRequest$,
    () => ListCustomModelDeploymentsResponse$
  ];
  ListCustomModels$ = [
    9,
    n0,
    _LCM,
    { [_ht]: ["GET", "/custom-models", 200] },
    () => ListCustomModelsRequest$,
    () => ListCustomModelsResponse$
  ];
  ListEnforcedGuardrailsConfiguration$ = [
    9,
    n0,
    _LEGC,
    { [_ht]: ["GET", "/enforcedGuardrailsConfiguration", 200] },
    () => ListEnforcedGuardrailsConfigurationRequest$,
    () => ListEnforcedGuardrailsConfigurationResponse$
  ];
  ListEvaluationJobs$ = [
    9,
    n0,
    _LEJ,
    { [_ht]: ["GET", "/evaluation-jobs", 200] },
    () => ListEvaluationJobsRequest$,
    () => ListEvaluationJobsResponse$
  ];
  ListFoundationModelAgreementOffers$ = [
    9,
    n0,
    _LFMAO,
    { [_ht]: ["GET", "/list-foundation-model-agreement-offers/{modelId}", 200] },
    () => ListFoundationModelAgreementOffersRequest$,
    () => ListFoundationModelAgreementOffersResponse$
  ];
  ListFoundationModels$ = [
    9,
    n0,
    _LFM,
    { [_ht]: ["GET", "/foundation-models", 200] },
    () => ListFoundationModelsRequest$,
    () => ListFoundationModelsResponse$
  ];
  ListGuardrails$ = [
    9,
    n0,
    _LG,
    { [_ht]: ["GET", "/guardrails", 200] },
    () => ListGuardrailsRequest$,
    () => ListGuardrailsResponse$
  ];
  ListImportedModels$ = [
    9,
    n0,
    _LIM,
    { [_ht]: ["GET", "/imported-models", 200] },
    () => ListImportedModelsRequest$,
    () => ListImportedModelsResponse$
  ];
  ListInferenceProfiles$ = [
    9,
    n0,
    _LIP,
    { [_ht]: ["GET", "/inference-profiles", 200] },
    () => ListInferenceProfilesRequest$,
    () => ListInferenceProfilesResponse$
  ];
  ListMarketplaceModelEndpoints$ = [
    9,
    n0,
    _LMME,
    { [_ht]: ["GET", "/marketplace-model/endpoints", 200] },
    () => ListMarketplaceModelEndpointsRequest$,
    () => ListMarketplaceModelEndpointsResponse$
  ];
  ListModelCopyJobs$ = [
    9,
    n0,
    _LMCJ,
    { [_ht]: ["GET", "/model-copy-jobs", 200] },
    () => ListModelCopyJobsRequest$,
    () => ListModelCopyJobsResponse$
  ];
  ListModelCustomizationJobs$ = [
    9,
    n0,
    _LMCJi,
    { [_ht]: ["GET", "/model-customization-jobs", 200] },
    () => ListModelCustomizationJobsRequest$,
    () => ListModelCustomizationJobsResponse$
  ];
  ListModelImportJobs$ = [
    9,
    n0,
    _LMIJ,
    { [_ht]: ["GET", "/model-import-jobs", 200] },
    () => ListModelImportJobsRequest$,
    () => ListModelImportJobsResponse$
  ];
  ListModelInvocationJobs$ = [
    9,
    n0,
    _LMIJi,
    { [_ht]: ["GET", "/model-invocation-jobs", 200] },
    () => ListModelInvocationJobsRequest$,
    () => ListModelInvocationJobsResponse$
  ];
  ListPromptRouters$ = [
    9,
    n0,
    _LPR,
    { [_ht]: ["GET", "/prompt-routers", 200] },
    () => ListPromptRoutersRequest$,
    () => ListPromptRoutersResponse$
  ];
  ListProvisionedModelThroughputs$ = [
    9,
    n0,
    _LPMT,
    { [_ht]: ["GET", "/provisioned-model-throughputs", 200] },
    () => ListProvisionedModelThroughputsRequest$,
    () => ListProvisionedModelThroughputsResponse$
  ];
  ListTagsForResource$ = [
    9,
    n0,
    _LTFR,
    { [_ht]: ["POST", "/listTagsForResource", 200] },
    () => ListTagsForResourceRequest$,
    () => ListTagsForResourceResponse$
  ];
  PutEnforcedGuardrailConfiguration$ = [
    9,
    n0,
    _PEGC,
    { [_ht]: ["PUT", "/enforcedGuardrailsConfiguration", 200] },
    () => PutEnforcedGuardrailConfigurationRequest$,
    () => PutEnforcedGuardrailConfigurationResponse$
  ];
  PutModelInvocationLoggingConfiguration$ = [
    9,
    n0,
    _PMILC,
    { [_ht]: ["PUT", "/logging/modelinvocations", 200] },
    () => PutModelInvocationLoggingConfigurationRequest$,
    () => PutModelInvocationLoggingConfigurationResponse$
  ];
  PutResourcePolicy$ = [
    9,
    n0,
    _PRP,
    { [_ht]: ["POST", "/resource-policy", 201] },
    () => PutResourcePolicyRequest$,
    () => PutResourcePolicyResponse$
  ];
  PutUseCaseForModelAccess$ = [
    9,
    n0,
    _PUCFMA,
    { [_ht]: ["POST", "/use-case-for-model-access", 201] },
    () => PutUseCaseForModelAccessRequest$,
    () => PutUseCaseForModelAccessResponse$
  ];
  RegisterMarketplaceModelEndpoint$ = [
    9,
    n0,
    _RMME,
    { [_ht]: ["POST", "/marketplace-model/endpoints/{endpointIdentifier}/registration", 200] },
    () => RegisterMarketplaceModelEndpointRequest$,
    () => RegisterMarketplaceModelEndpointResponse$
  ];
  StartAutomatedReasoningPolicyBuildWorkflow$ = [
    9,
    n0,
    _SARPBW,
    { [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowType}/start", 200] },
    () => StartAutomatedReasoningPolicyBuildWorkflowRequest$,
    () => StartAutomatedReasoningPolicyBuildWorkflowResponse$
  ];
  StartAutomatedReasoningPolicyTestWorkflow$ = [
    9,
    n0,
    _SARPTW,
    { [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-workflows", 200] },
    () => StartAutomatedReasoningPolicyTestWorkflowRequest$,
    () => StartAutomatedReasoningPolicyTestWorkflowResponse$
  ];
  StopEvaluationJob$ = [
    9,
    n0,
    _SEJ,
    { [_ht]: ["POST", "/evaluation-job/{jobIdentifier}/stop", 200] },
    () => StopEvaluationJobRequest$,
    () => StopEvaluationJobResponse$
  ];
  StopModelCustomizationJob$ = [
    9,
    n0,
    _SMCJ,
    { [_ht]: ["POST", "/model-customization-jobs/{jobIdentifier}/stop", 200] },
    () => StopModelCustomizationJobRequest$,
    () => StopModelCustomizationJobResponse$
  ];
  StopModelInvocationJob$ = [
    9,
    n0,
    _SMIJ,
    { [_ht]: ["POST", "/model-invocation-job/{jobIdentifier}/stop", 200] },
    () => StopModelInvocationJobRequest$,
    () => StopModelInvocationJobResponse$
  ];
  TagResource$ = [
    9,
    n0,
    _TR,
    { [_ht]: ["POST", "/tagResource", 200] },
    () => TagResourceRequest$,
    () => TagResourceResponse$
  ];
  UntagResource$ = [
    9,
    n0,
    _UR,
    { [_ht]: ["POST", "/untagResource", 200] },
    () => UntagResourceRequest$,
    () => UntagResourceResponse$
  ];
  UpdateAutomatedReasoningPolicy$ = [
    9,
    n0,
    _UARP,
    { [_ht]: ["PATCH", "/automated-reasoning-policies/{policyArn}", 200] },
    () => UpdateAutomatedReasoningPolicyRequest$,
    () => UpdateAutomatedReasoningPolicyResponse$
  ];
  UpdateAutomatedReasoningPolicyAnnotations$ = [
    9,
    n0,
    _UARPA,
    { [_ht]: ["PATCH", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/annotations", 200] },
    () => UpdateAutomatedReasoningPolicyAnnotationsRequest$,
    () => UpdateAutomatedReasoningPolicyAnnotationsResponse$
  ];
  UpdateAutomatedReasoningPolicyTestCase$ = [
    9,
    n0,
    _UARPTC,
    { [_ht]: ["PATCH", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 200] },
    () => UpdateAutomatedReasoningPolicyTestCaseRequest$,
    () => UpdateAutomatedReasoningPolicyTestCaseResponse$
  ];
  UpdateCustomModelDeployment$ = [
    9,
    n0,
    _UCMD,
    { [_ht]: ["PATCH", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 202] },
    () => UpdateCustomModelDeploymentRequest$,
    () => UpdateCustomModelDeploymentResponse$
  ];
  UpdateGuardrail$ = [
    9,
    n0,
    _UG,
    { [_ht]: ["PUT", "/guardrails/{guardrailIdentifier}", 202] },
    () => UpdateGuardrailRequest$,
    () => UpdateGuardrailResponse$
  ];
  UpdateMarketplaceModelEndpoint$ = [
    9,
    n0,
    _UMME,
    { [_ht]: ["PATCH", "/marketplace-model/endpoints/{endpointArn}", 200] },
    () => UpdateMarketplaceModelEndpointRequest$,
    () => UpdateMarketplaceModelEndpointResponse$
  ];
  UpdateProvisionedModelThroughput$ = [
    9,
    n0,
    _UPMT,
    { [_ht]: ["PATCH", "/provisioned-model-throughput/{provisionedModelId}", 200] },
    () => UpdateProvisionedModelThroughputRequest$,
    () => UpdateProvisionedModelThroughputResponse$
  ];
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/runtimeConfig.shared.js
var import_httpAuthSchemes2, import_protocols, import_core2, import_smithy_client2, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig = (config) => {
  return {
    apiVersion: "2023-04-20",
    base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
    base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultBedrockHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new import_httpAuthSchemes2.AwsSdkSigV4Signer
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#httpBearerAuth"),
        signer: new import_core2.HttpBearerAuthSigner
      }
    ],
    logger: config?.logger ?? new import_smithy_client2.NoOpLogger,
    protocol: config?.protocol ?? import_protocols.AwsRestJsonProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.bedrock",
      errorTypeRegistries,
      version: "2023-04-20",
      serviceTarget: "AmazonBedrockControlPlaneService"
    },
    serviceId: config?.serviceId ?? "Bedrock",
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
  import_core2 = __toESM(require_dist_cjs10(), 1);
  import_smithy_client2 = __toESM(require_dist_cjs9(), 1);
  import_url_parser = __toESM(require_dist_cjs4(), 1);
  import_util_base64 = __toESM(require_dist_cjs8(), 1);
  import_util_utf8 = __toESM(require_dist_cjs7(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/runtimeConfig.js
var import_client, import_httpAuthSchemes3, import_util_user_agent_node, import_config_resolver, import_core3, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2 = (config) => {
  import_smithy_client3.emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = import_util_defaults_mode_node.resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(import_smithy_client3.loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  import_client.emitWarningIfUnsupportedVersion(process.version);
  const loaderConfig = {
    profile: config?.profile,
    logger: clientSharedValues.logger,
    signingName: "bedrock"
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
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new import_httpAuthSchemes3.AwsSdkSigV4Signer
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#httpBearerAuth") || (async (idProps) => {
          try {
            return await fromEnvSigningName({ signingName: "bedrock" })();
          } catch (error) {
            return await nodeProvider(idProps)(idProps);
          }
        }),
        signer: new import_core3.HttpBearerAuthSigner
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
    streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    useFipsEndpoint: config?.useFipsEndpoint ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    userAgentAppId: config?.userAgentAppId ?? import_node_config_provider.loadConfig(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
  };
};
var init_runtimeConfig = __esm(() => {
  init_package();
  init_dist_es();
  init_dist_es2();
  init_runtimeConfig_shared();
  import_client = __toESM(require_client(), 1);
  import_httpAuthSchemes3 = __toESM(require_httpAuthSchemes(), 1);
  import_util_user_agent_node = __toESM(require_dist_cjs21(), 1);
  import_config_resolver = __toESM(require_dist_cjs17(), 1);
  import_core3 = __toESM(require_dist_cjs10(), 1);
  import_hash_node = __toESM(require_dist_cjs22(), 1);
  import_middleware_retry = __toESM(require_dist_cjs20(), 1);
  import_node_config_provider = __toESM(require_dist_cjs3(), 1);
  import_node_http_handler = __toESM(require_dist_cjs5(), 1);
  import_smithy_client3 = __toESM(require_dist_cjs9(), 1);
  import_util_body_length_node = __toESM(require_dist_cjs23(), 1);
  import_util_defaults_mode_node = __toESM(require_dist_cjs24(), 1);
  import_util_retry = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  let _token = runtimeConfig.token;
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
    },
    setToken(token) {
      _token = token;
    },
    token() {
      return _token;
    }
  };
}, resolveHttpAuthRuntimeConfig = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials(),
    token: config.token()
  };
};
var init_httpAuthExtensionConfiguration = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/runtimeExtensions.js
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

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/BedrockClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_core4, import_schema2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, BedrockClient;
var init_BedrockClient = __esm(() => {
  init_httpAuthSchemeProvider();
  init_EndpointParameters();
  init_runtimeConfig();
  init_runtimeExtensions();
  import_middleware_host_header = __toESM(require_dist_cjs11(), 1);
  import_middleware_logger = __toESM(require_dist_cjs12(), 1);
  import_middleware_recursion_detection = __toESM(require_dist_cjs13(), 1);
  import_middleware_user_agent = __toESM(require_dist_cjs16(), 1);
  import_config_resolver2 = __toESM(require_dist_cjs17(), 1);
  import_core4 = __toESM(require_dist_cjs10(), 1);
  import_schema2 = __toESM(require_schema(), 1);
  import_middleware_content_length = __toESM(require_dist_cjs18(), 1);
  import_middleware_endpoint = __toESM(require_dist_cjs19(), 1);
  import_middleware_retry2 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client5 = __toESM(require_dist_cjs9(), 1);
  BedrockClient = class BedrockClient extends import_smithy_client5.Client {
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
      const _config_6 = import_middleware_endpoint.resolveEndpointConfig(_config_5);
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
      this.middlewareStack.use(import_core4.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new import_core4.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials,
          "smithy.api#httpBearerAuth": config.token
        })
      }));
      this.middlewareStack.use(import_core4.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/BatchDeleteEvaluationJobCommand.js
var import_middleware_endpoint2, import_smithy_client6, BatchDeleteEvaluationJobCommand;
var init_BatchDeleteEvaluationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint2 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client6 = __toESM(require_dist_cjs9(), 1);
  BatchDeleteEvaluationJobCommand = class BatchDeleteEvaluationJobCommand extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint2.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "BatchDeleteEvaluationJob", {}).n("BedrockClient", "BatchDeleteEvaluationJobCommand").sc(BatchDeleteEvaluationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CancelAutomatedReasoningPolicyBuildWorkflowCommand.js
var import_middleware_endpoint3, import_smithy_client7, CancelAutomatedReasoningPolicyBuildWorkflowCommand;
var init_CancelAutomatedReasoningPolicyBuildWorkflowCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint3 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client7 = __toESM(require_dist_cjs9(), 1);
  CancelAutomatedReasoningPolicyBuildWorkflowCommand = class CancelAutomatedReasoningPolicyBuildWorkflowCommand extends import_smithy_client7.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint3.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CancelAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "CancelAutomatedReasoningPolicyBuildWorkflowCommand").sc(CancelAutomatedReasoningPolicyBuildWorkflow$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateAutomatedReasoningPolicyCommand.js
var import_middleware_endpoint4, import_smithy_client8, CreateAutomatedReasoningPolicyCommand;
var init_CreateAutomatedReasoningPolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint4 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client8 = __toESM(require_dist_cjs9(), 1);
  CreateAutomatedReasoningPolicyCommand = class CreateAutomatedReasoningPolicyCommand extends import_smithy_client8.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint4.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicy", {}).n("BedrockClient", "CreateAutomatedReasoningPolicyCommand").sc(CreateAutomatedReasoningPolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateAutomatedReasoningPolicyTestCaseCommand.js
var import_middleware_endpoint5, import_smithy_client9, CreateAutomatedReasoningPolicyTestCaseCommand;
var init_CreateAutomatedReasoningPolicyTestCaseCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint5 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client9 = __toESM(require_dist_cjs9(), 1);
  CreateAutomatedReasoningPolicyTestCaseCommand = class CreateAutomatedReasoningPolicyTestCaseCommand extends import_smithy_client9.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint5.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "CreateAutomatedReasoningPolicyTestCaseCommand").sc(CreateAutomatedReasoningPolicyTestCase$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateAutomatedReasoningPolicyVersionCommand.js
var import_middleware_endpoint6, import_smithy_client10, CreateAutomatedReasoningPolicyVersionCommand;
var init_CreateAutomatedReasoningPolicyVersionCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint6 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client10 = __toESM(require_dist_cjs9(), 1);
  CreateAutomatedReasoningPolicyVersionCommand = class CreateAutomatedReasoningPolicyVersionCommand extends import_smithy_client10.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint6.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicyVersion", {}).n("BedrockClient", "CreateAutomatedReasoningPolicyVersionCommand").sc(CreateAutomatedReasoningPolicyVersion$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateCustomModelCommand.js
var import_middleware_endpoint7, import_smithy_client11, CreateCustomModelCommand;
var init_CreateCustomModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint7 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client11 = __toESM(require_dist_cjs9(), 1);
  CreateCustomModelCommand = class CreateCustomModelCommand extends import_smithy_client11.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint7.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateCustomModel", {}).n("BedrockClient", "CreateCustomModelCommand").sc(CreateCustomModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateCustomModelDeploymentCommand.js
var import_middleware_endpoint8, import_smithy_client12, CreateCustomModelDeploymentCommand;
var init_CreateCustomModelDeploymentCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint8 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client12 = __toESM(require_dist_cjs9(), 1);
  CreateCustomModelDeploymentCommand = class CreateCustomModelDeploymentCommand extends import_smithy_client12.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint8.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateCustomModelDeployment", {}).n("BedrockClient", "CreateCustomModelDeploymentCommand").sc(CreateCustomModelDeployment$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateEvaluationJobCommand.js
var import_middleware_endpoint9, import_smithy_client13, CreateEvaluationJobCommand;
var init_CreateEvaluationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint9 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client13 = __toESM(require_dist_cjs9(), 1);
  CreateEvaluationJobCommand = class CreateEvaluationJobCommand extends import_smithy_client13.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint9.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateEvaluationJob", {}).n("BedrockClient", "CreateEvaluationJobCommand").sc(CreateEvaluationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateFoundationModelAgreementCommand.js
var import_middleware_endpoint10, import_smithy_client14, CreateFoundationModelAgreementCommand;
var init_CreateFoundationModelAgreementCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint10 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client14 = __toESM(require_dist_cjs9(), 1);
  CreateFoundationModelAgreementCommand = class CreateFoundationModelAgreementCommand extends import_smithy_client14.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint10.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateFoundationModelAgreement", {}).n("BedrockClient", "CreateFoundationModelAgreementCommand").sc(CreateFoundationModelAgreement$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateGuardrailCommand.js
var import_middleware_endpoint11, import_smithy_client15, CreateGuardrailCommand;
var init_CreateGuardrailCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint11 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client15 = __toESM(require_dist_cjs9(), 1);
  CreateGuardrailCommand = class CreateGuardrailCommand extends import_smithy_client15.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint11.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateGuardrail", {}).n("BedrockClient", "CreateGuardrailCommand").sc(CreateGuardrail$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateGuardrailVersionCommand.js
var import_middleware_endpoint12, import_smithy_client16, CreateGuardrailVersionCommand;
var init_CreateGuardrailVersionCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint12 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client16 = __toESM(require_dist_cjs9(), 1);
  CreateGuardrailVersionCommand = class CreateGuardrailVersionCommand extends import_smithy_client16.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint12.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateGuardrailVersion", {}).n("BedrockClient", "CreateGuardrailVersionCommand").sc(CreateGuardrailVersion$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateInferenceProfileCommand.js
var import_middleware_endpoint13, import_smithy_client17, CreateInferenceProfileCommand;
var init_CreateInferenceProfileCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint13 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client17 = __toESM(require_dist_cjs9(), 1);
  CreateInferenceProfileCommand = class CreateInferenceProfileCommand extends import_smithy_client17.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint13.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateInferenceProfile", {}).n("BedrockClient", "CreateInferenceProfileCommand").sc(CreateInferenceProfile$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateMarketplaceModelEndpointCommand.js
var import_middleware_endpoint14, import_smithy_client18, CreateMarketplaceModelEndpointCommand;
var init_CreateMarketplaceModelEndpointCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint14 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client18 = __toESM(require_dist_cjs9(), 1);
  CreateMarketplaceModelEndpointCommand = class CreateMarketplaceModelEndpointCommand extends import_smithy_client18.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint14.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateMarketplaceModelEndpoint", {}).n("BedrockClient", "CreateMarketplaceModelEndpointCommand").sc(CreateMarketplaceModelEndpoint$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateModelCopyJobCommand.js
var import_middleware_endpoint15, import_smithy_client19, CreateModelCopyJobCommand;
var init_CreateModelCopyJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint15 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client19 = __toESM(require_dist_cjs9(), 1);
  CreateModelCopyJobCommand = class CreateModelCopyJobCommand extends import_smithy_client19.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint15.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelCopyJob", {}).n("BedrockClient", "CreateModelCopyJobCommand").sc(CreateModelCopyJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateModelCustomizationJobCommand.js
var import_middleware_endpoint16, import_smithy_client20, CreateModelCustomizationJobCommand;
var init_CreateModelCustomizationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint16 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client20 = __toESM(require_dist_cjs9(), 1);
  CreateModelCustomizationJobCommand = class CreateModelCustomizationJobCommand extends import_smithy_client20.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint16.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelCustomizationJob", {}).n("BedrockClient", "CreateModelCustomizationJobCommand").sc(CreateModelCustomizationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateModelImportJobCommand.js
var import_middleware_endpoint17, import_smithy_client21, CreateModelImportJobCommand;
var init_CreateModelImportJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint17 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client21 = __toESM(require_dist_cjs9(), 1);
  CreateModelImportJobCommand = class CreateModelImportJobCommand extends import_smithy_client21.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint17.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelImportJob", {}).n("BedrockClient", "CreateModelImportJobCommand").sc(CreateModelImportJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateModelInvocationJobCommand.js
var import_middleware_endpoint18, import_smithy_client22, CreateModelInvocationJobCommand;
var init_CreateModelInvocationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint18 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client22 = __toESM(require_dist_cjs9(), 1);
  CreateModelInvocationJobCommand = class CreateModelInvocationJobCommand extends import_smithy_client22.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint18.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateModelInvocationJob", {}).n("BedrockClient", "CreateModelInvocationJobCommand").sc(CreateModelInvocationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreatePromptRouterCommand.js
var import_middleware_endpoint19, import_smithy_client23, CreatePromptRouterCommand;
var init_CreatePromptRouterCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint19 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client23 = __toESM(require_dist_cjs9(), 1);
  CreatePromptRouterCommand = class CreatePromptRouterCommand extends import_smithy_client23.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint19.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreatePromptRouter", {}).n("BedrockClient", "CreatePromptRouterCommand").sc(CreatePromptRouter$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/CreateProvisionedModelThroughputCommand.js
var import_middleware_endpoint20, import_smithy_client24, CreateProvisionedModelThroughputCommand;
var init_CreateProvisionedModelThroughputCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint20 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client24 = __toESM(require_dist_cjs9(), 1);
  CreateProvisionedModelThroughputCommand = class CreateProvisionedModelThroughputCommand extends import_smithy_client24.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint20.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "CreateProvisionedModelThroughput", {}).n("BedrockClient", "CreateProvisionedModelThroughputCommand").sc(CreateProvisionedModelThroughput$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteAutomatedReasoningPolicyBuildWorkflowCommand.js
var import_middleware_endpoint21, import_smithy_client25, DeleteAutomatedReasoningPolicyBuildWorkflowCommand;
var init_DeleteAutomatedReasoningPolicyBuildWorkflowCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint21 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client25 = __toESM(require_dist_cjs9(), 1);
  DeleteAutomatedReasoningPolicyBuildWorkflowCommand = class DeleteAutomatedReasoningPolicyBuildWorkflowCommand extends import_smithy_client25.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint21.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "DeleteAutomatedReasoningPolicyBuildWorkflowCommand").sc(DeleteAutomatedReasoningPolicyBuildWorkflow$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteAutomatedReasoningPolicyCommand.js
var import_middleware_endpoint22, import_smithy_client26, DeleteAutomatedReasoningPolicyCommand;
var init_DeleteAutomatedReasoningPolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint22 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client26 = __toESM(require_dist_cjs9(), 1);
  DeleteAutomatedReasoningPolicyCommand = class DeleteAutomatedReasoningPolicyCommand extends import_smithy_client26.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint22.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicy", {}).n("BedrockClient", "DeleteAutomatedReasoningPolicyCommand").sc(DeleteAutomatedReasoningPolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteAutomatedReasoningPolicyTestCaseCommand.js
var import_middleware_endpoint23, import_smithy_client27, DeleteAutomatedReasoningPolicyTestCaseCommand;
var init_DeleteAutomatedReasoningPolicyTestCaseCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint23 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client27 = __toESM(require_dist_cjs9(), 1);
  DeleteAutomatedReasoningPolicyTestCaseCommand = class DeleteAutomatedReasoningPolicyTestCaseCommand extends import_smithy_client27.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint23.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "DeleteAutomatedReasoningPolicyTestCaseCommand").sc(DeleteAutomatedReasoningPolicyTestCase$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteCustomModelCommand.js
var import_middleware_endpoint24, import_smithy_client28, DeleteCustomModelCommand;
var init_DeleteCustomModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint24 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client28 = __toESM(require_dist_cjs9(), 1);
  DeleteCustomModelCommand = class DeleteCustomModelCommand extends import_smithy_client28.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint24.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteCustomModel", {}).n("BedrockClient", "DeleteCustomModelCommand").sc(DeleteCustomModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteCustomModelDeploymentCommand.js
var import_middleware_endpoint25, import_smithy_client29, DeleteCustomModelDeploymentCommand;
var init_DeleteCustomModelDeploymentCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint25 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client29 = __toESM(require_dist_cjs9(), 1);
  DeleteCustomModelDeploymentCommand = class DeleteCustomModelDeploymentCommand extends import_smithy_client29.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint25.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteCustomModelDeployment", {}).n("BedrockClient", "DeleteCustomModelDeploymentCommand").sc(DeleteCustomModelDeployment$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteEnforcedGuardrailConfigurationCommand.js
var import_middleware_endpoint26, import_smithy_client30, DeleteEnforcedGuardrailConfigurationCommand;
var init_DeleteEnforcedGuardrailConfigurationCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint26 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client30 = __toESM(require_dist_cjs9(), 1);
  DeleteEnforcedGuardrailConfigurationCommand = class DeleteEnforcedGuardrailConfigurationCommand extends import_smithy_client30.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint26.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteEnforcedGuardrailConfiguration", {}).n("BedrockClient", "DeleteEnforcedGuardrailConfigurationCommand").sc(DeleteEnforcedGuardrailConfiguration$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteFoundationModelAgreementCommand.js
var import_middleware_endpoint27, import_smithy_client31, DeleteFoundationModelAgreementCommand;
var init_DeleteFoundationModelAgreementCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint27 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client31 = __toESM(require_dist_cjs9(), 1);
  DeleteFoundationModelAgreementCommand = class DeleteFoundationModelAgreementCommand extends import_smithy_client31.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint27.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteFoundationModelAgreement", {}).n("BedrockClient", "DeleteFoundationModelAgreementCommand").sc(DeleteFoundationModelAgreement$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteGuardrailCommand.js
var import_middleware_endpoint28, import_smithy_client32, DeleteGuardrailCommand;
var init_DeleteGuardrailCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint28 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client32 = __toESM(require_dist_cjs9(), 1);
  DeleteGuardrailCommand = class DeleteGuardrailCommand extends import_smithy_client32.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint28.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteGuardrail", {}).n("BedrockClient", "DeleteGuardrailCommand").sc(DeleteGuardrail$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteImportedModelCommand.js
var import_middleware_endpoint29, import_smithy_client33, DeleteImportedModelCommand;
var init_DeleteImportedModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint29 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client33 = __toESM(require_dist_cjs9(), 1);
  DeleteImportedModelCommand = class DeleteImportedModelCommand extends import_smithy_client33.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint29.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteImportedModel", {}).n("BedrockClient", "DeleteImportedModelCommand").sc(DeleteImportedModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteInferenceProfileCommand.js
var import_middleware_endpoint30, import_smithy_client34, DeleteInferenceProfileCommand;
var init_DeleteInferenceProfileCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint30 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client34 = __toESM(require_dist_cjs9(), 1);
  DeleteInferenceProfileCommand = class DeleteInferenceProfileCommand extends import_smithy_client34.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint30.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteInferenceProfile", {}).n("BedrockClient", "DeleteInferenceProfileCommand").sc(DeleteInferenceProfile$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteMarketplaceModelEndpointCommand.js
var import_middleware_endpoint31, import_smithy_client35, DeleteMarketplaceModelEndpointCommand;
var init_DeleteMarketplaceModelEndpointCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint31 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client35 = __toESM(require_dist_cjs9(), 1);
  DeleteMarketplaceModelEndpointCommand = class DeleteMarketplaceModelEndpointCommand extends import_smithy_client35.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint31.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteMarketplaceModelEndpoint", {}).n("BedrockClient", "DeleteMarketplaceModelEndpointCommand").sc(DeleteMarketplaceModelEndpoint$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteModelInvocationLoggingConfigurationCommand.js
var import_middleware_endpoint32, import_smithy_client36, DeleteModelInvocationLoggingConfigurationCommand;
var init_DeleteModelInvocationLoggingConfigurationCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint32 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client36 = __toESM(require_dist_cjs9(), 1);
  DeleteModelInvocationLoggingConfigurationCommand = class DeleteModelInvocationLoggingConfigurationCommand extends import_smithy_client36.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint32.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteModelInvocationLoggingConfiguration", {}).n("BedrockClient", "DeleteModelInvocationLoggingConfigurationCommand").sc(DeleteModelInvocationLoggingConfiguration$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeletePromptRouterCommand.js
var import_middleware_endpoint33, import_smithy_client37, DeletePromptRouterCommand;
var init_DeletePromptRouterCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint33 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client37 = __toESM(require_dist_cjs9(), 1);
  DeletePromptRouterCommand = class DeletePromptRouterCommand extends import_smithy_client37.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint33.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeletePromptRouter", {}).n("BedrockClient", "DeletePromptRouterCommand").sc(DeletePromptRouter$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteProvisionedModelThroughputCommand.js
var import_middleware_endpoint34, import_smithy_client38, DeleteProvisionedModelThroughputCommand;
var init_DeleteProvisionedModelThroughputCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint34 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client38 = __toESM(require_dist_cjs9(), 1);
  DeleteProvisionedModelThroughputCommand = class DeleteProvisionedModelThroughputCommand extends import_smithy_client38.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint34.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteProvisionedModelThroughput", {}).n("BedrockClient", "DeleteProvisionedModelThroughputCommand").sc(DeleteProvisionedModelThroughput$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeleteResourcePolicyCommand.js
var import_middleware_endpoint35, import_smithy_client39, DeleteResourcePolicyCommand;
var init_DeleteResourcePolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint35 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client39 = __toESM(require_dist_cjs9(), 1);
  DeleteResourcePolicyCommand = class DeleteResourcePolicyCommand extends import_smithy_client39.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint35.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeleteResourcePolicy", {}).n("BedrockClient", "DeleteResourcePolicyCommand").sc(DeleteResourcePolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/DeregisterMarketplaceModelEndpointCommand.js
var import_middleware_endpoint36, import_smithy_client40, DeregisterMarketplaceModelEndpointCommand;
var init_DeregisterMarketplaceModelEndpointCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint36 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client40 = __toESM(require_dist_cjs9(), 1);
  DeregisterMarketplaceModelEndpointCommand = class DeregisterMarketplaceModelEndpointCommand extends import_smithy_client40.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint36.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "DeregisterMarketplaceModelEndpoint", {}).n("BedrockClient", "DeregisterMarketplaceModelEndpointCommand").sc(DeregisterMarketplaceModelEndpoint$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ExportAutomatedReasoningPolicyVersionCommand.js
var import_middleware_endpoint37, import_smithy_client41, ExportAutomatedReasoningPolicyVersionCommand;
var init_ExportAutomatedReasoningPolicyVersionCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint37 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client41 = __toESM(require_dist_cjs9(), 1);
  ExportAutomatedReasoningPolicyVersionCommand = class ExportAutomatedReasoningPolicyVersionCommand extends import_smithy_client41.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint37.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ExportAutomatedReasoningPolicyVersion", {}).n("BedrockClient", "ExportAutomatedReasoningPolicyVersionCommand").sc(ExportAutomatedReasoningPolicyVersion$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyAnnotationsCommand.js
var import_middleware_endpoint38, import_smithy_client42, GetAutomatedReasoningPolicyAnnotationsCommand;
var init_GetAutomatedReasoningPolicyAnnotationsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint38 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client42 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyAnnotationsCommand = class GetAutomatedReasoningPolicyAnnotationsCommand extends import_smithy_client42.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint38.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyAnnotations", {}).n("BedrockClient", "GetAutomatedReasoningPolicyAnnotationsCommand").sc(GetAutomatedReasoningPolicyAnnotations$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyBuildWorkflowCommand.js
var import_middleware_endpoint39, import_smithy_client43, GetAutomatedReasoningPolicyBuildWorkflowCommand;
var init_GetAutomatedReasoningPolicyBuildWorkflowCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint39 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client43 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyBuildWorkflowCommand = class GetAutomatedReasoningPolicyBuildWorkflowCommand extends import_smithy_client43.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint39.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "GetAutomatedReasoningPolicyBuildWorkflowCommand").sc(GetAutomatedReasoningPolicyBuildWorkflow$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand.js
var import_middleware_endpoint40, import_smithy_client44, GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand;
var init_GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint40 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client44 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand = class GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand extends import_smithy_client44.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint40.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyBuildWorkflowResultAssets", {}).n("BedrockClient", "GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand").sc(GetAutomatedReasoningPolicyBuildWorkflowResultAssets$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyCommand.js
var import_middleware_endpoint41, import_smithy_client45, GetAutomatedReasoningPolicyCommand;
var init_GetAutomatedReasoningPolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint41 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client45 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyCommand = class GetAutomatedReasoningPolicyCommand extends import_smithy_client45.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint41.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicy", {}).n("BedrockClient", "GetAutomatedReasoningPolicyCommand").sc(GetAutomatedReasoningPolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyNextScenarioCommand.js
var import_middleware_endpoint42, import_smithy_client46, GetAutomatedReasoningPolicyNextScenarioCommand;
var init_GetAutomatedReasoningPolicyNextScenarioCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint42 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client46 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyNextScenarioCommand = class GetAutomatedReasoningPolicyNextScenarioCommand extends import_smithy_client46.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint42.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyNextScenario", {}).n("BedrockClient", "GetAutomatedReasoningPolicyNextScenarioCommand").sc(GetAutomatedReasoningPolicyNextScenario$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyTestCaseCommand.js
var import_middleware_endpoint43, import_smithy_client47, GetAutomatedReasoningPolicyTestCaseCommand;
var init_GetAutomatedReasoningPolicyTestCaseCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint43 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client47 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyTestCaseCommand = class GetAutomatedReasoningPolicyTestCaseCommand extends import_smithy_client47.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint43.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "GetAutomatedReasoningPolicyTestCaseCommand").sc(GetAutomatedReasoningPolicyTestCase$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetAutomatedReasoningPolicyTestResultCommand.js
var import_middleware_endpoint44, import_smithy_client48, GetAutomatedReasoningPolicyTestResultCommand;
var init_GetAutomatedReasoningPolicyTestResultCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint44 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client48 = __toESM(require_dist_cjs9(), 1);
  GetAutomatedReasoningPolicyTestResultCommand = class GetAutomatedReasoningPolicyTestResultCommand extends import_smithy_client48.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint44.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetAutomatedReasoningPolicyTestResult", {}).n("BedrockClient", "GetAutomatedReasoningPolicyTestResultCommand").sc(GetAutomatedReasoningPolicyTestResult$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetCustomModelCommand.js
var import_middleware_endpoint45, import_smithy_client49, GetCustomModelCommand;
var init_GetCustomModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint45 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client49 = __toESM(require_dist_cjs9(), 1);
  GetCustomModelCommand = class GetCustomModelCommand extends import_smithy_client49.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint45.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetCustomModel", {}).n("BedrockClient", "GetCustomModelCommand").sc(GetCustomModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetCustomModelDeploymentCommand.js
var import_middleware_endpoint46, import_smithy_client50, GetCustomModelDeploymentCommand;
var init_GetCustomModelDeploymentCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint46 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client50 = __toESM(require_dist_cjs9(), 1);
  GetCustomModelDeploymentCommand = class GetCustomModelDeploymentCommand extends import_smithy_client50.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint46.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetCustomModelDeployment", {}).n("BedrockClient", "GetCustomModelDeploymentCommand").sc(GetCustomModelDeployment$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetEvaluationJobCommand.js
var import_middleware_endpoint47, import_smithy_client51, GetEvaluationJobCommand;
var init_GetEvaluationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint47 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client51 = __toESM(require_dist_cjs9(), 1);
  GetEvaluationJobCommand = class GetEvaluationJobCommand extends import_smithy_client51.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint47.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetEvaluationJob", {}).n("BedrockClient", "GetEvaluationJobCommand").sc(GetEvaluationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetFoundationModelAvailabilityCommand.js
var import_middleware_endpoint48, import_smithy_client52, GetFoundationModelAvailabilityCommand;
var init_GetFoundationModelAvailabilityCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint48 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client52 = __toESM(require_dist_cjs9(), 1);
  GetFoundationModelAvailabilityCommand = class GetFoundationModelAvailabilityCommand extends import_smithy_client52.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint48.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetFoundationModelAvailability", {}).n("BedrockClient", "GetFoundationModelAvailabilityCommand").sc(GetFoundationModelAvailability$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetFoundationModelCommand.js
var import_middleware_endpoint49, import_smithy_client53, GetFoundationModelCommand;
var init_GetFoundationModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint49 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client53 = __toESM(require_dist_cjs9(), 1);
  GetFoundationModelCommand = class GetFoundationModelCommand extends import_smithy_client53.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint49.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetFoundationModel", {}).n("BedrockClient", "GetFoundationModelCommand").sc(GetFoundationModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetGuardrailCommand.js
var import_middleware_endpoint50, import_smithy_client54, GetGuardrailCommand;
var init_GetGuardrailCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint50 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client54 = __toESM(require_dist_cjs9(), 1);
  GetGuardrailCommand = class GetGuardrailCommand extends import_smithy_client54.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint50.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetGuardrail", {}).n("BedrockClient", "GetGuardrailCommand").sc(GetGuardrail$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetImportedModelCommand.js
var import_middleware_endpoint51, import_smithy_client55, GetImportedModelCommand;
var init_GetImportedModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint51 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client55 = __toESM(require_dist_cjs9(), 1);
  GetImportedModelCommand = class GetImportedModelCommand extends import_smithy_client55.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint51.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetImportedModel", {}).n("BedrockClient", "GetImportedModelCommand").sc(GetImportedModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetInferenceProfileCommand.js
var import_middleware_endpoint52, import_smithy_client56, GetInferenceProfileCommand;
var init_GetInferenceProfileCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint52 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client56 = __toESM(require_dist_cjs9(), 1);
  GetInferenceProfileCommand = class GetInferenceProfileCommand extends import_smithy_client56.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint52.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").sc(GetInferenceProfile$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetMarketplaceModelEndpointCommand.js
var import_middleware_endpoint53, import_smithy_client57, GetMarketplaceModelEndpointCommand;
var init_GetMarketplaceModelEndpointCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint53 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client57 = __toESM(require_dist_cjs9(), 1);
  GetMarketplaceModelEndpointCommand = class GetMarketplaceModelEndpointCommand extends import_smithy_client57.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint53.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetMarketplaceModelEndpoint", {}).n("BedrockClient", "GetMarketplaceModelEndpointCommand").sc(GetMarketplaceModelEndpoint$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetModelCopyJobCommand.js
var import_middleware_endpoint54, import_smithy_client58, GetModelCopyJobCommand;
var init_GetModelCopyJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint54 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client58 = __toESM(require_dist_cjs9(), 1);
  GetModelCopyJobCommand = class GetModelCopyJobCommand extends import_smithy_client58.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint54.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelCopyJob", {}).n("BedrockClient", "GetModelCopyJobCommand").sc(GetModelCopyJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetModelCustomizationJobCommand.js
var import_middleware_endpoint55, import_smithy_client59, GetModelCustomizationJobCommand;
var init_GetModelCustomizationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint55 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client59 = __toESM(require_dist_cjs9(), 1);
  GetModelCustomizationJobCommand = class GetModelCustomizationJobCommand extends import_smithy_client59.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint55.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelCustomizationJob", {}).n("BedrockClient", "GetModelCustomizationJobCommand").sc(GetModelCustomizationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetModelImportJobCommand.js
var import_middleware_endpoint56, import_smithy_client60, GetModelImportJobCommand;
var init_GetModelImportJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint56 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client60 = __toESM(require_dist_cjs9(), 1);
  GetModelImportJobCommand = class GetModelImportJobCommand extends import_smithy_client60.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint56.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelImportJob", {}).n("BedrockClient", "GetModelImportJobCommand").sc(GetModelImportJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetModelInvocationJobCommand.js
var import_middleware_endpoint57, import_smithy_client61, GetModelInvocationJobCommand;
var init_GetModelInvocationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint57 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client61 = __toESM(require_dist_cjs9(), 1);
  GetModelInvocationJobCommand = class GetModelInvocationJobCommand extends import_smithy_client61.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint57.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelInvocationJob", {}).n("BedrockClient", "GetModelInvocationJobCommand").sc(GetModelInvocationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetModelInvocationLoggingConfigurationCommand.js
var import_middleware_endpoint58, import_smithy_client62, GetModelInvocationLoggingConfigurationCommand;
var init_GetModelInvocationLoggingConfigurationCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint58 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client62 = __toESM(require_dist_cjs9(), 1);
  GetModelInvocationLoggingConfigurationCommand = class GetModelInvocationLoggingConfigurationCommand extends import_smithy_client62.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint58.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetModelInvocationLoggingConfiguration", {}).n("BedrockClient", "GetModelInvocationLoggingConfigurationCommand").sc(GetModelInvocationLoggingConfiguration$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetPromptRouterCommand.js
var import_middleware_endpoint59, import_smithy_client63, GetPromptRouterCommand;
var init_GetPromptRouterCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint59 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client63 = __toESM(require_dist_cjs9(), 1);
  GetPromptRouterCommand = class GetPromptRouterCommand extends import_smithy_client63.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint59.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetPromptRouter", {}).n("BedrockClient", "GetPromptRouterCommand").sc(GetPromptRouter$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetProvisionedModelThroughputCommand.js
var import_middleware_endpoint60, import_smithy_client64, GetProvisionedModelThroughputCommand;
var init_GetProvisionedModelThroughputCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint60 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client64 = __toESM(require_dist_cjs9(), 1);
  GetProvisionedModelThroughputCommand = class GetProvisionedModelThroughputCommand extends import_smithy_client64.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint60.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetProvisionedModelThroughput", {}).n("BedrockClient", "GetProvisionedModelThroughputCommand").sc(GetProvisionedModelThroughput$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetResourcePolicyCommand.js
var import_middleware_endpoint61, import_smithy_client65, GetResourcePolicyCommand;
var init_GetResourcePolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint61 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client65 = __toESM(require_dist_cjs9(), 1);
  GetResourcePolicyCommand = class GetResourcePolicyCommand extends import_smithy_client65.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint61.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetResourcePolicy", {}).n("BedrockClient", "GetResourcePolicyCommand").sc(GetResourcePolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/GetUseCaseForModelAccessCommand.js
var import_middleware_endpoint62, import_smithy_client66, GetUseCaseForModelAccessCommand;
var init_GetUseCaseForModelAccessCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint62 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client66 = __toESM(require_dist_cjs9(), 1);
  GetUseCaseForModelAccessCommand = class GetUseCaseForModelAccessCommand extends import_smithy_client66.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint62.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "GetUseCaseForModelAccess", {}).n("BedrockClient", "GetUseCaseForModelAccessCommand").sc(GetUseCaseForModelAccess$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListAutomatedReasoningPoliciesCommand.js
var import_middleware_endpoint63, import_smithy_client67, ListAutomatedReasoningPoliciesCommand;
var init_ListAutomatedReasoningPoliciesCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint63 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client67 = __toESM(require_dist_cjs9(), 1);
  ListAutomatedReasoningPoliciesCommand = class ListAutomatedReasoningPoliciesCommand extends import_smithy_client67.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint63.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicies", {}).n("BedrockClient", "ListAutomatedReasoningPoliciesCommand").sc(ListAutomatedReasoningPolicies$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListAutomatedReasoningPolicyBuildWorkflowsCommand.js
var import_middleware_endpoint64, import_smithy_client68, ListAutomatedReasoningPolicyBuildWorkflowsCommand;
var init_ListAutomatedReasoningPolicyBuildWorkflowsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint64 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client68 = __toESM(require_dist_cjs9(), 1);
  ListAutomatedReasoningPolicyBuildWorkflowsCommand = class ListAutomatedReasoningPolicyBuildWorkflowsCommand extends import_smithy_client68.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint64.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyBuildWorkflows", {}).n("BedrockClient", "ListAutomatedReasoningPolicyBuildWorkflowsCommand").sc(ListAutomatedReasoningPolicyBuildWorkflows$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListAutomatedReasoningPolicyTestCasesCommand.js
var import_middleware_endpoint65, import_smithy_client69, ListAutomatedReasoningPolicyTestCasesCommand;
var init_ListAutomatedReasoningPolicyTestCasesCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint65 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client69 = __toESM(require_dist_cjs9(), 1);
  ListAutomatedReasoningPolicyTestCasesCommand = class ListAutomatedReasoningPolicyTestCasesCommand extends import_smithy_client69.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint65.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyTestCases", {}).n("BedrockClient", "ListAutomatedReasoningPolicyTestCasesCommand").sc(ListAutomatedReasoningPolicyTestCases$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListAutomatedReasoningPolicyTestResultsCommand.js
var import_middleware_endpoint66, import_smithy_client70, ListAutomatedReasoningPolicyTestResultsCommand;
var init_ListAutomatedReasoningPolicyTestResultsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint66 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client70 = __toESM(require_dist_cjs9(), 1);
  ListAutomatedReasoningPolicyTestResultsCommand = class ListAutomatedReasoningPolicyTestResultsCommand extends import_smithy_client70.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint66.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListAutomatedReasoningPolicyTestResults", {}).n("BedrockClient", "ListAutomatedReasoningPolicyTestResultsCommand").sc(ListAutomatedReasoningPolicyTestResults$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListCustomModelDeploymentsCommand.js
var import_middleware_endpoint67, import_smithy_client71, ListCustomModelDeploymentsCommand;
var init_ListCustomModelDeploymentsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint67 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client71 = __toESM(require_dist_cjs9(), 1);
  ListCustomModelDeploymentsCommand = class ListCustomModelDeploymentsCommand extends import_smithy_client71.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint67.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListCustomModelDeployments", {}).n("BedrockClient", "ListCustomModelDeploymentsCommand").sc(ListCustomModelDeployments$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListCustomModelsCommand.js
var import_middleware_endpoint68, import_smithy_client72, ListCustomModelsCommand;
var init_ListCustomModelsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint68 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client72 = __toESM(require_dist_cjs9(), 1);
  ListCustomModelsCommand = class ListCustomModelsCommand extends import_smithy_client72.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint68.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListCustomModels", {}).n("BedrockClient", "ListCustomModelsCommand").sc(ListCustomModels$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListEnforcedGuardrailsConfigurationCommand.js
var import_middleware_endpoint69, import_smithy_client73, ListEnforcedGuardrailsConfigurationCommand;
var init_ListEnforcedGuardrailsConfigurationCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint69 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client73 = __toESM(require_dist_cjs9(), 1);
  ListEnforcedGuardrailsConfigurationCommand = class ListEnforcedGuardrailsConfigurationCommand extends import_smithy_client73.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint69.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListEnforcedGuardrailsConfiguration", {}).n("BedrockClient", "ListEnforcedGuardrailsConfigurationCommand").sc(ListEnforcedGuardrailsConfiguration$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListEvaluationJobsCommand.js
var import_middleware_endpoint70, import_smithy_client74, ListEvaluationJobsCommand;
var init_ListEvaluationJobsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint70 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client74 = __toESM(require_dist_cjs9(), 1);
  ListEvaluationJobsCommand = class ListEvaluationJobsCommand extends import_smithy_client74.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint70.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {}).n("BedrockClient", "ListEvaluationJobsCommand").sc(ListEvaluationJobs$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListFoundationModelAgreementOffersCommand.js
var import_middleware_endpoint71, import_smithy_client75, ListFoundationModelAgreementOffersCommand;
var init_ListFoundationModelAgreementOffersCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint71 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client75 = __toESM(require_dist_cjs9(), 1);
  ListFoundationModelAgreementOffersCommand = class ListFoundationModelAgreementOffersCommand extends import_smithy_client75.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint71.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListFoundationModelAgreementOffers", {}).n("BedrockClient", "ListFoundationModelAgreementOffersCommand").sc(ListFoundationModelAgreementOffers$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListFoundationModelsCommand.js
var import_middleware_endpoint72, import_smithy_client76, ListFoundationModelsCommand;
var init_ListFoundationModelsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint72 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client76 = __toESM(require_dist_cjs9(), 1);
  ListFoundationModelsCommand = class ListFoundationModelsCommand extends import_smithy_client76.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint72.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListFoundationModels", {}).n("BedrockClient", "ListFoundationModelsCommand").sc(ListFoundationModels$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListGuardrailsCommand.js
var import_middleware_endpoint73, import_smithy_client77, ListGuardrailsCommand;
var init_ListGuardrailsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint73 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client77 = __toESM(require_dist_cjs9(), 1);
  ListGuardrailsCommand = class ListGuardrailsCommand extends import_smithy_client77.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint73.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListGuardrails", {}).n("BedrockClient", "ListGuardrailsCommand").sc(ListGuardrails$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListImportedModelsCommand.js
var import_middleware_endpoint74, import_smithy_client78, ListImportedModelsCommand;
var init_ListImportedModelsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint74 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client78 = __toESM(require_dist_cjs9(), 1);
  ListImportedModelsCommand = class ListImportedModelsCommand extends import_smithy_client78.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint74.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListImportedModels", {}).n("BedrockClient", "ListImportedModelsCommand").sc(ListImportedModels$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListInferenceProfilesCommand.js
var import_middleware_endpoint75, import_smithy_client79, ListInferenceProfilesCommand;
var init_ListInferenceProfilesCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint75 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client79 = __toESM(require_dist_cjs9(), 1);
  ListInferenceProfilesCommand = class ListInferenceProfilesCommand extends import_smithy_client79.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint75.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {}).n("BedrockClient", "ListInferenceProfilesCommand").sc(ListInferenceProfiles$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListMarketplaceModelEndpointsCommand.js
var import_middleware_endpoint76, import_smithy_client80, ListMarketplaceModelEndpointsCommand;
var init_ListMarketplaceModelEndpointsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint76 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client80 = __toESM(require_dist_cjs9(), 1);
  ListMarketplaceModelEndpointsCommand = class ListMarketplaceModelEndpointsCommand extends import_smithy_client80.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint76.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListMarketplaceModelEndpoints", {}).n("BedrockClient", "ListMarketplaceModelEndpointsCommand").sc(ListMarketplaceModelEndpoints$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListModelCopyJobsCommand.js
var import_middleware_endpoint77, import_smithy_client81, ListModelCopyJobsCommand;
var init_ListModelCopyJobsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint77 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client81 = __toESM(require_dist_cjs9(), 1);
  ListModelCopyJobsCommand = class ListModelCopyJobsCommand extends import_smithy_client81.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint77.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelCopyJobs", {}).n("BedrockClient", "ListModelCopyJobsCommand").sc(ListModelCopyJobs$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListModelCustomizationJobsCommand.js
var import_middleware_endpoint78, import_smithy_client82, ListModelCustomizationJobsCommand;
var init_ListModelCustomizationJobsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint78 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client82 = __toESM(require_dist_cjs9(), 1);
  ListModelCustomizationJobsCommand = class ListModelCustomizationJobsCommand extends import_smithy_client82.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint78.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelCustomizationJobs", {}).n("BedrockClient", "ListModelCustomizationJobsCommand").sc(ListModelCustomizationJobs$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListModelImportJobsCommand.js
var import_middleware_endpoint79, import_smithy_client83, ListModelImportJobsCommand;
var init_ListModelImportJobsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint79 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client83 = __toESM(require_dist_cjs9(), 1);
  ListModelImportJobsCommand = class ListModelImportJobsCommand extends import_smithy_client83.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint79.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelImportJobs", {}).n("BedrockClient", "ListModelImportJobsCommand").sc(ListModelImportJobs$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListModelInvocationJobsCommand.js
var import_middleware_endpoint80, import_smithy_client84, ListModelInvocationJobsCommand;
var init_ListModelInvocationJobsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint80 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client84 = __toESM(require_dist_cjs9(), 1);
  ListModelInvocationJobsCommand = class ListModelInvocationJobsCommand extends import_smithy_client84.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint80.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListModelInvocationJobs", {}).n("BedrockClient", "ListModelInvocationJobsCommand").sc(ListModelInvocationJobs$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListPromptRoutersCommand.js
var import_middleware_endpoint81, import_smithy_client85, ListPromptRoutersCommand;
var init_ListPromptRoutersCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint81 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client85 = __toESM(require_dist_cjs9(), 1);
  ListPromptRoutersCommand = class ListPromptRoutersCommand extends import_smithy_client85.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint81.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListPromptRouters", {}).n("BedrockClient", "ListPromptRoutersCommand").sc(ListPromptRouters$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListProvisionedModelThroughputsCommand.js
var import_middleware_endpoint82, import_smithy_client86, ListProvisionedModelThroughputsCommand;
var init_ListProvisionedModelThroughputsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint82 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client86 = __toESM(require_dist_cjs9(), 1);
  ListProvisionedModelThroughputsCommand = class ListProvisionedModelThroughputsCommand extends import_smithy_client86.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint82.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListProvisionedModelThroughputs", {}).n("BedrockClient", "ListProvisionedModelThroughputsCommand").sc(ListProvisionedModelThroughputs$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/ListTagsForResourceCommand.js
var import_middleware_endpoint83, import_smithy_client87, ListTagsForResourceCommand;
var init_ListTagsForResourceCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint83 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client87 = __toESM(require_dist_cjs9(), 1);
  ListTagsForResourceCommand = class ListTagsForResourceCommand extends import_smithy_client87.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint83.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "ListTagsForResource", {}).n("BedrockClient", "ListTagsForResourceCommand").sc(ListTagsForResource$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/PutEnforcedGuardrailConfigurationCommand.js
var import_middleware_endpoint84, import_smithy_client88, PutEnforcedGuardrailConfigurationCommand;
var init_PutEnforcedGuardrailConfigurationCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint84 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client88 = __toESM(require_dist_cjs9(), 1);
  PutEnforcedGuardrailConfigurationCommand = class PutEnforcedGuardrailConfigurationCommand extends import_smithy_client88.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint84.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "PutEnforcedGuardrailConfiguration", {}).n("BedrockClient", "PutEnforcedGuardrailConfigurationCommand").sc(PutEnforcedGuardrailConfiguration$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/PutModelInvocationLoggingConfigurationCommand.js
var import_middleware_endpoint85, import_smithy_client89, PutModelInvocationLoggingConfigurationCommand;
var init_PutModelInvocationLoggingConfigurationCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint85 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client89 = __toESM(require_dist_cjs9(), 1);
  PutModelInvocationLoggingConfigurationCommand = class PutModelInvocationLoggingConfigurationCommand extends import_smithy_client89.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint85.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "PutModelInvocationLoggingConfiguration", {}).n("BedrockClient", "PutModelInvocationLoggingConfigurationCommand").sc(PutModelInvocationLoggingConfiguration$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/PutResourcePolicyCommand.js
var import_middleware_endpoint86, import_smithy_client90, PutResourcePolicyCommand;
var init_PutResourcePolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint86 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client90 = __toESM(require_dist_cjs9(), 1);
  PutResourcePolicyCommand = class PutResourcePolicyCommand extends import_smithy_client90.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint86.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "PutResourcePolicy", {}).n("BedrockClient", "PutResourcePolicyCommand").sc(PutResourcePolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/PutUseCaseForModelAccessCommand.js
var import_middleware_endpoint87, import_smithy_client91, PutUseCaseForModelAccessCommand;
var init_PutUseCaseForModelAccessCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint87 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client91 = __toESM(require_dist_cjs9(), 1);
  PutUseCaseForModelAccessCommand = class PutUseCaseForModelAccessCommand extends import_smithy_client91.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint87.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "PutUseCaseForModelAccess", {}).n("BedrockClient", "PutUseCaseForModelAccessCommand").sc(PutUseCaseForModelAccess$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/RegisterMarketplaceModelEndpointCommand.js
var import_middleware_endpoint88, import_smithy_client92, RegisterMarketplaceModelEndpointCommand;
var init_RegisterMarketplaceModelEndpointCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint88 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client92 = __toESM(require_dist_cjs9(), 1);
  RegisterMarketplaceModelEndpointCommand = class RegisterMarketplaceModelEndpointCommand extends import_smithy_client92.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint88.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "RegisterMarketplaceModelEndpoint", {}).n("BedrockClient", "RegisterMarketplaceModelEndpointCommand").sc(RegisterMarketplaceModelEndpoint$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/StartAutomatedReasoningPolicyBuildWorkflowCommand.js
var import_middleware_endpoint89, import_smithy_client93, StartAutomatedReasoningPolicyBuildWorkflowCommand;
var init_StartAutomatedReasoningPolicyBuildWorkflowCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint89 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client93 = __toESM(require_dist_cjs9(), 1);
  StartAutomatedReasoningPolicyBuildWorkflowCommand = class StartAutomatedReasoningPolicyBuildWorkflowCommand extends import_smithy_client93.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint89.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StartAutomatedReasoningPolicyBuildWorkflow", {}).n("BedrockClient", "StartAutomatedReasoningPolicyBuildWorkflowCommand").sc(StartAutomatedReasoningPolicyBuildWorkflow$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/StartAutomatedReasoningPolicyTestWorkflowCommand.js
var import_middleware_endpoint90, import_smithy_client94, StartAutomatedReasoningPolicyTestWorkflowCommand;
var init_StartAutomatedReasoningPolicyTestWorkflowCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint90 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client94 = __toESM(require_dist_cjs9(), 1);
  StartAutomatedReasoningPolicyTestWorkflowCommand = class StartAutomatedReasoningPolicyTestWorkflowCommand extends import_smithy_client94.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint90.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StartAutomatedReasoningPolicyTestWorkflow", {}).n("BedrockClient", "StartAutomatedReasoningPolicyTestWorkflowCommand").sc(StartAutomatedReasoningPolicyTestWorkflow$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/StopEvaluationJobCommand.js
var import_middleware_endpoint91, import_smithy_client95, StopEvaluationJobCommand;
var init_StopEvaluationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint91 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client95 = __toESM(require_dist_cjs9(), 1);
  StopEvaluationJobCommand = class StopEvaluationJobCommand extends import_smithy_client95.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint91.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StopEvaluationJob", {}).n("BedrockClient", "StopEvaluationJobCommand").sc(StopEvaluationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/StopModelCustomizationJobCommand.js
var import_middleware_endpoint92, import_smithy_client96, StopModelCustomizationJobCommand;
var init_StopModelCustomizationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint92 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client96 = __toESM(require_dist_cjs9(), 1);
  StopModelCustomizationJobCommand = class StopModelCustomizationJobCommand extends import_smithy_client96.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint92.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StopModelCustomizationJob", {}).n("BedrockClient", "StopModelCustomizationJobCommand").sc(StopModelCustomizationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/StopModelInvocationJobCommand.js
var import_middleware_endpoint93, import_smithy_client97, StopModelInvocationJobCommand;
var init_StopModelInvocationJobCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint93 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client97 = __toESM(require_dist_cjs9(), 1);
  StopModelInvocationJobCommand = class StopModelInvocationJobCommand extends import_smithy_client97.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint93.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "StopModelInvocationJob", {}).n("BedrockClient", "StopModelInvocationJobCommand").sc(StopModelInvocationJob$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/TagResourceCommand.js
var import_middleware_endpoint94, import_smithy_client98, TagResourceCommand;
var init_TagResourceCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint94 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client98 = __toESM(require_dist_cjs9(), 1);
  TagResourceCommand = class TagResourceCommand extends import_smithy_client98.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint94.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "TagResource", {}).n("BedrockClient", "TagResourceCommand").sc(TagResource$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UntagResourceCommand.js
var import_middleware_endpoint95, import_smithy_client99, UntagResourceCommand;
var init_UntagResourceCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint95 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client99 = __toESM(require_dist_cjs9(), 1);
  UntagResourceCommand = class UntagResourceCommand extends import_smithy_client99.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint95.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UntagResource", {}).n("BedrockClient", "UntagResourceCommand").sc(UntagResource$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateAutomatedReasoningPolicyAnnotationsCommand.js
var import_middleware_endpoint96, import_smithy_client100, UpdateAutomatedReasoningPolicyAnnotationsCommand;
var init_UpdateAutomatedReasoningPolicyAnnotationsCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint96 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client100 = __toESM(require_dist_cjs9(), 1);
  UpdateAutomatedReasoningPolicyAnnotationsCommand = class UpdateAutomatedReasoningPolicyAnnotationsCommand extends import_smithy_client100.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint96.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicyAnnotations", {}).n("BedrockClient", "UpdateAutomatedReasoningPolicyAnnotationsCommand").sc(UpdateAutomatedReasoningPolicyAnnotations$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateAutomatedReasoningPolicyCommand.js
var import_middleware_endpoint97, import_smithy_client101, UpdateAutomatedReasoningPolicyCommand;
var init_UpdateAutomatedReasoningPolicyCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint97 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client101 = __toESM(require_dist_cjs9(), 1);
  UpdateAutomatedReasoningPolicyCommand = class UpdateAutomatedReasoningPolicyCommand extends import_smithy_client101.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint97.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicy", {}).n("BedrockClient", "UpdateAutomatedReasoningPolicyCommand").sc(UpdateAutomatedReasoningPolicy$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateAutomatedReasoningPolicyTestCaseCommand.js
var import_middleware_endpoint98, import_smithy_client102, UpdateAutomatedReasoningPolicyTestCaseCommand;
var init_UpdateAutomatedReasoningPolicyTestCaseCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint98 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client102 = __toESM(require_dist_cjs9(), 1);
  UpdateAutomatedReasoningPolicyTestCaseCommand = class UpdateAutomatedReasoningPolicyTestCaseCommand extends import_smithy_client102.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint98.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicyTestCase", {}).n("BedrockClient", "UpdateAutomatedReasoningPolicyTestCaseCommand").sc(UpdateAutomatedReasoningPolicyTestCase$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateCustomModelDeploymentCommand.js
var import_middleware_endpoint99, import_smithy_client103, UpdateCustomModelDeploymentCommand;
var init_UpdateCustomModelDeploymentCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint99 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client103 = __toESM(require_dist_cjs9(), 1);
  UpdateCustomModelDeploymentCommand = class UpdateCustomModelDeploymentCommand extends import_smithy_client103.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint99.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateCustomModelDeployment", {}).n("BedrockClient", "UpdateCustomModelDeploymentCommand").sc(UpdateCustomModelDeployment$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateGuardrailCommand.js
var import_middleware_endpoint100, import_smithy_client104, UpdateGuardrailCommand;
var init_UpdateGuardrailCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint100 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client104 = __toESM(require_dist_cjs9(), 1);
  UpdateGuardrailCommand = class UpdateGuardrailCommand extends import_smithy_client104.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint100.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateGuardrail", {}).n("BedrockClient", "UpdateGuardrailCommand").sc(UpdateGuardrail$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateMarketplaceModelEndpointCommand.js
var import_middleware_endpoint101, import_smithy_client105, UpdateMarketplaceModelEndpointCommand;
var init_UpdateMarketplaceModelEndpointCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint101 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client105 = __toESM(require_dist_cjs9(), 1);
  UpdateMarketplaceModelEndpointCommand = class UpdateMarketplaceModelEndpointCommand extends import_smithy_client105.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint101.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateMarketplaceModelEndpoint", {}).n("BedrockClient", "UpdateMarketplaceModelEndpointCommand").sc(UpdateMarketplaceModelEndpoint$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/UpdateProvisionedModelThroughputCommand.js
var import_middleware_endpoint102, import_smithy_client106, UpdateProvisionedModelThroughputCommand;
var init_UpdateProvisionedModelThroughputCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint102 = __toESM(require_dist_cjs19(), 1);
  import_smithy_client106 = __toESM(require_dist_cjs9(), 1);
  UpdateProvisionedModelThroughputCommand = class UpdateProvisionedModelThroughputCommand extends import_smithy_client106.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint102.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockControlPlaneService", "UpdateProvisionedModelThroughput", {}).n("BedrockClient", "UpdateProvisionedModelThroughputCommand").sc(UpdateProvisionedModelThroughput$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListAutomatedReasoningPoliciesPaginator.js
var import_core5, paginateListAutomatedReasoningPolicies;
var init_ListAutomatedReasoningPoliciesPaginator = __esm(() => {
  init_BedrockClient();
  init_ListAutomatedReasoningPoliciesCommand();
  import_core5 = __toESM(require_dist_cjs10(), 1);
  paginateListAutomatedReasoningPolicies = import_core5.createPaginator(BedrockClient, ListAutomatedReasoningPoliciesCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListAutomatedReasoningPolicyBuildWorkflowsPaginator.js
var import_core6, paginateListAutomatedReasoningPolicyBuildWorkflows;
var init_ListAutomatedReasoningPolicyBuildWorkflowsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListAutomatedReasoningPolicyBuildWorkflowsCommand();
  import_core6 = __toESM(require_dist_cjs10(), 1);
  paginateListAutomatedReasoningPolicyBuildWorkflows = import_core6.createPaginator(BedrockClient, ListAutomatedReasoningPolicyBuildWorkflowsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListAutomatedReasoningPolicyTestCasesPaginator.js
var import_core7, paginateListAutomatedReasoningPolicyTestCases;
var init_ListAutomatedReasoningPolicyTestCasesPaginator = __esm(() => {
  init_BedrockClient();
  init_ListAutomatedReasoningPolicyTestCasesCommand();
  import_core7 = __toESM(require_dist_cjs10(), 1);
  paginateListAutomatedReasoningPolicyTestCases = import_core7.createPaginator(BedrockClient, ListAutomatedReasoningPolicyTestCasesCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListAutomatedReasoningPolicyTestResultsPaginator.js
var import_core8, paginateListAutomatedReasoningPolicyTestResults;
var init_ListAutomatedReasoningPolicyTestResultsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListAutomatedReasoningPolicyTestResultsCommand();
  import_core8 = __toESM(require_dist_cjs10(), 1);
  paginateListAutomatedReasoningPolicyTestResults = import_core8.createPaginator(BedrockClient, ListAutomatedReasoningPolicyTestResultsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListCustomModelDeploymentsPaginator.js
var import_core9, paginateListCustomModelDeployments;
var init_ListCustomModelDeploymentsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListCustomModelDeploymentsCommand();
  import_core9 = __toESM(require_dist_cjs10(), 1);
  paginateListCustomModelDeployments = import_core9.createPaginator(BedrockClient, ListCustomModelDeploymentsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListCustomModelsPaginator.js
var import_core10, paginateListCustomModels;
var init_ListCustomModelsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListCustomModelsCommand();
  import_core10 = __toESM(require_dist_cjs10(), 1);
  paginateListCustomModels = import_core10.createPaginator(BedrockClient, ListCustomModelsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListEnforcedGuardrailsConfigurationPaginator.js
var import_core11, paginateListEnforcedGuardrailsConfiguration;
var init_ListEnforcedGuardrailsConfigurationPaginator = __esm(() => {
  init_BedrockClient();
  init_ListEnforcedGuardrailsConfigurationCommand();
  import_core11 = __toESM(require_dist_cjs10(), 1);
  paginateListEnforcedGuardrailsConfiguration = import_core11.createPaginator(BedrockClient, ListEnforcedGuardrailsConfigurationCommand, "nextToken", "nextToken", "");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListEvaluationJobsPaginator.js
var import_core12, paginateListEvaluationJobs;
var init_ListEvaluationJobsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListEvaluationJobsCommand();
  import_core12 = __toESM(require_dist_cjs10(), 1);
  paginateListEvaluationJobs = import_core12.createPaginator(BedrockClient, ListEvaluationJobsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListGuardrailsPaginator.js
var import_core13, paginateListGuardrails;
var init_ListGuardrailsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListGuardrailsCommand();
  import_core13 = __toESM(require_dist_cjs10(), 1);
  paginateListGuardrails = import_core13.createPaginator(BedrockClient, ListGuardrailsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListImportedModelsPaginator.js
var import_core14, paginateListImportedModels;
var init_ListImportedModelsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListImportedModelsCommand();
  import_core14 = __toESM(require_dist_cjs10(), 1);
  paginateListImportedModels = import_core14.createPaginator(BedrockClient, ListImportedModelsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListInferenceProfilesPaginator.js
var import_core15, paginateListInferenceProfiles;
var init_ListInferenceProfilesPaginator = __esm(() => {
  init_BedrockClient();
  init_ListInferenceProfilesCommand();
  import_core15 = __toESM(require_dist_cjs10(), 1);
  paginateListInferenceProfiles = import_core15.createPaginator(BedrockClient, ListInferenceProfilesCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListMarketplaceModelEndpointsPaginator.js
var import_core16, paginateListMarketplaceModelEndpoints;
var init_ListMarketplaceModelEndpointsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListMarketplaceModelEndpointsCommand();
  import_core16 = __toESM(require_dist_cjs10(), 1);
  paginateListMarketplaceModelEndpoints = import_core16.createPaginator(BedrockClient, ListMarketplaceModelEndpointsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListModelCopyJobsPaginator.js
var import_core17, paginateListModelCopyJobs;
var init_ListModelCopyJobsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListModelCopyJobsCommand();
  import_core17 = __toESM(require_dist_cjs10(), 1);
  paginateListModelCopyJobs = import_core17.createPaginator(BedrockClient, ListModelCopyJobsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListModelCustomizationJobsPaginator.js
var import_core18, paginateListModelCustomizationJobs;
var init_ListModelCustomizationJobsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListModelCustomizationJobsCommand();
  import_core18 = __toESM(require_dist_cjs10(), 1);
  paginateListModelCustomizationJobs = import_core18.createPaginator(BedrockClient, ListModelCustomizationJobsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListModelImportJobsPaginator.js
var import_core19, paginateListModelImportJobs;
var init_ListModelImportJobsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListModelImportJobsCommand();
  import_core19 = __toESM(require_dist_cjs10(), 1);
  paginateListModelImportJobs = import_core19.createPaginator(BedrockClient, ListModelImportJobsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListModelInvocationJobsPaginator.js
var import_core20, paginateListModelInvocationJobs;
var init_ListModelInvocationJobsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListModelInvocationJobsCommand();
  import_core20 = __toESM(require_dist_cjs10(), 1);
  paginateListModelInvocationJobs = import_core20.createPaginator(BedrockClient, ListModelInvocationJobsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListPromptRoutersPaginator.js
var import_core21, paginateListPromptRouters;
var init_ListPromptRoutersPaginator = __esm(() => {
  init_BedrockClient();
  init_ListPromptRoutersCommand();
  import_core21 = __toESM(require_dist_cjs10(), 1);
  paginateListPromptRouters = import_core21.createPaginator(BedrockClient, ListPromptRoutersCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/ListProvisionedModelThroughputsPaginator.js
var import_core22, paginateListProvisionedModelThroughputs;
var init_ListProvisionedModelThroughputsPaginator = __esm(() => {
  init_BedrockClient();
  init_ListProvisionedModelThroughputsCommand();
  import_core22 = __toESM(require_dist_cjs10(), 1);
  paginateListProvisionedModelThroughputs = import_core22.createPaginator(BedrockClient, ListProvisionedModelThroughputsCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/Bedrock.js
var import_smithy_client107, commands, paginators, Bedrock;
var init_Bedrock = __esm(() => {
  init_BedrockClient();
  init_BatchDeleteEvaluationJobCommand();
  init_CancelAutomatedReasoningPolicyBuildWorkflowCommand();
  init_CreateAutomatedReasoningPolicyCommand();
  init_CreateAutomatedReasoningPolicyTestCaseCommand();
  init_CreateAutomatedReasoningPolicyVersionCommand();
  init_CreateCustomModelCommand();
  init_CreateCustomModelDeploymentCommand();
  init_CreateEvaluationJobCommand();
  init_CreateFoundationModelAgreementCommand();
  init_CreateGuardrailCommand();
  init_CreateGuardrailVersionCommand();
  init_CreateInferenceProfileCommand();
  init_CreateMarketplaceModelEndpointCommand();
  init_CreateModelCopyJobCommand();
  init_CreateModelCustomizationJobCommand();
  init_CreateModelImportJobCommand();
  init_CreateModelInvocationJobCommand();
  init_CreatePromptRouterCommand();
  init_CreateProvisionedModelThroughputCommand();
  init_DeleteAutomatedReasoningPolicyBuildWorkflowCommand();
  init_DeleteAutomatedReasoningPolicyCommand();
  init_DeleteAutomatedReasoningPolicyTestCaseCommand();
  init_DeleteCustomModelCommand();
  init_DeleteCustomModelDeploymentCommand();
  init_DeleteEnforcedGuardrailConfigurationCommand();
  init_DeleteFoundationModelAgreementCommand();
  init_DeleteGuardrailCommand();
  init_DeleteImportedModelCommand();
  init_DeleteInferenceProfileCommand();
  init_DeleteMarketplaceModelEndpointCommand();
  init_DeleteModelInvocationLoggingConfigurationCommand();
  init_DeletePromptRouterCommand();
  init_DeleteProvisionedModelThroughputCommand();
  init_DeleteResourcePolicyCommand();
  init_DeregisterMarketplaceModelEndpointCommand();
  init_ExportAutomatedReasoningPolicyVersionCommand();
  init_GetAutomatedReasoningPolicyAnnotationsCommand();
  init_GetAutomatedReasoningPolicyBuildWorkflowCommand();
  init_GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand();
  init_GetAutomatedReasoningPolicyCommand();
  init_GetAutomatedReasoningPolicyNextScenarioCommand();
  init_GetAutomatedReasoningPolicyTestCaseCommand();
  init_GetAutomatedReasoningPolicyTestResultCommand();
  init_GetCustomModelCommand();
  init_GetCustomModelDeploymentCommand();
  init_GetEvaluationJobCommand();
  init_GetFoundationModelAvailabilityCommand();
  init_GetFoundationModelCommand();
  init_GetGuardrailCommand();
  init_GetImportedModelCommand();
  init_GetInferenceProfileCommand();
  init_GetMarketplaceModelEndpointCommand();
  init_GetModelCopyJobCommand();
  init_GetModelCustomizationJobCommand();
  init_GetModelImportJobCommand();
  init_GetModelInvocationJobCommand();
  init_GetModelInvocationLoggingConfigurationCommand();
  init_GetPromptRouterCommand();
  init_GetProvisionedModelThroughputCommand();
  init_GetResourcePolicyCommand();
  init_GetUseCaseForModelAccessCommand();
  init_ListAutomatedReasoningPoliciesCommand();
  init_ListAutomatedReasoningPolicyBuildWorkflowsCommand();
  init_ListAutomatedReasoningPolicyTestCasesCommand();
  init_ListAutomatedReasoningPolicyTestResultsCommand();
  init_ListCustomModelDeploymentsCommand();
  init_ListCustomModelsCommand();
  init_ListEnforcedGuardrailsConfigurationCommand();
  init_ListEvaluationJobsCommand();
  init_ListFoundationModelAgreementOffersCommand();
  init_ListFoundationModelsCommand();
  init_ListGuardrailsCommand();
  init_ListImportedModelsCommand();
  init_ListInferenceProfilesCommand();
  init_ListMarketplaceModelEndpointsCommand();
  init_ListModelCopyJobsCommand();
  init_ListModelCustomizationJobsCommand();
  init_ListModelImportJobsCommand();
  init_ListModelInvocationJobsCommand();
  init_ListPromptRoutersCommand();
  init_ListProvisionedModelThroughputsCommand();
  init_ListTagsForResourceCommand();
  init_PutEnforcedGuardrailConfigurationCommand();
  init_PutModelInvocationLoggingConfigurationCommand();
  init_PutResourcePolicyCommand();
  init_PutUseCaseForModelAccessCommand();
  init_RegisterMarketplaceModelEndpointCommand();
  init_StartAutomatedReasoningPolicyBuildWorkflowCommand();
  init_StartAutomatedReasoningPolicyTestWorkflowCommand();
  init_StopEvaluationJobCommand();
  init_StopModelCustomizationJobCommand();
  init_StopModelInvocationJobCommand();
  init_TagResourceCommand();
  init_UntagResourceCommand();
  init_UpdateAutomatedReasoningPolicyAnnotationsCommand();
  init_UpdateAutomatedReasoningPolicyCommand();
  init_UpdateAutomatedReasoningPolicyTestCaseCommand();
  init_UpdateCustomModelDeploymentCommand();
  init_UpdateGuardrailCommand();
  init_UpdateMarketplaceModelEndpointCommand();
  init_UpdateProvisionedModelThroughputCommand();
  init_ListAutomatedReasoningPoliciesPaginator();
  init_ListAutomatedReasoningPolicyBuildWorkflowsPaginator();
  init_ListAutomatedReasoningPolicyTestCasesPaginator();
  init_ListAutomatedReasoningPolicyTestResultsPaginator();
  init_ListCustomModelDeploymentsPaginator();
  init_ListCustomModelsPaginator();
  init_ListEnforcedGuardrailsConfigurationPaginator();
  init_ListEvaluationJobsPaginator();
  init_ListGuardrailsPaginator();
  init_ListImportedModelsPaginator();
  init_ListInferenceProfilesPaginator();
  init_ListMarketplaceModelEndpointsPaginator();
  init_ListModelCopyJobsPaginator();
  init_ListModelCustomizationJobsPaginator();
  init_ListModelImportJobsPaginator();
  init_ListModelInvocationJobsPaginator();
  init_ListPromptRoutersPaginator();
  init_ListProvisionedModelThroughputsPaginator();
  import_smithy_client107 = __toESM(require_dist_cjs9(), 1);
  commands = {
    BatchDeleteEvaluationJobCommand,
    CancelAutomatedReasoningPolicyBuildWorkflowCommand,
    CreateAutomatedReasoningPolicyCommand,
    CreateAutomatedReasoningPolicyTestCaseCommand,
    CreateAutomatedReasoningPolicyVersionCommand,
    CreateCustomModelCommand,
    CreateCustomModelDeploymentCommand,
    CreateEvaluationJobCommand,
    CreateFoundationModelAgreementCommand,
    CreateGuardrailCommand,
    CreateGuardrailVersionCommand,
    CreateInferenceProfileCommand,
    CreateMarketplaceModelEndpointCommand,
    CreateModelCopyJobCommand,
    CreateModelCustomizationJobCommand,
    CreateModelImportJobCommand,
    CreateModelInvocationJobCommand,
    CreatePromptRouterCommand,
    CreateProvisionedModelThroughputCommand,
    DeleteAutomatedReasoningPolicyCommand,
    DeleteAutomatedReasoningPolicyBuildWorkflowCommand,
    DeleteAutomatedReasoningPolicyTestCaseCommand,
    DeleteCustomModelCommand,
    DeleteCustomModelDeploymentCommand,
    DeleteEnforcedGuardrailConfigurationCommand,
    DeleteFoundationModelAgreementCommand,
    DeleteGuardrailCommand,
    DeleteImportedModelCommand,
    DeleteInferenceProfileCommand,
    DeleteMarketplaceModelEndpointCommand,
    DeleteModelInvocationLoggingConfigurationCommand,
    DeletePromptRouterCommand,
    DeleteProvisionedModelThroughputCommand,
    DeleteResourcePolicyCommand,
    DeregisterMarketplaceModelEndpointCommand,
    ExportAutomatedReasoningPolicyVersionCommand,
    GetAutomatedReasoningPolicyCommand,
    GetAutomatedReasoningPolicyAnnotationsCommand,
    GetAutomatedReasoningPolicyBuildWorkflowCommand,
    GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand,
    GetAutomatedReasoningPolicyNextScenarioCommand,
    GetAutomatedReasoningPolicyTestCaseCommand,
    GetAutomatedReasoningPolicyTestResultCommand,
    GetCustomModelCommand,
    GetCustomModelDeploymentCommand,
    GetEvaluationJobCommand,
    GetFoundationModelCommand,
    GetFoundationModelAvailabilityCommand,
    GetGuardrailCommand,
    GetImportedModelCommand,
    GetInferenceProfileCommand,
    GetMarketplaceModelEndpointCommand,
    GetModelCopyJobCommand,
    GetModelCustomizationJobCommand,
    GetModelImportJobCommand,
    GetModelInvocationJobCommand,
    GetModelInvocationLoggingConfigurationCommand,
    GetPromptRouterCommand,
    GetProvisionedModelThroughputCommand,
    GetResourcePolicyCommand,
    GetUseCaseForModelAccessCommand,
    ListAutomatedReasoningPoliciesCommand,
    ListAutomatedReasoningPolicyBuildWorkflowsCommand,
    ListAutomatedReasoningPolicyTestCasesCommand,
    ListAutomatedReasoningPolicyTestResultsCommand,
    ListCustomModelDeploymentsCommand,
    ListCustomModelsCommand,
    ListEnforcedGuardrailsConfigurationCommand,
    ListEvaluationJobsCommand,
    ListFoundationModelAgreementOffersCommand,
    ListFoundationModelsCommand,
    ListGuardrailsCommand,
    ListImportedModelsCommand,
    ListInferenceProfilesCommand,
    ListMarketplaceModelEndpointsCommand,
    ListModelCopyJobsCommand,
    ListModelCustomizationJobsCommand,
    ListModelImportJobsCommand,
    ListModelInvocationJobsCommand,
    ListPromptRoutersCommand,
    ListProvisionedModelThroughputsCommand,
    ListTagsForResourceCommand,
    PutEnforcedGuardrailConfigurationCommand,
    PutModelInvocationLoggingConfigurationCommand,
    PutResourcePolicyCommand,
    PutUseCaseForModelAccessCommand,
    RegisterMarketplaceModelEndpointCommand,
    StartAutomatedReasoningPolicyBuildWorkflowCommand,
    StartAutomatedReasoningPolicyTestWorkflowCommand,
    StopEvaluationJobCommand,
    StopModelCustomizationJobCommand,
    StopModelInvocationJobCommand,
    TagResourceCommand,
    UntagResourceCommand,
    UpdateAutomatedReasoningPolicyCommand,
    UpdateAutomatedReasoningPolicyAnnotationsCommand,
    UpdateAutomatedReasoningPolicyTestCaseCommand,
    UpdateCustomModelDeploymentCommand,
    UpdateGuardrailCommand,
    UpdateMarketplaceModelEndpointCommand,
    UpdateProvisionedModelThroughputCommand
  };
  paginators = {
    paginateListAutomatedReasoningPolicies,
    paginateListAutomatedReasoningPolicyBuildWorkflows,
    paginateListAutomatedReasoningPolicyTestCases,
    paginateListAutomatedReasoningPolicyTestResults,
    paginateListCustomModelDeployments,
    paginateListCustomModels,
    paginateListEnforcedGuardrailsConfiguration,
    paginateListEvaluationJobs,
    paginateListGuardrails,
    paginateListImportedModels,
    paginateListInferenceProfiles,
    paginateListMarketplaceModelEndpoints,
    paginateListModelCopyJobs,
    paginateListModelCustomizationJobs,
    paginateListModelImportJobs,
    paginateListModelInvocationJobs,
    paginateListPromptRouters,
    paginateListProvisionedModelThroughputs
  };
  Bedrock = class Bedrock extends BedrockClient {
  };
  import_smithy_client107.createAggregatedClient(commands, Bedrock, { paginators });
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/commands/index.js
var init_commands = __esm(() => {
  init_BatchDeleteEvaluationJobCommand();
  init_CancelAutomatedReasoningPolicyBuildWorkflowCommand();
  init_CreateAutomatedReasoningPolicyCommand();
  init_CreateAutomatedReasoningPolicyTestCaseCommand();
  init_CreateAutomatedReasoningPolicyVersionCommand();
  init_CreateCustomModelCommand();
  init_CreateCustomModelDeploymentCommand();
  init_CreateEvaluationJobCommand();
  init_CreateFoundationModelAgreementCommand();
  init_CreateGuardrailCommand();
  init_CreateGuardrailVersionCommand();
  init_CreateInferenceProfileCommand();
  init_CreateMarketplaceModelEndpointCommand();
  init_CreateModelCopyJobCommand();
  init_CreateModelCustomizationJobCommand();
  init_CreateModelImportJobCommand();
  init_CreateModelInvocationJobCommand();
  init_CreatePromptRouterCommand();
  init_CreateProvisionedModelThroughputCommand();
  init_DeleteAutomatedReasoningPolicyBuildWorkflowCommand();
  init_DeleteAutomatedReasoningPolicyCommand();
  init_DeleteAutomatedReasoningPolicyTestCaseCommand();
  init_DeleteCustomModelCommand();
  init_DeleteCustomModelDeploymentCommand();
  init_DeleteEnforcedGuardrailConfigurationCommand();
  init_DeleteFoundationModelAgreementCommand();
  init_DeleteGuardrailCommand();
  init_DeleteImportedModelCommand();
  init_DeleteInferenceProfileCommand();
  init_DeleteMarketplaceModelEndpointCommand();
  init_DeleteModelInvocationLoggingConfigurationCommand();
  init_DeletePromptRouterCommand();
  init_DeleteProvisionedModelThroughputCommand();
  init_DeleteResourcePolicyCommand();
  init_DeregisterMarketplaceModelEndpointCommand();
  init_ExportAutomatedReasoningPolicyVersionCommand();
  init_GetAutomatedReasoningPolicyAnnotationsCommand();
  init_GetAutomatedReasoningPolicyBuildWorkflowCommand();
  init_GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand();
  init_GetAutomatedReasoningPolicyCommand();
  init_GetAutomatedReasoningPolicyNextScenarioCommand();
  init_GetAutomatedReasoningPolicyTestCaseCommand();
  init_GetAutomatedReasoningPolicyTestResultCommand();
  init_GetCustomModelCommand();
  init_GetCustomModelDeploymentCommand();
  init_GetEvaluationJobCommand();
  init_GetFoundationModelAvailabilityCommand();
  init_GetFoundationModelCommand();
  init_GetGuardrailCommand();
  init_GetImportedModelCommand();
  init_GetInferenceProfileCommand();
  init_GetMarketplaceModelEndpointCommand();
  init_GetModelCopyJobCommand();
  init_GetModelCustomizationJobCommand();
  init_GetModelImportJobCommand();
  init_GetModelInvocationJobCommand();
  init_GetModelInvocationLoggingConfigurationCommand();
  init_GetPromptRouterCommand();
  init_GetProvisionedModelThroughputCommand();
  init_GetResourcePolicyCommand();
  init_GetUseCaseForModelAccessCommand();
  init_ListAutomatedReasoningPoliciesCommand();
  init_ListAutomatedReasoningPolicyBuildWorkflowsCommand();
  init_ListAutomatedReasoningPolicyTestCasesCommand();
  init_ListAutomatedReasoningPolicyTestResultsCommand();
  init_ListCustomModelDeploymentsCommand();
  init_ListCustomModelsCommand();
  init_ListEnforcedGuardrailsConfigurationCommand();
  init_ListEvaluationJobsCommand();
  init_ListFoundationModelAgreementOffersCommand();
  init_ListFoundationModelsCommand();
  init_ListGuardrailsCommand();
  init_ListImportedModelsCommand();
  init_ListInferenceProfilesCommand();
  init_ListMarketplaceModelEndpointsCommand();
  init_ListModelCopyJobsCommand();
  init_ListModelCustomizationJobsCommand();
  init_ListModelImportJobsCommand();
  init_ListModelInvocationJobsCommand();
  init_ListPromptRoutersCommand();
  init_ListProvisionedModelThroughputsCommand();
  init_ListTagsForResourceCommand();
  init_PutEnforcedGuardrailConfigurationCommand();
  init_PutModelInvocationLoggingConfigurationCommand();
  init_PutResourcePolicyCommand();
  init_PutUseCaseForModelAccessCommand();
  init_RegisterMarketplaceModelEndpointCommand();
  init_StartAutomatedReasoningPolicyBuildWorkflowCommand();
  init_StartAutomatedReasoningPolicyTestWorkflowCommand();
  init_StopEvaluationJobCommand();
  init_StopModelCustomizationJobCommand();
  init_StopModelInvocationJobCommand();
  init_TagResourceCommand();
  init_UntagResourceCommand();
  init_UpdateAutomatedReasoningPolicyAnnotationsCommand();
  init_UpdateAutomatedReasoningPolicyCommand();
  init_UpdateAutomatedReasoningPolicyTestCaseCommand();
  init_UpdateCustomModelDeploymentCommand();
  init_UpdateGuardrailCommand();
  init_UpdateMarketplaceModelEndpointCommand();
  init_UpdateProvisionedModelThroughputCommand();
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/Interfaces.js
var init_Interfaces = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/pagination/index.js
var init_pagination = __esm(() => {
  init_Interfaces();
  init_ListAutomatedReasoningPoliciesPaginator();
  init_ListAutomatedReasoningPolicyBuildWorkflowsPaginator();
  init_ListAutomatedReasoningPolicyTestCasesPaginator();
  init_ListAutomatedReasoningPolicyTestResultsPaginator();
  init_ListCustomModelDeploymentsPaginator();
  init_ListCustomModelsPaginator();
  init_ListEnforcedGuardrailsConfigurationPaginator();
  init_ListEvaluationJobsPaginator();
  init_ListGuardrailsPaginator();
  init_ListImportedModelsPaginator();
  init_ListInferenceProfilesPaginator();
  init_ListMarketplaceModelEndpointsPaginator();
  init_ListModelCopyJobsPaginator();
  init_ListModelCustomizationJobsPaginator();
  init_ListModelImportJobsPaginator();
  init_ListModelInvocationJobsPaginator();
  init_ListPromptRoutersPaginator();
  init_ListProvisionedModelThroughputsPaginator();
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/models/enums.js
var SelectiveGuardingMode, InputTags, ConfigurationOwner, AgreementStatus, AutomatedReasoningCheckResult, AutomatedReasoningPolicyBuildWorkflowType, AutomatedReasoningPolicyBuildDocumentContentType, AutomatedReasoningPolicyBuildWorkflowStatus, AutomatedReasoningPolicyBuildResultAssetType, AutomatedReasoningPolicyBuildMessageType, AutomatedReasoningPolicyAnnotationStatus, AutomatedReasoningCheckLogicWarningType, AutomatedReasoningPolicyTestRunResult, AutomatedReasoningPolicyTestRunStatus, Status, CustomModelDeploymentStatus, CustomModelDeploymentUpdateStatus, SortModelsBy, SortOrder, ReasoningEffort, CustomizationType, ModelStatus, EvaluationJobStatus, ApplicationType, EvaluationTaskType, PerformanceConfigLatency, ExternalSourceType, QueryTransformationType, AttributeType, SearchType, RerankingMetadataSelectionMode, VectorSearchRerankingConfigurationType, RetrieveAndGenerateType, EvaluationJobType, SortJobsBy, GuardrailContentFilterAction2, GuardrailModality2, GuardrailFilterStrength, GuardrailContentFilterType, GuardrailContentFiltersTierName2, GuardrailContextualGroundingAction2, GuardrailContextualGroundingFilterType, GuardrailSensitiveInformationAction, GuardrailPiiEntityType, GuardrailTopicsTierName2, GuardrailTopicAction2, GuardrailTopicType, GuardrailWordAction2, GuardrailManagedWordsType, GuardrailStatus, InferenceProfileStatus, InferenceProfileType, ModelCopyJobStatus, ModelImportJobStatus, S3InputFormat, ModelInvocationType, ModelInvocationJobStatus, ModelCustomization, InferenceType, ModelModality, FoundationModelLifecycleStatus, PromptRouterStatus, PromptRouterType, CommitmentDuration, ProvisionedModelStatus, SortByProvisionedModels, AuthorizationStatus, EntitlementAvailability, RegionAvailability, OfferType, ModelCustomizationJobStatus, JobStatusDetails, FineTuningJobStatus;
var init_enums = __esm(() => {
  SelectiveGuardingMode = {
    COMPREHENSIVE: "COMPREHENSIVE",
    SELECTIVE: "SELECTIVE"
  };
  InputTags = {
    HONOR: "HONOR",
    IGNORE: "IGNORE"
  };
  ConfigurationOwner = {
    ACCOUNT: "ACCOUNT"
  };
  AgreementStatus = {
    AVAILABLE: "AVAILABLE",
    ERROR: "ERROR",
    NOT_AVAILABLE: "NOT_AVAILABLE",
    PENDING: "PENDING"
  };
  AutomatedReasoningCheckResult = {
    IMPOSSIBLE: "IMPOSSIBLE",
    INVALID: "INVALID",
    NO_TRANSLATION: "NO_TRANSLATION",
    SATISFIABLE: "SATISFIABLE",
    TOO_COMPLEX: "TOO_COMPLEX",
    TRANSLATION_AMBIGUOUS: "TRANSLATION_AMBIGUOUS",
    VALID: "VALID"
  };
  AutomatedReasoningPolicyBuildWorkflowType = {
    GENERATE_FIDELITY_REPORT: "GENERATE_FIDELITY_REPORT",
    GENERATE_POLICY_SCENARIOS: "GENERATE_POLICY_SCENARIOS",
    IMPORT_POLICY: "IMPORT_POLICY",
    INGEST_CONTENT: "INGEST_CONTENT",
    REFINE_POLICY: "REFINE_POLICY"
  };
  AutomatedReasoningPolicyBuildDocumentContentType = {
    PDF: "pdf",
    TEXT: "txt"
  };
  AutomatedReasoningPolicyBuildWorkflowStatus = {
    BUILDING: "BUILDING",
    CANCELLED: "CANCELLED",
    CANCEL_REQUESTED: "CANCEL_REQUESTED",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PREPROCESSING: "PREPROCESSING",
    SCHEDULED: "SCHEDULED",
    TESTING: "TESTING"
  };
  AutomatedReasoningPolicyBuildResultAssetType = {
    ASSET_MANIFEST: "ASSET_MANIFEST",
    BUILD_LOG: "BUILD_LOG",
    FIDELITY_REPORT: "FIDELITY_REPORT",
    GENERATED_TEST_CASES: "GENERATED_TEST_CASES",
    POLICY_DEFINITION: "POLICY_DEFINITION",
    POLICY_SCENARIOS: "POLICY_SCENARIOS",
    QUALITY_REPORT: "QUALITY_REPORT",
    SOURCE_DOCUMENT: "SOURCE_DOCUMENT"
  };
  AutomatedReasoningPolicyBuildMessageType = {
    ERROR: "ERROR",
    INFO: "INFO",
    WARNING: "WARNING"
  };
  AutomatedReasoningPolicyAnnotationStatus = {
    APPLIED: "APPLIED",
    FAILED: "FAILED"
  };
  AutomatedReasoningCheckLogicWarningType = {
    ALWAYS_FALSE: "ALWAYS_FALSE",
    ALWAYS_TRUE: "ALWAYS_TRUE"
  };
  AutomatedReasoningPolicyTestRunResult = {
    FAILED: "FAILED",
    PASSED: "PASSED"
  };
  AutomatedReasoningPolicyTestRunStatus = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    NOT_STARTED: "NOT_STARTED",
    SCHEDULED: "SCHEDULED"
  };
  Status = {
    INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
    REGISTERED: "REGISTERED"
  };
  CustomModelDeploymentStatus = {
    ACTIVE: "Active",
    CREATING: "Creating",
    FAILED: "Failed"
  };
  CustomModelDeploymentUpdateStatus = {
    UPDATE_COMPLETED: "UpdateCompleted",
    UPDATE_FAILED: "UpdateFailed",
    UPDATING: "Updating"
  };
  SortModelsBy = {
    CREATION_TIME: "CreationTime"
  };
  SortOrder = {
    ASCENDING: "Ascending",
    DESCENDING: "Descending"
  };
  ReasoningEffort = {
    HIGH: "high",
    LOW: "low",
    MEDIUM: "medium"
  };
  CustomizationType = {
    CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
    DISTILLATION: "DISTILLATION",
    FINE_TUNING: "FINE_TUNING",
    IMPORTED: "IMPORTED",
    REINFORCEMENT_FINE_TUNING: "REINFORCEMENT_FINE_TUNING"
  };
  ModelStatus = {
    ACTIVE: "Active",
    CREATING: "Creating",
    FAILED: "Failed"
  };
  EvaluationJobStatus = {
    COMPLETED: "Completed",
    DELETING: "Deleting",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  };
  ApplicationType = {
    MODEL_EVALUATION: "ModelEvaluation",
    RAG_EVALUATION: "RagEvaluation"
  };
  EvaluationTaskType = {
    CLASSIFICATION: "Classification",
    CUSTOM: "Custom",
    GENERATION: "Generation",
    QUESTION_AND_ANSWER: "QuestionAndAnswer",
    SUMMARIZATION: "Summarization"
  };
  PerformanceConfigLatency = {
    OPTIMIZED: "optimized",
    STANDARD: "standard"
  };
  ExternalSourceType = {
    BYTE_CONTENT: "BYTE_CONTENT",
    S3: "S3"
  };
  QueryTransformationType = {
    QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION"
  };
  AttributeType = {
    BOOLEAN: "BOOLEAN",
    NUMBER: "NUMBER",
    STRING: "STRING",
    STRING_LIST: "STRING_LIST"
  };
  SearchType = {
    HYBRID: "HYBRID",
    SEMANTIC: "SEMANTIC"
  };
  RerankingMetadataSelectionMode = {
    ALL: "ALL",
    SELECTIVE: "SELECTIVE"
  };
  VectorSearchRerankingConfigurationType = {
    BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL"
  };
  RetrieveAndGenerateType = {
    EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
    KNOWLEDGE_BASE: "KNOWLEDGE_BASE"
  };
  EvaluationJobType = {
    AUTOMATED: "Automated",
    HUMAN: "Human"
  };
  SortJobsBy = {
    CREATION_TIME: "CreationTime"
  };
  GuardrailContentFilterAction2 = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  };
  GuardrailModality2 = {
    IMAGE: "IMAGE",
    TEXT: "TEXT"
  };
  GuardrailFilterStrength = {
    HIGH: "HIGH",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    NONE: "NONE"
  };
  GuardrailContentFilterType = {
    HATE: "HATE",
    INSULTS: "INSULTS",
    MISCONDUCT: "MISCONDUCT",
    PROMPT_ATTACK: "PROMPT_ATTACK",
    SEXUAL: "SEXUAL",
    VIOLENCE: "VIOLENCE"
  };
  GuardrailContentFiltersTierName2 = {
    CLASSIC: "CLASSIC",
    STANDARD: "STANDARD"
  };
  GuardrailContextualGroundingAction2 = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  };
  GuardrailContextualGroundingFilterType = {
    GROUNDING: "GROUNDING",
    RELEVANCE: "RELEVANCE"
  };
  GuardrailSensitiveInformationAction = {
    ANONYMIZE: "ANONYMIZE",
    BLOCK: "BLOCK",
    NONE: "NONE"
  };
  GuardrailPiiEntityType = {
    ADDRESS: "ADDRESS",
    AGE: "AGE",
    AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
    AWS_SECRET_KEY: "AWS_SECRET_KEY",
    CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
    CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
    CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
    CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
    CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
    DRIVER_ID: "DRIVER_ID",
    EMAIL: "EMAIL",
    INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
    IP_ADDRESS: "IP_ADDRESS",
    LICENSE_PLATE: "LICENSE_PLATE",
    MAC_ADDRESS: "MAC_ADDRESS",
    NAME: "NAME",
    PASSWORD: "PASSWORD",
    PHONE: "PHONE",
    PIN: "PIN",
    SWIFT_CODE: "SWIFT_CODE",
    UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
    UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
    UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
    URL: "URL",
    USERNAME: "USERNAME",
    US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
    US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
    US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
    US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
    US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
    VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
  };
  GuardrailTopicsTierName2 = {
    CLASSIC: "CLASSIC",
    STANDARD: "STANDARD"
  };
  GuardrailTopicAction2 = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  };
  GuardrailTopicType = {
    DENY: "DENY"
  };
  GuardrailWordAction2 = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  };
  GuardrailManagedWordsType = {
    PROFANITY: "PROFANITY"
  };
  GuardrailStatus = {
    CREATING: "CREATING",
    DELETING: "DELETING",
    FAILED: "FAILED",
    READY: "READY",
    UPDATING: "UPDATING",
    VERSIONING: "VERSIONING"
  };
  InferenceProfileStatus = {
    ACTIVE: "ACTIVE"
  };
  InferenceProfileType = {
    APPLICATION: "APPLICATION",
    SYSTEM_DEFINED: "SYSTEM_DEFINED"
  };
  ModelCopyJobStatus = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress"
  };
  ModelImportJobStatus = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress"
  };
  S3InputFormat = {
    JSONL: "JSONL"
  };
  ModelInvocationType = {
    Converse: "Converse",
    InvokeModel: "InvokeModel"
  };
  ModelInvocationJobStatus = {
    COMPLETED: "Completed",
    EXPIRED: "Expired",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PARTIALLY_COMPLETED: "PartiallyCompleted",
    SCHEDULED: "Scheduled",
    STOPPED: "Stopped",
    STOPPING: "Stopping",
    SUBMITTED: "Submitted",
    VALIDATING: "Validating"
  };
  ModelCustomization = {
    CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
    DISTILLATION: "DISTILLATION",
    FINE_TUNING: "FINE_TUNING"
  };
  InferenceType = {
    ON_DEMAND: "ON_DEMAND",
    PROVISIONED: "PROVISIONED"
  };
  ModelModality = {
    EMBEDDING: "EMBEDDING",
    IMAGE: "IMAGE",
    TEXT: "TEXT"
  };
  FoundationModelLifecycleStatus = {
    ACTIVE: "ACTIVE",
    LEGACY: "LEGACY"
  };
  PromptRouterStatus = {
    AVAILABLE: "AVAILABLE"
  };
  PromptRouterType = {
    CUSTOM: "custom",
    DEFAULT: "default"
  };
  CommitmentDuration = {
    ONE_MONTH: "OneMonth",
    SIX_MONTHS: "SixMonths"
  };
  ProvisionedModelStatus = {
    CREATING: "Creating",
    FAILED: "Failed",
    IN_SERVICE: "InService",
    UPDATING: "Updating"
  };
  SortByProvisionedModels = {
    CREATION_TIME: "CreationTime"
  };
  AuthorizationStatus = {
    AUTHORIZED: "AUTHORIZED",
    NOT_AUTHORIZED: "NOT_AUTHORIZED"
  };
  EntitlementAvailability = {
    AVAILABLE: "AVAILABLE",
    NOT_AVAILABLE: "NOT_AVAILABLE"
  };
  RegionAvailability = {
    AVAILABLE: "AVAILABLE",
    NOT_AVAILABLE: "NOT_AVAILABLE"
  };
  OfferType = {
    ALL: "ALL",
    PUBLIC: "PUBLIC"
  };
  ModelCustomizationJobStatus = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  };
  JobStatusDetails = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    NOT_STARTED: "NotStarted",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  };
  FineTuningJobStatus = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/models/models_0.js
var init_models_0 = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/models/models_1.js
var init_models_1 = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock@3.1037.0/node_modules/@aws-sdk/client-bedrock/dist-es/index.js
var init_dist_es3 = __esm(() => {
  init_BedrockServiceException();
  init_BedrockClient();
  init_Bedrock();
  init_commands();
  init_schemas_0();
  init_pagination();
  init_enums();
  init_errors();
  init_models_0();
  init_models_1();
});
init_dist_es3();
var export___Client = import_smithy_client5.Client;

export {
  paginateListProvisionedModelThroughputs,
  paginateListPromptRouters,
  paginateListModelInvocationJobs,
  paginateListModelImportJobs,
  paginateListModelCustomizationJobs,
  paginateListModelCopyJobs,
  paginateListMarketplaceModelEndpoints,
  paginateListInferenceProfiles,
  paginateListImportedModels,
  paginateListGuardrails,
  paginateListEvaluationJobs,
  paginateListEnforcedGuardrailsConfiguration,
  paginateListCustomModels,
  paginateListCustomModelDeployments,
  paginateListAutomatedReasoningPolicyTestResults,
  paginateListAutomatedReasoningPolicyTestCases,
  paginateListAutomatedReasoningPolicyBuildWorkflows,
  paginateListAutomatedReasoningPolicies,
  errorTypeRegistries,
  export___Client as __Client,
  VpcConfig$,
  VectorSearchRerankingConfigurationType,
  VectorSearchRerankingConfiguration$,
  VectorSearchBedrockRerankingModelConfiguration$,
  VectorSearchBedrockRerankingConfiguration$,
  ValidityTerm$,
  ValidatorMetric$,
  Validator$,
  ValidationException$,
  ValidationException,
  ValidationDetails$,
  ValidationDataConfig$,
  UpdateProvisionedModelThroughputResponse$,
  UpdateProvisionedModelThroughputRequest$,
  UpdateProvisionedModelThroughputCommand,
  UpdateProvisionedModelThroughput$,
  UpdateMarketplaceModelEndpointResponse$,
  UpdateMarketplaceModelEndpointRequest$,
  UpdateMarketplaceModelEndpointCommand,
  UpdateMarketplaceModelEndpoint$,
  UpdateGuardrailResponse$,
  UpdateGuardrailRequest$,
  UpdateGuardrailCommand,
  UpdateGuardrail$,
  UpdateCustomModelDeploymentResponse$,
  UpdateCustomModelDeploymentRequest$,
  UpdateCustomModelDeploymentCommand,
  UpdateCustomModelDeployment$,
  UpdateAutomatedReasoningPolicyTestCaseResponse$,
  UpdateAutomatedReasoningPolicyTestCaseRequest$,
  UpdateAutomatedReasoningPolicyTestCaseCommand,
  UpdateAutomatedReasoningPolicyTestCase$,
  UpdateAutomatedReasoningPolicyResponse$,
  UpdateAutomatedReasoningPolicyRequest$,
  UpdateAutomatedReasoningPolicyCommand,
  UpdateAutomatedReasoningPolicyAnnotationsResponse$,
  UpdateAutomatedReasoningPolicyAnnotationsRequest$,
  UpdateAutomatedReasoningPolicyAnnotationsCommand,
  UpdateAutomatedReasoningPolicyAnnotations$,
  UpdateAutomatedReasoningPolicy$,
  UntagResourceResponse$,
  UntagResourceRequest$,
  UntagResourceCommand,
  UntagResource$,
  TrainingMetrics$,
  TrainingDetails$,
  TrainingDataConfig$,
  TooManyTagsException$,
  TooManyTagsException,
  ThrottlingException$,
  ThrottlingException,
  TextInferenceConfig$,
  TermDetails$,
  TeacherModelConfig$,
  TagResourceResponse$,
  TagResourceRequest$,
  TagResourceCommand,
  TagResource$,
  Tag$,
  SupportTerm$,
  StopModelInvocationJobResponse$,
  StopModelInvocationJobRequest$,
  StopModelInvocationJobCommand,
  StopModelInvocationJob$,
  StopModelCustomizationJobResponse$,
  StopModelCustomizationJobRequest$,
  StopModelCustomizationJobCommand,
  StopModelCustomizationJob$,
  StopEvaluationJobResponse$,
  StopEvaluationJobRequest$,
  StopEvaluationJobCommand,
  StopEvaluationJob$,
  StatusDetails$,
  Status,
  StartAutomatedReasoningPolicyTestWorkflowResponse$,
  StartAutomatedReasoningPolicyTestWorkflowRequest$,
  StartAutomatedReasoningPolicyTestWorkflowCommand,
  StartAutomatedReasoningPolicyTestWorkflow$,
  StartAutomatedReasoningPolicyBuildWorkflowResponse$,
  StartAutomatedReasoningPolicyBuildWorkflowRequest$,
  StartAutomatedReasoningPolicyBuildWorkflowCommand,
  StartAutomatedReasoningPolicyBuildWorkflow$,
  SortOrder,
  SortModelsBy,
  SortJobsBy,
  SortByProvisionedModels,
  ServiceUnavailableException$,
  ServiceUnavailableException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededException,
  SelectiveGuardingMode,
  SelectiveContentGuarding$,
  SearchType,
  SageMakerEndpoint$,
  S3ObjectDoc$,
  S3InputFormat,
  S3DataSource$,
  S3Config$,
  RoutingCriteria$,
  RetrieveConfig$,
  RetrieveAndGenerateType,
  RetrieveAndGenerateConfiguration$,
  RetrievalFilter$,
  ResourceNotFoundException$,
  ResourceNotFoundException,
  ResourceInUseException$,
  ResourceInUseException,
  RerankingMetadataSelectiveModeConfiguration$,
  RerankingMetadataSelectionMode,
  RequestMetadataFilters$,
  RequestMetadataBaseFilters$,
  RegisterMarketplaceModelEndpointResponse$,
  RegisterMarketplaceModelEndpointRequest$,
  RegisterMarketplaceModelEndpointCommand,
  RegisterMarketplaceModelEndpoint$,
  RegionAvailability,
  ReasoningEffort,
  RatingScaleItemValue$,
  RatingScaleItem$,
  RFTHyperParameters$,
  RFTConfig$,
  RAGConfig$,
  QueryTransformationType,
  QueryTransformationConfiguration$,
  PutUseCaseForModelAccessResponse$,
  PutUseCaseForModelAccessRequest$,
  PutUseCaseForModelAccessCommand,
  PutUseCaseForModelAccess$,
  PutResourcePolicyResponse$,
  PutResourcePolicyRequest$,
  PutResourcePolicyCommand,
  PutResourcePolicy$,
  PutModelInvocationLoggingConfigurationResponse$,
  PutModelInvocationLoggingConfigurationRequest$,
  PutModelInvocationLoggingConfigurationCommand,
  PutModelInvocationLoggingConfiguration$,
  PutEnforcedGuardrailConfigurationResponse$,
  PutEnforcedGuardrailConfigurationRequest$,
  PutEnforcedGuardrailConfigurationCommand,
  PutEnforcedGuardrailConfiguration$,
  ProvisionedModelSummary$,
  ProvisionedModelStatus,
  PromptTemplate$,
  PromptRouterType,
  PromptRouterTargetModel$,
  PromptRouterSummary$,
  PromptRouterStatus,
  PricingTerm$,
  PerformanceConfiguration$,
  PerformanceConfigLatency,
  OutputDataConfig$,
  OrchestrationConfiguration$,
  OfferType,
  Offer$,
  ModelStatus,
  ModelModality,
  ModelInvocationType,
  ModelInvocationJobSummary$,
  ModelInvocationJobStatus,
  ModelInvocationJobS3OutputDataConfig$,
  ModelInvocationJobS3InputDataConfig$,
  ModelInvocationJobOutputDataConfig$,
  ModelInvocationJobInputDataConfig$,
  ModelImportJobSummary$,
  ModelImportJobStatus,
  ModelEnforcement$,
  ModelDataSource$,
  ModelCustomizationJobSummary$,
  ModelCustomizationJobStatus,
  ModelCustomization,
  ModelCopyJobSummary$,
  ModelCopyJobStatus,
  MetadataConfigurationForReranking$,
  MetadataAttributeSchema$,
  MarketplaceModelEndpointSummary$,
  MarketplaceModelEndpoint$,
  LoggingConfig$,
  ListTagsForResourceResponse$,
  ListTagsForResourceRequest$,
  ListTagsForResourceCommand,
  ListTagsForResource$,
  ListProvisionedModelThroughputsResponse$,
  ListProvisionedModelThroughputsRequest$,
  ListProvisionedModelThroughputsCommand,
  ListProvisionedModelThroughputs$,
  ListPromptRoutersResponse$,
  ListPromptRoutersRequest$,
  ListPromptRoutersCommand,
  ListPromptRouters$,
  ListModelInvocationJobsResponse$,
  ListModelInvocationJobsRequest$,
  ListModelInvocationJobsCommand,
  ListModelInvocationJobs$,
  ListModelImportJobsResponse$,
  ListModelImportJobsRequest$,
  ListModelImportJobsCommand,
  ListModelImportJobs$,
  ListModelCustomizationJobsResponse$,
  ListModelCustomizationJobsRequest$,
  ListModelCustomizationJobsCommand,
  ListModelCustomizationJobs$,
  ListModelCopyJobsResponse$,
  ListModelCopyJobsRequest$,
  ListModelCopyJobsCommand,
  ListModelCopyJobs$,
  ListMarketplaceModelEndpointsResponse$,
  ListMarketplaceModelEndpointsRequest$,
  ListMarketplaceModelEndpointsCommand,
  ListMarketplaceModelEndpoints$,
  ListInferenceProfilesResponse$,
  ListInferenceProfilesRequest$,
  ListInferenceProfilesCommand,
  ListInferenceProfiles$,
  ListImportedModelsResponse$,
  ListImportedModelsRequest$,
  ListImportedModelsCommand,
  ListImportedModels$,
  ListGuardrailsResponse$,
  ListGuardrailsRequest$,
  ListGuardrailsCommand,
  ListGuardrails$,
  ListFoundationModelsResponse$,
  ListFoundationModelsRequest$,
  ListFoundationModelsCommand,
  ListFoundationModels$,
  ListFoundationModelAgreementOffersResponse$,
  ListFoundationModelAgreementOffersRequest$,
  ListFoundationModelAgreementOffersCommand,
  ListFoundationModelAgreementOffers$,
  ListEvaluationJobsResponse$,
  ListEvaluationJobsRequest$,
  ListEvaluationJobsCommand,
  ListEvaluationJobs$,
  ListEnforcedGuardrailsConfigurationResponse$,
  ListEnforcedGuardrailsConfigurationRequest$,
  ListEnforcedGuardrailsConfigurationCommand,
  ListEnforcedGuardrailsConfiguration$,
  ListCustomModelsResponse$,
  ListCustomModelsRequest$,
  ListCustomModelsCommand,
  ListCustomModels$,
  ListCustomModelDeploymentsResponse$,
  ListCustomModelDeploymentsRequest$,
  ListCustomModelDeploymentsCommand,
  ListCustomModelDeployments$,
  ListAutomatedReasoningPolicyTestResultsResponse$,
  ListAutomatedReasoningPolicyTestResultsRequest$,
  ListAutomatedReasoningPolicyTestResultsCommand,
  ListAutomatedReasoningPolicyTestResults$,
  ListAutomatedReasoningPolicyTestCasesResponse$,
  ListAutomatedReasoningPolicyTestCasesRequest$,
  ListAutomatedReasoningPolicyTestCasesCommand,
  ListAutomatedReasoningPolicyTestCases$,
  ListAutomatedReasoningPolicyBuildWorkflowsResponse$,
  ListAutomatedReasoningPolicyBuildWorkflowsRequest$,
  ListAutomatedReasoningPolicyBuildWorkflowsCommand,
  ListAutomatedReasoningPolicyBuildWorkflows$,
  ListAutomatedReasoningPoliciesResponse$,
  ListAutomatedReasoningPoliciesRequest$,
  ListAutomatedReasoningPoliciesCommand,
  ListAutomatedReasoningPolicies$,
  LegalTerm$,
  LambdaGraderConfig$,
  KnowledgeBaseVectorSearchConfiguration$,
  KnowledgeBaseRetrieveAndGenerateConfiguration$,
  KnowledgeBaseRetrievalConfiguration$,
  KnowledgeBaseConfig$,
  KbInferenceConfig$,
  JobStatusDetails,
  InvocationLogsConfig$,
  InvocationLogSource$,
  InternalServerException$,
  InternalServerException,
  InputTags,
  InferenceType,
  InferenceProfileType,
  InferenceProfileSummary$,
  InferenceProfileStatus,
  InferenceProfileModelSource$,
  InferenceProfileModel$,
  ImportedModelSummary$,
  ImplicitFilterConfiguration$,
  HumanWorkflowConfig$,
  HumanEvaluationCustomMetric$,
  HumanEvaluationConfig$,
  GuardrailWordPolicyConfig$,
  GuardrailWordPolicy$,
  GuardrailWordConfig$,
  GuardrailWordAction2 as GuardrailWordAction,
  GuardrailWord$,
  GuardrailTopicsTierName2 as GuardrailTopicsTierName,
  GuardrailTopicsTierConfig$,
  GuardrailTopicsTier$,
  GuardrailTopicType,
  GuardrailTopicPolicyConfig$,
  GuardrailTopicPolicy$,
  GuardrailTopicConfig$,
  GuardrailTopicAction2 as GuardrailTopicAction,
  GuardrailTopic$,
  GuardrailSummary$,
  GuardrailStatus,
  GuardrailSensitiveInformationPolicyConfig$,
  GuardrailSensitiveInformationPolicy$,
  GuardrailSensitiveInformationAction,
  GuardrailRegexConfig$,
  GuardrailRegex$,
  GuardrailPiiEntityType,
  GuardrailPiiEntityConfig$,
  GuardrailPiiEntity$,
  GuardrailModality2 as GuardrailModality,
  GuardrailManagedWordsType,
  GuardrailManagedWordsConfig$,
  GuardrailManagedWords$,
  GuardrailFilterStrength,
  GuardrailCrossRegionDetails$,
  GuardrailCrossRegionConfig$,
  GuardrailContextualGroundingPolicyConfig$,
  GuardrailContextualGroundingPolicy$,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingFilterConfig$,
  GuardrailContextualGroundingFilter$,
  GuardrailContextualGroundingAction2 as GuardrailContextualGroundingAction,
  GuardrailContentPolicyConfig$,
  GuardrailContentPolicy$,
  GuardrailContentFiltersTierName2 as GuardrailContentFiltersTierName,
  GuardrailContentFiltersTierConfig$,
  GuardrailContentFiltersTier$,
  GuardrailContentFilterType,
  GuardrailContentFilterConfig$,
  GuardrailContentFilterAction2 as GuardrailContentFilterAction,
  GuardrailContentFilter$,
  GuardrailConfiguration$,
  GuardrailAutomatedReasoningPolicyConfig$,
  GuardrailAutomatedReasoningPolicy$,
  GraderConfig$,
  GetUseCaseForModelAccessResponse$,
  GetUseCaseForModelAccessRequest$,
  GetUseCaseForModelAccessCommand,
  GetUseCaseForModelAccess$,
  GetResourcePolicyResponse$,
  GetResourcePolicyRequest$,
  GetResourcePolicyCommand,
  GetResourcePolicy$,
  GetProvisionedModelThroughputResponse$,
  GetProvisionedModelThroughputRequest$,
  GetProvisionedModelThroughputCommand,
  GetProvisionedModelThroughput$,
  GetPromptRouterResponse$,
  GetPromptRouterRequest$,
  GetPromptRouterCommand,
  GetPromptRouter$,
  GetModelInvocationLoggingConfigurationResponse$,
  GetModelInvocationLoggingConfigurationRequest$,
  GetModelInvocationLoggingConfigurationCommand,
  GetModelInvocationLoggingConfiguration$,
  GetModelInvocationJobResponse$,
  GetModelInvocationJobRequest$,
  GetModelInvocationJobCommand,
  GetModelInvocationJob$,
  GetModelImportJobResponse$,
  GetModelImportJobRequest$,
  GetModelImportJobCommand,
  GetModelImportJob$,
  GetModelCustomizationJobResponse$,
  GetModelCustomizationJobRequest$,
  GetModelCustomizationJobCommand,
  GetModelCustomizationJob$,
  GetModelCopyJobResponse$,
  GetModelCopyJobRequest$,
  GetModelCopyJobCommand,
  GetModelCopyJob$,
  GetMarketplaceModelEndpointResponse$,
  GetMarketplaceModelEndpointRequest$,
  GetMarketplaceModelEndpointCommand,
  GetMarketplaceModelEndpoint$,
  GetInferenceProfileResponse$,
  GetInferenceProfileRequest$,
  GetInferenceProfileCommand,
  GetInferenceProfile$,
  GetImportedModelResponse$,
  GetImportedModelRequest$,
  GetImportedModelCommand,
  GetImportedModel$,
  GetGuardrailResponse$,
  GetGuardrailRequest$,
  GetGuardrailCommand,
  GetGuardrail$,
  GetFoundationModelResponse$,
  GetFoundationModelRequest$,
  GetFoundationModelCommand,
  GetFoundationModelAvailabilityResponse$,
  GetFoundationModelAvailabilityRequest$,
  GetFoundationModelAvailabilityCommand,
  GetFoundationModelAvailability$,
  GetFoundationModel$,
  GetEvaluationJobResponse$,
  GetEvaluationJobRequest$,
  GetEvaluationJobCommand,
  GetEvaluationJob$,
  GetCustomModelResponse$,
  GetCustomModelRequest$,
  GetCustomModelDeploymentResponse$,
  GetCustomModelDeploymentRequest$,
  GetCustomModelDeploymentCommand,
  GetCustomModelDeployment$,
  GetCustomModelCommand,
  GetCustomModel$,
  GetAutomatedReasoningPolicyTestResultResponse$,
  GetAutomatedReasoningPolicyTestResultRequest$,
  GetAutomatedReasoningPolicyTestResultCommand,
  GetAutomatedReasoningPolicyTestResult$,
  GetAutomatedReasoningPolicyTestCaseResponse$,
  GetAutomatedReasoningPolicyTestCaseRequest$,
  GetAutomatedReasoningPolicyTestCaseCommand,
  GetAutomatedReasoningPolicyTestCase$,
  GetAutomatedReasoningPolicyResponse$,
  GetAutomatedReasoningPolicyRequest$,
  GetAutomatedReasoningPolicyNextScenarioResponse$,
  GetAutomatedReasoningPolicyNextScenarioRequest$,
  GetAutomatedReasoningPolicyNextScenarioCommand,
  GetAutomatedReasoningPolicyNextScenario$,
  GetAutomatedReasoningPolicyCommand,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse$,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest$,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssets$,
  GetAutomatedReasoningPolicyBuildWorkflowResponse$,
  GetAutomatedReasoningPolicyBuildWorkflowRequest$,
  GetAutomatedReasoningPolicyBuildWorkflowCommand,
  GetAutomatedReasoningPolicyBuildWorkflow$,
  GetAutomatedReasoningPolicyAnnotationsResponse$,
  GetAutomatedReasoningPolicyAnnotationsRequest$,
  GetAutomatedReasoningPolicyAnnotationsCommand,
  GetAutomatedReasoningPolicyAnnotations$,
  GetAutomatedReasoningPolicy$,
  GenerationConfiguration$,
  FoundationModelSummary$,
  FoundationModelLifecycleStatus,
  FoundationModelLifecycle$,
  FoundationModelDetails$,
  FineTuningJobStatus,
  FilterAttribute$,
  FieldForReranking$,
  ExternalSourcesRetrieveAndGenerateConfiguration$,
  ExternalSourcesGenerationConfiguration$,
  ExternalSourceType,
  ExternalSource$,
  ExportAutomatedReasoningPolicyVersionResponse$,
  ExportAutomatedReasoningPolicyVersionRequest$,
  ExportAutomatedReasoningPolicyVersionCommand,
  ExportAutomatedReasoningPolicyVersion$,
  EvaluatorModelConfig$,
  EvaluationTaskType,
  EvaluationSummary$,
  EvaluationRagConfigSummary$,
  EvaluationPrecomputedRetrieveSourceConfig$,
  EvaluationPrecomputedRetrieveAndGenerateSourceConfig$,
  EvaluationPrecomputedRagSourceConfig$,
  EvaluationPrecomputedInferenceSource$,
  EvaluationOutputDataConfig$,
  EvaluationModelConfigSummary$,
  EvaluationModelConfig$,
  EvaluationJobType,
  EvaluationJobStatus,
  EvaluationInferenceConfigSummary$,
  EvaluationInferenceConfig$,
  EvaluationDatasetMetricConfig$,
  EvaluationDatasetLocation$,
  EvaluationDataset$,
  EvaluationConfig$,
  EvaluationBedrockModel$,
  EntitlementAvailability,
  EndpointConfig$,
  DistillationConfig$,
  DimensionalPriceRate$,
  DeregisterMarketplaceModelEndpointResponse$,
  DeregisterMarketplaceModelEndpointRequest$,
  DeregisterMarketplaceModelEndpointCommand,
  DeregisterMarketplaceModelEndpoint$,
  DeleteResourcePolicyResponse$,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicy$,
  DeleteProvisionedModelThroughputResponse$,
  DeleteProvisionedModelThroughputRequest$,
  DeleteProvisionedModelThroughputCommand,
  DeleteProvisionedModelThroughput$,
  DeletePromptRouterResponse$,
  DeletePromptRouterRequest$,
  DeletePromptRouterCommand,
  DeletePromptRouter$,
  DeleteModelInvocationLoggingConfigurationResponse$,
  DeleteModelInvocationLoggingConfigurationRequest$,
  DeleteModelInvocationLoggingConfigurationCommand,
  DeleteModelInvocationLoggingConfiguration$,
  DeleteMarketplaceModelEndpointResponse$,
  DeleteMarketplaceModelEndpointRequest$,
  DeleteMarketplaceModelEndpointCommand,
  DeleteMarketplaceModelEndpoint$,
  DeleteInferenceProfileResponse$,
  DeleteInferenceProfileRequest$,
  DeleteInferenceProfileCommand,
  DeleteInferenceProfile$,
  DeleteImportedModelResponse$,
  DeleteImportedModelRequest$,
  DeleteImportedModelCommand,
  DeleteImportedModel$,
  DeleteGuardrailResponse$,
  DeleteGuardrailRequest$,
  DeleteGuardrailCommand,
  DeleteGuardrail$,
  DeleteFoundationModelAgreementResponse$,
  DeleteFoundationModelAgreementRequest$,
  DeleteFoundationModelAgreementCommand,
  DeleteFoundationModelAgreement$,
  DeleteEnforcedGuardrailConfigurationResponse$,
  DeleteEnforcedGuardrailConfigurationRequest$,
  DeleteEnforcedGuardrailConfigurationCommand,
  DeleteEnforcedGuardrailConfiguration$,
  DeleteCustomModelResponse$,
  DeleteCustomModelRequest$,
  DeleteCustomModelDeploymentResponse$,
  DeleteCustomModelDeploymentRequest$,
  DeleteCustomModelDeploymentCommand,
  DeleteCustomModelDeployment$,
  DeleteCustomModelCommand,
  DeleteCustomModel$,
  DeleteAutomatedReasoningPolicyTestCaseResponse$,
  DeleteAutomatedReasoningPolicyTestCaseRequest$,
  DeleteAutomatedReasoningPolicyTestCaseCommand,
  DeleteAutomatedReasoningPolicyTestCase$,
  DeleteAutomatedReasoningPolicyResponse$,
  DeleteAutomatedReasoningPolicyRequest$,
  DeleteAutomatedReasoningPolicyCommand,
  DeleteAutomatedReasoningPolicyBuildWorkflowResponse$,
  DeleteAutomatedReasoningPolicyBuildWorkflowRequest$,
  DeleteAutomatedReasoningPolicyBuildWorkflowCommand,
  DeleteAutomatedReasoningPolicyBuildWorkflow$,
  DeleteAutomatedReasoningPolicy$,
  DataProcessingDetails$,
  CustomizationType,
  CustomizationConfig$,
  CustomModelUnits$,
  CustomModelSummary$,
  CustomModelDeploymentUpdateStatus,
  CustomModelDeploymentUpdateDetails$,
  CustomModelDeploymentSummary$,
  CustomModelDeploymentStatus,
  CustomMetricEvaluatorModelConfig$,
  CustomMetricDefinition$,
  CustomMetricBedrockEvaluatorModel$,
  CreateProvisionedModelThroughputResponse$,
  CreateProvisionedModelThroughputRequest$,
  CreateProvisionedModelThroughputCommand,
  CreateProvisionedModelThroughput$,
  CreatePromptRouterResponse$,
  CreatePromptRouterRequest$,
  CreatePromptRouterCommand,
  CreatePromptRouter$,
  CreateModelInvocationJobResponse$,
  CreateModelInvocationJobRequest$,
  CreateModelInvocationJobCommand,
  CreateModelInvocationJob$,
  CreateModelImportJobResponse$,
  CreateModelImportJobRequest$,
  CreateModelImportJobCommand,
  CreateModelImportJob$,
  CreateModelCustomizationJobResponse$,
  CreateModelCustomizationJobRequest$,
  CreateModelCustomizationJobCommand,
  CreateModelCustomizationJob$,
  CreateModelCopyJobResponse$,
  CreateModelCopyJobRequest$,
  CreateModelCopyJobCommand,
  CreateModelCopyJob$,
  CreateMarketplaceModelEndpointResponse$,
  CreateMarketplaceModelEndpointRequest$,
  CreateMarketplaceModelEndpointCommand,
  CreateMarketplaceModelEndpoint$,
  CreateInferenceProfileResponse$,
  CreateInferenceProfileRequest$,
  CreateInferenceProfileCommand,
  CreateInferenceProfile$,
  CreateGuardrailVersionResponse$,
  CreateGuardrailVersionRequest$,
  CreateGuardrailVersionCommand,
  CreateGuardrailVersion$,
  CreateGuardrailResponse$,
  CreateGuardrailRequest$,
  CreateGuardrailCommand,
  CreateGuardrail$,
  CreateFoundationModelAgreementResponse$,
  CreateFoundationModelAgreementRequest$,
  CreateFoundationModelAgreementCommand,
  CreateFoundationModelAgreement$,
  CreateEvaluationJobResponse$,
  CreateEvaluationJobRequest$,
  CreateEvaluationJobCommand,
  CreateEvaluationJob$,
  CreateCustomModelResponse$,
  CreateCustomModelRequest$,
  CreateCustomModelDeploymentResponse$,
  CreateCustomModelDeploymentRequest$,
  CreateCustomModelDeploymentCommand,
  CreateCustomModelDeployment$,
  CreateCustomModelCommand,
  CreateCustomModel$,
  CreateAutomatedReasoningPolicyVersionResponse$,
  CreateAutomatedReasoningPolicyVersionRequest$,
  CreateAutomatedReasoningPolicyVersionCommand,
  CreateAutomatedReasoningPolicyVersion$,
  CreateAutomatedReasoningPolicyTestCaseResponse$,
  CreateAutomatedReasoningPolicyTestCaseRequest$,
  CreateAutomatedReasoningPolicyTestCaseCommand,
  CreateAutomatedReasoningPolicyTestCase$,
  CreateAutomatedReasoningPolicyResponse$,
  CreateAutomatedReasoningPolicyRequest$,
  CreateAutomatedReasoningPolicyCommand,
  CreateAutomatedReasoningPolicy$,
  ConflictException$,
  ConflictException,
  ConfigurationOwner,
  CommitmentDuration,
  CloudWatchConfig$,
  CancelAutomatedReasoningPolicyBuildWorkflowResponse$,
  CancelAutomatedReasoningPolicyBuildWorkflowRequest$,
  CancelAutomatedReasoningPolicyBuildWorkflowCommand,
  CancelAutomatedReasoningPolicyBuildWorkflow$,
  ByteContentDoc$,
  BedrockServiceException$,
  BedrockServiceException,
  BedrockEvaluatorModel$,
  BedrockClient,
  Bedrock,
  BatchDeleteEvaluationJobResponse$,
  BatchDeleteEvaluationJobRequest$,
  BatchDeleteEvaluationJobItem$,
  BatchDeleteEvaluationJobError$,
  BatchDeleteEvaluationJobCommand,
  BatchDeleteEvaluationJob$,
  AutomatedReasoningPolicyWorkflowTypeContent$,
  AutomatedReasoningPolicyVariableReport$,
  AutomatedReasoningPolicyUpdateVariableMutation$,
  AutomatedReasoningPolicyUpdateVariableAnnotation$,
  AutomatedReasoningPolicyUpdateTypeValue$,
  AutomatedReasoningPolicyUpdateTypeMutation$,
  AutomatedReasoningPolicyUpdateTypeAnnotation$,
  AutomatedReasoningPolicyUpdateRuleMutation$,
  AutomatedReasoningPolicyUpdateRuleAnnotation$,
  AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation$,
  AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation$,
  AutomatedReasoningPolicyTypeValueAnnotation$,
  AutomatedReasoningPolicyTestRunStatus,
  AutomatedReasoningPolicyTestRunResult,
  AutomatedReasoningPolicyTestResult$,
  AutomatedReasoningPolicyTestCase$,
  AutomatedReasoningPolicySummary$,
  AutomatedReasoningPolicyStatementReference$,
  AutomatedReasoningPolicyStatementLocation$,
  AutomatedReasoningPolicySourceDocument$,
  AutomatedReasoningPolicyScenarios$,
  AutomatedReasoningPolicyScenario$,
  AutomatedReasoningPolicyRuleReport$,
  AutomatedReasoningPolicyReportSourceDocument$,
  AutomatedReasoningPolicyPlanning$,
  AutomatedReasoningPolicyMutation$,
  AutomatedReasoningPolicyIngestContentAnnotation$,
  AutomatedReasoningPolicyGeneratedTestCases$,
  AutomatedReasoningPolicyGeneratedTestCase$,
  AutomatedReasoningPolicyGenerateFidelityReportContent$,
  AutomatedReasoningPolicyFidelityReport$,
  AutomatedReasoningPolicyDisjointRuleSet$,
  AutomatedReasoningPolicyDeleteVariableMutation$,
  AutomatedReasoningPolicyDeleteVariableAnnotation$,
  AutomatedReasoningPolicyDeleteTypeValue$,
  AutomatedReasoningPolicyDeleteTypeMutation$,
  AutomatedReasoningPolicyDeleteTypeAnnotation$,
  AutomatedReasoningPolicyDeleteRuleMutation$,
  AutomatedReasoningPolicyDeleteRuleAnnotation$,
  AutomatedReasoningPolicyDefinitionVariable$,
  AutomatedReasoningPolicyDefinitionTypeValuePair$,
  AutomatedReasoningPolicyDefinitionTypeValue$,
  AutomatedReasoningPolicyDefinitionType$,
  AutomatedReasoningPolicyDefinitionRule$,
  AutomatedReasoningPolicyDefinitionQualityReport$,
  AutomatedReasoningPolicyDefinitionElement$,
  AutomatedReasoningPolicyDefinition$,
  AutomatedReasoningPolicyBuildWorkflowType,
  AutomatedReasoningPolicyBuildWorkflowSummary$,
  AutomatedReasoningPolicyBuildWorkflowStatus,
  AutomatedReasoningPolicyBuildWorkflowSource$,
  AutomatedReasoningPolicyBuildWorkflowRepairContent$,
  AutomatedReasoningPolicyBuildWorkflowDocument$,
  AutomatedReasoningPolicyBuildStepMessage$,
  AutomatedReasoningPolicyBuildStepContext$,
  AutomatedReasoningPolicyBuildStep$,
  AutomatedReasoningPolicyBuildResultAssets$,
  AutomatedReasoningPolicyBuildResultAssetType,
  AutomatedReasoningPolicyBuildResultAssetManifestEntry$,
  AutomatedReasoningPolicyBuildResultAssetManifest$,
  AutomatedReasoningPolicyBuildMessageType,
  AutomatedReasoningPolicyBuildLogEntry$,
  AutomatedReasoningPolicyBuildLog$,
  AutomatedReasoningPolicyBuildDocumentContentType,
  AutomatedReasoningPolicyAtomicStatement$,
  AutomatedReasoningPolicyAnnotationStatus,
  AutomatedReasoningPolicyAnnotation$,
  AutomatedReasoningPolicyAnnotatedLine$,
  AutomatedReasoningPolicyAnnotatedContent$,
  AutomatedReasoningPolicyAnnotatedChunk$,
  AutomatedReasoningPolicyAddVariableMutation$,
  AutomatedReasoningPolicyAddVariableAnnotation$,
  AutomatedReasoningPolicyAddTypeValue$,
  AutomatedReasoningPolicyAddTypeMutation$,
  AutomatedReasoningPolicyAddTypeAnnotation$,
  AutomatedReasoningPolicyAddRuleMutation$,
  AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation$,
  AutomatedReasoningPolicyAddRuleAnnotation$,
  AutomatedReasoningLogicStatement$,
  AutomatedReasoningCheckValidFinding$,
  AutomatedReasoningCheckTranslationOption$,
  AutomatedReasoningCheckTranslationAmbiguousFinding$,
  AutomatedReasoningCheckTranslation$,
  AutomatedReasoningCheckTooComplexFinding$,
  AutomatedReasoningCheckScenario$,
  AutomatedReasoningCheckSatisfiableFinding$,
  AutomatedReasoningCheckRule$,
  AutomatedReasoningCheckResult,
  AutomatedReasoningCheckNoTranslationsFinding$,
  AutomatedReasoningCheckLogicWarningType,
  AutomatedReasoningCheckLogicWarning$,
  AutomatedReasoningCheckInvalidFinding$,
  AutomatedReasoningCheckInputTextReference$,
  AutomatedReasoningCheckImpossibleFinding$,
  AutomatedReasoningCheckFinding$,
  AutomatedEvaluationCustomMetricSource$,
  AutomatedEvaluationCustomMetricConfig$,
  AutomatedEvaluationConfig$,
  AuthorizationStatus,
  AttributeType,
  ApplicationType,
  AgreementStatus,
  AgreementAvailability$,
  AccountEnforcedGuardrailOutputConfiguration$,
  AccountEnforcedGuardrailInferenceInputConfiguration$,
  AccessDeniedException$,
  AccessDeniedException
};
