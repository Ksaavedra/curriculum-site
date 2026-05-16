import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { HEADER_NAV_LINKS } from '../../core/constants/header-nav-links';
import { ThemeService } from '../../core/services/theme.service';
import { MINIMAL_TEST_ROUTES } from '../../testing/minimal-test-routes';
import { HeaderComponent } from './header';
import { setMinWidth768Matches } from '../../../test-setup';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    setMinWidth768Matches(true);
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(MINIMAL_TEST_ROUTES), provideNoopAnimations()],
    }).compileComponents();
  });

  it('deve criar o cabeçalho', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('em viewport largo mostra a navegação de secretária', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.header-navbar')).toBeTruthy();
  });

  it('em viewport estreito mostra a toolbar móvel', async () => {
    setMinWidth768Matches(false);
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(MINIMAL_TEST_ROUTES), provideNoopAnimations()],
    }).compileComponents();
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.header-mobile-toolbar')).toBeTruthy();
  });

  it('onToggleMobileMenu emite toggleMobileNav', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const cmp = fixture.componentInstance;
    let emitted = false;
    cmp.toggleMobileNav.subscribe(() => {
      emitted = true;
    });
    cmp.onToggleMobileMenu();
    expect(emitted).toBe(true);
  });

  it('links expõe a mesma lista que HEADER_NAV_LINKS', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance['links']).toBe(HEADER_NAV_LINKS);
  });

  it('botão de tema chama cycle no ThemeService', () => {
    const theme = TestBed.inject(ThemeService);
    const cycleSpy = vi.spyOn(theme, 'cycle').mockImplementation(() => {});
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.theme-toggle-btn') as HTMLButtonElement;
    expect(btn).toBeTruthy();
    btn?.click();
    expect(cycleSpy).toHaveBeenCalled();
    cycleSpy.mockRestore();
  });

  it('deve atualizar isMdUp quando o matchMedia mudar', () => {
    setMinWidth768Matches(true);

    const fixture = TestBed.createComponent(HeaderComponent);
    const cmp = fixture.componentInstance;

    fixture.detectChanges();

    expect(cmp['isMdUp']()).toBe(true);

    setMinWidth768Matches(false);

    cmp['mqMd']?.dispatchEvent(new Event('change'));

    expect(cmp['isMdUp']()).toBe(false);
  });

  it('deve iniciar como true quando matchMedia não existir', async () => {
    const originalMatchMedia = window.matchMedia;

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: undefined,
    });

    TestBed.resetTestingModule();

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter(MINIMAL_TEST_ROUTES),
        provideNoopAnimations(),
        {
          provide: ThemeService,
          useValue: {
            cycle: vi.fn(),
            toggleIcon: () => 'dark_mode',
            buttonLabel: () => 'Claro',
            ariaLabel: () => 'Tema claro',
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(HeaderComponent);

    expect(fixture.componentInstance['isMdUp']()).toBe(true);
    expect(fixture.componentInstance['mqMd']).toBeNull();

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: originalMatchMedia,
    });
  });

  it('deve usar true quando mqMd.matches for undefined', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const cmp = fixture.componentInstance;

    (cmp as any)['mqMd'] = {
      matches: undefined,
      addEventListener: (_: string, listener: () => void) => {
        listener();
      },
    } as never;

    cmp.ngOnInit();

    expect(cmp['isMdUp']()).toBe(true);
  });
});
