import { TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills';

describe('SkillsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
    }).compileComponents();
  });

  it('deve criar a página Habilidades', () => {
    const fixture = TestBed.createComponent(SkillsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve mostrar o cabeçalho e competências do CV', () => {
    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#page-heading')?.textContent?.trim()).toBe('Habilidades');
    expect(el.querySelector('[aria-label="Competências técnicas"]')).toBeTruthy();
  });
});
