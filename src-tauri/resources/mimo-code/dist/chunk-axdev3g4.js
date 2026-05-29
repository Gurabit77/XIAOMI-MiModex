// @bun
import {
  exports_operations,
  init_operations
} from "./chunk-q2pkj7sp.js";
import {
  analyzeContextUsage,
  exports_contextCollapse,
  getMessagesAfterCompactBoundary,
  init_analyzeContext,
  init_contextCollapse,
  init_messages1 as init_messages,
  init_microCompact,
  microcompactMessages
} from "./chunk-ktw919wt.js";
import {
  getSourceDisplayName,
  init_constants,
  init_stringUtils,
  plural
} from "./chunk-1ghcng4e.js";
import {
  formatTokens,
  init_format
} from "./chunk-x5hyyhqf.js";
import {
  __esm,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/commands/context/context-noninteractive.ts
async function collectContextData(context) {
  const {
    messages,
    getAppState,
    options: {
      mainLoopModel,
      tools,
      agentDefinitions,
      customSystemPrompt,
      appendSystemPrompt
    }
  } = context;
  let apiView = getMessagesAfterCompactBoundary(messages);
  if (true) {
    const { projectView } = (init_operations(), __toCommonJS(exports_operations));
    apiView = projectView(apiView);
  }
  const { messages: compactedMessages } = await microcompactMessages(apiView);
  const appState = getAppState();
  return analyzeContextUsage(compactedMessages, mainLoopModel, async () => appState.toolPermissionContext, tools, agentDefinitions, undefined, { options: { customSystemPrompt, appendSystemPrompt } }, undefined, apiView);
}
async function call(_args, context) {
  const data = await collectContextData(context);
  return {
    type: "text",
    value: formatContextAsMarkdownTable(data)
  };
}
function formatContextAsMarkdownTable(data) {
  const {
    categories,
    totalTokens,
    rawMaxTokens,
    percentage,
    model,
    memoryFiles,
    mcpTools,
    agents,
    skills,
    messageBreakdown,
    systemTools,
    systemPromptSections
  } = data;
  let output = `## Context Usage

`;
  output += `**Model:** ${model}  
`;
  output += `**Tokens:** ${formatTokens(totalTokens)} / ${formatTokens(rawMaxTokens)} (${percentage}%)
`;
  if (true) {
    const { getStats, isContextCollapseEnabled } = (init_contextCollapse(), __toCommonJS(exports_contextCollapse));
    if (isContextCollapseEnabled()) {
      const s = getStats();
      const { health: h } = s;
      const parts = [];
      if (s.collapsedSpans > 0) {
        parts.push(`${s.collapsedSpans} ${plural(s.collapsedSpans, "span")} summarized (${s.collapsedMessages} messages)`);
      }
      if (s.stagedSpans > 0)
        parts.push(`${s.stagedSpans} staged`);
      const summary = parts.length > 0 ? parts.join(", ") : h.totalSpawns > 0 ? `${h.totalSpawns} ${plural(h.totalSpawns, "spawn")}, nothing staged yet` : "waiting for first trigger";
      output += `**Context strategy:** collapse (${summary})
`;
      if (h.totalErrors > 0) {
        output += `**Collapse errors:** ${h.totalErrors}/${h.totalSpawns} spawns failed`;
        if (h.lastError) {
          output += ` (last: ${h.lastError.slice(0, 80)})`;
        }
        output += `
`;
      } else if (h.emptySpawnWarningEmitted) {
        output += `**Collapse idle:** ${h.totalEmptySpawns} consecutive empty runs
`;
      }
    }
  }
  output += `
`;
  const visibleCategories = categories.filter((cat) => cat.tokens > 0 && cat.name !== "Free space" && cat.name !== "Autocompact buffer");
  if (visibleCategories.length > 0) {
    output += `### Estimated usage by category

`;
    output += `| Category | Tokens | Percentage |
`;
    output += `|----------|--------|------------|
`;
    for (const cat of visibleCategories) {
      const percentDisplay = (cat.tokens / rawMaxTokens * 100).toFixed(1);
      output += `| ${cat.name} | ${formatTokens(cat.tokens)} | ${percentDisplay}% |
`;
    }
    const freeSpaceCategory = categories.find((c) => c.name === "Free space");
    if (freeSpaceCategory && freeSpaceCategory.tokens > 0) {
      const percentDisplay = (freeSpaceCategory.tokens / rawMaxTokens * 100).toFixed(1);
      output += `| Free space | ${formatTokens(freeSpaceCategory.tokens)} | ${percentDisplay}% |
`;
    }
    const autocompactCategory = categories.find((c) => c.name === "Autocompact buffer");
    if (autocompactCategory && autocompactCategory.tokens > 0) {
      const percentDisplay = (autocompactCategory.tokens / rawMaxTokens * 100).toFixed(1);
      output += `| Autocompact buffer | ${formatTokens(autocompactCategory.tokens)} | ${percentDisplay}% |
`;
    }
    output += `
`;
  }
  if (mcpTools.length > 0) {
    output += `### MCP Tools

`;
    output += `| Tool | Server | Tokens |
`;
    output += `|------|--------|--------|
`;
    for (const tool of mcpTools) {
      output += `| ${tool.name} | ${tool.serverName} | ${formatTokens(tool.tokens)} |
`;
    }
    output += `
`;
  }
  if (systemTools && systemTools.length > 0 && process.env.USER_TYPE === "ant") {
    output += `### [ANT-ONLY] System Tools

`;
    output += `| Tool | Tokens |
`;
    output += `|------|--------|
`;
    for (const tool of systemTools) {
      output += `| ${tool.name} | ${formatTokens(tool.tokens)} |
`;
    }
    output += `
`;
  }
  if (systemPromptSections && systemPromptSections.length > 0 && process.env.USER_TYPE === "ant") {
    output += `### [ANT-ONLY] System Prompt Sections

`;
    output += `| Section | Tokens |
`;
    output += `|---------|--------|
`;
    for (const section of systemPromptSections) {
      output += `| ${section.name} | ${formatTokens(section.tokens)} |
`;
    }
    output += `
`;
  }
  if (agents.length > 0) {
    output += `### Custom Agents

`;
    output += `| Agent Type | Source | Tokens |
`;
    output += `|------------|--------|--------|
`;
    for (const agent of agents) {
      let sourceDisplay;
      switch (agent.source) {
        case "projectSettings":
          sourceDisplay = "Project";
          break;
        case "userSettings":
          sourceDisplay = "User";
          break;
        case "localSettings":
          sourceDisplay = "Local";
          break;
        case "flagSettings":
          sourceDisplay = "Flag";
          break;
        case "policySettings":
          sourceDisplay = "Policy";
          break;
        case "plugin":
          sourceDisplay = "Plugin";
          break;
        case "built-in":
          sourceDisplay = "Built-in";
          break;
        default:
          sourceDisplay = String(agent.source);
      }
      output += `| ${agent.agentType} | ${sourceDisplay} | ${formatTokens(agent.tokens)} |
`;
    }
    output += `
`;
  }
  if (memoryFiles.length > 0) {
    output += `### Memory Files

`;
    output += `| Type | Path | Tokens |
`;
    output += `|------|------|--------|
`;
    for (const file of memoryFiles) {
      output += `| ${file.type} | ${file.path} | ${formatTokens(file.tokens)} |
`;
    }
    output += `
`;
  }
  if (skills && skills.tokens > 0 && skills.skillFrontmatter.length > 0) {
    output += `### Skills

`;
    output += `| Skill | Source | Tokens |
`;
    output += `|-------|--------|--------|
`;
    for (const skill of skills.skillFrontmatter) {
      output += `| ${skill.name} | ${getSourceDisplayName(skill.source)} | ${formatTokens(skill.tokens)} |
`;
    }
    output += `
`;
  }
  if (messageBreakdown && process.env.USER_TYPE === "ant") {
    output += `### [ANT-ONLY] Message Breakdown

`;
    output += `| Category | Tokens |
`;
    output += `|----------|--------|
`;
    output += `| Tool calls | ${formatTokens(messageBreakdown.toolCallTokens)} |
`;
    output += `| Tool results | ${formatTokens(messageBreakdown.toolResultTokens)} |
`;
    output += `| Attachments | ${formatTokens(messageBreakdown.attachmentTokens)} |
`;
    output += `| Assistant messages (non-tool) | ${formatTokens(messageBreakdown.assistantMessageTokens)} |
`;
    output += `| User messages (non-tool-result) | ${formatTokens(messageBreakdown.userMessageTokens)} |
`;
    output += `
`;
    if (messageBreakdown.toolCallsByType.length > 0) {
      output += `#### Top Tools

`;
      output += `| Tool | Call Tokens | Result Tokens |
`;
      output += `|------|-------------|---------------|
`;
      for (const tool of messageBreakdown.toolCallsByType) {
        output += `| ${tool.name} | ${formatTokens(tool.callTokens)} | ${formatTokens(tool.resultTokens)} |
`;
      }
      output += `
`;
    }
    if (messageBreakdown.attachmentsByType.length > 0) {
      output += `#### Top Attachments

`;
      output += `| Attachment | Tokens |
`;
      output += `|------------|--------|
`;
      for (const attachment of messageBreakdown.attachmentsByType) {
        output += `| ${attachment.name} | ${formatTokens(attachment.tokens)} |
`;
      }
      output += `
`;
    }
  }
  return output;
}
var init_context_noninteractive = __esm(() => {
  init_microCompact();
  init_analyzeContext();
  init_format();
  init_messages();
  init_constants();
  init_stringUtils();
});

export { collectContextData, call, init_context_noninteractive };
