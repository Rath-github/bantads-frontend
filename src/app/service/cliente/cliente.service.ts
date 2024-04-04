import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: any) {
    return this.http.post(this.apiUrl, cliente);
  }
}
