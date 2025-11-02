import style from "@/components/TodoItem.module.css"

// task.id/text/completed

export function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  return (
    <li className={style.todoItem}>
      <input
        type="checkbox"
        className={style.todoCheckbox}
        checked={task.completed}
        onChange={() => toggleTask(task.id)} />
      <span
        className={style.todoText}
      >{task.text}</span>
      <button
        className={style.deleteBtn}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
      <button
        className={style.editTask}
        onClick={() => editTask(task.id)}
      >
        Edit</button>
    </li>
  );
}
