import { Component } from '@angular/core';

interface PedidoAutocadastro {
  cpf: string;
  nome: string;
  salario: number;
}

interface AprovacaoReprovacao {
  cpf: string;
  aprovado: boolean;
  motivo?: string;
  dataHora: Date;
}

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent {
  pedidosAutocadastro: PedidoAutocadastro[] = [
    { cpf: '123.456.789-01', nome: 'João da Silva', salario: 5000 },
    // Adicione outros pedidos de autocadastro conforme necessário
  ];

  aprovacoesReprovacoes: AprovacaoReprovacao[] = [];

  // Métodos para aprovar/reprovar clientes
  aprovarCliente(cpf: string): void {
    // Lógica para aprovar cliente
  }

  reprovarCliente(cpf: string, motivo: string): void {
    // Lógica para reprovar cliente
  }
}
