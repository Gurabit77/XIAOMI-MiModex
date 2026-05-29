// @bun
import {
  ValidationErrorsList,
  init_ValidationErrorsList
} from "./chunk-vzsxa0zq.js";
import {
  init_useSettingsErrors,
  useSettingsErrors
} from "./chunk-3k6prj0g.js";
import {
  PressEnterToContinue,
  init_PressEnterToContinue
} from "./chunk-ce4khb1y.js";
import {
  detectUnreachableRules,
  init_shadowedRuleDetection
} from "./chunk-ssbt9t59.js";
import {
  AGENT_DESCRIPTIONS_THRESHOLD,
  getAgentDescriptionsTotalTokens,
  init_statusNoticeHelpers
} from "./chunk-95sm06gp.js";
import {
  McpParsingWarnings,
  init_McpParsingWarnings
} from "./chunk-ntjeb1yh.js";
import {
  BASH_MAX_OUTPUT_DEFAULT,
  BASH_MAX_OUTPUT_UPPER_LIMIT,
  MAX_MEMORY_CHARACTER_COUNT,
  SandboxManager,
  TASK_MAX_OUTPUT_DEFAULT,
  TASK_MAX_OUTPUT_UPPER_LIMIT,
  cleanupStaleLocks,
  countMcpToolTokens,
  getAllLockInfo,
  getCachedKeybindingWarnings,
  getDoctorDiagnostic,
  getGcsDistTags,
  getKeybindingsPath,
  getLargeMemoryFiles,
  getMemoryFiles,
  getNpmDistTags,
  getPluginErrorMessage,
  init_AppState,
  init_analyzeContext,
  init_autoUpdater,
  init_claudemd,
  init_doctorDiagnostic,
  init_envValidation,
  init_loadUserBindings,
  init_outputFormatting,
  init_outputLimits,
  init_pidLock,
  init_plugin,
  init_sandbox_adapter,
  init_tokenEstimation,
  isKeybindingCustomizationEnabled,
  isPidBasedLockingEnabled,
  roughTokenCountEstimation,
  useAppState,
  validateBoundedIntEnvVar
} from "./chunk-ktw919wt.js";
import {
  getXDGStateHome,
  init_xdg
} from "./chunk-et824jj8.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  getInitialSettings,
  getMainLoopModel,
  getModelMaxOutputTokens,
  init_context,
  init_file,
  init_model,
  init_permissionRuleParser,
  init_settings1 as init_settings,
  init_stringUtils,
  pathExists,
  permissionRuleValueToString,
  plural
} from "./chunk-1ghcng4e.js";
import {
  Pane,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybindings
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  getOriginalCwd,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/KeybindingWarnings.tsx
function KeybindingWarnings() {
  if (!isKeybindingCustomizationEnabled()) {
    return null;
  }
  const warnings = getCachedKeybindingWarnings();
  if (warnings.length === 0) {
    return null;
  }
  const errors = warnings.filter((w) => w.severity === "error");
  const warns = warnings.filter((w) => w.severity === "warning");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        color: errors.length > 0 ? "error" : "warning",
        children: "Keybinding Configuration Issues"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Location: "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: getKeybindingsPath()
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginLeft: 1,
        flexDirection: "column",
        marginTop: 1,
        children: [
          errors.map((error, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "\u2514 "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "error",
                    children: "[Error]"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      " ",
                      error.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              error.suggestion && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                marginLeft: 3,
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "\u2192 ",
                    error.suggestion
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, `error-${i}`, true, undefined, this)),
          warns.map((warning, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "\u2514 "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "warning",
                    children: "[Warning]"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      " ",
                      warning.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              warning.suggestion && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                marginLeft: 3,
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "\u2192 ",
                    warning.suggestion
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, `warning-${i}`, true, undefined, this))
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime;
var init_KeybindingWarnings = __esm(() => {
  init_src();
  init_loadUserBindings();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxDoctorSection.tsx
function SandboxDoctorSection() {
  if (!SandboxManager.isSupportedPlatform()) {
    return null;
  }
  if (!SandboxManager.isSandboxEnabledInSettings()) {
    return null;
  }
  const depCheck = SandboxManager.checkDependencies();
  const hasErrors = depCheck.errors.length > 0;
  const hasWarnings = depCheck.warnings.length > 0;
  if (!hasErrors && !hasWarnings) {
    return null;
  }
  const statusColor = hasErrors ? "error" : "warning";
  const statusText = hasErrors ? "Missing dependencies" : "Available (with warnings)";
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        bold: true,
        children: "Sandbox"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        children: [
          "\u2514 Status: ",
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            color: statusColor,
            children: statusText
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      depCheck.errors.map((e, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: "error",
        children: [
          "\u2514 ",
          e
        ]
      }, i, true, undefined, this)),
      depCheck.warnings.map((w, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: "warning",
        children: [
          "\u2514 ",
          w
        ]
      }, i, true, undefined, this)),
      hasErrors && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: "\u2514 Run /sandbox for install instructions"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2;
var init_SandboxDoctorSection = __esm(() => {
  init_src();
  init_sandbox_adapter();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/utils/doctorContextWarnings.ts
async function checkClaudeMdFiles() {
  const largeFiles = getLargeMemoryFiles(await getMemoryFiles());
  if (largeFiles.length === 0) {
    return null;
  }
  const details = largeFiles.sort((a, b) => b.content.length - a.content.length).map((file) => `${file.path}: ${file.content.length.toLocaleString()} chars`);
  const message = largeFiles.length === 1 ? `Large CLAUDE.md file detected (${largeFiles[0].content.length.toLocaleString()} chars > ${MAX_MEMORY_CHARACTER_COUNT.toLocaleString()})` : `${largeFiles.length} large CLAUDE.md files detected (each > ${MAX_MEMORY_CHARACTER_COUNT.toLocaleString()} chars)`;
  return {
    type: "claudemd_files",
    severity: "warning",
    message,
    details,
    currentValue: largeFiles.length,
    threshold: MAX_MEMORY_CHARACTER_COUNT
  };
}
async function checkAgentDescriptions(agentInfo) {
  if (!agentInfo) {
    return null;
  }
  const totalTokens = getAgentDescriptionsTotalTokens(agentInfo);
  if (totalTokens <= AGENT_DESCRIPTIONS_THRESHOLD) {
    return null;
  }
  const agentTokens = agentInfo.activeAgents.filter((a) => a.source !== "built-in").map((agent) => {
    const description = `${agent.agentType}: ${agent.whenToUse}`;
    return {
      name: agent.agentType,
      tokens: roughTokenCountEstimation(description)
    };
  }).sort((a, b) => b.tokens - a.tokens);
  const details = agentTokens.slice(0, 5).map((agent) => `${agent.name}: ~${agent.tokens.toLocaleString()} tokens`);
  if (agentTokens.length > 5) {
    details.push(`(${agentTokens.length - 5} more custom agents)`);
  }
  return {
    type: "agent_descriptions",
    severity: "warning",
    message: `Large agent descriptions (~${totalTokens.toLocaleString()} tokens > ${AGENT_DESCRIPTIONS_THRESHOLD.toLocaleString()})`,
    details,
    currentValue: totalTokens,
    threshold: AGENT_DESCRIPTIONS_THRESHOLD
  };
}
async function checkMcpTools(tools, getToolPermissionContext, agentInfo) {
  const mcpTools = tools.filter((tool) => tool.isMcp);
  if (mcpTools.length === 0) {
    return null;
  }
  try {
    const model = getMainLoopModel();
    const { mcpToolTokens, mcpToolDetails } = await countMcpToolTokens(tools, getToolPermissionContext, agentInfo, model);
    if (mcpToolTokens <= MCP_TOOLS_THRESHOLD) {
      return null;
    }
    const toolsByServer = new Map;
    for (const tool of mcpToolDetails) {
      const parts = tool.name.split("__");
      const serverName = parts[1] || "unknown";
      const current = toolsByServer.get(serverName) || { count: 0, tokens: 0 };
      toolsByServer.set(serverName, {
        count: current.count + 1,
        tokens: current.tokens + tool.tokens
      });
    }
    const sortedServers = Array.from(toolsByServer.entries()).sort((a, b) => b[1].tokens - a[1].tokens);
    const details = sortedServers.slice(0, 5).map(([name, info]) => `${name}: ${info.count} tools (~${info.tokens.toLocaleString()} tokens)`);
    if (sortedServers.length > 5) {
      details.push(`(${sortedServers.length - 5} more servers)`);
    }
    return {
      type: "mcp_tools",
      severity: "warning",
      message: `Large MCP tools context (~${mcpToolTokens.toLocaleString()} tokens > ${MCP_TOOLS_THRESHOLD.toLocaleString()})`,
      details,
      currentValue: mcpToolTokens,
      threshold: MCP_TOOLS_THRESHOLD
    };
  } catch (_error) {
    const estimatedTokens = mcpTools.reduce((total, tool) => {
      const chars = (tool.name?.length || 0) + tool.description.length;
      return total + roughTokenCountEstimation(chars.toString());
    }, 0);
    if (estimatedTokens <= MCP_TOOLS_THRESHOLD) {
      return null;
    }
    return {
      type: "mcp_tools",
      severity: "warning",
      message: `Large MCP tools context (~${estimatedTokens.toLocaleString()} tokens estimated > ${MCP_TOOLS_THRESHOLD.toLocaleString()})`,
      details: [
        `${mcpTools.length} MCP tools detected (token count estimated)`
      ],
      currentValue: estimatedTokens,
      threshold: MCP_TOOLS_THRESHOLD
    };
  }
}
async function checkUnreachableRules(getToolPermissionContext) {
  const context = await getToolPermissionContext();
  const sandboxAutoAllowEnabled = SandboxManager.isSandboxingEnabled() && SandboxManager.isAutoAllowBashIfSandboxedEnabled();
  const unreachable = detectUnreachableRules(context, {
    sandboxAutoAllowEnabled
  });
  if (unreachable.length === 0) {
    return null;
  }
  const details = unreachable.flatMap((r) => [
    `${permissionRuleValueToString(r.rule.ruleValue)}: ${r.reason}`,
    `  Fix: ${r.fix}`
  ]);
  return {
    type: "unreachable_rules",
    severity: "warning",
    message: `${unreachable.length} ${plural(unreachable.length, "unreachable permission rule")} detected`,
    details,
    currentValue: unreachable.length,
    threshold: 0
  };
}
async function checkContextWarnings(tools, agentInfo, getToolPermissionContext) {
  const [claudeMdWarning, agentWarning, mcpWarning, unreachableRulesWarning] = await Promise.all([
    checkClaudeMdFiles(),
    checkAgentDescriptions(agentInfo),
    checkMcpTools(tools, getToolPermissionContext, agentInfo),
    checkUnreachableRules(getToolPermissionContext)
  ]);
  return {
    claudeMdWarning,
    agentWarning,
    mcpWarning,
    unreachableRulesWarning
  };
}
var MCP_TOOLS_THRESHOLD = 25000;
var init_doctorContextWarnings = __esm(() => {
  init_tokenEstimation();
  init_analyzeContext();
  init_claudemd();
  init_model();
  init_permissionRuleParser();
  init_shadowedRuleDetection();
  init_sandbox_adapter();
  init_statusNoticeHelpers();
  init_stringUtils();
});

// src/screens/Doctor.tsx
import { join } from "path";
function DistTagsDisplay({
  promise
}) {
  const distTags = import_react.use(promise);
  if (!distTags.latest) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      dimColor: true,
      children: "\u2514 Failed to fetch versions"
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
    children: [
      distTags.stable && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        children: [
          "\u2514 Stable version: ",
          distTags.stable
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        children: [
          "\u2514 Latest version: ",
          distTags.latest
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function Doctor({ onDone }) {
  const agentDefinitions = useAppState((s) => s.agentDefinitions);
  const mcpTools = useAppState((s) => s.mcp.tools);
  const toolPermissionContext = useAppState((s) => s.toolPermissionContext);
  const pluginsErrors = useAppState((s) => s.plugins.errors);
  useExitOnCtrlCDWithKeybindings();
  const tools = import_react.useMemo(() => {
    return mcpTools || [];
  }, [mcpTools]);
  const [diagnostic, setDiagnostic] = import_react.useState(null);
  const [agentInfo, setAgentInfo] = import_react.useState(null);
  const [contextWarnings, setContextWarnings] = import_react.useState(null);
  const [versionLockInfo, setVersionLockInfo] = import_react.useState(null);
  const validationErrors = useSettingsErrors();
  const distTagsPromise = import_react.useMemo(() => getDoctorDiagnostic().then((diag) => {
    const fetchDistTags = diag.installationType === "native" ? getGcsDistTags : getNpmDistTags;
    return fetchDistTags().catch(() => ({ latest: null, stable: null }));
  }), []);
  const autoUpdatesChannel = getInitialSettings()?.autoUpdatesChannel ?? "latest";
  const errorsExcludingMcp = validationErrors.filter((error) => error.mcpErrorMetadata === undefined);
  const envValidationErrors = import_react.useMemo(() => {
    const envVars = [
      {
        name: "BASH_MAX_OUTPUT_LENGTH",
        default: BASH_MAX_OUTPUT_DEFAULT,
        upperLimit: BASH_MAX_OUTPUT_UPPER_LIMIT
      },
      {
        name: "TASK_MAX_OUTPUT_LENGTH",
        default: TASK_MAX_OUTPUT_DEFAULT,
        upperLimit: TASK_MAX_OUTPUT_UPPER_LIMIT
      },
      {
        name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
        ...getModelMaxOutputTokens("claude-opus-4-7")
      }
    ];
    return envVars.map((v) => {
      const value = process.env[v.name];
      const result = validateBoundedIntEnvVar(v.name, value, v.default, v.upperLimit);
      return { name: v.name, ...result };
    }).filter((v) => v.status !== "valid");
  }, []);
  import_react.useEffect(() => {
    getDoctorDiagnostic().then(setDiagnostic);
    (async () => {
      const userAgentsDir = join(getClaudeConfigHomeDir(), "agents");
      const projectAgentsDir = join(getOriginalCwd(), ".claude", "agents");
      const { activeAgents, allAgents, failedFiles } = agentDefinitions;
      const [userDirExists, projectDirExists] = await Promise.all([
        pathExists(userAgentsDir),
        pathExists(projectAgentsDir)
      ]);
      const agentInfoData = {
        activeAgents: activeAgents.map((a) => ({
          agentType: a.agentType,
          source: a.source
        })),
        userAgentsDir,
        projectAgentsDir,
        userDirExists,
        projectDirExists,
        failedFiles
      };
      setAgentInfo(agentInfoData);
      const warnings = await checkContextWarnings(tools, {
        activeAgents,
        allAgents,
        failedFiles
      }, async () => toolPermissionContext);
      setContextWarnings(warnings);
      if (isPidBasedLockingEnabled()) {
        const locksDir = join(getXDGStateHome(), "claude", "locks");
        const staleLocksCleaned = cleanupStaleLocks(locksDir);
        const locks = getAllLockInfo(locksDir);
        setVersionLockInfo({
          enabled: true,
          locks,
          locksDir,
          staleLocksCleaned
        });
      } else {
        setVersionLockInfo({
          enabled: false,
          locks: [],
          locksDir: "",
          staleLocksCleaned: 0
        });
      }
    })();
  }, [toolPermissionContext, tools, agentDefinitions]);
  const handleDismiss = import_react.useCallback(() => {
    onDone("MiMo Code diagnostics dismissed", { display: "system" });
  }, [onDone]);
  useKeybindings({
    "confirm:yes": handleDismiss,
    "confirm:no": handleDismiss
  }, { context: "Confirmation" });
  if (!diagnostic) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Pane, {
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        dimColor: true,
        children: "Checking installation status\u2026"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Pane, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            children: "Diagnostics"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Currently running: ",
              diagnostic.installationType,
              " (",
              diagnostic.version,
              ")"
            ]
          }, undefined, true, undefined, this),
          diagnostic.packageManager && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Package manager: ",
              diagnostic.packageManager
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Path: ",
              diagnostic.installationPath
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Invoked: ",
              diagnostic.invokedBinary
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Config install method: ",
              diagnostic.configInstallMethod
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Search: ",
              diagnostic.ripgrepStatus.working ? "OK" : "Not working",
              " (",
              diagnostic.ripgrepStatus.mode === "embedded" ? "bundled" : diagnostic.ripgrepStatus.mode === "builtin" ? "vendor" : diagnostic.ripgrepStatus.systemPath || "system",
              ")"
            ]
          }, undefined, true, undefined, this),
          diagnostic.recommendation && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {}, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  "Recommendation: ",
                  diagnostic.recommendation.split(`
`)[0]
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                dimColor: true,
                children: diagnostic.recommendation.split(`
`)[1]
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          diagnostic.multipleInstallations.length > 1 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {}, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                color: "warning",
                children: "Warning: Multiple installations found"
              }, undefined, false, undefined, this),
              diagnostic.multipleInstallations.map((install, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "\u2514 ",
                  install.type,
                  " at ",
                  install.path
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          diagnostic.warnings.length > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {}, undefined, false, undefined, this),
              diagnostic.warnings.map((warning, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                    color: "warning",
                    children: [
                      "Warning: ",
                      warning.issue
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                    children: [
                      "Fix: ",
                      warning.fix
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          errorsExcludingMcp.length > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            marginBottom: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                bold: true,
                children: "Invalid Settings"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ValidationErrorsList, {
                errors: errorsExcludingMcp
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            children: "Updates"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Auto-updates:",
              " ",
              diagnostic.packageManager ? "Managed by package manager" : diagnostic.autoUpdates
            ]
          }, undefined, true, undefined, this),
          diagnostic.hasUpdatePermissions !== null && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Update permissions:",
              " ",
              diagnostic.hasUpdatePermissions ? "Yes" : "No (requires sudo)"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 Auto-update channel: ",
              autoUpdatesChannel
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react.Suspense, {
            fallback: null,
            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(DistTagsDisplay, {
              promise: distTagsPromise
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(SandboxDoctorSection, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(McpParsingWarnings, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(KeybindingWarnings, {}, undefined, false, undefined, this),
      envValidationErrors.length > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            children: "Environment Variables"
          }, undefined, false, undefined, this),
          envValidationErrors.map((validation, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 ",
              validation.name,
              ":",
              " ",
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                color: validation.status === "capped" ? "warning" : "error",
                children: validation.message
              }, undefined, false, undefined, this)
            ]
          }, i, true, undefined, this))
        ]
      }, undefined, true, undefined, this),
      versionLockInfo?.enabled && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            children: "Version Locks"
          }, undefined, false, undefined, this),
          versionLockInfo.staleLocksCleaned > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "\u2514 Cleaned ",
              versionLockInfo.staleLocksCleaned,
              " stale lock(s)"
            ]
          }, undefined, true, undefined, this),
          versionLockInfo.locks.length === 0 ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: "\u2514 No active version locks"
          }, undefined, false, undefined, this) : versionLockInfo.locks.map((lock, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514 ",
              lock.version,
              ": PID ",
              lock.pid,
              " ",
              lock.isProcessRunning ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: "(running)"
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                color: "warning",
                children: "(stale)"
              }, undefined, false, undefined, this)
            ]
          }, i, true, undefined, this))
        ]
      }, undefined, true, undefined, this),
      agentInfo?.failedFiles && agentInfo.failedFiles.length > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            color: "error",
            children: "Agent Parse Errors"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "error",
            children: [
              "\u2514 Failed to parse ",
              agentInfo.failedFiles.length,
              " agent file(s):"
            ]
          }, undefined, true, undefined, this),
          agentInfo.failedFiles.map((file, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "  ",
              "\u2514 ",
              file.path,
              ": ",
              file.error
            ]
          }, i, true, undefined, this))
        ]
      }, undefined, true, undefined, this),
      pluginsErrors.length > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            color: "error",
            children: "Plugin Errors"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "error",
            children: [
              "\u2514 ",
              pluginsErrors.length,
              " plugin error(s) detected:"
            ]
          }, undefined, true, undefined, this),
          pluginsErrors.map((error, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "  ",
              "\u2514 ",
              error.source || "unknown",
              "plugin" in error && error.plugin ? ` [${error.plugin}]` : "",
              ":",
              " ",
              getPluginErrorMessage(error)
            ]
          }, i, true, undefined, this))
        ]
      }, undefined, true, undefined, this),
      contextWarnings?.unreachableRulesWarning && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            color: "warning",
            children: "Unreachable Permission Rules"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "\u2514",
              " ",
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  figures_default.warning,
                  " ",
                  contextWarnings.unreachableRulesWarning.message
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          contextWarnings.unreachableRulesWarning.details.map((detail, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "  ",
              "\u2514 ",
              detail
            ]
          }, i, true, undefined, this))
        ]
      }, undefined, true, undefined, this),
      contextWarnings && (contextWarnings.claudeMdWarning || contextWarnings.agentWarning || contextWarnings.mcpWarning) && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            bold: true,
            children: "Context Usage Warnings"
          }, undefined, false, undefined, this),
          contextWarnings.claudeMdWarning && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "\u2514",
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                    color: "warning",
                    children: [
                      figures_default.warning,
                      " ",
                      contextWarnings.claudeMdWarning.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "  ",
                  "\u2514 Files:"
                ]
              }, undefined, true, undefined, this),
              contextWarnings.claudeMdWarning.details.map((detail, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "    ",
                  "\u2514 ",
                  detail
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          contextWarnings.agentWarning && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "\u2514",
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                    color: "warning",
                    children: [
                      figures_default.warning,
                      " ",
                      contextWarnings.agentWarning.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "  ",
                  "\u2514 Top contributors:"
                ]
              }, undefined, true, undefined, this),
              contextWarnings.agentWarning.details.map((detail, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "    ",
                  "\u2514 ",
                  detail
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          contextWarnings.mcpWarning && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "\u2514",
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                    color: "warning",
                    children: [
                      figures_default.warning,
                      " ",
                      contextWarnings.mcpWarning.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                children: [
                  "  ",
                  "\u2514 MCP servers:"
                ]
              }, undefined, true, undefined, this),
              contextWarnings.mcpWarning.details.map((detail, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "    ",
                  "\u2514 ",
                  detail
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(PressEnterToContinue, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime3;
var init_Doctor = __esm(() => {
  init_figures();
  init_KeybindingWarnings();
  init_McpParsingWarnings();
  init_context();
  init_envUtils();
  init_state();
  init_src();
  init_PressEnterToContinue();
  init_SandboxDoctorSection();
  init_ValidationErrorsList();
  init_useSettingsErrors();
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  init_useKeybinding();
  init_AppState();
  init_plugin();
  init_autoUpdater();
  init_doctorContextWarnings();
  init_doctorDiagnostic();
  init_envValidation();
  init_file();
  init_pidLock();
  init_settings();
  init_outputLimits();
  init_outputFormatting();
  init_xdg();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

export { Doctor, init_Doctor };
