#!/usr/bin/env node

import day from "dayjs";
import { homedir } from "node:os";
import path from "node:path";
import { appendFile } from "node:fs/promises";
import { loadConfig, resolveHome } from "./utils";

const configDirPath = path.join(homedir(), ".config", "twttr");
export const configFilePath = path.join(configDirPath, "config.json");

const main = async () => {
  const config = loadConfig();
  const twtfile = resolveHome(config.twtxt.twtfile);
  const twtfileDir = path.dirname(twtfile);

  const commitMessage = "automated message";
  const command = `git commitwtfileDirt -i ${twtfile} -m automated commit && git push`;

  const message = process.argv.slice(2).join(" ");
  if (!(message.length > 0)) {
    console.error("No message provided");
    process.exit(1);
  }

  const entry = `${day().format()}\t${message}\n`;
  try {
    appendFile(twtfile, entry, "utf8");

    const commitProc = Bun.spawnSync(
      ["git", "commit", "-i", twtfileDir, "-m", commitMessage],
      { cwd: twtfileDir }
    );

    const pushProc = Bun.spawnSync(["git", "push", "-v"], {
      cwd: twtfileDir,
    });

    if (pushProc.success && commitProc.success) {
      console.log("successfully committed and pushed");
    }
  } catch (error) {
    console.error(`failed to commit and push: ${error}`);
  }
};

main();
