import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';

@Controller('account-type')
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Get()
  findAll() {
    return this.accountTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountTypeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountTypeService.remove(+id);
  }
}
