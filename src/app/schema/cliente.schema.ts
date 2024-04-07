import { z } from 'zod';

export const ClienteSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  cpf: z.string().length(14), // Assumindo que o CPF esteja formatado com pontos e traço (ex: 123.456.789-10)
  salario: z.number().min(0)
});
