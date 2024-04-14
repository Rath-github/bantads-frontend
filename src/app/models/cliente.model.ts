export class Cliente {
    numConta: number = 0;
    status: string = "";
    nome: string = "";
    email: string = "";
    cpf: string = "";
    endereco: any = {
        logradouro: "",
        numero: "",
        complemento: "",
        cep: "",
        bairro: "",
        cidade: "",
        estado: "",
      };
    gerente : string = "";
    telefone: string = "";
    salario: number = 0;
    limite : number = 0;
    saldo : number = 0;
    senha : string = "";
}
