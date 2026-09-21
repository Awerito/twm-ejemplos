import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

const BASE = import.meta.env.VITE_API_URL;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  const loadTodos = () => {
    setIsLoading(true);
    setError("");
    fetch(`${BASE}/todos?_limit=10`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        setTodos(data);
        setLoaded(true);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  };

  const createTodo = ({ title }) => {
    setError("");
    fetch(`${BASE}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false, userId: 1 }),
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((created) => setTodos([...todos, created]))
      .catch((e) => setError(e.message));
  };

  const toggleTodo = (todo) => {
    setError("");
    fetch(`${BASE}/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((updated) =>
        setTodos(todos.map((t) => (t.id === todo.id ? updated : t))),
      )
      .catch((e) => setError(e.message));
  };

  const deleteTodo = (todo) => {
    setError("");
    fetch(`${BASE}/todos/${todo.id}`, { method: "DELETE" })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      })
      .catch((e) => setError(e.message));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todos</h1>

        <div className="panel">
          <button onClick={loadTodos} disabled={isLoading}>
            {isLoading ? "cargando…" : "cargar tareas"}
          </button>
          {error && <div className="meta">error: {error}</div>}
          {loaded && !error && todos.length === 0 && (
            <div className="meta">sin tareas</div>
          )}
        </div>

        <TodoForm onCreate={createTodo} disabled={isLoading} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
