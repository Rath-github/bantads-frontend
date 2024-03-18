import { Component } from '@angular/core';
import { Gerente } from 'src/app/models/gerente.model';

@Component({
  selector: 'app-gerenciar-gerente',
  templateUrl: './gerenciar-gerente.component.html',
  styleUrls: ['./gerenciar-gerente.component.css']
})
export class GerenciarGerenteComponent {

  //dados ficticios para teste
  gerente : Gerente[] = [
    {
      nome : 'Maria',
      cpf : '111.222.333-44' ,
      email : 'maria@gmail.com',
      telefone : 7812345678,
    },
    {
      nome : 'igor',
      cpf : '222.323.333-67' ,
      email : 'igor@gmail.com',
      telefone : 1671676789,
    }
  ];

  novoGerente = {
    nome : '',
    cpf  : '',
    email : '',
    telefone : 0,
};
  

  AdicionarGerente(){

    
  }

 

}
