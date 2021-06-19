import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

import { AuthService, UsersService } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
        ]),
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('jwt.secret'),
                signOptions: { expiresIn: '6000s' },
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
    exports: [UsersService, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
