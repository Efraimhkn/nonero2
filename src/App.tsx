import { Download, Files, RefreshCcw } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { ControlsPanel } from '@/components/ControlsPanel';
import { PresetButtons } from '@/components/PresetButtons';
import { PreviewLauncher } from '@/components/PreviewLauncher';
import { ThemeHeader } from '@/components/ThemeHeader';
import { useThemeGenerator } from '@/hooks/useThemeGenerator';

function App() {
  const { theme, previewVars, generatedCss, patchTheme, patchNested, applyPreset, resetTheme, exportJson, presets } = useThemeGenerator();

  const handleCopyCss = async () => {
    await navigator.clipboard.writeText(generatedCss);
    toast.success('CSS copiado com sucesso.');
  };

  const downloadFile = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={theme.editorMode === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(180deg,_#f8fafc,_#dbeafe_45%,_#f8fafc)] px-4 py-6 text-slate-900 transition dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_22%),linear-gradient(180deg,_#020617,_#0f172a_45%,_#020617)] dark:text-white md:px-8">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
          <ThemeHeader
            theme={theme}
            onThemeNameChange={(value) => patchTheme('themeName', value)}
            onNicknameChange={(value) => patchTheme('nickname', value)}
            onModeToggle={() => patchTheme('editorMode', theme.editorMode === 'dark' ? 'light' : 'dark')}
          />

          <PresetButtons presets={presets} onApply={(id) => { applyPreset(id); toast.success('Preset aplicado instantaneamente.'); }} />

          <div className="grid gap-6 xl:grid-cols-[1.05fr_1fr]">
            <ControlsPanel theme={theme} patchNested={patchNested} onAdvancedCssChange={(value) => patchTheme('advancedCss', value)} />
            <PreviewLauncher theme={theme} previewVars={previewVars} />
          </div>

          <section className="rounded-[32px] border border-white/10 bg-white/80 p-5 shadow-soft backdrop-blur dark:bg-slate-900/70">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Saída do CSS</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">CSS completo com comentário profissional, pronto para colar no Hydra.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={handleCopyCss} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400" type="button"><Files className="h-4 w-4" /> COPIAR CSS</button>
                <button onClick={() => downloadFile('tema.css', generatedCss, 'text/css')} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold transition hover:border-cyan-400 dark:border-slate-700" type="button"><Download className="h-4 w-4" /> Baixar tema.css</button>
                <button onClick={() => downloadFile('hydra-theme.json', exportJson(), 'application/json')} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold transition hover:border-cyan-400 dark:border-slate-700" type="button"><Download className="h-4 w-4" /> Exportar JSON</button>
                <button onClick={() => { resetTheme(); toast('Tema restaurado para o padrão.'); }} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold transition hover:border-amber-400 dark:border-slate-700" type="button"><RefreshCcw className="h-4 w-4" /> Resetar</button>
              </div>
            </div>
            <textarea readOnly value={generatedCss} className="min-h-[360px] w-full rounded-[28px] border border-slate-200 bg-slate-950 p-5 font-mono text-sm text-slate-100 outline-none dark:border-slate-700" />
          </section>
        </div>
      </div>
      <Toaster position="top-right" toastOptions={{ style: { borderRadius: '18px', background: '#0f172a', color: '#f8fafc' } }} />
    </div>
  );
}

export default App;
