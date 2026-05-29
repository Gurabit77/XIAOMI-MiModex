// @bun
import {
  require_graceful_fs
} from "./chunk-v1kzp02e.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __commonJS,
  __esm,
  __export,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/array.ts
function intersperse(as, separator) {
  return as.flatMap((a, i) => i ? [separator(i), a] : [a]);
}
function count(arr, pred) {
  let n = 0;
  for (const x of arr)
    n += +!!pred(x);
  return n;
}
function uniq(xs) {
  return [...new Set(xs)];
}
var init_array = () => {};

// node_modules/.bun/retry@0.12.0/node_modules/retry/lib/retry_operation.js
var require_retry_operation = __commonJS((exports, module) => {
  function RetryOperation(timeouts, options) {
    if (typeof options === "boolean") {
      options = { forever: options };
    }
    this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
    this._timeouts = timeouts;
    this._options = options || {};
    this._maxRetryTime = options && options.maxRetryTime || Infinity;
    this._fn = null;
    this._errors = [];
    this._attempts = 1;
    this._operationTimeout = null;
    this._operationTimeoutCb = null;
    this._timeout = null;
    this._operationStart = null;
    if (this._options.forever) {
      this._cachedTimeouts = this._timeouts.slice(0);
    }
  }
  module.exports = RetryOperation;
  RetryOperation.prototype.reset = function() {
    this._attempts = 1;
    this._timeouts = this._originalTimeouts;
  };
  RetryOperation.prototype.stop = function() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeouts = [];
    this._cachedTimeouts = null;
  };
  RetryOperation.prototype.retry = function(err) {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    if (!err) {
      return false;
    }
    var currentTime = new Date().getTime();
    if (err && currentTime - this._operationStart >= this._maxRetryTime) {
      this._errors.unshift(new Error("RetryOperation timeout occurred"));
      return false;
    }
    this._errors.push(err);
    var timeout = this._timeouts.shift();
    if (timeout === undefined) {
      if (this._cachedTimeouts) {
        this._errors.splice(this._errors.length - 1, this._errors.length);
        this._timeouts = this._cachedTimeouts.slice(0);
        timeout = this._timeouts.shift();
      } else {
        return false;
      }
    }
    var self = this;
    var timer = setTimeout(function() {
      self._attempts++;
      if (self._operationTimeoutCb) {
        self._timeout = setTimeout(function() {
          self._operationTimeoutCb(self._attempts);
        }, self._operationTimeout);
        if (self._options.unref) {
          self._timeout.unref();
        }
      }
      self._fn(self._attempts);
    }, timeout);
    if (this._options.unref) {
      timer.unref();
    }
    return true;
  };
  RetryOperation.prototype.attempt = function(fn, timeoutOps) {
    this._fn = fn;
    if (timeoutOps) {
      if (timeoutOps.timeout) {
        this._operationTimeout = timeoutOps.timeout;
      }
      if (timeoutOps.cb) {
        this._operationTimeoutCb = timeoutOps.cb;
      }
    }
    var self = this;
    if (this._operationTimeoutCb) {
      this._timeout = setTimeout(function() {
        self._operationTimeoutCb();
      }, self._operationTimeout);
    }
    this._operationStart = new Date().getTime();
    this._fn(this._attempts);
  };
  RetryOperation.prototype.try = function(fn) {
    console.log("Using RetryOperation.try() is deprecated");
    this.attempt(fn);
  };
  RetryOperation.prototype.start = function(fn) {
    console.log("Using RetryOperation.start() is deprecated");
    this.attempt(fn);
  };
  RetryOperation.prototype.start = RetryOperation.prototype.try;
  RetryOperation.prototype.errors = function() {
    return this._errors;
  };
  RetryOperation.prototype.attempts = function() {
    return this._attempts;
  };
  RetryOperation.prototype.mainError = function() {
    if (this._errors.length === 0) {
      return null;
    }
    var counts = {};
    var mainError = null;
    var mainErrorCount = 0;
    for (var i = 0;i < this._errors.length; i++) {
      var error = this._errors[i];
      var message = error.message;
      var count2 = (counts[message] || 0) + 1;
      counts[message] = count2;
      if (count2 >= mainErrorCount) {
        mainError = error;
        mainErrorCount = count2;
      }
    }
    return mainError;
  };
});

