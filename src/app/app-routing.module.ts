import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { ClienteHomeComponent } from './pages/cliente-home/cliente-home.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "clienteHome", component: ClienteHomeComponent },
  { path: "autocadastro", component: AutocadastroComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
