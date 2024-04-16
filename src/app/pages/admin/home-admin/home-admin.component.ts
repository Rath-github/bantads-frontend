import { Component } from '@angular/core';
import { Gerente } from 'src/app/models/gerente/gerente.module';
import { Cliente } from 'src/app/models/cliente/cliente.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  gerentes: Gerente[];
  clientes: Cliente[];

  constructor(private http: HttpClient) {
    this.gerentes = [];
    this.clientes = [];
    this.fetchGerentes();
    this.fetchClientes();
  }

  fetchGerentes() {
    this.http.get<Gerente[]>('http://localhost:3000/gerentes')
      .subscribe(data => {
        this.gerentes = data;
      });
  }

  fetchClientes() {
    this.http.get<Cliente[]>('http://localhost:3000/clientes')
      .subscribe(data => {
        this.clientes = data;
      });
  }
}