import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.css']
})
export class ClienteHomeComponent {
  clientName = 'John Doe'; // Substitua pelo nome do cliente real
  balance = -1000.50; // Substitua pelo saldo real do cliente
}