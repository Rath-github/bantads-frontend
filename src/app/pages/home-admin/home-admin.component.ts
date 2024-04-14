import { Component } from '@angular/core';
import { Gerente } from 'src/app/models/gerente.model';
import { Cliente } from 'src/app/models/cliente.model';
import { GerenteService } from 'src/app/service/gerente/gerente.service';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  constructor(private gerenteService : GerenteService, private clienteService : ClienteService){}

  gerentes : Gerente[] = [];
  clientes : Cliente[] = [];
  verMaisGerentes : boolean = false;
  
  ngOnInit(): void {
    this.gerenteService.carregarGerentes().subscribe(gerentes=>{
      this.gerentes = gerentes;
    });

    this.clienteService.carregarClientes().subscribe(clientes=>{
      this.clientes = clientes;
    });
  }

  ClientesComSaldoPositivo(gerente : Gerente): number{
    let saldoPositivo = 0;

    gerente.clientes.forEach(cliente => {
      if(cliente.saldo > 0){
        saldoPositivo ++;
      }
    });
    return saldoPositivo;
  }

  ClientesComSaldoNegativo(gerente : Gerente): number{
    let saldoNegativo = 0;

    gerente.clientes.forEach(cliente => {
      if(cliente.saldo < 0){
        saldoNegativo ++;
      }
    });
    return saldoNegativo;
  }

}
