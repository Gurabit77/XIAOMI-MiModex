// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/slashCommandParsing.ts
function parseSlashCommand(input) {
  const trimmedInput = input.trim();
  if (!trimmedInput.startsWith("/")) {
    return null;
  }
  const withoutSlash = trimmedInput.slice(1);
  const words = withoutSlash.split(" ");
  if (!words[0]) {
    return null;
  }
  let commandName = words[0];
  let isMcp = false;
  let argsStartIndex = 1;
  if (words.length > 1 && words[1] === "(MCP)") {
    commandName = commandName + " (MCP)";
    isMcp = true;
    argsStartIndex = 2;
  }
  const args = words.slice(argsStartIndex).join(" ");
  return {
    commandName,
    args,
    isMcp
  };
}
var init_slashCommandParsing = () => {};

export { parseSlashCommand, init_slashCommandParsing };
