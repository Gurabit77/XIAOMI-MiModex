// @bun
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  init_mjs,
  onExit
} from "./chunk-7wm5s02e.js";
import {
  __commonJS,
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
var init_is_plain_obj = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/file-url.js
import { fileURLToPath } from "url";
var safeNormalizeFileUrl = (file, name) => {
  const fileString = normalizeFileUrl(normalizeDenoExecPath(file));
  if (typeof fileString !== "string") {
    throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`);
  }
  return fileString;
}, normalizeDenoExecPath = (file) => isDenoExecPath(file) ? file.toString() : file, isDenoExecPath = (file) => typeof file !== "string" && file && Object.getPrototypeOf(file) === String.prototype, normalizeFileUrl = (file) => file instanceof URL ? fileURLToPath(file) : file;
var init_file_url = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/parameters.js
var normalizeParameters = (rawFile, rawArguments = [], rawOptions = {}) => {
  const filePath = safeNormalizeFileUrl(rawFile, "First argument");
  const [commandArguments, options] = isPlainObject(rawArguments) ? [[], rawArguments] : [rawArguments, rawOptions];
  if (!Array.isArray(commandArguments)) {
    throw new TypeError(`Second argument must be either an array of arguments or an options object: ${commandArguments}`);
  }
  if (commandArguments.some((commandArgument) => typeof commandArgument === "object" && commandArgument !== null)) {
    throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`);
  }
  const normalizedArguments = commandArguments.map(String);
  const nullByteArgument = normalizedArguments.find((normalizedArgument) => normalizedArgument.includes("\x00"));
  if (nullByteArgument !== undefined) {
    throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`);
  }
  if (!isPlainObject(options)) {
    throw new TypeError(`Last argument must be an options object: ${options}`);
  }
  return [filePath, normalizedArguments, options];
};
var init_parameters = __esm(() => {
  init_is_plain_obj();
  init_file_url();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/utils/uint-array.js
import { StringDecoder } from "string_decoder";
var objectToString, isArrayBuffer = (value) => objectToString.call(value) === "[object ArrayBuffer]", isUint8Array = (value) => objectToString.call(value) === "[object Uint8Array]", bufferToUint8Array = (buffer) => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength), textEncoder, stringToUint8Array = (string) => textEncoder.encode(string), textDecoder, uint8ArrayToString = (uint8Array) => textDecoder.decode(uint8Array), joinToString = (uint8ArraysOrStrings, encoding) => {
  const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding);
  return strings.join("");
}, uint8ArraysToStrings = (uint8ArraysOrStrings, encoding) => {
  if (encoding === "utf8" && uint8ArraysOrStrings.every((uint8ArrayOrString) => typeof uint8ArrayOrString === "string")) {
    return uint8ArraysOrStrings;
  }
  const decoder = new StringDecoder(encoding);
  const strings = uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString).map((uint8Array) => decoder.write(uint8Array));
  const finalString = decoder.end();
  return finalString === "" ? strings : [...strings, finalString];
}, joinToUint8Array = (uint8ArraysOrStrings) => {
  if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
    return uint8ArraysOrStrings[0];
  }
  return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings));
}, stringsToUint8Arrays = (uint8ArraysOrStrings) => uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString), concatUint8Arrays = (uint8Arrays) => {
  const result = new Uint8Array(getJoinLength(uint8Arrays));
  let index = 0;
  for (const uint8Array of uint8Arrays) {
    result.set(uint8Array, index);
    index += uint8Array.length;
  }
  return result;
}, getJoinLength = (uint8Arrays) => {
  let joinLength = 0;
  for (const uint8Array of uint8Arrays) {
    joinLength += uint8Array.length;
  }
  return joinLength;
};
var init_uint_array = __esm(() => {
  ({ toString: objectToString } = Object.prototype);
  textEncoder = new TextEncoder;
  textDecoder = new TextDecoder;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/template.js
import { ChildProcess } from "child_process";
var isTemplateString = (templates) => Array.isArray(templates) && Array.isArray(templates.raw), parseTemplates = (templates, expressions) => {
  let tokens = [];
  for (const [index, template] of templates.entries()) {
    tokens = parseTemplate({
      templates,
      expressions,
      tokens,
      index,
      template
    });
  }
  if (tokens.length === 0) {
    throw new TypeError("Template script must not be empty");
  }
  const [file, ...commandArguments] = tokens;
  return [file, commandArguments, {}];
}, parseTemplate = ({ templates, expressions, tokens, index, template }) => {
  if (template === undefined) {
    throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`);
  }
  const { nextTokens, leadingWhitespaces, trailingWhitespaces } = splitByWhitespaces(template, templates.raw[index]);
  const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces);
  if (index === expressions.length) {
    return newTokens;
  }
  const expression = expressions[index];
  const expressionTokens = Array.isArray(expression) ? expression.map((expression2) => parseExpression(expression2)) : [parseExpression(expression)];
  return concatTokens(newTokens, expressionTokens, trailingWhitespaces);
}, splitByWhitespaces = (template, rawTemplate) => {
  if (rawTemplate.length === 0) {
    return { nextTokens: [], leadingWhitespaces: false, trailingWhitespaces: false };
  }
  const nextTokens = [];
  let templateStart = 0;
  const leadingWhitespaces = DELIMITERS.has(rawTemplate[0]);
  for (let templateIndex = 0, rawIndex = 0;templateIndex < template.length; templateIndex += 1, rawIndex += 1) {
    const rawCharacter = rawTemplate[rawIndex];
    if (DELIMITERS.has(rawCharacter)) {
      if (templateStart !== templateIndex) {
        nextTokens.push(template.slice(templateStart, templateIndex));
      }
      templateStart = templateIndex + 1;
    } else if (rawCharacter === "\\") {
      const nextRawCharacter = rawTemplate[rawIndex + 1];
      if (nextRawCharacter === `
`) {
        templateIndex -= 1;
        rawIndex += 1;
      } else if (nextRawCharacter === "u" && rawTemplate[rawIndex + 2] === "{") {
        rawIndex = rawTemplate.indexOf("}", rawIndex + 3);
      } else {
        rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1;
      }
    }
  }
  const trailingWhitespaces = templateStart === template.length;
  if (!trailingWhitespaces) {
    nextTokens.push(template.slice(templateStart));
  }
  return { nextTokens, leadingWhitespaces, trailingWhitespaces };
}, DELIMITERS, ESCAPE_LENGTH, concatTokens = (tokens, nextTokens, isSeparated) => isSeparated || tokens.length === 0 || nextTokens.length === 0 ? [...tokens, ...nextTokens] : [
  ...tokens.slice(0, -1),
  `${tokens.at(-1)}${nextTokens[0]}`,
  ...nextTokens.slice(1)
], parseExpression = (expression) => {
  const typeOfExpression = typeof expression;
  if (typeOfExpression === "string") {
    return expression;
  }
  if (typeOfExpression === "number") {
    return String(expression);
  }
  if (isPlainObject(expression) && (("stdout" in expression) || ("isMaxBuffer" in expression))) {
    return getSubprocessResult(expression);
  }
  if (expression instanceof ChildProcess || Object.prototype.toString.call(expression) === "[object Promise]") {
    throw new TypeError("Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.");
  }
  throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
}, getSubprocessResult = ({ stdout }) => {
  if (typeof stdout === "string") {
    return stdout;
  }
  if (isUint8Array(stdout)) {
    return uint8ArrayToString(stdout);
  }
  if (stdout === undefined) {
    throw new TypeError(`Missing result.stdout in template expression. This is probably due to the previous subprocess' "stdout" option.`);
  }
  throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`);
};
var init_template = __esm(() => {
  init_is_plain_obj();
  init_uint_array();
  DELIMITERS = new Set([" ", "\t", "\r", `
`]);
  ESCAPE_LENGTH = { x: 3, u: 5 };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/utils/standard-stream.js
import process2 from "process";
var isStandardStream = (stream) => STANDARD_STREAMS.includes(stream), STANDARD_STREAMS, STANDARD_STREAMS_ALIASES, getStreamName = (fdNumber) => STANDARD_STREAMS_ALIASES[fdNumber] ?? `stdio[${fdNumber}]`;
var init_standard_stream = __esm(() => {
  STANDARD_STREAMS = [process2.stdin, process2.stdout, process2.stderr];
  STANDARD_STREAMS_ALIASES = ["stdin", "stdout", "stderr"];
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/specific.js
import { debuglog } from "util";
var normalizeFdSpecificOptions = (options) => {
  const optionsCopy = { ...options };
  for (const optionName of FD_SPECIFIC_OPTIONS) {
    optionsCopy[optionName] = normalizeFdSpecificOption(options, optionName);
  }
  return optionsCopy;
}, normalizeFdSpecificOption = (options, optionName) => {
  const optionBaseArray = Array.from({ length: getStdioLength(options) + 1 });
  const optionArray = normalizeFdSpecificValue(options[optionName], optionBaseArray, optionName);
  return addDefaultValue(optionArray, optionName);
}, getStdioLength = ({ stdio }) => Array.isArray(stdio) ? Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length) : STANDARD_STREAMS_ALIASES.length, normalizeFdSpecificValue = (optionValue, optionArray, optionName) => isPlainObject(optionValue) ? normalizeOptionObject(optionValue, optionArray, optionName) : optionArray.fill(optionValue), normalizeOptionObject = (optionValue, optionArray, optionName) => {
  for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
    for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
      optionArray[fdNumber] = optionValue[fdName];
    }
  }
  return optionArray;
}, compareFdName = (fdNameA, fdNameB) => getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1, getFdNameOrder = (fdName) => {
  if (fdName === "stdout" || fdName === "stderr") {
    return 0;
  }
  return fdName === "all" ? 2 : 1;
}, parseFdName = (fdName, optionName, optionArray) => {
  if (fdName === "ipc") {
    return [optionArray.length - 1];
  }
  const fdNumber = parseFd(fdName);
  if (fdNumber === undefined || fdNumber === 0) {
    throw new TypeError(`"${optionName}.${fdName}" is invalid.
It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`);
  }
  if (fdNumber >= optionArray.length) {
    throw new TypeError(`"${optionName}.${fdName}" is invalid: that file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
  }
  return fdNumber === "all" ? [1, 2] : [fdNumber];
}, parseFd = (fdName) => {
  if (fdName === "all") {
    return fdName;
  }
  if (STANDARD_STREAMS_ALIASES.includes(fdName)) {
    return STANDARD_STREAMS_ALIASES.indexOf(fdName);
  }
  const regexpResult = FD_REGEXP.exec(fdName);
  if (regexpResult !== null) {
    return Number(regexpResult[1]);
  }
}, FD_REGEXP, addDefaultValue = (optionArray, optionName) => optionArray.map((optionValue) => optionValue === undefined ? DEFAULT_OPTIONS[optionName] : optionValue), verboseDefault, DEFAULT_OPTIONS, FD_SPECIFIC_OPTIONS, getFdSpecificValue = (optionArray, fdNumber) => fdNumber === "ipc" ? optionArray.at(-1) : optionArray[fdNumber];
var init_specific = __esm(() => {
  init_is_plain_obj();
  init_standard_stream();
  FD_REGEXP = /^fd(\d+)$/;
  verboseDefault = debuglog("execa").enabled ? "full" : "none";
  DEFAULT_OPTIONS = {
    lines: false,
    buffer: true,
    maxBuffer: 1000 * 1000 * 100,
    verbose: verboseDefault,
    stripFinalNewline: true
  };
  FD_SPECIFIC_OPTIONS = ["lines", "buffer", "maxBuffer", "verbose", "stripFinalNewline"];
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/values.js
var isVerbose = ({ verbose }, fdNumber) => getFdVerbose(verbose, fdNumber) !== "none", isFullVerbose = ({ verbose }, fdNumber) => !["none", "short"].includes(getFdVerbose(verbose, fdNumber)), getVerboseFunction = ({ verbose }, fdNumber) => {
  const fdVerbose = getFdVerbose(verbose, fdNumber);
  return isVerboseFunction(fdVerbose) ? fdVerbose : undefined;
}, getFdVerbose = (verbose, fdNumber) => fdNumber === undefined ? getFdGenericVerbose(verbose) : getFdSpecificValue(verbose, fdNumber), getFdGenericVerbose = (verbose) => verbose.find((fdVerbose) => isVerboseFunction(fdVerbose)) ?? VERBOSE_VALUES.findLast((fdVerbose) => verbose.includes(fdVerbose)), isVerboseFunction = (fdVerbose) => typeof fdVerbose === "function", VERBOSE_VALUES;
var init_values = __esm(() => {
  init_specific();
  VERBOSE_VALUES = ["none", "short", "full"];
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/escape.js
import { platform } from "process";
import { stripVTControlCharacters } from "util";
var joinCommand = (filePath, rawArguments) => {
  const fileAndArguments = [filePath, ...rawArguments];
  const command = fileAndArguments.join(" ");
  const escapedCommand = fileAndArguments.map((fileAndArgument) => quoteString(escapeControlCharacters(fileAndArgument))).join(" ");
  return { command, escapedCommand };
}, escapeLines = (lines) => stripVTControlCharacters(lines).split(`
`).map((line) => escapeControlCharacters(line)).join(`
`), escapeControlCharacters = (line) => line.replaceAll(SPECIAL_CHAR_REGEXP, (character) => escapeControlCharacter(character)), escapeControlCharacter = (character) => {
  const commonEscape = COMMON_ESCAPES[character];
  if (commonEscape !== undefined) {
    return commonEscape;
  }
  const codepoint = character.codePointAt(0);
  const codepointHex = codepoint.toString(16);
  return codepoint <= ASTRAL_START ? `\\u${codepointHex.padStart(4, "0")}` : `\\U${codepointHex}`;
}, getSpecialCharRegExp = () => {
  try {
    return new RegExp("\\p{Separator}|\\p{Other}", "gu");
  } catch {
    return /[\s\u0000-\u001F\u007F-\u009F\u00AD]/g;
  }
}, SPECIAL_CHAR_REGEXP, COMMON_ESCAPES, ASTRAL_START = 65535, quoteString = (escapedArgument) => {
  if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
    return escapedArgument;
  }
  return platform === "win32" ? `"${escapedArgument.replaceAll('"', '""')}"` : `'${escapedArgument.replaceAll("'", "'\\''")}'`;
}, NO_ESCAPE_REGEXP;
var init_escape = __esm(() => {
  SPECIAL_CHAR_REGEXP = getSpecialCharRegExp();
  COMMON_ESCAPES = {
    " ": " ",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t"
  };
  NO_ESCAPE_REGEXP = /^[\w./-]+$/;
});

// node_modules/.bun/yoctocolors@2.1.2/node_modules/yoctocolors/base.js
import tty from "tty";
var hasColors, format = (open, close) => {
  if (!hasColors) {
    return (input) => input;
  }
  const openCode = `\x1B[${open}m`;
  const closeCode = `\x1B[${close}m`;
  return (input) => {
    const string = input + "";
    let index = string.indexOf(closeCode);
    if (index === -1) {
      return openCode + string + closeCode;
    }
    let result = openCode;
    let lastIndex = 0;
    const reopenOnNestedClose = close === 22;
    const replaceCode = (reopenOnNestedClose ? closeCode : "") + openCode;
    while (index !== -1) {
      result += string.slice(lastIndex, index) + replaceCode;
      lastIndex = index + closeCode.length;
      index = string.indexOf(closeCode, lastIndex);
    }
    result += string.slice(lastIndex) + closeCode;
    return result;
  };
}, reset, bold, dim, italic, underline, overline, inverse, hidden, strikethrough, black, red, green, yellow, blue, magenta, cyan, white, gray, bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright;
var init_base = __esm(() => {
  hasColors = tty?.WriteStream?.prototype?.hasColors?.() ?? false;
  reset = format(0, 0);
  bold = format(1, 22);
  dim = format(2, 22);
  italic = format(3, 23);
  underline = format(4, 24);
  overline = format(53, 55);
  inverse = format(7, 27);
  hidden = format(8, 28);
  strikethrough = format(9, 29);
  black = format(30, 39);
  red = format(31, 39);
  green = format(32, 39);
  yellow = format(33, 39);
  blue = format(34, 39);
  magenta = format(35, 39);
  cyan = format(36, 39);
  white = format(37, 39);
  gray = format(90, 39);
  bgBlack = format(40, 49);
  bgRed = format(41, 49);
  bgGreen = format(42, 49);
  bgYellow = format(43, 49);
  bgBlue = format(44, 49);
  bgMagenta = format(45, 49);
  bgCyan = format(46, 49);
  bgWhite = format(47, 49);
  bgGray = format(100, 49);
  redBright = format(91, 39);
  greenBright = format(92, 39);
  yellowBright = format(93, 39);
  blueBright = format(94, 39);
  magentaBright = format(95, 39);
  cyanBright = format(96, 39);
  whiteBright = format(97, 39);
  bgRedBright = format(101, 49);
  bgGreenBright = format(102, 49);
  bgYellowBright = format(103, 49);
  bgBlueBright = format(104, 49);
  bgMagentaBright = format(105, 49);
  bgCyanBright = format(106, 49);
  bgWhiteBright = format(107, 49);
});

// node_modules/.bun/yoctocolors@2.1.2/node_modules/yoctocolors/index.js
var init_yoctocolors = __esm(() => {
  init_base();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/default.js
var defaultVerboseFunction = ({
  type,
  message,
  timestamp,
  piped,
  commandId,
  result: { failed = false } = {},
  options: { reject = true }
}) => {
  const timestampString = serializeTimestamp(timestamp);
  const icon = ICONS[type]({ failed, reject, piped });
  const color = COLORS[type]({ reject });
  return `${gray(`[${timestampString}]`)} ${gray(`[${commandId}]`)} ${color(icon)} ${color(message)}`;
}, serializeTimestamp = (timestamp) => `${padField(timestamp.getHours(), 2)}:${padField(timestamp.getMinutes(), 2)}:${padField(timestamp.getSeconds(), 2)}.${padField(timestamp.getMilliseconds(), 3)}`, padField = (field, padding) => String(field).padStart(padding, "0"), getFinalIcon = ({ failed, reject }) => {
  if (!failed) {
    return figures_default.tick;
  }
  return reject ? figures_default.cross : figures_default.warning;
}, ICONS, identity = (string) => string, COLORS;
var init_default = __esm(() => {
  init_figures();
  init_yoctocolors();
  ICONS = {
    command: ({ piped }) => piped ? "|" : "$",
    output: () => " ",
    ipc: () => "*",
    error: getFinalIcon,
    duration: getFinalIcon
  };
  COLORS = {
    command: () => bold,
    output: () => identity,
    ipc: () => identity,
    error: ({ reject }) => reject ? redBright : yellowBright,
    duration: () => gray
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/custom.js
var applyVerboseOnLines = (printedLines, verboseInfo, fdNumber) => {
  const verboseFunction = getVerboseFunction(verboseInfo, fdNumber);
  return printedLines.map(({ verboseLine, verboseObject }) => applyVerboseFunction(verboseLine, verboseObject, verboseFunction)).filter((printedLine) => printedLine !== undefined).map((printedLine) => appendNewline(printedLine)).join("");
}, applyVerboseFunction = (verboseLine, verboseObject, verboseFunction) => {
  if (verboseFunction === undefined) {
    return verboseLine;
  }
  const printedLine = verboseFunction(verboseLine, verboseObject);
  if (typeof printedLine === "string") {
    return printedLine;
  }
}, appendNewline = (printedLine) => printedLine.endsWith(`
`) ? printedLine : `${printedLine}
`;
var init_custom = __esm(() => {
  init_values();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/log.js
import { inspect } from "util";
var verboseLog = ({ type, verboseMessage, fdNumber, verboseInfo, result }) => {
  const verboseObject = getVerboseObject({ type, result, verboseInfo });
  const printedLines = getPrintedLines(verboseMessage, verboseObject);
  const finalLines = applyVerboseOnLines(printedLines, verboseInfo, fdNumber);
  if (finalLines !== "") {
    console.warn(finalLines.slice(0, -1));
  }
}, getVerboseObject = ({
  type,
  result,
  verboseInfo: { escapedCommand, commandId, rawOptions: { piped = false, ...options } }
}) => ({
  type,
  escapedCommand,
  commandId: `${commandId}`,
  timestamp: new Date,
  piped,
  result,
  options
}), getPrintedLines = (verboseMessage, verboseObject) => verboseMessage.split(`
`).map((message) => getPrintedLine({ ...verboseObject, message })), getPrintedLine = (verboseObject) => {
  const verboseLine = defaultVerboseFunction(verboseObject);
  return { verboseLine, verboseObject };
}, serializeVerboseMessage = (message) => {
  const messageString = typeof message === "string" ? message : inspect(message);
  const escapedMessage = escapeLines(messageString);
  return escapedMessage.replaceAll("\t", " ".repeat(TAB_SIZE));
}, TAB_SIZE = 2;
var init_log = __esm(() => {
  init_escape();
  init_default();
  init_custom();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/start.js
var logCommand = (escapedCommand, verboseInfo) => {
  if (!isVerbose(verboseInfo)) {
    return;
  }
  verboseLog({
    type: "command",
    verboseMessage: escapedCommand,
    verboseInfo
  });
};
var init_start = __esm(() => {
  init_values();
  init_log();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/info.js
var getVerboseInfo = (verbose, escapedCommand, rawOptions) => {
  validateVerbose(verbose);
  const commandId = getCommandId(verbose);
  return {
    verbose,
    escapedCommand,
    commandId,
    rawOptions
  };
}, getCommandId = (verbose) => isVerbose({ verbose }) ? COMMAND_ID++ : undefined, COMMAND_ID = 0n, validateVerbose = (verbose) => {
  for (const fdVerbose of verbose) {
    if (fdVerbose === false) {
      throw new TypeError(`The "verbose: false" option was renamed to "verbose: 'none'".`);
    }
    if (fdVerbose === true) {
      throw new TypeError(`The "verbose: true" option was renamed to "verbose: 'short'".`);
    }
    if (!VERBOSE_VALUES.includes(fdVerbose) && !isVerboseFunction(fdVerbose)) {
      const allowedValues = VERBOSE_VALUES.map((allowedValue) => `'${allowedValue}'`).join(", ");
      throw new TypeError(`The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`);
    }
  }
};
var init_info = __esm(() => {
  init_values();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/return/duration.js
import { hrtime } from "process";
var getStartTime = () => hrtime.bigint(), getDurationMs = (startTime) => Number(hrtime.bigint() - startTime) / 1e6;
var init_duration = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/command.js
var handleCommand = (filePath, rawArguments, rawOptions) => {
  const startTime = getStartTime();
  const { command, escapedCommand } = joinCommand(filePath, rawArguments);
  const verbose = normalizeFdSpecificOption(rawOptions, "verbose");
  const verboseInfo = getVerboseInfo(verbose, escapedCommand, { ...rawOptions });
  logCommand(escapedCommand, verboseInfo);
  return {
    command,
    escapedCommand,
    startTime,
    verboseInfo
  };
};
var init_command = __esm(() => {
  init_start();
  init_info();
  init_duration();
  init_escape();
  init_specific();
});

// node_modules/.bun/isexe@2.0.0/node_modules/isexe/windows.js
var require_windows = __commonJS((exports, module) => {
  module.exports = isexe;
  isexe.sync = sync;
  var fs = __require("fs");
  function checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
    if (!pathext) {
      return true;
    }
    pathext = pathext.split(";");
    if (pathext.indexOf("") !== -1) {
      return true;
    }
    for (var i = 0;i < pathext.length; i++) {
      var p = pathext[i].toLowerCase();
      if (p && path.substr(-p.length).toLowerCase() === p) {
        return true;
      }
    }
    return false;
  }
  function checkStat(stat, path, options) {
    if (!stat.isSymbolicLink() && !stat.isFile()) {
      return false;
    }
    return checkPathExt(path, options);
  }
  function isexe(path, options, cb) {
    fs.stat(path, function(er, stat) {
      cb(er, er ? false : checkStat(stat, path, options));
    });
  }
  function sync(path, options) {
    return checkStat(fs.statSync(path), path, options);
  }
});

// node_modules/.bun/isexe@2.0.0/node_modules/isexe/mode.js
var require_mode = __commonJS((exports, module) => {
  module.exports = isexe;
  isexe.sync = sync;
  var fs = __require("fs");
  function isexe(path, options, cb) {
    fs.stat(path, function(er, stat) {
      cb(er, er ? false : checkStat(stat, options));
    });
  }
  function sync(path, options) {
    return checkStat(fs.statSync(path), options);
  }
  function checkStat(stat, options) {
    return stat.isFile() && checkMode(stat, options);
  }
  function checkMode(stat, options) {
    var mod = stat.mode;
    var uid = stat.uid;
    var gid = stat.gid;
    var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
    var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
    var u = parseInt("100", 8);
    var g = parseInt("010", 8);
    var o = parseInt("001", 8);
    var ug = u | g;
    var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
    return ret;
  }
});

// node_modules/.bun/isexe@2.0.0/node_modules/isexe/index.js
var require_isexe = __commonJS((exports, module) => {
  var fs = __require("fs");
  var core;
  if (process.platform === "win32" || global.TESTING_WINDOWS) {
    core = require_windows();
  } else {
    core = require_mode();
  }
  module.exports = isexe;
  isexe.sync = sync;
  function isexe(path, options, cb) {
    if (typeof options === "function") {
      cb = options;
      options = {};
    }
    if (!cb) {
      if (typeof Promise !== "function") {
        throw new TypeError("callback not provided");
      }
      return new Promise(function(resolve, reject) {
        isexe(path, options || {}, function(er, is) {
          if (er) {
            reject(er);
          } else {
            resolve(is);
          }
        });
      });
    }
    core(path, options || {}, function(er, is) {
      if (er) {
        if (er.code === "EACCES" || options && options.ignoreErrors) {
          er = null;
          is = false;
        }
      }
      cb(er, is);
    });
  }
  function sync(path, options) {
    try {
      return core.sync(path, options || {});
    } catch (er) {
      if (options && options.ignoreErrors || er.code === "EACCES") {
        return false;
      } else {
        throw er;
      }
    }
  }
});

// node_modules/.bun/which@2.0.2/node_modules/which/which.js
var require_which = __commonJS((exports, module) => {
  var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
  var path = __require("path");
  var COLON = isWindows ? ";" : ":";
  var isexe = require_isexe();
  var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
  var getPathInfo = (cmd, opt) => {
    const colon = opt.colon || COLON;
    const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
      ...isWindows ? [process.cwd()] : [],
      ...(opt.path || process.env.PATH || "").split(colon)
    ];
    const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
    const pathExt = isWindows ? pathExtExe.split(colon) : [""];
    if (isWindows) {
      if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
        pathExt.unshift("");
    }
    return {
      pathEnv,
      pathExt,
      pathExtExe
    };
  };
  var which = (cmd, opt, cb) => {
    if (typeof opt === "function") {
      cb = opt;
      opt = {};
    }
    if (!opt)
      opt = {};
    const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
    const found = [];
    const step = (i) => new Promise((resolve, reject) => {
      if (i === pathEnv.length)
        return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
      const ppRaw = pathEnv[i];
      const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
      const pCmd = path.join(pathPart, cmd);
      const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
      resolve(subStep(p, i, 0));
    });
    const subStep = (p, i, ii) => new Promise((resolve, reject) => {
      if (ii === pathExt.length)
        return resolve(step(i + 1));
      const ext = pathExt[ii];
      isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
        if (!er && is) {
          if (opt.all)
            found.push(p + ext);
          else
            return resolve(p + ext);
        }
        return resolve(subStep(p, i, ii + 1));
      });
    });
    return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
  };
  var whichSync = (cmd, opt) => {
    opt = opt || {};
    const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
    const found = [];
    for (let i = 0;i < pathEnv.length; i++) {
      const ppRaw = pathEnv[i];
      const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
      const pCmd = path.join(pathPart, cmd);
      const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
      for (let j = 0;j < pathExt.length; j++) {
        const cur = p + pathExt[j];
        try {
          const is = isexe.sync(cur, { pathExt: pathExtExe });
          if (is) {
            if (opt.all)
              found.push(cur);
            else
              return cur;
          }
        } catch (ex) {}
      }
    }
    if (opt.all && found.length)
      return found;
    if (opt.nothrow)
      return null;
    throw getNotFoundError(cmd);
  };
  module.exports = which;
  which.sync = whichSync;
});

// node_modules/.bun/path-key@3.1.1/node_modules/path-key/index.js
var require_path_key = __commonJS((exports, module) => {
  var pathKey = (options = {}) => {
    const environment = options.env || process.env;
    const platform2 = options.platform || process.platform;
    if (platform2 !== "win32") {
      return "PATH";
    }
    return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
  };
  module.exports = pathKey;
  module.exports.default = pathKey;
});

// node_modules/.bun/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS((exports, module) => {
  var path = __require("path");
  var which = require_which();
  var getPathKey = require_path_key();
  function resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;
    if (shouldSwitchCwd) {
      try {
        process.chdir(parsed.options.cwd);
      } catch (err) {}
    }
    let resolved;
    try {
      resolved = which.sync(parsed.command, {
        path: env[getPathKey({ env })],
        pathExt: withoutPathExt ? path.delimiter : undefined
      });
    } catch (e) {} finally {
      if (shouldSwitchCwd) {
        process.chdir(cwd);
      }
    }
    if (resolved) {
      resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
    }
    return resolved;
  }
  function resolveCommand(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
  }
  module.exports = resolveCommand;
});

// node_modules/.bun/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS((exports, module) => {
  var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
  function escapeCommand(arg) {
    arg = arg.replace(metaCharsRegExp, "^$1");
    return arg;
  }
  function escapeArgument(arg, doubleEscapeMetaChars) {
    arg = `${arg}`;
    arg = arg.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\"");
    arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
    arg = `"${arg}"`;
    arg = arg.replace(metaCharsRegExp, "^$1");
    if (doubleEscapeMetaChars) {
      arg = arg.replace(metaCharsRegExp, "^$1");
    }
    return arg;
  }
  exports.command = escapeCommand;
  exports.argument = escapeArgument;
});

// node_modules/.bun/shebang-regex@3.0.0/node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS((exports, module) => {
  module.exports = /^#!(.*)/;
});

// node_modules/.bun/shebang-command@2.0.0/node_modules/shebang-command/index.js
var require_shebang_command = __commonJS((exports, module) => {
  var shebangRegex = require_shebang_regex();
  module.exports = (string = "") => {
    const match = string.match(shebangRegex);
    if (!match) {
      return null;
    }
    const [path, argument] = match[0].replace(/#! ?/, "").split(" ");
    const binary = path.split("/").pop();
    if (binary === "env") {
      return argument;
    }
    return argument ? `${binary} ${argument}` : binary;
  };
});

// node_modules/.bun/cross-spawn@7.0.6/node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS((exports, module) => {
  var fs = __require("fs");
  var shebangCommand = require_shebang_command();
  function readShebang(command) {
    const size = 150;
    const buffer = Buffer.alloc(size);
    let fd;
    try {
      fd = fs.openSync(command, "r");
      fs.readSync(fd, buffer, 0, size, 0);
      fs.closeSync(fd);
    } catch (e) {}
    return shebangCommand(buffer.toString());
  }
  module.exports = readShebang;
});

// node_modules/.bun/cross-spawn@7.0.6/node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS((exports, module) => {
  var path = __require("path");
  var resolveCommand = require_resolveCommand();
  var escape = require_escape();
  var readShebang = require_readShebang();
  var isWin = process.platform === "win32";
  var isExecutableRegExp = /\.(?:com|exe)$/i;
  var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);
    const shebang = parsed.file && readShebang(parsed.file);
    if (shebang) {
      parsed.args.unshift(parsed.file);
      parsed.command = shebang;
      return resolveCommand(parsed);
    }
    return parsed.file;
  }
  function parseNonShell(parsed) {
    if (!isWin) {
      return parsed;
    }
    const commandFile = detectShebang(parsed);
    const needsShell = !isExecutableRegExp.test(commandFile);
    if (parsed.options.forceShell || needsShell) {
      const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
      parsed.command = path.normalize(parsed.command);
      parsed.command = escape.command(parsed.command);
      parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
      const shellCommand = [parsed.command].concat(parsed.args).join(" ");
      parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
      parsed.command = process.env.comspec || "cmd.exe";
      parsed.options.windowsVerbatimArguments = true;
    }
    return parsed;
  }
  function parse(command, args, options) {
    if (args && !Array.isArray(args)) {
      options = args;
      args = null;
    }
    args = args ? args.slice(0) : [];
    options = Object.assign({}, options);
    const parsed = {
      command,
      args,
      options,
      file: undefined,
      original: {
        command,
        args
      }
    };
    return options.shell ? parsed : parseNonShell(parsed);
  }
  module.exports = parse;
});

