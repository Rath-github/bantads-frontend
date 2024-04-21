import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { ClienteService } from '../../service/cliente/cliente.service';
import { GerenteService } from 'src/app/service/gerente/gerente.service';
import { AutocadastroService } from '../../service/autocadastro/autrocadastro.service';
import { validarCliente} from 'src/app/schema/cliente.schema';
import { Cliente } from '../../models/cliente/cliente.module';
import { Gerente } from '../../models/gerente/gerente.module';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent {
  gerente! : Gerente;
  novoCliente : Cliente = new Cliente;
  cpf!: string;
  sucesso : boolean = false;
  erro : boolean = false;
  contaExistente : boolean = false;
  
  constructor(private clienteService: ClienteService, 
              private autocadastroService: AutocadastroService,
              private gerenteService : GerenteService,  
              private http: HttpClient) 
            { }

  ngOnInit(): void {
    this.autocadastroService.cpfUsuario$.subscribe((novoValor) => {
      this.novoCliente.cpf = novoValor;
    });}

  calcularLimite(): void{
    this.novoCliente.limite = this.novoCliente.salario / 2;
  }

  buscaCep(){
    if (this.novoCliente.endereco.cep && (this.novoCliente.endereco.cep.length === 8||this.novoCliente.endereco.cep.length === 9)) {
      this.http.get<any>(`https://viacep.com.br/ws/${this.novoCliente.endereco.cep}/json/`).subscribe((cep) => { 
        const endereco = cep;
        this.novoCliente.endereco.logradouro = cep.logradouro;
        this.novoCliente.endereco.bairro = cep.bairro;
        this.novoCliente.endereco.cidade = cep.localidade;
        this.novoCliente.endereco.estado = cep.uf;
        console.log(cep.uf);
      });
    }
  }
  
  cadastrar(): void {
    this.novoCliente.saldo = 0;
    this.novoCliente.status = "pendente";
    this.novoCliente.senha = "1234";
    this.calcularLimite();
  
    this.clienteService.novoNumeroConta().pipe(
      switchMap(numConta => {
        this.novoCliente.numConta = numConta;     //atribui o numero da conta
        return this.gerenteService.GerenteComMenosClientes();
      })
    ).subscribe(gerente => {
      if (gerente) {
        this.novoCliente.gerente = gerente.cpf;   //atribui o gerente com menos clientes
      } else {
        console.log("Não há gerentes.");
      }

      //verifica se o cpf informado ja pertence a uma conta caso nao ele cadatra o usuario
      this.clienteService.verificarContaExistente(this.cpf).subscribe(existe => {
        if (existe) {
          this.contaExistente = true;
        } else {
          let clienteValido = validarCliente(this.novoCliente);
          if (clienteValido) { //valida os dados com zod
            this.clienteService.cadastrarCliente(this.novoCliente)
              .subscribe({
                next: (response: any) => {
                  console.log('Cliente cadastrado com sucesso:', response);
                  this.sucesso = true;
                  this.erro = false;
                },
                error: (error: any) => {
                  console.error('Erro ao cadastrar cliente:', error);
                  this.sucesso = false;
                  this.erro = true;
                }
              });
           }else{
            console.log("erro na validacao")
          }
        }
      });
    });
  }
}