import { Component } from '@angular/core';
import { Gerente } from 'src/app/models/gerente.model';

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
}