// node_modules/.bun/cross-spawn@7.0.6/node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS((exports, module) => {
  var isWin = process.platform === "win32";
  function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
      code: "ENOENT",
      errno: "ENOENT",
      syscall: `${syscall} ${original.command}`,
      path: original.command,
      spawnargs: original.args
    });
  }
  function hookChildProcess(cp, parsed) {
    if (!isWin) {
      return;
    }
    const originalEmit = cp.emit;
    cp.emit = function(name, arg1) {
      if (name === "exit") {
        const err = verifyENOENT(arg1, parsed);
        if (err) {
          return originalEmit.call(cp, "error", err);
        }
      }
      return originalEmit.apply(cp, arguments);
    };
  }
  function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
      return notFoundError(parsed.original, "spawn");
    }
    return null;
  }
  function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
      return notFoundError(parsed.original, "spawnSync");
    }
    return null;
  }
  module.exports = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError
  };
});

// node_modules/.bun/cross-spawn@7.0.6/node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS((exports, module) => {
  var cp = __require("child_process");
  var parse = require_parse();
  var enoent = require_enoent();
  function spawn(command, args, options) {
    const parsed = parse(command, args, options);
    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
    enoent.hookChildProcess(spawned, parsed);
    return spawned;
  }
  function spawnSync(command, args, options) {
    const parsed = parse(command, args, options);
    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
    return result;
  }
  module.exports = spawn;
  module.exports.spawn = spawn;
  module.exports.sync = spawnSync;
  module.exports._parse = parse;
  module.exports._enoent = enoent;
});

