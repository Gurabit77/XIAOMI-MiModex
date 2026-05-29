// @bun
import {
  require_dist_cjs
} from "./chunk-tp6bgx9r.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+shared-ini-file-loader@4.4.9/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js
var require_getHomeDir = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getHomeDir = undefined;
  var os_1 = __require("os");
  var path_1 = __require("path");
  var homeDirCache = {};
  var getHomeDirCacheKey = () => {
    if (process && process.geteuid) {
      return `${process.geteuid()}`;
    }
    return "DEFAULT";
  };
  var getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
    if (HOME)
      return HOME;
    if (USERPROFILE)
      return USERPROFILE;
    if (HOMEPATH)
      return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey])
      homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
    return homeDirCache[homeDirCacheKey];
  };
  exports.getHomeDir = getHomeDir;
});

// node_modules/.bun/@smithy+shared-ini-file-loader@4.4.9/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js
var require_getSSOTokenFilepath = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSSOTokenFilepath = undefined;
  var crypto_1 = __require("crypto");
  var path_1 = __require("path");
  var getHomeDir_1 = require_getHomeDir();
  var getSSOTokenFilepath = (id) => {
    const hasher = (0, crypto_1.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
  };
  exports.getSSOTokenFilepath = getSSOTokenFilepath;
});

// node_modules/.bun/@smithy+shared-ini-file-loader@4.4.9/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
var require_getSSOTokenFromFile = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSSOTokenFromFile = exports.tokenIntercept = undefined;
  var promises_1 = __require("fs/promises");
  var getSSOTokenFilepath_1 = require_getSSOTokenFilepath();
  exports.tokenIntercept = {};
  var getSSOTokenFromFile = async (id) => {
    if (exports.tokenIntercept[id]) {
      return exports.tokenIntercept[id];
    }
    const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
    const ssoTokenText = await (0, promises_1.readFile)(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
  };
  exports.getSSOTokenFromFile = getSSOTokenFromFile;
});

// node_modules/.bun/@smithy+shared-ini-file-loader@4.4.9/node_modules/@smithy/shared-ini-file-loader/dist-cjs/readFile.js
var require_readFile = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.readFile = exports.fileIntercept = exports.filePromises = undefined;
  var promises_1 = __require("fs/promises");
  exports.filePromises = {};
  exports.fileIntercept = {};
  var readFile = (path, options) => {
    if (exports.fileIntercept[path] !== undefined) {
      return exports.fileIntercept[path];
    }
    if (!exports.filePromises[path] || options?.ignoreCache) {
      exports.filePromises[path] = (0, promises_1.readFile)(path, "utf8");
    }
    return exports.filePromises[path];
  };
  exports.readFile = readFile;
});

