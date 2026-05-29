// @bun
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Server,
  init_server,
  init_types
} from "./chunk-4cp6193g.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// packages/@ant/computer-use-mcp/src/imageResize.ts
function nTokensForPx(px, pxPerToken) {
  return Math.floor((px - 1) / pxPerToken) + 1;
}
function nTokensForImg(width, height, pxPerToken) {
  return nTokensForPx(width, pxPerToken) * nTokensForPx(height, pxPerToken);
}
function targetImageSize(width, height, params) {
  const { pxPerToken, maxTargetPx, maxTargetTokens } = params;
  if (width <= maxTargetPx && height <= maxTargetPx && nTokensForImg(width, height, pxPerToken) <= maxTargetTokens) {
    return [width, height];
  }
  if (height > width) {
    const [w, h] = targetImageSize(height, width, params);
    return [h, w];
  }
  const aspectRatio = width / height;
  let upperBoundWidth = width;
  let lowerBoundWidth = 1;
  for (;; ) {
    if (lowerBoundWidth + 1 === upperBoundWidth) {
      return [
        lowerBoundWidth,
        Math.max(Math.round(lowerBoundWidth / aspectRatio), 1)
      ];
    }
    const middleWidth = Math.floor((lowerBoundWidth + upperBoundWidth) / 2);
    const middleHeight = Math.max(Math.round(middleWidth / aspectRatio), 1);
    if (middleWidth <= maxTargetPx && nTokensForImg(middleWidth, middleHeight, pxPerToken) <= maxTargetTokens) {
      lowerBoundWidth = middleWidth;
    } else {
      upperBoundWidth = middleWidth;
    }
  }
}
var API_RESIZE_PARAMS;
var init_imageResize = __esm(() => {
  API_RESIZE_PARAMS = {
    pxPerToken: 28,
    maxTargetPx: 1568,
    maxTargetTokens: 1568
  };
});

// packages/@ant/computer-use-mcp/src/tools.ts
function buildComputerUseTools(caps, coordinateMode, installedAppNames) {
  const coord = COORD_DESC[coordinateMode];
  const installedAppsHint = installedAppNames && installedAppNames.length > 0 ? ` Available applications on this machine: ${installedAppNames.join(", ")}.` : "";
  const coordinateTuple = {
    type: "array",
    items: { type: "number" },
    minItems: 2,
    maxItems: 2,
    description: `(x, y): ${coord.x}`
  };
  const clickModifierText = {
    type: "string",
    description: 'Modifier keys to hold during the click (e.g. "shift", "ctrl+shift"). Supports the same syntax as the key tool.'
  };
  const screenshotDesc = caps.screenshotFiltering === "native" ? "Take a screenshot of the primary display. Applications not in the session allowlist are excluded at the compositor level \u2014 only granted apps and the desktop are visible." : "Take a screenshot of the primary display. On this platform, screenshots are NOT filtered \u2014 all open windows are visible. Input actions targeting apps not in the session allowlist are rejected.";
  return [
    {
      name: "request_access",
      description: "Request user permission to control a set of applications for this session. Must be called before any other tool in this server. " + "The user sees a single dialog listing all requested apps and either allows the whole set or denies it. " + "Call this again mid-session to add more apps; previously granted apps remain granted. " + "Returns the granted apps, denied apps, and screenshot filtering capability.",
      inputSchema: {
        type: "object",
        properties: {
          apps: {
            type: "array",
            items: { type: "string" },
            description: 'Application display names (e.g. "Slack", "Calendar") or bundle identifiers (e.g. "com.tinyspeck.slackmacgap"). Display names are resolved case-insensitively against installed apps.' + installedAppsHint
          },
          reason: {
            type: "string",
            description: "One-sentence explanation shown to the user in the approval dialog. Explain the task, not the mechanism."
          },
          clipboardRead: {
            type: "boolean",
            description: "Also request permission to read the user's clipboard (separate checkbox in the dialog)."
          },
          clipboardWrite: {
            type: "boolean",
            description: "Also request permission to write the user's clipboard. When granted, multi-line `type` calls use the clipboard fast path."
          },
          systemKeyCombos: {
            type: "boolean",
            description: "Also request permission to send system-level key combos (quit app, switch app, lock screen). Without this, those specific combos are blocked."
          }
        },
        required: ["apps", "reason"]
      }
    },
    {
      name: "screenshot",
      description: screenshotDesc + " Returns an error if the allowlist is empty. The returned image is what subsequent click coordinates are relative to.",
      inputSchema: {
        type: "object",
        properties: {
          save_to_disk: {
            type: "boolean",
            description: "Save the image to disk so it can be attached to a message for the user. Returns the saved path in the tool result. Only set this when you intend to share the image \u2014 screenshots you're just looking at don't need saving."
          }
        },
        required: []
      }
    },
    {
      name: "zoom",
      description: "Take a higher-resolution screenshot of a specific region of the last full-screen screenshot. Use this liberally to inspect small text, button labels, or fine UI details that are hard to read in the downsampled full-screen image. " + "IMPORTANT: Coordinates in subsequent click calls always refer to the full-screen screenshot, never the zoomed image. This tool is read-only for inspecting detail.",
      inputSchema: {
        type: "object",
        properties: {
          region: {
            type: "array",
            items: { type: "integer" },
            minItems: 4,
            maxItems: 4,
            description: "(x0, y0, x1, y1): Rectangle to zoom into, in the coordinate space of the most recent full-screen screenshot. x0,y0 = top-left, x1,y1 = bottom-right."
          },
          save_to_disk: {
            type: "boolean",
            description: "Save the image to disk so it can be attached to a message for the user. Returns the saved path in the tool result. Only set this when you intend to share the image."
          }
        },
        required: ["region"]
      }
    },
    {
      name: "left_click",
      description: `Left-click at the given coordinates. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple,
          text: clickModifierText
        },
        required: ["coordinate"]
      }
    },
    {
      name: "double_click",
      description: `Double-click at the given coordinates. Selects a word in most text editors. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple,
          text: clickModifierText
        },
        required: ["coordinate"]
      }
    },
    {
      name: "triple_click",
      description: `Triple-click at the given coordinates. Selects a line in most text editors. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple,
          text: clickModifierText
        },
        required: ["coordinate"]
      }
    },
    {
      name: "right_click",
      description: `Right-click at the given coordinates. Opens a context menu in most applications. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple,
          text: clickModifierText
        },
        required: ["coordinate"]
      }
    },
    {
      name: "middle_click",
      description: `Middle-click (scroll-wheel click) at the given coordinates. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple,
          text: clickModifierText
        },
        required: ["coordinate"]
      }
    },
    {
      name: "type",
      description: `Type text into whatever currently has keyboard focus. ${FRONTMOST_GATE_DESC} Newlines are supported. For keyboard shortcuts use \`key\` instead.`,
      inputSchema: {
        type: "object",
        properties: {
          text: { type: "string", description: "Text to type." }
        },
        required: ["text"]
      }
    },
    {
      name: "key",
      description: `Press a key or key combination (e.g. "return", "escape", "cmd+a", "ctrl+shift+tab"). ${FRONTMOST_GATE_DESC} ` + "System-level combos (quit app, switch app, lock screen) require the `systemKeyCombos` grant \u2014 without it they return an error. All other combos work.",
      inputSchema: {
        type: "object",
        properties: {
          text: {
            type: "string",
            description: 'Modifiers joined with "+", e.g. "cmd+shift+a".'
          },
          repeat: {
            type: "integer",
            minimum: 1,
            maximum: 100,
            description: "Number of times to repeat the key press. Default is 1."
          }
        },
        required: ["text"]
      }
    },
    {
      name: "scroll",
      description: `Scroll at the given coordinates. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple,
          scroll_direction: {
            type: "string",
            enum: ["up", "down", "left", "right"],
            description: "Direction to scroll."
          },
          scroll_amount: {
            type: "integer",
            minimum: 0,
            maximum: 100,
            description: "Number of scroll ticks."
          }
        },
        required: ["coordinate", "scroll_direction", "scroll_amount"]
      }
    },
    {
      name: "left_click_drag",
      description: `Press, move to target, and release. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: {
            ...coordinateTuple,
            description: `(x, y) end point: ${coord.x}`
          },
          start_coordinate: {
            ...coordinateTuple,
            description: `(x, y) start point. If omitted, drags from the current cursor position. ${coord.x}`
          }
        },
        required: ["coordinate"]
      }
    },
    {
      name: "mouse_move",
      description: `Move the mouse cursor without clicking. Useful for triggering hover states. ${FRONTMOST_GATE_DESC}`,
      inputSchema: {
        type: "object",
        properties: {
          coordinate: coordinateTuple
        },
        required: ["coordinate"]
      }
    },
    {
      name: "open_application",
      description: "Bring an application to the front, launching it if necessary. The target application must already be in the session allowlist \u2014 call request_access first.",
      inputSchema: {
        type: "object",
        properties: {
          app: {
            type: "string",
            description: 'Display name (e.g. "Slack") or bundle identifier (e.g. "com.tinyspeck.slackmacgap").'
          }
        },
        required: ["app"]
      }
    },
    ...caps.platform === "win32" ? [
      {
        name: "window_management",
        description: "Manage the bound application window via Win32 API calls (ShowWindow, SetWindowPos, SendMessage). " + "All operations target the bound HWND directly \u2014 NO global shortcuts (Win+Down, Alt+F4, etc.). " + "The window must have been opened via open_application first. " + "Actions: minimize (hide to taskbar), maximize (fill screen), restore (undo min/max), " + "close (graceful WM_CLOSE), focus (bring to front), move_offscreen (move to -32000,-32000 for background operation). " + "Use move_resize to reposition or resize the window to specific coordinates.",
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              enum: ["minimize", "maximize", "restore", "close", "focus", "move_offscreen", "move_resize", "get_rect"],
              description: "minimize: ShowWindow(SW_MINIMIZE). " + "maximize: ShowWindow(SW_MAXIMIZE). " + "restore: ShowWindow(SW_RESTORE) \u2014 undo minimize or maximize. " + "close: SendMessage(WM_CLOSE) \u2014 graceful close. " + "focus: SetForegroundWindow + BringWindowToTop. " + "move_offscreen: SetWindowPos(-32000,-32000) \u2014 keeps window usable by SendMessage/PrintWindow but invisible. " + "move_resize: SetWindowPos to specific x,y,width,height. " + "get_rect: GetWindowRect \u2014 returns current position and size."
            },
            x: { type: "integer", description: "X position for move_resize." },
            y: { type: "integer", description: "Y position for move_resize." },
            width: { type: "integer", description: "Width for move_resize." },
            height: { type: "integer", description: "Height for move_resize." }
          },
          required: ["action"]
        }
      },
      {
        name: "click_element",
        description: "Click a GUI element by its accessible name, role, or automationId \u2014 no pixel coordinates needed. " + "Uses Windows UI Automation to find the element and InvokePattern to click it. " + "Prefer this over left_click when the element name is visible in the accessibility snapshot. " + "Falls back to BoundingRect center-click if InvokePattern is not supported.",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: 'Accessible name of the element (e.g. "Save", "File", "Search..."). Case-insensitive partial match.'
            },
            role: {
              type: "string",
              description: 'Control type (e.g. "Button", "MenuItem", "Edit", "Link"). Optional \u2014 narrows the search.'
            },
            automationId: {
              type: "string",
              description: "Exact automationId from the accessibility snapshot. Most precise selector."
            }
          },
          required: []
        }
      },
      {
        name: "type_into_element",
        description: "Type text into a named GUI element using Windows UI Automation ValuePattern. " + "Finds the element by name/role/automationId, then sets its value directly \u2014 " + "no need to click first or use pixel coordinates. Works on Edit, ComboBox, and other value-holding controls.",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Accessible name of the target element." },
            role: { type: "string", description: 'Control type (optional, e.g. "Edit").' },
            automationId: { type: "string", description: "Exact automationId." },
            text: { type: "string", description: "Text to type/set into the element." }
          },
          required: ["text"]
        }
      },
      {
        name: "open_terminal",
        description: "Open a new terminal window and launch an AI agent CLI. " + "This is a workflow tool that automates: open terminal \u2192 type startup command \u2192 press Enter \u2192 wait \u2192 verify. " + "Supported agents: claude (runs 'claude'), codex (runs 'codex'), gemini (runs 'gemini'), " + "or any custom command. After launching, the tool binds to the new terminal window " + "and takes a screenshot to verify the agent started successfully. " + "Use this when the user says: 'open MiMo Code', 'start a Codex terminal', 'launch Gemini', etc.",
        inputSchema: {
          type: "object",
          properties: {
            agent: {
              type: "string",
              enum: ["claude", "codex", "gemini", "custom"],
              description: "Which agent to launch. " + "claude: runs 'claude' command. " + "codex: runs 'codex' command. " + "gemini: runs 'gemini' command. " + "custom: runs the command specified in 'command' parameter."
            },
            command: {
              type: "string",
              description: "Custom command to run in the terminal. Only used when agent='custom'. Example: 'python app.py'"
            },
            terminal: {
              type: "string",
              enum: ["wt", "powershell", "cmd"],
              description: "Which terminal to open. Default: 'wt' (Windows Terminal). 'powershell' for PowerShell window, 'cmd' for Command Prompt."
            },
            working_directory: {
              type: "string",
              description: "Working directory for the terminal. If omitted, uses current directory."
            }
          },
          required: ["agent"]
        }
      },
      {
        name: "bind_window",
        description: "Bind to a specific window for all subsequent operations (screenshot, click, type, etc.). " + "Once bound, screenshots capture only that window via PrintWindow, and all input goes through SendMessageW \u2014 " + "no cursor movement, no focus steal, no interference with the user's desktop. " + "Actions: bind (by title, hwnd, or pid), unbind (release binding), status (show current binding), list (show all visible windows). " + "Use 'list' first to see available windows, then 'bind' with a title or hwnd. " + "open_application auto-binds the launched window, but use this tool to bind to already-running windows or switch between windows.",
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              enum: ["bind", "unbind", "status", "list"],
              description: "bind: Bind to a window (specify title, hwnd, or pid). " + "unbind: Release the current binding, return to full-screen mode. " + "status: Show the currently bound window (hwnd, title, rect). " + "list: List all visible windows with hwnd, pid, and title."
            },
            title: {
              type: "string",
              description: "Window title to search for (partial match, case-insensitive). For 'bind' action."
            },
            hwnd: {
              type: "string",
              description: "Exact window handle from 'list' output. For 'bind' action."
            },
            pid: {
              type: "integer",
              description: "Process ID to find window for. For 'bind' action."
            }
          },
          required: ["action"]
        }
      },
      {
        name: "activate_window",
        description: "Activate the bound window: bring it to foreground, click to ensure keyboard focus, " + "and optionally send an initial key sequence. Use this before any input operations to guarantee " + "the window is ready to receive keyboard/mouse events. " + "Combines SetForegroundWindow + BringWindowToTop + SendMessage(WM_LBUTTONDOWN) in one call.",
        inputSchema: {
          type: "object",
          properties: {
            click_x: { type: "integer", description: "X coordinate to click after activation (client-area). If omitted, clicks center of window." },
            click_y: { type: "integer", description: "Y coordinate to click after activation (client-area). If omitted, clicks center of window." }
          },
          required: []
        }
      },
      {
        name: "prompt_respond",
        description: "Handle interactive CLI/terminal prompts (Yes/No, selection menus, confirmations). " + "Sends a sequence of key events to the bound window to navigate and confirm a prompt. " + "This is a convenience wrapper around bound-window keyboard input for common prompt flows. " + "Typical flows: " + "1) Yes/No prompt \u2192 send 'y' or 'n' + Enter. " + "2) Arrow-key selection menu \u2192 send arrow_down/arrow_up N times + Enter. " + "3) Text input prompt \u2192 type the response + Enter. " + "After responding, take a screenshot to verify the result.",
        inputSchema: {
          type: "object",
          properties: {
            response_type: {
              type: "string",
              enum: ["yes", "no", "enter", "escape", "select", "type"],
              description: "yes: send 'y' + Enter. " + "no: send 'n' + Enter. " + "enter: send Enter only. " + "escape: send Escape (cancel). " + "select: use arrow keys to navigate to an option, then Enter. Requires 'arrow_count'. " + "type: type custom text then Enter. Requires 'text'."
            },
            arrow_direction: {
              type: "string",
              enum: ["up", "down"],
              description: "Arrow key direction for 'select' type. Default: 'down'."
            },
            arrow_count: {
              type: "integer",
              description: "Number of arrow key presses for 'select' type. Default: 1.",
              minimum: 0,
              maximum: 50
            },
            text: {
              type: "string",
              description: "Text to type for 'type' response_type."
            }
          },
          required: ["response_type"]
        }
      },
      {
        name: "status_indicator",
        description: "Control the visual status indicator overlay on the bound window. " + "The indicator is a small floating label at the bottom of the window that shows what Computer Use is doing. " + "It auto-shows during click/type/key/scroll operations, but you can also send custom messages. " + "Actions: show (display a custom message), hide (dismiss), status (check if active).",
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              enum: ["show", "hide", "status"],
              description: "show: display a custom message on the indicator. hide: dismiss the indicator. status: check if indicator is active."
            },
            message: {
              type: "string",
              description: "Custom message to display (for 'show' action). Supports emoji. Auto-fades after 2 seconds."
            }
          },
          required: ["action"]
        }
      },
      {
        name: "virtual_keyboard",
        description: "Send keyboard input directly to the bound window via SendMessageW \u2014 independent of the physical keyboard. " + "The user can keep typing on their own keyboard without interference. " + "Supports: single keys, key combinations (Ctrl+S, Alt+F4), text input, and hold-key operations. " + "All input targets the bound HWND only \u2014 no global keyboard events.",
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              enum: ["type", "combo", "press", "release", "hold"],
              description: "type: Send text string via WM_CHAR (Unicode, supports Chinese/emoji). " + "combo: Send a key combination like ctrl+s, alt+f4, ctrl+shift+a (press all, release in reverse). " + "press: Press a key down and hold it (pair with 'release'). " + "release: Release a previously pressed key. " + "hold: Press key(s) for a duration then release."
            },
            text: {
              type: "string",
              description: "For 'type': the text to input. For 'combo': key combination string (e.g. 'ctrl+s', 'alt+tab', 'ctrl+shift+a'). For 'press'/'release': single key name (e.g. 'shift', 'ctrl', 'a')."
            },
            duration: {
              type: "number",
              description: "For 'hold': seconds to hold the key(s) before releasing. Default: 1."
            },
            repeat: {
              type: "integer",
              description: "Number of times to repeat the action. Default: 1.",
              minimum: 1,
              maximum: 100
            }
          },
          required: ["action", "text"]
        }
      },
      {
        name: "virtual_mouse",
        description: "Control a virtual mouse on the bound window via SendMessageW \u2014 independent of the physical mouse. " + "The user's real cursor stays free. All operations target the bound HWND only.",
        inputSchema: {
          type: "object",
          properties: {
            action: {
              type: "string",
              enum: ["click", "double_click", "right_click", "move", "drag", "down", "up"],
              description: "click: left-click at coordinate. " + "double_click: double left-click. " + "right_click: right-click. " + "move: move virtual cursor (visual only, no click). " + "drag: press at start, move to end, release. Requires coordinate (end) and start_coordinate. " + "down: press left button at coordinate (hold). " + "up: release left button at coordinate."
            },
            coordinate: {
              type: "array",
              items: { type: "number" },
              minItems: 2,
              maxItems: 2,
              description: "(x, y) client-area coordinate on the bound window."
            },
            start_coordinate: {
              type: "array",
              items: { type: "number" },
              minItems: 2,
              maxItems: 2,
              description: "(x, y) start point for drag. If omitted, drags from current virtual cursor position."
            }
          },
          required: ["action", "coordinate"]
        }
      },
      {
        name: "mouse_wheel",
        description: "Scroll inside the bound window using mouse wheel (WM_MOUSEWHEEL / WM_MOUSEHWHEEL). " + "Unlike the generic 'scroll' tool which uses WM_VSCROLL (only works on scrollbar controls), " + "mouse_wheel simulates the physical mouse wheel and works on Excel spreadsheets, web pages, " + "code editors, PDF viewers, and any modern UI. " + "Specify the click point within the window where the scroll should occur \u2014 " + "this determines which panel/pane/element receives the scroll.",
        inputSchema: {
          type: "object",
          properties: {
            coordinate: {
              type: "array",
              items: { type: "number" },
              minItems: 2,
              maxItems: 2,
              description: "(x, y) client-area coordinate where the scroll should occur. Determines which element receives the scroll."
            },
            delta: {
              type: "integer",
              description: "Scroll amount in 'clicks'. Positive = scroll up, negative = scroll down. Each click = 3 lines typically. Use -3 to -5 for page-like scrolling."
            },
            direction: {
              type: "string",
              enum: ["vertical", "horizontal"],
              description: "Scroll direction. Default: 'vertical'. Use 'horizontal' for side-scrolling (e.g. wide Excel sheets, timeline views)."
            }
          },
          required: ["coordinate", "delta"]
        }
      }
    ] : [],
    {
      name: "switch_display",
      description: "Switch which monitor subsequent screenshots capture. Use this when the " + "application you need is on a different monitor than the one shown. " + "The screenshot tool tells you which monitor it captured and lists " + "other attached monitors by name \u2014 pass one of those names here. " + "After switching, call screenshot to see the new monitor. " + 'Pass "auto" to return to automatic monitor selection.',
      inputSchema: {
        type: "object",
        properties: {
          display: {
            type: "string",
            description: 'Monitor name from the screenshot note (e.g. "Built-in Retina Display", ' + '"LG UltraFine"), or "auto" to re-enable automatic selection.'
          }
        },
        required: ["display"]
      }
    },
    {
      name: "list_granted_applications",
      description: "List the applications currently in the session allowlist, plus the active grant flags and coordinate mode. No side effects.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "read_clipboard",
      description: "Read the current clipboard contents as text. Requires the `clipboardRead` grant.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "write_clipboard",
      description: "Write text to the clipboard. Requires the `clipboardWrite` grant.",
      inputSchema: {
        type: "object",
        properties: {
          text: { type: "string" }
        },
        required: ["text"]
      }
    },
    {
      name: "wait",
      description: "Wait for a specified duration.",
      inputSchema: {
        type: "object",
        properties: {
          duration: {
            type: "number",
            description: "Duration in seconds (0\u2013100)."
          }
        },
        required: ["duration"]
      }
    },
    {
      name: "cursor_position",
      description: "Get the current mouse cursor position. Returns image-pixel coordinates relative to the most recent screenshot, or logical points if no screenshot has been taken.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "hold_key",
      description: `Press and hold a key or key combination for the specified duration, then release. ${FRONTMOST_GATE_DESC} ` + "System-level combos require the `systemKeyCombos` grant.",
      inputSchema: {
        type: "object",
        properties: {
          text: {
            type: "string",
            description: 'Key or chord to hold, e.g. "space", "shift+down".'
          },
          duration: {
            type: "number",
            description: "Duration in seconds (0\u2013100)."
          }
        },
        required: ["text", "duration"]
      }
    },
    {
      name: "left_mouse_down",
      description: `Press the left mouse button at the current cursor position and leave it held. ${FRONTMOST_GATE_DESC} ` + "Use mouse_move first to position the cursor. Call left_mouse_up to release. Errors if the button is already held.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "left_mouse_up",
      description: `Release the left mouse button at the current cursor position. ${FRONTMOST_GATE_DESC} ` + "Pairs with left_mouse_down. Safe to call even if the button is not currently held.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "computer_batch",
      description: "Execute a sequence of actions in ONE tool call. Each individual tool call requires a model\u2192API round trip (seconds); " + "batching a predictable sequence eliminates all but one. Use this whenever you can predict the outcome of several actions ahead \u2014 " + "e.g. click a field, type into it, press Return. Actions execute sequentially and stop on the first error. " + `${FRONTMOST_GATE_DESC} The frontmost check runs before EACH action inside the batch \u2014 if an action opens a non-allowed app, the next action's gate fires and the batch stops there. ` + "Mid-batch screenshot actions are allowed for inspection but coordinates in subsequent clicks always refer to the PRE-BATCH full-screen screenshot.",
      inputSchema: {
        type: "object",
        properties: {
          actions: {
            type: "array",
            minItems: 1,
            items: BATCH_ACTION_ITEM_SCHEMA,
            description: 'List of actions. Example: [{"action":"left_click","coordinate":[100,200]},{"action":"type","text":"hello"},{"action":"key","text":"Return"}]'
          }
        },
        required: ["actions"]
      }
    },
    ...caps.teachMode ? buildTeachTools(coord, installedAppsHint) : []
  ];
}
function buildTeachTools(coord, installedAppsHint) {
  const teachStepProperties = {
    explanation: {
      type: "string",
      description: "Tooltip body text. Explain what the user is looking at and why it matters. " + "This is the ONLY place the user sees your words \u2014 be complete but concise."
    },
    next_preview: {
      type: "string",
      description: "One line describing exactly what will happen when the user clicks Next. " + `Example: "Next: I'll click Create Bucket and type the name." ` + "Shown below the explanation in a smaller font."
    },
    anchor: {
      type: "array",
      items: { type: "number" },
      minItems: 2,
      maxItems: 2,
      description: `(x, y) \u2014 where the tooltip arrow points. ${coord.x} ` + "Omit to center the tooltip with no arrow (for general-context steps)."
    },
    actions: {
      type: "array",
      items: BATCH_ACTION_ITEM_SCHEMA,
      description: "Actions to execute when the user clicks Next. Same item schema as computer_batch.actions. " + "Empty array is valid for purely explanatory steps. Actions run sequentially and stop on first error."
    }
  };
  return [
    {
      name: "request_teach_access",
      description: "Request permission to guide the user through a task step-by-step with on-screen tooltips. " + "Use this INSTEAD OF request_access when the user wants to LEARN how to do something " + '(phrases like "teach me", "walk me through", "show me how", "help me learn"). ' + "On approval the main MiMo window hides and a fullscreen tooltip overlay appears. " + "You then call teach_step repeatedly; each call shows one tooltip and waits for the user to click Next. " + "Same app-allowlist semantics as request_access, but no clipboard/system-key flags. " + "Teach mode ends automatically when your turn ends.",
      inputSchema: {
        type: "object",
        properties: {
          apps: {
            type: "array",
            items: { type: "string" },
            description: 'Application display names (e.g. "Slack", "Calendar") or bundle identifiers. Resolved case-insensitively against installed apps.' + installedAppsHint
          },
          reason: {
            type: "string",
            description: 'What you will be teaching. Shown in the approval dialog as "MiMo wants to guide you through {reason}". Keep it short and task-focused.'
          }
        },
        required: ["apps", "reason"]
      }
    },
    {
      name: "teach_step",
      description: "Show one guided-tour tooltip and wait for the user to click Next. On Next, execute the actions, " + "take a fresh screenshot, and return both \u2014 you do NOT need a separate screenshot call between steps. " + "The returned image shows the state after your actions ran; anchor the next teach_step against it. " + "IMPORTANT \u2014 the user only sees the tooltip during teach mode. Put ALL narration in `explanation`. " + "Text you emit outside teach_step calls is NOT visible until teach mode ends. " + "Pack as many actions as possible into each step's `actions` array \u2014 the user waits through " + "the whole round trip between clicks, so one step that fills a form beats five steps that fill one field each. " + "Returns {exited:true} if the user clicks Exit \u2014 do not call teach_step again after that. " + "Take an initial screenshot before your FIRST teach_step to anchor it.",
      inputSchema: {
        type: "object",
        properties: teachStepProperties,
        required: ["explanation", "next_preview", "actions"]
      }
    },
    {
      name: "teach_batch",
      description: "Queue multiple teach steps in one tool call. Parallels computer_batch: " + "N steps \u2192 one model\u2194API round trip instead of N. Each step still shows a tooltip " + "and waits for the user's Next click, but YOU aren't waiting for a round trip between steps. " + "You can call teach_batch multiple times in one tour \u2014 treat each batch as one predictable " + "SEGMENT (typically: all the steps on one page). The returned screenshot shows the state " + "after the batch's final actions; anchor the NEXT teach_batch against it. " + "WITHIN a batch, all anchors and click coordinates refer to the PRE-BATCH screenshot " + "(same invariant as computer_batch) \u2014 for steps 2+ in a batch, either omit anchor " + "(centered tooltip) or target elements you know won't have moved. " + "Good pattern: batch 5 tooltips on page A (last step navigates) \u2192 read returned screenshot \u2192 " + "batch 3 tooltips on page B \u2192 done. " + "Returns {exited:true, stepsCompleted:N} if the user clicks Exit \u2014 do NOT call again after that; " + "{stepsCompleted, stepFailed, ...} if an action errors mid-batch; " + "otherwise {stepsCompleted, results:[...]} plus a final screenshot. " + "Fall back to individual teach_step calls when you need to react to each intermediate screenshot.",
      inputSchema: {
        type: "object",
        properties: {
          steps: {
            type: "array",
            minItems: 1,
            items: {
              type: "object",
              properties: teachStepProperties,
              required: ["explanation", "next_preview", "actions"]
            },
            description: "Ordered steps. Validated upfront \u2014 a typo in step 5 errors before any tooltip shows."
          }
        },
        required: ["steps"]
      }
    }
  ];
}
var COORD_DESC, FRONTMOST_GATE_DESC = "The frontmost application must be in the session allowlist at the time of this call, or this tool returns an error and does nothing.", BATCH_ACTION_ITEM_SCHEMA;
var init_tools = __esm(() => {
  COORD_DESC = {
    pixels: {
      x: "Horizontal pixel position read directly from the most recent screenshot image, measured from the left edge. The server handles all scaling.",
      y: "Vertical pixel position read directly from the most recent screenshot image, measured from the top edge. The server handles all scaling."
    },
    normalized_0_100: {
      x: "Horizontal position as a percentage of screen width, 0.0\u2013100.0 (0 = left edge, 100 = right edge).",
      y: "Vertical position as a percentage of screen height, 0.0\u2013100.0 (0 = top edge, 100 = bottom edge)."
    }
  };
  BATCH_ACTION_ITEM_SCHEMA = {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: [
          "key",
          "type",
          "mouse_move",
          "left_click",
          "left_click_drag",
          "right_click",
          "middle_click",
          "double_click",
          "triple_click",
          "scroll",
          "hold_key",
          "screenshot",
          "cursor_position",
          "left_mouse_down",
          "left_mouse_up",
          "wait"
        ],
        description: "The action to perform."
      },
      coordinate: {
        type: "array",
        items: { type: "number" },
        minItems: 2,
        maxItems: 2,
        description: "(x, y) for click/mouse_move/scroll/left_click_drag end point."
      },
      start_coordinate: {
        type: "array",
        items: { type: "number" },
        minItems: 2,
        maxItems: 2,
        description: "(x, y) drag start \u2014 left_click_drag only. Omit to drag from current cursor."
      },
      text: {
        type: "string",
        description: "For type: the text. For key/hold_key: the chord string. For click/scroll: modifier keys to hold."
      },
      scroll_direction: {
        type: "string",
        enum: ["up", "down", "left", "right"]
      },
      scroll_amount: { type: "integer", minimum: 0, maximum: 100 },
      duration: {
        type: "number",
        description: "Seconds (0\u2013100). For hold_key/wait."
      },
      repeat: {
        type: "integer",
        minimum: 1,
        maximum: 100,
        description: "For key: repeat count."
      }
    },
    required: ["action"]
  };
});

