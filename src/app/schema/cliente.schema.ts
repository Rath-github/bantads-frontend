import { z } from 'zod';
import { Cliente } from '../models/cliente/cliente.module';

const EnderecoSchema = z.object({
    logradouro: z.string(),
    numero: z.string(),
    complemento: z.string(),
    cep: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    estado: z.string()
});

export const ClienteSchema = z.object({
    numConta: z.number(),
    status: z.string(),
    nome: z.string(),
    email: z.string().email(),
    cpf: z.string().refine(cpf => {
        cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) return false;

        // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
        if (/^(\d)\1{10}$/.test(cpf)) return false;

        // Calcula o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let dv1 = resto === 10 || resto === 11 ? 0 : resto;

        // Verifica se o primeiro dígito verificador é igual ao CPF fornecido
        if (dv1 !== parseInt(cpf.charAt(9))) return false;

        // Calcula o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let dv2 = resto === 10 || resto === 11 ? 0 : resto;

        // Verifica se o segundo dígito verificador é igual ao CPF fornecido
        if (dv2 !== parseInt(cpf.charAt(10))) return false;

        return true;
    }, { message: 'CPF inválido' }),
    endereco: EnderecoSchema,
    gerente: z.string(),
    telefone: z.string(),
    salario: z.number(),
    limite: z.number(),
    saldo: z.number()
});

export function validarCliente(novoCliente: Cliente): boolean {
  const resultadoValidacao = ClienteSchema.safeParse(novoCliente);
  return resultadoValidacao.success;
}
