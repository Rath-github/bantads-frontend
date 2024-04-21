import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../../service/cliente/cliente.service';
import { LoginService } from '../../service/login/login.service';
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.css']
})
export class ClienteHomeComponent implements OnInit, OnDestroy {
  nome: string = '';
  saldo: number = 0;

  usuarioLogado: string = '';
  showHeader: boolean = true;
  private subscription: Subscription | undefined;

  constructor(private http: HttpClient, private clienteService: ClienteService, private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.isUsuarioLogado()) {
      this.http.get<any>('http://localhost:3000/clientes').subscribe((data) => {
        if (data && data.clientes && data.clientes.length > 0) {
          const loginData = data.clientes.find((cliente: any) => cliente.email && cliente.senha);
          if (loginData) {
            this.loadClientData(loginData);
            this.usuarioLogado = loginData.email; // Update the logged-in user
          } else {
            console.log("Login incorreto");
          }
        } else {
          console.log("Dados de clientes não encontrados");
          // Handle the scenario where client data is not found
          // For example, display an error message or redirect to the login page
        }
      });
    } else {
      console.log("Usuário não está logado");
      // Handle the scenario where the user is not logged in
      // For example, redirect to the login page
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadClientData(loginData: any): void {
    this.nome = loginData.nome; // Update the logged-in user's name
    this.saldo = loginData.saldo; // Update the logged-in user's balance
  }

  private getClientId(loginData: any): string {
    // Lógica para obter o ID do cliente logado a partir dos dados de login
    return loginData.id;
  }
}