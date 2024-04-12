import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  consultarExtrato(dataInicio: Date, dataFim: Date): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?dataInicio=${dataInicio}&dataFim=${dataFim}`);
  }
}