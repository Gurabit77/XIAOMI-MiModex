// @bun
import {
  InternalServerException,
  ModelStreamErrorException,
  ThrottlingException,
  ValidationException,
  fromArrayBuffer,
  fromString,
  fromUtf8,
  init_dist_es,
  init_dist_es1 as init_dist_es2,
  init_dist_es2 as init_dist_es3,
  toUtf8
} from "./chunk-whbqxjkj.js";
import"./chunk-4jecp5fr.js";
import"./chunk-8b5a0z0t.js";
import"./chunk-fz59axqr.js";
import"./chunk-86apn0aq.js";
import"./chunk-kggjyy2e.js";
import"./chunk-9r117f3a.js";
import"./chunk-57y89twd.js";
import"./chunk-6qkspz0q.js";
import {
  require_dist_cjs3 as require_dist_cjs
} from "./chunk-7vfjvamn.js";
import"./chunk-cahmkqhh.js";
import {
  init_sdk
} from "./chunk-d3bk85eq.js";
import {
  APIError,
  AnthropicError,
  BaseAnthropic,
  Beta,
  Completions,
  Messages,
  Stream,
  init_client,
  init_error,
  init_error1 as init_error2,
  init_resources,
  init_streaming
} from "./chunk-cw8rngb2.js";
import"./chunk-m53ks0yf.js";
import"./chunk-gd1ye7ef.js";
import"./chunk-87zgmycv.js";
import"./chunk-4ch5vxv6.js";
import"./chunk-6vqkv5g7.js";
import"./chunk-27an25fd.js";
import"./chunk-tp6bgx9r.js";
import"./chunk-2nayx6q1.js";
import {
  __commonJS,
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/tslib@1.14.1/node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports, module) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __createBinding;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __createBinding = function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __exportStar = function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !exports2.hasOwnProperty(p))
          exports2[p] = m[p];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k))
            result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
  });
});

// node_modules/.bun/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = undefined;
  exports.BLOCK_SIZE = 64;
  exports.DIGEST_LENGTH = 32;
  exports.KEY = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  exports.INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
});

// node_modules/.bun/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/RawSha256.js
var require_RawSha256 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RawSha256 = undefined;
  var constants_1 = require_constants();
  var RawSha256 = function() {
    function RawSha2562() {
      this.state = Int32Array.from(constants_1.INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    RawSha2562.prototype.update = function(data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === constants_1.BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function() {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
          for (var i = this.bufferLength;i < constants_1.BLOCK_SIZE; i++) {
            bufferView.setUint8(i, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i = this.bufferLength;i < constants_1.BLOCK_SIZE - 8; i++) {
          bufferView.setUint8(i, 0);
        }
        bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(constants_1.DIGEST_LENGTH);
      for (var i = 0;i < 8; i++) {
        out[i * 4] = this.state[i] >>> 24 & 255;
        out[i * 4 + 1] = this.state[i] >>> 16 & 255;
        out[i * 4 + 2] = this.state[i] >>> 8 & 255;
        out[i * 4 + 3] = this.state[i] >>> 0 & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function() {
      var _a = this, buffer = _a.buffer, state = _a.state;
      var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
      for (var i = 0;i < constants_1.BLOCK_SIZE; i++) {
        if (i < 16) {
          this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
        } else {
          var u = this.temp[i - 2];
          var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
          u = this.temp[i - 15];
          var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
          this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
        }
        var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i] + this.temp[i] | 0) | 0) | 0;
        var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = state3 + t1 | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = t1 + t2 | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  }();
  exports.RawSha256 = RawSha256;
});

// node_modules/.bun/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
var require_pureJs = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toUtf8 = exports.fromUtf8 = undefined;
  var fromUtf82 = (input) => {
    const bytes = [];
    for (let i = 0, len = input.length;i < len; i++) {
      const value = input.charCodeAt(i);
      if (value < 128) {
        bytes.push(value);
      } else if (value < 2048) {
        bytes.push(value >> 6 | 192, value & 63 | 128);
      } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
        const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
        bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
      } else {
        bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
      }
    }
    return Uint8Array.from(bytes);
  };
  exports.fromUtf8 = fromUtf82;
  var toUtf82 = (input) => {
    let decoded = "";
    for (let i = 0, len = input.length;i < len; i++) {
      const byte = input[i];
      if (byte < 128) {
        decoded += String.fromCharCode(byte);
      } else if (192 <= byte && byte < 224) {
        const nextByte = input[++i];
        decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
      } else if (240 <= byte && byte < 365) {
        const surrogatePair = [byte, input[++i], input[++i], input[++i]];
        const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
        decoded += decodeURIComponent(encoded);
      } else {
        decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
      }
    }
    return decoded;
  };
  exports.toUtf8 = toUtf82;
});

// node_modules/.bun/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toUtf8 = exports.fromUtf8 = undefined;
  function fromUtf82(input) {
    return new TextEncoder().encode(input);
  }
  exports.fromUtf8 = fromUtf82;
  function toUtf82(input) {
    return new TextDecoder("utf-8").decode(input);
  }
  exports.toUtf8 = toUtf82;
});

// node_modules/.bun/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toUtf8 = exports.fromUtf8 = undefined;
  var pureJs_1 = require_pureJs();
  var whatwgEncodingApi_1 = require_whatwgEncodingApi();
  var fromUtf82 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
  exports.fromUtf8 = fromUtf82;
  var toUtf82 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
  exports.toUtf8 = toUtf82;
});

// node_modules/.bun/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertToBuffer = undefined;
  var util_utf8_browser_1 = require_dist_cjs2();
  var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : util_utf8_browser_1.fromUtf8;
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf82(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }
  exports.convertToBuffer = convertToBuffer;
});

// node_modules/.bun/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isEmptyData = undefined;
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }
  exports.isEmptyData = isEmptyData;
});

// node_modules/.bun/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.numToUint8 = undefined;
  function numToUint8(num) {
    return new Uint8Array([
      (num & 4278190080) >> 24,
      (num & 16711680) >> 16,
      (num & 65280) >> 8,
      num & 255
    ]);
  }
  exports.numToUint8 = numToUint8;
});

// node_modules/.bun/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.uint32ArrayFrom = undefined;
  function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
      var return_array = new Uint32Array(a_lookUpTable.length);
      var a_index = 0;
      while (a_index < a_lookUpTable.length) {
        return_array[a_index] = a_lookUpTable[a_index];
        a_index += 1;
      }
      return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
  }
  exports.uint32ArrayFrom = uint32ArrayFrom;
});

// node_modules/.bun/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = undefined;
  var convertToBuffer_1 = require_convertToBuffer();
  Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
    return convertToBuffer_1.convertToBuffer;
  } });
  var isEmptyData_1 = require_isEmptyData();
  Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
    return isEmptyData_1.isEmptyData;
  } });
  var numToUint8_1 = require_numToUint8();
  Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
    return numToUint8_1.numToUint8;
  } });
  var uint32ArrayFrom_1 = require_uint32ArrayFrom();
  Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
    return uint32ArrayFrom_1.uint32ArrayFrom;
  } });
});

