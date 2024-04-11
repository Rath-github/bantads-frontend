import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  private apiUrl = 'http://localhost:3000/extrato';

  constructor(private http: HttpClient) { }

  consultarExtrato(dataInicio: Date, dataFim: Date): Observable<any[]> {
    // Realizar solicitação HTTP para o servidor
    return this.http.get<any[]>(`${this.apiUrl}?dataInicio=${dataInicio}&dataFim=${dataFim}`);
  }
}