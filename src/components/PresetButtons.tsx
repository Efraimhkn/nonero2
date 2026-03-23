import { Wand2 } from 'lucide-react';
import { ThemePreset } from '@/types/theme';

type Props = {
  presets: ThemePreset[];
  onApply: (id: string) => void;
};

export function PresetButtons({ presets, onApply }: Props) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/80 p-5 shadow-soft backdrop-blur dark:bg-slate-900/70">
      <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
        <Wand2 className="h-5 w-5 text-cyan-500" /> Presets prontos
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {presets.map((preset) => (
          <button
            key={preset.id}
            title={preset.description}
            type="button"
            onClick={() => onApply(preset.id)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950"
          >
            <div className="font-semibold text-slate-900 dark:text-white">{preset.label}</div>
            <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{preset.description}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
