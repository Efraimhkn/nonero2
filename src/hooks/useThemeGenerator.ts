import { useEffect, useMemo, useState } from 'react';
import { createPreviewVariables, defaultTheme, generateHydraCss, presets } from '@/lib/hydraClasses';
import { useThemeStore } from '@/store/themeStore';
import { HydraTheme } from '@/types/theme';

const mergeTheme = (current: HydraTheme, partial: Partial<HydraTheme>): HydraTheme => ({
  ...current,
  ...partial,
  colors: { ...current.colors, ...partial.colors },
  opacity: { ...current.opacity, ...partial.opacity },
  typography: { ...current.typography, ...partial.typography },
  effects: { ...current.effects, ...partial.effects },
  background: { ...current.background, ...partial.background }
});

export const useThemeGenerator = () => {
  const { theme, setTheme, updateTheme, resetTheme } = useThemeStore();
  const [debouncedAdvancedCss, setDebouncedAdvancedCss] = useState(theme.advancedCss);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedAdvancedCss(theme.advancedCss), 250);
    return () => window.clearTimeout(timer);
  }, [theme.advancedCss]);

  const effectiveTheme = useMemo(() => ({ ...theme, advancedCss: debouncedAdvancedCss }), [theme, debouncedAdvancedCss]);
  const previewVars = useMemo(() => createPreviewVariables(theme), [theme]);
  const generatedCss = useMemo(() => generateHydraCss(effectiveTheme), [effectiveTheme]);

  const patchTheme = <K extends keyof HydraTheme>(key: K, value: HydraTheme[K]) => {
    updateTheme((current) => ({ ...current, [key]: value }));
  };

  const patchNested = (
    section: 'colors' | 'opacity' | 'typography' | 'effects' | 'background',
    key: string,
    value: string | number | boolean
  ) => {
    updateTheme((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value
      }
    } as HydraTheme));
  };

  const applyPreset = (presetId: string) => {
    const preset = presets.find((item) => item.id === presetId);
    if (!preset) return;
    setTheme(mergeTheme(defaultTheme, preset.data));
  };

  const exportJson = () => JSON.stringify(theme, null, 2);

  return {
    theme,
    previewVars,
    generatedCss,
    patchTheme,
    patchNested,
    applyPreset,
    resetTheme,
    exportJson,
    presets,
    setTheme
  };
};
