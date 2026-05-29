// @bun
import {
  AGENT_SOURCE_GROUPS,
  compareAgentsByName,
  getOverrideSourceLabel,
  init_agentDisplay,
  resolveAgentModelDisplay,
  resolveAgentOverrides
} from "./chunk-5n8b8z30.js";
import {
  init_useMergedTools,
  useMergedTools
} from "./chunk-e724k231.js";
import"./chunk-72mdtjhq.js";
import"./chunk-0a0a56f2.js";
import {
  editFileInEditor,
  editPromptInEditor,
  init_promptEditor
} from "./chunk-w8gr0aw0.js";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-wmwjaw1a.js";
import {
  AGENT_COLORS,
  AGENT_COLOR_TO_THEME_COLOR,
  BashTool,
  ConfigurableShortcutHint,
  ExitPlanModeV2Tool,
  FileEditTool,
  FileReadTool,
  FileWriteTool,
  GlobTool,
  GrepTool,
  ListMcpResourcesTool,
  Markdown,
  NotebookEditTool,
  ReadMcpResourceTool,
  Select,
  Spinner,
  TaskOutputTool,
  TaskStopTool,
  TextInput,
  TodoWriteTool,
  WebFetchTool,
  WebSearchTool,
  capitalize_default,
  clearAgentDefinitionsCache,
  createAbortController,
  createTrace,
  createUserMessage,
  endTrace,
  filterToolsForAgent,
  getActiveAgentsFromList,
  getAgentColor,
  getAgentModelDisplay,
  getAgentModelOptions,
  getEmptyToolPermissionContext,
  getMemoryScopeDisplay,
  getTools,
  getUserContext,
  init_AppState,
  init_BashTool,
  init_ConfigurableShortcutHint,
  init_ExitPlanModeV2Tool,
  init_FileEditTool,
  init_FileReadTool,
  init_FileWriteTool,
  init_GlobTool,
  init_GrepTool,
  init_ListMcpResourcesTool,
  init_Markdown,
  init_NotebookEditTool,
  init_ReadMcpResourceTool,
  init_Spinner,
  init_TaskOutputTool,
  init_TaskStopTool,
  init_TextInput,
  init_TodoWriteTool,
  init_Tool,
  init_WebFetchTool,
  init_WebSearchTool,
  init_abortController,
  init_agent,
  init_agentColorManager,
  init_agentMemory,
  init_agentToolUtils,
  init_api,
  init_capitalize,
  init_claude,
  init_context,
  init_langfuse,
  init_loadAgentsDir,
  init_messages1 as init_messages,
  init_select,
  init_systemPromptType,
  init_tools1 as init_tools,
  init_utils,
  isBuiltInAgent,
  isCustomAgent,
  isLangfuseEnabled,
  isMcpTool,
  isPluginAgent,
  loadAgentMemoryPrompt,
  normalizeMessagesForAPI,
  prependUserContext,
  queryModelWithoutStreaming,
  resolveAgentTools,
  setAgentColor,
  useAppState,
  useSetAppState
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import {
  TungstenTool,
  init_TungstenTool
} from "./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  AGENT_TOOL_NAME,
  capitalize,
  getAPIProvider,
  getManagedFilePath,
  getSettingSourceName,
  init_constants,
  init_constants1 as init_constants2,
  init_managedPath,
  init_mcpStringUtils,
  init_paths,
  init_providers,
  init_stringUtils,
  isAutoMemoryEnabled,
  mcpInfoFromString,
  plural
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import {
  init_format,
  truncateToWidth
} from "./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Byline,
  Dialog,
  Divider,
  KeyboardShortcutHint,
  ThemedBox_default,
  ThemedText,
  init_source,
  init_src,
  source_default,
  useKeybinding
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  getErrnoCode,
  init_errors,
  init_slowOperations,
  jsonParse,
  toError
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import {
  init_sdk
} from "./chunk-d3bk85eq.js";
import {
  APIUserAbortError
} from "./chunk-cw8rngb2.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/agents/types.ts
var AGENT_PATHS;
var init_types = __esm(() => {
  AGENT_PATHS = {
    FOLDER_NAME: ".claude",
    AGENTS_DIR: "agents"
  };
});

// src/components/agents/agentFileUtils.ts
import { mkdir, open, unlink } from "fs/promises";
import { join } from "path";
function formatAgentAsMarkdown(agentType, whenToUse, tools, systemPrompt, color, model, memory, effort) {
  const escapedWhenToUse = whenToUse.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\\\n");
  const isAllTools = tools === undefined || tools.length === 1 && tools[0] === "*";
  const toolsLine = isAllTools ? "" : `
tools: ${tools.join(", ")}`;
  const modelLine = model ? `
model: ${model}` : "";
  const effortLine = effort !== undefined ? `
effort: ${effort}` : "";
  const colorLine = color ? `
color: ${color}` : "";
  const memoryLine = memory ? `
memory: ${memory}` : "";
  return `---
name: ${agentType}
description: "${escapedWhenToUse}"${toolsLine}${modelLine}${effortLine}${colorLine}${memoryLine}
---

${systemPrompt}
`;
}
function getAgentDirectoryPath(location) {
  switch (location) {
    case "flagSettings":
      throw new Error(`Cannot get directory path for ${location} agents`);
    case "userSettings":
      return join(getClaudeConfigHomeDir(), AGENT_PATHS.AGENTS_DIR);
    case "projectSettings":
      return join(getCwd(), AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
    case "policySettings":
      return join(getManagedFilePath(), AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
    case "localSettings":
      return join(getCwd(), AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
  }
}
function getRelativeAgentDirectoryPath(location) {
  switch (location) {
    case "projectSettings":
      return join(".", AGENT_PATHS.FOLDER_NAME, AGENT_PATHS.AGENTS_DIR);
    default:
      return getAgentDirectoryPath(location);
  }
}
function getNewAgentFilePath(agent) {
  const dirPath = getAgentDirectoryPath(agent.source);
  return join(dirPath, `${agent.agentType}.md`);
}
function getActualAgentFilePath(agent) {
  if (agent.source === "built-in") {
    return "Built-in";
  }
  if (agent.source === "plugin") {
    throw new Error("Cannot get file path for plugin agents");
  }
  const dirPath = getAgentDirectoryPath(agent.source);
  const filename = agent.filename || agent.agentType;
  return join(dirPath, `${filename}.md`);
}
function getNewRelativeAgentFilePath(agent) {
  if (agent.source === "built-in") {
    return "Built-in";
  }
  const dirPath = getRelativeAgentDirectoryPath(agent.source);
  return join(dirPath, `${agent.agentType}.md`);
}
function getActualRelativeAgentFilePath(agent) {
  if (isBuiltInAgent(agent)) {
    return "Built-in";
  }
  if (isPluginAgent(agent)) {
    return `Plugin: ${agent.plugin || "Unknown"}`;
  }
  if (agent.source === "flagSettings") {
    return "CLI argument";
  }
  const dirPath = getRelativeAgentDirectoryPath(agent.source);
  const filename = agent.filename || agent.agentType;
  return join(dirPath, `${filename}.md`);
}
async function ensureAgentDirectoryExists(source) {
  const dirPath = getAgentDirectoryPath(source);
  await mkdir(dirPath, { recursive: true });
  return dirPath;
}
async function saveAgentToFile(source, agentType, whenToUse, tools, systemPrompt, checkExists = true, color, model, memory, effort) {
  if (source === "built-in") {
    throw new Error("Cannot save built-in agents");
  }
  await ensureAgentDirectoryExists(source);
  const filePath = getNewAgentFilePath({ source, agentType });
  const content = formatAgentAsMarkdown(agentType, whenToUse, tools, systemPrompt, color, model, memory, effort);
  try {
    await writeFileAndFlush(filePath, content, checkExists ? "wx" : "w");
  } catch (e) {
    if (getErrnoCode(e) === "EEXIST") {
      throw new Error(`Agent file already exists: ${filePath}`);
    }
    throw e;
  }
}
async function updateAgentFile(agent, newWhenToUse, newTools, newSystemPrompt, newColor, newModel, newMemory, newEffort) {
  if (agent.source === "built-in") {
    throw new Error("Cannot update built-in agents");
  }
  const filePath = getActualAgentFilePath(agent);
  const content = formatAgentAsMarkdown(agent.agentType, newWhenToUse, newTools, newSystemPrompt, newColor, newModel, newMemory, newEffort);
  await writeFileAndFlush(filePath, content);
}
async function deleteAgentFromFile(agent) {
  if (agent.source === "built-in") {
    throw new Error("Cannot delete built-in agents");
  }
  const filePath = getActualAgentFilePath(agent);
  try {
    await unlink(filePath);
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "ENOENT") {
      throw e;
    }
  }
}
async function writeFileAndFlush(filePath, content, flag = "w") {
  const handle = await open(filePath, flag);
  try {
    await handle.writeFile(content, { encoding: "utf-8" });
    await handle.datasync();
  } finally {
    await handle.close();
  }
}
var init_agentFileUtils = __esm(() => {
  init_managedPath();
  init_loadAgentsDir();
  init_cwd();
  init_envUtils();
  init_errors();
  init_types();
});

// src/components/agents/AgentDetail.tsx
function AgentDetail({ agent, tools, onBack }) {
  const resolvedTools = resolveAgentTools(agent, tools, false);
  const filePath = getActualRelativeAgentFilePath(agent);
  const backgroundColor = getAgentColor(agent.agentType);
  useKeybinding("confirm:no", onBack, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === "return") {
      e.preventDefault();
      onBack();
    }
  };
  function renderToolsList() {
    if (resolvedTools.hasWildcard) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: "All tools"
      }, undefined, false, undefined, this);
    }
    if (!agent.tools || agent.tools.length === 0) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: "None"
      }, undefined, false, undefined, this);
    }
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        resolvedTools.validTools.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: resolvedTools.validTools.join(", ")
        }, undefined, false, undefined, this),
        resolvedTools.invalidTools.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "warning",
          children: [
            figures_default.warning,
            " Unrecognized:",
            " ",
            resolvedTools.invalidTools.join(", ")
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: filePath
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "Description"
              }, undefined, false, undefined, this),
              " (tells MiMo when to use this agent):"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: agent.whenToUse
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "Tools"
              }, undefined, false, undefined, this),
              ":",
              " "
            ]
          }, undefined, true, undefined, this),
          renderToolsList()
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "Model"
          }, undefined, false, undefined, this),
          ": ",
          getAgentModelDisplay(agent.model)
        ]
      }, undefined, true, undefined, this),
      agent.permissionMode && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "Permission mode"
          }, undefined, false, undefined, this),
          ": ",
          agent.permissionMode
        ]
      }, undefined, true, undefined, this),
      agent.memory && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "Memory"
          }, undefined, false, undefined, this),
          ": ",
          getMemoryScopeDisplay(agent.memory)
        ]
      }, undefined, true, undefined, this),
      agent.hooks && Object.keys(agent.hooks).length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "Hooks"
          }, undefined, false, undefined, this),
          ": ",
          Object.keys(agent.hooks).join(", ")
        ]
      }, undefined, true, undefined, this),
      agent.skills && agent.skills.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "Skills"
          }, undefined, false, undefined, this),
          ":",
          " ",
          agent.skills.length > 10 ? `${agent.skills.length} skills` : agent.skills.join(", ")
        ]
      }, undefined, true, undefined, this),
      backgroundColor && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "Color"
            }, undefined, false, undefined, this),
            ":",
            " ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              backgroundColor,
              color: "inverseText",
              children: [
                " ",
                agent.agentType,
                " "
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      !isBuiltInAgent(agent) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: true,
                  children: "System prompt"
                }, undefined, false, undefined, this),
                ":"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            marginRight: 2,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Markdown, {
              children: agent.getSystemPrompt()
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime;
var init_AgentDetail = __esm(() => {
  init_figures();
  init_src();
  init_useKeybinding();
  init_agentColorManager();
  init_agentMemory();
  init_agentToolUtils();
  init_loadAgentsDir();
  init_agent();
  init_Markdown();
  init_agentFileUtils();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/ColorPicker.tsx
function ColorPicker({
  agentName,
  currentColor = "automatic",
  onConfirm
}) {
  const [selectedIndex, setSelectedIndex] = import_react.useState(Math.max(0, COLOR_OPTIONS.indexOf(currentColor)));
  const handleKeyDown = (e) => {
    if (e.key === "up") {
      e.preventDefault();
      setSelectedIndex((prev) => prev > 0 ? prev - 1 : COLOR_OPTIONS.length - 1);
    } else if (e.key === "down") {
      e.preventDefault();
      setSelectedIndex((prev) => prev < COLOR_OPTIONS.length - 1 ? prev + 1 : 0);
    } else if (e.key === "return") {
      e.preventDefault();
      const selected = COLOR_OPTIONS[selectedIndex];
      onConfirm(selected === "automatic" ? undefined : selected);
    }
  };
  const selectedValue = COLOR_OPTIONS[selectedIndex];
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: COLOR_OPTIONS.map((option, index) => {
          const isSelected = index === selectedIndex;
          return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            gap: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                color: isSelected ? "suggestion" : undefined,
                children: isSelected ? figures_default.pointer : " "
              }, undefined, false, undefined, this),
              option === "automatic" ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: isSelected,
                children: "Automatic color"
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                gap: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    backgroundColor: AGENT_COLOR_TO_THEME_COLOR[option],
                    color: "inverseText",
                    children: " "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: isSelected,
                    children: capitalize(option)
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, option, true, undefined, this);
        })
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            children: "Preview: "
          }, undefined, false, undefined, this),
          selectedValue === undefined || selectedValue === "automatic" ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            inverse: true,
            bold: true,
            children: [
              " ",
              "@",
              agentName,
              " "
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            backgroundColor: AGENT_COLOR_TO_THEME_COLOR[selectedValue],
            color: "inverseText",
            bold: true,
            children: [
              " ",
              "@",
              agentName,
              " "
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime2, COLOR_OPTIONS;
var init_ColorPicker = __esm(() => {
  init_figures();
  init_src();
  init_agentColorManager();
  init_stringUtils();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
  COLOR_OPTIONS = ["automatic", ...AGENT_COLORS];
});

// src/components/agents/ModelSelector.tsx
function ModelSelector({
  initialModel,
  onComplete,
  onCancel
}) {
  const modelOptions = React2.useMemo(() => {
    const base = getAgentModelOptions();
    if (initialModel && !base.some((o) => o.value === initialModel)) {
      return [
        {
          value: initialModel,
          label: initialModel,
          description: "Current model (custom ID)"
        },
        ...base
      ];
    }
    return base;
  }, [initialModel]);
  const defaultModel = initialModel ?? "sonnet";
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Model determines the agent's reasoning capabilities and speed."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Select, {
        options: modelOptions,
        defaultValue: defaultModel,
        onChange: onComplete,
        onCancel: () => onCancel ? onCancel() : onComplete(undefined)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var React2, jsx_dev_runtime3;
var init_ModelSelector = __esm(() => {
  init_src();
  init_agent();
  init_select();
  React2 = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/ToolSelector.tsx
function getToolBuckets() {
  return {
    READ_ONLY: {
      name: "Read-only tools",
      toolNames: new Set([
        GlobTool.name,
        GrepTool.name,
        ExitPlanModeV2Tool.name,
        FileReadTool.name,
        WebFetchTool.name,
        TodoWriteTool.name,
        WebSearchTool.name,
        TaskStopTool.name,
        TaskOutputTool.name,
        ListMcpResourcesTool.name,
        ReadMcpResourceTool.name
      ])
    },
    EDIT: {
      name: "Edit tools",
      toolNames: new Set([
        FileEditTool.name,
        FileWriteTool.name,
        NotebookEditTool.name
      ])
    },
    EXECUTION: {
      name: "Execution tools",
      toolNames: new Set([
        BashTool.name,
        process.env.USER_TYPE === "ant" ? TungstenTool.name : undefined
      ].filter((n) => n !== undefined))
    },
    MCP: {
      name: "MCP tools",
      toolNames: new Set,
      isMcp: true
    },
    OTHER: {
      name: "Other tools",
      toolNames: new Set
    }
  };
}
function getMcpServerBuckets(tools) {
  const serverMap = new Map;
  tools.forEach((tool) => {
    if (isMcpTool(tool)) {
      const mcpInfo = mcpInfoFromString(tool.name);
      if (mcpInfo?.serverName) {
        const existing = serverMap.get(mcpInfo.serverName) || [];
        existing.push(tool);
        serverMap.set(mcpInfo.serverName, existing);
      }
    }
  });
  return Array.from(serverMap.entries()).map(([serverName, tools2]) => ({ serverName, tools: tools2 })).sort((a, b) => a.serverName.localeCompare(b.serverName));
}
function ToolSelector({
  tools,
  initialTools,
  onComplete,
  onCancel
}) {
  const customAgentTools = import_react2.useMemo(() => filterToolsForAgent({ tools, isBuiltIn: false, isAsync: false }), [tools]);
  const expandedInitialTools = !initialTools || initialTools.includes("*") ? customAgentTools.map((t) => t.name) : initialTools;
  const [selectedTools, setSelectedTools] = import_react2.useState(expandedInitialTools);
  const [focusIndex, setFocusIndex] = import_react2.useState(0);
  const [showIndividualTools, setShowIndividualTools] = import_react2.useState(false);
  const validSelectedTools = import_react2.useMemo(() => {
    const toolNames = new Set(customAgentTools.map((t) => t.name));
    return selectedTools.filter((name) => toolNames.has(name));
  }, [selectedTools, customAgentTools]);
  const selectedSet = new Set(validSelectedTools);
  const isAllSelected = validSelectedTools.length === customAgentTools.length && customAgentTools.length > 0;
  const handleToggleTool = (toolName) => {
    if (!toolName)
      return;
    setSelectedTools((current) => current.includes(toolName) ? current.filter((t) => t !== toolName) : [...current, toolName]);
  };
  const handleToggleTools = (toolNames, select) => {
    setSelectedTools((current) => {
      if (select) {
        const toolsToAdd = toolNames.filter((t) => !current.includes(t));
        return [...current, ...toolsToAdd];
      } else {
        return current.filter((t) => !toolNames.includes(t));
      }
    });
  };
  const handleConfirm = () => {
    const allToolNames = customAgentTools.map((t) => t.name);
    const areAllToolsSelected = validSelectedTools.length === allToolNames.length && allToolNames.every((name) => validSelectedTools.includes(name));
    const finalTools = areAllToolsSelected ? undefined : validSelectedTools;
    onComplete(finalTools);
  };
  const toolsByBucket = import_react2.useMemo(() => {
    const toolBuckets2 = getToolBuckets();
    const buckets = {
      readOnly: [],
      edit: [],
      execution: [],
      mcp: [],
      other: []
    };
    customAgentTools.forEach((tool) => {
      if (isMcpTool(tool)) {
        buckets.mcp.push(tool);
      } else if (toolBuckets2.READ_ONLY.toolNames.has(tool.name)) {
        buckets.readOnly.push(tool);
      } else if (toolBuckets2.EDIT.toolNames.has(tool.name)) {
        buckets.edit.push(tool);
      } else if (toolBuckets2.EXECUTION.toolNames.has(tool.name)) {
        buckets.execution.push(tool);
      } else if (tool.name !== AGENT_TOOL_NAME) {
        buckets.other.push(tool);
      }
    });
    return buckets;
  }, [customAgentTools]);
  const createBucketToggleAction = (bucketTools) => {
    const selected = count(bucketTools, (t) => selectedSet.has(t.name));
    const needsSelection = selected < bucketTools.length;
    return () => {
      const toolNames = bucketTools.map((t) => t.name);
      handleToggleTools(toolNames, needsSelection);
    };
  };
  const navigableItems = [];
  navigableItems.push({
    id: "continue",
    label: "Continue",
    action: handleConfirm,
    isContinue: true
  });
  navigableItems.push({
    id: "bucket-all",
    label: `${isAllSelected ? figures_default.checkboxOn : figures_default.checkboxOff} All tools`,
    action: () => {
      const allToolNames = customAgentTools.map((t) => t.name);
      handleToggleTools(allToolNames, !isAllSelected);
    }
  });
  const toolBuckets = getToolBuckets();
  const bucketConfigs = [
    {
      id: "bucket-readonly",
      name: toolBuckets.READ_ONLY.name,
      tools: toolsByBucket.readOnly
    },
    {
      id: "bucket-edit",
      name: toolBuckets.EDIT.name,
      tools: toolsByBucket.edit
    },
    {
      id: "bucket-execution",
      name: toolBuckets.EXECUTION.name,
      tools: toolsByBucket.execution
    },
    {
      id: "bucket-mcp",
      name: toolBuckets.MCP.name,
      tools: toolsByBucket.mcp
    },
    {
      id: "bucket-other",
      name: toolBuckets.OTHER.name,
      tools: toolsByBucket.other
    }
  ];
  bucketConfigs.forEach(({ id, name, tools: bucketTools }) => {
    if (bucketTools.length === 0)
      return;
    const selected = count(bucketTools, (t) => selectedSet.has(t.name));
    const isFullySelected = selected === bucketTools.length;
    navigableItems.push({
      id,
      label: `${isFullySelected ? figures_default.checkboxOn : figures_default.checkboxOff} ${name}`,
      action: createBucketToggleAction(bucketTools)
    });
  });
  const toggleButtonIndex = navigableItems.length;
  navigableItems.push({
    id: "toggle-individual",
    label: showIndividualTools ? "Hide advanced options" : "Show advanced options",
    action: () => {
      setShowIndividualTools(!showIndividualTools);
      if (showIndividualTools && focusIndex > toggleButtonIndex) {
        setFocusIndex(toggleButtonIndex);
      }
    },
    isToggle: true
  });
  const mcpServerBuckets = import_react2.useMemo(() => getMcpServerBuckets(customAgentTools), [customAgentTools]);
  if (showIndividualTools) {
    if (mcpServerBuckets.length > 0) {
      navigableItems.push({
        id: "mcp-servers-header",
        label: "MCP Servers:",
        action: () => {},
        isHeader: true
      });
      mcpServerBuckets.forEach(({ serverName, tools: serverTools }) => {
        const selected = count(serverTools, (t) => selectedSet.has(t.name));
        const isFullySelected = selected === serverTools.length;
        navigableItems.push({
          id: `mcp-server-${serverName}`,
          label: `${isFullySelected ? figures_default.checkboxOn : figures_default.checkboxOff} ${serverName} (${serverTools.length} ${plural(serverTools.length, "tool")})`,
          action: () => {
            const toolNames = serverTools.map((t) => t.name);
            handleToggleTools(toolNames, !isFullySelected);
          }
        });
      });
      navigableItems.push({
        id: "tools-header",
        label: "Individual Tools:",
        action: () => {},
        isHeader: true
      });
    }
    customAgentTools.forEach((tool) => {
      let displayName = tool.name;
      if (tool.name.startsWith("mcp__")) {
        const mcpInfo = mcpInfoFromString(tool.name);
        displayName = mcpInfo ? `${mcpInfo.toolName} (${mcpInfo.serverName})` : tool.name;
      }
      navigableItems.push({
        id: `tool-${tool.name}`,
        label: `${selectedSet.has(tool.name) ? figures_default.checkboxOn : figures_default.checkboxOff} ${displayName}`,
        action: () => handleToggleTool(tool.name)
      });
    });
  }
  const handleCancel = import_react2.useCallback(() => {
    if (onCancel) {
      onCancel();
    } else {
      onComplete(initialTools);
    }
  }, [onCancel, onComplete, initialTools]);
  useKeybinding("confirm:no", handleCancel, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === "return") {
      e.preventDefault();
      const item = navigableItems[focusIndex];
      if (item && !item.isHeader) {
        item.action();
      }
    } else if (e.key === "up") {
      e.preventDefault();
      let newIndex = focusIndex - 1;
      while (newIndex > 0 && navigableItems[newIndex]?.isHeader) {
        newIndex--;
      }
      setFocusIndex(Math.max(0, newIndex));
    } else if (e.key === "down") {
      e.preventDefault();
      let newIndex = focusIndex + 1;
      while (newIndex < navigableItems.length - 1 && navigableItems[newIndex]?.isHeader) {
        newIndex++;
      }
      setFocusIndex(Math.min(navigableItems.length - 1, newIndex));
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        color: focusIndex === 0 ? "suggestion" : undefined,
        bold: focusIndex === 0,
        children: [
          focusIndex === 0 ? `${figures_default.pointer} ` : "  ",
          "[ Continue ]"
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Divider, {
        width: 40
      }, undefined, false, undefined, this),
      navigableItems.slice(1).map((item, index) => {
        const isCurrentlyFocused = index + 1 === focusIndex;
        const isToggleButton = item.isToggle;
        const isHeader = item.isHeader;
        return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react2.default.Fragment, {
          children: [
            isToggleButton && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Divider, {
              width: 40
            }, undefined, false, undefined, this),
            isHeader && index > 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
              marginTop: 1
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
              color: isHeader ? undefined : isCurrentlyFocused ? "suggestion" : undefined,
              dimColor: isHeader,
              bold: isToggleButton && isCurrentlyFocused,
              children: [
                isHeader ? "" : isCurrentlyFocused ? `${figures_default.pointer} ` : "  ",
                isToggleButton ? `[ ${item.label} ]` : item.label
              ]
            }, undefined, true, undefined, this)
          ]
        }, item.id, true, undefined, this);
      }),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: isAllSelected ? "All tools selected" : `${selectedSet.size} of ${customAgentTools.length} tools selected`
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react2, jsx_dev_runtime4;
var init_ToolSelector = __esm(() => {
  init_figures();
  init_mcpStringUtils();
  init_utils();
  init_agentToolUtils();
  init_constants2();
  init_BashTool();
  init_ExitPlanModeV2Tool();
  init_FileEditTool();
  init_FileReadTool();
  init_FileWriteTool();
  init_GlobTool();
  init_GrepTool();
  init_ListMcpResourcesTool();
  init_NotebookEditTool();
  init_ReadMcpResourceTool();
  init_TaskOutputTool();
  init_TaskStopTool();
  init_TodoWriteTool();
  init_TungstenTool();
  init_WebFetchTool();
  init_WebSearchTool();
  init_src();
  init_useKeybinding();
  init_array();
  init_stringUtils();
  init_src();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/utils.ts
function getAgentSourceDisplayName(source) {
  if (source === "all") {
    return "Agents";
  }
  if (source === "built-in") {
    return "Built-in agents";
  }
  if (source === "plugin") {
    return "Plugin agents";
  }
  return capitalize_default(getSettingSourceName(source));
}
var init_utils2 = __esm(() => {
  init_capitalize();
  init_constants();
});

// src/components/agents/AgentEditor.tsx
function AgentEditor({
  agent,
  tools,
  onSaved,
  onBack
}) {
  const setAppState = useSetAppState();
  const [editMode, setEditMode] = import_react3.useState("menu");
  const [selectedMenuIndex, setSelectedMenuIndex] = import_react3.useState(0);
  const [error, setError] = import_react3.useState(null);
  const [selectedColor, setSelectedColor] = import_react3.useState(agent.color);
  const handleOpenInEditor = import_react3.useCallback(async () => {
    const filePath = getActualAgentFilePath(agent);
    const result = await editFileInEditor(filePath);
    if (result.error) {
      setError(result.error);
    } else {
      onSaved(`Opened ${agent.agentType} in editor. If you made edits, restart to load the latest version.`);
    }
  }, [agent, onSaved]);
  const handleSave = import_react3.useCallback(async (changes = {}) => {
    const { tools: newTools, color: newColor, model: newModel } = changes;
    const finalColor = newColor ?? selectedColor;
    const hasToolsChanged = newTools !== undefined;
    const hasModelChanged = newModel !== undefined;
    const hasColorChanged = finalColor !== agent.color;
    if (!hasToolsChanged && !hasModelChanged && !hasColorChanged) {
      return false;
    }
    try {
      if (!isCustomAgent(agent) && !isPluginAgent(agent)) {
        return false;
      }
      await updateAgentFile(agent, agent.whenToUse, newTools ?? agent.tools, agent.getSystemPrompt(), finalColor, newModel ?? agent.model);
      if (hasColorChanged && finalColor) {
        setAgentColor(agent.agentType, finalColor);
      }
      setAppState((state) => {
        const allAgents = state.agentDefinitions.allAgents.map((a) => a.agentType === agent.agentType ? {
          ...a,
          tools: newTools ?? a.tools,
          color: finalColor,
          model: newModel ?? a.model
        } : a);
        return {
          ...state,
          agentDefinitions: {
            ...state.agentDefinitions,
            activeAgents: getActiveAgentsFromList(allAgents),
            allAgents
          }
        };
      });
      onSaved(`Updated agent: ${source_default.bold(agent.agentType)}`);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save agent");
      return false;
    }
  }, [agent, selectedColor, onSaved, setAppState]);
  const menuItems = import_react3.useMemo(() => [
    { label: "Open in editor", action: handleOpenInEditor },
    { label: "Edit tools", action: () => setEditMode("edit-tools") },
    { label: "Edit model", action: () => setEditMode("edit-model") },
    { label: "Edit color", action: () => setEditMode("edit-color") }
  ], [handleOpenInEditor]);
  const handleEscape = import_react3.useCallback(() => {
    setError(null);
    if (editMode === "menu") {
      onBack();
    } else {
      setEditMode("menu");
    }
  }, [editMode, onBack]);
  const handleMenuKeyDown = import_react3.useCallback((e) => {
    if (e.key === "up") {
      e.preventDefault();
      setSelectedMenuIndex((index) => Math.max(0, index - 1));
    } else if (e.key === "down") {
      e.preventDefault();
      setSelectedMenuIndex((index) => Math.min(menuItems.length - 1, index + 1));
    } else if (e.key === "return") {
      e.preventDefault();
      const selectedItem = menuItems[selectedMenuIndex];
      if (selectedItem) {
        selectedItem.action();
      }
    }
  }, [menuItems, selectedMenuIndex]);
  useKeybinding("confirm:no", handleEscape, { context: "Confirmation" });
  const renderMenu = () => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleMenuKeyDown,
    children: [
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "Source: ",
          getAgentSourceDisplayName(agent.source)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: menuItems.map((item, index) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          color: index === selectedMenuIndex ? "suggestion" : undefined,
          children: [
            index === selectedMenuIndex ? `${figures_default.pointer} ` : "  ",
            item.label
          ]
        }, item.label, true, undefined, this))
      }, undefined, false, undefined, this),
      error && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          color: "error",
          children: error
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  switch (editMode) {
    case "menu":
      return renderMenu();
    case "edit-tools":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ToolSelector, {
        tools,
        initialTools: agent.tools,
        onComplete: async (finalTools) => {
          setEditMode("menu");
          await handleSave({ tools: finalTools });
        }
      }, undefined, false, undefined, this);
    case "edit-color":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ColorPicker, {
        agentName: agent.agentType,
        currentColor: selectedColor || agent.color || "automatic",
        onConfirm: async (color) => {
          setSelectedColor(color);
          setEditMode("menu");
          await handleSave({ color });
        }
      }, undefined, false, undefined, this);
    case "edit-model":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ModelSelector, {
        initialModel: agent.model,
        onComplete: async (model) => {
          setEditMode("menu");
          await handleSave({ model });
        }
      }, undefined, false, undefined, this);
    default:
      return null;
  }
}
var import_react3, jsx_dev_runtime5;
var init_AgentEditor = __esm(() => {
  init_source();
  init_figures();
  init_AppState();
  init_src();
  init_useKeybinding();
  init_agentColorManager();
  init_loadAgentsDir();
  init_promptEditor();
  init_agentFileUtils();
  init_ColorPicker();
  init_ModelSelector();
  init_ToolSelector();
  init_utils2();
  import_react3 = __toESM(require_react(), 1);
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/AgentNavigationFooter.tsx
function AgentNavigationFooter({
  instructions = "Press \u2191\u2193 to navigate \xB7 Enter to select \xB7 Esc to go back"
}) {
  const exitState = useExitOnCtrlCDWithKeybindings();
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
    marginLeft: 2,
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
      dimColor: true,
      children: exitState.pending ? `Press ${exitState.keyName} again to exit` : instructions
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime6;
var init_AgentNavigationFooter = __esm(() => {
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/AgentsList.tsx
function AgentsList({
  source,
  agents,
  onBack,
  onSelect,
  onCreateNew,
  changes
}) {
  const [selectedAgent, setSelectedAgent] = React4.useState(null);
  const [isCreateNewSelected, setIsCreateNewSelected] = React4.useState(true);
  const sortedAgents = React4.useMemo(() => [...agents].sort(compareAgentsByName), [agents]);
  const getOverrideInfo = (agent) => {
    return {
      isOverridden: !!agent.overriddenBy,
      overriddenBy: agent.overriddenBy || null
    };
  };
  const renderCreateNewOption = () => {
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          color: isCreateNewSelected ? "suggestion" : undefined,
          children: isCreateNewSelected ? `${figures_default.pointer} ` : "  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          color: isCreateNewSelected ? "suggestion" : undefined,
          children: "Create new agent"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  };
  const renderAgent = (agent) => {
    const isBuiltIn = agent.source === "built-in";
    const isSelected = !isBuiltIn && !isCreateNewSelected && selectedAgent?.agentType === agent.agentType && selectedAgent?.source === agent.source;
    const { isOverridden, overriddenBy } = getOverrideInfo(agent);
    const dimmed = isBuiltIn || isOverridden;
    const textColor = !isBuiltIn && isSelected ? "suggestion" : undefined;
    const resolvedModel = resolveAgentModelDisplay(agent);
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: dimmed && !isSelected,
          color: textColor,
          children: isBuiltIn ? "" : isSelected ? `${figures_default.pointer} ` : "  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: dimmed && !isSelected,
          color: textColor,
          children: agent.agentType
        }, undefined, false, undefined, this),
        resolvedModel && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: true,
          color: textColor,
          children: [
            " \xB7 ",
            resolvedModel
          ]
        }, undefined, true, undefined, this),
        agent.memory && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: true,
          color: textColor,
          children: [
            " \xB7 ",
            agent.memory,
            " memory"
          ]
        }, undefined, true, undefined, this),
        overriddenBy && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          color: isSelected ? "warning" : undefined,
          children: [
            " ",
            figures_default.warning,
            " shadowed by ",
            getOverrideSourceLabel(overriddenBy)
          ]
        }, undefined, true, undefined, this)
      ]
    }, `${agent.agentType}-${agent.source}`, true, undefined, this);
  };
  const selectableAgentsInOrder = React4.useMemo(() => {
    const nonBuiltIn = sortedAgents.filter((a) => a.source !== "built-in");
    if (source === "all") {
      return AGENT_SOURCE_GROUPS.filter((g) => g.source !== "built-in").flatMap(({ source: groupSource }) => nonBuiltIn.filter((a) => a.source === groupSource));
    }
    return nonBuiltIn;
  }, [sortedAgents, source]);
  React4.useEffect(() => {
    if (!selectedAgent && !isCreateNewSelected && selectableAgentsInOrder.length > 0) {
      if (onCreateNew) {
        setIsCreateNewSelected(true);
      } else {
        setSelectedAgent(selectableAgentsInOrder[0] || null);
      }
    }
  }, [selectableAgentsInOrder, selectedAgent, isCreateNewSelected, onCreateNew]);
  const handleKeyDown = (e) => {
    if (e.key === "return") {
      e.preventDefault();
      if (isCreateNewSelected && onCreateNew) {
        onCreateNew();
      } else if (selectedAgent) {
        onSelect(selectedAgent);
      }
      return;
    }
    if (e.key !== "up" && e.key !== "down")
      return;
    e.preventDefault();
    const hasCreateOption = !!onCreateNew;
    const totalItems = selectableAgentsInOrder.length + (hasCreateOption ? 1 : 0);
    if (totalItems === 0)
      return;
    let currentPosition = 0;
    if (!isCreateNewSelected && selectedAgent) {
      const agentIndex = selectableAgentsInOrder.findIndex((a) => a.agentType === selectedAgent.agentType && a.source === selectedAgent.source);
      if (agentIndex >= 0) {
        currentPosition = hasCreateOption ? agentIndex + 1 : agentIndex;
      }
    }
    const newPosition = e.key === "up" ? currentPosition === 0 ? totalItems - 1 : currentPosition - 1 : currentPosition === totalItems - 1 ? 0 : currentPosition + 1;
    if (hasCreateOption && newPosition === 0) {
      setIsCreateNewSelected(true);
      setSelectedAgent(null);
    } else {
      const agentIndex = hasCreateOption ? newPosition - 1 : newPosition;
      const newAgent = selectableAgentsInOrder[agentIndex];
      if (newAgent) {
        setIsCreateNewSelected(false);
        setSelectedAgent(newAgent);
      }
    }
  };
  const renderBuiltInAgentsSection = (title = "Built-in (always available):") => {
    const builtInAgents2 = sortedAgents.filter((a) => a.source === "built-in");
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginBottom: 1,
      paddingLeft: 2,
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          bold: true,
          dimColor: true,
          children: title
        }, undefined, false, undefined, this),
        builtInAgents2.map(renderAgent)
      ]
    }, undefined, true, undefined, this);
  };
  const renderAgentGroup = (title, groupAgents) => {
    if (!groupAgents.length)
      return null;
    const folderPath = groupAgents[0]?.baseDir;
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          paddingLeft: 2,
          children: [
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              bold: true,
              dimColor: true,
              children: title
            }, undefined, false, undefined, this),
            folderPath && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " (",
                folderPath,
                ")"
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        groupAgents.map((agent) => renderAgent(agent))
      ]
    }, undefined, true, undefined, this);
  };
  const sourceTitle = getAgentSourceDisplayName(source);
  const builtInAgents = sortedAgents.filter((a) => a.source === "built-in");
  const hasNoAgents = !sortedAgents.length || source !== "built-in" && !sortedAgents.some((a) => a.source !== "built-in");
  if (hasNoAgents) {
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Dialog, {
      title: sourceTitle,
      subtitle: "No agents found",
      onCancel: onBack,
      hideInputGuide: true,
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        tabIndex: 0,
        autoFocus: true,
        onKeyDown: handleKeyDown,
        children: [
          onCreateNew && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
            children: renderCreateNewOption()
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "No agents found. Create specialized subagents that MiMo can delegate to."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Each subagent has its own context window, custom system prompt, and specific tools."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Try creating: Code Reviewer, Code Simplifier, Security Reviewer, Tech Lead, or UX Reviewer."
          }, undefined, false, undefined, this),
          source !== "built-in" && sortedAgents.some((a) => a.source === "built-in") && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Divider, {}, undefined, false, undefined, this),
              renderBuiltInAgentsSection()
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Dialog, {
    title: sourceTitle,
    subtitle: `${count(sortedAgents, (a) => !a.overriddenBy)} agents`,
    onCancel: onBack,
    hideInputGuide: true,
    children: [
      changes && changes.length > 0 && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: true,
          children: changes[changes.length - 1]
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        tabIndex: 0,
        autoFocus: true,
        onKeyDown: handleKeyDown,
        children: [
          onCreateNew && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
            marginBottom: 1,
            children: renderCreateNewOption()
          }, undefined, false, undefined, this),
          source === "all" ? /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
            children: [
              AGENT_SOURCE_GROUPS.filter((g) => g.source !== "built-in").map(({ label, source: groupSource }) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(React4.Fragment, {
                children: renderAgentGroup(label, sortedAgents.filter((a) => a.source === groupSource))
              }, groupSource, false, undefined, this)),
              builtInAgents.length > 0 && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginBottom: 1,
                paddingLeft: 2,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                        bold: true,
                        children: "Built-in agents"
                      }, undefined, false, undefined, this),
                      " (always available)"
                    ]
                  }, undefined, true, undefined, this),
                  builtInAgents.map(renderAgent)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this) : source === "built-in" ? /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                dimColor: true,
                italic: true,
                children: "Built-in agents are provided by default and cannot be modified."
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
                marginTop: 1,
                flexDirection: "column",
                children: sortedAgents.map((agent) => renderAgent(agent))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
            children: [
              sortedAgents.filter((a) => a.source !== "built-in").map((agent) => renderAgent(agent)),
              sortedAgents.some((a) => a.source === "built-in") && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Divider, {}, undefined, false, undefined, this),
                  renderBuiltInAgentsSection()
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var React4, jsx_dev_runtime7;
var init_AgentsList = __esm(() => {
  init_figures();
  init_src();
  init_agentDisplay();
  init_array();
  init_src();
  init_utils2();
  React4 = __toESM(require_react(), 1);
  jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/wizard/WizardProvider.tsx
function WizardProvider({
  steps,
  initialData = {},
  onComplete,
  onCancel,
  children,
  title,
  showStepCounter = true
}) {
  const [currentStepIndex, setCurrentStepIndex] = import_react4.useState(0);
  const [wizardData, setWizardData] = import_react4.useState(initialData);
  const [isCompleted, setIsCompleted] = import_react4.useState(false);
  const [navigationHistory, setNavigationHistory] = import_react4.useState([]);
  useExitOnCtrlCDWithKeybindings();
  import_react4.useEffect(() => {
    if (isCompleted) {
      setNavigationHistory([]);
      onComplete(wizardData);
    }
  }, [isCompleted, wizardData, onComplete]);
  const goNext = import_react4.useCallback(() => {
    if (currentStepIndex < steps.length - 1) {
      if (navigationHistory.length > 0) {
        setNavigationHistory((prev) => [...prev, currentStepIndex]);
      }
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  }, [currentStepIndex, steps.length, navigationHistory]);
  const goBack = import_react4.useCallback(() => {
    if (navigationHistory.length > 0) {
      const previousStep = navigationHistory[navigationHistory.length - 1];
      if (previousStep !== undefined) {
        setNavigationHistory((prev) => prev.slice(0, -1));
        setCurrentStepIndex(previousStep);
      }
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else if (onCancel) {
      onCancel();
    }
  }, [currentStepIndex, navigationHistory, onCancel]);
  const goToStep = import_react4.useCallback((index) => {
    if (index >= 0 && index < steps.length) {
      setNavigationHistory((prev) => [...prev, currentStepIndex]);
      setCurrentStepIndex(index);
    }
  }, [currentStepIndex, steps.length]);
  const cancel = import_react4.useCallback(() => {
    setNavigationHistory([]);
    if (onCancel) {
      onCancel();
    }
  }, [onCancel]);
  const updateWizardData = import_react4.useCallback((updates) => {
    setWizardData((prev) => ({ ...prev, ...updates }));
  }, []);
  const contextValue = import_react4.useMemo(() => ({
    currentStepIndex,
    totalSteps: steps.length,
    wizardData,
    setWizardData,
    updateWizardData,
    goNext,
    goBack,
    goToStep,
    cancel,
    title,
    showStepCounter
  }), [
    currentStepIndex,
    steps.length,
    wizardData,
    updateWizardData,
    goNext,
    goBack,
    goToStep,
    cancel,
    title,
    showStepCounter
  ]);
  const CurrentStepComponent = steps[currentStepIndex];
  if (!CurrentStepComponent || isCompleted) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(WizardContext.Provider, {
    value: contextValue,
    children: children || /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(CurrentStepComponent, {}, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react4, jsx_dev_runtime8, WizardContext;
var init_WizardProvider = __esm(() => {
  init_useExitOnCtrlCDWithKeybindings();
  import_react4 = __toESM(require_react(), 1);
  jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
  WizardContext = import_react4.createContext(null);
});

// src/components/wizard/useWizard.ts
function useWizard() {
  const context = import_react5.useContext(WizardContext);
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
}
var import_react5;
var init_useWizard = __esm(() => {
  init_WizardProvider();
  import_react5 = __toESM(require_react(), 1);
});

// src/components/wizard/WizardNavigationFooter.tsx
function WizardNavigationFooter({
  instructions = /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Byline, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(KeyboardShortcutHint, {
        shortcut: "\u2191\u2193",
        action: "navigate"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(KeyboardShortcutHint, {
        shortcut: "Enter",
        action: "select"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ConfigurableShortcutHint, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "go back"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
}) {
  const exitState = useExitOnCtrlCDWithKeybindings();
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
    marginLeft: 3,
    marginTop: 1,
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
      dimColor: true,
      children: exitState.pending ? `Press ${exitState.keyName} again to exit` : instructions
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime9;
var init_WizardNavigationFooter = __esm(() => {
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  init_ConfigurableShortcutHint();
  init_src();
  jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/wizard/WizardDialogLayout.tsx
function WizardDialogLayout({
  title: titleOverride,
  color = "suggestion",
  children,
  subtitle,
  footerText
}) {
  const {
    currentStepIndex,
    totalSteps,
    title: providerTitle,
    showStepCounter,
    goBack
  } = useWizard();
  const title = titleOverride || providerTitle || "Wizard";
  const stepSuffix = showStepCounter !== false ? ` (${currentStepIndex + 1}/${totalSteps})` : "";
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Dialog, {
        title: `${title}${stepSuffix}`,
        subtitle,
        onCancel: goBack,
        color,
        hideInputGuide: true,
        isCancelActive: false,
        children
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(WizardNavigationFooter, {
        instructions: footerText
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime10;
var init_WizardDialogLayout = __esm(() => {
  init_src();
  init_useWizard();
  init_WizardNavigationFooter();
  jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/wizard/index.ts
var init_wizard = __esm(() => {
  init_useWizard();
  init_WizardDialogLayout();
  init_WizardNavigationFooter();
  init_WizardProvider();
});

// src/components/agents/new-agent-creation/wizard-steps/ColorStep.tsx
function ColorStep() {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  useKeybinding("confirm:no", goBack, { context: "Confirmation" });
  const handleConfirm = (color) => {
    updateWizardData({
      selectedColor: color,
      finalAgent: {
        agentType: wizardData.agentType,
        whenToUse: wizardData.whenToUse,
        getSystemPrompt: () => wizardData.systemPrompt,
        tools: wizardData.selectedTools,
        ...wizardData.selectedModel ? { model: wizardData.selectedModel } : {},
        ...color ? { color } : {},
        source: wizardData.location
      }
    });
    goNext();
  };
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(WizardDialogLayout, {
    subtitle: "Choose background color",
    footerText: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
      children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ColorPicker, {
        agentName: wizardData.agentType || "agent",
        currentColor: "automatic",
        onConfirm: handleConfirm
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime11;
var init_ColorStep = __esm(() => {
  init_src();
  init_useKeybinding();
  init_ConfigurableShortcutHint();
  init_wizard();
  init_WizardDialogLayout();
  init_ColorPicker();
  jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/validateAgent.ts
function validateAgentType(agentType) {
  if (!agentType) {
    return "Agent type is required";
  }
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(agentType)) {
    return "Agent type must start and end with alphanumeric characters and contain only letters, numbers, and hyphens";
  }
  if (agentType.length < 3) {
    return "Agent type must be at least 3 characters long";
  }
  if (agentType.length > 50) {
    return "Agent type must be less than 50 characters";
  }
  return null;
}
function validateAgent(agent, availableTools, existingAgents) {
  const errors = [];
  const warnings = [];
  if (!agent.agentType) {
    errors.push("Agent type is required");
  } else {
    const typeError = validateAgentType(agent.agentType);
    if (typeError) {
      errors.push(typeError);
    }
    const duplicate = existingAgents.find((a) => a.agentType === agent.agentType && a.source !== agent.source);
    if (duplicate) {
      errors.push(`Agent type "${agent.agentType}" already exists in ${getAgentSourceDisplayName(duplicate.source)}`);
    }
  }
  if (!agent.whenToUse) {
    errors.push("Description (description) is required");
  } else if (agent.whenToUse.length < 10) {
    warnings.push("Description should be more descriptive (at least 10 characters)");
  } else if (agent.whenToUse.length > 5000) {
    warnings.push("Description is very long (over 5000 characters)");
  }
  if (agent.tools !== undefined && !Array.isArray(agent.tools)) {
    errors.push("Tools must be an array");
  } else {
    if (agent.tools === undefined) {
      warnings.push("Agent has access to all tools");
    } else if (agent.tools.length === 0) {
      warnings.push("No tools selected - agent will have very limited capabilities");
    }
    const resolvedTools = resolveAgentTools(agent, availableTools, false);
    if (resolvedTools.invalidTools.length > 0) {
      errors.push(`Invalid tools: ${resolvedTools.invalidTools.join(", ")}`);
    }
  }
  const systemPrompt = agent.getSystemPrompt();
  if (!systemPrompt) {
    errors.push("System prompt is required");
  } else if (systemPrompt.length < 20) {
    errors.push("System prompt is too short (minimum 20 characters)");
  } else if (systemPrompt.length > 1e4) {
    warnings.push("System prompt is very long (over 10,000 characters)");
  }
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}
var init_validateAgent = __esm(() => {
  init_agentToolUtils();
  init_utils2();
});

// src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx
function ConfirmStep({
  tools,
  existingAgents,
  onSave,
  onSaveAndEdit,
  error
}) {
  const { goBack, wizardData } = useWizard();
  useKeybinding("confirm:no", goBack, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === "s" || e.key === "return") {
      e.preventDefault();
      onSave();
    } else if (e.key === "e") {
      e.preventDefault();
      onSaveAndEdit();
    }
  };
  const agent = wizardData.finalAgent;
  const validation = validateAgent(agent, tools, existingAgents);
  const systemPromptPreview = truncateToWidth(agent.getSystemPrompt(), 240);
  const whenToUsePreview = truncateToWidth(agent.whenToUse, 240);
  const getToolsDisplay = (toolNames) => {
    if (toolNames === undefined)
      return "All tools";
    if (toolNames.length === 0)
      return "None";
    if (toolNames.length === 1)
      return toolNames[0] || "None";
    if (toolNames.length === 2)
      return toolNames.join(" and ");
    return `${toolNames.slice(0, -1).join(", ")}, and ${toolNames[toolNames.length - 1]}`;
  };
  const memoryDisplayElement = isAutoMemoryEnabled() ? /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        bold: true,
        children: "Memory"
      }, undefined, false, undefined, this),
      ": ",
      getMemoryScopeDisplay(agent.memory)
    ]
  }, undefined, true, undefined, this) : null;
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(WizardDialogLayout, {
    subtitle: "Confirm and save",
    footerText: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
          shortcut: "s/Enter",
          action: "save"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
          shortcut: "e",
          action: "edit in your editor"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Name"
            }, undefined, false, undefined, this),
            ": ",
            agent.agentType
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Location"
            }, undefined, false, undefined, this),
            ":",
            " ",
            getNewRelativeAgentFilePath({
              source: wizardData.location,
              agentType: agent.agentType
            })
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Tools"
            }, undefined, false, undefined, this),
            ": ",
            getToolsDisplay(agent.tools)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Model"
            }, undefined, false, undefined, this),
            ": ",
            getAgentModelDisplay(agent.model)
          ]
        }, undefined, true, undefined, this),
        memoryDisplayElement,
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                bold: true,
                children: "Description"
              }, undefined, false, undefined, this),
              " (tells MiMo when to use this agent):"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginLeft: 2,
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            children: whenToUsePreview
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                bold: true,
                children: "System prompt"
              }, undefined, false, undefined, this),
              ":"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginLeft: 2,
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            children: systemPromptPreview
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        validation.warnings.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              color: "warning",
              children: "Warnings:"
            }, undefined, false, undefined, this),
            validation.warnings.map((warning, i) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " ",
                "\u2022 ",
                warning
              ]
            }, i, true, undefined, this))
          ]
        }, undefined, true, undefined, this),
        validation.errors.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              color: "error",
              children: "Errors:"
            }, undefined, false, undefined, this),
            validation.errors.map((err, i) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              color: "error",
              children: [
                " ",
                "\u2022 ",
                err
              ]
            }, i, true, undefined, this))
          ]
        }, undefined, true, undefined, this),
        error && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            color: "error",
            children: error
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          marginTop: 2,
          children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            color: "success",
            children: [
              "Press ",
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                bold: true,
                children: "s"
              }, undefined, false, undefined, this),
              " or ",
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                bold: true,
                children: "Enter"
              }, undefined, false, undefined, this),
              " to save,",
              " ",
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                bold: true,
                children: "e"
              }, undefined, false, undefined, this),
              " to save and edit"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime12;
