//@/pages/_app.jsx

import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { useTodoStore } from "@/stores/todoStore";
import { useDarkModeStore } from "@/stores/darkModeStore";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { todoList, isInitialized, initLocalStorage, updateLocalStorage } = useTodoStore();
  const initDarkMode = useDarkModeStore((state) => state.initDarkMode);

  useEffect(() => {
    initLocalStorage();
  }, [initLocalStorage])

  useEffect(() => {
    updateLocalStorage();
  }, [todoList, isInitialized, updateLocalStorage])

  useEffect(() => {
    const cleanup = initDarkMode();
    return cleanup;
  }, [initDarkMode])

  return (
    <ErrorBoundary>
      <Component
        {...pageProps}
      />
    </ErrorBoundary>
  );
}
