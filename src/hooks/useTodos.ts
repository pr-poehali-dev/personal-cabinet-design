import { useState } from "react";
import { Todo, TodoFilter, CategoryFilter } from "@/types/todo";

const initialTodos: Todo[] = [
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
];

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const addTodo = (text: string) => {
    if (text.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        priority: "medium",
        category: "work",
        createdAt: new Date(),
      };
      setTodos([todo, ...todos]);
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

  return {
    todos: filteredTodos,
    filter,
    categoryFilter,
    activeTodosCount,
    setFilter,
    setCategoryFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
