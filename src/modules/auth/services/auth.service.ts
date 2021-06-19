import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    public async validateUser(username: string, password: string): Promise<User | null> {
        const user: User = await this.usersService.findUserByUsername(username);
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
