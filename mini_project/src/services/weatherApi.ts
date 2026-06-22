import {
  GeocodeResult,
  CurrentWeather,
  DailyForecast,
  WeatherData,
} from "../types/weather";

const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// Chuyển đổi tên thành tọa độ và thông tin địa lý
export async function geocodeCity(name: string): Promise<GeocodeResult | null> {
  const url = `${GEOCODE_URL}?name=${encodeURIComponent(name)}&count=1&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const result = data.results && data.results[0];
  if (!result) return null;
  return {
    name: result.name,
    latitude: result.latitude,
    longitude: result.longitude,
    country: result.country,
  };
}

// Lấy dữ liệu thời tiết hiện tại và dự báo hàng ngày cho tọa độ đã cho
export async function fetchWeatherForCoords(
  lat: number,
  lon: number,
): Promise<WeatherData | null> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current_weather: "true",
    timezone: "auto",
    daily: "temperature_2m_max,temperature_2m_min",
  });
  const url = `${FORECAST_URL}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const location = {
    name: data?.timezone || "Unknown",
    latitude: lat,
    longitude: lon,
  } as GeocodeResult;
  const current: CurrentWeather = {
    temperature: data.current_weather?.temperature ?? 0,
    windspeed: data.current_weather?.windspeed ?? 0,
    winddirection: data.current_weather?.winddirection ?? 0,
    weathercode: data.current_weather?.weathercode,
    time: data.current_weather?.time,
  };
  const daily: DailyForecast[] = (data.daily?.time || []).map(
    (d: string, i: number) => ({
      date: d,
      tempMax: data.daily.temperature_2m_max[i],
      tempMin: data.daily.temperature_2m_min[i],
    }),
  );

  return { location, current, daily };
}
