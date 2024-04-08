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
  selector: 'app-tela-inicial-gerente',
  templateUrl: './tela-inicial-gerente.component.html',
  styleUrls: ['./tela-inicial-gerente.component.css']
})
export class TelaInicialGerenteComponent {

  pedidosAutocadastro: DadosCliente[] = [
    { cpf: '11111111111', nome: 'teste 1000', salario: 1000, cidade: 'Curitiba', estado: 'Paraná', saldoConta: 2000 },
    { cpf: '22222222222', nome: 'teste 2000', salario: 2000, cidade: 'Curitiba', estado: 'Paraná', saldoConta: 4000 },
    { cpf: '33333333333', nome: 'teste 3000', salario: 3000, cidade: 'Curitiba', estado: 'Paraná', saldoConta: 6000 },
    { cpf: '44444444444', nome: 'teste 4000', salario: 4000, cidade: 'Montes Claros', estado: 'Minas Gerais', saldoConta: 8000 },
    { cpf: '55555555555', nome: 'teste 5000', salario: 5000, cidade: 'Campo Grande', estado: 'Mato Grosso do Sul', saldoConta: 10000 },
  ];

  formatarCPF(cpf: string): string {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

  Aprovar() {
    alert("Cadastro aprovado!");
    //Adicionar lógica de Aprovação
  }
  Recusar() {
    alert("Cadastro recusado!");
    //Adicionar lógica de Reprovação
  }

  mostrarRecusarCard: boolean = false;

  toggleRecusarCard() {
    this.mostrarRecusarCard = !this.mostrarRecusarCard;
  }
}
