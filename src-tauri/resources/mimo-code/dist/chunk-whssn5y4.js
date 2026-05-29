// @bun
import {
  require_semver
} from "./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/minipass@7.1.3/node_modules/minipass/dist/commonjs/index.js
var require_commonjs = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Minipass = exports.isWritable = exports.isReadable = exports.isStream = undefined;
  var proc = typeof process === "object" && process ? process : {
    stdout: null,
    stderr: null
  };
  var node_events_1 = __require("events");
  var node_stream_1 = __importDefault(__require("stream"));
  var node_string_decoder_1 = __require("string_decoder");
  var isStream = (s) => !!s && typeof s === "object" && (s instanceof Minipass || s instanceof node_stream_1.default || (0, exports.isReadable)(s) || (0, exports.isWritable)(s));
  exports.isStream = isStream;
  var isReadable = (s) => !!s && typeof s === "object" && s instanceof node_events_1.EventEmitter && typeof s.pipe === "function" && s.pipe !== node_stream_1.default.Writable.prototype.pipe;
  exports.isReadable = isReadable;
  var isWritable = (s) => !!s && typeof s === "object" && s instanceof node_events_1.EventEmitter && typeof s.write === "function" && typeof s.end === "function";
  exports.isWritable = isWritable;
  var EOF = Symbol("EOF");
  var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
  var EMITTED_END = Symbol("emittedEnd");
  var EMITTING_END = Symbol("emittingEnd");
  var EMITTED_ERROR = Symbol("emittedError");
  var CLOSED = Symbol("closed");
  var READ = Symbol("read");
  var FLUSH = Symbol("flush");
  var FLUSHCHUNK = Symbol("flushChunk");
  var ENCODING = Symbol("encoding");
  var DECODER = Symbol("decoder");
  var FLOWING = Symbol("flowing");
  var PAUSED = Symbol("paused");
  var RESUME = Symbol("resume");
  var BUFFER = Symbol("buffer");
  var PIPES = Symbol("pipes");
  var BUFFERLENGTH = Symbol("bufferLength");
  var BUFFERPUSH = Symbol("bufferPush");
  var BUFFERSHIFT = Symbol("bufferShift");
  var OBJECTMODE = Symbol("objectMode");
  var DESTROYED = Symbol("destroyed");
  var ERROR = Symbol("error");
  var EMITDATA = Symbol("emitData");
  var EMITEND = Symbol("emitEnd");
  var EMITEND2 = Symbol("emitEnd2");
  var ASYNC = Symbol("async");
  var ABORT = Symbol("abort");
  var ABORTED = Symbol("aborted");
  var SIGNAL = Symbol("signal");
  var DATALISTENERS = Symbol("dataListeners");
  var DISCARDED = Symbol("discarded");
  var defer = (fn) => Promise.resolve().then(fn);
  var nodefer = (fn) => fn();
  var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
  var isArrayBufferLike = (b) => b instanceof ArrayBuffer || !!b && typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
  var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);

  class Pipe {
    src;
    dest;
    opts;
    ondrain;
    constructor(src, dest, opts) {
      this.src = src;
      this.dest = dest;
      this.opts = opts;
      this.ondrain = () => src[RESUME]();
      this.dest.on("drain", this.ondrain);
    }
    unpipe() {
      this.dest.removeListener("drain", this.ondrain);
    }
    proxyErrors(_er) {}
    end() {
      this.unpipe();
      if (this.opts.end)
        this.dest.end();
    }
  }

  class PipeProxyErrors extends Pipe {
    unpipe() {
      this.src.removeListener("error", this.proxyErrors);
      super.unpipe();
    }
    constructor(src, dest, opts) {
      super(src, dest, opts);
      this.proxyErrors = (er) => this.dest.emit("error", er);
      src.on("error", this.proxyErrors);
    }
  }
  var isObjectModeOptions = (o) => !!o.objectMode;
  var isEncodingOptions = (o) => !o.objectMode && !!o.encoding && o.encoding !== "buffer";

  class Minipass extends node_events_1.EventEmitter {
    [FLOWING] = false;
    [PAUSED] = false;
    [PIPES] = [];
    [BUFFER] = [];
    [OBJECTMODE];
    [ENCODING];
    [ASYNC];
    [DECODER];
    [EOF] = false;
    [EMITTED_END] = false;
    [EMITTING_END] = false;
    [CLOSED] = false;
    [EMITTED_ERROR] = null;
    [BUFFERLENGTH] = 0;
    [DESTROYED] = false;
    [SIGNAL];
    [ABORTED] = false;
    [DATALISTENERS] = 0;
    [DISCARDED] = false;
    writable = true;
    readable = true;
    constructor(...args) {
      const options = args[0] || {};
      super();
      if (options.objectMode && typeof options.encoding === "string") {
        throw new TypeError("Encoding and objectMode may not be used together");
      }
      if (isObjectModeOptions(options)) {
        this[OBJECTMODE] = true;
        this[ENCODING] = null;
      } else if (isEncodingOptions(options)) {
        this[ENCODING] = options.encoding;
        this[OBJECTMODE] = false;
      } else {
        this[OBJECTMODE] = false;
        this[ENCODING] = null;
      }
      this[ASYNC] = !!options.async;
      this[DECODER] = this[ENCODING] ? new node_string_decoder_1.StringDecoder(this[ENCODING]) : null;
      if (options && options.debugExposeBuffer === true) {
        Object.defineProperty(this, "buffer", { get: () => this[BUFFER] });
      }
      if (options && options.debugExposePipes === true) {
        Object.defineProperty(this, "pipes", { get: () => this[PIPES] });
      }
      const { signal } = options;
      if (signal) {
        this[SIGNAL] = signal;
        if (signal.aborted) {
          this[ABORT]();
        } else {
          signal.addEventListener("abort", () => this[ABORT]());
        }
      }
    }
    get bufferLength() {
      return this[BUFFERLENGTH];
    }
    get encoding() {
      return this[ENCODING];
    }
    set encoding(_enc) {
      throw new Error("Encoding must be set at instantiation time");
    }
    setEncoding(_enc) {
      throw new Error("Encoding must be set at instantiation time");
    }
    get objectMode() {
      return this[OBJECTMODE];
    }
    set objectMode(_om) {
      throw new Error("objectMode must be set at instantiation time");
    }
    get ["async"]() {
      return this[ASYNC];
    }
    set ["async"](a) {
      this[ASYNC] = this[ASYNC] || !!a;
    }
    [ABORT]() {
      this[ABORTED] = true;
      this.emit("abort", this[SIGNAL]?.reason);
      this.destroy(this[SIGNAL]?.reason);
    }
    get aborted() {
      return this[ABORTED];
    }
    set aborted(_) {}
    write(chunk, encoding, cb) {
      if (this[ABORTED])
        return false;
      if (this[EOF])
        throw new Error("write after end");
      if (this[DESTROYED]) {
        this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" }));
        return true;
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = "utf8";
      }
      if (!encoding)
        encoding = "utf8";
      const fn = this[ASYNC] ? defer : nodefer;
      if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
        if (isArrayBufferView(chunk)) {
          chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
        } else if (isArrayBufferLike(chunk)) {
          chunk = Buffer.from(chunk);
        } else if (typeof chunk !== "string") {
          throw new Error("Non-contiguous data written to non-objectMode stream");
        }
      }
      if (this[OBJECTMODE]) {
        if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
          this[FLUSH](true);
        if (this[FLOWING])
          this.emit("data", chunk);
        else
          this[BUFFERPUSH](chunk);
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this[FLOWING];
      }
      if (!chunk.length) {
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this[FLOWING];
      }
      if (typeof chunk === "string" && !(encoding === this[ENCODING] && !this[DECODER]?.lastNeed)) {
        chunk = Buffer.from(chunk, encoding);
      }
      if (Buffer.isBuffer(chunk) && this[ENCODING]) {
        chunk = this[DECODER].write(chunk);
      }
      if (this[FLOWING] && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true);
      if (this[FLOWING])
        this.emit("data", chunk);
      else
        this[BUFFERPUSH](chunk);
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this[FLOWING];
    }
    read(n) {
      if (this[DESTROYED])
        return null;
      this[DISCARDED] = false;
      if (this[BUFFERLENGTH] === 0 || n === 0 || n && n > this[BUFFERLENGTH]) {
        this[MAYBE_EMIT_END]();
        return null;
      }
      if (this[OBJECTMODE])
        n = null;
      if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
        this[BUFFER] = [
          this[ENCODING] ? this[BUFFER].join("") : Buffer.concat(this[BUFFER], this[BUFFERLENGTH])
        ];
      }
      const ret = this[READ](n || null, this[BUFFER][0]);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [READ](n, chunk) {
      if (this[OBJECTMODE])
        this[BUFFERSHIFT]();
      else {
        const c = chunk;
        if (n === c.length || n === null)
          this[BUFFERSHIFT]();
        else if (typeof c === "string") {
          this[BUFFER][0] = c.slice(n);
          chunk = c.slice(0, n);
          this[BUFFERLENGTH] -= n;
        } else {
          this[BUFFER][0] = c.subarray(n);
          chunk = c.subarray(0, n);
          this[BUFFERLENGTH] -= n;
        }
      }
      this.emit("data", chunk);
      if (!this[BUFFER].length && !this[EOF])
        this.emit("drain");
      return chunk;
    }
    end(chunk, encoding, cb) {
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = undefined;
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = "utf8";
      }
      if (chunk !== undefined)
        this.write(chunk, encoding);
      if (cb)
        this.once("end", cb);
      this[EOF] = true;
      this.writable = false;
      if (this[FLOWING] || !this[PAUSED])
        this[MAYBE_EMIT_END]();
      return this;
    }
    [RESUME]() {
      if (this[DESTROYED])
        return;
      if (!this[DATALISTENERS] && !this[PIPES].length) {
        this[DISCARDED] = true;
      }
      this[PAUSED] = false;
      this[FLOWING] = true;
      this.emit("resume");
      if (this[BUFFER].length)
        this[FLUSH]();
      else if (this[EOF])
        this[MAYBE_EMIT_END]();
      else
        this.emit("drain");
    }
    resume() {
      return this[RESUME]();
    }
    pause() {
      this[FLOWING] = false;
      this[PAUSED] = true;
      this[DISCARDED] = false;
    }
    get destroyed() {
      return this[DESTROYED];
    }
    get flowing() {
      return this[FLOWING];
    }
    get paused() {
      return this[PAUSED];
    }
    [BUFFERPUSH](chunk) {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] += 1;
      else
        this[BUFFERLENGTH] += chunk.length;
      this[BUFFER].push(chunk);
    }
    [BUFFERSHIFT]() {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] -= 1;
      else
        this[BUFFERLENGTH] -= this[BUFFER][0].length;
      return this[BUFFER].shift();
    }
    [FLUSH](noDrain = false) {
      do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length);
      if (!noDrain && !this[BUFFER].length && !this[EOF])
        this.emit("drain");
    }
    [FLUSHCHUNK](chunk) {
      this.emit("data", chunk);
      return this[FLOWING];
    }
    pipe(dest, opts) {
      if (this[DESTROYED])
        return dest;
      this[DISCARDED] = false;
      const ended = this[EMITTED_END];
      opts = opts || {};
      if (dest === proc.stdout || dest === proc.stderr)
        opts.end = false;
      else
        opts.end = opts.end !== false;
      opts.proxyErrors = !!opts.proxyErrors;
      if (ended) {
        if (opts.end)
          dest.end();
      } else {
        this[PIPES].push(!opts.proxyErrors ? new Pipe(this, dest, opts) : new PipeProxyErrors(this, dest, opts));
        if (this[ASYNC])
          defer(() => this[RESUME]());
        else
          this[RESUME]();
      }
      return dest;
    }
    unpipe(dest) {
      const p = this[PIPES].find((p2) => p2.dest === dest);
      if (p) {
        if (this[PIPES].length === 1) {
          if (this[FLOWING] && this[DATALISTENERS] === 0) {
            this[FLOWING] = false;
          }
          this[PIPES] = [];
        } else
          this[PIPES].splice(this[PIPES].indexOf(p), 1);
        p.unpipe();
      }
    }
    addListener(ev, handler) {
      return this.on(ev, handler);
    }
    on(ev, handler) {
      const ret = super.on(ev, handler);
      if (ev === "data") {
        this[DISCARDED] = false;
        this[DATALISTENERS]++;
        if (!this[PIPES].length && !this[FLOWING]) {
          this[RESUME]();
        }
      } else if (ev === "readable" && this[BUFFERLENGTH] !== 0) {
        super.emit("readable");
      } else if (isEndish(ev) && this[EMITTED_END]) {
        super.emit(ev);
        this.removeAllListeners(ev);
      } else if (ev === "error" && this[EMITTED_ERROR]) {
        const h = handler;
        if (this[ASYNC])
          defer(() => h.call(this, this[EMITTED_ERROR]));
        else
          h.call(this, this[EMITTED_ERROR]);
      }
      return ret;
    }
    removeListener(ev, handler) {
      return this.off(ev, handler);
    }
    off(ev, handler) {
      const ret = super.off(ev, handler);
      if (ev === "data") {
        this[DATALISTENERS] = this.listeners("data").length;
        if (this[DATALISTENERS] === 0 && !this[DISCARDED] && !this[PIPES].length) {
          this[FLOWING] = false;
        }
      }
      return ret;
    }
    removeAllListeners(ev) {
      const ret = super.removeAllListeners(ev);
      if (ev === "data" || ev === undefined) {
        this[DATALISTENERS] = 0;
        if (!this[DISCARDED] && !this[PIPES].length) {
          this[FLOWING] = false;
        }
      }
      return ret;
    }
    get emittedEnd() {
      return this[EMITTED_END];
    }
    [MAYBE_EMIT_END]() {
      if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this[BUFFER].length === 0 && this[EOF]) {
        this[EMITTING_END] = true;
        this.emit("end");
        this.emit("prefinish");
        this.emit("finish");
        if (this[CLOSED])
          this.emit("close");
        this[EMITTING_END] = false;
      }
    }
    emit(ev, ...args) {
      const data = args[0];
      if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED]) {
        return false;
      } else if (ev === "data") {
        return !this[OBJECTMODE] && !data ? false : this[ASYNC] ? (defer(() => this[EMITDATA](data)), true) : this[EMITDATA](data);
      } else if (ev === "end") {
        return this[EMITEND]();
      } else if (ev === "close") {
        this[CLOSED] = true;
        if (!this[EMITTED_END] && !this[DESTROYED])
          return false;
        const ret2 = super.emit("close");
        this.removeAllListeners("close");
        return ret2;
      } else if (ev === "error") {
        this[EMITTED_ERROR] = data;
        super.emit(ERROR, data);
        const ret2 = !this[SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
        this[MAYBE_EMIT_END]();
        return ret2;
      } else if (ev === "resume") {
        const ret2 = super.emit("resume");
        this[MAYBE_EMIT_END]();
        return ret2;
      } else if (ev === "finish" || ev === "prefinish") {
        const ret2 = super.emit(ev);
        this.removeAllListeners(ev);
        return ret2;
      }
      const ret = super.emit(ev, ...args);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [EMITDATA](data) {
      for (const p of this[PIPES]) {
        if (p.dest.write(data) === false)
          this.pause();
      }
      const ret = this[DISCARDED] ? false : super.emit("data", data);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [EMITEND]() {
      if (this[EMITTED_END])
        return false;
      this[EMITTED_END] = true;
      this.readable = false;
      return this[ASYNC] ? (defer(() => this[EMITEND2]()), true) : this[EMITEND2]();
    }
    [EMITEND2]() {
      if (this[DECODER]) {
        const data = this[DECODER].end();
        if (data) {
          for (const p of this[PIPES]) {
            p.dest.write(data);
          }
          if (!this[DISCARDED])
            super.emit("data", data);
        }
      }
      for (const p of this[PIPES]) {
        p.end();
      }
      const ret = super.emit("end");
      this.removeAllListeners("end");
      return ret;
    }
    async collect() {
      const buf = Object.assign([], {
        dataLength: 0
      });
      if (!this[OBJECTMODE])
        buf.dataLength = 0;
      const p = this.promise();
      this.on("data", (c) => {
        buf.push(c);
        if (!this[OBJECTMODE])
          buf.dataLength += c.length;
      });
      await p;
      return buf;
    }
    async concat() {
      if (this[OBJECTMODE]) {
        throw new Error("cannot concat in objectMode");
      }
      const buf = await this.collect();
      return this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength);
    }
    async promise() {
      return new Promise((resolve, reject) => {
        this.on(DESTROYED, () => reject(new Error("stream destroyed")));
        this.on("error", (er) => reject(er));
        this.on("end", () => resolve());
      });
    }
    [Symbol.asyncIterator]() {
      this[DISCARDED] = false;
      let stopped = false;
      const stop = async () => {
        this.pause();
        stopped = true;
        return { value: undefined, done: true };
      };
      const next = () => {
        if (stopped)
          return stop();
        const res = this.read();
        if (res !== null)
          return Promise.resolve({ done: false, value: res });
        if (this[EOF])
          return stop();
        let resolve;
        let reject;
        const onerr = (er) => {
          this.off("data", ondata);
          this.off("end", onend);
          this.off(DESTROYED, ondestroy);
          stop();
          reject(er);
        };
        const ondata = (value) => {
          this.off("error", onerr);
          this.off("end", onend);
          this.off(DESTROYED, ondestroy);
          this.pause();
          resolve({ value, done: !!this[EOF] });
        };
        const onend = () => {
          this.off("error", onerr);
          this.off("data", ondata);
          this.off(DESTROYED, ondestroy);
          stop();
          resolve({ done: true, value: undefined });
        };
        const ondestroy = () => onerr(new Error("stream destroyed"));
        return new Promise((res2, rej) => {
          reject = rej;
          resolve = res2;
          this.once(DESTROYED, ondestroy);
          this.once("error", onerr);
          this.once("end", onend);
          this.once("data", ondata);
        });
      };
      return {
        next,
        throw: stop,
        return: stop,
        [Symbol.asyncIterator]() {
          return this;
        },
        [Symbol.asyncDispose]: async () => {}
      };
    }
    [Symbol.iterator]() {
      this[DISCARDED] = false;
      let stopped = false;
      const stop = () => {
        this.pause();
        this.off(ERROR, stop);
        this.off(DESTROYED, stop);
        this.off("end", stop);
        stopped = true;
        return { done: true, value: undefined };
      };
      const next = () => {
        if (stopped)
          return stop();
        const value = this.read();
        return value === null ? stop() : { done: false, value };
      };
      this.once("end", stop);
      this.once(ERROR, stop);
      this.once(DESTROYED, stop);
      return {
        next,
        throw: stop,
        return: stop,
        [Symbol.iterator]() {
          return this;
        },
        [Symbol.dispose]: () => {}
      };
    }
    destroy(er) {
      if (this[DESTROYED]) {
        if (er)
          this.emit("error", er);
        else
          this.emit(DESTROYED);
        return this;
      }
      this[DESTROYED] = true;
      this[DISCARDED] = true;
      this[BUFFER].length = 0;
      this[BUFFERLENGTH] = 0;
      const wc = this;
      if (typeof wc.close === "function" && !this[CLOSED])
        wc.close();
      if (er)
        this.emit("error", er);
      else
        this.emit(DESTROYED);
      return this;
    }
    static get isStream() {
      return exports.isStream;
    }
  }
  exports.Minipass = Minipass;
});

// node_modules/.bun/minipass-collect@2.0.1/node_modules/minipass-collect/index.js
var require_minipass_collect = __commonJS((exports, module) => {
  var { Minipass } = require_commonjs();
  var _data = Symbol("_data");
  var _length = Symbol("_length");

  class Collect extends Minipass {
    constructor(options) {
      super(options);
      this[_data] = [];
      this[_length] = 0;
    }
    write(chunk, encoding, cb) {
      if (typeof encoding === "function")
        cb = encoding, encoding = "utf8";
      if (!encoding)
        encoding = "utf8";
      const c = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding);
      this[_data].push(c);
      this[_length] += c.length;
      if (cb)
        cb();
      return true;
    }
    end(chunk, encoding, cb) {
      if (typeof chunk === "function")
        cb = chunk, chunk = null;
      if (typeof encoding === "function")
        cb = encoding, encoding = "utf8";
      if (chunk)
        this.write(chunk, encoding);
      const result = Buffer.concat(this[_data], this[_length]);
      super.write(result);
      return super.end(cb);
    }
  }
  module.exports = Collect;

  class CollectPassThrough extends Minipass {
    constructor(options) {
      super(options);
      this[_data] = [];
      this[_length] = 0;
    }
    write(chunk, encoding, cb) {
      if (typeof encoding === "function")
        cb = encoding, encoding = "utf8";
      if (!encoding)
        encoding = "utf8";
      const c = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding);
      this[_data].push(c);
      this[_length] += c.length;
      return super.write(chunk, encoding, cb);
    }
    end(chunk, encoding, cb) {
      if (typeof chunk === "function")
        cb = chunk, chunk = null;
      if (typeof encoding === "function")
        cb = encoding, encoding = "utf8";
      if (chunk)
        this.write(chunk, encoding);
      const result = Buffer.concat(this[_data], this[_length]);
      this.emit("collect", result);
      return super.end(cb);
    }
  }
  module.exports.PassThrough = CollectPassThrough;
});

// node_modules/.bun/minipass@3.3.6/node_modules/minipass/index.js
var require_minipass = __commonJS((exports, module) => {
  var proc = typeof process === "object" && process ? process : {
    stdout: null,
    stderr: null
  };
  var EE = __require("events");
  var Stream = __require("stream");
  var SD = __require("string_decoder").StringDecoder;
  var EOF = Symbol("EOF");
  var MAYBE_EMIT_END = Symbol("maybeEmitEnd");
  var EMITTED_END = Symbol("emittedEnd");
  var EMITTING_END = Symbol("emittingEnd");
  var EMITTED_ERROR = Symbol("emittedError");
  var CLOSED = Symbol("closed");
  var READ = Symbol("read");
  var FLUSH = Symbol("flush");
  var FLUSHCHUNK = Symbol("flushChunk");
  var ENCODING = Symbol("encoding");
  var DECODER = Symbol("decoder");
  var FLOWING = Symbol("flowing");
  var PAUSED = Symbol("paused");
  var RESUME = Symbol("resume");
  var BUFFERLENGTH = Symbol("bufferLength");
  var BUFFERPUSH = Symbol("bufferPush");
  var BUFFERSHIFT = Symbol("bufferShift");
  var OBJECTMODE = Symbol("objectMode");
  var DESTROYED = Symbol("destroyed");
  var EMITDATA = Symbol("emitData");
  var EMITEND = Symbol("emitEnd");
  var EMITEND2 = Symbol("emitEnd2");
  var ASYNC = Symbol("async");
  var defer = (fn) => Promise.resolve().then(fn);
  var doIter = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
  var ASYNCITERATOR = doIter && Symbol.asyncIterator || Symbol("asyncIterator not implemented");
  var ITERATOR = doIter && Symbol.iterator || Symbol("iterator not implemented");
  var isEndish = (ev) => ev === "end" || ev === "finish" || ev === "prefinish";
  var isArrayBuffer = (b) => b instanceof ArrayBuffer || typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
  var isArrayBufferView = (b) => !Buffer.isBuffer(b) && ArrayBuffer.isView(b);

  class Pipe {
    constructor(src, dest, opts) {
      this.src = src;
      this.dest = dest;
      this.opts = opts;
      this.ondrain = () => src[RESUME]();
      dest.on("drain", this.ondrain);
    }
    unpipe() {
      this.dest.removeListener("drain", this.ondrain);
    }
    proxyErrors() {}
    end() {
      this.unpipe();
      if (this.opts.end)
        this.dest.end();
    }
  }

  class PipeProxyErrors extends Pipe {
    unpipe() {
      this.src.removeListener("error", this.proxyErrors);
      super.unpipe();
    }
    constructor(src, dest, opts) {
      super(src, dest, opts);
      this.proxyErrors = (er) => dest.emit("error", er);
      src.on("error", this.proxyErrors);
    }
  }
  module.exports = class Minipass extends Stream {
    constructor(options) {
      super();
      this[FLOWING] = false;
      this[PAUSED] = false;
      this.pipes = [];
      this.buffer = [];
      this[OBJECTMODE] = options && options.objectMode || false;
      if (this[OBJECTMODE])
        this[ENCODING] = null;
      else
        this[ENCODING] = options && options.encoding || null;
      if (this[ENCODING] === "buffer")
        this[ENCODING] = null;
      this[ASYNC] = options && !!options.async || false;
      this[DECODER] = this[ENCODING] ? new SD(this[ENCODING]) : null;
      this[EOF] = false;
      this[EMITTED_END] = false;
      this[EMITTING_END] = false;
      this[CLOSED] = false;
      this[EMITTED_ERROR] = null;
      this.writable = true;
      this.readable = true;
      this[BUFFERLENGTH] = 0;
      this[DESTROYED] = false;
    }
    get bufferLength() {
      return this[BUFFERLENGTH];
    }
    get encoding() {
      return this[ENCODING];
    }
    set encoding(enc) {
      if (this[OBJECTMODE])
        throw new Error("cannot set encoding in objectMode");
      if (this[ENCODING] && enc !== this[ENCODING] && (this[DECODER] && this[DECODER].lastNeed || this[BUFFERLENGTH]))
        throw new Error("cannot change encoding");
      if (this[ENCODING] !== enc) {
        this[DECODER] = enc ? new SD(enc) : null;
        if (this.buffer.length)
          this.buffer = this.buffer.map((chunk) => this[DECODER].write(chunk));
      }
      this[ENCODING] = enc;
    }
    setEncoding(enc) {
      this.encoding = enc;
    }
    get objectMode() {
      return this[OBJECTMODE];
    }
    set objectMode(om) {
      this[OBJECTMODE] = this[OBJECTMODE] || !!om;
    }
    get ["async"]() {
      return this[ASYNC];
    }
    set ["async"](a) {
      this[ASYNC] = this[ASYNC] || !!a;
    }
    write(chunk, encoding, cb) {
      if (this[EOF])
        throw new Error("write after end");
      if (this[DESTROYED]) {
        this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" }));
        return true;
      }
      if (typeof encoding === "function")
        cb = encoding, encoding = "utf8";
      if (!encoding)
        encoding = "utf8";
      const fn = this[ASYNC] ? defer : (f) => f();
      if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
        if (isArrayBufferView(chunk))
          chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
        else if (isArrayBuffer(chunk))
          chunk = Buffer.from(chunk);
        else if (typeof chunk !== "string")
          this.objectMode = true;
      }
      if (this[OBJECTMODE]) {
        if (this.flowing && this[BUFFERLENGTH] !== 0)
          this[FLUSH](true);
        if (this.flowing)
          this.emit("data", chunk);
        else
          this[BUFFERPUSH](chunk);
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this.flowing;
      }
      if (!chunk.length) {
        if (this[BUFFERLENGTH] !== 0)
          this.emit("readable");
        if (cb)
          fn(cb);
        return this.flowing;
      }
      if (typeof chunk === "string" && !(encoding === this[ENCODING] && !this[DECODER].lastNeed)) {
        chunk = Buffer.from(chunk, encoding);
      }
      if (Buffer.isBuffer(chunk) && this[ENCODING])
        chunk = this[DECODER].write(chunk);
      if (this.flowing && this[BUFFERLENGTH] !== 0)
        this[FLUSH](true);
      if (this.flowing)
        this.emit("data", chunk);
      else
        this[BUFFERPUSH](chunk);
      if (this[BUFFERLENGTH] !== 0)
        this.emit("readable");
      if (cb)
        fn(cb);
      return this.flowing;
    }
    read(n) {
      if (this[DESTROYED])
        return null;
      if (this[BUFFERLENGTH] === 0 || n === 0 || n > this[BUFFERLENGTH]) {
        this[MAYBE_EMIT_END]();
        return null;
      }
      if (this[OBJECTMODE])
        n = null;
      if (this.buffer.length > 1 && !this[OBJECTMODE]) {
        if (this.encoding)
          this.buffer = [this.buffer.join("")];
        else
          this.buffer = [Buffer.concat(this.buffer, this[BUFFERLENGTH])];
      }
      const ret = this[READ](n || null, this.buffer[0]);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [READ](n, chunk) {
      if (n === chunk.length || n === null)
        this[BUFFERSHIFT]();
      else {
        this.buffer[0] = chunk.slice(n);
        chunk = chunk.slice(0, n);
        this[BUFFERLENGTH] -= n;
      }
      this.emit("data", chunk);
      if (!this.buffer.length && !this[EOF])
        this.emit("drain");
      return chunk;
    }
    end(chunk, encoding, cb) {
      if (typeof chunk === "function")
        cb = chunk, chunk = null;
      if (typeof encoding === "function")
        cb = encoding, encoding = "utf8";
      if (chunk)
        this.write(chunk, encoding);
      if (cb)
        this.once("end", cb);
      this[EOF] = true;
      this.writable = false;
      if (this.flowing || !this[PAUSED])
        this[MAYBE_EMIT_END]();
      return this;
    }
    [RESUME]() {
      if (this[DESTROYED])
        return;
      this[PAUSED] = false;
      this[FLOWING] = true;
      this.emit("resume");
      if (this.buffer.length)
        this[FLUSH]();
      else if (this[EOF])
        this[MAYBE_EMIT_END]();
      else
        this.emit("drain");
    }
    resume() {
      return this[RESUME]();
    }
    pause() {
      this[FLOWING] = false;
      this[PAUSED] = true;
    }
    get destroyed() {
      return this[DESTROYED];
    }
    get flowing() {
      return this[FLOWING];
    }
    get paused() {
      return this[PAUSED];
    }
    [BUFFERPUSH](chunk) {
      if (this[OBJECTMODE])
        this[BUFFERLENGTH] += 1;
      else
        this[BUFFERLENGTH] += chunk.length;
      this.buffer.push(chunk);
    }
    [BUFFERSHIFT]() {
      if (this.buffer.length) {
        if (this[OBJECTMODE])
          this[BUFFERLENGTH] -= 1;
        else
          this[BUFFERLENGTH] -= this.buffer[0].length;
      }
      return this.buffer.shift();
    }
    [FLUSH](noDrain) {
      do {} while (this[FLUSHCHUNK](this[BUFFERSHIFT]()));
      if (!noDrain && !this.buffer.length && !this[EOF])
        this.emit("drain");
    }
    [FLUSHCHUNK](chunk) {
      return chunk ? (this.emit("data", chunk), this.flowing) : false;
    }
    pipe(dest, opts) {
      if (this[DESTROYED])
        return;
      const ended = this[EMITTED_END];
      opts = opts || {};
      if (dest === proc.stdout || dest === proc.stderr)
        opts.end = false;
      else
        opts.end = opts.end !== false;
      opts.proxyErrors = !!opts.proxyErrors;
      if (ended) {
        if (opts.end)
          dest.end();
      } else {
        this.pipes.push(!opts.proxyErrors ? new Pipe(this, dest, opts) : new PipeProxyErrors(this, dest, opts));
        if (this[ASYNC])
          defer(() => this[RESUME]());
        else
          this[RESUME]();
      }
      return dest;
    }
    unpipe(dest) {
      const p = this.pipes.find((p2) => p2.dest === dest);
      if (p) {
        this.pipes.splice(this.pipes.indexOf(p), 1);
        p.unpipe();
      }
    }
    addListener(ev, fn) {
      return this.on(ev, fn);
    }
    on(ev, fn) {
      const ret = super.on(ev, fn);
      if (ev === "data" && !this.pipes.length && !this.flowing)
        this[RESUME]();
      else if (ev === "readable" && this[BUFFERLENGTH] !== 0)
        super.emit("readable");
      else if (isEndish(ev) && this[EMITTED_END]) {
        super.emit(ev);
        this.removeAllListeners(ev);
      } else if (ev === "error" && this[EMITTED_ERROR]) {
        if (this[ASYNC])
          defer(() => fn.call(this, this[EMITTED_ERROR]));
        else
          fn.call(this, this[EMITTED_ERROR]);
      }
      return ret;
    }
    get emittedEnd() {
      return this[EMITTED_END];
    }
    [MAYBE_EMIT_END]() {
      if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this.buffer.length === 0 && this[EOF]) {
        this[EMITTING_END] = true;
        this.emit("end");
        this.emit("prefinish");
        this.emit("finish");
        if (this[CLOSED])
          this.emit("close");
        this[EMITTING_END] = false;
      }
    }
    emit(ev, data, ...extra) {
      if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED])
        return;
      else if (ev === "data") {
        return !data ? false : this[ASYNC] ? defer(() => this[EMITDATA](data)) : this[EMITDATA](data);
      } else if (ev === "end") {
        return this[EMITEND]();
      } else if (ev === "close") {
        this[CLOSED] = true;
        if (!this[EMITTED_END] && !this[DESTROYED])
          return;
        const ret2 = super.emit("close");
        this.removeAllListeners("close");
        return ret2;
      } else if (ev === "error") {
        this[EMITTED_ERROR] = data;
        const ret2 = super.emit("error", data);
        this[MAYBE_EMIT_END]();
        return ret2;
      } else if (ev === "resume") {
        const ret2 = super.emit("resume");
        this[MAYBE_EMIT_END]();
        return ret2;
      } else if (ev === "finish" || ev === "prefinish") {
        const ret2 = super.emit(ev);
        this.removeAllListeners(ev);
        return ret2;
      }
      const ret = super.emit(ev, data, ...extra);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [EMITDATA](data) {
      for (const p of this.pipes) {
        if (p.dest.write(data) === false)
          this.pause();
      }
      const ret = super.emit("data", data);
      this[MAYBE_EMIT_END]();
      return ret;
    }
    [EMITEND]() {
      if (this[EMITTED_END])
        return;
      this[EMITTED_END] = true;
      this.readable = false;
      if (this[ASYNC])
        defer(() => this[EMITEND2]());
      else
        this[EMITEND2]();
    }
    [EMITEND2]() {
      if (this[DECODER]) {
        const data = this[DECODER].end();
        if (data) {
          for (const p of this.pipes) {
            p.dest.write(data);
          }
          super.emit("data", data);
        }
      }
      for (const p of this.pipes) {
        p.end();
      }
      const ret = super.emit("end");
      this.removeAllListeners("end");
      return ret;
    }
    collect() {
      const buf = [];
      if (!this[OBJECTMODE])
        buf.dataLength = 0;
      const p = this.promise();
      this.on("data", (c) => {
        buf.push(c);
        if (!this[OBJECTMODE])
          buf.dataLength += c.length;
      });
      return p.then(() => buf);
    }
    concat() {
      return this[OBJECTMODE] ? Promise.reject(new Error("cannot concat in objectMode")) : this.collect().then((buf) => this[OBJECTMODE] ? Promise.reject(new Error("cannot concat in objectMode")) : this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength));
    }
    promise() {
      return new Promise((resolve, reject) => {
        this.on(DESTROYED, () => reject(new Error("stream destroyed")));
        this.on("error", (er) => reject(er));
        this.on("end", () => resolve());
      });
    }
    [ASYNCITERATOR]() {
      const next = () => {
        const res = this.read();
        if (res !== null)
          return Promise.resolve({ done: false, value: res });
        if (this[EOF])
          return Promise.resolve({ done: true });
        let resolve = null;
        let reject = null;
        const onerr = (er) => {
          this.removeListener("data", ondata);
          this.removeListener("end", onend);
          reject(er);
        };
        const ondata = (value) => {
          this.removeListener("error", onerr);
          this.removeListener("end", onend);
          this.pause();
          resolve({ value, done: !!this[EOF] });
        };
        const onend = () => {
          this.removeListener("error", onerr);
          this.removeListener("data", ondata);
          resolve({ done: true });
        };
        const ondestroy = () => onerr(new Error("stream destroyed"));
        return new Promise((res2, rej) => {
          reject = rej;
          resolve = res2;
          this.once(DESTROYED, ondestroy);
          this.once("error", onerr);
          this.once("end", onend);
          this.once("data", ondata);
        });
      };
      return { next };
    }
    [ITERATOR]() {
      const next = () => {
        const value = this.read();
        const done = value === null;
        return { value, done };
      };
      return { next };
    }
    destroy(er) {
      if (this[DESTROYED]) {
        if (er)
          this.emit("error", er);
        else
          this.emit(DESTROYED);
        return this;
      }
      this[DESTROYED] = true;
      this.buffer.length = 0;
      this[BUFFERLENGTH] = 0;
      if (typeof this.close === "function" && !this[CLOSED])
        this.close();
      if (er)
        this.emit("error", er);
      else
        this.emit(DESTROYED);
      return this;
    }
    static isStream(s) {
      return !!s && (s instanceof Minipass || s instanceof Stream || s instanceof EE && (typeof s.pipe === "function" || typeof s.write === "function" && typeof s.end === "function"));
    }
  };
});

