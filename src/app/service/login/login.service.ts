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
  private apiUrl = 'http://localhost:3000/clientes';
  private usuarioLogado: boolean = false;


  constructor(private http: HttpClient, private clienteService : ClienteService,private gerenteService : GerenteService, private router: Router) { }

  fazerLogin() {
    this.usuarioLogado = true;
  }

  fazerLogout() {
    this.usuarioLogado = false;
  }

  isUsuarioLogado(): boolean {
    return this.usuarioLogado;
  }

  verificaLogin(loginData: any) {
    this.http.get<any>('http://localhost:3000/clientes').subscribe((data) => {});
   
    let usuarioEncontradoCliente = false;
    let usuarioEncontradoGerente = false;
  
    this.clienteService.carregarClientes().subscribe((clientes) => {
      const cliente = [...clientes];
      usuarioEncontradoCliente = cliente.some(
        (user) => user.email == loginData.email && user.senha == loginData.password
      );
  
      console.log(loginData.password);
      console.log(loginData.email);

      if (usuarioEncontradoCliente) {
        this.router.navigate(['/clienteHome']);
      } else {
        this.gerenteService.carregarGerentes().subscribe((gerentes) => {
          const gerente = [...gerentes];
          usuarioEncontradoGerente = gerente.some(
            (user) => user.email === loginData.email && user.senha === loginData.password
          );
  
          if (usuarioEncontradoGerente) {
            this.router.navigate(['/gerente']);
          } else {
            console.log("Login incorreto");
          }
        });
      }
      
    });
  }
}