# КТ 3. Роутинг и навигация

Дисциплина 3291.РВП.F «Разработка веб-приложений (React)», тема 3.3.

Приложение TaskBoard (React 18 + TypeScript + Vite) с клиентской маршрутизацией на `react-router-dom` v6.

Сайт: https://vgiddd.github.io/kt3-routing/

## Маршруты

| Путь | Страница |
|---|---|
| `/` | Главная |
| `/tasks` | Список задач |
| `/tasks/:id` | Одна задача (динамический маршрут, `useParams<{ id: string }>()`) |
| `/login` | Вход |
| `/profile` | Профиль, защищён `PrivateRoute` |
| `*` | Страница 404 |

## Как выполнены требования

- `BrowserRouter` подключён в `src/main.tsx`, маршруты описаны в `src/App.tsx`.
- Динамический маршрут `/tasks/:id`: параметр читается через типизированный `useParams` в `src/pages.tsx`.
- `PrivateRoute` (`src/auth.tsx`): без входа делает `<Navigate to="/login" state={{ from: location }} />`.
- Страница входа читает `location.state.from` через `useLocation` и после входа возвращает пользователя на исходную страницу.
- Вся навигация сделана через `NavLink` (меню) и `Link`, обычный `<a>` не используется.
- Страница 404 на `path="*"`.

Вход учебный: достаточно ввести любое имя.

## Запуск

```bash
npm install
npm run dev
```