// node_modules/.bun/retry@0.12.0/node_modules/retry/lib/retry.js
var require_retry = __commonJS((exports) => {
  var RetryOperation = require_retry_operation();
  exports.operation = function(options) {
    var timeouts = exports.timeouts(options);
    return new RetryOperation(timeouts, {
      forever: options && options.forever,
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
    });
  };
  exports.timeouts = function(options) {
    if (options instanceof Array) {
      return [].concat(options);
    }
    var opts = {
      retries: 10,
      factor: 2,
      minTimeout: 1 * 1000,
      maxTimeout: Infinity,
      randomize: false
    };
    for (var key in options) {
      opts[key] = options[key];
    }
    if (opts.minTimeout > opts.maxTimeout) {
      throw new Error("minTimeout is greater than maxTimeout");
    }
    var timeouts = [];
    for (var i = 0;i < opts.retries; i++) {
      timeouts.push(this.createTimeout(i, opts));
    }
    if (options && options.forever && !timeouts.length) {
      timeouts.push(this.createTimeout(i, opts));
    }
    timeouts.sort(function(a, b) {
      return a - b;
    });
    return timeouts;
  };
  exports.createTimeout = function(attempt, opts) {
    var random = opts.randomize ? Math.random() + 1 : 1;
    var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
    timeout = Math.min(timeout, opts.maxTimeout);
    return timeout;
  };
  exports.wrap = function(obj, options, methods) {
    if (options instanceof Array) {
      methods = options;
      options = null;
    }
    if (!methods) {
      methods = [];
      for (var key in obj) {
        if (typeof obj[key] === "function") {
          methods.push(key);
        }
      }
    }
    for (var i = 0;i < methods.length; i++) {
      var method = methods[i];
      var original = obj[method];
      obj[method] = function retryWrapper(original2) {
        var op = exports.operation(options);
        var args = Array.prototype.slice.call(arguments, 1);
        var callback = args.pop();
        args.push(function(err) {
          if (op.retry(err)) {
            return;
          }
          if (err) {
            arguments[0] = op.mainError();
          }
          callback.apply(this, arguments);
        });
        op.attempt(function() {
          original2.apply(obj, args);
        });
      }.bind(obj, original);
      obj[method].options = options;
    }
  };
});

// node_modules/.bun/signal-exit@3.0.7/node_modules/signal-exit/signals.js
var require_signals = __commonJS((exports, module) => {
  module.exports = [
    "SIGABRT",
    "SIGALRM",
    "SIGHUP",
    "SIGINT",
    "SIGTERM"
  ];
  if (process.platform !== "win32") {
    module.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
  }
  if (process.platform === "linux") {
    module.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
  }
});

