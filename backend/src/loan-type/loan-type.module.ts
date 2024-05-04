import { Module } from '@nestjs/common';
import { LoanTypeService } from './loan-type.service';
import { LoanTypeController } from './loan-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanType } from './entities/loan-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanType])],
  controllers: [LoanTypeController],
  providers: [LoanTypeService],
})
export class LoanTypeModule {}
