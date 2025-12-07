// @/components/TodoItem/TodoItemView.jsx
import style from "@/components/TodoItem/TodoItem.module.css";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6"

export function TodoItemView({ task, isFading, onToggle, onEdit, onDelete }) {

  return (
    <>
      <input
        type="checkbox"
        className={style.todoCheckbox}
        checked={task.completed || isFading} // フェードアウト中はチェック済みに見せる
        onChange={onToggle}
      />
      <span className={style.todoText}>{task.text}</span>
      <button className={style.editBtn} onClick={onEdit}>
        <FaRegEdit />
      </button>
      <button className={style.deleteBtn} onClick={onDelete}>
        <FaRegTrashCan />
      </button>
      <span className="absolute bottom-1 left-4 text-xs text-gray-400">{task.date}</span>
    </>
  );
}
