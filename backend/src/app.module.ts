import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { PersonsModule } from './persons/persons.module';
import { EmployeesModule } from './employees/employees.module';
import { LoanTypeModule } from './loan-type/loan-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bank_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CustomersModule,
    PersonsModule,
    EmployeesModule,
    LoanTypeModule,
  ],
})
export class AppModule {}
