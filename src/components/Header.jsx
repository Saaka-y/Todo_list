import style from "@/components/Header.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

// to be updated with setUser

export function Header({ page }) {
  const greetings = [
    "Let's tackle your tasks today!",
    "Ready to get things done?",
    "Your tasks await!",
    "Time to make progress!",
    "Let's make today productive!"
  ];

  const [message, setMessage] = useState("")

  useEffect(() => {
    const index = Math.floor(Math.random() * greetings.length);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMessage(greetings[index]);
  }, [])

  return (
    <><header className={style.header}>
      <nav className="flex justify-end gap-x-2">
        {page === "today" ? (
          <>
            <Link href="/upcoming" className={style.selectableTab}>Upcoming</Link>
            <p className={style.currentPageTab}>Today</p>
          </>
        ) : (
          <>
            <p className={style.currentPageTab}>Upcoming</p>
            <Link href="/" className={style.selectableTab}>Today</Link>
          </>
        )}


      </nav>
    </header >
    <h1 
      className={`${style.greeting} text-md md:text-xl leading-relaxed`}>{message}</h1>
      </>
  );
}
