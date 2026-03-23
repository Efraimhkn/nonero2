import { HydraTheme, ThemePreset } from '@/types/theme';

export const hydraFonts = [
  'Inter',
  'Poppins',
  'Roboto',
  'Montserrat',
  'Nunito',
  'Lato',
  'Open Sans',
  'Raleway',
  'Ubuntu',
  'Fira Sans',
  'Work Sans',
  'Merriweather',
  'Space Grotesk',
  'Manrope',
  'DM Sans'
];

export const defaultTheme: HydraTheme = {
  themeName: 'Hydra Pulse',
  nickname: 'SeuNick',
  editorMode: 'dark',
  colors: {
    primary: '#8b5cf6',
    background: '#08111f',
    header: '#101826',
    sidebar: '#0d1623',
    content: '#111c2d',
    bottom: '#0e1726',
    text: '#f8fafc',
    textOnButton: '#f8fafc'
  },
  opacity: {
    header: 88,
    sidebar: 86,
    content: 82,
    bottom: 88
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 1.45
  },
  effects: {
    borderRadius: 18,
    shadowIntensity: 28,
    shadowColor: '#020617',
    blurIntensity: 18
  },
  background: {
    source: '',
    target: 'launcher',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
    preserveAnimation: true
  },
  advancedCss: '.game-card:hover {\n  transform: translateY(-4px);\n}\n'
};

const makePreset = (id: string, label: string, description: string, data: Partial<HydraTheme>): ThemePreset => ({
  id,
  label,
  description,
  data
});

export const presets: ThemePreset[] = [
  makePreset('neon', 'Neon', 'Roxo elétrico com brilho vibrante.', {
    themeName: 'Neon Nights',
    colors: { ...defaultTheme.colors, primary: '#22d3ee', header: '#0a1020', sidebar: '#090f1d', content: '#0d1628' }
  }),
  makePreset('glass', 'Glass', 'Glassmorphism translúcido e elegante.', {
    themeName: 'Glass Aura',
    opacity: { header: 62, sidebar: 58, content: 55, bottom: 62 },
    effects: { ...defaultTheme.effects, blurIntensity: 28, shadowIntensity: 34 },
    colors: { ...defaultTheme.colors, background: '#06121f', content: '#112034' }
  }),
  makePreset('dracula', 'Dracula', 'Escuro clássico com rosa e roxo.', {
    themeName: 'Dracula Hydra',
    colors: { primary: '#ff79c6', background: '#191a21', header: '#282a36', sidebar: '#20222c', content: '#2a2c39', bottom: '#282a36', text: '#f8f8f2', textOnButton: '#191a21' }
  }),
  makePreset('sakura', 'Sakura', 'Rosas suaves e leveza pastel.', {
    themeName: 'Sakura Bloom',
    colors: { primary: '#fb7185', background: '#fff1f2', header: '#ffe4e6', sidebar: '#ffe4e6', content: '#fff7f7', bottom: '#ffe4e6', text: '#4c0519', textOnButton: '#fff1f2' },
    editorMode: 'light'
  }),
  makePreset('retro', 'Retro', 'Verde terminal com nostalgia arcade.', {
    themeName: 'Retro Matrix',
    colors: { primary: '#22c55e', background: '#08100a', header: '#102114', sidebar: '#0b190f', content: '#122817', bottom: '#102114', text: '#dcfce7', textOnButton: '#052e16' }
  }),
  makePreset('minimal', 'Minimal', 'Visual clean e neutro.', {
    themeName: 'Minimal Slate',
    colors: { primary: '#64748b', background: '#f8fafc', header: '#ffffff', sidebar: '#f1f5f9', content: '#ffffff', bottom: '#ffffff', text: '#0f172a', textOnButton: '#ffffff' },
    editorMode: 'light',
    effects: { ...defaultTheme.effects, shadowIntensity: 12, blurIntensity: 6 }
  }),
  makePreset('cyberpunk', 'Cyberpunk', 'Amarelo ácido e magenta futurista.', {
    themeName: 'Cyberpunk Pulse',
    colors: { primary: '#facc15', background: '#12031f', header: '#1f1230', sidebar: '#190d29', content: '#25153d', bottom: '#1f1230', text: '#fdf4ff', textOnButton: '#12031f' },
    effects: { ...defaultTheme.effects, shadowColor: '#ff00ff', shadowIntensity: 38 }
  }),
  makePreset('pastel', 'Pastel', 'Tons suaves com leitura confortável.', {
    themeName: 'Pastel Dream',
    colors: { primary: '#60a5fa', background: '#f8fafc', header: '#e0f2fe', sidebar: '#dbeafe', content: '#eff6ff', bottom: '#e0f2fe', text: '#1e3a8a', textOnButton: '#eff6ff' },
    editorMode: 'light'
  }),
  makePreset('dark-default', 'Dark Default', 'Tema escuro equilibrado padrão.', {
    themeName: 'Dark Default',
    colors: { ...defaultTheme.colors, primary: '#6366f1' }
  }),
  makePreset('light-mode', 'Light Mode', 'Clássico claro para showcases.', {
    themeName: 'Hydra Light',
    colors: { primary: '#2563eb', background: '#e2e8f0', header: '#f8fafc', sidebar: '#ffffff', content: '#ffffff', bottom: '#f8fafc', text: '#0f172a', textOnButton: '#ffffff' },
    editorMode: 'light',
    opacity: { header: 94, sidebar: 92, content: 96, bottom: 94 }
  })
];

