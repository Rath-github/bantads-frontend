import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { NgxMaskDirective, NgxMaskPipe  } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent {
  nome!: string;
  email!: string;
  cpf!: string;
  salario!: string;


  constructor(private clienteService: ClienteService) { }

  cadastrar(): void {
    const novoCliente = {
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      salario: this.salario
    };

    this.clienteService.cadastrarCliente(novoCliente)
      .subscribe((response: any) => {
        console.log('Cliente cadastrado com sucesso:', response);
        // Aqui você pode adicionar lógica para lidar com a resposta do servidor, como redirecionar para outra página, exibir uma mensagem de sucesso, etc.
      }, error => {
        console.error('Erro ao cadastrar cliente:', error);
        // Aqui você pode adicionar lógica para lidar com erros, como exibir uma mensagem de erro para o usuário.
      });
  }
}
