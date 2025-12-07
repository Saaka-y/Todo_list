//@/components/ListHeading.jsx


import { dayToString } from "@/utils/dayToString";

export function ListHeading({ page, filterType, taskAmount }) {
  const date = new Date();
  const dayStr = dayToString(date);

  return (
    <div>
      {page === "upcoming" ? (
        <span className="ml-1 mb-4 text-sm">You have {taskAmount} tasks left.</span>
      ) : filterType === "expired" ? (
        <span className="ml-1 mb-4 text-sm text-red-500">
          You have 
          <span className={!taskAmount ? "text-sm" : "text-xl"}>
            {!taskAmount ? " No " : taskAmount}
          </span> 
          expired tasks!
        </span>
      ) : (
        <span className="ml-1 mb-4 text-sm">{dayStr}</span>
      )}

      <span className="ml-4 text-xl text-gray-400 ">
        {page === "upcoming" || filterType === "expired"
          ? null
          : taskAmount}</span>
    </div>
  );
}
