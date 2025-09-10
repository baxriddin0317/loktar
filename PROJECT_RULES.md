# Правила проекта

- Все сетевые вызовы — только через `app/composables/useApi.ts` → `app/services/api.ts`.
- Страницы/компоненты не вызывают `fetch` напрямую.
- Типы DTO — в `app/services/dto.ts`, схемы — в `app/services/schemas.ts` (zod).
- Состояние — Pinia: `rating.ts`, `session.ts`.
- Фильтры списка синхронизируются с `query` и применяются с debounce.
- Infinite scroll — через `IntersectionObserver`.
- Контакты в профиле запрашиваются только при `session.authenticated === true`.

## Соответствие страниц ↔ сервисы ↔ эндпоинты

| Страница | Сервис | Эндпоинт |
|---|---|---|
| `/rating` | `getTargetologists(params)` | `GET /api-rating/v1/targetologists` |
| `/rating/@:alias` | `resolveAlias(alias)` | `GET /api-rating/v1/aliases/resolve/:alias` |
| `/rating/t/:id` | `getTargetologistProfile`, `getTargetologistPhoto`, `getTargetologistContacts` | `GET .../targetologists/:id`, `GET .../targetologists/:id/photo`, `GET .../targetologists/:id/contacts` |
| `/rating/a/:id` | `getAgencyProfile`, `getAgencyLogo`, `getAgencyContacts` | `GET .../agencies/:id`, `GET .../agencies/:id/logo`, `GET .../agencies/:id/contacts` |
| `layout/app` | `getSession` | `GET /api-rating/v1/auth/session` |
| `filters` | `getNiches` | `GET /api-rating/v1/niches` |

