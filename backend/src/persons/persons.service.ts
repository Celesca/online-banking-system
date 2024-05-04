import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }

  findByName(firstname: string, lastname: string) {
    return this.personRepository
      .createQueryBuilder('person')
      .where('person.firstname = :firstname', { firstname: firstname })
      .andWhere('person.lastname = :lastname', { lastname: lastname });
  }
}
