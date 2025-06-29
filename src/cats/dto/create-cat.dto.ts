import { z } from 'zod';
import { IsString, IsInt } from 'class-validator';

export const createCatSchema = z
  .object({
    name: z.string({ coerce: true }),
    age: z.number({ coerce: true }).min(2, 'Age must be at least 2'),
    breed: z.string({ coerce: true }),
  })
  .required();

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}

//export type CreateCatDto = z.infer<typeof createCatSchema>;
