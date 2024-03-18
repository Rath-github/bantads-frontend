import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  extrato: any[] = [];

  consultarExtrato() {
    // Simulação de consulta ao extrato com dados fictícios
    this.extrato = [
      { dataHora: '2024-03-15 09:00', operacao: 'Depósito', cliente: '', valor: 1000 },
      { dataHora: '2024-03-16 12:30', operacao: 'Transferência', cliente: 'Cliente Destino', valor: -500 },
      { dataHora: '2024-03-17 16:45', operacao: 'Saque', cliente: '', valor: -200 },
      { dataHora: '2024-03-18 10:20', operacao: 'Depósito', cliente: '', valor: 1500 }
    ];
  }
}

