/**
 * Segmentos de rota do SPA — única fonte para links internos e para `app.routes.ts`.
 * Ao criar uma página nova: (1) acrescente aqui o segmento; (2) registe em `app.routes.ts`;
 * (3) se entrar no menu, actualize `header-nav-links.ts`; (4) actualize CTAs ou dados em `cv-data.ts`
 * que usem `appPath(...)`. Não altere segmentos publicados sem actualizar links externos ou marcadores.
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
