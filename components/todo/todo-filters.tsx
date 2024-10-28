"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TodoFiltersProps {
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
  hasCompletedTodos: boolean;
}

export function TodoFilters({
  filter,
  onFilterChange,
  onClearCompleted,
  hasCompletedTodos,
}: TodoFiltersProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onFilterChange('all')}
          className={cn("h-7 text-xs", filter === 'all' && "bg-secondary")}
        >
          All
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onFilterChange('active')}
          className={cn("h-7 text-xs", filter === 'active' && "bg-secondary")}
        >
          Active
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onFilterChange('completed')}
          className={cn("h-7 text-xs", filter === 'completed' && "bg-secondary")}
        >
          Completed
        </Button>
      </div>
      {hasCompletedTodos && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearCompleted}
          className="h-7 text-xs text-muted-foreground hover:text-destructive"
        >
          Clear completed
        </Button>
      )}
    </div>
  );
}