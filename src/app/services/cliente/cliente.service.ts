import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteSchema } from '../../schema/cliente.schema';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  // Método para cadastrar um novo cliente
  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  // Método para obter o perfil do cliente
  getPerfil(): Observable<any> {
    return this.http.get(`${this.apiUrl}clientes`);
  }

  // Método para alterar o perfil do cliente
  alterarPerfil(dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}perfil`, dados);
  }

  depositar(numeroConta: string, valor: number): Observable<any> {
    const dadosDeposito = { numeroConta, valor };
    return this.http.post(`${this.apiUrl}/deposito`, dadosDeposito);
  }
}