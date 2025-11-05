import { useState, useEffect } from "react";


export function TodayDate({ todoList }) {

  const date = new Date();
  const todayStr = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [taskAmount, setTaskAmount] = useState(0); // taskAmountは数字

  useEffect(() => {
    const todayISO = date.toISOString().split("T")[0];
    const todayTodos = todoList.filter(task => task.date === todayISO)
    setTaskAmount(todayTodos.length)
  }, [todoList])


  return (
    <div>
      <span className="ml-1 mb-4 text-sm">{todayStr}</span>
      <span className="ml-4 text-xl text-gray-400 ">{taskAmount}</span>
    </div>
  );
}
