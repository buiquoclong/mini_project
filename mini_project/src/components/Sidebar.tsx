import { NavLink } from "react-router-dom";
import { projects } from "../data/projects";

export default function Sidebar() {
  return (
    <aside className="relative w-72 border-r border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-blue-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div>
            <h1 className="text-xl font-black tracking-tight">Mini Apps</h1>
            <p className="text-xs text-zinc-500">React Playground</p>
          </div>
        </div>

        <nav className="space-y-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <NavLink
                key={project.id}
                to={project.path}
                className={({ isActive }) =>
                  `
                  group flex items-center gap-3 px-4 py-3 rounded-2xl
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                `
                }
              >
                <div
                  className={`
                    p-2 rounded-xl transition
                    group-hover:bg-white/10
                  `}
                >
                  <Icon size={18} />
                </div>

                <span className="font-medium tracking-wide">
                  {project.name}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
