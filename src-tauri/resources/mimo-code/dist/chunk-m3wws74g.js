// @bun
import {
  init_slashCommandParsing,
  parseSlashCommand
} from "./chunk-rn0v1hk8.js";
import {
  NO_CONTENT_MESSAGE,
  addSessionHook,
  buildPluginCommandTelemetryFields,
  buildPostCompactMessages,
  builtInCommandNames,
  createAbortController,
  createAgentId,
  createAttachmentMessage,
  createCommandInputMessage,
  createSyntheticUserCaveatMessage,
  createSystemMessage,
  createUserInterruptionMessage,
  createUserMessage,
  enqueuePendingNotification,
  extractResultText,
  findCommand,
  formatCommandInputTags,
  getAssistantMessageContentLength,
  getAttachmentMessages,
  getCommand,
  getCommandName,
  getDumpPromptsPath,
  hasCommand,
  hasPermissionsToUseTool,
  init_UI,
  init_abortController,
  init_attachments,
  init_commands1 as init_commands,
  init_compact,
  init_dumpPrompts,
  init_forkedAgent,
  init_fullscreen,
  init_generators,
  init_messageQueueManager,
  init_messages,
  init_messages1 as init_messages2,
  init_microCompact,
  init_permissionSetup,
  init_permissions,
  init_pluginOnlyPolicy,
  init_pluginTelemetry,
  init_runAgent,
  init_sessionHooks,
  init_skillUsageTracking,
  init_tokens,
  init_uuid,
  isCompactBoundaryMessage,
  isFullscreenEnvEnabled,
  isRestrictedToPluginOnly,
  isSourceAdminTrusted,
  isSystemLocalCommandMessage,
  normalizeMessages,
  parseToolListFromCLI,
  prepareForkedCommandContext,
  prepareUserContent,
  recordSkillUsage,
  removeSessionHook,
  renderToolUseProgressMessage,
  resetMicrocompactState,
  runAgent,
  toArray
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import {
  init_pluginIdentifier,
  isOfficialMarketplaceName,
  parsePluginIdentifier
} from "./chunk-0rstde44.js";
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
import {
  init_events,
  logOTelEvent,
  redactIfDisabled
} from "./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  HOOK_EVENTS,
  getAgentContext,
  getDisplayPath,
  getWorkload,
  init_agentContext,
  init_agentSdkTypes,
  init_file,
  init_workloadContext
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
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
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import {
  COMMAND_MESSAGE_TAG,
  COMMAND_NAME_TAG,
  init_log,
  init_xml,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  AbortError,
  MalformedCommandError,
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  addInvokedSkill,
  getSessionId,
  init_state,
  setPromptId
} from "./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/hooks/registerSkillHooks.ts
function registerSkillHooks(setAppState, sessionId, hooks, skillName, skillRoot) {
  let registeredCount = 0;
  for (const eventName of HOOK_EVENTS) {
    const matchers = hooks[eventName];
    if (!matchers)
      continue;
    for (const matcher of matchers) {
      for (const hook of matcher.hooks) {
        const onHookSuccess = hook.once ? () => {
          logForDebugging(`Removing one-shot hook for event ${eventName} in skill '${skillName}'`);
          removeSessionHook(setAppState, sessionId, eventName, hook);
        } : undefined;
        addSessionHook(setAppState, sessionId, eventName, matcher.matcher || "", hook, onHookSuccess, skillRoot);
        registeredCount++;
      }
    }
  }
  if (registeredCount > 0) {
    logForDebugging(`Registered ${registeredCount} hooks from skill '${skillName}'`);
  }
}
var init_registerSkillHooks = __esm(() => {
  init_agentSdkTypes();
  init_debug();
  init_sessionHooks();
});

// src/utils/processUserInput/processSlashCommand.tsx
import { randomUUID } from "crypto";
async function executeForkedSlashCommand(command, args, context, precedingInputBlocks, setToolJSX, canUseTool) {
  const agentId = createAgentId();
  const pluginMarketplace = command.pluginInfo ? parsePluginIdentifier(command.pluginInfo.repository).marketplace : undefined;
  logEvent("tengu_slash_command_forked", {
    command_name: command.name,
    invocation_trigger: "user-slash",
    ...command.pluginInfo && {
      _PROTO_plugin_name: command.pluginInfo.pluginManifest.name,
      ...pluginMarketplace && {
        _PROTO_marketplace_name: pluginMarketplace
      },
      ...buildPluginCommandTelemetryFields(command.pluginInfo)
    }
  });
  const { skillContent, modifiedGetAppState, baseAgent, promptMessages } = await prepareForkedCommandContext(command, args, context);
  const agentDefinition = command.effort !== undefined ? { ...baseAgent, effort: command.effort } : baseAgent;
  logForDebugging(`Executing forked slash command /${command.name} with agent ${agentDefinition.agentType}`);
  if ((await context.getAppState()).kairosEnabled) {
    const bgAbortController = createAbortController();
    const commandName = getCommandName(command);
    const spawnTimeWorkload = getWorkload();
    const enqueueResult = (value) => enqueuePendingNotification({
      value,
      mode: "prompt",
      priority: "later",
      isMeta: true,
      skipSlashCommands: true,
      workload: spawnTimeWorkload
    });
    (async () => {
      const deadline = Date.now() + MCP_SETTLE_TIMEOUT_MS;
      while (Date.now() < deadline) {
        const s = context.getAppState();
        if (!s.mcp.clients.some((c) => c.type === "pending"))
          break;
        await sleep(MCP_SETTLE_POLL_MS);
      }
      const freshTools = context.options.refreshTools?.() ?? context.options.tools;
      const agentMessages2 = [];
      for await (const message of runAgent({
        agentDefinition,
        promptMessages,
        toolUseContext: {
          ...context,
          getAppState: modifiedGetAppState,
          abortController: bgAbortController
        },
        canUseTool,
        isAsync: true,
        querySource: "agent:custom",
        model: command.model,
        availableTools: freshTools,
        override: { agentId }
      })) {
        agentMessages2.push(message);
      }
      const resultText2 = extractResultText(agentMessages2, "Command completed");
      logForDebugging(`Background forked command /${commandName} completed (agent ${agentId})`);
      enqueueResult(`<scheduled-task-result command="/${commandName}">
${resultText2}
</scheduled-task-result>`);
    })().catch((err) => {
      logError(err);
      enqueueResult(`<scheduled-task-result command="/${commandName}" status="failed">
${err instanceof Error ? err.message : String(err)}
</scheduled-task-result>`);
    });
    return { messages: [], shouldQuery: false, command };
  }
  const agentMessages = [];
  const progressMessages = [];
  const parentToolUseID = `forked-command-${command.name}`;
  let toolUseCounter = 0;
  const createProgressMessage = (message) => {
    toolUseCounter++;
    return {
      type: "progress",
      data: {
        message,
        type: "agent_progress",
        prompt: skillContent,
        agentId
      },
      parentToolUseID,
      toolUseID: `${parentToolUseID}-${toolUseCounter}`,
      timestamp: new Date().toISOString(),
      uuid: randomUUID()
    };
  };
  const updateProgress = () => {
    setToolJSX({
      jsx: renderToolUseProgressMessage(progressMessages, {
        tools: context.options.tools,
        verbose: false
      }),
      shouldHidePromptInput: false,
      shouldContinueAnimation: true,
      showSpinner: true
    });
  };
  updateProgress();
  try {
    for await (const message of runAgent({
      agentDefinition,
      promptMessages,
      toolUseContext: {
        ...context,
        getAppState: modifiedGetAppState
      },
      canUseTool,
      isAsync: false,
      querySource: "agent:custom",
      model: command.model,
      availableTools: context.options.tools
    })) {
      agentMessages.push(message);
      const normalizedNew = normalizeMessages([message]);
      if (message.type === "assistant") {
        const contentLength = getAssistantMessageContentLength(message);
        if (contentLength > 0) {
          context.setResponseLength((len) => len + contentLength);
        }
        const normalizedMsg = normalizedNew[0];
        if (normalizedMsg && normalizedMsg.type === "assistant") {
          progressMessages.push(createProgressMessage(message));
          updateProgress();
        }
      }
      if (message.type === "user") {
        const normalizedMsg = normalizedNew[0];
        if (normalizedMsg && normalizedMsg.type === "user") {
          progressMessages.push(createProgressMessage(normalizedMsg));
          updateProgress();
        }
      }
    }
  } finally {
    setToolJSX(null);
  }
  let resultText = extractResultText(agentMessages, "Command completed");
  logForDebugging(`Forked slash command /${command.name} completed with agent ${agentId}`);
  if (process.env.USER_TYPE === "ant") {
    resultText = `[ANT-ONLY] API calls: ${getDisplayPath(getDumpPromptsPath(agentId))}
${resultText}`;
  }
  const messages = [
    createUserMessage({
      content: prepareUserContent({
        inputString: `/${getCommandName(command)} ${args}`.trim(),
        precedingInputBlocks
      })
    }),
    createUserMessage({
      content: `<local-command-stdout>
${resultText}
</local-command-stdout>`
    })
  ];
  return {
    messages,
    shouldQuery: false,
    command,
    resultText
  };
}
function looksLikeCommand(commandName) {
  return !/[^a-zA-Z0-9:\-_]/.test(commandName);
}
async function processSlashCommand(inputString, precedingInputBlocks, imageContentBlocks, attachmentMessages, context, setToolJSX, uuid, isAlreadyProcessing, canUseTool) {
  const parsed = parseSlashCommand(inputString);
  if (!parsed) {
    logEvent("tengu_input_slash_missing", {});
    const errorMessage = "Commands are in the form `/command [args]`";
    return {
      messages: [
        createSyntheticUserCaveatMessage(),
        ...attachmentMessages,
        createUserMessage({
          content: prepareUserContent({
            inputString: errorMessage,
            precedingInputBlocks
          })
        })
      ],
      shouldQuery: false,
      resultText: errorMessage
    };
  }
  const { commandName, args: parsedArgs, isMcp } = parsed;
  const sanitizedCommandName = isMcp ? "mcp" : !builtInCommandNames().has(commandName) ? "custom" : commandName;
  if (!hasCommand(commandName, context.options.commands)) {
    let isFilePath = false;
    try {
      await getFsImplementation().stat(`/${commandName}`);
      isFilePath = true;
    } catch {}
    if (looksLikeCommand(commandName) && !isFilePath) {
      logEvent("tengu_input_slash_invalid", {
        input: commandName
      });
      const unknownMessage = `Unknown skill: ${commandName}`;
      return {
        messages: [
          createSyntheticUserCaveatMessage(),
          ...attachmentMessages,
          createUserMessage({
            content: prepareUserContent({
              inputString: unknownMessage,
              precedingInputBlocks
            })
          }),
          ...parsedArgs ? [
            createSystemMessage(`Args from unknown skill: ${parsedArgs}`, "warning")
          ] : []
        ],
        shouldQuery: false,
        resultText: unknownMessage
      };
    }
    const promptId = randomUUID();
    setPromptId(promptId);
    logEvent("tengu_input_prompt", {});
    logOTelEvent("user_prompt", {
      prompt_length: String(inputString.length),
      prompt: redactIfDisabled(inputString),
      "prompt.id": promptId
    });
    return {
      messages: [
        createUserMessage({
          content: prepareUserContent({ inputString, precedingInputBlocks }),
          uuid
        }),
        ...attachmentMessages
      ],
      shouldQuery: true
    };
  }
  const {
    messages: newMessages,
    shouldQuery: messageShouldQuery,
    allowedTools,
    model,
    effort,
    command: returnedCommand,
    resultText,
    nextInput,
    submitNextInput
  } = await getMessagesForSlashCommand(commandName, parsedArgs, setToolJSX, context, precedingInputBlocks, imageContentBlocks, isAlreadyProcessing, canUseTool, uuid);
  if (newMessages.length === 0) {
    const eventData2 = {
      input: sanitizedCommandName
    };
    if (returnedCommand.type === "prompt" && returnedCommand.pluginInfo) {
      const { pluginManifest, repository } = returnedCommand.pluginInfo;
      const { marketplace } = parsePluginIdentifier(repository);
      const isOfficial = isOfficialMarketplaceName(marketplace);
      eventData2._PROTO_plugin_name = pluginManifest.name;
      if (marketplace) {
        eventData2._PROTO_marketplace_name = marketplace;
      }
      eventData2.plugin_repository = isOfficial ? repository : "third-party";
      eventData2.plugin_name = isOfficial ? pluginManifest.name : "third-party";
      if (isOfficial && pluginManifest.version) {
        eventData2.plugin_version = pluginManifest.version;
      }
      Object.assign(eventData2, buildPluginCommandTelemetryFields(returnedCommand.pluginInfo));
    }
    logEvent("tengu_input_command", {
      ...eventData2,
      invocation_trigger: "user-slash",
      ...process.env.USER_TYPE === "ant" && {
        skill_name: commandName,
        ...returnedCommand.type === "prompt" && {
          skill_source: returnedCommand.source
        },
        ...returnedCommand.loadedFrom && {
          skill_loaded_from: returnedCommand.loadedFrom
        },
        ...returnedCommand.kind && {
          skill_kind: returnedCommand.kind
        }
      }
    });
    return {
      messages: [],
      shouldQuery: false,
      model,
      nextInput,
      submitNextInput
    };
  }
  if (newMessages.length === 2 && newMessages[1].type === "user" && typeof newMessages[1].message.content === "string" && newMessages[1].message.content.startsWith("Unknown command:")) {
    const looksLikeFilePath = inputString.startsWith("/var") || inputString.startsWith("/tmp") || inputString.startsWith("/private");
    if (!looksLikeFilePath) {
      logEvent("tengu_input_slash_invalid", {
        input: commandName
      });
    }
    return {
      messages: [createSyntheticUserCaveatMessage(), ...newMessages],
      shouldQuery: messageShouldQuery,
      allowedTools,
      model
    };
  }
  const eventData = {
    input: sanitizedCommandName
  };
  if (returnedCommand.type === "prompt" && returnedCommand.pluginInfo) {
    const { pluginManifest, repository } = returnedCommand.pluginInfo;
    const { marketplace } = parsePluginIdentifier(repository);
    const isOfficial = isOfficialMarketplaceName(marketplace);
    eventData._PROTO_plugin_name = pluginManifest.name;
    if (marketplace) {
      eventData._PROTO_marketplace_name = marketplace;
    }
    eventData.plugin_repository = isOfficial ? repository : "third-party";
    eventData.plugin_name = isOfficial ? pluginManifest.name : "third-party";
    if (isOfficial && pluginManifest.version) {
      eventData.plugin_version = pluginManifest.version;
    }
    Object.assign(eventData, buildPluginCommandTelemetryFields(returnedCommand.pluginInfo));
  }
  logEvent("tengu_input_command", {
    ...eventData,
    invocation_trigger: "user-slash",
    ...process.env.USER_TYPE === "ant" && {
      skill_name: commandName,
      ...returnedCommand.type === "prompt" && {
        skill_source: returnedCommand.source
      },
      ...returnedCommand.loadedFrom && {
        skill_loaded_from: returnedCommand.loadedFrom
      },
      ...returnedCommand.kind && {
        skill_kind: returnedCommand.kind
      }
    }
  });
  const isCompactResult = newMessages.length > 0 && newMessages[0] && isCompactBoundaryMessage(newMessages[0]);
  return {
    messages: messageShouldQuery || newMessages.every(isSystemLocalCommandMessage) || isCompactResult ? newMessages : [createSyntheticUserCaveatMessage(), ...newMessages],
    shouldQuery: messageShouldQuery,
    allowedTools,
    model,
    effort,
    resultText,
    nextInput,
    submitNextInput
  };
}
async function getMessagesForSlashCommand(commandName, args, setToolJSX, context, precedingInputBlocks, imageContentBlocks, _isAlreadyProcessing, canUseTool, uuid) {
  const command = getCommand(commandName, context.options.commands);
  if (command.type === "prompt" && command.userInvocable !== false) {
    recordSkillUsage(commandName);
  }
  if (command.userInvocable === false) {
    return {
      messages: [
        createUserMessage({
          content: prepareUserContent({
            inputString: `/${commandName}`,
            precedingInputBlocks
          })
        }),
        createUserMessage({
          content: `This skill can only be invoked by Claude, not directly by users. Ask MiMo to use the "${commandName}" skill for you.`
        })
      ],
      shouldQuery: false,
      command
    };
  }
  try {
    switch (command.type) {
      case "local-jsx": {
        return new Promise((resolve) => {
          let doneWasCalled = false;
          const onDone = (result, options) => {
            doneWasCalled = true;
            if (options?.display === "skip") {
              resolve({
                messages: [],
                shouldQuery: false,
                command,
                nextInput: options?.nextInput,
                submitNextInput: options?.submitNextInput
              });
              return;
            }
            const metaMessages = (options?.metaMessages ?? []).map((content) => createUserMessage({ content, isMeta: true }));
            const skipTranscript = isFullscreenEnvEnabled() && typeof result === "string" && result.endsWith(" dismissed");
            resolve({
              messages: options?.display === "system" ? skipTranscript ? metaMessages : [
                createCommandInputMessage(formatCommandInput(command, args)),
                createCommandInputMessage(`<local-command-stdout>${result}</local-command-stdout>`),
                ...metaMessages
              ] : [
                createUserMessage({
                  content: prepareUserContent({
                    inputString: formatCommandInput(command, args),
                    precedingInputBlocks
                  })
                }),
                result ? createUserMessage({
                  content: `<local-command-stdout>${result}</local-command-stdout>`
                }) : createUserMessage({
                  content: `<local-command-stdout>${NO_CONTENT_MESSAGE}</local-command-stdout>`
                }),
                ...metaMessages
              ],
              shouldQuery: options?.shouldQuery ?? false,
              command,
              nextInput: options?.nextInput,
              submitNextInput: options?.submitNextInput
            });
          };
          command.load().then((mod) => mod.call(onDone, { ...context, canUseTool }, args)).then((jsx) => {
            if (jsx == null)
              return;
            if (context.options.isNonInteractiveSession) {
              resolve({
                messages: [],
                shouldQuery: false,
                command
              });
              return;
            }
            if (doneWasCalled)
              return;
            setToolJSX({
              jsx,
              shouldHidePromptInput: true,
              showSpinner: false,
              isLocalJSXCommand: true,
              isImmediate: command.immediate === true
            });
          }).catch((e) => {
            logError(e);
            if (doneWasCalled)
              return;
            doneWasCalled = true;
            setToolJSX({
              jsx: null,
              shouldHidePromptInput: false,
              clearLocalJSX: true
            });
            resolve({ messages: [], shouldQuery: false, command });
          });
        });
      }
      case "local": {
        const displayArgs = command.isSensitive && args.trim() ? "***" : args;
        const userMessage = createUserMessage({
          content: prepareUserContent({
            inputString: formatCommandInput(command, displayArgs),
            precedingInputBlocks
          })
        });
        try {
          const syntheticCaveatMessage = createSyntheticUserCaveatMessage();
          const mod = await command.load();
          const result = await mod.call(args, context);
          if (result.type === "skip") {
            return {
              messages: [],
              shouldQuery: false,
              command
            };
          }
          if (result.type === "compact") {
            const slashCommandMessages = [
              syntheticCaveatMessage,
              userMessage,
              ...result.displayText ? [
                createUserMessage({
                  content: `<local-command-stdout>${result.displayText}</local-command-stdout>`,
                  timestamp: new Date(Date.now() + 100).toISOString()
                })
              ] : []
            ];
            const compactionResultWithSlashMessages = {
              ...result.compactionResult,
              messagesToKeep: [
                ...result.compactionResult.messagesToKeep ?? [],
                ...slashCommandMessages
              ]
            };
            resetMicrocompactState();
            return {
              messages: buildPostCompactMessages(compactionResultWithSlashMessages),
              shouldQuery: false,
              command
            };
          }
          return {
            messages: [
              userMessage,
              createCommandInputMessage(`<local-command-stdout>${result.value}</local-command-stdout>`)
            ],
            shouldQuery: false,
            command,
            resultText: result.value
          };
        } catch (e) {
          logError(e);
          return {
            messages: [
              userMessage,
              createCommandInputMessage(`<local-command-stderr>${String(e)}</local-command-stderr>`)
            ],
            shouldQuery: false,
            command
          };
        }
      }
      case "prompt": {
        try {
          if (command.context === "fork") {
            return await executeForkedSlashCommand(command, args, context, precedingInputBlocks, setToolJSX, canUseTool ?? hasPermissionsToUseTool);
          }
          return await getMessagesForPromptSlashCommand(command, args, context, precedingInputBlocks, imageContentBlocks, uuid);
        } catch (e) {
          if (e instanceof AbortError) {
            return {
              messages: [
                createUserMessage({
                  content: prepareUserContent({
                    inputString: formatCommandInput(command, args),
                    precedingInputBlocks
                  })
                }),
                createUserInterruptionMessage({ toolUse: false })
              ],
              shouldQuery: false,
              command
            };
          }
          return {
            messages: [
              createUserMessage({
                content: prepareUserContent({
                  inputString: formatCommandInput(command, args),
                  precedingInputBlocks
                })
              }),
              createUserMessage({
                content: `<local-command-stderr>${String(e)}</local-command-stderr>`
              })
            ],
            shouldQuery: false,
            command
          };
        }
      }
    }
  } catch (e) {
    if (e instanceof MalformedCommandError) {
      return {
        messages: [
          createUserMessage({
            content: prepareUserContent({
              inputString: e.message,
              precedingInputBlocks
            })
          })
        ],
        shouldQuery: false,
        command
      };
    }
    throw e;
  }
}
function formatCommandInput(command, args) {
  return formatCommandInputTags(getCommandName(command), args);
}
function formatSkillLoadingMetadata(skillName, _progressMessage = "loading") {
  return [
    `<${COMMAND_MESSAGE_TAG}>${skillName}</${COMMAND_MESSAGE_TAG}>`,
    `<${COMMAND_NAME_TAG}>${skillName}</${COMMAND_NAME_TAG}>`,
    `<skill-format>true</skill-format>`
  ].join(`
`);
}
function formatSlashCommandLoadingMetadata(commandName, args) {
  return [
    `<${COMMAND_MESSAGE_TAG}>${commandName}</${COMMAND_MESSAGE_TAG}>`,
    `<${COMMAND_NAME_TAG}>/${commandName}</${COMMAND_NAME_TAG}>`,
    args ? `<command-args>${args}</command-args>` : null
  ].filter(Boolean).join(`
`);
}
function formatCommandLoadingMetadata(command, args) {
  if (command.userInvocable !== false) {
    return formatSlashCommandLoadingMetadata(command.name, args);
  }
  if (command.loadedFrom === "skills" || command.loadedFrom === "plugin" || command.loadedFrom === "mcp") {
    return formatSkillLoadingMetadata(command.name, command.progressMessage);
  }
  return formatSlashCommandLoadingMetadata(command.name, args);
}
async function processPromptSlashCommand(commandName, args, commands, context, imageContentBlocks = []) {
  const command = findCommand(commandName, commands);
  if (!command) {
    throw new MalformedCommandError(`Unknown command: ${commandName}`);
  }
  if (command.type !== "prompt") {
    throw new Error(`Unexpected ${command.type} command. Expected 'prompt' command. Use /${commandName} directly in the main conversation.`);
  }
  return getMessagesForPromptSlashCommand(command, args, context, [], imageContentBlocks);
}
async function getMessagesForPromptSlashCommand(command, args, context, precedingInputBlocks = [], imageContentBlocks = [], uuid) {
  if (false) {}
  const result = await command.getPromptForCommand(args, context);
  const hooksAllowedForThisSkill = !isRestrictedToPluginOnly("hooks") || isSourceAdminTrusted(command.source);
  if (command.hooks && hooksAllowedForThisSkill) {
    const sessionId = getSessionId();
    registerSkillHooks(context.setAppState, sessionId, command.hooks, command.name, command.type === "prompt" ? command.skillRoot : undefined);
  }
  const skillPath = command.source ? `${command.source}:${command.name}` : command.name;
  const skillContent = result.filter((b) => b.type === "text").map((b) => b.text).join(`

`);
  addInvokedSkill(command.name, skillPath, skillContent, getAgentContext()?.agentId ?? null);
  const metadata = formatCommandLoadingMetadata(command, args);
  const additionalAllowedTools = parseToolListFromCLI(command.allowedTools ?? []);
  const mainMessageContent = imageContentBlocks.length > 0 || precedingInputBlocks.length > 0 ? [...imageContentBlocks, ...precedingInputBlocks, ...result] : result;
  const attachmentMessages = await toArray(getAttachmentMessages(result.filter((block) => block.type === "text").map((block) => block.text).join(" "), context, null, [], context.messages, "repl_main_thread", { skipSkillDiscovery: true }));
  const messages = [
    createUserMessage({
      content: metadata,
      uuid
    }),
    createUserMessage({
      content: mainMessageContent,
      isMeta: true
    }),
    ...attachmentMessages,
    createAttachmentMessage({
      type: "command_permissions",
      allowedTools: additionalAllowedTools,
      model: command.model
    })
  ];
  return {
    messages,
    shouldQuery: true,
    allowedTools: additionalAllowedTools,
    model: command.model,
    effort: command.effort,
    command
  };
}
var MCP_SETTLE_POLL_MS = 200, MCP_SETTLE_TIMEOUT_MS = 1e4;
var init_processSlashCommand = __esm(() => {
  init_state();
  init_commands();
  init_messages();
  init_state();
  init_xml();
  init_analytics();
  init_dumpPrompts();
  init_compact();
  init_microCompact();
  init_runAgent();
  init_UI();
  init_abortController();
  init_agentContext();
  init_attachments();
  init_debug();
  init_envUtils();
  init_errors();
  init_file();
  init_forkedAgent();
  init_fsOperations();
  init_fullscreen();
  init_generators();
  init_registerSkillHooks();
  init_log();
  init_messageQueueManager();
  init_messages2();
  init_permissionSetup();
  init_permissions();
  init_pluginIdentifier();
  init_pluginOnlyPolicy();
  init_slashCommandParsing();
  init_sleep();
  init_skillUsageTracking();
  init_events();
  init_pluginTelemetry();
  init_tokens();
  init_uuid();
  init_workloadContext();
});
init_processSlashCommand();

export {
  processSlashCommand,
  processPromptSlashCommand,
  looksLikeCommand,
  formatSkillLoadingMetadata
};
