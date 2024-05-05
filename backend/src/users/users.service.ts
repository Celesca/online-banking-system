import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username: username } });
  }

  async create(registerDto: RegisterDto): Promise<User> {
    const user = this.userRepository.create(registerDto);
    return this.userRepository.save(user);
  }
}
