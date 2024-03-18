import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saldo: number = 0;

  consultarSaldo() {
    // Lógica para consultar saldo aqui
    this.saldo = 2500; // Valor fictício para o saldo atual
  }
}
