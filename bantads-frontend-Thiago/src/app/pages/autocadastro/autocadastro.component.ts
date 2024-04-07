import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { cpf } from 'cpf-cnpj-validator';

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

  validarCPF(): boolean {
    return cpf.isValid(this.cpf);
  }

  cadastrar(): void {
    if (!this.validarCPF()) {
      console.error('CPF inválido');
    
      return;
    }

    const novoCliente = {
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      salario: this.salario
    };

    this.clienteService.cadastrarCliente(novoCliente)
      .subscribe((response: any) => {
        console.log('Cliente cadastrado com sucesso:', response);
       
      }, (error: any) => {
        console.error('Erro ao cadastrar cliente:', error);
       
      });
  }
}