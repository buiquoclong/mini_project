import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
type Props = { onSearch: (city: string) => void };
export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const city = value.trim();
    if (!city) return;
    onSearch(city);
  };
  return (
    <form onSubmit={submit} className="w-full">
      {" "}
      <div className="group flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] focus-within:border-cyan-400/40 focus-within:bg-white/[0.07] focus-within:shadow-cyan-500/5">
        {" "}
        {/* Search Icon */}{" "}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-zinc-500 transition-colors duration-300 group-focus-within:text-cyan-400">
          {" "}
          <Search size={19} strokeWidth={2} />{" "}
        </div>{" "}
        {/* Input */}{" "}
        <input
          aria-label="city"
          type="text"
          placeholder="Search for a city..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-11 min-w-0 flex-1 bg-transparent px-2 text-sm font-medium text-white outline-none placeholder:text-zinc-600"
        />{" "}
        {/* Search Button */}{" "}
        <button
          type="submit"
          disabled={!value.trim()}
          className="flex h-11 shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          {" "}
          <span className="hidden sm:inline">Search</span>{" "}
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />{" "}
        </button>{" "}
      </div>{" "}
    </form>
  );
}
