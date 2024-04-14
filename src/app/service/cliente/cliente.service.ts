import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Método para cadastrar um novo cliente
  cadastrarCliente(novoCliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}clientes`, novoCliente);
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
    return this.http.post(`${this.apiUrl}deposito`, dadosDeposito);
  }

  carregarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}clientes`);
  }

  verificarContaExistente(cpf: string): Observable<boolean> {
    return this.carregarClientes().pipe(
      map(clientes => {
        return clientes.some(cliente => cliente.cpf === cpf);
      })
    );
  }

  novoNumeroConta(): Observable<number> {
    return this.carregarClientes().pipe(
      map(clientes => {
        let numeroConta: number = 0;
        for (const cliente of clientes) {
          if (numeroConta < cliente.numConta) {
            numeroConta = cliente.numConta;
          }
        }
        return numeroConta + 1;
      })
    );
  }
}
