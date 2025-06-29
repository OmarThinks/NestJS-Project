import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

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
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    const cats = this.catsService.findAll();

    return cats;
  }
}
