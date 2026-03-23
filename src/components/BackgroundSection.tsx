import { ChangeEvent } from 'react';
import { Upload } from 'lucide-react';
import { HydraTheme } from '@/types/theme';

type Props = {
  theme: HydraTheme;
  onBackgroundChange: (key: keyof HydraTheme['background'], value: string | boolean) => void;
};

export function BackgroundSection({ theme, onBackgroundChange }: Props) {
  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onBackgroundChange('source', String(reader.result ?? ''));
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <label className="block rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
        <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100" title="Cole uma URL de imagem ou GIF para aplicar no Hydra.">URL do fundo especial</div>
        <input value={theme.background.source} onChange={(event) => onBackgroundChange('source', event.target.value)} placeholder="https://...gif" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
      </label>

      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-cyan-400 px-4 py-4 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-500/10 dark:text-cyan-300">
        <Upload className="h-4 w-4" /> Carregar do computador
        <input type="file" accept="image/*,.gif" onChange={handleUpload} className="hidden" />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Aplicar em qual área" title="Define em qual parte do launcher o fundo será renderizado." value={theme.background.target} options={[
          ['none', 'Nenhum'], ['header', 'Header'], ['sidebar', 'Sidebar'], ['content', 'Content'], ['launcher', 'Todo o launcher']
        ]} onChange={(value) => onBackgroundChange('target', value)} />
        <SelectField label="Background size" title="Controla como a imagem se ajusta ao espaço." value={theme.background.size} options={[
          ['cover', 'Cover'], ['contain', 'Contain'], ['auto', 'Auto']
        ]} onChange={(value) => onBackgroundChange('size', value)} />
        <SelectField label="Posição" title="Escolha a posição principal da imagem." value={theme.background.position} options={[
          ['center', 'Centro'], ['top', 'Topo'], ['bottom', 'Base'], ['left', 'Esquerda'], ['right', 'Direita']
        ]} onChange={(value) => onBackgroundChange('position', value)} />
        <SelectField label="Repetição" title="Define se a imagem/GIF deve repetir." value={theme.background.repeat} options={[
          ['no-repeat', 'Não repetir'], ['repeat', 'Repetir'], ['repeat-x', 'Repetir X'], ['repeat-y', 'Repetir Y']
        ]} onChange={(value) => onBackgroundChange('repeat', value)} />
      </div>

      <label className="flex items-center justify-between rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
        <div>
          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">Manter animação do GIF</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Mantém o comportamento animado quando o fundo é um GIF.</div>
        </div>
        <input type="checkbox" checked={theme.background.preserveAnimation} onChange={(event) => onBackgroundChange('preserveAnimation', event.target.checked)} className="h-5 w-5 accent-cyan-500" />
      </label>
    </div>
  );
}

type SelectFieldProps<T extends string> = {
  label: string;
  title: string;
  value: T;
  options: [T, string][];
  onChange: (value: T) => void;
};

function SelectField<T extends string>({ label, title, value, options, onChange }: SelectFieldProps<T>) {
  return (
    <label className="block rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700">
      <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100" title={title}>{label}</div>
      <select value={value} onChange={(event) => onChange(event.target.value as T)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
        {options.map(([optionValue, optionLabel]) => <option key={optionValue} value={optionValue}>{optionLabel}</option>)}
      </select>
    </label>
  );
}
