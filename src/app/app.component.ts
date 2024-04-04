import { Component, OnInit } from '@angular/core';
import { DadosService } from 'caminho-para-o-servico/dados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bantads';
  clientes: any[];
  gerentes: any[];

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.getClientes().subscribe(data => {
      this.clientes = data.clientes;
    });

    this.dadosService.getGerentes().subscribe(data => {
      this.gerentes = data.gerentes;
    });
  }
}
