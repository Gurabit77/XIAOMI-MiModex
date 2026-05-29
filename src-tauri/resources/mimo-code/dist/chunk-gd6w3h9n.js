// @bun
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/utils/withResolvers.ts
function withResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
var init_withResolvers = () => {};

// packages/@ant/computer-use-swift/src/backends/darwin.ts
var exports_darwin = {};
__export(exports_darwin, {
  screenshot: () => screenshot,
  display: () => display,
  apps: () => apps
});
import { readFileSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
function jxaSync(script) {
  const result = Bun.spawnSync({
    cmd: ["osascript", "-l", "JavaScript", "-e", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
async function osascript(script) {
  const proc = Bun.spawn(["osascript", "-e", script], {
    stdout: "pipe",
    stderr: "pipe"
  });
  const text = await new Response(proc.stdout).text();
  await proc.exited;
  return text.trim();
}
async function jxa(script) {
  const proc = Bun.spawn(["osascript", "-l", "JavaScript", "-e", script], {
    stdout: "pipe",
    stderr: "pipe"
  });
  const text = await new Response(proc.stdout).text();
  await proc.exited;
  return text.trim();
}
async function captureScreenToBase64(args) {
  const tmpFile = join(tmpdir(), `cu-screenshot-${Date.now()}.png`);
  const proc = Bun.spawn(["screencapture", ...args, tmpFile], {
    stdout: "pipe",
    stderr: "pipe"
  });
  await proc.exited;
  try {
    const buf = readFileSync(tmpFile);
    const base64 = buf.toString("base64");
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { base64, width, height };
  } finally {
    try {
      unlinkSync(tmpFile);
    } catch {}
  }
}
var display, apps, screenshot;
var init_darwin = __esm(() => {
  display = {
    getSize(displayId) {
      const all = this.listAll();
      if (displayId !== undefined) {
        const found = all.find((d) => d.displayId === displayId);
        if (found)
          return found;
      }
      return all[0] ?? { width: 1920, height: 1080, scaleFactor: 2, displayId: 1 };
    },
    listAll() {
      try {
        const raw = jxaSync(`
        ObjC.import("CoreGraphics");
        var displays = $.CGDisplayCopyAllDisplayModes ? [] : [];
        var active = $.CGGetActiveDisplayList(10, null, Ref());
        var countRef = Ref();
        $.CGGetActiveDisplayList(0, null, countRef);
        var count = countRef[0];
        var idBuf = Ref();
        $.CGGetActiveDisplayList(count, idBuf, countRef);
        var result = [];
        for (var i = 0; i < count; i++) {
          var did = idBuf[i];
          var w = $.CGDisplayPixelsWide(did);
          var h = $.CGDisplayPixelsHigh(did);
          var mode = $.CGDisplayCopyDisplayMode(did);
          var pw = $.CGDisplayModeGetPixelWidth(mode);
          var sf = pw > 0 && w > 0 ? pw / w : 2;
          result.push({width: w, height: h, scaleFactor: sf, displayId: did});
        }
        JSON.stringify(result);
      `);
        return JSON.parse(raw).map((d) => ({
          width: Number(d.width),
          height: Number(d.height),
          scaleFactor: Number(d.scaleFactor),
          displayId: Number(d.displayId)
        }));
      } catch {
        try {
          const raw = jxaSync(`
          ObjC.import("AppKit");
          var screens = $.NSScreen.screens;
          var result = [];
          for (var i = 0; i < screens.count; i++) {
            var s = screens.objectAtIndex(i);
            var frame = s.frame;
            var desc = s.deviceDescription;
            var screenNumber = desc.objectForKey($("NSScreenNumber")).intValue;
            var backingFactor = s.backingScaleFactor;
            result.push({
              width: Math.round(frame.size.width),
              height: Math.round(frame.size.height),
              scaleFactor: backingFactor,
              displayId: screenNumber
            });
          }
          JSON.stringify(result);
        `);
          return JSON.parse(raw).map((d) => ({
            width: Number(d.width),
            height: Number(d.height),
            scaleFactor: Number(d.scaleFactor),
            displayId: Number(d.displayId)
          }));
        } catch {
          return [{ width: 1920, height: 1080, scaleFactor: 2, displayId: 1 }];
        }
      }
    }
  };
  apps = {
    async prepareDisplay(_allowlistBundleIds, _surrogateHost, _displayId) {
      return { activated: "", hidden: [] };
    },
    async previewHideSet(_bundleIds, _displayId) {
      return [];
    },
    async findWindowDisplays(bundleIds) {
      return bundleIds.map((bundleId) => ({ bundleId, displayIds: [1] }));
    },
    async appUnderPoint(_x, _y) {
      try {
        const result = await jxa(`
        ObjC.import("CoreGraphics");
        ObjC.import("AppKit");
        var pt = $.CGPointMake(${_x}, ${_y});
        var app = $.NSWorkspace.sharedWorkspace.frontmostApplication;
        JSON.stringify({bundleId: app.bundleIdentifier.js, displayName: app.localizedName.js});
      `);
        return JSON.parse(result);
      } catch {
        return null;
      }
    },
    async listInstalled() {
      try {
        const dirs = ["/Applications", "~/Applications", "/System/Applications"];
        const allApps = [];
        for (const dir of dirs) {
          const expanded = dir.startsWith("~") ? join(process.env.HOME ?? "~", dir.slice(1)) : dir;
          const proc = Bun.spawn(["bash", "-c", `for f in "${expanded}"/*.app; do [ -d "$f" ] || continue; bid=$(mdls -name kMDItemCFBundleIdentifier "$f" 2>/dev/null | sed 's/.*= "//;s/"//'); name=$(basename "$f" .app); echo "$f|$name|$bid"; done`], { stdout: "pipe", stderr: "pipe" });
          const text = await new Response(proc.stdout).text();
          await proc.exited;
          for (const line of text.split(`
`).filter(Boolean)) {
            const [path, displayName, bundleId] = line.split("|", 3);
            if (path && displayName && bundleId && bundleId !== "(null)") {
              allApps.push({ bundleId, displayName, path });
            }
          }
        }
        const seen = new Set;
        return allApps.filter((app) => {
          if (seen.has(app.bundleId))
            return false;
          seen.add(app.bundleId);
          return true;
        });
      } catch {
        return [];
      }
    },
    iconDataUrl(_path) {
      return null;
    },
    listRunning() {
      try {
        const raw = jxaSync(`
        var apps = Application("System Events").applicationProcesses.whose({backgroundOnly: false});
        var result = [];
        for (var i = 0; i < apps.length; i++) {
          try {
            var a = apps[i];
            result.push({bundleId: a.bundleIdentifier(), displayName: a.name()});
          } catch(e) {}
        }
        JSON.stringify(result);
      `);
        return JSON.parse(raw);
      } catch {
        return [];
      }
    },
    async open(bundleId) {
      await osascript(`tell application id "${bundleId}" to activate`);
    },
    async unhide(bundleIds) {
      for (const bundleId of bundleIds) {
        await osascript(`
        tell application "System Events"
          set visible of application process (name of application process whose bundle identifier is "${bundleId}") to true
        end tell
      `);
      }
    }
  };
  screenshot = {
    async captureExcluding(_allowedBundleIds, _quality, _targetW, _targetH, displayId) {
      const args = ["-x"];
      if (displayId !== undefined)
        args.push("-D", String(displayId));
      return captureScreenToBase64(args);
    },
    async captureRegion(_allowedBundleIds, x, y, w, h, _outW, _outH, _quality, displayId) {
      const args = ["-x", "-R", `${x},${y},${w},${h}`];
      if (displayId !== undefined)
        args.push("-D", String(displayId));
      return captureScreenToBase64(args);
    },
    captureWindowTarget(_titleOrHwnd) {
      return null;
    }
  };
});

// src/utils/computerUse/win32/windowEnum.ts
var exports_windowEnum = {};
__export(exports_windowEnum, {
  listWindows: () => listWindows
});
function listWindows() {
  const result = Bun.spawnSync({
    cmd: [
      "powershell",
      "-NoProfile",
      "-NonInteractive",
      "-Command",
      ENUM_WINDOWS_PS
    ],
    stdout: "pipe",
    stderr: "pipe"
  });
  const raw = new TextDecoder().decode(result.stdout).trim();
  if (!raw)
    return [];
  return raw.split(`
`).filter(Boolean).map((line) => {
    const trimmed = line.trim();
    const firstPipe = trimmed.indexOf("|");
    const secondPipe = trimmed.indexOf("|", firstPipe + 1);
    if (firstPipe === -1 || secondPipe === -1)
      return null;
    const hwnd = trimmed.slice(0, firstPipe);
    const pid = Number(trimmed.slice(firstPipe + 1, secondPipe));
    const title = trimmed.slice(secondPipe + 1);
    if (!hwnd || isNaN(pid) || !title)
      return null;
    return { hwnd, pid, title };
  }).filter((item) => item !== null);
}
var ENUM_WINDOWS_PS = `
Add-Type @'
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;
public class WinEnum {
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

    [DllImport("user32.dll")]
    public static extern bool EnumWindows(EnumWindowsProc lpEnumFunc, IntPtr lParam);
    [DllImport("user32.dll")]
    public static extern bool IsWindowVisible(IntPtr hWnd);
    [DllImport("user32.dll", CharSet=CharSet.Unicode)]
    public static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);
    [DllImport("user32.dll")]
    public static extern int GetWindowTextLength(IntPtr hWnd);
    [DllImport("user32.dll")]
    public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint processId);

    public static List<string> results = new List<string>();

    public static void Run() {
        results.Clear();
        EnumWindows(delegate(IntPtr hWnd, IntPtr lParam) {
            if (!IsWindowVisible(hWnd)) return true;
            int len = GetWindowTextLength(hWnd);
            if (len == 0) return true;
            StringBuilder sb = new StringBuilder(len + 1);
            GetWindowText(hWnd, sb, sb.Capacity);
            string title = sb.ToString();
            if (string.IsNullOrWhiteSpace(title)) return true;
            uint pid = 0;
            GetWindowThreadProcessId(hWnd, out pid);
            results.Add(hWnd.ToInt64() + "|" + pid + "|" + title);
            return true;
        }, IntPtr.Zero);
    }
}
'@
[WinEnum]::Run()
[WinEnum]::results | ForEach-Object { $_ }
`;
var init_windowEnum = () => {};

// src/utils/computerUse/win32/windowCapture.ts
function parseCaptureOutput(raw) {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "NOT_FOUND" || trimmed === "INVALID_SIZE") {
    return null;
  }
  const firstComma = trimmed.indexOf(",");
  const secondComma = trimmed.indexOf(",", firstComma + 1);
  if (firstComma === -1 || secondComma === -1)
    return null;
  const width = Number(trimmed.slice(0, firstComma));
  const height = Number(trimmed.slice(firstComma + 1, secondComma));
  const base64 = trimmed.slice(secondComma + 1);
  if (!width || !height || !base64)
    return null;
  return { base64, width, height };
}
function runPs(script) {
  const result = Bun.spawnSync({
    cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
function captureWindow(title) {
  const escaped = title.replace(/'/g, "''");
  const script = `${CAPTURE_BY_TITLE_PS}
[WinCap]::Capture('${escaped}')`;
  const raw = runPs(script);
  return parseCaptureOutput(raw);
}
function captureWindowByHwnd(hwnd) {
  const script = `${CAPTURE_BY_HWND_PS}
[WinCapH]::Capture([IntPtr]::new(${hwnd}))`;
  const raw = runPs(script);
  return parseCaptureOutput(raw);
}
var CAPTURE_BY_TITLE_PS = `
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing @'
using System;
using System.Runtime.InteropServices;
using System.Drawing;
using System.Drawing.Imaging;
public class WinCap {
    [DllImport("user32.dll", CharSet=CharSet.Unicode)]
    public static extern IntPtr FindWindow(string c, string t);
    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr h, out RECT r);
    [DllImport("user32.dll")]
    public static extern bool PrintWindow(IntPtr h, IntPtr hdc, uint f);
    [StructLayout(LayoutKind.Sequential)]
    public struct RECT { public int L, T, R, B; }

    public static string Capture(string title) {
        IntPtr hwnd = FindWindow(null, title);
        if (hwnd == IntPtr.Zero) return "NOT_FOUND";
        RECT r; GetWindowRect(hwnd, out r);
        int w = r.R - r.L; int h = r.B - r.T;
        if (w <= 0 || h <= 0) return "INVALID_SIZE";
        Bitmap bmp = new Bitmap(w, h);
        Graphics g = Graphics.FromImage(bmp);
        IntPtr hdc = g.GetHdc();
        PrintWindow(hwnd, hdc, 2);
        g.ReleaseHdc(hdc); g.Dispose();
        var ms = new System.IO.MemoryStream();
        bmp.Save(ms, ImageFormat.Png);
        bmp.Dispose();
        return w + "," + h + "," + Convert.ToBase64String(ms.ToArray());
    }
}
'@
`, CAPTURE_BY_HWND_PS = `
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing @'
using System;
using System.Runtime.InteropServices;
using System.Drawing;
using System.Drawing.Imaging;
public class WinCapH {
    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr h, out RECT r);
    [DllImport("user32.dll")]
    public static extern bool PrintWindow(IntPtr h, IntPtr hdc, uint f);
    [DllImport("user32.dll")]
    public static extern bool IsWindow(IntPtr hWnd);
    [StructLayout(LayoutKind.Sequential)]
    public struct RECT { public int L, T, R, B; }

    public static string Capture(IntPtr hwnd) {
        if (!IsWindow(hwnd)) return "NOT_FOUND";
        RECT r; GetWindowRect(hwnd, out r);
        int w = r.R - r.L; int h = r.B - r.T;
        if (w <= 0 || h <= 0) return "INVALID_SIZE";
        Bitmap bmp = new Bitmap(w, h);
        Graphics g = Graphics.FromImage(bmp);
        IntPtr hdc = g.GetHdc();
        PrintWindow(hwnd, hdc, 2);
        g.ReleaseHdc(hdc); g.Dispose();
        var ms = new System.IO.MemoryStream();
        bmp.Save(ms, ImageFormat.Png);
        bmp.Dispose();
        return w + "," + h + "," + Convert.ToBase64String(ms.ToArray());
    }
}
'@
`;
var init_windowCapture = () => {};

// packages/@ant/computer-use-swift/src/backends/win32.ts
var exports_win32 = {};
__export(exports_win32, {
  screenshot: () => screenshot2,
  display: () => display2,
  apps: () => apps2
});
function ps(script) {
  const result = Bun.spawnSync({
    cmd: ["powershell", "-NoProfile", "-NonInteractive", "-Command", script],
    stdout: "pipe",
    stderr: "pipe"
  });
  return new TextDecoder().decode(result.stdout).trim();
}
async function psAsync(script) {
  const proc = Bun.spawn(["powershell", "-NoProfile", "-NonInteractive", "-Command", script], { stdout: "pipe", stderr: "pipe" });
  const out = await new Response(proc.stdout).text();
  await proc.exited;
  return out.trim();
}
var display2, apps2, screenshot2;
var init_win32 = __esm(() => {
  init_windowEnum();
  init_windowCapture();
  display2 = {
    getSize(displayId) {
      const all = this.listAll();
      if (displayId !== undefined) {
        const found = all.find((d) => d.displayId === displayId);
        if (found)
          return found;
      }
      return all[0] ?? { width: 1920, height: 1080, scaleFactor: 1, displayId: 0 };
    },
    listAll() {
      try {
        const raw = ps(`
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
          const [w, h, id, primary] = entry.split(",");
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
    }
  };
  apps2 = {
    async prepareDisplay(_allowlistBundleIds, _surrogateHost, _displayId) {
      return { activated: "", hidden: [] };
    },
    async previewHideSet(_bundleIds, _displayId) {
      return [];
    },
    async findWindowDisplays(bundleIds) {
      return bundleIds.map((bundleId) => ({ bundleId, displayIds: [0] }));
    },
    async appUnderPoint(_x, _y) {
      try {
        const out = ps(`
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class WinPt {
  [StructLayout(LayoutKind.Sequential)] public struct POINT { public int X; public int Y; }
  [DllImport("user32.dll")] public static extern IntPtr WindowFromPoint(POINT p);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid);
}
'@
$pt = New-Object WinPt+POINT
$pt.X = ${_x}; $pt.Y = ${_y}
$hwnd = [WinPt]::WindowFromPoint($pt)
$pid = [uint32]0
[WinPt]::GetWindowThreadProcessId($hwnd, [ref]$pid) | Out-Null
$proc = Get-Process -Id $pid -ErrorAction SilentlyContinue
"$($proc.MainModule.FileName)|$($proc.ProcessName)"
`);
        if (!out || !out.includes("|"))
          return null;
        const [exePath, name] = out.split("|", 2);
        return { bundleId: exePath, displayName: name };
      } catch {
        return null;
      }
    },
    async listInstalled() {
      try {
        const raw = await psAsync(`
$apps = @()
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
$apps | Select-Object -Unique | Select-Object -First 200
`);
        return raw.split(`
`).filter(Boolean).map((line) => {
          const [name, path, id] = line.split("|", 3);
          return {
            bundleId: id ?? name ?? "",
            displayName: name ?? "",
            path: path ?? ""
          };
        });
      } catch {
        return [];
      }
    },
    iconDataUrl(_path) {
      return null;
    },
    listRunning() {
      try {
        const windows = listWindows();
        return windows.map((w) => ({
          bundleId: String(w.hwnd),
          displayName: w.title
        }));
      } catch {
        return [];
      }
    },
    async open(name) {
      const escaped = name.replace(/'/g, "''");
      await psAsync(`
if (Test-Path '${escaped}') {
  Start-Process '${escaped}'
} else {
  Start-Process -FilePath '${escaped}' -ErrorAction SilentlyContinue
}`);
    },
    async unhide(bundleIds) {
      for (const name of bundleIds) {
        await psAsync(`
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class WinShow {
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmd);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
}
'@
$proc = Get-Process -Name "${name}" -ErrorAction SilentlyContinue | Select-Object -First 1
if ($proc) { [WinShow]::ShowWindow($proc.MainWindowHandle, 9) | Out-Null; [WinShow]::SetForegroundWindow($proc.MainWindowHandle) | Out-Null }
`);
      }
    }
  };
  screenshot2 = {
    async captureExcluding(_allowedBundleIds, _quality, _targetW, _targetH, displayId) {
      const raw = await psAsync(`
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$screen = if (${displayId ?? -1} -ge 0) { [System.Windows.Forms.Screen]::AllScreens[${displayId ?? 0}] } else { [System.Windows.Forms.Screen]::PrimaryScreen }
$bounds = $screen.Bounds
$bmp = New-Object System.Drawing.Bitmap($bounds.Width, $bounds.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($bounds.Location, [System.Drawing.Point]::Empty, $bounds.Size)
$g.Dispose()
$ms = New-Object System.IO.MemoryStream
$bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$bytes = $ms.ToArray()
$ms.Dispose()
"$($bounds.Width),$($bounds.Height)," + [Convert]::ToBase64String($bytes)
`);
      const firstComma = raw.indexOf(",");
      const secondComma = raw.indexOf(",", firstComma + 1);
      const width = Number(raw.slice(0, firstComma));
      const height = Number(raw.slice(firstComma + 1, secondComma));
      const base64 = raw.slice(secondComma + 1);
      return { base64, width, height };
    },
    async captureRegion(_allowedBundleIds, x, y, w, h, _outW, _outH, _quality, _displayId) {
      const raw = await psAsync(`
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap(${w}, ${h})
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen(${x}, ${y}, 0, 0, (New-Object System.Drawing.Size(${w}, ${h})))
$g.Dispose()
$ms = New-Object System.IO.MemoryStream
$bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$bytes = $ms.ToArray()
$ms.Dispose()
"${w},${h}," + [Convert]::ToBase64String($bytes)
`);
      const firstComma = raw.indexOf(",");
      const secondComma = raw.indexOf(",", firstComma + 1);
      const base64 = raw.slice(secondComma + 1);
      return { base64, width: w, height: h };
    },
    captureWindowTarget(titleOrHwnd) {
      if (typeof titleOrHwnd === "number") {
        return captureWindowByHwnd(titleOrHwnd);
      }
      return captureWindow(titleOrHwnd);
    }
  };
});

// packages/@ant/computer-use-swift/src/backends/linux.ts
var exports_linux = {};
__export(exports_linux, {
  screenshot: () => screenshot3,
  display: () => display3,
  apps: () => apps3
});
function run(cmd) {
  const result = Bun.spawnSync({
    cmd,
    stdout: "pipe",
    stderr: "pipe"
  });
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
var display3, apps3, SCREENSHOT_PATH = "/tmp/cu-screenshot.png", screenshot3;
var init_linux = __esm(() => {
  display3 = {
    getSize(displayId) {
      const all = this.listAll();
      if (displayId !== undefined) {
        const found = all.find((d) => d.displayId === displayId);
        if (found)
          return found;
      }
      return all[0] ?? { width: 1920, height: 1080, scaleFactor: 1, displayId: 0 };
    },
    listAll() {
      try {
        const raw = run(["xrandr", "--query"]);
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
    }
  };
  apps3 = {
    async prepareDisplay(_allowlistBundleIds, _surrogateHost, _displayId) {
      return { activated: "", hidden: [] };
    },
    async previewHideSet(_bundleIds, _displayId) {
      return [];
    },
    async findWindowDisplays(bundleIds) {
      return bundleIds.map((bundleId) => ({ bundleId, displayIds: [0] }));
    },
    async appUnderPoint(x, y) {
      try {
        const out = run(["xdotool", "mousemove", "--sync", String(x), String(y), "getmouselocation", "--shell"]);
        const windowMatch = out.match(/WINDOW=(\d+)/);
        if (!windowMatch)
          return null;
        const windowId = windowMatch[1];
        const pidStr = run(["xdotool", "getwindowpid", windowId]);
        if (!pidStr)
          return null;
        let exePath = "";
        try {
          exePath = run(["readlink", "-f", `/proc/${pidStr}/exe`]);
        } catch {}
        let appName = "";
        try {
          appName = run(["cat", `/proc/${pidStr}/comm`]);
        } catch {}
        if (!exePath && !appName)
          return null;
        return { bundleId: exePath || pidStr, displayName: appName || "unknown" };
      } catch {
        return null;
      }
    },
    async listInstalled() {
      try {
        const dirs = ["/usr/share/applications", "/usr/local/share/applications", `${process.env.HOME}/.local/share/applications`];
        const apps4 = [];
        for (const dir of dirs) {
          let files;
          try {
            files = run(["find", dir, "-name", "*.desktop", "-maxdepth", "1"]);
          } catch {
            continue;
          }
          for (const filepath of files.split(`
`).filter(Boolean)) {
            try {
              const content = run(["cat", filepath]);
              const nameMatch = content.match(/^Name=(.+)$/m);
              const execMatch = content.match(/^Exec=(.+)$/m);
              const noDisplay = content.match(/^NoDisplay=true$/m);
              if (noDisplay)
                continue;
              const name = nameMatch?.[1] ?? "";
              const exec = execMatch?.[1] ?? "";
              if (!name)
                continue;
              apps4.push({
                bundleId: filepath.split("/").pop()?.replace(".desktop", "") ?? "",
                displayName: name,
                path: exec.split(/\s+/)[0] ?? ""
              });
            } catch {}
          }
        }
        return apps4.slice(0, 200);
      } catch {
        return [];
      }
    },
    iconDataUrl(_path) {
      return null;
    },
    listRunning() {
      try {
        if (commandExists("wmctrl")) {
          const raw2 = run(["wmctrl", "-l", "-p"]);
          const apps5 = [];
          for (const line of raw2.split(`
`).filter(Boolean)) {
            const parts = line.split(/\s+/);
            const pid = parts[2];
            if (!pid || pid === "0")
              continue;
            let exePath = "";
            try {
              exePath = run(["readlink", "-f", `/proc/${pid}/exe`]);
            } catch {}
            let appName = "";
            try {
              appName = run(["cat", `/proc/${pid}/comm`]);
            } catch {}
            if (appName) {
              apps5.push({ bundleId: exePath || pid, displayName: appName });
            }
          }
          const seen = new Set;
          return apps5.filter((a) => {
            if (seen.has(a.bundleId))
              return false;
            seen.add(a.bundleId);
            return true;
          }).slice(0, 50);
        }
        const raw = run(["ps", "-eo", "pid,comm", "--no-headers"]);
        const apps4 = [];
        for (const line of raw.split(`
`).filter(Boolean).slice(0, 50)) {
          const match = line.trim().match(/^(\d+)\s+(.+)$/);
          if (match) {
            apps4.push({ bundleId: match[1], displayName: match[2] });
          }
        }
        return apps4;
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
    async unhide(bundleIds) {
      for (const id of bundleIds) {
        try {
          if (commandExists("wmctrl") && id.startsWith("0x")) {
            await runAsync(["wmctrl", "-i", "-R", id]);
          } else {
            await runAsync(["xdotool", "search", "--name", id, "windowactivate"]);
          }
        } catch {}
      }
    }
  };
  screenshot3 = {
    async captureExcluding(_allowedBundleIds, _quality, _targetW, _targetH, _displayId) {
      try {
        await runAsync(["scrot", "-o", SCREENSHOT_PATH]);
        const file = Bun.file(SCREENSHOT_PATH);
        const buffer = await file.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        const size = display3.getSize(_displayId);
        return { base64, width: size.width, height: size.height };
      } catch {
        return { base64: "", width: 0, height: 0 };
      }
    },
    async captureRegion(_allowedBundleIds, x, y, w, h, _outW, _outH, _quality, _displayId) {
      try {
        await runAsync(["scrot", "-a", `${x},${y},${w},${h}`, "-o", SCREENSHOT_PATH]);
        const file = Bun.file(SCREENSHOT_PATH);
        const buffer = await file.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        return { base64, width: w, height: h };
      } catch {
        return { base64: "", width: 0, height: 0 };
      }
    },
    captureWindowTarget(_titleOrHwnd) {
      return null;
    }
  };
});

// packages/@ant/computer-use-swift/src/index.ts
var exports_src = {};
__export(exports_src, {
  ComputerUseAPI: () => ComputerUseAPI
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

class ComputerUseAPI {
  apps = backend?.apps ?? {
    async prepareDisplay() {
      return { activated: "", hidden: [] };
    },
    async previewHideSet() {
      return [];
    },
    async findWindowDisplays(ids) {
      return ids.map((b) => ({ bundleId: b, displayIds: [] }));
    },
    async appUnderPoint() {
      return null;
    },
    async listInstalled() {
      return [];
    },
    iconDataUrl() {
      return null;
    },
    listRunning() {
      return [];
    },
    async open() {
      throw new Error("@ant/computer-use-swift: macOS only");
    },
    async unhide() {}
  };
  display = backend?.display ?? {
    getSize() {
      throw new Error("@ant/computer-use-swift: macOS only");
    },
    listAll() {
      throw new Error("@ant/computer-use-swift: macOS only");
    }
  };
  screenshot = backend?.screenshot ?? {
    async captureExcluding() {
      throw new Error("@ant/computer-use-swift: macOS only");
    },
    async captureRegion() {
      throw new Error("@ant/computer-use-swift: macOS only");
    }
  };
  async resolvePrepareCapture(allowedBundleIds, _surrogateHost, quality, targetW, targetH, displayId) {
    return this.screenshot.captureExcluding(allowedBundleIds, quality, targetW, targetH, displayId);
  }
}
var backend;
var init_src = __esm(() => {
  backend = loadBackend();
});

// src/utils/computerUse/swiftLoader.ts
function requireComputerUseSwift() {
  if (cached)
    return cached;
  const mod = (init_src(), __toCommonJS(exports_src));
  if (mod.ComputerUseAPI && typeof mod.ComputerUseAPI === "function") {
    cached = new mod.ComputerUseAPI;
  } else {
    cached = mod;
  }
  return cached;
}
var cached;
var init_swiftLoader = () => {};

// src/utils/computerUse/drainRunLoop.ts
function drainTick(cu) {
  cu?._drainMainRunLoop?.();
}
function retain() {
  pending++;
  if (pump === undefined) {
    pump = setInterval(drainTick, 1, requireComputerUseSwift());
    logForDebugging("[drainRunLoop] pump started", { level: "verbose" });
  }
}
function release() {
  pending--;
  if (pending <= 0 && pump !== undefined) {
    clearInterval(pump);
    pump = undefined;
    logForDebugging("[drainRunLoop] pump stopped", { level: "verbose" });
    pending = 0;
  }
}
function timeoutReject(reject) {
  reject(new Error(`computer-use native call exceeded ${TIMEOUT_MS}ms`));
}
async function drainRunLoop(fn) {
  if (process.platform !== "darwin")
    return fn();
  retain();
  let timer;
  try {
    const work = fn();
    work.catch(() => {});
    const timeout = withResolvers();
    timer = setTimeout(timeoutReject, TIMEOUT_MS, timeout.reject);
    return await Promise.race([work, timeout.promise]);
  } finally {
    clearTimeout(timer);
    release();
  }
}
var pump, pending = 0, TIMEOUT_MS = 30000, retainPump, releasePump;
var init_drainRunLoop = __esm(() => {
  init_debug();
  init_withResolvers();
  init_swiftLoader();
  retainPump = retain;
  releasePump = release;
});

// src/utils/computerUse/escHotkey.ts
function registerEscHotkey(onEscape) {
  if (process.platform !== "darwin")
    return false;
  if (registered)
    return true;
  const cu = requireComputerUseSwift();
  if (!cu.hotkey?.registerEscape(onEscape)) {
    logForDebugging("[cu-esc] registerEscape returned false", { level: "warn" });
    return false;
  }
  retainPump();
  registered = true;
  logForDebugging("[cu-esc] registered");
  return true;
}
function unregisterEscHotkey() {
  if (!registered)
    return;
  try {
    requireComputerUseSwift().hotkey?.unregister();
  } finally {
    releasePump();
    registered = false;
    logForDebugging("[cu-esc] unregistered");
  }
}
function notifyExpectedEscape() {
  if (!registered)
    return;
  requireComputerUseSwift().hotkey?.notifyExpectedEscape();
}
var registered = false;
var init_escHotkey = __esm(() => {
  init_debug();
  init_drainRunLoop();
  init_swiftLoader();
});

export { withResolvers, init_withResolvers, listWindows, exports_windowEnum, init_windowEnum, requireComputerUseSwift, init_swiftLoader, drainRunLoop, init_drainRunLoop, registerEscHotkey, unregisterEscHotkey, notifyExpectedEscape, init_escHotkey };
