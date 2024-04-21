import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DadosCliente {
  nome: string;
  cpf: string;
  salario: number;
}

@Component({
  selector: 'app-gerente-home',
  templateUrl: './gerente-home.component.html',
  styleUrls: ['./gerente-home.component.css']
})
export class GerenteHomeComponent {
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
