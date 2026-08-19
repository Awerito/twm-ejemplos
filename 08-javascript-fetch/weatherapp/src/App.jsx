import { useState } from "react";
import MapView from "./components/MapView";
import WeatherPanel from "./components/WeatherPanel";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const [coord, setCoord] = useState(null);
  const weather = useWeather(coord?.lat, coord?.lng);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h2>Weather Map</h2>
      <MapView
        lat={coord?.lat}
        lng={coord?.lng}
        weather={weather}
        onPick={setCoord}
      />
    </div>
  );
}
