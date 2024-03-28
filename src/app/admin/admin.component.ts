import { Component } from '@angular/core';

interface Gerente {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  contas: Conta[];
}

interface Conta {
  cliente: string;
  saldo: number;
}

interface Cliente {
  nome: string;
  cpf: string;
  limite: number;
  gerente: string;
  saldo: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  gerentes: Gerente[] = [

  ];

  clientes: Cliente[] = [

  ];
}
