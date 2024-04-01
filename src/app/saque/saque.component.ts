import { Component, OnInit } from '@angular/core';
import { OperacoesBancariasService } from '../service/cliente/operacoes-bancarias.service'

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  clientes: any[] = [];
  saldoDisponivel: number = 0;
  valorSaque: number = 0;

  constructor(private operacoesService: OperacoesBancariasService) {}

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.operacoesService.getClientes().subscribe(data => {
      this.clientes = data.clientes;
      this.saldoDisponivel = this.clientes[0].saldo;
    });
  }

  realizarSaque() {
    if (this.valorSaque <= this.saldoDisponivel && this.valorSaque > 0) {
      this.operacoesService.realizarSaque(this.clientes[0].id, this.valorSaque).subscribe(response => {
        if (response.success) {
          this.saldoDisponivel -= this.valorSaque;
          alert('Saque realizado com sucesso!');
        } else {
          alert('Falha ao realizar o saque.');
        }
      });
    } else {
      alert('Saldo insuficiente para realizar o saque ou valor inválido.');
    }
  }
}