// node_modules/.bun/minipass-pipeline@1.2.4/node_modules/minipass-pipeline/index.js
var require_minipass_pipeline = __commonJS((exports, module) => {
  var Minipass = require_minipass();
  var EE = __require("events");
  var isStream = (s) => s && s instanceof EE && (typeof s.pipe === "function" || typeof s.write === "function" && typeof s.end === "function");
  var _head = Symbol("_head");
  var _tail = Symbol("_tail");
  var _linkStreams = Symbol("_linkStreams");
  var _setHead = Symbol("_setHead");
  var _setTail = Symbol("_setTail");
  var _onError = Symbol("_onError");
  var _onData = Symbol("_onData");
  var _onEnd = Symbol("_onEnd");
  var _onDrain = Symbol("_onDrain");
  var _streams = Symbol("_streams");

  class Pipeline extends Minipass {
    constructor(opts, ...streams) {
      if (isStream(opts)) {
        streams.unshift(opts);
        opts = {};
      }
      super(opts);
      this[_streams] = [];
      if (streams.length)
        this.push(...streams);
    }
    [_linkStreams](streams) {
      return streams.reduce((src, dest) => {
        src.on("error", (er) => dest.emit("error", er));
        src.pipe(dest);
        return dest;
      });
    }
    push(...streams) {
      this[_streams].push(...streams);
      if (this[_tail])
        streams.unshift(this[_tail]);
      const linkRet = this[_linkStreams](streams);
      this[_setTail](linkRet);
      if (!this[_head])
        this[_setHead](streams[0]);
    }
    unshift(...streams) {
      this[_streams].unshift(...streams);
      if (this[_head])
        streams.push(this[_head]);
      const linkRet = this[_linkStreams](streams);
      this[_setHead](streams[0]);
      if (!this[_tail])
        this[_setTail](linkRet);
    }
    destroy(er) {
      this[_streams].forEach((s) => typeof s.destroy === "function" && s.destroy());
      return super.destroy(er);
    }
    [_setTail](stream) {
      this[_tail] = stream;
      stream.on("error", (er) => this[_onError](stream, er));
      stream.on("data", (chunk) => this[_onData](stream, chunk));
      stream.on("end", () => this[_onEnd](stream));
      stream.on("finish", () => this[_onEnd](stream));
    }
    [_onError](stream, er) {
      if (stream === this[_tail])
        this.emit("error", er);
    }
    [_onData](stream, chunk) {
      if (stream === this[_tail])
        super.write(chunk);
    }
    [_onEnd](stream) {
      if (stream === this[_tail])
        super.end();
    }
    pause() {
      super.pause();
      return this[_tail] && this[_tail].pause && this[_tail].pause();
    }
    emit(ev, ...args) {
      if (ev === "resume" && this[_tail] && this[_tail].resume)
        this[_tail].resume();
      return super.emit(ev, ...args);
    }
    [_setHead](stream) {
      this[_head] = stream;
      stream.on("drain", () => this[_onDrain](stream));
    }
    [_onDrain](stream) {
      if (stream === this[_head])
        this.emit("drain");
    }
    write(chunk, enc, cb) {
      return this[_head].write(chunk, enc, cb) && (this.flowing || this.buffer.length === 0);
    }
    end(chunk, enc, cb) {
      this[_head].end(chunk, enc, cb);
      return this;
    }
  }
  module.exports = Pipeline;
});

