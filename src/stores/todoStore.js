// @/stores/todoStore.js
import { create } from "zustand";

// For managing the todo list

export const useTodoStore = create((set, get) => ({
  // --- State (initial values)
  todoList: [],
  isInitialized: false, // Prevents todoList from being overwritten with empty array on page transitions

  // Initial load - use with useEffect([])
  initLocalStorage: () => {
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
      set({ todoList: JSON.parse(saved) });
    }
    set({ isInitialized: true });
  },

  // Use with useEffect([todoList, isInitialized])
  updateLocalStorage: () => {
    const { todoList, isInitialized } = get(); // Get state with get()
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  },

  setNewTodos: (list) => {
    set({ todoList: list })
  },

  addTask: (newTask) => {
    const { todoList } = get();
    set({ todoList: [...todoList, newTask] });
  },

  deleteTask: (id) => {
    const { todoList } = get();
    set({ todoList: todoList.filter(t => t.id !== id) })
  },

  editTask: (id, updates) => {
    const { todoList } = get();
    set({
      todoList: todoList.map(t => t.id === id ? { ...t, ...updates } : t)
    });
  },

  toggleTaskStatus: (id) => {
    const { todoList } = get();
    set({
      todoList: todoList.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    });
  }
})) 
