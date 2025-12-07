//@/pages/_app.jsx

import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { useTodoStore } from "@/stores/todoStore";
import { useDarkModeStore } from "@/stores/darkModeStore";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { todoList, isInitialized, initLocalStorage, updateLocalStorage } = useTodoStore();
  const initDarkMode = useDarkModeStore((state) => state.initDarkMode);

  useEffect(() => {
    initLocalStorage();
  }, [])

  useEffect(() => {
    updateLocalStorage();
  }, [todoList, isInitialized])

  useEffect(() => {
    initDarkMode();
  }, [])

  console.log(todoList)

  return (
    <Component
      {...pageProps}
    />);
}
