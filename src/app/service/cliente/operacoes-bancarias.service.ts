import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacoesBancariasService {
  private clientesUrl = 'assets/clientes.json'; 

  constructor(private http: HttpClient) { }

  // MJSON CLIENTES LOAD
  getClientes(): Observable<any> {
    return this.http.get<any>(this.clientesUrl);
  }

  
  realizarSaque(clienteId: string, valorSaque: number): Observable<any> {
  
    return new Observable(observer => {
   
      setTimeout(() => {
        observer.next({ success: true });
        observer.complete();
      }, 1000); // atraso 1 sec
    });
  }
}