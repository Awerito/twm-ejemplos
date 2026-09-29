import { useState } from "react";
import MapView from "./components/MapView";

export default function App() {
  const [coord, setCoord] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pedirClima = ({ lat, lng }) => {
    setCoord({ lat, lng });
    setIsLoading(true);
    setError(null);
    fetch(
      `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${lat}&longitude=${lng}` +
        `&current_weather=true&timezone=auto`,
    )
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => setData(json.current_weather))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2>Weather Map</h2>
      <MapView
        lat={coord?.lat}
        lng={coord?.lng}
        data={data}
        isLoading={isLoading}
        error={error}
        onPick={pedirClima}
      />
    </div>
  );
}
