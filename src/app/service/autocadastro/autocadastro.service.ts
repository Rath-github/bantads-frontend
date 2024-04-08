import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocadastroService {
  cpfUsuario! : string;

  private cpfUsuarioSubject = new BehaviorSubject<any>(false);
  cpfUsuario$ = this.cpfUsuarioSubject.asObservable();

  constructor() { }

  recebeCpfUsuario(novoValor: string) {
    this.cpfUsuarioSubject.next(novoValor);
  }
}
