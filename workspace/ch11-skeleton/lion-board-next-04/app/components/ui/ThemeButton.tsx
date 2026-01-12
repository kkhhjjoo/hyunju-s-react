import { create } from 'zustand';

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  initTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  
  toggleTheme: () => set((state) => {
    const newIsDark = !state.isDarkMode;
    
    // DOM 업데이트
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    return { isDarkMode: newIsDark };
  }),
  
  // 초기 테마 로드
  initTheme: () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      
      set({ isDarkMode: isDark });
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}));

export default useThemeStore;