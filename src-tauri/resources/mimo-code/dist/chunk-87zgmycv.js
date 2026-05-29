// @bun
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-6vqkv5g7.js";
import {
  require_dist_cjs
} from "./chunk-27an25fd.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+node-config-provider@4.3.14/node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs3 = __commonJS((exports) => {
  var propertyProvider = require_dist_cjs();
  var sharedIniFileLoader = require_dist_cjs2();
  function getSelectorName(functionString) {
    try {
      const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
      constants.delete("CONFIG");
      constants.delete("CONFIG_PREFIX_SEPARATOR");
      constants.delete("ENV");
      return [...constants].join(", ");
    } catch (e) {
      return functionString;
    }
  }
  var fromEnv = (envVarSelector, options) => async () => {
    try {
      const config = envVarSelector(process.env, options);
      if (config === undefined) {
        throw new Error;
      }
      return config;
    } catch (e) {
      throw new propertyProvider.CredentialsProviderError(e.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: options?.logger });
    }
  };
  var fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = sharedIniFileLoader.getProfileName(init);
    const { configFile, credentialsFile } = await sharedIniFileLoader.loadSharedConfigFiles(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
    try {
      const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
      const configValue = configSelector(mergedProfile, cfgFile);
      if (configValue === undefined) {
        throw new Error;
      }
      return configValue;
    } catch (e) {
      throw new propertyProvider.CredentialsProviderError(e.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
    }
  };
  var isFunction = (func) => typeof func === "function";
  var fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : propertyProvider.fromStatic(defaultValue);
  var loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
    const { signingName, logger } = configuration;
    const envOptions = { signingName, logger };
    return propertyProvider.memoize(propertyProvider.chain(fromEnv(environmentVariableSelector, envOptions), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));
  };
  exports.loadConfig = loadConfig;
});

export { require_dist_cjs3 as require_dist_cjs };
