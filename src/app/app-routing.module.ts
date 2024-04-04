import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialGerenteComponent } from './gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarClienteMelhoresComponent } from './gerente/consultar-cliente-melhores/consultar-cliente-melhores.component';
import { ConsultarClienteTodosComponent } from './gerente/consultar-cliente-todos/consultar-cliente-todos.component';

const routes: Routes = [
  { path: 'gerente', redirectTo: 'gerente/tela-inicial-gerente'},
  { path: 'gerente/tela-inicial-gerente', component: TelaInicialGerenteComponent },
  { path: 'gerente/consultar-cliente', component: ConsultarClienteComponent },
  { path: 'gerente/consultar-cliente-melhores', component: ConsultarClienteMelhoresComponent},
  { path: 'gerente/consultar-cliente-todos', component: ConsultarClienteTodosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
