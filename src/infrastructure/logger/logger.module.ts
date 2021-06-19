import { Global, Module, RequestMethod } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import * as pino from 'pino';

@Global()
@Module({
    imports: [
        PinoLoggerModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                pinoHttp: {
                    logger: pino(config.get('logging'))
                },
                exclude: [{ method: RequestMethod.ALL, path: 'health' }]
            })
        })
    ]
})
export class LoggerModule {}
