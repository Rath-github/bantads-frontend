export class Cliente {
  nome: string = "";
  email: string = "";
  cpf: string = "";
  endereco: any = {
      tipo: "",
      logradouro: "",
      numero: "",
      complemento: "",
      cep: "",
      cidade: "",
      estado: "",
    };
  gerente : string = "";
  telefone: string = "";
  salario: number = 0;
  limite : number = 0;
  saldo : number = 0;
}