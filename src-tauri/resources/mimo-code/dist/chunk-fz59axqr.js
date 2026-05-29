// @bun
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs
} from "./chunk-27an25fd.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-provider-env@3.972.31/node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var import_client, import_property_provider, ENV_KEY = "AWS_ACCESS_KEY_ID", ENV_SECRET = "AWS_SECRET_ACCESS_KEY", ENV_SESSION = "AWS_SESSION_TOKEN", ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION", ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE", ENV_ACCOUNT_ID = "AWS_ACCOUNT_ID", fromEnv = (init) => async () => {
  init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
  const accessKeyId = process.env[ENV_KEY];
  const secretAccessKey = process.env[ENV_SECRET];
  const sessionToken = process.env[ENV_SESSION];
  const expiry = process.env[ENV_EXPIRATION];
  const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
  const accountId = process.env[ENV_ACCOUNT_ID];
  if (accessKeyId && secretAccessKey) {
    const credentials = {
      accessKeyId,
      secretAccessKey,
      ...sessionToken && { sessionToken },
      ...expiry && { expiration: new Date(expiry) },
      ...credentialScope && { credentialScope },
      ...accountId && { accountId }
    };
    import_client.setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");
    return credentials;
  }
  throw new import_property_provider.CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
};
var init_fromEnv = __esm(() => {
  import_client = __toESM(require_client(), 1);
  import_property_provider = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-env@3.972.31/node_modules/@aws-sdk/credential-provider-env/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromEnv();
});

export { ENV_KEY, ENV_SECRET, ENV_SESSION, ENV_EXPIRATION, ENV_CREDENTIAL_SCOPE, ENV_ACCOUNT_ID, fromEnv, init_dist_es };
