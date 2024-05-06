import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  HttpCode,
  Body,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerRegisterDto } from './dto/customer-register.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('register')
  @HttpCode(201)
  create(@Body() body: CustomerRegisterDto) {
    return this.customersService.create(body);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
