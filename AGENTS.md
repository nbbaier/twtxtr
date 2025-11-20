# Agent Guidelines

## Commands
- **Run:** `bun src/cli.ts <message>` or `bun src/cli.ts read`
- **Install:** `bun install`
- **Link:** `bun link` (to test binary locally)
- **Typecheck:** `tsc` (noEmit is set)
- **Test:** `bun test` (currently no tests, use `bun` built-in runner)

## Code Style
- **Runtime:** Bun (use `import { $ } from "bun"` for shell ops).
- **Imports:** Use explicit `node:` prefix for built-ins (e.g. `node:fs`, `node:path`).
- **Formatting:** Double quotes, semicolons, trailing commas.
- **TypeScript:** Strict mode enabled. Use explicit types. Handle `unknown` in catch blocks.
- **Naming:** CamelCase for variables/functions (`loadConfig`), PascalCase for types.
- **Errors:** Use `try/catch`, log to `console.error`, and `process.exit(1)` on fatal errors.
- **Config:** Respect `~/.config/twtxtr/config.json` and local `twtxtr.json`.
- **Output:** Minimal/Clean CLI output. Use `ora` or simple logs.

## Project Structure
- Entry: `src/cli.ts` (shebang)
- Logic: `src/index.ts` (write), `src/read.ts` (read)
- Utils: `src/utils.ts` (config/paths)
