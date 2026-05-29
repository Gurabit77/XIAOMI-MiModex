// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/featureCheck.ts
function isSkillLearningEnabled() {
  if (process.env.SKILL_LEARNING_ENABLED === "0")
    return false;
  if (process.env.SKILL_LEARNING_ENABLED === "1")
    return true;
  if (process.env.FEATURE_SKILL_LEARNING === "0")
    return false;
  if (process.env.FEATURE_SKILL_LEARNING === "1")
    return true;
  if (false) {}
  return false;
}
var init_featureCheck = () => {};

export { isSkillLearningEnabled, init_featureCheck };
