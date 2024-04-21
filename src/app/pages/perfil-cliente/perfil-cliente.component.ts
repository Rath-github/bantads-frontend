import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { LoginService } from '../../service/login/login.service'; // Importar LoginService
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  perfil: any;
  novoNome?: string;
  novoEmail?: string;
  novoSalario?: number;

  constructor(private clienteService: ClienteService, private loginService: LoginService, private router: Router) { } // Injetar LoginService

  ngOnInit(): void {
    const clienteLogado = this.loginService.getClienteLogado();
    if (clienteLogado && clienteLogado.nome) {
      this.carregarPerfil();
    } else {
      console.log("Cliente logado não encontrado ou inválido. Redirecionando para login.");
      this.router.navigate(['/login']);
    }
  }
  
  

  carregarPerfil(): void {
    const clienteLogado = this.loginService.getClienteLogado();
    if (clienteLogado) {
      this.perfil = clienteLogado;
      if (this.perfil.nome) {
        console.log('Dados do cliente logado:', this.perfil.nome);
      } else {
        console.log('Nome do cliente logado não disponível.');
      }
    } else {
      console.log("Erro ao carregar perfil. Cliente logado não encontrado.");
      this.router.navigate(['/login']); // Redireciona para login se o perfil não puder ser carregado
    }
  }
  

  alterarPerfil(): void {
    if (!this.perfil || !this.perfil.id) {
      console.error('ID do cliente não encontrado.');
      return;
    }
  
    const novosDados = {
      nome: this.novoNome,
      email: this.novoEmail,
      salario: this.novoSalario
    };
  
    this.clienteService.alterarPerfil(this.perfil.id, novosDados).subscribe(() => {
      console.log('Perfil atualizado com sucesso!');
      // Atualize os dados locais
      this.perfil.nome = this.novoNome;
      this.perfil.email = this.novoEmail;
      this.perfil.salario = this.novoSalario;
    }, (error: any) => {
      console.error('Erro ao atualizar perfil:', error);
      // Trate erros como necessário
    });
  }
  
  
}
