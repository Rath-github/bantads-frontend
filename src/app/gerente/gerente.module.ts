import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialGerenteComponent } from './tela-inicial-gerente/tela-inicial-gerente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarClienteTodosComponent } from './consultar-cliente-todos/consultar-cliente-todos.component';
import { ConsultarClienteMelhoresComponent } from './consultar-cliente-melhores/consultar-cliente-melhores.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TelaInicialGerenteComponent,
    ConsultarClienteComponent,
    ConsultarClienteTodosComponent,
    ConsultarClienteMelhoresComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ]
})
export class GerenteModule { }
