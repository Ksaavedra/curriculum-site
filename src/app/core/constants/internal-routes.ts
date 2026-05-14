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

export function appPath(key: RouteSegmentKey): string {
  const seg = ROUTE_SEGMENTS[key];
  return seg === '' ? '/' : `/${seg}`;
}
