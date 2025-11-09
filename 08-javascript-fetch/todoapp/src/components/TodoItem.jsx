export default function TodoItem({ todo, onToggle, onDelete, busy }) {
  return (
    <div className={`item ${todo.completed ? "done" : ""}`}>
      <div>
        <div className="meta">id: {todo.id}</div>
        <div className="title">{todo.title}</div>
      </div>
      <div className="row">
        <button onClick={() => onToggle(todo)} disabled={busy}>
          {todo.completed ? "mark undone" : "mark done"}
        </button>
        <button onClick={() => onDelete(todo)} disabled={busy}>
          delete
        </button>
      </div>
    </div>
  );
}
