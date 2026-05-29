// @bun
import {
  FILE_EDIT_TOOL_NAME,
  FileReadTool,
  createUserMessage,
  hasToolCallsInLastAssistantTurn,
  init_FileReadTool,
  init_constants,
  init_messages1 as init_messages,
  init_postSamplingHooks,
  init_runAgent,
  registerFileReadListener,
  registerPostSamplingHook,
  runAgent
} from "./chunk-ktw919wt.js";
import {
  cloneFileStateCache,
  init_fileStateCache
} from "./chunk-7fht54sw.js";
import {
  init_sequential,
  sequential
} from "./chunk-1ghcng4e.js";
import {
  getFsImplementation,
  init_errors,
  init_fsOperations,
  isFsInaccessible
} from "./chunk-rpbc3b7k.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/MagicDocs/prompts.ts
import { join } from "path";
function getUpdatePromptTemplate() {
  return `IMPORTANT: This message and these instructions are NOT part of the actual user conversation. Do NOT include any references to "documentation updates", "magic docs", or these update instructions in the document content.

Based on the user conversation above (EXCLUDING this documentation update instruction message), update the Magic Doc file to incorporate any NEW learnings, insights, or information that would be valuable to preserve.

The file {{docPath}} has already been read for you. Here are its current contents:
<current_doc_content>
{{docContents}}
</current_doc_content>

Document title: {{docTitle}}
{{customInstructions}}

Your ONLY task is to use the Edit tool to update the documentation file if there is substantial new information to add, then stop. You can make multiple edits (update multiple sections as needed) - make all Edit tool calls in parallel in a single message. If there's nothing substantial to add, simply respond with a brief explanation and do not call any tools.

CRITICAL RULES FOR EDITING:
- Preserve the Magic Doc header exactly as-is: # MAGIC DOC: {{docTitle}}
- If there's an italicized line immediately after the header, preserve it exactly as-is
- Keep the document CURRENT with the latest state of the codebase - this is NOT a changelog or history
- Update information IN-PLACE to reflect the current state - do NOT append historical notes or track changes over time
- Remove or replace outdated information rather than adding "Previously..." or "Updated to..." notes
- Clean up or DELETE sections that are no longer relevant or don't align with the document's purpose
- Fix obvious errors: typos, grammar mistakes, broken formatting, incorrect information, or confusing statements
- Keep the document well organized: use clear headings, logical section order, consistent formatting, and proper nesting

DOCUMENTATION PHILOSOPHY - READ CAREFULLY:
- BE TERSE. High signal only. No filler words or unnecessary elaboration.
- Documentation is for OVERVIEWS, ARCHITECTURE, and ENTRY POINTS - not detailed code walkthroughs
- Do NOT duplicate information that's already obvious from reading the source code
- Do NOT document every function, parameter, or line number reference
- Focus on: WHY things exist, HOW components connect, WHERE to start reading, WHAT patterns are used
- Skip: detailed implementation steps, exhaustive API docs, play-by-play narratives

What TO document:
- High-level architecture and system design
- Non-obvious patterns, conventions, or gotchas
- Key entry points and where to start reading code
- Important design decisions and their rationale
- Critical dependencies or integration points
- References to related files, docs, or code (like a wiki) - help readers navigate to relevant context

What NOT to document:
- Anything obvious from reading the code itself
- Exhaustive lists of files, functions, or parameters
- Step-by-step implementation details
- Low-level code mechanics
- Information already in CLAUDE.md or other project docs

Use the Edit tool with file_path: {{docPath}}

REMEMBER: Only update if there is substantial new information. The Magic Doc header (# MAGIC DOC: {{docTitle}}) must remain unchanged.`;
}
async function loadMagicDocsPrompt() {
  const fs = getFsImplementation();
  const promptPath = join(getClaudeConfigHomeDir(), "magic-docs", "prompt.md");
  try {
    return await fs.readFile(promptPath, { encoding: "utf-8" });
  } catch {
    return getUpdatePromptTemplate();
  }
}
function substituteVariables(template, variables) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => Object.hasOwn(variables, key) ? variables[key] : match);
}
async function buildMagicDocsUpdatePrompt(docContents, docPath, docTitle, instructions) {
  const promptTemplate = await loadMagicDocsPrompt();
  const customInstructions = instructions ? `

DOCUMENT-SPECIFIC UPDATE INSTRUCTIONS:
The document author has provided specific instructions for how this file should be updated. Pay extra attention to these instructions and follow them carefully:

"${instructions}"

These instructions take priority over the general rules below. Make sure your updates align with these specific guidelines.` : "";
  const variables = {
    docContents,
    docPath,
    docTitle,
    customInstructions
  };
  return substituteVariables(promptTemplate, variables);
}
var init_prompts = __esm(() => {
  init_envUtils();
  init_fsOperations();
});

