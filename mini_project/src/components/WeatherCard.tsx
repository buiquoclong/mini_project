import { WeatherData } from "../types/weather";

type Props = {
  data: WeatherData;
};

// Component hiển thị thông tin thời tiết hiện tại
export default function WeatherCard({ data }: Props) {
  const { location, current } = data;
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <h2 style={{ margin: 0 }}>
        {location.name}
        {location.country ? `, ${location.country}` : ""}
      </h2>
      <p style={{ margin: "8px 0" }}>{current.time}</p>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 40, fontWeight: 600 }}>
            {Math.round(current.temperature)}°C
          </div>
          <div style={{ color: "#555" }}>
            Feels like {Math.round(current.temperature)}°
          </div>
        </div>
        <div style={{ color: "#555" }}>
          <div>Wind {Math.round(current.windspeed)} km/h</div>
          <div>Dir {Math.round(current.winddirection)}°</div>
        </div>
      </div>
    </div>
  );
}
