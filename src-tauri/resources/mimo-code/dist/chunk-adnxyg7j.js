// @bun
import {
  require_src as require_src3
} from "./chunk-djs11qd6.js";
import {
  require_src as require_src4
} from "./chunk-nrv96v1h.js";
import {
  require_src1 as require_src2
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/OTLPExporterBase.js
var require_OTLPExporterBase = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPExporterBase = undefined;

  class OTLPExporterBase {
    _delegate;
    constructor(delegate) {
      this._delegate = delegate;
    }
    export(items, resultCallback) {
      this._delegate.export(items, resultCallback);
    }
    forceFlush() {
      return this._delegate.forceFlush();
    }
    shutdown() {
      return this._delegate.shutdown();
    }
  }
  exports.OTLPExporterBase = OTLPExporterBase;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPExporterError = undefined;

  class OTLPExporterError extends Error {
    code;
    name = "OTLPExporterError";
    data;
    constructor(message, code, data) {
      super(message);
      this.data = data;
      this.code = code;
    }
  }
  exports.OTLPExporterError = OTLPExporterError;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/shared-configuration.js
var require_shared_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSharedConfigurationDefaults = exports.mergeOtlpSharedConfigurationWithDefaults = exports.wrapStaticHeadersInFunction = exports.validateTimeoutMillis = undefined;
  function validateTimeoutMillis(timeoutMillis) {
    if (Number.isFinite(timeoutMillis) && timeoutMillis > 0) {
      return timeoutMillis;
    }
    throw new Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${timeoutMillis}')`);
  }
  exports.validateTimeoutMillis = validateTimeoutMillis;
  function wrapStaticHeadersInFunction(headers) {
    if (headers == null) {
      return;
    }
    return async () => headers;
  }
  exports.wrapStaticHeadersInFunction = wrapStaticHeadersInFunction;
  function mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
    return {
      timeoutMillis: validateTimeoutMillis(userProvidedConfiguration.timeoutMillis ?? fallbackConfiguration.timeoutMillis ?? defaultConfiguration.timeoutMillis),
      concurrencyLimit: userProvidedConfiguration.concurrencyLimit ?? fallbackConfiguration.concurrencyLimit ?? defaultConfiguration.concurrencyLimit,
      compression: userProvidedConfiguration.compression ?? fallbackConfiguration.compression ?? defaultConfiguration.compression
    };
  }
  exports.mergeOtlpSharedConfigurationWithDefaults = mergeOtlpSharedConfigurationWithDefaults;
  function getSharedConfigurationDefaults() {
    return {
      timeoutMillis: 1e4,
      concurrencyLimit: 30,
      compression: "none"
    };
  }
  exports.getSharedConfigurationDefaults = getSharedConfigurationDefaults;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/legacy-node-configuration.js
var require_legacy_node_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CompressionAlgorithm = undefined;
  var CompressionAlgorithm;
  (function(CompressionAlgorithm2) {
    CompressionAlgorithm2["NONE"] = "none";
    CompressionAlgorithm2["GZIP"] = "gzip";
  })(CompressionAlgorithm = exports.CompressionAlgorithm || (exports.CompressionAlgorithm = {}));
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/bounded-queue-export-promise-handler.js
var require_bounded_queue_export_promise_handler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createBoundedQueueExportPromiseHandler = undefined;

  class BoundedQueueExportPromiseHandler {
    _concurrencyLimit;
    _sendingPromises = [];
    constructor(concurrencyLimit) {
      this._concurrencyLimit = concurrencyLimit;
    }
    pushPromise(promise) {
      if (this.hasReachedLimit()) {
        throw new Error("Concurrency Limit reached");
      }
      this._sendingPromises.push(promise);
      const popPromise = () => {
        const index = this._sendingPromises.indexOf(promise);
        this._sendingPromises.splice(index, 1);
      };
      promise.then(popPromise, popPromise);
    }
    hasReachedLimit() {
      return this._sendingPromises.length >= this._concurrencyLimit;
    }
    async awaitAll() {
      await Promise.all(this._sendingPromises);
    }
  }
  function createBoundedQueueExportPromiseHandler(options) {
    return new BoundedQueueExportPromiseHandler(options.concurrencyLimit);
  }
  exports.createBoundedQueueExportPromiseHandler = createBoundedQueueExportPromiseHandler;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/logging-response-handler.js
var require_logging_response_handler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createLoggingPartialSuccessResponseHandler = undefined;
  var api_1 = require_src();
  function isPartialSuccessResponse(response) {
    return Object.prototype.hasOwnProperty.call(response, "partialSuccess");
  }
  function createLoggingPartialSuccessResponseHandler() {
    return {
      handleResponse(response) {
        if (response == null || !isPartialSuccessResponse(response) || response.partialSuccess == null || Object.keys(response.partialSuccess).length === 0) {
          return;
        }
        api_1.diag.warn("Received Partial Success response:", JSON.stringify(response.partialSuccess));
      }
    };
  }
  exports.createLoggingPartialSuccessResponseHandler = createLoggingPartialSuccessResponseHandler;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/otlp-export-delegate.js
var require_otlp_export_delegate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpExportDelegate = undefined;
  var core_1 = require_src2();
  var types_1 = require_types();
  var logging_response_handler_1 = require_logging_response_handler();
  var api_1 = require_src();

  class OTLPExportDelegate {
    _diagLogger;
    _transport;
    _serializer;
    _responseHandler;
    _promiseQueue;
    _timeout;
    constructor(transport, serializer, responseHandler, promiseQueue, timeout) {
      this._transport = transport;
      this._serializer = serializer;
      this._responseHandler = responseHandler;
      this._promiseQueue = promiseQueue;
      this._timeout = timeout;
      this._diagLogger = api_1.diag.createComponentLogger({
        namespace: "OTLPExportDelegate"
      });
    }
    export(internalRepresentation, resultCallback) {
      this._diagLogger.debug("items to be sent", internalRepresentation);
      if (this._promiseQueue.hasReachedLimit()) {
        resultCallback({
          code: core_1.ExportResultCode.FAILED,
          error: new Error("Concurrent export limit reached")
        });
        return;
      }
      const serializedRequest = this._serializer.serializeRequest(internalRepresentation);
      if (serializedRequest == null) {
        resultCallback({
          code: core_1.ExportResultCode.FAILED,
          error: new Error("Nothing to send")
        });
        return;
      }
      this._promiseQueue.pushPromise(this._transport.send(serializedRequest, this._timeout).then((response) => {
        if (response.status === "success") {
          if (response.data != null) {
            try {
              this._responseHandler.handleResponse(this._serializer.deserializeResponse(response.data));
            } catch (e) {
              this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", e, response.data);
            }
          }
          resultCallback({
            code: core_1.ExportResultCode.SUCCESS
          });
          return;
        } else if (response.status === "failure" && response.error) {
          resultCallback({
            code: core_1.ExportResultCode.FAILED,
            error: response.error
          });
          return;
        } else if (response.status === "retryable") {
          resultCallback({
            code: core_1.ExportResultCode.FAILED,
            error: response.error ?? new types_1.OTLPExporterError("Export failed with retryable status")
          });
        } else {
          resultCallback({
            code: core_1.ExportResultCode.FAILED,
            error: new types_1.OTLPExporterError("Export failed with unknown error")
          });
        }
      }, (reason) => resultCallback({
        code: core_1.ExportResultCode.FAILED,
        error: reason
      })));
    }
    forceFlush() {
      return this._promiseQueue.awaitAll();
    }
    async shutdown() {
      this._diagLogger.debug("shutdown started");
      await this.forceFlush();
      this._transport.shutdown();
    }
  }
  function createOtlpExportDelegate(components, settings) {
    return new OTLPExportDelegate(components.transport, components.serializer, (0, logging_response_handler_1.createLoggingPartialSuccessResponseHandler)(), components.promiseHandler, settings.timeout);
  }
  exports.createOtlpExportDelegate = createOtlpExportDelegate;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/otlp-network-export-delegate.js
var require_otlp_network_export_delegate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpNetworkExportDelegate = undefined;
  var bounded_queue_export_promise_handler_1 = require_bounded_queue_export_promise_handler();
  var otlp_export_delegate_1 = require_otlp_export_delegate();
  function createOtlpNetworkExportDelegate(options, serializer, transport) {
    return (0, otlp_export_delegate_1.createOtlpExportDelegate)({
      transport,
      serializer,
      promiseHandler: (0, bounded_queue_export_promise_handler_1.createBoundedQueueExportPromiseHandler)(options)
    }, { timeout: options.timeoutMillis });
  }
  exports.createOtlpNetworkExportDelegate = createOtlpNetworkExportDelegate;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/index.js
var require_src5 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpNetworkExportDelegate = exports.CompressionAlgorithm = exports.getSharedConfigurationDefaults = exports.mergeOtlpSharedConfigurationWithDefaults = exports.OTLPExporterError = exports.OTLPExporterBase = undefined;
  var OTLPExporterBase_1 = require_OTLPExporterBase();
  Object.defineProperty(exports, "OTLPExporterBase", { enumerable: true, get: function() {
    return OTLPExporterBase_1.OTLPExporterBase;
  } });
  var types_1 = require_types();
  Object.defineProperty(exports, "OTLPExporterError", { enumerable: true, get: function() {
    return types_1.OTLPExporterError;
  } });
  var shared_configuration_1 = require_shared_configuration();
  Object.defineProperty(exports, "mergeOtlpSharedConfigurationWithDefaults", { enumerable: true, get: function() {
    return shared_configuration_1.mergeOtlpSharedConfigurationWithDefaults;
  } });
  Object.defineProperty(exports, "getSharedConfigurationDefaults", { enumerable: true, get: function() {
    return shared_configuration_1.getSharedConfigurationDefaults;
  } });
  var legacy_node_configuration_1 = require_legacy_node_configuration();
  Object.defineProperty(exports, "CompressionAlgorithm", { enumerable: true, get: function() {
    return legacy_node_configuration_1.CompressionAlgorithm;
  } });
  var otlp_network_export_delegate_1 = require_otlp_network_export_delegate();
  Object.defineProperty(exports, "createOtlpNetworkExportDelegate", { enumerable: true, get: function() {
    return otlp_network_export_delegate_1.createOtlpNetworkExportDelegate;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/protobuf/utils.js
var require_utils = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.estimateVarintSize = undefined;
  function estimateVarintSize(v) {
    if (v < 0)
      return 10;
    if (v < 128)
      return 1;
    if (v < 16384)
      return 2;
    if (v < 2097152)
      return 3;
    if (v < 268435456)
      return 4;
    if (v < 34359738368)
      return 5;
    if (v < 4398046511104)
      return 6;
    if (v < 562949953421312)
      return 7;
    if (v < 72057594037927940)
      return 8;
    return 9;
  }
  exports.estimateVarintSize = estimateVarintSize;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/protobuf/protobuf-writer.js
var require_protobuf_writer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufWriter = exports.GROWING_BUFFER_DEBUG_MESSAGE = undefined;
  var api_1 = require_src();
  var utils_1 = require_utils();
  exports.GROWING_BUFFER_DEBUG_MESSAGE = "ProtobufWriter: estimated size was too small, growing buffer.";
  var RESERVED_LENGTH_BYTES = 1;

  class ProtobufWriter {
    _buffer;
    _textEncoder;
    _dataView;
    pos = 0;
    constructor(estimatedSize = 65536) {
      this._buffer = new Uint8Array(estimatedSize);
      this._textEncoder = new TextEncoder;
      this._dataView = new DataView(this._buffer.buffer, this._buffer.byteOffset);
    }
    _ensureCapacity(size) {
      const needed = this.pos + size;
      if (needed <= this._buffer.length) {
        return;
      }
      api_1.diag.debug(exports.GROWING_BUFFER_DEBUG_MESSAGE);
      let newSize = this._buffer.length * 2;
      while (newSize < needed) {
        newSize *= 2;
      }
      const newBuffer = new Uint8Array(newSize);
      newBuffer.set(this._buffer);
      this._buffer = newBuffer;
      this._dataView = new DataView(this._buffer.buffer, this._buffer.byteOffset);
    }
    finish() {
      return this._buffer.subarray(0, this.pos);
    }
    startLengthDelimited() {
      const lengthPos = this.pos;
      this._ensureCapacity(RESERVED_LENGTH_BYTES);
      this.pos += RESERVED_LENGTH_BYTES;
      return lengthPos;
    }
    finishLengthDelimited(pos, length) {
      const v = length >>> 0;
      const varintSize = (0, utils_1.estimateVarintSize)(v);
      if (varintSize > RESERVED_LENGTH_BYTES) {
        const additionalBytes = varintSize - RESERVED_LENGTH_BYTES;
        this._ensureCapacity(additionalBytes);
        this._buffer.copyWithin(pos + varintSize, pos + RESERVED_LENGTH_BYTES, this.pos);
        this.pos += additionalBytes;
      }
      let writePos = pos;
      if (v < 128) {
        this._buffer[writePos] = v;
      } else if (v < 16384) {
        this._buffer[writePos++] = v & 127 | 128;
        this._buffer[writePos] = v >>> 7;
      } else if (v < 2097152) {
        this._buffer[writePos++] = v & 127 | 128;
        this._buffer[writePos++] = v >>> 7 & 127 | 128;
        this._buffer[writePos] = v >>> 14;
      } else if (v < 268435456) {
        this._buffer[writePos++] = v & 127 | 128;
        this._buffer[writePos++] = v >>> 7 & 127 | 128;
        this._buffer[writePos++] = v >>> 14 & 127 | 128;
        this._buffer[writePos] = v >>> 21;
      } else {
        this._buffer[writePos++] = v & 127 | 128;
        this._buffer[writePos++] = v >>> 7 & 127 | 128;
        this._buffer[writePos++] = v >>> 14 & 127 | 128;
        this._buffer[writePos++] = v >>> 21 & 127 | 128;
        this._buffer[writePos] = v >>> 28;
      }
    }
    writeVarint(value) {
      this._ensureCapacity((0, utils_1.estimateVarintSize)(value));
      if (value >= 0 && value <= 4294967295) {
        let v = value >>> 0;
        while (v > 127) {
          this._buffer[this.pos++] = v & 127 | 128;
          v >>>= 7;
        }
        this._buffer[this.pos++] = v;
      } else {
        let low;
        let high;
        if (value >= 0) {
          low = value >>> 0;
          high = value / 4294967296 >>> 0;
        } else {
          const abs = Math.abs(value);
          low = abs >>> 0;
          high = abs / 4294967296 >>> 0;
          low = ~low >>> 0;
          high = ~high >>> 0;
          low = low + 1 >>> 0;
          if (low === 0) {
            high = high + 1 >>> 0;
          }
        }
        while (high > 0 || low > 127) {
          this._buffer[this.pos++] = low & 127 | 128;
          low = (low >>> 7 | high << 25) >>> 0;
          high >>>= 7;
        }
        this._buffer[this.pos++] = low & 127;
      }
    }
    writeFixed32(value) {
      this._ensureCapacity(4);
      const v = value >>> 0;
      this._buffer[this.pos++] = v & 255;
      this._buffer[this.pos++] = v >>> 8 & 255;
      this._buffer[this.pos++] = v >>> 16 & 255;
      this._buffer[this.pos++] = v >>> 24 & 255;
    }
    writeFixed64(low, high) {
      this._ensureCapacity(8);
      const l = low >>> 0;
      const h = high >>> 0;
      this._buffer[this.pos++] = l & 255;
      this._buffer[this.pos++] = l >>> 8 & 255;
      this._buffer[this.pos++] = l >>> 16 & 255;
      this._buffer[this.pos++] = l >>> 24 & 255;
      this._buffer[this.pos++] = h & 255;
      this._buffer[this.pos++] = h >>> 8 & 255;
      this._buffer[this.pos++] = h >>> 16 & 255;
      this._buffer[this.pos++] = h >>> 24 & 255;
    }
    writeBytes(bytes) {
      this.writeVarint(bytes.length);
      this._ensureCapacity(bytes.length);
      this._buffer.set(bytes, this.pos);
      this.pos += bytes.length;
    }
    writeTag(fieldNumber, wireType) {
      this.writeVarint(fieldNumber << 3 | wireType);
    }
    writeDouble(value) {
      this._ensureCapacity(8);
      this._dataView.setFloat64(this.pos, value, true);
      this.pos += 8;
    }
    writeString(str) {
      let isAscii = true;
      const len = str.length;
      for (let i = 0;i < len; i++) {
        if (str.charCodeAt(i) > 127) {
          isAscii = false;
          break;
        }
      }
      if (isAscii) {
        this.writeVarint(len);
        this._ensureCapacity(len);
        for (let i = 0;i < len; i++) {
          this._buffer[this.pos++] = str.charCodeAt(i);
        }
      } else {
        const bytes = this._textEncoder.encode(str);
        this.writeBytes(bytes);
      }
    }
  }
  exports.ProtobufWriter = ProtobufWriter;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/hex-to-binary.js
var require_hex_to_binary = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.hexToBinary = undefined;
  function intValue(charCode) {
    if (charCode >= 48 && charCode <= 57) {
      return charCode - 48;
    }
    if (charCode >= 97 && charCode <= 102) {
      return charCode - 87;
    }
    return charCode - 55;
  }
  function hexToBinary(hexStr) {
    const buf = new Uint8Array(hexStr.length / 2);
    let offset = 0;
    for (let i = 0;i < hexStr.length; i += 2) {
      const hi = intValue(hexStr.charCodeAt(i));
      const lo = intValue(hexStr.charCodeAt(i + 1));
      buf[offset++] = hi << 4 | lo;
    }
    return buf;
  }
  exports.hexToBinary = hexToBinary;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/protobuf/common-serializer.js
var require_common_serializer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.writeAnyValue = exports.writeKeyValue = exports.writeAttributes = exports.writeHrTimeAsFixed64 = undefined;
  function writeHrTimeAsFixed64(serializer, hrTime) {
    const seconds = hrTime[0];
    const nanos = hrTime[1];
    const nanosPerSecond = 1e9;
    const secondsLower16Bits = seconds & 65535;
    const secondsUpperBits = seconds / 65536 >>> 0;
    const nanosFromLower16Bits = secondsLower16Bits * nanosPerSecond;
    const nanosFromUpperBits = secondsUpperBits * nanosPerSecond;
    const lower16ContributionLow32 = nanosFromLower16Bits >>> 0;
    const lower16ContributionHigh32 = Math.floor(nanosFromLower16Bits / 4294967296);
    const upperBitsContributionLow32 = (nanosFromUpperBits & 65535) * 65536 >>> 0;
    const upperBitsContributionHigh32 = nanosFromUpperBits / 65536 >>> 0;
    const low32WithCarry = lower16ContributionLow32 + upperBitsContributionLow32 + nanos;
    const totalLow = low32WithCarry >>> 0;
    const carry = Math.floor(low32WithCarry / 4294967296);
    const totalHigh = lower16ContributionHigh32 + upperBitsContributionHigh32 + carry >>> 0;
    serializer.writeFixed64(totalLow, totalHigh);
  }
  exports.writeHrTimeAsFixed64 = writeHrTimeAsFixed64;
  function writeAttributes(writer, attributes, fieldNumber) {
    for (const key in attributes) {
      if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
        continue;
      }
      const value = attributes[key];
      writer.writeTag(fieldNumber, 2);
      const kvStart = writer.startLengthDelimited();
      const startPos = writer.pos;
      writeKeyValue(writer, key, value);
      writer.finishLengthDelimited(kvStart, writer.pos - startPos);
    }
  }
  exports.writeAttributes = writeAttributes;
  function writeKeyValue(writer, key, value) {
    writer.writeTag(1, 2);
    writer.writeString(key);
    writer.writeTag(2, 2);
    const valueStart = writer.startLengthDelimited();
    const startPos = writer.pos;
    writeAnyValue(writer, value);
    writer.finishLengthDelimited(valueStart, writer.pos - startPos);
  }
  exports.writeKeyValue = writeKeyValue;
  var MIN_64_BIT_INT = -(2 ** 63);
  var MAX_64_BIT_INT = 2 ** 63;
  function writeAnyValue(writer, value) {
    const t = typeof value;
    if (t === "string") {
      writer.writeTag(1, 2);
      writer.writeString(value);
    } else if (t === "boolean") {
      writer.writeTag(2, 0);
      writer.writeVarint(value ? 1 : 0);
    } else if (t === "number") {
      const numValue = value;
      if (Number.isInteger(numValue) && numValue >= MIN_64_BIT_INT && numValue < MAX_64_BIT_INT) {
        writer.writeTag(3, 0);
        writer.writeVarint(numValue);
      } else {
        writer.writeTag(4, 1);
        writer.writeDouble(numValue);
      }
    } else if (value instanceof Uint8Array) {
      writer.writeTag(7, 2);
      writer.writeBytes(value);
    } else if (Array.isArray(value)) {
      writer.writeTag(5, 2);
      const arrayStart = writer.startLengthDelimited();
      const arrayStartPos = writer.pos;
      for (const item of value) {
        writer.writeTag(1, 2);
        const itemStart = writer.startLengthDelimited();
        const itemStartPos = writer.pos;
        writeAnyValue(writer, item);
        writer.finishLengthDelimited(itemStart, writer.pos - itemStartPos);
      }
      writer.finishLengthDelimited(arrayStart, writer.pos - arrayStartPos);
    } else if (t === "object" && value != null) {
      writer.writeTag(6, 2);
      const kvlistStart = writer.startLengthDelimited();
      const kvlistStartPos = writer.pos;
      const obj = value;
      for (const k in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, k)) {
          continue;
        }
        const v = obj[k];
        writer.writeTag(1, 2);
        const kvStart = writer.startLengthDelimited();
        const kvStartPos = writer.pos;
        writer.writeTag(1, 2);
        writer.writeString(k);
        writer.writeTag(2, 2);
        const valueStart = writer.startLengthDelimited();
        const valueStartPos = writer.pos;
        writeAnyValue(writer, v);
        writer.finishLengthDelimited(valueStart, writer.pos - valueStartPos);
        writer.finishLengthDelimited(kvStart, writer.pos - kvStartPos);
      }
      writer.finishLengthDelimited(kvlistStart, writer.pos - kvlistStartPos);
    }
  }
  exports.writeAnyValue = writeAnyValue;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/protobuf/protobuf-size-estimator.js
var require_protobuf_size_estimator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufSizeEstimator = undefined;
  var utils_1 = require_utils();
  function utf8ByteLength(str) {
    const len = str.length;
    let byteLen = 0;
    for (let i = 0;i < len; i++) {
      const code = str.charCodeAt(i);
      if (code < 128) {
        byteLen += 1;
      } else if (code < 2048) {
        byteLen += 2;
      } else if (code < 55296 || code >= 57344) {
        byteLen += 3;
      } else {
        i++;
        byteLen += 4;
      }
    }
    return byteLen;
  }

  class ProtobufSizeEstimator {
    pos = 0;
    startLengthDelimited() {
      return this.pos;
    }
    finishLengthDelimited(_, length) {
      this.pos += (0, utils_1.estimateVarintSize)(length);
    }
    writeVarint(value) {
      this.pos += (0, utils_1.estimateVarintSize)(value);
    }
    writeFixed32(_value) {
      this.pos += 4;
    }
    writeFixed64(_low, _high) {
      this.pos += 8;
    }
    writeBytes(bytes) {
      this.pos += (0, utils_1.estimateVarintSize)(bytes.length);
      this.pos += bytes.length;
    }
    writeTag(fieldNumber, wireType) {
      this.writeVarint(fieldNumber << 3 | wireType);
    }
    writeDouble(_value) {
      this.pos += 8;
    }
    writeString(str) {
      const byteLen = utf8ByteLength(str);
      this.pos += (0, utils_1.estimateVarintSize)(byteLen);
      this.pos += byteLen;
    }
  }
  exports.ProtobufSizeEstimator = ProtobufSizeEstimator;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/protobuf/logs-serializer.js
var require_logs_serializer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.serializeLogsExportRequest = undefined;
  var protobuf_writer_1 = require_protobuf_writer();
  var hex_to_binary_1 = require_hex_to_binary();
  var api_logs_1 = require_src3();
  var common_serializer_1 = require_common_serializer();
  var protobuf_size_estimator_1 = require_protobuf_size_estimator();
  function serializeLogRecord(writer, logRecord) {
    const logStart = writer.startLengthDelimited();
    const logStartPos = writer.pos;
    writer.writeTag(1, 1);
    (0, common_serializer_1.writeHrTimeAsFixed64)(writer, logRecord.hrTime);
    if (logRecord.severityNumber !== undefined && logRecord.severityNumber !== api_logs_1.SeverityNumber.UNSPECIFIED) {
      writer.writeTag(2, 0);
      writer.writeVarint(logRecord.severityNumber);
    }
    if (logRecord.severityText) {
      writer.writeTag(3, 2);
      writer.writeString(logRecord.severityText);
    }
    if (logRecord.body !== undefined) {
      writer.writeTag(5, 2);
      const bodyStart = writer.startLengthDelimited();
      const bodyStartPos = writer.pos;
      (0, common_serializer_1.writeAnyValue)(writer, logRecord.body);
      writer.finishLengthDelimited(bodyStart, writer.pos - bodyStartPos);
    }
    if (logRecord.attributes) {
      (0, common_serializer_1.writeAttributes)(writer, logRecord.attributes, 6);
    }
    writer.writeTag(7, 0);
    writer.writeVarint(logRecord.droppedAttributesCount);
    if (logRecord.spanContext?.traceFlags) {
      writer.writeTag(8, 5);
      writer.writeFixed32(logRecord.spanContext.traceFlags);
    }
    if (logRecord.spanContext?.traceId) {
      writer.writeTag(9, 2);
      writer.writeBytes((0, hex_to_binary_1.hexToBinary)(logRecord.spanContext.traceId));
    }
    if (logRecord.spanContext?.spanId) {
      writer.writeTag(10, 2);
      writer.writeBytes((0, hex_to_binary_1.hexToBinary)(logRecord.spanContext.spanId));
    }
    writer.writeTag(11, 1);
    (0, common_serializer_1.writeHrTimeAsFixed64)(writer, logRecord.hrTimeObserved);
    if (logRecord.eventName) {
      writer.writeTag(12, 2);
      writer.writeString(logRecord.eventName);
    }
    writer.finishLengthDelimited(logStart, writer.pos - logStartPos);
  }
  function serializeScopeLogs(writer, scope, logRecords) {
    const scopeLogsStart = writer.startLengthDelimited();
    const scopeLogsStartPos = writer.pos;
    writer.writeTag(1, 2);
    const scopeStart = writer.startLengthDelimited();
    const scopeStartPos = writer.pos;
    writer.writeTag(1, 2);
    writer.writeString(scope.name);
    if (scope.version) {
      writer.writeTag(2, 2);
      writer.writeString(scope.version);
    }
    writer.finishLengthDelimited(scopeStart, writer.pos - scopeStartPos);
    for (const logRecord of logRecords) {
      writer.writeTag(2, 2);
      serializeLogRecord(writer, logRecord);
    }
    if (scope.schemaUrl) {
      writer.writeTag(3, 2);
      writer.writeString(scope.schemaUrl);
    }
    writer.finishLengthDelimited(scopeLogsStart, writer.pos - scopeLogsStartPos);
  }
  function serializeResource(writer, resource, fieldNumber) {
    writer.writeTag(fieldNumber, 2);
    const resourceStart = writer.startLengthDelimited();
    const resourceStartPos = writer.pos;
    if (resource.attributes) {
      (0, common_serializer_1.writeAttributes)(writer, resource.attributes, 1);
    }
    writer.writeTag(2, 0);
    writer.writeVarint(0);
    writer.finishLengthDelimited(resourceStart, writer.pos - resourceStartPos);
  }
  function serializeResourceLogs(writer, resource, scopeMap) {
    const resourceLogsStart = writer.startLengthDelimited();
    const resourceLogsStartPos = writer.pos;
    serializeResource(writer, resource, 1);
    for (const scopeLogs of scopeMap.values()) {
      writer.writeTag(2, 2);
      const scope = scopeLogs[0].instrumentationScope;
      serializeScopeLogs(writer, scope, scopeLogs);
    }
    if (resource.schemaUrl) {
      writer.writeTag(3, 2);
      writer.writeString(resource.schemaUrl);
    }
    writer.finishLengthDelimited(resourceLogsStart, writer.pos - resourceLogsStartPos);
  }
  function createResourceMap(logRecords) {
    const resourceMap = new Map;
    for (const record of logRecords) {
      const resource = record.resource;
      const scope = record.instrumentationScope;
      let ismMap = resourceMap.get(resource);
      if (!ismMap) {
        ismMap = new Map;
        resourceMap.set(resource, ismMap);
      }
      let records = ismMap.get(scope);
      if (!records) {
        records = [];
        ismMap.set(scope, records);
      }
      records.push(record);
    }
    return resourceMap;
  }
  function serializeLogsExportRequest(logRecords) {
    const resourceMap = createResourceMap(logRecords);
    const estimator = new protobuf_size_estimator_1.ProtobufSizeEstimator;
    for (const [resource, scopeMap] of resourceMap) {
      estimator.writeTag(1, 2);
      serializeResourceLogs(estimator, resource, scopeMap);
    }
    const writer = new protobuf_writer_1.ProtobufWriter(estimator.pos);
    for (const [resource, scopeMap] of resourceMap) {
      writer.writeTag(1, 2);
      serializeResourceLogs(writer, resource, scopeMap);
    }
    return writer.finish();
  }
  exports.serializeLogsExportRequest = serializeLogsExportRequest;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/protobuf/protobuf-reader.js
