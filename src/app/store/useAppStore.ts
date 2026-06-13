import {create} from 'zustand';

type AppState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useAppStore = create<AppState>(
  set => ({
    isDarkMode: false,

    toggleTheme: () =>
      set(state => ({
        isDarkMode: !state.isDarkMode,
      })),
  }),
);