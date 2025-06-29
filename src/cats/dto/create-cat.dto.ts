import { z } from 'zod';

export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number().min(2, 'Age must be at least 2'),
    breed: z.string(),
  })
  .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;