// src/services/MagicDocs/magicDocs.ts
function clearTrackedMagicDocs() {
  trackedMagicDocs.clear();
}
function detectMagicDocHeader(content) {
  const match = content.match(MAGIC_DOC_HEADER_PATTERN);
  if (!match || !match[1]) {
    return null;
  }
  const title = match[1].trim();
  const headerEndIndex = match.index + match[0].length;
  const afterHeader = content.slice(headerEndIndex);
  const nextLineMatch = afterHeader.match(/^\s*\n(?:\s*\n)?(.+?)(?:\n|$)/);
  if (nextLineMatch && nextLineMatch[1]) {
    const nextLine = nextLineMatch[1];
    const italicsMatch = nextLine.match(ITALICS_PATTERN);
    if (italicsMatch && italicsMatch[1]) {
      const instructions = italicsMatch[1].trim();
      return {
        title,
        instructions
      };
    }
  }
  return { title };
}
function registerMagicDoc(filePath) {
  if (!trackedMagicDocs.has(filePath)) {
    trackedMagicDocs.set(filePath, {
      path: filePath
    });
  }
}
function getMagicDocsAgent() {
  return {
    agentType: "magic-docs",
    whenToUse: "Update Magic Docs",
    tools: [FILE_EDIT_TOOL_NAME],
    model: "sonnet",
    source: "built-in",
    baseDir: "built-in",
    getSystemPrompt: () => ""
  };
}
async function updateMagicDoc(docInfo, context) {
  const { messages, systemPrompt, userContext, systemContext, toolUseContext } = context;
  const clonedReadFileState = cloneFileStateCache(toolUseContext.readFileState);
  clonedReadFileState.delete(docInfo.path);
  const clonedToolUseContext = {
    ...toolUseContext,
    readFileState: clonedReadFileState
  };
  let currentDoc = "";
  try {
    const result = await FileReadTool.call({ file_path: docInfo.path }, clonedToolUseContext);
    const output = result.data;
    if (output.type === "text") {
      currentDoc = output.file.content;
    }
  } catch (e) {
    if (isFsInaccessible(e) || e instanceof Error && e.message.startsWith("File does not exist")) {
      trackedMagicDocs.delete(docInfo.path);
      return;
    }
    throw e;
  }
  const detected = detectMagicDocHeader(currentDoc);
  if (!detected) {
    trackedMagicDocs.delete(docInfo.path);
    return;
  }
  const userPrompt = await buildMagicDocsUpdatePrompt(currentDoc, docInfo.path, detected.title, detected.instructions);
  const canUseTool = async (tool, input) => {
    if (tool.name === FILE_EDIT_TOOL_NAME && typeof input === "object" && input !== null && "file_path" in input) {
      const filePath = input.file_path;
      if (typeof filePath === "string" && filePath === docInfo.path) {
        return { behavior: "allow", updatedInput: input };
      }
    }
    return {
      behavior: "deny",
      message: `only ${FILE_EDIT_TOOL_NAME} is allowed for ${docInfo.path}`,
      decisionReason: {
        type: "other",
        reason: `only ${FILE_EDIT_TOOL_NAME} is allowed`
      }
    };
  };
  for await (const _message of runAgent({
    agentDefinition: getMagicDocsAgent(),
    promptMessages: [createUserMessage({ content: userPrompt })],
    toolUseContext: clonedToolUseContext,
    canUseTool,
    isAsync: true,
    forkContextMessages: messages,
    querySource: "magic_docs",
    override: {
      systemPrompt,
      userContext,
      systemContext
    },
    availableTools: clonedToolUseContext.options.tools
  })) {}
}
async function initMagicDocs() {
  if (process.env.USER_TYPE === "ant") {
    registerFileReadListener((filePath, content) => {
      const result = detectMagicDocHeader(content);
      if (result) {
        registerMagicDoc(filePath);
      }
    });
    registerPostSamplingHook(updateMagicDocs);
  }
}
var MAGIC_DOC_HEADER_PATTERN, ITALICS_PATTERN, trackedMagicDocs, updateMagicDocs;
var init_magicDocs = __esm(() => {
  init_runAgent();
  init_constants();
  init_FileReadTool();
  init_errors();
  init_fileStateCache();
  init_postSamplingHooks();
  init_messages();
  init_sequential();
  init_prompts();
  MAGIC_DOC_HEADER_PATTERN = /^#\s*MAGIC\s+DOC:\s*(.+)$/im;
  ITALICS_PATTERN = /^[_*](.+?)[_*]\s*$/m;
  trackedMagicDocs = new Map;
  updateMagicDocs = sequential(async function(context) {
    const { messages, querySource } = context;
    if (querySource !== "repl_main_thread") {
      return;
    }
    const hasToolCalls = hasToolCallsInLastAssistantTurn(messages);
    if (hasToolCalls) {
      return;
    }
    const docCount = trackedMagicDocs.size;
    if (docCount === 0) {
      return;
    }
    for (const docInfo of Array.from(trackedMagicDocs.values())) {
      await updateMagicDoc(docInfo, context);
    }
  });
});

export { clearTrackedMagicDocs, initMagicDocs, init_magicDocs };
