import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const cpfSchema = z.string().refine((cpf) => {
  const cleanedCPF = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

  // Verifica se o CPF tem 11 dígitos
  if (cleanedCPF.length !== 11) return false;

  // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
  if (/^(\d)\1{10}$/.test(cleanedCPF)) return false;

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
      soma += parseInt(cleanedCPF.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let dv1 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica se o primeiro dígito verificador é igual ao CPF fornecido
  if (dv1 !== parseInt(cleanedCPF.charAt(9))) return false;

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
      soma += parseInt(cleanedCPF.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let dv2 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica se o segundo dígito verificador é igual ao CPF fornecido
  if (dv2 !== parseInt(cleanedCPF.charAt(10))) return false;

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
