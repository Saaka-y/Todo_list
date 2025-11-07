import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [todoList, setTodoList] = useState([]) // todoListは配列
  const [isInitialized, setIsInitialized] = useState(false); // ページ遷移時にtodoListが空配列で上書きされるのを防ぐ

  // 初回マウント時のみ localStorage から復元
  useEffect(() => {
      const saved = localStorage.getItem("todos");
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTodoList(JSON.parse(saved))
      };
      setIsInitialized(true);
    }, []);

  // todoList が変化したときに保存（初期化後のみ）
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList, isInitialized]);

  return (
    <Component
      {...pageProps}
      todoList={todoList}
      setTodoList={setTodoList}
    />);
}
