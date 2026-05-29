// @bun
import {
  require_detect_libc
} from "./chunk-6dj5t602.js";
import {
  require_coerce,
  require_gte,
  require_satisfies
} from "./chunk-0xjaqda8.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/is.js
var require_is = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var defined = (val) => typeof val !== "undefined" && val !== null;
  var object = (val) => typeof val === "object";
  var plainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
  var fn = (val) => typeof val === "function";
  var bool = (val) => typeof val === "boolean";
  var buffer = (val) => val instanceof Buffer;
  var typedArray = (val) => {
    if (defined(val)) {
      switch (val.constructor) {
        case Uint8Array:
        case Uint8ClampedArray:
        case Int8Array:
        case Uint16Array:
        case Int16Array:
        case Uint32Array:
        case Int32Array:
        case Float32Array:
        case Float64Array:
          return true;
      }
    }
    return false;
  };
  var arrayBuffer = (val) => val instanceof ArrayBuffer;
  var string = (val) => typeof val === "string" && val.length > 0;
  var number = (val) => typeof val === "number" && !Number.isNaN(val);
  var integer = (val) => Number.isInteger(val);
  var inRange = (val, min, max) => val >= min && val <= max;
  var inArray = (val, list) => list.includes(val);
  var invalidParameterError = (name, expected, actual) => new Error(`Expected ${expected} for ${name} but received ${actual} of type ${typeof actual}`);
  var nativeError = (native, context) => {
    context.message = native.message;
    return context;
  };
  module.exports = {
    defined,
    object,
    plainObject,
    fn,
    bool,
    buffer,
    typedArray,
    arrayBuffer,
    string,
    number,
    integer,
    inRange,
    inArray,
    invalidParameterError,
    nativeError
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/package.json
var require_package = __commonJS((exports, module) => {
  module.exports = {
    name: "sharp",
    description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
    version: "0.34.5",
    author: "Lovell Fuller <npm@lovell.info>",
    homepage: "https://sharp.pixelplumbing.com",
    contributors: [
      "Pierre Inglebert <pierre.inglebert@gmail.com>",
      "Jonathan Ong <jonathanrichardong@gmail.com>",
      "Chanon Sajjamanochai <chanon.s@gmail.com>",
      "Juliano Julio <julianojulio@gmail.com>",
      "Daniel Gasienica <daniel@gasienica.ch>",
      "Julian Walker <julian@fiftythree.com>",
      "Amit Pitaru <pitaru.amit@gmail.com>",
      "Brandon Aaron <hello.brandon@aaron.sh>",
      "Andreas Lind <andreas@one.com>",
      "Maurus Cuelenaere <mcuelenaere@gmail.com>",
      "Linus Unneb\xE4ck <linus@folkdatorn.se>",
      "Victor Mateevitsi <mvictoras@gmail.com>",
      "Alaric Holloway <alaric.holloway@gmail.com>",
      "Bernhard K. Weisshuhn <bkw@codingforce.com>",
      "Chris Riley <criley@primedia.com>",
      "David Carley <dacarley@gmail.com>",
      "John Tobin <john@limelightmobileinc.com>",
      "Kenton Gray <kentongray@gmail.com>",
      "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
      "Samy Al Zahrani <samyalzahrany@gmail.com>",
      "Chintan Thakkar <lemnisk8@gmail.com>",
      "F. Orlando Galashan <frulo@gmx.de>",
      "Kleis Auke Wolthuizen <info@kleisauke.nl>",
      "Matt Hirsch <mhirsch@media.mit.edu>",
      "Matthias Thoemmes <thoemmes@gmail.com>",
      "Patrick Paskaris <patrick@paskaris.gr>",
      "J\xE9r\xE9my Lal <kapouer@melix.org>",
      "Rahul Nanwani <r.nanwani@gmail.com>",
      "Alice Monday <alice0meta@gmail.com>",
      "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
      "YvesBos <yves_bos@outlook.com>",
      "Guy Maliar <guy@tailorbrands.com>",
      "Nicolas Coden <nicolas@ncoden.fr>",
      "Matt Parrish <matt.r.parrish@gmail.com>",
      "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
      "Matthew McEachen <matthew+github@mceachen.org>",
      "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
      "Kenric D'Souza <kenric.dsouza@gmail.com>",
      "Oleh Aleinyk <oleg.aleynik@gmail.com>",
      "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
      "Andrea Bianco <andrea.bianco@unibas.ch>",
      "Rik Heywood <rik@rik.org>",
      "Thomas Parisot <hi@oncletom.io>",
      "Nathan Graves <nathanrgraves+github@gmail.com>",
      "Tom Lokhorst <tom@lokhorst.eu>",
      "Espen Hovlandsdal <espen@hovlandsdal.com>",
      "Sylvain Dumont <sylvain.dumont35@gmail.com>",
      "Alun Davies <alun.owain.davies@googlemail.com>",
      "Aidan Hoolachan <ajhoolachan21@gmail.com>",
      "Axel Eirola <axel.eirola@iki.fi>",
      "Freezy <freezy@xbmc.org>",
      "Daiz <taneli.vatanen@gmail.com>",
      "Julian Aubourg <j@ubourg.net>",
      "Keith Belovay <keith@picthrive.com>",
      "Michael B. Klein <mbklein@gmail.com>",
      "Jordan Prudhomme <jordan@raboland.fr>",
      "Ilya Ovdin <iovdin@gmail.com>",
      "Andargor <andargor@yahoo.com>",
      "Paul Neave <paul.neave@gmail.com>",
      "Brendan Kennedy <brenwken@gmail.com>",
      "Brychan Bennett-Odlum <git@brychan.io>",
      "Edward Silverton <e.silverton@gmail.com>",
      "Roman Malieiev <aromaleev@gmail.com>",
      "Tomas Szabo <tomas.szabo@deftomat.com>",
      "Robert O'Rourke <robert@o-rourke.org>",
      "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
      "Christian Flintrup <chr@gigahost.dk>",
      "Manan Jadhav <manan@motionden.com>",
      "Leon Radley <leon@radley.se>",
      "alza54 <alza54@thiocod.in>",
      "Jacob Smith <jacob@frende.me>",
      "Michael Nutt <michael@nutt.im>",
      "Brad Parham <baparham@gmail.com>",
      "Taneli Vatanen <taneli.vatanen@gmail.com>",
      "Joris Dugu\xE9 <zaruike10@gmail.com>",
      "Chris Banks <christopher.bradley.banks@gmail.com>",
      "Ompal Singh <ompal.hitm09@gmail.com>",
      "Brodan <christopher.hranj@gmail.com>",
      "Ankur Parihar <ankur.github@gmail.com>",
      "Brahim Ait elhaj <brahima@gmail.com>",
      "Mart Jansink <m.jansink@gmail.com>",
      "Lachlan Newman <lachnewman007@gmail.com>",
      "Dennis Beatty <dennis@dcbeatty.com>",
      "Ingvar Stepanyan <me@rreverser.com>",
      "Don Denton <don@happycollision.com>"
    ],
    scripts: {
      build: "node install/build.js",
      install: "node install/check.js || npm run build",
      clean: "rm -rf src/build/ .nyc_output/ coverage/ test/fixtures/output.*",
      test: "npm run lint && npm run test-unit",
      lint: "npm run lint-cpp && npm run lint-js && npm run lint-types",
      "lint-cpp": "cpplint --quiet src/*.h src/*.cc",
      "lint-js": "biome lint",
      "lint-types": "tsd --files ./test/types/sharp.test-d.ts",
      "test-leak": "./test/leak/leak.sh",
      "test-unit": "node --experimental-test-coverage test/unit.mjs",
      "package-from-local-build": "node npm/from-local-build.js",
      "package-release-notes": "node npm/release-notes.js",
      "docs-build": "node docs/build.mjs",
      "docs-serve": "cd docs && npm start",
      "docs-publish": "cd docs && npm run build && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
    },
    type: "commonjs",
    main: "lib/index.js",
    types: "lib/index.d.ts",
    files: [
      "install",
      "lib",
      "src/*.{cc,h,gyp}"
    ],
    repository: {
      type: "git",
      url: "git://github.com/lovell/sharp.git"
    },
    keywords: [
      "jpeg",
      "png",
      "webp",
      "avif",
      "tiff",
      "gif",
      "svg",
      "jp2",
      "dzi",
      "image",
      "resize",
      "thumbnail",
      "crop",
      "embed",
      "libvips",
      "vips"
    ],
    dependencies: {
      "@img/colour": "^1.0.0",
      "detect-libc": "^2.1.2",
      semver: "^7.7.3"
    },
    optionalDependencies: {
      "@img/sharp-darwin-arm64": "0.34.5",
      "@img/sharp-darwin-x64": "0.34.5",
      "@img/sharp-libvips-darwin-arm64": "1.2.4",
      "@img/sharp-libvips-darwin-x64": "1.2.4",
      "@img/sharp-libvips-linux-arm": "1.2.4",
      "@img/sharp-libvips-linux-arm64": "1.2.4",
      "@img/sharp-libvips-linux-ppc64": "1.2.4",
      "@img/sharp-libvips-linux-riscv64": "1.2.4",
      "@img/sharp-libvips-linux-s390x": "1.2.4",
      "@img/sharp-libvips-linux-x64": "1.2.4",
      "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
      "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
      "@img/sharp-linux-arm": "0.34.5",
      "@img/sharp-linux-arm64": "0.34.5",
      "@img/sharp-linux-ppc64": "0.34.5",
      "@img/sharp-linux-riscv64": "0.34.5",
      "@img/sharp-linux-s390x": "0.34.5",
      "@img/sharp-linux-x64": "0.34.5",
      "@img/sharp-linuxmusl-arm64": "0.34.5",
      "@img/sharp-linuxmusl-x64": "0.34.5",
      "@img/sharp-wasm32": "0.34.5",
      "@img/sharp-win32-arm64": "0.34.5",
      "@img/sharp-win32-ia32": "0.34.5",
      "@img/sharp-win32-x64": "0.34.5"
    },
    devDependencies: {
      "@biomejs/biome": "^2.3.4",
      "@cpplint/cli": "^0.1.0",
      "@emnapi/runtime": "^1.7.0",
      "@img/sharp-libvips-dev": "1.2.4",
      "@img/sharp-libvips-dev-wasm32": "1.2.4",
      "@img/sharp-libvips-win32-arm64": "1.2.4",
      "@img/sharp-libvips-win32-ia32": "1.2.4",
      "@img/sharp-libvips-win32-x64": "1.2.4",
      "@types/node": "*",
      emnapi: "^1.7.0",
      "exif-reader": "^2.0.2",
      "extract-zip": "^2.0.1",
      icc: "^3.0.0",
      "jsdoc-to-markdown": "^9.1.3",
      "node-addon-api": "^8.5.0",
      "node-gyp": "^11.5.0",
      "tar-fs": "^3.1.1",
      tsd: "^0.33.0"
    },
    license: "Apache-2.0",
    engines: {
      node: "^18.17.0 || ^20.3.0 || >=21.0.0"
    },
    config: {
      libvips: ">=8.17.3"
    },
    funding: {
      url: "https://opencollective.com/libvips"
    }
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/libvips.js
var require_libvips = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var { spawnSync } = __require("child_process");
  var { createHash } = __require("crypto");
  var semverCoerce = require_coerce();
  var semverGreaterThanOrEqualTo = require_gte();
  var semverSatisfies = require_satisfies();
  var detectLibc = require_detect_libc();
  var { config, engines, optionalDependencies } = require_package();
  var minimumLibvipsVersionLabelled = process.env.npm_package_config_libvips || config.libvips;
  var minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
  var prebuiltPlatforms = [
    "darwin-arm64",
    "darwin-x64",
    "linux-arm",
    "linux-arm64",
    "linux-ppc64",
    "linux-riscv64",
    "linux-s390x",
    "linux-x64",
    "linuxmusl-arm64",
    "linuxmusl-x64",
    "win32-arm64",
    "win32-ia32",
    "win32-x64"
  ];
  var spawnSyncOptions = {
    encoding: "utf8",
    shell: true
  };
  var log = (item) => {
    if (item instanceof Error) {
      console.error(`sharp: Installation error: ${item.message}`);
    } else {
      console.log(`sharp: ${item}`);
    }
  };
  var runtimeLibc = () => detectLibc.isNonGlibcLinuxSync() ? detectLibc.familySync() : "";
  var runtimePlatformArch = () => `${process.platform}${runtimeLibc()}-${process.arch}`;
  var buildPlatformArch = () => {
    if (isEmscripten()) {
      return "wasm32";
    }
    const { npm_config_arch, npm_config_platform, npm_config_libc } = process.env;
    const libc = typeof npm_config_libc === "string" ? npm_config_libc : runtimeLibc();
    return `${npm_config_platform || process.platform}${libc}-${npm_config_arch || process.arch}`;
  };
  var buildSharpLibvipsIncludeDir = () => {
    try {
      return __require(`@img/sharp-libvips-dev-${buildPlatformArch()}/include`);
    } catch {
      try {
        return (()=>{throw new Error("Cannot require module "+"@img/sharp-libvips-dev/include");})();
      } catch {}
    }
    return "";
  };
  var buildSharpLibvipsCPlusPlusDir = () => {
    try {
      return (()=>{throw new Error("Cannot require module "+"@img/sharp-libvips-dev/cplusplus");})();
    } catch {}
    return "";
  };
  var buildSharpLibvipsLibDir = () => {
    try {
      return __require(`@img/sharp-libvips-dev-${buildPlatformArch()}/lib`);
    } catch {
      try {
        return __require(`@img/sharp-libvips-${buildPlatformArch()}/lib`);
      } catch {}
    }
    return "";
  };
  var isUnsupportedNodeRuntime = () => {
    if (process.release?.name === "node" && process.versions) {
      if (!semverSatisfies(process.versions.node, engines.node)) {
        return { found: process.versions.node, expected: engines.node };
      }
    }
  };
  var isEmscripten = () => {
    const { CC } = process.env;
    return Boolean(CC?.endsWith("/emcc"));
  };
  var isRosetta = () => {
    if (process.platform === "darwin" && process.arch === "x64") {
      const translated = spawnSync("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
      return (translated || "").trim() === "sysctl.proc_translated: 1";
    }
    return false;
  };
  var sha512 = (s) => createHash("sha512").update(s).digest("hex");
  var yarnLocator = () => {
    try {
      const identHash = sha512(`imgsharp-libvips-${buildPlatformArch()}`);
      const npmVersion = semverCoerce(optionalDependencies[`@img/sharp-libvips-${buildPlatformArch()}`], {
        includePrerelease: true
      }).version;
      return sha512(`${identHash}npm:${npmVersion}`).slice(0, 10);
    } catch {}
    return "";
  };
  var spawnRebuild = () => spawnSync(`node-gyp rebuild --directory=src ${isEmscripten() ? "--nodedir=emscripten" : ""}`, {
    ...spawnSyncOptions,
    stdio: "inherit"
  }).status;
  var globalLibvipsVersion = () => {
    if (process.platform !== "win32") {
      const globalLibvipsVersion2 = spawnSync("pkg-config --modversion vips-cpp", {
        ...spawnSyncOptions,
        env: {
          ...process.env,
          PKG_CONFIG_PATH: pkgConfigPath()
        }
      }).stdout;
      return (globalLibvipsVersion2 || "").trim();
    } else {
      return "";
    }
  };
  var pkgConfigPath = () => {
    if (process.platform !== "win32") {
      const brewPkgConfigPath = spawnSync('which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2', spawnSyncOptions).stdout || "";
      return [
        brewPkgConfigPath.trim(),
        process.env.PKG_CONFIG_PATH,
        "/usr/local/lib/pkgconfig",
        "/usr/lib/pkgconfig",
        "/usr/local/libdata/pkgconfig",
        "/usr/libdata/pkgconfig"
      ].filter(Boolean).join(":");
    } else {
      return "";
    }
  };
  var skipSearch = (status, reason, logger) => {
    if (logger) {
      logger(`Detected ${reason}, skipping search for globally-installed libvips`);
    }
    return status;
  };
  var useGlobalLibvips = (logger) => {
    if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
      return skipSearch(false, "SHARP_IGNORE_GLOBAL_LIBVIPS", logger);
    }
    if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === true) {
      return skipSearch(true, "SHARP_FORCE_GLOBAL_LIBVIPS", logger);
    }
    if (isRosetta()) {
      return skipSearch(false, "Rosetta", logger);
    }
    const globalVipsVersion = globalLibvipsVersion();
    return !!globalVipsVersion && semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
  };
  module.exports = {
    minimumLibvipsVersion,
    prebuiltPlatforms,
    buildPlatformArch,
    buildSharpLibvipsIncludeDir,
    buildSharpLibvipsCPlusPlusDir,
    buildSharpLibvipsLibDir,
    isUnsupportedNodeRuntime,
    runtimePlatformArch,
    log,
    yarnLocator,
    spawnRebuild,
    globalLibvipsVersion,
    pkgConfigPath,
    useGlobalLibvips
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/sharp.js
var require_sharp = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var { familySync, versionSync } = require_detect_libc();
  var { runtimePlatformArch, isUnsupportedNodeRuntime, prebuiltPlatforms, minimumLibvipsVersion } = require_libvips();
  var runtimePlatform = runtimePlatformArch();
  var paths = [
    `../src/build/Release/sharp-${runtimePlatform}.node`,
    "../src/build/Release/sharp-wasm32.node",
    `@img/sharp-${runtimePlatform}/sharp.node`,
    "@img/sharp-wasm32/sharp.node"
  ];
  var path;
  var sharp;
  var errors = [];
  for (path of paths) {
    try {
      sharp = __require(path);
      break;
    } catch (err) {
      errors.push(err);
    }
  }
  if (sharp && path.startsWith("@img/sharp-linux-x64") && !sharp._isUsingX64V2()) {
    const err = new Error("Prebuilt binaries for linux-x64 require v2 microarchitecture");
    err.code = "Unsupported CPU";
    errors.push(err);
    sharp = null;
  }
  if (sharp) {
    module.exports = sharp;
  } else {
    const [isLinux, isMacOs, isWindows] = ["linux", "darwin", "win32"].map((os) => runtimePlatform.startsWith(os));
    const help = [`Could not load the "sharp" module using the ${runtimePlatform} runtime`];
    errors.forEach((err) => {
      if (err.code !== "MODULE_NOT_FOUND") {
        help.push(`${err.code}: ${err.message}`);
      }
    });
    const messages = errors.map((err) => err.message).join(" ");
    help.push("Possible solutions:");
    if (isUnsupportedNodeRuntime()) {
      const { found, expected } = isUnsupportedNodeRuntime();
      help.push("- Please upgrade Node.js:", `    Found ${found}`, `    Requires ${expected}`);
    } else if (prebuiltPlatforms.includes(runtimePlatform)) {
      const [os, cpu] = runtimePlatform.split("-");
      const libc = os.endsWith("musl") ? " --libc=musl" : "";
      help.push("- Ensure optional dependencies can be installed:", "    npm install --include=optional sharp", "- Ensure your package manager supports multi-platform installation:", "    See https://sharp.pixelplumbing.com/install#cross-platform", "- Add platform-specific dependencies:", `    npm install --os=${os.replace("musl", "")}${libc} --cpu=${cpu} sharp`);
    } else {
      help.push(`- Manually install libvips >= ${minimumLibvipsVersion}`, "- Add experimental WebAssembly-based dependencies:", "    npm install --cpu=wasm32 sharp", "    npm install @img/sharp-wasm32");
    }
    if (isLinux && /(symbol not found|CXXABI_)/i.test(messages)) {
      try {
        const { config } = __require(`@img/sharp-libvips-${runtimePlatform}/package`);
        const libcFound = `${familySync()} ${versionSync()}`;
        const libcRequires = `${config.musl ? "musl" : "glibc"} ${config.musl || config.glibc}`;
        help.push("- Update your OS:", `    Found ${libcFound}`, `    Requires ${libcRequires}`);
      } catch (_errEngines) {}
    }
    if (isLinux && /\/snap\/core[0-9]{2}/.test(messages)) {
      help.push("- Remove the Node.js Snap, which does not support native modules", "    snap remove node");
    }
    if (isMacOs && /Incompatible library version/.test(messages)) {
      help.push("- Update Homebrew:", "    brew update && brew upgrade vips");
    }
    if (errors.some((err) => err.code === "ERR_DLOPEN_DISABLED")) {
      help.push("- Run Node.js without using the --no-addons flag");
    }
    if (isWindows && /The specified procedure could not be found/.test(messages)) {
      help.push("- Using the canvas package on Windows?", "    See https://sharp.pixelplumbing.com/install#canvas-and-windows", "- Check for outdated versions of sharp in the dependency tree:", "    npm ls sharp");
    }
    help.push("- Consult the installation documentation:", "    See https://sharp.pixelplumbing.com/install");
    throw new Error(help.join(`
`));
  }
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/constructor.js
var require_constructor = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var util = __require("util");
  var stream = __require("stream");
  var is = require_is();
  require_sharp();
  var debuglog = util.debuglog("sharp");
  var queueListener = (queueLength) => {
    Sharp.queue.emit("change", queueLength);
  };
  var Sharp = function(input, options) {
    if (arguments.length === 1 && !is.defined(input)) {
      throw new Error("Invalid input");
    }
    if (!(this instanceof Sharp)) {
      return new Sharp(input, options);
    }
    stream.Duplex.call(this);
    this.options = {
      topOffsetPre: -1,
      leftOffsetPre: -1,
      widthPre: -1,
      heightPre: -1,
      topOffsetPost: -1,
      leftOffsetPost: -1,
      widthPost: -1,
      heightPost: -1,
      width: -1,
      height: -1,
      canvas: "crop",
      position: 0,
      resizeBackground: [0, 0, 0, 255],
      angle: 0,
      rotationAngle: 0,
      rotationBackground: [0, 0, 0, 255],
      rotateBefore: false,
      orientBefore: false,
      flip: false,
      flop: false,
      extendTop: 0,
      extendBottom: 0,
      extendLeft: 0,
      extendRight: 0,
      extendBackground: [0, 0, 0, 255],
      extendWith: "background",
      withoutEnlargement: false,
      withoutReduction: false,
      affineMatrix: [],
      affineBackground: [0, 0, 0, 255],
      affineIdx: 0,
      affineIdy: 0,
      affineOdx: 0,
      affineOdy: 0,
      affineInterpolator: this.constructor.interpolators.bilinear,
      kernel: "lanczos3",
      fastShrinkOnLoad: true,
      tint: [-1, 0, 0, 0],
      flatten: false,
      flattenBackground: [0, 0, 0],
      unflatten: false,
      negate: false,
      negateAlpha: true,
      medianSize: 0,
      blurSigma: 0,
      precision: "integer",
      minAmpl: 0.2,
      sharpenSigma: 0,
      sharpenM1: 1,
      sharpenM2: 2,
      sharpenX1: 2,
      sharpenY2: 10,
      sharpenY3: 20,
      threshold: 0,
      thresholdGrayscale: true,
      trimBackground: [],
      trimThreshold: -1,
      trimLineArt: false,
      dilateWidth: 0,
      erodeWidth: 0,
      gamma: 0,
      gammaOut: 0,
      greyscale: false,
      normalise: false,
      normaliseLower: 1,
      normaliseUpper: 99,
      claheWidth: 0,
      claheHeight: 0,
      claheMaxSlope: 3,
      brightness: 1,
      saturation: 1,
      hue: 0,
      lightness: 0,
      booleanBufferIn: null,
      booleanFileIn: "",
      joinChannelIn: [],
      extractChannel: -1,
      removeAlpha: false,
      ensureAlpha: -1,
      colourspace: "srgb",
      colourspacePipeline: "last",
      composite: [],
      fileOut: "",
      formatOut: "input",
      streamOut: false,
      keepMetadata: 0,
      withMetadataOrientation: -1,
      withMetadataDensity: 0,
      withIccProfile: "",
      withExif: {},
      withExifMerge: true,
      withXmp: "",
      resolveWithObject: false,
      loop: -1,
      delay: [],
      jpegQuality: 80,
      jpegProgressive: false,
      jpegChromaSubsampling: "4:2:0",
      jpegTrellisQuantisation: false,
      jpegOvershootDeringing: false,
      jpegOptimiseScans: false,
      jpegOptimiseCoding: true,
      jpegQuantisationTable: 0,
      pngProgressive: false,
      pngCompressionLevel: 6,
      pngAdaptiveFiltering: false,
      pngPalette: false,
      pngQuality: 100,
      pngEffort: 7,
      pngBitdepth: 8,
      pngDither: 1,
      jp2Quality: 80,
      jp2TileHeight: 512,
      jp2TileWidth: 512,
      jp2Lossless: false,
      jp2ChromaSubsampling: "4:4:4",
      webpQuality: 80,
      webpAlphaQuality: 100,
      webpLossless: false,
      webpNearLossless: false,
      webpSmartSubsample: false,
      webpSmartDeblock: false,
      webpPreset: "default",
      webpEffort: 4,
      webpMinSize: false,
      webpMixed: false,
      gifBitdepth: 8,
      gifEffort: 7,
      gifDither: 1,
      gifInterFrameMaxError: 0,
      gifInterPaletteMaxError: 3,
      gifKeepDuplicateFrames: false,
      gifReuse: true,
      gifProgressive: false,
      tiffQuality: 80,
      tiffCompression: "jpeg",
      tiffBigtiff: false,
      tiffPredictor: "horizontal",
      tiffPyramid: false,
      tiffMiniswhite: false,
      tiffBitdepth: 8,
      tiffTile: false,
      tiffTileHeight: 256,
      tiffTileWidth: 256,
      tiffXres: 1,
      tiffYres: 1,
      tiffResolutionUnit: "inch",
      heifQuality: 50,
      heifLossless: false,
      heifCompression: "av1",
      heifEffort: 4,
      heifChromaSubsampling: "4:4:4",
      heifBitdepth: 8,
      jxlDistance: 1,
      jxlDecodingTier: 0,
      jxlEffort: 7,
      jxlLossless: false,
      rawDepth: "uchar",
      tileSize: 256,
      tileOverlap: 0,
      tileContainer: "fs",
      tileLayout: "dz",
      tileFormat: "last",
      tileDepth: "last",
      tileAngle: 0,
      tileSkipBlanks: -1,
      tileBackground: [255, 255, 255, 255],
      tileCentre: false,
      tileId: "https://example.com/iiif",
      tileBasename: "",
      timeoutSeconds: 0,
      linearA: [],
      linearB: [],
      pdfBackground: [255, 255, 255, 255],
      debuglog: (warning) => {
        this.emit("warning", warning);
        debuglog(warning);
      },
      queueListener
    };
    this.options.input = this._createInputDescriptor(input, options, { allowStream: true });
    return this;
  };
  Object.setPrototypeOf(Sharp.prototype, stream.Duplex.prototype);
  Object.setPrototypeOf(Sharp, stream.Duplex);
  function clone() {
    const clone2 = this.constructor.call();
    const { debuglog: debuglog2, queueListener: queueListener2, ...options } = this.options;
    clone2.options = structuredClone(options);
    clone2.options.debuglog = debuglog2;
    clone2.options.queueListener = queueListener2;
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        clone2.options.input.buffer = this.options.input.buffer;
        clone2.emit("finish");
      });
    }
    return clone2;
  }
  Object.assign(Sharp.prototype, { clone });
  module.exports = Sharp;
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/input.js
var require_input = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var is = require_is();
  var sharp = require_sharp();
  var align = {
    left: "low",
    top: "low",
    low: "low",
    center: "centre",
    centre: "centre",
    right: "high",
    bottom: "high",
    high: "high"
  };
  var inputStreamParameters = [
    "failOn",
    "limitInputPixels",
    "unlimited",
    "animated",
    "autoOrient",
    "density",
    "ignoreIcc",
    "page",
    "pages",
    "sequentialRead",
    "jp2",
    "openSlide",
    "pdf",
    "raw",
    "svg",
    "tiff",
    "failOnError",
    "openSlideLevel",
    "pdfBackground",
    "tiffSubifd"
  ];
  function _inputOptionsFromObject(obj) {
    const params = inputStreamParameters.filter((p) => is.defined(obj[p])).map((p) => [p, obj[p]]);
    return params.length ? Object.fromEntries(params) : undefined;
  }
  function _createInputDescriptor(input, inputOptions, containerOptions) {
    const inputDescriptor = {
      autoOrient: false,
      failOn: "warning",
      limitInputPixels: 16383 ** 2,
      ignoreIcc: false,
      unlimited: false,
      sequentialRead: true
    };
    if (is.string(input)) {
      inputDescriptor.file = input;
    } else if (is.buffer(input)) {
      if (input.length === 0) {
        throw Error("Input Buffer is empty");
      }
      inputDescriptor.buffer = input;
    } else if (is.arrayBuffer(input)) {
      if (input.byteLength === 0) {
        throw Error("Input bit Array is empty");
      }
      inputDescriptor.buffer = Buffer.from(input, 0, input.byteLength);
    } else if (is.typedArray(input)) {
      if (input.length === 0) {
        throw Error("Input Bit Array is empty");
      }
      inputDescriptor.buffer = Buffer.from(input.buffer, input.byteOffset, input.byteLength);
    } else if (is.plainObject(input) && !is.defined(inputOptions)) {
      inputOptions = input;
      if (_inputOptionsFromObject(inputOptions)) {
        inputDescriptor.buffer = [];
      }
    } else if (!is.defined(input) && !is.defined(inputOptions) && is.object(containerOptions) && containerOptions.allowStream) {
      inputDescriptor.buffer = [];
    } else if (Array.isArray(input)) {
      if (input.length > 1) {
        if (!this.options.joining) {
          this.options.joining = true;
          this.options.join = input.map((i) => this._createInputDescriptor(i));
        } else {
          throw new Error("Recursive join is unsupported");
        }
      } else {
        throw new Error("Expected at least two images to join");
      }
    } else {
      throw new Error(`Unsupported input '${input}' of type ${typeof input}${is.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
    }
    if (is.object(inputOptions)) {
      if (is.defined(inputOptions.failOnError)) {
        if (is.bool(inputOptions.failOnError)) {
          inputDescriptor.failOn = inputOptions.failOnError ? "warning" : "none";
        } else {
          throw is.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
        }
      }
      if (is.defined(inputOptions.failOn)) {
        if (is.string(inputOptions.failOn) && is.inArray(inputOptions.failOn, ["none", "truncated", "error", "warning"])) {
          inputDescriptor.failOn = inputOptions.failOn;
        } else {
          throw is.invalidParameterError("failOn", "one of: none, truncated, error, warning", inputOptions.failOn);
        }
      }
      if (is.defined(inputOptions.autoOrient)) {
        if (is.bool(inputOptions.autoOrient)) {
          inputDescriptor.autoOrient = inputOptions.autoOrient;
        } else {
          throw is.invalidParameterError("autoOrient", "boolean", inputOptions.autoOrient);
        }
      }
      if (is.defined(inputOptions.density)) {
        if (is.inRange(inputOptions.density, 1, 1e5)) {
          inputDescriptor.density = inputOptions.density;
        } else {
          throw is.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
        }
      }
      if (is.defined(inputOptions.ignoreIcc)) {
        if (is.bool(inputOptions.ignoreIcc)) {
          inputDescriptor.ignoreIcc = inputOptions.ignoreIcc;
        } else {
          throw is.invalidParameterError("ignoreIcc", "boolean", inputOptions.ignoreIcc);
        }
      }
      if (is.defined(inputOptions.limitInputPixels)) {
        if (is.bool(inputOptions.limitInputPixels)) {
          inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? 16383 ** 2 : 0;
        } else if (is.integer(inputOptions.limitInputPixels) && is.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) {
          inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
        } else {
          throw is.invalidParameterError("limitInputPixels", "positive integer", inputOptions.limitInputPixels);
        }
      }
      if (is.defined(inputOptions.unlimited)) {
        if (is.bool(inputOptions.unlimited)) {
          inputDescriptor.unlimited = inputOptions.unlimited;
        } else {
          throw is.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
        }
      }
      if (is.defined(inputOptions.sequentialRead)) {
        if (is.bool(inputOptions.sequentialRead)) {
          inputDescriptor.sequentialRead = inputOptions.sequentialRead;
        } else {
          throw is.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
        }
      }
      if (is.defined(inputOptions.raw)) {
        if (is.object(inputOptions.raw) && is.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is.integer(inputOptions.raw.channels) && is.inRange(inputOptions.raw.channels, 1, 4)) {
          inputDescriptor.rawWidth = inputOptions.raw.width;
          inputDescriptor.rawHeight = inputOptions.raw.height;
          inputDescriptor.rawChannels = inputOptions.raw.channels;
          switch (input.constructor) {
            case Uint8Array:
            case Uint8ClampedArray:
              inputDescriptor.rawDepth = "uchar";
              break;
            case Int8Array:
              inputDescriptor.rawDepth = "char";
              break;
            case Uint16Array:
              inputDescriptor.rawDepth = "ushort";
              break;
            case Int16Array:
              inputDescriptor.rawDepth = "short";
              break;
            case Uint32Array:
              inputDescriptor.rawDepth = "uint";
              break;
            case Int32Array:
              inputDescriptor.rawDepth = "int";
              break;
            case Float32Array:
              inputDescriptor.rawDepth = "float";
              break;
            case Float64Array:
              inputDescriptor.rawDepth = "double";
              break;
            default:
              inputDescriptor.rawDepth = "uchar";
              break;
          }
        } else {
          throw new Error("Expected width, height and channels for raw pixel input");
        }
        inputDescriptor.rawPremultiplied = false;
        if (is.defined(inputOptions.raw.premultiplied)) {
          if (is.bool(inputOptions.raw.premultiplied)) {
            inputDescriptor.rawPremultiplied = inputOptions.raw.premultiplied;
          } else {
            throw is.invalidParameterError("raw.premultiplied", "boolean", inputOptions.raw.premultiplied);
          }
        }
        inputDescriptor.rawPageHeight = 0;
        if (is.defined(inputOptions.raw.pageHeight)) {
          if (is.integer(inputOptions.raw.pageHeight) && inputOptions.raw.pageHeight > 0 && inputOptions.raw.pageHeight <= inputOptions.raw.height) {
            if (inputOptions.raw.height % inputOptions.raw.pageHeight !== 0) {
              throw new Error(`Expected raw.height ${inputOptions.raw.height} to be a multiple of raw.pageHeight ${inputOptions.raw.pageHeight}`);
            }
            inputDescriptor.rawPageHeight = inputOptions.raw.pageHeight;
          } else {
            throw is.invalidParameterError("raw.pageHeight", "positive integer", inputOptions.raw.pageHeight);
          }
        }
      }
      if (is.defined(inputOptions.animated)) {
        if (is.bool(inputOptions.animated)) {
          inputDescriptor.pages = inputOptions.animated ? -1 : 1;
        } else {
          throw is.invalidParameterError("animated", "boolean", inputOptions.animated);
        }
      }
      if (is.defined(inputOptions.pages)) {
        if (is.integer(inputOptions.pages) && is.inRange(inputOptions.pages, -1, 1e5)) {
          inputDescriptor.pages = inputOptions.pages;
        } else {
          throw is.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
        }
      }
      if (is.defined(inputOptions.page)) {
        if (is.integer(inputOptions.page) && is.inRange(inputOptions.page, 0, 1e5)) {
          inputDescriptor.page = inputOptions.page;
        } else {
          throw is.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
        }
      }
      if (is.object(inputOptions.openSlide) && is.defined(inputOptions.openSlide.level)) {
        if (is.integer(inputOptions.openSlide.level) && is.inRange(inputOptions.openSlide.level, 0, 256)) {
          inputDescriptor.openSlideLevel = inputOptions.openSlide.level;
        } else {
          throw is.invalidParameterError("openSlide.level", "integer between 0 and 256", inputOptions.openSlide.level);
        }
      } else if (is.defined(inputOptions.level)) {
        if (is.integer(inputOptions.level) && is.inRange(inputOptions.level, 0, 256)) {
          inputDescriptor.openSlideLevel = inputOptions.level;
        } else {
          throw is.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
        }
      }
      if (is.object(inputOptions.tiff) && is.defined(inputOptions.tiff.subifd)) {
        if (is.integer(inputOptions.tiff.subifd) && is.inRange(inputOptions.tiff.subifd, -1, 1e5)) {
          inputDescriptor.tiffSubifd = inputOptions.tiff.subifd;
        } else {
          throw is.invalidParameterError("tiff.subifd", "integer between -1 and 100000", inputOptions.tiff.subifd);
        }
      } else if (is.defined(inputOptions.subifd)) {
        if (is.integer(inputOptions.subifd) && is.inRange(inputOptions.subifd, -1, 1e5)) {
          inputDescriptor.tiffSubifd = inputOptions.subifd;
        } else {
          throw is.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
        }
      }
      if (is.object(inputOptions.svg)) {
        if (is.defined(inputOptions.svg.stylesheet)) {
          if (is.string(inputOptions.svg.stylesheet)) {
            inputDescriptor.svgStylesheet = inputOptions.svg.stylesheet;
          } else {
            throw is.invalidParameterError("svg.stylesheet", "string", inputOptions.svg.stylesheet);
          }
        }
        if (is.defined(inputOptions.svg.highBitdepth)) {
          if (is.bool(inputOptions.svg.highBitdepth)) {
            inputDescriptor.svgHighBitdepth = inputOptions.svg.highBitdepth;
          } else {
            throw is.invalidParameterError("svg.highBitdepth", "boolean", inputOptions.svg.highBitdepth);
          }
        }
      }
      if (is.object(inputOptions.pdf) && is.defined(inputOptions.pdf.background)) {
        inputDescriptor.pdfBackground = this._getBackgroundColourOption(inputOptions.pdf.background);
      } else if (is.defined(inputOptions.pdfBackground)) {
        inputDescriptor.pdfBackground = this._getBackgroundColourOption(inputOptions.pdfBackground);
      }
      if (is.object(inputOptions.jp2) && is.defined(inputOptions.jp2.oneshot)) {
        if (is.bool(inputOptions.jp2.oneshot)) {
          inputDescriptor.jp2Oneshot = inputOptions.jp2.oneshot;
        } else {
          throw is.invalidParameterError("jp2.oneshot", "boolean", inputOptions.jp2.oneshot);
        }
      }
      if (is.defined(inputOptions.create)) {
        if (is.object(inputOptions.create) && is.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is.integer(inputOptions.create.channels)) {
          inputDescriptor.createWidth = inputOptions.create.width;
          inputDescriptor.createHeight = inputOptions.create.height;
          inputDescriptor.createChannels = inputOptions.create.channels;
          inputDescriptor.createPageHeight = 0;
          if (is.defined(inputOptions.create.pageHeight)) {
            if (is.integer(inputOptions.create.pageHeight) && inputOptions.create.pageHeight > 0 && inputOptions.create.pageHeight <= inputOptions.create.height) {
              if (inputOptions.create.height % inputOptions.create.pageHeight !== 0) {
                throw new Error(`Expected create.height ${inputOptions.create.height} to be a multiple of create.pageHeight ${inputOptions.create.pageHeight}`);
              }
              inputDescriptor.createPageHeight = inputOptions.create.pageHeight;
            } else {
              throw is.invalidParameterError("create.pageHeight", "positive integer", inputOptions.create.pageHeight);
            }
          }
          if (is.defined(inputOptions.create.noise)) {
            if (!is.object(inputOptions.create.noise)) {
              throw new Error("Expected noise to be an object");
            }
            if (inputOptions.create.noise.type !== "gaussian") {
              throw new Error("Only gaussian noise is supported at the moment");
            }
            inputDescriptor.createNoiseType = inputOptions.create.noise.type;
            if (!is.inRange(inputOptions.create.channels, 1, 4)) {
              throw is.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
            }
            inputDescriptor.createNoiseMean = 128;
            if (is.defined(inputOptions.create.noise.mean)) {
              if (is.number(inputOptions.create.noise.mean) && is.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
                inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
              } else {
                throw is.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
              }
            }
            inputDescriptor.createNoiseSigma = 30;
            if (is.defined(inputOptions.create.noise.sigma)) {
              if (is.number(inputOptions.create.noise.sigma) && is.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
                inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
              } else {
                throw is.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
              }
            }
          } else if (is.defined(inputOptions.create.background)) {
            if (!is.inRange(inputOptions.create.channels, 3, 4)) {
              throw is.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
            }
            inputDescriptor.createBackground = this._getBackgroundColourOption(inputOptions.create.background);
          } else {
            throw new Error("Expected valid noise or background to create a new input image");
          }
          delete inputDescriptor.buffer;
        } else {
          throw new Error("Expected valid width, height and channels to create a new input image");
        }
      }
      if (is.defined(inputOptions.text)) {
        if (is.object(inputOptions.text) && is.string(inputOptions.text.text)) {
          inputDescriptor.textValue = inputOptions.text.text;
          if (is.defined(inputOptions.text.height) && is.defined(inputOptions.text.dpi)) {
            throw new Error("Expected only one of dpi or height");
          }
          if (is.defined(inputOptions.text.font)) {
            if (is.string(inputOptions.text.font)) {
              inputDescriptor.textFont = inputOptions.text.font;
            } else {
              throw is.invalidParameterError("text.font", "string", inputOptions.text.font);
            }
          }
          if (is.defined(inputOptions.text.fontfile)) {
            if (is.string(inputOptions.text.fontfile)) {
              inputDescriptor.textFontfile = inputOptions.text.fontfile;
            } else {
              throw is.invalidParameterError("text.fontfile", "string", inputOptions.text.fontfile);
            }
          }
          if (is.defined(inputOptions.text.width)) {
            if (is.integer(inputOptions.text.width) && inputOptions.text.width > 0) {
              inputDescriptor.textWidth = inputOptions.text.width;
            } else {
              throw is.invalidParameterError("text.width", "positive integer", inputOptions.text.width);
            }
          }
          if (is.defined(inputOptions.text.height)) {
            if (is.integer(inputOptions.text.height) && inputOptions.text.height > 0) {
              inputDescriptor.textHeight = inputOptions.text.height;
            } else {
              throw is.invalidParameterError("text.height", "positive integer", inputOptions.text.height);
            }
          }
          if (is.defined(inputOptions.text.align)) {
            if (is.string(inputOptions.text.align) && is.string(this.constructor.align[inputOptions.text.align])) {
              inputDescriptor.textAlign = this.constructor.align[inputOptions.text.align];
            } else {
              throw is.invalidParameterError("text.align", "valid alignment", inputOptions.text.align);
            }
          }
          if (is.defined(inputOptions.text.justify)) {
            if (is.bool(inputOptions.text.justify)) {
              inputDescriptor.textJustify = inputOptions.text.justify;
            } else {
              throw is.invalidParameterError("text.justify", "boolean", inputOptions.text.justify);
            }
          }
          if (is.defined(inputOptions.text.dpi)) {
            if (is.integer(inputOptions.text.dpi) && is.inRange(inputOptions.text.dpi, 1, 1e6)) {
              inputDescriptor.textDpi = inputOptions.text.dpi;
            } else {
              throw is.invalidParameterError("text.dpi", "integer between 1 and 1000000", inputOptions.text.dpi);
            }
          }
          if (is.defined(inputOptions.text.rgba)) {
            if (is.bool(inputOptions.text.rgba)) {
              inputDescriptor.textRgba = inputOptions.text.rgba;
            } else {
              throw is.invalidParameterError("text.rgba", "bool", inputOptions.text.rgba);
            }
          }
          if (is.defined(inputOptions.text.spacing)) {
            if (is.integer(inputOptions.text.spacing) && is.inRange(inputOptions.text.spacing, -1e6, 1e6)) {
              inputDescriptor.textSpacing = inputOptions.text.spacing;
            } else {
              throw is.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", inputOptions.text.spacing);
            }
          }
          if (is.defined(inputOptions.text.wrap)) {
            if (is.string(inputOptions.text.wrap) && is.inArray(inputOptions.text.wrap, ["word", "char", "word-char", "none"])) {
              inputDescriptor.textWrap = inputOptions.text.wrap;
            } else {
              throw is.invalidParameterError("text.wrap", "one of: word, char, word-char, none", inputOptions.text.wrap);
            }
          }
          delete inputDescriptor.buffer;
        } else {
          throw new Error("Expected a valid string to create an image with text.");
        }
      }
      if (is.defined(inputOptions.join)) {
        if (is.defined(this.options.join)) {
          if (is.defined(inputOptions.join.animated)) {
            if (is.bool(inputOptions.join.animated)) {
              inputDescriptor.joinAnimated = inputOptions.join.animated;
            } else {
              throw is.invalidParameterError("join.animated", "boolean", inputOptions.join.animated);
            }
          }
          if (is.defined(inputOptions.join.across)) {
            if (is.integer(inputOptions.join.across) && is.inRange(inputOptions.join.across, 1, 1e6)) {
              inputDescriptor.joinAcross = inputOptions.join.across;
            } else {
              throw is.invalidParameterError("join.across", "integer between 1 and 100000", inputOptions.join.across);
            }
          }
          if (is.defined(inputOptions.join.shim)) {
            if (is.integer(inputOptions.join.shim) && is.inRange(inputOptions.join.shim, 0, 1e6)) {
              inputDescriptor.joinShim = inputOptions.join.shim;
            } else {
              throw is.invalidParameterError("join.shim", "integer between 0 and 100000", inputOptions.join.shim);
            }
          }
          if (is.defined(inputOptions.join.background)) {
            inputDescriptor.joinBackground = this._getBackgroundColourOption(inputOptions.join.background);
          }
          if (is.defined(inputOptions.join.halign)) {
            if (is.string(inputOptions.join.halign) && is.string(this.constructor.align[inputOptions.join.halign])) {
              inputDescriptor.joinHalign = this.constructor.align[inputOptions.join.halign];
            } else {
              throw is.invalidParameterError("join.halign", "valid alignment", inputOptions.join.halign);
            }
          }
          if (is.defined(inputOptions.join.valign)) {
            if (is.string(inputOptions.join.valign) && is.string(this.constructor.align[inputOptions.join.valign])) {
              inputDescriptor.joinValign = this.constructor.align[inputOptions.join.valign];
            } else {
              throw is.invalidParameterError("join.valign", "valid alignment", inputOptions.join.valign);
            }
          }
        } else {
          throw new Error("Expected input to be an array of images to join");
        }
      }
    } else if (is.defined(inputOptions)) {
      throw new Error(`Invalid input options ${inputOptions}`);
    }
    return inputDescriptor;
  }
  function _write(chunk, _encoding, callback) {
    if (Array.isArray(this.options.input.buffer)) {
      if (is.buffer(chunk)) {
        if (this.options.input.buffer.length === 0) {
          this.on("finish", () => {
            this.streamInFinished = true;
          });
        }
        this.options.input.buffer.push(chunk);
        callback();
      } else {
        callback(new Error("Non-Buffer data on Writable Stream"));
      }
    } else {
      callback(new Error("Unexpected data on Writable Stream"));
    }
  }
  function _flattenBufferIn() {
    if (this._isStreamInput()) {
      this.options.input.buffer = Buffer.concat(this.options.input.buffer);
    }
  }
  function _isStreamInput() {
    return Array.isArray(this.options.input.buffer);
  }
  function metadata(callback) {
    const stack = Error();
    if (is.fn(callback)) {
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          sharp.metadata(this.options, (err, metadata2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, metadata2);
            }
          });
        });
      } else {
        sharp.metadata(this.options, (err, metadata2) => {
          if (err) {
            callback(is.nativeError(err, stack));
          } else {
            callback(null, metadata2);
          }
        });
      }
      return this;
    } else {
      if (this._isStreamInput()) {
        return new Promise((resolve, reject) => {
          const finished = () => {
            this._flattenBufferIn();
            sharp.metadata(this.options, (err, metadata2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(metadata2);
              }
            });
          };
          if (this.writableFinished) {
            finished();
          } else {
            this.once("finish", finished);
          }
        });
      } else {
        return new Promise((resolve, reject) => {
          sharp.metadata(this.options, (err, metadata2) => {
            if (err) {
              reject(is.nativeError(err, stack));
            } else {
              resolve(metadata2);
            }
          });
        });
      }
    }
  }
  function stats(callback) {
    const stack = Error();
    if (is.fn(callback)) {
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          sharp.stats(this.options, (err, stats2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, stats2);
            }
          });
        });
      } else {
        sharp.stats(this.options, (err, stats2) => {
          if (err) {
            callback(is.nativeError(err, stack));
          } else {
            callback(null, stats2);
          }
        });
      }
      return this;
    } else {
      if (this._isStreamInput()) {
        return new Promise((resolve, reject) => {
          this.on("finish", function() {
            this._flattenBufferIn();
            sharp.stats(this.options, (err, stats2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(stats2);
              }
            });
          });
        });
      } else {
        return new Promise((resolve, reject) => {
          sharp.stats(this.options, (err, stats2) => {
            if (err) {
              reject(is.nativeError(err, stack));
            } else {
              resolve(stats2);
            }
          });
        });
      }
    }
  }
  module.exports = (Sharp) => {
    Object.assign(Sharp.prototype, {
      _inputOptionsFromObject,
      _createInputDescriptor,
      _write,
      _flattenBufferIn,
      _isStreamInput,
      metadata,
      stats
    });
    Sharp.align = align;
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/resize.js
var require_resize = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var is = require_is();
  var gravity = {
    center: 0,
    centre: 0,
    north: 1,
    east: 2,
    south: 3,
    west: 4,
    northeast: 5,
    southeast: 6,
    southwest: 7,
    northwest: 8
  };
  var position = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    "right top": 5,
    "right bottom": 6,
    "left bottom": 7,
    "left top": 8
  };
  var extendWith = {
    background: "background",
    copy: "copy",
    repeat: "repeat",
    mirror: "mirror"
  };
  var strategy = {
    entropy: 16,
    attention: 17
  };
  var kernel = {
    nearest: "nearest",
    linear: "linear",
    cubic: "cubic",
    mitchell: "mitchell",
    lanczos2: "lanczos2",
    lanczos3: "lanczos3",
    mks2013: "mks2013",
    mks2021: "mks2021"
  };
  var fit = {
    contain: "contain",
    cover: "cover",
    fill: "fill",
    inside: "inside",
    outside: "outside"
  };
  var mapFitToCanvas = {
    contain: "embed",
    cover: "crop",
    fill: "ignore_aspect",
    inside: "max",
    outside: "min"
  };
  function isRotationExpected(options) {
    return options.angle % 360 !== 0 || options.rotationAngle !== 0;
  }
  function isResizeExpected(options) {
    return options.width !== -1 || options.height !== -1;
  }
  function resize(widthOrOptions, height, options) {
    if (isResizeExpected(this.options)) {
      this.options.debuglog("ignoring previous resize options");
    }
    if (this.options.widthPost !== -1) {
      this.options.debuglog("operation order will be: extract, resize, extract");
    }
    if (is.defined(widthOrOptions)) {
      if (is.object(widthOrOptions) && !is.defined(options)) {
        options = widthOrOptions;
      } else if (is.integer(widthOrOptions) && widthOrOptions > 0) {
        this.options.width = widthOrOptions;
      } else {
        throw is.invalidParameterError("width", "positive integer", widthOrOptions);
      }
    } else {
      this.options.width = -1;
    }
    if (is.defined(height)) {
      if (is.integer(height) && height > 0) {
        this.options.height = height;
      } else {
        throw is.invalidParameterError("height", "positive integer", height);
      }
    } else {
      this.options.height = -1;
    }
    if (is.object(options)) {
      if (is.defined(options.width)) {
        if (is.integer(options.width) && options.width > 0) {
          this.options.width = options.width;
        } else {
          throw is.invalidParameterError("width", "positive integer", options.width);
        }
      }
      if (is.defined(options.height)) {
        if (is.integer(options.height) && options.height > 0) {
          this.options.height = options.height;
        } else {
          throw is.invalidParameterError("height", "positive integer", options.height);
        }
      }
      if (is.defined(options.fit)) {
        const canvas = mapFitToCanvas[options.fit];
        if (is.string(canvas)) {
          this.options.canvas = canvas;
        } else {
          throw is.invalidParameterError("fit", "valid fit", options.fit);
        }
      }
      if (is.defined(options.position)) {
        const pos = is.integer(options.position) ? options.position : strategy[options.position] || position[options.position] || gravity[options.position];
        if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
          this.options.position = pos;
        } else {
          throw is.invalidParameterError("position", "valid position/gravity/strategy", options.position);
        }
      }
      this._setBackgroundColourOption("resizeBackground", options.background);
      if (is.defined(options.kernel)) {
        if (is.string(kernel[options.kernel])) {
          this.options.kernel = kernel[options.kernel];
        } else {
          throw is.invalidParameterError("kernel", "valid kernel name", options.kernel);
        }
      }
      if (is.defined(options.withoutEnlargement)) {
        this._setBooleanOption("withoutEnlargement", options.withoutEnlargement);
      }
      if (is.defined(options.withoutReduction)) {
        this._setBooleanOption("withoutReduction", options.withoutReduction);
      }
      if (is.defined(options.fastShrinkOnLoad)) {
        this._setBooleanOption("fastShrinkOnLoad", options.fastShrinkOnLoad);
      }
    }
    if (isRotationExpected(this.options) && isResizeExpected(this.options)) {
      this.options.rotateBefore = true;
    }
    return this;
  }
  function extend(extend2) {
    if (is.integer(extend2) && extend2 > 0) {
      this.options.extendTop = extend2;
      this.options.extendBottom = extend2;
      this.options.extendLeft = extend2;
      this.options.extendRight = extend2;
    } else if (is.object(extend2)) {
      if (is.defined(extend2.top)) {
        if (is.integer(extend2.top) && extend2.top >= 0) {
          this.options.extendTop = extend2.top;
        } else {
          throw is.invalidParameterError("top", "positive integer", extend2.top);
        }
      }
      if (is.defined(extend2.bottom)) {
        if (is.integer(extend2.bottom) && extend2.bottom >= 0) {
          this.options.extendBottom = extend2.bottom;
        } else {
          throw is.invalidParameterError("bottom", "positive integer", extend2.bottom);
        }
      }
      if (is.defined(extend2.left)) {
        if (is.integer(extend2.left) && extend2.left >= 0) {
          this.options.extendLeft = extend2.left;
        } else {
          throw is.invalidParameterError("left", "positive integer", extend2.left);
        }
      }
      if (is.defined(extend2.right)) {
        if (is.integer(extend2.right) && extend2.right >= 0) {
          this.options.extendRight = extend2.right;
        } else {
          throw is.invalidParameterError("right", "positive integer", extend2.right);
        }
      }
      this._setBackgroundColourOption("extendBackground", extend2.background);
      if (is.defined(extend2.extendWith)) {
        if (is.string(extendWith[extend2.extendWith])) {
          this.options.extendWith = extendWith[extend2.extendWith];
        } else {
          throw is.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", extend2.extendWith);
        }
      }
    } else {
      throw is.invalidParameterError("extend", "integer or object", extend2);
    }
    return this;
  }
  function extract(options) {
    const suffix = isResizeExpected(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
    if (this.options[`width${suffix}`] !== -1) {
      this.options.debuglog("ignoring previous extract options");
    }
    ["left", "top", "width", "height"].forEach(function(name) {
      const value = options[name];
      if (is.integer(value) && value >= 0) {
        this.options[name + (name === "left" || name === "top" ? "Offset" : "") + suffix] = value;
      } else {
        throw is.invalidParameterError(name, "integer", value);
      }
    }, this);
    if (isRotationExpected(this.options) && !isResizeExpected(this.options)) {
      if (this.options.widthPre === -1 || this.options.widthPost === -1) {
        this.options.rotateBefore = true;
      }
    }
    if (this.options.input.autoOrient) {
      this.options.orientBefore = true;
    }
    return this;
  }
  function trim(options) {
    this.options.trimThreshold = 10;
    if (is.defined(options)) {
      if (is.object(options)) {
        if (is.defined(options.background)) {
          this._setBackgroundColourOption("trimBackground", options.background);
        }
        if (is.defined(options.threshold)) {
          if (is.number(options.threshold) && options.threshold >= 0) {
            this.options.trimThreshold = options.threshold;
          } else {
            throw is.invalidParameterError("threshold", "positive number", options.threshold);
          }
        }
        if (is.defined(options.lineArt)) {
          this._setBooleanOption("trimLineArt", options.lineArt);
        }
      } else {
        throw is.invalidParameterError("trim", "object", options);
      }
    }
    if (isRotationExpected(this.options)) {
      this.options.rotateBefore = true;
    }
    return this;
  }
  module.exports = (Sharp) => {
    Object.assign(Sharp.prototype, {
      resize,
      extend,
      extract,
      trim
    });
    Sharp.gravity = gravity;
    Sharp.strategy = strategy;
    Sharp.kernel = kernel;
    Sharp.fit = fit;
    Sharp.position = position;
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/composite.js
var require_composite = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var is = require_is();
  var blend = {
    clear: "clear",
    source: "source",
    over: "over",
    in: "in",
    out: "out",
    atop: "atop",
    dest: "dest",
    "dest-over": "dest-over",
    "dest-in": "dest-in",
    "dest-out": "dest-out",
    "dest-atop": "dest-atop",
    xor: "xor",
    add: "add",
    saturate: "saturate",
    multiply: "multiply",
    screen: "screen",
    overlay: "overlay",
    darken: "darken",
    lighten: "lighten",
    "colour-dodge": "colour-dodge",
    "color-dodge": "colour-dodge",
    "colour-burn": "colour-burn",
    "color-burn": "colour-burn",
    "hard-light": "hard-light",
    "soft-light": "soft-light",
    difference: "difference",
    exclusion: "exclusion"
  };
  function composite(images) {
    if (!Array.isArray(images)) {
      throw is.invalidParameterError("images to composite", "array", images);
    }
    this.options.composite = images.map((image) => {
      if (!is.object(image)) {
        throw is.invalidParameterError("image to composite", "object", image);
      }
      const inputOptions = this._inputOptionsFromObject(image);
      const composite2 = {
        input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
        blend: "over",
        tile: false,
        left: 0,
        top: 0,
        hasOffset: false,
        gravity: 0,
        premultiplied: false
      };
      if (is.defined(image.blend)) {
        if (is.string(blend[image.blend])) {
          composite2.blend = blend[image.blend];
        } else {
          throw is.invalidParameterError("blend", "valid blend name", image.blend);
        }
      }
      if (is.defined(image.tile)) {
        if (is.bool(image.tile)) {
          composite2.tile = image.tile;
        } else {
          throw is.invalidParameterError("tile", "boolean", image.tile);
        }
      }
      if (is.defined(image.left)) {
        if (is.integer(image.left)) {
          composite2.left = image.left;
        } else {
          throw is.invalidParameterError("left", "integer", image.left);
        }
      }
      if (is.defined(image.top)) {
        if (is.integer(image.top)) {
          composite2.top = image.top;
        } else {
          throw is.invalidParameterError("top", "integer", image.top);
        }
      }
      if (is.defined(image.top) !== is.defined(image.left)) {
        throw new Error("Expected both left and top to be set");
      } else {
        composite2.hasOffset = is.integer(image.top) && is.integer(image.left);
      }
      if (is.defined(image.gravity)) {
        if (is.integer(image.gravity) && is.inRange(image.gravity, 0, 8)) {
          composite2.gravity = image.gravity;
        } else if (is.string(image.gravity) && is.integer(this.constructor.gravity[image.gravity])) {
          composite2.gravity = this.constructor.gravity[image.gravity];
        } else {
          throw is.invalidParameterError("gravity", "valid gravity", image.gravity);
        }
      }
      if (is.defined(image.premultiplied)) {
        if (is.bool(image.premultiplied)) {
          composite2.premultiplied = image.premultiplied;
        } else {
          throw is.invalidParameterError("premultiplied", "boolean", image.premultiplied);
        }
      }
      return composite2;
    });
    return this;
  }
  module.exports = (Sharp) => {
    Sharp.prototype.composite = composite;
    Sharp.blend = blend;
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/operation.js
var require_operation = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var is = require_is();
  var vipsPrecision = {
    integer: "integer",
    float: "float",
    approximate: "approximate"
  };
  function rotate(angle, options) {
    if (!is.defined(angle)) {
      return this.autoOrient();
    }
    if (this.options.angle || this.options.rotationAngle) {
      this.options.debuglog("ignoring previous rotate options");
      this.options.angle = 0;
      this.options.rotationAngle = 0;
    }
    if (is.integer(angle) && !(angle % 90)) {
      this.options.angle = angle;
    } else if (is.number(angle)) {
      this.options.rotationAngle = angle;
      if (is.object(options) && options.background) {
        this._setBackgroundColourOption("rotationBackground", options.background);
      }
    } else {
      throw is.invalidParameterError("angle", "numeric", angle);
    }
    return this;
  }
  function autoOrient() {
    this.options.input.autoOrient = true;
    return this;
  }
  function flip(flip2) {
    this.options.flip = is.bool(flip2) ? flip2 : true;
    return this;
  }
  function flop(flop2) {
    this.options.flop = is.bool(flop2) ? flop2 : true;
    return this;
  }
  function affine(matrix, options) {
    const flatMatrix = [].concat(...matrix);
    if (flatMatrix.length === 4 && flatMatrix.every(is.number)) {
      this.options.affineMatrix = flatMatrix;
    } else {
      throw is.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
    }
    if (is.defined(options)) {
      if (is.object(options)) {
        this._setBackgroundColourOption("affineBackground", options.background);
        if (is.defined(options.idx)) {
          if (is.number(options.idx)) {
            this.options.affineIdx = options.idx;
          } else {
            throw is.invalidParameterError("options.idx", "number", options.idx);
          }
        }
        if (is.defined(options.idy)) {
          if (is.number(options.idy)) {
            this.options.affineIdy = options.idy;
          } else {
            throw is.invalidParameterError("options.idy", "number", options.idy);
          }
        }
        if (is.defined(options.odx)) {
          if (is.number(options.odx)) {
            this.options.affineOdx = options.odx;
          } else {
            throw is.invalidParameterError("options.odx", "number", options.odx);
          }
        }
        if (is.defined(options.ody)) {
          if (is.number(options.ody)) {
            this.options.affineOdy = options.ody;
          } else {
            throw is.invalidParameterError("options.ody", "number", options.ody);
          }
        }
        if (is.defined(options.interpolator)) {
          if (is.inArray(options.interpolator, Object.values(this.constructor.interpolators))) {
            this.options.affineInterpolator = options.interpolator;
          } else {
            throw is.invalidParameterError("options.interpolator", "valid interpolator name", options.interpolator);
          }
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    return this;
  }
  function sharpen(options, flat, jagged) {
    if (!is.defined(options)) {
      this.options.sharpenSigma = -1;
    } else if (is.bool(options)) {
      this.options.sharpenSigma = options ? -1 : 0;
    } else if (is.number(options) && is.inRange(options, 0.01, 1e4)) {
      this.options.sharpenSigma = options;
      if (is.defined(flat)) {
        if (is.number(flat) && is.inRange(flat, 0, 1e4)) {
          this.options.sharpenM1 = flat;
        } else {
          throw is.invalidParameterError("flat", "number between 0 and 10000", flat);
        }
      }
      if (is.defined(jagged)) {
        if (is.number(jagged) && is.inRange(jagged, 0, 1e4)) {
          this.options.sharpenM2 = jagged;
        } else {
          throw is.invalidParameterError("jagged", "number between 0 and 10000", jagged);
        }
      }
    } else if (is.plainObject(options)) {
      if (is.number(options.sigma) && is.inRange(options.sigma, 0.000001, 10)) {
        this.options.sharpenSigma = options.sigma;
      } else {
        throw is.invalidParameterError("options.sigma", "number between 0.000001 and 10", options.sigma);
      }
      if (is.defined(options.m1)) {
        if (is.number(options.m1) && is.inRange(options.m1, 0, 1e6)) {
          this.options.sharpenM1 = options.m1;
        } else {
          throw is.invalidParameterError("options.m1", "number between 0 and 1000000", options.m1);
        }
      }
      if (is.defined(options.m2)) {
        if (is.number(options.m2) && is.inRange(options.m2, 0, 1e6)) {
          this.options.sharpenM2 = options.m2;
        } else {
          throw is.invalidParameterError("options.m2", "number between 0 and 1000000", options.m2);
        }
      }
      if (is.defined(options.x1)) {
        if (is.number(options.x1) && is.inRange(options.x1, 0, 1e6)) {
          this.options.sharpenX1 = options.x1;
        } else {
          throw is.invalidParameterError("options.x1", "number between 0 and 1000000", options.x1);
        }
      }
      if (is.defined(options.y2)) {
        if (is.number(options.y2) && is.inRange(options.y2, 0, 1e6)) {
          this.options.sharpenY2 = options.y2;
        } else {
          throw is.invalidParameterError("options.y2", "number between 0 and 1000000", options.y2);
        }
      }
      if (is.defined(options.y3)) {
        if (is.number(options.y3) && is.inRange(options.y3, 0, 1e6)) {
          this.options.sharpenY3 = options.y3;
        } else {
          throw is.invalidParameterError("options.y3", "number between 0 and 1000000", options.y3);
        }
      }
    } else {
      throw is.invalidParameterError("sigma", "number between 0.01 and 10000", options);
    }
    return this;
  }
  function median(size) {
    if (!is.defined(size)) {
      this.options.medianSize = 3;
    } else if (is.integer(size) && is.inRange(size, 1, 1000)) {
      this.options.medianSize = size;
    } else {
      throw is.invalidParameterError("size", "integer between 1 and 1000", size);
    }
    return this;
  }
  function blur(options) {
    let sigma;
    if (is.number(options)) {
      sigma = options;
    } else if (is.plainObject(options)) {
      if (!is.number(options.sigma)) {
        throw is.invalidParameterError("options.sigma", "number between 0.3 and 1000", sigma);
      }
      sigma = options.sigma;
      if ("precision" in options) {
        if (is.string(vipsPrecision[options.precision])) {
          this.options.precision = vipsPrecision[options.precision];
        } else {
          throw is.invalidParameterError("precision", "one of: integer, float, approximate", options.precision);
        }
      }
      if ("minAmplitude" in options) {
        if (is.number(options.minAmplitude) && is.inRange(options.minAmplitude, 0.001, 1)) {
          this.options.minAmpl = options.minAmplitude;
        } else {
          throw is.invalidParameterError("minAmplitude", "number between 0.001 and 1", options.minAmplitude);
        }
      }
    }
    if (!is.defined(options)) {
      this.options.blurSigma = -1;
    } else if (is.bool(options)) {
      this.options.blurSigma = options ? -1 : 0;
    } else if (is.number(sigma) && is.inRange(sigma, 0.3, 1000)) {
      this.options.blurSigma = sigma;
    } else {
      throw is.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
    }
    return this;
  }
  function dilate(width) {
    if (!is.defined(width)) {
      this.options.dilateWidth = 1;
    } else if (is.integer(width) && width > 0) {
      this.options.dilateWidth = width;
    } else {
      throw is.invalidParameterError("dilate", "positive integer", dilate);
    }
    return this;
  }
  function erode(width) {
    if (!is.defined(width)) {
      this.options.erodeWidth = 1;
    } else if (is.integer(width) && width > 0) {
      this.options.erodeWidth = width;
    } else {
      throw is.invalidParameterError("erode", "positive integer", erode);
    }
    return this;
  }
  function flatten(options) {
    this.options.flatten = is.bool(options) ? options : true;
    if (is.object(options)) {
      this._setBackgroundColourOption("flattenBackground", options.background);
    }
    return this;
  }
  function unflatten() {
    this.options.unflatten = true;
    return this;
  }
  function gamma(gamma2, gammaOut) {
    if (!is.defined(gamma2)) {
      this.options.gamma = 2.2;
    } else if (is.number(gamma2) && is.inRange(gamma2, 1, 3)) {
      this.options.gamma = gamma2;
    } else {
      throw is.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
    }
    if (!is.defined(gammaOut)) {
      this.options.gammaOut = this.options.gamma;
    } else if (is.number(gammaOut) && is.inRange(gammaOut, 1, 3)) {
      this.options.gammaOut = gammaOut;
    } else {
      throw is.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
    }
    return this;
  }
  function negate(options) {
    this.options.negate = is.bool(options) ? options : true;
    if (is.plainObject(options) && "alpha" in options) {
      if (!is.bool(options.alpha)) {
        throw is.invalidParameterError("alpha", "should be boolean value", options.alpha);
      } else {
        this.options.negateAlpha = options.alpha;
      }
    }
    return this;
  }
  function normalise(options) {
    if (is.plainObject(options)) {
      if (is.defined(options.lower)) {
        if (is.number(options.lower) && is.inRange(options.lower, 0, 99)) {
          this.options.normaliseLower = options.lower;
        } else {
          throw is.invalidParameterError("lower", "number between 0 and 99", options.lower);
        }
      }
      if (is.defined(options.upper)) {
        if (is.number(options.upper) && is.inRange(options.upper, 1, 100)) {
          this.options.normaliseUpper = options.upper;
        } else {
          throw is.invalidParameterError("upper", "number between 1 and 100", options.upper);
        }
      }
    }
    if (this.options.normaliseLower >= this.options.normaliseUpper) {
      throw is.invalidParameterError("range", "lower to be less than upper", `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`);
    }
    this.options.normalise = true;
    return this;
  }
  function normalize(options) {
    return this.normalise(options);
  }
  function clahe(options) {
    if (is.plainObject(options)) {
      if (is.integer(options.width) && options.width > 0) {
        this.options.claheWidth = options.width;
      } else {
        throw is.invalidParameterError("width", "integer greater than zero", options.width);
      }
      if (is.integer(options.height) && options.height > 0) {
        this.options.claheHeight = options.height;
      } else {
        throw is.invalidParameterError("height", "integer greater than zero", options.height);
      }
      if (is.defined(options.maxSlope)) {
        if (is.integer(options.maxSlope) && is.inRange(options.maxSlope, 0, 100)) {
          this.options.claheMaxSlope = options.maxSlope;
        } else {
          throw is.invalidParameterError("maxSlope", "integer between 0 and 100", options.maxSlope);
        }
      }
    } else {
      throw is.invalidParameterError("options", "plain object", options);
    }
    return this;
  }
  function convolve(kernel) {
    if (!is.object(kernel) || !Array.isArray(kernel.kernel) || !is.integer(kernel.width) || !is.integer(kernel.height) || !is.inRange(kernel.width, 3, 1001) || !is.inRange(kernel.height, 3, 1001) || kernel.height * kernel.width !== kernel.kernel.length) {
      throw new Error("Invalid convolution kernel");
    }
    if (!is.integer(kernel.scale)) {
      kernel.scale = kernel.kernel.reduce((a, b) => a + b, 0);
    }
    if (kernel.scale < 1) {
      kernel.scale = 1;
    }
    if (!is.integer(kernel.offset)) {
      kernel.offset = 0;
    }
    this.options.convKernel = kernel;
    return this;
  }
  function threshold(threshold2, options) {
    if (!is.defined(threshold2)) {
      this.options.threshold = 128;
    } else if (is.bool(threshold2)) {
      this.options.threshold = threshold2 ? 128 : 0;
    } else if (is.integer(threshold2) && is.inRange(threshold2, 0, 255)) {
      this.options.threshold = threshold2;
    } else {
      throw is.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
    }
    if (!is.object(options) || options.greyscale === true || options.grayscale === true) {
      this.options.thresholdGrayscale = true;
    } else {
      this.options.thresholdGrayscale = false;
    }
    return this;
  }
  function boolean(operand, operator, options) {
    this.options.boolean = this._createInputDescriptor(operand, options);
    if (is.string(operator) && is.inArray(operator, ["and", "or", "eor"])) {
      this.options.booleanOp = operator;
    } else {
      throw is.invalidParameterError("operator", "one of: and, or, eor", operator);
    }
    return this;
  }
  function linear(a, b) {
    if (!is.defined(a) && is.number(b)) {
      a = 1;
    } else if (is.number(a) && !is.defined(b)) {
      b = 0;
    }
    if (!is.defined(a)) {
      this.options.linearA = [];
    } else if (is.number(a)) {
      this.options.linearA = [a];
    } else if (Array.isArray(a) && a.length && a.every(is.number)) {
      this.options.linearA = a;
    } else {
      throw is.invalidParameterError("a", "number or array of numbers", a);
    }
    if (!is.defined(b)) {
      this.options.linearB = [];
    } else if (is.number(b)) {
      this.options.linearB = [b];
    } else if (Array.isArray(b) && b.length && b.every(is.number)) {
      this.options.linearB = b;
    } else {
      throw is.invalidParameterError("b", "number or array of numbers", b);
    }
    if (this.options.linearA.length !== this.options.linearB.length) {
      throw new Error("Expected a and b to be arrays of the same length");
    }
    return this;
  }
  function recomb(inputMatrix) {
    if (!Array.isArray(inputMatrix)) {
      throw is.invalidParameterError("inputMatrix", "array", inputMatrix);
    }
    if (inputMatrix.length !== 3 && inputMatrix.length !== 4) {
      throw is.invalidParameterError("inputMatrix", "3x3 or 4x4 array", inputMatrix.length);
    }
    const recombMatrix = inputMatrix.flat().map(Number);
    if (recombMatrix.length !== 9 && recombMatrix.length !== 16) {
      throw is.invalidParameterError("inputMatrix", "cardinality of 9 or 16", recombMatrix.length);
    }
    this.options.recombMatrix = recombMatrix;
    return this;
  }
  function modulate(options) {
    if (!is.plainObject(options)) {
      throw is.invalidParameterError("options", "plain object", options);
    }
    if ("brightness" in options) {
      if (is.number(options.brightness) && options.brightness >= 0) {
        this.options.brightness = options.brightness;
      } else {
        throw is.invalidParameterError("brightness", "number above zero", options.brightness);
      }
    }
    if ("saturation" in options) {
      if (is.number(options.saturation) && options.saturation >= 0) {
        this.options.saturation = options.saturation;
      } else {
        throw is.invalidParameterError("saturation", "number above zero", options.saturation);
      }
    }
    if ("hue" in options) {
      if (is.integer(options.hue)) {
        this.options.hue = options.hue % 360;
      } else {
        throw is.invalidParameterError("hue", "number", options.hue);
      }
    }
    if ("lightness" in options) {
      if (is.number(options.lightness)) {
        this.options.lightness = options.lightness;
      } else {
        throw is.invalidParameterError("lightness", "number", options.lightness);
      }
    }
    return this;
  }
  module.exports = (Sharp) => {
    Object.assign(Sharp.prototype, {
      autoOrient,
      rotate,
      flip,
      flop,
      affine,
      sharpen,
      erode,
      dilate,
      median,
      blur,
      flatten,
      unflatten,
      gamma,
      negate,
      normalise,
      normalize,
      clahe,
      convolve,
      threshold,
      boolean,
      linear,
      recomb,
      modulate
    });
  };
});

// node_modules/.bun/@img+colour@1.1.0/node_modules/@img/colour/color.cjs
var require_color = __commonJS((exports, module) => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var index_exports = {};
  __export(index_exports, {
    default: () => index_default
  });
  module.exports = __toCommonJS(index_exports);
  var colors = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  for (const key in colors)
    Object.freeze(colors[key]);
  var color_name_default = Object.freeze(colors);
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (const name in color_name_default) {
    if (Object.hasOwn(color_name_default, name)) {
      reverseNames[color_name_default[name]] = name;
    }
  }
  var cs = {
    to: {},
    get: {}
  };
  cs.get = function(string) {
    const prefix = string.slice(0, 3).toLowerCase();
    let value;
    let model;
    switch (prefix) {
      case "hsl": {
        value = cs.get.hsl(string);
        model = "hsl";
        break;
      }
      case "hwb": {
        value = cs.get.hwb(string);
        model = "hwb";
        break;
      }
      default: {
        value = cs.get.rgb(string);
        model = "rgb";
        break;
      }
    }
    if (!value) {
      return null;
    }
    return { model, value };
  };
  cs.get.rgb = function(string) {
    if (!string) {
      return null;
    }
    const abbr = /^#([a-f\d]{3,4})$/i;
    const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
    const rgba = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i;
    const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i;
    const keyword = /^(\w+)$/;
    let rgb = [0, 0, 0, 1];
    let match;
    let i;
    let hexAlpha;
    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0;i < 3; i++) {
        const i2 = i * 2;
        rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0;i < 3; i++) {
        rgb[i] = Number.parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0;i < 3; i++) {
        rgb[i] = Number.parseFloat(match[i + 1]);
      }
      if (match[4]) {
        rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
      }
    } else if (match = string.match(per)) {
      for (i = 0;i < 3; i++) {
        rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
      }
    } else if (match = string.toLowerCase().match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!Object.hasOwn(color_name_default, match[1])) {
        return null;
      }
      rgb = color_name_default[match[1]].slice();
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0;i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };
  cs.get.hsl = function(string) {
    if (!string) {
      return null;
    }
    const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
    const match = string.match(hsl);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const s = clamp(Number.parseFloat(match[2]), 0, 100);
      const l = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
    const match = string.match(hwb);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const w = clamp(Number.parseFloat(match[2]), 0, 100);
      const b = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs.to.hex = function(...rgba) {
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function(...rgba) {
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function(...rgba) {
    const r = Math.round(rgba[0] / 255 * 100);
    const g = Math.round(rgba[1] / 255 * 100);
    const b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function(...hsla) {
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function(...hwba) {
    let a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(...rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(number_, min, max) {
    return Math.min(Math.max(min, number_), max);
  }
  function hexDouble(number_) {
    const string_ = Math.round(number_).toString(16).toUpperCase();
    return string_.length < 2 ? "0" + string_ : string_;
  }
  var color_string_default = cs;
  var reverseKeywords = {};
  for (const key of Object.keys(color_name_default)) {
    reverseKeywords[color_name_default[key]] = key;
  }
  var convert = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
    lch: { channels: 3, labels: "lch" },
    oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  var conversions_default = convert;
  var LAB_FT = (6 / 29) ** 3;
  function srgbNonlinearTransform(c) {
    const cc = c > 0.0031308 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92;
    return Math.min(Math.max(0, cc), 1);
  }
  function srgbNonlinearTransformInv(c) {
    return c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92;
  }
  for (const model of Object.keys(convert)) {
    if (!("channels" in convert[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", { value: channels });
    Object.defineProperty(convert[model], "labels", { value: labels });
  }
  convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    switch (max) {
      case min: {
        h = 0;
        break;
      }
      case r: {
        h = (g - b) / delta;
        break;
      }
      case g: {
        h = 2 + (b - r) / delta;
        break;
      }
      case b: {
        h = 4 + (r - g) / delta;
        break;
      }
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      switch (v) {
        case r: {
          h = bdif - gdif;
          break;
        }
        case g: {
          h = 1 / 3 + rdif - bdif;
          break;
        }
        case b: {
          h = 2 / 3 + gdif - rdif;
          break;
        }
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.oklab = function(rgb) {
    const r = srgbNonlinearTransformInv(rgb[0] / 255);
    const g = srgbNonlinearTransformInv(rgb[1] / 255);
    const b = srgbNonlinearTransformInv(rgb[2] / 255);
    const lp = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const mp = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const sp = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const aa = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, aa * 100, bb * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }
  convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Number.POSITIVE_INFINITY;
    let currentClosestKeyword;
    for (const keyword of Object.keys(color_name_default)) {
      const value = color_name_default[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return [...color_name_default[keyword]];
  };
  convert.rgb.xyz = function(rgb) {
    const r = srgbNonlinearTransformInv(rgb[0] / 255);
    const g = srgbNonlinearTransformInv(rgb[1] / 255);
    const b = srgbNonlinearTransformInv(rgb[2] / 255);
    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
    const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t3;
    let value;
    if (s === 0) {
      value = l * 255;
      return [value, value, value];
    }
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0;i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        value = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        value = t2;
      } else if (3 * t3 < 2) {
        value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        value = t1;
      }
      rgb[i] = value * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0: {
        return [v, t, p];
      }
      case 1: {
        return [q, v, p];
      }
      case 2: {
        return [p, v, t];
      }
      case 3: {
        return [p, q, v];
      }
      case 4: {
        return [t, p, v];
      }
      case 5: {
        return [v, p, q];
      }
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0: {
        r = v;
        g = n;
        b = wh;
        break;
      }
      case 1: {
        r = n;
        g = v;
        b = wh;
        break;
      }
      case 2: {
        r = wh;
        g = v;
        b = n;
        break;
      }
      case 3: {
        r = wh;
        g = n;
        b = v;
        break;
      }
      case 4: {
        r = n;
        g = wh;
        b = v;
        break;
      }
      case 5: {
        r = v;
        g = wh;
        b = n;
        break;
      }
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
    g = x * -0.969266 + y * 1.8760108 + z * 0.041556;
    b = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
    r = srgbNonlinearTransform(r);
    g = srgbNonlinearTransform(g);
    b = srgbNonlinearTransform(b);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.xyz.oklab = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    const lp = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
    const mp = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
    const sp = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.633851707 * z);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const a = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const b = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, a * 100, b * 100];
  };
  convert.oklab.oklch = function(oklab) {
    return convert.lab.lch(oklab);
  };
  convert.oklab.xyz = function(oklab) {
    const ll = oklab[0] / 100;
    const a = oklab[1] / 100;
    const b = oklab[2] / 100;
    const l = (0.999999998 * ll + 0.396337792 * a + 0.215803758 * b) ** 3;
    const m = (1.000000008 * ll - 0.105561342 * a - 0.063854175 * b) ** 3;
    const s = (1.000000055 * ll - 0.089484182 * a - 1.291485538 * b) ** 3;
    const x = 1.227013851 * l - 0.55779998 * m + 0.281256149 * s;
    const y = -0.040580178 * l + 1.11225687 * m - 0.071676679 * s;
    const z = -0.076381285 * l - 0.421481978 * m + 1.58616322 * s;
    return [x * 100, y * 100, z * 100];
  };
  convert.oklab.rgb = function(oklab) {
    const ll = oklab[0] / 100;
    const aa = oklab[1] / 100;
    const bb = oklab[2] / 100;
    const l = (ll + 0.3963377774 * aa + 0.2158037573 * bb) ** 3;
    const m = (ll - 0.1055613458 * aa - 0.0638541728 * bb) ** 3;
    const s = (ll - 0.0894841775 * aa - 1.291485548 * bb) ** 3;
    const r = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
    const g = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
    const b = srgbNonlinearTransform(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
    return [r * 255, g * 255, b * 255];
  };
  convert.oklch.oklab = function(oklch) {
    return convert.lch.lab(oklch);
  };
  convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    args = args[0];
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (Math.trunc(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    args = args[0];
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return "000000".slice(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = [...colorString].map((char) => char + char).join("");
    }
    const integer = Number.parseInt(colorString, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let hue;
    const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0: {
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      }
      case 1: {
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      }
      case 2: {
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      }
      case 3: {
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      }
      case 4: {
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      }
      default: {
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
      }
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hsv = convert.gray.hsl;
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    const value = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (value << 16) + (value << 8) + value;
    const string = integer.toString(16).toUpperCase();
    return "000000".slice(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [value / 255 * 100];
  };
  function buildGraph() {
    const graph = {};
    const models2 = Object.keys(conversions_default);
    for (let { length } = models2, i = 0;i < length; i++) {
      graph[models2[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length > 0) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions_default[current]);
      for (let { length } = adjacents, i = 0;i < length; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions_default[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions_default[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  function route(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models2 = Object.keys(graph);
    for (let { length } = models2, i = 0;i < length; i++) {
      const toModel = models2[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  }
  var route_default = route;
  var convert2 = {};
  var models = Object.keys(conversions_default);
  function wrapRaw(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let { length } = result, i = 0;i < length; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  for (const fromModel of models) {
    convert2[fromModel] = {};
    Object.defineProperty(convert2[fromModel], "channels", { value: conversions_default[fromModel].channels });
    Object.defineProperty(convert2[fromModel], "labels", { value: conversions_default[fromModel].labels });
    const routes = route_default(fromModel);
    const routeModels = Object.keys(routes);
    for (const toModel of routeModels) {
      const fn = routes[toModel];
      convert2[fromModel][toModel] = wrapRounded(fn);
      convert2[fromModel][toModel].raw = wrapRaw(fn);
    }
  }
  var color_convert_default = convert2;
  var skippedModels = [
    "keyword",
    "gray",
    "hex"
  ];
  var hashedModelKeys = {};
  for (const model of Object.keys(color_convert_default)) {
    hashedModelKeys[[...color_convert_default[model].labels].sort().join("")] = model;
  }
  var limiters = {};
  function Color(object, model) {
    if (!(this instanceof Color)) {
      return new Color(object, model);
    }
    if (model && model in skippedModels) {
      model = null;
    }
    if (model && !(model in color_convert_default)) {
      throw new Error("Unknown model: " + model);
    }
    let i;
    let channels;
    if (object == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (object instanceof Color) {
      this.model = object.model;
      this.color = [...object.color];
      this.valpha = object.valpha;
    } else if (typeof object === "string") {
      const result = color_string_default.get(object);
      if (result === null) {
        throw new Error("Unable to parse color from string: " + object);
      }
      this.model = result.model;
      channels = color_convert_default[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (object.length > 0) {
      this.model = model || "rgb";
      channels = color_convert_default[this.model].channels;
      const newArray = Array.prototype.slice.call(object, 0, channels);
      this.color = zeroArray(newArray, channels);
      this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
    } else if (typeof object === "number") {
      this.model = "rgb";
      this.color = [
        object >> 16 & 255,
        object >> 8 & 255,
        object & 255
      ];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      const keys = Object.keys(object);
      if ("alpha" in object) {
        keys.splice(keys.indexOf("alpha"), 1);
        this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
      }
      const hashedKeys = keys.sort().join("");
      if (!(hashedKeys in hashedModelKeys)) {
        throw new Error("Unable to parse color from object: " + JSON.stringify(object));
      }
      this.model = hashedModelKeys[hashedKeys];
      const { labels } = color_convert_default[this.model];
      const color = [];
      for (i = 0;i < labels.length; i++) {
        color.push(object[labels[i]]);
      }
      this.color = zeroArray(color);
    }
    if (limiters[this.model]) {
      channels = color_convert_default[this.model].channels;
      for (i = 0;i < channels; i++) {
        const limit = limiters[this.model][i];
        if (limit) {
          this.color[i] = limit(this.color[i]);
        }
      }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
      Object.freeze(this);
    }
  }
  Color.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(places) {
      let self = this.model in color_string_default.to ? this : this.rgb();
      self = self.round(typeof places === "number" ? places : 1);
      const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return color_string_default.to[self.model](...arguments_);
    },
    percentString(places) {
      const self = this.rgb().round(typeof places === "number" ? places : 1);
      const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return color_string_default.to.rgb.percent(...arguments_);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      const result = {};
      const { channels } = color_convert_default[this.model];
      const { labels } = color_convert_default[this.model];
      for (let i = 0;i < channels; i++) {
        result[labels[i]] = this.color[i];
      }
      if (this.valpha !== 1) {
        result.alpha = this.valpha;
      }
      return result;
    },
    unitArray() {
      const rgb = this.rgb().color;
      rgb[0] /= 255;
      rgb[1] /= 255;
      rgb[2] /= 255;
      if (this.valpha !== 1) {
        rgb.push(this.valpha);
      }
      return rgb;
    },
    unitObject() {
      const rgb = this.rgb().object();
      rgb.r /= 255;
      rgb.g /= 255;
      rgb.b /= 255;
      if (this.valpha !== 1) {
        rgb.alpha = this.valpha;
      }
      return rgb;
    },
    round(places) {
      places = Math.max(places || 0, 0);
      return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
    },
    alpha(value) {
      if (value !== undefined) {
        return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
      }
      return this.valpha;
    },
    red: getset("rgb", 0, maxfn(255)),
    green: getset("rgb", 1, maxfn(255)),
    blue: getset("rgb", 2, maxfn(255)),
    hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
    saturationl: getset("hsl", 1, maxfn(100)),
    lightness: getset("hsl", 2, maxfn(100)),
    saturationv: getset("hsv", 1, maxfn(100)),
    value: getset("hsv", 2, maxfn(100)),
    chroma: getset("hcg", 1, maxfn(100)),
    gray: getset("hcg", 2, maxfn(100)),
    white: getset("hwb", 1, maxfn(100)),
    wblack: getset("hwb", 2, maxfn(100)),
    cyan: getset("cmyk", 0, maxfn(100)),
    magenta: getset("cmyk", 1, maxfn(100)),
    yellow: getset("cmyk", 2, maxfn(100)),
    black: getset("cmyk", 3, maxfn(100)),
    x: getset("xyz", 0, maxfn(95.047)),
    y: getset("xyz", 1, maxfn(100)),
    z: getset("xyz", 2, maxfn(108.833)),
    l: getset("lab", 0, maxfn(100)),
    a: getset("lab", 1),
    b: getset("lab", 2),
    keyword(value) {
      if (value !== undefined) {
        return new Color(value);
      }
      return color_convert_default[this.model].keyword(this.color);
    },
    hex(value) {
      if (value !== undefined) {
        return new Color(value);
      }
      return color_string_default.to.hex(...this.rgb().round().color);
    },
    hexa(value) {
      if (value !== undefined) {
        return new Color(value);
      }
      const rgbArray = this.rgb().round().color;
      let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (alphaHex.length === 1) {
        alphaHex = "0" + alphaHex;
      }
      return color_string_default.to.hex(...rgbArray) + alphaHex;
    },
    rgbNumber() {
      const rgb = this.rgb().color;
      return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
    },
    luminosity() {
      const rgb = this.rgb().color;
      const lum = [];
      for (const [i, element] of rgb.entries()) {
        const chan = element / 255;
        lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast(color2) {
      const lum1 = this.luminosity();
      const lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level(color2) {
      const contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7) {
        return "AAA";
      }
      return contrastRatio >= 4.5 ? "AA" : "";
    },
    isDark() {
      const rgb = this.rgb().color;
      const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
      return yiq < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      const rgb = this.rgb();
      for (let i = 0;i < 3; i++) {
        rgb.color[i] = 255 - rgb.color[i];
      }
      return rgb;
    },
    lighten(ratio) {
      const hsl = this.hsl();
      hsl.color[2] += hsl.color[2] * ratio;
      return hsl;
    },
    darken(ratio) {
      const hsl = this.hsl();
      hsl.color[2] -= hsl.color[2] * ratio;
      return hsl;
    },
    saturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] += hsl.color[1] * ratio;
      return hsl;
    },
    desaturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] -= hsl.color[1] * ratio;
      return hsl;
    },
    whiten(ratio) {
      const hwb = this.hwb();
      hwb.color[1] += hwb.color[1] * ratio;
      return hwb;
    },
    blacken(ratio) {
      const hwb = this.hwb();
      hwb.color[2] += hwb.color[2] * ratio;
      return hwb;
    },
    grayscale() {
      const rgb = this.rgb().color;
      const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      return Color.rgb(value, value, value);
    },
    fade(ratio) {
      return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer(ratio) {
      return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate(degrees) {
      const hsl = this.hsl();
      let hue = hsl.color[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      hsl.color[0] = hue;
      return hsl;
    },
    mix(mixinColor, weight) {
      if (!mixinColor || !mixinColor.rgb) {
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
      }
      const color1 = mixinColor.rgb();
      const color2 = this.rgb();
      const p = weight === undefined ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = color1.alpha() - color2.alpha();
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
      const w2 = 1 - w1;
      return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    }
  };
  for (const model of Object.keys(color_convert_default)) {
    if (skippedModels.includes(model)) {
      continue;
    }
    const { channels } = color_convert_default[model];
    Color.prototype[model] = function(...arguments_) {
      if (this.model === model) {
        return new Color(this);
      }
      if (arguments_.length > 0) {
        return new Color(arguments_, model);
      }
      return new Color([...assertArray(color_convert_default[this.model][model].raw(this.color)), this.valpha], model);
    };
    Color[model] = function(...arguments_) {
      let color = arguments_[0];
      if (typeof color === "number") {
        color = zeroArray(arguments_, channels);
      }
      return new Color(color, model);
    };
  }
  function roundTo(number, places) {
    return Number(number.toFixed(places));
  }
  function roundToPlace(places) {
    return function(number) {
      return roundTo(number, places);
    };
  }
  function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];
    for (const m of model) {
      (limiters[m] ||= [])[channel] = modifier;
    }
    model = model[0];
    return function(value) {
      let result;
      if (value !== undefined) {
        if (modifier) {
          value = modifier(value);
        }
        result = this[model]();
        result.color[channel] = value;
        return result;
      }
      result = this[model]().color[channel];
      if (modifier) {
        result = modifier(result);
      }
      return result;
    };
  }
  function maxfn(max) {
    return function(v) {
      return Math.max(0, Math.min(max, v));
    };
  }
  function assertArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function zeroArray(array, length) {
    for (let i = 0;i < length; i++) {
      if (typeof array[i] !== "number") {
        array[i] = 0;
      }
    }
    return array;
  }
  var index_default = Color;
});

// node_modules/.bun/@img+colour@1.1.0/node_modules/@img/colour/index.cjs
var require_colour = __commonJS((exports, module) => {
  module.exports = require_color().default;
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/colour.js
var require_colour2 = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var color = require_colour();
  var is = require_is();
  var colourspace = {
    multiband: "multiband",
    "b-w": "b-w",
    bw: "b-w",
    cmyk: "cmyk",
    srgb: "srgb"
  };
  function tint(tint2) {
    this._setBackgroundColourOption("tint", tint2);
    return this;
  }
  function greyscale(greyscale2) {
    this.options.greyscale = is.bool(greyscale2) ? greyscale2 : true;
    return this;
  }
  function grayscale(grayscale2) {
    return this.greyscale(grayscale2);
  }
  function pipelineColourspace(colourspace2) {
    if (!is.string(colourspace2)) {
      throw is.invalidParameterError("colourspace", "string", colourspace2);
    }
    this.options.colourspacePipeline = colourspace2;
    return this;
  }
  function pipelineColorspace(colorspace) {
    return this.pipelineColourspace(colorspace);
  }
  function toColourspace(colourspace2) {
    if (!is.string(colourspace2)) {
      throw is.invalidParameterError("colourspace", "string", colourspace2);
    }
    this.options.colourspace = colourspace2;
    return this;
  }
  function toColorspace(colorspace) {
    return this.toColourspace(colorspace);
  }
  function _getBackgroundColourOption(value) {
    if (is.object(value) || is.string(value) && value.length >= 3 && value.length <= 200) {
      const colour = color(value);
      return [
        colour.red(),
        colour.green(),
        colour.blue(),
        Math.round(colour.alpha() * 255)
      ];
    } else {
      throw is.invalidParameterError("background", "object or string", value);
    }
  }
  function _setBackgroundColourOption(key, value) {
    if (is.defined(value)) {
      this.options[key] = _getBackgroundColourOption(value);
    }
  }
  module.exports = (Sharp) => {
    Object.assign(Sharp.prototype, {
      tint,
      greyscale,
      grayscale,
      pipelineColourspace,
      pipelineColorspace,
      toColourspace,
      toColorspace,
      _getBackgroundColourOption,
      _setBackgroundColourOption
    });
    Sharp.colourspace = colourspace;
    Sharp.colorspace = colourspace;
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/channel.js
var require_channel = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var is = require_is();
  var bool = {
    and: "and",
    or: "or",
    eor: "eor"
  };
  function removeAlpha() {
    this.options.removeAlpha = true;
    return this;
  }
  function ensureAlpha(alpha) {
    if (is.defined(alpha)) {
      if (is.number(alpha) && is.inRange(alpha, 0, 1)) {
        this.options.ensureAlpha = alpha;
      } else {
        throw is.invalidParameterError("alpha", "number between 0 and 1", alpha);
      }
    } else {
      this.options.ensureAlpha = 1;
    }
    return this;
  }
  function extractChannel(channel) {
    const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
    if (Object.keys(channelMap).includes(channel)) {
      channel = channelMap[channel];
    }
    if (is.integer(channel) && is.inRange(channel, 0, 4)) {
      this.options.extractChannel = channel;
    } else {
      throw is.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel);
    }
    return this;
  }
  function joinChannel(images, options) {
    if (Array.isArray(images)) {
      images.forEach(function(image) {
        this.options.joinChannelIn.push(this._createInputDescriptor(image, options));
      }, this);
    } else {
      this.options.joinChannelIn.push(this._createInputDescriptor(images, options));
    }
    return this;
  }
  function bandbool(boolOp) {
    if (is.string(boolOp) && is.inArray(boolOp, ["and", "or", "eor"])) {
      this.options.bandBoolOp = boolOp;
    } else {
      throw is.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
    }
    return this;
  }
  module.exports = (Sharp) => {
    Object.assign(Sharp.prototype, {
      removeAlpha,
      ensureAlpha,
      extractChannel,
      joinChannel,
      bandbool
    });
    Sharp.bool = bool;
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/output.js
var require_output = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var path = __require("path");
  var is = require_is();
  var sharp = require_sharp();
  var formats = new Map([
    ["heic", "heif"],
    ["heif", "heif"],
    ["avif", "avif"],
    ["jpeg", "jpeg"],
    ["jpg", "jpeg"],
    ["jpe", "jpeg"],
    ["tile", "tile"],
    ["dz", "tile"],
    ["png", "png"],
    ["raw", "raw"],
    ["tiff", "tiff"],
    ["tif", "tiff"],
    ["webp", "webp"],
    ["gif", "gif"],
    ["jp2", "jp2"],
    ["jpx", "jp2"],
    ["j2k", "jp2"],
    ["j2c", "jp2"],
    ["jxl", "jxl"]
  ]);
  var jp2Regex = /\.(jp[2x]|j2[kc])$/i;
  var errJp2Save = () => new Error("JP2 output requires libvips with support for OpenJPEG");
  var bitdepthFromColourCount = (colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours)));
  function toFile(fileOut, callback) {
    let err;
    if (!is.string(fileOut)) {
      err = new Error("Missing output file path");
    } else if (is.string(this.options.input.file) && path.resolve(this.options.input.file) === path.resolve(fileOut)) {
      err = new Error("Cannot use same file for input and output");
    } else if (jp2Regex.test(path.extname(fileOut)) && !this.constructor.format.jp2k.output.file) {
      err = errJp2Save();
    }
    if (err) {
      if (is.fn(callback)) {
        callback(err);
      } else {
        return Promise.reject(err);
      }
    } else {
      this.options.fileOut = fileOut;
      const stack = Error();
      return this._pipeline(callback, stack);
    }
    return this;
  }
  function toBuffer(options, callback) {
    if (is.object(options)) {
      this._setBooleanOption("resolveWithObject", options.resolveWithObject);
    } else if (this.options.resolveWithObject) {
      this.options.resolveWithObject = false;
    }
    this.options.fileOut = "";
    const stack = Error();
    return this._pipeline(is.fn(options) ? options : callback, stack);
  }
  function keepExif() {
    this.options.keepMetadata |= 1;
    return this;
  }
  function withExif(exif) {
    if (is.object(exif)) {
      for (const [ifd, entries] of Object.entries(exif)) {
        if (is.object(entries)) {
          for (const [k, v] of Object.entries(entries)) {
            if (is.string(v)) {
              this.options.withExif[`exif-${ifd.toLowerCase()}-${k}`] = v;
            } else {
              throw is.invalidParameterError(`${ifd}.${k}`, "string", v);
            }
          }
        } else {
          throw is.invalidParameterError(ifd, "object", entries);
        }
      }
    } else {
      throw is.invalidParameterError("exif", "object", exif);
    }
    this.options.withExifMerge = false;
    return this.keepExif();
  }
  function withExifMerge(exif) {
    this.withExif(exif);
    this.options.withExifMerge = true;
    return this;
  }
  function keepIccProfile() {
    this.options.keepMetadata |= 8;
    return this;
  }
  function withIccProfile(icc, options) {
    if (is.string(icc)) {
      this.options.withIccProfile = icc;
    } else {
      throw is.invalidParameterError("icc", "string", icc);
    }
    this.keepIccProfile();
    if (is.object(options)) {
      if (is.defined(options.attach)) {
        if (is.bool(options.attach)) {
          if (!options.attach) {
            this.options.keepMetadata &= ~8;
          }
        } else {
          throw is.invalidParameterError("attach", "boolean", options.attach);
        }
      }
    }
    return this;
  }
  function keepXmp() {
    this.options.keepMetadata |= 2;
    return this;
  }
  function withXmp(xmp) {
    if (is.string(xmp) && xmp.length > 0) {
      this.options.withXmp = xmp;
      this.options.keepMetadata |= 2;
    } else {
      throw is.invalidParameterError("xmp", "non-empty string", xmp);
    }
    return this;
  }
  function keepMetadata() {
    this.options.keepMetadata = 31;
    return this;
  }
  function withMetadata(options) {
    this.keepMetadata();
    this.withIccProfile("srgb");
    if (is.object(options)) {
      if (is.defined(options.orientation)) {
        if (is.integer(options.orientation) && is.inRange(options.orientation, 1, 8)) {
          this.options.withMetadataOrientation = options.orientation;
        } else {
          throw is.invalidParameterError("orientation", "integer between 1 and 8", options.orientation);
        }
      }
      if (is.defined(options.density)) {
        if (is.number(options.density) && options.density > 0) {
          this.options.withMetadataDensity = options.density;
        } else {
          throw is.invalidParameterError("density", "positive number", options.density);
        }
      }
      if (is.defined(options.icc)) {
        this.withIccProfile(options.icc);
      }
      if (is.defined(options.exif)) {
        this.withExifMerge(options.exif);
      }
    }
    return this;
  }
  function toFormat(format, options) {
    const actualFormat = formats.get((is.object(format) && is.string(format.id) ? format.id : format).toLowerCase());
    if (!actualFormat) {
      throw is.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format);
    }
    return this[actualFormat](options);
  }
  function jpeg(options) {
    if (is.object(options)) {
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
          this.options.jpegQuality = options.quality;
        } else {
          throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
        }
      }
      if (is.defined(options.progressive)) {
        this._setBooleanOption("jpegProgressive", options.progressive);
      }
      if (is.defined(options.chromaSubsampling)) {
        if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
          this.options.jpegChromaSubsampling = options.chromaSubsampling;
        } else {
          throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
        }
      }
      const optimiseCoding = is.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
      if (is.defined(optimiseCoding)) {
        this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
      }
      if (is.defined(options.mozjpeg)) {
        if (is.bool(options.mozjpeg)) {
          if (options.mozjpeg) {
            this.options.jpegTrellisQuantisation = true;
            this.options.jpegOvershootDeringing = true;
            this.options.jpegOptimiseScans = true;
            this.options.jpegProgressive = true;
            this.options.jpegQuantisationTable = 3;
          }
        } else {
          throw is.invalidParameterError("mozjpeg", "boolean", options.mozjpeg);
        }
      }
      const trellisQuantisation = is.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
      if (is.defined(trellisQuantisation)) {
        this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
      }
      if (is.defined(options.overshootDeringing)) {
        this._setBooleanOption("jpegOvershootDeringing", options.overshootDeringing);
      }
      const optimiseScans = is.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
      if (is.defined(optimiseScans)) {
        this._setBooleanOption("jpegOptimiseScans", optimiseScans);
        if (optimiseScans) {
          this.options.jpegProgressive = true;
        }
      }
      const quantisationTable = is.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
      if (is.defined(quantisationTable)) {
        if (is.integer(quantisationTable) && is.inRange(quantisationTable, 0, 8)) {
          this.options.jpegQuantisationTable = quantisationTable;
        } else {
          throw is.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
        }
      }
    }
    return this._updateFormatOut("jpeg", options);
  }
  function png(options) {
    if (is.object(options)) {
      if (is.defined(options.progressive)) {
        this._setBooleanOption("pngProgressive", options.progressive);
      }
      if (is.defined(options.compressionLevel)) {
        if (is.integer(options.compressionLevel) && is.inRange(options.compressionLevel, 0, 9)) {
          this.options.pngCompressionLevel = options.compressionLevel;
        } else {
          throw is.invalidParameterError("compressionLevel", "integer between 0 and 9", options.compressionLevel);
        }
      }
      if (is.defined(options.adaptiveFiltering)) {
        this._setBooleanOption("pngAdaptiveFiltering", options.adaptiveFiltering);
      }
      const colours = options.colours || options.colors;
      if (is.defined(colours)) {
        if (is.integer(colours) && is.inRange(colours, 2, 256)) {
          this.options.pngBitdepth = bitdepthFromColourCount(colours);
        } else {
          throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
        }
      }
      if (is.defined(options.palette)) {
        this._setBooleanOption("pngPalette", options.palette);
      } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is.defined)) {
        this._setBooleanOption("pngPalette", true);
      }
      if (this.options.pngPalette) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 0, 100)) {
            this.options.pngQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 0 and 100", options.quality);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 1, 10)) {
            this.options.pngEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
          }
        }
        if (is.defined(options.dither)) {
          if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
            this.options.pngDither = options.dither;
          } else {
            throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
          }
        }
      }
    }
    return this._updateFormatOut("png", options);
  }
  function webp(options) {
    if (is.object(options)) {
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
          this.options.webpQuality = options.quality;
        } else {
          throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
        }
      }
      if (is.defined(options.alphaQuality)) {
        if (is.integer(options.alphaQuality) && is.inRange(options.alphaQuality, 0, 100)) {
          this.options.webpAlphaQuality = options.alphaQuality;
        } else {
          throw is.invalidParameterError("alphaQuality", "integer between 0 and 100", options.alphaQuality);
        }
      }
      if (is.defined(options.lossless)) {
        this._setBooleanOption("webpLossless", options.lossless);
      }
      if (is.defined(options.nearLossless)) {
        this._setBooleanOption("webpNearLossless", options.nearLossless);
      }
      if (is.defined(options.smartSubsample)) {
        this._setBooleanOption("webpSmartSubsample", options.smartSubsample);
      }
      if (is.defined(options.smartDeblock)) {
        this._setBooleanOption("webpSmartDeblock", options.smartDeblock);
      }
      if (is.defined(options.preset)) {
        if (is.string(options.preset) && is.inArray(options.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) {
          this.options.webpPreset = options.preset;
        } else {
          throw is.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", options.preset);
        }
      }
      if (is.defined(options.effort)) {
        if (is.integer(options.effort) && is.inRange(options.effort, 0, 6)) {
          this.options.webpEffort = options.effort;
        } else {
          throw is.invalidParameterError("effort", "integer between 0 and 6", options.effort);
        }
      }
      if (is.defined(options.minSize)) {
        this._setBooleanOption("webpMinSize", options.minSize);
      }
      if (is.defined(options.mixed)) {
        this._setBooleanOption("webpMixed", options.mixed);
      }
    }
    trySetAnimationOptions(options, this.options);
    return this._updateFormatOut("webp", options);
  }
  function gif(options) {
    if (is.object(options)) {
      if (is.defined(options.reuse)) {
        this._setBooleanOption("gifReuse", options.reuse);
      }
      if (is.defined(options.progressive)) {
        this._setBooleanOption("gifProgressive", options.progressive);
      }
      const colours = options.colours || options.colors;
      if (is.defined(colours)) {
        if (is.integer(colours) && is.inRange(colours, 2, 256)) {
          this.options.gifBitdepth = bitdepthFromColourCount(colours);
        } else {
          throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
        }
      }
      if (is.defined(options.effort)) {
        if (is.number(options.effort) && is.inRange(options.effort, 1, 10)) {
          this.options.gifEffort = options.effort;
        } else {
          throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
        }
      }
      if (is.defined(options.dither)) {
        if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
          this.options.gifDither = options.dither;
        } else {
          throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
        }
      }
      if (is.defined(options.interFrameMaxError)) {
        if (is.number(options.interFrameMaxError) && is.inRange(options.interFrameMaxError, 0, 32)) {
          this.options.gifInterFrameMaxError = options.interFrameMaxError;
        } else {
          throw is.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", options.interFrameMaxError);
        }
      }
      if (is.defined(options.interPaletteMaxError)) {
        if (is.number(options.interPaletteMaxError) && is.inRange(options.interPaletteMaxError, 0, 256)) {
          this.options.gifInterPaletteMaxError = options.interPaletteMaxError;
        } else {
          throw is.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", options.interPaletteMaxError);
        }
      }
      if (is.defined(options.keepDuplicateFrames)) {
        if (is.bool(options.keepDuplicateFrames)) {
          this._setBooleanOption("gifKeepDuplicateFrames", options.keepDuplicateFrames);
        } else {
          throw is.invalidParameterError("keepDuplicateFrames", "boolean", options.keepDuplicateFrames);
        }
      }
    }
    trySetAnimationOptions(options, this.options);
    return this._updateFormatOut("gif", options);
  }
  function jp2(options) {
    if (!this.constructor.format.jp2k.output.buffer) {
      throw errJp2Save();
    }
    if (is.object(options)) {
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
          this.options.jp2Quality = options.quality;
        } else {
          throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
        }
      }
      if (is.defined(options.lossless)) {
        if (is.bool(options.lossless)) {
          this.options.jp2Lossless = options.lossless;
        } else {
          throw is.invalidParameterError("lossless", "boolean", options.lossless);
        }
      }
      if (is.defined(options.tileWidth)) {
        if (is.integer(options.tileWidth) && is.inRange(options.tileWidth, 1, 32768)) {
          this.options.jp2TileWidth = options.tileWidth;
        } else {
          throw is.invalidParameterError("tileWidth", "integer between 1 and 32768", options.tileWidth);
        }
      }
      if (is.defined(options.tileHeight)) {
        if (is.integer(options.tileHeight) && is.inRange(options.tileHeight, 1, 32768)) {
          this.options.jp2TileHeight = options.tileHeight;
        } else {
          throw is.invalidParameterError("tileHeight", "integer between 1 and 32768", options.tileHeight);
        }
      }
      if (is.defined(options.chromaSubsampling)) {
        if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
          this.options.jp2ChromaSubsampling = options.chromaSubsampling;
        } else {
          throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
        }
      }
    }
    return this._updateFormatOut("jp2", options);
  }
  function trySetAnimationOptions(source, target) {
    if (is.object(source) && is.defined(source.loop)) {
      if (is.integer(source.loop) && is.inRange(source.loop, 0, 65535)) {
        target.loop = source.loop;
      } else {
        throw is.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
      }
    }
    if (is.object(source) && is.defined(source.delay)) {
      if (is.integer(source.delay) && is.inRange(source.delay, 0, 65535)) {
        target.delay = [source.delay];
      } else if (Array.isArray(source.delay) && source.delay.every(is.integer) && source.delay.every((v) => is.inRange(v, 0, 65535))) {
        target.delay = source.delay;
      } else {
        throw is.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
      }
    }
  }
  function tiff(options) {
    if (is.object(options)) {
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
          this.options.tiffQuality = options.quality;
        } else {
          throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
        }
      }
      if (is.defined(options.bitdepth)) {
        if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [1, 2, 4, 8])) {
          this.options.tiffBitdepth = options.bitdepth;
        } else {
          throw is.invalidParameterError("bitdepth", "1, 2, 4 or 8", options.bitdepth);
        }
      }
      if (is.defined(options.tile)) {
        this._setBooleanOption("tiffTile", options.tile);
      }
      if (is.defined(options.tileWidth)) {
        if (is.integer(options.tileWidth) && options.tileWidth > 0) {
          this.options.tiffTileWidth = options.tileWidth;
        } else {
          throw is.invalidParameterError("tileWidth", "integer greater than zero", options.tileWidth);
        }
      }
      if (is.defined(options.tileHeight)) {
        if (is.integer(options.tileHeight) && options.tileHeight > 0) {
          this.options.tiffTileHeight = options.tileHeight;
        } else {
          throw is.invalidParameterError("tileHeight", "integer greater than zero", options.tileHeight);
        }
      }
      if (is.defined(options.miniswhite)) {
        this._setBooleanOption("tiffMiniswhite", options.miniswhite);
      }
      if (is.defined(options.pyramid)) {
        this._setBooleanOption("tiffPyramid", options.pyramid);
      }
      if (is.defined(options.xres)) {
        if (is.number(options.xres) && options.xres > 0) {
          this.options.tiffXres = options.xres;
        } else {
          throw is.invalidParameterError("xres", "number greater than zero", options.xres);
        }
      }
      if (is.defined(options.yres)) {
        if (is.number(options.yres) && options.yres > 0) {
          this.options.tiffYres = options.yres;
        } else {
          throw is.invalidParameterError("yres", "number greater than zero", options.yres);
        }
      }
      if (is.defined(options.compression)) {
        if (is.string(options.compression) && is.inArray(options.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) {
          this.options.tiffCompression = options.compression;
        } else {
          throw is.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", options.compression);
        }
      }
      if (is.defined(options.bigtiff)) {
        this._setBooleanOption("tiffBigtiff", options.bigtiff);
      }
      if (is.defined(options.predictor)) {
        if (is.string(options.predictor) && is.inArray(options.predictor, ["none", "horizontal", "float"])) {
          this.options.tiffPredictor = options.predictor;
        } else {
          throw is.invalidParameterError("predictor", "one of: none, horizontal, float", options.predictor);
        }
      }
      if (is.defined(options.resolutionUnit)) {
        if (is.string(options.resolutionUnit) && is.inArray(options.resolutionUnit, ["inch", "cm"])) {
          this.options.tiffResolutionUnit = options.resolutionUnit;
        } else {
          throw is.invalidParameterError("resolutionUnit", "one of: inch, cm", options.resolutionUnit);
        }
      }
    }
    return this._updateFormatOut("tiff", options);
  }
  function avif(options) {
    return this.heif({ ...options, compression: "av1" });
  }
  function heif(options) {
    if (is.object(options)) {
      if (is.string(options.compression) && is.inArray(options.compression, ["av1", "hevc"])) {
        this.options.heifCompression = options.compression;
      } else {
        throw is.invalidParameterError("compression", "one of: av1, hevc", options.compression);
      }
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
          this.options.heifQuality = options.quality;
        } else {
          throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
        }
      }
      if (is.defined(options.lossless)) {
        if (is.bool(options.lossless)) {
          this.options.heifLossless = options.lossless;
        } else {
          throw is.invalidParameterError("lossless", "boolean", options.lossless);
        }
      }
      if (is.defined(options.effort)) {
        if (is.integer(options.effort) && is.inRange(options.effort, 0, 9)) {
          this.options.heifEffort = options.effort;
        } else {
          throw is.invalidParameterError("effort", "integer between 0 and 9", options.effort);
        }
      }
      if (is.defined(options.chromaSubsampling)) {
        if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
          this.options.heifChromaSubsampling = options.chromaSubsampling;
        } else {
          throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
        }
      }
      if (is.defined(options.bitdepth)) {
        if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [8, 10, 12])) {
          if (options.bitdepth !== 8 && this.constructor.versions.heif) {
            throw is.invalidParameterError("bitdepth when using prebuilt binaries", 8, options.bitdepth);
          }
          this.options.heifBitdepth = options.bitdepth;
        } else {
          throw is.invalidParameterError("bitdepth", "8, 10 or 12", options.bitdepth);
        }
      }
    } else {
      throw is.invalidParameterError("options", "Object", options);
    }
    return this._updateFormatOut("heif", options);
  }
  function jxl(options) {
    if (is.object(options)) {
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
          this.options.jxlDistance = options.quality >= 30 ? 0.1 + (100 - options.quality) * 0.09 : 53 / 3000 * options.quality * options.quality - 23 / 20 * options.quality + 25;
        } else {
          throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
        }
      } else if (is.defined(options.distance)) {
        if (is.number(options.distance) && is.inRange(options.distance, 0, 15)) {
          this.options.jxlDistance = options.distance;
        } else {
          throw is.invalidParameterError("distance", "number between 0.0 and 15.0", options.distance);
        }
      }
      if (is.defined(options.decodingTier)) {
        if (is.integer(options.decodingTier) && is.inRange(options.decodingTier, 0, 4)) {
          this.options.jxlDecodingTier = options.decodingTier;
        } else {
          throw is.invalidParameterError("decodingTier", "integer between 0 and 4", options.decodingTier);
        }
      }
      if (is.defined(options.lossless)) {
        if (is.bool(options.lossless)) {
          this.options.jxlLossless = options.lossless;
        } else {
          throw is.invalidParameterError("lossless", "boolean", options.lossless);
        }
      }
      if (is.defined(options.effort)) {
        if (is.integer(options.effort) && is.inRange(options.effort, 1, 9)) {
          this.options.jxlEffort = options.effort;
        } else {
          throw is.invalidParameterError("effort", "integer between 1 and 9", options.effort);
        }
      }
    }
    trySetAnimationOptions(options, this.options);
    return this._updateFormatOut("jxl", options);
  }
  function raw(options) {
    if (is.object(options)) {
      if (is.defined(options.depth)) {
        if (is.string(options.depth) && is.inArray(options.depth, ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"])) {
          this.options.rawDepth = options.depth;
        } else {
          throw is.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options.depth);
        }
      }
    }
    return this._updateFormatOut("raw");
  }
  function tile(options) {
    if (is.object(options)) {
      if (is.defined(options.size)) {
        if (is.integer(options.size) && is.inRange(options.size, 1, 8192)) {
          this.options.tileSize = options.size;
        } else {
          throw is.invalidParameterError("size", "integer between 1 and 8192", options.size);
        }
      }
      if (is.defined(options.overlap)) {
        if (is.integer(options.overlap) && is.inRange(options.overlap, 0, 8192)) {
          if (options.overlap > this.options.tileSize) {
            throw is.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options.overlap);
          }
          this.options.tileOverlap = options.overlap;
        } else {
          throw is.invalidParameterError("overlap", "integer between 0 and 8192", options.overlap);
        }
      }
      if (is.defined(options.container)) {
        if (is.string(options.container) && is.inArray(options.container, ["fs", "zip"])) {
          this.options.tileContainer = options.container;
        } else {
          throw is.invalidParameterError("container", "one of: fs, zip", options.container);
        }
      }
      if (is.defined(options.layout)) {
        if (is.string(options.layout) && is.inArray(options.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
          this.options.tileLayout = options.layout;
        } else {
          throw is.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options.layout);
        }
      }
      if (is.defined(options.angle)) {
        if (is.integer(options.angle) && !(options.angle % 90)) {
          this.options.tileAngle = options.angle;
        } else {
          throw is.invalidParameterError("angle", "positive/negative multiple of 90", options.angle);
        }
      }
      this._setBackgroundColourOption("tileBackground", options.background);
      if (is.defined(options.depth)) {
        if (is.string(options.depth) && is.inArray(options.depth, ["onepixel", "onetile", "one"])) {
          this.options.tileDepth = options.depth;
        } else {
          throw is.invalidParameterError("depth", "one of: onepixel, onetile, one", options.depth);
        }
      }
      if (is.defined(options.skipBlanks)) {
        if (is.integer(options.skipBlanks) && is.inRange(options.skipBlanks, -1, 65535)) {
          this.options.tileSkipBlanks = options.skipBlanks;
        } else {
          throw is.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options.skipBlanks);
        }
      } else if (is.defined(options.layout) && options.layout === "google") {
        this.options.tileSkipBlanks = 5;
      }
      const centre = is.bool(options.center) ? options.center : options.centre;
      if (is.defined(centre)) {
        this._setBooleanOption("tileCentre", centre);
      }
      if (is.defined(options.id)) {
        if (is.string(options.id)) {
          this.options.tileId = options.id;
        } else {
          throw is.invalidParameterError("id", "string", options.id);
        }
      }
      if (is.defined(options.basename)) {
        if (is.string(options.basename)) {
          this.options.tileBasename = options.basename;
        } else {
          throw is.invalidParameterError("basename", "string", options.basename);
        }
      }
    }
    if (is.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
      this.options.tileFormat = this.options.formatOut;
    } else if (this.options.formatOut !== "input") {
      throw is.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
    }
    return this._updateFormatOut("dz");
  }
  function timeout(options) {
    if (!is.plainObject(options)) {
      throw is.invalidParameterError("options", "object", options);
    }
    if (is.integer(options.seconds) && is.inRange(options.seconds, 0, 3600)) {
      this.options.timeoutSeconds = options.seconds;
    } else {
      throw is.invalidParameterError("seconds", "integer between 0 and 3600", options.seconds);
    }
    return this;
  }
  function _updateFormatOut(formatOut, options) {
    if (!(is.object(options) && options.force === false)) {
      this.options.formatOut = formatOut;
    }
    return this;
  }
  function _setBooleanOption(key, val) {
    if (is.bool(val)) {
      this.options[key] = val;
    } else {
      throw is.invalidParameterError(key, "boolean", val);
    }
  }
  function _read() {
    if (!this.options.streamOut) {
      this.options.streamOut = true;
      const stack = Error();
      this._pipeline(undefined, stack);
    }
  }
  function _pipeline(callback, stack) {
    if (typeof callback === "function") {
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, data, info);
            }
          });
        });
      } else {
        sharp.pipeline(this.options, (err, data, info) => {
          if (err) {
            callback(is.nativeError(err, stack));
          } else {
            callback(null, data, info);
          }
        });
      }
      return this;
    } else if (this.options.streamOut) {
      if (this._isStreamInput()) {
        this.once("finish", () => {
          this._flattenBufferIn();
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              this.emit("error", is.nativeError(err, stack));
            } else {
              this.emit("info", info);
              this.push(data);
            }
            this.push(null);
            this.on("end", () => this.emit("close"));
          });
        });
        if (this.streamInFinished) {
          this.emit("finish");
        }
      } else {
        sharp.pipeline(this.options, (err, data, info) => {
          if (err) {
            this.emit("error", is.nativeError(err, stack));
          } else {
            this.emit("info", info);
            this.push(data);
          }
          this.push(null);
          this.on("end", () => this.emit("close"));
        });
      }
      return this;
    } else {
      if (this._isStreamInput()) {
        return new Promise((resolve, reject) => {
          this.once("finish", () => {
            this._flattenBufferIn();
            sharp.pipeline(this.options, (err, data, info) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                if (this.options.resolveWithObject) {
                  resolve({ data, info });
                } else {
                  resolve(data);
                }
              }
            });
          });
        });
      } else {
        return new Promise((resolve, reject) => {
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              reject(is.nativeError(err, stack));
            } else {
              if (this.options.resolveWithObject) {
                resolve({ data, info });
              } else {
                resolve(data);
              }
            }
          });
        });
      }
    }
  }
  module.exports = (Sharp) => {
    Object.assign(Sharp.prototype, {
      toFile,
      toBuffer,
      keepExif,
      withExif,
      withExifMerge,
      keepIccProfile,
      withIccProfile,
      keepXmp,
      withXmp,
      keepMetadata,
      withMetadata,
      toFormat,
      jpeg,
      jp2,
      png,
      webp,
      tiff,
      avif,
      heif,
      jxl,
      gif,
      raw,
      tile,
      timeout,
      _updateFormatOut,
      _setBooleanOption,
      _read,
      _pipeline
    });
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/utility.js
var require_utility = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var events = __require("events");
  var detectLibc = require_detect_libc();
  var is = require_is();
  var { runtimePlatformArch } = require_libvips();
  var sharp = require_sharp();
  var runtimePlatform = runtimePlatformArch();
  var libvipsVersion = sharp.libvipsVersion();
  var format = sharp.format();
  format.heif.output.alias = ["avif", "heic"];
  format.jpeg.output.alias = ["jpe", "jpg"];
  format.tiff.output.alias = ["tif"];
  format.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
  var interpolators = {
    nearest: "nearest",
    bilinear: "bilinear",
    bicubic: "bicubic",
    locallyBoundedBicubic: "lbb",
    nohalo: "nohalo",
    vertexSplitQuadraticBasisSpline: "vsqbs"
  };
  var versions = {
    vips: libvipsVersion.semver
  };
  if (!libvipsVersion.isGlobal) {
    if (!libvipsVersion.isWasm) {
      try {
        versions = __require(`@img/sharp-${runtimePlatform}/versions`);
      } catch (_) {
        try {
          versions = __require(`@img/sharp-libvips-${runtimePlatform}/versions`);
        } catch (_2) {}
      }
    } else {
      try {
        versions = (()=>{throw new Error("Cannot require module "+"@img/sharp-wasm32/versions");})();
      } catch (_) {}
    }
  }
  versions.sharp = require_package().version;
  if (versions.heif && format.heif) {
    format.heif.input.fileSuffix = [".avif"];
    format.heif.output.alias = ["avif"];
  }
  function cache(options) {
    if (is.bool(options)) {
      if (options) {
        return sharp.cache(50, 20, 100);
      } else {
        return sharp.cache(0, 0, 0);
      }
    } else if (is.object(options)) {
      return sharp.cache(options.memory, options.files, options.items);
    } else {
      return sharp.cache();
    }
  }
  cache(true);
  function concurrency(concurrency2) {
    return sharp.concurrency(is.integer(concurrency2) ? concurrency2 : null);
  }
  if (detectLibc.familySync() === detectLibc.GLIBC && !sharp._isUsingJemalloc()) {
    sharp.concurrency(1);
  } else if (detectLibc.familySync() === detectLibc.MUSL && sharp.concurrency() === 1024) {
    sharp.concurrency(__require("os").availableParallelism());
  }
  var queue = new events.EventEmitter;
  function counters() {
    return sharp.counters();
  }
  function simd(simd2) {
    return sharp.simd(is.bool(simd2) ? simd2 : null);
  }
  function block(options) {
    if (is.object(options)) {
      if (Array.isArray(options.operation) && options.operation.every(is.string)) {
        sharp.block(options.operation, true);
      } else {
        throw is.invalidParameterError("operation", "Array<string>", options.operation);
      }
    } else {
      throw is.invalidParameterError("options", "object", options);
    }
  }
  function unblock(options) {
    if (is.object(options)) {
      if (Array.isArray(options.operation) && options.operation.every(is.string)) {
        sharp.block(options.operation, false);
      } else {
        throw is.invalidParameterError("operation", "Array<string>", options.operation);
      }
    } else {
      throw is.invalidParameterError("options", "object", options);
    }
  }
  module.exports = (Sharp) => {
    Sharp.cache = cache;
    Sharp.concurrency = concurrency;
    Sharp.counters = counters;
    Sharp.simd = simd;
    Sharp.format = format;
    Sharp.interpolators = interpolators;
    Sharp.versions = versions;
    Sharp.queue = queue;
    Sharp.block = block;
    Sharp.unblock = unblock;
  };
});

// node_modules/.bun/sharp@0.34.5/node_modules/sharp/lib/index.js
var require_lib = __commonJS((exports, module) => {
  /*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  */
  var Sharp = require_constructor();
  require_input()(Sharp);
  require_resize()(Sharp);
  require_composite()(Sharp);
  require_operation()(Sharp);
  require_colour2()(Sharp);
  require_channel()(Sharp);
  require_output()(Sharp);
  require_utility()(Sharp);
  module.exports = Sharp;
});
export default require_lib();
