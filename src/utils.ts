import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const configDirPath = path.join(homedir(), ".config", "twtxtr");
export const configFilePath = path.join(configDirPath, "config.json");

const loadGlobalConfig = (configFilePath: string) => {
  try {
    return JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
  } catch (error) {
    return {};
  }
};
const loadLocalConfig = () => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "twtxtr.json"), "utf-8")
    );
  } catch (error) {
    return {};
  }
};
export const loadConfig = (configFilePath: string) => {
  const globalConfig = loadGlobalConfig(configFilePath);
  const localConfig = loadLocalConfig();

  if (
    Object.keys(globalConfig).length === 0 &&
    Object.keys(localConfig).length === 0
  ) {
    throw new Error("No global or local configuration found");
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
