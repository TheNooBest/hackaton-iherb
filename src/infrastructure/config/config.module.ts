import { Module } from '@nestjs/common';
import { ConfigModule as CoreConfigModule } from '@nestjs/config';

import dbConfig from './db.config';
import appConfig from './app.config';
import jwtConfig from './jwt.config';

@Module({
    imports: [
        CoreConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.ENV_FILE,
            expandVariables: true,
            load: [
                dbConfig,
                appConfig,
                jwtConfig,
            ]
        })
    ],
    exports: [CoreConfigModule]
})
export class ConfigModule {}
