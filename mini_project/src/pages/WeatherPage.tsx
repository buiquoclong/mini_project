import { AlertCircle, CloudSun, LoaderCircle, MapPin } from "lucide-react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import { useWeather } from "../hooks/useWeather";
export default function WeatherPage() {
  const { data, loading, error, search } = useWeather();
  return (
    <main className="min-h-full bg-zinc-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* Page Header */}{" "}
        <section className="mb-8">
          {" "}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            {" "}
            <div>
              {" "}
              <div className="mb-3 flex items-center gap-2">
                {" "}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  {" "}
                  <CloudSun size={16} />{" "}
                </div>{" "}
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {" "}
                  Weather{" "}
                </span>{" "}
              </div>{" "}
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {" "}
                Weather Overview{" "}
              </h1>{" "}
              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                {" "}
                Search for a city to view current weather conditions and the
                upcoming 7-day forecast.{" "}
              </p>{" "}
            </div>{" "}
            <div className="w-full lg:w-105">
              {" "}
              <SearchBar onSearch={search} />{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Error */}{" "}
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/6 p-4 text-red-400">
            {" "}
            <AlertCircle size={20} className="mt-0.5 shrink-0" />{" "}
            <div>
              {" "}
              <p className="text-sm font-semibold">
                {" "}
                Unable to load weather{" "}
              </p>{" "}
              <p className="mt-1 text-xs text-red-400/70"> {error} </p>{" "}
            </div>{" "}
          </div>
        )}{" "}
        {/* Loading */}{" "}
        {loading && (
          <div className="flex min-h-90 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">
            {" "}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              {" "}
              <LoaderCircle size={28} className="animate-spin" />{" "}
            </div>{" "}
            <p className="mt-5 text-sm font-medium text-zinc-300">
              {" "}
              Loading weather data...{" "}
            </p>{" "}
            <p className="mt-1 text-xs text-zinc-600">
              {" "}
              Getting the latest forecast{" "}
            </p>{" "}
          </div>
        )}{" "}
        {/* Weather Content */}{" "}
        {!loading && data && (
          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
            {" "}
            {/* Current Weather */}{" "}
            <div className="min-w-0">
              {" "}
              <WeatherCard data={data} />{" "}
            </div>{" "}
            {/* Forecast */}{" "}
            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/3 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl">
              {" "}
              <div className="mb-5 flex items-center justify-between">
                {" "}
                <div>
                  {" "}
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                    {" "}
                    Forecast{" "}
                  </p>{" "}
                  <h2 className="mt-1 text-lg font-semibold text-white">
                    {" "}
                    7-day forecast{" "}
                  </h2>{" "}
                </div>{" "}
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {" "}
                  <CloudSun size={18} />{" "}
                </div>{" "}
              </div>{" "}
              <ForecastList daily={data.daily} />{" "}
            </div>{" "}
          </section>
        )}{" "}
        {/* Empty State */}{" "}
        {!loading && !data && !error && (
          <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            {" "}
            {/* Background glow */}{" "}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />{" "}
            <div className="relative z-10 flex max-w-md flex-col items-center px-6 text-center">
              {" "}
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400 shadow-2xl shadow-cyan-500/10">
                {" "}
                <CloudSun size={40} strokeWidth={1.4} />{" "}
              </div>{" "}
              <h2 className="mt-6 text-xl font-semibold text-white">
                {" "}
                Explore the weather{" "}
              </h2>{" "}
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {" "}
                Search for any city above to see current conditions,
                temperature, wind information, and the 7-day forecast.{" "}
              </p>{" "}
              <div className="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-500">
                {" "}
                <MapPin size={13} />{" "}
                <span>Try searching for London, Tokyo or Paris</span>{" "}
              </div>{" "}
            </div>{" "}
          </section>
        )}{" "}
        {/* Footer */}{" "}
        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
          {" "}
          <p className="text-[11px] text-zinc-700"> Weather Dashboard </p>{" "}
          <p className="text-[11px] text-zinc-700">
            {" "}
            Live weather information{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
