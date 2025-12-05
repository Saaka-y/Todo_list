// @/components/TodoItem.jsx
import style from "@/components/TodoItem.module.css";
import dayjs from "dayjs";
import { useState } from "react";
import { useTodoStore } from "@/stores/todoStore";
import { TodoItemEditor } from "@/components/TodoItemEditor";
import { TodoItemView } from "@/components/TodoItemView";

export function TodoItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editDate, setEditDate] = useState(task.date ? new Date(task.date) : null); //DatePicker用にオブジェクトに戻す
  const [isFading, setIsFading] = useState(false);

  const { editTask, deleteTask, toggleTaskStatus } = useTodoStore();

  const handleSave = () => {
    const editDateString = dayjs(editDate).format("YYYY-MM-DD")
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
      // 未完了に戻すときは即時。今後完了済みリストもどこかに表示する
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
