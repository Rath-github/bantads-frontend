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
    { cpf: '111.111.111-00', nome: 'Lucas Dias', salario: 10000 },
    { cpf: '222.222.222-00', nome: 'Allan Neves', salario: 8000 },
    { cpf: '333.333.333-00', nome: 'Henrique Prokopenko', salario: 6000 },
    { cpf: '444.444.444-00', nome: 'Marcos Moreira', salario: 2000 },
    { cpf: '555.555.555-00', nome: 'Caique', salario: 500 },
  ];

  cpfConsultado: string = '';
  clienteFiltrado: DadosCliente | undefined;

  consultarCliente() {
    this.clienteFiltrado = this.clienteGerente.find(cliente => cliente.cpf === this.cpfConsultado);
  }
}
