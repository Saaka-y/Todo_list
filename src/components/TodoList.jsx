//@/components/TodoList.jsx
import { ListHeading } from "@/components/ListHeading";
import { TodoItem } from "@/components/TodoItem/TodoItem";
import { useFilterTodos } from "@/hooks/useFilterTodos";

export function TodoList({ page, filterType }) {
  const { filteredTodos } = useFilterTodos(filterType);

  return (
    <div className="flex justify-center items-start w-full mt-2">
      <ul className="w-4/5 max-w-[500px] list-none">
        <ListHeading
          page={page}
          filterType={filterType}
          taskAmount={filteredTodos.length}
        />
        {filteredTodos.map(task => (
          <TodoItem
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
}
