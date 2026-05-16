import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { ContactService, type ContactPayload } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve enviar POST para o endpoint de contacto', () => {
    const payload: ContactPayload = {
      name: 'Ana',
      email: 'ana@exemplo.com',
      message: 'Olá, esta é uma mensagem de teste.',
    };

    let result: { ok: boolean } | undefined;
    service.send(payload).subscribe((res) => {
      result = res;
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/api/contact`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(payload);
    req.flush({ ok: true });

    expect(result).toEqual({ ok: true });
  });
});
