#!/bin/zsh
set -u

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
APP_PATH="$ROOT_DIR/src-tauri/target/release/bundle/macos/MiModex.app"
EXECUTABLE="$APP_PATH/Contents/MacOS/mimodex"
SIDECAR="$APP_PATH/Contents/MacOS/mimo-code-engine"

echo "== MiModex Doctor =="
echo "Project: $ROOT_DIR"
echo

echo "1. Toolchain"
node --version 2>/dev/null || echo "node: missing"
npm --version 2>/dev/null || echo "npm: missing"
cargo --version 2>/dev/null || echo "cargo: missing"
echo

echo "2. App bundle"
if [[ -d "$APP_PATH" ]]; then
  echo "MiModex.app: found"
else
  echo "MiModex.app: missing, run npm run tauri:build:signed"
fi

if [[ -x "$EXECUTABLE" ]]; then
  echo "main executable: found"
  file "$EXECUTABLE"
else
  echo "main executable: missing"
fi

if [[ -x "$SIDECAR" ]]; then
  echo "embedded engine: found"
  "$SIDECAR" --version 2>/dev/null || true
else
  echo "embedded engine: missing"
fi
echo

echo "3. Info.plist"
if [[ -f "$APP_PATH/Contents/Info.plist" ]]; then
  /usr/libexec/PlistBuddy -c "Print :CFBundleExecutable" "$APP_PATH/Contents/Info.plist" 2>/dev/null || true
  /usr/libexec/PlistBuddy -c "Print :CFBundleIdentifier" "$APP_PATH/Contents/Info.plist" 2>/dev/null || true
  /usr/libexec/PlistBuddy -c "Print :LSRequiresCarbon" "$APP_PATH/Contents/Info.plist" 2>/dev/null && echo "LSRequiresCarbon should be removed by sign script" || true
fi
echo

echo "4. Code signing"
if [[ -d "$APP_PATH" ]]; then
  codesign --verify --deep --strict --verbose=4 "$APP_PATH" 2>&1 || true
  spctl --assess --type execute --verbose=4 "$APP_PATH" 2>&1 || true
fi
echo

echo "5. Config"
CONFIG="$HOME/.mimo/mimo.config.json"
if [[ -f "$CONFIG" ]]; then
  echo "config: $CONFIG"
  node -e 'const fs=require("fs"); const p=process.argv[1]; const c=JSON.parse(fs.readFileSync(p,"utf8")); console.log(JSON.stringify({baseUrl:c.baseUrl, apiKey:c.apiKey ? c.apiKey.slice(0,4)+"..."+c.apiKey.slice(-4):""}, null, 2));' "$CONFIG" 2>/dev/null || echo "config parse failed"
else
  echo "config: missing"
fi
echo

echo "6. LaunchServices open"
if [[ -d "$APP_PATH" ]]; then
  open "$APP_PATH"
  echo "open exit: $?"
fi