// node_modules/.bun/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/jsSha256.js
var require_jsSha256 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Sha256 = undefined;
  var tslib_1 = require_tslib();
  var constants_1 = require_constants();
  var RawSha256_1 = require_RawSha256();
  var util_1 = require_build();
  var Sha256 = function() {
    function Sha2562(secret) {
      this.secret = secret;
      this.hash = new RawSha256_1.RawSha256;
      this.reset();
    }
    Sha2562.prototype.update = function(toHash) {
      if ((0, util_1.isEmptyData)(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update((0, util_1.convertToBuffer)(toHash));
      } catch (e) {
        this.error = e;
      }
    };
    Sha2562.prototype.digestSync = function() {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2562.prototype.digest = function() {
      return tslib_1.__awaiter(this, undefined, undefined, function() {
        return tslib_1.__generator(this, function(_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2562.prototype.reset = function() {
      this.hash = new RawSha256_1.RawSha256;
      if (this.secret) {
        this.outer = new RawSha256_1.RawSha256;
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(constants_1.BLOCK_SIZE);
        outer.set(inner);
        for (var i = 0;i < constants_1.BLOCK_SIZE; i++) {
          inner[i] ^= 54;
          outer[i] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i = 0;i < inner.byteLength; i++) {
          inner[i] = 0;
        }
      }
    };
    return Sha2562;
  }();
  exports.Sha256 = Sha256;
  function bufferFromSecret(secret) {
    var input = (0, util_1.convertToBuffer)(secret);
    if (input.byteLength > constants_1.BLOCK_SIZE) {
      var bufferHash = new RawSha256_1.RawSha256;
      bufferHash.update(input);
      input = bufferHash.digest();
    }
    var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
  }
});

// node_modules/.bun/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/index.js
var require_build2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require_tslib();
  tslib_1.__exportStar(require_jsSha256(), exports);
});

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var init_httpExtensionConfiguration = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/extensions/index.js
var init_extensions = __esm(() => {
  init_httpExtensionConfiguration();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/abort.js
var init_abort = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
var init_auth = __esm(() => {
  (function(HttpAuthLocation2) {
    HttpAuthLocation2["HEADER"] = "header";
    HttpAuthLocation2["QUERY"] = "query";
  })(HttpAuthLocation || (HttpAuthLocation = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
var init_HttpApiKeyAuth = __esm(() => {
  (function(HttpApiKeyAuthLocation2) {
    HttpApiKeyAuthLocation2["HEADER"] = "header";
    HttpApiKeyAuthLocation2["QUERY"] = "query";
  })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/auth/index.js
var init_auth2 = __esm(() => {
  init_auth();
  init_HttpApiKeyAuth();
  init_HttpAuthScheme();
  init_HttpAuthSchemeProvider();
  init_HttpSigner();
  init_IdentityProviderConfig();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/checksum.js
var init_checksum = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/client.js
var init_client2 = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/command.js
var init_command = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/connection/config.js
var init_config = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/connection/index.js
var init_connection = __esm(() => {
  init_config();
  init_manager();
  init_pool();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/crypto.js
var init_crypto = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/encode.js
var init_encode = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm(() => {
  (function(EndpointURLScheme2) {
    EndpointURLScheme2["HTTP"] = "http";
    EndpointURLScheme2["HTTPS"] = "https";
  })(EndpointURLScheme || (EndpointURLScheme = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints = __esm(() => {
  init_EndpointRuleObject();
  init_ErrorRuleObject();
  init_RuleSetObject();
  init_shared();
  init_TreeRuleObject();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum2 = __esm(() => {
  (function(AlgorithmId2) {
    AlgorithmId2["MD5"] = "md5";
    AlgorithmId2["CRC32"] = "crc32";
    AlgorithmId2["CRC32C"] = "crc32c";
    AlgorithmId2["SHA1"] = "sha1";
    AlgorithmId2["SHA256"] = "sha256";
  })(AlgorithmId || (AlgorithmId = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration = __esm(() => {
  init_checksum2();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions2 = __esm(() => {
  init_checksum2();
  init_defaultClientConfiguration();
  init_defaultExtensionConfiguration();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
var init_http = __esm(() => {
  (function(FieldPosition2) {
    FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
    FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
  })(FieldPosition || (FieldPosition = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/identity/index.js
var init_identity2 = __esm(() => {
  init_apiKeyIdentity();
  init_awsCredentialIdentity();
  init_identity();
  init_tokenIdentity();
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/logger.js
var init_logger = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/middleware.js
var init_middleware = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/pagination.js
var init_pagination = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
var init_profile = __esm(() => {
  (function(IniSectionType2) {
    IniSectionType2["PROFILE"] = "profile";
    IniSectionType2["SSO_SESSION"] = "sso-session";
    IniSectionType2["SERVICES"] = "services";
  })(IniSectionType || (IniSectionType = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/response.js
var init_response = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/retry.js
var init_retry = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/serde.js
var init_serde = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/shapes.js
var init_shapes = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/signature.js
var init_signature = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/stream.js
var init_stream = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
var init_transfer = __esm(() => {
  (function(RequestHandlerProtocol2) {
    RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
  })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
});

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/uri.js
var init_uri = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/util.js
var init_util = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/waiter.js
var init_waiter = () => {};

// node_modules/.bun/@smithy+types@2.12.0/node_modules/@smithy/types/dist-es/index.js
var init_dist_es4 = __esm(() => {
  init_abort();
  init_auth2();
  init_blob_payload_input_types();
  init_checksum();
  init_client2();
  init_command();
  init_connection();
  init_crypto();
  init_encode();
  init_endpoint();
  init_endpoints();
  init_eventStream();
  init_extensions2();
  init_http();
  init_httpHandlerInitialization();
  init_identity2();
  init_logger();
  init_middleware();
  init_pagination();
  init_profile();
  init_response();
  init_retry();
  init_serde();
  init_shapes();
  init_signature();
  init_stream();
  init_streaming_blob_common_types();
  init_streaming_blob_payload_input_types();
  init_streaming_blob_payload_output_types();
  init_transfer();
  init_client_payload_blob_type_narrow();
  init_no_undefined();
  init_type_transform();
  init_uri();
  init_util();
  init_waiter();
});

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/Field.js
var init_Field = __esm(() => {
  init_dist_es4();
});

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/Fields.js
var init_Fields = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/httpHandler.js
var init_httpHandler = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
class HttpRequest {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request) {
    if (!request)
      return false;
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new HttpRequest({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  }
}
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var init_httpRequest = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var init_httpResponse = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
var init_isValidHostname = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/types.js
var init_types = () => {};

// node_modules/.bun/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-es/index.js
var init_dist_es5 = __esm(() => {
  init_extensions();
  init_Field();
  init_Fields();
  init_httpHandler();
  init_httpRequest();
  init_httpResponse();
  init_isValidHostname();
  init_types();
});

// node_modules/.bun/@smithy+util-hex-encoding@3.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i = 0;i < encoded.length; i += 2) {
    const encodedByte = encoded.slice(i, i + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i = 0;i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX[bytes[i]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es6 = __esm(() => {
  SHORT_TO_HEX = {};
  HEX_TO_SHORT = {};
  for (let i = 0;i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
      encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
  }
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/abort.js
var init_abort2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation2;
var init_auth3 = __esm(() => {
  (function(HttpAuthLocation3) {
    HttpAuthLocation3["HEADER"] = "header";
    HttpAuthLocation3["QUERY"] = "query";
  })(HttpAuthLocation2 || (HttpAuthLocation2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation2;
var init_HttpApiKeyAuth2 = __esm(() => {
  (function(HttpApiKeyAuthLocation3) {
    HttpApiKeyAuthLocation3["HEADER"] = "header";
    HttpApiKeyAuthLocation3["QUERY"] = "query";
  })(HttpApiKeyAuthLocation2 || (HttpApiKeyAuthLocation2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
var init_HttpAuthScheme2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
var init_HttpAuthSchemeProvider2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/HttpSigner.js
var init_HttpSigner2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
var init_IdentityProviderConfig2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/index.js
var init_auth4 = __esm(() => {
  init_auth3();
  init_HttpApiKeyAuth2();
  init_HttpAuthScheme2();
  init_HttpAuthSchemeProvider2();
  init_HttpSigner2();
  init_IdentityProviderConfig2();
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
var init_blob_payload_input_types2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/checksum.js
var init_checksum3 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/client.js
var init_client3 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/command.js
var init_command2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/connection/config.js
var init_config2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/connection/manager.js
var init_manager2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/connection/pool.js
var init_pool2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/connection/index.js
var init_connection2 = __esm(() => {
  init_config2();
  init_manager2();
  init_pool2();
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/crypto.js
var init_crypto2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/encode.js
var init_encode2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme2;
var init_endpoint2 = __esm(() => {
  (function(EndpointURLScheme3) {
    EndpointURLScheme3["HTTP"] = "http";
    EndpointURLScheme3["HTTPS"] = "https";
  })(EndpointURLScheme2 || (EndpointURLScheme2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
var init_EndpointRuleObject2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
var init_ErrorRuleObject2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
var init_RuleSetObject2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoints/shared.js
var init_shared2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
var init_TreeRuleObject2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoints/index.js
var init_endpoints2 = __esm(() => {
  init_EndpointRuleObject2();
  init_ErrorRuleObject2();
  init_RuleSetObject2();
  init_shared2();
  init_TreeRuleObject2();
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/eventStream.js
var init_eventStream2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId2;
var init_checksum4 = __esm(() => {
  (function(AlgorithmId3) {
    AlgorithmId3["MD5"] = "md5";
    AlgorithmId3["CRC32"] = "crc32";
    AlgorithmId3["CRC32C"] = "crc32c";
    AlgorithmId3["SHA1"] = "sha1";
    AlgorithmId3["SHA256"] = "sha256";
  })(AlgorithmId2 || (AlgorithmId2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
var init_defaultClientConfiguration2 = __esm(() => {
  init_checksum4();
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions3 = __esm(() => {
  init_checksum4();
  init_defaultClientConfiguration2();
  init_defaultExtensionConfiguration2();
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/feature-ids.js
var init_feature_ids = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/http.js
var FieldPosition2;
var init_http2 = __esm(() => {
  (function(FieldPosition3) {
    FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
    FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
  })(FieldPosition2 || (FieldPosition2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
var init_httpHandlerInitialization2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
var init_apiKeyIdentity2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
var init_awsCredentialIdentity2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/identity/identity.js
var init_identity3 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
var init_tokenIdentity2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/identity/index.js
var init_identity4 = __esm(() => {
  init_apiKeyIdentity2();
  init_awsCredentialIdentity2();
  init_identity3();
  init_tokenIdentity2();
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/logger.js
var init_logger2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/middleware.js
var init_middleware2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/pagination.js
var init_pagination2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType2;
var init_profile2 = __esm(() => {
  (function(IniSectionType3) {
    IniSectionType3["PROFILE"] = "profile";
    IniSectionType3["SSO_SESSION"] = "sso-session";
    IniSectionType3["SERVICES"] = "services";
  })(IniSectionType2 || (IniSectionType2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/response.js
var init_response2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/retry.js
var init_retry2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/serde.js
var init_serde2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/shapes.js
var init_shapes2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/signature.js
var init_signature2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/stream.js
var init_stream2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
var init_streaming_blob_common_types2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
var init_streaming_blob_payload_input_types2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
var init_streaming_blob_payload_output_types2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol2;
var init_transfer2 = __esm(() => {
  (function(RequestHandlerProtocol3) {
    RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
  })(RequestHandlerProtocol2 || (RequestHandlerProtocol2 = {}));
});

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
var init_client_payload_blob_type_narrow2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/transform/no-undefined.js
var init_no_undefined2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/transform/type-transform.js
var init_type_transform2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/uri.js
var init_uri2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/util.js
var init_util2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/waiter.js
var init_waiter2 = () => {};

// node_modules/.bun/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/index.js
var init_dist_es7 = __esm(() => {
  init_abort2();
  init_auth4();
  init_blob_payload_input_types2();
  init_checksum3();
  init_client3();
  init_command2();
  init_connection2();
  init_crypto2();
  init_encode2();
  init_endpoint2();
  init_endpoints2();
  init_eventStream2();
  init_extensions3();
  init_feature_ids();
  init_http2();
  init_httpHandlerInitialization2();
  init_identity4();
  init_logger2();
  init_middleware2();
  init_pagination2();
  init_profile2();
  init_response2();
  init_retry2();
  init_serde2();
  init_shapes2();
  init_signature2();
  init_stream2();
  init_streaming_blob_common_types2();
  init_streaming_blob_payload_input_types2();
  init_streaming_blob_payload_output_types2();
  init_transfer2();
  init_client_payload_blob_type_narrow2();
  init_no_undefined2();
  init_type_transform2();
  init_uri2();
  init_util2();
  init_waiter2();
});

// node_modules/.bun/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var init_getSmithyContext = __esm(() => {
  init_dist_es7();
});

// node_modules/.bun/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider = (input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
};
var init_normalizeProvider = () => {};

// node_modules/.bun/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-es/index.js
var init_dist_es8 = __esm(() => {
  init_getSmithyContext();
  init_normalizeProvider();
});

// node_modules/.bun/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri = (uri3) => encodeURIComponent(uri3).replace(/[!'()*]/g, hexEncode), hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
var init_escape_uri = () => {};

// node_modules/.bun/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm(() => {
  init_escape_uri();
});

// node_modules/.bun/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es9 = __esm(() => {
  init_escape_uri();
  init_escape_uri_path();
});

// node_modules/.bun/@smithy+is-array-buffer@3.0.0/node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
var init_dist_es10 = () => {};

// node_modules/.bun/@smithy+util-buffer-from@3.0.0/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromString2 = (input, encoding) => {
  if (typeof input !== "string") {
    throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
  }
  return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
};
var init_dist_es11 = __esm(() => {
  init_dist_es10();
});

// node_modules/.bun/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf82 = (input) => {
  const buf = fromString2(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
var init_fromUtf8 = __esm(() => {
  init_dist_es11();
});

// node_modules/.bun/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array = (data) => {
  if (typeof data === "string") {
    return fromUtf82(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
};
var init_toUint8Array = __esm(() => {
  init_fromUtf8();
});

// node_modules/.bun/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var init_toUtf8 = __esm(() => {
  init_dist_es11();
});

// node_modules/.bun/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es12 = __esm(() => {
  init_fromUtf8();
  init_toUint8Array();
  init_toUtf8();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm", CREDENTIAL_QUERY_PARAM = "X-Amz-Credential", AMZ_DATE_QUERY_PARAM = "X-Amz-Date", SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders", EXPIRES_QUERY_PARAM = "X-Amz-Expires", SIGNATURE_QUERY_PARAM = "X-Amz-Signature", TOKEN_QUERY_PARAM = "X-Amz-Security-Token", AUTH_HEADER = "authorization", AMZ_DATE_HEADER, DATE_HEADER = "date", GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER = "x-amz-content-sha256", TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256", EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD", UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD", MAX_CACHE_SIZE = 50, KEY_TYPE_IDENTIFIER = "aws4_request", MAX_PRESIGNED_TTL;
var init_constants = __esm(() => {
  AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
  GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
  SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
  TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
  ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
  };
  PROXY_HEADER_PATTERN = /^proxy-/;
  SEC_HEADER_PATTERN = /^sec-/;
  MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
}, hmac = (ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
};
var init_credentialDerivation = __esm(() => {
  init_dist_es6();
  init_dist_es12();
  init_constants();
  signingKeyCache = {};
  cacheQueue = [];
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == undefined) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
};
var init_getCanonicalHeaders = __esm(() => {
  init_constants();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery = ({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query).sort()) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    keys.push(key);
    const value = query[key];
    if (typeof value === "string") {
      serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).sort().join("&");
    }
  }
  return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
};
var init_getCanonicalQuery = __esm(() => {
  init_dist_es9();
  init_constants();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash = async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == undefined) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor;
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
};
var init_getPayloadHash = __esm(() => {
  init_dist_es10();
  init_dist_es6();
  init_dist_es12();
  init_constants();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
class HeaderFormatter {
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf82(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf82(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
}

class Int64 {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776000 || number < -9223372036854776000) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i = 7, remaining = Math.abs(Math.round(number));i > -1 && remaining > 0; i--, remaining /= 256) {
      bytes[i] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function negate(bytes) {
  for (let i = 0;i < 8; i++) {
    bytes[i] ^= 255;
  }
  for (let i = 7;i > -1; i--) {
    bytes[i]++;
    if (bytes[i] !== 0)
      break;
  }
}
var HEADER_VALUE_TYPE, UUID_PATTERN;
var init_HeaderFormatter = __esm(() => {
  init_dist_es6();
  init_dist_es12();
  (function(HEADER_VALUE_TYPE2) {
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
  UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader = (soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
};
var init_headerUtil = () => {};

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
var cloneRequest = ({ headers, query, ...rest }) => ({
  ...rest,
  headers: { ...headers },
  query: query ? cloneQuery2(query) : undefined
}), cloneQuery2 = (query) => Object.keys(query).reduce((carry, paramName) => {
  const param = query[paramName];
  return {
    ...carry,
    [paramName]: Array.isArray(param) ? [...param] : param
  };
}, {});
var init_cloneRequest = () => {};

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery = (request, options = {}) => {
  const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
};
var init_moveHeadersToQuery = __esm(() => {
  init_cloneRequest();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest = (request) => {
  request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
};
var init_prepareRequest = __esm(() => {
  init_cloneRequest();
  init_constants();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), toDate = (time) => {
  if (typeof time === "number") {
    return new Date(time * 1000);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1000);
    }
    return new Date(time);
  }
  return time;
};
var init_utilDate = () => {};

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
class SignatureV4 {
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.headerFormatter = new HeaderFormatter;
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = new Date, expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = new Date, priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256;
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join(`
`);
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = new Date, signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature3) => {
      return { message: signableMessage.message, signature: signature3 };
    });
  }
  async signString(stringToSign, { signingDate = new Date, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = new Date, signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature3 = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature3}`;
    return request;
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join(`
`)}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest) {
    const hash = new this.sha256;
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
}
var formatDate = (now) => {
  const longDate = iso8601(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8)
  };
}, getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
var init_SignatureV4 = __esm(() => {
  init_dist_es6();
  init_dist_es8();
  init_dist_es9();
  init_dist_es12();
  init_constants();
  init_credentialDerivation();
  init_getCanonicalHeaders();
  init_getCanonicalQuery();
  init_getPayloadHash();
  init_HeaderFormatter();
  init_headerUtil();
  init_moveHeadersToQuery();
  init_prepareRequest();
  init_utilDate();
});

// node_modules/.bun/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-es/index.js
var init_dist_es13 = __esm(() => {
  init_getCanonicalHeaders();
  init_getCanonicalQuery();
  init_getPayloadHash();
  init_moveHeadersToQuery();
  init_prepareRequest();
  init_SignatureV4();
  init_credentialDerivation();
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs
import assert from "assert";
var import_sha256_js, import_fetch_http_handler, DEFAULT_PROVIDER_CHAIN_RESOLVER = () => import("./chunk-570prgds.js").then(({ fromNodeProviderChain }) => fromNodeProviderChain({
  clientConfig: {
    requestHandler: new import_fetch_http_handler.FetchHttpHandler({
      requestInit: (httpRequest2) => {
        return {
          ...httpRequest2
        };
      }
    })
  }
})).catch((error) => {
  throw new Error(`Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${error.message}`);
}), getAuthHeaders = async (req, props) => {
  assert(req.method, "Expected request method property to be set");
  let credentials;
  if (props.awsAccessKey && props.awsSecretKey) {
    credentials = {
      accessKeyId: props.awsAccessKey,
      secretAccessKey: props.awsSecretKey,
      ...props.awsSessionToken != null && { sessionToken: props.awsSessionToken }
    };
  } else {
    const provider = await (props.providerChainResolver ? props.providerChainResolver() : DEFAULT_PROVIDER_CHAIN_RESOLVER());
    credentials = await provider();
  }
  const signer = new SignatureV4({
    service: "bedrock",
    region: props.regionName,
    credentials,
    sha256: import_sha256_js.Sha256
  });
  const url = new URL(props.url);
  const headers = !req.headers ? {} : (Symbol.iterator in req.headers) ? Object.fromEntries(Array.from(req.headers).map((header) => [...header])) : { ...req.headers };
  delete headers["connection"];
  headers["host"] = url.hostname;
  const request = new HttpRequest({
    method: req.method.toUpperCase(),
    protocol: url.protocol,
    path: url.pathname,
    headers,
    body: req.body
  });
  const signed = await signer.sign(request);
  return signed.headers;
};
var init_auth5 = __esm(() => {
  init_dist_es5();
  init_dist_es13();
  import_sha256_js = __toESM(require_build2(), 1);
  import_fetch_http_handler = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertToBuffer = undefined;
  var util_utf8_browser_1 = require_dist_cjs2();
  var fromUtf84 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : util_utf8_browser_1.fromUtf8;
  function convertToBuffer(data) {
    if (data instanceof Uint8Array)
      return data;
    if (typeof data === "string") {
      return fromUtf84(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  }
  exports.convertToBuffer = convertToBuffer;
});

// node_modules/.bun/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isEmptyData = undefined;
  function isEmptyData(data) {
    if (typeof data === "string") {
      return data.length === 0;
    }
    return data.byteLength === 0;
  }
  exports.isEmptyData = isEmptyData;
});

// node_modules/.bun/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint82 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.numToUint8 = undefined;
  function numToUint8(num) {
    return new Uint8Array([
      (num & 4278190080) >> 24,
      (num & 16711680) >> 16,
      (num & 65280) >> 8,
      num & 255
    ]);
  }
  exports.numToUint8 = numToUint8;
});

// node_modules/.bun/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.uint32ArrayFrom = undefined;
  function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
      var return_array = new Uint32Array(a_lookUpTable.length);
      var a_index = 0;
      while (a_index < a_lookUpTable.length) {
        return_array[a_index] = a_lookUpTable[a_index];
        a_index += 1;
      }
      return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
  }
  exports.uint32ArrayFrom = uint32ArrayFrom;
});

// node_modules/.bun/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/index.js
var require_build3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = undefined;
  var convertToBuffer_1 = require_convertToBuffer2();
  Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
    return convertToBuffer_1.convertToBuffer;
  } });
  var isEmptyData_1 = require_isEmptyData2();
  Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
    return isEmptyData_1.isEmptyData;
  } });
  var numToUint8_1 = require_numToUint82();
  Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
    return numToUint8_1.numToUint8;
  } });
  var uint32ArrayFrom_1 = require_uint32ArrayFrom2();
  Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
    return uint32ArrayFrom_1.uint32ArrayFrom;
  } });
});

// node_modules/.bun/@aws-crypto+crc32@3.0.0/node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AwsCrc32 = undefined;
  var tslib_1 = require_tslib();
  var util_1 = require_build3();
  var index_1 = require_build4();
  var AwsCrc32 = function() {
    function AwsCrc322() {
      this.crc32 = new index_1.Crc32;
    }
    AwsCrc322.prototype.update = function(toHash) {
      if ((0, util_1.isEmptyData)(toHash))
        return;
      this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc322.prototype.digest = function() {
      return tslib_1.__awaiter(this, undefined, undefined, function() {
        return tslib_1.__generator(this, function(_a) {
          return [2, (0, util_1.numToUint8)(this.crc32.digest())];
        });
      });
    };
    AwsCrc322.prototype.reset = function() {
      this.crc32 = new index_1.Crc32;
    };
    return AwsCrc322;
  }();
  exports.AwsCrc32 = AwsCrc32;
});

// node_modules/.bun/@aws-crypto+crc32@3.0.0/node_modules/@aws-crypto/crc32/build/index.js
var require_build4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AwsCrc32 = exports.Crc32 = exports.crc32 = undefined;
  var tslib_1 = require_tslib();
  var util_1 = require_build3();
  function crc32(data) {
    return new Crc32().update(data).digest();
  }
  exports.crc32 = crc32;
  var Crc32 = function() {
    function Crc322() {
      this.checksum = 4294967295;
    }
    Crc322.prototype.update = function(data) {
      var e_1, _a;
      try {
        for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next();!data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a = data_1.return))
            _a.call(data_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return this;
    };
    Crc322.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc322;
  }();
  exports.Crc32 = Crc32;
  var a_lookUpTable = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918000,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ];
  var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
  var aws_crc32_1 = require_aws_crc32();
  Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
    return aws_crc32_1.AwsCrc32;
  } });
});

// node_modules/.bun/@smithy+util-hex-encoding@2.2.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js
function fromHex2(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i = 0;i < encoded.length; i += 2) {
    const encodedByte = encoded.slice(i, i + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT2) {
      out[i / 2] = HEX_TO_SHORT2[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex2(bytes) {
  let out = "";
  for (let i = 0;i < bytes.byteLength; i++) {
    out += SHORT_TO_HEX2[bytes[i]];
  }
  return out;
}
var SHORT_TO_HEX2, HEX_TO_SHORT2;
var init_dist_es14 = __esm(() => {
  SHORT_TO_HEX2 = {};
  HEX_TO_SHORT2 = {};
  for (let i = 0;i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
      encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX2[i] = encodedByte;
    HEX_TO_SHORT2[encodedByte] = i;
  }
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/Int64.js
class Int642 {
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776000 || number < -9223372036854776000) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i = 7, remaining = Math.abs(Math.round(number));i > -1 && remaining > 0; i--, remaining /= 256) {
      bytes[i] = remaining;
    }
    if (number < 0) {
      negate2(bytes);
    }
    return new Int642(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate2(bytes);
    }
    return parseInt(toHex2(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function negate2(bytes) {
  for (let i = 0;i < 8; i++) {
    bytes[i] ^= 255;
  }
  for (let i = 7;i > -1; i--) {
    bytes[i]++;
    if (bytes[i] !== 0)
      break;
  }
}
var init_Int64 = __esm(() => {
  init_dist_es14();
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
class HeaderMarshaller {
  constructor(toUtf83, fromUtf84) {
    this.toUtf8 = toUtf83;
    this.fromUtf8 = fromUtf84;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN2.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex2(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex2(uuidBytes.subarray(0, 4))}-${toHex2(uuidBytes.subarray(4, 6))}-${toHex2(uuidBytes.subarray(6, 8))}-${toHex2(uuidBytes.subarray(8, 10))}-${toHex2(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
}
var HEADER_VALUE_TYPE2, BOOLEAN_TAG = "boolean", BYTE_TAG = "byte", SHORT_TAG = "short", INT_TAG = "integer", LONG_TAG = "long", BINARY_TAG = "binary", STRING_TAG = "string", TIMESTAMP_TAG = "timestamp", UUID_TAG = "uuid", UUID_PATTERN2;
var init_HeaderMarshaller = __esm(() => {
  init_dist_es14();
  init_Int64();
  (function(HEADER_VALUE_TYPE3) {
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
  })(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
  UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new import_crc32.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}
var import_crc32, PRELUDE_MEMBER_LENGTH = 4, PRELUDE_LENGTH, CHECKSUM_LENGTH = 4, MINIMUM_MESSAGE_LENGTH;
var init_splitMessage = __esm(() => {
  import_crc32 = __toESM(require_build4(), 1);
  PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
  MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
class EventStreamCodec {
  constructor(toUtf83, fromUtf84) {
    this.headerMarshaller = new HeaderMarshaller(toUtf83, fromUtf84);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }
  feed(message) {
    this.messageBuffer.push(this.decode(message));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return message;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessages() {
        return messages;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  encode({ headers: rawHeaders, body }) {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;
    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum3 = new import_crc322.Crc32;
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum3.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum3.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  }
  decode(message) {
    const { headers, body } = splitMessage(message);
    return { headers: this.headerMarshaller.parse(headers), body };
  }
  formatHeaders(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  }
}
var import_crc322;
var init_EventStreamCodec = __esm(() => {
  init_HeaderMarshaller();
  init_splitMessage();
  import_crc322 = __toESM(require_build4(), 1);
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/Message.js
var init_Message = () => {};

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream;
var init_MessageDecoderStream = __esm(() => {
  MessageDecoderStream = class MessageDecoderStream {
    constructor(options) {
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async* asyncIterator() {
      for await (const bytes of this.options.inputStream) {
        const decoded = this.options.decoder.decode(bytes);
        yield decoded;
      }
    }
  };
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream;
var init_MessageEncoderStream = __esm(() => {
  MessageEncoderStream = class MessageEncoderStream {
    constructor(options) {
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async* asyncIterator() {
      for await (const msg of this.options.messageStream) {
        const encoded = this.options.encoder.encode(msg);
        yield encoded;
      }
      if (this.options.includeEndFrame) {
        yield new Uint8Array(0);
      }
    }
  };
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream;
var init_SmithyMessageDecoderStream = __esm(() => {
  SmithyMessageDecoderStream = class SmithyMessageDecoderStream {
    constructor(options) {
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async* asyncIterator() {
      for await (const message of this.options.messageStream) {
        const deserialized = await this.options.deserializer(message);
        if (deserialized === undefined)
          continue;
        yield deserialized;
      }
    }
  };
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream;
var init_SmithyMessageEncoderStream = __esm(() => {
  SmithyMessageEncoderStream = class SmithyMessageEncoderStream {
    constructor(options) {
      this.options = options;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async* asyncIterator() {
      for await (const chunk of this.options.inputStream) {
        const payloadBuf = this.options.serializer(chunk);
        yield payloadBuf;
      }
    }
  };
});

// node_modules/.bun/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-es/index.js
var init_dist_es15 = __esm(() => {
  init_EventStreamCodec();
  init_HeaderMarshaller();
  init_Int64();
  init_Message();
  init_MessageDecoderStream();
  init_MessageEncoderStream();
  init_SmithyMessageDecoderStream();
  init_SmithyMessageEncoderStream();
});

// node_modules/.bun/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = (size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  };
  const iterator = async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  };
  return {
    [Symbol.asyncIterator]: iterator
  };
}
var init_getChunkedStream = () => {};

// node_modules/.bun/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function getMessageUnmarshaller(deserializer, toUtf83) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error = new Error(toUtf83(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}
var init_getUnmarshalledStream = () => {};

// node_modules/.bun/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
class EventStreamMarshaller {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }
  deserialize(body, deserializer) {
    const inputStream = getChunkedStream(body);
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
    });
  }
  serialize(inputStream, serializer) {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true
    });
  }
}
var init_EventStreamMarshaller = __esm(() => {
  init_dist_es15();
  init_getChunkedStream();
  init_getUnmarshalledStream();
});

// node_modules/.bun/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js
var init_provider = __esm(() => {
  init_EventStreamMarshaller();
});

// node_modules/.bun/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-es/index.js
var init_dist_es16 = __esm(() => {
  init_EventStreamMarshaller();
  init_provider();
});

// node_modules/.bun/@smithy+eventstream-serde-node@2.2.0/node_modules/@smithy/eventstream-serde-node/dist-es/utils.js
async function* readabletoIterable(readStream) {
  let streamEnded = false;
  let generationEnded = false;
  const records = new Array;
  readStream.on("error", (err) => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });
  readStream.on("data", (data) => {
    records.push(data);
  });
  readStream.on("end", () => {
    streamEnded = true;
  });
  while (!generationEnded) {
    const value = await new Promise((resolve) => setTimeout(() => resolve(records.shift()), 0));
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}
var init_utils = () => {};

// node_modules/.bun/@smithy+eventstream-serde-node@2.2.0/node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
import { Readable } from "stream";

class EventStreamMarshaller3 {
  constructor({ utf8Encoder, utf8Decoder }) {
    this.universalMarshaller = new EventStreamMarshaller({
      utf8Decoder,
      utf8Encoder
    });
  }
  deserialize(body, deserializer) {
    const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }
  serialize(input, serializer) {
    return Readable.from(this.universalMarshaller.serialize(input, serializer));
  }
}
var init_EventStreamMarshaller2 = __esm(() => {
  init_dist_es16();
  init_utils();
});

// node_modules/.bun/@smithy+eventstream-serde-node@2.2.0/node_modules/@smithy/eventstream-serde-node/dist-es/provider.js
var init_provider2 = __esm(() => {
  init_EventStreamMarshaller2();
});

// node_modules/.bun/@smithy+eventstream-serde-node@2.2.0/node_modules/@smithy/eventstream-serde-node/dist-es/index.js
var init_dist_es17 = __esm(() => {
  init_EventStreamMarshaller2();
  init_provider2();
});

// node_modules/.bun/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-es/fromBase64.js
var BASE64_REGEX, fromBase64 = (input) => {
  if (input.length * 3 % 4 !== 0) {
    throw new TypeError(`Incorrect padding on base64 string.`);
  }
  if (!BASE64_REGEX.exec(input)) {
    throw new TypeError(`Invalid base64 string.`);
  }
  const buffer = fromString(input, "base64");
  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};
var init_fromBase64 = __esm(() => {
  init_dist_es();
  BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
});

// node_modules/.bun/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-es/toBase64.js
var toBase64 = (_input) => {
  let input;
  if (typeof _input === "string") {
    input = fromUtf8(_input);
  } else {
    input = _input;
  }
  if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
};
var init_toBase64 = __esm(() => {
  init_dist_es();
  init_dist_es2();
});

// node_modules/.bun/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-es/index.js
var init_dist_es18 = __esm(() => {
  init_fromBase64();
  init_toBase64();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var init_NoOpLogger = () => {};

// node_modules/.bun/@smithy+middleware-stack@2.2.0/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var init_MiddlewareStack = () => {};

// node_modules/.bun/@smithy+middleware-stack@2.2.0/node_modules/@smithy/middleware-stack/dist-es/index.js
var init_dist_es19 = __esm(() => {
  init_MiddlewareStack();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/client.js
var init_client4 = __esm(() => {
  init_dist_es19();
});

// node_modules/.bun/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
var init_transforms = __esm(() => {
  init_dist_es18();
  init_dist_es2();
  init_Uint8ArrayBlobAdapter();
});

// node_modules/.bun/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter;
var init_Uint8ArrayBlobAdapter = __esm(() => {
  init_transforms();
  Uint8ArrayBlobAdapter = class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
      switch (typeof source) {
        case "string":
          return transformFromString(source, encoding);
        default:
          throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
      }
    }
    static mutate(source) {
      Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
      return source;
    }
    transformToString(encoding = "utf-8") {
      return transformToString(this, encoding);
    }
  };
});

// node_modules/.bun/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js
var init_getAwsChunkedEncodingStream = () => {};

// node_modules/.bun/@smithy+util-uri-escape@2.2.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var init_escape_uri2 = () => {};

// node_modules/.bun/@smithy+util-uri-escape@2.2.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path2 = __esm(() => {
  init_escape_uri2();
});

// node_modules/.bun/@smithy+util-uri-escape@2.2.0/node_modules/@smithy/util-uri-escape/dist-es/index.js
var init_dist_es20 = __esm(() => {
  init_escape_uri2();
  init_escape_uri_path2();
});

// node_modules/.bun/@smithy+querystring-builder@2.2.0/node_modules/@smithy/querystring-builder/dist-es/index.js
var init_dist_es21 = __esm(() => {
  init_dist_es20();
});

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/constants.js
var init_constants2 = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
var init_get_transformed_headers = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
var init_set_connection_timeout = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
var init_set_socket_keep_alive = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
var init_set_socket_timeout = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/write-request-body.js
var init_write_request_body = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js
var init_node_http_handler = __esm(() => {
  init_dist_es5();
  init_dist_es21();
  init_constants2();
  init_get_transformed_headers();
  init_set_connection_timeout();
  init_set_socket_keep_alive();
  init_set_socket_timeout();
  init_write_request_body();
});

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
var init_node_http2_connection_pool = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js
var init_node_http2_connection_manager = __esm(() => {
  init_node_http2_connection_pool();
});

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js
var init_node_http2_handler = __esm(() => {
  init_dist_es5();
  init_dist_es21();
  init_get_transformed_headers();
  init_node_http2_connection_manager();
  init_write_request_body();
});

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js
var init_collector = () => {};

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js
var init_stream_collector = __esm(() => {
  init_collector();
});

// node_modules/.bun/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-es/index.js
var init_dist_es22 = __esm(() => {
  init_node_http_handler();
  init_node_http2_handler();
  init_stream_collector();
});

// node_modules/.bun/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js
var init_sdk_stream_mixin = __esm(() => {
  init_dist_es22();
  init_dist_es();
});

// node_modules/.bun/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-es/index.js
var init_dist_es23 = __esm(() => {
  init_Uint8ArrayBlobAdapter();
  init_getAwsChunkedEncodingStream();
  init_sdk_stream_mixin();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
var collectBody = async (streamBody = new Uint8Array, context) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array);
  }
  const fromContext = context.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
};
var init_collect_stream_body = __esm(() => {
  init_dist_es23();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/command.js
var init_command3 = __esm(() => {
  init_dist_es19();
  init_dist_es4();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/constants.js
var init_constants3 = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
var init_create_aggregated_client = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/parse-utils.js
var MAX_FLOAT, expectLong = (value) => {
  if (value === null || value === undefined) {
    return;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, expectInt32 = (value) => expectSizedInt(value, 32), expectSizedInt = (value, size) => {
  const expected = expectLong(value);
  if (expected !== undefined && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, castInt = (value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, expectString = (value) => {
  if (value === null || value === undefined) {
    return;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger3.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, stackTraceWarning = (message) => {
  return String(new TypeError(message).stack || message).split(`
`).slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join(`
`);
}, logger3;
var init_parse_utils = __esm(() => {
  MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
  logger3 = {
    warn: console.warn
  };
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/date-utils.js
var RFC3339, RFC3339_WITH_OFFSET, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, FIFTY_YEARS_IN_MILLIS;
var init_date_utils = __esm(() => {
  init_parse_utils();
  RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
  RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
  IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
  RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
  ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
  FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/exceptions.js
var decorateServiceException = (exception, additions = {}) => {
  Object.entries(additions).filter(([, v]) => v !== undefined).forEach(([k, v]) => {
    if (exception[k] == undefined || exception[k] === "") {
      exception[k] = v;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
};
var init_exceptions = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var init_default_error_handler = __esm(() => {
  init_exceptions();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var init_defaults_mode = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var init_emitWarningIfUnsupportedVersion = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var init_checksum5 = __esm(() => {
  init_dist_es4();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var init_retry3 = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var init_defaultExtensionConfiguration3 = __esm(() => {
  init_checksum5();
  init_retry3();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/extensions/index.js
var init_extensions4 = __esm(() => {
  init_defaultExtensionConfiguration3();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
var init_extended_encode_uri_component = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
var init_get_array_if_single_item = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var init_get_value_from_text_node = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/lazy-json.js
var StringWrapper = function() {
  const Class = Object.getPrototypeOf(this).constructor;
  const Constructor = Function.bind.apply(String, [null, ...arguments]);
  const instance = new Constructor;
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
};
var init_lazy_json = __esm(() => {
  StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
      value: StringWrapper,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  Object.setPrototypeOf(StringWrapper, String);
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
var take = (source, instructions) => {
  const out = {};
  for (const key in instructions) {
    applyInstruction(out, source, instructions, key);
  }
  return out;
}, mapWithFilter = (target, filter, instructions) => {
  return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
    if (Array.isArray(value)) {
      _instructions[key] = value;
    } else {
      if (typeof value === "function") {
        _instructions[key] = [filter, value()];
      } else {
        _instructions[key] = [filter, value];
      }
    }
    return _instructions;
  }, {}));
}, applyInstruction = (target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === undefined && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(undefined) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === undefined && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
}, nonNullish = (_) => _ != null, pass = (_) => _;
var init_object_mapping = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/resolve-path.js
var init_resolve_path = __esm(() => {
  init_extended_encode_uri_component();
});

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var init_ser_utils = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/serde-json.js
var init_serde_json = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/split-every.js
var init_split_every = () => {};

// node_modules/.bun/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-es/index.js
var init_dist_es24 = __esm(() => {
  init_NoOpLogger();
  init_client4();
  init_collect_stream_body();
  init_command3();
  init_constants3();
  init_create_aggregated_client();
  init_date_utils();
  init_default_error_handler();
  init_defaults_mode();
  init_emitWarningIfUnsupportedVersion();
  init_extensions4();
  init_exceptions();
  init_extended_encode_uri_component();
  init_get_array_if_single_item();
  init_get_value_from_text_node();
  init_lazy_json();
  init_object_mapping();
  init_parse_utils();
  init_resolve_path();
  init_ser_utils();
  init_serde_json();
  init_split_every();
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/AWS_restJson1.mjs
var de_InternalServerExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, de_ModelStreamErrorExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString,
    originalMessage: expectString,
    originalStatusCode: expectInt32
  });
  Object.assign(contents, doc);
  const exception = new ModelStreamErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, de_ThrottlingExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, de_ValidationExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, de_ResponseStream = (output, context) => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["chunk"] != null) {
      return {
        chunk: await de_PayloadPart_event(event["chunk"], context)
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context)
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(event["modelStreamErrorException"], context)
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context)
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context)
      };
    }
    return { $unknown: output };
  });
}, de_InternalServerException_event = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return de_InternalServerExceptionRes(parsedOutput, context);
}, de_ModelStreamErrorException_event = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return de_ModelStreamErrorExceptionRes(parsedOutput, context);
}, de_PayloadPart_event = async (output, context) => {
  const contents = {};
  const data = await parseBody(output.body, context);
  Object.assign(contents, de_PayloadPart(data, context));
  return contents;
}, de_ThrottlingException_event = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
}, de_ValidationException_event = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return de_ValidationExceptionRes(parsedOutput, context);
}, de_PayloadPart = (output, context) => {
  return take(output, {
    bytes: context.base64Decoder
  });
}, deserializeMetadata = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"] ?? "",
  extendedRequestId: output.headers["x-amz-id-2"] ?? "",
  cfId: output.headers["x-amz-cf-id"] ?? ""
}), collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
});
var init_AWS_restJson1 = __esm(() => {
  init_dist_es24();
  init_dist_es3();
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/internal/shims.mjs
function ReadableStreamToAsyncIterable(stream3) {
  if (stream3[Symbol.asyncIterator])
    return stream3;
  const reader = stream3.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done)
          reader.releaseLock();
        return result;
      } catch (e) {
        reader.releaseLock();
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: undefined };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
var init_shims = () => {};

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/core/error.mjs
var init_error3 = __esm(() => {
  init_error();
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/values.mjs
function isObj(obj) {
  return obj != null && typeof obj === "object" && !Array.isArray(obj);
}
var isArray = (val) => (isArray = Array.isArray, isArray(val)), isReadonlyArray, safeJSON = (text) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return;
  }
};
var init_values = __esm(() => {
  init_error3();
  isReadonlyArray = isArray;
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/log.mjs
function noop() {}
function makeLogFn(fnLevel, logger4, logLevel) {
  if (!logger4 || levelNumbers[fnLevel] > levelNumbers[logLevel]) {
    return noop;
  } else {
    return logger4[fnLevel].bind(logger4);
  }
}
function loggerFor(client4) {
  const logger4 = client4.logger;
  const logLevel = client4.logLevel ?? "off";
  if (!logger4) {
    return noopLogger;
  }
  const cachedLogger = cachedLoggers.get(logger4);
  if (cachedLogger && cachedLogger[0] === logLevel) {
    return cachedLogger[1];
  }
  const levelLogger = {
    error: makeLogFn("error", logger4, logLevel),
    warn: makeLogFn("warn", logger4, logLevel),
    info: makeLogFn("info", logger4, logLevel),
    debug: makeLogFn("debug", logger4, logLevel)
  };
  cachedLoggers.set(logger4, [logLevel, levelLogger]);
  return levelLogger;
}
var levelNumbers, noopLogger, cachedLoggers;
var init_log = __esm(() => {
  init_values();
  levelNumbers = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
  };
  noopLogger = {
    error: noop,
    warn: noop,
    info: noop,
    debug: noop
  };
  cachedLoggers = /* @__PURE__ */ new WeakMap;
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/core/streaming.mjs
function isAbortError(err) {
  return typeof err === "object" && err !== null && (("name" in err) && err.name === "AbortError" || ("message" in err) && String(err.message).includes("FetchRequestCanceledException"));
}
var import_fetch_http_handler2, toUtf83 = (input) => new TextDecoder("utf-8").decode(input), fromUtf84 = (input) => new TextEncoder().encode(input), getMinimalSerdeContext = () => {
  const marshaller = new EventStreamMarshaller3({ utf8Encoder: toUtf83, utf8Decoder: fromUtf84 });
  return {
    base64Decoder: fromBase64,
    base64Encoder: toBase64,
    utf8Decoder: fromUtf84,
    utf8Encoder: toUtf83,
    eventStreamMarshaller: marshaller,
    streamCollector: import_fetch_http_handler2.streamCollector
  };
}, Stream2;
var init_streaming2 = __esm(() => {
  init_dist_es17();
  init_dist_es18();
  init_streaming();
  init_error2();
  init_sdk();
  init_AWS_restJson1();
  init_shims();
  init_values();
  init_log();
  import_fetch_http_handler2 = __toESM(require_dist_cjs(), 1);
  Stream2 = class Stream2 extends Stream {
    static fromSSEResponse(response3, controller, client4) {
      let consumed = false;
      const logger4 = client4 ? loggerFor(client4) : console;
      async function* iterMessages() {
        if (!response3.body) {
          controller.abort();
          throw new AnthropicError(`Attempted to iterate over a response with no body`);
        }
        const responseBodyIter = ReadableStreamToAsyncIterable(response3.body);
        const eventStream3 = de_ResponseStream(responseBodyIter, getMinimalSerdeContext());
        for await (const event of eventStream3) {
          if (event.chunk && event.chunk.bytes) {
            const s = toUtf83(event.chunk.bytes);
            yield { event: "chunk", data: s, raw: [] };
          } else if (event.internalServerException) {
            yield { event: "error", data: "InternalServerException", raw: [] };
          } else if (event.modelStreamErrorException) {
            yield { event: "error", data: "ModelStreamErrorException", raw: [] };
          } else if (event.validationException) {
            yield { event: "error", data: "ValidationException", raw: [] };
          } else if (event.throttlingException) {
            yield { event: "error", data: "ThrottlingException", raw: [] };
          }
        }
      }
      async function* iterator() {
        if (consumed) {
          throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        }
        consumed = true;
        let done = false;
        try {
          for await (const sse of iterMessages()) {
            if (sse.event === "chunk") {
              try {
                yield JSON.parse(sse.data);
              } catch (e) {
                logger4.error(`Could not parse message into JSON:`, sse.data);
                logger4.error(`From chunk:`, sse.raw);
                throw e;
              }
            }
            if (sse.event === "error") {
              const errText = sse.data;
              const errJSON = safeJSON(errText);
              const errMessage = errJSON ? undefined : errText;
              throw APIError.generate(undefined, errJSON, errMessage, response3.headers);
            }
          }
          done = true;
        } catch (e) {
          if (isAbortError(e))
            return;
          throw e;
        } finally {
          if (!done)
            controller.abort();
        }
      }
      return new Stream2(iterator, controller);
    }
  };
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/env.mjs
var readEnv = (env) => {
  if (typeof globalThis.process !== "undefined") {
    return globalThis.process.env?.[env]?.trim() || undefined;
  }
  if (typeof globalThis.Deno !== "undefined") {
    return globalThis.Deno.env?.get?.(env)?.trim() || undefined;
  }
  return;
};
var init_env = () => {};

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/internal/headers.mjs
function* iterateHeaders(headers) {
  if (!headers)
    return;
  if (brand_privateNullableHeaders in headers) {
    const { values, nulls } = headers;
    yield* values.entries();
    for (const name of nulls) {
      yield [name, null];
    }
    return;
  }
  let shouldClear = false;
  let iter;
  if (headers instanceof Headers) {
    iter = headers.entries();
  } else if (isReadonlyArray(headers)) {
    iter = headers;
  } else {
    shouldClear = true;
    iter = Object.entries(headers ?? {});
  }
  for (let row of iter) {
    const name = row[0];
    if (typeof name !== "string")
      throw new TypeError("expected header name to be a string");
    const values = isReadonlyArray(row[1]) ? row[1] : [row[1]];
    let didClear = false;
    for (const value of values) {
      if (value === undefined)
        continue;
      if (shouldClear && !didClear) {
        didClear = true;
        yield [name, null];
      }
      yield [name, value];
    }
  }
}
var brand_privateNullableHeaders, buildHeaders = (newHeaders) => {
  const targetHeaders = new Headers;
  const nullHeaders = new Set;
  for (const headers of newHeaders) {
    const seenHeaders = new Set;
    for (const [name, value] of iterateHeaders(headers)) {
      const lowerName = name.toLowerCase();
      if (!seenHeaders.has(lowerName)) {
        targetHeaders.delete(name);
        seenHeaders.add(lowerName);
      }
      if (value === null) {
        targetHeaders.delete(name);
        nullHeaders.add(lowerName);
      } else {
        targetHeaders.append(name, value);
        nullHeaders.delete(lowerName);
      }
    }
  }
  return { [brand_privateNullableHeaders]: true, values: targetHeaders, nulls: nullHeaders };
};
var init_headers = __esm(() => {
  init_values();
  brand_privateNullableHeaders = Symbol.for("brand.privateNullableHeaders");
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/path.mjs
function encodeURIPath(str) {
  return str.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var EMPTY, createPathTagFunction = (pathEncoder = encodeURIPath) => function path(statics, ...params) {
  if (statics.length === 1)
    return statics[0];
  let postPath = false;
  const invalidSegments = [];
  const path2 = statics.reduce((previousValue, currentValue, index) => {
    if (/[?#]/.test(currentValue)) {
      postPath = true;
    }
    const value = params[index];
    let encoded = (postPath ? encodeURIComponent : pathEncoder)("" + value);
    if (index !== params.length && (value == null || typeof value === "object" && value.toString === Object.getPrototypeOf(Object.getPrototypeOf(value.hasOwnProperty ?? EMPTY) ?? EMPTY)?.toString)) {
      encoded = value + "";
      invalidSegments.push({
        start: previousValue.length + currentValue.length,
        length: encoded.length,
        error: `Value of type ${Object.prototype.toString.call(value).slice(8, -1)} is not a valid path parameter`
      });
    }
    return previousValue + currentValue + (index === params.length ? "" : encoded);
  }, "");
  const pathOnly = path2.split(/[?#]/, 1)[0];
  const invalidSegmentPattern = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
  let match;
  while ((match = invalidSegmentPattern.exec(pathOnly)) !== null) {
    invalidSegments.push({
      start: match.index,
      length: match[0].length,
      error: `Value "${match[0]}" can't be safely passed as a path parameter`
    });
  }
  invalidSegments.sort((a, b) => a.start - b.start);
  if (invalidSegments.length > 0) {
    let lastEnd = 0;
    const underline = invalidSegments.reduce((acc, segment) => {
      const spaces = " ".repeat(segment.start - lastEnd);
      const arrows = "^".repeat(segment.length);
      lastEnd = segment.start + segment.length;
      return acc + spaces + arrows;
    }, "");
    throw new AnthropicError(`Path parameters result in path with invalid segments:
${invalidSegments.map((e) => e.error).join(`
`)}
${path2}
${underline}`);
  }
  return path2;
}, path;
var init_path = __esm(() => {
  init_error3();
  EMPTY = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.create(null));
  path = /* @__PURE__ */ createPathTagFunction(encodeURIPath);
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/client.mjs
function makeMessagesResource(client4) {
  const resource = new Messages(client4);
  delete resource.batches;
  delete resource.countTokens;
  return resource;
}
function makeBetaResource(client4) {
  const resource = new Beta(client4);
  delete resource.promptCaching;
  delete resource.messages.batches;
  delete resource.messages.countTokens;
  return resource;
}
var DEFAULT_VERSION = "bedrock-2023-05-31", MODEL_ENDPOINTS, AnthropicBedrock;
var init_client5 = __esm(() => {
  init_client();
  init_resources();
  init_auth5();
  init_streaming2();
  init_env();
  init_values();
  init_headers();
  init_path();
  init_log();
  init_client();
  MODEL_ENDPOINTS = new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
  AnthropicBedrock = class AnthropicBedrock extends BaseAnthropic {
    constructor({ awsRegion = readEnv("AWS_REGION") ?? "us-east-1", baseURL = readEnv("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${awsRegion}.amazonaws.com`, apiKey = readEnv("AWS_BEARER_TOKEN_BEDROCK"), awsSecretKey = null, awsAccessKey = null, awsSessionToken = null, providerChainResolver = null, ...opts } = {}) {
      super({ baseURL, authToken: apiKey, ...opts });
      this.skipAuth = false;
      this.messages = makeMessagesResource(this);
      this.completions = new Completions(this);
      this.beta = makeBetaResource(this);
      const hasAccess = awsAccessKey != null;
      const hasSecret = awsSecretKey != null;
      if (hasAccess !== hasSecret) {
        loggerFor(this).warn("Warning: Passing only one of `awsAccessKey` or `awsSecretKey` is deprecated. " + "Please provide both keys, or provide neither and rely on the AWS credential provider chain.");
      }
      this.awsSecretKey = awsSecretKey;
      this.awsAccessKey = awsAccessKey;
      this.awsRegion = awsRegion;
      this.awsSessionToken = awsSessionToken;
      this.skipAuth = opts.skipAuth ?? false;
      this.providerChainResolver = providerChainResolver;
    }
    validateHeaders() {}
    async prepareRequest(request, { url, options }) {
      if (this.skipAuth) {
        request.headers.delete("Authorization");
        return;
      }
      if (this.authToken) {
        return;
      }
      const regionName = this.awsRegion;
      if (!regionName) {
        throw new Error("Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present");
      }
      const headers = await getAuthHeaders(request, {
        url,
        regionName,
        awsAccessKey: this.awsAccessKey,
        awsSecretKey: this.awsSecretKey,
        awsSessionToken: this.awsSessionToken,
        fetchOptions: this.fetchOptions,
        providerChainResolver: this.providerChainResolver
      });
      request.headers = buildHeaders([headers, request.headers]).values;
    }
    async buildRequest(options) {
      options.__streamClass = Stream2;
      if (isObj(options.body)) {
        options.body = { ...options.body };
      }
      if (isObj(options.body)) {
        if (!options.body["anthropic_version"]) {
          options.body["anthropic_version"] = DEFAULT_VERSION;
        }
        if (options.headers && !options.body["anthropic_beta"]) {
          const betas = buildHeaders([options.headers]).values.get("anthropic-beta");
          if (betas != null) {
            options.body["anthropic_beta"] = betas.split(",");
          }
        }
      }
      if (MODEL_ENDPOINTS.has(options.path) && options.method === "post") {
        if (!isObj(options.body)) {
          throw new Error("Expected request body to be an object for post /v1/messages");
        }
        const model = options.body["model"];
        options.body["model"] = undefined;
        const stream3 = options.body["stream"];
        options.body["stream"] = undefined;
        if (stream3) {
          options.path = path`/model/${model}/invoke-with-response-stream`;
        } else {
          options.path = path`/model/${model}/invoke`;
        }
      }
      return super.buildRequest(options);
    }
  };
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/core/aws-auth.mjs
var import_sha256_js2;
var init_aws_auth = __esm(() => {
  init_dist_es5();
  init_dist_es13();
  import_sha256_js2 = __toESM(require_build2(), 1);
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/mantle-client.mjs
var init_mantle_client = __esm(() => {
  init_headers();
  init_error3();
  init_env();
  init_client();
  init_resources();
  init_aws_auth();
});

// node_modules/.bun/@anthropic-ai+bedrock-sdk@0.29.0+3c5d820c62823f0b/node_modules/@anthropic-ai/bedrock-sdk/index.mjs
var init_bedrock_sdk = __esm(() => {
  init_client5();
  init_mantle_client();
  init_client5();
});

// src/services/api/bedrockClient.ts
var BedrockClient;
var init_bedrockClient = __esm(() => {
  init_bedrock_sdk();
  BedrockClient = class BedrockClient extends AnthropicBedrock {
    async buildRequest(options) {
      const req = await super.buildRequest(options);
      const inner = req?.req;
      if (!inner || typeof inner.body !== "string" || inner.body.length === 0) {
        return req;
      }
      let parsed;
      try {
        parsed = JSON.parse(inner.body);
      } catch {
        return req;
      }
      if (!("anthropic_beta" in parsed)) {
        return req;
      }
      delete parsed.anthropic_beta;
      const cleanedBody = JSON.stringify(parsed);
      inner.body = cleanedBody;
      const byteLen = String(new TextEncoder().encode(cleanedBody).length);
      const h = inner.headers;
      if (typeof Headers !== "undefined" && h instanceof Headers) {
        if (h.has("content-length"))
          h.set("content-length", byteLen);
      } else if (h && typeof h === "object") {
        const asDict = h;
        if ("content-length" in asDict)
          asDict["content-length"] = byteLen;
      }
      return req;
    }
  };
});
init_bedrockClient();

export {
  BedrockClient
};
