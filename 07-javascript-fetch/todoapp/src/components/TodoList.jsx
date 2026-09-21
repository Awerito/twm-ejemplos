import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="panel">
      <div className="list">
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
        {todos.length === 0 && (
          <div className="meta">no todos yet — add one above</div>
        )}
      </div>
    </div>
  );
}
