import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { ClienteHomeComponent } from './pages/cliente-home/cliente-home.component';
import { PerfilClienteComponent } from './pages/perfil-cliente/perfil-cliente.component';
import { DepositoComponent } from './pages/deposito/deposito.component'
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ConsultaExtratoComponent } from './pages/extrato/extrato.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { GerenciarGerenteComponent } from './pages/admin/gerenciar-gerente/gerenciar-gerente.component';
import { GerenteHomeComponent } from './pages/gerente/gerente-home/gerente-home.component'
import { ConsultarClienteComponent } from './pages/gerente/consultar-cliente/consultar-cliente.component'

export const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "clienteHome", component: ClienteHomeComponent },
  { path: "autocadastro", component: AutocadastroComponent },
  { path: "alterarPerfil", component: PerfilClienteComponent},
  { path: "deposito", component: DepositoComponent},
  { path: 'saque', component: SaqueComponent },
  { path: 'transferencia', component: TransferenciaComponent },
  { path: 'extrato', component: ConsultaExtratoComponent },
  { path: 'HomeAdmin', component: HomeAdminComponent },
  { path: 'GerenciarGerente', component: GerenciarGerenteComponent },
  { path: 'HomeGerente', component: GerenteHomeComponent},
  { path: 'gerente/consultar-cliente', component: ConsultarClienteComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
