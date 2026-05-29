// @bun
import {
  require_cmp,
  require_coerce,
  require_comparator,
  require_compare,
  require_constants,
  require_eq,
  require_gt,
  require_gte,
  require_identifiers,
  require_lt,
  require_lte,
  require_neq,
  require_parse,
  require_range,
  require_re,
  require_satisfies,
  require_semver
} from "./chunk-0xjaqda8.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/valid.js
var require_valid = __commonJS((exports, module) => {
  var parse = require_parse();
  var valid = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  module.exports = valid;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/clean.js
var require_clean = __commonJS((exports, module) => {
  var parse = require_parse();
  var clean = (version, options) => {
    const s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  };
  module.exports = clean;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/inc.js
var require_inc = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var inc = (version, release, options, identifier, identifierBase) => {
    if (typeof options === "string") {
      identifierBase = identifier;
      identifier = options;
      options = undefined;
    }
    try {
      return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  module.exports = inc;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/diff.js
var require_diff = __commonJS((exports, module) => {
  var parse = require_parse();
  var diff = (version1, version2) => {
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      if (!lowVersion.patch && !lowVersion.minor) {
        return "major";
      }
      if (lowVersion.compareMain(highVersion) === 0) {
        if (lowVersion.minor && !lowVersion.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) {
      return prefix + "major";
    }
    if (v1.minor !== v2.minor) {
      return prefix + "minor";
    }
    if (v1.patch !== v2.patch) {
      return prefix + "patch";
    }
    return "prerelease";
  };
  module.exports = diff;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/major.js
var require_major = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var major = (a, loose) => new SemVer(a, loose).major;
  module.exports = major;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/minor.js
var require_minor = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var minor = (a, loose) => new SemVer(a, loose).minor;
  module.exports = minor;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/patch.js
var require_patch = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var patch = (a, loose) => new SemVer(a, loose).patch;
  module.exports = patch;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS((exports, module) => {
  var parse = require_parse();
  var prerelease = (version, options) => {
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  module.exports = prerelease;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS((exports, module) => {
  var compare = require_compare();
  var rcompare = (a, b, loose) => compare(b, a, loose);
  module.exports = rcompare;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS((exports, module) => {
  var compare = require_compare();
  var compareLoose = (a, b) => compare(a, b, true);
  module.exports = compareLoose;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var compareBuild = (a, b, loose) => {
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  module.exports = compareBuild;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/sort.js
var require_sort = __commonJS((exports, module) => {
  var compareBuild = require_compare_build();
  var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
  module.exports = sort;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS((exports, module) => {
  var compareBuild = require_compare_build();
  var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
  module.exports = rsort;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS((exports, module) => {
  var Range = require_range();
  var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
  module.exports = toComparators;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var Range = require_range();
  var maxSatisfying = (versions, range, options) => {
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  };
  module.exports = maxSatisfying;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var Range = require_range();
  var minSatisfying = (versions, range, options) => {
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  };
  module.exports = minSatisfying;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var Range = require_range();
  var gt = require_gt();
  var minVersion = (range, loose) => {
    range = new Range(range, loose);
    let minver = new SemVer("0.0.0");
    if (range.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range.test(minver)) {
      return minver;
    }
    minver = null;
    for (let i = 0;i < range.set.length; ++i) {
      const comparators = range.set[i];
      let setMin = null;
      comparators.forEach((comparator) => {
        const compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          case "":
          case ">=":
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${comparator.operator}`);
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    }
    if (minver && range.test(minver)) {
      return minver;
    }
    return null;
  };
  module.exports = minVersion;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS((exports, module) => {
  var Range = require_range();
  var validRange = (range, options) => {
    try {
      return new Range(range, options).range || "*";
    } catch (er) {
      return null;
    }
  };
  module.exports = validRange;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/outside.js
var require_outside = __commonJS((exports, module) => {
  var SemVer = require_semver();
  var Comparator = require_comparator();
  var { ANY } = Comparator;
  var Range = require_range();
  var satisfies = require_satisfies();
  var gt = require_gt();
  var lt = require_lt();
  var lte = require_lte();
  var gte = require_gte();
  var outside = (version, range, hilo, options) => {
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range, options)) {
      return false;
    }
    for (let i = 0;i < range.set.length; ++i) {
      const comparators = range.set[i];
      let high = null;
      let low = null;
      comparators.forEach((comparator) => {
        if (comparator.semver === ANY) {
          comparator = new Comparator(">=0.0.0");
        }
        high = high || comparator;
        low = low || comparator;
        if (gtfn(comparator.semver, high.semver, options)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, options)) {
          low = comparator;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  };
  module.exports = outside;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS((exports, module) => {
  var outside = require_outside();
  var gtr = (version, range, options) => outside(version, range, ">", options);
  module.exports = gtr;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS((exports, module) => {
  var outside = require_outside();
  var ltr = (version, range, options) => outside(version, range, "<", options);
  module.exports = ltr;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS((exports, module) => {
  var Range = require_range();
  var intersects = (r1, r2, options) => {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  module.exports = intersects;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS((exports, module) => {
  var satisfies = require_satisfies();
  var compare = require_compare();
  module.exports = (versions, range, options) => {
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b) => compare(a, b, options));
    for (const version of v) {
      const included = satisfies(version, range, options);
      if (included) {
        prev = version;
        if (!first) {
          first = version;
        }
      } else {
        if (prev) {
          set.push([first, prev]);
        }
        prev = null;
        first = null;
      }
    }
    if (first) {
      set.push([first, null]);
    }
    const ranges = [];
    for (const [min, max] of set) {
      if (min === max) {
        ranges.push(min);
      } else if (!max && min === v[0]) {
        ranges.push("*");
      } else if (!max) {
        ranges.push(`>=${min}`);
      } else if (min === v[0]) {
        ranges.push(`<=${max}`);
      } else {
        ranges.push(`${min} - ${max}`);
      }
    }
    const simplified = ranges.join(" || ");
    const original = typeof range.raw === "string" ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
  };
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/ranges/subset.js
var require_subset = __commonJS((exports, module) => {
  var Range = require_range();
  var Comparator = require_comparator();
  var { ANY } = Comparator;
  var satisfies = require_satisfies();
  var compare = require_compare();
  var subset = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER:
      for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
    return true;
  };
  var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
  var minimumVersion = [new Comparator(">=0.0.0")];
  var simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    const eqSet = new Set;
    let gt, lt;
    for (const c of sub) {
      if (c.operator === ">" || c.operator === ">=") {
        gt = higherGT(gt, c, options);
      } else if (c.operator === "<" || c.operator === "<=") {
        lt = lowerLT(lt, c, options);
      } else {
        eqSet.add(c.semver);
      }
    }
    if (eqSet.size > 1) {
      return null;
    }
    let gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }
      for (const c of dom) {
        if (!satisfies(eq, String(c), options)) {
          return false;
        }
      }
      return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    for (const c of dom) {
      hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
      hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
      if (gt) {
        if (needDomGTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }
        if (c.operator === ">" || c.operator === ">=") {
          higher = higherGT(gt, c, options);
          if (higher === c && higher !== gt) {
            return false;
          }
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
          return false;
        }
      }
      if (lt) {
        if (needDomLTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }
        if (c.operator === "<" || c.operator === "<=") {
          lower = lowerLT(lt, c, options);
          if (lower === c && lower !== lt) {
            return false;
          }
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
          return false;
        }
      }
      if (!c.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };
  var higherGT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
  };
  var lowerLT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
  };
  module.exports = subset;
});

// node_modules/.bun/semver@7.7.4/node_modules/semver/index.js
var require_semver2 = __commonJS((exports, module) => {
  var internalRe = require_re();
  var constants = require_constants();
  var SemVer = require_semver();
  var identifiers = require_identifiers();
  var parse = require_parse();
  var valid = require_valid();
  var clean = require_clean();
  var inc = require_inc();
  var diff = require_diff();
  var major = require_major();
  var minor = require_minor();
  var patch = require_patch();
  var prerelease = require_prerelease();
  var compare = require_compare();
  var rcompare = require_rcompare();
  var compareLoose = require_compare_loose();
  var compareBuild = require_compare_build();
  var sort = require_sort();
  var rsort = require_rsort();
  var gt = require_gt();
  var lt = require_lt();
  var eq = require_eq();
  var neq = require_neq();
  var gte = require_gte();
  var lte = require_lte();
  var cmp = require_cmp();
  var coerce = require_coerce();
  var Comparator = require_comparator();
  var Range = require_range();
  var satisfies = require_satisfies();
  var toComparators = require_to_comparators();
  var maxSatisfying = require_max_satisfying();
  var minSatisfying = require_min_satisfying();
  var minVersion = require_min_version();
  var validRange = require_valid2();
  var outside = require_outside();
  var gtr = require_gtr();
  var ltr = require_ltr();
  var intersects = require_intersects();
  var simplifyRange = require_simplify();
  var subset = require_subset();
  module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
  };
});

export { require_semver2 as require_semver };
