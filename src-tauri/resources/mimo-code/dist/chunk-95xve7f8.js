// @bun
import {
  L,
  init_index_min
} from "./chunk-jdq8jgyg.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/memoize.ts
function memoizeWithTTLAsync(f, cacheLifetimeMs = 5 * 60 * 1000) {
  const cache = new Map;
  const inFlight = new Map;
  const memoized = async (...args) => {
    const key = jsonStringify(args);
    const cached = cache.get(key);
    const now = Date.now();
    if (!cached) {
      const pending = inFlight.get(key);
      if (pending)
        return pending;
      const promise = f(...args);
      inFlight.set(key, promise);
      try {
        const result = await promise;
        if (inFlight.get(key) === promise) {
          cache.set(key, {
            value: result,
            timestamp: now,
            refreshing: false
          });
        }
        return result;
      } finally {
        if (inFlight.get(key) === promise) {
          inFlight.delete(key);
        }
      }
    }
    if (cached && now - cached.timestamp > cacheLifetimeMs && !cached.refreshing) {
      cached.refreshing = true;
      const staleEntry = cached;
      f(...args).then((newValue) => {
        if (cache.get(key) === staleEntry) {
          cache.set(key, {
            value: newValue,
            timestamp: Date.now(),
            refreshing: false
          });
        }
      }).catch((e) => {
        logError(e);
        if (cache.get(key) === staleEntry) {
          cache.delete(key);
        }
      });
      return cached.value;
    }
    return cache.get(key).value;
  };
  memoized.cache = {
    clear: () => {
      cache.clear();
      inFlight.clear();
    }
  };
  return memoized;
}
function memoizeWithLRU(f, cacheFn, maxCacheSize = 100) {
  const cache = new L({
    max: maxCacheSize
  });
  const memoized = (...args) => {
    const key = cacheFn(...args);
    const cached = cache.get(key);
    if (cached !== undefined) {
      return cached;
    }
    const result = f(...args);
    cache.set(key, result);
    return result;
  };
  memoized.cache = {
    clear: () => cache.clear(),
    size: () => cache.size,
    delete: (key) => cache.delete(key),
    get: (key) => cache.peek(key),
    has: (key) => cache.has(key)
  };
  return memoized;
}
var init_memoize = __esm(() => {
  init_index_min();
  init_log();
  init_slowOperations();
});

export { memoizeWithTTLAsync, memoizeWithLRU, init_memoize };
