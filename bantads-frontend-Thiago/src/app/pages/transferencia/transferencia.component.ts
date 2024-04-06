import { Component } from '@angular/core';
import { TransferenciaService } from '../../service/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  numeroContaOrigem!: string;
  numeroContaDestino!: string;
  valorTransferencia!: number;

  constructor(private transferenciaService: TransferenciaService) { }

  transferir(): void {
    if (this.numeroContaOrigem && this.numeroContaDestino && this.valorTransferencia > 0) {
      this.transferenciaService.transferir(this.numeroContaOrigem, this.numeroContaDestino, this.valorTransferencia).subscribe(() => {
        console.log('Transferência realizada com sucesso!');
        // Atualizar dados na tela ou fazer outra ação necessária após a transferência
      }, error => {
        console.error('Erro ao realizar transferência:', error);
        // Lidar com o erro conforme necessário
      });
    } else {
      console.error('Número da conta de origem, número da conta de destino e valor da transferência são obrigatórios.');
    }
  }
}
