import { Component } from '@angular/core';
import { ExtratoService } from '../../service/extrato/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ConsultaExtratoComponent {
  dataInicio: Date = new Date();
  dataFim: Date = new Date();
  extrato: any[] = [];
  mostrarMensagemNenhumExtrato: boolean = false;

  constructor(private extratoService: ExtratoService) { }

  consultarExtrato(): void {
    if (this.dataInicio && this.dataFim) {
      this.extratoService.consultarExtrato(this.dataInicio, this.dataFim).subscribe((result) => {
        this.extrato = result;
        this.mostrarMensagemNenhumExtrato = this.extrato.length === 0;
      }, error => {
        console.error('Erro ao consultar extrato:', error);
      });
    } else {
      console.error('Data de início e data de fim são obrigatórias.');
    }
  }
}