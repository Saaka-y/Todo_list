import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [todoList, setTodoList] = useState([]) // todoListは配列
  const [isInitialized, setIsInitialized] = useState(false); // ページ遷移時にtodoListが空配列で上書きされるのを防ぐ
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 初回マウント時のみ localStorage から復元
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodoList(JSON.parse(saved))
    };

    // ダークモード設定の復元
    const savedDark = localStorage.getItem("darkMode");
    if (savedDark) {
      setIsDarkMode(savedDark === "true");
    } else {
      // OS設定を参照
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeMediaQuery.matches);

      const handleChange = (e) => setIsDarkMode(e.matches);
      darkModeMediaQuery.addEventListener("change", handleChange);

      return () => darkModeMediaQuery.removeEventListener("change", handleChange);
    }

    setIsInitialized(true);
  }, []);

  // todoList が変化したときに保存（初期化後のみ）
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList, isInitialized]);

  // ダークモードのクラス切り替えと保存
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <Component
      {...pageProps}
      todoList={todoList}
      setTodoList={setTodoList}
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    />);
}
