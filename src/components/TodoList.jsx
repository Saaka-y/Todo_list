import { TodayDate } from "@/components/TodayDate";
import { TodoItem } from "@/components/TodoItem";
import style from "@/components/TodoList.module.css"


export function TodoList({ todoList, setTodoList }) {

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

  return (
    <div>
      
      <ul className={style.todoList}>
        <TodayDate />
        {todoList.map(task => (
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
