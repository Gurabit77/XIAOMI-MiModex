// @bun
import {
  enablePluginOp,
  init_pluginOperations
} from "./chunk-p111txfv.js";
import {
  init_pluginStartupCheck,
  installSelectedPlugins
} from "./chunk-9gpajj6e.js";
import {
  OFFICIAL_MARKETPLACE_NAME,
  Select,
  Spinner,
  addMarketplaceSource,
  clearAllCaches,
  clearMarketplacesCache,
  init_Spinner,
  init_cacheUtils,
  init_installedPluginsManager,
  init_marketplaceManager,
  init_officialMarketplace,
  init_pluginLoader,
  init_select,
  isPluginInstalled,
  loadAllPlugins,
  loadKnownMarketplacesConfig,
  refreshMarketplace
} from "./chunk-ktw919wt.js";
import {
  init_file,
  pathExists
} from "./chunk-1ghcng4e.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_src,
  instances_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  execa,
  init_execa
} from "./chunk-5z28bqne.js";
import {
  init_debug,
  init_errors,
  isENOENT,
  logForDebugging,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/thinkback/thinkback.tsx
import { readFile } from "fs/promises";
import { join } from "path";
function getMarketplaceName() {
  return process.env.USER_TYPE === "ant" ? INTERNAL_MARKETPLACE_NAME : OFFICIAL_MARKETPLACE_NAME;
}
function getMarketplaceRepo() {
  return process.env.USER_TYPE === "ant" ? INTERNAL_MARKETPLACE_REPO : OFFICIAL_MARKETPLACE_REPO;
}
function getPluginId() {
  return `thinkback@${getMarketplaceName()}`;
}
async function getThinkbackSkillDir() {
  const { enabled } = await loadAllPlugins();
  const thinkbackPlugin = enabled.find((p) => p.name === "thinkback" || p.source && p.source.includes(getPluginId()));
  if (!thinkbackPlugin) {
    return null;
  }
  const skillDir = join(thinkbackPlugin.path, "skills", SKILL_NAME);
  if (await pathExists(skillDir)) {
    return skillDir;
  }
  return null;
}
async function playAnimation(skillDir) {
  const dataPath = join(skillDir, "year_in_review.js");
  const playerPath = join(skillDir, "player.js");
  try {
    await readFile(dataPath);
  } catch (e) {
    if (isENOENT(e)) {
      return {
        success: false,
        message: "No animation found. Run /think-back first to generate one."
      };
    }
    logError(e);
    return {
      success: false,
      message: `Could not access animation data: ${toError(e).message}`
    };
  }
  try {
    await readFile(playerPath);
  } catch (e) {
    if (isENOENT(e)) {
      return {
        success: false,
        message: "Player script not found. The player.js file is missing from the thinkback skill."
      };
    }
    logError(e);
    return {
      success: false,
      message: `Could not access player script: ${toError(e).message}`
    };
  }
  const inkInstance = instances_default.get(process.stdout);
  if (!inkInstance) {
    return { success: false, message: "Failed to access terminal instance" };
  }
  inkInstance.enterAlternateScreen();
  try {
    await execa("node", [playerPath], {
      stdio: "inherit",
      cwd: skillDir,
      reject: false
    });
  } catch {} finally {
    inkInstance.exitAlternateScreen();
  }
  const htmlPath = join(skillDir, "year_in_review.html");
  if (await pathExists(htmlPath)) {
    const platform = getPlatform();
    const openCmd = platform === "macos" ? "open" : platform === "windows" ? "start" : "xdg-open";
    execFileNoThrow(openCmd, [htmlPath]);
  }
  return { success: true, message: "Year in review animation complete!" };
}
function ThinkbackInstaller({
  onReady,
  onError
}) {
  const [state, setState] = import_react.useState({ phase: "checking" });
  const [progressMessage, setProgressMessage] = import_react.useState("");
  import_react.useEffect(() => {
    async function checkAndInstall() {
      try {
        const knownMarketplaces = await loadKnownMarketplacesConfig();
        const marketplaceName = getMarketplaceName();
        const marketplaceRepo = getMarketplaceRepo();
        const pluginId = getPluginId();
        const marketplaceInstalled = marketplaceName in knownMarketplaces;
        const pluginAlreadyInstalled = isPluginInstalled(pluginId);
        if (!marketplaceInstalled) {
          setState({ phase: "installing-marketplace" });
          logForDebugging(`Installing marketplace ${marketplaceRepo}`);
          await addMarketplaceSource({ source: "github", repo: marketplaceRepo }, (message) => {
            setProgressMessage(message);
          });
          clearAllCaches();
          logForDebugging(`Marketplace ${marketplaceName} installed`);
        } else if (!pluginAlreadyInstalled) {
          setState({ phase: "installing-marketplace" });
          setProgressMessage("Updating marketplace\u2026");
          logForDebugging(`Refreshing marketplace ${marketplaceName}`);
          await refreshMarketplace(marketplaceName, (message) => {
            setProgressMessage(message);
          });
          clearMarketplacesCache();
          clearAllCaches();
          logForDebugging(`Marketplace ${marketplaceName} refreshed`);
        }
        if (!pluginAlreadyInstalled) {
          setState({ phase: "installing-plugin" });
          logForDebugging(`Installing plugin ${pluginId}`);
          const result = await installSelectedPlugins([pluginId]);
          if (result.failed.length > 0) {
            const errorMsg = result.failed.map((f) => `${f.name}: ${f.error}`).join(", ");
            throw new Error(`Failed to install plugin: ${errorMsg}`);
          }
          clearAllCaches();
          logForDebugging(`Plugin ${pluginId} installed`);
        } else {
          const { disabled } = await loadAllPlugins();
          const isDisabled = disabled.some((p) => p.name === "thinkback" || p.source?.includes(pluginId));
          if (isDisabled) {
            setState({ phase: "enabling-plugin" });
            logForDebugging(`Enabling plugin ${pluginId}`);
            const enableResult = await enablePluginOp(pluginId);
            if (!enableResult.success) {
              throw new Error(`Failed to enable plugin: ${enableResult.message}`);
            }
            clearAllCaches();
            logForDebugging(`Plugin ${pluginId} enabled`);
          }
        }
        setState({ phase: "ready" });
        onReady();
      } catch (error) {
        const err = toError(error);
        logError(err);
        setState({ phase: "error", message: err.message });
        onError(err.message);
      }
    }
    checkAndInstall();
  }, [onReady, onError]);
  if (state.phase === "error") {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "error",
        children: [
          "Error: ",
          state.message
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (state.phase === "ready") {
    return null;
  }
  const statusMessage = state.phase === "checking" ? "Checking thinkback installation\u2026" : state.phase === "installing-marketplace" ? "Installing marketplace\u2026" : state.phase === "enabling-plugin" ? "Enabling thinkback plugin\u2026" : "Installing thinkback plugin\u2026";
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: progressMessage || statusMessage
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function ThinkbackMenu({
  onDone,
  onAction,
  skillDir,
  hasGenerated
}) {
  const [hasSelected, setHasSelected] = import_react.useState(false);
  const options = hasGenerated ? [
    {
      label: "Play animation",
      value: "play",
      description: "Watch your year in review"
    },
    {
      label: "Edit content",
      value: "edit",
      description: "Modify the animation"
    },
    {
      label: "Fix errors",
      value: "fix",
      description: "Fix validation or rendering issues"
    },
    {
      label: "Regenerate",
      value: "regenerate",
      description: "Create a new animation from scratch"
    }
  ] : [
    {
      label: "Let's go!",
      value: "regenerate",
      description: "Generate your personalized animation"
    }
  ];
  function handleSelect(value) {
    setHasSelected(true);
    if (value === "play") {
      playAnimation(skillDir).then(() => {
        onDone(undefined, { display: "skip" });
      });
    } else {
      onAction(value);
    }
  }
  function handleCancel() {
    onDone(undefined, { display: "skip" });
  }
  if (hasSelected) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Think Back on 2025 with MiMo Code",
    subtitle: "Generate your 2025 MiMo Code Think Back (takes a few minutes to run)",
    onCancel: handleCancel,
    color: "claude",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        !hasGenerated && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "Relive your year of coding with MiMo."
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "We'll create a personalized ASCII animation celebrating your journey."
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options,
          onChange: handleSelect,
          visibleOptionCount: 5
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function ThinkbackFlow({
  onDone
}) {
  const [installComplete, setInstallComplete] = import_react.useState(false);
  const [installError, setInstallError] = import_react.useState(null);
  const [skillDir, setSkillDir] = import_react.useState(null);
  const [hasGenerated, setHasGenerated] = import_react.useState(null);
  function handleReady() {
    setInstallComplete(true);
  }
  const handleError = import_react.useCallback((message) => {
    setInstallError(message);
    onDone(`Error with thinkback: ${message}. Try running /plugin to manually install the think-back plugin.`, { display: "system" });
  }, [onDone]);
  import_react.useEffect(() => {
    if (installComplete && !skillDir && !installError) {
      getThinkbackSkillDir().then((dir) => {
        if (dir) {
          logForDebugging(`Thinkback skill directory: ${dir}`);
          setSkillDir(dir);
        } else {
          handleError("Could not find thinkback skill directory");
        }
      });
    }
  }, [installComplete, skillDir, installError, handleError]);
  import_react.useEffect(() => {
    if (!skillDir) {
      return;
    }
    const dataPath = join(skillDir, "year_in_review.js");
    pathExists(dataPath).then((exists) => {
      logForDebugging(`Checking for ${dataPath}: ${exists ? "found" : "not found"}`);
      setHasGenerated(exists);
    });
  }, [skillDir]);
  function handleAction(action) {
    const prompts = {
      edit: EDIT_PROMPT,
      fix: FIX_PROMPT,
      regenerate: REGENERATE_PROMPT
    };
    onDone(prompts[action], { display: "user", shouldQuery: true });
  }
  if (installError) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "error",
          children: [
            "Error: ",
            installError
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Try running /plugin to manually install the think-back plugin."
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (!installComplete) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThinkbackInstaller, {
      onReady: handleReady,
      onError: handleError
    }, undefined, false, undefined, this);
  }
  if (!skillDir || hasGenerated === null) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "Loading thinkback skill\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThinkbackMenu, {
    onDone,
    onAction: handleAction,
    skillDir,
    hasGenerated
  }, undefined, false, undefined, this);
}
async function call(onDone) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThinkbackFlow, {
    onDone
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, INTERNAL_MARKETPLACE_NAME = "claude-code-marketplace", INTERNAL_MARKETPLACE_REPO = "anthropics/claude-code-marketplace", OFFICIAL_MARKETPLACE_REPO = "anthropics/claude-plugins-official", SKILL_NAME = "thinkback", EDIT_PROMPT = 'Use the Skill tool to invoke the "thinkback" skill with mode=edit to modify my existing MiMo Code year in review animation. Ask me what I want to change. When the animation is ready, tell the user to run /think-back again to play it.', FIX_PROMPT = 'Use the Skill tool to invoke the "thinkback" skill with mode=fix to fix validation or rendering errors in my existing MiMo Code year in review animation. Run the validator, identify errors, and fix them. When the animation is ready, tell the user to run /think-back again to play it.', REGENERATE_PROMPT = 'Use the Skill tool to invoke the "thinkback" skill with mode=regenerate to create a completely new MiMo Code year in review animation from scratch. Delete the existing animation and start fresh. When the animation is ready, tell the user to run /think-back again to play it.';
var init_thinkback = __esm(() => {
  init_execa();
  init_select();
  init_src();
  init_Spinner();
  init_src();
  init_pluginOperations();
  init_debug();
  init_errors();
  init_execFileNoThrow();
  init_file();
  init_log();
  init_platform();
  init_cacheUtils();
  init_installedPluginsManager();
  init_marketplaceManager();
  init_officialMarketplace();
  init_pluginLoader();
  init_pluginStartupCheck();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { playAnimation, call, init_thinkback };
