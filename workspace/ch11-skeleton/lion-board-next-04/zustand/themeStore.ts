import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from "zustand/middleware";

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  devtools(persist(
    (set, get) => ({
      isDarkMode: typeof window !== 'undefined' 
      ? localStorage.getItem('theme-storage') === 'dark' 
      : false,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      // toggleTheme: () =>
      //   set((state) => {
      //     console.log('반갑습니다')
      //     const newMode = !state.isDarkMode;
      //     if (typeof window !== 'undefined') {
      //       console.log('안녕하세요')
      //       document.documentElement.classList.toggle('dark', newMode);
      //     }
      //     return { isDarkMode: newMode };
      //   }),
      
      // 페이지 로드 시 localStorage의 값을 DOM에 반영
      initializeTheme: () => {
        if (typeof window !== 'undefined') {
          const currentMode = get().isDarkMode;
          document.documentElement.classList.toggle('dark', currentMode);
        }
      },
    }),
    {
      name: 'theme-storage',
    }
  )
)
);

export default useThemeStore;