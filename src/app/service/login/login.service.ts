import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../cliente/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente/cliente.module';
import { GerenteService } from '../gerente/gerente.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/clientes';
  private usuarioLogado: boolean = false;
  private clienteLogado: Cliente | null = null;
  private usersLogados: Cliente[] = []; // State to store logged-in users

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private gerenteService: GerenteService,
    private router: Router
  ) {
    const cliente = localStorage.getItem('clienteLogado');
    if (cliente) {
      this.clienteLogado = JSON.parse(cliente);
      this.usuarioLogado = true;
      console.log("Cliente logado carregado do localStorage:", this.clienteLogado);
    } else {
      console.log("Nenhum cliente logado encontrado no localStorage.");
    }
  }
  

  isUsuarioLogado(): boolean {
    return this.usuarioLogado;
  }

  getUsersLogados(): Cliente[] {
    return this.usersLogados;
  }

  getClienteLogado(): Cliente | null {
    return this.clienteLogado;
  }

  verificaLogin(loginData: any) {
    this.clienteService.carregarClientes().subscribe((clientes) => {
      const cliente = clientes.find(
        (user) => user.email === loginData.email && user.senha === loginData.password
      );
  
      if (cliente) {
        this.usuarioLogado = true;
        this.clienteLogado = cliente;
        localStorage.setItem('clienteLogado', JSON.stringify(cliente)); // Salvar no localStorage
        this.router.navigate(['/clienteHome']);
        console.log("Cliente logado com sucesso:", this.clienteLogado);
      } else {
        console.log("Login incorreto");
      }
    });
  }
  


  getUsuarioLogadoData(): any {
    return this.http.get<any>('http://localhost:3000/clientes').pipe(
      map((data) => {
        return data.find((cliente: any) => cliente.logged_in === true);
      })
    );
  }
}