// node_modules/.bun/@smithy+shared-ini-file-loader@4.4.9/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports) => {
  var getHomeDir = require_getHomeDir();
  var getSSOTokenFilepath = require_getSSOTokenFilepath();
  var getSSOTokenFromFile = require_getSSOTokenFromFile();
  var path = __require("path");
  var types = require_dist_cjs();
  var readFile = require_readFile();
  var ENV_PROFILE = "AWS_PROFILE";
  var DEFAULT_PROFILE = "default";
  var getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
  var CONFIG_PREFIX_SEPARATOR = ".";
  var getConfigData = (data) => Object.entries(data).filter(([key]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    if (indexOfSeparator === -1) {
      return false;
    }
    return Object.values(types.IniSectionType).includes(key.substring(0, indexOfSeparator));
  }).reduce((acc, [key, value]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    const updatedKey = key.substring(0, indexOfSeparator) === types.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
    acc[updatedKey] = value;
    return acc;
  }, {
    ...data.default && { default: data.default }
  });
  var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
  var getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || path.join(getHomeDir.getHomeDir(), ".aws", "config");
  var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
  var getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || path.join(getHomeDir.getHomeDir(), ".aws", "credentials");
  var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
  var profileNameBlockList = ["__proto__", "profile __proto__"];
  var parseIni = (iniData) => {
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)) {
      const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
      const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
      if (isSection) {
        currentSection = undefined;
        currentSubSection = undefined;
        const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
        const matches = prefixKeyRegex.exec(sectionName);
        if (matches) {
          const [, prefix, , name] = matches;
          if (Object.values(types.IniSectionType).includes(prefix)) {
            currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
          }
        } else {
          currentSection = sectionName;
        }
        if (profileNameBlockList.includes(sectionName)) {
          throw new Error(`Found invalid profile name "${sectionName}"`);
        }
      } else if (currentSection) {
        const indexOfEqualsSign = trimmedLine.indexOf("=");
        if (![0, -1].includes(indexOfEqualsSign)) {
          const [name, value] = [
            trimmedLine.substring(0, indexOfEqualsSign).trim(),
            trimmedLine.substring(indexOfEqualsSign + 1).trim()
          ];
          if (value === "") {
            currentSubSection = name;
          } else {
            if (currentSubSection && iniLine.trimStart() === iniLine) {
              currentSubSection = undefined;
            }
            map[currentSection] = map[currentSection] || {};
            const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
            map[currentSection][key] = value;
          }
        }
      }
    }
    return map;
  };
  var swallowError$1 = () => ({});
  var loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const homeDir = getHomeDir.getHomeDir();
    const relativeHomeDirPrefix = "~/";
    let resolvedFilepath = filepath;
    if (filepath.startsWith(relativeHomeDirPrefix)) {
      resolvedFilepath = path.join(homeDir, filepath.slice(2));
    }
    let resolvedConfigFilepath = configFilepath;
    if (configFilepath.startsWith(relativeHomeDirPrefix)) {
      resolvedConfigFilepath = path.join(homeDir, configFilepath.slice(2));
    }
    const parsedFiles = await Promise.all([
      readFile.readFile(resolvedConfigFilepath, {
        ignoreCache: init.ignoreCache
      }).then(parseIni).then(getConfigData).catch(swallowError$1),
      readFile.readFile(resolvedFilepath, {
        ignoreCache: init.ignoreCache
      }).then(parseIni).catch(swallowError$1)
    ]);
    return {
      configFile: parsedFiles[0],
      credentialsFile: parsedFiles[1]
    };
  };
  var getSsoSessionData = (data) => Object.entries(data).filter(([key]) => key.startsWith(types.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {});
  var swallowError = () => ({});
  var loadSsoSessionData = async (init = {}) => readFile.readFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError);
  var mergeConfigFiles = (...files) => {
    const merged = {};
    for (const file of files) {
      for (const [key, values] of Object.entries(file)) {
        if (merged[key] !== undefined) {
          Object.assign(merged[key], values);
        } else {
          merged[key] = values;
        }
      }
    }
    return merged;
  };
  var parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
  };
  var externalDataInterceptor = {
    getFileRecord() {
      return readFile.fileIntercept;
    },
    interceptFile(path2, contents) {
      readFile.fileIntercept[path2] = Promise.resolve(contents);
    },
    getTokenRecord() {
      return getSSOTokenFromFile.tokenIntercept;
    },
    interceptToken(id, contents) {
      getSSOTokenFromFile.tokenIntercept[id] = contents;
    }
  };
  exports.getSSOTokenFromFile = getSSOTokenFromFile.getSSOTokenFromFile;
  exports.readFile = readFile.readFile;
  exports.CONFIG_PREFIX_SEPARATOR = CONFIG_PREFIX_SEPARATOR;
  exports.DEFAULT_PROFILE = DEFAULT_PROFILE;
  exports.ENV_PROFILE = ENV_PROFILE;
  exports.externalDataInterceptor = externalDataInterceptor;
  exports.getProfileName = getProfileName;
  exports.loadSharedConfigFiles = loadSharedConfigFiles;
  exports.loadSsoSessionData = loadSsoSessionData;
  exports.parseKnownFiles = parseKnownFiles;
  Object.prototype.hasOwnProperty.call(getHomeDir, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: getHomeDir["__proto__"]
  });
  Object.keys(getHomeDir).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = getHomeDir[k];
  });
  Object.prototype.hasOwnProperty.call(getSSOTokenFilepath, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: getSSOTokenFilepath["__proto__"]
  });
  Object.keys(getSSOTokenFilepath).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = getSSOTokenFilepath[k];
  });
});

export { require_dist_cjs2 as require_dist_cjs };
