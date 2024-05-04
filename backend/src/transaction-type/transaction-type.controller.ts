import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TransactionTypeService } from './transaction-type.service';

@Controller('transaction-type')
export class TransactionTypeController {
  constructor(
    private readonly transactionTypeService: TransactionTypeService,
  ) {}

  @Get()
  findAll() {
    return this.transactionTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionTypeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionTypeService.remove(+id);
  }
}
