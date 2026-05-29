// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/constants.js
var REGISTER_URL = "https://log.snssdk.com/service/2/device_register/", SETTINGS_URL = "https://is.snssdk.com/service/settings/v3/", WEBSOCKET_URL = "wss://frontier-audio-ime-ws.doubao.com/ocean/api/v1/ws", SAMI_CONFIG_URL = "https://ime.oceancloudapi.com/api/v1/user/get_config", HANDSHAKE_URL = "https://keyhub.zijieapi.com/handshake", NER_URL = "https://speech.bytedance.com/api/v3/context/ime/ner", AID = 401734, SAMI_APP_KEY = "SYlxZr6LnvBaIVmF", HKDF_INFO, APP_CONFIG, DEFAULT_DEVICE_CONFIG, USER_AGENT = "com.bytedance.android.doubaoime/100102018 (Linux; U; Android 16; en_US; Pixel 7 Pro; Build/BP2A.250605.031.A2; Cronet/TTNetVersion:94cf429a 2025-11-17 QuicVersion:1f89f732 2025-05-08)";
var init_constants = __esm(() => {
  HKDF_INFO = Buffer.from("4e30514609050cd3", "utf8");
  APP_CONFIG = {
    aid: AID,
    appName: "oime",
    versionCode: 100102018,
    versionName: "1.1.2",
    manifestVersionCode: 100102018,
    updateVersionCode: 100102018,
    channel: "official",
    package: "com.bytedance.android.doubaoime"
  };
  DEFAULT_DEVICE_CONFIG = {
    devicePlatform: "android",
    os: "android",
    osApi: "34",
    osVersion: "16",
    deviceType: "Pixel 7 Pro",
    deviceBrand: "google",
    deviceModel: "Pixel 7 Pro",
    resolution: "1080*2400",
    dpi: "420",
    language: "zh",
    timezone: 8,
    access: "wifi",
    rom: "UP1A.231005.007",
    romVersion: "UP1A.231005.007"
  };
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/device.js
import crypto from "crypto";
import fs from "fs";
import pathModule from "path";
function generateCdid() {
  return crypto.randomUUID();
}
function generateOpenudid() {
  return crypto.randomBytes(8).toString("hex");
}
function generateClientudid() {
  return crypto.randomUUID();
}
async function registerDevice() {
  const cdid = generateCdid();
  const openudid = generateOpenudid();
  const clientudid = generateClientudid();
  const header = {
    ...APP_CONFIG,
    ...DEFAULT_DEVICE_CONFIG,
    cdid,
    openudid,
    clientudid,
    region: "CN",
    tz_name: "Asia/Shanghai",
    tz_offset: 28800,
    sim_region: "cn",
    carrier_region: "cn",
    cpu_abi: "arm64-v8a",
    build_serial: "unknown",
    not_request_sender: 0,
    sig_hash: "",
    google_aid: "",
    mc: "",
    serial_number: ""
  };
  const body = {
    magic_tag: "ss_app_log",
    header,
    _gen_time: Date.now()
  };
  const params = new URLSearchParams;
  for (const [k, v] of Object.entries(DEFAULT_DEVICE_CONFIG)) {
    params.set(k, String(v));
  }
  params.set("channel", APP_CONFIG.channel);
  params.set("app_name", APP_CONFIG.appName);
  params.set("version_code", String(APP_CONFIG.versionCode));
  params.set("version_name", APP_CONFIG.versionName);
  params.set("manifest_version_code", String(APP_CONFIG.manifestVersionCode));
  params.set("update_version_code", String(APP_CONFIG.updateVersionCode));
  params.set("ssmix", "a");
  params.set("_rticket", String(Date.now()));
  params.set("cdid", cdid);
  const response = await fetch(`${REGISTER_URL}?${params}`, {
    method: "POST",
    headers: {
      "User-Agent": USER_AGENT,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`\u8BBE\u5907\u6CE8\u518C\u5931\u8D25: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  if (data.device_id && data.device_id !== 0) {
    return {
      deviceId: String(data.device_id),
      installId: String(data.install_id),
      cdid,
      openudid,
      clientudid
    };
  }
  throw new Error("\u8BBE\u5907\u6CE8\u518C\u5931\u8D25: \u672A\u83B7\u53D6\u5230 device_id");
}
async function getAsrToken(deviceId, cdid) {
  if (!cdid) {
    cdid = generateCdid();
  }
  const params = new URLSearchParams({
    device_platform: "android",
    os: "android",
    ssmix: "a",
    _rticket: String(Date.now()),
    cdid,
    channel: APP_CONFIG.channel,
    aid: String(APP_CONFIG.aid),
    app_name: APP_CONFIG.appName,
    version_code: String(APP_CONFIG.versionCode),
    version_name: APP_CONFIG.versionName,
    device_id: deviceId
  });
  const bodyStr = "body=null";
  const xSsStub = crypto.createHash("md5").update(bodyStr).digest("hex").toUpperCase();
  const response = await fetch(`${SETTINGS_URL}?${params}`, {
    method: "POST",
    headers: {
      "User-Agent": USER_AGENT,
      "x-ss-stub": xSsStub
    },
    body: bodyStr
  });
  if (!response.ok) {
    throw new Error(`\u83B7\u53D6 ASR Token \u5931\u8D25: ${response.status}`);
  }
  const data = await response.json();
  return data.data.settings.asr_config.app_key;
}
function loadCredentials(path) {
  try {
    const content = fs.readFileSync(path, "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}
function saveCredentials(filePath, creds) {
  const dir = pathModule.dirname(filePath);
  if (dir) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, JSON.stringify(creds, null, 2), "utf-8");
}
var init_device = __esm(() => {
  init_constants();
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/sami.js
import crypto2 from "crypto";
async function getSamiToken(cdid) {
  if (!cdid) {
    cdid = crypto2.randomUUID();
  }
  const deviceKeys = [
    "devicePlatform",
    "os",
    "resolution",
    "dpi",
    "deviceType",
    "deviceBrand",
    "language",
    "osApi",
    "osVersion"
  ];
  const params = new URLSearchParams({
    device_platform: "android",
    os: "android",
    ssmix: "a",
    _rticket: String(Date.now()),
    cdid,
    channel: APP_CONFIG.channel,
    aid: String(APP_CONFIG.aid),
    app_name: APP_CONFIG.appName,
    version_code: String(APP_CONFIG.versionCode),
    version_name: APP_CONFIG.versionName,
    manifest_version_code: String(APP_CONFIG.manifestVersionCode),
    update_version_code: String(APP_CONFIG.updateVersionCode),
    ...Object.fromEntries(deviceKeys.map((k) => [k, String(DEFAULT_DEVICE_CONFIG[k])])),
    ac: "wifi",
    "use-olympus-account": "1"
  });
  const bodyJson = JSON.stringify({ sami_app_key: SAMI_APP_KEY });
  const xSsStub = crypto2.createHash("md5").update(bodyJson).digest("hex").toUpperCase();
  const response = await fetch(`${SAMI_CONFIG_URL}?${params}`, {
    method: "POST",
    headers: {
      "User-Agent": USER_AGENT,
      "Content-Type": "application/json",
      app_version: APP_CONFIG.versionName,
      app_id: String(APP_CONFIG.aid),
      os_type: "Android",
      "x-ss-stub": xSsStub
    },
    body: bodyJson
  });
  if (!response.ok) {
    throw new Error(`\u83B7\u53D6 SAMI Token \u5931\u8D25: ${response.status}`);
  }
  const data = await response.json();
  return data.data.sami_token;
}
var init_sami = __esm(() => {
  init_constants();
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/wave-client.js
import crypto3 from "crypto";

class WaveSession {
  ticket;
  ticketLong;
  encryptionKey;
  clientRandom;
  serverRandom;
  sharedKey;
  ticketExp;
  ticketLongExp;
  expiresAt;
  constructor(props) {
    Object.assign(this, props);
  }
  isExpired() {
    return Date.now() / 1000 >= this.expiresAt;
  }
  toDict() {
    return {
      ticket: this.ticket,
      ticketLong: this.ticketLong,
      encryptionKey: this.encryptionKey.toString("base64"),
      clientRandom: this.clientRandom.toString("base64"),
      serverRandom: this.serverRandom.toString("base64"),
      sharedKey: this.sharedKey.toString("base64"),
      ticketExp: this.ticketExp,
      ticketLongExp: this.ticketLongExp,
      expiresAt: this.expiresAt
    };
  }
  static fromDict(data) {
    return new WaveSession({
      ticket: data.ticket,
      ticketLong: data.ticketLong,
      encryptionKey: Buffer.from(data.encryptionKey, "base64"),
      clientRandom: Buffer.from(data.clientRandom, "base64"),
      serverRandom: Buffer.from(data.serverRandom, "base64"),
      sharedKey: Buffer.from(data.sharedKey, "base64"),
      ticketExp: data.ticketExp,
      ticketLongExp: data.ticketLongExp,
      expiresAt: data.expiresAt
    });
  }
}

class WaveClient {
  deviceId;
  appId;
  session;
  onSessionUpdate;
  constructor(deviceId, appId, session, onSessionUpdate) {
    this.deviceId = deviceId;
    this.appId = String(appId);
    this.session = session ?? null;
    this.onSessionUpdate = onSessionUpdate;
  }
  static chacha20Crypt(key, nonce, data) {
    const nonce16 = Buffer.alloc(16);
    nonce.copy(nonce16, 4);
    const cipher = crypto3.createCipheriv("chacha20", key, nonce16);
    return Buffer.concat([cipher.update(data), cipher.final()]);
  }
  static deriveKey(sharedKey, salt, info) {
    return Buffer.from(crypto3.hkdfSync("sha256", sharedKey, salt, info, 32));
  }
  async handshake() {
    const ecdh = crypto3.createECDH("prime256v1");
    const clientRandom = crypto3.randomBytes(32);
    const pubkeyBytes = ecdh.getPublicKey(null, "uncompressed");
    const request = {
      version: 2,
      random: clientRandom.toString("base64"),
      app_id: this.appId,
      did: this.deviceId,
      key_shares: [
        {
          curve: "secp256r1",
          pubkey: pubkeyBytes.toString("base64")
        }
      ],
      cipher_suites: [4097]
    };
    const requestJson = JSON.stringify(request);
    const privateKeyDer = ecdh.getPrivateKey();
    const signKey = crypto3.createPrivateKey({
      key: {
        kty: "EC",
        crv: "P-256",
        x: pubkeyBytes.subarray(1, 33).toString("base64url"),
        y: pubkeyBytes.subarray(33, 65).toString("base64url"),
        d: privateKeyDer.toString("base64url")
      },
      format: "jwk"
    });
    const signature = crypto3.sign("sha256", Buffer.from(requestJson), signKey);
    const headers = {
      "Content-Type": "application/json",
      "x-tt-s-sign": signature.toString("base64"),
      "User-Agent": USER_AGENT
    };
    const response = await fetch(HANDSHAKE_URL, {
      method: "POST",
      headers,
      body: requestJson
    });
    if (!response.ok) {
      return false;
    }
    const resp = await response.json();
    const serverPubkeyBytes = Buffer.from(resp.key_share.pubkey, "base64");
    const sharedKey = ecdh.computeSecret(serverPubkeyBytes);
    const serverRandom = Buffer.from(resp.random, "base64");
    const salt = Buffer.concat([clientRandom, serverRandom]);
    const encryptionKey = WaveClient.deriveKey(sharedKey, salt, HKDF_INFO);
    this.session = new WaveSession({
      ticket: resp.ticket,
      ticketLong: resp.ticket_long,
      encryptionKey,
      clientRandom,
      serverRandom,
      sharedKey,
      ticketExp: resp.ticket_exp,
      ticketLongExp: resp.ticket_long_exp,
      expiresAt: Date.now() / 1000 + resp.ticket_exp - 60
    });
    this.onSessionUpdate?.(this.session);
    return true;
  }
  async ensureSession() {
    if (!this.session || this.session.isExpired()) {
      const ok = await this.handshake();
      if (!ok) {
        throw new Error("Wave \u63E1\u624B\u5931\u8D25");
      }
    }
  }
  async prepareRequest(plaintext, extraHeaders) {
    await this.ensureSession();
    const nonce = crypto3.randomBytes(12);
    const ciphertext = WaveClient.chacha20Crypt(this.session.encryptionKey, nonce, plaintext);
    const stub = crypto3.createHash("md5").update(ciphertext).digest("hex").toUpperCase();
    const headers = {
      "Content-Type": "application/json",
      "x-tt-e-b": "1",
      "x-tt-e-t": this.session.ticket,
      "x-tt-e-p": nonce.toString("base64"),
      "x-ss-stub": stub
    };
    if (extraHeaders) {
      Object.assign(headers, extraHeaders);
    }
    return { ciphertext, headers };
  }
  decrypt(ciphertext, nonce) {
    if (!this.session) {
      throw new Error("\u6CA1\u6709\u6D3B\u8DC3\u7684 Wave \u4F1A\u8BDD\uFF0C\u8BF7\u5148\u6267\u884C\u63E1\u624B");
    }
    return WaveClient.chacha20Crypt(this.session.encryptionKey, nonce, ciphertext);
  }
}
var init_wave_client = __esm(() => {
  init_constants();
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/config.js
class ASRConfig {
  url = WEBSOCKET_URL;
  aid = String(AID);
  userAgent = USER_AGENT;
  deviceId;
  token;
  credentialPath;
  sampleRate;
  channels;
  frameDurationMs;
  enablePunctuation;
  enableSpeechRejection;
  enableAsrTwopass;
  enableAsrThreepass;
  appName;
  connectTimeout;
  recvTimeout;
  _credentials = null;
  _initialized = false;
  _waveClient = null;
  constructor(opts = {}) {
    this.deviceId = opts.deviceId;
    this.token = opts.token;
    this.credentialPath = opts.credentialPath;
    this.sampleRate = opts.sampleRate ?? 16000;
    this.channels = opts.channels ?? 1;
    this.frameDurationMs = opts.frameDurationMs ?? 20;
    this.enablePunctuation = opts.enablePunctuation ?? true;
    this.enableSpeechRejection = opts.enableSpeechRejection ?? false;
    this.enableAsrTwopass = opts.enableAsrTwopass ?? true;
    this.enableAsrThreepass = opts.enableAsrThreepass ?? true;
    this.appName = opts.appName ?? "com.android.chrome";
    this.connectTimeout = opts.connectTimeout ?? 1e4;
    this.recvTimeout = opts.recvTimeout ?? 1e4;
  }
  async ensureCredentials() {
    if (this._initialized)
      return;
    const userDeviceId = this.deviceId;
    const userToken = this.token;
    if (this.credentialPath) {
      const fileCreds = loadCredentials(this.credentialPath);
      if (fileCreds) {
        this._credentials = fileCreds;
        if (!this.deviceId)
          this.deviceId = fileCreds.deviceId;
        if (!this.token)
          this.token = fileCreds.token;
      }
    }
    let needSave = false;
    if (!this.deviceId) {
      this._credentials = await registerDevice();
      this.deviceId = this._credentials.deviceId;
      needSave = true;
    }
    if (!this.token) {
      const cdid = this._credentials?.cdid;
      this.token = await getAsrToken(this.deviceId, cdid);
    }
    if (this.credentialPath && needSave && this._credentials) {
      this._credentials.token = this.token;
      saveCredentials(this.credentialPath, this._credentials);
    }
    if (userDeviceId !== undefined)
      this.deviceId = userDeviceId;
    if (userToken !== undefined)
      this.token = userToken;
    this._initialized = true;
  }
  get wsUrl() {
    this._ensureSync();
    return `${this.url}?aid=${this.aid}&device_id=${this.deviceId}`;
  }
  get headers() {
    return {
      "User-Agent": this.userAgent,
      "proto-version": "v2",
      "x-custom-keepalive": "true"
    };
  }
  async sessionConfig() {
    await this.ensureCredentials();
    return {
      audio_info: {
        channel: this.channels,
        format: "speech_opus",
        sample_rate: this.sampleRate
      },
      enable_punctuation: this.enablePunctuation,
      enable_speech_rejection: this.enableSpeechRejection,
      extra: {
        app_name: this.appName,
        cell_compress_rate: 8,
        did: this.deviceId,
        enable_asr_threepass: this.enableAsrThreepass,
        enable_asr_twopass: this.enableAsrTwopass,
        input_mode: "tool"
      }
    };
  }
  getToken() {
    this._ensureSync();
    return this.token;
  }
  async getWaveClient() {
    await this.ensureCredentials();
    if (!this._waveClient) {
      let cachedSession;
      if (this._credentials?.waveSession) {
        try {
          const session = WaveSession.fromDict(this._credentials.waveSession);
          if (!session.isExpired()) {
            cachedSession = session;
          }
        } catch {}
      }
      this._waveClient = new WaveClient(this.deviceId, this.aid, cachedSession, (session) => this._onWaveSessionUpdate(session));
    }
    return this._waveClient;
  }
  async getSamiToken() {
    await this.ensureCredentials();
    if (this._credentials?.samiToken && !this._jwtIsExpired(this._credentials.samiToken)) {
      return this._credentials.samiToken;
    }
    const cdid = this._credentials?.cdid;
    const samiToken = await getSamiToken(cdid);
    if (this._credentials) {
      this._credentials.samiToken = samiToken;
      if (this.credentialPath) {
        saveCredentials(this.credentialPath, this._credentials);
      }
    }
    return samiToken;
  }
  _onWaveSessionUpdate(session) {
    if (this._credentials) {
      this._credentials.waveSession = session.toDict();
      if (this.credentialPath) {
        saveCredentials(this.credentialPath, this._credentials);
      }
    }
  }
  _jwtIsExpired(token, margin = 60) {
    try {
      const payloadB64 = token.split(".")[1];
      const padded = payloadB64 + "=".repeat((4 - payloadB64.length % 4) % 4);
      const payload = JSON.parse(Buffer.from(padded, "base64url").toString("utf-8"));
      const exp = payload.exp;
      if (exp === undefined)
        return false;
      return Date.now() / 1000 >= exp - margin;
    } catch {
      return false;
    }
  }
  _ensureSync() {
    if (!this._initialized) {
      throw new Error("\u51ED\u636E\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5148\u8C03\u7528 ensureCredentials()");
    }
  }
}
var init_config = __esm(() => {
  init_constants();
  init_device();
  init_sami();
  init_wave_client();
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/audio.js
import { createRequire } from "module";

class AudioEncoder {
  sampleRate;
  channels;
  frameDurationMs;
  _lib = null;
  _encoder = null;
  _inputBuf = null;
  _outputBuf = null;
  _initialized = false;
  static MAX_FRAME_SIZE = 1276;
  constructor(sampleRate = 16000, channels = 1, frameDurationMs = 20) {
    this.sampleRate = sampleRate;
    this.channels = channels;
    this.frameDurationMs = frameDurationMs;
  }
  get samplesPerFrame() {
    return this.sampleRate * this.frameDurationMs / 1000;
  }
  get bytesPerFrame() {
    return this.samplesPerFrame * 2;
  }
  init() {
    if (this._initialized)
      return;
    const lib = require2(WASM_PATH);
    const errPtr = lib._malloc(4);
    const encoder = lib._opus_encoder_create(this.sampleRate, this.channels, 2049, errPtr);
    const err = new Int32Array(lib.HEAPU8.buffer, errPtr, 1)[0];
    lib._free(errPtr);
    if (err !== 0) {
      throw new Error(`Opus encoder \u521B\u5EFA\u5931\u8D25: error code ${err}`);
    }
    this._lib = lib;
    this._encoder = encoder;
    this._inputBuf = lib._malloc(this.samplesPerFrame * this.channels * 4);
    this._outputBuf = lib._malloc(AudioEncoder.MAX_FRAME_SIZE);
    this._initialized = true;
  }
  encode(pcmFrame) {
    this.init();
    const samplesPerChannel = this.samplesPerFrame;
    const totalSamples = samplesPerChannel * this.channels;
    const floatView = new Float32Array(this._lib.HEAPU8.buffer, this._inputBuf, totalSamples);
    for (let i = 0;i < totalSamples; i++) {
      const sample = i < pcmFrame.length / 2 ? pcmFrame.readInt16LE(i * 2) / 32768 : 0;
      floatView[i] = sample;
    }
    const len = this._lib._opus_encode_float(this._encoder, this._inputBuf, samplesPerChannel, this._outputBuf, AudioEncoder.MAX_FRAME_SIZE);
    if (len < 0) {
      throw new Error(`Opus \u7F16\u7801\u5931\u8D25: error code ${len}`);
    }
    return Buffer.from(this._lib.HEAPU8.buffer, this._outputBuf, len).slice();
  }
  encodeAll(pcmData) {
    this.init();
    const frames = [];
    const bpf = this.bytesPerFrame;
    for (let i = 0;i < pcmData.length; i += bpf) {
      let chunk = pcmData.subarray(i, i + bpf);
      if (chunk.length < bpf) {
        const padded = Buffer.alloc(bpf);
        chunk.copy(padded);
        chunk = padded;
      }
      frames.push(this.encode(Buffer.from(chunk)));
    }
    return frames;
  }
  destroy() {
    if (this._encoder !== null) {
      this._lib?._opus_encoder_destroy(this._encoder);
      this._encoder = null;
    }
    if (this._inputBuf !== null) {
      this._lib?._free(this._inputBuf);
      this._inputBuf = null;
    }
    if (this._outputBuf !== null) {
      this._lib?._free(this._outputBuf);
      this._outputBuf = null;
    }
    this._initialized = false;
  }
}
var require2, WASM_PATH;
var init_audio = __esm(() => {
  require2 = createRequire(import.meta.url);
  WASM_PATH = require2.resolve("opus-encdec/dist/libopus-encoder.wasm.js");
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/asr_pb.js
import { createRequire as createRequire2 } from "module";
function encodeAsrRequest(msg) {
  const w = new Writer;
  if (msg.token != null) {
    w.uint32(2 << 3 | WIRE_TYPE_LENGTH_DELIMITED).string(msg.token);
  }
  if (msg.serviceName != null) {
    w.uint32(3 << 3 | WIRE_TYPE_LENGTH_DELIMITED).string(msg.serviceName);
  }
  if (msg.methodName != null) {
    w.uint32(5 << 3 | WIRE_TYPE_LENGTH_DELIMITED).string(msg.methodName);
  }
  if (msg.payload != null) {
    w.uint32(6 << 3 | WIRE_TYPE_LENGTH_DELIMITED).string(msg.payload);
  }
  if (msg.audioData != null && msg.audioData.length > 0) {
    w.uint32(7 << 3 | WIRE_TYPE_LENGTH_DELIMITED).bytes(msg.audioData);
  }
  if (msg.requestId != null) {
    w.uint32(8 << 3 | WIRE_TYPE_LENGTH_DELIMITED).string(msg.requestId);
  }
  if (msg.frameState != null) {
    w.uint32(9 << 3 | WIRE_TYPE_VARINT).uint32(msg.frameState);
  }
  return w.finish();
}
function decodeAsrResponse(buf) {
  const r = new Reader(buf);
  const msg = {};
  while (r.pos < r.len) {
    const tag = r.uint32();
    switch (tag >>> 3) {
      case 1:
        msg.requestId = r.string();
        break;
      case 2:
        msg.taskId = r.string();
        break;
      case 3:
        msg.serviceName = r.string();
        break;
      case 4:
        msg.messageType = r.string();
        break;
      case 5:
        msg.statusCode = r.int32();
        break;
      case 6:
        msg.statusMessage = r.string();
        break;
      case 7:
        msg.resultJson = r.string();
        break;
      case 9:
        msg.unknownField9 = r.int32();
        break;
      default:
        r.skipType(tag & 7);
        break;
    }
  }
  return msg;
}
var require3, protobufjs, Writer, Reader, FrameState, WIRE_TYPE_VARINT = 0, WIRE_TYPE_LENGTH_DELIMITED = 2;
var init_asr_pb = __esm(() => {
  require3 = createRequire2(import.meta.url);
  protobufjs = require3("protobufjs");
  ({ Writer, Reader } = protobufjs);
  (function(FrameState2) {
    FrameState2[FrameState2["FRAME_STATE_UNSPECIFIED"] = 0] = "FRAME_STATE_UNSPECIFIED";
    FrameState2[FrameState2["FRAME_STATE_FIRST"] = 1] = "FRAME_STATE_FIRST";
    FrameState2[FrameState2["FRAME_STATE_MIDDLE"] = 3] = "FRAME_STATE_MIDDLE";
    FrameState2[FrameState2["FRAME_STATE_LAST"] = 9] = "FRAME_STATE_LAST";
  })(FrameState || (FrameState = {}));
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/types.js
var ResponseType, ASRError;
var init_types = __esm(() => {
  (function(ResponseType2) {
    ResponseType2["TASK_STARTED"] = "TASK_STARTED";
    ResponseType2["SESSION_STARTED"] = "SESSION_STARTED";
    ResponseType2["SESSION_FINISHED"] = "SESSION_FINISHED";
    ResponseType2["VAD_START"] = "VAD_START";
    ResponseType2["INTERIM_RESULT"] = "INTERIM_RESULT";
    ResponseType2["FINAL_RESULT"] = "FINAL_RESULT";
    ResponseType2["HEARTBEAT"] = "HEARTBEAT";
    ResponseType2["ERROR"] = "ERROR";
    ResponseType2["UNKNOWN"] = "UNKNOWN";
  })(ResponseType || (ResponseType = {}));
  ASRError = class ASRError extends Error {
    response;
    constructor(message, response) {
      super(message);
      this.name = "ASRError";
      this.response = response;
    }
  };
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/asr.js
import crypto4 from "crypto";
import WebSocket from "ws";
function buildStartTask(requestId, token) {
  return encodeAsrRequest({
    token,
    serviceName: "ASR",
    methodName: "StartTask",
    requestId
  });
}
function buildStartSession(requestId, token, config) {
  return encodeAsrRequest({
    token,
    serviceName: "ASR",
    methodName: "StartSession",
    requestId,
    payload: JSON.stringify(config)
  });
}
function buildFinishSession(requestId, token) {
  return encodeAsrRequest({
    token,
    serviceName: "ASR",
    methodName: "FinishSession",
    requestId
  });
}
function buildAsrRequest(audioData, requestId, frameState, timestampMs) {
  const metadata = JSON.stringify({ extra: {}, timestamp_ms: timestampMs });
  return encodeAsrRequest({
    serviceName: "ASR",
    methodName: "TaskRequest",
    payload: metadata,
    audioData,
    requestId,
    frameState
  });
}
function parseWord(data) {
  return {
    word: data.word ?? "",
    startTime: data.start_time ?? 0,
    endTime: data.end_time ?? 0
  };
}
function parseOIDecodingInfo(data) {
  if (!data)
    return;
  return {
    oiFormerWordNum: data.oi_former_word_num ?? 0,
    oiLatterWordNum: data.oi_latter_word_num ?? 0,
    oiWords: data.oi_words
  };
}
function parseAlternative(data) {
  const words = (data.words ?? []).map(parseWord);
  return {
    text: data.text ?? "",
    startTime: data.start_time ?? 0,
    endTime: data.end_time ?? 0,
    words,
    semanticRelatedToPrev: data.semantic_related_to_prev,
    oiDecodingInfo: parseOIDecodingInfo(data.oi_decoding_info)
  };
}
function parseResult(data) {
  const alternatives = (data.alternatives ?? []).map(parseAlternative);
  return {
    text: data.text ?? "",
    startTime: data.start_time ?? 0,
    endTime: data.end_time ?? 0,
    confidence: data.confidence ?? 0,
    alternatives,
    isInterim: data.is_interim ?? true,
    isVadFinished: data.is_vad_finished ?? false,
    index: data.index ?? 0
  };
}
function parseExtra(data) {
  return {
    audioDuration: data.audio_duration,
    modelAvgRtf: data.model_avg_rtf,
    modelSendFirstResponse: data.model_send_first_response,
    speechAdaptationVersion: data.speech_adaptation_version,
    modelTotalProcessTime: data.model_total_process_time,
    packetNumber: data.packet_number,
    vadStart: data.vad_start,
    reqPayload: data.req_payload
  };
}
function parseResponse(data) {
  const pb = decodeAsrResponse(new Uint8Array(data));
  const messageType = pb.messageType;
  const resultJson = pb.resultJson;
  const statusMessage = pb.statusMessage ?? "";
  if (messageType === "TaskStarted") {
    return { type: ResponseType.TASK_STARTED, text: "", isFinal: false, vadStart: false, vadFinished: false, packetNumber: -1, errorMsg: "", results: [] };
  }
  if (messageType === "SessionStarted") {
    return { type: ResponseType.SESSION_STARTED, text: "", isFinal: false, vadStart: false, vadFinished: false, packetNumber: -1, errorMsg: "", results: [] };
  }
  if (messageType === "SessionFinished") {
    return { type: ResponseType.SESSION_FINISHED, text: "", isFinal: false, vadStart: false, vadFinished: false, packetNumber: -1, errorMsg: "", results: [] };
  }
  if (messageType === "TaskFailed" || messageType === "SessionFailed") {
    return { type: ResponseType.ERROR, text: "", isFinal: false, vadStart: false, vadFinished: false, packetNumber: -1, errorMsg: statusMessage, results: [] };
  }
  if (!resultJson) {
    return { type: ResponseType.UNKNOWN, text: "", isFinal: false, vadStart: false, vadFinished: false, packetNumber: -1, errorMsg: "", results: [] };
  }
  let jsonData;
  try {
    jsonData = JSON.parse(resultJson);
  } catch {
    return { type: ResponseType.UNKNOWN, text: "", isFinal: false, vadStart: false, vadFinished: false, packetNumber: -1, errorMsg: "", results: [] };
  }
  const resultsRaw = jsonData.results;
  const extraRaw = jsonData.extra ?? {};
  const parsedExtra = parseExtra(extraRaw);
  if (!resultsRaw) {
    return {
      type: ResponseType.HEARTBEAT,
      text: "",
      isFinal: false,
      vadStart: false,
      vadFinished: false,
      packetNumber: extraRaw.packet_number ?? -1,
      errorMsg: "",
      results: [],
      rawJson: jsonData,
      extra: parsedExtra
    };
  }
  const parsedResults = resultsRaw.map(parseResult);
  if (extraRaw.vad_start) {
    return {
      type: ResponseType.VAD_START,
      text: "",
      isFinal: false,
      vadStart: true,
      vadFinished: false,
      packetNumber: -1,
      errorMsg: "",
      rawJson: jsonData,
      results: parsedResults,
      extra: parsedExtra
    };
  }
  let text = "";
  let isInterim = true;
  let vadFinished = false;
  let nonstreamResult = false;
  for (const r of resultsRaw) {
    if (r.text)
      text = r.text;
    if (r.is_interim === false)
      isInterim = false;
    if (r.is_vad_finished)
      vadFinished = true;
    if (r.extra?.nonstream_result)
      nonstreamResult = true;
  }
  if (nonstreamResult || !isInterim && vadFinished) {
    return {
      type: ResponseType.FINAL_RESULT,
      text,
      isFinal: true,
      vadStart: false,
      vadFinished,
      packetNumber: -1,
      errorMsg: "",
      rawJson: jsonData,
      results: parsedResults,
      extra: parsedExtra
    };
  }
  return {
    type: ResponseType.INTERIM_RESULT,
    text,
    isFinal: false,
    vadStart: false,
    vadFinished: false,
    packetNumber: -1,
    errorMsg: "",
    rawJson: jsonData,
    results: parsedResults,
    extra: parsedExtra
  };
}
function wsConnect(url, headers) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url, { headers });
    ws.once("open", () => resolve(ws));
    ws.once("error", reject);
  });
}
async function wsSend(ws, data) {
  return new Promise((resolve, reject) => {
    ws.send(data, (err) => err ? reject(err) : resolve());
  });
}
async function wsRecv(ws) {
  return new Promise((resolve, reject) => {
    const onMessage = (data) => {
      ws.removeListener("error", onError);
      resolve(Buffer.isBuffer(data) ? data : Buffer.from(data));
    };
    const onError = (err) => {
      ws.removeListener("message", onMessage);
      reject(err);
    };
    ws.once("message", onMessage);
    ws.once("error", onError);
  });
}

class DoubaoASR {
  config;
  encoder;
  constructor(config) {
    this.config = config;
    this.encoder = new AudioEncoder(config.sampleRate, config.channels, config.frameDurationMs);
  }
  async transcribe(audio, opts) {
    let finalText = "";
    for await (const response of this.transcribeStream(audio, { realtime: opts?.realtime })) {
      if (response.type === ResponseType.INTERIM_RESULT && opts?.onInterim) {
        opts.onInterim(response.text);
      } else if (response.type === ResponseType.FINAL_RESULT) {
        finalText = response.text;
      } else if (response.type === ResponseType.ERROR) {
        throw new ASRError(response.errorMsg, response);
      }
    }
    return finalText;
  }
  async* transcribeStream(audio, opts) {
    const opusFrames = this.encoder.encodeAll(audio);
    const state = this.createSessionState();
    const ws = await wsConnect(this.config.wsUrl, this.config.headers);
    try {
      for await (const resp of this.initializeSession(ws, state)) {
        yield resp;
      }
      const queue = [];
      let queueResolve = null;
      const onMessage = (data) => {
        const resp = parseResponse(Buffer.isBuffer(data) ? data : Buffer.from(data));
        if (queueResolve) {
          queueResolve(resp);
          queueResolve = null;
        } else {
          queue.push(resp);
        }
      };
      const onClose = () => {
        state.isFinished = true;
        if (queueResolve) {
          queueResolve(null);
          queueResolve = null;
        }
      };
      ws.on("message", onMessage);
      ws.on("close", onClose);
      const sendPromise = this.sendAudio(ws, opusFrames, state, opts?.realtime ?? false);
      try {
        while (!state.isFinished) {
          let resp;
          if (queue.length > 0) {
            resp = queue.shift();
          } else {
            resp = await new Promise((resolve) => {
              const timer = setTimeout(() => {
                queueResolve = null;
                resolve(null);
              }, this.config.recvTimeout);
              queueResolve = (val) => {
                clearTimeout(timer);
                resolve(val);
              };
            });
          }
          if (resp === null)
            break;
          if (resp.type === ResponseType.HEARTBEAT)
            continue;
          yield resp;
          if (resp.type === ResponseType.ERROR)
            break;
        }
      } finally {
        ws.removeListener("message", onMessage);
        ws.removeListener("close", onClose);
        ws.close();
        await sendPromise.catch(() => {});
      }
    } catch (err) {
      ws.close();
      throw new ASRError(`WebSocket \u9519\u8BEF: ${err instanceof Error ? err.message : err}`);
    }
  }
  async* transcribeRealtime(audioSource) {
    const state = this.createSessionState();
    const ws = await wsConnect(this.config.wsUrl, this.config.headers);
    try {
      for await (const resp of this.initializeSession(ws, state)) {
        yield resp;
      }
      const queue = [];
      let queueResolve = null;
      const onMessage = (data) => {
        const resp = parseResponse(Buffer.isBuffer(data) ? data : Buffer.from(data));
        if (queueResolve) {
          queueResolve(resp);
          queueResolve = null;
        } else {
          queue.push(resp);
        }
      };
      const onClose = () => {
        state.isFinished = true;
        if (queueResolve) {
          queueResolve(null);
          queueResolve = null;
        }
      };
      ws.on("message", onMessage);
      ws.on("close", onClose);
      const sendPromise = this.sendAudioRealtime(ws, audioSource, state);
      try {
        while (!state.isFinished) {
          let resp;
          if (queue.length > 0) {
            resp = queue.shift();
          } else {
            resp = await new Promise((resolve) => {
              queueResolve = resolve;
            });
          }
          if (resp === null)
            break;
          if (resp.type === ResponseType.HEARTBEAT)
            continue;
          yield resp;
          if (resp.type === ResponseType.ERROR)
            break;
        }
      } finally {
        ws.removeListener("message", onMessage);
        ws.removeListener("close", onClose);
        ws.close();
        await sendPromise.catch(() => {});
      }
    } catch (err) {
      ws.close();
      throw new ASRError(`WebSocket \u9519\u8BEF: ${err instanceof Error ? err.message : err}`);
    }
  }
  createSessionState() {
    return {
      requestId: crypto4.randomUUID(),
      finalText: "",
      isFinished: false,
      error: null
    };
  }
  async* initializeSession(ws, state) {
    const token = this.config.getToken();
    await wsSend(ws, buildStartTask(state.requestId, token));
    const taskResp = await wsRecv(ws);
    const parsed = parseResponse(taskResp);
    if (parsed.type === ResponseType.ERROR) {
      throw new ASRError(`StartTask \u5931\u8D25: ${parsed.errorMsg}`, parsed);
    }
    yield parsed;
    const sessionConfig = await this.config.sessionConfig();
    await wsSend(ws, buildStartSession(state.requestId, token, sessionConfig));
    const sessionResp = await wsRecv(ws);
    const parsedSession = parseResponse(sessionResp);
    if (parsedSession.type === ResponseType.ERROR) {
      throw new ASRError(`StartSession \u5931\u8D25: ${parsedSession.errorMsg}`, parsedSession);
    }
    yield parsedSession;
  }
  async sendAudio(ws, opusFrames, state, realtime) {
    const timestampMs = Date.now();
    const frameInterval = this.config.frameDurationMs;
    for (let i = 0;i < opusFrames.length; i++) {
      if (state.isFinished)
        break;
      let frameState;
      if (i === 0) {
        frameState = FrameState.FRAME_STATE_FIRST;
      } else if (i === opusFrames.length - 1) {
        frameState = FrameState.FRAME_STATE_LAST;
      } else {
        frameState = FrameState.FRAME_STATE_MIDDLE;
      }
      const msg = buildAsrRequest(opusFrames[i], state.requestId, frameState, timestampMs + i * frameInterval);
      await wsSend(ws, msg);
      if (realtime) {
        await new Promise((r) => setTimeout(r, frameInterval));
      }
    }
    if (!state.isFinished) {
      await wsSend(ws, buildFinishSession(state.requestId, this.config.getToken()));
    }
  }
  async sendAudioRealtime(ws, audioSource, state) {
    const timestampMs = Date.now();
    let frameIndex = 0;
    const bpf = this.encoder.bytesPerFrame;
    const spf = this.encoder.samplesPerFrame;
    let pcmBuffer = Buffer.alloc(0);
    for await (const chunk of audioSource) {
      if (state.isFinished)
        break;
      pcmBuffer = Buffer.concat([pcmBuffer, Buffer.from(chunk)]);
      while (pcmBuffer.length >= bpf) {
        const pcmFrame = pcmBuffer.subarray(0, bpf);
        pcmBuffer = pcmBuffer.subarray(bpf);
        const opusFrame = this.encoder.encode(Buffer.from(pcmFrame));
        const frameState = frameIndex === 0 ? FrameState.FRAME_STATE_FIRST : FrameState.FRAME_STATE_MIDDLE;
        const msg = buildAsrRequest(opusFrame, state.requestId, frameState, timestampMs + frameIndex * this.config.frameDurationMs);
        await wsSend(ws, msg);
        frameIndex++;
      }
    }
    if (pcmBuffer.length > 0 && !state.isFinished) {
      const padded = Buffer.alloc(bpf);
      pcmBuffer.copy(padded);
      const opusFrame = this.encoder.encode(padded);
      const msg = buildAsrRequest(opusFrame, state.requestId, FrameState.FRAME_STATE_LAST, timestampMs + frameIndex * this.config.frameDurationMs);
      await wsSend(ws, msg);
    } else if (frameIndex > 0 && !state.isFinished) {
      const silentFrame = Buffer.alloc(bpf);
      const opusFrame = this.encoder.encode(silentFrame);
      const msg = buildAsrRequest(opusFrame, state.requestId, FrameState.FRAME_STATE_LAST, timestampMs + frameIndex * this.config.frameDurationMs);
      await wsSend(ws, msg);
    }
    if (!state.isFinished) {
      await wsSend(ws, buildFinishSession(state.requestId, this.config.getToken()));
    }
  }
}
async function transcribe(audio, opts) {
  const config = opts?.config ?? new ASRConfig;
  await config.ensureCredentials();
  const asr = new DoubaoASR(config);
  return asr.transcribe(audio, { realtime: opts?.realtime, onInterim: opts?.onInterim });
}
async function* transcribeStream(audio, opts) {
  const config = opts?.config ?? new ASRConfig;
  await config.ensureCredentials();
  const asr = new DoubaoASR(config);
  yield* asr.transcribeStream(audio, { realtime: opts?.realtime });
}
async function* transcribeRealtime(audioSource, opts) {
  const config = opts?.config ?? new ASRConfig;
  await config.ensureCredentials();
  const asr = new DoubaoASR(config);
  yield* asr.transcribeRealtime(audioSource);
}
var init_asr = __esm(() => {
  init_config();
  init_audio();
  init_asr_pb();
  init_types();
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/ner.js
import crypto5 from "crypto";
function buildNerRequest(text, did, appName = "") {
  return {
    user: {
      uid: "0",
      did,
      app_name: appName,
      app_version: APP_CONFIG.versionName,
      sdk_version: "",
      platform: "android",
      experience_improve: false
    },
    text,
    additions: {}
  };
}
async function getNerResults(waveClient, samiToken, text, did, appName = "") {
  const request = buildNerRequest(text, did, appName);
  const headers = {
    app_version: APP_CONFIG.versionName,
    app_id: String(AID),
    os_type: "android",
    "x-api-resource-id": "asr.user.context",
    "x-api-app-key": SAMI_APP_KEY,
    "x-api-token": samiToken,
    "x-api-request-id": crypto5.randomUUID()
  };
  const reqData = Buffer.from(JSON.stringify(request), "utf-8");
  const { ciphertext, headers: encHeaders } = await waveClient.prepareRequest(reqData, headers);
  const response = await fetch(NER_URL, {
    method: "POST",
    headers: encHeaders,
    body: ciphertext
  });
  if (!response.ok) {
    throw new Error(`NER \u8BF7\u6C42\u5931\u8D25: ${response.status} ${response.statusText}`);
  }
  const respHeaders = response.headers;
  const nonceBase64 = respHeaders.get("x-tt-e-p");
  if (!nonceBase64) {
    throw new Error("NER \u54CD\u5E94\u7F3A\u5C11 x-tt-e-p \u5934");
  }
  const nonce = Buffer.from(nonceBase64, "base64");
  const responseBody = Buffer.from(await response.arrayBuffer());
  const decoded = waveClient.decrypt(responseBody, nonce);
  return JSON.parse(decoded.toString("utf-8"));
}
async function ner(config, text, appName = "") {
  await config.ensureCredentials();
  const waveClient = await config.getWaveClient();
  const samiToken = await config.getSamiToken();
  return getNerResults(waveClient, samiToken, text, config.deviceId, appName);
}
var init_ner = __esm(() => {
  init_constants();
});

// node_modules/.bun/doubaoime-asr@0.1.0/node_modules/doubaoime-asr/dist/index.js
var init_dist = __esm(() => {
  init_asr();
  init_config();
  init_wave_client();
  init_ner();
  init_types();
});
init_dist();

export {
  transcribeStream,
  transcribeRealtime,
  transcribe,
  ner,
  WaveSession,
  WaveClient,
  ResponseType,
  DoubaoASR,
  ASRError,
  ASRConfig
};
