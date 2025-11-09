import { useEffect, useState } from "react";
import { api } from "../api";

export default function HealthBanner() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const h = await api.health();
        if (!alive) return;
        setStatus(h?.status === "ok" ? "ok" : "error");
      } catch {
        if (!alive) return;
        setStatus("error");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const borderColor =
    status === "ok"
      ? "#8ec07c" // verde Gruvbox
      : status === "error"
        ? "#fb4934" // rojo Gruvbox
        : "#fabd2f"; // amarillo (cargando)

  return (
    <div className="panel" style={{ borderColor }}>
      <div className="meta">healthcheck para clases — quitar en producción</div>
    </div>
  );
}
