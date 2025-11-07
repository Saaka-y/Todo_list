// TodoItem.jsx
import { useState } from "react";
import style from "@/components/TodoItem.module.css";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6"


export function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [isFading, setIsFading] = useState(false);

  const handleSave = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };

  const handleToggle = () => {
    // フェードアウト開始
    if (!task.completed) {
      setIsFading(true);
      // 3秒後に実際のトグル処理
      setTimeout(() => toggleTask(task.id), 3000);
    } else {
      // 未完了に戻すときは即時
      toggleTask(task.id);
    }
  };

  return (
    <li className={`
        relative
        flex justify-between items-start gap-2
        rounded-xl
        border
        ${isEditing ? "border-(--btn-bg)" : "border-(--border-color)"}
        bg-(--todo-bg)
        p-4
        my-4
        transition-all
        ${isFading ? style.fadeOut : ""}
      `}>

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={style.todoEditInput}
          />
          <button onClick={handleSave} className={style.saveBtn}>
            <FaRegSave />
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            className={style.todoCheckbox}
            checked={task.completed || isFading} // フェードアウト中はチェック済みに見せる
            onChange={handleToggle}
          />
          <span className={style.todoText}>{task.text}</span>
          <button
            className={style.editBtn}
            onClick={() => setIsEditing(true)}
          >
            <FaRegEdit />
          </button>
        </>
      )}

      <button
        className={style.deleteBtn}
        onClick={() => deleteTask(task.id)}
      >
        <FaRegTrashCan />
      </button>
      <span className="absolute bottom-1 left-4 text-xs text-gray-400">{task.date}</span>
    </li>
  );
}
