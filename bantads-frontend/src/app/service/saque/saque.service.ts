import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {
  private apiUrl = 'http://localhost:3000/clientes'; // DEVEMOS ADD O ENDPOINT DE ACORDO COM CADA ROTA NO Watch db.json
  // de Onde vem as rotas?
  //Verificar rotas disponiveis no comando json-server --watch db.json &

  constructor(private http: HttpClient) { }

  sacar(numeroConta: string, valor: number): Observable<any> {
    const dadosSaque = { numeroConta, valor };
    // Utilizando a rota de clientes para o serviço de saque
    return this.http.post(this.apiUrl, dadosSaque);
  }
}