import { Component } from '@angular/core';
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

gerenteSelecionado = {
  nome : '',
  cpf  : '',
  email : '',
  telefone : 0,
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
