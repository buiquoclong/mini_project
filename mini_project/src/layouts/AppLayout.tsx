import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AppLayout() {
  return (
    <div className="relative flex h-screen overflow-hidden bg-[#09090B] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-30 -left-30 w-100 h-100 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-37.5 -right-25 w-112.5 h-112.5 bg-purple-600/20 rounded-full blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-size-[40px_40px]
          "
        />
      </div>

      <div className="relative z-10 flex w-full">
        <Sidebar />

        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <Topbar />

          <main className="flex-1 overflow-hidden p-8 pt-0">
            <div className="h-full overflow-auto rounded-3xl border border-white/10 bg-white/3 backdrop-blur-md p-3 my-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
