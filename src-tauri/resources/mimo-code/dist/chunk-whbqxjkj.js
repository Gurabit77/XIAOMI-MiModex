// @bun
import {
  fromEnvSigningName,
  init_dist_es as init_dist_es2,
  nodeProvider
} from "./chunk-4jecp5fr.js";
import {
  defaultProvider,
  init_dist_es
} from "./chunk-8b5a0z0t.js";
import {
  require_dist_cjs as require_dist_cjs12,
  require_dist_cjs1 as require_dist_cjs13,
  require_dist_cjs10 as require_dist_cjs24,
  require_dist_cjs11 as require_dist_cjs25,
  require_dist_cjs12 as require_dist_cjs26,
  require_dist_cjs2 as require_dist_cjs14,
  require_dist_cjs3 as require_dist_cjs16,
  require_dist_cjs4 as require_dist_cjs17,
  require_dist_cjs5 as require_dist_cjs19,
  require_dist_cjs6 as require_dist_cjs20,
  require_dist_cjs7 as require_dist_cjs21,
  require_dist_cjs8 as require_dist_cjs22,
  require_dist_cjs9 as require_dist_cjs23,
  require_protocols
} from "./chunk-86apn0aq.js";
import {
  require_dist_cjs as require_dist_cjs15,
  require_dist_cjs2 as require_dist_cjs18
} from "./chunk-kggjyy2e.js";
import {
  require_dist_cjs as require_dist_cjs10
} from "./chunk-9r117f3a.js";
import {
  require_dist_cjs as require_dist_cjs11,
  require_httpAuthSchemes
} from "./chunk-57y89twd.js";
import {
  require_dist_cjs as require_dist_cjs5,
  require_schema
} from "./chunk-6qkspz0q.js";
import {
  require_dist_cjs as require_dist_cjs6,
  require_dist_cjs2 as require_dist_cjs8,
  require_dist_cjs4 as require_dist_cjs9,
  require_tslib
} from "./chunk-7vfjvamn.js";
import {
  require_client,
  require_dist_cjs1 as require_dist_cjs2
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-87zgmycv.js";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-4ch5vxv6.js";
import {
  require_dist_cjs2 as require_dist_cjs7
} from "./chunk-2nayx6q1.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+middleware-eventstream@3.972.10/node_modules/@aws-sdk/middleware-eventstream/dist-es/eventStreamConfiguration.js
function resolveEventStreamConfig(input) {
  const eventSigner = input.signer;
  const messageSigner = input.signer;
  const newInput = Object.assign(input, {
    eventSigner,
    messageSigner
  });
  const eventStreamPayloadHandler = newInput.eventStreamPayloadHandlerProvider(newInput);
  return Object.assign(newInput, {
    eventStreamPayloadHandler
  });
}
var init_eventStreamConfiguration = () => {};

// node_modules/.bun/@aws-sdk+middleware-eventstream@3.972.10/node_modules/@aws-sdk/middleware-eventstream/dist-es/eventStreamHandlingMiddleware.js
var import_protocol_http, eventStreamHandlingMiddleware = (options) => (next, context) => async (args) => {
  const { request } = args;
  if (!import_protocol_http.HttpRequest.isInstance(request))
    return next(args);
  return options.eventStreamPayloadHandler.handle(next, args, context);
}, eventStreamHandlingMiddlewareOptions;
var init_eventStreamHandlingMiddleware = __esm(() => {
  import_protocol_http = __toESM(require_dist_cjs(), 1);
  eventStreamHandlingMiddlewareOptions = {
    tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
    name: "eventStreamHandlingMiddleware",
    relation: "after",
    toMiddleware: "awsAuthMiddleware",
    override: true
  };
});

// node_modules/.bun/@aws-sdk+middleware-eventstream@3.972.10/node_modules/@aws-sdk/middleware-eventstream/dist-es/eventStreamHeaderMiddleware.js
var import_protocol_http2, eventStreamHeaderMiddleware = (next) => async (args) => {
  const { request } = args;
  if (!import_protocol_http2.HttpRequest.isInstance(request))
    return next(args);
  request.headers = {
    ...request.headers,
    "content-type": "application/vnd.amazon.eventstream",
    "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS"
  };
  return next({
    ...args,
    request
  });
}, eventStreamHeaderMiddlewareOptions;
var init_eventStreamHeaderMiddleware = __esm(() => {
  import_protocol_http2 = __toESM(require_dist_cjs(), 1);
  eventStreamHeaderMiddlewareOptions = {
    step: "build",
    tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
    name: "eventStreamHeaderMiddleware",
    override: true
  };
});

// node_modules/.bun/@aws-sdk+middleware-eventstream@3.972.10/node_modules/@aws-sdk/middleware-eventstream/dist-es/getEventStreamPlugin.js
var getEventStreamPlugin = (options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(eventStreamHandlingMiddleware(options), eventStreamHandlingMiddlewareOptions);
    clientStack.add(eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions);
  }
});
var init_getEventStreamPlugin = __esm(() => {
  init_eventStreamHandlingMiddleware();
  init_eventStreamHeaderMiddleware();
});

// node_modules/.bun/@aws-sdk+middleware-eventstream@3.972.10/node_modules/@aws-sdk/middleware-eventstream/dist-es/index.js
var init_dist_es3 = __esm(() => {
  init_eventStreamConfiguration();
  init_eventStreamHandlingMiddleware();
  init_eventStreamHeaderMiddleware();
  init_getEventStreamPlugin();
});

// node_modules/.bun/tslib@2.8.1/node_modules/tslib/modules/index.js
var import_tslib, __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension;
var init_modules = __esm(() => {
  import_tslib = __toESM(require_tslib(), 1);
  ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
  } = import_tslib.default);
});

// node_modules/.bun/@smithy+is-array-buffer@2.2.0/node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
var init_dist_es4 = () => {};

// node_modules/.bun/@smithy+util-buffer-from@2.2.0/node_modules/@smithy/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
  if (!isArrayBuffer(input)) {
    throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
  }
  return Buffer2.from(input, offset, length);
}, fromString = (input, encoding) => {
  if (typeof input !== "string") {
    throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
  }
  return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
};
var init_dist_es5 = __esm(() => {
  init_dist_es4();
});

// node_modules/.bun/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js
var fromUtf8 = (input) => {
  const buf = fromString(input, "utf8");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
var init_fromUtf8 = __esm(() => {
  init_dist_es5();
});

// node_modules/.bun/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var init_toUint8Array = __esm(() => {
  init_fromUtf8();
});

// node_modules/.bun/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-es/toUtf8.js
var toUtf8 = (input) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
  }
  return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};
var init_toUtf8 = __esm(() => {
  init_dist_es5();
});

// node_modules/.bun/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es6 = __esm(() => {
  init_fromUtf8();
  init_toUint8Array();
  init_toUtf8();
});

// node_modules/.bun/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}
var fromUtf83;
var init_convertToBuffer = __esm(() => {
  init_dist_es6();
  fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : fromUtf8;
});

// node_modules/.bun/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
var init_isEmptyData = () => {};

// node_modules/.bun/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/numToUint8.js
function numToUint8(num) {
  return new Uint8Array([
    (num & 4278190080) >> 24,
    (num & 16711680) >> 16,
    (num & 65280) >> 8,
    num & 255
  ]);
}
var init_numToUint8 = () => {};

// node_modules/.bun/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
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
var init_uint32ArrayFrom = () => {};

// node_modules/.bun/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/index.js
var init_module = __esm(() => {
  init_convertToBuffer();
  init_isEmptyData();
  init_numToUint8();
  init_uint32ArrayFrom();
});

// node_modules/.bun/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
var AwsCrc32;
var init_aws_crc32 = __esm(() => {
  init_modules();
  init_module();
  init_module2();
  AwsCrc32 = function() {
    function AwsCrc322() {
      this.crc32 = new Crc32;
    }
    AwsCrc322.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32.update(convertToBuffer(toHash));
    };
    AwsCrc322.prototype.digest = function() {
      return __awaiter(this, undefined, undefined, function() {
        return __generator(this, function(_a) {
          return [2, numToUint8(this.crc32.digest())];
        });
      });
    };
    AwsCrc322.prototype.reset = function() {
      this.crc32 = new Crc32;
    };
    return AwsCrc322;
  }();
});

