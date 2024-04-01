import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { GerenciarGerenteComponent } from './pages/gerenciar-gerente/gerenciar-gerente.component';
import { RelatorioClientesComponent } from './pages/relatorio-clientes/relatorio-clientes.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocadastroComponent,
    GerenciarGerenteComponent,
    RelatorioClientesComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
