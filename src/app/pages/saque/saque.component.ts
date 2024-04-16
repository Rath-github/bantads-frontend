import { Component } from '@angular/core';
import { SaqueService } from '../../service/saque/saque.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent {
  numeroConta!: string;
  valorSaque!: number;

  constructor(private saqueService: SaqueService) { }

  sacar(): void {
    if (this.numeroConta && this.valorSaque > 0) {
      this.saqueService.sacar(this.numeroConta, this.valorSaque).subscribe(() => {
        console.log('Saque realizado com sucesso!');
        // Atualizar dados na tela ou fazer outra ação necessária após o saque
      }, error => {
        console.error('Erro ao realizar saque:', error);
        // Lidar com o erro conforme necessário
      });
    } else {
      console.error('Número da conta e valor do saque são obrigatórios.');
    }
  }
}
