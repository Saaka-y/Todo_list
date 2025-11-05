import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";


export default function Home({ todoList, setTodoList }) {

  const today = new Date().toISOString().split("T")[0];
  const todayTodos = todoList.filter((todo) => todo.date === today && !todo.completed);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Today&apos;s tasks</title>
      </Head>
      <Link href="/upcoming">
        Upcoming tasks
      </Link>
      <Header />
      <TodoForm
        todoList={todayTodos}
        setTodoList={setTodoList} 
        page={"today"}/>
      {/* <ThemeToggle /> */}
    </div>
  );
}
