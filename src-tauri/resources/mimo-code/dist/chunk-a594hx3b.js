// @bun
import {
  require_dist_cjs as require_dist_cjs5,
  require_dist_cjs1 as require_dist_cjs6,
  require_dist_cjs2 as require_dist_cjs9,
  require_dist_cjs3 as require_dist_cjs10,
  require_dist_cjs4 as require_dist_cjs11
} from "./chunk-7vfjvamn.js";
import {
  require_dist_cjs as require_dist_cjs3
} from "./chunk-004aw63f.js";
import"./chunk-m53ks0yf.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs4
} from "./chunk-4ch5vxv6.js";
import {
  require_dist_cjs
} from "./chunk-tp6bgx9r.js";
import {
  require_dist_cjs1 as require_dist_cjs7,
  require_dist_cjs2 as require_dist_cjs8
} from "./chunk-2nayx6q1.js";
import {
  __commonJS,
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js
var require_ChecksumStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChecksumStream = undefined;
  var util_base64_1 = require_dist_cjs9();
  var stream_1 = __require("stream");

  class ChecksumStream extends stream_1.Duplex {
    expectedChecksum;
    checksumSourceLocation;
    checksum;
    source;
    base64Encoder;
    pendingCallback = null;
    constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) {
      super();
      if (typeof source.pipe === "function") {
        this.source = source;
      } else {
        throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
      }
      this.base64Encoder = base64Encoder ?? util_base64_1.toBase64;
      this.expectedChecksum = expectedChecksum;
      this.checksum = checksum;
      this.checksumSourceLocation = checksumSourceLocation;
      this.source.pipe(this);
    }
    _read(size) {
      if (this.pendingCallback) {
        const callback = this.pendingCallback;
        this.pendingCallback = null;
        callback();
      }
    }
    _write(chunk, encoding, callback) {
      try {
        this.checksum.update(chunk);
        const canPushMore = this.push(chunk);
        if (!canPushMore) {
          this.pendingCallback = callback;
          return;
        }
      } catch (e) {
        return callback(e);
      }
      return callback();
    }
    async _final(callback) {
      try {
        const digest = await this.checksum.digest();
        const received = this.base64Encoder(digest);
        if (this.expectedChecksum !== received) {
          return callback(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}"` + ` in response header "${this.checksumSourceLocation}".`));
        }
      } catch (e) {
        return callback(e);
      }
      this.push(null);
      return callback();
    }
  }
  exports.ChecksumStream = ChecksumStream;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js
var require_stream_type_check = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isBlob = exports.isReadableStream = undefined;
  var isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
  exports.isReadableStream = isReadableStream;
  var isBlob = (blob) => {
    return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
  };
  exports.isBlob = isBlob;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js
var require_ChecksumStream_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChecksumStream = undefined;
  var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {};

  class ChecksumStream extends ReadableStreamRef {
  }
  exports.ChecksumStream = ChecksumStream;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js
var require_createChecksumStream_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createChecksumStream = undefined;
  var util_base64_1 = require_dist_cjs9();
  var stream_type_check_1 = require_stream_type_check();
  var ChecksumStream_browser_1 = require_ChecksumStream_browser();
  var createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
    if (!(0, stream_type_check_1.isReadableStream)(source)) {
      throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
    }
    const encoder = base64Encoder ?? util_base64_1.toBase64;
    if (typeof TransformStream !== "function") {
      throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
    }
    const transform = new TransformStream({
      start() {},
      async transform(chunk, controller) {
        checksum.update(chunk);
        controller.enqueue(chunk);
      },
      async flush(controller) {
        const digest = await checksum.digest();
        const received = encoder(digest);
        if (expectedChecksum !== received) {
          const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}"` + ` in response header "${checksumSourceLocation}".`);
          controller.error(error);
        } else {
          controller.terminate();
        }
      }
    });
    source.pipeThrough(transform);
    const readable = transform.readable;
    Object.setPrototypeOf(readable, ChecksumStream_browser_1.ChecksumStream.prototype);
    return readable;
  };
  exports.createChecksumStream = createChecksumStream;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js
