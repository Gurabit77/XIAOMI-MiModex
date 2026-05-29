#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
APP_PATH="$ROOT_DIR/src-tauri/target/release/bundle/macos/MiModex.app"
LSREGISTER="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"

echo "== MiModex macOS LaunchServices repair =="
echo "This script needs administrator permission."
echo

if [[ ! -d "$APP_PATH" ]]; then
  echo "MiModex.app not found: $APP_PATH" >&2
  echo "Run npm run tauri:build:signed first." >&2
  exit 1
fi

echo "1. Clearing quarantine/provenance xattrs on MiModex.app"
/usr/libexec/PlistBuddy -c "Delete :LSRequiresCarbon" "$APP_PATH/Contents/Info.plist" 2>/dev/null || true
/usr/libexec/PlistBuddy -c "Set :NSPrincipalClass NSApplication" "$APP_PATH/Contents/Info.plist" 2>/dev/null || \
  /usr/libexec/PlistBuddy -c "Add :NSPrincipalClass string NSApplication" "$APP_PATH/Contents/Info.plist" 2>/dev/null || true
xattr -cr "$APP_PATH" 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.provenance {} \; 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.quarantine {} \; 2>/dev/null || true

echo "2. Re-signing MiModex.app ad-hoc"
codesign --force --deep --sign - "$APP_PATH"
xattr -cr "$APP_PATH" 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.provenance {} \; 2>/dev/null || true
find "$APP_PATH" -exec xattr -d com.apple.quarantine {} \; 2>/dev/null || true
codesign --verify --deep --strict --verbose=4 "$APP_PATH"

echo "3. Enabling Spotlight indexing for the Data volume"
sudo launchctl enable system/com.apple.metadata.mds || true
sudo mdutil -i on /System/Volumes/Data || true
sudo mdutil -E /System/Volumes/Data || true
sudo mdutil -X /System/Volumes/Data || true
sudo mdutil -i on / || true
sudo mdutil -E / || true

echo "4. Restarting metadata and LaunchServices processes"
sudo launchctl kickstart -kp system/com.apple.metadata.mds || true
sudo killall mds 2>/dev/null || true
sudo killall mdworker_shared 2>/dev/null || true
launchctl kickstart -kp "gui/$(id -u)/com.apple.coreservices.sharedfilelistd" 2>/dev/null || true
killall lsd 2>/dev/null || true
killall sharedfilelistd 2>/dev/null || true
killall Finder 2>/dev/null || true
sleep 5

echo "5. Registering system apps and MiModex"
"$LSREGISTER" -r -domain local -domain system -domain user || true
"$LSREGISTER" -f /System/Applications/Calculator.app || true
"$LSREGISTER" -f /System/Applications/TextEdit.app || true
"$LSREGISTER" -f "$APP_PATH" || true

echo "6. Current Spotlight status"
spotlight_status="$(mdutil -s / /System/Volumes/Data 2>&1 || true)"
echo "$spotlight_status"
if echo "$spotlight_status" | grep -q "Spotlight server is disabled"; then
  echo
  echo "Spotlight server is still disabled. LaunchServices may keep returning kLSNoExecutableErr"
  echo "even when MiModex.app contains a valid executable."
  echo "Reboot macOS, then run this script again."
  echo "Temporary direct launch command:"
  echo "\"$APP_PATH/Contents/MacOS/mimodex\""
fi

echo "7. Verifying open command"
set +e
open /System/Applications/Calculator.app
calc_code=$?
open "$APP_PATH"
app_code=$?
set -e

echo
echo "Calculator open exit code: $calc_code"
echo "MiModex open exit code: $app_code"

if [[ $calc_code -eq 0 && $app_code -eq 0 ]]; then
  echo "Repair appears successful."
else
  echo "Repair did not fully succeed."
  echo "If Spotlight still says disabled, reboot macOS and run this script once more."
  echo "You can still launch MiModex directly with:"
  echo "$APP_PATH/Contents/MacOS/mimodex"
  exit 2
fi
