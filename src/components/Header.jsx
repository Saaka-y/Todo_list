import style from "@/components/Header.module.css";
import { useEffect, useState } from "react";

// to be updated with setUser

export function Header() {
  const quotes = [
    "Let's tackle your tasks today!",
    "Ready to get things done?",
    "Your tasks await!",
    "Time to make progress!",
    "Let's make today productive!"
  ];

  const [message, setMessage] = useState("")

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setMessage(quotes[index]);
  }, [])

  return (
    <header className={style.header}>
      <h1>{message}</h1>
    </header>
  );
}
