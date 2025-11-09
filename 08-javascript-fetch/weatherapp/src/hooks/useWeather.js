import { useEffect, useState } from "react";

export function useWeather(lat, lon) {
  const [data, setData] = useState(null);
  const [isLoading, setL] = useState(false);
  const [error, setErr] = useState(null);

  useEffect(() => {
    if (lat == null || lon == null) return;
    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${lat}&longitude=${lon}` +
      `&current_weather=true&timezone=auto`;

    let cancel = false;
    setL(true);
    setErr(null);

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Respuesta no OK");
        return r.json();
      })
      .then((json) => !cancel && setData(json.current_weather))
      .catch((e) => !cancel && setErr(e.message))
      .finally(() => !cancel && setL(false));

    return () => {
      cancel = true;
    };
  }, [lat, lon]);

  return { data, isLoading, error };
}
