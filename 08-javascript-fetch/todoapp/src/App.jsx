import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "./api";
import HealthBanner from "./components/HealthBanner";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyIds, setBusyIds] = useState(new Set());
  const mounted = useRef(true);

  const isBusy = (id) => busyIds.has(id);

  useEffect(() => {
    mounted.current = true;
    (async () => {
      try {
        setError("");
        const data = await api.list();
        if (!mounted.current) return;
        setTodos(data);
      } catch (e) {
        if (!mounted.current) return;
        setError(e.message || "failed to load");
      } finally {
        if (mounted.current) setLoading(false);
      }
    })();
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    let alive = true;
    let delay = 15000;
    let timer;

    const tick = async () => {
      if (!alive) return;
      if (document.visibilityState === "visible") {
        try {
          const data = await api.list();
          if (!alive) return;
          setTodos((prev) => {
            const a = JSON.stringify(prev);
            const b = JSON.stringify(data);
            return a === b ? prev : data;
          });
          delay = 15000;
        } catch {
          delay = Math.min(delay * 2, 120000);
        }
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, delay);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, []);

  async function createTodo(payload) {
    try {
      setError("");
      const created = await api.create(payload);
      setTodos((prev) => [...prev, created]);
    } catch (e) {
      setError(e.message || "failed to create");
    }
  }

  async function toggleTodo(todo) {
    setError("");
    setBusyIds((s) => new Set(s).add(todo.id));
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
    try {
      const updated = await api.toggle(todo.id);
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)));
    } catch (e) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === todo.id ? { ...t, completed: todo.completed } : t,
        ),
      );
      setError(e.message || "failed to toggle");
    } finally {
      setBusyIds((s) => {
        const n = new Set(s);
        n.delete(todo.id);
        return n;
      });
    }
  }

  async function deleteTodo(todo) {
    setError("");
    setBusyIds((s) => new Set(s).add(todo.id));
    const before = todos;
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    try {
      await api.remove(todo.id);
    } catch (e) {
      setTodos(before);
      setError(e.message || "failed to delete");
    } finally {
      setBusyIds((s) => {
        const n = new Set(s);
        n.delete(todo.id);
        return n;
      });
    }
  }

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((t) => t.completed).length;
    return { total, done };
  }, [todos]);

  return (
    <div className="app">
      <div className="container">
        <h1>Todos</h1>

        <div className="panel">
          <div className="meta">
            total: {stats.total} · done: {stats.done}
          </div>
          {error && (
            <div className="meta" style={{ color: "#ff9" }}>
              error: {error}
            </div>
          )}
          {loading && <div className="meta">loading…</div>}
        </div>

        <TodoForm onCreate={createTodo} disabled={loading} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          isBusy={isBusy}
        />
        <HealthBanner />
      </div>
    </div>
  );
}
