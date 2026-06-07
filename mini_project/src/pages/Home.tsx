import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white ">
      {/* Background Glow */}
      <div className="absolute -top-30 -left-30 w-87.5 h-87.5 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -bottom-37.5 -right-25 w-87.5 h-87.5 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10">
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center">
              <Sparkles size={18} />
            </div>

            <div>
              <h2 className="font-bold text-lg">Mini Projects</h2>
              <p className="text-xs text-zinc-500">React + Vite + Tailwind</p>
            </div>
          </div>

          <button className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur hover:bg-zinc-800 transition text-sm">
            Portfolio
          </button>
        </header>

        <section className="max-w-7xl mx-auto px-6 pt-14 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-8">
            <Sparkles size={14} />
            Modern Frontend Playground
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-4xl">
            Build & Explore
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Mini React Apps
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A collection of modern frontend mini-projects built with React,
            TypeScript, TailwindCSS and scalable architecture.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <Link
                  key={project.id}
                  to={project.path}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-600 transition-all hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-linear-to-br ${project.color}`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center bg-linear-to-br ${project.color}`}
                    >
                      <Icon size={28} />
                    </div>

                    <h2 className="text-2xl font-bold mb-2">{project.name}</h2>

                    <p className="text-zinc-400">{project.description}</p>

                    <div className="mt-6 text-sm text-blue-400">
                      Open Project →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
