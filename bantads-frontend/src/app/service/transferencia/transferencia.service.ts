import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:4000/clientes'; //AJUSTAR PARA /3000 CASO NECESSÁRIO 

  constructor(private http: HttpClient) { }

  transferir(numeroContaOrigem: string, numeroContaDestino: string, valor: number): Observable<any> {
    const dadosTransferencia = { numeroContaOrigem, numeroContaDestino, valor };
    return this.http.post(`${this.apiUrl}`, dadosTransferencia);
  }
}
