import { useState, useEffect } from "react";


export function TodayDate({ todoList, page }) {

  const date = new Date();
  const todayStr = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [todayTaskAmount, setTodayTaskAmount] = useState(0); // taskAmountは数字
  const [upcimgnTaskAmount, setUpcomingTaskAmount] = useState(0);

  const todayISO = date.toISOString().split("T")[0];

  useEffect(() => {
    const todayTodos = todoList.filter(task => task.date === todayISO)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTodayTaskAmount(todayTodos.length)
  }, [todoList])

  useEffect(() => {
    const upcomingTodos = todoList.filter(task => task.date !== todayISO)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUpcomingTaskAmount(upcomingTodos.length)
  }, [todoList])


  return (
    <div>
      <span className="ml-1 mb-4 text-sm">{page === "upcoming" ? `You have ${upcimgnTaskAmount} tasks left.` : todayStr}</span>
      <span className="ml-4 text-xl text-gray-400 ">{page === "today" ? todayTaskAmount : null}</span>
    </div>
  );
}
