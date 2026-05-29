// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/xdg.ts
import { homedir as osHomedir } from "os";
import { join, posix } from "path";
function resolveOptions(options) {
  return {
    env: options?.env ?? process.env,
    home: options?.homedir ?? process.env.HOME ?? osHomedir()
  };
}
function joinPortable(base, ...parts) {
  if (base.includes("/") && !base.includes("\\") && !/^[A-Za-z]:/.test(base)) {
    return posix.join(base, ...parts);
  }
  return join(base, ...parts);
}
function getXDGStateHome(options) {
  const { env, home } = resolveOptions(options);
  return env.XDG_STATE_HOME ?? joinPortable(home, ".local", "state");
}
function getXDGCacheHome(options) {
  const { env, home } = resolveOptions(options);
  return env.XDG_CACHE_HOME ?? joinPortable(home, ".cache");
}
function getXDGDataHome(options) {
  const { env, home } = resolveOptions(options);
  return env.XDG_DATA_HOME ?? joinPortable(home, ".local", "share");
}
function getUserBinDir(options) {
  const { home } = resolveOptions(options);
  return joinPortable(home, ".local", "bin");
}
var init_xdg = () => {};

export { getXDGStateHome, getXDGCacheHome, getXDGDataHome, getUserBinDir, init_xdg };