// node_modules/.bun/signal-exit@3.0.7/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS((exports, module) => {
  var process2 = global.process;
  var processOk = function(process3) {
    return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
  };
  if (!processOk(process2)) {
    module.exports = function() {
      return function() {};
    };
  } else {
    assert = __require("assert");
    signals = require_signals();
    isWin = /^win/i.test(process2.platform);
    EE = __require("events");
    if (typeof EE !== "function") {
      EE = EE.EventEmitter;
    }
    if (process2.__signal_exit_emitter__) {
      emitter = process2.__signal_exit_emitter__;
    } else {
      emitter = process2.__signal_exit_emitter__ = new EE;
      emitter.count = 0;
      emitter.emitted = {};
    }
    if (!emitter.infinite) {
      emitter.setMaxListeners(Infinity);
      emitter.infinite = true;
    }
    module.exports = function(cb, opts) {
      if (!processOk(global.process)) {
        return function() {};
      }
      assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
      if (loaded === false) {
        load();
      }
      var ev = "exit";
      if (opts && opts.alwaysLast) {
        ev = "afterexit";
      }
      var remove = function() {
        emitter.removeListener(ev, cb);
        if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
          unload();
        }
      };
      emitter.on(ev, cb);
      return remove;
    };
    unload = function unload2() {
      if (!loaded || !processOk(global.process)) {
        return;
      }
      loaded = false;
      signals.forEach(function(sig) {
        try {
          process2.removeListener(sig, sigListeners[sig]);
        } catch (er) {}
      });
      process2.emit = originalProcessEmit;
      process2.reallyExit = originalProcessReallyExit;
      emitter.count -= 1;
    };
    module.exports.unload = unload;
    emit = function emit2(event, code, signal) {
      if (emitter.emitted[event]) {
        return;
      }
      emitter.emitted[event] = true;
      emitter.emit(event, code, signal);
    };
    sigListeners = {};
    signals.forEach(function(sig) {
      sigListeners[sig] = function listener() {
        if (!processOk(global.process)) {
          return;
        }
        var listeners = process2.listeners(sig);
        if (listeners.length === emitter.count) {
          unload();
          emit("exit", null, sig);
          emit("afterexit", null, sig);
          if (isWin && sig === "SIGHUP") {
            sig = "SIGINT";
          }
          process2.kill(process2.pid, sig);
        }
      };
    });
    module.exports.signals = function() {
      return signals;
    };
    loaded = false;
    load = function load2() {
      if (loaded || !processOk(global.process)) {
        return;
      }
      loaded = true;
      emitter.count += 1;
      signals = signals.filter(function(sig) {
        try {
          process2.on(sig, sigListeners[sig]);
          return true;
        } catch (er) {
          return false;
        }
      });
      process2.emit = processEmit;
      process2.reallyExit = processReallyExit;
    };
    module.exports.load = load;
    originalProcessReallyExit = process2.reallyExit;
    processReallyExit = function processReallyExit2(code) {
      if (!processOk(global.process)) {
        return;
      }
      process2.exitCode = code || 0;
      emit("exit", process2.exitCode, null);
      emit("afterexit", process2.exitCode, null);
      originalProcessReallyExit.call(process2, process2.exitCode);
    };
    originalProcessEmit = process2.emit;
    processEmit = function processEmit2(ev, arg) {
      if (ev === "exit" && processOk(global.process)) {
        if (arg !== undefined) {
          process2.exitCode = arg;
        }
        var ret = originalProcessEmit.apply(this, arguments);
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        return ret;
      } else {
        return originalProcessEmit.apply(this, arguments);
      }
    };
  }
  var assert;
  var signals;
  var isWin;
  var EE;
  var emitter;
  var unload;
  var emit;
  var sigListeners;
  var loaded;
  var load;
  var originalProcessReallyExit;
  var processReallyExit;
  var originalProcessEmit;
  var processEmit;
});

// node_modules/.bun/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/mtime-precision.js
var require_mtime_precision = __commonJS((exports, module) => {
  var cacheSymbol = Symbol();
  function probe(file, fs, callback) {
    const cachedPrecision = fs[cacheSymbol];
    if (cachedPrecision) {
      return fs.stat(file, (err, stat) => {
        if (err) {
          return callback(err);
        }
        callback(null, stat.mtime, cachedPrecision);
      });
    }
    const mtime = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
    fs.utimes(file, mtime, mtime, (err) => {
      if (err) {
        return callback(err);
      }
      fs.stat(file, (err2, stat) => {
        if (err2) {
          return callback(err2);
        }
        const precision = stat.mtime.getTime() % 1000 === 0 ? "s" : "ms";
        Object.defineProperty(fs, cacheSymbol, { value: precision });
        callback(null, stat.mtime, precision);
      });
    });
  }
  function getMtime(precision) {
    let now = Date.now();
    if (precision === "s") {
      now = Math.ceil(now / 1000) * 1000;
    }
    return new Date(now);
  }
  exports.probe = probe;
  exports.getMtime = getMtime;
});

