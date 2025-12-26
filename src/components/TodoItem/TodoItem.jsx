// @/components/TodoItem/TodoItem.jsx
import style from "@/components/TodoItem/TodoItem.module.css";
import { useState } from "react";
import { useTodoStore } from "@/stores/todoStore";
import { dayToString } from "@/utils/dayToString";
import { TodoItemEditor } from "@/components/TodoItem/TodoItemEditor";
import { TodoItemView } from "@/components/TodoItem/TodoItemView";

export function TodoItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editDate, setEditDate] = useState(task.date ? new Date(task.date) : null); // Convert back to Date object for DatePicker
  const { editTask, deleteTask, toggleTaskStatus } = useTodoStore();

  const handleSave = () => {
    const editDateString = dayToString(editDate);
    editTask(task.id, {
      text: editText,
      date: editDateString,
    });
    setIsEditing(false);
  };

  const handleToggle = () => {
    if (!task.completed) {
      setIsFading(true);
      setTimeout(() => toggleTaskStatus(task.id), 1000);
    } else {
      // When uncompleting, do it immediately. In the future, may display completed list somewhere
      toggleTaskStatus(task.id);
    }
  };

  return (
    <li className={`
        relative flex justify-between items-start gap-2
        rounded-xl border
        ${isEditing ? "border-(--btn-bg)" : "border-(--border-color)"}
        bg-(--todo-bg) p-4 my-4
        transition-all
        ${isFading ? style.fadeOut : ""}
      `}>

      {isEditing ?
        <TodoItemEditor
          className=""
          editText={editText}
          setEditText={setEditText}
          editDate={editDate}
          setEditDate={setEditDate}
          onSave={handleSave}
          onDelete={() => deleteTask(task.id)}
        />
        :
        <TodoItemView
          task={task}
          isFading={isFading}
          onToggle={handleToggle}
          onEdit={() => setIsEditing(true)}
          onDelete={() => deleteTask(task.id)}
        />
      }
    </li>
  );
}
