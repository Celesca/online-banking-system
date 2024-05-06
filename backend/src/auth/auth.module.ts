import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
import { CustomersModule } from 'src/customers/customers.module';
import { EmployeesModule } from 'src/employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { LocalStrategy } from './strategies/local.strategy';
import { Person } from 'src/persons/entities/person.entity';

@Module({
  imports: [
    CustomersModule,
    EmployeesModule,
    PassportModule,
    ConfigModule.forRoot(), // Ensure ConfigModule is imported here
    TypeOrmModule.forFeature([Customer, Employee, Person]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        return {
          secret,
          signOptions: { expiresIn: '60s' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    CustomersService,
    EmployeesService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
