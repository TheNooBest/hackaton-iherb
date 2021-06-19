import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    public async findUserById(id: number): Promise<User> {
        return this.userRepository.findOne({ id: id });
    }

    public async findUserByUsername(username: string): Promise<User> {
        return this.userRepository.findOne({ username: username });
    }

    public async save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}
