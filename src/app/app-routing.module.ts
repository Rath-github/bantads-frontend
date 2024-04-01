import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialGerenteComponent } from './gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';

const routes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/tela-inicial-gerente'},
  { path: 'gerente/tela-inicial-gerente', component: TelaInicialGerenteComponent },
  { path: 'gerente/consultar-cliente', component: ConsultarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
