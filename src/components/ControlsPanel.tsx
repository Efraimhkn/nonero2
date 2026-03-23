import * as Tabs from '@radix-ui/react-tabs';
import { Code2, Paintbrush, PanelsTopLeft, Palette, Type } from 'lucide-react';
import { AdvancedCSSEditor } from '@/components/AdvancedCSSEditor';
import { BackgroundSection } from '@/components/BackgroundSection';
import { BorderShadowSection } from '@/components/BorderShadowSection';
import { ColorSection } from '@/components/ColorSection';
import { TypographySection } from '@/components/TypographySection';
import { HydraTheme } from '@/types/theme';

type Props = {
  theme: HydraTheme;
  patchNested: (section: 'colors' | 'opacity' | 'typography' | 'effects' | 'background', key: string, value: string | number | boolean) => void;
  onAdvancedCssChange: (value: string) => void;
};

const tabs = [
  { id: 'colors', label: 'Cores', icon: Palette },
  { id: 'typography', label: 'Tipografia', icon: Type },
  { id: 'effects', label: 'Bordas & Efeitos', icon: Paintbrush },
  { id: 'background', label: 'Fundo Especial', icon: PanelsTopLeft },
  { id: 'css', label: 'CSS Avançado', icon: Code2 }
] as const;

export function ControlsPanel({ theme, patchNested, onAdvancedCssChange }: Props) {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/80 p-5 shadow-soft backdrop-blur dark:bg-slate-900/70">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Controles do tema</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Painel com abas em Radix UI, dicas em português e feedback imediato.</p>
      </div>

      <Tabs.Root defaultValue="colors" className="space-y-4">
        <Tabs.List className="grid gap-2 md:grid-cols-5">
          {tabs.map(({ id, label, icon: Icon }) => (
            <Tabs.Trigger
              key={id}
              value={id}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition data-[state=active]:border-cyan-400 data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-600 dark:border-slate-700 dark:text-slate-200"
            >
              <Icon className="h-4 w-4" /> {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="colors"><ColorSection theme={theme} onColorChange={(key, value) => patchNested('colors', key, value)} onOpacityChange={(key, value) => patchNested('opacity', key, value)} /></Tabs.Content>
        <Tabs.Content value="typography"><TypographySection theme={theme} onTypographyChange={(key, value) => patchNested('typography', key, value)} /></Tabs.Content>
        <Tabs.Content value="effects"><BorderShadowSection theme={theme} onEffectsChange={(key, value) => patchNested('effects', key, value)} /></Tabs.Content>
        <Tabs.Content value="background"><BackgroundSection theme={theme} onBackgroundChange={(key, value) => patchNested('background', key, value)} /></Tabs.Content>
        <Tabs.Content value="css"><AdvancedCSSEditor value={theme.advancedCss} onChange={onAdvancedCssChange} /></Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
