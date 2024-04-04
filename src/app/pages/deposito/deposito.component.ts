import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {
  numeroConta!: string;
  valorDeposito!: number;

  constructor(private clienteService: ClienteService) { }

  depositar(): void {
    if (this.numeroConta && this.valorDeposito > 0) {
      this.clienteService.depositar(this.numeroConta, this.valorDeposito).subscribe(() => {
        console.log('Depósito realizado com sucesso!');
        // Atualizar dados na tela ou fazer outra ação necessária após o depósito
      }, error => {
        console.error('Erro ao realizar depósito:', error);
        // Lidar com o erro conforme necessário
      });
    } else {
      console.error('Número da conta e valor do depósito são obrigatórios.');
    }
  }
}
