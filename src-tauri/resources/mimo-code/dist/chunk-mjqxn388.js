// @bun
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-6vqkv5g7.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-27an25fd.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var import_client, import_property_provider, resolveCredentialSource = (credentialSource, profileName, logger) => {
  const sourceProvidersMap = {
    EcsContainer: async (options) => {
      const { fromHttp } = await import("./chunk-ks5j0rbf.js");
      const { fromContainerMetadata } = await import("./chunk-0kd8mq8j.js");
      logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
      return async () => import_property_provider.chain(fromHttp(options ?? {}), fromContainerMetadata(options))().then(setNamedProvider);
    },
    Ec2InstanceMetadata: async (options) => {
      logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
      const { fromInstanceMetadata } = await import("./chunk-0kd8mq8j.js");
      return async () => fromInstanceMetadata(options)().then(setNamedProvider);
    },
    Environment: async (options) => {
      logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
      const { fromEnv } = await import("./chunk-ccbpqkgj.js");
      return async () => fromEnv(options)().then(setNamedProvider);
    }
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource];
  } else {
    throw new import_property_provider.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger });
  }
}, setNamedProvider = (creds) => import_client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
var init_resolveCredentialSource = __esm(() => {
  import_client = __toESM(require_client(), 1);
  import_property_provider = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var import_client2, import_property_provider2, import_shared_ini_file_loader, isAssumeRoleProfile = (arg, { profile = "default", logger } = {}) => {
  return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger }) || isCredentialSourceProfile(arg, { profile, logger }));
}, isAssumeRoleWithSourceProfile = (arg, { profile, logger }) => {
  const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
  if (withSourceProfile) {
    logger?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
  }
  return withSourceProfile;
}, isCredentialSourceProfile = (arg, { profile, logger }) => {
  const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
  if (withProviderProfile) {
    logger?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
  }
  return withProviderProfile;
}, resolveAssumeRoleCredentials = async (profileName, profiles, options, callerClientConfig, visitedProfiles = {}, resolveProfileData) => {
  options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
  const profileData = profiles[profileName];
  const { source_profile, region } = profileData;
  if (!options.roleAssumer) {
    const { getDefaultRoleAssumer } = await import("./chunk-s6ktpbx0.js").then((m)=>__toESM(m.default,1));
    options.roleAssumer = getDefaultRoleAssumer({
      ...options.clientConfig,
      credentialProviderLogger: options.logger,
      parentClientConfig: {
        ...callerClientConfig,
        ...options?.parentClientConfig,
        region: region ?? options?.parentClientConfig?.region ?? callerClientConfig?.region
      }
    }, options.clientPlugins);
  }
  if (source_profile && source_profile in visitedProfiles) {
    throw new import_property_provider2.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${import_shared_ini_file_loader.getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
  }
  options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
  const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, profiles, options, callerClientConfig, {
    ...visitedProfiles,
    [source_profile]: true
  }, isCredentialSourceWithoutRoleArn(profiles[source_profile] ?? {})) : (await resolveCredentialSource(profileData.credential_source, profileName, options.logger)(options))();
  if (isCredentialSourceWithoutRoleArn(profileData)) {
    return sourceCredsProvider.then((creds) => import_client2.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
  } else {
    const params = {
      RoleArn: profileData.role_arn,
      RoleSessionName: profileData.role_session_name || `aws-sdk-js-${Date.now()}`,
      ExternalId: profileData.external_id,
      DurationSeconds: parseInt(profileData.duration_seconds || "3600", 10)
    };
    const { mfa_serial } = profileData;
    if (mfa_serial) {
      if (!options.mfaCodeProvider) {
        throw new import_property_provider2.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
      }
      params.SerialNumber = mfa_serial;
      params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params).then((creds) => import_client2.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
  }
}, isCredentialSourceWithoutRoleArn = (section) => {
  return !section.role_arn && !!section.credential_source;
};
var init_resolveAssumeRoleCredentials = __esm(() => {
  init_resolveCredentialSource();
  import_client2 = __toESM(require_client(), 1);
  import_property_provider2 = __toESM(require_dist_cjs2(), 1);
  import_shared_ini_file_loader = __toESM(require_dist_cjs3(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-login@3.972.35/node_modules/@aws-sdk/credential-provider-login/dist-es/LoginCredentialsFetcher.js
import { createHash, createPrivateKey, createPublicKey, sign } from "crypto";
import { promises as fs } from "fs";
import { homedir } from "os";
import { dirname, join } from "path";
var import_property_provider3, import_protocol_http, import_shared_ini_file_loader2, LoginCredentialsFetcher;
var init_LoginCredentialsFetcher = __esm(() => {
  import_property_provider3 = __toESM(require_dist_cjs2(), 1);
  import_protocol_http = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader2 = __toESM(require_dist_cjs3(), 1);
  LoginCredentialsFetcher = class LoginCredentialsFetcher {
    profileData;
    init;
    callerClientConfig;
    static REFRESH_THRESHOLD = 5 * 60 * 1000;
    constructor(profileData, init, callerClientConfig) {
      this.profileData = profileData;
      this.init = init;
      this.callerClientConfig = callerClientConfig;
    }
    async loadCredentials() {
      const token = await this.loadToken();
      if (!token) {
        throw new import_property_provider3.CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, { tryNextLink: false, logger: this.logger });
      }
      const accessToken = token.accessToken;
      const now = Date.now();
      const expiryTime = new Date(accessToken.expiresAt).getTime();
      const timeUntilExpiry = expiryTime - now;
      if (timeUntilExpiry <= LoginCredentialsFetcher.REFRESH_THRESHOLD) {
        return this.refresh(token);
      }
      return {
        accessKeyId: accessToken.accessKeyId,
        secretAccessKey: accessToken.secretAccessKey,
        sessionToken: accessToken.sessionToken,
        accountId: accessToken.accountId,
        expiration: new Date(accessToken.expiresAt)
      };
    }
    get logger() {
      return this.init?.logger;
    }
    get loginSession() {
      return this.profileData.login_session;
    }
    async refresh(token) {
      const { SigninClient, CreateOAuth2TokenCommand } = await import("./chunk-wq0njepr.js").then((m)=>__toESM(m.default,1));
      const { logger, userAgentAppId } = this.callerClientConfig ?? {};
      const isH2 = (requestHandler2) => {
        return requestHandler2?.metadata?.handlerProtocol === "h2";
      };
      const requestHandler = isH2(this.callerClientConfig?.requestHandler) ? undefined : this.callerClientConfig?.requestHandler;
      const region = this.profileData.region ?? await this.callerClientConfig?.region?.() ?? process.env.AWS_REGION;
      const client = new SigninClient({
        credentials: {
          accessKeyId: "",
          secretAccessKey: ""
        },
        region,
        requestHandler,
        logger,
        userAgentAppId,
        ...this.init?.clientConfig
      });
      this.createDPoPInterceptor(client.middlewareStack);
      const commandInput = {
        tokenInput: {
          clientId: token.clientId,
          refreshToken: token.refreshToken,
          grantType: "refresh_token"
        }
      };
      try {
        const response = await client.send(new CreateOAuth2TokenCommand(commandInput));
        const { accessKeyId, secretAccessKey, sessionToken } = response.tokenOutput?.accessToken ?? {};
        const { refreshToken, expiresIn } = response.tokenOutput ?? {};
        if (!accessKeyId || !secretAccessKey || !sessionToken || !refreshToken) {
          throw new import_property_provider3.CredentialsProviderError("Token refresh response missing required fields", {
            logger: this.logger,
            tryNextLink: false
          });
        }
        const expiresInMs = (expiresIn ?? 900) * 1000;
        const expiration = new Date(Date.now() + expiresInMs);
        const updatedToken = {
          ...token,
          accessToken: {
            ...token.accessToken,
            accessKeyId,
            secretAccessKey,
            sessionToken,
            expiresAt: expiration.toISOString()
          },
          refreshToken
        };
        await this.saveToken(updatedToken);
        const newAccessToken = updatedToken.accessToken;
        return {
          accessKeyId: newAccessToken.accessKeyId,
          secretAccessKey: newAccessToken.secretAccessKey,
          sessionToken: newAccessToken.sessionToken,
          accountId: newAccessToken.accountId,
          expiration
        };
      } catch (error) {
        if (error.name === "AccessDeniedException") {
          const errorType = error.error;
          let message;
          switch (errorType) {
            case "TOKEN_EXPIRED":
              message = "Your session has expired. Please reauthenticate.";
              break;
            case "USER_CREDENTIALS_CHANGED":
              message = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
              break;
            case "INSUFFICIENT_PERMISSIONS":
              message = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
              break;
            default:
              message = `Failed to refresh token: ${String(error)}. Please re-authenticate using \`aws login\``;
          }
          throw new import_property_provider3.CredentialsProviderError(message, { logger: this.logger, tryNextLink: false });
        }
        throw new import_property_provider3.CredentialsProviderError(`Failed to refresh token: ${String(error)}. Please re-authenticate using aws login`, { logger: this.logger });
      }
    }
    async loadToken() {
      const tokenFilePath = this.getTokenFilePath();
      try {
        let tokenData;
        try {
          tokenData = await import_shared_ini_file_loader2.readFile(tokenFilePath, { ignoreCache: this.init?.ignoreCache });
        } catch {
          tokenData = await fs.readFile(tokenFilePath, "utf8");
        }
        const token = JSON.parse(tokenData);
        const missingFields = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter((k) => !token[k]);
        if (!token.accessToken?.accountId) {
          missingFields.push("accountId");
        }
        if (missingFields.length > 0) {
          throw new import_property_provider3.CredentialsProviderError(`Token validation failed, missing fields: ${missingFields.join(", ")}`, {
            logger: this.logger,
            tryNextLink: false
          });
        }
        return token;
      } catch (error) {
        throw new import_property_provider3.CredentialsProviderError(`Failed to load token from ${tokenFilePath}: ${String(error)}`, {
          logger: this.logger,
          tryNextLink: false
        });
      }
    }
    async saveToken(token) {
      const tokenFilePath = this.getTokenFilePath();
      const directory = dirname(tokenFilePath);
      try {
        await fs.mkdir(directory, { recursive: true });
      } catch (error) {}
      await fs.writeFile(tokenFilePath, JSON.stringify(token, null, 2), "utf8");
    }
    getTokenFilePath() {
      const directory = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? join(homedir(), ".aws", "login", "cache");
      const loginSessionBytes = Buffer.from(this.loginSession, "utf8");
      const loginSessionSha256 = createHash("sha256").update(loginSessionBytes).digest("hex");
      return join(directory, `${loginSessionSha256}.json`);
    }
    derToRawSignature(derSignature) {
      let offset = 2;
      if (derSignature[offset] !== 2) {
        throw new Error("Invalid DER signature");
      }
      offset++;
      const rLength = derSignature[offset++];
      let r = derSignature.subarray(offset, offset + rLength);
      offset += rLength;
      if (derSignature[offset] !== 2) {
        throw new Error("Invalid DER signature");
      }
      offset++;
      const sLength = derSignature[offset++];
      let s = derSignature.subarray(offset, offset + sLength);
      r = r[0] === 0 ? r.subarray(1) : r;
      s = s[0] === 0 ? s.subarray(1) : s;
      const rPadded = Buffer.concat([Buffer.alloc(32 - r.length), r]);
      const sPadded = Buffer.concat([Buffer.alloc(32 - s.length), s]);
      return Buffer.concat([rPadded, sPadded]);
    }
    createDPoPInterceptor(middlewareStack) {
      middlewareStack.add((next) => async (args) => {
        if (import_protocol_http.HttpRequest.isInstance(args.request)) {
          const request = args.request;
          const actualEndpoint = `${request.protocol}//${request.hostname}${request.port ? `:${request.port}` : ""}${request.path}`;
          const dpop = await this.generateDpop(request.method, actualEndpoint);
          request.headers = {
            ...request.headers,
            DPoP: dpop
          };
        }
        return next(args);
      }, {
        step: "finalizeRequest",
        name: "dpopInterceptor",
        override: true
      });
    }
    async generateDpop(method = "POST", endpoint) {
      const token = await this.loadToken();
      try {
        const privateKey = createPrivateKey({
          key: token.dpopKey,
          format: "pem",
          type: "sec1"
        });
        const publicKey = createPublicKey(privateKey);
        const publicDer = publicKey.export({ format: "der", type: "spki" });
        let pointStart = -1;
        for (let i = 0;i < publicDer.length; i++) {
          if (publicDer[i] === 4) {
            pointStart = i;
            break;
          }
        }
        const x = publicDer.slice(pointStart + 1, pointStart + 33);
        const y = publicDer.slice(pointStart + 33, pointStart + 65);
        const header = {
          alg: "ES256",
          typ: "dpop+jwt",
          jwk: {
            kty: "EC",
            crv: "P-256",
            x: x.toString("base64url"),
            y: y.toString("base64url")
          }
        };
        const payload = {
          jti: crypto.randomUUID(),
          htm: method,
          htu: endpoint,
          iat: Math.floor(Date.now() / 1000)
        };
        const headerB64 = Buffer.from(JSON.stringify(header)).toString("base64url");
        const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
        const message = `${headerB64}.${payloadB64}`;
        const asn1Signature = sign("sha256", Buffer.from(message), privateKey);
        const rawSignature = this.derToRawSignature(asn1Signature);
        const signatureB64 = rawSignature.toString("base64url");
        return `${message}.${signatureB64}`;
      } catch (error) {
        throw new import_property_provider3.CredentialsProviderError(`Failed to generate Dpop proof: ${error instanceof Error ? error.message : String(error)}`, { logger: this.logger, tryNextLink: false });
      }
    }
  };
});

// node_modules/.bun/@aws-sdk+credential-provider-login@3.972.35/node_modules/@aws-sdk/credential-provider-login/dist-es/fromLoginCredentials.js
var import_client3, import_property_provider4, import_shared_ini_file_loader3, fromLoginCredentials = (init) => async ({ callerClientConfig } = {}) => {
  init?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
  const profiles = await import_shared_ini_file_loader3.parseKnownFiles(init || {});
  const profileName = import_shared_ini_file_loader3.getProfileName({
    profile: init?.profile ?? callerClientConfig?.profile
  });
  const profile = profiles[profileName];
  if (!profile?.login_session) {
    throw new import_property_provider4.CredentialsProviderError(`Profile ${profileName} does not contain login_session.`, {
      tryNextLink: true,
      logger: init?.logger
    });
  }
  const fetcher = new LoginCredentialsFetcher(profile, init, callerClientConfig);
  const credentials = await fetcher.loadCredentials();
  return import_client3.setCredentialFeature(credentials, "CREDENTIALS_LOGIN", "AD");
};
var init_fromLoginCredentials = __esm(() => {
  init_LoginCredentialsFetcher();
  import_client3 = __toESM(require_client(), 1);
  import_property_provider4 = __toESM(require_dist_cjs2(), 1);
  import_shared_ini_file_loader3 = __toESM(require_dist_cjs3(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-login@3.972.35/node_modules/@aws-sdk/credential-provider-login/dist-es/types.js
var init_types = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-login@3.972.35/node_modules/@aws-sdk/credential-provider-login/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromLoginCredentials();
  init_types();
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveLoginCredentials.js
var import_client4, isLoginProfile = (data) => {
  return Boolean(data && data.login_session);
}, resolveLoginCredentials = async (profileName, options, callerClientConfig) => {
  const credentials = await fromLoginCredentials({
    ...options,
    profile: profileName
  })({ callerClientConfig });
  return import_client4.setCredentialFeature(credentials, "CREDENTIALS_PROFILE_LOGIN", "AC");
};
var init_resolveLoginCredentials = __esm(() => {
  init_dist_es();
  import_client4 = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var import_client5, isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", resolveProcessCredentials = async (options, profile) => import("./chunk-pq0dmam7.js").then(({ fromProcess }) => fromProcess({
  ...options,
  profile
})().then((creds) => import_client5.setCredentialFeature(creds, "CREDENTIALS_PROFILE_PROCESS", "v")));
var init_resolveProcessCredentials = __esm(() => {
  import_client5 = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var import_client6, resolveSsoCredentials = async (profile, profileData, options = {}, callerClientConfig) => {
  const { fromSSO } = await import("./chunk-367atnr5.js");
  return fromSSO({
    profile,
    logger: options.logger,
    parentClientConfig: options.parentClientConfig,
    clientConfig: options.clientConfig
  })({
    callerClientConfig
  }).then((creds) => {
    if (profileData.sso_session) {
      return import_client6.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO", "r");
    } else {
      return import_client6.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
    }
  });
}, isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
var init_resolveSsoCredentials = __esm(() => {
  import_client6 = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var import_client7, isStaticCredsProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1, resolveStaticCredentials = async (profile, options) => {
  options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
  const credentials = {
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
    ...profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope },
    ...profile.aws_account_id && { accountId: profile.aws_account_id }
  };
  return import_client7.setCredentialFeature(credentials, "CREDENTIALS_PROFILE", "n");
};
var init_resolveStaticCredentials = __esm(() => {
  import_client7 = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var import_client8, isWebIdentityProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, resolveWebIdentityCredentials = async (profile, options, callerClientConfig) => import("./chunk-rt6dp7tz.js").then(({ fromTokenFile }) => fromTokenFile({
  webIdentityTokenFile: profile.web_identity_token_file,
  roleArn: profile.role_arn,
  roleSessionName: profile.role_session_name,
  roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
  logger: options.logger,
  parentClientConfig: options.parentClientConfig
})({
  callerClientConfig
}).then((creds) => import_client8.setCredentialFeature(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));
var init_resolveWebIdentityCredentials = __esm(() => {
  import_client8 = __toESM(require_client(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var import_property_provider5, resolveProfileData = async (profileName, profiles, options, callerClientConfig, visitedProfiles = {}, isAssumeRoleRecursiveCall = false) => {
  const data = profiles[profileName];
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }
  if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
    return resolveAssumeRoleCredentials(profileName, profiles, options, callerClientConfig, visitedProfiles, resolveProfileData);
  }
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data, options);
  }
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options, callerClientConfig);
  }
  if (isProcessProfile(data)) {
    return resolveProcessCredentials(options, profileName);
  }
  if (isSsoProfile(data)) {
    return await resolveSsoCredentials(profileName, data, options, callerClientConfig);
  }
  if (isLoginProfile(data)) {
    return resolveLoginCredentials(profileName, options, callerClientConfig);
  }
  throw new import_property_provider5.CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
};
var init_resolveProfileData = __esm(() => {
  init_resolveAssumeRoleCredentials();
  init_resolveLoginCredentials();
  init_resolveProcessCredentials();
  init_resolveSsoCredentials();
  init_resolveStaticCredentials();
  init_resolveWebIdentityCredentials();
  import_property_provider5 = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var import_shared_ini_file_loader4, fromIni = (init = {}) => async ({ callerClientConfig } = {}) => {
  init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
  const profiles = await import_shared_ini_file_loader4.parseKnownFiles(init);
  return resolveProfileData(import_shared_ini_file_loader4.getProfileName({
    profile: init.profile ?? callerClientConfig?.profile
  }), profiles, init, callerClientConfig);
};
var init_fromIni = __esm(() => {
  init_resolveProfileData();
  import_shared_ini_file_loader4 = __toESM(require_dist_cjs3(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-ini@3.972.35/node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js
var init_dist_es2 = __esm(() => {
  init_fromIni();
});

export { fromLoginCredentials, init_dist_es, fromIni, init_dist_es2 as init_dist_es1 };
