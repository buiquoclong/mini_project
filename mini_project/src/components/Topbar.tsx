import { Bell, Command, Search, Sparkles } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 h-20 border-b border-white/10 bg-zinc-950/75 px-6 backdrop-blur-2xl">
      <div className="mx-auto flex h-full items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 sm:flex">
            <Sparkles size={19} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold tracking-tight text-white">
                React Dashboard
              </h2>

              <span className="hidden rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 sm:inline">
                ONLINE
              </span>
            </div>

            <p className="mt-0.5 text-xs font-medium text-zinc-500">
              Frontend Playground
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="group hidden w-70 items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-3.5 py-2.5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.07] focus-within:border-blue-500/40 focus-within:bg-blue-500/4 focus-within:ring-4 focus-within:ring-blue-500/5 md:flex">
            <Search
              size={17}
              className="shrink-0 text-zinc-500 transition-colors group-focus-within:text-blue-400"
            />

            <input
              type="text"
              placeholder="Search features..."
              className="w-full bg-transparent text-sm text-zinc-200 outline-none placeholder:text-zinc-600"
            />

            <div className="flex shrink-0 items-center gap-1 rounded-md border border-white/10 bg-white/5 px-1.5 py-1 text-[10px] text-zinc-500">
              <Command size={10} />
              <span>K</span>
            </div>
          </div>

          {/* Notification */}
          <button
            type="button"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <Bell
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-zinc-950" />
          </button>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          {/* User */}
          <button
            type="button"
            className="group flex items-center gap-3 rounded-xl p-1.5 pr-3 transition hover:bg-white/[0.05]"
          >
            <div className="relative">
              <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 opacity-70 blur-[1px] transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-9 w-9 items-center justify-center rounded-[10px] bg-zinc-900 text-sm font-semibold text-white">
                LB
              </div>

              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-500" />
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-xs font-semibold text-zinc-200">Long Bui</p>
              <p className="text-[10px] text-zinc-500">Developer</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
