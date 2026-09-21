export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`item ${todo.completed ? "done" : ""}`}>
      <div>
        <div className="meta">id: {todo.id}</div>
        <div className="title">{todo.title}</div>
      </div>
      <div className="row">
        <button onClick={() => onToggle(todo)}>
          {todo.completed ? "mark undone" : "mark done"}
        </button>
        <button onClick={() => onDelete(todo)}>
          delete
        </button>
      </div>
    </div>
  );
}