var require_protobuf_reader = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufReader = undefined;

  class ProtobufReader {
    pos = 0;
    _buf;
    _textDecoder;
    constructor(buf) {
      this._buf = buf;
      this._textDecoder = new TextDecoder;
    }
    isAtEnd() {
      return this.pos >= this._buf.length;
    }
    readTag() {
      const raw = this.readVarint();
      return { fieldNumber: raw >>> 3, wireType: raw & 7 };
    }
    readVarint() {
      let result = 0;
      let shift = 0;
      while (this.pos < this._buf.length) {
        const b = this._buf[this.pos++];
        result += (b & 127) * Math.pow(2, shift);
        shift += 7;
        if ((b & 128) === 0)
          break;
      }
      return result;
    }
    readBytes() {
      const len = this.readVarint();
      const slice = this._buf.subarray(this.pos, this.pos + len);
      this.pos += len;
      return slice;
    }
    readString() {
      return this._textDecoder.decode(this.readBytes());
    }
    skip(wireType) {
      switch (wireType) {
        case 0:
          this.readVarint();
          break;
        case 1:
          this.pos += 8;
          break;
        case 2:
          this.readBytes();
          break;
        case 3:
          while (!this.isAtEnd()) {
            const { wireType: nestedWireType } = this.readTag();
            if (nestedWireType === 4) {
              break;
            }
            this.skip(nestedWireType);
          }
          break;
        case 4:
          break;
        case 5:
          this.pos += 4;
          break;
        default:
          throw new Error(`Unknown wire type ${wireType}, cannot safely skip`);
      }
    }
  }
  exports.ProtobufReader = ProtobufReader;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/protobuf/response-deserializer.js
var require_response_deserializer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.deserializeExportLogsServiceResponse = undefined;
  var protobuf_reader_1 = require_protobuf_reader();
  function deserializePartialSuccess(data) {
    const reader = new protobuf_reader_1.ProtobufReader(data);
    const result = {};
    while (!reader.isAtEnd()) {
      const { fieldNumber, wireType } = reader.readTag();
      switch (fieldNumber) {
        case 1:
          if (wireType === 0) {
            result.rejectedLogRecords = reader.readVarint();
          } else {
            reader.skip(wireType);
          }
          break;
        case 2:
          if (wireType === 2) {
            result.errorMessage = reader.readString();
          } else {
            reader.skip(wireType);
          }
          break;
        default:
          reader.skip(wireType);
          break;
      }
    }
    return result;
  }
  function deserializeExportLogsServiceResponse(data) {
    const reader = new protobuf_reader_1.ProtobufReader(data);
    const result = {};
    while (!reader.isAtEnd()) {
      const { fieldNumber, wireType } = reader.readTag();
      switch (fieldNumber) {
        case 1:
          if (wireType === 2) {
            result.partialSuccess = deserializePartialSuccess(reader.readBytes());
          } else {
            reader.skip(wireType);
          }
          break;
        default:
          reader.skip(wireType);
          break;
      }
    }
    return result;
  }
  exports.deserializeExportLogsServiceResponse = deserializeExportLogsServiceResponse;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/protobuf/logs.js
var require_logs = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufLogsSerializer = undefined;
  var logs_serializer_1 = require_logs_serializer();
  var response_deserializer_1 = require_response_deserializer();
  exports.ProtobufLogsSerializer = {
    serializeRequest: (arg) => {
      return (0, logs_serializer_1.serializeLogsExportRequest)(arg);
    },
    deserializeResponse: (arg) => {
      return (0, response_deserializer_1.deserializeExportLogsServiceResponse)(arg);
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/protobuf/index.js
var require_protobuf = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufLogsSerializer = undefined;
  var logs_1 = require_logs();
  Object.defineProperty(exports, "ProtobufLogsSerializer", { enumerable: true, get: function() {
    return logs_1.ProtobufLogsSerializer;
  } });
});

// node_modules/.bun/@protobufjs+aspromise@1.1.2/node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS((exports, module) => {
  module.exports = asPromise;
  function asPromise(fn, ctx) {
    var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
    while (index < arguments.length)
      params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
      params[offset] = function callback(err) {
        if (pending) {
          pending = false;
          if (err)
            reject(err);
          else {
            var params2 = new Array(arguments.length - 1), offset2 = 0;
            while (offset2 < params2.length)
              params2[offset2++] = arguments[offset2];
            resolve.apply(null, params2);
          }
        }
      };
      try {
        fn.apply(ctx || null, params);
      } catch (err) {
        if (pending) {
          pending = false;
          reject(err);
        }
      }
    });
  }
});

// node_modules/.bun/@protobufjs+base64@1.1.2/node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS((exports) => {
  var base64 = exports;
  base64.length = function length(string) {
    var p = string.length;
    if (!p)
      return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
      ++n;
    return Math.ceil(string.length * 3) / 4 - n;
  };
  var b64 = new Array(64);
  var s64 = new Array(123);
  for (i = 0;i < 64; )
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
  var i;
  base64.encode = function encode(buffer, start, end) {
    var parts = null, chunk = [];
    var i2 = 0, j = 0, t;
    while (start < end) {
      var b = buffer[start++];
      switch (j) {
        case 0:
          chunk[i2++] = b64[b >> 2];
          t = (b & 3) << 4;
          j = 1;
          break;
        case 1:
          chunk[i2++] = b64[t | b >> 4];
          t = (b & 15) << 2;
          j = 2;
          break;
        case 2:
          chunk[i2++] = b64[t | b >> 6];
          chunk[i2++] = b64[b & 63];
          j = 0;
          break;
      }
      if (i2 > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i2 = 0;
      }
    }
    if (j) {
      chunk[i2++] = b64[t];
      chunk[i2++] = 61;
      if (j === 1)
        chunk[i2++] = 61;
    }
    if (parts) {
      if (i2)
        parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
      return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i2));
  };
  var invalidEncoding = "invalid encoding";
  base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, t;
    for (var i2 = 0;i2 < string.length; ) {
      var c = string.charCodeAt(i2++);
      if (c === 61 && j > 1)
        break;
      if ((c = s64[c]) === undefined)
        throw Error(invalidEncoding);
      switch (j) {
        case 0:
          t = c;
          j = 1;
          break;
        case 1:
          buffer[offset++] = t << 2 | (c & 48) >> 4;
          t = c;
          j = 2;
          break;
        case 2:
          buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
          t = c;
          j = 3;
          break;
        case 3:
          buffer[offset++] = (t & 3) << 6 | c;
          j = 0;
          break;
      }
    }
    if (j === 1)
      throw Error(invalidEncoding);
    return offset - start;
  };
  base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
  };
});

// node_modules/.bun/@protobufjs+eventemitter@1.1.0/node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS((exports, module) => {
  module.exports = EventEmitter;
  function EventEmitter() {
    this._listeners = {};
  }
  EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
      fn,
      ctx: ctx || this
    });
    return this;
  };
  EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
      this._listeners = {};
    else {
      if (fn === undefined)
        this._listeners[evt] = [];
      else {
        var listeners = this._listeners[evt];
        for (var i = 0;i < listeners.length; )
          if (listeners[i].fn === fn)
            listeners.splice(i, 1);
          else
            ++i;
      }
    }
    return this;
  };
  EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
      var args = [], i = 1;
      for (;i < arguments.length; )
        args.push(arguments[i++]);
      for (i = 0;i < listeners.length; )
        listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
  };
});

// node_modules/.bun/@protobufjs+float@1.0.2/node_modules/@protobufjs/float/index.js
var require_float = __commonJS((exports, module) => {
  module.exports = factory(factory);
  function factory(exports2) {
    if (typeof Float32Array !== "undefined")
      (function() {
        var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports2.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports2.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports2.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports2.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      })();
    else
      (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0)
            writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos);
          else if (isNaN(val))
            writeUint(2143289344, buf, pos);
          else if (val > 340282346638528860000000000000000000000)
            writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
          else if (val < 0.000000000000000000000000000000000000011754943508222875)
            writeUint((sign << 31 | Math.round(val / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, buf, pos);
          else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports2.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports2.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
          return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 0.000000000000000000000000000000000000000000001401298464324817 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports2.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports2.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      })();
    if (typeof Float64Array !== "undefined")
      (function() {
        var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports2.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports2.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports2.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports2.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      })();
    else
      (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) {
              mantissa = val / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              if (exponent === 1024)
                exponent = 1023;
              mantissa = val * Math.pow(2, -exponent);
              writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports2.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports2.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
          return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports2.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports2.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      })();
    return exports2;
  }
  function writeUintLE(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  }
  function writeUintBE(val, buf, pos) {
    buf[pos] = val >>> 24;
    buf[pos + 1] = val >>> 16 & 255;
    buf[pos + 2] = val >>> 8 & 255;
    buf[pos + 3] = val & 255;
  }
  function readUintLE(buf, pos) {
    return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
  }
  function readUintBE(buf, pos) {
    return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
  }
});

// node_modules/.bun/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js
var require_inquire = __commonJS((exports, module) => {
  module.exports = inquire;
  function inquire(moduleName) {
    try {
      var mod = eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length))
        return mod;
    } catch (e) {}
    return null;
  }
});

// node_modules/.bun/@protobufjs+utf8@1.1.0/node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS((exports) => {
  var utf8 = exports;
  utf8.length = function utf8_length(string) {
    var len = 0, c = 0;
    for (var i = 0;i < string.length; ++i) {
      c = string.charCodeAt(i);
      if (c < 128)
        len += 1;
      else if (c < 2048)
        len += 2;
      else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
        ++i;
        len += 4;
      } else
        len += 3;
    }
    return len;
  };
  utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
      return "";
    var parts = null, chunk = [], i = 0, t;
    while (start < end) {
      t = buffer[start++];
      if (t < 128)
        chunk[i++] = t;
      else if (t > 191 && t < 224)
        chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
      else if (t > 239 && t < 365) {
        t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
        chunk[i++] = 55296 + (t >> 10);
        chunk[i++] = 56320 + (t & 1023);
      } else
        chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
      if (i > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i = 0;
      }
    }
    if (parts) {
      if (i)
        parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
      return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
  };
  utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset, c1, c2;
    for (var i = 0;i < string.length; ++i) {
      c1 = string.charCodeAt(i);
      if (c1 < 128) {
        buffer[offset++] = c1;
      } else if (c1 < 2048) {
        buffer[offset++] = c1 >> 6 | 192;
        buffer[offset++] = c1 & 63 | 128;
      } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
        c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
        ++i;
        buffer[offset++] = c1 >> 18 | 240;
        buffer[offset++] = c1 >> 12 & 63 | 128;
        buffer[offset++] = c1 >> 6 & 63 | 128;
        buffer[offset++] = c1 & 63 | 128;
      } else {
        buffer[offset++] = c1 >> 12 | 224;
        buffer[offset++] = c1 >> 6 & 63 | 128;
        buffer[offset++] = c1 & 63 | 128;
      }
    }
    return offset - start;
  };
});

