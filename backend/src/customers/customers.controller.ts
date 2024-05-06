import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerRegisterDto } from './dto/customer-register.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('check_id')
  @HttpCode(200)
  checkId(@Body() body: { nation_card_id: string }) {
    return this.customersService.checkId(body.nation_card_id);
  }

  @Post('register')
  @HttpCode(201)
  create(@Body() body: CustomerRegisterDto) {
    return this.customersService.create(body);
  }
}
