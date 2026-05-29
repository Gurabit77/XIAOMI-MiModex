#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
APP_PATH="$ROOT_DIR/src-tauri/target/release/bundle/macos/MiModex.app"
LSREGISTER="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"

if [[ ! -d "$APP_PATH" ]]; then
  echo "MiModex.app not found: $APP_PATH" >&2
  exit 1
fi

echo "Normalizing Info.plist for modern LaunchServices"
/usr/libexec/PlistBuddy -c "Delete :LSRequiresCarbon" "$APP_PATH/Contents/Info.plist" 2>/dev/null || true
/usr/libexec/PlistBuddy -c "Set :NSPrincipalClass NSApplication" "$APP_PATH/Contents/Info.plist" 2>/dev/null || \
  /usr/libexec/PlistBuddy -c "Add :NSPrincipalClass string NSApplication" "$APP_PATH/Contents/Info.plist" 2>/dev/null || true

echo "Clearing macOS extended attributes"
xattr -cr "$APP_PATH" 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.provenance {} \; 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.quarantine {} \; 2>/dev/null || true

echo "Signing MiModex.app ad-hoc"
codesign --force --deep --sign - "$APP_PATH"

echo "Clearing signing-time provenance attributes"
xattr -cr "$APP_PATH" 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.provenance {} \; 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.quarantine {} \; 2>/dev/null || true

codesign --verify --deep --strict --verbose=4 "$APP_PATH"

echo "Registering MiModex.app with LaunchServices"
"$LSREGISTER" -f "$APP_PATH" 2>/dev/null || true
