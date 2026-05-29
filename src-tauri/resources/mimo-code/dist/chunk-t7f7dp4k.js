// @bun
import {
  getFsImplementation,
  init_debug,
  init_fsOperations,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  hasNodeOption,
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  require_src
} from "./chunk-8pn8tvgg.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/agent-base@8.0.0/node_modules/agent-base/dist/helpers.js
var init_helpers = () => {};

// node_modules/.bun/agent-base@8.0.0/node_modules/agent-base/dist/index.js
import * as net from "net";
import * as http from "http";
import { Agent as HttpsAgent } from "https";
var INTERNAL, Agent2;
var init_dist = __esm(() => {
  init_helpers();
  INTERNAL = Symbol("AgentBaseInternalState");
  Agent2 = class Agent2 extends http.Agent {
    constructor(opts) {
      super(opts);
      this[INTERNAL] = {};
    }
    isSecureEndpoint(options) {
      if (options) {
        if (typeof options.secureEndpoint === "boolean") {
          return options.secureEndpoint;
        }
        if (typeof options.protocol === "string") {
          return options.protocol === "https:";
        }
      }
      const { stack } = new Error;
      if (typeof stack !== "string")
        return false;
      return stack.split(`
`).some((l) => l.indexOf("(https.js:") !== -1 || l.indexOf("node:https:") !== -1);
    }
    incrementSockets(name) {
      if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
        return null;
      }
      if (!this.sockets[name]) {
        this.sockets[name] = [];
      }
      const fakeSocket = new net.Socket({ writable: false });
      this.sockets[name].push(fakeSocket);
      this.totalSocketCount++;
      return fakeSocket;
    }
    decrementSockets(name, socket) {
      if (!this.sockets[name] || socket === null) {
        return;
      }
      const sockets = this.sockets[name];
      const index = sockets.indexOf(socket);
      if (index !== -1) {
        sockets.splice(index, 1);
        this.totalSocketCount--;
        if (sockets.length === 0) {
          delete this.sockets[name];
        }
      }
    }
    getName(options) {
      const secureEndpoint = this.isSecureEndpoint(options);
      if (secureEndpoint) {
        return HttpsAgent.prototype.getName.call(this, options);
      }
      return super.getName(options);
    }
    createSocket(req, options, cb) {
      const connectOpts = {
        ...options,
        secureEndpoint: this.isSecureEndpoint(options)
      };
      const name = this.getName(connectOpts);
      const fakeSocket = this.incrementSockets(name);
      Promise.resolve().then(() => this.connect(req, connectOpts)).then((socket) => {
        this.decrementSockets(name, fakeSocket);
        if (socket instanceof http.Agent) {
          try {
            return socket.addRequest(req, connectOpts);
          } catch (err) {
            return cb(err);
          }
        }
        this[INTERNAL].currentSocket = socket;
        super.createSocket(req, options, cb);
      }, (err) => {
        this.decrementSockets(name, fakeSocket);
        cb(err);
      });
    }
    createConnection() {
      const socket = this[INTERNAL].currentSocket;
      this[INTERNAL].currentSocket = undefined;
      if (!socket) {
        throw new Error("No socket was returned in the `connect()` function");
      }
      return socket;
    }
    get defaultPort() {
      return this[INTERNAL].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
    }
    set defaultPort(v) {
      if (this[INTERNAL]) {
        this[INTERNAL].defaultPort = v;
      }
    }
    get protocol() {
      return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
    }
    set protocol(v) {
      if (this[INTERNAL]) {
        this[INTERNAL].protocol = v;
      }
    }
  };
});

