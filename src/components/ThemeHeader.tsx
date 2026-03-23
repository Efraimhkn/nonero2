import { MoonStar, Sparkles, SunMedium } from 'lucide-react';
import { HydraTheme } from '@/types/theme';

type ThemeHeaderProps = {
  theme: HydraTheme;
  onThemeNameChange: (value: string) => void;
  onNicknameChange: (value: string) => void;
  onModeToggle: () => void;
};

export function ThemeHeader({ theme, onThemeNameChange, onNicknameChange, onModeToggle }: ThemeHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/80 p-5 shadow-soft backdrop-blur dark:bg-slate-900/70 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
          <Sparkles className="h-4 w-4" /> Hydra Theme Studio
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Editor visual profissional para o Hydra Launcher</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Crie temas completos, exporte CSS e veja tudo em tempo real.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Nome do Tema
          <input
            title="Defina o nome que aparecerá no cabeçalho do CSS gerado."
            value={theme.themeName}
            onChange={(event) => onThemeNameChange(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          Seu Nickname
          <input
            title="Seu nome será incluído como autor no comentário do CSS."
            value={theme.nickname}
            onChange={(event) => onNicknameChange(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
        <button
          title="Alterna o modo claro/escuro da interface do editor."
          type="button"
          onClick={onModeToggle}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-200"
        >
          {theme.editorMode === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          {theme.editorMode === 'dark' ? 'Modo claro' : 'Modo escuro'}
        </button>
      </div>
    </header>
  );
}
