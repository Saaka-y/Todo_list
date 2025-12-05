// @/stores/todoStore.js
import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
  // --- State（ただの値、初期値を書く）
  todoList: [],
  isInitialized: false, // ページ遷移時にtodoListが空配列で上書きされるのを防ぐ

  // --- Actions（状態をどう使うか、変化させる関数）
  // 初回ロード 使うときはuseEffect([])
  initTodos: () => {
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
      set({ todoList: JSON.parse(saved) });
    }
    set({ isInitialized: true });
  },

  // todoList が変化したときに保存（初期化後のみ）
  //　使うときはuseEffect ([todoList, isInitialized])
  updateTodos: () => {
    const { todoList, isInitialized } = get(); //stateはgetで取得
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  },

  //todoListを新しくする
  setNewTodoList: (newTask) => {
    const { todoList } = get();
    set({ todoList: [...todoList, newTask] });
  }

})) 
