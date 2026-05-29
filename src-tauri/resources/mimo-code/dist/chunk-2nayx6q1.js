// @bun
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+is-array-buffer@4.2.2/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs = __commonJS((exports) => {
  var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
  exports.isArrayBuffer = isArrayBuffer;
});

// node_modules/.bun/@smithy+util-buffer-from@4.2.2/node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports) => {
  var isArrayBuffer = require_dist_cjs();
  var buffer = __require("buffer");
  var fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!isArrayBuffer.isArrayBuffer(input)) {
      throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer.Buffer.from(input, offset, length);
  };
  var fromString = (input, encoding) => {
    if (typeof input !== "string") {
      throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer.Buffer.from(input, encoding) : buffer.Buffer.from(input);
  };
  exports.fromArrayBuffer = fromArrayBuffer;
  exports.fromString = fromString;
});

// node_modules/.bun/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs3 = __commonJS((exports) => {
  var utilBufferFrom = require_dist_cjs2();
  var fromUtf8 = (input) => {
    const buf = utilBufferFrom.fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  };
  var toUint8Array = (data) => {
    if (typeof data === "string") {
      return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
  };
  var toUtf8 = (input) => {
    if (typeof input === "string") {
      return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
      throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return utilBufferFrom.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
  };
  exports.fromUtf8 = fromUtf8;
  exports.toUint8Array = toUint8Array;
  exports.toUtf8 = toUtf8;
});

export { require_dist_cjs, require_dist_cjs2 as require_dist_cjs1, require_dist_cjs3 as require_dist_cjs2 };
