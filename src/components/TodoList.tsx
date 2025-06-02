import { useTodos } from "@/hooks/useTodos";
import TodoForm from "@/components/todo/TodoForm";
import TodoFilters from "@/components/todo/TodoFilters";
import TodoItem from "@/components/todo/TodoItem";
import Icon from "@/components/ui/icon";

export default function TodoList() {
  const {
    todos,
    filter,
    categoryFilter,
    activeTodosCount,
    setFilter,
    setCategoryFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

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

      <TodoForm onAddTodo={addTodo} />

      <TodoFilters
        filter={filter}
        categoryFilter={categoryFilter}
        onFilterChange={setFilter}
        onCategoryChange={setCategoryFilter}
      />

      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Icon
              name="CheckCircle2"
              size={48}
              className="mx-auto mb-3 opacity-30"
            />
            <p>Нет задач для отображения</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}
