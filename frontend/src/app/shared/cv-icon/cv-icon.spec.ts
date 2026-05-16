import { TestBed } from '@angular/core/testing';
import { CvIconComponent } from './cv-icon';

describe('CvIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvIconComponent],
    }).compileComponents();
  });

  it('deve renderizar o ícone solicitado', () => {
    const fixture = TestBed.createComponent(CvIconComponent);
    fixture.componentRef.setInput('name', 'home');
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.getAttribute('aria-hidden')).toBe('true');
    expect(host.querySelector('svg')).toBeTruthy();
  });
});
