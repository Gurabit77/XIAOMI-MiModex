// @bun
import {
  init_config1 as init_config,
  saveCurrentProjectConfig
} from "./chunk-1ghcng4e.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/context/stats.tsx
init_config();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function percentile(sorted, p) {
  const index = p / 100 * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) {
    return sorted[lower];
  }
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
}
var RESERVOIR_SIZE = 1024;
function createStatsStore() {
  const metrics = new Map;
  const histograms = new Map;
  const sets = new Map;
  return {
    increment(name, value = 1) {
      metrics.set(name, (metrics.get(name) ?? 0) + value);
    },
    set(name, value) {
      metrics.set(name, value);
    },
    observe(name, value) {
      let h = histograms.get(name);
      if (!h) {
        h = { reservoir: [], count: 0, sum: 0, min: value, max: value };
        histograms.set(name, h);
      }
      h.count++;
      h.sum += value;
      if (value < h.min) {
        h.min = value;
      }
      if (value > h.max) {
        h.max = value;
      }
      if (h.reservoir.length < RESERVOIR_SIZE) {
        h.reservoir.push(value);
      } else {
        const j = Math.floor(Math.random() * h.count);
        if (j < RESERVOIR_SIZE) {
          h.reservoir[j] = value;
        }
      }
    },
    add(name, value) {
      let s = sets.get(name);
      if (!s) {
        s = new Set;
        sets.set(name, s);
      }
      s.add(value);
    },
    getAll() {
      const result = Object.fromEntries(metrics);
      for (const [name, h] of histograms) {
        if (h.count === 0) {
          continue;
        }
        result[`${name}_count`] = h.count;
        result[`${name}_min`] = h.min;
        result[`${name}_max`] = h.max;
        result[`${name}_avg`] = h.sum / h.count;
        const sorted = [...h.reservoir].sort((a, b) => a - b);
        result[`${name}_p50`] = percentile(sorted, 50);
        result[`${name}_p95`] = percentile(sorted, 95);
        result[`${name}_p99`] = percentile(sorted, 99);
      }
      for (const [name, s] of sets) {
        result[name] = s.size;
      }
      return result;
    }
  };
}
var StatsContext = import_react.createContext(null);
function StatsProvider({
  store: externalStore,
  children
}) {
  const internalStore = import_react.useMemo(() => createStatsStore(), []);
  const store = externalStore ?? internalStore;
  import_react.useEffect(() => {
    const flush = () => {
      const metrics = store.getAll();
      if (Object.keys(metrics).length > 0) {
        saveCurrentProjectConfig((current) => ({
          ...current,
          lastSessionMetrics: metrics
        }));
      }
    };
    process.on("exit", flush);
    return () => {
      process.off("exit", flush);
    };
  }, [store]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatsContext.Provider, {
    value: store,
    children
  }, undefined, false, undefined, this);
}

export { createStatsStore, StatsProvider };
