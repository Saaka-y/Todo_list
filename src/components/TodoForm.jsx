import { TodoList } from "@/components/TodoList.jsx";
import { useEffect, useState } from "react";
import style from "@/components/TodoForm.module.css";

export function TodoForm() {

  const [todoList, setTodoList] = useState([]); // todoListは配列
  const [currentTask, setCurrentTask] = useState(""); // currentTaskは文字列

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!currentTask) return; // 入力がなければ何もしない

    const newTaskObj = { // 入力がある場合新しいtaskオブジェクトを作成
      id: Date.now(),
      text: currentTask,
      completed: false,
    }

    setTodoList([...todoList, newTaskObj]);
    setCurrentTask("")
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  },[todoList])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodoList(savedTodos);
  }, []);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.input_group}>
          <input
            type="text"
            value={currentTask || ""}
            onChange={(e) => setCurrentTask(e.target.value)}
            className={style.todo_input}
            placeholder="Enter a new task"
          />
          <button type="submit" className={style.add_btn}>
            Add
          </button>
        </div>
        <TodoList />
      </form>
    </div>
  );
}
