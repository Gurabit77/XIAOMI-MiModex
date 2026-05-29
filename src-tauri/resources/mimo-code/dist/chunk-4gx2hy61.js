// @bun
import {
  createUserMessage,
  extractTextContent,
  init_forkedAgent,
  init_messages1 as init_messages,
  runForkedAgent
} from "./chunk-ktw919wt.js";
import {
  formatAPIError,
  init_src
} from "./chunk-chmfqs2y.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/sideQuestion.ts
function findBtwTriggerPositions(text) {
  const positions = [];
  const matches = text.matchAll(BTW_PATTERN);
  for (const match of matches) {
    if (match.index !== undefined) {
      positions.push({
        word: match[0],
        start: match.index,
        end: match.index + match[0].length
      });
    }
  }
  return positions;
}
async function runSideQuestion({
  question,
  cacheSafeParams
}) {
  const wrappedQuestion = `<system-reminder>This is a side question from the user. You must answer this question directly in a single response.

IMPORTANT CONTEXT:
- You are a separate, lightweight agent spawned to answer this one question
- The main agent is NOT interrupted - it continues working independently in the background
- You share the conversation context but are a completely separate instance
- Do NOT reference being interrupted or what you were "previously doing" - that framing is incorrect

CRITICAL CONSTRAINTS:
- You have NO tools available - you cannot read files, run commands, search, or take any actions
- This is a one-off response - there will be no follow-up turns
- You can ONLY provide information based on what you already know from the conversation context
- NEVER say things like "Let me try...", "I'll now...", "Let me check...", or promise to take any action
- If you don't know the answer, say so - do not offer to look it up or investigate

Simply answer the question with the information you have.</system-reminder>

${question}`;
  const agentResult = await runForkedAgent({
    promptMessages: [createUserMessage({ content: wrappedQuestion })],
    cacheSafeParams,
    canUseTool: async () => ({
      behavior: "deny",
      message: "Side questions cannot use tools",
      decisionReason: { type: "other", reason: "side_question" }
    }),
    querySource: "side_question",
    forkLabel: "side_question",
    maxTurns: 1,
    skipCacheWrite: true
  });
  return {
    response: extractSideQuestionResponse(agentResult.messages),
    usage: agentResult.totalUsage
  };
}
function extractSideQuestionResponse(messages) {
  const assistantBlocks = messages.flatMap((m) => m.type === "assistant" ? m.message.content : []);
  if (assistantBlocks.length > 0) {
    const text = extractTextContent(assistantBlocks, `

`).trim();
    if (text)
      return text;
    const toolUse = assistantBlocks.find((b) => b.type === "tool_use");
    if (toolUse) {
      const toolName = "name" in toolUse ? toolUse.name : "a tool";
      return `(The model tried to call ${toolName} instead of answering directly. Try rephrasing or ask in the main conversation.)`;
    }
  }
  const apiErr = messages.find((m) => m.type === "system" && ("subtype" in m) && m.subtype === "api_error");
  if (apiErr) {
    return `(API error: ${formatAPIError(apiErr.error)})`;
  }
  return null;
}
var BTW_PATTERN;
var init_sideQuestion = __esm(() => {
  init_src();
  init_forkedAgent();
  init_messages();
  BTW_PATTERN = /^\/btw\b/gi;
});

export { findBtwTriggerPositions, runSideQuestion, init_sideQuestion };
