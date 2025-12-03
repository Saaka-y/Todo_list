// TodoItem.jsx
import { useState } from "react";
import style from "@/components/TodoItem.module.css";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6"
import DatePicker from "react-datepicker";
import dayjs from "dayjs";


export function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editDate, setEditDate] = useState(task.date ? new Date(task.date) : null); //todosに保存しているtask.dateは文字列なのでバグる。DatePickerで使うためにオブジェクトに戻す（homeのtaskDateと同じ型）
  const [isFading, setIsFading] = useState(false);

  const handleSave = () => {
    const editDateString = dayjs(editDate).format("YYYY-MM-DD")
    editTask(task.id, editText, editDateString);
    setIsEditing(false);
  };

  const handleToggle = () => {
    // フェードアウト開始
    if (!task.completed) {
      setIsFading(true);
      // 3秒後に実際のトグル処理
      setTimeout(() => toggleTask(task.id), 1000);
    } else {
      // 未完了に戻すときは即時
      toggleTask(task.id);
    }
  };

  console.log("エディットデイト：", editDate)


  return (
    <li className={`
        relative flex justify-between items-start gap-2
        rounded-xl border
        ${isEditing ? "border-(--btn-bg)" : "border-(--border-color)"}
        bg-(--todo-bg) p-4 my-4
        transition-all
        ${isFading ? style.fadeOut : ""}
      `}>

      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              value={editText}
              onChange={(e) => { setEditText(e.target.value) }}
              className={style.todoEditInput}
            />
            <DatePicker
              className="text-xs text-gray-400 underline"
              selected={editDate}
              onChange={(date) => setEditDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText={task.date}
            />
          </div>
          <button onClick={handleSave} className={style.saveBtn}>
            <FaRegSave />
          </button>
          <button
            className={style.deleteBtn}
            onClick={() => deleteTask(task.id)}
          >
            <FaRegTrashCan />
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
          <button
            className={style.deleteBtn}
            onClick={() => deleteTask(task.id)}
          >
            <FaRegTrashCan />
          </button>
          <span className="absolute bottom-1 left-4 text-xs text-gray-400">{task.date}</span>
        </>
      )}
    </li>
  );
}
