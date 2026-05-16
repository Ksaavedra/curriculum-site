import { TestBed } from '@angular/core/testing';
import { EducationComponent } from './education';

describe('EducationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
    }).compileComponents();
  });

  it('deve criar a página Formação', () => {
    const fixture = TestBed.createComponent(EducationComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve mostrar o título e a lista de formação', () => {
    const fixture = TestBed.createComponent(EducationComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#page-heading')?.textContent?.trim()).toBe('Formação');
    expect(el.querySelector('[aria-label="Lista de formação académica"]')).toBeTruthy();
  });
});
