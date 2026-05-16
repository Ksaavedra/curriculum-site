import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { MINIMAL_TEST_ROUTES } from './testing/minimal-test-routes';
import { setMinWidth768Matches } from '../test-setup';

describe('App', () => {
  beforeEach(async () => {
    setMinWidth768Matches(true);
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(MINIMAL_TEST_ROUTES),
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  it('deve criar o componente raiz', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve mostrar a ligação de salto para o conteúdo principal', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const skip = el.querySelector<HTMLAnchorElement>('.cv-skip-link');
    expect(skip?.getAttribute('href')).toBe('#conteudo-principal');
  });

  it('deve mostrar o rodapé com o nome da autora', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Kelly Michele');
  });

  it('deve atualizar mobileDrawerOpen quando drawer abrir/fechar', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component['onMobileDrawerOpened'](true);
    expect(component['mobileDrawerOpen']()).toBe(true);

    component['onMobileDrawerOpened'](false);
    expect(component['mobileDrawerOpen']()).toBe(false);
  });

  it('deve fechar o drawer mobile quando chamar closeMobileDrawer', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    const closeMock = vi.fn();

    component['navDrawer'] = {
      opened: true,
      close: closeMock,
    } as never;

    component['mobileDrawerOpen'].set(true);
    component['closeMobileDrawer']();

    expect(closeMock).toHaveBeenCalled();
    expect(component['mobileDrawerOpen']()).toBe(false);
  });

  it('não deve quebrar ao fechar drawer quando navDrawer não existir', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component['navDrawer'] = undefined as never;

    expect(() => component['closeMobileDrawer']()).not.toThrow();
    expect(component['mobileDrawerOpen']()).toBe(false);
  });

  it('deve alternar drawer mobile quando navDrawer existir', async () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component['navDrawer'] = {
      opened: true,
      toggle: vi.fn().mockResolvedValue(undefined),
    } as never;

    await component['onMobileNavToggle']();

    expect(
      (component['navDrawer'] as { toggle: ReturnType<typeof vi.fn> }).toggle,
    ).toHaveBeenCalled();
    expect(component['mobileDrawerOpen']()).toBe(true);
  });

  it('não deve quebrar ao alternar drawer quando navDrawer não existir', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component['navDrawer'] = undefined as never;

    expect(component['onMobileNavToggle']()).toBeUndefined();
  });

  it('deve fechar drawer mobile ao navegar', async () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);

    fixture.detectChanges();
    await fixture.whenStable();

    const closeMock = vi.fn();

    component['navDrawer'] = {
      opened: true,
      close: closeMock,
    } as never;

    component['mobileDrawerOpen'].set(true);

    await router.navigateByUrl('/sobre');
    await fixture.whenStable();

    expect(closeMock).toHaveBeenCalled();
    expect(component['mobileDrawerOpen']()).toBe(false);
  });

  it('deve apenas setar mobileDrawerOpen false quando drawer estiver fechado', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    const closeMock = vi.fn();

    component['navDrawer'] = {
      opened: false,
      close: closeMock,
    } as never;

    component['mobileDrawerOpen'].set(true);
    component['closeMobileDrawer']();

    expect(closeMock).not.toHaveBeenCalled();
    expect(component['mobileDrawerOpen']()).toBe(false);
  });
});
