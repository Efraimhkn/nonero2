export type BackgroundTarget = 'none' | 'header' | 'sidebar' | 'content' | 'launcher';
export type BackgroundSize = 'cover' | 'contain' | 'auto';
export type BackgroundPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';
export type BackgroundRepeat = 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';

export interface ThemeColors {
  primary: string;
  background: string;
  header: string;
  sidebar: string;
  content: string;
  bottom: string;
  text: string;
  textOnButton: string;
}

export interface PanelOpacity {
  header: number;
  sidebar: number;
  content: number;
  bottom: number;
}

export interface TypographySettings {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export interface EffectsSettings {
  borderRadius: number;
  shadowIntensity: number;
  shadowColor: string;
  blurIntensity: number;
}

export interface BackgroundSettings {
  source: string;
  target: BackgroundTarget;
  size: BackgroundSize;
  position: BackgroundPosition;
  repeat: BackgroundRepeat;
  preserveAnimation: boolean;
}

export interface ThemePreset {
  id: string;
  label: string;
  description: string;
  data: Partial<HydraTheme>;
}

export interface HydraTheme {
  themeName: string;
  nickname: string;
  editorMode: 'light' | 'dark';
  colors: ThemeColors;
  opacity: PanelOpacity;
  typography: TypographySettings;
  effects: EffectsSettings;
  background: BackgroundSettings;
  advancedCss: string;
}
