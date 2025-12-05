//@/components/TodoList.jsx
import { ListMessage } from "@/components/ListMessage";
import { TodoItem } from "@/components/TodoItem";
import { useFilterTodos } from "@/hooks/useFilterTodos";

export function TodoList({ page, filterType }) {
  const { filteredTodos } = useFilterTodos(filterType);

  return (
    <div className="flex justify-center items-start w-full mt-2">
      <ul className="w-4/5 max-w-[500px] list-none">
        {/* <ListMessage
          page={page}
        /> */}
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
