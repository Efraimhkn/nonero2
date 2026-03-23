# Hydra Theme Studio

Hydra Theme Studio é um editor visual profissional para criar temas do Hydra Launcher com preview em tempo real, presets, exportação de CSS/JSON e edição avançada de CSS.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3.4+
- Radix UI + Tailwind para componentes estilo shadcn/ui
- Lucide React
- CodeMirror 6
- Zustand + localStorage
- react-hot-toast

## Recursos

- Preview fiel do launcher com classes `.header`, `.sidebar`, `.container__content`, `.bottom-panel`, `.button` e `.toast`
- 5 abas de edição: cores, tipografia, bordas/efeitos, fundo especial e CSS avançado
- 10 presets instantâneos
- Geração de CSS pronta para o Hydra Launcher
- Upload de imagem/GIF por URL ou computador
- Auto-save no localStorage
- Exportação de CSS e JSON
- Interface clara, responsiva e com tooltips em português

## Como usar

1. Preencha o nome do tema e seu nickname no topo.
2. Ajuste as variáveis nas abas laterais.
3. Veja o preview sendo atualizado em tempo real.
4. Copie ou baixe o CSS final.
5. Exporte JSON para backup quando quiser.

## Instalação

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

1. Gere o build:
   ```bash
   npm run build
   ```
2. Publique a pasta `dist/` em um branch `gh-pages` usando `gh-pages` ou GitHub Actions.
3. Como o `base` do Vite está configurado como `./`, o preview funciona em subpastas estáticas.

### Exemplo com GitHub Actions

- Crie um workflow que rode `npm ci`, `npm run build` e publique `dist/` com `actions/deploy-pages`.
- Nas configurações do repositório, ative **Pages** usando **GitHub Actions**.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Faça o deploy.

## Estrutura

```text
src/
├── components/
├── hooks/
├── lib/
├── store/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

## Exportação Hydra

O CSS gerado inclui cabeçalho com data, autor, nome do tema e link oficial da documentação do Hydra:

https://docs.hydralauncher.gg/themes.html