// node_modules/.bun/https-proxy-agent@8.0.0/node_modules/https-proxy-agent/dist/parse-proxy-response.js
function parseProxyResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffersLength = 0;
    const buffers = [];
    function read() {
      const b = socket.read();
      if (b)
        ondata(b);
      else
        socket.once("readable", read);
    }
    function cleanup() {
      socket.removeListener("end", onend);
      socket.removeListener("error", onerror);
      socket.removeListener("readable", read);
    }
    function onend() {
      cleanup();
      debug("onend");
      reject(new Error("Proxy connection ended before receiving CONNECT response"));
    }
    function onerror(err) {
      cleanup();
      debug("onerror %o", err);
      reject(err);
    }
    function ondata(b) {
      buffers.push(b);
      buffersLength += b.length;
      const buffered = Buffer.concat(buffers, buffersLength);
      const endOfHeaders = buffered.indexOf(`\r
\r
`);
      if (endOfHeaders === -1) {
        debug("have not received end of HTTP headers yet...");
        read();
        return;
      }
      const headerParts = buffered.slice(0, endOfHeaders).toString("ascii").split(`\r
`);
      const firstLine = headerParts.shift();
      if (!firstLine) {
        socket.destroy();
        return reject(new Error("No header received from proxy CONNECT response"));
      }
      const firstLineParts = firstLine.split(" ");
      const statusCode = +firstLineParts[1];
      const statusText = firstLineParts.slice(2).join(" ");
      const headers = {};
      for (const header of headerParts) {
        if (!header)
          continue;
        const firstColon = header.indexOf(":");
        if (firstColon === -1) {
          socket.destroy();
          return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
        }
        const key = header.slice(0, firstColon).toLowerCase();
        const value = header.slice(firstColon + 1).trimStart();
        const current = headers[key];
        if (typeof current === "string") {
          headers[key] = [current, value];
        } else if (Array.isArray(current)) {
          current.push(value);
        } else {
          headers[key] = value;
        }
      }
      debug("got proxy server response: %o %o", firstLine, headers);
      cleanup();
      resolve({
        connect: {
          statusCode,
          statusText,
          headers
        },
        buffered
      });
    }
    socket.on("error", onerror);
    socket.on("end", onend);
    read();
  });
}
var import_debug, debug;
var init_parse_proxy_response = __esm(() => {
  import_debug = __toESM(require_src(), 1);
  debug = import_debug.default("https-proxy-agent:parse-proxy-response");
});

// node_modules/.bun/https-proxy-agent@8.0.0/node_modules/https-proxy-agent/dist/index.js
import * as net2 from "net";
import * as tls from "tls";
import assert from "assert";
import { URL as URL2 } from "url";
function resume(socket) {
  socket.resume();
}
function omit(obj, ...keys) {
  const ret = {};
  let key;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
var import_debug2, debug2, setServernameFromNonIpHost = (options) => {
  if (options.servername === undefined && options.host && !net2.isIP(options.host)) {
    return {
      ...options,
      servername: options.host
    };
  }
  return options;
}, HttpsProxyAgent;
var init_dist2 = __esm(() => {
  init_dist();
  init_parse_proxy_response();
  import_debug2 = __toESM(require_src(), 1);
  debug2 = import_debug2.default("https-proxy-agent");
  HttpsProxyAgent = class HttpsProxyAgent extends Agent2 {
    constructor(proxy, opts) {
      super(opts);
      this.options = { path: undefined };
      this.proxy = typeof proxy === "string" ? new URL2(proxy) : proxy;
      this.proxyHeaders = opts?.headers ?? {};
      debug2("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
      const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...opts ? omit(opts, "headers") : null,
        host,
        port
      };
    }
    async connect(req, opts) {
      const { proxy } = this;
      if (!opts.host) {
        throw new TypeError('No "host" provided');
      }
      let socket;
      if (proxy.protocol === "https:") {
        debug2("Creating `tls.Socket`: %o", this.connectOpts);
        socket = tls.connect(setServernameFromNonIpHost(this.connectOpts));
      } else {
        debug2("Creating `net.Socket`: %o", this.connectOpts);
        socket = net2.connect(this.connectOpts);
      }
      const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
      const host = net2.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
      let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r
`;
      if (proxy.username || proxy.password) {
        const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
        headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
      }
      headers.Host = `${host}:${opts.port}`;
      if (!headers["Proxy-Connection"]) {
        headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      }
      for (const name of Object.keys(headers)) {
        payload += `${name}: ${headers[name]}\r
`;
      }
      const proxyResponsePromise = parseProxyResponse(socket);
      socket.write(`${payload}\r
`);
      const { connect: connect3, buffered } = await proxyResponsePromise;
      req.emit("proxyConnect", connect3);
      this.emit("proxyConnect", connect3, req);
      if (connect3.statusCode === 200) {
        req.once("socket", resume);
        if (opts.secureEndpoint) {
          debug2("Upgrading socket connection to TLS");
          return tls.connect({
            ...omit(setServernameFromNonIpHost(opts), "host", "path", "port"),
            socket
          });
        }
        return socket;
      }
      socket.destroy();
      const fakeSocket = new net2.Socket({ writable: false });
      fakeSocket.readable = true;
      req.once("socket", (s) => {
        debug2("Replaying proxy buffer for failed request");
        assert(s.listenerCount("data") > 0);
        s.push(buffered);
        s.push(null);
      });
      return fakeSocket;
    }
  };
  HttpsProxyAgent.protocols = ["http", "https"];
});

// src/utils/caCerts.ts
function clearCACertsCache() {
  getCACertificates.cache.clear?.();
  logForDebugging("Cleared CA certificates cache");
}
var getCACertificates;
var init_caCerts = __esm(() => {
  init_memoize();
  init_debug();
  init_envUtils();
  init_fsOperations();
  getCACertificates = memoize_default(() => {
    const useSystemCA = hasNodeOption("--use-system-ca") || hasNodeOption("--use-openssl-ca");
    const extraCertsPath = process.env.NODE_EXTRA_CA_CERTS;
    logForDebugging(`CA certs: useSystemCA=${useSystemCA}, extraCertsPath=${extraCertsPath}`);
    if (!useSystemCA && !extraCertsPath) {
      return;
    }
    const tls2 = __require("tls");
    const certs = [];
    if (useSystemCA) {
      const getCACerts = tls2.getCACertificates;
      const systemCAs = getCACerts?.("system");
      if (systemCAs && systemCAs.length > 0) {
        certs.push(...systemCAs);
        logForDebugging(`CA certs: Loaded ${certs.length} system CA certificates (--use-system-ca)`);
      } else if (!getCACerts && !extraCertsPath) {
        logForDebugging("CA certs: --use-system-ca set but system CA API unavailable, deferring to runtime");
        return;
      } else {
        certs.push(...tls2.rootCertificates);
        logForDebugging(`CA certs: Loaded ${certs.length} bundled root certificates as base (--use-system-ca fallback)`);
      }
    } else {
      certs.push(...tls2.rootCertificates);
      logForDebugging(`CA certs: Loaded ${certs.length} bundled root certificates as base`);
    }
    if (extraCertsPath) {
      try {
        const extraCert = getFsImplementation().readFileSync(extraCertsPath, {
          encoding: "utf8"
        });
        certs.push(extraCert);
        logForDebugging(`CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${extraCertsPath})`);
      } catch (error) {
        logForDebugging(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${extraCertsPath}): ${error}`, { level: "error" });
      }
    }
    return certs.length > 0 ? certs : undefined;
  });
});

