//@/components/TodoList/ListHeading.jsx

import { dayToString } from "@/utils/dayToString";

export function ListHeading({ page, filterType, taskAmount }) {
  const date = new Date();
  const todayStr = dayToString(date);

  const taskAmountStr = taskAmount === 0 ? " No " : ` ${taskAmount} `;
  const taskAmountClass = taskAmount === 0 ? "text-sm" : "text-xl";

  return (
    <div>
      {page === "upcoming" ? (

        // upcoming tasks heading
        <span className="text-sm">You have<span className={taskAmountClass}>{taskAmountStr}</span>tasks left.</span>

      ) : filterType === "expired" ? (

        // expired tasks heading
        <span className="ml-1 mb-4 text-sm text-red-500">
          You have
          <span className={!taskAmount ? "text-sm" : "text-xl"}>{taskAmountStr}</span>
          expired tasks!
        </span>

      ) : (

        // today's tasks heading
        <span className="ml-1 mb-4 text-sm">{todayStr}</span>
      )}
      <span className="ml-4 text-xl text-gray-400 ">
        {filterType === "today"
          ? taskAmount
          : null}
      </span>
      
    </div>
  );
}
