"use client";

import { useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import style from "@/components/TodoForm.module.css";


export function TodoForm({ setTodoList }) {
  const [currentTask, setCurrentTask] = useState(""); // currentTaskは文字列
  const [taskDate, setTaskDate] = useState(null); // 文字列

  // addボタンイベント
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask || !taskDate) return; // 入力がなければ何もしない

    const newTask = { // 入力がある場合新しいtaskオブジェクトを作成
      id: Date.now(),
      text: currentTask,
      completed: false,
      date: dayjs(taskDate).format("YYYY-MM-DD")
    }

    setTodoList(prev => [...prev, newTask]);
    setCurrentTask("");
    setTaskDate("");
  }

  // 文字数制限
  const handleInput = (e) => {
    if (e.target.value.length > 20) {
      return;
    } else {
      setCurrentTask(e.target.value.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center w-4/5 max-w-[500px] mx-auto my-8 bg-(--todo-bg) p-4 border border-(--border-color) rounded-xl md:flex-row md:justify-center md:items-center md:gap-4">
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
            placeholderText="deadline"
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
