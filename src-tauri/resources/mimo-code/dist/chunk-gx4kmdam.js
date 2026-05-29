// @bun
import {
  API_RESIZE_PARAMS,
  init_src,
  targetImageSize
} from "./chunk-b53tzh92.js";
import {
  drainRunLoop,
  exports_windowEnum,
  init_drainRunLoop,
  init_escHotkey,
  init_swiftLoader,
  init_windowEnum,
  listWindows,
  notifyExpectedEscape,
  requireComputerUseSwift
} from "./chunk-gd6w3h9n.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import {
  CLI_CU_CAPABILITIES,
  CLI_HOST_BUNDLE_ID,
  getTerminalBundleId,
  init_common
} from "./chunk-wbmn1xar.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// packages/@ant/computer-use-input/src/backends/darwin.ts
var exports_darwin = {};
__export(exports_darwin, {
  typeText: () => typeText,
  moveMouse: () => moveMouse,
  mouseScroll: () => mouseScroll,
  mouseLocation: () => mouseLocation,
  mouseButton: () => mouseButton,
  keys: () => keys,
  key: () => key,
  getFrontmostAppInfo: () => getFrontmostAppInfo
});
import { execFile, execFileSync } from "child_process";
import { promisify } from "util";
async function osascript(script) {
  const { stdout } = await execFileAsync("osascript", ["-e", script], {
    encoding: "utf-8"
  });
  return stdout.trim();
}
async function jxa(script) {
  const { stdout } = await execFileAsync("osascript", ["-l", "JavaScript", "-e", script], {
    encoding: "utf-8"
  });
  return stdout.trim();
}
function buildMouseJxa(eventType, x, y, btn, clickState) {
  let script = `ObjC.import("CoreGraphics"); var p = $.CGPointMake(${x},${y}); var e = $.CGEventCreateMouseEvent(null, $.${eventType}, p, ${btn});`;
  if (clickState !== undefined) {
    script += ` $.CGEventSetIntegerValueField(e, $.kCGMouseEventClickState, ${clickState});`;
  }
  script += ` $.CGEventPost($.kCGHIDEventTap, e);`;
  return script;
}
var execFileAsync, KEY_MAP, MODIFIER_MAP, moveMouse = async (x, y, _animated) => {
  await jxa(buildMouseJxa("kCGEventMouseMoved", x, y, 0));
}, key = async (keyName, action) => {
  if (action === "release")
    return;
  const lower = keyName.toLowerCase();
  const keyCode = KEY_MAP[lower];
  if (keyCode !== undefined) {
    await osascript(`tell application "System Events" to key code ${keyCode}`);
  } else {
    await osascript(`tell application "System Events" to keystroke "${keyName.length === 1 ? keyName : lower}"`);
  }
}, keys = async (parts) => {
  const modifiers = [];
  let finalKey = null;
  for (const part of parts) {
    const mod = MODIFIER_MAP[part.toLowerCase()];
    if (mod)
      modifiers.push(mod);
    else
      finalKey = part;
  }
  if (!finalKey)
    return;
  const lower = finalKey.toLowerCase();
  const keyCode = KEY_MAP[lower];
  const modStr = modifiers.length > 0 ? ` using {${modifiers.join(", ")}}` : "";
  if (keyCode !== undefined) {
    await osascript(`tell application "System Events" to key code ${keyCode}${modStr}`);
  } else {
    await osascript(`tell application "System Events" to keystroke "${finalKey.length === 1 ? finalKey : lower}"${modStr}`);
  }
}, mouseLocation = async () => {
  const result = await jxa('ObjC.import("CoreGraphics"); var e = $.CGEventCreate(null); var p = $.CGEventGetLocation(e); p.x + "," + p.y');
  const [xStr, yStr] = result.split(",");
  return { x: Math.round(Number(xStr)), y: Math.round(Number(yStr)) };
}, mouseButton = async (button, action, count) => {
  const pos = await mouseLocation();
  const btn = button === "left" ? 0 : button === "right" ? 1 : 2;
  const downType = btn === 0 ? "kCGEventLeftMouseDown" : btn === 1 ? "kCGEventRightMouseDown" : "kCGEventOtherMouseDown";
  const upType = btn === 0 ? "kCGEventLeftMouseUp" : btn === 1 ? "kCGEventRightMouseUp" : "kCGEventOtherMouseUp";
  if (action === "click") {
    for (let i = 0;i < (count ?? 1); i++) {
      await jxa(buildMouseJxa(downType, pos.x, pos.y, btn, i + 1));
      await jxa(buildMouseJxa(upType, pos.x, pos.y, btn, i + 1));
    }
  } else if (action === "press") {
    await jxa(buildMouseJxa(downType, pos.x, pos.y, btn));
  } else {
    await jxa(buildMouseJxa(upType, pos.x, pos.y, btn));
  }
}, mouseScroll = async (amount, direction) => {
  const script = direction === "vertical" ? `ObjC.import("CoreGraphics"); var e = $.CGEventCreateScrollWheelEvent(null, 0, 1, ${amount}); $.CGEventPost($.kCGHIDEventTap, e);` : `ObjC.import("CoreGraphics"); var e = $.CGEventCreateScrollWheelEvent(null, 0, 2, 0, ${amount}); $.CGEventPost($.kCGHIDEventTap, e);`;
  await jxa(script);
}, typeText = async (text) => {
  const escaped = text.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
  await osascript(`tell application "System Events" to keystroke "${escaped}"`);
}, getFrontmostAppInfo = () => {
  try {
    const output = execFileSync("osascript", ["-e", `
      tell application "System Events"
        set frontApp to first application process whose frontmost is true
        set appName to name of frontApp
        set bundleId to bundle identifier of frontApp
        return bundleId & "|" & appName
      end tell
    `], { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }).trim();
    if (!output || !output.includes("|"))
      return null;
    const [bundleId, appName] = output.split("|", 2);
    return { bundleId, appName };
  } catch {
    return null;
  }
};
var init_darwin = __esm(() => {
  execFileAsync = promisify(execFile);
  KEY_MAP = {
    return: 36,
    enter: 36,
    tab: 48,
    space: 49,
    delete: 51,
    backspace: 51,
    escape: 53,
    esc: 53,
    left: 123,
    right: 124,
    down: 125,
    up: 126,
    f1: 122,
    f2: 120,
    f3: 99,
    f4: 118,
    f5: 96,
    f6: 97,
    f7: 98,
    f8: 100,
    f9: 101,
    f10: 109,
    f11: 103,
    f12: 111,
    home: 115,
    end: 119,
    pageup: 116,
    pagedown: 121
  };
  MODIFIER_MAP = {
    command: "command down",
    cmd: "command down",
    meta: "command down",
    super: "command down",
    shift: "shift down",
    option: "option down",
    alt: "option down",
    control: "control down",
    ctrl: "control down"
  };
});

