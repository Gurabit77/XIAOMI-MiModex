// @bun
import {
  require_protocols,
  require_schema,
  require_serde
} from "./chunk-6qkspz0q.js";
import {
  require_dist_cjs
} from "./chunk-tp6bgx9r.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+middleware-stack@4.2.14/node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports) => {
  var getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
      _aliases.push(name);
    }
    if (aliases) {
      for (const alias of aliases) {
        _aliases.push(alias);
      }
    }
    return _aliases;
  };
  var getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
  };
  var constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set;
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        const aliases = getAllAliases(entry.name, entry.aliases);
        if (aliases.includes(toRemove)) {
          isRemoved = true;
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const removeByReference = (toRemove) => {
      let isRemoved = false;
      const filterCb = (entry) => {
        if (entry.middleware === toRemove) {
          isRemoved = true;
          for (const alias of getAllAliases(entry.name, entry.aliases)) {
            entriesNameSet.delete(alias);
          }
          return false;
        }
        return true;
      };
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    };
    const cloneTo = (toStack) => {
      absoluteEntries.forEach((entry) => {
        toStack.add(entry.middleware, { ...entry });
      });
      relativeEntries.forEach((entry) => {
        toStack.addRelativeTo(entry.middleware, { ...entry });
      });
      toStack.identifyOnResolve?.(stack.identifyOnResolve());
      return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
      const expandedMiddlewareList = [];
      from.before.forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      expandedMiddlewareList.push(from);
      from.after.reverse().forEach((entry) => {
        if (entry.before.length === 0 && entry.after.length === 0) {
          expandedMiddlewareList.push(entry);
        } else {
          expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
        }
      });
      return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
      const normalizedAbsoluteEntries = [];
      const normalizedRelativeEntries = [];
      const normalizedEntriesNameMap = {};
      absoluteEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedAbsoluteEntries.push(normalizedEntry);
      });
      relativeEntries.forEach((entry) => {
        const normalizedEntry = {
          ...entry,
          before: [],
          after: []
        };
        for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
          normalizedEntriesNameMap[alias] = normalizedEntry;
        }
        normalizedRelativeEntries.push(normalizedEntry);
      });
      normalizedRelativeEntries.forEach((entry) => {
        if (entry.toMiddleware) {
          const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
          if (toMiddleware === undefined) {
            if (debug) {
              return;
            }
            throw new Error(`${entry.toMiddleware} is not found when adding ` + `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` + `middleware ${entry.relation} ${entry.toMiddleware}`);
          }
          if (entry.relation === "after") {
            toMiddleware.after.push(entry);
          }
          if (entry.relation === "before") {
            toMiddleware.before.push(entry);
          }
        }
      });
      const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
        wholeList.push(...expandedMiddlewareList);
        return wholeList;
      }, []);
      return mainChain;
    };
    const stack = {
      add: (middleware, options = {}) => {
        const { name, override, aliases: _aliases } = options;
        const entry = {
          step: "initialize",
          priority: "normal",
          middleware,
          ...options
        };
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = absoluteEntries[toOverrideIndex];
              if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` + `${toOverride.priority} priority in ${toOverride.step} step cannot ` + `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` + `${entry.priority} priority in ${entry.step} step.`);
              }
              absoluteEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        absoluteEntries.push(entry);
      },
      addRelativeTo: (middleware, options) => {
        const { name, override, aliases: _aliases } = options;
        const entry = {
          middleware,
          ...options
        };
        const aliases = getAllAliases(name, _aliases);
        if (aliases.length > 0) {
          if (aliases.some((alias) => entriesNameSet.has(alias))) {
            if (!override)
              throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
            for (const alias of aliases) {
              const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a) => a === alias));
              if (toOverrideIndex === -1) {
                continue;
              }
              const toOverride = relativeEntries[toOverrideIndex];
              if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` + `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` + `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` + `"${entry.toMiddleware}" middleware.`);
              }
              relativeEntries.splice(toOverrideIndex, 1);
            }
          }
          for (const alias of aliases) {
            entriesNameSet.add(alias);
          }
        }
        relativeEntries.push(entry);
      },
      clone: () => cloneTo(constructStack()),
      use: (plugin) => {
        plugin.applyToStack(stack);
      },
      remove: (toRemove) => {
        if (typeof toRemove === "string")
          return removeByName(toRemove);
        else
          return removeByReference(toRemove);
      },
      removeByTag: (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
          const { tags, name, aliases: _aliases } = entry;
          if (tags && tags.includes(toRemove)) {
            const aliases = getAllAliases(name, _aliases);
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            isRemoved = true;
            return false;
          }
          return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      },
      concat: (from) => {
        const cloned = cloneTo(constructStack());
        cloned.use(from);
        cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
        return cloned;
      },
      applyToStack: cloneTo,
      identify: () => {
        return getMiddlewareList(true).map((mw) => {
          const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
          return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
        });
      },
      identifyOnResolve(toggle) {
        if (typeof toggle === "boolean")
          identifyOnResolve = toggle;
        return identifyOnResolve;
      },
      resolve: (handler, context) => {
        for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
          handler = middleware(handler, context);
        }
        if (identifyOnResolve) {
          console.log(stack.identify());
        }
        return handler;
      }
    };
    return stack;
  };
  var stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
  };
  var priorityWeights = {
    high: 3,
    normal: 2,
    low: 1
  };
  exports.constructStack = constructStack;
});

