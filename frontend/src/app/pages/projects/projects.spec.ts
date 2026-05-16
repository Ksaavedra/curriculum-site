import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import type { ProjectItem } from '../../core/models/cv.types';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('deve criar a página Projetos', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve mostrar o título da página', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#page-heading')?.textContent?.trim()).toBe('Projetos');
  });

  it('isGitHubRepo identifica URLs do GitHub', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const cmp = fixture.componentInstance as unknown as {
      isGitHubRepo: (u: string | undefined) => boolean;
    };
    expect(cmp.isGitHubRepo('https://github.com/foo/bar')).toBe(true);
    expect(cmp.isGitHubRepo('https://www.github.com/foo')).toBe(true);
    expect(cmp.isGitHubRepo('https://foo.github.io/bar')).toBe(true);
    expect(cmp.isGitHubRepo('https://gitlab.com/foo')).toBe(false);
    expect(cmp.isGitHubRepo(undefined)).toBe(false);
    expect(cmp.isGitHubRepo('')).toBe(false);
  });

  it('isInternalRoute identifica rotas internas', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const cmp = fixture.componentInstance as unknown as { isInternalRoute: (u: string) => boolean };
    expect(cmp.isInternalRoute('/contato')).toBe(true);
    expect(cmp.isInternalRoute('//evil.com')).toBe(false);
    expect(cmp.isInternalRoute('https://x.com')).toBe(false);
  });

  it('hasActions reflecte links, demo ou estado', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const cmp = fixture.componentInstance as unknown as { hasActions: (p: ProjectItem) => boolean };
    const base: ProjectItem = {
      name: 'X',
      description: 'd',
      tech: [],
      link: '',
      demoUrl: '',
      status: '',
    };
    expect(cmp.hasActions({ ...base, link: 'https://x.com' })).toBe(true);
    expect(cmp.hasActions({ ...base, demoUrl: '/demo' })).toBe(true);
    expect(cmp.hasActions({ ...base, status: 'WIP' })).toBe(true);
    expect(cmp.hasActions({ ...base })).toBe(false);
  });

  it('isGitHubRepo cai no catch e usa regex', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);

    const cmp = fixture.componentInstance as unknown as {
      isGitHubRepo: (u: string | undefined) => boolean;
    };

    const originalUrl = globalThis.URL;

    globalThis.URL = class {
      constructor() {
        throw new Error('URL inválida');
      }
    } as never;

    expect(cmp.isGitHubRepo('https://github.com/foo/bar')).toBe(true);

    (globalThis as any).URL = originalUrl;
  });
});
