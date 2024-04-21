import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gerente } from '../../models/gerente/gerente.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor(private http: HttpClient) { }

  carregarGerentes(): Observable<Gerente[]> {
    return this.http.get<any[]>('http://localhost:3000/gerentes').pipe(
      map(gerentes => gerentes) // O operador map simplesmente retorna os gerentes
    );
  }

  GerenteComMenosClientes(): Observable<Gerente> {
    return this.carregarGerentes().pipe(
      map(gerentes => {
       
        
        let menorNumeroClientes = gerentes[0].clientes.length;
        let gerenteComMenosClientes = gerentes[0];
        for (let i = 1; i < gerentes.length; i++) {
          const numClientes = gerentes[i].clientes.length;
          if (numClientes < menorNumeroClientes) {
            menorNumeroClientes = numClientes;
            gerenteComMenosClientes = gerentes[i];
          }
        }
        return gerenteComMenosClientes;
      })
    );
  }

}