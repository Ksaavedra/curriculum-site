import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
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
        this.form.reset();
      },
      error: (err: { error?: { message?: string } }) => {
        this.submitting.set(false);
        this.errorMsg.set(err?.error?.message ?? 'Não foi possível enviar. Tente novamente.');
      },
    });
  }

  protected fieldError(field: 'name' | 'email' | 'message'): string | null {
    const c = this.form.controls[field];
    if (!c.touched && !c.dirty) {
      return null;
    }
    if (c.hasError('required')) {
      return 'Campo obrigatório.';
    }
    if (c.hasError('email')) {
      return 'E-mail inválido.';
    }
    if (c.hasError('minlength')) {
      return `Mínimo de ${c.errors?.['minlength'].requiredLength} caracteres.`;
    }
    if (c.hasError('maxlength')) {
      return `Máximo de ${c.errors?.['maxlength'].requiredLength} caracteres.`;
    }
    return null;
  }
}
