import { ListMessage } from "@/components/ListMessage";
import { TodoItem } from "@/components/TodoItem";


export function TodoList({ todoList, setTodoList, page, filterType }) {

  const toggleTask = (id) => {
    setTodoList(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = (id) => {
    setTodoList(prev => prev.filter(task => task.id !== id));
  }

  const editTask = (id, newText) => {
    setTodoList(prev =>
      prev.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  let filteredTodoList;
  const today = new Date().toISOString().split("T")[0];

  if (filterType === "today") {
    filteredTodoList = todoList.filter((todo) => todo.date === today && !todo.completed);
  } else if (filterType === "upcoming") {
    filteredTodoList = todoList.filter((todo) => todo.date > today && !todo.completed);
  } else if (filterType === "expired") {
    filteredTodoList = todoList.filter((todo) => todo.date < today && !todo.completed);
  } else {
    filteredTodoList = todoList;
  }


  return (
    <div className="flex justify-center items-start w-full mt-2">
      <ul className="w-4/5 max-w-[500px] list-none">
        <ListMessage
          todoList={todoList}
          page={page}
          filteredTodoList={filteredTodoList}
          filterType={filterType}
        />
        {filteredTodoList.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}
