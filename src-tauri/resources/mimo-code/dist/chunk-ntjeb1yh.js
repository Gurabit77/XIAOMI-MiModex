// @bun
import {
  describeMcpConfigFilePath,
  getMcpConfigsByScope,
  getScopeLabel,
  init_config,
  init_utils
} from "./chunk-ktw919wt.js";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/mcp/McpParsingWarnings.tsx
function McpConfigErrorSection({
  scope,
  parsingErrors,
  warnings
}) {
  const hasErrors = parsingErrors.length > 0;
  const hasWarnings = warnings.length > 0;
  if (!hasErrors && !hasWarnings) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          (hasErrors || hasWarnings) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: hasErrors ? "error" : "warning",
            children: [
              "[",
              hasErrors ? "Failed to parse" : "Contains warnings",
              "]",
              " "
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: getScopeLabel(scope)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Location: "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: describeMcpConfigFilePath(scope)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginLeft: 1,
        flexDirection: "column",
        children: [
          parsingErrors.map((error, i) => {
            const serverName = error.mcpErrorMetadata?.serverName;
            return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "\u2514 "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "error",
                    children: "[Error]"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      " ",
                      serverName && `[${serverName}] `,
                      error.path && error.path !== "" ? `${error.path}: ` : "",
                      error.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, `error-${i}`, false, undefined, this);
          }),
          warnings.map((warning, i) => {
            const serverName = warning.mcpErrorMetadata?.serverName;
            return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "\u2514 "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "warning",
                    children: "[Warning]"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      " ",
                      serverName && `[${serverName}] `,
                      warning.path && warning.path !== "" ? `${warning.path}: ` : "",
                      warning.message
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, `warning-${i}`, false, undefined, this);
          })
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function McpParsingWarnings() {
  const scopes = import_react.useMemo(() => [
    { scope: "user", config: getMcpConfigsByScope("user") },
    { scope: "project", config: getMcpConfigsByScope("project") },
    { scope: "local", config: getMcpConfigsByScope("local") },
    { scope: "enterprise", config: getMcpConfigsByScope("enterprise") }
  ], []);
  const hasParsingErrors = scopes.some(({ config }) => filterErrors(config.errors, "fatal").length > 0);
  const hasWarnings = scopes.some(({ config }) => filterErrors(config.errors, "warning").length > 0);
  if (!hasParsingErrors && !hasWarnings) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: "MCP Config Diagnostics"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "For help configuring MCP servers, see:",
            " ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
              url: "https://code.claude.com/docs/en/mcp",
              children: "https://code.claude.com/docs/en/mcp"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      scopes.map(({ scope, config }) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(McpConfigErrorSection, {
        scope,
        parsingErrors: filterErrors(config.errors, "fatal"),
        warnings: filterErrors(config.errors, "warning")
      }, scope, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
function filterErrors(errors, severity) {
  return errors.filter((e) => e.mcpErrorMetadata?.severity === severity);
}
var import_react, jsx_dev_runtime;
var init_McpParsingWarnings = __esm(() => {
  init_config();
  init_utils();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { McpParsingWarnings, init_McpParsingWarnings };
