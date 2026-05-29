#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
APP_PATH="$ROOT_DIR/src-tauri/target/release/bundle/macos/MiModex.app"
EXECUTABLE="$APP_PATH/Contents/MacOS/mimodex"

if [[ ! -x "$EXECUTABLE" ]]; then
  echo "MiModex executable not found: $EXECUTABLE" >&2
  echo "Run npm run tauri:build:signed first." >&2
  exit 1
fi

exec "$EXECUTABLE"
