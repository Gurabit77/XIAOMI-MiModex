// @bun
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-7vfjvamn.js";
import {
  require_dist_cjs
} from "./chunk-tp6bgx9r.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+util-config-provider@4.2.2/node_modules/@smithy/util-config-provider/dist-cjs/index.js
var require_dist_cjs3 = __commonJS((exports) => {
  var booleanSelector = (obj, key, type) => {
    if (!(key in obj))
      return;
    if (obj[key] === "true")
      return true;
    if (obj[key] === "false")
      return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
  };
  var numberSelector = (obj, key, type) => {
    if (!(key in obj))
      return;
    const numberValue = parseInt(obj[key], 10);
    if (Number.isNaN(numberValue)) {
      throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
    }
    return numberValue;
  };
  exports.SelectorType = undefined;
  (function(SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
  })(exports.SelectorType || (exports.SelectorType = {}));
  exports.booleanSelector = booleanSelector;
  exports.numberSelector = numberSelector;
});

// node_modules/.bun/@smithy+util-endpoints@3.4.2/node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs4 = __commonJS((exports) => {
  var types = require_dist_cjs();

  class BinaryDecisionDiagram {
    nodes;
    root;
    conditions;
    results;
    constructor(bdd, root, conditions, results) {
      this.nodes = bdd;
      this.root = root;
      this.conditions = conditions;
      this.results = results;
    }
    static from(bdd, root, conditions, results) {
      return new BinaryDecisionDiagram(bdd, root, conditions, results);
    }
  }

  class EndpointCache {
    capacity;
    data = new Map;
    parameters = [];
    constructor({ size, params }) {
      this.capacity = size ?? 50;
      if (params) {
        this.parameters = params;
      }
    }
    get(endpointParams, resolver) {
      const key = this.hash(endpointParams);
      if (key === false) {
        return resolver();
      }
      if (!this.data.has(key)) {
        if (this.data.size > this.capacity + 10) {
          const keys = this.data.keys();
          let i = 0;
          while (true) {
            const { value, done } = keys.next();
            this.data.delete(value);
            if (done || ++i > 10) {
              break;
            }
          }
        }
        this.data.set(key, resolver());
      }
      return this.data.get(key);
    }
    size() {
      return this.data.size;
    }
    hash(endpointParams) {
      let buffer = "";
      const { parameters } = this;
      if (parameters.length === 0) {
        return false;
      }
      for (const param of parameters) {
        const val = String(endpointParams[param] ?? "");
        if (val.includes("|;")) {
          return false;
        }
        buffer += val + "|;";
      }
      return buffer;
    }
  }

  class EndpointError extends Error {
    constructor(message) {
      super(message);
      this.name = "EndpointError";
    }
  }
  var debugId = "endpoints";
  function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
      return input;
    }
    if ("ref" in input) {
      return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
      return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
  }
  var customEndpointFunctions = {};
  var booleanEquals = (value1, value2) => value1 === value2;
  function coalesce(...args) {
    for (const arg of args) {
      if (arg != null) {
        return arg;
      }
    }
    return;
  }
  var getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
      const squareBracketIndex = part.indexOf("[");
      if (squareBracketIndex !== -1) {
        if (part.indexOf("]") !== part.length - 1) {
          throw new EndpointError(`Path: '${path}' does not end with ']'`);
        }
        const arrayIndex = part.slice(squareBracketIndex + 1, -1);
        if (Number.isNaN(parseInt(arrayIndex))) {
          throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
        }
        if (squareBracketIndex !== 0) {
          pathList.push(part.slice(0, squareBracketIndex));
        }
        pathList.push(arrayIndex);
      } else {
        pathList.push(part);
      }
    }
    return pathList;
  };
  var getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
      throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    } else if (Array.isArray(acc)) {
      const i = parseInt(index);
      return acc[i < 0 ? acc.length + i : i];
    }
    return acc[index];
  }, value);
  var isSet = (value) => value != null;
  var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
  var isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
      return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
      if (!isValidHostLabel(label)) {
        return false;
      }
    }
    return true;
  };
  function ite(condition, trueValue, falseValue) {
    return condition ? trueValue : falseValue;
  }
  var not = (value) => !value;
  var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
  var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
  var DEFAULT_PORTS = {
    [types.EndpointURLScheme.HTTP]: 80,
    [types.EndpointURLScheme.HTTPS]: 443
  };
  var parseURL = (value) => {
    const whatwgURL = (() => {
      try {
        if (value instanceof URL) {
          return value;
        }
        if (typeof value === "object" && "hostname" in value) {
          const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
          const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
          url.search = Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&");
          return url;
        }
        return new URL(value);
      } catch (error) {
        return null;
      }
    })();
    if (!whatwgURL) {
      console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
      return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
      return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(types.EndpointURLScheme).includes(scheme)) {
      return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
      scheme,
      authority,
      path: pathname,
      normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
      isIp
    };
  };
  function split(value, delimiter, limit) {
    if (limit === 1) {
      return [value];
    }
    if (value === "") {
      return [""];
    }
    const parts = value.split(delimiter);
    if (limit === 0) {
      return parts;
    }
    return parts.slice(0, limit - 1).concat(parts.slice(1).join(delimiter));
  }
  var stringEquals = (value1, value2) => value1 === value2;
  var substring = (input, start, stop, reverse) => {
    if (input == null || start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
      return null;
    }
    if (!reverse) {
      return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
  };
  var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
  var endpointFunctions = {
    booleanEquals,
    coalesce,
    getAttr,
    isSet,
    isValidHostLabel,
    ite,
    not,
    parseURL,
    split,
    stringEquals,
    substring,
    uriEncode
  };
  var evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const { referenceRecord, endpointParams } = options;
    let currentIndex = 0;
    while (currentIndex < template.length) {
      const openingBraceIndex = template.indexOf("{", currentIndex);
      if (openingBraceIndex === -1) {
        evaluatedTemplateArr.push(template.slice(currentIndex));
        break;
      }
      evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
      const closingBraceIndex = template.indexOf("}", openingBraceIndex);
      if (closingBraceIndex === -1) {
        evaluatedTemplateArr.push(template.slice(openingBraceIndex));
        break;
      }
      if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
        evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
        currentIndex = closingBraceIndex + 2;
      }
      const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
      if (parameterName.includes("#")) {
        const [refName, attrName] = parameterName.split("#");
        evaluatedTemplateArr.push(getAttr(referenceRecord[refName] ?? endpointParams[refName], attrName));
      } else {
        evaluatedTemplateArr.push(referenceRecord[parameterName] ?? endpointParams[parameterName]);
      }
      currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
  };
  var getReferenceValue = ({ ref }, options) => {
    return options.referenceRecord[ref] ?? options.endpointParams[ref];
  };
  var evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
      return evaluateTemplate(obj, options);
    } else if (obj["fn"]) {
      return group$2.callFunction(obj, options);
    } else if (obj["ref"]) {
      return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
  };
  var callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = Array(argv.length);
    for (let i = 0;i < evaluatedArgs.length; ++i) {
      const arg = argv[i];
      if (typeof arg === "boolean" || typeof arg === "number") {
        evaluatedArgs[i] = arg;
      } else {
        evaluatedArgs[i] = group$2.evaluateExpression(arg, "arg", options);
      }
    }
    const namespaceSeparatorIndex = fn.indexOf(".");
    if (namespaceSeparatorIndex !== -1) {
      const namespaceFunctions = customEndpointFunctions[fn.slice(0, namespaceSeparatorIndex)];
      const customFunction = namespaceFunctions?.[fn.slice(namespaceSeparatorIndex + 1)];
      if (typeof customFunction === "function") {
        return customFunction(...evaluatedArgs);
      }
    }
    const callable = endpointFunctions[fn];
    if (typeof callable === "function") {
      return callable(...evaluatedArgs);
    }
    throw new Error(`function ${fn} not loaded in endpointFunctions.`);
  };
  var group$2 = {
    evaluateExpression,
    callFunction
  };
  var evaluateCondition = (condition, options) => {
    const { assign } = condition;
    if (assign && assign in options.referenceRecord) {
      throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(condition, options);
    options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(condition)} = ${toDebugString(value)}`);
    const result = value === "" ? true : !!value;
    if (assign != null) {
      return { result, toAssign: { name: assign, value } };
    }
    return { result };
  };
  var getEndpointHeaders = (headers, options) => Object.entries(headers ?? {}).reduce((acc, [headerKey, headerVal]) => {
    acc[headerKey] = headerVal.map((headerValEntry) => {
      const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
      if (typeof processedExpr !== "string") {
        throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
      }
      return processedExpr;
    });
    return acc;
  }, {});
  var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => {
    acc[propertyKey] = group$1.getEndpointProperty(propertyVal, options);
    return acc;
  }, {});
  var getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
      return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
      case "string":
        return evaluateTemplate(property, options);
      case "object":
        if (property === null) {
          throw new EndpointError(`Unexpected endpoint property: ${property}`);
        }
        return group$1.getEndpointProperties(property, options);
      case "boolean":
        return property;
      default:
        throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
  };
  var group$1 = {
    getEndpointProperty,
    getEndpointProperties
  };
  var getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
      try {
        return new URL(expression);
      } catch (error) {
        console.error(`Failed to construct URL with ${expression}`, error);
        throw error;
      }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
  };
  var RESULT = 1e8;
  var decideEndpoint = (bdd, options) => {
    const { nodes, root, results, conditions } = bdd;
    let ref = root;
    const referenceRecord = {};
    const closure = {
      referenceRecord,
      endpointParams: options.endpointParams,
      logger: options.logger
    };
    while (ref !== 1 && ref !== -1 && ref < RESULT) {
      const node_i = 3 * (Math.abs(ref) - 1);
      const [condition_i, highRef, lowRef] = [nodes[node_i], nodes[node_i + 1], nodes[node_i + 2]];
      const [fn, argv, assign] = conditions[condition_i];
      const evaluation = evaluateCondition({ fn, assign, argv }, closure);
      if (evaluation.toAssign) {
        const { name, value } = evaluation.toAssign;
        referenceRecord[name] = value;
      }
      ref = ref >= 0 === evaluation.result ? highRef : lowRef;
    }
    if (ref >= RESULT) {
      const result = results[ref - RESULT];
      if (result[0] === -1) {
        const [, errorExpression] = result;
        throw new EndpointError(evaluateExpression(errorExpression, "Error", closure));
      }
      const [url, properties, headers] = result;
      return {
        url: getEndpointUrl(url, closure),
        properties: getEndpointProperties(properties, closure),
        headers: getEndpointHeaders(headers ?? {}, closure)
      };
    }
    throw new EndpointError(`No matching endpoint.`);
  };
  var evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    const conditionOptions = {
      ...options,
      referenceRecord: { ...options.referenceRecord }
    };
    let didAssign = false;
    for (const condition of conditions) {
      const { result, toAssign } = evaluateCondition(condition, conditionOptions);
      if (!result) {
        return { result };
      }
      if (toAssign) {
        didAssign = true;
        conditionsReferenceRecord[toAssign.name] = toAssign.value;
        conditionOptions.referenceRecord[toAssign.name] = toAssign.value;
        options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
      }
    }
    if (didAssign) {
      return { result: true, referenceRecord: conditionsReferenceRecord };
    }
    return { result: true };
  };
  var evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
      return;
    }
    const endpointRuleOptions = referenceRecord ? {
      ...options,
      referenceRecord: { ...options.referenceRecord, ...referenceRecord }
    } : options;
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
    const endpointToReturn = { url: getEndpointUrl(url, endpointRuleOptions) };
    if (headers != null) {
      endpointToReturn.headers = getEndpointHeaders(headers, endpointRuleOptions);
    }
    if (properties != null) {
      endpointToReturn.properties = getEndpointProperties(properties, endpointRuleOptions);
    }
    return endpointToReturn;
  };
  var evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
      return;
    }
    const errorRuleOptions = referenceRecord ? {
      ...options,
      referenceRecord: { ...options.referenceRecord, ...referenceRecord }
    } : options;
    throw new EndpointError(evaluateExpression(error, "Error", errorRuleOptions));
  };
  var evaluateRules = (rules, options) => {
    for (const rule of rules) {
      if (rule.type === "endpoint") {
        const endpointOrUndefined = evaluateEndpointRule(rule, options);
        if (endpointOrUndefined) {
          return endpointOrUndefined;
        }
      } else if (rule.type === "error") {
        evaluateErrorRule(rule, options);
      } else if (rule.type === "tree") {
        const endpointOrUndefined = group.evaluateTreeRule(rule, options);
        if (endpointOrUndefined) {
          return endpointOrUndefined;
        }
      } else {
        throw new EndpointError(`Unknown endpoint rule: ${rule}`);
      }
    }
    throw new EndpointError(`Rules evaluation failed`);
  };
  var evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
      return;
    }
    const treeRuleOptions = referenceRecord ? { ...options, referenceRecord: { ...options.referenceRecord, ...referenceRecord } } : options;
    return group.evaluateRules(rules, treeRuleOptions);
  };
  var group = {
    evaluateRules,
    evaluateTreeRule
  };
  var resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    for (const paramKey in parameters) {
      const parameter = parameters[paramKey];
      const endpointParam = endpointParams[paramKey];
      if (endpointParam == null && parameter.default != null) {
        endpointParams[paramKey] = parameter.default;
        continue;
      }
      if (parameter.required && endpointParam == null) {
        throw new EndpointError(`Missing required parameter: '${paramKey}'`);
      }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
  };
  exports.BinaryDecisionDiagram = BinaryDecisionDiagram;
  exports.EndpointCache = EndpointCache;
  exports.EndpointError = EndpointError;
  exports.customEndpointFunctions = customEndpointFunctions;
  exports.decideEndpoint = decideEndpoint;
  exports.isIpAddress = isIpAddress;
  exports.isValidHostLabel = isValidHostLabel;
  exports.resolveEndpoint = resolveEndpoint;
});

// node_modules/.bun/@smithy+config-resolver@4.4.17/node_modules/@smithy/config-resolver/dist-cjs/index.js
var require_dist_cjs5 = __commonJS((exports) => {
  var utilConfigProvider = require_dist_cjs3();
  var utilMiddleware = require_dist_cjs2();
  var utilEndpoints = require_dist_cjs4();
  var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
  var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
  var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
  var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: false
  };
  var nodeDualstackConfigSelectors = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: undefined
  };
  var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
  var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
  var DEFAULT_USE_FIPS_ENDPOINT = false;
  var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: false
  };
  var nodeFipsConfigSelectors = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: undefined
  };
  var resolveCustomEndpointsConfig = (input) => {
    const { tls, endpoint, urlParser, useDualstackEndpoint } = input;
    return Object.assign(input, {
      tls: tls ?? true,
      endpoint: utilMiddleware.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
      isCustomEndpoint: true,
      useDualstackEndpoint: utilMiddleware.normalizeProvider(useDualstackEndpoint ?? false)
    });
  };
  var getEndpointFromRegion = async (input) => {
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
      throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }) ?? {};
    if (!hostname) {
      throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
  };
  var resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = utilMiddleware.normalizeProvider(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser, tls } = input;
    return Object.assign(input, {
      tls: tls ?? true,
      endpoint: endpoint ? utilMiddleware.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
      isCustomEndpoint: !!endpoint,
      useDualstackEndpoint
    });
  };
  var REGION_ENV_NAME = "AWS_REGION";
  var REGION_INI_NAME = "region";
  var NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
      throw new Error("Region is missing");
    }
  };
  var NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials"
  };
  var validRegions = new Set;
  var checkRegion = (region, check = utilEndpoints.isValidHostLabel) => {
    if (!validRegions.has(region) && !check(region)) {
      if (region === "*") {
        console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
      } else {
        throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
      }
    } else {
      validRegions.add(region);
    }
  };
  var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
  var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
  var resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
      throw new Error("Region is missing");
    }
    return Object.assign(input, {
      region: async () => {
        const providedRegion = typeof region === "function" ? await region() : region;
        const realRegion = getRealRegion(providedRegion);
        checkRegion(realRegion);
        return realRegion;
      },
      useFipsEndpoint: async () => {
        const providedRegion = typeof region === "string" ? region : await region();
        if (isFipsRegion(providedRegion)) {
          return true;
        }
        return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
      }
    });
  };
  var getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;
  var getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", resolvedRegion) : undefined;
  var getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
  var getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
      return signingRegion;
    } else if (useFipsEndpoint) {
      const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
      const regionRegexmatchArray = hostname.match(regionRegexJs);
      if (regionRegexmatchArray) {
        return regionRegexmatchArray[0].slice(1, -1);
      }
    }
  };
  var getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash }) => {
    const partition = getResolvedPartition(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
    const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
    const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
      throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = getResolvedSigningRegion(hostname, {
      signingRegion: regionHash[resolvedRegion]?.signingRegion,
      regionRegex: partitionHash[partition].regionRegex,
      useFipsEndpoint
    });
    return {
      partition,
      signingService,
      hostname,
      ...signingRegion && { signingRegion },
      ...regionHash[resolvedRegion]?.signingService && {
        signingService: regionHash[resolvedRegion].signingService
      }
    };
  };
  exports.CONFIG_USE_DUALSTACK_ENDPOINT = CONFIG_USE_DUALSTACK_ENDPOINT;
  exports.CONFIG_USE_FIPS_ENDPOINT = CONFIG_USE_FIPS_ENDPOINT;
  exports.DEFAULT_USE_DUALSTACK_ENDPOINT = DEFAULT_USE_DUALSTACK_ENDPOINT;
  exports.DEFAULT_USE_FIPS_ENDPOINT = DEFAULT_USE_FIPS_ENDPOINT;
  exports.ENV_USE_DUALSTACK_ENDPOINT = ENV_USE_DUALSTACK_ENDPOINT;
  exports.ENV_USE_FIPS_ENDPOINT = ENV_USE_FIPS_ENDPOINT;
  exports.NODE_REGION_CONFIG_FILE_OPTIONS = NODE_REGION_CONFIG_FILE_OPTIONS;
  exports.NODE_REGION_CONFIG_OPTIONS = NODE_REGION_CONFIG_OPTIONS;
  exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
  exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
  exports.REGION_ENV_NAME = REGION_ENV_NAME;
  exports.REGION_INI_NAME = REGION_INI_NAME;
  exports.getRegionInfo = getRegionInfo;
  exports.nodeDualstackConfigSelectors = nodeDualstackConfigSelectors;
  exports.nodeFipsConfigSelectors = nodeFipsConfigSelectors;
  exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;
  exports.resolveEndpointsConfig = resolveEndpointsConfig;
  exports.resolveRegionConfig = resolveRegionConfig;
});

export { require_dist_cjs4 as require_dist_cjs, require_dist_cjs3 as require_dist_cjs1, require_dist_cjs5 as require_dist_cjs2 };
