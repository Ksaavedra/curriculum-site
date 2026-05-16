import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ThemeService } from './theme.service';
import { resetMatchMediaTestState, setPrefersColorSchemeDark } from '../../../test-setup';

describe('ThemeService', () => {
  const storageKey = 'cv-theme-preference';

  beforeEach(async () => {
    resetMatchMediaTestState();
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.removeProperty('color-scheme');

    TestBed.resetTestingModule();

    await TestBed.configureTestingModule({
      providers: [ThemeService],
    }).compileComponents();
  });

  it('sem preferência gravada, segue o esquema do sistema claro', () => {
    setPrefersColorSchemeDark(false);

    const service = TestBed.inject(ThemeService);

    expect(service.preference()).toBe('light');
    expect(service.effectiveTheme()).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('sem preferência gravada, segue o esquema do sistema escuro', () => {
    setPrefersColorSchemeDark(true);

    const service = TestBed.inject(ThemeService);

    expect(service.preference()).toBe('dark');
    expect(service.effectiveTheme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('deve reagir quando o tema do sistema mudar', () => {
    setPrefersColorSchemeDark(false);

    const service = TestBed.inject(ThemeService);

    expect(service.preference()).toBe('light');

    setPrefersColorSchemeDark(true);
    service['applySystemPreference']();

    expect(service.preference()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('deve executar o listener criado em attachSystemPreferenceListener', () => {
    setPrefersColorSchemeDark(false);

    const service = TestBed.inject(ThemeService);

    expect(service.preference()).toBe('light');

    setPrefersColorSchemeDark(true);
    service['systemSchemeListener']?.({} as MediaQueryListEvent);

    expect(service.preference()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('detachSystemPreferenceListener não faz nada quando listener não existe', () => {
    const service = TestBed.inject(ThemeService);

    service['systemSchemeListener'] = null;

    expect(() => service['detachSystemPreferenceListener']()).not.toThrow();
  });

  it('detachSystemPreferenceListener remove listener quando existe', () => {
    const service = TestBed.inject(ThemeService);

    const listener = vi.fn();

    service['systemSchemeListener'] = listener;
    service['detachSystemPreferenceListener']();

    expect(service['systemSchemeListener']).toBeNull();
  });

  it('setPreference grava em localStorage e aplica o tema', () => {
    const service = TestBed.inject(ThemeService);

    service.setPreference('dark');

    expect(localStorage.getItem(storageKey)).toBe('dark');
    expect(service.preference()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('cycle alterna entre claro e escuro', () => {
    const service = TestBed.inject(ThemeService);

    service.setPreference('light');
    service.cycle();

    expect(service.preference()).toBe('dark');

    service.cycle();

    expect(service.preference()).toBe('light');
  });

  it('toggleIcon, buttonLabel e ariaLabel refletem o tema atual', () => {
    const service = TestBed.inject(ThemeService);

    service.setPreference('light');

    expect(service.toggleIcon()).toBe('dark_mode');
    expect(service.buttonLabel()).toBe('Claro');
    expect(service.ariaLabel()).toContain('claro');

    service.setPreference('dark');

    expect(service.toggleIcon()).toBe('light_mode');
    expect(service.buttonLabel()).toBe('Escuro');
    expect(service.ariaLabel()).toContain('escuro');
  });

  it('applySystemPreference usa light quando matchMedia não existir', () => {
    localStorage.setItem(storageKey, 'light');

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });

    const service = TestBed.inject(ThemeService);
    const originalMatchMedia = window.matchMedia;

    try {
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: undefined,
      });

      service['applySystemPreference']();

      expect(service.preference()).toBe('light');
    } finally {
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        value: originalMatchMedia,
      });
    }
  });

  it('applySystemPreference não aplica tema quando não está seguindo o sistema', () => {
    const service = TestBed.inject(ThemeService);

    service.setPreference('light');

    const applySpy = vi.spyOn(service, 'applyEffectiveTheme');

    setPrefersColorSchemeDark(true);

    service['applySystemPreference']();

    expect(service.preference()).toBe('dark');
    expect(applySpy).not.toHaveBeenCalled();
  });

  describe('com preferência light gravada no localStorage', () => {
    beforeEach(async () => {
      resetMatchMediaTestState();
      localStorage.clear();
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.removeProperty('color-scheme');
      localStorage.setItem(storageKey, 'light');

      TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        providers: [ThemeService],
      }).compileComponents();
    });

    it('restaura o tema claro ao iniciar', () => {
      const service = TestBed.inject(ThemeService);

      expect(service.preference()).toBe('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });
  });

  describe('com preferência dark gravada no localStorage', () => {
    beforeEach(async () => {
      resetMatchMediaTestState();
      localStorage.clear();
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.removeProperty('color-scheme');
      localStorage.setItem(storageKey, 'dark');

      TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        providers: [ThemeService],
      }).compileComponents();
    });

    it('restaura o tema escuro ao iniciar', () => {
      const service = TestBed.inject(ThemeService);

      expect(service.preference()).toBe('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
  });

  describe('com valor system no localStorage', () => {
    beforeEach(async () => {
      resetMatchMediaTestState();
      localStorage.clear();
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.removeProperty('color-scheme');
      localStorage.setItem(storageKey, 'system');
      setPrefersColorSchemeDark(true);

      TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        providers: [ThemeService],
      }).compileComponents();
    });

    it('remove a chave e segue o esquema do sistema', () => {
      const service = TestBed.inject(ThemeService);

      expect(localStorage.getItem(storageKey)).toBeNull();
      expect(service.preference()).toBe('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
  });

  describe('em plataforma servidor', () => {
    beforeEach(async () => {
      const fakeDoc = {
        documentElement: {
          setAttribute: () => undefined,
          style: { colorScheme: '' as string },
        },
      } as unknown as Document;

      TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        providers: [
          ThemeService,
          { provide: PLATFORM_ID, useValue: 'server' },
          { provide: DOCUMENT, useValue: fakeDoc },
        ],
      }).compileComponents();
    });

    it('effectiveTheme devolve sempre claro', () => {
      const service = TestBed.inject(ThemeService);

      expect(service.effectiveTheme()).toBe('light');

      service.setPreference('dark');

      expect(service.effectiveTheme()).toBe('light');
    });
  });
});
