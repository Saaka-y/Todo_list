// TodoItem.jsx
import { useState } from "react";
import style from "@/components/TodoItem.module.css";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6"


export function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, editText); 
    setIsEditing(false);
  };

  return (
    <li className={`${isEditing ? style.todoItemEditing : style.todoItem} relative`}>

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
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
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
      <span className="absolute bottom-2 left-4 text-xs text-gray-400">{task.date}</span>
    </li>
  );
}
