// @/stores/darkModeStore.js
import { create } from "zustand";

export const useDarkModeStore = create((set, get) => ({
  isDarkMode: false,
  isInitialized: false,

  //useEffect([])
  initDarkMode: () => {
    const savedDark = localStorage.getItem("darkMode");
    if (savedDark !== null) {
      set({ isDarkMode: savedDark === "true" });
    } else {
      // OS設定を参照
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      set({ isDarkMode: media.matches });

      const handler = (e) => set({ isDarkMode: e.matches });
      media.addEventListener("change", handler);
    }
    set({ isInitialized: true });
  },

  //useEffect([isDarkMode])
  toggleDarkMode: () => {
    const next = !get().isDarkMode //単体のstateだけ取得するならドット
    localStorage.setItem("darkMode", next);
    set({ isDarkMode: next })
    document.documentElement.classList.toggle("dark", next);
  }
}))

