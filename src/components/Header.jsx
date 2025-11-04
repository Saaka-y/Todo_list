import style from "@/components/Header.module.css";
import { useState } from "react";

// to be updated with setUser

export function Header() {

  const [user, setUser] = useState({
    name: "Saaka",
  })

  return (
    <header className={style.header}>
      <h1>Hello, {user.name}!</h1>
    </header>
  );
}
