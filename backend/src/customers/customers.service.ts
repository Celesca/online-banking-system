import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerRegisterDto } from './dto/customer-register.dto';
import { Person } from 'src/persons/entities/person.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async checkId(nation_card_id) {
    const existedPerson = await this.personRepository.findOneBy({
      nation_card_id,
    });
    if (existedPerson) {
      return true;
    }
    throw new HttpException('No person found', 404);
  }

  async create(body: CustomerRegisterDto) {
    // Find the person with nation card id first
    const existedUser = await this.customerRepository.findOneBy({
      customer_username: body.username,
    });
    if (existedUser) {
      throw new HttpException('User already exists', 400);
    }
    const customer = this.customerRepository.create({
      customer_username: body.username,
      password: body.password,
      customer_salary: body.salary,
    });
    return this.customerRepository.save(customer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: string): Promise<Customer | null> {
    return this.customerRepository.findOneBy({ customer_username: id });
  }

  remove(id: string): Promise<void> {
    return this.customerRepository.delete(id).then(() => null);
  }
}
