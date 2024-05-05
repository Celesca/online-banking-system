import { IsString } from 'class-validator';

export class signInDto {
  @IsString()
  username: string;

  password: string;
}