var require_createChecksumStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createChecksumStream = createChecksumStream;
  var stream_type_check_1 = require_stream_type_check();
  var ChecksumStream_1 = require_ChecksumStream();
  var createChecksumStream_browser_1 = require_createChecksumStream_browser();
  function createChecksumStream(init) {
    if (typeof ReadableStream === "function" && (0, stream_type_check_1.isReadableStream)(init.source)) {
      return (0, createChecksumStream_browser_1.createChecksumStream)(init);
    }
    return new ChecksumStream_1.ChecksumStream(init);
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js
var require_ByteArrayCollector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ByteArrayCollector = undefined;

  class ByteArrayCollector {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(allocByteArray) {
      this.allocByteArray = allocByteArray;
    }
    push(byteArray) {
      this.byteArrays.push(byteArray);
      this.byteLength += byteArray.byteLength;
    }
    flush() {
      if (this.byteArrays.length === 1) {
        const bytes = this.byteArrays[0];
        this.reset();
        return bytes;
      }
      const aggregation = this.allocByteArray(this.byteLength);
      let cursor = 0;
      for (let i = 0;i < this.byteArrays.length; ++i) {
        const bytes = this.byteArrays[i];
        aggregation.set(bytes, cursor);
        cursor += bytes.byteLength;
      }
      this.reset();
      return aggregation;
    }
    reset() {
      this.byteArrays = [];
      this.byteLength = 0;
    }
  }
  exports.ByteArrayCollector = ByteArrayCollector;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js
var require_createBufferedReadableStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createBufferedReadable = undefined;
  exports.createBufferedReadableStream = createBufferedReadableStream;
  exports.merge = merge;
  exports.flush = flush;
  exports.sizeOf = sizeOf;
  exports.modeOf = modeOf;
  var ByteArrayCollector_1 = require_ByteArrayCollector();
  function createBufferedReadableStream(upstream, size, logger) {
    const reader = upstream.getReader();
    let streamBufferingLoggedWarning = false;
    let bytesSeen = 0;
    const buffers = ["", new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2))];
    let mode = -1;
    const pull = async (controller) => {
      const { value, done } = await reader.read();
      const chunk = value;
      if (done) {
        if (mode !== -1) {
          const remainder = flush(buffers, mode);
          if (sizeOf(remainder) > 0) {
            controller.enqueue(remainder);
          }
        }
        controller.close();
      } else {
        const chunkMode = modeOf(chunk, false);
        if (mode !== chunkMode) {
          if (mode >= 0) {
            controller.enqueue(flush(buffers, mode));
          }
          mode = chunkMode;
        }
        if (mode === -1) {
          controller.enqueue(chunk);
          return;
        }
        const chunkSize = sizeOf(chunk);
        bytesSeen += chunkSize;
        const bufferSize = sizeOf(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
          controller.enqueue(chunk);
        } else {
          const newSize = merge(buffers, mode, chunk);
          if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
            streamBufferingLoggedWarning = true;
            logger?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
          }
          if (newSize >= size) {
            controller.enqueue(flush(buffers, mode));
          } else {
            await pull(controller);
          }
        }
      }
    };
    return new ReadableStream({
      pull
    });
  }
  exports.createBufferedReadable = createBufferedReadableStream;
  function merge(buffers, mode, chunk) {
    switch (mode) {
      case 0:
        buffers[0] += chunk;
        return sizeOf(buffers[0]);
      case 1:
      case 2:
        buffers[mode].push(chunk);
        return sizeOf(buffers[mode]);
    }
  }
  function flush(buffers, mode) {
    switch (mode) {
      case 0:
        const s = buffers[0];
        buffers[0] = "";
        return s;
      case 1:
      case 2:
        return buffers[mode].flush();
    }
    throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
  }
  function sizeOf(chunk) {
    return chunk?.byteLength ?? chunk?.length ?? 0;
  }
  function modeOf(chunk, allowBuffer = true) {
    if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
      return 2;
    }
    if (chunk instanceof Uint8Array) {
      return 1;
    }
    if (typeof chunk === "string") {
      return 0;
    }
    return -1;
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js
var require_createBufferedReadable = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createBufferedReadable = createBufferedReadable;
  var node_stream_1 = __require("stream");
  var ByteArrayCollector_1 = require_ByteArrayCollector();
  var createBufferedReadableStream_1 = require_createBufferedReadableStream();
  var stream_type_check_1 = require_stream_type_check();
  function createBufferedReadable(upstream, size, logger) {
    if ((0, stream_type_check_1.isReadableStream)(upstream)) {
      return (0, createBufferedReadableStream_1.createBufferedReadableStream)(upstream, size, logger);
    }
    const downstream = new node_stream_1.Readable({ read() {} });
    let streamBufferingLoggedWarning = false;
    let bytesSeen = 0;
    const buffers = [
      "",
      new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2)),
      new ByteArrayCollector_1.ByteArrayCollector((size2) => Buffer.from(new Uint8Array(size2)))
    ];
    let mode = -1;
    upstream.on("data", (chunk) => {
      const chunkMode = (0, createBufferedReadableStream_1.modeOf)(chunk, true);
      if (mode !== chunkMode) {
        if (mode >= 0) {
          downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
        }
        mode = chunkMode;
      }
      if (mode === -1) {
        downstream.push(chunk);
        return;
      }
      const chunkSize = (0, createBufferedReadableStream_1.sizeOf)(chunk);
      bytesSeen += chunkSize;
      const bufferSize = (0, createBufferedReadableStream_1.sizeOf)(buffers[mode]);
      if (chunkSize >= size && bufferSize === 0) {
        downstream.push(chunk);
      } else {
        const newSize = (0, createBufferedReadableStream_1.merge)(buffers, mode, chunk);
        if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
          streamBufferingLoggedWarning = true;
          logger?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
        }
        if (newSize >= size) {
          downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
        }
      }
    });
    upstream.on("end", () => {
      if (mode !== -1) {
        const remainder = (0, createBufferedReadableStream_1.flush)(buffers, mode);
        if ((0, createBufferedReadableStream_1.sizeOf)(remainder) > 0) {
          downstream.push(remainder);
        }
      }
      downstream.push(null);
    });
    return downstream;
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.browser.js
var require_getAwsChunkedEncodingStream_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAwsChunkedEncodingStream = undefined;
  var getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined && bodyLengthChecker !== undefined && checksumAlgorithmFn !== undefined && checksumLocationName !== undefined && streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const reader = readableStream.getReader();
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await reader.read();
        if (done) {
          controller.enqueue(`0\r
`);
          if (checksumRequired) {
            const checksum = base64Encoder(await digest);
            controller.enqueue(`${checksumLocationName}:${checksum}\r
`);
            controller.enqueue(`\r
`);
          }
          controller.close();
        } else {
          controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r
${value}\r
`);
        }
      }
    });
  };
  exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
  var node_stream_1 = __require("stream");
  var getAwsChunkedEncodingStream_browser_1 = require_getAwsChunkedEncodingStream_browser();
  var stream_type_check_1 = require_stream_type_check();
  function getAwsChunkedEncodingStream(stream, options) {
    const readable = stream;
    const readableStream = stream;
    if ((0, stream_type_check_1.isReadableStream)(readableStream)) {
      return (0, getAwsChunkedEncodingStream_browser_1.getAwsChunkedEncodingStream)(readableStream, options);
    }
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined && checksumAlgorithmFn !== undefined && checksumLocationName !== undefined && streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readable) : undefined;
    const awsChunkedEncodingStream = new node_stream_1.Readable({
      read: () => {}
    });
    readable.on("data", (data) => {
      const length = bodyLengthChecker(data) || 0;
      if (length === 0) {
        return;
      }
      awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
      awsChunkedEncodingStream.push(data);
      awsChunkedEncodingStream.push(`\r
`);
    });
    readable.on("end", async () => {
      awsChunkedEncodingStream.push(`0\r
`);
      if (checksumRequired) {
        const checksum = base64Encoder(await digest);
        awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
        awsChunkedEncodingStream.push(`\r
`);
      }
      awsChunkedEncodingStream.push(null);
    });
    return awsChunkedEncodingStream;
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js
var require_headStream_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.headStream = headStream;
  async function headStream(stream, bytes) {
    let byteLengthCounter = 0;
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
      const { done, value } = await reader.read();
      if (value) {
        chunks.push(value);
        byteLengthCounter += value?.byteLength ?? 0;
      }
      if (byteLengthCounter >= bytes) {
        break;
      }
      isDone = done;
    }
    reader.releaseLock();
    const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
    let offset = 0;
    for (const chunk of chunks) {
      if (chunk.byteLength > collected.byteLength - offset) {
        collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
        break;
      } else {
        collected.set(chunk, offset);
      }
      offset += chunk.length;
    }
    return collected;
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/headStream.js
var require_headStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.headStream = undefined;
  var stream_1 = __require("stream");
  var headStream_browser_1 = require_headStream_browser();
  var stream_type_check_1 = require_stream_type_check();
  var headStream = (stream, bytes) => {
    if ((0, stream_type_check_1.isReadableStream)(stream)) {
      return (0, headStream_browser_1.headStream)(stream, bytes);
    }
    return new Promise((resolve, reject) => {
      const collector = new Collector;
      collector.limit = bytes;
      stream.pipe(collector);
      stream.on("error", (err) => {
        collector.end();
        reject(err);
      });
      collector.on("error", reject);
      collector.on("finish", function() {
        const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
        resolve(bytes2);
      });
    });
  };
  exports.headStream = headStream;

  class Collector extends stream_1.Writable {
    buffers = [];
    limit = Infinity;
    bytesBuffered = 0;
    _write(chunk, encoding, callback) {
      this.buffers.push(chunk);
      this.bytesBuffered += chunk.byteLength ?? 0;
      if (this.bytesBuffered >= this.limit) {
        const excess = this.bytesBuffered - this.limit;
        const tailBuffer = this.buffers[this.buffers.length - 1];
        this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
        this.emit("finish");
      }
      callback();
    }
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js
var require_sdk_stream_mixin_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sdkStreamMixin = undefined;
  var fetch_http_handler_1 = require_dist_cjs10();
  var util_base64_1 = require_dist_cjs9();
  var util_hex_encoding_1 = require_dist_cjs11();
  var util_utf8_1 = require_dist_cjs8();
  var stream_type_check_1 = require_stream_type_check();
  var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
  var sdkStreamMixin = (stream) => {
    if (!isBlobInstance(stream) && !(0, stream_type_check_1.isReadableStream)(stream)) {
      const name = stream?.__proto__?.constructor?.name || stream;
      throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      return await (0, fetch_http_handler_1.streamCollector)(stream);
    };
    const blobToWebStream = (blob) => {
      if (typeof blob.stream !== "function") {
        throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
` + "If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
      }
      return blob.stream();
    };
    return Object.assign(stream, {
      transformToByteArray,
      transformToString: async (encoding) => {
        const buf = await transformToByteArray();
        if (encoding === "base64") {
          return (0, util_base64_1.toBase64)(buf);
        } else if (encoding === "hex") {
          return (0, util_hex_encoding_1.toHex)(buf);
        } else if (encoding === undefined || encoding === "utf8" || encoding === "utf-8") {
          return (0, util_utf8_1.toUtf8)(buf);
        } else if (typeof TextDecoder === "function") {
          return new TextDecoder(encoding).decode(buf);
        } else {
          throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
        }
      },
      transformToWebStream: () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        if (isBlobInstance(stream)) {
          return blobToWebStream(stream);
        } else if ((0, stream_type_check_1.isReadableStream)(stream)) {
          return stream;
        } else {
          throw new Error(`Cannot transform payload to web stream, got ${stream}`);
        }
      }
    });
  };
  exports.sdkStreamMixin = sdkStreamMixin;
  var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sdkStreamMixin = undefined;
  var node_http_handler_1 = require_dist_cjs3();
  var util_buffer_from_1 = require_dist_cjs7();
  var stream_1 = __require("stream");
  var sdk_stream_mixin_browser_1 = require_sdk_stream_mixin_browser();
  var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
  var sdkStreamMixin = (stream) => {
    if (!(stream instanceof stream_1.Readable)) {
      try {
        return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
      } catch (e) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
      }
    }
    let transformed = false;
    const transformToByteArray = async () => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      return await (0, node_http_handler_1.streamCollector)(stream);
    };
    return Object.assign(stream, {
      transformToByteArray,
      transformToString: async (encoding) => {
        const buf = await transformToByteArray();
        if (encoding === undefined || Buffer.isEncoding(encoding)) {
          return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
        } else {
          const decoder = new TextDecoder(encoding);
          return decoder.decode(buf);
        }
      },
      transformToWebStream: () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        if (stream.readableFlowing !== null) {
          throw new Error("The stream has been consumed by other callbacks.");
        }
        if (typeof stream_1.Readable.toWeb !== "function") {
          throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
        }
        transformed = true;
        return stream_1.Readable.toWeb(stream);
      }
    });
  };
  exports.sdkStreamMixin = sdkStreamMixin;
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js
var require_splitStream_browser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.splitStream = splitStream;
  async function splitStream(stream) {
    if (typeof stream.stream === "function") {
      stream = stream.stream();
    }
    const readableStream = stream;
    return readableStream.tee();
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/splitStream.js
var require_splitStream = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.splitStream = splitStream;
  var stream_1 = __require("stream");
  var splitStream_browser_1 = require_splitStream_browser();
  var stream_type_check_1 = require_stream_type_check();
  async function splitStream(stream) {
    if ((0, stream_type_check_1.isReadableStream)(stream) || (0, stream_type_check_1.isBlob)(stream)) {
      return (0, splitStream_browser_1.splitStream)(stream);
    }
    const stream1 = new stream_1.PassThrough;
    const stream2 = new stream_1.PassThrough;
    stream.pipe(stream1);
    stream.pipe(stream2);
    return [stream1, stream2];
  }
});

// node_modules/.bun/@smithy+util-stream@4.5.23/node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs12 = __commonJS((exports) => {
  var utilBase64 = require_dist_cjs9();
  var utilUtf8 = require_dist_cjs8();
  var ChecksumStream = require_ChecksumStream();
  var createChecksumStream = require_createChecksumStream();
  var createBufferedReadable = require_createBufferedReadable();
  var getAwsChunkedEncodingStream = require_getAwsChunkedEncodingStream();
  var headStream = require_headStream();
  var sdkStreamMixin = require_sdk_stream_mixin();
  var splitStream = require_splitStream();
  var streamTypeCheck = require_stream_type_check();

  class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
      if (typeof source === "string") {
        if (encoding === "base64") {
          return Uint8ArrayBlobAdapter.mutate(utilBase64.fromBase64(source));
        }
        return Uint8ArrayBlobAdapter.mutate(utilUtf8.fromUtf8(source));
      }
      throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
    static mutate(source) {
      Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
      return source;
    }
    transformToString(encoding = "utf-8") {
      if (encoding === "base64") {
        return utilBase64.toBase64(this);
      }
      return utilUtf8.toUtf8(this);
    }
  }
  exports.isBlob = streamTypeCheck.isBlob;
  exports.isReadableStream = streamTypeCheck.isReadableStream;
  exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter;
  Object.prototype.hasOwnProperty.call(ChecksumStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: ChecksumStream["__proto__"]
  });
  Object.keys(ChecksumStream).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = ChecksumStream[k];
  });
  Object.prototype.hasOwnProperty.call(createChecksumStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: createChecksumStream["__proto__"]
  });
  Object.keys(createChecksumStream).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = createChecksumStream[k];
  });
  Object.prototype.hasOwnProperty.call(createBufferedReadable, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: createBufferedReadable["__proto__"]
  });
  Object.keys(createBufferedReadable).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = createBufferedReadable[k];
  });
  Object.prototype.hasOwnProperty.call(getAwsChunkedEncodingStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: getAwsChunkedEncodingStream["__proto__"]
  });
  Object.keys(getAwsChunkedEncodingStream).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = getAwsChunkedEncodingStream[k];
  });
  Object.prototype.hasOwnProperty.call(headStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: headStream["__proto__"]
  });
  Object.keys(headStream).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = headStream[k];
  });
  Object.prototype.hasOwnProperty.call(sdkStreamMixin, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: sdkStreamMixin["__proto__"]
  });
  Object.keys(sdkStreamMixin).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = sdkStreamMixin[k];
  });
  Object.prototype.hasOwnProperty.call(splitStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: splitStream["__proto__"]
  });
  Object.keys(splitStream).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = splitStream[k];
  });
});

// node_modules/.bun/@smithy+core@3.23.15/node_modules/@smithy/core/dist-cjs/submodules/endpoints/index.js
var require_endpoints = __commonJS((exports) => {
  var urlParser = require_dist_cjs4();
  var toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
      if ("url" in endpoint) {
        const v1Endpoint = urlParser.parseUrl(endpoint.url);
        if (endpoint.headers) {
          v1Endpoint.headers = {};
          for (const [name, values] of Object.entries(endpoint.headers)) {
            v1Endpoint.headers[name.toLowerCase()] = values.join(", ");
          }
        }
        return v1Endpoint;
      }
      return endpoint;
    }
    return urlParser.parseUrl(endpoint);
  };
  exports.toEndpointV1 = toEndpointV1;
});

