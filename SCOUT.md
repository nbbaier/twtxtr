# Project Scout: twtxtr

**Last Updated:** November 20, 2025

## Overview
`twtxtr` is a minimal CLI client for [twtxt](https://twtxt.readthedocs.io/en/stable/), a decentralized microblogging platform based on text files. This tool allows you to post status updates to a local `twtxt.txt` file and read your timeline directly from the terminal.

## Architecture
The project is built using **Bun** and **TypeScript** with a clean, modular structure:

- **Entry Point:** `src/cli.ts` - CLI argument parsing and command routing
- **Core Logic:**
  - `src/index.ts` - Message posting with Git automation (add/commit/push)
  - `src/read.ts` - Timeline parsing and display (newest first)
  - `src/utils.ts` - Configuration management and path resolution

## Key Features
1. **Post Updates:** Appends messages with ISO 8601 timestamps, 280-char limit, auto Git workflow
2. **Read Timeline:** Parses and displays posts sorted by newest first
3. **Configuration:** Supports both global (`~/.config/twtxtr/config.json`) and local (`twtxtr.json`) configs

## Development Commands
- **Run:** `bun src/cli.ts <message>` or `bun src/cli.ts read`
- **Typecheck:** `tsc` (strict mode enabled)
- **Install:** `bun install`
- **Test:** `bun test` (no tests currently implemented)

## First Tasks When Resuming
1. **Add tests** - Currently no test coverage; implement basic unit tests for config loading and message parsing
2. **Error handling** - Improve Git error messages and add retry logic for network failures
3. **Timeline features** - Add filtering by date, search functionality, or following other twtxt feeds
4. **Configuration** - Add validation for config file format and better error messages
5. **Documentation** - Expand README with examples and troubleshooting

## Code Style Notes
- Use explicit `node:` prefix for built-ins
- Double quotes, semicolons, trailing commas
- Handle `unknown` in catch blocks
- Use `ora` for CLI spinners when adding long-running operations

## Current State
The codebase is functional but minimal. Core posting and reading works reliably. Git integration is basic but effective. Ready for feature expansion and robustness improvements.