import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../../service/cliente/cliente.service';
import { LoginService } from '../../service/login/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // Adicionar importação do Router
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.css']
})
export class ClienteHomeComponent implements OnInit, OnDestroy {
  nome: string = '';
  saldo: number = 0;

  showHeader: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private loginService: LoginService,
    private router: Router // Injeção do Router no construtor
  ) {}

  ngOnInit(): void {
    if (this.loginService.isUsuarioLogado()) {
      const clienteLogado = this.loginService.getClienteLogado();
      if (clienteLogado) {
        this.nome = clienteLogado.nome;
        this.saldo = clienteLogado.saldo;
      } else {
        console.log("Cliente logado não encontrado. Redirecionando para login.");
        this.router.navigate(['/login']); // Usar o Router para redirecionar
      }
    } else {
      console.log("Usuário não está logado. Redirecionando para login.");
      this.router.navigate(['/login']); // Usar o Router para redirecionar
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
