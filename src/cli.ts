#!/usr/bin/env bun
import cli from "./index";
import { readTimeline } from "./read";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
	console.log(`
twtxtr - A minimal twtxt CLI client

Usage:
  twtxtr <message>    Post a message to your twtxt file
  twtxtr read         Read and display your timeline
  twtxtr --help       Show this help message
  twtxtr -h

Options:
  --yes, -y           Skip confirmation prompt

Configuration:
  Create ~/.config/twtxtr/config.json with:
  {
    "twtxt": {
      "twtfile": "~/path/to/twtxt.txt"
    }
  }

  Or create twtxtr.json in the current directory.

Examples:
  twtxtr "Hello, world!"
  twtxtr read
  twtxtr "This is my first twtxt post #twtxt"
`);
	process.exit(0);
}

if (args[0] === "read") {
	readTimeline().catch((error) => {
		const err = error as Error;
		console.error(`Error reading timeline: ${err.message}`);
		process.exit(1);
	});
} else {
	cli().catch((error) => {
		const err = error as Error;
		console.error(`Unexpected error: ${err.message}`);
		process.exit(1);
	});
}
