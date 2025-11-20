# Project Scout: twtxtr

## Overview
`twtxtr` is a minimal CLI client for [twtxt](https://twtxt.readthedocs.io/en/stable/), a decentralized microblogging platform based on text files. This tool allows you to post status updates to a local `twtxt.txt` file and read your timeline directly from the terminal.

## Architecture
The project is built using **Bun** and **TypeScript**.
- **Runtime:** Bun
- **Entry Point:** `src/cli.ts`
- **Core Logic:**
    - `src/index.ts`: Handles posting messages, file appending, and Git automation.
    - `src/read.ts`: Parses and displays the timeline.
    - `src/utils.ts`: Manages configuration loading and path resolution.

## Key Features
1.  **Post Updates:**
    - Appends new messages with an ISO 8601 timestamp.
    - Enforces a 280-character limit.
    - **Git Integration:** Automatically commits and pushes changes to the remote repository hosting your `twtxt.txt` file.
2.  **Read Timeline:**
    - Reads the local `twtxt.txt`.
    - Displays posts sorted by newest first.

## Configuration
The tool looks for a configuration file in two locations (in order of precedence):
1.  `~/.config/twtxtr/config.json`
2.  `./twtxtr.json` (current working directory)

**Format:**
```json
{
  "twtxt": {
    "twtfile": "~/path/to/twtxt.txt"
  }
}
```

## Development Setup
1.  **Prerequisites:** Ensure [Bun](https://bun.sh) is installed.
2.  **Install Dependencies:**
    ```bash
    bun install
    ```
3.  **Run Locally:**
    ```bash
    # Post a message
    bun src/cli.ts "Hello World"

    # Read timeline
    bun src/cli.ts read
    ```
4.  **Typecheck:**
    ```bash
    tsc
    ```

## Important Notes
- **Git Automation:** When you post a message, the tool attempts to run `git add`, `git commit`, and `git push` in the directory containing your `twtxt.txt` file. Ensure this file is inside a valid Git repository with a configured remote.
- **Date Handling:** Uses `dayjs` for timestamp formatting.
