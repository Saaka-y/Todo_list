//@/pages/_app.jsx

import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { useTodoStore } from "@/stores/todoStore";
import { useDarkModeStore } from "@/stores/darkModeStore";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { todoList, isInitialized, initTodos, updateTodos } = useTodoStore();
  const { initDarkMode} = useDarkModeStore();

  useEffect(() => {
    initTodos();
  }, [])

  useEffect(() => {
    updateTodos();
  }, [todoList, isInitialized])

  useEffect(() => {
    initDarkMode();
  },[])

  return (
    <Component
      {...pageProps}
    />);
}
