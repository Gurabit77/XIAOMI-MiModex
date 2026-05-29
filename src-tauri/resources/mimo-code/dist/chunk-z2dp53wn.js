// @bun
// src/cli/exit.ts
function cliError(msg) {
  if (msg)
    console.error(msg);
  process.exit(1);
  return;
}
function cliOk(msg) {
  if (msg)
    process.stdout.write(msg + `
`);
  process.exit(0);
  return;
}

export { cliError, cliOk };
