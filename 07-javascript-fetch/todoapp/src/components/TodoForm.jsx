import { useState } from "react";

export default function TodoForm({ onCreate, disabled }) {
  const [title, setTitle] = useState("");
  async function submit(e) {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    await onCreate({ title: t });
    setTitle("");
  }
  return (
    <div className="panel">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="add a new todo…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={disabled}
          aria-label="todo title"
        />
        <button type="submit" disabled={disabled || !title.trim()}>
          add
        </button>
      </form>
    </div>
  );
}
