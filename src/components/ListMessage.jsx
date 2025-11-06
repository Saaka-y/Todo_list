import { useState, useEffect } from "react";


export function ListMessage({ todoList, page, filteredTodoList, filterType }) {

  const date = new Date();
  const todayStr = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [taskAmount, setTaskAmount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTaskAmount(filteredTodoList.length)
  }, [todoList])


  return (
    <div>
      {page === "upcoming" ? (
        <span className="ml-1 mb-4 text-sm">You have {taskAmount} tasks left.</span>
      ) : filterType === "expired" ? (
        <span className="ml-1 mb-4 text-sm text-red-500">You have {taskAmount} expired tasks!</span>
      ) : (
        <span className="ml-1 mb-4 text-sm">{todayStr}</span>
      )}

      <span className="ml-4 text-xl text-gray-400 ">
        {page === "upcoming" || filterType === "expired"
          ? null
          : taskAmount}</span>
    </div>
  );
}