// node_modules/.bun/@protobufjs+pool@1.1.0/node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS((exports, module) => {
  module.exports = pool;
  function pool(alloc, slice, size) {
    var SIZE = size || 8192;
    var MAX = SIZE >>> 1;
    var slab = null;
    var offset = SIZE;
    return function pool_alloc(size2) {
      if (size2 < 1 || size2 > MAX)
        return alloc(size2);
      if (offset + size2 > SIZE) {
        slab = alloc(SIZE);
        offset = 0;
      }
      var buf = slice.call(slab, offset, offset += size2);
      if (offset & 7)
        offset = (offset | 7) + 1;
      return buf;
    };
  }
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS((exports, module) => {
  module.exports = LongBits;
  var util = require_minimal();
  function LongBits(lo, hi) {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  }
  var zero = LongBits.zero = new LongBits(0, 0);
  zero.toNumber = function() {
    return 0;
  };
  zero.zzEncode = zero.zzDecode = function() {
    return this;
  };
  zero.length = function() {
    return 1;
  };
  var zeroHash = LongBits.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
  LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
      return zero;
    var sign = value < 0;
    if (sign)
      value = -value;
    var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295)
          hi = 0;
      }
    }
    return new LongBits(lo, hi);
  };
  LongBits.from = function from(value) {
    if (typeof value === "number")
      return LongBits.fromNumber(value);
    if (util.isString(value)) {
      if (util.Long)
        value = util.Long.fromString(value);
      else
        return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
  };
  LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
      var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
      if (!lo)
        hi = hi + 1 >>> 0;
      return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
  };
  var charCodeAt = String.prototype.charCodeAt;
  LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
      return zero;
    return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
  };
  LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  LongBits.prototype.zzEncode = function zzEncode() {
    var mask = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo = (this.lo << 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi = (this.hi >>> 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.length = function length() {
    var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
    return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
  };
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS((exports) => {
  var util = exports;
  util.asPromise = require_aspromise();
  util.base64 = require_base64();
  util.EventEmitter = require_eventemitter();
  util.float = require_float();
  util.inquire = require_inquire();
  util.utf8 = require_utf8();
  util.pool = require_pool();
  util.LongBits = require_longbits();
  util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
  util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports;
  util.emptyArray = Object.freeze ? Object.freeze([]) : [];
  util.emptyObject = Object.freeze ? Object.freeze({}) : {};
  util.isInteger = Number.isInteger || function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
  };
  util.isObject = function isObject(value) {
    return value && typeof value === "object";
  };
  util.isset = util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop))
      return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
  };
  util.Buffer = function() {
    try {
      var Buffer2 = util.inquire("buffer").Buffer;
      return Buffer2.prototype.utf8Write ? Buffer2 : null;
    } catch (e) {
      return null;
    }
  }();
  util._Buffer_from = null;
  util._Buffer_allocUnsafe = null;
  util.newBuffer = function newBuffer(sizeOrArray) {
    return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
  };
  util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  util.Long = util.global.dcodeIO && util.global.dcodeIO.Long || util.global.Long || util.inquire("long");
  util.key2Re = /^true|false|0|1$/;
  util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  util.longToHash = function longToHash(value) {
    return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
  };
  util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
      return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
  };
  function merge(dst, src, ifNotSet) {
    for (var keys = Object.keys(src), i = 0;i < keys.length; ++i)
      if (dst[keys[i]] === undefined || !ifNotSet)
        dst[keys[i]] = src[keys[i]];
    return dst;
  }
  util.merge = merge;
  util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
  };
  function newError(name) {
    function CustomError(message, properties) {
      if (!(this instanceof CustomError))
        return new CustomError(message, properties);
      Object.defineProperty(this, "message", { get: function() {
        return message;
      } });
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, CustomError);
      else
        Object.defineProperty(this, "stack", { value: new Error().stack || "" });
      if (properties)
        merge(this, properties);
    }
    CustomError.prototype = Object.create(Error.prototype, {
      constructor: {
        value: CustomError,
        writable: true,
        enumerable: false,
        configurable: true
      },
      name: {
        get: function get() {
          return name;
        },
        set: undefined,
        enumerable: false,
        configurable: true
      },
      toString: {
        value: function value() {
          return this.name + ": " + this.message;
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });
    return CustomError;
  }
  util.newError = newError;
  util.ProtocolError = newError("ProtocolError");
  util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0;i < fieldNames.length; ++i)
      fieldMap[fieldNames[i]] = 1;
    return function() {
      for (var keys = Object.keys(this), i2 = keys.length - 1;i2 > -1; --i2)
        if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== undefined && this[keys[i2]] !== null)
          return keys[i2];
    };
  };
  util.oneOfSetter = function setOneOf(fieldNames) {
    return function(name) {
      for (var i = 0;i < fieldNames.length; ++i)
        if (fieldNames[i] !== name)
          delete this[fieldNames[i]];
    };
  };
  util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
  };
  util._configure = function() {
    var Buffer2 = util.Buffer;
    if (!Buffer2) {
      util._Buffer_from = util._Buffer_allocUnsafe = null;
      return;
    }
    util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || function Buffer_from(value, encoding) {
      return new Buffer2(value, encoding);
    };
    util._Buffer_allocUnsafe = Buffer2.allocUnsafe || function Buffer_allocUnsafe(size) {
      return new Buffer2(size);
    };
  };
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/writer.js
var require_writer = __commonJS((exports, module) => {
  module.exports = Writer;
  var util = require_minimal();
  var BufferWriter;
  var LongBits = util.LongBits;
  var base64 = util.base64;
  var utf8 = util.utf8;
  function Op(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.next = undefined;
    this.val = val;
  }
  function noop() {}
  function State(writer) {
    this.head = writer.head;
    this.tail = writer.tail;
    this.len = writer.len;
    this.next = writer.states;
  }
  function Writer() {
    this.len = 0;
    this.head = new Op(noop, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  var create = function create2() {
    return util.Buffer ? function create_buffer_setup() {
      return (Writer.create = function create_buffer() {
        return new BufferWriter;
      })();
    } : function create_array() {
      return new Writer;
    };
  };
  Writer.create = create();
  Writer.alloc = function alloc(size) {
    return new util.Array(size);
  };
  if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
  Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  };
  function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
  }
  function writeVarint32(val, buf, pos) {
    while (val > 127) {
      buf[pos++] = val & 127 | 128;
      val >>>= 7;
    }
    buf[pos] = val;
  }
  function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
  }
  VarintOp.prototype = Object.create(Op.prototype);
  VarintOp.prototype.fn = writeVarint32;
  Writer.prototype.uint32 = function write_uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
    return this;
  };
  Writer.prototype.int32 = function write_int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
  };
  Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
  };
  function writeVarint64(val, buf, pos) {
    while (val.hi) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
      val.hi >>>= 7;
    }
    while (val.lo > 127) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
  }
  Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.int64 = Writer.prototype.uint64;
  Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
  };
  function writeFixed32(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  }
  Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
  };
  Writer.prototype.sfixed32 = Writer.prototype.fixed32;
  Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
  };
  Writer.prototype.sfixed64 = Writer.prototype.fixed64;
  Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
  };
  Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
  };
  var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
    buf.set(val, pos);
  } : function writeBytes_for(val, buf, pos) {
    for (var i = 0;i < val.length; ++i)
      buf[pos + i] = val[i];
  };
  Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
      return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
      var buf = Writer.alloc(len = base64.length(value));
      base64.decode(value, buf, 0);
      value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
  };
  Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
  };
  Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
  };
  Writer.prototype.reset = function reset() {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
    }
    return this;
  };
  Writer.prototype.ldelim = function ldelim() {
    var head = this.head, tail = this.tail, len = this.len;
    this.reset().uint32(len);
    if (len) {
      this.tail.next = head.next;
      this.tail = tail;
      this.len += len;
    }
    return this;
  };
  Writer.prototype.finish = function finish() {
    var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
    while (head) {
      head.fn(head.val, buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  };
  Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
  };
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS((exports, module) => {
  module.exports = BufferWriter;
  var Writer = require_writer();
  (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
  var util = require_minimal();
  function BufferWriter() {
    Writer.call(this);
  }
  BufferWriter._configure = function() {
    BufferWriter.alloc = util._Buffer_allocUnsafe;
    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytesBuffer_copy(val, buf, pos) {
      if (val.copy)
        val.copy(buf, pos, 0, val.length);
      else
        for (var i = 0;i < val.length; )
          buf[pos++] = val[i++];
    };
  };
  BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
      value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
      this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
  };
  function writeStringBuffer(val, buf, pos) {
    if (val.length < 40)
      util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
      buf.utf8Write(val, pos);
    else
      buf.write(val, pos);
  }
  BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
      this._push(writeStringBuffer, len, value);
    return this;
  };
  BufferWriter._configure();
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/reader.js
var require_reader = __commonJS((exports, module) => {
  module.exports = Reader;
  var util = require_minimal();
  var BufferReader;
  var LongBits = util.LongBits;
  var utf8 = util.utf8;
  function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
  }
  function Reader(buffer) {
    this.buf = buffer;
    this.pos = 0;
    this.len = buffer.length;
  }
  var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
    if (buffer instanceof Uint8Array || Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  } : function create_array2(buffer) {
    if (Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  };
  var create = function create2() {
    return util.Buffer ? function create_buffer_setup(buffer) {
      return (Reader.create = function create_buffer(buffer2) {
        return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
      })(buffer);
    } : create_array;
  };
  Reader.create = create();
  Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
  Reader.prototype.uint32 = function read_uint32_setup() {
    var value = 4294967295;
    return function read_uint32() {
      value = (this.buf[this.pos] & 127) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      if ((this.pos += 5) > this.len) {
        this.pos = this.len;
        throw indexOutOfRange(this, 10);
      }
      return value;
    };
  }();
  Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
  };
  Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
  };
  function readLongVarint() {
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) {
      for (;i < 4; ++i) {
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
      i = 0;
    } else {
      for (;i < 3; ++i) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
      return bits;
    }
    if (this.len - this.pos > 4) {
      for (;i < 5; ++i) {
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    } else {
      for (;i < 5; ++i) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    }
    throw Error("invalid varint encoding");
  }
  Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
  };
  function readFixed32_end(buf, end) {
    return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
  }
  Reader.prototype.fixed32 = function read_fixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4);
  };
  Reader.prototype.sfixed32 = function read_sfixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4) | 0;
  };
  function readFixed64() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 8);
    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  }
  Reader.prototype.float = function read_float() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
  };
  Reader.prototype.double = function read_double() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
  };
  Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(), start = this.pos, end = this.pos + length;
    if (end > this.len)
      throw indexOutOfRange(this, length);
    this.pos += length;
    if (Array.isArray(this.buf))
      return this.buf.slice(start, end);
    if (start === end) {
      var nativeBuffer = util.Buffer;
      return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, start, end);
  };
  Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
  };
  Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
      if (this.pos + length > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
    } else {
      do {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((wireType = this.uint32() & 7) !== 4) {
          this.skipType(wireType);
        }
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
  };
  Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();
    var fn = util.Long ? "toLong" : "toNumber";
    util.merge(Reader.prototype, {
      int64: function read_int64() {
        return readLongVarint.call(this)[fn](false);
      },
      uint64: function read_uint64() {
        return readLongVarint.call(this)[fn](true);
      },
      sint64: function read_sint64() {
        return readLongVarint.call(this).zzDecode()[fn](false);
      },
      fixed64: function read_fixed64() {
        return readFixed64.call(this)[fn](true);
      },
      sfixed64: function read_sfixed64() {
        return readFixed64.call(this)[fn](false);
      }
    });
  };
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS((exports, module) => {
  module.exports = BufferReader;
  var Reader = require_reader();
  (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
  var util = require_minimal();
  function BufferReader(buffer) {
    Reader.call(this, buffer);
  }
  BufferReader._configure = function() {
    if (util.Buffer)
      BufferReader.prototype._slice = util.Buffer.prototype.slice;
  };
  BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
  };
  BufferReader._configure();
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS((exports, module) => {
  module.exports = Service;
  var util = require_minimal();
  (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
  function Service(rpcImpl, requestDelimited, responseDelimited) {
    if (typeof rpcImpl !== "function")
      throw TypeError("rpcImpl must be a function");
    util.EventEmitter.call(this);
    this.rpcImpl = rpcImpl;
    this.requestDelimited = Boolean(requestDelimited);
    this.responseDelimited = Boolean(responseDelimited);
  }
  Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
    if (!request)
      throw TypeError("request must be specified");
    var self2 = this;
    if (!callback)
      return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
    if (!self2.rpcImpl) {
      setTimeout(function() {
        callback(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return self2.rpcImpl(method, requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
        if (err) {
          self2.emit("error", err, method);
          return callback(err);
        }
        if (response === null) {
          self2.end(true);
          return;
        }
        if (!(response instanceof responseCtor)) {
          try {
            response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
          } catch (err2) {
            self2.emit("error", err2, method);
            return callback(err2);
          }
        }
        self2.emit("data", response, method);
        return callback(null, response);
      });
    } catch (err) {
      self2.emit("error", err, method);
      setTimeout(function() {
        callback(err);
      }, 0);
      return;
    }
  };
  Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
      if (!endedByRPC)
        this.rpcImpl(null, null, null);
      this.rpcImpl = null;
      this.emit("end").off();
    }
    return this;
  };
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS((exports) => {
  var rpc = exports;
  rpc.Service = require_service();
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/roots.js
var require_roots = __commonJS((exports, module) => {
  module.exports = {};
});

// node_modules/.bun/protobufjs@8.0.1/node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS((exports) => {
  var protobuf = exports;
  protobuf.build = "minimal";
  protobuf.Writer = require_writer();
  protobuf.BufferWriter = require_writer_buffer();
  protobuf.Reader = require_reader();
  protobuf.BufferReader = require_reader_buffer();
  protobuf.util = require_minimal();
  protobuf.rpc = require_rpc();
  protobuf.roots = require_roots();
  protobuf.configure = configure;
  function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
  }
  configure();
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/generated/root.js
var require_root = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var $protobuf = require_index_minimal();
  var $Reader = $protobuf.Reader;
  var $Writer = $protobuf.Writer;
  var $util = $protobuf.util;
  var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
  $root.opentelemetry = function() {
    var opentelemetry = {};
    opentelemetry.proto = function() {
      var proto = {};
      proto.common = function() {
        var common = {};
        common.v1 = function() {
          var v1 = {};
          v1.AnyValue = function() {
            function AnyValue(properties) {
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            AnyValue.prototype.stringValue = null;
            AnyValue.prototype.boolValue = null;
            AnyValue.prototype.intValue = null;
            AnyValue.prototype.doubleValue = null;
            AnyValue.prototype.arrayValue = null;
            AnyValue.prototype.kvlistValue = null;
            AnyValue.prototype.bytesValue = null;
            var $oneOfFields;
            Object.defineProperty(AnyValue.prototype, "value", {
              get: $util.oneOfGetter($oneOfFields = ["stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            AnyValue.create = function create(properties) {
              return new AnyValue(properties);
            };
            AnyValue.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(10).string(message.stringValue);
              if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                writer.uint32(16).bool(message.boolValue);
              if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                writer.uint32(24).int64(message.intValue);
              if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                writer.uint32(33).double(message.doubleValue);
              if (message.arrayValue != null && Object.hasOwnProperty.call(message, "arrayValue"))
                $root.opentelemetry.proto.common.v1.ArrayValue.encode(message.arrayValue, writer.uint32(42).fork()).ldelim();
              if (message.kvlistValue != null && Object.hasOwnProperty.call(message, "kvlistValue"))
                $root.opentelemetry.proto.common.v1.KeyValueList.encode(message.kvlistValue, writer.uint32(50).fork()).ldelim();
              if (message.bytesValue != null && Object.hasOwnProperty.call(message, "bytesValue"))
                writer.uint32(58).bytes(message.bytesValue);
              return writer;
            };
            AnyValue.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            AnyValue.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.AnyValue;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.stringValue = reader.string();
                    break;
                  }
                  case 2: {
                    message.boolValue = reader.bool();
                    break;
                  }
                  case 3: {
                    message.intValue = reader.int64();
                    break;
                  }
                  case 4: {
                    message.doubleValue = reader.double();
                    break;
                  }
                  case 5: {
                    message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.decode(reader, reader.uint32());
                    break;
                  }
                  case 6: {
                    message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.decode(reader, reader.uint32());
                    break;
                  }
                  case 7: {
                    message.bytesValue = reader.bytes();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            AnyValue.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            AnyValue.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              var properties = {};
              if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                properties.value = 1;
                if (!$util.isString(message.stringValue))
                  return "stringValue: string expected";
              }
              if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                if (typeof message.boolValue !== "boolean")
                  return "boolValue: boolean expected";
              }
              if (message.intValue != null && message.hasOwnProperty("intValue")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                  return "intValue: integer|Long expected";
              }
              if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                if (typeof message.doubleValue !== "number")
                  return "doubleValue: number expected";
              }
              if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                {
                  var error = $root.opentelemetry.proto.common.v1.ArrayValue.verify(message.arrayValue);
                  if (error)
                    return "arrayValue." + error;
                }
              }
              if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                {
                  var error = $root.opentelemetry.proto.common.v1.KeyValueList.verify(message.kvlistValue);
                  if (error)
                    return "kvlistValue." + error;
                }
              }
              if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                if (!(message.bytesValue && typeof message.bytesValue.length === "number" || $util.isString(message.bytesValue)))
                  return "bytesValue: buffer expected";
              }
              return null;
            };
            AnyValue.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.common.v1.AnyValue)
                return object;
              var message = new $root.opentelemetry.proto.common.v1.AnyValue;
              if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
              if (object.boolValue != null)
                message.boolValue = Boolean(object.boolValue);
              if (object.intValue != null) {
                if ($util.Long)
                  (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                else if (typeof object.intValue === "string")
                  message.intValue = parseInt(object.intValue, 10);
                else if (typeof object.intValue === "number")
                  message.intValue = object.intValue;
                else if (typeof object.intValue === "object")
                  message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
              }
              if (object.doubleValue != null)
                message.doubleValue = Number(object.doubleValue);
              if (object.arrayValue != null) {
                if (typeof object.arrayValue !== "object")
                  throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.fromObject(object.arrayValue);
              }
              if (object.kvlistValue != null) {
                if (typeof object.kvlistValue !== "object")
                  throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.fromObject(object.kvlistValue);
              }
              if (object.bytesValue != null) {
                if (typeof object.bytesValue === "string")
                  $util.base64.decode(object.bytesValue, message.bytesValue = $util.newBuffer($util.base64.length(object.bytesValue)), 0);
                else if (object.bytesValue.length >= 0)
                  message.bytesValue = object.bytesValue;
              }
              return message;
            };
            AnyValue.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                object.stringValue = message.stringValue;
                if (options.oneofs)
                  object.value = "stringValue";
              }
              if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                object.boolValue = message.boolValue;
                if (options.oneofs)
                  object.value = "boolValue";
              }
              if (message.intValue != null && message.hasOwnProperty("intValue")) {
                if (typeof message.intValue === "number")
                  object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                else
                  object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                if (options.oneofs)
                  object.value = "intValue";
              }
              if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (options.oneofs)
                  object.value = "doubleValue";
              }
              if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                object.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.toObject(message.arrayValue, options);
                if (options.oneofs)
                  object.value = "arrayValue";
              }
              if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                object.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.toObject(message.kvlistValue, options);
                if (options.oneofs)
                  object.value = "kvlistValue";
              }
              if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                object.bytesValue = options.bytes === String ? $util.base64.encode(message.bytesValue, 0, message.bytesValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesValue) : message.bytesValue;
                if (options.oneofs)
                  object.value = "bytesValue";
              }
              return object;
            };
            AnyValue.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            AnyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.common.v1.AnyValue";
            };
            return AnyValue;
          }();
          v1.ArrayValue = function() {
            function ArrayValue(properties) {
              this.values = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ArrayValue.prototype.values = $util.emptyArray;
            ArrayValue.create = function create(properties) {
              return new ArrayValue(properties);
            };
            ArrayValue.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.values != null && message.values.length)
                for (var i = 0;i < message.values.length; ++i)
                  $root.opentelemetry.proto.common.v1.AnyValue.encode(message.values[i], writer.uint32(10).fork()).ldelim();
              return writer;
            };
            ArrayValue.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ArrayValue.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.ArrayValue;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.values && message.values.length))
                      message.values = [];
                    message.values.push($root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ArrayValue.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ArrayValue.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                  return "values: array expected";
                for (var i = 0;i < message.values.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.values[i]);
                  if (error)
                    return "values." + error;
                }
              }
              return null;
            };
            ArrayValue.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.common.v1.ArrayValue)
                return object;
              var message = new $root.opentelemetry.proto.common.v1.ArrayValue;
              if (object.values) {
                if (!Array.isArray(object.values))
                  throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                message.values = [];
                for (var i = 0;i < object.values.length; ++i) {
                  if (typeof object.values[i] !== "object")
                    throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                  message.values[i] = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.values[i]);
                }
              }
              return message;
            };
            ArrayValue.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.values = [];
              if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0;j < message.values.length; ++j)
                  object.values[j] = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.values[j], options);
              }
              return object;
            };
            ArrayValue.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ArrayValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.common.v1.ArrayValue";
            };
            return ArrayValue;
          }();
          v1.KeyValueList = function() {
            function KeyValueList(properties) {
              this.values = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            KeyValueList.prototype.values = $util.emptyArray;
            KeyValueList.create = function create(properties) {
              return new KeyValueList(properties);
            };
            KeyValueList.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.values != null && message.values.length)
                for (var i = 0;i < message.values.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.values[i], writer.uint32(10).fork()).ldelim();
              return writer;
            };
            KeyValueList.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            KeyValueList.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValueList;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.values && message.values.length))
                      message.values = [];
                    message.values.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            KeyValueList.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            KeyValueList.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                  return "values: array expected";
                for (var i = 0;i < message.values.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.values[i]);
                  if (error)
                    return "values." + error;
                }
              }
              return null;
            };
            KeyValueList.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.common.v1.KeyValueList)
                return object;
              var message = new $root.opentelemetry.proto.common.v1.KeyValueList;
              if (object.values) {
                if (!Array.isArray(object.values))
                  throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                message.values = [];
                for (var i = 0;i < object.values.length; ++i) {
                  if (typeof object.values[i] !== "object")
                    throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                  message.values[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.values[i]);
                }
              }
              return message;
            };
            KeyValueList.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.values = [];
              if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0;j < message.values.length; ++j)
                  object.values[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.values[j], options);
              }
              return object;
            };
            KeyValueList.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            KeyValueList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValueList";
            };
            return KeyValueList;
          }();
          v1.KeyValue = function() {
            function KeyValue(properties) {
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            KeyValue.prototype.key = null;
            KeyValue.prototype.value = null;
            KeyValue.create = function create(properties) {
              return new KeyValue(properties);
            };
            KeyValue.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(10).string(message.key);
              if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                $root.opentelemetry.proto.common.v1.AnyValue.encode(message.value, writer.uint32(18).fork()).ldelim();
              return writer;
            };
            KeyValue.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            KeyValue.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValue;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.key = reader.string();
                    break;
                  }
                  case 2: {
                    message.value = $root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32());
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            KeyValue.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            KeyValue.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.key != null && message.hasOwnProperty("key")) {
                if (!$util.isString(message.key))
                  return "key: string expected";
              }
              if (message.value != null && message.hasOwnProperty("value")) {
                var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.value);
                if (error)
                  return "value." + error;
              }
              return null;
            };
            KeyValue.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.common.v1.KeyValue)
                return object;
              var message = new $root.opentelemetry.proto.common.v1.KeyValue;
              if (object.key != null)
                message.key = String(object.key);
              if (object.value != null) {
                if (typeof object.value !== "object")
                  throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                message.value = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.value);
              }
              return message;
            };
            KeyValue.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.defaults) {
                object.key = "";
                object.value = null;
              }
              if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
              if (message.value != null && message.hasOwnProperty("value"))
                object.value = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.value, options);
              return object;
            };
            KeyValue.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            KeyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValue";
            };
            return KeyValue;
          }();
          v1.InstrumentationScope = function() {
            function InstrumentationScope(properties) {
              this.attributes = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            InstrumentationScope.prototype.name = null;
            InstrumentationScope.prototype.version = null;
            InstrumentationScope.prototype.attributes = $util.emptyArray;
            InstrumentationScope.prototype.droppedAttributesCount = null;
            InstrumentationScope.create = function create(properties) {
              return new InstrumentationScope(properties);
            };
            InstrumentationScope.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(10).string(message.name);
              if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(18).string(message.version);
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(26).fork()).ldelim();
              if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                writer.uint32(32).uint32(message.droppedAttributesCount);
              return writer;
            };
            InstrumentationScope.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            InstrumentationScope.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.InstrumentationScope;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.name = reader.string();
                    break;
                  }
                  case 2: {
                    message.version = reader.string();
                    break;
                  }
                  case 3: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 4: {
                    message.droppedAttributesCount = reader.uint32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            InstrumentationScope.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            InstrumentationScope.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.name != null && message.hasOwnProperty("name")) {
                if (!$util.isString(message.name))
                  return "name: string expected";
              }
              if (message.version != null && message.hasOwnProperty("version")) {
                if (!$util.isString(message.version))
                  return "version: string expected";
              }
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                if (!$util.isInteger(message.droppedAttributesCount))
                  return "droppedAttributesCount: integer expected";
              }
              return null;
            };
            InstrumentationScope.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.common.v1.InstrumentationScope)
                return object;
              var message = new $root.opentelemetry.proto.common.v1.InstrumentationScope;
              if (object.name != null)
                message.name = String(object.name);
              if (object.version != null)
                message.version = String(object.version);
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.droppedAttributesCount != null)
                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
              return message;
            };
            InstrumentationScope.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.attributes = [];
              if (options.defaults) {
                object.name = "";
                object.version = "";
                object.droppedAttributesCount = 0;
              }
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                object.droppedAttributesCount = message.droppedAttributesCount;
              return object;
            };
            InstrumentationScope.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            InstrumentationScope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.common.v1.InstrumentationScope";
            };
            return InstrumentationScope;
          }();
          v1.EntityRef = function() {
            function EntityRef(properties) {
              this.idKeys = [];
              this.descriptionKeys = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            EntityRef.prototype.schemaUrl = null;
            EntityRef.prototype.type = null;
            EntityRef.prototype.idKeys = $util.emptyArray;
            EntityRef.prototype.descriptionKeys = $util.emptyArray;
            EntityRef.create = function create(properties) {
              return new EntityRef(properties);
            };
            EntityRef.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                writer.uint32(10).string(message.schemaUrl);
              if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(18).string(message.type);
              if (message.idKeys != null && message.idKeys.length)
                for (var i = 0;i < message.idKeys.length; ++i)
                  writer.uint32(26).string(message.idKeys[i]);
              if (message.descriptionKeys != null && message.descriptionKeys.length)
                for (var i = 0;i < message.descriptionKeys.length; ++i)
                  writer.uint32(34).string(message.descriptionKeys[i]);
              return writer;
            };
            EntityRef.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            EntityRef.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.EntityRef;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.schemaUrl = reader.string();
                    break;
                  }
                  case 2: {
                    message.type = reader.string();
                    break;
                  }
                  case 3: {
                    if (!(message.idKeys && message.idKeys.length))
                      message.idKeys = [];
                    message.idKeys.push(reader.string());
                    break;
                  }
                  case 4: {
                    if (!(message.descriptionKeys && message.descriptionKeys.length))
                      message.descriptionKeys = [];
                    message.descriptionKeys.push(reader.string());
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            EntityRef.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            EntityRef.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                if (!$util.isString(message.schemaUrl))
                  return "schemaUrl: string expected";
              }
              if (message.type != null && message.hasOwnProperty("type")) {
                if (!$util.isString(message.type))
                  return "type: string expected";
              }
              if (message.idKeys != null && message.hasOwnProperty("idKeys")) {
                if (!Array.isArray(message.idKeys))
                  return "idKeys: array expected";
                for (var i = 0;i < message.idKeys.length; ++i)
                  if (!$util.isString(message.idKeys[i]))
                    return "idKeys: string[] expected";
              }
              if (message.descriptionKeys != null && message.hasOwnProperty("descriptionKeys")) {
                if (!Array.isArray(message.descriptionKeys))
                  return "descriptionKeys: array expected";
                for (var i = 0;i < message.descriptionKeys.length; ++i)
                  if (!$util.isString(message.descriptionKeys[i]))
                    return "descriptionKeys: string[] expected";
              }
              return null;
            };
            EntityRef.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.common.v1.EntityRef)
                return object;
              var message = new $root.opentelemetry.proto.common.v1.EntityRef;
              if (object.schemaUrl != null)
                message.schemaUrl = String(object.schemaUrl);
              if (object.type != null)
                message.type = String(object.type);
              if (object.idKeys) {
                if (!Array.isArray(object.idKeys))
                  throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                message.idKeys = [];
                for (var i = 0;i < object.idKeys.length; ++i)
                  message.idKeys[i] = String(object.idKeys[i]);
              }
              if (object.descriptionKeys) {
                if (!Array.isArray(object.descriptionKeys))
                  throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                message.descriptionKeys = [];
                for (var i = 0;i < object.descriptionKeys.length; ++i)
                  message.descriptionKeys[i] = String(object.descriptionKeys[i]);
              }
              return message;
            };
            EntityRef.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.idKeys = [];
                object.descriptionKeys = [];
              }
              if (options.defaults) {
                object.schemaUrl = "";
                object.type = "";
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                object.schemaUrl = message.schemaUrl;
              if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
              if (message.idKeys && message.idKeys.length) {
                object.idKeys = [];
                for (var j = 0;j < message.idKeys.length; ++j)
                  object.idKeys[j] = message.idKeys[j];
              }
              if (message.descriptionKeys && message.descriptionKeys.length) {
                object.descriptionKeys = [];
                for (var j = 0;j < message.descriptionKeys.length; ++j)
                  object.descriptionKeys[j] = message.descriptionKeys[j];
              }
              return object;
            };
            EntityRef.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            EntityRef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.common.v1.EntityRef";
            };
            return EntityRef;
          }();
          return v1;
        }();
        return common;
      }();
      proto.resource = function() {
        var resource = {};
        resource.v1 = function() {
          var v1 = {};
          v1.Resource = function() {
            function Resource(properties) {
              this.attributes = [];
              this.entityRefs = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Resource.prototype.attributes = $util.emptyArray;
            Resource.prototype.droppedAttributesCount = null;
            Resource.prototype.entityRefs = $util.emptyArray;
            Resource.create = function create(properties) {
              return new Resource(properties);
            };
            Resource.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(10).fork()).ldelim();
              if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                writer.uint32(16).uint32(message.droppedAttributesCount);
              if (message.entityRefs != null && message.entityRefs.length)
                for (var i = 0;i < message.entityRefs.length; ++i)
                  $root.opentelemetry.proto.common.v1.EntityRef.encode(message.entityRefs[i], writer.uint32(26).fork()).ldelim();
              return writer;
            };
            Resource.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Resource.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.resource.v1.Resource;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.droppedAttributesCount = reader.uint32();
                    break;
                  }
                  case 3: {
                    if (!(message.entityRefs && message.entityRefs.length))
                      message.entityRefs = [];
                    message.entityRefs.push($root.opentelemetry.proto.common.v1.EntityRef.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Resource.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Resource.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                if (!$util.isInteger(message.droppedAttributesCount))
                  return "droppedAttributesCount: integer expected";
              }
              if (message.entityRefs != null && message.hasOwnProperty("entityRefs")) {
                if (!Array.isArray(message.entityRefs))
                  return "entityRefs: array expected";
                for (var i = 0;i < message.entityRefs.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.EntityRef.verify(message.entityRefs[i]);
                  if (error)
                    return "entityRefs." + error;
                }
              }
              return null;
            };
            Resource.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.resource.v1.Resource)
                return object;
              var message = new $root.opentelemetry.proto.resource.v1.Resource;
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.droppedAttributesCount != null)
                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
              if (object.entityRefs) {
                if (!Array.isArray(object.entityRefs))
                  throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                message.entityRefs = [];
                for (var i = 0;i < object.entityRefs.length; ++i) {
                  if (typeof object.entityRefs[i] !== "object")
                    throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                  message.entityRefs[i] = $root.opentelemetry.proto.common.v1.EntityRef.fromObject(object.entityRefs[i]);
                }
              }
              return message;
            };
            Resource.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.attributes = [];
                object.entityRefs = [];
              }
              if (options.defaults)
                object.droppedAttributesCount = 0;
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                object.droppedAttributesCount = message.droppedAttributesCount;
              if (message.entityRefs && message.entityRefs.length) {
                object.entityRefs = [];
                for (var j = 0;j < message.entityRefs.length; ++j)
                  object.entityRefs[j] = $root.opentelemetry.proto.common.v1.EntityRef.toObject(message.entityRefs[j], options);
              }
              return object;
            };
            Resource.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Resource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.resource.v1.Resource";
            };
            return Resource;
          }();
          return v1;
        }();
        return resource;
      }();
      proto.trace = function() {
        var trace = {};
        trace.v1 = function() {
          var v1 = {};
          v1.TracesData = function() {
            function TracesData(properties) {
              this.resourceSpans = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            TracesData.prototype.resourceSpans = $util.emptyArray;
            TracesData.create = function create(properties) {
              return new TracesData(properties);
            };
            TracesData.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.resourceSpans != null && message.resourceSpans.length)
                for (var i = 0;i < message.resourceSpans.length; ++i)
                  $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(10).fork()).ldelim();
              return writer;
            };
            TracesData.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            TracesData.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.TracesData;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.resourceSpans && message.resourceSpans.length))
                      message.resourceSpans = [];
                    message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            TracesData.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            TracesData.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                if (!Array.isArray(message.resourceSpans))
                  return "resourceSpans: array expected";
                for (var i = 0;i < message.resourceSpans.length; ++i) {
                  var error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                  if (error)
                    return "resourceSpans." + error;
                }
              }
              return null;
            };
            TracesData.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.trace.v1.TracesData)
                return object;
              var message = new $root.opentelemetry.proto.trace.v1.TracesData;
              if (object.resourceSpans) {
                if (!Array.isArray(object.resourceSpans))
                  throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                message.resourceSpans = [];
                for (var i = 0;i < object.resourceSpans.length; ++i) {
                  if (typeof object.resourceSpans[i] !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                  message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                }
              }
              return message;
            };
            TracesData.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.resourceSpans = [];
              if (message.resourceSpans && message.resourceSpans.length) {
                object.resourceSpans = [];
                for (var j = 0;j < message.resourceSpans.length; ++j)
                  object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
              }
              return object;
            };
            TracesData.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            TracesData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.trace.v1.TracesData";
            };
            return TracesData;
          }();
          v1.ResourceSpans = function() {
            function ResourceSpans(properties) {
              this.scopeSpans = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ResourceSpans.prototype.resource = null;
            ResourceSpans.prototype.scopeSpans = $util.emptyArray;
            ResourceSpans.prototype.schemaUrl = null;
            ResourceSpans.create = function create(properties) {
              return new ResourceSpans(properties);
            };
            ResourceSpans.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
              if (message.scopeSpans != null && message.scopeSpans.length)
                for (var i = 0;i < message.scopeSpans.length; ++i)
                  $root.opentelemetry.proto.trace.v1.ScopeSpans.encode(message.scopeSpans[i], writer.uint32(18).fork()).ldelim();
              if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                writer.uint32(26).string(message.schemaUrl);
              return writer;
            };
            ResourceSpans.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ResourceSpans.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ResourceSpans;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                    break;
                  }
                  case 2: {
                    if (!(message.scopeSpans && message.scopeSpans.length))
                      message.scopeSpans = [];
                    message.scopeSpans.push($root.opentelemetry.proto.trace.v1.ScopeSpans.decode(reader, reader.uint32()));
                    break;
                  }
                  case 3: {
                    message.schemaUrl = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ResourceSpans.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ResourceSpans.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.resource != null && message.hasOwnProperty("resource")) {
                var error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                if (error)
                  return "resource." + error;
              }
              if (message.scopeSpans != null && message.hasOwnProperty("scopeSpans")) {
                if (!Array.isArray(message.scopeSpans))
                  return "scopeSpans: array expected";
                for (var i = 0;i < message.scopeSpans.length; ++i) {
                  var error = $root.opentelemetry.proto.trace.v1.ScopeSpans.verify(message.scopeSpans[i]);
                  if (error)
                    return "scopeSpans." + error;
                }
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                if (!$util.isString(message.schemaUrl))
                  return "schemaUrl: string expected";
              }
              return null;
            };
            ResourceSpans.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.trace.v1.ResourceSpans)
                return object;
              var message = new $root.opentelemetry.proto.trace.v1.ResourceSpans;
              if (object.resource != null) {
                if (typeof object.resource !== "object")
                  throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
              }
              if (object.scopeSpans) {
                if (!Array.isArray(object.scopeSpans))
                  throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                message.scopeSpans = [];
                for (var i = 0;i < object.scopeSpans.length; ++i) {
                  if (typeof object.scopeSpans[i] !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                  message.scopeSpans[i] = $root.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(object.scopeSpans[i]);
                }
              }
              if (object.schemaUrl != null)
                message.schemaUrl = String(object.schemaUrl);
              return message;
            };
            ResourceSpans.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.scopeSpans = [];
              if (options.defaults) {
                object.resource = null;
                object.schemaUrl = "";
              }
              if (message.resource != null && message.hasOwnProperty("resource"))
                object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
              if (message.scopeSpans && message.scopeSpans.length) {
                object.scopeSpans = [];
                for (var j = 0;j < message.scopeSpans.length; ++j)
                  object.scopeSpans[j] = $root.opentelemetry.proto.trace.v1.ScopeSpans.toObject(message.scopeSpans[j], options);
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                object.schemaUrl = message.schemaUrl;
              return object;
            };
            ResourceSpans.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ResourceSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ResourceSpans";
            };
            return ResourceSpans;
          }();
          v1.ScopeSpans = function() {
            function ScopeSpans(properties) {
              this.spans = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ScopeSpans.prototype.scope = null;
            ScopeSpans.prototype.spans = $util.emptyArray;
            ScopeSpans.prototype.schemaUrl = null;
            ScopeSpans.create = function create(properties) {
              return new ScopeSpans(properties);
            };
            ScopeSpans.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
              if (message.spans != null && message.spans.length)
                for (var i = 0;i < message.spans.length; ++i)
                  $root.opentelemetry.proto.trace.v1.Span.encode(message.spans[i], writer.uint32(18).fork()).ldelim();
              if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                writer.uint32(26).string(message.schemaUrl);
              return writer;
            };
            ScopeSpans.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ScopeSpans.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ScopeSpans;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                    break;
                  }
                  case 2: {
                    if (!(message.spans && message.spans.length))
                      message.spans = [];
                    message.spans.push($root.opentelemetry.proto.trace.v1.Span.decode(reader, reader.uint32()));
                    break;
                  }
                  case 3: {
                    message.schemaUrl = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ScopeSpans.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ScopeSpans.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.scope != null && message.hasOwnProperty("scope")) {
                var error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                if (error)
                  return "scope." + error;
              }
              if (message.spans != null && message.hasOwnProperty("spans")) {
                if (!Array.isArray(message.spans))
                  return "spans: array expected";
                for (var i = 0;i < message.spans.length; ++i) {
                  var error = $root.opentelemetry.proto.trace.v1.Span.verify(message.spans[i]);
                  if (error)
                    return "spans." + error;
                }
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                if (!$util.isString(message.schemaUrl))
                  return "schemaUrl: string expected";
              }
              return null;
            };
            ScopeSpans.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.trace.v1.ScopeSpans)
                return object;
              var message = new $root.opentelemetry.proto.trace.v1.ScopeSpans;
              if (object.scope != null) {
                if (typeof object.scope !== "object")
                  throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
              }
              if (object.spans) {
                if (!Array.isArray(object.spans))
                  throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                message.spans = [];
                for (var i = 0;i < object.spans.length; ++i) {
                  if (typeof object.spans[i] !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                  message.spans[i] = $root.opentelemetry.proto.trace.v1.Span.fromObject(object.spans[i]);
                }
              }
              if (object.schemaUrl != null)
                message.schemaUrl = String(object.schemaUrl);
              return message;
            };
            ScopeSpans.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.spans = [];
              if (options.defaults) {
                object.scope = null;
                object.schemaUrl = "";
              }
              if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
              if (message.spans && message.spans.length) {
                object.spans = [];
                for (var j = 0;j < message.spans.length; ++j)
                  object.spans[j] = $root.opentelemetry.proto.trace.v1.Span.toObject(message.spans[j], options);
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                object.schemaUrl = message.schemaUrl;
              return object;
            };
            ScopeSpans.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ScopeSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ScopeSpans";
            };
            return ScopeSpans;
          }();
          v1.Span = function() {
            function Span(properties) {
              this.attributes = [];
              this.events = [];
              this.links = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Span.prototype.traceId = null;
            Span.prototype.spanId = null;
            Span.prototype.traceState = null;
            Span.prototype.parentSpanId = null;
            Span.prototype.flags = null;
            Span.prototype.name = null;
            Span.prototype.kind = null;
            Span.prototype.startTimeUnixNano = null;
            Span.prototype.endTimeUnixNano = null;
            Span.prototype.attributes = $util.emptyArray;
            Span.prototype.droppedAttributesCount = null;
            Span.prototype.events = $util.emptyArray;
            Span.prototype.droppedEventsCount = null;
            Span.prototype.links = $util.emptyArray;
            Span.prototype.droppedLinksCount = null;
            Span.prototype.status = null;
            Span.create = function create(properties) {
              return new Span(properties);
            };
            Span.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                writer.uint32(10).bytes(message.traceId);
              if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                writer.uint32(18).bytes(message.spanId);
              if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                writer.uint32(26).string(message.traceState);
              if (message.parentSpanId != null && Object.hasOwnProperty.call(message, "parentSpanId"))
                writer.uint32(34).bytes(message.parentSpanId);
              if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(42).string(message.name);
              if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(48).int32(message.kind);
              if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                writer.uint32(57).fixed64(message.startTimeUnixNano);
              if (message.endTimeUnixNano != null && Object.hasOwnProperty.call(message, "endTimeUnixNano"))
                writer.uint32(65).fixed64(message.endTimeUnixNano);
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(74).fork()).ldelim();
              if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                writer.uint32(80).uint32(message.droppedAttributesCount);
              if (message.events != null && message.events.length)
                for (var i = 0;i < message.events.length; ++i)
                  $root.opentelemetry.proto.trace.v1.Span.Event.encode(message.events[i], writer.uint32(90).fork()).ldelim();
              if (message.droppedEventsCount != null && Object.hasOwnProperty.call(message, "droppedEventsCount"))
                writer.uint32(96).uint32(message.droppedEventsCount);
              if (message.links != null && message.links.length)
                for (var i = 0;i < message.links.length; ++i)
                  $root.opentelemetry.proto.trace.v1.Span.Link.encode(message.links[i], writer.uint32(106).fork()).ldelim();
              if (message.droppedLinksCount != null && Object.hasOwnProperty.call(message, "droppedLinksCount"))
                writer.uint32(112).uint32(message.droppedLinksCount);
              if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.opentelemetry.proto.trace.v1.Status.encode(message.status, writer.uint32(122).fork()).ldelim();
              if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(133).fixed32(message.flags);
              return writer;
            };
            Span.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Span.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.traceId = reader.bytes();
                    break;
                  }
                  case 2: {
                    message.spanId = reader.bytes();
                    break;
                  }
                  case 3: {
                    message.traceState = reader.string();
                    break;
                  }
                  case 4: {
                    message.parentSpanId = reader.bytes();
                    break;
                  }
                  case 16: {
                    message.flags = reader.fixed32();
                    break;
                  }
                  case 5: {
                    message.name = reader.string();
                    break;
                  }
                  case 6: {
                    message.kind = reader.int32();
                    break;
                  }
                  case 7: {
                    message.startTimeUnixNano = reader.fixed64();
                    break;
                  }
                  case 8: {
                    message.endTimeUnixNano = reader.fixed64();
                    break;
                  }
                  case 9: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 10: {
                    message.droppedAttributesCount = reader.uint32();
                    break;
                  }
                  case 11: {
                    if (!(message.events && message.events.length))
                      message.events = [];
                    message.events.push($root.opentelemetry.proto.trace.v1.Span.Event.decode(reader, reader.uint32()));
                    break;
                  }
                  case 12: {
                    message.droppedEventsCount = reader.uint32();
                    break;
                  }
                  case 13: {
                    if (!(message.links && message.links.length))
                      message.links = [];
                    message.links.push($root.opentelemetry.proto.trace.v1.Span.Link.decode(reader, reader.uint32()));
                    break;
                  }
                  case 14: {
                    message.droppedLinksCount = reader.uint32();
                    break;
                  }
                  case 15: {
                    message.status = $root.opentelemetry.proto.trace.v1.Status.decode(reader, reader.uint32());
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Span.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Span.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.traceId != null && message.hasOwnProperty("traceId")) {
                if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                  return "traceId: buffer expected";
              }
              if (message.spanId != null && message.hasOwnProperty("spanId")) {
                if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                  return "spanId: buffer expected";
              }
              if (message.traceState != null && message.hasOwnProperty("traceState")) {
                if (!$util.isString(message.traceState))
                  return "traceState: string expected";
              }
              if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId")) {
                if (!(message.parentSpanId && typeof message.parentSpanId.length === "number" || $util.isString(message.parentSpanId)))
                  return "parentSpanId: buffer expected";
              }
              if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!$util.isInteger(message.flags))
                  return "flags: integer expected";
              }
              if (message.name != null && message.hasOwnProperty("name")) {
                if (!$util.isString(message.name))
                  return "name: string expected";
              }
              if (message.kind != null && message.hasOwnProperty("kind"))
                switch (message.kind) {
                  default:
                    return "kind: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;
                }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                  return "startTimeUnixNano: integer|Long expected";
              }
              if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano")) {
                if (!$util.isInteger(message.endTimeUnixNano) && !(message.endTimeUnixNano && $util.isInteger(message.endTimeUnixNano.low) && $util.isInteger(message.endTimeUnixNano.high)))
                  return "endTimeUnixNano: integer|Long expected";
              }
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                if (!$util.isInteger(message.droppedAttributesCount))
                  return "droppedAttributesCount: integer expected";
              }
              if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                  return "events: array expected";
                for (var i = 0;i < message.events.length; ++i) {
                  var error = $root.opentelemetry.proto.trace.v1.Span.Event.verify(message.events[i]);
                  if (error)
                    return "events." + error;
                }
              }
              if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount")) {
                if (!$util.isInteger(message.droppedEventsCount))
                  return "droppedEventsCount: integer expected";
              }
              if (message.links != null && message.hasOwnProperty("links")) {
                if (!Array.isArray(message.links))
                  return "links: array expected";
                for (var i = 0;i < message.links.length; ++i) {
                  var error = $root.opentelemetry.proto.trace.v1.Span.Link.verify(message.links[i]);
                  if (error)
                    return "links." + error;
                }
              }
              if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount")) {
                if (!$util.isInteger(message.droppedLinksCount))
                  return "droppedLinksCount: integer expected";
              }
              if (message.status != null && message.hasOwnProperty("status")) {
                var error = $root.opentelemetry.proto.trace.v1.Status.verify(message.status);
                if (error)
                  return "status." + error;
              }
              return null;
            };
            Span.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.trace.v1.Span)
                return object;
              var message = new $root.opentelemetry.proto.trace.v1.Span;
              if (object.traceId != null) {
                if (typeof object.traceId === "string")
                  $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                else if (object.traceId.length >= 0)
                  message.traceId = object.traceId;
              }
              if (object.spanId != null) {
                if (typeof object.spanId === "string")
                  $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                else if (object.spanId.length >= 0)
                  message.spanId = object.spanId;
              }
              if (object.traceState != null)
                message.traceState = String(object.traceState);
              if (object.parentSpanId != null) {
                if (typeof object.parentSpanId === "string")
                  $util.base64.decode(object.parentSpanId, message.parentSpanId = $util.newBuffer($util.base64.length(object.parentSpanId)), 0);
                else if (object.parentSpanId.length >= 0)
                  message.parentSpanId = object.parentSpanId;
              }
              if (object.flags != null)
                message.flags = object.flags >>> 0;
              if (object.name != null)
                message.name = String(object.name);
              switch (object.kind) {
                default:
                  if (typeof object.kind === "number") {
                    message.kind = object.kind;
                    break;
                  }
                  break;
                case "SPAN_KIND_UNSPECIFIED":
                case 0:
                  message.kind = 0;
                  break;
                case "SPAN_KIND_INTERNAL":
                case 1:
                  message.kind = 1;
                  break;
                case "SPAN_KIND_SERVER":
                case 2:
                  message.kind = 2;
                  break;
                case "SPAN_KIND_CLIENT":
                case 3:
                  message.kind = 3;
                  break;
                case "SPAN_KIND_PRODUCER":
                case 4:
                  message.kind = 4;
                  break;
                case "SPAN_KIND_CONSUMER":
                case 5:
                  message.kind = 5;
                  break;
              }
              if (object.startTimeUnixNano != null) {
                if ($util.Long)
                  (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                else if (typeof object.startTimeUnixNano === "string")
                  message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                else if (typeof object.startTimeUnixNano === "number")
                  message.startTimeUnixNano = object.startTimeUnixNano;
                else if (typeof object.startTimeUnixNano === "object")
                  message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (object.endTimeUnixNano != null) {
                if ($util.Long)
                  (message.endTimeUnixNano = $util.Long.fromValue(object.endTimeUnixNano)).unsigned = false;
                else if (typeof object.endTimeUnixNano === "string")
                  message.endTimeUnixNano = parseInt(object.endTimeUnixNano, 10);
                else if (typeof object.endTimeUnixNano === "number")
                  message.endTimeUnixNano = object.endTimeUnixNano;
                else if (typeof object.endTimeUnixNano === "object")
                  message.endTimeUnixNano = new $util.LongBits(object.endTimeUnixNano.low >>> 0, object.endTimeUnixNano.high >>> 0).toNumber();
              }
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.droppedAttributesCount != null)
                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
              if (object.events) {
                if (!Array.isArray(object.events))
                  throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                message.events = [];
                for (var i = 0;i < object.events.length; ++i) {
                  if (typeof object.events[i] !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                  message.events[i] = $root.opentelemetry.proto.trace.v1.Span.Event.fromObject(object.events[i]);
                }
              }
              if (object.droppedEventsCount != null)
                message.droppedEventsCount = object.droppedEventsCount >>> 0;
              if (object.links) {
                if (!Array.isArray(object.links))
                  throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                message.links = [];
                for (var i = 0;i < object.links.length; ++i) {
                  if (typeof object.links[i] !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                  message.links[i] = $root.opentelemetry.proto.trace.v1.Span.Link.fromObject(object.links[i]);
                }
              }
              if (object.droppedLinksCount != null)
                message.droppedLinksCount = object.droppedLinksCount >>> 0;
              if (object.status != null) {
                if (typeof object.status !== "object")
                  throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                message.status = $root.opentelemetry.proto.trace.v1.Status.fromObject(object.status);
              }
              return message;
            };
            Span.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.attributes = [];
                object.events = [];
                object.links = [];
              }
              if (options.defaults) {
                if (options.bytes === String)
                  object.traceId = "";
                else {
                  object.traceId = [];
                  if (options.bytes !== Array)
                    object.traceId = $util.newBuffer(object.traceId);
                }
                if (options.bytes === String)
                  object.spanId = "";
                else {
                  object.spanId = [];
                  if (options.bytes !== Array)
                    object.spanId = $util.newBuffer(object.spanId);
                }
                object.traceState = "";
                if (options.bytes === String)
                  object.parentSpanId = "";
                else {
                  object.parentSpanId = [];
                  if (options.bytes !== Array)
                    object.parentSpanId = $util.newBuffer(object.parentSpanId);
                }
                object.name = "";
                object.kind = options.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.startTimeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.endTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.endTimeUnixNano = options.longs === String ? "0" : 0;
                object.droppedAttributesCount = 0;
                object.droppedEventsCount = 0;
                object.droppedLinksCount = 0;
                object.status = null;
                object.flags = 0;
              }
              if (message.traceId != null && message.hasOwnProperty("traceId"))
                object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
              if (message.spanId != null && message.hasOwnProperty("spanId"))
                object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
              if (message.traceState != null && message.hasOwnProperty("traceState"))
                object.traceState = message.traceState;
              if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId"))
                object.parentSpanId = options.bytes === String ? $util.base64.encode(message.parentSpanId, 0, message.parentSpanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.parentSpanId) : message.parentSpanId;
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = options.enums === String ? $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] === undefined ? message.kind : $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] : message.kind;
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                if (typeof message.startTimeUnixNano === "number")
                  object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                else
                  object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
              if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano"))
                if (typeof message.endTimeUnixNano === "number")
                  object.endTimeUnixNano = options.longs === String ? String(message.endTimeUnixNano) : message.endTimeUnixNano;
                else
                  object.endTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.endTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.endTimeUnixNano.low >>> 0, message.endTimeUnixNano.high >>> 0).toNumber() : message.endTimeUnixNano;
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                object.droppedAttributesCount = message.droppedAttributesCount;
              if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0;j < message.events.length; ++j)
                  object.events[j] = $root.opentelemetry.proto.trace.v1.Span.Event.toObject(message.events[j], options);
              }
              if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount"))
                object.droppedEventsCount = message.droppedEventsCount;
              if (message.links && message.links.length) {
                object.links = [];
                for (var j = 0;j < message.links.length; ++j)
                  object.links[j] = $root.opentelemetry.proto.trace.v1.Span.Link.toObject(message.links[j], options);
              }
              if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount"))
                object.droppedLinksCount = message.droppedLinksCount;
              if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.opentelemetry.proto.trace.v1.Status.toObject(message.status, options);
              if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
              return object;
            };
            Span.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Span.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span";
            };
            Span.SpanKind = function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "SPAN_KIND_UNSPECIFIED"] = 0;
              values[valuesById[1] = "SPAN_KIND_INTERNAL"] = 1;
              values[valuesById[2] = "SPAN_KIND_SERVER"] = 2;
              values[valuesById[3] = "SPAN_KIND_CLIENT"] = 3;
              values[valuesById[4] = "SPAN_KIND_PRODUCER"] = 4;
              values[valuesById[5] = "SPAN_KIND_CONSUMER"] = 5;
              return values;
            }();
            Span.Event = function() {
              function Event(properties) {
                this.attributes = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Event.prototype.timeUnixNano = null;
              Event.prototype.name = null;
              Event.prototype.attributes = $util.emptyArray;
              Event.prototype.droppedAttributesCount = null;
              Event.create = function create(properties) {
                return new Event(properties);
              };
              Event.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(9).fixed64(message.timeUnixNano);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                  writer.uint32(18).string(message.name);
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0;i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(26).fork()).ldelim();
                if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                  writer.uint32(32).uint32(message.droppedAttributesCount);
                return writer;
              };
              Event.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Event.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Event;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 2: {
                      message.name = reader.string();
                      break;
                    }
                    case 3: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 4: {
                      message.droppedAttributesCount = reader.uint32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Event.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Event.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.name != null && message.hasOwnProperty("name")) {
                  if (!$util.isString(message.name))
                    return "name: string expected";
                }
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0;i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                  if (!$util.isInteger(message.droppedAttributesCount))
                    return "droppedAttributesCount: integer expected";
                }
                return null;
              };
              Event.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Event)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.Span.Event;
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.name != null)
                  message.name = String(object.name);
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0;i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.droppedAttributesCount != null)
                  message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                return message;
              };
              Event.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.attributes = [];
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  object.name = "";
                  object.droppedAttributesCount = 0;
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.name != null && message.hasOwnProperty("name"))
                  object.name = message.name;
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0;j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                  object.droppedAttributesCount = message.droppedAttributesCount;
                return object;
              };
              Event.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Event";
              };
              return Event;
            }();
            Span.Link = function() {
              function Link(properties) {
                this.attributes = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Link.prototype.traceId = null;
              Link.prototype.spanId = null;
              Link.prototype.traceState = null;
              Link.prototype.attributes = $util.emptyArray;
              Link.prototype.droppedAttributesCount = null;
              Link.prototype.flags = null;
              Link.create = function create(properties) {
                return new Link(properties);
              };
              Link.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                  writer.uint32(10).bytes(message.traceId);
                if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                  writer.uint32(18).bytes(message.spanId);
                if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                  writer.uint32(26).string(message.traceState);
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0;i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(34).fork()).ldelim();
                if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                  writer.uint32(40).uint32(message.droppedAttributesCount);
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(53).fixed32(message.flags);
                return writer;
              };
              Link.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Link.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Link;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.traceId = reader.bytes();
                      break;
                    }
                    case 2: {
                      message.spanId = reader.bytes();
                      break;
                    }
                    case 3: {
                      message.traceState = reader.string();
                      break;
                    }
                    case 4: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 5: {
                      message.droppedAttributesCount = reader.uint32();
                      break;
                    }
                    case 6: {
                      message.flags = reader.fixed32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Link.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Link.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId")) {
                  if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                    return "traceId: buffer expected";
                }
                if (message.spanId != null && message.hasOwnProperty("spanId")) {
                  if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                    return "spanId: buffer expected";
                }
                if (message.traceState != null && message.hasOwnProperty("traceState")) {
                  if (!$util.isString(message.traceState))
                    return "traceState: string expected";
                }
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0;i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                  if (!$util.isInteger(message.droppedAttributesCount))
                    return "droppedAttributesCount: integer expected";
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                return null;
              };
              Link.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Link)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.Span.Link;
                if (object.traceId != null) {
                  if (typeof object.traceId === "string")
                    $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                  else if (object.traceId.length >= 0)
                    message.traceId = object.traceId;
                }
                if (object.spanId != null) {
                  if (typeof object.spanId === "string")
                    $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                  else if (object.spanId.length >= 0)
                    message.spanId = object.spanId;
                }
                if (object.traceState != null)
                  message.traceState = String(object.traceState);
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0;i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.droppedAttributesCount != null)
                  message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                return message;
              };
              Link.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.attributes = [];
                if (options.defaults) {
                  if (options.bytes === String)
                    object.traceId = "";
                  else {
                    object.traceId = [];
                    if (options.bytes !== Array)
                      object.traceId = $util.newBuffer(object.traceId);
                  }
                  if (options.bytes === String)
                    object.spanId = "";
                  else {
                    object.spanId = [];
                    if (options.bytes !== Array)
                      object.spanId = $util.newBuffer(object.spanId);
                  }
                  object.traceState = "";
                  object.droppedAttributesCount = 0;
                  object.flags = 0;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                  object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                if (message.spanId != null && message.hasOwnProperty("spanId"))
                  object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                if (message.traceState != null && message.hasOwnProperty("traceState"))
                  object.traceState = message.traceState;
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0;j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                  object.droppedAttributesCount = message.droppedAttributesCount;
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                return object;
              };
              Link.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Link";
              };
              return Link;
            }();
            return Span;
          }();
          v1.Status = function() {
            function Status(properties) {
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Status.prototype.message = null;
            Status.prototype.code = null;
            Status.create = function create(properties) {
              return new Status(properties);
            };
            Status.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(18).string(message.message);
              if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(24).int32(message.code);
              return writer;
            };
            Status.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Status.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Status;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 2: {
                    message.message = reader.string();
                    break;
                  }
                  case 3: {
                    message.code = reader.int32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Status.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Status.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.message != null && message.hasOwnProperty("message")) {
                if (!$util.isString(message.message))
                  return "message: string expected";
              }
              if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                  default:
                    return "code: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                    break;
                }
              return null;
            };
            Status.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.trace.v1.Status)
                return object;
              var message = new $root.opentelemetry.proto.trace.v1.Status;
              if (object.message != null)
                message.message = String(object.message);
              switch (object.code) {
                default:
                  if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                  }
                  break;
                case "STATUS_CODE_UNSET":
                case 0:
                  message.code = 0;
                  break;
                case "STATUS_CODE_OK":
                case 1:
                  message.code = 1;
                  break;
                case "STATUS_CODE_ERROR":
                case 2:
                  message.code = 2;
                  break;
              }
              return message;
            };
            Status.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.defaults) {
                object.message = "";
                object.code = options.enums === String ? "STATUS_CODE_UNSET" : 0;
              }
              if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
              if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] === undefined ? message.code : $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] : message.code;
              return object;
            };
            Status.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Status";
            };
            Status.StatusCode = function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "STATUS_CODE_UNSET"] = 0;
              values[valuesById[1] = "STATUS_CODE_OK"] = 1;
              values[valuesById[2] = "STATUS_CODE_ERROR"] = 2;
              return values;
            }();
            return Status;
          }();
          v1.SpanFlags = function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SPAN_FLAGS_DO_NOT_USE"] = 0;
            values[valuesById[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK"] = 255;
            values[valuesById[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK"] = 256;
            values[valuesById[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK"] = 512;
            return values;
          }();
          return v1;
        }();
        return trace;
      }();
      proto.collector = function() {
        var collector = {};
        collector.trace = function() {
          var trace = {};
          trace.v1 = function() {
            var v1 = {};
            v1.TraceService = function() {
              function TraceService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
              }
              (TraceService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TraceService;
              TraceService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
              };
              Object.defineProperty(TraceService.prototype["export"] = function export_(request, callback) {
                return this.rpcCall(export_, $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, request, callback);
              }, "name", { value: "Export" });
              return TraceService;
            }();
            v1.ExportTraceServiceRequest = function() {
              function ExportTraceServiceRequest(properties) {
                this.resourceSpans = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExportTraceServiceRequest.prototype.resourceSpans = $util.emptyArray;
              ExportTraceServiceRequest.create = function create(properties) {
                return new ExportTraceServiceRequest(properties);
              };
              ExportTraceServiceRequest.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resourceSpans != null && message.resourceSpans.length)
                  for (var i = 0;i < message.resourceSpans.length; ++i)
                    $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(10).fork()).ldelim();
                return writer;
              };
              ExportTraceServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExportTraceServiceRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.resourceSpans && message.resourceSpans.length))
                        message.resourceSpans = [];
                      message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExportTraceServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExportTraceServiceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                  if (!Array.isArray(message.resourceSpans))
                    return "resourceSpans: array expected";
                  for (var i = 0;i < message.resourceSpans.length; ++i) {
                    var error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                    if (error)
                      return "resourceSpans." + error;
                  }
                }
                return null;
              };
              ExportTraceServiceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest)
                  return object;
                var message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                if (object.resourceSpans) {
                  if (!Array.isArray(object.resourceSpans))
                    throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                  message.resourceSpans = [];
                  for (var i = 0;i < object.resourceSpans.length; ++i) {
                    if (typeof object.resourceSpans[i] !== "object")
                      throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                    message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                  }
                }
                return message;
              };
              ExportTraceServiceRequest.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.resourceSpans = [];
                if (message.resourceSpans && message.resourceSpans.length) {
                  object.resourceSpans = [];
                  for (var j = 0;j < message.resourceSpans.length; ++j)
                    object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
                }
                return object;
              };
              ExportTraceServiceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExportTraceServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest";
              };
              return ExportTraceServiceRequest;
            }();
            v1.ExportTraceServiceResponse = function() {
              function ExportTraceServiceResponse(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExportTraceServiceResponse.prototype.partialSuccess = null;
              ExportTraceServiceResponse.create = function create(properties) {
                return new ExportTraceServiceResponse(properties);
              };
              ExportTraceServiceResponse.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.partialSuccess != null && Object.hasOwnProperty.call(message, "partialSuccess"))
                  $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(message.partialSuccess, writer.uint32(10).fork()).ldelim();
                return writer;
              };
              ExportTraceServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExportTraceServiceResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.partialSuccess = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(reader, reader.uint32());
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExportTraceServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExportTraceServiceResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess")) {
                  var error = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(message.partialSuccess);
                  if (error)
                    return "partialSuccess." + error;
                }
                return null;
              };
              ExportTraceServiceResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse)
                  return object;
                var message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                if (object.partialSuccess != null) {
                  if (typeof object.partialSuccess !== "object")
                    throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected");
                  message.partialSuccess = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(object.partialSuccess);
                }
                return message;
              };
              ExportTraceServiceResponse.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults)
                  object.partialSuccess = null;
                if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess"))
                  object.partialSuccess = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(message.partialSuccess, options);
                return object;
              };
              ExportTraceServiceResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExportTraceServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse";
              };
              return ExportTraceServiceResponse;
            }();
            v1.ExportTracePartialSuccess = function() {
              function ExportTracePartialSuccess(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExportTracePartialSuccess.prototype.rejectedSpans = null;
              ExportTracePartialSuccess.prototype.errorMessage = null;
              ExportTracePartialSuccess.create = function create(properties) {
                return new ExportTracePartialSuccess(properties);
              };
              ExportTracePartialSuccess.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.rejectedSpans != null && Object.hasOwnProperty.call(message, "rejectedSpans"))
                  writer.uint32(8).int64(message.rejectedSpans);
                if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                  writer.uint32(18).string(message.errorMessage);
                return writer;
              };
              ExportTracePartialSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExportTracePartialSuccess.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.rejectedSpans = reader.int64();
                      break;
                    }
                    case 2: {
                      message.errorMessage = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExportTracePartialSuccess.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExportTracePartialSuccess.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.rejectedSpans != null && message.hasOwnProperty("rejectedSpans")) {
                  if (!$util.isInteger(message.rejectedSpans) && !(message.rejectedSpans && $util.isInteger(message.rejectedSpans.low) && $util.isInteger(message.rejectedSpans.high)))
                    return "rejectedSpans: integer|Long expected";
                }
                if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
                  if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
                }
                return null;
              };
              ExportTracePartialSuccess.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess)
                  return object;
                var message = new $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                if (object.rejectedSpans != null) {
                  if ($util.Long)
                    (message.rejectedSpans = $util.Long.fromValue(object.rejectedSpans)).unsigned = false;
                  else if (typeof object.rejectedSpans === "string")
                    message.rejectedSpans = parseInt(object.rejectedSpans, 10);
                  else if (typeof object.rejectedSpans === "number")
                    message.rejectedSpans = object.rejectedSpans;
                  else if (typeof object.rejectedSpans === "object")
                    message.rejectedSpans = new $util.LongBits(object.rejectedSpans.low >>> 0, object.rejectedSpans.high >>> 0).toNumber();
                }
                if (object.errorMessage != null)
                  message.errorMessage = String(object.errorMessage);
                return message;
              };
              ExportTracePartialSuccess.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.rejectedSpans = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.rejectedSpans = options.longs === String ? "0" : 0;
                  object.errorMessage = "";
                }
                if (message.rejectedSpans != null && message.hasOwnProperty("rejectedSpans"))
                  if (typeof message.rejectedSpans === "number")
                    object.rejectedSpans = options.longs === String ? String(message.rejectedSpans) : message.rejectedSpans;
                  else
                    object.rejectedSpans = options.longs === String ? $util.Long.prototype.toString.call(message.rejectedSpans) : options.longs === Number ? new $util.LongBits(message.rejectedSpans.low >>> 0, message.rejectedSpans.high >>> 0).toNumber() : message.rejectedSpans;
                if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                  object.errorMessage = message.errorMessage;
                return object;
              };
              ExportTracePartialSuccess.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExportTracePartialSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess";
              };
              return ExportTracePartialSuccess;
            }();
            return v1;
          }();
          return trace;
        }();
        collector.metrics = function() {
          var metrics = {};
          metrics.v1 = function() {
            var v1 = {};
            v1.MetricsService = function() {
              function MetricsService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
              }
              (MetricsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MetricsService;
              MetricsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
              };
              Object.defineProperty(MetricsService.prototype["export"] = function export_(request, callback) {
                return this.rpcCall(export_, $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, request, callback);
              }, "name", { value: "Export" });
              return MetricsService;
            }();
            v1.ExportMetricsServiceRequest = function() {
              function ExportMetricsServiceRequest(properties) {
                this.resourceMetrics = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExportMetricsServiceRequest.prototype.resourceMetrics = $util.emptyArray;
              ExportMetricsServiceRequest.create = function create(properties) {
                return new ExportMetricsServiceRequest(properties);
              };
              ExportMetricsServiceRequest.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resourceMetrics != null && message.resourceMetrics.length)
                  for (var i = 0;i < message.resourceMetrics.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(message.resourceMetrics[i], writer.uint32(10).fork()).ldelim();
                return writer;
              };
              ExportMetricsServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExportMetricsServiceRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.resourceMetrics && message.resourceMetrics.length))
                        message.resourceMetrics = [];
                      message.resourceMetrics.push($root.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExportMetricsServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExportMetricsServiceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resourceMetrics != null && message.hasOwnProperty("resourceMetrics")) {
                  if (!Array.isArray(message.resourceMetrics))
                    return "resourceMetrics: array expected";
                  for (var i = 0;i < message.resourceMetrics.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(message.resourceMetrics[i]);
                    if (error)
                      return "resourceMetrics." + error;
                  }
                }
                return null;
              };
              ExportMetricsServiceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest)
                  return object;
                var message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                if (object.resourceMetrics) {
                  if (!Array.isArray(object.resourceMetrics))
                    throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected");
                  message.resourceMetrics = [];
                  for (var i = 0;i < object.resourceMetrics.length; ++i) {
                    if (typeof object.resourceMetrics[i] !== "object")
                      throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected");
                    message.resourceMetrics[i] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(object.resourceMetrics[i]);
                  }
                }
                return message;
              };
              ExportMetricsServiceRequest.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.resourceMetrics = [];
                if (message.resourceMetrics && message.resourceMetrics.length) {
                  object.resourceMetrics = [];
                  for (var j = 0;j < message.resourceMetrics.length; ++j)
                    object.resourceMetrics[j] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(message.resourceMetrics[j], options);
                }
                return object;
              };
              ExportMetricsServiceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExportMetricsServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest";
              };
              return ExportMetricsServiceRequest;
            }();
            v1.ExportMetricsServiceResponse = function() {
              function ExportMetricsServiceResponse(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExportMetricsServiceResponse.prototype.partialSuccess = null;
              ExportMetricsServiceResponse.create = function create(properties) {
                return new ExportMetricsServiceResponse(properties);
              };
              ExportMetricsServiceResponse.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.partialSuccess != null && Object.hasOwnProperty.call(message, "partialSuccess"))
                  $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(message.partialSuccess, writer.uint32(10).fork()).ldelim();
                return writer;
              };
              ExportMetricsServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExportMetricsServiceResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.partialSuccess = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(reader, reader.uint32());
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExportMetricsServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExportMetricsServiceResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess")) {
                  var error = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(message.partialSuccess);
                  if (error)
                    return "partialSuccess." + error;
                }
                return null;
              };
              ExportMetricsServiceResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse)
                  return object;
                var message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                if (object.partialSuccess != null) {
                  if (typeof object.partialSuccess !== "object")
                    throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected");
                  message.partialSuccess = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(object.partialSuccess);
                }
                return message;
              };
              ExportMetricsServiceResponse.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults)
                  object.partialSuccess = null;
                if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess"))
                  object.partialSuccess = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(message.partialSuccess, options);
                return object;
              };
              ExportMetricsServiceResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExportMetricsServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse";
              };
              return ExportMetricsServiceResponse;
            }();
            v1.ExportMetricsPartialSuccess = function() {
              function ExportMetricsPartialSuccess(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExportMetricsPartialSuccess.prototype.rejectedDataPoints = null;
              ExportMetricsPartialSuccess.prototype.errorMessage = null;
              ExportMetricsPartialSuccess.create = function create(properties) {
                return new ExportMetricsPartialSuccess(properties);
              };
              ExportMetricsPartialSuccess.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.rejectedDataPoints != null && Object.hasOwnProperty.call(message, "rejectedDataPoints"))
                  writer.uint32(8).int64(message.rejectedDataPoints);
                if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                  writer.uint32(18).string(message.errorMessage);
                return writer;
              };
              ExportMetricsPartialSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExportMetricsPartialSuccess.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.rejectedDataPoints = reader.int64();
                      break;
                    }
                    case 2: {
                      message.errorMessage = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExportMetricsPartialSuccess.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExportMetricsPartialSuccess.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.rejectedDataPoints != null && message.hasOwnProperty("rejectedDataPoints")) {
                  if (!$util.isInteger(message.rejectedDataPoints) && !(message.rejectedDataPoints && $util.isInteger(message.rejectedDataPoints.low) && $util.isInteger(message.rejectedDataPoints.high)))
                    return "rejectedDataPoints: integer|Long expected";
                }
                if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
                  if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
                }
                return null;
              };
              ExportMetricsPartialSuccess.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess)
                  return object;
                var message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                if (object.rejectedDataPoints != null) {
                  if ($util.Long)
                    (message.rejectedDataPoints = $util.Long.fromValue(object.rejectedDataPoints)).unsigned = false;
                  else if (typeof object.rejectedDataPoints === "string")
                    message.rejectedDataPoints = parseInt(object.rejectedDataPoints, 10);
                  else if (typeof object.rejectedDataPoints === "number")
                    message.rejectedDataPoints = object.rejectedDataPoints;
                  else if (typeof object.rejectedDataPoints === "object")
                    message.rejectedDataPoints = new $util.LongBits(object.rejectedDataPoints.low >>> 0, object.rejectedDataPoints.high >>> 0).toNumber();
                }
                if (object.errorMessage != null)
                  message.errorMessage = String(object.errorMessage);
                return message;
              };
              ExportMetricsPartialSuccess.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.rejectedDataPoints = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.rejectedDataPoints = options.longs === String ? "0" : 0;
                  object.errorMessage = "";
                }
                if (message.rejectedDataPoints != null && message.hasOwnProperty("rejectedDataPoints"))
                  if (typeof message.rejectedDataPoints === "number")
                    object.rejectedDataPoints = options.longs === String ? String(message.rejectedDataPoints) : message.rejectedDataPoints;
                  else
                    object.rejectedDataPoints = options.longs === String ? $util.Long.prototype.toString.call(message.rejectedDataPoints) : options.longs === Number ? new $util.LongBits(message.rejectedDataPoints.low >>> 0, message.rejectedDataPoints.high >>> 0).toNumber() : message.rejectedDataPoints;
                if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                  object.errorMessage = message.errorMessage;
                return object;
              };
              ExportMetricsPartialSuccess.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExportMetricsPartialSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess";
              };
              return ExportMetricsPartialSuccess;
            }();
            return v1;
          }();
          return metrics;
        }();
        return collector;
      }();
      proto.metrics = function() {
        var metrics = {};
        metrics.v1 = function() {
          var v1 = {};
          v1.MetricsData = function() {
            function MetricsData(properties) {
              this.resourceMetrics = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            MetricsData.prototype.resourceMetrics = $util.emptyArray;
            MetricsData.create = function create(properties) {
              return new MetricsData(properties);
            };
            MetricsData.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.resourceMetrics != null && message.resourceMetrics.length)
                for (var i = 0;i < message.resourceMetrics.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(message.resourceMetrics[i], writer.uint32(10).fork()).ldelim();
              return writer;
            };
            MetricsData.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            MetricsData.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.MetricsData;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.resourceMetrics && message.resourceMetrics.length))
                      message.resourceMetrics = [];
                    message.resourceMetrics.push($root.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            MetricsData.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            MetricsData.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.resourceMetrics != null && message.hasOwnProperty("resourceMetrics")) {
                if (!Array.isArray(message.resourceMetrics))
                  return "resourceMetrics: array expected";
                for (var i = 0;i < message.resourceMetrics.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(message.resourceMetrics[i]);
                  if (error)
                    return "resourceMetrics." + error;
                }
              }
              return null;
            };
            MetricsData.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.MetricsData)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.MetricsData;
              if (object.resourceMetrics) {
                if (!Array.isArray(object.resourceMetrics))
                  throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected");
                message.resourceMetrics = [];
                for (var i = 0;i < object.resourceMetrics.length; ++i) {
                  if (typeof object.resourceMetrics[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected");
                  message.resourceMetrics[i] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(object.resourceMetrics[i]);
                }
              }
              return message;
            };
            MetricsData.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.resourceMetrics = [];
              if (message.resourceMetrics && message.resourceMetrics.length) {
                object.resourceMetrics = [];
                for (var j = 0;j < message.resourceMetrics.length; ++j)
                  object.resourceMetrics[j] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(message.resourceMetrics[j], options);
              }
              return object;
            };
            MetricsData.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            MetricsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.MetricsData";
            };
            return MetricsData;
          }();
          v1.ResourceMetrics = function() {
            function ResourceMetrics(properties) {
              this.scopeMetrics = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ResourceMetrics.prototype.resource = null;
            ResourceMetrics.prototype.scopeMetrics = $util.emptyArray;
            ResourceMetrics.prototype.schemaUrl = null;
            ResourceMetrics.create = function create(properties) {
              return new ResourceMetrics(properties);
            };
            ResourceMetrics.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
              if (message.scopeMetrics != null && message.scopeMetrics.length)
                for (var i = 0;i < message.scopeMetrics.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(message.scopeMetrics[i], writer.uint32(18).fork()).ldelim();
              if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                writer.uint32(26).string(message.schemaUrl);
              return writer;
            };
            ResourceMetrics.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ResourceMetrics.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ResourceMetrics;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                    break;
                  }
                  case 2: {
                    if (!(message.scopeMetrics && message.scopeMetrics.length))
                      message.scopeMetrics = [];
                    message.scopeMetrics.push($root.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(reader, reader.uint32()));
                    break;
                  }
                  case 3: {
                    message.schemaUrl = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ResourceMetrics.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ResourceMetrics.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.resource != null && message.hasOwnProperty("resource")) {
                var error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                if (error)
                  return "resource." + error;
              }
              if (message.scopeMetrics != null && message.hasOwnProperty("scopeMetrics")) {
                if (!Array.isArray(message.scopeMetrics))
                  return "scopeMetrics: array expected";
                for (var i = 0;i < message.scopeMetrics.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(message.scopeMetrics[i]);
                  if (error)
                    return "scopeMetrics." + error;
                }
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                if (!$util.isString(message.schemaUrl))
                  return "schemaUrl: string expected";
              }
              return null;
            };
            ResourceMetrics.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.ResourceMetrics)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.ResourceMetrics;
              if (object.resource != null) {
                if (typeof object.resource !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected");
                message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
              }
              if (object.scopeMetrics) {
                if (!Array.isArray(object.scopeMetrics))
                  throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected");
                message.scopeMetrics = [];
                for (var i = 0;i < object.scopeMetrics.length; ++i) {
                  if (typeof object.scopeMetrics[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected");
                  message.scopeMetrics[i] = $root.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(object.scopeMetrics[i]);
                }
              }
              if (object.schemaUrl != null)
                message.schemaUrl = String(object.schemaUrl);
              return message;
            };
            ResourceMetrics.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.scopeMetrics = [];
              if (options.defaults) {
                object.resource = null;
                object.schemaUrl = "";
              }
              if (message.resource != null && message.hasOwnProperty("resource"))
                object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
              if (message.scopeMetrics && message.scopeMetrics.length) {
                object.scopeMetrics = [];
                for (var j = 0;j < message.scopeMetrics.length; ++j)
                  object.scopeMetrics[j] = $root.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(message.scopeMetrics[j], options);
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                object.schemaUrl = message.schemaUrl;
              return object;
            };
            ResourceMetrics.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ResourceMetrics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ResourceMetrics";
            };
            return ResourceMetrics;
          }();
          v1.ScopeMetrics = function() {
            function ScopeMetrics(properties) {
              this.metrics = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ScopeMetrics.prototype.scope = null;
            ScopeMetrics.prototype.metrics = $util.emptyArray;
            ScopeMetrics.prototype.schemaUrl = null;
            ScopeMetrics.create = function create(properties) {
              return new ScopeMetrics(properties);
            };
            ScopeMetrics.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
              if (message.metrics != null && message.metrics.length)
                for (var i = 0;i < message.metrics.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.Metric.encode(message.metrics[i], writer.uint32(18).fork()).ldelim();
              if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                writer.uint32(26).string(message.schemaUrl);
              return writer;
            };
            ScopeMetrics.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ScopeMetrics.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ScopeMetrics;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                    break;
                  }
                  case 2: {
                    if (!(message.metrics && message.metrics.length))
                      message.metrics = [];
                    message.metrics.push($root.opentelemetry.proto.metrics.v1.Metric.decode(reader, reader.uint32()));
                    break;
                  }
                  case 3: {
                    message.schemaUrl = reader.string();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ScopeMetrics.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ScopeMetrics.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.scope != null && message.hasOwnProperty("scope")) {
                var error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                if (error)
                  return "scope." + error;
              }
              if (message.metrics != null && message.hasOwnProperty("metrics")) {
                if (!Array.isArray(message.metrics))
                  return "metrics: array expected";
                for (var i = 0;i < message.metrics.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.Metric.verify(message.metrics[i]);
                  if (error)
                    return "metrics." + error;
                }
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                if (!$util.isString(message.schemaUrl))
                  return "schemaUrl: string expected";
              }
              return null;
            };
            ScopeMetrics.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.ScopeMetrics)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.ScopeMetrics;
              if (object.scope != null) {
                if (typeof object.scope !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
              }
              if (object.metrics) {
                if (!Array.isArray(object.metrics))
                  throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                message.metrics = [];
                for (var i = 0;i < object.metrics.length; ++i) {
                  if (typeof object.metrics[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                  message.metrics[i] = $root.opentelemetry.proto.metrics.v1.Metric.fromObject(object.metrics[i]);
                }
              }
              if (object.schemaUrl != null)
                message.schemaUrl = String(object.schemaUrl);
              return message;
            };
            ScopeMetrics.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.metrics = [];
              if (options.defaults) {
                object.scope = null;
                object.schemaUrl = "";
              }
              if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
              if (message.metrics && message.metrics.length) {
                object.metrics = [];
                for (var j = 0;j < message.metrics.length; ++j)
                  object.metrics[j] = $root.opentelemetry.proto.metrics.v1.Metric.toObject(message.metrics[j], options);
              }
              if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                object.schemaUrl = message.schemaUrl;
              return object;
            };
            ScopeMetrics.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ScopeMetrics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ScopeMetrics";
            };
            return ScopeMetrics;
          }();
          v1.Metric = function() {
            function Metric(properties) {
              this.metadata = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Metric.prototype.name = null;
            Metric.prototype.description = null;
            Metric.prototype.unit = null;
            Metric.prototype.gauge = null;
            Metric.prototype.sum = null;
            Metric.prototype.histogram = null;
            Metric.prototype.exponentialHistogram = null;
            Metric.prototype.summary = null;
            Metric.prototype.metadata = $util.emptyArray;
            var $oneOfFields;
            Object.defineProperty(Metric.prototype, "data", {
              get: $util.oneOfGetter($oneOfFields = ["gauge", "sum", "histogram", "exponentialHistogram", "summary"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            Metric.create = function create(properties) {
              return new Metric(properties);
            };
            Metric.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(10).string(message.name);
              if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(18).string(message.description);
              if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                writer.uint32(26).string(message.unit);
              if (message.gauge != null && Object.hasOwnProperty.call(message, "gauge"))
                $root.opentelemetry.proto.metrics.v1.Gauge.encode(message.gauge, writer.uint32(42).fork()).ldelim();
              if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                $root.opentelemetry.proto.metrics.v1.Sum.encode(message.sum, writer.uint32(58).fork()).ldelim();
              if (message.histogram != null && Object.hasOwnProperty.call(message, "histogram"))
                $root.opentelemetry.proto.metrics.v1.Histogram.encode(message.histogram, writer.uint32(74).fork()).ldelim();
              if (message.exponentialHistogram != null && Object.hasOwnProperty.call(message, "exponentialHistogram"))
                $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(message.exponentialHistogram, writer.uint32(82).fork()).ldelim();
              if (message.summary != null && Object.hasOwnProperty.call(message, "summary"))
                $root.opentelemetry.proto.metrics.v1.Summary.encode(message.summary, writer.uint32(90).fork()).ldelim();
              if (message.metadata != null && message.metadata.length)
                for (var i = 0;i < message.metadata.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.metadata[i], writer.uint32(98).fork()).ldelim();
              return writer;
            };
            Metric.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Metric.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Metric;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    message.name = reader.string();
                    break;
                  }
                  case 2: {
                    message.description = reader.string();
                    break;
                  }
                  case 3: {
                    message.unit = reader.string();
                    break;
                  }
                  case 5: {
                    message.gauge = $root.opentelemetry.proto.metrics.v1.Gauge.decode(reader, reader.uint32());
                    break;
                  }
                  case 7: {
                    message.sum = $root.opentelemetry.proto.metrics.v1.Sum.decode(reader, reader.uint32());
                    break;
                  }
                  case 9: {
                    message.histogram = $root.opentelemetry.proto.metrics.v1.Histogram.decode(reader, reader.uint32());
                    break;
                  }
                  case 10: {
                    message.exponentialHistogram = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(reader, reader.uint32());
                    break;
                  }
                  case 11: {
                    message.summary = $root.opentelemetry.proto.metrics.v1.Summary.decode(reader, reader.uint32());
                    break;
                  }
                  case 12: {
                    if (!(message.metadata && message.metadata.length))
                      message.metadata = [];
                    message.metadata.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Metric.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Metric.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              var properties = {};
              if (message.name != null && message.hasOwnProperty("name")) {
                if (!$util.isString(message.name))
                  return "name: string expected";
              }
              if (message.description != null && message.hasOwnProperty("description")) {
                if (!$util.isString(message.description))
                  return "description: string expected";
              }
              if (message.unit != null && message.hasOwnProperty("unit")) {
                if (!$util.isString(message.unit))
                  return "unit: string expected";
              }
              if (message.gauge != null && message.hasOwnProperty("gauge")) {
                properties.data = 1;
                {
                  var error = $root.opentelemetry.proto.metrics.v1.Gauge.verify(message.gauge);
                  if (error)
                    return "gauge." + error;
                }
              }
              if (message.sum != null && message.hasOwnProperty("sum")) {
                if (properties.data === 1)
                  return "data: multiple values";
                properties.data = 1;
                {
                  var error = $root.opentelemetry.proto.metrics.v1.Sum.verify(message.sum);
                  if (error)
                    return "sum." + error;
                }
              }
              if (message.histogram != null && message.hasOwnProperty("histogram")) {
                if (properties.data === 1)
                  return "data: multiple values";
                properties.data = 1;
                {
                  var error = $root.opentelemetry.proto.metrics.v1.Histogram.verify(message.histogram);
                  if (error)
                    return "histogram." + error;
                }
              }
              if (message.exponentialHistogram != null && message.hasOwnProperty("exponentialHistogram")) {
                if (properties.data === 1)
                  return "data: multiple values";
                properties.data = 1;
                {
                  var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(message.exponentialHistogram);
                  if (error)
                    return "exponentialHistogram." + error;
                }
              }
              if (message.summary != null && message.hasOwnProperty("summary")) {
                if (properties.data === 1)
                  return "data: multiple values";
                properties.data = 1;
                {
                  var error = $root.opentelemetry.proto.metrics.v1.Summary.verify(message.summary);
                  if (error)
                    return "summary." + error;
                }
              }
              if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!Array.isArray(message.metadata))
                  return "metadata: array expected";
                for (var i = 0;i < message.metadata.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.metadata[i]);
                  if (error)
                    return "metadata." + error;
                }
              }
              return null;
            };
            Metric.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.Metric)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.Metric;
              if (object.name != null)
                message.name = String(object.name);
              if (object.description != null)
                message.description = String(object.description);
              if (object.unit != null)
                message.unit = String(object.unit);
              if (object.gauge != null) {
                if (typeof object.gauge !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                message.gauge = $root.opentelemetry.proto.metrics.v1.Gauge.fromObject(object.gauge);
              }
              if (object.sum != null) {
                if (typeof object.sum !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                message.sum = $root.opentelemetry.proto.metrics.v1.Sum.fromObject(object.sum);
              }
              if (object.histogram != null) {
                if (typeof object.histogram !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                message.histogram = $root.opentelemetry.proto.metrics.v1.Histogram.fromObject(object.histogram);
              }
              if (object.exponentialHistogram != null) {
                if (typeof object.exponentialHistogram !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected");
                message.exponentialHistogram = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(object.exponentialHistogram);
              }
              if (object.summary != null) {
                if (typeof object.summary !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                message.summary = $root.opentelemetry.proto.metrics.v1.Summary.fromObject(object.summary);
              }
              if (object.metadata) {
                if (!Array.isArray(object.metadata))
                  throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                message.metadata = [];
                for (var i = 0;i < object.metadata.length; ++i) {
                  if (typeof object.metadata[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                  message.metadata[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.metadata[i]);
                }
              }
              return message;
            };
            Metric.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.metadata = [];
              if (options.defaults) {
                object.name = "";
                object.description = "";
                object.unit = "";
              }
              if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
              if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
              if (message.unit != null && message.hasOwnProperty("unit"))
                object.unit = message.unit;
              if (message.gauge != null && message.hasOwnProperty("gauge")) {
                object.gauge = $root.opentelemetry.proto.metrics.v1.Gauge.toObject(message.gauge, options);
                if (options.oneofs)
                  object.data = "gauge";
              }
              if (message.sum != null && message.hasOwnProperty("sum")) {
                object.sum = $root.opentelemetry.proto.metrics.v1.Sum.toObject(message.sum, options);
                if (options.oneofs)
                  object.data = "sum";
              }
              if (message.histogram != null && message.hasOwnProperty("histogram")) {
                object.histogram = $root.opentelemetry.proto.metrics.v1.Histogram.toObject(message.histogram, options);
                if (options.oneofs)
                  object.data = "histogram";
              }
              if (message.exponentialHistogram != null && message.hasOwnProperty("exponentialHistogram")) {
                object.exponentialHistogram = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(message.exponentialHistogram, options);
                if (options.oneofs)
                  object.data = "exponentialHistogram";
              }
              if (message.summary != null && message.hasOwnProperty("summary")) {
                object.summary = $root.opentelemetry.proto.metrics.v1.Summary.toObject(message.summary, options);
                if (options.oneofs)
                  object.data = "summary";
              }
              if (message.metadata && message.metadata.length) {
                object.metadata = [];
                for (var j = 0;j < message.metadata.length; ++j)
                  object.metadata[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.metadata[j], options);
              }
              return object;
            };
            Metric.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Metric.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Metric";
            };
            return Metric;
          }();
          v1.Gauge = function() {
            function Gauge(properties) {
              this.dataPoints = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Gauge.prototype.dataPoints = $util.emptyArray;
            Gauge.create = function create(properties) {
              return new Gauge(properties);
            };
            Gauge.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.dataPoints != null && message.dataPoints.length)
                for (var i = 0;i < message.dataPoints.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(message.dataPoints[i], writer.uint32(10).fork()).ldelim();
              return writer;
            };
            Gauge.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Gauge.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Gauge;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.dataPoints && message.dataPoints.length))
                      message.dataPoints = [];
                    message.dataPoints.push($root.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Gauge.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Gauge.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(message.dataPoints))
                  return "dataPoints: array expected";
                for (var i = 0;i < message.dataPoints.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(message.dataPoints[i]);
                  if (error)
                    return "dataPoints." + error;
                }
              }
              return null;
            };
            Gauge.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.Gauge)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.Gauge;
              if (object.dataPoints) {
                if (!Array.isArray(object.dataPoints))
                  throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                message.dataPoints = [];
                for (var i = 0;i < object.dataPoints.length; ++i) {
                  if (typeof object.dataPoints[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                  message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(object.dataPoints[i]);
                }
              }
              return message;
            };
            Gauge.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.dataPoints = [];
              if (message.dataPoints && message.dataPoints.length) {
                object.dataPoints = [];
                for (var j = 0;j < message.dataPoints.length; ++j)
                  object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(message.dataPoints[j], options);
              }
              return object;
            };
            Gauge.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Gauge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Gauge";
            };
            return Gauge;
          }();
          v1.Sum = function() {
            function Sum(properties) {
              this.dataPoints = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Sum.prototype.dataPoints = $util.emptyArray;
            Sum.prototype.aggregationTemporality = null;
            Sum.prototype.isMonotonic = null;
            Sum.create = function create(properties) {
              return new Sum(properties);
            };
            Sum.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.dataPoints != null && message.dataPoints.length)
                for (var i = 0;i < message.dataPoints.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(message.dataPoints[i], writer.uint32(10).fork()).ldelim();
              if (message.aggregationTemporality != null && Object.hasOwnProperty.call(message, "aggregationTemporality"))
                writer.uint32(16).int32(message.aggregationTemporality);
              if (message.isMonotonic != null && Object.hasOwnProperty.call(message, "isMonotonic"))
                writer.uint32(24).bool(message.isMonotonic);
              return writer;
            };
            Sum.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Sum.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Sum;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.dataPoints && message.dataPoints.length))
                      message.dataPoints = [];
                    message.dataPoints.push($root.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.aggregationTemporality = reader.int32();
                    break;
                  }
                  case 3: {
                    message.isMonotonic = reader.bool();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Sum.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Sum.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(message.dataPoints))
                  return "dataPoints: array expected";
                for (var i = 0;i < message.dataPoints.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(message.dataPoints[i]);
                  if (error)
                    return "dataPoints." + error;
                }
              }
              if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                switch (message.aggregationTemporality) {
                  default:
                    return "aggregationTemporality: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                    break;
                }
              if (message.isMonotonic != null && message.hasOwnProperty("isMonotonic")) {
                if (typeof message.isMonotonic !== "boolean")
                  return "isMonotonic: boolean expected";
              }
              return null;
            };
            Sum.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.Sum)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.Sum;
              if (object.dataPoints) {
                if (!Array.isArray(object.dataPoints))
                  throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                message.dataPoints = [];
                for (var i = 0;i < object.dataPoints.length; ++i) {
                  if (typeof object.dataPoints[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                  message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(object.dataPoints[i]);
                }
              }
              switch (object.aggregationTemporality) {
                default:
                  if (typeof object.aggregationTemporality === "number") {
                    message.aggregationTemporality = object.aggregationTemporality;
                    break;
                  }
                  break;
                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                case 0:
                  message.aggregationTemporality = 0;
                  break;
                case "AGGREGATION_TEMPORALITY_DELTA":
                case 1:
                  message.aggregationTemporality = 1;
                  break;
                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                case 2:
                  message.aggregationTemporality = 2;
                  break;
              }
              if (object.isMonotonic != null)
                message.isMonotonic = Boolean(object.isMonotonic);
              return message;
            };
            Sum.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.dataPoints = [];
              if (options.defaults) {
                object.aggregationTemporality = options.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                object.isMonotonic = false;
              }
              if (message.dataPoints && message.dataPoints.length) {
                object.dataPoints = [];
                for (var j = 0;j < message.dataPoints.length; ++j)
                  object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(message.dataPoints[j], options);
              }
              if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                object.aggregationTemporality = options.enums === String ? $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] === undefined ? message.aggregationTemporality : $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] : message.aggregationTemporality;
              if (message.isMonotonic != null && message.hasOwnProperty("isMonotonic"))
                object.isMonotonic = message.isMonotonic;
              return object;
            };
            Sum.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Sum.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Sum";
            };
            return Sum;
          }();
          v1.Histogram = function() {
            function Histogram(properties) {
              this.dataPoints = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Histogram.prototype.dataPoints = $util.emptyArray;
            Histogram.prototype.aggregationTemporality = null;
            Histogram.create = function create(properties) {
              return new Histogram(properties);
            };
            Histogram.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.dataPoints != null && message.dataPoints.length)
                for (var i = 0;i < message.dataPoints.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(message.dataPoints[i], writer.uint32(10).fork()).ldelim();
              if (message.aggregationTemporality != null && Object.hasOwnProperty.call(message, "aggregationTemporality"))
                writer.uint32(16).int32(message.aggregationTemporality);
              return writer;
            };
            Histogram.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Histogram.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Histogram;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.dataPoints && message.dataPoints.length))
                      message.dataPoints = [];
                    message.dataPoints.push($root.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.aggregationTemporality = reader.int32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Histogram.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Histogram.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(message.dataPoints))
                  return "dataPoints: array expected";
                for (var i = 0;i < message.dataPoints.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(message.dataPoints[i]);
                  if (error)
                    return "dataPoints." + error;
                }
              }
              if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                switch (message.aggregationTemporality) {
                  default:
                    return "aggregationTemporality: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                    break;
                }
              return null;
            };
            Histogram.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.Histogram)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.Histogram;
              if (object.dataPoints) {
                if (!Array.isArray(object.dataPoints))
                  throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                message.dataPoints = [];
                for (var i = 0;i < object.dataPoints.length; ++i) {
                  if (typeof object.dataPoints[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                  message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(object.dataPoints[i]);
                }
              }
              switch (object.aggregationTemporality) {
                default:
                  if (typeof object.aggregationTemporality === "number") {
                    message.aggregationTemporality = object.aggregationTemporality;
                    break;
                  }
                  break;
                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                case 0:
                  message.aggregationTemporality = 0;
                  break;
                case "AGGREGATION_TEMPORALITY_DELTA":
                case 1:
                  message.aggregationTemporality = 1;
                  break;
                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                case 2:
                  message.aggregationTemporality = 2;
                  break;
              }
              return message;
            };
            Histogram.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.dataPoints = [];
              if (options.defaults)
                object.aggregationTemporality = options.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
              if (message.dataPoints && message.dataPoints.length) {
                object.dataPoints = [];
                for (var j = 0;j < message.dataPoints.length; ++j)
                  object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(message.dataPoints[j], options);
              }
              if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                object.aggregationTemporality = options.enums === String ? $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] === undefined ? message.aggregationTemporality : $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] : message.aggregationTemporality;
              return object;
            };
            Histogram.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Histogram.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Histogram";
            };
            return Histogram;
          }();
          v1.ExponentialHistogram = function() {
            function ExponentialHistogram(properties) {
              this.dataPoints = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ExponentialHistogram.prototype.dataPoints = $util.emptyArray;
            ExponentialHistogram.prototype.aggregationTemporality = null;
            ExponentialHistogram.create = function create(properties) {
              return new ExponentialHistogram(properties);
            };
            ExponentialHistogram.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.dataPoints != null && message.dataPoints.length)
                for (var i = 0;i < message.dataPoints.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(message.dataPoints[i], writer.uint32(10).fork()).ldelim();
              if (message.aggregationTemporality != null && Object.hasOwnProperty.call(message, "aggregationTemporality"))
                writer.uint32(16).int32(message.aggregationTemporality);
              return writer;
            };
            ExponentialHistogram.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ExponentialHistogram.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogram;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.dataPoints && message.dataPoints.length))
                      message.dataPoints = [];
                    message.dataPoints.push($root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.aggregationTemporality = reader.int32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ExponentialHistogram.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ExponentialHistogram.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(message.dataPoints))
                  return "dataPoints: array expected";
                for (var i = 0;i < message.dataPoints.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(message.dataPoints[i]);
                  if (error)
                    return "dataPoints." + error;
                }
              }
              if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                switch (message.aggregationTemporality) {
                  default:
                    return "aggregationTemporality: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                    break;
                }
              return null;
            };
            ExponentialHistogram.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.ExponentialHistogram)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogram;
              if (object.dataPoints) {
                if (!Array.isArray(object.dataPoints))
                  throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected");
                message.dataPoints = [];
                for (var i = 0;i < object.dataPoints.length; ++i) {
                  if (typeof object.dataPoints[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected");
                  message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(object.dataPoints[i]);
                }
              }
              switch (object.aggregationTemporality) {
                default:
                  if (typeof object.aggregationTemporality === "number") {
                    message.aggregationTemporality = object.aggregationTemporality;
                    break;
                  }
                  break;
                case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                case 0:
                  message.aggregationTemporality = 0;
                  break;
                case "AGGREGATION_TEMPORALITY_DELTA":
                case 1:
                  message.aggregationTemporality = 1;
                  break;
                case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                case 2:
                  message.aggregationTemporality = 2;
                  break;
              }
              return message;
            };
            ExponentialHistogram.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.dataPoints = [];
              if (options.defaults)
                object.aggregationTemporality = options.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
              if (message.dataPoints && message.dataPoints.length) {
                object.dataPoints = [];
                for (var j = 0;j < message.dataPoints.length; ++j)
                  object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(message.dataPoints[j], options);
              }
              if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                object.aggregationTemporality = options.enums === String ? $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] === undefined ? message.aggregationTemporality : $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] : message.aggregationTemporality;
              return object;
            };
            ExponentialHistogram.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ExponentialHistogram.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ExponentialHistogram";
            };
            return ExponentialHistogram;
          }();
          v1.Summary = function() {
            function Summary(properties) {
              this.dataPoints = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Summary.prototype.dataPoints = $util.emptyArray;
            Summary.create = function create(properties) {
              return new Summary(properties);
            };
            Summary.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.dataPoints != null && message.dataPoints.length)
                for (var i = 0;i < message.dataPoints.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(message.dataPoints[i], writer.uint32(10).fork()).ldelim();
              return writer;
            };
            Summary.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Summary.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Summary;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.dataPoints && message.dataPoints.length))
                      message.dataPoints = [];
                    message.dataPoints.push($root.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(reader, reader.uint32()));
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Summary.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Summary.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(message.dataPoints))
                  return "dataPoints: array expected";
                for (var i = 0;i < message.dataPoints.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(message.dataPoints[i]);
                  if (error)
                    return "dataPoints." + error;
                }
              }
              return null;
            };
            Summary.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.Summary)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.Summary;
              if (object.dataPoints) {
                if (!Array.isArray(object.dataPoints))
                  throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                message.dataPoints = [];
                for (var i = 0;i < object.dataPoints.length; ++i) {
                  if (typeof object.dataPoints[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                  message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(object.dataPoints[i]);
                }
              }
              return message;
            };
            Summary.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.dataPoints = [];
              if (message.dataPoints && message.dataPoints.length) {
                object.dataPoints = [];
                for (var j = 0;j < message.dataPoints.length; ++j)
                  object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(message.dataPoints[j], options);
              }
              return object;
            };
            Summary.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Summary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Summary";
            };
            return Summary;
          }();
          v1.AggregationTemporality = function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0;
            values[valuesById[1] = "AGGREGATION_TEMPORALITY_DELTA"] = 1;
            values[valuesById[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2;
            return values;
          }();
          v1.DataPointFlags = function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DATA_POINT_FLAGS_DO_NOT_USE"] = 0;
            values[valuesById[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK"] = 1;
            return values;
          }();
          v1.NumberDataPoint = function() {
            function NumberDataPoint(properties) {
              this.attributes = [];
              this.exemplars = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            NumberDataPoint.prototype.attributes = $util.emptyArray;
            NumberDataPoint.prototype.startTimeUnixNano = null;
            NumberDataPoint.prototype.timeUnixNano = null;
            NumberDataPoint.prototype.asDouble = null;
            NumberDataPoint.prototype.asInt = null;
            NumberDataPoint.prototype.exemplars = $util.emptyArray;
            NumberDataPoint.prototype.flags = null;
            var $oneOfFields;
            Object.defineProperty(NumberDataPoint.prototype, "value", {
              get: $util.oneOfGetter($oneOfFields = ["asDouble", "asInt"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            NumberDataPoint.create = function create(properties) {
              return new NumberDataPoint(properties);
            };
            NumberDataPoint.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                writer.uint32(17).fixed64(message.startTimeUnixNano);
              if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                writer.uint32(25).fixed64(message.timeUnixNano);
              if (message.asDouble != null && Object.hasOwnProperty.call(message, "asDouble"))
                writer.uint32(33).double(message.asDouble);
              if (message.exemplars != null && message.exemplars.length)
                for (var i = 0;i < message.exemplars.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.Exemplar.encode(message.exemplars[i], writer.uint32(42).fork()).ldelim();
              if (message.asInt != null && Object.hasOwnProperty.call(message, "asInt"))
                writer.uint32(49).sfixed64(message.asInt);
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(58).fork()).ldelim();
              if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(64).uint32(message.flags);
              return writer;
            };
            NumberDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            NumberDataPoint.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.NumberDataPoint;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 7: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.startTimeUnixNano = reader.fixed64();
                    break;
                  }
                  case 3: {
                    message.timeUnixNano = reader.fixed64();
                    break;
                  }
                  case 4: {
                    message.asDouble = reader.double();
                    break;
                  }
                  case 6: {
                    message.asInt = reader.sfixed64();
                    break;
                  }
                  case 5: {
                    if (!(message.exemplars && message.exemplars.length))
                      message.exemplars = [];
                    message.exemplars.push($root.opentelemetry.proto.metrics.v1.Exemplar.decode(reader, reader.uint32()));
                    break;
                  }
                  case 8: {
                    message.flags = reader.uint32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            NumberDataPoint.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            NumberDataPoint.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              var properties = {};
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                  return "startTimeUnixNano: integer|Long expected";
              }
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                  return "timeUnixNano: integer|Long expected";
              }
              if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                properties.value = 1;
                if (typeof message.asDouble !== "number")
                  return "asDouble: number expected";
              }
              if (message.asInt != null && message.hasOwnProperty("asInt")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                if (!$util.isInteger(message.asInt) && !(message.asInt && $util.isInteger(message.asInt.low) && $util.isInteger(message.asInt.high)))
                  return "asInt: integer|Long expected";
              }
              if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                if (!Array.isArray(message.exemplars))
                  return "exemplars: array expected";
                for (var i = 0;i < message.exemplars.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.Exemplar.verify(message.exemplars[i]);
                  if (error)
                    return "exemplars." + error;
                }
              }
              if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!$util.isInteger(message.flags))
                  return "flags: integer expected";
              }
              return null;
            };
            NumberDataPoint.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.NumberDataPoint)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.NumberDataPoint;
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.startTimeUnixNano != null) {
                if ($util.Long)
                  (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                else if (typeof object.startTimeUnixNano === "string")
                  message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                else if (typeof object.startTimeUnixNano === "number")
                  message.startTimeUnixNano = object.startTimeUnixNano;
                else if (typeof object.startTimeUnixNano === "object")
                  message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (object.timeUnixNano != null) {
                if ($util.Long)
                  (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                else if (typeof object.timeUnixNano === "string")
                  message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                else if (typeof object.timeUnixNano === "number")
                  message.timeUnixNano = object.timeUnixNano;
                else if (typeof object.timeUnixNano === "object")
                  message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
              }
              if (object.asDouble != null)
                message.asDouble = Number(object.asDouble);
              if (object.asInt != null) {
                if ($util.Long)
                  (message.asInt = $util.Long.fromValue(object.asInt)).unsigned = false;
                else if (typeof object.asInt === "string")
                  message.asInt = parseInt(object.asInt, 10);
                else if (typeof object.asInt === "number")
                  message.asInt = object.asInt;
                else if (typeof object.asInt === "object")
                  message.asInt = new $util.LongBits(object.asInt.low >>> 0, object.asInt.high >>> 0).toNumber();
              }
              if (object.exemplars) {
                if (!Array.isArray(object.exemplars))
                  throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected");
                message.exemplars = [];
                for (var i = 0;i < object.exemplars.length; ++i) {
                  if (typeof object.exemplars[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected");
                  message.exemplars[i] = $root.opentelemetry.proto.metrics.v1.Exemplar.fromObject(object.exemplars[i]);
                }
              }
              if (object.flags != null)
                message.flags = object.flags >>> 0;
              return message;
            };
            NumberDataPoint.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.exemplars = [];
                object.attributes = [];
              }
              if (options.defaults) {
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.startTimeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.timeUnixNano = options.longs === String ? "0" : 0;
                object.flags = 0;
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                if (typeof message.startTimeUnixNano === "number")
                  object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                else
                  object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                if (typeof message.timeUnixNano === "number")
                  object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                else
                  object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
              if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                object.asDouble = options.json && !isFinite(message.asDouble) ? String(message.asDouble) : message.asDouble;
                if (options.oneofs)
                  object.value = "asDouble";
              }
              if (message.exemplars && message.exemplars.length) {
                object.exemplars = [];
                for (var j = 0;j < message.exemplars.length; ++j)
                  object.exemplars[j] = $root.opentelemetry.proto.metrics.v1.Exemplar.toObject(message.exemplars[j], options);
              }
              if (message.asInt != null && message.hasOwnProperty("asInt")) {
                if (typeof message.asInt === "number")
                  object.asInt = options.longs === String ? String(message.asInt) : message.asInt;
                else
                  object.asInt = options.longs === String ? $util.Long.prototype.toString.call(message.asInt) : options.longs === Number ? new $util.LongBits(message.asInt.low >>> 0, message.asInt.high >>> 0).toNumber() : message.asInt;
                if (options.oneofs)
                  object.value = "asInt";
              }
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
              return object;
            };
            NumberDataPoint.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            NumberDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.NumberDataPoint";
            };
            return NumberDataPoint;
          }();
          v1.HistogramDataPoint = function() {
            function HistogramDataPoint(properties) {
              this.attributes = [];
              this.bucketCounts = [];
              this.explicitBounds = [];
              this.exemplars = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            HistogramDataPoint.prototype.attributes = $util.emptyArray;
            HistogramDataPoint.prototype.startTimeUnixNano = null;
            HistogramDataPoint.prototype.timeUnixNano = null;
            HistogramDataPoint.prototype.count = null;
            HistogramDataPoint.prototype.sum = null;
            HistogramDataPoint.prototype.bucketCounts = $util.emptyArray;
            HistogramDataPoint.prototype.explicitBounds = $util.emptyArray;
            HistogramDataPoint.prototype.exemplars = $util.emptyArray;
            HistogramDataPoint.prototype.flags = null;
            HistogramDataPoint.prototype.min = null;
            HistogramDataPoint.prototype.max = null;
            var $oneOfFields;
            Object.defineProperty(HistogramDataPoint.prototype, "_sum", {
              get: $util.oneOfGetter($oneOfFields = ["sum"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            Object.defineProperty(HistogramDataPoint.prototype, "_min", {
              get: $util.oneOfGetter($oneOfFields = ["min"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            Object.defineProperty(HistogramDataPoint.prototype, "_max", {
              get: $util.oneOfGetter($oneOfFields = ["max"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            HistogramDataPoint.create = function create(properties) {
              return new HistogramDataPoint(properties);
            };
            HistogramDataPoint.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                writer.uint32(17).fixed64(message.startTimeUnixNano);
              if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                writer.uint32(25).fixed64(message.timeUnixNano);
              if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(33).fixed64(message.count);
              if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                writer.uint32(41).double(message.sum);
              if (message.bucketCounts != null && message.bucketCounts.length) {
                writer.uint32(50).fork();
                for (var i = 0;i < message.bucketCounts.length; ++i)
                  writer.fixed64(message.bucketCounts[i]);
                writer.ldelim();
              }
              if (message.explicitBounds != null && message.explicitBounds.length) {
                writer.uint32(58).fork();
                for (var i = 0;i < message.explicitBounds.length; ++i)
                  writer.double(message.explicitBounds[i]);
                writer.ldelim();
              }
              if (message.exemplars != null && message.exemplars.length)
                for (var i = 0;i < message.exemplars.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.Exemplar.encode(message.exemplars[i], writer.uint32(66).fork()).ldelim();
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(74).fork()).ldelim();
              if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(80).uint32(message.flags);
              if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                writer.uint32(89).double(message.min);
              if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(97).double(message.max);
              return writer;
            };
            HistogramDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            HistogramDataPoint.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.HistogramDataPoint;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 9: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.startTimeUnixNano = reader.fixed64();
                    break;
                  }
                  case 3: {
                    message.timeUnixNano = reader.fixed64();
                    break;
                  }
                  case 4: {
                    message.count = reader.fixed64();
                    break;
                  }
                  case 5: {
                    message.sum = reader.double();
                    break;
                  }
                  case 6: {
                    if (!(message.bucketCounts && message.bucketCounts.length))
                      message.bucketCounts = [];
                    if ((tag & 7) === 2) {
                      var end2 = reader.uint32() + reader.pos;
                      while (reader.pos < end2)
                        message.bucketCounts.push(reader.fixed64());
                    } else
                      message.bucketCounts.push(reader.fixed64());
                    break;
                  }
                  case 7: {
                    if (!(message.explicitBounds && message.explicitBounds.length))
                      message.explicitBounds = [];
                    if ((tag & 7) === 2) {
                      var end2 = reader.uint32() + reader.pos;
                      while (reader.pos < end2)
                        message.explicitBounds.push(reader.double());
                    } else
                      message.explicitBounds.push(reader.double());
                    break;
                  }
                  case 8: {
                    if (!(message.exemplars && message.exemplars.length))
                      message.exemplars = [];
                    message.exemplars.push($root.opentelemetry.proto.metrics.v1.Exemplar.decode(reader, reader.uint32()));
                    break;
                  }
                  case 10: {
                    message.flags = reader.uint32();
                    break;
                  }
                  case 11: {
                    message.min = reader.double();
                    break;
                  }
                  case 12: {
                    message.max = reader.double();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            HistogramDataPoint.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            HistogramDataPoint.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              var properties = {};
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                  return "startTimeUnixNano: integer|Long expected";
              }
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                  return "timeUnixNano: integer|Long expected";
              }
              if (message.count != null && message.hasOwnProperty("count")) {
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                  return "count: integer|Long expected";
              }
              if (message.sum != null && message.hasOwnProperty("sum")) {
                properties._sum = 1;
                if (typeof message.sum !== "number")
                  return "sum: number expected";
              }
              if (message.bucketCounts != null && message.hasOwnProperty("bucketCounts")) {
                if (!Array.isArray(message.bucketCounts))
                  return "bucketCounts: array expected";
                for (var i = 0;i < message.bucketCounts.length; ++i)
                  if (!$util.isInteger(message.bucketCounts[i]) && !(message.bucketCounts[i] && $util.isInteger(message.bucketCounts[i].low) && $util.isInteger(message.bucketCounts[i].high)))
                    return "bucketCounts: integer|Long[] expected";
              }
              if (message.explicitBounds != null && message.hasOwnProperty("explicitBounds")) {
                if (!Array.isArray(message.explicitBounds))
                  return "explicitBounds: array expected";
                for (var i = 0;i < message.explicitBounds.length; ++i)
                  if (typeof message.explicitBounds[i] !== "number")
                    return "explicitBounds: number[] expected";
              }
              if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                if (!Array.isArray(message.exemplars))
                  return "exemplars: array expected";
                for (var i = 0;i < message.exemplars.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.Exemplar.verify(message.exemplars[i]);
                  if (error)
                    return "exemplars." + error;
                }
              }
              if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!$util.isInteger(message.flags))
                  return "flags: integer expected";
              }
              if (message.min != null && message.hasOwnProperty("min")) {
                properties._min = 1;
                if (typeof message.min !== "number")
                  return "min: number expected";
              }
              if (message.max != null && message.hasOwnProperty("max")) {
                properties._max = 1;
                if (typeof message.max !== "number")
                  return "max: number expected";
              }
              return null;
            };
            HistogramDataPoint.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.HistogramDataPoint)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.HistogramDataPoint;
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.startTimeUnixNano != null) {
                if ($util.Long)
                  (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                else if (typeof object.startTimeUnixNano === "string")
                  message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                else if (typeof object.startTimeUnixNano === "number")
                  message.startTimeUnixNano = object.startTimeUnixNano;
                else if (typeof object.startTimeUnixNano === "object")
                  message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (object.timeUnixNano != null) {
                if ($util.Long)
                  (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                else if (typeof object.timeUnixNano === "string")
                  message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                else if (typeof object.timeUnixNano === "number")
                  message.timeUnixNano = object.timeUnixNano;
                else if (typeof object.timeUnixNano === "object")
                  message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
              }
              if (object.count != null) {
                if ($util.Long)
                  (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                  message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                  message.count = object.count;
                else if (typeof object.count === "object")
                  message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
              }
              if (object.sum != null)
                message.sum = Number(object.sum);
              if (object.bucketCounts) {
                if (!Array.isArray(object.bucketCounts))
                  throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected");
                message.bucketCounts = [];
                for (var i = 0;i < object.bucketCounts.length; ++i)
                  if ($util.Long)
                    (message.bucketCounts[i] = $util.Long.fromValue(object.bucketCounts[i])).unsigned = false;
                  else if (typeof object.bucketCounts[i] === "string")
                    message.bucketCounts[i] = parseInt(object.bucketCounts[i], 10);
                  else if (typeof object.bucketCounts[i] === "number")
                    message.bucketCounts[i] = object.bucketCounts[i];
                  else if (typeof object.bucketCounts[i] === "object")
                    message.bucketCounts[i] = new $util.LongBits(object.bucketCounts[i].low >>> 0, object.bucketCounts[i].high >>> 0).toNumber();
              }
              if (object.explicitBounds) {
                if (!Array.isArray(object.explicitBounds))
                  throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected");
                message.explicitBounds = [];
                for (var i = 0;i < object.explicitBounds.length; ++i)
                  message.explicitBounds[i] = Number(object.explicitBounds[i]);
              }
              if (object.exemplars) {
                if (!Array.isArray(object.exemplars))
                  throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected");
                message.exemplars = [];
                for (var i = 0;i < object.exemplars.length; ++i) {
                  if (typeof object.exemplars[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected");
                  message.exemplars[i] = $root.opentelemetry.proto.metrics.v1.Exemplar.fromObject(object.exemplars[i]);
                }
              }
              if (object.flags != null)
                message.flags = object.flags >>> 0;
              if (object.min != null)
                message.min = Number(object.min);
              if (object.max != null)
                message.max = Number(object.max);
              return message;
            };
            HistogramDataPoint.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.bucketCounts = [];
                object.explicitBounds = [];
                object.exemplars = [];
                object.attributes = [];
              }
              if (options.defaults) {
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.startTimeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.timeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.count = options.longs === String ? "0" : 0;
                object.flags = 0;
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                if (typeof message.startTimeUnixNano === "number")
                  object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                else
                  object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                if (typeof message.timeUnixNano === "number")
                  object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                else
                  object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
              if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                  object.count = options.longs === String ? String(message.count) : message.count;
                else
                  object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
              if (message.sum != null && message.hasOwnProperty("sum")) {
                object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
                if (options.oneofs)
                  object._sum = "sum";
              }
              if (message.bucketCounts && message.bucketCounts.length) {
                object.bucketCounts = [];
                for (var j = 0;j < message.bucketCounts.length; ++j)
                  if (typeof message.bucketCounts[j] === "number")
                    object.bucketCounts[j] = options.longs === String ? String(message.bucketCounts[j]) : message.bucketCounts[j];
                  else
                    object.bucketCounts[j] = options.longs === String ? $util.Long.prototype.toString.call(message.bucketCounts[j]) : options.longs === Number ? new $util.LongBits(message.bucketCounts[j].low >>> 0, message.bucketCounts[j].high >>> 0).toNumber() : message.bucketCounts[j];
              }
              if (message.explicitBounds && message.explicitBounds.length) {
                object.explicitBounds = [];
                for (var j = 0;j < message.explicitBounds.length; ++j)
                  object.explicitBounds[j] = options.json && !isFinite(message.explicitBounds[j]) ? String(message.explicitBounds[j]) : message.explicitBounds[j];
              }
              if (message.exemplars && message.exemplars.length) {
                object.exemplars = [];
                for (var j = 0;j < message.exemplars.length; ++j)
                  object.exemplars[j] = $root.opentelemetry.proto.metrics.v1.Exemplar.toObject(message.exemplars[j], options);
              }
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
              if (message.min != null && message.hasOwnProperty("min")) {
                object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                if (options.oneofs)
                  object._min = "min";
              }
              if (message.max != null && message.hasOwnProperty("max")) {
                object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                if (options.oneofs)
                  object._max = "max";
              }
              return object;
            };
            HistogramDataPoint.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            HistogramDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.HistogramDataPoint";
            };
            return HistogramDataPoint;
          }();
          v1.ExponentialHistogramDataPoint = function() {
            function ExponentialHistogramDataPoint(properties) {
              this.attributes = [];
              this.exemplars = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            ExponentialHistogramDataPoint.prototype.attributes = $util.emptyArray;
            ExponentialHistogramDataPoint.prototype.startTimeUnixNano = null;
            ExponentialHistogramDataPoint.prototype.timeUnixNano = null;
            ExponentialHistogramDataPoint.prototype.count = null;
            ExponentialHistogramDataPoint.prototype.sum = null;
            ExponentialHistogramDataPoint.prototype.scale = null;
            ExponentialHistogramDataPoint.prototype.zeroCount = null;
            ExponentialHistogramDataPoint.prototype.positive = null;
            ExponentialHistogramDataPoint.prototype.negative = null;
            ExponentialHistogramDataPoint.prototype.flags = null;
            ExponentialHistogramDataPoint.prototype.exemplars = $util.emptyArray;
            ExponentialHistogramDataPoint.prototype.min = null;
            ExponentialHistogramDataPoint.prototype.max = null;
            ExponentialHistogramDataPoint.prototype.zeroThreshold = null;
            var $oneOfFields;
            Object.defineProperty(ExponentialHistogramDataPoint.prototype, "_sum", {
              get: $util.oneOfGetter($oneOfFields = ["sum"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            Object.defineProperty(ExponentialHistogramDataPoint.prototype, "_min", {
              get: $util.oneOfGetter($oneOfFields = ["min"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            Object.defineProperty(ExponentialHistogramDataPoint.prototype, "_max", {
              get: $util.oneOfGetter($oneOfFields = ["max"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            ExponentialHistogramDataPoint.create = function create(properties) {
              return new ExponentialHistogramDataPoint(properties);
            };
            ExponentialHistogramDataPoint.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(10).fork()).ldelim();
              if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                writer.uint32(17).fixed64(message.startTimeUnixNano);
              if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                writer.uint32(25).fixed64(message.timeUnixNano);
              if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(33).fixed64(message.count);
              if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                writer.uint32(41).double(message.sum);
              if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(48).sint32(message.scale);
              if (message.zeroCount != null && Object.hasOwnProperty.call(message, "zeroCount"))
                writer.uint32(57).fixed64(message.zeroCount);
              if (message.positive != null && Object.hasOwnProperty.call(message, "positive"))
                $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(message.positive, writer.uint32(66).fork()).ldelim();
              if (message.negative != null && Object.hasOwnProperty.call(message, "negative"))
                $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(message.negative, writer.uint32(74).fork()).ldelim();
              if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(80).uint32(message.flags);
              if (message.exemplars != null && message.exemplars.length)
                for (var i = 0;i < message.exemplars.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.Exemplar.encode(message.exemplars[i], writer.uint32(90).fork()).ldelim();
              if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                writer.uint32(97).double(message.min);
              if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(105).double(message.max);
              if (message.zeroThreshold != null && Object.hasOwnProperty.call(message, "zeroThreshold"))
                writer.uint32(113).double(message.zeroThreshold);
              return writer;
            };
            ExponentialHistogramDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            ExponentialHistogramDataPoint.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 1: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.startTimeUnixNano = reader.fixed64();
                    break;
                  }
                  case 3: {
                    message.timeUnixNano = reader.fixed64();
                    break;
                  }
                  case 4: {
                    message.count = reader.fixed64();
                    break;
                  }
                  case 5: {
                    message.sum = reader.double();
                    break;
                  }
                  case 6: {
                    message.scale = reader.sint32();
                    break;
                  }
                  case 7: {
                    message.zeroCount = reader.fixed64();
                    break;
                  }
                  case 8: {
                    message.positive = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(reader, reader.uint32());
                    break;
                  }
                  case 9: {
                    message.negative = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(reader, reader.uint32());
                    break;
                  }
                  case 10: {
                    message.flags = reader.uint32();
                    break;
                  }
                  case 11: {
                    if (!(message.exemplars && message.exemplars.length))
                      message.exemplars = [];
                    message.exemplars.push($root.opentelemetry.proto.metrics.v1.Exemplar.decode(reader, reader.uint32()));
                    break;
                  }
                  case 12: {
                    message.min = reader.double();
                    break;
                  }
                  case 13: {
                    message.max = reader.double();
                    break;
                  }
                  case 14: {
                    message.zeroThreshold = reader.double();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            ExponentialHistogramDataPoint.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            ExponentialHistogramDataPoint.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              var properties = {};
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                  return "startTimeUnixNano: integer|Long expected";
              }
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                  return "timeUnixNano: integer|Long expected";
              }
              if (message.count != null && message.hasOwnProperty("count")) {
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                  return "count: integer|Long expected";
              }
              if (message.sum != null && message.hasOwnProperty("sum")) {
                properties._sum = 1;
                if (typeof message.sum !== "number")
                  return "sum: number expected";
              }
              if (message.scale != null && message.hasOwnProperty("scale")) {
                if (!$util.isInteger(message.scale))
                  return "scale: integer expected";
              }
              if (message.zeroCount != null && message.hasOwnProperty("zeroCount")) {
                if (!$util.isInteger(message.zeroCount) && !(message.zeroCount && $util.isInteger(message.zeroCount.low) && $util.isInteger(message.zeroCount.high)))
                  return "zeroCount: integer|Long expected";
              }
              if (message.positive != null && message.hasOwnProperty("positive")) {
                var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(message.positive);
                if (error)
                  return "positive." + error;
              }
              if (message.negative != null && message.hasOwnProperty("negative")) {
                var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(message.negative);
                if (error)
                  return "negative." + error;
              }
              if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!$util.isInteger(message.flags))
                  return "flags: integer expected";
              }
              if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                if (!Array.isArray(message.exemplars))
                  return "exemplars: array expected";
                for (var i = 0;i < message.exemplars.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.Exemplar.verify(message.exemplars[i]);
                  if (error)
                    return "exemplars." + error;
                }
              }
              if (message.min != null && message.hasOwnProperty("min")) {
                properties._min = 1;
                if (typeof message.min !== "number")
                  return "min: number expected";
              }
              if (message.max != null && message.hasOwnProperty("max")) {
                properties._max = 1;
                if (typeof message.max !== "number")
                  return "max: number expected";
              }
              if (message.zeroThreshold != null && message.hasOwnProperty("zeroThreshold")) {
                if (typeof message.zeroThreshold !== "number")
                  return "zeroThreshold: number expected";
              }
              return null;
            };
            ExponentialHistogramDataPoint.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.startTimeUnixNano != null) {
                if ($util.Long)
                  (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                else if (typeof object.startTimeUnixNano === "string")
                  message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                else if (typeof object.startTimeUnixNano === "number")
                  message.startTimeUnixNano = object.startTimeUnixNano;
                else if (typeof object.startTimeUnixNano === "object")
                  message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (object.timeUnixNano != null) {
                if ($util.Long)
                  (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                else if (typeof object.timeUnixNano === "string")
                  message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                else if (typeof object.timeUnixNano === "number")
                  message.timeUnixNano = object.timeUnixNano;
                else if (typeof object.timeUnixNano === "object")
                  message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
              }
              if (object.count != null) {
                if ($util.Long)
                  (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                  message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                  message.count = object.count;
                else if (typeof object.count === "object")
                  message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
              }
              if (object.sum != null)
                message.sum = Number(object.sum);
              if (object.scale != null)
                message.scale = object.scale | 0;
              if (object.zeroCount != null) {
                if ($util.Long)
                  (message.zeroCount = $util.Long.fromValue(object.zeroCount)).unsigned = false;
                else if (typeof object.zeroCount === "string")
                  message.zeroCount = parseInt(object.zeroCount, 10);
                else if (typeof object.zeroCount === "number")
                  message.zeroCount = object.zeroCount;
                else if (typeof object.zeroCount === "object")
                  message.zeroCount = new $util.LongBits(object.zeroCount.low >>> 0, object.zeroCount.high >>> 0).toNumber();
              }
              if (object.positive != null) {
                if (typeof object.positive !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected");
                message.positive = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(object.positive);
              }
              if (object.negative != null) {
                if (typeof object.negative !== "object")
                  throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected");
                message.negative = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(object.negative);
              }
              if (object.flags != null)
                message.flags = object.flags >>> 0;
              if (object.exemplars) {
                if (!Array.isArray(object.exemplars))
                  throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected");
                message.exemplars = [];
                for (var i = 0;i < object.exemplars.length; ++i) {
                  if (typeof object.exemplars[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected");
                  message.exemplars[i] = $root.opentelemetry.proto.metrics.v1.Exemplar.fromObject(object.exemplars[i]);
                }
              }
              if (object.min != null)
                message.min = Number(object.min);
              if (object.max != null)
                message.max = Number(object.max);
              if (object.zeroThreshold != null)
                message.zeroThreshold = Number(object.zeroThreshold);
              return message;
            };
            ExponentialHistogramDataPoint.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.attributes = [];
                object.exemplars = [];
              }
              if (options.defaults) {
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.startTimeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.timeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.count = options.longs === String ? "0" : 0;
                object.scale = 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.zeroCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.zeroCount = options.longs === String ? "0" : 0;
                object.positive = null;
                object.negative = null;
                object.flags = 0;
                object.zeroThreshold = 0;
              }
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                if (typeof message.startTimeUnixNano === "number")
                  object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                else
                  object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                if (typeof message.timeUnixNano === "number")
                  object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                else
                  object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
              if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                  object.count = options.longs === String ? String(message.count) : message.count;
                else
                  object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
              if (message.sum != null && message.hasOwnProperty("sum")) {
                object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
                if (options.oneofs)
                  object._sum = "sum";
              }
              if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = message.scale;
              if (message.zeroCount != null && message.hasOwnProperty("zeroCount"))
                if (typeof message.zeroCount === "number")
                  object.zeroCount = options.longs === String ? String(message.zeroCount) : message.zeroCount;
                else
                  object.zeroCount = options.longs === String ? $util.Long.prototype.toString.call(message.zeroCount) : options.longs === Number ? new $util.LongBits(message.zeroCount.low >>> 0, message.zeroCount.high >>> 0).toNumber() : message.zeroCount;
              if (message.positive != null && message.hasOwnProperty("positive"))
                object.positive = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(message.positive, options);
              if (message.negative != null && message.hasOwnProperty("negative"))
                object.negative = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(message.negative, options);
              if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
              if (message.exemplars && message.exemplars.length) {
                object.exemplars = [];
                for (var j = 0;j < message.exemplars.length; ++j)
                  object.exemplars[j] = $root.opentelemetry.proto.metrics.v1.Exemplar.toObject(message.exemplars[j], options);
              }
              if (message.min != null && message.hasOwnProperty("min")) {
                object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                if (options.oneofs)
                  object._min = "min";
              }
              if (message.max != null && message.hasOwnProperty("max")) {
                object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                if (options.oneofs)
                  object._max = "max";
              }
              if (message.zeroThreshold != null && message.hasOwnProperty("zeroThreshold"))
                object.zeroThreshold = options.json && !isFinite(message.zeroThreshold) ? String(message.zeroThreshold) : message.zeroThreshold;
              return object;
            };
            ExponentialHistogramDataPoint.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            ExponentialHistogramDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint";
            };
            ExponentialHistogramDataPoint.Buckets = function() {
              function Buckets(properties) {
                this.bucketCounts = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Buckets.prototype.offset = null;
              Buckets.prototype.bucketCounts = $util.emptyArray;
              Buckets.create = function create(properties) {
                return new Buckets(properties);
              };
              Buckets.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                  writer.uint32(8).sint32(message.offset);
                if (message.bucketCounts != null && message.bucketCounts.length) {
                  writer.uint32(18).fork();
                  for (var i = 0;i < message.bucketCounts.length; ++i)
                    writer.uint64(message.bucketCounts[i]);
                  writer.ldelim();
                }
                return writer;
              };
              Buckets.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Buckets.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.offset = reader.sint32();
                      break;
                    }
                    case 2: {
                      if (!(message.bucketCounts && message.bucketCounts.length))
                        message.bucketCounts = [];
                      if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                          message.bucketCounts.push(reader.uint64());
                      } else
                        message.bucketCounts.push(reader.uint64());
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Buckets.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Buckets.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.offset != null && message.hasOwnProperty("offset")) {
                  if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
                }
                if (message.bucketCounts != null && message.hasOwnProperty("bucketCounts")) {
                  if (!Array.isArray(message.bucketCounts))
                    return "bucketCounts: array expected";
                  for (var i = 0;i < message.bucketCounts.length; ++i)
                    if (!$util.isInteger(message.bucketCounts[i]) && !(message.bucketCounts[i] && $util.isInteger(message.bucketCounts[i].low) && $util.isInteger(message.bucketCounts[i].high)))
                      return "bucketCounts: integer|Long[] expected";
                }
                return null;
              };
              Buckets.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                if (object.offset != null)
                  message.offset = object.offset | 0;
                if (object.bucketCounts) {
                  if (!Array.isArray(object.bucketCounts))
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected");
                  message.bucketCounts = [];
                  for (var i = 0;i < object.bucketCounts.length; ++i)
                    if ($util.Long)
                      (message.bucketCounts[i] = $util.Long.fromValue(object.bucketCounts[i])).unsigned = true;
                    else if (typeof object.bucketCounts[i] === "string")
                      message.bucketCounts[i] = parseInt(object.bucketCounts[i], 10);
                    else if (typeof object.bucketCounts[i] === "number")
                      message.bucketCounts[i] = object.bucketCounts[i];
                    else if (typeof object.bucketCounts[i] === "object")
                      message.bucketCounts[i] = new $util.LongBits(object.bucketCounts[i].low >>> 0, object.bucketCounts[i].high >>> 0).toNumber(true);
                }
                return message;
              };
              Buckets.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.bucketCounts = [];
                if (options.defaults)
                  object.offset = 0;
                if (message.offset != null && message.hasOwnProperty("offset"))
                  object.offset = message.offset;
                if (message.bucketCounts && message.bucketCounts.length) {
                  object.bucketCounts = [];
                  for (var j = 0;j < message.bucketCounts.length; ++j)
                    if (typeof message.bucketCounts[j] === "number")
                      object.bucketCounts[j] = options.longs === String ? String(message.bucketCounts[j]) : message.bucketCounts[j];
                    else
                      object.bucketCounts[j] = options.longs === String ? $util.Long.prototype.toString.call(message.bucketCounts[j]) : options.longs === Number ? new $util.LongBits(message.bucketCounts[j].low >>> 0, message.bucketCounts[j].high >>> 0).toNumber(true) : message.bucketCounts[j];
                }
                return object;
              };
              Buckets.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Buckets.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets";
              };
              return Buckets;
            }();
            return ExponentialHistogramDataPoint;
          }();
          v1.SummaryDataPoint = function() {
            function SummaryDataPoint(properties) {
              this.attributes = [];
              this.quantileValues = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            SummaryDataPoint.prototype.attributes = $util.emptyArray;
            SummaryDataPoint.prototype.startTimeUnixNano = null;
            SummaryDataPoint.prototype.timeUnixNano = null;
            SummaryDataPoint.prototype.count = null;
            SummaryDataPoint.prototype.sum = null;
            SummaryDataPoint.prototype.quantileValues = $util.emptyArray;
            SummaryDataPoint.prototype.flags = null;
            SummaryDataPoint.create = function create(properties) {
              return new SummaryDataPoint(properties);
            };
            SummaryDataPoint.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                writer.uint32(17).fixed64(message.startTimeUnixNano);
              if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                writer.uint32(25).fixed64(message.timeUnixNano);
              if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(33).fixed64(message.count);
              if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                writer.uint32(41).double(message.sum);
              if (message.quantileValues != null && message.quantileValues.length)
                for (var i = 0;i < message.quantileValues.length; ++i)
                  $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(message.quantileValues[i], writer.uint32(50).fork()).ldelim();
              if (message.attributes != null && message.attributes.length)
                for (var i = 0;i < message.attributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(58).fork()).ldelim();
              if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(64).uint32(message.flags);
              return writer;
            };
            SummaryDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            SummaryDataPoint.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 7: {
                    if (!(message.attributes && message.attributes.length))
                      message.attributes = [];
                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.startTimeUnixNano = reader.fixed64();
                    break;
                  }
                  case 3: {
                    message.timeUnixNano = reader.fixed64();
                    break;
                  }
                  case 4: {
                    message.count = reader.fixed64();
                    break;
                  }
                  case 5: {
                    message.sum = reader.double();
                    break;
                  }
                  case 6: {
                    if (!(message.quantileValues && message.quantileValues.length))
                      message.quantileValues = [];
                    message.quantileValues.push($root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(reader, reader.uint32()));
                    break;
                  }
                  case 8: {
                    message.flags = reader.uint32();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            SummaryDataPoint.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            SummaryDataPoint.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                  return "attributes: array expected";
                for (var i = 0;i < message.attributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                  if (error)
                    return "attributes." + error;
                }
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                  return "startTimeUnixNano: integer|Long expected";
              }
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                  return "timeUnixNano: integer|Long expected";
              }
              if (message.count != null && message.hasOwnProperty("count")) {
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                  return "count: integer|Long expected";
              }
              if (message.sum != null && message.hasOwnProperty("sum")) {
                if (typeof message.sum !== "number")
                  return "sum: number expected";
              }
              if (message.quantileValues != null && message.hasOwnProperty("quantileValues")) {
                if (!Array.isArray(message.quantileValues))
                  return "quantileValues: array expected";
                for (var i = 0;i < message.quantileValues.length; ++i) {
                  var error = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(message.quantileValues[i]);
                  if (error)
                    return "quantileValues." + error;
                }
              }
              if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!$util.isInteger(message.flags))
                  return "flags: integer expected";
              }
              return null;
            };
            SummaryDataPoint.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.SummaryDataPoint)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint;
              if (object.attributes) {
                if (!Array.isArray(object.attributes))
                  throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected");
                message.attributes = [];
                for (var i = 0;i < object.attributes.length; ++i) {
                  if (typeof object.attributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected");
                  message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                }
              }
              if (object.startTimeUnixNano != null) {
                if ($util.Long)
                  (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                else if (typeof object.startTimeUnixNano === "string")
                  message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                else if (typeof object.startTimeUnixNano === "number")
                  message.startTimeUnixNano = object.startTimeUnixNano;
                else if (typeof object.startTimeUnixNano === "object")
                  message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (object.timeUnixNano != null) {
                if ($util.Long)
                  (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                else if (typeof object.timeUnixNano === "string")
                  message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                else if (typeof object.timeUnixNano === "number")
                  message.timeUnixNano = object.timeUnixNano;
                else if (typeof object.timeUnixNano === "object")
                  message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
              }
              if (object.count != null) {
                if ($util.Long)
                  (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                  message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                  message.count = object.count;
                else if (typeof object.count === "object")
                  message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
              }
              if (object.sum != null)
                message.sum = Number(object.sum);
              if (object.quantileValues) {
                if (!Array.isArray(object.quantileValues))
                  throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected");
                message.quantileValues = [];
                for (var i = 0;i < object.quantileValues.length; ++i) {
                  if (typeof object.quantileValues[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected");
                  message.quantileValues[i] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(object.quantileValues[i]);
                }
              }
              if (object.flags != null)
                message.flags = object.flags >>> 0;
              return message;
            };
            SummaryDataPoint.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults) {
                object.quantileValues = [];
                object.attributes = [];
              }
              if (options.defaults) {
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.startTimeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.timeUnixNano = options.longs === String ? "0" : 0;
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.count = options.longs === String ? "0" : 0;
                object.sum = 0;
                object.flags = 0;
              }
              if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                if (typeof message.startTimeUnixNano === "number")
                  object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                else
                  object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                if (typeof message.timeUnixNano === "number")
                  object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                else
                  object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
              if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                  object.count = options.longs === String ? String(message.count) : message.count;
                else
                  object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
              if (message.sum != null && message.hasOwnProperty("sum"))
                object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
              if (message.quantileValues && message.quantileValues.length) {
                object.quantileValues = [];
                for (var j = 0;j < message.quantileValues.length; ++j)
                  object.quantileValues[j] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(message.quantileValues[j], options);
              }
              if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0;j < message.attributes.length; ++j)
                  object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
              }
              if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
              return object;
            };
            SummaryDataPoint.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            SummaryDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.SummaryDataPoint";
            };
            SummaryDataPoint.ValueAtQuantile = function() {
              function ValueAtQuantile(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ValueAtQuantile.prototype.quantile = null;
              ValueAtQuantile.prototype.value = null;
              ValueAtQuantile.create = function create(properties) {
                return new ValueAtQuantile(properties);
              };
              ValueAtQuantile.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.quantile != null && Object.hasOwnProperty.call(message, "quantile"))
                  writer.uint32(9).double(message.quantile);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                  writer.uint32(17).double(message.value);
                return writer;
              };
              ValueAtQuantile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ValueAtQuantile.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.quantile = reader.double();
                      break;
                    }
                    case 2: {
                      message.value = reader.double();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ValueAtQuantile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ValueAtQuantile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.quantile != null && message.hasOwnProperty("quantile")) {
                  if (typeof message.quantile !== "number")
                    return "quantile: number expected";
                }
                if (message.value != null && message.hasOwnProperty("value")) {
                  if (typeof message.value !== "number")
                    return "value: number expected";
                }
                return null;
              };
              ValueAtQuantile.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                if (object.quantile != null)
                  message.quantile = Number(object.quantile);
                if (object.value != null)
                  message.value = Number(object.value);
                return message;
              };
              ValueAtQuantile.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults) {
                  object.quantile = 0;
                  object.value = 0;
                }
                if (message.quantile != null && message.hasOwnProperty("quantile"))
                  object.quantile = options.json && !isFinite(message.quantile) ? String(message.quantile) : message.quantile;
                if (message.value != null && message.hasOwnProperty("value"))
                  object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
              };
              ValueAtQuantile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ValueAtQuantile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile";
              };
              return ValueAtQuantile;
            }();
            return SummaryDataPoint;
          }();
          v1.Exemplar = function() {
            function Exemplar(properties) {
              this.filteredAttributes = [];
              if (properties) {
                for (var keys = Object.keys(properties), i = 0;i < keys.length; ++i)
                  if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
              }
            }
            Exemplar.prototype.filteredAttributes = $util.emptyArray;
            Exemplar.prototype.timeUnixNano = null;
            Exemplar.prototype.asDouble = null;
            Exemplar.prototype.asInt = null;
            Exemplar.prototype.spanId = null;
            Exemplar.prototype.traceId = null;
            var $oneOfFields;
            Object.defineProperty(Exemplar.prototype, "value", {
              get: $util.oneOfGetter($oneOfFields = ["asDouble", "asInt"]),
              set: $util.oneOfSetter($oneOfFields)
            });
            Exemplar.create = function create(properties) {
              return new Exemplar(properties);
            };
            Exemplar.encode = function encode(message, writer) {
              if (!writer)
                writer = $Writer.create();
              if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                writer.uint32(17).fixed64(message.timeUnixNano);
              if (message.asDouble != null && Object.hasOwnProperty.call(message, "asDouble"))
                writer.uint32(25).double(message.asDouble);
              if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                writer.uint32(34).bytes(message.spanId);
              if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                writer.uint32(42).bytes(message.traceId);
              if (message.asInt != null && Object.hasOwnProperty.call(message, "asInt"))
                writer.uint32(49).sfixed64(message.asInt);
              if (message.filteredAttributes != null && message.filteredAttributes.length)
                for (var i = 0;i < message.filteredAttributes.length; ++i)
                  $root.opentelemetry.proto.common.v1.KeyValue.encode(message.filteredAttributes[i], writer.uint32(58).fork()).ldelim();
              return writer;
            };
            Exemplar.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            Exemplar.decode = function decode(reader, length, error) {
              if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Exemplar;
              while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                  break;
                switch (tag >>> 3) {
                  case 7: {
                    if (!(message.filteredAttributes && message.filteredAttributes.length))
                      message.filteredAttributes = [];
                    message.filteredAttributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                    break;
                  }
                  case 2: {
                    message.timeUnixNano = reader.fixed64();
                    break;
                  }
                  case 3: {
                    message.asDouble = reader.double();
                    break;
                  }
                  case 6: {
                    message.asInt = reader.sfixed64();
                    break;
                  }
                  case 4: {
                    message.spanId = reader.bytes();
                    break;
                  }
                  case 5: {
                    message.traceId = reader.bytes();
                    break;
                  }
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }
              return message;
            };
            Exemplar.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            Exemplar.verify = function verify(message) {
              if (typeof message !== "object" || message === null)
                return "object expected";
              var properties = {};
              if (message.filteredAttributes != null && message.hasOwnProperty("filteredAttributes")) {
                if (!Array.isArray(message.filteredAttributes))
                  return "filteredAttributes: array expected";
                for (var i = 0;i < message.filteredAttributes.length; ++i) {
                  var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.filteredAttributes[i]);
                  if (error)
                    return "filteredAttributes." + error;
                }
              }
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                  return "timeUnixNano: integer|Long expected";
              }
              if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                properties.value = 1;
                if (typeof message.asDouble !== "number")
                  return "asDouble: number expected";
              }
              if (message.asInt != null && message.hasOwnProperty("asInt")) {
                if (properties.value === 1)
                  return "value: multiple values";
                properties.value = 1;
                if (!$util.isInteger(message.asInt) && !(message.asInt && $util.isInteger(message.asInt.low) && $util.isInteger(message.asInt.high)))
                  return "asInt: integer|Long expected";
              }
              if (message.spanId != null && message.hasOwnProperty("spanId")) {
                if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                  return "spanId: buffer expected";
              }
              if (message.traceId != null && message.hasOwnProperty("traceId")) {
                if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                  return "traceId: buffer expected";
              }
              return null;
            };
            Exemplar.fromObject = function fromObject(object) {
              if (object instanceof $root.opentelemetry.proto.metrics.v1.Exemplar)
                return object;
              var message = new $root.opentelemetry.proto.metrics.v1.Exemplar;
              if (object.filteredAttributes) {
                if (!Array.isArray(object.filteredAttributes))
                  throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected");
                message.filteredAttributes = [];
                for (var i = 0;i < object.filteredAttributes.length; ++i) {
                  if (typeof object.filteredAttributes[i] !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected");
                  message.filteredAttributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.filteredAttributes[i]);
                }
              }
              if (object.timeUnixNano != null) {
                if ($util.Long)
                  (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                else if (typeof object.timeUnixNano === "string")
                  message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                else if (typeof object.timeUnixNano === "number")
                  message.timeUnixNano = object.timeUnixNano;
                else if (typeof object.timeUnixNano === "object")
                  message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
              }
              if (object.asDouble != null)
                message.asDouble = Number(object.asDouble);
              if (object.asInt != null) {
                if ($util.Long)
                  (message.asInt = $util.Long.fromValue(object.asInt)).unsigned = false;
                else if (typeof object.asInt === "string")
                  message.asInt = parseInt(object.asInt, 10);
                else if (typeof object.asInt === "number")
                  message.asInt = object.asInt;
                else if (typeof object.asInt === "object")
                  message.asInt = new $util.LongBits(object.asInt.low >>> 0, object.asInt.high >>> 0).toNumber();
              }
              if (object.spanId != null) {
                if (typeof object.spanId === "string")
                  $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                else if (object.spanId.length >= 0)
                  message.spanId = object.spanId;
              }
              if (object.traceId != null) {
                if (typeof object.traceId === "string")
                  $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                else if (object.traceId.length >= 0)
                  message.traceId = object.traceId;
              }
              return message;
            };
            Exemplar.toObject = function toObject(message, options) {
              if (!options)
                options = {};
              var object = {};
              if (options.arrays || options.defaults)
                object.filteredAttributes = [];
              if (options.defaults) {
                if ($util.Long) {
                  var long = new $util.Long(0, 0, false);
                  object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                  object.timeUnixNano = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                  object.spanId = "";
                else {
                  object.spanId = [];
                  if (options.bytes !== Array)
                    object.spanId = $util.newBuffer(object.spanId);
                }
                if (options.bytes === String)
                  object.traceId = "";
                else {
                  object.traceId = [];
                  if (options.bytes !== Array)
                    object.traceId = $util.newBuffer(object.traceId);
                }
              }
              if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                if (typeof message.timeUnixNano === "number")
                  object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                else
                  object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
              if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                object.asDouble = options.json && !isFinite(message.asDouble) ? String(message.asDouble) : message.asDouble;
                if (options.oneofs)
                  object.value = "asDouble";
              }
              if (message.spanId != null && message.hasOwnProperty("spanId"))
                object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
              if (message.traceId != null && message.hasOwnProperty("traceId"))
                object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
              if (message.asInt != null && message.hasOwnProperty("asInt")) {
                if (typeof message.asInt === "number")
                  object.asInt = options.longs === String ? String(message.asInt) : message.asInt;
                else
                  object.asInt = options.longs === String ? $util.Long.prototype.toString.call(message.asInt) : options.longs === Number ? new $util.LongBits(message.asInt.low >>> 0, message.asInt.high >>> 0).toNumber() : message.asInt;
                if (options.oneofs)
                  object.value = "asInt";
              }
              if (message.filteredAttributes && message.filteredAttributes.length) {
                object.filteredAttributes = [];
                for (var j = 0;j < message.filteredAttributes.length; ++j)
                  object.filteredAttributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.filteredAttributes[j], options);
              }
              return object;
            };
            Exemplar.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            Exemplar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
              if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
              }
              return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Exemplar";
            };
            return Exemplar;
          }();
          return v1;
        }();
        return metrics;
      }();
      return proto;
    }();
    return opentelemetry;
  }();
  module.exports = $root;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/metrics/internal-types.js
