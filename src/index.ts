import { appendFile } from "node:fs/promises";
import path from "node:path";
import { createInterface } from "node:readline";
import { $ } from "bun";
import day from "dayjs";
import { configFilePath, loadConfig, resolveHome } from "./utils";

export default async () => {
	try {
		const config = loadConfig(configFilePath);
		const twtfile = resolveHome(config.twtxt.twtfile);
		const twtfileDir = path.dirname(twtfile);

		const args = process.argv.slice(2);
		const message = args.filter((arg) => !arg.startsWith("--")).join(" ");
		const skipConfirm = args.includes("--yes") || args.includes("-y");

		if (!(message.length > 0)) {
			console.error("Error: No message provided. Usage: twtxtr <message>");
			console.error("Run 'twtxtr --help' for more information.");
			process.exit(1);
		}

		if (message.length > 280) {
			console.error("Error: Message too long (max 280 characters)");
			process.exit(1);
		}

		if (!skipConfirm) {
			const rl = createInterface({
				input: process.stdin,
				output: process.stdout,
			});

			await new Promise<void>((resolve) => {
				rl.question(`Post message: "${message}"? (y/N): `, (answer) => {
					rl.close();
					if (answer.toLowerCase() !== "y" && answer.toLowerCase() !== "yes") {
						console.log("Cancelled.");
						process.exit(0);
					}
					resolve();
				});
			});
		}

		$.cwd(twtfileDir);
		const commitMessage = "added message to twtxt file";
		const entry = `${day().format()}\t${message}\n`;

		await appendFile(twtfile, entry, "utf8");
		console.log("✓ Message appended to twtxt file");

		// console.log("Adding file to git...");
		const addResult = await $`git add ${twtfile} &> /dev/null`;
		if (addResult.exitCode !== 0) {
			console.error(`Error: Failed to add file to git: ${addResult.stderr}`);
			process.exit(1);
		}
		console.log("✓ File added to git");

		// console.log("Committing changes...");
		const commitResult = await $`git commit -m ${commitMessage} &> /dev/null`;
		if (commitResult.exitCode !== 0) {
			console.error(`Error: Failed to commit: ${commitResult.stderr}`);
			process.exit(1);
		}
		console.log("✓ Changes committed");

		// console.log("Pushing to remote...");
		const pushResult = await $`git push -v &> /dev/null`;
		if (pushResult.exitCode !== 0) {
			console.error(`Error: Failed to push: ${pushResult.stderr}`);
			process.exit(1);
		}
		console.log("✓ Successfully pushed to remote");

		console.log("✓ Message posted successfully!");
	} catch (error) {
		const err = error as Error;
		console.error(
			`Error: Failed to post message: ${err.message || "Unknown error"}`,
		);
		process.exit(1);
	}
};
