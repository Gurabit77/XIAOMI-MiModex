// @bun
import {
  getGlobalConfig,
  init_config1 as init_config
} from "./chunk-1ghcng4e.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/buddy/types.ts
var RARITIES, c, duck, goose, blob, cat, dragon, octopus, owl, penguin, turtle, snail, ghost, axolotl, capybara, cactus, robot, rabbit, mushroom, chonk, SPECIES, EYES, HATS, STAT_NAMES, RARITY_WEIGHTS, RARITY_STARS, RARITY_COLORS;
var init_types = __esm(() => {
  RARITIES = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary"
  ];
  c = String.fromCharCode;
  duck = c(100, 117, 99, 107);
  goose = c(103, 111, 111, 115, 101);
  blob = c(98, 108, 111, 98);
  cat = c(99, 97, 116);
  dragon = c(100, 114, 97, 103, 111, 110);
  octopus = c(111, 99, 116, 111, 112, 117, 115);
  owl = c(111, 119, 108);
  penguin = c(112, 101, 110, 103, 117, 105, 110);
  turtle = c(116, 117, 114, 116, 108, 101);
  snail = c(115, 110, 97, 105, 108);
  ghost = c(103, 104, 111, 115, 116);
  axolotl = c(97, 120, 111, 108, 111, 116, 108);
  capybara = c(99, 97, 112, 121, 98, 97, 114, 97);
  cactus = c(99, 97, 99, 116, 117, 115);
  robot = c(114, 111, 98, 111, 116);
  rabbit = c(114, 97, 98, 98, 105, 116);
  mushroom = c(109, 117, 115, 104, 114, 111, 111, 109);
  chonk = c(99, 104, 111, 110, 107);
  SPECIES = [
    duck,
    goose,
    blob,
    cat,
    dragon,
    octopus,
    owl,
    penguin,
    turtle,
    snail,
    ghost,
    axolotl,
    capybara,
    cactus,
    robot,
    rabbit,
    mushroom,
    chonk
  ];
  EYES = ["\xB7", "\u2726", "\xD7", "\u25C9", "@", "\xB0"];
  HATS = [
    "none",
    "crown",
    "tophat",
    "propeller",
    "halo",
    "wizard",
    "beanie",
    "tinyduck"
  ];
  STAT_NAMES = [
    "DEBUGGING",
    "PATIENCE",
    "CHAOS",
    "WISDOM",
    "SNARK"
  ];
  RARITY_WEIGHTS = {
    common: 60,
    uncommon: 25,
    rare: 10,
    epic: 4,
    legendary: 1
  };
  RARITY_STARS = {
    common: "\u2605",
    uncommon: "\u2605\u2605",
    rare: "\u2605\u2605\u2605",
    epic: "\u2605\u2605\u2605\u2605",
    legendary: "\u2605\u2605\u2605\u2605\u2605"
  };
  RARITY_COLORS = {
    common: "inactive",
    uncommon: "success",
    rare: "permission",
    epic: "autoAccept",
    legendary: "warning"
  };
});

// src/buddy/companion.ts
function mulberry32(seed) {
  let a = seed >>> 0;
  return function() {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function hashString(s) {
  if (typeof Bun !== "undefined") {
    return Number(BigInt(Bun.hash(s)) & 0xffffffffn);
  }
  let h = 2166136261;
  for (let i = 0;i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}
function rollRarity(rng) {
  const total = Object.values(RARITY_WEIGHTS).reduce((a, b) => a + b, 0);
  let roll = rng() * total;
  for (const rarity of RARITIES) {
    roll -= RARITY_WEIGHTS[rarity];
    if (roll < 0)
      return rarity;
  }
  return "common";
}
function rollStats(rng, rarity) {
  const floor = RARITY_FLOOR[rarity];
  const peak = pick(rng, STAT_NAMES);
  let dump = pick(rng, STAT_NAMES);
  while (dump === peak)
    dump = pick(rng, STAT_NAMES);
  const stats = {};
  for (const name of STAT_NAMES) {
    if (name === peak) {
      stats[name] = Math.min(100, floor + 50 + Math.floor(rng() * 30));
    } else if (name === dump) {
      stats[name] = Math.max(1, floor - 10 + Math.floor(rng() * 15));
    } else {
      stats[name] = floor + Math.floor(rng() * 40);
    }
  }
  return stats;
}
function rollFrom(rng) {
  const rarity = rollRarity(rng);
  const bones = {
    rarity,
    species: pick(rng, SPECIES),
    eye: pick(rng, EYES),
    hat: rarity === "common" ? "none" : pick(rng, HATS),
    shiny: rng() < 0.01,
    stats: rollStats(rng, rarity)
  };
  return { bones, inspirationSeed: Math.floor(rng() * 1e9) };
}
function rollWithSeed(seed) {
  return rollFrom(mulberry32(hashString(seed)));
}
function generateSeed() {
  return `rehatch-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function companionUserId() {
  const config = getGlobalConfig();
  return config.oauthAccount?.accountUuid ?? config.userID ?? "anon";
}
function getCompanion() {
  const stored = getGlobalConfig().companion;
  if (!stored)
    return;
  const seed = stored.seed ?? companionUserId();
  const { bones } = rollWithSeed(seed);
  return { ...stored, ...bones };
}
var RARITY_FLOOR;
var init_companion = __esm(() => {
  init_config();
  init_types();
  RARITY_FLOOR = {
    common: 5,
    uncommon: 15,
    rare: 25,
    epic: 35,
    legendary: 50
  };
});

export { duck, goose, blob, cat, dragon, octopus, owl, penguin, turtle, snail, ghost, axolotl, capybara, cactus, robot, rabbit, mushroom, chonk, STAT_NAMES, RARITY_STARS, RARITY_COLORS, init_types, rollWithSeed, generateSeed, getCompanion, init_companion };
