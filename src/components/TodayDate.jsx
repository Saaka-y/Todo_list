
export function TodayDate() {

  const date = new Date();
  const formattedDate = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // const [taskAmount, setTaskAmount] = useState("");

  const taskAmount = 3

  return (
    <div>
      <span className="ml-1 mb-4 text-sm">{formattedDate}</span>
      <span className="ml-4 text-xl text-gray-400 ">{taskAmount}</span>
    </div>
  );
}
