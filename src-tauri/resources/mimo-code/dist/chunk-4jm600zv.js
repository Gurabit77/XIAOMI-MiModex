// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/swarm/constants.ts
function getSwarmSocketName() {
  return `claude-swarm-${process.pid}`;
}
var TEAM_LEAD_NAME = "team-lead", SWARM_SESSION_NAME = "claude-swarm", SWARM_VIEW_WINDOW_NAME = "swarm-view", TMUX_COMMAND = "tmux", HIDDEN_SESSION_NAME = "claude-hidden", TEAMMATE_COMMAND_ENV_VAR = "CLAUDE_CODE_TEAMMATE_COMMAND";
var init_constants = () => {};

export { TEAM_LEAD_NAME, SWARM_SESSION_NAME, SWARM_VIEW_WINDOW_NAME, TMUX_COMMAND, HIDDEN_SESSION_NAME, getSwarmSocketName, TEAMMATE_COMMAND_ENV_VAR, init_constants };
