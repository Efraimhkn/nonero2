import { HydraTheme } from '@/types/theme';

const colorFields = [
  ['primary', 'Cor primária'],
  ['background', 'Fundo global'],
  ['header', 'Header'],
  ['sidebar', 'Sidebar'],
  ['content', 'Conteúdo'],
  ['bottom', 'Bottom panel'],
  ['text', 'Texto principal'],
  ['textOnButton', 'Texto do botão']
] as const;

const opacityFields = [
  ['header', 'Opacidade do Header'],
  ['sidebar', 'Opacidade da Sidebar'],
  ['content', 'Opacidade do Conteúdo'],
  ['bottom', 'Opacidade do Bottom panel']
] as const;

type Props = {
  theme: HydraTheme;
  onColorChange: (key: keyof HydraTheme['colors'], value: string) => void;
  onOpacityChange: (key: keyof HydraTheme['opacity'], value: number) => void;
};

export function ColorSection({ theme, onColorChange, onOpacityChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {colorFields.map(([key, label]) => (
          <label key={key} className="rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
            <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100" title={`Controle a variável ${label.toLowerCase()} do Hydra.`}>{label}</div>
            <div className="flex items-center gap-3">
              <input type="color" value={theme.colors[key]} onChange={(event) => onColorChange(key, event.target.value)} className="h-12 w-16 rounded-xl border-0 bg-transparent" />
              <input value={theme.colors[key]} onChange={(event) => onColorChange(key, event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
            </div>
          </label>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {opacityFields.map(([key, label]) => (
          <label key={key} className="rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-100">
              <span title="Ajusta o efeito glass de cada painel.">{label}</span>
              <span>{theme.opacity[key]}%</span>
            </div>
            <input type="range" min={0} max={100} value={theme.opacity[key]} onChange={(event) => onOpacityChange(key, Number(event.target.value))} className="w-full accent-cyan-500" />
          </label>
        ))}
      </div>
    </div>
  );
}
