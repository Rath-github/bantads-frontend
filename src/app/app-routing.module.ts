import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SaqueComponent } from './saque/saque.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [{ path: 'saque', component: SaqueComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: "login", component: LoginComponent}, ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }