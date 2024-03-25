import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteSchema } from '../../schema/cliente.schema';
import { z, ZodError } from 'zod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: any) {
    try {
      const clienteValidado = ClienteSchema.parse(cliente);
      return this.http.post(this.apiUrl, clienteValidado);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error('Erro de validação:', error.errors);
        throw error;
      }
      throw error;
    }
  }
}