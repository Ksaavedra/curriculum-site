import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
  });

  it('deve criar a página Sobre', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve dividir o resumo em parágrafos', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const cmp = fixture.componentInstance;
    const paras = cmp['summaryParagraphs'] as string[];
    expect(paras.length).toBeGreaterThan(1);
    expect(paras.every((p) => p.length > 0)).toBe(true);
  });

  it('deve renderizar o título da página', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#page-heading')?.textContent?.trim()).toBe('Sobre');
  });
});
