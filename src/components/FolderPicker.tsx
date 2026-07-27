import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { getFiles } from "../services/fileService";
import type { FileEntry } from "@tauri-apps/plugin-fs";

export default function FolderPicker() {
  const [folderPath, setFolderPath] = useState("");
  const [files, setFiles] = useState<FileEntry[]>([]);

  async function pickFolder() {
    const selected = await open({
      directory: true,
      multiple: false,
    });

    if (!selected) return;

    const path = selected as string;

    setFolderPath(path);

    const folderFiles = await getFiles(path);

    console.log(folderFiles);

    setFiles(folderFiles);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={pickFolder}>Select Folder</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Selected Folder</strong>

        <p>{folderPath || "No folder selected."}</p>

        <h3>Files</h3>

        <ul>
          {files.map((file) => (
            <li key={file.name}>
              {file.isDirectory ? "📁" : "📄"} {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
