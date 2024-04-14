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
      clientes : [ {
        "numConta": 1,
        "status": "pendente",
        "nome": "João Silva",
        "email": "joao@example.com",
        "cpf": "123.456.789-10",
        "endereco": {
          "logradouro": "Rua das Flores",
          "numero": "123",
          "complemento": "Apto 101",
          "cep": "12345-678",
          "cidade": "São Paulo",
          "estado": "SP"
        },
        "gerente": "Ana Oliveira",
        "telefone": "(11) 99999-9999",
        "salario": 2000,
        "limite": 1000,
        "saldo": 4000,
        "senha": "1234"
      }]
    },
  ];
  
}
