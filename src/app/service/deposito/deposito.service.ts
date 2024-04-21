import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {
  private apiUrl = 'http://localhost:3000/clientes'; 

  constructor(private http: HttpClient) { }

  depositar(numeroConta: string, valor: number): Observable<any> {
    const dadosDeposito = { numeroConta, valor };
    return this.http.post(this.apiUrl, dadosDeposito);
  }

}