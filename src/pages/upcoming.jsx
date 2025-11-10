// Upcoming.jsx
import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { Header } from "@/components/Header";

export default function Upcoming({ todoList, setTodoList }) {

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Upcoming tasks</title>
      </Head>
      <Header page={"upcoming"} />
      <div className="flex-1 overflow-y-auto">
        <TodoForm
          setTodoList={setTodoList}
          page={"upcoming"} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          page={"upcoming"}
          filterType={"upcoming"} />
      </div>
    </div>
  );
}
