import { HEADER_NAV_LINKS } from './header-nav-links';
import { appPath } from './internal-routes';

describe('HEADER_NAV_LINKS', () => {
  it('deve listar todas as ligações principais do cabeçalho', () => {
    expect(HEADER_NAV_LINKS.length).toBe(7);
  });

  it('primeira ligação é Início na raiz', () => {
    const first = HEADER_NAV_LINKS[0];
    expect(first.label).toBe('Início');
    expect(first.path).toBe(appPath('home'));
    expect(first.exact).toBe(true);
  });

  it('cada entrada tem ícone e caminho', () => {
    for (const link of HEADER_NAV_LINKS) {
      expect(link.icon).toBeTruthy();
      expect(link.path.startsWith('/')).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
    }
  });
});