// node_modules/.bun/ssri@13.0.1/node_modules/ssri/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var crypto = __require("crypto");
  var { Minipass } = require_commonjs();
  var SPEC_ALGORITHMS = ["sha512", "sha384", "sha256"];
  var DEFAULT_ALGORITHMS = ["sha512"];
  var NODE_HASHES = crypto.getHashes();
  var BASE64_REGEX = /^[a-z0-9+/]+(?:=?=?)$/i;
  var SRI_REGEX = /^([a-z0-9]+)-([^?]+)(\?[?\S*]*)?$/;
  var STRICT_SRI_REGEX = /^([a-z0-9]+)-([A-Za-z0-9+/=]{44,88})(\?[\x21-\x7E]*)?$/;
  var VCHAR_REGEX = /^[\x21-\x7E]+$/;
  var DEFAULT_PRIORITY = [
    "md5",
    "whirlpool",
    "sha1",
    "sha224",
    "sha256",
    "sha384",
    "sha512",
    "sha3",
    "sha3-256",
    "sha3-384",
    "sha3-512",
    "sha3_256",
    "sha3_384",
    "sha3_512"
  ].filter((algo) => NODE_HASHES.includes(algo));
  var getOptString = (options) => options?.length ? `?${options.join("?")}` : "";

  class IntegrityStream extends Minipass {
    #emittedIntegrity;
    #emittedSize;
    #emittedVerified;
    constructor(opts) {
      super();
      this.size = 0;
      this.opts = opts;
      this.#getOptions();
      if (opts?.algorithms) {
        this.algorithms = [...opts.algorithms];
      } else {
        this.algorithms = [...DEFAULT_ALGORITHMS];
      }
      if (this.algorithm !== null && !this.algorithms.includes(this.algorithm)) {
        this.algorithms.push(this.algorithm);
      }
      this.hashes = this.algorithms.map(crypto.createHash);
    }
    #getOptions() {
      this.sri = this.opts?.integrity ? parse(this.opts?.integrity, this.opts) : null;
      this.expectedSize = this.opts?.size;
      if (!this.sri) {
        this.algorithm = null;
      } else if (this.sri.isHash) {
        this.goodSri = true;
        this.algorithm = this.sri.algorithm;
      } else {
        this.goodSri = !this.sri.isEmpty();
        this.algorithm = this.sri.pickAlgorithm(this.opts);
      }
      this.digests = this.goodSri ? this.sri[this.algorithm] : null;
      this.optString = getOptString(this.opts?.options);
    }
    on(ev, handler) {
      if (ev === "size" && this.#emittedSize) {
        return handler(this.#emittedSize);
      }
      if (ev === "integrity" && this.#emittedIntegrity) {
        return handler(this.#emittedIntegrity);
      }
      if (ev === "verified" && this.#emittedVerified) {
        return handler(this.#emittedVerified);
      }
      return super.on(ev, handler);
    }
    emit(ev, data) {
      if (ev === "end") {
        this.#onEnd();
      }
      return super.emit(ev, data);
    }
    write(data) {
      this.size += data.length;
      this.hashes.forEach((h) => h.update(data));
      return super.write(data);
    }
    #onEnd() {
      if (!this.goodSri) {
        this.#getOptions();
      }
      const newSri = parse(this.hashes.map((h, i) => {
        return `${this.algorithms[i]}-${h.digest("base64")}${this.optString}`;
      }).join(" "), this.opts);
      const match = this.goodSri && newSri.match(this.sri, this.opts);
      if (typeof this.expectedSize === "number" && this.size !== this.expectedSize) {
        const err = new Error(`stream size mismatch when checking ${this.sri}.
  Wanted: ${this.expectedSize}
  Found: ${this.size}`);
        err.code = "EBADSIZE";
        err.found = this.size;
        err.expected = this.expectedSize;
        err.sri = this.sri;
        this.emit("error", err);
      } else if (this.sri && !match) {
        const err = new Error(`${this.sri} integrity checksum failed when using ${this.algorithm}: wanted ${this.digests} but got ${newSri}. (${this.size} bytes)`);
        err.code = "EINTEGRITY";
        err.found = newSri;
        err.expected = this.digests;
        err.algorithm = this.algorithm;
        err.sri = this.sri;
        this.emit("error", err);
      } else {
        this.#emittedSize = this.size;
        this.emit("size", this.size);
        this.#emittedIntegrity = newSri;
        this.emit("integrity", newSri);
        if (match) {
          this.#emittedVerified = match;
          this.emit("verified", match);
        }
      }
    }
  }

  class Hash {
    get isHash() {
      return true;
    }
    constructor(hash, opts) {
      const strict = opts?.strict;
      this.source = hash.trim();
      this.digest = "";
      this.algorithm = "";
      this.options = [];
      const match = this.source.match(strict ? STRICT_SRI_REGEX : SRI_REGEX);
      if (!match) {
        return;
      }
      if (strict && !SPEC_ALGORITHMS.includes(match[1])) {
        return;
      }
      if (!NODE_HASHES.includes(match[1])) {
        return;
      }
      this.algorithm = match[1];
      this.digest = match[2];
      const rawOpts = match[3];
      if (rawOpts) {
        this.options = rawOpts.slice(1).split("?");
      }
    }
    hexDigest() {
      return this.digest && Buffer.from(this.digest, "base64").toString("hex");
    }
    toJSON() {
      return this.toString();
    }
    match(integrity, opts) {
      const other = parse(integrity, opts);
      if (!other) {
        return false;
      }
      if (other.isIntegrity) {
        const algo = other.pickAlgorithm(opts, [this.algorithm]);
        if (!algo) {
          return false;
        }
        const foundHash = other[algo].find((hash) => hash.digest === this.digest);
        if (foundHash) {
          return foundHash;
        }
        return false;
      }
      return other.digest === this.digest ? other : false;
    }
    toString(opts) {
      if (opts?.strict) {
        if (!(SPEC_ALGORITHMS.includes(this.algorithm) && this.digest.match(BASE64_REGEX) && this.options.every((opt) => opt.match(VCHAR_REGEX)))) {
          return "";
        }
      }
      return `${this.algorithm}-${this.digest}${getOptString(this.options)}`;
    }
  }
  function integrityHashToString(toString, sep, opts, hashes) {
    const toStringIsNotEmpty = toString !== "";
    let shouldAddFirstSep = false;
    let complement = "";
    const lastIndex = hashes.length - 1;
    for (let i = 0;i < lastIndex; i++) {
      const hashString = Hash.prototype.toString.call(hashes[i], opts);
      if (hashString) {
        shouldAddFirstSep = true;
        complement += hashString;
        complement += sep;
      }
    }
    const finalHashString = Hash.prototype.toString.call(hashes[lastIndex], opts);
    if (finalHashString) {
      shouldAddFirstSep = true;
      complement += finalHashString;
    }
    if (toStringIsNotEmpty && shouldAddFirstSep) {
      return toString + sep + complement;
    }
    return toString + complement;
  }

  class Integrity {
    get isIntegrity() {
      return true;
    }
    toJSON() {
      return this.toString();
    }
    isEmpty() {
      return Object.keys(this).length === 0;
    }
    toString(opts) {
      let sep = opts?.sep || " ";
      let toString = "";
      if (opts?.strict) {
        sep = sep.replace(/\S+/g, " ");
        for (const hash of SPEC_ALGORITHMS) {
          if (this[hash]) {
            toString = integrityHashToString(toString, sep, opts, this[hash]);
          }
        }
      } else {
        for (const hash of Object.keys(this)) {
          toString = integrityHashToString(toString, sep, opts, this[hash]);
        }
      }
      return toString;
    }
    concat(integrity, opts) {
      const other = typeof integrity === "string" ? integrity : stringify(integrity, opts);
      return parse(`${this.toString(opts)} ${other}`, opts);
    }
    hexDigest() {
      return parse(this, { single: true }).hexDigest();
    }
    merge(integrity, opts) {
      const other = parse(integrity, opts);
      for (const algo in other) {
        if (this[algo]) {
          if (!this[algo].find((hash) => other[algo].find((otherhash) => hash.digest === otherhash.digest))) {
            throw new Error("hashes do not match, cannot update integrity");
          }
        } else {
          this[algo] = other[algo];
        }
      }
    }
    match(integrity, opts) {
      const other = parse(integrity, opts);
      if (!other) {
        return false;
      }
      const algo = other.pickAlgorithm(opts, Object.keys(this));
      return !!algo && this[algo].find((hash) => other[algo].find((otherhash) => hash.digest === otherhash.digest)) || false;
    }
    pickAlgorithm(opts, hashes) {
      const pickAlgorithm = opts?.pickAlgorithm || getPrioritizedHash;
      let keys = Object.keys(this);
      if (hashes?.length) {
        keys = keys.filter((k) => hashes.includes(k));
      }
      if (keys.length) {
        return keys.reduce((acc, algo) => pickAlgorithm(acc, algo) || acc);
      }
      return null;
    }
  }
  exports.parse = parse;
  function parse(sri, opts) {
    if (!sri) {
      return null;
    }
    if (typeof sri === "string") {
      return _parse(sri, opts);
    } else if (sri.algorithm && sri.digest) {
      const fullSri = new Integrity;
      fullSri[sri.algorithm] = [sri];
      return _parse(stringify(fullSri, opts), opts);
    } else {
      return _parse(stringify(sri, opts), opts);
    }
  }
  function _parse(integrity, opts) {
    if (opts?.single) {
      return new Hash(integrity, opts);
    }
    const hashes = integrity.trim().split(/\s+/).reduce((acc, string) => {
      const hash = new Hash(string, opts);
      if (hash.algorithm && hash.digest) {
        const algo = hash.algorithm;
        if (!Object.keys(acc).includes(algo)) {
          acc[algo] = [];
        }
        acc[algo].push(hash);
      }
      return acc;
    }, new Integrity);
    return hashes.isEmpty() ? null : hashes;
  }
  exports.stringify = stringify;
  function stringify(obj, opts) {
    if (obj.algorithm && obj.digest) {
      return Hash.prototype.toString.call(obj, opts);
    } else if (typeof obj === "string") {
      return stringify(parse(obj, opts), opts);
    } else {
      return Integrity.prototype.toString.call(obj, opts);
    }
  }
  exports.fromHex = fromHex;
  function fromHex(hexDigest, algorithm, opts) {
    const optString = getOptString(opts?.options);
    return parse(`${algorithm}-${Buffer.from(hexDigest, "hex").toString("base64")}${optString}`, opts);
  }
  exports.fromData = fromData;
  function fromData(data, opts) {
    const algorithms = opts?.algorithms || [...DEFAULT_ALGORITHMS];
    const optString = getOptString(opts?.options);
    return algorithms.reduce((acc, algo) => {
      const digest = crypto.createHash(algo).update(data).digest("base64");
      const hash = new Hash(`${algo}-${digest}${optString}`, opts);
      if (hash.algorithm && hash.digest) {
        const hashAlgo = hash.algorithm;
        if (!acc[hashAlgo]) {
          acc[hashAlgo] = [];
        }
        acc[hashAlgo].push(hash);
      }
      return acc;
    }, new Integrity);
  }
  exports.fromStream = fromStream;
  function fromStream(stream, opts) {
    const istream = integrityStream(opts);
    return new Promise((resolve, reject) => {
      stream.pipe(istream);
      stream.on("error", reject);
      istream.on("error", reject);
      let sri;
      istream.on("integrity", (s) => {
        sri = s;
      });
      istream.on("end", () => resolve(sri));
      istream.resume();
    });
  }
  exports.checkData = checkData;
  function checkData(data, sri, opts) {
    sri = parse(sri, opts);
    if (!sri || !Object.keys(sri).length) {
      if (opts?.error) {
        throw Object.assign(new Error("No valid integrity hashes to check against"), {
          code: "EINTEGRITY"
        });
      } else {
        return false;
      }
    }
    const algorithm = sri.pickAlgorithm(opts);
    const digest = crypto.createHash(algorithm).update(data).digest("base64");
    const newSri = parse({ algorithm, digest });
    const match = newSri.match(sri, opts);
    opts = opts || {};
    if (match || !opts.error) {
      return match;
    } else if (typeof opts.size === "number" && data.length !== opts.size) {
      const err = new Error(`data size mismatch when checking ${sri}.
  Wanted: ${opts.size}
  Found: ${data.length}`);
      err.code = "EBADSIZE";
      err.found = data.length;
      err.expected = opts.size;
      err.sri = sri;
      throw err;
    } else {
      const err = new Error(`Integrity checksum failed when using ${algorithm}: Wanted ${sri}, but got ${newSri}. (${data.length} bytes)`);
      err.code = "EINTEGRITY";
      err.found = newSri;
      err.expected = sri;
      err.algorithm = algorithm;
      err.sri = sri;
      throw err;
    }
  }
  exports.checkStream = checkStream;
  function checkStream(stream, sri, opts) {
    opts = opts || Object.create(null);
    opts.integrity = sri;
    sri = parse(sri, opts);
    if (!sri || !Object.keys(sri).length) {
      return Promise.reject(Object.assign(new Error("No valid integrity hashes to check against"), {
        code: "EINTEGRITY"
      }));
    }
    const checker = integrityStream(opts);
    return new Promise((resolve, reject) => {
      stream.pipe(checker);
      stream.on("error", reject);
      checker.on("error", reject);
      let verified;
      checker.on("verified", (s) => {
        verified = s;
      });
      checker.on("end", () => resolve(verified));
      checker.resume();
    });
  }
  exports.integrityStream = integrityStream;
  function integrityStream(opts = Object.create(null)) {
    return new IntegrityStream(opts);
  }
  exports.create = createIntegrity;
  function createIntegrity(opts) {
    const algorithms = opts?.algorithms || [...DEFAULT_ALGORITHMS];
    const optString = getOptString(opts?.options);
    const hashes = algorithms.map(crypto.createHash);
    return {
      update: function(chunk, enc) {
        hashes.forEach((h) => h.update(chunk, enc));
        return this;
      },
      digest: function() {
        const integrity = algorithms.reduce((acc, algo) => {
          const digest = hashes.shift().digest("base64");
          const hash = new Hash(`${algo}-${digest}${optString}`, opts);
          if (!acc[hash.algorithm]) {
            acc[hash.algorithm] = [];
          }
          acc[hash.algorithm].push(hash);
          return acc;
        }, new Integrity);
        return integrity;
      }
    };
  }
  function getPrioritizedHash(algo1, algo2) {
    return DEFAULT_PRIORITY.indexOf(algo1.toLowerCase()) >= DEFAULT_PRIORITY.indexOf(algo2.toLowerCase()) ? algo1 : algo2;
  }
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/common/get-options.js
var require_get_options = __commonJS((exports, module) => {
  var getOptions = (input, { copy, wrap }) => {
    const result = {};
    if (input && typeof input === "object") {
      for (const prop of copy) {
        if (input[prop] !== undefined) {
          result[prop] = input[prop];
        }
      }
    } else {
      result[wrap] = input;
    }
    return result;
  };
  module.exports = getOptions;
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/common/node.js
var require_node = __commonJS((exports, module) => {
  var semver = require_semver();
  var satisfies = (range) => {
    return semver.satisfies(process.version, range, { includePrerelease: true });
  };
  module.exports = {
    satisfies
  };
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/cp/errors.js
var require_errors = __commonJS((exports, module) => {
  var { inspect } = __require("util");

  class SystemError {
    constructor(code, prefix, context) {
      let message = `${prefix}: ${context.syscall} returned ` + `${context.code} (${context.message})`;
      if (context.path !== undefined) {
        message += ` ${context.path}`;
      }
      if (context.dest !== undefined) {
        message += ` => ${context.dest}`;
      }
      this.code = code;
      Object.defineProperties(this, {
        name: {
          value: "SystemError",
          enumerable: false,
          writable: true,
          configurable: true
        },
        message: {
          value: message,
          enumerable: false,
          writable: true,
          configurable: true
        },
        info: {
          value: context,
          enumerable: true,
          configurable: true,
          writable: false
        },
        errno: {
          get() {
            return context.errno;
          },
          set(value) {
            context.errno = value;
          },
          enumerable: true,
          configurable: true
        },
        syscall: {
          get() {
            return context.syscall;
          },
          set(value) {
            context.syscall = value;
          },
          enumerable: true,
          configurable: true
        }
      });
      if (context.path !== undefined) {
        Object.defineProperty(this, "path", {
          get() {
            return context.path;
          },
          set(value) {
            context.path = value;
          },
          enumerable: true,
          configurable: true
        });
      }
      if (context.dest !== undefined) {
        Object.defineProperty(this, "dest", {
          get() {
            return context.dest;
          },
          set(value) {
            context.dest = value;
          },
          enumerable: true,
          configurable: true
        });
      }
    }
    toString() {
      return `${this.name} [${this.code}]: ${this.message}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")](_recurseTimes, ctx) {
      return inspect(this, {
        ...ctx,
        getters: true,
        customInspect: false
      });
    }
  }
  function E(code, message) {
    exports[code] = class NodeError extends SystemError {
      constructor(ctx) {
        super(code, message, ctx);
      }
    };
  }
  E("ERR_FS_CP_DIR_TO_NON_DIR", "Cannot overwrite directory with non-directory");
  E("ERR_FS_CP_EEXIST", "Target already exists");
  E("ERR_FS_CP_EINVAL", "Invalid src or dest");
  E("ERR_FS_CP_FIFO_PIPE", "Cannot copy a FIFO pipe");
  E("ERR_FS_CP_NON_DIR_TO_DIR", "Cannot overwrite non-directory with directory");
  E("ERR_FS_CP_SOCKET", "Cannot copy a socket file");
  E("ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY", "Cannot overwrite symlink in subdirectory of self");
  E("ERR_FS_CP_UNKNOWN", "Cannot copy an unknown file type");
  E("ERR_FS_EISDIR", "Path is a directory");
  exports.ERR_INVALID_ARG_TYPE = class ERR_INVALID_ARG_TYPE extends Error {
    constructor(name, expected, actual) {
      super();
      this.code = "ERR_INVALID_ARG_TYPE";
      this.message = `The ${name} argument must be ${expected}. Received ${typeof actual}`;
    }
  };
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/cp/polyfill.js
var require_polyfill = __commonJS((exports, module) => {
  var {
    ERR_FS_CP_DIR_TO_NON_DIR,
    ERR_FS_CP_EEXIST,
    ERR_FS_CP_EINVAL,
    ERR_FS_CP_FIFO_PIPE,
    ERR_FS_CP_NON_DIR_TO_DIR,
    ERR_FS_CP_SOCKET,
    ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY,
    ERR_FS_CP_UNKNOWN,
    ERR_FS_EISDIR,
    ERR_INVALID_ARG_TYPE
  } = require_errors();
  var {
    constants: {
      errno: {
        EEXIST,
        EISDIR,
        EINVAL,
        ENOTDIR
      }
    }
  } = __require("os");
  var {
    chmod,
    copyFile,
    lstat,
    mkdir,
    readdir,
    readlink,
    stat,
    symlink,
    unlink,
    utimes
  } = __require("fs/promises");
  var {
    dirname,
    isAbsolute,
    join,
    parse,
    resolve,
    sep,
    toNamespacedPath
  } = __require("path");
  var { fileURLToPath } = __require("url");
  var defaultOptions = {
    dereference: false,
    errorOnExist: false,
    filter: undefined,
    force: true,
    preserveTimestamps: false,
    recursive: false
  };
  async function cp(src, dest, opts) {
    if (opts != null && typeof opts !== "object") {
      throw new ERR_INVALID_ARG_TYPE("options", ["Object"], opts);
    }
    return cpFn(toNamespacedPath(getValidatedPath(src)), toNamespacedPath(getValidatedPath(dest)), { ...defaultOptions, ...opts });
  }
  function getValidatedPath(fileURLOrPath) {
    const path = fileURLOrPath != null && fileURLOrPath.href && fileURLOrPath.origin ? fileURLToPath(fileURLOrPath) : fileURLOrPath;
    return path;
  }
  async function cpFn(src, dest, opts) {
    if (opts.preserveTimestamps && process.arch === "ia32") {
      const warning = "Using the preserveTimestamps option in 32-bit " + "node is not recommended";
      process.emitWarning(warning, "TimestampPrecisionWarning");
    }
    const stats = await checkPaths(src, dest, opts);
    const { srcStat, destStat } = stats;
    await checkParentPaths(src, srcStat, dest);
    if (opts.filter) {
      return handleFilter(checkParentDir, destStat, src, dest, opts);
    }
    return checkParentDir(destStat, src, dest, opts);
  }
  async function checkPaths(src, dest, opts) {
    const { 0: srcStat, 1: destStat } = await getStats(src, dest, opts);
    if (destStat) {
      if (areIdentical(srcStat, destStat)) {
        throw new ERR_FS_CP_EINVAL({
          message: "src and dest cannot be the same",
          path: dest,
          syscall: "cp",
          errno: EINVAL
        });
      }
      if (srcStat.isDirectory() && !destStat.isDirectory()) {
        throw new ERR_FS_CP_DIR_TO_NON_DIR({
          message: `cannot overwrite directory ${src} ` + `with non-directory ${dest}`,
          path: dest,
          syscall: "cp",
          errno: EISDIR
        });
      }
      if (!srcStat.isDirectory() && destStat.isDirectory()) {
        throw new ERR_FS_CP_NON_DIR_TO_DIR({
          message: `cannot overwrite non-directory ${src} ` + `with directory ${dest}`,
          path: dest,
          syscall: "cp",
          errno: ENOTDIR
        });
      }
    }
    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      throw new ERR_FS_CP_EINVAL({
        message: `cannot copy ${src} to a subdirectory of self ${dest}`,
        path: dest,
        syscall: "cp",
        errno: EINVAL
      });
    }
    return { srcStat, destStat };
  }
  function areIdentical(srcStat, destStat) {
    return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
  }
  function getStats(src, dest, opts) {
    const statFunc = opts.dereference ? (file) => stat(file, { bigint: true }) : (file) => lstat(file, { bigint: true });
    return Promise.all([
      statFunc(src),
      statFunc(dest).catch((err) => {
        if (err.code === "ENOENT") {
          return null;
        }
        throw err;
      })
    ]);
  }
  async function checkParentDir(destStat, src, dest, opts) {
    const destParent = dirname(dest);
    const dirExists = await pathExists(destParent);
    if (dirExists) {
      return getStatsForCopy(destStat, src, dest, opts);
    }
    await mkdir(destParent, { recursive: true });
    return getStatsForCopy(destStat, src, dest, opts);
  }
  function pathExists(dest) {
    return stat(dest).then(() => true, (err) => err.code === "ENOENT" ? false : Promise.reject(err));
  }
  async function checkParentPaths(src, srcStat, dest) {
    const srcParent = resolve(dirname(src));
    const destParent = resolve(dirname(dest));
    if (destParent === srcParent || destParent === parse(destParent).root) {
      return;
    }
    let destStat;
    try {
      destStat = await stat(destParent, { bigint: true });
    } catch (err) {
      if (err.code === "ENOENT") {
        return;
      }
      throw err;
    }
    if (areIdentical(srcStat, destStat)) {
      throw new ERR_FS_CP_EINVAL({
        message: `cannot copy ${src} to a subdirectory of self ${dest}`,
        path: dest,
        syscall: "cp",
        errno: EINVAL
      });
    }
    return checkParentPaths(src, srcStat, destParent);
  }
  var normalizePathToArray = (path) => resolve(path).split(sep).filter(Boolean);
  function isSrcSubdir(src, dest) {
    const srcArr = normalizePathToArray(src);
    const destArr = normalizePathToArray(dest);
    return srcArr.every((cur, i) => destArr[i] === cur);
  }
  async function handleFilter(onInclude, destStat, src, dest, opts, cb) {
    const include = await opts.filter(src, dest);
    if (include) {
      return onInclude(destStat, src, dest, opts, cb);
    }
  }
  function startCopy(destStat, src, dest, opts) {
    if (opts.filter) {
      return handleFilter(getStatsForCopy, destStat, src, dest, opts);
    }
    return getStatsForCopy(destStat, src, dest, opts);
  }
  async function getStatsForCopy(destStat, src, dest, opts) {
    const statFn = opts.dereference ? stat : lstat;
    const srcStat = await statFn(src);
    if (srcStat.isDirectory() && opts.recursive) {
      return onDir(srcStat, destStat, src, dest, opts);
    } else if (srcStat.isDirectory()) {
      throw new ERR_FS_EISDIR({
        message: `${src} is a directory (not copied)`,
        path: src,
        syscall: "cp",
        errno: EINVAL
      });
    } else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) {
      return onFile(srcStat, destStat, src, dest, opts);
    } else if (srcStat.isSymbolicLink()) {
      return onLink(destStat, src, dest);
    } else if (srcStat.isSocket()) {
      throw new ERR_FS_CP_SOCKET({
        message: `cannot copy a socket file: ${dest}`,
        path: dest,
        syscall: "cp",
        errno: EINVAL
      });
    } else if (srcStat.isFIFO()) {
      throw new ERR_FS_CP_FIFO_PIPE({
        message: `cannot copy a FIFO pipe: ${dest}`,
        path: dest,
        syscall: "cp",
        errno: EINVAL
      });
    }
    throw new ERR_FS_CP_UNKNOWN({
      message: `cannot copy an unknown file type: ${dest}`,
      path: dest,
      syscall: "cp",
      errno: EINVAL
    });
  }
  function onFile(srcStat, destStat, src, dest, opts) {
    if (!destStat) {
      return _copyFile(srcStat, src, dest, opts);
    }
    return mayCopyFile(srcStat, src, dest, opts);
  }
  async function mayCopyFile(srcStat, src, dest, opts) {
    if (opts.force) {
      await unlink(dest);
      return _copyFile(srcStat, src, dest, opts);
    } else if (opts.errorOnExist) {
      throw new ERR_FS_CP_EEXIST({
        message: `${dest} already exists`,
        path: dest,
        syscall: "cp",
        errno: EEXIST
      });
    }
  }
  async function _copyFile(srcStat, src, dest, opts) {
    await copyFile(src, dest);
    if (opts.preserveTimestamps) {
      return handleTimestampsAndMode(srcStat.mode, src, dest);
    }
    return setDestMode(dest, srcStat.mode);
  }
  async function handleTimestampsAndMode(srcMode, src, dest) {
    if (fileIsNotWritable(srcMode)) {
      await makeFileWritable(dest, srcMode);
      return setDestTimestampsAndMode(srcMode, src, dest);
    }
    return setDestTimestampsAndMode(srcMode, src, dest);
  }
  function fileIsNotWritable(srcMode) {
    return (srcMode & 128) === 0;
  }
  function makeFileWritable(dest, srcMode) {
    return setDestMode(dest, srcMode | 128);
  }
  async function setDestTimestampsAndMode(srcMode, src, dest) {
    await setDestTimestamps(src, dest);
    return setDestMode(dest, srcMode);
  }
  function setDestMode(dest, srcMode) {
    return chmod(dest, srcMode);
  }
  async function setDestTimestamps(src, dest) {
    const updatedSrcStat = await stat(src);
    return utimes(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
  }
  function onDir(srcStat, destStat, src, dest, opts) {
    if (!destStat) {
      return mkDirAndCopy(srcStat.mode, src, dest, opts);
    }
    return copyDir(src, dest, opts);
  }
  async function mkDirAndCopy(srcMode, src, dest, opts) {
    await mkdir(dest);
    await copyDir(src, dest, opts);
    return setDestMode(dest, srcMode);
  }
  async function copyDir(src, dest, opts) {
    const dir = await readdir(src);
    for (let i = 0;i < dir.length; i++) {
      const item = dir[i];
      const srcItem = join(src, item);
      const destItem = join(dest, item);
      const { destStat } = await checkPaths(srcItem, destItem, opts);
      await startCopy(destStat, srcItem, destItem, opts);
    }
  }
  async function onLink(destStat, src, dest) {
    let resolvedSrc = await readlink(src);
    if (!isAbsolute(resolvedSrc)) {
      resolvedSrc = resolve(dirname(src), resolvedSrc);
    }
    if (!destStat) {
      return symlink(resolvedSrc, dest);
    }
    let resolvedDest;
    try {
      resolvedDest = await readlink(dest);
    } catch (err) {
      if (err.code === "EINVAL" || err.code === "UNKNOWN") {
        return symlink(resolvedSrc, dest);
      }
      throw err;
    }
    if (!isAbsolute(resolvedDest)) {
      resolvedDest = resolve(dirname(dest), resolvedDest);
    }
    if (isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new ERR_FS_CP_EINVAL({
        message: `cannot copy ${resolvedSrc} to a subdirectory of self ` + `${resolvedDest}`,
        path: dest,
        syscall: "cp",
        errno: EINVAL
      });
    }
    const srcStat = await stat(src);
    if (srcStat.isDirectory() && isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY({
        message: `cannot overwrite ${resolvedDest} with ${resolvedSrc}`,
        path: dest,
        syscall: "cp",
        errno: EINVAL
      });
    }
    return copyLink(resolvedSrc, dest);
  }
  async function copyLink(resolvedSrc, dest) {
    await unlink(dest);
    return symlink(resolvedSrc, dest);
  }
  module.exports = cp;
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/cp/index.js
var require_cp = __commonJS((exports, module) => {
  var fs = __require("fs/promises");
  var getOptions = require_get_options();
  var node = require_node();
  var polyfill = require_polyfill();
  var useNative = node.satisfies(">=16.7.0");
  var cp = async (src, dest, opts) => {
    const options = getOptions(opts, {
      copy: ["dereference", "errorOnExist", "filter", "force", "preserveTimestamps", "recursive"]
    });
    return useNative ? fs.cp(src, dest, options) : polyfill(src, dest, options);
  };
  module.exports = cp;
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/with-temp-dir.js
var require_with_temp_dir = __commonJS((exports, module) => {
  var { join, sep } = __require("path");
  var getOptions = require_get_options();
  var { mkdir, mkdtemp, rm } = __require("fs/promises");
  var withTempDir = async (root, fn, opts) => {
    const options = getOptions(opts, {
      copy: ["tmpPrefix"]
    });
    await mkdir(root, { recursive: true });
    const target = await mkdtemp(join(`${root}${sep}`, options.tmpPrefix || ""));
    let err;
    let result;
    try {
      result = await fn(target);
    } catch (_err) {
      err = _err;
    }
    try {
      await rm(target, { force: true, recursive: true });
    } catch {}
    if (err) {
      throw err;
    }
    return result;
  };
  module.exports = withTempDir;
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/readdir-scoped.js
var require_readdir_scoped = __commonJS((exports, module) => {
  var { readdir } = __require("fs/promises");
  var { join } = __require("path");
  var readdirScoped = async (dir) => {
    const results = [];
    for (const item of await readdir(dir)) {
      if (item.startsWith("@")) {
        for (const scopedItem of await readdir(join(dir, item))) {
          results.push(join(item, scopedItem));
        }
      } else {
        results.push(item);
      }
    }
    return results;
  };
  module.exports = readdirScoped;
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/move-file.js
var require_move_file = __commonJS((exports, module) => {
  var { dirname, join, resolve, relative, isAbsolute } = __require("path");
  var fs = __require("fs/promises");
  var pathExists = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch (er) {
      return er.code !== "ENOENT";
    }
  };
  var moveFile = async (source, destination, options = {}, root = true, symlinks = []) => {
    if (!source || !destination) {
      throw new TypeError("`source` and `destination` file required");
    }
    options = {
      overwrite: true,
      ...options
    };
    if (!options.overwrite && await pathExists(destination)) {
      throw new Error(`The destination file exists: ${destination}`);
    }
    await fs.mkdir(dirname(destination), { recursive: true });
    try {
      await fs.rename(source, destination);
    } catch (error) {
      if (error.code === "EXDEV" || error.code === "EPERM") {
        const sourceStat = await fs.lstat(source);
        if (sourceStat.isDirectory()) {
          const files = await fs.readdir(source);
          await Promise.all(files.map((file) => moveFile(join(source, file), join(destination, file), options, false, symlinks)));
        } else if (sourceStat.isSymbolicLink()) {
          symlinks.push({ source, destination });
        } else {
          await fs.copyFile(source, destination);
        }
      } else {
        throw error;
      }
    }
    if (root) {
      await Promise.all(symlinks.map(async ({ source: symSource, destination: symDestination }) => {
        let target = await fs.readlink(symSource);
        if (isAbsolute(target)) {
          target = resolve(symDestination, relative(symSource, target));
        }
        let targetStat = "file";
        try {
          targetStat = await fs.stat(resolve(dirname(symSource), target));
          if (targetStat.isDirectory()) {
            targetStat = "junction";
          }
        } catch {}
        await fs.symlink(target, symDestination, targetStat);
      }));
      await fs.rm(source, { recursive: true, force: true });
    }
  };
  module.exports = moveFile;
});

// node_modules/.bun/@npmcli+fs@5.0.0/node_modules/@npmcli/fs/lib/index.js
var require_lib2 = __commonJS((exports, module) => {
  var cp = require_cp();
  var withTempDir = require_with_temp_dir();
  var readdirScoped = require_readdir_scoped();
  var moveFile = require_move_file();
  module.exports = {
    cp,
    withTempDir,
    readdirScoped,
    moveFile
  };
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/util/tmp.js
var require_tmp = __commonJS((exports, module) => {
  var crypto = __require("crypto");
  var { withTempDir } = require_lib2();
  var fs = __require("fs/promises");
  var path = __require("path");
  exports.mkdir = mktmpdir;
  exports.tmpName = function tmpName(cache, tmpPrefix) {
    const id = crypto.randomUUID();
    return path.join(cache, "tmp", tmpPrefix ? `${tmpPrefix}-${id}` : id);
  };
  async function mktmpdir(cache, opts = {}) {
    const { tmpPrefix } = opts;
    const tmpDir = path.join(cache, "tmp");
    await fs.mkdir(tmpDir, { recursive: true, owner: "inherit" });
    const target = `${tmpDir}${path.sep}${tmpPrefix || ""}`;
    return fs.mkdtemp(target, { owner: "inherit" });
  }
  exports.withTmp = withTmp;
  function withTmp(cache, opts, cb) {
    if (!cb) {
      cb = opts;
      opts = {};
    }
    return withTempDir(path.join(cache, "tmp"), cb, opts);
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/package.json
var require_package = __commonJS((exports, module) => {
  module.exports = {
    name: "cacache",
    version: "20.0.4",
    "cache-version": {
      content: "2",
      index: "5"
    },
    description: "Fast, fault-tolerant, cross-platform, disk-based, data-agnostic, content-addressable cache.",
    main: "lib/index.js",
    files: [
      "bin/",
      "lib/"
    ],
    scripts: {
      test: "tap",
      snap: "tap",
      coverage: "tap",
      "test-docker": 'docker run -it --rm --name pacotest -v "$PWD":/tmp -w /tmp node:latest npm test',
      lint: "npm run eslint",
      npmclilint: "npmcli-lint",
      lintfix: "npm run eslint -- --fix",
      postsnap: "npm run lintfix --",
      postlint: "template-oss-check",
      posttest: "npm run lint",
      "template-oss-apply": "template-oss-apply --force",
      eslint: 'eslint "**/*.{js,cjs,ts,mjs,jsx,tsx}"'
    },
    repository: {
      type: "git",
      url: "git+https://github.com/npm/cacache.git"
    },
    keywords: [
      "cache",
      "caching",
      "content-addressable",
      "sri",
      "sri hash",
      "subresource integrity",
      "cache",
      "storage",
      "store",
      "file store",
      "filesystem",
      "disk cache",
      "disk storage"
    ],
    license: "ISC",
    dependencies: {
      "@npmcli/fs": "^5.0.0",
      "fs-minipass": "^3.0.0",
      glob: "^13.0.0",
      "lru-cache": "^11.1.0",
      minipass: "^7.0.3",
      "minipass-collect": "^2.0.1",
      "minipass-flush": "^1.0.5",
      "minipass-pipeline": "^1.2.4",
      "p-map": "^7.0.2",
      ssri: "^13.0.0"
    },
    devDependencies: {
      "@npmcli/eslint-config": "^6.0.1",
      "@npmcli/template-oss": "4.29.0",
      tap: "^16.0.0"
    },
    engines: {
      node: "^20.17.0 || >=22.9.0"
    },
    templateOSS: {
      "//@npmcli/template-oss": "This file is partially managed by @npmcli/template-oss. Edits may be overwritten.",
      windowsCI: false,
      version: "4.29.0",
      publish: "true"
    },
    author: "GitHub Inc.",
    tap: {
      "nyc-arg": [
        "--exclude",
        "tap-snapshots/**"
      ]
    }
  };
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/util/hash-to-segments.js
var require_hash_to_segments = __commonJS((exports, module) => {
  module.exports = hashToSegments;
  function hashToSegments(hash) {
    return [hash.slice(0, 2), hash.slice(2, 4), hash.slice(4)];
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/content/path.js
var require_path = __commonJS((exports, module) => {
  var contentVer = require_package()["cache-version"].content;
  var hashToSegments = require_hash_to_segments();
  var path = __require("path");
  var ssri = require_lib();
  module.exports = contentPath;
  function contentPath(cache, integrity) {
    const sri = ssri.parse(integrity, { single: true });
    return path.join(contentDir(cache), sri.algorithm, ...hashToSegments(sri.hexDigest()));
  }
  module.exports.contentDir = contentDir;
  function contentDir(cache) {
    return path.join(cache, `content-v${contentVer}`);
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/entry-index.js
var require_entry_index = __commonJS((exports, module) => {
  var crypto = __require("crypto");
  var {
    appendFile,
    mkdir,
    readFile,
    readdir,
    rm,
    writeFile
  } = __require("fs/promises");
  var { Minipass } = require_commonjs();
  var path = __require("path");
  var ssri = require_lib();
  var { tmpName } = require_tmp();
  var contentPath = require_path();
  var hashToSegments = require_hash_to_segments();
  var indexV = require_package()["cache-version"].index;
  var { moveFile } = require_lib2();
  var lsStreamConcurrency = 5;
  exports.NotFoundError = class NotFoundError extends Error {
    constructor(cache, key) {
      super(`No cache entry for ${key} found in ${cache}`);
      this.code = "ENOENT";
      this.cache = cache;
      this.key = key;
    }
  };
  exports.compact = compact;
  async function compact(cache, key, matchFn, opts = {}) {
    const bucket = bucketPath(cache, key);
    const entries = await bucketEntries(bucket);
    const newEntries = [];
    for (let i = entries.length - 1;i >= 0; --i) {
      const entry = entries[i];
      if (entry.integrity === null && !opts.validateEntry) {
        break;
      }
      if ((!opts.validateEntry || opts.validateEntry(entry) === true) && (newEntries.length === 0 || !newEntries.find((oldEntry) => matchFn(oldEntry, entry)))) {
        newEntries.unshift(entry);
      }
    }
    const newIndex = `
` + newEntries.map((entry) => {
      const stringified = JSON.stringify(entry);
      const hash2 = hashEntry(stringified);
      return `${hash2}	${stringified}`;
    }).join(`
`);
    const setup = async () => {
      const target = tmpName(cache, opts.tmpPrefix);
      await mkdir(path.dirname(target), { recursive: true });
      return {
        target,
        moved: false
      };
    };
    const teardown = async (tmp2) => {
      if (!tmp2.moved) {
        return rm(tmp2.target, { recursive: true, force: true });
      }
    };
    const write = async (tmp2) => {
      await writeFile(tmp2.target, newIndex, { flag: "wx" });
      await mkdir(path.dirname(bucket), { recursive: true });
      await moveFile(tmp2.target, bucket);
      tmp2.moved = true;
    };
    const tmp = await setup();
    try {
      await write(tmp);
    } finally {
      await teardown(tmp);
    }
    return newEntries.reverse().map((entry) => formatEntry(cache, entry, true));
  }
  exports.insert = insert;
  async function insert(cache, key, integrity, opts = {}) {
    const { metadata, size, time } = opts;
    const bucket = bucketPath(cache, key);
    const entry = {
      key,
      integrity: integrity && ssri.stringify(integrity),
      time: time || Date.now(),
      size,
      metadata
    };
    try {
      await mkdir(path.dirname(bucket), { recursive: true });
      const stringified = JSON.stringify(entry);
      await appendFile(bucket, `
${hashEntry(stringified)}	${stringified}`);
    } catch (err) {
      if (err.code === "ENOENT") {
        return;
      }
      throw err;
    }
    return formatEntry(cache, entry);
  }
  exports.find = find;
  async function find(cache, key) {
    const bucket = bucketPath(cache, key);
    try {
      const entries = await bucketEntries(bucket);
      return entries.reduce((latest, next) => {
        if (next && next.key === key) {
          return formatEntry(cache, next);
        } else {
          return latest;
        }
      }, null);
    } catch (err) {
      if (err.code === "ENOENT") {
        return null;
      } else {
        throw err;
      }
    }
  }
  exports.delete = del;
  function del(cache, key, opts = {}) {
    if (!opts.removeFully) {
      return insert(cache, key, null, opts);
    }
    const bucket = bucketPath(cache, key);
    return rm(bucket, { recursive: true, force: true });
  }
  exports.lsStream = lsStream;
  function lsStream(cache) {
    const indexDir = bucketDir(cache);
    const stream = new Minipass({ objectMode: true });
    Promise.resolve().then(async () => {
      const { default: pMap } = await import("./chunk-jd32zbps.js");
      const buckets = await readdirOrEmpty(indexDir);
      await pMap(buckets, async (bucket) => {
        const bucketPath2 = path.join(indexDir, bucket);
        const subbuckets = await readdirOrEmpty(bucketPath2);
        await pMap(subbuckets, async (subbucket) => {
          const subbucketPath = path.join(bucketPath2, subbucket);
          const subbucketEntries = await readdirOrEmpty(subbucketPath);
          await pMap(subbucketEntries, async (entry) => {
            const entryPath = path.join(subbucketPath, entry);
            try {
              const entries = await bucketEntries(entryPath);
              const reduced = entries.reduce((acc, entry2) => {
                acc.set(entry2.key, entry2);
                return acc;
              }, new Map);
              for (const entry2 of reduced.values()) {
                const formatted = formatEntry(cache, entry2);
                if (formatted) {
                  stream.write(formatted);
                }
              }
            } catch (err) {
              if (err.code === "ENOENT") {
                return;
              }
              throw err;
            }
          }, { concurrency: lsStreamConcurrency });
        }, { concurrency: lsStreamConcurrency });
      }, { concurrency: lsStreamConcurrency });
      stream.end();
      return stream;
    }).catch((err) => stream.emit("error", err));
    return stream;
  }
  exports.ls = ls;
  async function ls(cache) {
    const entries = await lsStream(cache).collect();
    return entries.reduce((acc, xs) => {
      acc[xs.key] = xs;
      return acc;
    }, {});
  }
  exports.bucketEntries = bucketEntries;
  async function bucketEntries(bucket, filter) {
    const data = await readFile(bucket, "utf8");
    return _bucketEntries(data, filter);
  }
  function _bucketEntries(data) {
    const entries = [];
    data.split(`
`).forEach((entry) => {
      if (!entry) {
        return;
      }
      const pieces = entry.split("\t");
      if (!pieces[1] || hashEntry(pieces[1]) !== pieces[0]) {
        return;
      }
      let obj;
      try {
        obj = JSON.parse(pieces[1]);
      } catch (_) {}
      if (obj) {
        entries.push(obj);
      }
    });
    return entries;
  }
  exports.bucketDir = bucketDir;
  function bucketDir(cache) {
    return path.join(cache, `index-v${indexV}`);
  }
  exports.bucketPath = bucketPath;
  function bucketPath(cache, key) {
    const hashed = hashKey(key);
    return path.join.apply(path, [bucketDir(cache)].concat(hashToSegments(hashed)));
  }
  exports.hashKey = hashKey;
  function hashKey(key) {
    return hash(key, "sha256");
  }
  exports.hashEntry = hashEntry;
  function hashEntry(str) {
    return hash(str, "sha1");
  }
  function hash(str, digest) {
    return crypto.createHash(digest).update(str).digest("hex");
  }
  function formatEntry(cache, entry, keepAll) {
    if (!entry.integrity && !keepAll) {
      return null;
    }
    return {
      key: entry.key,
      integrity: entry.integrity,
      path: entry.integrity ? contentPath(cache, entry.integrity) : undefined,
      size: entry.size,
      time: entry.time,
      metadata: entry.metadata
    };
  }
  function readdirOrEmpty(dir) {
    return readdir(dir).catch((err) => {
      if (err.code === "ENOENT" || err.code === "ENOTDIR") {
        return [];
      }
      throw err;
    });
  }
});

// node_modules/.bun/lru-cache@11.3.3/node_modules/lru-cache/dist/commonjs/index.min.js
var require_index_min = __commonJS((exports) => {
  var G = (c, t) => () => (t || c((t = { exports: {} }).exports, t), t.exports);
  var M = G((O) => {
    Object.defineProperty(O, "__esModule", { value: true });
    O.tracing = O.metrics = undefined;
    var L = __require("diagnostics_channel");
    O.metrics = (0, L.channel)("lru-cache:metrics");
    O.tracing = (0, L.tracingChannel)("lru-cache");
  });
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LRUCache = undefined;
  var u = M();
  var D = () => u.metrics.hasSubscribers || u.tracing.hasSubscribers;
  var P = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date;
  var U = new Set;
  var j = typeof process == "object" && process ? process : {};
  var H = (c, t, e, i) => {
    typeof j.emitWarning == "function" ? j.emitWarning(c, t, e, i) : console.error(`[${e}] ${t}: ${c}`);
  };
  var N = (c) => !U.has(c);
  var B = Symbol("type");
  var F = (c) => !!c && c === Math.floor(c) && c > 0 && isFinite(c);
  var I = (c) => F(c) ? c <= Math.pow(2, 8) ? Uint8Array : c <= Math.pow(2, 16) ? Uint16Array : c <= Math.pow(2, 32) ? Uint32Array : c <= Number.MAX_SAFE_INTEGER ? W : null : null;
  var W = class extends Array {
    constructor(t) {
      super(t), this.fill(0);
    }
  };
  var C = class c {
    heap;
    length;
    static #o = false;
    static create(t) {
      let e = I(t);
      if (!e)
        return [];
      c.#o = true;
      let i = new c(t, e);
      return c.#o = false, i;
    }
    constructor(t, e) {
      if (!c.#o)
        throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new e(t), this.length = 0;
    }
    push(t) {
      this.heap[this.length++] = t;
    }
    pop() {
      return this.heap[--this.length];
    }
  };
  var x = class c {
    #o;
    #c;
    #m;
    #D;
    #w;
    #M;
    #j;
    #S;
    get perf() {
      return this.#S;
    }
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #n;
    #b;
    #s;
    #i;
    #t;
    #l;
    #u;
    #a;
    #h;
    #y;
    #r;
    #_;
    #F;
    #d;
    #g;
    #T;
    #O;
    #f;
    #U;
    static unsafeExposeInternals(t) {
      return { starts: t.#F, ttls: t.#d, autopurgeTimers: t.#g, sizes: t.#_, keyMap: t.#s, keyList: t.#i, valList: t.#t, next: t.#l, prev: t.#u, get head() {
        return t.#a;
      }, get tail() {
        return t.#h;
      }, free: t.#y, isBackgroundFetch: (e) => t.#e(e), backgroundFetch: (e, i, s, n) => t.#P(e, i, s, n), moveToTail: (e) => t.#L(e), indexes: (e) => t.#A(e), rindexes: (e) => t.#v(e), isStale: (e) => t.#p(e) };
    }
    get max() {
      return this.#o;
    }
    get maxSize() {
      return this.#c;
    }
    get calculatedSize() {
      return this.#b;
    }
    get size() {
      return this.#n;
    }
    get fetchMethod() {
      return this.#M;
    }
    get memoMethod() {
      return this.#j;
    }
    get dispose() {
      return this.#m;
    }
    get onInsert() {
      return this.#D;
    }
    get disposeAfter() {
      return this.#w;
    }
    constructor(t) {
      let { max: e = 0, ttl: i, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: o, updateAgeOnHas: r, allowStale: h, dispose: a, onInsert: d, disposeAfter: f, noDisposeOnSet: p, noUpdateTTL: m, maxSize: T = 0, maxEntrySize: w = 0, sizeCalculation: y, fetchMethod: l, memoMethod: S, noDeleteOnFetchRejection: _, noDeleteOnStaleGet: b, allowStaleOnFetchRejection: g, allowStaleOnFetchAbort: A, ignoreFetchAbort: v, perf: R } = t;
      if (R !== undefined && typeof R?.now != "function")
        throw new TypeError("perf option must have a now() method if specified");
      if (this.#S = R ?? P, e !== 0 && !F(e))
        throw new TypeError("max option must be a nonnegative integer");
      let z = e ? I(e) : Array;
      if (!z)
        throw new Error("invalid max value: " + e);
      if (this.#o = e, this.#c = T, this.maxEntrySize = w || this.#c, this.sizeCalculation = y, this.sizeCalculation) {
        if (!this.#c && !this.maxEntrySize)
          throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function")
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (S !== undefined && typeof S != "function")
        throw new TypeError("memoMethod must be a function if defined");
      if (this.#j = S, l !== undefined && typeof l != "function")
        throw new TypeError("fetchMethod must be a function if specified");
      if (this.#M = l, this.#O = !!l, this.#s = new Map, this.#i = Array.from({ length: e }).fill(undefined), this.#t = Array.from({ length: e }).fill(undefined), this.#l = new z(e), this.#u = new z(e), this.#a = 0, this.#h = 0, this.#y = C.create(e), this.#n = 0, this.#b = 0, typeof a == "function" && (this.#m = a), typeof d == "function" && (this.#D = d), typeof f == "function" ? (this.#w = f, this.#r = []) : (this.#w = undefined, this.#r = undefined), this.#T = !!this.#m, this.#U = !!this.#D, this.#f = !!this.#w, this.noDisposeOnSet = !!p, this.noUpdateTTL = !!m, this.noDeleteOnFetchRejection = !!_, this.allowStaleOnFetchRejection = !!g, this.allowStaleOnFetchAbort = !!A, this.ignoreFetchAbort = !!v, this.maxEntrySize !== 0) {
        if (this.#c !== 0 && !F(this.#c))
          throw new TypeError("maxSize must be a positive integer if specified");
        if (!F(this.maxEntrySize))
          throw new TypeError("maxEntrySize must be a positive integer if specified");
        this.#X();
      }
      if (this.allowStale = !!h, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!r, this.ttlResolution = F(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = i || 0, this.ttl) {
        if (!F(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        this.#H();
      }
      if (this.#o === 0 && this.ttl === 0 && this.#c === 0)
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.#o && !this.#c) {
        let E = "LRU_CACHE_UNBOUNDED";
        N(E) && (U.add(E), H("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", E, c));
      }
    }
    getRemainingTTL(t) {
      return this.#s.has(t) ? 1 / 0 : 0;
    }
    #H() {
      let t = new W(this.#o), e = new W(this.#o);
      this.#d = t, this.#F = e;
      let i = this.ttlAutopurge ? Array.from({ length: this.#o }) : undefined;
      this.#g = i, this.#N = (r, h, a = this.#S.now()) => {
        e[r] = h !== 0 ? a : 0, t[r] = h, s(r, h);
      }, this.#R = (r) => {
        e[r] = t[r] !== 0 ? this.#S.now() : 0, s(r, t[r]);
      };
      let s = this.ttlAutopurge ? (r, h) => {
        if (i?.[r] && (clearTimeout(i[r]), i[r] = undefined), h && h !== 0 && i) {
          let a = setTimeout(() => {
            this.#p(r) && this.#z(this.#i[r], "expire");
          }, h + 1);
          a.unref && a.unref(), i[r] = a;
        }
      } : () => {};
      this.#E = (r, h) => {
        if (t[h]) {
          let a = t[h], d = e[h];
          if (!a || !d)
            return;
          r.ttl = a, r.start = d, r.now = n || o();
          let f = r.now - d;
          r.remainingTTL = a - f;
        }
      };
      let n = 0, o = () => {
        let r = this.#S.now();
        if (this.ttlResolution > 0) {
          n = r;
          let h = setTimeout(() => n = 0, this.ttlResolution);
          h.unref && h.unref();
        }
        return r;
      };
      this.getRemainingTTL = (r) => {
        let h = this.#s.get(r);
        if (h === undefined)
          return 0;
        let a = t[h], d = e[h];
        if (!a || !d)
          return 1 / 0;
        let f = (n || o()) - d;
        return a - f;
      }, this.#p = (r) => {
        let h = e[r], a = t[r];
        return !!a && !!h && (n || o()) - h > a;
      };
    }
    #R = () => {};
    #E = () => {};
    #N = () => {};
    #p = () => false;
    #X() {
      let t = new W(this.#o);
      this.#b = 0, this.#_ = t, this.#C = (e) => {
        this.#b -= t[e], t[e] = 0;
      }, this.#k = (e, i, s, n) => {
        if (this.#e(i))
          return 0;
        if (!F(s))
          if (n) {
            if (typeof n != "function")
              throw new TypeError("sizeCalculation must be a function");
            if (s = n(i, e), !F(s))
              throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          } else
            throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return s;
      }, this.#I = (e, i, s) => {
        if (t[e] = i, this.#c) {
          let n = this.#c - t[e];
          for (;this.#b > n; )
            this.#G(true);
        }
        this.#b += t[e], s && (s.entrySize = i, s.totalCalculatedSize = this.#b);
      };
    }
    #C = (t) => {};
    #I = (t, e, i) => {};
    #k = (t, e, i, s) => {
      if (i || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    };
    *#A({ allowStale: t = this.allowStale } = {}) {
      if (this.#n)
        for (let e = this.#h;this.#V(e) && ((t || !this.#p(e)) && (yield e), e !== this.#a); )
          e = this.#u[e];
    }
    *#v({ allowStale: t = this.allowStale } = {}) {
      if (this.#n)
        for (let e = this.#a;this.#V(e) && ((t || !this.#p(e)) && (yield e), e !== this.#h); )
          e = this.#l[e];
    }
    #V(t) {
      return t !== undefined && this.#s.get(this.#i[t]) === t;
    }
    *entries() {
      for (let t of this.#A())
        this.#t[t] !== undefined && this.#i[t] !== undefined && !this.#e(this.#t[t]) && (yield [this.#i[t], this.#t[t]]);
    }
    *rentries() {
      for (let t of this.#v())
        this.#t[t] !== undefined && this.#i[t] !== undefined && !this.#e(this.#t[t]) && (yield [this.#i[t], this.#t[t]]);
    }
    *keys() {
      for (let t of this.#A()) {
        let e = this.#i[t];
        e !== undefined && !this.#e(this.#t[t]) && (yield e);
      }
    }
    *rkeys() {
      for (let t of this.#v()) {
        let e = this.#i[t];
        e !== undefined && !this.#e(this.#t[t]) && (yield e);
      }
    }
    *values() {
      for (let t of this.#A())
        this.#t[t] !== undefined && !this.#e(this.#t[t]) && (yield this.#t[t]);
    }
    *rvalues() {
      for (let t of this.#v())
        this.#t[t] !== undefined && !this.#e(this.#t[t]) && (yield this.#t[t]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(t, e = {}) {
      for (let i of this.#A()) {
        let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
        if (n !== undefined && t(n, this.#i[i], this))
          return this.#x(this.#i[i], e);
      }
    }
    forEach(t, e = this) {
      for (let i of this.#A()) {
        let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
        n !== undefined && t.call(e, n, this.#i[i], this);
      }
    }
    rforEach(t, e = this) {
      for (let i of this.#v()) {
        let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
        n !== undefined && t.call(e, n, this.#i[i], this);
      }
    }
    purgeStale() {
      let t = false;
      for (let e of this.#v({ allowStale: true }))
        this.#p(e) && (this.#z(this.#i[e], "expire"), t = true);
      return t;
    }
    info(t) {
      let e = this.#s.get(t);
      if (e === undefined)
        return;
      let i = this.#t[e], s = this.#e(i) ? i.__staleWhileFetching : i;
      if (s === undefined)
        return;
      let n = { value: s };
      if (this.#d && this.#F) {
        let o = this.#d[e], r = this.#F[e];
        if (o && r) {
          let h = o - (this.#S.now() - r);
          n.ttl = h, n.start = Date.now();
        }
      }
      return this.#_ && (n.size = this.#_[e]), n;
    }
    dump() {
      let t = [];
      for (let e of this.#A({ allowStale: true })) {
        let i = this.#i[e], s = this.#t[e], n = this.#e(s) ? s.__staleWhileFetching : s;
        if (n === undefined || i === undefined)
          continue;
        let o = { value: n };
        if (this.#d && this.#F) {
          o.ttl = this.#d[e];
          let r = this.#S.now() - this.#F[e];
          o.start = Math.floor(Date.now() - r);
        }
        this.#_ && (o.size = this.#_[e]), t.unshift([i, o]);
      }
      return t;
    }
    load(t) {
      this.clear();
      for (let [e, i] of t) {
        if (i.start) {
          let s = Date.now() - i.start;
          i.start = this.#S.now() - s;
        }
        this.#W(e, i.value, i);
      }
    }
    set(t, e, i = {}) {
      let { status: s = u.metrics.hasSubscribers ? {} : undefined } = i;
      i.status = s, s && (s.op = "set", s.key = t, e !== undefined && (s.value = e));
      let n = this.#W(t, e, i);
      return s && u.metrics.hasSubscribers && u.metrics.publish(s), n;
    }
    #W(t, e, i = {}) {
      let { ttl: s = this.ttl, start: n, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: r = this.sizeCalculation, status: h } = i;
      if (e === undefined)
        return h && (h.set = "deleted"), this.delete(t), this;
      let { noUpdateTTL: a = this.noUpdateTTL } = i;
      h && !this.#e(e) && (h.value = e);
      let d = this.#k(t, e, i.size || 0, r, h);
      if (this.maxEntrySize && d > this.maxEntrySize)
        return this.#z(t, "set"), h && (h.set = "miss", h.maxEntrySizeExceeded = true), this;
      let f = this.#n === 0 ? undefined : this.#s.get(t);
      if (f === undefined)
        f = this.#n === 0 ? this.#h : this.#y.length !== 0 ? this.#y.pop() : this.#n === this.#o ? this.#G(false) : this.#n, this.#i[f] = t, this.#t[f] = e, this.#s.set(t, f), this.#l[this.#h] = f, this.#u[f] = this.#h, this.#h = f, this.#n++, this.#I(f, d, h), h && (h.set = "add"), a = false, this.#U && this.#D?.(e, t, "add");
      else {
        this.#L(f);
        let p = this.#t[f];
        if (e !== p) {
          if (this.#O && this.#e(p)) {
            p.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: m } = p;
            m !== undefined && !o && (this.#T && this.#m?.(m, t, "set"), this.#f && this.#r?.push([m, t, "set"]));
          } else
            o || (this.#T && this.#m?.(p, t, "set"), this.#f && this.#r?.push([p, t, "set"]));
          if (this.#C(f), this.#I(f, d, h), this.#t[f] = e, h) {
            h.set = "replace";
            let m = p && this.#e(p) ? p.__staleWhileFetching : p;
            m !== undefined && (h.oldValue = m);
          }
        } else
          h && (h.set = "update");
        this.#U && this.onInsert?.(e, t, e === p ? "update" : "replace");
      }
      if (s !== 0 && !this.#d && this.#H(), this.#d && (a || this.#N(f, s, n), h && this.#E(h, f)), !o && this.#f && this.#r) {
        let p = this.#r, m;
        for (;m = p?.shift(); )
          this.#w?.(...m);
      }
      return this;
    }
    pop() {
      try {
        for (;this.#n; ) {
          let t = this.#t[this.#a];
          if (this.#G(true), this.#e(t)) {
            if (t.__staleWhileFetching)
              return t.__staleWhileFetching;
          } else if (t !== undefined)
            return t;
        }
      } finally {
        if (this.#f && this.#r) {
          let t = this.#r, e;
          for (;e = t?.shift(); )
            this.#w?.(...e);
        }
      }
    }
    #G(t) {
      let e = this.#a, i = this.#i[e], s = this.#t[e];
      return this.#O && this.#e(s) ? s.__abortController.abort(new Error("evicted")) : (this.#T || this.#f) && (this.#T && this.#m?.(s, i, "evict"), this.#f && this.#r?.push([s, i, "evict"])), this.#C(e), this.#g?.[e] && (clearTimeout(this.#g[e]), this.#g[e] = undefined), t && (this.#i[e] = undefined, this.#t[e] = undefined, this.#y.push(e)), this.#n === 1 ? (this.#a = this.#h = 0, this.#y.length = 0) : this.#a = this.#l[e], this.#s.delete(i), this.#n--, e;
    }
    has(t, e = {}) {
      let { status: i = u.metrics.hasSubscribers ? {} : undefined } = e;
      e.status = i, i && (i.op = "has", i.key = t);
      let s = this.#Y(t, e);
      return u.metrics.hasSubscribers && u.metrics.publish(i), s;
    }
    #Y(t, e = {}) {
      let { updateAgeOnHas: i = this.updateAgeOnHas, status: s } = e, n = this.#s.get(t);
      if (n !== undefined) {
        let o = this.#t[n];
        if (this.#e(o) && o.__staleWhileFetching === undefined)
          return false;
        if (this.#p(n))
          s && (s.has = "stale", this.#E(s, n));
        else
          return i && this.#R(n), s && (s.has = "hit", this.#E(s, n)), true;
      } else
        s && (s.has = "miss");
      return false;
    }
    peek(t, e = {}) {
      let { status: i = D() ? {} : undefined } = e;
      i && (i.op = "peek", i.key = t), e.status = i;
      let s = this.#J(t, e);
      return u.metrics.hasSubscribers && u.metrics.publish(i), s;
    }
    #J(t, e) {
      let { status: i, allowStale: s = this.allowStale } = e, n = this.#s.get(t);
      if (n === undefined || !s && this.#p(n)) {
        i && (i.peek = n === undefined ? "miss" : "stale");
        return;
      }
      let o = this.#t[n], r = this.#e(o) ? o.__staleWhileFetching : o;
      return i && (r !== undefined ? (i.peek = "hit", i.value = r) : i.peek = "miss"), r;
    }
    #P(t, e, i, s) {
      let n = e === undefined ? undefined : this.#t[e];
      if (this.#e(n))
        return n;
      let o = new AbortController, { signal: r } = i;
      r?.addEventListener("abort", () => o.abort(r.reason), { signal: o.signal });
      let h = { signal: o.signal, options: i, context: s }, a = (w, y = false) => {
        let { aborted: l } = o.signal, S = i.ignoreFetchAbort && w !== undefined, _ = i.ignoreFetchAbort || !!(i.allowStaleOnFetchAbort && w !== undefined);
        if (i.status && (l && !y ? (i.status.fetchAborted = true, i.status.fetchError = o.signal.reason, S && (i.status.fetchAbortIgnored = true)) : i.status.fetchResolved = true), l && !S && !y)
          return f(o.signal.reason, _);
        let b = m, g = this.#t[e];
        return (g === m || g === undefined && S && y) && (w === undefined ? b.__staleWhileFetching !== undefined ? this.#t[e] = b.__staleWhileFetching : this.#z(t, "fetch") : (i.status && (i.status.fetchUpdated = true), this.#W(t, w, h.options))), w;
      }, d = (w) => (i.status && (i.status.fetchRejected = true, i.status.fetchError = w), f(w, false)), f = (w, y) => {
        let { aborted: l } = o.signal, S = l && i.allowStaleOnFetchAbort, _ = S || i.allowStaleOnFetchRejection, b = _ || i.noDeleteOnFetchRejection, g = m;
        if (this.#t[e] === m && (!b || !y && g.__staleWhileFetching === undefined ? this.#z(t, "fetch") : S || (this.#t[e] = g.__staleWhileFetching)), _)
          return i.status && g.__staleWhileFetching !== undefined && (i.status.returnedStale = true), g.__staleWhileFetching;
        if (g.__returned === g)
          throw w;
      }, p = (w, y) => {
        let l = this.#M?.(t, n, h);
        l && l instanceof Promise && l.then((S) => w(S === undefined ? undefined : S), y), o.signal.addEventListener("abort", () => {
          (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (w(undefined), i.allowStaleOnFetchAbort && (w = (S) => a(S, true)));
        });
      };
      i.status && (i.status.fetchDispatched = true);
      let m = new Promise(p).then(a, d), T = Object.assign(m, { __abortController: o, __staleWhileFetching: n, __returned: undefined });
      return e === undefined ? (this.#W(t, T, { ...h.options, status: undefined }), e = this.#s.get(t)) : this.#t[e] = T, T;
    }
    #e(t) {
      if (!this.#O)
        return false;
      let e = t;
      return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof AbortController;
    }
    fetch(t, e = {}) {
      let i = u.tracing.hasSubscribers, { status: s = D() ? {} : undefined } = e;
      e.status = s, s && e.context && (s.context = e.context);
      let n = this.#q(t, e);
      return s && D() && i && (s.trace = true, u.tracing.tracePromise(() => n, s).catch(() => {})), n;
    }
    async#q(t, e = {}) {
      let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: r = this.noDisposeOnSet, size: h = 0, sizeCalculation: a = this.sizeCalculation, noUpdateTTL: d = this.noUpdateTTL, noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: p = this.allowStaleOnFetchRejection, ignoreFetchAbort: m = this.ignoreFetchAbort, allowStaleOnFetchAbort: T = this.allowStaleOnFetchAbort, context: w, forceRefresh: y = false, status: l, signal: S } = e;
      if (l && (l.op = "fetch", l.key = t, y && (l.forceRefresh = true)), !this.#O)
        return l && (l.fetch = "get"), this.#x(t, { allowStale: i, updateAgeOnGet: s, noDeleteOnStaleGet: n, status: l });
      let _ = { allowStale: i, updateAgeOnGet: s, noDeleteOnStaleGet: n, ttl: o, noDisposeOnSet: r, size: h, sizeCalculation: a, noUpdateTTL: d, noDeleteOnFetchRejection: f, allowStaleOnFetchRejection: p, allowStaleOnFetchAbort: T, ignoreFetchAbort: m, status: l, signal: S }, b = this.#s.get(t);
      if (b === undefined) {
        l && (l.fetch = "miss");
        let g = this.#P(t, b, _, w);
        return g.__returned = g;
      } else {
        let g = this.#t[b];
        if (this.#e(g)) {
          let E = i && g.__staleWhileFetching !== undefined;
          return l && (l.fetch = "inflight", E && (l.returnedStale = true)), E ? g.__staleWhileFetching : g.__returned = g;
        }
        let A = this.#p(b);
        if (!y && !A)
          return l && (l.fetch = "hit"), this.#L(b), s && this.#R(b), l && this.#E(l, b), g;
        let v = this.#P(t, b, _, w), z = v.__staleWhileFetching !== undefined && i;
        return l && (l.fetch = A ? "stale" : "refresh", z && A && (l.returnedStale = true)), z ? v.__staleWhileFetching : v.__returned = v;
      }
    }
    forceFetch(t, e = {}) {
      let i = u.tracing.hasSubscribers, { status: s = D() ? {} : undefined } = e;
      e.status = s, s && e.context && (s.context = e.context);
      let n = this.#K(t, e);
      return s && D() && i && (s.trace = true, u.tracing.tracePromise(() => n, s).catch(() => {})), n;
    }
    async#K(t, e = {}) {
      let i = await this.#q(t, e);
      if (i === undefined)
        throw new Error("fetch() returned undefined");
      return i;
    }
    memo(t, e = {}) {
      let { status: i = u.metrics.hasSubscribers ? {} : undefined } = e;
      e.status = i, i && (i.op = "memo", i.key = t, e.context && (i.context = e.context));
      let s = this.#Q(t, e);
      return i && (i.value = s), u.metrics.hasSubscribers && u.metrics.publish(i), s;
    }
    #Q(t, e = {}) {
      let i = this.#j;
      if (!i)
        throw new Error("no memoMethod provided to constructor");
      let { context: s, status: n, forceRefresh: o, ...r } = e;
      n && o && (n.forceRefresh = true);
      let h = this.#x(t, r), a = o || h === undefined;
      if (n && (n.memo = a ? "miss" : "hit", a || (n.value = h)), !a)
        return h;
      let d = i(t, h, { options: r, context: s });
      return n && (n.value = d), this.#W(t, d, r), d;
    }
    get(t, e = {}) {
      let { status: i = u.metrics.hasSubscribers ? {} : undefined } = e;
      e.status = i, i && (i.op = "get", i.key = t);
      let s = this.#x(t, e);
      return i && (s !== undefined && (i.value = s), u.metrics.hasSubscribers && u.metrics.publish(i)), s;
    }
    #x(t, e = {}) {
      let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: o } = e, r = this.#s.get(t);
      if (r === undefined) {
        o && (o.get = "miss");
        return;
      }
      let h = this.#t[r], a = this.#e(h);
      return o && this.#E(o, r), this.#p(r) ? a ? (o && (o.get = "stale-fetching"), i && h.__staleWhileFetching !== undefined ? (o && (o.returnedStale = true), h.__staleWhileFetching) : undefined) : (n || this.#z(t, "expire"), o && (o.get = "stale"), i ? (o && (o.returnedStale = true), h) : undefined) : (o && (o.get = a ? "fetching" : "hit"), this.#L(r), s && this.#R(r), a ? h.__staleWhileFetching : h);
    }
    #B(t, e) {
      this.#u[e] = t, this.#l[t] = e;
    }
    #L(t) {
      t !== this.#h && (t === this.#a ? this.#a = this.#l[t] : this.#B(this.#u[t], this.#l[t]), this.#B(this.#h, t), this.#h = t);
    }
    delete(t) {
      return this.#z(t, "delete");
    }
    #z(t, e) {
      u.metrics.hasSubscribers && u.metrics.publish({ op: "delete", delete: e, key: t });
      let i = false;
      if (this.#n !== 0) {
        let s = this.#s.get(t);
        if (s !== undefined)
          if (this.#g?.[s] && (clearTimeout(this.#g?.[s]), this.#g[s] = undefined), i = true, this.#n === 1)
            this.#$(e);
          else {
            this.#C(s);
            let n = this.#t[s];
            if (this.#e(n) ? n.__abortController.abort(new Error("deleted")) : (this.#T || this.#f) && (this.#T && this.#m?.(n, t, e), this.#f && this.#r?.push([n, t, e])), this.#s.delete(t), this.#i[s] = undefined, this.#t[s] = undefined, s === this.#h)
              this.#h = this.#u[s];
            else if (s === this.#a)
              this.#a = this.#l[s];
            else {
              let o = this.#u[s];
              this.#l[o] = this.#l[s];
              let r = this.#l[s];
              this.#u[r] = this.#u[s];
            }
            this.#n--, this.#y.push(s);
          }
      }
      if (this.#f && this.#r?.length) {
        let s = this.#r, n;
        for (;n = s?.shift(); )
          this.#w?.(...n);
      }
      return i;
    }
    clear() {
      return this.#$("delete");
    }
    #$(t) {
      for (let e of this.#v({ allowStale: true })) {
        let i = this.#t[e];
        if (this.#e(i))
          i.__abortController.abort(new Error("deleted"));
        else {
          let s = this.#i[e];
          this.#T && this.#m?.(i, s, t), this.#f && this.#r?.push([i, s, t]);
        }
      }
      if (this.#s.clear(), this.#t.fill(undefined), this.#i.fill(undefined), this.#d && this.#F) {
        this.#d.fill(0), this.#F.fill(0);
        for (let e of this.#g ?? [])
          e !== undefined && clearTimeout(e);
        this.#g?.fill(undefined);
      }
      if (this.#_ && this.#_.fill(0), this.#a = 0, this.#h = 0, this.#y.length = 0, this.#b = 0, this.#n = 0, this.#f && this.#r) {
        let e = this.#r, i;
        for (;i = e?.shift(); )
          this.#w?.(...i);
      }
    }
  };
  exports.LRUCache = x;
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/memoization.js
var require_memoization = __commonJS((exports, module) => {
  var { LRUCache } = require_index_min();
  var MEMOIZED = new LRUCache({
    max: 500,
    maxSize: 50 * 1024 * 1024,
    ttl: 3 * 60 * 1000,
    sizeCalculation: (entry, key) => key.startsWith("key:") ? entry.data.length : entry.length
  });
  exports.clearMemoized = clearMemoized;
  function clearMemoized() {
    const old = {};
    MEMOIZED.forEach((v, k) => {
      old[k] = v;
    });
    MEMOIZED.clear();
    return old;
  }
  exports.put = put;
  function put(cache, entry, data, opts) {
    pickMem(opts).set(`key:${cache}:${entry.key}`, { entry, data });
    putDigest(cache, entry.integrity, data, opts);
  }
  exports.put.byDigest = putDigest;
  function putDigest(cache, integrity, data, opts) {
    pickMem(opts).set(`digest:${cache}:${integrity}`, data);
  }
  exports.get = get;
  function get(cache, key, opts) {
    return pickMem(opts).get(`key:${cache}:${key}`);
  }
  exports.get.byDigest = getDigest;
  function getDigest(cache, integrity, opts) {
    return pickMem(opts).get(`digest:${cache}:${integrity}`);
  }

  class ObjProxy {
    constructor(obj) {
      this.obj = obj;
    }
    get(key) {
      return this.obj[key];
    }
    set(key, val) {
      this.obj[key] = val;
    }
  }
  function pickMem(opts) {
    if (!opts || !opts.memoize) {
      return MEMOIZED;
    } else if (opts.memoize.get && opts.memoize.set) {
      return opts.memoize;
    } else if (typeof opts.memoize === "object") {
      return new ObjProxy(opts.memoize);
    } else {
      return MEMOIZED;
    }
  }
});

// node_modules/.bun/fs-minipass@3.0.3/node_modules/fs-minipass/lib/index.js
var require_lib3 = __commonJS((exports) => {
  var { Minipass } = require_commonjs();
  var EE = __require("events").EventEmitter;
  var fs = __require("fs");
  var writev = fs.writev;
  var _autoClose = Symbol("_autoClose");
  var _close = Symbol("_close");
  var _ended = Symbol("_ended");
  var _fd = Symbol("_fd");
  var _finished = Symbol("_finished");
  var _flags = Symbol("_flags");
  var _flush = Symbol("_flush");
  var _handleChunk = Symbol("_handleChunk");
  var _makeBuf = Symbol("_makeBuf");
  var _mode = Symbol("_mode");
  var _needDrain = Symbol("_needDrain");
  var _onerror = Symbol("_onerror");
  var _onopen = Symbol("_onopen");
  var _onread = Symbol("_onread");
  var _onwrite = Symbol("_onwrite");
  var _open = Symbol("_open");
  var _path = Symbol("_path");
  var _pos = Symbol("_pos");
  var _queue = Symbol("_queue");
  var _read = Symbol("_read");
  var _readSize = Symbol("_readSize");
  var _reading = Symbol("_reading");
  var _remain = Symbol("_remain");
  var _size = Symbol("_size");
  var _write = Symbol("_write");
  var _writing = Symbol("_writing");
  var _defaultFlag = Symbol("_defaultFlag");
  var _errored = Symbol("_errored");

  class ReadStream extends Minipass {
    constructor(path, opt) {
      opt = opt || {};
      super(opt);
      this.readable = true;
      this.writable = false;
      if (typeof path !== "string") {
        throw new TypeError("path must be a string");
      }
      this[_errored] = false;
      this[_fd] = typeof opt.fd === "number" ? opt.fd : null;
      this[_path] = path;
      this[_readSize] = opt.readSize || 16 * 1024 * 1024;
      this[_reading] = false;
      this[_size] = typeof opt.size === "number" ? opt.size : Infinity;
      this[_remain] = this[_size];
      this[_autoClose] = typeof opt.autoClose === "boolean" ? opt.autoClose : true;
      if (typeof this[_fd] === "number") {
        this[_read]();
      } else {
        this[_open]();
      }
    }
    get fd() {
      return this[_fd];
    }
    get path() {
      return this[_path];
    }
    write() {
      throw new TypeError("this is a readable stream");
    }
    end() {
      throw new TypeError("this is a readable stream");
    }
    [_open]() {
      fs.open(this[_path], "r", (er, fd) => this[_onopen](er, fd));
    }
    [_onopen](er, fd) {
      if (er) {
        this[_onerror](er);
      } else {
        this[_fd] = fd;
        this.emit("open", fd);
        this[_read]();
      }
    }
    [_makeBuf]() {
      return Buffer.allocUnsafe(Math.min(this[_readSize], this[_remain]));
    }
    [_read]() {
      if (!this[_reading]) {
        this[_reading] = true;
        const buf = this[_makeBuf]();
        if (buf.length === 0) {
          return process.nextTick(() => this[_onread](null, 0, buf));
        }
        fs.read(this[_fd], buf, 0, buf.length, null, (er, br, b) => this[_onread](er, br, b));
      }
    }
    [_onread](er, br, buf) {
      this[_reading] = false;
      if (er) {
        this[_onerror](er);
      } else if (this[_handleChunk](br, buf)) {
        this[_read]();
      }
    }
    [_close]() {
      if (this[_autoClose] && typeof this[_fd] === "number") {
        const fd = this[_fd];
        this[_fd] = null;
        fs.close(fd, (er) => er ? this.emit("error", er) : this.emit("close"));
      }
    }
    [_onerror](er) {
      this[_reading] = true;
      this[_close]();
      this.emit("error", er);
    }
    [_handleChunk](br, buf) {
      let ret = false;
      this[_remain] -= br;
      if (br > 0) {
        ret = super.write(br < buf.length ? buf.slice(0, br) : buf);
      }
      if (br === 0 || this[_remain] <= 0) {
        ret = false;
        this[_close]();
        super.end();
      }
      return ret;
    }
    emit(ev, data) {
      switch (ev) {
        case "prefinish":
        case "finish":
          break;
        case "drain":
          if (typeof this[_fd] === "number") {
            this[_read]();
          }
          break;
        case "error":
          if (this[_errored]) {
            return;
          }
          this[_errored] = true;
          return super.emit(ev, data);
        default:
          return super.emit(ev, data);
      }
    }
  }

  class ReadStreamSync extends ReadStream {
    [_open]() {
      let threw = true;
      try {
        this[_onopen](null, fs.openSync(this[_path], "r"));
        threw = false;
      } finally {
        if (threw) {
          this[_close]();
        }
      }
    }
    [_read]() {
      let threw = true;
      try {
        if (!this[_reading]) {
          this[_reading] = true;
          do {
            const buf = this[_makeBuf]();
            const br = buf.length === 0 ? 0 : fs.readSync(this[_fd], buf, 0, buf.length, null);
            if (!this[_handleChunk](br, buf)) {
              break;
            }
          } while (true);
          this[_reading] = false;
        }
        threw = false;
      } finally {
        if (threw) {
          this[_close]();
        }
      }
    }
    [_close]() {
      if (this[_autoClose] && typeof this[_fd] === "number") {
        const fd = this[_fd];
        this[_fd] = null;
        fs.closeSync(fd);
        this.emit("close");
      }
    }
  }

  class WriteStream extends EE {
    constructor(path, opt) {
      opt = opt || {};
      super(opt);
      this.readable = false;
      this.writable = true;
      this[_errored] = false;
      this[_writing] = false;
      this[_ended] = false;
      this[_needDrain] = false;
      this[_queue] = [];
      this[_path] = path;
      this[_fd] = typeof opt.fd === "number" ? opt.fd : null;
      this[_mode] = opt.mode === undefined ? 438 : opt.mode;
      this[_pos] = typeof opt.start === "number" ? opt.start : null;
      this[_autoClose] = typeof opt.autoClose === "boolean" ? opt.autoClose : true;
      const defaultFlag = this[_pos] !== null ? "r+" : "w";
      this[_defaultFlag] = opt.flags === undefined;
      this[_flags] = this[_defaultFlag] ? defaultFlag : opt.flags;
      if (this[_fd] === null) {
        this[_open]();
      }
    }
    emit(ev, data) {
      if (ev === "error") {
        if (this[_errored]) {
          return;
        }
        this[_errored] = true;
      }
      return super.emit(ev, data);
    }
    get fd() {
      return this[_fd];
    }
    get path() {
      return this[_path];
    }
    [_onerror](er) {
      this[_close]();
      this[_writing] = true;
      this.emit("error", er);
    }
    [_open]() {
      fs.open(this[_path], this[_flags], this[_mode], (er, fd) => this[_onopen](er, fd));
    }
    [_onopen](er, fd) {
      if (this[_defaultFlag] && this[_flags] === "r+" && er && er.code === "ENOENT") {
        this[_flags] = "w";
        this[_open]();
      } else if (er) {
        this[_onerror](er);
      } else {
        this[_fd] = fd;
        this.emit("open", fd);
        if (!this[_writing]) {
          this[_flush]();
        }
      }
    }
    end(buf, enc) {
      if (buf) {
        this.write(buf, enc);
      }
      this[_ended] = true;
      if (!this[_writing] && !this[_queue].length && typeof this[_fd] === "number") {
        this[_onwrite](null, 0);
      }
      return this;
    }
    write(buf, enc) {
      if (typeof buf === "string") {
        buf = Buffer.from(buf, enc);
      }
      if (this[_ended]) {
        this.emit("error", new Error("write() after end()"));
        return false;
      }
      if (this[_fd] === null || this[_writing] || this[_queue].length) {
        this[_queue].push(buf);
        this[_needDrain] = true;
        return false;
      }
      this[_writing] = true;
      this[_write](buf);
      return true;
    }
    [_write](buf) {
      fs.write(this[_fd], buf, 0, buf.length, this[_pos], (er, bw) => this[_onwrite](er, bw));
    }
    [_onwrite](er, bw) {
      if (er) {
        this[_onerror](er);
      } else {
        if (this[_pos] !== null) {
          this[_pos] += bw;
        }
        if (this[_queue].length) {
          this[_flush]();
        } else {
          this[_writing] = false;
          if (this[_ended] && !this[_finished]) {
            this[_finished] = true;
            this[_close]();
            this.emit("finish");
          } else if (this[_needDrain]) {
            this[_needDrain] = false;
            this.emit("drain");
          }
        }
      }
    }
    [_flush]() {
      if (this[_queue].length === 0) {
        if (this[_ended]) {
          this[_onwrite](null, 0);
        }
      } else if (this[_queue].length === 1) {
        this[_write](this[_queue].pop());
      } else {
        const iovec = this[_queue];
        this[_queue] = [];
        writev(this[_fd], iovec, this[_pos], (er, bw) => this[_onwrite](er, bw));
      }
    }
    [_close]() {
      if (this[_autoClose] && typeof this[_fd] === "number") {
        const fd = this[_fd];
        this[_fd] = null;
        fs.close(fd, (er) => er ? this.emit("error", er) : this.emit("close"));
      }
    }
  }

  class WriteStreamSync extends WriteStream {
    [_open]() {
      let fd;
      if (this[_defaultFlag] && this[_flags] === "r+") {
        try {
          fd = fs.openSync(this[_path], this[_flags], this[_mode]);
        } catch (er) {
          if (er.code === "ENOENT") {
            this[_flags] = "w";
            return this[_open]();
          } else {
            throw er;
          }
        }
      } else {
        fd = fs.openSync(this[_path], this[_flags], this[_mode]);
      }
      this[_onopen](null, fd);
    }
    [_close]() {
      if (this[_autoClose] && typeof this[_fd] === "number") {
        const fd = this[_fd];
        this[_fd] = null;
        fs.closeSync(fd);
        this.emit("close");
      }
    }
    [_write](buf) {
      let threw = true;
      try {
        this[_onwrite](null, fs.writeSync(this[_fd], buf, 0, buf.length, this[_pos]));
        threw = false;
      } finally {
        if (threw) {
          try {
            this[_close]();
          } catch {}
        }
      }
    }
  }
  exports.ReadStream = ReadStream;
  exports.ReadStreamSync = ReadStreamSync;
  exports.WriteStream = WriteStream;
  exports.WriteStreamSync = WriteStreamSync;
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/content/read.js
var require_read = __commonJS((exports, module) => {
  var fs = __require("fs/promises");
  var fsm = require_lib3();
  var ssri = require_lib();
  var contentPath = require_path();
  var Pipeline = require_minipass_pipeline();
  module.exports = read;
  var MAX_SINGLE_READ_SIZE = 64 * 1024 * 1024;
  async function read(cache, integrity, opts = {}) {
    const { size } = opts;
    const { stat, cpath, sri } = await withContentSri(cache, integrity, async (cpath2, sri2) => {
      const stat2 = size ? { size } : await fs.stat(cpath2);
      return { stat: stat2, cpath: cpath2, sri: sri2 };
    });
    if (stat.size > MAX_SINGLE_READ_SIZE) {
      return readPipeline(cpath, stat.size, sri, new Pipeline).concat();
    }
    const data = await fs.readFile(cpath, { encoding: null });
    if (stat.size !== data.length) {
      throw sizeError(stat.size, data.length);
    }
    if (!ssri.checkData(data, sri)) {
      throw integrityError(sri, cpath);
    }
    return data;
  }
  var readPipeline = (cpath, size, sri, stream) => {
    stream.push(new fsm.ReadStream(cpath, {
      size,
      readSize: MAX_SINGLE_READ_SIZE
    }), ssri.integrityStream({
      integrity: sri,
      size
    }));
    return stream;
  };
  module.exports.stream = readStream;
  module.exports.readStream = readStream;
  function readStream(cache, integrity, opts = {}) {
    const { size } = opts;
    const stream = new Pipeline;
    Promise.resolve().then(async () => {
      const { stat, cpath, sri } = await withContentSri(cache, integrity, async (cpath2, sri2) => {
        const stat2 = size ? { size } : await fs.stat(cpath2);
        return { stat: stat2, cpath: cpath2, sri: sri2 };
      });
      return readPipeline(cpath, stat.size, sri, stream);
    }).catch((err) => stream.emit("error", err));
    return stream;
  }
  module.exports.copy = copy;
  function copy(cache, integrity, dest) {
    return withContentSri(cache, integrity, (cpath) => {
      return fs.copyFile(cpath, dest);
    });
  }
  module.exports.hasContent = hasContent;
  async function hasContent(cache, integrity) {
    if (!integrity) {
      return false;
    }
    try {
      return await withContentSri(cache, integrity, async (cpath, sri) => {
        const stat = await fs.stat(cpath);
        return { size: stat.size, sri, stat };
      });
    } catch (err) {
      if (err.code === "ENOENT") {
        return false;
      }
      if (err.code === "EPERM") {
        if (process.platform !== "win32") {
          throw err;
        } else {
          return false;
        }
      }
    }
  }
  async function withContentSri(cache, integrity, fn) {
    const sri = ssri.parse(integrity);
    const algo = sri.pickAlgorithm();
    const digests = sri[algo];
    if (digests.length <= 1) {
      const cpath = contentPath(cache, digests[0]);
      return fn(cpath, digests[0]);
    } else {
      const results = await Promise.all(digests.map(async (meta) => {
        try {
          return await withContentSri(cache, meta, fn);
        } catch (err) {
          if (err.code === "ENOENT") {
            return Object.assign(new Error("No matching content found for " + sri.toString()), { code: "ENOENT" });
          }
          return err;
        }
      }));
      const result = results.find((r) => !(r instanceof Error));
      if (result) {
        return result;
      }
      const enoentError = results.find((r) => r.code === "ENOENT");
      if (enoentError) {
        throw enoentError;
      }
      throw results.find((r) => r instanceof Error);
    }
  }
  function sizeError(expected, found) {
    const err = new Error(`Bad data size: expected inserted data to be ${expected} bytes, but got ${found} instead`);
    err.expected = expected;
    err.found = found;
    err.code = "EBADSIZE";
    return err;
  }
  function integrityError(sri, path) {
    const err = new Error(`Integrity verification failed for ${sri} (${path})`);
    err.code = "EINTEGRITY";
    err.sri = sri;
    err.path = path;
    return err;
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/get.js
var require_get = __commonJS((exports, module) => {
  var Collect = require_minipass_collect();
  var { Minipass } = require_commonjs();
  var Pipeline = require_minipass_pipeline();
  var index = require_entry_index();
  var memo = require_memoization();
  var read = require_read();
  async function getData(cache, key, opts = {}) {
    const { integrity, memoize, size } = opts;
    const memoized = memo.get(cache, key, opts);
    if (memoized && memoize !== false) {
      return {
        metadata: memoized.entry.metadata,
        data: memoized.data,
        integrity: memoized.entry.integrity,
        size: memoized.entry.size
      };
    }
    const entry = await index.find(cache, key, opts);
    if (!entry) {
      throw new index.NotFoundError(cache, key);
    }
    const data = await read(cache, entry.integrity, { integrity, size });
    if (memoize) {
      memo.put(cache, entry, data, opts);
    }
    return {
      data,
      metadata: entry.metadata,
      size: entry.size,
      integrity: entry.integrity
    };
  }
  module.exports = getData;
  async function getDataByDigest(cache, key, opts = {}) {
    const { integrity, memoize, size } = opts;
    const memoized = memo.get.byDigest(cache, key, opts);
    if (memoized && memoize !== false) {
      return memoized;
    }
    const res = await read(cache, key, { integrity, size });
    if (memoize) {
      memo.put.byDigest(cache, key, res, opts);
    }
    return res;
  }
  module.exports.byDigest = getDataByDigest;
  var getMemoizedStream = (memoized) => {
    const stream = new Minipass;
    stream.on("newListener", function(ev, cb) {
      ev === "metadata" && cb(memoized.entry.metadata);
      ev === "integrity" && cb(memoized.entry.integrity);
      ev === "size" && cb(memoized.entry.size);
    });
    stream.end(memoized.data);
    return stream;
  };
  function getStream(cache, key, opts = {}) {
    const { memoize, size } = opts;
    const memoized = memo.get(cache, key, opts);
    if (memoized && memoize !== false) {
      return getMemoizedStream(memoized);
    }
    const stream = new Pipeline;
    Promise.resolve().then(async () => {
      const entry = await index.find(cache, key);
      if (!entry) {
        throw new index.NotFoundError(cache, key);
      }
      stream.emit("metadata", entry.metadata);
      stream.emit("integrity", entry.integrity);
      stream.emit("size", entry.size);
      stream.on("newListener", function(ev, cb) {
        ev === "metadata" && cb(entry.metadata);
        ev === "integrity" && cb(entry.integrity);
        ev === "size" && cb(entry.size);
      });
      const src = read.readStream(cache, entry.integrity, { ...opts, size: typeof size !== "number" ? entry.size : size });
      if (memoize) {
        const memoStream = new Collect.PassThrough;
        memoStream.on("collect", (data) => memo.put(cache, entry, data, opts));
        stream.unshift(memoStream);
      }
      stream.unshift(src);
      return stream;
    }).catch((err) => stream.emit("error", err));
    return stream;
  }
  module.exports.stream = getStream;
  function getStreamDigest(cache, integrity, opts = {}) {
    const { memoize } = opts;
    const memoized = memo.get.byDigest(cache, integrity, opts);
    if (memoized && memoize !== false) {
      const stream = new Minipass;
      stream.end(memoized);
      return stream;
    } else {
      const stream = read.readStream(cache, integrity, opts);
      if (!memoize) {
        return stream;
      }
      const memoStream = new Collect.PassThrough;
      memoStream.on("collect", (data) => memo.put.byDigest(cache, integrity, data, opts));
      return new Pipeline(stream, memoStream);
    }
  }
  module.exports.stream.byDigest = getStreamDigest;
  function info(cache, key, opts = {}) {
    const { memoize } = opts;
    const memoized = memo.get(cache, key, opts);
    if (memoized && memoize !== false) {
      return Promise.resolve(memoized.entry);
    } else {
      return index.find(cache, key);
    }
  }
  module.exports.info = info;
  async function copy(cache, key, dest, opts = {}) {
    const entry = await index.find(cache, key, opts);
    if (!entry) {
      throw new index.NotFoundError(cache, key);
    }
    await read.copy(cache, entry.integrity, dest, opts);
    return {
      metadata: entry.metadata,
      size: entry.size,
      integrity: entry.integrity
    };
  }
  module.exports.copy = copy;
  async function copyByDigest(cache, key, dest, opts = {}) {
    await read.copy(cache, key, dest, opts);
    return key;
  }
  module.exports.copy.byDigest = copyByDigest;
  module.exports.hasContent = read.hasContent;
});

// node_modules/.bun/minipass-flush@1.0.7/node_modules/minipass-flush/index.js
var require_minipass_flush = __commonJS((exports, module) => {
  var Minipass = require_minipass();
  var _flush = Symbol("_flush");
  var _flushed = Symbol("_flushed");
  var _flushing = Symbol("_flushing");

  class Flush extends Minipass {
    constructor(opt = {}) {
      if (typeof opt === "function")
        opt = { flush: opt };
      super(opt);
      if (typeof opt.flush !== "function" && typeof this.flush !== "function")
        throw new TypeError("must provide flush function in options");
      this[_flush] = opt.flush || this.flush;
    }
    emit(ev, ...data) {
      if (ev !== "end" && ev !== "finish" || this[_flushed])
        return super.emit(ev, ...data);
      if (this[_flushing])
        return;
      this[_flushing] = true;
      const afterFlush = (er) => {
        this[_flushed] = true;
        er ? super.emit("error", er) : super.emit("end");
      };
      const ret = this[_flush](afterFlush);
      if (ret && ret.then)
        ret.then(() => afterFlush(), (er) => afterFlush(er));
    }
  }
  module.exports = Flush;
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/content/write.js
var require_write = __commonJS((exports, module) => {
  var events = __require("events");
  var contentPath = require_path();
  var fs = __require("fs/promises");
  var { moveFile } = require_lib2();
  var { Minipass } = require_commonjs();
  var Pipeline = require_minipass_pipeline();
  var Flush = require_minipass_flush();
  var path = __require("path");
  var ssri = require_lib();
  var { tmpName } = require_tmp();
  var fsm = require_lib3();
  module.exports = write;
  var moveOperations = new Map;
  async function write(cache, data, opts = {}) {
    const { algorithms, size, integrity } = opts;
    if (typeof size === "number" && data.length !== size) {
      throw sizeError(size, data.length);
    }
    const sri = ssri.fromData(data, algorithms ? { algorithms } : {});
    if (integrity && !ssri.checkData(data, integrity, opts)) {
      throw checksumError(integrity, sri);
    }
    for (const algo in sri) {
      const tmp = await makeTmp(cache, opts);
      const hash = sri[algo].toString();
      try {
        await fs.writeFile(tmp.target, data, { flag: "wx" });
        await moveToDestination(tmp, cache, hash, opts);
      } finally {
        if (!tmp.moved) {
          await fs.rm(tmp.target, { recursive: true, force: true });
        }
      }
    }
    return { integrity: sri, size: data.length };
  }
  module.exports.stream = writeStream;

  class CacacheWriteStream extends Flush {
    constructor(cache, opts) {
      super();
      this.opts = opts;
      this.cache = cache;
      this.inputStream = new Minipass;
      this.inputStream.on("error", (er) => this.emit("error", er));
      this.inputStream.on("drain", () => this.emit("drain"));
      this.handleContentP = null;
    }
    write(chunk, encoding, cb) {
      if (!this.handleContentP) {
        this.handleContentP = handleContent(this.inputStream, this.cache, this.opts);
        this.handleContentP.catch((error) => this.emit("error", error));
      }
      return this.inputStream.write(chunk, encoding, cb);
    }
    flush(cb) {
      this.inputStream.end(() => {
        if (!this.handleContentP) {
          const e = new Error("Cache input stream was empty");
          e.code = "ENODATA";
          return Promise.reject(e).catch(cb);
        }
        this.handleContentP.then((res) => {
          res.integrity && this.emit("integrity", res.integrity);
          res.size !== null && this.emit("size", res.size);
          cb();
        }, (er) => cb(er));
      });
    }
  }
  function writeStream(cache, opts = {}) {
    return new CacacheWriteStream(cache, opts);
  }
  async function handleContent(inputStream, cache, opts) {
    const tmp = await makeTmp(cache, opts);
    try {
      const res = await pipeToTmp(inputStream, cache, tmp.target, opts);
      await moveToDestination(tmp, cache, res.integrity, opts);
      return res;
    } finally {
      if (!tmp.moved) {
        await fs.rm(tmp.target, { recursive: true, force: true });
      }
    }
  }
  async function pipeToTmp(inputStream, cache, tmpTarget, opts) {
    const outStream = new fsm.WriteStream(tmpTarget, {
      flags: "wx"
    });
    if (opts.integrityEmitter) {
      const [integrity2, size2] = await Promise.all([
        events.once(opts.integrityEmitter, "integrity").then((res) => res[0]),
        events.once(opts.integrityEmitter, "size").then((res) => res[0]),
        new Pipeline(inputStream, outStream).promise()
      ]);
      return { integrity: integrity2, size: size2 };
    }
    let integrity;
    let size;
    const hashStream = ssri.integrityStream({
      integrity: opts.integrity,
      algorithms: opts.algorithms,
      size: opts.size
    });
    hashStream.on("integrity", (i) => {
      integrity = i;
    });
    hashStream.on("size", (s) => {
      size = s;
    });
    const pipeline = new Pipeline(inputStream, hashStream, outStream);
    await pipeline.promise();
    return { integrity, size };
  }
  async function makeTmp(cache, opts) {
    const tmpTarget = tmpName(cache, opts.tmpPrefix);
    await fs.mkdir(path.dirname(tmpTarget), { recursive: true });
    return {
      target: tmpTarget,
      moved: false
    };
  }
  async function moveToDestination(tmp, cache, sri) {
    const destination = contentPath(cache, sri);
    const destDir = path.dirname(destination);
    if (moveOperations.has(destination)) {
      return moveOperations.get(destination);
    }
    moveOperations.set(destination, fs.mkdir(destDir, { recursive: true }).then(async () => {
      await moveFile(tmp.target, destination, { overwrite: false });
      tmp.moved = true;
      return tmp.moved;
    }).catch((err) => {
      if (!err.message.startsWith("The destination file exists")) {
        throw Object.assign(err, { code: "EEXIST" });
      }
    }).finally(() => {
      moveOperations.delete(destination);
    }));
    return moveOperations.get(destination);
  }
  function sizeError(expected, found) {
    const err = new Error(`Bad data size: expected inserted data to be ${expected} bytes, but got ${found} instead`);
    err.expected = expected;
    err.found = found;
    err.code = "EBADSIZE";
    return err;
  }
  function checksumError(expected, found) {
    const err = new Error(`Integrity check failed:
  Wanted: ${expected}
   Found: ${found}`);
    err.code = "EINTEGRITY";
    err.expected = expected;
    err.found = found;
    return err;
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/put.js
var require_put = __commonJS((exports, module) => {
  var index = require_entry_index();
  var memo = require_memoization();
  var write = require_write();
  var Flush = require_minipass_flush();
  var { PassThrough } = require_minipass_collect();
  var Pipeline = require_minipass_pipeline();
  var putOpts = (opts) => ({
    algorithms: ["sha512"],
    ...opts
  });
  module.exports = putData;
  async function putData(cache, key, data, opts = {}) {
    const { memoize } = opts;
    opts = putOpts(opts);
    const res = await write(cache, data, opts);
    const entry = await index.insert(cache, key, res.integrity, { ...opts, size: res.size });
    if (memoize) {
      memo.put(cache, entry, data, opts);
    }
    return res.integrity;
  }
  module.exports.stream = putStream;
  function putStream(cache, key, opts = {}) {
    const { memoize } = opts;
    opts = putOpts(opts);
    let integrity;
    let size;
    let error;
    let memoData;
    const pipeline = new Pipeline;
    if (memoize) {
      const memoizer = new PassThrough().on("collect", (data) => {
        memoData = data;
      });
      pipeline.push(memoizer);
    }
    const contentStream = write.stream(cache, opts).on("integrity", (int) => {
      integrity = int;
    }).on("size", (s) => {
      size = s;
    }).on("error", (err) => {
      error = err;
    });
    pipeline.push(contentStream);
    pipeline.push(new Flush({
      async flush() {
        if (!error) {
          const entry = await index.insert(cache, key, integrity, { ...opts, size });
          if (memoize && memoData) {
            memo.put(cache, entry, memoData, opts);
          }
          pipeline.emit("integrity", integrity);
          pipeline.emit("size", size);
        }
      }
    }));
    return pipeline;
  }
});

// node_modules/.bun/glob@13.0.6/node_modules/glob/dist/commonjs/index.min.js
var require_index_min2 = __commonJS((exports) => {
  var R = (n, t) => () => (t || n((t = { exports: {} }).exports, t), t.exports);
  var Ge = R((Y) => {
    Object.defineProperty(Y, "__esModule", { value: true });
    Y.range = Y.balanced = undefined;
    var Gs = (n, t, e) => {
      let s = n instanceof RegExp ? Ie(n, e) : n, i = t instanceof RegExp ? Ie(t, e) : t, r = s !== null && i != null && (0, Y.range)(s, i, e);
      return r && { start: r[0], end: r[1], pre: e.slice(0, r[0]), body: e.slice(r[0] + s.length, r[1]), post: e.slice(r[1] + i.length) };
    };
    Y.balanced = Gs;
    var Ie = (n, t) => {
      let e = t.match(n);
      return e ? e[0] : null;
    }, zs = (n, t, e) => {
      let s, i, r, h, o, a = e.indexOf(n), l = e.indexOf(t, a + 1), f = a;
      if (a >= 0 && l > 0) {
        if (n === t)
          return [a, l];
        for (s = [], r = e.length;f >= 0 && !o; ) {
          if (f === a)
            s.push(f), a = e.indexOf(n, f + 1);
          else if (s.length === 1) {
            let c = s.pop();
            c !== undefined && (o = [c, l]);
          } else
            i = s.pop(), i !== undefined && i < r && (r = i, h = l), l = e.indexOf(t, f + 1);
          f = a < l && a >= 0 ? a : l;
        }
        s.length && h !== undefined && (o = [r, h]);
      }
      return o;
    };
    Y.range = zs;
  });
  var Ke = R((it) => {
    Object.defineProperty(it, "__esModule", { value: true });
    it.EXPANSION_MAX = undefined;
    it.expand = ei;
    var ze = Ge(), Ue = "\x00SLASH" + Math.random() + "\x00", $e = "\x00OPEN" + Math.random() + "\x00", ue = "\x00CLOSE" + Math.random() + "\x00", qe = "\x00COMMA" + Math.random() + "\x00", He = "\x00PERIOD" + Math.random() + "\x00", Us = new RegExp(Ue, "g"), $s = new RegExp($e, "g"), qs = new RegExp(ue, "g"), Hs = new RegExp(qe, "g"), Vs = new RegExp(He, "g"), Ks = /\\\\/g, Xs = /\\{/g, Ys = /\\}/g, Js = /\\,/g, Zs = /\\./g;
    it.EXPANSION_MAX = 1e5;
    function ce(n) {
      return isNaN(n) ? n.charCodeAt(0) : parseInt(n, 10);
    }
    function Qs(n) {
      return n.replace(Ks, Ue).replace(Xs, $e).replace(Ys, ue).replace(Js, qe).replace(Zs, He);
    }
    function ti(n) {
      return n.replace(Us, "\\").replace($s, "{").replace(qs, "}").replace(Hs, ",").replace(Vs, ".");
    }
    function Ve(n) {
      if (!n)
        return [""];
      let t = [], e = (0, ze.balanced)("{", "}", n);
      if (!e)
        return n.split(",");
      let { pre: s, body: i, post: r } = e, h = s.split(",");
      h[h.length - 1] += "{" + i + "}";
      let o = Ve(r);
      return r.length && (h[h.length - 1] += o.shift(), h.push.apply(h, o)), t.push.apply(t, h), t;
    }
    function ei(n, t = {}) {
      if (!n)
        return [];
      let { max: e = it.EXPANSION_MAX } = t;
      return n.slice(0, 2) === "{}" && (n = "\\{\\}" + n.slice(2)), ht(Qs(n), e, true).map(ti);
    }
    function si(n) {
      return "{" + n + "}";
    }
    function ii(n) {
      return /^-?0\d/.test(n);
    }
    function ri(n, t) {
      return n <= t;
    }
    function ni(n, t) {
      return n >= t;
    }
    function ht(n, t, e) {
      let s = [], i = (0, ze.balanced)("{", "}", n);
      if (!i)
        return [n];
      let r = i.pre, h = i.post.length ? ht(i.post, t, false) : [""];
      if (/\$$/.test(i.pre))
        for (let o = 0;o < h.length && o < t; o++) {
          let a = r + "{" + i.body + "}" + h[o];
          s.push(a);
        }
      else {
        let o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), a = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), l = o || a, f = i.body.indexOf(",") >= 0;
        if (!l && !f)
          return i.post.match(/,(?!,).*\}/) ? (n = i.pre + "{" + i.body + ue + i.post, ht(n, t, true)) : [n];
        let c;
        if (l)
          c = i.body.split(/\.\./);
        else if (c = Ve(i.body), c.length === 1 && c[0] !== undefined && (c = ht(c[0], t, false).map(si), c.length === 1))
          return h.map((u) => i.pre + c[0] + u);
        let d;
        if (l && c[0] !== undefined && c[1] !== undefined) {
          let u = ce(c[0]), m = ce(c[1]), p = Math.max(c[0].length, c[1].length), b = c.length === 3 && c[2] !== undefined ? Math.abs(ce(c[2])) : 1, w = ri;
          m < u && (b *= -1, w = ni);
          let E = c.some(ii);
          d = [];
          for (let y = u;w(y, m); y += b) {
            let S;
            if (a)
              S = String.fromCharCode(y), S === "\\" && (S = "");
            else if (S = String(y), E) {
              let B = p - S.length;
              if (B > 0) {
                let U = new Array(B + 1).join("0");
                y < 0 ? S = "-" + U + S.slice(1) : S = U + S;
              }
            }
            d.push(S);
          }
        } else {
          d = [];
          for (let u = 0;u < c.length; u++)
            d.push.apply(d, ht(c[u], t, false));
        }
        for (let u = 0;u < d.length; u++)
          for (let m = 0;m < h.length && s.length < t; m++) {
            let p = r + d[u] + h[m];
            (!e || l || p) && s.push(p);
          }
      }
      return s;
    }
  });
  var Xe = R((Ct) => {
    Object.defineProperty(Ct, "__esModule", { value: true });
    Ct.assertValidPattern = undefined;
    var hi = 1024 * 64, oi = (n) => {
      if (typeof n != "string")
        throw new TypeError("invalid pattern");
      if (n.length > hi)
        throw new TypeError("pattern is too long");
    };
    Ct.assertValidPattern = oi;
  });
  var Je = R((Rt) => {
    Object.defineProperty(Rt, "__esModule", { value: true });
    Rt.parseClass = undefined;
    var ai = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true], "[:alpha:]": ["\\p{L}\\p{Nl}", true], "[:ascii:]": ["\\x00-\\x7f", false], "[:blank:]": ["\\p{Zs}\\t", true], "[:cntrl:]": ["\\p{Cc}", true], "[:digit:]": ["\\p{Nd}", true], "[:graph:]": ["\\p{Z}\\p{C}", true, true], "[:lower:]": ["\\p{Ll}", true], "[:print:]": ["\\p{C}", true], "[:punct:]": ["\\p{P}", true], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true], "[:upper:]": ["\\p{Lu}", true], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true], "[:xdigit:]": ["A-Fa-f0-9", false] }, ot = (n) => n.replace(/[[\]\\-]/g, "\\$&"), li = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Ye = (n) => n.join(""), ci = (n, t) => {
      let e = t;
      if (n.charAt(e) !== "[")
        throw new Error("not in a brace expression");
      let s = [], i = [], r = e + 1, h = false, o = false, a = false, l = false, f = e, c = "";
      t:
        for (;r < n.length; ) {
          let p = n.charAt(r);
          if ((p === "!" || p === "^") && r === e + 1) {
            l = true, r++;
            continue;
          }
          if (p === "]" && h && !a) {
            f = r + 1;
            break;
          }
          if (h = true, p === "\\" && !a) {
            a = true, r++;
            continue;
          }
          if (p === "[" && !a) {
            for (let [b, [w, v, E]] of Object.entries(ai))
              if (n.startsWith(b, r)) {
                if (c)
                  return ["$.", false, n.length - e, true];
                r += b.length, E ? i.push(w) : s.push(w), o = o || v;
                continue t;
              }
          }
          if (a = false, c) {
            p > c ? s.push(ot(c) + "-" + ot(p)) : p === c && s.push(ot(p)), c = "", r++;
            continue;
          }
          if (n.startsWith("-]", r + 1)) {
            s.push(ot(p + "-")), r += 2;
            continue;
          }
          if (n.startsWith("-", r + 1)) {
            c = p, r += 2;
            continue;
          }
          s.push(ot(p)), r++;
        }
      if (f < r)
        return ["", false, 0, false];
      if (!s.length && !i.length)
        return ["$.", false, n.length - e, true];
      if (i.length === 0 && s.length === 1 && /^\\?.$/.test(s[0]) && !l) {
        let p = s[0].length === 2 ? s[0].slice(-1) : s[0];
        return [li(p), false, f - e, false];
      }
      let d = "[" + (l ? "^" : "") + Ye(s) + "]", u = "[" + (l ? "" : "^") + Ye(i) + "]";
      return [s.length && i.length ? "(" + d + "|" + u + ")" : s.length ? d : u, o, f - e, true];
    };
    Rt.parseClass = ci;
  });
  var kt = R((At) => {
    Object.defineProperty(At, "__esModule", { value: true });
    At.unescape = undefined;
    var ui = (n, { windowsPathsNoEscape: t = false, magicalBraces: e = true } = {}) => e ? t ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1") : t ? n.replace(/\[([^\/\\{}])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\{}])\]/g, "$1$2").replace(/\\([^\/{}])/g, "$1");
    At.unescape = ui;
  });
  var pe = R((Dt) => {
    Object.defineProperty(Dt, "__esModule", { value: true });
    Dt.AST = undefined;
    var fi = Je(), Mt = kt(), di = new Set(["!", "?", "+", "*", "@"]), Ze = (n) => di.has(n), pi = "(?!(?:^|/)\\.\\.?(?:$|/))", Pt = "(?!\\.)", mi = new Set(["[", "."]), gi = new Set(["..", "."]), wi = new Set("().*{}+?[]^$\\!"), bi = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), de = "[^/]", Qe = de + "*?", ts = de + "+?", fe = class n {
      type;
      #t;
      #s;
      #n = false;
      #r = [];
      #h;
      #S;
      #w;
      #c = false;
      #o;
      #f;
      #u = false;
      constructor(t, e, s = {}) {
        this.type = t, t && (this.#s = true), this.#h = e, this.#t = this.#h ? this.#h.#t : this, this.#o = this.#t === this ? s : this.#t.#o, this.#w = this.#t === this ? [] : this.#t.#w, t === "!" && !this.#t.#c && this.#w.push(this), this.#S = this.#h ? this.#h.#r.length : 0;
      }
      get hasMagic() {
        if (this.#s !== undefined)
          return this.#s;
        for (let t of this.#r)
          if (typeof t != "string" && (t.type || t.hasMagic))
            return this.#s = true;
        return this.#s;
      }
      toString() {
        return this.#f !== undefined ? this.#f : this.type ? this.#f = this.type + "(" + this.#r.map((t) => String(t)).join("|") + ")" : this.#f = this.#r.map((t) => String(t)).join("");
      }
      #a() {
        if (this !== this.#t)
          throw new Error("should only call on root");
        if (this.#c)
          return this;
        this.toString(), this.#c = true;
        let t;
        for (;t = this.#w.pop(); ) {
          if (t.type !== "!")
            continue;
          let e = t, s = e.#h;
          for (;s; ) {
            for (let i = e.#S + 1;!s.type && i < s.#r.length; i++)
              for (let r of t.#r) {
                if (typeof r == "string")
                  throw new Error("string part in extglob AST??");
                r.copyIn(s.#r[i]);
              }
            e = s, s = e.#h;
          }
        }
        return this;
      }
      push(...t) {
        for (let e of t)
          if (e !== "") {
            if (typeof e != "string" && !(e instanceof n && e.#h === this))
              throw new Error("invalid part: " + e);
            this.#r.push(e);
          }
      }
      toJSON() {
        let t = this.type === null ? this.#r.slice().map((e) => typeof e == "string" ? e : e.toJSON()) : [this.type, ...this.#r.map((e) => e.toJSON())];
        return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === this.#t || this.#t.#c && this.#h?.type === "!") && t.push({}), t;
      }
      isStart() {
        if (this.#t === this)
          return true;
        if (!this.#h?.isStart())
          return false;
        if (this.#S === 0)
          return true;
        let t = this.#h;
        for (let e = 0;e < this.#S; e++) {
          let s = t.#r[e];
          if (!(s instanceof n && s.type === "!"))
            return false;
        }
        return true;
      }
      isEnd() {
        if (this.#t === this || this.#h?.type === "!")
          return true;
        if (!this.#h?.isEnd())
          return false;
        if (!this.type)
          return this.#h?.isEnd();
        let t = this.#h ? this.#h.#r.length : 0;
        return this.#S === t - 1;
      }
      copyIn(t) {
        typeof t == "string" ? this.push(t) : this.push(t.clone(this));
      }
      clone(t) {
        let e = new n(this.type, t);
        for (let s of this.#r)
          e.copyIn(s);
        return e;
      }
      static #i(t, e, s, i) {
        let r = false, h = false, o = -1, a = false;
        if (e.type === null) {
          let u = s, m = "";
          for (;u < t.length; ) {
            let p = t.charAt(u++);
            if (r || p === "\\") {
              r = !r, m += p;
              continue;
            }
            if (h) {
              u === o + 1 ? (p === "^" || p === "!") && (a = true) : p === "]" && !(u === o + 2 && a) && (h = false), m += p;
              continue;
            } else if (p === "[") {
              h = true, o = u, a = false, m += p;
              continue;
            }
            if (!i.noext && Ze(p) && t.charAt(u) === "(") {
              e.push(m), m = "";
              let b = new n(p, e);
              u = n.#i(t, b, u, i), e.push(b);
              continue;
            }
            m += p;
          }
          return e.push(m), u;
        }
        let l = s + 1, f = new n(null, e), c = [], d = "";
        for (;l < t.length; ) {
          let u = t.charAt(l++);
          if (r || u === "\\") {
            r = !r, d += u;
            continue;
          }
          if (h) {
            l === o + 1 ? (u === "^" || u === "!") && (a = true) : u === "]" && !(l === o + 2 && a) && (h = false), d += u;
            continue;
          } else if (u === "[") {
            h = true, o = l, a = false, d += u;
            continue;
          }
          if (Ze(u) && t.charAt(l) === "(") {
            f.push(d), d = "";
            let m = new n(u, f);
            f.push(m), l = n.#i(t, m, l, i);
            continue;
          }
          if (u === "|") {
            f.push(d), d = "", c.push(f), f = new n(null, e);
            continue;
          }
          if (u === ")")
            return d === "" && e.#r.length === 0 && (e.#u = true), f.push(d), d = "", e.push(...c, f), l;
          d += u;
        }
        return e.type = null, e.#s = undefined, e.#r = [t.substring(s - 1)], l;
      }
      static fromGlob(t, e = {}) {
        let s = new n(null, undefined, e);
        return n.#i(t, s, 0, e), s;
      }
      toMMPattern() {
        if (this !== this.#t)
          return this.#t.toMMPattern();
        let t = this.toString(), [e, s, i, r] = this.toRegExpSource();
        if (!(i || this.#s || this.#o.nocase && !this.#o.nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
          return s;
        let o = (this.#o.nocase ? "i" : "") + (r ? "u" : "");
        return Object.assign(new RegExp(`^${e}$`, o), { _src: e, _glob: t });
      }
      get options() {
        return this.#o;
      }
      toRegExpSource(t) {
        let e = t ?? !!this.#o.dot;
        if (this.#t === this && this.#a(), !this.type) {
          let a = this.isStart() && this.isEnd() && !this.#r.some((u) => typeof u != "string"), l = this.#r.map((u) => {
            let [m, p, b, w] = typeof u == "string" ? n.#v(u, this.#s, a) : u.toRegExpSource(t);
            return this.#s = this.#s || b, this.#n = this.#n || w, m;
          }).join(""), f = "";
          if (this.isStart() && typeof this.#r[0] == "string" && !(this.#r.length === 1 && gi.has(this.#r[0]))) {
            let m = mi, p = e && m.has(l.charAt(0)) || l.startsWith("\\.") && m.has(l.charAt(2)) || l.startsWith("\\.\\.") && m.has(l.charAt(4)), b = !e && !t && m.has(l.charAt(0));
            f = p ? pi : b ? Pt : "";
          }
          let c = "";
          return this.isEnd() && this.#t.#c && this.#h?.type === "!" && (c = "(?:$|\\/)"), [f + l + c, (0, Mt.unescape)(l), this.#s = !!this.#s, this.#n];
        }
        let s = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:", r = this.#d(e);
        if (this.isStart() && this.isEnd() && !r && this.type !== "!") {
          let a = this.toString();
          return this.#r = [a], this.type = null, this.#s = undefined, [a, (0, Mt.unescape)(this.toString()), false, false];
        }
        let h = !s || t || e || !Pt ? "" : this.#d(true);
        h === r && (h = ""), h && (r = `(?:${r})(?:${h})*?`);
        let o = "";
        if (this.type === "!" && this.#u)
          o = (this.isStart() && !e ? Pt : "") + ts;
        else {
          let a = this.type === "!" ? "))" + (this.isStart() && !e && !t ? Pt : "") + Qe + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && h ? ")" : this.type === "*" && h ? ")?" : `)${this.type}`;
          o = i + r + a;
        }
        return [o, (0, Mt.unescape)(r), this.#s = !!this.#s, this.#n];
      }
      #d(t) {
        return this.#r.map((e) => {
          if (typeof e == "string")
            throw new Error("string type in extglob ast??");
          let [s, i, r, h] = e.toRegExpSource(t);
          return this.#n = this.#n || h, s;
        }).filter((e) => !(this.isStart() && this.isEnd()) || !!e).join("|");
      }
      static #v(t, e, s = false) {
        let i = false, r = "", h = false, o = false;
        for (let a = 0;a < t.length; a++) {
          let l = t.charAt(a);
          if (i) {
            i = false, r += (wi.has(l) ? "\\" : "") + l;
            continue;
          }
          if (l === "*") {
            if (o)
              continue;
            o = true, r += s && /^[*]+$/.test(t) ? ts : Qe, e = true;
            continue;
          } else
            o = false;
          if (l === "\\") {
            a === t.length - 1 ? r += "\\\\" : i = true;
            continue;
          }
          if (l === "[") {
            let [f, c, d, u] = (0, fi.parseClass)(t, a);
            if (d) {
              r += f, h = h || c, a += d - 1, e = e || u;
              continue;
            }
          }
          if (l === "?") {
            r += de, e = true;
            continue;
          }
          r += bi(l);
        }
        return [r, (0, Mt.unescape)(t), !!e, h];
      }
    };
    Dt.AST = fe;
  });
  var me = R((Ft) => {
    Object.defineProperty(Ft, "__esModule", { value: true });
    Ft.escape = undefined;
    var yi = (n, { windowsPathsNoEscape: t = false, magicalBraces: e = false } = {}) => e ? t ? n.replace(/[?*()[\]{}]/g, "[$&]") : n.replace(/[?*()[\]\\{}]/g, "\\$&") : t ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
    Ft.escape = yi;
  });
  var H = R((g) => {
    Object.defineProperty(g, "__esModule", { value: true });
    g.unescape = g.escape = g.AST = g.Minimatch = g.match = g.makeRe = g.braceExpand = g.defaults = g.filter = g.GLOBSTAR = g.sep = g.minimatch = undefined;
    var Si = Ke(), jt = Xe(), is = pe(), vi = me(), Ei = kt(), _i = (n, t, e = {}) => ((0, jt.assertValidPattern)(t), !e.nocomment && t.charAt(0) === "#" ? false : new J(t, e).match(n));
    g.minimatch = _i;
    var Oi = /^\*+([^+@!?\*\[\(]*)$/, xi = (n) => (t) => !t.startsWith(".") && t.endsWith(n), Ti = (n) => (t) => t.endsWith(n), Ci = (n) => (n = n.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(n)), Ri = (n) => (n = n.toLowerCase(), (t) => t.toLowerCase().endsWith(n)), Ai = /^\*+\.\*+$/, ki = (n) => !n.startsWith(".") && n.includes("."), Mi = (n) => n !== "." && n !== ".." && n.includes("."), Pi = /^\.\*+$/, Di = (n) => n !== "." && n !== ".." && n.startsWith("."), Fi = /^\*+$/, ji = (n) => n.length !== 0 && !n.startsWith("."), Ni = (n) => n.length !== 0 && n !== "." && n !== "..", Li = /^\?+([^+@!?\*\[\(]*)?$/, Wi = ([n, t = ""]) => {
      let e = rs([n]);
      return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
    }, Bi = ([n, t = ""]) => {
      let e = ns([n]);
      return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
    }, Ii = ([n, t = ""]) => {
      let e = ns([n]);
      return t ? (s) => e(s) && s.endsWith(t) : e;
    }, Gi = ([n, t = ""]) => {
      let e = rs([n]);
      return t ? (s) => e(s) && s.endsWith(t) : e;
    }, rs = ([n]) => {
      let t = n.length;
      return (e) => e.length === t && !e.startsWith(".");
    }, ns = ([n]) => {
      let t = n.length;
      return (e) => e.length === t && e !== "." && e !== "..";
    }, hs = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", es = { win32: { sep: "\\" }, posix: { sep: "/" } };
    g.sep = hs === "win32" ? es.win32.sep : es.posix.sep;
    g.minimatch.sep = g.sep;
    g.GLOBSTAR = Symbol("globstar **");
    g.minimatch.GLOBSTAR = g.GLOBSTAR;
    var zi = "[^/]", Ui = zi + "*?", $i = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", qi = "(?:(?!(?:\\/|^)\\.).)*?", Hi = (n, t = {}) => (e) => (0, g.minimatch)(e, n, t);
    g.filter = Hi;
    g.minimatch.filter = g.filter;
    var F = (n, t = {}) => Object.assign({}, n, t), Vi = (n) => {
      if (!n || typeof n != "object" || !Object.keys(n).length)
        return g.minimatch;
      let t = g.minimatch;
      return Object.assign((s, i, r = {}) => t(s, i, F(n, r)), { Minimatch: class extends t.Minimatch {
        constructor(i, r = {}) {
          super(i, F(n, r));
        }
        static defaults(i) {
          return t.defaults(F(n, i)).Minimatch;
        }
      }, AST: class extends t.AST {
        constructor(i, r, h = {}) {
          super(i, r, F(n, h));
        }
        static fromGlob(i, r = {}) {
          return t.AST.fromGlob(i, F(n, r));
        }
      }, unescape: (s, i = {}) => t.unescape(s, F(n, i)), escape: (s, i = {}) => t.escape(s, F(n, i)), filter: (s, i = {}) => t.filter(s, F(n, i)), defaults: (s) => t.defaults(F(n, s)), makeRe: (s, i = {}) => t.makeRe(s, F(n, i)), braceExpand: (s, i = {}) => t.braceExpand(s, F(n, i)), match: (s, i, r = {}) => t.match(s, i, F(n, r)), sep: t.sep, GLOBSTAR: g.GLOBSTAR });
    };
    g.defaults = Vi;
    g.minimatch.defaults = g.defaults;
    var Ki = (n, t = {}) => ((0, jt.assertValidPattern)(n), t.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : (0, Si.expand)(n, { max: t.braceExpandMax }));
    g.braceExpand = Ki;
    g.minimatch.braceExpand = g.braceExpand;
    var Xi = (n, t = {}) => new J(n, t).makeRe();
    g.makeRe = Xi;
    g.minimatch.makeRe = g.makeRe;
    var Yi = (n, t, e = {}) => {
      let s = new J(t, e);
      return n = n.filter((i) => s.match(i)), s.options.nonull && !n.length && n.push(t), n;
    };
    g.match = Yi;
    g.minimatch.match = g.match;
    var ss = /[?*]|[+@!]\(.*?\)|\[|\]/, Ji = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), J = class {
      options;
      set;
      pattern;
      windowsPathsNoEscape;
      nonegate;
      negate;
      comment;
      empty;
      preserveMultipleSlashes;
      partial;
      globSet;
      globParts;
      nocase;
      isWindows;
      platform;
      windowsNoMagicRoot;
      regexp;
      constructor(t, e = {}) {
        (0, jt.assertValidPattern)(t), e = e || {}, this.options = e, this.pattern = t, this.platform = e.platform || hs, this.isWindows = this.platform === "win32";
        let s = "allowWindowsEscape";
        this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || e[s] === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!e.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!e.nonegate, this.comment = false, this.empty = false, this.partial = !!e.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = e.windowsNoMagicRoot !== undefined ? e.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
      }
      hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1)
          return true;
        for (let t of this.set)
          for (let e of t)
            if (typeof e != "string")
              return true;
        return false;
      }
      debug(...t) {}
      make() {
        let t = this.pattern, e = this.options;
        if (!e.nocomment && t.charAt(0) === "#") {
          this.comment = true;
          return;
        }
        if (!t) {
          this.empty = true;
          return;
        }
        this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], e.debug && (this.debug = (...r) => console.error(...r)), this.debug(this.pattern, this.globSet);
        let s = this.globSet.map((r) => this.slashSplit(r));
        this.globParts = this.preprocess(s), this.debug(this.pattern, this.globParts);
        let i = this.globParts.map((r, h, o) => {
          if (this.isWindows && this.windowsNoMagicRoot) {
            let a = r[0] === "" && r[1] === "" && (r[2] === "?" || !ss.test(r[2])) && !ss.test(r[3]), l = /^[a-z]:/i.test(r[0]);
            if (a)
              return [...r.slice(0, 4), ...r.slice(4).map((f) => this.parse(f))];
            if (l)
              return [r[0], ...r.slice(1).map((f) => this.parse(f))];
          }
          return r.map((a) => this.parse(a));
        });
        if (this.debug(this.pattern, i), this.set = i.filter((r) => r.indexOf(false) === -1), this.isWindows)
          for (let r = 0;r < this.set.length; r++) {
            let h = this.set[r];
            h[0] === "" && h[1] === "" && this.globParts[r][2] === "?" && typeof h[3] == "string" && /^[a-z]:$/i.test(h[3]) && (h[2] = "?");
          }
        this.debug(this.pattern, this.set);
      }
      preprocess(t) {
        if (this.options.noglobstar)
          for (let s = 0;s < t.length; s++)
            for (let i = 0;i < t[s].length; i++)
              t[s][i] === "**" && (t[s][i] = "*");
        let { optimizationLevel: e = 1 } = this.options;
        return e >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : e >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
      }
      adjascentGlobstarOptimize(t) {
        return t.map((e) => {
          let s = -1;
          for (;(s = e.indexOf("**", s + 1)) !== -1; ) {
            let i = s;
            for (;e[i + 1] === "**"; )
              i++;
            i !== s && e.splice(s, i - s);
          }
          return e;
        });
      }
      levelOneOptimize(t) {
        return t.map((e) => (e = e.reduce((s, i) => {
          let r = s[s.length - 1];
          return i === "**" && r === "**" ? s : i === ".." && r && r !== ".." && r !== "." && r !== "**" ? (s.pop(), s) : (s.push(i), s);
        }, []), e.length === 0 ? [""] : e));
      }
      levelTwoFileOptimize(t) {
        Array.isArray(t) || (t = this.slashSplit(t));
        let e = false;
        do {
          if (e = false, !this.preserveMultipleSlashes) {
            for (let i = 1;i < t.length - 1; i++) {
              let r = t[i];
              i === 1 && r === "" && t[0] === "" || (r === "." || r === "") && (e = true, t.splice(i, 1), i--);
            }
            t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (e = true, t.pop());
          }
          let s = 0;
          for (;(s = t.indexOf("..", s + 1)) !== -1; ) {
            let i = t[s - 1];
            i && i !== "." && i !== ".." && i !== "**" && (e = true, t.splice(s - 1, 2), s -= 2);
          }
        } while (e);
        return t.length === 0 ? [""] : t;
      }
      firstPhasePreProcess(t) {
        let e = false;
        do {
          e = false;
          for (let s of t) {
            let i = -1;
            for (;(i = s.indexOf("**", i + 1)) !== -1; ) {
              let h = i;
              for (;s[h + 1] === "**"; )
                h++;
              h > i && s.splice(i + 1, h - i);
              let o = s[i + 1], a = s[i + 2], l = s[i + 3];
              if (o !== ".." || !a || a === "." || a === ".." || !l || l === "." || l === "..")
                continue;
              e = true, s.splice(i, 1);
              let f = s.slice(0);
              f[i] = "**", t.push(f), i--;
            }
            if (!this.preserveMultipleSlashes) {
              for (let h = 1;h < s.length - 1; h++) {
                let o = s[h];
                h === 1 && o === "" && s[0] === "" || (o === "." || o === "") && (e = true, s.splice(h, 1), h--);
              }
              s[0] === "." && s.length === 2 && (s[1] === "." || s[1] === "") && (e = true, s.pop());
            }
            let r = 0;
            for (;(r = s.indexOf("..", r + 1)) !== -1; ) {
              let h = s[r - 1];
              if (h && h !== "." && h !== ".." && h !== "**") {
                e = true;
                let a = r === 1 && s[r + 1] === "**" ? ["."] : [];
                s.splice(r - 1, 2, ...a), s.length === 0 && s.push(""), r -= 2;
              }
            }
          }
        } while (e);
        return t;
      }
      secondPhasePreProcess(t) {
        for (let e = 0;e < t.length - 1; e++)
          for (let s = e + 1;s < t.length; s++) {
            let i = this.partsMatch(t[e], t[s], !this.preserveMultipleSlashes);
            if (i) {
              t[e] = [], t[s] = i;
              break;
            }
          }
        return t.filter((e) => e.length);
      }
      partsMatch(t, e, s = false) {
        let i = 0, r = 0, h = [], o = "";
        for (;i < t.length && r < e.length; )
          if (t[i] === e[r])
            h.push(o === "b" ? e[r] : t[i]), i++, r++;
          else if (s && t[i] === "**" && e[r] === t[i + 1])
            h.push(t[i]), i++;
          else if (s && e[r] === "**" && t[i] === e[r + 1])
            h.push(e[r]), r++;
          else if (t[i] === "*" && e[r] && (this.options.dot || !e[r].startsWith(".")) && e[r] !== "**") {
            if (o === "b")
              return false;
            o = "a", h.push(t[i]), i++, r++;
          } else if (e[r] === "*" && t[i] && (this.options.dot || !t[i].startsWith(".")) && t[i] !== "**") {
            if (o === "a")
              return false;
            o = "b", h.push(e[r]), i++, r++;
          } else
            return false;
        return t.length === e.length && h;
      }
      parseNegate() {
        if (this.nonegate)
          return;
        let t = this.pattern, e = false, s = 0;
        for (let i = 0;i < t.length && t.charAt(i) === "!"; i++)
          e = !e, s++;
        s && (this.pattern = t.slice(s)), this.negate = e;
      }
      matchOne(t, e, s = false) {
        let i = this.options;
        if (this.isWindows) {
          let p = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), b = !p && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), w = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), v = !w && e[0] === "" && e[1] === "" && e[2] === "?" && typeof e[3] == "string" && /^[a-z]:$/i.test(e[3]), E = b ? 3 : p ? 0 : undefined, y = v ? 3 : w ? 0 : undefined;
          if (typeof E == "number" && typeof y == "number") {
            let [S, B] = [t[E], e[y]];
            S.toLowerCase() === B.toLowerCase() && (e[y] = S, y > E ? e = e.slice(y) : E > y && (t = t.slice(E)));
          }
        }
        let { optimizationLevel: r = 1 } = this.options;
        r >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: e }), this.debug("matchOne", t.length, e.length);
        for (var h = 0, o = 0, a = t.length, l = e.length;h < a && o < l; h++, o++) {
          this.debug("matchOne loop");
          var f = e[o], c = t[h];
          if (this.debug(e, f, c), f === false)
            return false;
          if (f === g.GLOBSTAR) {
            this.debug("GLOBSTAR", [e, f, c]);
            var d = h, u = o + 1;
            if (u === l) {
              for (this.debug("** at the end");h < a; h++)
                if (t[h] === "." || t[h] === ".." || !i.dot && t[h].charAt(0) === ".")
                  return false;
              return true;
            }
            for (;d < a; ) {
              var m = t[d];
              if (this.debug(`
globstar while`, t, d, e, u, m), this.matchOne(t.slice(d), e.slice(u), s))
                return this.debug("globstar found match!", d, a, m), true;
              if (m === "." || m === ".." || !i.dot && m.charAt(0) === ".") {
                this.debug("dot detected!", t, d, e, u);
                break;
              }
              this.debug("globstar swallow a segment, and continue"), d++;
            }
            return !!(s && (this.debug(`
>>> no match, partial?`, t, d, e, u), d === a));
          }
          let p;
          if (typeof f == "string" ? (p = c === f, this.debug("string match", f, c, p)) : (p = f.test(c), this.debug("pattern match", f, c, p)), !p)
            return false;
        }
        if (h === a && o === l)
          return true;
        if (h === a)
          return s;
        if (o === l)
          return h === a - 1 && t[h] === "";
        throw new Error("wtf?");
      }
      braceExpand() {
        return (0, g.braceExpand)(this.pattern, this.options);
      }
      parse(t) {
        (0, jt.assertValidPattern)(t);
        let e = this.options;
        if (t === "**")
          return g.GLOBSTAR;
        if (t === "")
          return "";
        let s, i = null;
        (s = t.match(Fi)) ? i = e.dot ? Ni : ji : (s = t.match(Oi)) ? i = (e.nocase ? e.dot ? Ri : Ci : e.dot ? Ti : xi)(s[1]) : (s = t.match(Li)) ? i = (e.nocase ? e.dot ? Bi : Wi : e.dot ? Ii : Gi)(s) : (s = t.match(Ai)) ? i = e.dot ? Mi : ki : (s = t.match(Pi)) && (i = Di);
        let r = is.AST.fromGlob(t, this.options).toMMPattern();
        return i && typeof r == "object" && Reflect.defineProperty(r, "test", { value: i }), r;
      }
      makeRe() {
        if (this.regexp || this.regexp === false)
          return this.regexp;
        let t = this.set;
        if (!t.length)
          return this.regexp = false, this.regexp;
        let e = this.options, s = e.noglobstar ? Ui : e.dot ? $i : qi, i = new Set(e.nocase ? ["i"] : []), r = t.map((a) => {
          let l = a.map((c) => {
            if (c instanceof RegExp)
              for (let d of c.flags.split(""))
                i.add(d);
            return typeof c == "string" ? Ji(c) : c === g.GLOBSTAR ? g.GLOBSTAR : c._src;
          });
          l.forEach((c, d) => {
            let u = l[d + 1], m = l[d - 1];
            c !== g.GLOBSTAR || m === g.GLOBSTAR || (m === undefined ? u !== undefined && u !== g.GLOBSTAR ? l[d + 1] = "(?:\\/|" + s + "\\/)?" + u : l[d] = s : u === undefined ? l[d - 1] = m + "(?:\\/|\\/" + s + ")?" : u !== g.GLOBSTAR && (l[d - 1] = m + "(?:\\/|\\/" + s + "\\/)" + u, l[d + 1] = g.GLOBSTAR));
          });
          let f = l.filter((c) => c !== g.GLOBSTAR);
          if (this.partial && f.length >= 1) {
            let c = [];
            for (let d = 1;d <= f.length; d++)
              c.push(f.slice(0, d).join("/"));
            return "(?:" + c.join("|") + ")";
          }
          return f.join("/");
        }).join("|"), [h, o] = t.length > 1 ? ["(?:", ")"] : ["", ""];
        r = "^" + h + r + o + "$", this.partial && (r = "^(?:\\/|" + h + r.slice(1, -1) + o + ")$"), this.negate && (r = "^(?!" + r + ").+$");
        try {
          this.regexp = new RegExp(r, [...i].join(""));
        } catch {
          this.regexp = false;
        }
        return this.regexp;
      }
      slashSplit(t) {
        return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
      }
      match(t, e = this.partial) {
        if (this.debug("match", t, this.pattern), this.comment)
          return false;
        if (this.empty)
          return t === "";
        if (t === "/" && e)
          return true;
        let s = this.options;
        this.isWindows && (t = t.split("\\").join("/"));
        let i = this.slashSplit(t);
        this.debug(this.pattern, "split", i);
        let r = this.set;
        this.debug(this.pattern, "set", r);
        let h = i[i.length - 1];
        if (!h)
          for (let o = i.length - 2;!h && o >= 0; o--)
            h = i[o];
        for (let o = 0;o < r.length; o++) {
          let a = r[o], l = i;
          if (s.matchBase && a.length === 1 && (l = [h]), this.matchOne(l, a, e))
            return s.flipNegate ? true : !this.negate;
        }
        return s.flipNegate ? false : this.negate;
      }
      static defaults(t) {
        return g.minimatch.defaults(t).Minimatch;
      }
    };
    g.Minimatch = J;
    var Zi = pe();
    Object.defineProperty(g, "AST", { enumerable: true, get: function() {
      return Zi.AST;
    } });
    var Qi = me();
    Object.defineProperty(g, "escape", { enumerable: true, get: function() {
      return Qi.escape;
    } });
    var tr = kt();
    Object.defineProperty(g, "unescape", { enumerable: true, get: function() {
      return tr.unescape;
    } });
    g.minimatch.AST = is.AST;
    g.minimatch.Minimatch = J;
    g.minimatch.escape = vi.escape;
    g.minimatch.unescape = Ei.unescape;
  });
  var fs = R((Wt) => {
    Object.defineProperty(Wt, "__esModule", { value: true });
    Wt.LRUCache = undefined;
    var er = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, as = new Set, ge = typeof process == "object" && process ? process : {}, ls = (n, t, e, s) => {
      typeof ge.emitWarning == "function" ? ge.emitWarning(n, t, e, s) : console.error(`[${e}] ${t}: ${n}`);
    }, Lt = globalThis.AbortController, os = globalThis.AbortSignal;
    if (typeof Lt > "u") {
      os = class {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(e, s) {
          this._onabort.push(s);
        }
      }, Lt = class {
        constructor() {
          t();
        }
        signal = new os;
        abort(e) {
          if (!this.signal.aborted) {
            this.signal.reason = e, this.signal.aborted = true;
            for (let s of this.signal._onabort)
              s(e);
            this.signal.onabort?.(e);
          }
        }
      };
      let n = ge.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", t = () => {
        n && (n = false, ls("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
      };
    }
    var sr = (n) => !as.has(n), V = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n), cs = (n) => V(n) ? n <= Math.pow(2, 8) ? Uint8Array : n <= Math.pow(2, 16) ? Uint16Array : n <= Math.pow(2, 32) ? Uint32Array : n <= Number.MAX_SAFE_INTEGER ? Nt : null : null, Nt = class extends Array {
      constructor(n) {
        super(n), this.fill(0);
      }
    }, ir = class at {
      heap;
      length;
      static #t = false;
      static create(t) {
        let e = cs(t);
        if (!e)
          return [];
        at.#t = true;
        let s = new at(t, e);
        return at.#t = false, s;
      }
      constructor(t, e) {
        if (!at.#t)
          throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new e(t), this.length = 0;
      }
      push(t) {
        this.heap[this.length++] = t;
      }
      pop() {
        return this.heap[--this.length];
      }
    }, rr = class us {
      #t;
      #s;
      #n;
      #r;
      #h;
      #S;
      #w;
      #c;
      get perf() {
        return this.#c;
      }
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #o;
      #f;
      #u;
      #a;
      #i;
      #d;
      #v;
      #y;
      #p;
      #R;
      #m;
      #O;
      #x;
      #g;
      #b;
      #E;
      #T;
      #e;
      #F;
      static unsafeExposeInternals(t) {
        return { starts: t.#x, ttls: t.#g, autopurgeTimers: t.#b, sizes: t.#O, keyMap: t.#u, keyList: t.#a, valList: t.#i, next: t.#d, prev: t.#v, get head() {
          return t.#y;
        }, get tail() {
          return t.#p;
        }, free: t.#R, isBackgroundFetch: (e) => t.#l(e), backgroundFetch: (e, s, i, r) => t.#z(e, s, i, r), moveToTail: (e) => t.#N(e), indexes: (e) => t.#k(e), rindexes: (e) => t.#M(e), isStale: (e) => t.#_(e) };
      }
      get max() {
        return this.#t;
      }
      get maxSize() {
        return this.#s;
      }
      get calculatedSize() {
        return this.#f;
      }
      get size() {
        return this.#o;
      }
      get fetchMethod() {
        return this.#S;
      }
      get memoMethod() {
        return this.#w;
      }
      get dispose() {
        return this.#n;
      }
      get onInsert() {
        return this.#r;
      }
      get disposeAfter() {
        return this.#h;
      }
      constructor(t) {
        let { max: e = 0, ttl: s, ttlResolution: i = 1, ttlAutopurge: r, updateAgeOnGet: h, updateAgeOnHas: o, allowStale: a, dispose: l, onInsert: f, disposeAfter: c, noDisposeOnSet: d, noUpdateTTL: u, maxSize: m = 0, maxEntrySize: p = 0, sizeCalculation: b, fetchMethod: w, memoMethod: v, noDeleteOnFetchRejection: E, noDeleteOnStaleGet: y, allowStaleOnFetchRejection: S, allowStaleOnFetchAbort: B, ignoreFetchAbort: U, perf: et } = t;
        if (et !== undefined && typeof et?.now != "function")
          throw new TypeError("perf option must have a now() method if specified");
        if (this.#c = et ?? er, e !== 0 && !V(e))
          throw new TypeError("max option must be a nonnegative integer");
        let st = e ? cs(e) : Array;
        if (!st)
          throw new Error("invalid max value: " + e);
        if (this.#t = e, this.#s = m, this.maxEntrySize = p || this.#s, this.sizeCalculation = b, this.sizeCalculation) {
          if (!this.#s && !this.maxEntrySize)
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if (typeof this.sizeCalculation != "function")
            throw new TypeError("sizeCalculation set to non-function");
        }
        if (v !== undefined && typeof v != "function")
          throw new TypeError("memoMethod must be a function if defined");
        if (this.#w = v, w !== undefined && typeof w != "function")
          throw new TypeError("fetchMethod must be a function if specified");
        if (this.#S = w, this.#T = !!w, this.#u = new Map, this.#a = new Array(e).fill(undefined), this.#i = new Array(e).fill(undefined), this.#d = new st(e), this.#v = new st(e), this.#y = 0, this.#p = 0, this.#R = ir.create(e), this.#o = 0, this.#f = 0, typeof l == "function" && (this.#n = l), typeof f == "function" && (this.#r = f), typeof c == "function" ? (this.#h = c, this.#m = []) : (this.#h = undefined, this.#m = undefined), this.#E = !!this.#n, this.#F = !!this.#r, this.#e = !!this.#h, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!E, this.allowStaleOnFetchRejection = !!S, this.allowStaleOnFetchAbort = !!B, this.ignoreFetchAbort = !!U, this.maxEntrySize !== 0) {
          if (this.#s !== 0 && !V(this.#s))
            throw new TypeError("maxSize must be a positive integer if specified");
          if (!V(this.maxEntrySize))
            throw new TypeError("maxEntrySize must be a positive integer if specified");
          this.#$();
        }
        if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!h, this.updateAgeOnHas = !!o, this.ttlResolution = V(i) || i === 0 ? i : 1, this.ttlAutopurge = !!r, this.ttl = s || 0, this.ttl) {
          if (!V(this.ttl))
            throw new TypeError("ttl must be a positive integer if specified");
          this.#P();
        }
        if (this.#t === 0 && this.ttl === 0 && this.#s === 0)
          throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#t && !this.#s) {
          let le = "LRU_CACHE_UNBOUNDED";
          sr(le) && (as.add(le), ls("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", le, us));
        }
      }
      getRemainingTTL(t) {
        return this.#u.has(t) ? 1 / 0 : 0;
      }
      #P() {
        let t = new Nt(this.#t), e = new Nt(this.#t);
        this.#g = t, this.#x = e;
        let s = this.ttlAutopurge ? new Array(this.#t) : undefined;
        this.#b = s, this.#W = (h, o, a = this.#c.now()) => {
          if (e[h] = o !== 0 ? a : 0, t[h] = o, s?.[h] && (clearTimeout(s[h]), s[h] = undefined), o !== 0 && s) {
            let l = setTimeout(() => {
              this.#_(h) && this.#A(this.#a[h], "expire");
            }, o + 1);
            l.unref && l.unref(), s[h] = l;
          }
        }, this.#C = (h) => {
          e[h] = t[h] !== 0 ? this.#c.now() : 0;
        }, this.#D = (h, o) => {
          if (t[o]) {
            let a = t[o], l = e[o];
            if (!a || !l)
              return;
            h.ttl = a, h.start = l, h.now = i || r();
            let f = h.now - l;
            h.remainingTTL = a - f;
          }
        };
        let i = 0, r = () => {
          let h = this.#c.now();
          if (this.ttlResolution > 0) {
            i = h;
            let o = setTimeout(() => i = 0, this.ttlResolution);
            o.unref && o.unref();
          }
          return h;
        };
        this.getRemainingTTL = (h) => {
          let o = this.#u.get(h);
          if (o === undefined)
            return 0;
          let a = t[o], l = e[o];
          if (!a || !l)
            return 1 / 0;
          let f = (i || r()) - l;
          return a - f;
        }, this.#_ = (h) => {
          let o = e[h], a = t[h];
          return !!a && !!o && (i || r()) - o > a;
        };
      }
      #C = () => {};
      #D = () => {};
      #W = () => {};
      #_ = () => false;
      #$() {
        let t = new Nt(this.#t);
        this.#f = 0, this.#O = t, this.#L = (e) => {
          this.#f -= t[e], t[e] = 0;
        }, this.#B = (e, s, i, r) => {
          if (this.#l(s))
            return 0;
          if (!V(i))
            if (r) {
              if (typeof r != "function")
                throw new TypeError("sizeCalculation must be a function");
              if (i = r(s, e), !V(i))
                throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            } else
              throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
          return i;
        }, this.#j = (e, s, i) => {
          if (t[e] = s, this.#s) {
            let r = this.#s - t[e];
            for (;this.#f > r; )
              this.#G(true);
          }
          this.#f += t[e], i && (i.entrySize = s, i.totalCalculatedSize = this.#f);
        };
      }
      #L = (t) => {};
      #j = (t, e, s) => {};
      #B = (t, e, s, i) => {
        if (s || i)
          throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      };
      *#k({ allowStale: t = this.allowStale } = {}) {
        if (this.#o)
          for (let e = this.#p;!(!this.#I(e) || ((t || !this.#_(e)) && (yield e), e === this.#y)); )
            e = this.#v[e];
      }
      *#M({ allowStale: t = this.allowStale } = {}) {
        if (this.#o)
          for (let e = this.#y;!(!this.#I(e) || ((t || !this.#_(e)) && (yield e), e === this.#p)); )
            e = this.#d[e];
      }
      #I(t) {
        return t !== undefined && this.#u.get(this.#a[t]) === t;
      }
      *entries() {
        for (let t of this.#k())
          this.#i[t] !== undefined && this.#a[t] !== undefined && !this.#l(this.#i[t]) && (yield [this.#a[t], this.#i[t]]);
      }
      *rentries() {
        for (let t of this.#M())
          this.#i[t] !== undefined && this.#a[t] !== undefined && !this.#l(this.#i[t]) && (yield [this.#a[t], this.#i[t]]);
      }
      *keys() {
        for (let t of this.#k()) {
          let e = this.#a[t];
          e !== undefined && !this.#l(this.#i[t]) && (yield e);
        }
      }
      *rkeys() {
        for (let t of this.#M()) {
          let e = this.#a[t];
          e !== undefined && !this.#l(this.#i[t]) && (yield e);
        }
      }
      *values() {
        for (let t of this.#k())
          this.#i[t] !== undefined && !this.#l(this.#i[t]) && (yield this.#i[t]);
      }
      *rvalues() {
        for (let t of this.#M())
          this.#i[t] !== undefined && !this.#l(this.#i[t]) && (yield this.#i[t]);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(t, e = {}) {
        for (let s of this.#k()) {
          let i = this.#i[s], r = this.#l(i) ? i.__staleWhileFetching : i;
          if (r !== undefined && t(r, this.#a[s], this))
            return this.get(this.#a[s], e);
        }
      }
      forEach(t, e = this) {
        for (let s of this.#k()) {
          let i = this.#i[s], r = this.#l(i) ? i.__staleWhileFetching : i;
          r !== undefined && t.call(e, r, this.#a[s], this);
        }
      }
      rforEach(t, e = this) {
        for (let s of this.#M()) {
          let i = this.#i[s], r = this.#l(i) ? i.__staleWhileFetching : i;
          r !== undefined && t.call(e, r, this.#a[s], this);
        }
      }
      purgeStale() {
        let t = false;
        for (let e of this.#M({ allowStale: true }))
          this.#_(e) && (this.#A(this.#a[e], "expire"), t = true);
        return t;
      }
      info(t) {
        let e = this.#u.get(t);
        if (e === undefined)
          return;
        let s = this.#i[e], i = this.#l(s) ? s.__staleWhileFetching : s;
        if (i === undefined)
          return;
        let r = { value: i };
        if (this.#g && this.#x) {
          let h = this.#g[e], o = this.#x[e];
          if (h && o) {
            let a = h - (this.#c.now() - o);
            r.ttl = a, r.start = Date.now();
          }
        }
        return this.#O && (r.size = this.#O[e]), r;
      }
      dump() {
        let t = [];
        for (let e of this.#k({ allowStale: true })) {
          let s = this.#a[e], i = this.#i[e], r = this.#l(i) ? i.__staleWhileFetching : i;
          if (r === undefined || s === undefined)
            continue;
          let h = { value: r };
          if (this.#g && this.#x) {
            h.ttl = this.#g[e];
            let o = this.#c.now() - this.#x[e];
            h.start = Math.floor(Date.now() - o);
          }
          this.#O && (h.size = this.#O[e]), t.unshift([s, h]);
        }
        return t;
      }
      load(t) {
        this.clear();
        for (let [e, s] of t) {
          if (s.start) {
            let i = Date.now() - s.start;
            s.start = this.#c.now() - i;
          }
          this.set(e, s.value, s);
        }
      }
      set(t, e, s = {}) {
        if (e === undefined)
          return this.delete(t), this;
        let { ttl: i = this.ttl, start: r, noDisposeOnSet: h = this.noDisposeOnSet, sizeCalculation: o = this.sizeCalculation, status: a } = s, { noUpdateTTL: l = this.noUpdateTTL } = s, f = this.#B(t, e, s.size || 0, o);
        if (this.maxEntrySize && f > this.maxEntrySize)
          return a && (a.set = "miss", a.maxEntrySizeExceeded = true), this.#A(t, "set"), this;
        let c = this.#o === 0 ? undefined : this.#u.get(t);
        if (c === undefined)
          c = this.#o === 0 ? this.#p : this.#R.length !== 0 ? this.#R.pop() : this.#o === this.#t ? this.#G(false) : this.#o, this.#a[c] = t, this.#i[c] = e, this.#u.set(t, c), this.#d[this.#p] = c, this.#v[c] = this.#p, this.#p = c, this.#o++, this.#j(c, f, a), a && (a.set = "add"), l = false, this.#F && this.#r?.(e, t, "add");
        else {
          this.#N(c);
          let d = this.#i[c];
          if (e !== d) {
            if (this.#T && this.#l(d)) {
              d.__abortController.abort(new Error("replaced"));
              let { __staleWhileFetching: u } = d;
              u !== undefined && !h && (this.#E && this.#n?.(u, t, "set"), this.#e && this.#m?.push([u, t, "set"]));
            } else
              h || (this.#E && this.#n?.(d, t, "set"), this.#e && this.#m?.push([d, t, "set"]));
            if (this.#L(c), this.#j(c, f, a), this.#i[c] = e, a) {
              a.set = "replace";
              let u = d && this.#l(d) ? d.__staleWhileFetching : d;
              u !== undefined && (a.oldValue = u);
            }
          } else
            a && (a.set = "update");
          this.#F && this.onInsert?.(e, t, e === d ? "update" : "replace");
        }
        if (i !== 0 && !this.#g && this.#P(), this.#g && (l || this.#W(c, i, r), a && this.#D(a, c)), !h && this.#e && this.#m) {
          let d = this.#m, u;
          for (;u = d?.shift(); )
            this.#h?.(...u);
        }
        return this;
      }
      pop() {
        try {
          for (;this.#o; ) {
            let t = this.#i[this.#y];
            if (this.#G(true), this.#l(t)) {
              if (t.__staleWhileFetching)
                return t.__staleWhileFetching;
            } else if (t !== undefined)
              return t;
          }
        } finally {
          if (this.#e && this.#m) {
            let t = this.#m, e;
            for (;e = t?.shift(); )
              this.#h?.(...e);
          }
        }
      }
      #G(t) {
        let e = this.#y, s = this.#a[e], i = this.#i[e];
        return this.#T && this.#l(i) ? i.__abortController.abort(new Error("evicted")) : (this.#E || this.#e) && (this.#E && this.#n?.(i, s, "evict"), this.#e && this.#m?.push([i, s, "evict"])), this.#L(e), this.#b?.[e] && (clearTimeout(this.#b[e]), this.#b[e] = undefined), t && (this.#a[e] = undefined, this.#i[e] = undefined, this.#R.push(e)), this.#o === 1 ? (this.#y = this.#p = 0, this.#R.length = 0) : this.#y = this.#d[e], this.#u.delete(s), this.#o--, e;
      }
      has(t, e = {}) {
        let { updateAgeOnHas: s = this.updateAgeOnHas, status: i } = e, r = this.#u.get(t);
        if (r !== undefined) {
          let h = this.#i[r];
          if (this.#l(h) && h.__staleWhileFetching === undefined)
            return false;
          if (this.#_(r))
            i && (i.has = "stale", this.#D(i, r));
          else
            return s && this.#C(r), i && (i.has = "hit", this.#D(i, r)), true;
        } else
          i && (i.has = "miss");
        return false;
      }
      peek(t, e = {}) {
        let { allowStale: s = this.allowStale } = e, i = this.#u.get(t);
        if (i === undefined || !s && this.#_(i))
          return;
        let r = this.#i[i];
        return this.#l(r) ? r.__staleWhileFetching : r;
      }
      #z(t, e, s, i) {
        let r = e === undefined ? undefined : this.#i[e];
        if (this.#l(r))
          return r;
        let h = new Lt, { signal: o } = s;
        o?.addEventListener("abort", () => h.abort(o.reason), { signal: h.signal });
        let a = { signal: h.signal, options: s, context: i }, l = (p, b = false) => {
          let { aborted: w } = h.signal, v = s.ignoreFetchAbort && p !== undefined, E = s.ignoreFetchAbort || !!(s.allowStaleOnFetchAbort && p !== undefined);
          if (s.status && (w && !b ? (s.status.fetchAborted = true, s.status.fetchError = h.signal.reason, v && (s.status.fetchAbortIgnored = true)) : s.status.fetchResolved = true), w && !v && !b)
            return c(h.signal.reason, E);
          let y = u, S = this.#i[e];
          return (S === u || v && b && S === undefined) && (p === undefined ? y.__staleWhileFetching !== undefined ? this.#i[e] = y.__staleWhileFetching : this.#A(t, "fetch") : (s.status && (s.status.fetchUpdated = true), this.set(t, p, a.options))), p;
        }, f = (p) => (s.status && (s.status.fetchRejected = true, s.status.fetchError = p), c(p, false)), c = (p, b) => {
          let { aborted: w } = h.signal, v = w && s.allowStaleOnFetchAbort, E = v || s.allowStaleOnFetchRejection, y = E || s.noDeleteOnFetchRejection, S = u;
          if (this.#i[e] === u && (!y || !b && S.__staleWhileFetching === undefined ? this.#A(t, "fetch") : v || (this.#i[e] = S.__staleWhileFetching)), E)
            return s.status && S.__staleWhileFetching !== undefined && (s.status.returnedStale = true), S.__staleWhileFetching;
          if (S.__returned === S)
            throw p;
        }, d = (p, b) => {
          let w = this.#S?.(t, r, a);
          w && w instanceof Promise && w.then((v) => p(v === undefined ? undefined : v), b), h.signal.addEventListener("abort", () => {
            (!s.ignoreFetchAbort || s.allowStaleOnFetchAbort) && (p(undefined), s.allowStaleOnFetchAbort && (p = (v) => l(v, true)));
          });
        };
        s.status && (s.status.fetchDispatched = true);
        let u = new Promise(d).then(l, f), m = Object.assign(u, { __abortController: h, __staleWhileFetching: r, __returned: undefined });
        return e === undefined ? (this.set(t, m, { ...a.options, status: undefined }), e = this.#u.get(t)) : this.#i[e] = m, m;
      }
      #l(t) {
        if (!this.#T)
          return false;
        let e = t;
        return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof Lt;
      }
      async fetch(t, e = {}) {
        let { allowStale: s = this.allowStale, updateAgeOnGet: i = this.updateAgeOnGet, noDeleteOnStaleGet: r = this.noDeleteOnStaleGet, ttl: h = this.ttl, noDisposeOnSet: o = this.noDisposeOnSet, size: a = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: f = this.noUpdateTTL, noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection, ignoreFetchAbort: u = this.ignoreFetchAbort, allowStaleOnFetchAbort: m = this.allowStaleOnFetchAbort, context: p, forceRefresh: b = false, status: w, signal: v } = e;
        if (!this.#T)
          return w && (w.fetch = "get"), this.get(t, { allowStale: s, updateAgeOnGet: i, noDeleteOnStaleGet: r, status: w });
        let E = { allowStale: s, updateAgeOnGet: i, noDeleteOnStaleGet: r, ttl: h, noDisposeOnSet: o, size: a, sizeCalculation: l, noUpdateTTL: f, noDeleteOnFetchRejection: c, allowStaleOnFetchRejection: d, allowStaleOnFetchAbort: m, ignoreFetchAbort: u, status: w, signal: v }, y = this.#u.get(t);
        if (y === undefined) {
          w && (w.fetch = "miss");
          let S = this.#z(t, y, E, p);
          return S.__returned = S;
        } else {
          let S = this.#i[y];
          if (this.#l(S)) {
            let st = s && S.__staleWhileFetching !== undefined;
            return w && (w.fetch = "inflight", st && (w.returnedStale = true)), st ? S.__staleWhileFetching : S.__returned = S;
          }
          let B = this.#_(y);
          if (!b && !B)
            return w && (w.fetch = "hit"), this.#N(y), i && this.#C(y), w && this.#D(w, y), S;
          let U = this.#z(t, y, E, p), et = U.__staleWhileFetching !== undefined && s;
          return w && (w.fetch = B ? "stale" : "refresh", et && B && (w.returnedStale = true)), et ? U.__staleWhileFetching : U.__returned = U;
        }
      }
      async forceFetch(t, e = {}) {
        let s = await this.fetch(t, e);
        if (s === undefined)
          throw new Error("fetch() returned undefined");
        return s;
      }
      memo(t, e = {}) {
        let s = this.#w;
        if (!s)
          throw new Error("no memoMethod provided to constructor");
        let { context: i, forceRefresh: r, ...h } = e, o = this.get(t, h);
        if (!r && o !== undefined)
          return o;
        let a = s(t, o, { options: h, context: i });
        return this.set(t, a, h), a;
      }
      get(t, e = {}) {
        let { allowStale: s = this.allowStale, updateAgeOnGet: i = this.updateAgeOnGet, noDeleteOnStaleGet: r = this.noDeleteOnStaleGet, status: h } = e, o = this.#u.get(t);
        if (o !== undefined) {
          let a = this.#i[o], l = this.#l(a);
          return h && this.#D(h, o), this.#_(o) ? (h && (h.get = "stale"), l ? (h && s && a.__staleWhileFetching !== undefined && (h.returnedStale = true), s ? a.__staleWhileFetching : undefined) : (r || this.#A(t, "expire"), h && s && (h.returnedStale = true), s ? a : undefined)) : (h && (h.get = "hit"), l ? a.__staleWhileFetching : (this.#N(o), i && this.#C(o), a));
        } else
          h && (h.get = "miss");
      }
      #U(t, e) {
        this.#v[e] = t, this.#d[t] = e;
      }
      #N(t) {
        t !== this.#p && (t === this.#y ? this.#y = this.#d[t] : this.#U(this.#v[t], this.#d[t]), this.#U(this.#p, t), this.#p = t);
      }
      delete(t) {
        return this.#A(t, "delete");
      }
      #A(t, e) {
        let s = false;
        if (this.#o !== 0) {
          let i = this.#u.get(t);
          if (i !== undefined)
            if (this.#b?.[i] && (clearTimeout(this.#b?.[i]), this.#b[i] = undefined), s = true, this.#o === 1)
              this.#q(e);
            else {
              this.#L(i);
              let r = this.#i[i];
              if (this.#l(r) ? r.__abortController.abort(new Error("deleted")) : (this.#E || this.#e) && (this.#E && this.#n?.(r, t, e), this.#e && this.#m?.push([r, t, e])), this.#u.delete(t), this.#a[i] = undefined, this.#i[i] = undefined, i === this.#p)
                this.#p = this.#v[i];
              else if (i === this.#y)
                this.#y = this.#d[i];
              else {
                let h = this.#v[i];
                this.#d[h] = this.#d[i];
                let o = this.#d[i];
                this.#v[o] = this.#v[i];
              }
              this.#o--, this.#R.push(i);
            }
        }
        if (this.#e && this.#m?.length) {
          let i = this.#m, r;
          for (;r = i?.shift(); )
            this.#h?.(...r);
        }
        return s;
      }
      clear() {
        return this.#q("delete");
      }
      #q(t) {
        for (let e of this.#M({ allowStale: true })) {
          let s = this.#i[e];
          if (this.#l(s))
            s.__abortController.abort(new Error("deleted"));
          else {
            let i = this.#a[e];
            this.#E && this.#n?.(s, i, t), this.#e && this.#m?.push([s, i, t]);
          }
        }
        if (this.#u.clear(), this.#i.fill(undefined), this.#a.fill(undefined), this.#g && this.#x) {
          this.#g.fill(0), this.#x.fill(0);
          for (let e of this.#b ?? [])
            e !== undefined && clearTimeout(e);
          this.#b?.fill(undefined);
        }
        if (this.#O && this.#O.fill(0), this.#y = 0, this.#p = 0, this.#R.length = 0, this.#f = 0, this.#o = 0, this.#e && this.#m) {
          let e = this.#m, s;
          for (;s = e?.shift(); )
            this.#h?.(...s);
        }
      }
    };
    Wt.LRUCache = rr;
  });
  var Oe = R((P) => {
    var nr = P && P.__importDefault || function(n) {
      return n && n.__esModule ? n : { default: n };
    };
    Object.defineProperty(P, "__esModule", { value: true });
    P.Minipass = P.isWritable = P.isReadable = P.isStream = undefined;
    var ds = typeof process == "object" && process ? process : { stdout: null, stderr: null }, _e = __require("events"), ws = nr(__require("stream")), hr = __require("string_decoder"), or = (n) => !!n && typeof n == "object" && (n instanceof qt || n instanceof ws.default || (0, P.isReadable)(n) || (0, P.isWritable)(n));
    P.isStream = or;
    var ar = (n) => !!n && typeof n == "object" && n instanceof _e.EventEmitter && typeof n.pipe == "function" && n.pipe !== ws.default.Writable.prototype.pipe;
    P.isReadable = ar;
    var lr = (n) => !!n && typeof n == "object" && n instanceof _e.EventEmitter && typeof n.write == "function" && typeof n.end == "function";
    P.isWritable = lr;
    var $ = Symbol("EOF"), q = Symbol("maybeEmitEnd"), K = Symbol("emittedEnd"), Bt = Symbol("emittingEnd"), lt = Symbol("emittedError"), It = Symbol("closed"), ps = Symbol("read"), Gt = Symbol("flush"), ms = Symbol("flushChunk"), L = Symbol("encoding"), rt = Symbol("decoder"), x = Symbol("flowing"), ct = Symbol("paused"), nt = Symbol("resume"), T = Symbol("buffer"), M = Symbol("pipes"), C = Symbol("bufferLength"), we = Symbol("bufferPush"), zt = Symbol("bufferShift"), k = Symbol("objectMode"), O = Symbol("destroyed"), be = Symbol("error"), ye = Symbol("emitData"), gs = Symbol("emitEnd"), Se = Symbol("emitEnd2"), I = Symbol("async"), ve = Symbol("abort"), Ut = Symbol("aborted"), ut = Symbol("signal"), Z = Symbol("dataListeners"), D = Symbol("discarded"), ft = (n) => Promise.resolve().then(n), cr = (n) => n(), ur = (n) => n === "end" || n === "finish" || n === "prefinish", fr = (n) => n instanceof ArrayBuffer || !!n && typeof n == "object" && n.constructor && n.constructor.name === "ArrayBuffer" && n.byteLength >= 0, dr = (n) => !Buffer.isBuffer(n) && ArrayBuffer.isView(n), $t = class {
      src;
      dest;
      opts;
      ondrain;
      constructor(t, e, s) {
        this.src = t, this.dest = e, this.opts = s, this.ondrain = () => t[nt](), this.dest.on("drain", this.ondrain);
      }
      unpipe() {
        this.dest.removeListener("drain", this.ondrain);
      }
      proxyErrors(t) {}
      end() {
        this.unpipe(), this.opts.end && this.dest.end();
      }
    }, Ee = class extends $t {
      unpipe() {
        this.src.removeListener("error", this.proxyErrors), super.unpipe();
      }
      constructor(t, e, s) {
        super(t, e, s), this.proxyErrors = (i) => this.dest.emit("error", i), t.on("error", this.proxyErrors);
      }
    }, pr = (n) => !!n.objectMode, mr = (n) => !n.objectMode && !!n.encoding && n.encoding !== "buffer", qt = class extends _e.EventEmitter {
      [x] = false;
      [ct] = false;
      [M] = [];
      [T] = [];
      [k];
      [L];
      [I];
      [rt];
      [$] = false;
      [K] = false;
      [Bt] = false;
      [It] = false;
      [lt] = null;
      [C] = 0;
      [O] = false;
      [ut];
      [Ut] = false;
      [Z] = 0;
      [D] = false;
      writable = true;
      readable = true;
      constructor(...t) {
        let e = t[0] || {};
        if (super(), e.objectMode && typeof e.encoding == "string")
          throw new TypeError("Encoding and objectMode may not be used together");
        pr(e) ? (this[k] = true, this[L] = null) : mr(e) ? (this[L] = e.encoding, this[k] = false) : (this[k] = false, this[L] = null), this[I] = !!e.async, this[rt] = this[L] ? new hr.StringDecoder(this[L]) : null, e && e.debugExposeBuffer === true && Object.defineProperty(this, "buffer", { get: () => this[T] }), e && e.debugExposePipes === true && Object.defineProperty(this, "pipes", { get: () => this[M] });
        let { signal: s } = e;
        s && (this[ut] = s, s.aborted ? this[ve]() : s.addEventListener("abort", () => this[ve]()));
      }
      get bufferLength() {
        return this[C];
      }
      get encoding() {
        return this[L];
      }
      set encoding(t) {
        throw new Error("Encoding must be set at instantiation time");
      }
      setEncoding(t) {
        throw new Error("Encoding must be set at instantiation time");
      }
      get objectMode() {
        return this[k];
      }
      set objectMode(t) {
        throw new Error("objectMode must be set at instantiation time");
      }
      get async() {
        return this[I];
      }
      set async(t) {
        this[I] = this[I] || !!t;
      }
      [ve]() {
        this[Ut] = true, this.emit("abort", this[ut]?.reason), this.destroy(this[ut]?.reason);
      }
      get aborted() {
        return this[Ut];
      }
      set aborted(t) {}
      write(t, e, s) {
        if (this[Ut])
          return false;
        if (this[$])
          throw new Error("write after end");
        if (this[O])
          return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), true;
        typeof e == "function" && (s = e, e = "utf8"), e || (e = "utf8");
        let i = this[I] ? ft : cr;
        if (!this[k] && !Buffer.isBuffer(t)) {
          if (dr(t))
            t = Buffer.from(t.buffer, t.byteOffset, t.byteLength);
          else if (fr(t))
            t = Buffer.from(t);
          else if (typeof t != "string")
            throw new Error("Non-contiguous data written to non-objectMode stream");
        }
        return this[k] ? (this[x] && this[C] !== 0 && this[Gt](true), this[x] ? this.emit("data", t) : this[we](t), this[C] !== 0 && this.emit("readable"), s && i(s), this[x]) : t.length ? (typeof t == "string" && !(e === this[L] && !this[rt]?.lastNeed) && (t = Buffer.from(t, e)), Buffer.isBuffer(t) && this[L] && (t = this[rt].write(t)), this[x] && this[C] !== 0 && this[Gt](true), this[x] ? this.emit("data", t) : this[we](t), this[C] !== 0 && this.emit("readable"), s && i(s), this[x]) : (this[C] !== 0 && this.emit("readable"), s && i(s), this[x]);
      }
      read(t) {
        if (this[O])
          return null;
        if (this[D] = false, this[C] === 0 || t === 0 || t && t > this[C])
          return this[q](), null;
        this[k] && (t = null), this[T].length > 1 && !this[k] && (this[T] = [this[L] ? this[T].join("") : Buffer.concat(this[T], this[C])]);
        let e = this[ps](t || null, this[T][0]);
        return this[q](), e;
      }
      [ps](t, e) {
        if (this[k])
          this[zt]();
        else {
          let s = e;
          t === s.length || t === null ? this[zt]() : typeof s == "string" ? (this[T][0] = s.slice(t), e = s.slice(0, t), this[C] -= t) : (this[T][0] = s.subarray(t), e = s.subarray(0, t), this[C] -= t);
        }
        return this.emit("data", e), !this[T].length && !this[$] && this.emit("drain"), e;
      }
      end(t, e, s) {
        return typeof t == "function" && (s = t, t = undefined), typeof e == "function" && (s = e, e = "utf8"), t !== undefined && this.write(t, e), s && this.once("end", s), this[$] = true, this.writable = false, (this[x] || !this[ct]) && this[q](), this;
      }
      [nt]() {
        this[O] || (!this[Z] && !this[M].length && (this[D] = true), this[ct] = false, this[x] = true, this.emit("resume"), this[T].length ? this[Gt]() : this[$] ? this[q]() : this.emit("drain"));
      }
      resume() {
        return this[nt]();
      }
      pause() {
        this[x] = false, this[ct] = true, this[D] = false;
      }
      get destroyed() {
        return this[O];
      }
      get flowing() {
        return this[x];
      }
      get paused() {
        return this[ct];
      }
      [we](t) {
        this[k] ? this[C] += 1 : this[C] += t.length, this[T].push(t);
      }
      [zt]() {
        return this[k] ? this[C] -= 1 : this[C] -= this[T][0].length, this[T].shift();
      }
      [Gt](t = false) {
        do
          ;
        while (this[ms](this[zt]()) && this[T].length);
        !t && !this[T].length && !this[$] && this.emit("drain");
      }
      [ms](t) {
        return this.emit("data", t), this[x];
      }
      pipe(t, e) {
        if (this[O])
          return t;
        this[D] = false;
        let s = this[K];
        return e = e || {}, t === ds.stdout || t === ds.stderr ? e.end = false : e.end = e.end !== false, e.proxyErrors = !!e.proxyErrors, s ? e.end && t.end() : (this[M].push(e.proxyErrors ? new Ee(this, t, e) : new $t(this, t, e)), this[I] ? ft(() => this[nt]()) : this[nt]()), t;
      }
      unpipe(t) {
        let e = this[M].find((s) => s.dest === t);
        e && (this[M].length === 1 ? (this[x] && this[Z] === 0 && (this[x] = false), this[M] = []) : this[M].splice(this[M].indexOf(e), 1), e.unpipe());
      }
      addListener(t, e) {
        return this.on(t, e);
      }
      on(t, e) {
        let s = super.on(t, e);
        if (t === "data")
          this[D] = false, this[Z]++, !this[M].length && !this[x] && this[nt]();
        else if (t === "readable" && this[C] !== 0)
          super.emit("readable");
        else if (ur(t) && this[K])
          super.emit(t), this.removeAllListeners(t);
        else if (t === "error" && this[lt]) {
          let i = e;
          this[I] ? ft(() => i.call(this, this[lt])) : i.call(this, this[lt]);
        }
        return s;
      }
      removeListener(t, e) {
        return this.off(t, e);
      }
      off(t, e) {
        let s = super.off(t, e);
        return t === "data" && (this[Z] = this.listeners("data").length, this[Z] === 0 && !this[D] && !this[M].length && (this[x] = false)), s;
      }
      removeAllListeners(t) {
        let e = super.removeAllListeners(t);
        return (t === "data" || t === undefined) && (this[Z] = 0, !this[D] && !this[M].length && (this[x] = false)), e;
      }
      get emittedEnd() {
        return this[K];
      }
      [q]() {
        !this[Bt] && !this[K] && !this[O] && this[T].length === 0 && this[$] && (this[Bt] = true, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[It] && this.emit("close"), this[Bt] = false);
      }
      emit(t, ...e) {
        let s = e[0];
        if (t !== "error" && t !== "close" && t !== O && this[O])
          return false;
        if (t === "data")
          return !this[k] && !s ? false : this[I] ? (ft(() => this[ye](s)), true) : this[ye](s);
        if (t === "end")
          return this[gs]();
        if (t === "close") {
          if (this[It] = true, !this[K] && !this[O])
            return false;
          let r = super.emit("close");
          return this.removeAllListeners("close"), r;
        } else if (t === "error") {
          this[lt] = s, super.emit(be, s);
          let r = !this[ut] || this.listeners("error").length ? super.emit("error", s) : false;
          return this[q](), r;
        } else if (t === "resume") {
          let r = super.emit("resume");
          return this[q](), r;
        } else if (t === "finish" || t === "prefinish") {
          let r = super.emit(t);
          return this.removeAllListeners(t), r;
        }
        let i = super.emit(t, ...e);
        return this[q](), i;
      }
      [ye](t) {
        for (let s of this[M])
          s.dest.write(t) === false && this.pause();
        let e = this[D] ? false : super.emit("data", t);
        return this[q](), e;
      }
      [gs]() {
        return this[K] ? false : (this[K] = true, this.readable = false, this[I] ? (ft(() => this[Se]()), true) : this[Se]());
      }
      [Se]() {
        if (this[rt]) {
          let e = this[rt].end();
          if (e) {
            for (let s of this[M])
              s.dest.write(e);
            this[D] || super.emit("data", e);
          }
        }
        for (let e of this[M])
          e.end();
        let t = super.emit("end");
        return this.removeAllListeners("end"), t;
      }
      async collect() {
        let t = Object.assign([], { dataLength: 0 });
        this[k] || (t.dataLength = 0);
        let e = this.promise();
        return this.on("data", (s) => {
          t.push(s), this[k] || (t.dataLength += s.length);
        }), await e, t;
      }
      async concat() {
        if (this[k])
          throw new Error("cannot concat in objectMode");
        let t = await this.collect();
        return this[L] ? t.join("") : Buffer.concat(t, t.dataLength);
      }
      async promise() {
        return new Promise((t, e) => {
          this.on(O, () => e(new Error("stream destroyed"))), this.on("error", (s) => e(s)), this.on("end", () => t());
        });
      }
      [Symbol.asyncIterator]() {
        this[D] = false;
        let t = false, e = async () => (this.pause(), t = true, { value: undefined, done: true });
        return { next: () => {
          if (t)
            return e();
          let i = this.read();
          if (i !== null)
            return Promise.resolve({ done: false, value: i });
          if (this[$])
            return e();
          let r, h, o = (c) => {
            this.off("data", a), this.off("end", l), this.off(O, f), e(), h(c);
          }, a = (c) => {
            this.off("error", o), this.off("end", l), this.off(O, f), this.pause(), r({ value: c, done: !!this[$] });
          }, l = () => {
            this.off("error", o), this.off("data", a), this.off(O, f), e(), r({ done: true, value: undefined });
          }, f = () => o(new Error("stream destroyed"));
          return new Promise((c, d) => {
            h = d, r = c, this.once(O, f), this.once("error", o), this.once("end", l), this.once("data", a);
          });
        }, throw: e, return: e, [Symbol.asyncIterator]() {
          return this;
        }, [Symbol.asyncDispose]: async () => {} };
      }
      [Symbol.iterator]() {
        this[D] = false;
        let t = false, e = () => (this.pause(), this.off(be, e), this.off(O, e), this.off("end", e), t = true, { done: true, value: undefined }), s = () => {
          if (t)
            return e();
          let i = this.read();
          return i === null ? e() : { done: false, value: i };
        };
        return this.once("end", e), this.once(be, e), this.once(O, e), { next: s, throw: e, return: e, [Symbol.iterator]() {
          return this;
        }, [Symbol.dispose]: () => {} };
      }
      destroy(t) {
        if (this[O])
          return t ? this.emit("error", t) : this.emit(O), this;
        this[O] = true, this[D] = true, this[T].length = 0, this[C] = 0;
        let e = this;
        return typeof e.close == "function" && !this[It] && e.close(), t ? this.emit("error", t) : this.emit(O), this;
      }
      static get isStream() {
        return P.isStream;
      }
    };
    P.Minipass = qt;
  });
  var Ms = R((_) => {
    var gr = _ && _.__createBinding || (Object.create ? function(n, t, e, s) {
      s === undefined && (s = e);
      var i = Object.getOwnPropertyDescriptor(t, e);
      (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
        return t[e];
      } }), Object.defineProperty(n, s, i);
    } : function(n, t, e, s) {
      s === undefined && (s = e), n[s] = t[e];
    }), wr = _ && _.__setModuleDefault || (Object.create ? function(n, t) {
      Object.defineProperty(n, "default", { enumerable: true, value: t });
    } : function(n, t) {
      n.default = t;
    }), br = _ && _.__importStar || function(n) {
      if (n && n.__esModule)
        return n;
      var t = {};
      if (n != null)
        for (var e in n)
          e !== "default" && Object.prototype.hasOwnProperty.call(n, e) && gr(t, n, e);
      return wr(t, n), t;
    };
    Object.defineProperty(_, "__esModule", { value: true });
    _.PathScurry = _.Path = _.PathScurryDarwin = _.PathScurryPosix = _.PathScurryWin32 = _.PathScurryBase = _.PathPosix = _.PathWin32 = _.PathBase = _.ChildrenCache = _.ResolveCache = undefined;
    var Qt = fs(), Yt = __require("path"), yr = __require("url"), pt = __require("fs"), Sr = br(__require("fs")), vr = pt.realpathSync.native, Ht = __require("fs/promises"), bs = Oe(), mt = { lstatSync: pt.lstatSync, readdir: pt.readdir, readdirSync: pt.readdirSync, readlinkSync: pt.readlinkSync, realpathSync: vr, promises: { lstat: Ht.lstat, readdir: Ht.readdir, readlink: Ht.readlink, realpath: Ht.realpath } }, _s = (n) => !n || n === mt || n === Sr ? mt : { ...mt, ...n, promises: { ...mt.promises, ...n.promises || {} } }, Os = /^\\\\\?\\([a-z]:)\\?$/i, Er = (n) => n.replace(/\//g, "\\").replace(Os, "$1\\"), _r = /[\\\/]/, N = 0, xs = 1, Ts = 2, G = 4, Cs = 6, Rs = 8, Q = 10, As = 12, j = 15, dt = ~j, xe = 16, ys = 32, gt = 64, W = 128, Vt = 256, Xt = 512, Ss = gt | W | Xt, Or = 1023, Te = (n) => n.isFile() ? Rs : n.isDirectory() ? G : n.isSymbolicLink() ? Q : n.isCharacterDevice() ? Ts : n.isBlockDevice() ? Cs : n.isSocket() ? As : n.isFIFO() ? xs : N, vs = new Qt.LRUCache({ max: 2 ** 12 }), wt = (n) => {
      let t = vs.get(n);
      if (t)
        return t;
      let e = n.normalize("NFKD");
      return vs.set(n, e), e;
    }, Es = new Qt.LRUCache({ max: 2 ** 12 }), Kt = (n) => {
      let t = Es.get(n);
      if (t)
        return t;
      let e = wt(n.toLowerCase());
      return Es.set(n, e), e;
    }, bt = class extends Qt.LRUCache {
      constructor() {
        super({ max: 256 });
      }
    };
    _.ResolveCache = bt;
    var Jt = class extends Qt.LRUCache {
      constructor(t = 16 * 1024) {
        super({ maxSize: t, sizeCalculation: (e) => e.length + 1 });
      }
    };
    _.ChildrenCache = Jt;
    var ks = Symbol("PathScurry setAsCwd"), A = class {
      name;
      root;
      roots;
      parent;
      nocase;
      isCWD = false;
      #t;
      #s;
      get dev() {
        return this.#s;
      }
      #n;
      get mode() {
        return this.#n;
      }
      #r;
      get nlink() {
        return this.#r;
      }
      #h;
      get uid() {
        return this.#h;
      }
      #S;
      get gid() {
        return this.#S;
      }
      #w;
      get rdev() {
        return this.#w;
      }
      #c;
      get blksize() {
        return this.#c;
      }
      #o;
      get ino() {
        return this.#o;
      }
      #f;
      get size() {
        return this.#f;
      }
      #u;
      get blocks() {
        return this.#u;
      }
      #a;
      get atimeMs() {
        return this.#a;
      }
      #i;
      get mtimeMs() {
        return this.#i;
      }
      #d;
      get ctimeMs() {
        return this.#d;
      }
      #v;
      get birthtimeMs() {
        return this.#v;
      }
      #y;
      get atime() {
        return this.#y;
      }
      #p;
      get mtime() {
        return this.#p;
      }
      #R;
      get ctime() {
        return this.#R;
      }
      #m;
      get birthtime() {
        return this.#m;
      }
      #O;
      #x;
      #g;
      #b;
      #E;
      #T;
      #e;
      #F;
      #P;
      #C;
      get parentPath() {
        return (this.parent || this).fullpath();
      }
      get path() {
        return this.parentPath;
      }
      constructor(t, e = N, s, i, r, h, o) {
        this.name = t, this.#O = r ? Kt(t) : wt(t), this.#e = e & Or, this.nocase = r, this.roots = i, this.root = s || this, this.#F = h, this.#g = o.fullpath, this.#E = o.relative, this.#T = o.relativePosix, this.parent = o.parent, this.parent ? this.#t = this.parent.#t : this.#t = _s(o.fs);
      }
      depth() {
        return this.#x !== undefined ? this.#x : this.parent ? this.#x = this.parent.depth() + 1 : this.#x = 0;
      }
      childrenCache() {
        return this.#F;
      }
      resolve(t) {
        if (!t)
          return this;
        let e = this.getRootString(t), i = t.substring(e.length).split(this.splitSep);
        return e ? this.getRoot(e).#D(i) : this.#D(i);
      }
      #D(t) {
        let e = this;
        for (let s of t)
          e = e.child(s);
        return e;
      }
      children() {
        let t = this.#F.get(this);
        if (t)
          return t;
        let e = Object.assign([], { provisional: 0 });
        return this.#F.set(this, e), this.#e &= ~xe, e;
      }
      child(t, e) {
        if (t === "" || t === ".")
          return this;
        if (t === "..")
          return this.parent || this;
        let s = this.children(), i = this.nocase ? Kt(t) : wt(t);
        for (let a of s)
          if (a.#O === i)
            return a;
        let r = this.parent ? this.sep : "", h = this.#g ? this.#g + r + t : undefined, o = this.newChild(t, N, { ...e, parent: this, fullpath: h });
        return this.canReaddir() || (o.#e |= W), s.push(o), o;
      }
      relative() {
        if (this.isCWD)
          return "";
        if (this.#E !== undefined)
          return this.#E;
        let t = this.name, e = this.parent;
        if (!e)
          return this.#E = this.name;
        let s = e.relative();
        return s + (!s || !e.parent ? "" : this.sep) + t;
      }
      relativePosix() {
        if (this.sep === "/")
          return this.relative();
        if (this.isCWD)
          return "";
        if (this.#T !== undefined)
          return this.#T;
        let t = this.name, e = this.parent;
        if (!e)
          return this.#T = this.fullpathPosix();
        let s = e.relativePosix();
        return s + (!s || !e.parent ? "" : "/") + t;
      }
      fullpath() {
        if (this.#g !== undefined)
          return this.#g;
        let t = this.name, e = this.parent;
        if (!e)
          return this.#g = this.name;
        let i = e.fullpath() + (e.parent ? this.sep : "") + t;
        return this.#g = i;
      }
      fullpathPosix() {
        if (this.#b !== undefined)
          return this.#b;
        if (this.sep === "/")
          return this.#b = this.fullpath();
        if (!this.parent) {
          let i = this.fullpath().replace(/\\/g, "/");
          return /^[a-z]:\//i.test(i) ? this.#b = `//?/${i}` : this.#b = i;
        }
        let t = this.parent, e = t.fullpathPosix(), s = e + (!e || !t.parent ? "" : "/") + this.name;
        return this.#b = s;
      }
      isUnknown() {
        return (this.#e & j) === N;
      }
      isType(t) {
        return this[`is${t}`]();
      }
      getType() {
        return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : this.isSocket() ? "Socket" : "Unknown";
      }
      isFile() {
        return (this.#e & j) === Rs;
      }
      isDirectory() {
        return (this.#e & j) === G;
      }
      isCharacterDevice() {
        return (this.#e & j) === Ts;
      }
      isBlockDevice() {
        return (this.#e & j) === Cs;
      }
      isFIFO() {
        return (this.#e & j) === xs;
      }
      isSocket() {
        return (this.#e & j) === As;
      }
      isSymbolicLink() {
        return (this.#e & Q) === Q;
      }
      lstatCached() {
        return this.#e & ys ? this : undefined;
      }
      readlinkCached() {
        return this.#P;
      }
      realpathCached() {
        return this.#C;
      }
      readdirCached() {
        let t = this.children();
        return t.slice(0, t.provisional);
      }
      canReadlink() {
        if (this.#P)
          return true;
        if (!this.parent)
          return false;
        let t = this.#e & j;
        return !(t !== N && t !== Q || this.#e & Vt || this.#e & W);
      }
      calledReaddir() {
        return !!(this.#e & xe);
      }
      isENOENT() {
        return !!(this.#e & W);
      }
      isNamed(t) {
        return this.nocase ? this.#O === Kt(t) : this.#O === wt(t);
      }
      async readlink() {
        let t = this.#P;
        if (t)
          return t;
        if (this.canReadlink() && this.parent)
          try {
            let e = await this.#t.promises.readlink(this.fullpath()), s = (await this.parent.realpath())?.resolve(e);
            if (s)
              return this.#P = s;
          } catch (e) {
            this.#M(e.code);
            return;
          }
      }
      readlinkSync() {
        let t = this.#P;
        if (t)
          return t;
        if (this.canReadlink() && this.parent)
          try {
            let e = this.#t.readlinkSync(this.fullpath()), s = this.parent.realpathSync()?.resolve(e);
            if (s)
              return this.#P = s;
          } catch (e) {
            this.#M(e.code);
            return;
          }
      }
      #W(t) {
        this.#e |= xe;
        for (let e = t.provisional;e < t.length; e++) {
          let s = t[e];
          s && s.#_();
        }
      }
      #_() {
        this.#e & W || (this.#e = (this.#e | W) & dt, this.#$());
      }
      #$() {
        let t = this.children();
        t.provisional = 0;
        for (let e of t)
          e.#_();
      }
      #L() {
        this.#e |= Xt, this.#j();
      }
      #j() {
        if (this.#e & gt)
          return;
        let t = this.#e;
        (t & j) === G && (t &= dt), this.#e = t | gt, this.#$();
      }
      #B(t = "") {
        t === "ENOTDIR" || t === "EPERM" ? this.#j() : t === "ENOENT" ? this.#_() : this.children().provisional = 0;
      }
      #k(t = "") {
        t === "ENOTDIR" ? this.parent.#j() : t === "ENOENT" && this.#_();
      }
      #M(t = "") {
        let e = this.#e;
        e |= Vt, t === "ENOENT" && (e |= W), (t === "EINVAL" || t === "UNKNOWN") && (e &= dt), this.#e = e, t === "ENOTDIR" && this.parent && this.parent.#j();
      }
      #I(t, e) {
        return this.#z(t, e) || this.#G(t, e);
      }
      #G(t, e) {
        let s = Te(t), i = this.newChild(t.name, s, { parent: this }), r = i.#e & j;
        return r !== G && r !== Q && r !== N && (i.#e |= gt), e.unshift(i), e.provisional++, i;
      }
      #z(t, e) {
        for (let s = e.provisional;s < e.length; s++) {
          let i = e[s];
          if ((this.nocase ? Kt(t.name) : wt(t.name)) === i.#O)
            return this.#l(t, i, s, e);
        }
      }
      #l(t, e, s, i) {
        let r = e.name;
        return e.#e = e.#e & dt | Te(t), r !== t.name && (e.name = t.name), s !== i.provisional && (s === i.length - 1 ? i.pop() : i.splice(s, 1), i.unshift(e)), i.provisional++, e;
      }
      async lstat() {
        if ((this.#e & W) === 0)
          try {
            return this.#U(await this.#t.promises.lstat(this.fullpath())), this;
          } catch (t) {
            this.#k(t.code);
          }
      }
      lstatSync() {
        if ((this.#e & W) === 0)
          try {
            return this.#U(this.#t.lstatSync(this.fullpath())), this;
          } catch (t) {
            this.#k(t.code);
          }
      }
      #U(t) {
        let { atime: e, atimeMs: s, birthtime: i, birthtimeMs: r, blksize: h, blocks: o, ctime: a, ctimeMs: l, dev: f, gid: c, ino: d, mode: u, mtime: m, mtimeMs: p, nlink: b, rdev: w, size: v, uid: E } = t;
        this.#y = e, this.#a = s, this.#m = i, this.#v = r, this.#c = h, this.#u = o, this.#R = a, this.#d = l, this.#s = f, this.#S = c, this.#o = d, this.#n = u, this.#p = m, this.#i = p, this.#r = b, this.#w = w, this.#f = v, this.#h = E;
        let y = Te(t);
        this.#e = this.#e & dt | y | ys, y !== N && y !== G && y !== Q && (this.#e |= gt);
      }
      #N = [];
      #A = false;
      #q(t) {
        this.#A = false;
        let e = this.#N.slice();
        this.#N.length = 0, e.forEach((s) => s(null, t));
      }
      readdirCB(t, e = false) {
        if (!this.canReaddir()) {
          e ? t(null, []) : queueMicrotask(() => t(null, []));
          return;
        }
        let s = this.children();
        if (this.calledReaddir()) {
          let r = s.slice(0, s.provisional);
          e ? t(null, r) : queueMicrotask(() => t(null, r));
          return;
        }
        if (this.#N.push(t), this.#A)
          return;
        this.#A = true;
        let i = this.fullpath();
        this.#t.readdir(i, { withFileTypes: true }, (r, h) => {
          if (r)
            this.#B(r.code), s.provisional = 0;
          else {
            for (let o of h)
              this.#I(o, s);
            this.#W(s);
          }
          this.#q(s.slice(0, s.provisional));
        });
      }
      #H;
      async readdir() {
        if (!this.canReaddir())
          return [];
        let t = this.children();
        if (this.calledReaddir())
          return t.slice(0, t.provisional);
        let e = this.fullpath();
        if (this.#H)
          await this.#H;
        else {
          let s = () => {};
          this.#H = new Promise((i) => s = i);
          try {
            for (let i of await this.#t.promises.readdir(e, { withFileTypes: true }))
              this.#I(i, t);
            this.#W(t);
          } catch (i) {
            this.#B(i.code), t.provisional = 0;
          }
          this.#H = undefined, s();
        }
        return t.slice(0, t.provisional);
      }
      readdirSync() {
        if (!this.canReaddir())
          return [];
        let t = this.children();
        if (this.calledReaddir())
          return t.slice(0, t.provisional);
        let e = this.fullpath();
        try {
          for (let s of this.#t.readdirSync(e, { withFileTypes: true }))
            this.#I(s, t);
          this.#W(t);
        } catch (s) {
          this.#B(s.code), t.provisional = 0;
        }
        return t.slice(0, t.provisional);
      }
      canReaddir() {
        if (this.#e & Ss)
          return false;
        let t = j & this.#e;
        return t === N || t === G || t === Q;
      }
      shouldWalk(t, e) {
        return (this.#e & G) === G && !(this.#e & Ss) && !t.has(this) && (!e || e(this));
      }
      async realpath() {
        if (this.#C)
          return this.#C;
        if (!((Xt | Vt | W) & this.#e))
          try {
            let t = await this.#t.promises.realpath(this.fullpath());
            return this.#C = this.resolve(t);
          } catch {
            this.#L();
          }
      }
      realpathSync() {
        if (this.#C)
          return this.#C;
        if (!((Xt | Vt | W) & this.#e))
          try {
            let t = this.#t.realpathSync(this.fullpath());
            return this.#C = this.resolve(t);
          } catch {
            this.#L();
          }
      }
      [ks](t) {
        if (t === this)
          return;
        t.isCWD = false, this.isCWD = true;
        let e = new Set([]), s = [], i = this;
        for (;i && i.parent; )
          e.add(i), i.#E = s.join(this.sep), i.#T = s.join("/"), i = i.parent, s.push("..");
        for (i = t;i && i.parent && !e.has(i); )
          i.#E = undefined, i.#T = undefined, i = i.parent;
      }
    };
    _.PathBase = A;
    var yt = class n extends A {
      sep = "\\";
      splitSep = _r;
      constructor(t, e = N, s, i, r, h, o) {
        super(t, e, s, i, r, h, o);
      }
      newChild(t, e = N, s = {}) {
        return new n(t, e, this.root, this.roots, this.nocase, this.childrenCache(), s);
      }
      getRootString(t) {
        return Yt.win32.parse(t).root;
      }
      getRoot(t) {
        if (t = Er(t.toUpperCase()), t === this.root.name)
          return this.root;
        for (let [e, s] of Object.entries(this.roots))
          if (this.sameRoot(t, e))
            return this.roots[t] = s;
        return this.roots[t] = new Et(t, this).root;
      }
      sameRoot(t, e = this.root.name) {
        return t = t.toUpperCase().replace(/\//g, "\\").replace(Os, "$1\\"), t === e;
      }
    };
    _.PathWin32 = yt;
    var St = class n extends A {
      splitSep = "/";
      sep = "/";
      constructor(t, e = N, s, i, r, h, o) {
        super(t, e, s, i, r, h, o);
      }
      getRootString(t) {
        return t.startsWith("/") ? "/" : "";
      }
      getRoot(t) {
        return this.root;
      }
      newChild(t, e = N, s = {}) {
        return new n(t, e, this.root, this.roots, this.nocase, this.childrenCache(), s);
      }
    };
    _.PathPosix = St;
    var vt = class {
      root;
      rootPath;
      roots;
      cwd;
      #t;
      #s;
      #n;
      nocase;
      #r;
      constructor(t = process.cwd(), e, s, { nocase: i, childrenCacheSize: r = 16 * 1024, fs: h = mt } = {}) {
        this.#r = _s(h), (t instanceof URL || t.startsWith("file://")) && (t = (0, yr.fileURLToPath)(t));
        let o = e.resolve(t);
        this.roots = Object.create(null), this.rootPath = this.parseRootPath(o), this.#t = new bt, this.#s = new bt, this.#n = new Jt(r);
        let a = o.substring(this.rootPath.length).split(s);
        if (a.length === 1 && !a[0] && a.pop(), i === undefined)
          throw new TypeError("must provide nocase setting to PathScurryBase ctor");
        this.nocase = i, this.root = this.newRoot(this.#r), this.roots[this.rootPath] = this.root;
        let l = this.root, f = a.length - 1, c = e.sep, d = this.rootPath, u = false;
        for (let m of a) {
          let p = f--;
          l = l.child(m, { relative: new Array(p).fill("..").join(c), relativePosix: new Array(p).fill("..").join("/"), fullpath: d += (u ? "" : c) + m }), u = true;
        }
        this.cwd = l;
      }
      depth(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), t.depth();
      }
      childrenCache() {
        return this.#n;
      }
      resolve(...t) {
        let e = "";
        for (let r = t.length - 1;r >= 0; r--) {
          let h = t[r];
          if (!(!h || h === ".") && (e = e ? `${h}/${e}` : h, this.isAbsolute(h)))
            break;
        }
        let s = this.#t.get(e);
        if (s !== undefined)
          return s;
        let i = this.cwd.resolve(e).fullpath();
        return this.#t.set(e, i), i;
      }
      resolvePosix(...t) {
        let e = "";
        for (let r = t.length - 1;r >= 0; r--) {
          let h = t[r];
          if (!(!h || h === ".") && (e = e ? `${h}/${e}` : h, this.isAbsolute(h)))
            break;
        }
        let s = this.#s.get(e);
        if (s !== undefined)
          return s;
        let i = this.cwd.resolve(e).fullpathPosix();
        return this.#s.set(e, i), i;
      }
      relative(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), t.relative();
      }
      relativePosix(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), t.relativePosix();
      }
      basename(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), t.name;
      }
      dirname(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), (t.parent || t).fullpath();
      }
      async readdir(t = this.cwd, e = { withFileTypes: true }) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s } = e;
        if (t.canReaddir()) {
          let i = await t.readdir();
          return s ? i : i.map((r) => r.name);
        } else
          return [];
      }
      readdirSync(t = this.cwd, e = { withFileTypes: true }) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s = true } = e;
        return t.canReaddir() ? s ? t.readdirSync() : t.readdirSync().map((i) => i.name) : [];
      }
      async lstat(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), t.lstat();
      }
      lstatSync(t = this.cwd) {
        return typeof t == "string" && (t = this.cwd.resolve(t)), t.lstatSync();
      }
      async readlink(t = this.cwd, { withFileTypes: e } = { withFileTypes: false }) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t.withFileTypes, t = this.cwd);
        let s = await t.readlink();
        return e ? s : s?.fullpath();
      }
      readlinkSync(t = this.cwd, { withFileTypes: e } = { withFileTypes: false }) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t.withFileTypes, t = this.cwd);
        let s = t.readlinkSync();
        return e ? s : s?.fullpath();
      }
      async realpath(t = this.cwd, { withFileTypes: e } = { withFileTypes: false }) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t.withFileTypes, t = this.cwd);
        let s = await t.realpath();
        return e ? s : s?.fullpath();
      }
      realpathSync(t = this.cwd, { withFileTypes: e } = { withFileTypes: false }) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t.withFileTypes, t = this.cwd);
        let s = t.realpathSync();
        return e ? s : s?.fullpath();
      }
      async walk(t = this.cwd, e = {}) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s = true, follow: i = false, filter: r, walkFilter: h } = e, o = [];
        (!r || r(t)) && o.push(s ? t : t.fullpath());
        let a = new Set, l = (c, d) => {
          a.add(c), c.readdirCB((u, m) => {
            if (u)
              return d(u);
            let p = m.length;
            if (!p)
              return d();
            let b = () => {
              --p === 0 && d();
            };
            for (let w of m)
              (!r || r(w)) && o.push(s ? w : w.fullpath()), i && w.isSymbolicLink() ? w.realpath().then((v) => v?.isUnknown() ? v.lstat() : v).then((v) => v?.shouldWalk(a, h) ? l(v, b) : b()) : w.shouldWalk(a, h) ? l(w, b) : b();
          }, true);
        }, f = t;
        return new Promise((c, d) => {
          l(f, (u) => {
            if (u)
              return d(u);
            c(o);
          });
        });
      }
      walkSync(t = this.cwd, e = {}) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s = true, follow: i = false, filter: r, walkFilter: h } = e, o = [];
        (!r || r(t)) && o.push(s ? t : t.fullpath());
        let a = new Set([t]);
        for (let l of a) {
          let f = l.readdirSync();
          for (let c of f) {
            (!r || r(c)) && o.push(s ? c : c.fullpath());
            let d = c;
            if (c.isSymbolicLink()) {
              if (!(i && (d = c.realpathSync())))
                continue;
              d.isUnknown() && d.lstatSync();
            }
            d.shouldWalk(a, h) && a.add(d);
          }
        }
        return o;
      }
      [Symbol.asyncIterator]() {
        return this.iterate();
      }
      iterate(t = this.cwd, e = {}) {
        return typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd), this.stream(t, e)[Symbol.asyncIterator]();
      }
      [Symbol.iterator]() {
        return this.iterateSync();
      }
      *iterateSync(t = this.cwd, e = {}) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s = true, follow: i = false, filter: r, walkFilter: h } = e;
        (!r || r(t)) && (yield s ? t : t.fullpath());
        let o = new Set([t]);
        for (let a of o) {
          let l = a.readdirSync();
          for (let f of l) {
            (!r || r(f)) && (yield s ? f : f.fullpath());
            let c = f;
            if (f.isSymbolicLink()) {
              if (!(i && (c = f.realpathSync())))
                continue;
              c.isUnknown() && c.lstatSync();
            }
            c.shouldWalk(o, h) && o.add(c);
          }
        }
      }
      stream(t = this.cwd, e = {}) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s = true, follow: i = false, filter: r, walkFilter: h } = e, o = new bs.Minipass({ objectMode: true });
        (!r || r(t)) && o.write(s ? t : t.fullpath());
        let a = new Set, l = [t], f = 0, c = () => {
          let d = false;
          for (;!d; ) {
            let u = l.shift();
            if (!u) {
              f === 0 && o.end();
              return;
            }
            f++, a.add(u);
            let m = (b, w, v = false) => {
              if (b)
                return o.emit("error", b);
              if (i && !v) {
                let E = [];
                for (let y of w)
                  y.isSymbolicLink() && E.push(y.realpath().then((S) => S?.isUnknown() ? S.lstat() : S));
                if (E.length) {
                  Promise.all(E).then(() => m(null, w, true));
                  return;
                }
              }
              for (let E of w)
                E && (!r || r(E)) && (o.write(s ? E : E.fullpath()) || (d = true));
              f--;
              for (let E of w) {
                let y = E.realpathCached() || E;
                y.shouldWalk(a, h) && l.push(y);
              }
              d && !o.flowing ? o.once("drain", c) : p || c();
            }, p = true;
            u.readdirCB(m, true), p = false;
          }
        };
        return c(), o;
      }
      streamSync(t = this.cwd, e = {}) {
        typeof t == "string" ? t = this.cwd.resolve(t) : t instanceof A || (e = t, t = this.cwd);
        let { withFileTypes: s = true, follow: i = false, filter: r, walkFilter: h } = e, o = new bs.Minipass({ objectMode: true }), a = new Set;
        (!r || r(t)) && o.write(s ? t : t.fullpath());
        let l = [t], f = 0, c = () => {
          let d = false;
          for (;!d; ) {
            let u = l.shift();
            if (!u) {
              f === 0 && o.end();
              return;
            }
            f++, a.add(u);
            let m = u.readdirSync();
            for (let p of m)
              (!r || r(p)) && (o.write(s ? p : p.fullpath()) || (d = true));
            f--;
            for (let p of m) {
              let b = p;
              if (p.isSymbolicLink()) {
                if (!(i && (b = p.realpathSync())))
                  continue;
                b.isUnknown() && b.lstatSync();
              }
              b.shouldWalk(a, h) && l.push(b);
            }
          }
          d && !o.flowing && o.once("drain", c);
        };
        return c(), o;
      }
      chdir(t = this.cwd) {
        let e = this.cwd;
        this.cwd = typeof t == "string" ? this.cwd.resolve(t) : t, this.cwd[ks](e);
      }
    };
    _.PathScurryBase = vt;
    var Et = class extends vt {
      sep = "\\";
      constructor(t = process.cwd(), e = {}) {
        let { nocase: s = true } = e;
        super(t, Yt.win32, "\\", { ...e, nocase: s }), this.nocase = s;
        for (let i = this.cwd;i; i = i.parent)
          i.nocase = this.nocase;
      }
      parseRootPath(t) {
        return Yt.win32.parse(t).root.toUpperCase();
      }
      newRoot(t) {
        return new yt(this.rootPath, G, undefined, this.roots, this.nocase, this.childrenCache(), { fs: t });
      }
      isAbsolute(t) {
        return t.startsWith("/") || t.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(t);
      }
    };
    _.PathScurryWin32 = Et;
    var _t = class extends vt {
      sep = "/";
      constructor(t = process.cwd(), e = {}) {
        let { nocase: s = false } = e;
        super(t, Yt.posix, "/", { ...e, nocase: s }), this.nocase = s;
      }
      parseRootPath(t) {
        return "/";
      }
      newRoot(t) {
        return new St(this.rootPath, G, undefined, this.roots, this.nocase, this.childrenCache(), { fs: t });
      }
      isAbsolute(t) {
        return t.startsWith("/");
      }
    };
    _.PathScurryPosix = _t;
    var Zt = class extends _t {
      constructor(t = process.cwd(), e = {}) {
        let { nocase: s = true } = e;
        super(t, { ...e, nocase: s });
      }
    };
    _.PathScurryDarwin = Zt;
    _.Path = process.platform === "win32" ? yt : St;
    _.PathScurry = process.platform === "win32" ? Et : process.platform === "darwin" ? Zt : _t;
  });
  var Re = R((te) => {
    Object.defineProperty(te, "__esModule", { value: true });
    te.Pattern = undefined;
    var xr = H(), Tr = (n) => n.length >= 1, Cr = (n) => n.length >= 1, Rr = Symbol.for("nodejs.util.inspect.custom"), Ce = class n {
      #t;
      #s;
      #n;
      length;
      #r;
      #h;
      #S;
      #w;
      #c;
      #o;
      #f = true;
      constructor(t, e, s, i) {
        if (!Tr(t))
          throw new TypeError("empty pattern list");
        if (!Cr(e))
          throw new TypeError("empty glob list");
        if (e.length !== t.length)
          throw new TypeError("mismatched pattern list and glob list lengths");
        if (this.length = t.length, s < 0 || s >= this.length)
          throw new TypeError("index out of range");
        if (this.#t = t, this.#s = e, this.#n = s, this.#r = i, this.#n === 0) {
          if (this.isUNC()) {
            let [r, h, o, a, ...l] = this.#t, [f, c, d, u, ...m] = this.#s;
            l[0] === "" && (l.shift(), m.shift());
            let p = [r, h, o, a, ""].join("/"), b = [f, c, d, u, ""].join("/");
            this.#t = [p, ...l], this.#s = [b, ...m], this.length = this.#t.length;
          } else if (this.isDrive() || this.isAbsolute()) {
            let [r, ...h] = this.#t, [o, ...a] = this.#s;
            h[0] === "" && (h.shift(), a.shift());
            let l = r + "/", f = o + "/";
            this.#t = [l, ...h], this.#s = [f, ...a], this.length = this.#t.length;
          }
        }
      }
      [Rr]() {
        return "Pattern <" + this.#s.slice(this.#n).join("/") + ">";
      }
      pattern() {
        return this.#t[this.#n];
      }
      isString() {
        return typeof this.#t[this.#n] == "string";
      }
      isGlobstar() {
        return this.#t[this.#n] === xr.GLOBSTAR;
      }
      isRegExp() {
        return this.#t[this.#n] instanceof RegExp;
      }
      globString() {
        return this.#S = this.#S || (this.#n === 0 ? this.isAbsolute() ? this.#s[0] + this.#s.slice(1).join("/") : this.#s.join("/") : this.#s.slice(this.#n).join("/"));
      }
      hasMore() {
        return this.length > this.#n + 1;
      }
      rest() {
        return this.#h !== undefined ? this.#h : this.hasMore() ? (this.#h = new n(this.#t, this.#s, this.#n + 1, this.#r), this.#h.#o = this.#o, this.#h.#c = this.#c, this.#h.#w = this.#w, this.#h) : this.#h = null;
      }
      isUNC() {
        let t = this.#t;
        return this.#c !== undefined ? this.#c : this.#c = this.#r === "win32" && this.#n === 0 && t[0] === "" && t[1] === "" && typeof t[2] == "string" && !!t[2] && typeof t[3] == "string" && !!t[3];
      }
      isDrive() {
        let t = this.#t;
        return this.#w !== undefined ? this.#w : this.#w = this.#r === "win32" && this.#n === 0 && this.length > 1 && typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]);
      }
      isAbsolute() {
        let t = this.#t;
        return this.#o !== undefined ? this.#o : this.#o = t[0] === "" && t.length > 1 || this.isDrive() || this.isUNC();
      }
      root() {
        let t = this.#t[0];
        return typeof t == "string" && this.isAbsolute() && this.#n === 0 ? t : "";
      }
      checkFollowGlobstar() {
        return !(this.#n === 0 || !this.isGlobstar() || !this.#f);
      }
      markFollowGlobstar() {
        return this.#n === 0 || !this.isGlobstar() || !this.#f ? false : (this.#f = false, true);
      }
    };
    te.Pattern = Ce;
  });
  var ke = R((ee) => {
    Object.defineProperty(ee, "__esModule", { value: true });
    ee.Ignore = undefined;
    var Ps = H(), Ar = Re(), kr = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux", Ae = class {
      relative;
      relativeChildren;
      absolute;
      absoluteChildren;
      platform;
      mmopts;
      constructor(t, { nobrace: e, nocase: s, noext: i, noglobstar: r, platform: h = kr }) {
        this.relative = [], this.absolute = [], this.relativeChildren = [], this.absoluteChildren = [], this.platform = h, this.mmopts = { dot: true, nobrace: e, nocase: s, noext: i, noglobstar: r, optimizationLevel: 2, platform: h, nocomment: true, nonegate: true };
        for (let o of t)
          this.add(o);
      }
      add(t) {
        let e = new Ps.Minimatch(t, this.mmopts);
        for (let s = 0;s < e.set.length; s++) {
          let i = e.set[s], r = e.globParts[s];
          if (!i || !r)
            throw new Error("invalid pattern object");
          for (;i[0] === "." && r[0] === "."; )
            i.shift(), r.shift();
          let h = new Ar.Pattern(i, r, 0, this.platform), o = new Ps.Minimatch(h.globString(), this.mmopts), a = r[r.length - 1] === "**", l = h.isAbsolute();
          l ? this.absolute.push(o) : this.relative.push(o), a && (l ? this.absoluteChildren.push(o) : this.relativeChildren.push(o));
        }
      }
      ignored(t) {
        let e = t.fullpath(), s = `${e}/`, i = t.relative() || ".", r = `${i}/`;
        for (let h of this.relative)
          if (h.match(i) || h.match(r))
            return true;
        for (let h of this.absolute)
          if (h.match(e) || h.match(s))
            return true;
        return false;
      }
      childrenIgnored(t) {
        let e = t.fullpath() + "/", s = (t.relative() || ".") + "/";
        for (let i of this.relativeChildren)
          if (i.match(s))
            return true;
        for (let i of this.absoluteChildren)
          if (i.match(e))
            return true;
        return false;
      }
    };
    ee.Ignore = Ae;
  });
  var Fs = R((z) => {
    Object.defineProperty(z, "__esModule", { value: true });
    z.Processor = z.SubWalks = z.MatchRecord = z.HasWalkedCache = undefined;
    var Ds = H(), se = class n {
      store;
      constructor(t = new Map) {
        this.store = t;
      }
      copy() {
        return new n(new Map(this.store));
      }
      hasWalked(t, e) {
        return this.store.get(t.fullpath())?.has(e.globString());
      }
      storeWalked(t, e) {
        let s = t.fullpath(), i = this.store.get(s);
        i ? i.add(e.globString()) : this.store.set(s, new Set([e.globString()]));
      }
    };
    z.HasWalkedCache = se;
    var ie = class {
      store = new Map;
      add(t, e, s) {
        let i = (e ? 2 : 0) | (s ? 1 : 0), r = this.store.get(t);
        this.store.set(t, r === undefined ? i : i & r);
      }
      entries() {
        return [...this.store.entries()].map(([t, e]) => [t, !!(e & 2), !!(e & 1)]);
      }
    };
    z.MatchRecord = ie;
    var re = class {
      store = new Map;
      add(t, e) {
        if (!t.canReaddir())
          return;
        let s = this.store.get(t);
        s ? s.find((i) => i.globString() === e.globString()) || s.push(e) : this.store.set(t, [e]);
      }
      get(t) {
        let e = this.store.get(t);
        if (!e)
          throw new Error("attempting to walk unknown path");
        return e;
      }
      entries() {
        return this.keys().map((t) => [t, this.store.get(t)]);
      }
      keys() {
        return [...this.store.keys()].filter((t) => t.canReaddir());
      }
    };
    z.SubWalks = re;
    var Me = class n {
      hasWalkedCache;
      matches = new ie;
      subwalks = new re;
      patterns;
      follow;
      dot;
      opts;
      constructor(t, e) {
        this.opts = t, this.follow = !!t.follow, this.dot = !!t.dot, this.hasWalkedCache = e ? e.copy() : new se;
      }
      processPatterns(t, e) {
        this.patterns = e;
        let s = e.map((i) => [t, i]);
        for (let [i, r] of s) {
          this.hasWalkedCache.storeWalked(i, r);
          let h = r.root(), o = r.isAbsolute() && this.opts.absolute !== false;
          if (h) {
            i = i.resolve(h === "/" && this.opts.root !== undefined ? this.opts.root : h);
            let c = r.rest();
            if (c)
              r = c;
            else {
              this.matches.add(i, true, false);
              continue;
            }
          }
          if (i.isENOENT())
            continue;
          let a, l, f = false;
          for (;typeof (a = r.pattern()) == "string" && (l = r.rest()); )
            i = i.resolve(a), r = l, f = true;
          if (a = r.pattern(), l = r.rest(), f) {
            if (this.hasWalkedCache.hasWalked(i, r))
              continue;
            this.hasWalkedCache.storeWalked(i, r);
          }
          if (typeof a == "string") {
            let c = a === ".." || a === "" || a === ".";
            this.matches.add(i.resolve(a), o, c);
            continue;
          } else if (a === Ds.GLOBSTAR) {
            (!i.isSymbolicLink() || this.follow || r.checkFollowGlobstar()) && this.subwalks.add(i, r);
            let c = l?.pattern(), d = l?.rest();
            if (!l || (c === "" || c === ".") && !d)
              this.matches.add(i, o, c === "" || c === ".");
            else if (c === "..") {
              let u = i.parent || i;
              d ? this.hasWalkedCache.hasWalked(u, d) || this.subwalks.add(u, d) : this.matches.add(u, o, true);
            }
          } else
            a instanceof RegExp && this.subwalks.add(i, r);
        }
        return this;
      }
      subwalkTargets() {
        return this.subwalks.keys();
      }
      child() {
        return new n(this.opts, this.hasWalkedCache);
      }
      filterEntries(t, e) {
        let s = this.subwalks.get(t), i = this.child();
        for (let r of e)
          for (let h of s) {
            let o = h.isAbsolute(), a = h.pattern(), l = h.rest();
            a === Ds.GLOBSTAR ? i.testGlobstar(r, h, l, o) : a instanceof RegExp ? i.testRegExp(r, a, l, o) : i.testString(r, a, l, o);
          }
        return i;
      }
      testGlobstar(t, e, s, i) {
        if ((this.dot || !t.name.startsWith(".")) && (e.hasMore() || this.matches.add(t, i, false), t.canReaddir() && (this.follow || !t.isSymbolicLink() ? this.subwalks.add(t, e) : t.isSymbolicLink() && (s && e.checkFollowGlobstar() ? this.subwalks.add(t, s) : e.markFollowGlobstar() && this.subwalks.add(t, e)))), s) {
          let r = s.pattern();
          if (typeof r == "string" && r !== ".." && r !== "" && r !== ".")
            this.testString(t, r, s.rest(), i);
          else if (r === "..") {
            let h = t.parent || t;
            this.subwalks.add(h, s);
          } else
            r instanceof RegExp && this.testRegExp(t, r, s.rest(), i);
        }
      }
      testRegExp(t, e, s, i) {
        e.test(t.name) && (s ? this.subwalks.add(t, s) : this.matches.add(t, i, false));
      }
      testString(t, e, s, i) {
        t.isNamed(e) && (s ? this.subwalks.add(t, s) : this.matches.add(t, i, false));
      }
    };
    z.Processor = Me;
  });
  var Ls = R((X) => {
    Object.defineProperty(X, "__esModule", { value: true });
    X.GlobStream = X.GlobWalker = X.GlobUtil = undefined;
    var Mr = Oe(), js = ke(), Ns = Fs(), Pr = (n, t) => typeof n == "string" ? new js.Ignore([n], t) : Array.isArray(n) ? new js.Ignore(n, t) : n, Ot = class {
      path;
      patterns;
      opts;
      seen = new Set;
      paused = false;
      aborted = false;
      #t = [];
      #s;
      #n;
      signal;
      maxDepth;
      includeChildMatches;
      constructor(t, e, s) {
        if (this.patterns = t, this.path = e, this.opts = s, this.#n = !s.posix && s.platform === "win32" ? "\\" : "/", this.includeChildMatches = s.includeChildMatches !== false, (s.ignore || !this.includeChildMatches) && (this.#s = Pr(s.ignore ?? [], s), !this.includeChildMatches && typeof this.#s.add != "function")) {
          let i = "cannot ignore child matches, ignore lacks add() method.";
          throw new Error(i);
        }
        this.maxDepth = s.maxDepth || 1 / 0, s.signal && (this.signal = s.signal, this.signal.addEventListener("abort", () => {
          this.#t.length = 0;
        }));
      }
      #r(t) {
        return this.seen.has(t) || !!this.#s?.ignored?.(t);
      }
      #h(t) {
        return !!this.#s?.childrenIgnored?.(t);
      }
      pause() {
        this.paused = true;
      }
      resume() {
        if (this.signal?.aborted)
          return;
        this.paused = false;
        let t;
        for (;!this.paused && (t = this.#t.shift()); )
          t();
      }
      onResume(t) {
        this.signal?.aborted || (this.paused ? this.#t.push(t) : t());
      }
      async matchCheck(t, e) {
        if (e && this.opts.nodir)
          return;
        let s;
        if (this.opts.realpath) {
          if (s = t.realpathCached() || await t.realpath(), !s)
            return;
          t = s;
        }
        let r = t.isUnknown() || this.opts.stat ? await t.lstat() : t;
        if (this.opts.follow && this.opts.nodir && r?.isSymbolicLink()) {
          let h = await r.realpath();
          h && (h.isUnknown() || this.opts.stat) && await h.lstat();
        }
        return this.matchCheckTest(r, e);
      }
      matchCheckTest(t, e) {
        return t && (this.maxDepth === 1 / 0 || t.depth() <= this.maxDepth) && (!e || t.canReaddir()) && (!this.opts.nodir || !t.isDirectory()) && (!this.opts.nodir || !this.opts.follow || !t.isSymbolicLink() || !t.realpathCached()?.isDirectory()) && !this.#r(t) ? t : undefined;
      }
      matchCheckSync(t, e) {
        if (e && this.opts.nodir)
          return;
        let s;
        if (this.opts.realpath) {
          if (s = t.realpathCached() || t.realpathSync(), !s)
            return;
          t = s;
        }
        let r = t.isUnknown() || this.opts.stat ? t.lstatSync() : t;
        if (this.opts.follow && this.opts.nodir && r?.isSymbolicLink()) {
          let h = r.realpathSync();
          h && (h?.isUnknown() || this.opts.stat) && h.lstatSync();
        }
        return this.matchCheckTest(r, e);
      }
      matchFinish(t, e) {
        if (this.#r(t))
          return;
        if (!this.includeChildMatches && this.#s?.add) {
          let r = `${t.relativePosix()}/**`;
          this.#s.add(r);
        }
        let s = this.opts.absolute === undefined ? e : this.opts.absolute;
        this.seen.add(t);
        let i = this.opts.mark && t.isDirectory() ? this.#n : "";
        if (this.opts.withFileTypes)
          this.matchEmit(t);
        else if (s) {
          let r = this.opts.posix ? t.fullpathPosix() : t.fullpath();
          this.matchEmit(r + i);
        } else {
          let r = this.opts.posix ? t.relativePosix() : t.relative(), h = this.opts.dotRelative && !r.startsWith(".." + this.#n) ? "." + this.#n : "";
          this.matchEmit(r ? h + r + i : "." + i);
        }
      }
      async match(t, e, s) {
        let i = await this.matchCheck(t, s);
        i && this.matchFinish(i, e);
      }
      matchSync(t, e, s) {
        let i = this.matchCheckSync(t, s);
        i && this.matchFinish(i, e);
      }
      walkCB(t, e, s) {
        this.signal?.aborted && s(), this.walkCB2(t, e, new Ns.Processor(this.opts), s);
      }
      walkCB2(t, e, s, i) {
        if (this.#h(t))
          return i();
        if (this.signal?.aborted && i(), this.paused) {
          this.onResume(() => this.walkCB2(t, e, s, i));
          return;
        }
        s.processPatterns(t, e);
        let r = 1, h = () => {
          --r === 0 && i();
        };
        for (let [o, a, l] of s.matches.entries())
          this.#r(o) || (r++, this.match(o, a, l).then(() => h()));
        for (let o of s.subwalkTargets()) {
          if (this.maxDepth !== 1 / 0 && o.depth() >= this.maxDepth)
            continue;
          r++;
          let a = o.readdirCached();
          o.calledReaddir() ? this.walkCB3(o, a, s, h) : o.readdirCB((l, f) => this.walkCB3(o, f, s, h), true);
        }
        h();
      }
      walkCB3(t, e, s, i) {
        s = s.filterEntries(t, e);
        let r = 1, h = () => {
          --r === 0 && i();
        };
        for (let [o, a, l] of s.matches.entries())
          this.#r(o) || (r++, this.match(o, a, l).then(() => h()));
        for (let [o, a] of s.subwalks.entries())
          r++, this.walkCB2(o, a, s.child(), h);
        h();
      }
      walkCBSync(t, e, s) {
        this.signal?.aborted && s(), this.walkCB2Sync(t, e, new Ns.Processor(this.opts), s);
      }
      walkCB2Sync(t, e, s, i) {
        if (this.#h(t))
          return i();
        if (this.signal?.aborted && i(), this.paused) {
          this.onResume(() => this.walkCB2Sync(t, e, s, i));
          return;
        }
        s.processPatterns(t, e);
        let r = 1, h = () => {
          --r === 0 && i();
        };
        for (let [o, a, l] of s.matches.entries())
          this.#r(o) || this.matchSync(o, a, l);
        for (let o of s.subwalkTargets()) {
          if (this.maxDepth !== 1 / 0 && o.depth() >= this.maxDepth)
            continue;
          r++;
          let a = o.readdirSync();
          this.walkCB3Sync(o, a, s, h);
        }
        h();
      }
      walkCB3Sync(t, e, s, i) {
        s = s.filterEntries(t, e);
        let r = 1, h = () => {
          --r === 0 && i();
        };
        for (let [o, a, l] of s.matches.entries())
          this.#r(o) || this.matchSync(o, a, l);
        for (let [o, a] of s.subwalks.entries())
          r++, this.walkCB2Sync(o, a, s.child(), h);
        h();
      }
    };
    X.GlobUtil = Ot;
    var Pe = class extends Ot {
      matches = new Set;
      constructor(t, e, s) {
        super(t, e, s);
      }
      matchEmit(t) {
        this.matches.add(t);
      }
      async walk() {
        if (this.signal?.aborted)
          throw this.signal.reason;
        return this.path.isUnknown() && await this.path.lstat(), await new Promise((t, e) => {
          this.walkCB(this.path, this.patterns, () => {
            this.signal?.aborted ? e(this.signal.reason) : t(this.matches);
          });
        }), this.matches;
      }
      walkSync() {
        if (this.signal?.aborted)
          throw this.signal.reason;
        return this.path.isUnknown() && this.path.lstatSync(), this.walkCBSync(this.path, this.patterns, () => {
          if (this.signal?.aborted)
            throw this.signal.reason;
        }), this.matches;
      }
    };
    X.GlobWalker = Pe;
    var De = class extends Ot {
      results;
      constructor(t, e, s) {
        super(t, e, s), this.results = new Mr.Minipass({ signal: this.signal, objectMode: true }), this.results.on("drain", () => this.resume()), this.results.on("resume", () => this.resume());
      }
      matchEmit(t) {
        this.results.write(t), this.results.flowing || this.pause();
      }
      stream() {
        let t = this.path;
        return t.isUnknown() ? t.lstat().then(() => {
          this.walkCB(t, this.patterns, () => this.results.end());
        }) : this.walkCB(t, this.patterns, () => this.results.end()), this.results;
      }
      streamSync() {
        return this.path.isUnknown() && this.path.lstatSync(), this.walkCBSync(this.path, this.patterns, () => this.results.end()), this.results;
      }
    };
    X.GlobStream = De;
  });
  var je = R((oe) => {
    Object.defineProperty(oe, "__esModule", { value: true });
    oe.Glob = undefined;
    var Dr = H(), Fr = __require("url"), ne = Ms(), jr = Re(), he = Ls(), Nr = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux", Fe = class {
      absolute;
      cwd;
      root;
      dot;
      dotRelative;
      follow;
      ignore;
      magicalBraces;
      mark;
      matchBase;
      maxDepth;
      nobrace;
      nocase;
      nodir;
      noext;
      noglobstar;
      pattern;
      platform;
      realpath;
      scurry;
      stat;
      signal;
      windowsPathsNoEscape;
      withFileTypes;
      includeChildMatches;
      opts;
      patterns;
      constructor(t, e) {
        if (!e)
          throw new TypeError("glob options required");
        if (this.withFileTypes = !!e.withFileTypes, this.signal = e.signal, this.follow = !!e.follow, this.dot = !!e.dot, this.dotRelative = !!e.dotRelative, this.nodir = !!e.nodir, this.mark = !!e.mark, e.cwd ? (e.cwd instanceof URL || e.cwd.startsWith("file://")) && (e.cwd = (0, Fr.fileURLToPath)(e.cwd)) : this.cwd = "", this.cwd = e.cwd || "", this.root = e.root, this.magicalBraces = !!e.magicalBraces, this.nobrace = !!e.nobrace, this.noext = !!e.noext, this.realpath = !!e.realpath, this.absolute = e.absolute, this.includeChildMatches = e.includeChildMatches !== false, this.noglobstar = !!e.noglobstar, this.matchBase = !!e.matchBase, this.maxDepth = typeof e.maxDepth == "number" ? e.maxDepth : 1 / 0, this.stat = !!e.stat, this.ignore = e.ignore, this.withFileTypes && this.absolute !== undefined)
          throw new Error("cannot set absolute and withFileTypes:true");
        if (typeof t == "string" && (t = [t]), this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || e.allowWindowsEscape === false, this.windowsPathsNoEscape && (t = t.map((a) => a.replace(/\\/g, "/"))), this.matchBase) {
          if (e.noglobstar)
            throw new TypeError("base matching requires globstar");
          t = t.map((a) => a.includes("/") ? a : `./**/${a}`);
        }
        if (this.pattern = t, this.platform = e.platform || Nr, this.opts = { ...e, platform: this.platform }, e.scurry) {
          if (this.scurry = e.scurry, e.nocase !== undefined && e.nocase !== e.scurry.nocase)
            throw new Error("nocase option contradicts provided scurry option");
        } else {
          let a = e.platform === "win32" ? ne.PathScurryWin32 : e.platform === "darwin" ? ne.PathScurryDarwin : e.platform ? ne.PathScurryPosix : ne.PathScurry;
          this.scurry = new a(this.cwd, { nocase: e.nocase, fs: e.fs });
        }
        this.nocase = this.scurry.nocase;
        let s = this.platform === "darwin" || this.platform === "win32", i = { braceExpandMax: 1e4, ...e, dot: this.dot, matchBase: this.matchBase, nobrace: this.nobrace, nocase: this.nocase, nocaseMagicOnly: s, nocomment: true, noext: this.noext, nonegate: true, optimizationLevel: 2, platform: this.platform, windowsPathsNoEscape: this.windowsPathsNoEscape, debug: !!this.opts.debug }, r = this.pattern.map((a) => new Dr.Minimatch(a, i)), [h, o] = r.reduce((a, l) => (a[0].push(...l.set), a[1].push(...l.globParts), a), [[], []]);
        this.patterns = h.map((a, l) => {
          let f = o[l];
          if (!f)
            throw new Error("invalid pattern object");
          return new jr.Pattern(a, f, 0, this.platform);
        });
      }
      async walk() {
        return [...await new he.GlobWalker(this.patterns, this.scurry.cwd, { ...this.opts, maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0, platform: this.platform, nocase: this.nocase, includeChildMatches: this.includeChildMatches }).walk()];
      }
      walkSync() {
        return [...new he.GlobWalker(this.patterns, this.scurry.cwd, { ...this.opts, maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0, platform: this.platform, nocase: this.nocase, includeChildMatches: this.includeChildMatches }).walkSync()];
      }
      stream() {
        return new he.GlobStream(this.patterns, this.scurry.cwd, { ...this.opts, maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0, platform: this.platform, nocase: this.nocase, includeChildMatches: this.includeChildMatches }).stream();
      }
      streamSync() {
        return new he.GlobStream(this.patterns, this.scurry.cwd, { ...this.opts, maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0, platform: this.platform, nocase: this.nocase, includeChildMatches: this.includeChildMatches }).streamSync();
      }
      iterateSync() {
        return this.streamSync()[Symbol.iterator]();
      }
      [Symbol.iterator]() {
        return this.iterateSync();
      }
      iterate() {
        return this.stream()[Symbol.asyncIterator]();
      }
      [Symbol.asyncIterator]() {
        return this.iterate();
      }
    };
    oe.Glob = Fe;
  });
  var Ne = R((ae) => {
    Object.defineProperty(ae, "__esModule", { value: true });
    ae.hasMagic = undefined;
    var Lr = H(), Wr = (n, t = {}) => {
      Array.isArray(n) || (n = [n]);
      for (let e of n)
        if (new Lr.Minimatch(e, t).hasMagic())
          return true;
      return false;
    };
    ae.hasMagic = Wr;
  });
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.glob = exports.sync = exports.iterate = exports.iterateSync = exports.stream = exports.streamSync = exports.Ignore = exports.hasMagic = exports.Glob = exports.unescape = exports.escape = undefined;
  exports.globStreamSync = xt;
  exports.globStream = Le;
  exports.globSync = We;
  exports.globIterateSync = Tt;
  exports.globIterate = Be;
  var Ws = H();
  var tt = je();
  var Br = Ne();
  var Is = H();
  Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
    return Is.escape;
  } });
  Object.defineProperty(exports, "unescape", { enumerable: true, get: function() {
    return Is.unescape;
  } });
  var Ir = je();
  Object.defineProperty(exports, "Glob", { enumerable: true, get: function() {
    return Ir.Glob;
  } });
  var Gr = Ne();
  Object.defineProperty(exports, "hasMagic", { enumerable: true, get: function() {
    return Gr.hasMagic;
  } });
  var zr = ke();
  Object.defineProperty(exports, "Ignore", { enumerable: true, get: function() {
    return zr.Ignore;
  } });
  function xt(n, t = {}) {
    return new tt.Glob(n, t).streamSync();
  }
  function Le(n, t = {}) {
    return new tt.Glob(n, t).stream();
  }
  function We(n, t = {}) {
    return new tt.Glob(n, t).walkSync();
  }
  async function Bs(n, t = {}) {
    return new tt.Glob(n, t).walk();
  }
  function Tt(n, t = {}) {
    return new tt.Glob(n, t).iterateSync();
  }
  function Be(n, t = {}) {
    return new tt.Glob(n, t).iterate();
  }
  exports.streamSync = xt;
  exports.stream = Object.assign(Le, { sync: xt });
  exports.iterateSync = Tt;
  exports.iterate = Object.assign(Be, { sync: Tt });
  exports.sync = Object.assign(We, { stream: xt, iterate: Tt });
  exports.glob = Object.assign(Bs, { glob: Bs, globSync: We, sync: exports.sync, globStream: Le, stream: exports.stream, globStreamSync: xt, streamSync: exports.streamSync, globIterate: Be, iterate: exports.iterate, globIterateSync: Tt, iterateSync: exports.iterateSync, Glob: tt.Glob, hasMagic: Br.hasMagic, escape: Ws.escape, unescape: Ws.unescape });
  exports.glob.glob = exports.glob;
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/util/glob.js
var require_glob = __commonJS((exports, module) => {
  var { glob } = require_index_min2();
  var path = __require("path");
  var globify = (pattern) => pattern.split(path.win32.sep).join(path.posix.sep);
  module.exports = (path2, options) => glob(globify(path2), options);
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/content/rm.js
var require_rm = __commonJS((exports, module) => {
  var fs = __require("fs/promises");
  var contentPath = require_path();
  var { hasContent } = require_read();
  module.exports = rm;
  async function rm(cache, integrity) {
    const content = await hasContent(cache, integrity);
    if (content && content.sri) {
      await fs.rm(contentPath(cache, content.sri), { recursive: true, force: true });
      return true;
    } else {
      return false;
    }
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/rm.js
var require_rm2 = __commonJS((exports, module) => {
  var { rm } = __require("fs/promises");
  var glob = require_glob();
  var index = require_entry_index();
  var memo = require_memoization();
  var path = __require("path");
  var rmContent = require_rm();
  module.exports = entry;
  module.exports.entry = entry;
  function entry(cache, key, opts) {
    memo.clearMemoized();
    return index.delete(cache, key, opts);
  }
  module.exports.content = content;
  function content(cache, integrity) {
    memo.clearMemoized();
    return rmContent(cache, integrity);
  }
  module.exports.all = all;
  async function all(cache) {
    memo.clearMemoized();
    const paths = await glob(path.join(cache, "*(content-*|index-*)"), { silent: true, nosort: true });
    return Promise.all(paths.map((p) => rm(p, { recursive: true, force: true })));
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/verify.js
var require_verify = __commonJS((exports, module) => {
  var {
    mkdir,
    readFile,
    rm,
    stat,
    truncate,
    writeFile
  } = __require("fs/promises");
  var contentPath = require_path();
  var fsm = require_lib3();
  var glob = require_glob();
  var index = require_entry_index();
  var path = __require("path");
  var ssri = require_lib();
  var hasOwnProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  var verifyOpts = (opts) => ({
    concurrency: 20,
    log: { silly() {} },
    ...opts
  });
  module.exports = verify;
  async function verify(cache, opts) {
    opts = verifyOpts(opts);
    opts.log.silly("verify", "verifying cache at", cache);
    const steps = [
      markStartTime,
      fixPerms,
      garbageCollect,
      rebuildIndex,
      cleanTmp,
      writeVerifile,
      markEndTime
    ];
    const stats = {};
    for (const step of steps) {
      const label = step.name;
      const start = new Date;
      const s = await step(cache, opts);
      if (s) {
        Object.keys(s).forEach((k) => {
          stats[k] = s[k];
        });
      }
      const end = new Date;
      if (!stats.runTime) {
        stats.runTime = {};
      }
      stats.runTime[label] = end - start;
    }
    stats.runTime.total = stats.endTime - stats.startTime;
    opts.log.silly("verify", "verification finished for", cache, "in", `${stats.runTime.total}ms`);
    return stats;
  }
  async function markStartTime() {
    return { startTime: new Date };
  }
  async function markEndTime() {
    return { endTime: new Date };
  }
  async function fixPerms(cache, opts) {
    opts.log.silly("verify", "fixing cache permissions");
    await mkdir(cache, { recursive: true });
    return null;
  }
  async function garbageCollect(cache, opts) {
    opts.log.silly("verify", "garbage collecting content");
    const { default: pMap } = await import("./chunk-jd32zbps.js");
    const indexStream = index.lsStream(cache);
    const liveContent = new Set;
    indexStream.on("data", (entry) => {
      if (opts.filter && !opts.filter(entry)) {
        return;
      }
      const integrity = ssri.parse(entry.integrity);
      for (const algo in integrity) {
        liveContent.add(integrity[algo].toString());
      }
    });
    await new Promise((resolve, reject) => {
      indexStream.on("end", resolve).on("error", reject);
    });
    const contentDir = contentPath.contentDir(cache);
    const files = await glob(path.join(contentDir, "**"), {
      follow: false,
      nodir: true,
      nosort: true
    });
    const stats = {
      verifiedContent: 0,
      reclaimedCount: 0,
      reclaimedSize: 0,
      badContentCount: 0,
      keptSize: 0
    };
    await pMap(files, async (f) => {
      const split = f.split(/[/\\]/);
      const digest = split.slice(split.length - 3).join("");
      const algo = split[split.length - 4];
      const integrity = ssri.fromHex(digest, algo);
      if (liveContent.has(integrity.toString())) {
        const info = await verifyContent(f, integrity);
        if (!info.valid) {
          stats.reclaimedCount++;
          stats.badContentCount++;
          stats.reclaimedSize += info.size;
        } else {
          stats.verifiedContent++;
          stats.keptSize += info.size;
        }
      } else {
        stats.reclaimedCount++;
        const s = await stat(f);
        await rm(f, { recursive: true, force: true });
        stats.reclaimedSize += s.size;
      }
      return stats;
    }, { concurrency: opts.concurrency });
    return stats;
  }
  async function verifyContent(filepath, sri) {
    const contentInfo = {};
    try {
      const { size } = await stat(filepath);
      contentInfo.size = size;
      contentInfo.valid = true;
      await ssri.checkStream(new fsm.ReadStream(filepath), sri);
    } catch (err) {
      if (err.code === "ENOENT") {
        return { size: 0, valid: false };
      }
      if (err.code !== "EINTEGRITY") {
        throw err;
      }
      await rm(filepath, { recursive: true, force: true });
      contentInfo.valid = false;
    }
    return contentInfo;
  }
  async function rebuildIndex(cache, opts) {
    opts.log.silly("verify", "rebuilding index");
    const { default: pMap } = await import("./chunk-jd32zbps.js");
    const entries = await index.ls(cache);
    const stats = {
      missingContent: 0,
      rejectedEntries: 0,
      totalEntries: 0
    };
    const buckets = {};
    for (const k in entries) {
      if (hasOwnProperty(entries, k)) {
        const hashed = index.hashKey(k);
        const entry = entries[k];
        const excluded = opts.filter && !opts.filter(entry);
        excluded && stats.rejectedEntries++;
        if (buckets[hashed] && !excluded) {
          buckets[hashed].push(entry);
        } else if (buckets[hashed] && excluded) {} else if (excluded) {
          buckets[hashed] = [];
          buckets[hashed]._path = index.bucketPath(cache, k);
        } else {
          buckets[hashed] = [entry];
          buckets[hashed]._path = index.bucketPath(cache, k);
        }
      }
    }
    await pMap(Object.keys(buckets), (key) => {
      return rebuildBucket(cache, buckets[key], stats, opts);
    }, { concurrency: opts.concurrency });
    return stats;
  }
  async function rebuildBucket(cache, bucket, stats) {
    await truncate(bucket._path);
    for (const entry of bucket) {
      const content = contentPath(cache, entry.integrity);
      try {
        await stat(content);
        await index.insert(cache, entry.key, entry.integrity, {
          metadata: entry.metadata,
          size: entry.size,
          time: entry.time
        });
        stats.totalEntries++;
      } catch (err) {
        if (err.code === "ENOENT") {
          stats.rejectedEntries++;
          stats.missingContent++;
        } else {
          throw err;
        }
      }
    }
  }
  function cleanTmp(cache, opts) {
    opts.log.silly("verify", "cleaning tmp directory");
    return rm(path.join(cache, "tmp"), { recursive: true, force: true });
  }
  async function writeVerifile(cache, opts) {
    const verifile = path.join(cache, "_lastverified");
    opts.log.silly("verify", "writing verifile to " + verifile);
    return writeFile(verifile, `${Date.now()}`);
  }
  module.exports.lastRun = lastRun;
  async function lastRun(cache) {
    const data = await readFile(path.join(cache, "_lastverified"), { encoding: "utf8" });
    return new Date(+data);
  }
});

// node_modules/.bun/cacache@20.0.4/node_modules/cacache/lib/index.js
var get = require_get();
var put = require_put();
var rm = require_rm2();
var verify = require_verify();
var { clearMemoized } = require_memoization();
var tmp = require_tmp();
var index = require_entry_index();
var $index = {};
$index.compact = index.compact;
$index.insert = index.insert;
var $ls = index.ls;
$ls.stream = index.lsStream;
var $get = get;
$get.byDigest = get.byDigest;
$get.stream = get.stream;
$get.stream.byDigest = get.stream.byDigest;
$get.copy = get.copy;
$get.copy.byDigest = get.copy.byDigest;
$get.info = get.info;
$get.hasContent = get.hasContent;
var $put = put;
$put.stream = put.stream;
var $rm = rm.entry;
$rm.all = rm.all;
$rm.entry = $rm;
$rm.content = rm.content;
var $clearMemoized = clearMemoized;
var $tmp = {};
$tmp.mkdir = tmp.mkdir;
$tmp.withTmp = tmp.withTmp;
var $verify = verify;
$verify.lastRun = verify.lastRun;
export {
  $verify as verify,
  $tmp as tmp,
  $rm as rm,
  $put as put,
  $ls as ls,
  $index as index,
  $get as get,
  $clearMemoized as clearMemoized
};
export default {
  get verify() {
    return $verify;
  },
  get tmp() {
    return $tmp;
  },
  get rm() {
    return $rm;
  },
  get put() {
    return $put;
  },
  get ls() {
    return $ls;
  },
  get index() {
    return $index;
  },
  get get() {
    return $get;
  },
  get clearMemoized() {
    return $clearMemoized;
  }
};
