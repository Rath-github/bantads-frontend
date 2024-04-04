import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';

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

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.carregarPerfil();
  }

  carregarPerfil(): void {
    this.clienteService.getPerfil().subscribe((perfil: any) => {
      this.perfil = perfil;
    });
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
