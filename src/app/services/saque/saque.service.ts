import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {
  private apiUrl = 'http://localhost:3000/saque';

  constructor(private http: HttpClient) { }

  sacar(numeroConta: string, valor: number): Observable<any> {
    const dadosSaque = { numeroConta, valor };
    return this.http.post(`${this.apiUrl}/sacar`, dadosSaque);
  }
}