import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

const STORAGE_KEY = 'cv-theme-preference';

export type ThemePreference = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** Preferência efectiva: claro ou escuro (persistida em `localStorage` após a primeira escolha). */
  readonly preference = signal<ThemePreference>('light');

  /** `true` se o utilizador ainda não gravou escolha — segue `prefers-color-scheme` até alternar. */
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

  /** Actualiza `data-theme` em `<html>` para os tokens `--cv-*` e o tema Material em `styles.scss`. */
  applyEffectiveTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const t = this.effectiveTheme();
    this.document.documentElement.setAttribute('data-theme', t);
    /* Inputs nativos e scrollbars alinhados ao tema activo. */
    this.document.documentElement.style.colorScheme = t === 'dark' ? 'dark' : 'light';
  }

  setPreference(next: ThemePreference): void {
    this.detachSystemPreferenceListener();
    this.followingSystem = false;
    this.preference.set(next);
    localStorage.setItem(STORAGE_KEY, next);
    this.applyEffectiveTheme();
  }

  /** Alterna entre claro e escuro (grava a escolha em `localStorage`). */
  cycle(): void {
    const next: ThemePreference = this.preference() === 'light' ? 'dark' : 'light';
    this.setPreference(next);
  }

  /** Ícone Material: mostra o modo para o qual o clique alterna (lua → escuro, sol → claro). */
  toggleIcon(): 'dark_mode' | 'light_mode' {
    return this.preference() === 'light' ? 'dark_mode' : 'light_mode';
  }

  /** Texto curto no botão (modo actual). */
  buttonLabel(): string {
    return this.preference() === 'light' ? 'Claro' : 'Escuro';
  }

  /** Rótulo acessível: indica o modo actual e o que acontece ao clicar. */
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
