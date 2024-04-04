import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get<any>('assets/dados.json');
  }

  getGerentes(): Observable<any> {
    return this.http.get<any>('assets/dados.json');
  }
}
