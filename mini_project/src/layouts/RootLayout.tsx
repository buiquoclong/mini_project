import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Outlet />
    </div>
  );
}
