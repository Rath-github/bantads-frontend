import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Gerente } from 'src/app/models/gerente.model';

@Component({
  selector: 'app-gerenciar-gerente',
  templateUrl: './gerenciar-gerente.component.html',
  styleUrls: ['./gerenciar-gerente.component.css']
})
export class GerenciarGerenteComponent {

  //dados ficticios para teste
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
        "senha":"1234"
      }]
    },
  ];

  novoGerente : Gerente = {
    nome : '',
    cpf  : '',
    email : '',
    telefone : 0,
    clientes : [],
};

gerenteSelecionado : Gerente = {
  nome : '',
  cpf  : '',
  email : '',
  telefone : 0,
  clientes : [],
};

mostrarNovo : boolean = false;
mostrarEditar : boolean = false;
  

  adicionarGerente(){
    console.log(this.novoGerente.cpf);
    this.gerentes.push(this.novoGerente);
    this.mostrarNovo = false;

  }

  remover(cpf : string, nome : string){
    if (confirm(`Deseja realmente remover o/a ${nome} como gerente?`)) {
      this.gerentes = this.gerentes.filter(Gerente=> Gerente.cpf != cpf);
      }
  }

  selecionarEditar(cpf: string){
    this.gerenteSelecionado = this.gerentes.find((gerente) => gerente.cpf === cpf) || new Gerente();
    
    this.mostrarEditar = true;
    this.mostrarNovo=false;
    
    this.novoGerente = { ...this.gerenteSelecionado }; // o operador ... (spread) cria uma copia do conteudo da variavel sem que elas compartilhem do mesmo objeto 
  }

  editarGerente(){
    const index = this.gerentes.findIndex((gerente) => gerente.cpf === this.gerenteSelecionado.cpf);
    this.gerenteSelecionado = this.novoGerente ; 
    this.gerentes[index] = this.gerenteSelecionado; 
    this.mostrarEditar = false;
  }
}
