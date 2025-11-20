# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

twtxtr is a minimal CLI client for [twtxt](https://twtxt.readthedocs.io/en/stable/), a decentralized microblogging format. It allows users to post short messages (max 280 characters) to a text file and automatically commit/push to git.

## Runtime & Package Manager

This project uses **Bun** as both the runtime and package manager. The CLI entry point (src/cli.ts) has a shebang `#!/usr/bin/env bun`.

### Key Commands

```bash
# Install dependencies
bun install

# Run the CLI locally during development
bun src/cli.ts <message>
bun src/cli.ts read

# Test the installed binary (after linking)
bun link
twtxtr <message>
twtxtr read
```

## Architecture

### Entry Points & Flow

1. **src/cli.ts** - Main CLI entry point that routes commands:
   - Handles `--help` / `-h` flags
   - Routes `read` command to `readTimeline()` (src/read.ts:5)
   - Routes all other input to the main posting flow via `cli()` (src/index.ts:8)

2. **src/index.ts** - Core posting functionality:
   - Loads configuration and validates message
   - Posts message with confirmation prompt (skippable with `--yes` / `-y`)
   - Automatically performs git workflow: add → commit → push
   - Uses Bun's `$` shell utility for git operations
   - Changes working directory to twtfile location before git operations (src/index.ts:47)

3. **src/read.ts** - Timeline reading functionality:
   - Reads and parses twtxt file
   - Displays posts sorted by timestamp (newest first)
   - Formats timestamps using dayjs

4. **src/utils.ts** - Configuration utilities:
   - Loads config from `~/.config/twtxtr/config.json` (global) or `twtxtr.json` (local)
   - Local config overrides global config
   - Resolves tilde (`~`) in file paths to home directory

### Configuration Format

Required config structure (JSON):
```json
{
  "twtxt": {
    "twtfile": "~/path/to/twtxt.txt"
  }
}
```

### twtxt File Format

Each entry follows the format:
```
ISO8601_TIMESTAMP\tMESSAGE\n
```

Example:
```
2025-01-15T10:30:00-05:00	Hello, world!
```

### Git Workflow Automation

When posting a message, the tool automatically:
1. Appends entry to twtxt file
2. Executes `git add` on the twtfile
3. Creates a commit with message "added message to twtxt file"
4. Pushes to remote repository

The twtxt file **must be in a git repository** for posting to work. All git operations redirect output to `/dev/null` (src/index.ts:55, 63, 71).

## TypeScript Configuration

Uses TypeScript 5.0+ with strict mode enabled. The tsconfig.json is configured for Bun's bundler mode with `moduleResolution: "bundler"` and allows importing TypeScript extensions directly.

## Publishing

The package is published to npm with:
- Binary name: `twtxtr`
- Binary entry point: `src/cli.ts`
- Files included in package: `src/` directory only
- Public access configured
