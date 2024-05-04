import { Injectable } from '@nestjs/common';

@Injectable()
export class LoanService {
  findAll() {
    return `This action returns all loan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
