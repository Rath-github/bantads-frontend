import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { DepositoService } from '../../service/deposito/deposito.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {
  numeroConta!: string;
  valorDeposito!: number;

  constructor(private depositoService: DepositoService) { }

  depositar(): void {
    if (this.numeroConta && this.valorDeposito > 0) {
      this.depositoService.depositar(this.numeroConta, this.valorDeposito).subscribe(() => {
        console.log('Depósito realizado com sucesso!');
     
      }, error => {
        console.error('Erro ao realizar depósito:', error);
        
      });
    } else {
      console.error('Número da conta e valor do depósito são obrigatórios.');
    }
  }
}