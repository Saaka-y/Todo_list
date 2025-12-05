//@/hooks/useFilterTodos.js
import { useMemo } from "react";
import { useTodoStore } from "@/stores/todoStore";

export function useFilterTodos(filterType) {
  const { todoList } = useTodoStore();
  const today = new Date().toISOString().split("T")[0];

  const filteredTodos = useMemo(() => {
    if (!Array.isArray(todoList)) return [];

    switch (filterType) {
      case "today":
        return todoList.filter(
          (task) => task.date === today && !task.completed
        );

      case "upcoming":
        return todoList.filter(
          (task) => task.date > today && !task.completed
        );

      case "expired":
        return todoList.filter(
          (task) => task.date < today && !task.completed
        );

      default:
        return todoList;
    }
  }, [todoList, filterType])

  return { filteredTodos };
}
