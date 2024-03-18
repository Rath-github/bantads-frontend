import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SaqueComponent } from './saque/saque.component';
const routes: Routes = [{ path: 'saque', component: SaqueComponent } ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }