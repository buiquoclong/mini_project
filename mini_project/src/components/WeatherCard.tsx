import { CloudSun, Compass, Wind, Clock3 } from "lucide-react";
import { WeatherData } from "../types/weather";

type Props = {
  data: WeatherData;
};

export default function WeatherCard({ data }: Props) {
  const { location, current } = data;

  const temperature = Math.round(current.temperature);
  const windSpeed = Math.round(current.windspeed);
  const windDirection = Math.round(current.winddirection);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/4 to-cyan-500/3 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Current Weather
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {location.name}
              {location.country ? (
                <span className="ml-2 text-zinc-500">{location.country}</span>
              ) : null}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
              <Clock3 size={14} />
              <span>{current.time}</span>
            </div>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/8 text-cyan-300 shadow-inner shadow-cyan-400/5">
            <CloudSun size={38} strokeWidth={1.5} />
          </div>
        </div>

        <div className="my-6 h-px bg-linear-to-r from-white/10 via-white/5 to-transparent" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-start">
              <span className="bg-linear-to-b from-white to-zinc-400 bg-clip-text text-7xl font-semibold leading-none tracking-[-0.07em] text-transparent">
                {temperature}
              </span>
              <span className="mt-1 text-3xl font-light text-cyan-400">°C</span>
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              Feels like{" "}
              <span className="font-medium text-zinc-300">{temperature}°</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-57.5">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition-colors hover:bg-white/6">
              <div className="flex items-center gap-2 text-zinc-500">
                <Wind size={15} />
                <span className="text-xs">Wind</span>
              </div>

              <p className="mt-3 text-lg font-semibold text-zinc-200">
                {windSpeed}
                <span className="ml-1 text-xs font-normal text-zinc-500">
                  km/h
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-4 transition-colors hover:bg-white/6">
              <div className="flex items-center gap-2 text-zinc-500">
                <Compass size={15} />
                <span className="text-xs">Direction</span>
              </div>

              <p className="mt-3 text-lg font-semibold text-zinc-200">
                {windDirection}
                <span className="ml-1 text-xs font-normal text-zinc-500">
                  °
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-xs text-zinc-600">Live weather data</span>

          <span className="flex items-center gap-1.5 text-xs text-emerald-400/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Updated
          </span>
        </div>
      </div>
    </div>
  );
}
