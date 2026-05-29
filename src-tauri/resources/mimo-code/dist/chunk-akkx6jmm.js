// @bun
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-rpbc3b7k.js";
import {
  __commonJS,
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/shell-quote@1.8.3/node_modules/shell-quote/quote.js
var require_quote = __commonJS((exports, module) => {
  module.exports = function quote(xs) {
    return xs.map(function(s) {
      if (s === "") {
        return "''";
      }
      if (s && typeof s === "object") {
        return s.op.replace(/(.)/g, "\\$1");
      }
      if (/["\s\\]/.test(s) && !/'/.test(s)) {
        return "'" + s.replace(/(['])/g, "\\$1") + "'";
      }
      if (/["'\s]/.test(s)) {
        return '"' + s.replace(/(["\\$`!])/g, "\\$1") + '"';
      }
      return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
    }).join(" ");
  };
});

// node_modules/.bun/shell-quote@1.8.3/node_modules/shell-quote/parse.js
var require_parse = __commonJS((exports, module) => {
  var CONTROL = "(?:" + [
    "\\|\\|",
    "\\&\\&",
    ";;",
    "\\|\\&",
    "\\<\\(",
    "\\<\\<\\<",
    ">>",
    ">\\&",
    "<\\&",
    "[&;()|<>]"
  ].join("|") + ")";
  var controlRE = new RegExp("^" + CONTROL + "$");
  var META = "|&;()<> \\t";
  var SINGLE_QUOTE = '"((\\\\"|[^"])*?)"';
  var DOUBLE_QUOTE = "'((\\\\'|[^'])*?)'";
  var hash = /^#$/;
  var SQ = "'";
  var DQ = '"';
  var DS = "$";
  var TOKEN = "";
  var mult = 4294967296;
  for (i = 0;i < 4; i++) {
    TOKEN += (mult * Math.random()).toString(16);
  }
  var i;
  var startsWithToken = new RegExp("^" + TOKEN);
  function matchAll(s, r) {
    var origIndex = r.lastIndex;
    var matches = [];
    var matchObj;
    while (matchObj = r.exec(s)) {
      matches.push(matchObj);
      if (r.lastIndex === matchObj.index) {
        r.lastIndex += 1;
      }
    }
    r.lastIndex = origIndex;
    return matches;
  }
  function getVar(env, pre, key) {
    var r = typeof env === "function" ? env(key) : env[key];
    if (typeof r === "undefined" && key != "") {
      r = "";
    } else if (typeof r === "undefined") {
      r = "$";
    }
    if (typeof r === "object") {
      return pre + TOKEN + JSON.stringify(r) + TOKEN;
    }
    return pre + r;
  }
  function parseInternal(string, env, opts) {
    if (!opts) {
      opts = {};
    }
    var BS = opts.escape || "\\";
    var BAREWORD = "(\\" + BS + `['"` + META + `]|[^\\s'"` + META + "])+";
    var chunker = new RegExp([
      "(" + CONTROL + ")",
      "(" + BAREWORD + "|" + SINGLE_QUOTE + "|" + DOUBLE_QUOTE + ")+"
    ].join("|"), "g");
    var matches = matchAll(string, chunker);
    if (matches.length === 0) {
      return [];
    }
    if (!env) {
      env = {};
    }
    var commented = false;
    return matches.map(function(match) {
      var s = match[0];
      if (!s || commented) {
        return;
      }
      if (controlRE.test(s)) {
        return { op: s };
      }
      var quote = false;
      var esc = false;
      var out = "";
      var isGlob = false;
      var i2;
      function parseEnvVar() {
        i2 += 1;
        var varend;
        var varname;
        var char = s.charAt(i2);
        if (char === "{") {
          i2 += 1;
          if (s.charAt(i2) === "}") {
            throw new Error("Bad substitution: " + s.slice(i2 - 2, i2 + 1));
          }
          varend = s.indexOf("}", i2);
          if (varend < 0) {
            throw new Error("Bad substitution: " + s.slice(i2));
          }
          varname = s.slice(i2, varend);
          i2 = varend;
        } else if (/[*@#?$!_-]/.test(char)) {
          varname = char;
          i2 += 1;
        } else {
          var slicedFromI = s.slice(i2);
          varend = slicedFromI.match(/[^\w\d_]/);
          if (!varend) {
            varname = slicedFromI;
            i2 = s.length;
          } else {
            varname = slicedFromI.slice(0, varend.index);
            i2 += varend.index - 1;
          }
        }
        return getVar(env, "", varname);
      }
      for (i2 = 0;i2 < s.length; i2++) {
        var c = s.charAt(i2);
        isGlob = isGlob || !quote && (c === "*" || c === "?");
        if (esc) {
          out += c;
          esc = false;
        } else if (quote) {
          if (c === quote) {
            quote = false;
          } else if (quote == SQ) {
            out += c;
          } else {
            if (c === BS) {
              i2 += 1;
              c = s.charAt(i2);
              if (c === DQ || c === BS || c === DS) {
                out += c;
              } else {
                out += BS + c;
              }
            } else if (c === DS) {
              out += parseEnvVar();
            } else {
              out += c;
            }
          }
        } else if (c === DQ || c === SQ) {
          quote = c;
        } else if (controlRE.test(c)) {
          return { op: s };
        } else if (hash.test(c)) {
          commented = true;
          var commentObj = { comment: string.slice(match.index + i2 + 1) };
          if (out.length) {
            return [out, commentObj];
          }
          return [commentObj];
        } else if (c === BS) {
          esc = true;
        } else if (c === DS) {
          out += parseEnvVar();
        } else {
          out += c;
        }
      }
      if (isGlob) {
        return { op: "glob", pattern: out };
      }
      return out;
    }).reduce(function(prev, arg) {
      return typeof arg === "undefined" ? prev : prev.concat(arg);
    }, []);
  }
  module.exports = function parse(s, env, opts) {
    var mapped = parseInternal(s, env, opts);
    if (typeof env !== "function") {
      return mapped;
    }
    return mapped.reduce(function(acc, s2) {
      if (typeof s2 === "object") {
        return acc.concat(s2);
      }
      var xs = s2.split(RegExp("(" + TOKEN + ".*?" + TOKEN + ")", "g"));
      if (xs.length === 1) {
        return acc.concat(xs[0]);
      }
      return acc.concat(xs.filter(Boolean).map(function(x) {
        if (startsWithToken.test(x)) {
          return JSON.parse(x.split(TOKEN)[1]);
        }
        return x;
      }));
    }, []);
  };
});

// node_modules/.bun/shell-quote@1.8.3/node_modules/shell-quote/index.js
var require_shell_quote = __commonJS((exports) => {
  exports.quote = require_quote();
  exports.parse = require_parse();
});

// src/utils/bash/shellQuote.ts
function tryParseShellCommand(cmd, env) {
  try {
    const tokens = typeof env === "function" ? import_shell_quote.parse(cmd, env) : import_shell_quote.parse(cmd, env);
    return { success: true, tokens };
  } catch (error) {
    if (error instanceof Error) {
      logError(error);
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown parse error"
    };
  }
}
function tryQuoteShellArgs(args) {
  try {
    const validated = args.map((arg, index) => {
      if (arg === null || arg === undefined) {
        return String(arg);
      }
      const type = typeof arg;
      if (type === "string") {
        return arg;
      }
      if (type === "number" || type === "boolean") {
        return String(arg);
      }
      if (type === "object") {
        throw new Error(`Cannot quote argument at index ${index}: object values are not supported`);
      }
      if (type === "symbol") {
        throw new Error(`Cannot quote argument at index ${index}: symbol values are not supported`);
      }
      if (type === "function") {
        throw new Error(`Cannot quote argument at index ${index}: function values are not supported`);
      }
      throw new Error(`Cannot quote argument at index ${index}: unsupported type ${type}`);
    });
    const quoted = import_shell_quote.quote(validated);
    return { success: true, quoted };
  } catch (error) {
    if (error instanceof Error) {
      logError(error);
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown quote error"
    };
  }
}
function hasMalformedTokens(command, parsed) {
  let inSingle = false;
  let inDouble = false;
  let doubleCount = 0;
  let singleCount = 0;
  for (let i = 0;i < command.length; i++) {
    const c = command[i];
    if (c === "\\" && !inSingle) {
      i++;
      continue;
    }
    if (c === '"' && !inSingle) {
      doubleCount++;
      inDouble = !inDouble;
    } else if (c === "'" && !inDouble) {
      singleCount++;
      inSingle = !inSingle;
    }
  }
  if (doubleCount % 2 !== 0 || singleCount % 2 !== 0)
    return true;
  for (const entry of parsed) {
    if (typeof entry !== "string")
      continue;
    const openBraces = (entry.match(/{/g) || []).length;
    const closeBraces = (entry.match(/}/g) || []).length;
    if (openBraces !== closeBraces)
      return true;
    const openParens = (entry.match(/\(/g) || []).length;
    const closeParens = (entry.match(/\)/g) || []).length;
    if (openParens !== closeParens)
      return true;
    const openBrackets = (entry.match(/\[/g) || []).length;
    const closeBrackets = (entry.match(/\]/g) || []).length;
    if (openBrackets !== closeBrackets)
      return true;
    const doubleQuotes = entry.match(/(?<!\\)"/g) || [];
    if (doubleQuotes.length % 2 !== 0)
      return true;
    const singleQuotes = entry.match(/(?<!\\)'/g) || [];
    if (singleQuotes.length % 2 !== 0)
      return true;
  }
  return false;
}
function hasShellQuoteSingleQuoteBug(command) {
  let inSingleQuote = false;
  let inDoubleQuote = false;
  for (let i = 0;i < command.length; i++) {
    const char = command[i];
    if (char === "\\" && !inSingleQuote) {
      i++;
      continue;
    }
    if (char === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
      continue;
    }
    if (char === "'" && !inDoubleQuote) {
      inSingleQuote = !inSingleQuote;
      if (!inSingleQuote) {
        let backslashCount = 0;
        let j = i - 1;
        while (j >= 0 && command[j] === "\\") {
          backslashCount++;
          j--;
        }
        if (backslashCount > 0 && backslashCount % 2 === 1) {
          return true;
        }
        if (backslashCount > 0 && backslashCount % 2 === 0 && command.indexOf("'", i + 1) !== -1) {
          return true;
        }
      }
    }
  }
  return false;
}
function quote(args) {
  const result = tryQuoteShellArgs([...args]);
  if (result.success) {
    return result.quoted;
  }
  try {
    const stringArgs = args.map((arg) => {
      if (arg === null || arg === undefined) {
        return String(arg);
      }
      const type = typeof arg;
      if (type === "string" || type === "number" || type === "boolean") {
        return String(arg);
      }
      return jsonStringify(arg);
    });
    return import_shell_quote.quote(stringArgs);
  } catch (error) {
    if (error instanceof Error) {
      logError(error);
    }
    throw new Error("Failed to quote shell arguments safely");
  }
}
var import_shell_quote;
var init_shellQuote = __esm(() => {
  init_log();
  init_slowOperations();
  import_shell_quote = __toESM(require_shell_quote(), 1);
});

export { require_shell_quote, tryParseShellCommand, hasMalformedTokens, hasShellQuoteSingleQuoteBug, quote, init_shellQuote };
