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
  selector: 'app-consultar-cliente-melhores',
  templateUrl: './consultar-cliente-melhores.component.html',
  styleUrls: ['./consultar-cliente-melhores.component.css']
})
export class ConsultarClienteMelhoresComponent implements OnInit {
  clientes: DadosCliente[] = [];
  melhoresClientes: DadosCliente[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.http.get<DadosCliente[]>(`http://localhost:3000/clientes`)
      .subscribe(clientes => {
        this.clientes = clientes;
        this.atualizarMelhoresClientes();
      });
  }

  atualizarMelhoresClientes() {
    this.clientes.sort((a, b) => b.saldoConta - a.saldoConta);
    this.melhoresClientes = this.clientes.slice(0, 3);
  }

  mostrarDetalhes(cliente: DadosCliente) {
    // falta fazer esta pagina de dados do cliente...
    console.log("Detalhes do cliente:", cliente);
    alert("Dados do cliente...")
  }
}