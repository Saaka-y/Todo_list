// @/hooks/useGreeting.js
import { useEffect, useState } from "react";

const greetings = [
  "Let's tackle your tasks today!",
  "Ready to get things done?",
  "Your tasks await!",
  "Time to make progress!",
  "Let's make today productive!"
];

export function useGreeting() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const index = Math.floor(Math.random() * greetings.length);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMessage(greetings[index]);
  }, [])

  return { message };
}
