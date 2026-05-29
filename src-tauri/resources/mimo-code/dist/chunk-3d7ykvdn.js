// @bun
import {
  OpenAI,
  init_openai
} from "./chunk-y48wfwm4.js";
import {
  TOOL_SEARCH_TOOL_NAME,
  addToTotalSessionCost,
  convertMessagesToLangfuse,
  convertOutputToLangfuse,
  convertToolsToLangfuse,
  createAssistantAPIErrorMessage,
  createUserMessage,
  extractDiscoveredToolNames,
  formatDeferredToolLine,
  getEmptyToolPermissionContext,
  init_Tool,
  init_api,
  init_convert,
  init_cost_tracker,
  init_messages1 as init_messages,
  init_prompt10 as init_prompt,
  init_toolSearch,
  init_tracing,
  isDeferredTool,
  isDeferredToolsDeltaEnabled,
  isToolSearchEnabled,
  normalizeContentFromAPI,
  normalizeMessagesForAPI,
  recordLLMObservation,
  toolMatchesName,
  toolToAPISchema
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import {
  adaptOpenAIStreamToAnthropic,
  anthropicMessagesToOpenAI,
  anthropicToolChoiceToOpenAI,
  anthropicToolsToOpenAI,
  init_src,
  resolveOpenAIModel
} from "./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import {
  init_store,
  updateProviderBuckets
} from "./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  calculateUSDCost,
  getModelMaxOutputTokens,
  init_context,
  init_modelCost
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import {
  getProxyFetchOptions,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils,
  isEnvDefinedFalsy,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/providerUsage/adapters/openai.ts
function parseResetAt(value) {
  if (!value)
    return 0;
  let seconds = 0;
  const re = /(\d+(?:\.\d+)?)(ms|s|m|h|d)/g;
  let match;
  while ((match = re.exec(value)) !== null) {
    const n = Number(match[1]);
    const unit = match[2];
    switch (unit) {
      case "ms":
        seconds += n / 1000;
        break;
      case "s":
        seconds += n;
        break;
      case "m":
        seconds += n * 60;
        break;
      case "h":
        seconds += n * 3600;
        break;
      case "d":
        seconds += n * 86400;
        break;
    }
  }
  if (seconds === 0) {
    const n = Number(value);
    if (Number.isFinite(n))
      seconds = n;
  }
  if (seconds <= 0)
    return 0;
  return Math.floor(Date.now() / 1000) + seconds;
}
function computeUtilization(remaining, limit) {
  if (remaining === null || limit === null)
    return null;
  const r = Number(remaining);
  const l = Number(limit);
  if (!Number.isFinite(r) || !Number.isFinite(l) || l <= 0)
    return null;
  const used = Math.max(0, l - r);
  return Math.min(1, Math.max(0, used / l));
}
var openaiAdapter;
var init_openai2 = __esm(() => {
  openaiAdapter = {
    providerId: "openai",
    parseHeaders(headers) {
      const buckets = [];
      const reqUtil = computeUtilization(headers.get("x-ratelimit-remaining-requests"), headers.get("x-ratelimit-limit-requests"));
      if (reqUtil !== null) {
        buckets.push({
          kind: "requests",
          label: "RPM",
          utilization: reqUtil,
          resetsAt: parseResetAt(headers.get("x-ratelimit-reset-requests")) || undefined
        });
      }
      const tokUtil = computeUtilization(headers.get("x-ratelimit-remaining-tokens"), headers.get("x-ratelimit-limit-tokens"));
      if (tokUtil !== null) {
        buckets.push({
          kind: "tokens",
          label: "TPM",
          utilization: tokUtil,
          resetsAt: parseResetAt(headers.get("x-ratelimit-reset-tokens")) || undefined
        });
      }
      return buckets;
    }
  };
});

// src/services/api/openai/client.ts
function wrapFetchForUsage(base) {
  const wrapped = async (...args) => {
    const res = await base(...args);
    try {
      updateProviderBuckets("openai", openaiAdapter.parseHeaders(res.headers));
    } catch {}
    return res;
  };
  return wrapped;
}
function getOpenAIClient(options) {
  if (cachedClient)
    return cachedClient;
  const apiKey = process.env.OPENAI_API_KEY || "";
  const baseURL = process.env.OPENAI_BASE_URL;
  const baseFetch = options?.fetchOverride ?? globalThis.fetch;
  const wrappedFetch = wrapFetchForUsage(baseFetch);
  const client = new OpenAI({
    apiKey,
    ...baseURL && { baseURL },
    maxRetries: options?.maxRetries ?? 0,
    timeout: parseInt(process.env.API_TIMEOUT_MS || String(600 * 1000), 10),
    dangerouslyAllowBrowser: true,
    ...process.env.OPENAI_ORG_ID && { organization: process.env.OPENAI_ORG_ID },
    ...process.env.OPENAI_PROJECT_ID && { project: process.env.OPENAI_PROJECT_ID },
    fetchOptions: getProxyFetchOptions({ forAnthropicAPI: false }),
    fetch: wrappedFetch
  });
  if (!options?.fetchOverride) {
    cachedClient = client;
  }
  return client;
}
var cachedClient = null;
var init_client = __esm(() => {
  init_openai();
  init_openai2();
  init_store();
  init_proxy();
});

// src/services/api/openai/requestBody.ts
function isOpenAIThinkingEnabled(model) {
  if (isEnvDefinedFalsy(process.env.OPENAI_ENABLE_THINKING))
    return false;
  if (isEnvTruthy(process.env.OPENAI_ENABLE_THINKING))
    return true;
  const modelLower = model.toLowerCase();
  return modelLower.includes("deepseek");
}
function resolveOpenAIMaxTokens(upperLimit, maxOutputTokensOverride) {
  return maxOutputTokensOverride ?? (process.env.OPENAI_MAX_TOKENS ? parseInt(process.env.OPENAI_MAX_TOKENS, 10) || undefined : undefined) ?? (process.env.CLAUDE_CODE_MAX_OUTPUT_TOKENS ? parseInt(process.env.CLAUDE_CODE_MAX_OUTPUT_TOKENS, 10) || undefined : undefined) ?? upperLimit;
}
function buildOpenAIRequestBody(params) {
  const { model, messages, tools, toolChoice, enableThinking, maxTokens, temperatureOverride } = params;
  return {
    model,
    messages,
    max_tokens: maxTokens,
    ...tools.length > 0 && {
      tools,
      ...toolChoice && { tool_choice: toolChoice }
    },
    stream: true,
    stream_options: { include_usage: true },
    ...enableThinking && {
      thinking: { type: "enabled" },
      enable_thinking: true,
      chat_template_kwargs: { thinking: true }
    },
    ...!enableThinking && temperatureOverride !== undefined && {
      temperature: temperatureOverride
    }
  };
}
var init_requestBody = __esm(() => {
  init_envUtils();
});

// src/services/api/openai/index.ts
import { randomUUID } from "crypto";
function prependDeferredToolListIfNeeded(messages, tools, deferredToolNames, useToolSearch) {
  if (!useToolSearch || isDeferredToolsDeltaEnabled())
    return messages;
  const deferredToolList = tools.filter((tool) => deferredToolNames.has(tool.name)).map(formatDeferredToolLine).sort().join(`
`);
  if (!deferredToolList)
    return messages;
  return [
    createUserMessage({
      content: `<available-deferred-tools>
${deferredToolList}
</available-deferred-tools>`,
      isMeta: true
    }),
    ...messages
  ];
}
function isOpenAIConvertibleMessage(msg) {
  return msg.type === "assistant" || msg.type === "user";
}
function assembleFinalAssistantOutputs(params) {
  const { partialMessage, contentBlocks, tools, agentId, usage, stopReason, maxTokens } = params;
  const outputs = [];
  const allBlocks = Object.keys(contentBlocks).sort((a, b) => Number(a) - Number(b)).map((k) => contentBlocks[Number(k)]).filter(Boolean);
  if (allBlocks.length > 0) {
    outputs.push({
      message: {
        ...partialMessage,
        content: normalizeContentFromAPI(allBlocks, tools, agentId),
        usage,
        stop_reason: stopReason,
        stop_sequence: null
      },
      requestId: undefined,
      type: "assistant",
      uuid: randomUUID(),
      timestamp: new Date().toISOString()
    });
  }
  if (stopReason === "max_tokens") {
    outputs.push(createAssistantAPIErrorMessage({
      content: `Output truncated: response exceeded the ${maxTokens} token limit. ` + `Set OPENAI_MAX_TOKENS or CLAUDE_CODE_MAX_OUTPUT_TOKENS to override.`,
      apiError: "max_output_tokens",
      error: "max_output_tokens"
    }));
  }
  return outputs;
}
async function* queryModelOpenAI(messages, systemPrompt, tools, signal, options) {
  try {
    const openaiModel = resolveOpenAIModel(options.model);
    const messagesForAPI = normalizeMessagesForAPI(messages, tools);
    const useToolSearch = await isToolSearchEnabled(options.model, tools, options.getToolPermissionContext || (async () => getEmptyToolPermissionContext()), options.agents || [], options.querySource);
    const deferredToolNames = new Set;
    if (useToolSearch) {
      for (const t of tools) {
        if (isDeferredTool(t))
          deferredToolNames.add(t.name);
      }
    }
    let filteredTools = tools;
    if (useToolSearch && deferredToolNames.size > 0) {
      const discoveredToolNames = extractDiscoveredToolNames(messages);
      filteredTools = tools.filter((tool) => {
        if (!deferredToolNames.has(tool.name))
          return true;
        if (toolMatchesName(tool, TOOL_SEARCH_TOOL_NAME))
          return true;
        return discoveredToolNames.has(tool.name);
      });
    }
    const toolSchemas = await Promise.all(filteredTools.map((tool) => toolToAPISchema(tool, {
      getToolPermissionContext: options.getToolPermissionContext,
      tools,
      agents: options.agents,
      allowedAgentTypes: options.allowedAgentTypes,
      model: options.model,
      deferLoading: useToolSearch && deferredToolNames.has(tool.name)
    })));
    const standardTools = toolSchemas.filter((t) => {
      const anyT = t;
      return anyT.type !== "advisor_20260301" && anyT.type !== "computer_20250124";
    });
    const enableThinking = isOpenAIThinkingEnabled(openaiModel);
    const openAIConvertibleMessages = messagesForAPI.filter(isOpenAIConvertibleMessage);
    const messagesWithDeferredToolList = prependDeferredToolListIfNeeded(openAIConvertibleMessages, tools, deferredToolNames, useToolSearch);
    const openaiMessages = anthropicMessagesToOpenAI(messagesWithDeferredToolList, systemPrompt, { enableThinking });
    const openaiTools = anthropicToolsToOpenAI(standardTools);
    const openaiToolChoice = anthropicToolChoiceToOpenAI(options.toolChoice);
    if (useToolSearch) {
      const includedDeferredTools = filteredTools.filter((t) => deferredToolNames.has(t.name)).length;
      logForDebugging(`[OpenAI] Tool search enabled: ${includedDeferredTools}/${deferredToolNames.size} deferred tools included, total tools=${openaiTools.length}`);
    } else {
      logForDebugging(`[OpenAI] Tool search disabled, total tools=${openaiTools.length}`);
    }
    const { upperLimit } = getModelMaxOutputTokens(openaiModel);
    const maxTokens = resolveOpenAIMaxTokens(upperLimit, options.maxOutputTokensOverride);
    const client = getOpenAIClient({
      maxRetries: 0,
      fetchOverride: options.fetchOverride,
      source: options.querySource
    });
    logForDebugging(`[OpenAI] Calling model=${openaiModel}, messages=${openaiMessages.length}, tools=${openaiTools.length}, thinking=${enableThinking}`);
    const requestBody = buildOpenAIRequestBody({
      model: openaiModel,
      messages: openaiMessages,
      tools: openaiTools,
      toolChoice: openaiToolChoice,
      enableThinking,
      maxTokens,
      temperatureOverride: options.temperatureOverride
    });
    const stream = await client.chat.completions.create(requestBody, { signal });
    const adaptedStream = adaptOpenAIStreamToAnthropic(stream, openaiModel);
    const contentBlocks = {};
    const collectedMessages = [];
    let partialMessage = null;
    let stopReason = null;
    let usage = {
      input_tokens: 0,
      output_tokens: 0,
      cache_creation_input_tokens: 0,
      cache_read_input_tokens: 0
    };
    let ttftMs = 0;
    const start = Date.now();
    for await (const event of adaptedStream) {
      switch (event.type) {
        case "message_start": {
          const startEvent = event;
          partialMessage = startEvent.message;
          ttftMs = Date.now() - start;
          const startUsage = startEvent.message?.usage;
          if (startUsage) {
            usage = {
              input_tokens: startUsage.input_tokens ?? usage.input_tokens,
              output_tokens: startUsage.output_tokens ?? usage.output_tokens,
              cache_creation_input_tokens: startUsage.cache_creation_input_tokens ?? usage.cache_creation_input_tokens,
              cache_read_input_tokens: startUsage.cache_read_input_tokens ?? usage.cache_read_input_tokens
            };
          }
          break;
        }
        case "content_block_start": {
          const blockStartEvent = event;
          const idx = blockStartEvent.index;
          const cb = blockStartEvent.content_block;
          if (cb.type === "tool_use") {
            contentBlocks[idx] = { ...cb, input: "" };
          } else if (cb.type === "text") {
            contentBlocks[idx] = { ...cb, text: "" };
          } else if (cb.type === "thinking") {
            contentBlocks[idx] = { ...cb, thinking: "", signature: "" };
          } else {
            contentBlocks[idx] = { ...cb };
          }
          break;
        }
        case "content_block_delta": {
          const deltaEvent = event;
          const idx = deltaEvent.index;
          const delta = deltaEvent.delta;
          const block = contentBlocks[idx];
          if (!block)
            break;
          if (delta.type === "text_delta") {
            block.text = (block.text || "") + delta.text;
          } else if (delta.type === "input_json_delta") {
            block.input = (block.input || "") + delta.partial_json;
          } else if (delta.type === "thinking_delta") {
            block.thinking = (block.thinking || "") + delta.thinking;
          } else if (delta.type === "signature_delta") {
            block.signature = delta.signature;
          }
          break;
        }
        case "content_block_stop": {
          break;
        }
        case "message_delta": {
          const msgDeltaEvent = event;
          const deltaUsage = msgDeltaEvent.usage;
          if (deltaUsage) {
            usage = {
              input_tokens: deltaUsage.input_tokens ?? usage.input_tokens,
              output_tokens: deltaUsage.output_tokens ?? usage.output_tokens,
              cache_creation_input_tokens: deltaUsage.cache_creation_input_tokens ?? usage.cache_creation_input_tokens,
              cache_read_input_tokens: deltaUsage.cache_read_input_tokens ?? usage.cache_read_input_tokens
            };
          }
          if (msgDeltaEvent.delta?.stop_reason != null) {
            stopReason = msgDeltaEvent.delta.stop_reason;
          }
          break;
        }
        case "message_stop": {
          if (partialMessage) {
            for (const output of assembleFinalAssistantOutputs({
              partialMessage,
              contentBlocks,
              tools,
              agentId: options.agentId,
              usage,
              stopReason,
              maxTokens
            })) {
              if (output.type === "assistant") {
                collectedMessages.push(output);
              }
              yield output;
            }
            partialMessage = null;
          }
          if (usage.input_tokens + usage.output_tokens > 0) {
            const costUSD = calculateUSDCost(openaiModel, usage);
            addToTotalSessionCost(costUSD, usage, options.model);
          }
          break;
        }
      }
      yield {
        type: "stream_event",
        event,
        ...event.type === "message_start" ? { ttftMs } : undefined
      };
    }
    recordLLMObservation(options.langfuseTrace ?? null, {
      model: openaiModel,
      provider: "openai",
      input: convertMessagesToLangfuse(openaiMessages),
      output: convertOutputToLangfuse(collectedMessages),
      usage: {
        input_tokens: usage.input_tokens,
        output_tokens: usage.output_tokens,
        cache_creation_input_tokens: usage.cache_creation_input_tokens,
        cache_read_input_tokens: usage.cache_read_input_tokens
      },
      startTime: new Date(start),
      endTime: new Date,
      completionStartTime: ttftMs > 0 ? new Date(start + ttftMs) : undefined,
      tools: convertToolsToLangfuse(toolSchemas),
      ...enableThinking && { thinking: { type: "enabled" } }
    });
    if (partialMessage) {
      for (const output of assembleFinalAssistantOutputs({
        partialMessage,
        contentBlocks,
        tools,
        agentId: options.agentId,
        usage,
        stopReason,
        maxTokens
      })) {
        yield output;
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logForDebugging(`[OpenAI] Error: ${errorMessage}`, { level: "error" });
    yield createAssistantAPIErrorMessage({
      content: `API Error: ${errorMessage}`,
      apiError: "api_error",
      error: error instanceof Error ? error : new Error(String(error))
    });
  }
}
var init_openai3 = __esm(() => {
  init_client();
  init_src();
  init_messages();
  init_api();
  init_Tool();
  init_debug();
  init_cost_tracker();
  init_modelCost();
  init_requestBody();
  init_tracing();
  init_convert();
  init_context();
  init_messages();
  init_toolSearch();
  init_prompt();
});
init_openai3();

export {
  resolveOpenAIMaxTokens,
  queryModelOpenAI,
  isOpenAIThinkingEnabled,
  buildOpenAIRequestBody
};
