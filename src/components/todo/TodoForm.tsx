import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <Input
        placeholder="Добавить новую задачу..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        className="flex-1"
      />
      <Button onClick={handleSubmit} size="icon">
        <Icon name="Plus" size={16} />
      </Button>
    </div>
  );
}
