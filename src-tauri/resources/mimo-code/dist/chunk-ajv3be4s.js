// @bun
import {
  diffWordsWithSpace,
  expectColorDiff,
  init_colorDiff,
  init_fullscreen,
  init_libesm,
  init_sliceAnsi,
  init_useSettings,
  isFullscreenEnvEnabled,
  sliceAnsi,
  useSettings
} from "./chunk-ktw919wt.js";
import {
  NoSelect,
  RawAnsi,
  ThemedBox_default,
  ThemedText,
  init_src,
  stringWidth,
  useTheme,
  wrapText
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/StructuredDiff/Fallback.tsx
function StructuredDiffFallback({
  patch,
  dim,
  width
}) {
  const [theme] = useTheme();
  const diff = import_react.useMemo(() => formatDiff(patch.lines, patch.oldStart, width, dim, theme), [patch.lines, patch.oldStart, width, dim, theme]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    flexGrow: 1,
    children: diff.map((node, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: node
    }, i, false, undefined, this))
  }, undefined, false, undefined, this);
}
function transformLinesToObjects(lines) {
  return lines.map((code) => {
    if (code.startsWith("+")) {
      return {
        code: code.slice(1),
        i: 0,
        type: "add",
        originalCode: code.slice(1)
      };
    }
    if (code.startsWith("-")) {
      return {
        code: code.slice(1),
        i: 0,
        type: "remove",
        originalCode: code.slice(1)
      };
    }
    return {
      code: code.slice(1),
      i: 0,
      type: "nochange",
      originalCode: code.slice(1)
    };
  });
}
function processAdjacentLines(lineObjects) {
  const processedLines = [];
  let i = 0;
  while (i < lineObjects.length) {
    const current = lineObjects[i];
    if (!current) {
      i++;
      continue;
    }
    if (current.type === "remove") {
      const removeLines = [current];
      let j = i + 1;
      while (j < lineObjects.length && lineObjects[j]?.type === "remove") {
        const line = lineObjects[j];
        if (line) {
          removeLines.push(line);
        }
        j++;
      }
      const addLines = [];
      while (j < lineObjects.length && lineObjects[j]?.type === "add") {
        const line = lineObjects[j];
        if (line) {
          addLines.push(line);
        }
        j++;
      }
      if (removeLines.length > 0 && addLines.length > 0) {
        const pairCount = Math.min(removeLines.length, addLines.length);
        for (let k = 0;k < pairCount; k++) {
          const removeLine = removeLines[k];
          const addLine = addLines[k];
          if (removeLine && addLine) {
            removeLine.wordDiff = true;
            addLine.wordDiff = true;
            removeLine.matchedLine = addLine;
            addLine.matchedLine = removeLine;
          }
        }
        processedLines.push(...removeLines.filter(Boolean));
        processedLines.push(...addLines.filter(Boolean));
        i = j;
      } else {
        processedLines.push(current);
        i++;
      }
    } else {
      processedLines.push(current);
      i++;
    }
  }
  return processedLines;
}
function calculateWordDiffs(oldText, newText) {
  const result = diffWordsWithSpace(oldText, newText, { ignoreCase: false });
  return result;
}
function generateWordDiffElements(item, width, maxWidth, dim, overrideTheme) {
  const { type, i, wordDiff, matchedLine, originalCode } = item;
  if (!wordDiff || !matchedLine) {
    return null;
  }
  const removedLineText = type === "remove" ? originalCode : matchedLine.originalCode;
  const addedLineText = type === "remove" ? matchedLine.originalCode : originalCode;
  const wordDiffs = calculateWordDiffs(removedLineText, addedLineText);
  const totalLength = removedLineText.length + addedLineText.length;
  const changedLength = wordDiffs.filter((part) => part.added || part.removed).reduce((sum, part) => sum + part.value.length, 0);
  const changeRatio = changedLength / totalLength;
  if (changeRatio > CHANGE_THRESHOLD || dim) {
    return null;
  }
  const diffPrefix = type === "add" ? "+" : "-";
  const diffPrefixWidth = diffPrefix.length;
  const availableContentWidth = Math.max(1, width - maxWidth - 1 - diffPrefixWidth);
  const wrappedLines = [];
  let currentLine = [];
  let currentLineWidth = 0;
  wordDiffs.forEach((part, partIndex) => {
    let shouldShow = false;
    let partBgColor;
    if (type === "add") {
      if (part.added) {
        shouldShow = true;
        partBgColor = "diffAddedWord";
      } else if (!part.removed) {
        shouldShow = true;
      }
    } else if (type === "remove") {
      if (part.removed) {
        shouldShow = true;
        partBgColor = "diffRemovedWord";
      } else if (!part.added) {
        shouldShow = true;
      }
    }
    if (!shouldShow)
      return;
    const partWrapped = wrapText(part.value, availableContentWidth, "wrap");
    const partLines = partWrapped.split(`
`);
    partLines.forEach((partLine, lineIdx) => {
      if (!partLine)
        return;
      if (lineIdx > 0 || currentLineWidth + stringWidth(partLine) > availableContentWidth) {
        if (currentLine.length > 0) {
          wrappedLines.push({
            content: [...currentLine],
            contentWidth: currentLineWidth
          });
          currentLine = [];
          currentLineWidth = 0;
        }
      }
      currentLine.push(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        backgroundColor: partBgColor,
        children: partLine
      }, `part-${partIndex}-${lineIdx}`, false, undefined, this));
      currentLineWidth += stringWidth(partLine);
    });
  });
  if (currentLine.length > 0) {
    wrappedLines.push({ content: currentLine, contentWidth: currentLineWidth });
  }
  return wrappedLines.map(({ content, contentWidth }, lineIndex) => {
    const key = `${type}-${i}-${lineIndex}`;
    const lineBgColor = type === "add" ? dim ? "diffAddedDimmed" : "diffAdded" : dim ? "diffRemovedDimmed" : "diffRemoved";
    const lineNum = lineIndex === 0 ? i : undefined;
    const lineNumStr = (lineNum !== undefined ? lineNum.toString().padStart(maxWidth) : " ".repeat(maxWidth)) + " ";
    const usedWidth = lineNumStr.length + diffPrefixWidth + contentWidth;
    const padding = Math.max(0, width - usedWidth);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "row",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(NoSelect, {
          fromLeftEdge: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: overrideTheme ? "text" : undefined,
            backgroundColor: lineBgColor,
            dimColor: dim,
            children: [
              lineNumStr,
              diffPrefix
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: overrideTheme ? "text" : undefined,
          backgroundColor: lineBgColor,
          dimColor: dim,
          children: [
            content,
            " ".repeat(padding)
          ]
        }, undefined, true, undefined, this)
      ]
    }, key, true, undefined, this);
  });
}
function formatDiff(lines, startingLineNumber, width, dim, overrideTheme) {
  const safeWidth = Math.max(1, Math.floor(width));
  const lineObjects = transformLinesToObjects(lines);
  const processedLines = processAdjacentLines(lineObjects);
  const ls = numberDiffLines(processedLines, startingLineNumber);
  const maxLineNumber = Math.max(...ls.map(({ i }) => i), 0);
  const maxWidth = Math.max(maxLineNumber.toString().length + 1, 0);
  return ls.flatMap((item) => {
    const { type, code, i, wordDiff, matchedLine } = item;
    if (wordDiff && matchedLine) {
      const wordDiffElements = generateWordDiffElements(item, safeWidth, maxWidth, dim, overrideTheme);
      if (wordDiffElements !== null) {
        return wordDiffElements;
      }
    }
    const diffPrefixWidth = 2;
    const availableContentWidth = Math.max(1, safeWidth - maxWidth - 1 - diffPrefixWidth);
    const wrappedText = wrapText(code, availableContentWidth, "wrap");
    const wrappedLines = wrappedText.split(`
`);
    return wrappedLines.map((line, lineIndex) => {
      const key = `${type}-${i}-${lineIndex}`;
      const lineNum = lineIndex === 0 ? i : undefined;
      const lineNumStr = (lineNum !== undefined ? lineNum.toString().padStart(maxWidth) : " ".repeat(maxWidth)) + " ";
      const sigil = type === "add" ? "+" : type === "remove" ? "-" : " ";
      const contentWidth = lineNumStr.length + 1 + stringWidth(line);
      const padding = Math.max(0, safeWidth - contentWidth);
      const bgColor = type === "add" ? dim ? "diffAddedDimmed" : "diffAdded" : type === "remove" ? dim ? "diffRemovedDimmed" : "diffRemoved" : undefined;
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(NoSelect, {
            fromLeftEdge: true,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: overrideTheme ? "text" : undefined,
              backgroundColor: bgColor,
              dimColor: dim || type === "nochange",
              children: [
                lineNumStr,
                sigil
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: overrideTheme ? "text" : undefined,
            backgroundColor: bgColor,
            dimColor: dim,
            children: [
              line,
              " ".repeat(padding)
            ]
          }, undefined, true, undefined, this)
        ]
      }, key, true, undefined, this);
    });
  });
}
function numberDiffLines(diff, startLine) {
  let i = startLine;
  const result = [];
  const queue = [...diff];
  while (queue.length > 0) {
    const current = queue.shift();
    const { code, type, originalCode, wordDiff, matchedLine } = current;
    const line = {
      code,
      type,
      i,
      originalCode,
      wordDiff,
      matchedLine
    };
    switch (type) {
      case "nochange":
        i++;
        result.push(line);
        break;
      case "add":
        i++;
        result.push(line);
        break;
      case "remove": {
        result.push(line);
        let numRemoved = 0;
        while (queue[0]?.type === "remove") {
          i++;
          const current2 = queue.shift();
          const { code: code2, type: type2, originalCode: originalCode2, wordDiff: wordDiff2, matchedLine: matchedLine2 } = current2;
          const line2 = {
            code: code2,
            type: type2,
            i,
            originalCode: originalCode2,
            wordDiff: wordDiff2,
            matchedLine: matchedLine2
          };
          result.push(line2);
          numRemoved++;
        }
        i -= numRemoved;
        break;
      }
    }
  }
  return result;
}
var import_react, jsx_dev_runtime, CHANGE_THRESHOLD = 0.4;
var init_Fallback = __esm(() => {
  init_libesm();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/StructuredDiff.tsx
function computeGutterWidth(patch) {
  const maxLineNumber = Math.max(patch.oldStart + patch.oldLines - 1, patch.newStart + patch.newLines - 1, 1);
  return maxLineNumber.toString().length + 3;
}
function renderColorDiff(patch, firstLine, filePath, fileContent, theme, width, dim, splitGutter) {
  const ColorDiff = expectColorDiff();
  if (!ColorDiff)
    return null;
  const rawGutterWidth = splitGutter ? computeGutterWidth(patch) : 0;
  const gutterWidth = rawGutterWidth > 0 && rawGutterWidth < width ? rawGutterWidth : 0;
  const key = `${theme}|${width}|${dim ? 1 : 0}|${gutterWidth}|${firstLine ?? ""}|${filePath}`;
  let perHunk = RENDER_CACHE.get(patch);
  const hit = perHunk?.get(key);
  if (hit)
    return hit;
  const lines = new ColorDiff(patch, firstLine, filePath, fileContent).render(theme, width, dim);
  if (lines === null)
    return null;
  let gutters = null;
  let contents = null;
  if (gutterWidth > 0) {
    gutters = lines.map((l) => sliceAnsi(l, 0, gutterWidth));
    contents = lines.map((l) => sliceAnsi(l, gutterWidth));
  }
  const entry = { lines, gutterWidth, gutters, contents };
  if (!perHunk) {
    perHunk = new Map;
    RENDER_CACHE.set(patch, perHunk);
  }
  if (perHunk.size >= 4)
    perHunk.clear();
  perHunk.set(key, entry);
  return entry;
}
var import_react2, jsx_dev_runtime2, RENDER_CACHE, StructuredDiff;
var init_StructuredDiff = __esm(() => {
  init_useSettings();
  init_src();
  init_fullscreen();
  init_sliceAnsi();
  init_colorDiff();
  init_Fallback();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
  RENDER_CACHE = new WeakMap;
  StructuredDiff = import_react2.memo(function StructuredDiff2({
    patch,
    dim,
    filePath,
    firstLine,
    fileContent,
    width,
    skipHighlighting = false
  }) {
    const [theme] = useTheme();
    const settings = useSettings();
    const syntaxHighlightingDisabled = settings.syntaxHighlightingDisabled ?? false;
    const safeWidth = Math.max(1, Math.floor(width));
    const splitGutter = isFullscreenEnvEnabled();
    const cached = skipHighlighting || syntaxHighlightingDisabled ? null : renderColorDiff(patch, firstLine, filePath, fileContent ?? null, theme, safeWidth, dim, splitGutter);
    if (!cached) {
      return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(StructuredDiffFallback, {
          patch,
          dim,
          width
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    }
    const { lines, gutterWidth, gutters, contents } = cached;
    if (gutterWidth > 0 && gutters && contents) {
      return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(NoSelect, {
            fromLeftEdge: true,
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(RawAnsi, {
              lines: gutters,
              width: gutterWidth
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(RawAnsi, {
            lines: contents,
            width: safeWidth - gutterWidth
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(RawAnsi, {
        lines,
        width: safeWidth
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  });
});

export { StructuredDiff, init_StructuredDiff };
