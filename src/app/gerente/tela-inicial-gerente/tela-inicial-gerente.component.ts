import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DadosCliente {
  nome: string;
  cpf: string;
  salario: number;
}

@Component({
  selector: 'app-tela-inicial-gerente',
  templateUrl: './tela-inicial-gerente.component.html',
  styleUrls: ['./tela-inicial-gerente.component.css']
})
export class TelaInicialGerenteComponent implements OnInit {
  pedidosAutocadastro: DadosCliente[] = [];

  mostrarRecusarCard: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obterPedidosAutocadastro();
  }

  obterPedidosAutocadastro() {
    this.http.get<any[]>('http://localhost:3000/autocadastro')
      .subscribe(
        data => {
          if (Array.isArray(data) && data.length > 0) {
            this.pedidosAutocadastro = data.map((cliente: any) => {
              return {
                nome: cliente.nome,
                cpf: cliente.cpf,
                salario: cliente.salario
              };
            });
          } else {
            console.error('Dados de cliente inválidos no JSON:', data);
          }
        },
        error => {
          console.error('Erro ao obter dados do JSON:', error);
        }
      );
  }

  Aprovar() {
    alert("Cadastro aprovado!");
    // Adicionar lógica de Aprovação
  }

  Recusar() {
    alert("Cadastro recusado!");
    // Adicionar lógica de Reprovação
  }

  toggleRecusarCard() {
    this.mostrarRecusarCard = !this.mostrarRecusarCard;
  }
}