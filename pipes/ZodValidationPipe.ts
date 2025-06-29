import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(
    value: unknown, //metadata: ArgumentMetadata
  ) {
    try {
      const parsedValue = this.schema.parse(value) as unknown;
      return parsedValue;
    } catch {
      //console.error('Zod validation error:', e);
      throw new BadRequestException('Validation failed');
    }
  }
}
