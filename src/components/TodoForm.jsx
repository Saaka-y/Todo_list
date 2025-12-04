//@/components/TodoForm.jsx

import style from "@/components/TodoForm.module.css";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { useState } from "react";

export function TodoForm() {
  const [currentTask, setCurrentTask] = useState(""); // currentTaskは文字列
  const [taskDate, setTaskDate] = useState(null); // Dateオブジェクト 例）Wed Dec 03 2025 00:00:00 GMT+0900 (日本標準時)

  // add button event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask) return;
    if (!taskDate) {
      alert("Please set the deadline.");
      return;
    } 

    // 入力がある場合新しいtaskオブジェクトを作成
    const newTask = { 
      id: Date.now(),
      text: currentTask,
      completed: false,
      date: dayjs(taskDate).format("YYYY-MM-DD")
    }

    setTodoList(prev => [...prev, newTask]);
    setCurrentTask("");
    setTaskDate(null);
  }

  // 文字数制限
  const handleInput = (e) => {
    if (e.target.value.length > 40) {
      return;
    } else {
      setCurrentTask(e.target.value.trim())
    }
  }

  console.log("タスクデイト：", taskDate)

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center w-4/5 max-w-[500px] mx-auto my-8 bg-(--input-bg) p-4 border border-(--border-color) rounded-xl md:flex-row md:justify-center md:items-center md:gap-4">
        <input
          type="text"
          value={currentTask}
          onChange={handleInput}
          className={style.todoInput}
          placeholder="Enter a new task"
        />
        <div className="flex justify-between items-center w-full max-w-[300px] text-gray-400 text-sm">
          <DatePicker
            selected={taskDate}
            onChange={(date) => setTaskDate(date)}
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
