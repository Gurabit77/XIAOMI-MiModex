#!/bin/zsh
set -euo pipefail

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_BUNDLE="$APP_DIR/src-tauri/target/release/bundle/macos/MiModex.app"
APP_BIN="$APP_BUNDLE/Contents/MacOS/mimodex"

if [[ ! -x "$APP_BIN" ]]; then
  echo "MiModex executable not found:"
  echo "$APP_BIN"
  echo
  echo "Run: npm run tauri:build"
  exit 1
fi

exec "$APP_BIN"
