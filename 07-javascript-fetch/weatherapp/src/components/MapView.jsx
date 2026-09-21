import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Popup,
  Marker,
} from "react-leaflet";
import { useState, useEffect } from "react";
import WeatherPanel from "./WeatherPanel";

export default function MapView({ lat, lng, weather, onPick }) {
  const [pos, setPos] = useState({ lat: -41.469, lng: -72.942 }); // Default: Puerto Montt, Chile

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (p) => setPos({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => {},
    );
  }, []);

  function ClickHandler() {
    useMapEvents({
      click(e) {
        const c = e.latlng;
        setPos(c);
        onPick?.(c);
      },
    });
    return null;
  }

  return (
    <MapContainer center={pos} zoom={11} style={{ height: 640 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <ClickHandler />
      <Marker position={pos}>
        <Popup>
          <WeatherPanel lat={lat} lng={lng} weather={weather} />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
