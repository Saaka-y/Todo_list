//@/pages/index.jsx

import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList/TodoList";
import { Header } from "@/components/Header/Header";

export default function Home() {
  const PAGE = "today"

  return (
    <div className="min-h-screen overflow-y-auto">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Today&apos;s tasks</title>
      </Head>
      <Header
        page={PAGE}
      />
      <TodoForm page={PAGE} />
      <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-center md:items-start">
        <TodoList
        page={PAGE}
        filterType={PAGE}
      />
      <TodoList
        page={PAGE}
        filterType={"expired"}
      />
      </div>
    </div>
  );
}
