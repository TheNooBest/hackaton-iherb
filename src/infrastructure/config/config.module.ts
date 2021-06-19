import { Module } from '@nestjs/common';
import { ConfigModule as CoreConfigModule } from '@nestjs/config';

import dbConfig from './db.config';
import appConfig from './app.config';

@Module({
    imports: [
        CoreConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.ENV_FILE,
            expandVariables: true,
            load: [
                dbConfig,
                appConfig,
            ]
        })
    ],
    exports: [CoreConfigModule]
})
export class ConfigModule {}