var init_ConfirmStep = __esm(() => {
  init_src();
  init_useKeybinding();
  init_paths();
  init_agentMemory();
  init_format();
  init_agent();
  init_ConfigurableShortcutHint();
  init_wizard();
  init_WizardDialogLayout();
  init_agentFileUtils();
  init_validateAgent();
  jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx
function ConfirmStepWrapper({
  tools,
  existingAgents,
  onComplete
}) {
  const { wizardData } = useWizard();
  const [saveError, setSaveError] = import_react6.useState(null);
  const setAppState = useSetAppState();
  const saveAgent = import_react6.useCallback(async (openInEditor) => {
    if (!wizardData?.finalAgent)
      return;
    try {
      await saveAgentToFile(wizardData.location, wizardData.finalAgent.agentType, wizardData.finalAgent.whenToUse, wizardData.finalAgent.tools, wizardData.finalAgent.getSystemPrompt(), true, wizardData.finalAgent.color, wizardData.finalAgent.model, wizardData.finalAgent.memory);
      setAppState((state) => {
        if (!wizardData.finalAgent)
          return state;
        const allAgents = state.agentDefinitions.allAgents.concat(wizardData.finalAgent);
        return {
          ...state,
          agentDefinitions: {
            ...state.agentDefinitions,
            activeAgents: getActiveAgentsFromList(allAgents),
            allAgents
          }
        };
      });
      clearAgentDefinitionsCache();
      if (openInEditor) {
        const filePath = getNewAgentFilePath({
          source: wizardData.location,
          agentType: wizardData.finalAgent.agentType
        });
        await editFileInEditor(filePath);
      }
      logEvent("tengu_agent_created", {
        agent_type: wizardData.finalAgent.agentType,
        generation_method: wizardData.wasGenerated ? "generated" : "manual",
        source: wizardData.location,
        tool_count: wizardData.finalAgent.tools?.length ?? "all",
        has_custom_model: !!wizardData.finalAgent.model,
        has_custom_color: !!wizardData.finalAgent.color,
        has_memory: !!wizardData.finalAgent.memory,
        memory_scope: wizardData.finalAgent.memory ?? "none",
        ...openInEditor ? { opened_in_editor: true } : {}
      });
      const message = openInEditor ? `Created agent: ${source_default.bold(wizardData.finalAgent.agentType)} and opened in editor. ` + `If you made edits, restart to load the latest version.` : `Created agent: ${source_default.bold(wizardData.finalAgent.agentType)}`;
      onComplete(message);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to save agent");
    }
  }, [wizardData, onComplete, setAppState]);
  const handleSave = import_react6.useCallback(() => saveAgent(false), [saveAgent]);
  const handleSaveAndEdit = import_react6.useCallback(() => saveAgent(true), [saveAgent]);
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(ConfirmStep, {
    tools,
    existingAgents,
    onSave: handleSave,
    onSaveAndEdit: handleSaveAndEdit,
    error: saveError
  }, undefined, false, undefined, this);
}
var import_react6, jsx_dev_runtime13;
var init_ConfirmStepWrapper = __esm(() => {
  init_source();
  init_analytics();
  init_AppState();
  init_loadAgentsDir();
  init_loadAgentsDir();
  init_promptEditor();
  init_wizard();
  init_agentFileUtils();
  init_ConfirmStep();
  import_react6 = __toESM(require_react(), 1);
  jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/DescriptionStep.tsx
function DescriptionStep() {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  const [whenToUse, setWhenToUse] = import_react7.useState(wizardData.whenToUse || "");
  const [cursorOffset, setCursorOffset] = import_react7.useState(whenToUse.length);
  const [error, setError] = import_react7.useState(null);
  useKeybinding("confirm:no", goBack, { context: "Settings" });
  const handleExternalEditor = import_react7.useCallback(async () => {
    const result = await editPromptInEditor(whenToUse);
    if (result.content !== null) {
      setWhenToUse(result.content);
      setCursorOffset(result.content.length);
    }
  }, [whenToUse]);
  useKeybinding("chat:externalEditor", handleExternalEditor, {
    context: "Chat"
  });
  const handleSubmit = (value) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      setError("Description is required");
      return;
    }
    setError(null);
    updateWizardData({ whenToUse: trimmedValue });
    goNext();
  };
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(WizardDialogLayout, {
    subtitle: "Description (tell MiMo when to use this agent)",
    footerText: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Type",
          action: "enter text"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "continue"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ConfigurableShortcutHint, {
          action: "chat:externalEditor",
          context: "Chat",
          fallback: "ctrl+g",
          description: "open in editor"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          children: "When should MiMo use this agent?"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(TextInput, {
            value: whenToUse,
            onChange: setWhenToUse,
            onSubmit: handleSubmit,
            placeholder: "e.g., use this agent after you're done writing code...",
            columns: 80,
            cursorOffset,
            onChangeCursorOffset: setCursorOffset,
            focus: true,
            showCursor: true
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        error && /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
            color: "error",
            children: error
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react7, jsx_dev_runtime14;
var init_DescriptionStep = __esm(() => {
  init_src();
  init_useKeybinding();
  init_promptEditor();
  init_ConfigurableShortcutHint();
  init_TextInput();
  init_wizard();
  init_WizardDialogLayout();
  import_react7 = __toESM(require_react(), 1);
  jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/generateAgent.ts
async function generateAgent(userPrompt, model, existingIdentifiers, abortSignal) {
  const existingList = existingIdentifiers.length > 0 ? `

IMPORTANT: The following identifiers already exist and must NOT be used: ${existingIdentifiers.join(", ")}` : "";
  const prompt = `Create an agent configuration based on this request: "${userPrompt}".${existingList}
  Return ONLY the JSON object, no other text.`;
  const userMessage = createUserMessage({ content: prompt });
  const userContext = await getUserContext();
  const messagesWithContext = prependUserContext([userMessage], userContext);
  const systemPrompt = isAutoMemoryEnabled() ? AGENT_CREATION_SYSTEM_PROMPT + AGENT_MEMORY_INSTRUCTIONS : AGENT_CREATION_SYSTEM_PROMPT;
  const langfuseTrace = isLangfuseEnabled() ? createTrace({
    sessionId: getSessionId(),
    model,
    provider: getAPIProvider(),
    name: "agent-creation"
  }) : null;
  const response = await queryModelWithoutStreaming({
    messages: normalizeMessagesForAPI(messagesWithContext),
    systemPrompt: asSystemPrompt([systemPrompt]),
    thinkingConfig: { type: "disabled" },
    tools: [],
    signal: abortSignal,
    options: {
      getToolPermissionContext: async () => getEmptyToolPermissionContext(),
      model,
      toolChoice: undefined,
      agents: [],
      isNonInteractiveSession: false,
      hasAppendSystemPrompt: false,
      querySource: "agent_creation",
      mcpTools: [],
      langfuseTrace
    }
  });
  endTrace(langfuseTrace);
  const textBlocks = (Array.isArray(response.message.content) ? response.message.content : []).filter((block) => block.type === "text");
  const responseText = textBlocks.map((block) => block.text).join(`
`);
  let parsed;
  try {
    parsed = jsonParse(responseText.trim());
  } catch {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON object found in response");
    }
    parsed = jsonParse(jsonMatch[0]);
  }
  if (!parsed.identifier || !parsed.whenToUse || !parsed.systemPrompt) {
    throw new Error("Invalid agent configuration generated");
  }
  logEvent("tengu_agent_definition_generated", {
    agent_identifier: parsed.identifier
  });
  return {
    identifier: parsed.identifier,
    whenToUse: parsed.whenToUse,
    systemPrompt: parsed.systemPrompt
  };
}
var AGENT_CREATION_SYSTEM_PROMPT, AGENT_MEMORY_INSTRUCTIONS = `

7. **Agent Memory Instructions**: If the user mentions "memory", "remember", "learn", "persist", or similar concepts, OR if the agent would benefit from building up knowledge across conversations (e.g., code reviewers learning patterns, architects learning codebase structure, etc.), include domain-specific memory update instructions in the systemPrompt.

   Add a section like this to the systemPrompt, tailored to the agent's specific domain:

   "**Update your agent memory** as you discover [domain-specific items]. This builds up institutional knowledge across conversations. Write concise notes about what you found and where.

   Examples of what to record:
   - [domain-specific item 1]
   - [domain-specific item 2]
   - [domain-specific item 3]"

   Examples of domain-specific memory instructions:
   - For a code-reviewer: "Update your agent memory as you discover code patterns, style conventions, common issues, and architectural decisions in this codebase."
   - For a test-runner: "Update your agent memory as you discover test patterns, common failure modes, flaky tests, and testing best practices."
   - For an architect: "Update your agent memory as you discover codepaths, library locations, key architectural decisions, and component relationships."
   - For a documentation writer: "Update your agent memory as you discover documentation patterns, API structures, and terminology conventions."

   The memory instructions should be specific to what the agent would naturally learn while performing its core tasks.
`;
var init_generateAgent = __esm(() => {
  init_context();
  init_claude();
  init_Tool();
  init_constants2();
  init_api();
  init_messages();
  init_paths();
  init_analytics();
  init_langfuse();
  init_state();
  init_providers();
  init_slowOperations();
  init_systemPromptType();
  AGENT_CREATION_SYSTEM_PROMPT = `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6 **Example agent descriptions**:
  - in the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
  - examples should be of the form:
    - <example>
      Context: The user is creating a test-runner agent that should be called after a logical chunk of code is written.
      user: "Please write a function that checks if a number is prime"
      assistant: "Here is the relevant function: "
      <function call omitted for brevity only for this example>
      <commentary>
      Since a significant piece of code was written, use the ${AGENT_TOOL_NAME} tool to launch the test-runner agent to run the tests.
      </commentary>
      assistant: "Now let me use the test-runner agent to run the tests"
    </example>
    - <example>
      Context: User is creating an agent to respond to the word "hello" with a friendly jok.
      user: "Hello"
      assistant: "I'm going to use the ${AGENT_TOOL_NAME} tool to launch the greeting-responder agent to respond with a friendly joke"
      <commentary>
      Since the user is greeting, use the greeting-responder agent to respond with a friendly joke. 
      </commentary>
    </example>
  - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
- NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

Your output must be a valid JSON object with exactly these fields:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'test-runner', 'api-docs-writer', 'code-formatter')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.
`;
});

// src/components/agents/new-agent-creation/wizard-steps/GenerateStep.tsx
function GenerateStep() {
  const { updateWizardData, goBack, goToStep, wizardData } = useWizard();
  const [prompt, setPrompt] = import_react8.useState(wizardData.generationPrompt || "");
  const [isGenerating, setIsGenerating] = import_react8.useState(false);
  const [error, setError] = import_react8.useState(null);
  const [cursorOffset, setCursorOffset] = import_react8.useState(prompt.length);
  const model = useMainLoopModel();
  const abortControllerRef = import_react8.useRef(null);
  const handleCancelGeneration = import_react8.useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsGenerating(false);
      setError("Generation cancelled");
    }
  }, []);
  useKeybinding("confirm:no", handleCancelGeneration, {
    context: "Settings",
    isActive: isGenerating
  });
  const handleExternalEditor = import_react8.useCallback(async () => {
    const result = await editPromptInEditor(prompt);
    if (result.content !== null) {
      setPrompt(result.content);
      setCursorOffset(result.content.length);
    }
  }, [prompt]);
  useKeybinding("chat:externalEditor", handleExternalEditor, {
    context: "Chat",
    isActive: !isGenerating
  });
  const handleGoBack = import_react8.useCallback(() => {
    updateWizardData({
      generationPrompt: "",
      agentType: "",
      systemPrompt: "",
      whenToUse: "",
      generatedAgent: undefined,
      wasGenerated: false
    });
    setPrompt("");
    setError(null);
    goBack();
  }, [updateWizardData, goBack]);
  useKeybinding("confirm:no", handleGoBack, {
    context: "Settings",
    isActive: !isGenerating
  });
  const handleGenerate = async () => {
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) {
      setError("Please describe what the agent should do");
      return;
    }
    setError(null);
    setIsGenerating(true);
    updateWizardData({
      generationPrompt: trimmedPrompt,
      isGenerating: true
    });
    const controller = createAbortController();
    abortControllerRef.current = controller;
    try {
      const generated = await generateAgent(trimmedPrompt, model, [], controller.signal);
      updateWizardData({
        agentType: generated.identifier,
        whenToUse: generated.whenToUse,
        systemPrompt: generated.systemPrompt,
        generatedAgent: generated,
        isGenerating: false,
        wasGenerated: true
      });
      goToStep(6);
    } catch (err) {
      if (err instanceof APIUserAbortError) {} else if (err instanceof Error && !err.message.includes("No assistant message found")) {
        setError(err.message || "Failed to generate agent");
      }
      updateWizardData({ isGenerating: false });
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null;
    }
  };
  const subtitle = "Describe what this agent should do and when it should be used (be comprehensive for best results)";
  if (isGenerating) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(WizardDialogLayout, {
      subtitle,
      footerText: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "cancel"
      }, undefined, false, undefined, this),
      children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Spinner, {}, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "suggestion",
            children: " Generating agent from description..."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(WizardDialogLayout, {
    subtitle,
    footerText: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:yes",
          context: "Confirmation",
          fallback: "Enter",
          description: "submit"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
          action: "chat:externalEditor",
          context: "Chat",
          fallback: "ctrl+g",
          description: "open in editor"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        error && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "error",
            children: error
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(TextInput, {
          value: prompt,
          onChange: setPrompt,
          onSubmit: handleGenerate,
          placeholder: "e.g., Help me write unit tests for my code...",
          columns: 80,
          cursorOffset,
          onChangeCursorOffset: setCursorOffset,
          focus: true,
          showCursor: true
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react8, jsx_dev_runtime15;
var init_GenerateStep = __esm(() => {
  init_sdk();
  init_useMainLoopModel();
  init_src();
  init_useKeybinding();
  init_abortController();
  init_promptEditor();
  init_ConfigurableShortcutHint();
  init_Spinner();
  init_TextInput();
  init_wizard();
  init_WizardDialogLayout();
  init_generateAgent();
  import_react8 = __toESM(require_react(), 1);
  jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/LocationStep.tsx
function LocationStep() {
  const { goNext, updateWizardData, cancel } = useWizard();
  const locationOptions = [
    {
      label: "Project (.claude/agents/)",
      value: "projectSettings"
    },
    {
      label: "Personal (~/.claude/agents/)",
      value: "userSettings"
    }
  ];
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(WizardDialogLayout, {
    subtitle: "Choose location",
    footerText: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ThemedBox_default, {
      children: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(Select, {
        options: locationOptions,
        onChange: (value) => {
          updateWizardData({ location: value });
          goNext();
        },
        onCancel: () => cancel()
      }, "location-select", false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime16;
var init_LocationStep = __esm(() => {
  init_src();
  init_ConfigurableShortcutHint();
  init_select();
  init_wizard();
  init_WizardDialogLayout();
  jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/MemoryStep.tsx
function MemoryStep() {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  useKeybinding("confirm:no", goBack, { context: "Confirmation" });
  const isUserScope = wizardData.location === "userSettings";
  const memoryOptions = isUserScope ? [
    {
      label: "User scope (~/.claude/agent-memory/) (Recommended)",
      value: "user"
    },
    { label: "None (no persistent memory)", value: "none" },
    { label: "Project scope (.claude/agent-memory/)", value: "project" },
    { label: "Local scope (.claude/agent-memory-local/)", value: "local" }
  ] : [
    {
      label: "Project scope (.claude/agent-memory/) (Recommended)",
      value: "project"
    },
    { label: "None (no persistent memory)", value: "none" },
    { label: "User scope (~/.claude/agent-memory/)", value: "user" },
    { label: "Local scope (.claude/agent-memory-local/)", value: "local" }
  ];
  const handleSelect = (value) => {
    const memory = value === "none" ? undefined : value;
    const agentType = wizardData.finalAgent?.agentType;
    updateWizardData({
      selectedMemory: memory,
      finalAgent: wizardData.finalAgent ? {
        ...wizardData.finalAgent,
        memory,
        getSystemPrompt: isAutoMemoryEnabled() && memory && agentType ? () => wizardData.systemPrompt + `

` + loadAgentMemoryPrompt(agentType, memory) : () => wizardData.systemPrompt
      } : undefined
    });
    goNext();
  };
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(WizardDialogLayout, {
    subtitle: "Configure agent memory",
    footerText: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
      children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Select, {
        options: memoryOptions,
        onChange: handleSelect,
        onCancel: goBack
      }, "memory-select", false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime17;
var init_MemoryStep = __esm(() => {
  init_src();
  init_useKeybinding();
  init_paths();
  init_agentMemory();
  init_ConfigurableShortcutHint();
  init_select();
  init_wizard();
  init_WizardDialogLayout();
  jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx
function MethodStep() {
  const { goNext, goBack, updateWizardData, goToStep } = useWizard();
  const methodOptions = [
    {
      label: "Generate with MiMo (recommended)",
      value: "generate"
    },
    {
      label: "Manual configuration",
      value: "manual"
    }
  ];
  return /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(WizardDialogLayout, {
    subtitle: "Creation method",
    footerText: /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(ThemedBox_default, {
      children: /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(Select, {
        options: methodOptions,
        onChange: (value) => {
          const method = value;
          updateWizardData({
            method,
            wasGenerated: method === "generate"
          });
          if (method === "generate") {
            goNext();
          } else {
            goToStep(3);
          }
        },
        onCancel: () => goBack()
      }, "method-select", false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime18;
var init_MethodStep = __esm(() => {
  init_src();
  init_ConfigurableShortcutHint();
  init_select();
  init_wizard();
  init_WizardDialogLayout();
  jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/ModelStep.tsx
function ModelStep() {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  const handleComplete = (model) => {
    updateWizardData({ selectedModel: model });
    goNext();
  };
  return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(WizardDialogLayout, {
    subtitle: "Select model",
    footerText: /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ModelSelector, {
      initialModel: wizardData.selectedModel,
      onComplete: handleComplete,
      onCancel: goBack
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime19;
var init_ModelStep = __esm(() => {
  init_ConfigurableShortcutHint();
  init_src();
  init_wizard();
  init_WizardDialogLayout();
  init_ModelSelector();
  jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/PromptStep.tsx
function PromptStep() {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  const [systemPrompt, setSystemPrompt] = import_react9.useState(wizardData.systemPrompt || "");
  const [cursorOffset, setCursorOffset] = import_react9.useState(systemPrompt.length);
  const [error, setError] = import_react9.useState(null);
  useKeybinding("confirm:no", goBack, { context: "Settings" });
  const handleExternalEditor = import_react9.useCallback(async () => {
    const result = await editPromptInEditor(systemPrompt);
    if (result.content !== null) {
      setSystemPrompt(result.content);
      setCursorOffset(result.content.length);
    }
  }, [systemPrompt]);
  useKeybinding("chat:externalEditor", handleExternalEditor, {
    context: "Chat"
  });
  const handleSubmit = () => {
    const trimmedPrompt = systemPrompt.trim();
    if (!trimmedPrompt) {
      setError("System prompt is required");
      return;
    }
    setError(null);
    updateWizardData({ systemPrompt: trimmedPrompt });
    goNext();
  };
  return /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(WizardDialogLayout, {
    subtitle: "System prompt",
    footerText: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Type",
          action: "enter text"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "continue"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ConfigurableShortcutHint, {
          action: "chat:externalEditor",
          context: "Chat",
          fallback: "ctrl+g",
          description: "open in editor"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedText, {
          children: "Enter the system prompt for your agent:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Be comprehensive for best results"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(TextInput, {
            value: systemPrompt,
            onChange: setSystemPrompt,
            onSubmit: handleSubmit,
            placeholder: "You are a helpful code reviewer who...",
            columns: 80,
            cursorOffset,
            onChangeCursorOffset: setCursorOffset,
            focus: true,
            showCursor: true
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        error && /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedText, {
            color: "error",
            children: error
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react9, jsx_dev_runtime20;
var init_PromptStep = __esm(() => {
  init_src();
  init_useKeybinding();
  init_promptEditor();
  init_ConfigurableShortcutHint();
  init_TextInput();
  init_wizard();
  init_WizardDialogLayout();
  import_react9 = __toESM(require_react(), 1);
  jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/ToolsStep.tsx
function ToolsStep({ tools }) {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  const handleComplete = (selectedTools) => {
    updateWizardData({ selectedTools });
    goNext();
  };
  const initialTools = wizardData.selectedTools;
  return /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(WizardDialogLayout, {
    subtitle: "Select tools",
    footerText: /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "toggle selection"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(ToolSelector, {
      tools,
      initialTools,
      onComplete: handleComplete,
      onCancel: goBack
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime21;
var init_ToolsStep = __esm(() => {
  init_src();
  init_ConfigurableShortcutHint();
  init_wizard();
  init_WizardDialogLayout();
  init_ToolSelector();
  jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx
function TypeStep(_props) {
  const { goNext, goBack, updateWizardData, wizardData } = useWizard();
  const [agentType, setAgentType] = import_react10.useState(wizardData.agentType || "");
  const [error, setError] = import_react10.useState(null);
  const [cursorOffset, setCursorOffset] = import_react10.useState(agentType.length);
  useKeybinding("confirm:no", goBack, { context: "Settings" });
  const handleSubmit = (value) => {
    const trimmedValue = value.trim();
    const validationError = validateAgentType(trimmedValue);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    updateWizardData({ agentType: trimmedValue });
    goNext();
  };
  return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(WizardDialogLayout, {
    subtitle: "Agent type (identifier)",
    footerText: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Type",
          action: "enter text"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "continue"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedText, {
          children: "Enter a unique identifier for your agent:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(TextInput, {
            value: agentType,
            onChange: setAgentType,
            onSubmit: handleSubmit,
            placeholder: "e.g., test-runner, tech-lead, etc",
            columns: 60,
            cursorOffset,
            onChangeCursorOffset: setCursorOffset,
            focus: true,
            showCursor: true
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        error && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedText, {
            color: "error",
            children: error
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react10, jsx_dev_runtime22;
var init_TypeStep = __esm(() => {
  init_src();
  init_useKeybinding();
  init_ConfigurableShortcutHint();
  init_TextInput();
  init_wizard();
  init_WizardDialogLayout();
  init_validateAgent();
  import_react10 = __toESM(require_react(), 1);
  jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/new-agent-creation/CreateAgentWizard.tsx
function CreateAgentWizard({
  tools,
  existingAgents,
  onComplete,
  onCancel
}) {
  const steps = [
    LocationStep,
    MethodStep,
    GenerateStep,
    () => /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(TypeStep, {
      existingAgents
    }, undefined, false, undefined, this),
    PromptStep,
    DescriptionStep,
    () => /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ToolsStep, {
      tools
    }, undefined, false, undefined, this),
    ModelStep,
    ColorStep,
    ...isAutoMemoryEnabled() ? [MemoryStep] : [],
    () => /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ConfirmStepWrapper, {
      tools,
      existingAgents,
      onComplete
    }, undefined, false, undefined, this)
  ];
  return /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(WizardProvider, {
    steps,
    initialData: {},
    onComplete: () => {},
    onCancel,
    title: "Create new agent",
    showStepCounter: false
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime23;
var init_CreateAgentWizard = __esm(() => {
  init_paths();
  init_wizard();
  init_ColorStep();
  init_ConfirmStepWrapper();
  init_DescriptionStep();
  init_GenerateStep();
  init_LocationStep();
  init_MemoryStep();
  init_MethodStep();
  init_ModelStep();
  init_PromptStep();
  init_ToolsStep();
  init_TypeStep();
  jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/agents/AgentsMenu.tsx
function AgentsMenu({ tools, onExit }) {
  const [modeState, setModeState] = import_react11.useState({
    mode: "list-agents",
    source: "all"
  });
  const agentDefinitions = useAppState((s) => s.agentDefinitions);
  const mcpTools = useAppState((s) => s.mcp.tools);
  const toolPermissionContext = useAppState((s) => s.toolPermissionContext);
  const setAppState = useSetAppState();
  const { allAgents, activeAgents: agents } = agentDefinitions;
  const [changes, setChanges] = import_react11.useState([]);
  const mergedTools = useMergedTools(tools, mcpTools, toolPermissionContext);
  useExitOnCtrlCDWithKeybindings();
  const agentsBySource = import_react11.useMemo(() => ({
    "built-in": allAgents.filter((a) => a.source === "built-in"),
    userSettings: allAgents.filter((a) => a.source === "userSettings"),
    projectSettings: allAgents.filter((a) => a.source === "projectSettings"),
    policySettings: allAgents.filter((a) => a.source === "policySettings"),
    localSettings: allAgents.filter((a) => a.source === "localSettings"),
    flagSettings: allAgents.filter((a) => a.source === "flagSettings"),
    plugin: allAgents.filter((a) => a.source === "plugin"),
    all: allAgents
  }), [allAgents]);
  const handleAgentCreated = import_react11.useCallback((message) => {
    setChanges((prev) => [...prev, message]);
    setModeState({ mode: "list-agents", source: "all" });
  }, []);
  const handleAgentDeleted = import_react11.useCallback(async (agent) => {
    try {
      await deleteAgentFromFile(agent);
      setAppState((state) => {
        const allAgents2 = state.agentDefinitions.allAgents.filter((a) => !(a.agentType === agent.agentType && a.source === agent.source));
        return {
          ...state,
          agentDefinitions: {
            ...state.agentDefinitions,
            allAgents: allAgents2,
            activeAgents: getActiveAgentsFromList(allAgents2)
          }
        };
      });
      setChanges((prev) => [
        ...prev,
        `Deleted agent: ${source_default.bold(agent.agentType)}`
      ]);
      setModeState({ mode: "list-agents", source: "all" });
    } catch (error) {
      logError(toError(error));
    }
  }, [setAppState]);
  switch (modeState.mode) {
    case "list-agents": {
      const agentsToShow = modeState.source === "all" ? [
        ...agentsBySource["built-in"],
        ...agentsBySource["userSettings"],
        ...agentsBySource["projectSettings"],
        ...agentsBySource["localSettings"],
        ...agentsBySource["policySettings"],
        ...agentsBySource["flagSettings"],
        ...agentsBySource["plugin"]
      ] : agentsBySource[modeState.source];
      const allResolved = resolveAgentOverrides(agentsToShow, agents);
      const resolvedAgents = allResolved;
      return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(jsx_dev_runtime24.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentsList, {
            source: modeState.source,
            agents: resolvedAgents,
            onBack: () => {
              const exitMessage = changes.length > 0 ? `Agent changes:
${changes.join(`
`)}` : undefined;
              onExit(exitMessage ?? "Agents dialog dismissed", {
                display: changes.length === 0 ? "system" : undefined
              });
            },
            onSelect: (agent) => setModeState({
              mode: "agent-menu",
              agent,
              previousMode: modeState
            }),
            onCreateNew: () => setModeState({ mode: "create-agent" }),
            changes
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentNavigationFooter, {}, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "create-agent":
      return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(CreateAgentWizard, {
        tools: mergedTools,
        existingAgents: agents,
        onComplete: handleAgentCreated,
        onCancel: () => setModeState({ mode: "list-agents", source: "all" })
      }, undefined, false, undefined, this);
    case "agent-menu": {
      const freshAgent = allAgents.find((a) => a.agentType === modeState.agent.agentType && a.source === modeState.agent.source);
      const agentToUse = freshAgent || modeState.agent;
      const isEditable = agentToUse.source !== "built-in" && agentToUse.source !== "plugin" && agentToUse.source !== "flagSettings";
      const menuItems = [
        { label: "View agent", value: "view" },
        ...isEditable ? [
          { label: "Edit agent", value: "edit" },
          { label: "Delete agent", value: "delete" }
        ] : [],
        { label: "Back", value: "back" }
      ];
      const handleMenuSelect = (value) => {
        switch (value) {
          case "view":
            setModeState({
              mode: "view-agent",
              agent: agentToUse,
              previousMode: modeState.previousMode
            });
            break;
          case "edit":
            setModeState({
              mode: "edit-agent",
              agent: agentToUse,
              previousMode: modeState
            });
            break;
          case "delete":
            setModeState({
              mode: "delete-confirm",
              agent: agentToUse,
              previousMode: modeState
            });
            break;
          case "back":
            setModeState(modeState.previousMode);
            break;
        }
      };
      return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(jsx_dev_runtime24.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(Dialog, {
            title: modeState.agent.agentType,
            onCancel: () => setModeState(modeState.previousMode),
            hideInputGuide: true,
            children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              children: [
                /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(Select, {
                  options: menuItems,
                  onChange: handleMenuSelect,
                  onCancel: () => setModeState(modeState.previousMode)
                }, undefined, false, undefined, this),
                changes.length > 0 && /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedBox_default, {
                  marginTop: 1,
                  children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: changes[changes.length - 1]
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentNavigationFooter, {}, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "view-agent": {
      const freshAgent = allAgents.find((a) => a.agentType === modeState.agent.agentType && a.source === modeState.agent.source);
      const agentToDisplay = freshAgent || modeState.agent;
      return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(jsx_dev_runtime24.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(Dialog, {
            title: agentToDisplay.agentType,
            onCancel: () => setModeState({
              mode: "agent-menu",
              agent: agentToDisplay,
              previousMode: modeState.previousMode
            }),
            hideInputGuide: true,
            children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentDetail, {
              agent: agentToDisplay,
              tools: mergedTools,
              allAgents,
              onBack: () => setModeState({
                mode: "agent-menu",
                agent: agentToDisplay,
                previousMode: modeState.previousMode
              })
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentNavigationFooter, {
            instructions: "Press Enter or Esc to go back"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "delete-confirm": {
      const deleteOptions = [
        { label: "Yes, delete", value: "yes" },
        { label: "No, cancel", value: "no" }
      ];
      return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(jsx_dev_runtime24.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(Dialog, {
            title: "Delete agent",
            onCancel: () => {
              if ("previousMode" in modeState)
                setModeState(modeState.previousMode);
            },
            color: "error",
            children: [
              /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedText, {
                children: [
                  "Are you sure you want to delete the agent",
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedText, {
                    bold: true,
                    children: modeState.agent.agentType
                  }, undefined, false, undefined, this),
                  "?"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedBox_default, {
                marginTop: 1,
                children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "Source: ",
                    modeState.agent.source
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(ThemedBox_default, {
                marginTop: 1,
                children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(Select, {
                  options: deleteOptions,
                  onChange: (value) => {
                    if (value === "yes") {
                      handleAgentDeleted(modeState.agent);
                    } else {
                      if ("previousMode" in modeState) {
                        setModeState(modeState.previousMode);
                      }
                    }
                  },
                  onCancel: () => {
                    if ("previousMode" in modeState) {
                      setModeState(modeState.previousMode);
                    }
                  }
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentNavigationFooter, {
            instructions: "Press \u2191\u2193 to navigate, Enter to select, Esc to cancel"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "edit-agent": {
      const freshAgent = allAgents.find((a) => a.agentType === modeState.agent.agentType && a.source === modeState.agent.source);
      const agentToEdit = freshAgent || modeState.agent;
      return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(jsx_dev_runtime24.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(Dialog, {
            title: `Edit agent: ${agentToEdit.agentType}`,
            onCancel: () => setModeState(modeState.previousMode),
            hideInputGuide: true,
            children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentEditor, {
              agent: agentToEdit,
              tools: mergedTools,
              onSaved: (message) => {
                handleAgentCreated(message);
                setModeState(modeState.previousMode);
              },
              onBack: () => setModeState(modeState.previousMode)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(AgentNavigationFooter, {}, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    default:
      return null;
  }
}
var import_react11, jsx_dev_runtime24;
var init_AgentsMenu = __esm(() => {
  init_source();
  init_useExitOnCtrlCDWithKeybindings();
  init_useMergedTools();
  init_src();
  init_AppState();
  init_agentDisplay();
  init_loadAgentsDir();
  init_errors();
  init_log();
  init_select();
  init_src();
  init_AgentDetail();
  init_AgentEditor();
  init_AgentNavigationFooter();
  init_AgentsList();
  init_agentFileUtils();
  init_CreateAgentWizard();
  import_react11 = __toESM(require_react(), 1);
  jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/agents/agents.tsx
async function call(onDone, context) {
  const appState = context.getAppState();
  const permissionContext = appState.toolPermissionContext;
  const tools = getTools(permissionContext);
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV(AgentsMenu, {
    tools,
    onExit: onDone
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime25;
var init_agents = __esm(() => {
  init_AgentsMenu();
  init_tools();
  jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime(), 1);
});
init_agents();

export {
  call
};
