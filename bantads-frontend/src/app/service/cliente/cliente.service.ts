import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }


  cadastrarCliente(novoCliente: any): Observable<any> {
    return this.http.post(`${this.apiUrl}clientes`, novoCliente);
  }
  
  
  getPerfil(): Observable<any> {
    return this.http.get(`${this.apiUrl}clientes`);
  }

 
  alterarPerfil(dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}clientes`, dados);
  }

  
}
