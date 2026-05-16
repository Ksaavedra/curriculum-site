import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { vi } from 'vitest';
import { of, throwError } from 'rxjs';
import { ContactComponent } from '../../pages/contact/contact';
import { ContactService } from '../../core/services/contact.service';

describe('ContactComponent', () => {
  let sendSpy: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    sendSpy = vi.fn();

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideNoopAnimations(),
        {
          provide: ContactService,
          useValue: {
            send: sendSpy,
          },
        },
      ],
    }).compileComponents();
  });

  it('deve criar o formulário', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('submit com formulário inválido marca os campos como touched', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;
    fixture.detectChanges();
    cmp['submit']();
    expect(cmp['form'].touched).toBe(true);
    expect(sendSpy).not.toHaveBeenCalled();
  });

  it('submit com dados válidos chama o serviço e mostra sucesso', () => {
    sendSpy.mockReturnValue(of({ ok: true }));
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;
    cmp['form'].patchValue({
      name: 'João',
      email: 'joao@exemplo.com',
      message: 'Mensagem com mais de dez caracteres.',
    });
    fixture.detectChanges();
    cmp['submit']();
    expect(sendSpy).toHaveBeenCalledTimes(1);
    expect(cmp['success']()).toBe(true);
    expect(cmp['submitting']()).toBe(false);
  });

  it('submit em erro define errorMsg', () => {
    sendSpy.mockReturnValue(
      throwError(() => ({
        error: { message: 'Servidor indisponível.' },
      })),
    );
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;
    cmp['form'].patchValue({
      name: 'João',
      email: 'joao@exemplo.com',
      message: 'Mensagem com mais de dez caracteres.',
    });
    fixture.detectChanges();
    cmp['submit']();
    expect(cmp['errorMsg']()).toBe('Servidor indisponível.');
    expect(cmp['success']()).toBe(false);
  });

  it('fieldError devolve mensagens de validação quando o campo foi touched', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;
    cmp['form'].controls.name.setValue('');
    cmp['form'].controls.name.markAsTouched();
    expect(cmp['fieldError']('name')).toContain('Preencha');
    cmp['form'].controls.email.setValue('invalid');
    cmp['form'].controls.email.markAsTouched();
    expect(cmp['fieldError']('email')).toContain('e-mail');
    cmp['form'].controls.message.setValue('curta');
    cmp['form'].controls.message.markAsTouched();
    expect(cmp['fieldError']('message')).toContain('10');
  });

  it('startNewMessage repõe o estado do formulário', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;
    cmp['form'].patchValue({ name: 'X', email: 'x@x.com', message: '12345678901' });
    cmp['success'].set(true);
    cmp['errorMsg'].set('err');
    cmp['startNewMessage']();
    expect(cmp['form'].getRawValue()).toEqual({ name: '', email: '', message: '' });
    expect(cmp['success']()).toBe(false);
    expect(cmp['errorMsg']()).toBeNull();
  });

  it('submit não faz nada se success já for true', () => {
    sendSpy.mockReturnValue(of({ ok: true }));
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;
    cmp['form'].patchValue({
      name: 'João',
      email: 'joao@exemplo.com',
      message: 'Mensagem com mais de dez caracteres.',
    });
    cmp['success'].set(true);
    fixture.detectChanges();
    cmp['submit']();
    expect(sendSpy).not.toHaveBeenCalled();
  });

  it('submit em erro sem mensagem usa mensagem padrão', () => {
    sendSpy.mockReturnValue(throwError(() => ({})));

    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;

    cmp['form'].patchValue({
      name: 'João',
      email: 'joao@exemplo.com',
      message: 'Mensagem com mais de dez caracteres.',
    });

    cmp['submit']();

    expect(cmp['errorMsg']()).toBe(
      'Não foi possível enviar a mensagem. Verifique a ligação e tente de novo dentro de instantes.',
    );
    expect(cmp['submitting']()).toBe(false);
  });

  it('fieldError devolve mensagem de maxlength', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;

    const control = cmp['form'].controls.name;

    control.setErrors({
      maxlength: { requiredLength: 120, actualLength: 121 },
    });
    control.markAsTouched();

    expect(cmp['fieldError']('name')).toBe('Este campo aceita no máximo 120 caracteres.');
  });

  it('fieldError devolve null quando não há erro conhecido', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const cmp = fixture.componentInstance;

    const control = cmp['form'].controls.name;

    control.setErrors({
      custom: true,
    });
    control.markAsTouched();

    expect(cmp['fieldError']('name')).toBeNull();
  });
});
