import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

const STORAGE_KEY = 'cv-theme-preference';

export type ThemePreference = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly preference = signal<ThemePreference>('light');

  private followingSystem = false;

  private systemSchemeListener: ((e: MediaQueryListEvent) => void) | null = null;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'light' || raw === 'dark') {
      this.preference.set(raw);
      this.followingSystem = false;
    } else if (raw === 'system') {
      localStorage.removeItem(STORAGE_KEY);
      this.attachSystemPreferenceListener();
    } else {
      this.attachSystemPreferenceListener();
    }
    this.applyEffectiveTheme();
  }

  effectiveTheme(): ThemePreference {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }
    return this.preference();
  }

  applyEffectiveTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const t = this.effectiveTheme();
    this.document.documentElement.setAttribute('data-theme', t);
    this.document.documentElement.style.colorScheme = t === 'dark' ? 'dark' : 'light';
  }

  setPreference(next: ThemePreference): void {
    this.detachSystemPreferenceListener();
    this.followingSystem = false;
    this.preference.set(next);
    localStorage.setItem(STORAGE_KEY, next);
    this.applyEffectiveTheme();
  }

  cycle(): void {
    const next: ThemePreference = this.preference() === 'light' ? 'dark' : 'light';
    this.setPreference(next);
  }

  toggleIcon(): 'dark_mode' | 'light_mode' {
    return this.preference() === 'light' ? 'dark_mode' : 'light_mode';
  }

  buttonLabel(): string {
    return this.preference() === 'light' ? 'Claro' : 'Escuro';
  }

  ariaLabel(): string {
    return this.preference() === 'light'
      ? 'Tema claro activo. Clicar para mudar para tema escuro.'
      : 'Tema escuro activo. Clicar para mudar para tema claro.';
  }

  private attachSystemPreferenceListener(): void {
    this.followingSystem = true;
    this.applySystemPreference();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemSchemeListener = () => this.applySystemPreference();
    mq.addEventListener('change', this.systemSchemeListener);
  }

  private detachSystemPreferenceListener(): void {
    if (!this.systemSchemeListener) {
      return;
    }
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.systemSchemeListener);
    this.systemSchemeListener = null;
  }

  private applySystemPreference(): void {
    const dark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
    this.preference.set(dark ? 'dark' : 'light');
    if (this.followingSystem) {
      this.applyEffectiveTheme();
    }
  }
}
