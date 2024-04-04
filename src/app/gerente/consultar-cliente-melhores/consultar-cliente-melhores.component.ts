import { Component } from '@angular/core';

interface DadosCliente {
  cpf: string;
  nome: string;
  salario: number;
  cidade: string;
  estado: string;
  saldoConta: number;
}

@Component({
  selector: 'app-consultar-cliente-melhores',
  templateUrl: './consultar-cliente-melhores.component.html',
  styleUrls: ['./consultar-cliente-melhores.component.css']
})
export class ConsultarClienteMelhoresComponent {

  clientes: DadosCliente[] = [
    { cpf: '11111111111', nome: 'Lucas Dias', salario: 100000, cidade: 'Curitiba', estado: 'Paraná', saldoConta: 10000000 },
    { cpf: '22222222222', nome: 'Allan Neves', salario: 50000, cidade: 'Curitiba', estado: 'Paraná', saldoConta: 800000 },
    { cpf: '33333333333', nome: 'Henrique Prokopenko', salario: 3000, cidade: 'Curitiba', estado: 'Paraná', saldoConta: 6000 },
    { cpf: '44444444444', nome: 'Marcos Moreira Gomes', salario: 4000, cidade: 'Montes Claros', estado: 'Minas Gerais', saldoConta: 2000 },
    { cpf: '55555555555', nome: 'Caique', salario: 500, cidade: 'Campo Grande', estado: 'Mato Grosso do Sul', saldoConta: 7000 },
  ];

  clientesOriginal: DadosCliente[] = [];

  termoPesquisa: string = '';

  constructor() {
    this.clientesOriginal = this.clientes;
    this.ordenarPorSaldo();
  }

  formatarCPF(cpf: string): string {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

  ordenarPorSaldo() {
    this.clientes.sort((a, b) => b.saldoConta - a.saldoConta);
  }

  /*pesquisar() {
    if (!this.termoPesquisa) {
      this.clientes = [...this.clientesOriginal];
      return;
    }

    const termo = this.termoPesquisa.toLowerCase();
    this.clientes = this.clientesOriginal.filter(cliente =>
      cliente.cpf.toLowerCase().includes(termo) ||
      cliente.nome.toLowerCase().includes(termo)
    );
  }*/
}
