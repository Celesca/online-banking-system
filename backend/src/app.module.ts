import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { PersonsModule } from './persons/persons.module';

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
  ],
})
export class AppModule {}
