import style from "@/components/TodoItem.module.css"

export function TodoItem() {
  return (
    <li className={style.todo_item}>
      <input type="checkbox" className={style.todo_checkbox} />
      <span className={style.todo_text}></span>
      <button className={style.delete_btn}>Delete</button>
    </li>
  );
}
