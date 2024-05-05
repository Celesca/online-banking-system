import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<any> {
    return this.usersService.findAll();
  }

  @Post('register')
  @HttpCode(201)
  create(@Body() body: RegisterDto): Promise<any> {
    return this.usersService.create(body);
  }
}