// node_modules/.bun/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/lockfile.js
var require_lockfile = __commonJS((exports, module) => {
  var path = __require("path");
  var fs = require_graceful_fs();
  var retry = require_retry();
  var onExit = require_signal_exit();
  var mtimePrecision = require_mtime_precision();
  var locks = {};
  function getLockFile(file, options) {
    return options.lockfilePath || `${file}.lock`;
  }
  function resolveCanonicalPath(file, options, callback) {
    if (!options.realpath) {
      return callback(null, path.resolve(file));
    }
    options.fs.realpath(file, callback);
  }
  function acquireLock(file, options, callback) {
    const lockfilePath = getLockFile(file, options);
    options.fs.mkdir(lockfilePath, (err) => {
      if (!err) {
        return mtimePrecision.probe(lockfilePath, options.fs, (err2, mtime, mtimePrecision2) => {
          if (err2) {
            options.fs.rmdir(lockfilePath, () => {});
            return callback(err2);
          }
          callback(null, mtime, mtimePrecision2);
        });
      }
      if (err.code !== "EEXIST") {
        return callback(err);
      }
      if (options.stale <= 0) {
        return callback(Object.assign(new Error("Lock file is already being held"), { code: "ELOCKED", file }));
      }
      options.fs.stat(lockfilePath, (err2, stat) => {
        if (err2) {
          if (err2.code === "ENOENT") {
            return acquireLock(file, { ...options, stale: 0 }, callback);
          }
          return callback(err2);
        }
        if (!isLockStale(stat, options)) {
          return callback(Object.assign(new Error("Lock file is already being held"), { code: "ELOCKED", file }));
        }
        removeLock(file, options, (err3) => {
          if (err3) {
            return callback(err3);
          }
          acquireLock(file, { ...options, stale: 0 }, callback);
        });
      });
    });
  }
  function isLockStale(stat, options) {
    return stat.mtime.getTime() < Date.now() - options.stale;
  }
  function removeLock(file, options, callback) {
    options.fs.rmdir(getLockFile(file, options), (err) => {
      if (err && err.code !== "ENOENT") {
        return callback(err);
      }
      callback();
    });
  }
  function updateLock(file, options) {
    const lock2 = locks[file];
    if (lock2.updateTimeout) {
      return;
    }
    lock2.updateDelay = lock2.updateDelay || options.update;
    lock2.updateTimeout = setTimeout(() => {
      lock2.updateTimeout = null;
      options.fs.stat(lock2.lockfilePath, (err, stat) => {
        const isOverThreshold = lock2.lastUpdate + options.stale < Date.now();
        if (err) {
          if (err.code === "ENOENT" || isOverThreshold) {
            return setLockAsCompromised(file, lock2, Object.assign(err, { code: "ECOMPROMISED" }));
          }
          lock2.updateDelay = 1000;
          return updateLock(file, options);
        }
        const isMtimeOurs = lock2.mtime.getTime() === stat.mtime.getTime();
        if (!isMtimeOurs) {
          return setLockAsCompromised(file, lock2, Object.assign(new Error("Unable to update lock within the stale threshold"), { code: "ECOMPROMISED" }));
        }
        const mtime = mtimePrecision.getMtime(lock2.mtimePrecision);
        options.fs.utimes(lock2.lockfilePath, mtime, mtime, (err2) => {
          const isOverThreshold2 = lock2.lastUpdate + options.stale < Date.now();
          if (lock2.released) {
            return;
          }
          if (err2) {
            if (err2.code === "ENOENT" || isOverThreshold2) {
              return setLockAsCompromised(file, lock2, Object.assign(err2, { code: "ECOMPROMISED" }));
            }
            lock2.updateDelay = 1000;
            return updateLock(file, options);
          }
          lock2.mtime = mtime;
          lock2.lastUpdate = Date.now();
          lock2.updateDelay = null;
          updateLock(file, options);
        });
      });
    }, lock2.updateDelay);
    if (lock2.updateTimeout.unref) {
      lock2.updateTimeout.unref();
    }
  }
  function setLockAsCompromised(file, lock2, err) {
    lock2.released = true;
    if (lock2.updateTimeout) {
      clearTimeout(lock2.updateTimeout);
    }
    if (locks[file] === lock2) {
      delete locks[file];
    }
    lock2.options.onCompromised(err);
  }
  function lock(file, options, callback) {
    options = {
      stale: 1e4,
      update: null,
      realpath: true,
      retries: 0,
      fs,
      onCompromised: (err) => {
        throw err;
      },
      ...options
    };
    options.retries = options.retries || 0;
    options.retries = typeof options.retries === "number" ? { retries: options.retries } : options.retries;
    options.stale = Math.max(options.stale || 0, 2000);
    options.update = options.update == null ? options.stale / 2 : options.update || 0;
    options.update = Math.max(Math.min(options.update, options.stale / 2), 1000);
    resolveCanonicalPath(file, options, (err, file2) => {
      if (err) {
        return callback(err);
      }
      const operation = retry.operation(options.retries);
      operation.attempt(() => {
        acquireLock(file2, options, (err2, mtime, mtimePrecision2) => {
          if (operation.retry(err2)) {
            return;
          }
          if (err2) {
            return callback(operation.mainError());
          }
          const lock2 = locks[file2] = {
            lockfilePath: getLockFile(file2, options),
            mtime,
            mtimePrecision: mtimePrecision2,
            options,
            lastUpdate: Date.now()
          };
          updateLock(file2, options);
          callback(null, (releasedCallback) => {
            if (lock2.released) {
              return releasedCallback && releasedCallback(Object.assign(new Error("Lock is already released"), { code: "ERELEASED" }));
            }
            unlock(file2, { ...options, realpath: false }, releasedCallback);
          });
        });
      });
    });
  }
  function unlock(file, options, callback) {
    options = {
      fs,
      realpath: true,
      ...options
    };
    resolveCanonicalPath(file, options, (err, file2) => {
      if (err) {
        return callback(err);
      }
      const lock2 = locks[file2];
      if (!lock2) {
        return callback(Object.assign(new Error("Lock is not acquired/owned by you"), { code: "ENOTACQUIRED" }));
      }
      lock2.updateTimeout && clearTimeout(lock2.updateTimeout);
      lock2.released = true;
      delete locks[file2];
      removeLock(file2, options, callback);
    });
  }
  function check(file, options, callback) {
    options = {
      stale: 1e4,
      realpath: true,
      fs,
      ...options
    };
    options.stale = Math.max(options.stale || 0, 2000);
    resolveCanonicalPath(file, options, (err, file2) => {
      if (err) {
        return callback(err);
      }
      options.fs.stat(getLockFile(file2, options), (err2, stat) => {
        if (err2) {
          return err2.code === "ENOENT" ? callback(null, false) : callback(err2);
        }
        return callback(null, !isLockStale(stat, options));
      });
    });
  }
  function getLocks() {
    return locks;
  }
  onExit(() => {
    for (const file in locks) {
      const options = locks[file].options;
      try {
        options.fs.rmdirSync(getLockFile(file, options));
      } catch (e) {}
    }
  });
  exports.lock = lock;
  exports.unlock = unlock;
  exports.check = check;
  exports.getLocks = getLocks;
});

