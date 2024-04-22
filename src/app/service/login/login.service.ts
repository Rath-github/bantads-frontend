import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../cliente/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente/cliente.module';
import { GerenteService } from '../gerente/gerente.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioLogado: boolean = false;
  private clienteLogado: Cliente | null = null;

  constructor(private http: HttpClient, private clienteService: ClienteService, private gerenteService: GerenteService, private router: Router) { }

  fazerLogin(cliente: Cliente) {
    this.usuarioLogado = true;
    this.clienteLogado = cliente;
  }

  fazerLogout() {
    this.usuarioLogado = false;
  }

  isUsuarioLogado(): boolean {
    return this.usuarioLogado;
  }

  getClienteLogado(): Cliente | null {
    return this.clienteLogado;
  }

  verificaLogin(loginData: any) {
    this.clienteService.carregarClientes().subscribe((clientes) => {
      const cliente = clientes.find(
        (user) => user.email == loginData.email && user.senha == loginData.password
      );

      if (cliente) {
        this.usuarioLogado = true;
        this.clienteLogado = cliente; // Configurar cliente logado
        this.router.navigate(['/clienteHome']);
      } else {
        // Se não encontrar um cliente, verificar gerentes ou exibir erro
        console.log("Login incorreto");
      }
    });
}

}