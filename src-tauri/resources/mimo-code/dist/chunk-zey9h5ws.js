// @bun
import {
  Select,
  clearServerCache,
  detectIDEs,
  detectRunningIDEs,
  getCurrentWorktreeSession,
  init_AppState,
  init_CustomSelect,
  init_client,
  init_ide,
  init_worktree,
  isJetBrainsIde,
  isSupportedJetBrainsTerminal,
  isSupportedTerminal,
  toIDEDisplayName,
  useAppState,
  useSetAppState
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
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
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
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
  getGlobalConfig,
  init_config1 as init_config,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
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
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_source,
  init_src,
  source_default
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
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/IdeAutoConnectDialog.tsx
function IdeAutoConnectDialog({
  onComplete
}) {
  const handleSelect = import_react.useCallback(async (value) => {
    const autoConnect = value === "yes";
    saveGlobalConfig((current) => ({
      ...current,
      autoConnectIde: autoConnect,
      hasIdeAutoConnectDialogBeenShown: true
    }));
    onComplete();
  }, [onComplete]);
  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Do you wish to enable auto-connect to IDE?",
    color: "ide",
    onCancel: onComplete,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
        options,
        onChange: handleSelect,
        defaultValue: "yes"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: "You can also configure this in /config or with the --ide flag"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function shouldShowAutoConnectDialog() {
  const config = getGlobalConfig();
  return !isSupportedTerminal() && config.autoConnectIde !== true && config.hasIdeAutoConnectDialogBeenShown !== true;
}
function IdeDisableAutoConnectDialog({
  onComplete
}) {
  const handleSelect = import_react.useCallback((value) => {
    const disableAutoConnect = value === "yes";
    if (disableAutoConnect) {
      saveGlobalConfig((current) => ({
        ...current,
        autoConnectIde: false
      }));
    }
    onComplete(disableAutoConnect);
  }, [onComplete]);
  const handleCancel = import_react.useCallback(() => {
    onComplete(false);
  }, [onComplete]);
  const options = [
    { label: "No", value: "no" },
    { label: "Yes", value: "yes" }
  ];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Do you wish to disable auto-connect to IDE?",
    subtitle: "You can also configure this in /config",
    onCancel: handleCancel,
    color: "ide",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
      options,
      onChange: handleSelect,
      defaultValue: "no"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function shouldShowDisableAutoConnectDialog() {
  const config = getGlobalConfig();
  return !isSupportedTerminal() && config.autoConnectIde === true;
}
var import_react, jsx_dev_runtime;
var init_IdeAutoConnectDialog = __esm(() => {
  init_src();
  init_config();
  init_ide();
  init_CustomSelect();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/ide/ide.tsx
import * as path from "path";
function IDEScreen({
  availableIDEs,
  unavailableIDEs,
  selectedIDE,
  onClose,
  onSelect
}) {
  const [selectedValue, setSelectedValue] = import_react2.useState(selectedIDE?.port?.toString() ?? "None");
  const [showAutoConnectDialog, setShowAutoConnectDialog] = import_react2.useState(false);
  const [showDisableAutoConnectDialog, setShowDisableAutoConnectDialog] = import_react2.useState(false);
  const handleSelectIDE = import_react2.useCallback((value) => {
    if (value !== "None" && shouldShowAutoConnectDialog()) {
      setShowAutoConnectDialog(true);
    } else if (value === "None" && shouldShowDisableAutoConnectDialog()) {
      setShowDisableAutoConnectDialog(true);
    } else {
      onSelect(availableIDEs.find((ide) => ide.port === parseInt(value, 10)));
    }
  }, [availableIDEs, onSelect]);
  const ideCounts = availableIDEs.reduce((acc, ide) => {
    acc[ide.name] = (acc[ide.name] || 0) + 1;
    return acc;
  }, {});
  const options = availableIDEs.map((ide) => {
    const hasMultipleInstances = (ideCounts[ide.name] || 0) > 1;
    const showWorkspace = hasMultipleInstances && ide.workspaceFolders.length > 0;
    return {
      label: ide.name,
      value: ide.port.toString(),
      description: showWorkspace ? formatWorkspaceFolders(ide.workspaceFolders) : undefined
    };
  }).concat([{ label: "None", value: "None", description: undefined }]);
  if (showAutoConnectDialog) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IdeAutoConnectDialog, {
      onComplete: () => handleSelectIDE(selectedValue)
    }, undefined, false, undefined, this);
  }
  if (showDisableAutoConnectDialog) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IdeDisableAutoConnectDialog, {
      onComplete: () => {
        onSelect(undefined);
      }
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
    title: "Select IDE",
    subtitle: "Connect to an IDE for integrated development features.",
    onCancel: onClose,
    color: "ide",
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        availableIDEs.length === 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          dimColor: true,
          children: isSupportedJetBrainsTerminal() ? `No available IDEs detected. Please install the plugin and restart your IDE:
` + "https://docs.claude.com/s/claude-code-jetbrains" : "No available IDEs detected. Make sure your IDE has the MiMo Code extension or plugin installed and is running."
        }, undefined, false, undefined, this),
        availableIDEs.length !== 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Select, {
          defaultValue: selectedValue,
          defaultFocusValue: selectedValue,
          options,
          onChange: (value) => {
            setSelectedValue(value);
            handleSelectIDE(value);
          }
        }, undefined, false, undefined, this),
        availableIDEs.length !== 0 && availableIDEs.some((ide) => ide.name === "VS Code" || ide.name === "Visual Studio Code") && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            color: "warning",
            children: "Note: Only one MiMo Code instance can be connected to VS Code at a time."
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        availableIDEs.length !== 0 && !isSupportedTerminal() && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Tip: You can enable auto-connect to IDE in /config or with the --ide flag"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        unavailableIDEs.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Found ",
                unavailableIDEs.length,
                " other running IDE(s). However, their workspace/project directories do not match the current cwd."
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              flexDirection: "column",
              children: unavailableIDEs.map((ide, index) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                paddingLeft: 3,
                children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "\u2022 ",
                    ide.name,
                    ": ",
                    formatWorkspaceFolders(ide.workspaceFolders)
                  ]
                }, undefined, true, undefined, this)
              }, index, false, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
