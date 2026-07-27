import { readDir } from "@tauri-apps/plugin-fs";

export async function getFiles(path: string) {
  return await readDir(path);
}
