// @bun
import {
  PromptInputHelpMenu,
  init_PromptInputHelpMenu
} from "./chunk-m71yccb6.js";
import {
  init_modalContext,
  useIsInsideModal
} from "./chunk-3rk983b5.js";
import {
  INTERNAL_ONLY_COMMANDS,
  Select,
  builtInCommandNames,
  formatDescriptionWithSource,
  init_commands1 as init_commands,
  init_select,
  init_useShortcutDisplay,
  init_useTerminalSize,
  useShortcutDisplay
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
import"./chunk-1ghcng4e.js";
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
import {
  init_truncate,
  truncate
} from "./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Link,
  Pane,
  Tab,
  Tabs,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybinding,
  useTabHeaderFocus,
  useTerminalSize
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
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

// src/components/HelpV2/Commands.tsx
function Commands({
  commands,
  maxHeight,
  columns,
  title,
  onCancel,
  emptyMessage
}) {
  const { headerFocused, focusHeader } = useTabHeaderFocus();
  const maxWidth = Math.max(1, columns - 10);
  const visibleCount = Math.max(1, Math.floor((maxHeight - 10) / 2));
  const options = import_react.useMemo(() => {
    const seen = new Set;
    return commands.filter((cmd) => {
      if (seen.has(cmd.name))
        return false;
      seen.add(cmd.name);
      return true;
    }).sort((a, b) => a.name.localeCompare(b.name)).map((cmd) => ({
      label: `/${cmd.name}`,
      value: cmd.name,
      description: truncate(formatDescriptionWithSource(cmd), maxWidth, true)
    }));
  }, [commands, maxWidth]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    children: commands.length === 0 && emptyMessage ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: emptyMessage
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options,
            visibleOptionCount: visibleCount,
            onCancel,
            disableSelection: true,
            hideIndexes: true,
            layout: "compact-vertical",
            onUpFromFirstItem: focusHeader,
            isDisabled: headerFocused
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_Commands = __esm(() => {
  init_commands();
  init_truncate();
  init_src();
  init_select();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/HelpV2/General.tsx
function General() {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    gap: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          children: "MiMo understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              bold: true,
              children: "Shortcuts"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PromptInputHelpMenu, {
            gap: 2,
            fixedWidth: true
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2;
var init_General = __esm(() => {
  init_src();
  init_PromptInputHelpMenu();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/HelpV2/HelpV2.tsx
function HelpV2({ onClose, commands }) {
  const { rows, columns } = useTerminalSize();
  const maxHeight = Math.floor(rows / 2);
  const insideModal = useIsInsideModal();
  const close = () => onClose("Help dialog dismissed", { display: "system" });
  useKeybinding("help:dismiss", close, { context: "Help" });
  const exitState = useExitOnCtrlCDWithKeybindings(close);
  const dismissShortcut = useShortcutDisplay("help:dismiss", "Help", "esc");
  const builtinNames = builtInCommandNames();
  let builtinCommands = commands.filter((cmd) => builtinNames.has(cmd.name) && !cmd.isHidden);
  let antOnlyCommands = [];
  if (process.env.USER_TYPE === "ant") {
    const internalOnlyNames = new Set(INTERNAL_ONLY_COMMANDS.map((_) => _.name));
    builtinCommands = builtinCommands.filter((cmd) => !internalOnlyNames.has(cmd.name));
    antOnlyCommands = commands.filter((cmd) => internalOnlyNames.has(cmd.name) && !cmd.isHidden);
  }
  const customCommands = commands.filter((cmd) => !builtinNames.has(cmd.name) && !cmd.isHidden);
  const tabs = [
    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
      title: "general",
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(General, {}, undefined, false, undefined, this)
    }, "general", false, undefined, this)
  ];
  tabs.push(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
    title: "commands",
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Commands, {
      commands: builtinCommands,
      maxHeight,
      columns,
      title: "Browse default commands:",
      onCancel: close
    }, undefined, false, undefined, this)
  }, "commands", false, undefined, this));
  tabs.push(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
    title: "custom-commands",
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Commands, {
      commands: customCommands,
      maxHeight,
      columns,
      title: "Browse custom commands:",
      emptyMessage: "No custom commands found",
      onCancel: close
    }, undefined, false, undefined, this)
  }, "custom", false, undefined, this));
  if (process.env.USER_TYPE === "ant" && antOnlyCommands.length > 0) {
    tabs.push(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
      title: "[ant-only]",
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Commands, {
        commands: antOnlyCommands,
        maxHeight,
        columns,
        title: "Browse ant-only commands:",
        onCancel: close
      }, undefined, false, undefined, this)
    }, "ant-only", false, undefined, this));
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    height: insideModal ? undefined : maxHeight,
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Pane, {
      color: "professionalBlue",
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tabs, {
          title: process.env.USER_TYPE === "ant" ? "/help" : `MiMo Code v${"1.0.0"}`,
          color: "professionalBlue",
          defaultTab: "general",
          children: tabs
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "For more help:",
              " ",
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Link, {
                url: "https://code.claude.com/docs/en/overview"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
              italic: true,
              children: [
                dismissShortcut,
                " to cancel"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime3;
var init_HelpV2 = __esm(() => {
  init_useExitOnCtrlCDWithKeybindings();
  init_useShortcutDisplay();
  init_commands();
  init_modalContext();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_Commands();
  init_General();
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/help/help.tsx
var jsx_dev_runtime4, call = async (onDone, { options: { commands } }) => {
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(HelpV2, {
    commands,
    onClose: onDone
  }, undefined, false, undefined, this);
};
var init_help = __esm(() => {
  init_HelpV2();
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});
init_help();

export {
  call
};
