import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { GerenciarGerenteComponent } from './pages/gerenciar-gerente/gerenciar-gerente.component';
import { RelatorioClientesComponent } from './pages/relatorio-clientes/relatorio-clientes.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'autocadastro', component: AutocadastroComponent },
  { path: 'gerenciaGerente', component: GerenciarGerenteComponent},
  { path: 'relatorioCliente', component: RelatorioClientesComponent},
  { path: 'homeAdmin', component: HomeAdminComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
