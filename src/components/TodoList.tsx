import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  category: "personal" | "work" | "meetings";
  dueDate?: string;
  createdAt: Date;
}

const priorityColors = {
  high: "bg-red-100 border-red-300 text-red-800",
  medium: "bg-yellow-100 border-yellow-300 text-yellow-800",
  low: "bg-green-100 border-green-300 text-green-800",
};

const categoryIcons = {
  personal: "User",
  work: "Briefcase",
  meetings: "Calendar",
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      text: "Проверить отчёты команды",
      completed: false,
      priority: "high",
      category: "work",
      dueDate: "2025-01-03",
      createdAt: new Date(),
    },
    {
      id: "2",
      text: "Созвон с клиентом по проекту",
      completed: false,
      priority: "medium",
      category: "meetings",
      dueDate: "2025-01-02",
      createdAt: new Date(),
    },
    {
      id: "3",
      text: "Купить подарок жене",
      completed: true,
      priority: "low",
      category: "personal",
      createdAt: new Date(),
    },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [categoryFilter, setCategoryFilter] = useState<
    "all" | "personal" | "work" | "meetings"
  >("all");

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        priority: "medium",
        category: "work",
        createdAt: new Date(),
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    const statusMatch =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);

    const categoryMatch =
      categoryFilter === "all" || todo.category === categoryFilter;

    return statusMatch && categoryMatch;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon name="CheckSquare" size={20} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Мои задачи</h2>
            <p className="text-sm text-gray-500">
              {activeTodosCount} активных задач
            </p>
          </div>
        </div>
      </div>

      {/* Добавление новой задачи */}
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Добавить новую задачу..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="flex-1"
        />
        <Button onClick={addTodo} size="icon">
          <Icon name="Plus" size={16} />
        </Button>
      </div>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {(["all", "active", "completed"] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-colors",
                filter === filterType
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900",
              )}
            >
              {filterType === "all"
                ? "Все"
                : filterType === "active"
                  ? "Активные"
                  : "Завершённые"}
            </button>
          ))}
        </div>

        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {(["all", "work", "meetings", "personal"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={cn(
                "px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-1",
                categoryFilter === cat
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900",
              )}
            >
              {cat !== "all" && <Icon name={categoryIcons[cat]} size={14} />}
              {cat === "all"
                ? "Все"
                : cat === "work"
                  ? "Работа"
                  : cat === "meetings"
                    ? "Встречи"
                    : "Личное"}
            </button>
          ))}
        </div>
      </div>

      {/* Список задач */}
      <div className="space-y-3">
        {filteredTodos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Icon
              name="CheckCircle2"
              size={48}
              className="mx-auto mb-3 opacity-30"
            />
            <p>Нет задач для отображения</p>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={cn(
                "flex items-center gap-3 p-4 rounded-lg border transition-all",
                todo.completed
                  ? "bg-gray-50 border-gray-200 opacity-60"
                  : "bg-white border-gray-200 hover:border-gray-300",
              )}
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-900",
                    )}
                  >
                    {todo.text}
                  </span>
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded-full border text-center",
                      priorityColors[todo.priority],
                    )}
                  >
                    {todo.priority === "high"
                      ? "Высокий"
                      : todo.priority === "medium"
                        ? "Средний"
                        : "Низкий"}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name={categoryIcons[todo.category]} size={12} />
                    <span>
                      {todo.category === "work"
                        ? "Работа"
                        : todo.category === "meetings"
                          ? "Встречи"
                          : "Личное"}
                    </span>
                  </div>

                  {todo.dueDate && (
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      <span>
                        {new Date(todo.dueDate).toLocaleDateString("ru-RU")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
                className="h-8 w-8 text-gray-400 hover:text-red-500"
              >
                <Icon name="Trash2" size={14} />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
