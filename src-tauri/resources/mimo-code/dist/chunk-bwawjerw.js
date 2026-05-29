// @bun
import {
  init_analytics
} from "./chunk-f2mhrmww.js";
import {
  init_debug
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/bash/bashParser.ts
var READY, SPECIAL_VARS, DECL_KEYWORDS, SHELL_KEYWORDS, ARITH_RIGHT_ASSOC;
var init_bashParser = __esm(() => {
  READY = Promise.resolve();
  SPECIAL_VARS = new Set(["?", "$", "@", "*", "#", "-", "!", "_"]);
  DECL_KEYWORDS = new Set([
    "export",
    "declare",
    "typeset",
    "readonly",
    "local"
  ]);
  SHELL_KEYWORDS = new Set([
    "if",
    "then",
    "elif",
    "else",
    "fi",
    "while",
    "until",
    "for",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
  ]);
  ARITH_RIGHT_ASSOC = new Set([
    "=",
    "+=",
    "-=",
    "*=",
    "/=",
    "%=",
    "<<=",
    ">>=",
    "&=",
    "^=",
    "|=",
    "**"
  ]);
});

// src/utils/bash/parser.ts
async function ensureInitialized() {
  if (false) {}
}
async function parseCommand(command) {
  if (!command || command.length > MAX_COMMAND_LENGTH)
    return null;
  if (false) {}
  return null;
}
async function parseCommandRaw(command) {
  if (!command || command.length > MAX_COMMAND_LENGTH)
    return null;
  if (false) {}
  return null;
}
function extractCommandArguments(commandNode) {
  if (commandNode.type === "declaration_command") {
    const firstChild = commandNode.children[0];
    return firstChild && DECLARATION_COMMANDS.has(firstChild.text) ? [firstChild.text] : [];
  }
  const args = [];
  let foundCommandName = false;
  for (const child of commandNode.children) {
    if (child.type === "variable_assignment")
      continue;
    if (child.type === "command_name" || !foundCommandName && child.type === "word") {
      foundCommandName = true;
      args.push(child.text);
      continue;
    }
    if (ARGUMENT_TYPES.has(child.type)) {
      args.push(stripQuotes(child.text));
    } else if (SUBSTITUTION_TYPES.has(child.type)) {
      break;
    }
  }
  return args;
}
function stripQuotes(text) {
  return text.length >= 2 && (text[0] === '"' && text.at(-1) === '"' || text[0] === "'" && text.at(-1) === "'") ? text.slice(1, -1) : text;
}
var MAX_COMMAND_LENGTH = 1e4, DECLARATION_COMMANDS, ARGUMENT_TYPES, SUBSTITUTION_TYPES, COMMAND_TYPES, PARSE_ABORTED;
var init_parser = __esm(() => {
  init_analytics();
  init_debug();
  init_bashParser();
  DECLARATION_COMMANDS = new Set([
    "export",
    "declare",
    "typeset",
    "readonly",
    "local",
    "unset",
    "unsetenv"
  ]);
  ARGUMENT_TYPES = new Set(["word", "string", "raw_string", "number"]);
  SUBSTITUTION_TYPES = new Set([
    "command_substitution",
    "process_substitution"
  ]);
  COMMAND_TYPES = new Set(["command", "declaration_command"]);
  PARSE_ABORTED = Symbol("parse-aborted");
});

export { SHELL_KEYWORDS, init_bashParser, ensureInitialized, parseCommand, PARSE_ABORTED, parseCommandRaw, extractCommandArguments, init_parser };
