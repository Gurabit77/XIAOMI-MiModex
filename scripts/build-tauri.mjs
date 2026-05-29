#!/usr/bin/env node
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const rawArgs = process.argv.slice(2);
const { value: requestedBundles, args } = extractOption(rawArgs, "--bundles");
const bundles = process.env.MIMODEX_TAURI_BUNDLES || requestedBundles || defaultBundles();
const npm = process.platform === "win32" ? "npm.cmd" : "npm";

const result = spawnSync(
  npm,
  ["run", "tauri", "--", "build", "--bundles", bundles, "--ci", ...args],
  { cwd: ROOT, stdio: "inherit" },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

function defaultBundles() {
  if (process.platform === "darwin") return "app";
  if (process.platform === "win32") return "nsis";
  throw new Error("MiModex release packaging is currently configured for macOS and Windows only.");
}

function extractOption(args, name) {
  const rest = [];
  let value;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === name) {
      value = args[i + 1];
      i += 1;
      continue;
    }
    if (arg.startsWith(`${name}=`)) {
      value = arg.slice(name.length + 1);
      continue;
    }
    rest.push(arg);
  }

  return { value, args: rest };
}
