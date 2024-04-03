import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})

export class AutocadastroComponent {
  constructor(private http: HttpClient) {}

  novoCliente : Cliente = new Cliente;
  sucesso : boolean = false;
  erro : boolean = false;

  onSubmit(form: any): void {
    // Realizar a geração da senha aleatória de 4 dígitos
    const senhaAleatoria = Math.floor(1000 + Math.random() * 9000).toString();

    if(this.novoCliente.cpf && this.novoCliente.nome && this.novoCliente.email && this.novoCliente.telefone && this.novoCliente.salario){
    // Enviar os dados para o servidor via HTTP POST
    this.http.post('http://localhost:3000/clientes', this.novoCliente).subscribe(
      (response) => {
        // O usuário foi cadastrado com sucesso, e você pode lidar com a resposta aqui.
        console.log('Sucesso ao cadastrar usuário:', response);
        this.sucesso = true;
        this.erro = false;
        
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        this.sucesso = false;
        this.erro = true;
      }
    );
  }}
}