async function findCurrentIDE(availableIDEs, dynamicMcpConfig) {
  const currentConfig = dynamicMcpConfig?.ide;
  if (!currentConfig || currentConfig.type !== "sse-ide" && currentConfig.type !== "ws-ide") {
    return null;
  }
  for (const ide of availableIDEs) {
    if (ide.url === currentConfig.url) {
      return ide;
    }
  }
  return null;
}
function IDEOpenSelection({
  availableIDEs,
  onSelectIDE,
  onDone
}) {
  const [selectedValue, setSelectedValue] = import_react2.useState(availableIDEs[0]?.port?.toString() ?? "");
  const handleSelectIDE = import_react2.useCallback((value) => {
    const selectedIDE = availableIDEs.find((ide) => ide.port === parseInt(value, 10));
    onSelectIDE(selectedIDE);
  }, [availableIDEs, onSelectIDE]);
  const options = availableIDEs.map((ide) => ({
    label: ide.name,
    value: ide.port.toString()
  }));
  function handleCancel() {
    onDone("IDE selection cancelled", { display: "system" });
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
    title: "Select an IDE to open the project",
    onCancel: handleCancel,
    color: "ide",
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Select, {
      defaultValue: selectedValue,
      defaultFocusValue: selectedValue,
      options,
      onChange: (value) => {
        setSelectedValue(value);
        handleSelectIDE(value);
      }
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function RunningIDESelector({
  runningIDEs,
  onSelectIDE,
  onDone
}) {
  const [selectedValue, setSelectedValue] = import_react2.useState(runningIDEs[0] ?? "");
  const handleSelectIDE = import_react2.useCallback((value) => {
    onSelectIDE(value);
  }, [onSelectIDE]);
  const options = runningIDEs.map((ide) => ({
    label: toIDEDisplayName(ide),
    value: ide
  }));
  function handleCancel() {
    onDone("IDE selection cancelled", { display: "system" });
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
    title: "Select IDE to install extension",
    onCancel: handleCancel,
    color: "ide",
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Select, {
      defaultFocusValue: selectedValue,
      options,
      onChange: (value) => {
        setSelectedValue(value);
        handleSelectIDE(value);
      }
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function InstallOnMount({
  ide,
  onInstall
}) {
  import_react2.useEffect(() => {
    onInstall(ide);
  }, [ide, onInstall]);
  return null;
}
async function call(onDone, context, args) {
  logEvent("tengu_ext_ide_command", {});
  const {
    options: { dynamicMcpConfig },
    onChangeDynamicMcpConfig
  } = context;
  if (args?.trim() === "open") {
    const worktreeSession = getCurrentWorktreeSession();
    const targetPath = worktreeSession ? worktreeSession.worktreePath : getCwd();
    const detectedIDEs2 = await detectIDEs(true);
    const availableIDEs2 = detectedIDEs2.filter((ide) => ide.isValid);
    if (availableIDEs2.length === 0) {
      onDone("No IDEs with MiMo Code extension detected.");
      return null;
    }
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IDEOpenSelection, {
      availableIDEs: availableIDEs2,
      onSelectIDE: async (selectedIDE) => {
        if (!selectedIDE) {
          onDone("No IDE selected.");
          return;
        }
        if (selectedIDE.name.toLowerCase().includes("vscode") || selectedIDE.name.toLowerCase().includes("cursor") || selectedIDE.name.toLowerCase().includes("windsurf")) {
          const { code } = await execFileNoThrow("code", [targetPath]);
          if (code === 0) {
            onDone(`Opened ${worktreeSession ? "worktree" : "project"} in ${source_default.bold(selectedIDE.name)}`);
          } else {
            onDone(`Failed to open in ${selectedIDE.name}. Try opening manually: ${targetPath}`);
          }
        } else if (isSupportedJetBrainsTerminal()) {
          onDone(`Please open the ${worktreeSession ? "worktree" : "project"} manually in ${source_default.bold(selectedIDE.name)}: ${targetPath}`);
        } else {
          onDone(`Please open the ${worktreeSession ? "worktree" : "project"} manually in ${source_default.bold(selectedIDE.name)}: ${targetPath}`);
        }
      },
      onDone: () => {
        onDone("Exited without opening IDE", { display: "system" });
      }
    }, undefined, false, undefined, this);
  }
  const detectedIDEs = await detectIDEs(true);
  if (detectedIDEs.length === 0 && context.onInstallIDEExtension && !isSupportedTerminal()) {
    const runningIDEs = await detectRunningIDEs();
    const onInstall = (ide) => {
      if (context.onInstallIDEExtension) {
        context.onInstallIDEExtension(ide);
        if (isJetBrainsIde(ide)) {
          onDone(`Installed plugin to ${source_default.bold(toIDEDisplayName(ide))}
` + `Please ${source_default.bold("restart your IDE")} completely for it to take effect`);
        } else {
          onDone(`Installed extension to ${source_default.bold(toIDEDisplayName(ide))}`);
        }
      }
    };
    if (runningIDEs.length > 1) {
      return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(RunningIDESelector, {
        runningIDEs,
        onSelectIDE: onInstall,
        onDone: () => {
          onDone("No IDE selected.", { display: "system" });
        }
      }, undefined, false, undefined, this);
    } else if (runningIDEs.length === 1) {
      return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(InstallOnMount, {
        ide: runningIDEs[0],
        onInstall
      }, undefined, false, undefined, this);
    }
  }
  const availableIDEs = detectedIDEs.filter((ide) => ide.isValid);
  const unavailableIDEs = detectedIDEs.filter((ide) => !ide.isValid);
  const currentIDE = await findCurrentIDE(availableIDEs, dynamicMcpConfig);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IDECommandFlow, {
    availableIDEs,
    unavailableIDEs,
    currentIDE,
    dynamicMcpConfig,
    onChangeDynamicMcpConfig,
    onDone
  }, undefined, false, undefined, this);
}
function IDECommandFlow({
  availableIDEs,
  unavailableIDEs,
  currentIDE,
  dynamicMcpConfig,
  onChangeDynamicMcpConfig,
  onDone
}) {
  const [connectingIDE, setConnectingIDE] = import_react2.useState(null);
  const ideClient = useAppState((s) => s.mcp.clients.find((c) => c.name === "ide"));
  const setAppState = useSetAppState();
  const isFirstCheckRef = import_react2.useRef(true);
  import_react2.useEffect(() => {
    if (!connectingIDE)
      return;
    if (isFirstCheckRef.current) {
      isFirstCheckRef.current = false;
      return;
    }
    if (!ideClient || ideClient.type === "pending")
      return;
    if (ideClient.type === "connected") {
      onDone(`Connected to ${connectingIDE.name}.`);
    } else if (ideClient.type === "failed") {
      onDone(`Failed to connect to ${connectingIDE.name}.`);
    }
  }, [ideClient, connectingIDE, onDone]);
  import_react2.useEffect(() => {
    if (!connectingIDE)
      return;
    const timer = setTimeout(onDone, IDE_CONNECTION_TIMEOUT_MS, `Connection to ${connectingIDE.name} timed out.`);
    return () => clearTimeout(timer);
  }, [connectingIDE, onDone]);
  const handleSelectIDE = import_react2.useCallback((selectedIDE) => {
    if (!onChangeDynamicMcpConfig) {
      onDone("Error connecting to IDE.");
      return;
    }
    const newConfig = { ...dynamicMcpConfig || {} };
    if (currentIDE) {
      delete newConfig.ide;
    }
    if (!selectedIDE) {
      if (ideClient && ideClient.type === "connected" && currentIDE) {
        ideClient.client.onclose = () => {};
        clearServerCache("ide", ideClient.config);
        setAppState((prev) => ({
          ...prev,
          mcp: {
            ...prev.mcp,
            clients: prev.mcp.clients.filter((c) => c.name !== "ide"),
            tools: prev.mcp.tools.filter((t) => !t.name?.startsWith("mcp__ide__")),
            commands: prev.mcp.commands.filter((c) => !c.name?.startsWith("mcp__ide__"))
          }
        }));
      }
      onChangeDynamicMcpConfig(newConfig);
      onDone(currentIDE ? `Disconnected from ${currentIDE.name}.` : "No IDE selected.");
      return;
    }
    const url = selectedIDE.url;
    newConfig.ide = {
      type: url.startsWith("ws:") ? "ws-ide" : "sse-ide",
      url,
      ideName: selectedIDE.name,
      authToken: selectedIDE.authToken,
      ideRunningInWindows: selectedIDE.ideRunningInWindows,
      scope: "dynamic"
    };
    isFirstCheckRef.current = true;
    setConnectingIDE(selectedIDE);
    onChangeDynamicMcpConfig(newConfig);
  }, [
    dynamicMcpConfig,
    currentIDE,
    ideClient,
    setAppState,
    onChangeDynamicMcpConfig,
    onDone
  ]);
  if (connectingIDE) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        "Connecting to ",
        connectingIDE.name,
        "\u2026"
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(IDEScreen, {
    availableIDEs,
    unavailableIDEs,
    selectedIDE: currentIDE,
    onClose: () => onDone("IDE selection cancelled", { display: "system" }),
    onSelect: handleSelectIDE
  }, undefined, false, undefined, this);
}
function formatWorkspaceFolders(folders, maxLength = 100) {
  if (folders.length === 0)
    return "";
  const cwd = getCwd();
  const foldersToShow = folders.slice(0, 2);
  const hasMore = folders.length > 2;
  const ellipsisOverhead = hasMore ? 3 : 0;
  const separatorOverhead = (foldersToShow.length - 1) * 2;
  const availableLength = maxLength - separatorOverhead - ellipsisOverhead;
  const maxLengthPerPath = Math.floor(availableLength / foldersToShow.length);
  const cwdNFC = cwd.normalize("NFC");
  const formattedFolders = foldersToShow.map((folder) => {
    const folderNFC = folder.normalize("NFC");
    if (folderNFC.startsWith(cwdNFC + path.sep)) {
      folder = folderNFC.slice(cwdNFC.length + 1);
    }
    if (folder.length <= maxLengthPerPath) {
      return folder;
    }
    return "\u2026" + folder.slice(-(maxLengthPerPath - 1));
  });
  let result = formattedFolders.join(", ");
  if (hasMore) {
    result += ", \u2026";
  }
  return result;
}
var import_react2, jsx_dev_runtime2, IDE_CONNECTION_TIMEOUT_MS = 35000;
var init_ide2 = __esm(() => {
  init_source();
  init_analytics();
  init_CustomSelect();
  init_src();
  init_IdeAutoConnectDialog();
  init_src();
  init_client();
  init_AppState();
  init_cwd();
  init_execFileNoThrow();
  init_ide();
  init_worktree();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});
init_ide2();

export {
  formatWorkspaceFolders,
  call
};
