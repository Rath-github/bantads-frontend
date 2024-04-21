import { Cliente } from "../cliente/cliente.module";

export class Gerente {
    nome : string = '';
    cpf : string = '';
    email : string = '';
    telefone : number = 0;
    clientes: Cliente[] = [];
    senha : string = '';
}