"use client";

import { useEffect } from "react";
import { CheckSquare } from "lucide-react";
import { TodoInput } from "@/components/todo/todo-input";
import { TodoItem } from "@/components/todo/todo-item";
import { TodoFilters } from "@/components/todo/todo-filters";
import { useTodoStore } from "@/lib/store/todo-store";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { todos, filter, addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <main className="min-h-screen bg-background py-6 px-4">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="text-center space-y-1">
          <div className="flex justify-center">
            <CheckSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Todo App</h1>
          <p className="text-sm text-muted-foreground">
            A simple todo app built with Next.js and Zustand
          </p>
          <Link href="/home2" className="inline-block mt-2">
            <Button variant="outline" size="sm">
              View Alternative Layout
            </Button>
          </Link>
        </div>

        <Card className="p-4 space-y-3">
          <TodoInput onAdd={addTodo} />
          
          <div className="space-y-2">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
            {filteredTodos.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-4">
                {filter === "all"
                  ? "No todos yet. Add one above!"
                  : filter === "active"
                  ? "No active todos"
                  : "No completed todos"}
              </p>
            )}
          </div>

          {todos.length > 0 && (
            <TodoFilters
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
              hasCompletedTodos={hasCompletedTodos}
            />
          )}
        </Card>
      </div>
    </main>
  );
}