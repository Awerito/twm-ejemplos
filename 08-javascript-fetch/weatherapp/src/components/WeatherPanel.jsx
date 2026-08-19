export default function WeatherPanel({ lat, lng, weather }) {
  const { data, isLoading, error } = weather;

  if (!lat || !lng) return <p>Haz click en el mapa para consultar clima.</p>;
  if (isLoading) return <p>Cargando clima...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Sin datos.</p>;

  return (
    <div style={{ padding: 8 }}>
      <p>
        <strong>Ubicación:</strong> {lat.toFixed(4)}, {lng.toFixed(4)}
      </p>
      <p>
        <strong>Temp:</strong> {data.temperature}°C
      </p>
      <p>
        <strong>Viento:</strong> {data.windspeed} km/h
      </p>
      <p>
        <strong>Dirección:</strong> {data.winddirection}°
      </p>
      <p>
        <strong>Tiempo:</strong> código {data.weathercode}
      </p>
      <small>Fuente: Open-Meteo</small>
    </div>
  );
}