// packages/@ant/computer-use-mcp/src/deniedApps.ts
function categoryToTier(category) {
  if (category === "browser" || category === "trading")
    return "read";
  if (category === "terminal")
    return "click";
  return "full";
}
function isPolicyDenied(bundleId, displayName) {
  if (bundleId && POLICY_DENIED_BUNDLE_IDS.has(bundleId))
    return true;
  const lower = displayName.toLowerCase();
  for (const sub of POLICY_DENIED_NAME_SUBSTRINGS) {
    if (lower.includes(sub))
      return true;
  }
  return false;
}
function getDeniedCategory(bundleId) {
  if (BROWSER_BUNDLE_IDS.has(bundleId))
    return "browser";
  if (TERMINAL_BUNDLE_IDS.has(bundleId))
    return "terminal";
  if (TRADING_BUNDLE_IDS.has(bundleId))
    return "trading";
  return null;
}
function getDeniedCategoryByDisplayName(name) {
  const lower = name.toLowerCase();
  for (const sub of TRADING_NAME_SUBSTRINGS) {
    if (lower.includes(sub))
      return "trading";
  }
  for (const sub of BROWSER_NAME_SUBSTRINGS) {
    if (lower.includes(sub))
      return "browser";
  }
  for (const sub of TERMINAL_NAME_SUBSTRINGS) {
    if (lower.includes(sub))
      return "terminal";
  }
  return null;
}
function getDeniedCategoryForApp(bundleId, displayName) {
  if (bundleId) {
    const byId = getDeniedCategory(bundleId);
    if (byId)
      return byId;
  }
  return getDeniedCategoryByDisplayName(displayName);
}
function getDefaultTierForApp(bundleId, displayName) {
  return categoryToTier(getDeniedCategoryForApp(bundleId, displayName));
}
var BROWSER_BUNDLE_IDS, TERMINAL_BUNDLE_IDS, TRADING_BUNDLE_IDS, POLICY_DENIED_BUNDLE_IDS, POLICY_DENIED_NAME_SUBSTRINGS, BROWSER_NAME_SUBSTRINGS, TERMINAL_NAME_SUBSTRINGS, TRADING_NAME_SUBSTRINGS;
var init_deniedApps = __esm(() => {
  BROWSER_BUNDLE_IDS = new Set([
    "com.apple.Safari",
    "com.apple.SafariTechnologyPreview",
    "com.google.Chrome",
    "com.google.Chrome.beta",
    "com.google.Chrome.dev",
    "com.google.Chrome.canary",
    "com.microsoft.edgemac",
    "com.microsoft.edgemac.Beta",
    "com.microsoft.edgemac.Dev",
    "com.microsoft.edgemac.Canary",
    "org.mozilla.firefox",
    "org.mozilla.firefoxdeveloperedition",
    "org.mozilla.nightly",
    "org.chromium.Chromium",
    "com.brave.Browser",
    "com.brave.Browser.beta",
    "com.brave.Browser.nightly",
    "com.operasoftware.Opera",
    "com.operasoftware.OperaGX",
    "com.operasoftware.OperaDeveloper",
    "com.vivaldi.Vivaldi",
    "company.thebrowser.Browser",
    "company.thebrowser.dia",
    "org.torproject.torbrowser",
    "com.duckduckgo.macos.browser",
    "ru.yandex.desktop.yandex-browser",
    "ai.perplexity.comet",
    "com.sigmaos.sigmaos.macos",
    "com.kagi.kagimacOS"
  ]);
  TERMINAL_BUNDLE_IDS = new Set([
    "com.apple.Terminal",
    "com.googlecode.iterm2",
    "dev.warp.Warp-Stable",
    "dev.warp.Warp-Beta",
    "com.github.wez.wezterm",
    "org.alacritty",
    "io.alacritty",
    "net.kovidgoyal.kitty",
    "co.zeit.hyper",
    "com.mitchellh.ghostty",
    "org.tabby",
    "com.termius-dmg.mac",
    "com.microsoft.VSCode",
    "com.microsoft.VSCodeInsiders",
    "com.vscodium",
    "com.todesktop.230313mzl4w4u92",
    "com.exafunction.windsurf",
    "dev.zed.Zed",
    "dev.zed.Zed-Preview",
    "com.jetbrains.intellij",
    "com.jetbrains.intellij.ce",
    "com.jetbrains.pycharm",
    "com.jetbrains.pycharm.ce",
    "com.jetbrains.WebStorm",
    "com.jetbrains.CLion",
    "com.jetbrains.goland",
    "com.jetbrains.rubymine",
    "com.jetbrains.PhpStorm",
    "com.jetbrains.datagrip",
    "com.jetbrains.rider",
    "com.jetbrains.AppCode",
    "com.jetbrains.rustrover",
    "com.jetbrains.fleet",
    "com.google.android.studio",
    "com.axosoft.gitkraken",
    "com.sublimetext.4",
    "com.sublimetext.3",
    "org.vim.MacVim",
    "com.neovim.neovim",
    "org.gnu.Emacs",
    "com.apple.dt.Xcode",
    "org.eclipse.platform.ide",
    "org.netbeans.ide",
    "com.microsoft.visual-studio",
    "com.apple.ScriptEditor2",
    "com.apple.Automator",
    "com.apple.shortcuts"
  ]);
  TRADING_BUNDLE_IDS = new Set([
    "com.webull.desktop.v1",
    "com.webull.trade.mac.v1",
    "com.tastytrade.desktop",
    "com.tradingview.tradingviewapp.desktop",
    "com.fidelity.activetrader",
    "com.fmr.activetrader",
    "com.install4j.5889-6375-8446-2021",
    "com.binance.BinanceDesktop",
    "com.electron.exodus",
    "org.pythonmac.unspecified.Electrum",
    "com.ledger.live",
    "io.trezor.TrezorSuite"
  ]);
  POLICY_DENIED_BUNDLE_IDS = new Set([
    "com.apple.TV",
    "com.apple.Music",
    "com.apple.iBooksX",
    "com.apple.podcasts",
    "com.spotify.client",
    "com.amazon.music",
    "com.tidal.desktop",
    "com.deezer.deezer-desktop",
    "com.pandora.desktop",
    "com.electron.pocket-casts",
    "au.com.shiftyjelly.PocketCasts",
    "tv.plex.desktop",
    "tv.plex.htpc",
    "tv.plex.plexamp",
    "com.amazon.aiv.AIVApp",
    "net.kovidgoyal.calibre",
    "com.amazon.Kindle",
    "com.amazon.Lassen",
    "com.kobo.desktop.Kobo"
  ]);
  POLICY_DENIED_NAME_SUBSTRINGS = [
    "netflix",
    "disney+",
    "hulu",
    "prime video",
    "apple tv",
    "peacock",
    "paramount+",
    "tubi",
    "crunchyroll",
    "vudu",
    "kindle",
    "apple books",
    "kobo",
    "play books",
    "calibre",
    "libby",
    "readium",
    "audible",
    "libro.fm",
    "speechify",
    "spotify",
    "apple music",
    "amazon music",
    "youtube music",
    "tidal",
    "deezer",
    "pandora",
    "pocket casts",
    "naver",
    "reddit",
    "sony music",
    "vegas pro",
    "pitchfork",
    "economist",
    "nytimes"
  ];
  BROWSER_NAME_SUBSTRINGS = [
    "safari",
    "chrome",
    "firefox",
    "microsoft edge",
    "brave",
    "opera",
    "vivaldi",
    "chromium",
    "arc browser",
    "tor browser",
    "duckduckgo",
    "yandex",
    "orion browser",
    "comet",
    "sigmaos",
    "dia browser"
  ];
  TERMINAL_NAME_SUBSTRINGS = [
    "terminal",
    "iterm",
    "wezterm",
    "alacritty",
    "kitty",
    "ghostty",
    "tabby",
    "termius",
    "script editor",
    "automator",
    "powershell",
    "cmd.exe",
    "command prompt",
    "git bash",
    "conemu",
    "cmder",
    "visual studio code",
    "visual studio",
    "vscode",
    "vs code",
    "vscodium",
    "cursor",
    "windsurf",
    "intellij",
    "pycharm",
    "webstorm",
    "clion",
    "goland",
    "rubymine",
    "phpstorm",
    "datagrip",
    "rider",
    "appcode",
    "rustrover",
    "fleet",
    "android studio",
    "sublime text",
    "macvim",
    "neovim",
    "emacs",
    "xcode",
    "eclipse",
    "netbeans"
  ];
  TRADING_NAME_SUBSTRINGS = [
    "bloomberg",
    "ameritrade",
    "thinkorswim",
    "schwab",
    "fidelity",
    "e*trade",
    "interactive brokers",
    "trader workstation",
    "tradestation",
    "webull",
    "robinhood",
    "tastytrade",
    "ninjatrader",
    "tradingview",
    "moomoo",
    "tradezero",
    "prorealtime",
    "plus500",
    "saxotrader",
    "oanda",
    "metatrader",
    "forex.com",
    "avaoptions",
    "ctrader",
    "jforex",
    "iq option",
    "olymp trade",
    "binomo",
    "pocket option",
    "raceoption",
    "expertoption",
    "quotex",
    "naga",
    "morgan stanley",
    "ubs neo",
    "eikon",
    "coinbase",
    "kraken",
    "binance",
    "okx",
    "bybit",
    "phemex",
    "stormgain",
    "crypto.com",
    "electrum",
    "ledger live",
    "trezor",
    "guarda",
    "atomic wallet",
    "bitpay",
    "bisq",
    "koinly",
    "cointracker",
    "blockfi",
    "stripe cli",
    "decentraland",
    "axie infinity",
    "gods unchained"
  ];
});

