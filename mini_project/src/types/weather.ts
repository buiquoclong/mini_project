// Khởi tạo các kiểu dữ liệu TypeScript để mô tả dữ liệu thời tiết và kết quả geocode
export interface GeocodeResult {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
}

// Khởi tạo các kiểu dữ liệu TypeScript để mô tả dữ liệu thời tiết hiện tại và dự báo hàng ngày
export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode?: number;
  time?: string;
}

// Khởi tạo các kiểu dữ liệu TypeScript để mô tả dự báo thời tiết hàng ngày
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
