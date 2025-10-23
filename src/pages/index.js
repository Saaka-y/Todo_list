import Head from "next/head";


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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <div>
        <form id="form">
          <h1>TODO LIST</h1>
          <div className="input_group">
            <input
              type="text"
              id="todo_input"
              className="todo_input"
              placeholder="Enter a new task"
            />
            <button type="submit" id="add_btn">
              Add
            </button>
          </div>
          <ul id="todo_list"></ul>
        </form>

        <button id="theme_toggle">Dark mode</button>
      </div>
    </div>
  );
}