// node_modules/.bun/path-key@4.0.0/node_modules/path-key/index.js
function pathKey(options = {}) {
  const {
    env = process.env,
    platform: platform2 = process.platform
  } = options;
  if (platform2 !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
var init_path_key = () => {};

// node_modules/.bun/unicorn-magic@0.3.0/node_modules/unicorn-magic/default.js
var init_default2 = () => {};

// node_modules/.bun/unicorn-magic@0.3.0/node_modules/unicorn-magic/node.js
import { promisify } from "util";
import { execFile as execFileCallback, execFileSync as execFileSyncOriginal } from "child_process";
import path from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
function toPath(urlOrPath) {
  return urlOrPath instanceof URL ? fileURLToPath2(urlOrPath) : urlOrPath;
}
function traversePathUp(startPath) {
  return {
    *[Symbol.iterator]() {
      let currentPath = path.resolve(toPath(startPath));
      let previousPath;
      while (previousPath !== currentPath) {
        yield currentPath;
        previousPath = currentPath;
        currentPath = path.resolve(currentPath, "..");
      }
    }
  };
}
var execFileOriginal, TEN_MEGABYTES_IN_BYTES;
var init_node = __esm(() => {
  init_default2();
  execFileOriginal = promisify(execFileCallback);
  TEN_MEGABYTES_IN_BYTES = 10 * 1024 * 1024;
});

// node_modules/.bun/npm-run-path@6.0.0/node_modules/npm-run-path/index.js
import process3 from "process";
import path2 from "path";
var npmRunPath = ({
  cwd = process3.cwd(),
  path: pathOption = process3.env[pathKey()],
  preferLocal = true,
  execPath = process3.execPath,
  addExecPath = true
} = {}) => {
  const cwdPath = path2.resolve(toPath(cwd));
  const result = [];
  const pathParts = pathOption.split(path2.delimiter);
  if (preferLocal) {
    applyPreferLocal(result, pathParts, cwdPath);
  }
  if (addExecPath) {
    applyExecPath(result, pathParts, execPath, cwdPath);
  }
  return pathOption === "" || pathOption === path2.delimiter ? `${result.join(path2.delimiter)}${pathOption}` : [...result, pathOption].join(path2.delimiter);
}, applyPreferLocal = (result, pathParts, cwdPath) => {
  for (const directory of traversePathUp(cwdPath)) {
    const pathPart = path2.join(directory, "node_modules/.bin");
    if (!pathParts.includes(pathPart)) {
      result.push(pathPart);
    }
  }
}, applyExecPath = (result, pathParts, execPath, cwdPath) => {
  const pathPart = path2.resolve(cwdPath, toPath(execPath), "..");
  if (!pathParts.includes(pathPart)) {
    result.push(pathPart);
  }
}, npmRunPathEnv = ({ env = process3.env, ...options } = {}) => {
  env = { ...env };
  const pathName = pathKey({ env });
  options.path = env[pathName];
  env[pathName] = npmRunPath(options);
  return env;
};
var init_npm_run_path = __esm(() => {
  init_path_key();
  init_node();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/return/final-error.js
var getFinalError = (originalError, message, isSync) => {
  const ErrorClass = isSync ? ExecaSyncError : ExecaError;
  const options = originalError instanceof DiscardedError ? {} : { cause: originalError };
  return new ErrorClass(message, options);
}, DiscardedError, setErrorName = (ErrorClass, value) => {
  Object.defineProperty(ErrorClass.prototype, "name", {
    value,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });
}, isExecaError = (error) => isErrorInstance(error) && (execaErrorSymbol in error), execaErrorSymbol, isErrorInstance = (value) => Object.prototype.toString.call(value) === "[object Error]", ExecaError, ExecaSyncError;
var init_final_error = __esm(() => {
  DiscardedError = class DiscardedError extends Error {
  };
  execaErrorSymbol = Symbol("isExecaError");
  ExecaError = class ExecaError extends Error {
  };
  setErrorName(ExecaError, ExecaError.name);
  ExecaSyncError = class ExecaSyncError extends Error {
  };
  setErrorName(ExecaSyncError, ExecaSyncError.name);
});

// node_modules/.bun/human-signals@8.0.1/node_modules/human-signals/build/src/realtime.js
var getRealtimeSignals = () => {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({ length }, getRealtimeSignal);
}, getRealtimeSignal = (value, index) => ({
  name: `SIGRT${index + 1}`,
  number: SIGRTMIN + index,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
}), SIGRTMIN = 34, SIGRTMAX = 64;
var init_realtime = () => {};

// node_modules/.bun/human-signals@8.0.1/node_modules/human-signals/build/src/core.js
var SIGNALS;
var init_core = __esm(() => {
  SIGNALS = [
    {
      name: "SIGHUP",
      number: 1,
      action: "terminate",
      description: "Terminal closed",
      standard: "posix"
    },
    {
      name: "SIGINT",
      number: 2,
      action: "terminate",
      description: "User interruption with CTRL-C",
      standard: "ansi"
    },
    {
      name: "SIGQUIT",
      number: 3,
      action: "core",
      description: "User interruption with CTRL-\\",
      standard: "posix"
    },
    {
      name: "SIGILL",
      number: 4,
      action: "core",
      description: "Invalid machine instruction",
      standard: "ansi"
    },
    {
      name: "SIGTRAP",
      number: 5,
      action: "core",
      description: "Debugger breakpoint",
      standard: "posix"
    },
    {
      name: "SIGABRT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "ansi"
    },
    {
      name: "SIGIOT",
      number: 6,
      action: "core",
      description: "Aborted",
      standard: "bsd"
    },
    {
      name: "SIGBUS",
      number: 7,
      action: "core",
      description: "Bus error due to misaligned, non-existing address or paging error",
      standard: "bsd"
    },
    {
      name: "SIGEMT",
      number: 7,
      action: "terminate",
      description: "Command should be emulated but is not implemented",
      standard: "other"
    },
    {
      name: "SIGFPE",
      number: 8,
      action: "core",
      description: "Floating point arithmetic error",
      standard: "ansi"
    },
    {
      name: "SIGKILL",
      number: 9,
      action: "terminate",
      description: "Forced termination",
      standard: "posix",
      forced: true
    },
    {
      name: "SIGUSR1",
      number: 10,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGSEGV",
      number: 11,
      action: "core",
      description: "Segmentation fault",
      standard: "ansi"
    },
    {
      name: "SIGUSR2",
      number: 12,
      action: "terminate",
      description: "Application-specific signal",
      standard: "posix"
    },
    {
      name: "SIGPIPE",
      number: 13,
      action: "terminate",
      description: "Broken pipe or socket",
      standard: "posix"
    },
    {
      name: "SIGALRM",
      number: 14,
      action: "terminate",
      description: "Timeout or timer",
      standard: "posix"
    },
    {
      name: "SIGTERM",
      number: 15,
      action: "terminate",
      description: "Termination",
      standard: "ansi"
    },
    {
      name: "SIGSTKFLT",
      number: 16,
      action: "terminate",
      description: "Stack is empty or overflowed",
      standard: "other"
    },
    {
      name: "SIGCHLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "posix"
    },
    {
      name: "SIGCLD",
      number: 17,
      action: "ignore",
      description: "Child process terminated, paused or unpaused",
      standard: "other"
    },
    {
      name: "SIGCONT",
      number: 18,
      action: "unpause",
      description: "Unpaused",
      standard: "posix",
      forced: true
    },
    {
      name: "SIGSTOP",
      number: 19,
      action: "pause",
      description: "Paused",
      standard: "posix",
      forced: true
    },
    {
      name: "SIGTSTP",
      number: 20,
      action: "pause",
      description: 'Paused using CTRL-Z or "suspend"',
      standard: "posix"
    },
    {
      name: "SIGTTIN",
      number: 21,
      action: "pause",
      description: "Background process cannot read terminal input",
      standard: "posix"
    },
    {
      name: "SIGBREAK",
      number: 21,
      action: "terminate",
      description: "User interruption with CTRL-BREAK",
      standard: "other"
    },
    {
      name: "SIGTTOU",
      number: 22,
      action: "pause",
      description: "Background process cannot write to terminal output",
      standard: "posix"
    },
    {
      name: "SIGURG",
      number: 23,
      action: "ignore",
      description: "Socket received out-of-band data",
      standard: "bsd"
    },
    {
      name: "SIGXCPU",
      number: 24,
      action: "core",
      description: "Process timed out",
      standard: "bsd"
    },
    {
      name: "SIGXFSZ",
      number: 25,
      action: "core",
      description: "File too big",
      standard: "bsd"
    },
    {
      name: "SIGVTALRM",
      number: 26,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGPROF",
      number: 27,
      action: "terminate",
      description: "Timeout or timer",
      standard: "bsd"
    },
    {
      name: "SIGWINCH",
      number: 28,
      action: "ignore",
      description: "Terminal window size changed",
      standard: "bsd"
    },
    {
      name: "SIGIO",
      number: 29,
      action: "terminate",
      description: "I/O is available",
      standard: "other"
    },
    {
      name: "SIGPOLL",
      number: 29,
      action: "terminate",
      description: "Watched event",
      standard: "other"
    },
    {
      name: "SIGINFO",
      number: 29,
      action: "ignore",
      description: "Request for process information",
      standard: "other"
    },
    {
      name: "SIGPWR",
      number: 30,
      action: "terminate",
      description: "Device running out of power",
      standard: "systemv"
    },
    {
      name: "SIGSYS",
      number: 31,
      action: "core",
      description: "Invalid system call",
      standard: "other"
    },
    {
      name: "SIGUNUSED",
      number: 31,
      action: "terminate",
      description: "Invalid system call",
      standard: "other"
    }
  ];
});

// node_modules/.bun/human-signals@8.0.1/node_modules/human-signals/build/src/signals.js
import { constants } from "os";
var getSignals = () => {
  const realtimeSignals = getRealtimeSignals();
  const signals = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
  return signals;
}, normalizeSignal = ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) => {
  const {
    signals: { [name]: constantSignal }
  } = constants;
  const supported = constantSignal !== undefined;
  const number = supported ? constantSignal : defaultNumber;
  return { name, number, description, supported, action, forced, standard };
};
var init_signals = __esm(() => {
  init_core();
  init_realtime();
});

// node_modules/.bun/human-signals@8.0.1/node_modules/human-signals/build/src/main.js
import { constants as constants2 } from "os";
var getSignalsByName = () => {
  const signals = getSignals();
  return Object.fromEntries(signals.map(getSignalByName));
}, getSignalByName = ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) => [name, { name, number, description, supported, action, forced, standard }], signalsByName, getSignalsByNumber = () => {
  const signals = getSignals();
  const length = SIGRTMAX + 1;
  const signalsA = Array.from({ length }, (value, number) => getSignalByNumber(number, signals));
  return Object.assign({}, ...signalsA);
}, getSignalByNumber = (number, signals) => {
  const signal = findSignalByNumber(number, signals);
  if (signal === undefined) {
    return {};
  }
  const { name, description, supported, action, forced, standard } = signal;
  return {
    [number]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
}, findSignalByNumber = (number, signals) => {
  const signal = signals.find(({ name }) => constants2.signals[name] === number);
  if (signal !== undefined) {
    return signal;
  }
  return signals.find((signalA) => signalA.number === number);
}, signalsByNumber;
var init_main = __esm(() => {
  init_realtime();
  init_signals();
  signalsByName = getSignalsByName();
  signalsByNumber = getSignalsByNumber();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/terminate/signal.js
import { constants as constants3 } from "os";
var normalizeKillSignal = (killSignal) => {
  const optionName = "option `killSignal`";
  if (killSignal === 0) {
    throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`);
  }
  return normalizeSignal2(killSignal, optionName);
}, normalizeSignalArgument = (signal) => signal === 0 ? signal : normalizeSignal2(signal, "`subprocess.kill()`'s argument"), normalizeSignal2 = (signalNameOrInteger, optionName) => {
  if (Number.isInteger(signalNameOrInteger)) {
    return normalizeSignalInteger(signalNameOrInteger, optionName);
  }
  if (typeof signalNameOrInteger === "string") {
    return normalizeSignalName(signalNameOrInteger, optionName);
  }
  throw new TypeError(`Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.
${getAvailableSignals()}`);
}, normalizeSignalInteger = (signalInteger, optionName) => {
  if (signalsIntegerToName.has(signalInteger)) {
    return signalsIntegerToName.get(signalInteger);
  }
  throw new TypeError(`Invalid ${optionName} ${signalInteger}: this signal integer does not exist.
${getAvailableSignals()}`);
}, getSignalsIntegerToName = () => new Map(Object.entries(constants3.signals).reverse().map(([signalName, signalInteger]) => [signalInteger, signalName])), signalsIntegerToName, normalizeSignalName = (signalName, optionName) => {
  if (signalName in constants3.signals) {
    return signalName;
  }
  if (signalName.toUpperCase() in constants3.signals) {
    throw new TypeError(`Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`);
  }
  throw new TypeError(`Invalid ${optionName} '${signalName}': this signal name does not exist.
${getAvailableSignals()}`);
}, getAvailableSignals = () => `Available signal names: ${getAvailableSignalNames()}.
Available signal numbers: ${getAvailableSignalIntegers()}.`, getAvailableSignalNames = () => Object.keys(constants3.signals).sort().map((signalName) => `'${signalName}'`).join(", "), getAvailableSignalIntegers = () => [...new Set(Object.values(constants3.signals).sort((signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo))].join(", "), getSignalDescription = (signal) => signalsByName[signal].description;
var init_signal = __esm(() => {
  init_main();
  signalsIntegerToName = getSignalsIntegerToName();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/terminate/kill.js
import { setTimeout as setTimeout2 } from "timers/promises";
var normalizeForceKillAfterDelay = (forceKillAfterDelay) => {
  if (forceKillAfterDelay === false) {
    return forceKillAfterDelay;
  }
  if (forceKillAfterDelay === true) {
    return DEFAULT_FORCE_KILL_TIMEOUT;
  }
  if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
    throw new TypeError(`Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`);
  }
  return forceKillAfterDelay;
}, DEFAULT_FORCE_KILL_TIMEOUT, subprocessKill = ({ kill, options: { forceKillAfterDelay, killSignal }, onInternalError, context, controller }, signalOrError, errorArgument) => {
  const { signal, error } = parseKillArguments(signalOrError, errorArgument, killSignal);
  emitKillError(error, onInternalError);
  const killResult = kill(signal);
  setKillTimeout({
    kill,
    signal,
    forceKillAfterDelay,
    killSignal,
    killResult,
    context,
    controller
  });
  return killResult;
}, parseKillArguments = (signalOrError, errorArgument, killSignal) => {
  const [signal = killSignal, error] = isErrorInstance(signalOrError) ? [undefined, signalOrError] : [signalOrError, errorArgument];
  if (typeof signal !== "string" && !Number.isInteger(signal)) {
    throw new TypeError(`The first argument must be an error instance or a signal name string/integer: ${String(signal)}`);
  }
  if (error !== undefined && !isErrorInstance(error)) {
    throw new TypeError(`The second argument is optional. If specified, it must be an error instance: ${error}`);
  }
  return { signal: normalizeSignalArgument(signal), error };
}, emitKillError = (error, onInternalError) => {
  if (error !== undefined) {
    onInternalError.reject(error);
  }
}, setKillTimeout = async ({ kill, signal, forceKillAfterDelay, killSignal, killResult, context, controller }) => {
  if (signal === killSignal && killResult) {
    killOnTimeout({
      kill,
      forceKillAfterDelay,
      context,
      controllerSignal: controller.signal
    });
  }
}, killOnTimeout = async ({ kill, forceKillAfterDelay, context, controllerSignal }) => {
  if (forceKillAfterDelay === false) {
    return;
  }
  try {
    await setTimeout2(forceKillAfterDelay, undefined, { signal: controllerSignal });
    if (kill("SIGKILL")) {
      context.isForcefullyTerminated ??= true;
    }
  } catch {}
};
var init_kill = __esm(() => {
  init_final_error();
  init_signal();
  DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/utils/abort-signal.js
import { once } from "events";
var onAbortedSignal = async (mainSignal, stopSignal) => {
  if (!mainSignal.aborted) {
    await once(mainSignal, "abort", { signal: stopSignal });
  }
};
var init_abort_signal = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/terminate/cancel.js
var validateCancelSignal = ({ cancelSignal }) => {
  if (cancelSignal !== undefined && Object.prototype.toString.call(cancelSignal) !== "[object AbortSignal]") {
    throw new Error(`The \`cancelSignal\` option must be an AbortSignal: ${String(cancelSignal)}`);
  }
}, throwOnCancel = ({ subprocess, cancelSignal, gracefulCancel, context, controller }) => cancelSignal === undefined || gracefulCancel ? [] : [terminateOnCancel(subprocess, cancelSignal, context, controller)], terminateOnCancel = async (subprocess, cancelSignal, context, { signal }) => {
  await onAbortedSignal(cancelSignal, signal);
  context.terminationReason ??= "cancel";
  subprocess.kill();
  throw cancelSignal.reason;
};
var init_cancel = __esm(() => {
  init_abort_signal();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/validation.js
var validateIpcMethod = ({ methodName, isSubprocess, ipc, isConnected }) => {
  validateIpcOption(methodName, isSubprocess, ipc);
  validateConnection(methodName, isSubprocess, isConnected);
}, validateIpcOption = (methodName, isSubprocess, ipc) => {
  if (!ipc) {
    throw new Error(`${getMethodName(methodName, isSubprocess)} can only be used if the \`ipc\` option is \`true\`.`);
  }
}, validateConnection = (methodName, isSubprocess, isConnected) => {
  if (!isConnected) {
    throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} has already exited or disconnected.`);
  }
}, throwOnEarlyDisconnect = (isSubprocess) => {
  throw new Error(`${getMethodName("getOneMessage", isSubprocess)} could not complete: the ${getOtherProcessName(isSubprocess)} exited or disconnected.`);
}, throwOnStrictDeadlockError = (isSubprocess) => {
  throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is sending a message too, instead of listening to incoming messages.
This can be fixed by both sending a message and listening to incoming messages at the same time:

const [receivedMessage] = await Promise.all([
	${getMethodName("getOneMessage", isSubprocess)},
	${getMethodName("sendMessage", isSubprocess, "message, {strict: true}")},
]);`);
}, getStrictResponseError = (error, isSubprocess) => new Error(`${getMethodName("sendMessage", isSubprocess)} failed when sending an acknowledgment response to the ${getOtherProcessName(isSubprocess)}.`, { cause: error }), throwOnMissingStrict = (isSubprocess) => {
  throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is not listening to incoming messages.`);
}, throwOnStrictDisconnect = (isSubprocess) => {
  throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} exited without listening to incoming messages.`);
}, getAbortDisconnectError = () => new Error(`\`cancelSignal\` aborted: the ${getOtherProcessName(true)} disconnected.`), throwOnMissingParent = () => {
  throw new Error("`getCancelSignal()` cannot be used without setting the `cancelSignal` subprocess option.");
}, handleEpipeError = ({ error, methodName, isSubprocess }) => {
  if (error.code === "EPIPE") {
    throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} is disconnecting.`, { cause: error });
  }
}, handleSerializationError = ({ error, methodName, isSubprocess, message }) => {
  if (isSerializationError(error)) {
    throw new Error(`${getMethodName(methodName, isSubprocess)}'s argument type is invalid: the message cannot be serialized: ${String(message)}.`, { cause: error });
  }
}, isSerializationError = ({ code, message }) => SERIALIZATION_ERROR_CODES.has(code) || SERIALIZATION_ERROR_MESSAGES.some((serializationErrorMessage) => message.includes(serializationErrorMessage)), SERIALIZATION_ERROR_CODES, SERIALIZATION_ERROR_MESSAGES, getMethodName = (methodName, isSubprocess, parameters = "") => methodName === "cancelSignal" ? "`cancelSignal`'s `controller.abort()`" : `${getNamespaceName(isSubprocess)}${methodName}(${parameters})`, getNamespaceName = (isSubprocess) => isSubprocess ? "" : "subprocess.", getOtherProcessName = (isSubprocess) => isSubprocess ? "parent process" : "subprocess", disconnect = (anyProcess) => {
  if (anyProcess.connected) {
    anyProcess.disconnect();
  }
};
var init_validation = __esm(() => {
  SERIALIZATION_ERROR_CODES = new Set([
    "ERR_MISSING_ARGS",
    "ERR_INVALID_ARG_TYPE"
  ]);
  SERIALIZATION_ERROR_MESSAGES = [
    "could not be cloned",
    "circular structure",
    "call stack size exceeded"
  ];
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/utils/deferred.js
var createDeferred = () => {
  const methods = {};
  const promise = new Promise((resolve, reject) => {
    Object.assign(methods, { resolve, reject });
  });
  return Object.assign(promise, methods);
};
var init_deferred = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/fd-options.js
var getToStream = (destination, to = "stdin") => {
  const isWritable = true;
  const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(destination);
  const fdNumber = getFdNumber(fileDescriptors, to, isWritable);
  const destinationStream = destination.stdio[fdNumber];
  if (destinationStream === null) {
    throw new TypeError(getInvalidStdioOptionMessage(fdNumber, to, options, isWritable));
  }
  return destinationStream;
}, getFromStream = (source, from = "stdout") => {
  const isWritable = false;
  const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
  const fdNumber = getFdNumber(fileDescriptors, from, isWritable);
  const sourceStream = fdNumber === "all" ? source.all : source.stdio[fdNumber];
  if (sourceStream === null || sourceStream === undefined) {
    throw new TypeError(getInvalidStdioOptionMessage(fdNumber, from, options, isWritable));
  }
  return sourceStream;
}, SUBPROCESS_OPTIONS, getFdNumber = (fileDescriptors, fdName, isWritable) => {
  const fdNumber = parseFdNumber(fdName, isWritable);
  validateFdNumber(fdNumber, fdName, isWritable, fileDescriptors);
  return fdNumber;
}, parseFdNumber = (fdName, isWritable) => {
  const fdNumber = parseFd(fdName);
  if (fdNumber !== undefined) {
    return fdNumber;
  }
  const { validOptions, defaultValue } = isWritable ? { validOptions: '"stdin"', defaultValue: "stdin" } : { validOptions: '"stdout", "stderr", "all"', defaultValue: "stdout" };
  throw new TypeError(`"${getOptionName(isWritable)}" must not be "${fdName}".
It must be ${validOptions} or "fd3", "fd4" (and so on).
It is optional and defaults to "${defaultValue}".`);
}, validateFdNumber = (fdNumber, fdName, isWritable, fileDescriptors) => {
  const fileDescriptor = fileDescriptors[getUsedDescriptor(fdNumber)];
  if (fileDescriptor === undefined) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. That file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
  }
  if (fileDescriptor.direction === "input" && !isWritable) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a readable stream, not writable.`);
  }
  if (fileDescriptor.direction !== "input" && isWritable) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a writable stream, not readable.`);
  }
}, getInvalidStdioOptionMessage = (fdNumber, fdName, options, isWritable) => {
  if (fdNumber === "all" && !options.all) {
    return `The "all" option must be true to use "from: 'all'".`;
  }
  const { optionName, optionValue } = getInvalidStdioOption(fdNumber, options);
  return `The "${optionName}: ${serializeOptionValue(optionValue)}" option is incompatible with using "${getOptionName(isWritable)}: ${serializeOptionValue(fdName)}".
Please set this option with "pipe" instead.`;
}, getInvalidStdioOption = (fdNumber, { stdin, stdout, stderr, stdio }) => {
  const usedDescriptor = getUsedDescriptor(fdNumber);
  if (usedDescriptor === 0 && stdin !== undefined) {
    return { optionName: "stdin", optionValue: stdin };
  }
  if (usedDescriptor === 1 && stdout !== undefined) {
    return { optionName: "stdout", optionValue: stdout };
  }
  if (usedDescriptor === 2 && stderr !== undefined) {
    return { optionName: "stderr", optionValue: stderr };
  }
  return { optionName: `stdio[${usedDescriptor}]`, optionValue: stdio[usedDescriptor] };
}, getUsedDescriptor = (fdNumber) => fdNumber === "all" ? 1 : fdNumber, getOptionName = (isWritable) => isWritable ? "to" : "from", serializeOptionValue = (value) => {
  if (typeof value === "string") {
    return `'${value}'`;
  }
  return typeof value === "number" ? `${value}` : "Stream";
};
var init_fd_options = __esm(() => {
  init_specific();
  SUBPROCESS_OPTIONS = new WeakMap;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/utils/max-listeners.js
import { addAbortListener } from "events";
var incrementMaxListeners = (eventEmitter, maxListenersIncrement, signal) => {
  const maxListeners = eventEmitter.getMaxListeners();
  if (maxListeners === 0 || maxListeners === Number.POSITIVE_INFINITY) {
    return;
  }
  eventEmitter.setMaxListeners(maxListeners + maxListenersIncrement);
  addAbortListener(signal, () => {
    eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() - maxListenersIncrement);
  });
};
var init_max_listeners = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/reference.js
var addReference = (channel, reference) => {
  if (reference) {
    addReferenceCount(channel);
  }
}, addReferenceCount = (channel) => {
  channel.refCounted();
}, removeReference = (channel, reference) => {
  if (reference) {
    removeReferenceCount(channel);
  }
}, removeReferenceCount = (channel) => {
  channel.unrefCounted();
}, undoAddedReferences = (channel, isSubprocess) => {
  if (isSubprocess) {
    removeReferenceCount(channel);
    removeReferenceCount(channel);
  }
}, redoAddedReferences = (channel, isSubprocess) => {
  if (isSubprocess) {
    addReferenceCount(channel);
    addReferenceCount(channel);
  }
};
var init_reference = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/incoming.js
import { once as once2 } from "events";
import { scheduler } from "timers/promises";
var onMessage = async ({ anyProcess, channel, isSubprocess, ipcEmitter }, wrappedMessage) => {
  if (handleStrictResponse(wrappedMessage) || handleAbort(wrappedMessage)) {
    return;
  }
  if (!INCOMING_MESSAGES.has(anyProcess)) {
    INCOMING_MESSAGES.set(anyProcess, []);
  }
  const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
  incomingMessages.push(wrappedMessage);
  if (incomingMessages.length > 1) {
    return;
  }
  while (incomingMessages.length > 0) {
    await waitForOutgoingMessages(anyProcess, ipcEmitter, wrappedMessage);
    await scheduler.yield();
    const message = await handleStrictRequest({
      wrappedMessage: incomingMessages[0],
      anyProcess,
      channel,
      isSubprocess,
      ipcEmitter
    });
    incomingMessages.shift();
    ipcEmitter.emit("message", message);
    ipcEmitter.emit("message:done");
  }
}, onDisconnect = async ({ anyProcess, channel, isSubprocess, ipcEmitter, boundOnMessage }) => {
  abortOnDisconnect();
  const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
  while (incomingMessages?.length > 0) {
    await once2(ipcEmitter, "message:done");
  }
  anyProcess.removeListener("message", boundOnMessage);
  redoAddedReferences(channel, isSubprocess);
  ipcEmitter.connected = false;
  ipcEmitter.emit("disconnect");
}, INCOMING_MESSAGES;
var init_incoming = __esm(() => {
  init_outgoing();
  init_reference();
  init_strict();
  init_graceful();
  INCOMING_MESSAGES = new WeakMap;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/forward.js
import { EventEmitter } from "events";
var getIpcEmitter = (anyProcess, channel, isSubprocess) => {
  if (IPC_EMITTERS.has(anyProcess)) {
    return IPC_EMITTERS.get(anyProcess);
  }
  const ipcEmitter = new EventEmitter;
  ipcEmitter.connected = true;
  IPC_EMITTERS.set(anyProcess, ipcEmitter);
  forwardEvents({
    ipcEmitter,
    anyProcess,
    channel,
    isSubprocess
  });
  return ipcEmitter;
}, IPC_EMITTERS, forwardEvents = ({ ipcEmitter, anyProcess, channel, isSubprocess }) => {
  const boundOnMessage = onMessage.bind(undefined, {
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter
  });
  anyProcess.on("message", boundOnMessage);
  anyProcess.once("disconnect", onDisconnect.bind(undefined, {
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter,
    boundOnMessage
  }));
  undoAddedReferences(channel, isSubprocess);
}, isConnected = (anyProcess) => {
  const ipcEmitter = IPC_EMITTERS.get(anyProcess);
  return ipcEmitter === undefined ? anyProcess.channel !== null : ipcEmitter.connected;
};
var init_forward = __esm(() => {
  init_incoming();
  init_reference();
  IPC_EMITTERS = new WeakMap;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/strict.js
import { once as once3 } from "events";
var handleSendStrict = ({ anyProcess, channel, isSubprocess, message, strict }) => {
  if (!strict) {
    return message;
  }
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const hasListeners = hasMessageListeners(anyProcess, ipcEmitter);
  return {
    id: count++,
    type: REQUEST_TYPE,
    message,
    hasListeners
  };
}, count = 0n, validateStrictDeadlock = (outgoingMessages, wrappedMessage) => {
  if (wrappedMessage?.type !== REQUEST_TYPE || wrappedMessage.hasListeners) {
    return;
  }
  for (const { id } of outgoingMessages) {
    if (id !== undefined) {
      STRICT_RESPONSES[id].resolve({ isDeadlock: true, hasListeners: false });
    }
  }
}, handleStrictRequest = async ({ wrappedMessage, anyProcess, channel, isSubprocess, ipcEmitter }) => {
  if (wrappedMessage?.type !== REQUEST_TYPE || !anyProcess.connected) {
    return wrappedMessage;
  }
  const { id, message } = wrappedMessage;
  const response = { id, type: RESPONSE_TYPE, message: hasMessageListeners(anyProcess, ipcEmitter) };
  try {
    await sendMessage({
      anyProcess,
      channel,
      isSubprocess,
      ipc: true
    }, response);
  } catch (error) {
    ipcEmitter.emit("strict:error", error);
  }
  return message;
}, handleStrictResponse = (wrappedMessage) => {
  if (wrappedMessage?.type !== RESPONSE_TYPE) {
    return false;
  }
  const { id, message: hasListeners } = wrappedMessage;
  STRICT_RESPONSES[id]?.resolve({ isDeadlock: false, hasListeners });
  return true;
}, waitForStrictResponse = async (wrappedMessage, anyProcess, isSubprocess) => {
  if (wrappedMessage?.type !== REQUEST_TYPE) {
    return;
  }
  const deferred = createDeferred();
  STRICT_RESPONSES[wrappedMessage.id] = deferred;
  const controller = new AbortController;
  try {
    const { isDeadlock, hasListeners } = await Promise.race([
      deferred,
      throwOnDisconnect(anyProcess, isSubprocess, controller)
    ]);
    if (isDeadlock) {
      throwOnStrictDeadlockError(isSubprocess);
    }
    if (!hasListeners) {
      throwOnMissingStrict(isSubprocess);
    }
  } finally {
    controller.abort();
    delete STRICT_RESPONSES[wrappedMessage.id];
  }
}, STRICT_RESPONSES, throwOnDisconnect = async (anyProcess, isSubprocess, { signal }) => {
  incrementMaxListeners(anyProcess, 1, signal);
  await once3(anyProcess, "disconnect", { signal });
  throwOnStrictDisconnect(isSubprocess);
}, REQUEST_TYPE = "execa:ipc:request", RESPONSE_TYPE = "execa:ipc:response";
var init_strict = __esm(() => {
  init_deferred();
  init_max_listeners();
  init_send();
  init_validation();
  init_forward();
  init_outgoing();
  STRICT_RESPONSES = {};
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/outgoing.js
var startSendMessage = (anyProcess, wrappedMessage, strict) => {
  if (!OUTGOING_MESSAGES.has(anyProcess)) {
    OUTGOING_MESSAGES.set(anyProcess, new Set);
  }
  const outgoingMessages = OUTGOING_MESSAGES.get(anyProcess);
  const onMessageSent = createDeferred();
  const id = strict ? wrappedMessage.id : undefined;
  const outgoingMessage = { onMessageSent, id };
  outgoingMessages.add(outgoingMessage);
  return { outgoingMessages, outgoingMessage };
}, endSendMessage = ({ outgoingMessages, outgoingMessage }) => {
  outgoingMessages.delete(outgoingMessage);
  outgoingMessage.onMessageSent.resolve();
}, waitForOutgoingMessages = async (anyProcess, ipcEmitter, wrappedMessage) => {
  while (!hasMessageListeners(anyProcess, ipcEmitter) && OUTGOING_MESSAGES.get(anyProcess)?.size > 0) {
    const outgoingMessages = [...OUTGOING_MESSAGES.get(anyProcess)];
    validateStrictDeadlock(outgoingMessages, wrappedMessage);
    await Promise.all(outgoingMessages.map(({ onMessageSent }) => onMessageSent));
  }
}, OUTGOING_MESSAGES, hasMessageListeners = (anyProcess, ipcEmitter) => ipcEmitter.listenerCount("message") > getMinListenerCount(anyProcess), getMinListenerCount = (anyProcess) => SUBPROCESS_OPTIONS.has(anyProcess) && !getFdSpecificValue(SUBPROCESS_OPTIONS.get(anyProcess).options.buffer, "ipc") ? 1 : 0;
var init_outgoing = __esm(() => {
  init_deferred();
  init_specific();
  init_fd_options();
  init_strict();
  OUTGOING_MESSAGES = new WeakMap;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/send.js
import { promisify as promisify2 } from "util";
var sendMessage = ({ anyProcess, channel, isSubprocess, ipc }, message, { strict = false } = {}) => {
  const methodName = "sendMessage";
  validateIpcMethod({
    methodName,
    isSubprocess,
    ipc,
    isConnected: anyProcess.connected
  });
  return sendMessageAsync({
    anyProcess,
    channel,
    methodName,
    isSubprocess,
    message,
    strict
  });
}, sendMessageAsync = async ({ anyProcess, channel, methodName, isSubprocess, message, strict }) => {
  const wrappedMessage = handleSendStrict({
    anyProcess,
    channel,
    isSubprocess,
    message,
    strict
  });
  const outgoingMessagesState = startSendMessage(anyProcess, wrappedMessage, strict);
  try {
    await sendOneMessage({
      anyProcess,
      methodName,
      isSubprocess,
      wrappedMessage,
      message
    });
  } catch (error) {
    disconnect(anyProcess);
    throw error;
  } finally {
    endSendMessage(outgoingMessagesState);
  }
}, sendOneMessage = async ({ anyProcess, methodName, isSubprocess, wrappedMessage, message }) => {
  const sendMethod = getSendMethod(anyProcess);
  try {
    await Promise.all([
      waitForStrictResponse(wrappedMessage, anyProcess, isSubprocess),
      sendMethod(wrappedMessage)
    ]);
  } catch (error) {
    handleEpipeError({ error, methodName, isSubprocess });
    handleSerializationError({
      error,
      methodName,
      isSubprocess,
      message
    });
    throw error;
  }
}, getSendMethod = (anyProcess) => {
  if (PROCESS_SEND_METHODS.has(anyProcess)) {
    return PROCESS_SEND_METHODS.get(anyProcess);
  }
  const sendMethod = promisify2(anyProcess.send.bind(anyProcess));
  PROCESS_SEND_METHODS.set(anyProcess, sendMethod);
  return sendMethod;
}, PROCESS_SEND_METHODS;
var init_send = __esm(() => {
  init_validation();
  init_outgoing();
  init_strict();
  PROCESS_SEND_METHODS = new WeakMap;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/graceful.js
import { scheduler as scheduler2 } from "timers/promises";
var sendAbort = (subprocess, message) => {
  const methodName = "cancelSignal";
  validateConnection(methodName, false, subprocess.connected);
  return sendOneMessage({
    anyProcess: subprocess,
    methodName,
    isSubprocess: false,
    wrappedMessage: { type: GRACEFUL_CANCEL_TYPE, message },
    message
  });
}, getCancelSignal = async ({ anyProcess, channel, isSubprocess, ipc }) => {
  await startIpc({
    anyProcess,
    channel,
    isSubprocess,
    ipc
  });
  return cancelController.signal;
}, startIpc = async ({ anyProcess, channel, isSubprocess, ipc }) => {
  if (cancelListening) {
    return;
  }
  cancelListening = true;
  if (!ipc) {
    throwOnMissingParent();
    return;
  }
  if (channel === null) {
    abortOnDisconnect();
    return;
  }
  getIpcEmitter(anyProcess, channel, isSubprocess);
  await scheduler2.yield();
}, cancelListening = false, handleAbort = (wrappedMessage) => {
  if (wrappedMessage?.type !== GRACEFUL_CANCEL_TYPE) {
    return false;
  }
  cancelController.abort(wrappedMessage.message);
  return true;
}, GRACEFUL_CANCEL_TYPE = "execa:ipc:cancel", abortOnDisconnect = () => {
  cancelController.abort(getAbortDisconnectError());
}, cancelController;
var init_graceful = __esm(() => {
  init_send();
  init_forward();
  init_validation();
  cancelController = new AbortController;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/terminate/graceful.js
var validateGracefulCancel = ({ gracefulCancel, cancelSignal, ipc, serialization }) => {
  if (!gracefulCancel) {
    return;
  }
  if (cancelSignal === undefined) {
    throw new Error("The `cancelSignal` option must be defined when setting the `gracefulCancel` option.");
  }
  if (!ipc) {
    throw new Error("The `ipc` option cannot be false when setting the `gracefulCancel` option.");
  }
  if (serialization === "json") {
    throw new Error("The `serialization` option cannot be 'json' when setting the `gracefulCancel` option.");
  }
}, throwOnGracefulCancel = ({
  subprocess,
  cancelSignal,
  gracefulCancel,
  forceKillAfterDelay,
  context,
  controller
}) => gracefulCancel ? [sendOnAbort({
  subprocess,
  cancelSignal,
  forceKillAfterDelay,
  context,
  controller
})] : [], sendOnAbort = async ({ subprocess, cancelSignal, forceKillAfterDelay, context, controller: { signal } }) => {
  await onAbortedSignal(cancelSignal, signal);
  const reason = getReason(cancelSignal);
  await sendAbort(subprocess, reason);
  killOnTimeout({
    kill: subprocess.kill,
    forceKillAfterDelay,
    context,
    controllerSignal: signal
  });
  context.terminationReason ??= "gracefulCancel";
  throw cancelSignal.reason;
}, getReason = ({ reason }) => {
  if (!(reason instanceof DOMException)) {
    return reason;
  }
  const error = new Error(reason.message);
  Object.defineProperty(error, "stack", {
    value: reason.stack,
    enumerable: false,
    configurable: true,
    writable: true
  });
  return error;
};
var init_graceful2 = __esm(() => {
  init_abort_signal();
  init_graceful();
  init_kill();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/terminate/timeout.js
import { setTimeout as setTimeout3 } from "timers/promises";
var validateTimeout = ({ timeout }) => {
  if (timeout !== undefined && (!Number.isFinite(timeout) || timeout < 0)) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }
}, throwOnTimeout = (subprocess, timeout, context, controller) => timeout === 0 || timeout === undefined ? [] : [killAfterTimeout(subprocess, timeout, context, controller)], killAfterTimeout = async (subprocess, timeout, context, { signal }) => {
  await setTimeout3(timeout, undefined, { signal });
  context.terminationReason ??= "timeout";
  subprocess.kill();
  throw new DiscardedError;
};
var init_timeout = __esm(() => {
  init_final_error();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/node.js
import { execPath, execArgv } from "process";
import path3 from "path";
var mapNode = ({ options }) => {
  if (options.node === false) {
    throw new TypeError('The "node" option cannot be false with `execaNode()`.');
  }
  return { options: { ...options, node: true } };
}, handleNodeOption = (file, commandArguments, {
  node: shouldHandleNode = false,
  nodePath = execPath,
  nodeOptions = execArgv.filter((nodeOption) => !nodeOption.startsWith("--inspect")),
  cwd,
  execPath: formerNodePath,
  ...options
}) => {
  if (formerNodePath !== undefined) {
    throw new TypeError('The "execPath" option has been removed. Please use the "nodePath" option instead.');
  }
  const normalizedNodePath = safeNormalizeFileUrl(nodePath, 'The "nodePath" option');
  const resolvedNodePath = path3.resolve(cwd, normalizedNodePath);
  const newOptions = {
    ...options,
    nodePath: resolvedNodePath,
    node: shouldHandleNode,
    cwd
  };
  if (!shouldHandleNode) {
    return [file, commandArguments, newOptions];
  }
  if (path3.basename(file, ".exe") === "node") {
    throw new TypeError('When the "node" option is true, the first argument does not need to be "node".');
  }
  return [
    resolvedNodePath,
    [...nodeOptions, file, ...commandArguments],
    { ipc: true, ...newOptions, shell: false }
  ];
};
var init_node2 = __esm(() => {
  init_file_url();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/ipc-input.js
import { serialize } from "v8";
var validateIpcInputOption = ({ ipcInput, ipc, serialization }) => {
  if (ipcInput === undefined) {
    return;
  }
  if (!ipc) {
    throw new Error("The `ipcInput` option cannot be set unless the `ipc` option is `true`.");
  }
  validateIpcInput[serialization](ipcInput);
}, validateAdvancedInput = (ipcInput) => {
  try {
    serialize(ipcInput);
  } catch (error) {
    throw new Error("The `ipcInput` option is not serializable with a structured clone.", { cause: error });
  }
}, validateJsonInput = (ipcInput) => {
  try {
    JSON.stringify(ipcInput);
  } catch (error) {
    throw new Error("The `ipcInput` option is not serializable with JSON.", { cause: error });
  }
}, validateIpcInput, sendIpcInput = async (subprocess, ipcInput) => {
  if (ipcInput === undefined) {
    return;
  }
  await subprocess.sendMessage(ipcInput);
};
var init_ipc_input = __esm(() => {
  validateIpcInput = {
    advanced: validateAdvancedInput,
    json: validateJsonInput
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/encoding-option.js
var validateEncoding = ({ encoding }) => {
  if (ENCODINGS.has(encoding)) {
    return;
  }
  const correctEncoding = getCorrectEncoding(encoding);
  if (correctEncoding !== undefined) {
    throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to ${serializeEncoding(correctEncoding)}.`);
  }
  const correctEncodings = [...ENCODINGS].map((correctEncoding2) => serializeEncoding(correctEncoding2)).join(", ");
  throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to one of: ${correctEncodings}.`);
}, TEXT_ENCODINGS, BINARY_ENCODINGS, ENCODINGS, getCorrectEncoding = (encoding) => {
  if (encoding === null) {
    return "buffer";
  }
  if (typeof encoding !== "string") {
    return;
  }
  const lowerEncoding = encoding.toLowerCase();
  if (lowerEncoding in ENCODING_ALIASES) {
    return ENCODING_ALIASES[lowerEncoding];
  }
  if (ENCODINGS.has(lowerEncoding)) {
    return lowerEncoding;
  }
}, ENCODING_ALIASES, serializeEncoding = (encoding) => typeof encoding === "string" ? `"${encoding}"` : String(encoding);
var init_encoding_option = __esm(() => {
  TEXT_ENCODINGS = new Set(["utf8", "utf16le"]);
  BINARY_ENCODINGS = new Set(["buffer", "hex", "base64", "base64url", "latin1", "ascii"]);
  ENCODINGS = new Set([...TEXT_ENCODINGS, ...BINARY_ENCODINGS]);
  ENCODING_ALIASES = {
    "utf-8": "utf8",
    "utf-16le": "utf16le",
    "ucs-2": "utf16le",
    ucs2: "utf16le",
    binary: "latin1"
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/cwd.js
import { statSync } from "fs";
import path4 from "path";
import process4 from "process";
var normalizeCwd = (cwd = getDefaultCwd()) => {
  const cwdString = safeNormalizeFileUrl(cwd, 'The "cwd" option');
  return path4.resolve(cwdString);
}, getDefaultCwd = () => {
  try {
    return process4.cwd();
  } catch (error) {
    error.message = `The current directory does not exist.
${error.message}`;
    throw error;
  }
}, fixCwdError = (originalMessage, cwd) => {
  if (cwd === getDefaultCwd()) {
    return originalMessage;
  }
  let cwdStat;
  try {
    cwdStat = statSync(cwd);
  } catch (error) {
    return `The "cwd" option is invalid: ${cwd}.
${error.message}
${originalMessage}`;
  }
  if (!cwdStat.isDirectory()) {
    return `The "cwd" option is not a directory: ${cwd}.
${originalMessage}`;
  }
  return originalMessage;
};
var init_cwd = __esm(() => {
  init_file_url();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/options.js
import path5 from "path";
import process5 from "process";
var import_cross_spawn, normalizeOptions = (filePath, rawArguments, rawOptions) => {
  rawOptions.cwd = normalizeCwd(rawOptions.cwd);
  const [processedFile, processedArguments, processedOptions] = handleNodeOption(filePath, rawArguments, rawOptions);
  const { command: file, args: commandArguments, options: initialOptions } = import_cross_spawn.default._parse(processedFile, processedArguments, processedOptions);
  const fdOptions = normalizeFdSpecificOptions(initialOptions);
  const options = addDefaultOptions(fdOptions);
  validateTimeout(options);
  validateEncoding(options);
  validateIpcInputOption(options);
  validateCancelSignal(options);
  validateGracefulCancel(options);
  options.shell = normalizeFileUrl(options.shell);
  options.env = getEnv(options);
  options.killSignal = normalizeKillSignal(options.killSignal);
  options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay);
  options.lines = options.lines.map((lines, fdNumber) => lines && !BINARY_ENCODINGS.has(options.encoding) && options.buffer[fdNumber]);
  if (process5.platform === "win32" && path5.basename(file, ".exe") === "cmd") {
    commandArguments.unshift("/q");
  }
  return { file, commandArguments, options };
}, addDefaultOptions = ({
  extendEnv = true,
  preferLocal = false,
  cwd,
  localDir: localDirectory = cwd,
  encoding = "utf8",
  reject = true,
  cleanup = true,
  all = false,
  windowsHide = true,
  killSignal = "SIGTERM",
  forceKillAfterDelay = true,
  gracefulCancel = false,
  ipcInput,
  ipc = ipcInput !== undefined || gracefulCancel,
  serialization = "advanced",
  ...options
}) => ({
  ...options,
  extendEnv,
  preferLocal,
  cwd,
  localDirectory,
  encoding,
  reject,
  cleanup,
  all,
  windowsHide,
  killSignal,
  forceKillAfterDelay,
  gracefulCancel,
  ipcInput,
  ipc,
  serialization
}), getEnv = ({ env: envOption, extendEnv, preferLocal, node, localDirectory, nodePath }) => {
  const env = extendEnv ? { ...process5.env, ...envOption } : envOption;
  if (preferLocal || node) {
    return npmRunPathEnv({
      env,
      cwd: localDirectory,
      execPath: nodePath,
      preferLocal,
      addExecPath: node
    });
  }
  return env;
};
var init_options = __esm(() => {
  init_npm_run_path();
  init_kill();
  init_signal();
  init_cancel();
  init_graceful2();
  init_timeout();
  init_node2();
  init_ipc_input();
  init_encoding_option();
  init_cwd();
  init_file_url();
  init_specific();
  import_cross_spawn = __toESM(require_cross_spawn(), 1);
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/arguments/shell.js
var concatenateShell = (file, commandArguments, options) => options.shell && commandArguments.length > 0 ? [[file, ...commandArguments].join(" "), [], options] : [file, commandArguments, options];
var init_shell = () => {};

// node_modules/.bun/strip-final-newline@4.0.0/node_modules/strip-final-newline/index.js
function stripFinalNewline(input) {
  if (typeof input === "string") {
    return stripFinalNewlineString(input);
  }
  if (!(ArrayBuffer.isView(input) && input.BYTES_PER_ELEMENT === 1)) {
    throw new Error("Input must be a string or a Uint8Array");
  }
  return stripFinalNewlineBinary(input);
}
var stripFinalNewlineString = (input) => input.at(-1) === LF ? input.slice(0, input.at(-2) === CR ? -2 : -1) : input, stripFinalNewlineBinary = (input) => input.at(-1) === LF_BINARY ? input.subarray(0, input.at(-2) === CR_BINARY ? -2 : -1) : input, LF = `
`, LF_BINARY, CR = "\r", CR_BINARY;
var init_strip_final_newline = __esm(() => {
  LF_BINARY = LF.codePointAt(0);
  CR_BINARY = CR.codePointAt(0);
});

// node_modules/.bun/is-stream@4.0.1/node_modules/is-stream/index.js
function isStream(stream, { checkOpen = true } = {}) {
  return stream !== null && typeof stream === "object" && (stream.writable || stream.readable || !checkOpen || stream.writable === undefined && stream.readable === undefined) && typeof stream.pipe === "function";
}
function isWritableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.writable || !checkOpen) && typeof stream.write === "function" && typeof stream.end === "function" && typeof stream.writable === "boolean" && typeof stream.writableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isReadableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.readable || !checkOpen) && typeof stream.read === "function" && typeof stream.readable === "boolean" && typeof stream.readableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isDuplexStream(stream, options) {
  return isWritableStream(stream, options) && isReadableStream(stream, options);
}
var init_is_stream = () => {};

// node_modules/.bun/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js
class c {
  #t;
  #n;
  #r = false;
  #e = undefined;
  constructor(e, t) {
    this.#t = e, this.#n = t;
  }
  next() {
    const e = () => this.#s();
    return this.#e = this.#e ? this.#e.then(e, e) : e(), this.#e;
  }
  return(e) {
    const t = () => this.#i(e);
    return this.#e ? this.#e.then(t, t) : t();
  }
  async#s() {
    if (this.#r)
      return {
        done: true,
        value: undefined
      };
    let e;
    try {
      e = await this.#t.read();
    } catch (t) {
      throw this.#e = undefined, this.#r = true, this.#t.releaseLock(), t;
    }
    return e.done && (this.#e = undefined, this.#r = true, this.#t.releaseLock()), e;
  }
  async#i(e) {
    if (this.#r)
      return {
        done: true,
        value: e
      };
    if (this.#r = true, !this.#n) {
      const t = this.#t.cancel(e);
      return this.#t.releaseLock(), await t, {
        done: true,
        value: e
      };
    }
    return this.#t.releaseLock(), {
      done: true,
      value: e
    };
  }
}
function i() {
  return this[n].next();
}
function o(r) {
  return this[n].return(r);
}
function h({ preventCancel: r = false } = {}) {
  const e = this.getReader(), t = new c(e, r), s = Object.create(u);
  return s[n] = t, s;
}
var a, n, u;
var init_asyncIterator = __esm(() => {
  a = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {}).prototype);
  n = Symbol();
  Object.defineProperty(i, "name", { value: "next" });
  Object.defineProperty(o, "name", { value: "return" });
  u = Object.create(a, {
    next: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i
    },
    return: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: o
    }
  });
});

// node_modules/.bun/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/fromAnyIterable.js
var init_fromAnyIterable = () => {};

// node_modules/.bun/@sec-ant+readable-stream@0.4.1/node_modules/@sec-ant/readable-stream/dist/ponyfill/index.js
var init_ponyfill = __esm(() => {
  init_asyncIterator();
  init_fromAnyIterable();
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/stream.js
var getAsyncIterable = (stream) => {
  if (isReadableStream(stream, { checkOpen: false }) && nodeImports.on !== undefined) {
    return getStreamIterable(stream);
  }
  if (typeof stream?.[Symbol.asyncIterator] === "function") {
    return stream;
  }
  if (toString.call(stream) === "[object ReadableStream]") {
    return h.call(stream);
  }
  throw new TypeError("The first argument must be a Readable, a ReadableStream, or an async iterable.");
}, toString, getStreamIterable = async function* (stream) {
  const controller = new AbortController;
  const state = {};
  handleStreamEnd(stream, controller, state);
  try {
    for await (const [chunk] of nodeImports.on(stream, "data", { signal: controller.signal })) {
      yield chunk;
    }
  } catch (error) {
    if (state.error !== undefined) {
      throw state.error;
    } else if (!controller.signal.aborted) {
      throw error;
    }
  } finally {
    stream.destroy();
  }
}, handleStreamEnd = async (stream, controller, state) => {
  try {
    await nodeImports.finished(stream, {
      cleanup: true,
      readable: true,
      writable: false,
      error: false
    });
  } catch (error) {
    state.error = error;
  } finally {
    controller.abort();
  }
}, nodeImports;
var init_stream = __esm(() => {
  init_is_stream();
  init_ponyfill();
  ({ toString } = Object.prototype);
  nodeImports = {};
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/contents.js
var getStreamContents = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
  const asyncIterable = getAsyncIterable(stream);
  const state = init();
  state.length = 0;
  try {
    for await (const chunk of asyncIterable) {
      const chunkType = getChunkType(chunk);
      const convertedChunk = convertChunk[chunkType](chunk, state);
      appendChunk({
        convertedChunk,
        state,
        getSize,
        truncateChunk,
        addChunk,
        maxBuffer
      });
    }
    appendFinalChunk({
      state,
      convertChunk,
      getSize,
      truncateChunk,
      addChunk,
      getFinalChunk,
      maxBuffer
    });
    return finalize(state);
  } catch (error) {
    const normalizedError = typeof error === "object" && error !== null ? error : new Error(error);
    normalizedError.bufferedData = finalize(state);
    throw normalizedError;
  }
}, appendFinalChunk = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
  const convertedChunk = getFinalChunk(state);
  if (convertedChunk !== undefined) {
    appendChunk({
      convertedChunk,
      state,
      getSize,
      truncateChunk,
      addChunk,
      maxBuffer
    });
  }
}, appendChunk = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer }) => {
  const chunkSize = getSize(convertedChunk);
  const newLength = state.length + chunkSize;
  if (newLength <= maxBuffer) {
    addNewChunk(convertedChunk, state, addChunk, newLength);
    return;
  }
  const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
  if (truncatedChunk !== undefined) {
    addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
  }
  throw new MaxBufferError;
}, addNewChunk = (convertedChunk, state, addChunk, newLength) => {
  state.contents = addChunk(convertedChunk, state, newLength);
  state.length = newLength;
}, getChunkType = (chunk) => {
  const typeOfChunk = typeof chunk;
  if (typeOfChunk === "string") {
    return "string";
  }
  if (typeOfChunk !== "object" || chunk === null) {
    return "others";
  }
  if (globalThis.Buffer?.isBuffer(chunk)) {
    return "buffer";
  }
  const prototypeName = objectToString2.call(chunk);
  if (prototypeName === "[object ArrayBuffer]") {
    return "arrayBuffer";
  }
  if (prototypeName === "[object DataView]") {
    return "dataView";
  }
  if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString2.call(chunk.buffer) === "[object ArrayBuffer]") {
    return "typedArray";
  }
  return "others";
}, objectToString2, MaxBufferError;
var init_contents = __esm(() => {
  init_stream();
  ({ toString: objectToString2 } = Object.prototype);
  MaxBufferError = class MaxBufferError extends Error {
    name = "MaxBufferError";
    constructor() {
      super("maxBuffer exceeded");
    }
  };
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/utils.js
var identity2 = (value) => value, noop = () => {
  return;
}, getContentsProperty = ({ contents }) => contents, throwObjectStream = (chunk) => {
  throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
}, getLengthProperty = (convertedChunk) => convertedChunk.length;
var init_utils = () => {};

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/array.js
async function getStreamAsArray(stream, options) {
  return getStreamContents(stream, arrayMethods, options);
}
var initArray = () => ({ contents: [] }), increment = () => 1, addArrayChunk = (convertedChunk, { contents }) => {
  contents.push(convertedChunk);
  return contents;
}, arrayMethods;
var init_array = __esm(() => {
  init_contents();
  init_utils();
  arrayMethods = {
    init: initArray,
    convertChunk: {
      string: identity2,
      buffer: identity2,
      arrayBuffer: identity2,
      dataView: identity2,
      typedArray: identity2,
      others: identity2
    },
    getSize: increment,
    truncateChunk: noop,
    addChunk: addArrayChunk,
    getFinalChunk: noop,
    finalize: getContentsProperty
  };
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/array-buffer.js
async function getStreamAsArrayBuffer(stream, options) {
  return getStreamContents(stream, arrayBufferMethods, options);
}
var initArrayBuffer = () => ({ contents: new ArrayBuffer(0) }), useTextEncoder = (chunk) => textEncoder2.encode(chunk), textEncoder2, useUint8Array = (chunk) => new Uint8Array(chunk), useUint8ArrayWithOffset = (chunk) => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength), truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize), addArrayBufferChunk = (convertedChunk, { contents, length: previousLength }, length) => {
  const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
  new Uint8Array(newContents).set(convertedChunk, previousLength);
  return newContents;
}, resizeArrayBufferSlow = (contents, length) => {
  if (length <= contents.byteLength) {
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
}, resizeArrayBuffer = (contents, length) => {
  if (length <= contents.maxByteLength) {
    contents.resize(length);
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(length, { maxByteLength: getNewContentsLength(length) });
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
}, getNewContentsLength = (length) => SCALE_FACTOR ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR)), SCALE_FACTOR = 2, finalizeArrayBuffer = ({ contents, length }) => hasArrayBufferResize() ? contents : contents.slice(0, length), hasArrayBufferResize = () => ("resize" in ArrayBuffer.prototype), arrayBufferMethods;
var init_array_buffer = __esm(() => {
  init_contents();
  init_utils();
  textEncoder2 = new TextEncoder;
  arrayBufferMethods = {
    init: initArrayBuffer,
    convertChunk: {
      string: useTextEncoder,
      buffer: useUint8Array,
      arrayBuffer: useUint8Array,
      dataView: useUint8ArrayWithOffset,
      typedArray: useUint8ArrayWithOffset,
      others: throwObjectStream
    },
    getSize: getLengthProperty,
    truncateChunk: truncateArrayBufferChunk,
    addChunk: addArrayBufferChunk,
    getFinalChunk: noop,
    finalize: finalizeArrayBuffer
  };
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/string.js
async function getStreamAsString(stream, options) {
  return getStreamContents(stream, stringMethods, options);
}
var initString = () => ({ contents: "", textDecoder: new TextDecoder }), useTextDecoder = (chunk, { textDecoder: textDecoder2 }) => textDecoder2.decode(chunk, { stream: true }), addStringChunk = (convertedChunk, { contents }) => contents + convertedChunk, truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize), getFinalStringChunk = ({ textDecoder: textDecoder2 }) => {
  const finalChunk = textDecoder2.decode();
  return finalChunk === "" ? undefined : finalChunk;
}, stringMethods;
var init_string = __esm(() => {
  init_contents();
  init_utils();
  stringMethods = {
    init: initString,
    convertChunk: {
      string: identity2,
      buffer: useTextDecoder,
      arrayBuffer: useTextDecoder,
      dataView: useTextDecoder,
      typedArray: useTextDecoder,
      others: throwObjectStream
    },
    getSize: getLengthProperty,
    truncateChunk: truncateStringChunk,
    addChunk: addStringChunk,
    getFinalChunk: getFinalStringChunk,
    finalize: getContentsProperty
  };
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/exports.js
var init_exports = __esm(() => {
  init_array();
  init_array_buffer();
  init_string();
  init_contents();
});

// node_modules/.bun/get-stream@9.0.1/node_modules/get-stream/source/index.js
import { on } from "events";
import { finished } from "stream/promises";
var init_source = __esm(() => {
  init_stream();
  init_exports();
  Object.assign(nodeImports, { on, finished });
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/max-buffer.js
var handleMaxBuffer = ({ error, stream, readableObjectMode, lines, encoding, fdNumber }) => {
  if (!(error instanceof MaxBufferError)) {
    throw error;
  }
  if (fdNumber === "all") {
    return error;
  }
  const unit = getMaxBufferUnit(readableObjectMode, lines, encoding);
  error.maxBufferInfo = { fdNumber, unit };
  stream.destroy();
  throw error;
}, getMaxBufferUnit = (readableObjectMode, lines, encoding) => {
  if (readableObjectMode) {
    return "objects";
  }
  if (lines) {
    return "lines";
  }
  if (encoding === "buffer") {
    return "bytes";
  }
  return "characters";
}, checkIpcMaxBuffer = (subprocess, ipcOutput, maxBuffer) => {
  if (ipcOutput.length !== maxBuffer) {
    return;
  }
  const error = new MaxBufferError;
  error.maxBufferInfo = { fdNumber: "ipc" };
  throw error;
}, getMaxBufferMessage = (error, maxBuffer) => {
  const { streamName, threshold, unit } = getMaxBufferInfo(error, maxBuffer);
  return `Command's ${streamName} was larger than ${threshold} ${unit}`;
}, getMaxBufferInfo = (error, maxBuffer) => {
  if (error?.maxBufferInfo === undefined) {
    return { streamName: "output", threshold: maxBuffer[1], unit: "bytes" };
  }
  const { maxBufferInfo: { fdNumber, unit } } = error;
  delete error.maxBufferInfo;
  const threshold = getFdSpecificValue(maxBuffer, fdNumber);
  if (fdNumber === "ipc") {
    return { streamName: "IPC output", threshold, unit: "messages" };
  }
  return { streamName: getStreamName(fdNumber), threshold, unit };
}, isMaxBufferSync = (resultError, output, maxBuffer) => resultError?.code === "ENOBUFS" && output !== null && output.some((result) => result !== null && result.length > getMaxBufferSync(maxBuffer)), truncateMaxBufferSync = (result, isMaxBuffer, maxBuffer) => {
  if (!isMaxBuffer) {
    return result;
  }
  const maxBufferValue = getMaxBufferSync(maxBuffer);
  return result.length > maxBufferValue ? result.slice(0, maxBufferValue) : result;
}, getMaxBufferSync = ([, stdoutMaxBuffer]) => stdoutMaxBuffer;
var init_max_buffer = __esm(() => {
  init_source();
  init_standard_stream();
  init_specific();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/return/message.js
import { inspect as inspect2 } from "util";
var createMessages = ({
  stdio,
  all,
  ipcOutput,
  originalError,
  signal,
  signalDescription,
  exitCode,
  escapedCommand,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal,
  maxBuffer,
  timeout,
  cwd
}) => {
  const errorCode = originalError?.code;
  const prefix = getErrorPrefix({
    originalError,
    timedOut,
    timeout,
    isMaxBuffer,
    maxBuffer,
    errorCode,
    signal,
    signalDescription,
    exitCode,
    isCanceled,
    isGracefullyCanceled,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal
  });
  const originalMessage = getOriginalMessage(originalError, cwd);
  const suffix = originalMessage === undefined ? "" : `
${originalMessage}`;
  const shortMessage = `${prefix}: ${escapedCommand}${suffix}`;
  const messageStdio = all === undefined ? [stdio[2], stdio[1]] : [all];
  const message = [
    shortMessage,
    ...messageStdio,
    ...stdio.slice(3),
    ipcOutput.map((ipcMessage) => serializeIpcMessage(ipcMessage)).join(`
`)
  ].map((messagePart) => escapeLines(stripFinalNewline(serializeMessagePart(messagePart)))).filter(Boolean).join(`

`);
  return { originalMessage, shortMessage, message };
}, getErrorPrefix = ({
  originalError,
  timedOut,
  timeout,
  isMaxBuffer,
  maxBuffer,
  errorCode,
  signal,
  signalDescription,
  exitCode,
  isCanceled,
  isGracefullyCanceled,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal
}) => {
  const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay);
  if (timedOut) {
    return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`;
  }
  if (isGracefullyCanceled) {
    if (signal === undefined) {
      return `Command was gracefully canceled with exit code ${exitCode}`;
    }
    return isForcefullyTerminated ? `Command was gracefully canceled${forcefulSuffix}` : `Command was gracefully canceled with ${signal} (${signalDescription})`;
  }
  if (isCanceled) {
    return `Command was canceled${forcefulSuffix}`;
  }
  if (isMaxBuffer) {
    return `${getMaxBufferMessage(originalError, maxBuffer)}${forcefulSuffix}`;
  }
  if (errorCode !== undefined) {
    return `Command failed with ${errorCode}${forcefulSuffix}`;
  }
  if (isForcefullyTerminated) {
    return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`;
  }
  if (signal !== undefined) {
    return `Command was killed with ${signal} (${signalDescription})`;
  }
  if (exitCode !== undefined) {
    return `Command failed with exit code ${exitCode}`;
  }
  return "Command failed";
}, getForcefulSuffix = (isForcefullyTerminated, forceKillAfterDelay) => isForcefullyTerminated ? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds` : "", getOriginalMessage = (originalError, cwd) => {
  if (originalError instanceof DiscardedError) {
    return;
  }
  const originalMessage = isExecaError(originalError) ? originalError.originalMessage : String(originalError?.message ?? originalError);
  const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage, cwd));
  return escapedOriginalMessage === "" ? undefined : escapedOriginalMessage;
}, serializeIpcMessage = (ipcMessage) => typeof ipcMessage === "string" ? ipcMessage : inspect2(ipcMessage), serializeMessagePart = (messagePart) => Array.isArray(messagePart) ? messagePart.map((messageItem) => stripFinalNewline(serializeMessageItem(messageItem))).filter(Boolean).join(`
`) : serializeMessageItem(messagePart), serializeMessageItem = (messageItem) => {
  if (typeof messageItem === "string") {
    return messageItem;
  }
  if (isUint8Array(messageItem)) {
    return uint8ArrayToString(messageItem);
  }
  return "";
};
var init_message = __esm(() => {
  init_strip_final_newline();
  init_uint_array();
  init_cwd();
  init_escape();
  init_max_buffer();
  init_signal();
  init_final_error();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/return/result.js
var makeSuccessResult = ({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options: { cwd },
  startTime
}) => omitUndefinedProperties({
  command,
  escapedCommand,
  cwd,
  durationMs: getDurationMs(startTime),
  failed: false,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isTerminated: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  exitCode: 0,
  stdout: stdio[1],
  stderr: stdio[2],
  all,
  stdio,
  ipcOutput,
  pipedFrom: []
}), makeEarlyError = ({
  error,
  command,
  escapedCommand,
  fileDescriptors,
  options,
  startTime,
  isSync
}) => makeError({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  stdio: Array.from({ length: fileDescriptors.length }),
  ipcOutput: [],
  options,
  isSync
}), makeError = ({
  error: originalError,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode: rawExitCode,
  signal: rawSignal,
  stdio,
  all,
  ipcOutput,
  options: {
    timeoutDuration,
    timeout = timeoutDuration,
    forceKillAfterDelay,
    killSignal,
    cwd,
    maxBuffer
  },
  isSync
}) => {
  const { exitCode, signal, signalDescription } = normalizeExitPayload(rawExitCode, rawSignal);
  const { originalMessage, shortMessage, message } = createMessages({
    stdio,
    all,
    ipcOutput,
    originalError,
    signal,
    signalDescription,
    exitCode,
    escapedCommand,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isMaxBuffer,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal,
    maxBuffer,
    timeout,
    cwd
  });
  const error = getFinalError(originalError, message, isSync);
  Object.assign(error, getErrorProperties({
    error,
    command,
    escapedCommand,
    startTime,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isMaxBuffer,
    isForcefullyTerminated,
    exitCode,
    signal,
    signalDescription,
    stdio,
    all,
    ipcOutput,
    cwd,
    originalMessage,
    shortMessage
  }));
  return error;
}, getErrorProperties = ({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode,
  signal,
  signalDescription,
  stdio,
  all,
  ipcOutput,
  cwd,
  originalMessage,
  shortMessage
}) => omitUndefinedProperties({
  shortMessage,
  originalMessage,
  command,
  escapedCommand,
  cwd,
  durationMs: getDurationMs(startTime),
  failed: true,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isTerminated: signal !== undefined,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode,
  signal,
  signalDescription,
  code: error.cause?.code,
  stdout: stdio[1],
  stderr: stdio[2],
  all,
  stdio,
  ipcOutput,
  pipedFrom: []
}), omitUndefinedProperties = (result) => Object.fromEntries(Object.entries(result).filter(([, value]) => value !== undefined)), normalizeExitPayload = (rawExitCode, rawSignal) => {
  const exitCode = rawExitCode === null ? undefined : rawExitCode;
  const signal = rawSignal === null ? undefined : rawSignal;
  const signalDescription = signal === undefined ? undefined : getSignalDescription(rawSignal);
  return { exitCode, signal, signalDescription };
};
var init_result = __esm(() => {
  init_signal();
  init_duration();
  init_final_error();
  init_message();
});

// node_modules/.bun/parse-ms@4.0.0/node_modules/parse-ms/index.js
function parseNumber(milliseconds) {
  return {
    days: Math.trunc(milliseconds / 86400000),
    hours: Math.trunc(milliseconds / 3600000 % 24),
    minutes: Math.trunc(milliseconds / 60000 % 60),
    seconds: Math.trunc(milliseconds / 1000 % 60),
    milliseconds: Math.trunc(milliseconds % 1000),
    microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1000) % 1000),
    nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1000)
  };
}
function parseBigint(milliseconds) {
  return {
    days: milliseconds / 86400000n,
    hours: milliseconds / 3600000n % 24n,
    minutes: milliseconds / 60000n % 60n,
    seconds: milliseconds / 1000n % 60n,
    milliseconds: milliseconds % 1000n,
    microseconds: 0n,
    nanoseconds: 0n
  };
}
function parseMilliseconds(milliseconds) {
  switch (typeof milliseconds) {
    case "number": {
      if (Number.isFinite(milliseconds)) {
        return parseNumber(milliseconds);
      }
      break;
    }
    case "bigint": {
      return parseBigint(milliseconds);
    }
  }
  throw new TypeError("Expected a finite number or bigint");
}
var toZeroIfInfinity = (value) => Number.isFinite(value) ? value : 0;
var init_parse_ms = () => {};

// node_modules/.bun/pretty-ms@9.3.0/node_modules/pretty-ms/index.js
function prettyMilliseconds(milliseconds, options) {
  const isBigInt = typeof milliseconds === "bigint";
  if (!isBigInt && !Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number or bigint");
  }
  options = { ...options };
  const sign = milliseconds < 0 ? "-" : "";
  milliseconds = milliseconds < 0 ? -milliseconds : milliseconds;
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.unitCount = 1;
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  let result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    if ((result.length === 0 || !options.colonNotation) && isZero(value) && !(options.colonNotation && short === "m")) {
      return;
    }
    valueString ??= String(value);
    if (options.colonNotation) {
      const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      valueString += options.verbose ? " " + pluralize(long, value) : short;
    }
    result.push(valueString);
  };
  const parsed = parseMilliseconds(milliseconds);
  const days = BigInt(parsed.days);
  if (options.hideYearAndDays) {
    add(BigInt(days) * 24n + BigInt(parsed.hours), "hour", "h");
  } else {
    if (options.hideYear) {
      add(days, "day", "d");
    } else {
      add(days / 365n, "year", "y");
      add(days % 365n, "day", "d");
    }
    add(Number(parsed.hours), "hour", "h");
  }
  add(Number(parsed.minutes), "minute", "m");
  if (!options.hideSeconds) {
    if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1000 && !options.subSecondsAsDecimals) {
      const seconds = Number(parsed.seconds);
      const milliseconds2 = Number(parsed.milliseconds);
      const microseconds = Number(parsed.microseconds);
      const nanoseconds = Number(parsed.nanoseconds);
      add(seconds, "second", "s");
      if (options.formatSubMilliseconds) {
        add(milliseconds2, "millisecond", "ms");
        add(microseconds, "microsecond", "\xB5s");
        add(nanoseconds, "nanosecond", "ns");
      } else {
        const millisecondsAndBelow = milliseconds2 + microseconds / 1000 + nanoseconds / 1e6;
        const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
        const roundedMilliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
        const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMilliseconds;
        add(Number.parseFloat(millisecondsString), "millisecond", "ms", millisecondsString);
      }
    } else {
      const seconds = (isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds) / 1000 % 60;
      const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
      const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
      const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
      add(Number.parseFloat(secondsString), "second", "s", secondsString);
    }
  }
  if (result.length === 0) {
    return sign + "0" + (options.verbose ? " milliseconds" : "ms");
  }
  const separator = options.colonNotation ? ":" : " ";
  if (typeof options.unitCount === "number") {
    result = result.slice(0, Math.max(options.unitCount, 1));
  }
  return sign + result.join(separator);
}
var isZero = (value) => value === 0 || value === 0n, pluralize = (word, count2) => count2 === 1 || count2 === 1n ? word : `${word}s`, SECOND_ROUNDING_EPSILON = 0.0000001, ONE_DAY_IN_MILLISECONDS;
var init_pretty_ms = __esm(() => {
  init_parse_ms();
  ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/error.js
var logError = (result, verboseInfo) => {
  if (result.failed) {
    verboseLog({
      type: "error",
      verboseMessage: result.shortMessage,
      verboseInfo,
      result
    });
  }
};
var init_error = __esm(() => {
  init_log();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/complete.js
var logResult = (result, verboseInfo) => {
  if (!isVerbose(verboseInfo)) {
    return;
  }
  logError(result, verboseInfo);
  logDuration(result, verboseInfo);
}, logDuration = (result, verboseInfo) => {
  const verboseMessage = `(done in ${prettyMilliseconds(result.durationMs)})`;
  verboseLog({
    type: "duration",
    verboseMessage,
    verboseInfo,
    result
  });
};
var init_complete = __esm(() => {
  init_pretty_ms();
  init_values();
  init_log();
  init_error();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/return/reject.js
var handleResult = (result, verboseInfo, { reject }) => {
  logResult(result, verboseInfo);
  if (result.failed && reject) {
    throw result;
  }
  return result;
};
var init_reject = __esm(() => {
  init_complete();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/type.js
var getStdioItemType = (value, optionName) => {
  if (isAsyncGenerator(value)) {
    return "asyncGenerator";
  }
  if (isSyncGenerator(value)) {
    return "generator";
  }
  if (isUrl(value)) {
    return "fileUrl";
  }
  if (isFilePathObject(value)) {
    return "filePath";
  }
  if (isWebStream(value)) {
    return "webStream";
  }
  if (isStream(value, { checkOpen: false })) {
    return "native";
  }
  if (isUint8Array(value)) {
    return "uint8Array";
  }
  if (isAsyncIterableObject(value)) {
    return "asyncIterable";
  }
  if (isIterableObject(value)) {
    return "iterable";
  }
  if (isTransformStream(value)) {
    return getTransformStreamType({ transform: value }, optionName);
  }
  if (isTransformOptions(value)) {
    return getTransformObjectType(value, optionName);
  }
  return "native";
}, getTransformObjectType = (value, optionName) => {
  if (isDuplexStream(value.transform, { checkOpen: false })) {
    return getDuplexType(value, optionName);
  }
  if (isTransformStream(value.transform)) {
    return getTransformStreamType(value, optionName);
  }
  return getGeneratorObjectType(value, optionName);
}, getDuplexType = (value, optionName) => {
  validateNonGeneratorType(value, optionName, "Duplex stream");
  return "duplex";
}, getTransformStreamType = (value, optionName) => {
  validateNonGeneratorType(value, optionName, "web TransformStream");
  return "webTransform";
}, validateNonGeneratorType = ({ final, binary, objectMode }, optionName, typeName) => {
  checkUndefinedOption(final, `${optionName}.final`, typeName);
  checkUndefinedOption(binary, `${optionName}.binary`, typeName);
  checkBooleanOption(objectMode, `${optionName}.objectMode`);
}, checkUndefinedOption = (value, optionName, typeName) => {
  if (value !== undefined) {
    throw new TypeError(`The \`${optionName}\` option can only be defined when using a generator, not a ${typeName}.`);
  }
}, getGeneratorObjectType = ({ transform, final, binary, objectMode }, optionName) => {
  if (transform !== undefined && !isGenerator(transform)) {
    throw new TypeError(`The \`${optionName}.transform\` option must be a generator, a Duplex stream or a web TransformStream.`);
  }
  if (isDuplexStream(final, { checkOpen: false })) {
    throw new TypeError(`The \`${optionName}.final\` option must not be a Duplex stream.`);
  }
  if (isTransformStream(final)) {
    throw new TypeError(`The \`${optionName}.final\` option must not be a web TransformStream.`);
  }
  if (final !== undefined && !isGenerator(final)) {
    throw new TypeError(`The \`${optionName}.final\` option must be a generator.`);
  }
  checkBooleanOption(binary, `${optionName}.binary`);
  checkBooleanOption(objectMode, `${optionName}.objectMode`);
  return isAsyncGenerator(transform) || isAsyncGenerator(final) ? "asyncGenerator" : "generator";
}, checkBooleanOption = (value, optionName) => {
  if (value !== undefined && typeof value !== "boolean") {
    throw new TypeError(`The \`${optionName}\` option must use a boolean.`);
  }
}, isGenerator = (value) => isAsyncGenerator(value) || isSyncGenerator(value), isAsyncGenerator = (value) => Object.prototype.toString.call(value) === "[object AsyncGeneratorFunction]", isSyncGenerator = (value) => Object.prototype.toString.call(value) === "[object GeneratorFunction]", isTransformOptions = (value) => isPlainObject(value) && (value.transform !== undefined || value.final !== undefined), isUrl = (value) => Object.prototype.toString.call(value) === "[object URL]", isRegularUrl = (value) => isUrl(value) && value.protocol !== "file:", isFilePathObject = (value) => isPlainObject(value) && Object.keys(value).length > 0 && Object.keys(value).every((key) => FILE_PATH_KEYS.has(key)) && isFilePathString(value.file), FILE_PATH_KEYS, isFilePathString = (file) => typeof file === "string", isUnknownStdioString = (type, value) => type === "native" && typeof value === "string" && !KNOWN_STDIO_STRINGS.has(value), KNOWN_STDIO_STRINGS, isReadableStream2 = (value) => Object.prototype.toString.call(value) === "[object ReadableStream]", isWritableStream2 = (value) => Object.prototype.toString.call(value) === "[object WritableStream]", isWebStream = (value) => isReadableStream2(value) || isWritableStream2(value), isTransformStream = (value) => isReadableStream2(value?.readable) && isWritableStream2(value?.writable), isAsyncIterableObject = (value) => isObject(value) && typeof value[Symbol.asyncIterator] === "function", isIterableObject = (value) => isObject(value) && typeof value[Symbol.iterator] === "function", isObject = (value) => typeof value === "object" && value !== null, TRANSFORM_TYPES, FILE_TYPES, SPECIAL_DUPLICATE_TYPES_SYNC, SPECIAL_DUPLICATE_TYPES, FORBID_DUPLICATE_TYPES, TYPE_TO_MESSAGE;
var init_type = __esm(() => {
  init_is_stream();
  init_is_plain_obj();
  init_uint_array();
  FILE_PATH_KEYS = new Set(["file", "append"]);
  KNOWN_STDIO_STRINGS = new Set(["ipc", "ignore", "inherit", "overlapped", "pipe"]);
  TRANSFORM_TYPES = new Set(["generator", "asyncGenerator", "duplex", "webTransform"]);
  FILE_TYPES = new Set(["fileUrl", "filePath", "fileNumber"]);
  SPECIAL_DUPLICATE_TYPES_SYNC = new Set(["fileUrl", "filePath"]);
  SPECIAL_DUPLICATE_TYPES = new Set([...SPECIAL_DUPLICATE_TYPES_SYNC, "webStream", "nodeStream"]);
  FORBID_DUPLICATE_TYPES = new Set(["webTransform", "duplex"]);
  TYPE_TO_MESSAGE = {
    generator: "a generator",
    asyncGenerator: "an async generator",
    fileUrl: "a file URL",
    filePath: "a file path string",
    fileNumber: "a file descriptor number",
    webStream: "a web stream",
    nodeStream: "a Node.js stream",
    webTransform: "a web TransformStream",
    duplex: "a Duplex stream",
    native: "any value",
    iterable: "an iterable",
    asyncIterable: "an async iterable",
    string: "a string",
    uint8Array: "a Uint8Array"
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/object-mode.js
var getTransformObjectModes = (objectMode, index, newTransforms, direction) => direction === "output" ? getOutputObjectModes(objectMode, index, newTransforms) : getInputObjectModes(objectMode, index, newTransforms), getOutputObjectModes = (objectMode, index, newTransforms) => {
  const writableObjectMode = index !== 0 && newTransforms[index - 1].value.readableObjectMode;
  const readableObjectMode = objectMode ?? writableObjectMode;
  return { writableObjectMode, readableObjectMode };
}, getInputObjectModes = (objectMode, index, newTransforms) => {
  const writableObjectMode = index === 0 ? objectMode === true : newTransforms[index - 1].value.readableObjectMode;
  const readableObjectMode = index !== newTransforms.length - 1 && (objectMode ?? writableObjectMode);
  return { writableObjectMode, readableObjectMode };
}, getFdObjectMode = (stdioItems, direction) => {
  const lastTransform = stdioItems.findLast(({ type }) => TRANSFORM_TYPES.has(type));
  if (lastTransform === undefined) {
    return false;
  }
  return direction === "input" ? lastTransform.value.writableObjectMode : lastTransform.value.readableObjectMode;
};
var init_object_mode = __esm(() => {
  init_type();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/normalize.js
var normalizeTransforms = (stdioItems, optionName, direction, options) => [
  ...stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type)),
  ...getTransforms(stdioItems, optionName, direction, options)
], getTransforms = (stdioItems, optionName, direction, { encoding }) => {
  const transforms = stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type));
  const newTransforms = Array.from({ length: transforms.length });
  for (const [index, stdioItem] of Object.entries(transforms)) {
    newTransforms[index] = normalizeTransform({
      stdioItem,
      index: Number(index),
      newTransforms,
      optionName,
      direction,
      encoding
    });
  }
  return sortTransforms(newTransforms, direction);
}, normalizeTransform = ({ stdioItem, stdioItem: { type }, index, newTransforms, optionName, direction, encoding }) => {
  if (type === "duplex") {
    return normalizeDuplex({ stdioItem, optionName });
  }
  if (type === "webTransform") {
    return normalizeTransformStream({
      stdioItem,
      index,
      newTransforms,
      direction
    });
  }
  return normalizeGenerator({
    stdioItem,
    index,
    newTransforms,
    direction,
    encoding
  });
}, normalizeDuplex = ({
  stdioItem,
  stdioItem: {
    value: {
      transform,
      transform: { writableObjectMode, readableObjectMode },
      objectMode = readableObjectMode
    }
  },
  optionName
}) => {
  if (objectMode && !readableObjectMode) {
    throw new TypeError(`The \`${optionName}.objectMode\` option can only be \`true\` if \`new Duplex({objectMode: true})\` is used.`);
  }
  if (!objectMode && readableObjectMode) {
    throw new TypeError(`The \`${optionName}.objectMode\` option cannot be \`false\` if \`new Duplex({objectMode: true})\` is used.`);
  }
  return {
    ...stdioItem,
    value: { transform, writableObjectMode, readableObjectMode }
  };
}, normalizeTransformStream = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction }) => {
  const { transform, objectMode } = isPlainObject(value) ? value : { transform: value };
  const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
  return {
    ...stdioItem,
    value: { transform, writableObjectMode, readableObjectMode }
  };
}, normalizeGenerator = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction, encoding }) => {
  const {
    transform,
    final,
    binary: binaryOption = false,
    preserveNewlines = false,
    objectMode
  } = isPlainObject(value) ? value : { transform: value };
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
  return {
    ...stdioItem,
    value: {
      transform,
      final,
      binary,
      preserveNewlines,
      writableObjectMode,
      readableObjectMode
    }
  };
}, sortTransforms = (newTransforms, direction) => direction === "input" ? newTransforms.reverse() : newTransforms;
var init_normalize = __esm(() => {
  init_is_plain_obj();
  init_encoding_option();
  init_type();
  init_object_mode();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/direction.js
import process6 from "process";
var getStreamDirection = (stdioItems, fdNumber, optionName) => {
  const directions = stdioItems.map((stdioItem) => getStdioItemDirection(stdioItem, fdNumber));
  if (directions.includes("input") && directions.includes("output")) {
    throw new TypeError(`The \`${optionName}\` option must not be an array of both readable and writable values.`);
  }
  return directions.find(Boolean) ?? DEFAULT_DIRECTION;
}, getStdioItemDirection = ({ type, value }, fdNumber) => KNOWN_DIRECTIONS[fdNumber] ?? guessStreamDirection[type](value), KNOWN_DIRECTIONS, anyDirection = () => {
  return;
}, alwaysInput = () => "input", guessStreamDirection, getStandardStreamDirection = (value) => {
  if ([0, process6.stdin].includes(value)) {
    return "input";
  }
  if ([1, 2, process6.stdout, process6.stderr].includes(value)) {
    return "output";
  }
}, DEFAULT_DIRECTION = "output";
var init_direction = __esm(() => {
  init_is_stream();
  init_type();
  KNOWN_DIRECTIONS = ["input", "output", "output"];
  guessStreamDirection = {
    generator: anyDirection,
    asyncGenerator: anyDirection,
    fileUrl: anyDirection,
    filePath: anyDirection,
    iterable: alwaysInput,
    asyncIterable: alwaysInput,
    uint8Array: alwaysInput,
    webStream: (value) => isWritableStream2(value) ? "output" : "input",
    nodeStream(value) {
      if (!isReadableStream(value, { checkOpen: false })) {
        return "output";
      }
      return isWritableStream(value, { checkOpen: false }) ? undefined : "input";
    },
    webTransform: anyDirection,
    duplex: anyDirection,
    native(value) {
      const standardStreamDirection = getStandardStreamDirection(value);
      if (standardStreamDirection !== undefined) {
        return standardStreamDirection;
      }
      if (isStream(value, { checkOpen: false })) {
        return guessStreamDirection.nodeStream(value);
      }
    }
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/array.js
var normalizeIpcStdioArray = (stdioArray, ipc) => ipc && !stdioArray.includes("ipc") ? [...stdioArray, "ipc"] : stdioArray;
var init_array2 = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/stdio-option.js
var normalizeStdioOption = ({ stdio, ipc, buffer, ...options }, verboseInfo, isSync) => {
  const stdioArray = getStdioArray(stdio, options).map((stdioOption, fdNumber) => addDefaultValue2(stdioOption, fdNumber));
  return isSync ? normalizeStdioSync(stdioArray, buffer, verboseInfo) : normalizeIpcStdioArray(stdioArray, ipc);
}, getStdioArray = (stdio, options) => {
  if (stdio === undefined) {
    return STANDARD_STREAMS_ALIASES.map((alias) => options[alias]);
  }
  if (hasAlias(options)) {
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${STANDARD_STREAMS_ALIASES.map((alias) => `\`${alias}\``).join(", ")}`);
  }
  if (typeof stdio === "string") {
    return [stdio, stdio, stdio];
  }
  if (!Array.isArray(stdio)) {
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
  }
  const length = Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length);
  return Array.from({ length }, (_, fdNumber) => stdio[fdNumber]);
}, hasAlias = (options) => STANDARD_STREAMS_ALIASES.some((alias) => options[alias] !== undefined), addDefaultValue2 = (stdioOption, fdNumber) => {
  if (Array.isArray(stdioOption)) {
    return stdioOption.map((item) => addDefaultValue2(item, fdNumber));
  }
  if (stdioOption === null || stdioOption === undefined) {
    return fdNumber >= STANDARD_STREAMS_ALIASES.length ? "ignore" : "pipe";
  }
  return stdioOption;
}, normalizeStdioSync = (stdioArray, buffer, verboseInfo) => stdioArray.map((stdioOption, fdNumber) => !buffer[fdNumber] && fdNumber !== 0 && !isFullVerbose(verboseInfo, fdNumber) && isOutputPipeOnly(stdioOption) ? "ignore" : stdioOption), isOutputPipeOnly = (stdioOption) => stdioOption === "pipe" || Array.isArray(stdioOption) && stdioOption.every((item) => item === "pipe");
var init_stdio_option = __esm(() => {
  init_standard_stream();
  init_array2();
  init_values();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/native.js
import { readFileSync } from "fs";
import tty2 from "tty";
var handleNativeStream = ({ stdioItem, stdioItem: { type }, isStdioArray, fdNumber, direction, isSync }) => {
  if (!isStdioArray || type !== "native") {
    return stdioItem;
  }
  return isSync ? handleNativeStreamSync({ stdioItem, fdNumber, direction }) : handleNativeStreamAsync({ stdioItem, fdNumber });
}, handleNativeStreamSync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber, direction }) => {
  const targetFd = getTargetFd({
    value,
    optionName,
    fdNumber,
    direction
  });
  if (targetFd !== undefined) {
    return targetFd;
  }
  if (isStream(value, { checkOpen: false })) {
    throw new TypeError(`The \`${optionName}: Stream\` option cannot both be an array and include a stream with synchronous methods.`);
  }
  return stdioItem;
}, getTargetFd = ({ value, optionName, fdNumber, direction }) => {
  const targetFdNumber = getTargetFdNumber(value, fdNumber);
  if (targetFdNumber === undefined) {
    return;
  }
  if (direction === "output") {
    return { type: "fileNumber", value: targetFdNumber, optionName };
  }
  if (tty2.isatty(targetFdNumber)) {
    throw new TypeError(`The \`${optionName}: ${serializeOptionValue(value)}\` option is invalid: it cannot be a TTY with synchronous methods.`);
  }
  return { type: "uint8Array", value: bufferToUint8Array(readFileSync(targetFdNumber)), optionName };
}, getTargetFdNumber = (value, fdNumber) => {
  if (value === "inherit") {
    return fdNumber;
  }
  if (typeof value === "number") {
    return value;
  }
  const standardStreamIndex = STANDARD_STREAMS.indexOf(value);
  if (standardStreamIndex !== -1) {
    return standardStreamIndex;
  }
}, handleNativeStreamAsync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber }) => {
  if (value === "inherit") {
    return { type: "nodeStream", value: getStandardStream(fdNumber, value, optionName), optionName };
  }
  if (typeof value === "number") {
    return { type: "nodeStream", value: getStandardStream(value, value, optionName), optionName };
  }
  if (isStream(value, { checkOpen: false })) {
    return { type: "nodeStream", value, optionName };
  }
  return stdioItem;
}, getStandardStream = (fdNumber, value, optionName) => {
  const standardStream = STANDARD_STREAMS[fdNumber];
  if (standardStream === undefined) {
    throw new TypeError(`The \`${optionName}: ${value}\` option is invalid: no such standard stream.`);
  }
  return standardStream;
};
var init_native = __esm(() => {
  init_is_stream();
  init_standard_stream();
  init_uint_array();
  init_fd_options();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/input-option.js
var handleInputOptions = ({ input, inputFile }, fdNumber) => fdNumber === 0 ? [
  ...handleInputOption(input),
  ...handleInputFileOption(inputFile)
] : [], handleInputOption = (input) => input === undefined ? [] : [{
  type: getInputType(input),
  value: input,
  optionName: "input"
}], getInputType = (input) => {
  if (isReadableStream(input, { checkOpen: false })) {
    return "nodeStream";
  }
  if (typeof input === "string") {
    return "string";
  }
  if (isUint8Array(input)) {
    return "uint8Array";
  }
  throw new Error("The `input` option must be a string, a Uint8Array or a Node.js Readable stream.");
}, handleInputFileOption = (inputFile) => inputFile === undefined ? [] : [{
  ...getInputFileType(inputFile),
  optionName: "inputFile"
}], getInputFileType = (inputFile) => {
  if (isUrl(inputFile)) {
    return { type: "fileUrl", value: inputFile };
  }
  if (isFilePathString(inputFile)) {
    return { type: "filePath", value: { file: inputFile } };
  }
  throw new Error("The `inputFile` option must be a file path string or a file URL.");
};
var init_input_option = __esm(() => {
  init_is_stream();
  init_uint_array();
  init_type();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/duplicate.js
var filterDuplicates = (stdioItems) => stdioItems.filter((stdioItemOne, indexOne) => stdioItems.every((stdioItemTwo, indexTwo) => stdioItemOne.value !== stdioItemTwo.value || indexOne >= indexTwo || stdioItemOne.type === "generator" || stdioItemOne.type === "asyncGenerator")), getDuplicateStream = ({ stdioItem: { type, value, optionName }, direction, fileDescriptors, isSync }) => {
  const otherStdioItems = getOtherStdioItems(fileDescriptors, type);
  if (otherStdioItems.length === 0) {
    return;
  }
  if (isSync) {
    validateDuplicateStreamSync({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
    return;
  }
  if (SPECIAL_DUPLICATE_TYPES.has(type)) {
    return getDuplicateStreamInstance({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
  }
  if (FORBID_DUPLICATE_TYPES.has(type)) {
    validateDuplicateTransform({
      otherStdioItems,
      type,
      value,
      optionName
    });
  }
}, getOtherStdioItems = (fileDescriptors, type) => fileDescriptors.flatMap(({ direction, stdioItems }) => stdioItems.filter((stdioItem) => stdioItem.type === type).map((stdioItem) => ({ ...stdioItem, direction }))), validateDuplicateStreamSync = ({ otherStdioItems, type, value, optionName, direction }) => {
  if (SPECIAL_DUPLICATE_TYPES_SYNC.has(type)) {
    getDuplicateStreamInstance({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
  }
}, getDuplicateStreamInstance = ({ otherStdioItems, type, value, optionName, direction }) => {
  const duplicateStdioItems = otherStdioItems.filter((stdioItem) => hasSameValue(stdioItem, value));
  if (duplicateStdioItems.length === 0) {
    return;
  }
  const differentStdioItem = duplicateStdioItems.find((stdioItem) => stdioItem.direction !== direction);
  throwOnDuplicateStream(differentStdioItem, optionName, type);
  return direction === "output" ? duplicateStdioItems[0].stream : undefined;
}, hasSameValue = ({ type, value }, secondValue) => {
  if (type === "filePath") {
    return value.file === secondValue.file;
  }
  if (type === "fileUrl") {
    return value.href === secondValue.href;
  }
  return value === secondValue;
}, validateDuplicateTransform = ({ otherStdioItems, type, value, optionName }) => {
  const duplicateStdioItem = otherStdioItems.find(({ value: { transform } }) => transform === value.transform);
  throwOnDuplicateStream(duplicateStdioItem, optionName, type);
}, throwOnDuplicateStream = (stdioItem, optionName, type) => {
  if (stdioItem !== undefined) {
    throw new TypeError(`The \`${stdioItem.optionName}\` and \`${optionName}\` options must not target ${TYPE_TO_MESSAGE[type]} that is the same.`);
  }
};
var init_duplicate = __esm(() => {
  init_type();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/handle.js
var handleStdio = (addProperties, options, verboseInfo, isSync) => {
  const stdio = normalizeStdioOption(options, verboseInfo, isSync);
  const initialFileDescriptors = stdio.map((stdioOption, fdNumber) => getFileDescriptor({
    stdioOption,
    fdNumber,
    options,
    isSync
  }));
  const fileDescriptors = getFinalFileDescriptors({
    initialFileDescriptors,
    addProperties,
    options,
    isSync
  });
  options.stdio = fileDescriptors.map(({ stdioItems }) => forwardStdio(stdioItems));
  return fileDescriptors;
}, getFileDescriptor = ({ stdioOption, fdNumber, options, isSync }) => {
  const optionName = getStreamName(fdNumber);
  const { stdioItems: initialStdioItems, isStdioArray } = initializeStdioItems({
    stdioOption,
    fdNumber,
    options,
    optionName
  });
  const direction = getStreamDirection(initialStdioItems, fdNumber, optionName);
  const stdioItems = initialStdioItems.map((stdioItem) => handleNativeStream({
    stdioItem,
    isStdioArray,
    fdNumber,
    direction,
    isSync
  }));
  const normalizedStdioItems = normalizeTransforms(stdioItems, optionName, direction, options);
  const objectMode = getFdObjectMode(normalizedStdioItems, direction);
  validateFileObjectMode(normalizedStdioItems, objectMode);
  return { direction, objectMode, stdioItems: normalizedStdioItems };
}, initializeStdioItems = ({ stdioOption, fdNumber, options, optionName }) => {
  const values = Array.isArray(stdioOption) ? stdioOption : [stdioOption];
  const initialStdioItems = [
    ...values.map((value) => initializeStdioItem(value, optionName)),
    ...handleInputOptions(options, fdNumber)
  ];
  const stdioItems = filterDuplicates(initialStdioItems);
  const isStdioArray = stdioItems.length > 1;
  validateStdioArray(stdioItems, isStdioArray, optionName);
  validateStreams(stdioItems);
  return { stdioItems, isStdioArray };
}, initializeStdioItem = (value, optionName) => ({
  type: getStdioItemType(value, optionName),
  value,
  optionName
}), validateStdioArray = (stdioItems, isStdioArray, optionName) => {
  if (stdioItems.length === 0) {
    throw new TypeError(`The \`${optionName}\` option must not be an empty array.`);
  }
  if (!isStdioArray) {
    return;
  }
  for (const { value, optionName: optionName2 } of stdioItems) {
    if (INVALID_STDIO_ARRAY_OPTIONS.has(value)) {
      throw new Error(`The \`${optionName2}\` option must not include \`${value}\`.`);
    }
  }
}, INVALID_STDIO_ARRAY_OPTIONS, validateStreams = (stdioItems) => {
  for (const stdioItem of stdioItems) {
    validateFileStdio(stdioItem);
  }
}, validateFileStdio = ({ type, value, optionName }) => {
  if (isRegularUrl(value)) {
    throw new TypeError(`The \`${optionName}: URL\` option must use the \`file:\` scheme.
For example, you can use the \`pathToFileURL()\` method of the \`url\` core module.`);
  }
  if (isUnknownStdioString(type, value)) {
    throw new TypeError(`The \`${optionName}: { file: '...' }\` option must be used instead of \`${optionName}: '...'\`.`);
  }
}, validateFileObjectMode = (stdioItems, objectMode) => {
  if (!objectMode) {
    return;
  }
  const fileStdioItem = stdioItems.find(({ type }) => FILE_TYPES.has(type));
  if (fileStdioItem !== undefined) {
    throw new TypeError(`The \`${fileStdioItem.optionName}\` option cannot use both files and transforms in objectMode.`);
  }
}, getFinalFileDescriptors = ({ initialFileDescriptors, addProperties, options, isSync }) => {
  const fileDescriptors = [];
  try {
    for (const fileDescriptor of initialFileDescriptors) {
      fileDescriptors.push(getFinalFileDescriptor({
        fileDescriptor,
        fileDescriptors,
        addProperties,
        options,
        isSync
      }));
    }
    return fileDescriptors;
  } catch (error) {
    cleanupCustomStreams(fileDescriptors);
    throw error;
  }
}, getFinalFileDescriptor = ({
  fileDescriptor: { direction, objectMode, stdioItems },
  fileDescriptors,
  addProperties,
  options,
  isSync
}) => {
  const finalStdioItems = stdioItems.map((stdioItem) => addStreamProperties({
    stdioItem,
    addProperties,
    direction,
    options,
    fileDescriptors,
    isSync
  }));
  return { direction, objectMode, stdioItems: finalStdioItems };
}, addStreamProperties = ({ stdioItem, addProperties, direction, options, fileDescriptors, isSync }) => {
  const duplicateStream = getDuplicateStream({
    stdioItem,
    direction,
    fileDescriptors,
    isSync
  });
  if (duplicateStream !== undefined) {
    return { ...stdioItem, stream: duplicateStream };
  }
  return {
    ...stdioItem,
    ...addProperties[direction][stdioItem.type](stdioItem, options)
  };
}, cleanupCustomStreams = (fileDescriptors) => {
  for (const { stdioItems } of fileDescriptors) {
    for (const { stream } of stdioItems) {
      if (stream !== undefined && !isStandardStream(stream)) {
        stream.destroy();
      }
    }
  }
}, forwardStdio = (stdioItems) => {
  if (stdioItems.length > 1) {
    return stdioItems.some(({ value: value2 }) => value2 === "overlapped") ? "overlapped" : "pipe";
  }
  const [{ type, value }] = stdioItems;
  return type === "native" ? value : "pipe";
};
var init_handle = __esm(() => {
  init_standard_stream();
  init_normalize();
  init_object_mode();
  init_type();
  init_direction();
  init_stdio_option();
  init_native();
  init_input_option();
  init_duplicate();
  INVALID_STDIO_ARRAY_OPTIONS = new Set(["ignore", "ipc"]);
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/handle-sync.js
import { readFileSync as readFileSync2 } from "fs";
var handleStdioSync = (options, verboseInfo) => handleStdio(addPropertiesSync, options, verboseInfo, true), forbiddenIfSync = ({ type, optionName }) => {
  throwInvalidSyncValue(optionName, TYPE_TO_MESSAGE[type]);
}, forbiddenNativeIfSync = ({ optionName, value }) => {
  if (value === "ipc" || value === "overlapped") {
    throwInvalidSyncValue(optionName, `"${value}"`);
  }
  return {};
}, throwInvalidSyncValue = (optionName, value) => {
  throw new TypeError(`The \`${optionName}\` option cannot be ${value} with synchronous methods.`);
}, addProperties, addPropertiesSync;
var init_handle_sync = __esm(() => {
  init_uint_array();
  init_handle();
  init_type();
  addProperties = {
    generator() {},
    asyncGenerator: forbiddenIfSync,
    webStream: forbiddenIfSync,
    nodeStream: forbiddenIfSync,
    webTransform: forbiddenIfSync,
    duplex: forbiddenIfSync,
    asyncIterable: forbiddenIfSync,
    native: forbiddenNativeIfSync
  };
  addPropertiesSync = {
    input: {
      ...addProperties,
      fileUrl: ({ value }) => ({ contents: [bufferToUint8Array(readFileSync2(value))] }),
      filePath: ({ value: { file } }) => ({ contents: [bufferToUint8Array(readFileSync2(file))] }),
      fileNumber: forbiddenIfSync,
      iterable: ({ value }) => ({ contents: [...value] }),
      string: ({ value }) => ({ contents: [value] }),
      uint8Array: ({ value }) => ({ contents: [value] })
    },
    output: {
      ...addProperties,
      fileUrl: ({ value }) => ({ path: value }),
      filePath: ({ value: { file, append } }) => ({ path: file, append }),
      fileNumber: ({ value }) => ({ path: value }),
      iterable: forbiddenIfSync,
      string: forbiddenIfSync,
      uint8Array: forbiddenIfSync
    }
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/strip-newline.js
var stripNewline = (value, { stripFinalNewline: stripFinalNewline2 }, fdNumber) => getStripFinalNewline(stripFinalNewline2, fdNumber) && value !== undefined && !Array.isArray(value) ? stripFinalNewline(value) : value, getStripFinalNewline = (stripFinalNewline2, fdNumber) => fdNumber === "all" ? stripFinalNewline2[1] || stripFinalNewline2[2] : stripFinalNewline2[fdNumber];
var init_strip_newline = __esm(() => {
  init_strip_final_newline();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/split.js
var getSplitLinesGenerator = (binary, preserveNewlines, skipped, state) => binary || skipped ? undefined : initializeSplitLines(preserveNewlines, state), splitLinesSync = (chunk, preserveNewlines, objectMode) => objectMode ? chunk.flatMap((item) => splitLinesItemSync(item, preserveNewlines)) : splitLinesItemSync(chunk, preserveNewlines), splitLinesItemSync = (chunk, preserveNewlines) => {
  const { transform, final } = initializeSplitLines(preserveNewlines, {});
  return [...transform(chunk), ...final()];
}, initializeSplitLines = (preserveNewlines, state) => {
  state.previousChunks = "";
  return {
    transform: splitGenerator.bind(undefined, state, preserveNewlines),
    final: linesFinal.bind(undefined, state)
  };
}, splitGenerator = function* (state, preserveNewlines, chunk) {
  if (typeof chunk !== "string") {
    yield chunk;
    return;
  }
  let { previousChunks } = state;
  let start = -1;
  for (let end = 0;end < chunk.length; end += 1) {
    if (chunk[end] === `
`) {
      const newlineLength = getNewlineLength(chunk, end, preserveNewlines, state);
      let line = chunk.slice(start + 1, end + 1 - newlineLength);
      if (previousChunks.length > 0) {
        line = concatString(previousChunks, line);
        previousChunks = "";
      }
      yield line;
      start = end;
    }
  }
  if (start !== chunk.length - 1) {
    previousChunks = concatString(previousChunks, chunk.slice(start + 1));
  }
  state.previousChunks = previousChunks;
}, getNewlineLength = (chunk, end, preserveNewlines, state) => {
  if (preserveNewlines) {
    return 0;
  }
  state.isWindowsNewline = end !== 0 && chunk[end - 1] === "\r";
  return state.isWindowsNewline ? 2 : 1;
}, linesFinal = function* ({ previousChunks }) {
  if (previousChunks.length > 0) {
    yield previousChunks;
  }
}, getAppendNewlineGenerator = ({ binary, preserveNewlines, readableObjectMode, state }) => binary || preserveNewlines || readableObjectMode ? undefined : { transform: appendNewlineGenerator.bind(undefined, state) }, appendNewlineGenerator = function* ({ isWindowsNewline = false }, chunk) {
  const { unixNewline, windowsNewline, LF: LF2, concatBytes } = typeof chunk === "string" ? linesStringInfo : linesUint8ArrayInfo;
  if (chunk.at(-1) === LF2) {
    yield chunk;
    return;
  }
  const newline = isWindowsNewline ? windowsNewline : unixNewline;
  yield concatBytes(chunk, newline);
}, concatString = (firstChunk, secondChunk) => `${firstChunk}${secondChunk}`, linesStringInfo, concatUint8Array = (firstChunk, secondChunk) => {
  const chunk = new Uint8Array(firstChunk.length + secondChunk.length);
  chunk.set(firstChunk, 0);
  chunk.set(secondChunk, firstChunk.length);
  return chunk;
}, linesUint8ArrayInfo;
var init_split = __esm(() => {
  linesStringInfo = {
    windowsNewline: `\r
`,
    unixNewline: `
`,
    LF: `
`,
    concatBytes: concatString
  };
  linesUint8ArrayInfo = {
    windowsNewline: new Uint8Array([13, 10]),
    unixNewline: new Uint8Array([10]),
    LF: 10,
    concatBytes: concatUint8Array
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/validate.js
import { Buffer as Buffer2 } from "buffer";
var getValidateTransformInput = (writableObjectMode, optionName) => writableObjectMode ? undefined : validateStringTransformInput.bind(undefined, optionName), validateStringTransformInput = function* (optionName, chunk) {
  if (typeof chunk !== "string" && !isUint8Array(chunk) && !Buffer2.isBuffer(chunk)) {
    throw new TypeError(`The \`${optionName}\` option's transform must use "objectMode: true" to receive as input: ${typeof chunk}.`);
  }
  yield chunk;
}, getValidateTransformReturn = (readableObjectMode, optionName) => readableObjectMode ? validateObjectTransformReturn.bind(undefined, optionName) : validateStringTransformReturn.bind(undefined, optionName), validateObjectTransformReturn = function* (optionName, chunk) {
  validateEmptyReturn(optionName, chunk);
  yield chunk;
}, validateStringTransformReturn = function* (optionName, chunk) {
  validateEmptyReturn(optionName, chunk);
  if (typeof chunk !== "string" && !isUint8Array(chunk)) {
    throw new TypeError(`The \`${optionName}\` option's function must yield a string or an Uint8Array, not ${typeof chunk}.`);
  }
  yield chunk;
}, validateEmptyReturn = (optionName, chunk) => {
  if (chunk === null || chunk === undefined) {
    throw new TypeError(`The \`${optionName}\` option's function must not call \`yield ${chunk}\`.
Instead, \`yield\` should either be called with a value, or not be called at all. For example:
  if (condition) { yield value; }`);
  }
};
var init_validate = __esm(() => {
  init_uint_array();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/encoding-transform.js
import { Buffer as Buffer3 } from "buffer";
import { StringDecoder as StringDecoder2 } from "string_decoder";
var getEncodingTransformGenerator = (binary, encoding, skipped) => {
  if (skipped) {
    return;
  }
  if (binary) {
    return { transform: encodingUint8ArrayGenerator.bind(undefined, new TextEncoder) };
  }
  const stringDecoder = new StringDecoder2(encoding);
  return {
    transform: encodingStringGenerator.bind(undefined, stringDecoder),
    final: encodingStringFinal.bind(undefined, stringDecoder)
  };
}, encodingUint8ArrayGenerator = function* (textEncoder3, chunk) {
  if (Buffer3.isBuffer(chunk)) {
    yield bufferToUint8Array(chunk);
  } else if (typeof chunk === "string") {
    yield textEncoder3.encode(chunk);
  } else {
    yield chunk;
  }
}, encodingStringGenerator = function* (stringDecoder, chunk) {
  yield isUint8Array(chunk) ? stringDecoder.write(chunk) : chunk;
}, encodingStringFinal = function* (stringDecoder) {
  const lastChunk = stringDecoder.end();
  if (lastChunk !== "") {
    yield lastChunk;
  }
};
var init_encoding_transform = __esm(() => {
  init_uint_array();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/run-async.js
import { callbackify } from "util";
var pushChunks, transformChunk = async function* (chunk, generators, index) {
  if (index === generators.length) {
    yield chunk;
    return;
  }
  const { transform = identityGenerator } = generators[index];
  for await (const transformedChunk of transform(chunk)) {
    yield* transformChunk(transformedChunk, generators, index + 1);
  }
}, finalChunks = async function* (generators) {
  for (const [index, { final }] of Object.entries(generators)) {
    yield* generatorFinalChunks(final, Number(index), generators);
  }
}, generatorFinalChunks = async function* (final, index, generators) {
  if (final === undefined) {
    return;
  }
  for await (const finalChunk of final()) {
    yield* transformChunk(finalChunk, generators, index + 1);
  }
}, destroyTransform, identityGenerator = function* (chunk) {
  yield chunk;
};
var init_run_async = __esm(() => {
  pushChunks = callbackify(async (getChunks, state, getChunksArguments, transformStream) => {
    state.currentIterable = getChunks(...getChunksArguments);
    try {
      for await (const chunk of state.currentIterable) {
        transformStream.push(chunk);
      }
    } finally {
      delete state.currentIterable;
    }
  });
  destroyTransform = callbackify(async ({ currentIterable }, error) => {
    if (currentIterable !== undefined) {
      await (error ? currentIterable.throw(error) : currentIterable.return());
      return;
    }
    if (error) {
      throw error;
    }
  });
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/run-sync.js
var pushChunksSync = (getChunksSync, getChunksArguments, transformStream, done) => {
  try {
    for (const chunk of getChunksSync(...getChunksArguments)) {
      transformStream.push(chunk);
    }
    done();
  } catch (error) {
    done(error);
  }
}, runTransformSync = (generators, chunks) => [
  ...chunks.flatMap((chunk) => [...transformChunkSync(chunk, generators, 0)]),
  ...finalChunksSync(generators)
], transformChunkSync = function* (chunk, generators, index) {
  if (index === generators.length) {
    yield chunk;
    return;
  }
  const { transform = identityGenerator2 } = generators[index];
  for (const transformedChunk of transform(chunk)) {
    yield* transformChunkSync(transformedChunk, generators, index + 1);
  }
}, finalChunksSync = function* (generators) {
  for (const [index, { final }] of Object.entries(generators)) {
    yield* generatorFinalChunksSync(final, Number(index), generators);
  }
}, generatorFinalChunksSync = function* (final, index, generators) {
  if (final === undefined) {
    return;
  }
  for (const finalChunk of final()) {
    yield* transformChunkSync(finalChunk, generators, index + 1);
  }
}, identityGenerator2 = function* (chunk) {
  yield chunk;
};
var init_run_sync = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/transform/generator.js
import { Transform, getDefaultHighWaterMark } from "stream";
var generatorToStream = ({
  value,
  value: { transform, final, writableObjectMode, readableObjectMode },
  optionName
}, { encoding }) => {
  const state = {};
  const generators = addInternalGenerators(value, encoding, optionName);
  const transformAsync = isAsyncGenerator(transform);
  const finalAsync = isAsyncGenerator(final);
  const transformMethod = transformAsync ? pushChunks.bind(undefined, transformChunk, state) : pushChunksSync.bind(undefined, transformChunkSync);
  const finalMethod = transformAsync || finalAsync ? pushChunks.bind(undefined, finalChunks, state) : pushChunksSync.bind(undefined, finalChunksSync);
  const destroyMethod = transformAsync || finalAsync ? destroyTransform.bind(undefined, state) : undefined;
  const stream = new Transform({
    writableObjectMode,
    writableHighWaterMark: getDefaultHighWaterMark(writableObjectMode),
    readableObjectMode,
    readableHighWaterMark: getDefaultHighWaterMark(readableObjectMode),
    transform(chunk, encoding2, done) {
      transformMethod([chunk, generators, 0], this, done);
    },
    flush(done) {
      finalMethod([generators], this, done);
    },
    destroy: destroyMethod
  });
  return { stream };
}, runGeneratorsSync = (chunks, stdioItems, encoding, isInput) => {
  const generators = stdioItems.filter(({ type }) => type === "generator");
  const reversedGenerators = isInput ? generators.reverse() : generators;
  for (const { value, optionName } of reversedGenerators) {
    const generators2 = addInternalGenerators(value, encoding, optionName);
    chunks = runTransformSync(generators2, chunks);
  }
  return chunks;
}, addInternalGenerators = ({ transform, final, binary, writableObjectMode, readableObjectMode, preserveNewlines }, encoding, optionName) => {
  const state = {};
  return [
    { transform: getValidateTransformInput(writableObjectMode, optionName) },
    getEncodingTransformGenerator(binary, encoding, writableObjectMode),
    getSplitLinesGenerator(binary, preserveNewlines, writableObjectMode, state),
    { transform, final },
    { transform: getValidateTransformReturn(readableObjectMode, optionName) },
    getAppendNewlineGenerator({
      binary,
      preserveNewlines,
      readableObjectMode,
      state
    })
  ].filter(Boolean);
};
var init_generator = __esm(() => {
  init_type();
  init_split();
  init_validate();
  init_encoding_transform();
  init_run_async();
  init_run_sync();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/input-sync.js
var addInputOptionsSync = (fileDescriptors, options) => {
  for (const fdNumber of getInputFdNumbers(fileDescriptors)) {
    addInputOptionSync(fileDescriptors, fdNumber, options);
  }
}, getInputFdNumbers = (fileDescriptors) => new Set(Object.entries(fileDescriptors).filter(([, { direction }]) => direction === "input").map(([fdNumber]) => Number(fdNumber))), addInputOptionSync = (fileDescriptors, fdNumber, options) => {
  const { stdioItems } = fileDescriptors[fdNumber];
  const allStdioItems = stdioItems.filter(({ contents }) => contents !== undefined);
  if (allStdioItems.length === 0) {
    return;
  }
  if (fdNumber !== 0) {
    const [{ type, optionName }] = allStdioItems;
    throw new TypeError(`Only the \`stdin\` option, not \`${optionName}\`, can be ${TYPE_TO_MESSAGE[type]} with synchronous methods.`);
  }
  const allContents = allStdioItems.map(({ contents }) => contents);
  const transformedContents = allContents.map((contents) => applySingleInputGeneratorsSync(contents, stdioItems));
  options.input = joinToUint8Array(transformedContents);
}, applySingleInputGeneratorsSync = (contents, stdioItems) => {
  const newContents = runGeneratorsSync(contents, stdioItems, "utf8", true);
  validateSerializable(newContents);
  return joinToUint8Array(newContents);
}, validateSerializable = (newContents) => {
  const invalidItem = newContents.find((item) => typeof item !== "string" && !isUint8Array(item));
  if (invalidItem !== undefined) {
    throw new TypeError(`The \`stdin\` option is invalid: when passing objects as input, a transform must be used to serialize them to strings or Uint8Arrays: ${invalidItem}.`);
  }
};
var init_input_sync = __esm(() => {
  init_generator();
  init_uint_array();
  init_type();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/output.js
var shouldLogOutput = ({ stdioItems, encoding, verboseInfo, fdNumber }) => fdNumber !== "all" && isFullVerbose(verboseInfo, fdNumber) && !BINARY_ENCODINGS.has(encoding) && fdUsesVerbose(fdNumber) && (stdioItems.some(({ type, value }) => type === "native" && PIPED_STDIO_VALUES.has(value)) || stdioItems.every(({ type }) => TRANSFORM_TYPES.has(type))), fdUsesVerbose = (fdNumber) => fdNumber === 1 || fdNumber === 2, PIPED_STDIO_VALUES, logLines = async (linesIterable, stream, fdNumber, verboseInfo) => {
  for await (const line of linesIterable) {
    if (!isPipingStream(stream)) {
      logLine(line, fdNumber, verboseInfo);
    }
  }
}, logLinesSync = (linesArray, fdNumber, verboseInfo) => {
  for (const line of linesArray) {
    logLine(line, fdNumber, verboseInfo);
  }
}, isPipingStream = (stream) => stream._readableState.pipes.length > 0, logLine = (line, fdNumber, verboseInfo) => {
  const verboseMessage = serializeVerboseMessage(line);
  verboseLog({
    type: "output",
    verboseMessage,
    fdNumber,
    verboseInfo
  });
};
var init_output = __esm(() => {
  init_encoding_option();
  init_type();
  init_log();
  init_values();
  PIPED_STDIO_VALUES = new Set(["pipe", "overlapped"]);
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/output-sync.js
import { writeFileSync, appendFileSync } from "fs";
var transformOutputSync = ({ fileDescriptors, syncResult: { output }, options, isMaxBuffer, verboseInfo }) => {
  if (output === null) {
    return { output: Array.from({ length: 3 }) };
  }
  const state = {};
  const outputFiles = new Set([]);
  const transformedOutput = output.map((result, fdNumber) => transformOutputResultSync({
    result,
    fileDescriptors,
    fdNumber,
    state,
    outputFiles,
    isMaxBuffer,
    verboseInfo
  }, options));
  return { output: transformedOutput, ...state };
}, transformOutputResultSync = ({ result, fileDescriptors, fdNumber, state, outputFiles, isMaxBuffer, verboseInfo }, { buffer, encoding, lines, stripFinalNewline: stripFinalNewline2, maxBuffer }) => {
  if (result === null) {
    return;
  }
  const truncatedResult = truncateMaxBufferSync(result, isMaxBuffer, maxBuffer);
  const uint8ArrayResult = bufferToUint8Array(truncatedResult);
  const { stdioItems, objectMode } = fileDescriptors[fdNumber];
  const chunks = runOutputGeneratorsSync([uint8ArrayResult], stdioItems, encoding, state);
  const { serializedResult, finalResult = serializedResult } = serializeChunks({
    chunks,
    objectMode,
    encoding,
    lines,
    stripFinalNewline: stripFinalNewline2,
    fdNumber
  });
  logOutputSync({
    serializedResult,
    fdNumber,
    state,
    verboseInfo,
    encoding,
    stdioItems,
    objectMode
  });
  const returnedResult = buffer[fdNumber] ? finalResult : undefined;
  try {
    if (state.error === undefined) {
      writeToFiles(serializedResult, stdioItems, outputFiles);
    }
    return returnedResult;
  } catch (error) {
    state.error = error;
    return returnedResult;
  }
}, runOutputGeneratorsSync = (chunks, stdioItems, encoding, state) => {
  try {
    return runGeneratorsSync(chunks, stdioItems, encoding, false);
  } catch (error) {
    state.error = error;
    return chunks;
  }
}, serializeChunks = ({ chunks, objectMode, encoding, lines, stripFinalNewline: stripFinalNewline2, fdNumber }) => {
  if (objectMode) {
    return { serializedResult: chunks };
  }
  if (encoding === "buffer") {
    return { serializedResult: joinToUint8Array(chunks) };
  }
  const serializedResult = joinToString(chunks, encoding);
  if (lines[fdNumber]) {
    return { serializedResult, finalResult: splitLinesSync(serializedResult, !stripFinalNewline2[fdNumber], objectMode) };
  }
  return { serializedResult };
}, logOutputSync = ({ serializedResult, fdNumber, state, verboseInfo, encoding, stdioItems, objectMode }) => {
  if (!shouldLogOutput({
    stdioItems,
    encoding,
    verboseInfo,
    fdNumber
  })) {
    return;
  }
  const linesArray = splitLinesSync(serializedResult, false, objectMode);
  try {
    logLinesSync(linesArray, fdNumber, verboseInfo);
  } catch (error) {
    state.error ??= error;
  }
}, writeToFiles = (serializedResult, stdioItems, outputFiles) => {
  for (const { path: path6, append } of stdioItems.filter(({ type }) => FILE_TYPES.has(type))) {
    const pathString = typeof path6 === "string" ? path6 : path6.toString();
    if (append || outputFiles.has(pathString)) {
      appendFileSync(path6, serializedResult);
    } else {
      outputFiles.add(pathString);
      writeFileSync(path6, serializedResult);
    }
  }
};
var init_output_sync = __esm(() => {
  init_output();
  init_generator();
  init_split();
  init_uint_array();
  init_type();
  init_max_buffer();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/all-sync.js
var getAllSync = ([, stdout, stderr], options) => {
  if (!options.all) {
    return;
  }
  if (stdout === undefined) {
    return stderr;
  }
  if (stderr === undefined) {
    return stdout;
  }
  if (Array.isArray(stdout)) {
    return Array.isArray(stderr) ? [...stdout, ...stderr] : [...stdout, stripNewline(stderr, options, "all")];
  }
  if (Array.isArray(stderr)) {
    return [stripNewline(stdout, options, "all"), ...stderr];
  }
  if (isUint8Array(stdout) && isUint8Array(stderr)) {
    return concatUint8Arrays([stdout, stderr]);
  }
  return `${stdout}${stderr}`;
};
var init_all_sync = __esm(() => {
  init_uint_array();
  init_strip_newline();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/exit-async.js
import { once as once4 } from "events";
var waitForExit = async (subprocess, context) => {
  const [exitCode, signal] = await waitForExitOrError(subprocess);
  context.isForcefullyTerminated ??= false;
  return [exitCode, signal];
}, waitForExitOrError = async (subprocess) => {
  const [spawnPayload, exitPayload] = await Promise.allSettled([
    once4(subprocess, "spawn"),
    once4(subprocess, "exit")
  ]);
  if (spawnPayload.status === "rejected") {
    return [];
  }
  return exitPayload.status === "rejected" ? waitForSubprocessExit(subprocess) : exitPayload.value;
}, waitForSubprocessExit = async (subprocess) => {
  try {
    return await once4(subprocess, "exit");
  } catch {
    return waitForSubprocessExit(subprocess);
  }
}, waitForSuccessfulExit = async (exitPromise) => {
  const [exitCode, signal] = await exitPromise;
  if (!isSubprocessErrorExit(exitCode, signal) && isFailedExit(exitCode, signal)) {
    throw new DiscardedError;
  }
  return [exitCode, signal];
}, isSubprocessErrorExit = (exitCode, signal) => exitCode === undefined && signal === undefined, isFailedExit = (exitCode, signal) => exitCode !== 0 || signal !== null;
var init_exit_async = __esm(() => {
  init_final_error();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/exit-sync.js
var getExitResultSync = ({ error, status: exitCode, signal, output }, { maxBuffer }) => {
  const resultError = getResultError(error, exitCode, signal);
  const timedOut = resultError?.code === "ETIMEDOUT";
  const isMaxBuffer = isMaxBufferSync(resultError, output, maxBuffer);
  return {
    resultError,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer
  };
}, getResultError = (error, exitCode, signal) => {
  if (error !== undefined) {
    return error;
  }
  return isFailedExit(exitCode, signal) ? new DiscardedError : undefined;
};
var init_exit_sync = __esm(() => {
  init_final_error();
  init_max_buffer();
  init_exit_async();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/main-sync.js
import { spawnSync } from "child_process";
var execaCoreSync = (rawFile, rawArguments, rawOptions) => {
  const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleSyncArguments(rawFile, rawArguments, rawOptions);
  const result = spawnSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    verboseInfo,
    fileDescriptors,
    startTime
  });
  return handleResult(result, verboseInfo, options);
}, handleSyncArguments = (rawFile, rawArguments, rawOptions) => {
  const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
  const syncOptions = normalizeSyncOptions(rawOptions);
  const { file, commandArguments, options } = normalizeOptions(rawFile, rawArguments, syncOptions);
  validateSyncOptions(options);
  const fileDescriptors = handleStdioSync(options, verboseInfo);
  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  };
}, normalizeSyncOptions = (options) => options.node && !options.ipc ? { ...options, ipc: false } : options, validateSyncOptions = ({ ipc, ipcInput, detached, cancelSignal }) => {
  if (ipcInput) {
    throwInvalidSyncOption("ipcInput");
  }
  if (ipc) {
    throwInvalidSyncOption("ipc: true");
  }
  if (detached) {
    throwInvalidSyncOption("detached: true");
  }
  if (cancelSignal) {
    throwInvalidSyncOption("cancelSignal");
  }
}, throwInvalidSyncOption = (value) => {
  throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`);
}, spawnSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, verboseInfo, fileDescriptors, startTime }) => {
  const syncResult = runSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    fileDescriptors,
    startTime
  });
  if (syncResult.failed) {
    return syncResult;
  }
  const { resultError, exitCode, signal, timedOut, isMaxBuffer } = getExitResultSync(syncResult, options);
  const { output, error = resultError } = transformOutputSync({
    fileDescriptors,
    syncResult,
    options,
    isMaxBuffer,
    verboseInfo
  });
  const stdio = output.map((stdioOutput, fdNumber) => stripNewline(stdioOutput, options, fdNumber));
  const all = stripNewline(getAllSync(output, options), options, "all");
  return getSyncResult({
    error,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer,
    stdio,
    all,
    options,
    command,
    escapedCommand,
    startTime
  });
}, runSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, fileDescriptors, startTime }) => {
  try {
    addInputOptionsSync(fileDescriptors, options);
    const normalizedOptions = normalizeSpawnSyncOptions(options);
    return spawnSync(...concatenateShell(file, commandArguments, normalizedOptions));
  } catch (error) {
    return makeEarlyError({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      isSync: true
    });
  }
}, normalizeSpawnSyncOptions = ({ encoding, maxBuffer, ...options }) => ({ ...options, encoding: "buffer", maxBuffer: getMaxBufferSync(maxBuffer) }), getSyncResult = ({ error, exitCode, signal, timedOut, isMaxBuffer, stdio, all, options, command, escapedCommand, startTime }) => error === undefined ? makeSuccessResult({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput: [],
  options,
  startTime
}) : makeError({
  error,
  command,
  escapedCommand,
  timedOut,
  isCanceled: false,
  isGracefullyCanceled: false,
  isMaxBuffer,
  isForcefullyTerminated: false,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput: [],
  options,
  startTime,
  isSync: true
});
var init_main_sync = __esm(() => {
  init_command();
  init_options();
  init_shell();
  init_result();
  init_reject();
  init_handle_sync();
  init_strip_newline();
  init_input_sync();
  init_output_sync();
  init_max_buffer();
  init_all_sync();
  init_exit_sync();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/get-one.js
import { once as once5, on as on2 } from "events";
var getOneMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true, filter } = {}) => {
  validateIpcMethod({
    methodName: "getOneMessage",
    isSubprocess,
    ipc,
    isConnected: isConnected(anyProcess)
  });
  return getOneMessageAsync({
    anyProcess,
    channel,
    isSubprocess,
    filter,
    reference
  });
}, getOneMessageAsync = async ({ anyProcess, channel, isSubprocess, filter, reference }) => {
  addReference(channel, reference);
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const controller = new AbortController;
  try {
    return await Promise.race([
      getMessage(ipcEmitter, filter, controller),
      throwOnDisconnect2(ipcEmitter, isSubprocess, controller),
      throwOnStrictError(ipcEmitter, isSubprocess, controller)
    ]);
  } catch (error) {
    disconnect(anyProcess);
    throw error;
  } finally {
    controller.abort();
    removeReference(channel, reference);
  }
}, getMessage = async (ipcEmitter, filter, { signal }) => {
  if (filter === undefined) {
    const [message] = await once5(ipcEmitter, "message", { signal });
    return message;
  }
  for await (const [message] of on2(ipcEmitter, "message", { signal })) {
    if (filter(message)) {
      return message;
    }
  }
}, throwOnDisconnect2 = async (ipcEmitter, isSubprocess, { signal }) => {
  await once5(ipcEmitter, "disconnect", { signal });
  throwOnEarlyDisconnect(isSubprocess);
}, throwOnStrictError = async (ipcEmitter, isSubprocess, { signal }) => {
  const [error] = await once5(ipcEmitter, "strict:error", { signal });
  throw getStrictResponseError(error, isSubprocess);
};
var init_get_one = __esm(() => {
  init_validation();
  init_forward();
  init_reference();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/get-each.js
import { once as once6, on as on3 } from "events";
var getEachMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true } = {}) => loopOnMessages({
  anyProcess,
  channel,
  isSubprocess,
  ipc,
  shouldAwait: !isSubprocess,
  reference
}), loopOnMessages = ({ anyProcess, channel, isSubprocess, ipc, shouldAwait, reference }) => {
  validateIpcMethod({
    methodName: "getEachMessage",
    isSubprocess,
    ipc,
    isConnected: isConnected(anyProcess)
  });
  addReference(channel, reference);
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const controller = new AbortController;
  const state = {};
  stopOnDisconnect(anyProcess, ipcEmitter, controller);
  abortOnStrictError({
    ipcEmitter,
    isSubprocess,
    controller,
    state
  });
  return iterateOnMessages({
    anyProcess,
    channel,
    ipcEmitter,
    isSubprocess,
    shouldAwait,
    controller,
    state,
    reference
  });
}, stopOnDisconnect = async (anyProcess, ipcEmitter, controller) => {
  try {
    await once6(ipcEmitter, "disconnect", { signal: controller.signal });
    controller.abort();
  } catch {}
}, abortOnStrictError = async ({ ipcEmitter, isSubprocess, controller, state }) => {
  try {
    const [error] = await once6(ipcEmitter, "strict:error", { signal: controller.signal });
    state.error = getStrictResponseError(error, isSubprocess);
    controller.abort();
  } catch {}
}, iterateOnMessages = async function* ({ anyProcess, channel, ipcEmitter, isSubprocess, shouldAwait, controller, state, reference }) {
  try {
    for await (const [message] of on3(ipcEmitter, "message", { signal: controller.signal })) {
      throwIfStrictError(state);
      yield message;
    }
  } catch {
    throwIfStrictError(state);
  } finally {
    controller.abort();
    removeReference(channel, reference);
    if (!isSubprocess) {
      disconnect(anyProcess);
    }
    if (shouldAwait) {
      await anyProcess;
    }
  }
}, throwIfStrictError = ({ error }) => {
  if (error) {
    throw error;
  }
};
var init_get_each = __esm(() => {
  init_validation();
  init_forward();
  init_reference();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/methods.js
import process7 from "process";
var addIpcMethods = (subprocess, { ipc }) => {
  Object.assign(subprocess, getIpcMethods(subprocess, false, ipc));
}, getIpcExport = () => {
  const anyProcess = process7;
  const isSubprocess = true;
  const ipc = process7.channel !== undefined;
  return {
    ...getIpcMethods(anyProcess, isSubprocess, ipc),
    getCancelSignal: getCancelSignal.bind(undefined, {
      anyProcess,
      channel: anyProcess.channel,
      isSubprocess,
      ipc
    })
  };
}, getIpcMethods = (anyProcess, isSubprocess, ipc) => ({
  sendMessage: sendMessage.bind(undefined, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  }),
  getOneMessage: getOneMessage.bind(undefined, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  }),
  getEachMessage: getEachMessage.bind(undefined, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  })
});
var init_methods = __esm(() => {
  init_send();
  init_get_one();
  init_get_each();
  init_graceful();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/return/early-error.js
import { ChildProcess as ChildProcess2 } from "child_process";
import {
  PassThrough,
  Readable,
  Writable,
  Duplex
} from "stream";
var handleEarlyError = ({ error, command, escapedCommand, fileDescriptors, options, startTime, verboseInfo }) => {
  cleanupCustomStreams(fileDescriptors);
  const subprocess = new ChildProcess2;
  createDummyStreams(subprocess, fileDescriptors);
  Object.assign(subprocess, { readable, writable, duplex });
  const earlyError = makeEarlyError({
    error,
    command,
    escapedCommand,
    fileDescriptors,
    options,
    startTime,
    isSync: false
  });
  const promise = handleDummyPromise(earlyError, verboseInfo, options);
  return { subprocess, promise };
}, createDummyStreams = (subprocess, fileDescriptors) => {
  const stdin = createDummyStream();
  const stdout = createDummyStream();
  const stderr = createDummyStream();
  const extraStdio = Array.from({ length: fileDescriptors.length - 3 }, createDummyStream);
  const all = createDummyStream();
  const stdio = [stdin, stdout, stderr, ...extraStdio];
  Object.assign(subprocess, {
    stdin,
    stdout,
    stderr,
    all,
    stdio
  });
}, createDummyStream = () => {
  const stream = new PassThrough;
  stream.end();
  return stream;
}, readable = () => new Readable({ read() {} }), writable = () => new Writable({ write() {} }), duplex = () => new Duplex({ read() {}, write() {} }), handleDummyPromise = async (error, verboseInfo, options) => handleResult(error, verboseInfo, options);
var init_early_error = __esm(() => {
  init_handle();
  init_result();
  init_reject();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/stdio/handle-async.js
import { createReadStream, createWriteStream } from "fs";
import { Buffer as Buffer4 } from "buffer";
import { Readable as Readable2, Writable as Writable2, Duplex as Duplex2 } from "stream";
var handleStdioAsync = (options, verboseInfo) => handleStdio(addPropertiesAsync, options, verboseInfo, false), forbiddenIfAsync = ({ type, optionName }) => {
  throw new TypeError(`The \`${optionName}\` option cannot be ${TYPE_TO_MESSAGE[type]}.`);
}, addProperties2, addPropertiesAsync;
var init_handle_async = __esm(() => {
  init_generator();
  init_handle();
  init_type();
  addProperties2 = {
    fileNumber: forbiddenIfAsync,
    generator: generatorToStream,
    asyncGenerator: generatorToStream,
    nodeStream: ({ value }) => ({ stream: value }),
    webTransform({ value: { transform, writableObjectMode, readableObjectMode } }) {
      const objectMode = writableObjectMode || readableObjectMode;
      const stream = Duplex2.fromWeb(transform, { objectMode });
      return { stream };
    },
    duplex: ({ value: { transform } }) => ({ stream: transform }),
    native() {}
  };
  addPropertiesAsync = {
    input: {
      ...addProperties2,
      fileUrl: ({ value }) => ({ stream: createReadStream(value) }),
      filePath: ({ value: { file } }) => ({ stream: createReadStream(file) }),
      webStream: ({ value }) => ({ stream: Readable2.fromWeb(value) }),
      iterable: ({ value }) => ({ stream: Readable2.from(value) }),
      asyncIterable: ({ value }) => ({ stream: Readable2.from(value) }),
      string: ({ value }) => ({ stream: Readable2.from(value) }),
      uint8Array: ({ value }) => ({ stream: Readable2.from(Buffer4.from(value)) })
    },
    output: {
      ...addProperties2,
      fileUrl: ({ value }) => ({ stream: createWriteStream(value) }),
      filePath: ({ value: { file, append } }) => ({ stream: createWriteStream(file, append ? { flags: "a" } : {}) }),
      webStream: ({ value }) => ({ stream: Writable2.fromWeb(value) }),
      iterable: forbiddenIfAsync,
      asyncIterable: forbiddenIfAsync,
      string: forbiddenIfAsync,
      uint8Array: forbiddenIfAsync
    }
  };
});

// node_modules/.bun/@sindresorhus+merge-streams@4.0.0/node_modules/@sindresorhus/merge-streams/index.js
import { on as on4, once as once7 } from "events";
import { PassThrough as PassThroughStream, getDefaultHighWaterMark as getDefaultHighWaterMark2 } from "stream";
import { finished as finished2 } from "stream/promises";
function mergeStreams(streams) {
  if (!Array.isArray(streams)) {
    throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
  }
  for (const stream of streams) {
    validateStream(stream);
  }
  const objectMode = streams.some(({ readableObjectMode }) => readableObjectMode);
  const highWaterMark = getHighWaterMark(streams, objectMode);
  const passThroughStream = new MergedStream({
    objectMode,
    writableHighWaterMark: highWaterMark,
    readableHighWaterMark: highWaterMark
  });
  for (const stream of streams) {
    passThroughStream.add(stream);
  }
  return passThroughStream;
}
var getHighWaterMark = (streams, objectMode) => {
  if (streams.length === 0) {
    return getDefaultHighWaterMark2(objectMode);
  }
  const highWaterMarks = streams.filter(({ readableObjectMode }) => readableObjectMode === objectMode).map(({ readableHighWaterMark }) => readableHighWaterMark);
  return Math.max(...highWaterMarks);
}, MergedStream, onMergedStreamFinished = async (passThroughStream, streams, unpipeEvent) => {
  updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
  const controller = new AbortController;
  try {
    await Promise.race([
      onMergedStreamEnd(passThroughStream, controller),
      onInputStreamsUnpipe(passThroughStream, streams, unpipeEvent, controller)
    ]);
  } finally {
    controller.abort();
    updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
  }
}, onMergedStreamEnd = async (passThroughStream, { signal }) => {
  try {
    await finished2(passThroughStream, { signal, cleanup: true });
  } catch (error) {
    errorOrAbortStream(passThroughStream, error);
    throw error;
  }
}, onInputStreamsUnpipe = async (passThroughStream, streams, unpipeEvent, { signal }) => {
  for await (const [unpipedStream] of on4(passThroughStream, "unpipe", { signal })) {
    if (streams.has(unpipedStream)) {
      unpipedStream.emit(unpipeEvent);
    }
  }
}, validateStream = (stream) => {
  if (typeof stream?.pipe !== "function") {
    throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
  }
}, endWhenStreamsDone = async ({ passThroughStream, stream, streams, ended, aborted, onFinished, unpipeEvent }) => {
  updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
  const controller = new AbortController;
  try {
    await Promise.race([
      afterMergedStreamFinished(onFinished, stream, controller),
      onInputStreamEnd({
        passThroughStream,
        stream,
        streams,
        ended,
        aborted,
        controller
      }),
      onInputStreamUnpipe({
        stream,
        streams,
        ended,
        aborted,
        unpipeEvent,
        controller
      })
    ]);
  } finally {
    controller.abort();
    updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
  }
  if (streams.size > 0 && streams.size === ended.size + aborted.size) {
    if (ended.size === 0 && aborted.size > 0) {
      abortStream(passThroughStream);
    } else {
      endStream(passThroughStream);
    }
  }
}, afterMergedStreamFinished = async (onFinished, stream, { signal }) => {
  try {
    await onFinished;
    if (!signal.aborted) {
      abortStream(stream);
    }
  } catch (error) {
    if (!signal.aborted) {
      errorOrAbortStream(stream, error);
    }
  }
}, onInputStreamEnd = async ({ passThroughStream, stream, streams, ended, aborted, controller: { signal } }) => {
  try {
    await finished2(stream, {
      signal,
      cleanup: true,
      readable: true,
      writable: false
    });
    if (streams.has(stream)) {
      ended.add(stream);
    }
  } catch (error) {
    if (signal.aborted || !streams.has(stream)) {
      return;
    }
    if (isAbortError(error)) {
      aborted.add(stream);
    } else {
      errorStream(passThroughStream, error);
    }
  }
}, onInputStreamUnpipe = async ({ stream, streams, ended, aborted, unpipeEvent, controller: { signal } }) => {
  await once7(stream, unpipeEvent, { signal });
  if (!stream.readable) {
    return once7(signal, "abort", { signal });
  }
  streams.delete(stream);
  ended.delete(stream);
  aborted.delete(stream);
}, endStream = (stream) => {
  if (stream.writable) {
    stream.end();
  }
}, errorOrAbortStream = (stream, error) => {
  if (isAbortError(error)) {
    abortStream(stream);
  } else {
    errorStream(stream, error);
  }
}, isAbortError = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE", abortStream = (stream) => {
  if (stream.readable || stream.writable) {
    stream.destroy();
  }
}, errorStream = (stream, error) => {
  if (!stream.destroyed) {
    stream.once("error", noop2);
    stream.destroy(error);
  }
}, noop2 = () => {}, updateMaxListeners = (passThroughStream, increment2) => {
  const maxListeners = passThroughStream.getMaxListeners();
  if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
    passThroughStream.setMaxListeners(maxListeners + increment2);
  }
}, PASSTHROUGH_LISTENERS_COUNT = 2, PASSTHROUGH_LISTENERS_PER_STREAM = 1;
var init_merge_streams = __esm(() => {
  MergedStream = class MergedStream extends PassThroughStream {
    #streams = new Set([]);
    #ended = new Set([]);
    #aborted = new Set([]);
    #onFinished;
    #unpipeEvent = Symbol("unpipe");
    #streamPromises = new WeakMap;
    add(stream) {
      validateStream(stream);
      if (this.#streams.has(stream)) {
        return;
      }
      this.#streams.add(stream);
      this.#onFinished ??= onMergedStreamFinished(this, this.#streams, this.#unpipeEvent);
      const streamPromise = endWhenStreamsDone({
        passThroughStream: this,
        stream,
        streams: this.#streams,
        ended: this.#ended,
        aborted: this.#aborted,
        onFinished: this.#onFinished,
        unpipeEvent: this.#unpipeEvent
      });
      this.#streamPromises.set(stream, streamPromise);
      stream.pipe(this, { end: false });
    }
    async remove(stream) {
      validateStream(stream);
      if (!this.#streams.has(stream)) {
        return false;
      }
      const streamPromise = this.#streamPromises.get(stream);
      if (streamPromise === undefined) {
        return false;
      }
      this.#streamPromises.delete(stream);
      stream.unpipe(this);
      await streamPromise;
      return true;
    }
  };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/pipeline.js
import { finished as finished3 } from "stream/promises";
var pipeStreams = (source, destination) => {
  source.pipe(destination);
  onSourceFinish(source, destination);
  onDestinationFinish(source, destination);
}, onSourceFinish = async (source, destination) => {
  if (isStandardStream(source) || isStandardStream(destination)) {
    return;
  }
  try {
    await finished3(source, { cleanup: true, readable: true, writable: false });
  } catch {}
  endDestinationStream(destination);
}, endDestinationStream = (destination) => {
  if (destination.writable) {
    destination.end();
  }
}, onDestinationFinish = async (source, destination) => {
  if (isStandardStream(source) || isStandardStream(destination)) {
    return;
  }
  try {
    await finished3(destination, { cleanup: true, readable: false, writable: true });
  } catch {}
  abortSourceStream(source);
}, abortSourceStream = (source) => {
  if (source.readable) {
    source.destroy();
  }
};
var init_pipeline = __esm(() => {
  init_standard_stream();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/output-async.js
var pipeOutputAsync = (subprocess, fileDescriptors, controller) => {
  const pipeGroups = new Map;
  for (const [fdNumber, { stdioItems, direction }] of Object.entries(fileDescriptors)) {
    for (const { stream } of stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type))) {
      pipeTransform(subprocess, stream, direction, fdNumber);
    }
    for (const { stream } of stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type))) {
      pipeStdioItem({
        subprocess,
        stream,
        direction,
        fdNumber,
        pipeGroups,
        controller
      });
    }
  }
  for (const [outputStream, inputStreams] of pipeGroups.entries()) {
    const inputStream = inputStreams.length === 1 ? inputStreams[0] : mergeStreams(inputStreams);
    pipeStreams(inputStream, outputStream);
  }
}, pipeTransform = (subprocess, stream, direction, fdNumber) => {
  if (direction === "output") {
    pipeStreams(subprocess.stdio[fdNumber], stream);
  } else {
    pipeStreams(stream, subprocess.stdio[fdNumber]);
  }
  const streamProperty = SUBPROCESS_STREAM_PROPERTIES[fdNumber];
  if (streamProperty !== undefined) {
    subprocess[streamProperty] = stream;
  }
  subprocess.stdio[fdNumber] = stream;
}, SUBPROCESS_STREAM_PROPERTIES, pipeStdioItem = ({ subprocess, stream, direction, fdNumber, pipeGroups, controller }) => {
  if (stream === undefined) {
    return;
  }
  setStandardStreamMaxListeners(stream, controller);
  const [inputStream, outputStream] = direction === "output" ? [stream, subprocess.stdio[fdNumber]] : [subprocess.stdio[fdNumber], stream];
  const outputStreams = pipeGroups.get(inputStream) ?? [];
  pipeGroups.set(inputStream, [...outputStreams, outputStream]);
}, setStandardStreamMaxListeners = (stream, { signal }) => {
  if (isStandardStream(stream)) {
    incrementMaxListeners(stream, MAX_LISTENERS_INCREMENT, signal);
  }
}, MAX_LISTENERS_INCREMENT = 2;
var init_output_async = __esm(() => {
  init_merge_streams();
  init_standard_stream();
  init_max_listeners();
  init_type();
  init_pipeline();
  SUBPROCESS_STREAM_PROPERTIES = ["stdin", "stdout", "stderr"];
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/terminate/cleanup.js
import { addAbortListener as addAbortListener2 } from "events";
var cleanupOnExit = (subprocess, { cleanup, detached }, { signal }) => {
  if (!cleanup || detached) {
    return;
  }
  const removeExitHandler = onExit(() => {
    subprocess.kill();
  });
  addAbortListener2(signal, () => {
    removeExitHandler();
  });
};
var init_cleanup = __esm(() => {
  init_mjs();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/pipe/pipe-arguments.js
var normalizePipeArguments = ({ source, sourcePromise, boundOptions, createNested }, ...pipeArguments) => {
  const startTime = getStartTime();
  const {
    destination,
    destinationStream,
    destinationError,
    from,
    unpipeSignal
  } = getDestinationStream(boundOptions, createNested, pipeArguments);
  const { sourceStream, sourceError } = getSourceStream(source, from);
  const { options: sourceOptions, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
  return {
    sourcePromise,
    sourceStream,
    sourceOptions,
    sourceError,
    destination,
    destinationStream,
    destinationError,
    unpipeSignal,
    fileDescriptors,
    startTime
  };
}, getDestinationStream = (boundOptions, createNested, pipeArguments) => {
  try {
    const {
      destination,
      pipeOptions: { from, to, unpipeSignal } = {}
    } = getDestination(boundOptions, createNested, ...pipeArguments);
    const destinationStream = getToStream(destination, to);
    return {
      destination,
      destinationStream,
      from,
      unpipeSignal
    };
  } catch (error) {
    return { destinationError: error };
  }
}, getDestination = (boundOptions, createNested, firstArgument, ...pipeArguments) => {
  if (Array.isArray(firstArgument)) {
    const destination = createNested(mapDestinationArguments, boundOptions)(firstArgument, ...pipeArguments);
    return { destination, pipeOptions: boundOptions };
  }
  if (typeof firstArgument === "string" || firstArgument instanceof URL || isDenoExecPath(firstArgument)) {
    if (Object.keys(boundOptions).length > 0) {
      throw new TypeError('Please use .pipe("file", ..., options) or .pipe(execa("file", ..., options)) instead of .pipe(options)("file", ...).');
    }
    const [rawFile, rawArguments, rawOptions] = normalizeParameters(firstArgument, ...pipeArguments);
    const destination = createNested(mapDestinationArguments)(rawFile, rawArguments, rawOptions);
    return { destination, pipeOptions: rawOptions };
  }
  if (SUBPROCESS_OPTIONS.has(firstArgument)) {
    if (Object.keys(boundOptions).length > 0) {
      throw new TypeError("Please use .pipe(options)`command` or .pipe($(options)`command`) instead of .pipe(options)($`command`).");
    }
    return { destination: firstArgument, pipeOptions: pipeArguments[0] };
  }
  throw new TypeError(`The first argument must be a template string, an options object, or an Execa subprocess: ${firstArgument}`);
}, mapDestinationArguments = ({ options }) => ({ options: { ...options, stdin: "pipe", piped: true } }), getSourceStream = (source, from) => {
  try {
    const sourceStream = getFromStream(source, from);
    return { sourceStream };
  } catch (error) {
    return { sourceError: error };
  }
};
var init_pipe_arguments = __esm(() => {
  init_parameters();
  init_duration();
  init_fd_options();
  init_file_url();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/pipe/throw.js
var handlePipeArgumentsError = ({
  sourceStream,
  sourceError,
  destinationStream,
  destinationError,
  fileDescriptors,
  sourceOptions,
  startTime
}) => {
  const error = getPipeArgumentsError({
    sourceStream,
    sourceError,
    destinationStream,
    destinationError
  });
  if (error !== undefined) {
    throw createNonCommandError({
      error,
      fileDescriptors,
      sourceOptions,
      startTime
    });
  }
}, getPipeArgumentsError = ({ sourceStream, sourceError, destinationStream, destinationError }) => {
  if (sourceError !== undefined && destinationError !== undefined) {
    return destinationError;
  }
  if (destinationError !== undefined) {
    abortSourceStream(sourceStream);
    return destinationError;
  }
  if (sourceError !== undefined) {
    endDestinationStream(destinationStream);
    return sourceError;
  }
}, createNonCommandError = ({ error, fileDescriptors, sourceOptions, startTime }) => makeEarlyError({
  error,
  command: PIPE_COMMAND_MESSAGE,
  escapedCommand: PIPE_COMMAND_MESSAGE,
  fileDescriptors,
  options: sourceOptions,
  startTime,
  isSync: false
}), PIPE_COMMAND_MESSAGE = "source.pipe(destination)";
var init_throw = __esm(() => {
  init_result();
  init_pipeline();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/pipe/sequence.js
var waitForBothSubprocesses = async (subprocessPromises) => {
  const [
    { status: sourceStatus, reason: sourceReason, value: sourceResult = sourceReason },
    { status: destinationStatus, reason: destinationReason, value: destinationResult = destinationReason }
  ] = await subprocessPromises;
  if (!destinationResult.pipedFrom.includes(sourceResult)) {
    destinationResult.pipedFrom.push(sourceResult);
  }
  if (destinationStatus === "rejected") {
    throw destinationResult;
  }
  if (sourceStatus === "rejected") {
    throw sourceResult;
  }
  return destinationResult;
};
var init_sequence = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/pipe/streaming.js
import { finished as finished4 } from "stream/promises";
var pipeSubprocessStream = (sourceStream, destinationStream, maxListenersController) => {
  const mergedStream = MERGED_STREAMS.has(destinationStream) ? pipeMoreSubprocessStream(sourceStream, destinationStream) : pipeFirstSubprocessStream(sourceStream, destinationStream);
  incrementMaxListeners(sourceStream, SOURCE_LISTENERS_PER_PIPE, maxListenersController.signal);
  incrementMaxListeners(destinationStream, DESTINATION_LISTENERS_PER_PIPE, maxListenersController.signal);
  cleanupMergedStreamsMap(destinationStream);
  return mergedStream;
}, pipeFirstSubprocessStream = (sourceStream, destinationStream) => {
  const mergedStream = mergeStreams([sourceStream]);
  pipeStreams(mergedStream, destinationStream);
  MERGED_STREAMS.set(destinationStream, mergedStream);
  return mergedStream;
}, pipeMoreSubprocessStream = (sourceStream, destinationStream) => {
  const mergedStream = MERGED_STREAMS.get(destinationStream);
  mergedStream.add(sourceStream);
  return mergedStream;
}, cleanupMergedStreamsMap = async (destinationStream) => {
  try {
    await finished4(destinationStream, { cleanup: true, readable: false, writable: true });
  } catch {}
  MERGED_STREAMS.delete(destinationStream);
}, MERGED_STREAMS, SOURCE_LISTENERS_PER_PIPE = 2, DESTINATION_LISTENERS_PER_PIPE = 1;
var init_streaming = __esm(() => {
  init_merge_streams();
  init_max_listeners();
  init_pipeline();
  MERGED_STREAMS = new WeakMap;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/pipe/abort.js
import { aborted } from "util";
var unpipeOnAbort = (unpipeSignal, unpipeContext) => unpipeSignal === undefined ? [] : [unpipeOnSignalAbort(unpipeSignal, unpipeContext)], unpipeOnSignalAbort = async (unpipeSignal, { sourceStream, mergedStream, fileDescriptors, sourceOptions, startTime }) => {
  await aborted(unpipeSignal, sourceStream);
  await mergedStream.remove(sourceStream);
  const error = new Error("Pipe canceled by `unpipeSignal` option.");
  throw createNonCommandError({
    error,
    fileDescriptors,
    sourceOptions,
    startTime
  });
};
var init_abort = __esm(() => {
  init_throw();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/pipe/setup.js
var pipeToSubprocess = (sourceInfo, ...pipeArguments) => {
  if (isPlainObject(pipeArguments[0])) {
    return pipeToSubprocess.bind(undefined, {
      ...sourceInfo,
      boundOptions: { ...sourceInfo.boundOptions, ...pipeArguments[0] }
    });
  }
  const { destination, ...normalizedInfo } = normalizePipeArguments(sourceInfo, ...pipeArguments);
  const promise = handlePipePromise({ ...normalizedInfo, destination });
  promise.pipe = pipeToSubprocess.bind(undefined, {
    ...sourceInfo,
    source: destination,
    sourcePromise: promise,
    boundOptions: {}
  });
  return promise;
}, handlePipePromise = async ({
  sourcePromise,
  sourceStream,
  sourceOptions,
  sourceError,
  destination,
  destinationStream,
  destinationError,
  unpipeSignal,
  fileDescriptors,
  startTime
}) => {
  const subprocessPromises = getSubprocessPromises(sourcePromise, destination);
  handlePipeArgumentsError({
    sourceStream,
    sourceError,
    destinationStream,
    destinationError,
    fileDescriptors,
    sourceOptions,
    startTime
  });
  const maxListenersController = new AbortController;
  try {
    const mergedStream = pipeSubprocessStream(sourceStream, destinationStream, maxListenersController);
    return await Promise.race([
      waitForBothSubprocesses(subprocessPromises),
      ...unpipeOnAbort(unpipeSignal, {
        sourceStream,
        mergedStream,
        sourceOptions,
        fileDescriptors,
        startTime
      })
    ]);
  } finally {
    maxListenersController.abort();
  }
}, getSubprocessPromises = (sourcePromise, destination) => Promise.allSettled([sourcePromise, destination]);
var init_setup = __esm(() => {
  init_is_plain_obj();
  init_pipe_arguments();
  init_throw();
  init_sequence();
  init_streaming();
  init_abort();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/iterate.js
import { on as on5 } from "events";
import { getDefaultHighWaterMark as getDefaultHighWaterMark3 } from "stream";
var iterateOnSubprocessStream = ({ subprocessStdout, subprocess, binary, shouldEncode, encoding, preserveNewlines }) => {
  const controller = new AbortController;
  stopReadingOnExit(subprocess, controller);
  return iterateOnStream({
    stream: subprocessStdout,
    controller,
    binary,
    shouldEncode: !subprocessStdout.readableObjectMode && shouldEncode,
    encoding,
    shouldSplit: !subprocessStdout.readableObjectMode,
    preserveNewlines
  });
}, stopReadingOnExit = async (subprocess, controller) => {
  try {
    await subprocess;
  } catch {} finally {
    controller.abort();
  }
}, iterateForResult = ({ stream, onStreamEnd, lines, encoding, stripFinalNewline: stripFinalNewline2, allMixed }) => {
  const controller = new AbortController;
  stopReadingOnStreamEnd(onStreamEnd, controller, stream);
  const objectMode = stream.readableObjectMode && !allMixed;
  return iterateOnStream({
    stream,
    controller,
    binary: encoding === "buffer",
    shouldEncode: !objectMode,
    encoding,
    shouldSplit: !objectMode && lines,
    preserveNewlines: !stripFinalNewline2
  });
}, stopReadingOnStreamEnd = async (onStreamEnd, controller, stream) => {
  try {
    await onStreamEnd;
  } catch {
    stream.destroy();
  } finally {
    controller.abort();
  }
}, iterateOnStream = ({ stream, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => {
  const onStdoutChunk = on5(stream, "data", {
    signal: controller.signal,
    highWaterMark: HIGH_WATER_MARK,
    highWatermark: HIGH_WATER_MARK
  });
  return iterateOnData({
    onStdoutChunk,
    controller,
    binary,
    shouldEncode,
    encoding,
    shouldSplit,
    preserveNewlines
  });
}, DEFAULT_OBJECT_HIGH_WATER_MARK, HIGH_WATER_MARK, iterateOnData = async function* ({ onStdoutChunk, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) {
  const generators = getGenerators({
    binary,
    shouldEncode,
    encoding,
    shouldSplit,
    preserveNewlines
  });
  try {
    for await (const [chunk] of onStdoutChunk) {
      yield* transformChunkSync(chunk, generators, 0);
    }
  } catch (error) {
    if (!controller.signal.aborted) {
      throw error;
    }
  } finally {
    yield* finalChunksSync(generators);
  }
}, getGenerators = ({ binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => [
  getEncodingTransformGenerator(binary, encoding, !shouldEncode),
  getSplitLinesGenerator(binary, preserveNewlines, !shouldSplit, {})
].filter(Boolean);
var init_iterate = __esm(() => {
  init_encoding_transform();
  init_split();
  init_run_sync();
  DEFAULT_OBJECT_HIGH_WATER_MARK = getDefaultHighWaterMark3(true);
  HIGH_WATER_MARK = DEFAULT_OBJECT_HIGH_WATER_MARK;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/io/contents.js
import { setImmediate } from "timers/promises";
var getStreamOutput = async ({ stream, onStreamEnd, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => {
  const logPromise = logOutputAsync({
    stream,
    onStreamEnd,
    fdNumber,
    encoding,
    allMixed,
    verboseInfo,
    streamInfo
  });
  if (!buffer) {
    await Promise.all([resumeStream(stream), logPromise]);
    return;
  }
  const stripFinalNewlineValue = getStripFinalNewline(stripFinalNewline2, fdNumber);
  const iterable = iterateForResult({
    stream,
    onStreamEnd,
    lines,
    encoding,
    stripFinalNewline: stripFinalNewlineValue,
    allMixed
  });
  const [output] = await Promise.all([
    getStreamContents2({
      stream,
      iterable,
      fdNumber,
      encoding,
      maxBuffer,
      lines
    }),
    logPromise
  ]);
  return output;
}, logOutputAsync = async ({ stream, onStreamEnd, fdNumber, encoding, allMixed, verboseInfo, streamInfo: { fileDescriptors } }) => {
  if (!shouldLogOutput({
    stdioItems: fileDescriptors[fdNumber]?.stdioItems,
    encoding,
    verboseInfo,
    fdNumber
  })) {
    return;
  }
  const linesIterable = iterateForResult({
    stream,
    onStreamEnd,
    lines: true,
    encoding,
    stripFinalNewline: true,
    allMixed
  });
  await logLines(linesIterable, stream, fdNumber, verboseInfo);
}, resumeStream = async (stream) => {
  await setImmediate();
  if (stream.readableFlowing === null) {
    stream.resume();
  }
}, getStreamContents2 = async ({ stream, stream: { readableObjectMode }, iterable, fdNumber, encoding, maxBuffer, lines }) => {
  try {
    if (readableObjectMode || lines) {
      return await getStreamAsArray(iterable, { maxBuffer });
    }
    if (encoding === "buffer") {
      return new Uint8Array(await getStreamAsArrayBuffer(iterable, { maxBuffer }));
    }
    return await getStreamAsString(iterable, { maxBuffer });
  } catch (error) {
    return handleBufferedData(handleMaxBuffer({
      error,
      stream,
      readableObjectMode,
      lines,
      encoding,
      fdNumber
    }));
  }
}, getBufferedData = async (streamPromise) => {
  try {
    return await streamPromise;
  } catch (error) {
    return handleBufferedData(error);
  }
}, handleBufferedData = ({ bufferedData }) => isArrayBuffer(bufferedData) ? new Uint8Array(bufferedData) : bufferedData;
var init_contents2 = __esm(() => {
  init_source();
  init_uint_array();
  init_output();
  init_iterate();
  init_max_buffer();
  init_strip_newline();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/wait-stream.js
import { finished as finished5 } from "stream/promises";
var waitForStream = async (stream, fdNumber, streamInfo, { isSameDirection, stopOnExit = false } = {}) => {
  const state = handleStdinDestroy(stream, streamInfo);
  const abortController = new AbortController;
  try {
    await Promise.race([
      ...stopOnExit ? [streamInfo.exitPromise] : [],
      finished5(stream, { cleanup: true, signal: abortController.signal })
    ]);
  } catch (error) {
    if (!state.stdinCleanedUp) {
      handleStreamError(error, fdNumber, streamInfo, isSameDirection);
    }
  } finally {
    abortController.abort();
  }
}, handleStdinDestroy = (stream, { originalStreams: [originalStdin], subprocess }) => {
  const state = { stdinCleanedUp: false };
  if (stream === originalStdin) {
    spyOnStdinDestroy(stream, subprocess, state);
  }
  return state;
}, spyOnStdinDestroy = (subprocessStdin, subprocess, state) => {
  const { _destroy } = subprocessStdin;
  subprocessStdin._destroy = (...destroyArguments) => {
    setStdinCleanedUp(subprocess, state);
    _destroy.call(subprocessStdin, ...destroyArguments);
  };
}, setStdinCleanedUp = ({ exitCode, signalCode }, state) => {
  if (exitCode !== null || signalCode !== null) {
    state.stdinCleanedUp = true;
  }
}, handleStreamError = (error, fdNumber, streamInfo, isSameDirection) => {
  if (!shouldIgnoreStreamError(error, fdNumber, streamInfo, isSameDirection)) {
    throw error;
  }
}, shouldIgnoreStreamError = (error, fdNumber, streamInfo, isSameDirection = true) => {
  if (streamInfo.propagating) {
    return isStreamEpipe(error) || isStreamAbort(error);
  }
  streamInfo.propagating = true;
  return isInputFileDescriptor(streamInfo, fdNumber) === isSameDirection ? isStreamEpipe(error) : isStreamAbort(error);
}, isInputFileDescriptor = ({ fileDescriptors }, fdNumber) => fdNumber !== "all" && fileDescriptors[fdNumber].direction === "input", isStreamAbort = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE", isStreamEpipe = (error) => error?.code === "EPIPE";
var init_wait_stream = () => {};

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/stdio.js
var waitForStdioStreams = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => subprocess.stdio.map((stream, fdNumber) => waitForSubprocessStream({
  stream,
  fdNumber,
  encoding,
  buffer: buffer[fdNumber],
  maxBuffer: maxBuffer[fdNumber],
  lines: lines[fdNumber],
  allMixed: false,
  stripFinalNewline: stripFinalNewline2,
  verboseInfo,
  streamInfo
})), waitForSubprocessStream = async ({ stream, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => {
  if (!stream) {
    return;
  }
  const onStreamEnd = waitForStream(stream, fdNumber, streamInfo);
  if (isInputFileDescriptor(streamInfo, fdNumber)) {
    await onStreamEnd;
    return;
  }
  const [output] = await Promise.all([
    getStreamOutput({
      stream,
      onStreamEnd,
      fdNumber,
      encoding,
      buffer,
      maxBuffer,
      lines,
      allMixed,
      stripFinalNewline: stripFinalNewline2,
      verboseInfo,
      streamInfo
    }),
    onStreamEnd
  ]);
  return output;
};
var init_stdio = __esm(() => {
  init_contents2();
  init_wait_stream();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/all-async.js
var makeAllStream = ({ stdout, stderr }, { all }) => all && (stdout || stderr) ? mergeStreams([stdout, stderr].filter(Boolean)) : undefined, waitForAllStream = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => waitForSubprocessStream({
  ...getAllStream(subprocess, buffer),
  fdNumber: "all",
  encoding,
  maxBuffer: maxBuffer[1] + maxBuffer[2],
  lines: lines[1] || lines[2],
  allMixed: getAllMixed(subprocess),
  stripFinalNewline: stripFinalNewline2,
  verboseInfo,
  streamInfo
}), getAllStream = ({ stdout, stderr, all }, [, bufferStdout, bufferStderr]) => {
  const buffer = bufferStdout || bufferStderr;
  if (!buffer) {
    return { stream: all, buffer };
  }
  if (!bufferStdout) {
    return { stream: stderr, buffer };
  }
  if (!bufferStderr) {
    return { stream: stdout, buffer };
  }
  return { stream: all, buffer };
}, getAllMixed = ({ all, stdout, stderr }) => all && stdout && stderr && stdout.readableObjectMode !== stderr.readableObjectMode;
var init_all_async = __esm(() => {
  init_merge_streams();
  init_stdio();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/verbose/ipc.js
var shouldLogIpc = (verboseInfo) => isFullVerbose(verboseInfo, "ipc"), logIpcOutput = (message, verboseInfo) => {
  const verboseMessage = serializeVerboseMessage(message);
  verboseLog({
    type: "ipc",
    verboseMessage,
    fdNumber: "ipc",
    verboseInfo
  });
};
var init_ipc = __esm(() => {
  init_log();
  init_values();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/ipc/buffer-messages.js
var waitForIpcOutput = async ({
  subprocess,
  buffer: bufferArray,
  maxBuffer: maxBufferArray,
  ipc,
  ipcOutput,
  verboseInfo
}) => {
  if (!ipc) {
    return ipcOutput;
  }
  const isVerbose2 = shouldLogIpc(verboseInfo);
  const buffer = getFdSpecificValue(bufferArray, "ipc");
  const maxBuffer = getFdSpecificValue(maxBufferArray, "ipc");
  for await (const message of loopOnMessages({
    anyProcess: subprocess,
    channel: subprocess.channel,
    isSubprocess: false,
    ipc,
    shouldAwait: false,
    reference: true
  })) {
    if (buffer) {
      checkIpcMaxBuffer(subprocess, ipcOutput, maxBuffer);
      ipcOutput.push(message);
    }
    if (isVerbose2) {
      logIpcOutput(message, verboseInfo);
    }
  }
  return ipcOutput;
}, getBufferedIpcOutput = async (ipcOutputPromise, ipcOutput) => {
  await Promise.allSettled([ipcOutputPromise]);
  return ipcOutput;
};
var init_buffer_messages = __esm(() => {
  init_max_buffer();
  init_ipc();
  init_specific();
  init_get_each();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/resolve/wait-subprocess.js
import { once as once8 } from "events";
var waitForSubprocessResult = async ({
  subprocess,
  options: {
    encoding,
    buffer,
    maxBuffer,
    lines,
    timeoutDuration: timeout,
    cancelSignal,
    gracefulCancel,
    forceKillAfterDelay,
    stripFinalNewline: stripFinalNewline2,
    ipc,
    ipcInput
  },
  context,
  verboseInfo,
  fileDescriptors,
  originalStreams,
  onInternalError,
  controller
}) => {
  const exitPromise = waitForExit(subprocess, context);
  const streamInfo = {
    originalStreams,
    fileDescriptors,
    subprocess,
    exitPromise,
    propagating: false
  };
  const stdioPromises = waitForStdioStreams({
    subprocess,
    encoding,
    buffer,
    maxBuffer,
    lines,
    stripFinalNewline: stripFinalNewline2,
    verboseInfo,
    streamInfo
  });
  const allPromise = waitForAllStream({
    subprocess,
    encoding,
    buffer,
    maxBuffer,
    lines,
    stripFinalNewline: stripFinalNewline2,
    verboseInfo,
    streamInfo
  });
  const ipcOutput = [];
  const ipcOutputPromise = waitForIpcOutput({
    subprocess,
    buffer,
    maxBuffer,
    ipc,
    ipcOutput,
    verboseInfo
  });
  const originalPromises = waitForOriginalStreams(originalStreams, subprocess, streamInfo);
  const customStreamsEndPromises = waitForCustomStreamsEnd(fileDescriptors, streamInfo);
  try {
    return await Promise.race([
      Promise.all([
        {},
        waitForSuccessfulExit(exitPromise),
        Promise.all(stdioPromises),
        allPromise,
        ipcOutputPromise,
        sendIpcInput(subprocess, ipcInput),
        ...originalPromises,
        ...customStreamsEndPromises
      ]),
      onInternalError,
      throwOnSubprocessError(subprocess, controller),
      ...throwOnTimeout(subprocess, timeout, context, controller),
      ...throwOnCancel({
        subprocess,
        cancelSignal,
        gracefulCancel,
        context,
        controller
      }),
      ...throwOnGracefulCancel({
        subprocess,
        cancelSignal,
        gracefulCancel,
        forceKillAfterDelay,
        context,
        controller
      })
    ]);
  } catch (error) {
    context.terminationReason ??= "other";
    return Promise.all([
      { error },
      exitPromise,
      Promise.all(stdioPromises.map((stdioPromise) => getBufferedData(stdioPromise))),
      getBufferedData(allPromise),
      getBufferedIpcOutput(ipcOutputPromise, ipcOutput),
      Promise.allSettled(originalPromises),
      Promise.allSettled(customStreamsEndPromises)
    ]);
  }
}, waitForOriginalStreams = (originalStreams, subprocess, streamInfo) => originalStreams.map((stream, fdNumber) => stream === subprocess.stdio[fdNumber] ? undefined : waitForStream(stream, fdNumber, streamInfo)), waitForCustomStreamsEnd = (fileDescriptors, streamInfo) => fileDescriptors.flatMap(({ stdioItems }, fdNumber) => stdioItems.filter(({ value, stream = value }) => isStream(stream, { checkOpen: false }) && !isStandardStream(stream)).map(({ type, value, stream = value }) => waitForStream(stream, fdNumber, streamInfo, {
  isSameDirection: TRANSFORM_TYPES.has(type),
  stopOnExit: type === "native"
}))), throwOnSubprocessError = async (subprocess, { signal }) => {
  const [error] = await once8(subprocess, "error", { signal });
  throw error;
};
var init_wait_subprocess = __esm(() => {
  init_is_stream();
  init_timeout();
  init_cancel();
  init_graceful2();
  init_standard_stream();
  init_type();
  init_contents2();
  init_buffer_messages();
  init_ipc_input();
  init_all_async();
  init_stdio();
  init_exit_async();
  init_wait_stream();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/concurrent.js
var initializeConcurrentStreams = () => ({
  readableDestroy: new WeakMap,
  writableFinal: new WeakMap,
  writableDestroy: new WeakMap
}), addConcurrentStream = (concurrentStreams, stream, waitName) => {
  const weakMap = concurrentStreams[waitName];
  if (!weakMap.has(stream)) {
    weakMap.set(stream, []);
  }
  const promises = weakMap.get(stream);
  const promise = createDeferred();
  promises.push(promise);
  const resolve = promise.resolve.bind(promise);
  return { resolve, promises };
}, waitForConcurrentStreams = async ({ resolve, promises }, subprocess) => {
  resolve();
  const [isSubprocessExit] = await Promise.race([
    Promise.allSettled([true, subprocess]),
    Promise.all([false, ...promises])
  ]);
  return !isSubprocessExit;
};
var init_concurrent = __esm(() => {
  init_deferred();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/shared.js
import { finished as finished6 } from "stream/promises";
var safeWaitForSubprocessStdin = async (subprocessStdin) => {
  if (subprocessStdin === undefined) {
    return;
  }
  try {
    await waitForSubprocessStdin(subprocessStdin);
  } catch {}
}, safeWaitForSubprocessStdout = async (subprocessStdout) => {
  if (subprocessStdout === undefined) {
    return;
  }
  try {
    await waitForSubprocessStdout(subprocessStdout);
  } catch {}
}, waitForSubprocessStdin = async (subprocessStdin) => {
  await finished6(subprocessStdin, { cleanup: true, readable: false, writable: true });
}, waitForSubprocessStdout = async (subprocessStdout) => {
  await finished6(subprocessStdout, { cleanup: true, readable: true, writable: false });
}, waitForSubprocess = async (subprocess, error) => {
  await subprocess;
  if (error) {
    throw error;
  }
}, destroyOtherStream = (stream, isOpen, error) => {
  if (error && !isStreamAbort(error)) {
    stream.destroy(error);
  } else if (isOpen) {
    stream.destroy();
  }
};
var init_shared = __esm(() => {
  init_wait_stream();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/readable.js
import { Readable as Readable3 } from "stream";
import { callbackify as callbackify2 } from "util";
var createReadable = ({ subprocess, concurrentStreams, encoding }, { from, binary: binaryOption = true, preserveNewlines = true } = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
  const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
  const { read, onStdoutDataDone } = getReadableMethods({
    subprocessStdout,
    subprocess,
    binary,
    encoding,
    preserveNewlines
  });
  const readable2 = new Readable3({
    read,
    destroy: callbackify2(onReadableDestroy.bind(undefined, { subprocessStdout, subprocess, waitReadableDestroy })),
    highWaterMark: readableHighWaterMark,
    objectMode: readableObjectMode,
    encoding: readableEncoding
  });
  onStdoutFinished({
    subprocessStdout,
    onStdoutDataDone,
    readable: readable2,
    subprocess
  });
  return readable2;
}, getSubprocessStdout = (subprocess, from, concurrentStreams) => {
  const subprocessStdout = getFromStream(subprocess, from);
  const waitReadableDestroy = addConcurrentStream(concurrentStreams, subprocessStdout, "readableDestroy");
  return { subprocessStdout, waitReadableDestroy };
}, getReadableOptions = ({ readableEncoding, readableObjectMode, readableHighWaterMark }, binary) => binary ? { readableEncoding, readableObjectMode, readableHighWaterMark } : { readableEncoding, readableObjectMode: true, readableHighWaterMark: DEFAULT_OBJECT_HIGH_WATER_MARK }, getReadableMethods = ({ subprocessStdout, subprocess, binary, encoding, preserveNewlines }) => {
  const onStdoutDataDone = createDeferred();
  const onStdoutData = iterateOnSubprocessStream({
    subprocessStdout,
    subprocess,
    binary,
    shouldEncode: !binary,
    encoding,
    preserveNewlines
  });
  return {
    read() {
      onRead(this, onStdoutData, onStdoutDataDone);
    },
    onStdoutDataDone
  };
}, onRead = async (readable2, onStdoutData, onStdoutDataDone) => {
  try {
    const { value, done } = await onStdoutData.next();
    if (done) {
      onStdoutDataDone.resolve();
    } else {
      readable2.push(value);
    }
  } catch {}
}, onStdoutFinished = async ({ subprocessStdout, onStdoutDataDone, readable: readable2, subprocess, subprocessStdin }) => {
  try {
    await waitForSubprocessStdout(subprocessStdout);
    await subprocess;
    await safeWaitForSubprocessStdin(subprocessStdin);
    await onStdoutDataDone;
    if (readable2.readable) {
      readable2.push(null);
    }
  } catch (error) {
    await safeWaitForSubprocessStdin(subprocessStdin);
    destroyOtherReadable(readable2, error);
  }
}, onReadableDestroy = async ({ subprocessStdout, subprocess, waitReadableDestroy }, error) => {
  if (await waitForConcurrentStreams(waitReadableDestroy, subprocess)) {
    destroyOtherReadable(subprocessStdout, error);
    await waitForSubprocess(subprocess, error);
  }
}, destroyOtherReadable = (stream, error) => {
  destroyOtherStream(stream, stream.readable, error);
};
var init_readable = __esm(() => {
  init_encoding_option();
  init_fd_options();
  init_iterate();
  init_deferred();
  init_concurrent();
  init_shared();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/writable.js
import { Writable as Writable3 } from "stream";
import { callbackify as callbackify3 } from "util";
var createWritable = ({ subprocess, concurrentStreams }, { to } = {}) => {
  const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
  const writable2 = new Writable3({
    ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
    destroy: callbackify3(onWritableDestroy.bind(undefined, {
      subprocessStdin,
      subprocess,
      waitWritableFinal,
      waitWritableDestroy
    })),
    highWaterMark: subprocessStdin.writableHighWaterMark,
    objectMode: subprocessStdin.writableObjectMode
  });
  onStdinFinished(subprocessStdin, writable2);
  return writable2;
}, getSubprocessStdin = (subprocess, to, concurrentStreams) => {
  const subprocessStdin = getToStream(subprocess, to);
  const waitWritableFinal = addConcurrentStream(concurrentStreams, subprocessStdin, "writableFinal");
  const waitWritableDestroy = addConcurrentStream(concurrentStreams, subprocessStdin, "writableDestroy");
  return { subprocessStdin, waitWritableFinal, waitWritableDestroy };
}, getWritableMethods = (subprocessStdin, subprocess, waitWritableFinal) => ({
  write: onWrite.bind(undefined, subprocessStdin),
  final: callbackify3(onWritableFinal.bind(undefined, subprocessStdin, subprocess, waitWritableFinal))
}), onWrite = (subprocessStdin, chunk, encoding, done) => {
  if (subprocessStdin.write(chunk, encoding)) {
    done();
  } else {
    subprocessStdin.once("drain", done);
  }
}, onWritableFinal = async (subprocessStdin, subprocess, waitWritableFinal) => {
  if (await waitForConcurrentStreams(waitWritableFinal, subprocess)) {
    if (subprocessStdin.writable) {
      subprocessStdin.end();
    }
    await subprocess;
  }
}, onStdinFinished = async (subprocessStdin, writable2, subprocessStdout) => {
  try {
    await waitForSubprocessStdin(subprocessStdin);
    if (writable2.writable) {
      writable2.end();
    }
  } catch (error) {
    await safeWaitForSubprocessStdout(subprocessStdout);
    destroyOtherWritable(writable2, error);
  }
}, onWritableDestroy = async ({ subprocessStdin, subprocess, waitWritableFinal, waitWritableDestroy }, error) => {
  await waitForConcurrentStreams(waitWritableFinal, subprocess);
  if (await waitForConcurrentStreams(waitWritableDestroy, subprocess)) {
    destroyOtherWritable(subprocessStdin, error);
    await waitForSubprocess(subprocess, error);
  }
}, destroyOtherWritable = (stream, error) => {
  destroyOtherStream(stream, stream.writable, error);
};
var init_writable = __esm(() => {
  init_fd_options();
  init_concurrent();
  init_shared();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/duplex.js
import { Duplex as Duplex3 } from "stream";
import { callbackify as callbackify4 } from "util";
var createDuplex = ({ subprocess, concurrentStreams, encoding }, { from, to, binary: binaryOption = true, preserveNewlines = true } = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
  const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
  const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
  const { read, onStdoutDataDone } = getReadableMethods({
    subprocessStdout,
    subprocess,
    binary,
    encoding,
    preserveNewlines
  });
  const duplex2 = new Duplex3({
    read,
    ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
    destroy: callbackify4(onDuplexDestroy.bind(undefined, {
      subprocessStdout,
      subprocessStdin,
      subprocess,
      waitReadableDestroy,
      waitWritableFinal,
      waitWritableDestroy
    })),
    readableHighWaterMark,
    writableHighWaterMark: subprocessStdin.writableHighWaterMark,
    readableObjectMode,
    writableObjectMode: subprocessStdin.writableObjectMode,
    encoding: readableEncoding
  });
  onStdoutFinished({
    subprocessStdout,
    onStdoutDataDone,
    readable: duplex2,
    subprocess,
    subprocessStdin
  });
  onStdinFinished(subprocessStdin, duplex2, subprocessStdout);
  return duplex2;
}, onDuplexDestroy = async ({ subprocessStdout, subprocessStdin, subprocess, waitReadableDestroy, waitWritableFinal, waitWritableDestroy }, error) => {
  await Promise.all([
    onReadableDestroy({ subprocessStdout, subprocess, waitReadableDestroy }, error),
    onWritableDestroy({
      subprocessStdin,
      subprocess,
      waitWritableFinal,
      waitWritableDestroy
    }, error)
  ]);
};
var init_duplex = __esm(() => {
  init_encoding_option();
  init_readable();
  init_writable();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/iterable.js
var createIterable = (subprocess, encoding, {
  from,
  binary: binaryOption = false,
  preserveNewlines = false
} = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const subprocessStdout = getFromStream(subprocess, from);
  const onStdoutData = iterateOnSubprocessStream({
    subprocessStdout,
    subprocess,
    binary,
    shouldEncode: true,
    encoding,
    preserveNewlines
  });
  return iterateOnStdoutData(onStdoutData, subprocessStdout, subprocess);
}, iterateOnStdoutData = async function* (onStdoutData, subprocessStdout, subprocess) {
  try {
    yield* onStdoutData;
  } finally {
    if (subprocessStdout.readable) {
      subprocessStdout.destroy();
    }
    await subprocess;
  }
};
var init_iterable = __esm(() => {
  init_encoding_option();
  init_fd_options();
  init_iterate();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/convert/add.js
var addConvertedStreams = (subprocess, { encoding }) => {
  const concurrentStreams = initializeConcurrentStreams();
  subprocess.readable = createReadable.bind(undefined, { subprocess, concurrentStreams, encoding });
  subprocess.writable = createWritable.bind(undefined, { subprocess, concurrentStreams });
  subprocess.duplex = createDuplex.bind(undefined, { subprocess, concurrentStreams, encoding });
  subprocess.iterable = createIterable.bind(undefined, subprocess, encoding);
  subprocess[Symbol.asyncIterator] = createIterable.bind(undefined, subprocess, encoding, {});
};
var init_add = __esm(() => {
  init_concurrent();
  init_readable();
  init_writable();
  init_duplex();
  init_iterable();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/promise.js
var mergePromise = (subprocess, promise) => {
  for (const [property, descriptor] of descriptors) {
    const value = descriptor.value.bind(promise);
    Reflect.defineProperty(subprocess, property, { ...descriptor, value });
  }
}, nativePromisePrototype, descriptors;
var init_promise = __esm(() => {
  nativePromisePrototype = (async () => {})().constructor.prototype;
  descriptors = ["then", "catch", "finally"].map((property) => [
    property,
    Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
  ]);
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/main-async.js
import { setMaxListeners } from "events";
import { spawn } from "child_process";
var execaCoreAsync = (rawFile, rawArguments, rawOptions, createNested) => {
  const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleAsyncArguments(rawFile, rawArguments, rawOptions);
  const { subprocess, promise } = spawnSubprocessAsync({
    file,
    commandArguments,
    options,
    startTime,
    verboseInfo,
    command,
    escapedCommand,
    fileDescriptors
  });
  subprocess.pipe = pipeToSubprocess.bind(undefined, {
    source: subprocess,
    sourcePromise: promise,
    boundOptions: {},
    createNested
  });
  mergePromise(subprocess, promise);
  SUBPROCESS_OPTIONS.set(subprocess, { options, fileDescriptors });
  return subprocess;
}, handleAsyncArguments = (rawFile, rawArguments, rawOptions) => {
  const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
  const { file, commandArguments, options: normalizedOptions } = normalizeOptions(rawFile, rawArguments, rawOptions);
  const options = handleAsyncOptions(normalizedOptions);
  const fileDescriptors = handleStdioAsync(options, verboseInfo);
  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  };
}, handleAsyncOptions = ({ timeout, signal, ...options }) => {
  if (signal !== undefined) {
    throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.');
  }
  return { ...options, timeoutDuration: timeout };
}, spawnSubprocessAsync = ({ file, commandArguments, options, startTime, verboseInfo, command, escapedCommand, fileDescriptors }) => {
  let subprocess;
  try {
    subprocess = spawn(...concatenateShell(file, commandArguments, options));
  } catch (error) {
    return handleEarlyError({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      verboseInfo
    });
  }
  const controller = new AbortController;
  setMaxListeners(Number.POSITIVE_INFINITY, controller.signal);
  const originalStreams = [...subprocess.stdio];
  pipeOutputAsync(subprocess, fileDescriptors, controller);
  cleanupOnExit(subprocess, options, controller);
  const context = {};
  const onInternalError = createDeferred();
  subprocess.kill = subprocessKill.bind(undefined, {
    kill: subprocess.kill.bind(subprocess),
    options,
    onInternalError,
    context,
    controller
  });
  subprocess.all = makeAllStream(subprocess, options);
  addConvertedStreams(subprocess, options);
  addIpcMethods(subprocess, options);
  const promise = handlePromise({
    subprocess,
    options,
    startTime,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    command,
    escapedCommand,
    context,
    onInternalError,
    controller
  });
  return { subprocess, promise };
}, handlePromise = async ({ subprocess, options, startTime, verboseInfo, fileDescriptors, originalStreams, command, escapedCommand, context, onInternalError, controller }) => {
  const [
    errorInfo,
    [exitCode, signal],
    stdioResults,
    allResult,
    ipcOutput
  ] = await waitForSubprocessResult({
    subprocess,
    options,
    context,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    onInternalError,
    controller
  });
  controller.abort();
  onInternalError.resolve();
  const stdio = stdioResults.map((stdioResult, fdNumber) => stripNewline(stdioResult, options, fdNumber));
  const all = stripNewline(allResult, options, "all");
  const result = getAsyncResult({
    errorInfo,
    exitCode,
    signal,
    stdio,
    all,
    ipcOutput,
    context,
    options,
    command,
    escapedCommand,
    startTime
  });
  return handleResult(result, verboseInfo, options);
}, getAsyncResult = ({ errorInfo, exitCode, signal, stdio, all, ipcOutput, context, options, command, escapedCommand, startTime }) => ("error" in errorInfo) ? makeError({
  error: errorInfo.error,
  command,
  escapedCommand,
  timedOut: context.terminationReason === "timeout",
  isCanceled: context.terminationReason === "cancel" || context.terminationReason === "gracefulCancel",
  isGracefullyCanceled: context.terminationReason === "gracefulCancel",
  isMaxBuffer: errorInfo.error instanceof MaxBufferError,
  isForcefullyTerminated: context.isForcefullyTerminated,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput,
  options,
  startTime,
  isSync: false
}) : makeSuccessResult({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options,
  startTime
});
var init_main_async = __esm(() => {
  init_source();
  init_command();
  init_options();
  init_fd_options();
  init_shell();
  init_methods();
  init_result();
  init_reject();
  init_early_error();
  init_handle_async();
  init_strip_newline();
  init_output_async();
  init_kill();
  init_cleanup();
  init_setup();
  init_all_async();
  init_wait_subprocess();
  init_add();
  init_deferred();
  init_promise();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/bind.js
var mergeOptions = (boundOptions, options) => {
  const newOptions = Object.fromEntries(Object.entries(options).map(([optionName, optionValue]) => [
    optionName,
    mergeOption(optionName, boundOptions[optionName], optionValue)
  ]));
  return { ...boundOptions, ...newOptions };
}, mergeOption = (optionName, boundOptionValue, optionValue) => {
  if (DEEP_OPTIONS.has(optionName) && isPlainObject(boundOptionValue) && isPlainObject(optionValue)) {
    return { ...boundOptionValue, ...optionValue };
  }
  return optionValue;
}, DEEP_OPTIONS;
var init_bind = __esm(() => {
  init_is_plain_obj();
  init_specific();
  DEEP_OPTIONS = new Set(["env", ...FD_SPECIFIC_OPTIONS]);
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/create.js
var createExeca = (mapArguments, boundOptions, deepOptions, setBoundExeca) => {
  const createNested = (mapArguments2, boundOptions2, setBoundExeca2) => createExeca(mapArguments2, boundOptions2, deepOptions, setBoundExeca2);
  const boundExeca = (...execaArguments) => callBoundExeca({
    mapArguments,
    deepOptions,
    boundOptions,
    setBoundExeca,
    createNested
  }, ...execaArguments);
  if (setBoundExeca !== undefined) {
    setBoundExeca(boundExeca, createNested, boundOptions);
  }
  return boundExeca;
}, callBoundExeca = ({ mapArguments, deepOptions = {}, boundOptions = {}, setBoundExeca, createNested }, firstArgument, ...nextArguments) => {
  if (isPlainObject(firstArgument)) {
    return createNested(mapArguments, mergeOptions(boundOptions, firstArgument), setBoundExeca);
  }
  const { file, commandArguments, options, isSync } = parseArguments({
    mapArguments,
    firstArgument,
    nextArguments,
    deepOptions,
    boundOptions
  });
  return isSync ? execaCoreSync(file, commandArguments, options) : execaCoreAsync(file, commandArguments, options, createNested);
}, parseArguments = ({ mapArguments, firstArgument, nextArguments, deepOptions, boundOptions }) => {
  const callArguments = isTemplateString(firstArgument) ? parseTemplates(firstArgument, nextArguments) : [firstArgument, ...nextArguments];
  const [initialFile, initialArguments, initialOptions] = normalizeParameters(...callArguments);
  const mergedOptions = mergeOptions(mergeOptions(deepOptions, boundOptions), initialOptions);
  const {
    file = initialFile,
    commandArguments = initialArguments,
    options = mergedOptions,
    isSync = false
  } = mapArguments({ file: initialFile, commandArguments: initialArguments, options: mergedOptions });
  return {
    file,
    commandArguments,
    options,
    isSync
  };
};
var init_create = __esm(() => {
  init_is_plain_obj();
  init_parameters();
  init_template();
  init_main_sync();
  init_main_async();
  init_bind();
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/command.js
var mapCommandAsync = ({ file, commandArguments }) => parseCommand(file, commandArguments), mapCommandSync = ({ file, commandArguments }) => ({ ...parseCommand(file, commandArguments), isSync: true }), parseCommand = (command, unusedArguments) => {
  if (unusedArguments.length > 0) {
    throw new TypeError(`The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`);
  }
  const [file, ...commandArguments] = parseCommandString(command);
  return { file, commandArguments };
}, parseCommandString = (command) => {
  if (typeof command !== "string") {
    throw new TypeError(`The command must be a string: ${String(command)}.`);
  }
  const trimmedCommand = command.trim();
  if (trimmedCommand === "") {
    return [];
  }
  const tokens = [];
  for (const token of trimmedCommand.split(SPACES_REGEXP)) {
    const previousToken = tokens.at(-1);
    if (previousToken && previousToken.endsWith("\\")) {
      tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
    } else {
      tokens.push(token);
    }
  }
  return tokens;
}, SPACES_REGEXP;
var init_command2 = __esm(() => {
  SPACES_REGEXP = / +/g;
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/lib/methods/script.js
var setScriptSync = (boundExeca, createNested, boundOptions) => {
  boundExeca.sync = createNested(mapScriptSync, boundOptions);
  boundExeca.s = boundExeca.sync;
}, mapScriptAsync = ({ options }) => getScriptOptions(options), mapScriptSync = ({ options }) => ({ ...getScriptOptions(options), isSync: true }), getScriptOptions = (options) => ({ options: { ...getScriptStdinOption(options), ...options } }), getScriptStdinOption = ({ input, inputFile, stdio }) => input === undefined && inputFile === undefined && stdio === undefined ? { stdin: "inherit" } : {}, deepScriptOptions;
var init_script = __esm(() => {
  deepScriptOptions = { preferLocal: true };
});

// node_modules/.bun/execa@9.6.1/node_modules/execa/index.js
var execa, execaSync, execaCommand, execaCommandSync, execaNode, $, sendMessage2, getOneMessage2, getEachMessage2, getCancelSignal2;
var init_execa = __esm(() => {
  init_create();
  init_command2();
  init_node2();
  init_script();
  init_methods();
  execa = createExeca(() => ({}));
  execaSync = createExeca(() => ({ isSync: true }));
  execaCommand = createExeca(mapCommandAsync);
  execaCommandSync = createExeca(mapCommandSync);
  execaNode = createExeca(mapNode);
  $ = createExeca(mapScriptAsync, {}, deepScriptOptions, setScriptSync);
  ({
    sendMessage: sendMessage2,
    getOneMessage: getOneMessage2,
    getEachMessage: getEachMessage2,
    getCancelSignal: getCancelSignal2
  } = getIpcExport());
});

export { require_cross_spawn, execa, execaSync, init_execa };