// packages/@ant/computer-use-mcp/src/keyBlocklist.ts
function partitionKeys(seq) {
  const parts = seq.toLowerCase().split("+").map((p) => p.trim()).filter(Boolean);
  const mods = [];
  const keys = [];
  for (const p of parts) {
    const canonical = CANONICAL_MODIFIER[p];
    if (canonical !== undefined) {
      mods.push(canonical);
    } else {
      keys.push(p);
    }
  }
  const uniqueMods = [...new Set(mods)];
  uniqueMods.sort((a, b) => MODIFIER_ORDER.indexOf(a) - MODIFIER_ORDER.indexOf(b));
  return { mods: uniqueMods, keys };
}
function isSystemKeyCombo(seq, platform) {
  const blocklist = platform === "darwin" ? BLOCKED_DARWIN : BLOCKED_WIN32;
  const { mods, keys } = partitionKeys(seq);
  const prefix = mods.length > 0 ? mods.join("+") + "+" : "";
  if (keys.length === 0) {
    return blocklist.has(mods.join("+"));
  }
  for (const key of keys) {
    if (blocklist.has(prefix + key)) {
      return true;
    }
  }
  return false;
}
var CANONICAL_MODIFIER, MODIFIER_ORDER, BLOCKED_DARWIN, BLOCKED_WIN32;
var init_keyBlocklist = __esm(() => {
  CANONICAL_MODIFIER = {
    meta: "meta",
    super: "meta",
    command: "meta",
    cmd: "meta",
    windows: "meta",
    win: "meta",
    ctrl: "ctrl",
    control: "ctrl",
    lctrl: "ctrl",
    lcontrol: "ctrl",
    rctrl: "ctrl",
    rcontrol: "ctrl",
    shift: "shift",
    lshift: "shift",
    rshift: "shift",
    alt: "alt",
    option: "alt"
  };
  MODIFIER_ORDER = ["ctrl", "alt", "shift", "meta"];
  BLOCKED_DARWIN = new Set([
    "meta+q",
    "shift+meta+q",
    "alt+meta+escape",
    "meta+tab",
    "meta+space",
    "ctrl+meta+q"
  ]);
  BLOCKED_WIN32 = new Set([
    "ctrl+alt+delete",
    "alt+f4",
    "alt+tab",
    "meta+l",
    "meta+d"
  ]);
});

// packages/@ant/computer-use-mcp/src/pixelCompare.ts
function computeCropRect(imgW, imgH, xPercent, yPercent, gridSize) {
  if (!imgW || !imgH)
    return null;
  const clampedX = Math.max(0, Math.min(100, xPercent));
  const clampedY = Math.max(0, Math.min(100, yPercent));
  const centerX = Math.round(clampedX / 100 * imgW);
  const centerY = Math.round(clampedY / 100 * imgH);
  const halfGrid = Math.floor(gridSize / 2);
  const cropX = Math.max(0, centerX - halfGrid);
  const cropY = Math.max(0, centerY - halfGrid);
  const cropW = Math.min(gridSize, imgW - cropX);
  const cropH = Math.min(gridSize, imgH - cropY);
  if (cropW <= 0 || cropH <= 0)
    return null;
  return { x: cropX, y: cropY, width: cropW, height: cropH };
}
function comparePixelAtLocation(crop, lastScreenshot, freshScreenshot, xPercent, yPercent, gridSize = DEFAULT_GRID_SIZE) {
  const rect = computeCropRect(freshScreenshot.width, freshScreenshot.height, xPercent, yPercent, gridSize);
  if (!rect)
    return false;
  const patch1 = crop(lastScreenshot.base64, rect);
  const patch2 = crop(freshScreenshot.base64, rect);
  if (!patch1 || !patch2)
    return false;
  return patch1.equals(patch2);
}
async function validateClickTarget(crop, lastScreenshot, xPercent, yPercent, takeFreshScreenshot, logger, gridSize = DEFAULT_GRID_SIZE) {
  if (!lastScreenshot) {
    return { valid: true, skipped: true };
  }
  try {
    const fresh = await takeFreshScreenshot();
    if (!fresh) {
      return { valid: true, skipped: true };
    }
    const pixelsMatch = comparePixelAtLocation(crop, lastScreenshot, fresh, xPercent, yPercent, gridSize);
    if (pixelsMatch) {
      return { valid: true, skipped: false };
    }
    return {
      valid: false,
      skipped: false,
      warning: "Screen content at the target location changed since the last screenshot. Take a new screenshot before clicking."
    };
  } catch (err) {
    logger.debug("[pixelCompare] validation error, skipping", err);
    return { valid: true, skipped: true };
  }
}
var DEFAULT_GRID_SIZE = 9;
var init_pixelCompare = () => {};

// packages/@ant/computer-use-mcp/src/sentinelApps.ts
function getSentinelCategory(bundleId) {
  if (SHELL_ACCESS_BUNDLE_IDS.has(bundleId))
    return "shell";
  if (FILESYSTEM_ACCESS_BUNDLE_IDS.has(bundleId))
    return "filesystem";
  if (SYSTEM_SETTINGS_BUNDLE_IDS.has(bundleId))
    return "system_settings";
  return null;
}
var SHELL_ACCESS_BUNDLE_IDS, FILESYSTEM_ACCESS_BUNDLE_IDS, SYSTEM_SETTINGS_BUNDLE_IDS, SENTINEL_BUNDLE_IDS;
var init_sentinelApps = __esm(() => {
  SHELL_ACCESS_BUNDLE_IDS = new Set([
    "com.apple.Terminal",
    "com.googlecode.iterm2",
    "com.microsoft.VSCode",
    "dev.warp.Warp-Stable",
    "com.github.wez.wezterm",
    "io.alacritty",
    "net.kovidgoyal.kitty",
    "com.jetbrains.intellij",
    "com.jetbrains.pycharm"
  ]);
  FILESYSTEM_ACCESS_BUNDLE_IDS = new Set(["com.apple.finder"]);
  SYSTEM_SETTINGS_BUNDLE_IDS = new Set(["com.apple.systempreferences"]);
  SENTINEL_BUNDLE_IDS = new Set([
    ...SHELL_ACCESS_BUNDLE_IDS,
    ...FILESYSTEM_ACCESS_BUNDLE_IDS,
    ...SYSTEM_SETTINGS_BUNDLE_IDS
  ]);
});

