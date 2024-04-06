import { Component } from '@angular/core';
import {ClienteService } from '../../service/cliente/cliente.service'

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.css']
})
export class ClienteHomeComponent {
  numeroConta!: string;
  valorDeposito!: number;

  clientName = 'John Doe'; // Substitua pelo nome do cliente real
  balance = -1000.50; // Substitua pelo saldo real do cliente

}