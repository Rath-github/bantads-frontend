import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente/cliente.service';
import { z } from 'zod';
import { ClienteSchema } from '../../schema/cliente.schema'; // Substitua o caminho correto do arquivo
import { NgxMaskDirective, NgxMaskPipe  } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent {
  nome!: string;
  email!: string;
  cpf!: string;
  salario!: string;

  constructor(private clienteService: ClienteService) { }

  cadastrar(): void {
    try {
    
      const clienteValidado = ClienteSchema.parse({
        nome: this.nome,
        email: this.email,
        cpf: this.cpf,
        salario: parseFloat(this.salario)
      });

      this.clienteService.cadastrarCliente(clienteValidado)
        .subscribe((response: any) => {
          console.log('Cliente cadastrado com sucesso:', response);
         
        }, (error: any) => {
          console.error('Erro ao cadastrar cliente:', error);
          
        });
    } catch (error) {
      console.error('Erro ao validar dados do cliente:', error);
    
    }
  }
}