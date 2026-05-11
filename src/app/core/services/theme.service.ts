import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

const STORAGE_KEY = 'cv-theme-preference';

export type ThemePreference = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly preference = signal<ThemePreference>('light');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'light' || raw === 'dark') {
      this.preference.set(raw);
    } else if (raw === 'system') {
      this.preference.set('light');
      localStorage.setItem(STORAGE_KEY, 'light');
    }
    this.applyEffectiveTheme();
  }

  effectiveTheme(): ThemePreference {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }
    return this.preference();
  }

  /** Atualiza `data-theme` em `<html>` para os tokens `--cv-*` em `styles.scss`. */
  applyEffectiveTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.document.documentElement.setAttribute('data-theme', this.effectiveTheme());
  }

  setPreference(next: ThemePreference): void {
    this.preference.set(next);
    localStorage.setItem(STORAGE_KEY, next);
    this.applyEffectiveTheme();
  }

  /** Alterna só entre claro e escuro. */
  cycle(): void {
    const next: ThemePreference = this.preference() === 'light' ? 'dark' : 'light';
    this.setPreference(next);
  }

  /** Texto curto no botão: tema actualmente activo. */
  buttonLabel(): string {
    return this.preference() === 'light' ? 'Claro' : 'Escuro';
  }

  /** Rótulo acessível completo. */
  ariaLabel(): string {
    return this.preference() === 'light'
      ? 'Tema claro. Clicar para alternar para tema escuro.'
      : 'Tema escuro. Clicar para alternar para tema claro.';
  }
}
