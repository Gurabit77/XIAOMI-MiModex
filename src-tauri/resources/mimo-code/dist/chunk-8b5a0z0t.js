// @bun
import {
  ENV_KEY,
  ENV_SECRET,
  fromEnv,
  init_dist_es
} from "./chunk-fz59axqr.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-6vqkv5g7.js";
import {
  require_dist_cjs
} from "./chunk-27an25fd.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-provider-node@3.972.36/node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
var import_property_provider, ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED", remoteProvider = async (init) => {
  const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await import("./chunk-0kd8mq8j.js");
  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
    const { fromHttp } = await import("./chunk-ks5j0rbf.js");
    return import_property_provider.chain(fromHttp(init), fromContainerMetadata(init));
  }
  if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
    return async () => {
      throw new import_property_provider.CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
    };
  }
  init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
  return fromInstanceMetadata(init);
};
var init_remoteProvider = __esm(() => {
  import_property_provider = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-node@3.972.36/node_modules/@aws-sdk/credential-provider-node/dist-es/runtime/memoize-chain.js
function memoizeChain(providers, treatAsExpired) {
  const chain2 = internalCreateChain(providers);
  let activeLock;
  let passiveLock;
  let credentials;
  const provider = async (options) => {
    if (options?.forceRefresh) {
      return await chain2(options);
    }
    if (credentials?.expiration) {
      if (credentials?.expiration?.getTime() < Date.now()) {
        credentials = undefined;
      }
    }
    if (activeLock) {
      await activeLock;
    } else if (!credentials || treatAsExpired?.(credentials)) {
      if (credentials) {
        if (!passiveLock) {
          passiveLock = chain2(options).then((c) => {
            credentials = c;
          }).finally(() => {
            passiveLock = undefined;
          });
        }
      } else {
        activeLock = chain2(options).then((c) => {
          credentials = c;
        }).finally(() => {
          activeLock = undefined;
        });
        return provider(options);
      }
    }
    return credentials;
  };
  return provider;
}
var internalCreateChain = (providers) => async (awsIdentityProperties) => {
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
var init_memoize_chain = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-node@3.972.36/node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var import_property_provider2, import_shared_ini_file_loader, multipleCredentialSourceWarningEmitted = false, defaultProvider = (init = {}) => memoizeChain([
  async () => {
    const profile = init.profile ?? process.env[import_shared_ini_file_loader.ENV_PROFILE];
    if (profile) {
      const envStaticCredentialsAreSet = process.env[ENV_KEY] && process.env[ENV_SECRET];
      if (envStaticCredentialsAreSet) {
        if (!multipleCredentialSourceWarningEmitted) {
          const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn.bind(init.logger) : console.warn;
          warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
          multipleCredentialSourceWarningEmitted = true;
        }
      }
      throw new import_property_provider2.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
        logger: init.logger,
        tryNextLink: true
      });
    }
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
    return fromEnv(init)();
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
      throw new import_property_provider2.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
    }
    const { fromSSO } = await import("./chunk-367atnr5.js");
    return fromSSO(init)(awsIdentityProperties);
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
    const { fromIni } = await import("./chunk-aw3v7hx9.js");
    return fromIni(init)(awsIdentityProperties);
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
    const { fromProcess } = await import("./chunk-pq0dmam7.js");
    return fromProcess(init)(awsIdentityProperties);
  },
  async (awsIdentityProperties) => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
    const { fromTokenFile } = await import("./chunk-rt6dp7tz.js");
    return fromTokenFile(init)(awsIdentityProperties);
  },
  async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
    return (await remoteProvider(init))();
  },
  async () => {
    throw new import_property_provider2.CredentialsProviderError("Could not load credentials from any providers", {
      tryNextLink: false,
      logger: init.logger
    });
  }
], credentialsTreatedAsExpired), credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== undefined, credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000;
var init_defaultProvider = __esm(() => {
  init_dist_es();
  init_remoteProvider();
  init_memoize_chain();
  import_property_provider2 = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-node@3.972.36/node_modules/@aws-sdk/credential-provider-node/dist-es/index.js
var init_dist_es2 = __esm(() => {
  init_defaultProvider();
});

export { defaultProvider, credentialsWillNeedRefresh, credentialsTreatedAsExpired, init_dist_es2 as init_dist_es };
