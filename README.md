# Hydra Theme Studio — HTML Edition

Esta versão do projeto foi refeita em **HTML, CSS e JavaScript puro**, sem React e sem dependências externas obrigatórias.

## O que existe nesta versão

- Editor visual completo em uma única página HTML
- Preview em tempo real com as classes `.header`, `.sidebar`, `.container__content`, `.bottom-panel`, `.button` e `.toast`
- Presets prontos
- Exportação de CSS e JSON
- Upload de imagem/GIF via `FileReader`
- Persistência automática com `localStorage`
- Interface responsiva com modo claro/escuro

## Como usar

### Abrir diretamente

Basta abrir `index.html` no navegador.

### Rodar com servidor local

```bash
npm install
npm run dev
```

Depois abra `http://localhost:4173`.

## Build estático

```bash
npm run build
npm run preview
```

## Deploy

Como tudo está em um único `index.html`, você pode publicar em qualquer host estático:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

## Arquivos principais

- `index.html`: aplicação inteira
- `package.json`: scripts simples para servir/copiar o HTML
