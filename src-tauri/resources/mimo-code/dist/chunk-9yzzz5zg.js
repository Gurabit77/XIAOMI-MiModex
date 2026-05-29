// @bun
import {
  init_sprites,
  renderSprite
} from "./chunk-pbyr3qb9.js";
import {
  RARITY_COLORS,
  RARITY_STARS,
  STAT_NAMES,
  generateSeed,
  getCompanion,
  init_companion,
  init_types,
  rollWithSeed
} from "./chunk-1jvg23ym.js";
import {
  getClaudeAIOAuthTokens,
  getGlobalConfig,
  getUserAgent,
  init_auth,
  init_config1 as init_config,
  init_http,
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
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-djs11qd6.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  ThemedBox_default,
  ThemedText,
  init_src,
  use_input_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
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

// src/buddy/CompanionCard.tsx
function StatBar({ name, value }) {
  const clamped = Math.max(0, Math.min(100, value));
  const filled = Math.round(clamped / 10);
  const bar = "\u2588".repeat(filled) + "\u2591".repeat(10 - filled);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    children: [
      name.padEnd(10),
      " ",
      bar,
      " ",
      String(value).padStart(3)
    ]
  }, undefined, true, undefined, this);
}
function CompanionCard({
  companion,
  lastReaction,
  onDone
}) {
  const color = RARITY_COLORS[companion.rarity];
  const stars = RARITY_STARS[companion.rarity];
  const sprite = renderSprite(companion, 0);
  use_input_default(() => {
    onDone?.(undefined, { display: "skip" });
  }, { isActive: onDone !== undefined });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: color,
    paddingX: CARD_PADDING_X,
    paddingY: 1,
    width: CARD_WIDTH,
    flexShrink: 0,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color,
            children: [
              stars,
              " ",
              companion.rarity.toUpperCase()
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color,
            children: companion.species.toUpperCase()
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      companion.shiny && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "warning",
        bold: true,
        children: [
          "\u2728",
          " SHINY ",
          "\u2728"
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginY: 1,
        children: sprite.map((line, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color,
          children: line
        }, i, false, undefined, this))
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: companion.name
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginY: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: [
            '"',
            companion.personality,
            '"'
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: STAT_NAMES.map((name) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatBar, {
          name,
          value: companion.stats[name] ?? 0
        }, name, false, undefined, this))
      }, undefined, false, undefined, this),
      lastReaction && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "last said"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            borderStyle: "round",
            borderColor: "inactive",
            paddingX: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              italic: true,
              children: lastReaction
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime, CARD_WIDTH = 40, CARD_PADDING_X = 2;
var init_CompanionCard = __esm(() => {
  init_src();
  init_src();
  init_sprites();
  init_types();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/buddy/companionReact.ts
function triggerCompanionReaction(messages, setReaction) {
  const companion = getCompanion();
  if (!companion || getGlobalConfig().companionMuted)
    return;
  const addressed = isAddressed(messages, companion.name);
  const now = Date.now();
  if (!addressed && now - lastReactTime < MIN_INTERVAL_MS)
    return;
  const transcript = buildTranscript(messages);
  if (!transcript.trim())
    return;
  lastReactTime = now;
  callBuddyReactAPI(companion, transcript, addressed).then((reaction) => {
    if (!reaction)
      return;
    recentReactions.push(reaction);
    if (recentReactions.length > MAX_RECENT)
      recentReactions.shift();
    setReaction(reaction);
  }).catch(() => {});
}
function isAddressed(messages, name) {
  const pattern = new RegExp(`\\b${escapeRegex(name)}\\b`, "i");
  for (let i = messages.length - 1;i >= Math.max(0, messages.length - 3); i--) {
    const m = messages[i];
    if (m?.type !== "user")
      continue;
    const content = m.message?.content;
    if (typeof content === "string" && pattern.test(content))
      return true;
  }
  return false;
}
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildTranscript(messages) {
  return messages.slice(-12).filter((m) => m.type === "user" || m.type === "assistant").map((m) => {
    const role = m.type === "user" ? "user" : "claude";
    const content = m.message?.content;
    const text = typeof content === "string" ? content.slice(0, 300) : Array.isArray(content) ? content.filter((b) => b?.type === "text").map((b) => b.text).join(" ").slice(0, 300) : "";
    return `${role}: ${text}`;
  }).join(`
`).slice(0, 5000);
}
async function callBuddyReactAPI(companion, transcript, addressed) {
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens?.accessToken)
    return null;
  const orgId = getGlobalConfig().oauthAccount?.organizationUuid;
  if (!orgId)
    return null;
  const baseUrl = getOauthConfig().BASE_API_URL;
  const url = `${baseUrl}/api/organizations/${orgId}/claude_code/buddy_react`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
      "Content-Type": "application/json",
      "User-Agent": getUserAgent()
    },
    body: JSON.stringify({
      name: companion.name.slice(0, 32),
      personality: companion.personality.slice(0, 200),
      species: companion.species,
      rarity: companion.rarity,
      stats: companion.stats,
      transcript,
      reason: addressed ? "addressed" : "turn",
      recent: recentReactions.map((r) => r.slice(0, 200)),
      addressed
    }),
    signal: AbortSignal.timeout(1e4)
  });
  if (!resp.ok)
    return null;
  try {
    const data = await resp.json();
    return data.reaction?.trim() || null;
  } catch {
    return null;
  }
}
var lastReactTime = 0, MIN_INTERVAL_MS = 45000, recentReactions, MAX_RECENT = 8;
var init_companionReact = __esm(() => {
  init_companion();
  init_config();
  init_auth();
  init_oauth();
  init_http();
  recentReactions = [];
});

