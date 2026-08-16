## **Actividad en Clase: “Weather Map” (React + React-Leaflet + Open-Meteo)**

⏳ **Duración total:** ~120 minutos  
🎯 **Objetivo:** Renderizar un **mapa interactivo**, capturar **coordenadas por
click** o **geolocalización**, y consultar **clima actual** para esa ubicación.

---

* Trabajo individual (apoyo en parejas opcional).
* Requiere **Node.js ≥ 24.x** y **Yarn**.
* Proyecto con **Vite + React (JS)**.
* API pública: **Open-Meteo** (gratis y sin key). ([Open Meteo][1])
* Tiles: **OpenStreetMap** con **atribución obligatoria**. ([leafletjs.com][2])

---

### **📋 Setup**

```bash
yarn create vite weather-map
# Framework: React  | Variant: JavaScript
cd weather-map
yarn add react-leaflet leaflet
yarn
```

En `src/main.jsx` o `src/App.jsx` **importa el CSS** de Leaflet:

```js
import "leaflet/dist/leaflet.css";
```

> Recuerda incluir **attribution** en la capa de tiles OSM. ([leafletjs.com][2])

---

## **🧩 Requisitos**

### 1) Estructura base

```
src/
  App.jsx
  components/
    MapView.jsx
    WeatherPanel.jsx
  hooks/
    useWeather.js
```

---

### 2) MapView: mapa con click y geolocalización

* Centrar inicialmente en **Puerto Montt** `[-41.469, -72.942]`.
* Intentar `navigator.geolocation.getCurrentPosition` para centrar si el usuario autoriza.
* Al **hacer click** en el mapa, guardar `{lat, lng}` y mostrar un **marcador**
(usa `CircleMarker` para evitar problemas de assets de iconos).

<!-- ```js -->
<!-- // components/MapView.jsx -->
<!-- import { MapContainer, TileLayer, useMapEvents, CircleMarker } from "react-leaflet"; -->
<!-- import { useState, useEffect } from "react"; -->
<!---->
<!-- export default function MapView({ onPick }) { -->
<!--   const [pos, setPos] = useState({ lat: -41.469, lng: -72.942 }); -->
<!---->
<!--   useEffect(() => { -->
<!--     if (!navigator.geolocation) return; -->
<!--     navigator.geolocation.getCurrentPosition( -->
<!--       (p) => setPos({ lat: p.coords.latitude, lng: p.coords.longitude }), -->
<!--       () => {} // silencio si no hay permiso -->
<!--     ); -->
<!--   }, []); -->
<!---->
<!--   function ClickHandler() { -->
<!--     useMapEvents({ -->
<!--       click(e) { -->
<!--         const c = e.latlng; -->
<!--         setPos(c); -->
<!--         onPick?.(c); -->
<!--       }, -->
<!--     }); -->
<!--     return null; -->
<!--   } -->
<!---->
<!--   return ( -->
<!--     <MapContainer center={pos} zoom={11} style={{ height: 420 }}> -->
<!--       <TileLayer -->
<!--         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" -->
<!--         attribution='&copy; OpenStreetMap contributors' -->
<!--       /> -->
<!--       <ClickHandler /> -->
<!--       <CircleMarker center={pos} radius={8} /> -->
<!--     </MapContainer> -->
<!--   ); -->
<!-- } -->
<!-- ``` -->

> La URL y la atribución siguen las guías de Leaflet/OSM. ([leafletjs.com][2])

---

### 3) Hook `useWeather`: pedir clima a Open-Meteo

* Endpoint con **coordenadas** y **clima actual**.

