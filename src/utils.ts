import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const configDirPath = path.join(homedir(), ".config", "twtxtr");
export const configFilePath = path.join(configDirPath, "config.json");

const loadGlobalConfig = (configFilePath: string) => {
	try {
		const config = JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
		if (!config.twtxt || !config.twtxt.twtfile) {
			throw new Error("Invalid global config: missing twtxt.twtfile");
		}
		return config;
	} catch (error) {
		const err = error as NodeJS.ErrnoException;
		if (err.code === "ENOENT") {
			return {};
		}
		throw new Error(`Failed to load global config: ${err.message}`);
	}
};
const loadLocalConfig = () => {
	try {
		const config = JSON.parse(
			fs.readFileSync(path.join(process.cwd(), "twtxtr.json"), "utf-8"),
		);
		if (!config.twtxt || !config.twtxt.twtfile) {
			throw new Error("Invalid local config: missing twtxt.twtfile");
		}
		return config;
	} catch (error) {
		const err = error as NodeJS.ErrnoException;
		if (err.code === "ENOENT") {
			return {};
		}
		throw new Error(`Failed to load local config: ${err.message}`);
	}
};
export const loadConfig = (configFilePath: string) => {
	const globalConfig = loadGlobalConfig(configFilePath);
	const localConfig = loadLocalConfig();

	if (
		Object.keys(globalConfig).length === 0 &&
		Object.keys(localConfig).length === 0
	) {
		throw new Error("No configuration found. Please create ~/.config/twtxtr/config.json or twtxtr.json with twtxt.twtfile path");
	}

	return {
		...globalConfig,
		...localConfig,
	};
};
export function resolveHome(filepath: string) {
	if (filepath[0] === "~") {
		return path.join(homedir(), filepath.slice(1));
	}
	return filepath;
}
