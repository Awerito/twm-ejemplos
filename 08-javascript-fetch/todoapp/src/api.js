const BASE = import.meta.env.VITE_API_URL;

async function http(method, path = "", body) {
  const opts = { method, headers: { "Content-Type": "application/json" } };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch(`${BASE}${path}`, opts);
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    const msg = detail?.detail || res.statusText || "request failed";
    throw new Error(`${res.status} ${msg}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  health: () => http("GET", "/"),
  list: () => http("GET", "/todos"),
  create: (payload) => http("POST", "/todos", payload),
  toggle: (id) => http("PUT", `/todos/${id}/toggle`),
  remove: (id) => http("DELETE", `/todos/${id}`),
};
