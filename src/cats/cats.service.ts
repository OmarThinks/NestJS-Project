import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findOne(id: number): Cat | undefined {
    const cat: Cat = {
      name: 'Cat ' + id,
      age: id,
      breed: 'Breed ' + id,
    };

    return cat;
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
