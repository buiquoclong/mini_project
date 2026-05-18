// Topbar.tsx
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl px-6 flex items-center justify-between">
      {/* Left */}
      <div>
        <h2 className="text-lg font-bold tracking-tight">
          React Mini Dashboard
        </h2>

        <p className="text-sm text-zinc-500">Modern frontend playground</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
          <Search size={16} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm placeholder:text-zinc-500"
          />
        </div>

        {/* Notification */}
        <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
          <Bell size={18} />
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20" />
      </div>
    </header>
  );
}
