// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/process.ts
function handleEPIPE(stream) {
  return (err) => {
    if (err.code === "EPIPE") {
      stream.destroy();
    }
  };
}
function registerProcessOutputErrorHandlers() {
  process.stdout.on("error", handleEPIPE(process.stdout));
  process.stderr.on("error", handleEPIPE(process.stderr));
}
function writeOut(stream, data) {
  if (stream.destroyed) {
    return;
  }
  stream.write(data);
}
function writeToStdout(data) {
  writeOut(process.stdout, data);
}
function writeToStderr(data) {
  writeOut(process.stderr, data);
}
function exitWithError(message) {
  console.error(message);
  process.exit(1);
}
function peekForStdinData(stream, ms) {
  return new Promise((resolve) => {
    const done = (timedOut) => {
      clearTimeout(peek);
      stream.off("end", onEnd);
      stream.off("data", onFirstData);
      resolve(timedOut);
    };
    const onEnd = () => done(false);
    const onFirstData = () => clearTimeout(peek);
    const peek = setTimeout(done, ms, true);
    stream.once("end", onEnd);
    stream.once("data", onFirstData);
  });
}
var init_process = () => {};

export { registerProcessOutputErrorHandlers, writeToStdout, writeToStderr, exitWithError, peekForStdinData, init_process };
