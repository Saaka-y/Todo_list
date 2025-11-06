import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { Header } from "@/components/Header";
import Link from "next/link";


export default function Home({ todoList, setTodoList }) {

  const today = new Date().toISOString().split("T")[0];
  const todayTodos = todoList.filter((todo) => todo.date === today && !todo.completed);

  return (
    <div className="min-h-screen overflow-y-auto">
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
        page={"today"} />
      <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-center md:items-start">
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        page={"today"}
        filterType={"today"}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        page={"today"}
        filterType={"expired"}
      />
      </div>
    </div>
  );
}
