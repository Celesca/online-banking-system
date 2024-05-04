import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionTypeService {
  findAll() {
    return `This action returns all transactionType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionType`;
  }
}
