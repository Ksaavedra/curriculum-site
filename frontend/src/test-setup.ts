import { vi } from 'vitest';

let prefersDark = false;
let minWidth768Matches = true;
let prefersReducedMotion = false;
let pointerCoarse = false;

export function resetMatchMediaTestState(): void {
  prefersDark = false;
  minWidth768Matches = true;
  prefersReducedMotion = false;
  pointerCoarse = false;
}

export function setPrefersColorSchemeDark(value: boolean): void {
  prefersDark = value;
}

export function setMinWidth768Matches(value: boolean): void {
  minWidth768Matches = value;
}

export function setPrefersReducedMotion(value: boolean): void {
  prefersReducedMotion = value;
}

export function setPointerCoarse(value: boolean): void {
  pointerCoarse = value;
}

type MediaListener = (e: MediaQueryListEvent) => void;

function createMediaQueryList(query: string) {
  const changeListeners: MediaListener[] = [];

  const mql = {
    get matches(): boolean {
      if (query === '(prefers-color-scheme: dark)') {
        return prefersDark;
      }
      if (query === '(min-width: 768px)') {
        return minWidth768Matches;
      }
      if (query === '(prefers-reduced-motion: reduce)') {
        return prefersReducedMotion;
      }
      if (query === '(pointer: coarse)') {
        return pointerCoarse;
      }
      return false;
    },
    media: query,
    onchange: null as ((e: MediaQueryListEvent) => void) | null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn((type: string, fn: EventListener) => {
      if (type === 'change') {
        changeListeners.push(fn as MediaListener);
      }
    }),
    removeEventListener: vi.fn((type: string, fn: EventListener) => {
      if (type === 'change') {
        const i = changeListeners.indexOf(fn as MediaListener);
        if (i !== -1) {
          changeListeners.splice(i, 1);
        }
      }
    }),
    dispatchEvent: vi.fn((event: Event) => {
      if (event.type === 'change') {
        for (const fn of changeListeners) {
          fn(event as MediaQueryListEvent);
        }
      }
      return true;
    }),
  };

  return mql;
}

const mediaQueryCache = new Map<string, ReturnType<typeof createMediaQueryList>>();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: vi.fn((query: string) => {
    let mql = mediaQueryCache.get(query);
    if (!mql) {
      mql = createMediaQueryList(query);
      mediaQueryCache.set(query, mql);
    }
    return mql;
  }),
});