// node_modules/.bun/@smithy+core@3.23.15/node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
var require_schema = __commonJS((exports) => {
  var protocolHttp = require_dist_cjs2();
  var utilMiddleware = require_dist_cjs5();
  var endpoints = require_endpoints();
  var deref = (schemaRef) => {
    if (typeof schemaRef === "function") {
      return schemaRef();
    }
    return schemaRef;
  };
  var operation = (namespace, name, traits, input, output) => ({
    name,
    namespace,
    traits,
    input,
    output
  });
  var schemaDeserializationMiddleware = (config) => (next, context) => async (args) => {
    const { response } = await next(args);
    const { operationSchema } = utilMiddleware.getSmithyContext(context);
    const [, ns, n, t, i, o] = operationSchema ?? [];
    try {
      const parsed = await config.protocol.deserializeResponse(operation(ns, n, t, i, o), {
        ...config,
        ...context
      }, response);
      return {
        response,
        output: parsed
      };
    } catch (error2) {
      Object.defineProperty(error2, "$response", {
        value: response,
        enumerable: false,
        writable: false,
        configurable: false
      });
      if (!("$metadata" in error2)) {
        const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        try {
          error2.message += `
  ` + hint;
        } catch (e) {
          if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
            console.warn(hint);
          } else {
            context.logger?.warn?.(hint);
          }
        }
        if (typeof error2.$responseBodyText !== "undefined") {
          if (error2.$response) {
            error2.$response.body = error2.$responseBodyText;
          }
        }
        try {
          if (protocolHttp.HttpResponse.isInstance(response)) {
            const { headers = {} } = response;
            const headerEntries = Object.entries(headers);
            error2.$metadata = {
              httpStatusCode: response.statusCode,
              requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
              extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
              cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
            };
          }
        } catch (e) {}
      }
      throw error2;
    }
  };
  var findHeader = (pattern, headers) => {
    return (headers.find(([k]) => {
      return k.match(pattern);
    }) || [undefined, undefined])[1];
  };
  var schemaSerializationMiddleware = (config) => (next, context) => async (args) => {
    const { operationSchema } = utilMiddleware.getSmithyContext(context);
    const [, ns, n, t, i, o] = operationSchema ?? [];
    const endpoint = context.endpointV2 ? async () => endpoints.toEndpointV1(context.endpointV2) : config.endpoint;
    const request = await config.protocol.serializeRequest(operation(ns, n, t, i, o), args.input, {
      ...config,
      ...context,
      endpoint
    });
    return next({
      ...args,
      request
    });
  };
  var deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true
  };
  var serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true
  };
  function getSchemaSerdePlugin(config) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
        commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
        config.protocol.setSerdeContext(config);
      }
    };
  }

  class Schema {
    name;
    namespace;
    traits;
    static assign(instance, values) {
      const schema = Object.assign(instance, values);
      return schema;
    }
    static [Symbol.hasInstance](lhs) {
      const isPrototype = this.prototype.isPrototypeOf(lhs);
      if (!isPrototype && typeof lhs === "object" && lhs !== null) {
        const list2 = lhs;
        return list2.symbol === this.symbol;
      }
      return isPrototype;
    }
    getName() {
      return this.namespace + "#" + this.name;
    }
  }

  class ListSchema extends Schema {
    static symbol = Symbol.for("@smithy/lis");
    name;
    traits;
    valueSchema;
    symbol = ListSchema.symbol;
  }
  var list = (namespace, name, traits, valueSchema) => Schema.assign(new ListSchema, {
    name,
    namespace,
    traits,
    valueSchema
  });

  class MapSchema extends Schema {
    static symbol = Symbol.for("@smithy/map");
    name;
    traits;
    keySchema;
    valueSchema;
    symbol = MapSchema.symbol;
  }
  var map = (namespace, name, traits, keySchema, valueSchema) => Schema.assign(new MapSchema, {
    name,
    namespace,
    traits,
    keySchema,
    valueSchema
  });

  class OperationSchema extends Schema {
    static symbol = Symbol.for("@smithy/ope");
    name;
    traits;
    input;
    output;
    symbol = OperationSchema.symbol;
  }
  var op = (namespace, name, traits, input, output) => Schema.assign(new OperationSchema, {
    name,
    namespace,
    traits,
    input,
    output
  });

  class StructureSchema extends Schema {
    static symbol = Symbol.for("@smithy/str");
    name;
    traits;
    memberNames;
    memberList;
    symbol = StructureSchema.symbol;
  }
  var struct = (namespace, name, traits, memberNames, memberList) => Schema.assign(new StructureSchema, {
    name,
    namespace,
    traits,
    memberNames,
    memberList
  });

  class ErrorSchema extends StructureSchema {
    static symbol = Symbol.for("@smithy/err");
    ctor;
    symbol = ErrorSchema.symbol;
  }
  var error = (namespace, name, traits, memberNames, memberList, ctor) => Schema.assign(new ErrorSchema, {
    name,
    namespace,
    traits,
    memberNames,
    memberList,
    ctor: null
  });
  var traitsCache = [];
  function translateTraits(indicator) {
    if (typeof indicator === "object") {
      return indicator;
    }
    indicator = indicator | 0;
    if (traitsCache[indicator]) {
      return traitsCache[indicator];
    }
    const traits = {};
    let i = 0;
    for (const trait of [
      "httpLabel",
      "idempotent",
      "idempotencyToken",
      "sensitive",
      "httpPayload",
      "httpResponseCode",
      "httpQueryParams"
    ]) {
      if ((indicator >> i++ & 1) === 1) {
        traits[trait] = 1;
      }
    }
    return traitsCache[indicator] = traits;
  }
  var anno = {
    it: Symbol.for("@smithy/nor-struct-it"),
    ns: Symbol.for("@smithy/ns")
  };
  var simpleSchemaCacheN = [];
  var simpleSchemaCacheS = {};

  class NormalizedSchema {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = NormalizedSchema.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(ref, memberName) {
      this.ref = ref;
      this.memberName = memberName;
      const traitStack = [];
      let _ref = ref;
      let schema = ref;
      this._isMemberSchema = false;
      while (isMemberSchema(_ref)) {
        traitStack.push(_ref[1]);
        _ref = _ref[0];
        schema = deref(_ref);
        this._isMemberSchema = true;
      }
      if (traitStack.length > 0) {
        this.memberTraits = {};
        for (let i = traitStack.length - 1;i >= 0; --i) {
          const traitSet = traitStack[i];
          Object.assign(this.memberTraits, translateTraits(traitSet));
        }
      } else {
        this.memberTraits = 0;
      }
      if (schema instanceof NormalizedSchema) {
        const computedMemberTraits = this.memberTraits;
        Object.assign(this, schema);
        this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
        this.normalizedTraits = undefined;
        this.memberName = memberName ?? schema.memberName;
        return;
      }
      this.schema = deref(schema);
      if (isStaticSchema(this.schema)) {
        this.name = `${this.schema[1]}#${this.schema[2]}`;
        this.traits = this.schema[3];
      } else {
        this.name = this.memberName ?? String(schema);
        this.traits = 0;
      }
      if (this._isMemberSchema && !memberName) {
        throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
      }
    }
    static [Symbol.hasInstance](lhs) {
      const isPrototype = this.prototype.isPrototypeOf(lhs);
      if (!isPrototype && typeof lhs === "object" && lhs !== null) {
        const ns = lhs;
        return ns.symbol === this.symbol;
      }
      return isPrototype;
    }
    static of(ref) {
      const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
      if (typeof ref === "number") {
        if (simpleSchemaCacheN[ref]) {
          return simpleSchemaCacheN[ref];
        }
      } else if (typeof ref === "string") {
        if (simpleSchemaCacheS[ref]) {
          return simpleSchemaCacheS[ref];
        }
      } else if (keyAble) {
        if (ref[anno.ns]) {
          return ref[anno.ns];
        }
      }
      const sc = deref(ref);
      if (sc instanceof NormalizedSchema) {
        return sc;
      }
      if (isMemberSchema(sc)) {
        const [ns2, traits] = sc;
        if (ns2 instanceof NormalizedSchema) {
          Object.assign(ns2.getMergedTraits(), translateTraits(traits));
          return ns2;
        }
        throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
      }
      const ns = new NormalizedSchema(sc);
      if (keyAble) {
        return ref[anno.ns] = ns;
      }
      if (typeof sc === "string") {
        return simpleSchemaCacheS[sc] = ns;
      }
      if (typeof sc === "number") {
        return simpleSchemaCacheN[sc] = ns;
      }
      return ns;
    }
    getSchema() {
      const sc = this.schema;
      if (Array.isArray(sc) && sc[0] === 0) {
        return sc[4];
      }
      return sc;
    }
    getName(withNamespace = false) {
      const { name } = this;
      const short = !withNamespace && name && name.includes("#");
      return short ? name.split("#")[1] : name || undefined;
    }
    getMemberName() {
      return this.memberName;
    }
    isMemberSchema() {
      return this._isMemberSchema;
    }
    isListSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
    }
    isMapSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
    }
    isStructSchema() {
      const sc = this.getSchema();
      if (typeof sc !== "object") {
        return false;
      }
      const id = sc[0];
      return id === 3 || id === -3 || id === 4;
    }
    isUnionSchema() {
      const sc = this.getSchema();
      if (typeof sc !== "object") {
        return false;
      }
      return sc[0] === 4;
    }
    isBlobSchema() {
      const sc = this.getSchema();
      return sc === 21 || sc === 42;
    }
    isTimestampSchema() {
      const sc = this.getSchema();
      return typeof sc === "number" && sc >= 4 && sc <= 7;
    }
    isUnitSchema() {
      return this.getSchema() === "unit";
    }
    isDocumentSchema() {
      return this.getSchema() === 15;
    }
    isStringSchema() {
      return this.getSchema() === 0;
    }
    isBooleanSchema() {
      return this.getSchema() === 2;
    }
    isNumericSchema() {
      return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
      return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
      return this.getSchema() === 19;
    }
    isStreaming() {
      const { streaming } = this.getMergedTraits();
      return !!streaming || this.getSchema() === 42;
    }
    isIdempotencyToken() {
      return !!this.getMergedTraits().idempotencyToken;
    }
    getMergedTraits() {
      return this.normalizedTraits ?? (this.normalizedTraits = {
        ...this.getOwnTraits(),
        ...this.getMemberTraits()
      });
    }
    getMemberTraits() {
      return translateTraits(this.memberTraits);
    }
    getOwnTraits() {
      return translateTraits(this.traits);
    }
    getKeySchema() {
      const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
      if (!isDoc && !isMap) {
        throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
      }
      const schema = this.getSchema();
      const memberSchema = isDoc ? 15 : schema[4] ?? 0;
      return member([memberSchema, 0], "key");
    }
    getValueSchema() {
      const sc = this.getSchema();
      const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
      const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : undefined;
      if (memberSchema != null) {
        return member([memberSchema, 0], isMap ? "value" : "member");
      }
      throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
    }
    getMemberSchema(memberName) {
      const struct2 = this.getSchema();
      if (this.isStructSchema() && struct2[4].includes(memberName)) {
        const i = struct2[4].indexOf(memberName);
        const memberSchema = struct2[5][i];
        return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
      }
      if (this.isDocumentSchema()) {
        return member([15, 0], memberName);
      }
      throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
    }
    getMemberSchemas() {
      const buffer = {};
      try {
        for (const [k, v] of this.structIterator()) {
          buffer[k] = v;
        }
      } catch (ignored) {}
      return buffer;
    }
    getEventStreamMember() {
      if (this.isStructSchema()) {
        for (const [memberName, memberSchema] of this.structIterator()) {
          if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
            return memberName;
          }
        }
      }
      return "";
    }
    *structIterator() {
      if (this.isUnitSchema()) {
        return;
      }
      if (!this.isStructSchema()) {
        throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
      }
      const struct2 = this.getSchema();
      const z = struct2[4].length;
      let it = struct2[anno.it];
      if (it && z === it.length) {
        yield* it;
        return;
      }
      it = Array(z);
      for (let i = 0;i < z; ++i) {
        const k = struct2[4][i];
        const v = member([struct2[5][i], 0], k);
        yield it[i] = [k, v];
      }
      struct2[anno.it] = it;
    }
  }
  function member(memberSchema, memberName) {
    if (memberSchema instanceof NormalizedSchema) {
      return Object.assign(memberSchema, {
        memberName,
        _isMemberSchema: true
      });
    }
    const internalCtorAccess = NormalizedSchema;
    return new internalCtorAccess(memberSchema, memberName);
  }
  var isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
  var isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;

  class SimpleSchema extends Schema {
    static symbol = Symbol.for("@smithy/sim");
    name;
    schemaRef;
    traits;
    symbol = SimpleSchema.symbol;
  }
  var sim = (namespace, name, schemaRef, traits) => Schema.assign(new SimpleSchema, {
    name,
    namespace,
    traits,
    schemaRef
  });
  var simAdapter = (namespace, name, traits, schemaRef) => Schema.assign(new SimpleSchema, {
    name,
    namespace,
    traits,
    schemaRef
  });
  var SCHEMA = {
    BLOB: 21,
    STREAMING_BLOB: 42,
    BOOLEAN: 2,
    STRING: 0,
    NUMERIC: 1,
    BIG_INTEGER: 17,
    BIG_DECIMAL: 19,
    DOCUMENT: 15,
    TIMESTAMP_DEFAULT: 4,
    TIMESTAMP_DATE_TIME: 5,
    TIMESTAMP_HTTP_DATE: 6,
    TIMESTAMP_EPOCH_SECONDS: 7,
    LIST_MODIFIER: 64,
    MAP_MODIFIER: 128
  };

  class TypeRegistry {
    namespace;
    schemas;
    exceptions;
    static registries = new Map;
    constructor(namespace, schemas = new Map, exceptions = new Map) {
      this.namespace = namespace;
      this.schemas = schemas;
      this.exceptions = exceptions;
    }
    static for(namespace) {
      if (!TypeRegistry.registries.has(namespace)) {
        TypeRegistry.registries.set(namespace, new TypeRegistry(namespace));
      }
      return TypeRegistry.registries.get(namespace);
    }
    copyFrom(other) {
      const { schemas, exceptions } = this;
      for (const [k, v] of other.schemas) {
        if (!schemas.has(k)) {
          schemas.set(k, v);
        }
      }
      for (const [k, v] of other.exceptions) {
        if (!exceptions.has(k)) {
          exceptions.set(k, v);
        }
      }
    }
    register(shapeId, schema) {
      const qualifiedName = this.normalizeShapeId(shapeId);
      for (const r of [this, TypeRegistry.for(qualifiedName.split("#")[0])]) {
        r.schemas.set(qualifiedName, schema);
      }
    }
    getSchema(shapeId) {
      const id = this.normalizeShapeId(shapeId);
      if (!this.schemas.has(id)) {
        throw new Error(`@smithy/core/schema - schema not found for ${id}`);
      }
      return this.schemas.get(id);
    }
    registerError(es, ctor) {
      const $error2 = es;
      const ns = $error2[1];
      for (const r of [this, TypeRegistry.for(ns)]) {
        r.schemas.set(ns + "#" + $error2[2], $error2);
        r.exceptions.set($error2, ctor);
      }
    }
    getErrorCtor(es) {
      const $error2 = es;
      if (this.exceptions.has($error2)) {
        return this.exceptions.get($error2);
      }
      const registry = TypeRegistry.for($error2[1]);
      return registry.exceptions.get($error2);
    }
    getBaseException() {
      for (const exceptionKey of this.exceptions.keys()) {
        if (Array.isArray(exceptionKey)) {
          const [, ns, name] = exceptionKey;
          const id = ns + "#" + name;
          if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
            return exceptionKey;
          }
        }
      }
      return;
    }
    find(predicate) {
      return [...this.schemas.values()].find(predicate);
    }
    clear() {
      this.schemas.clear();
      this.exceptions.clear();
    }
    normalizeShapeId(shapeId) {
      if (shapeId.includes("#")) {
        return shapeId;
      }
      return this.namespace + "#" + shapeId;
    }
  }
  exports.ErrorSchema = ErrorSchema;
  exports.ListSchema = ListSchema;
  exports.MapSchema = MapSchema;
  exports.NormalizedSchema = NormalizedSchema;
  exports.OperationSchema = OperationSchema;
  exports.SCHEMA = SCHEMA;
  exports.Schema = Schema;
  exports.SimpleSchema = SimpleSchema;
  exports.StructureSchema = StructureSchema;
  exports.TypeRegistry = TypeRegistry;
  exports.deref = deref;
  exports.deserializerMiddlewareOption = deserializerMiddlewareOption;
  exports.error = error;
  exports.getSchemaSerdePlugin = getSchemaSerdePlugin;
  exports.isStaticSchema = isStaticSchema;
  exports.list = list;
  exports.map = map;
  exports.op = op;
  exports.operation = operation;
  exports.serializerMiddlewareOption = serializerMiddlewareOption;
  exports.sim = sim;
  exports.simAdapter = simAdapter;
  exports.simpleSchemaCacheN = simpleSchemaCacheN;
  exports.simpleSchemaCacheS = simpleSchemaCacheS;
  exports.struct = struct;
  exports.traitsCache = traitsCache;
  exports.translateTraits = translateTraits;
});

