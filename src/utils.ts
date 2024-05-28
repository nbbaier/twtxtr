import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { configFilePath } from ".";

const loadGlobalConfig = () => {
  try {
    return JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
  } catch (error) {
    return {};
  }
};
const loadLocalConfig = () => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "twttr.json"), "utf-8")
    );
  } catch (error) {
    return {};
  }
};
export const loadConfig = () => {
  const globalConfig = loadGlobalConfig();
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