// node_modules/.bun/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/adapter.js
var require_adapter = __commonJS((exports, module) => {
  var fs = require_graceful_fs();
  function createSyncFs(fs2) {
    const methods = ["mkdir", "realpath", "stat", "rmdir", "utimes"];
    const newFs = { ...fs2 };
    methods.forEach((method) => {
      newFs[method] = (...args) => {
        const callback = args.pop();
        let ret;
        try {
          ret = fs2[`${method}Sync`](...args);
        } catch (err) {
          return callback(err);
        }
        callback(null, ret);
      };
    });
    return newFs;
  }
  function toPromise(method) {
    return (...args) => new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
      method(...args);
    });
  }
  function toSync(method) {
    return (...args) => {
      let err;
      let result;
      args.push((_err, _result) => {
        err = _err;
        result = _result;
      });
      method(...args);
      if (err) {
        throw err;
      }
      return result;
    };
  }
  function toSyncOptions(options) {
    options = { ...options };
    options.fs = createSyncFs(options.fs || fs);
    if (typeof options.retries === "number" && options.retries > 0 || options.retries && typeof options.retries.retries === "number" && options.retries.retries > 0) {
      throw Object.assign(new Error("Cannot use retries with the sync api"), { code: "ESYNC" });
    }
    return options;
  }
  module.exports = {
    toPromise,
    toSync,
    toSyncOptions
  };
});

