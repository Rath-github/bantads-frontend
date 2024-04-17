import { Component } from '@angular/core';
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
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {
  cpfConsultado: string = '';
  clienteFiltrado: DadosCliente | undefined;

  constructor(private http: HttpClient) { }

  consultarCliente() {
    // Removendo pontos e traços do CPF antes de consultar 
    const cpfSemFormato = this.cpfConsultado.replace(/[^\d]/g, '');
  
    this.http.get<DadosCliente[]>(`http://localhost:3000/clientes`)
      .subscribe(clientes => {
        const clienteEncontrado = clientes.find(cliente => {
          const cpfClienteSemFormato = cliente.cpf.replace(/[^\d]/g, '');
          return cpfClienteSemFormato === cpfSemFormato;
        });
  
        if (clienteEncontrado) {
          this.clienteFiltrado = clienteEncontrado;
        } else {
          this.clienteFiltrado = undefined;
          alert('Cliente não encontrado.');
        }
      });
  }
}
