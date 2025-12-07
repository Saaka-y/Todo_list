// @/stores/taskStore.js
import { create } from "zustand";
import { dayToString } from "@/utils/dayToString.js";

// Form用

export const useTaskStore = create((set, get) => ({
  selectedTaskId: null, // 編集中のタスクID
  currentTaskText: "", // 入力中のテキスト
  currentStatus: false,
  currentTaskDate: null,  // 入力中の期日（Dateオブジェクト）

  // フォームに入力した値をセット
  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setCurrentTaskText: (text) => set({ currentTaskText: text }),
  setCurrentStatus: (bool) => set({ currentStatus: bool }),
  setCurrentTaskDate: (date) => set({ currentTaskDate: date }),

  // フォームをリセット
  resetTask: () =>
    set({
      selectedTaskId: null,
      currentTaskText: "",
      currentTaskDate: null,
    }),

  // 新規タスクオブジェクト作成用
  createTask: () => {
    const { currentTaskText, currentTaskDate } = get();
    if (!currentTaskText || !currentTaskDate) return null;

    return {
      id: Date.now(),
      text: currentTaskText.trim(),
      completed: false,
      date: dayToString(currentTaskDate)
    };
  }


}));
