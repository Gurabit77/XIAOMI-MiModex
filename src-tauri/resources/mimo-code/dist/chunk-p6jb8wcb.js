// @bun
import {
  Cursor,
  getLastKill,
  init_Cursor,
  init_useTerminalSize,
  pushToKillRing,
  recordYank,
  resetKillAccumulation,
  resetYankState,
  updateYankLength,
  yankPop
} from "./chunk-ktw919wt.js";
import {
  KeyboardEvent,
  init_src,
  useTerminalSize,
  use_input_default
} from "./chunk-er1s76c9.js";
import {
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/hooks/useSearchInput.ts
function isKillKey(e) {
  if (e.ctrl && (e.key === "k" || e.key === "u" || e.key === "w")) {
    return true;
  }
  if (e.meta && e.key === "backspace") {
    return true;
  }
  return false;
}
function isYankKey(e) {
  return (e.ctrl || e.meta) && e.key === "y";
}
function useSearchInput({
  isActive,
  onExit,
  onCancel,
  onExitUp,
  columns,
  passthroughCtrlKeys = [],
  initialQuery = "",
  backspaceExitsOnEmpty = true
}) {
  const { columns: terminalColumns } = useTerminalSize();
  const effectiveColumns = columns ?? terminalColumns;
  const [query, setQueryState] = import_react.useState(initialQuery);
  const [cursorOffset, setCursorOffset] = import_react.useState(initialQuery.length);
  const setQuery = import_react.useCallback((q) => {
    setQueryState(q);
    setCursorOffset(q.length);
  }, []);
  const handleKeyDown = (e) => {
    if (!isActive)
      return;
    const cursor = Cursor.fromText(query, effectiveColumns, cursorOffset);
    if (e.ctrl && passthroughCtrlKeys.includes(e.key.toLowerCase())) {
      return;
    }
    if (!isKillKey(e)) {
      resetKillAccumulation();
    }
    if (!isYankKey(e)) {
      resetYankState();
    }
    if (e.key === "return" || e.key === "down") {
      e.preventDefault();
      onExit();
      return;
    }
    if (e.key === "up") {
      e.preventDefault();
      if (onExitUp) {
        onExitUp();
      }
      return;
    }
    if (e.key === "escape") {
      e.preventDefault();
      if (onCancel) {
        onCancel();
      } else if (query.length > 0) {
        setQueryState("");
        setCursorOffset(0);
      } else {
        onExit();
      }
      return;
    }
    if (e.key === "backspace") {
      e.preventDefault();
      if (e.meta) {
        const { cursor: newCursor2, killed } = cursor.deleteWordBefore();
        pushToKillRing(killed, "prepend");
        setQueryState(newCursor2.text);
        setCursorOffset(newCursor2.offset);
        return;
      }
      if (query.length === 0) {
        if (backspaceExitsOnEmpty)
          (onCancel ?? onExit)();
        return;
      }
      const newCursor = cursor.backspace();
      setQueryState(newCursor.text);
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "delete") {
      e.preventDefault();
      const newCursor = cursor.del();
      setQueryState(newCursor.text);
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "left" && (e.ctrl || e.meta || e.fn)) {
      e.preventDefault();
      const newCursor = cursor.prevWord();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "right" && (e.ctrl || e.meta || e.fn)) {
      e.preventDefault();
      const newCursor = cursor.nextWord();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "left") {
      e.preventDefault();
      const newCursor = cursor.left();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "right") {
      e.preventDefault();
      const newCursor = cursor.right();
      setCursorOffset(newCursor.offset);
      return;
    }
    if (e.key === "home") {
      e.preventDefault();
      setCursorOffset(0);
      return;
    }
    if (e.key === "end") {
      e.preventDefault();
      setCursorOffset(query.length);
      return;
    }
    if (e.ctrl) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case "a":
          setCursorOffset(0);
          return;
        case "e":
          setCursorOffset(query.length);
          return;
        case "b":
          setCursorOffset(cursor.left().offset);
          return;
        case "f":
          setCursorOffset(cursor.right().offset);
          return;
        case "d": {
          if (query.length === 0) {
            (onCancel ?? onExit)();
            return;
          }
          const newCursor = cursor.del();
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "h": {
          if (query.length === 0) {
            if (backspaceExitsOnEmpty)
              (onCancel ?? onExit)();
            return;
          }
          const newCursor = cursor.backspace();
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "k": {
          const { cursor: newCursor, killed } = cursor.deleteToLineEnd();
          pushToKillRing(killed, "append");
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "u": {
          const { cursor: newCursor, killed } = cursor.deleteToLineStart();
          pushToKillRing(killed, "prepend");
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "w": {
          const { cursor: newCursor, killed } = cursor.deleteWordBefore();
          pushToKillRing(killed, "prepend");
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "y": {
          const text = getLastKill();
          if (text.length > 0) {
            const startOffset = cursor.offset;
            const newCursor = cursor.insert(text);
            recordYank(startOffset, text.length);
            setQueryState(newCursor.text);
            setCursorOffset(newCursor.offset);
          }
          return;
        }
        case "g":
        case "c":
          if (onCancel) {
            onCancel();
            return;
          }
      }
      return;
    }
    if (e.meta) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case "b":
          setCursorOffset(cursor.prevWord().offset);
          return;
        case "f":
          setCursorOffset(cursor.nextWord().offset);
          return;
        case "d": {
          const newCursor = cursor.deleteWordAfter();
          setQueryState(newCursor.text);
          setCursorOffset(newCursor.offset);
          return;
        }
        case "y": {
          const popResult = yankPop();
          if (popResult) {
            const { text, start, length } = popResult;
            const before = query.slice(0, start);
            const after = query.slice(start + length);
            const newText = before + text + after;
            const newOffset = start + text.length;
            updateYankLength(text.length);
            setQueryState(newText);
            setCursorOffset(newOffset);
          }
          return;
        }
      }
      return;
    }
    if (e.key === "tab") {
      return;
    }
    if (e.key.length >= 1 && !UNHANDLED_SPECIAL_KEYS.has(e.key)) {
      e.preventDefault();
      const newCursor = cursor.insert(e.key);
      setQueryState(newCursor.text);
      setCursorOffset(newCursor.offset);
    }
  };
  use_input_default((_input, _key, event) => {
    handleKeyDown(new KeyboardEvent(event.keypress));
  }, { isActive });
  return { query, setQuery, cursorOffset, handleKeyDown };
}
var import_react, UNHANDLED_SPECIAL_KEYS;
var init_useSearchInput = __esm(() => {
  init_src();
  init_Cursor();
  init_useTerminalSize();
  import_react = __toESM(require_react(), 1);
  UNHANDLED_SPECIAL_KEYS = new Set([
    "pageup",
    "pagedown",
    "insert",
    "wheelup",
    "wheeldown",
    "mouse",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12"
  ]);
});

export { useSearchInput, init_useSearchInput };