// node_modules/.bun/@smithy+smithy-client@4.12.13/node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs3 = __commonJS((exports) => {
  var middlewareStack = require_dist_cjs2();
  var types = require_dist_cjs();
  var schema = require_schema();
  var serde = require_serde();
  var protocols = require_protocols();

  class Client {
    config;
    middlewareStack = middlewareStack.constructStack();
    initConfig;
    handlers;
    constructor(config) {
      this.config = config;
      const { protocol, protocolSettings } = config;
      if (protocolSettings) {
        if (typeof protocol === "function") {
          config.protocol = new protocol(protocolSettings);
        }
      }
    }
    send(command, optionsOrCb, cb) {
      const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
      const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
      const useHandlerCache = options === undefined && this.config.cacheMiddleware === true;
      let handler;
      if (useHandlerCache) {
        if (!this.handlers) {
          this.handlers = new WeakMap;
        }
        const handlers = this.handlers;
        if (handlers.has(command.constructor)) {
          handler = handlers.get(command.constructor);
        } else {
          handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          handlers.set(command.constructor, handler);
        }
      } else {
        delete this.handlers;
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
      }
      if (callback) {
        handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {});
      } else {
        return handler(command).then((result) => result.output);
      }
    }
    destroy() {
      this.config?.requestHandler?.destroy?.();
      delete this.handlers;
    }
  }
  var SENSITIVE_STRING$1 = "***SensitiveInformation***";
  function schemaLogFilter(schema$1, data) {
    if (data == null) {
      return data;
    }
    const ns = schema.NormalizedSchema.of(schema$1);
    if (ns.getMergedTraits().sensitive) {
      return SENSITIVE_STRING$1;
    }
    if (ns.isListSchema()) {
      const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
      if (isSensitive) {
        return SENSITIVE_STRING$1;
      }
    } else if (ns.isMapSchema()) {
      const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
      if (isSensitive) {
        return SENSITIVE_STRING$1;
      }
    } else if (ns.isStructSchema() && typeof data === "object") {
      const object = data;
      const newObject = {};
      for (const [member, memberNs] of ns.structIterator()) {
        if (object[member] != null) {
          newObject[member] = schemaLogFilter(memberNs, object[member]);
        }
      }
      return newObject;
    }
    return data;
  }

  class Command {
    middlewareStack = middlewareStack.constructStack();
    schema;
    static classBuilder() {
      return new ClassBuilder;
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
      for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
        this.middlewareStack.use(mw);
      }
      const stack = clientStack.concat(this.middlewareStack);
      const { logger } = configuration;
      const handlerExecutionContext = {
        logger,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        [types.SMITHY_CONTEXT_KEY]: {
          commandInstance: this,
          ...smithyContext
        },
        ...additionalContext
      };
      const { requestHandler } = configuration;
      let requestOptions = options ?? {};
      if (smithyContext.eventStream) {
        requestOptions = {
          isEventStream: true,
          ...requestOptions
        };
      }
      return stack.resolve((request) => requestHandler.handle(request.request, requestOptions), handlerExecutionContext);
    }
  }

  class ClassBuilder {
    _init = () => {};
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = undefined;
    _outputFilterSensitiveLog = undefined;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(cb) {
      this._init = cb;
    }
    ep(endpointParameterInstructions) {
      this._ep = endpointParameterInstructions;
      return this;
    }
    m(middlewareSupplier) {
      this._middlewareFn = middlewareSupplier;
      return this;
    }
    s(service, operation, smithyContext = {}) {
      this._smithyContext = {
        service,
        operation,
        ...smithyContext
      };
      return this;
    }
    c(additionalContext = {}) {
      this._additionalContext = additionalContext;
      return this;
    }
    n(clientName, commandName) {
      this._clientName = clientName;
      this._commandName = commandName;
      return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
      this._inputFilterSensitiveLog = inputFilter;
      this._outputFilterSensitiveLog = outputFilter;
      return this;
    }
    ser(serializer) {
      this._serializer = serializer;
      return this;
    }
    de(deserializer) {
      this._deserializer = deserializer;
      return this;
    }
    sc(operation) {
      this._operationSchema = operation;
      this._smithyContext.operationSchema = operation;
      return this;
    }
    build() {
      const closure = this;
      let CommandRef;
      return CommandRef = class extends Command {
        input;
        static getEndpointParameterInstructions() {
          return closure._ep;
        }
        constructor(...[input]) {
          super();
          this.input = input ?? {};
          closure._init(this);
          this.schema = closure._operationSchema;
        }
        resolveMiddleware(stack, configuration, options) {
          const op = closure._operationSchema;
          const input = op?.[4] ?? op?.input;
          const output = op?.[5] ?? op?.output;
          return this.resolveMiddlewareWithContext(stack, configuration, options, {
            CommandCtor: CommandRef,
            middlewareFn: closure._middlewareFn,
            clientName: closure._clientName,
            commandName: closure._commandName,
            inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
            outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
            smithyContext: closure._smithyContext,
            additionalContext: closure._additionalContext
          });
        }
        serialize = closure._serializer;
        deserialize = closure._deserializer;
      };
    }
  }
  var SENSITIVE_STRING = "***SensitiveInformation***";
  var createAggregatedClient = (commands, Client2, options) => {
    for (const [command, CommandCtor] of Object.entries(commands)) {
      const methodImpl = async function(args, optionsOrCb, cb) {
        const command2 = new CommandCtor(args);
        if (typeof optionsOrCb === "function") {
          this.send(command2, optionsOrCb);
        } else if (typeof cb === "function") {
          if (typeof optionsOrCb !== "object")
            throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
          this.send(command2, optionsOrCb || {}, cb);
        } else {
          return this.send(command2, optionsOrCb);
        }
      };
      const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
      Client2.prototype[methodName] = methodImpl;
    }
    const { paginators = {}, waiters = {} } = options ?? {};
    for (const [paginatorName, paginatorFn] of Object.entries(paginators)) {
      if (Client2.prototype[paginatorName] === undefined) {
        Client2.prototype[paginatorName] = function(commandInput = {}, paginationConfiguration, ...rest) {
          return paginatorFn({
            ...paginationConfiguration,
            client: this
          }, commandInput, ...rest);
        };
      }
    }
    for (const [waiterName, waiterFn] of Object.entries(waiters)) {
      if (Client2.prototype[waiterName] === undefined) {
        Client2.prototype[waiterName] = async function(commandInput = {}, waiterConfiguration, ...rest) {
          let config = waiterConfiguration;
          if (typeof waiterConfiguration === "number") {
            config = {
              maxWaitTime: waiterConfiguration
            };
          }
          return waiterFn({
            ...config,
            client: this
          }, commandInput, ...rest);
        };
      }
    }
  };

  class ServiceException extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(options) {
      super(options.message);
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
      this.name = options.name;
      this.$fault = options.$fault;
      this.$metadata = options.$metadata;
    }
    static isInstance(value) {
      if (!value)
        return false;
      const candidate = value;
      return ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
    }
    static [Symbol.hasInstance](instance) {
      if (!instance)
        return false;
      const candidate = instance;
      if (this === ServiceException) {
        return ServiceException.isInstance(instance);
      }
      if (ServiceException.isInstance(instance)) {
        if (candidate.name && this.name) {
          return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
        }
        return this.prototype.isPrototypeOf(instance);
      }
      return false;
    }
  }
  var decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions).filter(([, v]) => v !== undefined).forEach(([k, v]) => {
      if (exception[k] == undefined || exception[k] === "") {
        exception[k] = v;
      }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
  };
  var throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
      name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
      $fault: "client",
      $metadata
    });
    throw decorateServiceException(response, parsedBody);
  };
  var withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
      throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
  };
  var deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  });
  var loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
      case "standard":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "in-region":
        return {
          retryMode: "standard",
          connectionTimeout: 1100
        };
      case "cross-region":
        return {
          retryMode: "standard",
          connectionTimeout: 3100
        };
      case "mobile":
        return {
          retryMode: "standard",
          connectionTimeout: 30000
        };
      default:
        return {};
    }
  };
  var warningEmitted = false;
  var emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
      warningEmitted = true;
    }
  };
  var knownAlgorithms = Object.values(types.AlgorithmId);
  var getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in types.AlgorithmId) {
      const algorithmId = types.AlgorithmId[id];
      if (runtimeConfig[algorithmId] === undefined) {
        continue;
      }
      checksumAlgorithms.push({
        algorithmId: () => algorithmId,
        checksumConstructor: () => runtimeConfig[algorithmId]
      });
    }
    for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
      checksumAlgorithms.push({
        algorithmId: () => id,
        checksumConstructor: () => ChecksumCtor
      });
    }
    return {
      addChecksumAlgorithm(algo) {
        runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
        const id = algo.algorithmId();
        const ctor = algo.checksumConstructor();
        if (knownAlgorithms.includes(id)) {
          runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
        } else {
          runtimeConfig.checksumAlgorithms[id] = ctor;
        }
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
      const id = checksumAlgorithm.algorithmId();
      if (knownAlgorithms.includes(id)) {
        runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
      }
    });
    return runtimeConfig;
  };
  var getRetryConfiguration = (runtimeConfig) => {
    return {
      setRetryStrategy(retryStrategy) {
        runtimeConfig.retryStrategy = retryStrategy;
      },
      retryStrategy() {
        return runtimeConfig.retryStrategy;
      }
    };
  };
  var resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
  };
  var getDefaultExtensionConfiguration = (runtimeConfig) => {
    return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
  };
  var getDefaultClientConfiguration = getDefaultExtensionConfiguration;
  var resolveDefaultRuntimeConfig = (config) => {
    return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
  };
  var getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];
  var getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
        obj[key] = obj[key][textNodeName];
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        obj[key] = getValueFromTextNode(obj[key]);
      }
    }
    return obj;
  };
  var isSerializableHeaderValue = (value) => {
    return value != null;
  };

  class NoOpLogger {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
      target = {};
      instructions = arg0;
    } else {
      target = arg0;
      if (typeof arg1 === "function") {
        filter = arg1;
        instructions = arg2;
        return mapWithFilter(target, filter, instructions);
      } else {
        instructions = arg1;
      }
    }
    for (const key of Object.keys(instructions)) {
      if (!Array.isArray(instructions[key])) {
        target[key] = instructions[key];
        continue;
      }
      applyInstruction(target, null, instructions, key);
    }
    return target;
  }
  var convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
      output[k] = [, v];
    }
    return output;
  };
  var take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
      applyInstruction(out, source, instructions, key);
    }
    return out;
  };
  var mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
      if (Array.isArray(value)) {
        _instructions[key] = value;
      } else {
        if (typeof value === "function") {
          _instructions[key] = [filter, value()];
        } else {
          _instructions[key] = [filter, value];
        }
      }
      return _instructions;
    }, {}));
  };
  var applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
      let instruction = instructions[targetKey];
      if (typeof instruction === "function") {
        instruction = [, instruction];
      }
      const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
      if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
        target[targetKey] = valueFn(source[sourceKey]);
      }
      return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
      let _value;
      const defaultFilterPassed = filter === undefined && (_value = value()) != null;
      const customFilterPassed = typeof filter === "function" && !!filter(undefined) || typeof filter !== "function" && !!filter;
      if (defaultFilterPassed) {
        target[targetKey] = _value;
      } else if (customFilterPassed) {
        target[targetKey] = value();
      }
    } else {
      const defaultFilterPassed = filter === undefined && value != null;
      const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
      if (defaultFilterPassed || customFilterPassed) {
        target[targetKey] = value;
      }
    }
  };
  var nonNullish = (_) => _ != null;
  var pass = (_) => _;
  var serializeFloat = (value) => {
    if (value !== value) {
      return "NaN";
    }
    switch (value) {
      case Infinity:
        return "Infinity";
      case -Infinity:
        return "-Infinity";
      default:
        return value;
    }
  };
  var serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");
  var _json = (obj) => {
    if (obj == null) {
      return {};
    }
    if (Array.isArray(obj)) {
      return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
      const target = {};
      for (const key of Object.keys(obj)) {
        if (obj[key] == null) {
          continue;
        }
        target[key] = _json(obj[key]);
      }
      return target;
    }
    return obj;
  };
  exports.collectBody = protocols.collectBody;
  exports.extendedEncodeURIComponent = protocols.extendedEncodeURIComponent;
  exports.resolvedPath = protocols.resolvedPath;
  exports.Client = Client;
  exports.Command = Command;
  exports.NoOpLogger = NoOpLogger;
  exports.SENSITIVE_STRING = SENSITIVE_STRING;
  exports.ServiceException = ServiceException;
  exports._json = _json;
  exports.convertMap = convertMap;
  exports.createAggregatedClient = createAggregatedClient;
  exports.decorateServiceException = decorateServiceException;
  exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
  exports.getArrayIfSingleItem = getArrayIfSingleItem;
  exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
  exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
  exports.getValueFromTextNode = getValueFromTextNode;
  exports.isSerializableHeaderValue = isSerializableHeaderValue;
  exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;
  exports.map = map;
  exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
  exports.serializeDateTime = serializeDateTime;
  exports.serializeFloat = serializeFloat;
  exports.take = take;
  exports.throwDefaultError = throwDefaultError;
  exports.withBaseException = withBaseException;
  Object.prototype.hasOwnProperty.call(serde, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: serde["__proto__"]
  });
  Object.keys(serde).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = serde[k];
  });
});

export { require_dist_cjs3 as require_dist_cjs };
