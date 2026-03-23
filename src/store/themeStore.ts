import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultTheme } from '@/lib/hydraClasses';
import { HydraTheme } from '@/types/theme';

type ThemeState = {
  theme: HydraTheme;
  setTheme: (theme: HydraTheme) => void;
  updateTheme: (updater: (theme: HydraTheme) => HydraTheme) => void;
  resetTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: defaultTheme,
      setTheme: (theme) => set({ theme }),
      updateTheme: (updater) => set((state) => ({ theme: updater(state.theme) })),
      resetTheme: () => set({ theme: defaultTheme })
    }),
    {
      name: 'hydra-theme-studio'
    }
  )
);
