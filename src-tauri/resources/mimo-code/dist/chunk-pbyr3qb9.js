// @bun
import {
  axolotl,
  blob,
  cactus,
  capybara,
  cat,
  chonk,
  dragon,
  duck,
  ghost,
  goose,
  init_types,
  mushroom,
  octopus,
  owl,
  penguin,
  rabbit,
  robot,
  snail,
  turtle
} from "./chunk-1jvg23ym.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/buddy/sprites.ts
function renderSprite(bones, frame = 0) {
  const frames = BODIES[bones.species];
  const body = frames[frame % frames.length].map((line) => line.replaceAll("{E}", bones.eye));
  const lines = [...body];
  if (bones.hat !== "none" && !lines[0].trim()) {
    lines[0] = HAT_LINES[bones.hat];
  }
  if (!lines[0].trim() && frames.every((f) => !f[0].trim()))
    lines.shift();
  return lines;
}
function spriteFrameCount(species) {
  return BODIES[species].length;
}
function renderFace(bones) {
  const eye = bones.eye;
  switch (bones.species) {
    case duck:
    case goose:
      return `(${eye}>`;
    case blob:
      return `(${eye}${eye})`;
    case cat:
      return `=${eye}\u03C9${eye}=`;
    case dragon:
      return `<${eye}~${eye}>`;
    case octopus:
      return `~(${eye}${eye})~`;
    case owl:
      return `(${eye})(${eye})`;
    case penguin:
      return `(${eye}>)`;
    case turtle:
      return `[${eye}_${eye}]`;
    case snail:
      return `${eye}(@)`;
    case ghost:
      return `/${eye}${eye}\\`;
    case axolotl:
      return `}${eye}.${eye}{`;
    case capybara:
      return `(${eye}oo${eye})`;
    case cactus:
      return `|${eye}  ${eye}|`;
    case robot:
      return `[${eye}${eye}]`;
    case rabbit:
      return `(${eye}..${eye})`;
    case mushroom:
      return `|${eye}  ${eye}|`;
    case chonk:
      return `(${eye}.${eye})`;
  }
}
var BODIES, HAT_LINES;
var init_sprites = __esm(() => {
  init_types();
  BODIES = {
    [duck]: [
      [
        "            ",
        "    __      ",
        "  <({E} )___  ",
        "   (  ._>   ",
        "    `--\xB4    "
      ],
      [
        "            ",
        "    __      ",
        "  <({E} )___  ",
        "   (  ._>   ",
        "    `--\xB4~   "
      ],
      [
        "            ",
        "    __      ",
        "  <({E} )___  ",
        "   (  .__>  ",
        "    `--\xB4    "
      ]
    ],
    [goose]: [
      [
        "            ",
        "     ({E}>    ",
        "     ||     ",
        "   _(__)_   ",
        "    ^^^^    "
      ],
      [
        "            ",
        "    ({E}>     ",
        "     ||     ",
        "   _(__)_   ",
        "    ^^^^    "
      ],
      [
        "            ",
        "     ({E}>>   ",
        "     ||     ",
        "   _(__)_   ",
        "    ^^^^    "
      ]
    ],
    [blob]: [
      [
        "            ",
        "   .----.   ",
        "  ( {E}  {E} )  ",
        "  (      )  ",
        "   `----\xB4   "
      ],
      [
        "            ",
        "  .------.  ",
        " (  {E}  {E}  ) ",
        " (        ) ",
        "  `------\xB4  "
      ],
      [
        "            ",
        "    .--.    ",
        "   ({E}  {E})   ",
        "   (    )   ",
        "    `--\xB4    "
      ]
    ],
    [cat]: [
      [
        "            ",
        "   /\\_/\\    ",
        "  ( {E}   {E})  ",
        "  (  \u03C9  )   ",
        '  (")_(")   '
      ],
      [
        "            ",
        "   /\\_/\\    ",
        "  ( {E}   {E})  ",
        "  (  \u03C9  )   ",
        '  (")_(")~  '
      ],
      [
        "            ",
        "   /\\-/\\    ",
        "  ( {E}   {E})  ",
        "  (  \u03C9  )   ",
        '  (")_(")   '
      ]
    ],
    [dragon]: [
      [
        "            ",
        "  /^\\  /^\\  ",
        " <  {E}  {E}  > ",
        " (   ~~   ) ",
        "  `-vvvv-\xB4  "
      ],
      [
        "            ",
        "  /^\\  /^\\  ",
        " <  {E}  {E}  > ",
        " (        ) ",
        "  `-vvvv-\xB4  "
      ],
      [
        "   ~    ~   ",
        "  /^\\  /^\\  ",
        " <  {E}  {E}  > ",
        " (   ~~   ) ",
        "  `-vvvv-\xB4  "
      ]
    ],
    [octopus]: [
      [
        "            ",
        "   .----.   ",
        "  ( {E}  {E} )  ",
        "  (______)  ",
        "  /\\/\\/\\/\\  "
      ],
      [
        "            ",
        "   .----.   ",
        "  ( {E}  {E} )  ",
        "  (______)  ",
        "  \\/\\/\\/\\/  "
      ],
      [
        "     o      ",
        "   .----.   ",
        "  ( {E}  {E} )  ",
        "  (______)  ",
        "  /\\/\\/\\/\\  "
      ]
    ],
    [owl]: [
      [
        "            ",
        "   /\\  /\\   ",
        "  (({E})({E}))  ",
        "  (  ><  )  ",
        "   `----\xB4   "
      ],
      [
        "            ",
        "   /\\  /\\   ",
        "  (({E})({E}))  ",
        "  (  ><  )  ",
        "   .----.   "
      ],
      [
        "            ",
        "   /\\  /\\   ",
        "  (({E})(-))  ",
        "  (  ><  )  ",
        "   `----\xB4   "
      ]
    ],
    [penguin]: [
      [
        "            ",
        "  .---.     ",
        "  ({E}>{E})     ",
        " /(   )\\    ",
        "  `---\xB4     "
      ],
      [
        "            ",
        "  .---.     ",
        "  ({E}>{E})     ",
        " |(   )|    ",
        "  `---\xB4     "
      ],
      [
        "  .---.     ",
        "  ({E}>{E})     ",
        " /(   )\\    ",
        "  `---\xB4     ",
        "   ~ ~      "
      ]
    ],
    [turtle]: [
      [
        "            ",
        "   _,--._   ",
        "  ( {E}  {E} )  ",
        " /[______]\\ ",
        "  ``    ``  "
      ],
      [
        "            ",
        "   _,--._   ",
        "  ( {E}  {E} )  ",
        " /[______]\\ ",
        "   ``  ``   "
      ],
      [
        "            ",
        "   _,--._   ",
        "  ( {E}  {E} )  ",
        " /[======]\\ ",
        "  ``    ``  "
      ]
    ],
    [snail]: [
      [
        "            ",
        " {E}    .--.  ",
        "  \\  ( @ )  ",
        "   \\_`--\xB4   ",
        "  ~~~~~~~   "
      ],
      [
        "            ",
        "  {E}   .--.  ",
        "  |  ( @ )  ",
        "   \\_`--\xB4   ",
        "  ~~~~~~~   "
      ],
      [
        "            ",
        " {E}    .--.  ",
        "  \\  ( @  ) ",
        "   \\_`--\xB4   ",
        "   ~~~~~~   "
      ]
    ],
    [ghost]: [
      [
        "            ",
        "   .----.   ",
        "  / {E}  {E} \\  ",
        "  |      |  ",
        "  ~`~``~`~  "
      ],
      [
        "            ",
        "   .----.   ",
        "  / {E}  {E} \\  ",
        "  |      |  ",
        "  `~`~~`~`  "
      ],
      [
        "    ~  ~    ",
        "   .----.   ",
        "  / {E}  {E} \\  ",
        "  |      |  ",
        "  ~~`~~`~~  "
      ]
    ],
    [axolotl]: [
      [
        "            ",
        "}~(______)~{",
        "}~({E} .. {E})~{",
        "  ( .--. )  ",
        "  (_/  \\_)  "
      ],
      [
        "            ",
        "~}(______){~",
        "~}({E} .. {E}){~",
        "  ( .--. )  ",
        "  (_/  \\_)  "
      ],
      [
        "            ",
        "}~(______)~{",
        "}~({E} .. {E})~{",
        "  (  --  )  ",
        "  ~_/  \\_~  "
      ]
    ],
    [capybara]: [
      [
        "            ",
        "  n______n  ",
        " ( {E}    {E} ) ",
        " (   oo   ) ",
        "  `------\xB4  "
      ],
      [
        "            ",
        "  n______n  ",
        " ( {E}    {E} ) ",
        " (   Oo   ) ",
        "  `------\xB4  "
      ],
      [
        "    ~  ~    ",
        "  u______n  ",
        " ( {E}    {E} ) ",
        " (   oo   ) ",
        "  `------\xB4  "
      ]
    ],
    [cactus]: [
      [
        "            ",
        " n  ____  n ",
        " | |{E}  {E}| | ",
        " |_|    |_| ",
        "   |    |   "
      ],
      [
        "            ",
        "    ____    ",
        " n |{E}  {E}| n ",
        " |_|    |_| ",
        "   |    |   "
      ],
      [
        " n        n ",
        " |  ____  | ",
        " | |{E}  {E}| | ",
        " |_|    |_| ",
        "   |    |   "
      ]
    ],
    [robot]: [
      [
        "            ",
        "   .[||].   ",
        "  [ {E}  {E} ]  ",
        "  [ ==== ]  ",
        "  `------\xB4  "
      ],
      [
        "            ",
        "   .[||].   ",
        "  [ {E}  {E} ]  ",
        "  [ -==- ]  ",
        "  `------\xB4  "
      ],
      [
        "     *      ",
        "   .[||].   ",
        "  [ {E}  {E} ]  ",
        "  [ ==== ]  ",
        "  `------\xB4  "
      ]
    ],
    [rabbit]: [
      [
        "            ",
        "   (\\__/)   ",
        "  ( {E}  {E} )  ",
        " =(  ..  )= ",
        '  (")__(")  '
      ],
      [
        "            ",
        "   (|__/)   ",
        "  ( {E}  {E} )  ",
        " =(  ..  )= ",
        '  (")__(")  '
      ],
      [
        "            ",
        "   (\\__/)   ",
        "  ( {E}  {E} )  ",
        " =( .  . )= ",
        '  (")__(")  '
      ]
    ],
    [mushroom]: [
      [
        "            ",
        " .-o-OO-o-. ",
        "(__________)",
        "   |{E}  {E}|   ",
        "   |____|   "
      ],
      [
        "            ",
        " .-O-oo-O-. ",
        "(__________)",
        "   |{E}  {E}|   ",
        "   |____|   "
      ],
      [
        "   . o  .   ",
        " .-o-OO-o-. ",
        "(__________)",
        "   |{E}  {E}|   ",
        "   |____|   "
      ]
    ],
    [chonk]: [
      [
        "            ",
        "  /\\    /\\  ",
        " ( {E}    {E} ) ",
        " (   ..   ) ",
        "  `------\xB4  "
      ],
      [
        "            ",
        "  /\\    /|  ",
        " ( {E}    {E} ) ",
        " (   ..   ) ",
        "  `------\xB4  "
      ],
      [
        "            ",
        "  /\\    /\\  ",
        " ( {E}    {E} ) ",
        " (   ..   ) ",
        "  `------\xB4~ "
      ]
    ]
  };
  HAT_LINES = {
    none: "",
    crown: "   \\^^^/    ",
    tophat: "   [___]    ",
    propeller: "    -+-     ",
    halo: "   (   )    ",
    wizard: "    /^\\     ",
    beanie: "   (___)    ",
    tinyduck: "    ,>      "
  };
});

export { renderSprite, spriteFrameCount, renderFace, init_sprites };
