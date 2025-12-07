//@/components/TodoForm.jsx

import style from "@/components/TodoForm.module.css";
import DatePicker from "react-datepicker";
import { useTodoStore } from "@/stores/todoStore";
import { useTaskStore } from "@/stores/taskStore";

export function TodoForm() {
  const addTask = useTodoStore((state) => state.addTask);
  const { currentTaskText, currentTaskDate, setCurrentTaskText, setCurrentTaskDate, createTask, resetTask } = useTaskStore();

  // add button event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTaskText) return;
    if (!currentTaskDate) {
      alert("Please set the deadline.");
      return;
    }
    // 入力がある場合新しいtaskオブジェクトを作成
    const newTask = createTask();
    addTask(newTask);
    resetTask();
  }

  // 文字数制限
  const handleInput = (e) => {
    if (e.target.value.length > 40) {
      return;
    } else {
      setCurrentTaskText(e.target.value.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center w-4/5 max-w-[500px] mx-auto my-8 bg-(--input-bg) p-4 border border-(--border-color) rounded-xl md:flex-row md:justify-center md:items-center md:gap-4">
        <input
          type="text"
          value={currentTaskText}
          onChange={handleInput}
          className={style.todoInput}
          placeholder="Enter a new task"
        />
        <div className="flex justify-between items-center w-full max-w-[300px] text-gray-400 text-sm">
          <DatePicker
            selected={currentTaskDate}
            onChange={(date) => setCurrentTaskDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Set the deadline"
            className="px-2 py-1 text-gray-500 border border-(--border-color) rounded"
          />
          <button type="submit" className={style.addBtn}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
