import { TodoFilter, CategoryFilter } from "@/types/todo";
import { categoryIcons } from "@/constants/todo";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

interface TodoFiltersProps {
  filter: TodoFilter;
  categoryFilter: CategoryFilter;
  onFilterChange: (filter: TodoFilter) => void;
  onCategoryChange: (category: CategoryFilter) => void;
}

export default function TodoFilters({
  filter,
  categoryFilter,
  onFilterChange,
  onCategoryChange,
}: TodoFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
        {(["all", "active", "completed"] as const).map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
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
            onClick={() => onCategoryChange(cat)}
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
  );
}
