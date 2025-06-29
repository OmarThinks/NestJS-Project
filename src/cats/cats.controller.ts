import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './DTOs/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(createCatDto);

    return 'This action adds a new cat';
  }
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);

    console.log(typeof params.id);

    return `This action returns a #${params.id} cat`;
  }
}
