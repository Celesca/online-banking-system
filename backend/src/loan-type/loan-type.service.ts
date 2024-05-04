import { Injectable } from '@nestjs/common';

@Injectable()
export class LoanTypeService {
  findAll() {
    return `This action returns all loanType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loanType`;
  }

  remove(id: number) {
    return `This action removes a #${id} loanType`;
  }
}
