/**
 * Segmentos de rota do SPA — única fonte para links internos e para `app.routes.ts`.
 * Ao criar uma página nova, atualize este objeto e as rotas em `app.routes.ts`.
 */
export const ROUTE_SEGMENTS = {
  home: '',
  sobre: 'sobre',
  experiencia: 'experiencia',
  formacao: 'formacao',
  habilidades: 'habilidades',
  projetos: 'projetos',
  contato: 'contato',
} as const;

export type RouteSegmentKey = keyof typeof ROUTE_SEGMENTS;

/** Caminho para `routerLink` (ex.: `/contato`). */
export function appPath(key: RouteSegmentKey): string {
  const seg = ROUTE_SEGMENTS[key];
  return seg === '' ? '/' : `/${seg}`;
}
