// @bun
import {
  L,
  init_index_min
} from "./chunk-jdq8jgyg.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/fileStateCache.ts
import { normalize } from "path";

class FileStateCache {
  cache;
  constructor(maxEntries, maxSizeBytes) {
    this.cache = new L({
      max: maxEntries,
      maxSize: maxSizeBytes,
      sizeCalculation: (value) => {
        const c = value.content;
        const s = typeof c === "string" ? c : c === null || c === undefined ? "" : typeof c === "object" ? JSON.stringify(c) : String(c);
        return Math.max(1, Buffer.byteLength(s, "utf8"));
      }
    });
  }
  get(key) {
    return this.cache.get(normalize(key));
  }
  set(key, value) {
    this.cache.set(normalize(key), value);
    return this;
  }
  has(key) {
    return this.cache.has(normalize(key));
  }
  delete(key) {
    return this.cache.delete(normalize(key));
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(entries) {
    this.cache.load(entries);
  }
}
function createFileStateCacheWithSizeLimit(maxEntries, maxSizeBytes = DEFAULT_MAX_CACHE_SIZE_BYTES) {
  return new FileStateCache(maxEntries, maxSizeBytes);
}
function cacheToObject(cache) {
  return Object.fromEntries(cache.entries());
}
function cacheKeys(cache) {
  return Array.from(cache.keys());
}
function cloneFileStateCache(cache) {
  const cloned = createFileStateCacheWithSizeLimit(cache.max, cache.maxSize);
  cloned.load(cache.dump());
  return cloned;
}
function mergeFileStateCaches(first, second) {
  const merged = cloneFileStateCache(first);
  for (const [filePath, fileState] of second.entries()) {
    const existing = merged.get(filePath);
    if (!existing || fileState.timestamp > existing.timestamp) {
      merged.set(filePath, fileState);
    }
  }
  return merged;
}
var READ_FILE_STATE_CACHE_SIZE = 100, DEFAULT_MAX_CACHE_SIZE_BYTES;
var init_fileStateCache = __esm(() => {
  init_index_min();
  DEFAULT_MAX_CACHE_SIZE_BYTES = 25 * 1024 * 1024;
});

export { READ_FILE_STATE_CACHE_SIZE, FileStateCache, createFileStateCacheWithSizeLimit, cacheToObject, cacheKeys, cloneFileStateCache, mergeFileStateCaches, init_fileStateCache };
