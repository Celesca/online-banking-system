import { IsEmail } from 'class-validator';

export class CustomerRegisterDto {
  username: string;

  password: string;

  @IsEmail()
  email: string;

  phone: string;

  address: string;

  nation_card_id: string;

  firstname: string;

  lastname: string;

  salary: number;

  date_of_birth: Date;
}