// node_modules/.bun/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/module/index.js
var Crc32, a_lookUpTable, lookupTable;
var init_module2 = __esm(() => {
  init_modules();
  init_module();
  init_aws_crc32();
  Crc32 = function() {
    function Crc322() {
      this.checksum = 4294967295;
    }
    Crc322.prototype.update = function(data) {
      var e_1, _a;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next();!data_1_1.done; data_1_1 = data_1.next()) {
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
  a_lookUpTable = [
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
  lookupTable = uint32ArrayFrom(a_lookUpTable);
});

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/Int64.js
class Int64 {
  bytes;
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
    return parseInt(import_util_hex_encoding.toHex(bytes), 16) * (negative ? -1 : 1);
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
var import_util_hex_encoding;
var init_Int64 = __esm(() => {
  import_util_hex_encoding = __toESM(require_dist_cjs9(), 1);
});

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
class HeaderMarshaller {
  toUtf8;
  fromUtf8;
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
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(import_util_hex_encoding2.fromHex(header.value.replace(/\-/g, "")), 1);
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
            value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
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
            value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${import_util_hex_encoding2.toHex(uuidBytes.subarray(0, 4))}-${import_util_hex_encoding2.toHex(uuidBytes.subarray(4, 6))}-${import_util_hex_encoding2.toHex(uuidBytes.subarray(6, 8))}-${import_util_hex_encoding2.toHex(uuidBytes.subarray(8, 10))}-${import_util_hex_encoding2.toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
}
var import_util_hex_encoding2, HEADER_VALUE_TYPE, BOOLEAN_TAG = "boolean", BYTE_TAG = "byte", SHORT_TAG = "short", INT_TAG = "integer", LONG_TAG = "long", BINARY_TAG = "binary", STRING_TAG = "string", TIMESTAMP_TAG = "timestamp", UUID_TAG = "uuid", UUID_PATTERN;
var init_HeaderMarshaller = __esm(() => {
  init_Int64();
  import_util_hex_encoding2 = __toESM(require_dist_cjs9(), 1);
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

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
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
  const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
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
var PRELUDE_MEMBER_LENGTH = 4, PRELUDE_LENGTH, CHECKSUM_LENGTH = 4, MINIMUM_MESSAGE_LENGTH;
var init_splitMessage = __esm(() => {
  init_module2();
  PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
  MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
});

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
class EventStreamCodec {
  headerMarshaller;
  messageBuffer;
  isEndOfStream;
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
    const checksum = new Crc32;
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
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
var init_EventStreamCodec = __esm(() => {
  init_module2();
  init_HeaderMarshaller();
  init_splitMessage();
});

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/Message.js
var init_Message = () => {};

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream;
var init_MessageDecoderStream = __esm(() => {
  MessageDecoderStream = class MessageDecoderStream {
    options;
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

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream;
var init_MessageEncoderStream = __esm(() => {
  MessageEncoderStream = class MessageEncoderStream {
    options;
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

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream;
var init_SmithyMessageDecoderStream = __esm(() => {
  SmithyMessageDecoderStream = class SmithyMessageDecoderStream {
    options;
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

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream;
var init_SmithyMessageEncoderStream = __esm(() => {
  SmithyMessageEncoderStream = class SmithyMessageEncoderStream {
    options;
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

// node_modules/.bun/@smithy+eventstream-codec@4.2.14/node_modules/@smithy/eventstream-codec/dist-es/index.js
var init_dist_es7 = __esm(() => {
  init_EventStreamCodec();
  init_HeaderMarshaller();
  init_Int64();
  init_Message();
  init_MessageDecoderStream();
  init_MessageEncoderStream();
  init_SmithyMessageDecoderStream();
  init_SmithyMessageEncoderStream();
});

// node_modules/.bun/@smithy+eventstream-serde-universal@4.2.14/node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
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

// node_modules/.bun/@smithy+eventstream-serde-universal@4.2.14/node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
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

// node_modules/.bun/@smithy+eventstream-serde-universal@4.2.14/node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
class EventStreamMarshaller {
  eventStreamCodec;
  utfEncoder;
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
  init_dist_es7();
  init_getChunkedStream();
  init_getUnmarshalledStream();
});

// node_modules/.bun/@smithy+eventstream-serde-universal@4.2.14/node_modules/@smithy/eventstream-serde-universal/dist-es/provider.js
var init_provider = () => {};

// node_modules/.bun/@smithy+eventstream-serde-universal@4.2.14/node_modules/@smithy/eventstream-serde-universal/dist-es/index.js
var init_dist_es8 = __esm(() => {
  init_EventStreamMarshaller();
  init_provider();
});

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/utils.js
var isWebSocketRequest = (request) => request.protocol === "ws:" || request.protocol === "wss:";
var init_utils = () => {};

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/WebSocketFetchHandler.js
var init_WebSocketFetchHandler = () => {};

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/middlewares/websocketEndpointMiddleware.js
var import_protocol_http3, websocketEndpointMiddleware = (config, options) => (next) => (args) => {
  const { request } = args;
  if (import_protocol_http3.HttpRequest.isInstance(request) && config.requestHandler.metadata?.handlerProtocol?.toLowerCase().includes("websocket")) {
    request.protocol = "wss:";
    request.method = "GET";
    request.path = `${request.path}-websocket`;
    const { headers } = request;
    delete headers["content-type"];
    delete headers["x-amz-content-sha256"];
    for (const name of Object.keys(headers)) {
      if (name.indexOf(options.headerPrefix) === 0) {
        const chunkedName = name.replace(options.headerPrefix, "");
        request.query[chunkedName] = headers[name];
      }
    }
    if (headers["x-amz-user-agent"]) {
      request.query["user-agent"] = headers["x-amz-user-agent"];
    }
    request.headers = { host: headers.host ?? request.hostname };
  }
  return next(args);
}, websocketEndpointMiddlewareOptions;
var init_websocketEndpointMiddleware = __esm(() => {
  import_protocol_http3 = __toESM(require_dist_cjs(), 1);
  websocketEndpointMiddlewareOptions = {
    name: "websocketEndpointMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    relation: "after",
    toMiddleware: "eventStreamHeaderMiddleware",
    override: true
  };
});

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/middlewares/websocketInjectSessionIdMiddleware.js
var injectSessionIdMiddleware = () => (next) => async (args) => {
  const requestParams = {
    ...args.input
  };
  const response = await next(args);
  const output = response.output;
  if (requestParams.SessionId && output.SessionId == null) {
    output.SessionId = requestParams.SessionId;
  }
  return response;
}, injectSessionIdMiddlewareOptions;
var init_websocketInjectSessionIdMiddleware = __esm(() => {
  injectSessionIdMiddlewareOptions = {
    step: "initialize",
    name: "injectSessionIdMiddleware",
    tags: ["WEBSOCKET", "EVENT_STREAM"],
    override: true
  };
});

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/getWebSocketPlugin.js
var getWebSocketPlugin = (config, options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(websocketEndpointMiddleware(config, options), websocketEndpointMiddlewareOptions);
    clientStack.add(injectSessionIdMiddleware(), injectSessionIdMiddlewareOptions);
  }
});
var init_getWebSocketPlugin = __esm(() => {
  init_websocketEndpointMiddleware();
  init_websocketInjectSessionIdMiddleware();
});

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/WebsocketSignatureV4.js
class WebsocketSignatureV4 {
  signer;
  constructor(options) {
    this.signer = options.signer;
  }
  presign(originalRequest, options = {}) {
    return this.signer.presign(originalRequest, options);
  }
  async sign(toSign, options) {
    if (import_protocol_http4.HttpRequest.isInstance(toSign) && isWebSocketRequest(toSign)) {
      const signedRequest = await this.signer.presign({ ...toSign, body: "" }, {
        ...options,
        expiresIn: 60,
        unsignableHeaders: new Set(Object.keys(toSign.headers).filter((header) => header !== "host"))
      });
      return {
        ...signedRequest,
        body: toSign.body
      };
    } else {
      return this.signer.sign(toSign, options);
    }
  }
  signMessage(message, args) {
    return this.signer.signMessage(message, args);
  }
}
var import_protocol_http4;
var init_WebsocketSignatureV4 = __esm(() => {
  init_utils();
  import_protocol_http4 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/resolveWebSocketConfig.js
var resolveWebSocketConfig = (input) => {
  const { signer } = input;
  return Object.assign(input, {
    signer: async (authScheme) => {
      const signerObj = await signer(authScheme);
      if (validateSigner(signerObj)) {
        return new WebsocketSignatureV4({ signer: signerObj });
      }
      throw new Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
    }
  });
}, validateSigner = (signer) => !!signer;
var init_resolveWebSocketConfig = __esm(() => {
  init_WebsocketSignatureV4();
});

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/ws-eventstream/eventStreamPayloadHandlerProvider.js
var init_eventStreamPayloadHandlerProvider = () => {};

// node_modules/.bun/@aws-sdk+middleware-websocket@3.972.16/node_modules/@aws-sdk/middleware-websocket/dist-es/index.js
var init_dist_es9 = __esm(() => {
  init_WebSocketFetchHandler();
  init_getWebSocketPlugin();
  init_resolveWebSocketConfig();
  init_eventStreamPayloadHandlerProvider();
});

// node_modules/.bun/@smithy+eventstream-serde-config-resolver@4.3.14/node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = (input) => Object.assign(input, {
  eventStreamMarshaller: input.eventStreamSerdeProvider(input)
});
var init_EventStreamSerdeConfig = () => {};

// node_modules/.bun/@smithy+eventstream-serde-config-resolver@4.3.14/node_modules/@smithy/eventstream-serde-config-resolver/dist-es/index.js
var init_dist_es10 = __esm(() => {
  init_EventStreamSerdeConfig();
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "bedrock",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createSmithyApiHttpBearerAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: ({ profile, filepath, configFilepath, ignoreCache }, context) => ({
      identityProperties: {
        profile,
        filepath,
        configFilepath,
        ignoreCache
      }
    })
  };
}
var import_httpAuthSchemes, import_core, import_util_middleware, defaultBedrockRuntimeHttpAuthSchemeParametersProvider = async (config, context, input) => {
  return {
    operation: import_util_middleware.getSmithyContext(context).operation,
    region: await import_util_middleware.normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, defaultBedrockRuntimeHttpAuthSchemeProvider = (authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
    }
  }
  return options;
}, resolveHttpAuthSchemeConfig = (config) => {
  const token = import_core.memoizeIdentityProvider(config.token, import_core.isIdentityExpired, import_core.doesIdentityRequireRefresh);
  const config_0 = import_httpAuthSchemes.resolveAwsSdkSigV4Config(config);
  return Object.assign(config_0, {
    authSchemePreference: import_util_middleware.normalizeProvider(config.authSchemePreference ?? []),
    token
  });
};
var init_httpAuthSchemeProvider = __esm(() => {
  import_httpAuthSchemes = __toESM(require_httpAuthSchemes(), 1);
  import_core = __toESM(require_dist_cjs11(), 1);
  import_util_middleware = __toESM(require_dist_cjs6(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = (options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "bedrock"
  });
}, commonParams;
var init_EndpointParameters = __esm(() => {
  commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/package.json
var package_default;
var init_package = __esm(() => {
  package_default = {
    name: "@aws-sdk/client-bedrock-runtime",
    description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
    version: "3.1037.0",
    scripts: {
      build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
      "build:cjs": "node ../../scripts/compilation/inline client-bedrock-runtime",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime",
      test: "yarn g:vitest run --passWithNoTests",
      "test:browser": "yarn g:vitest run -c vitest.config.browser.e2e.mts",
      "test:browser:watch": "yarn g:vitest watch -c vitest.config.browser.e2e.mts",
      "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts",
      "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
      "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs",
      "test:integration": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
      "test:integration:watch": "yarn g:vitest run --passWithNoTests -c vitest.config.integ.mts",
      "test:watch": "yarn g:vitest watch --passWithNoTests"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: false,
    dependencies: {
      "@aws-crypto/sha256-browser": "5.2.0",
      "@aws-crypto/sha256-js": "5.2.0",
      "@aws-sdk/core": "^3.974.5",
      "@aws-sdk/credential-provider-node": "^3.972.36",
      "@aws-sdk/eventstream-handler-node": "^3.972.14",
      "@aws-sdk/middleware-eventstream": "^3.972.10",
      "@aws-sdk/middleware-host-header": "^3.972.10",
      "@aws-sdk/middleware-logger": "^3.972.10",
      "@aws-sdk/middleware-recursion-detection": "^3.972.11",
      "@aws-sdk/middleware-user-agent": "^3.972.35",
      "@aws-sdk/middleware-websocket": "^3.972.16",
      "@aws-sdk/region-config-resolver": "^3.972.13",
      "@aws-sdk/token-providers": "3.1037.0",
      "@aws-sdk/types": "^3.973.8",
      "@aws-sdk/util-endpoints": "^3.996.8",
      "@aws-sdk/util-user-agent-browser": "^3.972.10",
      "@aws-sdk/util-user-agent-node": "^3.973.21",
      "@smithy/config-resolver": "^4.4.17",
      "@smithy/core": "^3.23.17",
      "@smithy/eventstream-serde-browser": "^4.2.14",
      "@smithy/eventstream-serde-config-resolver": "^4.3.14",
      "@smithy/eventstream-serde-node": "^4.2.14",
      "@smithy/fetch-http-handler": "^5.3.17",
      "@smithy/hash-node": "^4.2.14",
      "@smithy/invalid-dependency": "^4.2.14",
      "@smithy/middleware-content-length": "^4.2.14",
      "@smithy/middleware-endpoint": "^4.4.32",
      "@smithy/middleware-retry": "^4.5.5",
      "@smithy/middleware-serde": "^4.2.20",
      "@smithy/middleware-stack": "^4.2.14",
      "@smithy/node-config-provider": "^4.3.14",
      "@smithy/node-http-handler": "^4.6.1",
      "@smithy/protocol-http": "^5.3.14",
      "@smithy/smithy-client": "^4.12.13",
      "@smithy/types": "^4.14.1",
      "@smithy/url-parser": "^4.2.14",
      "@smithy/util-base64": "^4.3.2",
      "@smithy/util-body-length-browser": "^4.2.2",
      "@smithy/util-body-length-node": "^4.2.3",
      "@smithy/util-defaults-mode-browser": "^4.3.49",
      "@smithy/util-defaults-mode-node": "^4.2.54",
      "@smithy/util-endpoints": "^3.4.2",
      "@smithy/util-middleware": "^4.2.14",
      "@smithy/util-retry": "^4.3.4",
      "@smithy/util-stream": "^4.5.25",
      "@smithy/util-utf8": "^4.2.2",
      tslib: "^2.6.2"
    },
    devDependencies: {
      "@smithy/snapshot-testing": "^2.0.8",
      "@tsconfig/node20": "20.1.8",
      "@types/node": "^20.14.8",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      premove: "4.0.0",
      typescript: "~5.8.3",
      vitest: "^4.0.17"
    },
    engines: {
      node: ">=20.0.0"
    },
    typesVersions: {
      "<4.5": {
        "dist-types/*": [
          "dist-types/ts3.4/*"
        ]
      }
    },
    files: [
      "dist-*/**"
    ],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-bedrock-runtime"
    }
  };
});

// node_modules/.bun/@aws-sdk+eventstream-handler-node@3.972.14/node_modules/@aws-sdk/eventstream-handler-node/dist-es/EventSigningTransformStream.js
import { Transform } from "stream";
function getSignatureBinary(signature) {
  const buf = Buffer.from(signature, "hex");
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
var EventSigningTransformStream;
var init_EventSigningTransformStream = __esm(() => {
  EventSigningTransformStream = class EventSigningTransformStream extends Transform {
    priorSignature;
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    staticCredentials;
    constructor(options) {
      super({
        autoDestroy: true,
        readableObjectMode: true,
        writableObjectMode: true,
        ...options
      });
      this.priorSignature = options.priorSignature;
      this.eventStreamCodec = options.eventStreamCodec;
      this.messageSigner = options.messageSigner;
      this.systemClockOffsetProvider = options.systemClockOffsetProvider;
      this.staticCredentials = options.credentials?.();
    }
    async _transform(chunk, encoding, callback) {
      try {
        const now = new Date(Date.now() + await this.systemClockOffsetProvider());
        const dateHeader = {
          ":date": { type: "timestamp", value: now }
        };
        const signedMessage = await this.messageSigner.sign({
          message: {
            body: chunk,
            headers: dateHeader
          },
          priorSignature: this.priorSignature
        }, {
          signingDate: now,
          eventStreamCredentials: await this.staticCredentials
        });
        this.priorSignature = signedMessage.signature;
        const serializedSigned = this.eventStreamCodec.encode({
          headers: {
            ...dateHeader,
            ":chunk-signature": {
              type: "binary",
              value: getSignatureBinary(signedMessage.signature)
            }
          },
          body: chunk
        });
        this.push(serializedSigned);
        return callback();
      } catch (err) {
        callback(err);
      }
    }
  };
});

// node_modules/.bun/@aws-sdk+eventstream-handler-node@3.972.14/node_modules/@aws-sdk/eventstream-handler-node/dist-es/EventStreamPayloadHandler.js
import { PassThrough, pipeline, Readable } from "stream";

class EventStreamPayloadHandler {
  messageSigner;
  eventStreamCodec;
  systemClockOffsetProvider;
  credentials;
  constructor(options) {
    this.messageSigner = options.messageSigner;
    this.eventStreamCodec = new EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
    this.systemClockOffsetProvider = async () => options.systemClockOffset ?? 0;
    this.credentials = options.credentials;
  }
  async handle(next, args, context = {}) {
    const request = args.request;
    const { body: payload, query } = request;
    if (!(payload instanceof Readable)) {
      throw new Error("Eventstream payload must be a Readable stream.");
    }
    const payloadStream = payload;
    request.body = new PassThrough({
      objectMode: true
    });
    const match = request.headers?.authorization?.match(/Signature=([\w]+)$/);
    let priorSignature = match?.[1] ?? query?.["X-Amz-Signature"] ?? "";
    if (context.__staticSignature) {
      priorSignature = "";
    }
    const signingStream = new EventSigningTransformStream({
      priorSignature,
      eventStreamCodec: this.eventStreamCodec,
      messageSigner: await this.messageSigner(),
      systemClockOffsetProvider: this.systemClockOffsetProvider,
      credentials: this.credentials
    });
    let resolvePipeline;
    const pipelineError = new Promise((resolve, reject) => {
      resolvePipeline = () => resolve(undefined);
      pipeline(payloadStream, signingStream, request.body, (err) => {
        if (err) {
          reject(new Error(`Pipeline error in @aws-sdk/eventstream-handler-node: ${err.message}`, { cause: err }));
        }
      });
    });
    let result;
    try {
      result = await Promise.race([next(args), pipelineError]);
    } catch (e) {
      request.body.end();
      throw e;
    } finally {
      resolvePipeline();
    }
    return result;
  }
}
var init_EventStreamPayloadHandler = __esm(() => {
  init_dist_es7();
  init_EventSigningTransformStream();
});

// node_modules/.bun/@aws-sdk+eventstream-handler-node@3.972.14/node_modules/@aws-sdk/eventstream-handler-node/dist-es/eventStreamPayloadHandlerProvider.js
var eventStreamPayloadHandlerProvider2 = (options) => new EventStreamPayloadHandler(options);
var init_eventStreamPayloadHandlerProvider2 = __esm(() => {
  init_EventStreamPayloadHandler();
});

// node_modules/.bun/@aws-sdk+eventstream-handler-node@3.972.14/node_modules/@aws-sdk/eventstream-handler-node/dist-es/index.js
var init_dist_es11 = __esm(() => {
  init_eventStreamPayloadHandlerProvider2();
});

// node_modules/.bun/@smithy+eventstream-serde-node@4.2.14/node_modules/@smithy/eventstream-serde-node/dist-es/utils.js
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
var init_utils2 = () => {};

// node_modules/.bun/@smithy+eventstream-serde-node@4.2.14/node_modules/@smithy/eventstream-serde-node/dist-es/EventStreamMarshaller.js
import { Readable as Readable2 } from "stream";

class EventStreamMarshaller3 {
  universalMarshaller;
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
    return Readable2.from(this.universalMarshaller.serialize(input, serializer));
  }
}
var init_EventStreamMarshaller2 = __esm(() => {
  init_dist_es8();
  init_utils2();
});

// node_modules/.bun/@smithy+eventstream-serde-node@4.2.14/node_modules/@smithy/eventstream-serde-node/dist-es/provider.js
var eventStreamSerdeProvider = (options) => new EventStreamMarshaller3(options);
var init_provider2 = __esm(() => {
  init_EventStreamMarshaller2();
});

// node_modules/.bun/@smithy+eventstream-serde-node@4.2.14/node_modules/@smithy/eventstream-serde-node/dist-es/index.js
var init_dist_es12 = __esm(() => {
  init_EventStreamMarshaller2();
  init_provider2();
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/bdd.js
var import_util_endpoints, k = "ref", a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "getAttr", g, h, i, j, _data, root = 2, r = 1e8, nodes, bdd;
var init_bdd = __esm(() => {
  import_util_endpoints = __toESM(require_dist_cjs15(), 1);
  g = { [k]: "Endpoint" };
  h = { [k]: d };
  i = {};
  j = [{ [k]: "Region" }];
  _data = {
    conditions: [
      [c, [g]],
      [c, j],
      ["aws.partition", j, d],
      [e, [{ [k]: "UseFIPS" }, b]],
      [e, [{ [k]: "UseDualStack" }, b]],
      [e, [{ fn: f, argv: [h, "supportsDualStack"] }, b]],
      [e, [{ fn: f, argv: [h, "supportsFIPS"] }, b]]
    ],
    results: [
      [a],
      [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
      [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
      [g, i],
      ["https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
      [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
      ["https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}", i],
      [a, "FIPS is enabled but this partition does not support FIPS"],
      ["https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
      [a, "DualStack is enabled but this partition does not support DualStack"],
      ["https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}", i],
      [a, "Invalid Configuration: Missing Region"]
    ]
  };
  nodes = new Int32Array([
    -1,
    1,
    -1,
    0,
    12,
    3,
    1,
    4,
    r + 11,
    2,
    5,
    r + 11,
    3,
    8,
    6,
    4,
    7,
    r + 10,
    5,
    r + 8,
    r + 9,
    4,
    10,
    9,
    6,
    r + 6,
    r + 7,
    5,
    11,
    r + 5,
    6,
    r + 4,
    r + 5,
    3,
    r + 1,
    13,
    4,
    r + 2,
    r + 3
  ]);
  bdd = import_util_endpoints.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/endpoint/endpointResolver.js
var import_util_endpoints2, import_util_endpoints3, cache, defaultEndpointResolver = (endpointParams, context = {}) => {
  return cache.get(endpointParams, () => import_util_endpoints3.decideEndpoint(bdd, {
    endpointParams,
    logger: context.logger
  }));
};
var init_endpointResolver = __esm(() => {
  init_bdd();
  import_util_endpoints2 = __toESM(require_dist_cjs16(), 1);
  import_util_endpoints3 = __toESM(require_dist_cjs15(), 1);
  cache = new import_util_endpoints3.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  });
  import_util_endpoints3.customEndpointFunctions.aws = import_util_endpoints2.awsEndpointFunctions;
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/BedrockRuntimeServiceException.js
var import_smithy_client, BedrockRuntimeServiceException;
var init_BedrockRuntimeServiceException = __esm(() => {
  import_smithy_client = __toESM(require_dist_cjs10(), 1);
  BedrockRuntimeServiceException = class BedrockRuntimeServiceException extends import_smithy_client.ServiceException {
    constructor(options) {
      super(options);
      Object.setPrototypeOf(this, BedrockRuntimeServiceException.prototype);
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/errors.js
var AccessDeniedException, InternalServerException, ThrottlingException, ValidationException, ConflictException, ResourceNotFoundException, ServiceQuotaExceededException, ServiceUnavailableException, ModelErrorException, ModelNotReadyException, ModelTimeoutException, ModelStreamErrorException;
var init_errors = __esm(() => {
  init_BedrockRuntimeServiceException();
  AccessDeniedException = class AccessDeniedException extends BedrockRuntimeServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
  };
  InternalServerException = class InternalServerException extends BedrockRuntimeServiceException {
    name = "InternalServerException";
    $fault = "server";
    constructor(opts) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, InternalServerException.prototype);
    }
  };
  ThrottlingException = class ThrottlingException extends BedrockRuntimeServiceException {
    name = "ThrottlingException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ThrottlingException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ThrottlingException.prototype);
    }
  };
  ValidationException = class ValidationException extends BedrockRuntimeServiceException {
    name = "ValidationException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ValidationException.prototype);
    }
  };
  ConflictException = class ConflictException extends BedrockRuntimeServiceException {
    name = "ConflictException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ConflictException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ConflictException.prototype);
    }
  };
  ResourceNotFoundException = class ResourceNotFoundException extends BedrockRuntimeServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
  };
  ServiceQuotaExceededException = class ServiceQuotaExceededException extends BedrockRuntimeServiceException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ServiceQuotaExceededException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    }
  };
  ServiceUnavailableException = class ServiceUnavailableException extends BedrockRuntimeServiceException {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(opts) {
      super({
        name: "ServiceUnavailableException",
        $fault: "server",
        ...opts
      });
      Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
  };
  ModelErrorException = class ModelErrorException extends BedrockRuntimeServiceException {
    name = "ModelErrorException";
    $fault = "client";
    originalStatusCode;
    resourceName;
    constructor(opts) {
      super({
        name: "ModelErrorException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ModelErrorException.prototype);
      this.originalStatusCode = opts.originalStatusCode;
      this.resourceName = opts.resourceName;
    }
  };
  ModelNotReadyException = class ModelNotReadyException extends BedrockRuntimeServiceException {
    name = "ModelNotReadyException";
    $fault = "client";
    $retryable = {};
    constructor(opts) {
      super({
        name: "ModelNotReadyException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ModelNotReadyException.prototype);
    }
  };
  ModelTimeoutException = class ModelTimeoutException extends BedrockRuntimeServiceException {
    name = "ModelTimeoutException";
    $fault = "client";
    constructor(opts) {
      super({
        name: "ModelTimeoutException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ModelTimeoutException.prototype);
    }
  };
  ModelStreamErrorException = class ModelStreamErrorException extends BedrockRuntimeServiceException {
    name = "ModelStreamErrorException";
    $fault = "client";
    originalStatusCode;
    originalMessage;
    constructor(opts) {
      super({
        name: "ModelStreamErrorException",
        $fault: "client",
        ...opts
      });
      Object.setPrototypeOf(this, ModelStreamErrorException.prototype);
      this.originalStatusCode = opts.originalStatusCode;
      this.originalMessage = opts.originalMessage;
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/schemas/schemas_0.js
var import_schema, _A = "Accept", _AB = "AudioBlock", _ADE = "AccessDeniedException", _AG = "ApplyGuardrail", _AGD = "AppliedGuardrailDetails", _AGR = "ApplyGuardrailRequest", _AGRp = "ApplyGuardrailResponse", _AIM = "AsyncInvokeMessage", _AIODC = "AsyncInvokeOutputDataConfig", _AIS = "AsyncInvokeSummary", _AISODC = "AsyncInvokeS3OutputDataConfig", _AISs = "AsyncInvokeSummaries", _AS = "AudioSource", _ATC = "AnyToolChoice", _ATCu = "AutoToolChoice", _B = "Body", _BIPP = "BidirectionalInputPayloadPart", _BOPP = "BidirectionalOutputPayloadPart", _C = "Citation", _CB = "ContentBlocks", _CBD = "ContentBlockDelta", _CBDE = "ContentBlockDeltaEvent", _CBS = "ContentBlockStart", _CBSE = "ContentBlockStartEvent", _CBSEo = "ContentBlockStopEvent", _CBo = "ContentBlock", _CC = "CitationsConfig", _CCB = "CitationsContentBlock", _CD = "CacheDetail", _CDL = "CacheDetailsList", _CDi = "CitationsDelta", _CE = "ConflictException", _CGC = "CitationGeneratedContent", _CGCL = "CitationGeneratedContentList", _CL = "CitationLocation", _CM = "ConverseMetrics", _CO = "ConverseOutput", _CPB = "CachePointBlock", _CR = "ConverseRequest", _CRo = "ConverseResponse", _CS = "ConverseStream", _CSC = "CitationSourceContent", _CSCD = "CitationSourceContentDelta", _CSCL = "CitationSourceContentList", _CSCLD = "CitationSourceContentListDelta", _CSM = "ConverseStreamMetrics", _CSME = "ConverseStreamMetadataEvent", _CSO = "ConverseStreamOutput", _CSR = "ConverseStreamRequest", _CSRo = "ConverseStreamResponse", _CST = "ConverseStreamTrace", _CT = "ConverseTrace", _CTI = "CountTokensInput", _CTR = "ConverseTokensRequest", _CTRo = "CountTokensRequest", _CTRou = "CountTokensResponse", _CT_ = "Content-Type", _CTo = "CountTokens", _Ci = "Citations", _Co = "Converse", _DB = "DocumentBlock", _DCB = "DocumentContentBlocks", _DCBo = "DocumentContentBlock", _DCL = "DocumentCharLocation", _DCLo = "DocumentChunkLocation", _DPL = "DocumentPageLocation", _DS = "DocumentSource", _EB = "ErrorBlock", _GA = "GuardrailAssessment", _GAI = "GetAsyncInvoke", _GAIR = "GetAsyncInvokeRequest", _GAIRe = "GetAsyncInvokeResponse", _GAL = "GuardrailAssessmentList", _GALM = "GuardrailAssessmentListMap", _GAM = "GuardrailAssessmentMap", _GARDSL = "GuardrailAutomatedReasoningDifferenceScenarioList", _GARF = "GuardrailAutomatedReasoningFinding", _GARFL = "GuardrailAutomatedReasoningFindingList", _GARIF = "GuardrailAutomatedReasoningImpossibleFinding", _GARIFu = "GuardrailAutomatedReasoningInvalidFinding", _GARITR = "GuardrailAutomatedReasoningInputTextReference", _GARITRL = "GuardrailAutomatedReasoningInputTextReferenceList", _GARLW = "GuardrailAutomatedReasoningLogicWarning", _GARNTF = "GuardrailAutomatedReasoningNoTranslationsFinding", _GARPA = "GuardrailAutomatedReasoningPolicyAssessment", _GARR = "GuardrailAutomatedReasoningRule", _GARRL = "GuardrailAutomatedReasoningRuleList", _GARS = "GuardrailAutomatedReasoningScenario", _GARSF = "GuardrailAutomatedReasoningSatisfiableFinding", _GARSL = "GuardrailAutomatedReasoningStatementList", _GARSLC = "GuardrailAutomatedReasoningStatementLogicContent", _GARSNLC = "GuardrailAutomatedReasoningStatementNaturalLanguageContent", _GARSu = "GuardrailAutomatedReasoningStatement", _GART = "GuardrailAutomatedReasoningTranslation", _GARTAF = "GuardrailAutomatedReasoningTranslationAmbiguousFinding", _GARTCF = "GuardrailAutomatedReasoningTooComplexFinding", _GARTL = "GuardrailAutomatedReasoningTranslationList", _GARTO = "GuardrailAutomatedReasoningTranslationOption", _GARTOL = "GuardrailAutomatedReasoningTranslationOptionList", _GARVF = "GuardrailAutomatedReasoningValidFinding", _GC = "GuardrailConfiguration", _GCB = "GuardrailContentBlock", _GCBL = "GuardrailContentBlockList", _GCCB = "GuardrailConverseContentBlock", _GCF = "GuardrailContentFilter", _GCFL = "GuardrailContentFilterList", _GCGF = "GuardrailContextualGroundingFilter", _GCGFu = "GuardrailContextualGroundingFilters", _GCGPA = "GuardrailContextualGroundingPolicyAssessment", _GCIB = "GuardrailConverseImageBlock", _GCIS = "GuardrailConverseImageSource", _GCPA = "GuardrailContentPolicyAssessment", _GCTB = "GuardrailConverseTextBlock", _GCW = "GuardrailCustomWord", _GCWL = "GuardrailCustomWordList", _GCu = "GuardrailCoverage", _GIB = "GuardrailImageBlock", _GIC = "GuardrailImageCoverage", _GIM = "GuardrailInvocationMetrics", _GIS = "GuardrailImageSource", _GMW = "GuardrailManagedWord", _GMWL = "GuardrailManagedWordList", _GOC = "GuardrailOutputContent", _GOCL = "GuardrailOutputContentList", _GPEF = "GuardrailPiiEntityFilter", _GPEFL = "GuardrailPiiEntityFilterList", _GRF = "GuardrailRegexFilter", _GRFL = "GuardrailRegexFilterList", _GSC = "GuardrailStreamConfiguration", _GSIPA = "GuardrailSensitiveInformationPolicyAssessment", _GT = "GuardrailTopic", _GTA = "GuardrailTraceAssessment", _GTB = "GuardrailTextBlock", _GTCC = "GuardrailTextCharactersCoverage", _GTL = "GuardrailTopicList", _GTPA = "GuardrailTopicPolicyAssessment", _GU = "GuardrailUsage", _GWPA = "GuardrailWordPolicyAssessment", _IB = "ImageBlock", _IBD = "ImageBlockDelta", _IBS = "ImageBlockStart", _IC = "InferenceConfiguration", _IM = "InvokeModel", _IMR = "InvokeModelRequest", _IMRn = "InvokeModelResponse", _IMTR = "InvokeModelTokensRequest", _IMWBS = "InvokeModelWithBidirectionalStream", _IMWBSI = "InvokeModelWithBidirectionalStreamInput", _IMWBSO = "InvokeModelWithBidirectionalStreamOutput", _IMWBSR = "InvokeModelWithBidirectionalStreamRequest", _IMWBSRn = "InvokeModelWithBidirectionalStreamResponse", _IMWRS = "InvokeModelWithResponseStream", _IMWRSR = "InvokeModelWithResponseStreamRequest", _IMWRSRn = "InvokeModelWithResponseStreamResponse", _IS = "ImageSource", _ISE = "InternalServerException", _JSD = "JsonSchemaDefinition", _LAI = "ListAsyncInvokes", _LAIR = "ListAsyncInvokesRequest", _LAIRi = "ListAsyncInvokesResponse", _M = "Message", _MEE = "ModelErrorException", _MIP = "ModelInputPayload", _MNRE = "ModelNotReadyException", _MSE = "MessageStartEvent", _MSEE = "ModelStreamErrorException", _MSEe = "MessageStopEvent", _MTE = "ModelTimeoutException", _Me = "Messages", _OC = "OutputConfig", _OF = "OutputFormat", _OFS = "OutputFormatStructure", _PB = "PartBody", _PC = "PerformanceConfiguration", _PP = "PayloadPart", _PRT = "PromptRouterTrace", _PVM = "PromptVariableMap", _PVV = "PromptVariableValues", _RCB = "ReasoningContentBlock", _RCBD = "ReasoningContentBlockDelta", _RM = "RequestMetadata", _RNFE = "ResourceNotFoundException", _RS = "ResponseStream", _RTB = "ReasoningTextBlock", _SAI = "StartAsyncInvoke", _SAIR = "StartAsyncInvokeRequest", _SAIRt = "StartAsyncInvokeResponse", _SCB = "SystemContentBlocks", _SCBy = "SystemContentBlock", _SL = "S3Location", _SQEE = "ServiceQuotaExceededException", _SRB = "SearchResultBlock", _SRCB = "SearchResultContentBlock", _SRCBe = "SearchResultContentBlocks", _SRL = "SearchResultLocation", _ST = "ServiceTier", _STC = "SpecificToolChoice", _STy = "SystemTool", _SUE = "ServiceUnavailableException", _T = "Tag", _TC = "ToolConfiguration", _TCo = "ToolChoice", _TE = "ThrottlingException", _TIS = "ToolInputSchema", _TL = "TagList", _TRB = "ToolResultBlock", _TRBD = "ToolResultBlocksDelta", _TRBDo = "ToolResultBlockDelta", _TRBS = "ToolResultBlockStart", _TRCB = "ToolResultContentBlocks", _TRCBo = "ToolResultContentBlock", _TS = "ToolSpecification", _TU = "TokenUsage", _TUB = "ToolUseBlock", _TUBD = "ToolUseBlockDelta", _TUBS = "ToolUseBlockStart", _To = "Tools", _Too = "Tool", _VB = "VideoBlock", _VE = "ValidationException", _VS = "VideoSource", _WL = "WebLocation", _XABA = "X-Amzn-Bedrock-Accept", _XABCT = "X-Amzn-Bedrock-Content-Type", _XABG = "X-Amzn-Bedrock-GuardrailIdentifier", _XABG_ = "X-Amzn-Bedrock-GuardrailVersion", _XABPL = "X-Amzn-Bedrock-PerformanceConfig-Latency", _XABST = "X-Amzn-Bedrock-Service-Tier", _XABT = "X-Amzn-Bedrock-Trace", _a = "action", _aGD = "appliedGuardrailDetails", _aIS = "asyncInvokeSummaries", _aMRF = "additionalModelRequestFields", _aMRFP = "additionalModelResponseFieldPaths", _aMRFd = "additionalModelResponseFields", _aR = "actionReason", _aRP = "automatedReasoningPolicy", _aRPU = "automatedReasoningPolicyUnits", _aRPu = "automatedReasoningPolicies", _ac = "accept", _an = "any", _as = "assessments", _au = "audio", _aut = "auto", _b = "bytes", _bO = "bucketOwner", _bo = "body", _c = "client", _cBD = "contentBlockDelta", _cBI = "contentBlockIndex", _cBS = "contentBlockStart", _cBSo = "contentBlockStop", _cC = "citationsContent", _cD = "cacheDetails", _cFS = "claimsFalseScenario", _cGP = "contextualGroundingPolicy", _cGPU = "contextualGroundingPolicyUnits", _cP = "contentPolicy", _cPIU = "contentPolicyImageUnits", _cPU = "contentPolicyUnits", _cPa = "cachePoint", _cR = "contradictingRules", _cRIT = "cacheReadInputTokens", _cRT = "clientRequestToken", _cT = "contentType", _cTS = "claimsTrueScenario", _cW = "customWords", _cWIT = "cacheWriteInputTokens", _ch = "chunk", _ci = "citations", _cit = "citation", _cl = "claims", _co = "content", _con = "context", _conf = "confidence", _conv = "converse", _d = "delta", _dC = "documentChar", _dCo = "documentChunk", _dI = "documentIndex", _dP = "documentPage", _dS = "differenceScenarios", _de = "detected", _des = "description", _do = "domain", _doc = "document", _e = "error", _eT = "endTime", _en = "enabled", _end = "end", _f = "format", _fM = "failureMessage", _fS = "filterStrength", _fi = "findings", _fil = "filters", _g = "guardrail", _gA = "guardrailArn", _gC = "guardrailCoverage", _gCu = "guardrailConfig", _gCua = "guardContent", _gI = "guardrailId", _gIu = "guardrailIdentifier", _gO = "guardrailOrigin", _gOu = "guardrailOwnership", _gPL = "guardrailProcessingLatency", _gV = "guardrailVersion", _gu = "guarded", _h = "http", _hE = "httpError", _hH = "httpHeader", _hQ = "httpQuery", _i = "input", _iA = "invocationArn", _iAn = "inputAssessment", _iC = "inferenceConfig", _iM = "invocationMetrics", _iMI = "invokedModelId", _iMn = "invokeModel", _iS = "inputSchema", _iSE = "internalServerException", _iT = "inputTokens", _id = "identifier", _im = "images", _ima = "image", _imp = "impossible", _in = "invalid", _j = "json", _jS = "jsonSchema", _k = "key", _kKI = "kmsKeyId", _l = "location", _lM = "latencyMs", _lMT = "lastModifiedTime", _lW = "logicWarning", _la = "latency", _lo = "logic", _m = "message", _mA = "modelArn", _mI = "modelId", _mIo = "modelInput", _mO = "modelOutput", _mR = "maxResults", _mS = "messageStart", _mSEE = "modelStreamErrorException", _mSe = "messageStop", _mT = "maxTokens", _mTE = "modelTimeoutException", _mWL = "managedWordLists", _ma = "match", _me = "messages", _met = "metrics", _meta = "metadata", _n = "name", _nL = "naturalLanguage", _nT = "nextToken", _nTo = "noTranslations", _o = "outputs", _oA = "outputAssessments", _oC = "outputConfig", _oDC = "outputDataConfig", _oM = "originalMessage", _oS = "outputScope", _oSC = "originalStatusCode", _oT = "outputTokens", _op = "options", _ou = "output", _p = "premises", _pC = "performanceConfig", _pCL = "performanceConfigLatency", _pE = "piiEntities", _pR = "promptRouter", _pV = "promptVariables", _pVA = "policyVersionArn", _q = "qualifiers", _r = "regex", _rC = "reasoningContent", _rCe = "redactedContent", _rM = "requestMetadata", _rN = "resourceName", _rT = "reasoningText", _re = "regexes", _ro = "role", _s = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime", _sB = "sortBy", _sC = "sourceContent", _sE = "statusEquals", _sIP = "sensitiveInformationPolicy", _sIPFU = "sensitiveInformationPolicyFreeUnits", _sIPU = "sensitiveInformationPolicyUnits", _sL = "s3Location", _sO = "sortOrder", _sODC = "s3OutputDataConfig", _sPM = "streamProcessingMode", _sR = "stopReason", _sRI = "searchResultIndex", _sRL = "searchResultLocation", _sRe = "searchResult", _sRu = "supportingRules", _sS = "stopSequences", _sT = "submitTime", _sTA = "submitTimeAfter", _sTB = "submitTimeBefore", _sTe = "serviceTier", _sTy = "systemTool", _sU = "s3Uri", _sUE = "serviceUnavailableException", _sa = "satisfiable", _sc = "score", _sch = "schema", _se = "server", _si = "signature", _so = "source", _st = "status", _sta = "start", _stat = "statements", _str = "stream", _stre = "streaming", _stri = "strict", _stru = "structure", _sy = "system", _t = "ttl", _tA = "translationAmbiguous", _tC = "toolConfig", _tCe = "textCharacters", _tCo = "toolChoice", _tCoo = "tooComplex", _tE = "throttlingException", _tF = "textFormat", _tP = "topicPolicy", _tPU = "topicPolicyUnits", _tPo = "topP", _tR = "toolResult", _tS = "toolSpec", _tT = "totalTokens", _tU = "toolUse", _tUI = "toolUseId", _ta = "tags", _te = "text", _tem = "temperature", _th = "threshold", _ti = "title", _to = "total", _too = "tools", _tool = "tool", _top = "topics", _tr = "trace", _tra = "translation", _tran = "translations", _ty = "type", _u = "usage", _uC = "untranslatedClaims", _uP = "untranslatedPremises", _ur = "uri", _url = "url", _v = "value", _vE = "validationException", _va = "valid", _vi = "video", _w = "web", _wP = "wordPolicy", _wPU = "wordPolicyUnits", n0 = "com.amazonaws.bedrockruntime", _s_registry, BedrockRuntimeServiceException$, n0_registry, AccessDeniedException$, ConflictException$, InternalServerException$, ModelErrorException$, ModelNotReadyException$, ModelStreamErrorException$, ModelTimeoutException$, ResourceNotFoundException$, ServiceQuotaExceededException$, ServiceUnavailableException$, ThrottlingException$, ValidationException$, errorTypeRegistries, AsyncInvokeMessage, Body, GuardrailAutomatedReasoningStatementLogicContent, GuardrailAutomatedReasoningStatementNaturalLanguageContent, ModelInputPayload, PartBody, AnyToolChoice$, AppliedGuardrailDetails$, ApplyGuardrailRequest$, ApplyGuardrailResponse$, AsyncInvokeS3OutputDataConfig$, AsyncInvokeSummary$, AudioBlock$, AutoToolChoice$, BidirectionalInputPayloadPart$, BidirectionalOutputPayloadPart$, CacheDetail$, CachePointBlock$, Citation$, CitationsConfig$, CitationsContentBlock$, CitationsDelta$, CitationSourceContentDelta$, ContentBlockDeltaEvent$, ContentBlockStartEvent$, ContentBlockStopEvent$, ConverseMetrics$, ConverseRequest$, ConverseResponse$, ConverseStreamMetadataEvent$, ConverseStreamMetrics$, ConverseStreamRequest$, ConverseStreamResponse$, ConverseStreamTrace$, ConverseTokensRequest$, ConverseTrace$, CountTokensRequest$, CountTokensResponse$, DocumentBlock$, DocumentCharLocation$, DocumentChunkLocation$, DocumentPageLocation$, ErrorBlock$, GetAsyncInvokeRequest$, GetAsyncInvokeResponse$, GuardrailAssessment$, GuardrailAutomatedReasoningImpossibleFinding$, GuardrailAutomatedReasoningInputTextReference$, GuardrailAutomatedReasoningInvalidFinding$, GuardrailAutomatedReasoningLogicWarning$, GuardrailAutomatedReasoningNoTranslationsFinding$, GuardrailAutomatedReasoningPolicyAssessment$, GuardrailAutomatedReasoningRule$, GuardrailAutomatedReasoningSatisfiableFinding$, GuardrailAutomatedReasoningScenario$, GuardrailAutomatedReasoningStatement$, GuardrailAutomatedReasoningTooComplexFinding$, GuardrailAutomatedReasoningTranslation$, GuardrailAutomatedReasoningTranslationAmbiguousFinding$, GuardrailAutomatedReasoningTranslationOption$, GuardrailAutomatedReasoningValidFinding$, GuardrailConfiguration$, GuardrailContentFilter$, GuardrailContentPolicyAssessment$, GuardrailContextualGroundingFilter$, GuardrailContextualGroundingPolicyAssessment$, GuardrailConverseImageBlock$, GuardrailConverseTextBlock$, GuardrailCoverage$, GuardrailCustomWord$, GuardrailImageBlock$, GuardrailImageCoverage$, GuardrailInvocationMetrics$, GuardrailManagedWord$, GuardrailOutputContent$, GuardrailPiiEntityFilter$, GuardrailRegexFilter$, GuardrailSensitiveInformationPolicyAssessment$, GuardrailStreamConfiguration$, GuardrailTextBlock$, GuardrailTextCharactersCoverage$, GuardrailTopic$, GuardrailTopicPolicyAssessment$, GuardrailTraceAssessment$, GuardrailUsage$, GuardrailWordPolicyAssessment$, ImageBlock$, ImageBlockDelta$, ImageBlockStart$, InferenceConfiguration$, InvokeModelRequest$, InvokeModelResponse$, InvokeModelTokensRequest$, InvokeModelWithBidirectionalStreamRequest$, InvokeModelWithBidirectionalStreamResponse$, InvokeModelWithResponseStreamRequest$, InvokeModelWithResponseStreamResponse$, JsonSchemaDefinition$, ListAsyncInvokesRequest$, ListAsyncInvokesResponse$, Message$, MessageStartEvent$, MessageStopEvent$, OutputConfig$, OutputFormat$, PayloadPart$, PerformanceConfiguration$, PromptRouterTrace$, ReasoningTextBlock$, S3Location$, SearchResultBlock$, SearchResultContentBlock$, SearchResultLocation$, ServiceTier$, SpecificToolChoice$, StartAsyncInvokeRequest$, StartAsyncInvokeResponse$, SystemTool$, Tag$, TokenUsage$, ToolConfiguration$, ToolResultBlock$, ToolResultBlockStart$, ToolSpecification$, ToolUseBlock$, ToolUseBlockDelta$, ToolUseBlockStart$, VideoBlock$, WebLocation$, AdditionalModelResponseFieldPaths, AsyncInvokeSummaries, CacheDetailsList, CitationGeneratedContentList, Citations, CitationSourceContentList, CitationSourceContentListDelta, ContentBlocks, DocumentContentBlocks, GuardrailAssessmentList, GuardrailAutomatedReasoningDifferenceScenarioList, GuardrailAutomatedReasoningFindingList, GuardrailAutomatedReasoningInputTextReferenceList, GuardrailAutomatedReasoningRuleList, GuardrailAutomatedReasoningStatementList, GuardrailAutomatedReasoningTranslationList, GuardrailAutomatedReasoningTranslationOptionList, GuardrailContentBlockList, GuardrailContentFilterList, GuardrailContentQualifierList, GuardrailContextualGroundingFilters, GuardrailConverseContentQualifierList, GuardrailCustomWordList, GuardrailManagedWordList, GuardrailOriginList, GuardrailOutputContentList, GuardrailPiiEntityFilterList, GuardrailRegexFilterList, GuardrailTopicList, Messages, ModelOutputs, NonEmptyStringList, SearchResultContentBlocks, SystemContentBlocks, TagList, ToolResultBlocksDelta, ToolResultContentBlocks, Tools, GuardrailAssessmentListMap, GuardrailAssessmentMap, PromptVariableMap, RequestMetadata, AsyncInvokeOutputDataConfig$, AudioSource$, CitationGeneratedContent$, CitationLocation$, CitationSourceContent$, ContentBlock$, ContentBlockDelta$, ContentBlockStart$, ConverseOutput$, ConverseStreamOutput$, CountTokensInput$, DocumentContentBlock$, DocumentSource$, GuardrailAutomatedReasoningFinding$, GuardrailContentBlock$, GuardrailConverseContentBlock$, GuardrailConverseImageSource$, GuardrailImageSource$, ImageSource$, InvokeModelWithBidirectionalStreamInput$, InvokeModelWithBidirectionalStreamOutput$, OutputFormatStructure$, PromptVariableValues$, ReasoningContentBlock$, ReasoningContentBlockDelta$, ResponseStream$, SystemContentBlock$, Tool$, ToolChoice$, ToolInputSchema$, ToolResultBlockDelta$, ToolResultContentBlock$, VideoSource$, ApplyGuardrail$, Converse$, ConverseStream$, CountTokens$, GetAsyncInvoke$, InvokeModel$, InvokeModelWithBidirectionalStream$, InvokeModelWithResponseStream$, ListAsyncInvokes$, StartAsyncInvoke$;
var init_schemas_0 = __esm(() => {
  init_BedrockRuntimeServiceException();
  init_errors();
  import_schema = __toESM(require_schema(), 1);
  _s_registry = import_schema.TypeRegistry.for(_s);
  BedrockRuntimeServiceException$ = [-3, _s, "BedrockRuntimeServiceException", 0, [], []];
  _s_registry.registerError(BedrockRuntimeServiceException$, BedrockRuntimeServiceException);
  n0_registry = import_schema.TypeRegistry.for(n0);
  AccessDeniedException$ = [
    -3,
    n0,
    _ADE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0]
  ];
  n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
  ConflictException$ = [
    -3,
    n0,
    _CE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ConflictException$, ConflictException);
  InternalServerException$ = [
    -3,
    n0,
    _ISE,
    { [_e]: _se, [_hE]: 500 },
    [_m],
    [0]
  ];
  n0_registry.registerError(InternalServerException$, InternalServerException);
  ModelErrorException$ = [
    -3,
    n0,
    _MEE,
    { [_e]: _c, [_hE]: 424 },
    [_m, _oSC, _rN],
    [0, 1, 0]
  ];
  n0_registry.registerError(ModelErrorException$, ModelErrorException);
  ModelNotReadyException$ = [
    -3,
    n0,
    _MNRE,
    { [_e]: _c, [_hE]: 429 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ModelNotReadyException$, ModelNotReadyException);
  ModelStreamErrorException$ = [
    -3,
    n0,
    _MSEE,
    { [_e]: _c, [_hE]: 424 },
    [_m, _oSC, _oM],
    [0, 1, 0]
  ];
  n0_registry.registerError(ModelStreamErrorException$, ModelStreamErrorException);
  ModelTimeoutException$ = [
    -3,
    n0,
    _MTE,
    { [_e]: _c, [_hE]: 408 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ModelTimeoutException$, ModelTimeoutException);
  ResourceNotFoundException$ = [
    -3,
    n0,
    _RNFE,
    { [_e]: _c, [_hE]: 404 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
  ServiceQuotaExceededException$ = [
    -3,
    n0,
    _SQEE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
  ServiceUnavailableException$ = [
    -3,
    n0,
    _SUE,
    { [_e]: _se, [_hE]: 503 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ServiceUnavailableException$, ServiceUnavailableException);
  ThrottlingException$ = [
    -3,
    n0,
    _TE,
    { [_e]: _c, [_hE]: 429 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ThrottlingException$, ThrottlingException);
  ValidationException$ = [
    -3,
    n0,
    _VE,
    { [_e]: _c, [_hE]: 400 },
    [_m],
    [0]
  ];
  n0_registry.registerError(ValidationException$, ValidationException);
  errorTypeRegistries = [
    _s_registry,
    n0_registry
  ];
  AsyncInvokeMessage = [0, n0, _AIM, 8, 0];
  Body = [0, n0, _B, 8, 21];
  GuardrailAutomatedReasoningStatementLogicContent = [0, n0, _GARSLC, 8, 0];
  GuardrailAutomatedReasoningStatementNaturalLanguageContent = [0, n0, _GARSNLC, 8, 0];
  ModelInputPayload = [0, n0, _MIP, 8, 15];
  PartBody = [0, n0, _PB, 8, 21];
  AnyToolChoice$ = [
    3,
    n0,
    _ATC,
    0,
    [],
    []
  ];
  AppliedGuardrailDetails$ = [
    3,
    n0,
    _AGD,
    0,
    [_gI, _gV, _gA, _gO, _gOu],
    [0, 0, 0, 64 | 0, 0]
  ];
  ApplyGuardrailRequest$ = [
    3,
    n0,
    _AGR,
    0,
    [_gIu, _gV, _so, _co, _oS],
    [[0, 1], [0, 1], 0, [() => GuardrailContentBlockList, 0], 0],
    4
  ];
  ApplyGuardrailResponse$ = [
    3,
    n0,
    _AGRp,
    0,
    [_u, _a, _o, _as, _aR, _gC],
    [() => GuardrailUsage$, 0, () => GuardrailOutputContentList, [() => GuardrailAssessmentList, 0], 0, () => GuardrailCoverage$],
    4
  ];
  AsyncInvokeS3OutputDataConfig$ = [
    3,
    n0,
    _AISODC,
    0,
    [_sU, _kKI, _bO],
    [0, 0, 0],
    1
  ];
  AsyncInvokeSummary$ = [
    3,
    n0,
    _AIS,
    0,
    [_iA, _mA, _sT, _oDC, _cRT, _st, _fM, _lMT, _eT],
    [0, 0, 5, () => AsyncInvokeOutputDataConfig$, 0, 0, [() => AsyncInvokeMessage, 0], 5, 5],
    4
  ];
  AudioBlock$ = [
    3,
    n0,
    _AB,
    0,
    [_f, _so, _e],
    [0, [() => AudioSource$, 0], [() => ErrorBlock$, 0]],
    2
  ];
  AutoToolChoice$ = [
    3,
    n0,
    _ATCu,
    0,
    [],
    []
  ];
  BidirectionalInputPayloadPart$ = [
    3,
    n0,
    _BIPP,
    8,
    [_b],
    [[() => PartBody, 0]]
  ];
  BidirectionalOutputPayloadPart$ = [
    3,
    n0,
    _BOPP,
    8,
    [_b],
    [[() => PartBody, 0]]
  ];
  CacheDetail$ = [
    3,
    n0,
    _CD,
    0,
    [_t, _iT],
    [0, 1],
    2
  ];
  CachePointBlock$ = [
    3,
    n0,
    _CPB,
    0,
    [_ty, _t],
    [0, 0],
    1
  ];
  Citation$ = [
    3,
    n0,
    _C,
    0,
    [_ti, _so, _sC, _l],
    [0, 0, () => CitationSourceContentList, () => CitationLocation$]
  ];
  CitationsConfig$ = [
    3,
    n0,
    _CC,
    0,
    [_en],
    [2],
    1
  ];
  CitationsContentBlock$ = [
    3,
    n0,
    _CCB,
    0,
    [_co, _ci],
    [() => CitationGeneratedContentList, () => Citations]
  ];
  CitationsDelta$ = [
    3,
    n0,
    _CDi,
    0,
    [_ti, _so, _sC, _l],
    [0, 0, () => CitationSourceContentListDelta, () => CitationLocation$]
  ];
  CitationSourceContentDelta$ = [
    3,
    n0,
    _CSCD,
    0,
    [_te],
    [0]
  ];
  ContentBlockDeltaEvent$ = [
    3,
    n0,
    _CBDE,
    0,
    [_d, _cBI],
    [[() => ContentBlockDelta$, 0], 1],
    2
  ];
  ContentBlockStartEvent$ = [
    3,
    n0,
    _CBSE,
    0,
    [_sta, _cBI],
    [() => ContentBlockStart$, 1],
    2
  ];
  ContentBlockStopEvent$ = [
    3,
    n0,
    _CBSEo,
    0,
    [_cBI],
    [1],
    1
  ];
  ConverseMetrics$ = [
    3,
    n0,
    _CM,
    0,
    [_lM],
    [1],
    1
  ];
  ConverseRequest$ = [
    3,
    n0,
    _CR,
    0,
    [_mI, _me, _sy, _iC, _tC, _gCu, _aMRF, _pV, _aMRFP, _rM, _pC, _sTe, _oC],
    [[0, 1], [() => Messages, 0], [() => SystemContentBlocks, 0], () => InferenceConfiguration$, () => ToolConfiguration$, () => GuardrailConfiguration$, 15, [() => PromptVariableMap, 0], 64 | 0, [() => RequestMetadata, 0], () => PerformanceConfiguration$, () => ServiceTier$, [() => OutputConfig$, 0]],
    1
  ];
  ConverseResponse$ = [
    3,
    n0,
    _CRo,
    0,
    [_ou, _sR, _u, _met, _aMRFd, _tr, _pC, _sTe],
    [[() => ConverseOutput$, 0], 0, () => TokenUsage$, () => ConverseMetrics$, 15, [() => ConverseTrace$, 0], () => PerformanceConfiguration$, () => ServiceTier$],
    4
  ];
  ConverseStreamMetadataEvent$ = [
    3,
    n0,
    _CSME,
    0,
    [_u, _met, _tr, _pC, _sTe],
    [() => TokenUsage$, () => ConverseStreamMetrics$, [() => ConverseStreamTrace$, 0], () => PerformanceConfiguration$, () => ServiceTier$],
    2
  ];
  ConverseStreamMetrics$ = [
    3,
    n0,
    _CSM,
    0,
    [_lM],
    [1],
    1
  ];
  ConverseStreamRequest$ = [
    3,
    n0,
    _CSR,
    0,
    [_mI, _me, _sy, _iC, _tC, _gCu, _aMRF, _pV, _aMRFP, _rM, _pC, _sTe, _oC],
    [[0, 1], [() => Messages, 0], [() => SystemContentBlocks, 0], () => InferenceConfiguration$, () => ToolConfiguration$, () => GuardrailStreamConfiguration$, 15, [() => PromptVariableMap, 0], 64 | 0, [() => RequestMetadata, 0], () => PerformanceConfiguration$, () => ServiceTier$, [() => OutputConfig$, 0]],
    1
  ];
  ConverseStreamResponse$ = [
    3,
    n0,
    _CSRo,
    0,
    [_str],
    [[() => ConverseStreamOutput$, 16]]
  ];
  ConverseStreamTrace$ = [
    3,
    n0,
    _CST,
    0,
    [_g, _pR],
    [[() => GuardrailTraceAssessment$, 0], () => PromptRouterTrace$]
  ];
  ConverseTokensRequest$ = [
    3,
    n0,
    _CTR,
    0,
    [_me, _sy, _tC, _aMRF],
    [[() => Messages, 0], [() => SystemContentBlocks, 0], () => ToolConfiguration$, 15]
  ];
  ConverseTrace$ = [
    3,
    n0,
    _CT,
    0,
    [_g, _pR],
    [[() => GuardrailTraceAssessment$, 0], () => PromptRouterTrace$]
  ];
  CountTokensRequest$ = [
    3,
    n0,
    _CTRo,
    0,
    [_mI, _i],
    [[0, 1], [() => CountTokensInput$, 0]],
    2
  ];
  CountTokensResponse$ = [
    3,
    n0,
    _CTRou,
    0,
    [_iT],
    [1],
    1
  ];
  DocumentBlock$ = [
    3,
    n0,
    _DB,
    0,
    [_n, _so, _f, _con, _ci],
    [0, () => DocumentSource$, 0, 0, () => CitationsConfig$],
    2
  ];
  DocumentCharLocation$ = [
    3,
    n0,
    _DCL,
    0,
    [_dI, _sta, _end],
    [1, 1, 1]
  ];
  DocumentChunkLocation$ = [
    3,
    n0,
    _DCLo,
    0,
    [_dI, _sta, _end],
    [1, 1, 1]
  ];
  DocumentPageLocation$ = [
    3,
    n0,
    _DPL,
    0,
    [_dI, _sta, _end],
    [1, 1, 1]
  ];
  ErrorBlock$ = [
    3,
    n0,
    _EB,
    8,
    [_m],
    [0]
  ];
  GetAsyncInvokeRequest$ = [
    3,
    n0,
    _GAIR,
    0,
    [_iA],
    [[0, 1]],
    1
  ];
  GetAsyncInvokeResponse$ = [
    3,
    n0,
    _GAIRe,
    0,
    [_iA, _mA, _st, _sT, _oDC, _cRT, _fM, _lMT, _eT],
    [0, 0, 0, 5, () => AsyncInvokeOutputDataConfig$, 0, [() => AsyncInvokeMessage, 0], 5, 5],
    5
  ];
  GuardrailAssessment$ = [
    3,
    n0,
    _GA,
    0,
    [_tP, _cP, _wP, _sIP, _cGP, _aRP, _iM, _aGD],
    [() => GuardrailTopicPolicyAssessment$, () => GuardrailContentPolicyAssessment$, () => GuardrailWordPolicyAssessment$, () => GuardrailSensitiveInformationPolicyAssessment$, () => GuardrailContextualGroundingPolicyAssessment$, [() => GuardrailAutomatedReasoningPolicyAssessment$, 0], () => GuardrailInvocationMetrics$, () => AppliedGuardrailDetails$]
  ];
  GuardrailAutomatedReasoningImpossibleFinding$ = [
    3,
    n0,
    _GARIF,
    0,
    [_tra, _cR, _lW],
    [[() => GuardrailAutomatedReasoningTranslation$, 0], () => GuardrailAutomatedReasoningRuleList, [() => GuardrailAutomatedReasoningLogicWarning$, 0]]
  ];
  GuardrailAutomatedReasoningInputTextReference$ = [
    3,
    n0,
    _GARITR,
    0,
    [_te],
    [[() => GuardrailAutomatedReasoningStatementNaturalLanguageContent, 0]]
  ];
  GuardrailAutomatedReasoningInvalidFinding$ = [
    3,
    n0,
    _GARIFu,
    0,
    [_tra, _cR, _lW],
    [[() => GuardrailAutomatedReasoningTranslation$, 0], () => GuardrailAutomatedReasoningRuleList, [() => GuardrailAutomatedReasoningLogicWarning$, 0]]
  ];
  GuardrailAutomatedReasoningLogicWarning$ = [
    3,
    n0,
    _GARLW,
    0,
    [_ty, _p, _cl],
    [0, [() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningStatementList, 0]]
  ];
  GuardrailAutomatedReasoningNoTranslationsFinding$ = [
    3,
    n0,
    _GARNTF,
    0,
    [],
    []
  ];
  GuardrailAutomatedReasoningPolicyAssessment$ = [
    3,
    n0,
    _GARPA,
    0,
    [_fi],
    [[() => GuardrailAutomatedReasoningFindingList, 0]]
  ];
  GuardrailAutomatedReasoningRule$ = [
    3,
    n0,
    _GARR,
    0,
    [_id, _pVA],
    [0, 0]
  ];
  GuardrailAutomatedReasoningSatisfiableFinding$ = [
    3,
    n0,
    _GARSF,
    0,
    [_tra, _cTS, _cFS, _lW],
    [[() => GuardrailAutomatedReasoningTranslation$, 0], [() => GuardrailAutomatedReasoningScenario$, 0], [() => GuardrailAutomatedReasoningScenario$, 0], [() => GuardrailAutomatedReasoningLogicWarning$, 0]]
  ];
  GuardrailAutomatedReasoningScenario$ = [
    3,
    n0,
    _GARS,
    0,
    [_stat],
    [[() => GuardrailAutomatedReasoningStatementList, 0]]
  ];
  GuardrailAutomatedReasoningStatement$ = [
    3,
    n0,
    _GARSu,
    0,
    [_lo, _nL],
    [[() => GuardrailAutomatedReasoningStatementLogicContent, 0], [() => GuardrailAutomatedReasoningStatementNaturalLanguageContent, 0]]
  ];
  GuardrailAutomatedReasoningTooComplexFinding$ = [
    3,
    n0,
    _GARTCF,
    0,
    [],
    []
  ];
  GuardrailAutomatedReasoningTranslation$ = [
    3,
    n0,
    _GART,
    0,
    [_p, _cl, _uP, _uC, _conf],
    [[() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningInputTextReferenceList, 0], [() => GuardrailAutomatedReasoningInputTextReferenceList, 0], 1]
  ];
  GuardrailAutomatedReasoningTranslationAmbiguousFinding$ = [
    3,
    n0,
    _GARTAF,
    0,
    [_op, _dS],
    [[() => GuardrailAutomatedReasoningTranslationOptionList, 0], [() => GuardrailAutomatedReasoningDifferenceScenarioList, 0]]
  ];
  GuardrailAutomatedReasoningTranslationOption$ = [
    3,
    n0,
    _GARTO,
    0,
    [_tran],
    [[() => GuardrailAutomatedReasoningTranslationList, 0]]
  ];
  GuardrailAutomatedReasoningValidFinding$ = [
    3,
    n0,
    _GARVF,
    0,
    [_tra, _cTS, _sRu, _lW],
    [[() => GuardrailAutomatedReasoningTranslation$, 0], [() => GuardrailAutomatedReasoningScenario$, 0], () => GuardrailAutomatedReasoningRuleList, [() => GuardrailAutomatedReasoningLogicWarning$, 0]]
  ];
  GuardrailConfiguration$ = [
    3,
    n0,
    _GC,
    0,
    [_gIu, _gV, _tr],
    [0, 0, 0]
  ];
  GuardrailContentFilter$ = [
    3,
    n0,
    _GCF,
    0,
    [_ty, _conf, _a, _fS, _de],
    [0, 0, 0, 0, 2],
    3
  ];
  GuardrailContentPolicyAssessment$ = [
    3,
    n0,
    _GCPA,
    0,
    [_fil],
    [() => GuardrailContentFilterList],
    1
  ];
  GuardrailContextualGroundingFilter$ = [
    3,
    n0,
    _GCGF,
    0,
    [_ty, _th, _sc, _a, _de],
    [0, 1, 1, 0, 2],
    4
  ];
  GuardrailContextualGroundingPolicyAssessment$ = [
    3,
    n0,
    _GCGPA,
    0,
    [_fil],
    [() => GuardrailContextualGroundingFilters]
  ];
  GuardrailConverseImageBlock$ = [
    3,
    n0,
    _GCIB,
    8,
    [_f, _so],
    [0, [() => GuardrailConverseImageSource$, 0]],
    2
  ];
  GuardrailConverseTextBlock$ = [
    3,
    n0,
    _GCTB,
    0,
    [_te, _q],
    [0, 64 | 0],
    1
  ];
  GuardrailCoverage$ = [
    3,
    n0,
    _GCu,
    0,
    [_tCe, _im],
    [() => GuardrailTextCharactersCoverage$, () => GuardrailImageCoverage$]
  ];
  GuardrailCustomWord$ = [
    3,
    n0,
    _GCW,
    0,
    [_ma, _a, _de],
    [0, 0, 2],
    2
  ];
  GuardrailImageBlock$ = [
    3,
    n0,
    _GIB,
    8,
    [_f, _so],
    [0, [() => GuardrailImageSource$, 0]],
    2
  ];
  GuardrailImageCoverage$ = [
    3,
    n0,
    _GIC,
    0,
    [_gu, _to],
    [1, 1]
  ];
  GuardrailInvocationMetrics$ = [
    3,
    n0,
    _GIM,
    0,
    [_gPL, _u, _gC],
    [1, () => GuardrailUsage$, () => GuardrailCoverage$]
  ];
  GuardrailManagedWord$ = [
    3,
    n0,
    _GMW,
    0,
    [_ma, _ty, _a, _de],
    [0, 0, 0, 2],
    3
  ];
  GuardrailOutputContent$ = [
    3,
    n0,
    _GOC,
    0,
    [_te],
    [0]
  ];
  GuardrailPiiEntityFilter$ = [
    3,
    n0,
    _GPEF,
    0,
    [_ma, _ty, _a, _de],
    [0, 0, 0, 2],
    3
  ];
  GuardrailRegexFilter$ = [
    3,
    n0,
    _GRF,
    0,
    [_a, _n, _ma, _r, _de],
    [0, 0, 0, 0, 2],
    1
  ];
  GuardrailSensitiveInformationPolicyAssessment$ = [
    3,
    n0,
    _GSIPA,
    0,
    [_pE, _re],
    [() => GuardrailPiiEntityFilterList, () => GuardrailRegexFilterList],
    2
  ];
  GuardrailStreamConfiguration$ = [
    3,
    n0,
    _GSC,
    0,
    [_gIu, _gV, _tr, _sPM],
    [0, 0, 0, 0]
  ];
  GuardrailTextBlock$ = [
    3,
    n0,
    _GTB,
    0,
    [_te, _q],
    [0, 64 | 0],
    1
  ];
  GuardrailTextCharactersCoverage$ = [
    3,
    n0,
    _GTCC,
    0,
    [_gu, _to],
    [1, 1]
  ];
  GuardrailTopic$ = [
    3,
    n0,
    _GT,
    0,
    [_n, _ty, _a, _de],
    [0, 0, 0, 2],
    3
  ];
  GuardrailTopicPolicyAssessment$ = [
    3,
    n0,
    _GTPA,
    0,
    [_top],
    [() => GuardrailTopicList],
    1
  ];
  GuardrailTraceAssessment$ = [
    3,
    n0,
    _GTA,
    0,
    [_mO, _iAn, _oA, _aR],
    [64 | 0, [() => GuardrailAssessmentMap, 0], [() => GuardrailAssessmentListMap, 0], 0]
  ];
  GuardrailUsage$ = [
    3,
    n0,
    _GU,
    0,
    [_tPU, _cPU, _wPU, _sIPU, _sIPFU, _cGPU, _cPIU, _aRPU, _aRPu],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    6
  ];
  GuardrailWordPolicyAssessment$ = [
    3,
    n0,
    _GWPA,
    0,
    [_cW, _mWL],
    [() => GuardrailCustomWordList, () => GuardrailManagedWordList],
    2
  ];
  ImageBlock$ = [
    3,
    n0,
    _IB,
    0,
    [_f, _so, _e],
    [0, [() => ImageSource$, 0], [() => ErrorBlock$, 0]],
    2
  ];
  ImageBlockDelta$ = [
    3,
    n0,
    _IBD,
    0,
    [_so, _e],
    [[() => ImageSource$, 0], [() => ErrorBlock$, 0]]
  ];
  ImageBlockStart$ = [
    3,
    n0,
    _IBS,
    0,
    [_f],
    [0],
    1
  ];
  InferenceConfiguration$ = [
    3,
    n0,
    _IC,
    0,
    [_mT, _tem, _tPo, _sS],
    [1, 1, 1, 64 | 0]
  ];
  InvokeModelRequest$ = [
    3,
    n0,
    _IMR,
    0,
    [_mI, _bo, _cT, _ac, _tr, _gIu, _gV, _pCL, _sTe],
    [[0, 1], [() => Body, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _A }], [0, { [_hH]: _XABT }], [0, { [_hH]: _XABG }], [0, { [_hH]: _XABG_ }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
    1
  ];
  InvokeModelResponse$ = [
    3,
    n0,
    _IMRn,
    0,
    [_bo, _cT, _pCL, _sTe],
    [[() => Body, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
    2
  ];
  InvokeModelTokensRequest$ = [
    3,
    n0,
    _IMTR,
    0,
    [_bo],
    [[() => Body, 0]],
    1
  ];
  InvokeModelWithBidirectionalStreamRequest$ = [
    3,
    n0,
    _IMWBSR,
    0,
    [_mI, _bo],
    [[0, 1], [() => InvokeModelWithBidirectionalStreamInput$, 16]],
    2
  ];
  InvokeModelWithBidirectionalStreamResponse$ = [
    3,
    n0,
    _IMWBSRn,
    0,
    [_bo],
    [[() => InvokeModelWithBidirectionalStreamOutput$, 16]],
    1
  ];
  InvokeModelWithResponseStreamRequest$ = [
    3,
    n0,
    _IMWRSR,
    0,
    [_mI, _bo, _cT, _ac, _tr, _gIu, _gV, _pCL, _sTe],
    [[0, 1], [() => Body, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _XABA }], [0, { [_hH]: _XABT }], [0, { [_hH]: _XABG }], [0, { [_hH]: _XABG_ }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
    1
  ];
  InvokeModelWithResponseStreamResponse$ = [
    3,
    n0,
    _IMWRSRn,
    0,
    [_bo, _cT, _pCL, _sTe],
    [[() => ResponseStream$, 16], [0, { [_hH]: _XABCT }], [0, { [_hH]: _XABPL }], [0, { [_hH]: _XABST }]],
    2
  ];
  JsonSchemaDefinition$ = [
    3,
    n0,
    _JSD,
    0,
    [_sch, _n, _des],
    [0, 0, 0],
    1
  ];
  ListAsyncInvokesRequest$ = [
    3,
    n0,
    _LAIR,
    0,
    [_sTA, _sTB, _sE, _mR, _nT, _sB, _sO],
    [[5, { [_hQ]: _sTA }], [5, { [_hQ]: _sTB }], [0, { [_hQ]: _sE }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], [0, { [_hQ]: _sB }], [0, { [_hQ]: _sO }]]
  ];
  ListAsyncInvokesResponse$ = [
    3,
    n0,
    _LAIRi,
    0,
    [_nT, _aIS],
    [0, [() => AsyncInvokeSummaries, 0]]
  ];
  Message$ = [
    3,
    n0,
    _M,
    0,
    [_ro, _co],
    [0, [() => ContentBlocks, 0]],
    2
  ];
  MessageStartEvent$ = [
    3,
    n0,
    _MSE,
    0,
    [_ro],
    [0],
    1
  ];
  MessageStopEvent$ = [
    3,
    n0,
    _MSEe,
    0,
    [_sR, _aMRFd],
    [0, 15],
    1
  ];
  OutputConfig$ = [
    3,
    n0,
    _OC,
    0,
    [_tF],
    [[() => OutputFormat$, 0]]
  ];
  OutputFormat$ = [
    3,
    n0,
    _OF,
    0,
    [_ty, _stru],
    [0, [() => OutputFormatStructure$, 0]],
    2
  ];
  PayloadPart$ = [
    3,
    n0,
    _PP,
    8,
    [_b],
    [[() => PartBody, 0]]
  ];
  PerformanceConfiguration$ = [
    3,
    n0,
    _PC,
    0,
    [_la],
    [0]
  ];
  PromptRouterTrace$ = [
    3,
    n0,
    _PRT,
    0,
    [_iMI],
    [0]
  ];
  ReasoningTextBlock$ = [
    3,
    n0,
    _RTB,
    8,
    [_te, _si],
    [0, 0],
    1
  ];
  S3Location$ = [
    3,
    n0,
    _SL,
    0,
    [_ur, _bO],
    [0, 0],
    1
  ];
  SearchResultBlock$ = [
    3,
    n0,
    _SRB,
    0,
    [_so, _ti, _co, _ci],
    [0, 0, () => SearchResultContentBlocks, () => CitationsConfig$],
    3
  ];
  SearchResultContentBlock$ = [
    3,
    n0,
    _SRCB,
    0,
    [_te],
    [0],
    1
  ];
  SearchResultLocation$ = [
    3,
    n0,
    _SRL,
    0,
    [_sRI, _sta, _end],
    [1, 1, 1]
  ];
  ServiceTier$ = [
    3,
    n0,
    _ST,
    0,
    [_ty],
    [0],
    1
  ];
  SpecificToolChoice$ = [
    3,
    n0,
    _STC,
    0,
    [_n],
    [0],
    1
  ];
  StartAsyncInvokeRequest$ = [
    3,
    n0,
    _SAIR,
    0,
    [_mI, _mIo, _oDC, _cRT, _ta],
    [0, [() => ModelInputPayload, 0], () => AsyncInvokeOutputDataConfig$, [0, 4], () => TagList],
    3
  ];
  StartAsyncInvokeResponse$ = [
    3,
    n0,
    _SAIRt,
    0,
    [_iA],
    [0],
    1
  ];
  SystemTool$ = [
    3,
    n0,
    _STy,
    0,
    [_n],
    [0],
    1
  ];
  Tag$ = [
    3,
    n0,
    _T,
    0,
    [_k, _v],
    [0, 0],
    2
  ];
  TokenUsage$ = [
    3,
    n0,
    _TU,
    0,
    [_iT, _oT, _tT, _cRIT, _cWIT, _cD],
    [1, 1, 1, 1, 1, () => CacheDetailsList],
    3
  ];
  ToolConfiguration$ = [
    3,
    n0,
    _TC,
    0,
    [_too, _tCo],
    [() => Tools, () => ToolChoice$],
    1
  ];
  ToolResultBlock$ = [
    3,
    n0,
    _TRB,
    0,
    [_tUI, _co, _st, _ty],
    [0, [() => ToolResultContentBlocks, 0], 0, 0],
    2
  ];
  ToolResultBlockStart$ = [
    3,
    n0,
    _TRBS,
    0,
    [_tUI, _ty, _st],
    [0, 0, 0],
    1
  ];
  ToolSpecification$ = [
    3,
    n0,
    _TS,
    0,
    [_n, _iS, _des, _stri],
    [0, () => ToolInputSchema$, 0, 2],
    2
  ];
  ToolUseBlock$ = [
    3,
    n0,
    _TUB,
    0,
    [_tUI, _n, _i, _ty],
    [0, 0, 15, 0],
    3
  ];
  ToolUseBlockDelta$ = [
    3,
    n0,
    _TUBD,
    0,
    [_i],
    [0],
    1
  ];
  ToolUseBlockStart$ = [
    3,
    n0,
    _TUBS,
    0,
    [_tUI, _n, _ty],
    [0, 0, 0],
    2
  ];
  VideoBlock$ = [
    3,
    n0,
    _VB,
    0,
    [_f, _so],
    [0, () => VideoSource$],
    2
  ];
  WebLocation$ = [
    3,
    n0,
    _WL,
    0,
    [_url, _do],
    [0, 0]
  ];
  AdditionalModelResponseFieldPaths = 64 | 0;
  AsyncInvokeSummaries = [
    1,
    n0,
    _AISs,
    0,
    [
      () => AsyncInvokeSummary$,
      0
    ]
  ];
  CacheDetailsList = [
    1,
    n0,
    _CDL,
    0,
    () => CacheDetail$
  ];
  CitationGeneratedContentList = [
    1,
    n0,
    _CGCL,
    0,
    () => CitationGeneratedContent$
  ];
  Citations = [
    1,
    n0,
    _Ci,
    0,
    () => Citation$
  ];
  CitationSourceContentList = [
    1,
    n0,
    _CSCL,
    0,
    () => CitationSourceContent$
  ];
  CitationSourceContentListDelta = [
    1,
    n0,
    _CSCLD,
    0,
    () => CitationSourceContentDelta$
  ];
  ContentBlocks = [
    1,
    n0,
    _CB,
    0,
    [
      () => ContentBlock$,
      0
    ]
  ];
  DocumentContentBlocks = [
    1,
    n0,
    _DCB,
    0,
    () => DocumentContentBlock$
  ];
  GuardrailAssessmentList = [
    1,
    n0,
    _GAL,
    0,
    [
      () => GuardrailAssessment$,
      0
    ]
  ];
  GuardrailAutomatedReasoningDifferenceScenarioList = [
    1,
    n0,
    _GARDSL,
    0,
    [
      () => GuardrailAutomatedReasoningScenario$,
      0
    ]
  ];
  GuardrailAutomatedReasoningFindingList = [
    1,
    n0,
    _GARFL,
    0,
    [
      () => GuardrailAutomatedReasoningFinding$,
      0
    ]
  ];
  GuardrailAutomatedReasoningInputTextReferenceList = [
    1,
    n0,
    _GARITRL,
    0,
    [
      () => GuardrailAutomatedReasoningInputTextReference$,
      0
    ]
  ];
  GuardrailAutomatedReasoningRuleList = [
    1,
    n0,
    _GARRL,
    0,
    () => GuardrailAutomatedReasoningRule$
  ];
  GuardrailAutomatedReasoningStatementList = [
    1,
    n0,
    _GARSL,
    0,
    [
      () => GuardrailAutomatedReasoningStatement$,
      0
    ]
  ];
  GuardrailAutomatedReasoningTranslationList = [
    1,
    n0,
    _GARTL,
    0,
    [
      () => GuardrailAutomatedReasoningTranslation$,
      0
    ]
  ];
  GuardrailAutomatedReasoningTranslationOptionList = [
    1,
    n0,
    _GARTOL,
    0,
    [
      () => GuardrailAutomatedReasoningTranslationOption$,
      0
    ]
  ];
  GuardrailContentBlockList = [
    1,
    n0,
    _GCBL,
    0,
    [
      () => GuardrailContentBlock$,
      0
    ]
  ];
  GuardrailContentFilterList = [
    1,
    n0,
    _GCFL,
    0,
    () => GuardrailContentFilter$
  ];
  GuardrailContentQualifierList = 64 | 0;
  GuardrailContextualGroundingFilters = [
    1,
    n0,
    _GCGFu,
    0,
    () => GuardrailContextualGroundingFilter$
  ];
  GuardrailConverseContentQualifierList = 64 | 0;
  GuardrailCustomWordList = [
    1,
    n0,
    _GCWL,
    0,
    () => GuardrailCustomWord$
  ];
  GuardrailManagedWordList = [
    1,
    n0,
    _GMWL,
    0,
    () => GuardrailManagedWord$
  ];
  GuardrailOriginList = 64 | 0;
  GuardrailOutputContentList = [
    1,
    n0,
    _GOCL,
    0,
    () => GuardrailOutputContent$
  ];
  GuardrailPiiEntityFilterList = [
    1,
    n0,
    _GPEFL,
    0,
    () => GuardrailPiiEntityFilter$
  ];
  GuardrailRegexFilterList = [
    1,
    n0,
    _GRFL,
    0,
    () => GuardrailRegexFilter$
  ];
  GuardrailTopicList = [
    1,
    n0,
    _GTL,
    0,
    () => GuardrailTopic$
  ];
  Messages = [
    1,
    n0,
    _Me,
    0,
    [
      () => Message$,
      0
    ]
  ];
  ModelOutputs = 64 | 0;
  NonEmptyStringList = 64 | 0;
  SearchResultContentBlocks = [
    1,
    n0,
    _SRCBe,
    0,
    () => SearchResultContentBlock$
  ];
  SystemContentBlocks = [
    1,
    n0,
    _SCB,
    0,
    [
      () => SystemContentBlock$,
      0
    ]
  ];
  TagList = [
    1,
    n0,
    _TL,
    0,
    () => Tag$
  ];
  ToolResultBlocksDelta = [
    1,
    n0,
    _TRBD,
    0,
    () => ToolResultBlockDelta$
  ];
  ToolResultContentBlocks = [
    1,
    n0,
    _TRCB,
    0,
    [
      () => ToolResultContentBlock$,
      0
    ]
  ];
  Tools = [
    1,
    n0,
    _To,
    0,
    () => Tool$
  ];
  GuardrailAssessmentListMap = [
    2,
    n0,
    _GALM,
    0,
    [
      0,
      0
    ],
    [
      () => GuardrailAssessmentList,
      0
    ]
  ];
  GuardrailAssessmentMap = [
    2,
    n0,
    _GAM,
    0,
    [
      0,
      0
    ],
    [
      () => GuardrailAssessment$,
      0
    ]
  ];
  PromptVariableMap = [
    2,
    n0,
    _PVM,
    8,
    0,
    () => PromptVariableValues$
  ];
  RequestMetadata = [
    2,
    n0,
    _RM,
    8,
    0,
    0
  ];
  AsyncInvokeOutputDataConfig$ = [
    4,
    n0,
    _AIODC,
    0,
    [_sODC],
    [() => AsyncInvokeS3OutputDataConfig$]
  ];
  AudioSource$ = [
    4,
    n0,
    _AS,
    8,
    [_b, _sL],
    [21, () => S3Location$]
  ];
  CitationGeneratedContent$ = [
    4,
    n0,
    _CGC,
    0,
    [_te],
    [0]
  ];
  CitationLocation$ = [
    4,
    n0,
    _CL,
    0,
    [_w, _dC, _dP, _dCo, _sRL],
    [() => WebLocation$, () => DocumentCharLocation$, () => DocumentPageLocation$, () => DocumentChunkLocation$, () => SearchResultLocation$]
  ];
  CitationSourceContent$ = [
    4,
    n0,
    _CSC,
    0,
    [_te],
    [0]
  ];
  ContentBlock$ = [
    4,
    n0,
    _CBo,
    0,
    [_te, _ima, _doc, _vi, _au, _tU, _tR, _gCua, _cPa, _rC, _cC, _sRe],
    [0, [() => ImageBlock$, 0], () => DocumentBlock$, () => VideoBlock$, [() => AudioBlock$, 0], () => ToolUseBlock$, [() => ToolResultBlock$, 0], [() => GuardrailConverseContentBlock$, 0], () => CachePointBlock$, [() => ReasoningContentBlock$, 0], () => CitationsContentBlock$, () => SearchResultBlock$]
  ];
  ContentBlockDelta$ = [
    4,
    n0,
    _CBD,
    0,
    [_te, _tU, _tR, _rC, _cit, _ima],
    [0, () => ToolUseBlockDelta$, () => ToolResultBlocksDelta, [() => ReasoningContentBlockDelta$, 0], () => CitationsDelta$, [() => ImageBlockDelta$, 0]]
  ];
  ContentBlockStart$ = [
    4,
    n0,
    _CBS,
    0,
    [_tU, _tR, _ima],
    [() => ToolUseBlockStart$, () => ToolResultBlockStart$, () => ImageBlockStart$]
  ];
  ConverseOutput$ = [
    4,
    n0,
    _CO,
    0,
    [_m],
    [[() => Message$, 0]]
  ];
  ConverseStreamOutput$ = [
    4,
    n0,
    _CSO,
    { [_stre]: 1 },
    [_mS, _cBS, _cBD, _cBSo, _mSe, _meta, _iSE, _mSEE, _vE, _tE, _sUE],
    [() => MessageStartEvent$, () => ContentBlockStartEvent$, [() => ContentBlockDeltaEvent$, 0], () => ContentBlockStopEvent$, () => MessageStopEvent$, [() => ConverseStreamMetadataEvent$, 0], [() => InternalServerException$, 0], [() => ModelStreamErrorException$, 0], [() => ValidationException$, 0], [() => ThrottlingException$, 0], [() => ServiceUnavailableException$, 0]]
  ];
  CountTokensInput$ = [
    4,
    n0,
    _CTI,
    0,
    [_iMn, _conv],
    [[() => InvokeModelTokensRequest$, 0], [() => ConverseTokensRequest$, 0]]
  ];
  DocumentContentBlock$ = [
    4,
    n0,
    _DCBo,
    0,
    [_te],
    [0]
  ];
  DocumentSource$ = [
    4,
    n0,
    _DS,
    0,
    [_b, _sL, _te, _co],
    [21, () => S3Location$, 0, () => DocumentContentBlocks]
  ];
  GuardrailAutomatedReasoningFinding$ = [
    4,
    n0,
    _GARF,
    0,
    [_va, _in, _sa, _imp, _tA, _tCoo, _nTo],
    [[() => GuardrailAutomatedReasoningValidFinding$, 0], [() => GuardrailAutomatedReasoningInvalidFinding$, 0], [() => GuardrailAutomatedReasoningSatisfiableFinding$, 0], [() => GuardrailAutomatedReasoningImpossibleFinding$, 0], [() => GuardrailAutomatedReasoningTranslationAmbiguousFinding$, 0], () => GuardrailAutomatedReasoningTooComplexFinding$, () => GuardrailAutomatedReasoningNoTranslationsFinding$]
  ];
  GuardrailContentBlock$ = [
    4,
    n0,
    _GCB,
    0,
    [_te, _ima],
    [() => GuardrailTextBlock$, [() => GuardrailImageBlock$, 0]]
  ];
  GuardrailConverseContentBlock$ = [
    4,
    n0,
    _GCCB,
    0,
    [_te, _ima],
    [() => GuardrailConverseTextBlock$, [() => GuardrailConverseImageBlock$, 0]]
  ];
  GuardrailConverseImageSource$ = [
    4,
    n0,
    _GCIS,
    8,
    [_b],
    [21]
  ];
  GuardrailImageSource$ = [
    4,
    n0,
    _GIS,
    8,
    [_b],
    [21]
  ];
  ImageSource$ = [
    4,
    n0,
    _IS,
    8,
    [_b, _sL],
    [21, () => S3Location$]
  ];
  InvokeModelWithBidirectionalStreamInput$ = [
    4,
    n0,
    _IMWBSI,
    { [_stre]: 1 },
    [_ch],
    [[() => BidirectionalInputPayloadPart$, 0]]
  ];
  InvokeModelWithBidirectionalStreamOutput$ = [
    4,
    n0,
    _IMWBSO,
    { [_stre]: 1 },
    [_ch, _iSE, _mSEE, _vE, _tE, _mTE, _sUE],
    [[() => BidirectionalOutputPayloadPart$, 0], [() => InternalServerException$, 0], [() => ModelStreamErrorException$, 0], [() => ValidationException$, 0], [() => ThrottlingException$, 0], [() => ModelTimeoutException$, 0], [() => ServiceUnavailableException$, 0]]
  ];
  OutputFormatStructure$ = [
    4,
    n0,
    _OFS,
    8,
    [_jS],
    [() => JsonSchemaDefinition$]
  ];
  PromptVariableValues$ = [
    4,
    n0,
    _PVV,
    0,
    [_te],
    [0]
  ];
  ReasoningContentBlock$ = [
    4,
    n0,
    _RCB,
    8,
    [_rT, _rCe],
    [[() => ReasoningTextBlock$, 0], 21]
  ];
  ReasoningContentBlockDelta$ = [
    4,
    n0,
    _RCBD,
    8,
    [_te, _rCe, _si],
    [0, 21, 0]
  ];
  ResponseStream$ = [
    4,
    n0,
    _RS,
    { [_stre]: 1 },
    [_ch, _iSE, _mSEE, _vE, _tE, _mTE, _sUE],
    [[() => PayloadPart$, 0], [() => InternalServerException$, 0], [() => ModelStreamErrorException$, 0], [() => ValidationException$, 0], [() => ThrottlingException$, 0], [() => ModelTimeoutException$, 0], [() => ServiceUnavailableException$, 0]]
  ];
  SystemContentBlock$ = [
    4,
    n0,
    _SCBy,
    0,
    [_te, _gCua, _cPa],
    [0, [() => GuardrailConverseContentBlock$, 0], () => CachePointBlock$]
  ];
  Tool$ = [
    4,
    n0,
    _Too,
    0,
    [_tS, _sTy, _cPa],
    [() => ToolSpecification$, () => SystemTool$, () => CachePointBlock$]
  ];
  ToolChoice$ = [
    4,
    n0,
    _TCo,
    0,
    [_aut, _an, _tool],
    [() => AutoToolChoice$, () => AnyToolChoice$, () => SpecificToolChoice$]
  ];
  ToolInputSchema$ = [
    4,
    n0,
    _TIS,
    0,
    [_j],
    [15]
  ];
  ToolResultBlockDelta$ = [
    4,
    n0,
    _TRBDo,
    0,
    [_te, _j],
    [0, 15]
  ];
  ToolResultContentBlock$ = [
    4,
    n0,
    _TRCBo,
    0,
    [_j, _te, _ima, _doc, _vi, _sRe],
    [15, 0, [() => ImageBlock$, 0], () => DocumentBlock$, () => VideoBlock$, () => SearchResultBlock$]
  ];
  VideoSource$ = [
    4,
    n0,
    _VS,
    0,
    [_b, _sL],
    [21, () => S3Location$]
  ];
  ApplyGuardrail$ = [
    9,
    n0,
    _AG,
    { [_h]: ["POST", "/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply", 200] },
    () => ApplyGuardrailRequest$,
    () => ApplyGuardrailResponse$
  ];
  Converse$ = [
    9,
    n0,
    _Co,
    { [_h]: ["POST", "/model/{modelId}/converse", 200] },
    () => ConverseRequest$,
    () => ConverseResponse$
  ];
  ConverseStream$ = [
    9,
    n0,
    _CS,
    { [_h]: ["POST", "/model/{modelId}/converse-stream", 200] },
    () => ConverseStreamRequest$,
    () => ConverseStreamResponse$
  ];
  CountTokens$ = [
    9,
    n0,
    _CTo,
    { [_h]: ["POST", "/model/{modelId}/count-tokens", 200] },
    () => CountTokensRequest$,
    () => CountTokensResponse$
  ];
  GetAsyncInvoke$ = [
    9,
    n0,
    _GAI,
    { [_h]: ["GET", "/async-invoke/{invocationArn}", 200] },
    () => GetAsyncInvokeRequest$,
    () => GetAsyncInvokeResponse$
  ];
  InvokeModel$ = [
    9,
    n0,
    _IM,
    { [_h]: ["POST", "/model/{modelId}/invoke", 200] },
    () => InvokeModelRequest$,
    () => InvokeModelResponse$
  ];
  InvokeModelWithBidirectionalStream$ = [
    9,
    n0,
    _IMWBS,
    { [_h]: ["POST", "/model/{modelId}/invoke-with-bidirectional-stream", 200] },
    () => InvokeModelWithBidirectionalStreamRequest$,
    () => InvokeModelWithBidirectionalStreamResponse$
  ];
  InvokeModelWithResponseStream$ = [
    9,
    n0,
    _IMWRS,
    { [_h]: ["POST", "/model/{modelId}/invoke-with-response-stream", 200] },
    () => InvokeModelWithResponseStreamRequest$,
    () => InvokeModelWithResponseStreamResponse$
  ];
  ListAsyncInvokes$ = [
    9,
    n0,
    _LAI,
    { [_h]: ["GET", "/async-invoke", 200] },
    () => ListAsyncInvokesRequest$,
    () => ListAsyncInvokesResponse$
  ];
  StartAsyncInvoke$ = [
    9,
    n0,
    _SAI,
    { [_h]: ["POST", "/async-invoke", 200] },
    () => StartAsyncInvokeRequest$,
    () => StartAsyncInvokeResponse$
  ];
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.shared.js
var import_httpAuthSchemes2, import_protocols, import_core2, import_smithy_client2, import_url_parser, import_util_base64, import_util_utf82, getRuntimeConfig = (config) => {
  return {
    apiVersion: "2023-09-30",
    base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
    base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultBedrockRuntimeHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new import_httpAuthSchemes2.AwsSdkSigV4Signer
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#httpBearerAuth"),
        signer: new import_core2.HttpBearerAuthSigner
      }
    ],
    logger: config?.logger ?? new import_smithy_client2.NoOpLogger,
    protocol: config?.protocol ?? import_protocols.AwsRestJsonProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.bedrockruntime",
      errorTypeRegistries,
      version: "2023-09-30",
      serviceTarget: "AmazonBedrockFrontendService"
    },
    serviceId: config?.serviceId ?? "Bedrock Runtime",
    urlParser: config?.urlParser ?? import_url_parser.parseUrl,
    utf8Decoder: config?.utf8Decoder ?? import_util_utf82.fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? import_util_utf82.toUtf8
  };
};
var init_runtimeConfig_shared = __esm(() => {
  init_httpAuthSchemeProvider();
  init_endpointResolver();
  init_schemas_0();
  import_httpAuthSchemes2 = __toESM(require_httpAuthSchemes(), 1);
  import_protocols = __toESM(require_protocols(), 1);
  import_core2 = __toESM(require_dist_cjs11(), 1);
  import_smithy_client2 = __toESM(require_dist_cjs10(), 1);
  import_url_parser = __toESM(require_dist_cjs4(), 1);
  import_util_base64 = __toESM(require_dist_cjs8(), 1);
  import_util_utf82 = __toESM(require_dist_cjs7(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeConfig.js
var import_client, import_httpAuthSchemes3, import_util_user_agent_node, import_config_resolver, import_core3, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_smithy_client3, import_util_body_length_node, import_util_defaults_mode_node, import_util_retry, getRuntimeConfig2 = (config) => {
  import_smithy_client3.emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = import_util_defaults_mode_node.resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(import_smithy_client3.loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  import_client.emitWarningIfUnsupportedVersion(process.version);
  const loaderConfig = {
    profile: config?.profile,
    logger: clientSharedValues.logger,
    signingName: "bedrock"
  };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    authSchemePreference: config?.authSchemePreference ?? import_node_config_provider.loadConfig(import_httpAuthSchemes3.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
    bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node.calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? import_util_user_agent_node.createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? eventStreamPayloadHandlerProvider2,
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new import_httpAuthSchemes3.AwsSdkSigV4Signer
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#httpBearerAuth") || (async (idProps) => {
          try {
            return await fromEnvSigningName({ signingName: "bedrock" })();
          } catch (error) {
            return await nodeProvider(idProps)(idProps);
          }
        }),
        signer: new import_core3.HttpBearerAuthSigner
      }
    ],
    maxAttempts: config?.maxAttempts ?? import_node_config_provider.loadConfig(import_middleware_retry.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    region: config?.region ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_REGION_CONFIG_OPTIONS, { ...import_config_resolver.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
    requestHandler: import_node_http_handler.NodeHttp2Handler.create(config?.requestHandler ?? (async () => ({
      ...await defaultConfigProvider(),
      disableConcurrentStreams: true
    }))),
    retryMode: config?.retryMode ?? import_node_config_provider.loadConfig({
      ...import_middleware_retry.NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || import_util_retry.DEFAULT_RETRY_MODE
    }, config),
    sha256: config?.sha256 ?? import_hash_node.Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    useFipsEndpoint: config?.useFipsEndpoint ?? import_node_config_provider.loadConfig(import_config_resolver.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
    userAgentAppId: config?.userAgentAppId ?? import_node_config_provider.loadConfig(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
  };
};
var init_runtimeConfig = __esm(() => {
  init_package();
  init_dist_es();
  init_dist_es11();
  init_dist_es2();
  init_dist_es12();
  init_runtimeConfig_shared();
  import_client = __toESM(require_client(), 1);
  import_httpAuthSchemes3 = __toESM(require_httpAuthSchemes(), 1);
  import_util_user_agent_node = __toESM(require_dist_cjs22(), 1);
  import_config_resolver = __toESM(require_dist_cjs18(), 1);
  import_core3 = __toESM(require_dist_cjs11(), 1);
  import_hash_node = __toESM(require_dist_cjs23(), 1);
  import_middleware_retry = __toESM(require_dist_cjs21(), 1);
  import_node_config_provider = __toESM(require_dist_cjs3(), 1);
  import_node_http_handler = __toESM(require_dist_cjs5(), 1);
  import_smithy_client3 = __toESM(require_dist_cjs10(), 1);
  import_util_body_length_node = __toESM(require_dist_cjs24(), 1);
  import_util_defaults_mode_node = __toESM(require_dist_cjs25(), 1);
  import_util_retry = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = (runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  let _token = runtimeConfig.token;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    },
    setToken(token) {
      _token = token;
    },
    token() {
      return _token;
    }
  };
}, resolveHttpAuthRuntimeConfig = (config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials(),
    token: config.token()
  };
};
var init_httpAuthExtensionConfiguration = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http5, import_smithy_client4, resolveRuntimeExtensions = (runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(import_region_config_resolver.getAwsRegionExtensionConfiguration(runtimeConfig), import_smithy_client4.getDefaultExtensionConfiguration(runtimeConfig), import_protocol_http5.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, import_region_config_resolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), import_smithy_client4.resolveDefaultRuntimeConfig(extensionConfiguration), import_protocol_http5.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};
var init_runtimeExtensions = __esm(() => {
  init_httpAuthExtensionConfiguration();
  import_region_config_resolver = __toESM(require_dist_cjs26(), 1);
  import_protocol_http5 = __toESM(require_dist_cjs(), 1);
  import_smithy_client4 = __toESM(require_dist_cjs10(), 1);
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/BedrockRuntimeClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_core4, import_schema2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, BedrockRuntimeClient;
var init_BedrockRuntimeClient = __esm(() => {
  init_dist_es3();
  init_dist_es9();
  init_dist_es10();
  init_httpAuthSchemeProvider();
  init_EndpointParameters();
  init_runtimeConfig();
  init_runtimeExtensions();
  import_middleware_host_header = __toESM(require_dist_cjs12(), 1);
  import_middleware_logger = __toESM(require_dist_cjs13(), 1);
  import_middleware_recursion_detection = __toESM(require_dist_cjs14(), 1);
  import_middleware_user_agent = __toESM(require_dist_cjs17(), 1);
  import_config_resolver2 = __toESM(require_dist_cjs18(), 1);
  import_core4 = __toESM(require_dist_cjs11(), 1);
  import_schema2 = __toESM(require_schema(), 1);
  import_middleware_content_length = __toESM(require_dist_cjs19(), 1);
  import_middleware_endpoint = __toESM(require_dist_cjs20(), 1);
  import_middleware_retry2 = __toESM(require_dist_cjs21(), 1);
  import_smithy_client5 = __toESM(require_dist_cjs10(), 1);
  BedrockRuntimeClient = class BedrockRuntimeClient extends import_smithy_client5.Client {
    config;
    constructor(...[configuration]) {
      const _config_0 = getRuntimeConfig2(configuration || {});
      super(_config_0);
      this.initConfig = _config_0;
      const _config_1 = resolveClientEndpointParameters(_config_0);
      const _config_2 = import_middleware_user_agent.resolveUserAgentConfig(_config_1);
      const _config_3 = import_middleware_retry2.resolveRetryConfig(_config_2);
      const _config_4 = import_config_resolver2.resolveRegionConfig(_config_3);
      const _config_5 = import_middleware_host_header.resolveHostHeaderConfig(_config_4);
      const _config_6 = import_middleware_endpoint.resolveEndpointConfig(_config_5);
      const _config_7 = resolveEventStreamSerdeConfig(_config_6);
      const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
      const _config_9 = resolveEventStreamConfig(_config_8);
      const _config_10 = resolveWebSocketConfig(_config_9);
      const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
      this.config = _config_11;
      this.middlewareStack.use(import_schema2.getSchemaSerdePlugin(this.config));
      this.middlewareStack.use(import_middleware_user_agent.getUserAgentPlugin(this.config));
      this.middlewareStack.use(import_middleware_retry2.getRetryPlugin(this.config));
      this.middlewareStack.use(import_middleware_content_length.getContentLengthPlugin(this.config));
      this.middlewareStack.use(import_middleware_host_header.getHostHeaderPlugin(this.config));
      this.middlewareStack.use(import_middleware_logger.getLoggerPlugin(this.config));
      this.middlewareStack.use(import_middleware_recursion_detection.getRecursionDetectionPlugin(this.config));
      this.middlewareStack.use(import_core4.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config) => new import_core4.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials,
          "smithy.api#httpBearerAuth": config.token
        })
      }));
      this.middlewareStack.use(import_core4.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/ApplyGuardrailCommand.js
var import_middleware_endpoint2, import_smithy_client6, ApplyGuardrailCommand;
var init_ApplyGuardrailCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint2 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client6 = __toESM(require_dist_cjs10(), 1);
  ApplyGuardrailCommand = class ApplyGuardrailCommand extends import_smithy_client6.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint2.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ApplyGuardrail", {}).n("BedrockRuntimeClient", "ApplyGuardrailCommand").sc(ApplyGuardrail$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/ConverseCommand.js
var import_middleware_endpoint3, import_smithy_client7, ConverseCommand;
var init_ConverseCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint3 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client7 = __toESM(require_dist_cjs10(), 1);
  ConverseCommand = class ConverseCommand extends import_smithy_client7.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint3.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "Converse", {}).n("BedrockRuntimeClient", "ConverseCommand").sc(Converse$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/ConverseStreamCommand.js
var import_middleware_endpoint4, import_smithy_client8, ConverseStreamCommand;
var init_ConverseStreamCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint4 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client8 = __toESM(require_dist_cjs10(), 1);
  ConverseStreamCommand = class ConverseStreamCommand extends import_smithy_client8.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint4.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ConverseStream", {
    eventStream: {
      output: true
    }
  }).n("BedrockRuntimeClient", "ConverseStreamCommand").sc(ConverseStream$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/CountTokensCommand.js
var import_middleware_endpoint5, import_smithy_client9, CountTokensCommand;
var init_CountTokensCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint5 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client9 = __toESM(require_dist_cjs10(), 1);
  CountTokensCommand = class CountTokensCommand extends import_smithy_client9.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint5.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "CountTokens", {}).n("BedrockRuntimeClient", "CountTokensCommand").sc(CountTokens$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/GetAsyncInvokeCommand.js
var import_middleware_endpoint6, import_smithy_client10, GetAsyncInvokeCommand;
var init_GetAsyncInvokeCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint6 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client10 = __toESM(require_dist_cjs10(), 1);
  GetAsyncInvokeCommand = class GetAsyncInvokeCommand extends import_smithy_client10.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint6.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "GetAsyncInvoke", {}).n("BedrockRuntimeClient", "GetAsyncInvokeCommand").sc(GetAsyncInvoke$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelCommand.js
var import_middleware_endpoint7, import_smithy_client11, InvokeModelCommand;
var init_InvokeModelCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint7 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client11 = __toESM(require_dist_cjs10(), 1);
  InvokeModelCommand = class InvokeModelCommand extends import_smithy_client11.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint7.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "InvokeModel", {}).n("BedrockRuntimeClient", "InvokeModelCommand").sc(InvokeModel$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelWithBidirectionalStreamCommand.js
var import_middleware_endpoint8, import_smithy_client12, InvokeModelWithBidirectionalStreamCommand;
var init_InvokeModelWithBidirectionalStreamCommand = __esm(() => {
  init_dist_es3();
  init_dist_es9();
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint8 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client12 = __toESM(require_dist_cjs10(), 1);
  InvokeModelWithBidirectionalStreamCommand = class InvokeModelWithBidirectionalStreamCommand extends import_smithy_client12.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [
      import_middleware_endpoint8.getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
      getWebSocketPlugin(config, {
        headerPrefix: "x-amz-bedrock-"
      })
    ];
  }).s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
    eventStream: {
      input: true,
      output: true
    }
  }).n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand").sc(InvokeModelWithBidirectionalStream$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/InvokeModelWithResponseStreamCommand.js
var import_middleware_endpoint9, import_smithy_client13, InvokeModelWithResponseStreamCommand;
var init_InvokeModelWithResponseStreamCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint9 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client13 = __toESM(require_dist_cjs10(), 1);
  InvokeModelWithResponseStreamCommand = class InvokeModelWithResponseStreamCommand extends import_smithy_client13.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint9.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
    eventStream: {
      output: true
    }
  }).n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand").sc(InvokeModelWithResponseStream$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/ListAsyncInvokesCommand.js
var import_middleware_endpoint10, import_smithy_client14, ListAsyncInvokesCommand;
var init_ListAsyncInvokesCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint10 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client14 = __toESM(require_dist_cjs10(), 1);
  ListAsyncInvokesCommand = class ListAsyncInvokesCommand extends import_smithy_client14.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint10.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "ListAsyncInvokes", {}).n("BedrockRuntimeClient", "ListAsyncInvokesCommand").sc(ListAsyncInvokes$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/StartAsyncInvokeCommand.js
var import_middleware_endpoint11, import_smithy_client15, StartAsyncInvokeCommand;
var init_StartAsyncInvokeCommand = __esm(() => {
  init_EndpointParameters();
  init_schemas_0();
  import_middleware_endpoint11 = __toESM(require_dist_cjs20(), 1);
  import_smithy_client15 = __toESM(require_dist_cjs10(), 1);
  StartAsyncInvokeCommand = class StartAsyncInvokeCommand extends import_smithy_client15.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
    return [import_middleware_endpoint11.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  }).s("AmazonBedrockFrontendService", "StartAsyncInvoke", {}).n("BedrockRuntimeClient", "StartAsyncInvokeCommand").sc(StartAsyncInvoke$).build() {
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/pagination/ListAsyncInvokesPaginator.js
var import_core5, paginateListAsyncInvokes;
var init_ListAsyncInvokesPaginator = __esm(() => {
  init_BedrockRuntimeClient();
  init_ListAsyncInvokesCommand();
  import_core5 = __toESM(require_dist_cjs11(), 1);
  paginateListAsyncInvokes = import_core5.createPaginator(BedrockRuntimeClient, ListAsyncInvokesCommand, "nextToken", "nextToken", "maxResults");
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/BedrockRuntime.js
var import_smithy_client16, commands, paginators, BedrockRuntime;
var init_BedrockRuntime = __esm(() => {
  init_BedrockRuntimeClient();
  init_ApplyGuardrailCommand();
  init_ConverseCommand();
  init_ConverseStreamCommand();
  init_CountTokensCommand();
  init_GetAsyncInvokeCommand();
  init_InvokeModelCommand();
  init_InvokeModelWithBidirectionalStreamCommand();
  init_InvokeModelWithResponseStreamCommand();
  init_ListAsyncInvokesCommand();
  init_StartAsyncInvokeCommand();
  init_ListAsyncInvokesPaginator();
  import_smithy_client16 = __toESM(require_dist_cjs10(), 1);
  commands = {
    ApplyGuardrailCommand,
    ConverseCommand,
    ConverseStreamCommand,
    CountTokensCommand,
    GetAsyncInvokeCommand,
    InvokeModelCommand,
    InvokeModelWithBidirectionalStreamCommand,
    InvokeModelWithResponseStreamCommand,
    ListAsyncInvokesCommand,
    StartAsyncInvokeCommand
  };
  paginators = {
    paginateListAsyncInvokes
  };
  BedrockRuntime = class BedrockRuntime extends BedrockRuntimeClient {
  };
  import_smithy_client16.createAggregatedClient(commands, BedrockRuntime, { paginators });
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/commands/index.js
var init_commands = __esm(() => {
  init_ApplyGuardrailCommand();
  init_ConverseCommand();
  init_ConverseStreamCommand();
  init_CountTokensCommand();
  init_GetAsyncInvokeCommand();
  init_InvokeModelCommand();
  init_InvokeModelWithBidirectionalStreamCommand();
  init_InvokeModelWithResponseStreamCommand();
  init_ListAsyncInvokesCommand();
  init_StartAsyncInvokeCommand();
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/pagination/Interfaces.js
var init_Interfaces = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/pagination/index.js
var init_pagination = __esm(() => {
  init_Interfaces();
  init_ListAsyncInvokesPaginator();
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/enums.js
var AsyncInvokeStatus, SortAsyncInvocationBy, SortOrder, GuardrailImageFormat, GuardrailContentQualifier, GuardrailOutputScope, GuardrailContentSource, GuardrailAction, GuardrailOrigin, GuardrailOwnership, GuardrailAutomatedReasoningLogicWarningType, GuardrailContentPolicyAction, GuardrailContentFilterConfidence, GuardrailContentFilterStrength, GuardrailContentFilterType, GuardrailContextualGroundingPolicyAction, GuardrailContextualGroundingFilterType, GuardrailSensitiveInformationPolicyAction, GuardrailPiiEntityType, GuardrailTopicPolicyAction, GuardrailTopicType, GuardrailWordPolicyAction, GuardrailManagedWordType, GuardrailTrace, AudioFormat, CacheTTL, CachePointType, DocumentFormat, GuardrailConverseImageFormat, GuardrailConverseContentQualifier, ImageFormat, VideoFormat, ToolResultStatus, ToolUseType, ConversationRole, OutputFormatType, PerformanceConfigLatency, ServiceTierType, StopReason, GuardrailStreamProcessingMode, Trace;
var init_enums = __esm(() => {
  AsyncInvokeStatus = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress"
  };
  SortAsyncInvocationBy = {
    SUBMISSION_TIME: "SubmissionTime"
  };
  SortOrder = {
    ASCENDING: "Ascending",
    DESCENDING: "Descending"
  };
  GuardrailImageFormat = {
    JPEG: "jpeg",
    PNG: "png"
  };
  GuardrailContentQualifier = {
    GROUNDING_SOURCE: "grounding_source",
    GUARD_CONTENT: "guard_content",
    QUERY: "query"
  };
  GuardrailOutputScope = {
    FULL: "FULL",
    INTERVENTIONS: "INTERVENTIONS"
  };
  GuardrailContentSource = {
    INPUT: "INPUT",
    OUTPUT: "OUTPUT"
  };
  GuardrailAction = {
    GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
    NONE: "NONE"
  };
  GuardrailOrigin = {
    ACCOUNT_ENFORCED: "ACCOUNT_ENFORCED",
    ORGANIZATION_ENFORCED: "ORGANIZATION_ENFORCED",
    REQUEST: "REQUEST"
  };
  GuardrailOwnership = {
    CROSS_ACCOUNT: "CROSS_ACCOUNT",
    SELF: "SELF"
  };
  GuardrailAutomatedReasoningLogicWarningType = {
    ALWAYS_FALSE: "ALWAYS_FALSE",
    ALWAYS_TRUE: "ALWAYS_TRUE"
  };
  GuardrailContentPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE"
  };
  GuardrailContentFilterConfidence = {
    HIGH: "HIGH",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    NONE: "NONE"
  };
  GuardrailContentFilterStrength = {
    HIGH: "HIGH",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    NONE: "NONE"
  };
  GuardrailContentFilterType = {
    HATE: "HATE",
    INSULTS: "INSULTS",
    MISCONDUCT: "MISCONDUCT",
    PROMPT_ATTACK: "PROMPT_ATTACK",
    SEXUAL: "SEXUAL",
    VIOLENCE: "VIOLENCE"
  };
  GuardrailContextualGroundingPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE"
  };
  GuardrailContextualGroundingFilterType = {
    GROUNDING: "GROUNDING",
    RELEVANCE: "RELEVANCE"
  };
  GuardrailSensitiveInformationPolicyAction = {
    ANONYMIZED: "ANONYMIZED",
    BLOCKED: "BLOCKED",
    NONE: "NONE"
  };
  GuardrailPiiEntityType = {
    ADDRESS: "ADDRESS",
    AGE: "AGE",
    AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
    AWS_SECRET_KEY: "AWS_SECRET_KEY",
    CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
    CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
    CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
    CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
    CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
    DRIVER_ID: "DRIVER_ID",
    EMAIL: "EMAIL",
    INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
    IP_ADDRESS: "IP_ADDRESS",
    LICENSE_PLATE: "LICENSE_PLATE",
    MAC_ADDRESS: "MAC_ADDRESS",
    NAME: "NAME",
    PASSWORD: "PASSWORD",
    PHONE: "PHONE",
    PIN: "PIN",
    SWIFT_CODE: "SWIFT_CODE",
    UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
    UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
    UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
    URL: "URL",
    USERNAME: "USERNAME",
    US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
    US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
    US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
    US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
    US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
    VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
  };
  GuardrailTopicPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE"
  };
  GuardrailTopicType = {
    DENY: "DENY"
  };
  GuardrailWordPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE"
  };
  GuardrailManagedWordType = {
    PROFANITY: "PROFANITY"
  };
  GuardrailTrace = {
    DISABLED: "disabled",
    ENABLED: "enabled",
    ENABLED_FULL: "enabled_full"
  };
  AudioFormat = {
    AAC: "aac",
    FLAC: "flac",
    M4A: "m4a",
    MKA: "mka",
    MKV: "mkv",
    MP3: "mp3",
    MP4: "mp4",
    MPEG: "mpeg",
    MPGA: "mpga",
    OGG: "ogg",
    OPUS: "opus",
    PCM: "pcm",
    WAV: "wav",
    WEBM: "webm",
    X_AAC: "x-aac"
  };
  CacheTTL = {
    FIVE_MINUTES: "5m",
    ONE_HOUR: "1h"
  };
  CachePointType = {
    DEFAULT: "default"
  };
  DocumentFormat = {
    CSV: "csv",
    DOC: "doc",
    DOCX: "docx",
    HTML: "html",
    MD: "md",
    PDF: "pdf",
    TXT: "txt",
    XLS: "xls",
    XLSX: "xlsx"
  };
  GuardrailConverseImageFormat = {
    JPEG: "jpeg",
    PNG: "png"
  };
  GuardrailConverseContentQualifier = {
    GROUNDING_SOURCE: "grounding_source",
    GUARD_CONTENT: "guard_content",
    QUERY: "query"
  };
  ImageFormat = {
    GIF: "gif",
    JPEG: "jpeg",
    PNG: "png",
    WEBP: "webp"
  };
  VideoFormat = {
    FLV: "flv",
    MKV: "mkv",
    MOV: "mov",
    MP4: "mp4",
    MPEG: "mpeg",
    MPG: "mpg",
    THREE_GP: "three_gp",
    WEBM: "webm",
    WMV: "wmv"
  };
  ToolResultStatus = {
    ERROR: "error",
    SUCCESS: "success"
  };
  ToolUseType = {
    SERVER_TOOL_USE: "server_tool_use"
  };
  ConversationRole = {
    ASSISTANT: "assistant",
    USER: "user"
  };
  OutputFormatType = {
    JSON_SCHEMA: "json_schema"
  };
  PerformanceConfigLatency = {
    OPTIMIZED: "optimized",
    STANDARD: "standard"
  };
  ServiceTierType = {
    DEFAULT: "default",
    FLEX: "flex",
    PRIORITY: "priority",
    RESERVED: "reserved"
  };
  StopReason = {
    CONTENT_FILTERED: "content_filtered",
    END_TURN: "end_turn",
    GUARDRAIL_INTERVENED: "guardrail_intervened",
    MALFORMED_MODEL_OUTPUT: "malformed_model_output",
    MALFORMED_TOOL_USE: "malformed_tool_use",
    MAX_TOKENS: "max_tokens",
    MODEL_CONTEXT_WINDOW_EXCEEDED: "model_context_window_exceeded",
    STOP_SEQUENCE: "stop_sequence",
    TOOL_USE: "tool_use"
  };
  GuardrailStreamProcessingMode = {
    ASYNC: "async",
    SYNC: "sync"
  };
  Trace = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
    ENABLED_FULL: "ENABLED_FULL"
  };
});

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/models/models_0.js
var init_models_0 = () => {};

// node_modules/.bun/@aws-sdk+client-bedrock-runtime@3.1037.0/node_modules/@aws-sdk/client-bedrock-runtime/dist-es/index.js
var init_dist_es13 = __esm(() => {
  init_BedrockRuntimeServiceException();
  init_BedrockRuntimeClient();
  init_BedrockRuntime();
  init_commands();
  init_schemas_0();
  init_pagination();
  init_enums();
  init_errors();
  init_models_0();
});

export { fromArrayBuffer, fromString, init_dist_es5 as init_dist_es, fromUtf8, toUtf8, init_dist_es6 as init_dist_es1, BedrockRuntimeServiceException, AccessDeniedException, InternalServerException, ThrottlingException, ValidationException, ConflictException, ResourceNotFoundException, ServiceQuotaExceededException, ServiceUnavailableException, ModelErrorException, ModelNotReadyException, ModelTimeoutException, ModelStreamErrorException, BedrockRuntimeServiceException$, AccessDeniedException$, ConflictException$, InternalServerException$, ModelErrorException$, ModelNotReadyException$, ModelStreamErrorException$, ModelTimeoutException$, ResourceNotFoundException$, ServiceQuotaExceededException$, ServiceUnavailableException$, ThrottlingException$, ValidationException$, errorTypeRegistries, AnyToolChoice$, AppliedGuardrailDetails$, ApplyGuardrailRequest$, ApplyGuardrailResponse$, AsyncInvokeS3OutputDataConfig$, AsyncInvokeSummary$, AudioBlock$, AutoToolChoice$, BidirectionalInputPayloadPart$, BidirectionalOutputPayloadPart$, CacheDetail$, CachePointBlock$, Citation$, CitationsConfig$, CitationsContentBlock$, CitationsDelta$, CitationSourceContentDelta$, ContentBlockDeltaEvent$, ContentBlockStartEvent$, ContentBlockStopEvent$, ConverseMetrics$, ConverseRequest$, ConverseResponse$, ConverseStreamMetadataEvent$, ConverseStreamMetrics$, ConverseStreamRequest$, ConverseStreamResponse$, ConverseStreamTrace$, ConverseTokensRequest$, ConverseTrace$, CountTokensRequest$, CountTokensResponse$, DocumentBlock$, DocumentCharLocation$, DocumentChunkLocation$, DocumentPageLocation$, ErrorBlock$, GetAsyncInvokeRequest$, GetAsyncInvokeResponse$, GuardrailAssessment$, GuardrailAutomatedReasoningImpossibleFinding$, GuardrailAutomatedReasoningInputTextReference$, GuardrailAutomatedReasoningInvalidFinding$, GuardrailAutomatedReasoningLogicWarning$, GuardrailAutomatedReasoningNoTranslationsFinding$, GuardrailAutomatedReasoningPolicyAssessment$, GuardrailAutomatedReasoningRule$, GuardrailAutomatedReasoningSatisfiableFinding$, GuardrailAutomatedReasoningScenario$, GuardrailAutomatedReasoningStatement$, GuardrailAutomatedReasoningTooComplexFinding$, GuardrailAutomatedReasoningTranslation$, GuardrailAutomatedReasoningTranslationAmbiguousFinding$, GuardrailAutomatedReasoningTranslationOption$, GuardrailAutomatedReasoningValidFinding$, GuardrailConfiguration$, GuardrailContentFilter$, GuardrailContentPolicyAssessment$, GuardrailContextualGroundingFilter$, GuardrailContextualGroundingPolicyAssessment$, GuardrailConverseImageBlock$, GuardrailConverseTextBlock$, GuardrailCoverage$, GuardrailCustomWord$, GuardrailImageBlock$, GuardrailImageCoverage$, GuardrailInvocationMetrics$, GuardrailManagedWord$, GuardrailOutputContent$, GuardrailPiiEntityFilter$, GuardrailRegexFilter$, GuardrailSensitiveInformationPolicyAssessment$, GuardrailStreamConfiguration$, GuardrailTextBlock$, GuardrailTextCharactersCoverage$, GuardrailTopic$, GuardrailTopicPolicyAssessment$, GuardrailTraceAssessment$, GuardrailUsage$, GuardrailWordPolicyAssessment$, ImageBlock$, ImageBlockDelta$, ImageBlockStart$, InferenceConfiguration$, InvokeModelRequest$, InvokeModelResponse$, InvokeModelTokensRequest$, InvokeModelWithBidirectionalStreamRequest$, InvokeModelWithBidirectionalStreamResponse$, InvokeModelWithResponseStreamRequest$, InvokeModelWithResponseStreamResponse$, JsonSchemaDefinition$, ListAsyncInvokesRequest$, ListAsyncInvokesResponse$, Message$, MessageStartEvent$, MessageStopEvent$, OutputConfig$, OutputFormat$, PayloadPart$, PerformanceConfiguration$, PromptRouterTrace$, ReasoningTextBlock$, S3Location$, SearchResultBlock$, SearchResultContentBlock$, SearchResultLocation$, ServiceTier$, SpecificToolChoice$, StartAsyncInvokeRequest$, StartAsyncInvokeResponse$, SystemTool$, Tag$, TokenUsage$, ToolConfiguration$, ToolResultBlock$, ToolResultBlockStart$, ToolSpecification$, ToolUseBlock$, ToolUseBlockDelta$, ToolUseBlockStart$, VideoBlock$, WebLocation$, AsyncInvokeOutputDataConfig$, AudioSource$, CitationGeneratedContent$, CitationLocation$, CitationSourceContent$, ContentBlock$, ContentBlockDelta$, ContentBlockStart$, ConverseOutput$, ConverseStreamOutput$, CountTokensInput$, DocumentContentBlock$, DocumentSource$, GuardrailAutomatedReasoningFinding$, GuardrailContentBlock$, GuardrailConverseContentBlock$, GuardrailConverseImageSource$, GuardrailImageSource$, ImageSource$, InvokeModelWithBidirectionalStreamInput$, InvokeModelWithBidirectionalStreamOutput$, OutputFormatStructure$, PromptVariableValues$, ReasoningContentBlock$, ReasoningContentBlockDelta$, ResponseStream$, SystemContentBlock$, Tool$, ToolChoice$, ToolInputSchema$, ToolResultBlockDelta$, ToolResultContentBlock$, VideoSource$, ApplyGuardrail$, Converse$, ConverseStream$, CountTokens$, GetAsyncInvoke$, InvokeModel$, InvokeModelWithBidirectionalStream$, InvokeModelWithResponseStream$, ListAsyncInvokes$, StartAsyncInvoke$, import_smithy_client5 as import_smithy_client, BedrockRuntimeClient, ApplyGuardrailCommand, ConverseCommand, ConverseStreamCommand, CountTokensCommand, GetAsyncInvokeCommand, InvokeModelCommand, InvokeModelWithBidirectionalStreamCommand, InvokeModelWithResponseStreamCommand, ListAsyncInvokesCommand, StartAsyncInvokeCommand, paginateListAsyncInvokes, BedrockRuntime, AsyncInvokeStatus, SortAsyncInvocationBy, SortOrder, GuardrailImageFormat, GuardrailContentQualifier, GuardrailOutputScope, GuardrailContentSource, GuardrailAction, GuardrailOrigin, GuardrailOwnership, GuardrailAutomatedReasoningLogicWarningType, GuardrailContentPolicyAction, GuardrailContentFilterConfidence, GuardrailContentFilterStrength, GuardrailContentFilterType, GuardrailContextualGroundingPolicyAction, GuardrailContextualGroundingFilterType, GuardrailSensitiveInformationPolicyAction, GuardrailPiiEntityType, GuardrailTopicPolicyAction, GuardrailTopicType, GuardrailWordPolicyAction, GuardrailManagedWordType, GuardrailTrace, AudioFormat, CacheTTL, CachePointType, DocumentFormat, GuardrailConverseImageFormat, GuardrailConverseContentQualifier, ImageFormat, VideoFormat, ToolResultStatus, ToolUseType, ConversationRole, OutputFormatType, PerformanceConfigLatency, ServiceTierType, StopReason, GuardrailStreamProcessingMode, Trace, init_dist_es13 as init_dist_es2 };
