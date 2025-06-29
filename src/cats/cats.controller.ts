import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ZodValidationPipe } from 'pipes/ZodValidationPipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log('id:', id);
    console.log('id Type:', typeof id);

    const cat = this.catsService.findOne(id);
    return cat;
  }

  @Get('byUuid/:uuid')
  findOneByUUID(@Param('uuid', ParseUUIDPipe) uuid: string) {
    console.log('UUID:', uuid);
    console.log('UUID Type:', typeof uuid);

    const cat = this.catsService.findOne(1);
    return cat;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);

    console.log('createCatDto:', createCatDto);
    return createCatDto;
  }

  @Get()
  findAll(): Cat[] {
    const cats = this.catsService.findAll();

    return cats;
  }
}
