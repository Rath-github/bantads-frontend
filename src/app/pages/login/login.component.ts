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
  username!: string;
  password!: string;
  cpfInserido! : string;
  cpfValido : boolean = true;

  constructor(private loginService: LoginService, private autocadastroService: AutocadastroService, private router: Router ) { }

  login(): void {
    const loginData = {
      username: this.username,
      password: this.password
    };

    try {
      const validatedData = LoginSchema.parse(loginData);
      this.loginService.login(validatedData).subscribe(response => {
        console.log('Login successful:', response);
        // Aqui você pode adicionar lógica para lidar com o sucesso do login
      }, error => {
        console.error('Login failed:', error);
        // Aqui você pode adicionar lógica para lidar com falhas de login
      });
    } catch (error) {
      if (error instanceof ZodError) {
        console.error('Validation error:', error.errors);
        // Aqui você pode adicionar lógica para lidar com erros de validação
      } else {
        console.error('Outro erro:', error);
        // Aqui você pode adicionar lógica para lidar com outros tipos de erro
      }
    }
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