// node_modules/.bun/@smithy+core@3.23.15/node_modules/@smithy/core/dist-cjs/submodules/serde/index.js
var require_serde = __commonJS((exports) => {
  var uuid = require_dist_cjs6();
  var copyDocumentWithTransform = (source, schemaRef, transform = (_) => _) => source;
  var parseBoolean = (value) => {
    switch (value) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        throw new Error(`Unable to parse boolean value "${value}"`);
    }
  };
  var expectBoolean = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value === "number") {
      if (value === 0 || value === 1) {
        logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
      }
      if (value === 0) {
        return false;
      }
      if (value === 1) {
        return true;
      }
    }
    if (typeof value === "string") {
      const lower = value.toLowerCase();
      if (lower === "false" || lower === "true") {
        logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
      }
      if (lower === "false") {
        return false;
      }
      if (lower === "true") {
        return true;
      }
    }
    if (typeof value === "boolean") {
      return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
  };
  var expectNumber = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value === "string") {
      const parsed = parseFloat(value);
      if (!Number.isNaN(parsed)) {
        if (String(parsed) !== String(value)) {
          logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
        }
        return parsed;
      }
    }
    if (typeof value === "number") {
      return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
  };
  var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
  var expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
      if (Math.abs(expected) > MAX_FLOAT) {
        throw new TypeError(`Expected 32-bit float, got ${value}`);
      }
    }
    return expected;
  };
  var expectLong = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
      return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
  };
  var expectInt = expectLong;
  var expectInt32 = (value) => expectSizedInt(value, 32);
  var expectShort = (value) => expectSizedInt(value, 16);
  var expectByte = (value) => expectSizedInt(value, 8);
  var expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
      throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
  };
  var castInt = (value, size) => {
    switch (size) {
      case 32:
        return Int32Array.of(value)[0];
      case 16:
        return Int16Array.of(value)[0];
      case 8:
        return Int8Array.of(value)[0];
    }
  };
  var expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
      if (location) {
        throw new TypeError(`Expected a non-null value for ${location}`);
      }
      throw new TypeError("Expected a non-null value");
    }
    return value;
  };
  var expectObject = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
  };
  var expectString = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value === "string") {
      return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
      logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
      return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
  };
  var expectUnion = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject).filter(([, v]) => v != null).map(([k]) => k);
    if (setKeys.length === 0) {
      throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
      throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
  };
  var strictParseDouble = (value) => {
    if (typeof value == "string") {
      return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
  };
  var strictParseFloat = strictParseDouble;
  var strictParseFloat32 = (value) => {
    if (typeof value == "string") {
      return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
  };
  var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
  var parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
      throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
  };
  var limitedParseDouble = (value) => {
    if (typeof value == "string") {
      return parseFloatString(value);
    }
    return expectNumber(value);
  };
  var handleFloat = limitedParseDouble;
  var limitedParseFloat = limitedParseDouble;
  var limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
      return parseFloatString(value);
    }
    return expectFloat32(value);
  };
  var parseFloatString = (value) => {
    switch (value) {
      case "NaN":
        return NaN;
      case "Infinity":
        return Infinity;
      case "-Infinity":
        return -Infinity;
      default:
        throw new Error(`Unable to parse float value: ${value}`);
    }
  };
  var strictParseLong = (value) => {
    if (typeof value === "string") {
      return expectLong(parseNumber(value));
    }
    return expectLong(value);
  };
  var strictParseInt = strictParseLong;
  var strictParseInt32 = (value) => {
    if (typeof value === "string") {
      return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
  };
  var strictParseShort = (value) => {
    if (typeof value === "string") {
      return expectShort(parseNumber(value));
    }
    return expectShort(value);
  };
  var strictParseByte = (value) => {
    if (typeof value === "string") {
      return expectByte(parseNumber(value));
    }
    return expectByte(value);
  };
  var stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message).split(`
`).slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join(`
`);
  };
  var logger = {
    warn: console.warn
  };
  var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function dateToUtcString(date2) {
    const year2 = date2.getUTCFullYear();
    const month = date2.getUTCMonth();
    const dayOfWeek = date2.getUTCDay();
    const dayOfMonthInt = date2.getUTCDate();
    const hoursInt = date2.getUTCHours();
    const minutesInt = date2.getUTCMinutes();
    const secondsInt = date2.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year2} ${hoursString}:${minutesString}:${secondsString} GMT`;
  }
  var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
  var parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
      throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year2 = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  };
  var RFC3339_WITH_OFFSET$1 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
  var parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET$1.exec(value);
    if (!match) {
      throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year2 = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date2 = buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
      date2.setTime(date2.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date2;
  };
  var IMF_FIXDATE$1 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
  var RFC_850_DATE$1 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
  var ASC_TIME$1 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
  var parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE$1.exec(value);
    if (match) {
      const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE$1.exec(value);
    if (match) {
      const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
        hours,
        minutes,
        seconds,
        fractionalMilliseconds
      }));
    }
    match = ASC_TIME$1.exec(value);
    if (match) {
      const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
      return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
  };
  var parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
      return;
    }
    let valueAsDouble;
    if (typeof value === "number") {
      valueAsDouble = value;
    } else if (typeof value === "string") {
      valueAsDouble = strictParseDouble(value);
    } else if (typeof value === "object" && value.tag === 1) {
      valueAsDouble = value.value;
    } else {
      throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
      throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
  };
  var buildDate = (year2, month, day, time2) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year2, adjustedMonth, day);
    return new Date(Date.UTC(year2, adjustedMonth, day, parseDateValue(time2.hours, "hour", 0, 23), parseDateValue(time2.minutes, "minute", 0, 59), parseDateValue(time2.seconds, "seconds", 0, 60), parseMilliseconds(time2.fractionalMilliseconds)));
  };
  var parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
      return valueInThisCentury + 100;
    }
    return valueInThisCentury;
  };
  var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
  var adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
      return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
  };
  var parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
      throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
  };
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var validateDayOfMonth = (year2, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year2)) {
      maxDays = 29;
    }
    if (day > maxDays) {
      throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year2}: ${day}`);
    }
  };
  var isLeapYear = (year2) => {
    return year2 % 4 === 0 && (year2 % 100 !== 0 || year2 % 400 === 0);
  };
  var parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
      throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
  };
  var parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
      return 0;
    }
    return strictParseFloat32("0." + value) * 1000;
  };
  var parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
      direction = 1;
    } else if (directionStr == "-") {
      direction = -1;
    } else {
      throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
  };
  var stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
      idx++;
    }
    if (idx === 0) {
      return value;
    }
    return value.slice(idx);
  };
  var LazyJsonString = function LazyJsonString2(val) {
    const str = Object.assign(new String(val), {
      deserializeJSON() {
        return JSON.parse(String(val));
      },
      toString() {
        return String(val);
      },
      toJSON() {
        return String(val);
      }
    });
    return str;
  };
  LazyJsonString.from = (object) => {
    if (object && typeof object === "object" && (object instanceof LazyJsonString || ("deserializeJSON" in object))) {
      return object;
    } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
      return LazyJsonString(String(object));
    }
    return LazyJsonString(JSON.stringify(object));
  };
  LazyJsonString.fromObject = LazyJsonString.from;
  function quoteHeader(part) {
    if (part.includes(",") || part.includes('"')) {
      part = `"${part.replace(/"/g, "\\\"")}"`;
    }
    return part;
  }
  var ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
  var mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
  var time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
  var date = `(\\d?\\d)`;
  var year = `(\\d{4})`;
  var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
  var IMF_FIXDATE = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
  var RFC_850_DATE = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
  var ASC_TIME = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var _parseEpochTimestamp = (value) => {
    if (value == null) {
      return;
    }
    let num = NaN;
    if (typeof value === "number") {
      num = value;
    } else if (typeof value === "string") {
      if (!/^-?\d*\.?\d+$/.test(value)) {
        throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
      }
      num = Number.parseFloat(value);
    } else if (typeof value === "object" && value.tag === 1) {
      num = value.value;
    }
    if (isNaN(num) || Math.abs(num) === Infinity) {
      throw new TypeError("Epoch timestamps must be valid finite numbers.");
    }
    return new Date(Math.round(num * 1000));
  };
  var _parseRfc3339DateTimeWithOffset = (value) => {
    if (value == null) {
      return;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC3339 timestamps must be strings");
    }
    const matches = RFC3339_WITH_OFFSET.exec(value);
    if (!matches) {
      throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
    }
    const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
    range(monthStr, 1, 12);
    range(dayStr, 1, 31);
    range(hours, 0, 23);
    range(minutes, 0, 59);
    range(seconds, 0, 60);
    const date2 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1000) : 0));
    date2.setUTCFullYear(Number(yearStr));
    if (offsetStr.toUpperCase() != "Z") {
      const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [undefined, "+", 0, 0];
      const scalar = sign === "-" ? 1 : -1;
      date2.setTime(date2.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1000 + Number(offsetM) * 60 * 1000));
    }
    return date2;
  };
  var _parseRfc7231DateTime = (value) => {
    if (value == null) {
      return;
    }
    if (typeof value !== "string") {
      throw new TypeError("RFC7231 timestamps must be strings.");
    }
    let day;
    let month;
    let year2;
    let hour;
    let minute;
    let second;
    let fraction;
    let matches;
    if (matches = IMF_FIXDATE.exec(value)) {
      [, day, month, year2, hour, minute, second, fraction] = matches;
    } else if (matches = RFC_850_DATE.exec(value)) {
      [, day, month, year2, hour, minute, second, fraction] = matches;
      year2 = (Number(year2) + 1900).toString();
    } else if (matches = ASC_TIME.exec(value)) {
      [, month, day, hour, minute, second, fraction, year2] = matches;
    }
    if (year2 && second) {
      const timestamp = Date.UTC(Number(year2), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1000) : 0);
      range(day, 1, 31);
      range(hour, 0, 23);
      range(minute, 0, 59);
      range(second, 0, 60);
      const date2 = new Date(timestamp);
      date2.setUTCFullYear(Number(year2));
      return date2;
    }
    throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
  };
  function range(v, min, max) {
    const _v = Number(v);
    if (_v < min || _v > max) {
      throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
    }
  }
  function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
      throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
      return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0;i < segments.length; i++) {
      if (currentSegment === "") {
        currentSegment = segments[i];
      } else {
        currentSegment += delimiter + segments[i];
      }
      if ((i + 1) % numDelimiters === 0) {
        compoundSegments.push(currentSegment);
        currentSegment = "";
      }
    }
    if (currentSegment !== "") {
      compoundSegments.push(currentSegment);
    }
    return compoundSegments;
  }
  var splitHeader = (value) => {
    const z = value.length;
    const values = [];
    let withinQuotes = false;
    let prevChar = undefined;
    let anchor = 0;
    for (let i = 0;i < z; ++i) {
      const char = value[i];
      switch (char) {
        case `"`:
          if (prevChar !== "\\") {
            withinQuotes = !withinQuotes;
          }
          break;
        case ",":
          if (!withinQuotes) {
            values.push(value.slice(anchor, i));
            anchor = i + 1;
          }
          break;
      }
      prevChar = char;
    }
    values.push(value.slice(anchor));
    return values.map((v) => {
      v = v.trim();
      const z2 = v.length;
      if (z2 < 2) {
        return v;
      }
      if (v[0] === `"` && v[z2 - 1] === `"`) {
        v = v.slice(1, z2 - 1);
      }
      return v.replace(/\\"/g, '"');
    });
  };
  var format = /^-?\d*(\.\d+)?$/;

  class NumericValue {
    string;
    type;
    constructor(string, type) {
      this.string = string;
      this.type = type;
      if (!format.test(string)) {
        throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
      }
    }
    toString() {
      return this.string;
    }
    static [Symbol.hasInstance](object) {
      if (!object || typeof object !== "object") {
        return false;
      }
      const _nv = object;
      return NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
    }
  }
  function nv(input) {
    return new NumericValue(String(input), "bigDecimal");
  }
  exports.generateIdempotencyToken = uuid.v4;
  exports.LazyJsonString = LazyJsonString;
  exports.NumericValue = NumericValue;
  exports._parseEpochTimestamp = _parseEpochTimestamp;
  exports._parseRfc3339DateTimeWithOffset = _parseRfc3339DateTimeWithOffset;
  exports._parseRfc7231DateTime = _parseRfc7231DateTime;
  exports.copyDocumentWithTransform = copyDocumentWithTransform;
  exports.dateToUtcString = dateToUtcString;
  exports.expectBoolean = expectBoolean;
  exports.expectByte = expectByte;
  exports.expectFloat32 = expectFloat32;
  exports.expectInt = expectInt;
  exports.expectInt32 = expectInt32;
  exports.expectLong = expectLong;
  exports.expectNonNull = expectNonNull;
  exports.expectNumber = expectNumber;
  exports.expectObject = expectObject;
  exports.expectShort = expectShort;
  exports.expectString = expectString;
  exports.expectUnion = expectUnion;
  exports.handleFloat = handleFloat;
  exports.limitedParseDouble = limitedParseDouble;
  exports.limitedParseFloat = limitedParseFloat;
  exports.limitedParseFloat32 = limitedParseFloat32;
  exports.logger = logger;
  exports.nv = nv;
  exports.parseBoolean = parseBoolean;
  exports.parseEpochTimestamp = parseEpochTimestamp;
  exports.parseRfc3339DateTime = parseRfc3339DateTime;
  exports.parseRfc3339DateTimeWithOffset = parseRfc3339DateTimeWithOffset;
  exports.parseRfc7231DateTime = parseRfc7231DateTime;
  exports.quoteHeader = quoteHeader;
  exports.splitEvery = splitEvery;
  exports.splitHeader = splitHeader;
  exports.strictParseByte = strictParseByte;
  exports.strictParseDouble = strictParseDouble;
  exports.strictParseFloat = strictParseFloat;
  exports.strictParseFloat32 = strictParseFloat32;
  exports.strictParseInt = strictParseInt;
  exports.strictParseInt32 = strictParseInt32;
  exports.strictParseLong = strictParseLong;
  exports.strictParseShort = strictParseShort;
});

