// @/stores/taskStore.js
import { create } from "zustand";
import { dayToString } from "@/utils/dayToString.js";

// For form state management

export const useTaskStore = create((set, get) => ({
  selectedTaskId: null, // ID of task being edited
  currentTaskText: "", // Text being input
  currentTaskDate: null,  // Deadline being input (Date object)

  // Set values entered in form
  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setCurrentTaskText: (text) => set({ currentTaskText: text }),
  setCurrentTaskDate: (date) => set({ currentTaskDate: date }),

  // Reset form
  resetTask: () =>
    set({
      selectedTaskId: null,
      currentTaskText: "",
      currentTaskDate: null,
    }),

  // Create new task object
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
