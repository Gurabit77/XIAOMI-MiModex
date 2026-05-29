// @bun
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+types@4.14.1/node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS((exports) => {
  exports.HttpAuthLocation = undefined;
  (function(HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
  })(exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));
  exports.HttpApiKeyAuthLocation = undefined;
  (function(HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
  })(exports.HttpApiKeyAuthLocation || (exports.HttpApiKeyAuthLocation = {}));
  exports.EndpointURLScheme = undefined;
  (function(EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
  })(exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));
  exports.AlgorithmId = undefined;
  (function(AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
  })(exports.AlgorithmId || (exports.AlgorithmId = {}));
  var getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
      checksumAlgorithms.push({
        algorithmId: () => exports.AlgorithmId.SHA256,
        checksumConstructor: () => runtimeConfig.sha256
      });
    }
    if (runtimeConfig.md5 != null) {
      checksumAlgorithms.push({
        algorithmId: () => exports.AlgorithmId.MD5,
        checksumConstructor: () => runtimeConfig.md5
      });
    }
    return {
      addChecksumAlgorithm(algo) {
        checksumAlgorithms.push(algo);
      },
      checksumAlgorithms() {
        return checksumAlgorithms;
      }
    };
  };
  var resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
      runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
  };
  var getDefaultClientConfiguration = (runtimeConfig) => {
    return getChecksumConfiguration(runtimeConfig);
  };
  var resolveDefaultRuntimeConfig = (config) => {
    return resolveChecksumRuntimeConfig(config);
  };
  exports.FieldPosition = undefined;
  (function(FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
  })(exports.FieldPosition || (exports.FieldPosition = {}));
  var SMITHY_CONTEXT_KEY = "__smithy_context";
  exports.IniSectionType = undefined;
  (function(IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
  })(exports.IniSectionType || (exports.IniSectionType = {}));
  exports.RequestHandlerProtocol = undefined;
  (function(RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
  })(exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));
  exports.SMITHY_CONTEXT_KEY = SMITHY_CONTEXT_KEY;
  exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
  exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
});

export { require_dist_cjs };
