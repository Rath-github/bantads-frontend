import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(6)
});

export const cpfSchema = z.string().refine((cpf) => {
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
}, {
  message: 'CPF inválido'
});

export function validarCPF(cpfInserido: string): boolean {
  try {
      cpfSchema.parse(cpfInserido);
      return true;
  } catch (error) {
      return false;
  }
}