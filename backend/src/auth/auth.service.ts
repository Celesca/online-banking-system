import { HttpException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly customersService: CustomersService,
    private readonly employeesService: EmployeesService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    let user: Customer | Employee =
      await this.customersService.findOne(username);
    if (!user) {
      user = await this.employeesService.findOne(username);
    }
    if (user && bcrypt.compare(pass, user.password)) {
      return user;
    }
    throw new HttpException('User not found', 404);
  }

  async login(user: any) {
    if (!user) {
      throw new Error('User is undefined');
    }
    const payload = { username: user.username, sub: user.user_id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
