"use client";

import { TodoList } from "@/components/TodoList.jsx";
import { useState } from "react";
import style from "@/components/TodoForm.module.css";

export function TodoForm({ todoList, setTodoList, page }) {
  const [currentTask, setCurrentTask] = useState(""); // currentTaskは文字列
  const [taskDate, setTaskDate] = useState(""); // 文字列

  // addボタンイベント
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask || !taskDate) return; // 入力がなければ何もしない

    const newTask = { // 入力がある場合新しいtaskオブジェクトを作成
      id: Date.now(),
      text: currentTask,
      completed: false,
      date: taskDate,
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <input
            type="text"
            value={currentTask}
            onChange={handleInput}
            className={style.todoInput}
            placeholder="Enter a new task"
          />
          <div className="flex justify-between items-center w-full max-w-[300px] ">
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
            <button type="submit" className={style.addBtn}>
              Add
            </button>
          </div>
        </div>
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          page={page} />
      </form>
    </div>
  );
}
