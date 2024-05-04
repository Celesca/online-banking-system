import { Test, TestingModule } from '@nestjs/testing';
import { PersonsService } from './persons.service';
import { Person } from './entities/person.entity';
import { TypeORMMySqlTestingModule } from 'src/test-utils/TypeORMMySqlTestingModule';

describe('PersonsService', () => {
  let service: PersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeORMMySqlTestingModule([Person])],
      providers: [PersonsService],
    }).compile();

    service = module.get<PersonsService>(PersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
