import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ClienteHomeComponent } from './pages/cliente-home/cliente-home.component';
import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { FormsModule } from '@angular/forms'; 
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilClienteComponent } from './pages/perfil-cliente/perfil-cliente.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ConsultaExtratoComponent } from './pages/extrato/extrato.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { GerenciarGerenteComponent } from './pages/admin/gerenciar-gerente/gerenciar-gerente.component';
import { GerenteHomeComponent } from './pages/gerente/gerente-home/gerente-home.component';
import { RelatorioClientesComponent } from './pages/admin/relatorio-clientes/relatorio-clientes.component';
import { ConsultarClienteComponent } from './pages/gerente/consultar-cliente/consultar-cliente.component';
import { ConsultarClienteTodosComponent } from './pages/gerente/consultar-cliente-todos/consultar-cliente-todos.component';
import { ConsultarClienteMelhoresComponent } from './pages/gerente/consultar-cliente-melhores/consultar-cliente-melhores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteHomeComponent,
    AutocadastroComponent,
    HeaderComponent,
    FooterComponent,
    PerfilClienteComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    ConsultaExtratoComponent,
    HomeAdminComponent,
    GerenciarGerenteComponent,
    GerenteHomeComponent,
    RelatorioClientesComponent,
    ConsultarClienteComponent,
    ConsultarClienteTodosComponent,
    ConsultarClienteMelhoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
