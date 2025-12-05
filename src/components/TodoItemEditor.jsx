// @/components/TodoItemEditor.jsx
import style from "@/components/TodoItem.module.css";
import DatePicker from "react-datepicker";
import { FaRegSave } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6"


export function TodoItemEditor({ editText, setEditText, editDate, setEditDate, onSave, onDelete }) {

  return (
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
          onChange={setEditDate}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <button onClick={onSave} className={style.saveBtn}>
        <FaRegSave />
      </button>
      <button
        className={style.deleteBtn}
        onClick={onDelete}
      >
        <FaRegTrashCan />
      </button>
    </>
  );
}
