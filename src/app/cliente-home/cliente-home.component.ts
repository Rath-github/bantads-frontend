import { Component, OnInit } from '@angular/core';
import {ClienteService } from '../../service/cliente/cliente.service'

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.css']
})
export class ClienteHomeComponent implements OnInit{
  numeroConta!: string;
  valorDeposito!: number;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obterInformacoes().subscribe((cliente: any) => {
      this.clienteService = cliente.nome;
      this.clienteService = cliente.saldo;
    });
  }
}
