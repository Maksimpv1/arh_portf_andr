# apxi

Сайт архитектурной студии **apxi** (Андрей и Дарья Жибович).

Фронт: **React + Vite**. Макеты лежат в `design/`. Контент пока локальный — WordPress подключается следующим шагом.

## Страницы

- `/` — О нас / контакты (главная)
- `/projects` — список проектов
- `/projects/:slug` — страница проекта

Языки: RU / EN / BY.

## Запуск

```bash
npm install
npm run dev
```

Сборка: `npm run build`.

## WordPress

Админка WP — отдельно. React будет забирать тексты и фото через REST API (`/wp-json/wp/v2/...`).

Чтобы включить, пропиши адрес WP в `.env`:

```
VITE_WP_URL=https://admin.example.com
```

Пока переменная пустая, сайт читает данные из `src/data/content.js`.
