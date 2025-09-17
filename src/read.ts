import fs from "node:fs";
import day from "dayjs";
import { configFilePath, loadConfig, resolveHome } from "./utils";

export async function readTimeline() {
	try {
		const config = loadConfig(configFilePath);
		const twtfile = resolveHome(config.twtxt.twtfile);

		if (!fs.existsSync(twtfile)) {
			console.log(
				"No twtxt file found. Start posting to create your timeline!",
			);
			return;
		}

		const content = fs.readFileSync(twtfile, "utf-8");
		const lines = content
			.trim()
			.split("\n")
			.filter((line) => line.trim() !== "");

		if (lines.length === 0) {
			console.log("Your timeline is empty. Post your first message!");
			return;
		}

		const posts = lines
			.map((line) => {
				const [timestamp, ...messageParts] = line.split("\t");
				const message = messageParts.join("\t");
				return { timestamp, message };
			})
			.filter((post) => post.timestamp && post.message);

		// Sort by timestamp, newest first
		posts.sort(
			(a, b) =>
				new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
		);

		console.log("Your Timeline\n");

		for (const post of posts) {
			const date = day(post.timestamp);
			const formattedDate = date.isValid()
				? date.format("YYYY-MM-DD HH:mm")
				: post.timestamp;
			console.log(`${formattedDate}${` `.repeat(4)}${post.message}`);
		}
	} catch (error) {
		const err = error as Error;
		throw new Error(`Failed to read timeline: ${err.message}`);
	}
}
