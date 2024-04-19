import { Component } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { AutocadastroService } from 'src/app/service/autocadastro/autocadastro.service';
import { LoginSchema } from '../../schema/login.schema';
import { validarCPF } from '../../schema/login.schema';
import { NgxMaskDirective, NgxMaskPipe  } from 'ngx-mask';
import { Router } from '@angular/router';
import { z, ZodError } from 'zod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  cpfInserido! : string;
  cpfValido : boolean = true;

  constructor(private loginService: LoginService, private autocadastroService: AutocadastroService, private router: Router ) { }

  login(): void {
    const loginData = {
      email: this.email,
      password: this.password
    };
      //const validatedData = LoginSchema.parse(loginData);  
      this.loginService.verificaLogin(loginData);
  }
  

  formatarCPF(): void {
    let cpf = this.cpfInserido.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do CPF
    if (cpf.length > 3) {
      cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
    }
    if (cpf.length > 7) {
      cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
    }
    if (cpf.length > 11) {
      cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
    }
    this.cpfInserido = cpf;
  }
  
  validarCPF() {
    this.cpfValido = validarCPF(this.cpfInserido);
  }

irAutocadastro() {
    if (validarCPF(this.cpfInserido)) {
      this.autocadastroService.recebeCpfUsuario(this.cpfInserido);
      this.router.navigate(['/autocadastro']);
    } else {
        this.cpfValido = false;
        console.log("CPF inválido");
    }
}
}
