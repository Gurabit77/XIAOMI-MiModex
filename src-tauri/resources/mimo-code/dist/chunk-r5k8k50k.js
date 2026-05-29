// @bun
import {
  extractConversationText,
  init_sessionTitle
} from "./chunk-zvknjy2z.js";
import {
  extractTextContent,
  init_claude,
  init_messages1 as init_messages,
  init_systemPromptType,
  queryHaiku
} from "./chunk-ktw919wt.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-pz9t24tq.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/rename/generateSessionName.ts
async function generateSessionName(messages, signal) {
  const conversationText = extractConversationText(messages);
  if (!conversationText) {
    return null;
  }
  try {
    const result = await queryHaiku({
      systemPrompt: asSystemPrompt([
        'Generate a short kebab-case name (2-4 words) that captures the main topic of this conversation. Use lowercase words separated by hyphens. Examples: "fix-login-bug", "add-auth-feature", "refactor-api-client", "debug-test-failures". Return JSON with a "name" field.'
      ]),
      userPrompt: conversationText,
      outputFormat: {
        type: "json_schema",
        schema: {
          type: "object",
          properties: {
            name: { type: "string" }
          },
          required: ["name"],
          additionalProperties: false
        }
      },
      signal,
      options: {
        querySource: "rename_generate_name",
        agents: [],
        isNonInteractiveSession: false,
        hasAppendSystemPrompt: false,
        mcpTools: []
      }
    });
    const content = Array.isArray(result.message.content) ? extractTextContent(result.message.content) : result.message.content;
    const response = safeParseJSON(content);
    if (response && typeof response === "object" && "name" in response && typeof response.name === "string") {
      return response.name;
    }
    return null;
  } catch (error) {
    logForDebugging(`generateSessionName failed: ${errorMessage(error)}`, {
      level: "error"
    });
    return null;
  }
}
var init_generateSessionName = __esm(() => {
  init_claude();
  init_debug();
  init_errors();
  init_json();
  init_messages();
  init_sessionTitle();
  init_systemPromptType();
});

export { generateSessionName, init_generateSessionName };
