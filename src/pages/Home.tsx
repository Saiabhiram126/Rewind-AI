import FolderPicker from "../components/FolderPicker";

export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Recall AI</h1>

      <p>Your Digital Memory OS</p>

      <FolderPicker />
    </div>
  );
}
