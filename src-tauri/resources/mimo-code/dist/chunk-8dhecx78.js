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
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-provider-web-identity@3.972.35/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken = (init) => async (awsIdentityProperties) => {
  init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
  const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
  let { roleAssumerWithWebIdentity } = init;
  if (!roleAssumerWithWebIdentity) {
    const { getDefaultRoleAssumerWithWebIdentity } = await import("./chunk-s6ktpbx0.js").then((m)=>__toESM(m.default,1));
    roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
      ...init.clientConfig,
      credentialProviderLogger: init.logger,
      parentClientConfig: {
        ...awsIdentityProperties?.callerClientConfig,
        ...init.parentClientConfig
      }
    }, init.clientPlugins);
  }
  return roleAssumerWithWebIdentity({
    RoleArn: roleArn,
    RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: webIdentityToken,
    ProviderId: providerId,
    PolicyArns: policyArns,
    Policy: policy,
    DurationSeconds: durationSeconds
  });
};
var init_fromWebToken = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-web-identity@3.972.35/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
import { readFileSync } from "fs";
var import_client, import_property_provider, import_shared_ini_file_loader, ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE", ENV_ROLE_ARN = "AWS_ROLE_ARN", ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME", fromTokenFile = (init = {}) => async (awsIdentityProperties) => {
  init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
  const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
  const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
  const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
  if (!webIdentityTokenFile || !roleArn) {
    throw new import_property_provider.CredentialsProviderError("Web identity configuration not specified", {
      logger: init.logger
    });
  }
  const credentials = await fromWebToken({
    ...init,
    webIdentityToken: import_shared_ini_file_loader.externalDataInterceptor?.getTokenRecord?.()[webIdentityTokenFile] ?? readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
    roleArn,
    roleSessionName
  })(awsIdentityProperties);
  if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
    import_client.setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
  }
  return credentials;
};
var init_fromTokenFile = __esm(() => {
  init_fromWebToken();
  import_client = __toESM(require_client(), 1);
  import_property_provider = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-web-identity@3.972.35/node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromTokenFile();
  init_fromWebToken();
});

export { fromWebToken, fromTokenFile, init_dist_es };
