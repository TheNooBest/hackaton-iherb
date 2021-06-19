import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
    private readonly users: User[] = [
        {
            id: 1,
            username: 'aaa',
            password: 'aaa1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            username: 'bbb',
            password: 'bbb1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 3,
            username: 'ccc',
            password: 'ccc1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    public async validateUser(username: string, password: string): Promise<User | null> {
        // const user: User = await this.usersService.findUserByUsername(username);
        const user: User = this.users.find(u => u.username === username);
        if (!user || user.password !== password) {
            return null;
        }
        return user;
    }

    public async login(user: User): Promise<any> {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
