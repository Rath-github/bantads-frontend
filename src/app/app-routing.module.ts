import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';

const routes: Routes = [
  { path: 'autocadastro', component: AutocadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
