# Security

Please do not commit secrets or local runtime data.

## Sensitive Files

Keep these files and folders out of git:

- `~/.mimo/mimo.config.json`
- `.env` and `.env.*`
- `.codex-e2e/`
- `.codex-screenshots/`
- `output/`
- `release/`
- `src-tauri/target/`
- `node_modules/`

## Reporting

Open an issue with reproduction details and avoid posting real API keys, account tokens, local file paths, logs containing credentials, or generated private content.