const hexToRgb = (hex: string) => {
  const clean = hex.replace('#', '');
  const expanded = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  const num = Number.parseInt(expanded, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
};

const rgba = (hex: string, opacity: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};

export const createPreviewVariables = (theme: HydraTheme): Record<string, string> => ({
  '--hydra-primary': theme.colors.primary,
  '--hydra-background': theme.colors.background,
  '--hydra-header': rgba(theme.colors.header, theme.opacity.header),
  '--hydra-sidebar': rgba(theme.colors.sidebar, theme.opacity.sidebar),
  '--hydra-content': rgba(theme.colors.content, theme.opacity.content),
  '--hydra-bottom': rgba(theme.colors.bottom, theme.opacity.bottom),
  '--hydra-text': theme.colors.text,
  '--hydra-text-on-button': theme.colors.textOnButton,
  '--hydra-font': theme.typography.fontFamily,
  '--hydra-font-size': `${theme.typography.fontSize}px`,
  '--hydra-font-weight': `${theme.typography.fontWeight}`,
  '--hydra-line-height': `${theme.typography.lineHeight}`,
  '--hydra-radius': `${theme.effects.borderRadius}px`,
  '--hydra-shadow': `0 18px 48px color-mix(in srgb, ${theme.effects.shadowColor} ${Math.min(theme.effects.shadowIntensity * 2, 100)}%, transparent)`,
  '--hydra-blur': `${theme.effects.blurIntensity}px`
});

export const generateHydraCss = (theme: HydraTheme) => {
  const today = new Date().toLocaleDateString('pt-BR');
  const comment = `/*\n  Tema: ${theme.themeName}\n  Autor: ${theme.nickname}\n  Criado com Hydra Theme Studio\n  Data: ${today}\n  https://docs.hydralauncher.gg/themes.html\n*/`;

  const backgroundTargetClass = theme.background.target === 'content' ? '.container__content' : theme.background.target === 'header' ? '.header' : theme.background.target === 'sidebar' ? '.sidebar' : '.hydra-preview-shell';
  const backgroundRule = theme.background.source && theme.background.target !== 'none'
    ? `
${theme.background.target === 'launcher' ? '.hydra-preview-shell' : `.hydra-preview-shell ${backgroundTargetClass}` } {
  background-image: url('${theme.background.source}');
  background-size: ${theme.background.size};
  background-position: ${theme.background.position};
  background-repeat: ${theme.background.repeat};
}`
    : '';

  return `${comment}
:root {
  --primary-color: ${theme.colors.primary};
  --background-color: ${theme.colors.background};
  --header-background-color: ${rgba(theme.colors.header, theme.opacity.header)};
  --sidebar-background-color: ${rgba(theme.colors.sidebar, theme.opacity.sidebar)};
  --content-background-color: ${rgba(theme.colors.content, theme.opacity.content)};
  --bottom-panel-background-color: ${rgba(theme.colors.bottom, theme.opacity.bottom)};
  --text-color: ${theme.colors.text};
  --text-on-button-color: ${theme.colors.textOnButton};
  --font-family: '${theme.typography.fontFamily}', sans-serif;
  --font-size: ${theme.typography.fontSize}px;
  --font-weight: ${theme.typography.fontWeight};
  --line-height: ${theme.typography.lineHeight};
  --border-radius: ${theme.effects.borderRadius}px;
  --shadow-color: ${theme.effects.shadowColor};
  --shadow-intensity: ${theme.effects.shadowIntensity};
  --blur-intensity: ${theme.effects.blurIntensity}px;
}

.header,
.sidebar,
.container__content,
.bottom-panel,
.button,
.toast {
  font-family: var(--font-family);
  color: var(--text-color);
}

.header {
  background: var(--header-background-color);
  backdrop-filter: blur(var(--blur-intensity));
  border-radius: var(--border-radius);
  box-shadow: 0 12px 36px color-mix(in srgb, var(--shadow-color) calc(var(--shadow-intensity) * 2%), transparent);
}

.sidebar {
  background: var(--sidebar-background-color);
  backdrop-filter: blur(var(--blur-intensity));
  border-radius: var(--border-radius);
}

.container__content {
  background: var(--content-background-color);
  backdrop-filter: blur(var(--blur-intensity));
  border-radius: var(--border-radius);
}

.bottom-panel {
  background: var(--bottom-panel-background-color);
  backdrop-filter: blur(var(--blur-intensity));
  border-radius: var(--border-radius);
}

.button {
  background: var(--primary-color);
  color: var(--text-on-button-color);
  border-radius: calc(var(--border-radius) - 4px);
}

.toast {
  background: color-mix(in srgb, var(--primary-color) 18%, #020617 82%);
  border-radius: calc(var(--border-radius) - 2px);
}
${backgroundRule}

${theme.advancedCss}`;
};
