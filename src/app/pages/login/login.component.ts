import { Component } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { LoginSchema } from '../../schema/login.schema';
import { z } from 'zod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private loginService: LoginService) { }

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
      if (z.instanceof(z.ZodError).check(error)) {
        console.error('Validation error:', error.errors);
        // Aqui você pode adicionar lógica para lidar com erros de validação
      }
    }
  }
}
