import { Module } from '@nestjs/common';

import { ConfigModule } from './infrastructure/config';
import { LoggerModule } from './infrastructure/logger';
import { DbModule } from './infrastructure/db';
import { HealthCheckModule } from './infrastructure/healthcheck';

import { ApiModule } from './api';

import { AppConfigService } from './app.config.service';

@Module({
    imports: [ConfigModule, LoggerModule, DbModule, HealthCheckModule, ApiModule],
    providers: [AppConfigService],
})
export class AppModule {}
