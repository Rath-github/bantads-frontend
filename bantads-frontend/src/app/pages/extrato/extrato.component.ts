import { Component } from '@angular/core';
import { ExtratoService } from '../../service/extrato/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ConsultaExtratoComponent {
  dataInicio: Date = new Date(); 
  dataFim: Date = new Date(); //DATA ATUAL
  extrato: any[] = [];

  constructor(private extratoService: ExtratoService) { }

  consultarExtrato(): void {
    if (this.dataInicio && this.dataFim) {
      this.extratoService.consultarExtrato(this.dataInicio, this.dataFim).subscribe((result) => {
        this.extrato = result;
      }, error => {
        console.error('Erro ao consultar extrato:', error);
       
      });
    } else {
      console.error('Data de início e data de fim são obrigatórias.');
    }
  }
}