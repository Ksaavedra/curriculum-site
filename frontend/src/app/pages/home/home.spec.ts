import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import type { HomeSection, HomePrimaryCta, Profile } from '../../core/models/cv.types';
import { CvDataService } from '../../core/services/cv-data.service';
import { ThemeService } from '../../core/services/theme.service';
import {
  resetMatchMediaTestState,
  setPointerCoarse,
  setPrefersReducedMotion,
} from '../../../test-setup';
import { HomeComponent } from './home';

const basePrimaryCtas: [HomePrimaryCta, HomePrimaryCta] = [
  { label: 'A', route: '/', variant: 'primary' },
  { label: 'B', route: '/', variant: 'ghost' },
];

function homeFixture(profile: Partial<Profile>): HomeSection {
  const fullProfile: Profile = {
    name: 'Kelly',
    lastName: 'Michele',
    headline: 'Dev',
    summary: 'Resumo.',
    location: 'BR',
    email: 'x@x.com',
    phone: '0',
    ...profile,
  };
  return {
    profile: fullProfile,
    primaryCtas: basePrimaryCtas,
    highlights: [],
    eyebrow: 'Olá',
    highlightsSectionAriaLabel: 'Destaques',
  };
}

describe('HomeComponent', () => {
  beforeEach(async () => {
    resetMatchMediaTestState();
    setPrefersReducedMotion(false);
    setPointerCoarse(false);
    localStorage.removeItem('cv-theme-preference');
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();
  });

  it('deve criar a página inicial', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve renderizar o herói e dados do CV', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.home')).toBeTruthy();
    expect(el.textContent).toContain('Kelly');
  });

  it('heroDisplayGivenNames devolve os dois primeiros nomes', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as { heroDisplayGivenNames: () => string };
    expect(cmp.heroDisplayGivenNames()).toContain('Kelly');
  });

  it('heroSummaryLead devolve texto ou truncado com reticências', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as { heroSummaryLead: () => string };
    const lead = cmp.heroSummaryLead();
    expect(lead.length).toBeGreaterThan(0);
  });

  it('heroTechIconUrl inclui simpleicons e cor em hex', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechIconUrl: (chip: { simpleIcon: string }) => string;
    };
    const url = cmp.heroTechIconUrl({ simpleIcon: 'angular' } as never);
    expect(url).toContain('cdn.simpleicons.org');
    expect(url).toContain('/angular/');
  });

  it('resumeFallbackRoute aponta para experiência', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as { resumeFallbackRoute: string };
    expect(cmp.resumeFallbackRoute).toBe('/experiencia');
  });

  it('heroFloatMarkClass marca ts e angular como dominantes', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroFloatMarkClass: (chip: { id: string; plane: string; layoutColumn: string }) => string;
    };
    const ts = cmp.heroFloatMarkClass({ id: 'ts', plane: 'near', layoutColumn: 'left' } as never);
    expect(ts).toContain('hero-tech-float__mark--dominant');
    const json = cmp.heroFloatMarkClass({
      id: 'json',
      plane: 'far',
      layoutColumn: 'left',
    } as never);
    expect(json).not.toContain('dominant');
  });

  it('heroTechIconSize varia por chip', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechIconSize: (chip: { id: string; plane: string }) => number;
    };
    expect(cmp.heroTechIconSize({ id: 'ts', plane: 'near' } as never)).toBe(86);
    expect(cmp.heroTechIconSize({ id: 'jest', plane: 'mid' } as never)).toBe(50);
    expect(cmp.heroTechIconSize({ id: 'mysql', plane: 'far' } as never)).toBe(44);
  });

  it('heroTechChipParallax devolve zero quando há redução de movimento', () => {
    setPrefersReducedMotion(true);
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechChipParallax: (chip: { id: string; depth: number }) => string;
    };
    expect(cmp.heroTechChipParallax({ id: 'ts', depth: 1 } as never)).toBe('translate3d(0, 0, 0)');
  });

  it('onHeroPointerMove com pointer coarse mantém transform neutro', () => {
    setPointerCoarse(true);
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      onHeroPointerMove: (e: MouseEvent) => void;
      heroSceneTransform: () => string;
    };
    const target = document.createElement('div');
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => '',
    });
    const ev = new MouseEvent('mousemove', { clientX: 80, clientY: 20 });
    Object.defineProperty(ev, 'currentTarget', { value: target, configurable: true });
    cmp.onHeroPointerMove(ev);
    expect(cmp.heroSceneTransform()).toContain('rotateX(0deg)');
    expect(cmp.heroSceneTransform()).toContain('rotateY(0deg)');
  });

  it('onHeroPointerLeave repõe o spot do herói', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      onHeroPointerMove: (e: MouseEvent) => void;
      onHeroPointerLeave: () => void;
      heroSpotX: () => string;
      heroSpotY: () => string;
    };
    const target = document.createElement('div');
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => '',
    });
    const ev = new MouseEvent('mousemove', { clientX: 90, clientY: 10 });
    Object.defineProperty(ev, 'currentTarget', { value: target, configurable: true });
    cmp.onHeroPointerMove(ev);
    expect(cmp.heroSpotX()).not.toBe('50%');
    cmp.onHeroPointerLeave();
    expect(cmp.heroSpotX()).toBe('50%');
    expect(cmp.heroSpotY()).toBe('42%');
  });

  it('heroParticleIndices lista índices 0–4', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as { heroParticleIndices: readonly number[] };
    expect(cmp.heroParticleIndices).toEqual([0, 1, 2, 3, 4]);
  });

  it('onHeroPointerMove ignora movimento quando prefers-reduced-motion', () => {
    setPrefersReducedMotion(true);
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      onHeroPointerMove: (e: MouseEvent) => void;
      heroSpotX: () => string;
      heroSpotY: () => string;
    };
    const target = document.createElement('div');
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => '',
    });
    const ev = new MouseEvent('mousemove', { clientX: 95, clientY: 95 });
    Object.defineProperty(ev, 'currentTarget', { value: target, configurable: true });
    cmp.onHeroPointerMove(ev);
    expect(cmp.heroSpotX()).toBe('50%');
    expect(cmp.heroSpotY()).toBe('42%');
  });

  it('quando matchMedia.matches é indefinido usa ?? false (reduced motion e pointer coarse)', () => {
    const list = {
      get matches(): boolean {
        return undefined as unknown as boolean;
      },
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(() => true),
    } as MediaQueryList;

    const spy = vi.spyOn(globalThis, 'matchMedia').mockImplementation(() => list);

    try {
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as {
        heroTechChipParallax: (chip: { id: string; depth: number }) => string;
        onHeroPointerMove: (e: MouseEvent) => void;
        heroSceneTransform: () => string;
      };

      expect(cmp.heroTechChipParallax({ id: 'ts', depth: 1 } as never)).not.toBe('translate3d(0, 0, 0)');

      const target = document.createElement('div');
      vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        right: 100,
        bottom: 100,
        x: 0,
        y: 0,
        toJSON: () => '',
      });
      const ev = new MouseEvent('mousemove', { clientX: 100, clientY: 0 });
      Object.defineProperty(ev, 'currentTarget', { value: target, configurable: true });
      cmp.onHeroPointerMove(ev);
      expect(cmp.heroSceneTransform()).not.toContain('rotateX(0deg) rotateY(0deg)');
    } finally {
      spy.mockRestore();
    }
  });

  it('heroTechIconUrl para mysql usa cor distinta em tema claro e escuro', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechIconUrl: (chip: { id: string; simpleIcon: string; plane: string }) => string;
    };
    const mysqlChip = { id: 'mysql', simpleIcon: 'mysql', plane: 'far' } as never;
    const theme = TestBed.inject(ThemeService);
    theme.setPreference('light');
    expect(cmp.heroTechIconUrl(mysqlChip)).toContain('/00758f');
    theme.setPreference('dark');
    expect(cmp.heroTechIconUrl(mysqlChip)).toContain('/e8ddff');
    theme.setPreference('light');
  });

  it('heroTechIconUrl aplica hex por plano (near/mid/far) em claro e escuro', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechIconUrl: (chip: { id: string; simpleIcon: string; plane: string }) => string;
    };
    const theme = TestBed.inject(ThemeService);

    const angularNear = { id: 'angular', simpleIcon: 'angular', plane: 'near' } as never;
    theme.setPreference('light');
    expect(cmp.heroTechIconUrl(angularNear)).toContain('/5a36c4');
    theme.setPreference('dark');
    expect(cmp.heroTechIconUrl(angularNear)).toContain('/e8ddff');

    const cssMid = { id: 'css', simpleIcon: 'css', plane: 'mid' } as never;
    theme.setPreference('light');
    expect(cmp.heroTechIconUrl(cssMid)).toContain('/4a2ca3');
    theme.setPreference('dark');
    expect(cmp.heroTechIconUrl(cssMid)).toContain('/cbb5ff');

    const dockerFar = { id: 'docker', simpleIcon: 'docker', plane: 'far' } as never;
    theme.setPreference('light');
    expect(cmp.heroTechIconUrl(dockerFar)).toContain('/6b4ab8');
    theme.setPreference('dark');
    expect(cmp.heroTechIconUrl(dockerFar)).toContain('/a890e8');

    theme.setPreference('light');
  });

  it('onHeroPointerLeave não repõe valores quando prefers-reduced-motion', () => {
    setPrefersReducedMotion(false);
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      onHeroPointerMove: (e: MouseEvent) => void;
      onHeroPointerLeave: () => void;
      heroSpotX: () => string;
    };
    const target = document.createElement('div');
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => '',
    });
    const ev = new MouseEvent('mousemove', { clientX: 99, clientY: 50 });
    Object.defineProperty(ev, 'currentTarget', { value: target, configurable: true });
    cmp.onHeroPointerMove(ev);
    expect(cmp.heroSpotX()).not.toBe('50%');

    setPrefersReducedMotion(true);
    cmp.onHeroPointerLeave();
    expect(cmp.heroSpotX()).not.toBe('50%');
  });

  it('heroTechIconSize devolve 48 para chip near genérico (fora dos ids especiais)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechIconSize: (chip: { id: string; plane: string }) => number;
    };
    expect(cmp.heroTechIconSize({ id: 'outro', plane: 'near' } as never)).toBe(48);
  });

  it('heroTechIconSize cobre api/ga4, postgresql e plano mid genérico', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      heroTechIconSize: (chip: { id: string; plane: string }) => number;
    };
    expect(cmp.heroTechIconSize({ id: 'api', plane: 'far' } as never)).toBe(38);
    expect(cmp.heroTechIconSize({ id: 'ga4', plane: 'far' } as never)).toBe(38);
    expect(cmp.heroTechIconSize({ id: 'postgresql', plane: 'far' } as never)).toBe(36);
    expect(cmp.heroTechIconSize({ id: 'docker', plane: 'far' } as never)).toBe(36);
    expect(cmp.heroTechIconSize({ id: 'css', plane: 'mid' } as never)).toBe(50);
  });

  it('heroTechChipParallax produz deslocamento após movimento fino', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const cmp = fixture.componentInstance as unknown as {
      onHeroPointerMove: (e: MouseEvent) => void;
      heroTechChipParallax: (chip: { id: string; depth: number }) => string;
    };
    const target = document.createElement('div');
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 200,
      height: 200,
      right: 200,
      bottom: 200,
      x: 0,
      y: 0,
      toJSON: () => '',
    });
    const ev = new MouseEvent('mousemove', { clientX: 200, clientY: 0 });
    Object.defineProperty(ev, 'currentTarget', { value: target, configurable: true });
    cmp.onHeroPointerMove(ev);
    const parallaxTs = cmp.heroTechChipParallax({ id: 'ts', depth: 1.95 } as never);
    expect(parallaxTs).not.toBe('translate3d(0, 0, 0)');
    expect(parallaxTs).toMatch(/^translate3d\([^)]+\)$/);
  });

  describe('com CvDataService mockado', () => {
    async function configureWithHome(section: HomeSection): Promise<void> {
      TestBed.resetTestingModule();
      resetMatchMediaTestState();
      setPrefersReducedMotion(false);
      setPointerCoarse(false);
      await TestBed.configureTestingModule({
        imports: [HomeComponent],
        providers: [
          provideNoopAnimations(),
          { provide: CvDataService, useValue: { home: section } },
        ],
      }).compileComponents();
    }

    it('heroDisplayGivenNames com um só nome devolve esse nome', async () => {
      await configureWithHome(homeFixture({ name: '  Ana  ', summary: 'Qualquer coisa.' }));
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as { heroDisplayGivenNames: () => string };
      expect(cmp.heroDisplayGivenNames()).toBe('Ana');
    });

    it('heroSummaryLead vazio quando summary vazio', async () => {
      await configureWithHome(homeFixture({ summary: '' }));
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as { heroSummaryLead: () => string };
      expect(cmp.heroSummaryLead()).toBe('');
    });

    it('heroSummaryLead com ponto cedo (≤24) devolve o texto completo curto', async () => {
      await configureWithHome(homeFixture({ summary: 'Curta frase aqui.' }));
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as { heroSummaryLead: () => string };
      expect(cmp.heroSummaryLead()).toBe('Curta frase aqui.');
    });

    it('heroSummaryLead corta na primeira frase quando o ponto está entre 25 e 280', async () => {
      const prefix = 'a'.repeat(28);
      const summary = `${prefix}. Resto ignorado.`;
      await configureWithHome(homeFixture({ summary }));
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as { heroSummaryLead: () => string };
      expect(cmp.heroSummaryLead()).toBe(`${prefix}.`);
    });

    it('heroDisplayGivenNames devolve string vazia quando o nome só tem espaços', async () => {
      await configureWithHome(homeFixture({ name: '    ', summary: 'Texto.' }));
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as { heroDisplayGivenNames: () => string };
      expect(cmp.heroDisplayGivenNames()).toBe('');
    });

    it('heroSummaryLead trunca com reticências quando não há ponto útil e texto > 200', async () => {
      const long = 'z'.repeat(220);
      await configureWithHome(homeFixture({ summary: long }));
      const fixture = TestBed.createComponent(HomeComponent);
      const cmp = fixture.componentInstance as unknown as { heroSummaryLead: () => string };
      expect(cmp.heroSummaryLead().endsWith('…')).toBe(true);
      expect(cmp.heroSummaryLead().length).toBeLessThanOrEqual(198);
    });
  });
});
