import { Controller, Get, Param, Delete } from '@nestjs/common';
import { LoanTypeService } from './loan-type.service';

@Controller('loan-type')
export class LoanTypeController {
  constructor(private readonly loanTypeService: LoanTypeService) {}

  @Get()
  findAll() {
    return this.loanTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanTypeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanTypeService.remove(+id);
  }
}
