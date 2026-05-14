import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactApi = inject(ContactService);

  protected readonly submitting = signal(false);
  protected readonly success = signal(false);
  protected readonly errorMsg = signal<string | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(4000)]],
  });

  protected submit(): void {
    if (this.success()) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.errorMsg.set(null);
    this.success.set(false);

    this.contactApi.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitting.set(false);
        this.success.set(true);
      },
      error: (err: { error?: { message?: string } }) => {
        this.submitting.set(false);
        this.errorMsg.set(
          err?.error?.message ??
            'Não foi possível enviar a mensagem. Verifique a ligação e tente de novo dentro de instantes.',
        );
      },
    });
  }

  protected fieldError(field: 'name' | 'email' | 'message'): string | null {
    const c = this.form.controls[field];
    if (!c.touched && !c.dirty) {
      return null;
    }
    if (c.hasError('required')) {
      return 'Preencha este campo para continuar.';
    }
    if (c.hasError('email')) {
      return 'Indique um e-mail válido (ex.: nome@exemplo.com).';
    }
    if (c.hasError('minlength')) {
      const n = c.errors?.['minlength'].requiredLength;
      return `A mensagem precisa de pelo menos ${n} caracteres.`;
    }
    if (c.hasError('maxlength')) {
      const n = c.errors?.['maxlength'].requiredLength;
      return `Este campo aceita no máximo ${n} caracteres.`;
    }
    return null;
  }

  protected startNewMessage(): void {
    this.errorMsg.set(null);
    this.form.reset({ name: '', email: '', message: '' }, { emitEvent: false });
    this.form.enable({ emitEvent: false });
    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.success.set(false);
  }
}
