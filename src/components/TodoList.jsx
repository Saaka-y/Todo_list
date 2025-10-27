import { TodoItem } from "@/components/TodoItem";
import style from "@/components/TodoList.module.css"

export function TodoList() {
  return (
    <ul className={style.todo_list}>
      <TodoItem />
    </ul>
  );
}
