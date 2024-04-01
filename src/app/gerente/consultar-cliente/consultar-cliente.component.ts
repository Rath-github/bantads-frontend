import { Component } from '@angular/core';

interface DadosCliente {
  cpf: string;
  nome: string;
  salario: number;
}

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {
  clienteGerente: DadosCliente[] = [
    { cpf: '11111111111', nome: 'Lucas Dias', salario: 10000 },
    { cpf: '22222222222', nome: 'Allan Neves', salario: 8000 },
    { cpf: '33333333333', nome: 'Henrique Prokopenko', salario: 6000 },
    { cpf: '44444444444', nome: 'Marcos Moreira', salario: 2000 },
    { cpf: '55555555555', nome: 'Caique', salario: 500 },
  ];

  formatarCPF(cpf: string): string {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}


  cpfConsultado: string = '';
  clienteFiltrado: DadosCliente | undefined;

  constructor() { }

  consultarCliente() {
    // Encontra o cliente pelo CPF consultado se n mostra a msg "Cliente não encontrado"
    this.clienteFiltrado = this.clienteGerente.find(cliente => cliente.cpf === this.cpfConsultado);
  }
}
