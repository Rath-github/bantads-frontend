import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router'; // Adicionar importação do Router

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

  constructor(
    private clienteService: ClienteService, 
    private loginService: LoginService,
    private router: Router // Injeção do Router no construtor
  ) { } // Injetar LoginService


  ngOnInit(): void {
    if (this.loginService.isUsuarioLogado()) { // Certifique-se de que esta condição é confiável
      this.carregarPerfil();
    } else {
      console.log("Usuário não está logado. Redirecionando para login.");
      this.router.navigate(['/login']);
    }
  }
  
  
  carregarPerfil(): void {
    const clienteLogado = this.loginService.getClienteLogado();
    if (clienteLogado) {
      this.perfil = clienteLogado; // Obter dados do cliente logado
      console.log('Dados do cliente logado:', this.perfil);
    }
  }
  

  alterarPerfil(): void {
    const novosDados = {
      nome: this.novoNome,
      email: this.novoEmail,
      salario: this.novoSalario
    };

    this.clienteService.alterarPerfil(novosDados).subscribe(() => {
      console.log('Perfil atualizado com sucesso!');
      // Atualizar dados na tela ou fazer outra ação necessária após a alteração do perfil
    }, (error: any) => {
      console.error('Erro ao atualizar perfil:', error);
      // Lidar com o erro conforme necessário
    });
  }
}
