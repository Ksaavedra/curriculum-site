import { TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience';

describe('ExperienceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();
  });

  it('deve criar a página Experiência', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve mostrar o título e a linha do tempo', () => {
    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#page-heading')?.textContent?.trim()).toBe('Experiência');
    expect(el.querySelector('.timeline')).toBeTruthy();
  });
});
