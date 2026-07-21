import { useMemo, useState } from "react";
import {
  Check,
  Plus,
  Trash2,
  CalendarDays,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
};

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [input, setInput] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const selectedDateKey = formatDateKey(selectedDate);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: selectedDate.toString(),
      },
      ...todos,
    ]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // Delete Todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Filter todos by selected date
  const filteredTodos = useMemo(() => {
    return todos.filter(
      (todo) => formatDateKey(new Date(todo.createdAt)) === selectedDateKey,
    );
  }, [todos, selectedDateKey]);

  const completedCount = filteredTodos.filter((t) => t.completed).length;

  // Calendar Logic
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day));
  }

  const monthLabel = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-0 p-4 py-0  text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 h-[calc(90vh-48px)] items-stretch overflow-hidden">
        <div className="space-y-6 h-full min-h-0">
          <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">Calendar</h2>

                <p className="text-zinc-400 text-sm mt-1">Select a day</p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <CalendarDays size={22} />
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <button
                onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
                className="w-10 h-10 rounded-xl bg-white/4 border border-white/10 flex items-center justify-center hover:bg-white/8 transition cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>

              <h3 className="font-semibold text-lg">{monthLabel}</h3>

              <button
                onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
                className="w-10 h-10 rounded-xl bg-white/4 border border-white/10 flex items-center justify-center hover:bg-white/8 transition cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div
                  key={day}
                  className="text-center text-zinc-500 text-sm py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, index) => {
                if (!date) {
                  return <div key={index} className="aspect-square" />;
                }

                const isSelected = formatDateKey(date) === selectedDateKey;

                const hasTasks = todos.some(
                  (todo) =>
                    formatDateKey(new Date(todo.createdAt)) ===
                    formatDateKey(date),
                );

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`
                      aspect-square rounded-xl text-sm transition-all relative
                      flex items-center justify-center  cursor-pointer
                      ${
                        isSelected
                          ? "bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg"
                          : "bg-white/3 hover:bg-white/8 text-zinc-300"
                      }
                    `}
                  >
                    {date.getDate()}

                    {hasTasks && (
                      <div className="absolute -top-0.5 -right-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 border border-white/40 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold">Daily Stats</h2>

                <p className="text-zinc-500 text-xs mt-0.5">
                  {selectedDate.toLocaleDateString("vi-VN")}
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <ClipboardList size={18} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/4 border border-white/10 p-3">
                <p className="text-zinc-500 text-xs">Total</p>

                <div className="mt-1 text-2xl font-bold">
                  {filteredTodos.length}
                </div>
              </div>

              <div className="rounded-xl bg-white/4 border border-white/10 p-3">
                <p className="text-zinc-500 text-xs">Done</p>

                <div className="mt-1 text-2xl font-bold text-green-400">
                  {completedCount}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-white/4 border border-white/10 p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-zinc-500 text-xs">Progress</p>

                <p className="text-xs text-zinc-400">
                  {filteredTodos.length
                    ? Math.round((completedCount / filteredTodos.length) * 100)
                    : 0}
                  %
                </p>
              </div>

              <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-500"
                  style={{
                    width: `${
                      filteredTodos.length
                        ? (completedCount / filteredTodos.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl overflow-hidden flex flex-col h-full min-h-0">
          <div className="p-4 border-b border-white/10 shrink-0 space-y-3">
            <div>
              <h1 className="text-lg font-semibold tracking-tight m-0">
                Tasks
              </h1>

              <p className="text-zinc-500 text-xs mt-1">
                {selectedDate.toDateString()}
              </p>
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add new task..."
                className="
        flex-1 h-9 px-3 rounded-lg
        bg-white/4
        border border-white/10
        outline-none
        focus:border-blue-500/50
        text-sm
        transition
      "
              />

              <button
                onClick={addTodo}
                className="
        h-9 px-3 rounded-lg
        bg-linear-to-r from-blue-500 to-purple-600
        hover:scale-[1.02]
        active:scale-95
        transition-all
        flex items-center gap-2 text-sm font-medium cursor-pointer
      "
              >
                <Plus size={14} />
                Add
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden p-4">
            <div className="h-full max-h-full overflow-y-auto space-y-2 pr-1">
              {filteredTodos.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ClipboardList size={40} className="text-zinc-600 mb-3" />

                  <h3 className="text-lg font-semibold">No tasks today</h3>

                  <p className="text-zinc-500 text-sm mt-1">
                    Add your first task
                  </p>
                </div>
              )}

              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="
          group flex items-center justify-between
          rounded-xl border border-white/10
          bg-white/3
          p-3 hover:bg-white/4
          transition
        "
                >
                  <div
                    onClick={() => toggleTodo(todo.id)}
                    className="flex items-center gap-3 flex-1 cursor-pointer"
                  >
                    <div
                      className={`
              w-5 h-5 rounded-full border flex items-center justify-center
              transition
              ${
                todo.completed
                  ? "bg-green-500 border-green-500"
                  : "border-zinc-600"
              }
            `}
                    >
                      {todo.completed && <Check size={12} />}
                    </div>

                    <span
                      className={`
              text-sm transition
              ${todo.completed ? "line-through text-zinc-500" : "text-white"}
            `}
                    >
                      {todo.text}
                    </span>
                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="
            opacity-0 group-hover:opacity-100
            transition
            w-8 h-8 rounded-lg
            bg-red-500/10 hover:bg-red-500/20
            text-red-400
            flex items-center justify-center cursor-pointer
          "
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
