import { Injectable } from '@nestjs/common';
import { User } from './entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor (
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username : username}})
    }

}
