import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/contact`;

  send(payload: ContactPayload): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>(this.url, payload);
  }
}