// node_modules/.bun/proper-lockfile@4.1.2/node_modules/proper-lockfile/index.js
var require_proper_lockfile = __commonJS((exports, module) => {
  var lockfile = require_lockfile();
  var { toPromise, toSync, toSyncOptions } = require_adapter();
  async function lock(file, options) {
    const release = await toPromise(lockfile.lock)(file, options);
    return toPromise(release);
  }
  function lockSync(file, options) {
    const release = toSync(lockfile.lock)(file, toSyncOptions(options));
    return toSync(release);
  }
  function unlock(file, options) {
    return toPromise(lockfile.unlock)(file, options);
  }
  function unlockSync(file, options) {
    return toSync(lockfile.unlock)(file, toSyncOptions(options));
  }
  function check(file, options) {
    return toPromise(lockfile.check)(file, options);
  }
  function checkSync(file, options) {
    return toSync(lockfile.check)(file, toSyncOptions(options));
  }
  module.exports = lock;
  module.exports.lock = lock;
  module.exports.unlock = unlock;
  module.exports.lockSync = lockSync;
  module.exports.unlockSync = unlockSync;
  module.exports.check = check;
  module.exports.checkSync = checkSync;
});

// src/utils/lockfile.ts
function getLockfile() {
  if (!_lockfile) {
    _lockfile = require_proper_lockfile();
  }
  return _lockfile;
}
function lock(file, options) {
  return getLockfile().lock(file, options);
}
function lockSync(file, options) {
  return getLockfile().lockSync(file, options);
}
function unlock(file, options) {
  return getLockfile().unlock(file, options);
}
function check(file, options) {
  return getLockfile().check(file, options);
}
var _lockfile;
var init_lockfile = () => {};

// src/utils/teammateContext.ts
import { AsyncLocalStorage } from "async_hooks";
function getTeammateContext() {
  return teammateContextStorage.getStore();
}
function runWithTeammateContext(context, fn) {
  return teammateContextStorage.run(context, fn);
}
function isInProcessTeammate() {
  return teammateContextStorage.getStore() !== undefined;
}
function createTeammateContext(config) {
  return {
    ...config,
    isInProcess: true
  };
}
var teammateContextStorage;
var init_teammateContext = __esm(() => {
  teammateContextStorage = new AsyncLocalStorage;
});