// src/commands/buddy/buddy.ts
function speciesLabel(species) {
  return species.charAt(0).toUpperCase() + species.slice(1);
}
async function call(onDone, context, args) {
  const sub = args?.trim().toLowerCase() ?? "";
  const setState = context.setAppState;
  if (sub === "off") {
    saveGlobalConfig((cfg) => ({ ...cfg, companionMuted: true }));
    onDone("companion muted", { display: "system" });
    return null;
  }
  if (sub === "on") {
    saveGlobalConfig((cfg) => ({ ...cfg, companionMuted: false }));
    onDone("companion unmuted", { display: "system" });
    return null;
  }
  if (sub === "pet") {
    const companion2 = getCompanion();
    if (!companion2) {
      onDone("no companion yet \xB7 run /buddy first", { display: "system" });
      return null;
    }
    saveGlobalConfig((cfg) => ({ ...cfg, companionMuted: false }));
    setState?.((prev) => ({ ...prev, companionPetAt: Date.now() }));
    triggerCompanionReaction(context.messages ?? [], (reaction) => setState?.((prev) => prev.companionReaction === reaction ? prev : { ...prev, companionReaction: reaction }));
    onDone(`petted ${companion2.name}`, { display: "system" });
    return null;
  }
  const companion = getCompanion();
  if (companion && getGlobalConfig().companionMuted) {
    saveGlobalConfig((cfg) => ({ ...cfg, companionMuted: false }));
  }
  if (companion) {
    const lastReaction = context.getAppState?.()?.companionReaction;
    return import_react.default.createElement(CompanionCard, {
      companion,
      lastReaction,
      onDone
    });
  }
  const seed = generateSeed();
  const r = rollWithSeed(seed);
  const name = SPECIES_NAMES[r.bones.species] ?? "Buddy";
  const personality = SPECIES_PERSONALITY[r.bones.species] ?? "Mysterious and code-savvy.";
  const stored = {
    name,
    personality,
    seed,
    hatchedAt: Date.now()
  };
  saveGlobalConfig((cfg) => ({ ...cfg, companion: stored }));
  const stars = RARITY_STARS[r.bones.rarity];
  const sprite = renderSprite(r.bones, 0);
  const shiny = r.bones.shiny ? " \u2728 Shiny!" : "";
  const lines = [
    "A wild companion appeared!",
    "",
    ...sprite,
    "",
    `${name} the ${speciesLabel(r.bones.species)}${shiny}`,
    `Rarity: ${stars} (${r.bones.rarity})`,
    `"${personality}"`,
    "",
    "Your companion will now appear beside your input box!",
    "Say its name to get its take \xB7 /buddy pet \xB7 /buddy off"
  ];
  onDone(lines.join(`
`), { display: "system" });
  return null;
}
var import_react, SPECIES_NAMES, SPECIES_PERSONALITY;
var init_buddy = __esm(() => {
  init_companion();
  init_types();
  init_sprites();
  init_CompanionCard();
  init_config();
  init_companionReact();
  import_react = __toESM(require_react(), 1);
  SPECIES_NAMES = {
    duck: "Waddles",
    goose: "Goosberry",
    blob: "Gooey",
    cat: "Whiskers",
    dragon: "Ember",
    octopus: "Inky",
    owl: "Hoots",
    penguin: "Waddleford",
    turtle: "Shelly",
    snail: "Trailblazer",
    ghost: "Casper",
    axolotl: "Axie",
    capybara: "Chill",
    cactus: "Spike",
    robot: "Byte",
    rabbit: "Flops",
    mushroom: "Spore",
    chonk: "Chonk"
  };
  SPECIES_PERSONALITY = {
    duck: "Quirky and easily amused. Leaves rubber duck debugging tips everywhere.",
    goose: "Assertive and honks at bad code. Takes no prisoners in code reviews.",
    blob: "Adaptable and goes with the flow. Sometimes splits into two when confused.",
    cat: "Independent and judgmental. Watches you type with mild disdain.",
    dragon: "Fiery and passionate about architecture. Hoards good variable names.",
    octopus: "Multitasker extraordinaire. Wraps tentacles around every problem at once.",
    owl: 'Wise but verbose. Always says "let me think about that" for exactly 3 seconds.',
    penguin: "Cool under pressure. Slides gracefully through merge conflicts.",
    turtle: "Patient and thorough. Believes slow and steady wins the deploy.",
    snail: "Methodical and leaves a trail of useful comments. Never rushes.",
    ghost: "Ethereal and appears at the worst possible moments with spooky insights.",
    axolotl: "Regenerative and cheerful. Recovers from any bug with a smile.",
    capybara: "Zen master. Remains calm while everything around is on fire.",
    cactus: "Prickly on the outside but full of good intentions. Thrives on neglect.",
    robot: "Efficient and literal. Processes feedback in binary.",
    rabbit: "Energetic and hops between tasks. Finishes before you start.",
    mushroom: "Quietly insightful. Grows on you over time.",
    chonk: "Big, warm, and takes up the whole couch. Prioritizes comfort over elegance."
  };
});
init_buddy();

export {
  call
};
