import { TodoList } from "@/components/TodoList.jsx";
import style from "@/components/TodoForm.module.css";

export function TodoForm() {
  return (
    <div>
      <form>
        <div className={style.input_group}>
          <input
            type="text"
            className={style.todo_input}
            placeholder="Enter a new task"
          />
          <button type="submit" className={style.add_btn}>
            Add
          </button>
        </div>
        <TodoList />
      </form>
    </div>
  );
}
