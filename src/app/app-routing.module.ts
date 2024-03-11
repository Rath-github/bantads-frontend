import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarPerfilComponent } from './alterar-perfil/alterar-perfil.component'; 

const routes: Routes = [
    { path: 'alterar-perfil', component: AlterarPerfilComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }