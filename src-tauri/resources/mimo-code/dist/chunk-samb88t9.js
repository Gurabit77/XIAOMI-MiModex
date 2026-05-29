// @bun
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-6vqkv5g7.js";
import {
  require_dist_cjs
} from "./chunk-27an25fd.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-provider-process@3.972.31/node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var import_client, getValidatedProcessCredentials = (profileName, data, profiles) => {
  if (data.Version !== 1) {
    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
  }
  if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
    throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
  }
  if (data.Expiration) {
    const currentTime = new Date;
    const expireTime = new Date(data.Expiration);
    if (expireTime < currentTime) {
      throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
    }
  }
  let accountId = data.AccountId;
  if (!accountId && profiles?.[profileName]?.aws_account_id) {
    accountId = profiles[profileName].aws_account_id;
  }
  const credentials = {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...data.SessionToken && { sessionToken: data.SessionToken },
    ...data.Expiration && { expiration: new Date(data.Expiration) },
    ...data.CredentialScope && { credentialScope: data.CredentialScope },
    ...accountId && { accountId }
  };
  import_client.setCredentialFeature(credentials, "CREDENTIALS_PROCESS", "w");
  return credentials;
};
var init_getValidatedProcessCredentials = __esm(() => {
  import_client = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-process@3.972.31/node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
import { exec } from "child_process";
import { promisify } from "util";
var import_property_provider, import_shared_ini_file_loader, resolveProcessCredentials = async (profileName, profiles, logger) => {
  const profile = profiles[profileName];
  if (profiles[profileName]) {
    const credentialProcess = profile["credential_process"];
    if (credentialProcess !== undefined) {
      const execPromise = promisify(import_shared_ini_file_loader.externalDataInterceptor?.getTokenRecord?.().exec ?? exec);
      try {
        const { stdout } = await execPromise(credentialProcess);
        let data;
        try {
          data = JSON.parse(stdout.trim());
        } catch {
          throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
        }
        return getValidatedProcessCredentials(profileName, data, profiles);
      } catch (error) {
        throw new import_property_provider.CredentialsProviderError(error.message, { logger });
      }
    } else {
      throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger });
    }
  } else {
    throw new import_property_provider.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
      logger
    });
  }
};
var init_resolveProcessCredentials = __esm(() => {
  init_getValidatedProcessCredentials();
  import_property_provider = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-process@3.972.31/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var import_shared_ini_file_loader2, fromProcess = (init = {}) => async ({ callerClientConfig } = {}) => {
  init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
  const profiles = await import_shared_ini_file_loader2.parseKnownFiles(init);
  return resolveProcessCredentials(import_shared_ini_file_loader2.getProfileName({
    profile: init.profile ?? callerClientConfig?.profile
  }), profiles, init.logger);
};
var init_fromProcess = __esm(() => {
  init_resolveProcessCredentials();
  import_shared_ini_file_loader2 = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-process@3.972.31/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromProcess();
});

export { fromProcess, init_dist_es };
