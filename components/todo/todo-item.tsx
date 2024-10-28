"use client";

import { Trash2 } from "lucide-react";
import { Todo } from "@/lib/store/todo-store";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between py-2 px-3 bg-card rounded-lg shadow-sm group">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="data-[state=checked]:bg-green-500 h-4 w-4"
        />
        <span
          className={cn(
            "text-sm transition-all",
            todo.completed && "text-muted-foreground line-through"
          )}
        >
          {todo.text}
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 className="h-3 w-3 text-destructive" />
      </Button>
    </div>
  );
}