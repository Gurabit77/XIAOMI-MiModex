// @bun
import {
  fromTokenFile,
  fromWebToken,
  init_dist_es as init_dist_es7
} from "./chunk-8dhecx78.js";
import {
  fromIni,
  fromLoginCredentials,
  init_dist_es as init_dist_es5,
  init_dist_es1 as init_dist_es8
} from "./chunk-mjqxn388.js";
import {
  defaultProvider,
  init_dist_es as init_dist_es9
} from "./chunk-8b5a0z0t.js";
import {
  fromHttp,
  init_dist_es as init_dist_es3
} from "./chunk-nxs3ss0q.js";
import {
  fromSSO,
  init_dist_es as init_dist_es4
} from "./chunk-m8zf5402.js";
import {
  fromEnv,
  init_dist_es
} from "./chunk-fz59axqr.js";
import {
  require_dist_cjs2 as require_dist_cjs4
} from "./chunk-kggjyy2e.js";
import"./chunk-9r117f3a.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-57y89twd.js";
import"./chunk-6qkspz0q.js";
import"./chunk-7vfjvamn.js";
import {
  fromProcess,
  init_dist_es as init_dist_es6
} from "./chunk-samb88t9.js";
import {
  require_client
} from "./chunk-cahmkqhh.js";
import"./chunk-m53ks0yf.js";
import"./chunk-gd1ye7ef.js";
import {
  fromContainerMetadata,
  fromInstanceMetadata,
  init_dist_es as init_dist_es2
} from "./chunk-jdx93dh4.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-87zgmycv.js";
import"./chunk-4ch5vxv6.js";
import"./chunk-6vqkv5g7.js";
import {
  require_dist_cjs
} from "./chunk-27an25fd.js";
import"./chunk-tp6bgx9r.js";
import"./chunk-2nayx6q1.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/createCredentialChain.js
var import_property_provider, createCredentialChain = (...credentialProviders) => {
  let expireAfter = -1;
  const baseFunction = async (awsIdentityProperties) => {
    const credentials = await propertyProviderChain(...credentialProviders)(awsIdentityProperties);
    if (!credentials.expiration && expireAfter !== -1) {
      credentials.expiration = new Date(Date.now() + expireAfter);
    }
    return credentials;
  };
  const withOptions = Object.assign(baseFunction, {
    expireAfter(milliseconds) {
      if (milliseconds < 5 * 60000) {
        throw new Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
      }
      expireAfter = milliseconds;
      return withOptions;
    }
  });
  return withOptions;
}, propertyProviderChain = (...providers) => async (awsIdentityProperties) => {
  if (providers.length === 0) {
    throw new import_property_provider.ProviderError("No providers in chain", { tryNextLink: false });
  }
  let lastProviderError;
  for (const provider of providers) {
    try {
      return await provider(awsIdentityProperties);
    } catch (err) {
      lastProviderError = err;
      if (err?.tryNextLink) {
        continue;
      }
      throw err;
    }
  }
  throw lastProviderError;
};
var init_createCredentialChain = __esm(() => {
  import_property_provider = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/CognitoProviderParameters.js
var init_CognitoProviderParameters = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/Logins.js
var init_Logins = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/Storage.js
var init_Storage = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js
function resolveLogins(logins) {
  return Promise.all(Object.keys(logins).reduce((arr, name) => {
    const tokenOrProvider = logins[name];
    if (typeof tokenOrProvider === "string") {
      arr.push([name, tokenOrProvider]);
    } else {
      arr.push(tokenOrProvider().then((token) => [name, token]));
    }
    return arr;
  }, [])).then((resolvedPairs) => resolvedPairs.reduce((logins2, [key, value]) => {
    logins2[key] = value;
    return logins2;
  }, {}));
}
var init_resolveLogins = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js
function fromCognitoIdentity(parameters) {
  return async (awsIdentityProperties) => {
    parameters.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
    const { GetCredentialsForIdentityCommand, CognitoIdentityClient } = await import("./chunk-hyggb9mf.js");
    const fromConfigs = (property) => parameters.clientConfig?.[property] ?? parameters.parentClientConfig?.[property] ?? awsIdentityProperties?.callerClientConfig?.[property];
    const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(parameters.logger), Expiration, SecretKey = throwOnMissingSecretKey(parameters.logger), SessionToken } = throwOnMissingCredentials(parameters.logger) } = await (parameters.client ?? new CognitoIdentityClient(Object.assign({}, parameters.clientConfig ?? {}, {
      region: fromConfigs("region"),
      profile: fromConfigs("profile"),
      userAgentAppId: fromConfigs("userAgentAppId")
    }))).send(new GetCredentialsForIdentityCommand({
      CustomRoleArn: parameters.customRoleArn,
      IdentityId: parameters.identityId,
      Logins: parameters.logins ? await resolveLogins(parameters.logins) : undefined
    }));
    return {
      identityId: parameters.identityId,
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey,
      sessionToken: SessionToken,
      expiration: Expiration
    };
  };
}
function throwOnMissingAccessKeyId(logger) {
  throw new import_property_provider2.CredentialsProviderError("Response from Amazon Cognito contained no access key ID", { logger });
}
function throwOnMissingCredentials(logger) {
  throw new import_property_provider2.CredentialsProviderError("Response from Amazon Cognito contained no credentials", { logger });
}
function throwOnMissingSecretKey(logger) {
  throw new import_property_provider2.CredentialsProviderError("Response from Amazon Cognito contained no secret key", { logger });
}
var import_property_provider2;
var init_fromCognitoIdentity = __esm(() => {
  init_resolveLogins();
  import_property_provider2 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js
class IndexedDbStorage {
  dbName;
  constructor(dbName = "aws:cognito-identity-ids") {
    this.dbName = dbName;
  }
  getItem(key) {
    return this.withObjectStore("readonly", (store) => {
      const req = store.get(key);
      return new Promise((resolve) => {
        req.onerror = () => resolve(null);
        req.onsuccess = () => resolve(req.result ? req.result.value : null);
      });
    }).catch(() => null);
  }
  removeItem(key) {
    return this.withObjectStore("readwrite", (store) => {
      const req = store.delete(key);
      return new Promise((resolve, reject) => {
        req.onerror = () => reject(req.error);
        req.onsuccess = () => resolve();
      });
    });
  }
  setItem(id, value) {
    return this.withObjectStore("readwrite", (store) => {
      const req = store.put({ id, value });
      return new Promise((resolve, reject) => {
        req.onerror = () => reject(req.error);
        req.onsuccess = () => resolve();
      });
    });
  }
  getDb() {
    const openDbRequest = self.indexedDB.open(this.dbName, 1);
    return new Promise((resolve, reject) => {
      openDbRequest.onsuccess = () => {
        resolve(openDbRequest.result);
      };
      openDbRequest.onerror = () => {
        reject(openDbRequest.error);
      };
      openDbRequest.onblocked = () => {
        reject(new Error("Unable to access DB"));
      };
      openDbRequest.onupgradeneeded = () => {
        const db = openDbRequest.result;
        db.onerror = () => {
          reject(new Error("Failed to create object store"));
        };
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      };
    });
  }
  withObjectStore(mode, action) {
    return this.getDb().then((db) => {
      const tx = db.transaction(STORE_NAME, mode);
      tx.oncomplete = () => db.close();
      return new Promise((resolve, reject) => {
        tx.onerror = () => reject(tx.error);
        resolve(action(tx.objectStore(STORE_NAME)));
      }).catch((err) => {
        db.close();
        throw err;
      });
    });
  }
}
var STORE_NAME = "IdentityIds";
var init_IndexedDbStorage = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js
class InMemoryStorage {
  store;
  constructor(store = {}) {
    this.store = store;
  }
  getItem(key) {
    if (key in this.store) {
      return this.store[key];
    }
    return null;
  }
  removeItem(key) {
    delete this.store[key];
  }
  setItem(key, value) {
    this.store[key] = value;
  }
}
var init_InMemoryStorage = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js
function localStorage() {
  if (typeof self === "object" && self.indexedDB) {
    return new IndexedDbStorage;
  }
  if (typeof window === "object" && window.localStorage) {
    return window.localStorage;
  }
  return inMemoryStorage;
}
var inMemoryStorage;
var init_localStorage = __esm(() => {
  init_IndexedDbStorage();
  init_InMemoryStorage();
  inMemoryStorage = new InMemoryStorage;
});

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js
function fromCognitoIdentityPool({ accountId, cache = localStorage(), client, clientConfig, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : undefined, logger, parentClientConfig }) {
  logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
  const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : undefined;
  let provider = async (awsIdentityProperties) => {
    const { GetIdCommand, CognitoIdentityClient } = await import("./chunk-hyggb9mf.js");
    const fromConfigs = (property) => clientConfig?.[property] ?? parentClientConfig?.[property] ?? awsIdentityProperties?.callerClientConfig?.[property];
    const _client = client ?? new CognitoIdentityClient(Object.assign({}, clientConfig ?? {}, {
      region: fromConfigs("region"),
      profile: fromConfigs("profile"),
      userAgentAppId: fromConfigs("userAgentAppId")
    }));
    let identityId = cacheKey && await cache.getItem(cacheKey);
    if (!identityId) {
      const { IdentityId = throwOnMissingId(logger) } = await _client.send(new GetIdCommand({
        AccountId: accountId,
        IdentityPoolId: identityPoolId,
        Logins: logins ? await resolveLogins(logins) : undefined
      }));
      identityId = IdentityId;
      if (cacheKey) {
        Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => {});
      }
    }
    provider = fromCognitoIdentity({
      client: _client,
      customRoleArn,
      logins,
      identityId
    });
    return provider(awsIdentityProperties);
  };
  return (awsIdentityProperties) => provider(awsIdentityProperties).catch(async (err) => {
    if (cacheKey) {
      Promise.resolve(cache.removeItem(cacheKey)).catch(() => {});
    }
    throw err;
  });
}
function throwOnMissingId(logger) {
  throw new import_property_provider3.CredentialsProviderError("Response from Amazon Cognito contained no identity ID", { logger });
}
var import_property_provider3;
var init_fromCognitoIdentityPool = __esm(() => {
  init_fromCognitoIdentity();
  init_localStorage();
  init_resolveLogins();
  import_property_provider3 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-cognito-identity@3.972.28/node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/index.js
var init_dist_es10 = __esm(() => {
  init_CognitoProviderParameters();
  init_Logins();
  init_Storage();
  init_fromCognitoIdentity();
  init_fromCognitoIdentityPool();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromCognitoIdentity.js
var fromCognitoIdentity3 = (options) => fromCognitoIdentity({
  ...options
});
var init_fromCognitoIdentity2 = __esm(() => {
  init_dist_es10();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromCognitoIdentityPool.js
var fromCognitoIdentityPool3 = (options) => fromCognitoIdentityPool({
  ...options
});
var init_fromCognitoIdentityPool2 = __esm(() => {
  init_dist_es10();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromContainerMetadata.js
var fromContainerMetadata2 = (init) => {
  init?.logger?.debug("@smithy/credential-provider-imds", "fromContainerMetadata");
  return fromContainerMetadata(init);
};
var init_fromContainerMetadata = __esm(() => {
  init_dist_es2();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromEnv.js
var fromEnv2 = (init) => fromEnv(init);
var init_fromEnv = __esm(() => {
  init_dist_es();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromIni.js
var fromIni2 = (init = {}) => fromIni({
  ...init
});
var init_fromIni = __esm(() => {
  init_dist_es8();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromInstanceMetadata.js
var import_client, fromInstanceMetadata2 = (init) => {
  init?.logger?.debug("@smithy/credential-provider-imds", "fromInstanceMetadata");
  return async () => fromInstanceMetadata(init)().then((creds) => import_client.setCredentialFeature(creds, "CREDENTIALS_IMDS", "0"));
};
var init_fromInstanceMetadata = __esm(() => {
  init_dist_es2();
  import_client = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromLoginCredentials.js
var fromLoginCredentials2 = (init) => fromLoginCredentials({
  ...init
});
var init_fromLoginCredentials = __esm(() => {
  init_dist_es5();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromNodeProviderChain.js
var fromNodeProviderChain = (init = {}) => defaultProvider({
  ...init
});
var init_fromNodeProviderChain = __esm(() => {
  init_dist_es9();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromProcess.js
var fromProcess2 = (init) => fromProcess(init);
var init_fromProcess = __esm(() => {
  init_dist_es6();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromSSO.js
var fromSSO2 = (init = {}) => {
  return fromSSO({ ...init });
};
var init_fromSSO = __esm(() => {
  init_dist_es4();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromTemporaryCredentials.base.js
var import_core, import_property_provider4, ASSUME_ROLE_DEFAULT_REGION = "us-east-1", fromTemporaryCredentials = (options, credentialDefaultProvider, regionProvider) => {
  let stsClient;
  return async (awsIdentityProperties = {}) => {
    const { callerClientConfig } = awsIdentityProperties;
    const profile = options.clientConfig?.profile ?? callerClientConfig?.profile;
    const logger = options.logger ?? callerClientConfig?.logger;
    logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
    const params = { ...options.params, RoleSessionName: options.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (params?.SerialNumber) {
      if (!options.mfaCodeProvider) {
        throw new import_property_provider4.CredentialsProviderError(`Temporary credential requires multi-factor authentication, but no MFA code callback was provided.`, {
          tryNextLink: false,
          logger
        });
      }
      params.TokenCode = await options.mfaCodeProvider(params?.SerialNumber);
    }
    const { AssumeRoleCommand, STSClient } = await import("./chunk-waxn61vn.js");
    if (!stsClient) {
      const defaultCredentialsOrError = typeof credentialDefaultProvider === "function" ? credentialDefaultProvider() : undefined;
      const credentialSources = [
        options.masterCredentials,
        options.clientConfig?.credentials,
        void callerClientConfig?.credentials,
        callerClientConfig?.credentialDefaultProvider?.(),
        defaultCredentialsOrError
      ];
      let credentialSource = "STS client default credentials";
      if (credentialSources[0]) {
        credentialSource = "options.masterCredentials";
      } else if (credentialSources[1]) {
        credentialSource = "options.clientConfig.credentials";
      } else if (credentialSources[2]) {
        credentialSource = "caller client's credentials";
        throw new Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
      } else if (credentialSources[3]) {
        credentialSource = "caller client's credentialDefaultProvider";
      } else if (credentialSources[4]) {
        credentialSource = "AWS SDK default credentials";
      }
      const regionSources = [
        options.clientConfig?.region,
        callerClientConfig?.region,
        await regionProvider?.({
          profile
        }),
        ASSUME_ROLE_DEFAULT_REGION
      ];
      let regionSource = "default partition's default region";
      if (regionSources[0]) {
        regionSource = "options.clientConfig.region";
      } else if (regionSources[1]) {
        regionSource = "caller client's region";
      } else if (regionSources[2]) {
        regionSource = "file or env region";
      }
      const requestHandlerSources = [
        filterRequestHandler(options.clientConfig?.requestHandler),
        filterRequestHandler(callerClientConfig?.requestHandler)
      ];
      let requestHandlerSource = "STS default requestHandler";
      if (requestHandlerSources[0]) {
        requestHandlerSource = "options.clientConfig.requestHandler";
      } else if (requestHandlerSources[1]) {
        requestHandlerSource = "caller client's requestHandler";
      }
      logger?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${regionSource}=${await import_core.normalizeProvider(coalesce(regionSources))()}, ${credentialSource}, ${requestHandlerSource}.`);
      stsClient = new STSClient({
        userAgentAppId: callerClientConfig?.userAgentAppId,
        ...options.clientConfig,
        credentials: coalesce(credentialSources),
        logger,
        profile,
        region: coalesce(regionSources),
        requestHandler: coalesce(requestHandlerSources)
      });
    }
    if (options.clientPlugins) {
      for (const plugin of options.clientPlugins) {
        stsClient.middlewareStack.use(plugin);
      }
    }
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new import_property_provider4.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`, {
        logger
      });
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
      credentialScope: Credentials.CredentialScope
    };
  };
}, filterRequestHandler = (requestHandler) => {
  return requestHandler?.metadata?.handlerProtocol === "h2" ? undefined : requestHandler;
}, coalesce = (args) => {
  for (const item of args) {
    if (item !== undefined) {
      return item;
    }
  }
};
var init_fromTemporaryCredentials_base = __esm(() => {
  import_core = __toESM(require_dist_cjs3(), 1);
  import_property_provider4 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromTemporaryCredentials.js
var import_config_resolver, import_node_config_provider, fromTemporaryCredentials2 = (options) => {
  return fromTemporaryCredentials(options, fromNodeProviderChain, async ({ profile = process.env.AWS_PROFILE }) => import_node_config_provider.loadConfig({
    environmentVariableSelector: (env) => env.AWS_REGION,
    configFileSelector: (profileData) => {
      return profileData.region;
    },
    default: () => {
      return;
    }
  }, { ...import_config_resolver.NODE_REGION_CONFIG_FILE_OPTIONS, profile })());
};
var init_fromTemporaryCredentials = __esm(() => {
  init_fromNodeProviderChain();
  init_fromTemporaryCredentials_base();
  import_config_resolver = __toESM(require_dist_cjs4(), 1);
  import_node_config_provider = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromTokenFile.js
var fromTokenFile2 = (init = {}) => fromTokenFile({
  ...init
});
var init_fromTokenFile = __esm(() => {
  init_dist_es7();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/fromWebToken.js
var fromWebToken2 = (init) => fromWebToken({
  ...init
});
var init_fromWebToken = __esm(() => {
  init_dist_es7();
});

// node_modules/.bun/@aws-sdk+credential-providers@3.1037.0/node_modules/@aws-sdk/credential-providers/dist-es/index.js
var init_dist_es11 = __esm(() => {
  init_dist_es3();
  init_createCredentialChain();
  init_fromCognitoIdentity2();
  init_fromCognitoIdentityPool2();
  init_fromContainerMetadata();
  init_fromEnv();
  init_fromIni();
  init_fromInstanceMetadata();
  init_fromLoginCredentials();
  init_fromNodeProviderChain();
  init_fromProcess();
  init_fromSSO();
  init_fromTemporaryCredentials();
  init_fromTokenFile();
  init_fromWebToken();
});
init_dist_es11();

export {
  propertyProviderChain,
  fromWebToken2 as fromWebToken,
  fromTokenFile2 as fromTokenFile,
  fromTemporaryCredentials2 as fromTemporaryCredentials,
  fromSSO2 as fromSSO,
  fromProcess2 as fromProcess,
  fromNodeProviderChain,
  fromLoginCredentials2 as fromLoginCredentials,
  fromInstanceMetadata2 as fromInstanceMetadata,
  fromIni2 as fromIni,
  fromHttp,
  fromEnv2 as fromEnv,
  fromContainerMetadata2 as fromContainerMetadata,
  fromCognitoIdentityPool3 as fromCognitoIdentityPool,
  fromCognitoIdentity3 as fromCognitoIdentity,
  createCredentialChain
};