// node_modules/.bun/@smithy+core@3.23.15/node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js
var require_protocols = __commonJS((exports) => {
  var utilStream = require_dist_cjs12();
  var schema = require_schema();
  var serde = require_serde();
  var protocolHttp = require_dist_cjs2();
  var utilBase64 = require_dist_cjs9();
  var utilUtf8 = require_dist_cjs8();
  var collectBody = async (streamBody = new Uint8Array, context) => {
    if (streamBody instanceof Uint8Array) {
      return utilStream.Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
      return utilStream.Uint8ArrayBlobAdapter.mutate(new Uint8Array);
    }
    const fromContext = context.streamCollector(streamBody);
    return utilStream.Uint8ArrayBlobAdapter.mutate(await fromContext);
  };
  function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  class SerdeContext {
    serdeContext;
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
    }
  }

  class HttpProtocol extends SerdeContext {
    options;
    compositeErrorRegistry;
    constructor(options) {
      super();
      this.options = options;
      this.compositeErrorRegistry = schema.TypeRegistry.for(options.defaultNamespace);
      for (const etr of options.errorTypeRegistries ?? []) {
        this.compositeErrorRegistry.copyFrom(etr);
      }
    }
    getRequestType() {
      return protocolHttp.HttpRequest;
    }
    getResponseType() {
      return protocolHttp.HttpResponse;
    }
    setSerdeContext(serdeContext) {
      this.serdeContext = serdeContext;
      this.serializer.setSerdeContext(serdeContext);
      this.deserializer.setSerdeContext(serdeContext);
      if (this.getPayloadCodec()) {
        this.getPayloadCodec().setSerdeContext(serdeContext);
      }
    }
    updateServiceEndpoint(request, endpoint) {
      if ("url" in endpoint) {
        request.protocol = endpoint.url.protocol;
        request.hostname = endpoint.url.hostname;
        request.port = endpoint.url.port ? Number(endpoint.url.port) : undefined;
        request.path = endpoint.url.pathname;
        request.fragment = endpoint.url.hash || undefined;
        request.username = endpoint.url.username || undefined;
        request.password = endpoint.url.password || undefined;
        if (!request.query) {
          request.query = {};
        }
        for (const [k, v] of endpoint.url.searchParams.entries()) {
          request.query[k] = v;
        }
        if (endpoint.headers) {
          for (const [name, values] of Object.entries(endpoint.headers)) {
            request.headers[name] = values.join(", ");
          }
        }
        return request;
      } else {
        request.protocol = endpoint.protocol;
        request.hostname = endpoint.hostname;
        request.port = endpoint.port ? Number(endpoint.port) : undefined;
        request.path = endpoint.path;
        request.query = {
          ...endpoint.query
        };
        if (endpoint.headers) {
          for (const [name, value] of Object.entries(endpoint.headers)) {
            request.headers[name] = value;
          }
        }
        return request;
      }
    }
    setHostPrefix(request, operationSchema, input) {
      if (this.serdeContext?.disableHostPrefix) {
        return;
      }
      const inputNs = schema.NormalizedSchema.of(operationSchema.input);
      const opTraits = schema.translateTraits(operationSchema.traits ?? {});
      if (opTraits.endpoint) {
        let hostPrefix = opTraits.endpoint?.[0];
        if (typeof hostPrefix === "string") {
          const hostLabelInputs = [...inputNs.structIterator()].filter(([, member]) => member.getMergedTraits().hostLabel);
          for (const [name] of hostLabelInputs) {
            const replacement = input[name];
            if (typeof replacement !== "string") {
              throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
            }
            hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
          }
          request.hostname = hostPrefix + request.hostname;
        }
      }
    }
    deserializeMetadata(output) {
      return {
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      };
    }
    async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
      const eventStreamSerde = await this.loadEventStreamCapability();
      return eventStreamSerde.serializeEventStream({
        eventStream,
        requestSchema,
        initialRequest
      });
    }
    async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
      const eventStreamSerde = await this.loadEventStreamCapability();
      return eventStreamSerde.deserializeEventStream({
        response,
        responseSchema,
        initialResponseContainer
      });
    }
    async loadEventStreamCapability() {
      const { EventStreamSerde } = await import("./chunk-z88f5181.js");
      return new EventStreamSerde({
        marshaller: this.getEventStreamMarshaller(),
        serializer: this.serializer,
        deserializer: this.deserializer,
        serdeContext: this.serdeContext,
        defaultContentType: this.getDefaultContentType()
      });
    }
    getDefaultContentType() {
      throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(schema2, context, response, arg4, arg5) {
      return [];
    }
    getEventStreamMarshaller() {
      const context = this.serdeContext;
      if (!context.eventStreamMarshaller) {
        throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
      }
      return context.eventStreamMarshaller;
    }
  }

  class HttpBindingProtocol extends HttpProtocol {
    async serializeRequest(operationSchema, _input, context) {
      const input = _input && typeof _input === "object" ? _input : {};
      const serializer = this.serializer;
      const query = {};
      const headers = {};
      const endpoint = await context.endpoint();
      const ns = schema.NormalizedSchema.of(operationSchema?.input);
      const payloadMemberNames = [];
      const payloadMemberSchemas = [];
      let hasNonHttpBindingMember = false;
      let payload;
      const request = new protocolHttp.HttpRequest({
        protocol: "",
        hostname: "",
        port: undefined,
        path: "",
        fragment: undefined,
        query,
        headers,
        body: undefined
      });
      if (endpoint) {
        this.updateServiceEndpoint(request, endpoint);
        this.setHostPrefix(request, operationSchema, input);
        const opTraits = schema.translateTraits(operationSchema.traits);
        if (opTraits.http) {
          request.method = opTraits.http[0];
          const [path, search] = opTraits.http[1].split("?");
          if (request.path == "/") {
            request.path = path;
          } else {
            request.path += path;
          }
          const traitSearchParams = new URLSearchParams(search ?? "");
          Object.assign(query, Object.fromEntries(traitSearchParams));
        }
      }
      for (const [memberName, memberNs] of ns.structIterator()) {
        const memberTraits = memberNs.getMergedTraits() ?? {};
        const inputMemberValue = input[memberName];
        if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
          if (memberTraits.httpLabel) {
            if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) {
              throw new Error(`No value provided for input HTTP label: ${memberName}.`);
            }
          }
          continue;
        }
        if (memberTraits.httpPayload) {
          const isStreaming = memberNs.isStreaming();
          if (isStreaming) {
            const isEventStream = memberNs.isStructSchema();
            if (isEventStream) {
              if (input[memberName]) {
                payload = await this.serializeEventStream({
                  eventStream: input[memberName],
                  requestSchema: ns
                });
              }
            } else {
              payload = inputMemberValue;
            }
          } else {
            serializer.write(memberNs, inputMemberValue);
            payload = serializer.flush();
          }
        } else if (memberTraits.httpLabel) {
          serializer.write(memberNs, inputMemberValue);
          const replacement = serializer.flush();
          if (request.path.includes(`{${memberName}+}`)) {
            request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
          } else if (request.path.includes(`{${memberName}}`)) {
            request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
          }
        } else if (memberTraits.httpHeader) {
          serializer.write(memberNs, inputMemberValue);
          headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
        } else if (typeof memberTraits.httpPrefixHeaders === "string") {
          for (const [key, val] of Object.entries(inputMemberValue)) {
            const amalgam = memberTraits.httpPrefixHeaders + key;
            serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
            headers[amalgam.toLowerCase()] = serializer.flush();
          }
        } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
          this.serializeQuery(memberNs, inputMemberValue, query);
        } else {
          hasNonHttpBindingMember = true;
          payloadMemberNames.push(memberName);
          payloadMemberSchemas.push(memberNs);
        }
      }
      if (hasNonHttpBindingMember && input) {
        const [namespace, name] = (ns.getName(true) ?? "#Unknown").split("#");
        const requiredMembers = ns.getSchema()[6];
        const payloadSchema = [
          3,
          namespace,
          name,
          ns.getMergedTraits(),
          payloadMemberNames,
          payloadMemberSchemas,
          undefined
        ];
        if (requiredMembers) {
          payloadSchema[6] = requiredMembers;
        } else {
          payloadSchema.pop();
        }
        serializer.write(payloadSchema, input);
        payload = serializer.flush();
      }
      request.headers = headers;
      request.query = query;
      request.body = payload;
      return request;
    }
    serializeQuery(ns, data, query) {
      const serializer = this.serializer;
      const traits = ns.getMergedTraits();
      if (traits.httpQueryParams) {
        for (const [key, val] of Object.entries(data)) {
          if (!(key in query)) {
            const valueSchema = ns.getValueSchema();
            Object.assign(valueSchema.getMergedTraits(), {
              ...traits,
              httpQuery: key,
              httpQueryParams: undefined
            });
            this.serializeQuery(valueSchema, val, query);
          }
        }
        return;
      }
      if (ns.isListSchema()) {
        const sparse = !!ns.getMergedTraits().sparse;
        const buffer = [];
        for (const item of data) {
          serializer.write([ns.getValueSchema(), traits], item);
          const serializable = serializer.flush();
          if (sparse || serializable !== undefined) {
            buffer.push(serializable);
          }
        }
        query[traits.httpQuery] = buffer;
      } else {
        serializer.write([ns, traits], data);
        query[traits.httpQuery] = serializer.flush();
      }
    }
    async deserializeResponse(operationSchema, context, response) {
      const deserializer = this.deserializer;
      const ns = schema.NormalizedSchema.of(operationSchema.output);
      const dataObject = {};
      if (response.statusCode >= 300) {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(15, bytes));
        }
        await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
      }
      for (const header in response.headers) {
        const value = response.headers[header];
        delete response.headers[header];
        response.headers[header.toLowerCase()] = value;
      }
      const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
      if (nonHttpBindingMembers.length) {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          const dataFromBody = await deserializer.read(ns, bytes);
          for (const member of nonHttpBindingMembers) {
            if (dataFromBody[member] != null) {
              dataObject[member] = dataFromBody[member];
            }
          }
        }
      } else if (nonHttpBindingMembers.discardResponseBody) {
        await collectBody(response.body, context);
      }
      dataObject.$metadata = this.deserializeMetadata(response);
      return dataObject;
    }
    async deserializeHttpMessage(schema$1, context, response, arg4, arg5) {
      let dataObject;
      if (arg4 instanceof Set) {
        dataObject = arg5;
      } else {
        dataObject = arg4;
      }
      let discardResponseBody = true;
      const deserializer = this.deserializer;
      const ns = schema.NormalizedSchema.of(schema$1);
      const nonHttpBindingMembers = [];
      for (const [memberName, memberSchema] of ns.structIterator()) {
        const memberTraits = memberSchema.getMemberTraits();
        if (memberTraits.httpPayload) {
          discardResponseBody = false;
          const isStreaming = memberSchema.isStreaming();
          if (isStreaming) {
            const isEventStream = memberSchema.isStructSchema();
            if (isEventStream) {
              dataObject[memberName] = await this.deserializeEventStream({
                response,
                responseSchema: ns
              });
            } else {
              dataObject[memberName] = utilStream.sdkStreamMixin(response.body);
            }
          } else if (response.body) {
            const bytes = await collectBody(response.body, context);
            if (bytes.byteLength > 0) {
              dataObject[memberName] = await deserializer.read(memberSchema, bytes);
            }
          }
        } else if (memberTraits.httpHeader) {
          const key = String(memberTraits.httpHeader).toLowerCase();
          const value = response.headers[key];
          if (value != null) {
            if (memberSchema.isListSchema()) {
              const headerListValueSchema = memberSchema.getValueSchema();
              headerListValueSchema.getMergedTraits().httpHeader = key;
              let sections;
              if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                sections = serde.splitEvery(value, ",", 2);
              } else {
                sections = serde.splitHeader(value);
              }
              const list = [];
              for (const section of sections) {
                list.push(await deserializer.read(headerListValueSchema, section.trim()));
              }
              dataObject[memberName] = list;
            } else {
              dataObject[memberName] = await deserializer.read(memberSchema, value);
            }
          }
        } else if (memberTraits.httpPrefixHeaders !== undefined) {
          dataObject[memberName] = {};
          for (const [header, value] of Object.entries(response.headers)) {
            if (header.startsWith(memberTraits.httpPrefixHeaders)) {
              const valueSchema = memberSchema.getValueSchema();
              valueSchema.getMergedTraits().httpHeader = header;
              dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
            }
          }
        } else if (memberTraits.httpResponseCode) {
          dataObject[memberName] = response.statusCode;
        } else {
          nonHttpBindingMembers.push(memberName);
        }
      }
      nonHttpBindingMembers.discardResponseBody = discardResponseBody;
      return nonHttpBindingMembers;
    }
  }

  class RpcProtocol extends HttpProtocol {
    async serializeRequest(operationSchema, _input, context) {
      const serializer = this.serializer;
      const query = {};
      const headers = {};
      const endpoint = await context.endpoint();
      const ns = schema.NormalizedSchema.of(operationSchema?.input);
      const schema$1 = ns.getSchema();
      let payload;
      const input = _input && typeof _input === "object" ? _input : {};
      const request = new protocolHttp.HttpRequest({
        protocol: "",
        hostname: "",
        port: undefined,
        path: "/",
        fragment: undefined,
        query,
        headers,
        body: undefined
      });
      if (endpoint) {
        this.updateServiceEndpoint(request, endpoint);
        this.setHostPrefix(request, operationSchema, input);
      }
      if (input) {
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
          if (input[eventStreamMember]) {
            const initialRequest = {};
            for (const [memberName, memberSchema] of ns.structIterator()) {
              if (memberName !== eventStreamMember && input[memberName]) {
                serializer.write(memberSchema, input[memberName]);
                initialRequest[memberName] = serializer.flush();
              }
            }
            payload = await this.serializeEventStream({
              eventStream: input[eventStreamMember],
              requestSchema: ns,
              initialRequest
            });
          }
        } else {
          serializer.write(schema$1, input);
          payload = serializer.flush();
        }
      }
      request.headers = Object.assign(request.headers, headers);
      request.query = query;
      request.body = payload;
      request.method = "POST";
      return request;
    }
    async deserializeResponse(operationSchema, context, response) {
      const deserializer = this.deserializer;
      const ns = schema.NormalizedSchema.of(operationSchema.output);
      const dataObject = {};
      if (response.statusCode >= 300) {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(15, bytes));
        }
        await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
      }
      for (const header in response.headers) {
        const value = response.headers[header];
        delete response.headers[header];
        response.headers[header.toLowerCase()] = value;
      }
      const eventStreamMember = ns.getEventStreamMember();
      if (eventStreamMember) {
        dataObject[eventStreamMember] = await this.deserializeEventStream({
          response,
          responseSchema: ns,
          initialResponseContainer: dataObject
        });
      } else {
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes));
        }
      }
      dataObject.$metadata = this.deserializeMetadata(response);
      return dataObject;
    }
  }
  var resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
      const labelValue = labelValueProvider();
      if (labelValue == null || labelValue.length <= 0) {
        throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
      }
      resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
    } else {
      throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath2;
  };
  function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
  }

  class RequestBuilder {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(input, context) {
      this.input = input;
      this.context = context;
    }
    async build() {
      const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
      this.path = basePath;
      for (const resolvePath of this.resolvePathStack) {
        resolvePath(this.path);
      }
      return new protocolHttp.HttpRequest({
        protocol,
        hostname: this.hostname || hostname,
        port,
        method: this.method,
        path: this.path,
        query: this.query,
        body: this.body,
        headers: this.headers
      });
    }
    hn(hostname) {
      this.hostname = hostname;
      return this;
    }
    bp(uriLabel) {
      this.resolvePathStack.push((basePath) => {
        this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
      });
      return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
      this.resolvePathStack.push((path) => {
        this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
      });
      return this;
    }
    h(headers) {
      this.headers = headers;
      return this;
    }
    q(query) {
      this.query = query;
      return this;
    }
    b(body) {
      this.body = body;
      return this;
    }
    m(method) {
      this.method = method;
      return this;
    }
  }
  function determineTimestampFormat(ns, settings) {
    if (settings.timestampFormat.useTrait) {
      if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
        return ns.getSchema();
      }
    }
    const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
    const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : undefined : undefined;
    return bindingFormat ?? settings.timestampFormat.default;
  }

  class FromStringShapeDeserializer extends SerdeContext {
    settings;
    constructor(settings) {
      super();
      this.settings = settings;
    }
    read(_schema, data) {
      const ns = schema.NormalizedSchema.of(_schema);
      if (ns.isListSchema()) {
        return serde.splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
      }
      if (ns.isBlobSchema()) {
        return (this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(data);
      }
      if (ns.isTimestampSchema()) {
        const format = determineTimestampFormat(ns, this.settings);
        switch (format) {
          case 5:
            return serde._parseRfc3339DateTimeWithOffset(data);
          case 6:
            return serde._parseRfc7231DateTime(data);
          case 7:
            return serde._parseEpochTimestamp(data);
          default:
            console.warn("Missing timestamp format, parsing value with Date constructor:", data);
            return new Date(data);
        }
      }
      if (ns.isStringSchema()) {
        const mediaType = ns.getMergedTraits().mediaType;
        let intermediateValue = data;
        if (mediaType) {
          if (ns.getMergedTraits().httpHeader) {
            intermediateValue = this.base64ToUtf8(intermediateValue);
          }
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            intermediateValue = serde.LazyJsonString.from(intermediateValue);
          }
          return intermediateValue;
        }
      }
      if (ns.isNumericSchema()) {
        return Number(data);
      }
      if (ns.isBigIntegerSchema()) {
        return BigInt(data);
      }
      if (ns.isBigDecimalSchema()) {
        return new serde.NumericValue(data, "bigDecimal");
      }
      if (ns.isBooleanSchema()) {
        return String(data).toLowerCase() === "true";
      }
      return data;
    }
    base64ToUtf8(base64String) {
      return (this.serdeContext?.utf8Encoder ?? utilUtf8.toUtf8)((this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(base64String));
    }
  }

  class HttpInterceptingShapeDeserializer extends SerdeContext {
    codecDeserializer;
    stringDeserializer;
    constructor(codecDeserializer, codecSettings) {
      super();
      this.codecDeserializer = codecDeserializer;
      this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
    }
    setSerdeContext(serdeContext) {
      this.stringDeserializer.setSerdeContext(serdeContext);
      this.codecDeserializer.setSerdeContext(serdeContext);
      this.serdeContext = serdeContext;
    }
    read(schema$1, data) {
      const ns = schema.NormalizedSchema.of(schema$1);
      const traits = ns.getMergedTraits();
      const toString = this.serdeContext?.utf8Encoder ?? utilUtf8.toUtf8;
      if (traits.httpHeader || traits.httpResponseCode) {
        return this.stringDeserializer.read(ns, toString(data));
      }
      if (traits.httpPayload) {
        if (ns.isBlobSchema()) {
          const toBytes = this.serdeContext?.utf8Decoder ?? utilUtf8.fromUtf8;
          if (typeof data === "string") {
            return toBytes(data);
          }
          return data;
        } else if (ns.isStringSchema()) {
          if ("byteLength" in data) {
            return toString(data);
          }
          return data;
        }
      }
      return this.codecDeserializer.read(ns, data);
    }
  }

  class ToStringShapeSerializer extends SerdeContext {
    settings;
    stringBuffer = "";
    constructor(settings) {
      super();
      this.settings = settings;
    }
    write(schema$1, value) {
      const ns = schema.NormalizedSchema.of(schema$1);
      switch (typeof value) {
        case "object":
          if (value === null) {
            this.stringBuffer = "null";
            return;
          }
          if (ns.isTimestampSchema()) {
            if (!(value instanceof Date)) {
              throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
            }
            const format = determineTimestampFormat(ns, this.settings);
            switch (format) {
              case 5:
                this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                this.stringBuffer = serde.dateToUtcString(value);
                break;
              case 7:
                this.stringBuffer = String(value.getTime() / 1000);
                break;
              default:
                console.warn("Missing timestamp format, using epoch seconds", value);
                this.stringBuffer = String(value.getTime() / 1000);
            }
            return;
          }
          if (ns.isBlobSchema() && "byteLength" in value) {
            this.stringBuffer = (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(value);
            return;
          }
          if (ns.isListSchema() && Array.isArray(value)) {
            let buffer = "";
            for (const item of value) {
              this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
              const headerItem = this.flush();
              const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : serde.quoteHeader(headerItem);
              if (buffer !== "") {
                buffer += ", ";
              }
              buffer += serialized;
            }
            this.stringBuffer = buffer;
            return;
          }
          this.stringBuffer = JSON.stringify(value, null, 2);
          break;
        case "string":
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = value;
          if (mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = serde.LazyJsonString.from(intermediateValue);
            }
            if (ns.getMergedTraits().httpHeader) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(intermediateValue.toString());
              return;
            }
          }
          this.stringBuffer = value;
          break;
        default:
          if (ns.isIdempotencyToken()) {
            this.stringBuffer = serde.generateIdempotencyToken();
          } else {
            this.stringBuffer = String(value);
          }
      }
    }
    flush() {
      const buffer = this.stringBuffer;
      this.stringBuffer = "";
      return buffer;
    }
  }

  class HttpInterceptingShapeSerializer {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
      this.codecSerializer = codecSerializer;
      this.stringSerializer = stringSerializer;
    }
    setSerdeContext(serdeContext) {
      this.codecSerializer.setSerdeContext(serdeContext);
      this.stringSerializer.setSerdeContext(serdeContext);
    }
    write(schema$1, value) {
      const ns = schema.NormalizedSchema.of(schema$1);
      const traits = ns.getMergedTraits();
      if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
        this.stringSerializer.write(ns, value);
        this.buffer = this.stringSerializer.flush();
        return;
      }
      return this.codecSerializer.write(ns, value);
    }
    flush() {
      if (this.buffer !== undefined) {
        const buffer = this.buffer;
        this.buffer = undefined;
        return buffer;
      }
      return this.codecSerializer.flush();
    }
  }
  exports.FromStringShapeDeserializer = FromStringShapeDeserializer;
  exports.HttpBindingProtocol = HttpBindingProtocol;
  exports.HttpInterceptingShapeDeserializer = HttpInterceptingShapeDeserializer;
  exports.HttpInterceptingShapeSerializer = HttpInterceptingShapeSerializer;
  exports.HttpProtocol = HttpProtocol;
  exports.RequestBuilder = RequestBuilder;
  exports.RpcProtocol = RpcProtocol;
  exports.SerdeContext = SerdeContext;
  exports.ToStringShapeSerializer = ToStringShapeSerializer;
  exports.collectBody = collectBody;
  exports.determineTimestampFormat = determineTimestampFormat;
  exports.extendedEncodeURIComponent = extendedEncodeURIComponent;
  exports.requestBuilder = requestBuilder;
  exports.resolvedPath = resolvedPath;
});

