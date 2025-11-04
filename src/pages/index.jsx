import Head from "next/head";
import { TodoForm } from "@/components/TodoForm";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";

// Transit HTML page to React component here
// class -> className
// hyphen in id or class -> underscore

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo List App</title>
      </Head>
      <Header />
      <TodoForm />
      {/* <ThemeToggle /> */}
    </div>
  );
}
