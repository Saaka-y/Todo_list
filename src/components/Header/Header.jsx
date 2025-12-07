//@/components/Header/Header.jsx

import style from "@/components/Header/Header.module.css";
import Link from "next/link";
import { CiLight, CiDark } from "react-icons/ci";
import { useGreeting } from "@/hooks/useGreeting";
import { useDarkModeStore } from "@/stores/darkModeStore";

export function Header({ page }) {
  const { message } = useGreeting();
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <>
      <header className={style.header}>
        <nav className="flex justify-between gap-x-2">
          <button onClick={toggleDarkMode} className="cursor-pointer">
            {isDarkMode ? (<CiLight size={24} />) : (<CiDark size={24} />)}
          </button>
          <div className="flex gap-2">
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
          </div>

        </nav>
      </header >
      {page === "upcoming" ? null : (<h1
        className={`${style.greeting} text-md md:text-xl leading-relaxed`}>{message}</h1>)}
    </>
  );
}
