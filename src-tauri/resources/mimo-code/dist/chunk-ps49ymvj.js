// @bun
import {
  require_semver
} from "./chunk-0vkfrmqm.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/semver.ts
function getNpmSemver() {
  if (!_npmSemver) {
    _npmSemver = require_semver();
  }
  return _npmSemver;
}
function gt(a, b) {
  if (typeof Bun !== "undefined") {
    return Bun.semver.order(a, b) === 1;
  }
  return getNpmSemver().gt(a, b, { loose: true });
}
function gte(a, b) {
  if (typeof Bun !== "undefined") {
    return Bun.semver.order(a, b) >= 0;
  }
  return getNpmSemver().gte(a, b, { loose: true });
}
function lt(a, b) {
  if (typeof Bun !== "undefined") {
    return Bun.semver.order(a, b) === -1;
  }
  return getNpmSemver().lt(a, b, { loose: true });
}
function satisfies(version, range) {
  if (typeof Bun !== "undefined") {
    return Bun.semver.satisfies(version, range);
  }
  return getNpmSemver().satisfies(version, range, { loose: true });
}
var _npmSemver;
var init_semver = () => {};

export { gt, gte, lt, satisfies, init_semver };
