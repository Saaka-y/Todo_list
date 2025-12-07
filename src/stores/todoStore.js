// @/stores/todoStore.js
import { create } from "zustand";

// Todo list 一覧管理用

export const useTodoStore = create((set, get) => ({
  // --- State（ただの値、初期値を書く）
  todoList: [],
  isInitialized: false, // ページ遷移時にtodoListが空配列で上書きされるのを防ぐ

  // 初回ロード 使うときはuseEffect([])
  initLocalStorage: () => {
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
      set({ todoList: JSON.parse(saved) });
    }
    set({ isInitialized: true });
  },

  //　使うときはuseEffect ([todoList, isInitialized])
  updateLocalStorage: () => {
    const { todoList, isInitialized } = get(); //stateはgetで取得
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