// node_modules/.bun/@smithy+core@3.23.15/node_modules/@smithy/core/dist-cjs/index.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = new Map;
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return;
  };
}
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}

class DefaultIdentityProviderConfig {
  authSchemes = new Map;
  constructor(config) {
    for (const [key, value] of Object.entries(config)) {
      if (value !== undefined) {
        this.authSchemes.set(key, value);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
}

class HttpApiKeyAuthSigner {
  async sign(httpRequest, identity, signingProperties) {
    if (!signingProperties) {
      throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
    }
    if (!signingProperties.name) {
      throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
    }
    if (!signingProperties.in) {
      throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
    }
    if (!identity.apiKey) {
      throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
    }
    const clonedRequest = protocolHttp.HttpRequest.clone(httpRequest);
    if (signingProperties.in === types.HttpApiKeyAuthLocation.QUERY) {
      clonedRequest.query[signingProperties.name] = identity.apiKey;
    } else if (signingProperties.in === types.HttpApiKeyAuthLocation.HEADER) {
      clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
    } else {
      throw new Error("request can only be signed with `apiKey` locations `query` or `header`, " + "but found: `" + signingProperties.in + "`");
    }
    return clonedRequest;
  }
}

class HttpBearerAuthSigner {
  async sign(httpRequest, identity, signingProperties) {
    const clonedRequest = protocolHttp.HttpRequest.clone(httpRequest);
    if (!identity.token) {
      throw new Error("request could not be signed with `token` since the `token` is not defined");
    }
    clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
    return clonedRequest;
  }
}

class NoAuthSigner {
  async sign(httpRequest, identity, signingProperties) {
    return httpRequest;
  }
}
var types, protocolHttp, utilMiddleware, protocols, getSmithyContext = (context) => context[types.SMITHY_CONTEXT_KEY] || (context[types.SMITHY_CONTEXT_KEY] = {}), resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
  if (!authSchemePreference || authSchemePreference.length === 0) {
    return candidateAuthOptions;
  }
  const preferredAuthOptions = [];
  for (const preferredSchemeName of authSchemePreference) {
    for (const candidateAuthOption of candidateAuthOptions) {
      const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
      if (candidateAuthSchemeName === preferredSchemeName) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
  }
  for (const candidateAuthOption of candidateAuthOptions) {
    if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
      preferredAuthOptions.push(candidateAuthOption);
    }
  }
  return preferredAuthOptions;
}, httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
  const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
  const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
  const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
  const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
  const smithyContext = utilMiddleware.getSmithyContext(context);
  const failureReasons = [];
  for (const option of resolvedOptions) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join(`
`));
  }
  return next(args);
}, httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
  }
}), httpAuthSchemeMiddlewareOptions, getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeMiddlewareOptions);
  }
}), defaultErrorHandler = (signingProperties) => (error) => {
  throw error;
}, defaultSuccessHandler = (httpResponse, signingProperties) => {}, httpSigningMiddleware = (config) => (next, context) => async (args) => {
  if (!protocolHttp.HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = utilMiddleware.getSmithyContext(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
}, httpSigningMiddlewareOptions, getHttpSigningPlugin = (config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(), httpSigningMiddlewareOptions);
  }
}), normalizeProvider = (input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
  let command = new CommandCtor(input);
  command = withCommand(command) ?? command;
  return await client.send(command, ...args);
}, get = (fromObject, path) => {
  let cursor = fromObject;
  const pathComponents = path.split(".");
  for (const step of pathComponents) {
    if (!cursor || typeof cursor !== "object") {
      return;
    }
    cursor = cursor[step];
  }
  return cursor;
}, createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired(identity) {
  return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
}, EXPIRATION_MS = 300000, isIdentityExpired, doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined, memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
  if (provider === undefined) {
    return;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = undefined;
    }
    return resolved;
  };
  if (isExpired === undefined) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
}, $requestBuilder, $DefaultIdentityProviderConfig, $EXPIRATION_MS, $HttpApiKeyAuthSigner, $HttpBearerAuthSigner, $NoAuthSigner, $createIsIdentityExpiredFunction, $createPaginator, $doesIdentityRequireRefresh, $getHttpAuthSchemeEndpointRuleSetPlugin, $getHttpAuthSchemePlugin, $getHttpSigningPlugin, $getSmithyContext, $httpAuthSchemeEndpointRuleSetMiddlewareOptions, $httpAuthSchemeMiddleware, $httpAuthSchemeMiddlewareOptions, $httpSigningMiddleware, $httpSigningMiddlewareOptions, $isIdentityExpired, $memoizeIdentityProvider, $normalizeProvider, $setFeature;
var init_dist_cjs = __esm(() => {
  types = require_dist_cjs();
  protocolHttp = require_dist_cjs2();
  utilMiddleware = require_dist_cjs5();
  protocols = require_protocols();
  httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  };
  httpAuthSchemeMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "serializerMiddleware"
  };
  httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware"
  };
  isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
  $requestBuilder = protocols.requestBuilder;
  $DefaultIdentityProviderConfig = DefaultIdentityProviderConfig;
  $EXPIRATION_MS = EXPIRATION_MS;
  $HttpApiKeyAuthSigner = HttpApiKeyAuthSigner;
  $HttpBearerAuthSigner = HttpBearerAuthSigner;
  $NoAuthSigner = NoAuthSigner;
  $createIsIdentityExpiredFunction = createIsIdentityExpiredFunction;
  $createPaginator = createPaginator;
  $doesIdentityRequireRefresh = doesIdentityRequireRefresh;
  $getHttpAuthSchemeEndpointRuleSetPlugin = getHttpAuthSchemeEndpointRuleSetPlugin;
  $getHttpAuthSchemePlugin = getHttpAuthSchemePlugin;
  $getHttpSigningPlugin = getHttpSigningPlugin;
  $getSmithyContext = getSmithyContext;
  $httpAuthSchemeEndpointRuleSetMiddlewareOptions = httpAuthSchemeEndpointRuleSetMiddlewareOptions;
  $httpAuthSchemeMiddleware = httpAuthSchemeMiddleware;
  $httpAuthSchemeMiddlewareOptions = httpAuthSchemeMiddlewareOptions;
  $httpSigningMiddleware = httpSigningMiddleware;
  $httpSigningMiddlewareOptions = httpSigningMiddlewareOptions;
  $isIdentityExpired = isIdentityExpired;
  $memoizeIdentityProvider = memoizeIdentityProvider;
  $normalizeProvider = normalizeProvider;
  $setFeature = setFeature;
});
init_dist_cjs();

