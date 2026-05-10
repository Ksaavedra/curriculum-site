import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

const STORAGE_KEY = 'cv-theme-preference';

export type ThemePreference = 'system' | 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly preference = signal<ThemePreference>('system');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'light' || raw === 'dark' || raw === 'system') {
      this.preference.set(raw);
    }
    this.applyEffectiveTheme();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', () => {
      if (this.preference() === 'system') {
        this.applyEffectiveTheme();
      }
    });
  }

  effectiveTheme(): 'light' | 'dark' {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }
    const p = this.preference();
    if (p === 'light') {
      return 'light';
    }
    if (p === 'dark') {
      return 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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

  /** Ciclo: sistema → claro → escuro → sistema. */
  cycle(): void {
    const order: ThemePreference[] = ['system', 'light', 'dark'];
    const cur = this.preference();
    const i = order.indexOf(cur);
    const next = order[(i + 1) % order.length];
    this.setPreference(next);
  }

  /** Texto curto no botão. */
  buttonLabel(): string {
    switch (this.preference()) {
      case 'system':
        return 'Auto';
      case 'light':
        return 'Claro';
      case 'dark':
        return 'Escuro';
    }
  }

  /** Rótulo acessível completo. */
  ariaLabel(): string {
    switch (this.preference()) {
      case 'system':
        return 'Tema do sistema: seguir claro ou escuro do dispositivo. Clicar para fixar claro.';
      case 'light':
        return 'Tema claro. Clicar para tema escuro.';
      case 'dark':
        return 'Tema escuro. Clicar para tema automático.';
    }
  }
}
