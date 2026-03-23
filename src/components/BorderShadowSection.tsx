import { HydraTheme } from '@/types/theme';

type Props = {
  theme: HydraTheme;
  onEffectsChange: (key: keyof HydraTheme['effects'], value: string | number) => void;
};

export function BorderShadowSection({ theme, onEffectsChange }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[
        ['borderRadius', 'Border radius global', 0, 40, 1, 'px'],
        ['shadowIntensity', 'Intensidade da sombra', 0, 50, 1, '%'],
        ['blurIntensity', 'Intensidade do blur', 0, 40, 1, 'px']
      ].map(([key, label, min, max, step, suffix]) => (
        <label key={key} className="rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-100">
            <span title={`Modifica ${label.toLowerCase()} do tema.`}>{label}</span>
            <span>{theme.effects[key as keyof HydraTheme['effects']]}{suffix}</span>
          </div>
          <input type="range" min={Number(min)} max={Number(max)} step={Number(step)} value={Number(theme.effects[key as keyof HydraTheme['effects']])} onChange={(event) => onEffectsChange(key as keyof HydraTheme['effects'], Number(event.target.value))} className="w-full accent-cyan-500" />
        </label>
      ))}

      <label className="rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
        <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100" title="Escolha a cor base da sombra para efeitos neon ou profundidade.">Cor da sombra</div>
        <div className="flex items-center gap-3">
          <input type="color" value={theme.effects.shadowColor} onChange={(event) => onEffectsChange('shadowColor', event.target.value)} className="h-12 w-16 rounded-xl border-0 bg-transparent" />
          <input value={theme.effects.shadowColor} onChange={(event) => onEffectsChange('shadowColor', event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
        </div>
      </label>
    </div>
  );
}
