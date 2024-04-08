import { Component } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { AutocadastroService } from 'src/app/service/autocadastro/autocadastro.service';
import { LoginSchema } from '../../schema/login.schema';
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
  
  validarCPF( cpfInserido : string ) {
    cpfInserido = cpfInserido.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

    // Verifica se o CPF tem 11 dígitos
    if (cpfInserido.length !== 11) {
        this.cpfValido = false;
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
    if (/^(\d)\1{10}$/.test(cpfInserido)) {
        this.cpfValido = false;
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfInserido.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let dv1 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica se o primeiro dígito verificador é igual ao CPF fornecido
    if (dv1 !== parseInt(cpfInserido.charAt(9))) {
        this.cpfValido = false;
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfInserido.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let dv2 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica se o segundo dígito verificador é igual ao CPF fornecido
    if (dv2 !== parseInt(cpfInserido.charAt(10))) {
        this.cpfValido = false;
        return false;
    }
    return true;
}


irAutocadastro() {
    if (this.validarCPF(this.cpfInserido)) {
      this.autocadastroService.recebeCpfUsuario(this.cpfInserido);
      this.router.navigate(['/autocadastro']);
    } else {
        console.log("CPF inválido");
    }
}
}
