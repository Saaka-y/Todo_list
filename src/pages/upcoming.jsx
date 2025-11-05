// all tasks except today's here
import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function Upcoming() {
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
      <Header />
      <TodoForm />
      {/* <ThemeToggle /> */}
    </div>
  );
}
