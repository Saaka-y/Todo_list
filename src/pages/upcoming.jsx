// Upcoming.jsx
import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function Upcoming({ todoList, setTodoList }) {

  const today = new Date().toISOString().split("T")[0];
  const upcomingTodos = todoList.filter((todo) => todo.date > today);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Upcoming tasks</title>
      </Head>
      <Link href="/">
        Today&apos;s tasks
      </Link>
      <TodoForm
        todoList={upcomingTodos}
        setTodoList={setTodoList}
        page={"upcoming"} />
      {/* <ThemeToggle /> */}
    </div>
  );
}
