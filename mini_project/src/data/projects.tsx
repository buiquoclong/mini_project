import { CheckSquare, Cloud, NotebookPen, type LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  color: string;
};

// Cấu trúc dữ liệu cho các dự án mini
export const projects: Project[] = [
  {
    id: "todo",
    name: "Todo App",
    description: "Manage daily tasks",
    path: "/todo",
    icon: CheckSquare,
    color: "from-blue-500 to-cyan-500",
  },

  {
    id: "weather",
    name: "Weather App",
    description: "Check weather forecasts",
    path: "/weather",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
  },

  {
    id: "notes",
    name: "Notes App",
    description: "Write quick notes",
    path: "/notes",
    icon: NotebookPen,
    color: "from-orange-500 to-red-500",
  },
];
