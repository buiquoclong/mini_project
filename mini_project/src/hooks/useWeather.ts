import { useState, useCallback } from "react";
import { geocodeCity, fetchWeatherForCoords } from "../services/weatherApi";
import { WeatherData } from "../types/weather";

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const geo = await geocodeCity(city);
      if (!geo) throw new Error("Location not found");
      const w = await fetchWeatherForCoords(geo.latitude, geo.longitude);
      if (!w) throw new Error("Weather fetch failed");
      w.location = geo;
      setData(w);
    } catch (err: any) {
      setError(err.message || "Unknown error");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, search } as const;
}