// packages/@ant/computer-use-mcp/src/toolCalls.ts
import { randomUUID } from "crypto";
function detectMimeFromBase64(b64) {
  const raw = Buffer.from(b64.slice(0, 16), "base64");
  if (raw[0] === 137 && raw[1] === 80 && raw[2] === 78 && raw[3] === 71)
    return "image/png";
  if (raw[0] === 255 && raw[1] === 216 && raw[2] === 255)
    return "image/jpeg";
  if (raw[0] === 82 && raw[1] === 73 && raw[2] === 70 && raw[3] === 70 && raw[8] === 87 && raw[9] === 69 && raw[10] === 66 && raw[11] === 80)
    return "image/webp";
  if (raw[0] === 71 && raw[1] === 73 && raw[2] === 70)
    return "image/gif";
  return "image/png";
}
function errorResult(text, errorKind) {
  return {
    content: [{ type: "text", text }],
    isError: true,
    telemetry: errorKind ? { error_kind: errorKind } : undefined
  };
}
function okText(text) {
  return { content: [{ type: "text", text }] };
}
function okJson(obj, telemetry) {
  return {
    content: [{ type: "text", text: JSON.stringify(obj) }],
    telemetry
  };
}
function asRecord(args) {
  if (typeof args === "object" && args !== null) {
    return args;
  }
  return {};
}
function requireString(args, key) {
  const v = args[key];
  if (typeof v !== "string") {
    return new Error(`"${key}" must be a string.`);
  }
  return v;
}
function extractCoordinate(args, paramName = "coordinate") {
  const coord = args[paramName];
  if (coord === undefined) {
    return new Error(`${paramName} is required`);
  }
  if (!Array.isArray(coord) || coord.length !== 2) {
    return new Error(`${paramName} must be an array of length 2`);
  }
  const [x, y] = coord;
  if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0) {
    return new Error(`${paramName} must be a tuple of non-negative numbers`);
  }
  return [x, y];
}
function scaleCoord(rawX, rawY, mode, display, lastScreenshot, logger) {
  if (mode === "normalized_0_100") {
    return {
      x: Math.round(rawX / 100 * display.width) + display.originX,
      y: Math.round(rawY / 100 * display.height) + display.originY
    };
  }
  if (lastScreenshot) {
    return {
      x: Math.round(rawX * (lastScreenshot.displayWidth / lastScreenshot.width)) + lastScreenshot.originX,
      y: Math.round(rawY * (lastScreenshot.displayHeight / lastScreenshot.height)) + lastScreenshot.originY
    };
  }
  logger.warn("[computer-use] pixels-mode coordinate received with no prior screenshot; " + "falling back to /scaleFactor. Click may be off if downsample is active.");
  return {
    x: Math.round(rawX / display.scaleFactor) + display.originX,
    y: Math.round(rawY / display.scaleFactor) + display.originY
  };
}
function coordToPercentageForPixelCompare(rawX, rawY, mode, lastScreenshot) {
  if (mode === "normalized_0_100") {
    return { xPct: rawX, yPct: rawY };
  }
  if (!lastScreenshot) {
    return { xPct: 0, yPct: 0 };
  }
  return {
    xPct: rawX / lastScreenshot.width * 100,
    yPct: rawY / lastScreenshot.height * 100
  };
}
function tierSatisfies(grantTier, actionKind) {
  const tier = grantTier ?? "full";
  if (actionKind === "mouse_position")
    return true;
  if (actionKind === "keyboard" || actionKind === "mouse_full") {
    return tier === "full";
  }
  return tier === "click" || tier === "full";
}
async function syncClipboardStash(adapter, overrides, frontmostIsClickTier) {
  const current = overrides.getClipboardStash?.();
  if (!frontmostIsClickTier) {
    if (current === undefined)
      return;
    try {
      await adapter.executor.writeClipboard(current);
      overrides.onClipboardStashChanged?.(undefined);
    } catch {}
    return;
  }
  if (current === undefined) {
    try {
      const read = await adapter.executor.readClipboard();
      overrides.onClipboardStashChanged?.(read);
    } catch {
      overrides.onClipboardStashChanged?.("");
    }
  }
  try {
    await adapter.executor.writeClipboard("");
  } catch {}
}
async function runInputActionGates(adapter, overrides, subGates, actionKind) {
  if (subGates.hideBeforeAction) {
    const hidden = await adapter.executor.prepareForAction(overrides.allowedApps.map((a) => a.bundleId), overrides.selectedDisplayId);
    if (hidden.length > 0) {
      overrides.onAppsHidden?.(hidden);
    }
  }
  if (adapter.executor.capabilities.screenshotFiltering === "none") {
    return null;
  }
  const frontmost = await adapter.executor.getFrontmostApp();
  const tierByBundleId = new Map(overrides.allowedApps.map((a) => [a.bundleId, a.tier]));
  const frontmostTier = frontmost ? tierByBundleId.get(frontmost.bundleId) : undefined;
  if (subGates.clipboardGuard) {
    await syncClipboardStash(adapter, overrides, frontmostTier === "click");
  }
  if (!frontmost) {
    return null;
  }
  const { hostBundleId } = adapter.executor.capabilities;
  if (frontmostTier !== undefined) {
    if (tierSatisfies(frontmostTier, actionKind))
      return null;
    if (frontmostTier === "read") {
      const isBrowser = getDeniedCategoryForApp(frontmost.bundleId, frontmost.displayName) === "browser";
      return errorResult(`"${frontmost.displayName}" is granted at tier "read" \u2014 ` + `visible in screenshots only, no clicks or typing.` + (isBrowser ? " Use the MiMo-in-Chrome MCP for browser interaction (tools " + "named `mcp__Claude_in_Chrome__*`; load via ToolSearch if " + "deferred)." : " No interaction is permitted; ask the user to take any " + "actions in this app themselves.") + TIER_ANTI_SUBVERSION, "tier_insufficient");
    }
    if (actionKind === "keyboard") {
      return errorResult(`"${frontmost.displayName}" is granted at tier "click" \u2014 ` + `typing, key presses, and paste require tier "full". The keys ` + `would go to this app's text fields or integrated terminal. To ` + `type into a different app, click it first to bring it forward. ` + `For shell commands, use the Bash tool.` + TIER_ANTI_SUBVERSION, "tier_insufficient");
    }
    return errorResult(`"${frontmost.displayName}" is granted at tier "click" \u2014 ` + `right-click, middle-click, and clicks with modifier keys require ` + `tier "full". Right-click opens a context menu with Paste/Cut, and ` + `modifier chords fire as keystrokes before the click. Plain ` + `left_click is allowed here.` + TIER_ANTI_SUBVERSION, "tier_insufficient");
  }
  if (frontmost.bundleId === FINDER_BUNDLE_ID)
    return null;
  if (frontmost.bundleId === hostBundleId) {
    if (actionKind !== "keyboard") {
      return null;
    }
    return errorResult("MiMo's own window still has keyboard focus. This should not happen " + "after the pre-action defocus. Click on the target application first.", "state_conflict");
  }
  return errorResult(`"${frontmost.displayName}" is not in the allowed applications and is ` + `currently in front. Take a new screenshot \u2014 it may have appeared ` + `since your last one.`, "app_not_granted");
}
async function runHitTestGate(adapter, overrides, subGates, x, y, actionKind) {
  if (adapter.executor.capabilities.screenshotFiltering === "none") {
    return null;
  }
  const target = await adapter.executor.appUnderPoint(x, y);
  if (!target)
    return null;
  if (target.bundleId === FINDER_BUNDLE_ID)
    return null;
  const tierByBundleId = new Map(overrides.allowedApps.map((a) => [a.bundleId, a.tier]));
  if (!tierByBundleId.has(target.bundleId)) {
    return errorResult(`Click at these coordinates would land on "${target.displayName}", ` + `which is not in the allowed applications. Take a fresh screenshot ` + `to see the current window layout.`, "app_not_granted");
  }
  const targetTier = tierByBundleId.get(target.bundleId);
  if (subGates.clipboardGuard && targetTier === "click") {
    await syncClipboardStash(adapter, overrides, true);
  }
  if (tierSatisfies(targetTier, actionKind))
    return null;
  if (actionKind === "mouse_full" && targetTier === "click") {
    return errorResult(`Click at these coordinates would land on "${target.displayName}", ` + `which is granted at tier "click" \u2014 right-click, middle-click, and ` + `clicks with modifier keys require tier "full" (they can Paste via ` + `the context menu or fire modifier-chord keystrokes). Plain ` + `left_click is allowed here.` + TIER_ANTI_SUBVERSION, "tier_insufficient");
  }
  const isBrowser = getDeniedCategoryForApp(target.bundleId, target.displayName) === "browser";
  return errorResult(`Click at these coordinates would land on "${target.displayName}", ` + `which is granted at tier "read" (screenshots only, no interaction). ` + (isBrowser ? "Use the MiMo-in-Chrome MCP for browser interaction." : "Ask the user to take any actions in this app themselves.") + TIER_ANTI_SUBVERSION, "tier_insufficient");
}
function decodedByteLength(base64) {
  const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
  return Math.floor(base64.length * 3 / 4) - padding;
}
async function takeScreenshotWithRetry(executor, allowedBundleIds, logger, displayId) {
  let shot = await executor.screenshot({ allowedBundleIds, displayId });
  if (decodedByteLength(shot.base64) < MIN_SCREENSHOT_BYTES) {
    logger.warn(`[computer-use] screenshot implausibly small (${decodedByteLength(shot.base64)} bytes decoded), retrying once`);
    shot = await executor.screenshot({ allowedBundleIds, displayId });
  }
  return shot;
}
function segmentGraphemes(text) {
  try {
    const Segmenter = Intl.Segmenter;
    if (typeof Segmenter === "function") {
      const seg = new Segmenter(undefined, { granularity: "grapheme" });
      return Array.from(seg.segment(text), (s) => s.segment);
    }
  } catch {}
  return Array.from(text);
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function parseKeyChord(text) {
  return text.split("+").map((s) => s.trim()).filter(Boolean);
}
function resetMouseButtonHeld() {
  mouseButtonHeld = false;
  mouseMoved = false;
}
async function releaseHeldMouse(adapter) {
  if (!mouseButtonHeld)
    return;
  await adapter.executor.mouseUp();
  mouseButtonHeld = false;
  mouseMoved = false;
}
function defersLockAcquire(toolName) {
  return toolName === "request_access" || toolName === "list_granted_applications";
}
function looksLikeBundleId(s) {
  return REVERSE_DNS_RE.test(s) && !s.includes(" ");
}
function resolveRequestedApps(requestedNames, installed, alreadyGrantedBundleIds) {
  const byLowerDisplayName = new Map;
  const byBundleId = new Map;
  for (const app of installed) {
    byBundleId.set(app.bundleId, app);
    byLowerDisplayName.set(app.displayName.toLowerCase(), app);
  }
  return requestedNames.map((requested) => {
    let resolved;
    if (looksLikeBundleId(requested)) {
      resolved = byBundleId.get(requested);
    }
    if (!resolved) {
      resolved = byLowerDisplayName.get(requested.toLowerCase());
    }
    if (!resolved) {
      const clean = requested.toLowerCase().replace(/\.exe$/, "").trim();
      for (const [name, app] of byLowerDisplayName) {
        if (name.includes(clean) || clean.includes(name)) {
          resolved = app;
          break;
        }
      }
    }
    const bundleId = resolved?.bundleId;
    const bundleIdCandidate = bundleId ?? (looksLikeBundleId(requested) ? requested : undefined);
    return {
      requestedName: requested,
      resolved,
      isSentinel: bundleId ? SENTINEL_BUNDLE_IDS.has(bundleId) : false,
      alreadyGranted: bundleId ? alreadyGrantedBundleIds.has(bundleId) : false,
      proposedTier: getDefaultTierForApp(bundleIdCandidate, resolved?.displayName ?? requested)
    };
  });
}
async function handleRequestAccess(adapter, args, overrides, tccState) {
  if (!overrides.onPermissionRequest) {
    return errorResult("This session was not wired with a permission handler. Computer control is not available here.", "feature_unavailable");
  }
  if (overrides.getTeachModeActive?.()) {
    return errorResult("Cannot request additional permissions during teach mode \u2014 the permission dialog would be hidden. End teach mode (finish the tour or let the turn complete), then call request_access, then start a new tour.", "teach_mode_conflict");
  }
  const reason = requireString(args, "reason");
  if (reason instanceof Error)
    return errorResult(reason.message, "bad_args");
  if (tccState) {
    const req = {
      requestId: randomUUID(),
      reason,
      apps: [],
      requestedFlags: {},
      screenshotFiltering: adapter.executor.capabilities.screenshotFiltering,
      tccState
    };
    await overrides.onPermissionRequest(req);
    const recheck = await adapter.ensureOsPermissions();
    if (recheck.granted) {
      return errorResult("macOS Accessibility and Screen Recording are now both granted. " + "Call request_access again immediately \u2014 the next call will show " + "the app selection list.");
    }
    const perms = recheck;
    const missing = [];
    if (!perms.accessibility)
      missing.push("Accessibility");
    if (!perms.screenRecording)
      missing.push("Screen Recording");
    return errorResult(`macOS ${missing.join(" and ")} permission(s) not yet granted. ` + `The permission panel has been shown. Once the user grants the ` + `missing permission(s), call request_access again.`, "tcc_not_granted");
  }
  const rawApps = args.apps;
  if (!Array.isArray(rawApps) || !rawApps.every((a) => typeof a === "string")) {
    return errorResult('"apps" must be an array of strings.', "bad_args");
  }
  const apps = rawApps;
  const requestedFlags = {};
  if (typeof args.clipboardRead === "boolean") {
    requestedFlags.clipboardRead = args.clipboardRead;
  }
  if (typeof args.clipboardWrite === "boolean") {
    requestedFlags.clipboardWrite = args.clipboardWrite;
  }
  if (typeof args.systemKeyCombos === "boolean") {
    requestedFlags.systemKeyCombos = args.systemKeyCombos;
  }
  const {
    needDialog,
    skipDialogGrants,
    willHide,
    tieredApps,
    userDenied,
    policyDenied
  } = await buildAccessRequest(adapter, apps, overrides.allowedApps, new Set(overrides.userDeniedBundleIds), overrides.selectedDisplayId);
  let dialogGranted = [];
  let dialogDenied = [];
  let dialogFlags = overrides.grantFlags;
  if (needDialog.length > 0 || Object.keys(requestedFlags).length > 0) {
    const req = {
      requestId: randomUUID(),
      reason,
      apps: needDialog,
      requestedFlags,
      screenshotFiltering: adapter.executor.capabilities.screenshotFiltering,
      ...willHide.length > 0 && {
        willHide,
        autoUnhideEnabled: adapter.getAutoUnhideEnabled()
      }
    };
    const response = await overrides.onPermissionRequest(req);
    dialogGranted = response.granted;
    dialogDenied = response.denied;
    dialogFlags = response.flags;
  }
  const allGranted = [...skipDialogGrants, ...dialogGranted];
  const grantedBundleIds = new Set(allGranted.map((g) => g.bundleId));
  const grantedTieredApps = tieredApps.filter((t) => grantedBundleIds.has(t.bundleId));
  let windowLocations = [];
  try {
    windowLocations = await buildWindowLocations(adapter, allGranted);
  } catch (e) {
    adapter.logger.warn(`[computer-use] buildWindowLocations failed: ${String(e)}`);
  }
  return okJson({
    granted: allGranted,
    denied: dialogDenied,
    ...policyDenied.length > 0 && {
      policyDenied: {
        apps: policyDenied,
        guidance: buildPolicyDeniedGuidance(policyDenied)
      }
    },
    ...userDenied.length > 0 && {
      userDenied: {
        apps: userDenied,
        guidance: buildUserDeniedGuidance(userDenied)
      }
    },
    ...grantedTieredApps.length > 0 && {
      tierGuidance: buildTierGuidanceMessage(grantedTieredApps)
    },
    screenshotFiltering: adapter.executor.capabilities.screenshotFiltering,
    ...windowLocations.length > 0 ? { windowLocations } : {}
  }, {
    granted_count: dialogGranted.length,
    denied_count: dialogDenied.length,
    ...tierAssignmentTelemetry(grantedTieredApps)
  });
}
async function buildWindowLocations(adapter, granted) {
  if (granted.length === 0)
    return [];
  const displays = await adapter.executor.listDisplays();
  if (displays.length <= 1)
    return [];
  const grantedBundleIds = granted.map((g) => g.bundleId);
  const windowLocs = await adapter.executor.findWindowDisplays(grantedBundleIds);
  const displayById = new Map(displays.map((d) => [d.displayId, d]));
  const idsByBundle = new Map(windowLocs.map((w) => [w.bundleId, w.displayIds]));
  const out = [];
  for (const g of granted) {
    const displayIds = idsByBundle.get(g.bundleId);
    if (!displayIds || displayIds.length === 0)
      continue;
    out.push({
      bundleId: g.bundleId,
      displayName: g.displayName,
      displays: displayIds.map((id) => {
        const d = displayById.get(id);
        return { id, label: d?.label, isPrimary: d?.isPrimary };
      })
    });
  }
  return out;
}
async function buildAccessRequest(adapter, apps, allowedApps, userDeniedBundleIds, selectedDisplayId) {
  const alreadyGranted = new Set(allowedApps.map((g) => g.bundleId));
  const installed = await adapter.executor.listInstalledApps();
  const resolved = resolveRequestedApps(apps, installed, alreadyGranted);
  const policyDenied = [];
  const afterPolicy = [];
  for (const r of resolved) {
    const displayName = r.resolved?.displayName ?? r.requestedName;
    if (isPolicyDenied(r.resolved?.bundleId, displayName)) {
      policyDenied.push({ requestedName: r.requestedName, displayName });
    } else {
      afterPolicy.push(r);
    }
  }
  const userDenied = [];
  const surviving = [];
  for (const r of afterPolicy) {
    if (r.resolved && userDeniedBundleIds.has(r.resolved.bundleId)) {
      userDenied.push({
        requestedName: r.requestedName,
        displayName: r.resolved.displayName
      });
    } else {
      surviving.push(r);
    }
  }
  const tieredApps = [];
  for (const r of surviving) {
    if (r.proposedTier === "full" || !r.resolved)
      continue;
    tieredApps.push({
      bundleId: r.resolved.bundleId,
      displayName: r.resolved.displayName,
      tier: r.proposedTier
    });
  }
  const skipDialog = surviving.filter((r) => r.alreadyGranted);
  const needDialog = surviving.filter((r) => !r.alreadyGranted);
  for (const r of needDialog) {
    if (!r.resolved)
      continue;
    try {
      r.resolved.iconDataUrl = await adapter.executor.getAppIcon(r.resolved.path);
    } catch {}
  }
  const now = Date.now();
  const skipDialogGrants = skipDialog.filter((r) => r.resolved).map((r) => {
    const existing = allowedApps.find((g) => g.bundleId === r.resolved.bundleId);
    return existing ?? {
      bundleId: r.resolved.bundleId,
      displayName: r.resolved.displayName,
      grantedAt: now,
      tier: r.proposedTier
    };
  });
  const exemptForPreview = [
    ...allowedApps.map((a) => a.bundleId),
    ...surviving.filter((r) => r.resolved).map((r) => r.resolved.bundleId)
  ];
  const willHide = await adapter.executor.previewHideSet(exemptForPreview, selectedDisplayId);
  return {
    needDialog,
    skipDialogGrants,
    willHide,
    tieredApps,
    userDenied,
    policyDenied
  };
}
function buildTierGuidanceMessage(tiered) {
  const readBrowsers = tiered.filter((t) => t.tier === "read" && getDeniedCategoryForApp(t.bundleId, t.displayName) === "browser");
  const readOther = tiered.filter((t) => t.tier === "read" && getDeniedCategoryForApp(t.bundleId, t.displayName) !== "browser");
  const clickTier = tiered.filter((t) => t.tier === "click");
  const parts = [];
  if (readBrowsers.length > 0) {
    const names = readBrowsers.map((b) => `"${b.displayName}"`).join(", ");
    parts.push(`${names} ${readBrowsers.length === 1 ? "is a browser" : "are browsers"} \u2014 ` + `granted at tier "read" (visible in screenshots only; no clicks or ` + `typing). You can read what's on screen but cannot navigate, click, ` + `or type into ${readBrowsers.length === 1 ? "it" : "them"}. For browser ` + `interaction, use the Claude-in-Chrome MCP (tools named ` + `\`mcp__Claude_in_Chrome__*\`; load via ToolSearch if deferred).`);
  }
  if (readOther.length > 0) {
    const names = readOther.map((t) => `"${t.displayName}"`).join(", ");
    parts.push(`${names} ${readOther.length === 1 ? "is" : "are"} granted at tier ` + `"read" (visible in screenshots only; no clicks or typing). You can ` + `read what's on screen but cannot interact. Ask the user to take any ` + `actions in ${readOther.length === 1 ? "this app" : "these apps"} ` + `themselves.`);
  }
  if (clickTier.length > 0) {
    const names = clickTier.map((t) => `"${t.displayName}"`).join(", ");
    parts.push(`${names} ${clickTier.length === 1 ? "has" : "have"} terminal or IDE ` + `capabilities \u2014 granted at tier "click" (visible + plain left-click ` + `only; NO typing, key presses, right-click, modifier-clicks, or ` + `drag-drop). You can click buttons and scroll output, but ` + `${clickTier.length === 1 ? "its" : "their"} integrated terminal and ` + `editor are off-limits to keyboard input. Right-click (context-menu ` + `Paste) and dragging text onto ${clickTier.length === 1 ? "it" : "them"} ` + `require tier "full". For shell commands, use the Bash tool.`);
  }
  if (parts.length === 0)
    return "";
  return parts.join(`

`) + TIER_ANTI_SUBVERSION;
}
function buildUserDeniedGuidance(userDenied) {
  const names = userDenied.map((d) => `"${d.displayName}"`).join(", ");
  const one = userDenied.length === 1;
  return `${names} ${one ? "is" : "are"} in the user's auto-deny list ` + `(Settings \u2192 Desktop app (General) \u2192 Computer Use \u2192 Denied apps). ` + `Requests for ` + `${one ? "this app" : "these apps"} are automatically denied. If you need access for ` + `this task, ask the user to remove ${one ? "it" : "them"} from their ` + `deny list in Settings \u2014 you cannot request this through the tool.`;
}
function buildPolicyDeniedGuidance(policyDenied) {
  const names = policyDenied.map((d) => `"${d.displayName}"`).join(", ");
  const one = policyDenied.length === 1;
  return `${names} ${one ? "is" : "are"} blocked by policy for computer use. ` + `Requests for ${one ? "this app" : "these apps"} are automatically ` + `denied regardless of what the user has approved. There is no Settings ` + `override. Inform the user that you cannot access ` + `${one ? "this app" : "these apps"} and suggest an alternative ` + `approach if one exists. Do not try to directly subvert this block ` + `regardless of the user's request.`;
}
function tierAssignmentTelemetry(tiered) {
  const browserCount = tiered.filter((t) => t.tier === "read").length;
  const terminalCount = tiered.filter((t) => t.tier === "click").length;
  return {
    ...browserCount > 0 && { denied_browser_count: browserCount },
    ...terminalCount > 0 && { denied_terminal_count: terminalCount }
  };
}
async function handleRequestTeachAccess(adapter, args, overrides, tccState) {
  if (!overrides.onTeachPermissionRequest) {
    return errorResult("Teach mode is not available in this session.", "feature_unavailable");
  }
  if (overrides.getTeachModeActive?.()) {
    return errorResult("Teach mode is already active. To add more apps, end the current tour first, then call request_teach_access again with the full app list.", "teach_mode_conflict");
  }
  const reason = requireString(args, "reason");
  if (reason instanceof Error)
    return errorResult(reason.message, "bad_args");
  if (tccState) {
    const req2 = {
      requestId: randomUUID(),
      reason,
      apps: [],
      screenshotFiltering: adapter.executor.capabilities.screenshotFiltering,
      tccState
    };
    await overrides.onTeachPermissionRequest(req2);
    const recheck = await adapter.ensureOsPermissions();
    if (recheck.granted) {
      return errorResult("macOS Accessibility and Screen Recording are now both granted. " + "Call request_teach_access again immediately \u2014 the next call will " + "show the app selection list.");
    }
    const perms = recheck;
    const missing = [];
    if (!perms.accessibility)
      missing.push("Accessibility");
    if (!perms.screenRecording)
      missing.push("Screen Recording");
    return errorResult(`macOS ${missing.join(" and ")} permission(s) not yet granted. ` + `The permission panel has been shown. Once the user grants the ` + `missing permission(s), call request_teach_access again.`, "tcc_not_granted");
  }
  const rawApps = args.apps;
  if (!Array.isArray(rawApps) || !rawApps.every((a) => typeof a === "string")) {
    return errorResult('"apps" must be an array of strings.', "bad_args");
  }
  const apps = rawApps;
  const {
    needDialog,
    skipDialogGrants,
    willHide,
    tieredApps,
    userDenied,
    policyDenied
  } = await buildAccessRequest(adapter, apps, overrides.allowedApps, new Set(overrides.userDeniedBundleIds), overrides.selectedDisplayId);
  if (needDialog.length === 0 && skipDialogGrants.length === 0) {
    return okJson({
      granted: [],
      denied: [],
      ...policyDenied.length > 0 && {
        policyDenied: {
          apps: policyDenied,
          guidance: buildPolicyDeniedGuidance(policyDenied)
        }
      },
      ...userDenied.length > 0 && {
        userDenied: {
          apps: userDenied,
          guidance: buildUserDeniedGuidance(userDenied)
        }
      },
      teachModeActive: false,
      screenshotFiltering: adapter.executor.capabilities.screenshotFiltering
    }, { granted_count: 0, denied_count: 0 });
  }
  const req = {
    requestId: randomUUID(),
    reason,
    apps: needDialog,
    screenshotFiltering: adapter.executor.capabilities.screenshotFiltering,
    ...willHide.length > 0 && {
      willHide,
      autoUnhideEnabled: adapter.getAutoUnhideEnabled()
    }
  };
  const response = await overrides.onTeachPermissionRequest(req);
  const granted = [...skipDialogGrants, ...response.granted];
  const teachModeActive = response.userConsented === true && granted.length > 0;
  if (teachModeActive) {
    overrides.onTeachModeActivated?.();
  }
  const grantedBundleIds = new Set(granted.map((g) => g.bundleId));
  const grantedTieredApps = tieredApps.filter((t) => grantedBundleIds.has(t.bundleId));
  return okJson({
    granted,
    denied: response.denied,
    ...policyDenied.length > 0 && {
      policyDenied: {
        apps: policyDenied,
        guidance: buildPolicyDeniedGuidance(policyDenied)
      }
    },
    ...userDenied.length > 0 && {
      userDenied: {
        apps: userDenied,
        guidance: buildUserDeniedGuidance(userDenied)
      }
    },
    ...grantedTieredApps.length > 0 && {
      tierGuidance: buildTierGuidanceMessage(grantedTieredApps)
    },
    teachModeActive,
    screenshotFiltering: adapter.executor.capabilities.screenshotFiltering
  }, {
    granted_count: response.granted.length,
    denied_count: response.denied.length,
    ...tierAssignmentTelemetry(grantedTieredApps)
  });
}
async function validateTeachStepArgs(raw, adapter, overrides, label) {
  const explanation = requireString(raw, "explanation");
  if (explanation instanceof Error) {
    return new Error(`${label}: ${explanation.message}`);
  }
  const nextPreview = requireString(raw, "next_preview");
  if (nextPreview instanceof Error) {
    return new Error(`${label}: ${nextPreview.message}`);
  }
  const actions = raw.actions;
  if (!Array.isArray(actions)) {
    return new Error(`${label}: "actions" must be an array (empty is allowed).`);
  }
  for (const [i, act] of actions.entries()) {
    if (typeof act !== "object" || act === null) {
      return new Error(`${label}: actions[${i}] must be an object`);
    }
    const action = act.action;
    if (typeof action !== "string") {
      return new Error(`${label}: actions[${i}].action must be a string`);
    }
    if (!BATCHABLE_ACTIONS.has(action)) {
      return new Error(`${label}: actions[${i}].action="${action}" is not allowed. ` + `Allowed: ${[...BATCHABLE_ACTIONS].join(", ")}.`);
    }
  }
  let anchorLogical;
  if (raw.anchor !== undefined) {
    const anchor = raw.anchor;
    if (!Array.isArray(anchor) || anchor.length !== 2 || typeof anchor[0] !== "number" || typeof anchor[1] !== "number" || !Number.isFinite(anchor[0]) || !Number.isFinite(anchor[1])) {
      return new Error(`${label}: "anchor" must be a [x, y] number tuple or omitted.`);
    }
    const display = await adapter.executor.getDisplaySize(overrides.selectedDisplayId);
    anchorLogical = scaleCoord(anchor[0], anchor[1], overrides.coordinateMode, display, overrides.lastScreenshot, adapter.logger);
  }
  return {
    explanation,
    nextPreview,
    anchorLogical,
    actions
  };
}
async function executeTeachStep(step, adapter, overrides, subGates) {
  const stepResult = await overrides.onTeachStep({
    explanation: step.explanation,
    nextPreview: step.nextPreview,
    anchorLogical: step.anchorLogical
  });
  if (stepResult.action === "exit") {
    await releaseHeldMouse(adapter);
    return { kind: "exit" };
  }
  overrides.onTeachWorking?.();
  if (step.actions.length === 0) {
    return { kind: "ok", results: [] };
  }
  if (subGates.hideBeforeAction) {
    const hidden = await adapter.executor.prepareForAction(overrides.allowedApps.map((a) => a.bundleId), overrides.selectedDisplayId);
    if (hidden.length > 0) {
      overrides.onAppsHidden?.(hidden);
    }
  }
  const stepSubGates = {
    ...subGates,
    hideBeforeAction: false,
    pixelValidation: false,
    autoTargetDisplay: false
  };
  const results = [];
  for (const [i, act] of step.actions.entries()) {
    if (overrides.isAborted?.()) {
      await releaseHeldMouse(adapter);
      return { kind: "exit" };
    }
    if (i > 0)
      await sleep(10);
    const action = act.action;
    const { screenshot: _dropped, ...inner } = await dispatchAction(action, act, adapter, overrides, stepSubGates);
    const text = firstTextContent(inner);
    const result = { action, ok: !inner.isError, output: text };
    results.push(result);
    if (inner.isError) {
      await releaseHeldMouse(adapter);
      return {
        kind: "action_error",
        executed: results.length - 1,
        failed: result,
        remaining: step.actions.length - results.length,
        telemetry: inner.telemetry
      };
    }
  }
  return { kind: "ok", results };
}
async function appendTeachScreenshot(resultJson, adapter, overrides, subGates) {
  const shotResult = await handleScreenshot(adapter, overrides, subGates);
  if (shotResult.isError) {
    return okJson(resultJson);
  }
  return {
    content: [
      { type: "text", text: JSON.stringify(resultJson) },
      ...shotResult.content
    ],
    screenshot: shotResult.screenshot
  };
}
async function handleTeachStep(adapter, args, overrides, subGates) {
  if (!overrides.onTeachStep) {
    return errorResult("Teach mode is not active. Call request_teach_access first.", "teach_mode_not_active");
  }
  const step = await validateTeachStepArgs(args, adapter, overrides, "teach_step");
  if (step instanceof Error)
    return errorResult(step.message, "bad_args");
  const outcome = await executeTeachStep(step, adapter, overrides, subGates);
  if (outcome.kind === "exit") {
    return okJson({ exited: true });
  }
  if (outcome.kind === "action_error") {
    return okJson({
      executed: outcome.executed,
      failed: outcome.failed,
      remaining: outcome.remaining
    }, outcome.telemetry);
  }
  if (step.actions.length === 0) {
    return okJson({ executed: 0, results: [] });
  }
  return appendTeachScreenshot({ executed: outcome.results.length, results: outcome.results }, adapter, overrides, subGates);
}
async function handleTeachBatch(adapter, args, overrides, subGates) {
  if (!overrides.onTeachStep) {
    return errorResult("Teach mode is not active. Call request_teach_access first.", "teach_mode_not_active");
  }
  const rawSteps = args.steps;
  if (!Array.isArray(rawSteps) || rawSteps.length < 1) {
    return errorResult('"steps" must be a non-empty array.', "bad_args");
  }
  const steps = [];
  for (const [i, raw] of rawSteps.entries()) {
    if (typeof raw !== "object" || raw === null) {
      return errorResult(`steps[${i}] must be an object`, "bad_args");
    }
    const v = await validateTeachStepArgs(raw, adapter, overrides, `steps[${i}]`);
    if (v instanceof Error)
      return errorResult(v.message, "bad_args");
    steps.push(v);
  }
  const allResults = [];
  for (const [i, step] of steps.entries()) {
    const outcome = await executeTeachStep(step, adapter, overrides, subGates);
    if (outcome.kind === "exit") {
      return okJson({ exited: true, stepsCompleted: i });
    }
    if (outcome.kind === "action_error") {
      return okJson({
        stepsCompleted: i,
        stepFailed: i,
        executed: outcome.executed,
        failed: outcome.failed,
        remaining: outcome.remaining,
        results: allResults
      }, outcome.telemetry);
    }
    allResults.push(outcome.results);
  }
  const screenChanged = steps.some((s) => s.actions.length > 0);
  const resultJson = { stepsCompleted: steps.length, results: allResults };
  if (!screenChanged) {
    return okJson(resultJson);
  }
  return appendTeachScreenshot(resultJson, adapter, overrides, subGates);
}
async function buildHiddenNote(adapter, hiddenSinceLastSeen) {
  if (hiddenSinceLastSeen.length === 0)
    return;
  const running = await adapter.executor.listRunningApps();
  const nameOf = new Map(running.map((a) => [a.bundleId, a.displayName]));
  const names = hiddenSinceLastSeen.map((id) => nameOf.get(id) ?? id);
  const list = names.map((n) => `"${n}"`).join(", ");
  const one = names.length === 1;
  return `${list} ${one ? "was" : "were"} open and got hidden before this screenshot ` + `(not in the session allowlist). If a previous action was meant to open ` + `${one ? "it" : "one of them"}, that's why you don't see it \u2014 call ` + `request_access to add ${one ? "it" : "them"} to the allowlist.`;
}
function uniqueDisplayLabels(displays) {
  const sorted = [...displays].sort((a, b) => a.displayId - b.displayId);
  const counts = new Map;
  const out = new Map;
  for (const d of sorted) {
    const base = d.label ?? `display ${d.displayId}`;
    const n = (counts.get(base) ?? 0) + 1;
    counts.set(base, n);
    out.set(d.displayId, n === 1 ? base : `${base} (${n})`);
  }
  return out;
}
async function buildMonitorNote(adapter, shotDisplayId, lastDisplayId, canSwitchDisplay) {
  let displays;
  try {
    displays = await adapter.executor.listDisplays();
  } catch (e) {
    adapter.logger.warn(`[computer-use] listDisplays failed: ${String(e)}`);
    return;
  }
  if (displays.length < 2)
    return;
  const labels = uniqueDisplayLabels(displays);
  const nameOf = (id) => labels.get(id) ?? `display ${id}`;
  const current = nameOf(shotDisplayId);
  const others = displays.filter((d) => d.displayId !== shotDisplayId).map((d) => nameOf(d.displayId));
  const switchHint = canSwitchDisplay ? " Use switch_display to capture a different monitor." : "";
  const othersList = others.length > 0 ? ` Other attached monitors: ${others.map((n) => `"${n}"`).join(", ")}.` + switchHint : "";
  if (lastDisplayId === undefined || lastDisplayId === 0) {
    return `This screenshot was taken on monitor "${current}".` + othersList;
  }
  if (lastDisplayId !== shotDisplayId) {
    const prev = nameOf(lastDisplayId);
    return `This screenshot was taken on monitor "${current}", which is different ` + `from your previous screenshot (taken on "${prev}").` + othersList;
  }
  return;
}
async function handleScreenshot(adapter, overrides, subGates) {
  if (overrides.allowedApps.length === 0) {
    return errorResult("No applications are granted for this session. Call request_access first.", "allowlist_empty");
  }
  if (subGates.autoTargetDisplay) {
    const allowedBundleIds2 = overrides.allowedApps.map((a) => a.bundleId);
    const currentAppSetKey = allowedBundleIds2.slice().sort().join(",");
    const appSetChanged = currentAppSetKey !== overrides.displayResolvedForApps;
    const autoResolve = !overrides.displayPinnedByModel && appSetChanged;
    const result = await adapter.executor.resolvePrepareCapture({
      allowedBundleIds: allowedBundleIds2,
      preferredDisplayId: overrides.selectedDisplayId,
      autoResolve,
      doHide: subGates.hideBeforeAction
    });
    if (result.captureError === undefined && decodedByteLength(result.base64) < MIN_SCREENSHOT_BYTES) {
      adapter.logger.warn(`[computer-use] resolvePrepareCapture result implausibly small (${decodedByteLength(result.base64)} bytes decoded) \u2014 possible transient display state`);
    }
    if (result.displayId !== overrides.selectedDisplayId) {
      adapter.logger.debug(`[computer-use] resolver: preferred=${overrides.selectedDisplayId} resolved=${result.displayId}`);
      overrides.onResolvedDisplayUpdated?.(result.displayId);
    }
    if (autoResolve) {
      overrides.onDisplayResolvedForApps?.(currentAppSetKey);
    }
    let hiddenSinceLastSeen2 = [];
    if (overrides.lastScreenshot !== undefined) {
      hiddenSinceLastSeen2 = result.hidden;
    }
    if (result.hidden.length > 0) {
      overrides.onAppsHidden?.(result.hidden);
    }
    if (result.captureError !== undefined) {
      return errorResult(result.captureError, "capture_failed");
    }
    const hiddenNote2 = await buildHiddenNote(adapter, hiddenSinceLastSeen2);
    const shot2 = {
      base64: result.base64,
      width: result.width,
      height: result.height,
      displayWidth: result.displayWidth,
      displayHeight: result.displayHeight,
      displayId: result.displayId,
      originX: result.originX,
      originY: result.originY
    };
    const monitorNote2 = await buildMonitorNote(adapter, shot2.displayId ?? 0, overrides.lastScreenshot?.displayId, overrides.onDisplayPinned !== undefined);
    return {
      content: [
        ...monitorNote2 ? [{ type: "text", text: monitorNote2 }] : [],
        ...hiddenNote2 ? [{ type: "text", text: hiddenNote2 }] : [],
        ...shot2.accessibilityText ? [{ type: "text", text: `GUI elements in this window:
${shot2.accessibilityText}` }] : [],
        {
          type: "image",
          data: shot2.base64,
          mimeType: detectMimeFromBase64(shot2.base64)
        }
      ],
      screenshot: shot2
    };
  }
  let hiddenSinceLastSeen = [];
  if (subGates.hideBeforeAction) {
    const hidden = await adapter.executor.prepareForAction(overrides.allowedApps.map((a) => a.bundleId), overrides.selectedDisplayId);
    if (overrides.lastScreenshot !== undefined) {
      hiddenSinceLastSeen = hidden;
    }
    if (hidden.length > 0) {
      overrides.onAppsHidden?.(hidden);
    }
  }
  const allowedBundleIds = overrides.allowedApps.map((g) => g.bundleId);
  const shot = await takeScreenshotWithRetry(adapter.executor, allowedBundleIds, adapter.logger, overrides.selectedDisplayId);
  const hiddenNote = await buildHiddenNote(adapter, hiddenSinceLastSeen);
  const monitorNote = await buildMonitorNote(adapter, shot.displayId ?? 0, overrides.lastScreenshot?.displayId, overrides.onDisplayPinned !== undefined);
  return {
    content: [
      ...monitorNote ? [{ type: "text", text: monitorNote }] : [],
      ...hiddenNote ? [{ type: "text", text: hiddenNote }] : [],
      ...shot.accessibilityText ? [{ type: "text", text: `GUI elements in this window:
${shot.accessibilityText}` }] : [],
      {
        type: "image",
        data: shot.base64,
        mimeType: detectMimeFromBase64(shot.base64)
      }
    ],
    screenshot: shot
  };
}
async function handleZoom(adapter, args, overrides) {
  const region = args.region;
  if (!Array.isArray(region) || region.length !== 4) {
    return errorResult("region must be an array of length 4: [x0, y0, x1, y1]", "bad_args");
  }
  const [x0, y0, x1, y1] = region;
  if (![x0, y0, x1, y1].every((v) => typeof v === "number" && v >= 0)) {
    return errorResult("region values must be non-negative numbers", "bad_args");
  }
  if (x1 <= x0)
    return errorResult("region x1 must be greater than x0", "bad_args");
  if (y1 <= y0)
    return errorResult("region y1 must be greater than y0", "bad_args");
  const last = overrides.lastScreenshot;
  if (!last) {
    return errorResult("take a screenshot before zooming (region coords are relative to it)", "state_conflict");
  }
  if (x1 > last.width || y1 > last.height) {
    return errorResult(`region exceeds screenshot bounds (${last.width}\xD7${last.height})`, "bad_args");
  }
  const ratioX = last.displayWidth / last.width;
  const ratioY = last.displayHeight / last.height;
  const regionLogical = {
    x: x0 * ratioX,
    y: y0 * ratioY,
    w: (x1 - x0) * ratioX,
    h: (y1 - y0) * ratioY
  };
  const allowedIds = overrides.allowedApps.map((g) => g.bundleId);
  const zoomed = await adapter.executor.zoom(regionLogical, allowedIds, last.displayId);
  return {
    content: [{ type: "image", data: zoomed.base64, mimeType: detectMimeFromBase64(zoomed.base64) }]
  };
}
async function handleClickVariant(adapter, args, overrides, subGates, button, count) {
  if (mouseButtonHeld) {
    await adapter.executor.mouseUp();
    mouseButtonHeld = false;
    mouseMoved = false;
  }
  const coord = extractCoordinate(args);
  if (coord instanceof Error)
    return errorResult(coord.message, "bad_args");
  const [rawX, rawY] = coord;
  let modifiers;
  if (args.text !== undefined) {
    if (typeof args.text !== "string") {
      return errorResult("text must be a string", "bad_args");
    }
    if (isSystemKeyCombo(args.text, adapter.executor.capabilities.platform) && !overrides.grantFlags.systemKeyCombos) {
      return errorResult(`The modifier chord "${args.text}" would fire a system shortcut. ` + "Request the systemKeyCombos grant flag via request_access, or use " + "only modifier keys (shift, ctrl, alt, cmd) in the text parameter.", "grant_flag_required");
    }
    modifiers = parseKeyChord(args.text);
  }
  const clickActionKind = button !== "left" || modifiers !== undefined && modifiers.length > 0 ? "mouse_full" : "mouse";
  const gate = await runInputActionGates(adapter, overrides, subGates, clickActionKind);
  if (gate)
    return gate;
  const display = await adapter.executor.getDisplaySize(overrides.selectedDisplayId);
  if (subGates.pixelValidation) {
    const { xPct, yPct } = coordToPercentageForPixelCompare(rawX, rawY, overrides.coordinateMode, overrides.lastScreenshot);
    const validation = await validateClickTarget(adapter.cropRawPatch, overrides.lastScreenshot, xPct, yPct, async () => {
      const allowedIds = overrides.allowedApps.map((g) => g.bundleId);
      try {
        return await adapter.executor.screenshot({
          allowedBundleIds: allowedIds,
          displayId: overrides.lastScreenshot?.displayId
        });
      } catch {
        return null;
      }
    }, adapter.logger);
    if (!validation.valid && validation.warning) {
      return okText(validation.warning);
    }
  }
  const { x, y } = scaleCoord(rawX, rawY, overrides.coordinateMode, display, overrides.lastScreenshot, adapter.logger);
  const hitGate = await runHitTestGate(adapter, overrides, subGates, x, y, clickActionKind);
  if (hitGate)
    return hitGate;
  await adapter.executor.click(x, y, button, count, modifiers);
  return okText("Clicked.");
}
async function handleType(adapter, args, overrides, subGates) {
  const text = requireString(args, "text");
  if (text instanceof Error)
    return errorResult(text.message, "bad_args");
  const gate = await runInputActionGates(adapter, overrides, subGates, "keyboard");
  if (gate)
    return gate;
  const viaClipboard = text.includes(`
`) && overrides.grantFlags.clipboardWrite && subGates.clipboardPasteMultiline;
  if (viaClipboard) {
    await adapter.executor.type(text, { viaClipboard: true });
    return okText("Typed (via clipboard).");
  }
  const graphemes = segmentGraphemes(text);
  for (const [i, g] of graphemes.entries()) {
    if (overrides.isAborted?.()) {
      return errorResult(`Typing aborted after ${i} of ${graphemes.length} graphemes (user interrupt).`);
    }
    await sleep(INTER_GRAPHEME_SLEEP_MS);
    if (g === `
` || g === "\r" || g === `\r
`) {
      await adapter.executor.key("return");
    } else if (g === "\t") {
      await adapter.executor.key("tab");
    } else {
      await adapter.executor.type(g, { viaClipboard: false });
    }
  }
  return okText(`Typed ${graphemes.length} grapheme(s).`);
}
async function handleKey(adapter, args, overrides, subGates) {
  const keySequence = requireString(args, "text");
  if (keySequence instanceof Error)
    return errorResult("text is required", "bad_args");
  let repeat;
  if (args.repeat !== undefined) {
    if (typeof args.repeat !== "number" || !Number.isInteger(args.repeat) || args.repeat < 1) {
      return errorResult("repeat must be a positive integer", "bad_args");
    }
    if (args.repeat > 100) {
      return errorResult("repeat exceeds maximum of 100", "bad_args");
    }
    repeat = args.repeat;
  }
  if (isSystemKeyCombo(keySequence, adapter.executor.capabilities.platform) && !overrides.grantFlags.systemKeyCombos) {
    return errorResult(`"${keySequence}" is a system-level shortcut. Request the \`systemKeyCombos\` grant via request_access to use it.`, "grant_flag_required");
  }
  const gate = await runInputActionGates(adapter, overrides, subGates, "keyboard");
  if (gate)
    return gate;
  await adapter.executor.key(keySequence, repeat);
  return okText("Key pressed.");
}
async function handleScroll(adapter, args, overrides, subGates) {
  const coord = extractCoordinate(args);
  if (coord instanceof Error)
    return errorResult(coord.message, "bad_args");
  const [rawX, rawY] = coord;
  const dir = args.scroll_direction;
  if (dir !== "up" && dir !== "down" && dir !== "left" && dir !== "right") {
    return errorResult("scroll_direction must be 'up', 'down', 'left', or 'right'", "bad_args");
  }
  const amount = args.scroll_amount;
  if (typeof amount !== "number" || !Number.isInteger(amount) || amount < 0) {
    return errorResult("scroll_amount must be a non-negative int", "bad_args");
  }
  if (amount > 100) {
    return errorResult("scroll_amount exceeds maximum of 100", "bad_args");
  }
  const dx = dir === "left" ? -amount : dir === "right" ? amount : 0;
  const dy = dir === "up" ? -amount : dir === "down" ? amount : 0;
  const gate = await runInputActionGates(adapter, overrides, subGates, "mouse");
  if (gate)
    return gate;
  const display = await adapter.executor.getDisplaySize(overrides.selectedDisplayId);
  const { x, y } = scaleCoord(rawX, rawY, overrides.coordinateMode, display, overrides.lastScreenshot, adapter.logger);
  const hitGate = await runHitTestGate(adapter, overrides, subGates, x, y, mouseButtonHeld ? "mouse_full" : "mouse");
  if (hitGate)
    return hitGate;
  if (mouseButtonHeld)
    mouseMoved = true;
  await adapter.executor.scroll(x, y, dx, dy);
  return okText("Scrolled.");
}
async function handleDrag(adapter, args, overrides, subGates) {
  if (mouseButtonHeld) {
    await adapter.executor.mouseUp();
    mouseButtonHeld = false;
    mouseMoved = false;
  }
  const endCoord = extractCoordinate(args, "coordinate");
  if (endCoord instanceof Error)
    return errorResult(endCoord.message, "bad_args");
  const rawTo = endCoord;
  let rawFrom;
  if (args.start_coordinate !== undefined) {
    const startCoord = extractCoordinate(args, "start_coordinate");
    if (startCoord instanceof Error)
      return errorResult(startCoord.message, "bad_args");
    rawFrom = startCoord;
  }
  const gate = await runInputActionGates(adapter, overrides, subGates, "mouse");
  if (gate)
    return gate;
  const display = await adapter.executor.getDisplaySize(overrides.selectedDisplayId);
  const from = rawFrom === undefined ? undefined : scaleCoord(rawFrom[0], rawFrom[1], overrides.coordinateMode, display, overrides.lastScreenshot, adapter.logger);
  const to = scaleCoord(rawTo[0], rawTo[1], overrides.coordinateMode, display, overrides.lastScreenshot, adapter.logger);
  const fromPoint = from ?? await adapter.executor.getCursorPosition();
  const fromGate = await runHitTestGate(adapter, overrides, subGates, fromPoint.x, fromPoint.y, "mouse");
  if (fromGate)
    return fromGate;
  const toGate = await runHitTestGate(adapter, overrides, subGates, to.x, to.y, "mouse_full");
  if (toGate)
    return toGate;
  await adapter.executor.drag(from, to);
  return okText("Dragged.");
}
async function handleMoveMouse(adapter, args, overrides, subGates) {
  const coord = extractCoordinate(args);
  if (coord instanceof Error)
    return errorResult(coord.message, "bad_args");
  const [rawX, rawY] = coord;
  const actionKind = mouseButtonHeld ? "mouse" : "mouse_position";
  const gate = await runInputActionGates(adapter, overrides, subGates, actionKind);
  if (gate)
    return gate;
  const display = await adapter.executor.getDisplaySize(overrides.selectedDisplayId);
  const { x, y } = scaleCoord(rawX, rawY, overrides.coordinateMode, display, overrides.lastScreenshot, adapter.logger);
  if (mouseButtonHeld) {
    const hitGate = await runHitTestGate(adapter, overrides, subGates, x, y, "mouse_full");
    if (hitGate)
      return hitGate;
  }
  await adapter.executor.moveMouse(x, y);
  if (mouseButtonHeld)
    mouseMoved = true;
  return okText("Moved.");
}
async function handleOpenApplication(adapter, args, overrides) {
  const app = requireString(args, "app");
  if (app instanceof Error)
    return errorResult(app.message, "bad_args");
  const allowed = new Set(overrides.allowedApps.map((g) => g.bundleId));
  let targetBundleId;
  if (looksLikeBundleId(app) && allowed.has(app)) {
    targetBundleId = app;
  } else {
    const match = overrides.allowedApps.find((g) => g.displayName.toLowerCase() === app.toLowerCase());
    targetBundleId = match?.bundleId;
  }
  if (!targetBundleId || !allowed.has(targetBundleId)) {
    return errorResult(`"${app}" is not granted for this session. Call request_access first.`, "app_not_granted");
  }
  await adapter.executor.openApp(targetBundleId);
  if (overrides.onDisplayPinned !== undefined) {
    let displayCount = 1;
    try {
      displayCount = (await adapter.executor.listDisplays()).length;
    } catch {}
    if (displayCount >= 2) {
      return okText(`Opened "${app}". If it isn't visible in the next screenshot, it may ` + `have opened on a different monitor \u2014 use switch_display to check.`);
    }
  }
  return okText(`Opened "${app}".`);
}
async function handleVirtualMouse(adapter, args) {
  if (!adapter.executor.virtualMouse) {
    return errorResult("virtual_mouse is only available on Windows with a bound window.", "feature_unavailable");
  }
  const action = requireString(args, "action");
  if (action instanceof Error)
    return errorResult(action.message, "bad_args");
  const coord = args.coordinate;
  if (!Array.isArray(coord) || coord.length < 2) {
    return errorResult("coordinate [x, y] is required.", "bad_args");
  }
  const validActions = new Set(["click", "double_click", "right_click", "move", "drag", "down", "up"]);
  if (!validActions.has(action)) {
    return errorResult(`Invalid action "${action}". Valid: ${[...validActions].join(", ")}`, "bad_args");
  }
  const startCoord = Array.isArray(args.start_coordinate) ? args.start_coordinate : undefined;
  const ok = await adapter.executor.virtualMouse({
    action,
    x: coord[0],
    y: coord[1],
    startX: startCoord?.[0],
    startY: startCoord?.[1]
  });
  if (!ok) {
    return errorResult("No window is currently bound.", "bad_args");
  }
  const desc = {
    click: `Click at (${coord[0]},${coord[1]})`,
    double_click: `Double-click at (${coord[0]},${coord[1]})`,
    right_click: `Right-click at (${coord[0]},${coord[1]})`,
    move: `Moved to (${coord[0]},${coord[1]})`,
    drag: `Dragged ${startCoord ? `(${startCoord[0]},${startCoord[1]})` : "current"} \u2192 (${coord[0]},${coord[1]})`,
    down: `Button down at (${coord[0]},${coord[1]})`,
    up: `Button up at (${coord[0]},${coord[1]})`
  };
  return okText(desc[action] ?? action);
}
async function handleVirtualKeyboard(adapter, args) {
  if (!adapter.executor.virtualKeyboard) {
    return errorResult("virtual_keyboard is only available on Windows with a bound window.", "feature_unavailable");
  }
  const action = requireString(args, "action");
  if (action instanceof Error)
    return errorResult(action.message, "bad_args");
  const text = requireString(args, "text");
  if (text instanceof Error)
    return errorResult(text.message, "bad_args");
  const validActions = new Set(["type", "combo", "press", "release", "hold"]);
  if (!validActions.has(action)) {
    return errorResult(`Invalid action "${action}". Valid: ${[...validActions].join(", ")}`, "bad_args");
  }
  const duration = typeof args.duration === "number" ? args.duration : undefined;
  const repeat = typeof args.repeat === "number" ? args.repeat : undefined;
  const ok = await adapter.executor.virtualKeyboard({
    action,
    text,
    duration,
    repeat
  });
  if (!ok) {
    return errorResult("No window is currently bound. Use open_application or bind_window first.", "bad_args");
  }
  const desc = {
    type: `Typed "${text.length > 40 ? text.slice(0, 40) + "..." : text}"`,
    combo: `Sent ${text}`,
    press: `Pressed ${text} (holding)`,
    release: `Released ${text}`,
    hold: `Held ${text} for ${duration ?? 1}s`
  };
  return okText(`${desc[action]}${repeat && repeat > 1 ? ` \xD7${repeat}` : ""}`);
}
async function handleStatusIndicator(adapter, args) {
  if (!adapter.executor.statusIndicator) {
    return errorResult("status_indicator is only available on Windows.", "feature_unavailable");
  }
  const action = requireString(args, "action");
  if (action instanceof Error)
    return errorResult(action.message, "bad_args");
  if (!["show", "hide", "status"].includes(action)) {
    return errorResult(`Invalid action "${action}". Valid: show, hide, status.`, "bad_args");
  }
  const message = typeof args.message === "string" ? args.message : undefined;
  if (action === "show" && !message) {
    return errorResult("'show' requires a message parameter.", "bad_args");
  }
  const result = await adapter.executor.statusIndicator(action, message);
  if (action === "status") {
    return okText(result.active ? "Indicator is active on the bound window." : "Indicator is not active (no window bound).");
  }
  if (action === "show") {
    return okText(`Indicator showing: "${message}"`);
  }
  return okText("Indicator hidden.");
}
async function handleMouseWheel(adapter, args) {
  if (!adapter.executor.mouseWheel) {
    return errorResult("mouse_wheel is only available on Windows with a bound window.", "feature_unavailable");
  }
  const coord = args.coordinate;
  if (!Array.isArray(coord) || coord.length < 2) {
    return errorResult("coordinate must be [x, y] array.", "bad_args");
  }
  const delta = typeof args.delta === "number" ? args.delta : undefined;
  if (delta === undefined) {
    return errorResult("delta is required (positive=up, negative=down).", "bad_args");
  }
  const horizontal = args.direction === "horizontal";
  const ok = await adapter.executor.mouseWheel(coord[0], coord[1], delta, horizontal);
  if (!ok) {
    return errorResult("No window is currently bound. Use open_application or bind_window first.", "bad_args");
  }
  return okText(`Mouse wheel: ${horizontal ? "horizontal" : "vertical"} scroll ${delta > 0 ? "up" : "down"} ${Math.abs(delta)} click(s) at (${coord[0]},${coord[1]}).`);
}
async function handleActivateWindow(adapter, args) {
  if (!adapter.executor.activateWindow) {
    return errorResult("activate_window is only available on Windows with a bound window.", "feature_unavailable");
  }
  const clickX = typeof args.click_x === "number" ? args.click_x : undefined;
  const clickY = typeof args.click_y === "number" ? args.click_y : undefined;
  const ok = await adapter.executor.activateWindow(clickX, clickY);
  if (!ok) {
    return errorResult("No window is currently bound. Use open_application or bind_window first.", "bad_args");
  }
  return okText("Window activated and focused. Ready for input.");
}
async function handlePromptRespond(adapter, args) {
  if (!adapter.executor.respondToPrompt) {
    return errorResult("prompt_respond is only available on Windows with a bound window.", "feature_unavailable");
  }
  const responseType = requireString(args, "response_type");
  if (responseType instanceof Error)
    return errorResult(responseType.message, "bad_args");
  const validTypes = new Set(["yes", "no", "enter", "escape", "select", "type"]);
  if (!validTypes.has(responseType)) {
    return errorResult(`Invalid response_type "${responseType}". Valid: ${[...validTypes].join(", ")}`, "bad_args");
  }
  if (responseType === "select" && typeof args.arrow_count !== "number") {
    return errorResult("'select' requires arrow_count parameter.", "bad_args");
  }
  if (responseType === "type" && typeof args.text !== "string") {
    return errorResult("'type' requires text parameter.", "bad_args");
  }
  const ok = await adapter.executor.respondToPrompt({
    responseType,
    arrowDirection: typeof args.arrow_direction === "string" ? args.arrow_direction : undefined,
    arrowCount: typeof args.arrow_count === "number" ? args.arrow_count : undefined,
    text: typeof args.text === "string" ? args.text : undefined
  });
  if (!ok) {
    return errorResult("No window is currently bound. Use open_application or bind_window first.", "bad_args");
  }
  const descriptions = {
    yes: "Sent 'y' + Enter.",
    no: "Sent 'n' + Enter.",
    enter: "Sent Enter.",
    escape: "Sent Escape.",
    select: `Navigated ${args.arrow_direction ?? "down"} ${args.arrow_count ?? 1} time(s) + Enter.`,
    type: `Typed "${args.text}" + Enter.`
  };
  return okText(`Prompt responded: ${descriptions[responseType] ?? responseType}. Take a screenshot to verify.`);
}
async function handleOpenTerminal(adapter, args) {
  if (!adapter.executor.openTerminal) {
    return errorResult("open_terminal is only available on Windows.", "feature_unavailable");
  }
  const agent = requireString(args, "agent");
  if (agent instanceof Error)
    return errorResult(agent.message, "bad_args");
  const validAgents = new Set(["claude", "codex", "gemini", "custom"]);
  if (!validAgents.has(agent)) {
    return errorResult(`Invalid agent "${agent}". Valid: claude, codex, gemini, custom.`, "bad_args");
  }
  if (agent === "custom" && typeof args.command !== "string") {
    return errorResult("agent='custom' requires 'command' parameter.", "bad_args");
  }
  const result = await adapter.executor.openTerminal({
    agent,
    command: typeof args.command === "string" ? args.command : undefined,
    terminal: typeof args.terminal === "string" ? args.terminal : undefined,
    workingDirectory: typeof args.working_directory === "string" ? args.working_directory : undefined
  });
  if (!result) {
    return errorResult("Failed to open terminal. Windows Terminal (wt.exe) may not be installed.", "launch_failed");
  }
  if (!result.launched) {
    return okText(`Terminal opened (hwnd=${result.hwnd}, "${result.title}") but no command was sent. Window is now bound.`);
  }
  const agentNames = {
    claude: "MiMo Code",
    codex: "Codex",
    gemini: "Gemini",
    custom: args.command
  };
  return okText(`Terminal opened and ${agentNames[agent] ?? agent} launched.
` + `Window: hwnd=${result.hwnd} "${result.title}"
` + `Command: '${agent === "custom" ? args.command : agent}' + Enter
` + `Status: bound to this terminal. Take a screenshot to verify the agent started.`);
}
async function handleBindWindow(adapter, args) {
  const action = requireString(args, "action");
  if (action instanceof Error)
    return errorResult(action.message, "bad_args");
  switch (action) {
    case "list": {
      if (!adapter.executor.listVisibleWindows) {
        return errorResult("bind_window is only available on Windows.", "feature_unavailable");
      }
      const windows = await adapter.executor.listVisibleWindows();
      if (windows.length === 0)
        return okText("No visible windows found.");
      const lines = windows.map((w) => `hwnd=${w.hwnd} pid=${w.pid} "${w.title}"`);
      return okText(`Visible windows (${windows.length}):
${lines.join(`
`)}`);
    }
    case "status": {
      if (!adapter.executor.getBindingStatus) {
        return errorResult("bind_window is only available on Windows.", "feature_unavailable");
      }
      const status = await adapter.executor.getBindingStatus();
      if (!status || !status.bound) {
        return okText("No window is currently bound. Use bind_window(action='list') to see available windows, then bind_window(action='bind', title='...') to bind.");
      }
      let text = `Bound to: hwnd=${status.hwnd}`;
      if (status.title)
        text += ` "${status.title}"`;
      if (status.pid)
        text += ` pid=${status.pid}`;
      if (status.rect)
        text += ` rect=(${status.rect.x},${status.rect.y} ${status.rect.width}x${status.rect.height})`;
      return okText(text);
    }
    case "bind": {
      if (!adapter.executor.bindToWindow) {
        return errorResult("bind_window is only available on Windows.", "feature_unavailable");
      }
      const title = typeof args.title === "string" ? args.title : undefined;
      const hwnd = typeof args.hwnd === "string" ? args.hwnd : undefined;
      const pid = typeof args.pid === "number" ? args.pid : undefined;
      if (!title && !hwnd && !pid) {
        return errorResult("Specify at least one of: title, hwnd, or pid.", "bad_args");
      }
      const result = await adapter.executor.bindToWindow({ hwnd, title, pid });
      if (!result) {
        return errorResult(`No window found matching: ${[title && `title="${title}"`, hwnd && `hwnd=${hwnd}`, pid && `pid=${pid}`].filter(Boolean).join(", ")}. Use bind_window(action='list') to see available windows.`, "element_not_found");
      }
      return okText(`Bound to window: hwnd=${result.hwnd} pid=${result.pid} "${result.title}". All subsequent screenshot/click/type operations target this window.`);
    }
    case "unbind": {
      if (!adapter.executor.unbindFromWindow) {
        return errorResult("bind_window is only available on Windows.", "feature_unavailable");
      }
      await adapter.executor.unbindFromWindow();
      return okText("Window binding released. Operations now target the full screen.");
    }
    default:
      return errorResult(`Unknown bind_window action "${action}". Valid: list, bind, unbind, status.`, "bad_args");
  }
}
async function handleClickElement(adapter, args) {
  if (!adapter.executor.clickElement) {
    return errorResult("click_element is only available on Windows with a bound window.", "feature_unavailable");
  }
  const name = typeof args.name === "string" ? args.name : undefined;
  const role = typeof args.role === "string" ? args.role : undefined;
  const automationId = typeof args.automationId === "string" ? args.automationId : undefined;
  if (!name && !role && !automationId) {
    return errorResult("At least one of name, role, or automationId is required.", "bad_args");
  }
  const ok = await adapter.executor.clickElement({ name, role, automationId });
  if (!ok) {
    return errorResult(`Element not found: ${[name && `name="${name}"`, role && `role=${role}`, automationId && `id=${automationId}`].filter(Boolean).join(", ")}. Take a screenshot to see current GUI elements.`, "element_not_found");
  }
  return okText(`Clicked element: ${[name && `"${name}"`, role, automationId].filter(Boolean).join(" ")}`);
}
async function handleTypeIntoElement(adapter, args) {
  if (!adapter.executor.typeIntoElement) {
    return errorResult("type_into_element is only available on Windows with a bound window.", "feature_unavailable");
  }
  const text = requireString(args, "text");
  if (text instanceof Error)
    return errorResult(text.message, "bad_args");
  const name = typeof args.name === "string" ? args.name : undefined;
  const role = typeof args.role === "string" ? args.role : undefined;
  const automationId = typeof args.automationId === "string" ? args.automationId : undefined;
  const ok = await adapter.executor.typeIntoElement({ name, role, automationId }, text);
  if (!ok) {
    return errorResult(`Could not type into element: ${[name && `name="${name}"`, role && `role=${role}`, automationId && `id=${automationId}`].filter(Boolean).join(", ")}. The element was not found or doesn't support text input.`, "element_not_found");
  }
  return okText(`Typed ${text.length} chars into: ${[name && `"${name}"`, role, automationId].filter(Boolean).join(" ")}`);
}
async function handleWindowManagement(adapter, args) {
  const action = requireString(args, "action");
  if (action instanceof Error)
    return errorResult(action.message, "bad_args");
  const VALID_ACTIONS = new Set([
    "minimize",
    "maximize",
    "restore",
    "close",
    "focus",
    "move_offscreen",
    "move_resize",
    "get_rect"
  ]);
  if (!VALID_ACTIONS.has(action)) {
    return errorResult(`Unknown window_management action "${action}". Valid: ${[...VALID_ACTIONS].join(", ")}`, "bad_args");
  }
  if (!adapter.executor.manageWindow) {
    return errorResult("window_management is only available on Windows with a bound window.", "feature_unavailable");
  }
  if (action === "get_rect") {
    if (!adapter.executor.getWindowRect) {
      return errorResult("getWindowRect not available.", "feature_unavailable");
    }
    const rect = await adapter.executor.getWindowRect();
    if (!rect) {
      return errorResult("No window is currently bound. Call open_application first.", "bad_args");
    }
    return okText(`Window rect: x=${rect.x}, y=${rect.y}, width=${rect.width}, height=${rect.height}`);
  }
  if (action === "move_resize") {
    const x = typeof args.x === "number" ? args.x : undefined;
    const y = typeof args.y === "number" ? args.y : undefined;
    if (x === undefined || y === undefined) {
      return errorResult("move_resize requires x and y parameters.", "bad_args");
    }
    const width = typeof args.width === "number" ? args.width : undefined;
    const height = typeof args.height === "number" ? args.height : undefined;
    const ok2 = await adapter.executor.manageWindow(action, { x, y, width, height });
    if (!ok2) {
      return errorResult("No window is currently bound. Call open_application first.", "bad_args");
    }
    return okText(width && height ? `Moved window to (${x}, ${y}) and resized to ${width}\xD7${height}.` : `Moved window to (${x}, ${y}).`);
  }
  const ok = await adapter.executor.manageWindow(action);
  if (!ok) {
    return errorResult("No window is currently bound. Call open_application first.", "bad_args");
  }
  const descriptions = {
    minimize: "Window minimized (ShowWindow SW_MINIMIZE).",
    maximize: "Window maximized (ShowWindow SW_MAXIMIZE).",
    restore: "Window restored (ShowWindow SW_RESTORE).",
    close: "Window closed (SendMessage WM_CLOSE). The window binding has been released.",
    focus: "Window brought to front (SetForegroundWindow).",
    move_offscreen: "Window moved offscreen (-32000,-32000). Still usable via SendMessage/PrintWindow."
  };
  return okText(descriptions[action] ?? `Action "${action}" completed.`);
}
async function handleSwitchDisplay(adapter, args, overrides) {
  const display = requireString(args, "display");
  if (display instanceof Error)
    return errorResult(display.message, "bad_args");
  if (!overrides.onDisplayPinned) {
    return errorResult("Display switching is not available in this session.", "feature_unavailable");
  }
  if (display.toLowerCase() === "auto") {
    overrides.onDisplayPinned(undefined);
    return okText("Returned to automatic monitor selection. Call screenshot to continue.");
  }
  let displays;
  try {
    displays = await adapter.executor.listDisplays();
  } catch (e) {
    return errorResult(`Failed to enumerate displays: ${String(e)}`, "display_error");
  }
  if (displays.length < 2) {
    return errorResult("Only one monitor is connected. There is nothing to switch to.", "bad_args");
  }
  const labels = uniqueDisplayLabels(displays);
  const wanted = display.toLowerCase();
  const target = displays.find((d) => labels.get(d.displayId)?.toLowerCase() === wanted);
  if (!target) {
    const available = displays.map((d) => `"${labels.get(d.displayId)}"`).join(", ");
    return errorResult(`No monitor named "${display}" is connected. Available monitors: ${available}.`, "bad_args");
  }
  overrides.onDisplayPinned(target.displayId);
  return okText(`Switched to monitor "${labels.get(target.displayId)}". Call screenshot to see it.`);
}
function handleListGrantedApplications(overrides) {
  return okJson({
    allowedApps: overrides.allowedApps,
    grantFlags: overrides.grantFlags
  });
}
async function handleReadClipboard(adapter, overrides, subGates) {
  if (!overrides.grantFlags.clipboardRead) {
    return errorResult("Clipboard read is not granted. Request `clipboardRead` via request_access.", "grant_flag_required");
  }
  if (subGates.clipboardGuard) {
    const frontmost = await adapter.executor.getFrontmostApp();
    const tierByBundleId = new Map(overrides.allowedApps.map((a) => [a.bundleId, a.tier]));
    const frontmostTier = frontmost ? tierByBundleId.get(frontmost.bundleId) : undefined;
    await syncClipboardStash(adapter, overrides, frontmostTier === "click");
  }
  const text = await adapter.executor.readClipboard();
  return okJson({ text });
}
async function handleWriteClipboard(adapter, args, overrides, subGates) {
  if (!overrides.grantFlags.clipboardWrite) {
    return errorResult("Clipboard write is not granted. Request `clipboardWrite` via request_access.", "grant_flag_required");
  }
  const text = requireString(args, "text");
  if (text instanceof Error)
    return errorResult(text.message, "bad_args");
  if (subGates.clipboardGuard) {
    const frontmost = await adapter.executor.getFrontmostApp();
    const tierByBundleId = new Map(overrides.allowedApps.map((a) => [a.bundleId, a.tier]));
    const frontmostTier = frontmost ? tierByBundleId.get(frontmost.bundleId) : undefined;
    if (frontmost && frontmostTier === "click") {
      return errorResult(`"${frontmost.displayName}" is a tier-"click" app and currently ` + `frontmost. write_clipboard is blocked because the next action ` + `would clear the clipboard anyway \u2014 a UI Paste button in this ` + `app cannot be used to inject text. Bring a tier-"full" app ` + `forward before writing to the clipboard.` + TIER_ANTI_SUBVERSION, "tier_insufficient");
    }
    await syncClipboardStash(adapter, overrides, frontmostTier === "click");
  }
  await adapter.executor.writeClipboard(text);
  return okText("Clipboard written.");
}
async function handleWait(args) {
  const duration = args.duration;
  if (typeof duration !== "number" || !Number.isFinite(duration)) {
    return errorResult("duration must be a number", "bad_args");
  }
  if (duration < 0) {
    return errorResult("duration must be non-negative", "bad_args");
  }
  if (duration > 100) {
    return errorResult("duration is too long. Duration is in seconds.", "bad_args");
  }
  await sleep(duration * 1000);
  return okText(`Waited ${duration}s.`);
}
async function handleCursorPosition(adapter, overrides) {
  const logical = await adapter.executor.getCursorPosition();
  const shot = overrides.lastScreenshot;
  if (shot) {
    const localX = logical.x - shot.originX;
    const localY = logical.y - shot.originY;
    if (localX < 0 || localX > shot.displayWidth || localY < 0 || localY > shot.displayHeight) {
      return okJson({
        x: logical.x,
        y: logical.y,
        coordinateSpace: "logical_points",
        note: "cursor is on a different monitor than your last screenshot; take a fresh screenshot"
      });
    }
    const x = Math.round(localX * (shot.width / shot.displayWidth));
    const y = Math.round(localY * (shot.height / shot.displayHeight));
    return okJson({ x, y, coordinateSpace: "image_pixels" });
  }
  return okJson({
    x: logical.x,
    y: logical.y,
    coordinateSpace: "logical_points",
    note: "take a screenshot first for image-pixel coordinates"
  });
}
async function handleHoldKey(adapter, args, overrides, subGates) {
  const text = requireString(args, "text");
  if (text instanceof Error)
    return errorResult(text.message, "bad_args");
  const duration = args.duration;
  if (typeof duration !== "number" || !Number.isFinite(duration)) {
    return errorResult("duration must be a number", "bad_args");
  }
  if (duration < 0) {
    return errorResult("duration must be non-negative", "bad_args");
  }
  if (duration > 100) {
    return errorResult("duration is too long. Duration is in seconds.", "bad_args");
  }
  if (isSystemKeyCombo(text, adapter.executor.capabilities.platform) && !overrides.grantFlags.systemKeyCombos) {
    return errorResult(`"${text}" is a system-level shortcut. Request the \`systemKeyCombos\` grant via request_access to use it.`, "grant_flag_required");
  }
  const gate = await runInputActionGates(adapter, overrides, subGates, "keyboard");
  if (gate)
    return gate;
  const keyNames = parseKeyChord(text);
  await adapter.executor.holdKey(keyNames, duration * 1000);
  return okText("Key held.");
}
async function handleLeftMouseDown(adapter, overrides, subGates) {
  if (mouseButtonHeld) {
    return errorResult("mouse button already held, call left_mouse_up first", "state_conflict");
  }
  const gate = await runInputActionGates(adapter, overrides, subGates, "mouse");
  if (gate)
    return gate;
  const cursor = await adapter.executor.getCursorPosition();
  const hitGate = await runHitTestGate(adapter, overrides, subGates, cursor.x, cursor.y, "mouse");
  if (hitGate)
    return hitGate;
  await adapter.executor.mouseDown();
  mouseButtonHeld = true;
  mouseMoved = false;
  return okText("Mouse button pressed.");
}
async function handleLeftMouseUp(adapter, overrides, subGates) {
  const releaseFirst = async (err) => {
    await adapter.executor.mouseUp();
    mouseButtonHeld = false;
    mouseMoved = false;
    return err;
  };
  const gate = await runInputActionGates(adapter, overrides, subGates, "mouse");
  if (gate)
    return releaseFirst(gate);
  const cursor = await adapter.executor.getCursorPosition();
  const hitGate = await runHitTestGate(adapter, overrides, subGates, cursor.x, cursor.y, mouseMoved ? "mouse_full" : "mouse");
  if (hitGate)
    return releaseFirst(hitGate);
  await adapter.executor.mouseUp();
  mouseButtonHeld = false;
  mouseMoved = false;
  return okText("Mouse button released.");
}
async function handleComputerBatch(adapter, args, overrides, subGates) {
  const actions = args.actions;
  if (!Array.isArray(actions) || actions.length === 0) {
    return errorResult("actions must be a non-empty array", "bad_args");
  }
  for (const [i, act] of actions.entries()) {
    if (typeof act !== "object" || act === null) {
      return errorResult(`actions[${i}] must be an object`, "bad_args");
    }
    const action = act.action;
    if (typeof action !== "string") {
      return errorResult(`actions[${i}].action must be a string`, "bad_args");
    }
    if (!BATCHABLE_ACTIONS.has(action)) {
      return errorResult(`actions[${i}].action="${action}" is not allowed in a batch. ` + `Allowed: ${[...BATCHABLE_ACTIONS].join(", ")}.`, "bad_args");
    }
  }
  if (subGates.hideBeforeAction) {
    const hidden = await adapter.executor.prepareForAction(overrides.allowedApps.map((a) => a.bundleId), overrides.selectedDisplayId);
    if (hidden.length > 0) {
      overrides.onAppsHidden?.(hidden);
    }
  }
  const batchSubGates = {
    ...subGates,
    hideBeforeAction: false,
    pixelValidation: false,
    autoTargetDisplay: false
  };
  const results = [];
  for (const [i, act] of actions.entries()) {
    if (overrides.isAborted?.()) {
      await releaseHeldMouse(adapter);
      return errorResult(`Batch aborted after ${results.length} of ${actions.length} actions (user interrupt).`);
    }
    if (i > 0)
      await sleep(10);
    const actionArgs = act;
    const action = actionArgs.action;
    const { screenshot: _dropped, ...inner } = await dispatchAction(action, actionArgs, adapter, overrides, batchSubGates);
    const text = firstTextContent(inner);
    const result = { action, ok: !inner.isError, output: text };
    results.push(result);
    if (inner.isError) {
      await releaseHeldMouse(adapter);
      return okJson({
        completed: results.slice(0, -1),
        failed: result,
        remaining: actions.length - results.length
      }, inner.telemetry);
    }
  }
  return okJson({ completed: results });
}
function firstTextContent(r) {
  const first = r.content[0];
  return first && first.type === "text" ? first.text : "";
}
async function dispatchAction(name, a, adapter, overrides, subGates) {
  const hasBoundWindow = await adapter.executor.hasBoundWindow?.() === true && adapter.executor.virtualMouse && adapter.executor.virtualKeyboard;
  if (hasBoundWindow) {
    const coord = Array.isArray(a.coordinate) ? a.coordinate : undefined;
    switch (name) {
      case "left_click":
        if (coord)
          return handleVirtualMouse(adapter, { action: "click", coordinate: coord });
        break;
      case "double_click":
        if (coord)
          return handleVirtualMouse(adapter, { action: "double_click", coordinate: coord });
        break;
      case "right_click":
        if (coord)
          return handleVirtualMouse(adapter, { action: "right_click", coordinate: coord });
        break;
      case "mouse_move":
        if (coord)
          return handleVirtualMouse(adapter, { action: "move", coordinate: coord });
        break;
      case "left_click_drag":
        if (coord)
          return handleVirtualMouse(adapter, {
            action: "drag",
            coordinate: coord,
            start_coordinate: Array.isArray(a.start_coordinate) ? a.start_coordinate : undefined
          });
        break;
      case "left_mouse_down":
        if (coord)
          return handleVirtualMouse(adapter, { action: "down", coordinate: coord });
        break;
      case "left_mouse_up":
        if (coord)
          return handleVirtualMouse(adapter, { action: "up", coordinate: coord });
        break;
      case "type":
        if (typeof a.text === "string")
          return handleVirtualKeyboard(adapter, { action: "type", text: a.text });
        break;
      case "key":
        if (typeof a.text === "string")
          return handleVirtualKeyboard(adapter, { action: "combo", text: a.text, repeat: a.repeat });
        break;
      case "hold_key":
        if (typeof a.text === "string")
          return handleVirtualKeyboard(adapter, {
            action: "hold",
            text: a.text,
            duration: typeof a.duration === "number" ? a.duration : 1
          });
        break;
      case "scroll":
        if (coord)
          return handleMouseWheel(adapter, {
            coordinate: coord,
            delta: a.scroll_direction === "up" ? a.scroll_amount ?? 3 : -(a.scroll_amount ?? 3),
            direction: a.scroll_direction === "left" || a.scroll_direction === "right" ? "horizontal" : "vertical"
          });
        break;
    }
  }
  switch (name) {
    case "screenshot":
      return handleScreenshot(adapter, overrides, subGates);
    case "zoom":
      return handleZoom(adapter, a, overrides);
    case "left_click":
      return handleClickVariant(adapter, a, overrides, subGates, "left", 1);
    case "double_click":
      return handleClickVariant(adapter, a, overrides, subGates, "left", 2);
    case "triple_click":
      return handleClickVariant(adapter, a, overrides, subGates, "left", 3);
    case "right_click":
      return handleClickVariant(adapter, a, overrides, subGates, "right", 1);
    case "middle_click":
      return handleClickVariant(adapter, a, overrides, subGates, "middle", 1);
    case "type":
      return handleType(adapter, a, overrides, subGates);
    case "key":
      return handleKey(adapter, a, overrides, subGates);
    case "scroll":
      return handleScroll(adapter, a, overrides, subGates);
    case "left_click_drag":
      return handleDrag(adapter, a, overrides, subGates);
    case "mouse_move":
      return handleMoveMouse(adapter, a, overrides, subGates);
    case "wait":
      return handleWait(a);
    case "cursor_position":
      return handleCursorPosition(adapter, overrides);
    case "hold_key":
      return handleHoldKey(adapter, a, overrides, subGates);
    case "left_mouse_down":
      return handleLeftMouseDown(adapter, overrides, subGates);
    case "left_mouse_up":
      return handleLeftMouseUp(adapter, overrides, subGates);
    case "open_application":
      return handleOpenApplication(adapter, a, overrides);
    case "window_management":
      return handleWindowManagement(adapter, a);
    case "click_element":
      return handleClickElement(adapter, a);
    case "type_into_element":
      return handleTypeIntoElement(adapter, a);
    case "open_terminal":
      return handleOpenTerminal(adapter, a);
    case "bind_window":
      return handleBindWindow(adapter, a);
    case "virtual_mouse":
      return handleVirtualMouse(adapter, a);
    case "virtual_keyboard":
      return handleVirtualKeyboard(adapter, a);
    case "status_indicator":
      return handleStatusIndicator(adapter, a);
    case "mouse_wheel":
      return handleMouseWheel(adapter, a);
    case "activate_window":
      return handleActivateWindow(adapter, a);
    case "prompt_respond":
      return handlePromptRespond(adapter, a);
    case "switch_display":
      return handleSwitchDisplay(adapter, a, overrides);
    case "list_granted_applications":
      return handleListGrantedApplications(overrides);
    case "read_clipboard":
      return handleReadClipboard(adapter, overrides, subGates);
    case "write_clipboard":
      return handleWriteClipboard(adapter, a, overrides, subGates);
    case "computer_batch":
      return handleComputerBatch(adapter, a, overrides, subGates);
    default:
      return errorResult(`Unknown tool "${name}".`, "bad_args");
  }
}
async function handleToolCall(adapter, name, args, rawOverrides) {
  const { logger, serverName } = adapter;
  const userDeniedSet = new Set(rawOverrides.userDeniedBundleIds);
  const overrides = rawOverrides.allowedApps.some((a2) => a2.tier === undefined || userDeniedSet.has(a2.bundleId) || isPolicyDenied(a2.bundleId, a2.displayName)) ? {
    ...rawOverrides,
    allowedApps: rawOverrides.allowedApps.filter((a2) => !userDeniedSet.has(a2.bundleId)).filter((a2) => !isPolicyDenied(a2.bundleId, a2.displayName)).map((a2) => a2.tier !== undefined ? a2 : { ...a2, tier: getDefaultTierForApp(a2.bundleId, a2.displayName) })
  } : rawOverrides;
  if (adapter.isDisabled()) {
    return errorResult("Computer control is disabled in Settings. Enable it and try again.", "other");
  }
  const osPerms = await adapter.ensureOsPermissions();
  let tccState;
  if (!osPerms.granted) {
    if (name !== "request_access" && name !== "request_teach_access") {
      return errorResult("Accessibility and Screen Recording permissions are required. " + "Call request_access to show the permission panel.", "tcc_not_granted");
    }
    tccState = {
      accessibility: osPerms.accessibility,
      screenRecording: osPerms.screenRecording
    };
  }
  const deferAcquire = defersLockAcquire(name);
  const lock = overrides.checkCuLock?.();
  if (lock) {
    if (lock.holder !== undefined && !lock.isSelf) {
      return errorResult("Another MiMo session is currently using the computer. Wait for " + "the user to acknowledge it is finished (stop button in the MiMo " + "window), or find a non-computer-use approach if one is readily " + "apparent.", "cu_lock_held");
    }
    if (lock.holder === undefined && !deferAcquire) {
      overrides.acquireCuLock?.();
      resetMouseButtonHeld();
    }
  }
  const subGates = adapter.getSubGates();
  const a = asRecord(args);
  logger.silly(`[${serverName}] tool=${name} args=${JSON.stringify(a).slice(0, 200)}`);
  try {
    if (name === "request_access") {
      return await handleRequestAccess(adapter, a, overrides, tccState);
    }
    if (name === "request_teach_access") {
      return await handleRequestTeachAccess(adapter, a, overrides, tccState);
    }
    if (name === "teach_step") {
      return await handleTeachStep(adapter, a, overrides, subGates);
    }
    if (name === "teach_batch") {
      return await handleTeachBatch(adapter, a, overrides, subGates);
    }
    return await dispatchAction(name, a, adapter, overrides, subGates);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    logger.error(`[${serverName}] tool=${name} threw: ${msg}`, err);
    return errorResult(`Tool "${name}" failed: ${msg}`, "executor_threw");
  }
}
var FINDER_BUNDLE_ID = "com.apple.finder", TIER_ANTI_SUBVERSION, MIN_SCREENSHOT_BYTES = 1024, INTER_GRAPHEME_SLEEP_MS = 8, mouseButtonHeld = false, mouseMoved = false, REVERSE_DNS_RE, BATCHABLE_ACTIONS;
var init_toolCalls = __esm(() => {
  init_deniedApps();
  init_keyBlocklist();
  init_pixelCompare();
  init_sentinelApps();
  TIER_ANTI_SUBVERSION = " Do not attempt to work around this restriction \u2014 never use AppleScript, " + "System Events, shell commands, or any other method to send clicks or " + "keystrokes to this app.";
  REVERSE_DNS_RE = /^[A-Za-z0-9][\w.-]*\.[A-Za-z0-9][\w.-]*$/;
  BATCHABLE_ACTIONS = new Set([
    "key",
    "type",
    "mouse_move",
    "left_click",
    "left_click_drag",
    "right_click",
    "middle_click",
    "double_click",
    "triple_click",
    "scroll",
    "hold_key",
    "screenshot",
    "cursor_position",
    "left_mouse_down",
    "left_mouse_up",
    "wait"
  ]);
});

// packages/@ant/computer-use-mcp/src/types.ts
var DEFAULT_GRANT_FLAGS;
var init_types2 = __esm(() => {
  DEFAULT_GRANT_FLAGS = {
    clipboardRead: false,
    clipboardWrite: false,
    systemKeyCombos: false
  };
});

// packages/@ant/computer-use-mcp/src/mcpServer.ts
function mergePermissionResponse(existing, existingFlags, response) {
  const seen = new Set(existing.map((a) => a.bundleId));
  const apps = [
    ...existing,
    ...response.granted.filter((g) => !seen.has(g.bundleId))
  ];
  const truthyFlags = Object.fromEntries(Object.entries(response.flags).filter(([, v]) => v === true));
  const flags = {
    ...DEFAULT_GRANT_FLAGS,
    ...existingFlags,
    ...truthyFlags
  };
  return { apps, flags };
}
function bindSessionContext(adapter, coordinateMode, ctx) {
  const { logger, serverName } = adapter;
  let lastScreenshot;
  const wrapPermission = ctx.onPermissionRequest ? async (req, signal) => {
    const response = await ctx.onPermissionRequest(req, signal);
    const { apps, flags } = mergePermissionResponse(ctx.getAllowedApps(), ctx.getGrantFlags(), response);
    logger.debug(`[${serverName}] permission result: granted=${response.granted.length} denied=${response.denied.length}`);
    ctx.onAllowedAppsChanged?.(apps, flags);
    return response;
  } : undefined;
  const wrapTeachPermission = ctx.onTeachPermissionRequest ? async (req, signal) => {
    const response = await ctx.onTeachPermissionRequest(req, signal);
    logger.debug(`[${serverName}] teach permission result: granted=${response.granted.length} denied=${response.denied.length}`);
    const { apps } = mergePermissionResponse(ctx.getAllowedApps(), ctx.getGrantFlags(), response);
    ctx.onAllowedAppsChanged?.(apps, {
      ...DEFAULT_GRANT_FLAGS,
      ...ctx.getGrantFlags()
    });
    return response;
  } : undefined;
  return async (name, args) => {
    if (ctx.checkCuLock) {
      const lock = await ctx.checkCuLock();
      if (lock.holder !== undefined && !lock.isSelf) {
        const text = ctx.formatLockHeldMessage?.(lock.holder) ?? DEFAULT_LOCK_HELD_MESSAGE;
        return {
          content: [{ type: "text", text }],
          isError: true,
          telemetry: { error_kind: "cu_lock_held" }
        };
      }
      if (lock.holder === undefined && !defersLockAcquire(name)) {
        await ctx.acquireCuLock?.();
        const recheck = await ctx.checkCuLock();
        if (recheck.holder !== undefined && !recheck.isSelf) {
          const text = ctx.formatLockHeldMessage?.(recheck.holder) ?? DEFAULT_LOCK_HELD_MESSAGE;
          return {
            content: [{ type: "text", text }],
            isError: true,
            telemetry: { error_kind: "cu_lock_held" }
          };
        }
        resetMouseButtonHeld();
      }
    }
    const dimsFallback = lastScreenshot ? undefined : ctx.getLastScreenshotDims?.();
    const dialogAbort = new AbortController;
    const overrides = {
      allowedApps: [...ctx.getAllowedApps()],
      grantFlags: ctx.getGrantFlags(),
      userDeniedBundleIds: ctx.getUserDeniedBundleIds(),
      coordinateMode,
      selectedDisplayId: ctx.getSelectedDisplayId(),
      displayPinnedByModel: ctx.getDisplayPinnedByModel?.(),
      displayResolvedForApps: ctx.getDisplayResolvedForApps?.(),
      lastScreenshot: lastScreenshot ?? (dimsFallback ? { ...dimsFallback, base64: "" } : undefined),
      onPermissionRequest: wrapPermission ? (req) => wrapPermission(req, dialogAbort.signal) : undefined,
      onTeachPermissionRequest: wrapTeachPermission ? (req) => wrapTeachPermission(req, dialogAbort.signal) : undefined,
      onAppsHidden: ctx.onAppsHidden,
      getClipboardStash: ctx.getClipboardStash,
      onClipboardStashChanged: ctx.onClipboardStashChanged,
      onResolvedDisplayUpdated: ctx.onResolvedDisplayUpdated,
      onDisplayPinned: ctx.onDisplayPinned,
      onDisplayResolvedForApps: ctx.onDisplayResolvedForApps,
      onTeachModeActivated: ctx.onTeachModeActivated,
      onTeachStep: ctx.onTeachStep,
      onTeachWorking: ctx.onTeachWorking,
      getTeachModeActive: ctx.getTeachModeActive,
      checkCuLock: undefined,
      acquireCuLock: undefined,
      isAborted: ctx.isAborted
    };
    logger.debug(`[${serverName}] tool=${name} allowedApps=${overrides.allowedApps.length} coordMode=${coordinateMode}`);
    try {
      const result = await handleToolCall(adapter, name, args, overrides);
      if (result.screenshot) {
        lastScreenshot = result.screenshot;
        const { base64: _blob, ...dims } = result.screenshot;
        logger.debug(`[${serverName}] screenshot dims: ${JSON.stringify(dims)}`);
        ctx.onScreenshotCaptured?.(dims);
      }
      return result;
    } finally {
      dialogAbort.abort();
    }
  };
}
function createComputerUseMcpServer(adapter, coordinateMode, context) {
  const { serverName, logger } = adapter;
  const server = new Server({ name: serverName, version: "0.1.3" }, { capabilities: { tools: {}, logging: {} } });
  const tools = buildComputerUseTools(adapter.executor.capabilities, coordinateMode);
  server.setRequestHandler(ListToolsRequestSchema, async () => adapter.isDisabled() ? { tools: [] } : { tools });
  if (context) {
    const dispatch = bindSessionContext(adapter, coordinateMode, context);
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { screenshot: _s, telemetry: _t, ...result } = await dispatch(request.params.name, request.params.arguments ?? {});
      return result;
    });
    return server;
  }
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    logger.warn(`[${serverName}] tool call "${request.params.name}" reached the stub handler \u2014 no session context bound. Per-session state unavailable.`);
    return {
      content: [
        {
          type: "text",
          text: "This computer-use server instance is not wired to a session. Per-session app permissions are not available on this code path."
        }
      ],
      isError: true
    };
  });
  return server;
}
var DEFAULT_LOCK_HELD_MESSAGE;
var init_mcpServer = __esm(() => {
  init_server();
  init_types();
  init_toolCalls();
  init_tools();
  init_types2();
  DEFAULT_LOCK_HELD_MESSAGE = "Another MiMo session is currently using the computer. Wait for that " + "session to finish, or find a non-computer-use approach.";
});

// packages/@ant/computer-use-mcp/src/subGates.ts
var init_subGates = () => {};

// packages/@ant/computer-use-mcp/src/index.ts
var init_src = __esm(() => {
  init_types2();
  init_sentinelApps();
  init_deniedApps();
  init_keyBlocklist();
  init_subGates();
  init_imageResize();
  init_toolCalls();
  init_mcpServer();
  init_tools();
  init_pixelCompare();
});

export { DEFAULT_GRANT_FLAGS, init_types2 as init_types, getSentinelCategory, init_sentinelApps, API_RESIZE_PARAMS, targetImageSize, buildComputerUseTools, bindSessionContext, createComputerUseMcpServer, init_src };
