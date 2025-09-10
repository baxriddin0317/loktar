# Рейтинг таргетологов — Nuxt 4 SPA

SPA на Nuxt 4 + TypeScript (strict), Pinia, Tailwind v4.

## Переменные окружения

Создайте файл `.env` и задайте:

```
PUBLIC_API_BASE_URL=https://staging.example.com
```

## Установка

Установите зависимости:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Старт dev-сервера на `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Сборка приложения:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Локальный preview production-сборки:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Деплой (Nginx)

History fallback и кэш:

```
location / {
  try_files $uri /index.html;
}
location /assets/ {
  expires 30d;
  add_header Cache-Control "public, max-age=2592000, immutable";
}
```
