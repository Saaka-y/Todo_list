"use client";

import { TodoList } from "@/components/TodoList.jsx";
import { useEffect, useState } from "react";
import style from "@/components/TodoForm.module.css";

export function TodoForm() {

  const [todoList, setTodoList] = useState([]) // todoListは配列
  const [currentTask, setCurrentTask] = useState(""); // currentTaskは文字列

  // 初回マウント時のみ localStorage から復元
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("todos");
      if (saved) setTodoList(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentTask) return; // 入力がなければ何もしない

    const newTaskObj = { // 入力がある場合新しいtaskオブジェクトを作成
      id: Date.now(),
      text: currentTask,
      completed: false,
    }

    setTodoList([...todoList, newTaskObj]);
    setCurrentTask("")
  }

  // リストが変わるたび保存
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList]);



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <input
            type="text"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            className={style.todoInput}
            placeholder="Enter a new task"
          />
          <button type="submit" className={style.addBtn}>
            Add
          </button>
        </div>
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList} />
      </form>
    </div>
  );
}
