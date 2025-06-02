import { Todo } from "@/types/todo";
import {
  priorityColors,
  categoryIcons,
  priorityLabels,
  categoryLabels,
} from "@/constants/todo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-4 rounded-lg border transition-all",
        todo.completed
          ? "bg-gray-50 border-gray-200 opacity-60"
          : "bg-white border-gray-200 hover:border-gray-300",
      )}
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "text-sm font-medium",
              todo.completed ? "line-through text-gray-500" : "text-gray-900",
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
            {priorityLabels[todo.priority]}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Icon name={categoryIcons[todo.category]} size={12} />
            <span>{categoryLabels[todo.category]}</span>
          </div>

          {todo.dueDate && (
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={12} />
              <span>{new Date(todo.dueDate).toLocaleDateString("ru-RU")}</span>
            </div>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="h-8 w-8 text-gray-400 hover:text-red-500"
      >
        <Icon name="Trash2" size={14} />
      </Button>
    </div>
  );
}
