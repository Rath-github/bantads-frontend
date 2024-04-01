import { Component } from '@angular/core';
import { Gerente } from 'src/app/models/gerente.model';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  gerentes : Gerente[] = [
    {
      nome : 'Maria',
      cpf : '111.222.333-44' ,
      email : 'maria@gmail.com',
      telefone : 7812345678,
      clientes : ["11112","12345"]
    },
    {
      nome : 'igor',
      cpf : '222.323.333-67' ,
      email : 'igor@gmail.com',
      telefone : 1671676789,
      clientes : ["22112","33345"]
    }
  ];
  clientes: Cliente [] = [
    {
      nome: "João Silva",
      email: "joao@example.com",
      cpf: "123.456.789-10",
      endereco: {
        tipo: "Rua",
        logradouro: "Rua das Flores",
        numero: "123",
        complemento: "Apto 101",
        cep: "12345-678",
        cidade: "São Paulo",
        estado: "SP"
      },
      gerente : "Ana Oliveira",
      telefone: "(11) 99999-9999",
      salario: 2000.00,
      limite : 1000.00,
      saldo : 4000.00
    }
  ]
}
