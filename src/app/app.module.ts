import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    HttpClientModule
    NgxMaskModule.forRoot()
    RouterModule.forRoot([])
  ],
  providers: [RotasService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private rotasService: RotasService) {
    this.rotasService.configurarRotas();
}
