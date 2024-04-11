import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.css']
})
export class ClienteHomeComponent implements OnInit {
  numeroConta!: string;
  valorDeposito!: number;

  clientName!: string; // Nome do cliente real será carregado do servidor
  balance!: number; // Saldo real do cliente será carregado do servidor

  constructor(private http: HttpClient, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientData();
  }

  loadClientData(): void {
    this.http.get<any>('http://localhost:3000/clientes').subscribe(data => {
      this.clientName = data.nome;
      this.balance = data.saldo;
    });
  }
}