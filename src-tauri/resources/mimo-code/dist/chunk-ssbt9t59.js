// @bun
import {
  BASH_TOOL_NAME,
  getAllowRules,
  getAskRules,
  getDenyRules,
  init_permissions,
  init_toolName,
  permissionRuleSourceDisplayString
} from "./chunk-ktw919wt.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/permissions/shadowedRuleDetection.ts
function isSharedSettingSource(source) {
  return source === "projectSettings" || source === "policySettings" || source === "command";
}
function formatSource(source) {
  return permissionRuleSourceDisplayString(source);
}
function generateFixSuggestion(shadowType, shadowingRule, shadowedRule) {
  const shadowingSource = formatSource(shadowingRule.source);
  const shadowedSource = formatSource(shadowedRule.source);
  const toolName = shadowingRule.ruleValue.toolName;
  if (shadowType === "deny") {
    return `Remove the "${toolName}" deny rule from ${shadowingSource}, or remove the specific allow rule from ${shadowedSource}`;
  }
  return `Remove the "${toolName}" ask rule from ${shadowingSource}, or remove the specific allow rule from ${shadowedSource}`;
}
function isAllowRuleShadowedByAskRule(allowRule, askRules, options) {
  const { toolName, ruleContent } = allowRule.ruleValue;
  if (ruleContent === undefined) {
    return { shadowed: false };
  }
  const shadowingAskRule = askRules.find((askRule) => askRule.ruleValue.toolName === toolName && askRule.ruleValue.ruleContent === undefined);
  if (!shadowingAskRule) {
    return { shadowed: false };
  }
  if (toolName === BASH_TOOL_NAME && options.sandboxAutoAllowEnabled) {
    if (!isSharedSettingSource(shadowingAskRule.source)) {
      return { shadowed: false };
    }
  }
  return { shadowed: true, shadowedBy: shadowingAskRule, shadowType: "ask" };
}
function isAllowRuleShadowedByDenyRule(allowRule, denyRules) {
  const { toolName, ruleContent } = allowRule.ruleValue;
  if (ruleContent === undefined) {
    return { shadowed: false };
  }
  const shadowingDenyRule = denyRules.find((denyRule) => denyRule.ruleValue.toolName === toolName && denyRule.ruleValue.ruleContent === undefined);
  if (!shadowingDenyRule) {
    return { shadowed: false };
  }
  return { shadowed: true, shadowedBy: shadowingDenyRule, shadowType: "deny" };
}
function detectUnreachableRules(context, options) {
  const unreachable = [];
  const allowRules = getAllowRules(context);
  const askRules = getAskRules(context);
  const denyRules = getDenyRules(context);
  for (const allowRule of allowRules) {
    const denyResult = isAllowRuleShadowedByDenyRule(allowRule, denyRules);
    if (denyResult.shadowed) {
      const shadowSource = formatSource(denyResult.shadowedBy.source);
      unreachable.push({
        rule: allowRule,
        reason: `Blocked by "${denyResult.shadowedBy.ruleValue.toolName}" deny rule (from ${shadowSource})`,
        shadowedBy: denyResult.shadowedBy,
        shadowType: "deny",
        fix: generateFixSuggestion("deny", denyResult.shadowedBy, allowRule)
      });
      continue;
    }
    const askResult = isAllowRuleShadowedByAskRule(allowRule, askRules, options);
    if (askResult.shadowed) {
      const shadowSource = formatSource(askResult.shadowedBy.source);
      unreachable.push({
        rule: allowRule,
        reason: `Shadowed by "${askResult.shadowedBy.ruleValue.toolName}" ask rule (from ${shadowSource})`,
        shadowedBy: askResult.shadowedBy,
        shadowType: "ask",
        fix: generateFixSuggestion("ask", askResult.shadowedBy, allowRule)
      });
    }
  }
  return unreachable;
}
var init_shadowedRuleDetection = __esm(() => {
  init_toolName();
  init_permissions();
});

export { detectUnreachableRules, init_shadowedRuleDetection };
