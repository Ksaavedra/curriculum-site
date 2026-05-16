import { ROUTE_SEGMENTS, appPath } from './internal-routes';

describe('internal-routes', () => {
  it('appPath devolve "/" para a home', () => {
    expect(appPath('home')).toBe('/');
  });

  it('appPath devolve caminhos com prefixo para outras rotas', () => {
    expect(appPath('contato')).toBe(`/${ROUTE_SEGMENTS.contato}`);
    expect(appPath('sobre')).toBe(`/${ROUTE_SEGMENTS.sobre}`);
  });
});