// packages/@ant/computer-use-input/src/backends/win32.ts
var exports_win32 = {};
__export(exports_win32, {
  typeText: () => typeText2,
  moveMouse: () => moveMouse2,
  mouseScroll: () => mouseScroll2,
  mouseLocation: () => mouseLocation2,
  mouseButton: () => mouseButton2,
  keys: () => keys2,
  key: () => key2,
  getFrontmostAppInfo: () => getFrontmostAppInfo2
});
function ps(script) {
  const result = Bun.spawnSync({
    cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
var WIN32_TYPES = `
Add-Type -Language CSharp @'
using System;
using System.Runtime.InteropServices;
using System.Text;
using System.Diagnostics;

public class CuWin32 {
    // --- Cursor ---
    [DllImport("user32.dll")] public static extern bool SetCursorPos(int X, int Y);
    [DllImport("user32.dll")] public static extern bool GetCursorPos(out POINT p);
    [StructLayout(LayoutKind.Sequential)] public struct POINT { public int X; public int Y; }

    // --- SendInput ---
    [StructLayout(LayoutKind.Sequential)] public struct MOUSEINPUT {
        public int dx; public int dy; public int mouseData; public uint dwFlags; public uint time; public IntPtr dwExtraInfo;
    }
    [StructLayout(LayoutKind.Explicit)] public struct INPUT {
        [FieldOffset(0)] public uint type;
        [FieldOffset(4)] public MOUSEINPUT mi;
    }
    [StructLayout(LayoutKind.Sequential)] public struct KEYBDINPUT {
        public ushort wVk; public ushort wScan; public uint dwFlags; public uint time; public IntPtr dwExtraInfo;
    }
    [StructLayout(LayoutKind.Explicit)] public struct KINPUT {
        [FieldOffset(0)] public uint type;
        [FieldOffset(4)] public KEYBDINPUT ki;
    }
    [DllImport("user32.dll", SetLastError=true)] public static extern uint SendInput(uint n, INPUT[] i, int cb);
    [DllImport("user32.dll", SetLastError=true)] public static extern uint SendInput(uint n, KINPUT[] i, int cb);

    // --- Keyboard ---
    [DllImport("user32.dll")] public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
    [DllImport("user32.dll")] public static extern short VkKeyScan(char ch);

    // --- Window ---
    [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
    [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid);
    [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetWindowText(IntPtr hWnd, StringBuilder sb, int max);

    // Constants
    public const uint INPUT_MOUSE = 0, INPUT_KEYBOARD = 1;
    public const uint MOUSEEVENTF_LEFTDOWN = 0x0002, MOUSEEVENTF_LEFTUP = 0x0004;
    public const uint MOUSEEVENTF_RIGHTDOWN = 0x0008, MOUSEEVENTF_RIGHTUP = 0x0010;
    public const uint MOUSEEVENTF_MIDDLEDOWN = 0x0020, MOUSEEVENTF_MIDDLEUP = 0x0040;
    public const uint MOUSEEVENTF_WHEEL = 0x0800, MOUSEEVENTF_HWHEEL = 0x1000;
    public const uint KEYEVENTF_KEYUP = 0x0002;
}
'@
`, VK_MAP, MODIFIER_KEYS, moveMouse2 = async (x, y, _animated) => {
  ps(`${WIN32_TYPES}; [CuWin32]::SetCursorPos(${Math.round(x)}, ${Math.round(y)}) | Out-Null`);
}, mouseLocation2 = async () => {
  const out = ps(`${WIN32_TYPES}; $p = New-Object CuWin32+POINT; [CuWin32]::GetCursorPos([ref]$p) | Out-Null; "$($p.X),$($p.Y)"`);
  const [xStr, yStr] = out.split(",");
  return { x: Number(xStr), y: Number(yStr) };
}, mouseButton2 = async (button, action, count) => {
  const downFlag = button === "left" ? "MOUSEEVENTF_LEFTDOWN" : button === "right" ? "MOUSEEVENTF_RIGHTDOWN" : "MOUSEEVENTF_MIDDLEDOWN";
  const upFlag = button === "left" ? "MOUSEEVENTF_LEFTUP" : button === "right" ? "MOUSEEVENTF_RIGHTUP" : "MOUSEEVENTF_MIDDLEUP";
  if (action === "click") {
    const n = count ?? 1;
    let clicks = "";
    for (let i = 0;i < n; i++) {
      clicks += `$i.mi.dwFlags=[CuWin32]::${downFlag}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null; $i.mi.dwFlags=[CuWin32]::${upFlag}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null; `;
    }
    ps(`${WIN32_TYPES}; $i = New-Object CuWin32+INPUT; $i.type=[CuWin32]::INPUT_MOUSE; ${clicks}`);
  } else if (action === "press") {
    ps(`${WIN32_TYPES}; $i = New-Object CuWin32+INPUT; $i.type=[CuWin32]::INPUT_MOUSE; $i.mi.dwFlags=[CuWin32]::${downFlag}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`);
  } else {
    ps(`${WIN32_TYPES}; $i = New-Object CuWin32+INPUT; $i.type=[CuWin32]::INPUT_MOUSE; $i.mi.dwFlags=[CuWin32]::${upFlag}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`);
  }
}, mouseScroll2 = async (amount, direction) => {
  const flag = direction === "vertical" ? "MOUSEEVENTF_WHEEL" : "MOUSEEVENTF_HWHEEL";
  ps(`${WIN32_TYPES}; $i = New-Object CuWin32+INPUT; $i.type=[CuWin32]::INPUT_MOUSE; $i.mi.dwFlags=[CuWin32]::${flag}; $i.mi.mouseData=${amount * 120}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`);
}, key2 = async (keyName, action) => {
  const lower = keyName.toLowerCase();
  const vk = VK_MAP[lower];
  const flags = action === "release" ? "2" : "0";
  if (vk !== undefined) {
    ps(`${WIN32_TYPES}; [CuWin32]::keybd_event(${vk}, 0, ${flags}, [UIntPtr]::Zero)`);
  } else if (keyName.length === 1) {
    const charCode = keyName.charCodeAt(0);
    ps(`${WIN32_TYPES}; $vk = [CuWin32]::VkKeyScan([char]${charCode}) -band 0xFF; [CuWin32]::keybd_event([byte]$vk, 0, ${flags}, [UIntPtr]::Zero)`);
  }
}, keys2 = async (parts) => {
  const modifiers = [];
  let finalKey = null;
  for (const part of parts) {
    const lower2 = part.toLowerCase();
    if (MODIFIER_KEYS.has(lower2)) {
      const vk2 = VK_MAP[lower2];
      if (vk2 !== undefined)
        modifiers.push(vk2);
    } else {
      finalKey = part;
    }
  }
  if (!finalKey)
    return;
  let script = WIN32_TYPES + "; ";
  for (const vk2 of modifiers) {
    script += `[CuWin32]::keybd_event(${vk2}, 0, 0, [UIntPtr]::Zero); `;
  }
  const lower = finalKey.toLowerCase();
  const vk = VK_MAP[lower];
  if (vk !== undefined) {
    script += `[CuWin32]::keybd_event(${vk}, 0, 0, [UIntPtr]::Zero); [CuWin32]::keybd_event(${vk}, 0, 2, [UIntPtr]::Zero); `;
  } else if (finalKey.length === 1) {
    const charCode = finalKey.charCodeAt(0);
    script += `$vk = [CuWin32]::VkKeyScan([char]${charCode}) -band 0xFF; [CuWin32]::keybd_event([byte]$vk, 0, 0, [UIntPtr]::Zero); [CuWin32]::keybd_event([byte]$vk, 0, 2, [UIntPtr]::Zero); `;
  }
  for (const mk of modifiers.reverse()) {
    script += `[CuWin32]::keybd_event(${mk}, 0, 2, [UIntPtr]::Zero); `;
  }
  ps(script);
}, typeText2 = async (text) => {
  const escaped = text.replace(/'/g, "''");
  ps(`Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('${escaped}')`);
}, getFrontmostAppInfo2 = () => {
  try {
    const out = ps(`${WIN32_TYPES}
$hwnd = [CuWin32]::GetForegroundWindow()
$procId = [uint32]0
[CuWin32]::GetWindowThreadProcessId($hwnd, [ref]$procId) | Out-Null
$proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
"$($proc.MainModule.FileName)|$($proc.ProcessName)"`);
    if (!out || !out.includes("|"))
      return null;
    const [exePath, appName] = out.split("|", 2);
    return { bundleId: exePath, appName };
  } catch {
    return null;
  }
};
var init_win32 = __esm(() => {
  VK_MAP = {
    return: 13,
    enter: 13,
    tab: 9,
    space: 32,
    backspace: 8,
    delete: 46,
    escape: 27,
    esc: 27,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    home: 36,
    end: 35,
    pageup: 33,
    pagedown: 34,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    shift: 160,
    lshift: 160,
    rshift: 161,
    control: 162,
    ctrl: 162,
    lcontrol: 162,
    rcontrol: 163,
    alt: 164,
    option: 164,
    lalt: 164,
    ralt: 165,
    win: 91,
    meta: 91,
    command: 91,
    cmd: 91,
    super: 91,
    insert: 45,
    printscreen: 44,
    pause: 19,
    numlock: 144,
    capslock: 20,
    scrolllock: 145
  };
  MODIFIER_KEYS = new Set(["shift", "lshift", "rshift", "control", "ctrl", "lcontrol", "rcontrol", "alt", "option", "lalt", "ralt", "win", "meta", "command", "cmd", "super"]);
});

// packages/@ant/computer-use-input/src/backends/linux.ts
var exports_linux = {};
__export(exports_linux, {
  typeText: () => typeText3,
  moveMouse: () => moveMouse3,
  mouseScroll: () => mouseScroll3,
  mouseLocation: () => mouseLocation3,
  mouseButton: () => mouseButton3,
  keys: () => keys3,
  key: () => key3,
  getFrontmostAppInfo: () => getFrontmostAppInfo3
});
function run(cmd) {
  const result = Bun.spawnSync({
    cmd,
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
function mapKey(name) {
  return KEY_MAP2[name.toLowerCase()] ?? name;
}
function mouseButtonNum(button) {
  return button === "left" ? "1" : button === "right" ? "3" : "2";
}
var KEY_MAP2, MODIFIER_KEYS2, moveMouse3 = async (x, y, _animated) => {
  run(["xdotool", "mousemove", "--sync", String(Math.round(x)), String(Math.round(y))]);
}, mouseLocation3 = async () => {
  const out = run(["xdotool", "getmouselocation"]);
  const xMatch = out.match(/x:(\d+)/);
  const yMatch = out.match(/y:(\d+)/);
  return {
    x: xMatch ? Number(xMatch[1]) : 0,
    y: yMatch ? Number(yMatch[1]) : 0
  };
}, mouseButton3 = async (button, action, count) => {
  const btn = mouseButtonNum(button);
  if (action === "click") {
    const n = count ?? 1;
    run(["xdotool", "click", "--repeat", String(n), btn]);
  } else if (action === "press") {
    run(["xdotool", "mousedown", btn]);
  } else {
    run(["xdotool", "mouseup", btn]);
  }
}, mouseScroll3 = async (amount, direction) => {
  if (direction === "vertical") {
    const btn = amount >= 0 ? "5" : "4";
    const repeats = Math.abs(Math.round(amount));
    if (repeats > 0) {
      run(["xdotool", "click", "--repeat", String(repeats), btn]);
    }
  } else {
    const btn = amount >= 0 ? "7" : "6";
    const repeats = Math.abs(Math.round(amount));
    if (repeats > 0) {
      run(["xdotool", "click", "--repeat", String(repeats), btn]);
    }
  }
}, key3 = async (keyName, action) => {
  const mapped = mapKey(keyName);
  if (action === "press") {
    run(["xdotool", "keydown", mapped]);
  } else {
    run(["xdotool", "keyup", mapped]);
  }
}, keys3 = async (parts) => {
  const modifiers = [];
  let finalKey = null;
  for (const part of parts) {
    if (MODIFIER_KEYS2.has(part.toLowerCase())) {
      modifiers.push(mapKey(part));
    } else {
      finalKey = part;
    }
  }
  if (!finalKey)
    return;
  const combo = [...modifiers, mapKey(finalKey)].join("+");
  run(["xdotool", "key", combo]);
}, typeText3 = async (text) => {
  run(["xdotool", "type", "--delay", "12", text]);
}, getFrontmostAppInfo3 = () => {
  try {
    const windowId = run(["xdotool", "getactivewindow"]);
    if (!windowId)
      return null;
    const pidStr = run(["xdotool", "getwindowpid", windowId]);
    if (!pidStr)
      return null;
    const pid = pidStr.trim();
    let exePath = "";
    try {
      exePath = run(["readlink", "-f", `/proc/${pid}/exe`]);
    } catch {}
    let appName = "";
    try {
      appName = run(["cat", `/proc/${pid}/comm`]);
    } catch {}
    if (!exePath && !appName)
      return null;
    return { bundleId: exePath || `/proc/${pid}/exe`, appName: appName || "unknown" };
  } catch {
    return null;
  }
};
var init_linux = __esm(() => {
  KEY_MAP2 = {
    return: "Return",
    enter: "Return",
    tab: "Tab",
    space: "space",
    backspace: "BackSpace",
    delete: "Delete",
    escape: "Escape",
    esc: "Escape",
    left: "Left",
    up: "Up",
    right: "Right",
    down: "Down",
    home: "Home",
    end: "End",
    pageup: "Prior",
    pagedown: "Next",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    f6: "F6",
    f7: "F7",
    f8: "F8",
    f9: "F9",
    f10: "F10",
    f11: "F11",
    f12: "F12",
    shift: "shift",
    lshift: "shift",
    rshift: "shift",
    control: "ctrl",
    ctrl: "ctrl",
    lcontrol: "ctrl",
    rcontrol: "ctrl",
    alt: "alt",
    option: "alt",
    lalt: "alt",
    ralt: "alt",
    win: "super",
    meta: "super",
    command: "super",
    cmd: "super",
    super: "super",
    insert: "Insert",
    printscreen: "Print",
    pause: "Pause",
    numlock: "Num_Lock",
    capslock: "Caps_Lock",
    scrolllock: "Scroll_Lock"
  };
  MODIFIER_KEYS2 = new Set([
    "shift",
    "lshift",
    "rshift",
    "control",
    "ctrl",
    "lcontrol",
    "rcontrol",
    "alt",
    "option",
    "lalt",
    "ralt",
    "win",
    "meta",
    "command",
    "cmd",
    "super"
  ]);
});

// packages/@ant/computer-use-input/src/index.ts
var exports_src = {};
__export(exports_src, {
  typeText: () => typeText4,
  moveMouse: () => moveMouse4,
  mouseScroll: () => mouseScroll4,
  mouseLocation: () => mouseLocation4,
  mouseButton: () => mouseButton4,
  keys: () => keys4,
  key: () => key4,
  isSupported: () => isSupported,
  getFrontmostAppInfo: () => getFrontmostAppInfo4,
  ComputerUseInputAPI: () => ComputerUseInputAPI
});
function loadBackend() {
  try {
    if (process.platform === "darwin") {
      return init_darwin(), __toCommonJS(exports_darwin);
    } else if (process.platform === "win32") {
      return init_win32(), __toCommonJS(exports_win32);
    } else if (process.platform === "linux") {
      return init_linux(), __toCommonJS(exports_linux);
    }
  } catch {
    return null;
  }
  return null;
}

class ComputerUseInputAPI {
}
var backend, isSupported, moveMouse4, key4, keys4, mouseLocation4, mouseButton4, mouseScroll4, typeText4, getFrontmostAppInfo4;
var init_src2 = __esm(() => {
  backend = loadBackend();
  isSupported = backend !== null;
  moveMouse4 = backend?.moveMouse;
  key4 = backend?.key;
  keys4 = backend?.keys;
  mouseLocation4 = backend?.mouseLocation;
  mouseButton4 = backend?.mouseButton;
  mouseScroll4 = backend?.mouseScroll;
  typeText4 = backend?.typeText;
  getFrontmostAppInfo4 = backend?.getFrontmostAppInfo ?? (() => null);
});

// src/utils/computerUse/inputLoader.ts
function requireComputerUseInput() {
  if (cached)
    return cached;
  const input = (init_src2(), __toCommonJS(exports_src));
  if (!input.isSupported) {
    throw new Error("@ant/computer-use-input is not supported on this platform");
  }
  return cached = input;
}
var cached;
var init_inputLoader = () => {};

// src/utils/computerUse/win32/shared.ts
var exports_shared = {};
__export(exports_shared, {
  validateHwnd: () => validateHwnd,
  runPs: () => runPs,
  psAsync: () => psAsync,
  ps: () => ps2,
  getTmpDir: () => getTmpDir,
  VK_MAP: () => VK_MAP2,
  MODIFIER_KEYS: () => MODIFIER_KEYS3
});
function validateHwnd(hwnd) {
  if (!/^\d+$/.test(hwnd)) {
    throw new Error(`Invalid HWND: "${hwnd}" \u2014 must be numeric`);
  }
  return hwnd;
}
function ps2(script) {
  const result = Bun.spawnSync({
    cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
function runPs(script) {
  try {
    const result = Bun.spawnSync({
      cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
      stdout: "pipe",
      stderr: "pipe"
    });
    if (result.exitCode !== 0)
      return null;
    return new TextDecoder().decode(result.stdout).trim();
  } catch {
    return null;
  }
}
async function psAsync(script) {
  const proc = Bun.spawn(["powershell", "-NoProfile", "-NonInteractive", "-Command", script], { stdout: "pipe", stderr: "pipe" });
  const out = await new Response(proc.stdout).text();
  await proc.exited;
  return out.trim();
}
function getTmpDir() {
  return process.env.TEMP || process.env.TMP || "/tmp";
}
var VK_MAP2, MODIFIER_KEYS3;
var init_shared = __esm(() => {
  VK_MAP2 = {
    backspace: 8,
    tab: 9,
    enter: 13,
    return: 13,
    shift: 16,
    lshift: 160,
    rshift: 161,
    ctrl: 17,
    control: 17,
    lcontrol: 162,
    rcontrol: 163,
    alt: 18,
    option: 18,
    menu: 18,
    lalt: 164,
    ralt: 165,
    pause: 19,
    capslock: 20,
    escape: 27,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    win: 91,
    meta: 91,
    command: 91,
    cmd: 91,
    super: 91,
    numlock: 144,
    scrolllock: 145,
    printscreen: 44,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123
  };
  MODIFIER_KEYS3 = new Set([
    "shift",
    "lshift",
    "rshift",
    "control",
    "ctrl",
    "lcontrol",
    "rcontrol",
    "alt",
    "option",
    "lalt",
    "ralt",
    "win",
    "meta",
    "command",
    "cmd",
    "super"
  ]);
});

// src/utils/computerUse/platforms/darwin.ts
var exports_darwin2 = {};
__export(exports_darwin2, {
  platform: () => platform
});
var input, screenshot, display, apps, platform;
var init_darwin2 = __esm(() => {
  init_inputLoader();
  init_swiftLoader();
  input = {
    async moveMouse(x, y) {
      const api = requireComputerUseInput();
      await api.moveMouse(x, y, false);
    },
    async click(x, y, button) {
      const api = requireComputerUseInput();
      await api.moveMouse(x, y, false);
      await api.mouseButton(button, "click", 1);
    },
    async typeText(text) {
      const api = requireComputerUseInput();
      await api.typeText(text);
    },
    async key(name, action) {
      const api = requireComputerUseInput();
      await api.key(name, action);
    },
    async keys(combo) {
      const api = requireComputerUseInput();
      await api.keys(combo);
    },
    async scroll(amount, direction) {
      const api = requireComputerUseInput();
      await api.mouseScroll(amount, direction);
    },
    async mouseLocation() {
      const api = requireComputerUseInput();
      return api.mouseLocation();
    }
  };
  screenshot = {
    async captureScreen(displayId) {
      const swift = requireComputerUseSwift();
      return swift.screenshot.captureExcluding([], undefined, undefined, undefined, displayId);
    },
    async captureRegion(x, y, w, h) {
      const swift = requireComputerUseSwift();
      return swift.screenshot.captureRegion([], x, y, w, h);
    }
  };
  display = {
    listAll() {
      const swift = requireComputerUseSwift();
      return swift.display.listAll();
    },
    getSize(displayId) {
      const swift = requireComputerUseSwift();
      return swift.display.getSize(displayId);
    }
  };
  apps = {
    listRunning() {
      const swift = requireComputerUseSwift();
      const running = swift.apps.listRunning();
      return running.map((app) => ({
        id: app.bundleId ?? "",
        pid: 0,
        title: app.displayName ?? ""
      }));
    },
    async listInstalled() {
      const swift = requireComputerUseSwift();
      const installed = await swift.apps.listInstalled();
      return installed.map((app) => ({
        id: app.bundleId ?? "",
        displayName: app.displayName ?? "",
        path: app.path ?? ""
      }));
    },
    async open(name) {
      const swift = requireComputerUseSwift();
      await swift.apps.open(name);
    },
    getFrontmostApp() {
      const api = requireComputerUseInput();
      const info = api.getFrontmostAppInfo();
      if (!info)
        return null;
      return { id: info.bundleId, appName: info.appName };
    },
    findWindowByTitle(_title) {
      const all = this.listRunning();
      return all.find((w) => w.title.includes(_title)) ?? null;
    }
  };
  platform = { input, screenshot, display, apps };
});

// src/utils/computerUse/win32/comExcel.ts
var exports_comExcel = {};
__export(exports_comExcel, {
  writeRange: () => writeRange,
  writeCell: () => writeCell,
  setFormula: () => setFormula,
  saveExcel: () => saveExcel,
  readRange: () => readRange,
  readCell: () => readCell,
  openExcel: () => openExcel,
  createExcel: () => createExcel,
  closeExcel: () => closeExcel
});
function ps3(script) {
  const result = Bun.spawnSync({
    cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  const stderr = new TextDecoder().decode(result.stderr).trim();
  if (result.exitCode !== 0 && stderr) {
    throw new Error(`PowerShell error: ${stderr}`);
  }
  return new TextDecoder().decode(result.stdout).trim();
}
function escPath(p) {
  return p.replace(/'/g, "''");
}
function resolveSheet(varName, sheet) {
  if (typeof sheet === "number") {
    return `$${varName} = $wb.Sheets.Item(${sheet})`;
  }
  return `$${varName} = $wb.Sheets.Item('${sheet.replace(/'/g, "''")}')`;
}
function excelCleanup(hasWorkbook = true) {
  const parts = [];
  if (hasWorkbook)
    parts.push("if ($wb) { $wb.Close($false) }");
  parts.push("$excel.Quit()");
  parts.push("[System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel) | Out-Null");
  return parts.join(`
    `);
}
function openExcel(filePath) {
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    $result = @{ sheets = @(); sheetNames = @() }
    foreach ($sheet in $wb.Sheets) {
        $result.sheetNames += $sheet.Name
        $ur = $sheet.UsedRange
        $rows = $ur.Rows.Count
        $cols = $ur.Columns.Count
        $cells = @()
        $count = 0
        for ($r = 1; $r -le $rows -and $count -lt 1000; $r++) {
            for ($c = 1; $c -le $cols -and $count -lt 1000; $c++) {
                $cell = $sheet.Cells.Item($r, $c)
                $val = $cell.Value2
                if ($null -ne $val) {
                    $f = $null
                    if ($cell.HasFormula) { $f = $cell.Formula }
                    $entry = @{ row = $r; col = $c; value = $val }
                    if ($f) { $entry.formula = $f }
                    $cells += $entry
                    $count++
                }
            }
        }
        $result.sheets += @{
            name = $sheet.Name
            usedRange = @{ rows = $rows; cols = $cols }
            cells = $cells
        }
    }
    $result | ConvertTo-Json -Depth 5 -Compress
} finally {
    ${excelCleanup()}
}
`;
  const raw = ps3(script);
  if (!raw)
    throw new Error("No output from openExcel");
  const parsed = JSON.parse(raw);
  const sheets = Array.isArray(parsed.sheets) ? parsed.sheets : [parsed.sheets];
  const sheetNames = Array.isArray(parsed.sheetNames) ? parsed.sheetNames : [parsed.sheetNames];
  return {
    sheets: sheets.map((s) => ({
      name: s.name,
      usedRange: s.usedRange,
      cells: Array.isArray(s.cells) ? s.cells : s.cells ? [s.cells] : []
    })),
    sheetNames
  };
}
function readCell(filePath, sheet, row, col) {
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    ${resolveSheet("sheet", sheet)}
    $val = $sheet.Cells.Item(${row}, ${col}).Value2
    if ($null -eq $val) { Write-Output 'null' } else { Write-Output ($val | ConvertTo-Json -Compress) }
} finally {
    ${excelCleanup()}
}
`;
  const raw = ps3(script);
  if (raw === "null" || raw === "")
    return null;
  return JSON.parse(raw);
}
function readRange(filePath, sheet, startRow, startCol, endRow, endCol) {
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    ${resolveSheet("sheet", sheet)}
    $rows = @()
    for ($r = ${startRow}; $r -le ${endRow}; $r++) {
        $row = @()
        for ($c = ${startCol}; $c -le ${endCol}; $c++) {
            $val = $sheet.Cells.Item($r, $c).Value2
            $row += if ($null -eq $val) { '__NULL__' } else { $val }
        }
        $rows += ,@($row)
    }
    $rows | ConvertTo-Json -Depth 3 -Compress
} finally {
    ${excelCleanup()}
}
`;
  const raw = ps3(script);
  if (!raw)
    return [];
  const parsed = JSON.parse(raw);
  const rows = Array.isArray(parsed[0]) ? parsed : [parsed];
  return rows.map((row) => row.map((v) => v === "__NULL__" ? null : v));
}
function writeCell(filePath, sheet, row, col, value) {
  const jsonVal = JSON.stringify(value);
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    ${resolveSheet("sheet", sheet)}
    $sheet.Cells.Item(${row}, ${col}).Value2 = (ConvertFrom-Json '${jsonVal.replace(/'/g, "''")}')
    $wb.Save()
    Write-Output 'true'
} finally {
    ${excelCleanup()}
}
`;
  return ps3(script) === "true";
}
function writeRange(filePath, sheet, startRow, startCol, data) {
  const jsonData = JSON.stringify(data).replace(/'/g, "''");
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    ${resolveSheet("sheet", sheet)}
    $data = ConvertFrom-Json '${jsonData}'
    for ($r = 0; $r -lt $data.Count; $r++) {
        $row = $data[$r]
        for ($c = 0; $c -lt $row.Count; $c++) {
            $val = $row[$c]
            if ($null -ne $val) {
                if ($val -is [int] -or $val -is [long] -or $val -is [double] -or $val -is [decimal]) {
                    $sheet.Cells.Item(${startRow} + $r, ${startCol} + $c).Value2 = [double]$val
                } else {
                    $sheet.Cells.Item(${startRow} + $r, ${startCol} + $c).Value2 = [string]$val
                }
            }
        }
    }
    $wb.Save()
    Write-Output 'true'
} finally {
    ${excelCleanup()}
}
`;
  return ps3(script) === "true";
}
function setFormula(filePath, sheet, row, col, formula) {
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    ${resolveSheet("sheet", sheet)}
    $sheet.Cells.Item(${row}, ${col}).Formula = '${formula.replace(/'/g, "''")}'
    $wb.Save()
    Write-Output 'true'
} finally {
    ${excelCleanup()}
}
`;
  return ps3(script) === "true";
}
function saveExcel(filePath, savePath) {
  const saveCmd = savePath ? `$wb.SaveAs('${escPath(savePath)}')` : "$wb.Save()";
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Open('${escPath(filePath)}')
    ${saveCmd}
    Write-Output 'true'
} finally {
    ${excelCleanup()}
}
`;
  return ps3(script) === "true";
}
function createExcel(savePath) {
  const script = `
${EXCEL_INIT}
try {
    $wb = $excel.Workbooks.Add()
    $wb.SaveAs('${escPath(savePath)}')
    Write-Output 'true'
} finally {
    ${excelCleanup()}
}
`;
  return ps3(script) === "true";
}
function closeExcel(_filePath) {}
var EXCEL_INIT;
var init_comExcel = __esm(() => {
  EXCEL_INIT = `
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false
`.trim();
});

// src/utils/computerUse/win32/comWord.ts
var exports_comWord = {};
__export(exports_comWord, {
  saveWord: () => saveWord,
  saveAsPdf: () => saveAsPdf,
  readText: () => readText,
  openWord: () => openWord,
  insertText: () => insertText,
  insertTable: () => insertTable,
  findReplace: () => findReplace,
  createWord: () => createWord,
  closeWord: () => closeWord,
  appendText: () => appendText
});
function runPs2(script) {
  const result = Bun.spawnSync({
    cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
function parseJsonOutput(raw, fallback) {
  if (!raw)
    return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function psEscape(s) {
  return s.replace(/'/g, "''");
}
function wrapWordScript(body, openPath) {
  const openCmd = openPath ? `$doc = $word.Documents.Open('${psEscape(openPath)}')` : "$doc = $word.Documents.Add()";
  return `
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    ${openCmd}
    ${body}
} finally {
    if ($doc -ne $null) { $doc.Close($false); }
    if ($word -ne $null) { $word.Quit(); }
    if ($word -ne $null) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
`;
}
function wrapWordScriptWithSave(body, openPath) {
  return `
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $doc = $word.Documents.Open('${psEscape(openPath)}')
    ${body}
    $doc.Save()
    Write-Output '{"ok":true}'
} catch {
    Write-Output ('{"ok":false,"error":"' + ($_.Exception.Message -replace '"','\\"') + '"}')
} finally {
    if ($doc -ne $null) { $doc.Close($false); }
    if ($word -ne $null) { $word.Quit(); }
    if ($word -ne $null) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
`;
}
async function openWord(filePath) {
  const script = wrapWordScript(`
    # Paragraphs (limit 500)
    $paras = @()
    $paraCount = $doc.Paragraphs.Count
    $limit = [Math]::Min($paraCount, 500)
    for ($i = 1; $i -le $limit; $i++) {
        $p = $doc.Paragraphs.Item($i)
        $r = $p.Range
        $paras += @{
            text    = $r.Text -replace '\\r$',''
            bold    = [bool]($r.Font.Bold -eq -1)
            italic  = [bool]($r.Font.Italic -eq -1)
            fontSize = $r.Font.Size
        }
    }

    # Tables
    $tables = @()
    foreach ($table in $doc.Tables) {
        $rows = $table.Rows.Count
        $cols = $table.Columns.Count
        $data = @()
        for ($r = 1; $r -le $rows; $r++) {
            $row = @()
            for ($c = 1; $c -le $cols; $c++) {
                try {
                    $cellText = $table.Cell($r, $c).Range.Text
                    # Trim trailing \\r\\a that Word adds to cell text
                    $cellText = $cellText -replace '[\\r\\n\\a]+$',''
                    $row += $cellText
                } catch {
                    $row += ''
                }
            }
            $data += ,@($row)
        }
        $tables += @{ rows = $rows; cols = $cols; data = $data }
    }

    # Counts: wdStatisticWords=0, wdStatisticPages=2
    $wordCount = $doc.ComputeStatistics(0)
    $pageCount = $doc.ComputeStatistics(2)

    $result = @{
        text       = $doc.Content.Text
        paragraphs = $paras
        tables     = $tables
        wordCount  = $wordCount
        pageCount  = $pageCount
    }
    Write-Output (ConvertTo-Json $result -Depth 5 -Compress)
`, filePath);
  const raw = runPs2(script);
  return parseJsonOutput(raw, {
    text: "",
    paragraphs: [],
    tables: [],
    wordCount: 0,
    pageCount: 0
  });
}
async function readText(filePath) {
  const script = wrapWordScript(`Write-Output $doc.Content.Text`, filePath);
  return runPs2(script);
}
async function appendText(filePath, text, opts) {
  const fontSetup = opts ? [
    opts.bold !== undefined ? `$sel.Font.Bold = ${opts.bold ? "-1" : "0"}` : "",
    opts.italic !== undefined ? `$sel.Font.Italic = ${opts.italic ? "-1" : "0"}` : "",
    opts.fontSize !== undefined ? `$sel.Font.Size = ${opts.fontSize}` : "",
    opts.fontName ? `$sel.Font.Name = '${psEscape(opts.fontName)}'` : ""
  ].filter(Boolean).join(`
    `) : "";
  const body = `
    $sel = $word.Selection
    $sel.EndKey(6) | Out-Null
    ${fontSetup}
    $sel.TypeText('${psEscape(text)}')
`;
  const script = wrapWordScriptWithSave(body, filePath);
  const raw = runPs2(script);
  return parseJsonOutput(raw, { ok: false }).ok;
}
async function insertText(filePath, paraIndex, text) {
  const body = `
    $doc.Paragraphs.Item(${paraIndex}).Range.InsertBefore('${psEscape(text)}')
`;
  const script = wrapWordScriptWithSave(body, filePath);
  const raw = runPs2(script);
  return parseJsonOutput(raw, { ok: false }).ok;
}
async function findReplace(filePath, find, replace, replaceAll) {
  const replaceConst = replaceAll !== false ? 2 : 1;
  const body = `
    $content = $doc.Content
    $findObj = $content.Find
    $findObj.ClearFormatting()
    $findObj.Replacement.ClearFormatting()

    # Count replacements by iterating
    $count = 0
    $findObj.Text = '${psEscape(find)}'
    $findObj.Replacement.Text = '${psEscape(replace)}'
    $findObj.Forward = $true
    $findObj.Wrap = 0
    $findObj.Format = $false
    $findObj.MatchCase = $false
    $findObj.MatchWholeWord = $false
    $findObj.MatchWildcards = $false

    if (${replaceConst} -eq 2) {
        # Count occurrences first using a clone of content
        $range2 = $doc.Content.Duplicate
        while ($range2.Find.Execute('${psEscape(find)}')) { $count++ }
        # Now do the actual replace
        $findObj.Execute('${psEscape(find)}', $false, $false, $false, $false, $false, $true, 0, $false, '${psEscape(replace)}', 2)
    } else {
        $found = $findObj.Execute('${psEscape(find)}', $false, $false, $false, $false, $false, $true, 0, $false, '${psEscape(replace)}', 1)
        if ($found) { $count = 1 }
    }
`;
  const script = `
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $doc = $word.Documents.Open('${psEscape(filePath)}')
    ${body}
    $doc.Save()
    Write-Output ('{"count":' + $count + '}')
} catch {
    Write-Output '{"count":0}'
} finally {
    if ($doc -ne $null) { $doc.Close($false); }
    if ($word -ne $null) { $word.Quit(); }
    if ($word -ne $null) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
`;
  const raw = runPs2(script);
  return parseJsonOutput(raw, { count: 0 }).count;
}
async function insertTable(filePath, rows, cols, data) {
  const psData = data.map((row) => ",@(" + row.map((cell) => `'${psEscape(cell)}'`).join(",") + ")").join(`
    `);
  const body = `
    $sel = $word.Selection
    $sel.EndKey(6) | Out-Null
    $table = $doc.Tables.Add($sel.Range, ${rows}, ${cols})
    $data = @(${psData})
    for ($r = 0; $r -lt $data.Count; $r++) {
        for ($c = 0; $c -lt $data[$r].Count; $c++) {
            $table.Cell($r + 1, $c + 1).Range.Text = $data[$r][$c]
        }
    }
`;
  const script = wrapWordScriptWithSave(body, filePath);
  const raw = runPs2(script);
  return parseJsonOutput(raw, { ok: false }).ok;
}
async function saveWord(filePath, savePath) {
  if (!savePath || savePath === filePath) {
    const script2 = wrapWordScriptWithSave("", filePath);
    const raw2 = runPs2(script2);
    return parseJsonOutput(raw2, { ok: false }).ok;
  }
  const body = `$doc.SaveAs('${psEscape(savePath)}')`;
  const script = `
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $doc = $word.Documents.Open('${psEscape(filePath)}')
    ${body}
    Write-Output '{"ok":true}'
} catch {
    Write-Output ('{"ok":false,"error":"' + ($_.Exception.Message -replace '"','\\"') + '"}')
} finally {
    if ($doc -ne $null) { $doc.Close($false); }
    if ($word -ne $null) { $word.Quit(); }
    if ($word -ne $null) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
`;
  const raw = runPs2(script);
  return parseJsonOutput(raw, { ok: false }).ok;
}
async function saveAsPdf(filePath, pdfPath) {
  const body = `$doc.SaveAs2('${psEscape(pdfPath)}', 17)`;
  const script = `
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $doc = $word.Documents.Open('${psEscape(filePath)}')
    ${body}
    Write-Output '{"ok":true}'
} catch {
    Write-Output ('{"ok":false,"error":"' + ($_.Exception.Message -replace '"','\\"') + '"}')
} finally {
    if ($doc -ne $null) { $doc.Close($false); }
    if ($word -ne $null) { $word.Quit(); }
    if ($word -ne $null) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
`;
  const raw = runPs2(script);
  return parseJsonOutput(raw, { ok: false }).ok;
}
async function createWord(savePath) {
  const script = `
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
try {
    $doc = $word.Documents.Add()
    $doc.SaveAs('${psEscape(savePath)}')
    Write-Output '{"ok":true}'
} catch {
    Write-Output ('{"ok":false,"error":"' + ($_.Exception.Message -replace '"','\\"') + '"}')
} finally {
    if ($doc -ne $null) { $doc.Close($false); }
    if ($word -ne $null) { $word.Quit(); }
    if ($word -ne $null) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
`;
  const raw = runPs2(script);
  return parseJsonOutput(raw, { ok: false }).ok;
}
function closeWord(_filePath) {}
var init_comWord = () => {};

// src/utils/computerUse/win32/appDispatcher.ts
import { extname } from "path";
function detectAppType(nameOrPath) {
  const lower = nameOrPath.toLowerCase();
  const ext = extname(lower);
  if (ext) {
    if (EXCEL_EXTS.has(ext))
      return "excel";
    if (WORD_EXTS.has(ext))
      return "word";
    if (TEXT_EXTS.has(ext))
      return "text";
  }
  const baseName = lower.replace(/\.exe$/, "").split(/[/\\]/).pop() ?? "";
  if (baseName === "excel" || baseName.includes("excel"))
    return "excel";
  if (baseName === "winword" || baseName === "word" || baseName.includes("word"))
    return "word";
  if (baseName === "notepad" || baseName === "notepad++" || baseName === "code")
    return "text";
  if (BROWSER_NAMES.has(baseName))
    return "browser";
  return "generic";
}
async function openWithController(nameOrPath) {
  const type = detectAppType(nameOrPath);
  switch (type) {
    case "excel": {
      const { createExcel: createExcel2, openExcel: openExcel2 } = (init_comExcel(), __toCommonJS(exports_comExcel));
      const isExisting = nameOrPath.match(/\.(xlsx|xls|csv|xlsm|xlsb)$/i);
      if (isExisting) {
        try {
          openExcel2(nameOrPath);
          return { type: "excel", filePath: nameOrPath };
        } catch {
          return { type: "excel", filePath: nameOrPath };
        }
      }
      const tmpPath = `${process.env.TEMP || "/tmp"}\\cu_new_${Date.now()}.xlsx`;
      createExcel2(tmpPath);
      return { type: "excel", filePath: tmpPath };
    }
    case "word": {
      const { createWord: createWord2, openWord: openWord2 } = (init_comWord(), __toCommonJS(exports_comWord));
      const isExisting = nameOrPath.match(/\.(docx|doc|rtf)$/i);
      if (isExisting) {
        try {
          openWord2(nameOrPath);
          return { type: "word", filePath: nameOrPath };
        } catch {
          return { type: "word", filePath: nameOrPath };
        }
      }
      const tmpPath = `${process.env.TEMP || "/tmp"}\\cu_new_${Date.now()}.docx`;
      createWord2(tmpPath);
      return { type: "word", filePath: tmpPath };
    }
    default:
      return { type };
  }
}
var EXCEL_EXTS, WORD_EXTS, TEXT_EXTS, BROWSER_NAMES;
var init_appDispatcher = __esm(() => {
  EXCEL_EXTS = new Set([".xlsx", ".xls", ".csv", ".xlsm", ".xlsb"]);
  WORD_EXTS = new Set([".docx", ".doc", ".rtf"]);
  TEXT_EXTS = new Set([
    ".txt",
    ".log",
    ".md",
    ".json",
    ".xml",
    ".yaml",
    ".yml",
    ".ini",
    ".cfg",
    ".conf"
  ]);
  BROWSER_NAMES = new Set(["chrome", "msedge", "firefox", "brave", "opera"]);
});

// src/utils/computerUse/win32/windowBorder.ts
function markBound(hwnd) {
  hwnd = validateHwnd(hwnd);
  const hr = ps2(`Add-Type @'
using System;
using System.Runtime.InteropServices;
public class CuDwm {
    [DllImport("dwmapi.dll")]
    public static extern int DwmSetWindowAttribute(IntPtr hwnd, int attr, ref uint val, int size);
}
'@
$color = [uint32]0x0000C800
[CuDwm]::DwmSetWindowAttribute([IntPtr]::new([long]${hwnd}), 34, [ref]$color, 4)`);
  return hr === "0";
}
function unmarkBound(hwnd) {
  hwnd = validateHwnd(hwnd);
  const hr = ps2(`Add-Type @'
using System;
using System.Runtime.InteropServices;
public class CuDwm {
    [DllImport("dwmapi.dll")]
    public static extern int DwmSetWindowAttribute(IntPtr hwnd, int attr, ref uint val, int size);
}
'@
$color = [uint32]0xFFFFFFFF
[CuDwm]::DwmSetWindowAttribute([IntPtr]::new([long]${hwnd}), 34, [ref]$color, 4)`);
  return hr === "0";
}
function cleanupAllBorders() {}
var init_windowBorder = __esm(() => {
  init_shared();
});

// src/utils/computerUse/win32/virtualCursor.ts
var exports_virtualCursor = {};
__export(exports_virtualCursor, {
  showVirtualCursor: () => showVirtualCursor,
  moveVirtualCursor: () => moveVirtualCursor,
  isVirtualCursorActive: () => isVirtualCursorActive,
  hideVirtualCursor: () => hideVirtualCursor
});
import * as fs from "fs";
import * as path from "path";
function buildCursorScript(hwnd, stopFile) {
  const stopFileEscaped = stopFile.replace(/\\/g, "\\\\");
  return `
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
Add-Type @'
using System;
using System.Runtime.InteropServices;
using System.Drawing;
using System.Drawing.Drawing2D;

public class VCursor {
    [DllImport("user32.dll")]
    public static extern bool IsWindow(IntPtr hWnd);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern int GetWindowLong(IntPtr hWnd, int nIndex);

    [DllImport("user32.dll")]
    public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hAfter, int X, int Y, int cx, int cy, uint f);

    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr h, out RECT r);

    [StructLayout(LayoutKind.Sequential)]
    public struct RECT { public int L, T, R, B; }

    public const int GWL_EXSTYLE = -20;
    public const int WS_EX_LAYERED = 0x80000;
    public const int WS_EX_TRANSPARENT = 0x20;
    public const int WS_EX_TOOLWINDOW = 0x80;
    public const int WS_EX_NOACTIVATE = 0x08000000;
    public static readonly IntPtr HWND_TOPMOST = new IntPtr(-1);
    public const uint SWP_NOACTIVATE = 0x0010;
    public const uint SWP_SHOWWINDOW = 0x0040;
    public const uint SWP_NOSIZE = 0x0001;

    public static void MakeOverlay(IntPtr h) {
        int ex = GetWindowLong(h, GWL_EXSTYLE);
        ex |= WS_EX_LAYERED | WS_EX_TRANSPARENT | WS_EX_TOOLWINDOW | WS_EX_NOACTIVATE;
        SetWindowLong(h, GWL_EXSTYLE, ex);
    }
}
'@

$targetHwnd = [IntPtr]::new([long]${hwnd})
$stopFile = '${stopFileEscaped}'
$cursorSize = ${CURSOR_SIZE}

# Create cursor form with arrow shape
$cursor = New-Object System.Windows.Forms.Form
$cursor.FormBorderStyle = [System.Windows.Forms.FormBorderStyle]::None
$cursor.ShowInTaskbar = $false
$cursor.TopMost = $true
$cursor.StartPosition = [System.Windows.Forms.FormStartPosition]::Manual
$cursor.Size = New-Object System.Drawing.Size($cursorSize, $cursorSize)
$cursor.Location = New-Object System.Drawing.Point(-32000, -32000)
$cursor.Opacity = ${CURSOR_OPACITY}
$cursor.BackColor = [System.Drawing.Color]::Magenta
$cursor.TransparencyKey = [System.Drawing.Color]::Magenta

# Draw arrow cursor shape
$bmp = New-Object System.Drawing.Bitmap($cursorSize, $cursorSize)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
# Arrow polygon (pointing top-left)
$points = @(
    (New-Object System.Drawing.Point(1, 1)),
    (New-Object System.Drawing.Point(1, 16)),
    (New-Object System.Drawing.Point(5, 12)),
    (New-Object System.Drawing.Point(9, 18)),
    (New-Object System.Drawing.Point(12, 16)),
    (New-Object System.Drawing.Point(8, 10)),
    (New-Object System.Drawing.Point(13, 10)),
    (New-Object System.Drawing.Point(1, 1))
)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(${CURSOR_COLOR_R}, ${CURSOR_COLOR_G}, ${CURSOR_COLOR_B}))
$g.FillPolygon($brush, $points)
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 1)
$g.DrawPolygon($pen, $points)
$g.Dispose()
$cursor.BackgroundImage = $bmp

$cursor.Show()
[VCursor]::MakeOverlay($cursor.Handle)

# Position file: the TS side writes "x,y" or "x,y,click" to this file
$posFile = $stopFile + '.pos'

$script:lastCX = -32000
$script:lastCY = -32000
$script:clickFlash = 0

$timer = New-Object System.Windows.Forms.Timer
$timer.Interval = 16  # ~60fps

$timer.Add_Tick({
    if (-not [VCursor]::IsWindow($targetHwnd)) {
        $timer.Stop(); $cursor.Close()
        [System.Windows.Forms.Application]::ExitThread()
        return
    }
    # Check stop
    if (Test-Path $stopFile) {
        $timer.Stop(); $cursor.Close()
        try { Remove-Item $stopFile -ErrorAction SilentlyContinue } catch {}
        try { Remove-Item $posFile -ErrorAction SilentlyContinue } catch {}
        [System.Windows.Forms.Application]::ExitThread()
        return
    }
    # Read position updates
    if (Test-Path $posFile) {
        try {
            $data = Get-Content $posFile -Raw -ErrorAction SilentlyContinue
            if ($data) {
                $parts = $data.Trim().Split(',')
                if ($parts.Length -ge 2) {
                    $script:lastCX = [int]$parts[0]
                    $script:lastCY = [int]$parts[1]
                    if ($parts.Length -ge 3 -and $parts[2] -eq 'click') {
                        $script:clickFlash = 6  # flash for 6 frames (~100ms)
                    }
                }
                Remove-Item $posFile -ErrorAction SilentlyContinue
            }
        } catch {}
    }

    # Get window position to convert client coords to screen coords
    $wr = New-Object VCursor+RECT
    [VCursor]::GetWindowRect($targetHwnd, [ref]$wr) | Out-Null
    $screenX = $wr.L + $script:lastCX
    $screenY = $wr.T + $script:lastCY

    # Click flash: briefly change color
    if ($script:clickFlash -gt 0) {
        $cursor.Opacity = 1.0
        $script:clickFlash--
        if ($script:clickFlash -eq 0) {
            $cursor.Opacity = ${CURSOR_OPACITY}
        }
    }

    [VCursor]::SetWindowPos($cursor.Handle, [VCursor]::HWND_TOPMOST,
        $screenX, $screenY, 0, 0,
        [VCursor]::SWP_NOSIZE -bor [VCursor]::SWP_NOACTIVATE -bor [VCursor]::SWP_SHOWWINDOW) | Out-Null
    $cursor.Visible = $true
})

$timer.Start()
[System.Windows.Forms.Application]::Run()
`;
}
function showVirtualCursor(hwnd) {
  hwnd = validateHwnd(hwnd);
  hideVirtualCursor();
  try {
    const tmpDir = getTmpDir();
    const ts = Date.now();
    const stopFile = path.join(tmpDir, `cu_vcursor_stop_${ts}`);
    const scriptFile = path.join(tmpDir, `cu_vcursor_${ts}.ps1`);
    const script = buildCursorScript(hwnd, stopFile);
    fs.writeFileSync(scriptFile, script, "utf-8");
    cursorProc = Bun.spawn([
      "powershell",
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      scriptFile
    ], { stdout: "ignore", stderr: "ignore" });
    cursorStopFile = stopFile;
    cursorScriptFile = scriptFile;
    return true;
  } catch {
    return false;
  }
}
function moveVirtualCursor(x, y, isClick = false) {
  if (!cursorStopFile)
    return;
  const posFile = cursorStopFile + ".pos";
  try {
    const data = isClick ? `${Math.round(x)},${Math.round(y)},click` : `${Math.round(x)},${Math.round(y)}`;
    fs.writeFileSync(posFile, data, "utf-8");
  } catch {}
}
function hideVirtualCursor() {
  if (cursorStopFile) {
    try {
      fs.writeFileSync(cursorStopFile, "STOP", "utf-8");
    } catch {}
    setTimeout(() => {
      try {
        cursorProc?.kill();
      } catch {}
      try {
        if (cursorScriptFile)
          fs.unlinkSync(cursorScriptFile);
      } catch {}
      try {
        if (cursorStopFile)
          fs.unlinkSync(cursorStopFile);
      } catch {}
    }, 2000);
  }
  cursorProc = null;
  cursorStopFile = null;
  cursorScriptFile = null;
}
function isVirtualCursorActive() {
  return cursorProc !== null;
}
var CURSOR_SIZE = 20, CURSOR_COLOR_R = 255, CURSOR_COLOR_G = 50, CURSOR_COLOR_B = 50, CURSOR_OPACITY = 0.9, cursorProc = null, cursorStopFile = null, cursorScriptFile = null;
var init_virtualCursor = __esm(() => {
  init_shared();
});

// src/utils/computerUse/win32/inputIndicator.ts
var exports_inputIndicator = {};
__export(exports_inputIndicator, {
  updateIndicator: () => updateIndicator,
  showIndicator: () => showIndicator,
  indicateTyping: () => indicateTyping,
  indicateScroll: () => indicateScroll,
  indicateKey: () => indicateKey,
  indicateDone: () => indicateDone,
  indicateClick: () => indicateClick,
  hideIndicator: () => hideIndicator
});
import * as fs2 from "fs";
import * as path2 from "path";
function buildIndicatorScript(hwnd, sf) {
  const sfEsc = sf.replace(/\\/g, "\\\\");
  return `
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class Indicator {
    [DllImport("user32.dll")] public static extern bool IsWindow(IntPtr h);
    [DllImport("user32.dll",SetLastError=true)] public static extern int SetWindowLong(IntPtr h, int i, int v);
    [DllImport("user32.dll",SetLastError=true)] public static extern int GetWindowLong(IntPtr h, int i);
    [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr a, int x, int y, int w, int h2, uint f);
    [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
    [StructLayout(LayoutKind.Sequential)] public struct RECT { public int L,T,R,B; }
    public const int GWL_EXSTYLE = -20;
    public const int WS_EX_LAYERED = 0x80000;
    public const int WS_EX_TRANSPARENT = 0x20;
    public const int WS_EX_TOOLWINDOW = 0x80;
    public const int WS_EX_NOACTIVATE = 0x08000000;
    public static readonly IntPtr HWND_TOPMOST = new IntPtr(-1);
    public const uint SWP_NOACTIVATE = 0x0010;
    public const uint SWP_SHOWWINDOW = 0x0040;
    public static void MakeOverlay(IntPtr h) {
        int ex = GetWindowLong(h, GWL_EXSTYLE);
        ex |= WS_EX_LAYERED | WS_EX_TRANSPARENT | WS_EX_TOOLWINDOW | WS_EX_NOACTIVATE;
        SetWindowLong(h, GWL_EXSTYLE, ex);
    }
}
'@

$targetHwnd = [IntPtr]::new([long]${hwnd})
$stopFile = '${sfEsc}'
$msgFile = $stopFile + '.msg'

$form = New-Object System.Windows.Forms.Form
$form.FormBorderStyle = [System.Windows.Forms.FormBorderStyle]::None
$form.ShowInTaskbar = $false
$form.TopMost = $true
$form.StartPosition = [System.Windows.Forms.FormStartPosition]::Manual
$form.Size = New-Object System.Drawing.Size(${INDICATOR_WIDTH}, ${INDICATOR_HEIGHT})
$form.Location = New-Object System.Drawing.Point(-32000, -32000)
$form.BackColor = [System.Drawing.Color]::FromArgb(240, ${BG_COLOR})
$form.Opacity = 0.92

$label = New-Object System.Windows.Forms.Label
$label.Dock = [System.Windows.Forms.DockStyle]::Fill
$label.ForeColor = [System.Drawing.Color]::FromArgb(${TEXT_COLOR})
$label.Font = New-Object System.Drawing.Font("Segoe UI", 10, [System.Drawing.FontStyle]::Regular)
$label.TextAlign = [System.Drawing.ContentAlignment]::MiddleLeft
$label.Padding = New-Object System.Windows.Forms.Padding(8, 0, 8, 0)
$label.Text = ""
$form.Controls.Add($label)

$form.Show()
[Indicator]::MakeOverlay($form.Handle)

$script:lastMsg = ""
$script:lastMsgTime = [DateTime]::MinValue
$script:visible = $false

$timer = New-Object System.Windows.Forms.Timer
$timer.Interval = 50  # 20fps

$timer.Add_Tick({
    if (-not [Indicator]::IsWindow($targetHwnd)) {
        $timer.Stop(); $form.Close()
        [System.Windows.Forms.Application]::ExitThread()
        return
    }
    if (Test-Path $stopFile) {
        $timer.Stop(); $form.Close()
        try { Remove-Item $stopFile -ErrorAction SilentlyContinue } catch {}
        try { Remove-Item $msgFile -ErrorAction SilentlyContinue } catch {}
        [System.Windows.Forms.Application]::ExitThread()
        return
    }

    # Read new message
    if (Test-Path $msgFile) {
        try {
            $msg = Get-Content $msgFile -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
            if ($msg) {
                $script:lastMsg = $msg.Trim()
                $script:lastMsgTime = [DateTime]::Now
                Remove-Item $msgFile -ErrorAction SilentlyContinue
            }
        } catch {}
    }

    # Fade logic: hide after ${FADE_AFTER_MS}ms of no updates
    $elapsed = ([DateTime]::Now - $script:lastMsgTime).TotalMilliseconds
    if ($elapsed -gt ${FADE_AFTER_MS} -and $script:visible) {
        $form.Visible = $false
        $script:visible = $false
        return
    }
    if ($elapsed -le ${FADE_AFTER_MS} -and $script:lastMsg -ne "") {
        # Position at bottom-center of the bound window
        $wr = New-Object Indicator+RECT
        [Indicator]::GetWindowRect($targetHwnd, [ref]$wr) | Out-Null
        $ww = $wr.R - $wr.L
        $fx = $wr.L + [int](($ww - ${INDICATOR_WIDTH}) / 2)
        $fy = $wr.B - ${INDICATOR_HEIGHT} - 8
        $label.Text = $script:lastMsg
        [Indicator]::SetWindowPos($form.Handle, [Indicator]::HWND_TOPMOST,
            $fx, $fy, 0, 0,
            0x0001 -bor [Indicator]::SWP_NOACTIVATE -bor [Indicator]::SWP_SHOWWINDOW) | Out-Null
        $form.Visible = $true
        $script:visible = $true
        # Fade opacity near end
        if ($elapsed -gt ${FADE_AFTER_MS * 0.7}) {
            $form.Opacity = [Math]::Max(0.3, 0.92 * (1.0 - ($elapsed - ${FADE_AFTER_MS * 0.7}) / ${FADE_AFTER_MS * 0.3}))
        } else {
            $form.Opacity = 0.92
        }
    }
})

$timer.Start()
[System.Windows.Forms.Application]::Run()
`;
}
function showIndicator(hwnd) {
  hwnd = validateHwnd(hwnd);
  hideIndicator();
  try {
    const tmpDir = getTmpDir();
    const ts = Date.now();
    stopFile = path2.join(tmpDir, `cu_indicator_stop_${ts}`);
    scriptFile = path2.join(tmpDir, `cu_indicator_${ts}.ps1`);
    msgFile = stopFile + ".msg";
    fs2.writeFileSync(scriptFile, buildIndicatorScript(hwnd, stopFile), "utf-8");
    indicatorProc = Bun.spawn([
      "powershell",
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      scriptFile
    ], { stdout: "ignore", stderr: "ignore" });
    return true;
  } catch {
    return false;
  }
}
function updateIndicator(message) {
  if (!msgFile)
    return;
  try {
    fs2.writeFileSync(msgFile, message, "utf-8");
  } catch {}
}
function hideIndicator() {
  if (stopFile) {
    try {
      fs2.writeFileSync(stopFile, "STOP", "utf-8");
    } catch {}
    setTimeout(() => {
      try {
        indicatorProc?.kill();
      } catch {}
      try {
        if (scriptFile)
          fs2.unlinkSync(scriptFile);
      } catch {}
      try {
        if (stopFile)
          fs2.unlinkSync(stopFile);
      } catch {}
      try {
        if (msgFile)
          fs2.unlinkSync(msgFile);
      } catch {}
    }, 2000);
  }
  indicatorProc = null;
  stopFile = null;
  scriptFile = null;
  msgFile = null;
}
function indicateTyping(text) {
  const preview = text.length > 30 ? text.slice(0, 30) + "..." : text;
  updateIndicator(`\u2328 Typing "${preview}"`);
}
function indicateKey(combo) {
  updateIndicator(`\u2328 ${combo}`);
}
function indicateClick(x, y, button = "left") {
  updateIndicator(`\uD83D\uDDB1 ${button === "right" ? "Right-click" : "Click"} (${x}, ${y})`);
}
function indicateScroll(direction, amount) {
  const arrow = direction === "up" ? "\u2191" : direction === "down" ? "\u2193" : direction === "left" ? "\u2190" : "\u2192";
  updateIndicator(`\uD83D\uDCDC Scroll ${arrow} ${amount}`);
}
function indicateDone() {
  updateIndicator("\u2705 Done");
}
var INDICATOR_WIDTH = 350, INDICATOR_HEIGHT = 28, FADE_AFTER_MS = 2000, BG_COLOR = "30, 30, 30", TEXT_COLOR = "220, 220, 220", indicatorProc = null, stopFile = null, scriptFile = null, msgFile = null;
var init_inputIndicator = __esm(() => {
  init_shared();
});

// src/utils/computerUse/win32/bridgeClient.ts
var exports_bridgeClient = {};
__export(exports_bridgeClient, {
  stopBridge: () => stopBridge,
  ensureBridge: () => ensureBridge,
  callSync: () => callSync,
  call: () => call
});
import * as path3 from "path";
function ensureBridge() {
  if (bridgeProc)
    return true;
  try {
    const scriptPath = path3.join(__dirname, "bridge.py");
    bridgeProc = Bun.spawn(["python", "-u", scriptPath], {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "ignore",
      env: { ...process.env, PYTHONIOENCODING: "utf-8", PYTHONUNBUFFERED: "1" }
    });
    const reader = bridgeProc.stdout.getReader();
    const readLoop = async () => {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done)
            break;
          outputBuffer += new TextDecoder().decode(value);
          let newlineIdx;
          while ((newlineIdx = outputBuffer.indexOf(`
`)) !== -1) {
            const line = outputBuffer.slice(0, newlineIdx).trim();
            outputBuffer = outputBuffer.slice(newlineIdx + 1);
            if (!line)
              continue;
            try {
              const resp = JSON.parse(line);
              const pending = pendingRequests.get(resp.id);
              if (pending) {
                pendingRequests.delete(resp.id);
                if (resp.error) {
                  pending.reject(new Error(resp.error));
                } else {
                  pending.resolve(resp.result);
                }
              }
            } catch {}
          }
        }
      } catch {}
    };
    readLoop();
    return true;
  } catch {
    bridgeProc = null;
    return false;
  }
}
async function call(method, params = {}, timeoutMs = 1e4) {
  if (!ensureBridge()) {
    throw new Error("Python bridge not available");
  }
  const id = ++requestId;
  const req = { id, method, params };
  return new Promise((resolve, reject) => {
    pendingRequests.set(id, {
      resolve,
      reject
    });
    const timer = setTimeout(() => {
      pendingRequests.delete(id);
      reject(new Error(`Bridge call ${method} timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    const origResolve = resolve;
    const origReject = reject;
    pendingRequests.set(id, {
      resolve: (v) => {
        clearTimeout(timer);
        origResolve(v);
      },
      reject: (e) => {
        clearTimeout(timer);
        origReject(e);
      }
    });
    try {
      const stdin = bridgeProc.stdin;
      if (stdin) {
        const writable = stdin;
        writable.write(JSON.stringify(req) + `
`);
        if (typeof writable.flush === "function") {
          writable.flush();
        }
      }
    } catch (err) {
      clearTimeout(timer);
      pendingRequests.delete(id);
      reject(new Error(`Bridge write failed: ${err}`));
    }
  });
}
function callSync(method, params = {}, timeoutMs = 1e4) {
  try {
    const scriptPath = path3.join(__dirname, "bridge.py");
    const req = JSON.stringify({ id: 1, method, params });
    const result = Bun.spawnSync({
      cmd: ["python", "-u", scriptPath],
      stdin: Buffer.from(req + `
`),
      stdout: "pipe",
      stderr: "pipe",
      env: { ...process.env, PYTHONIOENCODING: "utf-8" },
      timeout: timeoutMs
    });
    const out = new TextDecoder().decode(result.stdout).trim();
    if (!out)
      return null;
    const resp = JSON.parse(out);
    if (resp.error)
      throw new Error(resp.error);
    return resp.result;
  } catch {
    return null;
  }
}
function stopBridge() {
  if (bridgeProc) {
    try {
      const stdin = bridgeProc.stdin;
      if (stdin) {
        const writable = stdin;
        if (typeof writable.end === "function") {
          writable.end();
        }
      }
      bridgeProc.kill();
    } catch {}
    bridgeProc = null;
  }
  pendingRequests.clear();
  outputBuffer = "";
}
var __dirname = "/opt/mimo-code/src/utils/computerUse/win32", bridgeProc = null, requestId = 0, pendingRequests, outputBuffer = "";
var init_bridgeClient = __esm(() => {
  pendingRequests = new Map;
});

// src/utils/computerUse/win32/windowMessage.ts
var exports_windowMessage = {};
__export(exports_windowMessage, {
  sendText: () => sendText,
  sendMouseWheel: () => sendMouseWheel,
  sendMouseUp: () => sendMouseUp,
  sendMouseMove: () => sendMouseMove,
  sendMouseDown: () => sendMouseDown,
  sendKeys: () => sendKeys,
  sendKey: () => sendKey,
  sendClick: () => sendClick,
  sendChar: () => sendChar,
  resolveInputHwnd: () => resolveInputHwnd,
  findEditChild: () => findEditChild,
  consoleText: () => consoleText,
  consoleKey: () => consoleKey,
  clearEditChildCache: () => clearEditChildCache
});
function clearEditChildCache(hwnd) {
  if (hwnd) {
    editChildCache.delete(hwnd);
  } else {
    editChildCache.clear();
  }
}
function resolveInputHwnd(hwnd) {
  hwnd = validateHwnd(hwnd);
  return findEditChild(hwnd) ?? hwnd;
}
function findEditChild(parentHwnd) {
  parentHwnd = validateHwnd(parentHwnd);
  if (editChildCache.has(parentHwnd)) {
    return editChildCache.get(parentHwnd);
  }
  const script = `${WINMSG_TYPE}
[WinMsg]::FindChildren([IntPtr]::new([long]${parentHwnd}))
[WinMsg]::childResults | ForEach-Object { $_ }
`;
  const raw = runPs(script);
  if (raw) {
    const children = raw.split(`
`).filter(Boolean).map((line) => {
      const trimmed = line.trim();
      const pipe = trimmed.indexOf("|");
      if (pipe === -1)
        return null;
      return {
        hwnd: trimmed.slice(0, pipe),
        className: trimmed.slice(pipe + 1)
      };
    }).filter((item) => item !== null);
    for (const editClass of EDIT_CLASSES) {
      const match = children.find((c) => c.className === editClass);
      if (match) {
        editChildCache.set(parentHwnd, match.hwnd);
        return match.hwnd;
      }
    }
  }
  const uiaScript = `
Add-Type -AssemblyName UIAutomationClient
Add-Type -AssemblyName UIAutomationTypes
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class UiaHelper {
    [DllImport("user32.dll")]
    public static extern bool IsWindow(IntPtr hWnd);
}
'@
try {
    $el = [System.Windows.Automation.AutomationElement]::FromHandle([IntPtr]::new([long]${parentHwnd}))
    if ($el -eq $null) { Write-Output 'NONE'; exit }

    # Search for Edit or Document control types (covers text editors)
    $editCond = [System.Windows.Automation.PropertyCondition]::new(
        [System.Windows.Automation.AutomationElement]::ControlTypeProperty,
        [System.Windows.Automation.ControlType]::Edit)
    $docCond = [System.Windows.Automation.PropertyCondition]::new(
        [System.Windows.Automation.AutomationElement]::ControlTypeProperty,
        [System.Windows.Automation.ControlType]::Document)
    $orCond = [System.Windows.Automation.OrCondition]::new($editCond, $docCond)

    $found = $el.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $orCond)
    if ($found -eq $null) { Write-Output 'NONE'; exit }

    $nativeHwnd = $found.Current.NativeWindowHandle
    if ($nativeHwnd -ne 0) {
        Write-Output $nativeHwnd
    } else {
        Write-Output 'NONE'
    }
} catch {
    Write-Output 'NONE'
}
`;
  const uiaResult = runPs(uiaScript);
  if (uiaResult && uiaResult !== "NONE") {
    const hwnd = uiaResult.trim();
    if (hwnd && hwnd !== "0") {
      editChildCache.set(parentHwnd, hwnd);
      return hwnd;
    }
  }
  editChildCache.set(parentHwnd, null);
  return null;
}
function sendChar(hwnd, char) {
  hwnd = validateHwnd(hwnd);
  const codePoint = char.codePointAt(0);
  if (codePoint === undefined)
    return false;
  const hwndExpr = `[IntPtr]::new([long]${hwnd})`;
  if (codePoint <= 65535) {
    const script2 = `${WINMSG_TYPE}
[WinMsg]::SendMessage(${hwndExpr}, [WinMsg]::WM_CHAR, [IntPtr]${codePoint}, [IntPtr]0)
`;
    return runPs(script2) !== null;
  }
  const hi = Math.floor((codePoint - 65536) / 1024) + 55296;
  const lo = (codePoint - 65536) % 1024 + 56320;
  const script = `${WINMSG_TYPE}
[WinMsg]::SendMessage(${hwndExpr}, [WinMsg]::WM_CHAR, [IntPtr]${hi}, [IntPtr]0)
[WinMsg]::SendMessage(${hwndExpr}, [WinMsg]::WM_CHAR, [IntPtr]${lo}, [IntPtr]0)
`;
  return runPs(script) !== null;
}
function buildWmCharLines(hwnd, text) {
  const hwndExpr = `[IntPtr]::new([long]${hwnd})`;
  const lines = [];
  for (const ch of text) {
    const cp = ch.codePointAt(0);
    if (cp <= 65535) {
      lines.push(`[WinMsg]::SendMessage(${hwndExpr}, [WinMsg]::WM_CHAR, [IntPtr]${cp}, [IntPtr]0)`);
    } else {
      const hi = Math.floor((cp - 65536) / 1024) + 55296;
      const lo = (cp - 65536) % 1024 + 56320;
      lines.push(`[WinMsg]::SendMessage(${hwndExpr}, [WinMsg]::WM_CHAR, [IntPtr]${hi}, [IntPtr]0)`);
      lines.push(`[WinMsg]::SendMessage(${hwndExpr}, [WinMsg]::WM_CHAR, [IntPtr]${lo}, [IntPtr]0)`);
    }
  }
  return lines;
}
function sendText(hwnd, text) {
  const targetHwnd = resolveInputHwnd(hwnd);
  const charLines = buildWmCharLines(targetHwnd, text);
  const script = `${WINMSG_TYPE}
${charLines.join(`
`)}
`;
  return runPs(script) !== null;
}
function sendKey(hwnd, vk, action) {
  hwnd = validateHwnd(hwnd);
  const msg = action === "down" ? "0x0100" : "0x0101";
  const lParamFn = action === "down" ? "KeyDownLParam" : "KeyUpLParam";
  const script = `${WINMSG_TYPE}
[WinMsg]::PostMessage([IntPtr]::new([long]${hwnd}), ${msg}, [IntPtr]${vk}, [WinMsg]::${lParamFn}(${vk}))
`;
  return runPs(script) !== null;
}
function sendKeys(hwnd, combo) {
  hwnd = resolveInputHwnd(hwnd);
  if (combo.length === 0)
    return false;
  const modifiers = [];
  let mainKey;
  for (const key5 of combo) {
    const lower = key5.toLowerCase();
    const vk = VK_MAP2[lower];
    if (vk !== undefined) {
      if (MODIFIER_KEYS3.has(lower)) {
        modifiers.push(vk);
      } else {
        mainKey = vk;
      }
    } else if (lower.length === 1) {
      mainKey = lower.toUpperCase().charCodeAt(0);
    } else {
      return false;
    }
  }
  if (mainKey === undefined)
    return false;
  const hwndExpr = `[IntPtr]::new([long]${hwnd})`;
  const lines = [];
  for (const mod of modifiers) {
    lines.push(`[WinMsg]::PostMessage(${hwndExpr}, [WinMsg]::WM_KEYDOWN, [IntPtr]${mod}, [WinMsg]::KeyDownLParam(${mod}))`);
  }
  lines.push(`[WinMsg]::PostMessage(${hwndExpr}, [WinMsg]::WM_KEYDOWN, [IntPtr]${mainKey}, [WinMsg]::KeyDownLParam(${mainKey}))`);
  lines.push(`[WinMsg]::PostMessage(${hwndExpr}, [WinMsg]::WM_KEYUP, [IntPtr]${mainKey}, [WinMsg]::KeyUpLParam(${mainKey}))`);
  for (const mod of [...modifiers].reverse()) {
    lines.push(`[WinMsg]::PostMessage(${hwndExpr}, [WinMsg]::WM_KEYUP, [IntPtr]${mod}, [WinMsg]::KeyUpLParam(${mod}))`);
  }
  const script = `${WINMSG_TYPE}
${lines.join(`
`)}
`;
  return runPs(script) !== null;
}
function consoleKey(hwnd, vk, ch = "\x00") {
  hwnd = validateHwnd(hwnd);
  const charCode = ch.charCodeAt(0);
  const script = `${CONSOLE_INPUT_TYPE}
[ConsoleInput]::SendKeyToConsole([IntPtr]::new([long]${hwnd}), ${vk}, [char]${charCode})
`;
  return runPs(script) !== null;
}
function consoleText(hwnd, text) {
  hwnd = validateHwnd(hwnd);
  const escaped = text.replace(/'/g, "''");
  const script = `${CONSOLE_INPUT_TYPE}
[ConsoleInput]::SendTextToConsole([IntPtr]::new([long]${hwnd}), '${escaped}')
`;
  return runPs(script) !== null;
}
function sendClick(hwnd, x, y, button) {
  hwnd = resolveInputHwnd(hwnd);
  const downMsg = button === "left" ? "0x0201" : "0x0204";
  const upMsg = button === "left" ? "0x0202" : "0x0205";
  const hwndExpr = `[IntPtr]::new([long]${hwnd})`;
  const script = `${WINMSG_TYPE}
$lp = [WinMsg]::MakeLParam(${x}, ${y})
[WinMsg]::SendMessage(${hwndExpr}, ${downMsg}, [IntPtr]0, $lp)
[WinMsg]::SendMessage(${hwndExpr}, ${upMsg}, [IntPtr]0, $lp)
`;
  return runPs(script) !== null;
}
function sendMouseDown(hwnd, x, y) {
  hwnd = resolveInputHwnd(hwnd);
  const script = `${WINMSG_TYPE}
$lp = [WinMsg]::MakeLParam(${x}, ${y})
[WinMsg]::SendMessage([IntPtr]::new([long]${hwnd}), [WinMsg]::WM_LBUTTONDOWN, [IntPtr]1, $lp)
`;
  return runPs(script) !== null;
}
function sendMouseUp(hwnd, x, y) {
  hwnd = resolveInputHwnd(hwnd);
  const script = `${WINMSG_TYPE}
$lp = [WinMsg]::MakeLParam(${x}, ${y})
[WinMsg]::SendMessage([IntPtr]::new([long]${hwnd}), [WinMsg]::WM_LBUTTONUP, [IntPtr]0, $lp)
`;
  return runPs(script) !== null;
}
function sendMouseMove(hwnd, x, y) {
  hwnd = resolveInputHwnd(hwnd);
  const script = `${WINMSG_TYPE}
$lp = [WinMsg]::MakeLParam(${x}, ${y})
[WinMsg]::SendMessage([IntPtr]::new([long]${hwnd}), 0x0200, [IntPtr]1, $lp)
`;
  return runPs(script) !== null;
}
function sendMouseWheel(hwnd, x, y, delta, horizontal = false) {
  hwnd = resolveInputHwnd(hwnd);
  const msg = horizontal ? "0x020E" : "0x020A";
  const wheelDelta = Math.round(delta) * 120;
  const script = `${WINMSG_TYPE}
# WM_MOUSEWHEEL/WM_MOUSEHWHEEL require screen coords in lParam
# and wheel delta in high word of wParam
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class WheelHelper {
    [DllImport("user32.dll")] public static extern bool ClientToScreen(IntPtr hWnd, ref POINT p);
    [StructLayout(LayoutKind.Sequential)] public struct POINT { public int X, Y; }

    [DllImport("user32.dll", CharSet=CharSet.Unicode, EntryPoint="SendMessageW")]
    public static extern IntPtr SendMsg(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam);

    public static void Scroll(IntPtr hWnd, int clientX, int clientY, int delta, uint msg) {
        POINT pt; pt.X = clientX; pt.Y = clientY;
        ClientToScreen(hWnd, ref pt);
        IntPtr wParam = (IntPtr)(delta << 16);
        IntPtr lParam = (IntPtr)((pt.Y << 16) | (pt.X & 0xFFFF));
        SendMsg(hWnd, msg, wParam, lParam);
    }
}
'@
[WheelHelper]::Scroll([IntPtr]::new([long]${hwnd}), ${x}, ${y}, ${wheelDelta}, ${msg})
`;
  return runPs(script) !== null;
}
var editChildCache, WINMSG_TYPE = `
Add-Type @'
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

public class WinMsg {
    public delegate bool EnumChildProc(IntPtr hWnd, IntPtr lParam);

    [DllImport("user32.dll")]
    public static extern bool EnumChildWindows(IntPtr parent, EnumChildProc proc, IntPtr lParam);

    [DllImport("user32.dll", CharSet=CharSet.Unicode)]
    public static extern int GetClassName(IntPtr h, StringBuilder sb, int max);

    // CRITICAL: CharSet.Unicode \u2192 resolves to SendMessageW
    // SendMessageW sends Unicode WM_CHAR (full UTF-16 codepoints including CJK)
    [DllImport("user32.dll", CharSet=CharSet.Unicode, EntryPoint="SendMessageW")]
    public static extern IntPtr SendMessage(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam);

    [DllImport("user32.dll", CharSet=CharSet.Unicode, EntryPoint="PostMessageW")]
    public static extern bool PostMessage(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam);

    [DllImport("user32.dll")]
    public static extern uint MapVirtualKeyW(uint uCode, uint uMapType);

    public static IntPtr MakeLParam(int lo, int hi) {
        return (IntPtr)((hi << 16) | (lo & 0xFFFF));
    }

    // Build lParam for WM_KEYDOWN / WM_KEYUP with correct scan code
    // lParam bits: 0-15 repeat count, 16-23 scan code, 24 extended, 30 prev state, 31 transition
    public static IntPtr KeyDownLParam(uint vk) {
        uint scanCode = MapVirtualKeyW(vk, 0); // MAPVK_VK_TO_VSC = 0
        return (IntPtr)(1 | (scanCode << 16));  // repeat=1, scanCode in bits 16-23
    }
    public static IntPtr KeyUpLParam(uint vk) {
        uint scanCode = MapVirtualKeyW(vk, 0);
        return (IntPtr)(1 | (scanCode << 16) | (1 << 30) | (1u << 31)); // prev=1, transition=1
    }

    public const uint WM_CHAR = 0x0102;
    public const uint WM_KEYDOWN = 0x0100;
    public const uint WM_KEYUP = 0x0101;
    public const uint WM_LBUTTONDOWN = 0x0201;
    public const uint WM_LBUTTONUP = 0x0202;
    public const uint WM_RBUTTONDOWN = 0x0204;
    public const uint WM_RBUTTONUP = 0x0205;

    public static List<string> childResults = new List<string>();

    public static void FindChildren(IntPtr parent) {
        childResults.Clear();
        EnumChildWindows(parent, delegate(IntPtr hWnd, IntPtr lParam) {
            StringBuilder sb = new StringBuilder(256);
            GetClassName(hWnd, sb, sb.Capacity);
            childResults.Add(hWnd.ToInt64() + "|" + sb.ToString());
            return true;
        }, IntPtr.Zero);
    }
}
'@
`, EDIT_CLASSES, CONSOLE_INPUT_TYPE = `
Add-Type @'
using System;
using System.Runtime.InteropServices;

public class ConsoleInput {
    [DllImport("kernel32.dll", SetLastError=true)]
    public static extern bool AttachConsole(uint dwProcessId);

    [DllImport("kernel32.dll", SetLastError=true)]
    public static extern bool FreeConsole();

    [DllImport("kernel32.dll", SetLastError=true)]
    public static extern IntPtr GetStdHandle(int nStdHandle);

    [DllImport("kernel32.dll", CharSet=CharSet.Unicode, SetLastError=true)]
    public static extern bool WriteConsoleInput(
        IntPtr hConsoleInput,
        INPUT_RECORD[] lpBuffer,
        uint nLength,
        out uint lpNumberOfEventsWritten);

    [DllImport("kernel32.dll")]
    public static extern uint MapVirtualKeyW(uint uCode, uint uMapType);

    [DllImport("user32.dll")]
    public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint lpdwProcessId);

    public const int STD_INPUT_HANDLE = -10;

    [StructLayout(LayoutKind.Explicit)]
    public struct INPUT_RECORD {
        [FieldOffset(0)] public ushort EventType;
        [FieldOffset(4)] public KEY_EVENT_RECORD KeyEvent;
    }

    [StructLayout(LayoutKind.Explicit, CharSet=CharSet.Unicode)]
    public struct KEY_EVENT_RECORD {
        [FieldOffset(0)]  public bool bKeyDown;
        [FieldOffset(4)]  public ushort wRepeatCount;
        [FieldOffset(6)]  public ushort wVirtualKeyCode;
        [FieldOffset(8)]  public ushort wVirtualScanCode;
        [FieldOffset(10)] public char UnicodeChar;
        [FieldOffset(12)] public uint dwControlKeyState;
    }

    public static bool SendKeyToConsole(IntPtr hwnd, ushort vk, char ch) {
        uint pid;
        GetWindowThreadProcessId(hwnd, out pid);
        if (pid == 0) return false;

        FreeConsole();
        if (!AttachConsole(pid)) return false;

        try {
            IntPtr hInput = GetStdHandle(STD_INPUT_HANDLE);
            if (hInput == IntPtr.Zero || hInput == (IntPtr)(-1)) return false;

            ushort scanCode = (ushort)MapVirtualKeyW(vk, 0);
            INPUT_RECORD[] records = new INPUT_RECORD[2];

            // Key down
            records[0].EventType = 1; // KEY_EVENT
            records[0].KeyEvent.bKeyDown = true;
            records[0].KeyEvent.wRepeatCount = 1;
            records[0].KeyEvent.wVirtualKeyCode = vk;
            records[0].KeyEvent.wVirtualScanCode = scanCode;
            records[0].KeyEvent.UnicodeChar = ch;
            records[0].KeyEvent.dwControlKeyState = 0;

            // Key up
            records[1].EventType = 1;
            records[1].KeyEvent.bKeyDown = false;
            records[1].KeyEvent.wRepeatCount = 1;
            records[1].KeyEvent.wVirtualKeyCode = vk;
            records[1].KeyEvent.wVirtualScanCode = scanCode;
            records[1].KeyEvent.UnicodeChar = ch;
            records[1].KeyEvent.dwControlKeyState = 0;

            uint written;
            return WriteConsoleInput(hInput, records, 2, out written);
        } finally {
            FreeConsole();
        }
    }

    public static bool SendTextToConsole(IntPtr hwnd, string text) {
        uint pid;
        GetWindowThreadProcessId(hwnd, out pid);
        if (pid == 0) return false;

        FreeConsole();
        if (!AttachConsole(pid)) return false;

        try {
            IntPtr hInput = GetStdHandle(STD_INPUT_HANDLE);
            if (hInput == IntPtr.Zero || hInput == (IntPtr)(-1)) return false;

            INPUT_RECORD[] records = new INPUT_RECORD[text.Length * 2];
            for (int i = 0; i < text.Length; i++) {
                char c = text[i];
                ushort vk = 0;
                ushort sc = 0;

                // Key down
                records[i * 2].EventType = 1;
                records[i * 2].KeyEvent.bKeyDown = true;
                records[i * 2].KeyEvent.wRepeatCount = 1;
                records[i * 2].KeyEvent.wVirtualKeyCode = vk;
                records[i * 2].KeyEvent.wVirtualScanCode = sc;
                records[i * 2].KeyEvent.UnicodeChar = c;
                records[i * 2].KeyEvent.dwControlKeyState = 0;

                // Key up
                records[i * 2 + 1].EventType = 1;
                records[i * 2 + 1].KeyEvent.bKeyDown = false;
                records[i * 2 + 1].KeyEvent.wRepeatCount = 1;
                records[i * 2 + 1].KeyEvent.wVirtualKeyCode = vk;
                records[i * 2 + 1].KeyEvent.wVirtualScanCode = sc;
                records[i * 2 + 1].KeyEvent.UnicodeChar = c;
                records[i * 2 + 1].KeyEvent.dwControlKeyState = 0;
            }

            uint written;
            return WriteConsoleInput(hInput, records, (uint)records.Length, out written);
        } finally {
            FreeConsole();
        }
    }
}
'@
`;
var init_windowMessage = __esm(() => {
  init_shared();
  editChildCache = new Map;
  EDIT_CLASSES = [
    "Windows.UI.Input.InputSite.WindowClass",
    "RichEditD2DPT",
    "RichEdit20W",
    "Edit",
    "Scintilla",
    "Chrome_RenderWidgetHostHWND",
    "TextBox",
    "RichTextBox",
    "Windows.UI.Core.CoreWindow"
  ];
});

// src/utils/computerUse/platforms/win32.ts
var exports_win322 = {};
__export(exports_win322, {
  unbindWindow: () => unbindWindow,
  platform: () => platform2,
  getBoundHwnd: () => getBoundHwnd,
  getBoundAppType: () => getBoundAppType,
  bindWindow: () => bindWindow,
  bindFile: () => bindFile
});
function getBridge() {
  if (!_bridge) {
    try {
      _bridge = (init_bridgeClient(), __toCommonJS(exports_bridgeClient));
    } catch {}
  }
  return _bridge;
}
function bridgeCallSync(method, params = {}) {
  try {
    const b = getBridge();
    if (!b)
      return null;
    return b.callSync(method, params);
  } catch {
    return null;
  }
}
function getBoundHwnd() {
  return boundHwnd;
}
function getBoundAppType() {
  return boundAppType;
}
function bindWindow(hwnd, pid) {
  hwnd = validateHwnd(hwnd);
  if (boundHwnd) {
    unmarkBound(boundHwnd);
    hideVirtualCursor();
    hideIndicator();
  }
  boundHwnd = hwnd;
  boundPid = pid ?? null;
  boundAppType = "generic";
  boundFilePath = null;
  const activateScript = `
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class CuActivate {
    [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
    [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
    [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
    [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
}
'@
$prev = [CuActivate]::GetForegroundWindow()
$target = [IntPtr]::new([long]${hwnd})
if ([CuActivate]::IsIconic($target)) { [CuActivate]::ShowWindow($target, 9) | Out-Null }
[CuActivate]::SetForegroundWindow($target) | Out-Null
Start-Sleep -Milliseconds 100
if ($prev -ne [IntPtr]::Zero -and $prev -ne $target) {
    [CuActivate]::SetForegroundWindow($prev) | Out-Null
}
`;
  ps2(activateScript);
  markBound(hwnd);
  showVirtualCursor(hwnd);
  showIndicator(hwnd);
}
function bindFile(filePath, appType) {
  boundHwnd = null;
  boundPid = null;
  boundAppType = appType;
  boundFilePath = filePath;
}
function unbindWindow() {
  if (boundHwnd)
    unmarkBound(boundHwnd);
  hideVirtualCursor();
  hideIndicator();
  getWm().clearEditChildCache();
  boundHwnd = null;
  boundPid = null;
  boundAppType = null;
  boundFilePath = null;
}
function getWm() {
  return _wm ??= (init_windowMessage(), __toCommonJS(exports_windowMessage));
}
function findExistingWindow(hint) {
  const windows = listWindows();
  const lower = hint.toLowerCase();
  for (const w of windows) {
    const titleLower = (w.title ?? "").toLowerCase();
    if (titleLower.includes(lower)) {
      return { hwnd: w.hwnd, pid: w.pid };
    }
  }
  return null;
}
function cleanupAll() {
  cleanupAllBorders();
  hideVirtualCursor();
  hideIndicator();
  try {
    getBridge()?.stopBridge();
  } catch {}
}
var _bridge, WIN32_TYPES2 = `
Add-Type -Language CSharp @'
using System;
using System.Runtime.InteropServices;
using System.Text;
using System.Diagnostics;

public class CuWin32 {
    // --- Cursor ---
    [DllImport("user32.dll")] public static extern bool SetCursorPos(int X, int Y);
    [DllImport("user32.dll")] public static extern bool GetCursorPos(out POINT p);
    [StructLayout(LayoutKind.Sequential)] public struct POINT { public int X; public int Y; }

    // --- SendInput ---
    [StructLayout(LayoutKind.Sequential)] public struct MOUSEINPUT {
        public int dx; public int dy; public int mouseData; public uint dwFlags; public uint time; public IntPtr dwExtraInfo;
    }
    [StructLayout(LayoutKind.Explicit)] public struct INPUT {
        [FieldOffset(0)] public uint type;
        [FieldOffset(4)] public MOUSEINPUT mi;
    }
    [StructLayout(LayoutKind.Sequential)] public struct KEYBDINPUT {
        public ushort wVk; public ushort wScan; public uint dwFlags; public uint time; public IntPtr dwExtraInfo;
    }
    [StructLayout(LayoutKind.Explicit)] public struct KINPUT {
        [FieldOffset(0)] public uint type;
        [FieldOffset(4)] public KEYBDINPUT ki;
    }
    [DllImport("user32.dll", SetLastError=true)] public static extern uint SendInput(uint n, INPUT[] i, int cb);
    [DllImport("user32.dll", SetLastError=true)] public static extern uint SendInput(uint n, KINPUT[] i, int cb);

    // --- Keyboard ---
    [DllImport("user32.dll")] public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
    [DllImport("user32.dll")] public static extern short VkKeyScan(char ch);

    // --- Window ---
    [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
    [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid);
    [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetWindowText(IntPtr hWnd, StringBuilder sb, int max);

    // Constants
    public const uint INPUT_MOUSE = 0, INPUT_KEYBOARD = 1;
    public const uint MOUSEEVENTF_LEFTDOWN = 0x0002, MOUSEEVENTF_LEFTUP = 0x0004;
    public const uint MOUSEEVENTF_RIGHTDOWN = 0x0008, MOUSEEVENTF_RIGHTUP = 0x0010;
    public const uint MOUSEEVENTF_MIDDLEDOWN = 0x0020, MOUSEEVENTF_MIDDLEUP = 0x0040;
    public const uint MOUSEEVENTF_WHEEL = 0x0800, MOUSEEVENTF_HWHEEL = 0x1000;
    public const uint KEYEVENTF_KEYUP = 0x0002;
}
'@
`, boundHwnd = null, boundPid = null, boundAppType = null, boundFilePath = null, _wm, input2, screenshot2, display2, apps2, WINDOW_MGMT_TYPES = `
Add-Type @'
using System;
using System.Runtime.InteropServices;

public class CuWinMgmt {
    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);

    [DllImport("user32.dll")]
    public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hAfter, int X, int Y, int cx, int cy, uint uFlags);

    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);

    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool BringWindowToTop(IntPtr hWnd);

    [DllImport("user32.dll", CharSet=CharSet.Unicode, EntryPoint="SendMessageW")]
    public static extern IntPtr SendMessage(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam);

    [DllImport("user32.dll")]
    public static extern bool IsIconic(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool IsZoomed(IntPtr hWnd);

    [StructLayout(LayoutKind.Sequential)]
    public struct RECT {
        public int Left; public int Top; public int Right; public int Bottom;
    }

    // ShowWindow constants
    public const int SW_MINIMIZE = 6;
    public const int SW_MAXIMIZE = 3;
    public const int SW_RESTORE = 9;
    public const int SW_SHOWNOACTIVATE = 4;
    public const int SW_SHOWMINNOACTIVE = 7;

    // SetWindowPos flags
    public const uint SWP_NOSIZE = 0x0001;
    public const uint SWP_NOMOVE = 0x0002;
    public const uint SWP_NOZORDER = 0x0004;
    public const uint SWP_NOACTIVATE = 0x0010;
    public const uint SWP_SHOWWINDOW = 0x0040;

    // WM_CLOSE
    public const uint WM_CLOSE = 0x0010;
    // WM_SYSCOMMAND
    public const uint WM_SYSCOMMAND = 0x0112;
    public const int SC_MINIMIZE = 0xF020;
    public const int SC_MAXIMIZE = 0xF030;
    public const int SC_RESTORE = 0xF120;
    public const int SC_CLOSE = 0xF060;
}
'@
`, windowManagement, platform2;
var init_win322 = __esm(() => {
  init_windowEnum();
  init_appDispatcher();
  init_windowBorder();
  init_virtualCursor();
  init_inputIndicator();
  init_shared();
  input2 = {
    async moveMouse(x, y) {
      if (boundHwnd) {
        moveVirtualCursor(Math.round(x), Math.round(y));
        return;
      }
      ps2(`${WIN32_TYPES2}; [CuWin32]::SetCursorPos(${Math.round(x)}, ${Math.round(y)}) | Out-Null`);
    },
    async click(x, y, button) {
      if (boundHwnd) {
        moveVirtualCursor(Math.round(x), Math.round(y), true);
        const editHwnd = getWm().findEditChild(boundHwnd);
        const targetHwnd = editHwnd ?? boundHwnd;
        const ok = getWm().sendClick(targetHwnd, Math.round(x), Math.round(y), button);
        if (!ok) {
          getWm().sendClick(boundHwnd, Math.round(x), Math.round(y), button);
        }
        return;
      }
      const downFlag = button === "left" ? "MOUSEEVENTF_LEFTDOWN" : button === "right" ? "MOUSEEVENTF_RIGHTDOWN" : "MOUSEEVENTF_MIDDLEDOWN";
      const upFlag = button === "left" ? "MOUSEEVENTF_LEFTUP" : button === "right" ? "MOUSEEVENTF_RIGHTUP" : "MOUSEEVENTF_MIDDLEUP";
      ps2(`${WIN32_TYPES2}; [CuWin32]::SetCursorPos(${Math.round(x)}, ${Math.round(y)}) | Out-Null; $i = New-Object CuWin32+INPUT; $i.type=[CuWin32]::INPUT_MOUSE; $i.mi.dwFlags=[CuWin32]::${downFlag}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null; $i.mi.dwFlags=[CuWin32]::${upFlag}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`);
    },
    async typeText(text) {
      if (boundAppType === "word" && boundFilePath) {
        const { appendText: appendText2 } = (init_comWord(), __toCommonJS(exports_comWord));
        appendText2(boundFilePath, text);
        return;
      }
      if (boundHwnd) {
        const ok = getWm().sendText(boundHwnd, text);
        if (!ok) {
          throw new Error(`typeText failed: SendMessage to HWND ${boundHwnd} returned false. ` + `The edit control may not have been found (findEditChild returned null).`);
        }
        return;
      }
      throw new Error("typeText requires a bound window or file. Call open() first.");
    },
    async key(name, action) {
      if (boundHwnd) {
        const lower = name.toLowerCase();
        const vk = VK_MAP2[lower] ?? (name.length === 1 ? name.charCodeAt(0) : 0);
        if (vk)
          getWm().sendKey(boundHwnd, vk, action === "release" ? "up" : "down");
        return;
      }
      throw new Error("key requires a bound window HWND. Call open() first.");
    },
    async keys(parts) {
      if (boundHwnd) {
        const ok = getWm().sendKeys(boundHwnd, parts);
        if (!ok) {
          throw new Error(`keys [${parts.join("+")}] failed on HWND ${boundHwnd}`);
        }
        return;
      }
      throw new Error("keys requires a bound window HWND. Call open() first.");
    },
    async scroll(amount, direction) {
      if (boundHwnd) {
        const msg = direction === "vertical" ? "0x0115" : "0x0114";
        const wParam = amount > 0 ? "1" : "0";
        const n = Math.abs(Math.round(amount));
        let script = `
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class WScroll {
    [DllImport("user32.dll", CharSet=CharSet.Unicode, EntryPoint="SendMessageW")]
    public static extern IntPtr SendMessage(IntPtr h, uint m, IntPtr w, IntPtr l);
}
'@
`;
        for (let i = 0;i < n; i++) {
          script += `[WScroll]::SendMessage([IntPtr]::new([long]${boundHwnd}), ${msg}, [IntPtr]${wParam}, [IntPtr]::Zero) | Out-Null; `;
        }
        ps2(script);
        return;
      }
      const flag = direction === "vertical" ? "MOUSEEVENTF_WHEEL" : "MOUSEEVENTF_HWHEEL";
      ps2(`${WIN32_TYPES2}; $i = New-Object CuWin32+INPUT; $i.type=[CuWin32]::INPUT_MOUSE; $i.mi.dwFlags=[CuWin32]::${flag}; $i.mi.mouseData=${amount * 120}; [CuWin32]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`);
    },
    async mouseLocation() {
      const out = ps2(`${WIN32_TYPES2}; $p = New-Object CuWin32+POINT; [CuWin32]::GetCursorPos([ref]$p) | Out-Null; "$($p.X),$($p.Y)"`);
      const [xStr, yStr] = out.split(",");
      return { x: Number(xStr), y: Number(yStr) };
    },
    async sendChar(hwnd, char) {
      getWm().sendChar(String(hwnd), char);
    },
    async sendKey(hwnd, vk, action) {
      getWm().sendKey(String(hwnd), vk, action);
    },
    async sendClick(hwnd, x, y, button) {
      getWm().sendClick(String(hwnd), x, y, button);
    },
    async sendText(hwnd, text) {
      getWm().sendText(String(hwnd), text);
    }
  };
  screenshot2 = {
    async captureScreen(displayId) {
      if (boundHwnd) {
        const result = await this.captureWindow?.(String(boundHwnd));
        if (result)
          return result;
      }
      const bridgeResult = bridgeCallSync("screenshot", {
        display_id: displayId ?? 0
      });
      if (bridgeResult && bridgeResult.base64) {
        return bridgeResult;
      }
      throw new Error("[computer-use] Screenshot failed: Python bridge returned no data. " + "Ensure python3 + mss + Pillow are installed (pip install mss Pillow).");
    },
    async captureRegion(x, y, w, h) {
      if (boundHwnd) {
        const result = await this.captureWindow?.(String(boundHwnd));
        if (result)
          return result;
      }
      return this.captureScreen();
    },
    async captureWindow(hwnd) {
      const bridgeResult = bridgeCallSync("screenshot_window", {
        hwnd: String(hwnd)
      });
      if (bridgeResult && bridgeResult.base64) {
        return bridgeResult;
      }
      throw new Error(`[computer-use] Window screenshot failed for HWND ${hwnd}: Python bridge returned no data.`);
    }
  };
  display2 = {
    listAll() {
      try {
        const raw = ps2(`
Add-Type -AssemblyName System.Windows.Forms
$result = @()
$idx = 0
foreach ($s in [System.Windows.Forms.Screen]::AllScreens) {
  $result += "$($s.Bounds.Width),$($s.Bounds.Height),$idx,$($s.Primary)"
  $idx++
}
$result -join "|"
`);
        return raw.split("|").filter(Boolean).map((entry) => {
          const [w, h, id] = entry.split(",");
          return {
            width: Number(w),
            height: Number(h),
            scaleFactor: 1,
            displayId: Number(id)
          };
        });
      } catch {
        return [{ width: 1920, height: 1080, scaleFactor: 1, displayId: 0 }];
      }
    },
    getSize(displayId) {
      const all = this.listAll();
      if (displayId !== undefined) {
        const found = all.find((d) => d.displayId === displayId);
        if (found)
          return found;
      }
      return all[0] ?? { width: 1920, height: 1080, scaleFactor: 1, displayId: 0 };
    }
  };
  apps2 = {
    listRunning() {
      const windows = listWindows();
      return windows.map((w) => ({
        id: String(w.hwnd),
        pid: w.pid,
        title: w.title
      }));
    },
    async listInstalled() {
      try {
        const raw = await psAsync(`
$apps = @()

# Traditional Win32 apps from registry
$paths = @(
  'HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*',
  'HKLM:\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*',
  'HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*'
)
foreach ($p in $paths) {
  Get-ItemProperty $p -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName } | ForEach-Object {
    $apps += "$($_.DisplayName)|$($_.InstallLocation)|$($_.PSChildName)"
  }
}

# UWP/MSIX apps (Windows 10/11 Store apps)
Get-AppxPackage -ErrorAction SilentlyContinue | Where-Object { $_.IsFramework -eq $false -and $_.SignatureKind -eq 'Store' } | ForEach-Object {
  $cleanName = $_.Name -replace '^Microsoft\\.Windows', '' -replace '^Microsoft\\.', ''
  $apps += "$cleanName|$($_.InstallLocation)|$($_.PackageFamilyName)"
}

$apps | Select-Object -Unique | Select-Object -First 300
`);
        return raw.split(`
`).filter(Boolean).map((line) => {
          const [name, path4, id] = line.trim().split("|", 3);
          return {
            id: (id ?? name ?? "").trim(),
            displayName: (name ?? "").trim(),
            path: (path4 ?? "").trim()
          };
        });
      } catch {
        return [];
      }
    },
    async open(name) {
      const appType = detectAppType(name);
      if (appType === "excel" || appType === "word") {
        const result2 = await openWithController(name);
        if (result2.filePath) {
          bindFile(result2.filePath, result2.type);
        }
        return;
      }
      let launchName = name;
      if (name.includes("_") && name.includes(".")) {
        const parts2 = name.split("_")[0]?.split(".") ?? [];
        const appPart = parts2[parts2.length - 1] ?? name;
        launchName = appPart.replace(/^Windows/, "") || appPart;
      }
      const existingHwnd = findExistingWindow(launchName);
      if (existingHwnd) {
        bindWindow(existingHwnd.hwnd, existingHwnd.pid);
        return;
      }
      const escaped = launchName.replace(/'/g, "''");
      const result = await psAsync(`
${WIN32_TYPES2}
Add-Type @'
using System;
using System.Runtime.InteropServices;
using System.Text;
public class CuLaunch {
    public delegate bool EnumProc(IntPtr h, IntPtr lp);
    [DllImport("user32.dll")] public static extern bool EnumWindows(EnumProc cb, IntPtr lp);
    [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr h);
    [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
    [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetWindowText(IntPtr h, StringBuilder sb, int n);
    [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
    public const int SW_SHOWMINNOACTIVE = 7;
    // Get all visible window HWNDs as array
    public static long[] GetAllVisibleHwnds() {
        var list = new System.Collections.Generic.List<long>();
        EnumWindows((h, _) => {
            if (IsWindowVisible(h)) list.Add(h.ToInt64());
            return true;
        }, IntPtr.Zero);
        return list.ToArray();
    }
    // Get PID for a single HWND
    public static uint GetPidForHwnd(long hwnd) {
        uint pid; GetWindowThreadProcessId((IntPtr)hwnd, out pid);
        return pid;
    }
    // Get title for a single HWND
    public static string GetTitle(long hwnd) {
        var sb = new StringBuilder(256);
        GetWindowText((IntPtr)hwnd, sb, 256);
        return sb.ToString();
    }
}
'@
# Launch strategy: all exe-based, no GUI dialogs.
# 1) exact path  2) exe in PATH  3) registry install dir  4) raw name
$target = '${escaped}'
$proc = $null

# 1. Exact file path
if (Test-Path $target) {
    $proc = Start-Process $target -PassThru -ErrorAction SilentlyContinue
}

# 2. exe name in PATH (notepad.exe, code.exe, chrome.exe, etc.)
if (-not $proc) {
    # Try with .exe suffix if not already
    $tryExe = if ($target -notmatch '[.]exe$') { "$target.exe" } else { $target }
    $found = Get-Command $tryExe -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $found) { $found = Get-Command $target -ErrorAction SilentlyContinue | Select-Object -First 1 }
    if ($found) { $proc = Start-Process $found.Source -PassThru -ErrorAction SilentlyContinue }
}

# 3. Search registry for install location by display name \u2192 find .exe
if (-not $proc) {
    $regPaths = @('HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*','HKLM:\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*','HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*')
    foreach ($p in $regPaths) {
        $app = Get-ItemProperty $p -ErrorAction SilentlyContinue | Where-Object {
            $_.DisplayName -and $_.DisplayName -match [regex]::Escape($target)
        } | Select-Object -First 1
        if ($app) {
            # Try DisplayIcon (often the exe path), then InstallLocation
            $exePath = $null
            if ($app.DisplayIcon -and $app.DisplayIcon -match '[.]exe') {
                $exePath = ($app.DisplayIcon -split ',')[0].Trim('"')
            }
            if (-not $exePath -and $app.InstallLocation) {
                $exeFile = Get-ChildItem $app.InstallLocation -Filter '*.exe' -ErrorAction SilentlyContinue | Select-Object -First 1
                if ($exeFile) { $exePath = $exeFile.FullName }
            }
            if ($exePath -and (Test-Path $exePath)) {
                $proc = Start-Process $exePath -PassThru -ErrorAction SilentlyContinue
                break
            }
        }
    }
}

# 4. Last resort: direct Start-Process (Windows may resolve it)
if (-not $proc) { $proc = Start-Process -FilePath $target -PassThru -ErrorAction SilentlyContinue }

if (-not $proc) { Write-Host "LAUNCH_FAILED"; exit }

# Snapshot ALL visible window HWNDs before the new window appears
$beforeHwnds = [CuLaunch]::GetAllVisibleHwnds()

# Wait for a NEW window from our process PID
$hwnd = 0
for ($i = 0; $i -lt 50; $i++) {
    Start-Sleep -Milliseconds 200
    $afterHwnds = [CuLaunch]::GetAllVisibleHwnds()
    # Find new windows (in after but not in before)
    foreach ($h in $afterHwnds) {
        if ($beforeHwnds -contains $h) { continue }
        # New window found \u2014 check PID
        $wPid = [CuLaunch]::GetPidForHwnd($h)
        if ($wPid -eq [uint32]$proc.Id) {
            $hwnd = $h; break  # exact PID match
        }
    }
    if ($hwnd -ne 0) { break }
    # PID didn't match (process redirect) \u2014 accept new window matching title hint
    if ($i -gt 10) {
        $hint = '${escaped}'.Split('\\')[-1].Replace('.exe','')
        foreach ($h in $afterHwnds) {
            if ($beforeHwnds -contains $h) { continue }
            $title = [CuLaunch]::GetTitle($h)
            if ($title -and $title.IndexOf($hint, [StringComparison]::OrdinalIgnoreCase) -ge 0) {
                $hwnd = $h; break
            }
        }
        if ($hwnd -ne 0) { break }
    }
}
if ($hwnd -eq 0) { Write-Host "HWND_NOT_FOUND|$($proc.Id)"; exit }
# Move offscreen instead of minimizing \u2014 keeps window restored so
# PrintWindow and SendMessage work without needing restore/re-minimize.
# User cannot see the window at -32000,-32000.
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class CuPos {
    [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr a, int x, int y, int w, int h2, uint f);
    public const uint SWP_NOSIZE = 0x0001;
    public const uint SWP_NOZORDER = 0x0004;
    public const uint SWP_NOACTIVATE = 0x0010;
}
'@
[CuPos]::SetWindowPos([IntPtr]::new([long]$hwnd), [IntPtr]::Zero, -32000, -32000, 0, 0, [CuPos]::SWP_NOSIZE -bor [CuPos]::SWP_NOZORDER -bor [CuPos]::SWP_NOACTIVATE) | Out-Null
Write-Host "$hwnd|$($proc.Id)"
`);
      if (!result) {
        throw new Error(`open(): failed to launch '${name}' \u2014 no output from launcher script`);
      }
      if (result.startsWith("LAUNCH_FAILED")) {
        throw new Error(`open(): failed to launch '${name}' \u2014 process did not start (${result})`);
      }
      if (result.startsWith("HWND_NOT_FOUND")) {
        throw new Error(`open(): launched '${name}' but could not find its window HWND (${result})`);
      }
      const parts = result.trim().split("|");
      const hwnd = parts[0].trim();
      const pid = Number(parts[1]);
      if (hwnd && hwnd !== "0") {
        bindWindow(hwnd, pid);
      }
    },
    getFrontmostApp() {
      try {
        const out = ps2(`${WIN32_TYPES2}
$hwnd = [CuWin32]::GetForegroundWindow()
$procId = [uint32]0
[CuWin32]::GetWindowThreadProcessId($hwnd, [ref]$procId) | Out-Null
$proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
"$($proc.MainModule.FileName)|$($proc.ProcessName)"`);
        if (!out || !out.includes("|"))
          return null;
        const [exePath, appName] = out.split("|", 2);
        return { id: exePath, appName };
      } catch {
        return null;
      }
    },
    findWindowByTitle(title) {
      const windows = listWindows();
      const found = windows.find((w) => w.title.includes(title));
      if (!found)
        return null;
      return { id: String(found.hwnd), pid: found.pid, title: found.title };
    }
  };
  windowManagement = {
    manageWindow(action, opts) {
      if (!boundHwnd)
        return false;
      const hwnd = boundHwnd;
      switch (action) {
        case "minimize": {
          const r = ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::ShowWindow([IntPtr]::new([long]${hwnd}), [CuWinMgmt]::SW_SHOWMINNOACTIVE)`);
          return r !== "";
        }
        case "maximize": {
          const r = ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::ShowWindow([IntPtr]::new([long]${hwnd}), [CuWinMgmt]::SW_MAXIMIZE)`);
          return r !== "";
        }
        case "restore": {
          const r = ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::ShowWindow([IntPtr]::new([long]${hwnd}), [CuWinMgmt]::SW_RESTORE)`);
          return r !== "";
        }
        case "close": {
          unmarkBound(hwnd);
          ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::SendMessage([IntPtr]::new([long]${hwnd}), [CuWinMgmt]::WM_CLOSE, [IntPtr]::Zero, [IntPtr]::Zero)`);
          unbindWindow();
          return true;
        }
        case "focus": {
          ps2(`${WINDOW_MGMT_TYPES}
$h = [IntPtr]::new([long]${hwnd})
if ([CuWinMgmt]::IsIconic($h)) {
    [CuWinMgmt]::ShowWindow($h, [CuWinMgmt]::SW_RESTORE) | Out-Null
}
[CuWinMgmt]::SetForegroundWindow($h) | Out-Null
[CuWinMgmt]::BringWindowToTop($h) | Out-Null
`);
          return true;
        }
        case "move_offscreen": {
          ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::SetWindowPos([IntPtr]::new([long]${hwnd}), [IntPtr]::Zero, -32000, -32000, 0, 0, [CuWinMgmt]::SWP_NOSIZE -bor [CuWinMgmt]::SWP_NOZORDER -bor [CuWinMgmt]::SWP_NOACTIVATE)`);
          return true;
        }
        case "move_resize": {
          if (opts?.x !== undefined && opts?.y !== undefined) {
            this.moveResize(opts.x, opts.y, opts.width, opts.height);
          }
          return true;
        }
        case "get_rect": {
          return true;
        }
        default:
          return false;
      }
    },
    moveResize(x, y, width, height) {
      if (!boundHwnd)
        return false;
      const hwnd = boundHwnd;
      if (width !== undefined && height !== undefined) {
        ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::SetWindowPos([IntPtr]::new([long]${hwnd}), [IntPtr]::Zero, ${x}, ${y}, ${width}, ${height}, [CuWinMgmt]::SWP_NOZORDER -bor [CuWinMgmt]::SWP_NOACTIVATE)`);
      } else {
        ps2(`${WINDOW_MGMT_TYPES}; [CuWinMgmt]::SetWindowPos([IntPtr]::new([long]${hwnd}), [IntPtr]::Zero, ${x}, ${y}, 0, 0, [CuWinMgmt]::SWP_NOSIZE -bor [CuWinMgmt]::SWP_NOZORDER -bor [CuWinMgmt]::SWP_NOACTIVATE)`);
      }
      return true;
    },
    getWindowRect() {
      if (!boundHwnd)
        return null;
      const out = ps2(`${WINDOW_MGMT_TYPES}
$rect = New-Object CuWinMgmt+RECT
if ([CuWinMgmt]::GetWindowRect([IntPtr]::new([long]${boundHwnd}), [ref]$rect)) {
    "$($rect.Left),$($rect.Top),$($rect.Right),$($rect.Bottom)"
} else { "FAIL" }
`);
      if (!out || out === "FAIL")
        return null;
      const [l, t, r, b] = out.split(",").map(Number);
      return { x: l, y: t, width: r - l, height: b - t };
    }
  };
  process.on("exit", cleanupAll);
  process.on("SIGINT", () => {
    cleanupAll();
    process.exit();
  });
  process.on("SIGTERM", () => {
    cleanupAll();
    process.exit();
  });
  platform2 = {
    input: input2,
    screenshot: screenshot2,
    display: display2,
    apps: apps2,
    windowManagement
  };
});

// src/utils/computerUse/platforms/linux.ts
var exports_linux2 = {};
__export(exports_linux2, {
  platform: () => platform3
});
function run2(cmd) {
  const result = Bun.spawnSync({ cmd, stdout: "pipe", stderr: "pipe" });
  return new TextDecoder().decode(result.stdout).trim();
}
async function runAsync(cmd) {
  const proc = Bun.spawn(cmd, { stdout: "pipe", stderr: "pipe" });
  const out = await new Response(proc.stdout).text();
  await proc.exited;
  return out.trim();
}
function commandExists(name) {
  const result = Bun.spawnSync({ cmd: ["which", name], stdout: "pipe", stderr: "pipe" });
  return result.exitCode === 0;
}
function mapKey2(name) {
  return KEY_MAP3[name.toLowerCase()] ?? name;
}
function mouseButtonNum2(button) {
  return button === "left" ? "1" : button === "right" ? "3" : "2";
}
async function pngToJpegBase64(pngPath, width, height) {
  if (commandExists("convert")) {
    await runAsync(["convert", pngPath, "-quality", "75", SCREENSHOT_JPG]);
    const file2 = Bun.file(SCREENSHOT_JPG);
    const buffer2 = await file2.arrayBuffer();
    return { base64: Buffer.from(buffer2).toString("base64"), width, height };
  }
  if (commandExists("ffmpeg")) {
    await runAsync(["ffmpeg", "-y", "-i", pngPath, "-q:v", "5", SCREENSHOT_JPG]);
    const file2 = Bun.file(SCREENSHOT_JPG);
    const buffer2 = await file2.arrayBuffer();
    return { base64: Buffer.from(buffer2).toString("base64"), width, height };
  }
  const file = Bun.file(pngPath);
  const buffer = await file.arrayBuffer();
  return { base64: Buffer.from(buffer).toString("base64"), width, height };
}
var KEY_MAP3, MODIFIER_KEYS5, input3, SCREENSHOT_TMP = "/tmp/cu-screenshot-tmp.png", SCREENSHOT_JPG = "/tmp/cu-screenshot.jpg", screenshot3, display3, apps3, platform3;
var init_linux2 = __esm(() => {
  KEY_MAP3 = {
    return: "Return",
    enter: "Return",
    tab: "Tab",
    space: "space",
    backspace: "BackSpace",
    delete: "Delete",
    escape: "Escape",
    esc: "Escape",
    left: "Left",
    up: "Up",
    right: "Right",
    down: "Down",
    home: "Home",
    end: "End",
    pageup: "Prior",
    pagedown: "Next",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    f6: "F6",
    f7: "F7",
    f8: "F8",
    f9: "F9",
    f10: "F10",
    f11: "F11",
    f12: "F12",
    shift: "shift",
    lshift: "shift",
    rshift: "shift",
    control: "ctrl",
    ctrl: "ctrl",
    lcontrol: "ctrl",
    rcontrol: "ctrl",
    alt: "alt",
    option: "alt",
    lalt: "alt",
    ralt: "alt",
    win: "super",
    meta: "super",
    command: "super",
    cmd: "super",
    super: "super",
    insert: "Insert",
    printscreen: "Print",
    pause: "Pause",
    numlock: "Num_Lock",
    capslock: "Caps_Lock",
    scrolllock: "Scroll_Lock"
  };
  MODIFIER_KEYS5 = new Set([
    "shift",
    "lshift",
    "rshift",
    "control",
    "ctrl",
    "lcontrol",
    "rcontrol",
    "alt",
    "option",
    "lalt",
    "ralt",
    "win",
    "meta",
    "command",
    "cmd",
    "super"
  ]);
  input3 = {
    async moveMouse(x, y) {
      run2(["xdotool", "mousemove", "--sync", String(Math.round(x)), String(Math.round(y))]);
    },
    async click(x, y, button) {
      run2(["xdotool", "mousemove", "--sync", String(Math.round(x)), String(Math.round(y))]);
      run2(["xdotool", "click", mouseButtonNum2(button)]);
    },
    async typeText(text) {
      run2(["xdotool", "type", "--delay", "12", text]);
    },
    async key(name, action) {
      const mapped = mapKey2(name);
      if (action === "press") {
        run2(["xdotool", "keydown", mapped]);
      } else {
        run2(["xdotool", "keyup", mapped]);
      }
    },
    async keys(parts) {
      const modifiers = [];
      let finalKey = null;
      for (const part of parts) {
        if (MODIFIER_KEYS5.has(part.toLowerCase())) {
          modifiers.push(mapKey2(part));
        } else {
          finalKey = part;
        }
      }
      if (!finalKey)
        return;
      const combo = [...modifiers, mapKey2(finalKey)].join("+");
      run2(["xdotool", "key", combo]);
    },
    async scroll(amount, direction) {
      if (direction === "vertical") {
        const btn = amount >= 0 ? "5" : "4";
        const repeats = Math.abs(Math.round(amount));
        if (repeats > 0)
          run2(["xdotool", "click", "--repeat", String(repeats), btn]);
      } else {
        const btn = amount >= 0 ? "7" : "6";
        const repeats = Math.abs(Math.round(amount));
        if (repeats > 0)
          run2(["xdotool", "click", "--repeat", String(repeats), btn]);
      }
    },
    async mouseLocation() {
      const out = run2(["xdotool", "getmouselocation"]);
      const xMatch = out.match(/x:(\d+)/);
      const yMatch = out.match(/y:(\d+)/);
      return {
        x: xMatch ? Number(xMatch[1]) : 0,
        y: yMatch ? Number(yMatch[1]) : 0
      };
    }
  };
  screenshot3 = {
    async captureScreen(displayId) {
      try {
        await runAsync(["scrot", "-o", SCREENSHOT_TMP]);
        const size = display3.getSize(displayId);
        return pngToJpegBase64(SCREENSHOT_TMP, size.width, size.height);
      } catch {
        return { base64: "", width: 0, height: 0 };
      }
    },
    async captureRegion(x, y, w, h) {
      try {
        await runAsync(["scrot", "-a", `${x},${y},${w},${h}`, "-o", SCREENSHOT_TMP]);
        return pngToJpegBase64(SCREENSHOT_TMP, w, h);
      } catch {
        return { base64: "", width: w, height: h };
      }
    },
    async captureWindow(hwnd) {
      try {
        if (commandExists("import")) {
          const jpgPath = "/tmp/cu-window-capture.jpg";
          await runAsync(["import", "-window", hwnd, "-quality", "75", jpgPath]);
          const geom = run2(["xdotool", "getwindowgeometry", "--shell", hwnd]);
          const wMatch = geom.match(/WIDTH=(\d+)/);
          const hMatch = geom.match(/HEIGHT=(\d+)/);
          const width = wMatch ? Number(wMatch[1]) : 0;
          const height = hMatch ? Number(hMatch[1]) : 0;
          const file = Bun.file(jpgPath);
          const buffer = await file.arrayBuffer();
          return { base64: Buffer.from(buffer).toString("base64"), width, height };
        }
        return null;
      } catch {
        return null;
      }
    }
  };
  display3 = {
    listAll() {
      try {
        const raw = run2(["xrandr", "--query"]);
        const displays = [];
        let idx = 0;
        const regex = /^\S+\s+connected\s+(?:primary\s+)?(\d+)x(\d+)\+\d+\+\d+/gm;
        let match;
        while ((match = regex.exec(raw)) !== null) {
          displays.push({
            width: Number(match[1]),
            height: Number(match[2]),
            scaleFactor: 1,
            displayId: idx++
          });
        }
        if (displays.length === 0) {
          return [{ width: 1920, height: 1080, scaleFactor: 1, displayId: 0 }];
        }
        return displays;
      } catch {
        return [{ width: 1920, height: 1080, scaleFactor: 1, displayId: 0 }];
      }
    },
    getSize(displayId) {
      const all = this.listAll();
      if (displayId !== undefined) {
        const found = all.find((d) => d.displayId === displayId);
        if (found)
          return found;
      }
      return all[0] ?? { width: 1920, height: 1080, scaleFactor: 1, displayId: 0 };
    }
  };
  apps3 = {
    listRunning() {
      try {
        if (commandExists("wmctrl")) {
          const raw2 = run2(["wmctrl", "-l", "-p"]);
          const handles2 = [];
          for (const line of raw2.split(`
`).filter(Boolean)) {
            const parts = line.split(/\s+/);
            const windowId = parts[0];
            const pid = Number(parts[2]);
            if (!pid)
              continue;
            const title = parts.slice(4).join(" ");
            let exePath = "";
            try {
              exePath = run2(["readlink", "-f", `/proc/${pid}/exe`]);
            } catch {}
            handles2.push({
              id: windowId ?? "",
              pid,
              title,
              exePath: exePath || undefined
            });
          }
          const seen = new Set;
          return handles2.filter((h) => {
            if (seen.has(h.id))
              return false;
            seen.add(h.id);
            return true;
          }).slice(0, 50);
        }
        const raw = run2(["xdotool", "search", "--name", ""]);
        const handles = [];
        for (const windowId of raw.split(`
`).filter(Boolean).slice(0, 50)) {
          const title = run2(["xdotool", "getwindowname", windowId]);
          let pid = 0;
          try {
            pid = Number(run2(["xdotool", "getwindowpid", windowId]));
          } catch {}
          if (title) {
            handles.push({ id: windowId, pid, title });
          }
        }
        return handles;
      } catch {
        return [];
      }
    },
    async listInstalled() {
      try {
        const dirs = [
          "/usr/share/applications",
          "/usr/local/share/applications",
          `${process.env.HOME}/.local/share/applications`
        ];
        const result = [];
        for (const dir of dirs) {
          let files;
          try {
            files = run2(["find", dir, "-name", "*.desktop", "-maxdepth", "1"]);
          } catch {
            continue;
          }
          for (const filepath of files.split(`
`).filter(Boolean)) {
            try {
              const content = run2(["cat", filepath]);
              const nameMatch = content.match(/^Name=(.+)$/m);
              const execMatch = content.match(/^Exec=(.+)$/m);
              const noDisplay = content.match(/^NoDisplay=true$/m);
              if (noDisplay)
                continue;
              const name = nameMatch?.[1] ?? "";
              const exec = execMatch?.[1] ?? "";
              if (!name)
                continue;
              result.push({
                id: filepath.split("/").pop()?.replace(".desktop", "") ?? "",
                displayName: name,
                path: exec.split(/\s+/)[0] ?? ""
              });
            } catch {}
          }
        }
        return result.slice(0, 200);
      } catch {
        return [];
      }
    },
    async open(name) {
      try {
        const desktopName = name.endsWith(".desktop") ? name : `${name}.desktop`;
        if (commandExists("gtk-launch")) {
          await runAsync(["gtk-launch", desktopName]);
          return;
        }
      } catch {}
      await runAsync(["xdg-open", name]);
    },
    getFrontmostApp() {
      try {
        const windowId = run2(["xdotool", "getactivewindow"]);
        if (!windowId)
          return null;
        const pidStr = run2(["xdotool", "getwindowpid", windowId]);
        if (!pidStr)
          return null;
        let exePath = "";
        try {
          exePath = run2(["readlink", "-f", `/proc/${pidStr}/exe`]);
        } catch {}
        let appName = "";
        try {
          appName = run2(["cat", `/proc/${pidStr}/comm`]);
        } catch {}
        if (!exePath && !appName)
          return null;
        return { id: exePath || `/proc/${pidStr}/exe`, appName: appName || "unknown" };
      } catch {
        return null;
      }
    },
    findWindowByTitle(title) {
      try {
        const raw = run2(["xdotool", "search", "--name", title]);
        const windowId = raw.split(`
`)[0];
        if (!windowId)
          return null;
        const windowTitle = run2(["xdotool", "getwindowname", windowId]);
        let pid = 0;
        try {
          pid = Number(run2(["xdotool", "getwindowpid", windowId]));
        } catch {}
        return { id: windowId, pid, title: windowTitle };
      } catch {
        return null;
      }
    }
  };
  platform3 = { input: input3, screenshot: screenshot3, display: display3, apps: apps3 };
});

// src/utils/computerUse/platforms/index.ts
function loadPlatform() {
  if (cached2)
    return cached2;
  switch (process.platform) {
    case "darwin":
      cached2 = (init_darwin2(), __toCommonJS(exports_darwin2)).platform;
      break;
    case "win32":
      cached2 = (init_win322(), __toCommonJS(exports_win322)).platform;
      break;
    case "linux":
      cached2 = (init_linux2(), __toCommonJS(exports_linux2)).platform;
      break;
    default:
      throw new Error(`Computer Use not supported on ${process.platform}`);
  }
  return cached2;
}
var cached2;
var init_platforms = () => {};

// src/utils/computerUse/win32/accessibilitySnapshot.ts
var exports_accessibilitySnapshot = {};
__export(exports_accessibilitySnapshot, {
  findNodeInSnapshot: () => findNodeInSnapshot,
  captureAccessibilitySnapshot: () => captureAccessibilitySnapshot
});
function captureAccessibilitySnapshot(hwnd, maxDepth = 4, interactiveOnly = true) {
  hwnd = validateHwnd(hwnd);
  const filterClause = interactiveOnly ? `
    # Interactive control types only
    $interactiveTypes = @(
      'Button','Edit','ComboBox','CheckBox','RadioButton',
      'MenuItem','Menu','MenuBar','Link','Slider','Spinner',
      'Tab','TabItem','List','ListItem','Tree','TreeItem',
      'DataGrid','DataItem','Document','ScrollBar','ToolBar',
      'SplitButton','ToggleButton','Hyperlink'
    )
    function Is-Interactive($ct) {
      $typeName = $ct -replace 'ControlType\\.', ''
      return $interactiveTypes -contains $typeName
    }` : `
    function Is-Interactive($ct) { return $true }`;
  const script = `
Add-Type -AssemblyName UIAutomationClient
Add-Type -AssemblyName UIAutomationTypes
Add-Type -AssemblyName WindowsBase
${filterClause}

function Get-Tree($el, $depth, $maxDepth) {
    if ($depth -ge $maxDepth) { return @() }
    $result = @()
    $children = $el.FindAll(
        [System.Windows.Automation.TreeScope]::Children,
        [System.Windows.Automation.Condition]::TrueCondition)
    foreach ($child in $children) {
        $ct = $child.Current.ControlType.ProgrammaticName
        $typeName = $ct -replace 'ControlType\\.', ''
        $name = [string]$child.Current.Name
        $autoId = [string]$child.Current.AutomationId
        $rect = $child.Current.BoundingRectangle
        $enabled = $child.Current.IsEnabled

        # Skip invisible/offscreen elements
        if ($rect.Width -le 0 -or $rect.Height -le 0) { continue }
        if ($rect.X -lt -10000) { continue }

        $val = $null
        try {
            $vp = $child.GetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern)
            if ($vp -ne $null) { $val = $vp.Current.Value }
        } catch {}

        $isInteractive = Is-Interactive $ct
        $sub = Get-Tree $child ($depth + 1) $maxDepth

        if ($isInteractive -or $sub.Count -gt 0) {
            $node = @{
                role = $typeName
                name = $name
                id = $autoId
                x = [int]$rect.X; y = [int]$rect.Y
                w = [int]$rect.Width; h = [int]$rect.Height
                on = $enabled
            }
            if ($val -ne $null -and $val -ne '') { $node['v'] = $val }
            if ($sub.Count -gt 0) { $node['c'] = $sub }
            $result += $node
        }
    }
    return $result
}

try {
    $root = [System.Windows.Automation.AutomationElement]::FromHandle([IntPtr]::new([long]${hwnd}))
    if ($root -eq $null) { Write-Output '[]'; exit }
    $tree = Get-Tree $root 0 ${maxDepth}
    if ($tree -eq $null -or $tree.Count -eq 0) {
        Write-Output '[]'
    } else {
        $tree | ConvertTo-Json -Depth 20 -Compress
    }
} catch {
    Write-Output '[]'
}
`;
  try {
    const raw = ps2(script);
    if (!raw || raw === "[]")
      return null;
    const parsed = JSON.parse(raw);
    const nodes = Array.isArray(parsed) ? parsed.map(parseNode) : [parseNode(parsed)];
    const text = formatForModel(nodes);
    return { text, nodes, timestamp: Date.now() };
  } catch {
    return null;
  }
}
function parseNode(raw) {
  return {
    role: raw.role || "",
    name: raw.name || "",
    automationId: raw.id || "",
    bounds: { x: raw.x || 0, y: raw.y || 0, w: raw.w || 0, h: raw.h || 0 },
    enabled: raw.on !== false,
    value: raw.v,
    children: raw.c ? Array.isArray(raw.c) ? raw.c.map(parseNode) : [parseNode(raw.c)] : undefined
  };
}
function formatForModel(nodes, indent = 0) {
  const lines = [];
  const pad = "  ".repeat(indent);
  for (const node of nodes) {
    let line = `${pad}[${node.role}]`;
    if (node.name)
      line += ` "${truncate(node.name, 40)}"`;
    line += ` (${node.bounds.x},${node.bounds.y} ${node.bounds.w}x${node.bounds.h})`;
    if (!node.enabled)
      line += " DISABLED";
    if (node.value)
      line += ` value="${truncate(node.value, 30)}"`;
    if (node.automationId)
      line += ` id=${node.automationId}`;
    lines.push(line);
    if (node.children) {
      lines.push(formatForModel(node.children, indent + 1));
    }
  }
  return lines.join(`
`);
}
function truncate(s, max) {
  return s.length > max ? s.slice(0, max - 1) + "\u2026" : s;
}
function findNodeInSnapshot(nodes, query) {
  for (const node of nodes) {
    let match = true;
    if (query.name && !node.name.toLowerCase().includes(query.name.toLowerCase()))
      match = false;
    if (query.role && node.role.toLowerCase() !== query.role.toLowerCase())
      match = false;
    if (query.automationId && node.automationId !== query.automationId)
      match = false;
    if (match && (query.name || query.role || query.automationId))
      return node;
    if (node.children) {
      const found = findNodeInSnapshot(node.children, query);
      if (found)
        return found;
    }
  }
  return null;
}
var init_accessibilitySnapshot = __esm(() => {
  init_shared();
});

// src/utils/computerUse/win32/uiAutomation.ts
var exports_uiAutomation = {};
__export(exports_uiAutomation, {
  setValue: () => setValue,
  getUITree: () => getUITree,
  findElement: () => findElement,
  elementAtPoint: () => elementAtPoint,
  clickElement: () => clickElement
});
function parseJsonSafe(raw, fallback) {
  try {
    if (!raw)
      return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function getUITree(windowTitle, depth = 3) {
  const escapedTitle = windowTitle.replace(/'/g, "''");
  const script = `
${UIA_ASSEMBLIES}
$title = '${escapedTitle}'
${PS_FIND_WINDOW}
if ($window -eq $null) {
  Write-Output '[]'
  exit
}

function Get-UIChildren($parent, $currentDepth, $maxDepth) {
  if ($currentDepth -ge $maxDepth) { return @() }
  $children = $parent.FindAll(
    [System.Windows.Automation.TreeScope]::Children,
    [System.Windows.Automation.Condition]::TrueCondition)
  $result = @()
  foreach ($el in $children) {
    $rect = $el.Current.BoundingRectangle
    $obj = @{
      name = [string]$el.Current.Name
      controlType = $el.Current.ControlType.ProgrammaticName -replace 'ControlType\\.', ''
      automationId = [string]$el.Current.AutomationId
      boundingRect = @{
        x = [int]$rect.X
        y = [int]$rect.Y
        w = [int]$rect.Width
        h = [int]$rect.Height
      }
      isEnabled = $el.Current.IsEnabled
    }
    try {
      $vp = $el.GetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern)
      if ($vp -ne $null) { $obj['value'] = $vp.Current.Value }
    } catch {}
    $sub = Get-UIChildren $el ($currentDepth + 1) $maxDepth
    if ($sub.Count -gt 0) { $obj['children'] = $sub }
    $result += $obj
  }
  return $result
}

$tree = Get-UIChildren $window 0 ${depth}
if ($tree -eq $null -or $tree.Count -eq 0) {
  Write-Output '[]'
} else {
  $tree | ConvertTo-Json -Depth 20 -Compress
}
`;
  const raw = ps2(script);
  const parsed = parseJsonSafe(raw, []);
  return Array.isArray(parsed) ? parsed : [parsed];
}
function findElement(windowTitle, query) {
  const escapedTitle = windowTitle.replace(/'/g, "''");
  const conditions = [];
  if (query.name) {
    const v = query.name.replace(/'/g, "''");
    conditions.push(`[System.Windows.Automation.PropertyCondition]::new([System.Windows.Automation.AutomationElement]::NameProperty, '${v}')`);
  }
  if (query.controlType) {
    if (!VALID_CONTROL_TYPES.has(query.controlType)) {
      return null;
    }
    const v = query.controlType.replace(/'/g, "''");
    conditions.push(`[System.Windows.Automation.PropertyCondition]::new([System.Windows.Automation.AutomationElement]::ControlTypeProperty, [System.Windows.Automation.ControlType]::${v})`);
  }
  if (query.automationId) {
    const v = query.automationId.replace(/'/g, "''");
    conditions.push(`[System.Windows.Automation.PropertyCondition]::new([System.Windows.Automation.AutomationElement]::AutomationIdProperty, '${v}')`);
  }
  if (conditions.length === 0)
    return null;
  let conditionExpr;
  if (conditions.length === 1) {
    conditionExpr = conditions[0];
  } else {
    conditionExpr = `[System.Windows.Automation.AndCondition]::new(@(${conditions.join(", ")}))`;
  }
  const script = `
${UIA_ASSEMBLIES}
$title = '${escapedTitle}'
${PS_FIND_WINDOW}
if ($window -eq $null) {
  Write-Output 'null'
  exit
}
$cond = ${conditionExpr}
$el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
if ($el -eq $null) {
  Write-Output 'null'
  exit
}
$rect = $el.Current.BoundingRectangle
$obj = @{
  name = [string]$el.Current.Name
  controlType = $el.Current.ControlType.ProgrammaticName -replace 'ControlType\\.', ''
  automationId = [string]$el.Current.AutomationId
  boundingRect = @{
    x = [int]$rect.X
    y = [int]$rect.Y
    w = [int]$rect.Width
    h = [int]$rect.Height
  }
  isEnabled = $el.Current.IsEnabled
}
try {
  $vp = $el.GetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern)
  if ($vp -ne $null) { $obj['value'] = $vp.Current.Value }
} catch {}
$obj | ConvertTo-Json -Compress
`;
  const raw = ps2(script);
  return parseJsonSafe(raw, null);
}
function clickElement(windowTitle, automationId) {
  const escapedTitle = windowTitle.replace(/'/g, "''");
  const escapedId = automationId.replace(/'/g, "''");
  const script = `
${UIA_ASSEMBLIES}
$title = '${escapedTitle}'
${PS_FIND_WINDOW}
if ($window -eq $null) {
  Write-Output 'false'
  exit
}
$cond = [System.Windows.Automation.PropertyCondition]::new(
  [System.Windows.Automation.AutomationElement]::AutomationIdProperty, '${escapedId}')
$el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
if ($el -eq $null) {
  Write-Output 'false'
  exit
}
try {
  $ip = $el.GetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern)
  $ip.Invoke()
  Write-Output 'true'
} catch {
  Write-Output 'false'
}
`;
  return ps2(script) === "true";
}
function setValue(windowTitle, automationId, value) {
  const escapedTitle = windowTitle.replace(/'/g, "''");
  const escapedId = automationId.replace(/'/g, "''");
  const escapedValue = value.replace(/'/g, "''");
  const script = `
${UIA_ASSEMBLIES}
$title = '${escapedTitle}'
${PS_FIND_WINDOW}
if ($window -eq $null) {
  Write-Output 'false'
  exit
}
$cond = [System.Windows.Automation.PropertyCondition]::new(
  [System.Windows.Automation.AutomationElement]::AutomationIdProperty, '${escapedId}')
$el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
if ($el -eq $null) {
  Write-Output 'false'
  exit
}
try {
  $vp = $el.GetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern)
  $vp.SetValue('${escapedValue}')
  Write-Output 'true'
} catch {
  Write-Output 'false'
}
`;
  return ps2(script) === "true";
}
function elementAtPoint(x, y) {
  const script = `
${UIA_ASSEMBLIES}
try {
  $point = [System.Windows.Point]::new(${x}, ${y})
  $el = [System.Windows.Automation.AutomationElement]::FromPoint($point)
  if ($el -eq $null) {
    Write-Output 'null'
    exit
  }
  $rect = $el.Current.BoundingRectangle
  $obj = @{
    name = [string]$el.Current.Name
    controlType = $el.Current.ControlType.ProgrammaticName -replace 'ControlType\\.', ''
    automationId = [string]$el.Current.AutomationId
    boundingRect = @{
      x = [int]$rect.X
      y = [int]$rect.Y
      w = [int]$rect.Width
      h = [int]$rect.Height
    }
    isEnabled = $el.Current.IsEnabled
  }
  try {
    $vp = $el.GetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern)
    if ($vp -ne $null) { $obj['value'] = $vp.Current.Value }
  } catch {}
  $obj | ConvertTo-Json -Compress
} catch {
  Write-Output 'null'
}
`;
  const raw = ps2(script);
  return parseJsonSafe(raw, null);
}
var VALID_CONTROL_TYPES, UIA_ASSEMBLIES = `
Add-Type -AssemblyName UIAutomationClient
Add-Type -AssemblyName UIAutomationTypes
Add-Type -AssemblyName WindowsBase
`, PS_FIND_WINDOW = `
$root = [System.Windows.Automation.AutomationElement]::RootElement
$window = $root.FindFirst(
  [System.Windows.Automation.TreeScope]::Children,
  [System.Windows.Automation.PropertyCondition]::new(
    [System.Windows.Automation.AutomationElement]::NameProperty, $title))
if ($window -eq $null) {
  $all = $root.FindAll(
    [System.Windows.Automation.TreeScope]::Children,
    [System.Windows.Automation.Condition]::TrueCondition)
  foreach ($el in $all) {
    if ($el.Current.Name -and $el.Current.Name.Contains($title)) {
      $window = $el
      break
    }
  }
}
`;
var init_uiAutomation = __esm(() => {
  init_shared();
  VALID_CONTROL_TYPES = new Set([
    "Button",
    "Calendar",
    "CheckBox",
    "ComboBox",
    "Custom",
    "DataGrid",
    "DataItem",
    "Document",
    "Edit",
    "Group",
    "Header",
    "HeaderItem",
    "Hyperlink",
    "Image",
    "List",
    "ListItem",
    "Menu",
    "MenuBar",
    "MenuItem",
    "Pane",
    "ProgressBar",
    "RadioButton",
    "ScrollBar",
    "Separator",
    "Slider",
    "Spinner",
    "SplitButton",
    "StatusBar",
    "Tab",
    "TabItem",
    "Table",
    "Text",
    "Thumb",
    "TitleBar",
    "ToolBar",
    "ToolTip",
    "Tree",
    "TreeItem",
    "Window"
  ]);
});

// src/utils/computerUse/executorCrossPlatform.ts
var exports_executorCrossPlatform = {};
__export(exports_executorCrossPlatform, {
  unhideComputerUseAppsCrossPlatform: () => unhideComputerUseAppsCrossPlatform,
  createCrossPlatformExecutor: () => createCrossPlatformExecutor
});
function getBoundHwndStr() {
  if (process.platform !== "win32")
    return null;
  try {
    const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
    return getBoundHwnd2();
  } catch {
    return null;
  }
}
function isBound() {
  return getBoundHwndStr() !== null;
}
function getNonClientOffset() {
  if (process.platform !== "win32")
    return { dx: 0, dy: 0 };
  try {
    const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
    const hwnd = getBoundHwnd2();
    if (!hwnd)
      return { dx: 0, dy: 0 };
    validateHwnd(hwnd);
    const result = Bun.spawnSync({
      cmd: [
        "powershell",
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        `
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class NcCalc {
    [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
    [DllImport("user32.dll")] public static extern bool GetClientRect(IntPtr h, out RECT r);
    [DllImport("user32.dll")] public static extern bool ClientToScreen(IntPtr h, ref POINT p);
    [StructLayout(LayoutKind.Sequential)] public struct RECT { public int L, T, R, B; }
    [StructLayout(LayoutKind.Sequential)] public struct POINT { public int X, Y; }
}
'@
$h = [IntPtr]::new([long]${hwnd})
$wr = New-Object NcCalc+RECT
$cr = New-Object NcCalc+RECT
[NcCalc]::GetWindowRect($h, [ref]$wr) | Out-Null
[NcCalc]::GetClientRect($h, [ref]$cr) | Out-Null
$pt = New-Object NcCalc+POINT
$pt.X = 0; $pt.Y = 0
[NcCalc]::ClientToScreen($h, [ref]$pt) | Out-Null
"$($pt.X - $wr.L),$($pt.Y - $wr.T)"
`
      ],
      stdout: "pipe",
      stderr: "pipe"
    });
    const out = new TextDecoder().decode(result.stdout).trim();
    const [dxStr, dyStr] = out.split(",");
    const dx = Number(dxStr) || 0;
    const dy = Number(dyStr) || 0;
    return { dx, dy };
  } catch {
    return { dx: 0, dy: 0 };
  }
}
function getCachedNcOffset() {
  if (process.platform !== "win32")
    return { dx: 0, dy: 0 };
  try {
    const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
    const hwnd = getBoundHwnd2();
    if (!hwnd)
      return { dx: 0, dy: 0 };
    if (_ncOffset && _ncOffsetHwnd === hwnd)
      return _ncOffset;
    _ncOffset = getNonClientOffset();
    _ncOffsetHwnd = hwnd;
    return _ncOffset;
  } catch {
    return { dx: 0, dy: 0 };
  }
}
function getAccessibilityText() {
  if (process.platform !== "win32" || !isBound())
    return;
  try {
    const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
    const hwnd = getBoundHwnd2();
    if (!hwnd)
      return;
    const { captureAccessibilitySnapshot: captureAccessibilitySnapshot2 } = (init_accessibilitySnapshot(), __toCommonJS(exports_accessibilitySnapshot));
    const snap = captureAccessibilitySnapshot2(hwnd);
    if (!snap || !snap.text)
      return;
    return snap.text;
  } catch {
    return;
  }
}
function augmentScreenshot(raw, display4) {
  if (isBound()) {
    const accessibilityText = getAccessibilityText();
    return {
      base64: raw.base64,
      width: raw.width,
      height: raw.height,
      displayWidth: raw.width,
      displayHeight: raw.height,
      originX: 0,
      originY: 0,
      accessibilityText
    };
  }
  return {
    base64: raw.base64,
    width: raw.width,
    height: raw.height,
    displayWidth: display4.width,
    displayHeight: display4.height,
    originX: 0,
    originY: 0
  };
}
function createCrossPlatformExecutor(opts) {
  const platform4 = loadPlatform();
  logForDebugging(`[computer-use] cross-platform executor for ${process.platform}`);
  return {
    capabilities: {
      ...CLI_CU_CAPABILITIES,
      hostBundleId: CLI_HOST_BUNDLE_ID
    },
    async prepareForAction() {
      return [];
    },
    async previewHideSet() {
      return [];
    },
    async getDisplaySize(displayId) {
      const d = platform4.display.getSize(displayId);
      return {
        ...d,
        scaleFactor: d.scaleFactor ?? 1,
        displayId: d.displayId ?? 0,
        originX: 0,
        originY: 0
      };
    },
    async listDisplays() {
      return platform4.display.listAll().map((d) => ({ ...d, originX: 0, originY: 0 }));
    },
    async findWindowDisplays(bundleIds) {
      return bundleIds.map((b) => ({ bundleId: b, displayIds: [0] }));
    },
    async resolvePrepareCapture(opts2) {
      const d = platform4.display.getSize(opts2.preferredDisplayId);
      const raw = await platform4.screenshot.captureScreen(opts2.preferredDisplayId);
      const shot = augmentScreenshot(raw, d);
      return {
        ...shot,
        hidden: [],
        displayId: opts2.preferredDisplayId ?? d.displayId ?? 0
      };
    },
    async screenshot(opts2) {
      const d = platform4.display.getSize(opts2.displayId);
      const raw = await platform4.screenshot.captureScreen(opts2.displayId);
      return augmentScreenshot(raw, d);
    },
    async zoom(regionLogical, _allowedBundleIds, _displayId) {
      return platform4.screenshot.captureRegion(regionLogical.x, regionLogical.y, regionLogical.w, regionLogical.h);
    },
    async key(keySequence, repeat) {
      const parts = keySequence.split("+").filter((p) => p.length > 0);
      const n = repeat ?? 1;
      for (let i = 0;i < n; i++) {
        if (i > 0)
          await sleep(8);
        await platform4.input.keys(parts);
      }
    },
    async holdKey(keyNames, durationMs) {
      for (const k of keyNames) {
        await platform4.input.key(k, "press");
      }
      await sleep(durationMs);
      for (const k of [...keyNames].reverse()) {
        await platform4.input.key(k, "release");
      }
    },
    async type(text, _opts) {
      await platform4.input.typeText(text);
    },
    async readClipboard() {
      if (process.platform === "win32") {
        const result2 = Bun.spawnSync({
          cmd: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"],
          stdout: "pipe"
        });
        return new TextDecoder().decode(result2.stdout).trim();
      }
      const result = Bun.spawnSync({
        cmd: ["xclip", "-selection", "clipboard", "-o"],
        stdout: "pipe"
      });
      return new TextDecoder().decode(result.stdout).trim();
    },
    async writeClipboard(text) {
      if (process.platform === "win32") {
        const escaped = text.replace(/'/g, "''");
        Bun.spawnSync({
          cmd: [
            "powershell",
            "-NoProfile",
            "-Command",
            `Set-Clipboard -Value '${escaped}'`
          ]
        });
        return;
      }
      const proc = Bun.spawn(["xclip", "-selection", "clipboard"], {
        stdin: "pipe"
      });
      proc.stdin.write(text);
      proc.stdin.end();
      await proc.exited;
    },
    async moveMouse(x, y) {
      await platform4.input.moveMouse(x, y);
    },
    async click(x, y, button, count, _modifiers) {
      let clickX = Math.round(x);
      let clickY = Math.round(y);
      if (isBound()) {
        const nc = getCachedNcOffset();
        clickX -= nc.dx;
        clickY -= nc.dy;
        logForDebugging(`[computer-use] click(${Math.round(x)},${Math.round(y)}) \u2192 client(${clickX},${clickY}) [nc offset: ${nc.dx},${nc.dy}]`);
      }
      for (let i = 0;i < count; i++) {
        await platform4.input.click(clickX, clickY, button);
      }
    },
    async mouseDown() {
      if (isBound() && process.platform === "win32") {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (hwnd) {
          const { sendMouseDown: sendMouseDown2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
          const pos = await platform4.input.mouseLocation();
          sendMouseDown2(hwnd, pos.x, pos.y);
          return;
        }
      }
      if (process.platform === "win32") {
        Bun.spawnSync({
          cmd: [
            "powershell",
            "-NoProfile",
            "-NonInteractive",
            "-Command",
            `Add-Type -Language CSharp @'
using System; using System.Runtime.InteropServices;
public class MDown { [StructLayout(LayoutKind.Sequential)] public struct MOUSEINPUT { public int dx; public int dy; public int mouseData; public uint dwFlags; public uint time; public IntPtr dwExtraInfo; }
[StructLayout(LayoutKind.Explicit)] public struct INPUT { [FieldOffset(0)] public uint type; [FieldOffset(4)] public MOUSEINPUT mi; }
[DllImport("user32.dll",SetLastError=true)] public static extern uint SendInput(uint n, INPUT[] i, int cb); }
'@
$i = New-Object MDown+INPUT; $i.type=0; $i.mi.dwFlags=0x0002; [MDown]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`
          ]
        });
        return;
      }
    },
    async mouseUp() {
      if (isBound() && process.platform === "win32") {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (hwnd) {
          const { sendMouseUp: sendMouseUp2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
          const pos = await platform4.input.mouseLocation();
          sendMouseUp2(hwnd, pos.x, pos.y);
          return;
        }
      }
      if (process.platform === "win32") {
        Bun.spawnSync({
          cmd: [
            "powershell",
            "-NoProfile",
            "-NonInteractive",
            "-Command",
            `Add-Type -Language CSharp @'
using System; using System.Runtime.InteropServices;
public class MUp { [StructLayout(LayoutKind.Sequential)] public struct MOUSEINPUT { public int dx; public int dy; public int mouseData; public uint dwFlags; public uint time; public IntPtr dwExtraInfo; }
[StructLayout(LayoutKind.Explicit)] public struct INPUT { [FieldOffset(0)] public uint type; [FieldOffset(4)] public MOUSEINPUT mi; }
[DllImport("user32.dll",SetLastError=true)] public static extern uint SendInput(uint n, INPUT[] i, int cb); }
'@
$i = New-Object MUp+INPUT; $i.type=0; $i.mi.dwFlags=0x0004; [MUp]::SendInput(1, @($i), [Runtime.InteropServices.Marshal]::SizeOf($i)) | Out-Null`
          ]
        });
        return;
      }
    },
    async getCursorPosition() {
      return platform4.input.mouseLocation();
    },
    async drag(from, to) {
      if (isBound() && process.platform === "win32") {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (hwnd) {
          const { sendMouseDown: sendMouseDown2, sendMouseMove: sendMouseMove2, sendMouseUp: sendMouseUp2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
          const nc = getCachedNcOffset();
          if (from) {
            const fx = Math.round(from.x) - nc.dx;
            const fy = Math.round(from.y) - nc.dy;
            sendMouseDown2(hwnd, fx, fy);
          }
          await sleep(50);
          const tx = Math.round(to.x) - nc.dx;
          const ty = Math.round(to.y) - nc.dy;
          sendMouseMove2(hwnd, tx, ty);
          await sleep(16);
          sendMouseUp2(hwnd, tx, ty);
          return;
        }
      }
      if (from) {
        await platform4.input.moveMouse(from.x, from.y);
        await sleep(16);
      }
      await this.mouseDown();
      await sleep(50);
      await platform4.input.moveMouse(to.x, to.y);
      await sleep(16);
      await this.mouseUp();
    },
    async scroll(x, y, dx, dy) {
      if (dy !== 0)
        await platform4.input.scroll(dy, "vertical");
      if (dx !== 0)
        await platform4.input.scroll(dx, "horizontal");
    },
    async getFrontmostApp() {
      if (isBound()) {
        return { bundleId: "cu-bound-window", displayName: "Bound Window" };
      }
      const info = platform4.apps.getFrontmostApp();
      if (!info)
        return null;
      return { bundleId: info.id, displayName: info.appName };
    },
    async appUnderPoint(_x, _y) {
      return null;
    },
    async listInstalledApps() {
      return (await platform4.apps.listInstalled()).map((a) => ({
        bundleId: a.id,
        displayName: a.displayName,
        path: a.path
      }));
    },
    async getAppIcon(_path) {
      return;
    },
    async listRunningApps() {
      return platform4.apps.listRunning().map((w) => ({
        bundleId: w.id,
        displayName: w.title
      }));
    },
    async openApp(bundleId) {
      await platform4.apps.open(bundleId);
      _ncOffset = null;
      _ncOffsetHwnd = null;
    },
    async manageWindow(action, opts2) {
      if (!platform4.windowManagement)
        return false;
      const result = platform4.windowManagement.manageWindow(action, opts2);
      _ncOffset = null;
      _ncOffsetHwnd = null;
      return result;
    },
    async getWindowRect() {
      if (!platform4.windowManagement)
        return null;
      return platform4.windowManagement.getWindowRect();
    },
    async openTerminal(opts2) {
      if (process.platform !== "win32")
        return null;
      try {
        const { listWindows: enumWindows } = (init_windowEnum(), __toCommonJS(exports_windowEnum));
        const { bindWindow: bindWindow2 } = (init_win322(), __toCommonJS(exports_win322));
        const agentCmd = {
          claude: "claude",
          codex: "codex",
          gemini: "gemini",
          custom: opts2.command ?? ""
        };
        const cmd = agentCmd[opts2.agent];
        if (!cmd)
          return null;
        const beforeHwnds = new Set(enumWindows().map((w) => w.hwnd));
        const cwd = opts2.workingDirectory ?? process.cwd();
        const escapedCwd = cwd.replace(/'/g, "''");
        Bun.spawnSync({
          cmd: [
            "powershell",
            "-Command",
            `Start-Process powershell -ArgumentList '-NoExit','-Command','cd ''${escapedCwd}''; ${cmd}'`
          ],
          stdout: "ignore",
          stderr: "ignore"
        });
        let newHwnd = null;
        let newTitle = "";
        for (let i = 0;i < 25; i++) {
          await sleep(200);
          for (const w of enumWindows()) {
            if (!beforeHwnds.has(w.hwnd)) {
              const t = w.title.toLowerCase();
              if (t.includes("terminal") || t.includes("powershell") || t.includes("cmd") || t.includes(cmd.toLowerCase())) {
                newHwnd = w.hwnd;
                newTitle = w.title;
                break;
              }
            }
          }
          if (newHwnd)
            break;
        }
        if (!newHwnd)
          return null;
        const win = enumWindows().find((w) => w.hwnd === newHwnd);
        bindWindow2(newHwnd, win?.pid);
        _ncOffset = null;
        _ncOffsetHwnd = null;
        await sleep(2000);
        return { hwnd: newHwnd, title: newTitle, launched: true };
      } catch {
        return null;
      }
    },
    async bindToWindow(query) {
      if (process.platform !== "win32")
        return null;
      const { bindWindow: bindWindow2 } = (init_win322(), __toCommonJS(exports_win322));
      const { listWindows: enumWindows } = (init_windowEnum(), __toCommonJS(exports_windowEnum));
      const windows = enumWindows();
      let target;
      if (query.hwnd) {
        target = windows.find((w) => w.hwnd === query.hwnd);
      } else if (query.title) {
        const lower = query.title.toLowerCase();
        target = windows.find((w) => w.title.toLowerCase().includes(lower));
      } else if (query.pid) {
        target = windows.find((w) => w.pid === query.pid);
      }
      if (!target)
        return null;
      bindWindow2(target.hwnd, target.pid);
      _ncOffset = null;
      _ncOffsetHwnd = null;
      return target;
    },
    async unbindFromWindow() {
      if (process.platform !== "win32")
        return;
      const { unbindWindow: unbindWindow2 } = (init_win322(), __toCommonJS(exports_win322));
      unbindWindow2();
      _ncOffset = null;
      _ncOffsetHwnd = null;
    },
    async hasBoundWindow() {
      return isBound();
    },
    async getBindingStatus() {
      if (process.platform !== "win32")
        return null;
      const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
      const hwnd = getBoundHwnd2();
      if (!hwnd)
        return { bound: false };
      const { listWindows: enumWindows } = (init_windowEnum(), __toCommonJS(exports_windowEnum));
      const windows = enumWindows();
      const win = windows.find((w) => w.hwnd === hwnd);
      const rect = platform4.windowManagement?.getWindowRect() ?? undefined;
      return {
        bound: true,
        hwnd,
        title: win?.title,
        pid: win?.pid,
        rect: rect ?? undefined
      };
    },
    async listVisibleWindows() {
      if (process.platform !== "win32")
        return [];
      const { listWindows: enumWindows } = (init_windowEnum(), __toCommonJS(exports_windowEnum));
      return enumWindows();
    },
    async statusIndicator(action, message) {
      if (process.platform !== "win32")
        return { active: false };
      try {
        const ind = (init_inputIndicator(), __toCommonJS(exports_inputIndicator));
        if (action === "show" && message) {
          ind.updateIndicator(message);
          return { active: true, message };
        }
        if (action === "hide") {
          ind.hideIndicator();
          return { active: false };
        }
        return { active: isBound() };
      } catch {
        return { active: false };
      }
    },
    async virtualKeyboard(opts2) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const hwnd = getBoundHwndStr();
        if (!hwnd)
          return false;
        const wm = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        const { VK_MAP: VK_MAP3 } = (init_shared(), __toCommonJS(exports_shared));
        const repeat = opts2.repeat ?? 1;
        for (let r = 0;r < repeat; r++) {
          if (r > 0)
            await sleep(30);
          switch (opts2.action) {
            case "type":
              wm.sendText(hwnd, opts2.text);
              break;
            case "combo": {
              const parts = opts2.text.split("+").map((k) => k.trim()).filter(Boolean);
              wm.sendKeys(hwnd, parts);
              break;
            }
            case "press": {
              const lower = opts2.text.toLowerCase();
              const vk = VK_MAP3[lower] ?? (opts2.text.length === 1 ? opts2.text.charCodeAt(0) : 0);
              if (vk)
                wm.sendKey(hwnd, vk, "down");
              break;
            }
            case "release": {
              const lower = opts2.text.toLowerCase();
              const vk = VK_MAP3[lower] ?? (opts2.text.length === 1 ? opts2.text.charCodeAt(0) : 0);
              if (vk)
                wm.sendKey(hwnd, vk, "up");
              break;
            }
            case "hold": {
              const parts = opts2.text.split("+").map((k) => k.trim()).filter(Boolean);
              for (const k of parts) {
                const lower = k.toLowerCase();
                const vk = VK_MAP3[lower] ?? (k.length === 1 ? k.charCodeAt(0) : 0);
                if (vk)
                  wm.sendKey(hwnd, vk, "down");
              }
              await sleep((opts2.duration ?? 1) * 1000);
              for (const k of [...parts].reverse()) {
                const lower = k.toLowerCase();
                const vk = VK_MAP3[lower] ?? (k.length === 1 ? k.charCodeAt(0) : 0);
                if (vk)
                  wm.sendKey(hwnd, vk, "up");
              }
              break;
            }
          }
        }
        return true;
      } catch {
        return false;
      }
    },
    async virtualMouse(opts2) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const hwnd = getBoundHwndStr();
        if (!hwnd)
          return false;
        const wm = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        const vc = (init_virtualCursor(), __toCommonJS(exports_virtualCursor));
        const x = Math.round(opts2.x);
        const y = Math.round(opts2.y);
        switch (opts2.action) {
          case "click":
            vc.moveVirtualCursor(x, y, true);
            wm.sendClick(hwnd, x, y, "left");
            break;
          case "double_click":
            vc.moveVirtualCursor(x, y, true);
            wm.sendClick(hwnd, x, y, "left");
            await sleep(50);
            wm.sendClick(hwnd, x, y, "left");
            break;
          case "right_click":
            vc.moveVirtualCursor(x, y, true);
            wm.sendClick(hwnd, x, y, "right");
            break;
          case "move":
            vc.moveVirtualCursor(x, y);
            wm.sendMouseMove(hwnd, x, y);
            break;
          case "drag": {
            const sx = Math.round(opts2.startX ?? x);
            const sy = Math.round(opts2.startY ?? y);
            vc.moveVirtualCursor(sx, sy, true);
            wm.sendMouseDown(hwnd, sx, sy);
            await sleep(16);
            wm.sendMouseMove(hwnd, x, y);
            vc.moveVirtualCursor(x, y);
            await sleep(16);
            wm.sendMouseUp(hwnd, x, y);
            break;
          }
          case "down":
            vc.moveVirtualCursor(x, y, true);
            wm.sendMouseDown(hwnd, x, y);
            break;
          case "up":
            vc.moveVirtualCursor(x, y);
            wm.sendMouseUp(hwnd, x, y);
            break;
        }
        return true;
      } catch {
        return false;
      }
    },
    async mouseWheel(x, y, delta, horizontal) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const hwnd = getBoundHwndStr();
        if (!hwnd)
          return false;
        try {
          const bridge = (init_bridgeClient(), __toCommonJS(exports_bridgeClient));
          const result = bridge.callSync("send_mouse_wheel", {
            hwnd,
            x: Math.round(x),
            y: Math.round(y),
            delta,
            horizontal: horizontal ?? false
          });
          if (result !== null)
            return true;
        } catch {}
        const { sendMouseWheel: sendMouseWheel2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        return sendMouseWheel2(hwnd, Math.round(x), Math.round(y), delta, horizontal ?? false);
      } catch {
        return false;
      }
    },
    async activateWindow(clickX, clickY) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (!hwnd)
          return false;
        if (platform4.windowManagement) {
          platform4.windowManagement.manageWindow("focus");
        }
        const { sendClick: sendClick2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        if (clickX !== undefined && clickY !== undefined) {
          sendClick2(hwnd, clickX, clickY, "left");
        } else {
          const rect = platform4.windowManagement?.getWindowRect();
          if (rect) {
            const nc = getCachedNcOffset();
            const cx = Math.round(rect.width / 2) - nc.dx;
            const cy = Math.round(rect.height / 2) - nc.dy;
            sendClick2(hwnd, cx, cy, "left");
          }
        }
        return true;
      } catch {
        return false;
      }
    },
    async respondToPrompt(opts2) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (!hwnd)
          return false;
        const wm = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        const VK_RETURN = 13;
        const VK_ESCAPE = 27;
        const VK_UP = 38;
        const VK_DOWN = 40;
        switch (opts2.responseType) {
          case "yes":
            wm.sendChar(hwnd, "y");
            await sleep(50);
            wm.sendKey(hwnd, VK_RETURN, "down");
            wm.sendKey(hwnd, VK_RETURN, "up");
            break;
          case "no":
            wm.sendChar(hwnd, "n");
            await sleep(50);
            wm.sendKey(hwnd, VK_RETURN, "down");
            wm.sendKey(hwnd, VK_RETURN, "up");
            break;
          case "enter":
            wm.sendKey(hwnd, VK_RETURN, "down");
            wm.sendKey(hwnd, VK_RETURN, "up");
            break;
          case "escape":
            wm.sendKey(hwnd, VK_ESCAPE, "down");
            wm.sendKey(hwnd, VK_ESCAPE, "up");
            break;
          case "select": {
            const vk = (opts2.arrowDirection ?? "down") === "down" ? VK_DOWN : VK_UP;
            const count = opts2.arrowCount ?? 1;
            for (let i = 0;i < count; i++) {
              wm.sendKey(hwnd, vk, "down");
              wm.sendKey(hwnd, vk, "up");
              await sleep(30);
            }
            await sleep(50);
            wm.sendKey(hwnd, VK_RETURN, "down");
            wm.sendKey(hwnd, VK_RETURN, "up");
            break;
          }
          case "type":
            if (opts2.text) {
              wm.sendText(hwnd, opts2.text);
              await sleep(50);
            }
            wm.sendKey(hwnd, VK_RETURN, "down");
            wm.sendKey(hwnd, VK_RETURN, "up");
            break;
        }
        return true;
      } catch {
        return false;
      }
    },
    async clickElement(query) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (!hwnd)
          return false;
        const { captureAccessibilitySnapshot: captureAccessibilitySnapshot2, findNodeInSnapshot: findNodeInSnapshot2 } = (init_accessibilitySnapshot(), __toCommonJS(exports_accessibilitySnapshot));
        const snap = captureAccessibilitySnapshot2(hwnd);
        if (!snap)
          return false;
        const node = findNodeInSnapshot2(snap.nodes, query);
        if (!node)
          return false;
        const { clickElement: uiaClick } = (init_uiAutomation(), __toCommonJS(exports_uiAutomation));
        const windows = (init_windowEnum(), __toCommonJS(exports_windowEnum)).listWindows();
        const win = windows.find((w) => w.hwnd === hwnd);
        if (win && node.automationId) {
          if (uiaClick(win.title, node.automationId))
            return true;
        }
        const cx = node.bounds.x + Math.round(node.bounds.w / 2);
        const cy = node.bounds.y + Math.round(node.bounds.h / 2);
        const nc = getCachedNcOffset();
        const { sendClick: sendClick2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        const editHwnd = (init_windowMessage(), __toCommonJS(exports_windowMessage)).findEditChild(hwnd);
        sendClick2(editHwnd ?? hwnd, cx - nc.dx, cy - nc.dy, "left");
        return true;
      } catch {
        return false;
      }
    },
    async typeIntoElement(query, text) {
      if (process.platform !== "win32" || !isBound())
        return false;
      try {
        const { getBoundHwnd: getBoundHwnd2 } = (init_win322(), __toCommonJS(exports_win322));
        const hwnd = getBoundHwnd2();
        if (!hwnd)
          return false;
        const windows = (init_windowEnum(), __toCommonJS(exports_windowEnum)).listWindows();
        const win = windows.find((w) => w.hwnd === hwnd);
        if (win) {
          const { setValue: setValue2, findElement: findElement2 } = (init_uiAutomation(), __toCommonJS(exports_uiAutomation));
          if (query.automationId) {
            if (setValue2(win.title, query.automationId, text))
              return true;
          }
          if (query.name) {
            const el = findElement2(win.title, query);
            if (el && el.automationId) {
              if (setValue2(win.title, el.automationId, text))
                return true;
            }
          }
        }
        const { captureAccessibilitySnapshot: captureAccessibilitySnapshot2, findNodeInSnapshot: findNodeInSnapshot2 } = (init_accessibilitySnapshot(), __toCommonJS(exports_accessibilitySnapshot));
        const snap = captureAccessibilitySnapshot2(hwnd);
        if (!snap)
          return false;
        const node = findNodeInSnapshot2(snap.nodes, query);
        if (!node)
          return false;
        const nc = getCachedNcOffset();
        const cx = node.bounds.x + Math.round(node.bounds.w / 2) - nc.dx;
        const cy = node.bounds.y + Math.round(node.bounds.h / 2) - nc.dy;
        const { sendClick: sendClick2, sendText: sendText2 } = (init_windowMessage(), __toCommonJS(exports_windowMessage));
        sendClick2(hwnd, cx, cy, "left");
        await sleep(50);
        return sendText2(hwnd, text);
      } catch {
        return false;
      }
    }
  };
}
async function unhideComputerUseAppsCrossPlatform(_bundleIds) {}
var _ncOffset = null, _ncOffsetHwnd = null;
var init_executorCrossPlatform = __esm(() => {
  init_debug();
  init_sleep();
  init_common();
  init_shared();
  init_platforms();
});

// src/utils/computerUse/executor.ts
function computeTargetDims(logicalW, logicalH, scaleFactor) {
  const physW = Math.round(logicalW * scaleFactor);
  const physH = Math.round(logicalH * scaleFactor);
  return targetImageSize(physW, physH, API_RESIZE_PARAMS);
}
async function readClipboardViaPbpaste() {
  if (process.platform === "win32") {
    const { stdout: stdout2, code: code2 } = await execFileNoThrow("powershell", ["-NoProfile", "-Command", "Get-Clipboard"], {
      useCwd: false
    });
    if (code2 !== 0) {
      throw new Error(`PowerShell Get-Clipboard exited with code ${code2}`);
    }
    return stdout2;
  }
  if (process.platform === "linux") {
    const { stdout: stdout2, code: code2 } = await execFileNoThrow("xclip", ["-selection", "clipboard", "-o"], {
      useCwd: false
    });
    if (code2 !== 0) {
      throw new Error(`xclip exited with code ${code2}`);
    }
    return stdout2;
  }
  const { stdout, code } = await execFileNoThrow("pbpaste", [], {
    useCwd: false
  });
  if (code !== 0) {
    throw new Error(`pbpaste exited with code ${code}`);
  }
  return stdout;
}
async function writeClipboardViaPbcopy(text) {
  if (process.platform === "win32") {
    const { code: code2 } = await execFileNoThrow("powershell", ["-NoProfile", "-Command", `Set-Clipboard -Value '${text.replace(/'/g, "''")}'`], {
      useCwd: false
    });
    if (code2 !== 0) {
      throw new Error(`PowerShell Set-Clipboard exited with code ${code2}`);
    }
    return;
  }
  if (process.platform === "linux") {
    const { code: code2 } = await execFileNoThrow("xclip", ["-selection", "clipboard"], {
      input: text,
      useCwd: false
    });
    if (code2 !== 0) {
      throw new Error(`xclip exited with code ${code2}`);
    }
    return;
  }
  const { code } = await execFileNoThrow("pbcopy", [], {
    input: text,
    useCwd: false
  });
  if (code !== 0) {
    throw new Error(`pbcopy exited with code ${code}`);
  }
}
function isBareEscape(parts) {
  if (parts.length !== 1)
    return false;
  const lower = parts[0].toLowerCase();
  return lower === "escape" || lower === "esc";
}
async function moveAndSettle(input4, x, y) {
  await input4.moveMouse(x, y, false);
  await sleep(MOVE_SETTLE_MS);
}
async function releasePressed(input4, pressed) {
  let k;
  while ((k = pressed.pop()) !== undefined) {
    try {
      await input4.key(k, "release");
    } catch {}
  }
}
async function withModifiers(input4, mods, fn) {
  const pressed = [];
  try {
    for (const m of mods) {
      await input4.key(m, "press");
      pressed.push(m);
    }
    return await fn();
  } finally {
    await releasePressed(input4, pressed);
  }
}
async function typeViaClipboard(input4, text) {
  let saved;
  try {
    saved = await readClipboardViaPbpaste();
  } catch {
    logForDebugging("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    await writeClipboardViaPbcopy(text);
    if (await readClipboardViaPbpaste() !== text) {
      throw new Error("Clipboard write did not round-trip.");
    }
    await input4.keys([process.platform === "darwin" ? "command" : "ctrl", "v"]);
    await sleep(100);
  } finally {
    if (typeof saved === "string") {
      try {
        await writeClipboardViaPbcopy(saved);
      } catch {
        logForDebugging("[computer-use] clipboard restore after paste failed");
      }
    }
  }
}
async function animatedMove(input4, targetX, targetY, mouseAnimationEnabled) {
  if (!mouseAnimationEnabled) {
    await moveAndSettle(input4, targetX, targetY);
    return;
  }
  const start = await input4.mouseLocation();
  const deltaX = targetX - start.x;
  const deltaY = targetY - start.y;
  const distance = Math.hypot(deltaX, deltaY);
  if (distance < 1)
    return;
  const durationSec = Math.min(distance / 2000, 0.5);
  if (durationSec < 0.03) {
    await moveAndSettle(input4, targetX, targetY);
    return;
  }
  const frameRate = 60;
  const frameIntervalMs = 1000 / frameRate;
  const totalFrames = Math.floor(durationSec * frameRate);
  for (let frame = 1;frame <= totalFrames; frame++) {
    const t = frame / totalFrames;
    const eased = 1 - (1 - t) ** 3;
    await input4.moveMouse(Math.round(start.x + deltaX * eased), Math.round(start.y + deltaY * eased), false);
    if (frame < totalFrames) {
      await sleep(frameIntervalMs);
    }
  }
  await sleep(MOVE_SETTLE_MS);
}
function createCliExecutor(opts) {
  if (process.platform !== "darwin") {
    const { createCrossPlatformExecutor: createCrossPlatformExecutor2 } = (init_executorCrossPlatform(), __toCommonJS(exports_executorCrossPlatform));
    return createCrossPlatformExecutor2(opts);
  }
  const cu = requireComputerUseSwift();
  const { getMouseAnimationEnabled, getHideBeforeActionEnabled } = opts;
  const terminalBundleId = getTerminalBundleId();
  const surrogateHost = terminalBundleId ?? CLI_HOST_BUNDLE_ID;
  const withoutTerminal = (allowed) => terminalBundleId === null ? [...allowed] : allowed.filter((id) => id !== terminalBundleId);
  logForDebugging(terminalBundleId ? `[computer-use] terminal ${terminalBundleId} \u2192 surrogate host (hide-exempt, activate-skip, screenshot-excluded)` : "[computer-use] terminal not detected; falling back to sentinel host");
  return {
    capabilities: {
      ...CLI_CU_CAPABILITIES,
      hostBundleId: CLI_HOST_BUNDLE_ID
    },
    async prepareForAction(allowlistBundleIds, displayId) {
      if (!getHideBeforeActionEnabled()) {
        return [];
      }
      return drainRunLoop(async () => {
        try {
          const result = await cu.apps.prepareDisplay(allowlistBundleIds, surrogateHost, displayId);
          if (result.activated) {
            logForDebugging(`[computer-use] prepareForAction: activated ${result.activated}`);
          }
          return result.hidden;
        } catch (err) {
          logForDebugging(`[computer-use] prepareForAction failed; continuing to action: ${errorMessage(err)}`, { level: "warn" });
          return [];
        }
      });
    },
    async previewHideSet(allowlistBundleIds, displayId) {
      return cu.apps.previewHideSet([...allowlistBundleIds, surrogateHost], displayId);
    },
    async getDisplaySize(displayId) {
      return cu.display.getSize(displayId);
    },
    async listDisplays() {
      return cu.display.listAll();
    },
    async findWindowDisplays(bundleIds) {
      return cu.apps.findWindowDisplays(bundleIds);
    },
    async resolvePrepareCapture(opts2) {
      const d = cu.display.getSize(opts2.preferredDisplayId);
      const [targetW, targetH] = computeTargetDims(d.width, d.height, d.scaleFactor);
      const raw = await drainRunLoop(() => cu.resolvePrepareCapture(withoutTerminal(opts2.allowedBundleIds), surrogateHost, SCREENSHOT_JPEG_QUALITY, targetW, targetH, opts2.preferredDisplayId));
      const baseResult = raw;
      return {
        ...raw,
        displayWidth: baseResult.displayWidth ?? baseResult.width,
        displayHeight: baseResult.displayHeight ?? baseResult.height,
        originX: baseResult.originX ?? 0,
        originY: baseResult.originY ?? 0,
        hidden: baseResult.hidden ?? [],
        displayId: baseResult.displayId ?? opts2.preferredDisplayId ?? d.displayId
      };
    },
    async screenshot(opts2) {
      const d = cu.display.getSize(opts2.displayId);
      const [targetW, targetH] = computeTargetDims(d.width, d.height, d.scaleFactor);
      return drainRunLoop(() => cu.screenshot.captureExcluding(withoutTerminal(opts2.allowedBundleIds), SCREENSHOT_JPEG_QUALITY, targetW, targetH, opts2.displayId));
    },
    async zoom(regionLogical, allowedBundleIds, displayId) {
      const d = cu.display.getSize(displayId);
      const [outW, outH] = computeTargetDims(regionLogical.w, regionLogical.h, d.scaleFactor);
      return drainRunLoop(() => cu.screenshot.captureRegion(withoutTerminal(allowedBundleIds), regionLogical.x, regionLogical.y, regionLogical.w, regionLogical.h, outW, outH, SCREENSHOT_JPEG_QUALITY, displayId));
    },
    async key(keySequence, repeat) {
      const input4 = requireComputerUseInput();
      const parts = keySequence.split("+").filter((p) => p.length > 0);
      const isEsc = isBareEscape(parts);
      const n = repeat ?? 1;
      await drainRunLoop(async () => {
        for (let i = 0;i < n; i++) {
          if (i > 0)
            await sleep(8);
          if (isEsc)
            notifyExpectedEscape();
          await input4.keys(parts);
        }
      });
    },
    async holdKey(keyNames, durationMs) {
      const input4 = requireComputerUseInput();
      const pressed = [];
      let orphaned = false;
      try {
        await drainRunLoop(async () => {
          for (const k of keyNames) {
            if (orphaned)
              return;
            if (isBareEscape([k])) {
              notifyExpectedEscape();
            }
            await input4.key(k, "press");
            pressed.push(k);
          }
        });
        await sleep(durationMs);
      } finally {
        orphaned = true;
        await drainRunLoop(() => releasePressed(input4, pressed));
      }
    },
    async type(text, opts2) {
      const input4 = requireComputerUseInput();
      if (opts2.viaClipboard) {
        await drainRunLoop(() => typeViaClipboard(input4, text));
        return;
      }
      await input4.typeText(text);
    },
    readClipboard: readClipboardViaPbpaste,
    writeClipboard: writeClipboardViaPbcopy,
    async moveMouse(x, y) {
      await moveAndSettle(requireComputerUseInput(), x, y);
    },
    async click(x, y, button, count, modifiers) {
      const input4 = requireComputerUseInput();
      await moveAndSettle(input4, x, y);
      if (modifiers && modifiers.length > 0) {
        await drainRunLoop(() => withModifiers(input4, modifiers, () => input4.mouseButton(button, "click", count)));
      } else {
        await input4.mouseButton(button, "click", count);
      }
    },
    async mouseDown() {
      await requireComputerUseInput().mouseButton("left", "press");
    },
    async mouseUp() {
      await requireComputerUseInput().mouseButton("left", "release");
    },
    async getCursorPosition() {
      return requireComputerUseInput().mouseLocation();
    },
    async drag(from, to) {
      const input4 = requireComputerUseInput();
      if (from !== undefined) {
        await moveAndSettle(input4, from.x, from.y);
      }
      await input4.mouseButton("left", "press");
      await sleep(MOVE_SETTLE_MS);
      try {
        await animatedMove(input4, to.x, to.y, getMouseAnimationEnabled());
      } finally {
        await input4.mouseButton("left", "release");
      }
    },
    async scroll(x, y, dx, dy) {
      const input4 = requireComputerUseInput();
      await moveAndSettle(input4, x, y);
      if (dy !== 0) {
        await input4.mouseScroll(dy, "vertical");
      }
      if (dx !== 0) {
        await input4.mouseScroll(dx, "horizontal");
      }
    },
    async getFrontmostApp() {
      const info = requireComputerUseInput().getFrontmostAppInfo();
      if (!info || !info.bundleId)
        return null;
      return { bundleId: info.bundleId, displayName: info.appName };
    },
    async appUnderPoint(x, y) {
      return cu.apps.appUnderPoint(x, y);
    },
    async listInstalledApps() {
      return drainRunLoop(() => cu.apps.listInstalled());
    },
    async getAppIcon(path4) {
      return cu.apps.iconDataUrl(path4) ?? undefined;
    },
    async listRunningApps() {
      return cu.apps.listRunning();
    },
    async openApp(bundleId) {
      await cu.apps.open(bundleId);
    }
  };
}
async function unhideComputerUseApps(bundleIds) {
  if (bundleIds.length === 0)
    return;
  if (process.platform !== "darwin")
    return;
  const cu = requireComputerUseSwift();
  await cu.apps.unhide([...bundleIds]);
}
var SCREENSHOT_JPEG_QUALITY = 0.75, MOVE_SETTLE_MS = 50;
var init_executor = __esm(() => {
  init_src();
  init_debug();
  init_errors();
  init_execFileNoThrow();
  init_sleep();
  init_common();
  init_drainRunLoop();
  init_escHotkey();
  init_inputLoader();
  init_swiftLoader();
});

export { createCliExecutor, unhideComputerUseApps, init_executor };
