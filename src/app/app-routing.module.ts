import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ClienteHomeComponent } from './components/cliente-home/cliente-home.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "clienteHome", component: ClienteHomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
