export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  category: "personal" | "work" | "meetings";
  dueDate?: string;
  createdAt: Date;
}

export type TodoFilter = "all" | "active" | "completed";
export type CategoryFilter = "all" | "personal" | "work" | "meetings";
export type Priority = "high" | "medium" | "low";
export type Category = "personal" | "work" | "meetings";
