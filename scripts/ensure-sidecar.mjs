#!/usr/bin/env node
import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BIN_DIR = path.join(ROOT, "src-tauri", "bin");
const ENTRY = path.join(ROOT, "src-tauri", "resources", "mimo-code", "dist", "cli-bun.js");
const DEFAULT_DOWNLOAD_BASE = process.env.MIMODEX_SIDECAR_BASE_URL;

const TARGETS = {
  "aarch64-apple-darwin": {
    file: "mimo-code-engine-aarch64-apple-darwin",
    bunTarget: "bun-darwin-arm64",
    os: "darwin",
  },
  "x86_64-apple-darwin": {
    file: "mimo-code-engine-x86_64-apple-darwin",
    bunTarget: "bun-darwin-x64",
    os: "darwin",
  },
  "x86_64-pc-windows-msvc": {
    file: "mimo-code-engine-x86_64-pc-windows-msvc.exe",
    bunTarget: "bun-windows-x64",
    os: "win32",
  },
};

const args = new Set(process.argv.slice(2));
const optional = args.has("--optional");
const force = args.has("--force") || process.env.MIMODEX_FORCE_SIDECAR === "1";
const all = args.has("--all");
const explicitTarget = getArgValue("--target");

try {
  await fsp.mkdir(BIN_DIR, { recursive: true });
  const targets = all ? Object.keys(TARGETS) : [explicitTarget || detectTarget()];
  for (const target of targets) {
    await ensureSidecar(target);
  }
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  if (optional) {
    console.warn(`[MiModex] sidecar preparation skipped: ${message}`);
  } else {
    console.error(`[MiModex] sidecar preparation failed: ${message}`);
    process.exit(1);
  }
}

function getArgValue(name) {
  const raw = process.argv.find((item) => item.startsWith(`${name}=`));
  return raw ? raw.slice(name.length + 1) : undefined;
}

function detectTarget() {
  const platform = process.platform;
  const arch = process.arch;

  if (platform === "darwin" && arch === "arm64") return "aarch64-apple-darwin";
  if (platform === "darwin" && arch === "x64") return "x86_64-apple-darwin";
  if (platform === "win32" && arch === "x64") return "x86_64-pc-windows-msvc";

  throw new Error(`unsupported platform for bundled MiModex engine: ${platform}/${arch}`);
}

async function ensureSidecar(target) {
  const meta = TARGETS[target];
  if (!meta) {
    throw new Error(`unsupported sidecar target: ${target}`);
  }

  const outPath = path.join(BIN_DIR, meta.file);
  if (!force && fs.existsSync(outPath)) {
    await makeExecutable(outPath);
    await adHocSignIfNeeded(outPath, meta.os);
    console.log(`[MiModex] sidecar ready: ${path.relative(ROOT, outPath)}`);
    return;
  }

  const bun = getBunRunner();
  if (bun && fs.existsSync(ENTRY)) {
    await buildWithBun(target, outPath, meta, bun);
    return;
  }

  await downloadSidecar(outPath, meta.file);
  await makeExecutable(outPath);
  await adHocSignIfNeeded(outPath, meta.os);
}

async function buildWithBun(target, outPath, meta, bun) {
  console.log(`[MiModex] building ${target} sidecar with Bun`);
  const result = spawnSync(
    bun.command,
    [...bun.prefixArgs, "build", "--compile", `--target=${meta.bunTarget}`, "--outfile", outPath, ENTRY],
    { cwd: ROOT, stdio: "inherit" },
  );

  if (result.status !== 0) {
    throw new Error(`bun sidecar build failed for ${target}`);
  }

  await makeExecutable(outPath);
  await adHocSignIfNeeded(outPath, meta.os);
  console.log(`[MiModex] sidecar built: ${path.relative(ROOT, outPath)}`);
}

async function downloadSidecar(outPath, fileName) {
  const baseUrl = DEFAULT_DOWNLOAD_BASE;
  if (!baseUrl) {
    throw new Error(
      "Bun is unavailable and MIMODEX_SIDECAR_BASE_URL is not set; cannot prepare bundled engine",
    );
  }

  const url = `${baseUrl.replace(/\/+$/, "")}/${fileName}`;
  const tmpPath = `${outPath}.download`;

  console.log(`[MiModex] downloading sidecar: ${url}`);
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`download failed for ${fileName}: HTTP ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  await fsp.writeFile(tmpPath, bytes);
  await fsp.rename(tmpPath, outPath);
}

function canRun(command) {
  const probe = spawnSync(command, ["--version"], { stdio: "ignore" });
  return probe.status === 0;
}

function getBunRunner() {
  if (canRun("bun")) {
    return { command: "bun", prefixArgs: [] };
  }

  if (!canRun("npx")) {
    return null;
  }

  const probe = spawnSync("npx", ["--yes", "bun@latest", "--version"], {
    cwd: ROOT,
    stdio: "ignore",
  });

  return probe.status === 0
    ? { command: "npx", prefixArgs: ["--yes", "bun@latest"] }
    : null;
}

async function makeExecutable(filePath) {
  if (os.platform() !== "win32") {
    await fsp.chmod(filePath, 0o755);
  }
}

async function adHocSignIfNeeded(filePath, targetOs) {
  if (targetOs !== "darwin" || os.platform() !== "darwin") return;
  const result = spawnSync("codesign", ["--force", "--sign", "-", filePath], {
    stdio: "ignore",
  });
  if (result.status !== 0) {
    throw new Error(`codesign failed for ${path.relative(ROOT, filePath)}`);
  }
}
