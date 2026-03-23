import { hydraFonts } from '@/lib/hydraClasses';
import { HydraTheme } from '@/types/theme';

type Props = {
  theme: HydraTheme;
  onTypographyChange: (key: keyof HydraTheme['typography'], value: string | number) => void;
};

export function TypographySection({ theme, onTypographyChange }: Props) {
  return (
    <div className="space-y-5">
      <label className="block rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
        <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100" title="Escolha a fonte base aplicada ao launcher inteiro.">Família tipográfica</div>
        <select value={theme.typography.fontFamily} onChange={(event) => onTypographyChange('fontFamily', event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
          {hydraFonts.map((font) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
        <p className="mt-3 rounded-xl bg-slate-100 p-3 text-base dark:bg-slate-800" style={{ fontFamily: theme.typography.fontFamily }}>
          Preview da fonte: Hydra Launcher Theme Studio
        </p>
      </label>

      {[
        ['fontSize', 'Tamanho base', 12, 22, 1, 'px'],
        ['fontWeight', 'Peso da fonte', 300, 800, 100, ''],
        ['lineHeight', 'Line height', 1, 2, 0.05, '']
      ].map(([key, label, min, max, step, suffix]) => (
        <label key={key} className="block rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-100">
            <span title={`Ajusta ${label.toLowerCase()} do texto.`}>{label}</span>
            <span>{theme.typography[key as keyof HydraTheme['typography']]}{suffix}</span>
          </div>
          <input
            type="range"
            min={Number(min)}
            max={Number(max)}
            step={Number(step)}
            value={Number(theme.typography[key as keyof HydraTheme['typography']])}
            onChange={(event) => onTypographyChange(key as keyof HydraTheme['typography'], key === 'lineHeight' ? Number(event.target.value) : Number(event.target.value))}
            className="w-full accent-cyan-500"
          />
        </label>
      ))}
    </div>
  );
}
