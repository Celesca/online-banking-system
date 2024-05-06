import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerRegisterDto } from './dto/customer-register.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(body: CustomerRegisterDto) {
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
