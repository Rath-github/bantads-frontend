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

  constructor(private http: HttpClient, private clienteService: ClienteService, private router: Router) {
    // Restaurar estado do armazenamento local na inicialização
    const cliente = localStorage.getItem('clienteLogado');
    if (cliente) {
      this.clienteLogado = JSON.parse(cliente);
      this.usuarioLogado = true;
    }
  }

  fazerLogin(cliente: Cliente): void {
    this.usuarioLogado = true;
    this.clienteLogado = cliente;
    localStorage.setItem('clienteLogado', JSON.stringify(cliente)); // Salvar no armazenamento local
  }

  fazerLogout(): void {
    this.usuarioLogado = false;
    this.clienteLogado = null;
    localStorage.removeItem('clienteLogado'); // Remover do armazenamento local
  }

  isUsuarioLogado(): boolean {
    return this.usuarioLogado;
  }

  getClienteLogado(): Cliente | null {
    return this.clienteLogado;
  }

  verificaLogin(loginData: any) {
    this.clienteService.carregarClientes().subscribe((clientes: any[]) => {
      const cliente = clientes.find(
        (user: { email: any; senha: any; }) => user.email == loginData.email && user.senha == loginData.password
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