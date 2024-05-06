import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: string): Promise<Employee | null> {
    return this.employeeRepository.findOneBy({ employee_username: id });
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
