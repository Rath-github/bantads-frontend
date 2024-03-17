import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  cliente = {
    nome: 'João da Silva',
    cpf: '123.456.789-01',
    salario: 5000,
    limite: 0,
    saldoNegativo: -200
  };

  gerente = 'Maria Souza';
  valorDeposito: number = 0;

  salvarAlteracoes(novoSalario: number): void {
    // Verifica se houve alteração no salário
    if (novoSalario !== this.cliente.salario) {
      // Calcula o novo limite
      const novoLimite = novoSalario * 0.2;

      // Verifica se o novo limite é menor que o saldo negativo
      if (novoLimite < this.cliente.saldoNegativo) {
        // Ajusta o limite para o saldo negativo
        this.cliente.limite = this.cliente.saldoNegativo;
      } else {
        // Define o novo limite
        this.cliente.limite = novoLimite;
      }
    }

    depositar(valor: number): void {
        this.cliente.saldoNegativo += valor;
      }      

    // Pode adicionar aqui lógicas adicionais de salvamento ou exibição de mensagens
  }
}
