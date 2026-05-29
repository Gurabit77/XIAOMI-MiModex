// @bun
import {
  ConfigurableShortcutHint,
  capitalize_default,
  estimateSkillFrontmatterTokens,
  getCommandName,
  getSkillsPath,
  init_ConfigurableShortcutHint,
  init_capitalize,
  init_commands1 as init_commands,
  init_loadSkillsDir
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
  getDisplayPath,
  getSettingSourceName,
  init_constants,
  init_file,
  init_stringUtils,
  plural
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
import {
  formatTokens,
  init_format
} from "./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_src
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

// src/components/skills/SkillsMenu.tsx
function getSourceTitle(source) {
  if (source === "plugin") {
    return "Plugin skills";
  }
  if (source === "mcp") {
    return "MCP skills";
  }
  return `${capitalize_default(getSettingSourceName(source))} skills`;
}
function getSourceSubtitle(source, skills) {
  if (source === "mcp") {
    const servers = [
      ...new Set(skills.map((s) => {
        const idx = s.name.indexOf(":");
        return idx > 0 ? s.name.slice(0, idx) : null;
      }).filter((n) => n != null))
    ];
    return servers.length > 0 ? servers.join(", ") : undefined;
  }
  const skillsPath = getDisplayPath(getSkillsPath(source, "skills"));
  const hasCommandsSkills = skills.some((s) => s.loadedFrom === "commands_DEPRECATED");
  return hasCommandsSkills ? `${skillsPath}, ${getDisplayPath(getSkillsPath(source, "commands"))}` : skillsPath;
}
function SkillsMenu({ onExit, commands }) {
  const skills = import_react.useMemo(() => {
    return commands.filter((cmd) => cmd.type === "prompt" && (cmd.loadedFrom === "skills" || cmd.loadedFrom === "commands_DEPRECATED" || cmd.loadedFrom === "plugin" || cmd.loadedFrom === "mcp"));
  }, [commands]);
  const skillsBySource = import_react.useMemo(() => {
    const groups = {
      policySettings: [],
      userSettings: [],
      projectSettings: [],
      localSettings: [],
      flagSettings: [],
      plugin: [],
      mcp: []
    };
    for (const skill of skills) {
      const source = skill.source;
      if (source in groups) {
        groups[source].push(skill);
      }
    }
    for (const group of Object.values(groups)) {
      group.sort((a, b) => getCommandName(a).localeCompare(getCommandName(b)));
    }
    return groups;
  }, [skills]);
  const handleCancel = () => {
    onExit("Skills dialog dismissed", { display: "system" });
  };
  if (skills.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Skills",
      subtitle: "No skills found",
      onCancel: handleCancel,
      hideInputGuide: true,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Create skills in .claude/skills/ or ~/.claude/skills/"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "close"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const getScopeTag = (source) => {
    switch (source) {
      case "projectSettings":
      case "localSettings":
        return { label: "local", color: "yellow" };
      case "userSettings":
        return { label: "global", color: "cyan" };
      case "policySettings":
        return { label: "managed", color: "magenta" };
      default:
        return;
    }
  };
  const renderSkill = (skill) => {
    const estimatedTokens = estimateSkillFrontmatterTokens(skill);
    const tokenDisplay = `~${formatTokens(estimatedTokens)}`;
    const pluginName = skill.source === "plugin" ? skill.pluginInfo?.pluginManifest.name : undefined;
    const scopeTag = getScopeTag(skill.source);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: getCommandName(skill)
        }, undefined, false, undefined, this),
        scopeTag && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: scopeTag.color,
          children: [
            " [",
            scopeTag.label,
            "]"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            pluginName ? ` \xB7 ${pluginName}` : "",
            " \xB7 ",
            tokenDisplay,
            " description tokens"
          ]
        }, undefined, true, undefined, this)
      ]
    }, `${skill.name}-${skill.source}`, true, undefined, this);
  };
  const renderSkillGroup = (source) => {
    const groupSkills = skillsBySource[source];
    if (groupSkills.length === 0)
      return null;
    const title = getSourceTitle(source);
    const subtitle = getSourceSubtitle(source, groupSkills);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              dimColor: true,
              children: title
            }, undefined, false, undefined, this),
            subtitle && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " (",
                subtitle,
                ")"
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        groupSkills.map((skill) => renderSkill(skill))
      ]
    }, source, true, undefined, this);
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Skills",
    subtitle: `${skills.length} ${plural(skills.length, "skill")}`,
    onCancel: handleCancel,
    hideInputGuide: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          renderSkillGroup("projectSettings"),
          renderSkillGroup("localSettings"),
          renderSkillGroup("userSettings"),
          renderSkillGroup("flagSettings"),
          renderSkillGroup("policySettings"),
          renderSkillGroup("plugin"),
          renderSkillGroup("mcp")
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "close"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_SkillsMenu = __esm(() => {
  init_capitalize();
  init_commands();
  init_src();
  init_loadSkillsDir();
  init_file();
  init_format();
  init_constants();
  init_stringUtils();
  init_ConfigurableShortcutHint();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/skills/skills.tsx
async function call(onDone, context) {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(SkillsMenu, {
    onExit: onDone,
    commands: context.options.commands
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime2;
var init_skills = __esm(() => {
  init_SkillsMenu();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});
init_skills();

export {
  call
};
