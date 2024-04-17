import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Endereco {
  tipo: string;
  logradouro: string;
  numero: string;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string;
}

interface DadosConta {
  numero: string;
  dataCriacao: string;
  limite: number;
  gerente: {
    nome: string;
    cpf: string;
  };
}

interface DadosCliente {
  cpf: string;
  nome: string;
  salario: number;
  cidade: string;
  estado: string;
  saldoConta: number;
  endereco: Endereco;
  conta: DadosConta;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-consultar-cliente-todos',
  templateUrl: './consultar-cliente-todos.component.html',
  styleUrls: ['./consultar-cliente-todos.component.css']
})
export class ConsultarClienteTodosComponent implements OnInit {
  clientes: DadosCliente[] = [];
  clientesOriginal: DadosCliente[] = [];
  termoPesquisa: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.http.get<DadosCliente[]>(`http://localhost:3000/clientes`)
      .subscribe(clientes => {
        this.clientes = clientes;
        this.clientesOriginal = clientes;
      });
  }

  pesquisar() {
    if (!this.termoPesquisa) {
      this.clientes = [...this.clientesOriginal];
      return;
    }

    const termo = this.termoPesquisa.toLowerCase();
    this.clientes = this.clientesOriginal.filter(cliente =>
      cliente.cpf.includes(termo) ||
      cliente.nome.toLowerCase().includes(termo)
    );
  }

  resetarPesquisa() {
    this.termoPesquisa = '';
    this.clientes = [...this.clientesOriginal];
  }
}