// src/utils/teammate.ts
var exports_teammate = {};
__export(exports_teammate, {
  waitForTeammatesToBecomeIdle: () => waitForTeammatesToBecomeIdle,
  setDynamicTeamContext: () => setDynamicTeamContext,
  runWithTeammateContext: () => runWithTeammateContext,
  isTeammate: () => isTeammate,
  isTeamLead: () => isTeamLead,
  isPlanModeRequired: () => isPlanModeRequired,
  isInProcessTeammate: () => isInProcessTeammate,
  hasWorkingInProcessTeammates: () => hasWorkingInProcessTeammates,
  hasActiveInProcessTeammates: () => hasActiveInProcessTeammates,
  getTeammateContext: () => getTeammateContext,
  getTeammateColor: () => getTeammateColor,
  getTeamName: () => getTeamName,
  getParentSessionId: () => getParentSessionId,
  getDynamicTeamContext: () => getDynamicTeamContext,
  getAgentName: () => getAgentName,
  getAgentId: () => getAgentId,
  createTeammateContext: () => createTeammateContext,
  clearDynamicTeamContext: () => clearDynamicTeamContext
});
function getParentSessionId() {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return inProcessCtx.parentSessionId;
  return dynamicTeamContext?.parentSessionId;
}
function setDynamicTeamContext(context) {
  dynamicTeamContext = context;
}
function clearDynamicTeamContext() {
  dynamicTeamContext = null;
}
function getDynamicTeamContext() {
  return dynamicTeamContext;
}
function getAgentId() {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return inProcessCtx.agentId;
  return dynamicTeamContext?.agentId;
}
function getAgentName() {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return inProcessCtx.agentName;
  return dynamicTeamContext?.agentName;
}
function getTeamName(teamContext) {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return inProcessCtx.teamName;
  if (dynamicTeamContext?.teamName)
    return dynamicTeamContext.teamName;
  return teamContext?.teamName;
}
function isTeammate() {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return true;
  return !!(dynamicTeamContext?.agentId && dynamicTeamContext?.teamName);
}
function getTeammateColor() {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return inProcessCtx.color;
  return dynamicTeamContext?.color;
}
function isPlanModeRequired() {
  const inProcessCtx = getTeammateContext();
  if (inProcessCtx)
    return inProcessCtx.planModeRequired;
  if (dynamicTeamContext !== null) {
    return dynamicTeamContext.planModeRequired;
  }
  return isEnvTruthy(process.env.CLAUDE_CODE_PLAN_MODE_REQUIRED);
}
function isTeamLead(teamContext) {
  if (!teamContext?.leadAgentId) {
    return false;
  }
  const myAgentId = getAgentId();
  const leadAgentId = teamContext.leadAgentId;
  if (myAgentId === leadAgentId) {
    return true;
  }
  if (!myAgentId) {
    return true;
  }
  return false;
}
function hasActiveInProcessTeammates(appState) {
  for (const task of Object.values(appState.tasks)) {
    if (task.type === "in_process_teammate" && task.status === "running") {
      return true;
    }
  }
  return false;
}
function hasWorkingInProcessTeammates(appState) {
  for (const task of Object.values(appState.tasks)) {
    if (task.type === "in_process_teammate" && task.status === "running" && !task.isIdle) {
      return true;
    }
  }
  return false;
}
function waitForTeammatesToBecomeIdle(setAppState, appState) {
  const workingTaskIds = [];
  for (const [taskId, task] of Object.entries(appState.tasks)) {
    if (task.type === "in_process_teammate" && task.status === "running" && !task.isIdle) {
      workingTaskIds.push(taskId);
    }
  }
  if (workingTaskIds.length === 0) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    let remaining = workingTaskIds.length;
    const onIdle = () => {
      remaining--;
      if (remaining === 0) {
        resolve();
      }
    };
    setAppState((prev) => {
      const newTasks = { ...prev.tasks };
      for (const taskId of workingTaskIds) {
        const task = newTasks[taskId];
        if (task && task.type === "in_process_teammate") {
          if (task.isIdle) {
            onIdle();
          } else {
            newTasks[taskId] = {
              ...task,
              onIdleCallbacks: [...task.onIdleCallbacks ?? [], onIdle]
            };
          }
        }
      }
      return { ...prev, tasks: newTasks };
    });
  });
}
var dynamicTeamContext = null;
var init_teammate = __esm(() => {
  init_teammateContext();
  init_envUtils();
  init_teammateContext();
});

export { intersperse, count, uniq, init_array, lock, lockSync, unlock, check, init_lockfile, getTeammateContext, runWithTeammateContext, isInProcessTeammate, createTeammateContext, init_teammateContext, getParentSessionId, getDynamicTeamContext, getAgentId, getAgentName, getTeamName, isTeammate, getTeammateColor, isPlanModeRequired, isTeamLead, hasActiveInProcessTeammates, hasWorkingInProcessTeammates, waitForTeammatesToBecomeIdle, exports_teammate, init_teammate };
