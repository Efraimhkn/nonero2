import { motion } from 'framer-motion';
import { Bell, Download, FolderHeart, Gamepad2, Search, Settings, ShoppingBag } from 'lucide-react';
import { CSSProperties } from 'react';
import { HydraTheme } from '@/types/theme';

type Props = {
  theme: HydraTheme;
  previewVars: Record<string, string>;
};

const games = [
  { name: 'Hades II', tag: 'Roguelike' },
  { name: 'Elden Ring', tag: 'Action RPG' },
  { name: 'Balatro', tag: 'Deckbuilder' },
  { name: 'Cyberpunk 2077', tag: 'Open World' },
  { name: 'Stardew Valley', tag: 'Cozy' },
  { name: 'Helldivers 2', tag: 'Co-op' }
];

export function PreviewLauncher({ theme, previewVars }: Props) {
  const style = previewVars as CSSProperties;
  const bgStyle = theme.background.source && theme.background.target === 'launcher'
    ? { backgroundImage: `url(${theme.background.source})`, backgroundSize: theme.background.size, backgroundPosition: theme.background.position, backgroundRepeat: theme.background.repeat }
    : {};

  const sectionBackground = (target: string) =>
    theme.background.source && theme.background.target === target
      ? { backgroundImage: `url(${theme.background.source})`, backgroundSize: theme.background.size, backgroundPosition: theme.background.position, backgroundRepeat: theme.background.repeat }
      : undefined;

  return (
    <section className="rounded-[32px] border border-white/10 bg-white/80 p-5 shadow-soft backdrop-blur dark:bg-slate-900/70">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Visualização em tempo real</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Replica viva do Hydra com classes e comportamento visual otimizados.</p>
        </div>
        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">Refresh &lt; 50ms</div>
      </div>

      <motion.div layout className="hydra-preview-shell overflow-hidden rounded-[30px] border border-white/10 p-3" style={{ ...style, ...bgStyle, backgroundColor: 'var(--hydra-background)', fontFamily: 'var(--hydra-font)', color: 'var(--hydra-text)' }}>
        <div className="header mb-3 flex items-center justify-between gap-3 p-4" style={sectionBackground('header')}>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--hydra-primary)]/20 text-[var(--hydra-primary)]"><Gamepad2 /></div>
            <div>
              <div className="font-semibold">Hydra Launcher</div>
              <div className="text-xs opacity-70">Tema: {theme.themeName}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-black/10 px-3 py-2 text-sm">
            <Search className="h-4 w-4" /> Buscar jogos...
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[220px_1fr]">
          <aside className="sidebar flex flex-col gap-3 p-4" style={sectionBackground('sidebar')}>
            {[
              ['Biblioteca', FolderHeart],
              ['Loja', ShoppingBag],
              ['Downloads', Download],
              ['Configurações', Settings],
              ['Notificações', Bell]
            ].map(([label, Icon]) => (
              <button key={label} className="button flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold" type="button">
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </aside>

          <div className="space-y-3">
            <main className="container__content p-4" style={sectionBackground('content')}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Destaques do dia</div>
                  <div className="text-sm opacity-70">Coleção curada para validar seu tema.</div>
                </div>
                <div className="toast px-3 py-2 text-xs font-semibold">Tema atualizado ao vivo</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {games.map((game, index) => (
                  <motion.div key={game.name} layout className="game-card overflow-hidden rounded-[var(--hydra-radius)] border border-white/10 bg-black/20" transition={{ duration: 0.15, delay: index * 0.02 }}>
                    <div className="h-28 bg-gradient-to-br from-[var(--hydra-primary)]/70 via-slate-600/40 to-black/20" />
                    <div className="p-4">
                      <div className="font-semibold">{game.name}</div>
                      <div className="text-sm opacity-70">{game.tag}</div>
                      <button className="button mt-4 w-full px-4 py-2 text-sm font-semibold" type="button">Abrir jogo</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </main>

            <div className="bottom-panel flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <div className="text-sm font-semibold">Downloads ativos</div>
                <div className="text-xs opacity-70">3 instalações, 1 update e preview de tema ativo.</div>
              </div>
              <div className="flex gap-2">
                <button className="button px-4 py-2 text-sm font-semibold" type="button">Instalar tema</button>
                <button className="rounded-[calc(var(--hydra-radius)-4px)] border border-white/10 px-4 py-2 text-sm font-semibold" type="button">Compartilhar</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
