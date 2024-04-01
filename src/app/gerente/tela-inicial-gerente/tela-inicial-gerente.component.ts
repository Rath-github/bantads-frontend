import { Component } from '@angular/core';

interface DadosCliente {
  cpf: string;
  nome: string;
  salario: number;
}

@Component({
  selector: 'app-tela-inicial-gerente',
  templateUrl: './tela-inicial-gerente.component.html',
  styleUrls: ['./tela-inicial-gerente.component.css']
})
export class TelaInicialGerenteComponent {

  pedidosAutocadastro: DadosCliente[] = [
    { cpf: '111.111.111-00', nome: 'test 1000', salario: 1000 },
    { cpf: '111.111.111-00', nome: 'test 5000', salario: 5000 },
    { cpf: '111.111.111-00', nome: 'test 3000', salario: 3000 },
    { cpf: '111.111.111-00', nome: 'test 4000', salario: 4000 },
    { cpf: '111.111.111-00', nome: 'test 600', salario: 600 },
  ];

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