// src/utils/mtls.ts
import { Agent as HttpsAgent2 } from "https";
function getWebSocketTLSOptions() {
  const mtlsConfig = getMTLSConfig();
  const caCerts = getCACertificates();
  if (!mtlsConfig && !caCerts) {
    return;
  }
  return {
    ...mtlsConfig,
    ...caCerts && { ca: caCerts }
  };
}
function getTLSFetchOptions() {
  const mtlsConfig = getMTLSConfig();
  const caCerts = getCACertificates();
  if (!mtlsConfig && !caCerts) {
    return {};
  }
  const tlsConfig = {
    ...mtlsConfig,
    ...caCerts && { ca: caCerts }
  };
  if (typeof Bun !== "undefined") {
    return { tls: tlsConfig };
  }
  logForDebugging("TLS: Created undici agent with custom certificates");
  const undiciMod = __require("undici");
  const agent = new undiciMod.Agent({
    connect: {
      cert: tlsConfig.cert,
      key: tlsConfig.key,
      passphrase: tlsConfig.passphrase,
      ...tlsConfig.ca && { ca: tlsConfig.ca }
    },
    pipelining: 1
  });
  return { dispatcher: agent };
}
function clearMTLSCache() {
  getMTLSConfig.cache.clear?.();
  getMTLSAgent.cache.clear?.();
  logForDebugging("Cleared mTLS configuration cache");
}
function configureGlobalMTLS() {
  const mtlsConfig = getMTLSConfig();
  if (!mtlsConfig) {
    return;
  }
  if (process.env.NODE_EXTRA_CA_CERTS) {
    logForDebugging("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
  }
}
var getMTLSConfig, getMTLSAgent;
var init_mtls = __esm(() => {
  init_memoize();
  init_caCerts();
  init_debug();
  init_fsOperations();
  getMTLSConfig = memoize_default(() => {
    const config = {};
    if (process.env.CLAUDE_CODE_CLIENT_CERT) {
      try {
        config.cert = getFsImplementation().readFileSync(process.env.CLAUDE_CODE_CLIENT_CERT, { encoding: "utf8" });
        logForDebugging("mTLS: Loaded client certificate from CLAUDE_CODE_CLIENT_CERT");
      } catch (error) {
        logForDebugging(`mTLS: Failed to load client certificate: ${error}`, {
          level: "error"
        });
      }
    }
    if (process.env.CLAUDE_CODE_CLIENT_KEY) {
      try {
        config.key = getFsImplementation().readFileSync(process.env.CLAUDE_CODE_CLIENT_KEY, { encoding: "utf8" });
        logForDebugging("mTLS: Loaded client key from CLAUDE_CODE_CLIENT_KEY");
      } catch (error) {
        logForDebugging(`mTLS: Failed to load client key: ${error}`, {
          level: "error"
        });
      }
    }
    if (process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE) {
      config.passphrase = process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
      logForDebugging("mTLS: Using client key passphrase");
    }
    if (Object.keys(config).length === 0) {
      return;
    }
    return config;
  });
  getMTLSAgent = memoize_default(() => {
    const mtlsConfig = getMTLSConfig();
    const caCerts = getCACertificates();
    if (!mtlsConfig && !caCerts) {
      return;
    }
    const agentOptions = {
      ...mtlsConfig,
      ...caCerts && { ca: caCerts },
      keepAlive: true
    };
    logForDebugging("mTLS: Creating HTTPS agent with custom certificates");
    return new HttpsAgent2(agentOptions);
  });
});

// src/utils/proxy.ts
function disableKeepAlive() {
  keepAliveDisabled = true;
}
function getAddressFamily(options) {
  switch (options.family) {
    case 0:
    case 4:
    case 6:
      return options.family;
    case "IPv6":
      return 6;
    case "IPv4":
    case undefined:
      return 4;
    default:
      throw new Error(`Unsupported address family: ${options.family}`);
  }
}
function getProxyUrl(env = process.env) {
  return env.https_proxy || env.HTTPS_PROXY || env.http_proxy || env.HTTP_PROXY;
}
function getNoProxy(env = process.env) {
  return env.no_proxy || env.NO_PROXY;
}
function shouldBypassProxy(urlString, noProxy = getNoProxy()) {
  if (!noProxy)
    return false;
  if (noProxy === "*")
    return true;
  try {
    const url = new URL(urlString);
    const hostname = url.hostname.toLowerCase();
    const port = url.port || (url.protocol === "https:" ? "443" : "80");
    const hostWithPort = `${hostname}:${port}`;
    const noProxyList = noProxy.split(/[,\s]+/).filter(Boolean);
    return noProxyList.some((pattern) => {
      pattern = pattern.toLowerCase().trim();
      if (pattern.includes(":")) {
        return hostWithPort === pattern;
      }
      if (pattern.startsWith(".")) {
        const suffix = pattern;
        return hostname === pattern.substring(1) || hostname.endsWith(suffix);
      }
      return hostname === pattern;
    });
  } catch {
    return false;
  }
}
function createHttpsProxyAgent(proxyUrl, extra = {}) {
  const mtlsConfig = getMTLSConfig();
  const caCerts = getCACertificates();
  const agentOptions = {
    ...mtlsConfig && {
      cert: mtlsConfig.cert,
      key: mtlsConfig.key,
      passphrase: mtlsConfig.passphrase
    },
    ...caCerts && { ca: caCerts }
  };
  if (isEnvTruthy(process.env.CLAUDE_CODE_PROXY_RESOLVES_HOSTS)) {
    agentOptions.lookup = (hostname, options, callback) => {
      callback(null, hostname, getAddressFamily(options));
    };
  }
  return new HttpsProxyAgent(proxyUrl, { ...agentOptions, ...extra });
}
function createAxiosInstance(extra = {}) {
  const proxyUrl = getProxyUrl();
  const mtlsAgent = getMTLSAgent();
  const instance = axios_default.create({ proxy: false });
  if (!proxyUrl) {
    if (mtlsAgent)
      instance.defaults.httpsAgent = mtlsAgent;
    return instance;
  }
  const proxyAgent = createHttpsProxyAgent(proxyUrl, extra);
  instance.interceptors.request.use((config) => {
    if (config.url && shouldBypassProxy(config.url)) {
      config.httpsAgent = mtlsAgent;
      config.httpAgent = mtlsAgent;
    } else {
      config.httpsAgent = proxyAgent;
      config.httpAgent = proxyAgent;
    }
    return config;
  });
  return instance;
}
function getWebSocketProxyAgent(url) {
  const proxyUrl = getProxyUrl();
  if (!proxyUrl) {
    return;
  }
  if (shouldBypassProxy(url)) {
    return;
  }
  return createHttpsProxyAgent(proxyUrl);
}
function getWebSocketProxyUrl(url) {
  const proxyUrl = getProxyUrl();
  if (!proxyUrl) {
    return;
  }
  if (shouldBypassProxy(url)) {
    return;
  }
  return proxyUrl;
}
function getProxyFetchOptions(opts) {
  const base = keepAliveDisabled ? { keepalive: false } : {};
  if (opts?.forAnthropicAPI) {
    const unixSocket = process.env.ANTHROPIC_UNIX_SOCKET;
    if (unixSocket && typeof Bun !== "undefined") {
      return { ...base, unix: unixSocket };
    }
  }
  const proxyUrl = getProxyUrl();
  if (proxyUrl) {
    if (typeof Bun !== "undefined") {
      return { ...base, proxy: proxyUrl, ...getTLSFetchOptions() };
    }
    return { ...base, dispatcher: getProxyAgent(proxyUrl) };
  }
  return { ...base, ...getTLSFetchOptions() };
}
function configureGlobalAgents() {
  const proxyUrl = getProxyUrl();
  const mtlsAgent = getMTLSAgent();
  if (proxyInterceptorId !== undefined) {
    axios_default.interceptors.request.eject(proxyInterceptorId);
    proxyInterceptorId = undefined;
  }
  axios_default.defaults.proxy = undefined;
  axios_default.defaults.httpAgent = undefined;
  axios_default.defaults.httpsAgent = undefined;
  if (proxyUrl) {
    axios_default.defaults.proxy = false;
    const proxyAgent = createHttpsProxyAgent(proxyUrl);
    proxyInterceptorId = axios_default.interceptors.request.use((config) => {
      if (config.url && shouldBypassProxy(config.url)) {
        if (mtlsAgent) {
          config.httpsAgent = mtlsAgent;
          config.httpAgent = mtlsAgent;
        } else {
          delete config.httpsAgent;
          delete config.httpAgent;
        }
      } else {
        config.httpsAgent = proxyAgent;
        config.httpAgent = proxyAgent;
      }
      return config;
    });
    __require("undici").setGlobalDispatcher(getProxyAgent(proxyUrl));
  } else if (mtlsAgent) {
    axios_default.defaults.httpsAgent = mtlsAgent;
    const mtlsOptions = getTLSFetchOptions();
    if (mtlsOptions.dispatcher) {
      __require("undici").setGlobalDispatcher(mtlsOptions.dispatcher);
    }
  }
}
async function getAWSClientProxyConfig() {
  const proxyUrl = getProxyUrl();
  if (!proxyUrl) {
    return {};
  }
  const [{ NodeHttpHandler }, { defaultProvider }] = await Promise.all([
    import("./chunk-b5wjzfmm.js"),
    import("./chunk-jq0nacdh.js")
  ]);
  const agent = createHttpsProxyAgent(proxyUrl);
  const requestHandler = new NodeHttpHandler({
    httpAgent: agent,
    httpsAgent: agent
  });
  return {
    requestHandler,
    credentials: defaultProvider({
      clientConfig: { requestHandler }
    })
  };
}
function clearProxyCache() {
  getProxyAgent.cache.clear?.();
  logForDebugging("Cleared proxy agent cache");
}
var keepAliveDisabled = false, getProxyAgent, proxyInterceptorId;
var init_proxy = __esm(() => {
  init_axios();
  init_dist2();
  init_memoize();
  init_caCerts();
  init_debug();
  init_envUtils();
  init_mtls();
  getProxyAgent = memoize_default((uri) => {
    const undiciMod = __require("undici");
    const mtlsConfig = getMTLSConfig();
    const caCerts = getCACertificates();
    const proxyOptions = {
      httpProxy: uri,
      httpsProxy: uri,
      noProxy: process.env.NO_PROXY || process.env.no_proxy
    };
    if (mtlsConfig || caCerts) {
      const tlsOpts = {
        ...mtlsConfig && {
          cert: mtlsConfig.cert,
          key: mtlsConfig.key,
          passphrase: mtlsConfig.passphrase
        },
        ...caCerts && { ca: caCerts }
      };
      proxyOptions.connect = tlsOpts;
      proxyOptions.requestTls = tlsOpts;
    }
    return new undiciMod.EnvHttpProxyAgent(proxyOptions);
  });
});

export { HttpsProxyAgent, init_dist2 as init_dist, getCACertificates, clearCACertsCache, init_caCerts, getMTLSConfig, getWebSocketTLSOptions, clearMTLSCache, configureGlobalMTLS, init_mtls, disableKeepAlive, getProxyUrl, shouldBypassProxy, createAxiosInstance, getWebSocketProxyAgent, getWebSocketProxyUrl, getProxyFetchOptions, configureGlobalAgents, getAWSClientProxyConfig, clearProxyCache, init_proxy };