var require_internal_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.EAggregationTemporality = undefined;
  var EAggregationTemporality;
  (function(EAggregationTemporality2) {
    EAggregationTemporality2[EAggregationTemporality2["AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
    EAggregationTemporality2[EAggregationTemporality2["AGGREGATION_TEMPORALITY_DELTA"] = 1] = "AGGREGATION_TEMPORALITY_DELTA";
    EAggregationTemporality2[EAggregationTemporality2["AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
  })(EAggregationTemporality = exports.EAggregationTemporality || (exports.EAggregationTemporality = {}));
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/internal.js
var require_internal = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toAnyValue = exports.toKeyValue = exports.toAttributes = exports.createInstrumentationScope = exports.createResource = undefined;
  function createResource(resource, encoder) {
    const result = {
      attributes: toAttributes(resource.attributes, encoder),
      droppedAttributesCount: 0
    };
    const schemaUrl = resource.schemaUrl;
    if (schemaUrl && schemaUrl !== "")
      result.schemaUrl = schemaUrl;
    return result;
  }
  exports.createResource = createResource;
  function createInstrumentationScope(scope) {
    return {
      name: scope.name,
      version: scope.version
    };
  }
  exports.createInstrumentationScope = createInstrumentationScope;
  function toAttributes(attributes, encoder) {
    return Object.keys(attributes).map((key) => toKeyValue(key, attributes[key], encoder));
  }
  exports.toAttributes = toAttributes;
  function toKeyValue(key, value, encoder) {
    return {
      key,
      value: toAnyValue(value, encoder)
    };
  }
  exports.toKeyValue = toKeyValue;
  function toAnyValue(value, encoder) {
    const t = typeof value;
    if (t === "string")
      return { stringValue: value };
    if (t === "number") {
      if (!Number.isInteger(value))
        return { doubleValue: value };
      return { intValue: value };
    }
    if (t === "boolean")
      return { boolValue: value };
    if (value instanceof Uint8Array)
      return { bytesValue: encoder.encodeUint8Array(value) };
    if (Array.isArray(value)) {
      const values = new Array(value.length);
      for (let i = 0;i < value.length; i++) {
        values[i] = toAnyValue(value[i], encoder);
      }
      return { arrayValue: { values } };
    }
    if (t === "object" && value != null) {
      const keys = Object.keys(value);
      const values = new Array(keys.length);
      for (let i = 0;i < keys.length; i++) {
        values[i] = {
          key: keys[i],
          value: toAnyValue(value[keys[i]], encoder)
        };
      }
      return { kvlistValue: { values } };
    }
    return {};
  }
  exports.toAnyValue = toAnyValue;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/metrics/internal.js
var require_internal2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createExportMetricsServiceRequest = exports.toMetric = exports.toScopeMetrics = exports.toResourceMetrics = undefined;
  var api_1 = require_src();
  var sdk_metrics_1 = require_src4();
  var internal_types_1 = require_internal_types();
  var internal_1 = require_internal();
  function toResourceMetrics(resourceMetrics, encoder) {
    const processedResource = (0, internal_1.createResource)(resourceMetrics.resource, encoder);
    return {
      resource: processedResource,
      schemaUrl: processedResource.schemaUrl,
      scopeMetrics: toScopeMetrics(resourceMetrics.scopeMetrics, encoder)
    };
  }
  exports.toResourceMetrics = toResourceMetrics;
  function toScopeMetrics(scopeMetrics, encoder) {
    return Array.from(scopeMetrics.map((metrics) => ({
      scope: (0, internal_1.createInstrumentationScope)(metrics.scope),
      metrics: metrics.metrics.map((metricData) => toMetric(metricData, encoder)),
      schemaUrl: metrics.scope.schemaUrl
    })));
  }
  exports.toScopeMetrics = toScopeMetrics;
  function toMetric(metricData, encoder) {
    const out = {
      name: metricData.descriptor.name,
      description: metricData.descriptor.description,
      unit: metricData.descriptor.unit
    };
    const aggregationTemporality = toAggregationTemporality(metricData.aggregationTemporality);
    switch (metricData.dataPointType) {
      case sdk_metrics_1.DataPointType.SUM:
        out.sum = {
          aggregationTemporality,
          isMonotonic: metricData.isMonotonic,
          dataPoints: toSingularDataPoints(metricData, encoder)
        };
        break;
      case sdk_metrics_1.DataPointType.GAUGE:
        out.gauge = {
          dataPoints: toSingularDataPoints(metricData, encoder)
        };
        break;
      case sdk_metrics_1.DataPointType.HISTOGRAM:
        out.histogram = {
          aggregationTemporality,
          dataPoints: toHistogramDataPoints(metricData, encoder)
        };
        break;
      case sdk_metrics_1.DataPointType.EXPONENTIAL_HISTOGRAM:
        out.exponentialHistogram = {
          aggregationTemporality,
          dataPoints: toExponentialHistogramDataPoints(metricData, encoder)
        };
        break;
    }
    return out;
  }
  exports.toMetric = toMetric;
  function toSingularDataPoint(dataPoint, valueType, encoder) {
    const out = {
      attributes: (0, internal_1.toAttributes)(dataPoint.attributes, encoder),
      startTimeUnixNano: encoder.encodeHrTime(dataPoint.startTime),
      timeUnixNano: encoder.encodeHrTime(dataPoint.endTime)
    };
    switch (valueType) {
      case api_1.ValueType.INT:
        out.asInt = dataPoint.value;
        break;
      case api_1.ValueType.DOUBLE:
        out.asDouble = dataPoint.value;
        break;
    }
    return out;
  }
  function toSingularDataPoints(metricData, encoder) {
    return metricData.dataPoints.map((dataPoint) => {
      return toSingularDataPoint(dataPoint, metricData.descriptor.valueType, encoder);
    });
  }
  function toHistogramDataPoints(metricData, encoder) {
    return metricData.dataPoints.map((dataPoint) => {
      const histogram = dataPoint.value;
      return {
        attributes: (0, internal_1.toAttributes)(dataPoint.attributes, encoder),
        bucketCounts: histogram.buckets.counts,
        explicitBounds: histogram.buckets.boundaries,
        count: histogram.count,
        sum: histogram.sum,
        min: histogram.min,
        max: histogram.max,
        startTimeUnixNano: encoder.encodeHrTime(dataPoint.startTime),
        timeUnixNano: encoder.encodeHrTime(dataPoint.endTime)
      };
    });
  }
  function toExponentialHistogramDataPoints(metricData, encoder) {
    return metricData.dataPoints.map((dataPoint) => {
      const histogram = dataPoint.value;
      return {
        attributes: (0, internal_1.toAttributes)(dataPoint.attributes, encoder),
        count: histogram.count,
        min: histogram.min,
        max: histogram.max,
        sum: histogram.sum,
        positive: {
          offset: histogram.positive.offset,
          bucketCounts: histogram.positive.bucketCounts
        },
        negative: {
          offset: histogram.negative.offset,
          bucketCounts: histogram.negative.bucketCounts
        },
        scale: histogram.scale,
        zeroCount: histogram.zeroCount,
        startTimeUnixNano: encoder.encodeHrTime(dataPoint.startTime),
        timeUnixNano: encoder.encodeHrTime(dataPoint.endTime)
      };
    });
  }
  function toAggregationTemporality(temporality) {
    switch (temporality) {
      case sdk_metrics_1.AggregationTemporality.DELTA:
        return internal_types_1.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
      case sdk_metrics_1.AggregationTemporality.CUMULATIVE:
        return internal_types_1.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
    }
  }
  function createExportMetricsServiceRequest(resourceMetrics, encoder) {
    return {
      resourceMetrics: resourceMetrics.map((metrics) => toResourceMetrics(metrics, encoder))
    };
  }
  exports.createExportMetricsServiceRequest = createExportMetricsServiceRequest;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/common/utils.js
var require_utils2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JSON_ENCODER = exports.PROTOBUF_ENCODER = exports.encodeAsString = exports.encodeAsLongBits = exports.toLongBits = exports.hrTimeToNanos = undefined;
  var core_1 = require_src2();
  var hex_to_binary_1 = require_hex_to_binary();
  function hrTimeToNanos(hrTime) {
    const NANOSECONDS = BigInt(1e9);
    return BigInt(Math.trunc(hrTime[0])) * NANOSECONDS + BigInt(Math.trunc(hrTime[1]));
  }
  exports.hrTimeToNanos = hrTimeToNanos;
  function toLongBits(value) {
    const low = Number(BigInt.asUintN(32, value));
    const high = Number(BigInt.asUintN(32, value >> BigInt(32)));
    return { low, high };
  }
  exports.toLongBits = toLongBits;
  function encodeAsLongBits(hrTime) {
    const nanos = hrTimeToNanos(hrTime);
    return toLongBits(nanos);
  }
  exports.encodeAsLongBits = encodeAsLongBits;
  function encodeAsString(hrTime) {
    const nanos = hrTimeToNanos(hrTime);
    return nanos.toString();
  }
  exports.encodeAsString = encodeAsString;
  var encodeTimestamp = typeof BigInt !== "undefined" ? encodeAsString : core_1.hrTimeToNanoseconds;
  function identity(value) {
    return value;
  }
  function optionalHexToBinary(str) {
    if (str === undefined)
      return;
    return (0, hex_to_binary_1.hexToBinary)(str);
  }
  exports.PROTOBUF_ENCODER = {
    encodeHrTime: encodeAsLongBits,
    encodeSpanContext: hex_to_binary_1.hexToBinary,
    encodeOptionalSpanContext: optionalHexToBinary,
    encodeUint8Array: identity
  };
  exports.JSON_ENCODER = {
    encodeHrTime: encodeTimestamp,
    encodeSpanContext: identity,
    encodeOptionalSpanContext: identity,
    encodeUint8Array: (bytes) => {
      if (typeof Buffer !== "undefined") {
        return Buffer.from(bytes).toString("base64");
      }
      const chars = new Array(bytes.length);
      for (let i = 0;i < bytes.length; i++) {
        chars[i] = String.fromCharCode(bytes[i]);
      }
      return btoa(chars.join(""));
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/metrics/protobuf/metrics.js
var require_metrics = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufMetricsSerializer = undefined;
  var root = require_root();
  var internal_1 = require_internal2();
  var utils_1 = require_utils2();
  var metricsResponseType = root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
  var metricsRequestType = root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
  exports.ProtobufMetricsSerializer = {
    serializeRequest: (arg) => {
      const request = (0, internal_1.createExportMetricsServiceRequest)([arg], utils_1.PROTOBUF_ENCODER);
      return metricsRequestType.encode(request).finish();
    },
    deserializeResponse: (arg) => {
      return metricsResponseType.decode(arg);
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/metrics/protobuf/index.js
var require_protobuf2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufMetricsSerializer = undefined;
  var metrics_1 = require_metrics();
  Object.defineProperty(exports, "ProtobufMetricsSerializer", { enumerable: true, get: function() {
    return metrics_1.ProtobufMetricsSerializer;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/trace/internal.js
var require_internal3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createExportTraceServiceRequest = exports.toOtlpSpanEvent = exports.toOtlpLink = exports.sdkSpanToOtlpSpan = undefined;
  var internal_1 = require_internal();
  var SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK = 256;
  var SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK = 512;
  function buildSpanFlagsFrom(traceFlags, isRemote) {
    let flags = traceFlags & 255 | SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK;
    if (isRemote) {
      flags |= SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK;
    }
    return flags;
  }
  function sdkSpanToOtlpSpan(span, encoder) {
    const ctx = span.spanContext();
    const status = span.status;
    const parentSpanId = span.parentSpanContext?.spanId ? encoder.encodeSpanContext(span.parentSpanContext?.spanId) : undefined;
    return {
      traceId: encoder.encodeSpanContext(ctx.traceId),
      spanId: encoder.encodeSpanContext(ctx.spanId),
      parentSpanId,
      traceState: ctx.traceState?.serialize(),
      name: span.name,
      kind: span.kind == null ? 0 : span.kind + 1,
      startTimeUnixNano: encoder.encodeHrTime(span.startTime),
      endTimeUnixNano: encoder.encodeHrTime(span.endTime),
      attributes: (0, internal_1.toAttributes)(span.attributes, encoder),
      droppedAttributesCount: span.droppedAttributesCount,
      events: span.events.map((event) => toOtlpSpanEvent(event, encoder)),
      droppedEventsCount: span.droppedEventsCount,
      status: {
        code: status.code,
        message: status.message
      },
      links: span.links.map((link) => toOtlpLink(link, encoder)),
      droppedLinksCount: span.droppedLinksCount,
      flags: buildSpanFlagsFrom(ctx.traceFlags, span.parentSpanContext?.isRemote)
    };
  }
  exports.sdkSpanToOtlpSpan = sdkSpanToOtlpSpan;
  function toOtlpLink(link, encoder) {
    return {
      attributes: link.attributes ? (0, internal_1.toAttributes)(link.attributes, encoder) : [],
      spanId: encoder.encodeSpanContext(link.context.spanId),
      traceId: encoder.encodeSpanContext(link.context.traceId),
      traceState: link.context.traceState?.serialize(),
      droppedAttributesCount: link.droppedAttributesCount || 0,
      flags: buildSpanFlagsFrom(link.context.traceFlags, link.context.isRemote)
    };
  }
  exports.toOtlpLink = toOtlpLink;
  function toOtlpSpanEvent(timedEvent, encoder) {
    return {
      attributes: timedEvent.attributes ? (0, internal_1.toAttributes)(timedEvent.attributes, encoder) : [],
      name: timedEvent.name,
      timeUnixNano: encoder.encodeHrTime(timedEvent.time),
      droppedAttributesCount: timedEvent.droppedAttributesCount || 0
    };
  }
  exports.toOtlpSpanEvent = toOtlpSpanEvent;
  function createExportTraceServiceRequest(spans, encoder) {
    return {
      resourceSpans: spanRecordsToResourceSpans(spans, encoder)
    };
  }
  exports.createExportTraceServiceRequest = createExportTraceServiceRequest;
  function createResourceMap(readableSpans) {
    const resourceMap = new Map;
    for (const record of readableSpans) {
      let ilsMap = resourceMap.get(record.resource);
      if (!ilsMap) {
        ilsMap = new Map;
        resourceMap.set(record.resource, ilsMap);
      }
      const instrumentationScopeKey = `${record.instrumentationScope.name}@${record.instrumentationScope.version || ""}:${record.instrumentationScope.schemaUrl || ""}`;
      let records = ilsMap.get(instrumentationScopeKey);
      if (!records) {
        records = [];
        ilsMap.set(instrumentationScopeKey, records);
      }
      records.push(record);
    }
    return resourceMap;
  }
  function spanRecordsToResourceSpans(readableSpans, encoder) {
    const resourceMap = createResourceMap(readableSpans);
    const out = [];
    const entryIterator = resourceMap.entries();
    let entry = entryIterator.next();
    while (!entry.done) {
      const [resource, ilmMap] = entry.value;
      const scopeResourceSpans = [];
      const ilmIterator = ilmMap.values();
      let ilmEntry = ilmIterator.next();
      while (!ilmEntry.done) {
        const scopeSpans = ilmEntry.value;
        if (scopeSpans.length > 0) {
          const spans = scopeSpans.map((readableSpan) => sdkSpanToOtlpSpan(readableSpan, encoder));
          scopeResourceSpans.push({
            scope: (0, internal_1.createInstrumentationScope)(scopeSpans[0].instrumentationScope),
            spans,
            schemaUrl: scopeSpans[0].instrumentationScope.schemaUrl
          });
        }
        ilmEntry = ilmIterator.next();
      }
      const processedResource = (0, internal_1.createResource)(resource, encoder);
      const transformedSpans = {
        resource: processedResource,
        scopeSpans: scopeResourceSpans,
        schemaUrl: processedResource.schemaUrl
      };
      out.push(transformedSpans);
      entry = entryIterator.next();
    }
    return out;
  }
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/trace/protobuf/trace.js
var require_trace = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufTraceSerializer = undefined;
  var root = require_root();
  var internal_1 = require_internal3();
  var utils_1 = require_utils2();
  var traceResponseType = root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
  var traceRequestType = root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
  exports.ProtobufTraceSerializer = {
    serializeRequest: (arg) => {
      const request = (0, internal_1.createExportTraceServiceRequest)(arg, utils_1.PROTOBUF_ENCODER);
      return traceRequestType.encode(request).finish();
    },
    deserializeResponse: (arg) => {
      return traceResponseType.decode(arg);
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/trace/protobuf/index.js
var require_protobuf3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ProtobufTraceSerializer = undefined;
  var trace_1 = require_trace();
  Object.defineProperty(exports, "ProtobufTraceSerializer", { enumerable: true, get: function() {
    return trace_1.ProtobufTraceSerializer;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/internal.js
var require_internal4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toLogAttributes = exports.createExportLogsServiceRequest = undefined;
  var internal_1 = require_internal();
  function createExportLogsServiceRequest(logRecords, encoder) {
    return {
      resourceLogs: logRecordsToResourceLogs(logRecords, encoder)
    };
  }
  exports.createExportLogsServiceRequest = createExportLogsServiceRequest;
  function createResourceMap(logRecords) {
    const resourceMap = new Map;
    for (const record of logRecords) {
      const { resource, instrumentationScope: { name, version = "", schemaUrl = "" } } = record;
      let ismMap = resourceMap.get(resource);
      if (!ismMap) {
        ismMap = new Map;
        resourceMap.set(resource, ismMap);
      }
      const ismKey = `${name}@${version}:${schemaUrl}`;
      let records = ismMap.get(ismKey);
      if (!records) {
        records = [];
        ismMap.set(ismKey, records);
      }
      records.push(record);
    }
    return resourceMap;
  }
  function logRecordsToResourceLogs(logRecords, encoder) {
    const resourceMap = createResourceMap(logRecords);
    return Array.from(resourceMap, ([resource, ismMap]) => {
      const processedResource = (0, internal_1.createResource)(resource, encoder);
      return {
        resource: processedResource,
        scopeLogs: Array.from(ismMap, ([, scopeLogs]) => {
          return {
            scope: (0, internal_1.createInstrumentationScope)(scopeLogs[0].instrumentationScope),
            logRecords: scopeLogs.map((log) => toLogRecord(log, encoder)),
            schemaUrl: scopeLogs[0].instrumentationScope.schemaUrl
          };
        }),
        schemaUrl: processedResource.schemaUrl
      };
    });
  }
  function toLogRecord(log, encoder) {
    return {
      timeUnixNano: encoder.encodeHrTime(log.hrTime),
      observedTimeUnixNano: encoder.encodeHrTime(log.hrTimeObserved),
      severityNumber: toSeverityNumber(log.severityNumber),
      severityText: log.severityText,
      body: (0, internal_1.toAnyValue)(log.body, encoder),
      eventName: log.eventName,
      attributes: toLogAttributes(log.attributes, encoder),
      droppedAttributesCount: log.droppedAttributesCount,
      flags: log.spanContext?.traceFlags,
      traceId: encoder.encodeOptionalSpanContext(log.spanContext?.traceId),
      spanId: encoder.encodeOptionalSpanContext(log.spanContext?.spanId)
    };
  }
  function toSeverityNumber(severityNumber) {
    return severityNumber;
  }
  function toLogAttributes(attributes, encoder) {
    return Object.keys(attributes).map((key) => (0, internal_1.toKeyValue)(key, attributes[key], encoder));
  }
  exports.toLogAttributes = toLogAttributes;
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/json/logs.js
var require_logs2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonLogsSerializer = undefined;
  var internal_1 = require_internal4();
  var utils_1 = require_utils2();
  var api_1 = require_src();
  exports.JsonLogsSerializer = {
    serializeRequest: (arg) => {
      const request = (0, internal_1.createExportLogsServiceRequest)(arg, utils_1.JSON_ENCODER);
      const encoder = new TextEncoder;
      return encoder.encode(JSON.stringify(request));
    },
    deserializeResponse: (arg) => {
      if (arg.length === 0) {
        return {};
      }
      const decoder = new TextDecoder;
      try {
        return JSON.parse(decoder.decode(arg));
      } catch (err) {
        api_1.diag.warn(`Failed to parse logs export response: ${err.message}. Returning empty response`);
        return {};
      }
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/logs/json/index.js
var require_json = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonLogsSerializer = undefined;
  var logs_1 = require_logs2();
  Object.defineProperty(exports, "JsonLogsSerializer", { enumerable: true, get: function() {
    return logs_1.JsonLogsSerializer;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/metrics/json/metrics.js
var require_metrics2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonMetricsSerializer = undefined;
  var internal_1 = require_internal2();
  var utils_1 = require_utils2();
  var api_1 = require_src();
  exports.JsonMetricsSerializer = {
    serializeRequest: (arg) => {
      const request = (0, internal_1.createExportMetricsServiceRequest)([arg], utils_1.JSON_ENCODER);
      const encoder = new TextEncoder;
      return encoder.encode(JSON.stringify(request));
    },
    deserializeResponse: (arg) => {
      if (arg.length === 0) {
        return {};
      }
      const decoder = new TextDecoder;
      try {
        return JSON.parse(decoder.decode(arg));
      } catch (err) {
        api_1.diag.warn(`Failed to parse metrics export response: ${err.message}. Returning empty response`);
        return {};
      }
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/metrics/json/index.js
var require_json2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonMetricsSerializer = undefined;
  var metrics_1 = require_metrics2();
  Object.defineProperty(exports, "JsonMetricsSerializer", { enumerable: true, get: function() {
    return metrics_1.JsonMetricsSerializer;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/trace/json/trace.js
var require_trace2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonTraceSerializer = undefined;
  var internal_1 = require_internal3();
  var utils_1 = require_utils2();
  var api_1 = require_src();
  exports.JsonTraceSerializer = {
    serializeRequest: (arg) => {
      const request = (0, internal_1.createExportTraceServiceRequest)(arg, utils_1.JSON_ENCODER);
      const encoder = new TextEncoder;
      return encoder.encode(JSON.stringify(request));
    },
    deserializeResponse: (arg) => {
      if (arg.length === 0) {
        return {};
      }
      const decoder = new TextDecoder;
      try {
        return JSON.parse(decoder.decode(arg));
      } catch (err) {
        api_1.diag.warn(`Failed to parse trace export response: ${err.message}. Returning empty response`);
        return {};
      }
    }
  };
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/trace/json/index.js
var require_json3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonTraceSerializer = undefined;
  var trace_1 = require_trace2();
  Object.defineProperty(exports, "JsonTraceSerializer", { enumerable: true, get: function() {
    return trace_1.JsonTraceSerializer;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-transformer@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-transformer/build/src/index.js
var require_src6 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.JsonTraceSerializer = exports.JsonMetricsSerializer = exports.JsonLogsSerializer = exports.ProtobufTraceSerializer = exports.ProtobufMetricsSerializer = exports.ProtobufLogsSerializer = undefined;
  var protobuf_1 = require_protobuf();
  Object.defineProperty(exports, "ProtobufLogsSerializer", { enumerable: true, get: function() {
    return protobuf_1.ProtobufLogsSerializer;
  } });
  var protobuf_2 = require_protobuf2();
  Object.defineProperty(exports, "ProtobufMetricsSerializer", { enumerable: true, get: function() {
    return protobuf_2.ProtobufMetricsSerializer;
  } });
  var protobuf_3 = require_protobuf3();
  Object.defineProperty(exports, "ProtobufTraceSerializer", { enumerable: true, get: function() {
    return protobuf_3.ProtobufTraceSerializer;
  } });
  var json_1 = require_json();
  Object.defineProperty(exports, "JsonLogsSerializer", { enumerable: true, get: function() {
    return json_1.JsonLogsSerializer;
  } });
  var json_2 = require_json2();
  Object.defineProperty(exports, "JsonMetricsSerializer", { enumerable: true, get: function() {
    return json_2.JsonMetricsSerializer;
  } });
  var json_3 = require_json3();
  Object.defineProperty(exports, "JsonTraceSerializer", { enumerable: true, get: function() {
    return json_3.JsonTraceSerializer;
  } });
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/util.js
var require_util = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateAndNormalizeHeaders = undefined;
  var api_1 = require_src();
  function validateAndNormalizeHeaders(partialHeaders) {
    const headers = {};
    Object.entries(partialHeaders ?? {}).forEach(([key, value]) => {
      if (typeof value !== "undefined") {
        headers[key] = String(value);
      } else {
        api_1.diag.warn(`Header "${key}" has invalid value (${value}) and will be ignored`);
      }
    });
    return headers;
  }
  exports.validateAndNormalizeHeaders = validateAndNormalizeHeaders;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/otlp-http-configuration.js
var require_otlp_http_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getHttpConfigurationDefaults = exports.mergeOtlpHttpConfigurationWithDefaults = undefined;
  var shared_configuration_1 = require_shared_configuration();
  var util_1 = require_util();
  function mergeHeaders(userProvidedHeaders, fallbackHeaders, defaultHeaders) {
    return async () => {
      const requiredHeaders = {
        ...await defaultHeaders()
      };
      const headers = {};
      if (fallbackHeaders != null) {
        Object.assign(headers, await fallbackHeaders());
      }
      if (userProvidedHeaders != null) {
        Object.assign(headers, (0, util_1.validateAndNormalizeHeaders)(await userProvidedHeaders()));
      }
      return Object.assign(headers, requiredHeaders);
    };
  }
  function validateUserProvidedUrl(url) {
    if (url == null) {
      return;
    }
    try {
      const base = globalThis.location?.href;
      return new URL(url, base).href;
    } catch {
      throw new Error(`Configuration: Could not parse user-provided export URL: '${url}'`);
    }
  }
  function mergeOtlpHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
    return {
      ...(0, shared_configuration_1.mergeOtlpSharedConfigurationWithDefaults)(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration),
      headers: mergeHeaders(userProvidedConfiguration.headers, fallbackConfiguration.headers, defaultConfiguration.headers),
      url: validateUserProvidedUrl(userProvidedConfiguration.url) ?? fallbackConfiguration.url ?? defaultConfiguration.url
    };
  }
  exports.mergeOtlpHttpConfigurationWithDefaults = mergeOtlpHttpConfigurationWithDefaults;
  function getHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
    return {
      ...(0, shared_configuration_1.getSharedConfigurationDefaults)(),
      headers: async () => requiredHeaders,
      url: "http://localhost:4318/" + signalResourcePath
    };
  }
  exports.getHttpConfigurationDefaults = getHttpConfigurationDefaults;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/otlp-node-http-configuration.js
var require_otlp_node_http_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getNodeHttpConfigurationDefaults = exports.mergeOtlpNodeHttpConfigurationWithDefaults = exports.httpAgentFactoryFromOptions = undefined;
  var otlp_http_configuration_1 = require_otlp_http_configuration();
  function httpAgentFactoryFromOptions(options) {
    return async (protocol) => {
      const isInsecure = protocol === "http:";
      const module2 = isInsecure ? import("http") : import("https");
      const { Agent } = await module2;
      if (isInsecure) {
        const { ca, cert, key, ...insecureOptions } = options;
        return new Agent(insecureOptions);
      }
      return new Agent(options);
    };
  }
  exports.httpAgentFactoryFromOptions = httpAgentFactoryFromOptions;
  function mergeOtlpNodeHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
    return {
      ...(0, otlp_http_configuration_1.mergeOtlpHttpConfigurationWithDefaults)(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration),
      agentFactory: userProvidedConfiguration.agentFactory ?? fallbackConfiguration.agentFactory ?? defaultConfiguration.agentFactory,
      userAgent: userProvidedConfiguration.userAgent
    };
  }
  exports.mergeOtlpNodeHttpConfigurationWithDefaults = mergeOtlpNodeHttpConfigurationWithDefaults;
  function getNodeHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
    return {
      ...(0, otlp_http_configuration_1.getHttpConfigurationDefaults)(requiredHeaders, signalResourcePath),
      agentFactory: httpAgentFactoryFromOptions({ keepAlive: true })
    };
  }
  exports.getNodeHttpConfigurationDefaults = getNodeHttpConfigurationDefaults;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/is-export-retryable.js
var require_is_export_retryable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseRetryAfterToMills = exports.isExportHTTPErrorRetryable = undefined;
  function isExportHTTPErrorRetryable(statusCode) {
    return statusCode === 429 || statusCode === 502 || statusCode === 503 || statusCode === 504;
  }
  exports.isExportHTTPErrorRetryable = isExportHTTPErrorRetryable;
  function parseRetryAfterToMills(retryAfter) {
    if (retryAfter == null) {
      return;
    }
    const seconds = Number.parseInt(retryAfter, 10);
    if (Number.isInteger(seconds)) {
      return seconds > 0 ? seconds * 1000 : -1;
    }
    const delay = new Date(retryAfter).getTime() - Date.now();
    if (delay >= 0) {
      return delay;
    }
    return 0;
  }
  exports.parseRetryAfterToMills = parseRetryAfterToMills;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/version.js
var require_version = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VERSION = undefined;
  exports.VERSION = "0.215.0";
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/transport/http-transport-utils.js
var require_http_transport_utils = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.compressAndSend = exports.sendWithHttp = exports.MAX_RESPONSE_BODY_SIZE = undefined;
  var zlib = __require("zlib");
  var stream_1 = __require("stream");
  var is_export_retryable_1 = require_is_export_retryable();
  var types_1 = require_types();
  var version_1 = require_version();
  var DEFAULT_USER_AGENT = `OTel-OTLP-Exporter-JavaScript/${version_1.VERSION}`;
  exports.MAX_RESPONSE_BODY_SIZE = 4 * 1024 * 1024;
  function sendWithHttp(request, url, headers, compression, userAgent, agent, data, timeoutMillis) {
    return new Promise((resolve) => {
      const parsedUrl = new URL(url);
      if (userAgent) {
        headers["User-Agent"] = `${userAgent} ${DEFAULT_USER_AGENT}`;
      } else {
        headers["User-Agent"] = DEFAULT_USER_AGENT;
      }
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname,
        method: "POST",
        headers,
        agent
      };
      const req = request(options, (res) => {
        const responseData = [];
        let responseSize = 0;
        res.on("data", (chunk) => {
          responseSize += chunk.length;
          if (responseSize > exports.MAX_RESPONSE_BODY_SIZE) {
            const sizeError = new Error(`OTLP export response body exceeded size limit of ${exports.MAX_RESPONSE_BODY_SIZE} bytes`);
            resolve({ status: "failure", error: sizeError });
            res.destroy();
            return;
          }
          responseData.push(chunk);
        });
        res.on("end", () => {
          if (res.statusCode && res.statusCode <= 299) {
            resolve({
              status: "success",
              data: Buffer.concat(responseData)
            });
          } else if (res.statusCode && (0, is_export_retryable_1.isExportHTTPErrorRetryable)(res.statusCode)) {
            resolve({
              status: "retryable",
              retryInMillis: (0, is_export_retryable_1.parseRetryAfterToMills)(res.headers["retry-after"])
            });
          } else {
            const error = new types_1.OTLPExporterError(res.statusMessage, res.statusCode, Buffer.concat(responseData).toString());
            resolve({
              status: "failure",
              error
            });
          }
        });
        res.on("error", (error) => {
          if (res.statusCode && res.statusCode <= 299) {
            resolve({
              status: "success"
            });
          } else if (res.statusCode && (0, is_export_retryable_1.isExportHTTPErrorRetryable)(res.statusCode)) {
            resolve({
              status: "retryable",
              error,
              retryInMillis: (0, is_export_retryable_1.parseRetryAfterToMills)(res.headers["retry-after"])
            });
          } else {
            resolve({
              status: "failure",
              error
            });
          }
        });
      });
      req.setTimeout(timeoutMillis, () => {
        req.destroy();
        resolve({
          status: "retryable",
          error: new Error("Request timed out")
        });
      });
      req.on("error", (error) => {
        if (isHttpTransportNetworkErrorRetryable(error)) {
          resolve({
            status: "retryable",
            error
          });
        } else {
          resolve({
            status: "failure",
            error
          });
        }
      });
      compressAndSend(req, compression, data, (error) => {
        resolve({
          status: "failure",
          error
        });
      });
    });
  }
  exports.sendWithHttp = sendWithHttp;
  function compressAndSend(req, compression, data, onError) {
    let dataStream = readableFromUint8Array(data);
    if (compression === "gzip") {
      req.setHeader("Content-Encoding", "gzip");
      dataStream = dataStream.on("error", onError).pipe(zlib.createGzip()).on("error", onError);
    }
    dataStream.pipe(req).on("error", onError);
  }
  exports.compressAndSend = compressAndSend;
  function readableFromUint8Array(buff) {
    const readable = new stream_1.Readable;
    readable.push(buff);
    readable.push(null);
    return readable;
  }
  function isHttpTransportNetworkErrorRetryable(error) {
    const RETRYABLE_NETWORK_ERROR_CODES = new Set([
      "ECONNRESET",
      "ECONNREFUSED",
      "EPIPE",
      "ETIMEDOUT",
      "EAI_AGAIN",
      "ENOTFOUND",
      "ENETUNREACH",
      "EHOSTUNREACH"
    ]);
    if ("code" in error && typeof error.code === "string") {
      return RETRYABLE_NETWORK_ERROR_CODES.has(error.code);
    }
    return false;
  }
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/transport/http-exporter-transport.js
var require_http_exporter_transport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createHttpExporterTransport = undefined;
  var http_transport_utils_1 = require_http_transport_utils();

  class HttpExporterTransport {
    _utils = null;
    _parameters;
    constructor(parameters) {
      this._parameters = parameters;
    }
    async send(data, timeoutMillis) {
      const { agent, request } = await this._loadUtils();
      const headers = await this._parameters.headers();
      return (0, http_transport_utils_1.sendWithHttp)(request, this._parameters.url, headers, this._parameters.compression, this._parameters.userAgent, agent, data, timeoutMillis);
    }
    shutdown() {}
    async _loadUtils() {
      let utils = this._utils;
      if (utils === null) {
        const protocol = new URL(this._parameters.url).protocol;
        const [agent, request] = await Promise.all([
          this._parameters.agentFactory(protocol),
          requestFunctionFactory(protocol)
        ]);
        utils = this._utils = { agent, request };
      }
      return utils;
    }
  }
  async function requestFunctionFactory(protocol) {
    const module2 = protocol === "http:" ? import("http") : import("https");
    const { request } = await module2;
    return request;
  }
  function createHttpExporterTransport(parameters) {
    return new HttpExporterTransport(parameters);
  }
  exports.createHttpExporterTransport = createHttpExporterTransport;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/retrying-transport.js
var require_retrying_transport = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createRetryingTransport = undefined;
  var api_1 = require_src();
  var MAX_ATTEMPTS = 5;
  var INITIAL_BACKOFF = 1000;
  var MAX_BACKOFF = 5000;
  var BACKOFF_MULTIPLIER = 1.5;
  var JITTER = 0.2;
  function getJitter() {
    return Math.random() * (2 * JITTER) - JITTER;
  }

  class RetryingTransport {
    _transport;
    constructor(transport) {
      this._transport = transport;
    }
    retry(data, timeoutMillis, inMillis) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._transport.send(data, timeoutMillis).then(resolve, reject);
        }, inMillis);
      });
    }
    async send(data, timeoutMillis) {
      let attempts = MAX_ATTEMPTS;
      let nextBackoff = INITIAL_BACKOFF;
      const deadline = Date.now() + timeoutMillis;
      let result = await this._transport.send(data, timeoutMillis);
      while (result.status === "retryable" && attempts > 0) {
        attempts--;
        const backoff = Math.max(Math.min(nextBackoff * (1 + getJitter()), MAX_BACKOFF), 0);
        nextBackoff = nextBackoff * BACKOFF_MULTIPLIER;
        const retryInMillis = result.retryInMillis ?? backoff;
        const remainingTimeoutMillis = deadline - Date.now();
        if (retryInMillis > remainingTimeoutMillis) {
          api_1.diag.info(`Export retry time ${Math.round(retryInMillis)}ms exceeds remaining timeout ${Math.round(remainingTimeoutMillis)}ms, not retrying further.`);
          return result;
        }
        api_1.diag.verbose(`Scheduling export retry in ${Math.round(retryInMillis)}ms`);
        result = await this.retry(data, remainingTimeoutMillis, retryInMillis);
      }
      if (result.status === "success") {
        api_1.diag.verbose(`Export succeeded after ${MAX_ATTEMPTS - attempts} retry attempts.`);
      } else if (result.status === "retryable") {
        api_1.diag.info(`Export failed after maximum retry attempts (${MAX_ATTEMPTS}).`);
      } else {
        api_1.diag.info(`Export failed with non-retryable error: ${result.error}`);
      }
      return result;
    }
    shutdown() {
      return this._transport.shutdown();
    }
  }
  function createRetryingTransport(options) {
    return new RetryingTransport(options.transport);
  }
  exports.createRetryingTransport = createRetryingTransport;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/otlp-http-export-delegate.js
var require_otlp_http_export_delegate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createOtlpHttpExportDelegate = undefined;
  var otlp_export_delegate_1 = require_otlp_export_delegate();
  var http_exporter_transport_1 = require_http_exporter_transport();
  var bounded_queue_export_promise_handler_1 = require_bounded_queue_export_promise_handler();
  var retrying_transport_1 = require_retrying_transport();
  function createOtlpHttpExportDelegate(options, serializer) {
    return (0, otlp_export_delegate_1.createOtlpExportDelegate)({
      transport: (0, retrying_transport_1.createRetryingTransport)({
        transport: (0, http_exporter_transport_1.createHttpExporterTransport)(options)
      }),
      serializer,
      promiseHandler: (0, bounded_queue_export_promise_handler_1.createBoundedQueueExportPromiseHandler)(options)
    }, { timeout: options.timeoutMillis });
  }
  exports.createOtlpHttpExportDelegate = createOtlpHttpExportDelegate;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/shared-env-configuration.js
var require_shared_env_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSharedConfigurationFromEnvironment = undefined;
  var core_1 = require_src2();
  var api_1 = require_src();
  function parseAndValidateTimeoutFromEnv(timeoutEnvVar) {
    const envTimeout = (0, core_1.getNumberFromEnv)(timeoutEnvVar);
    if (envTimeout != null) {
      if (Number.isFinite(envTimeout) && envTimeout > 0) {
        return envTimeout;
      }
      api_1.diag.warn(`Configuration: ${timeoutEnvVar} is invalid, expected number greater than 0 (actual: ${envTimeout})`);
    }
    return;
  }
  function getTimeoutFromEnv(signalIdentifier) {
    const specificTimeout = parseAndValidateTimeoutFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_TIMEOUT`);
    const nonSpecificTimeout = parseAndValidateTimeoutFromEnv("OTEL_EXPORTER_OTLP_TIMEOUT");
    return specificTimeout ?? nonSpecificTimeout;
  }
  function parseAndValidateCompressionFromEnv(compressionEnvVar) {
    const compression = (0, core_1.getStringFromEnv)(compressionEnvVar)?.trim();
    if (compression == null || compression === "none" || compression === "gzip") {
      return compression;
    }
    api_1.diag.warn(`Configuration: ${compressionEnvVar} is invalid, expected 'none' or 'gzip' (actual: '${compression}')`);
    return;
  }
  function getCompressionFromEnv(signalIdentifier) {
    const specificCompression = parseAndValidateCompressionFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_COMPRESSION`);
    const nonSpecificCompression = parseAndValidateCompressionFromEnv("OTEL_EXPORTER_OTLP_COMPRESSION");
    return specificCompression ?? nonSpecificCompression;
  }
  function getSharedConfigurationFromEnvironment(signalIdentifier) {
    return {
      timeoutMillis: getTimeoutFromEnv(signalIdentifier),
      compression: getCompressionFromEnv(signalIdentifier)
    };
  }
  exports.getSharedConfigurationFromEnvironment = getSharedConfigurationFromEnvironment;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/otlp-node-http-env-configuration.js
var require_otlp_node_http_env_configuration = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getNodeHttpConfigurationFromEnvironment = undefined;
  var fs = __require("fs");
  var path = __require("path");
  var core_1 = require_src2();
  var api_1 = require_src();
  var shared_env_configuration_1 = require_shared_env_configuration();
  var shared_configuration_1 = require_shared_configuration();
  var otlp_node_http_configuration_1 = require_otlp_node_http_configuration();
  function getStaticHeadersFromEnv(signalIdentifier) {
    const signalSpecificRawHeaders = (0, core_1.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${signalIdentifier}_HEADERS`);
    const nonSignalSpecificRawHeaders = (0, core_1.getStringFromEnv)("OTEL_EXPORTER_OTLP_HEADERS");
    const signalSpecificHeaders = (0, core_1.parseKeyPairsIntoRecord)(signalSpecificRawHeaders);
    const nonSignalSpecificHeaders = (0, core_1.parseKeyPairsIntoRecord)(nonSignalSpecificRawHeaders);
    if (Object.keys(signalSpecificHeaders).length === 0 && Object.keys(nonSignalSpecificHeaders).length === 0) {
      return;
    }
    return Object.assign({}, (0, core_1.parseKeyPairsIntoRecord)(nonSignalSpecificRawHeaders), (0, core_1.parseKeyPairsIntoRecord)(signalSpecificRawHeaders));
  }
  function appendRootPathToUrlIfNeeded(url) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.toString();
    } catch {
      api_1.diag.warn(`Configuration: Could not parse environment-provided export URL: '${url}', falling back to undefined`);
      return;
    }
  }
  function appendResourcePathToUrl(url, path2) {
    try {
      new URL(url);
    } catch {
      api_1.diag.warn(`Configuration: Could not parse environment-provided export URL: '${url}', falling back to undefined`);
      return;
    }
    if (!url.endsWith("/")) {
      url = url + "/";
    }
    url += path2;
    try {
      new URL(url);
    } catch {
      api_1.diag.warn(`Configuration: Provided URL appended with '${path2}' is not a valid URL, using 'undefined' instead of '${url}'`);
      return;
    }
    return url;
  }
  function getNonSpecificUrlFromEnv(signalResourcePath) {
    const envUrl = (0, core_1.getStringFromEnv)("OTEL_EXPORTER_OTLP_ENDPOINT");
    if (envUrl === undefined) {
      return;
    }
    return appendResourcePathToUrl(envUrl, signalResourcePath);
  }
  function getSpecificUrlFromEnv(signalIdentifier) {
    const envUrl = (0, core_1.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${signalIdentifier}_ENDPOINT`);
    if (envUrl === undefined) {
      return;
    }
    return appendRootPathToUrlIfNeeded(envUrl);
  }
  function readFileFromEnv(signalSpecificEnvVar, nonSignalSpecificEnvVar, warningMessage) {
    const signalSpecificPath = (0, core_1.getStringFromEnv)(signalSpecificEnvVar);
    const nonSignalSpecificPath = (0, core_1.getStringFromEnv)(nonSignalSpecificEnvVar);
    const filePath = signalSpecificPath ?? nonSignalSpecificPath;
    if (filePath != null) {
      try {
        return fs.readFileSync(path.resolve(process.cwd(), filePath));
      } catch {
        api_1.diag.warn(warningMessage);
        return;
      }
    } else {
      return;
    }
  }
  function getClientCertificateFromEnv(signalIdentifier) {
    return readFileFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function getClientKeyFromEnv(signalIdentifier) {
    return readFileFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function getRootCertificateFromEnv(signalIdentifier) {
    return readFileFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function getNodeHttpConfigurationFromEnvironment(signalIdentifier, signalResourcePath) {
    return {
      ...(0, shared_env_configuration_1.getSharedConfigurationFromEnvironment)(signalIdentifier),
      url: getSpecificUrlFromEnv(signalIdentifier) ?? getNonSpecificUrlFromEnv(signalResourcePath),
      headers: (0, shared_configuration_1.wrapStaticHeadersInFunction)(getStaticHeadersFromEnv(signalIdentifier)),
      agentFactory: (0, otlp_node_http_configuration_1.httpAgentFactoryFromOptions)({
        keepAlive: true,
        ca: getRootCertificateFromEnv(signalIdentifier),
        cert: getClientCertificateFromEnv(signalIdentifier),
        key: getClientKeyFromEnv(signalIdentifier)
      })
    };
  }
  exports.getNodeHttpConfigurationFromEnvironment = getNodeHttpConfigurationFromEnvironment;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/convert-legacy-http-options.js
var require_convert_legacy_http_options = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertLegacyHeaders = undefined;
  var shared_configuration_1 = require_shared_configuration();
  function convertLegacyHeaders(config) {
    if (typeof config.headers === "function") {
      return config.headers;
    }
    return (0, shared_configuration_1.wrapStaticHeadersInFunction)(config.headers);
  }
  exports.convertLegacyHeaders = convertLegacyHeaders;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/convert-legacy-node-http-options.js
var require_convert_legacy_node_http_options = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertLegacyHttpOptions = undefined;
  var api_1 = require_src();
  var otlp_node_http_configuration_1 = require_otlp_node_http_configuration();
  var index_node_http_1 = require_index_node_http();
  var otlp_node_http_env_configuration_1 = require_otlp_node_http_env_configuration();
  var convert_legacy_http_options_1 = require_convert_legacy_http_options();
  function convertLegacyAgentOptions(config) {
    if (typeof config.httpAgentOptions === "function") {
      return config.httpAgentOptions;
    }
    let legacy = config.httpAgentOptions;
    if (config.keepAlive != null) {
      legacy = { keepAlive: config.keepAlive, ...legacy };
    }
    if (legacy != null) {
      return (0, index_node_http_1.httpAgentFactoryFromOptions)(legacy);
    } else {
      return;
    }
  }
  function convertLegacyHttpOptions(config, signalIdentifier, signalResourcePath, requiredHeaders) {
    if (config.metadata) {
      api_1.diag.warn("Metadata cannot be set when using http");
    }
    return (0, otlp_node_http_configuration_1.mergeOtlpNodeHttpConfigurationWithDefaults)({
      url: config.url,
      headers: (0, convert_legacy_http_options_1.convertLegacyHeaders)(config),
      concurrencyLimit: config.concurrencyLimit,
      timeoutMillis: config.timeoutMillis,
      compression: config.compression,
      agentFactory: convertLegacyAgentOptions(config),
      userAgent: config.userAgent
    }, (0, otlp_node_http_env_configuration_1.getNodeHttpConfigurationFromEnvironment)(signalIdentifier, signalResourcePath), (0, otlp_node_http_configuration_1.getNodeHttpConfigurationDefaults)(requiredHeaders, signalResourcePath));
  }
  exports.convertLegacyHttpOptions = convertLegacyHttpOptions;
});

// node_modules/.bun/@opentelemetry+otlp-exporter-base@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/otlp-exporter-base/build/src/index-node-http.js
var require_index_node_http = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertLegacyHttpOptions = exports.getSharedConfigurationFromEnvironment = exports.createOtlpHttpExportDelegate = exports.httpAgentFactoryFromOptions = undefined;
  var otlp_node_http_configuration_1 = require_otlp_node_http_configuration();
  Object.defineProperty(exports, "httpAgentFactoryFromOptions", { enumerable: true, get: function() {
    return otlp_node_http_configuration_1.httpAgentFactoryFromOptions;
  } });
  var otlp_http_export_delegate_1 = require_otlp_http_export_delegate();
  Object.defineProperty(exports, "createOtlpHttpExportDelegate", { enumerable: true, get: function() {
    return otlp_http_export_delegate_1.createOtlpHttpExportDelegate;
  } });
  var shared_env_configuration_1 = require_shared_env_configuration();
  Object.defineProperty(exports, "getSharedConfigurationFromEnvironment", { enumerable: true, get: function() {
    return shared_env_configuration_1.getSharedConfigurationFromEnvironment;
  } });
  var convert_legacy_node_http_options_1 = require_convert_legacy_node_http_options();
  Object.defineProperty(exports, "convertLegacyHttpOptions", { enumerable: true, get: function() {
    return convert_legacy_node_http_options_1.convertLegacyHttpOptions;
  } });
});

export { require_src5 as require_src, require_aspromise, require_base64, require_eventemitter, require_float, require_inquire, require_utf8, require_pool, require_src6 as require_src1, require_index_node_http };