<!-- ```js -->
<!-- // hooks/useWeather.js -->
<!-- import { useEffect, useState } from "react"; -->
<!---->
<!-- export function useWeather(lat, lon) { -->
<!--   const [data, setData] = useState(null); -->
<!--   const [isLoading, setL] = useState(false); -->
<!--   const [error, setErr] = useState(null); -->
<!---->
<!--   useEffect(() => { -->
<!--     if (lat == null || lon == null) return; -->
<!--     const url = -->
<!--       `https://api.open-meteo.com/v1/forecast` + -->
<!--       `?latitude=${lat}&longitude=${lon}` + -->
<!--       `&current_weather=true&timezone=auto`; -->
<!---->
<!--     let cancel = false; -->
<!--     setL(true); setErr(null); -->
<!---->
<!--     fetch(url) -->
<!--       .then((r) => { -->
<!--         if (!r.ok) throw new Error("Respuesta no OK"); -->
<!--         return r.json(); -->
<!--       }) -->
<!--       .then((json) => !cancel && setData(json.current_weather)) -->
<!--       .catch((e) => !cancel && setErr(e.message)) -->
<!--       .finally(() => !cancel && setL(false)); -->
<!---->
<!--     return () => { cancel = true; }; -->
<!--   }, [lat, lon]); -->
<!---->
<!--   return { data, isLoading, error }; -->
<!-- } -->
<!-- ``` -->

> Open-Meteo es **gratis y sin API key**; soporta CORS y variables por hora/día. ([Open Meteo][1])

---

### 4) WeatherPanel: mostrar 3 estados (carga, error, datos)

- Manejar el estado de carga y errores en el componente, y mostrar los datos si existen.

<!-- ```js -->
<!-- // components/WeatherPanel.jsx -->
<!-- export default function WeatherPanel({ lat, lng, weather }) { -->
<!--   const { data, isLoading, error } = weather; -->
<!---->
<!--   if (!lat || !lng) return <p>Haz click en el mapa para consultar clima.</p>; -->
<!--   if (isLoading)    return <p>Cargando clima...</p>; -->
<!--   if (error)        return <p>Error: {error}</p>; -->
<!--   if (!data)        return <p>Sin datos.</p>; -->
<!---->
<!--   return ( -->
<!--     <div style={{ padding: 8 }}> -->
<!--       <p><strong>Ubicación:</strong> {lat.toFixed(4)}, {lng.toFixed(4)}</p> -->
<!--       <p><strong>Temp:</strong> {data.temperature}°C</p> -->
<!--       <p><strong>Viento:</strong> {data.windspeed} km/h</p> -->
<!--       <p><strong>Dirección:</strong> {data.winddirection}°</p> -->
<!--       <p><strong>Tiempo:</strong> código {data.weathercode}</p> -->
<!--       <small>Fuente: Open-Meteo</small> -->
<!--     </div> -->
<!--   ); -->
<!-- } -->
<!-- ``` -->

---

### 5) Integración en `App.jsx`

- Integrar los componentes y el hook en el componente principal.

<!-- ```js -->
<!-- // App.jsx -->
<!-- import { useState } from "react"; -->
<!-- import MapView from "./components/MapView"; -->
<!-- import WeatherPanel from "./components/WeatherPanel"; -->
<!-- import { useWeather } from "./hooks/useWeather"; -->
<!---->
<!-- export default function App() { -->
<!--   const [coord, setCoord] = useState(null); -->
<!--   const weather = useWeather(coord?.lat, coord?.lng); -->
<!---->
<!--   return ( -->
<!--     <div style={{ display: "grid", gap: 12 }}> -->
<!--       <h2>Weather Map</h2> -->
<!--       <MapView onPick={setCoord} /> -->
<!--       <WeatherPanel -->
<!--         lat={coord?.lat} -->
<!--         lng={coord?.lng} -->
<!--         weather={weather} -->
<!--       /> -->
<!--     </div> -->
<!--   ); -->
<!-- } -->
<!-- ``` -->

---

## **🧪 Criterios de aceptación (mínimos)**

1. El mapa **renderiza** con tiles OSM y **atribución visible**. ([leafletjs.com][2])
2. **Click** en el mapa → aparece un **marcador** y se guardan `{lat, lng}`.
3. Se consulta Open-Meteo con esas coordenadas y se muestran **temp**,
   **viento** y **weathercode**. ([Open Meteo][3])
4. UI maneja **tres estados**: `isLoading`, `error`, `data`.
5. Geolocalización: si el usuario acepta, el mapa **centra** en su posición.

---

## **✨ Extensiones opcionales**

* Botón **“Usar mi ubicación”** explícito (además del auto-intento).
* Convertir `weathercode` a texto (tabla propia simple).
* Mostrar **layer** de Marker con popup y los datos de clima.
* Añadir **control** para cambiar el **zoom** o un **minimap**.
* Caja de búsqueda por ciudad con **Open-Meteo Geocoding**. ([Open Meteo][4])

---

## 🔗 Enlaces

* React-Leaflet (instalación): ([React Leaflet][5])
* Leaflet Quick Start (tiles + attribution): ([leafletjs.com][2])
* OSM Tile Usage Policy (atribución obligatoria): ([operations.osmfoundation.org][6])
* Open-Meteo: **Docs** y ejemplo `current_weather=true`: ([Open Meteo][3])

[1]: https://open-meteo.com "Open-Meteo.com: 🌤️ Free Open-Source Weather API"
[2]: https://leafletjs.com/examples/quick-start "Quick Start Guide - Leaflet - a JavaScript library for interactive maps"
[3]: https://open-meteo.com/en/docs "Weather Forecast API"
[4]: https://open-meteo.com/en/docs/geocoding-api "Geocoding API"
[5]: https://react-leaflet.js.org/docs/start-installation "Installation"
[6]: https://operations.osmfoundation.org/policies/tiles "Tile Usage Policy - OSMF Operations Working Group"
