// //@/pages/upcoming.jsx

import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { Header } from "@/components/Header/Header";

export default function Upcoming() {
  const PAGE = "upcoming";

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Upcoming tasks</title>
      </Head>
      <Header
        page={PAGE}
      />
      <div className="flex-1 overflow-y-auto">
        <TodoForm page={PAGE} />
        <TodoList page={PAGE} filterType={PAGE} />
      </div>
    </div>
  );
}
