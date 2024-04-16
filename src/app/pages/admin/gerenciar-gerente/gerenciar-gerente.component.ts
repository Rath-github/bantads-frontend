import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gerente } from 'src/app/models/gerente/gerente.module'; // Corrected the path by removing an extra slash

@Component({
  selector: 'app-gerenciar-gerente',
  templateUrl: './gerenciar-gerente.component.html',
  styleUrls: ['./gerenciar-gerente.component.css']
})
export class GerenciarGerenteComponent implements OnInit {
  gerentes: Gerente[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Gerente[]>('http://localhost:3000/gerentes').subscribe(data => {
      this.gerentes = data;
    });
  }

  onSubmit() {}
  //dados ficticios para teste
  novoGerente: Gerente | any = { // Corrected the type to match the Gerente interface
    nome : '',
    cpf  : '',
    email : '',
    telefone : 0,
    clientes : [],
  };

  gerenteSelecionado: Gerente | null = null; // Initialized as null and corrected the type to match the Gerente interface

  mostrarNovo : boolean = false;
  mostrarEditar : boolean = false;
  

  adicionarGerente(){
    console.log(this.novoGerente.cpf);
    this.http.post('http://localhost:3000/gerentes', this.novoGerente).subscribe(() => {
      this.gerentes.push(this.novoGerente);
      this.mostrarNovo = false;
      this.novoGerente = { nome: '', cpf: '', email: '', telefone: 0, clientes: [] }; // Reset novoGerente after adding
    });
  }

  remover(cpf : string, nome : string){
    if (confirm(`Deseja realmente remover o/a ${nome} como gerente?`)) {
      this.http.delete(`http://localhost:3000/gerentes/${cpf}`).subscribe(() => {
        this.gerentes = this.gerentes.filter(gerente => gerente.cpf != cpf);
      });
    }
  }

  selecionarEditar(cpf: string){
    const gerenteEncontrado = this.gerentes.find((gerente) => gerente.cpf === cpf);
    this.gerenteSelecionado = gerenteEncontrado ? { ...gerenteEncontrado } : null; // Corrected to ensure a deep copy is made if a gerente is found, otherwise null
    this.mostrarEditar = !!this.gerenteSelecionado; // Show editar if gerenteSelecionado is not null
  }

  editarGerente(){
    if(this.gerenteSelecionado) {
      const index = this.gerentes.findIndex((gerente) => gerente.cpf === this.gerenteSelecionado!.cpf);
      if(index !== -1) {
        this.http.put(`http://localhost:3000/gerentes/${this.gerenteSelecionado!.cpf}`, this.gerenteSelecionado).subscribe(() => {
          this.gerentes[index] = { ...this.gerenteSelecionado! }; // Ensure a deep copy is assigned
          this.mostrarEditar = false;
          this.gerenteSelecionado = null; // Reset gerenteSelecionado after editing
        });
      } else {
        console.error('Gerente não encontrado para edição.');
      }
    } else {
      console.error('Nenhum gerente selecionado para edição.');
    }
  }
}

