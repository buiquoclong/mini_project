import { DailyForecast } from "../types/weather";

type Props = {
  daily: DailyForecast[];
};

export default function ForecastList({ daily }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: 12,
      }}
    >
      {daily.map((d) => (
        <div
          key={d.date}
          style={{ padding: 12, border: "1px solid #eee", borderRadius: 6 }}
        >
          <div style={{ fontSize: 14, color: "#333" }}>{d.date}</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {Math.round(d.tempMax)}° / {Math.round(d.tempMin)}°
          </div>
        </div>
      ))}
    </div>
  );
}