export {
  $setFeature as setFeature,
  $requestBuilder as requestBuilder,
  $normalizeProvider as normalizeProvider,
  $memoizeIdentityProvider as memoizeIdentityProvider,
  $isIdentityExpired as isIdentityExpired,
  $httpSigningMiddlewareOptions as httpSigningMiddlewareOptions,
  $httpSigningMiddleware as httpSigningMiddleware,
  $httpAuthSchemeMiddlewareOptions as httpAuthSchemeMiddlewareOptions,
  $httpAuthSchemeMiddleware as httpAuthSchemeMiddleware,
  $httpAuthSchemeEndpointRuleSetMiddlewareOptions as httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  $getSmithyContext as getSmithyContext,
  $getHttpSigningPlugin as getHttpSigningPlugin,
  $getHttpAuthSchemePlugin as getHttpAuthSchemePlugin,
  $getHttpAuthSchemeEndpointRuleSetPlugin as getHttpAuthSchemeEndpointRuleSetPlugin,
  $doesIdentityRequireRefresh as doesIdentityRequireRefresh,
  $createPaginator as createPaginator,
  $createIsIdentityExpiredFunction as createIsIdentityExpiredFunction,
  $NoAuthSigner as NoAuthSigner,
  $HttpBearerAuthSigner as HttpBearerAuthSigner,
  $HttpApiKeyAuthSigner as HttpApiKeyAuthSigner,
  $EXPIRATION_MS as EXPIRATION_MS,
  $DefaultIdentityProviderConfig as DefaultIdentityProviderConfig
};
export default {
  get setFeature() {
    return $setFeature;
  },
  get requestBuilder() {
    return $requestBuilder;
  },
  get normalizeProvider() {
    return $normalizeProvider;
  },
  get memoizeIdentityProvider() {
    return $memoizeIdentityProvider;
  },
  get isIdentityExpired() {
    return $isIdentityExpired;
  },
  get httpSigningMiddlewareOptions() {
    return $httpSigningMiddlewareOptions;
  },
  get httpSigningMiddleware() {
    return $httpSigningMiddleware;
  },
  get httpAuthSchemeMiddlewareOptions() {
    return $httpAuthSchemeMiddlewareOptions;
  },
  get httpAuthSchemeMiddleware() {
    return $httpAuthSchemeMiddleware;
  },
  get httpAuthSchemeEndpointRuleSetMiddlewareOptions() {
    return $httpAuthSchemeEndpointRuleSetMiddlewareOptions;
  },
  get getSmithyContext() {
    return $getSmithyContext;
  },
  get getHttpSigningPlugin() {
    return $getHttpSigningPlugin;
  },
  get getHttpAuthSchemePlugin() {
    return $getHttpAuthSchemePlugin;
  },
  get getHttpAuthSchemeEndpointRuleSetPlugin() {
    return $getHttpAuthSchemeEndpointRuleSetPlugin;
  },
  get doesIdentityRequireRefresh() {
    return $doesIdentityRequireRefresh;
  },
  get createPaginator() {
    return $createPaginator;
  },
  get createIsIdentityExpiredFunction() {
    return $createIsIdentityExpiredFunction;
  },
  get NoAuthSigner() {
    return $NoAuthSigner;
  },
  get HttpBearerAuthSigner() {
    return $HttpBearerAuthSigner;
  },
  get HttpApiKeyAuthSigner() {
    return $HttpApiKeyAuthSigner;
  },
  get EXPIRATION_MS() {
    return $EXPIRATION_MS;
  },
  get DefaultIdentityProviderConfig() {
    return $DefaultIdentityProviderConfig;
  }
};
