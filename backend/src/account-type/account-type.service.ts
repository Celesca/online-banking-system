import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountTypeService {
  findAll() {
    return `This action returns all accountType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountType`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountType`;
  }
}
