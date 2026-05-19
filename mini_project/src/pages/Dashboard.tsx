import { Link } from "react-router-dom";
import { CheckSquare } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Mini Project Dashboard</h1>

      <div className="grid gap-6">
        <Link
          to="/todo"
          className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500"
        >
          <div className="flex items-center gap-3">
            <CheckSquare />
            <span className="text-xl font-semibold">Todo App</span>
          </div>
          <p className="text-zinc-400 mt-2">Manage tasks with localStorage</p>
        </Link>
      </div>
    </div>
  );
}
