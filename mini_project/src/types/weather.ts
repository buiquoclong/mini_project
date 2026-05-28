export interface GeocodeResult {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode?: number;
  time?: string;
}

export interface DailyForecast {
  date: string;
  tempMax: number;
  tempMin: number;
}

export interface WeatherData {
  location: GeocodeResult;
  current: CurrentWeather;
  daily: DailyForecast[];
}
